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
var index_1 = require('./../../../shared/services/index');
var router_1 = require('@angular/router');
var SetPasswordComponent = (function () {
    function SetPasswordComponent(fb, _userService, _loggedInSerivce, _cookieService, _router) {
        this.fb = fb;
        this._userService = _userService;
        this._loggedInSerivce = _loggedInSerivce;
        this._cookieService = _cookieService;
        this._router = _router;
        this.error = false;
    }
    SetPasswordComponent.prototype.ngOnInit = function () {
        var link = window.location.hostname;
        this.company = link.split('.')[0];
        var url = window.location.pathname;
        this.tokenUrl = url.split('/')[2];
        this.setPasswordForm = this.fb.group({
            newPassword: [this.newPassword, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8)])],
            confirmPassword: [this.confirmPassword, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8)])]
        });
        jQuery.material.init();
    };
    SetPasswordComponent.prototype.errorShow = function () {
        this.error = true;
    };
    SetPasswordComponent.prototype.errorHide = function () {
        this.error = false;
        this.message = '';
    };
    SetPasswordComponent.prototype.setPassword = function (value) {
        var _this = this;
        var url = window.location.pathname;
        this.tokenUrl = url.split('/')[2];
        jQuery('#btnSetNewPassword').text('Please Wait...');
        jQuery('#btnSetNewPassword').attr('disabled', true);
        value = this.setPasswordForm.value;
        var new_password = value.newPassword;
        var confirm_password = value.confirmPassword;
        if (new_password === confirm_password) {
            var resetPassword_1 = this._userService.setNewPassword(confirm_password)
                .subscribe(function (response) {
                response.companyList.push(_this.company);
                if (response.token) {
                    var storage = {
                        'token': response.token,
                        'user': response.user,
                        'company_id': _this.company,
                        'company': JSON.parse(localStorage.getItem('lodashAuthToken')),
                        'companyList': response.companyList
                    };
                    _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                    _this._loggedInSerivce.login();
                    if (_this.tokenUrl === 'forgetPassword') {
                        var link = window.location.pathname;
                        var dashboard = link.split('/')[0] + '/dashboard';
                        jQuery(location).attr('href', dashboard);
                    }
                    else {
                        _this._router.navigateByUrl('/userApproval');
                    }
                }
            }, function (error) {
                _this.error = error.error.err_message;
                resetPassword_1.unsubscribe();
                jQuery('#btnSetNewPassword').text('Update');
                jQuery('#btnSetNewPassword').attr('disabled', false);
            });
        }
        else {
            this.message = 'Passwords Do not match';
            jQuery('#btnSetNewPassword').text('Update');
            jQuery('#btnSetNewPassword').attr('disabled', false);
        }
    };
    SetPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'set-password',
            templateUrl: 'setPassword.component.html',
            styleUrls: ['setPassword.component.css', 'custom-material.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.UserService, index_1.LoggedInService, index_1.CookieService, router_1.Router])
    ], SetPasswordComponent);
    return SetPasswordComponent;
}());
exports.SetPasswordComponent = SetPasswordComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytpbnZpdGVkVXNlci9zZXRQYXNzd29yZC9zZXRQYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNCQUE0RSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdGLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxzQkFBMkQsa0NBQWtDLENBQUMsQ0FBQTtBQUM5Rix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQVV6QztJQVFFLDhCQUNVLEVBQWUsRUFBUyxZQUF5QixFQUNqRCxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsT0FBZTtRQUhmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUNqRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBUnpCLFVBQUssR0FBYSxLQUFLLENBQUM7SUFTdEIsQ0FBQztJQUVGLHVDQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxHQUFHLEdBQVUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDcEMsV0FBVyxFQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENB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QUM7b0JBQ2hELENBQUM7Z0JBQ0gsQ0FBQztZQUNILENBQUMsRUFDRCxVQUFDLEtBQVU7Z0JBQ1QsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztnQkFDckMsZUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM1QixNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUNOLENBQUM7UUFDRixDQUFDO1FBQUEsSUFBSSxDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLHdCQUF3QixDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELENBQUM7SUFDSCxDQUFDO0lBMUZIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixFQUFDLHFCQUFxQixDQUFDO1lBQzlELFVBQVUsRUFBRSxDQUFDLGdDQUF3QixDQUFDO1NBQ3ZDLENBQUM7OzRCQUFBO0lBcUZGLDJCQUFDO0FBQUQsQ0FwRkEsQUFvRkMsSUFBQTtBQXBGWSw0QkFBb0IsdUJBb0ZoQyxDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytpbnZpdGVkVXNlci9zZXRQYXNzd29yZC9zZXRQYXNzd29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgLFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UsTG9nZ2VkSW5TZXJ2aWNlLENvb2tpZVNlcnZpY2UgfSAgZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyAgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NldC1wYXNzd29yZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdzZXRQYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3NldFBhc3N3b3JkLmNvbXBvbmVudC5jc3MnLCdjdXN0b20tbWF0ZXJpYWwuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldFBhc3N3b3JkQ29tcG9uZW50ICBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgc2V0UGFzc3dvcmRGb3JtIDogRm9ybUdyb3VwO1xyXG4gIG5ld1Bhc3N3b3JkIDogYW55O1xyXG4gIGNvbmZpcm1QYXNzd29yZCA6YW55O1xyXG4gIGVycm9yIDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBjb21wYW55OmFueTtcclxuICB0b2tlblVybCA6IHN0cmluZyA7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9sb2dnZWRJblNlcml2Y2UgOiBMb2dnZWRJblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9jb29raWVTZXJ2aWNlIDogQ29va2llU2VydmljZSxcclxuICAgIHByaXZhdGUgX3JvdXRlciA6Um91dGVyXHJcbiAgKXt9XHJcblxyXG4gICBuZ09uSW5pdCgpIHtcclxuICAgICB2YXIgbGluayA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuICAgICB0aGlzLmNvbXBhbnkgPSBsaW5rLnNwbGl0KCcuJylbMF07XHJcbiAgICAgdmFyIHVybCAgICAgICAgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgdGhpcy50b2tlblVybCA9IHVybC5zcGxpdCgnLycpWzJdO1xyXG4gICAgIHRoaXMuc2V0UGFzc3dvcmRGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIG5ld1Bhc3N3b3JkICAgICA6IFt0aGlzLm5ld1Bhc3N3b3JkLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpXSldLFxyXG4gICAgICBjb25maXJtUGFzc3dvcmQgOiBbdGhpcy5jb25maXJtUGFzc3dvcmQsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoOCldKV1cclxuICAgIH0pO1xyXG4gICAgalF1ZXJ5Lm1hdGVyaWFsLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGVycm9yU2hvdygpIHtcclxuICAgIHRoaXMuZXJyb3IgPSB0cnVlIDtcclxuICB9XHJcbiAgZXJyb3JIaWRlKCkge1xyXG4gICAgdGhpcy5lcnJvciA9IGZhbHNlIDtcclxuICAgIHRoaXMubWVzc2FnZSA9Jyc7XHJcbiAgfVxyXG5cclxuXHJcbiBzZXRQYXNzd29yZCh2YWx1ZTogYW55KSB7XHJcbiAgICB2YXIgdXJsICAgICAgICA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIHRoaXMudG9rZW5VcmwgPSB1cmwuc3BsaXQoJy8nKVsyXTtcclxuICAgIGpRdWVyeSgnI2J0blNldE5ld1Bhc3N3b3JkJykudGV4dCgnUGxlYXNlIFdhaXQuLi4nKTtcclxuICAgIGpRdWVyeSgnI2J0blNldE5ld1Bhc3N3b3JkJykuYXR0cignZGlzYWJsZWQnLHRydWUpO1xyXG5cdFx0dmFsdWUgPSB0aGlzLnNldFBhc3N3b3JkRm9ybS52YWx1ZTtcclxuICAgIGxldCBuZXdfcGFzc3dvcmQgPSB2YWx1ZS5uZXdQYXNzd29yZDtcclxuICAgIGxldCBjb25maXJtX3Bhc3N3b3JkID0gdmFsdWUuY29uZmlybVBhc3N3b3JkO1xyXG4gICAgaWYobmV3X3Bhc3N3b3JkID09PSBjb25maXJtX3Bhc3N3b3JkKSB7XHJcbiAgICAgIGxldCByZXNldFBhc3N3b3JkID0gdGhpcy5fdXNlclNlcnZpY2Uuc2V0TmV3UGFzc3dvcmQoY29uZmlybV9wYXNzd29yZClcclxuICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmNvbXBhbnlMaXN0KTtcclxuICAgICAgICAgICAgcmVzcG9uc2UuY29tcGFueUxpc3QucHVzaCh0aGlzLmNvbXBhbnkpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS50b2tlbikge1xyXG4gICAgICAgICAgICAgIGxldCBzdG9yYWdlID0ge1xyXG4gICAgICAgICAgICAgICAgICAndG9rZW4nICA6IHJlc3BvbnNlLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAndXNlcicgICA6IHJlc3BvbnNlLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICdjb21wYW55X2lkJzogdGhpcy5jb21wYW55LFxyXG4gICAgICAgICAgICAgICAgICAnY29tcGFueSc6SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9kYXNoQXV0aFRva2VuJykpLFxyXG4gICAgICAgICAgICAgICAgICAnY29tcGFueUxpc3QnOiByZXNwb25zZS5jb21wYW55TGlzdFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ3N0b3JhZ2UnLEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpLDMpO1xyXG4gICAgICAgICAgICAgIHRoaXMuX2xvZ2dlZEluU2VyaXZjZS5sb2dpbigpO1xyXG4gICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yYWdlJyxKU09OLnN0cmluZ2lmeShzdG9yYWdlKSk7XHJcbiAgICAgICAgICAgICAgaWYodGhpcy50b2tlblVybCA9PT0gJ2ZvcmdldFBhc3N3b3JkJykge1xyXG4gICAgICAgICAgICAgICAgIC8vdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJ2Rhc2hib2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgICBsZXQgbGluayA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgICAgICAgICAgICAgICAgbGV0IGRhc2hib2FyZCA9IGxpbmsuc3BsaXQoJy8nKVswXSsnL2Rhc2hib2FyZCc7XHJcbiAgICAgICAgICAgICAgICAgIGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicsIGRhc2hib2FyZCApO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvdXNlckFwcHJvdmFsJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKGVycm9yIDphbnkgKSA9PiAge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3IuZXJyb3IuZXJyX21lc3NhZ2U7XHJcbiAgICAgICAgICAgIHJlc2V0UGFzc3dvcmQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjYnRuU2V0TmV3UGFzc3dvcmQnKS50ZXh0KCdVcGRhdGUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjYnRuU2V0TmV3UGFzc3dvcmQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgdGhpcy5tZXNzYWdlID0gJ1Bhc3N3b3JkcyBEbyBub3QgbWF0Y2gnO1xyXG4gICAgICBqUXVlcnkoJyNidG5TZXROZXdQYXNzd29yZCcpLnRleHQoJ1VwZGF0ZScpO1xyXG4gICAgICBqUXVlcnkoJyNidG5TZXROZXdQYXNzd29yZCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
