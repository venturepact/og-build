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
var JSONElement_service_1 = require('../../../services/JSONElement.service');
var model_1 = require('../../../models/model');
var common_properties_component_1 = require('../common/common_properties.component');
var builder_service_1 = require('../../../services/builder.service');
var JSONUpdateItemTracker_service_1 = require('../../../services/JSONUpdateItemTracker.service');
var EditorCheckbox = (function () {
    function EditorCheckbox(jsonBuilderHelper, jsonElementHandler, _builderService, _itemTrackService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.jsonElementHandler = jsonElementHandler;
        this._builderService = _builderService;
        this._itemTrackService = _itemTrackService;
        this.showIcon = true;
        this.iconArray = ['android', 'devices', 'desktop_mac', 'tablet', 'business', 'call', 'call_end', 'chat',
            'chat_bubble', 'comment', 'contact_mail', 'contact_phone', 'forum', 'import_contacts',
            'import_export', 'invert_colors_off', 'live_help', 'location_off', 'location_on',
            'no_sim', 'phonelink_erase', 'phonelink_lock', 'phonelink_ring', 'phonelink_setup',
            'portable_wifi_off', 'present_to_all', 'ring_volume', 'rss_feed', 'screen_share',
            'speaker_phone', 'stay_current_landscape', 'stay_current_portrait', 'swap_calls',
            'textsms', 'add_circle', 'archive', 'clear', 'content_copy', 'content_cut', 'content_paste',
            'create', 'delete_sweep', 'drafts', 'filter_list', 'flag', 'font_download', 'forward',
            'gesture', 'inbox', 'link', 'low_priority', 'mail', 'move_to_inbox', 'weekend', 'access_alarm',
            'devices', 'airplanemode_active', 'airplanemode_inactive', 'battery_alert',
            'battery_charging_full', 'bluetooth', 'brightness_auto', 'brightness_medium', 'sd_storage',
            'settings_system_daydream', 'storage', 'attach_file', 'attach_money', 'border_color'
        ];
        this.control = jsonBuilderHelper.getSelectedControl();
        this.inputType = (jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical' ? 'number' : 'text');
    }
    EditorCheckbox.prototype.ngOnInit = function () {
        if (this.control.isIconPresent === true) {
            this.showIcon = true;
        }
        else {
            this.showIcon = false;
        }
    };
    EditorCheckbox.prototype.ngAfterViewInit = function () {
    };
    EditorCheckbox.prototype.ngDoCheck = function () {
        if (this.control.isIconPresent === true) {
            this.showIcon = true;
        }
        else {
            this.showIcon = false;
        }
    };
    EditorCheckbox.prototype.OpenChangeIcon = function (i) {
        jQuery('.choose-icon').parents('.iconopen' + i + '').toggleClass('open');
    };
    EditorCheckbox.prototype.OpenPreviousIcon = function (i) {
        jQuery('.optionicon' + i + '').toggleClass('open');
    };
    EditorCheckbox.prototype.CloseChangeIcon = function (i) {
        jQuery('.choose-icon').parents('.optionicon' + i + '').removeClass('open');
    };
    EditorCheckbox.prototype.add_Option_In_Dropdown = function () {
        var item = new model_1.Item;
        this.control.options.push(item.getOption());
        this.jsonBuilderHelper.updateFormGroup();
    };
    EditorCheckbox.prototype.delete_Option_From_Items = function (options, index) {
        options.splice(index, 1);
    };
    EditorCheckbox.prototype.onChangeDescription = function (control) {
        control.config.showHelp = !control.config.showHelp;
    };
    EditorCheckbox.prototype.onChange = function (control) {
        control.config.validations.required.status = !control.config.validations.required.status;
    };
    EditorCheckbox.prototype.ShowIcon = function () {
        this.showIcon = true;
        this.control.isIconPresent = true;
    };
    EditorCheckbox.prototype.HideIcon = function () {
        this.showIcon = false;
        this.control.isIconPresent = false;
        for (var _i = 0, _a = this.control.options; _i < _a.length; _i++) {
            var option = _a[_i];
            option.icon = '';
        }
    };
    EditorCheckbox.prototype.seAsDefault = function (options, option) {
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option_1 = options_1[_i];
            if (option_1.defualtselected === true) {
                option_1.defualtselected = false;
            }
            if (option_1.selected === true) {
                option_1.selected = false;
            }
        }
        option.defualtselected = true;
        option.selected = true;
    };
    EditorCheckbox.prototype.UnSet = function (option) {
        option.defualtselected = false;
        option.selected = false;
    };
    EditorCheckbox.prototype.onChangeControl = function () {
        if (this.jsonBuilderHelper.getSelectedControl().type === 'checkbox') {
            this.jsonBuilderHelper.changeControl('radio_button');
        }
        else {
            this.jsonBuilderHelper.changeControl('checkbox');
        }
    };
    EditorCheckbox.prototype.changeIcon = function (option, event) {
        option.icon = event.target.value;
        if (option.previousIcons.indexOf(event.target.value) === -1) {
            if (event.target.value !== '') {
                if (option.previousIcons.length > 3) {
                    option.previousIcons.splice(0, 1);
                    option.previousIcons.push(event.target.value);
                }
                else {
                    option.previousIcons.push(event.target.value);
                }
            }
        }
    };
    EditorCheckbox.prototype.ngOnChanges = function () {
        this._itemTrackService.resetUnsavedData();
        this._itemTrackService.setUnSavedItems(this.control);
    };
    EditorCheckbox.prototype.callGA = function (str, control) {
        if (control === void 0) { control = {}; }
        switch (str) {
            case "HELPTEXT":
                if (control.config.showHelp) {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'ToggleHelpTextOn');
                    _kmq.push(['record', 'Builder Toggle Help Text On']);
                }
                else {
                    ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'ToggleHelpTextOff');
                    _kmq.push(['record', 'Builder Toggle Help Text Off']);
                }
                break;
            case "TOGGLEICONON":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'IconShow');
                _kmq.push(['record', 'Builder Icon Show']);
                break;
            case "TOGGLEICONOFF":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'IconHide');
                _kmq.push(['record', 'Builder Icon Hide']);
                break;
            case "SETDEFAULT":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'SetValueDefault');
                _kmq.push(['record', 'Builder Set Value Default']);
                break;
            case "UNSETDEFAULT":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'UnsetValueDefault');
                _kmq.push(['record', 'Builder Unset Value Default']);
                break;
            case "ADDOPTION":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'AddAnotherValue');
                _kmq.push(['record', 'Builder Add Another Value']);
                break;
            case "DELETEOPTION":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'RemoveValue');
                _kmq.push(['record', 'Builder Remove Value']);
                break;
            case "MANDATE":
                if (control.config.validations.required.status) {
                    ga('markettingteam.send', 'event', 'Builder', 'Check', 'MarkAsMandatory');
                    _kmq.push(['record', 'Builder Mark As Mandatory']);
                }
                else {
                    ga('markettingteam.send', 'event', 'Builder', 'Check', 'UnmarkAsMandatory');
                    _kmq.push(['record', 'Builder Unmark As Mandatory']);
                }
                break;
        }
    };
    EditorCheckbox.prototype.onKeyDown = function (index, $event) {
        if ($event.keyCode == 9 && this.control.options.length == index + 1) {
            this.add_Option_In_Dropdown();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorCheckbox.prototype, "control", void 0);
    EditorCheckbox = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-checkbox',
            directives: [common_properties_component_1.CommonEditor],
            templateUrl: 'assets/html/editor_checkbox.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker])
    ], EditorCheckbox);
    return EditorCheckbox;
}());
exports.EditorCheckbox = EditorCheckbox;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9jaGVja2JveC9lZGl0b3JfY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0YsZUFBZSxDQUFDLENBQUE7QUFDL0csb0NBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsb0NBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsc0JBQXFCLHVCQUF1QixDQUFDLENBQUE7QUFDN0MsNENBQThCLHVDQUF1QyxDQUFDLENBQUE7QUFDdEUsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsOENBQWdDLGlEQUFpRCxDQUFDLENBQUE7QUFjbEY7SUFtQkMsd0JBQW9CLGlCQUE4QixFQUN6QyxrQkFBK0IsRUFDL0IsZUFBK0IsRUFDL0IsaUJBQWtDO1FBSHZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUN6Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWE7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBaUI7UUFsQjNDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFhLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU07WUFDckcsYUFBYSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxpQkFBaUI7WUFDckYsZUFBZSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsYUFBYTtZQUNoRixRQUFRLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCO1lBQ2xGLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsY0FBYztZQUNoRixlQUFlLEVBQUUsd0JB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c0JBQUE7SUErTkYscUJBQUM7QUFBRCxDQTdOQSxBQTZOQyxJQUFBO0FBN05ZLHNCQUFjLGlCQTZOMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2VkaXRvcnMvY2hlY2tib3gvZWRpdG9yX2NoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25DaGFuZ2VzLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09ORWxlbWVudCB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05FbGVtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgQ29tbW9uRWRpdG9yICB9IGZyb20gJy4uL2NvbW1vbi9jb21tb25fcHJvcGVydGllcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdWlsZGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2J1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEpTT05JdGVtVHJhY2tlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05VcGRhdGVJdGVtVHJhY2tlci5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBlOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2VkaXRvci1jaGVja2JveCcsXHJcblx0ZGlyZWN0aXZlczogW0NvbW1vbkVkaXRvcl0sXHJcblx0dGVtcGxhdGVVcmw6ICdhc3NldHMvaHRtbC9lZGl0b3JfY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yQ2hlY2tib3ggaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIERvQ2hlY2ssIE9uQ2hhbmdlcyB7XHJcblx0QElucHV0KCkgY29udHJvbDogYW55O1xyXG5cdGlucHV0VHlwZTogc3RyaW5nO1xyXG5cdGRlZmF1bHRTZWxlY3RlZDogYW55O1xyXG5cdHNob3dJY29uID0gdHJ1ZTtcclxuXHRpY29uQXJyYXk6IHN0cmluZ1tdID0gWydhbmRyb2lkJywgJ2RldmljZXMnLCAnZGVza3RvcF9tYWMnLCAndGFibGV0JywgJ2J1c2luZXNzJywgJ2NhbGwnLCAnY2FsbF9lbmQnLCAnY2hhdCcsXHJcblx0IFx0XHRcdFx0XHRcdCdjaGF0X2J1YmJsZScsICdjb21tZW50JywgJ2NvbnRhY3RfbWFpbCcsICdjb250YWN0X3Bob25lJywgJ2ZvcnVtJywgJ2ltcG9ydF9jb250YWN0cycsXHJcblx0XHRcdFx0XHRcdFx0ICdpbXBvcnRfZXhwb3J0JywgJ2ludmVydF9jb2xvcnNfb2ZmJywgJ2xpdmVfaGVscCcsICdsb2NhdGlvbl9vZmYnLCAnbG9jYXRpb25fb24nLFxyXG5cdFx0XHRcdFx0XHRcdCAnbm9fc2ltJywgJ3Bob25lbGlua19lcmFzZScsICdwaG9uZWxpbmtfbG9jaycsICdwaG9uZWxpbmtfcmluZycsICdwaG9uZWxpbmtfc2V0dXAnLFxyXG5cdFx0XHRcdFx0XHRcdCAncG9ydGFibGVfd2lmaV9vZmYnLCAncHJlc2VudF90b19hbGwnLCAncmluZ192b2x1bWUnLCAncnNzX2ZlZWQnLCAnc2NyZWVuX3NoYXJlJyxcclxuXHRcdFx0XHRcdFx0XHQgJ3NwZWFrZXJfcGhvbmUnLCAnc3RheV9jdXJyZW50X2xhbmRzY2FwZScsICdzdGF5X2N1cnJlbnRfcG9ydHJhaXQnLCAnc3dhcF9jYWxscycsXHJcblx0XHRcdFx0XHRcdFx0ICd0ZXh0c21zJywgJ2FkZF9jaXJjbGUnLCAnYXJjaGl2ZScsICdjbGVhcicsICdjb250ZW50X2NvcHknLCAnY29udGVudF9jdXQnLCAnY29udGVudF9wYXN0ZScsXHJcblx0XHRcdFx0XHRcdFx0ICdjcmVhdGUnLCAnZGVsZXRlX3N3ZWVwJywgJ2RyYWZ0cycsICdmaWx0ZXJfbGlzdCcsICdmbGFnJywgJ2ZvbnRfZG93bmxvYWQnLCAnZm9yd2FyZCcsXHJcblx0XHRcdFx0XHRcdFx0ICdnZXN0dXJlJywgJ2luYm94JywgJ2xpbmsnLCAnbG93X3ByaW9yaXR5JywgJ21haWwnLCAnbW92ZV90b19pbmJveCcsICd3ZWVrZW5kJywgJ2FjY2Vzc19hbGFybScsXHJcblx0XHRcdFx0XHRcdFx0ICdkZXZpY2VzJywgJ2FpcnBsYW5lbW9kZV9hY3RpdmUnLCAnYWlycGxhbmVtb2RlX2luYWN0aXZlJywgJ2JhdHRlcnlfYWxlcnQnLFxyXG5cdFx0XHRcdFx0XHRcdCAnYmF0dGVyeV9jaGFyZ2luZ19mdWxsJywgJ2JsdWV0b290aCcsICdicmlnaHRuZXNzX2F1dG8nLCAnYnJpZ2h0bmVzc19tZWRpdW0nLCAnc2Rfc3RvcmFnZScsXHJcblx0XHRcdFx0XHRcdFx0ICdzZXR0aW5nc19zeXN0ZW1fZGF5ZHJlYW0nLCAnc3RvcmFnZScsICdhdHRhY2hfZmlsZScsICdhdHRhY2hfbW9uZXknLCAnYm9yZGVyX2NvbG9yJ1xyXG5cdF07XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyLFxyXG5cdFx0cHJpdmF0ZSBqc29uRWxlbWVudEhhbmRsZXI6IEpTT05FbGVtZW50LFxyXG5cdFx0cHJpdmF0ZSBfYnVpbGRlclNlcnZpY2U6IEJ1aWxkZXJTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfaXRlbVRyYWNrU2VydmljZTogSlNPTkl0ZW1UcmFja2VyXHJcblx0KSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sID0ganNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRDb250cm9sKCk7XHJcblx0XHR0aGlzLmlucHV0VHlwZSA9IChqc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGU9PSdOdW1lcmljYWwnPydudW1iZXInOid0ZXh0Jyk7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRyb2wuaXNJY29uUHJlc2VudCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHR0aGlzLnNob3dJY29uID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2hvd0ljb24gPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gIC8vICAgXHRcdGpRdWVyeShcIi5pY29uLW9wXCIpLmNzcygnaGVpZ2h0JywgXCIxMTdweFwiKTtcclxuICAvLyAgICAgICBcdGpRdWVyeSgnLmljb24tb3AnKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAvLyAgICAgICAgICAgdGhlbWU6ICdkYXJrLTMnLFxyXG4gIC8vICAgICAgIFx0fSk7XHJcbiAgLy8gICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBcdC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgXHQvLyBcdGpRdWVyeShcIi5pY29uLW9wXCIpLmNzcygnaGVpZ2h0JywgXCIxMTdweFwiKTtcclxuICAgICAgICAvLyBcdGpRdWVyeSgnLmljb24tb3AnKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICAvLyAgICAgdGhlbWU6ICdkYXJrLTMnLFxyXG4gICAgICAgIC8vIFx0fSk7XHJcbiAgICAgICAgLy8gfSwgMjAwMCk7XHJcbiAgICB9XHJcblx0bmdEb0NoZWNrKCkge1xyXG5cdFx0aWYgKHRoaXMuY29udHJvbC5pc0ljb25QcmVzZW50ID09PSB0cnVlKSB7XHJcblx0XHRcdHRoaXMuc2hvd0ljb24gPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zaG93SWNvbiA9IGZhbHNlO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cdE9wZW5DaGFuZ2VJY29uKGk6IGFueSkge1xyXG5cdFx0alF1ZXJ5KCcuY2hvb3NlLWljb24nKS5wYXJlbnRzKCcuaWNvbm9wZW4nICsgaSArICcnKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG5cdH1cclxuXHRPcGVuUHJldmlvdXNJY29uKGk6IGFueSkge1xyXG5cdFx0alF1ZXJ5KCcub3B0aW9uaWNvbicgKyBpICsgJycpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcblx0fVxyXG5cdENsb3NlQ2hhbmdlSWNvbihpOiBhbnkpIHtcclxuXHRcdGpRdWVyeSgnLmNob29zZS1pY29uJykucGFyZW50cygnLm9wdGlvbmljb24nICsgaSArICcnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cdH1cclxuXHRhZGRfT3B0aW9uX0luX0Ryb3Bkb3duKCkge1xyXG5cdFx0bGV0IGl0ZW0gPSBuZXcgSXRlbTtcclxuXHRcdHRoaXMuY29udHJvbC5vcHRpb25zLnB1c2goaXRlbS5nZXRPcHRpb24oKSk7XHJcblx0XHRcclxuXHRcdHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIudXBkYXRlRm9ybUdyb3VwKCk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVfT3B0aW9uX0Zyb21fSXRlbXMob3B0aW9uczogYW55LCBpbmRleDogYW55KSB7XHJcblx0XHRvcHRpb25zLnNwbGljZShpbmRleCwgMSk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlRGVzY3JpcHRpb24oY29udHJvbDogYW55KSB7XHJcbiAgICAgICAgY29udHJvbC5jb25maWcuc2hvd0hlbHAgPSAhY29udHJvbC5jb25maWcuc2hvd0hlbHA7XHJcbiAgICB9XHJcblx0b25DaGFuZ2UoY29udHJvbDogYW55KSB7XHJcbiAgICAgICAgY29udHJvbC5jb25maWcudmFsaWRhdGlvbnMucmVxdWlyZWQuc3RhdHVzID0gIWNvbnRyb2wuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cztcclxuXHRcdC8vIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIudXBkYXRlRm9ybUdyb3VwKCk7XHJcbiAgICB9XHJcblx0U2hvd0ljb24oKSB7XHJcblx0XHR0aGlzLnNob3dJY29uID0gdHJ1ZTtcclxuXHRcdHRoaXMuY29udHJvbC5pc0ljb25QcmVzZW50ID0gdHJ1ZTtcclxuXHRcdC8vIGZvcihsZXQgb3B0aW9uIG9mIHRoaXMuY29udHJvbC5vcHRpb25zKSB7XHJcblx0XHQvLyBcdG9wdGlvbi5pY29uID0nJztcclxuXHRcdC8vIH1cclxuXHR9XHJcblx0SGlkZUljb24oKSB7XHJcblx0XHR0aGlzLnNob3dJY29uID0gZmFsc2U7XHJcblx0XHR0aGlzLmNvbnRyb2wuaXNJY29uUHJlc2VudCA9IGZhbHNlO1xyXG5cdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHRoaXMuY29udHJvbC5vcHRpb25zKSB7XHJcblx0XHRcdG9wdGlvbi5pY29uID0gJyc7XHJcblx0XHR9XHJcblx0fVxyXG5cdHNlQXNEZWZhdWx0KG9wdGlvbnM6IGFueSwgb3B0aW9uOiBhbnkpIHtcclxuXHJcblx0XHQvLyBpZih0aGlzLmNvbnRyb2wudHlwZSA9PT0gJ3JhZGlvX2J1dHRvbicpIHtcclxuXHRcdGZvciAobGV0IG9wdGlvbiBvZiBvcHRpb25zKSB7XHJcblx0XHRcdGlmIChvcHRpb24uZGVmdWFsdHNlbGVjdGVkID09PSB0cnVlKSB7XHJcblx0XHRcdFx0b3B0aW9uLmRlZnVhbHRzZWxlY3RlZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChvcHRpb24uc2VsZWN0ZWQgPT09IHRydWUpIHtcclxuXHRcdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0b3B0aW9uLmRlZnVhbHRzZWxlY3RlZCA9IHRydWU7XHJcblx0XHRvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0Ly8gfWVsc2Uge1xyXG5cdFx0Ly8gXHRvcHRpb24uZGVmdWFsdHNlbGVjdGVkID0gIW9wdGlvbi5kZWZ1YWx0c2VsZWN0ZWQ7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cdFVuU2V0KG9wdGlvbjogYW55KSB7XHJcblx0XHRvcHRpb24uZGVmdWFsdHNlbGVjdGVkID0gZmFsc2U7XHJcblx0XHRvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHR9XHJcblx0b25DaGFuZ2VDb250cm9sKCkge1xyXG5cdFx0aWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRDb250cm9sKCkudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG5cdFx0XHR0aGlzLmpzb25CdWlsZGVySGVscGVyLmNoYW5nZUNvbnRyb2woJ3JhZGlvX2J1dHRvbicpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5qc29uQnVpbGRlckhlbHBlci5jaGFuZ2VDb250cm9sKCdjaGVja2JveCcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRjaGFuZ2VJY29uKG9wdGlvbjogYW55LCBldmVudDogYW55KSB7XHJcblx0XHRvcHRpb24uaWNvbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHRcdC8vc3RvcmUgcHJldmlvdXNseSBzZWxlY3RlZCBJY29uc1xyXG5cdFx0Ly9vcHRpb24ucHJldmlvdXNJY29ucy5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0XHRpZiAob3B0aW9uLnByZXZpb3VzSWNvbnMuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUpID09PSAtMSkge1xyXG5cclxuXHRcdFx0aWYgKGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gJycpIHtcclxuXHRcdFx0XHRpZiAob3B0aW9uLnByZXZpb3VzSWNvbnMubGVuZ3RoID4gMykge1xyXG5cdFx0XHRcdFx0b3B0aW9uLnByZXZpb3VzSWNvbnMuc3BsaWNlKDAsIDEpO1xyXG5cdFx0XHRcdFx0b3B0aW9uLnByZXZpb3VzSWNvbnMucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRvcHRpb24ucHJldmlvdXNJY29ucy5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uQ2hhbmdlcygpIHtcclxuXHRcdHRoaXMuX2l0ZW1UcmFja1NlcnZpY2UucmVzZXRVbnNhdmVkRGF0YSgpO1xyXG5cdFx0dGhpcy5faXRlbVRyYWNrU2VydmljZS5zZXRVblNhdmVkSXRlbXModGhpcy5jb250cm9sKTtcclxuICAgIH1cclxuXHJcblx0Ly8gXHRuZ09uRGVzdHJveSgpIHtcclxuXHQvLyBcdHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUluaXQoKTtcclxuXHQvLyBcdGxldCB1blNhdmVkT2JqID0gdGhpcy5fSXRlbVRyYWNrU2VydmljZS5nZXRVblNhdmVkRGF0YSgpO1xyXG4gICAgLy8gICAgIHRoaXMuX0l0ZW1UcmFja1NlcnZpY2UucmVzZXRVbnNhdmVkRGF0YSgpO1xyXG4gICAgLy8gICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLnVwZGF0ZUNoYW5nZXModW5TYXZlZE9iailcclxuXHQvLyBcdFx0LnN1YnNjcmliZShcclxuXHQvLyBcdFx0KHJlc3BvbnNlOiBhbnkpID0+IHtcclxuXHQvLyBcdFx0XHR0aGlzLmpzb25CdWlsZGVySGVscGVyLmRlYm91bmNlKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUxvYWQoKSwxODAwKTtcclxuXHQvLyBcdFx0fSxcclxuXHQvLyBcdFx0KGVycm9yOiBhbnkpID0+IHtcclxuXHQvLyBcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdFx0KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjYWxsR0Eoc3RyOiBzdHJpbmcsIGNvbnRyb2w6IGFueSA9IHt9KSB7XHJcblx0XHRzd2l0Y2ggKHN0cikge1xyXG5cdFx0XHRjYXNlIFwiSEVMUFRFWFRcIjpcclxuXHRcdFx0XHRpZiAoY29udHJvbC5jb25maWcuc2hvd0hlbHApIHtcclxuXHRcdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1RvZ2dsZUhlbHBUZXh0T24nKTtcclxuXHRcdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFRvZ2dsZSBIZWxwIFRleHQgT24nXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdUb2dnbGUnLCAnVG9nZ2xlSGVscFRleHRPZmYnKTtcclxuXHRcdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFRvZ2dsZSBIZWxwIFRleHQgT2ZmJ10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgXCJUT0dHTEVJQ09OT05cIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0ljb25TaG93Jyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgSWNvbiBTaG93J10pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcIlRPR0dMRUlDT05PRkZcIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0ljb25IaWRlJyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgSWNvbiBIaWRlJ10pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcIlNFVERFRkFVTFRcIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ1NldFZhbHVlRGVmYXVsdCcpO1xyXG5cdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFNldCBWYWx1ZSBEZWZhdWx0J10pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcIlVOU0VUREVGQVVMVFwiOlxyXG5cdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnVW5zZXRWYWx1ZURlZmF1bHQnKTtcclxuXHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBVbnNldCBWYWx1ZSBEZWZhdWx0J10pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcIkFERE9QVElPTlwiOlxyXG5cdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnQWRkQW5vdGhlclZhbHVlJyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgQWRkIEFub3RoZXIgVmFsdWUnXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIFwiREVMRVRFT1BUSU9OXCI6XHJcblx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDbGljaycsICdSZW1vdmVWYWx1ZScpO1xyXG5cdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFJlbW92ZSBWYWx1ZSddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgXCJNQU5EQVRFXCI6XHJcblx0XHRcdFx0aWYgKGNvbnRyb2wuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cykge1xyXG5cdFx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDaGVjaycsICdNYXJrQXNNYW5kYXRvcnknKTtcclxuXHRcdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIE1hcmsgQXMgTWFuZGF0b3J5J10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2hlY2snLCAnVW5tYXJrQXNNYW5kYXRvcnknKTtcclxuXHRcdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFVubWFyayBBcyBNYW5kYXRvcnknXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuXHRvbktleURvd24oaW5kZXg6IGFueSwgJGV2ZW50OiBhbnkpIHtcclxuXHRcdGlmICgkZXZlbnQua2V5Q29kZSA9PSA5ICYmIHRoaXMuY29udHJvbC5vcHRpb25zLmxlbmd0aCA9PSBpbmRleCArIDEpIHtcclxuXHRcdFx0dGhpcy5hZGRfT3B0aW9uX0luX0Ryb3Bkb3duKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==
