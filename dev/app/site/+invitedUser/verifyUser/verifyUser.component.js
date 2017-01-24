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
var index_2 = require('./../../../shared/services/index');
var VerifyUserComponent = (function () {
    function VerifyUserComponent(fb, _userService, _router, loggedInService, _companyService, _cookieService) {
        this.fb = fb;
        this._userService = _userService;
        this._router = _router;
        this.loggedInService = loggedInService;
        this._companyService = _companyService;
        this._cookieService = _cookieService;
        this.authToken = 'access_token';
    }
    VerifyUserComponent.prototype.ngOnInit = function () {
        var link = window.location.hostname;
        this.company = link.split('.')[0];
        this.isTokenVerified();
    };
    VerifyUserComponent.prototype.isTokenVerified = function () {
        var _this = this;
        var url = window.location.pathname;
        this.tokenHash = url.split('/')[2];
        var verification = this._userService.verfiyToken(this.tokenHash)
            .subscribe(function (response) {
            var storage = {
                'verification_id': response._id,
            };
            localStorage.setItem('verification', JSON.stringify(storage));
            if (response.action === 'set-password') {
                var link = window.location.pathname;
                var setNewPassword = link.split('/')[0] + '/setNewPassword';
                jQuery(location).attr('href', setNewPassword);
            }
            if (response.action === 'forget-password') {
                _this._router.navigate(['/setNewPassword/forgetPassword']);
            }
            if (response.action === 'existingUser-activate') {
                _this.generateToken(response.user._id);
            }
            if (response.action.split('_')[0] === 'admin-accept-user-request') {
                var action = response.action;
                _this.generateToken(response.user._id, action);
            }
        }, function (error) {
            jQuery('#token-error').removeClass('hide');
            _this.errorMsg = error.error.err_message;
            verification.unsubscribe();
        });
    };
    VerifyUserComponent.prototype.home = function () {
        this._router.navigate(['/']);
    };
    VerifyUserComponent.prototype.generateToken = function (data, action) {
        var _this = this;
        if (action === void 0) { action = null; }
        var approval = this._userService.generateToken(data)
            .subscribe(function (response) {
            if (response.token) {
                response.companyList.push(_this.company);
                var storage = {
                    'token': response.token,
                    'user': response.user,
                    'company_id': _this.company,
                    'company': response.company,
                    'companyList': response.companyList
                };
                _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                _this.loggedInService.login();
                if (action !== null) {
                    var user_id = action.split('_')[1];
                    var company_id = action.split('_')[2];
                    _this._companyService.approveUser(user_id, company_id, 'ADMIN')
                        .subscribe(function (res) {
                        var link = window.location.pathname;
                        var dashboard = link.split('/')[0] + '/dashboard';
                        jQuery(location).attr('href', dashboard);
                    }, function (error) {
                        jQuery('#token-error').removeClass('hide');
                        _this.errorMsg = error.error.err_message;
                    });
                }
                else {
                    _this.inviteUserApproval();
                }
            }
        }, function (error) {
            jQuery('#approval-error').removeClass('hide');
            _this.errorMsg = error.error.err_message;
            approval.unsubscribe();
        });
    };
    VerifyUserComponent.prototype.inviteUserApproval = function () {
        var _this = this;
        var approval = this._userService.userApproval()
            .subscribe(function (response) {
            _this.loggedInService.login();
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
    VerifyUserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'verify-user',
            templateUrl: 'verifyUser.component.html',
            styleUrls: ['verifyUser.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.UserService, router_1.Router, index_1.LoggedInService, index_2.CompanyService, index_1.CookieService])
    ], VerifyUserComponent);
    return VerifyUserComponent;
}());
exports.VerifyUserComponent = VerifyUserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytpbnZpdGVkVXNlci92ZXJpZnlVc2VyL3ZlcmlmeVVzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQkFBaUUsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRixxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsc0JBQTZELGtDQUFrQyxDQUFDLENBQUE7QUFDaEcsc0JBQThCLGtDQUFrQyxDQUFDLENBQUE7QUFTakU7SUFNRSw2QkFBb0IsRUFBZSxFQUFTLFlBQXlCLEVBQzNELE9BQWdCLEVBQVMsZUFBZ0MsRUFDekQsZUFBZ0MsRUFDaEMsY0FBOEI7UUFIcEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQzNELFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDekQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQU54QyxjQUFTLEdBQVcsY0FBYyxDQUFDO0lBT2hDLENBQUM7SUFFSixzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUEsNkNBQWUsR0FBZjtRQUFBLGlCQWlDQztRQWhDQyxJQUFJLEdBQUcsR0FBVSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxZQUFZLEdB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QyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsVUFBVSxFQUFFLENBQUMsZ0NBQXdCLENBQUM7U0FDdkMsQ0FBQzs7MkJBQUE7SUEySEYsMEJBQUM7QUFBRCxDQTFIQSxBQTBIQyxJQUFBO0FBMUhZLDJCQUFtQixzQkEwSC9CLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2ludml0ZWRVc2VyL3ZlcmlmeVVzZXIvdmVyaWZ5VXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlLCBMb2dnZWRJblNlcnZpY2UsIENvb2tpZVNlcnZpY2UgfSAgZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wYW55U2VydmljZX0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAndmVyaWZ5LXVzZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAndmVyaWZ5VXNlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3ZlcmlmeVVzZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWZXJpZnlVc2VyQ29tcG9uZW50ICBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgc2V0UGFzc3dvcmRGb3JtIDogRm9ybUdyb3VwO1xyXG4gIHRva2VuSGFzaCA6IHN0cmluZyA7XHJcbiAgYXV0aFRva2VuIDogc3RyaW5nID0nYWNjZXNzX3Rva2VuJztcclxuICBlcnJvck1zZyA6IHN0cmluZyA7XHJcbiAgY29tcGFueTphbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIscHJpdmF0ZSBfdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfcm91dGVyIDogUm91dGVyLHByaXZhdGUgbG9nZ2VkSW5TZXJ2aWNlOiBMb2dnZWRJblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9jb21wYW55U2VydmljZSA6IENvbXBhbnlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfY29va2llU2VydmljZSA6IENvb2tpZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdmFyIGxpbmsgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcbiAgICB0aGlzLmNvbXBhbnkgPSBsaW5rLnNwbGl0KCcuJylbMF07XHJcbiAgICB0aGlzLmlzVG9rZW5WZXJpZmllZCgpO1xyXG4gIH1cclxuXHJcbiAgIGlzVG9rZW5WZXJpZmllZCgpIHtcclxuICAgICB2YXIgdXJsICAgICAgICA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgICB0aGlzLnRva2VuSGFzaCA9IHVybC5zcGxpdCgnLycpWzJdO1xyXG4gICAgIGxldCB2ZXJpZmljYXRpb24gPSB0aGlzLl91c2VyU2VydmljZS52ZXJmaXlUb2tlbih0aGlzLnRva2VuSGFzaClcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IHN0b3JhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICAndmVyaWZpY2F0aW9uX2lkJyAgICAgICA6IHJlc3BvbnNlLl9pZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ZlcmlmaWNhdGlvbicsSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5hY3Rpb249PT0nc2V0LXBhc3N3b3JkJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmsgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2V0TmV3UGFzc3dvcmQgPSBsaW5rLnNwbGl0KCcvJylbMF0rJy9zZXROZXdQYXNzd29yZCc7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkobG9jYXRpb24pLmF0dHIoJ2hyZWYnLCBzZXROZXdQYXNzd29yZCApO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvc2V0TmV3UGFzc3dvcmQnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuYWN0aW9uID09PSdmb3JnZXQtcGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9zZXROZXdQYXNzd29yZC9mb3JnZXRQYXNzd29yZCddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5hY3Rpb24gPT09J2V4aXN0aW5nVXNlci1hY3RpdmF0ZScpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVRva2VuKHJlc3BvbnNlLnVzZXIuX2lkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5hY3Rpb24uc3BsaXQoJ18nKVswXSA9PT0nYWRtaW4tYWNjZXB0LXVzZXItcmVxdWVzdCcpIHtcclxuICAgICAgICAgICAgICBsZXQgYWN0aW9uPSByZXNwb25zZS5hY3Rpb247XHJcbiAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVRva2VuKHJlc3BvbnNlLnVzZXIuX2lkLGFjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyb3IgOmFueSApID0+ICB7XHJcbiAgICAgICAgICAgalF1ZXJ5KCcjdG9rZW4tZXJyb3InKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgIHRoaXMuZXJyb3JNc2cgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuICAgICAgICAgICB2ZXJpZmljYXRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICk7XHJcbiAgIH1cclxuXHJcbiAgIGhvbWUoKSB7XHJcbiAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgfVxyXG5cclxuICAgZ2VuZXJhdGVUb2tlbihkYXRhOmFueSwgYWN0aW9uOnN0cmluZyA9IG51bGwpIHtcclxuICAgICAgbGV0IGFwcHJvdmFsID0gdGhpcy5fdXNlclNlcnZpY2UuZ2VuZXJhdGVUb2tlbihkYXRhKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5jb21wYW55TGlzdC5wdXNoKHRoaXMuY29tcGFueSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmNvbXBhbnlMaXN0KTtcclxuICAgICAgICAgICAgICAgIGxldCBzdG9yYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICd0b2tlbicgIDogcmVzcG9uc2UudG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3VzZXInICAgOiByZXNwb25zZS51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICdjb21wYW55X2lkJzogdGhpcy5jb21wYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICdjb21wYW55JzpyZXNwb25zZS5jb21wYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICdjb21wYW55TGlzdCc6IHJlc3BvbnNlLmNvbXBhbnlMaXN0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ3N0b3JhZ2UnLEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpLDMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRJblNlcnZpY2UubG9naW4oKTtcclxuICAgICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmFnZScsSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYoYWN0aW9uIT09bnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgdXNlcl9pZCA9IGFjdGlvbi5zcGxpdCgnXycpWzFdO1xyXG4gICAgICAgICAgICAgICAgICBsZXQgY29tcGFueV9pZCA9IGFjdGlvbi5zcGxpdCgnXycpWzJdO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLl9jb21wYW55U2VydmljZS5hcHByb3ZlVXNlcih1c2VyX2lkLGNvbXBhbnlfaWQsJ0FETUlOJylcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXMpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGluayA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhc2hib2FyZCA9IGxpbmsuc3BsaXQoJy8nKVswXSsnL2Rhc2hib2FyZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicsIGRhc2hib2FyZCApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sKGVycm9yKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI3Rva2VuLWVycm9yJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNc2cgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5pbnZpdGVVc2VyQXBwcm92YWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKGVycm9yIDphbnkgKSA9PiAge1xyXG4gICAgICAgICAgIGpRdWVyeSgnI2FwcHJvdmFsLWVycm9yJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICB0aGlzLmVycm9yTXNnID0gZXJyb3IuZXJyb3IuZXJyX21lc3NhZ2U7XHJcbiAgICAgICAgICAgYXBwcm92YWwudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICk7XHJcbiAgIH1cclxuXHJcbiAgIGludml0ZVVzZXJBcHByb3ZhbCgpIHtcclxuXHJcbiAgICAgICBsZXQgYXBwcm92YWwgPSB0aGlzLl91c2VyU2VydmljZS51c2VyQXBwcm92YWwoKVxyXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZEluU2VydmljZS5sb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UudXBkYXRlYmlsbGluZ1N0YXR1cygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN0YXR1czphbnkpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nLEpTT04uc3RyaW5naWZ5KHN0YXR1cyksMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ2ZpbGVwaWNrZXJfdG9rZW5fanNvbicpLCBcInRoaXMgaXMgZmlsZSBwaWNrZXIgdG9rZW4gc2V0IGF0IHZlcmlmeSB1c2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5rID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXNoYm9hcmQgPSBsaW5rLnNwbGl0KCcvJylbMF0rJy9kYXNoYm9hcmQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicsIGRhc2hib2FyZCApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yIDphbnkgKSA9PiAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYXBwcm92YWwtZXJyb3InKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1zZyA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXBwcm92YWwudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgfVxyXG59XHJcbiJdfQ==
