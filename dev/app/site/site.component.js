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
var index_1 = require('./components/+navbar/index');
var index_2 = require('../shared/services/index');
var index_3 = require('./components/toolbar/index');
var index_4 = require('./../shared/login/index');
var SiteComponent = (function () {
    function SiteComponent(subDomainService, companyService, loggedInService, _cookieService, _featureAuthService, router) {
        this.subDomainService = subDomainService;
        this.companyService = companyService;
        this.loggedInService = loggedInService;
        this._cookieService = _cookieService;
        this._featureAuthService = _featureAuthService;
        this.router = router;
        this.subDomain = subDomainService.subDomain;
    }
    SiteComponent.prototype.ngOnInit = function () {
    };
    SiteComponent.prototype.ngOnDestroy = function () {
    };
    SiteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-site',
            template: "\n    <sd-toolbar></sd-toolbar>\n    <router-outlet></router-outlet>\n  ",
            styleUrls: ['site.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, index_1.SiteNavbarComponent, index_1.CompanyNavbarComponent, index_3.ToolbarComponent, index_4.LoginComponent],
            providers: [index_2.CompanyService],
        }), 
        __metadata('design:paramtypes', [index_2.SubDomainService, index_2.CompanyService, index_2.LoggedInService, index_2.CookieService, index_2.FeatureAuthService, router_1.Router])
    ], SiteComponent);
    return SiteComponent;
}());
exports.SiteComponent = SiteComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3NpdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQXlDLGlCQUFpQixDQUFDLENBQUE7QUFDM0Qsc0JBQTRELDRCQUE0QixDQUFDLENBQUE7QUFFekYsc0JBQW1HLDBCQUEwQixDQUFDLENBQUE7QUFDOUgsc0JBQWlDLDRCQUE0QixDQUFDLENBQUE7QUFDOUQsc0JBQStCLHlCQUF5QixDQUFDLENBQUE7QUFrQnpEO0lBRUksdUJBQW9CLGdCQUFrQyxFQUMxQyxjQUE4QixFQUM5QixlQUFnQyxFQUNoQyxjQUE0QixFQUM1QixtQkFBc0MsRUFDdEMsTUFBZTtRQUxQLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUM1Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQ3RDLFdBQU0sR0FBTixNQUFNLENBQVM7UUFFdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7SUFDaEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBQ0QsbUNBQVcsR0FBWDtJQUVBLENBQUM7SUE3Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSwwRUFHWDtZQUNDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQ2pDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDJCQUFtQixFQUFFLDhCQUFzQixFQUFFLHdCQUFnQixFQUFFLHNCQUFjLENBQUM7WUFDOUcsU0FBUyxFQUFFLENBQUMsc0JBQWMsQ0FBQztTQUM5QixDQUFDOztxQkFBQTtJQW9CRixvQkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlkscUJBQWEsZ0JBa0J6QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3NpdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyxSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTaXRlTmF2YmFyQ29tcG9uZW50LCBDb21wYW55TmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzLytuYXZiYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTdWJEb21haW4gfSBmcm9tICcuLy4uL3NoYXJlZC9pbnRlcmZhY2VzL3N1YmRvbWFpbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTdWJEb21haW5TZXJ2aWNlLCBDb21wYW55U2VydmljZSwgTG9nZ2VkSW5TZXJ2aWNlLENvb2tpZVNlcnZpY2UsRmVhdHVyZUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b29sYmFyL2luZGV4JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuLy4uL3NoYXJlZC9sb2dpbi9pbmRleCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdvZy1zaXRlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8c2QtdG9vbGJhcj48L3NkLXRvb2xiYXI+XHJcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgYCxcclxuICAgIHN0eWxlVXJsczogWydzaXRlLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgU2l0ZU5hdmJhckNvbXBvbmVudCwgQ29tcGFueU5hdmJhckNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudCwgTG9naW5Db21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbQ29tcGFueVNlcnZpY2VdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsT25EZXN0cm95IHtcclxuICAgIHN1YkRvbWFpbjogU3ViRG9tYWluO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdWJEb21haW5TZXJ2aWNlOiBTdWJEb21haW5TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY29tcGFueVNlcnZpY2U6IENvbXBhbnlTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbG9nZ2VkSW5TZXJ2aWNlOiBMb2dnZWRJblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfY29va2llU2VydmljZTpDb29raWVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2ZlYXR1cmVBdXRoU2VydmljZTpGZWF0dXJlQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuc3ViRG9tYWluID0gc3ViRG9tYWluU2VydmljZS5zdWJEb21haW47XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcblxyXG4gICAgfVxyXG59Il19
