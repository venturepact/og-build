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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var index_1 = require('./../../../../../shared/services/index');
var user_1 = require('../../../../../shared/models/user');
var email_validator_1 = require('./../../../../../shared/validators/email.validator');
var AccountDetailsComponent = (function () {
    function AccountDetailsComponent(_userService, _adminService, route, _script, router, fb) {
        var _this = this;
        this._userService = _userService;
        this._adminService = _adminService;
        this.route = route;
        this._script = _script;
        this.router = router;
        this.fb = fb;
        this.model = new user_1.User({});
        this.updateModel = new user_1.User({});
        this.edit_mode = false;
        this.timezones = [];
        this.loading = false;
        this.errorMsg = '';
        this.isSubmit = false;
        this.emailUpdate = '';
        this.pwdUpdate = '';
        this.message = '';
        this.pwd_message = '';
        this.email_verify = false;
        this.set_pwd_link = '';
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    AccountDetailsComponent.prototype.ngOnInit = function () {
        this.getUserDetails();
        this.getPwdLink();
        this.updateFormdetail = this.fb.group({
            name: [this.updateModel.name, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            phone: [this.updateModel.name, forms_1.Validators.compose([])],
            location: [this.updateModel.location, forms_1.Validators.compose([])],
            active: [this.updateModel.active, forms_1.Validators.compose([forms_1.Validators.required])],
            timezone: [this.updateModel.timezone, forms_1.Validators.compose([])],
        });
        this.emailForm = this.fb.group({
            email: [this.emailUpdate, forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(4), email_validator_1.EmailValidator.format
                ])]
        });
        this.pwdForm = this.fb.group({
            pwd: [this.pwdUpdate, forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(8),
                ])]
        });
    };
    AccountDetailsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._script.load('timeZoneMin', 'googleLocation')
            .then(function (data) {
            _this.initialize();
            _this.timezones = moment.tz.names();
            for (var timezone in _this.timezones) {
                _this.timezones[timezone] = _this.timezones[timezone] + ' ' + moment.tz(_this.timezones[timezone]).format('Z z');
            }
        })
            .catch(function (error) {
        });
    };
    AccountDetailsComponent.prototype.editMode = function () {
        if (this.edit_mode) {
            this.initialize();
        }
    };
    AccountDetailsComponent.prototype.initialize = function () {
        localStorage.removeItem('pid');
        var locationElement = document.getElementById('location');
        this.autocomplete = new google.maps.places.Autocomplete((locationElement), { types: ['(cities)'] });
        var self = this;
        google.maps.event.addListener(self.autocomplete, 'place_changed', function () {
            var place = this.getPlace();
            if (place.place_id) {
                self.isPlaceExist = true;
                self.updateModel.location = place.formatted_address;
                locationElement.value = place.formatted_address;
                localStorage.setItem('pid', self.model.location);
                jQuery('#saveBasicDetails').attr('disabled', false);
            }
        });
    };
    AccountDetailsComponent.prototype.getUserDetails = function () {
        var _this = this;
        this._userService.getUser(this.id)
            .subscribe(function (result) {
            _this.model = new user_1.User(result);
            _this.updateModel = new user_1.User(result);
            console.log(result, "user model");
            _this.emailUpdate = result.emails[0].email;
            _this.email_verify = result.emails[0].verification.complete;
            _this.loading = false;
            _this.edit_mode = false;
        });
    };
    AccountDetailsComponent.prototype.getPwdLink = function () {
        var _this = this;
        this._adminService.setPasswordLink(this.id)
            .subscribe(function (result) {
            _this.set_pwd_link = result;
        });
    };
    AccountDetailsComponent.prototype.verifyEmail = function () {
        var _this = this;
        this.loading = true;
        this._adminService.verifyEmail(this.model.id)
            .subscribe(function (result) {
            _this.model = new user_1.User(result);
            _this.updateModel = new user_1.User(result);
            console.log(result, "user model");
            _this.emailUpdate = result.emails[0].email;
            _this.email_verify = result.emails[0].verification.complete;
            _this.loading = false;
            _this.edit_mode = false;
        }, function (error) {
            console.log("error in verification of email", error);
        });
    };
    AccountDetailsComponent.prototype.chkLocation = function () {
        var pid = localStorage.getItem('pid');
        var locationElement = document.getElementById('location');
        var self = this;
        if (self.isPlaceExist === false && pid === null) {
            locationElement.value = '';
            localStorage.removeItem('pid');
            jQuery('#saveBasicDetails').attr('disabled', true);
        }
        else {
            jQuery('#saveBasicDetails').attr('disabled', false);
            locationElement.value = pid;
            self.model.location = locationElement.value;
        }
    };
    AccountDetailsComponent.prototype.companyNavigate = function (id) {
        console.log(id);
        this.router.navigate(['/admin/company/' + id]);
    };
    AccountDetailsComponent.prototype.updateUser = function () {
        var _this = this;
        console.log(this.updateModel.location);
        this.isSubmit = true;
        if (this.updateFormdetail.valid) {
            this.loading = true;
            this._userService.updateBasicDetails(this.updateModel, true).subscribe(function (result) {
                _this.model = new user_1.User(result);
                console.log(result, "this is the result man");
                _this.loading = false;
                _this.edit_mode = false;
            }, function (error) {
                console.log("update user error", error);
                _this.loading = false;
            });
        }
    };
    AccountDetailsComponent.prototype.updateEmail = function () {
        var _this = this;
        if (this.emailForm.valid) {
            jQuery('#updateEmail').html('Please Wait...');
            jQuery('#updateEmail').attr('disabled', true);
            console.log(this.model.emails[0].email, 'this is email');
            if (this.model.emails[0].email !== this.emailUpdate) {
                this.loading = true;
                this._adminService.updateEmail(this.model.emails[0].email, this.emailUpdate, this.model.id)
                    .subscribe(function (data) {
                    _this.loading = false;
                    _this.edit_mode = false;
                    _this.model = data;
                    _this.updateModel = data;
                    jQuery('#updateEmail').html('Change Email');
                    jQuery('#updateEmail').attr('disabled', false);
                    jQuery('#change-email').modal('hide');
                }, function (response) {
                    _this.edit_mode = true;
                    _this.loading = false;
                    var error_code = response.error.code;
                    if (error_code === 'E_UNIQUE_USERNAME_VALIDATION' ||
                        error_code === 'E_UNIQUE_EMAIL_VALIDATION' ||
                        error_code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION') {
                        _this.message = ' Email is already registered with us!';
                    }
                    else {
                        _this.message = (response.error.err_errors['emails.0.email']) ?
                            response.error.err_errors['emails.0.email'].message :
                            response.error.err_message;
                    }
                    jQuery('#updateEmail').html('Change Email');
                    jQuery('#updateEmail').attr('disabled', false);
                });
            }
            else {
                jQuery('#updateEmail').html('Change Email');
                jQuery('#updateEmail').attr('disabled', false);
                this.message = "Com'on atleast change something.";
            }
        }
    };
    AccountDetailsComponent.prototype.generatePwdLink = function () {
        var _this = this;
        this._adminService.generatePasswordLink(this.id)
            .subscribe(function (result) {
            _this.set_pwd_link = result;
        });
    };
    AccountDetailsComponent.prototype.updatePwd = function () {
        var _this = this;
        if (this.pwdForm.valid) {
            jQuery('#updatePwd').addClass('loading');
            jQuery('#updatePwd').text('Please Wait');
            jQuery('#updatePwd').attr('disabled', true);
            this.loading = true;
            this._adminService.updatePassword(this.pwdUpdate, this.model.id)
                .subscribe(function (response) {
                _this.loading = false;
                _this.edit_mode = false;
                if (response.active === false) {
                    _this.pwd_message = 'User Account has been not approved yet!';
                }
                else {
                    _this.pwd_message = 'Reset password successfull';
                    jQuery('#change-pwd').modal('hide');
                    jQuery('#updatePwd').text('Reset Password');
                    jQuery('#updatePwd').removeClass('loading');
                    jQuery('#updatePwd').attr('disabled', false);
                }
            }, function (error) {
                _this.loading = false;
                _this.edit_mode = true;
                _this.pwd_message = error.error.err_message;
                jQuery('#updatePwd').text('Reset Password');
                jQuery('#updatePwd').removeClass('loading');
                jQuery('#updatePwd').attr('disabled', false);
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AccountDetailsComponent.prototype, "companies", void 0);
    AccountDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-account-details',
            templateUrl: 'account-details.component.html',
            styleUrls: ['account-details.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [index_1.AdminService]
        }), 
        __metadata('design:paramtypes', [index_1.UserService, index_1.AdminService, router_1.ActivatedRoute, index_1.Script, router_1.Router, forms_1.FormBuilder])
    ], AccountDetailsComponent);
    return AccountDetailsComponent;
}());
exports.AccountDetailsComponent = AccountDetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi91c2Vycy9zaW5nbGUtdXNlci9jb21wb25lbnRzL2FjY291bnQtZGV0YWlscy9hY2NvdW50LWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0QsZUFBZSxDQUFDLENBQUE7QUFDdEUsc0JBQTZFLGdCQUFnQixDQUFDLENBQUE7QUFDOUYsdUJBQTBELGlCQUFpQixDQUFDLENBQUE7QUFDNUUsc0JBQWtELHdDQUF3QyxDQUFDLENBQUE7QUFDM0YscUJBQXFCLG1DQUFtQyxDQUFDLENBQUE7QUFDekQsZ0NBQStCLG9EQUFvRCxDQUFDLENBQUE7QUFjcEY7SUFxQkUsaUNBQ1UsWUFBeUIsRUFDekIsYUFBMkIsRUFDM0IsS0FBcUIsRUFDckIsT0FBZSxFQUNmLE1BQWMsRUFDZCxFQUFlO1FBM0IzQixpQkFzUUM7UUFoUFcsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBekJ6QixVQUFLLEdBQVMsSUFBSSxXQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsZ0JBQVcsR0FBUyxJQUFJLFdBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUlqQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUd6QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7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QVksQ0FBQztTQUN6QixDQUFDOzsrQkFBQTtJQXdRRiw4QkFBQztBQUFELENBdFFBLEFBc1FDLElBQUE7QUF0UVksK0JBQXVCLDBCQXNRbkMsQ0FBQSIsImZpbGUiOiJhcHAvYWRtaW4vdXNlcnMvc2luZ2xlLXVzZXIvY29tcG9uZW50cy9hY2NvdW50LWRldGFpbHMvYWNjb3VudC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T25Jbml0LCBDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlLCBTY3JpcHQsIEFkbWluU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvdXNlcic7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdG9yIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvdmFsaWRhdG9ycy9lbWFpbC52YWxpZGF0b3InO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDogYW55O1xyXG5kZWNsYXJlIHZhciBnb29nbGU6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ29nLWFjY291bnQtZGV0YWlscycsXHJcbiAgdGVtcGxhdGVVcmw6ICdhY2NvdW50LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydhY2NvdW50LWRldGFpbHMuY29tcG9uZW50LmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcclxuICBwcm92aWRlcnM6W0FkbWluU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgY29tcGFuaWVzOiBhbnlbXTtcclxuICBtb2RlbDogVXNlciA9IG5ldyBVc2VyKHt9KTtcclxuICB1cGRhdGVNb2RlbDogVXNlciA9IG5ldyBVc2VyKHt9KTtcclxuICB1cGRhdGVGb3JtZGV0YWlsOiBGb3JtR3JvdXA7XHJcbiAgZW1haWxGb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHdkRm9ybTogRm9ybUdyb3VwO1xyXG4gIGVkaXRfbW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHRpbWV6b25lczogYW55ID0gW107XHJcbiAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGF1dG9jb21wbGV0ZTogYW55O1xyXG4gIGlzUGxhY2VFeGlzdDogYm9vbGVhbjtcclxuICBlcnJvck1zZyA9ICcnO1xyXG4gIGlzU3VibWl0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgZW1haWxVcGRhdGU6IFN0cmluZyA9ICcnO1xyXG4gIHB3ZFVwZGF0ZTogU3RyaW5nID0gJyc7XHJcbiAgbWVzc2FnZTogU3RyaW5nID0gJyc7XHJcbiAgcHdkX21lc3NhZ2U6IFN0cmluZyA9ICcnO1xyXG4gIGVtYWlsX3ZlcmlmeSA6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBzZXRfcHdkX2xpbmsgOiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIGlkOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9hZG1pblNlcnZpY2U6IEFkbWluU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBfc2NyaXB0OiBTY3JpcHQsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXJcclxuICApIHtcclxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICB0aGlzLmlkID0gcGFyYW1zWydpZCddO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLmdldFVzZXJEZXRhaWxzKCk7XHJcbiAgICB0aGlzLmdldFB3ZExpbmsoKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUZvcm1kZXRhaWwgPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgbmFtZTogW3RoaXMudXBkYXRlTW9kZWwubmFtZSwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV0pXSxcclxuICAgICAgcGhvbmU6IFt0aGlzLnVwZGF0ZU1vZGVsLm5hbWUsIFZhbGlkYXRvcnMuY29tcG9zZShbXSldLFxyXG4gICAgICBsb2NhdGlvbjogW3RoaXMudXBkYXRlTW9kZWwubG9jYXRpb24sIFZhbGlkYXRvcnMuY29tcG9zZShbXSldLFxyXG4gICAgICBhY3RpdmU6IFt0aGlzLnVwZGF0ZU1vZGVsLmFjdGl2ZSwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICB0aW1lem9uZTogW3RoaXMudXBkYXRlTW9kZWwudGltZXpvbmUsIFZhbGlkYXRvcnMuY29tcG9zZShbXSldLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5lbWFpbEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFt0aGlzLmVtYWlsVXBkYXRlLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLCBFbWFpbFZhbGlkYXRvci5mb3JtYXRcclxuICAgICAgXSldXHJcbiAgICB9KTtcclxuXHJcbiAgICAgdGhpcy5wd2RGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIHB3ZDogW3RoaXMucHdkVXBkYXRlLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLFxyXG4gICAgICBdKV1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5fc2NyaXB0LmxvYWQoJ3RpbWVab25lTWluJywgJ2dvb2dsZUxvY2F0aW9uJylcclxuICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMudGltZXpvbmVzID0gbW9tZW50LnR6Lm5hbWVzKCk7XHJcbiAgICAgICAgZm9yIChsZXQgdGltZXpvbmUgaW4gdGhpcy50aW1lem9uZXMpIHtcclxuICAgICAgICAgIHRoaXMudGltZXpvbmVzW3RpbWV6b25lXSA9IHRoaXMudGltZXpvbmVzW3RpbWV6b25lXSArICcgJyArIG1vbWVudC50eih0aGlzLnRpbWV6b25lc1t0aW1lem9uZV0pLmZvcm1hdCgnWiB6Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnU2NyaXB0IG5vdCBsb2FkZWQnLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZWRpdE1vZGUoKSB7XHJcbiAgICBpZiAodGhpcy5lZGl0X21vZGUpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3BpZCcpO1xyXG4gICAgbGV0IGxvY2F0aW9uRWxlbWVudDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJyk7XHJcbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlKFxyXG4gICAgICAobG9jYXRpb25FbGVtZW50KSxcclxuICAgICAgeyB0eXBlczogWycoY2l0aWVzKSddIH1cclxuICAgICk7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihzZWxmLmF1dG9jb21wbGV0ZSwgJ3BsYWNlX2NoYW5nZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBwbGFjZSA9IHRoaXMuZ2V0UGxhY2UoKTtcclxuICAgICAgaWYgKHBsYWNlLnBsYWNlX2lkKSB7XHJcbiAgICAgICAgc2VsZi5pc1BsYWNlRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgIHNlbGYudXBkYXRlTW9kZWwubG9jYXRpb24gPSBwbGFjZS5mb3JtYXR0ZWRfYWRkcmVzcztcclxuICAgICAgICBsb2NhdGlvbkVsZW1lbnQudmFsdWUgPSBwbGFjZS5mb3JtYXR0ZWRfYWRkcmVzcztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGlkJywgPHN0cmluZz5zZWxmLm1vZGVsLmxvY2F0aW9uKTtcclxuICAgICAgICBqUXVlcnkoJyNzYXZlQmFzaWNEZXRhaWxzJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckRldGFpbHMoKSB7XHJcbiAgICB0aGlzLl91c2VyU2VydmljZS5nZXRVc2VyKHRoaXMuaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgVXNlcihyZXN1bHQpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTW9kZWwgPSBuZXcgVXNlcihyZXN1bHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCwgXCJ1c2VyIG1vZGVsXCIpO1xyXG4gICAgICAgIHRoaXMuZW1haWxVcGRhdGUgPSByZXN1bHQuZW1haWxzWzBdLmVtYWlsO1xyXG4gICAgICAgIHRoaXMuZW1haWxfdmVyaWZ5ID0gcmVzdWx0LmVtYWlsc1swXS52ZXJpZmljYXRpb24uY29tcGxldGU7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lZGl0X21vZGUgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0UHdkTGluaygpIHtcclxuICAgIHRoaXMuX2FkbWluU2VydmljZS5zZXRQYXNzd29yZExpbmsodGhpcy5pZClcclxuICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdDphbnkpID0+IHtcclxuICAgICAgICAgdGhpcy5zZXRfcHdkX2xpbmsgPSByZXN1bHQ7XHJcbiAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIHZlcmlmeUVtYWlsKCl7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5fYWRtaW5TZXJ2aWNlLnZlcmlmeUVtYWlsKDxzdHJpbmc+dGhpcy5tb2RlbC5pZClcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCk9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBVc2VyKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbCA9IG5ldyBVc2VyKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LCBcInVzZXIgbW9kZWxcIik7XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWFpbFVwZGF0ZSA9IHJlc3VsdC5lbWFpbHNbMF0uZW1haWw7XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWFpbF92ZXJpZnkgPSByZXN1bHQuZW1haWxzWzBdLnZlcmlmaWNhdGlvbi5jb21wbGV0ZTtcclxuICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLmVkaXRfbW9kZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnJvcik9PntcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGluIHZlcmlmaWNhdGlvbiBvZiBlbWFpbFwiLCBlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBjaGtMb2NhdGlvbigpIHtcclxuICAgIGxldCBwaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGlkJyk7XHJcbiAgICBsZXQgbG9jYXRpb25FbGVtZW50OiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmIChzZWxmLmlzUGxhY2VFeGlzdCA9PT0gZmFsc2UgJiYgcGlkID09PSBudWxsKSB7XHJcbiAgICAgIGxvY2F0aW9uRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGlkJyk7XHJcbiAgICAgIGpRdWVyeSgnI3NhdmVCYXNpY0RldGFpbHMnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgalF1ZXJ5KCcjc2F2ZUJhc2ljRGV0YWlscycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICBsb2NhdGlvbkVsZW1lbnQudmFsdWUgPSBwaWQ7XHJcbiAgICAgIHNlbGYubW9kZWwubG9jYXRpb24gPSBsb2NhdGlvbkVsZW1lbnQudmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wYW55TmF2aWdhdGUoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4vY29tcGFueS8nICsgaWRdKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVzZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVwZGF0ZU1vZGVsLmxvY2F0aW9uKTtcclxuICAgIHRoaXMuaXNTdWJtaXQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMudXBkYXRlRm9ybWRldGFpbC52YWxpZCkge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLl91c2VyU2VydmljZS51cGRhdGVCYXNpY0RldGFpbHModGhpcy51cGRhdGVNb2RlbCwgdHJ1ZSkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFVzZXIocmVzdWx0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQsIFwidGhpcyBpcyB0aGUgcmVzdWx0IG1hblwiKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVkaXRfbW9kZSA9IGZhbHNlO1xyXG4gICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSB1c2VyIGVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVFbWFpbCgpIHtcclxuICAgIGlmKHRoaXMuZW1haWxGb3JtLnZhbGlkKXtcclxuICAgICAgalF1ZXJ5KCcjdXBkYXRlRW1haWwnKS5odG1sKCdQbGVhc2UgV2FpdC4uLicpO1xyXG4gICAgICBqUXVlcnkoJyN1cGRhdGVFbWFpbCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubW9kZWwuZW1haWxzWzBdLmVtYWlsLCd0aGlzIGlzIGVtYWlsJyk7XHJcbiAgICAgIGlmICh0aGlzLm1vZGVsLmVtYWlsc1swXS5lbWFpbCAhPT0gdGhpcy5lbWFpbFVwZGF0ZSkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlLnVwZGF0ZUVtYWlsKHRoaXMubW9kZWwuZW1haWxzWzBdLmVtYWlsLCB0aGlzLmVtYWlsVXBkYXRlLCA8c3RyaW5nPnRoaXMubW9kZWwuaWQpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0X21vZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbCA9IGRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwgPSBkYXRhO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyN1cGRhdGVFbWFpbCcpLmh0bWwoJ0NoYW5nZSBFbWFpbCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyN1cGRhdGVFbWFpbCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNjaGFuZ2UtZW1haWwnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdF9tb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBlcnJvcl9jb2RlID0gcmVzcG9uc2UuZXJyb3IuY29kZTtcclxuICAgICAgICAgICAgaWYgKGVycm9yX2NvZGUgPT09ICdFX1VOSVFVRV9VU0VSTkFNRV9WQUxJREFUSU9OJyB8fFxyXG4gICAgICAgICAgICAgIGVycm9yX2NvZGUgPT09ICdFX1VOSVFVRV9FTUFJTF9WQUxJREFUSU9OJyB8fFxyXG4gICAgICAgICAgICAgIGVycm9yX2NvZGUgPT09ICdFX1VOSVFVRV9VTklERU5USUZJRURfVkFMSURBVElPTidcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJyBFbWFpbCBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQgd2l0aCB1cyEnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IChyZXNwb25zZS5lcnJvci5lcnJfZXJyb3JzWydlbWFpbHMuMC5lbWFpbCddKSA/XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvci5lcnJfZXJyb3JzWydlbWFpbHMuMC5lbWFpbCddLm1lc3NhZ2UgOlxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3IuZXJyX21lc3NhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgalF1ZXJ5KCcjdXBkYXRlRW1haWwnKS5odG1sKCdDaGFuZ2UgRW1haWwnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjdXBkYXRlRW1haWwnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgalF1ZXJ5KCcjdXBkYXRlRW1haWwnKS5odG1sKCdDaGFuZ2UgRW1haWwnKTtcclxuICAgICAgICBqUXVlcnkoJyN1cGRhdGVFbWFpbCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiQ29tJ29uIGF0bGVhc3QgY2hhbmdlIHNvbWV0aGluZy5cIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlUHdkTGluaygpe1xyXG4gICAgdGhpcy5fYWRtaW5TZXJ2aWNlLmdlbmVyYXRlUGFzc3dvcmRMaW5rKHRoaXMuaWQpXHJcbiAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQ6YW55KSA9PiB7XHJcbiAgICAgICAgIHRoaXMuc2V0X3B3ZF9saW5rID0gcmVzdWx0O1xyXG4gICAgICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgdXBkYXRlUHdkKCl7XHJcbiAgICBpZiAodGhpcy5wd2RGb3JtLnZhbGlkKSB7XHJcbiAgICAgIGpRdWVyeSgnI3VwZGF0ZVB3ZCcpLmFkZENsYXNzKCdsb2FkaW5nJyk7XHJcbiAgICAgIGpRdWVyeSgnI3VwZGF0ZVB3ZCcpLnRleHQoJ1BsZWFzZSBXYWl0Jyk7XHJcbiAgICAgIGpRdWVyeSgnI3VwZGF0ZVB3ZCcpLmF0dHIoJ2Rpc2FibGVkJyx0cnVlKTtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fYWRtaW5TZXJ2aWNlLnVwZGF0ZVBhc3N3b3JkKHRoaXMucHdkVXBkYXRlLDxzdHJpbmc+dGhpcy5tb2RlbC5pZClcclxuICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5lZGl0X21vZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBpZihyZXNwb25zZS5hY3RpdmU9PT1mYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wd2RfbWVzc2FnZSA9ICdVc2VyIEFjY291bnQgaGFzIGJlZW4gbm90IGFwcHJvdmVkIHlldCEnO1xyXG4gICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHdkX21lc3NhZ2UgPSdSZXNldCBwYXNzd29yZCBzdWNjZXNzZnVsbCc7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNjaGFuZ2UtcHdkJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI3VwZGF0ZVB3ZCcpLnRleHQoJ1Jlc2V0IFBhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyN1cGRhdGVQd2QnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjdXBkYXRlUHdkJykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuICAgICAgICAgICAgfX0sXHJcbiAgICAgICAgICAgIChlcnJvciA6YW55ICkgPT4gIHtcclxuICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLmVkaXRfbW9kZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5wd2RfbWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG4gICAgICAgICAgICAgIGpRdWVyeSgnI3VwZGF0ZVB3ZCcpLnRleHQoJ1Jlc2V0IFBhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgICAgalF1ZXJ5KCcjdXBkYXRlUHdkJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgICBqUXVlcnkoJyN1cGRhdGVQd2QnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19
