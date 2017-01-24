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
var EditorButton = (function () {
    function EditorButton(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.control = jsonBuilderHelper.getSelectedControl;
    }
    EditorButton = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-button',
            templateUrl: 'assets/html/editor_button.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], EditorButton);
    return EditorButton;
}());
exports.EditorButton = EditorButton;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9idXR0b24vZWRpdG9yX2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUNwRSxvQ0FBNEIsdUNBQXVDLENBQUMsQ0FBQTtBQVNwRTtJQUdJLHNCQUFvQixpQkFBOEI7UUFBOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7SUFDeEQsQ0FBQztJQVpMO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsMENBQTBDO1lBQ3ZELGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1NBQ3JDLENBQUM7O29CQUFBO0lBUUYsbUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLG9CQUFZLGVBTXhCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvY29tcG9uZW50cy9lZGl0b3JzL2J1dHRvbi9lZGl0b3JfYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnZWRpdG9yLWJ1dHRvbicsXHJcblx0dGVtcGxhdGVVcmw6ICdhc3NldHMvaHRtbC9lZGl0b3JfYnV0dG9uLmNvbXBvbmVudC5odG1sJyAsXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvckJ1dHRvbiB7XHJcblx0Y29udHJvbDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyKXtcclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSBqc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZENvbnRyb2w7XHJcbiAgICB9XHJcbn1cclxuIl19
