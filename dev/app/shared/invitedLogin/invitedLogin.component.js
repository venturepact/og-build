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
var InvitedLoginComponent = (function () {
    function InvitedLoginComponent(fb, _userService, router, loggedInSerivce, subDomianService, _cookieService) {
        this.fb = fb;
        this._userService = _userService;
        this.router = router;
        this.loggedInSerivce = loggedInSerivce;
        this.subDomianService = subDomianService;
        this._cookieService = _cookieService;
        this.error = false;
        this.ErrorMessageIsVisible = false;
    }
    InvitedLoginComponent.prototype.ngOnInit = function () {
        jQuery('#login').removeClass('hide');
        jQuery('#login').modal('show');
        this.loginForm = this.fb.group({
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(3), email_validator_1.EmailValidator.format
                ])],
            password: ['', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])]
        });
        jQuery.material.init();
    };
    InvitedLoginComponent.prototype.showErrorMessage = function () {
        this.ErrorMessageIsVisible = true;
    };
    InvitedLoginComponent.prototype.hideErrorMessage = function () {
        this.ErrorMessageIsVisible = false;
    };
    InvitedLoginComponent.prototype.onSubmit = function (value) {
        var _this = this;
        value = this.loginForm.value;
        jQuery('#loginSubmit').html('Please wait...');
        var link = window.location.hostname;
        var linkArray = link.split('.');
        var companyName = null;
        if (linkArray.length === 3 && linkArray[0] !== 'app')
            companyName = linkArray[0];
        this._userService.login(value.email, value.password, companyName)
            .subscribe(function (response) {
            console.log(response);
            if (response.token) {
                var storage = {
                    'token': response.token,
                    'user': response.user
                };
                if (response.user.role === 'ADMIN') {
                    console.log('Admin');
                    _this.router.navigate(['/admin/users']);
                }
                jQuery('#loginSubmit').html('Login');
                jQuery('#login').modal('hide');
                console.log(_this.ErrorMessageIsVisible);
                _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                if (_this.subDomianService.subDomain.is_sub_domain_url) {
                }
                _this.loggedInSerivce.login();
                _this._userService.token = response.token;
                var url = response.user_company.company.sub_domain + '.' + env_config_1.Config.APP_EXTENSION;
                if (!_this.subDomianService.subDomain.is_sub_domain_url)
                    jQuery(location).attr('href', 'http://' + url);
            }
        }, function (response) {
            jQuery('#loginSubmit').html('Login');
            _this.error = true;
            console.log(response);
            _this.ErrorMessage = response.error.message;
            console.log(response.error.message);
            _this.showErrorMessage();
        });
    };
    InvitedLoginComponent.prototype.signUp = function () {
        console.log('okkk');
        jQuery('#login').modal('hide');
        jQuery('#signUp').modal('show');
        jQuery('.slide1 ').removeClass('hide');
        jQuery('.slide2 ').addClass('hide');
    };
    InvitedLoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-invitedlogin',
            templateUrl: 'invitedLogin.component.html',
            styleUrls: ['invitedLogin.component.css', 'bootstrap-material/css/bootstrap-material-design.css', 'bootstrap-material/css/ripples.min.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.UserService, router_1.Router, index_1.LoggedInService, index_1.SubDomainService, index_1.CookieService])
    ], InvitedLoginComponent);
    return InvitedLoginComponent;
}());
exports.InvitedLoginComponent = InvitedLoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaW52aXRlZExvZ2luL2ludml0ZWRMb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNCQUE2RSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzlGLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN6QyxzQkFBMkUscUJBQXFCLENBQUMsQ0FBQTtBQUNqRyxnQ0FBK0IsaUNBQWlDLENBQUMsQ0FBQTtBQUNqRSwyQkFBdUIsMkJBQTJCLENBQUMsQ0FBQTtBQVluRDtJQU1FLCtCQUNVLEVBQWMsRUFDZCxZQUF3QixFQUN6QixNQUFjLEVBQ2IsZUFBZ0MsRUFDaEMsZ0JBQW1DLEVBQ25DLGNBQThCO1FBTDlCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUFDbkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVnhDLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsMEJBQXFCLEdBQVcsS0FBSyxDQUFDO0lBVWpDLENBQUM7SUFFTix3Q0FBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDN0IsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDO29CQUM3QixrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxnQ0FB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QUN6SSxVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztTQUN0QyxDQUFDOzs2QkFBQTtJQThGRiw0QkFBQztBQUFELENBNUZBLEFBNEZDLElBQUE7QUE1RlksNkJBQXFCLHdCQTRGakMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2ludml0ZWRMb2dpbi9pbnZpdGVkTG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSxMb2dnZWRJblNlcnZpY2UsU3ViRG9tYWluU2VydmljZSxDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdG9yIH0gZnJvbSAnLi8uLi92YWxpZGF0b3JzL2VtYWlsLnZhbGlkYXRvcic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdvZy1pbnZpdGVkbG9naW4nLFxyXG5cdHRlbXBsYXRlVXJsOiAnaW52aXRlZExvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnaW52aXRlZExvZ2luLmNvbXBvbmVudC5jc3MnLCdib290c3RyYXAtbWF0ZXJpYWwvY3NzL2Jvb3RzdHJhcC1tYXRlcmlhbC1kZXNpZ24uY3NzJywnYm9vdHN0cmFwLW1hdGVyaWFsL2Nzcy9yaXBwbGVzLm1pbi5jc3MnXSxcclxuXHRkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEludml0ZWRMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XHJcbiAgZXJyb3I6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBFcnJvck1lc3NhZ2VJc1Zpc2libGU6Qm9vbGVhbiA9IGZhbHNlO1xyXG4gIEVycm9yTWVzc2FnZTpTdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmYjpGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlLFxyXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBsb2dnZWRJblNlcml2Y2U6IExvZ2dlZEluU2VydmljZSxcclxuICAgIHByaXZhdGUgc3ViRG9taWFuU2VydmljZSA6IFN1YkRvbWFpblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9jb29raWVTZXJ2aWNlIDogQ29va2llU2VydmljZVxyXG4gICAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGpRdWVyeSgnI2xvZ2luJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgIGpRdWVyeSgnI2xvZ2luJykubW9kYWwoJ3Nob3cnKTtcclxuICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksIEVtYWlsVmFsaWRhdG9yLmZvcm1hdFxyXG4gICAgICBdKV0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gICAgICBdKV1cclxuICAgIH0pO1xyXG4gICAgalF1ZXJ5Lm1hdGVyaWFsLmluaXQoKTtcclxuICB9XHJcblxyXG4gIHNob3dFcnJvck1lc3NhZ2UoKSB7XHJcbiAgICB0aGlzLkVycm9yTWVzc2FnZUlzVmlzaWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBoaWRlRXJyb3JNZXNzYWdlKCkge1xyXG4gICAgdGhpcy5FcnJvck1lc3NhZ2VJc1Zpc2libGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KHZhbHVlOiBhbnkpIHtcclxuXHRcdHZhbHVlID0gdGhpcy5sb2dpbkZvcm0udmFsdWU7XHJcbiAgICBqUXVlcnkoJyNsb2dpblN1Ym1pdCcpLmh0bWwoJ1BsZWFzZSB3YWl0Li4uJyk7XHJcbiAgICBsZXQgbGluayA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuICAgIGxldCBsaW5rQXJyYXkgPSBsaW5rLnNwbGl0KCcuJyk7XHJcbiAgICBsZXQgY29tcGFueU5hbWUgOiBTdHJpbmcgPSBudWxsO1xyXG4gICAgaWYobGlua0FycmF5Lmxlbmd0aCA9PT0gMyAmJiBsaW5rQXJyYXlbMF0gIT09ICdhcHAnKVxyXG4gICAgICBjb21wYW55TmFtZSA9IGxpbmtBcnJheVswXTtcclxuICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmxvZ2luKHZhbHVlLmVtYWlsLCB2YWx1ZS5wYXNzd29yZCxjb21wYW55TmFtZSlcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgaWYocmVzcG9uc2UudG9rZW4pIHtcclxuICAgICAgICAgICAgbGV0IHN0b3JhZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICAndG9rZW4nIDogcmVzcG9uc2UudG9rZW4sXHJcbiAgICAgICAgICAgICAgICAndXNlcicgIDogcmVzcG9uc2UudXNlclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS51c2VyLnJvbGUgPT09ICdBRE1JTicpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRtaW4nKTtcclxuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi91c2VycyddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBqUXVlcnkoJyNsb2dpblN1Ym1pdCcpLmh0bWwoJ0xvZ2luJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2xvZ2luJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5FcnJvck1lc3NhZ2VJc1Zpc2libGUpO1xyXG4gICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmFnZScsSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb29raWVTZXJ2aWNlLmNyZWF0ZUNvb2tpZSgnc3RvcmFnZScsSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSksMyk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3ViRG9taWFuU2VydmljZS5zdWJEb21haW4uaXNfc3ViX2RvbWFpbl91cmwpIHtcclxuICAgICAgICAgICAgICAvLyBsZXQgd2luID0gKDxIVE1MSUZyYW1lRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblVybElmcmFtZScpKS5jb250ZW50V2luZG93O1xyXG4gICAgICAgICAgICAgIC8vIHdpbi5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7a2V5OiAnc3RvcmFnZScsIG1ldGhvZDogJ3NldCcsZGF0YSA6IHN0b3JhZ2V9KSwgJyonKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlZEluU2VyaXZjZS5sb2dpbigpO1xyXG4gICAgICAgICAgICB0aGlzLl91c2VyU2VydmljZS50b2tlbiA9IHJlc3BvbnNlLnRva2VuO1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gcmVzcG9uc2UudXNlcl9jb21wYW55LmNvbXBhbnkuc3ViX2RvbWFpbisnLicrQ29uZmlnLkFQUF9FWFRFTlNJT047XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnN1YkRvbWlhblNlcnZpY2Uuc3ViRG9tYWluLmlzX3N1Yl9kb21haW5fdXJsKVxyXG4gICAgICAgICAgICAgIGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicsJ2h0dHA6Ly8nK3VybCk7XHJcbiAgICAgICAgICB9XHJcblx0XHRcdFx0fSxcclxuICAgICAgICAocmVzcG9uc2U6YW55KSA9PiB7XHJcbiAgICAgICAgICBqUXVlcnkoJyNsb2dpblN1Ym1pdCcpLmh0bWwoJ0xvZ2luJyk7XHJcbiAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgIHRoaXMuRXJyb3JNZXNzYWdlID0gcmVzcG9uc2UuZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgc2lnblVwKCkge1xyXG4gICAgY29uc29sZS5sb2coJ29ra2snKTtcclxuICAgIGpRdWVyeSgnI2xvZ2luJykubW9kYWwoJ2hpZGUnKTtcclxuICAgIGpRdWVyeSgnI3NpZ25VcCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICBqUXVlcnkoJy5zbGlkZTEgJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgIGpRdWVyeSgnLnNsaWRlMiAnKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gIH1cclxufVxyXG4iXX0=
