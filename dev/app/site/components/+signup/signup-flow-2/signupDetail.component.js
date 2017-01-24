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
var index_1 = require('../../../../shared/services/index');
var User_1 = require('./User');
var email_validator_1 = require('../../../../shared/validators/email.validator');
var env_config_1 = require('../../../../config/env.config');
var router_1 = require('@angular/router');
var SignupDetailComponent = (function () {
    function SignupDetailComponent(fb, _userService, _companyService, _render, _element, _router, _cookieService) {
        this.fb = fb;
        this._userService = _userService;
        this._companyService = _companyService;
        this._render = _render;
        this._element = _element;
        this._router = _router;
        this._cookieService = _cookieService;
        this.error = false;
        this.signUp = false;
        this.model = new User_1.User('', new User_1.Email('', true), '', '', '', false, '');
        this.companyType = false;
        this.emailError = false;
        this.forgetPasswordError = false;
        this.temp_name = 'template';
        this.isSubmit = false;
        this.isExtension = false;
        this.domainExtension = '';
        var data = localStorage.getItem('leads');
        if (data !== null) {
            this.model.name = data.split('@')[0].split('.')[0];
            this.model.emails.email = data;
            this.model.companyname = data.split('@')[1].split('.')[0];
            this.model.domain = data.split('@')[1].split('.')[0];
        }
    }
    SignupDetailComponent.prototype.ngOnInit = function () {
        this.domainExtension = '.' + env_config_1.Config.APP_EXTENSION;
        this.isExtension = false;
        this.signupFormdetail = this.fb.group({
            name: [this.model.name, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern('^[a-zA-Z ]*$')])],
            email: [this.model.emails.email, forms_1.Validators.compose([forms_1.Validators.required, email_validator_1.EmailValidator.format])],
            password: [this.model.password, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8)])],
            companyname: [this.model.companyname, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.pattern('^[a-zA-Z 0-9]*$')])],
            domain: [this.model.domain, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.pattern('^[a-zA-Z0-9]*$')
                ])]
        });
        this.callSchedule = this.fb.group({
            traffic: [this.traffic, forms_1.Validators.compose([forms_1.Validators.maxLength(10), forms_1.Validators.pattern('^[0-9]*$')])],
            leads: [this.leads, forms_1.Validators.compose([forms_1.Validators.maxLength(10), forms_1.Validators.pattern('^[0-9]*$')])],
            companyType: this.companyType
        });
        this.forgetPasswordForm = this.fb.group({
            forgetemail: ['', forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(3), email_validator_1.EmailValidator.format
                ])]
        });
        jQuery.material.init();
    };
    SignupDetailComponent.prototype.errorShow = function () {
        this.error = true;
    };
    SignupDetailComponent.prototype.errorHide = function () {
        this.error = false;
        this.forgetPasswordError = false;
    };
    SignupDetailComponent.prototype.errorEmailHide = function () {
        this.emailError = false;
    };
    SignupDetailComponent.prototype.userSignUp = function (user) {
        var _this = this;
        this.isSubmit = true;
        this.errorMsg = '';
        if (this.signupFormdetail.valid) {
            this.isSubmit = false;
            jQuery('#btnSaveDetail').addClass('loading');
            jQuery('#btnSaveDetail').text('Please wait');
            jQuery('#btnSaveDetail').attr('disabled', true);
            user = this.model;
            var signupSubscription_1 = this._userService.register(user)
                .subscribe(function (response) {
                var storage = {
                    'token': response.token,
                    'user': response.user,
                    'company': response.company,
                    'temp_name': _this.temp_name,
                    'companyList': response.companyList
                };
                _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(response.companyAccess), 3);
                _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                localStorage.setItem('domain', _this.model.domain);
                localStorage.removeItem('leads');
                ga('markettingteam.send', 'event', 'Signup', 'Submit', 'SignUpPage');
                _kmq.push(['identify', user.emails.email]);
                _kmq.push(['record', 'Signed Up']);
                fbq('track', 'CompleteRegistration');
                _this.redirectToDomain();
            }, function (error) {
                var error_code = error.error.code;
                if (error_code === 'E_UNIQUE_USERNAME_VALIDATION' ||
                    error_code === 'E_UNIQUE_EMAIL_VALIDATION' ||
                    error_code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION') {
                    _this.errorMsg = ' Email is already registered with us! Please Log in';
                }
                else if (error.error.err_errors['sub_domain']) {
                    _this.errorMsg = error.error.err_errors['sub_domain'].message;
                }
                else {
                    _this.errorMsg = error.error.err_errors['emails.0.email'] ?
                        error.error.err_errors['emails.0.email'].message : error.error.err_message;
                }
                _this.emailError = _this.errorMsg;
                jQuery('#btnSaveDetail').removeClass('loading');
                jQuery('#btnSaveDetail').text('SignUp');
                jQuery('#btnSaveDetail').attr('disabled', false);
                signupSubscription_1.unsubscribe();
            });
        }
    };
    SignupDetailComponent.prototype.saveSchedule = function () {
        var _this = this;
        jQuery('#btnLeads').text('Please wait..');
        var signupSubscription = this._companyService.saveCallSchedule(this.callSchedule.value)
            .subscribe(function (response) {
            _this.redirectToDomain();
        }, function (error) {
            jQuery('#btnLeads').text('Save');
            signupSubscription.unsubscribe();
        });
    };
    SignupDetailComponent.prototype.skip = function () {
        var link = env_config_1.Config.APP_EXTENSION;
        var url = this.model.domain + '.' + link;
        var protocol = env_config_1.Config.PROTOCOL;
        jQuery(location).attr('href', protocol + url);
    };
    SignupDetailComponent.prototype.redirectToDomain = function () {
        localStorage.removeItem('leads');
        var link = env_config_1.Config.APP_EXTENSION;
        var protocol = env_config_1.Config.PROTOCOL;
        var url = this.model.domain + '.' + link + '/dashboard';
        jQuery(location).attr('href', protocol + url);
    };
    SignupDetailComponent.prototype.checkEmail = function () {
        this.errorHide();
    };
    SignupDetailComponent.prototype.checkCompanyEmail = function () {
        this.errorEmailHide();
        this.isExtension = false;
    };
    SignupDetailComponent.prototype.showExtension = function () {
        this.isExtension = true;
    };
    SignupDetailComponent.prototype.closeModal = function () {
        if (this._cookieService.readCookie('storage') !== null) {
            this.redirectToDomain();
        }
        else {
            jQuery('#signUp').modal('hide');
        }
    };
    SignupDetailComponent.prototype.showPassword = function () {
        if (jQuery('#password').attr('type') === 'password') {
            jQuery('#btnShowPassword').addClass('hide');
            jQuery('#btnHidePassword').removeClass('hide');
            jQuery('#password').attr('type', 'text');
        }
    };
    SignupDetailComponent.prototype.hidePassword = function () {
        if (jQuery('#password').attr('type') === 'text') {
            jQuery('#btnHidePassword').addClass('hide');
            jQuery('#btnShowPassword').removeClass('hide');
            jQuery('#password').attr('type', 'password');
        }
    };
    SignupDetailComponent.prototype.login = function () {
        this._router.navigate(['/login']);
    };
    SignupDetailComponent.prototype.close = function () {
        this._router.navigate(['/']);
    };
    SignupDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signup-detail-component',
            templateUrl: 'signupDetail.component.html',
            styleUrls: ['signupDetail.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.UserService, index_1.CompanyService, core_1.Renderer, core_1.ElementRef, router_1.Router, index_1.CookieService])
    ], SignupDetailComponent);
    return SignupDetailComponent;
}());
exports.SignupDetailComponent = SignupDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK3NpZ251cC9zaWdudXAtZmxvdy0yL3NpZ251cERldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNCQUE2RSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzlGLHFCQUF3RCxlQUFlLENBQUMsQ0FBQTtBQUN4RSxzQkFBeUQsbUNBQW1DLENBQUMsQ0FBQTtBQUM3RixxQkFBNEIsUUFBUSxDQUFDLENBQUE7QUFDckMsZ0NBQStCLCtDQUErQyxDQUFDLENBQUE7QUFDL0UsMkJBQXVCLCtCQUErQixDQUFDLENBQUE7QUFDdkQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFlekM7SUFxQkUsK0JBQ29CLEVBQWUsRUFDZixZQUF5QixFQUN6QixlQUFnQyxFQUNoQyxPQUFpQixFQUNqQixRQUFvQixFQUNwQixPQUFjLEVBQ2QsY0FBNEI7UUFONUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBeEJoRCxVQUFLLEdBQVcsS0FBSyxDQUFDO1FBQ3RCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFHeEIsVUFBSyxHQUFHLElBQUksV0FBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLFlBQUssQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRzFELGdCQUFXLEdBQVcsS0FBSyxDQUFDO1FBRTVCLGVBQVUsR0FBYyxLQUFLLENBQUM7UUFDOUIsd0JBQW1CLEdBQWMsS0FBSyxDQUFDO1FBR3ZDLGNBQVMsR0FBVSxVQUFV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T1ksNkJBQXFCLHdCQW1PakMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS9jb21wb25lbnRzLytzaWdudXAvc2lnbnVwLWZsb3ctMi9zaWdudXBEZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UsQ29tcGFueVNlcnZpY2UsQ29va2llU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IFVzZXIsIEVtYWlsfSBmcm9tICAnLi9Vc2VyJztcclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvdmFsaWRhdG9ycy9lbWFpbC52YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcvZW52LmNvbmZpZyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbmRlY2xhcmUgdmFyIGdhOmFueTtcclxuZGVjbGFyZSB2YXIgX2ttcTphbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzphbnk7XHJcbmRlY2xhcmUgdmFyIGZicTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NpZ251cC1kZXRhaWwtY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJ3NpZ251cERldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3NpZ251cERldGFpbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHNpZ251cEZvcm1kZXRhaWwgOkZvcm1Hcm91cDtcclxuICBjYWxsU2NoZWR1bGUgOiBGb3JtR3JvdXA7XHJcbiAgZm9yZ2V0UGFzc3dvcmRGb3JtOkZvcm1Hcm91cDtcclxuICBlcnJvcjpCb29sZWFuID0gZmFsc2U7XHJcbiAgc2lnblVwIDpCb29sZWFuID0gZmFsc2U7XHJcbiAgaXNDb21wYW55RXhpc3QgOiBTdHJpbmcgO1xyXG4gIGlzRG9tYWluRXhpc3QgOiAgU3RyaW5nO1xyXG4gIG1vZGVsID0gbmV3IFVzZXIoJycsbmV3IEVtYWlsKCcnLHRydWUpLCcnLCcnLCcnLGZhbHNlLCcnKTtcclxuICB0cmFmZmljIDogYW55O1xyXG4gIGxlYWRzIDphbnk7XHJcbiAgY29tcGFueVR5cGU6Qm9vbGVhbiA9IGZhbHNlO1xyXG4gIGVycm9yTXNnICA6YW55IDtcclxuICBlbWFpbEVycm9yIDpCb29sZWFuICA9ICBmYWxzZTtcclxuICBmb3JnZXRQYXNzd29yZEVycm9yIDpCb29sZWFuICA9ICBmYWxzZTtcclxuICBtYWlsU2VudDpTdHJpbmc7XHJcbiAgcmVzZXRNc2cgOlN0cmluZztcclxuICB0ZW1wX25hbWUgOlN0cmluZyA9J3RlbXBsYXRlJztcclxuICBpc1N1Ym1pdCA6Qm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzRXh0ZW5zaW9uOkJvb2xlYW4gPSBmYWxzZTtcclxuICBkb21haW5FeHRlbnNpb246IGFueSA9ICcnO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9jb21wYW55U2VydmljZSA6IENvbXBhbnlTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlciA6UmVuZGVyZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudCA6RWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6Um91dGVyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2Nvb2tpZVNlcnZpY2U6Q29va2llU2VydmljZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xlYWRzJyk7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhIT09bnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLm5hbWUgICAgICAgICA9IGRhdGEuc3BsaXQoJ0AnKVswXS5zcGxpdCgnLicpWzBdO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmVtYWlscy5lbWFpbCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuY29tcGFueW5hbWUgID0gZGF0YS5zcGxpdCgnQCcpWzFdLnNwbGl0KCcuJylbMF07XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZG9tYWluICAgICAgID0gZGF0YS5zcGxpdCgnQCcpWzFdLnNwbGl0KCcuJylbMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZG9tYWluRXh0ZW5zaW9uID0gJy4nICsgQ29uZmlnLkFQUF9FWFRFTlNJT047XHJcbiAgICB0aGlzLmlzRXh0ZW5zaW9uID0gZmFsc2U7XHJcbiAgICB0aGlzLnNpZ251cEZvcm1kZXRhaWwgID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgbmFtZSAgOiBbdGhpcy5tb2RlbC5uYW1lLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCBWYWxpZGF0b3JzLnBhdHRlcm4oJ15bYS16QS1aIF0qJCcpXSldLFxyXG4gICAgICAgIGVtYWlsICAgICAgIDogW3RoaXMubW9kZWwuZW1haWxzLmVtYWlsLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEVtYWlsVmFsaWRhdG9yLmZvcm1hdF0pXSxcclxuICAgICAgICBwYXNzd29yZCAgICA6IFt0aGlzLm1vZGVsLnBhc3N3b3JkLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpXSldLFxyXG4gICAgICAgIGNvbXBhbnluYW1lIDogW3RoaXMubW9kZWwuY29tcGFueW5hbWUsVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLFZhbGlkYXRvcnMucGF0dGVybignXlthLXpBLVogMC05XSokJyldKV0sXHJcbiAgICAgICAgZG9tYWluICAgICAgOiBbdGhpcy5tb2RlbC5kb21haW4sVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucGF0dGVybignXlthLXpBLVowLTldKiQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgXSldXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNhbGxTY2hlZHVsZSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICB0cmFmZmljIDpbdGhpcy50cmFmZmljLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwKSxWYWxpZGF0b3JzLnBhdHRlcm4oJ15bMC05XSokJykgXSldLFxyXG4gICAgICBsZWFkcyAgIDpbdGhpcy5sZWFkcywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLm1heExlbmd0aCgxMCksVmFsaWRhdG9ycy5wYXR0ZXJuKCdeWzAtOV0qJCcpIF0pXSxcclxuICAgICAgY29tcGFueVR5cGU6IHRoaXMuY29tcGFueVR5cGVcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGZvcmdldGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksIEVtYWlsVmFsaWRhdG9yLmZvcm1hdFxyXG4gICAgICBdKV1cclxuICAgIH0pO1xyXG4gICAgalF1ZXJ5Lm1hdGVyaWFsLmluaXQoKTtcclxuICB9XHJcblxyXG5cclxuICBlcnJvclNob3coKSB7XHJcbiAgICB0aGlzLmVycm9yID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGVycm9ySGlkZSgpIHtcclxuICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRFcnJvciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZXJyb3JFbWFpbEhpZGUoKSB7XHJcbiAgICB0aGlzLmVtYWlsRXJyb3IgPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICB1c2VyU2lnblVwKHVzZXIgOmFueSApIHtcclxuICAgIHRoaXMuaXNTdWJtaXQgPSB0cnVlO1xyXG4gICAgdGhpcy5lcnJvck1zZz0nJztcclxuICAgIGlmKHRoaXMuc2lnbnVwRm9ybWRldGFpbC52YWxpZCkge1xyXG4gICAgICB0aGlzLmlzU3VibWl0ID0gZmFsc2U7XHJcbiAgICAgIGpRdWVyeSgnI2J0blNhdmVEZXRhaWwnKS5hZGRDbGFzcygnbG9hZGluZycpO1xyXG4gICAgICBqUXVlcnkoJyNidG5TYXZlRGV0YWlsJykudGV4dCgnUGxlYXNlIHdhaXQnKTtcclxuICAgICAgalF1ZXJ5KCcjYnRuU2F2ZURldGFpbCcpLmF0dHIoJ2Rpc2FibGVkJyx0cnVlKTtcclxuICAgICAgdXNlciA9IHRoaXMubW9kZWw7XHJcbiAgICAgIGxldCBzaWdudXBTdWJzY3JpcHRpb24gPSB0aGlzLl91c2VyU2VydmljZS5yZWdpc3Rlcih1c2VyKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IHN0b3JhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICAgICd0b2tlbicgICAgICAgOiByZXNwb25zZS50b2tlbixcclxuICAgICAgICAgICAgICAgICAgJ3VzZXInICAgICAgICA6IHJlc3BvbnNlLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICdjb21wYW55JyAgICAgOiByZXNwb25zZS5jb21wYW55LFxyXG4gICAgICAgICAgICAgICAgICAndGVtcF9uYW1lJyAgIDogdGhpcy50ZW1wX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICdjb21wYW55TGlzdCcgOiByZXNwb25zZS5jb21wYW55TGlzdFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ2ZpbGVwaWNrZXJfdG9rZW5fanNvbicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmNvbXBhbnlBY2Nlc3MpLCAzKTtcclxuICAgICAgICAgICAgICB0aGlzLl9jb29raWVTZXJ2aWNlLmNyZWF0ZUNvb2tpZSgnc3RvcmFnZScsSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSksMyk7XHJcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RvbWFpbicsdGhpcy5tb2RlbC5kb21haW4pO1xyXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsZWFkcycpO1xyXG5cclxuICAgICAgICAgICAgICAvKi0tLS0tIEFuYWx5dGljcyBUcmFja2luZyBjb2RlIGhlcmUgLS0tLS0tLSovXHJcbiAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2lnbnVwJywgJ1N1Ym1pdCcsICdTaWduVXBQYWdlJyk7XHJcbiAgICAgICAgICAgICAgX2ttcS5wdXNoKFsnaWRlbnRpZnknLCB1c2VyLmVtYWlscy5lbWFpbF0pO1xyXG4gICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdTaWduZWQgVXAnXSk7XHJcbiAgICAgICAgICAgICAgLy8gbGV0IHVybGEgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgICAvLyBpZih1cmxhLmluZGV4T2YoXCJvdXRncm93LnVzXCIpID49IDApIHtcclxuICAgICAgICAgICAgICAvLyAgIHdpbmRvdy5nb29nbGVfdHJhY2tDb252ZXJzaW9uKHtcclxuICAgICAgICAgICAgICAvLyAgICAgICBnb29nbGVfY29udmVyc2lvbl9pZDogODc2NTQ5MjEzLFxyXG4gICAgICAgICAgICAgIC8vICAgICAgIGdvb2dsZV9jb252ZXJzaW9uX2xhbmd1YWdlOiBcImVuXCIsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgZ29vZ2xlX2NvbnZlcnNpb25fZm9ybWF0OiBcIjNcIixcclxuICAgICAgICAgICAgICAvLyAgICAgICBnb29nbGVfY29udmVyc2lvbl9jb2xvcjogXCJmZmZmZmZcIixcclxuICAgICAgICAgICAgICAvLyAgICAgICBnb29nbGVfY29udmVyc2lvbl9sYWJlbDogXCJqeHpPQ0xpUzdHb1EzYWo4b1FNXCIsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgZ29vZ2xlX2NvbnZlcnNpb25fdmFsdWU6IDAuMDAsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgZ29vZ2xlX2NvbnZlcnNpb25fY3VycmVuY3k6IFwiSU5SXCIsXHJcbiAgICAgICAgICAgICAgLy8gICAgICAgZ29vZ2xlX3JlbWFya2V0aW5nX29ubHk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdDb21wbGV0ZVJlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICAgICAgICAgICAgLy90aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvdGVtcGxhdGVzJ10pO1xyXG4gICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUb0RvbWFpbigpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3IgOmFueSApID0+ICB7XHJcbiAgICAgICAgICAgICAgbGV0IGVycm9yX2NvZGUgPSBlcnJvci5lcnJvci5jb2RlO1xyXG4gICAgICAgICAgICAgIGlmKGVycm9yX2NvZGUgPT09ICdFX1VOSVFVRV9VU0VSTkFNRV9WQUxJREFUSU9OJyB8fFxyXG4gICAgICAgICAgICAgICAgZXJyb3JfY29kZT09PSdFX1VOSVFVRV9FTUFJTF9WQUxJREFUSU9OJyB8fFxyXG4gICAgICAgICAgICAgICAgZXJyb3JfY29kZT09PSdFX1VOSVFVRV9VTklERU5USUZJRURfVkFMSURBVElPTidcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNc2cgPSAnIEVtYWlsIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCB3aXRoIHVzISBQbGVhc2UgTG9nIGluJztcclxuICAgICAgICAgICAgICB9ZWxzZSBpZihlcnJvci5lcnJvci5lcnJfZXJyb3JzWydzdWJfZG9tYWluJ10pIHtcclxuICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTXNnID0gZXJyb3IuIGVycm9yLmVycl9lcnJvcnNbJ3N1Yl9kb21haW4nXS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgIH1lbHNlICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yTXNnID0gZXJyb3IuIGVycm9yLmVycl9lcnJvcnNbJ2VtYWlscy4wLmVtYWlsJ10/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IuIGVycm9yLmVycl9lcnJvcnNbJ2VtYWlscy4wLmVtYWlsJ10ubWVzc2FnZSA6IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLmVtYWlsRXJyb3IgPSB0aGlzLmVycm9yTXNnIDtcclxuICAgICAgICAgICAgICBqUXVlcnkoJyNidG5TYXZlRGV0YWlsJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgICBqUXVlcnkoJyNidG5TYXZlRGV0YWlsJykudGV4dCgnU2lnblVwJyk7XHJcbiAgICAgICAgICAgICAgalF1ZXJ5KCcjYnRuU2F2ZURldGFpbCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgc2lnbnVwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVTY2hlZHVsZSgpIHtcclxuICAgIGpRdWVyeSgnI2J0bkxlYWRzJykudGV4dCgnUGxlYXNlIHdhaXQuLicpO1xyXG4gICAgbGV0IHNpZ251cFN1YnNjcmlwdGlvbiA9IHRoaXMuX2NvbXBhbnlTZXJ2aWNlLnNhdmVDYWxsU2NoZWR1bGUodGhpcy5jYWxsU2NoZWR1bGUudmFsdWUpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUb0RvbWFpbigpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnJvciA6YW55ICkgPT4gIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjYnRuTGVhZHMnKS50ZXh0KCdTYXZlJyk7XHJcbiAgICAgICAgICAgIHNpZ251cFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgc2tpcCgpIHtcclxuICAgICB2YXIgbGluayA9IENvbmZpZy5BUFBfRVhURU5TSU9OO1xyXG4gICAgIHZhciB1cmwgPSB0aGlzLm1vZGVsLmRvbWFpbisnLicrbGluaztcclxuICAgICB2YXIgcHJvdG9jb2wgPSBDb25maWcuUFJPVE9DT0w7XHJcbiAgICAgalF1ZXJ5KGxvY2F0aW9uKS5hdHRyKCdocmVmJyxwcm90b2NvbCArIHVybCk7XHJcbiAgfVxyXG5cclxuICByZWRpcmVjdFRvRG9tYWluKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xlYWRzJyk7XHJcbiAgICBsZXQgbGluayA9IENvbmZpZy5BUFBfRVhURU5TSU9OO1xyXG4gICAgbGV0IHByb3RvY29sID0gQ29uZmlnLlBST1RPQ09MO1xyXG4gICAgbGV0IHVybCA9IHRoaXMubW9kZWwuZG9tYWluKycuJytsaW5rKycvZGFzaGJvYXJkJztcclxuICAgIGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicscHJvdG9jb2wgKyB1cmwpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tFbWFpbCgpIHtcclxuICAgICAgdGhpcy5lcnJvckhpZGUoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrQ29tcGFueUVtYWlsKCkge1xyXG4gICAgICB0aGlzLmVycm9yRW1haWxIaWRlKCk7XHJcbiAgICAgIHRoaXMuaXNFeHRlbnNpb24gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNob3dFeHRlbnNpb24oKXtcclxuICAgIHRoaXMuaXNFeHRlbnNpb24gPSB0cnVlIDtcclxuICB9XHJcblxyXG4gIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBpZih0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSAhPT1udWxsICkge1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RUb0RvbWFpbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgalF1ZXJ5KCcjc2lnblVwJykubW9kYWwoJ2hpZGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dQYXNzd29yZCgpIHtcclxuICAgIGlmIChqUXVlcnkoJyNwYXNzd29yZCcpLmF0dHIoJ3R5cGUnKT09PSdwYXNzd29yZCcpIHtcclxuICAgICAgalF1ZXJ5KCcjYnRuU2hvd1Bhc3N3b3JkJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgalF1ZXJ5KCcjYnRuSGlkZVBhc3N3b3JkJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgalF1ZXJ5KCcjcGFzc3dvcmQnKS5hdHRyKCd0eXBlJywndGV4dCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZVBhc3N3b3JkKCkge1xyXG4gICAgaWYgKGpRdWVyeSgnI3Bhc3N3b3JkJykuYXR0cigndHlwZScpPT09J3RleHQnKSB7XHJcbiAgICAgIGpRdWVyeSgnI2J0bkhpZGVQYXNzd29yZCcpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgIGpRdWVyeSgnI2J0blNob3dQYXNzd29yZCcpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgIGpRdWVyeSgnI3Bhc3N3b3JkJykuYXR0cigndHlwZScsJ3Bhc3N3b3JkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gIH1cclxuICBjbG9zZSgpIHtcclxuICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gIH1cclxufVxyXG4iXX0=
