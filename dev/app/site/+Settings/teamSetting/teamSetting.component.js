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
var env_config_1 = require('./../../../config/env.config');
var email_validator_1 = require('./../../../shared/validators/email.validator');
var index_1 = require('../../../shared/services/index');
var company_1 = require('../../../shared/models/company');
var user_1 = require('../../../shared/models/user');
var TeamSettingComponent = (function () {
    function TeamSettingComponent(_companyService, fb, router, _userService, loggedInService, settingsCommunicationService, _cookieService, _script, _subDomainService) {
        this._companyService = _companyService;
        this.fb = fb;
        this.router = router;
        this._userService = _userService;
        this.loggedInService = loggedInService;
        this.settingsCommunicationService = settingsCommunicationService;
        this._cookieService = _cookieService;
        this._script = _script;
        this._subDomainService = _subDomainService;
        this.logedInUserName = '';
        this.subdomainExtension = '';
        this.protocol = '';
        this.myCompaniesList = [];
        this.currentCompany = '';
        this.currentCompanyUsers = [];
        this.searchedCompanyList = [];
        this.joinedCompanyList = [];
        this.invitedCompanyList = [];
        this.accessRequestUserName = '';
        this.accessRequestUserEmail = '';
        this.accessRequestUserId = '';
        this.hasRequest = false;
        this.isAdmin = false;
        this.isUserExist = false;
        this.adminCount = 0;
        this.selectedFilter = 'All Users';
        this.Message = '';
        this.leaveComp = '';
        this.selectedCompany = '';
        this.loading = false;
    }
    TeamSettingComponent.prototype.ngOnInit = function () {
        if (this._cookieService.readCookie('storage') !== null) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            this.logedInUserName = storage.user.username;
        }
        this.subdomainExtension = '.' + env_config_1.Config.APP_EXTENSION;
        this.protocol = env_config_1.Config.PROTOCOL;
        this.inviteUserForm = this.fb.group({
            userName: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern('^[a-zA-Z ]*$')])],
            userEmail: ['', forms_1.Validators.compose([forms_1.Validators.required, email_validator_1.EmailValidator.format])],
            userRole: ['MANAGER', forms_1.Validators.compose([forms_1.Validators.required])]
        });
        this.createCompanyForm = this.fb.group({
            companyname: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            domain: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern('^[a-zA-Z0-9]*$')])]
        });
        this.joinCompanyForm = this.fb.group({
            searchCompany: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])]
        });
        this.acceptRequestForm = this.fb.group({
            userRole: ['MANAGER', forms_1.Validators.compose([forms_1.Validators.required])]
        });
        jQuery.material.init();
        this.getCompany();
    };
    TeamSettingComponent.prototype.ngAfterViewInit = function () {
        this._script.load('slimScroll')
            .then(function (data) {
            jQuery('.slimscroll').slimscroll();
            jQuery('.modal').on('hidden.bs.modal', function () {
                jQuery('.success-message').addClass('hide');
                jQuery('.onoffswitch-checkbox').attr('checked', false);
            });
        })
            .catch(function (error) {
        });
    };
    TeamSettingComponent.prototype.getCompany = function () {
        this.isAdmin = false;
        var self = this;
        jQuery('#actuser').addClass('active');
        jQuery('#invuser').removeClass('active');
        jQuery('#accreq').removeClass('active');
        jQuery('#active-users').addClass('active');
        jQuery('#invited-users').removeClass('active');
        jQuery('#access-requests').removeClass('active');
        this.selectedCompany = window.location.href.split('//')[1].split('.')[0];
        if (this.selectedCompany !== 'app') {
            var subDomainExist_1 = this._companyService.isSubDomainExist(this.selectedCompany)
                .subscribe(function (success) {
                self.currentCompany = new company_1.Company(success);
                self.getSelectedCompanyUsers();
            }, function (error) {
                subDomainExist_1.unsubscribe();
            });
        }
    };
    TeamSettingComponent.prototype.getSelectedCompanyUsers = function () {
        var _this = this;
        var self = this;
        self.isAdmin = false;
        this.loading = true;
        var getCompanyUsers = this._companyService.getCompanyUsers(self.currentCompany.id)
            .subscribe(function (success) {
            self.hasRequest = false;
            self.currentCompanyUsers = [];
            self.adminCount = 0;
            success.forEach(function (user) {
                if (user.username !== self.logedInUserName)
                    self.currentCompanyUsers.push(new user_1.User(user));
                else {
                    self.currentCompanyUsers.unshift(new user_1.User(user));
                    if (user.user_company.role === 'ADMIN')
                        self.isAdmin = true;
                }
                if (self.adminCount < 1 && user.user_company.role === 'ADMIN' && user.username !== self.logedInUserName && user.user_company.active) {
                    self.adminCount++;
                }
                if (user.user_company.status === 'REQUESTED')
                    self.hasRequest = true;
                jQuery('#actuser').addClass('active');
                jQuery('#invuser').removeClass('active');
                jQuery('#accreq').removeClass('active');
            });
            _this.loading = false;
        }, function (error) {
            getCompanyUsers.unsubscribe();
        });
    };
    TeamSettingComponent.prototype.selectFilter = function (filter) {
        this.selectedFilter = filter;
    };
    TeamSettingComponent.prototype.waitForApprove = function () {
        window.toastNotification('Wait for Approval by Admin');
    };
    TeamSettingComponent.prototype.inviteUser = function () {
        var self = this;
        self.Message = '';
        jQuery('#btnInvite').text('Please Wait...').attr('disabled', true);
        jQuery('#success-addUser').addClass('hide');
        if (!self.exist(self.inviteUserForm.value.userEmail)) {
            var addUser_1 = self._companyService.addUser(self.inviteUserForm.value, this.currentCompany.id)
                .subscribe(function (success) {
                ga('markettingteam.send', 'event', 'Settings', 'Submit', 'AddUser');
                _kmq.push(['record', 'Builder Settings User Invited']);
                jQuery('#add-new-user input').val('');
                jQuery('#radioAdmin').prop('checked', false);
                jQuery('#radioManager').prop('checked', true);
                jQuery('#btnInvite').text('Add New User');
                jQuery('#add-new-user div.label-floating').addClass('is-empty');
                self.Message = 'User Invited Successfully!';
                window.toastNotification(self.Message);
                jQuery('#btnInvite').attr('disabled', false);
                jQuery('#add-new-user').modal('hide');
                self.getSelectedCompanyUsers();
            }, function (error) {
                var error_code = error.error.code;
                jQuery('#success-addUser').removeClass('hide');
                if (error_code === 'E_UNIQUE_USERNAME_VALIDATION' ||
                    error_code === 'E_UNIQUE_EMAIL_VALIDATION' ||
                    error_code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION' ||
                    error_code === 'E_USER_COMPANY_ALREADY_EXISTS') {
                    self.Message = ' This user is already a part of this company on Outgrow';
                }
                else if (error_code === 'E_USER_LIMIT_EXCEEDED') {
                    self.Message = error.error.err_message;
                    jQuery('#upgradeLink').html('<button type="button">UPGRADE</button>');
                }
                else {
                    if (error.error.err_errors['emails.0.email'].message === 'Please use a valid company email address to sign up for Outgrow :)') {
                        self.Message = 'You can only invite users with a valid company email address';
                    }
                    if (error.error.err_errors['emails.0.email'].message === 'Please try signing up with a real email address.') {
                        self.Message = 'The email address you have entered is invalid or does not exist.';
                    }
                    else {
                        self.Message = (error.error.err_errors['emails.0.email']) ?
                            error.error.err_errors['emails.0.email'].message :
                            error.error.err_message;
                    }
                }
                jQuery('#success-addUser').removeClass('hide');
                jQuery('#btnInvite').text('Add New User');
                jQuery('#btnInvite').attr('disabled', false);
                jQuery('#add-new-user input').val('');
                jQuery('#radioAdmin').prop('checked', false);
                jQuery('#radioManager').prop('checked', true);
                addUser_1.unsubscribe();
            });
        }
        else {
            self.Message = ' This user is already a part of this company on Outgrow';
            jQuery('#success-addUser').removeClass('hide');
            jQuery('#btnInvite').text('Add New User');
            jQuery('#btnInvite').attr('disabled', false);
        }
    };
    TeamSettingComponent.prototype.closeAddUser = function () {
        jQuery('#add-new-user').modal('hide');
        jQuery('#success-addUser').addClass('hide');
    };
    TeamSettingComponent.prototype.upgradeNavigation = function () {
        jQuery('#add-new-user').modal('hide');
        jQuery('#success-addUser').addClass('hide');
        this.router.navigate(['/settings/membership']);
    };
    TeamSettingComponent.prototype.exist = function (email) {
        for (var i = 0; i < this.currentCompanyUsers.length; i++) {
            if (this.currentCompanyUsers[i].emails[0].email === email) {
                return true;
            }
        }
        return false;
    };
    TeamSettingComponent.prototype.createCompany = function () {
        var self = this;
        self.Message = '';
        jQuery('#btnCreateCompany').text('Please Wait...').attr('disabled', true);
        var createCompany = self._companyService.createCompany(self.createCompanyForm.value)
            .subscribe(function (success) {
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'AddCompany');
            _kmq.push(['record', 'Builder Settings Company Added']);
            jQuery('#add-new-company input').val('');
            jQuery('#btnCreateCompany').text('Add New Company');
            jQuery('#add-new-company div.label-floating').addClass('is-empty');
            self.Message = 'Company Created Successfully!';
            jQuery('#add-new-company').modal('hide');
            window.toastNotification(self.Message);
            console.log("CULPRIT 2");
            jQuery(location).attr('href', self.protocol + self.createCompanyForm.value.companyname + self.subdomainExtension + '/settings');
        }, function (error) {
            self.Message = error.error.err_message;
            jQuery('#success-addCompany').removeClass('hide');
            jQuery('#btnCreateCompany').text('Add New Company');
            jQuery('#btnCreateCompany').attr('disabled', false);
            createCompany.unsubscribe();
        });
    };
    TeamSettingComponent.prototype.searchCompany = function () {
        var self = this;
        var joined = false;
        self.Message = '';
        self.searchedCompanyList = [];
        self.joinedCompanyList = [];
        if (self.joinCompanyForm.value.searchCompany.length > 2) {
            var searchCompany_1 = self._companyService.searchCompany(self.joinCompanyForm.value.searchCompany)
                .subscribe(function (success) {
                jQuery('#success-joinCompany').addClass('hide');
                self.searchedCompanyList = [];
                self.joinedCompanyList = [];
                self.invitedCompanyList = [];
                success.companies.forEach(function (company) {
                    joined = false;
                    for (var i = 0; i < self.myCompaniesList.length; i++) {
                        if (self.myCompaniesList[i].sub_domain === company.sub_domain) {
                            if (self.myCompaniesList[i].user_company.status === 'REQUESTED' && self.myCompaniesList[i].user_company.active === false) {
                                self.joinedCompanyList.push(new company_1.Company(company));
                                joined = true;
                            }
                            else if (self.myCompaniesList[i].user_company.status === 'INVITED' && self.myCompaniesList[i].user_company.active === false) {
                                self.invitedCompanyList.push(new company_1.Company(company));
                                joined = true;
                            }
                            break;
                        }
                    }
                    if (!joined) {
                        self.searchedCompanyList.push(new company_1.Company(company));
                    }
                });
                if (self.searchedCompanyList.length === 0 && self.joinedCompanyList.length === 0 && self.invitedCompanyList.length === 0) {
                    self.Message = 'No Companies Found';
                    jQuery('#success-joinCompany').removeClass('hide');
                }
            }, function (error) {
                self.Message = error.error.err_message;
                jQuery('#success-joinCompany').removeClass('hide');
                searchCompany_1.unsubscribe();
            });
        }
    };
    TeamSettingComponent.prototype.joinCompany = function (company) {
        var self = this;
        jQuery('#join' + company.id).html('Please Wait...');
        var joinCompany = self._companyService.joinCompany(company.id)
            .subscribe(function (success) {
            jQuery('#join' + company.id).html('Request sent');
            jQuery('#joined' + company.id).removeClass('companies-box-hover');
            jQuery('#joined' + company.id).addClass('companies-box-request');
        }, function (error) {
            joinCompany.unsubscribe();
        });
    };
    TeamSettingComponent.prototype.leaveCompany = function (company) {
        this.leaveComp = company.id;
        var self = this;
        if (self.adminCount >= 1) {
            if (self.myApprovedCompanies() > 1) {
                var leaveCompany_1 = self._companyService.leaveCompany(company.id)
                    .subscribe(function (success) {
                    self.Message = 'Successfully left ' + company.name;
                    window.toastNotification(self.Message);
                    self.getSelectedCompanyUsers();
                    var curUrlDomain = window.location.hostname.split('.')[0];
                    var redirectDomain = '';
                    if (curUrlDomain === company.sub_domain) {
                        for (var i = 0; i < self.myCompaniesList.length; i++) {
                            if (curUrlDomain !== self.myCompaniesList[i].sub_domain && self.myCompaniesList[i].user_company.active) {
                                redirectDomain = self.myCompaniesList[i].sub_domain + self.subdomainExtension;
                                break;
                            }
                        }
                        jQuery(location).attr('href', self.protocol + redirectDomain);
                    }
                }, function (error) {
                    self.Message = error.error.message;
                    window.toastNotification(self.Message);
                    leaveCompany_1.unsubscribe();
                });
            }
            else {
                jQuery('#leaveConfirmation').modal('show');
            }
        }
        else {
            self.Message = 'The company must have another admin!';
            window.toastNotification(self.Message);
        }
    };
    TeamSettingComponent.prototype.myApprovedCompanies = function () {
        var self = this;
        var approveCount = 0;
        var getCompany = self._companyService.getCompanies()
            .subscribe(function (success) {
            success.forEach(function (company) {
                if (company.user_company.status == 'APPROVED' || (company.user_company.status == 'INVITED' && company.user_company.active)) {
                    approveCount++;
                }
            });
        }, function (error) {
            getCompany.unsubscribe();
        });
        return approveCount;
    };
    TeamSettingComponent.prototype.deleteUser = function (user) {
        var self = this;
        self.Message = '';
        var delteUser = self._companyService.removeUser(self.currentCompany.id, user.id)
            .subscribe(function (success) {
            self.Message = user.name + ' Successfully removed';
            window.toastNotification(self.Message);
            self.getSelectedCompanyUsers();
        }, function (error) {
            self.Message = error.error.err_message;
            window.toastNotification(self.Message);
            delteUser.unsubscribe();
        });
    };
    TeamSettingComponent.prototype.makeManager = function (user) {
        var self = this;
        if (self.adminCount >= 1) {
            var makeManager_1 = self._companyService.makeManager(self.currentCompany.id, user.id)
                .subscribe(function (success) {
                if (user.username == self.logedInUserName) {
                    localStorage.setItem('role', 'MANAGER');
                }
                self.Message = 'User access has been changed successfully';
                window.toastNotification(self.Message);
                self.getSelectedCompanyUsers();
            }, function (error) {
                self.Message = error.error.err_message;
                window.toastNotification(self.Message);
                makeManager_1.unsubscribe();
            });
        }
        else {
            self.Message = 'Company must have at least one Admin';
            window.toastNotification(self.Message);
        }
    };
    TeamSettingComponent.prototype.makeAdmin = function (user) {
        var self = this;
        var makeAdmin = self._companyService.makeAdmin(self.currentCompany.id, user.id)
            .subscribe(function (success) {
            if (user.username == self.logedInUserName) {
                localStorage.setItem('role', 'ADMIN');
            }
            self.Message = 'User access has been changed successfully';
            window.toastNotification(self.Message);
            self.getSelectedCompanyUsers();
        }, function (error) {
            self.Message = error.error.err_message;
            window.toastNotification(self.Message);
            makeAdmin.unsubscribe();
        });
    };
    TeamSettingComponent.prototype.accessRequestPopup = function (user) {
        jQuery('.user' + user.id).attr('checked', true);
        this.accessRequestUserId = user.id;
        this.accessRequestUserName = user.name;
        this.accessRequestUserEmail = user.emails[0].email;
        jQuery('#accept-access-req').modal('show');
    };
    TeamSettingComponent.prototype.deleteMe = function () {
        jQuery('#leaveConfirmation').modal('hide');
        var self = this;
        var leaveCompany = self._companyService.leaveCompany(self.leaveComp)
            .subscribe(function (success) {
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'LeaveCompany');
            _kmq.push(['record', 'Builder Settings Left Company']);
            self.Message = 'Company Left Successfully';
            window.toastNotification(self.Message);
            self._userService.logout()
                .subscribe(function () {
                self.loggedInService.logout();
                window.location.assign(self.protocol + env_config_1.Config.PARENT_APP_DOMAIN);
            });
        }, function (error) {
            self.Message = error.error.message;
            window.toastNotification(self.Message);
            leaveCompany.unsubscribe();
        });
    };
    TeamSettingComponent.prototype.acceptRequest = function () {
        var self = this;
        self.Message = '';
        jQuery('#btnAccetpRequest').text('Please Wait...').attr('disabled', true);
        var acceptRequest = self._companyService.approveUser(self.accessRequestUserId, self.currentCompany.id, self.acceptRequestForm.value.userRole)
            .subscribe(function (success) {
            jQuery('#btnAccetpRequest').text('Approve Request');
            self.Message = 'User request accepted Successfully!';
            jQuery('#btnAccetpRequest').attr('disabled', false);
            jQuery('#accept-access-req').modal('hide');
            window.toastNotification(self.Message);
            self.getSelectedCompanyUsers();
        }, function (error) {
            self.Message = error.error.err_message;
            jQuery('#success-acceptUser').removeClass('hide');
            jQuery('#btnAccetpRequest').text('Approve Request');
            jQuery('#btnAccetpRequest').attr('disabled', false);
            acceptRequest.unsubscribe();
        });
    };
    TeamSettingComponent.prototype.closeModal = function () {
        jQuery('#add-new-user').modal('hide');
        jQuery('#add-new-user input').val('');
    };
    TeamSettingComponent.prototype.closeLayover = function () {
        setTimeout(function () {
            jQuery('.float-changes-updated').fadeIn()
                .animate({ bottom: -50 }, 800, function () { });
        }, 4000);
    };
    TeamSettingComponent.prototype.hideError = function () {
        this.Message = '';
        jQuery('#success-addUser').addClass('hide');
    };
    TeamSettingComponent.prototype.membDetails = function () {
        jQuery('#membDet').addClass('active');
        jQuery('#membDet-m').addClass('active');
        jQuery('#teamSet').removeClass('active');
        jQuery('#teamSet-m').removeClass('active');
        jQuery('#notif').removeClass('active');
        jQuery('#accSet').removeClass('active');
        jQuery('#accSet-m').removeClass('active');
        jQuery('#team-settings').addClass('hide');
        jQuery('#membership-details').removeClass('hide');
        jQuery('#noti-settings').addClass('hide');
        jQuery('#my-account').addClass('hide');
        jQuery('#membDet a').attr('aria-expanded', true);
        jQuery('#membDet-m a').attr('aria-expanded', true);
        jQuery('#teamSet a').attr('aria-expanded', false);
        jQuery('#teamSet-m a').attr('aria-expanded', false);
        jQuery('#notif a').attr('aria-expanded', false);
        jQuery('#accSet a').attr('aria-expanded', false);
        jQuery('#accSet-m a').attr('aria-expanded', false);
    };
    TeamSettingComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case "ADDUSERCLICK":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'AddUser');
                _kmq.push(['record', 'Builder Settings Add User Click']);
                break;
            case "ADDCOMPANY":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'AddCompany');
                _kmq.push(['record', 'Builder Settings Add Company Click']);
                break;
            case "JOINCOMPANY":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'JoinCompany');
                _kmq.push(['record', 'Builder Settings Join Company Click']);
                break;
            case "LEAVECOMPANY":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'LeaveCompany');
                _kmq.push(['record', 'Builder Settings Leave Company Click']);
                break;
            case "UPGRADEPLAN":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'UpgradeMembership');
                _kmq.push(['record', 'Builder Settings Upgrade Plan Click']);
                break;
            case "DELETEUSER":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'DeleteUser');
                _kmq.push(['record', 'Builder Settings Delete User Click']);
                break;
            case "MAKEMANAGER":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'MakeManager');
                _kmq.push(['record', 'Builder Settings Make Manager Click']);
                break;
            case "MAKEADMIN":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'MakeAdmin');
                _kmq.push(['record', 'Builder Settings Make Admin Click']);
                break;
        }
    };
    TeamSettingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-team-setting',
            templateUrl: 'teamSetting.component.html',
            styleUrls: ['teamSetting.component.css'],
            providers: [index_1.CompanyService, index_1.UserService, index_1.LoggedInService, index_1.SubDomainService],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.CompanyService, forms_1.FormBuilder, router_1.Router, index_1.UserService, index_1.LoggedInService, index_1.SettingsCommunicationService, index_1.CookieService, index_1.Script, index_1.SubDomainService])
    ], TeamSettingComponent);
    return TeamSettingComponent;
}());
exports.TeamSettingComponent = TeamSettingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytTZXR0aW5ncy90ZWFtU2V0dGluZy90ZWFtU2V0dGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2RCxlQUFlLENBQUMsQ0FBQTtBQUM3RSxzQkFBMkUsZ0JBQWdCLENBQUMsQ0FBQTtBQUM1Rix1QkFBeUMsaUJBQWlCLENBQUMsQ0FBQTtBQUMzRCwyQkFBdUIsOEJBQThCLENBQUMsQ0FBQTtBQUN0RCxnQ0FBK0IsOENBQThDLENBQUMsQ0FBQTtBQUM5RSxzQkFBNkgsZ0NBQWdDLENBQUMsQ0FBQTtBQUM5Six3QkFBd0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUN6RCxxQkFBb0IsNkJBQTZCLENBQUMsQ0FBQTtBQWVsRDtJQWtDQyw4QkFDUyxlQUErQixFQUNoQyxFQUFjLEVBQ2QsTUFBZSxFQUNmLFlBQTBCLEVBQ3pCLGVBQWdDLEVBQ2hDLDRCQUF5RCxFQUN6RCxjQUE0QixFQUM1QixPQUFnQixFQUNkLGlCQUFvQztRQVJ0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDaEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUN6QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE2QjtRQUN6RCxtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2Qsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTFDL0Msb0JBQWUsR0FBTyxFQUFFLENBQUM7UUFDekIsdUJBQWtCLEdBQVEsRUFBRSxDQUFDO1FBQzdCLGFBQVEsR0FBWSxFQUFFLENBQUM7UUFJdkIsb0JBQWUsR0FBTyxFQUFFLENBQUM7UUFDekIsbUJBQWMsR0FBTyxFQUFFLENBQUM7UUFFeEIsd0JBQW1CLEdBQU8sRUFBRSxDQUFDO1FBQzdCLHdCQUFtQixHQUFP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LE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxTQUFTLEVBQUUsQ0FBQyxzQkFBYyxFQUFDLG1CQUFXLEVBQUMsdUJBQWUsRUFBQyx3QkFBZ0IsQ0FBQztZQUN4RSxVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsRUFBRSwwQkFBaUIsQ0FBQztTQUN6RCxDQUFDOzs0QkFBQTtJQW1uQkYsMkJBQUM7QUFBRCxDQWpuQkEsQUFpbkJDLElBQUE7QUFqbkJZLDRCQUFvQix1QkFpbkJoQyxDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytTZXR0aW5ncy90ZWFtU2V0dGluZy90ZWFtU2V0dGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1JvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLy4uLy4uLy4uL2NvbmZpZy9lbnYuY29uZmlnJztcclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0b3IgfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC92YWxpZGF0b3JzL2VtYWlsLnZhbGlkYXRvcic7XHJcbmltcG9ydCB7Q29tcGFueVNlcnZpY2UsVXNlclNlcnZpY2UsTG9nZ2VkSW5TZXJ2aWNlLFNldHRpbmdzQ29tbXVuaWNhdGlvblNlcnZpY2UsQ29va2llU2VydmljZSxTY3JpcHQsU3ViRG9tYWluU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBhbnkgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2NvbXBhbnknO1xyXG5pbXBvcnQgeyBVc2VyfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3VzZXInO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ29nLXRlYW0tc2V0dGluZycsXHJcblx0dGVtcGxhdGVVcmw6ICd0ZWFtU2V0dGluZy5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJ3RlYW1TZXR0aW5nLmNvbXBvbmVudC5jc3MnXSxcclxuXHRwcm92aWRlcnM6IFtDb21wYW55U2VydmljZSxVc2VyU2VydmljZSxMb2dnZWRJblNlcnZpY2UsU3ViRG9tYWluU2VydmljZV0sXHJcblx0ZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGVhbVNldHRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cdGxvZ2VkSW5Vc2VyTmFtZTphbnkgPSAnJztcclxuXHRzdWJkb21haW5FeHRlbnNpb246IGFueSA9ICcnO1xyXG5cdHByb3RvY29sIDogc3RyaW5nID0gJyc7XHJcblxyXG5cdC8vIG15Q29tcGFuaWVzTGlzdFVwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcblx0bXlDb21wYW5pZXNMaXN0OmFueSA9IFtdO1xyXG5cdGN1cnJlbnRDb21wYW55OmFueSA9ICcnO1xyXG4gIC8vIGNvbXBhbnlfaWQgOiBhbnkgO1xyXG5cdGN1cnJlbnRDb21wYW55VXNlcnM6YW55ID0gW107XHJcblx0c2VhcmNoZWRDb21wYW55TGlzdDphbnkgPSBbXTtcclxuXHRqb2luZWRDb21wYW55TGlzdDphbnkgPSBbXTtcclxuICAgIGludml0ZWRDb21wYW55TGlzdDphbnkgPSBbXTtcclxuXHRhY2Nlc3NSZXF1ZXN0VXNlck5hbWU6YW55ID0gJyc7XHJcblx0YWNjZXNzUmVxdWVzdFVzZXJFbWFpbDphbnkgPSAnJztcclxuXHRhY2Nlc3NSZXF1ZXN0VXNlcklkOmFueSA9ICcnO1xyXG5cclxuXHRpbnZpdGVVc2VyRm9ybTpGb3JtR3JvdXA7XHJcblx0Y3JlYXRlQ29tcGFueUZvcm06Rm9ybUdyb3VwO1xyXG5cdGpvaW5Db21wYW55Rm9ybTpGb3JtR3JvdXA7XHJcblx0YWNjZXB0UmVxdWVzdEZvcm06IEZvcm1Hcm91cDtcclxuXHJcblx0aGFzUmVxdWVzdDpib29sZWFuID0gZmFsc2U7XHJcblx0aXNBZG1pbjpib29sZWFuID0gZmFsc2U7XHJcblx0aXNVc2VyRXhpc3Q6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdGFkbWluQ291bnQ6YW55ID0gMDtcclxuXHJcblx0c2VsZWN0ZWRGaWx0ZXI6YW55ID0gJ0FsbCBVc2Vycyc7XHJcblx0TWVzc2FnZTogc3RyaW5nID0gJyc7XHJcblxyXG5cdGxlYXZlQ29tcDphbnkgPSAnJztcclxuXHRzZWxlY3RlZENvbXBhbnk6YW55ID0gJyc7XHJcblx0bG9hZGluZzpib29sZWFuID0gZmFsc2U7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9jb21wYW55U2VydmljZTogQ29tcGFueVNlcnZpY2UsXHJcblx0XHRwdWJsaWMgZmI6Rm9ybUJ1aWxkZXIsXHJcblx0XHRwdWJsaWMgcm91dGVyIDogUm91dGVyLFxyXG5cdFx0cHVibGljIF91c2VyU2VydmljZSA6IFVzZXJTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBsb2dnZWRJblNlcnZpY2U6IExvZ2dlZEluU2VydmljZSxcclxuXHRcdHByaXZhdGUgc2V0dGluZ3NDb21tdW5pY2F0aW9uU2VydmljZTpTZXR0aW5nc0NvbW11bmljYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfY29va2llU2VydmljZTpDb29raWVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfc2NyaXB0IDogU2NyaXB0LFxyXG4gICAgcHJpdmF0ZSBfc3ViRG9tYWluU2VydmljZSA6IFN1YkRvbWFpblNlcnZpY2VcclxuXHRcdCl7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpICE9PSBudWxsKSB7XHJcblx0XHRcdGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZSh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcblx0XHRcdHRoaXMubG9nZWRJblVzZXJOYW1lID0gc3RvcmFnZS51c2VyLnVzZXJuYW1lO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zdWJkb21haW5FeHRlbnNpb24gPSAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuXHRcdHRoaXMucHJvdG9jb2wgPSBDb25maWcuUFJPVE9DT0w7XHJcblx0XHR0aGlzLmludml0ZVVzZXJGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcblx0XHRcdHVzZXJOYW1lOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxWYWxpZGF0b3JzLnBhdHRlcm4oJ15bYS16QS1aIF0qJCcpXSldLFxyXG5cdFx0XHR1c2VyRW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBFbWFpbFZhbGlkYXRvci5mb3JtYXRdKV0sXHJcblx0XHRcdHVzZXJSb2xlIDogWydNQU5BR0VSJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuY3JlYXRlQ29tcGFueUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuXHRcdFx0Y29tcGFueW5hbWUgOiBbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpXSldLFxyXG5cdFx0XHRkb21haW4gOiBbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFZhbGlkYXRvcnMucGF0dGVybignXlthLXpBLVowLTldKiQnKV0pXVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmpvaW5Db21wYW55Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG5cdFx0XHRzZWFyY2hDb21wYW55OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKV1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5hY2NlcHRSZXF1ZXN0Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG5cdFx0XHR1c2VyUm9sZSA6IFsnTUFOQUdFUicsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXVxyXG5cdFx0fSk7XHJcblx0XHQvL3RoaXMuZ2V0TXlDb21wYW5pZXMoKTtcclxuXHRcdGpRdWVyeS5tYXRlcmlhbC5pbml0KCk7XHJcblx0XHR0aGlzLmdldENvbXBhbnkoKTtcclxuXHR9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHRcdHRoaXMuX3NjcmlwdC5sb2FkKCdzbGltU2Nyb2xsJylcclxuXHRcdFx0LnRoZW4oKGRhdGE6YW55ICk9PntcclxuXHRcdFx0XHRqUXVlcnkoJy5zbGltc2Nyb2xsJykuc2xpbXNjcm9sbCgpO1xyXG5cdFx0XHRcdGpRdWVyeSgnLm1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRqUXVlcnkoJy5zdWNjZXNzLW1lc3NhZ2UnKS5hZGRDbGFzcygnaGlkZScpO1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcub25vZmZzd2l0Y2gtY2hlY2tib3gnKS5hdHRyKCdjaGVja2VkJyxmYWxzZSk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycm9yKT0+e1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coJ1NjcmlwdCBub3QgbG9hZGVkJywgZXJyb3IpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG4vKlx0Z2V0TXlDb21wYW5pZXMoKSB7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0XHRzZWxmLl9jb21wYW55U2VydmljZS5nZXRDb21wYW5pZXMoKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChzdWNjZXNzOmFueSk9PiB7XHJcblx0XHRcdFx0XHRzZWxmLm15Q29tcGFuaWVzTGlzdCA9IFtdO1xyXG5cdFx0XHRcdFx0c3VjY2Vzcy5mb3JFYWNoKChjb21wYW55OmFueSk9PiB7XHJcblx0XHRcdFx0XHRcdGlmKGNvbXBhbnkudXNlcl9jb21wYW55LnN0YXR1cyAhPT0gJ0RFTEVURUQnICYmIGNvbXBhbnkudXNlcl9jb21wYW55LnN0YXR1cyAhPT0gJ0xFRlQnKVxyXG5cdFx0XHRcdFx0XHRcdHNlbGYubXlDb21wYW5pZXNMaXN0LnB1c2gobmV3IENvbXBhbnkoY29tcGFueSkpO1xyXG5cdFx0XHRcdFx0XHRpZihjb21wYW55LnVzZXJfY29tcGFueS5zdGF0dXMgPT0gJ0FQUFJPVkVEJyB8fCAoY29tcGFueS51c2VyX2NvbXBhbnkuc3RhdHVzID09ICdJTlZJVEVEJyAmJiBjb21wYW55LnVzZXJfY29tcGFueS5hY3RpdmUpKXtcclxuXHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdENvbXBhbnkobmV3IENvbXBhbnkoY29tcGFueSkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHNlbGYuc2V0dGluZ3NDb21tdW5pY2F0aW9uU2VydmljZS51cGRhdGVDb21wYW55TGlzdChzZWxmLm15Q29tcGFuaWVzTGlzdCk7XHJcblx0XHRcdFx0XHQvLyBzZWxmLm15Q29tcGFuaWVzTGlzdFVwZGF0ZWQuZW1pdChzZWxmLm15Q29tcGFuaWVzTGlzdCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnY29tcCBsaXN0JyxzZWxmLm15Q29tcGFuaWVzTGlzdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdnZXRNeUNvbXBhbmllcyBUUycsIGVycm9yLmVycm9yLmVycl9tZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fSovXHJcblx0Z2V0Q29tcGFueSgpIHtcclxuXHRcdHRoaXMuaXNBZG1pbiA9IGZhbHNlO1xyXG5cdFx0Ly8gdGhpcy5jdXJyZW50Q29tcGFueSA9IG5ldyBDb21wYW55KG51bGwpO1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0alF1ZXJ5KCcjYWN0dXNlcicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdGpRdWVyeSgnI2ludnVzZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRqUXVlcnkoJyNhY2NyZXEnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRqUXVlcnkoJyNhY3RpdmUtdXNlcnMnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRqUXVlcnkoJyNpbnZpdGVkLXVzZXJzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0alF1ZXJ5KCcjYWNjZXNzLXJlcXVlc3RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0dGhpcy5zZWxlY3RlZENvbXBhbnkgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnLy8nKVsxXS5zcGxpdCgnLicpWzBdO1xyXG5cdFx0aWYodGhpcy5zZWxlY3RlZENvbXBhbnkgIT09ICdhcHAnKSB7XHJcblx0XHRsZXQgc3ViRG9tYWluRXhpc3QgPVx0dGhpcy5fY29tcGFueVNlcnZpY2UuaXNTdWJEb21haW5FeGlzdCh0aGlzLnNlbGVjdGVkQ29tcGFueSlcclxuXHRcdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0KHN1Y2Nlc3M6YW55KT0+IHtcclxuXHRcdFx0XHRcdFx0c2VsZi5jdXJyZW50Q29tcGFueSA9IG5ldyBDb21wYW55KHN1Y2Nlc3MpO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmdldFNlbGVjdGVkQ29tcGFueVVzZXJzKCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KGVycm9yOmFueSk9PiB7XHJcblx0XHRcdFx0XHRcdHN1YkRvbWFpbkV4aXN0LnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuICAgICAgLy8gc2VsZi5jb21wYW55X2lkID0gc2VsZi5fc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uY29tcGFueV9pZDtcclxuXHRcdH1cclxuXHR9XHJcblx0Z2V0U2VsZWN0ZWRDb21wYW55VXNlcnMoKXtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdHNlbGYuaXNBZG1pbiA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHRcdGxldCBnZXRDb21wYW55VXNlcnMgPSB0aGlzLl9jb21wYW55U2VydmljZS5nZXRDb21wYW55VXNlcnMoc2VsZi5jdXJyZW50Q29tcGFueS5pZClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoc3VjY2VzczphbnkpPT4ge1xyXG5cdFx0XHRcdFx0c2VsZi5oYXNSZXF1ZXN0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRzZWxmLmN1cnJlbnRDb21wYW55VXNlcnMgPSBbXTtcclxuXHRcdFx0XHRcdHNlbGYuYWRtaW5Db3VudCA9IDA7XHJcblx0XHRcdFx0XHRzdWNjZXNzLmZvckVhY2goKHVzZXI6YW55KT0+e1xyXG5cdFx0XHRcdFx0XHRpZih1c2VyLnVzZXJuYW1lICE9PSBzZWxmLmxvZ2VkSW5Vc2VyTmFtZSlcclxuXHRcdFx0XHRcdFx0XHRzZWxmLmN1cnJlbnRDb21wYW55VXNlcnMucHVzaChuZXcgVXNlcih1c2VyKSk7XHJcblx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGYuY3VycmVudENvbXBhbnlVc2Vycy51bnNoaWZ0KG5ldyBVc2VyKHVzZXIpKTtcclxuXHRcdFx0XHRcdFx0XHRpZih1c2VyLnVzZXJfY29tcGFueS5yb2xlID09PSAnQURNSU4nKVxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5pc0FkbWluID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZihzZWxmLmFkbWluQ291bnQgPCAxICYmIHVzZXIudXNlcl9jb21wYW55LnJvbGUgPT09ICdBRE1JTicgJiYgdXNlci51c2VybmFtZSAhPT0gc2VsZi5sb2dlZEluVXNlck5hbWUgJiYgdXNlci51c2VyX2NvbXBhbnkuYWN0aXZlKXtcclxuXHRcdFx0XHRcdFx0XHRzZWxmLmFkbWluQ291bnQrKztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZih1c2VyLnVzZXJfY29tcGFueS5zdGF0dXMgPT09ICdSRVFVRVNURUQnKVxyXG5cdFx0XHRcdFx0XHRcdHNlbGYuaGFzUmVxdWVzdCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdGpRdWVyeSgnI2FjdHVzZXInKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdGpRdWVyeSgnI2ludnVzZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdGpRdWVyeSgnI2FjY3JlcScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+IHtcclxuXHRcdFx0XHRcdGdldENvbXBhbnlVc2Vycy51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblx0c2VsZWN0RmlsdGVyKGZpbHRlcjphbnkpIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWRGaWx0ZXIgPSBmaWx0ZXI7XHJcblx0fVxyXG5cdHdhaXRGb3JBcHByb3ZlKCkge1xyXG5cdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdXYWl0IGZvciBBcHByb3ZhbCBieSBBZG1pbicpO1xyXG5cdH1cclxuXHRpbnZpdGVVc2VyKCkge1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0c2VsZi5NZXNzYWdlID0gJyc7XHJcblx0XHRqUXVlcnkoJyNidG5JbnZpdGUnKS50ZXh0KCdQbGVhc2UgV2FpdC4uLicpLmF0dHIoJ2Rpc2FibGVkJyx0cnVlKTtcclxuXHRcdGpRdWVyeSgnI3N1Y2Nlc3MtYWRkVXNlcicpLmFkZENsYXNzKCdoaWRlJyk7XHJcblx0XHQvL3NlbGYuaXNVc2VyRXhpc3QgPSBmYWxzZTtcclxuXHRcdC8vY29uc29sZS5sb2coJ3NlbCcsc2VsZi5jdXJyZW50Q29tcGFueSk7XHJcblx0XHQvKmZvcih2YXIgaT0wOyBpPHNlbGYuY3VycmVudENvbXBhbnlVc2Vycy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGlmKHVzZXIuZW1haWxzWzBdLmVtYWlsID09PSBzZWxmLmludml0ZVVzZXJGb3JtLnZhbHVlLnVzZXJFbWFpbCl7XHJcblx0XHRcdFx0c2VsZi5pc1VzZXJzRXhpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZihzZWxmLmlzVXNlckV4aXN0KXtcclxuXHRcdFx0c2VsZi5NZXNzYWdlID0gJ1VzZXIgd2l0aCAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KyBzZWxmLmludml0ZVVzZXJGb3JtLnZhbHVlLnVzZXJFbWFpbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCsgJ2VtYWlsIGlzIGFscmVhZHkgaW4gJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCsgc2VsZi5jdXJyZW50Q29tcGFueS5uYW1lXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KyAnIGNvbXBhbnknO1xyXG5cdFx0XHRqUXVlcnkoJyNzdWNjZXNzLWFkZFVzZXInKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG5cdFx0XHRqUXVlcnkoJyNidG5JbnZpdGUnKS50ZXh0KCdBZGQgTmV3IFVzZXInKTtcclxuXHRcdH1cclxuXHRcdGVsc2V7Ki9cclxuICAgICAgICAgICAgaWYoIXNlbGYuZXhpc3Qoc2VsZi5pbnZpdGVVc2VyRm9ybS52YWx1ZS51c2VyRW1haWwpKXtcclxuICAgIFx0XHRsZXQgYWRkVXNlciA9IHNlbGYuX2NvbXBhbnlTZXJ2aWNlLmFkZFVzZXIoc2VsZi5pbnZpdGVVc2VyRm9ybS52YWx1ZSwgdGhpcy5jdXJyZW50Q29tcGFueS5pZClcclxuICAgIFx0XHRcdFx0LnN1YnNjcmliZShcclxuICAgIFx0XHRcdFx0XHQoc3VjY2VzczphbnkpPT4ge1xyXG4gICAgXHRcdFx0XHRcdFx0LyotLS0tIFRyYWNraW5nIGV2ZW50IGNvZGUgaGVyZSAtLS0tKi9cclxuICAgIFx0XHRcdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ1N1Ym1pdCcsICdBZGRVc2VyJyk7XHJcblx0XHRcdFx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgU2V0dGluZ3MgVXNlciBJbnZpdGVkJ10pO1xyXG4gICAgXHRcdFx0XHRcdFx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIFx0XHRcdFx0XHRcdGpRdWVyeSgnI2FkZC1uZXctdXNlciBpbnB1dCcpLnZhbCgnJyk7XHJcbiAgICBcdFx0XHRcdFx0XHRqUXVlcnkoJyNyYWRpb0FkbWluJykucHJvcCgnY2hlY2tlZCcsZmFsc2UpO1xyXG4gICAgXHRcdFx0XHRcdFx0alF1ZXJ5KCcjcmFkaW9NYW5hZ2VyJykucHJvcCgnY2hlY2tlZCcsdHJ1ZSk7XHJcbiAgICBcdFx0XHRcdFx0XHRqUXVlcnkoJyNidG5JbnZpdGUnKS50ZXh0KCdBZGQgTmV3IFVzZXInKTtcclxuICAgIFx0XHRcdFx0XHRcdGpRdWVyeSgnI2FkZC1uZXctdXNlciBkaXYubGFiZWwtZmxvYXRpbmcnKS5hZGRDbGFzcygnaXMtZW1wdHknKTtcclxuICAgIFx0XHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9ICdVc2VyIEludml0ZWQgU3VjY2Vzc2Z1bGx5ISc7XHJcblx0XHRcdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNidG5JbnZpdGUnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG4gICAgXHRcdFx0XHRcdFx0alF1ZXJ5KCcjYWRkLW5ldy11c2VyJykubW9kYWwoJ2hpZGUnKTtcclxuICAgIFx0XHRcdFx0XHRcdHNlbGYuZ2V0U2VsZWN0ZWRDb21wYW55VXNlcnMoKTtcclxuICAgIFx0XHRcdFx0XHR9LFxyXG4gICAgXHRcdFx0XHRcdChlcnJvcjphbnkpPT4ge1xyXG4gICAgXHRcdFx0XHRcdFx0bGV0IGVycm9yX2NvZGUgPSBlcnJvci5lcnJvci5jb2RlO1xyXG4gICAgXHRcdFx0XHRcdFx0alF1ZXJ5KCcjc3VjY2Vzcy1hZGRVc2VyJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgIFx0XHRcdFx0XHRcdGlmIChlcnJvcl9jb2RlID09PSAnRV9VTklRVUVfVVNFUk5BTUVfVkFMSURBVElPTicgfHxcclxuICAgIFx0XHRcdFx0XHRcdFx0XHRlcnJvcl9jb2RlID09PSAnRV9VTklRVUVfRU1BSUxfVkFMSURBVElPTicgfHxcclxuICAgIFx0XHRcdFx0XHRcdFx0XHRlcnJvcl9jb2RlID09PSAnRV9VTklRVUVfVU5JREVOVElGSUVEX1ZBTElEQVRJT04nIHx8XHJcbiAgICBcdFx0XHRcdFx0XHRcdFx0ZXJyb3JfY29kZSA9PT0gJ0VfVVNFUl9DT01QQU5ZX0FMUkVBRFlfRVhJU1RTJ1xyXG4gICAgXHRcdFx0XHRcdFx0KSB7XHJcbiAgICBcdFx0XHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9ICcgVGhpcyB1c2VyIGlzIGFscmVhZHkgYSBwYXJ0IG9mIHRoaXMgY29tcGFueSBvbiBPdXRncm93JztcclxuICAgIFx0XHRcdFx0XHRcdH1lbHNlIGlmKGVycm9yX2NvZGUgPT09ICdFX1VTRVJfTElNSVRfRVhDRUVERUQnKSB7XHJcbiAgICBcdFx0XHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG4gICAgXHRcdFx0XHRcdFx0XHRqUXVlcnkoJyN1cGdyYWRlTGluaycpLmh0bWwoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiPlVQR1JBREU8L2J1dHRvbj4nKTtcclxuICAgIFx0XHRcdFx0XHRcdH1lbHNlIHtcclxuICAgIFx0XHRcdFx0XHRcdFx0aWYoZXJyb3IuZXJyb3IuZXJyX2Vycm9yc1snZW1haWxzLjAuZW1haWwnXS5tZXNzYWdlID09PSdQbGVhc2UgdXNlIGEgdmFsaWQgY29tcGFueSBlbWFpbCBhZGRyZXNzIHRvIHNpZ24gdXAgZm9yIE91dGdyb3cgOiknKSB7XHJcbiAgICBcdFx0XHRcdFx0XHRcdFx0c2VsZi5NZXNzYWdlID0gJ1lvdSBjYW4gb25seSBpbnZpdGUgdXNlcnMgd2l0aCBhIHZhbGlkIGNvbXBhbnkgZW1haWwgYWRkcmVzcyc7XHJcbiAgICBcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGlmKGVycm9yLmVycm9yLmVycl9lcnJvcnNbJ2VtYWlscy4wLmVtYWlsJ10ubWVzc2FnZSA9PT0nUGxlYXNlIHRyeSBzaWduaW5nIHVwIHdpdGggYSByZWFsIGVtYWlsIGFkZHJlc3MuJykge1xyXG4gICAgXHRcdFx0XHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9ICdUaGUgZW1haWwgYWRkcmVzcyB5b3UgaGF2ZSBlbnRlcmVkIGlzIGludmFsaWQgb3IgZG9lcyBub3QgZXhpc3QuJztcclxuICAgIFx0XHRcdFx0XHRcdFx0fWVsc2Uge1xyXG4gICAgXHRcdFx0XHRcdFx0XHRzZWxmLk1lc3NhZ2UgPSAoZXJyb3IuZXJyb3IuZXJyX2Vycm9yc1snZW1haWxzLjAuZW1haWwnXSkgP1xyXG4gICAgXHRcdFx0XHRcdFx0XHRlcnJvci5lcnJvci5lcnJfZXJyb3JzWydlbWFpbHMuMC5lbWFpbCddLm1lc3NhZ2UgOlxyXG4gICAgXHRcdFx0XHRcdFx0XHRlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuICAgIFx0XHRcdFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0XHRcdFx0fVxyXG4gICAgXHRcdFx0XHRcdFx0alF1ZXJ5KCcjc3VjY2Vzcy1hZGRVc2VyJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgIFx0XHRcdFx0XHRcdGpRdWVyeSgnI2J0bkludml0ZScpLnRleHQoJ0FkZCBOZXcgVXNlcicpO1xyXG4gICAgXHRcdFx0XHRcdFx0alF1ZXJ5KCcjYnRuSW52aXRlJykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRqUXVlcnkoJyNhZGQtbmV3LXVzZXIgaW5wdXQnKS52YWwoJycpO1xyXG4gICAgXHRcdFx0XHRcdFx0alF1ZXJ5KCcjcmFkaW9BZG1pbicpLnByb3AoJ2NoZWNrZWQnLGZhbHNlKTtcclxuICAgIFx0XHRcdFx0XHRcdGpRdWVyeSgnI3JhZGlvTWFuYWdlcicpLnByb3AoJ2NoZWNrZWQnLHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdGFkZFVzZXIudW5zdWJzY3JpYmUoKTtcclxuICAgIFx0XHRcdFx0XHR9XHJcbiAgICBcdFx0XHRcdCk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuTWVzc2FnZSA9ICcgVGhpcyB1c2VyIGlzIGFscmVhZHkgYSBwYXJ0IG9mIHRoaXMgY29tcGFueSBvbiBPdXRncm93JztcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI3N1Y2Nlc3MtYWRkVXNlcicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNidG5JbnZpdGUnKS50ZXh0KCdBZGQgTmV3IFVzZXInKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2J0bkludml0ZScpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdC8vfVxyXG5cdH1cclxuXHJcblx0Y2xvc2VBZGRVc2VyICgpIHtcclxuXHRcdGpRdWVyeSgnI2FkZC1uZXctdXNlcicpLm1vZGFsKCdoaWRlJyk7XHJcblx0XHRqUXVlcnkoJyNzdWNjZXNzLWFkZFVzZXInKS5hZGRDbGFzcygnaGlkZScpO1xyXG5cdH1cclxuXHJcblx0dXBncmFkZU5hdmlnYXRpb24oKXtcclxuXHRcdGpRdWVyeSgnI2FkZC1uZXctdXNlcicpLm1vZGFsKCdoaWRlJyk7XHJcblx0XHRqUXVlcnkoJyNzdWNjZXNzLWFkZFVzZXInKS5hZGRDbGFzcygnaGlkZScpO1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2V0dGluZ3MvbWVtYmVyc2hpcCddKTtcclxuXHR9XHJcblxyXG4gICAgZXhpc3QoZW1haWw6c3RyaW5nKXtcclxuICAgICAgICBmb3IodmFyIGkgPTA7IGk8dGhpcy5jdXJyZW50Q29tcGFueVVzZXJzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRDb21wYW55VXNlcnNbaV0uZW1haWxzWzBdLmVtYWlsID09PSBlbWFpbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHRjcmVhdGVDb21wYW55KCkge1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0c2VsZi5NZXNzYWdlID0gJyc7XHJcblx0XHRqUXVlcnkoJyNidG5DcmVhdGVDb21wYW55JykudGV4dCgnUGxlYXNlIFdhaXQuLi4nKS5hdHRyKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcblx0XHRsZXQgY3JlYXRlQ29tcGFueSA9IHNlbGYuX2NvbXBhbnlTZXJ2aWNlLmNyZWF0ZUNvbXBhbnkoc2VsZi5jcmVhdGVDb21wYW55Rm9ybS52YWx1ZSlcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoc3VjY2VzczphbnkpPT4ge1xyXG5cdFx0XHRcdFx0LyotLS0tIFRyYWNraW5nIGV2ZW50IGNvZGUgaGVyZSAtLS0tKi9cclxuXHRcdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ1N1Ym1pdCcsICdBZGRDb21wYW55Jyk7XHJcblx0XHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBTZXR0aW5ncyBDb21wYW55IEFkZGVkJ10pO1xyXG5cdFx0XHRcdFx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHRcdFx0XHRcdGpRdWVyeSgnI2FkZC1uZXctY29tcGFueSBpbnB1dCcpLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRqUXVlcnkoJyNidG5DcmVhdGVDb21wYW55JykudGV4dCgnQWRkIE5ldyBDb21wYW55Jyk7XHJcblx0XHRcdFx0XHRqUXVlcnkoJyNhZGQtbmV3LWNvbXBhbnkgZGl2LmxhYmVsLWZsb2F0aW5nJykuYWRkQ2xhc3MoJ2lzLWVtcHR5Jyk7XHJcblx0XHRcdFx0XHRzZWxmLk1lc3NhZ2UgPSAnQ29tcGFueSBDcmVhdGVkIFN1Y2Nlc3NmdWxseSEnO1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcjYWRkLW5ldy1jb21wYW55JykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbihzZWxmLk1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0Ly9zZWxmLmdldE15Q29tcGFuaWVzKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkNVTFBSSVQgMlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkobG9jYXRpb24pLmF0dHIoJ2hyZWYnLHNlbGYucHJvdG9jb2wrc2VsZi5jcmVhdGVDb21wYW55Rm9ybS52YWx1ZS5jb21wYW55bmFtZStzZWxmLnN1YmRvbWFpbkV4dGVuc2lvbisnL3NldHRpbmdzJyk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+IHtcclxuXHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcjc3VjY2Vzcy1hZGRDb21wYW55JykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGpRdWVyeSgnI2J0bkNyZWF0ZUNvbXBhbnknKS50ZXh0KCdBZGQgTmV3IENvbXBhbnknKTtcclxuXHRcdFx0XHRcdGpRdWVyeSgnI2J0bkNyZWF0ZUNvbXBhbnknKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdFx0Y3JlYXRlQ29tcGFueS51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblx0c2VhcmNoQ29tcGFueSgpIHtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGxldCBqb2luZWQgPSBmYWxzZTtcclxuXHRcdHNlbGYuTWVzc2FnZSA9ICcnO1xyXG5cdFx0c2VsZi5zZWFyY2hlZENvbXBhbnlMaXN0ID0gW107XHJcblx0XHRzZWxmLmpvaW5lZENvbXBhbnlMaXN0ID0gW107XHJcblx0XHRpZihzZWxmLmpvaW5Db21wYW55Rm9ybS52YWx1ZS5zZWFyY2hDb21wYW55Lmxlbmd0aCA+IDIpIHtcclxuXHRcdGxldCBzZWFyY2hDb21wYW55ID1cdHNlbGYuX2NvbXBhbnlTZXJ2aWNlLnNlYXJjaENvbXBhbnkoc2VsZi5qb2luQ29tcGFueUZvcm0udmFsdWUuc2VhcmNoQ29tcGFueSlcclxuXHRcdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0KHN1Y2Nlc3M6YW55KT0+IHtcclxuXHRcdFx0XHRcdFx0alF1ZXJ5KCcjc3VjY2Vzcy1qb2luQ29tcGFueScpLmFkZENsYXNzKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdHNlbGYuc2VhcmNoZWRDb21wYW55TGlzdCA9IFtdO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmpvaW5lZENvbXBhbnlMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW52aXRlZENvbXBhbnlMaXN0ID0gW107XHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3MuY29tcGFuaWVzLmZvckVhY2goKGNvbXBhbnk6YW55KT0+IHtcclxuXHRcdFx0XHRcdFx0XHRqb2luZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRmb3IodmFyIGk9MDsgaSA8IHNlbGYubXlDb21wYW5pZXNMaXN0Lmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKHNlbGYubXlDb21wYW5pZXNMaXN0W2ldLnN1Yl9kb21haW4gPT09IGNvbXBhbnkuc3ViX2RvbWFpbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYubXlDb21wYW5pZXNMaXN0W2ldLnVzZXJfY29tcGFueS5zdGF0dXMgPT09ICdSRVFVRVNURUQnICYmIHNlbGYubXlDb21wYW5pZXNMaXN0W2ldLnVzZXJfY29tcGFueS5hY3RpdmUgPT09IGZhbHNlKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIHNlbGYuam9pbmVkQ29tcGFueUxpc3QucHVzaChuZXcgQ29tcGFueShjb21wYW55KSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBqb2luZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoc2VsZi5teUNvbXBhbmllc0xpc3RbaV0udXNlcl9jb21wYW55LnN0YXR1cyA9PT0gJ0lOVklURUQnICYmIHNlbGYubXlDb21wYW5pZXNMaXN0W2ldLnVzZXJfY29tcGFueS5hY3RpdmUgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW52aXRlZENvbXBhbnlMaXN0LnB1c2gobmV3IENvbXBhbnkoY29tcGFueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9pbmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZigham9pbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlYXJjaGVkQ29tcGFueUxpc3QucHVzaChuZXcgQ29tcGFueShjb21wYW55KSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWYoc2VsZi5zZWFyY2hlZENvbXBhbnlMaXN0Lmxlbmd0aCA9PT0gMCAmJiBzZWxmLmpvaW5lZENvbXBhbnlMaXN0Lmxlbmd0aCA9PT0gMCAmJiBzZWxmLmludml0ZWRDb21wYW55TGlzdC5sZW5ndGggPT09IDApe1xyXG5cdFx0XHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9ICdObyBDb21wYW5pZXMgRm91bmQnO1xyXG5cdFx0XHRcdFx0XHRcdGpRdWVyeSgnI3N1Y2Nlc3Mtam9pbkNvbXBhbnknKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KGVycm9yOmFueSk9PiB7XHJcblx0XHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG5cdFx0XHRcdFx0XHRqUXVlcnkoJyNzdWNjZXNzLWpvaW5Db21wYW55JykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0c2VhcmNoQ29tcGFueS51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGpvaW5Db21wYW55KGNvbXBhbnk6YW55KSB7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0XHRqUXVlcnkoJyNqb2luJytjb21wYW55LmlkKS5odG1sKCdQbGVhc2UgV2FpdC4uLicpO1xyXG5cdFx0bGV0IGpvaW5Db21wYW55ID0gc2VsZi5fY29tcGFueVNlcnZpY2Uuam9pbkNvbXBhbnkoY29tcGFueS5pZClcclxuXHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdChzdWNjZXNzOmFueSk9PiB7XHJcblx0XHRcdFx0alF1ZXJ5KCcjam9pbicrY29tcGFueS5pZCkuaHRtbCgnUmVxdWVzdCBzZW50Jyk7XHJcblx0XHRcdFx0alF1ZXJ5KCcjam9pbmVkJytjb21wYW55LmlkKS5yZW1vdmVDbGFzcygnY29tcGFuaWVzLWJveC1ob3ZlcicpO1xyXG5cdFx0XHRcdGpRdWVyeSgnI2pvaW5lZCcrY29tcGFueS5pZCkuYWRkQ2xhc3MoJ2NvbXBhbmllcy1ib3gtcmVxdWVzdCcpO1xyXG5cdFx0XHRcdC8vc2VsZi5nZXRNeUNvbXBhbmllcygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQoZXJyb3I6YW55KT0+e1xyXG5cdFx0XHRcdGpvaW5Db21wYW55LnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0Ly8gc2VsZi5NZXNzYWdlID0gZXJyb3IuZXJyb3IuZXJyX21lc3NhZ2U7XHJcblx0XHRcdFx0Ly8galF1ZXJ5KCcjc3VjY2Vzcy1qb2luQ29tcGFueScpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cdGxlYXZlQ29tcGFueShjb21wYW55OmFueSkge1xyXG5cdFx0dGhpcy5sZWF2ZUNvbXAgPSBjb21wYW55LmlkO1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0aWYoc2VsZi5hZG1pbkNvdW50ID49IDEpIHtcclxuXHRcdFx0Ly9pZihzZWxmLm15Q29tcGFuaWVzTGlzdC5sZW5ndGggPiAxKVxyXG5cdFx0XHRpZihzZWxmLm15QXBwcm92ZWRDb21wYW5pZXMoKSA+IDEpe1xyXG5cdFx0XHRcdGxldCBsZWF2ZUNvbXBhbnkgPSBzZWxmLl9jb21wYW55U2VydmljZS5sZWF2ZUNvbXBhbnkoY29tcGFueS5pZClcclxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0XHRcdChzdWNjZXNzOmFueSk9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5NZXNzYWdlID0gJ1N1Y2Nlc3NmdWxseSBsZWZ0ICcrY29tcGFueS5uYW1lO1xyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbihzZWxmLk1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0XHRcdC8vc2VsZi5nZXRNeUNvbXBhbmllcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXRTZWxlY3RlZENvbXBhbnlVc2VycygpO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBjdXJVcmxEb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3BsaXQoJy4nKVswXTtcclxuXHRcdFx0XHRcdFx0XHRsZXQgcmVkaXJlY3REb21haW4gPSAnJztcclxuXHRcdFx0XHRcdFx0XHRpZihjdXJVcmxEb21haW4gPT09IGNvbXBhbnkuc3ViX2RvbWFpbikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yKHZhciBpID0wOyBpPCBzZWxmLm15Q29tcGFuaWVzTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihjdXJVcmxEb21haW4gIT09IHNlbGYubXlDb21wYW5pZXNMaXN0W2ldLnN1Yl9kb21haW4gJiYgc2VsZi5teUNvbXBhbmllc0xpc3RbaV0udXNlcl9jb21wYW55LmFjdGl2ZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZGlyZWN0RG9tYWluID0gc2VsZi5teUNvbXBhbmllc0xpc3RbaV0uc3ViX2RvbWFpbiArIHNlbGYuc3ViZG9tYWluRXh0ZW5zaW9uO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkobG9jYXRpb24pLmF0dHIoJ2hyZWYnLHNlbGYucHJvdG9jb2wrcmVkaXJlY3REb21haW4pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0KGVycm9yOmFueSk9PntcclxuXHRcdFx0XHRcdFx0XHRzZWxmLk1lc3NhZ2UgPSBlcnJvci5lcnJvci5tZXNzYWdlO1xyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbihzZWxmLk1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0XHRcdGxlYXZlQ29tcGFueS51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0alF1ZXJ5KCcjbGVhdmVDb25maXJtYXRpb24nKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0XHR9XHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdHNlbGYuTWVzc2FnZSA9ICdUaGUgY29tcGFueSBtdXN0IGhhdmUgYW5vdGhlciBhZG1pbiEnO1xyXG5cdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oc2VsZi5NZXNzYWdlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG15QXBwcm92ZWRDb21wYW5pZXMoKXtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGxldCBhcHByb3ZlQ291bnQgPSAwO1xyXG5cdFx0bGV0IGdldENvbXBhbnkgPSBzZWxmLl9jb21wYW55U2VydmljZS5nZXRDb21wYW5pZXMoKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChzdWNjZXNzOmFueSk9PiB7XHJcblx0XHRcdFx0XHRzdWNjZXNzLmZvckVhY2goKGNvbXBhbnk6YW55KT0+IHtcclxuXHRcdFx0XHRcdFx0aWYoY29tcGFueS51c2VyX2NvbXBhbnkuc3RhdHVzID09ICdBUFBST1ZFRCcgfHwgKGNvbXBhbnkudXNlcl9jb21wYW55LnN0YXR1cyA9PSAnSU5WSVRFRCcgJiYgY29tcGFueS51c2VyX2NvbXBhbnkuYWN0aXZlKSl7XHJcblx0XHRcdFx0XHRcdFx0YXBwcm92ZUNvdW50Kys7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0KGVycm9yOmFueSk9PiB7XHJcblx0XHRcdFx0XHRnZXRDb21wYW55LnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0cmV0dXJuIGFwcHJvdmVDb3VudDtcclxuXHR9XHJcblx0ZGVsZXRlVXNlcih1c2VyOmFueSkge1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0c2VsZi5NZXNzYWdlID0gJyc7XHJcblx0XHRsZXQgZGVsdGVVc2VyID0gc2VsZi5fY29tcGFueVNlcnZpY2UucmVtb3ZlVXNlcihzZWxmLmN1cnJlbnRDb21wYW55LmlkLHVzZXIuaWQpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KHN1Y2Nlc3M6YW55KT0+IHtcclxuXHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9IHVzZXIubmFtZSArICcgU3VjY2Vzc2Z1bGx5IHJlbW92ZWQnO1xyXG5cdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRzZWxmLmdldFNlbGVjdGVkQ29tcGFueVVzZXJzKCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+IHtcclxuXHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG5cdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRkZWx0ZVVzZXIudW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cdG1ha2VNYW5hZ2VyKHVzZXI6YW55KSB7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0XHRpZihzZWxmLmFkbWluQ291bnQgPj0gMSkge1xyXG5cdFx0bGV0IG1ha2VNYW5hZ2VyID1cdHNlbGYuX2NvbXBhbnlTZXJ2aWNlLm1ha2VNYW5hZ2VyKHNlbGYuY3VycmVudENvbXBhbnkuaWQsIHVzZXIuaWQpXHJcblx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRcdChzdWNjZXNzOmFueSk9PiB7XHJcblx0XHRcdFx0XHRcdGlmKHVzZXIudXNlcm5hbWUgPT0gc2VsZi5sb2dlZEluVXNlck5hbWUpe1xyXG5cdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyb2xlJywnTUFOQUdFUicpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9ICdVc2VyIGFjY2VzcyBoYXMgYmVlbiBjaGFuZ2VkIHN1Y2Nlc3NmdWxseSc7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbihzZWxmLk1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmdldFNlbGVjdGVkQ29tcGFueVVzZXJzKCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KGVycm9yOmFueSk9PiB7XHJcblx0XHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oc2VsZi5NZXNzYWdlKTtcclxuXHRcdFx0XHRcdFx0bWFrZU1hbmFnZXIudW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRzZWxmLk1lc3NhZ2UgPSAnQ29tcGFueSBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIEFkbWluJztcclxuXHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdG1ha2VBZG1pbih1c2VyOmFueSkge1xyXG5cdFx0bGV0IHNlbGYgPXRoaXM7XHJcblx0XHRsZXQgbWFrZUFkbWluID0gc2VsZi5fY29tcGFueVNlcnZpY2UubWFrZUFkbWluKHNlbGYuY3VycmVudENvbXBhbnkuaWQsIHVzZXIuaWQpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KHN1Y2Nlc3M6YW55KT0+IHtcclxuXHRcdFx0XHRcdGlmKHVzZXIudXNlcm5hbWUgPT0gc2VsZi5sb2dlZEluVXNlck5hbWUpe1xyXG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncm9sZScsJ0FETUlOJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvL3NlbGYuTWVzc2FnZSA9ICdTdWNjZXNzZnVsbHkgY2hhbmdlZCAnICsgdXNlci5uYW1lICsgJ1xcJ3Mgcm9sZSB0byBBZG1pbic7XHJcblx0XHRcdFx0XHRzZWxmLk1lc3NhZ2UgPSAnVXNlciBhY2Nlc3MgaGFzIGJlZW4gY2hhbmdlZCBzdWNjZXNzZnVsbHknO1xyXG5cdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRzZWxmLmdldFNlbGVjdGVkQ29tcGFueVVzZXJzKCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+IHtcclxuXHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG5cdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRtYWtlQWRtaW4udW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cdGFjY2Vzc1JlcXVlc3RQb3B1cCh1c2VyOmFueSkge1xyXG5cdFx0alF1ZXJ5KCcudXNlcicrdXNlci5pZCkuYXR0cignY2hlY2tlZCcsdHJ1ZSk7XHJcblx0XHR0aGlzLmFjY2Vzc1JlcXVlc3RVc2VySWQgPSB1c2VyLmlkO1xyXG5cdFx0dGhpcy5hY2Nlc3NSZXF1ZXN0VXNlck5hbWUgPSB1c2VyLm5hbWU7XHJcblx0XHR0aGlzLmFjY2Vzc1JlcXVlc3RVc2VyRW1haWwgPSB1c2VyLmVtYWlsc1swXS5lbWFpbDtcclxuXHRcdGpRdWVyeSgnI2FjY2VwdC1hY2Nlc3MtcmVxJykubW9kYWwoJ3Nob3cnKTtcclxuXHR9XHJcblx0ZGVsZXRlTWUoKSB7XHJcblx0XHRqUXVlcnkoJyNsZWF2ZUNvbmZpcm1hdGlvbicpLm1vZGFsKCdoaWRlJyk7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0bGV0IGxlYXZlQ29tcGFueSA9IHNlbGYuX2NvbXBhbnlTZXJ2aWNlLmxlYXZlQ29tcGFueShzZWxmLmxlYXZlQ29tcClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoc3VjY2VzczphbnkpPT4ge1xyXG5cdFx0XHRcdFx0LyotLS0tIFRyYWNraW5nIGNvZGUgZ29lcyBoZXJlIC0tLS0qL1xyXG5cdFx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnU3VibWl0JywgJ0xlYXZlQ29tcGFueScpO1xyXG5cdFx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgU2V0dGluZ3MgTGVmdCBDb21wYW55J10pO1xyXG5cdFx0XHRcdFx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cdFx0XHRcdFx0c2VsZi5NZXNzYWdlID0gJ0NvbXBhbnkgTGVmdCBTdWNjZXNzZnVsbHknO1xyXG5cdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRzZWxmLl91c2VyU2VydmljZS5sb2dvdXQoKVxyXG5cdFx0XHRcdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYubG9nZ2VkSW5TZXJ2aWNlLmxvZ291dCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmFzc2lnbihzZWxmLnByb3RvY29sK0NvbmZpZy5QQVJFTlRfQVBQX0RPTUFJTik7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+e1xyXG5cdFx0XHRcdFx0c2VsZi5NZXNzYWdlID0gZXJyb3IuZXJyb3IubWVzc2FnZTtcclxuXHRcdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbihzZWxmLk1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0bGVhdmVDb21wYW55LnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0YWNjZXB0UmVxdWVzdCgpIHtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdHNlbGYuTWVzc2FnZSA9ICcnO1xyXG5cdFx0alF1ZXJ5KCcjYnRuQWNjZXRwUmVxdWVzdCcpLnRleHQoJ1BsZWFzZSBXYWl0Li4uJykuYXR0cignZGlzYWJsZWQnLHRydWUpO1xyXG5cdFx0bGV0IGFjY2VwdFJlcXVlc3QgPSBzZWxmLl9jb21wYW55U2VydmljZS5hcHByb3ZlVXNlcihzZWxmLmFjY2Vzc1JlcXVlc3RVc2VySWQsIHNlbGYuY3VycmVudENvbXBhbnkuaWQsIHNlbGYuYWNjZXB0UmVxdWVzdEZvcm0udmFsdWUudXNlclJvbGUpXHJcblx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRcdChzdWNjZXNzOmFueSk9PiB7XHJcblx0XHRcdFx0XHRcdGpRdWVyeSgnI2J0bkFjY2V0cFJlcXVlc3QnKS50ZXh0KCdBcHByb3ZlIFJlcXVlc3QnKTtcclxuXHRcdFx0XHRcdFx0c2VsZi5NZXNzYWdlID0gJ1VzZXIgcmVxdWVzdCBhY2NlcHRlZCBTdWNjZXNzZnVsbHkhJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYnRuQWNjZXRwUmVxdWVzdCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcblx0XHRcdFx0XHRcdGpRdWVyeSgnI2FjY2VwdC1hY2Nlc3MtcmVxJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRcdHNlbGYuZ2V0U2VsZWN0ZWRDb21wYW55VXNlcnMoKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQoZXJyb3I6YW55KT0+IHtcclxuXHRcdFx0XHRcdFx0c2VsZi5NZXNzYWdlID0gZXJyb3IuZXJyb3IuZXJyX21lc3NhZ2U7XHJcblx0XHRcdFx0XHRcdGpRdWVyeSgnI3N1Y2Nlc3MtYWNjZXB0VXNlcicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdGpRdWVyeSgnI2J0bkFjY2V0cFJlcXVlc3QnKS50ZXh0KCdBcHByb3ZlIFJlcXVlc3QnKTtcclxuXHRcdFx0XHRcdFx0alF1ZXJ5KCcjYnRuQWNjZXRwUmVxdWVzdCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcblx0XHRcdFx0XHRcdGFjY2VwdFJlcXVlc3QudW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0Y2xvc2VNb2RhbCgpIHtcclxuXHRcdGpRdWVyeSgnI2FkZC1uZXctdXNlcicpLm1vZGFsKCdoaWRlJyk7XHJcblx0XHRqUXVlcnkoJyNhZGQtbmV3LXVzZXIgaW5wdXQnKS52YWwoJycpO1xyXG5cdH1cclxuXHRjbG9zZUxheW92ZXIoKSB7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRqUXVlcnkoJy5mbG9hdC1jaGFuZ2VzLXVwZGF0ZWQnKS5mYWRlSW4oKVxyXG5cdFx0XHRcdC5hbmltYXRlKHtib3R0b206LTUwfSwgODAwLCBmdW5jdGlvbigpIHt9KTtcclxuXHRcdFx0fSwgNDAwMCk7XHJcblx0fVxyXG5cdGhpZGVFcnJvcigpIHtcclxuXHRcdHRoaXMuTWVzc2FnZSA9Jyc7XHJcblx0XHRqUXVlcnkoJyNzdWNjZXNzLWFkZFVzZXInKS5hZGRDbGFzcygnaGlkZScpO1xyXG5cdFx0Ly9qUXVlcnkoJy5hbGVydCcpLmFkZENsYXNzKCdoaWRlJyk7XHJcblx0fVxyXG5cdG1lbWJEZXRhaWxzKCkge1xyXG5cdFx0alF1ZXJ5KCcjbWVtYkRldCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdGpRdWVyeSgnI21lbWJEZXQtbScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHQgICAgalF1ZXJ5KCcjdGVhbVNldCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQgICAgalF1ZXJ5KCcjdGVhbVNldC1tJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCAgICBqUXVlcnkoJyNub3RpZicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQgICAgalF1ZXJ5KCcjYWNjU2V0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCAgICBqUXVlcnkoJyNhY2NTZXQtbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdGpRdWVyeSgnI3RlYW0tc2V0dGluZ3MnKS5hZGRDbGFzcygnaGlkZScpO1xyXG5cdCAgICBqUXVlcnkoJyNtZW1iZXJzaGlwLWRldGFpbHMnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG5cdCAgICBqUXVlcnkoJyNub3RpLXNldHRpbmdzJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuXHQgICAgalF1ZXJ5KCcjbXktYWNjb3VudCcpLmFkZENsYXNzKCdoaWRlJyk7XHJcblx0ICAgIGpRdWVyeSgnI21lbWJEZXQgYScpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLHRydWUpO1xyXG5cdCAgICBqUXVlcnkoJyNtZW1iRGV0LW0gYScpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLHRydWUpO1xyXG5cdCAgICBqUXVlcnkoJyN0ZWFtU2V0IGEnKS5hdHRyKCdhcmlhLWV4cGFuZGVkJyxmYWxzZSk7XHJcblx0ICAgIGpRdWVyeSgnI3RlYW1TZXQtbSBhJykuYXR0cignYXJpYS1leHBhbmRlZCcsZmFsc2UpO1xyXG5cdCAgICBqUXVlcnkoJyNub3RpZiBhJykuYXR0cignYXJpYS1leHBhbmRlZCcsZmFsc2UpO1xyXG5cdCAgICBqUXVlcnkoJyNhY2NTZXQgYScpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLGZhbHNlKTtcclxuXHQgICAgalF1ZXJ5KCcjYWNjU2V0LW0gYScpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdGNhbGxHQShvcHQ6IHN0cmluZykge1xyXG5cdFx0c3dpdGNoIChvcHQpIHtcclxuXHRcdFx0Y2FzZSBcIkFERFVTRVJDTElDS1wiOlxyXG5cdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ0NsaWNrJywgJ0FkZFVzZXInKTtcclxuXHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBTZXR0aW5ncyBBZGQgVXNlciBDbGljayddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIkFERENPTVBBTllcIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdDbGljaycsICdBZGRDb21wYW55Jyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgU2V0dGluZ3MgQWRkIENvbXBhbnkgQ2xpY2snXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJKT0lOQ09NUEFOWVwiOlxyXG5cdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ0NsaWNrJywgJ0pvaW5Db21wYW55Jyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgU2V0dGluZ3MgSm9pbiBDb21wYW55IENsaWNrJ10pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiTEVBVkVDT01QQU5ZXCI6XHJcblx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnQ2xpY2snLCAnTGVhdmVDb21wYW55Jyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgU2V0dGluZ3MgTGVhdmUgQ29tcGFueSBDbGljayddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIlVQR1JBREVQTEFOXCI6XHJcblx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnQ2xpY2snLCAnVXBncmFkZU1lbWJlcnNoaXAnKTtcclxuXHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBTZXR0aW5ncyBVcGdyYWRlIFBsYW4gQ2xpY2snXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJERUxFVEVVU0VSXCI6XHJcblx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnQ2xpY2snLCAnRGVsZXRlVXNlcicpO1xyXG5cdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFNldHRpbmdzIERlbGV0ZSBVc2VyIENsaWNrJ10pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiTUFLRU1BTkFHRVJcIjpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdDbGljaycsICdNYWtlTWFuYWdlcicpO1xyXG5cdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFNldHRpbmdzIE1ha2UgTWFuYWdlciBDbGljayddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIk1BS0VBRE1JTlwiOlxyXG5cdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ0NsaWNrJywgJ01ha2VBZG1pbicpO1xyXG5cdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFNldHRpbmdzIE1ha2UgQWRtaW4gQ2xpY2snXSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==
