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
var index_1 = require('../../../../shared/services/index');
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(_userService, router, fb, loggedInService) {
        this._userService = _userService;
        this.router = router;
        this.fb = fb;
        this.loggedInService = loggedInService;
        this.success = false;
        this.error = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordForm = this.fb.group({
            old_password: [this.old_password, forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(8)
                ])],
            new_password: [this.new_password, forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(8)
                ])],
            confirm_password: [this.confirm_password, forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(8)
                ])]
        });
    };
    ChangePasswordComponent.prototype.matchPasswords = function (passwordKey, confirmPasswordKey) {
        var _this = this;
        return function (group) {
            var passwordInput = group.controls[passwordKey];
            var passwordConfirmationInput = group.controls[confirmPasswordKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                _this.error = true;
                _this.Message = 'Passwords Do not match';
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                _this.error = false;
            }
        };
    };
    ChangePasswordComponent.prototype.setFalse = function () {
        this.success = false;
        this.error = false;
    };
    ChangePasswordComponent.prototype.onSubmit = function (value) {
        var _this = this;
        jQuery('#updatePassword').text('Please Wait...');
        jQuery('#updatePassword').attr('disabled', true);
        value = this.changePasswordForm.value;
        var new_password = value.new_password;
        var old_password = value.old_password;
        var confirm_password = value.confirm_password;
        if (new_password !== confirm_password) {
            this.error = true;
            this.success = false;
            this.Message = "Your passwords don't match. Please retype your password to confirm";
            jQuery('#updatePassword').text('Update');
        }
        else {
            if (new_password === confirm_password) {
                this._userService.updatePassword(old_password, new_password)
                    .subscribe(function (response) {
                    ga('markettingteam.send', 'event', 'Settings', 'Submit', 'UpdatePassword');
                    _kmq.push(['record', 'Settings Password Updated']);
                    _this.Message = 'Password Updated Successfully';
                    window.toastNotification('Password Updated Successfully');
                    _this.resetFields();
                    _this.success = true;
                    _this.error = false;
                    jQuery('#updatePassword').text('Update');
                    jQuery('#updatePassword').attr('disabled', false);
                }, function (response) {
                    _this.Message = response.error.err_message;
                    _this.error = true;
                    _this.success = false;
                    jQuery('#updatePassword').text('Update');
                    jQuery('#updatePassword').attr('disabled', false);
                });
            }
            else {
                this.error = true;
                this.Message = 'Old Password and New Password Do not match';
                jQuery('#updatePassword').text('Update');
                jQuery('#updatePassword').attr('disabled', false);
            }
        }
        setTimeout(function () {
            this.setFalse();
        }.bind(this), 9000);
    };
    ChangePasswordComponent.prototype.resetFields = function () {
        jQuery('input').val('');
    };
    ChangePasswordComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case "UPDATEPASS":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'UpdatePassword');
                _kmq.push(['record', 'Settings Password Clicked']);
                break;
        }
    };
    ChangePasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-change-password',
            providers: [index_1.UserService],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            templateUrl: 'changepassword.component.html',
            styleUrls: ['changepassword.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.UserService, router_1.Router, forms_1.FormBuilder, index_1.LoggedInService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytTZXR0aW5ncy9hY2NvdW50L2NoYW5nZVBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0JBQTZFLGdCQUFnQixDQUFDLENBQUE7QUFDOUYscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELHVCQUFzQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3hDLHNCQUE0QyxtQ0FBbUMsQ0FBQyxDQUFBO0FBZ0JoRjtJQVNFLGlDQUNTLFlBQXlCLEVBQ3pCLE1BQWMsRUFDYixFQUFjLEVBQ2QsZUFBZ0M7UUFIakMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNiLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFYMUMsWUFBTyxHQUFXLEtBQUssQ0FBQztRQUN4QixVQUFLLEdBQVksS0FBSyxDQUFDO0lBWXZCLENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQ25ELGtCQUFVLENBQUMsUUFBUSxFQUFDLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztpQkFDNUMsQ0FBQyxDQUFDO1lBQ0gsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDbkQsa0JBQVUsQ0FBQyxRQUFRLEVBQUMsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUM1QyxDQUFDLENBQUM7WUFDSCxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDM0Qsa0JBQVUsQ0FB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QyxDQUFDLENBQUM7WUFDWixLQUFLLFlBQVk7Z0JBQ2YsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxLQUFLLENBQUM7UUFDVixDQUFDO0lBQ0gsQ0FBQztJQTVISDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbEIsUUFBUSxFQUFFLG9CQUFvQjtZQUMvQixTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO1lBQ3ZCLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixDQUFDO1lBQ3RDLFdBQVcsRUFBRSwrQkFBK0I7WUFDN0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDM0MsQ0FBQzs7K0JBQUE7SUFzSEYsOEJBQUM7QUFBRCxDQXBIQSxBQW9IQyxJQUFBO0FBcEhZLCtCQUF1QiwwQkFvSG5DLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK1NldHRpbmdzL2FjY291bnQvY2hhbmdlUGFzc3dvcmQvY2hhbmdlcGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sR3JvdXAgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvZ2dlZEluU2VydmljZSxVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnkgOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6YW55O1xyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1jaGFuZ2UtcGFzc3dvcmQnLFxyXG5cdHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICBkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcclxuICB0ZW1wbGF0ZVVybDogJ2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnY2hhbmdlcGFzc3dvcmQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNoYW5nZVBhc3N3b3JkRm9ybTogRm9ybUdyb3VwO1xyXG4gIHN1Y2Nlc3M6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIGVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgTWVzc2FnZTogc3RyaW5nO1xyXG4gIG9sZF9wYXNzd29yZDphbnk7XHJcbiAgbmV3X3Bhc3N3b3JkOmFueTtcclxuICBjb25maXJtX3Bhc3N3b3JkOmFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgZmI6Rm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIGxvZ2dlZEluU2VydmljZTogTG9nZ2VkSW5TZXJ2aWNlXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmRGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIG9sZF9wYXNzd29yZDogW3RoaXMub2xkX3Bhc3N3b3JkLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoOClcclxuICAgICAgXSldLFxyXG4gICAgICBuZXdfcGFzc3dvcmQ6IFt0aGlzLm5ld19wYXNzd29yZCwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpXHJcbiAgICAgIF0pXSxcclxuICAgICAgY29uZmlybV9wYXNzd29yZDogW3RoaXMuY29uZmlybV9wYXNzd29yZCwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpXHJcbiAgICAgIF0pXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBtYXRjaFBhc3N3b3JkcyhwYXNzd29yZEtleTogc3RyaW5nLCBjb25maXJtUGFzc3dvcmRLZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIChncm91cDogQ29udHJvbEdyb3VwKSA9PiB7XHJcbiAgICAgIGxldCBwYXNzd29yZElucHV0ID0gZ3JvdXAuY29udHJvbHNbcGFzc3dvcmRLZXldO1xyXG4gICAgICBsZXQgcGFzc3dvcmRDb25maXJtYXRpb25JbnB1dCA9IGdyb3VwLmNvbnRyb2xzW2NvbmZpcm1QYXNzd29yZEtleV07XHJcbiAgICAgIGlmIChwYXNzd29yZElucHV0LnZhbHVlICE9PSBwYXNzd29yZENvbmZpcm1hdGlvbklucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5NZXNzYWdlID0gJ1Bhc3N3b3JkcyBEbyBub3QgbWF0Y2gnO1xyXG4gICAgICAgIHJldHVybiBwYXNzd29yZENvbmZpcm1hdGlvbklucHV0LnNldEVycm9ycyh7bm90RXF1aXZhbGVudDogdHJ1ZX0pO1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0RmFsc2UoKSB7XHJcbiAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KHZhbHVlOiBhbnkpIHtcclxuICAgIGpRdWVyeSgnI3VwZGF0ZVBhc3N3b3JkJykudGV4dCgnUGxlYXNlIFdhaXQuLi4nKTtcclxuICAgIGpRdWVyeSgnI3VwZGF0ZVBhc3N3b3JkJykuYXR0cignZGlzYWJsZWQnLHRydWUpO1xyXG5cdFx0dmFsdWUgPSB0aGlzLmNoYW5nZVBhc3N3b3JkRm9ybS52YWx1ZTtcclxuICAgIGxldCBuZXdfcGFzc3dvcmQgPSB2YWx1ZS5uZXdfcGFzc3dvcmQ7XHJcbiAgICBsZXQgb2xkX3Bhc3N3b3JkID0gdmFsdWUub2xkX3Bhc3N3b3JkO1xyXG4gICAgbGV0IGNvbmZpcm1fcGFzc3dvcmQgPSB2YWx1ZS5jb25maXJtX3Bhc3N3b3JkO1xyXG5cclxuICAgIGlmIChuZXdfcGFzc3dvcmQgIT09IGNvbmZpcm1fcGFzc3dvcmQpIHtcclxuICAgICAgdGhpcy5lcnJvciA9IHRydWU7XHJcbiAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLk1lc3NhZ2UgPSBcIllvdXIgcGFzc3dvcmRzIGRvbid0IG1hdGNoLiBQbGVhc2UgcmV0eXBlIHlvdXIgcGFzc3dvcmQgdG8gY29uZmlybVwiO1xyXG4gICAgICBqUXVlcnkoJyN1cGRhdGVQYXNzd29yZCcpLnRleHQoJ1VwZGF0ZScpO1xyXG4gICAgICAvLyBqUXVlcnkoJyN1cGRhdGVQYXNzd29yZCcpLm1vdXNlT3V0KCk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGlmKG5ld19wYXNzd29yZCA9PT0gY29uZmlybV9wYXNzd29yZCkge1xyXG4gICAgICB0aGlzLl91c2VyU2VydmljZS51cGRhdGVQYXNzd29yZChvbGRfcGFzc3dvcmQsbmV3X3Bhc3N3b3JkKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvKi0tLS0gVHJhY2tpbmcgY29kZSBnb2VzIGhlcmUgLS0tLSovXHJcbiAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ1N1Ym1pdCcsICdVcGRhdGVQYXNzd29yZCcpO1xyXG4gICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgUGFzc3dvcmQgVXBkYXRlZCddKTtcclxuICAgICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgICAgICB0aGlzLk1lc3NhZ2UgPSdQYXNzd29yZCBVcGRhdGVkIFN1Y2Nlc3NmdWxseSc7XHJcbiAgICAgICAgICAgIHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignUGFzc3dvcmQgVXBkYXRlZCBTdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldEZpZWxkcygpO1xyXG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI3VwZGF0ZVBhc3N3b3JkJykudGV4dCgnVXBkYXRlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI3VwZGF0ZVBhc3N3b3JkJykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuICAgICAgICAgICAgLy8galF1ZXJ5KCcjdXBkYXRlUGFzc3dvcmQnKS5tb3VzZU91dCgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChyZXNwb25zZTphbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5NZXNzYWdlID0gcmVzcG9uc2UuZXJyb3IuZXJyX21lc3NhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjdXBkYXRlUGFzc3dvcmQnKS50ZXh0KCdVcGRhdGUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjdXBkYXRlUGFzc3dvcmQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyBqUXVlcnkoJyN1cGRhdGVQYXNzd29yZCcpLm1vdXNlT3V0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTWVzc2FnZSA9ICdPbGQgUGFzc3dvcmQgYW5kIE5ldyBQYXNzd29yZCBEbyBub3QgbWF0Y2gnO1xyXG4gICAgICAgIGpRdWVyeSgnI3VwZGF0ZVBhc3N3b3JkJykudGV4dCgnVXBkYXRlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcjdXBkYXRlUGFzc3dvcmQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG4gICAgICAgIC8vIGpRdWVyeSgnI3VwZGF0ZVBhc3N3b3JkJykubW91c2VPdXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLnNldEZhbHNlKCk7XHJcbiAgICB9LmJpbmQodGhpcyksIDkwMDApO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRGaWVsZHMoKSB7XHJcbiAgICBqUXVlcnkoJ2lucHV0JykudmFsKCcnKTtcclxuICB9XHJcblxyXG4gIGNhbGxHQShvcHQ6IHN0cmluZyl7XHJcbiAgICBzd2l0Y2ggKG9wdCkge1xyXG4gICAgICBjYXNlIFwiVVBEQVRFUEFTU1wiOlxyXG4gICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ0NsaWNrJywgJ1VwZGF0ZVBhc3N3b3JkJyk7XHJcbiAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ1NldHRpbmdzIFBhc3N3b3JkIENsaWNrZWQnXSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
