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
var index_1 = require('../../../shared/services/index');
var email_validator_1 = require('../../../shared/validators/email.validator');
var router_1 = require('@angular/router');
var builder_service_1 = require('../../+builder/services/builder.service');
var feature_access_service_1 = require('../../../shared/services/feature-access.service');
var index_2 = require('../../templates/pipes/index');
var env_config_1 = require('./../../../config/env.config');
var company_1 = require('../../../shared/models/company');
var user_1 = require('../../../shared/models/user');
var index_3 = require('../../../shared/services/index');
var calculator_analytics_service_1 = require('../+analytics/services/calculator-analytics.service');
var DashboardComponent = (function () {
    function DashboardComponent(_calculatorAnalytics, _membershipService, subDomainService, companyService, _dashboardService, _builderService, _featureAuthService, _cookieService, _router, fb, _script) {
        this._calculatorAnalytics = _calculatorAnalytics;
        this._membershipService = _membershipService;
        this.subDomainService = subDomainService;
        this.companyService = companyService;
        this._dashboardService = _dashboardService;
        this._builderService = _builderService;
        this._featureAuthService = _featureAuthService;
        this._cookieService = _cookieService;
        this._router = _router;
        this.fb = fb;
        this._script = _script;
        this.stats = {};
        this.loader = 0;
        this.Message = '';
        this.user_status = '';
        this.subdomainExtension = '';
        this.myCompaniesList = [];
        this.currentCompany = '';
        this.currentCompanyInit = '';
        this.currentCompanyUsers = [];
        this.moreCompanyUsers = [];
        this.sub_domain = '';
        this.reset = true;
        this.isLimitCrossed = false;
        this.isAnalyticsAvailable = false;
        this.totalUniqueVisitors = 0;
        this.totalLeads = 0;
        this.overallConversionRate = 0;
        this.subs = [];
        var url = window.location.hostname;
        if (this.checkSubDomain(url))
            this.sub_domain = url.split('.')[0];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var storage = this._cookieService.readCookie('storage');
        if (storage !== null) {
            storage = JSON.parse(storage);
            if (storage.showUpgradeModal)
                jQuery('#premiumModal').modal('show');
            this.username = storage.user.name;
            if (this.subDomainService.subDomain.sub_domain === storage.company.sub_domain)
                this.company_id = storage.company._id;
            else {
                this.company_id = localStorage.getItem('company');
            }
        }
        this.createCompanyForm = this.fb.group({
            companyname: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            domain: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern('^[a-zA-Z0-9]*$')])]
        });
        this.inviteUserForm = this.fb.group({
            userName: ['', forms_1.Validators.compose([forms_1.Validators.required, , forms_1.Validators.minLength(3)])],
            userEmail: ['', forms_1.Validators.compose([forms_1.Validators.required, email_validator_1.EmailValidator.format])],
            userRole: ['MANAGER', forms_1.Validators.compose([forms_1.Validators.required])]
        });
        this.calcNameform = this.fb.group({
            calcName: ['', forms_1.Validators.compose([forms_1.Validators.required])]
        });
        this.subdomainExtension = '.' + env_config_1.Config.APP_EXTENSION;
        this.subs.push(this.getCompanyProjects());
        this.getMyCompanies();
        this._featureAuthService.getAllFeatureAccess();
        this.isLimitCrossed = this._featureAuthService.features.calc_in_limit;
        console.log(this.isLimitCrossed, 'asdasdasdsadaasjkdhdasjkhdkahdkjashdkahsdkhaskj');
        jQuery.material.init();
        var co = window.location.href.split('//')[1].split('.')[0];
        console.log(co, 'dbc', window.location.href);
        if (co !== 'app') {
            this.companyService.isSubDomainExist(co)
                .subscribe(function (success) {
                _this.currentCompany = new company_1.Company(success);
                _this.currentCompanyInit = _this.currentCompany.name[0];
                _this.getSelectedCompanyUsers();
            }, function (error) {
                console.log('dashboard company Error', error);
            });
        }
        jQuery('.slimscroll').slimscroll({
            railVisible: true,
            alwaysVisible: true
        });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery('#calquiz-modal').on('hidden.bs.modal', function () {
            _this.reset = false;
        });
    };
    DashboardComponent.prototype.getAllLeadsCount = function (user_status) {
        var _this = this;
        if (user_status === void 0) { user_status = ''; }
        var self = this;
        self._calculatorAnalytics.getLeadsCount(this.company_id)
            .subscribe(function (success) {
            var cp = 0;
            _this.apps.forEach(function (app) {
                if (app.liveApp) {
                    cp++;
                }
            });
            var interComData = {
                'leads': success.leads_count,
                'subscription_status': user_status,
                'calculators_created': _this.apps.length,
                'calculators_published': cp
            };
            localStorage.setItem('icd', JSON.stringify(interComData));
            window.Intercom('update', interComData);
        }, function (error) {
            console.log('Error');
        });
    };
    DashboardComponent.prototype.getPlanSubscription = function () {
        var _this = this;
        var self = this;
        var user_status = '';
        var getPlanSubscription = self._membershipService.getplanSubscription()
            .subscribe(function (success) {
            var subscription = success.currentplan.subscription;
            switch (subscription.status) {
                case 'in_trial':
                    user_status = 'Trial';
                    break;
                case 'active':
                    user_status = 'Paid';
                    if (subscription.plan_id === 'starter') {
                        user_status = 'Free';
                    }
                    break;
            }
            _this.getAllLeadsCount(user_status);
            _this.loader = 1;
        }, function (error) {
        });
    };
    DashboardComponent.prototype.getCompanyProjects = function () {
        var _this = this;
        var i = 0;
        return this.companyService.getCompanyProjects(this.sub_domain)
            .subscribe(function (response) {
            _this.totalUniqueVisitors = 0;
            _this.totalLeads = 0;
            _this.overallConversionRate = 0;
            _this.apps = response.map(function (app) {
                i++;
                app.createdAt = moment(app.createdAt).format("MMM Do 'YY");
                app.updatedAt = moment(app.updatedAt).format("MMM Do 'YY");
                if (app.liveApp) {
                    _this.subs.push(_this.getStats(app));
                }
                else {
                    if (!app.name.length)
                        app.name = _this.subDomainService.subDomain.name + "'s calculator #" + i;
                }
                return app;
            });
            _this.getPlanSubscription();
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.checkSubDomain = function (url) {
        url = url.replace(/^\s+/, '');
        url = url.replace(/\s+$/, '');
        url = url.replace(/\\/g, '/');
        url = url.replace(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i, '');
        url = url.replace(/^www\./i, '');
        if (url.split('.').length === 3 && url.split('.')[0] === 'app')
            return false;
        url = url.replace(/\/(.*)/, '');
        if (url.match(/\.[a-z]{2,3}\.[a-z]{2}$/i)) {
            url = url.replace(/\.[a-z]{2,3}\.[a-z]{2}$/i, '');
        }
        else if (url.match(/\.[a-z]{2,5}$/i)) {
            url = url.replace(/\.[a-z]{2,5}$/i, '');
        }
        return (url.match(/\./g)) ? true : false;
    };
    DashboardComponent.prototype.getStats = function (app) {
        var _this = this;
        return this.companyService.getProjectsStats(app._id)
            .subscribe(function (response) {
            if (response.length) {
                app.uniqueViews = Number(response[0][1]);
                app.leads = Number(response[0][3]);
                app.conversionRate = (app.uniqueViews && app.leads) ? ((app.leads / app.uniqueViews) * 100).toFixed(2) : 0;
                _this.totalUniqueVisitors += app.uniqueViews;
                _this.totalLeads += app.leads;
                _this.overallConversionRate = (_this.totalUniqueVisitors) ? ((_this.totalLeads / _this.totalUniqueVisitors) * 100).toFixed(2) : 0;
            }
            else {
                app.uniqueViews = 0;
                app.leads = 0;
                app.conversionRate = 0;
            }
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.initCalcQuiz = function () {
        jQuery("input[name='calQuiz']").prop("checked", false);
        jQuery('.step1').removeClass('hide');
        jQuery('.step2').addClass('hide');
        jQuery('.calcName-input').val('');
    };
    DashboardComponent.prototype.selectCalc = function () {
        localStorage.setItem('temp_type', jQuery("input[name='calQuiz']:checked").val());
        this.calcType = jQuery("input[name='calQuiz']:checked").val();
        jQuery('.step1').addClass('hide');
        jQuery('.step2').removeClass('hide');
    };
    DashboardComponent.prototype.goBack = function () {
        jQuery("input[name='calQuiz']").prop("checked", false);
        this.reset = false;
        localStorage.removeItem('temp_type');
        jQuery('.step2').addClass('hide');
        jQuery('.step1').removeClass('hide');
    };
    DashboardComponent.prototype.onAddNewCalc = function () {
        if (!this.calcNameform.valid) {
            this.calcNameform.controls['calcName'].markAsTouched();
            this.reset = true;
        }
        else {
            localStorage.setItem('calc_name', this.calcNameform.controls['calcName'].value);
            this.addNewCalc();
        }
    };
    DashboardComponent.prototype.addNewCalc = function () {
        this.isLimitCrossed = this._featureAuthService.features.calc_in_limit;
        jQuery('#calquiz-modal').modal('hide');
        if (this.isLimitCrossed) {
            localStorage.setItem('project', 'New');
            localStorage.setItem('reload', '1');
            if (localStorage.getItem('temp_type') === 'Recommendation') {
                localStorage.setItem('temp_name', 'one-page-slider');
                this._router.navigate(['/builder']);
            }
            else {
                this._router.navigate(['/templates']);
            }
        }
        else
            jQuery('#premiumModal').modal('show');
    };
    DashboardComponent.prototype.openOldCalc = function (app, tabName) {
        localStorage.setItem('project', app._id);
        localStorage.setItem('tab-selected', tabName);
        localStorage.setItem('reload', '1');
        this._router.navigate(['/builder', app.url]);
    };
    DashboardComponent.prototype.selectSubTab = function (tabName) {
        localStorage.setItem('selected-sub-tab', tabName);
    };
    DashboardComponent.prototype.duplicateApp = function (dataId) {
        var _this = this;
        jQuery('.dashboard-toast').fadeIn().animate({ bottom: 60 }, 800, function () { });
        jQuery('.dash-toast-msg').html('Duplicating Calculator, Please Wait...');
        this._dashboardService.duplicateApp({ id: dataId })
            .subscribe(function (response) {
            if (jQuery.isEmptyObject(response)) {
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this.subs.push(_this.getCompanyProjects());
                jQuery('.dash-toast-msg').html('Calculator duplicated Successfully');
                setTimeout(function () {
                    jQuery('.dashboard-toast').fadeOut().animate({ bottom: -60 }, 800, function () { });
                }, 2000);
            }
        }, function (error) {
            if (error.error.code === 'E_USER_LIMIT_EXCEEDED') {
                jQuery('#premiumModal').modal('show');
                setTimeout(function () {
                    jQuery('.dashboard-toast').fadeOut().animate({ bottom: -60 }, 800, function () { });
                }, 200);
            }
            else {
                console.log(error);
            }
        });
    };
    DashboardComponent.prototype.deleteApp = function (dataId) {
        var that = this;
        bootbox.dialog({
            size: 'small',
            message: "\n                <div class=\"one-line-bootbox\">\n                    <div class=\"bootbox-body-left\">\n                        <div class=\"mat-icon\">\n                            <i class=\"material-icons\">error</i>\n                        </div>\n                    </div>\n                    <div class=\"bootbox-body-right\">\n                        <p class=\"one-line-para\">Are you sure you want to delete this calculator?</p>\n                    </div>\n                </div>\n            ",
            buttons: {
                cancel: {
                    label: "Cancel",
                    className: "btn-cancel btn-cancel-hover",
                    callback: function () {
                        ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'DeleteCalc Confirmation pop up Cancel');
                        _kmq.push(['record', 'Dashboard DeleteCalc Confirmation pop up Cancel']);
                    }
                },
                success: {
                    label: "OK",
                    className: "btn btn-ok btn-hover",
                    callback: function () {
                        that._dashboardService.deleteApp({ id: dataId })
                            .subscribe(function (response) {
                            if (jQuery.isEmptyObject(response)) {
                                that._router.navigate(['/dashboard']);
                            }
                            else {
                                that.subs.push(that.getCompanyProjects());
                                window.toastNotification('Calculator Deleted Successfully.');
                            }
                            ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'DeleteCalc Confirmation pop up Ok');
                            _kmq.push(['record', 'Dashboard DeleteCalc Confirmation pop up Ok']);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            }
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    DashboardComponent.prototype.unsubscribe = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    DashboardComponent.prototype.onModeChange = function (app) {
        var mode = app.mode;
        if (mode === 'PUBLIC') {
            mode = 'PRIVATE';
        }
        else {
            mode = 'PUBLIC';
        }
        this._dashboardService.changeAppMode(app._id, mode)
            .subscribe(function (response) {
            app.mode = mode;
            window.toastNotification('Mode changed to ' + mode + ' for ' + app.name);
        }, function (error) {
            console.log(error);
        });
    };
    DashboardComponent.prototype.getMyCompanies = function () {
        var self = this;
        self.companyService.getCompanies()
            .subscribe(function (success) {
            self.myCompaniesList = [];
            success.forEach(function (company) {
                if (company.user_company.status !== 'DELETED' || company.user_company.status !== 'LEFT' && company.user_company.status !== 'DELETED')
                    self.myCompaniesList.push(new company_1.Company(company));
            });
        }, function (error) {
            console.log('getMyCompanies TS', error.error.err_message);
        });
    };
    DashboardComponent.prototype.getSelectedCompanyUsers = function () {
        var self = this;
        var count = 0;
        this.companyService.getCompanyUsers(self.currentCompany.id)
            .subscribe(function (success) {
            self.currentCompanyUsers = [];
            success.forEach(function (user) {
                if (user) {
                    if (user.user_company.active) {
                        if (count < 4) {
                            self.currentCompanyUsers.push(new user_1.User(user));
                            count++;
                        }
                        else
                            self.moreCompanyUsers.push(new user_1.User(user));
                    }
                }
            });
        }, function (error) {
            console.log('getSelectedCompanyUsers Dashboard', error.error.err_message);
        });
    };
    DashboardComponent.prototype.createCompany = function () {
        var self = this;
        self.Message = '';
        jQuery('#btnCreateCompany').text('Please Wait...').attr('disabled', true);
        self.companyService.createCompany(self.createCompanyForm.value)
            .subscribe(function (success) {
            jQuery('#add-new-company input').val('');
            jQuery('#btnCreateCompany').text('Add New Company').attr('disabled', false);
            jQuery('#add-new-company div.label-floating').addClass('is-empty');
            self.Message = 'Company Created Successfully!';
            jQuery('#add-new-company').modal('hide');
            ga('markettingteam.send', 'event', 'Dashboard', 'Submit', 'Dashboard Company Added');
            _kmq.push(['record', 'Dashboard Company Added']);
            jQuery('.float-changes-updated').removeClass('hide');
            jQuery('.float-changes-updated').fadeIn()
                .animate({ bottom: 40 }, 1000, function () {
            });
            self.closeLayover();
            self.getMyCompanies();
        }, function (error) {
            self.Message = error.error.err_message;
            jQuery('#success-addCompany').removeClass('hide');
            jQuery('#btnCreateCompany').text('Add New Company');
            jQuery('#btnCreateCompany').attr('disabled', false);
        });
    };
    DashboardComponent.prototype.inviteUser = function () {
        var self = this;
        self.Message = '';
        jQuery('#btnInvite').text('Please Wait...').attr('disabled', true);
        self.companyService.addUser(self.inviteUserForm.value, self.currentCompany.id)
            .subscribe(function (success) {
            jQuery('#add-new-user input').val('');
            jQuery('#radioAdmin').prop('checked', false);
            jQuery('#radioManager').prop('checked', true);
            jQuery('#btnInvite').text('Add New User').attr('disabled', false);
            jQuery('#inviteUserForm #inputName').val('');
            jQuery('#inviteUserForm #inputEmail').val('');
            ga('markettingteam.send', 'event', 'Dashboard', 'Submit', 'Dashboard User Added');
            _kmq.push(['record', 'Dashboard User Added']);
            self.Message = 'User Invited Successfully!';
            jQuery('#add-new-user').modal('hide');
            jQuery('.float-changes-updated').removeClass('hide');
            jQuery('.float-changes-updated').fadeIn()
                .animate({ bottom: 40 }, 1000, function () {
            });
            self.closeLayover();
            self.getSelectedCompanyUsers();
        }, function (error) {
            var error_code = error.error.code;
            if (error_code === 'E_UNIQUE_USERNAME_VALIDATION' ||
                error_code === 'E_UNIQUE_EMAIL_VALIDATION' ||
                error_code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION' ||
                error_code === 'E_USER_COMPANY_ALREADY_EXISTS') {
                self.Message = ' This user is already a part of this company on Outgrow';
            }
            else if (error_code === 'E_USER_LIMIT_EXCEEDED') {
                self.Message = 'Please <a href="settings/membership">upgrade</a> your plan you have exceeded the limit!';
            }
            else {
                if (error.error.err_errors['emails.0.email'].message === 'Please use a valid company email address to sign up for Outgrow :)') {
                    self.Message = 'You can only invite users with a valid company email address';
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
            jQuery('#dashboardAdduserMessage').html(self.Message);
        });
    };
    DashboardComponent.prototype.hideError = function () {
        jQuery('.alert').addClass('hide');
    };
    DashboardComponent.prototype.closeLayover = function () {
        setTimeout(function () {
            jQuery('.float-changes-updated').fadeIn()
                .animate({ bottom: -50 }, 800, function () { });
        }, 4000);
    };
    DashboardComponent.prototype.checkAnalytics = function (app, tabName) {
        console.log("this is all features", this._featureAuthService.features);
        this.isAnalyticsAvailable = this._featureAuthService.features.analytics;
        console.log('this is analytics', this.isAnalyticsAvailable);
        if (this.isAnalyticsAvailable) {
            this.openOldCalc(app, tabName);
        }
        else {
            jQuery('#premiumModal').modal('show');
        }
    };
    DashboardComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case "ADDCOMPANY":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'Dashboard Add Company');
                _kmq.push(['record', 'Dashboard Add Company']);
                break;
            case "ADDUSER":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'Dashboard Add User');
                _kmq.push(['record', 'Dashboard Add User']);
                break;
            case "OPENCALC":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'OpenCalc');
                _kmq.push(['record', 'Dashboard Open Calc Click']);
                break;
            case "ADDCALC":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'BuildCalc');
                _kmq.push(['record', 'Dashboard Build Calc Click']);
                break;
            case "EDITCALC":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'EditCalc');
                _kmq.push(['record', 'Dashboard Calc List Edit Calc']);
                break;
            case "ANALYTICS":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'ViewAnalytics');
                _kmq.push(['record', 'Dashboard Calc List View Analytics']);
                break;
            case "SETTINGS":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'ViewSettings');
                _kmq.push(['record', 'Dashboard Calc List View Settings']);
                break;
            case "DUPLICATE":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'DuplicateCalc');
                _kmq.push(['record', 'Dashboard Calc List Duplicate Calculator']);
                break;
            case "DELETE":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'DeleteCalc');
                _kmq.push(['record', 'Dashboard Calc List Delete Calculator']);
                break;
            case "SHARE":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'ShareCalc');
                _kmq.push(['record', 'Dashboard Calc List Share Calculator']);
                break;
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-dashboard',
            providers: [index_1.DashboardService, builder_service_1.BuilderService, calculator_analytics_service_1.CalculatorAnalytics, index_3.MembershipService],
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            pipes: [index_2.SafeStyle]
        }), 
        __metadata('design:paramtypes', [calculator_analytics_service_1.CalculatorAnalytics, index_3.MembershipService, index_1.SubDomainService, index_1.CompanyService, index_1.DashboardService, builder_service_1.BuilderService, feature_access_service_1.FeatureAuthService, index_1.CookieService, router_1.Router, forms_1.FormBuilder, index_3.Script])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEQsZUFBZSxDQUFDLENBQUE7QUFDNUUsc0JBQTZFLGdCQUFnQixDQUFDLENBQUE7QUFFOUYsc0JBQWtGLGdDQUFnQyxDQUFDLENBQUE7QUFDbkgsZ0NBQStCLDRDQUE0QyxDQUFDLENBQUE7QUFDNUUsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsZ0NBQStCLHlDQUF5QyxDQUFDLENBQUE7QUFDekUsdUNBQW1DLGlEQUFpRCxDQUFDLENBQUE7QUFDckYsc0JBQTBCLDZCQUE2QixDQUFDLENBQUE7QUFFeEQsMkJBQXVCLDhCQUE4QixDQUFDLENBQUE7QUFDdEQsd0JBQXdCLGdDQUFnQyxDQUFDLENBQUE7QUFDekQscUJBQXFCLDZCQUE2QixDQUFDLENBQUE7QUFDbkQsc0JBQTBDLGdDQUFnQyxDQUFDLENBQUE7QUFDM0UsNkNBQW9DLHFEQUFxRCxDQUFDLENBQUE7QUFrQjFGO0lBNkJJLDRCQUNZLG9CQUF5QyxFQUN6QyxrQkFBcUMsRUFDckMsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLGlCQUFtQyxFQUNuQyxlQUErQixFQUMvQixtQkFBdUMsRUFDdkMsY0FBNkIsRUFDOUIsT0FBZSxFQUNmLEVBQWUsRUFDZCxPQUFlO1FBVmYseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUN6Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDOUIsWUFBTyxH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QztTQUNyQixDQUFDOzswQkFBQTtJQWduQkYseUJBQUM7QUFBRCxDQTltQkEsQUE4bUJDLElBQUE7QUE5bUJZLDBCQUFrQixxQkE4bUI5QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL2NvbXBvbmVudHMvK2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YkRvbWFpbiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL3N1YmRvbWFpbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTdWJEb21haW5TZXJ2aWNlLCBDb21wYW55U2VydmljZSwgRGFzaGJvYXJkU2VydmljZSwgQ29va2llU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IEVtYWlsVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3ZhbGlkYXRvcnMvZW1haWwudmFsaWRhdG9yJztcclxuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEl0ZW0sIEFwcCB9IGZyb20gJy4uLy4uLytidWlsZGVyL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IEJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vK2J1aWxkZXIvc2VydmljZXMvYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmVhdHVyZUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZlYXR1cmUtYWNjZXNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTYWZlU3R5bGUgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvcGlwZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vLi4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5pbXBvcnQgeyBDb21wYW55IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9jb21wYW55JztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvdXNlcic7XHJcbmltcG9ydCB7IE1lbWJlcnNoaXBTZXJ2aWNlLCBTY3JpcHQgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBDYWxjdWxhdG9yQW5hbHl0aWNzIH0gZnJvbSAnLi4vK2FuYWx5dGljcy9zZXJ2aWNlcy9jYWxjdWxhdG9yLWFuYWx5dGljcy5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuZGVjbGFyZSB2YXIgbW9tZW50OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGJvb3Rib3g6IGFueTtcclxuZGVjbGFyZSB2YXIgZ2E6IGFueTtcclxuZGVjbGFyZSB2YXIgX2ttcTogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ29nLWRhc2hib2FyZCcsXHJcbiAgICBwcm92aWRlcnM6IFtEYXNoYm9hcmRTZXJ2aWNlLCBCdWlsZGVyU2VydmljZSwgQ2FsY3VsYXRvckFuYWx5dGljcywgTWVtYmVyc2hpcFNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2Rhc2hib2FyZC5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFU10sXHJcbiAgICBwaXBlczogW1NhZmVTdHlsZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBzdWJEb21haW46IFN1YkRvbWFpbjtcclxuICAgIHVzZXJuYW1lOiBTdHJpbmc7XHJcbiAgICBjb21wYW55X2lkOiBTdHJpbmc7XHJcbiAgICBjYWxjVHlwZTogc3RyaW5nO1xyXG4gICAgYXBwczogYW55W107XHJcbiAgICBzdGF0czogYW55ID0ge307XHJcbiAgICBsb2FkZXI6IE51bWJlciA9IDA7XHJcbiAgICBNZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuICAgIHVzZXJfc3RhdHVzOiBzdHJpbmcgPSAnJztcclxuICAgIGNhbGNOYW1lZm9ybTogRm9ybUdyb3VwO1xyXG4gICAgc3ViZG9tYWluRXh0ZW5zaW9uOiBhbnkgPSAnJztcclxuICAgIG15Q29tcGFuaWVzTGlzdDogYW55ID0gW107XHJcbiAgICBjdXJyZW50Q29tcGFueTogYW55ID0gJyc7XHJcbiAgICBjdXJyZW50Q29tcGFueUluaXQ6IGFueSA9ICcnO1xyXG4gICAgY3VycmVudENvbXBhbnlVc2VyczogYW55ID0gW107XHJcbiAgICBtb3JlQ29tcGFueVVzZXJzOiBhbnkgPSBbXTtcclxuICAgIGNyZWF0ZUNvbXBhbnlGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBpbnZpdGVVc2VyRm9ybTogRm9ybUdyb3VwO1xyXG4gICAgc3ViX2RvbWFpbiA6IGFueSA9ICcnO1xyXG4gICAgLy92YXJpYWJsZSB1c2VkIHRvIGNsZWFyIHZhbGlkYXRpb24gbXNncyBvbiBtb2RhbCBoaWRlXHJcbiAgICByZXNldDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0xpbWl0Q3Jvc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBpc0FuYWx5dGljc0F2YWlsYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0b3RhbFVuaXF1ZVZpc2l0b3JzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB0b3RhbExlYWRzOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBvdmVyYWxsQ29udmVyc2lvblJhdGU6IGFueSA9IDA7XHJcbiAgICBwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9jYWxjdWxhdG9yQW5hbHl0aWNzOiBDYWxjdWxhdG9yQW5hbHl0aWNzLFxyXG4gICAgICAgIHByaXZhdGUgX21lbWJlcnNoaXBTZXJ2aWNlOiBNZW1iZXJzaGlwU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHN1YkRvbWFpblNlcnZpY2U6IFN1YkRvbWFpblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjb21wYW55U2VydmljZTogQ29tcGFueVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfZGFzaGJvYXJkU2VydmljZTogRGFzaGJvYXJkU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9idWlsZGVyU2VydmljZTogQnVpbGRlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfZmVhdHVyZUF1dGhTZXJ2aWNlOiBGZWF0dXJlQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfY29va2llU2VydmljZTogQ29va2llU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfc2NyaXB0OiBTY3JpcHRcclxuICAgICkge1xyXG4gICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xyXG4gICAgICBpZiAodGhpcy5jaGVja1N1YkRvbWFpbih1cmwpKVxyXG4gICAgICAgIHRoaXMuc3ViX2RvbWFpbiA9IHVybC5zcGxpdCgnLicpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGxldCBzdG9yYWdlOiBhbnkgPSB0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKTtcclxuICAgICAgICBpZiAoc3RvcmFnZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzdG9yYWdlID0gSlNPTi5wYXJzZShzdG9yYWdlKTtcclxuICAgICAgICAgICAgaWYgKHN0b3JhZ2Uuc2hvd1VwZ3JhZGVNb2RhbClcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI3ByZW1pdW1Nb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcm5hbWUgPSBzdG9yYWdlLnVzZXIubmFtZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbiA9PT0gc3RvcmFnZS5jb21wYW55LnN1Yl9kb21haW4pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBhbnlfaWQgPSBzdG9yYWdlLmNvbXBhbnkuX2lkO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGFueV9pZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb21wYW55Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlQ29tcGFueUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgY29tcGFueW5hbWU6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXSxcclxuICAgICAgICAgICAgZG9tYWluOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksIFZhbGlkYXRvcnMucGF0dGVybignXlthLXpBLVowLTldKiQnKV0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaW52aXRlVXNlckZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgdXNlck5hbWU6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXSxcclxuICAgICAgICAgICAgdXNlckVtYWlsOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgRW1haWxWYWxpZGF0b3IuZm9ybWF0XSldLFxyXG4gICAgICAgICAgICB1c2VyUm9sZTogWydNQU5BR0VSJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYWxjTmFtZWZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgY2FsY05hbWU6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdWJkb21haW5FeHRlbnNpb24gPSAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmdldENvbXBhbnlQcm9qZWN0cygpKTtcclxuICAgICAgICB0aGlzLmdldE15Q29tcGFuaWVzKCk7XHJcbiAgICAgICAgdGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmdldEFsbEZlYXR1cmVBY2Nlc3MoKTtcclxuICAgICAgICB0aGlzLmlzTGltaXRDcm9zc2VkID0gPGJvb2xlYW4+dGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmZlYXR1cmVzLmNhbGNfaW5fbGltaXQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNMaW1pdENyb3NzZWQsJ2FzZGFzZGFzZHNhZGFhc2prZGhkYXNqa2hka2FoZGtqYXNoZGthaHNka2hhc2tqJyk7XHJcbiAgICAgICAgalF1ZXJ5Lm1hdGVyaWFsLmluaXQoKTtcclxuICAgICAgICBsZXQgY28gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnLy8nKVsxXS5zcGxpdCgnLicpWzBdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvLCAnZGJjJywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIGlmIChjbyAhPT0gJ2FwcCcpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZGFzaGJvYXJkIGNvJywgY28pO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBhbnlTZXJ2aWNlLmlzU3ViRG9tYWluRXhpc3QoY28pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbXBhbnkgPSBuZXcgQ29tcGFueShzdWNjZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDb21wYW55SW5pdCA9IHRoaXMuY3VycmVudENvbXBhbnkubmFtZVswXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFNlbGVjdGVkQ29tcGFueVVzZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGFzaGJvYXJkIGNvbXBhbnkgRXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqUXVlcnkoJy5zbGltc2Nyb2xsJykuc2xpbXNjcm9sbCh7XHJcbiAgICAgICAgICAgIHJhaWxWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBhbHdheXNWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGpRdWVyeSgnI2NhbHF1aXotbW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0ID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyo9PT0gTWV0aG9kcyB0byBjb2xsZWN0IGRhdGEgZm9yIGludGVyY29tID09PSovXHJcbiAgICBnZXRBbGxMZWFkc0NvdW50KHVzZXJfc3RhdHVzOiBzdHJpbmcgPSAnJykge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLl9jYWxjdWxhdG9yQW5hbHl0aWNzLmdldExlYWRzQ291bnQodGhpcy5jb21wYW55X2lkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoc3VjY2VzczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3AgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBzLmZvckVhY2goZnVuY3Rpb24oYXBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYXBwLmxpdmVBcHApIHsgY3ArKzsgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlckNvbURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWRzJzogc3VjY2Vzcy5sZWFkc19jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAnc3Vic2NyaXB0aW9uX3N0YXR1cyc6IHVzZXJfc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICdjYWxjdWxhdG9yc19jcmVhdGVkJzogdGhpcy5hcHBzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAnY2FsY3VsYXRvcnNfcHVibGlzaGVkJzogY3BcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWNkJywgSlNPTi5zdHJpbmdpZnkoaW50ZXJDb21EYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuSW50ZXJjb20oJ3VwZGF0ZScsIGludGVyQ29tRGF0YSk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYW5TdWJzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCB1c2VyX3N0YXR1cyA9ICcnO1xyXG4gICAgICAgIGxldCBnZXRQbGFuU3Vic2NyaXB0aW9uID0gc2VsZi5fbWVtYmVyc2hpcFNlcnZpY2UuZ2V0cGxhblN1YnNjcmlwdGlvbigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdWJzY3JpcHRpb24gPSBzdWNjZXNzLmN1cnJlbnRwbGFuLnN1YnNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3Vic2NyaXB0aW9uLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2luX3RyaWFsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9zdGF0dXMgPSAnVHJpYWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdhY3RpdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3N0YXR1cyA9ICdQYWlkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbi5wbGFuX2lkID09PSAnc3RhcnRlcicpIHsgdXNlcl9zdGF0dXMgPSAnRnJlZSc7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFsbExlYWRzQ291bnQodXNlcl9zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXIgPSAxO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLypnZXRQbGFuU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7Ki9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgLyo9PT0gRW5kID09PSovXHJcblxyXG4gICAgZ2V0Q29tcGFueVByb2plY3RzKCkge1xyXG4gICAgICAgIHZhciBpOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhbnlTZXJ2aWNlLmdldENvbXBhbnlQcm9qZWN0cyh0aGlzLnN1Yl9kb21haW4pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxVbmlxdWVWaXNpdG9ycyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsTGVhZHMgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVyYWxsQ29udmVyc2lvblJhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBzID0gcmVzcG9uc2UubWFwKChhcHA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICBhcHAuY3JlYXRlZEF0ID0gbW9tZW50KGFwcC5jcmVhdGVkQXQpLmZvcm1hdChcIk1NTSBEbyAnWVlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLnVwZGF0ZWRBdCA9IG1vbWVudChhcHAudXBkYXRlZEF0KS5mb3JtYXQoXCJNTU0gRG8gJ1lZXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcHAubGl2ZUFwcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmdldFN0YXRzKGFwcCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXBwLm5hbWUubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwLm5hbWUgPSB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLm5hbWUgKyBcIidzIGNhbGN1bGF0b3IgI1wiICsgaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFwcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQbGFuU3Vic2NyaXB0aW9uKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1N1YkRvbWFpbih1cmw6IFN0cmluZykge1xyXG4gICAgICAvLyB0cmltIHNwYWNlc1xyXG4gICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXlxccysvLCAnJyk7XHJcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXHMrJC8sICcnKTtcclxuXHJcbiAgICAgIC8vIGNvbnZlcnQgYmFjayBzbGFzaCB0byBmb3J3YXJkIHNsYXNoXHJcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XHJcblxyXG4gICAgICAvLyByZW1vdmUgJ2h0dHA6Ly8nLCAnaHR0cHM6Ly8nIG9yICdmdHA6Ly8nXHJcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9eaHR0cFxcOlxcL1xcL3xeaHR0cHNcXDpcXC9cXC98XmZ0cFxcOlxcL1xcLy9pLCAnJyk7XHJcblxyXG4gICAgICAvLyByZW1vdmUgJ3d3dy4nIGlmIGV4aXN0XHJcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9ed3d3XFwuL2ksICcnKTtcclxuICAgICAgaWYgKHVybC5zcGxpdCgnLicpLmxlbmd0aCA9PT0gMyAmJiB1cmwuc3BsaXQoJy4nKVswXSA9PT0gJ2FwcCcpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgLy8gcmVtb3ZlIHBhdGggYWZ0ZXIgZG9tYWluXHJcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC8oLiopLywgJycpO1xyXG5cclxuICAgICAgLy8gcmVtb3ZlIHRsZCdzXHJcbiAgICAgIGlmICh1cmwubWF0Y2goL1xcLlthLXpdezIsM31cXC5bYS16XXsyfSQvaSkpIHtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwuW2Etel17MiwzfVxcLlthLXpdezJ9JC9pLCAnJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLm1hdGNoKC9cXC5bYS16XXsyLDV9JC9pKSkge1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC5bYS16XXsyLDV9JC9pLCAnJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAodXJsLm1hdGNoKC9cXC4vZykpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRzKGFwcDogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFueVNlcnZpY2UuZ2V0UHJvamVjdHNTdGF0cyhhcHAuX2lkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdEYXNoYm9hcmQgQW5hbHl0aWNzIFJlc3AgZm9yIFwiJyArIGFwcC51cmwgKyAnXCIgLT4nLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLnVuaXF1ZVZpZXdzID0gTnVtYmVyKHJlc3BvbnNlWzBdWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBhcHAubGVhZHMgPSBOdW1iZXIocmVzcG9uc2VbMF1bM10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5jb252ZXJzaW9uUmF0ZSA9IChhcHAudW5pcXVlVmlld3MgJiYgYXBwLmxlYWRzKSA/ICgoYXBwLmxlYWRzIC8gYXBwLnVuaXF1ZVZpZXdzKSAqIDEwMCkudG9GaXhlZCgyKSA6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxVbmlxdWVWaXNpdG9ycyArPSBhcHAudW5pcXVlVmlld3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbExlYWRzICs9IGFwcC5sZWFkcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJhbGxDb252ZXJzaW9uUmF0ZSA9ICh0aGlzLnRvdGFsVW5pcXVlVmlzaXRvcnMpID8gKCh0aGlzLnRvdGFsTGVhZHMgLyB0aGlzLnRvdGFsVW5pcXVlVmlzaXRvcnMpICogMTAwKS50b0ZpeGVkKDIpIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC51bmlxdWVWaWV3cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLmxlYWRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuY29udmVyc2lvblJhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBwb3B1cCBhY2l0aXZpdHkgLy9cclxuICAgIGluaXRDYWxjUXVpeigpIHtcclxuICAgICAgICBqUXVlcnkoXCJpbnB1dFtuYW1lPSdjYWxRdWl6J11cIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgIGpRdWVyeSgnLnN0ZXAxJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICBqUXVlcnkoJy5zdGVwMicpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuY2FsY05hbWUtaW5wdXQnKS52YWwoJycpO1xyXG4gICAgfVxyXG4gICAgLy9zZWxlY3QgY2FsYyB0eXBlXHJcbiAgICAgc2VsZWN0Q2FsYygpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVtcF90eXBlJyxqUXVlcnkoXCJpbnB1dFtuYW1lPSdjYWxRdWl6J106Y2hlY2tlZFwiKS52YWwoKSk7XHJcbiAgICAgICAgdGhpcy5jYWxjVHlwZSA9IGpRdWVyeShcImlucHV0W25hbWU9J2NhbFF1aXonXTpjaGVja2VkXCIpLnZhbCgpO1xyXG4gICAgICAgIGpRdWVyeSgnLnN0ZXAxJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICBqUXVlcnkoJy5zdGVwMicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICB9XHJcbiAgICAvL2dvIGJhY2sgdG8gY2hvb3NlIGRpZmYgY2FsYyB0eXBlXHJcbiAgICAgZ29CYWNrKCkge1xyXG4gICAgICAgIGpRdWVyeShcImlucHV0W25hbWU9J2NhbFF1aXonXVwiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5yZXNldCA9IGZhbHNlO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0ZW1wX3R5cGUnKTtcclxuICAgICAgICBqUXVlcnkoJy5zdGVwMicpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc3RlcDEnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgfVxyXG4gICAgLy9jaGVjayBpZiBmb3JtIGlzIHZhbGlkXHJcbiAgICBvbkFkZE5ld0NhbGMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbGNOYW1lZm9ybS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGNOYW1lZm9ybS5jb250cm9sc1snY2FsY05hbWUnXS5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICAgICAgICAgICB0aGlzLnJlc2V0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FsY19uYW1lJywgdGhpcy5jYWxjTmFtZWZvcm0uY29udHJvbHNbJ2NhbGNOYW1lJ10udmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5ld0NhbGMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL3BlcmZvcm0gYWN0aW9uIG9uIHZhbGlkIGZvcm1cclxuICAgIGFkZE5ld0NhbGMoKSB7XHJcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RlbXBfdHlwZScsalF1ZXJ5KFwiaW5wdXRbbmFtZT0nY2FsUXVpeiddOmNoZWNrZWRcIikudmFsKCkpO1xyXG4gICAgICAgIHRoaXMuaXNMaW1pdENyb3NzZWQgPSA8Ym9vbGVhbj50aGlzLl9mZWF0dXJlQXV0aFNlcnZpY2UuZmVhdHVyZXMuY2FsY19pbl9saW1pdDtcclxuICAgICAgICBqUXVlcnkoJyNjYWxxdWl6LW1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICBpZiAodGhpcy5pc0xpbWl0Q3Jvc3NlZCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdCcsICdOZXcnKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlbG9hZCcsICcxJyk7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVtcF90eXBlJykgPT09ICdSZWNvbW1lbmRhdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZW1wX25hbWUnLCAnb25lLXBhZ2Utc2xpZGVyJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYnVpbGRlciddKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy90ZW1wbGF0ZXMnXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGpRdWVyeSgnI3ByZW1pdW1Nb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk9sZENhbGMoYXBwOiBhbnksIHRhYk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0JywgYXBwLl9pZCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhYi1zZWxlY3RlZCcsIHRhYk5hbWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWxvYWQnLCAnMScpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9idWlsZGVyJywgYXBwLnVybF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFN1YlRhYih0YWJOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VsZWN0ZWQtc3ViLXRhYicsIHRhYk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGR1cGxpY2F0ZSBhcHAqL1xyXG4gICAgZHVwbGljYXRlQXBwKGRhdGFJZDogYW55KSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuZGFzaGJvYXJkLXRvYXN0JykuZmFkZUluKCkuYW5pbWF0ZSh7IGJvdHRvbTogNjAgfSwgODAwLCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgIGpRdWVyeSgnLmRhc2gtdG9hc3QtbXNnJykuaHRtbCgnRHVwbGljYXRpbmcgQ2FsY3VsYXRvciwgUGxlYXNlIFdhaXQuLi4nKTtcclxuICAgICAgICB0aGlzLl9kYXNoYm9hcmRTZXJ2aWNlLmR1cGxpY2F0ZUFwcCh7IGlkOiBkYXRhSWQgfSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkuaXNFbXB0eU9iamVjdChyZXNwb25zZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmdldENvbXBhbnlQcm9qZWN0cygpKTtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJy5kYXNoLXRvYXN0LW1zZycpLmh0bWwoJ0NhbGN1bGF0b3IgZHVwbGljYXRlZCBTdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcuZGFzaGJvYXJkLXRvYXN0JykuZmFkZU91dCgpLmFuaW1hdGUoeyBib3R0b206IC02MCB9LCA4MDAsIGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3IuY29kZSA9PT0gJ0VfVVNFUl9MSU1JVF9FWENFRURFRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNwcmVtaXVtTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJy5kYXNoYm9hcmQtdG9hc3QnKS5mYWRlT3V0KCkuYW5pbWF0ZSh7IGJvdHRvbTogLTYwIH0sIDgwMCwgZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvKiBEZWxldGUgYXBwKi9cclxuICAgIGRlbGV0ZUFwcChkYXRhSWQ6IGFueSkge1xyXG4gICAgICAgIHZhciB0aGF0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGJvb3Rib3guZGlhbG9nKHtcclxuICAgICAgICAgICAgc2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9uZS1saW5lLWJvb3Rib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vdGJveC1ib2R5LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3I8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib290Ym94LWJvZHktcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJvbmUtbGluZS1wYXJhXCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNhbGN1bGF0b3I/PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4tY2FuY2VsIGJ0bi1jYW5jZWwtaG92ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdEYXNoYm9hcmQnLCAnQ2xpY2snLCAnRGVsZXRlQ2FsYyBDb25maXJtYXRpb24gcG9wIHVwIENhbmNlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnRGFzaGJvYXJkIERlbGV0ZUNhbGMgQ29uZmlybWF0aW9uIHBvcCB1cCBDYW5jZWwnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT0tcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1vayBidG4taG92ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll9kYXNoYm9hcmRTZXJ2aWNlLmRlbGV0ZUFwcCh7IGlkOiBkYXRhSWQgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkuaXNFbXB0eU9iamVjdChyZXNwb25zZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5fcm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnN1YnMucHVzaCh0aGF0LmdldENvbXBhbnlQcm9qZWN0cygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdDYWxjdWxhdG9yIERlbGV0ZWQgU3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdEYXNoYm9hcmQnLCAnQ2xpY2snLCAnRGVsZXRlQ2FsYyBDb25maXJtYXRpb24gcG9wIHVwIE9rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0Rhc2hib2FyZCBEZWxldGVDYWxjIENvbmZpcm1hdGlvbiBwb3AgdXAgT2snXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW9kZUNoYW5nZShhcHA6IGFueSkge1xyXG4gICAgICAgIHZhciBtb2RlOiBzdHJpbmcgPSBhcHAubW9kZTtcclxuICAgICAgICBpZiAobW9kZSA9PT0gJ1BVQkxJQycpIHtcclxuICAgICAgICAgICAgbW9kZSA9ICdQUklWQVRFJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtb2RlID0gJ1BVQkxJQyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Rhc2hib2FyZFNlcnZpY2UuY2hhbmdlQXBwTW9kZShhcHAuX2lkLCBtb2RlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBhcHAubW9kZSA9IG1vZGU7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ01vZGUgY2hhbmdlZCB0byAnICsgbW9kZSArICcgZm9yICcgKyBhcHAubmFtZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNeUNvbXBhbmllcygpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5jb21wYW55U2VydmljZS5nZXRDb21wYW5pZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoc3VjY2VzczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm15Q29tcGFuaWVzTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgc3VjY2Vzcy5mb3JFYWNoKChjb21wYW55OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFueS51c2VyX2NvbXBhbnkuc3RhdHVzICE9PSAnREVMRVRFRCcgfHwgY29tcGFueS51c2VyX2NvbXBhbnkuc3RhdHVzICE9PSAnTEVGVCcgJiYgY29tcGFueS51c2VyX2NvbXBhbnkuc3RhdHVzICE9PSAnREVMRVRFRCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubXlDb21wYW5pZXNMaXN0LnB1c2gobmV3IENvbXBhbnkoY29tcGFueSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjb21wIGxpc3QnLCBzZWxmLm15Q29tcGFuaWVzTGlzdCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0TXlDb21wYW5pZXMgVFMnLCBlcnJvci5lcnJvci5lcnJfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWxlY3RlZENvbXBhbnlVc2VycygpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmNvbXBhbnlTZXJ2aWNlLmdldENvbXBhbnlVc2VycyhzZWxmLmN1cnJlbnRDb21wYW55LmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoc3VjY2VzczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRDb21wYW55VXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MuZm9yRWFjaCgodXNlcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIudXNlcl9jb21wYW55LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50IDwgNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudENvbXBhbnlVc2Vycy5wdXNoKG5ldyBVc2VyKHVzZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubW9yZUNvbXBhbnlVc2Vycy5wdXNoKG5ldyBVc2VyKHVzZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldFNlbGVjdGVkQ29tcGFueVVzZXJzIERhc2hib2FyZCcsIGVycm9yLmVycm9yLmVycl9tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvbXBhbnkoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2NjJywgc2VsZi5jcmVhdGVDb21wYW55Rm9ybS52YWx1ZSk7XHJcbiAgICAgICAgalF1ZXJ5KCcjYnRuQ3JlYXRlQ29tcGFueScpLnRleHQoJ1BsZWFzZSBXYWl0Li4uJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICBzZWxmLmNvbXBhbnlTZXJ2aWNlLmNyZWF0ZUNvbXBhbnkoc2VsZi5jcmVhdGVDb21wYW55Rm9ybS52YWx1ZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjYWRkLW5ldy1jb21wYW55IGlucHV0JykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2J0bkNyZWF0ZUNvbXBhbnknKS50ZXh0KCdBZGQgTmV3IENvbXBhbnknKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2FkZC1uZXctY29tcGFueSBkaXYubGFiZWwtZmxvYXRpbmcnKS5hZGRDbGFzcygnaXMtZW1wdHknKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuTWVzc2FnZSA9ICdDb21wYW55IENyZWF0ZWQgU3VjY2Vzc2Z1bGx5ISc7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNhZGQtbmV3LWNvbXBhbnknKS5tb2RhbCgnaGlkZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qLS0tLS0tIFRyYWNraW5nIGV2ZW50cyBjb2RlIGhlcmUgLS0tLS0tLSovXHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdEYXNoYm9hcmQnLCAnU3VibWl0JywgJ0Rhc2hib2FyZCBDb21wYW55IEFkZGVkJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnRGFzaGJvYXJkIENvbXBhbnkgQWRkZWQnXSk7XHJcbiAgICAgICAgICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmZsb2F0LWNoYW5nZXMtdXBkYXRlZCcpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5mbG9hdC1jaGFuZ2VzLXVwZGF0ZWQnKS5mYWRlSW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgYm90dG9tOiA0MCB9LCAxMDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2FsbCBiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNsb3NlTGF5b3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5nZXRNeUNvbXBhbmllcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5NZXNzYWdlID0gZXJyb3IuZXJyb3IuZXJyX21lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNzdWNjZXNzLWFkZENvbXBhbnknKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjYnRuQ3JlYXRlQ29tcGFueScpLnRleHQoJ0FkZCBOZXcgQ29tcGFueScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjYnRuQ3JlYXRlQ29tcGFueScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaW52aXRlVXNlcigpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5NZXNzYWdlID0gJyc7XHJcbiAgICAgICAgalF1ZXJ5KCcjYnRuSW52aXRlJykudGV4dCgnUGxlYXNlIFdhaXQuLi4nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3NlbGYuaW52aXRlVXNlckZvcm0udmFsdWUnLCBzZWxmLmludml0ZVVzZXJGb3JtLnZhbHVlKTtcclxuICAgICAgICBzZWxmLmNvbXBhbnlTZXJ2aWNlLmFkZFVzZXIoc2VsZi5pbnZpdGVVc2VyRm9ybS52YWx1ZSwgc2VsZi5jdXJyZW50Q29tcGFueS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjYWRkLW5ldy11c2VyIGlucHV0JykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI3JhZGlvQWRtaW4nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjcmFkaW9NYW5hZ2VyJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjYnRuSW52aXRlJykudGV4dCgnQWRkIE5ldyBVc2VyJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNpbnZpdGVVc2VyRm9ybSAjaW5wdXROYW1lJykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2ludml0ZVVzZXJGb3JtICNpbnB1dEVtYWlsJykudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgIC8valF1ZXJ5KCcjYWRkLW5ldy11c2VyIGRpdi5sYWJlbC1mbG9hdGluZycpLmFkZENsYXNzKCdpcy1lbXB0eScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qLS0tLS0tLS0tIFRyYWNraW5nIGV2ZW50cyBjb2RlIGhlcmUgLS0tLS0tLS0qL1xyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnRGFzaGJvYXJkJywgJ1N1Ym1pdCcsICdEYXNoYm9hcmQgVXNlciBBZGRlZCcpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0Rhc2hib2FyZCBVc2VyIEFkZGVkJ10pO1xyXG4gICAgICAgICAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLk1lc3NhZ2UgPSAnVXNlciBJbnZpdGVkIFN1Y2Nlc3NmdWxseSEnO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjYWRkLW5ldy11c2VyJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmZsb2F0LWNoYW5nZXMtdXBkYXRlZCcpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5mbG9hdC1jaGFuZ2VzLXVwZGF0ZWQnKS5mYWRlSW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgYm90dG9tOiA0MCB9LCAxMDAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2FsbCBiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNsb3NlTGF5b3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5nZXRTZWxlY3RlZENvbXBhbnlVc2VycygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yX2NvZGUgPSBlcnJvci5lcnJvci5jb2RlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yX2NvZGUgPT09ICdFX1VOSVFVRV9VU0VSTkFNRV9WQUxJREFUSU9OJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yX2NvZGUgPT09ICdFX1VOSVFVRV9FTUFJTF9WQUxJREFUSU9OJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yX2NvZGUgPT09ICdFX1VOSVFVRV9VTklERU5USUZJRURfVkFMSURBVElPTicgfHxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcl9jb2RlID09PSAnRV9VU0VSX0NPTVBBTllfQUxSRUFEWV9FWElTVFMnXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLk1lc3NhZ2UgPSAnIFRoaXMgdXNlciBpcyBhbHJlYWR5IGEgcGFydCBvZiB0aGlzIGNvbXBhbnkgb24gT3V0Z3Jvdyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJvcl9jb2RlID09PSAnRV9VU0VSX0xJTUlUX0VYQ0VFREVEJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuTWVzc2FnZSA9ICdQbGVhc2UgPGEgaHJlZj1cInNldHRpbmdzL21lbWJlcnNoaXBcIj51cGdyYWRlPC9hPiB5b3VyIHBsYW4geW91IGhhdmUgZXhjZWVkZWQgdGhlIGxpbWl0ISc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3IuZXJyX2Vycm9yc1snZW1haWxzLjAuZW1haWwnXS5tZXNzYWdlID09PSAnUGxlYXNlIHVzZSBhIHZhbGlkIGNvbXBhbnkgZW1haWwgYWRkcmVzcyB0byBzaWduIHVwIGZvciBPdXRncm93IDopJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLk1lc3NhZ2UgPSAnWW91IGNhbiBvbmx5IGludml0ZSB1c2VycyB3aXRoIGEgdmFsaWQgY29tcGFueSBlbWFpbCBhZGRyZXNzJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLk1lc3NhZ2UgPSAoZXJyb3IuZXJyb3IuZXJyX2Vycm9yc1snZW1haWxzLjAuZW1haWwnXSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IuZXJyb3IuZXJyX2Vycm9yc1snZW1haWxzLjAuZW1haWwnXS5tZXNzYWdlIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI3N1Y2Nlc3MtYWRkVXNlcicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNidG5JbnZpdGUnKS50ZXh0KCdBZGQgTmV3IFVzZXInKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnI2J0bkludml0ZScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjZGFzaGJvYXJkQWRkdXNlck1lc3NhZ2UnKS5odG1sKHNlbGYuTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlRXJyb3IoKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuYWxlcnQnKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTGF5b3ZlcigpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuZmxvYXQtY2hhbmdlcy11cGRhdGVkJykuZmFkZUluKClcclxuICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgYm90dG9tOiAtNTAgfSwgODAwLCBmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQW5hbHl0aWNzKGFwcD86YW55LCB0YWJOYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGFsbCBmZWF0dXJlc1wiLCB0aGlzLl9mZWF0dXJlQXV0aFNlcnZpY2UuZmVhdHVyZXMpO1xyXG4gICAgICAgIHRoaXMuaXNBbmFseXRpY3NBdmFpbGFibGUgPSA8Ym9vbGVhbj50aGlzLl9mZWF0dXJlQXV0aFNlcnZpY2UuZmVhdHVyZXMuYW5hbHl0aWNzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGFuYWx5dGljcycsIHRoaXMuaXNBbmFseXRpY3NBdmFpbGFibGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQW5hbHl0aWNzQXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbk9sZENhbGMoYXBwLCB0YWJOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNwcmVtaXVtTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxsR0Eob3B0OiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKG9wdCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQUREQ09NUEFOWVwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnRGFzaGJvYXJkJywgJ0NsaWNrJywgJ0Rhc2hib2FyZCBBZGQgQ29tcGFueScpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0Rhc2hib2FyZCBBZGQgQ29tcGFueSddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQUREVVNFUlwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnRGFzaGJvYXJkJywgJ0NsaWNrJywgJ0Rhc2hib2FyZCBBZGQgVXNlcicpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0Rhc2hib2FyZCBBZGQgVXNlciddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiT1BFTkNBTENcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0Rhc2hib2FyZCcsICdDbGljaycsICdPcGVuQ2FsYycpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0Rhc2hib2FyZCBPcGVuIENhbGMgQ2xpY2snXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFERENBTENcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0Rhc2hib2FyZCcsICdDbGljaycsICdCdWlsZENhbGMnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdEYXNoYm9hcmQgQnVpbGQgQ2FsYyBDbGljayddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiRURJVENBTENcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0Rhc2hib2FyZCcsICdDbGljaycsICdFZGl0Q2FsYycpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0Rhc2hib2FyZCBDYWxjIExpc3QgRWRpdCBDYWxjJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBTkFMWVRJQ1NcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0Rhc2hib2FyZCcsICdDbGljaycsICdWaWV3QW5hbHl0aWNzJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnRGFzaGJvYXJkIENhbGMgTGlzdCBWaWV3IEFuYWx5dGljcyddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiU0VUVElOR1NcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0Rhc2hib2FyZCcsICdDbGljaycsICdWaWV3U2V0dGluZ3MnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdEYXNoYm9hcmQgQ2FsYyBMaXN0IFZpZXcgU2V0dGluZ3MnXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkRVUExJQ0FURVwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnRGFzaGJvYXJkJywgJ0NsaWNrJywgJ0R1cGxpY2F0ZUNhbGMnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdEYXNoYm9hcmQgQ2FsYyBMaXN0IER1cGxpY2F0ZSBDYWxjdWxhdG9yJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0Rhc2hib2FyZCcsICdDbGljaycsICdEZWxldGVDYWxjJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnRGFzaGJvYXJkIENhbGMgTGlzdCBEZWxldGUgQ2FsY3VsYXRvciddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiU0hBUkVcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0Rhc2hib2FyZCcsICdDbGljaycsICdTaGFyZUNhbGMnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdEYXNoYm9hcmQgQ2FsYyBMaXN0IFNoYXJlIENhbGN1bGF0b3InXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
