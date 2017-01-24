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
var index_1 = require('./../../shared/services/index');
var email_validator_1 = require('./../../shared/validators/email.validator');
var router_1 = require('@angular/router');
var ForgetPasswordComponent = (function () {
    function ForgetPasswordComponent(fb, _userService, _companyService, _render, _element, _router, _script) {
        this.fb = fb;
        this._userService = _userService;
        this._companyService = _companyService;
        this._render = _render;
        this._element = _element;
        this._router = _router;
        this._script = _script;
        this.error = false;
        this.signUp = false;
        this.companyType = false;
        this.emailError = false;
        this.forgetPasswordError = false;
        this.isCaptcha = false;
        window['verifyCallback'] = this.verifyCallback.bind(this);
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        this.forgetPasswordForm = this.fb.group({
            forgetemail: ['', forms_1.Validators.compose([
                    forms_1.Validators.required, email_validator_1.EmailValidator.format
                ])]
        });
        jQuery.material.init();
    };
    ForgetPasswordComponent.prototype.ngAfterViewInit = function () {
        this._script.load('captcha')
            .then(function (data) {
            console.log('capctha', data);
        })
            .catch(function (error) {
        });
    };
    ForgetPasswordComponent.prototype.errorShow = function () {
        this.error = true;
    };
    ForgetPasswordComponent.prototype.errorHide = function () {
        this.error = false;
        this.forgetPasswordError = false;
        jQuery('#success-mailSent').addClass('hide');
    };
    ForgetPasswordComponent.prototype.errorEmailHide = function () {
        this.emailError = false;
    };
    ForgetPasswordComponent.prototype.checkEmail = function () {
        this.errorHide();
    };
    ForgetPasswordComponent.prototype.checkCompanyEmail = function () {
        this.errorEmailHide();
    };
    ForgetPasswordComponent.prototype.verifyCallback = function (cap) {
        this.captchaCode = cap;
        this.isCaptcha = true;
        var email = this.forgetPasswordForm.value.forgetemail;
        if (email != '')
            jQuery('#btnReset').attr('disabled', false);
    };
    ForgetPasswordComponent.prototype.forgetPassword = function () {
        var _this = this;
        jQuery('#btnReset').addClass('loading');
        jQuery('#btnReset').text('Please Wait');
        jQuery('#btnReset').attr('disabled', true);
        this._userService.forgetPassword(this.captchaCode, this.forgetPasswordForm.value)
            .subscribe(function (response) {
            if (response.active === false) {
                _this.errorMsg = 'User Account has been not approved yet!';
                _this.forgetPasswordError = _this.errorMsg;
            }
            else {
                _this.mailSent = 'We have sent you an email with a link to reset your password.' +
                    'Please check your email, click on the link and set a new password.';
                jQuery('#success-mailSent').removeClass('hide');
                setTimeout(function () {
                    window.location.href = window.location.origin;
                }, 5000);
            }
            jQuery('#btnReset').text('Reset Password');
            jQuery('#btnReset').removeClass('loading');
        }, function (error) {
            var error_code = error.error.code;
            if (error_code === 'E_USER_INVALID_CAPTCHA' || error_code === 'E_USER_NO_CAPTCHA') {
                _this.errorMsg = error.error.err_message;
            }
            else {
                _this.errorMsg = error.error.message;
            }
            _this.forgetPasswordError = _this.errorMsg;
            jQuery('#btnReset').text('Reset Password');
            jQuery('#btnReset').removeClass('loading');
            jQuery('#btnReset').attr('disabled', false);
        });
    };
    ForgetPasswordComponent.prototype.login = function () {
        this._router.navigate(['/login']);
    };
    ForgetPasswordComponent.prototype.close = function () {
        this._router.navigate(['/login']);
    };
    ForgetPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-forget-passwrd',
            templateUrl: 'forgetPassword.component.html',
            styleUrls: ['forgetPassword.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.UserService, index_1.CompanyService, core_1.Renderer, core_1.ElementRef, router_1.Router, index_1.Script])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());
exports.ForgetPasswordComponent = ForgetPasswordComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytmb3JnZXRQYXNzd29yZC9mb3JnZXRQYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNCQUE2RSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzlGLHFCQUFzRSxlQUFlLENBQUMsQ0FBQTtBQUN0RixzQkFBa0QsK0JBQStCLENBQUMsQ0FBQTtBQUNsRixnQ0FBK0IsMkNBQTJDLENBQUMsQ0FBQTtBQUMzRSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQVl6QztJQWVFLGlDQUNvQixFQUFlLEVBQ2YsWUFBeUIsRUFDekIsZUFBZ0MsRUFDaEMsT0FBaUIsRUFDakIsUUFBb0IsRUFDcEIsT0FBYyxFQUNkLE9BQWdCO1FBTmhCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFDZCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBcEJwQyxVQUFLLEdBQVcsS0FBSyxDQUFDO1FBQ3RCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFHeEIsZ0JBQVcsR0FBVyxLQUFLLENBQUM7UUFFNUIsZUFBVSxHQUFjLEtBQUssQ0FBQztRQUM5Qix3QkFBbUIsR0FBYyxLQUFLLENBQUM7UUFJdkMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQVdiLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFYiwwQ0FBUSxHQUFSO1FBRUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9B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QStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQzNDLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixDQUFDO1NBQ3ZDLENBQUM7OytCQUFBO0lBOEhGLDhCQUFDO0FBQUQsQ0E1SEEsQUE0SEMsSUFBQTtBQTVIWSwrQkFBdUIsMEJBNEhuQyxDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytmb3JnZXRQYXNzd29yZC9mb3JnZXRQYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcixBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlLENvbXBhbnlTZXJ2aWNlLFNjcmlwdCB9IGZyb20gJy4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0b3IgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC92YWxpZGF0b3JzL2VtYWlsLnZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdyA6YW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ29nLWZvcmdldC1wYXNzd3JkJyxcclxuICB0ZW1wbGF0ZVVybDogJ2ZvcmdldFBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnZm9yZ2V0UGFzc3dvcmQuY29tcG9uZW50LmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgZm9yZ2V0UGFzc3dvcmRGb3JtOkZvcm1Hcm91cDtcclxuICBlcnJvcjpCb29sZWFuID0gZmFsc2U7XHJcbiAgc2lnblVwIDpCb29sZWFuID0gZmFsc2U7XHJcbiAgdHJhZmZpYyA6IGFueTtcclxuICBsZWFkcyA6YW55O1xyXG4gIGNvbXBhbnlUeXBlOkJvb2xlYW4gPSBmYWxzZTtcclxuICBlcnJvck1zZyAgOmFueSA7XHJcbiAgZW1haWxFcnJvciA6Qm9vbGVhbiAgPSAgZmFsc2U7XHJcbiAgZm9yZ2V0UGFzc3dvcmRFcnJvciA6Qm9vbGVhbiAgPSAgZmFsc2U7XHJcbiAgbWFpbFNlbnQ6U3RyaW5nO1xyXG4gIHJlc2V0TXNnIDpTdHJpbmc7XHJcbiAgY2FwdGNoYUNvZGUgOnN0cmluZztcclxuICBpc0NhcHRjaGEgOkJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NvbXBhbnlTZXJ2aWNlIDogQ29tcGFueVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyIDpSZW5kZXJlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50IDpFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2NyaXB0IDogU2NyaXB0XHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Wyd2ZXJpZnlDYWxsYmFjayddID0gdGhpcy52ZXJpZnlDYWxsYmFjay5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5mb3JnZXRQYXNzd29yZEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZm9yZ2V0ZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBFbWFpbFZhbGlkYXRvci5mb3JtYXRcclxuICAgICAgXSldXHJcbiAgICB9KTtcclxuICAgIGpRdWVyeS5tYXRlcmlhbC5pbml0KCk7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5fc2NyaXB0LmxvYWQoJ2NhcHRjaGEnKVxyXG4gICAgICAgIC50aGVuKChkYXRhOmFueSApPT57XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2FwY3RoYScsZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdTY3JpcHQgbm90IGxvYWRlZCcsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIGVycm9yU2hvdygpIHtcclxuICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZXJyb3JIaWRlKCkge1xyXG4gICAgdGhpcy5lcnJvciA9IGZhbHNlO1xyXG4gICAgdGhpcy5mb3JnZXRQYXNzd29yZEVycm9yID0gZmFsc2U7XHJcbiAgICBqUXVlcnkoJyNzdWNjZXNzLW1haWxTZW50JykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICB9XHJcblxyXG4gIGVycm9yRW1haWxIaWRlKCkge1xyXG4gICAgdGhpcy5lbWFpbEVycm9yID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjaGVja0VtYWlsKCkge1xyXG4gICAgICB0aGlzLmVycm9ySGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tDb21wYW55RW1haWwoKSB7XHJcbiAgICAgIHRoaXMuZXJyb3JFbWFpbEhpZGUoKTtcclxuICB9XHJcbiAgdmVyaWZ5Q2FsbGJhY2soY2FwOmFueSl7XHJcbiAgICB0aGlzLmNhcHRjaGFDb2RlID0gY2FwO1xyXG4gICAgdGhpcy5pc0NhcHRjaGEgPSB0cnVlO1xyXG4gICAgbGV0IGVtYWlsID0gdGhpcy5mb3JnZXRQYXNzd29yZEZvcm0udmFsdWUuZm9yZ2V0ZW1haWw7XHJcbiAgICBpZihlbWFpbCE9JycpXHJcbiAgICAgIGpRdWVyeSgnI2J0blJlc2V0JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuICB9XHJcbiAgZm9yZ2V0UGFzc3dvcmQoKSB7XHJcbiAgICBqUXVlcnkoJyNidG5SZXNldCcpLmFkZENsYXNzKCdsb2FkaW5nJyk7XHJcbiAgICBqUXVlcnkoJyNidG5SZXNldCcpLnRleHQoJ1BsZWFzZSBXYWl0Jyk7XHJcbiAgICBqUXVlcnkoJyNidG5SZXNldCcpLmF0dHIoJ2Rpc2FibGVkJyx0cnVlKTtcclxuICAgIC8qdGhpcy5fdXNlclNlcnZpY2UudmVyaWZ5Q2FwdGNoYSh0aGlzLmNhcHRjaGFDb2RlKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHsqL1xyXG4gICAgICAgICAgICB0aGlzLl91c2VyU2VydmljZS5mb3JnZXRQYXNzd29yZCh0aGlzLmNhcHRjaGFDb2RlLHRoaXMuZm9yZ2V0UGFzc3dvcmRGb3JtLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5hY3RpdmU9PT1mYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTXNnID0gJ1VzZXIgQWNjb3VudCBoYXMgYmVlbiBub3QgYXBwcm92ZWQgeWV0ISc7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRFcnJvciA9IHRoaXMuZXJyb3JNc2cgO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm1haWxTZW50ID0nV2UgaGF2ZSBzZW50IHlvdSBhbiBlbWFpbCB3aXRoIGEgbGluayB0byByZXNldCB5b3VyIHBhc3N3b3JkLicrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1BsZWFzZSBjaGVjayB5b3VyIGVtYWlsLCBjbGljayBvbiB0aGUgbGluayBhbmQgc2V0IGEgbmV3IHBhc3N3b3JkLic7XHJcbiAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI3N1Y2Nlc3MtbWFpbFNlbnQnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2J0blJlc2V0JykudGV4dCgnUmVzZXQgUGFzc3dvcmQnKTtcclxuICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYnRuUmVzZXQnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvciA6YW55ICkgPT4gIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGVycm9yX2NvZGUgPSBlcnJvci5lcnJvci5jb2RlO1xyXG4gICAgICAgICAgICAgICAgICBpZihlcnJvcl9jb2RlID09PSAnRV9VU0VSX0lOVkFMSURfQ0FQVENIQSd8fCBlcnJvcl9jb2RlPT09J0VfVVNFUl9OT19DQVBUQ0hBJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yTXNnID0gZXJyb3IuZXJyb3IuZXJyX21lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNc2cgPSBlcnJvci5lcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZm9yZ2V0UGFzc3dvcmRFcnJvciA9IHRoaXMuZXJyb3JNc2cgO1xyXG4gICAgICAgICAgICAgICAgICBqUXVlcnkoJyNidG5SZXNldCcpLnRleHQoJ1Jlc2V0IFBhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2J0blJlc2V0JykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYnRuUmVzZXQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gIGxvZ2luKCkge1xyXG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gIH1cclxuICBjbG9zZSgpIHtcclxuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICB9XHJcbn1cclxuIl19
