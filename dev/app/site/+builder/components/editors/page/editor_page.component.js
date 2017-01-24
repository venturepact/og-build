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
var JSONBuilder_service_1 = require('../../../services/JSONBuilder.service');
var editor_leadform_component_1 = require('../../editors/leadform/editor_leadform.component');
var builder_service_1 = require('../../../services/builder.service');
var router_1 = require('@angular/router');
var JSONUpdateItemTracker_service_1 = require('../../../services/JSONUpdateItemTracker.service');
var feature_access_service_1 = require('../../../../../shared/services/feature-access.service');
var UrlShortner_service_1 = require('../../../services/UrlShortner.service');
var index_1 = require('../../../../templates/pipes/index');
var JSONElement_service_1 = require('../../../services/JSONElement.service');
var EditorPage = (function () {
    function EditorPage(jsonBuilderHandler, _builderService, _ItemTrackService, _urlShortner, _featureAuthService, _jsonElementService) {
        this.jsonBuilderHandler = jsonBuilderHandler;
        this._builderService = _builderService;
        this._ItemTrackService = _ItemTrackService;
        this._urlShortner = _urlShortner;
        this._featureAuthService = _featureAuthService;
        this._jsonElementService = _jsonElementService;
        this.filePickerKey = 'A3ygIw4hISSCdApqW4SAwz';
        this.sectionOrder = [];
        this.editorControl = {
            header: {},
            sub_header: {},
            click_button: {},
            logo: {},
            leadform: {},
            poweredby: {},
            footer_links: {}
        };
        this.isPoweredByAccessible = false;
        this.isLeadGeneration = false;
        this.page = jsonBuilderHandler.getSelectedPage();
        for (var section in this.page.sections) {
            for (var item in this.page.sections[section].items) {
                for (var prop in this.editorControl) {
                    if (prop === this.page.sections[section].items[item].type)
                        this.editorControl[prop] = this.page.sections[section].items[item];
                }
            }
        }
    }
    EditorPage.prototype.ngOnInit = function () {
        this._ItemTrackService.resetUnsavedData();
        this._ItemTrackService.setUnSavedPage(this.page);
        this.isPoweredByAccessible = this._featureAuthService.features.custom_branding;
        this.isLeadGeneration = this._featureAuthService.features.lead_generation;
        this.themePalettes = this._jsonElementService.gettemplatePalettes(this.jsonBuilderHandler.getJSONBuilt().template);
        var self = this;
        this.themePalettes.pallete.forEach(function (pallete) {
            if (pallete.themeClass == self.jsonBuilderHandler.getJSONBuilt().themeColor) {
                self.colordot = pallete;
            }
        });
    };
    EditorPage.prototype.ngOnChanges = function () {
    };
    EditorPage.prototype.ngOnDestroy = function () {
    };
    EditorPage.prototype.ngAfterViewInit = function () {
        var self = this;
        jQuery(document).click(function (e) {
            jQuery('.theme-parent').addClass('hide');
        });
        jQuery(".color-parent").click(function (e) {
            e.stopPropagation();
        });
        var editor;
        editor = jQuery('.wysiwyg').froalaEditor({
            heightMax: 250,
            toolbarButtons: ['bold', '|', 'italic', '|', 'underline',],
        });
        jQuery('.wysiwyg').on('froalaEditor.contentChanged', function (e, editor) {
            self.editorHtml = e.currentTarget.value;
            self.editorControl.header.props.title = e.currentTarget.value;
        });
        editor = jQuery('.wysiwyg-sub').froalaEditor({
            heightMax: 250,
            toolbarButtons: ['bold', '|', 'italic', '|', 'underline',],
        });
        jQuery('.wysiwyg-sub').on('froalaEditor.contentChanged', function (e, editor) {
            self.editorControl.sub_header.props.title = e.currentTarget.value;
        });
        jQuery(document).on('click', '.color-picker', function () {
            var element = jQuery('.slimScrollBar').css("top");
            if (jQuery('.slimScrollBar').length > 0) {
                jQuery('#fname').addClass('active-text');
            }
        });
    };
    EditorPage.prototype.toggleLogo = function () {
        this.editorControl.logo.visible = !this.editorControl.logo.visible;
        if (this.editorControl.logo.visible === true) {
            jQuery('.show-check').parents('.type-details').find('.div-check').fadeIn('slow');
        }
        else
            jQuery('.show-check').parents('.type-details').find('.div-check').fadeOut('slow');
    };
    EditorPage.prototype.toggleBgImage = function () {
        this.page.bgImageVisible = !this.page.bgImageVisible;
    };
    EditorPage.prototype.togglePoweredBy = function () {
        if (this.isPoweredByAccessible)
            this.editorControl.poweredby.visible = !this.editorControl.poweredby.visible;
        else {
            jQuery('#premiumModal').modal('show');
            this.editorControl.poweredby.visible = true;
            this.jsonBuilderHandler.getJSONBuilt().poweredby = true;
        }
    };
    EditorPage.prototype.toggleSubHeader = function () {
        this.editorControl.sub_header.visible = !this.editorControl.sub_header.visible;
    };
    EditorPage.prototype.changeVisivility = function () {
        this.page.visible = !this.page.visible;
    };
    EditorPage.prototype.togglePrivacy = function () {
        this.editorControl.footer_links.visible = !this.editorControl.footer_links.visible;
    };
    EditorPage.prototype.themeColorPopup = function () {
        jQuery('.theme-parent').removeClass('hide');
    };
    EditorPage.prototype.themeColorClose = function (palette) {
        this.colordot = palette;
        jQuery('.theme-parent').addClass('hide');
    };
    EditorPage.prototype.upload = function (type) {
        var _this = this;
        filepicker.setKey(this.filePickerKey);
        filepicker.pick({ mimetypes: ['image/*'], }, function (InkBlob) {
            if (type === 'logo')
                _this.editorControl.logo.props.title = InkBlob.url;
            else {
                _this.page.bgImage = InkBlob.url;
                _this.page.bgColor = '';
            }
            jQuery('#filepicker_dialog_container').find('a').click();
        }, function (FPError) {
            console.log(FPError.toString());
        });
    };
    EditorPage.prototype.callGA = function (opt) {
        switch (opt) {
            case "TOGGLELOGO":
                if (this.editorControl.logo.visible === true) {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'LogoOn');
                    _kmq.push(['record', 'Builder Logo On Toggle']);
                }
                else {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'LogoOff');
                    _kmq.push(['record', 'Builder Logo Off Toggle']);
                }
                break;
            case "UPLOADLOGO":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'UploadLogo');
                _kmq.push(['record', 'Builder Upload Logo Click']);
                break;
            case "TOGGLESUB":
                if (this.editorControl.sub_header.visible) {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'Toggle Sub Heading On');
                    _kmq.push(['record', 'Builder Sub Heading Toggle On']);
                }
                else {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'Toggle Sub Heading Off');
                    _kmq.push(['record', 'Builder Sub Heading Toggle Off']);
                }
                break;
            case "TOGGLEBG":
                if (this.page.bgImageVisible) {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'Toggle Background Image On');
                    _kmq.push(['record', 'Builder Background Image Toggle On']);
                }
                else {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'Toggle Background Image Off');
                    _kmq.push(['record', 'Builder Background Image Toggle Off']);
                }
                break;
            case "REPLACEBG":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'ReplaceImage');
                _kmq.push(['record', 'Builder Replace Image Click']);
                break;
            case "POWEROGTOGGLE":
                if (this.editorControl.poweredby.visible) {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'PoweredByOGOn');
                    _kmq.push(['record', 'Builder Powered By OG Toggle On']);
                }
                else {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'PoweredByOGOff');
                    _kmq.push(['record', 'Builder Powered By OG Toggle Off']);
                }
                break;
            case "PRIVACYTOGGLE":
                if (this.editorControl.footer_links.visible) {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'PrivacyPolicyOn');
                    _kmq.push(['record', 'Builder Privacy Policy Toggle On']);
                }
                else {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'PrivacyPolicyOff');
                    _kmq.push(['record', 'Builder Privacy Policy Toggle Off']);
                }
                break;
            case "CHANGETEMPLATE":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'ChangeTemplate');
                _kmq.push(['record', 'Builder Change Template Click']);
                break;
            case "HIDEWELCOMETOGGLE":
                if (this.page.visible) {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'Hide Welcome Screen');
                    _kmq.push(['record', 'Hide Welcome Screen Toggle On']);
                }
                else {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'Show Welcome Screen');
                    _kmq.push(['record', 'Hide Welcome Screen Toggle Off']);
                }
                break;
        }
    };
    EditorPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-page',
            templateUrl: 'assets/html/editor_page.html',
            directives: [editor_leadform_component_1.EditorLeadForm, router_1.ROUTER_DIRECTIVES],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [UrlShortner_service_1.UrlShortner, JSONElement_service_1.JSONElement],
            pipes: [index_1.SafeStyle],
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker, UrlShortner_service_1.UrlShortner, feature_access_service_1.FeatureAuthService, JSONElement_service_1.JSONElement])
    ], EditorPage);
    return EditorPage;
}());
exports.EditorPage = EditorPage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9wYWdlL2VkaXRvcl9wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdGLGVBQWUsQ0FBQyxDQUFBO0FBQ3hHLG9DQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3BFLDBDQUErQixrREFBa0QsQ0FBQyxDQUFBO0FBQ2xGLGdDQUErQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ25FLHVCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25ELDhDQUFnQyxpREFBaUQsQ0FBQyxDQUFBO0FBQ2xGLHVDQUFpQyx1REFBdUQsQ0FBQyxDQUFBO0FBQ3pGLG9DQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3BFLHNCQUEwQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQzlELG9DQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBZ0JwRTtJQW9CSSxvQkFDWSxrQkFBK0IsRUFDL0IsZUFBK0IsRUFDL0IsaUJBQWtDLEVBQ2xDLFlBQXlCLEVBQ3pCLG1CQUF1QyxFQUN2QyxtQkFBZ0M7UUFMaEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFhO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFhO1FBekI1QyxrQkFBYSxHQUFRLHdCQUF3QixDQUFDO1FBRzlDLGlCQUFZLEdBQVUsRUFBRSxDQUFDO1FBRXpCLGtCQUFhLEdBQVE7WUFDakIsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsRUFBRTtZQUNkLFlBQVksRUFBRSxFQUFFO1lBQ2hCLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixTQUFTLEVBQUUsRUFBRTtZQUNiLFlBQVksRUFBRSxFQUFFO1NBQ25CLENBQUM7UUFFTSwwQkFBcUIsR0FBWSxLQUFLLENBQUM7UUFDdkMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBV3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDakQsR0FBRyxDQUFDLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNFLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQy9FLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUUxRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkgsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQVk7WUFDNUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDMUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDNUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFXLEdBQVg7SUFFQSxDQUFDO0lBQ0QsZ0NBQVcsR0FBWDtJQUVBLENBQUM7SUFDRCxvQ0FBZSxHQUFmO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBOENoQixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBTztZQUNwQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBUTdDLENBQUMsQ0FBQyxDQUFBO1FBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFTLENBQU07WUFDeEMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxNQUFXLENBQUM7UUFDaEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDckMsU0FBUyxFQUFFLEdBQUc7WUFDZCxjQUFjLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFO1NBQzdELENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsVUFBVSxDQUFNLEVBQUUsTUFBVztZQUM5RSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFFbEUsQ0FBQyxDQUFDLENBQUM7UUFHSCxNQUFNLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUN6QyxTQUFTLEVBQUUsR0FBRztZQUNkLGNBQWMsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUU7U0FDN0QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxVQUFVLENBQU0sRUFBRSxNQUFXO1lBRWxGLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFFdEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUU7WUFDMUMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFBQyxDQUFDO1FBQzFGLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFbkUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JGLENBQUM7UUFBQyxJQUFJO1lBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRCxrQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUt6RCxDQUFDO0lBRUQsb0NBQWUsR0FBZjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDNUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDNUQsQ0FBQztJQUVMLENBQUM7SUFFRCxvQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0lBRW5GLENBQUM7SUFDRCxxQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzNDLENBQUM7SUFHRCxrQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO0lBQ3ZGLENBQUM7SUFDRCxvQ0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsb0NBQWUsR0FBZixVQUFnQixPQUFZO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELDJCQUFNLEdBQU4sVUFBTyxJQUFZO1FBQW5CLGlCQXNDQztRQXJDRyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQXNCdEMsVUFBVSxDQUFDLElBQUksQ0FDWCxFQUFFLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQzNCLFVBQUMsT0FBWTtZQUNULEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUN0RCxJQUFJLENBQUMsQ0FBQztnQkFDRixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDM0IsQ0FBQztZQUNELE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3RCxDQUFDLEVBQ0QsVUFBQyxPQUFZO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sR0FBVztRQUNkLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVixLQUFLLFlBQVk7Z0JBQ2IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzNDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLHlCQUF5QixDQUFDLENBQUMsQ0FBQztnQkFDckQsQ0FBQztnQkFDRCxLQUFLLENBQUM7WUFDVixLQUFLLFlBQVk7Z0JBQ2IsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLDJCQUEyQixDQUFDLENBQUMsQ0FBQztnQkFDbkQsS0FBSyxDQUFDO1lBQ1YsS0FBSyxXQUFXO2dCQUNaLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO29CQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLCtCQUErQixDQUFDLENBQUMsQ0FBQztnQkFDM0QsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDRixFQUFFLENBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztvQkFDbEYsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBQ0QsS0FBSyxDQUFDO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixDQUFDLENBQUM7b0JBQ3RGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO29CQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztnQkFDakUsQ0FBQztnQkFDRCxLQUFLLENBQUM7WUFDVixLQUFLLFdBQVc7Z0JBQ1osRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLDZCQUE2QixDQUFDLENBQUMsQ0FBQztnQkFDckQsS0FBSyxDQUFDO1lBQ1YsS0FBSyxlQUFlO2dCQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN2QyxFQUFFLENBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7b0JBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO29CQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFDRCxLQUFLLENBQUM7WUFDVixLQUFLLGVBQWU7Z0JBQ2hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQzFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO29CQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixFQUFFLENBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ELENBQUM7Z0JBQ0QsS0FBSyxDQUFDO1lBQ1YsS0FBSyxnQkFBZ0I7Z0JBQ2pCLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLCtCQUErQixDQUFDLENBQUMsQ0FBQztnQkFDdkQsS0FBSyxDQUFDO1lBQ1YsS0FBSyxtQkFBbUI7Z0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixDQUFDLENBQUM7b0JBQy9FLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsK0JBQStCLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNGLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO29CQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQWhVTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxVQUFVLEVBQUUsQ0FBQywwQ0FBYyxFQUFFLDBCQUFpQixDQUFDO1lBQy9DLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLGlDQUFXLEVBQUUsaUNBQVcsQ0FBQztZQUNyQyxLQUFLLEVBQUUsQ0FBQyxpQkFBUyxDQUFDO1NBQ3JCLENBQUM7O2tCQUFBO0lBeVRGLGlCQUFDO0FBQUQsQ0F2VEEsQUF1VEMsSUFBQTtBQXZUWSxrQkFBVSxhQXVUdEIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2VkaXRvcnMvcGFnZS9lZGl0b3JfcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFZGl0b3JMZWFkRm9ybSB9IGZyb20gJy4uLy4uL2VkaXRvcnMvbGVhZGZvcm0vZWRpdG9yX2xlYWRmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEpTT05JdGVtVHJhY2tlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05VcGRhdGVJdGVtVHJhY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtGZWF0dXJlQXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9mZWF0dXJlLWFjY2Vzcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXJsU2hvcnRuZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9VcmxTaG9ydG5lci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2FmZVN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGVtcGxhdGVzL3BpcGVzL2luZGV4JztcclxuaW1wb3J0IHsgSlNPTkVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09ORWxlbWVudC5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBmaWxlcGlja2VyOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdlZGl0b3ItcGFnZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9odG1sL2VkaXRvcl9wYWdlLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW0VkaXRvckxlYWRGb3JtLCBST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgcHJvdmlkZXJzOiBbVXJsU2hvcnRuZXIsIEpTT05FbGVtZW50XSxcclxuICAgIHBpcGVzOiBbU2FmZVN0eWxlXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JQYWdlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBmaWxlUGlja2VyS2V5OiBhbnkgPSAnQTN5Z0l3NGhJU1NDZEFwcVc0U0F3eic7XHJcbiAgICBwYWdlOiBhbnk7XHJcbiAgICBjb250cm9sOiBhbnk7XHJcbiAgICBzZWN0aW9uT3JkZXI6IGFueVtdID0gW107XHJcbiAgICBlZGl0b3JIdG1sOiBzdHJpbmc7XHJcbiAgICBlZGl0b3JDb250cm9sOiBhbnkgPSB7XHJcbiAgICAgICAgaGVhZGVyOiB7fSxcclxuICAgICAgICBzdWJfaGVhZGVyOiB7fSxcclxuICAgICAgICBjbGlja19idXR0b246IHt9LFxyXG4gICAgICAgIGxvZ286IHt9LFxyXG4gICAgICAgIGxlYWRmb3JtOiB7fSxcclxuICAgICAgICBwb3dlcmVkYnk6IHt9LFxyXG4gICAgICAgIGZvb3Rlcl9saW5rczoge31cclxuICAgIH07XHJcbiAgICBwcml2YXRlIGNvbG9yZG90OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGlzUG93ZXJlZEJ5QWNjZXNzaWJsZTogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0xlYWRHZW5lcmF0aW9uOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHRoZW1lUGFsZXR0ZXM6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGpzb25CdWlsZGVySGFuZGxlcjogSlNPTkJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfYnVpbGRlclNlcnZpY2U6IEJ1aWxkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX0l0ZW1UcmFja1NlcnZpY2U6IEpTT05JdGVtVHJhY2tlcixcclxuICAgICAgICBwcml2YXRlIF91cmxTaG9ydG5lcjogVXJsU2hvcnRuZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfZmVhdHVyZUF1dGhTZXJ2aWNlOiBGZWF0dXJlQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfanNvbkVsZW1lbnRTZXJ2aWNlOiBKU09ORWxlbWVudFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0ganNvbkJ1aWxkZXJIYW5kbGVyLmdldFNlbGVjdGVkUGFnZSgpO1xyXG4gICAgICAgIGZvciAobGV0IHNlY3Rpb24gaW4gdGhpcy5wYWdlLnNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gaW4gdGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMuZWRpdG9yQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSB0aGlzLnBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl0uaXRlbXNbaXRlbV0udHlwZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0b3JDb250cm9sW3Byb3BdID0gdGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dLml0ZW1zW2l0ZW1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX0l0ZW1UcmFja1NlcnZpY2UucmVzZXRVbnNhdmVkRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuX0l0ZW1UcmFja1NlcnZpY2Uuc2V0VW5TYXZlZFBhZ2UodGhpcy5wYWdlKTtcclxuICAgICAgICB0aGlzLmlzUG93ZXJlZEJ5QWNjZXNzaWJsZSA9IHRoaXMuX2ZlYXR1cmVBdXRoU2VydmljZS5mZWF0dXJlcy5jdXN0b21fYnJhbmRpbmc7XHJcbiAgICAgICAgdGhpcy5pc0xlYWRHZW5lcmF0aW9uID0gdGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmZlYXR1cmVzLmxlYWRfZ2VuZXJhdGlvbjtcclxuICAgICAgICAvLyBnZXQgcGFsbGV0ZXNcclxuICAgICAgICB0aGlzLnRoZW1lUGFsZXR0ZXMgPSB0aGlzLl9qc29uRWxlbWVudFNlcnZpY2UuZ2V0dGVtcGxhdGVQYWxldHRlcyh0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZSk7XHJcbiAgICAgICAgLy9zZXQgZGVmYXVsdCBjb2xvclxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnRoZW1lUGFsZXR0ZXMucGFsbGV0ZS5mb3JFYWNoKChwYWxsZXRlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhbGxldGUudGhlbWVDbGFzcyA9PSBzZWxmLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS50aGVtZUNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbG9yZG90ID0gcGFsbGV0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIC8vIHRoaXMuX0l0ZW1UcmFja1NlcnZpY2Uuc2V0VW5TYXZlZFBhZ2UodGhpcy5wYWdlKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIC8valF1ZXJ5KCcuZnItd3JhcHBlcicpLm1DdXN0b21TY3JvbGxiYXIoJ2Rlc3Ryb3knKTtcclxuICAgIH1cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLypGb3IgY29sb3IgUGlja2VyICovXHJcbiAgICAgICAgLy8galF1ZXJ5KCcudGhlbWUtY29sb3ItcGlja2VyJykuQ29sb3JQaWNrZXJTbGlkZXJzKHtcclxuICAgICAgICAvLyAgICAgcGxhY2VtZW50OiAndG9wJyxcclxuICAgICAgICAvLyAgICAgc2xpZGVyczogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgIGN1c3RvbXN3YXRjaGVzOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgc3dhdGNoZXM6IFtcclxuICAgICAgICAvLyAgICAgICAgICcjNjFCRDZEJywgJyMxQUJDOUMnLCAnIzU0QUNEMicsICcjMkM4MkM5JywgJyM5MzY1QjgnLCAnIzQ3NTU3NycsXHJcbiAgICAgICAgLy8gICAgICAgICAnI0NDQ0NDQycsICcjNDFBODVGJywgJyMwMEE4ODUnLCAnIzNEOEVCOScsICcjMjk2OUIwJywgJyM1NTM5ODInLFxyXG4gICAgICAgIC8vICAgICAgICAgJyMyODMyNEUnLCAnIzAwMDAwMCcsICcjRjdEQTY0JywgJyNGQkEwMjYnLCAnI0VCNkI1NicsICcjRTI1MDQxJyxcclxuICAgICAgICAvLyAgICAgICAgICcjQTM4Rjg0JywgJyNFRkVGRUYnLCAnI0ZGRkZGRicsICcjRkFDNTFDJywgJyNGMzc5MzQnLCAnI0QxNDg0MScsXHJcbiAgICAgICAgLy8gICAgICAgICAnI0I4MzEyRicsICcjN0M3MDZCJywgJyNEMUQ1RDgnLCAnIzAwQUVBNSdcclxuICAgICAgICAvLyAgICAgXSxcclxuICAgICAgICAvLyAgICAgaHN2cGFuZWw6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICBwcmV2aWV3Zm9ybWF0OiAnaGV4JyxcclxuICAgICAgICAvLyAgICAgb25jaGFuZ2U6IChjb250YWluZXI6IGFueSwgY29sb3I6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBjb2xvci50aW55LnRvSGV4U3RyaW5nKCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5zZXRUaGVtZUNvbG9yKHZhbHVlKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIGpRdWVyeSgnLnRoZW1lLWNvbG9yLXBpY2tlcicpLnRyaWdnZXIoJ2NvbG9ycGlja2Vyc2xpZGVycy51cGRhdGVDb2xvcicsIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldEpTT05CdWlsdCgpLnRoZW1lQ29sb3IpO1xyXG5cclxuICAgICAgICAvLyBqUXVlcnkoJy5iZy1jb2xvci1waWNrZXInKS5Db2xvclBpY2tlclNsaWRlcnMoe1xyXG4gICAgICAgIC8vICAgICBjb2xvcjogdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkudGhlbWVDb2xvciB8fCAnIzYxQkQ2RCcsXHJcbiAgICAgICAgLy8gICAgIHBsYWNlbWVudDogJ3RvcCcsXHJcbiAgICAgICAgLy8gICAgIHNsaWRlcnM6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICBjdXN0b21zd2F0Y2hlczogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgIHN3YXRjaGVzOiBbXHJcbiAgICAgICAgLy8gICAgICAgICAnIzYxQkQ2RCcsICcjMUFCQzlDJywgJyM1NEFDRDInLCAnIzJDODJDOScsICcjOTM2NUI4JywgJyM0NzU1NzcnLFxyXG4gICAgICAgIC8vICAgICAgICAgJyNDQ0NDQ0MnLCAnIzQxQTg1RicsICcjMDBBODg1JywgJyMzRDhFQjknLCAnIzI5NjlCMCcsICcjNTUzOTgyJyxcclxuICAgICAgICAvLyAgICAgICAgICcjMjgzMjRFJywgJyMwMDAwMDAnLCAnI0Y3REE2NCcsICcjRkJBMDI2JywgJyNFQjZCNTYnLCAnI0UyNTA0MScsXHJcbiAgICAgICAgLy8gICAgICAgICAnI0EzOEY4NCcsICcjRUZFRkVGJywgJyNGRkZGRkYnLCAnI0ZBQzUxQycsICcjRjM3OTM0JywgJyNEMTQ4NDEnLFxyXG4gICAgICAgIC8vICAgICAgICAgJyNCODMxMkYnLCAnIzdDNzA2QicsICcjRDFENUQ4JywgJyMwMEFFQTUnXHJcbiAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgLy8gICAgIGhzdnBhbmVsOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgcHJldmlld2Zvcm1hdDogJ2hleCcsXHJcbiAgICAgICAgLy8gICAgIG9uY2hhbmdlOiAoY29udGFpbmVyOiBhbnksIGNvbG9yOiBhbnkpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nID0gY29sb3IudGlueS50b1JnYlN0cmluZygpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wYWdlLmJnSW1hZ2UgPSAnJztcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucGFnZS5iZ0NvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyBqUXVlcnkoJy5iZy1jb2xvci1waWNrZXInKS50cmlnZ2VyKCdjb2xvcnBpY2tlcnNsaWRlcnMudXBkYXRlQ29sb3InLCB0aGlzLnBhZ2UuYmdDb2xvcik7XHJcblxyXG4gICAgICAgIC8qIHd5c2l3eWcgZWRpdG9yICovXHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUgOiBhbnkpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcudGhlbWUtcGFyZW50JykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgLy8gZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgLy8gdmFyIGNvbnRhaW5lciA9IGpRdWVyeShcIi50aGVtZS1wYXJlbnRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyAvL2NoZWNrIGlmIHRoZSBjbGlja2VkIGFyZWEgaXMgZHJvcERvd24gb3Igbm90XHJcbiAgICAgICAgICAgIC8vIGlmIChjb250YWluZXIuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gICAgIGpRdWVyeSgnLnRoZW1lLXBhcmVudCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgIGpRdWVyeShcIi5jb2xvci1wYXJlbnRcIikuY2xpY2soZnVuY3Rpb24oZTogYW55ICl7XHJcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBlZGl0b3I6IGFueTtcclxuICAgICAgICBlZGl0b3IgPSBqUXVlcnkoJy53eXNpd3lnJykuZnJvYWxhRWRpdG9yKHtcclxuICAgICAgICAgICAgaGVpZ2h0TWF4OiAyNTAsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdXR0b25zOiBbJ2JvbGQnLCAnfCcsICdpdGFsaWMnLCAnfCcsICd1bmRlcmxpbmUnLF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGpRdWVyeSgnLmZyLXdyYXBwZXInKS5tQ3VzdG9tU2Nyb2xsYmFyKHsgdGhlbWU6ICdkYXJrLTMnIH0pOyB9LCA1MCk7XHJcbiAgICAgICAgalF1ZXJ5KCcud3lzaXd5ZycpLm9uKCdmcm9hbGFFZGl0b3IuY29udGVudENoYW5nZWQnLCBmdW5jdGlvbiAoZTogYW55LCBlZGl0b3I6IGFueSkge1xyXG4gICAgICAgICAgICBzZWxmLmVkaXRvckh0bWwgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIHNlbGYuZWRpdG9yQ29udHJvbC5oZWFkZXIucHJvcHMudGl0bGUgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIC8vZ2V0IGlubmVyIGh0bWwgb2YgZWRpb3JcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyogc3ViaGVhZGVyICovXHJcbiAgICAgICAgZWRpdG9yID0galF1ZXJ5KCcud3lzaXd5Zy1zdWInKS5mcm9hbGFFZGl0b3Ioe1xyXG4gICAgICAgICAgICBoZWlnaHRNYXg6IDI1MCxcclxuICAgICAgICAgICAgdG9vbGJhckJ1dHRvbnM6IFsnYm9sZCcsICd8JywgJ2l0YWxpYycsICd8JywgJ3VuZGVybGluZScsXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgalF1ZXJ5KCcuZnItd3JhcHBlcicpLm1DdXN0b21TY3JvbGxiYXIoeyB0aGVtZTogJ2RhcmstMycgfSk7IH0sIDUwKTtcclxuICAgICAgICBqUXVlcnkoJy53eXNpd3lnLXN1YicpLm9uKCdmcm9hbGFFZGl0b3IuY29udGVudENoYW5nZWQnLCBmdW5jdGlvbiAoZTogYW55LCBlZGl0b3I6IGFueSkge1xyXG4gICAgICAgICAgICAvL3NlbGYuZWRpdG9ySHRtbCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgc2VsZi5lZGl0b3JDb250cm9sLnN1Yl9oZWFkZXIucHJvcHMudGl0bGUgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIC8vZ2V0IGlubmVyIGh0bWwgb2YgZWRpb3JcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNvbG9yLXBpY2tlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBqUXVlcnkoJy5zbGltU2Nyb2xsQmFyJykuY3NzKFwidG9wXCIpO1xyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KCcuc2xpbVNjcm9sbEJhcicpLmxlbmd0aCA+IDApIHsgalF1ZXJ5KCcjZm5hbWUnKS5hZGRDbGFzcygnYWN0aXZlLXRleHQnKTsgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxvZ28oKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0b3JDb250cm9sLmxvZ28udmlzaWJsZSA9ICF0aGlzLmVkaXRvckNvbnRyb2wubG9nby52aXNpYmxlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lZGl0b3JDb250cm9sLmxvZ28udmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zaG93LWNoZWNrJykucGFyZW50cygnLnR5cGUtZGV0YWlscycpLmZpbmQoJy5kaXYtY2hlY2snKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2hvdy1jaGVjaycpLnBhcmVudHMoJy50eXBlLWRldGFpbHMnKS5maW5kKCcuZGl2LWNoZWNrJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUJnSW1hZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmJnSW1hZ2VWaXNpYmxlID0gIXRoaXMucGFnZS5iZ0ltYWdlVmlzaWJsZTtcclxuICAgICAgICAvLyBpZiAodGhpcy5wYWdlLmJnSW1hZ2VWaXNpYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gICAgIGpRdWVyeSgnLmJnSW1hZ2VCdXR0b24nKS5zaG93KCk7XHJcbiAgICAgICAgLy8gfSBlbHNlXHJcbiAgICAgICAgLy8gICAgIGpRdWVyeSgnLmJnSW1hZ2VCdXR0b24nKS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUG93ZXJlZEJ5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUG93ZXJlZEJ5QWNjZXNzaWJsZSlcclxuICAgICAgICAgICAgdGhpcy5lZGl0b3JDb250cm9sLnBvd2VyZWRieS52aXNpYmxlID0gIXRoaXMuZWRpdG9yQ29udHJvbC5wb3dlcmVkYnkudmlzaWJsZTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjcHJlbWl1bU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0b3JDb250cm9sLnBvd2VyZWRieS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkucG93ZXJlZGJ5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVN1YkhlYWRlcigpIHtcclxuICAgICAgICB0aGlzLmVkaXRvckNvbnRyb2wuc3ViX2hlYWRlci52aXNpYmxlID0gIXRoaXMuZWRpdG9yQ29udHJvbC5zdWJfaGVhZGVyLnZpc2libGU7XHJcblxyXG4gICAgfVxyXG4gICAgY2hhbmdlVmlzaXZpbGl0eSgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UudmlzaWJsZSA9ICF0aGlzLnBhZ2UudmlzaWJsZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdG9nZ2xlUHJpdmFjeSgpIHtcclxuICAgICAgICB0aGlzLmVkaXRvckNvbnRyb2wuZm9vdGVyX2xpbmtzLnZpc2libGUgPSAhdGhpcy5lZGl0b3JDb250cm9sLmZvb3Rlcl9saW5rcy52aXNpYmxlO1xyXG4gICAgfVxyXG4gICAgdGhlbWVDb2xvclBvcHVwKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnRoZW1lLXBhcmVudCcpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICB9XHJcbiAgICB0aGVtZUNvbG9yQ2xvc2UocGFsZXR0ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jb2xvcmRvdCA9IHBhbGV0dGU7XHJcbiAgICAgICAgalF1ZXJ5KCcudGhlbWUtcGFyZW50JykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgIH1cclxuICAgIHVwbG9hZCh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBmaWxlcGlja2VyLnNldEtleSh0aGlzLmZpbGVQaWNrZXJLZXkpO1xyXG5cclxuICAgICAgICAvKmZpbGVwaWNrZXIucGljayhcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY3JvcFJhdGlvOiA0LzMsXHJcbiAgICAgICAgICAgIG1pbWV0eXBlOiAnaW1hZ2UvKicsXHJcbiAgICAgICAgICAgIHNlcnZpY2VzOiBbJ0NPTlZFUlQnLCAnQ09NUFVURVInXSxcclxuICAgICAgICAgICAgY29udmVyc2lvbnM6IFsnY3JvcCcsICdyb3RhdGUnLCAnZmlsdGVyJ11cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdW5jdGlvbihCbG9iKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVwbGFjZUh0bWxDaGFycyhKU09OLnN0cmluZ2lmeShCbG9iKSkpO1xyXG4gICAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IEJsb2IudXJsO1xyXG4gICAgICAgICAgICB2YXIgdGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcm9wX3JhdGlvX3Jlc3VsdHNcIik7XHJcbiAgICAgICAgICAgIHRhZy5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgKi9cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgZmlsZXBpY2tlci5waWNrKFxyXG4gICAgICAgICAgICB7IG1pbWV0eXBlczogWydpbWFnZS8qJ10sIH0sXHJcbiAgICAgICAgICAgIChJbmtCbG9iOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbG9nbycpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0b3JDb250cm9sLmxvZ28ucHJvcHMudGl0bGUgPSBJbmtCbG9iLnVybDtcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZS5iZ0ltYWdlID0gSW5rQmxvYi51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlLmJnQ29sb3IgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2ZpbGVwaWNrZXJfZGlhbG9nX2NvbnRhaW5lcicpLmZpbmQoJ2EnKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoRlBFcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhGUEVycm9yLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsR0Eob3B0OiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKG9wdCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiVE9HR0xFTE9HT1wiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWRpdG9yQ29udHJvbC5sb2dvLnZpc2libGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdMb2dvT24nKTtcclxuICAgICAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBMb2dvIE9uIFRvZ2dsZSddKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdUb2dnbGUnLCAnTG9nb09mZicpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIExvZ28gT2ZmIFRvZ2dsZSddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiVVBMT0FETE9HT1wiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDbGljaycsICdVcGxvYWRMb2dvJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBVcGxvYWQgTG9nbyBDbGljayddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiVE9HR0xFU1VCXCI6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmVkaXRvckNvbnRyb2wuc3ViX2hlYWRlci52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdUb2dnbGUnLCAnVG9nZ2xlIFN1YiBIZWFkaW5nIE9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgU3ViIEhlYWRpbmcgVG9nZ2xlIE9uJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdUb2dnbGUnLCAnVG9nZ2xlIFN1YiBIZWFkaW5nIE9mZicpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFN1YiBIZWFkaW5nIFRvZ2dsZSBPZmYnXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlRPR0dMRUJHXCI6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBhZ2UuYmdJbWFnZVZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdUb2dnbGUgQmFja2dyb3VuZCBJbWFnZSBPbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIEJhY2tncm91bmQgSW1hZ2UgVG9nZ2xlIE9uJ10pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdUb2dnbGUgQmFja2dyb3VuZCBJbWFnZSBPZmYnKTtcclxuICAgICAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBCYWNrZ3JvdW5kIEltYWdlIFRvZ2dsZSBPZmYnXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlJFUExBQ0VCR1wiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDbGljaycsICdSZXBsYWNlSW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFJlcGxhY2UgSW1hZ2UgQ2xpY2snXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlBPV0VST0dUT0dHTEVcIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVkaXRvckNvbnRyb2wucG93ZXJlZGJ5LnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdQb3dlcmVkQnlPR09uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgUG93ZXJlZCBCeSBPRyBUb2dnbGUgT24nXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1Bvd2VyZWRCeU9HT2ZmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgUG93ZXJlZCBCeSBPRyBUb2dnbGUgT2ZmJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJQUklWQUNZVE9HR0xFXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lZGl0b3JDb250cm9sLmZvb3Rlcl9saW5rcy52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdUb2dnbGUnLCAnUHJpdmFjeVBvbGljeU9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgUHJpdmFjeSBQb2xpY3kgVG9nZ2xlIE9uJ10pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdQcml2YWN5UG9saWN5T2ZmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgUHJpdmFjeSBQb2xpY3kgVG9nZ2xlIE9mZiddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ0hBTkdFVEVNUExBVEVcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnQ2hhbmdlVGVtcGxhdGUnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIENoYW5nZSBUZW1wbGF0ZSBDbGljayddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiSElERVdFTENPTUVUT0dHTEVcIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UudmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ0hpZGUgV2VsY29tZSBTY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnSGlkZSBXZWxjb21lIFNjcmVlbiBUb2dnbGUgT24nXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdTaG93IFdlbGNvbWUgU2NyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0hpZGUgV2VsY29tZSBTY3JlZW4gVG9nZ2xlIE9mZiddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
