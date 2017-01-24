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
var JSONElement_service_1 = require('../../../services/JSONElement.service');
var common_properties_component_1 = require('../common/common_properties.component');
var JSONBuilder_service_1 = require('../../../services/JSONBuilder.service');
var model_1 = require('../../../models/model');
var builder_service_1 = require('../../../services/builder.service');
var JSONUpdateItemTracker_service_1 = require('../../../services/JSONUpdateItemTracker.service');
var EditorRadioButton = (function () {
    function EditorRadioButton(jsonBuilderHelper, jsonElementHandler, _builderService, _ItemTrackService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.jsonElementHandler = jsonElementHandler;
        this._builderService = _builderService;
        this._ItemTrackService = _ItemTrackService;
        this.control = jsonBuilderHelper.getSelectedControl();
    }
    EditorRadioButton.prototype.ngDoCheck = function () {
        this.control = this.jsonBuilderHelper.getSelectedControl();
    };
    EditorRadioButton.prototype.add_Option_In_Dropdown = function () {
        var item = new model_1.Item;
        this.control.options.push(item.getOption());
        this.jsonBuilderHelper.updateFormGroup();
    };
    EditorRadioButton.prototype.delete_Option_From_Items = function (options, index) {
        options.splice(index, 1);
    };
    EditorRadioButton.prototype.onChangeDescription = function (control) {
        control.config.showHelp = !control.config.showHelp;
        if (control.config.showHelp === true) {
            jQuery('.show-check').parents('.type-details').find('.div-check').fadeIn('slow');
        }
        else
            jQuery('.show-check').parents('.type-details').find('.div-check').fadeOut('slow');
    };
    EditorRadioButton.prototype.onChange = function (control) {
        control.config.validations.required.status = !control.config.validations.required.status;
        this.jsonBuilderHelper.updateFormGroup();
    };
    EditorRadioButton.prototype.onChangeControl = function () {
        if (this.jsonBuilderHelper.getSelectedControl().type === 'checkbox') {
            this.jsonBuilderHelper.changeControl('radio_button');
        }
        else {
            this.jsonBuilderHelper.changeControl('checkbox');
        }
    };
    EditorRadioButton.prototype.seAsDefault = function (options, option) {
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option_1 = options_1[_i];
            if (option_1.defualtselected === true) {
                option_1.defualtselected = false;
            }
        }
        option.defualtselected = true;
    };
    EditorRadioButton.prototype.ngOnChanges = function () {
        this._ItemTrackService.setUnSavedItems(this.control);
    };
    EditorRadioButton.prototype.ngOnDestroy = function () {
    };
    EditorRadioButton.prototype.callGA = function (str, control) {
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
            case "DELETE":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Builder Remove Value');
                _kmq.push(['record', 'Builder Remove Value']);
                break;
            case "SETDEFAULT":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Builder Set Value Default');
                _kmq.push(['record', 'Builder Set Value Default']);
                break;
            case "ADDOPTION":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Builder Add Option Click');
                _kmq.push(['record', 'Builder Add Option Click']);
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
    EditorRadioButton.prototype.onKeyDown = function (index, $event) {
        if ($event.keyCode == 9 && this.control.options.length == index + 1) {
            this.add_Option_In_Dropdown();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorRadioButton.prototype, "control", void 0);
    EditorRadioButton = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-radiobutton',
            directives: [common_properties_component_1.CommonEditor],
            templateUrl: 'assets/html/editor_radiobutton.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker])
    ], EditorRadioButton);
    return EditorRadioButton;
}());
exports.EditorRadioButton = EditorRadioButton;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9yYWRpb2J1dHRvbi9lZGl0b3JfcmFkaW9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0YsZUFBZSxDQUFDLENBQUE7QUFDbEcsb0NBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsNENBQThCLHVDQUF1QyxDQUFDLENBQUE7QUFDdEUsb0NBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsc0JBQXFCLHVCQUF1QixDQUFDLENBQUE7QUFDN0MsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsOENBQWdDLGlEQUFpRCxDQUFDLENBQUE7QUFhbEY7SUFHSSwyQkFDTSxpQkFBOEIsRUFDOUIsa0JBQStCLEVBQy9CLGVBQStCLEVBQy9CLGlCQUFrQztRQUhsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWE7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFhO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO1FBRXBDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBQ0oscUNBQVMsR0FBVDtRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUNELGtEQUFzQixHQUF0QjtRQUNDLElBQUksSUFBSSxHQUFHLElBQUksWUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELG9EQUF3QixHQUF4QixVQUF5QixPQUFZ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bUIsQ0FBQyxDQUFDO29CQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLDZCQUE2QixDQUFDLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkFDRCxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUVKLHFDQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsTUFBVztRQUNoQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDL0IsQ0FBQztJQUNGLENBQUM7SUFqSEQ7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBVFQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsVUFBVSxFQUFFLENBQUMsMENBQVksQ0FBQztZQUMxQixXQUFXLEVBQUUsK0NBQStDO1lBQzVELGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1NBQ3JDLENBQUM7O3lCQUFBO0lBcUhGLHdCQUFDO0FBQUQsQ0FuSEEsQUFtSEMsSUFBQTtBQW5IWSx5QkFBaUIsb0JBbUg3QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9yYWRpb2J1dHRvbi9lZGl0b3JfcmFkaW9idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgRG9DaGVjaywgT25EZXN0cm95LCBPbkNoYW5nZXMsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSlNPTkVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09ORWxlbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uRWRpdG9yICB9IGZyb20gJy4uL2NvbW1vbi9jb21tb25fcHJvcGVydGllcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9idWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OSXRlbVRyYWNrZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09OVXBkYXRlSXRlbVRyYWNrZXIuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgZ2E6IGFueTtcclxuZGVjbGFyZSB2YXIgX2ttcTogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnZWRpdG9yLXJhZGlvYnV0dG9uJyxcclxuXHRkaXJlY3RpdmVzOiBbQ29tbW9uRWRpdG9yXSxcclxuXHR0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9odG1sL2VkaXRvcl9yYWRpb2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvclJhZGlvQnV0dG9uIGltcGxlbWVudHMgRG9DaGVjaywgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG5cdEBJbnB1dCgpIGNvbnRyb2w6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyLFxyXG5cdFx0cHJpdmF0ZSBqc29uRWxlbWVudEhhbmRsZXI6IEpTT05FbGVtZW50LFxyXG5cdFx0cHJpdmF0ZSBfYnVpbGRlclNlcnZpY2U6IEJ1aWxkZXJTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfSXRlbVRyYWNrU2VydmljZTogSlNPTkl0ZW1UcmFja2VyXHJcblx0KSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sID0ganNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRDb250cm9sKCk7XHJcbiAgICB9XHJcblx0bmdEb0NoZWNrKCkge1xyXG5cdFx0dGhpcy5jb250cm9sID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZENvbnRyb2woKTtcclxuXHR9XHJcblx0YWRkX09wdGlvbl9Jbl9Ecm9wZG93bigpIHtcclxuXHRcdGxldCBpdGVtID0gbmV3IEl0ZW07XHJcblx0XHR0aGlzLmNvbnRyb2wub3B0aW9ucy5wdXNoKGl0ZW0uZ2V0T3B0aW9uKCkpO1xyXG5cdFx0dGhpcy5qc29uQnVpbGRlckhlbHBlci51cGRhdGVGb3JtR3JvdXAoKTtcclxuXHR9XHJcblxyXG5cdGRlbGV0ZV9PcHRpb25fRnJvbV9JdGVtcyhvcHRpb25zOiBhbnksIGluZGV4OiBhbnkpIHtcclxuXHRcdG9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHR9XHJcblx0b25DaGFuZ2VEZXNjcmlwdGlvbihjb250cm9sOiBhbnkpIHtcclxuICAgICAgICBjb250cm9sLmNvbmZpZy5zaG93SGVscCA9ICFjb250cm9sLmNvbmZpZy5zaG93SGVscDtcclxuXHRcdGlmIChjb250cm9sLmNvbmZpZy5zaG93SGVscCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zaG93LWNoZWNrJykucGFyZW50cygnLnR5cGUtZGV0YWlscycpLmZpbmQoJy5kaXYtY2hlY2snKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2hvdy1jaGVjaycpLnBhcmVudHMoJy50eXBlLWRldGFpbHMnKS5maW5kKCcuZGl2LWNoZWNrJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgfVxyXG5cdG9uQ2hhbmdlKGNvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIGNvbnRyb2wuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cyA9ICFjb250cm9sLmNvbmZpZy52YWxpZGF0aW9ucy5yZXF1aXJlZC5zdGF0dXM7XHJcblx0XHR0aGlzLmpzb25CdWlsZGVySGVscGVyLnVwZGF0ZUZvcm1Hcm91cCgpO1xyXG4gICAgfVxyXG5cdG9uQ2hhbmdlQ29udHJvbCgpIHtcclxuXHRcdGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkQ29udHJvbCgpLnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuXHRcdFx0dGhpcy5qc29uQnVpbGRlckhlbHBlci5jaGFuZ2VDb250cm9sKCdyYWRpb19idXR0b24nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuY2hhbmdlQ29udHJvbCgnY2hlY2tib3gnKTtcclxuXHRcdH1cclxuXHR9XHJcblx0c2VBc0RlZmF1bHQob3B0aW9uczogYW55LCBvcHRpb246IGFueSkge1xyXG5cdFx0Zm9yIChsZXQgb3B0aW9uIG9mIG9wdGlvbnMpIHtcclxuXHRcdFx0aWYgKG9wdGlvbi5kZWZ1YWx0c2VsZWN0ZWQgPT09IHRydWUpIHtcclxuXHRcdFx0XHRvcHRpb24uZGVmdWFsdHNlbGVjdGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdG9wdGlvbi5kZWZ1YWx0c2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuXHR9XHJcblxyXG5cdG5nT25DaGFuZ2VzKCkge1xyXG5cdFx0dGhpcy5fSXRlbVRyYWNrU2VydmljZS5zZXRVblNhdmVkSXRlbXModGhpcy5jb250cm9sKTtcclxuICAgIH1cclxuXHJcbiAgIFx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmpzb25CdWlsZGVySGVscGVyLmFuaW1Jbml0KCk7XHJcblx0XHQvLyBsZXQgdW5TYXZlZE9iaiA9IHRoaXMuX0l0ZW1UcmFja1NlcnZpY2UuZ2V0VW5TYXZlZERhdGEoKTtcclxuICAgICAgICAvLyAvL3RoaXMuX0l0ZW1UcmFja1NlcnZpY2UucmVzZXRVbnNhdmVkRGF0YSgpO1xyXG4gICAgICAgIC8vIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLnVwZGF0ZUNoYW5nZXModW5TYXZlZE9iailcclxuXHRcdC8vIFx0LnN1YnNjcmliZShcclxuXHRcdC8vIFx0KHJlc3BvbnNlOiBhbnkpID0+IHtcclxuXHRcdC8vIFx0XHR0aGlzLmpzb25CdWlsZGVySGVscGVyLmRlYm91bmNlKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUxvYWQoKSwgMTgwMCk7XHJcblx0XHQvLyBcdH0sXHJcblx0XHQvLyBcdChlcnJvcjogYW55KSA9PiB7XHJcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyBcdCk7XHJcbiAgICB9XHJcbiAgICBjYWxsR0Eoc3RyOiBzdHJpbmcsIGNvbnRyb2w6IGFueSA9IHt9KSB7XHJcbiAgICAgICAgc3dpdGNoIChzdHIpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkhFTFBURVhUXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5jb25maWcuc2hvd0hlbHApIHtcclxuXHRcdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1RvZ2dsZUhlbHBUZXh0T24nKTtcclxuXHRcdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFRvZ2dsZSBIZWxwIFRleHQgT24nXSk7XHJcblx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblx0XHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdUb2dnbGVIZWxwVGV4dE9mZicpO1xyXG5cdFx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgVG9nZ2xlIEhlbHAgVGV4dCBPZmYnXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJERUxFVEVcIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0J1aWxkZXIgUmVtb3ZlIFZhbHVlJyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgUmVtb3ZlIFZhbHVlJ10pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcIlNFVERFRkFVTFRcIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0J1aWxkZXIgU2V0IFZhbHVlIERlZmF1bHQnKTtcclxuXHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBTZXQgVmFsdWUgRGVmYXVsdCddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgXCJBRERPUFRJT05cIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0J1aWxkZXIgQWRkIE9wdGlvbiBDbGljaycpO1xyXG5cdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIEFkZCBPcHRpb24gQ2xpY2snXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiTUFOREFURVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2hlY2snLCAnTWFya0FzTWFuZGF0b3J5Jyk7XHJcblx0XHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBNYXJrIEFzIE1hbmRhdG9yeSddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2hlY2snLCAnVW5tYXJrQXNNYW5kYXRvcnknKTtcclxuICAgICAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBVbm1hcmsgQXMgTWFuZGF0b3J5J10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHRvbktleURvd24oaW5kZXg6IGFueSwgJGV2ZW50OiBhbnkpIHtcclxuXHRcdGlmICgkZXZlbnQua2V5Q29kZSA9PSA5ICYmIHRoaXMuY29udHJvbC5vcHRpb25zLmxlbmd0aCA9PSBpbmRleCArIDEpIHtcclxuXHRcdFx0dGhpcy5hZGRfT3B0aW9uX0luX0Ryb3Bkb3duKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==
