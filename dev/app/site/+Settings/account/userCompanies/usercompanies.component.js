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
            domain: [this.EditCompany.sub_domain, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.pattern('^[a-zA-Z0-9]*$')])]
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytTZXR0aW5ncy9hY2NvdW50L3VzZXJDb21wYW5pZXMvdXNlcmNvbXBhbmllcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCxzQkFBMkUsZ0JBQWdCLENBQUMsQ0FBQTtBQUM1RiwyQkFBdUIsaUNBQWlDLENBQUMsQ0FBQTtBQUN6RCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxzQkFBcUcsbUNBQW1DLENBQUMsQ0FBQTtBQUN6SSx3QkFBd0IsbUNBQW1DLENBQUMsQ0FBQTtBQWlCNUQ7SUE4QkMsZ0NBQ1MsZUFBK0IsRUFDaEMsRUFBYyxFQUNkLE1BQWUsRUFDZixZQUEwQixFQUN6QixlQUFnQyxFQUNoQyw0QkFBeUQsRUFDekQsY0FBNEI7UUFONUIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQ2hDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBNkI7UUFDekQsbUJBQWMsR0FBZCxjQUFjLENBQWM7UUFqQ3JDLHVCQUFrQixHQUFRLEVBQUUsQ0FBQztRQUM3QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBTyxFQUFFLENBQUM7UUFDakIsd0JBQW1CLEdBQU8sRUFBRSxDQUFDO1FBQzdCLGVBQVUsR0FBTyxDQUFDLENBQUM7UUFFbkIsb0JBQWUsR0FBTyxFQUFFLENBQUM7UUFFekIsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVcsS0FBSyxDQUFDO1FBQzFCLGVBQVUsR0FBVSxDQUFDLENBQUM7UUFDdEIsYUFBUSxHQUFVLENBQUMsQ0FBQztRQUNwQixnQkFBVyxHQUFP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LE9BQU8sQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFDRCxVQUFDLEtBQVM7WUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FDRCxDQUFDO0lBQ0osQ0FBQztJQUNELHdDQUFPLEdBQVA7UUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQXZkRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztZQUN0QyxXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixFQUFFLCtDQUErQyxDQUFDO1lBQzNGLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixDQUFDO1NBQzNCLENBQUM7OzhCQUFBO0lBaWRGLDZCQUFDO0FBQUQsQ0EvY0EsQUErY0MsSUFBQTtBQS9jWSw4QkFBc0IseUJBK2NsQyxDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytTZXR0aW5ncy9hY2NvdW50L3VzZXJDb21wYW5pZXMvdXNlcmNvbXBhbmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vLi4vLi4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtDb21wYW55U2VydmljZSxVc2VyU2VydmljZSxMb2dnZWRJblNlcnZpY2UsU2V0dGluZ3NDb21tdW5pY2F0aW9uU2VydmljZSxDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvY29tcGFueSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xyXG5kZWNsYXJlIHZhciBnYTphbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGNsaXBib2FyZDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ29nLXVzZXItY29tcGFuaWVzJyxcclxuXHRkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcclxuXHR0ZW1wbGF0ZVVybDogJ3VzZXJjb21wYW5pZXMuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWyd1c2VyY29tcGFuaWVzLmNvbXBvbmVudC5jc3MnLCAnLi8uLi8uLi90ZWFtU2V0dGluZy90ZWFtU2V0dGluZy5jb21wb25lbnQuY3NzJ10sXHJcblx0aW5wdXRzOiBbJ215Q29tcGFuaWVzTGlzdCddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckNvbXBhbmllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0bXlDb21wYW5pZXNMaXN0OmFueTtcclxuXHRhY3RpdmVJbkNvbXBhbmllczphbnk7XHJcblx0dXBkYXRlQ29tcGFueTogYW55O1xyXG5cdHN1YmRvbWFpbkV4dGVuc2lvbjogYW55ID0gJyc7XHJcblx0cHJvdG9jb2w6IHN0cmluZyA9ICcnO1xyXG5cdE1lc3NhZ2U6YW55ID0gJyc7XHJcblx0Y3VycmVudENvbXBhbnlVc2VyczphbnkgPSBbXTtcclxuXHRhZG1pbkNvdW50OmFueSA9IDA7XHJcblx0dXBkYXRlQ29tcGFueUZvcm06Rm9ybUdyb3VwO1xyXG5cdGxvZ2VkSW5Vc2VyTmFtZTphbnkgPSAnJztcclxuXHQvLyBteUNvbXBhbmllc0xpc3RVcGRhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblx0dXBkQ29tcE5hbWU6c3RyaW5nID0gJyc7XHJcblx0dXBkRG9tYWluOnN0cmluZyA9ICcnO1xyXG5cdHVwZEFnZW5jeTpib29sZWFuID0gZmFsc2U7XHJcblx0dXBkVHJhZmZpYzpudW1iZXIgPSAwO1xyXG5cdHVwZExlYWRzOm51bWJlciA9IDA7XHJcblx0RWRpdENvbXBhbnk6YW55ID0gbmV3IENvbXBhbnkoe30pO1xyXG5cclxuICAgIHNlYXJjaGVkQ29tcGFueUxpc3Q6YW55ID0gW107XHJcbiAgICBqb2luZWRDb21wYW55TGlzdDphbnkgPSBbXTtcclxuICAgIGludml0ZWRDb21wYW55TGlzdDphbnkgPSBbXTtcclxuXHJcbiAgICBjcmVhdGVDb21wYW55Rm9ybTpGb3JtR3JvdXA7XHJcbiAgICBqb2luQ29tcGFueUZvcm06Rm9ybUdyb3VwO1xyXG4gICAgZXJyb3I6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbGVhdmVDb21wID0gJyc7XHJcbiAgICBpc19hZG1pbl9jcmVhdGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNsaWNrZWRDb21wYW55OmFueSA9IG5ldyBDb21wYW55KHt9KTtcclxuICAgIGFwaUtleTpzdHJpbmcgPSAnJztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX2NvbXBhbnlTZXJ2aWNlOiBDb21wYW55U2VydmljZSxcclxuXHRcdHB1YmxpYyBmYjpGb3JtQnVpbGRlcixcclxuXHRcdHB1YmxpYyByb3V0ZXIgOiBSb3V0ZXIsXHJcblx0XHRwdWJsaWMgX3VzZXJTZXJ2aWNlIDogVXNlclNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGxvZ2dlZEluU2VydmljZTogTG9nZ2VkSW5TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzZXR0aW5nc0NvbW11bmljYXRpb25TZXJ2aWNlOlNldHRpbmdzQ29tbXVuaWNhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9jb29raWVTZXJ2aWNlOkNvb2tpZVNlcnZpY2VcclxuXHRcdCl7fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdWJkb21haW5FeHRlbnNpb24gPSAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuXHRcdHRoaXMucHJvdG9jb2wgPSBDb25maWcuUFJPVE9DT0w7XHJcblx0XHR0aGlzLnVwZGF0ZUNvbXBhbnkgPSBuZXcgQ29tcGFueSh7fSk7XHJcblx0XHRpZih0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG5cdFx0XHR0aGlzLmxvZ2VkSW5Vc2VyTmFtZSA9IHN0b3JhZ2UudXNlci51c2VybmFtZTtcclxuXHRcdH1cclxuXHRcdHRoaXMudXBkYXRlQ29tcGFueUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuXHRcdFx0Y29tcGFueW5hbWUgOiBbdGhpcy5FZGl0Q29tcGFueS5uYW1lLFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXSxcclxuXHRcdFx0ZG9tYWluIDogW3RoaXMuRWRpdENvbXBhbnkuc3ViX2RvbWFpbixWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoNCksVmFsaWRhdG9ycy5wYXR0ZXJuKCdeW2EtekEtWjAtOV0qJCcpXSldXHJcblx0XHRcdC8vIHRyYWZmaWMgOlt0aGlzLkVkaXRDb21wYW55LnRyYWZmaWMuZnJlcXVlbmN5LCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwKSxWYWxpZGF0b3JzLnBhdHRlcm4oJ15bMC05XSokJykgXSldLFxyXG5cdFx0XHQvLyBsZWFkcyAgIDpbdGhpcy5FZGl0Q29tcGFueS5sZWFkcy50b3RhbCwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLm1heExlbmd0aCgxMCksVmFsaWRhdG9ycy5wYXR0ZXJuKCdeWzAtOV0qJCcpIF0pXSxcclxuXHRcdFx0Ly8gY29tcGFueVR5cGU6IFt0aGlzLkVkaXRDb21wYW55LmFnZW5jeV1cclxuXHRcdH0pO1xyXG5cdFx0alF1ZXJ5KCcubW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0alF1ZXJ5KCcuc3VjY2Vzcy1tZXNzYWdlJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdFx0dGhpcy5lcnJvciA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmxlYXZlQ29tcCA9ICcnO1xyXG5cdFx0fSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcGFueUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgY29tcGFueW5hbWUgOiBbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpXSldLFxyXG4gICAgICAgICAgICBkb21haW4gOiBbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLFZhbGlkYXRvcnMucGF0dGVybignXlthLXpBLVowLTldKiQnKV0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuam9pbkNvbXBhbnlGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHNlYXJjaENvbXBhbnk6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXVxyXG4gICAgICAgIH0pO1xyXG5cdFx0dGhpcy5nZXRNeUNvbXBhbmllcygpO1xyXG5cdFx0alF1ZXJ5KCcuc2xpbXNjcm9sbCcpLnNsaW1zY3JvbGwoe1xyXG5cdFx0XHRyYWlsVmlzaWJsZTogdHJ1ZSxcclxuXHRcdFx0YWx3YXlzVmlzaWJsZTogdHJ1ZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5pc19hZG1pbl9jcmVhdGVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9kYXNoQXV0aFRva2VuJykpLmlzX2FkbWluX2NyZWF0ZWQ7XHJcblx0XHRpZih0aGlzLmlzX2FkbWluX2NyZWF0ZWQgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5pc19hZG1pbl9jcmVhdGVkID1mYWxzZTtcclxuXHR9XHJcblx0cG9wdXBVcGRhdGVDb21wYW55KGNvbXBhbnk6YW55KXtcclxuXHRcdHRoaXMudXBkYXRlQ29tcGFueSA9IGNvbXBhbnk7XHJcblx0XHQvL3RoaXMuRWRpdENvbXBhbnkgPSBuZXcgQ29tcGFueShjb21wYW55KTtcclxuXHRcdHRoaXMuRWRpdENvbXBhbnkgPSBjb21wYW55O1xyXG5cdFx0Y29uc29sZS5sb2coJ3RoaXMuRWRpdENvbXBhbnknLHRoaXMuRWRpdENvbXBhbnkpO1xyXG5cdFx0bGV0IGNuYW1lIDphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkQ29tcGFueW5hbWUnKTtcclxuXHRcdGNuYW1lLnZhbHVlID0gdGhpcy5FZGl0Q29tcGFueS5uYW1lO1xyXG5cdFx0bGV0IGNkb21haW4gOmFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGREb21haW4nKTtcclxuXHRcdGNkb21haW4udmFsdWUgPSB0aGlzLkVkaXRDb21wYW55LnN1Yl9kb21haW47XHJcblx0XHRsZXQgY3RyYWZmaWMgOmFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRUcmFmZmljJyk7XHJcblx0XHRjdHJhZmZpYy52YWx1ZSA9IHRoaXMuRWRpdENvbXBhbnkudHJhZmZpYy5mcmVxdWVuY3k7XHJcblx0XHRsZXQgY2xlYWRzIDphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkTGVhZHMnKTtcclxuXHRcdGNsZWFkcy52YWx1ZSA9IHRoaXMuRWRpdENvbXBhbnkubGVhZHMudG90YWw7XHJcblx0XHRpZih0aGlzLkVkaXRDb21wYW55Lm5hbWUgPT0gJycgfHwgdGhpcy5FZGl0Q29tcGFueS5uYW1lID09IG51bGwpXHJcblx0XHRcdGpRdWVyeSgnI3VwZENvbXBhbnluYW1lRGl2JykuYWRkQ2xhc3MoJ2lzLWVtcHR5Jyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGpRdWVyeSgnI3VwZENvbXBhbnluYW1lRGl2JykucmVtb3ZlQ2xhc3MoJ2lzLWVtcHR5Jyk7XHJcblxyXG5cdFx0aWYoIXRoaXMuRWRpdENvbXBhbnkuc3ViX2RvbWFpbilcclxuXHRcdFx0alF1ZXJ5KCcjdXBkRG9tYWluRGl2JykuYWRkQ2xhc3MoJ2lzLWVtcHR5Jyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGpRdWVyeSgnI3VwZERvbWFpbkRpdicpLnJlbW92ZUNsYXNzKCdpcy1lbXB0eScpO1xyXG5cclxuXHRcdGlmKCF0aGlzLkVkaXRDb21wYW55LnRyYWZmaWMuZnJlcXVlbmN5KVxyXG5cdFx0XHRqUXVlcnkoJyN1cGRUcmFmZmljRGl2JykuYWRkQ2xhc3MoJ2lzLWVtcHR5Jyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGpRdWVyeSgnI3VwZFRyYWZmaWNEaXYnKS5yZW1vdmVDbGFzcygnaXMtZW1wdHknKTtcclxuXHJcblx0XHRpZighdGhpcy5FZGl0Q29tcGFueS5sZWFkcy50b3RhbClcclxuXHRcdFx0alF1ZXJ5KCcjdXBkTGVhZHNEaXYnKS5hZGRDbGFzcygnaXMtZW1wdHknKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0alF1ZXJ5KCcjdXBkTGVhZHNEaXYnKS5yZW1vdmVDbGFzcygnaXMtZW1wdHknKTtcclxuXHJcblx0XHQvL2pRdWVyeSgnY2hhbmdlLWNvbXBhbnktbmFtZScpLm1vZGFsKCdzaG93Jyk7XHJcblx0fVxyXG5cdHVwZGF0ZVRoaXNDb21wYW55KCl7XHJcblx0XHRsZXQgc2VsZj0gdGhpcztcclxuXHRcdGpRdWVyeSgnI2J0blVwZGF0ZUNvbXBhbnknKS50ZXh0KCdQbGVhc2Ugd2FpdC4uLicpO1xyXG5cdFx0alF1ZXJ5KCcjYnRuVXBkYXRlQ29tcGFueScpLmF0dHIoJ2Rpc2FibGVkJyx0cnVlKTtcclxuXHRcdGxldCB1cGRhdGVDb21wYW55ID0gc2VsZi5fY29tcGFueVNlcnZpY2UudXBkYXRlQ29tcGFueSh0aGlzLnVwZGF0ZUNvbXBhbnkuaWQsdGhpcy51cGRhdGVDb21wYW55Rm9ybS52YWx1ZSlcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoc3VjY2VzczphbnkpPT57XHJcblx0XHRcdFx0XHRqUXVlcnkoJyNidG5VcGRhdGVDb21wYW55JykudGV4dCgnVXBkYXRlJyk7XHJcbiAgICAgICAgICAgIFx0XHRqUXVlcnkoJyNidG5VcGRhdGVDb21wYW55JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHRcdFx0XHRcdC8qLS0tLSBUcmFja2luZyBjb2RlIGdvZXMgaGVyZSAtLS0tKi9cclxuXHRcdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ1N1Ym1pdCcsICdFZGl0Q29tcGFueScpO1xyXG5cdFx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ1NldHRpbmdzIENvbXBhbnkgRWRpdHRlZCddKTtcclxuXHRcdFx0XHRcdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHRcdFx0XHRcdGpRdWVyeSgnI2NoYW5nZS1jb21wYW55LW5hbWUnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcjY2hhbmdlLWNvbXBhbnktbmFtZSBpbnB1dCcpLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRqUXVlcnkoJyNjaGFuZ2UtY29tcGFueS1uYW1lIGRpdi5sYWJlbC1mbG9hdGluZycpLmFkZENsYXNzKCdpcy1lbXB0eScpO1xyXG5cdFx0XHRcdFx0c2VsZi5NZXNzYWdlID0gJ0NvbXBhbnkgVXBkYXRlZCBTdWNjZXNzZnVsbHkhJztcclxuXHRcdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbihzZWxmLk1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0LypqUXVlcnkoJyNmbG9hdE1lc3NhZ2VVQycpLmh0bWwoc2VsZi5NZXNzYWdlKTtcclxuXHRcdFx0XHRcdGpRdWVyeSgnI3VjRmxvYXRNZXNzYWdlJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGpRdWVyeSgnI3VjRmxvYXRNZXNzYWdlJykuZmFkZUluKClcclxuXHRcdFx0XHRcdFx0LmFuaW1hdGUoe2JvdHRvbTo0MH0sIDEwMDAsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9jYWxsIGJhY2tcclxuXHRcdFx0XHRcdFx0fSk7Ki9cclxuXHJcblx0XHRcdFx0XHQvLyBqUXVlcnkoJy50b2FzdCcpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblx0XHRcdFx0XHQvLyBzZWxmLmNsb3NlTGF5b3ZlcigpO1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcjYnRuVXBkYXRlQ29tcGFueScpLnRleHQoJ1VwZGF0ZScpO1xyXG5cdFx0XHRcdFx0c2VsZi5nZXRNeUNvbXBhbmllcygpO1xyXG5cdFx0XHRcdFx0bGV0IGN1clVybERvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpWzBdO1xyXG5cdFx0XHRcdFx0bGV0IHJlZGlyZWN0RG9tYWluID0gJyc7XHJcblx0XHRcdFx0XHRpZihjdXJVcmxEb21haW4gPT0gc2VsZi51cGRhdGVDb21wYW55LnN1Yl9kb21haW4gJiYgY3VyVXJsRG9tYWluICE9IHRoaXMudXBkYXRlQ29tcGFueUZvcm0udmFsdWUuZG9tYWluKXtcclxuXHRcdFx0XHRcdCAgY29uc29sZS5sb2coXCJDVUxQUklUIDFcIik7XHJcblx0XHRcdFx0XHRcdHJlZGlyZWN0RG9tYWluID0gdGhpcy51cGRhdGVDb21wYW55Rm9ybS52YWx1ZS5kb21haW4gKyBzZWxmLnN1YmRvbWFpbkV4dGVuc2lvbjtcclxuXHRcdFx0XHRcdFx0alF1ZXJ5KGxvY2F0aW9uKS5hdHRyKCdocmVmJyxzZWxmLnByb3RvY29sK3JlZGlyZWN0RG9tYWluKycvc2V0dGluZ3MnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdChlcnJvcjphbnkpPT57XHJcblx0XHRcdFx0XHRqUXVlcnkoJyNidG5VcGRhdGVDb21wYW55JykudGV4dCgnVXBkYXRlJyk7XHJcbiAgICAgICAgICAgIFx0XHRqUXVlcnkoJyNidG5VcGRhdGVDb21wYW55JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHRcdFx0XHRcdGlmKGVycm9yLmVycm9yLmNvZGUgPT09ICdFX1VOSVFVRV9VTklERU5USUZJRURfVkFMSURBVElPTicpe1xyXG4gICAgICAgICAgICAgICAgXHRcdHNlbGYuTWVzc2FnZSA9IFwic3ViLWRvbWFpbiBhbHJlYWR5IHRha2VuXCI7XHJcblx0XHRcdFx0XHR9XHJcbiAgICAgICAgICAgICAgICBcdGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgXHRzZWxmLk1lc3NhZ2UgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIFx0fVxyXG5cdFx0XHRcdFx0alF1ZXJ5KCcjc3VjY2Vzcy11cGRhdGVDb21wYW55JykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHVwZGF0ZUNvbXBhbnkudW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cdGhpZGVFcnJvcigpe1xyXG5cdFx0alF1ZXJ5KCcuc3VjY2Vzcy1tZXNzYWdlJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuXHR9XHJcblx0Z2V0TXlDb21wYW5pZXMoKXtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGxldCBnZXRDb21wYW55ID0gc2VsZi5fY29tcGFueVNlcnZpY2UuZ2V0Q29tcGFuaWVzKClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoc3VjY2VzczphbnkpPT57XHJcblx0XHRcdFx0XHRzZWxmLm15Q29tcGFuaWVzTGlzdCA9IFtdO1xyXG5cdFx0XHRcdFx0c2VsZi5hY3RpdmVJbkNvbXBhbmllcyA9IFtdO1xyXG5cdFx0XHRcdFx0c3VjY2Vzcy5mb3JFYWNoKChjb21wYW55OmFueSk9PntcclxuXHRcdFx0XHRcdFx0aWYoY29tcGFueS51c2VyX2NvbXBhbnkuc3RhdHVzICE9ICdMRUZUJyAmJiBjb21wYW55LnVzZXJfY29tcGFueS5zdGF0dXMgIT0gJ0RFTEVURUQnKXtcclxuXHRcdFx0XHRcdFx0XHRzZWxmLm15Q29tcGFuaWVzTGlzdC5wdXNoKG5ldyBDb21wYW55KGNvbXBhbnkpKTtcclxuXHRcdFx0XHRcdFx0XHRpZihjb21wYW55LnVzZXJfY29tcGFueS5hY3RpdmUpXHJcblx0XHRcdFx0XHRcdFx0XHRzZWxmLmFjdGl2ZUluQ29tcGFuaWVzLnB1c2gobmV3IENvbXBhbnkoY29tcGFueSkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHNlbGYuc2V0dGluZ3NDb21tdW5pY2F0aW9uU2VydmljZS51cGRhdGVDb21wYW55TGlzdChzZWxmLm15Q29tcGFuaWVzTGlzdCk7XHJcblx0XHRcdFx0XHQvLyBzZWxmLm15Q29tcGFuaWVzTGlzdFVwZGF0ZWQuZW1pdChzZWxmLm15Q29tcGFuaWVzTGlzdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+e1xyXG5cdFx0XHRcdFx0Z2V0Q29tcGFueS51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblxyXG5cdGxlYXZlQ29tcGFueShjb21wYW55OmFueSl7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0XHRsZXQgY29tcGFueVVzZXJzID0gdGhpcy5fY29tcGFueVNlcnZpY2UuZ2V0Q29tcGFueVVzZXJzKGNvbXBhbnkuaWQpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KHN1Y2Nlc3M6YW55KT0+e1xyXG5cdFx0XHRcdFx0c2VsZi5jdXJyZW50Q29tcGFueVVzZXJzID0gW107XHJcblx0XHRcdFx0XHRzZWxmLmFkbWluQ291bnQgPSAwO1xyXG5cdFx0XHRcdFx0c3VjY2Vzcy5mb3JFYWNoKCh1c2VyOmFueSk9PntcclxuXHRcdFx0XHRcdFx0aWYoc2VsZi5hZG1pbkNvdW50IDwgMSAmJiB1c2VyLnVzZXJfY29tcGFueS5yb2xlID09PSAnQURNSU4nICYmIHVzZXIudXNlcl9jb21wYW55LmFjdGl2ZSAmJiB1c2VyLnVzZXJuYW1lICE9PSBzZWxmLmxvZ2VkSW5Vc2VyTmFtZSl7XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5hZG1pbkNvdW50Kys7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0aWYoc2VsZi5hZG1pbkNvdW50ID49IDEpe1xyXG5cdFx0XHRcdFx0XHRpZihzZWxmLmFjdGl2ZUluQ29tcGFuaWVzLmxlbmd0aCA+IDEpe1xyXG5cdFx0XHRcdFx0XHRcdHNlbGYuX2NvbXBhbnlTZXJ2aWNlLmxlYXZlQ29tcGFueShjb21wYW55LmlkKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRcdFx0XHRcdFx0KHN1Y2Nlc3M6YW55KT0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8qLS0tLSBUcmFja2luZyBjb2RlIGdvZXMgaGVyZSAtLS0tKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdTdWJtaXQnLCAnTGVhdmVDb21wYW55Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ1NldHRpbmdzIENvbXBhbnkgTGVmdCddKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZi5NZXNzYWdlID0gJ1N1Y2Nlc3NmdWxseSBsZWZ0ICcrY29tcGFueS5uYW1lO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8valF1ZXJ5KCcjZmxvYXRNZXNzYWdlVUMnKS5odG1sKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9zZWxmLmNsb3NlTGF5b3ZlcigpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGYuZ2V0TXlDb21wYW5pZXMoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgY3VyVXJsRG9tYWluID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KCcuJylbMF07XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IHJlZGlyZWN0RG9tYWluID0gJ2FwcC5vdXRncm93JyArIHRoaXMuc3ViZG9tYWluRXh0ZW5zaW9uO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmKGN1clVybERvbWFpbiA9PSBjb21wYW55LnN1Yl9kb21haW4pe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9yKHZhciBpID0wOyBpPCBzZWxmLm15Q29tcGFuaWVzTGlzdC5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmKGN1clVybERvbWFpbiAhPT0gc2VsZi5teUNvbXBhbmllc0xpc3RbaV0uc3ViX2RvbWFpbiAmJiBzZWxmLm15Q29tcGFuaWVzTGlzdFtpXS51c2VyX2NvbXBhbnkuYWN0aXZlKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWRpcmVjdERvbWFpbiA9IHNlbGYubXlDb21wYW5pZXNMaXN0W2ldLnN1Yl9kb21haW4gKyBzZWxmLnN1YmRvbWFpbkV4dGVuc2lvbiArICcvc2V0dGluZ3MvbXktYWNjb3VudCc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicsc2VsZi5wcm90b2NvbCtyZWRpcmVjdERvbWFpbik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQoZXJyb3I6YW55KT0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeSgnI2Zsb2F0TWVzc2FnZScpLmh0bWwoc2VsZi5NZXNzYWdlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oc2VsZi5NZXNzYWdlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvL2pRdWVyeSgnI3VjRmxvYXRNZXNzYWdlJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvKmpRdWVyeSgnI3VjRmxvYXRNZXNzYWdlJykuZmFkZU91dCgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmFuaW1hdGUoe2JvdHRvbTo0MH0sIDEwMDAsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCBcdFx0Ly9jYWxsIGJhY2tcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIH0pOyovXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29tcGFueVVzZXJzLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmxlYXZlQ29tcCA9IGNvbXBhbnkuaWQ7XHJcblx0XHRcdFx0XHRcdFx0alF1ZXJ5KCcjbGVhdmVDb25maXJtYXRpb24nKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRzZWxmLk1lc3NhZ2UgPSAnVGhlIGNvbXBhbnkgbXVzdCBoYXZlIGFub3RoZXIgYWRtaW4hJztcclxuXHRcdFx0XHRcdFx0Ly9qUXVlcnkoJyNmbG9hdE1lc3NhZ2VVQycpLmh0bWwoc2VsZi5NZXNzYWdlKTtcclxuXHRcdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+e1xyXG5cdFx0XHRcdFx0Y29tcGFueVVzZXJzLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0YWNjZXB0SW52aXRlKGNvbXBhbnk6YW55KXtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGxldCB1c2VyQXBwcm92YWwgPSBzZWxmLl91c2VyU2VydmljZS51c2VyQXBwcm92YWwoY29tcGFueS5zdWJfZG9tYWluKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChzdWNjZXNzOmFueSk9PntcclxuXHRcdFx0XHRcdGpRdWVyeSgnLmNvbXAnK2NvbXBhbnkuaWQpLmF0dHIoJ2NoZWNrZWQnLHRydWUpO1xyXG5cdFx0XHRcdFx0c2VsZi5NZXNzYWdlID0gXCJTdWNjZXNzZnVsbHkgYWNjZXB0ZWQgQ29tcGFueSByZXF1ZXN0XCI7XHJcblx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oc2VsZi5NZXNzYWdlKTtcclxuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oc2VsZi5wcm90b2NvbCtjb21wYW55LnN1Yl9kb21haW4gKyBzZWxmLnN1YmRvbWFpbkV4dGVuc2lvbiArICcvZGFzaGJvYXJkJyk7XHJcblx0XHRcdFx0XHQvL3NlbGYuZ2V0TXlDb21wYW5pZXMoKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdChlcnJvcjphbnkpPT57XHJcblx0XHRcdFx0XHRzZWxmLk1lc3NhZ2UgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuXHRcdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbihzZWxmLk1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0dXNlckFwcHJvdmFsIC51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcbiAgICBjcmVhdGVDb21wYW55KCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLk1lc3NhZ2UgPSAnJztcclxuICAgICAgICBqUXVlcnkoJyNidG5DcmVhdGVDb21wYW55JykudGV4dCgnUGxlYXNlIFdhaXQuLi4nKS5hdHRyKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcbiAgICAgICAgbGV0IGNyZWF0ZUNvbXBhbnkgPSBzZWxmLl9jb21wYW55U2VydmljZS5jcmVhdGVDb21wYW55KHNlbGYuY3JlYXRlQ29tcGFueUZvcm0udmFsdWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAoc3VjY2VzczphbnkpPT4ge1xyXG4gICAgICAgICAgICAgICAgXHQvKi0tLS0gVHJhY2tpbmcgY29kZSBnb2VzIGhlcmUgLS0tLSovXHJcbiAgICAgICAgICAgICAgICBcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ1N1Ym1pdCcsICdBZGRDb21wYW55Jyk7XHJcblx0XHRcdFx0XHQgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdTZXR0aW5ncyBDb21wYW55IEFkZGVkJ10pO1xyXG4gICAgICAgICAgICAgICAgXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAgICAgICAgICAgICBcdGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZShzZWxmLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcbiAgICAgICAgICAgICAgICAgIHN0b3JhZ2UuY29tcGFueUxpc3QucHVzaChzdWNjZXNzLnN1Yl9kb21haW4pO1xyXG4gICAgICAgICAgICAgICAgICBzZWxmLl9jb29raWVTZXJ2aWNlLmNyZWF0ZUNvb2tpZSgnc3RvcmFnZScsSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSksMyk7XHJcbiAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2FkZC1uZXctY29tcGFueSBpbnB1dCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2J0bkNyZWF0ZUNvbXBhbnknKS50ZXh0KCdBZGQgTmV3IENvbXBhbnknKTtcclxuICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYWRkLW5ldy1jb21wYW55IGRpdi5sYWJlbC1mbG9hdGluZycpLmFkZENsYXNzKCdpcy1lbXB0eScpO1xyXG4gICAgICAgICAgICAgICAgICBzZWxmLk1lc3NhZ2UgPSAnQ29tcGFueSBDcmVhdGVkIFN1Y2Nlc3NmdWxseSEnO1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oc2VsZi5NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYWRkLW5ldy1jb21wYW55JykubW9kYWwoJ2hpZGUnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICBsZXQgY3AgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnZmlsZXBpY2tlcl90b2tlbl9qc29uJykpO1xyXG4gICAgICAgICAgICAgICAgICBjcC5wdXNoKHtcImtleVwiOiBzdWNjZXNzLnN1Yl9kb21haW4sXCJ2YWx1ZVwiOiBcImluX3RyaWFsXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ2ZpbGVwaWNrZXJfdG9rZW5fanNvbicsIEpTT04uc3RyaW5naWZ5KGNwKSwgMyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHNlbGYucHJvdG9jb2wrc3VjY2Vzcy5zdWJfZG9tYWluICsgc2VsZi5zdWJkb21haW5FeHRlbnNpb24gKyAnL2Rhc2hib2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgICAvL3NlbGYuZ2V0TXlDb21wYW5pZXMoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6YW55KT0+IHtcclxuICAgICAgICAgICAgICAgIFx0aWYoZXJyb3IuY29kZSA9PT0gJ0VfVU5JUVVFX1VOSURFTlRJRklFRF9WQUxJREFUSU9OJylcclxuICAgICAgICAgICAgICAgIFx0XHRzZWxmLk1lc3NhZ2UgPSBcInN1Yi1kb21haW4gYWxyZWFkeSB0YWtlblwiO1xyXG4gICAgICAgICAgICAgICAgXHRlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgXHRzZWxmLk1lc3NhZ2UgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNzdWNjZXNzLWFkZENvbXBhbnknKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2J0bkNyZWF0ZUNvbXBhbnknKS50ZXh0KCdBZGQgTmV3IENvbXBhbnknKTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNidG5DcmVhdGVDb21wYW55JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHRcdFx0XHRcdCAgICAgICAgICBjcmVhdGVDb21wYW55LnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hDb21wYW55KCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgam9pbmVkID0gZmFsc2U7XHJcbiAgICAgICAgc2VsZi5NZXNzYWdlID0gJyc7XHJcbiAgICAgICAgc2VsZi5zZWFyY2hlZENvbXBhbnlMaXN0ID0gW107XHJcbiAgICAgICAgc2VsZi5qb2luZWRDb21wYW55TGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuICAgICAgICBqUXVlcnkoJyNzZWFyY2hFcnJvcicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgaWYoc2VsZi5qb2luQ29tcGFueUZvcm0udmFsdWUuc2VhcmNoQ29tcGFueS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hDb21wYW55ID0gc2VsZi5fY29tcGFueVNlcnZpY2Uuc2VhcmNoQ29tcGFueShzZWxmLmpvaW5Db21wYW55Rm9ybS52YWx1ZS5zZWFyY2hDb21wYW55KVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAoc3VjY2VzczphbnkpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFx0dGhpcy5lcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNzdWNjZXNzLWpvaW5Db21wYW55JykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZWFyY2hlZENvbXBhbnlMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuam9pbmVkQ29tcGFueUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnZpdGVkQ29tcGFueUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcy5jb21wYW5pZXMuZm9yRWFjaCgoY29tcGFueTphbnkpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam9pbmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDsgaSA8IHNlbGYubXlDb21wYW5pZXNMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLm15Q29tcGFuaWVzTGlzdFtpXS5zdWJfZG9tYWluID09PSBjb21wYW55LnN1Yl9kb21haW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5teUNvbXBhbmllc0xpc3RbaV0udXNlcl9jb21wYW55LnN0YXR1cyA9PT0gJ1JFUVVFU1RFRCcgJiYgc2VsZi5teUNvbXBhbmllc0xpc3RbaV0udXNlcl9jb21wYW55LmFjdGl2ZSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmpvaW5lZENvbXBhbnlMaXN0LnB1c2gobmV3IENvbXBhbnkoY29tcGFueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHNlbGYubXlDb21wYW5pZXNMaXN0W2ldLnVzZXJfY29tcGFueS5zdGF0dXMgPT09ICdJTlZJVEVEJyAmJiBzZWxmLm15Q29tcGFuaWVzTGlzdFtpXS51c2VyX2NvbXBhbnkuYWN0aXZlID09PSBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW52aXRlZENvbXBhbnlMaXN0LnB1c2gobmV3IENvbXBhbnkoY29tcGFueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2luZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWpvaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2VhcmNoZWRDb21wYW55TGlzdC5wdXNoKG5ldyBDb21wYW55KGNvbXBhbnkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuc2VhcmNoZWRDb21wYW55TGlzdC5sZW5ndGggPT09IDAgJiYgc2VsZi5qb2luZWRDb21wYW55TGlzdC5sZW5ndGggPT09IDAgJiYgc2VsZi5pbnZpdGVkQ29tcGFueUxpc3QubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuTWVzc2FnZSA9ICdObyBDb21wYW5pZXMgRm91bmQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjc2VhcmNoRXJyb3InKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjc3VjY2Vzcy1qb2luQ29tcGFueScpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcjphbnkpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFx0dGhpcy5lcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNzdWNjZXNzLWpvaW5Db21wYW55JykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0c2VhcmNoQ29tcGFueS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgIFx0dGhpcy5lcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgam9pbkNvbXBhbnkoY29tcGFueTphbnkpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgalF1ZXJ5KCcjam9pbicrY29tcGFueS5pZCkuaHRtbCgnUGxlYXNlIFdhaXQuLi4nKTtcclxuICAgICAgICBsZXQgam9pbkNvbXBhbnkgPSBzZWxmLl9jb21wYW55U2VydmljZS5qb2luQ29tcGFueShjb21wYW55LmlkKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChzdWNjZXNzOmFueSk9PiB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNqb2luJytjb21wYW55LmlkKS5odG1sKCdSZXF1ZXN0IHNlbnQnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2pvaW5lZCcrY29tcGFueS5pZCkucmVtb3ZlQ2xhc3MoJ2NvbXBhbmllcy1ib3gtaG92ZXInKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2pvaW5lZCcrY29tcGFueS5pZCkuYWRkQ2xhc3MoJ2NvbXBhbmllcy1ib3gtcmVxdWVzdCcpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5nZXRNeUNvbXBhbmllcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6YW55KT0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjc3VjY2Vzcy1qb2luQ29tcGFueScpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblx0XHRcdFx0am9pbkNvbXBhbnkudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVNZSgpIHtcclxuXHRcdGpRdWVyeSgnI2xlYXZlQ29uZmlybWF0aW9uJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGxldCBkZWxldGVDb21wYW55ID0gc2VsZi5fY29tcGFueVNlcnZpY2UubGVhdmVDb21wYW55KHNlbGYubGVhdmVDb21wKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChzdWNjZXNzOmFueSk9PiB7XHJcblx0XHRcdFx0XHQvKi0tLS0gVHJhY2tpbmcgY29kZSBnb2VzIGhlcmUgLS0tLSovXHJcblx0XHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdTdWJtaXQnLCAnTGVhdmVDb21wYW55Jyk7XHJcblx0XHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgQ29tcGFueSBMZWZ0J10pO1xyXG5cdFx0XHRcdFx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdDb21wYW55IExlZnQgU3VjY2Vzc2Z1bGx5Jyk7XHJcblx0XHRcdFx0XHRzZWxmLl91c2VyU2VydmljZS5sb2dvdXQoKVxyXG5cdFx0XHRcdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYubG9nZ2VkSW5TZXJ2aWNlLmxvZ291dCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmFzc2lnbihzZWxmLnByb3RvY29sK0NvbmZpZy5QQVJFTlRfQVBQX0RPTUFJTik7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+IHtcclxuXHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLm1lc3NhZ2U7XHJcblx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oc2VsZi5NZXNzYWdlKTtcclxuXHRcdFx0XHRcdGRlbGV0ZUNvbXBhbnkudW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cclxuXHJcbiAgICBjYWxsR0Eob3B0OiBzdHJpbmcpe1xyXG5cdFx0c3dpdGNoIChvcHQpIHtcclxuXHRcdFx0Y2FzZSAnRURJVENPTVBBTlknOlxyXG5cdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ0NsaWNrJywgJ0VkaXRDb21wYW55Jyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ1NldHRpbmdzIEVkaXQgQ29tcGFueSBDbGljayddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnTEVBVkVDT01QQU5ZJzpcclxuXHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdDbGljaycsICdMZWF2ZUNvbXBhbnknKTtcclxuXHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgTGVhdmUgQ29tcGFueSBDbGljayddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnQUREQ09NUEFOWSc6XHJcblx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnQ2xpY2snLCAnQWRkQ29tcGFueScpO1xyXG5cdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdTZXR0aW5ncyBBZGQgQ29tcGFueSBDbGljayddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnSk9JTkNPTVBBTlknOlxyXG5cdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ0NsaWNrJywgJ0pvaW5Db21wYW55Jyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ1NldHRpbmdzIEpvaW4gQ29tcGFueSBDbGljayddKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNob3dEZXRhaWxzKGNvbXBhbnk6YW55KXtcclxuXHRcdHRoaXMuY2xpY2tlZENvbXBhbnkgPSBjb21wYW55O1xyXG5cdFx0alF1ZXJ5KCcjY29tcGFueUxpc3RzJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdGpRdWVyeSgnI2NvbXBhbnlEZXRhaWxzJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHR9XHJcblx0YmFja1RvTGlzdCgpe1xyXG5cdFx0alF1ZXJ5KCcjY29tcGFueURldGFpbHMnKS5hZGRDbGFzcygnaGlkZScpO1xyXG5cdFx0alF1ZXJ5KCcjY29tcGFueUxpc3RzJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHR9XHJcblxyXG5cdGdlbmVyYXRlQXBpS2V5KGNvbXBJZDpzdHJpbmcpe1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0bGV0IGdlbmVyYXRlQXBpS2V5ID0gc2VsZi5fY29tcGFueVNlcnZpY2UuZ2VuZXJhdGVBcGlLZXkoY29tcElkKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChzdWNjZXNzOmFueSk9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNsaWNrZWRDb21wYW55ID0gbmV3IENvbXBhbnkoc3VjY2Vzcyk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+IHtcclxuXHRcdFx0XHRcdHNlbGYuTWVzc2FnZSA9IGVycm9yLmVycm9yLm1lc3NhZ2U7XHJcblx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oc2VsZi5NZXNzYWdlKTtcclxuXHRcdFx0XHRcdGdlbmVyYXRlQXBpS2V5LnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHRjb3B5QXBpKCl7XHJcblx0XHRjbGlwYm9hcmQuY29weShqUXVlcnkoJyNpbnB1dC1hcGknKVswXS52YWx1ZSk7XHJcbiAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdBUEkgQ29waWVkJyk7XHJcblx0fVxyXG59XHJcbiJdfQ==
