"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var control_component_1 = require('../../../templates/controls/control.component');
var themeColor_directive_1 = require('../../components/themeColor.directive');
var core_2 = require('@angular/core');
var index_1 = require('../../pipes/index');
var forms_1 = require('@angular/forms');
var templateValidator_service_1 = require('../../services/templateValidator.service');
var JSONBuilder_service_1 = require('../../../+builder/services/JSONBuilder.service');
var templateHttp_service_1 = require('../../services/templateHttp.service');
var result_directive_1 = require('../../components/result.directive');
var fetchResult_directive_1 = require('../../components/fetchResult.directive');
var analytic_service_1 = require('../../../templates/services/analytic.service');
var templateRenderer_service_1 = require('../../services/templateRenderer.service');
var Template3Component = (function () {
    function Template3Component(tvs, jsonBuilderHelper, _analyticService, _templateHttpService, _templateRenderer) {
        this.tvs = tvs;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._analyticService = _analyticService;
        this._templateHttpService = _templateHttpService;
        this._templateRenderer = _templateRenderer;
        this.selected_control = new core_1.EventEmitter();
        this.selected_section = new core_1.EventEmitter();
        this.selected_page = new core_1.EventEmitter();
        this.devMode = false;
        this.staticControls = {};
        this.validated = false;
        this.buttonShowHide = false;
    }
    Template3Component.prototype.ngOnInit = function () {
        this.staticControls = this._templateRenderer.getStaticControls();
        console.log('this.staticControls', this.staticControls);
    };
    Template3Component.prototype.ngAfterViewInit = function () { };
    Template3Component.prototype.scrollToTopProperties = function () {
        jQuery('.settings-header').trigger('click');
    };
    Template3Component.prototype.onResultLeadFormSubmit = function (event) {
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            var navigate_url = this.jsonBuilderHelper.getJSONBuilt().navigate_Url;
            this.sendMail().subscribe(function (success) {
                if (event) {
                    if (navigate_url.toLowerCase().indexOf('https://') !== 0 && navigate_url.toLowerCase().indexOf('http://') !== 0) {
                        navigate_url = 'https://' + navigate_url;
                    }
                    window.open(navigate_url, '_blank');
                }
            }, function (error) {
                if (event) {
                    if (navigate_url.toLowerCase().indexOf('https://') !== 0 && navigate_url.toLowerCase().indexOf('http://') !== 0) {
                        navigate_url = 'https://' + navigate_url;
                    }
                    window.open(navigate_url, '_blank');
                }
            });
        }
    };
    Template3Component.prototype.onLeadFormSubmit = function (result, show, hide) {
        this.validated = result;
        if (this.validated)
            this.onButtonClick(null, show, hide);
    };
    Template3Component.prototype.onButtonClick = function (event, show, hide) {
        if (this.validated && !this.devMode) {
            if (event) {
                jQuery(event.target).addClass('hide');
            }
            var divToShow = jQuery('.' + show);
            divToShow.removeClass('hide');
            var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
            if (iOS) {
                jQuery('html, body', parent.document).animate({
                    scrollTop: divToShow.offset().top
                }, 1000, function () {
                    if (hide) {
                        jQuery('.' + hide).addClass('hide');
                        window.scrollTo(0, divToShow.offset().top);
                    }
                });
            }
            else {
                jQuery('html, body').animate({
                    scrollTop: divToShow.offset().top
                }, 1000, function () {
                    if (hide) {
                        jQuery('.' + hide).addClass('hide');
                        jQuery(window).scrollTop(divToShow.offset().top);
                    }
                });
            }
            this.validated = false;
        }
    };
    Template3Component.prototype.getVisiblePages = function () {
        return this.JSON_Template.pages.filter(function (page) { return page.visible; });
    };
    Template3Component.prototype.getVisibleSections = function (page) {
        return page.sections.filter(function (section) { return (section.visible && page.type != 'Result'); });
    };
    Template3Component.prototype.getVisibleItems = function (section) {
        return section.items.filter(function (item) { return item.visible; });
    };
    Template3Component.prototype.onSubmit = function (form) {
        if (form.valid) {
            this.validated = true;
        }
        else {
            for (var i in form.controls) {
                form.controls[i].markAsTouched();
                form.controls[i].markAsDirty();
            }
            this.validated = false;
        }
    };
    Template3Component.prototype.selectControl = function (control) {
        this.selected_control.emit(control);
    };
    Template3Component.prototype.selectSection = function (section) {
        this.selected_section.emit(section);
    };
    Template3Component.prototype.selectpage = function (page) {
        this.selected_page.emit(page);
    };
    Template3Component.prototype.selectModel = function (event, type) {
        this.jsonBuilderHelper.setSelectedModel(type);
        event.stopPropagation();
    };
    Template3Component.prototype.sendMail = function () {
        var data = {
            calcId: this.jsonBuilderHelper.getJSONBuilt()._id,
            visitorId: this._analyticService.getVisitorKey(),
            type: 'Finish'
        };
        return this._templateHttpService.sendEmail(data);
    };
    Template3Component.prototype.openResult = function (resultCount, index) {
        for (var i = 1; i <= resultCount; i++) {
            if (i == index) {
                jQuery('#collapse' + i).addClass('in');
                jQuery('#collapse' + i).siblings().find("a").removeClass('collapsed');
            }
            else {
                jQuery('#collapse' + i).removeClass('in');
                jQuery('#collapse' + i).siblings().find("a").addClass('collapsed');
            }
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template3Component.prototype, "selected_control", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template3Component.prototype, "selected_section", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template3Component.prototype, "selected_page", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Template3Component.prototype, "JSON_Template", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Template3Component.prototype, "devMode", void 0);
    Template3Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home_loan_calculator',
            directives: [control_component_1.Control, forms_1.REACTIVE_FORM_DIRECTIVES, themeColor_directive_1.ThemeColor, result_directive_1.Result, fetchResult_directive_1.FetchResult],
            providers: [templateValidator_service_1.TemplateValidatorService],
            pipes: [index_1.SafeStyle],
            templateUrl: 'templatesHtml/template1.template.html',
            styleUrls: [
                'templatesHtml/assets/css/fonts.css',
                'templatesHtml/assets/css/style1.css',
                'templatesHtml/assets/css/responsive.css'
            ],
            encapsulation: core_2.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [templateValidator_service_1.TemplateValidatorService, JSONBuilder_service_1.JSONBuilder, analytic_service_1.AnalyticService, templateHttp_service_1.TemplateHttpService, templateRenderer_service_1.TemplateRendererService])
    ], Template3Component);
    return Template3Component;
}());
exports.Template3Component = Template3Component;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy90ZW1wbGF0ZUFsbC9ob21lX2xvYW5fY2FsY3VsYXRvci90ZW1wbGF0ZTMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEUsZUFBZSxDQUFDLENBQUE7QUFDOUYsa0NBQXNCLCtDQUErQyxDQUFDLENBQUE7QUFFdEUscUNBQTJCLHVDQUF1QyxDQUFDLENBQUE7QUFDbkUscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHNCQUEwQixtQkFBbUIsQ0FBQyxDQUFBO0FBQzlDLHNCQUFvRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3JFLDBDQUF5QywwQ0FBMEMsQ0FBQyxDQUFBO0FBQ3BGLG9DQUE0QixnREFBZ0QsQ0FBQyxDQUFBO0FBQzdFLHFDQUFvQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzFFLGlDQUF1QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQzNELHNDQUE0Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3JFLGlDQUFnQyw4Q0FBOEMsQ0FBQyxDQUFBO0FBQy9FLHlDQUF3Qyx5Q0FBeUMsQ0FBQyxDQUFBO0FBa0JsRjtJQVlJLDRCQUFvQixHQUE2QixFQUNyQyxpQkFBOEIsRUFDOUIsZ0JBQWlDLEVBQ2pDLG9CQUF5QyxFQUN6QyxpQkFBMEM7UUFKbEMsUUFBRyxHQUFILEdBQUcsQ0FBMEI7UUFDckMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUN6QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBZDVDLHFCQUFnQixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3RDLHFCQUFnQixHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQ3RDLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFcEMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUNsQyxt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cGxhdGUzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sfSBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvY29udHJvbHMvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BhZ2UsIFNlY3Rpb259IGZyb20gJy4vLi4vLi4vLi4vK2J1aWxkZXIvbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgVGhlbWVDb2xvciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGhlbWVDb2xvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2FmZVN0eWxlIH0gZnJvbSAnLi4vLi4vcGlwZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVGVtcGxhdGVWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGVWYWxpZGF0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vK2J1aWxkZXIvc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlSHR0cFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90ZW1wbGF0ZUh0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmVzdWx0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZldGNoUmVzdWx0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mZXRjaFJlc3VsdC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBbmFseXRpY1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvc2VydmljZXMvYW5hbHl0aWMuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUmVuZGVyZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGVSZW5kZXJlci5zZXJ2aWNlJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2hvbWVfbG9hbl9jYWxjdWxhdG9yJywvLydUZW1wLTEnXHJcbiAgICBkaXJlY3RpdmVzOiBbQ29udHJvbCwgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBUaGVtZUNvbG9yLCBSZXN1bHQsIEZldGNoUmVzdWx0XSxcclxuICAgIHByb3ZpZGVyczogW1RlbXBsYXRlVmFsaWRhdG9yU2VydmljZV0sXHJcbiAgICBwaXBlczogW1NhZmVTdHlsZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlc0h0bWwvdGVtcGxhdGUxLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgJ3RlbXBsYXRlc0h0bWwvYXNzZXRzL2Nzcy9mb250cy5jc3MnLFxyXG4gICAgICAgICd0ZW1wbGF0ZXNIdG1sL2Fzc2V0cy9jc3Mvc3R5bGUxLmNzcycsXHJcbiAgICAgICAgJ3RlbXBsYXRlc0h0bWwvYXNzZXRzL2Nzcy9yZXNwb25zaXZlLmNzcydcclxuICAgIF0sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICAgIC8vYXBwOmFueSA9IEFwcCgpO1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkX2NvbnRyb2wgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRfc2VjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZF9wYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQElucHV0KCkgSlNPTl9UZW1wbGF0ZTogYW55O1xyXG4gICAgQElucHV0KCkgZGV2TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljQ29udHJvbHM6IGFueSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBmb3JtczogRm9ybUdyb3VwW107XHJcbiAgICBwcml2YXRlIHZhbGlkYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBidXR0b25TaG93SGlkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHZzOiBUZW1wbGF0ZVZhbGlkYXRvclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfYW5hbHl0aWNTZXJ2aWNlOiBBbmFseXRpY1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfdGVtcGxhdGVIdHRwU2VydmljZTogVGVtcGxhdGVIdHRwU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF90ZW1wbGF0ZVJlbmRlcmVyOiBUZW1wbGF0ZVJlbmRlcmVyU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy9jb2RlXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIC8qIHN0YXRpYyBjb250cm9scyAqL1xyXG4gICAgICAgIHRoaXMuc3RhdGljQ29udHJvbHMgPSB0aGlzLl90ZW1wbGF0ZVJlbmRlcmVyLmdldFN0YXRpY0NvbnRyb2xzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuc3RhdGljQ29udHJvbHMnLHRoaXMuc3RhdGljQ29udHJvbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcblxyXG4gICAgc2Nyb2xsVG9Ub3BQcm9wZXJ0aWVzKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnNldHRpbmdzLWhlYWRlcicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbiAgICBvblJlc3VsdExlYWRGb3JtU3VibWl0KGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5zdGF0dXMgPT0gJ0xJVkUnKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXZpZ2F0ZV91cmwgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hdmlnYXRlX1VybDtcclxuICAgICAgICAgICAgdGhpcy5zZW5kTWFpbCgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRlX3VybC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2h0dHBzOi8vJykgIT09IDAgJiYgbmF2aWdhdGVfdXJsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaHR0cDovLycpICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZV91cmwgPSAnaHR0cHM6Ly8nICsgbmF2aWdhdGVfdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKG5hdmlnYXRlX3VybCwnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0ZV91cmwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdodHRwczovLycpICE9PSAwICYmIG5hdmlnYXRlX3VybC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2h0dHA6Ly8nKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVfdXJsID0gJ2h0dHBzOi8vJyArIG5hdmlnYXRlX3VybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihuYXZpZ2F0ZV91cmwsJ19ibGFuaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkxlYWRGb3JtU3VibWl0KHJlc3VsdDogYm9vbGVhbiwgc2hvdzogc3RyaW5nLCBoaWRlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRlZCA9IHJlc3VsdDtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZWQpXHJcbiAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhudWxsLCBzaG93LCBoaWRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50OiBhbnksIHNob3c6IHN0cmluZywgaGlkZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVkICYmICF0aGlzLmRldk1vZGUpIHtcclxuICAgICAgICAgICAgLy9oaWRlIGJ1dHRvblxyXG4gICAgICAgICAgICBpZiAoZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGV2ZW50LnRhcmdldCkuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3Nob3cgbmV4dCBkaXZcclxuICAgICAgICAgICAgdmFyIGRpdlRvU2hvdyA9IGpRdWVyeSgnLicgKyBzaG93KTtcclxuICAgICAgICAgICAgZGl2VG9TaG93LnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaU9TID0gKCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBhZHxpUGhvbmV8aVBvZCkvZykgPyB0cnVlIDogZmFsc2UgKTtcclxuICAgICAgICAgICAgaWYgKGlPUykge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JywgcGFyZW50LmRvY3VtZW50KS5hbmltYXRlKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogZGl2VG9TaG93Lm9mZnNldCgpLnRvcFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcuJyArIGhpZGUpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLGRpdlRvU2hvdy5vZmZzZXQoKS50b3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JykuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogZGl2VG9TaG93Lm9mZnNldCgpLnRvcFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJy4nICsgaGlkZSkuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcChkaXZUb1Nob3cub2Zmc2V0KCkudG9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vbWFrZSB2YWxpZGF0b3IgYXZhaWxhYmxlIGFnYWluXHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0VmlzaWJsZVBhZ2VzKCk6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5KU09OX1RlbXBsYXRlLnBhZ2VzLmZpbHRlcigocGFnZTogYW55KSA9PiBwYWdlLnZpc2libGUpO1xyXG4gICAgfVxyXG4gICAgZ2V0VmlzaWJsZVNlY3Rpb25zKHBhZ2U6IFBhZ2UpOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHBhZ2Uuc2VjdGlvbnMuZmlsdGVyKChzZWN0aW9uOiBhbnkpID0+IChzZWN0aW9uLnZpc2libGUgJiYgcGFnZS50eXBlICE9ICdSZXN1bHQnKSk7XHJcbiAgICB9XHJcbiAgICBnZXRWaXNpYmxlSXRlbXMoc2VjdGlvbjogU2VjdGlvbik6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gc2VjdGlvbi5pdGVtcy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS52aXNpYmxlKTtcclxuICAgIH1cclxuICAgIG9uU3VibWl0KGZvcm06IEZvcm1Hcm91cCkge1xyXG4gICAgICAgIGlmIChmb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGZvcm0uY29udHJvbHMpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0uY29udHJvbHNbaV0ubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5jb250cm9sc1tpXS5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogIC0tLVxyXG4gICAgICAgIHdoZW4gY29udHJvbCBpcyBzZWxlY3RlZCBmcm9tIHBhcnRpY2x1YXIgdGVtcGxhdGUgdGhlbiBpdCBwYXNzIHRvIHBhcmVudFxyXG4gICAgICAgIHRlbXBsYXRlIGNvbXBvbmVudCAoaS5lIFRlbXBsYXRlLnRzKSBhbmQgdGhlbiBwYXJlbnQgdGVtcGxhdGUgY29tcG9uZW50IHBhc3MgdG8gaG9tZSBjb21wb25lbnRcclxuICAgICovXHJcbiAgICBzZWxlY3RDb250cm9sKGNvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfY29udHJvbC5lbWl0KGNvbnRyb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFNlY3Rpb24oc2VjdGlvbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZF9zZWN0aW9uLmVtaXQoc2VjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0cGFnZShwYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkX3BhZ2UuZW1pdChwYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RNb2RlbChldmVudDogYW55LCB0eXBlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnNldFNlbGVjdGVkTW9kZWwodHlwZSk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIE1ldGhvZCBhZGRkZWQgZm9yIFNlbmRpbmcgZW1haWwgKiovXHJcbiAgICBzZW5kTWFpbCgpIHtcclxuICAgICAgICBsZXQgZGF0YTogYW55ID0ge1xyXG4gICAgICAgICAgICBjYWxjSWQ6IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLFxyXG4gICAgICAgICAgICB2aXNpdG9ySWQ6IHRoaXMuX2FuYWx5dGljU2VydmljZS5nZXRWaXNpdG9yS2V5KCksXHJcbiAgICAgICAgICAgIHR5cGU6ICdGaW5pc2gnXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVIdHRwU2VydmljZS5zZW5kRW1haWwoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblJlc3VsdChyZXN1bHRDb3VudDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcmVzdWx0Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSBpbmRleClcclxuICAgICAgICAgICAgICAgeyBqUXVlcnkoJyNjb2xsYXBzZScgKyBpKS5hZGRDbGFzcygnaW4nKTtcclxuICAgICAgICAgICAgICAgICBqUXVlcnkoJyNjb2xsYXBzZScgKyBpKS5zaWJsaW5ncygpLmZpbmQoXCJhXCIpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTt9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtqUXVlcnkoJyNjb2xsYXBzZScgKyBpKS5yZW1vdmVDbGFzcygnaW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNjb2xsYXBzZScgKyBpKS5zaWJsaW5ncygpLmZpbmQoXCJhXCIpLmFkZENsYXNzKCdjb2xsYXBzZWQnKTt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
