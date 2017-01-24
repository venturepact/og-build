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
var EditorHeader = (function () {
    function EditorHeader(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.control = jsonBuilderHelper.getSelectedControl();
    }
    EditorHeader = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-header',
            templateUrl: 'assets/html/editor_header.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], EditorHeader);
    return EditorHeader;
}());
exports.EditorHeader = EditorHeader;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9oZWFkZXIvZWRpdG9yX2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtRCxlQUFlLENBQUMsQ0FBQTtBQUNuRSxvQ0FBNEIsdUNBQXVDLENBQUMsQ0FBQTtBQVNwRTtJQUdJLHNCQUFvQixpQkFBOEI7UUFBOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBWkw7UUFBQyxnQkFBUyxDQUFDO1lBQ04sUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZCLFFBQVEsRUFBRSxlQUFlO1lBQ3RCLFdBQVcsRUFBQywwQ0FBMEM7WUFDdEQsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDeEMsQ0FBQzs7b0JBQUE7SUFRRixtQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksb0JBQVksZUFNeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2VkaXRvcnMvaGVhZGVyL2VkaXRvcl9oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCxWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2VkaXRvci1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6J2Fzc2V0cy9odG1sL2VkaXRvcl9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvckhlYWRlciB7XHJcblx0Y29udHJvbDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyKXtcclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSBqc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZENvbnRyb2woKTtcclxuICAgIH1cclxufVxyXG4iXX0=
