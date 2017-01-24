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
var SetupNewPasswordGuard = (function () {
    function SetupNewPasswordGuard(router, _cookieService, subDomainService) {
        this.router = router;
        this._cookieService = _cookieService;
        this.subDomainService = subDomainService;
    }
    SetupNewPasswordGuard.prototype.canActivate = function () {
        var verification = JSON.parse(localStorage.getItem('verification'));
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var sub_domain = this.subDomainService.subDomain.sub_domain;
        if (verification != null) {
            return true;
        }
        if (this._cookieService.readCookie('storage') != null && storage.companyList.includes(sub_domain)) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    SetupNewPasswordGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, index_1.CookieService, index_1.SubDomainService])
    ], SetupNewPasswordGuard);
    return SetupNewPasswordGuard;
}());
exports.SetupNewPasswordGuard = SetupNewPasswordGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aGVudGljYXRpb24vc2V0dXBuZXctcGFzc3dvcmQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx1QkFBbUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNyRCxzQkFBK0MscUJBQXFCLENBQUMsQ0FBQTtBQUdyRTtJQUNFLCtCQUFzQixNQUFjLEVBQ2QsY0FBNEIsRUFDNUIsZ0JBQWlDO1FBRmpDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO0lBQ3BELENBQUM7SUFFSiwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxZQUFZLEdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUU7UUFDMUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxJQUFLLENBQUMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUFDLENBQUM7UUFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ1AsQ0FBQztJQW5CSDtRQUFDLGlCQUFVLEVBQUU7OzZCQUFBO0lBb0JiLDRCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSw2QkFBcUIsd0JBbUJqQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvYXV0aGVudGljYXRpb24vc2V0dXBuZXctcGFzc3dvcmQuZ3VhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YkRvbWFpblNlcnZpY2UsQ29va2llU2VydmljZSB9IGZyb20gJy4vLi4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2V0dXBOZXdQYXNzd29yZEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2Nvb2tpZVNlcnZpY2U6Q29va2llU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgc3ViRG9tYWluU2VydmljZTpTdWJEb21haW5TZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgIGxldCB2ZXJpZmljYXRpb246YW55ICA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZlcmlmaWNhdGlvbicpKSA7ICBcclxuICAgIGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZSh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcbiAgICBsZXQgc3ViX2RvbWFpbiA9IHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbjtcclxuICAgICAgICBpZiAodmVyaWZpY2F0aW9uICE9IG51bGwgKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpICE9IG51bGwgJiYgc3RvcmFnZS5jb21wYW55TGlzdC5pbmNsdWRlcyhzdWJfZG9tYWluKSkgeyBcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pOyBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
