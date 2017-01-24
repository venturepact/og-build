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
var CompanyProfileRouteGuard = (function () {
    function CompanyProfileRouteGuard(router) {
        this.router = router;
    }
    CompanyProfileRouteGuard.prototype.canActivate = function () {
        var url = window.location.hostname;
        var url_array = url.split('.');
        console.log(url_array.length);
        if (url_array.length !== 3) {
            console.log('In');
            this.router.navigate(['/']);
        }
        return true;
    };
    CompanyProfileRouteGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CompanyProfileRouteGuard);
    return CompanyProfileRouteGuard;
}());
exports.CompanyProfileRouteGuard = CompanyProfileRouteGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aGVudGljYXRpb24vY29tcGFueS1wcm9maWxlLXJvdXRlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFHckQ7SUFDRSxrQ0FBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXRDLDhDQUFXLEdBQVg7UUFDRSxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFiSDtRQUFDLGlCQUFVLEVBQUU7O2dDQUFBO0lBY2IsK0JBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLGdDQUF3QiwyQkFhcEMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2F1dGhlbnRpY2F0aW9uL2NvbXBhbnktcHJvZmlsZS1yb3V0ZS5ndWFyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbXBhbnlQcm9maWxlUm91dGVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcbiAgICBsZXQgdXJsX2FycmF5ID0gdXJsLnNwbGl0KCcuJyk7XHJcbiAgICBjb25zb2xlLmxvZyh1cmxfYXJyYXkubGVuZ3RoKTtcclxuICAgIGlmKHVybF9hcnJheS5sZW5ndGggIT09IDMpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0luJyk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=
