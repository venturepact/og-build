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
var EditorSelectBox = (function () {
    function EditorSelectBox(jsonBuilderHelper, jsonElementHandler, _builderService, _ItemTrackService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.jsonElementHandler = jsonElementHandler;
        this._builderService = _builderService;
        this._ItemTrackService = _ItemTrackService;
        this.inputType = (jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical' ? 'number' : 'text');
    }
    EditorSelectBox.prototype.ngOnInit = function () {
        jQuery(".choice").addClass("select-empty");
        jQuery(".choice").change(function () {
            if (jQuery(this).val() == "default" || jQuery(this).val() == null) {
                jQuery(this).addClass("select-empty");
            }
            else {
                jQuery(this).removeClass("select-empty");
            }
        });
        jQuery(".choice").change();
    };
    EditorSelectBox.prototype.add_Option_In_Dropdown = function () {
        var item = new model_1.Item;
        var getOption = item.getOption();
        getOption.value = this.control.options.length + 1;
        this.control.options.push(getOption);
        this.jsonBuilderHelper.updateFormGroup();
        jQuery('#' + this.control._id)[0].selectize.addOption({ value: getOption.value, text: getOption.label });
        jQuery('#' + this.control._id)[0].selectize.refreshOptions();
    };
    EditorSelectBox.prototype.delete_Option_From_Items = function (options, index) {
        jQuery('#' + this.control._id)[0].selectize.removeOption(options[index].value);
        jQuery('#' + this.control._id)[0].selectize.refreshOptions();
        options.splice(index, 1);
    };
    EditorSelectBox.prototype.onChangeDescription = function (control) {
        control.config.showHelp = !control.config.showHelp;
        if (control.config.showHelp === true) {
            jQuery('.show-check').parents('.type-details').find('.div-check').fadeIn('slow');
        }
        else
            jQuery('.show-check').parents('.type-details').find('.div-check').fadeOut('slow');
    };
    EditorSelectBox.prototype.onChange = function (control) {
        control.config.validations.required.status = !control.config.validations.required.status;
        this.jsonBuilderHelper.updateFormGroup();
    };
    EditorSelectBox.prototype.seAsDefault = function (options, opt, status) {
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            if (option.defualtselected === true) {
                option.defualtselected = false;
            }
            if (option.selected === true) {
                option.selected = false;
            }
        }
        opt.defualtselected = status;
        opt.selected = status;
        if (status === true) {
            jQuery('#' + this.control._id)[0].selectize.setValue(opt.value);
        }
        else {
            jQuery('#' + this.control._id)[0].selectize.setValue(options[0].value);
        }
    };
    EditorSelectBox.prototype.ngOnChanges = function () {
        this._ItemTrackService.resetUnsavedData();
        this._ItemTrackService.setUnSavedItems(this.control);
    };
    EditorSelectBox.prototype.callGA = function (str, control) {
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
            case "ADDOPTION":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Builder Add Option Click');
                _kmq.push(['record', 'Builder Add Option Click']);
                break;
            case "SETDEFAULT":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Builder Set Value Default');
                _kmq.push(['record', 'Builder Set Value Default']);
                break;
            case "UNSETDEFAULT":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Builder Unset Value Default');
                _kmq.push(['record', 'Builder Unset Value Default']);
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
    EditorSelectBox.prototype.onOptionValChange = function (option, $event) {
        jQuery('#' + this.control._id)[0].selectize.updateOption(option.value, { value: $event.target.value, text: option.label });
        option.value = $event.target.value;
    };
    EditorSelectBox.prototype.onOptionLabelChange = function (option) {
        jQuery('#' + this.control._id)[0].selectize.updateOption(option.value, { value: option.value, text: option.label });
    };
    EditorSelectBox.prototype.onKeyDown = function (index, $event) {
        if ($event.keyCode == 9 && this.control.options.length == index + 1) {
            this.add_Option_In_Dropdown();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorSelectBox.prototype, "control", void 0);
    EditorSelectBox = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-selectbox',
            directives: [common_properties_component_1.CommonEditor],
            templateUrl: 'assets/html/editor_selectbox.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker])
    ], EditorSelectBox);
    return EditorSelectBox;
}());
exports.EditorSelectBox = EditorSelectBox;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9zZWxlY3Rib3gvZWRpdG9yX3NlbGVjdGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFzRSxlQUFlLENBQUMsQ0FBQTtBQUN0RixvQ0FBNEIsdUNBQXVDLENBQUMsQ0FBQTtBQUNwRSw0Q0FBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUN0RSxvQ0FBNEIsdUNBQXVDLENBQUMsQ0FBQTtBQUNwRSxzQkFBcUIsdUJBQXVCLENBQUMsQ0FBQTtBQUM3QyxnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQUNuRSw4Q0FBZ0MsaURBQWlELENBQUMsQ0FBQTtBQWFsRjtJQUdJLHlCQUNNLGlCQUE4QixFQUM5QixrQkFBK0IsRUFDL0IsZUFBK0IsRUFDL0IsaUJBQWtDO1FBSGxDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWE7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBaUI7UUFHMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLFlBQVksSUFBSSxXQUFXLEdBQUcsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFDRCxrQ0FBUSxHQUFSO1FBQ0YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLE1BQU0sQ0FB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QUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDM0gsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBRUQsNkNBQW1CLEdBQW5CLFVBQW9CLE1BQVc7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNySCxDQUFDO0lBRUQsbUNBQVMsR0FBVCxVQUFVLEtBQVUsRUFBRSxNQUFXO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUMvQixDQUFDO0lBQ0YsQ0FBQztJQWxJRDtRQUFDLFlBQUssRUFBRTs7b0RBQUE7SUFUVDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixVQUFVLEVBQUUsQ0FBQywwQ0FBWSxDQUFDO1lBQzFCLFdBQVcsRUFBRSw2Q0FBNkM7WUFDMUQsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDckMsQ0FBQzs7dUJBQUE7SUFzSUYsc0JBQUM7QUFBRCxDQXBJQSxBQW9JQyxJQUFBO0FBcElZLHVCQUFlLGtCQW9JM0IsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2VkaXRvcnMvc2VsZWN0Ym94L2VkaXRvcl9zZWxlY3Rib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uQ2hhbmdlcywgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSlNPTkVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09ORWxlbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uRWRpdG9yICB9IGZyb20gJy4uL2NvbW1vbi9jb21tb25fcHJvcGVydGllcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9idWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OSXRlbVRyYWNrZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09OVXBkYXRlSXRlbVRyYWNrZXIuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgZ2E6IGFueTtcclxuZGVjbGFyZSB2YXIgX2ttcTogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnZWRpdG9yLXNlbGVjdGJveCcsXHJcblx0ZGlyZWN0aXZlczogW0NvbW1vbkVkaXRvcl0sXHJcblx0dGVtcGxhdGVVcmw6ICdhc3NldHMvaHRtbC9lZGl0b3Jfc2VsZWN0Ym94LmNvbXBvbmVudC5odG1sJyxcclxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yU2VsZWN0Qm94IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGNvbnRyb2w6IGFueTtcclxuXHRpbnB1dFR5cGU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIsXHJcblx0XHRwcml2YXRlIGpzb25FbGVtZW50SGFuZGxlcjogSlNPTkVsZW1lbnQsXHJcblx0XHRwcml2YXRlIF9idWlsZGVyU2VydmljZTogQnVpbGRlclNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9JdGVtVHJhY2tTZXJ2aWNlOiBKU09OSXRlbVRyYWNrZXJcclxuXHQpIHtcclxuICAgICAgICAvLyB0aGlzLmNvbnRyb2wgPSBqc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZENvbnRyb2woKTtcclxuXHRcdHRoaXMuaW5wdXRUeXBlID0gKGpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRlbXBsYXRlVHlwZSA9PSAnTnVtZXJpY2FsJyA/ICdudW1iZXInIDogJ3RleHQnKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG5cdFx0alF1ZXJ5KFwiLmNob2ljZVwiKS5hZGRDbGFzcyhcInNlbGVjdC1lbXB0eVwiKTtcclxuXHRcdGpRdWVyeShcIi5jaG9pY2VcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKGpRdWVyeSh0aGlzKS52YWwoKSA9PSBcImRlZmF1bHRcIiB8fCBqUXVlcnkodGhpcykudmFsKCkgPT0gbnVsbCkge1xyXG5cdFx0XHRcdGpRdWVyeSh0aGlzKS5hZGRDbGFzcyhcInNlbGVjdC1lbXB0eVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoXCJzZWxlY3QtZW1wdHlcIik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0alF1ZXJ5KFwiLmNob2ljZVwiKS5jaGFuZ2UoKTtcclxuICAgIH1cclxuXHRhZGRfT3B0aW9uX0luX0Ryb3Bkb3duKCkge1xyXG5cdFx0bGV0IGl0ZW0gPSBuZXcgSXRlbTtcclxuXHRcdGxldCBnZXRPcHRpb246IGFueSA9IGl0ZW0uZ2V0T3B0aW9uKCk7XHJcblx0XHRnZXRPcHRpb24udmFsdWUgPSB0aGlzLmNvbnRyb2wub3B0aW9ucy5sZW5ndGggKyAxO1xyXG5cdFx0dGhpcy5jb250cm9sLm9wdGlvbnMucHVzaChnZXRPcHRpb24pO1xyXG5cdFx0dGhpcy5qc29uQnVpbGRlckhlbHBlci51cGRhdGVGb3JtR3JvdXAoKTtcclxuXHRcdGpRdWVyeSgnIycgKyB0aGlzLmNvbnRyb2wuX2lkKVswXS5zZWxlY3RpemUuYWRkT3B0aW9uKHsgdmFsdWU6IGdldE9wdGlvbi52YWx1ZSwgdGV4dDogZ2V0T3B0aW9uLmxhYmVsIH0pO1xyXG5cdFx0alF1ZXJ5KCcjJyArIHRoaXMuY29udHJvbC5faWQpWzBdLnNlbGVjdGl6ZS5yZWZyZXNoT3B0aW9ucygpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlX09wdGlvbl9Gcm9tX0l0ZW1zKG9wdGlvbnM6IGFueSwgaW5kZXg6IGFueSkge1xyXG5cdFx0alF1ZXJ5KCcjJyArIHRoaXMuY29udHJvbC5faWQpWzBdLnNlbGVjdGl6ZS5yZW1vdmVPcHRpb24ob3B0aW9uc1tpbmRleF0udmFsdWUpO1xyXG5cdFx0alF1ZXJ5KCcjJyArIHRoaXMuY29udHJvbC5faWQpWzBdLnNlbGVjdGl6ZS5yZWZyZXNoT3B0aW9ucygpO1xyXG5cdFx0b3B0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdH1cclxuXHRvbkNoYW5nZURlc2NyaXB0aW9uKGNvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIGNvbnRyb2wuY29uZmlnLnNob3dIZWxwID0gIWNvbnRyb2wuY29uZmlnLnNob3dIZWxwO1xyXG5cdFx0aWYgKGNvbnRyb2wuY29uZmlnLnNob3dIZWxwID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNob3ctY2hlY2snKS5wYXJlbnRzKCcudHlwZS1kZXRhaWxzJykuZmluZCgnLmRpdi1jaGVjaycpLmZhZGVJbignc2xvdycpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBqUXVlcnkoJy5zaG93LWNoZWNrJykucGFyZW50cygnLnR5cGUtZGV0YWlscycpLmZpbmQoJy5kaXYtY2hlY2snKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICB9XHJcblx0b25DaGFuZ2UoY29udHJvbDogYW55KSB7XHJcbiAgICAgICAgY29udHJvbC5jb25maWcudmFsaWRhdGlvbnMucmVxdWlyZWQuc3RhdHVzID0gIWNvbnRyb2wuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cztcclxuXHRcdHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIudXBkYXRlRm9ybUdyb3VwKCk7XHJcbiAgICB9XHJcblx0c2VBc0RlZmF1bHQob3B0aW9uczogYW55LCBvcHQ6IGFueSwgc3RhdHVzOiBib29sZWFuKSB7XHJcblx0XHRmb3IgKGxldCBvcHRpb24gb2Ygb3B0aW9ucykge1xyXG5cdFx0XHRpZiAob3B0aW9uLmRlZnVhbHRzZWxlY3RlZCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdG9wdGlvbi5kZWZ1YWx0c2VsZWN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAob3B0aW9uLnNlbGVjdGVkID09PSB0cnVlKSB7XHJcblx0XHRcdFx0b3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdG9wdC5kZWZ1YWx0c2VsZWN0ZWQgPSBzdGF0dXM7XHJcblx0XHRvcHQuc2VsZWN0ZWQgPSBzdGF0dXM7XHJcblx0XHRpZiAoc3RhdHVzID09PSB0cnVlKSB7XHJcblx0XHRcdGpRdWVyeSgnIycgKyB0aGlzLmNvbnRyb2wuX2lkKVswXS5zZWxlY3RpemUuc2V0VmFsdWUob3B0LnZhbHVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGpRdWVyeSgnIycgKyB0aGlzLmNvbnRyb2wuX2lkKVswXS5zZWxlY3RpemUuc2V0VmFsdWUob3B0aW9uc1swXS52YWx1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uQ2hhbmdlcygpIHtcclxuXHRcdHRoaXMuX0l0ZW1UcmFja1NlcnZpY2UucmVzZXRVbnNhdmVkRGF0YSgpO1xyXG5cdFx0dGhpcy5fSXRlbVRyYWNrU2VydmljZS5zZXRVblNhdmVkSXRlbXModGhpcy5jb250cm9sKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsR0Eoc3RyOiBzdHJpbmcsIGNvbnRyb2w6IGFueSA9IHt9KSB7XHJcbiAgICAgICAgc3dpdGNoIChzdHIpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkhFTFBURVhUXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5jb25maWcuc2hvd0hlbHApIHtcclxuXHRcdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1RvZ2dsZUhlbHBUZXh0T24nKTtcclxuXHRcdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFRvZ2dsZSBIZWxwIFRleHQgT24nXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHRcdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1RvZ2dsZUhlbHBUZXh0T2ZmJyk7XHJcblx0XHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBUb2dnbGUgSGVscCBUZXh0IE9mZiddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIkRFTEVURVwiOlxyXG5cdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnQnVpbGRlciBSZW1vdmUgVmFsdWUnKTtcclxuXHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBSZW1vdmUgVmFsdWUnXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIFwiQURET1BUSU9OXCI6XHJcblx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDbGljaycsICdCdWlsZGVyIEFkZCBPcHRpb24gQ2xpY2snKTtcclxuXHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBBZGQgT3B0aW9uIENsaWNrJ10pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcIlNFVERFRkFVTFRcIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0J1aWxkZXIgU2V0IFZhbHVlIERlZmF1bHQnKTtcclxuXHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBTZXQgVmFsdWUgRGVmYXVsdCddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgXCJVTlNFVERFRkFVTFRcIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0J1aWxkZXIgVW5zZXQgVmFsdWUgRGVmYXVsdCcpO1xyXG5cdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFVuc2V0IFZhbHVlIERlZmF1bHQnXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiTUFOREFURVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2hlY2snLCAnTWFya0FzTWFuZGF0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgTWFyayBBcyBNYW5kYXRvcnknXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NoZWNrJywgJ1VubWFya0FzTWFuZGF0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgVW5tYXJrIEFzIE1hbmRhdG9yeSddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0b25PcHRpb25WYWxDaGFuZ2Uob3B0aW9uOiBhbnksICRldmVudDogYW55KSB7XHJcblx0XHRqUXVlcnkoJyMnICsgdGhpcy5jb250cm9sLl9pZClbMF0uc2VsZWN0aXplLnVwZGF0ZU9wdGlvbihvcHRpb24udmFsdWUsIHsgdmFsdWU6ICRldmVudC50YXJnZXQudmFsdWUsIHRleHQ6IG9wdGlvbi5sYWJlbCB9KTtcclxuXHRcdG9wdGlvbi52YWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWU7XHJcblx0fVxyXG5cclxuXHRvbk9wdGlvbkxhYmVsQ2hhbmdlKG9wdGlvbjogYW55KSB7XHJcblx0XHRqUXVlcnkoJyMnICsgdGhpcy5jb250cm9sLl9pZClbMF0uc2VsZWN0aXplLnVwZGF0ZU9wdGlvbihvcHRpb24udmFsdWUsIHsgdmFsdWU6IG9wdGlvbi52YWx1ZSwgdGV4dDogb3B0aW9uLmxhYmVsIH0pO1xyXG5cdH1cclxuXHJcblx0b25LZXlEb3duKGluZGV4OiBhbnksICRldmVudDogYW55KSB7XHJcblx0XHRpZiAoJGV2ZW50LmtleUNvZGUgPT0gOSAmJiB0aGlzLmNvbnRyb2wub3B0aW9ucy5sZW5ndGggPT0gaW5kZXggKyAxKSB7XHJcblx0XHRcdHRoaXMuYWRkX09wdGlvbl9Jbl9Ecm9wZG93bigpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=
