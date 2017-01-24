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
var env_config_1 = require('./../../config/env.config');
var LogoutComponent = (function () {
    function LogoutComponent(_userService, router, loggedInService, subDomainService) {
        this._userService = _userService;
        this.router = router;
        this.loggedInService = loggedInService;
        this.subDomainService = subDomainService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.logout()
            .subscribe(function () {
            _this.loggedInService.logout();
            localStorage.clear();
            _this.router.navigate(['/']);
            if (_this.subDomainService.subDomain.is_sub_domain_url) {
                window.location.href = env_config_1.Config.APP_DOMAIN;
            }
        });
    };
    LogoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-logout',
            template: ''
        }), 
        __metadata('design:paramtypes', [index_1.UserService, router_1.Router, index_1.LoggedInService, index_1.SubDomainService])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbG9nb3V0L2xvZ291dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQUNqRCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QyxzQkFBNEQscUJBQXFCLENBQUMsQ0FBQTtBQUNsRiwyQkFBdUIsMkJBQTJCLENBQUMsQ0FBQTtBQVluRDtJQUVFLHlCQUNjLFlBQXdCLEVBQ3pCLE1BQWMsRUFDYixlQUFnQyxFQUNoQyxnQkFBa0M7UUFIbEMsaUJBQVksR0FBWixZQUFZLENBQVk7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNiLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRTlDLENBQUM7SUFFSCxrQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTthQUN6QixTQUFTLENBQ1I7WUFDSSxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzlCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBLENBQUM7Z0JBQ3pELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLG1CQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3RDLENBQUM7UUFDTCxDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUE1Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBQyxFQUFFO1NBQ2QsQ0FBQzs7dUJBQUE7SUEwQkYsc0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLHVCQUFlLGtCQXdCM0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSxMb2dnZWRJblNlcnZpY2UsU3ViRG9tYWluU2VydmljZX0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcclxuZGVjbGFyZSB2YXIgZ2E6YW55O1xyXG5kZWNsYXJlIHZhciBfa21xOmFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdvZy1sb2dvdXQnLFxyXG4gICAgdGVtcGxhdGU6JydcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGxvZ2dlZEluU2VydmljZTogTG9nZ2VkSW5TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgc3ViRG9tYWluU2VydmljZTogU3ViRG9tYWluU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgICB0aGlzLl91c2VyU2VydmljZS5sb2dvdXQoKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZWRJblNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uaXNfc3ViX2RvbWFpbl91cmwpe1xyXG5cdFx0XHRcdFx0ICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gQ29uZmlnLkFQUF9ET01BSU47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
