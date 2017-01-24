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
var index_1 = require('./../../../shared/services/index');
var env_config_1 = require('../../../config/env.config');
var ToolbarComponent = (function () {
    function ToolbarComponent(loggedInService, _userService, router, _cookieService) {
        this.loggedInService = loggedInService;
        this._userService = _userService;
        this.router = router;
        this._cookieService = _cookieService;
        this.loggedIn = loggedInService.loggedIn;
        var storage = JSON.parse(_cookieService.readCookie('storage'));
        console.log('cookie storage', storage);
        if (_cookieService.readCookie('storage') !== null) {
            this.username = storage.user.username;
        }
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        jQuery.material.init();
        this.currentUrl = '';
        this.subDomainExt = '.' + env_config_1.Config.APP_EXTENSION;
    };
    ToolbarComponent.prototype.onLogout = function () {
        var _this = this;
        this._userService.logout()
            .subscribe(function () {
            _this.loggedInService.logout();
            _this.router.navigate(['/']);
        });
    };
    ToolbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-toolbar',
            templateUrl: 'toolbar.component.html',
            styleUrls: [
                'toolbar.component.css'
            ],
            providers: [index_1.UserService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.LoggedInService, index_1.UserService, router_1.Router, index_1.CookieService])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBeUMsaUJBQWlCLENBQUMsQ0FBQTtBQUUzRCxzQkFBd0Qsa0NBQWtDLENBQUMsQ0FBQTtBQUMzRiwyQkFBdUIsNEJBQTRCLENBQUMsQ0FBQTtBQWNwRDtJQVlFLDBCQUNVLGVBQWdDLEVBQ2pDLFlBQTBCLEVBQzFCLE1BQWMsRUFDYixjQUE0QjtRQUg1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDakMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNiLG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBRXBDLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0lBbEJELG1DQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLG1CQUFNLENBQUMsYUFBYSxDQUFDO0lBQ2pELENBQUM7SUFnQkQsbUNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7YUFDdkIsU0FBUyxDQUNSO1lBQ0UsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBN0NIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRTtnQkFDVCx1QkFBdUI7YUFDeEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO1lBQ3hCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1NBQ2hDLENBQUM7O3dCQUFBO0lBcUNGLHVCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtBQW5DWSx3QkFBZ0IsbUJBbUM1QixDQUFBIiwiZmlsZSI6ImFwcC9hZG1pbi9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtMb2dnZWRJbn0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9sb2dnZWQtaW4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHtMb2dnZWRJblNlcnZpY2UsVXNlclNlcnZpY2UsQ29va2llU2VydmljZX0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvZW52LmNvbmZpZyc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnb2ctdG9vbGJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcclxuICAgICd0b29sYmFyLmNvbXBvbmVudC5jc3MnXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgbG9nZ2VkSW46IExvZ2dlZEluO1xyXG4gIHVzZXJuYW1lOiBTdHJpbmc7XHJcbiAgc3ViRG9tYWluRXh0OmFueTtcclxuICBjdXJyZW50VXJsOiBhbnk7XHJcbiAgbXlDb21wYW5pZXM6YW55O1xyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgalF1ZXJ5Lm1hdGVyaWFsLmluaXQoKTtcclxuICAgIHRoaXMuY3VycmVudFVybCA9ICcnO1xyXG4gICAgdGhpcy5zdWJEb21haW5FeHQgPSAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2dnZWRJblNlcnZpY2U6IExvZ2dlZEluU2VydmljZSxcclxuICAgIHB1YmxpYyBfdXNlclNlcnZpY2UgOiBVc2VyU2VydmljZSxcclxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgX2Nvb2tpZVNlcnZpY2U6Q29va2llU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5sb2dnZWRJbiA9IGxvZ2dlZEluU2VydmljZS5sb2dnZWRJbjtcclxuICAgIGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZShfY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG4gICAgY29uc29sZS5sb2coJ2Nvb2tpZSBzdG9yYWdlJyxzdG9yYWdlKTtcclxuICAgIGlmKF9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnVzZXJuYW1lID0gc3RvcmFnZS51c2VyLnVzZXJuYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Mb2dvdXQoKSB7XHJcbiAgICB0aGlzLl91c2VyU2VydmljZS5sb2dvdXQoKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHRoaXMubG9nZ2VkSW5TZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuIl19
