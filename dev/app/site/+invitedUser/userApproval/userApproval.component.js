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
        var _this = this;
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        if (storage.company.is_admin_created) {
            var approval_1 = this._userService.userApproval()
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
                approval_1.unsubscribe();
            });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytpbnZpdGVkVXNlci91c2VyQXBwcm92YWwvdXNlckFwcHJvdmFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0JBQXlDLGdCQUFnQixDQUFDLENBQUE7QUFDMUQscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHNCQUEyRCxrQ0FBa0MsQ0FBQyxDQUFBO0FBVTlGO0lBRUUsK0JBQW9CLE9BQWUsRUFBUyxZQUF5QixFQUFVLGdCQUFrQyxFQUFVLGNBQThCO1FBQXJJLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDO0lBRTdKLHdDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw0Q0FBWSxHQUFaO1FBQUEsaUJBb0JFO1FBbkJDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO2FBQzNDLFNBQVMsQ0FDUixVQUFDLFFBQWE7WUFDVixLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRTtpQkFDbkMsU0FBUyxDQUFDLFVBQUMsTUFBVTtnQkFDcEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFFbkYsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQ3BDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsWUFBWSxDQUFDO2dCQUNoRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUUsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsRUFDRCxVQUFDLEtBQVU7WUFDVixNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUN4QyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUNOLENBQUM7SUFDSCxDQUFDO0lBRUYsNkNBQWEsR0FBYjtRQUFBLGlCQXVCSztRQXRCRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBLENBQUM7WUFDakMsSUFBSSxVQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7aUJBQzlDLFNBQVMsQ0FDUixVQUFDLFFBQWE7Z0JBQ1YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM5QixLQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFO3FCQUNsQyxTQUFTLENBQUMsVUFBQyxNQUFVO29CQUNwQixLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVuRixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztvQkFDcEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxZQUFZLENBQUM7b0JBQ2hELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBRSxDQUFDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsRUFDRCxVQUFDLEtBQVU7Z0JBQ1gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2dCQUN4QyxVQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUNGLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVKLG9DQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWpFSjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztTQUN2QyxDQUFDOzs2QkFBQTtJQThERiw0QkFBQztBQUFELENBN0RBLEFBNkRDLElBQUE7QUE3RFksNkJBQXFCLHdCQTZEakMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8raW52aXRlZFVzZXIvdXNlckFwcHJvdmFsL3VzZXJBcHByb3ZhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlLExvZ2dlZEluU2VydmljZSxDb29raWVTZXJ2aWNlIH0gIGZyb20gJy4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeSA6YW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3VzZXItYXBwcm92YWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAndXNlckFwcHJvdmFsLmNvbXBvbmVudC5odG1sJyxcclxuICBkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckFwcHJvdmFsQ29tcG9uZW50ICBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZXJyb3JNc2cgOiBzdHJpbmcgO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlciA6Um91dGVyLHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBfbG9nZ2VkSW5TZXJpdmNlIDogTG9nZ2VkSW5TZXJ2aWNlLCBwcml2YXRlIF9jb29raWVTZXJ2aWNlIDogQ29va2llU2VydmljZSApe31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuICAgIHRoaXMuYWRtaW5BcHByb3ZhbCgpO1xyXG4gICAgdGhpcy51c2VyQXBwcm92YWwoKTtcclxuICB9XHJcblxyXG4gIHVzZXJBcHByb3ZhbCgpIHtcclxuICAgICBsZXQgYXBwcm92YWwgPSB0aGlzLl91c2VyU2VydmljZS51c2VyQXBwcm92YWwoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuX2xvZ2dlZEluU2VyaXZjZS5sb2dpbigpO1xyXG4gICAgICAgICAgICAgICB0aGlzLl91c2VyU2VydmljZS51cGRhdGViaWxsaW5nU3RhdHVzKClcclxuICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoc3RhdHVzOmFueSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ2ZpbGVwaWNrZXJfdG9rZW5fanNvbicsSlNPTi5zdHJpbmdpZnkoc3RhdHVzKSwzKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnZmlsZXBpY2tlcl90b2tlbl9qc29uJyksIFwidGhpcyBpcyBmaWxlIHBpY2tlciB0b2tlbiBzZXQgYXQgdmVyaWZ5IHVzZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmsgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhc2hib2FyZCA9IGxpbmsuc3BsaXQoJy8nKVswXSsnL2Rhc2hib2FyZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KGxvY2F0aW9uKS5hdHRyKCdocmVmJywgZGFzaGJvYXJkICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnJvciA6YW55ICkgPT4gIHtcclxuICAgICAgICAgICBqUXVlcnkoJyNhcHByb3ZhbC1lcnJvcicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgdGhpcy5lcnJvck1zZyA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG4gICAgICAgICAgIGFwcHJvdmFsLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICApO1xyXG4gICB9XHJcblxyXG4gIGFkbWluQXBwcm92YWwoKXtcclxuICAgICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuICAgICAgaWYoc3RvcmFnZS5jb21wYW55LmlzX2FkbWluX2NyZWF0ZWQpe1xyXG4gICAgICAgICAgbGV0IGFwcHJvdmFsID0gdGhpcy5fdXNlclNlcnZpY2UudXNlckFwcHJvdmFsKClcclxuICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZWRJblNlcml2Y2UubG9naW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLnVwZGF0ZWJpbGxpbmdTdGF0dXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN0YXR1czphbnkpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ2ZpbGVwaWNrZXJfdG9rZW5fanNvbicsSlNPTi5zdHJpbmdpZnkoc3RhdHVzKSwzKTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nKSwgXCJ0aGlzIGlzIGZpbGUgcGlja2VyIHRva2VuIHNldCBhdCB2ZXJpZnkgdXNlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5rID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGRhc2hib2FyZCA9IGxpbmsuc3BsaXQoJy8nKVswXSsnL2Rhc2hib2FyZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkobG9jYXRpb24pLmF0dHIoJ2hyZWYnLCBkYXNoYm9hcmQgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yIDphbnkgKSA9PiAge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNhcHByb3ZhbC1lcnJvcicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNc2cgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuICAgICAgICAgICAgYXBwcm92YWwudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgIGhvbWUoKSB7XHJcbiAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgfVxyXG5cclxufVxyXG4iXX0=
