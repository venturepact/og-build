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
var index_1 = require('./../../components/+signup/index');
var index_2 = require('./../../components/+dashboard/index');
var logged_in_service_1 = require('./../../../shared/services/logged-in.service');
var SiteHomeComponent = (function () {
    function SiteHomeComponent(loggedInService) {
        this.loggedInService = loggedInService;
        this.loggedIn = loggedInService.loggedIn;
    }
    SiteHomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'site-home',
            template: "\n            <signup-component *ngIf=\"!loggedIn.isLoggedIn\"></signup-component>\n            <og-dashboard *ngIf=\"loggedIn.isLoggedIn\"></og-dashboard>\n     ",
            styleUrls: ['site-home.component.css'],
            directives: [index_1.SignupComponent, index_2.DashboardComponent]
        }), 
        __metadata('design:paramtypes', [logged_in_service_1.LoggedInService])
    ], SiteHomeComponent);
    return SiteHomeComponent;
}());
exports.SiteHomeComponent = SiteHomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytob21lLytzaXRlLWhvbWUvc2l0ZS1ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHNCQUE4QixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ2pFLHNCQUFpQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBRXZFLGtDQUFnQyw4Q0FBOEMsQ0FBQyxDQUFBO0FBYy9FO0lBRUksMkJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUM7SUFDaEQsQ0FBQztJQWhCSDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLG9LQUdSO1lBRUYsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDdEMsVUFBVSxFQUFFLENBQUMsdUJBQWUsRUFBQywwQkFBa0IsQ0FBQztTQUNuRCxDQUFDOzt5QkFBQTtJQU9GLHdCQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSx5QkFBaUIsb0JBSzdCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2hvbWUvK3NpdGUtaG9tZS9zaXRlLWhvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzLytzaWdudXAvaW5kZXgnO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzLytkYXNoYm9hcmQvaW5kZXgnO1xyXG5pbXBvcnQgeyBMb2dnZWRJbiB9IGZyb20gJy4vLi4vLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvbG9nZ2VkLWluLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IExvZ2dlZEluU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2dlZC1pbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnc2l0ZS1ob21lJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgIDxzaWdudXAtY29tcG9uZW50ICpuZ0lmPVwiIWxvZ2dlZEluLmlzTG9nZ2VkSW5cIj48L3NpZ251cC1jb21wb25lbnQ+XHJcbiAgICAgICAgICAgIDxvZy1kYXNoYm9hcmQgKm5nSWY9XCJsb2dnZWRJbi5pc0xvZ2dlZEluXCI+PC9vZy1kYXNoYm9hcmQ+XHJcbiAgICAgYCxcclxuICAgIC8vdGVtcGxhdGU6ICc8Km5nSWY9XCIhbG9nZ2VkSW4uaXNMb2dnZWRJblwiIHNpZ251cC1jb21wb25lbnQ+PC9zaWdudXAtY29tcG9uZW50PicsXHJcbiAgICBzdHlsZVVybHM6IFsnc2l0ZS1ob21lLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtTaWdudXBDb21wb25lbnQsRGFzaGJvYXJkQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpdGVIb21lQ29tcG9uZW50IHtcclxuICAgIGxvZ2dlZEluOiBMb2dnZWRJbjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VkSW5TZXJ2aWNlOiBMb2dnZWRJblNlcnZpY2UpIHtcclxuICAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGxvZ2dlZEluU2VydmljZS5sb2dnZWRJbjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ==
