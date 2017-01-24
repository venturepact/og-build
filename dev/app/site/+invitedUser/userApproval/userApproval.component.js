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
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var index_1 = require('./../../../shared/services/index');
var UserApprovalComponent = (function () {
    function UserApprovalComponent(_router, _userService, _loggedInSerivce, _cookieService) {
        this._router = _router;
        this._userService = _userService;
        this._loggedInSerivce = _loggedInSerivce;
        this._cookieService = _cookieService;
    }
    UserApprovalComponent.prototype.ngOnInit = function () {
        this.adminApproval();
        this.userApproval();
    };
    UserApprovalComponent.prototype.userApproval = function () {
        var _this = this;
        var approval = this._userService.userApproval()
            .subscribe(function (response) {
            _this._loggedInSerivce.login();
            _this._userService.updatebillingStatus()
                .subscribe(function (status) {
                _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(status), 3);
                var link = window.location.pathname;
                var dashboard = link.split('/')[0] + '/dashboard';
                jQuery(location).attr('href', dashboard);
            });
        }, function (error) {
            jQuery('#approval-error').removeClass('hide');
            _this.errorMsg = error.error.err_message;
            approval.unsubscribe();
        });
    };
    UserApprovalComponent.prototype.adminApproval = function () {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        if (storage.company.is_admin_created) {
            this._loggedInSerivce.login();
            var link = window.location.pathname;
            var dashboard = link.split('/')[0] + '/dashboard';
            jQuery(location).attr('href', dashboard);
        }
    };
    UserApprovalComponent.prototype.home = function () {
        this._router.navigate(['/']);
    };
    UserApprovalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-approval',
            templateUrl: 'userApproval.component.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.UserService, index_1.LoggedInService, index_1.CookieService])
    ], UserApprovalComponent);
    return UserApprovalComponent;
}());
exports.UserApprovalComponent = UserApprovalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytpbnZpdGVkVXNlci91c2VyQXBwcm92YWwvdXNlckFwcHJvdmFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0JBQXlDLGdCQUFnQixDQUFDLENBQUE7QUFDMUQscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHNCQUEyRCxrQ0FBa0MsQ0FBQyxDQUFBO0FBVTlGO0lBRUUsK0JBQW9CLE9BQWUsRUFBUyxZQUF5QixFQUFVLGdCQUFrQyxFQUFVLGNBQThCO1FBQXJJLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDO0lBRTdKLHdDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw0Q0FBWSxHQUFaO1FBQUEsaUJBb0JFO1FBbkJDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO2FBQzNDLFNBQVMsQ0FDUixVQUFDLFFBQWE7WUFDVixLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRTtpQkFDbkMsU0FBUyxDQUFDLFVBQUMsTUFBVTtnQkFDcEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFFbkYsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQ3BDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsWUFBWSxDQUFDO2dCQUNoRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUUsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsRUFDRCxVQUFDLEtBQVU7WUFDVixNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUN4QyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUNOLENBQUM7SUFDSCxDQUFDO0lBRUQsNkNBQWEsR0FBYjtRQUNDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNsRSxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQztZQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUIsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDcEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxZQUFZLENBQUM7WUFDaEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFFLENBQUM7UUFDOUMsQ0FBQztJQUNKLENBQUM7SUFFRCxvQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFsREo7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsVUFBVSxFQUFFLENBQUMsZ0NBQXdCLENBQUM7U0FDdkMsQ0FBQzs7NkJBQUE7SUErQ0YsNEJBQUM7QUFBRCxDQTlDQSxBQThDQyxJQUFBO0FBOUNZLDZCQUFxQix3QkE4Q2pDLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2ludml0ZWRVc2VyL3VzZXJBcHByb3ZhbC91c2VyQXBwcm92YWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSxMb2dnZWRJblNlcnZpY2UsQ29va2llU2VydmljZSB9ICBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnkgOmFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICd1c2VyLWFwcHJvdmFsJyxcclxuICB0ZW1wbGF0ZVVybDogJ3VzZXJBcHByb3ZhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJBcHByb3ZhbENvbXBvbmVudCAgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGVycm9yTXNnIDogc3RyaW5nIDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXIgOlJvdXRlcixwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgX2xvZ2dlZEluU2VyaXZjZSA6IExvZ2dlZEluU2VydmljZSwgcHJpdmF0ZSBfY29va2llU2VydmljZSA6IENvb2tpZVNlcnZpY2UgKXt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgXHJcbiAgICB0aGlzLmFkbWluQXBwcm92YWwoKTtcclxuICAgIHRoaXMudXNlckFwcHJvdmFsKCk7XHJcbiAgfVxyXG5cclxuICB1c2VyQXBwcm92YWwoKSB7XHJcbiAgICAgbGV0IGFwcHJvdmFsID0gdGhpcy5fdXNlclNlcnZpY2UudXNlckFwcHJvdmFsKClcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLl9sb2dnZWRJblNlcml2Y2UubG9naW4oKTtcclxuICAgICAgICAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UudXBkYXRlYmlsbGluZ1N0YXR1cygpXHJcbiAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN0YXR1czphbnkpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nLEpTT04uc3RyaW5naWZ5KHN0YXR1cyksMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ2ZpbGVwaWNrZXJfdG9rZW5fanNvbicpLCBcInRoaXMgaXMgZmlsZSBwaWNrZXIgdG9rZW4gc2V0IGF0IHZlcmlmeSB1c2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5rID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXNoYm9hcmQgPSBsaW5rLnNwbGl0KCcvJylbMF0rJy9kYXNoYm9hcmQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicsIGRhc2hib2FyZCApO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyb3IgOmFueSApID0+ICB7XHJcbiAgICAgICAgICAgalF1ZXJ5KCcjYXBwcm92YWwtZXJyb3InKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgIHRoaXMuZXJyb3JNc2cgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuICAgICAgICAgICBhcHByb3ZhbC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgKTtcclxuICAgfVxyXG5cclxuICAgYWRtaW5BcHByb3ZhbCgpe1xyXG4gICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuICAgICAgaWYoc3RvcmFnZS5jb21wYW55LmlzX2FkbWluX2NyZWF0ZWQpe1xyXG4gICAgICAgICAgdGhpcy5fbG9nZ2VkSW5TZXJpdmNlLmxvZ2luKCk7XHJcbiAgICAgICAgICBsZXQgbGluayA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgICAgICAgIGxldCBkYXNoYm9hcmQgPSBsaW5rLnNwbGl0KCcvJylbMF0rJy9kYXNoYm9hcmQnO1xyXG4gICAgICAgICAgalF1ZXJ5KGxvY2F0aW9uKS5hdHRyKCdocmVmJywgZGFzaGJvYXJkICk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgaG9tZSgpIHtcclxuICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gICB9XHJcblxyXG59XHJcbiJdfQ==
