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
var JSONBuilder_service_1 = require('../../../../services/JSONBuilder.service');
var formula_service_1 = require('../../../../services/formula.service');
var editor_leadform_component_1 = require('../../../editors/leadform/editor_leadform.component');
var builder_service_1 = require('../../../../services/builder.service');
var JSONUpdateItemTracker_service_1 = require('../../../../services/JSONUpdateItemTracker.service');
var model_1 = require('../../../../models/model');
var feature_access_service_1 = require('../../../../../../shared/services/feature-access.service');
var recommendation_service_1 = require('../../../../../templates/services/recommendation.service');
var EditorOutcomeSettings = (function () {
    function EditorOutcomeSettings(jsonBuilderHandler, _builderService, _ItemTrackService, formulaService, _featureAuthService, recommendationService) {
        this.jsonBuilderHandler = jsonBuilderHandler;
        this._builderService = _builderService;
        this._ItemTrackService = _ItemTrackService;
        this.formulaService = formulaService;
        this._featureAuthService = _featureAuthService;
        this.recommendationService = recommendationService;
        this.filePickerKey = 'A3ygIw4hISSCdApqW4SAwz';
        this.formulaResult = {};
        this.validUrl = true;
        this.sectionOrder = [];
        this.editorControl = {
            result_header: {},
            section: {},
            leadform: {},
            click_button: {},
            share_links: {},
            result_redo: {},
            backImage: {},
            result_disclaimer: {},
            footer_links: {},
            result_summary: {}
        };
        this.isCtaAccessible = false;
        this.isRealTimeResult = false;
        this.page = jsonBuilderHandler.getSelectedPage();
        for (var section in this.page.sections) {
            for (var item in this.page.sections[section].items) {
                if (this.page.sections[section].title === 'Result') {
                    this.resultSection = this.page.sections[section];
                    this.jsonBuilderHandler.setSelectedControl(this.resultSection.items[0]);
                }
                if (this.page.sections[section].type === 'LeadForm')
                    this.leadformSection = this.page.sections[section];
                for (var prop in this.editorControl) {
                    if (prop === this.page.sections[section].items[item].type)
                        this.editorControl[prop] = this.page.sections[section].items[item];
                }
            }
        }
    }
    EditorOutcomeSettings.prototype.ngOnInit = function () {
        this._ItemTrackService.resetUnsavedData();
        this._ItemTrackService.setUnSavedPage(this.page);
        this.isRealTimeResult = this._featureAuthService.features.real_time_results;
        this.isCtaAccessible = this._featureAuthService.features.cta;
    };
    EditorOutcomeSettings.prototype.ngOnChanges = function () {
    };
    EditorOutcomeSettings.prototype.ngOnDestroy = function () {
        var rightPanelHeight = jQuery(window).height() - 72;
    };
    EditorOutcomeSettings.prototype.togglePrivacy = function () {
        this.editorControl.footer_links.visible = !this.editorControl.footer_links.visible;
    };
    EditorOutcomeSettings.prototype.toggleWysiwig = function (control) {
        control.visible = !control.visible;
    };
    EditorOutcomeSettings.prototype.ngAfterViewInit = function () {
    };
    EditorOutcomeSettings.prototype.resultScroll = function () {
    };
    EditorOutcomeSettings.prototype.accordianOpen = function (val, control) {
        this.jsonBuilderHandler.setSelectedControl(control);
        event.stopPropagation();
        event.preventDefault();
    };
    EditorOutcomeSettings.prototype.eyeResult = function () {
        var self = this;
        jQuery('.settings-content').fadeToggle('fast');
        jQuery('.settings-content').toggleClass('open');
        if (jQuery('.settings-content.open').length <= 0) {
            jQuery('.result-scroll').css('height', 'auto');
            self.resultScroll();
        }
    };
    EditorOutcomeSettings.prototype.validateUrl = function () {
        var urlregex = /(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org]+(\[\?%&=]*)?/;
        if (urlregex.test(this.jsonBuilderHandler.getJSONBuilt().navigate_Url)) {
            this.validUrl = true;
        }
        else {
            this.validUrl = false;
        }
    };
    EditorOutcomeSettings.prototype.toggleDisclaimer = function () {
        this.editorControl.result_disclaimer.visible = !this.editorControl.result_disclaimer.visible;
    };
    EditorOutcomeSettings.prototype.isSocialChecked = function (socialMedia) {
        for (var option in this.editorControl.share_links.options) {
            if (this.editorControl.share_links.options[option].type == socialMedia) {
                return this.editorControl.share_links.options[option].selected;
            }
        }
        return true;
    };
    EditorOutcomeSettings.prototype.toggleSocialIcon = function (socialMedia) {
        var flag = false;
        for (var option in this.editorControl.share_links.options) {
            if (this.editorControl.share_links.options[option].type == socialMedia) {
                this.editorControl.share_links.options[option].selected = !this.editorControl.share_links.options[option].selected;
                flag = true;
            }
        }
        if (flag == false) {
            var option = (new model_1.Item).getOption();
            option.type = socialMedia;
            option.selected = false;
            this.editorControl.share_links.options.push(option);
        }
    };
    EditorOutcomeSettings.prototype.toggleSocialLink = function () {
        this.editorControl.share_links.visible = !this.editorControl.share_links.visible;
    };
    EditorOutcomeSettings.prototype.toggleRedo = function () {
        this.editorControl.result_redo.visible = !this.editorControl.result_redo.visible;
    };
    EditorOutcomeSettings.prototype.toggleSummary = function () {
        this.editorControl.result_summary.visible = !this.editorControl.result_summary.visible;
        if (this.editorControl.result_summary.visible) {
            this.resultSection.fullWidth = false;
            this.leadformSection.fullWidth = false;
        }
        else {
            this.resultSection.fullWidth = true;
            this.leadformSection.fullWidth = true;
        }
    };
    EditorOutcomeSettings.prototype.onRealTimeChange = function () {
        if (this.isRealTimeResult) {
            this.jsonBuilderHandler.getJSONBuilt().realTime = !this.jsonBuilderHandler.getJSONBuilt().realTime;
        }
        else {
            jQuery('#premiumModal').modal('show');
        }
    };
    EditorOutcomeSettings.prototype.ctaCheck = function () {
        if (this.isCtaAccessible == false) {
            jQuery('#premiumModal').modal('show');
        }
    };
    EditorOutcomeSettings.prototype.onChangeDisclaimer = function (editorControl) {
    };
    EditorOutcomeSettings.prototype.callGA = function (opt) {
        switch (opt) {
            case "REALTIMECHANGE":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'ShowResultInReal');
                _kmq.push(['record', 'Builder Show Result in Realtime Toggle']);
                break;
            case "EDITFORMULA":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'EditResult');
                _kmq.push(['record', 'Builder Edit Result Click']);
                break;
            case "ADDRESULT":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'AddResult');
                _kmq.push(['record', 'Builder Add Result Click']);
                break;
            case "SUMMARY":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'Summary');
                _kmq.push(['record', 'Builder Results Summary Toggle']);
                break;
            case "SHARERESULT":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'ShareResult');
                _kmq.push(['record', 'Builder Results Share Toggle']);
                break;
            case "REDOCALC":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'RedoCalculation');
                _kmq.push(['record', 'Builder Results Redo Calculation Toggle']);
                break;
            case "DISCLAIMER":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'DisclaimerToggle');
                _kmq.push(['record', 'Builder Results Disclaimer Toggle']);
                break;
        }
    };
    EditorOutcomeSettings.prototype.openResult = function (resultCount, index) {
        for (var i = 1; i <= resultCount; i++) {
            if (i == index) {
            }
            else {
            }
        }
    };
    EditorOutcomeSettings.prototype.upload = function (index) {
        var _this = this;
        var self = this;
        filepicker.setKey(this.filePickerKey);
        filepicker.pick({ mimetypes: ['image/*'], }, function (InkBlob) {
            _this.jsonBuilderHandler.getSelectedFormula().result = InkBlob.url;
            jQuery('#filepicker_dialog_container').find('a').click();
        }, function (FPError) {
            console.log(FPError.toString());
        });
    };
    EditorOutcomeSettings.prototype.disableSpace = function (event) {
        this.jsonBuilderHandler.getSelectedFormula().value = event.target.value.trim().replace(/\s/g, '');
    };
    EditorOutcomeSettings.prototype.textAreaAdjust = function (event) {
        jQuery('.big-text').css('height', jQuery('.big-text').prop('scrollHeight'));
    };
    EditorOutcomeSettings = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-outcome-settings',
            templateUrl: 'html/editor_outcome_settings.component.html',
            directives: [editor_leadform_component_1.EditorLeadForm],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker, formula_service_1.FormulaService, feature_access_service_1.FeatureAuthService, recommendation_service_1.RecommendationService])
    ], EditorOutcomeSettings);
    return EditorOutcomeSettings;
}());
exports.EditorOutcomeSettings = EditorOutcomeSettings;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9wYWdlL2NvbXBvbmVudC9lZGl0b3Jfb3V0Y29tZV9zZXR0aW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwRixlQUFlLENBQUMsQ0FBQTtBQUMxRyxvQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQUN2RSxnQ0FBK0Isc0NBQXNDLENBQUMsQ0FBQTtBQUN0RSwwQ0FBK0IscURBQXFELENBQUMsQ0FBQTtBQUNyRixnQ0FBK0Isc0NBQXNDLENBQUMsQ0FBQTtBQUN0RSw4Q0FBZ0Msb0RBQW9ELENBQUMsQ0FBQTtBQUNyRixzQkFBb0MsMEJBQTBCLENBQUMsQ0FBQTtBQUMvRCx1Q0FBbUMsMERBQTBELENBQUMsQ0FBQTtBQUM5Rix1Q0FBc0MsMERBQTBELENBQUMsQ0FBQTtBQWlCakc7SUEwQkksK0JBQ1ksa0JBQStCLEVBQy9CLGVBQStCLEVBQy9CLGlCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixtQkFBdUMsRUFDdkMscUJBQTRDO1FBTDVDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBYTtRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFpQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUN2QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBL0J4RCxrQkFBYSxHQUFRLHdCQUF3QixDQUFDO1FBRTlDLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBRXhCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFNekIsa0JBQWEsR0FBUTtZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osWUFBWSxFQUFFLEVBQUU7WUFD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SUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQS9QTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxXQUFXLEVBQUUsNkNBQTZDO1lBRTFELFVBQVUsRUFBRSxDQUFDLDBDQUFjLENBQUM7WUFDNUIsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDeEMsQ0FBQzs7NkJBQUE7SUEwUEYsNEJBQUM7QUFBRCxDQXhQQSxBQXdQQyxJQUFBO0FBeFBZLDZCQUFxQix3QkF3UGpDLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvY29tcG9uZW50cy9lZGl0b3JzL3BhZ2UvY29tcG9uZW50L2VkaXRvcl9vdXRjb21lX3NldHRpbmdzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybXVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtdWxhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFZGl0b3JMZWFkRm9ybSB9IGZyb20gJy4uLy4uLy4uL2VkaXRvcnMvbGVhZGZvcm0vZWRpdG9yX2xlYWRmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSlNPTkl0ZW1UcmFja2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvSlNPTlVwZGF0ZUl0ZW1UcmFja2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJdGVtLCBTZWN0aW9uLCBQYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgRmVhdHVyZUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZlYXR1cmUtYWNjZXNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZWNvbW1lbmRhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi90ZW1wbGF0ZXMvc2VydmljZXMvcmVjb21tZW5kYXRpb24uc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgbWF0aDogYW55O1xyXG5kZWNsYXJlIHZhciBmaWxlcGlja2VyOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZWRpdG9yLW91dGNvbWUtc2V0dGluZ3MnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdodG1sL2VkaXRvcl9vdXRjb21lX3NldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcclxuICAgLy8gdGVtcGxhdGU6ICc8aDE+aGVsbG88L2gxPicsXHJcbiAgICBkaXJlY3RpdmVzOiBbRWRpdG9yTGVhZEZvcm1dLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JPdXRjb21lU2V0dGluZ3MgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAgIGZpbGVQaWNrZXJLZXk6IGFueSA9ICdBM3lnSXc0aElTU0NkQXBxVzRTQXd6JztcclxuICAgIHBhZ2U6IFBhZ2U7XHJcbiAgICBmb3JtdWxhUmVzdWx0OiBhbnkgPSB7fTtcclxuICAgIGNvbnRyb2w6IGFueTtcclxuICAgIHZhbGlkVXJsOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHNlY3Rpb25PcmRlcjogYW55W10gPSBbXTtcclxuICAgIHJlc3VsdFNlY3Rpb246IFNlY3Rpb247XHJcbiAgICBsZWFkZm9ybVNlY3Rpb246IFNlY3Rpb247XHJcbiAgICBlZGl0b3JIdG1sOiBzdHJpbmc7XHJcbiAgICBRdWVzdGlvbm5haXJlSnNvbjogYW55O1xyXG4gICAgbmF2aWdhdGVfdXJsOiBhbnk7XHJcbiAgICBlZGl0b3JDb250cm9sOiBhbnkgPSB7XHJcbiAgICAgICAgcmVzdWx0X2hlYWRlcjoge30sXHJcbiAgICAgICAgc2VjdGlvbjoge30sXHJcbiAgICAgICAgbGVhZGZvcm06IHt9LFxyXG4gICAgICAgIGNsaWNrX2J1dHRvbjoge30sXHJcbiAgICAgICAgc2hhcmVfbGlua3M6IHt9LFxyXG4gICAgICAgIHJlc3VsdF9yZWRvOiB7fSxcclxuICAgICAgICBiYWNrSW1hZ2U6IHt9LFxyXG4gICAgICAgIHJlc3VsdF9kaXNjbGFpbWVyOiB7fSxcclxuICAgICAgICBmb290ZXJfbGlua3M6IHt9LFxyXG4gICAgICAgIHJlc3VsdF9zdW1tYXJ5OiB7fVxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgaXNDdGFBY2Nlc3NpYmxlOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzUmVhbFRpbWVSZXN1bHQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUganNvbkJ1aWxkZXJIYW5kbGVyOiBKU09OQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIF9idWlsZGVyU2VydmljZTogQnVpbGRlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfSXRlbVRyYWNrU2VydmljZTogSlNPTkl0ZW1UcmFja2VyLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybXVsYVNlcnZpY2U6IEZvcm11bGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2ZlYXR1cmVBdXRoU2VydmljZTogRmVhdHVyZUF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVjb21tZW5kYXRpb25TZXJ2aWNlOiBSZWNvbW1lbmRhdGlvblNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IGpzb25CdWlsZGVySGFuZGxlci5nZXRTZWxlY3RlZFBhZ2UoKTtcclxuICAgICAgICBmb3IgKGxldCBzZWN0aW9uIGluIHRoaXMucGFnZS5zZWN0aW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIGluIHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXS5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHJlc3VsdCBvdXRwdXRzXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dLnRpdGxlID09PSAnUmVzdWx0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0U2VjdGlvbiA9IHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5zZXRTZWxlY3RlZENvbnRyb2wodGhpcy5yZXN1bHRTZWN0aW9uLml0ZW1zWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl0udHlwZSA9PT0gJ0xlYWRGb3JtJylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlYWRmb3JtU2VjdGlvbiA9IHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gdGhpcy5lZGl0b3JDb250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXS5pdGVtc1tpdGVtXS50eXBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRvckNvbnRyb2xbcHJvcF0gPSB0aGlzLnBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl0uaXRlbXNbaXRlbV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fSXRlbVRyYWNrU2VydmljZS5yZXNldFVuc2F2ZWREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5fSXRlbVRyYWNrU2VydmljZS5zZXRVblNhdmVkUGFnZSh0aGlzLnBhZ2UpO1xyXG4gICAgICAgIHRoaXMuaXNSZWFsVGltZVJlc3VsdCA9IHRoaXMuX2ZlYXR1cmVBdXRoU2VydmljZS5mZWF0dXJlcy5yZWFsX3RpbWVfcmVzdWx0cztcclxuICAgICAgICB0aGlzLmlzQ3RhQWNjZXNzaWJsZSA9IHRoaXMuX2ZlYXR1cmVBdXRoU2VydmljZS5mZWF0dXJlcy5jdGE7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgLy8gY29kZVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHZhciByaWdodFBhbmVsSGVpZ2h0ID0galF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgLSA3MjtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVQcml2YWN5KCkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbC5mb290ZXJfbGlua3MudmlzaWJsZSA9ICF0aGlzLmVkaXRvckNvbnRyb2wuZm9vdGVyX2xpbmtzLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlV3lzaXdpZyhjb250cm9sOiBhbnkpIHtcclxuICAgICAgICBjb250cm9sLnZpc2libGUgPSAhY29udHJvbC52aXNpYmxlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgLy8gY29kZVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdFNjcm9sbCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBhY2NvcmRpYW5PcGVuKHZhbDogYW55LCBjb250cm9sOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5zZXRTZWxlY3RlZENvbnRyb2woY29udHJvbCk7XHJcbiAgICAgICAgLy9pZihqUXVlcnkoXCJhW2hyZWYkPSdcIit2YWwrXCInXVwiKS5wYXJlbnRzKCcucGFuZWwnKS5jaGlsZHJlbignLnBhbmVsLWNvbGxhcHNlJykuaGFzQ2xhc3MoJ2luJykpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vfVxyXG4gICAgfVxyXG5cclxuICAgIGV5ZVJlc3VsdCgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2V0dGluZ3MtY29udGVudCcpLmZhZGVUb2dnbGUoJ2Zhc3QnKTtcclxuICAgICAgICBqUXVlcnkoJy5zZXR0aW5ncy1jb250ZW50JykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBpZiAoalF1ZXJ5KCcuc2V0dGluZ3MtY29udGVudC5vcGVuJykubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucmVzdWx0LXNjcm9sbCcpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcclxuICAgICAgICAgICAgc2VsZi5yZXN1bHRTY3JvbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZVVybCgpIHtcclxuICAgICAgICB2YXIgdXJscmVnZXggPSAvKGh0dHAocyk/OlxcXFwpPyhbXFx3LV0rXFwuKStbXFx3LV0rWy5jb218LmlufC5vcmddKyhcXFtcXD8lJj1dKik/LztcclxuICAgICAgICBpZiAodXJscmVnZXgudGVzdCh0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5uYXZpZ2F0ZV9VcmwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRVcmwgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRVcmwgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRGlzY2xhaW1lcigpIHtcclxuICAgICAgICB0aGlzLmVkaXRvckNvbnRyb2wucmVzdWx0X2Rpc2NsYWltZXIudmlzaWJsZSA9ICF0aGlzLmVkaXRvckNvbnRyb2wucmVzdWx0X2Rpc2NsYWltZXIudmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBpc1NvY2lhbENoZWNrZWQoc29jaWFsTWVkaWE6IGFueSkge1xyXG4gICAgICAgIGZvciAobGV0IG9wdGlvbiBpbiB0aGlzLmVkaXRvckNvbnRyb2wuc2hhcmVfbGlua3Mub3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lZGl0b3JDb250cm9sLnNoYXJlX2xpbmtzLm9wdGlvbnNbb3B0aW9uXS50eXBlID09IHNvY2lhbE1lZGlhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lZGl0b3JDb250cm9sLnNoYXJlX2xpbmtzLm9wdGlvbnNbb3B0aW9uXS5zZWxlY3RlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTb2NpYWxJY29uKHNvY2lhbE1lZGlhOiBhbnkpIHtcclxuICAgICAgICB2YXIgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IG9wdGlvbiBpbiB0aGlzLmVkaXRvckNvbnRyb2wuc2hhcmVfbGlua3Mub3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lZGl0b3JDb250cm9sLnNoYXJlX2xpbmtzLm9wdGlvbnNbb3B0aW9uXS50eXBlID09IHNvY2lhbE1lZGlhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvckNvbnRyb2wuc2hhcmVfbGlua3Mub3B0aW9uc1tvcHRpb25dLnNlbGVjdGVkID0gIXRoaXMuZWRpdG9yQ29udHJvbC5zaGFyZV9saW5rcy5vcHRpb25zW29wdGlvbl0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmxhZyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gKG5ldyBJdGVtKS5nZXRPcHRpb24oKTtcclxuICAgICAgICAgICAgb3B0aW9uLnR5cGUgPSBzb2NpYWxNZWRpYTtcclxuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbC5zaGFyZV9saW5rcy5vcHRpb25zLnB1c2gob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0b2dnbGVTb2NpYWxMaW5rKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbC5zaGFyZV9saW5rcy52aXNpYmxlID0gIXRoaXMuZWRpdG9yQ29udHJvbC5zaGFyZV9saW5rcy52aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVJlZG8oKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0b3JDb250cm9sLnJlc3VsdF9yZWRvLnZpc2libGUgPSAhdGhpcy5lZGl0b3JDb250cm9sLnJlc3VsdF9yZWRvLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlU3VtbWFyeSgpIHtcclxuICAgICAgICB0aGlzLmVkaXRvckNvbnRyb2wucmVzdWx0X3N1bW1hcnkudmlzaWJsZSA9ICF0aGlzLmVkaXRvckNvbnRyb2wucmVzdWx0X3N1bW1hcnkudmlzaWJsZTtcclxuICAgICAgICBpZiAodGhpcy5lZGl0b3JDb250cm9sLnJlc3VsdF9zdW1tYXJ5LnZpc2libGUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRTZWN0aW9uLmZ1bGxXaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxlYWRmb3JtU2VjdGlvbi5mdWxsV2lkdGggPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdFNlY3Rpb24uZnVsbFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sZWFkZm9ybVNlY3Rpb24uZnVsbFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBvblJlYWxUaW1lQ2hhbmdlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVhbFRpbWVSZXN1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkucmVhbFRpbWUgPSAhdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkucmVhbFRpbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjcHJlbWl1bU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgY3RhQ2hlY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDdGFBY2Nlc3NpYmxlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI3ByZW1pdW1Nb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkNoYW5nZURpc2NsYWltZXIoZWRpdG9yQ29udHJvbDogYW55KSB7XHJcbiAgICB9XHJcbiAgICBjYWxsR0Eob3B0OiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKG9wdCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiUkVBTFRJTUVDSEFOR0VcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1Nob3dSZXN1bHRJblJlYWwnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFNob3cgUmVzdWx0IGluIFJlYWx0aW1lIFRvZ2dsZSddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIkVESVRGT1JNVUxBXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0VkaXRSZXN1bHQnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIEVkaXQgUmVzdWx0IENsaWNrJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiQUREUkVTVUxUXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0FkZFJlc3VsdCcpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgQWRkIFJlc3VsdCBDbGljayddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIlNVTU1BUllcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1N1bW1hcnknKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFJlc3VsdHMgU3VtbWFyeSBUb2dnbGUnXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJTSEFSRVJFU1VMVFwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdUb2dnbGUnLCAnU2hhcmVSZXN1bHQnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFJlc3VsdHMgU2hhcmUgVG9nZ2xlJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiUkVET0NBTENcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1JlZG9DYWxjdWxhdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgUmVzdWx0cyBSZWRvIENhbGN1bGF0aW9uIFRvZ2dsZSddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIkRJU0NMQUlNRVJcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ0Rpc2NsYWltZXJUb2dnbGUnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFJlc3VsdHMgRGlzY2xhaW1lciBUb2dnbGUnXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVuUmVzdWx0KHJlc3VsdENvdW50OiBudW1iZXIsIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSByZXN1bHRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBqUXVlcnkoJyNjb2xsYXBzZScgKyBpKS5hZGRDbGFzcygnaW4nKTtcclxuICAgICAgICAgICAgICAgIC8vIGpRdWVyeSgnI2NvbGxhcHNlJyArIGkpLmFkZENsYXNzKCdiaGF3bmEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGpRdWVyeSgnI2NvbGxhcHNlJyArIGkpLnJlbW92ZUNsYXNzKCdpbicpO1xyXG4gICAgICAgICAgICAgICAgLy8galF1ZXJ5KCcjY29sbGFwc2UnICsgaSkucmVtb3ZlQ2xhc3MoJ2JoYXduYScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGxvYWQoaW5kZXg6IGFueSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmaWxlcGlja2VyLnNldEtleSh0aGlzLmZpbGVQaWNrZXJLZXkpO1xyXG4gICAgICAgIGZpbGVwaWNrZXIucGljayhcclxuICAgICAgICAgICAgeyBtaW1ldHlwZXM6IFsnaW1hZ2UvKiddLCB9LFxyXG4gICAgICAgICAgICAoSW5rQmxvYjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRTZWxlY3RlZEZvcm11bGEoKS5yZXN1bHQgPSBJbmtCbG9iLnVybDtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2ZpbGVwaWNrZXJfZGlhbG9nX2NvbnRhaW5lcicpLmZpbmQoJ2EnKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoRlBFcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhGUEVycm9yLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlU3BhY2UoZXZlbnQ6IGFueSk6IGFueSB7XHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0U2VsZWN0ZWRGb3JtdWxhKCkudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpLnJlcGxhY2UoL1xccy9nLCAnJyk7XHJcbiAgICB9XHJcbiAgICB0ZXh0QXJlYUFkanVzdChldmVudDogYW55KSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmlnLXRleHQnKS5jc3MoJ2hlaWdodCcsIGpRdWVyeSgnLmJpZy10ZXh0JykucHJvcCgnc2Nyb2xsSGVpZ2h0JykpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
