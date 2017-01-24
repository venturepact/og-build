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
        var plan_id = storage.company.billing.chargebee_plan_id;
        var companyAccess = JSON.parse(this._cookieService.readCookie('filepicker_token_json'));
        var subscription_status = '';
        if (!companyAccess)
            window.location.href = window.location.origin + '/logout';
        else
            companyAccess.forEach(function (e) {
                if (e.key === sub_domain) {
                    subscription_status = e.value;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aGVudGljYXRpb24vZnJlZW1pdW0uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx1QkFBb0MsaUJBQWlCLENBQUMsQ0FBQTtBQUN0RCxzQkFBZ0QscUJBQXFCLENBQUMsQ0FBQTtBQUd0RTtJQUNJLHVCQUNZLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsY0FBNkI7UUFGN0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWU7SUFDckMsQ0FBQztJQUVMLG1DQUFXLEdBQVg7UUFBQSxpQkE2QkM7UUE1QkcsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQzVELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBQ3hELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ2YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQzlELElBQUk7WUFDQSxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTTtnQkFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUN2QixtQkFBbUIsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNsQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFUCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLElBQUksUUFBUSxJQUFJLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxtQkFBbUIsSUFBSSxXQUFXLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzNJLElBQUksT0FBSyxHQUFHLFdBQVcsQ0FBQztnQkFDcEIsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztvQkFDUixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQUssQ0FBQyxDQUFDO2dCQUMzQixDQUFDO1lBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRVIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUdoQixDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLEtBQVc7UUFDakIsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUExQ0w7UUFBQyxpQkFBVSxFQUFFOztxQkFBQTtJQTJDYixvQkFBQztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ1kscUJBQWEsZ0JBMEN6QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvYXV0aGVudGljYXRpb24vZnJlZW1pdW0uZ3VhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJEb21haW5TZXJ2aWNlLCBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGcmVlbWl1bUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHN1YkRvbWFpblNlcnZpY2U6IFN1YkRvbWFpblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfY29va2llU2VydmljZTogQ29va2llU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgICAgICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG4gICAgICAgIGxldCBzdWJfZG9tYWluID0gdGhpcy5zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5zdWJfZG9tYWluO1xyXG4gICAgICAgIGxldCBwbGFuX2lkID0gc3RvcmFnZS5jb21wYW55LmJpbGxpbmcuY2hhcmdlYmVlX3BsYW5faWQ7XHJcbiAgICAgICAgbGV0IGNvbXBhbnlBY2Nlc3MgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnZmlsZXBpY2tlcl90b2tlbl9qc29uJykpO1xyXG4gICAgICAgIGxldCBzdWJzY3JpcHRpb25fc3RhdHVzID0gJyc7XHJcbiAgICAgICAgaWYgKCFjb21wYW55QWNjZXNzKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2xvZ291dCc7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb21wYW55QWNjZXNzLmZvckVhY2goKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBzdWJfZG9tYWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uX3N0YXR1cyA9IGUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGFmdGVyIGluaXRpYWwgIHRyaWFsIHBlcmlvZCBpZiBjdXN0b21lciBkb250IHVwZ3JhZGUgdGhlIHBsYW5cclxuICAgICAgICBpZiAoKChzdWJzY3JpcHRpb25fc3RhdHVzID09IFwiYWN0aXZlXCIgJiYgcGxhbl9pZCA9PSAnZnJlZW1pdW0nKSB8fCBzdWJzY3JpcHRpb25fc3RhdHVzID09IFwiY2FuY2VsbGVkXCIgKSAmJiAhc3RvcmFnZS5jb21wYW55LmlzX2FkbWluX2NyZWF0ZWQpIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuICAgICAgICAgICAgICAgIGlmKHN0b3JhZ2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWJvcnRUaW1lcih0aW1lcik7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyMDApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhYm9ydFRpbWVyKHRpbWVyIDogYW55KSB7IFxyXG4gICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2V0dGluZ3MvbWVtYmVyc2hpcCddKTtcclxuICAgIH1cclxufVxyXG4iXX0=
