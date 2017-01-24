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
var recommendation_service_1 = require('../../services/recommendation.service');
var Template1Component = (function () {
    function Template1Component(tvs, jsonBuilderHelper, _analyticService, _templateHttpService, _templateRenderer, recommendationService) {
        this.tvs = tvs;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._analyticService = _analyticService;
        this._templateHttpService = _templateHttpService;
        this._templateRenderer = _templateRenderer;
        this.recommendationService = recommendationService;
        this.selected_control = new core_1.EventEmitter();
        this.selected_section = new core_1.EventEmitter();
        this.selected_page = new core_1.EventEmitter();
        this.devMode = false;
        this.staticControls = {};
        this.formulaResult = {};
        this.validated = false;
        this.buttonShowHide = false;
        if (!jsonBuilderHelper.getSelectedFormula() && jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation')
            recommendationService.getRecomendedResult();
    }
    Template1Component.prototype.ngOnInit = function () {
        this.staticControls = this._templateRenderer.getStaticControls();
    };
    Template1Component.prototype.ngAfterViewInit = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
        }
    };
    Template1Component.prototype.scrollToTopProperties = function () {
        jQuery('.settings-header').trigger('click');
    };
    Template1Component.prototype.onResultLeadFormSubmit = function (event) {
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            this.sendCTAAnalytics(event, 'Result');
            var navigate_url = this.jsonBuilderHelper.getJSONBuilt().navigate_Url;
            this.sendMail().subscribe(function (success) {
                if (event) {
                    if (navigate_url.toLowerCase().indexOf('https://') !== 0 && navigate_url.toLowerCase().indexOf('http://') !== 0) {
                        navigate_url = 'https://' + navigate_url;
                    }
                    window.location.href = navigate_url;
                }
            }, function (error) {
                if (event) {
                    if (navigate_url.toLowerCase().indexOf('https://') !== 0 && navigate_url.toLowerCase().indexOf('http://') !== 0) {
                        navigate_url = 'https://' + navigate_url;
                    }
                    window.location.href = navigate_url;
                }
            });
        }
    };
    Template1Component.prototype.onLeadFormSubmit = function (result, show, hide) {
        this.sendCTAAnalytics(result, 'Landing');
        this.validated = result;
        if (this.validated)
            this.onButtonClick(null, show, hide);
    };
    Template1Component.prototype.onButtonClick = function (event, show, hide) {
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
    Template1Component.prototype.getVisiblePages = function () {
        return this.JSON_Template.pages.filter(function (page) { return page.visible; });
    };
    Template1Component.prototype.getVisibleSections = function (page) {
        return page.sections.filter(function (section) { return (section.visible && page.type != 'Result'); });
    };
    Template1Component.prototype.getVisibleItems = function (section) {
        return section.items.filter(function (item) { return item.visible; });
    };
    Template1Component.prototype.onSubmit = function (form, sectionId) {
        var _this = this;
        if (form.valid) {
            this.validated = true;
            if (sectionId && this._analyticService.getVisitorKey() != '' && this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
                this._analyticService.saveSectionResult(sectionId)
                    .subscribe(function (response) {
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else {
            for (var i in form.controls) {
                form.controls[i].markAsTouched();
                form.controls[i].markAsDirty();
            }
            this.validated = false;
        }
    };
    Template1Component.prototype.selectControl = function (control) {
        this.selected_control.emit(control);
    };
    Template1Component.prototype.selectSection = function (section) {
        this.selected_section.emit(section);
    };
    Template1Component.prototype.selectpage = function (page) {
        this.selected_page.emit(page);
    };
    Template1Component.prototype.selectModel = function (event, type) {
        this.jsonBuilderHelper.setSelectedModel(type);
        event.stopPropagation();
    };
    Template1Component.prototype.sendMail = function () {
        var data = {
            calcId: this.jsonBuilderHelper.getJSONBuilt()._id,
            visitorId: this._analyticService.getVisitorKey(),
            type: 'Finish'
        };
        return this._templateHttpService.sendEmail(data);
    };
    Template1Component.prototype.sendCTAAnalytics = function (isCTA, page) {
        if (isCTA != true && isCTA != false) {
            ga('devteam.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + page + ' Page CTA', 'Clicked', this.jsonBuilderHelper.getJSONBuilt().url);
            if (this.jsonBuilderHelper.getJSONBuilt().ga)
                ga('userCustom.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + page + ' Page CTA', 'Clicked', this.jsonBuilderHelper.getJSONBuilt().url);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template1Component.prototype, "selected_control", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template1Component.prototype, "selected_section", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template1Component.prototype, "selected_page", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Template1Component.prototype, "JSON_Template", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Template1Component.prototype, "devMode", void 0);
    Template1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'one-page-slider',
            directives: [control_component_1.Control, forms_1.REACTIVE_FORM_DIRECTIVES, themeColor_directive_1.ThemeColor, result_directive_1.Result, fetchResult_directive_1.FetchResult],
            providers: [templateValidator_service_1.TemplateValidatorService],
            pipes: [index_1.SafeStyle, index_1.SafeHtml],
            templateUrl: 'templatesHtml/template1.template.html',
            styleUrls: [
                'templatesHtml/assets/css/bootstrap-datepicker.min.css',
                'templatesHtml/assets/css/selectize.default.css',
                'templatesHtml/assets/css/bootstrap-slider.min.css',
                'templatesHtml/assets/css/fonts.css',
                'templatesHtml/assets/css/style1.css',
                'templatesHtml/assets/css/responsive.css'
            ],
            encapsulation: core_2.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [templateValidator_service_1.TemplateValidatorService, JSONBuilder_service_1.JSONBuilder, analytic_service_1.AnalyticService, templateHttp_service_1.TemplateHttpService, templateRenderer_service_1.TemplateRendererService, recommendation_service_1.RecommendationService])
    ], Template1Component);
    return Template1Component;
}());
exports.Template1Component = Template1Component;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy90ZW1wbGF0ZUFsbC9vbmVfcGFnZV9zbGlkZXIvdGVtcGxhdGUxLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThFLGVBQWUsQ0FBQyxDQUFBO0FBQzlGLGtDQUF3QiwrQ0FBK0MsQ0FBQyxDQUFBO0FBRXhFLHFDQUEyQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ25FLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxzQkFBb0MsbUJBQW1CLENBQUMsQ0FBQTtBQUN4RCxzQkFBb0QsZ0JBQWdCLENBQUMsQ0FBQTtBQUNyRSwwQ0FBeUMsMENBQTBDLENBQUMsQ0FBQTtBQUNwRixvQ0FBNEIsZ0RBQWdELENBQUMsQ0FBQTtBQUM3RSxxQ0FBb0MscUNBQXFDLENBQUMsQ0FBQTtBQUMxRSxpQ0FBdUIsbUNBQW1DLENBQUMsQ0FBQTtBQUMzRCxzQ0FBNEIsd0NBQXdDLENBQUMsQ0FBQTtBQUNyRSxpQ0FBZ0MsOENBQThDLENBQUMsQ0FBQTtBQUMvRSx5Q0FBd0MseUNBQXlDLENBQUMsQ0FBQTtBQUNsRix1Q0FBc0MsdUNBQXVDLENBQUMsQ0FBQTtBQXNCOUU7SUFhSSw0QkFBb0IsR0FBNkIsRUFDckMsaUJBQThCLEVBQzlCLGdCQUFpQyxFQUNqQyxvQkFBeUMsRUFDekMsaUJBQTBDLEVBQzFDLHFCQUE0QztRQUxwQyxRQUFHLEdBQUgsR0FBRyxDQUEwQjtRQUNyQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWE7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBQ3pDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFDMUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQWhCOUMscUJBQWdCLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDdEMscUJBQWdCLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7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TyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEdBQUMsR0FBRyxHQUFDLElBQUksR0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5SixDQUFDO0lBQ0wsQ0FBQztJQWhNRDtRQUFDLGFBQU0sRUFBRTs7Z0VBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7Z0VBQUE7SUFDVDtRQUFDLGFBQU0sRUFBRTs7NkRBQUE7SUFDVDtRQUFDLFlBQUssRUFBRTs7NkRBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUF4Qlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsVUFBVSxFQUFFLENBQUMsMkJBQU8sRUFBRSxnQ0FBd0IsRUFBRSxpQ0FBVSxFQUFFLHlCQUFNLEVBQUUsbUNBQVcsQ0FBQztZQUNoRixTQUFTLEVBQUUsQ0FBQyxvREFBd0IsQ0FBQztZQUNyQyxLQUFLLEVBQUUsQ0FBQyxpQkFBUyxFQUFFLGdCQUFRLENBQUM7WUFDNUIsV0FBVyxFQUFFLHVDQUF1QztZQUNwRCxTQUFTLEVBQUU7Z0JBQ1AsdURBQXVEO2dCQUN2RCxnREFBZ0Q7Z0JBQ2hELG1EQUFtRDtnQkFDbkQsb0NBQW9DO2dCQUNwQyxxQ0FBcUM7Z0JBQ3JDLHlDQUF5QzthQUM1QztZQUNELGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1NBQ3hDLENBQUM7OzBCQUFBO0lBcU1GLHlCQUFDO0FBQUQsQ0FuTUEsQUFtTUMsSUFBQTtBQW5NWSwwQkFBa0IscUJBbU05QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy90ZW1wbGF0ZUFsbC9vbmVfcGFnZV9zbGlkZXIvdGVtcGxhdGUxLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlcy9jb250cm9scy9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2UsIFNlY3Rpb24gfSBmcm9tICcuLy4uLy4uLy4uLytidWlsZGVyL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IFRoZW1lQ29sb3IgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RoZW1lQ29sb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2FmZVN0eWxlLCBTYWZlSHRtbCB9IGZyb20gJy4uLy4uL3BpcGVzL2luZGV4JztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlVmFsaWRhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZUh0dHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGVIdHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Jlc3VsdC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGZXRjaFJlc3VsdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmV0Y2hSZXN1bHQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQW5hbHl0aWNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL3NlcnZpY2VzL2FuYWx5dGljLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVJlbmRlcmVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlUmVuZGVyZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFJlY29tbWVuZGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlY29tbWVuZGF0aW9uLnNlcnZpY2UnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgZ2E6IEZ1bmN0aW9uO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdvbmUtcGFnZS1zbGlkZXInLC8vJ1RlbXAtMSdcclxuICAgIGRpcmVjdGl2ZXM6IFtDb250cm9sLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIFRoZW1lQ29sb3IsIFJlc3VsdCwgRmV0Y2hSZXN1bHRdLFxyXG4gICAgcHJvdmlkZXJzOiBbVGVtcGxhdGVWYWxpZGF0b3JTZXJ2aWNlXSxcclxuICAgIHBpcGVzOiBbU2FmZVN0eWxlLCBTYWZlSHRtbF0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlc0h0bWwvdGVtcGxhdGUxLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgJ3RlbXBsYXRlc0h0bWwvYXNzZXRzL2Nzcy9ib290c3RyYXAtZGF0ZXBpY2tlci5taW4uY3NzJyxcclxuICAgICAgICAndGVtcGxhdGVzSHRtbC9hc3NldHMvY3NzL3NlbGVjdGl6ZS5kZWZhdWx0LmNzcycsXHJcbiAgICAgICAgJ3RlbXBsYXRlc0h0bWwvYXNzZXRzL2Nzcy9ib290c3RyYXAtc2xpZGVyLm1pbi5jc3MnLFxyXG4gICAgICAgICd0ZW1wbGF0ZXNIdG1sL2Fzc2V0cy9jc3MvZm9udHMuY3NzJyxcclxuICAgICAgICAndGVtcGxhdGVzSHRtbC9hc3NldHMvY3NzL3N0eWxlMS5jc3MnLFxyXG4gICAgICAgICd0ZW1wbGF0ZXNIdG1sL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3MnXHJcbiAgICBdLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlMUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICAvL2FwcDphbnkgPSBBcHAoKTtcclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZF9jb250cm9sID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkX3NlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRfcGFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBJbnB1dCgpIEpTT05fVGVtcGxhdGU6IGFueTtcclxuICAgIEBJbnB1dCgpIGRldk1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpY0NvbnRyb2xzOiBhbnkgPSB7fTtcclxuICAgIHByaXZhdGUgZm9ybXVsYVJlc3VsdDogYW55ID0ge307XHJcbiAgICBwcml2YXRlIGZvcm1zOiBGb3JtR3JvdXBbXTtcclxuICAgIHByaXZhdGUgdmFsaWRhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGJ1dHRvblNob3dIaWRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0dnM6IFRlbXBsYXRlVmFsaWRhdG9yU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIF9hbmFseXRpY1NlcnZpY2U6IEFuYWx5dGljU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF90ZW1wbGF0ZUh0dHBTZXJ2aWNlOiBUZW1wbGF0ZUh0dHBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3RlbXBsYXRlUmVuZGVyZXI6IFRlbXBsYXRlUmVuZGVyZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVjb21tZW5kYXRpb25TZXJ2aWNlOiBSZWNvbW1lbmRhdGlvblNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIGlmICghanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRGb3JtdWxhKCkgJiYganNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGVtcGxhdGVUeXBlID09ICdSZWNvbW1lbmRhdGlvbicpXHJcbiAgICAgICAgICAgIHJlY29tbWVuZGF0aW9uU2VydmljZS5nZXRSZWNvbWVuZGVkUmVzdWx0KCk7XHJcbiAgICAgICAgLy9jb2RlXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLyogc3RhdGljIGNvbnRyb2xzICovXHJcbiAgICAgICAgdGhpcy5zdGF0aWNDb250cm9scyA9IHRoaXMuX3RlbXBsYXRlUmVuZGVyZXIuZ2V0U3RhdGljQ29udHJvbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0nUmVjb21tZW5kYXRpb24nKXtcclxuICAgICAgICAgICAgLy8gY29kZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBzY3JvbGxUb1RvcFByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2V0dGluZ3MtaGVhZGVyJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH1cclxuICAgIG9uUmVzdWx0TGVhZEZvcm1TdWJtaXQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnN0YXR1cyA9PSAnTElWRScpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VuZENUQUFuYWx5dGljcyhldmVudCwnUmVzdWx0Jyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgbmF2aWdhdGVfdXJsID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYXZpZ2F0ZV9Vcmw7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZE1haWwoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAoc3VjY2VzczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0ZV91cmwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdodHRwczovLycpICE9PSAwICYmIG5hdmlnYXRlX3VybC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2h0dHA6Ly8nKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVfdXJsID0gJ2h0dHBzOi8vJyArIG5hdmlnYXRlX3VybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5hdmlnYXRlX3VybDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0ZV91cmwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdodHRwczovLycpICE9PSAwICYmIG5hdmlnYXRlX3VybC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2h0dHA6Ly8nKSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVfdXJsID0gJ2h0dHBzOi8vJyArIG5hdmlnYXRlX3VybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5hdmlnYXRlX3VybDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25MZWFkRm9ybVN1Ym1pdChyZXN1bHQ6IGJvb2xlYW4sIHNob3c6IHN0cmluZywgaGlkZTogc3RyaW5nKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZW5kQ1RBQW5hbHl0aWNzKHJlc3VsdCwgJ0xhbmRpbmcnKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZWQgPSByZXN1bHQ7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVkKVxyXG4gICAgICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2sobnVsbCwgc2hvdywgaGlkZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdXR0b25DbGljayhldmVudDogYW55LCBzaG93OiBzdHJpbmcsIGhpZGU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlZCAmJiAhdGhpcy5kZXZNb2RlKSB7XHJcbiAgICAgICAgICAgIC8vaGlkZSBidXR0b25cclxuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoZXZlbnQudGFyZ2V0KS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vc2hvdyBuZXh0IGRpdlxyXG4gICAgICAgICAgICB2YXIgZGl2VG9TaG93ID0galF1ZXJ5KCcuJyArIHNob3cpO1xyXG4gICAgICAgICAgICBkaXZUb1Nob3cucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpT1MgPSAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQYWR8aVBob25lfGlQb2QpL2cpID8gdHJ1ZSA6IGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKGlPUykge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCdodG1sLCBib2R5JywgcGFyZW50LmRvY3VtZW50KS5hbmltYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBkaXZUb1Nob3cub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnLicgKyBoaWRlKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGRpdlRvU2hvdy5vZmZzZXQoKS50b3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IGRpdlRvU2hvdy5vZmZzZXQoKS50b3BcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcuJyArIGhpZGUpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoZGl2VG9TaG93Lm9mZnNldCgpLnRvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvL21ha2UgdmFsaWRhdG9yIGF2YWlsYWJsZSBhZ2FpblxyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFZpc2libGVQYWdlcygpOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuSlNPTl9UZW1wbGF0ZS5wYWdlcy5maWx0ZXIoKHBhZ2U6IGFueSkgPT4gcGFnZS52aXNpYmxlKTtcclxuICAgIH1cclxuICAgIGdldFZpc2libGVTZWN0aW9ucyhwYWdlOiBQYWdlKTogYW55W10ge1xyXG4gICAgICAgIHJldHVybiBwYWdlLnNlY3Rpb25zLmZpbHRlcigoc2VjdGlvbjogYW55KSA9PiAoc2VjdGlvbi52aXNpYmxlICYmIHBhZ2UudHlwZSAhPSAnUmVzdWx0JykpO1xyXG4gICAgfVxyXG4gICAgZ2V0VmlzaWJsZUl0ZW1zKHNlY3Rpb246IFNlY3Rpb24pOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHNlY3Rpb24uaXRlbXMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0udmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgICBvblN1Ym1pdChmb3JtOiBGb3JtR3JvdXAsIHNlY3Rpb25JZDogYW55KSB7XHJcbiAgICAgICAgaWYgKGZvcm0udmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlY3Rpb25JZCAmJiB0aGlzLl9hbmFseXRpY1NlcnZpY2UuZ2V0VmlzaXRvcktleSgpICE9ICcnICYmIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuc3RhdHVzID09ICdMSVZFJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYW5hbHl0aWNTZXJ2aWNlLnNhdmVTZWN0aW9uUmVzdWx0KHNlY3Rpb25JZClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gJ0FycmF5IFVwZGF0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5hbHl0aWNTZXJ2aWNlLnJlSW5pdFZpc2l0b3JBbnN3ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGZvcm0uY29udHJvbHMpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0uY29udHJvbHNbaV0ubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybS5jb250cm9sc1tpXS5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogIC0tLVxyXG4gICAgICAgIHdoZW4gY29udHJvbCBpcyBzZWxlY3RlZCBmcm9tIHBhcnRpY2x1YXIgdGVtcGxhdGUgdGhlbiBpdCBwYXNzIHRvIHBhcmVudFxyXG4gICAgICAgIHRlbXBsYXRlIGNvbXBvbmVudCAoaS5lIFRlbXBsYXRlLnRzKSBhbmQgdGhlbiBwYXJlbnQgdGVtcGxhdGUgY29tcG9uZW50IHBhc3MgdG8gaG9tZSBjb21wb25lbnRcclxuICAgICovXHJcbiAgICBzZWxlY3RDb250cm9sKGNvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfY29udHJvbC5lbWl0KGNvbnRyb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFNlY3Rpb24oc2VjdGlvbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZF9zZWN0aW9uLmVtaXQoc2VjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0cGFnZShwYWdlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkX3BhZ2UuZW1pdChwYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RNb2RlbChldmVudDogYW55LCB0eXBlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnNldFNlbGVjdGVkTW9kZWwodHlwZSk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIE1ldGhvZCBhZGRkZWQgZm9yIFNlbmRpbmcgZW1haWwgKiovXHJcbiAgICBzZW5kTWFpbCgpIHtcclxuICAgICAgICBsZXQgZGF0YTogYW55ID0ge1xyXG4gICAgICAgICAgICBjYWxjSWQ6IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLFxyXG4gICAgICAgICAgICB2aXNpdG9ySWQ6IHRoaXMuX2FuYWx5dGljU2VydmljZS5nZXRWaXNpdG9yS2V5KCksXHJcbiAgICAgICAgICAgIHR5cGU6ICdGaW5pc2gnXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVIdHRwU2VydmljZS5zZW5kRW1haWwoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZENUQUFuYWx5dGljcyhpc0NUQTogYW55LCBwYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZihpc0NUQSE9dHJ1ZSAmJiBpc0NUQSE9ZmFsc2UpIHtcclxuICAgICAgICAgICAgLy9PdXJzXHJcbiAgICAgICAgICAgIGdhKCdkZXZ0ZWFtLnNlbmQnLCAnZXZlbnQnLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUrJyAnK3BhZ2UrJyBQYWdlIENUQScsICdDbGlja2VkJywgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS51cmwpO1xyXG4gICAgICAgICAgICAvL1VzZXJzXHJcbiAgICAgICAgICAgIGlmKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZ2EpXHJcbiAgICAgICAgICAgICAgICBnYSgndXNlckN1c3RvbS5zZW5kJywgJ2V2ZW50JywgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lKycgJytwYWdlKycgUGFnZSBDVEEnLCAnQ2xpY2tlZCcsIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
