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
var router_1 = require('@angular/router');
var SignupComponent = (function () {
    function SignupComponent(fb, _userService, _companyService, _render, _element, _router) {
        this.fb = fb;
        this._userService = _userService;
        this._companyService = _companyService;
        this._render = _render;
        this._element = _element;
        this._router = _router;
        this.error = false;
        this.signUp = false;
        this.model = new User_1.User('', new User_1.Email('', true), '', '', '', false, '');
        this.emailError = false;
        this.isLeadExist = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('leads');
        this.signupForm = this.fb.group({
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required, email_validator_1.EmailValidator.format
                ])]
        });
        jQuery.material.init();
    };
    SignupComponent.prototype.errorShow = function () {
        this.error = true;
    };
    SignupComponent.prototype.errorHide = function () {
        this.error = false;
    };
    SignupComponent.prototype.errorEmailHide = function () {
        this.emailError = false;
    };
    SignupComponent.prototype.saveLeads = function () {
        var _this = this;
        jQuery('#btnSignUp').addClass('loading');
        jQuery('#btnSignUp').text('Please wait');
        jQuery('#btnSignUp').attr('disabled', true);
        var data = this.signupForm.value.email;
        localStorage.setItem('leads', data);
        if (window.location.href.indexOf('outgrow.co') >= 0) {
            fbq('track', 'Lead');
        }
        var signupSubscription = this._userService.leads(data)
            .subscribe(function (response) {
            if (response._id !== null) {
                jQuery('#leads').addClass('hide');
                _this._router.navigate(['/signup']);
            }
        }, function (error) {
            var error_code = error.error.code;
            if (error_code === 'E_UNEXPECTED' && error.error.err_message === 'Email is already registered with us, please log in!') {
                _this.login();
            }
            else {
                _this.errorMsg = (error.error.err_errors !== '') ? error.error.err_errors.email.message :
                    error.error.err_message;
            }
            _this.error = _this.errorMsg;
            jQuery('#btnSignUp').removeClass('loading');
            jQuery('#btnSignUp').attr('disabled', false);
            jQuery('#btnSignUp').html('Can\'t wait to launch my first calculator');
            signupSubscription.unsubscribe();
        });
    };
    SignupComponent.prototype.checkEmail = function () {
        this.errorHide();
    };
    SignupComponent.prototype.checkCompanyEmail = function () {
        this.errorEmailHide();
    };
    SignupComponent.prototype.login = function () {
        this._router.navigate(['/login']);
    };
    SignupComponent.prototype.reset = function () {
        this._router.navigate(['/forgetPassword']);
    };
    SignupComponent.prototype.close = function () {
        window.history.back();
    };
    SignupComponent.prototype.callGA = function () {
        ga('markettingteam.send', 'event', 'Signup', 'Click', 'Landingpage');
        _kmq.push(['record', 'Sign Up Click']);
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signup-component',
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.UserService, index_1.CompanyService, core_1.Renderer, core_1.ElementRef, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK3NpZ251cC9zaWdudXAtZmxvdy0xL3NpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNCQUE2RSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzlGLHFCQUF3RCxlQUFlLENBQUMsQ0FBQTtBQUN4RSxzQkFBMkMsbUNBQW1DLENBQUMsQ0FBQTtBQUMvRSxxQkFBNEIsUUFBUSxDQUFDLENBQUE7QUFDckMsZ0NBQStCLCtDQUErQyxDQUFDLENBQUE7QUFDL0UsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFpQnpDO0lBVUUseUJBQ29CLEVBQWUsRUFDZixZQUF5QixFQUN6QixlQUFnQyxFQUNoQyxPQUFpQixFQUNqQixRQUFvQixFQUNwQixPQUFjO1FBTGQsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQWRsQyxVQUFLLEdBQVcsS0FBSyxDQUFDO1FBQ3RCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsVUFBSyxHQUFHLElBQUksV0FBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLFlBQUssQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRzFELGVBQVUsR0FBYyxLQUFLLENBQUM7UUFFOUIsZ0JBQVcsR0FBYSxLQUFLLENBQUM7SUFRakIsQ0FBQztJQUVkLGtDQUFRLEdBQVI7UUFDRSxZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7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LG9DQUFVLEdBQVY7UUFDSyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDJDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQ0csTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUl6QixDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQW5ISDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixDQUFDO1NBQ3ZDLENBQUM7O3VCQUFBO0lBOEdGLHNCQUFDO0FBQUQsQ0E1R0EsQUE0R0MsSUFBQTtBQTVHWSx1QkFBZSxrQkE0RzNCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvY29tcG9uZW50cy8rc2lnbnVwL3NpZ251cC1mbG93LTEvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlLENvbXBhbnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgVXNlciwgRW1haWx9IGZyb20gICcuL1VzZXInO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRvciB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC92YWxpZGF0b3JzL2VtYWlsLnZhbGlkYXRvcic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZy9lbnYuY29uZmlnJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbmRlY2xhcmUgdmFyIGdhOmFueTtcclxuZGVjbGFyZSB2YXIgX2ttcTphbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5kZWNsYXJlIHZhciBmYnE6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzaWdudXAtY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJ3NpZ251cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3NpZ251cC5jb21wb25lbnQuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHNpZ251cEZvcm06IEZvcm1Hcm91cDtcclxuICBlcnJvcjpCb29sZWFuID0gZmFsc2U7XHJcbiAgc2lnblVwIDpCb29sZWFuID0gZmFsc2U7XHJcbiAgbW9kZWwgPSBuZXcgVXNlcignJyxuZXcgRW1haWwoJycsdHJ1ZSksJycsJycsJycsZmFsc2UsJycpO1xyXG4gIGxlYWRzIDphbnk7XHJcbiAgZXJyb3JNc2cgIDphbnkgO1xyXG4gIGVtYWlsRXJyb3IgOkJvb2xlYW4gID0gIGZhbHNlO1xyXG4gIHJlc2V0TXNnIDpTdHJpbmc7XHJcbiAgaXNMZWFkRXhpc3QgOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2NvbXBhbnlTZXJ2aWNlIDogQ29tcGFueVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyIDpSZW5kZXJlcixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50IDpFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXJcclxuICAgICAgICAgICAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsZWFkcycpO1xyXG4gICAgdGhpcy5zaWdudXBGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCwgRW1haWxWYWxpZGF0b3IuZm9ybWF0XHJcbiAgICAgIF0pXVxyXG4gICAgfSk7XHJcbiAgICBqUXVlcnkubWF0ZXJpYWwuaW5pdCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIGVycm9yU2hvdygpIHtcclxuICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZXJyb3JIaWRlKCkge1xyXG4gICAgdGhpcy5lcnJvciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZXJyb3JFbWFpbEhpZGUoKSB7XHJcbiAgICB0aGlzLmVtYWlsRXJyb3IgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNhdmVMZWFkcygpIHtcclxuICAgICAgalF1ZXJ5KCcjYnRuU2lnblVwJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgalF1ZXJ5KCcjYnRuU2lnblVwJykudGV4dCgnUGxlYXNlIHdhaXQnKTtcclxuICAgICAgalF1ZXJ5KCcjYnRuU2lnblVwJykuYXR0cignZGlzYWJsZWQnLHRydWUpO1xyXG4gICAgICBsZXQgZGF0YSA9IHRoaXMuc2lnbnVwRm9ybS52YWx1ZS5lbWFpbDtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xlYWRzJyxkYXRhKTtcclxuICAgICAgLyo9PT0gVHJhY2tpbmcgc25pcHBldCA9PT0qL1xyXG4gICAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdvdXRncm93LmNvJykgPj0gMCkgeyBmYnEoJ3RyYWNrJywgJ0xlYWQnKTsgfVxyXG4gICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgIGxldCBzaWdudXBTdWJzY3JpcHRpb24gPSB0aGlzLl91c2VyU2VydmljZS5sZWFkcyhkYXRhKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIChyZXNwb25zZSA6YW55ICk9PiB7XHJcbiAgICAgICAgICBpZihyZXNwb25zZS5faWQgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2xlYWRzJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgLy9qUXVlcnkoJyNzaWduVXAnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvc2lnbnVwJ10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgIChlcnJvciA6YW55ICkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JfY29kZSA9IGVycm9yLmVycm9yLmNvZGU7XHJcbiAgICAgICAgICAgIGlmKGVycm9yX2NvZGUgPT09J0VfVU5FWFBFQ1RFRCcgJiYgZXJyb3IuZXJyb3IuZXJyX21lc3NhZ2UgPT09J0VtYWlsIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCB3aXRoIHVzLCBwbGVhc2UgbG9nIGluIScpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgICAgICAgLy8gdGhpcy5lcnJvck1zZyA9ICcgRW1haWwgaXMgYWxyZWFkeSByZWdpc3RlcmVkIHdpdGggdXMhIFRyeSc7XHJcbiAgICAgICAgICAgICAgLy90aGlzLnJlc2V0TXNnID0gJ2luc3RlYWQgb3InO1xyXG4gICAgICAgICAgICAgIC8vdGhpcy5pc0xlYWRFeGlzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1zZyA9IChlcnJvci5lcnJvci5lcnJfZXJyb3JzICE9PScnICkgPyBlcnJvci5lcnJvci5lcnJfZXJyb3JzLmVtYWlsLm1lc3NhZ2UgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IuZXJyb3IuZXJyX21lc3NhZ2UgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmVycm9yTXNnIDtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjYnRuU2lnblVwJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjYnRuU2lnblVwJykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjYnRuU2lnblVwJykuaHRtbCgnQ2FuXFwndCB3YWl0IHRvIGxhdW5jaCBteSBmaXJzdCBjYWxjdWxhdG9yJyk7XHJcbiAgICAgICAgICAgIHNpZ251cFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgfVxyXG5cclxuIGNoZWNrRW1haWwoKSB7XHJcbiAgICAgIHRoaXMuZXJyb3JIaWRlKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja0NvbXBhbnlFbWFpbCgpIHtcclxuICAgICAgdGhpcy5lcnJvckVtYWlsSGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICB9XHJcblxyXG4gIHJlc2V0KCkge1xyXG4gICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZm9yZ2V0UGFzc3dvcmQnXSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICAgIC8qdmFyIGxpbmsgPSBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuICAgICAgdmFyIHByb3RvY29sID0gQ29uZmlnLlBST1RPQ09MO1xyXG4gICAgICBqUXVlcnkobG9jYXRpb24pLmF0dHIoJ2hyZWYnLHByb3RvY29sICsgbGluayk7Ki9cclxuICB9XHJcblxyXG4gIGNhbGxHQSgpIHtcclxuICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NpZ251cCcsICdDbGljaycsICdMYW5kaW5ncGFnZScpO1xyXG4gICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ1NpZ24gVXAgQ2xpY2snXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
