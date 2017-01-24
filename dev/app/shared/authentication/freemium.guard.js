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
var index_1 = require('./../services/index');
var FreemiumGuard = (function () {
    function FreemiumGuard(router, subDomainService, _cookieService) {
        this.router = router;
        this.subDomainService = subDomainService;
        this._cookieService = _cookieService;
    }
    FreemiumGuard.prototype.canActivate = function () {
        var _this = this;
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var sub_domain = this.subDomainService.subDomain.sub_domain;
        var plan_id = '';
        var companyAccess = JSON.parse(this._cookieService.readCookie('filepicker_token_json'));
        var subscription_status = '';
        if (!companyAccess)
            window.location.href = window.location.origin + '/logout';
        else
            companyAccess.forEach(function (e) {
                if (e.key === sub_domain) {
                    subscription_status = e.value;
                    plan_id = e.plan_id;
                }
            });
        if (((subscription_status == "active" && plan_id == 'freemium') || subscription_status == "cancelled") && !storage.company.is_admin_created) {
            var timer_1 = setInterval(function () {
                storage = JSON.parse(_this._cookieService.readCookie('storage'));
                if (storage) {
                    _this.abortTimer(timer_1);
                }
            }, 200);
            return false;
        }
        return true;
    };
    FreemiumGuard.prototype.abortTimer = function (timer) {
        clearInterval(timer);
        this.router.navigate(['/settings/membership']);
    };
    FreemiumGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, index_1.SubDomainService, index_1.CookieService])
    ], FreemiumGuard);
    return FreemiumGuard;
}());
exports.FreemiumGuard = FreemiumGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aGVudGljYXRpb24vZnJlZW1pdW0uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx1QkFBb0MsaUJBQWlCLENBQUMsQ0FBQTtBQUN0RCxzQkFBZ0QscUJBQXFCLENBQUMsQ0FBQTtBQUd0RTtJQUNJLHVCQUNZLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBNkI7UUFGN0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWU7SUFDckMsQ0FBQztJQUVMLG1DQUFXLEdBQVg7UUFBQSxpQkE4QkM7UUE3QkcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQzVELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUNmLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUM5RCxJQUFJO1lBQ0EsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQU07Z0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDOUIsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUVQLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsSUFBSSxRQUFRLElBQUksT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLG1CQUFtQixJQUFJLFdBQVcsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDM0ksSUFBSSxPQUFLLEdBQUcsV0FBVyxDQUFDO2dCQUNwQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO29CQUNSLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBSyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7WUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFUixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBR2hCLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsS0FBVztRQUNqQixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQTNDTDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBNENiLG9CQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSxxQkFBYSxnQkEyQ3pCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9hdXRoZW50aWNhdGlvbi9mcmVlbWl1bS5ndWFyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YkRvbWFpblNlcnZpY2UsIENvb2tpZVNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZyZWVtaXVtR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgc3ViRG9tYWluU2VydmljZTogU3ViRG9tYWluU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9jb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKCkge1xyXG4gICAgICAgIGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZSh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcbiAgICAgICAgbGV0IHN1Yl9kb21haW4gPSB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW47XHJcbiAgICAgICAgbGV0IHBsYW5faWQgPSAnJztcclxuICAgICAgICBsZXQgY29tcGFueUFjY2VzcyA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nKSk7XHJcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbl9zdGF0dXMgPSAnJztcclxuICAgICAgICBpZiAoIWNvbXBhbnlBY2Nlc3MpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvbG9nb3V0JztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNvbXBhbnlBY2Nlc3MuZm9yRWFjaCgoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IHN1Yl9kb21haW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25fc3RhdHVzID0gZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuX2lkID0gZS5wbGFuX2lkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyBhZnRlciBpbml0aWFsICB0cmlhbCBwZXJpb2QgaWYgY3VzdG9tZXIgZG9udCB1cGdyYWRlIHRoZSBwbGFuXHJcbiAgICAgICAgaWYgKCgoc3Vic2NyaXB0aW9uX3N0YXR1cyA9PSBcImFjdGl2ZVwiICYmIHBsYW5faWQgPT0gJ2ZyZWVtaXVtJykgfHwgc3Vic2NyaXB0aW9uX3N0YXR1cyA9PSBcImNhbmNlbGxlZFwiICkgJiYgIXN0b3JhZ2UuY29tcGFueS5pc19hZG1pbl9jcmVhdGVkKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlID0gSlNPTi5wYXJzZSh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcbiAgICAgICAgICAgICAgICBpZihzdG9yYWdlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFib3J0VGltZXIodGltZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyMDApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhYm9ydFRpbWVyKHRpbWVyIDogYW55KSB7XHJcbiAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zZXR0aW5ncy9tZW1iZXJzaGlwJ10pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
