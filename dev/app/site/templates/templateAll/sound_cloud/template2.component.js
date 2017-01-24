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
var analytic_service_1 = require('../../../templates/services/analytic.service');
var templateRenderer_service_1 = require('../../services/templateRenderer.service');
var Template2Component = (function () {
    function Template2Component(tvs, jsonBuilderHelper, _analyticService, _templateHttpService, _templateRenderer) {
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
        this.counter = 0;
        this.validated = false;
        this.showResult = false;
        this.buttonShowHide = false;
    }
    Template2Component.prototype.ngOnInit = function () {
        this.staticControls = this._templateRenderer.getStaticControls();
    };
    Template2Component.prototype.mobilestickyRemove = function () {
        jQuery(".mobile-result-link").hide();
        jQuery(".page_1").removeClass("mobile-result-sticky");
        jQuery(".page_2").removeClass("mobile-result-sticky");
        jQuery(".mobile-result-linkAdd").css('display', 'block');
        jQuery('html,body').animate({ scrollTop: jQuery(".page_2").offset().top }, 800);
    };
    Template2Component.prototype.mobilestickyAdd = function () {
        jQuery(".mobile-result-linkAdd").hide();
        jQuery(".mobile-result-link").show();
        jQuery(".page_1").addClass("mobile-result-sticky");
        jQuery(".page_2").addClass("mobile-result-sticky");
        jQuery('html,body').animate({ scrollTop: jQuery(".page_1").offset().top }, 800);
    };
    Template2Component.prototype.ngAfterViewInit = function () {
        var self = this;
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 160) {
                if (self.showResult)
                    jQuery(".page_2").addClass("result-fixed");
            }
            else {
                jQuery(".page_2").removeClass("result-fixed");
            }
        });
    };
    Template2Component.prototype.scrollToTopProperties = function () {
        jQuery('.settings-header').trigger('click');
    };
    Template2Component.prototype.onResultLeadFormSubmit = function (event) {
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
    Template2Component.prototype.onLeadFormSubmit = function (result, show, hide) {
        this.sendCTAAnalytics(result, 'Landing');
        this.validated = result;
        if (this.validated)
            this.onButtonClick(null, show, hide);
    };
    Template2Component.prototype.onButtonClick = function (event, show, hide) {
        var _this = this;
        console.log(show);
        if (this.validated && !this.devMode) {
            if (event)
                jQuery(event.target).addClass('hide');
            var divToShow = jQuery('.' + show);
            divToShow.removeClass('hide');
            jQuery('.page-logo').removeClass('hide');
            jQuery('.page_2').removeClass('hide');
            jQuery('html, body').animate({
                scrollTop: divToShow.offset().top
            }, 1000, function () {
                if (hide) {
                    jQuery('.' + hide).addClass('hide');
                    jQuery(window).scrollTop(divToShow.offset().top);
                    _this.showResult = true;
                }
            });
            this.validated = false;
        }
    };
    Template2Component.prototype.getLandingPage = function () {
        return this.JSON_Template.pages.filter(function (page) { return page.visible && page.type == 'Landing'; });
    };
    Template2Component.prototype.getVisiblePages = function () {
        return this.JSON_Template.pages.filter(function (page) { return page.visible && page.type != 'Landing'; });
    };
    Template2Component.prototype.getVisibleItems = function (section) {
        return section.items.filter(function (item) { return item.visible; });
    };
    Template2Component.prototype.getVisibleSections = function (page) {
        return page.sections.filter(function (section) { return section.visible; });
    };
    Template2Component.prototype.onSubmit = function (form) {
        if (form.valid)
            this.validated = true;
    };
    Template2Component.prototype.selectControl = function (control) {
        this.selected_control.emit(control);
    };
    Template2Component.prototype.selectSection = function (section) {
        this.selected_section.emit(section);
    };
    Template2Component.prototype.selectpage = function (page) {
        this.selected_page.emit(page);
    };
    Template2Component.prototype.selectModel = function (event, type) {
        this.jsonBuilderHelper.setSelectedModel(type);
        event.stopPropagation();
    };
    Template2Component.prototype.sendMail = function () {
        var data = {
            calcId: this.jsonBuilderHelper.getJSONBuilt()._id,
            visitorId: this._analyticService.getVisitorKey(),
            type: 'Finish'
        };
        return this._templateHttpService.sendEmail(data);
    };
    Template2Component.prototype.sendCTAAnalytics = function (isCTA, page) {
        if (isCTA != true && isCTA != false) {
            ga('devteam.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + page + ' Page CTA', 'Clicked', this.jsonBuilderHelper.getJSONBuilt().url);
            if (this.jsonBuilderHelper.getJSONBuilt().ga)
                ga('userCustom.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + page + ' Page CTA', 'Clicked', this.jsonBuilderHelper.getJSONBuilt().url);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template2Component.prototype, "selected_control", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template2Component.prototype, "selected_section", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Template2Component.prototype, "selected_page", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Template2Component.prototype, "JSON_Template", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Template2Component.prototype, "devMode", void 0);
    Template2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sound-cloud',
            directives: [control_component_1.Control, forms_1.REACTIVE_FORM_DIRECTIVES, themeColor_directive_1.ThemeColor],
            providers: [templateValidator_service_1.TemplateValidatorService],
            pipes: [index_1.SafeStyle],
            templateUrl: 'templatesHtml/template2.template.html',
            styleUrls: [
                'templatesHtml/assets/css/bootstrap-datepicker.min.css',
                'templatesHtml/assets/css/selectize.default.css',
                'templatesHtml/assets/css/bootstrap-slider.min.css',
                'templatesHtml/assets/css/fonts.css',
                'templatesHtml/assets/css/responsive.css',
                'templatesHtml/assets/css/style.css',
                'templatesHtml/assets/css/style1.css'
            ],
            encapsulation: core_2.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [templateValidator_service_1.TemplateValidatorService, JSONBuilder_service_1.JSONBuilder, analytic_service_1.AnalyticService, templateHttp_service_1.TemplateHttpService, templateRenderer_service_1.TemplateRendererService])
    ], Template2Component);
    return Template2Component;
}());
exports.Template2Component = Template2Component;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy90ZW1wbGF0ZUFsbC9zb3VuZF9jbG91ZC90ZW1wbGF0ZTIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBOEUsZUFBZSxDQUFDLENBQUE7QUFDOUYsa0NBQXNCLCtDQUErQyxDQUFDLENBQUE7QUFFdEUscUNBQTJCLHVDQUF1QyxDQUFDLENBQUE7QUFDbkUscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHNCQUEwQixtQkFBbUIsQ0FBQyxDQUFBO0FBQzlDLHNCQUFvRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3JFLDBDQUF5QywwQ0FBMEMsQ0FBQyxDQUFBO0FBQ3BGLG9DQUE0QixnREFBZ0QsQ0FBQyxDQUFBO0FBQzdFLHFDQUFvQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzFFLGlDQUFnQyw4Q0FBOEMsQ0FBQyxDQUFBO0FBQy9FLHlDQUF3Qyx5Q0FBeUMsQ0FBQyxDQUFBO0FBd0JsRjtJQWNJLDRCQUFvQixHQUE2QixFQUNyQyxpQkFBOEIsRUFDOUIsZ0JBQWlDLEVBQ2pDLG9CQUF5QyxFQUN6QyxpQkFBMEM7UUFKbEMsUUFBRyxHQUFILEdBQUcsQ0FBMEI7UUFDckMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUN6QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBaEI1QyxxQkFBZ0IsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN0QyxxQkFBZ0IsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN0QyxrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRXBDLFlBQU8sR0FBUSxLQUFLLENBQUM7UUFDOUIsbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDbEIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVuQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsbUJBQWMsR0FBWSxLQUFLLENBQUM7SUFTeEMsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3JFLENBQUM7SUFDRCwrQ0FBa0IsR0FBbEI7UUFDSSxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELDRDQUFlLEdBQWY7UUFDSSxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCw0Q0FBZSxHQUFmO1FBZUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDbEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ2YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRCxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Esa0RBQXFCLEdBQXJCO1FBQ0csTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxtREFBc0IsR0FBdEIsVUFBdUIsS0FBVTtRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBQyxRQUFRLENBQUMsQ0FBQztZQUV0QyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3RFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQ3JCLFVBQUMsT0FBWTtnQkFDVCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNSLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUcsWUFBWSxHQUFHLFVBQVUsR0FBRyxZQUFZLENBQUM7b0JBQzdDLENBQUM7b0JBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO2dCQUN0QyxDQUFDO1lBQ0wsQ0FBQyxFQUNELFVBQUMsS0FBVTtnQkFDUCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNSLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUcsWUFBWSxHQUFHLFVBQVUsR0FBRyxZQUFZLENBQUM7b0JBQzdDLENBQUM7b0JBQ0YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO2dCQUN2QyxDQUFDO1lBQ0wsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFnQixHQUFoQixVQUFpQixNQUFlLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFFeEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsS0FBVSxFQUFFLElBQVksRUFBRSxJQUFZO1FBQXBELGlCQTRCQztRQTNCRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUVsQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFMUMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNuQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUN4QjtnQkFDSSxTQUFTLEVBQUUsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUc7YUFDcEMsRUFDRCxJQUFJLEVBQ0o7Z0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDUCxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pELEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixDQUFDO1lBQ0wsQ0FBQyxDQUNKLENBQUM7WUFHRixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCw0Q0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQVMsSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLEVBQXRDLENBQXNDLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQsNENBQWUsR0FBZixVQUFnQixPQUFnQjtRQUM1QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLENBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCwrQ0FBa0IsR0FBbEIsVUFBbUIsSUFBVTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxPQUFZLElBQUssT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCxxQ0FBUSxHQUFSLFVBQVMsSUFBZTtRQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQU1ELDBDQUFhLEdBQWIsVUFBYyxPQUFZO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDBDQUFhLEdBQWIsVUFBYyxPQUFZO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxJQUFTO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksS0FBVSxFQUFFLElBQVM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxHQUFRO1lBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHO1lBQ2pELFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFO1lBQ2hELElBQUksRUFBRSxRQUFRO1NBQ2pCLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsNkNBQWdCLEdBQWhCLFVBQWlCLEtBQVUsRUFBRSxJQUFZO1FBQ3JDLEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBRSxJQUFJLElBQUksS0FBSyxJQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFN0IsRUFBRSxDQUFDLGNBQWMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksR0FBQyxHQUFHLEdBQUMsSUFBSSxHQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRW5KLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksR0FBQyxHQUFHLEdBQUMsSUFBSSxHQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlKLENBQUM7SUFDTCxDQUFDO0lBbE1EO1FBQUMsYUFBTSxFQUFFOztnRUFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOztnRUFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOzs2REFBQTtJQUNUO1FBQUMsWUFBSyxFQUFFOzs2REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt1REFBQTtJQXpCWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsVUFBVSxFQUFFLENBQUMsMkJBQU8sRUFBRSxnQ0FBd0IsRUFBRSxpQ0FBVSxDQUFDO1lBQzNELFNBQVMsRUFBRSxDQUFDLG9EQUF3QixDQUFDO1lBQ3JDLEtBQUssRUFBRSxDQUFDLGlCQUFTLENBQUM7WUFDbEIsV0FBVyxFQUFFLHVDQUF1QztZQUNwRCxTQUFTLEVBQUU7Z0JBQ1AsdURBQXVEO2dCQUN2RCxnREFBZ0Q7Z0JBQ2hELG1EQUFtRDtnQkFDbkQsb0NBQW9DO2dCQUNwQyx5Q0FBeUM7Z0JBQ3pDLG9DQUFvQztnQkFDcEMscUNBQXFDO2FBQ3hDO1lBQ0QsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDeEMsQ0FBQzs7MEJBQUE7SUF1TUYseUJBQUM7QUFBRCxDQXJNQSxBQXFNQyxJQUFBO0FBck1ZLDBCQUFrQixxQkFxTTlCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL3RlbXBsYXRlQWxsL3NvdW5kX2Nsb3VkL3RlbXBsYXRlMi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2x9IGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlcy9jb250cm9scy9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGFnZSxTZWN0aW9ufSBmcm9tICcuLy4uLy4uLy4uLytidWlsZGVyL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IFRoZW1lQ29sb3IgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RoZW1lQ29sb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNhZmVTdHlsZSB9IGZyb20gJy4uLy4uL3BpcGVzL2luZGV4JztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RlbXBsYXRlVmFsaWRhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZUh0dHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGVIdHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbmFseXRpY1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvc2VydmljZXMvYW5hbHl0aWMuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUmVuZGVyZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGVtcGxhdGVSZW5kZXJlci5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBnYTogRnVuY3Rpb247XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3NvdW5kLWNsb3VkJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtDb250cm9sLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIFRoZW1lQ29sb3JdLFxyXG4gICAgcHJvdmlkZXJzOiBbVGVtcGxhdGVWYWxpZGF0b3JTZXJ2aWNlXSxcclxuICAgIHBpcGVzOiBbU2FmZVN0eWxlXSxcclxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzSHRtbC90ZW1wbGF0ZTIudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICAndGVtcGxhdGVzSHRtbC9hc3NldHMvY3NzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLm1pbi5jc3MnLFxyXG4gICAgICAgICd0ZW1wbGF0ZXNIdG1sL2Fzc2V0cy9jc3Mvc2VsZWN0aXplLmRlZmF1bHQuY3NzJyxcclxuICAgICAgICAndGVtcGxhdGVzSHRtbC9hc3NldHMvY3NzL2Jvb3RzdHJhcC1zbGlkZXIubWluLmNzcycsXHJcbiAgICAgICAgJ3RlbXBsYXRlc0h0bWwvYXNzZXRzL2Nzcy9mb250cy5jc3MnLFxyXG4gICAgICAgICd0ZW1wbGF0ZXNIdG1sL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3MnLFxyXG4gICAgICAgICd0ZW1wbGF0ZXNIdG1sL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJyxcclxuICAgICAgICAndGVtcGxhdGVzSHRtbC9hc3NldHMvY3NzL3N0eWxlMS5jc3MnXHJcbiAgICBdLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlMkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICAvL2FwcDphbnkgPSBBcHAoKTtcclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZF9jb250cm9sID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkX3NlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRfcGFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBJbnB1dCgpIEpTT05fVGVtcGxhdGU6IGFueTtcclxuICAgIEBJbnB1dCgpIGRldk1vZGU6IGFueSA9IGZhbHNlO1xyXG4gICAgc3RhdGljQ29udHJvbHM6IGFueSA9IHt9O1xyXG4gICAgcHVibGljIGNvdW50ZXI6IE51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGZvcm1zOiBGb3JtR3JvdXBbXTtcclxuICAgIHByaXZhdGUgdmFsaWRhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNob3dSZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgYnV0dG9uU2hvd0hpZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR2czogVGVtcGxhdGVWYWxpZGF0b3JTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2FuYWx5dGljU2VydmljZTogQW5hbHl0aWNTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3RlbXBsYXRlSHR0cFNlcnZpY2U6IFRlbXBsYXRlSHR0cFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfdGVtcGxhdGVSZW5kZXJlcjogVGVtcGxhdGVSZW5kZXJlclNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8qIHN0YXRpYyBjb250cm9scyAqL1xyXG4gICAgICAgIHRoaXMuc3RhdGljQ29udHJvbHMgPSB0aGlzLl90ZW1wbGF0ZVJlbmRlcmVyLmdldFN0YXRpY0NvbnRyb2xzKCk7XHJcbiAgICB9XHJcbiAgICBtb2JpbGVzdGlja3lSZW1vdmUoKXtcclxuICAgICAgICBqUXVlcnkoXCIubW9iaWxlLXJlc3VsdC1saW5rXCIpLmhpZGUoKTtcclxuICAgICAgICBqUXVlcnkoXCIucGFnZV8xXCIpLnJlbW92ZUNsYXNzKFwibW9iaWxlLXJlc3VsdC1zdGlja3lcIik7XHJcbiAgICAgICAgalF1ZXJ5KFwiLnBhZ2VfMlwiKS5yZW1vdmVDbGFzcyhcIm1vYmlsZS1yZXN1bHQtc3RpY2t5XCIpO1xyXG4gICAgICAgIGpRdWVyeShcIi5tb2JpbGUtcmVzdWx0LWxpbmtBZGRcIikuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgICBqUXVlcnkoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogalF1ZXJ5KFwiLnBhZ2VfMlwiKS5vZmZzZXQoKS50b3B9LCA4MDApO1xyXG4gICAgfVxyXG5cclxuICAgIG1vYmlsZXN0aWNreUFkZCgpe1xyXG4gICAgICAgIGpRdWVyeShcIi5tb2JpbGUtcmVzdWx0LWxpbmtBZGRcIikuaGlkZSgpO1xyXG4gICAgICAgIGpRdWVyeShcIi5tb2JpbGUtcmVzdWx0LWxpbmtcIikuc2hvdygpO1xyXG4gICAgICAgIGpRdWVyeShcIi5wYWdlXzFcIikuYWRkQ2xhc3MoXCJtb2JpbGUtcmVzdWx0LXN0aWNreVwiKTtcclxuICAgICAgICBqUXVlcnkoXCIucGFnZV8yXCIpLmFkZENsYXNzKFwibW9iaWxlLXJlc3VsdC1zdGlja3lcIik7XHJcbiAgICAgICAgalF1ZXJ5KCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IGpRdWVyeShcIi5wYWdlXzFcIikub2Zmc2V0KCkudG9wfSwgODAwKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgLy9qUXVlcnkoJy5yZXN1bHQtc2Nyb2xsZXInKS5zbGltU2Nyb2xsKHtoZWlnaHQ6ICc0NDBweCcscmFpbFZpc2libGU6IHRydWUsIGFsd2F5c1Zpc2libGU6IHRydWV9KTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8qIHJlc3VsdCBwYW5lbCBmaXhlZCBcclxuICAgICAgICB2YXIgcGFnZTIgPSBqUXVlcnkoJy5wYWdlXzInKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncGFnZTInLHBhZ2UyKTtcclxuICAgICAgICBwYWdlMi5vbignc2Nyb2xsJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2Nyb2xsJyxwYWdlMik7XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykuc2Nyb2xsVG9wKCkgPiAxNTApIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShcIi5wYWdlXzJcIikuYWRkQ2xhc3MoXCJyZXN1bHQtZml4ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCIucGFnZV8yXCIpLnJlbW92ZUNsYXNzKFwicmVzdWx0LWZpeGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh0aGlzKS5zY3JvbGxUb3AoKSA+IDE2MCkge1xyXG4gICAgICAgICAgICAgICAgaWYoc2VsZi5zaG93UmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShcIi5wYWdlXzJcIikuYWRkQ2xhc3MoXCJyZXN1bHQtZml4ZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCIucGFnZV8yXCIpLnJlbW92ZUNsYXNzKFwicmVzdWx0LWZpeGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAgc2Nyb2xsVG9Ub3BQcm9wZXJ0aWVzKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnNldHRpbmdzLWhlYWRlcicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbiAgICBvblJlc3VsdExlYWRGb3JtU3VibWl0KGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5zdGF0dXMgPT0gJ0xJVkUnKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlbmRDVEFBbmFseXRpY3MoZXZlbnQsJ1Jlc3VsdCcpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5hdmlnYXRlX3VybCA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmF2aWdhdGVfVXJsO1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRNYWlsKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmF2aWdhdGVfdXJsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaHR0cHM6Ly8nKSAhPT0gMCAmJiBuYXZpZ2F0ZV91cmwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdodHRwOi8vJykgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlX3VybCA9ICdodHRwczovLycgKyBuYXZpZ2F0ZV91cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbmF2aWdhdGVfdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmF2aWdhdGVfdXJsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignaHR0cHM6Ly8nKSAhPT0gMCAmJiBuYXZpZ2F0ZV91cmwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdodHRwOi8vJykgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlX3VybCA9ICdodHRwczovLycgKyBuYXZpZ2F0ZV91cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5hdmlnYXRlX3VybDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTGVhZEZvcm1TdWJtaXQocmVzdWx0OiBib29sZWFuLCBzaG93OiBzdHJpbmcsIGhpZGU6IHN0cmluZykge1xyXG5cclxuICAgICAgICB0aGlzLnNlbmRDVEFBbmFseXRpY3MocmVzdWx0LCAnTGFuZGluZycpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRlZCA9IHJlc3VsdDtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZWQpXHJcbiAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhudWxsLCBzaG93LCBoaWRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKGV2ZW50OiBhbnksIHNob3c6IHN0cmluZywgaGlkZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2hvdyk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVkICYmICF0aGlzLmRldk1vZGUpIHtcclxuICAgICAgICAgICAgLy9oaWRlIGJ1dHRvblxyXG4gICAgICAgICAgICBpZiAoZXZlbnQpXHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoZXZlbnQudGFyZ2V0KS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAvL3Nob3cgbmV4dCBkaXZcclxuICAgICAgICAgICAgdmFyIGRpdlRvU2hvdyA9IGpRdWVyeSgnLicgKyBzaG93KTtcclxuICAgICAgICAgICAgZGl2VG9TaG93LnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBhZ2UtbG9nbycpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBhZ2VfMicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnaHRtbCwgYm9keScpLmFuaW1hdGUoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBkaXZUb1Nob3cub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTAwMCxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJy4nICsgaGlkZSkuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKGRpdlRvU2hvdy5vZmZzZXQoKS50b3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vbWFrZSB2YWxpZGF0b3IgYXZhaWxhYmxlIGFnYWluXHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldExhbmRpbmdQYWdlKCk6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5KU09OX1RlbXBsYXRlLnBhZ2VzLmZpbHRlcigocGFnZTogYW55KSA9PiBwYWdlLnZpc2libGUgJiYgcGFnZS50eXBlID09ICdMYW5kaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmlzaWJsZVBhZ2VzKCk6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5KU09OX1RlbXBsYXRlLnBhZ2VzLmZpbHRlcigocGFnZTogYW55KSA9PiBwYWdlLnZpc2libGUgJiYgcGFnZS50eXBlICE9ICdMYW5kaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmlzaWJsZUl0ZW1zKHNlY3Rpb246IFNlY3Rpb24pOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHNlY3Rpb24uaXRlbXMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0udmlzaWJsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmlzaWJsZVNlY3Rpb25zKHBhZ2U6IFBhZ2UpOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHBhZ2Uuc2VjdGlvbnMuZmlsdGVyKChzZWN0aW9uOiBhbnkpID0+IHNlY3Rpb24udmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgICBvblN1Ym1pdChmb3JtOiBGb3JtR3JvdXApIHtcclxuICAgICAgICBpZiAoZm9ybS52YWxpZClcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLyogIC0tLVxyXG4gICAgICAgIHdoZW4gY29udHJvbCBpcyBzZWxlY3RlZCBmcm9tIHBhcnRpY2x1YXIgdGVtcGxhdGUgdGhlbiBpdCBwYXNzIHRvIHBhcmVudFxyXG4gICAgICAgIHRlbXBsYXRlIGNvbXBvbmVudCAoaS5lIFRlbXBsYXRlLnRzKSBhbmQgdGhlbiBwYXJlbnQgdGVtcGxhdGUgY29tcG9uZW50IHBhc3MgdG8gaG9tZSBjb21wb25lbnRcclxuICAgICovXHJcblxyXG4gICAgc2VsZWN0Q29udHJvbChjb250cm9sOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkX2NvbnRyb2wuZW1pdChjb250cm9sKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RTZWN0aW9uKHNlY3Rpb246IGFueSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfc2VjdGlvbi5lbWl0KHNlY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdHBhZ2UocGFnZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZF9wYWdlLmVtaXQocGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0TW9kZWwoZXZlbnQ6IGFueSwgdHlwZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5zZXRTZWxlY3RlZE1vZGVsKHR5cGUpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRNYWlsKCkge1xyXG4gICAgICAgIGxldCBkYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGNhbGNJZDogdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5faWQsXHJcbiAgICAgICAgICAgIHZpc2l0b3JJZDogdGhpcy5fYW5hbHl0aWNTZXJ2aWNlLmdldFZpc2l0b3JLZXkoKSxcclxuICAgICAgICAgICAgdHlwZTogJ0ZpbmlzaCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZUh0dHBTZXJ2aWNlLnNlbmRFbWFpbChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kQ1RBQW5hbHl0aWNzKGlzQ1RBOiBhbnksIHBhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmKGlzQ1RBIT10cnVlICYmIGlzQ1RBIT1mYWxzZSkge1xyXG4gICAgICAgICAgICAvL091cnNcclxuICAgICAgICAgICAgZ2EoJ2RldnRlYW0uc2VuZCcsICdldmVudCcsIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZSsnICcrcGFnZSsnIFBhZ2UgQ1RBJywgJ0NsaWNrZWQnLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybCk7XHJcbiAgICAgICAgICAgIC8vVXNlcnNcclxuICAgICAgICAgICAgaWYodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5nYSlcclxuICAgICAgICAgICAgICAgIGdhKCd1c2VyQ3VzdG9tLnNlbmQnLCAnZXZlbnQnLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUrJyAnK3BhZ2UrJyBQYWdlIENUQScsICdDbGlja2VkJywgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS51cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
