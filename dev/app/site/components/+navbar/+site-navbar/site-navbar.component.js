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
var SiteNavbarComponent = (function () {
    function SiteNavbarComponent(loggedInService, _cookieService) {
        this.loggedInService = loggedInService;
        this._cookieService = _cookieService;
        this.showLogin = false;
        console.log(window.location.hostname);
        var url = window.location.hostname;
        var url_array = url.split('.');
        if (url_array.length === 3) {
            this.showLogin = true;
        }
        this.loggedIn = loggedInService.loggedIn;
        var storage = _cookieService.readCookie('storage');
        if (storage !== null) {
            storage = JSON.parse(storage);
            this.username = storage.user.username;
        }
    }
    SiteNavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'site-navbar',
            templateUrl: 'site-navbar.component.html',
            styleUrls: ['site-navbar.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.LoggedInService, index_1.CookieService])
    ], SiteNavbarComponent);
    return SiteNavbarComponent;
}());
exports.SiteNavbarComponent = SiteNavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK25hdmJhci8rc2l0ZS1uYXZiYXIvc2l0ZS1uYXZiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFFcEQsc0JBQThDLG1DQUFtQyxDQUFDLENBQUE7QUFhbEY7SUFLRSw2QkFDVSxlQUFnQyxFQUNoQyxjQUE0QjtRQUQ1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWM7UUFKdEMsY0FBUyxHQUFXLEtBQUssQ0FBQztRQU14QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDbkMsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLE9BQU8sR0FBUyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pELEVBQUUsQ0FBQSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUE3Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7U0FDaEMsQ0FBQzs7MkJBQUE7SUF5QkYsMEJBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLDJCQUFtQixzQkF1Qi9CLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvY29tcG9uZW50cy8rbmF2YmFyLytzaXRlLW5hdmJhci9zaXRlLW5hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBMb2dnZWRJbiB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL2xvZ2dlZC1pbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBMb2dnZWRJblNlcnZpY2UsQ29va2llU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBuYXZpZ2F0aW9uIGJhciBjb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2l0ZS1uYXZiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2l0ZS1uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydzaXRlLW5hdmJhci5jb21wb25lbnQuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpdGVOYXZiYXJDb21wb25lbnQge1xyXG4gIGxvZ2dlZEluOiBMb2dnZWRJbjtcclxuICB1c2VybmFtZTogU3RyaW5nO1xyXG4gIHNob3dMb2dpbjpCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBsb2dnZWRJblNlcnZpY2U6IExvZ2dlZEluU2VydmljZSxcclxuICAgIHByaXZhdGUgX2Nvb2tpZVNlcnZpY2U6Q29va2llU2VydmljZVxyXG4gICkge1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKTtcclxuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcbiAgICBsZXQgdXJsX2FycmF5ID0gdXJsLnNwbGl0KCcuJyk7XHJcbiAgICBpZih1cmxfYXJyYXkubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgIHRoaXMuc2hvd0xvZ2luID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMubG9nZ2VkSW4gPSBsb2dnZWRJblNlcnZpY2UubG9nZ2VkSW47XHJcbiAgICBsZXQgc3RvcmFnZSA6IGFueSA9IF9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKTtcclxuICAgIGlmKHN0b3JhZ2UgIT09IG51bGwpIHtcclxuICAgICAgc3RvcmFnZSA9IEpTT04ucGFyc2Uoc3RvcmFnZSk7XHJcbiAgICAgIHRoaXMudXNlcm5hbWUgPSBzdG9yYWdlLnVzZXIudXNlcm5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
