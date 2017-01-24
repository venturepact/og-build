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
var router_1 = require('@angular/router');
var index_1 = require('../../../../shared/services/index');
var CompanyNavbarComponent = (function () {
    function CompanyNavbarComponent(loggedInService, _cookieService) {
        this.loggedInService = loggedInService;
        this._cookieService = _cookieService;
        this.showLogin = false;
        var url = window.location.hostname;
        var url_array = url.split('.');
        if (url_array.length === 3) {
            this.showLogin = true;
        }
        this.loggedIn = loggedInService.loggedIn;
        var storage = _cookieService.readCookie('storage');
        if (storage !== null) {
            storage = JSON.parse(storage);
            console.log(storage.user.username);
            this.username = storage.user.username;
        }
    }
    CompanyNavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'company-navbar',
            templateUrl: 'company-navbar.component.html',
            styleUrls: ['company-navbar.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.LoggedInService, index_1.CookieService])
    ], CompanyNavbarComponent);
    return CompanyNavbarComponent;
}());
exports.CompanyNavbarComponent = CompanyNavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK25hdmJhci8rY29tcGFueS1uYXZiYXIvY29tcGFueS1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFFcEQsc0JBQThDLG1DQUFtQyxDQUFDLENBQUE7QUFhbEY7SUFLRSxnQ0FDVSxlQUFnQyxFQUNoQyxjQUE0QjtRQUQ1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWM7UUFKdEMsY0FBUyxHQUFXLEtBQUssQ0FBQztRQU14QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ3pDLElBQUksT0FBTyxHQUFTLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekQsRUFBRSxDQUFBLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUE3Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztZQUMzQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNoQyxDQUFDOzs4QkFBQTtJQXlCRiw2QkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2QlksOEJBQXNCLHlCQXVCbEMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS9jb21wb25lbnRzLytuYXZiYXIvK2NvbXBhbnktbmF2YmFyL2NvbXBhbnktbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2dlZEluIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2ludGVyZmFjZXMvbG9nZ2VkLWluLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IExvZ2dlZEluU2VydmljZSxDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG5hdmlnYXRpb24gYmFyIGNvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdjb21wYW55LW5hdmJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdjb21wYW55LW5hdmJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NvbXBhbnktbmF2YmFyLmNvbXBvbmVudC5jc3MnXSxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcGFueU5hdmJhckNvbXBvbmVudCB7XHJcbiAgbG9nZ2VkSW46IExvZ2dlZEluO1xyXG4gIHVzZXJuYW1lOiBTdHJpbmc7XHJcbiAgc2hvd0xvZ2luOkJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvZ2dlZEluU2VydmljZTogTG9nZ2VkSW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfY29va2llU2VydmljZTpDb29raWVTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xyXG4gICAgbGV0IHVybF9hcnJheSA9IHVybC5zcGxpdCgnLicpO1xyXG4gICAgaWYodXJsX2FycmF5Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgICB0aGlzLnNob3dMb2dpbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvZ2dlZEluID0gbG9nZ2VkSW5TZXJ2aWNlLmxvZ2dlZEluO1xyXG4gICAgbGV0IHN0b3JhZ2UgOiBhbnkgPSBfY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJyk7XHJcbiAgICBpZihzdG9yYWdlICE9PSBudWxsKSB7XHJcbiAgICAgIHN0b3JhZ2UgPSBKU09OLnBhcnNlKHN0b3JhZ2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhzdG9yYWdlLnVzZXIudXNlcm5hbWUpO1xyXG4gICAgICB0aGlzLnVzZXJuYW1lID0gc3RvcmFnZS51c2VyLnVzZXJuYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19
