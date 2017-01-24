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
var index_1 = require('../../../shared/services/index');
var CompanyProfileComponent = (function () {
    function CompanyProfileComponent(_userService, router, loggedInService) {
        this._userService = _userService;
        this.router = router;
        this.loggedInService = loggedInService;
    }
    CompanyProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-company-profile',
            providers: [index_1.UserService],
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: 'company-profile.component.html',
            styleUrls: ['company-profile.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.UserService, router_1.Router, index_1.LoggedInService])
    ], CompanyProfileComponent);
    return CompanyProfileComponent;
}());
exports.CompanyProfileComponent = CompanyProfileComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK2NvbXBhbnlQcm9maWxlL2NvbXBhbnktcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBeUMsaUJBQWlCLENBQUMsQ0FBQTtBQUMzRCxzQkFBNEMsZ0NBQWdDLENBQUMsQ0FBQTtBQVc3RTtJQUNFLGlDQUNTLFlBQTBCLEVBQzFCLE1BQWMsRUFDYixlQUFnQztRQUZqQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Isb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3JDLENBQUM7SUFkUjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbEIsUUFBUSxFQUFFLG9CQUFvQjtZQUMvQixTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO1lBQ3ZCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1lBQy9CLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDOUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDNUMsQ0FBQzs7K0JBQUE7SUFrQkYsOEJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLCtCQUF1QiwwQkFnQm5DLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvY29tcG9uZW50cy8rY29tcGFueVByb2ZpbGUvY29tcGFueS1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTG9nZ2VkSW5TZXJ2aWNlLFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1jb21wYW55LXByb2ZpbGUnLFxyXG5cdHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gIHRlbXBsYXRlVXJsOiAnY29tcGFueS1wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnY29tcGFueS1wcm9maWxlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBhbnlQcm9maWxlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBfdXNlclNlcnZpY2UgOiBVc2VyU2VydmljZSxcclxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbG9nZ2VkSW5TZXJ2aWNlOiBMb2dnZWRJblNlcnZpY2VcclxuICAgICkge31cclxuXHJcbiAgLy8gb25Mb2dvdXQoKSB7XHJcbiAgLy8gICB0aGlzLl91c2VyU2VydmljZS5sb2dvdXQoKVxyXG4gIC8vICAgICAuc3Vic2NyaWJlKFxyXG4gIC8vICAgICAgICgpID0+IHtcclxuICAvLyAgICAgICAgIHRoaXMubG9nZ2VkSW5TZXJ2aWNlLmxvZ291dCgpO1xyXG4gIC8vICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgKTtcclxuICAvLyB9XHJcbn1cclxuIl19
