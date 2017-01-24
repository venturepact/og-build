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
var EditorTextArea = (function () {
    function EditorTextArea(jsonBuilderHelper, _builderService, _ItemTrackService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._builderService = _builderService;
        this._ItemTrackService = _ItemTrackService;
        this.control = jsonBuilderHelper.getSelectedControl();
    }
    EditorTextArea.prototype.onChange = function (control) {
        control.config.validations.required.status = !control.config.validations.required.status;
    };
    EditorTextArea.prototype.onChangeDescription = function (control) {
        control.config.showHelp = !control.config.showHelp;
        if (control.config.showHelp === false) {
            jQuery('.show-check').parents('.type-details').find('.div-check').fadeIn('slow');
        }
        else
            jQuery('.show-check').parents('.type-details').find('.div-check').fadeOut('slow');
    };
    EditorTextArea.prototype.ngOnChanges = function () {
        this._ItemTrackService.resetUnsavedData();
        this._ItemTrackService.setUnSavedItems(this.control);
    };
    EditorTextArea.prototype.callGA = function (str, control) {
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorTextArea.prototype, "control", void 0);
    EditorTextArea = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-textarea',
            directives: [common_properties_component_1.CommonEditor],
            templateUrl: 'assets/html/editor_textarea.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker])
    ], EditorTextArea);
    return EditorTextArea;
}());
exports.EditorTextArea = EditorTextArea;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy90ZXh0YXJlYS9lZGl0b3JfdGV4dGFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEQsZUFBZSxDQUFDLENBQUE7QUFDOUUsNENBQThCLHVDQUF1QyxDQUFDLENBQUE7QUFDdEUsb0NBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsOENBQWdDLGlEQUFpRCxDQUFDLENBQUE7QUFhbEY7SUFHSSx3QkFDWSxpQkFBOEIsRUFDOUIsZUFBK0IsRUFDL0IsaUJBQWtDO1FBRmxDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFpQjtRQUUxQyxJQUFJLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxPQUFZO1FBQ2pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzdGLENBQUM7SUFDRCw0Q0FBbUIsR0FBbkIsVUFBb0IsT0FBWTtRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JGLENBQUM7UUFBQyxJQUFJO1lBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxHQUFXLEVBQUUsT0FBaUI7UUFBakIsdUJBQWlCLEdBQWpCLFlBQWlCO1FBQ2pDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVixLQUFLLFVBQVU7Z0JBQ1gsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO29CQUN6QixFQUFFLENBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBQ0QsSUFBSSxDQUFBLENBQUM7b0JBQ0QsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUM7b0JBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsOEJBQThCLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO2dCQUNELEtBQUssQ0FBQztZQUVWLEtBQUssU0FBUztnQkFDVixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDN0MsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7b0JBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNGLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO29CQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLDZCQUE2QixDQUFDLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkFDRCxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQWxERDtRQUFDLFlBQUssRUFBRTs7bURBQUE7SUFUWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixVQUFVLEVBQUUsQ0FBQywwQ0FBWSxDQUFDO1lBQzFCLFdBQVcsRUFBRSw0Q0FBNEM7WUFDekQsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDeEMsQ0FBQzs7c0JBQUE7SUFzREYscUJBQUM7QUFBRCxDQXBEQSxBQW9EQyxJQUFBO0FBcERZLHNCQUFjLGlCQW9EMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2VkaXRvcnMvdGV4dGFyZWEvZWRpdG9yX3RleHRhcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25FZGl0b3IgIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbl9wcm9wZXJ0aWVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSlNPTkl0ZW1UcmFja2VyIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvSlNPTlVwZGF0ZUl0ZW1UcmFja2VyLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdlZGl0b3ItdGV4dGFyZWEnLFxyXG4gICAgZGlyZWN0aXZlczogW0NvbW1vbkVkaXRvcl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9odG1sL2VkaXRvcl90ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvclRleHRBcmVhIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGNvbnRyb2w6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIF9idWlsZGVyU2VydmljZTogQnVpbGRlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfSXRlbVRyYWNrU2VydmljZTogSlNPTkl0ZW1UcmFja2VyXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSBqc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZENvbnRyb2woKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShjb250cm9sOiBhbnkpIHtcclxuICAgICAgICBjb250cm9sLmNvbmZpZy52YWxpZGF0aW9ucy5yZXF1aXJlZC5zdGF0dXMgPSAhY29udHJvbC5jb25maWcudmFsaWRhdGlvbnMucmVxdWlyZWQuc3RhdHVzO1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VEZXNjcmlwdGlvbihjb250cm9sOiBhbnkpIHtcclxuICAgICAgICBjb250cm9sLmNvbmZpZy5zaG93SGVscCA9ICFjb250cm9sLmNvbmZpZy5zaG93SGVscDtcclxuICAgICAgICBpZiAoY29udHJvbC5jb25maWcuc2hvd0hlbHAgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNob3ctY2hlY2snKS5wYXJlbnRzKCcudHlwZS1kZXRhaWxzJykuZmluZCgnLmRpdi1jaGVjaycpLmZhZGVJbignc2xvdycpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBqUXVlcnkoJy5zaG93LWNoZWNrJykucGFyZW50cygnLnR5cGUtZGV0YWlscycpLmZpbmQoJy5kaXYtY2hlY2snKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgdGhpcy5fSXRlbVRyYWNrU2VydmljZS5yZXNldFVuc2F2ZWREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5fSXRlbVRyYWNrU2VydmljZS5zZXRVblNhdmVkSXRlbXModGhpcy5jb250cm9sKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsR0Eoc3RyOiBzdHJpbmcsIGNvbnRyb2w6IGFueSA9IHt9KSB7XHJcbiAgICAgICAgc3dpdGNoIChzdHIpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkhFTFBURVhUXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5jb25maWcuc2hvd0hlbHApe1xyXG4gICAgICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1RvZ2dsZUhlbHBUZXh0T24nKTtcclxuICAgICAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBUb2dnbGUgSGVscCBUZXh0IE9uJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdUb2dnbGVIZWxwVGV4dE9mZicpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFRvZ2dsZSBIZWxwIFRleHQgT2ZmJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiTUFOREFURVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2hlY2snLCAnTWFya0FzTWFuZGF0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgTWFyayBBcyBNYW5kYXRvcnknXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NoZWNrJywgJ1VubWFya0FzTWFuZGF0b3J5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgVW5tYXJrIEFzIE1hbmRhdG9yeSddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
