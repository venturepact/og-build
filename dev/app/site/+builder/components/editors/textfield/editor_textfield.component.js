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
var JSONUpdateItemTracker_service_1 = require('../../../services/JSONUpdateItemTracker.service');
var builder_service_1 = require('../../../services/builder.service');
var EditorTextField = (function () {
    function EditorTextField(jsonBuilderHelper, _builderService, _ItemTrackService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._builderService = _builderService;
        this._ItemTrackService = _ItemTrackService;
    }
    EditorTextField.prototype.onChange = function (control) {
        control.config.validations.required.status = !control.config.validations.required.status;
        this.jsonBuilderHelper.updateFormGroup();
    };
    EditorTextField.prototype.typeChange = function () {
        this.jsonBuilderHelper.updateFormGroup();
    };
    EditorTextField.prototype.onChangeDescription = function (control) {
        control.config.showHelp = !control.config.showHelp;
        if (control.config.showHelp === true) {
            jQuery('.show-check').parents('.switch').find('.div-check').fadeIn('slow');
        }
        else
            jQuery('.show-check').parents('.switch').find('.div-check').fadeOut('slow');
    };
    EditorTextField.prototype.ngOnChanges = function () {
        this._ItemTrackService.resetUnsavedData();
        this._ItemTrackService.setUnSavedItems(this.control);
    };
    EditorTextField.prototype.callGA = function (str, control) {
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
    ], EditorTextField.prototype, "control", void 0);
    EditorTextField = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-textfield',
            directives: [common_properties_component_1.CommonEditor],
            templateUrl: 'assets/html/editor_textfield.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker])
    ], EditorTextField);
    return EditorTextField;
}());
exports.EditorTextField = EditorTextField;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy90ZXh0ZmllbGQvZWRpdG9yX3RleHRmaWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErRCxlQUFlLENBQUMsQ0FBQTtBQUMvRSw0Q0FBOEIsdUNBQXVDLENBQUMsQ0FBQTtBQUN0RSxvQ0FBNEIsdUNBQXVDLENBQUMsQ0FBQTtBQUNwRSw4Q0FBZ0MsaURBQWlELENBQUMsQ0FBQTtBQUNsRixnQ0FBK0IsbUNBQW1DLENBQUMsQ0FBQTtBQWFuRTtJQUdJLHlCQUFvQixpQkFBOEIsRUFDdEMsZUFBK0IsRUFDL0IsaUJBQWtDO1FBRjFCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUN0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFpQjtJQUc5QyxDQUFDO0lBQ0Qsa0NBQVEsR0FBUixVQUFTLE9BQVk7UUFDakIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFFekYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDRCxvQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFDRCw2Q0FBbUIsR0FBbkIsVUFBb0IsT0FBWTtRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9FLENBQUM7UUFBQyxJQUFJO1lBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUdELGdDQUFNLEdBQU4sVUFBTyxHQUFXLEVBQUUsT0FBaUI7UUFBakIsdUJBQWlCLEdBQWpCLFlBQWlCO1FBQ2pDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVixLQUFLLFVBQVU7Z0JBQ1gsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO29CQUN6QixFQUFFLENBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBQ0QsSUFBSSxDQUFBLENBQUM7b0JBQ0QsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUM7b0JBQzdFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsOEJBQThCLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO2dCQUNELEtBQUssQ0FBQztZQUVWLEtBQUssU0FBUztnQkFDVixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDN0MsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7b0JBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUNGLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO29CQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLDZCQUE2QixDQUFDLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkFDRCxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQXRERDtRQUFDLFlBQUssRUFBRTs7b0RBQUE7SUFUWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixVQUFVLEVBQUUsQ0FBQywwQ0FBWSxDQUFDO1lBQzFCLFdBQVcsRUFBRSw2Q0FBNkM7WUFDMUQsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDeEMsQ0FBQzs7dUJBQUE7SUEwREYsc0JBQUM7QUFBRCxDQXhEQSxBQXdEQyxJQUFBO0FBeERZLHVCQUFlLGtCQXdEM0IsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2VkaXRvcnMvdGV4dGZpZWxkL2VkaXRvcl90ZXh0ZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25FZGl0b3IgIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbl9wcm9wZXJ0aWVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEpTT05JdGVtVHJhY2tlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05VcGRhdGVJdGVtVHJhY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9idWlsZGVyLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdlZGl0b3ItdGV4dGZpZWxkJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtDb21tb25FZGl0b3JdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvaHRtbC9lZGl0b3JfdGV4dGZpZWxkLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yVGV4dEZpZWxkIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGNvbnRyb2w6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIF9idWlsZGVyU2VydmljZTogQnVpbGRlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfSXRlbVRyYWNrU2VydmljZTogSlNPTkl0ZW1UcmFja2VyXHJcbiAgICApIHtcclxuICAgICAgICAvLyAgICB0aGlzLmNvbnRyb2wgPSBqc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZENvbnRyb2woKTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlKGNvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIGNvbnRyb2wuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cyA9ICFjb250cm9sLmNvbmZpZy52YWxpZGF0aW9ucy5yZXF1aXJlZC5zdGF0dXM7XHJcbiAgICAgICAgLy8gY29udHJvbC5jb25maWcudmFsaWRhdGlvbnMubWluTGVuZ3RoLnN0YXR1cyA9ICFjb250cm9sLmNvbmZpZy52YWxpZGF0aW9ucy5taW5MZW5ndGguc3RhdHVzO1xyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIudXBkYXRlRm9ybUdyb3VwKCk7XHJcbiAgICB9XHJcbiAgICB0eXBlQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIudXBkYXRlRm9ybUdyb3VwKCk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZURlc2NyaXB0aW9uKGNvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIGNvbnRyb2wuY29uZmlnLnNob3dIZWxwID0gIWNvbnRyb2wuY29uZmlnLnNob3dIZWxwO1xyXG4gICAgICAgIGlmIChjb250cm9sLmNvbmZpZy5zaG93SGVscCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zaG93LWNoZWNrJykucGFyZW50cygnLnN3aXRjaCcpLmZpbmQoJy5kaXYtY2hlY2snKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2hvdy1jaGVjaycpLnBhcmVudHMoJy5zd2l0Y2gnKS5maW5kKCcuZGl2LWNoZWNrJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIHRoaXMuX0l0ZW1UcmFja1NlcnZpY2UucmVzZXRVbnNhdmVkRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuX0l0ZW1UcmFja1NlcnZpY2Uuc2V0VW5TYXZlZEl0ZW1zKHRoaXMuY29udHJvbCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNhbGxHQShzdHI6IHN0cmluZywgY29udHJvbDogYW55ID0ge30pIHtcclxuICAgICAgICBzd2l0Y2ggKHN0cikge1xyXG4gICAgICAgICAgICBjYXNlIFwiSEVMUFRFWFRcIjpcclxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sLmNvbmZpZy5zaG93SGVscCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdUb2dnbGUnLCAnVG9nZ2xlSGVscFRleHRPbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFRvZ2dsZSBIZWxwIFRleHQgT24nXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1RvZ2dsZUhlbHBUZXh0T2ZmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgVG9nZ2xlIEhlbHAgVGV4dCBPZmYnXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJNQU5EQVRFXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5jb25maWcudmFsaWRhdGlvbnMucmVxdWlyZWQuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDaGVjaycsICdNYXJrQXNNYW5kYXRvcnknKTtcclxuICAgICAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBNYXJrIEFzIE1hbmRhdG9yeSddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2hlY2snLCAnVW5tYXJrQXNNYW5kYXRvcnknKTtcclxuICAgICAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBVbm1hcmsgQXMgTWFuZGF0b3J5J10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
