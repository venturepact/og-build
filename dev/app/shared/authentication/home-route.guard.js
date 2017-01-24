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
var is_loggedin_1 = require('./is-loggedin');
var HomeRouteGuard = (function () {
    function HomeRouteGuard(router) {
        this.router = router;
    }
    HomeRouteGuard.prototype.canActivate = function () {
        var url = window.location.hostname;
        var url_array = url.split('.');
        console.log(url_array.length);
        if (url_array.length === 3) {
            console.log('In');
            this.router.navigate(['company-profile']);
        }
        if (is_loggedin_1.isLoggedin()) {
            this.router.navigate(['dashboard']);
        }
        return true;
    };
    HomeRouteGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeRouteGuard);
    return HomeRouteGuard;
}());
exports.HomeRouteGuard = HomeRouteGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aGVudGljYXRpb24vaG9tZS1yb3V0ZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUFtQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3JELDRCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUczQztJQUNFLHdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFdEMsb0NBQVcsR0FBWDtRQUNFLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLHdCQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQWhCSDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBaUJiLHFCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxzQkFBYyxpQkFnQjFCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9hdXRoZW50aWNhdGlvbi9ob21lLXJvdXRlLmd1YXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBpc0xvZ2dlZGluIH0gZnJvbSAnLi9pcy1sb2dnZWRpbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIb21lUm91dGVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcbiAgICBsZXQgdXJsX2FycmF5ID0gdXJsLnNwbGl0KCcuJyk7XHJcbiAgICBjb25zb2xlLmxvZyh1cmxfYXJyYXkubGVuZ3RoKTtcclxuICAgIGlmKHVybF9hcnJheS5sZW5ndGggPT09IDMpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0luJyk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnY29tcGFueS1wcm9maWxlJ10pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTG9nZ2VkaW4oKSkge1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZCddKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=
