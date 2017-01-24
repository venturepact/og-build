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
var env_config_1 = require('./../../../../config/env.config');
var router_1 = require('@angular/router');
var index_1 = require('../../../../shared/services/index');
var company_1 = require('../../../../shared/models/company');
var UserCompaniesComponent = (function () {
    function UserCompaniesComponent(_companyService, fb, router, _userService, loggedInService, settingsCommunicationService, _cookieService) {
        this._companyService = _companyService;
        this.fb = fb;
        this.router = router;
        this._userService = _userService;
        this.loggedInService = loggedInService;
        this.settingsCommunicationService = settingsCommunicationService;
        this._cookieService = _cookieService;
        this.subdomainExtension = '';
        this.protocol = '';
        this.Message = '';
        this.currentCompanyUsers = [];
        this.adminCount = 0;
        this.logedInUserName = '';
        this.updCompName = '';
        this.updDomain = '';
        this.updAgency = false;
        this.updTraffic = 0;
        this.updLeads = 0;
        this.EditCompany = new company_1.Company({});
        this.searchedCompanyList = [];
        this.joinedCompanyList = [];
        this.invitedCompanyList = [];
        this.error = false;
        this.leaveComp = '';
        this.is_admin_created = false;
        this.clickedCompany = new company_1.Company({});
        this.apiKey = '';
    }
    UserCompaniesComponent.prototype.ngOnInit = function () {
        this.subdomainExtension = '.' + env_config_1.Config.APP_EXTENSION;
        this.protocol = env_config_1.Config.PROTOCOL;
        this.updateCompany = new company_1.Company({});
        if (this._cookieService.readCookie('storage') !== null) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            this.logedInUserName = storage.user.username;
        }
        this.updateCompanyForm = this.fb.group({
            companyname: [this.EditCompany.name, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            domain: [this.EditCompany.sub_domain, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern('^[a-zA-Z0-9]*$')])]
        });
        jQuery('.modal').on('hidden.bs.modal', function () {
            jQuery('.success-message').addClass('hide');
            this.error = false;
            this.leaveComp = '';
        });
        this.createCompanyForm = this.fb.group({
            companyname: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            domain: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.pattern('^[a-zA-Z0-9]*$')])]
        });
        this.joinCompanyForm = this.fb.group({
            searchCompany: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])]
        });
        this.getMyCompanies();
        jQuery('.slimscroll').slimscroll({
            railVisible: true,
            alwaysVisible: true
        });
        this.is_admin_created = JSON.parse(localStorage.getItem('lodashAuthToken')).is_admin_created;
        if (this.is_admin_created === undefined)
            this.is_admin_created = false;
    };
    UserCompaniesComponent.prototype.popupUpdateCompany = function (company) {
        this.updateCompany = company;
        this.EditCompany = company;
        console.log('this.EditCompany', this.EditCompany);
        var cname = document.getElementById('updCompanyname');
        cname.value = this.EditCompany.name;
        var cdomain = document.getElementById('updDomain');
        cdomain.value = this.EditCompany.sub_domain;
        var ctraffic = document.getElementById('updTraffic');
        ctraffic.value = this.EditCompany.traffic.frequency;
        var cleads = document.getElementById('updLeads');
        cleads.value = this.EditCompany.leads.total;
        if (this.EditCompany.name == '' || this.EditCompany.name == null)
            jQuery('#updCompanynameDiv').addClass('is-empty');
        else
            jQuery('#updCompanynameDiv').removeClass('is-empty');
        if (!this.EditCompany.sub_domain)
            jQuery('#updDomainDiv').addClass('is-empty');
        else
            jQuery('#updDomainDiv').removeClass('is-empty');
        if (!this.EditCompany.traffic.frequency)
            jQuery('#updTrafficDiv').addClass('is-empty');
        else
            jQuery('#updTrafficDiv').removeClass('is-empty');
        if (!this.EditCompany.leads.total)
            jQuery('#updLeadsDiv').addClass('is-empty');
        else
            jQuery('#updLeadsDiv').removeClass('is-empty');
    };
    UserCompaniesComponent.prototype.updateThisCompany = function () {
        var _this = this;
        var self = this;
        jQuery('#btnUpdateCompany').text('Please wait...');
        jQuery('#btnUpdateCompany').attr('disabled', true);
        var updateCompany = self._companyService.updateCompany(this.updateCompany.id, this.updateCompanyForm.value)
            .subscribe(function (success) {
            jQuery('#btnUpdateCompany').text('Update');
            jQuery('#btnUpdateCompany').attr('disabled', false);
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'EditCompany');
            _kmq.push(['record', 'Settings Company Editted']);
            jQuery('#change-company-name').modal('hide');
            jQuery('#change-company-name input').val('');
            jQuery('#change-company-name div.label-floating').addClass('is-empty');
            self.Message = 'Company Updated Successfully!';
            window.toastNotification(self.Message);
            jQuery('#btnUpdateCompany').text('Update');
            self.getMyCompanies();
            var curUrlDomain = window.location.hostname.split('.')[0];
            var redirectDomain = '';
            if (curUrlDomain == self.updateCompany.sub_domain && curUrlDomain != _this.updateCompanyForm.value.domain) {
                console.log("CULPRIT 1");
                redirectDomain = _this.updateCompanyForm.value.domain + self.subdomainExtension;
                jQuery(location).attr('href', self.protocol + redirectDomain + '/settings');
            }
        }, function (error) {
            jQuery('#btnUpdateCompany').text('Update');
            jQuery('#btnUpdateCompany').attr('disabled', false);
            if (error.error.code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION') {
                self.Message = "sub-domain already taken";
            }
            else {
                self.Message = error.error.err_message;
            }
            jQuery('#success-updateCompany').removeClass('hide');
            updateCompany.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.hideError = function () {
        jQuery('.success-message').addClass('hide');
    };
    UserCompaniesComponent.prototype.getMyCompanies = function () {
        var self = this;
        var getCompany = self._companyService.getCompanies()
            .subscribe(function (success) {
            self.myCompaniesList = [];
            self.activeInCompanies = [];
            success.forEach(function (company) {
                if (company.user_company.status != 'LEFT' && company.user_company.status != 'DELETED') {
                    self.myCompaniesList.push(new company_1.Company(company));
                    if (company.user_company.active)
                        self.activeInCompanies.push(new company_1.Company(company));
                }
            });
            self.settingsCommunicationService.updateCompanyList(self.myCompaniesList);
        }, function (error) {
            getCompany.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.leaveCompany = function (company) {
        var _this = this;
        var self = this;
        var companyUsers = this._companyService.getCompanyUsers(company.id)
            .subscribe(function (success) {
            self.currentCompanyUsers = [];
            self.adminCount = 0;
            success.forEach(function (user) {
                if (self.adminCount < 1 && user.user_company.role === 'ADMIN' && user.user_company.active && user.username !== self.logedInUserName) {
                    self.adminCount++;
                }
            });
            if (self.adminCount >= 1) {
                if (self.activeInCompanies.length > 1) {
                    self._companyService.leaveCompany(company.id)
                        .subscribe(function (success) {
                        ga('markettingteam.send', 'event', 'Settings', 'Submit', 'LeaveCompany');
                        _kmq.push(['record', 'Settings Company Left']);
                        self.Message = 'Successfully left ' + company.name;
                        window.toastNotification(self.Message);
                        self.getMyCompanies();
                        var curUrlDomain = window.location.hostname.split('.')[0];
                        var redirectDomain = 'app.outgrow' + _this.subdomainExtension;
                        if (curUrlDomain == company.sub_domain) {
                            for (var i = 0; i < self.myCompaniesList.length; i++) {
                                if (curUrlDomain !== self.myCompaniesList[i].sub_domain && self.myCompaniesList[i].user_company.active) {
                                    redirectDomain = self.myCompaniesList[i].sub_domain + self.subdomainExtension + '/settings/my-account';
                                    break;
                                }
                            }
                            jQuery(location).attr('href', self.protocol + redirectDomain);
                        }
                    }, function (error) {
                        self.Message = error.error.err_message;
                        jQuery('#floatMessage').html(self.Message);
                        window.toastNotification(self.Message);
                        companyUsers.unsubscribe();
                    });
                }
                else {
                    _this.leaveComp = company.id;
                    jQuery('#leaveConfirmation').modal('show');
                }
            }
            else {
                self.Message = 'The company must have another admin!';
                window.toastNotification(self.Message);
            }
        }, function (error) {
            companyUsers.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.acceptInvite = function (company) {
        var self = this;
        var userApproval = self._userService.userApproval(company.sub_domain)
            .subscribe(function (success) {
            jQuery('.comp' + company.id).attr('checked', true);
            self.Message = "Successfully accepted Company request";
            window.toastNotification(self.Message);
            window.location.assign(self.protocol + company.sub_domain + self.subdomainExtension + '/dashboard');
        }, function (error) {
            self.Message = error.error.err_message;
            window.toastNotification(self.Message);
            userApproval.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.createCompany = function () {
        var _this = this;
        var self = this;
        self.Message = '';
        jQuery('#btnCreateCompany').text('Please Wait...').attr('disabled', true);
        var createCompany = self._companyService.createCompany(self.createCompanyForm.value)
            .subscribe(function (success) {
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'AddCompany');
            _kmq.push(['record', 'Settings Company Added']);
            var storage = JSON.parse(self._cookieService.readCookie('storage'));
            storage.companyList.push(success.sub_domain);
            self._cookieService.createCookie('storage', JSON.stringify(storage), 3);
            jQuery('#add-new-company input').val('');
            jQuery('#btnCreateCompany').text('Add New Company');
            jQuery('#add-new-company div.label-floating').addClass('is-empty');
            self.Message = 'Company Created Successfully!';
            window.toastNotification(self.Message);
            jQuery('#add-new-company').modal('hide');
            var cp = JSON.parse(_this._cookieService.readCookie('filepicker_token_json'));
            cp.push({ "key": success.sub_domain, "value": "in_trial" });
            _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(cp), 3);
            window.location.assign(self.protocol + success.sub_domain + self.subdomainExtension + '/dashboard');
        }, function (error) {
            if (error.code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION')
                self.Message = "sub-domain already taken";
            else if (error.error.err_errors != '')
                self.Message = error.error.err_errors.sub_domain.message;
            else
                self.Message = error.error.err_message;
            jQuery('#success-addCompany').removeClass('hide');
            jQuery('#btnCreateCompany').text('Add New Company');
            jQuery('#btnCreateCompany').attr('disabled', false);
            createCompany.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.searchCompany = function () {
        var _this = this;
        var self = this;
        var joined = false;
        self.Message = '';
        self.searchedCompanyList = [];
        self.joinedCompanyList = [];
        this.error = false;
        jQuery('#searchError').removeClass('hide');
        if (self.joinCompanyForm.value.searchCompany.length > 2) {
            var searchCompany_1 = self._companyService.searchCompany(self.joinCompanyForm.value.searchCompany)
                .subscribe(function (success) {
                _this.error = false;
                jQuery('#success-joinCompany').addClass('hide');
                self.searchedCompanyList = [];
                self.joinedCompanyList = [];
                self.invitedCompanyList = [];
                success.companies.forEach(function (company) {
                    joined = false;
                    for (var i = 0; i < self.myCompaniesList.length; i++) {
                        if (self.myCompaniesList[i].sub_domain === company.sub_domain) {
                            if (self.myCompaniesList[i].user_company.status === 'REQUESTED' && self.myCompaniesList[i].user_company.active === false)
                                self.joinedCompanyList.push(new company_1.Company(company));
                            else if (self.myCompaniesList[i].user_company.status === 'INVITED' && self.myCompaniesList[i].user_company.active === false)
                                self.invitedCompanyList.push(new company_1.Company(company));
                            joined = true;
                            break;
                        }
                    }
                    if (!joined) {
                        self.searchedCompanyList.push(new company_1.Company(company));
                    }
                });
                if (self.searchedCompanyList.length === 0 && self.joinedCompanyList.length === 0 && self.invitedCompanyList.length === 0) {
                    self.Message = 'No Companies Found';
                    jQuery('#searchError').addClass('hide');
                    jQuery('#success-joinCompany').removeClass('hide');
                }
            }, function (error) {
                _this.error = true;
                self.Message = error.error.err_message;
                jQuery('#success-joinCompany').removeClass('hide');
                searchCompany_1.unsubscribe();
            });
        }
        else {
            this.error = true;
        }
    };
    UserCompaniesComponent.prototype.joinCompany = function (company) {
        var self = this;
        jQuery('#join' + company.id).html('Please Wait...');
        var joinCompany = self._companyService.joinCompany(company.id)
            .subscribe(function (success) {
            jQuery('#join' + company.id).html('Request sent');
            jQuery('#joined' + company.id).removeClass('companies-box-hover');
            jQuery('#joined' + company.id).addClass('companies-box-request');
            self.getMyCompanies();
        }, function (error) {
            self.Message = error.error.err_message;
            jQuery('#success-joinCompany').removeClass('hide');
            joinCompany.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.deleteMe = function () {
        jQuery('#leaveConfirmation').modal('hide');
        var self = this;
        var deleteCompany = self._companyService.leaveCompany(self.leaveComp)
            .subscribe(function (success) {
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'LeaveCompany');
            _kmq.push(['record', 'Settings Company Left']);
            window.toastNotification('Company Left Successfully');
            self._userService.logout()
                .subscribe(function () {
                self.loggedInService.logout();
                window.location.assign(self.protocol + env_config_1.Config.PARENT_APP_DOMAIN);
            });
        }, function (error) {
            self.Message = error.error.message;
            window.toastNotification(self.Message);
            deleteCompany.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case 'EDITCOMPANY':
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'EditCompany');
                _kmq.push(['record', 'Settings Edit Company Click']);
                break;
            case 'LEAVECOMPANY':
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'LeaveCompany');
                _kmq.push(['record', 'Settings Leave Company Click']);
                break;
            case 'ADDCOMPANY':
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'AddCompany');
                _kmq.push(['record', 'Settings Add Company Click']);
                break;
            case 'JOINCOMPANY':
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'JoinCompany');
                _kmq.push(['record', 'Settings Join Company Click']);
                break;
        }
    };
    UserCompaniesComponent.prototype.showDetails = function (company) {
        this.clickedCompany = company;
        jQuery('#companyLists').addClass('hide');
        jQuery('#companyDetails').removeClass('hide');
    };
    UserCompaniesComponent.prototype.backToList = function () {
        jQuery('#companyDetails').addClass('hide');
        jQuery('#companyLists').removeClass('hide');
    };
    UserCompaniesComponent.prototype.generateApiKey = function (compId) {
        var _this = this;
        var self = this;
        var generateApiKey = self._companyService.generateApiKey(compId)
            .subscribe(function (success) {
            _this.clickedCompany = new company_1.Company(success);
        }, function (error) {
            self.Message = error.error.message;
            window.toastNotification(self.Message);
            generateApiKey.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.copyApi = function () {
        clipboard.copy(jQuery('#input-api')[0].value);
        window.toastNotification('API Copied');
    };
    UserCompaniesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-user-companies',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            templateUrl: 'usercompanies.component.html',
            styleUrls: ['usercompanies.component.css', './../../teamSetting/teamSetting.component.css'],
            inputs: ['myCompaniesList']
        }), 
        __metadata('design:paramtypes', [index_1.CompanyService, forms_1.FormBuilder, router_1.Router, index_1.UserService, index_1.LoggedInService, index_1.SettingsCommunicationService, index_1.CookieService])
    ], UserCompaniesComponent);
    return UserCompaniesComponent;
}());
exports.UserCompaniesComponent = UserCompaniesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytTZXR0aW5ncy9hY2NvdW50L3VzZXJDb21wYW5pZXMvdXNlcmNvbXBhbmllcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCxzQkFBMkUsZ0JBQWdCLENBQUMsQ0FBQTtBQUM1RiwyQkFBdUIsaUNBQWlDLENBQUMsQ0FBQTtBQUN6RCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxzQkFBcUcsbUNBQW1DLENBQUMsQ0FBQTtBQUN6SSx3QkFBd0IsbUNBQW1DLENBQUMsQ0FBQTtBQWlCNUQ7SUE4QkMsZ0NBQ1MsZUFBK0IsRUFDaEMsRUFBYyxFQUNkLE1BQWUsRUFDZixZQUEwQixFQUN6QixlQUFnQyxFQUNoQyw0QkFBeUQsRUFDekQsY0FBNEI7UUFONUIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQ2hDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBNkI7UUFDekQsbUJBQWMsR0FBZCxjQUFjLENBQWM7UUFqQ3JDLHVCQUFrQixHQUFRLEVBQUUsQ0FBQztRQUM3QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBTyxFQUFFLENBQUM7UUFDakIsd0JBQW1CLEdBQU8sRUFBRSxDQUFDO1FBQzdCLGVBQVUsR0FBTyxDQUFDLENBQUM7UUFFbkIsb0JBQWUsR0FBTyxFQUFFLENBQUM7UUFFekIsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVcsS0FBSyxDQUFDO1FBQzFCLGVBQVUsR0FBVSxDQUFDLENBQUM7UUFDdEIsYUFBUSxHQUFVLENBQUMsQ0FBQztRQUNwQixnQkFBVyxHQUFP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LElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO2FBQzlELFNBQVMsQ0FDVCxVQUFDLE9BQVc7WUFDWCxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQ0QsVUFBQyxLQUFTO1lBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNuQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQ0QsQ0FBQztJQUNKLENBQUM7SUFDRCx3Q0FBTyxHQUFQO1FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUF6ZEY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsVUFBVSxFQUFFLENBQUMsZ0NBQXdCLENBQUM7WUFDdEMsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSwrQ0FBK0MsQ0FBQztZQUMzRixNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztTQUMzQixDQUFDOzs4QkFBQTtJQW1kRiw2QkFBQztBQUFELENBamRBLEFBaWRDLElBQUE7QUFqZFksOEJBQXNCLHlCQWlkbEMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rU2V0dGluZ3MvYWNjb3VudC91c2VyQ29tcGFuaWVzL3VzZXJjb21wYW5pZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCxFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLy4uLy4uLy4uLy4uL2NvbmZpZy9lbnYuY29uZmlnJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7Q29tcGFueVNlcnZpY2UsVXNlclNlcnZpY2UsTG9nZ2VkSW5TZXJ2aWNlLFNldHRpbmdzQ29tbXVuaWNhdGlvblNlcnZpY2UsQ29va2llU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBhbnkgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2NvbXBhbnknO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcclxuZGVjbGFyZSB2YXIgZ2E6YW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5kZWNsYXJlIHZhciBjbGlwYm9hcmQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdvZy11c2VyLWNvbXBhbmllcycsXHJcblx0ZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU10sXHJcblx0dGVtcGxhdGVVcmw6ICd1c2VyY29tcGFuaWVzLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsndXNlcmNvbXBhbmllcy5jb21wb25lbnQuY3NzJywgJy4vLi4vLi4vdGVhbVNldHRpbmcvdGVhbVNldHRpbmcuY29tcG9uZW50LmNzcyddLFxyXG5cdGlucHV0czogWydteUNvbXBhbmllc0xpc3QnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJDb21wYW5pZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdG15Q29tcGFuaWVzTGlzdDphbnk7XHJcblx0YWN0aXZlSW5Db21wYW5pZXM6YW55O1xyXG5cdHVwZGF0ZUNvbXBhbnk6IGFueTtcclxuXHRzdWJkb21haW5FeHRlbnNpb246IGFueSA9ICcnO1xyXG5cdHByb3RvY29sOiBzdHJpbmcgPSAnJztcclxuXHRNZXNzYWdlOmFueSA9ICcnO1xyXG5cdGN1cnJlbnRDb21wYW55VXNlcnM6YW55ID0gW107XHJcblx0YWRtaW5Db3VudDphbnkgPSAwO1xyXG5cdHVwZGF0ZUNvbXBhbnlGb3JtOkZvcm1Hcm91cDtcclxuXHRsb2dlZEluVXNlck5hbWU6YW55ID0gJyc7XHJcblx0Ly8gbXlDb21wYW5pZXNMaXN0VXBkYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdHVwZENvbXBOYW1lOnN0cmluZyA9ICcnO1xyXG5cdHVwZERvbWFpbjpzdHJpbmcgPSAnJztcclxuXHR1cGRBZ2VuY3k6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdHVwZFRyYWZmaWM6bnVtYmVyID0gMDtcclxuXHR1cGRMZWFkczpudW1iZXIgPSAwO1xyXG5cdEVkaXRDb21wYW55OmFueSA9IG5ldyBDb21wYW55KHt9KTtcclxuXHJcbiAgICBzZWFyY2hlZENvbXBhbnlMaXN0OmFueSA9IFtdO1xyXG4gICAgam9pbmVkQ29tcGFueUxpc3Q6YW55ID0gW107XHJcbiAgICBpbnZpdGVkQ29tcGFueUxpc3Q6YW55ID0gW107XHJcblxyXG4gICAgY3JlYXRlQ29tcGFueUZvcm06Rm9ybUdyb3VwO1xyXG4gICAgam9pbkNvbXBhbnlGb3JtOkZvcm1Hcm91cDtcclxuICAgIGVycm9yOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGxlYXZlQ29tcCA9ICcnO1xyXG4gICAgaXNfYWRtaW5fY3JlYXRlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgICBjbGlja2VkQ29tcGFueTphbnkgPSBuZXcgQ29tcGFueSh7fSk7XHJcbiAgICBhcGlLZXk6c3RyaW5nID0gJyc7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIF9jb21wYW55U2VydmljZTogQ29tcGFueVNlcnZpY2UsXHJcblx0XHRwdWJsaWMgZmI6Rm9ybUJ1aWxkZXIsXHJcblx0XHRwdWJsaWMgcm91dGVyIDogUm91dGVyLFxyXG5cdFx0cHVibGljIF91c2VyU2VydmljZSA6IFVzZXJTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBsb2dnZWRJblNlcnZpY2U6IExvZ2dlZEluU2VydmljZSxcclxuXHRcdHByaXZhdGUgc2V0dGluZ3NDb21tdW5pY2F0aW9uU2VydmljZTpTZXR0aW5nc0NvbW11bmljYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfY29va2llU2VydmljZTpDb29raWVTZXJ2aWNlXHJcblx0XHQpe31cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3ViZG9tYWluRXh0ZW5zaW9uID0gJy4nICsgQ29uZmlnLkFQUF9FWFRFTlNJT047XHJcblx0XHR0aGlzLnByb3RvY29sID0gQ29uZmlnLlBST1RPQ09MO1xyXG5cdFx0dGhpcy51cGRhdGVDb21wYW55ID0gbmV3IENvbXBhbnkoe30pO1xyXG5cdFx0aWYodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykgIT09IG51bGwpIHtcclxuXHRcdFx0bGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuXHRcdFx0dGhpcy5sb2dlZEluVXNlck5hbWUgPSBzdG9yYWdlLnVzZXIudXNlcm5hbWU7XHJcblx0XHR9XHJcblx0XHR0aGlzLnVwZGF0ZUNvbXBhbnlGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcblx0XHRcdGNvbXBhbnluYW1lIDogW3RoaXMuRWRpdENvbXBhbnkubmFtZSxWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKV0sXHJcblx0XHRcdGRvbWFpbiA6IFt0aGlzLkVkaXRDb21wYW55LnN1Yl9kb21haW4sVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFZhbGlkYXRvcnMucGF0dGVybignXlthLXpBLVowLTldKiQnKV0pXVxyXG5cdFx0XHQvLyB0cmFmZmljIDpbdGhpcy5FZGl0Q29tcGFueS50cmFmZmljLmZyZXF1ZW5jeSwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLm1heExlbmd0aCgxMCksVmFsaWRhdG9ycy5wYXR0ZXJuKCdeWzAtOV0qJCcpIF0pXSxcclxuXHRcdFx0Ly8gbGVhZHMgICA6W3RoaXMuRWRpdENvbXBhbnkubGVhZHMudG90YWwsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTApLFZhbGlkYXRvcnMucGF0dGVybignXlswLTldKiQnKSBdKV0sXHJcblx0XHRcdC8vIGNvbXBhbnlUeXBlOiBbdGhpcy5FZGl0Q29tcGFueS5hZ2VuY3ldXHJcblx0XHR9KTtcclxuXHRcdGpRdWVyeSgnLm1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdGpRdWVyeSgnLnN1Y2Nlc3MtbWVzc2FnZScpLmFkZENsYXNzKCdoaWRlJyk7XHJcblx0XHRcdHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5sZWF2ZUNvbXAgPSAnJztcclxuXHRcdH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUNvbXBhbnlGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGNvbXBhbnluYW1lIDogWycnLFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXSxcclxuICAgICAgICAgICAgZG9tYWluIDogWycnLFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSxWYWxpZGF0b3JzLnBhdHRlcm4oJ15bYS16QS1aMC05XSokJyldKV1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmpvaW5Db21wYW55Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBzZWFyY2hDb21wYW55OiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKV1cclxuICAgICAgICB9KTtcclxuXHRcdHRoaXMuZ2V0TXlDb21wYW5pZXMoKTtcclxuXHRcdGpRdWVyeSgnLnNsaW1zY3JvbGwnKS5zbGltc2Nyb2xsKHtcclxuXHRcdFx0cmFpbFZpc2libGU6IHRydWUsXHJcblx0XHRcdGFsd2F5c1Zpc2libGU6IHRydWVcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuaXNfYWRtaW5fY3JlYXRlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZGFzaEF1dGhUb2tlbicpKS5pc19hZG1pbl9jcmVhdGVkO1xyXG5cdFx0aWYodGhpcy5pc19hZG1pbl9jcmVhdGVkID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaXNfYWRtaW5fY3JlYXRlZCA9ZmFsc2U7XHJcblx0fVxyXG5cdHBvcHVwVXBkYXRlQ29tcGFueShjb21wYW55OmFueSl7XHJcblx0XHR0aGlzLnVwZGF0ZUNvbXBhbnkgPSBjb21wYW55O1xyXG5cdFx0Ly90aGlzLkVkaXRDb21wYW55ID0gbmV3IENvbXBhbnkoY29tcGFueSk7XHJcblx0XHR0aGlzLkVkaXRDb21wYW55ID0gY29tcGFueTtcclxuXHRcdGNvbnNvbGUubG9nKCd0aGlzLkVkaXRDb21wYW55Jyx0aGlzLkVkaXRDb21wYW55KTtcclxuXHRcdGxldCBjbmFtZSA6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZENvbXBhbnluYW1lJyk7XHJcblx0XHRjbmFtZS52YWx1ZSA9IHRoaXMuRWRpdENvbXBhbnkubmFtZTtcclxuXHRcdGxldCBjZG9tYWluIDphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkRG9tYWluJyk7XHJcblx0XHRjZG9tYWluLnZhbHVlID0gdGhpcy5FZGl0Q29tcGFueS5zdWJfZG9tYWluO1xyXG5cdFx0bGV0IGN0cmFmZmljIDphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkVHJhZmZpYycpO1xyXG5cdFx0Y3RyYWZmaWMudmFsdWUgPSB0aGlzLkVkaXRDb21wYW55LnRyYWZmaWMuZnJlcXVlbmN5O1xyXG5cdFx0bGV0IGNsZWFkcyA6YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZExlYWRzJyk7XHJcblx0XHRjbGVhZHMudmFsdWUgPSB0aGlzLkVkaXRDb21wYW55LmxlYWRzLnRvdGFsO1xyXG5cdFx0aWYodGhpcy5FZGl0Q29tcGFueS5uYW1lID09ICcnIHx8IHRoaXMuRWRpdENvbXBhbnkubmFtZSA9PSBudWxsKVxyXG5cdFx0XHRqUXVlcnkoJyN1cGRDb21wYW55bmFtZURpdicpLmFkZENsYXNzKCdpcy1lbXB0eScpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRqUXVlcnkoJyN1cGRDb21wYW55bmFtZURpdicpLnJlbW92ZUNsYXNzKCdpcy1lbXB0eScpO1xyXG5cclxuXHRcdGlmKCF0aGlzLkVkaXRDb21wYW55LnN1Yl9kb21haW4pXHJcblx0XHRcdGpRdWVyeSgnI3VwZERvbWFpbkRpdicpLmFkZENsYXNzKCdpcy1lbXB0eScpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRqUXVlcnkoJyN1cGREb21haW5EaXYnKS5yZW1vdmVDbGFzcygnaXMtZW1wdHknKTtcclxuXHJcblx0XHRpZighdGhpcy5FZGl0Q29tcGFueS50cmFmZmljLmZyZXF1ZW5jeSlcclxuXHRcdFx0alF1ZXJ5KCcjdXBkVHJhZmZpY0RpdicpLmFkZENsYXNzKCdpcy1lbXB0eScpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRqUXVlcnkoJyN1cGRUcmFmZmljRGl2JykucmVtb3ZlQ2xhc3MoJ2lzLWVtcHR5Jyk7XHJcblxyXG5cdFx0aWYoIXRoaXMuRWRpdENvbXBhbnkubGVhZHMudG90YWwpXHJcblx0XHRcdGpRdWVyeSgnI3VwZExlYWRzRGl2JykuYWRkQ2xhc3MoJ2lzLWVtcHR5Jyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGpRdWVyeSgnI3VwZExlYWRzRGl2JykucmVtb3ZlQ2xhc3MoJ2lzLWVtcHR5Jyk7XHJcblxyXG5cdFx0Ly9qUXVlcnkoJ2NoYW5nZS1jb21wYW55LW5hbWUnKS5tb2RhbCgnc2hvdycpO1xyXG5cdH1cclxuXHR1cGRhdGVUaGlzQ29tcGFueSgpe1xyXG5cdFx0bGV0IHNlbGY9IHRoaXM7XHJcblx0XHRqUXVlcnkoJyNidG5VcGRhdGVDb21wYW55JykudGV4dCgnUGxlYXNlIHdhaXQuLi4nKTtcclxuXHRcdGpRdWVyeSgnI2J0blVwZGF0ZUNvbXBhbnknKS5hdHRyKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcblx0XHRsZXQgdXBkYXRlQ29tcGFueSA9IHNlbGYuX2NvbXBhbnlTZXJ2aWNlLnVwZGF0ZUNvbXBhbnkodGhpcy51cGRhdGVDb21wYW55LmlkLHRoaXMudXBkYXRlQ29tcGFueUZvcm0udmFsdWUpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KHN1Y2Nlc3M6YW55KT0+e1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcjYnRuVXBkYXRlQ29tcGFueScpLnRleHQoJ1VwZGF0ZScpO1xyXG4gICAgICAgICAgICBcdFx0alF1ZXJ5KCcjYnRuVXBkYXRlQ29tcGFueScpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcblx0XHRcdFx0XHQvKi0tLS0gVHJhY2tpbmcgY29kZSBnb2VzIGhlcmUgLS0tLSovXHJcblx0XHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdTdWJtaXQnLCAnRWRpdENvbXBhbnknKTtcclxuXHRcdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdTZXR0aW5ncyBDb21wYW55IEVkaXR0ZWQnXSk7XHJcblx0XHRcdFx0XHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblx0XHRcdFx0XHRqUXVlcnkoJyNjaGFuZ2UtY29tcGFueS1uYW1lJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGpRdWVyeSgnI2NoYW5nZS1jb21wYW55LW5hbWUgaW5wdXQnKS52YWwoJycpO1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcjY2hhbmdlLWNvbXBhbnktbmFtZSBkaXYubGFiZWwtZmxvYXRpbmcnKS5hZGRDbGFzcygnaXMtZW1wdHknKTtcclxuXHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9ICdDb21wYW55IFVwZGF0ZWQgU3VjY2Vzc2Z1bGx5ISc7XHJcblx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oc2VsZi5NZXNzYWdlKTtcclxuXHRcdFx0XHRcdC8qalF1ZXJ5KCcjZmxvYXRNZXNzYWdlVUMnKS5odG1sKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRqUXVlcnkoJyN1Y0Zsb2F0TWVzc2FnZScpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRqUXVlcnkoJyN1Y0Zsb2F0TWVzc2FnZScpLmZhZGVJbigpXHJcblx0XHRcdFx0XHRcdC5hbmltYXRlKHtib3R0b206NDB9LCAxMDAwLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vY2FsbCBiYWNrXHJcblx0XHRcdFx0XHRcdH0pOyovXHJcblxyXG5cdFx0XHRcdFx0Ly8galF1ZXJ5KCcudG9hc3QnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG5cdFx0XHRcdFx0Ly8gc2VsZi5jbG9zZUxheW92ZXIoKTtcclxuXHRcdFx0XHRcdGpRdWVyeSgnI2J0blVwZGF0ZUNvbXBhbnknKS50ZXh0KCdVcGRhdGUnKTtcclxuXHRcdFx0XHRcdHNlbGYuZ2V0TXlDb21wYW5pZXMoKTtcclxuXHRcdFx0XHRcdGxldCBjdXJVcmxEb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3BsaXQoJy4nKVswXTtcclxuXHRcdFx0XHRcdGxldCByZWRpcmVjdERvbWFpbiA9ICcnO1xyXG5cdFx0XHRcdFx0aWYoY3VyVXJsRG9tYWluID09IHNlbGYudXBkYXRlQ29tcGFueS5zdWJfZG9tYWluICYmIGN1clVybERvbWFpbiAhPSB0aGlzLnVwZGF0ZUNvbXBhbnlGb3JtLnZhbHVlLmRvbWFpbil7XHJcblx0XHRcdFx0XHQgIGNvbnNvbGUubG9nKFwiQ1VMUFJJVCAxXCIpO1xyXG5cdFx0XHRcdFx0XHRyZWRpcmVjdERvbWFpbiA9IHRoaXMudXBkYXRlQ29tcGFueUZvcm0udmFsdWUuZG9tYWluICsgc2VsZi5zdWJkb21haW5FeHRlbnNpb247XHJcblx0XHRcdFx0XHRcdGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicsc2VsZi5wcm90b2NvbCtyZWRpcmVjdERvbWFpbisnL3NldHRpbmdzJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+e1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcjYnRuVXBkYXRlQ29tcGFueScpLnRleHQoJ1VwZGF0ZScpO1xyXG4gICAgICAgICAgICBcdFx0alF1ZXJ5KCcjYnRuVXBkYXRlQ29tcGFueScpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcblx0XHRcdFx0XHRpZihlcnJvci5lcnJvci5jb2RlID09PSAnRV9VTklRVUVfVU5JREVOVElGSUVEX1ZBTElEQVRJT04nKXtcclxuICAgICAgICAgICAgICAgIFx0XHRzZWxmLk1lc3NhZ2UgPSBcInN1Yi1kb21haW4gYWxyZWFkeSB0YWtlblwiO1xyXG5cdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgXHRlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIFx0c2VsZi5NZXNzYWdlID0gZXJyb3IuZXJyb3IuZXJyX21lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBcdH1cclxuXHRcdFx0XHRcdGpRdWVyeSgnI3N1Y2Nlc3MtdXBkYXRlQ29tcGFueScpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblx0XHRcdFx0XHR1cGRhdGVDb21wYW55LnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHRoaWRlRXJyb3IoKXtcclxuXHRcdGpRdWVyeSgnLnN1Y2Nlc3MtbWVzc2FnZScpLmFkZENsYXNzKCdoaWRlJyk7XHJcblx0fVxyXG5cdGdldE15Q29tcGFuaWVzKCl7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0XHRsZXQgZ2V0Q29tcGFueSA9IHNlbGYuX2NvbXBhbnlTZXJ2aWNlLmdldENvbXBhbmllcygpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KHN1Y2Nlc3M6YW55KT0+e1xyXG5cdFx0XHRcdFx0c2VsZi5teUNvbXBhbmllc0xpc3QgPSBbXTtcclxuXHRcdFx0XHRcdHNlbGYuYWN0aXZlSW5Db21wYW5pZXMgPSBbXTtcclxuXHRcdFx0XHRcdHN1Y2Nlc3MuZm9yRWFjaCgoY29tcGFueTphbnkpPT57XHJcblx0XHRcdFx0XHRcdGlmKGNvbXBhbnkudXNlcl9jb21wYW55LnN0YXR1cyAhPSAnTEVGVCcgJiYgY29tcGFueS51c2VyX2NvbXBhbnkuc3RhdHVzICE9ICdERUxFVEVEJyl7XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5teUNvbXBhbmllc0xpc3QucHVzaChuZXcgQ29tcGFueShjb21wYW55KSk7XHJcblx0XHRcdFx0XHRcdFx0aWYoY29tcGFueS51c2VyX2NvbXBhbnkuYWN0aXZlKVxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5hY3RpdmVJbkNvbXBhbmllcy5wdXNoKG5ldyBDb21wYW55KGNvbXBhbnkpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRzZWxmLnNldHRpbmdzQ29tbXVuaWNhdGlvblNlcnZpY2UudXBkYXRlQ29tcGFueUxpc3Qoc2VsZi5teUNvbXBhbmllc0xpc3QpO1xyXG5cdFx0XHRcdFx0Ly8gc2VsZi5teUNvbXBhbmllc0xpc3RVcGRhdGVkLmVtaXQoc2VsZi5teUNvbXBhbmllc0xpc3QpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0KGVycm9yOmFueSk9PntcclxuXHRcdFx0XHRcdGdldENvbXBhbnkudW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cclxuXHRsZWF2ZUNvbXBhbnkoY29tcGFueTphbnkpe1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0bGV0IGNvbXBhbnlVc2VycyA9IHRoaXMuX2NvbXBhbnlTZXJ2aWNlLmdldENvbXBhbnlVc2Vycyhjb21wYW55LmlkKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChzdWNjZXNzOmFueSk9PntcclxuXHRcdFx0XHRcdHNlbGYuY3VycmVudENvbXBhbnlVc2VycyA9IFtdO1xyXG5cdFx0XHRcdFx0c2VsZi5hZG1pbkNvdW50ID0gMDtcclxuXHRcdFx0XHRcdHN1Y2Nlc3MuZm9yRWFjaCgodXNlcjphbnkpPT57XHJcblx0XHRcdFx0XHRcdGlmKHNlbGYuYWRtaW5Db3VudCA8IDEgJiYgdXNlci51c2VyX2NvbXBhbnkucm9sZSA9PT0gJ0FETUlOJyAmJiB1c2VyLnVzZXJfY29tcGFueS5hY3RpdmUgJiYgdXNlci51c2VybmFtZSAhPT0gc2VsZi5sb2dlZEluVXNlck5hbWUpe1xyXG5cdFx0XHRcdFx0XHRcdHNlbGYuYWRtaW5Db3VudCsrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGlmKHNlbGYuYWRtaW5Db3VudCA+PSAxKXtcclxuXHRcdFx0XHRcdFx0aWYoc2VsZi5hY3RpdmVJbkNvbXBhbmllcy5sZW5ndGggPiAxKXtcclxuXHRcdFx0XHRcdFx0XHRzZWxmLl9jb21wYW55U2VydmljZS5sZWF2ZUNvbXBhbnkoY29tcGFueS5pZClcclxuXHRcdFx0XHRcdFx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0XHRcdFx0XHRcdChzdWNjZXNzOmFueSk9PntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKi0tLS0gVHJhY2tpbmcgY29kZSBnb2VzIGhlcmUgLS0tLSovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnU3VibWl0JywgJ0xlYXZlQ29tcGFueScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdTZXR0aW5ncyBDb21wYW55IExlZnQnXSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9ICdTdWNjZXNzZnVsbHkgbGVmdCAnK2NvbXBhbnkubmFtZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvL2pRdWVyeSgnI2Zsb2F0TWVzc2FnZVVDJykuaHRtbChzZWxmLk1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbihzZWxmLk1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vc2VsZi5jbG9zZUxheW92ZXIoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxmLmdldE15Q29tcGFuaWVzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IGN1clVybERvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpWzBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxldCByZWRpcmVjdERvbWFpbiA9ICdhcHAub3V0Z3JvdycgKyB0aGlzLnN1YmRvbWFpbkV4dGVuc2lvbjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZihjdXJVcmxEb21haW4gPT0gY29tcGFueS5zdWJfZG9tYWluKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvcih2YXIgaSA9MDsgaTwgc2VsZi5teUNvbXBhbmllc0xpc3QubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihjdXJVcmxEb21haW4gIT09IHNlbGYubXlDb21wYW5pZXNMaXN0W2ldLnN1Yl9kb21haW4gJiYgc2VsZi5teUNvbXBhbmllc0xpc3RbaV0udXNlcl9jb21wYW55LmFjdGl2ZSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVkaXJlY3REb21haW4gPSBzZWxmLm15Q29tcGFuaWVzTGlzdFtpXS5zdWJfZG9tYWluICsgc2VsZi5zdWJkb21haW5FeHRlbnNpb24gKyAnL3NldHRpbmdzL215LWFjY291bnQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkobG9jYXRpb24pLmF0dHIoJ2hyZWYnLHNlbGYucHJvdG9jb2wrcmVkaXJlY3REb21haW4pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0KGVycm9yOmFueSk9PntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxmLk1lc3NhZ2UgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoJyNmbG9hdE1lc3NhZ2UnKS5odG1sKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9qUXVlcnkoJyN1Y0Zsb2F0TWVzc2FnZScpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LypqUXVlcnkoJyN1Y0Zsb2F0TWVzc2FnZScpLmZhZGVPdXQoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5hbmltYXRlKHtib3R0b206NDB9LCAxMDAwLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgXHRcdC8vY2FsbCBiYWNrXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB9KTsqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbXBhbnlVc2Vycy51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5sZWF2ZUNvbXAgPSBjb21wYW55LmlkO1xyXG5cdFx0XHRcdFx0XHRcdGpRdWVyeSgnI2xlYXZlQ29uZmlybWF0aW9uJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0c2VsZi5NZXNzYWdlID0gJ1RoZSBjb21wYW55IG11c3QgaGF2ZSBhbm90aGVyIGFkbWluISc7XHJcblx0XHRcdFx0XHRcdC8valF1ZXJ5KCcjZmxvYXRNZXNzYWdlVUMnKS5odG1sKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbihzZWxmLk1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0KGVycm9yOmFueSk9PntcclxuXHRcdFx0XHRcdGNvbXBhbnlVc2Vycy51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblxyXG5cdGFjY2VwdEludml0ZShjb21wYW55OmFueSl7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0XHRsZXQgdXNlckFwcHJvdmFsID0gc2VsZi5fdXNlclNlcnZpY2UudXNlckFwcHJvdmFsKGNvbXBhbnkuc3ViX2RvbWFpbilcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoc3VjY2VzczphbnkpPT57XHJcblx0XHRcdFx0XHRqUXVlcnkoJy5jb21wJytjb21wYW55LmlkKS5hdHRyKCdjaGVja2VkJyx0cnVlKTtcclxuXHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9IFwiU3VjY2Vzc2Z1bGx5IGFjY2VwdGVkIENvbXBhbnkgcmVxdWVzdFwiO1xyXG5cdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uYXNzaWduKHNlbGYucHJvdG9jb2wrY29tcGFueS5zdWJfZG9tYWluICsgc2VsZi5zdWJkb21haW5FeHRlbnNpb24gKyAnL2Rhc2hib2FyZCcpO1xyXG5cdFx0XHRcdFx0Ly9zZWxmLmdldE15Q29tcGFuaWVzKCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+e1xyXG5cdFx0XHRcdFx0c2VsZi5NZXNzYWdlID0gZXJyb3IuZXJyb3IuZXJyX21lc3NhZ2U7XHJcblx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oc2VsZi5NZXNzYWdlKTtcclxuXHRcdFx0XHRcdHVzZXJBcHByb3ZhbCAudW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG4gICAgY3JlYXRlQ29tcGFueSgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5NZXNzYWdlID0gJyc7XHJcbiAgICAgICAgalF1ZXJ5KCcjYnRuQ3JlYXRlQ29tcGFueScpLnRleHQoJ1BsZWFzZSBXYWl0Li4uJykuYXR0cignZGlzYWJsZWQnLHRydWUpO1xyXG4gICAgICAgIGxldCBjcmVhdGVDb21wYW55ID0gc2VsZi5fY29tcGFueVNlcnZpY2UuY3JlYXRlQ29tcGFueShzZWxmLmNyZWF0ZUNvbXBhbnlGb3JtLnZhbHVlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHN1Y2Nlc3M6YW55KT0+IHtcclxuICAgICAgICAgICAgICAgIFx0LyotLS0tIFRyYWNraW5nIGNvZGUgZ29lcyBoZXJlIC0tLS0qL1xyXG4gICAgICAgICAgICAgICAgXHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdTdWJtaXQnLCAnQWRkQ29tcGFueScpO1xyXG5cdFx0XHRcdFx0ICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgQ29tcGFueSBBZGRlZCddKTtcclxuICAgICAgICAgICAgICAgIFx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgICAgICAgICAgICAgXHRsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2Uoc2VsZi5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG4gICAgICAgICAgICAgICAgICBzdG9yYWdlLmNvbXBhbnlMaXN0LnB1c2goc3VjY2Vzcy5zdWJfZG9tYWluKTtcclxuICAgICAgICAgICAgICAgICAgc2VsZi5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ3N0b3JhZ2UnLEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpLDMpO1xyXG4gICAgICAgICAgICAgICAgICBqUXVlcnkoJyNhZGQtbmV3LWNvbXBhbnkgaW5wdXQnKS52YWwoJycpO1xyXG4gICAgICAgICAgICAgICAgICBqUXVlcnkoJyNidG5DcmVhdGVDb21wYW55JykudGV4dCgnQWRkIE5ldyBDb21wYW55Jyk7XHJcbiAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2FkZC1uZXctY29tcGFueSBkaXYubGFiZWwtZmxvYXRpbmcnKS5hZGRDbGFzcygnaXMtZW1wdHknKTtcclxuICAgICAgICAgICAgICAgICAgc2VsZi5NZXNzYWdlID0gJ0NvbXBhbnkgQ3JlYXRlZCBTdWNjZXNzZnVsbHkhJztcclxuICAgICAgICAgICAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2FkZC1uZXctY29tcGFueScpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgbGV0IGNwID0gSlNPTi5wYXJzZSh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ2ZpbGVwaWNrZXJfdG9rZW5fanNvbicpKTtcclxuICAgICAgICAgICAgICAgICAgY3AucHVzaCh7XCJrZXlcIjogc3VjY2Vzcy5zdWJfZG9tYWluLFwidmFsdWVcIjogXCJpbl90cmlhbFwifSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nLCBKU09OLnN0cmluZ2lmeShjcCksIDMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihzZWxmLnByb3RvY29sK3N1Y2Nlc3Muc3ViX2RvbWFpbiArIHNlbGYuc3ViZG9tYWluRXh0ZW5zaW9uICsgJy9kYXNoYm9hcmQnKTtcclxuICAgICAgICAgICAgICAgICAgLy9zZWxmLmdldE15Q29tcGFuaWVzKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yOmFueSk9PiB7XHJcbiAgICAgICAgICAgICAgICBcdGlmKGVycm9yLmNvZGUgPT09ICdFX1VOSVFVRV9VTklERU5USUZJRURfVkFMSURBVElPTicpXHJcbiAgICAgICAgICAgICAgICBcdFx0c2VsZi5NZXNzYWdlID0gXCJzdWItZG9tYWluIGFscmVhZHkgdGFrZW5cIjtcclxuICAgICAgICAgICAgICAgIFx0ZWxzZSBpZihlcnJvci5lcnJvci5lcnJfZXJyb3JzICE9ICcnKVxyXG4gICAgICAgICAgICAgICAgXHRcdHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9lcnJvcnMuc3ViX2RvbWFpbi5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgXHRlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgXHRzZWxmLk1lc3NhZ2UgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNzdWNjZXNzLWFkZENvbXBhbnknKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2J0bkNyZWF0ZUNvbXBhbnknKS50ZXh0KCdBZGQgTmV3IENvbXBhbnknKTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNidG5DcmVhdGVDb21wYW55JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHRcdFx0XHRcdCAgICAgICAgICBjcmVhdGVDb21wYW55LnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hDb21wYW55KCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgam9pbmVkID0gZmFsc2U7XHJcbiAgICAgICAgc2VsZi5NZXNzYWdlID0gJyc7XHJcbiAgICAgICAgc2VsZi5zZWFyY2hlZENvbXBhbnlMaXN0ID0gW107XHJcbiAgICAgICAgc2VsZi5qb2luZWRDb21wYW55TGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBqUXVlcnkoJyNzZWFyY2hFcnJvcicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgaWYoc2VsZi5qb2luQ29tcGFueUZvcm0udmFsdWUuc2VhcmNoQ29tcGFueS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hDb21wYW55ID0gc2VsZi5fY29tcGFueVNlcnZpY2Uuc2VhcmNoQ29tcGFueShzZWxmLmpvaW5Db21wYW55Rm9ybS52YWx1ZS5zZWFyY2hDb21wYW55KVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAoc3VjY2VzczphbnkpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFx0dGhpcy5lcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNzdWNjZXNzLWpvaW5Db21wYW55JykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWFyY2hlZENvbXBhbnlMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuam9pbmVkQ29tcGFueUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnZpdGVkQ29tcGFueUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcy5jb21wYW5pZXMuZm9yRWFjaCgoY29tcGFueTphbnkpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam9pbmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDsgaSA8IHNlbGYubXlDb21wYW5pZXNMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLm15Q29tcGFuaWVzTGlzdFtpXS5zdWJfZG9tYWluID09PSBjb21wYW55LnN1Yl9kb21haW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5teUNvbXBhbmllc0xpc3RbaV0udXNlcl9jb21wYW55LnN0YXR1cyA9PT0gJ1JFUVVFU1RFRCcgJiYgc2VsZi5teUNvbXBhbmllc0xpc3RbaV0udXNlcl9jb21wYW55LmFjdGl2ZSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmpvaW5lZENvbXBhbnlMaXN0LnB1c2gobmV3IENvbXBhbnkoY29tcGFueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHNlbGYubXlDb21wYW5pZXNMaXN0W2ldLnVzZXJfY29tcGFueS5zdGF0dXMgPT09ICdJTlZJVEVEJyAmJiBzZWxmLm15Q29tcGFuaWVzTGlzdFtpXS51c2VyX2NvbXBhbnkuYWN0aXZlID09PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW52aXRlZENvbXBhbnlMaXN0LnB1c2gobmV3IENvbXBhbnkoY29tcGFueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2luZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWpvaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VhcmNoZWRDb21wYW55TGlzdC5wdXNoKG5ldyBDb21wYW55KGNvbXBhbnkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuc2VhcmNoZWRDb21wYW55TGlzdC5sZW5ndGggPT09IDAgJiYgc2VsZi5qb2luZWRDb21wYW55TGlzdC5sZW5ndGggPT09IDAgJiYgc2VsZi5pbnZpdGVkQ29tcGFueUxpc3QubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuTWVzc2FnZSA9ICdObyBDb21wYW5pZXMgRm91bmQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjc2VhcmNoRXJyb3InKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjc3VjY2Vzcy1qb2luQ29tcGFueScpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcjphbnkpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFx0dGhpcy5lcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNzdWNjZXNzLWpvaW5Db21wYW55JykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0c2VhcmNoQ29tcGFueS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgIFx0dGhpcy5lcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgam9pbkNvbXBhbnkoY29tcGFueTphbnkpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgalF1ZXJ5KCcjam9pbicrY29tcGFueS5pZCkuaHRtbCgnUGxlYXNlIFdhaXQuLi4nKTtcclxuICAgICAgICBsZXQgam9pbkNvbXBhbnkgPSBzZWxmLl9jb21wYW55U2VydmljZS5qb2luQ29tcGFueShjb21wYW55LmlkKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChzdWNjZXNzOmFueSk9PiB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNqb2luJytjb21wYW55LmlkKS5odG1sKCdSZXF1ZXN0IHNlbnQnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2pvaW5lZCcrY29tcGFueS5pZCkucmVtb3ZlQ2xhc3MoJ2NvbXBhbmllcy1ib3gtaG92ZXInKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2pvaW5lZCcrY29tcGFueS5pZCkuYWRkQ2xhc3MoJ2NvbXBhbmllcy1ib3gtcmVxdWVzdCcpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5nZXRNeUNvbXBhbmllcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6YW55KT0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjc3VjY2Vzcy1qb2luQ29tcGFueScpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblx0XHRcdFx0am9pbkNvbXBhbnkudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVNZSgpIHtcclxuXHRcdGpRdWVyeSgnI2xlYXZlQ29uZmlybWF0aW9uJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGxldCBkZWxldGVDb21wYW55ID0gc2VsZi5fY29tcGFueVNlcnZpY2UubGVhdmVDb21wYW55KHNlbGYubGVhdmVDb21wKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChzdWNjZXNzOmFueSk9PiB7XHJcblx0XHRcdFx0XHQvKi0tLS0gVHJhY2tpbmcgY29kZSBnb2VzIGhlcmUgLS0tLSovXHJcblx0XHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdTdWJtaXQnLCAnTGVhdmVDb21wYW55Jyk7XHJcblx0XHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgQ29tcGFueSBMZWZ0J10pO1xyXG5cdFx0XHRcdFx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdDb21wYW55IExlZnQgU3VjY2Vzc2Z1bGx5Jyk7XHJcblx0XHRcdFx0XHRzZWxmLl91c2VyU2VydmljZS5sb2dvdXQoKVxyXG5cdFx0XHRcdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYubG9nZ2VkSW5TZXJ2aWNlLmxvZ291dCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmFzc2lnbihzZWxmLnByb3RvY29sK0NvbmZpZy5QQVJFTlRfQVBQX0RPTUFJTik7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+IHtcclxuXHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLm1lc3NhZ2U7XHJcblx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oc2VsZi5NZXNzYWdlKTtcclxuXHRcdFx0XHRcdGRlbGV0ZUNvbXBhbnkudW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cclxuXHJcbiAgICBjYWxsR0Eob3B0OiBzdHJpbmcpe1xyXG5cdFx0c3dpdGNoIChvcHQpIHtcclxuXHRcdFx0Y2FzZSAnRURJVENPTVBBTlknOlxyXG5cdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ0NsaWNrJywgJ0VkaXRDb21wYW55Jyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ1NldHRpbmdzIEVkaXQgQ29tcGFueSBDbGljayddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnTEVBVkVDT01QQU5ZJzpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdDbGljaycsICdMZWF2ZUNvbXBhbnknKTtcclxuXHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgTGVhdmUgQ29tcGFueSBDbGljayddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnQUREQ09NUEFOWSc6XHJcblx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnQ2xpY2snLCAnQWRkQ29tcGFueScpO1xyXG5cdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdTZXR0aW5ncyBBZGQgQ29tcGFueSBDbGljayddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnSk9JTkNPTVBBTlknOlxyXG5cdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ0NsaWNrJywgJ0pvaW5Db21wYW55Jyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ1NldHRpbmdzIEpvaW4gQ29tcGFueSBDbGljayddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNob3dEZXRhaWxzKGNvbXBhbnk6YW55KXtcclxuXHRcdHRoaXMuY2xpY2tlZENvbXBhbnkgPSBjb21wYW55O1xyXG5cdFx0alF1ZXJ5KCcjY29tcGFueUxpc3RzJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdGpRdWVyeSgnI2NvbXBhbnlEZXRhaWxzJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHR9XHJcblx0YmFja1RvTGlzdCgpe1xyXG5cdFx0alF1ZXJ5KCcjY29tcGFueURldGFpbHMnKS5hZGRDbGFzcygnaGlkZScpO1xyXG5cdFx0alF1ZXJ5KCcjY29tcGFueUxpc3RzJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHR9XHJcblxyXG5cdGdlbmVyYXRlQXBpS2V5KGNvbXBJZDpzdHJpbmcpe1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0bGV0IGdlbmVyYXRlQXBpS2V5ID0gc2VsZi5fY29tcGFueVNlcnZpY2UuZ2VuZXJhdGVBcGlLZXkoY29tcElkKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChzdWNjZXNzOmFueSk9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNsaWNrZWRDb21wYW55ID0gbmV3IENvbXBhbnkoc3VjY2Vzcyk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+IHtcclxuXHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLm1lc3NhZ2U7XHJcblx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oc2VsZi5NZXNzYWdlKTtcclxuXHRcdFx0XHRcdGdlbmVyYXRlQXBpS2V5LnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHRjb3B5QXBpKCl7XHJcblx0XHRjbGlwYm9hcmQuY29weShqUXVlcnkoJyNpbnB1dC1hcGknKVswXS52YWx1ZSk7XHJcbiAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdBUEkgQ29waWVkJyk7XHJcblx0fVxyXG59XHJcbiJdfQ==
