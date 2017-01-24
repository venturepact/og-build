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
            if (response.error.code === 'E_USER_ACCOUNT_DISABLED') {
                _this.ErrorMessage = response.error.err_message;
                _this.userId = response.error.err_errors;
                _this.resendEmailShow = true;
            }
            if (response.error.code === 'E_USER_ACCOUNT_LEFT') {
                _this.ErrorMessage = response.error.message;
                _this.userId = response.error.err_errors;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQkFBNkUsZ0JBQWdCLENBQUMsQ0FBQTtBQUM5RixxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFDakQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsc0JBQThGLHFCQUFxQixDQUFDLENBQUE7QUFDcEgsZ0NBQStCLGlDQUFpQyxDQUFDLENBQUE7QUFDakUsMkJBQXVCLDJCQUEyQixDQUFDLENBQUE7QUFDbkQscUJBQTRCLFFBQVEsQ0FBQyxDQUFBO0FBQ3JDLHVDQUFzQywwQ0FBMEMsQ0FBQyxDQUFBO0FBQ2pGLHNCQUFnQyxxQkFBcUIsQ0FBQyxDQUFBO0FBZXREO0lBY0Usd0JBQ1UsRUFBZSxFQUNmLFlBQXlCLEVBQzFCLE1BQWMsRUFDYixlQUFnQyxFQUNoQyxnQkFBbUMsRUFDbkMsZUFBZ0MsRUFDaEMsY0FBOEIsRUFDOUIsa0JBQW9DO1FBUHBDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUMxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUFDbkMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWtCO1FBcEI5QyxVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFZLEtBQUssQ0FBQztRQUl2QyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxVQUFLLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxZQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTFDLG1CQUFjLEdB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QVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2xDLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixFQUFDLDhDQUFxQixDQUFDO1NBQzVELENBQUM7O3NCQUFBO0lBcU1GLHFCQUFDO0FBQUQsQ0FuTUEsQUFtTUMsSUFBQTtBQW5NWSxzQkFBYyxpQkFtTTFCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UsIExvZ2dlZEluU2VydmljZSwgU3ViRG9tYWluU2VydmljZSwgQ29tcGFueVNlcnZpY2UsIENvb2tpZVNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0b3IgfSBmcm9tICcuLy4uL3ZhbGlkYXRvcnMvZW1haWwudmFsaWRhdG9yJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi8uLi8uLi9jb25maWcvZW52LmNvbmZpZyc7XHJcbmltcG9ydCB7IFVzZXIsIEVtYWlsfSBmcm9tICAnLi91c2VyJztcclxuaW1wb3J0IHsgUGF5bWVudE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9wYXltZW50TW9kYWwvcGF5bWVudE1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWVtYmVyc2hpcFNlcnZpY2V9IGZyb20gJy4vLi4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnb2ctbG9naW4nLFxyXG5cdHRlbXBsYXRlVXJsOiAnbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWydsb2dpbi5jb21wb25lbnQuY3NzJ10sXHJcblx0ZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyxQYXltZW50TW9kYWxDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xyXG4gIGVycm9yOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgRXJyb3JNZXNzYWdlSXNWaXNpYmxlOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgY286IGFueTtcclxuICBFcnJvck1lc3NhZ2U6IFN0cmluZztcclxuICB1c2VySWQ6IGFueTtcclxuICBpc0RvbWFpbkV4aXN0OiBCb29sZWFuID0gZmFsc2U7XHJcbiAgcmVzZW5kRW1haWxTaG93OiBCb29sZWFuID0gZmFsc2U7XHJcbiAgbW9kZWwgPSBuZXcgVXNlcihuZXcgRW1haWwoJycsIHRydWUpLCAnJyk7XHJcblxyXG4gIGlzQWRtaW5DcmVhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY2FyZFN0YXR1czpzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbG9nZ2VkSW5TZXJpdmNlOiBMb2dnZWRJblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN1YkRvbWFpblNlcnZpY2UgOiBTdWJEb21haW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfY29tcGFueVNlcnZpY2UgOiBDb21wYW55U2VydmljZSxcclxuICAgIHByaXZhdGUgX2Nvb2tpZVNlcnZpY2UgOiBDb29raWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfbWVtYmVyc2hpcFNlcnZpY2U6TWVtYmVyc2hpcFNlcnZpY2VcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGxldCBsaW5rID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KCcuJyk7XHJcbiAgICBpZiAobGlua1swXSA9PT0gJ2FwcCcpIHtcclxuICAgICAgdGhpcy5pc0RvbWFpbkV4aXN0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGxldCB1c2VyRW1haWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGVhZHMnKTtcclxuICAgIGlmICh1c2VyRW1haWwpIHtcclxuICAgICAgdGhpcy5tb2RlbC5lbWFpbHMuZW1haWwgPSB1c2VyRW1haWw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBlbWFpbDogW3RoaXMubW9kZWwuZW1haWxzLmVtYWlsLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIEVtYWlsVmFsaWRhdG9yLmZvcm1hdFxyXG4gICAgICBdKV0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KVxyXG4gICAgICBdKV1cclxuICAgIH0pO1xyXG4gICAgalF1ZXJ5Lm1hdGVyaWFsLmluaXQoKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgc2hvd0Vycm9yTWVzc2FnZSgpIHtcclxuICAgIHRoaXMuRXJyb3JNZXNzYWdlSXNWaXNpYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGhpZGVFcnJvck1lc3NhZ2UoKSB7XHJcbiAgICB0aGlzLkVycm9yTWVzc2FnZUlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQodmFsdWU6IGFueSkge1xyXG5cclxuXHRcdHZhbHVlID0gdGhpcy5sb2dpbkZvcm0udmFsdWU7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBqUXVlcnkoJyNsb2dpblN1Ym1pdCcpLmFkZENsYXNzKCdsb2FkaW5nJyk7XHJcbiAgICBqUXVlcnkoJyNsb2dpblN1Ym1pdCcpLmh0bWwoJ1BsZWFzZSB3YWl0Jyk7XHJcbiAgICBqUXVlcnkoJyNsb2dpblN1Ym1pdCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICBsZXQgbGluayA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuICAgIGxldCBsaW5rQXJyYXkgPSBsaW5rLnNwbGl0KCcuJyk7XHJcbiAgICAvL3RoaXMuY28gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnLm91dGdyb3cnKVswXS5zcGxpdCgnLy8nKVsxXTtcclxuICAgIHRoaXMuY28gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnLy8nKVsxXS5zcGxpdCgnLicpWzBdO1xyXG4gICAgbGV0IGNvbXBhbnlOYW1lOiBTdHJpbmcgPSBudWxsO1xyXG4gICAgaWYgKGxpbmtBcnJheS5sZW5ndGggPT09IDMgJiYgbGlua0FycmF5WzBdICE9PSAnYXBwJylcclxuICAgICAgY29tcGFueU5hbWUgPSBsaW5rQXJyYXlbMF07XHJcbiAgICB0aGlzLl91c2VyU2VydmljZS5sb2dpbih2YWx1ZS5lbWFpbCwgdmFsdWUucGFzc3dvcmQsIGNvbXBhbnlOYW1lKVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ZpbGVwaWNrZXJfdG9rZW5fc2V0JywgcmVzcG9uc2UuY29tcGFueUFjY2Vzcyk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnRva2VuKSB7XHJcbiAgICAgICAgICBzZWxmLmlzQWRtaW5DcmVhdGVkID0gcmVzcG9uc2UudXNlci5pc19hZG1pbl9jcmVhdGVkO1xyXG4gICAgICAgICAgaWYocmVzcG9uc2UudXNlci5yb2xlICE9PSAnQURNSU4nKVxyXG4gICAgICAgICAgc2VsZi5jYXJkU3RhdHVzID0gcmVzcG9uc2Uuc3Vic2NyaXB0aW9uLmN1cnJlbnRwbGFuLmN1c3RvbWVyLmNhcmRfc3RhdHVzO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xlYWRzJyk7XHJcbiAgICAgICAgICBsZXQgc3RvcmFnZTogYW55O1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnVzZXIucm9sZSA9PT0gJ0FETUlOJykge1xyXG4gICAgICAgICAgICBzdG9yYWdlID0ge1xyXG4gICAgICAgICAgICAgICd0b2tlbic6IHJlc3BvbnNlLnRva2VuLFxyXG4gICAgICAgICAgICAgICd1c2VyJzogcmVzcG9uc2UudXNlclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RvcmFnZSA9IHtcclxuICAgICAgICAgICAgICAndG9rZW4nOiByZXNwb25zZS50b2tlbixcclxuICAgICAgICAgICAgICAndXNlcic6IHJlc3BvbnNlLnVzZXIsXHJcbiAgICAgICAgICAgICAgJ2NvbXBhbnknOiByZXNwb25zZS5jb21wYW55LFxyXG4gICAgICAgICAgICAgICdjb21wYW55TGlzdCc6IHJlc3BvbnNlLmNvbXBhbnlMaXN0LFxyXG4gICAgICAgICAgICAgICdzaG93VXBncmFkZU1vZGFsJzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0b3JhZ2UuY29tcGFueVsnY29zdCddID0gcmVzcG9uc2UucGxhbi5wcmljZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1NUT1JBR0UgSlNPTicsIHN0b3JhZ2UuY29tcGFueS5jb3N0KTtcclxuICAgICAgICAgICAgdGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ2ZpbGVwaWNrZXJfdG9rZW5fanNvbicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmNvbXBhbnlBY2Nlc3MpLCAzKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnVzZXIuY2hhcmdlYmVlX3BsYW5faWQgPT09ICdzdGFydGVyJylcclxuICAgICAgICAgICAgICBzdG9yYWdlLnNob3dVcGdyYWRlTW9kYWwgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgalF1ZXJ5KCcjbG9naW4nKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgdGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ3N0b3JhZ2UnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlKSwgMyk7XHJcbiAgICAgICAgICBpZihyZXNwb25zZS51c2VyLnJvbGUgIT09ICdBRE1JTicpe1xyXG4gICAgICAgICAgICBsZXQgc3RhdHVzID0ge1xyXG4gICAgICAgICAgICAgIGNhcmRTdGF0dXM6IHNlbGYuY2FyZFN0YXR1cyxcclxuICAgICAgICAgICAgICBzdWJzU3RhdHVzOiByZXNwb25zZS5zdWJzY3JpcHRpb24uY3VycmVudHBsYW4uc3Vic2NyaXB0aW9uLnN0YXR1c1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLl9jb29raWVTZXJ2aWNlLmNyZWF0ZUNvb2tpZSgnc3RhdHVzJyxKU09OLnN0cmluZ2lmeShzdGF0dXMpLDMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uaXNfc3ViX2RvbWFpbl91cmwpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29tcGFueVNlcnZpY2UuaXNTdWJEb21haW5FeGlzdCh0aGlzLmNvKVxyXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgKHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbXBhbnknLCBzdWNjZXNzLl9pZCk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbXBhbnkgRXJyb3InLGVycm9yKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChyZXNwb25zZS51c2VyLnJvbGUgIT09ICdBRE1JTicpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZWRJblNlcml2Y2UubG9naW4oKTtcclxuICAgICAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UudG9rZW4gPSByZXNwb25zZS50b2tlbjtcclxuICAgICAgICAgICAgbGV0IHVybCA9IHJlc3BvbnNlLmNvbXBhbnkuc3ViX2RvbWFpbiArICcuJyArIENvbmZpZy5BUFBfRVhURU5TSU9OICsgJy9kYXNoYm9hcmQnO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uaXNfc3ViX2RvbWFpbl91cmwpIHtcclxuICAgICAgICAgICAgICBqUXVlcnkobG9jYXRpb24pLmF0dHIoJ2hyZWYnLCBDb25maWcuUFJPVE9DT0wgKyB1cmwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvZGFzaGJvYXJkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKi0tLSBUcmFja2luZyBldmVudHMgZ29lcyBoZXJlIC0tLSovXHJcbiAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0xvZ2luJywgJ1N1Ym1pdCcsICdMb2dpblBhZ2UnKTtcclxuICAgICAgICAgICAgX2ttcS5wdXNoKFsnaWRlbnRpZnknLCB2YWx1ZS5lbWFpbF0pO1xyXG4gICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnTG9nZ2VkIEluJ10pO1xyXG4gICAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9hZG1pbic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGpRdWVyeSgnI2xvZ2luU3VibWl0JykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICBqUXVlcnkoJyNsb2dpblN1Ym1pdCcpLmh0bWwoJ0xvZ2luJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjbG9naW5TdWJtaXQnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkVycm9yTWVzc2FnZSA9IHJlc3BvbnNlLmVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yLmNvZGUgPT09ICdFX1VTRVJfQUNDT1VOVF9ESVNBQkxFRCcpIHtcclxuICAgICAgICAgIHRoaXMuRXJyb3JNZXNzYWdlID0gcmVzcG9uc2UuZXJyb3IuZXJyX21lc3NhZ2U7XHJcbiAgICAgICAgICB0aGlzLnVzZXJJZCA9IHJlc3BvbnNlLmVycm9yLmVycl9lcnJvcnM7XHJcbiAgICAgICAgICB0aGlzLnJlc2VuZEVtYWlsU2hvdyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvci5jb2RlID09PSAnRV9VU0VSX0FDQ09VTlRfTEVGVCcpIHtcclxuICAgICAgICAgIHRoaXMuRXJyb3JNZXNzYWdlID0gcmVzcG9uc2UuZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgIHRoaXMudXNlcklkID0gcmVzcG9uc2UuZXJyb3IuZXJyX2Vycm9ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCk7XHJcbiAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHNpZ25VcCgpIHtcclxuICAgIGpRdWVyeSgnI2xlYWRzJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgIGpRdWVyeSgnI3NpZ25VcCcpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zaWdudXAnXSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZUxvZ2luKCkge1xyXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignU2FmYXJpJykgIT09IC0xICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPT09IC0xKSB7XHJcbiAgICAgICAgdmFyIGxpbmsgPSBDb25maWcuUEFSRU5UX0FQUF9ET01BSU47XHJcbiAgICAgICAgdmFyIHByb3RvY29sID0gQ29uZmlnLlBST1RPQ09MO1xyXG4gICAgICAgIGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicscHJvdG9jb2wgKyBsaW5rKTtcclxuXHRcdH1lbHNle1xyXG4gICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHJlc2VuZEVtYWlsKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3VzZXIgaWQnLCB0aGlzLnVzZXJJZCk7XHJcbiAgICB0aGlzLl91c2VyU2VydmljZS5yZXNlbmRFbWFpbCh0aGlzLnVzZXJJZClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgKHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignRW1haWwgaGFzIGJlZW4gc2VudCwgUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwuJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnY29tcGFueSBFcnJvcicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgZm9yZ2V0UGFzc3dvcmQoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9mb3JnZXRQYXNzd29yZCddKTtcclxuICB9XHJcblxyXG4gIGNhbGxHQSgpIHtcclxuICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdMb2cgSW4gQ2xpY2snXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
