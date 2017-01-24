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
var AuthGuard = (function () {
    function AuthGuard(router, subDomainService, _cookieService) {
        this.router = router;
        this.subDomainService = subDomainService;
        this._cookieService = _cookieService;
    }
    AuthGuard.prototype.canActivate = function () {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var sub_domain = this.subDomainService.subDomain.sub_domain;
        if (this._cookieService.readCookie('storage') != null && storage.user.role === "ADMIN") {
            return true;
        }
        if (this._cookieService.readCookie('storage') != null && storage.companyList.includes(sub_domain)) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, index_1.SubDomainService, index_1.CookieService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aGVudGljYXRpb24vYXV0aC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHVCQUFtQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXJELHNCQUErQyxxQkFBcUIsQ0FBQyxDQUFBO0FBR3JFO0lBQ0UsbUJBQ1UsTUFBYyxFQUNkLGdCQUFpQyxFQUNqQyxjQUE0QjtRQUY1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBYztJQUNuQyxDQUFDO0lBRUosK0JBQVcsR0FBWDtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUM1RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFBQyxDQUFDO1FBQ3hHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQUMsQ0FBQztRQUNuSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFmSDtRQUFDLGlCQUFVLEVBQUU7O2lCQUFBO0lBZ0JiLGdCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxpQkFBUyxZQWVyQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvYXV0aGVudGljYXRpb24vYXV0aC5ndWFyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgaXNMb2dnZWRpbiB9IGZyb20gJy4vaXMtbG9nZ2VkaW4nO1xyXG5pbXBvcnQgeyBTdWJEb21haW5TZXJ2aWNlLENvb2tpZVNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHN1YkRvbWFpblNlcnZpY2U6U3ViRG9tYWluU2VydmljZSxcclxuICAgIHByaXZhdGUgX2Nvb2tpZVNlcnZpY2U6Q29va2llU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgY2FuQWN0aXZhdGUoKSB7XHJcbiAgICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG4gICAgbGV0IHN1Yl9kb21haW4gPSB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW47XHJcbiAgICBpZiAodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykgIT0gbnVsbCAmJiBzdG9yYWdlLnVzZXIucm9sZSA9PT0gXCJBRE1JTlwiKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICBpZiAodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykgIT0gbnVsbCAmJiBzdG9yYWdlLmNvbXBhbnlMaXN0LmluY2x1ZGVzKHN1Yl9kb21haW4pKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19
