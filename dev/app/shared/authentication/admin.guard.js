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
var AdminGuard = (function () {
    function AdminGuard(router, _cookieService) {
        this.router = router;
        this._cookieService = _cookieService;
    }
    AdminGuard.prototype.canActivate = function () {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        if (this._cookieService.readCookie('storage') !== null && storage.user.role == "ADMIN") {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AdminGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, index_1.CookieService])
    ], AdminGuard);
    return AdminGuard;
}());
exports.AdminGuard = AdminGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aGVudGljYXRpb24vYWRtaW4uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx1QkFBbUMsaUJBQWlCLENBQUMsQ0FBQTtBQUVyRCxzQkFBOEIscUJBQXFCLENBQUMsQ0FBQTtBQUdwRDtJQUNFLG9CQUFvQixNQUFjLEVBQVMsY0FBNkI7UUFBcEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFlO0lBQUcsQ0FBQztJQUU1RSxnQ0FBVyxHQUFYO1FBQ0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ25FLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZixDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBWEg7UUFBQyxpQkFBVSxFQUFFOztrQkFBQTtJQVliLGlCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSxrQkFBVSxhQVd0QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvYXV0aGVudGljYXRpb24vYWRtaW4uZ3VhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGlzTG9nZ2VkaW4gfSBmcm9tICcuL2lzLWxvZ2dlZGluJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJy4vLi4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWRtaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLHByaXZhdGUgX2Nvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHt9XHJcblxyXG4gIGNhbkFjdGl2YXRlKCkge1xyXG4gIFx0bGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuICAgIGlmICh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSAhPT0gbnVsbCAmJiBzdG9yYWdlLnVzZXIucm9sZT09XCJBRE1JTlwiKSB7XHJcbiAgICBcdHJldHVybiB0cnVlOyBcclxuIFx0fVxyXG4gXHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19
