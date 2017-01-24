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
var common_properties_component_1 = require('../common/common_properties.component');
var JSONBuilder_service_1 = require('../../../services/JSONBuilder.service');
var builder_service_1 = require('../../../services/builder.service');
var JSONUpdateItemTracker_service_1 = require('../../../services/JSONUpdateItemTracker.service');
var EditorSlider = (function () {
    function EditorSlider(jsonBuilderHelper, _builderService, _ItemTrackService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._builderService = _builderService;
        this._ItemTrackService = _ItemTrackService;
        this.control = jsonBuilderHelper.getSelectedControl();
    }
    EditorSlider.prototype.onChange = function (control) {
        control.config.validations.required.status = !control.config.validations.required.status;
        this.jsonBuilderHelper.updateFormGroup();
    };
    EditorSlider.prototype.onChangeDescription = function (control) {
        control.config.showHelp = !control.config.showHelp;
        if (control.config.showHelp === true) {
            jQuery('.show-check').parents('.type-details').find('.div-check').fadeIn('slow');
        }
        else
            jQuery('.show-check').parents('.type-details').find('.div-check').fadeOut('slow');
    };
    EditorSlider.prototype.ngOnChanges = function () {
        this._ItemTrackService.resetUnsavedData();
        this._ItemTrackService.setUnSavedItems(this.control);
    };
    EditorSlider.prototype.onSliderValChange = function () {
        if (parseInt(this.control.props.defaultValue) > parseInt(this.control.props.maxVal)) {
            this.control.props.defaultValue = this.control.props.maxVal;
        }
        else if (parseInt(this.control.props.defaultValue) < parseInt(this.control.props.minVal)) {
            this.control.props.defaultValue = this.control.props.minVal;
        }
        var sliderRef = jQuery('#' + this.control._id).data('ionRangeSlider');
        var sliderJson = {
            min: parseInt(this.control.props.minVal),
            max: parseInt(this.control.props.maxVal),
            step: parseInt(this.control.props.steps),
            grid: this.control.props.scale,
            from: parseInt(this.control.props.defaultValue)
        };
        if (this.control.props.postfix) {
            sliderJson["postfix"] = this.control.props.unit;
            sliderJson["prefix"] = '';
        }
        else {
            sliderJson["prefix"] = this.control.props.unit;
            sliderJson["postfix"] = '';
        }
        sliderRef.update(sliderJson);
    };
    EditorSlider.prototype.toggleScale = function (control) {
        control.props.scale = !control.props.scale;
        this.onSliderValChange();
    };
    EditorSlider.prototype.callGA = function (str, control) {
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
            case "SCALE":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'NumericScaleToggle');
                _kmq.push(['record', 'Builder Numeric Scale Toggle']);
                break;
        }
    };
    EditorSlider.prototype.onPostfixChange = function ($event) {
        if ($event.target.value == 'postfix') {
            this.control.props.postfix = true;
        }
        else {
            this.control.props.postfix = false;
        }
        this.onSliderValChange();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorSlider.prototype, "control", void 0);
    EditorSlider = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-slider',
            directives: [common_properties_component_1.CommonEditor],
            templateUrl: 'assets/html/editor_slider.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker])
    ], EditorSlider);
    return EditorSlider;
}());
exports.EditorSlider = EditorSlider;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9zbGlkZXIvZWRpdG9yX3NsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErRCxlQUFlLENBQUMsQ0FBQTtBQUUvRSw0Q0FBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUN0RSxvQ0FBNEIsdUNBQXVDLENBQUMsQ0FBQTtBQUNwRSxnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQUNuRSw4Q0FBZ0MsaURBQWlELENBQUMsQ0FBQTtBQWFsRjtJQUlJLHNCQUNZLGlCQUE4QixFQUM5QixlQUErQixFQUMvQixpQkFBa0M7UUFGbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO1FBRTFDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLE9BQVk7UUFDakIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDekYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDRCwwQ0FBbUIsR0FBbkIsVUFBb0IsT0FBWTtRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FB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LElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkMsQ0FBQztRQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFsRkQ7UUFBQyxZQUFLLEVBQUU7O2lEQUFBO0lBVlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFVBQVUsRUFBRSxDQUFDLDBDQUFZLENBQUM7WUFDMUIsV0FBVyxFQUFFLDBDQUEwQztZQUN2RCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN4QyxDQUFDOztvQkFBQTtJQXVGRixtQkFBQztBQUFELENBckZBLEFBcUZDLElBQUE7QUFyRlksb0JBQVksZUFxRnhCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvY29tcG9uZW50cy9lZGl0b3JzL3NsaWRlci9lZGl0b3Jfc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0IHsgSlNPTkVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09ORWxlbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uRWRpdG9yICB9IGZyb20gJy4uL2NvbW1vbi9jb21tb25fcHJvcGVydGllcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCdWlsZGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2J1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEpTT05JdGVtVHJhY2tlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05VcGRhdGVJdGVtVHJhY2tlci5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZWRpdG9yLXNsaWRlcicsXHJcbiAgICBkaXJlY3RpdmVzOiBbQ29tbW9uRWRpdG9yXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXNzZXRzL2h0bWwvZWRpdG9yX3NsaWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yU2xpZGVyIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgICBASW5wdXQoKSBjb250cm9sOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfYnVpbGRlclNlcnZpY2U6IEJ1aWxkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX0l0ZW1UcmFja1NlcnZpY2U6IEpTT05JdGVtVHJhY2tlclxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sID0ganNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRDb250cm9sKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UoY29udHJvbDogYW55KSB7XHJcbiAgICAgICAgY29udHJvbC5jb25maWcudmFsaWRhdGlvbnMucmVxdWlyZWQuc3RhdHVzID0gIWNvbnRyb2wuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cztcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnVwZGF0ZUZvcm1Hcm91cCgpO1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VEZXNjcmlwdGlvbihjb250cm9sOiBhbnkpIHtcclxuICAgICAgICBjb250cm9sLmNvbmZpZy5zaG93SGVscCA9ICFjb250cm9sLmNvbmZpZy5zaG93SGVscDtcclxuICAgICAgICBpZiAoY29udHJvbC5jb25maWcuc2hvd0hlbHAgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2hvdy1jaGVjaycpLnBhcmVudHMoJy50eXBlLWRldGFpbHMnKS5maW5kKCcuZGl2LWNoZWNrJykuZmFkZUluKCdzbG93Jyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNob3ctY2hlY2snKS5wYXJlbnRzKCcudHlwZS1kZXRhaWxzJykuZmluZCgnLmRpdi1jaGVjaycpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICB0aGlzLl9JdGVtVHJhY2tTZXJ2aWNlLnJlc2V0VW5zYXZlZERhdGEoKTtcclxuICAgICAgICB0aGlzLl9JdGVtVHJhY2tTZXJ2aWNlLnNldFVuU2F2ZWRJdGVtcyh0aGlzLmNvbnRyb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2xpZGVyVmFsQ2hhbmdlKCkge1xyXG4gICAgICAgIGlmIChwYXJzZUludCh0aGlzLmNvbnRyb2wucHJvcHMuZGVmYXVsdFZhbHVlKSA+IHBhcnNlSW50KHRoaXMuY29udHJvbC5wcm9wcy5tYXhWYWwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5wcm9wcy5kZWZhdWx0VmFsdWUgPSB0aGlzLmNvbnRyb2wucHJvcHMubWF4VmFsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQodGhpcy5jb250cm9sLnByb3BzLmRlZmF1bHRWYWx1ZSkgPCBwYXJzZUludCh0aGlzLmNvbnRyb2wucHJvcHMubWluVmFsKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wucHJvcHMuZGVmYXVsdFZhbHVlID0gdGhpcy5jb250cm9sLnByb3BzLm1pblZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNsaWRlclJlZjogYW55ID0galF1ZXJ5KCcjJyArIHRoaXMuY29udHJvbC5faWQpLmRhdGEoJ2lvblJhbmdlU2xpZGVyJyk7XHJcbiAgICAgICAgdmFyIHNsaWRlckpzb246IGFueSA9IHtcclxuICAgICAgICAgICAgbWluOiBwYXJzZUludCh0aGlzLmNvbnRyb2wucHJvcHMubWluVmFsKSxcclxuICAgICAgICAgICAgbWF4OiBwYXJzZUludCh0aGlzLmNvbnRyb2wucHJvcHMubWF4VmFsKSxcclxuICAgICAgICAgICAgc3RlcDogcGFyc2VJbnQodGhpcy5jb250cm9sLnByb3BzLnN0ZXBzKSxcclxuICAgICAgICAgICAgZ3JpZDogdGhpcy5jb250cm9sLnByb3BzLnNjYWxlLFxyXG4gICAgICAgICAgICBmcm9tOiBwYXJzZUludCh0aGlzLmNvbnRyb2wucHJvcHMuZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYodGhpcy5jb250cm9sLnByb3BzLnBvc3RmaXgpIHtcclxuICAgICAgICAgICAgc2xpZGVySnNvbltcInBvc3RmaXhcIl0gPSB0aGlzLmNvbnRyb2wucHJvcHMudW5pdDtcclxuICAgICAgICAgICAgc2xpZGVySnNvbltcInByZWZpeFwiXSA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNsaWRlckpzb25bXCJwcmVmaXhcIl0gPSB0aGlzLmNvbnRyb2wucHJvcHMudW5pdDtcclxuICAgICAgICAgICAgc2xpZGVySnNvbltcInBvc3RmaXhcIl0gPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpZGVyUmVmLnVwZGF0ZShzbGlkZXJKc29uKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTY2FsZShjb250cm9sOiBhbnkpIHtcclxuICAgICAgICBjb250cm9sLnByb3BzLnNjYWxlID0gIWNvbnRyb2wucHJvcHMuc2NhbGU7XHJcbiAgICAgICAgdGhpcy5vblNsaWRlclZhbENoYW5nZSgpO1xyXG4gICAgfVxyXG4gICAgY2FsbEdBKHN0cjogc3RyaW5nLCBjb250cm9sOiBhbnkgPSB7fSkge1xyXG4gICAgICAgIHN3aXRjaCAoc3RyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJIRUxQVEVYVFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuY29uZmlnLnNob3dIZWxwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdUb2dnbGUnLCAnVG9nZ2xlSGVscFRleHRPbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFRvZ2dsZSBIZWxwIFRleHQgT24nXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdUb2dnbGVIZWxwVGV4dE9mZicpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFRvZ2dsZSBIZWxwIFRleHQgT2ZmJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiU0NBTEVcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ051bWVyaWNTY2FsZVRvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgTnVtZXJpYyBTY2FsZSBUb2dnbGUnXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Qb3N0Zml4Q2hhbmdlKCRldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYoJGV2ZW50LnRhcmdldC52YWx1ZSA9PSAncG9zdGZpeCcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sLnByb3BzLnBvc3RmaXggPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbC5wcm9wcy5wb3N0Zml4ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25TbGlkZXJWYWxDaGFuZ2UoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
