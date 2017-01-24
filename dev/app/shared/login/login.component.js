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
var index_1 = require('./../services/index');
var email_validator_1 = require('./../validators/email.validator');
var env_config_1 = require('./../../config/env.config');
var user_1 = require('./user');
var paymentModal_component_1 = require('./../paymentModal/paymentModal.component');
var index_2 = require('./../services/index');
var LoginComponent = (function () {
    function LoginComponent(fb, _userService, router, loggedInSerivce, subDomainService, _companyService, _cookieService, _membershipService) {
        this.fb = fb;
        this._userService = _userService;
        this.router = router;
        this.loggedInSerivce = loggedInSerivce;
        this.subDomainService = subDomainService;
        this._companyService = _companyService;
        this._cookieService = _cookieService;
        this._membershipService = _membershipService;
        this.error = false;
        this.ErrorMessageIsVisible = false;
        this.isDomainExist = false;
        this.resendEmailShow = false;
        this.model = new user_1.User(new user_1.Email('', true), '');
        this.isAdminCreated = false;
        this.cardStatus = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var link = window.location.hostname.split('.');
        if (link[0] === 'app') {
            this.isDomainExist = true;
        }
        var userEmail = localStorage.getItem('leads');
        if (userEmail) {
            this.model.emails.email = userEmail;
        }
        this.loginForm = this.fb.group({
            email: [this.model.emails.email, forms_1.Validators.compose([
                    forms_1.Validators.required, email_validator_1.EmailValidator.format
                ])],
            password: ['', forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(8)
                ])]
        });
        jQuery.material.init();
    };
    LoginComponent.prototype.showErrorMessage = function () {
        this.ErrorMessageIsVisible = true;
    };
    LoginComponent.prototype.hideErrorMessage = function () {
        this.ErrorMessageIsVisible = false;
    };
    LoginComponent.prototype.onSubmit = function (value) {
        var _this = this;
        value = this.loginForm.value;
        var self = this;
        jQuery('#loginSubmit').addClass('loading');
        jQuery('#loginSubmit').html('Please wait');
        jQuery('#loginSubmit').attr('disabled', true);
        var link = window.location.hostname;
        var linkArray = link.split('.');
        this.co = window.location.href.split('//')[1].split('.')[0];
        var companyName = null;
        if (linkArray.length === 3 && linkArray[0] !== 'app')
            companyName = linkArray[0];
        this._userService.login(value.email, value.password, companyName)
            .subscribe(function (response) {
            console.log('filepicker_token_set', response.companyAccess);
            if (response.token) {
                self.isAdminCreated = response.user.is_admin_created;
                if (response.user.role !== 'ADMIN')
                    self.cardStatus = response.subscription.currentplan.customer.card_status;
                localStorage.removeItem('leads');
                var storage = void 0;
                if (response.user.role === 'ADMIN') {
                    storage = {
                        'token': response.token,
                        'user': response.user
                    };
                }
                else {
                    storage = {
                        'token': response.token,
                        'user': response.user,
                        'company': response.company,
                        'companyList': response.companyList,
                        'showUpgradeModal': false,
                    };
                    storage.company['cost'] = response.plan.price;
                    _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(response.companyAccess), 3);
                    if (response.user.chargebee_plan_id === 'starter')
                        storage.showUpgradeModal = true;
                }
                jQuery('#login').modal('hide');
                _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                if (response.user.role !== 'ADMIN') {
                    var status_1 = {
                        cardStatus: self.cardStatus,
                        subsStatus: response.subscription.currentplan.subscription.status
                    };
                    _this._cookieService.createCookie('status', JSON.stringify(status_1), 3);
                }
                if (_this.subDomainService.subDomain.is_sub_domain_url) {
                    _this._companyService.isSubDomainExist(_this.co)
                        .subscribe(function (success) {
                        localStorage.setItem('company', success._id);
                    }, function (error) {
                    });
                }
                if (response.user.role !== 'ADMIN') {
                    _this.loggedInSerivce.login();
                    _this._userService.token = response.token;
                    var url = response.company.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/dashboard';
                    if (!_this.subDomainService.subDomain.is_sub_domain_url) {
                        jQuery(location).attr('href', env_config_1.Config.PROTOCOL + url);
                    }
                    else {
                        window.location.href = window.location.origin + '/dashboard';
                    }
                    ga('markettingteam.send', 'event', 'Login', 'Submit', 'LoginPage');
                    _kmq.push(['identify', value.email]);
                    _kmq.push(['record', 'Logged In']);
                }
                else {
                    window.location.href = window.location.origin + '/admin';
                }
            }
        }, function (response) {
            jQuery('#loginSubmit').removeClass('loading');
            jQuery('#loginSubmit').html('Login');
            jQuery('#loginSubmit').attr('disabled', false);
            _this.error = true;
            _this.ErrorMessage = response.error.message;
            if (response.error.code === "E_USER_ACCOUNT_DISABLED") {
                _this.ErrorMessage = response.error.err_message;
                _this.userId = response.error.err_errors;
                _this.resendEmailShow = true;
            }
            _this.showErrorMessage();
        });
    };
    LoginComponent.prototype.signUp = function () {
        jQuery('#leads').addClass('hide');
        jQuery('#signUp').removeClass('hide');
        this.router.navigate(['/signup']);
    };
    LoginComponent.prototype.closeLogin = function () {
        if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
            var link = env_config_1.Config.PARENT_APP_DOMAIN;
            var protocol = env_config_1.Config.PROTOCOL;
            jQuery(location).attr('href', protocol + link);
        }
        else {
            window.history.back();
        }
    };
    LoginComponent.prototype.resendEmail = function () {
        console.log('user id', this.userId);
        this._userService.resendEmail(this.userId)
            .subscribe(function (success) {
            window.toastNotification('Email has been sent, Please check your email.');
        }, function (error) {
        });
    };
    LoginComponent.prototype.forgetPassword = function () {
        this.router.navigate(['/forgetPassword']);
    };
    LoginComponent.prototype.callGA = function () {
        _kmq.push(['record', 'Log In Click']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, paymentModal_component_1.PaymentModalComponent]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.UserService, router_1.Router, index_1.LoggedInService, index_1.SubDomainService, index_1.CompanyService, index_1.CookieService, index_2.MembershipService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQkFBNkUsZ0JBQWdCLENBQUMsQ0FBQTtBQUM5RixxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFDakQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsc0JBQThGLHFCQUFxQixDQUFDLENBQUE7QUFDcEgsZ0NBQStCLGlDQUFpQyxDQUFDLENBQUE7QUFDakUsMkJBQXVCLDJCQUEyQixDQUFDLENBQUE7QUFDbkQscUJBQTRCLFFBQVEsQ0FBQyxDQUFBO0FBQ3JDLHVDQUFzQywwQ0FBMEMsQ0FBQyxDQUFBO0FBQ2pGLHNCQUFnQyxxQkFBcUIsQ0FBQyxDQUFBO0FBZXREO0lBY0Usd0JBQ1UsRUFBZSxFQUNmLFlBQXlCLEVBQzFCLE1BQWMsRUFDYixlQUFnQyxFQUNoQyxnQkFBbUMsRUFDbkMsZUFBZ0MsRUFDaEMsY0FBOEIsRUFDOUIsa0JBQW9DO1FBUHBDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUFDbkMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWtCO1FBcEI5QyxVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFZLEtBQUssQ0FBQztRQUl2QyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxVQUFLLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxZQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTFDLG1CQUFjLEdB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QUEvTFksc0JBQWMsaUJBK0wxQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlLCBMb2dnZWRJblNlcnZpY2UsIFN1YkRvbWFpblNlcnZpY2UsIENvbXBhbnlTZXJ2aWNlLCBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdG9yIH0gZnJvbSAnLi8uLi92YWxpZGF0b3JzL2VtYWlsLnZhbGlkYXRvcic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5pbXBvcnQgeyBVc2VyLCBFbWFpbH0gZnJvbSAgJy4vdXNlcic7XHJcbmltcG9ydCB7IFBheW1lbnRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vLi4vcGF5bWVudE1vZGFsL3BheW1lbnRNb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge01lbWJlcnNoaXBTZXJ2aWNlfSBmcm9tICcuLy4uL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ29nLWxvZ2luJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnbG9naW4uY29tcG9uZW50LmNzcyddLFxyXG5cdGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsUGF5bWVudE1vZGFsQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBsb2dpbkZvcm06IEZvcm1Hcm91cDtcclxuICBlcnJvcjogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEVycm9yTWVzc2FnZUlzVmlzaWJsZTogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvOiBhbnk7XHJcbiAgRXJyb3JNZXNzYWdlOiBTdHJpbmc7XHJcbiAgdXNlcklkOiBhbnk7XHJcbiAgaXNEb21haW5FeGlzdDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIHJlc2VuZEVtYWlsU2hvdzogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIG1vZGVsID0gbmV3IFVzZXIobmV3IEVtYWlsKCcnLCB0cnVlKSwgJycpO1xyXG5cclxuICBpc0FkbWluQ3JlYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNhcmRTdGF0dXM6c3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGxvZ2dlZEluU2VyaXZjZTogTG9nZ2VkSW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdWJEb21haW5TZXJ2aWNlIDogU3ViRG9tYWluU2VydmljZSxcclxuICAgIHByaXZhdGUgX2NvbXBhbnlTZXJ2aWNlIDogQ29tcGFueVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9jb29raWVTZXJ2aWNlIDogQ29va2llU2VydmljZSxcclxuICAgIHByaXZhdGUgX21lbWJlcnNoaXBTZXJ2aWNlOk1lbWJlcnNoaXBTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgbGluayA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpO1xyXG4gICAgaWYgKGxpbmtbMF0gPT09ICdhcHAnKSB7XHJcbiAgICAgIHRoaXMuaXNEb21haW5FeGlzdCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBsZXQgdXNlckVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xlYWRzJyk7XHJcbiAgICBpZiAodXNlckVtYWlsKSB7XHJcbiAgICAgIHRoaXMubW9kZWwuZW1haWxzLmVtYWlsID0gdXNlckVtYWlsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFt0aGlzLm1vZGVsLmVtYWlscy5lbWFpbCwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBFbWFpbFZhbGlkYXRvci5mb3JtYXRcclxuICAgICAgXSldLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoOClcclxuICAgICAgXSldXHJcbiAgICB9KTtcclxuICAgIGpRdWVyeS5tYXRlcmlhbC5pbml0KCk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHNob3dFcnJvck1lc3NhZ2UoKSB7XHJcbiAgICB0aGlzLkVycm9yTWVzc2FnZUlzVmlzaWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBoaWRlRXJyb3JNZXNzYWdlKCkge1xyXG4gICAgdGhpcy5FcnJvck1lc3NhZ2VJc1Zpc2libGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KHZhbHVlOiBhbnkpIHtcclxuXHJcblx0XHR2YWx1ZSA9IHRoaXMubG9naW5Gb3JtLnZhbHVlO1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgalF1ZXJ5KCcjbG9naW5TdWJtaXQnKS5hZGRDbGFzcygnbG9hZGluZycpO1xyXG4gICAgalF1ZXJ5KCcjbG9naW5TdWJtaXQnKS5odG1sKCdQbGVhc2Ugd2FpdCcpO1xyXG4gICAgalF1ZXJ5KCcjbG9naW5TdWJtaXQnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgbGV0IGxpbmsgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcbiAgICBsZXQgbGlua0FycmF5ID0gbGluay5zcGxpdCgnLicpO1xyXG4gICAgLy90aGlzLmNvID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJy5vdXRncm93JylbMF0uc3BsaXQoJy8vJylbMV07XHJcbiAgICB0aGlzLmNvID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJy8vJylbMV0uc3BsaXQoJy4nKVswXTtcclxuICAgIGxldCBjb21wYW55TmFtZTogU3RyaW5nID0gbnVsbDtcclxuICAgIGlmIChsaW5rQXJyYXkubGVuZ3RoID09PSAzICYmIGxpbmtBcnJheVswXSAhPT0gJ2FwcCcpXHJcbiAgICAgIGNvbXBhbnlOYW1lID0gbGlua0FycmF5WzBdO1xyXG4gICAgdGhpcy5fdXNlclNlcnZpY2UubG9naW4odmFsdWUuZW1haWwsIHZhbHVlLnBhc3N3b3JkLCBjb21wYW55TmFtZSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmaWxlcGlja2VyX3Rva2VuX3NldCcsIHJlc3BvbnNlLmNvbXBhbnlBY2Nlc3MpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS50b2tlbikge1xyXG4gICAgICAgICAgc2VsZi5pc0FkbWluQ3JlYXRlZCA9IHJlc3BvbnNlLnVzZXIuaXNfYWRtaW5fY3JlYXRlZDtcclxuICAgICAgICAgIGlmKHJlc3BvbnNlLnVzZXIucm9sZSAhPT0gJ0FETUlOJylcclxuICAgICAgICAgIHNlbGYuY2FyZFN0YXR1cyA9IHJlc3BvbnNlLnN1YnNjcmlwdGlvbi5jdXJyZW50cGxhbi5jdXN0b21lci5jYXJkX3N0YXR1cztcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsZWFkcycpO1xyXG4gICAgICAgICAgbGV0IHN0b3JhZ2U6IGFueTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS51c2VyLnJvbGUgPT09ICdBRE1JTicpIHtcclxuICAgICAgICAgICAgc3RvcmFnZSA9IHtcclxuICAgICAgICAgICAgICAndG9rZW4nOiByZXNwb25zZS50b2tlbixcclxuICAgICAgICAgICAgICAndXNlcic6IHJlc3BvbnNlLnVzZXJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0b3JhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgJ3Rva2VuJzogcmVzcG9uc2UudG9rZW4sXHJcbiAgICAgICAgICAgICAgJ3VzZXInOiByZXNwb25zZS51c2VyLFxyXG4gICAgICAgICAgICAgICdjb21wYW55JzogcmVzcG9uc2UuY29tcGFueSxcclxuICAgICAgICAgICAgICAnY29tcGFueUxpc3QnOiByZXNwb25zZS5jb21wYW55TGlzdCxcclxuICAgICAgICAgICAgICAnc2hvd1VwZ3JhZGVNb2RhbCc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdG9yYWdlLmNvbXBhbnlbJ2Nvc3QnXSA9IHJlc3BvbnNlLnBsYW4ucHJpY2U7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTVE9SQUdFIEpTT04nLCBzdG9yYWdlLmNvbXBhbnkuY29zdCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5jb21wYW55QWNjZXNzKSwgMyk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS51c2VyLmNoYXJnZWJlZV9wbGFuX2lkID09PSAnc3RhcnRlcicpXHJcbiAgICAgICAgICAgICAgc3RvcmFnZS5zaG93VXBncmFkZU1vZGFsID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGpRdWVyeSgnI2xvZ2luJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgIHRoaXMuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdzdG9yYWdlJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSksIDMpO1xyXG4gICAgICAgICAgaWYocmVzcG9uc2UudXNlci5yb2xlICE9PSAnQURNSU4nKXtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHtcclxuICAgICAgICAgICAgICBjYXJkU3RhdHVzOiBzZWxmLmNhcmRTdGF0dXMsXHJcbiAgICAgICAgICAgICAgc3Vic1N0YXR1czogcmVzcG9uc2Uuc3Vic2NyaXB0aW9uLmN1cnJlbnRwbGFuLnN1YnNjcmlwdGlvbi5zdGF0dXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ3N0YXR1cycsSlNPTi5zdHJpbmdpZnkoc3RhdHVzKSwzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLmlzX3N1Yl9kb21haW5fdXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbXBhbnlTZXJ2aWNlLmlzU3ViRG9tYWluRXhpc3QodGhpcy5jbylcclxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb21wYW55Jywgc3VjY2Vzcy5faWQpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb21wYW55IEVycm9yJyxlcnJvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UudXNlci5yb2xlICE9PSAnQURNSU4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VkSW5TZXJpdmNlLmxvZ2luKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLnRva2VuID0gcmVzcG9uc2UudG9rZW47XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSByZXNwb25zZS5jb21wYW55LnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvZGFzaGJvYXJkJztcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLmlzX3N1Yl9kb21haW5fdXJsKSB7XHJcbiAgICAgICAgICAgICAgalF1ZXJ5KGxvY2F0aW9uKS5hdHRyKCdocmVmJywgQ29uZmlnLlBST1RPQ09MICsgdXJsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2Rhc2hib2FyZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyotLS0gVHJhY2tpbmcgZXZlbnRzIGdvZXMgaGVyZSAtLS0qL1xyXG4gICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdMb2dpbicsICdTdWJtaXQnLCAnTG9naW5QYWdlJyk7XHJcbiAgICAgICAgICAgIF9rbXEucHVzaChbJ2lkZW50aWZ5JywgdmFsdWUuZW1haWxdKTtcclxuICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0xvZ2dlZCBJbiddKTtcclxuICAgICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvYWRtaW4nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICBqUXVlcnkoJyNsb2dpblN1Ym1pdCcpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjbG9naW5TdWJtaXQnKS5odG1sKCdMb2dpbicpO1xyXG4gICAgICAgIGpRdWVyeSgnI2xvZ2luU3VibWl0JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5FcnJvck1lc3NhZ2UgPSByZXNwb25zZS5lcnJvci5tZXNzYWdlO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvci5jb2RlID09PSBcIkVfVVNFUl9BQ0NPVU5UX0RJU0FCTEVEXCIpIHtcclxuICAgICAgICAgIHRoaXMuRXJyb3JNZXNzYWdlID0gcmVzcG9uc2UuZXJyb3IuZXJyX21lc3NhZ2U7XHJcbiAgICAgICAgICB0aGlzLnVzZXJJZCA9IHJlc3BvbnNlLmVycm9yLmVycl9lcnJvcnM7XHJcbiAgICAgICAgICB0aGlzLnJlc2VuZEVtYWlsU2hvdyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSgpO1xyXG4gICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBzaWduVXAoKSB7XHJcbiAgICBqUXVlcnkoJyNsZWFkcycpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICBqUXVlcnkoJyNzaWduVXAnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2lnbnVwJ10pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VMb2dpbigpIHtcclxuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1NhZmFyaScpICE9PSAtMSAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSkge1xyXG4gICAgICAgIHZhciBsaW5rID0gQ29uZmlnLlBBUkVOVF9BUFBfRE9NQUlOO1xyXG4gICAgICAgIHZhciBwcm90b2NvbCA9IENvbmZpZy5QUk9UT0NPTDtcclxuICAgICAgICBqUXVlcnkobG9jYXRpb24pLmF0dHIoJ2hyZWYnLHByb3RvY29sICsgbGluayk7XHJcblx0XHR9ZWxzZXtcclxuICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXNlbmRFbWFpbCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCd1c2VyIGlkJywgdGhpcy51c2VySWQpO1xyXG4gICAgdGhpcy5fdXNlclNlcnZpY2UucmVzZW5kRW1haWwodGhpcy51c2VySWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ0VtYWlsIGhhcyBiZWVuIHNlbnQsIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsLicpO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2NvbXBhbnkgRXJyb3InLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGZvcmdldFBhc3N3b3JkKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZm9yZ2V0UGFzc3dvcmQnXSk7XHJcbiAgfVxyXG5cclxuICBjYWxsR0EoKSB7XHJcbiAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnTG9nIEluIENsaWNrJ10pO1xyXG4gIH1cclxufVxyXG4iXX0=
