webpackJsonp([6,10],{

/***/ 1000:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_validators_email_validator__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_feature_access_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_company__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_user__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__analytics_services_calculator_analytics_service__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












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
        //variable used to clear validation msgs on modal hide
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
            companyname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)])],
            domain: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[a-zA-Z0-9]*$')])]
        });
        this.inviteUserForm = this.fb.group({
            userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, , __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)])],
            userEmail: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__shared_validators_email_validator__["a" /* EmailValidator */].format])],
            userRole: ['MANAGER', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required])]
        });
        this.calcNameform = this.fb.group({
            calcName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required])]
        });
        this.subdomainExtension = '.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].APP_EXTENSION;
        this.subs.push(this.getCompanyProjects());
        this.getMyCompanies();
        this._featureAuthService.getAllFeatureAccess();
        this.isLimitCrossed = this._featureAuthService.features.calc_in_limit;
        jQuery.material.init();
        var co = window.location.href.split('//')[1].split('.')[0];
        if (co !== 'app') {
            this.companyService.isSubDomainExist(co)
                .subscribe(function (success) {
                _this.currentCompany = new __WEBPACK_IMPORTED_MODULE_7__shared_models_company__["a" /* Company */](success);
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
    /*=== Methods to collect data for intercom ===*/
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
            /*getPlanSubscription.unsubscribe();*/
        });
    };
    /*=== End ===*/
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
        // trim spaces
        url = url.replace(/^\s+/, '');
        url = url.replace(/\s+$/, '');
        // convert back slash to forward slash
        url = url.replace(/\\/g, '/');
        // remove 'http://', 'https://' or 'ftp://'
        url = url.replace(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i, '');
        // remove 'www.' if exist
        url = url.replace(/^www\./i, '');
        if (url.split('.').length === 3 && url.split('.')[0] === 'app')
            return false;
        // remove path after domain
        url = url.replace(/\/(.*)/, '');
        // remove tld's
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
    // popup acitivity //
    DashboardComponent.prototype.initCalcQuiz = function () {
        jQuery("input[name='calQuiz']").prop("checked", false);
        jQuery('.step1').removeClass('hide');
        jQuery('.step2').addClass('hide');
        jQuery('.calcName-input').val('');
    };
    //select calc type
    DashboardComponent.prototype.selectCalc = function () {
        localStorage.setItem('temp_type', jQuery("input[name='calQuiz']:checked").val());
        this.calcType = jQuery("input[name='calQuiz']:checked").val();
        jQuery('.step1').addClass('hide');
        jQuery('.step2').removeClass('hide');
    };
    //go back to choose diff calc type
    DashboardComponent.prototype.goBack = function () {
        jQuery("input[name='calQuiz']").prop("checked", false);
        this.reset = false;
        localStorage.removeItem('temp_type');
        jQuery('.step2').addClass('hide');
        jQuery('.step1').removeClass('hide');
    };
    //check if form is valid
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
    //perform action on valid form
    DashboardComponent.prototype.addNewCalc = function () {
        // localStorage.setItem('temp_type',jQuery("input[name='calQuiz']:checked").val());
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
    /* duplicate app*/
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
    /* Delete app*/
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
            //console.log(response);
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
                    self.myCompaniesList.push(new __WEBPACK_IMPORTED_MODULE_7__shared_models_company__["a" /* Company */](company));
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
                            self.currentCompanyUsers.push(new __WEBPACK_IMPORTED_MODULE_8__shared_models_user__["a" /* User */](user));
                            count++;
                        }
                        else
                            self.moreCompanyUsers.push(new __WEBPACK_IMPORTED_MODULE_8__shared_models_user__["a" /* User */](user));
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
            /*------ Tracking events code here -------*/
            ga('markettingteam.send', 'event', 'Dashboard', 'Submit', 'Dashboard Company Added');
            _kmq.push(['record', 'Dashboard Company Added']);
            /*----------------------------------------*/
            jQuery('.float-changes-updated').removeClass('hide');
            jQuery('.float-changes-updated').fadeIn()
                .animate({ bottom: 40 }, 1000, function () {
                //call back
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
            //jQuery('#add-new-user div.label-floating').addClass('is-empty');
            /*--------- Tracking events code here --------*/
            ga('markettingteam.send', 'event', 'Dashboard', 'Submit', 'Dashboard User Added');
            _kmq.push(['record', 'Dashboard User Added']);
            /*-------------------------------------------*/
            self.Message = 'User Invited Successfully!';
            jQuery('#add-new-user').modal('hide');
            jQuery('.float-changes-updated').removeClass('hide');
            jQuery('.float-changes-updated').fadeIn()
                .animate({ bottom: 40 }, 1000, function () {
                //call back
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
        this.isAnalyticsAvailable = this._featureAuthService.features.analytics;
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-dashboard',
            template: __webpack_require__(1123),
            styles: [__webpack_require__(1054)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* MembershipService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* SubDomainService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["f" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["f" /* DashboardService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__["a" /* BuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__["a" /* BuilderService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_feature_access_service__["a" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_services_feature_access_service__["a" /* FeatureAuthService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* CookieService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* Script */]) === 'function' && _l) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());


/***/ },

/***/ 1054:
/***/ function(module, exports) {

module.exports = "body, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\n  font-family: 'montserratregular' !important;\n  font-weight: 300  !important;\n}\n\n.dash-circle{float:left; width:80px; height:80px;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px; background:#eceff0; color:#444f54;\n  text-align:center; font-family:montserratregular; font-size:24px; padding-top:23px; margin-right:20px;  text-transform: uppercase;}\n\n.dash-prog-outer{float:left; width:300px;}\n.dash-prog-outer h2{\n  float: left;\n  color: #62696d;\n  font-size: 19px!important;\n  font-family: montserratlight!important;\n  margin: 16px 0 8px;\n  line-height: 24px;\n}\n.dash-prog-outer h5{ float:left;color:#f56151; font-size:13px; font-family:montserratregular;  text-transform:uppercase; margin-top:0; max-width: 90%;}\n\n.circle-sec{ float:left; width:33%;}\n\n.circle-cal-outer{float:left; width:100px;}\n.circle-cal-outer h2{ color: #62696d;\n  float: left;\n  font-family: montserratregular !important;\n  font-size: 24px !important;\n  margin: 15px 0 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 102%;}\n.circle-cal-outer h5{ float:left;color:#8e989f; font-size:10px; font-family:montserratregular;  text-transform:uppercase; margin-top:0;}\n\n.dash-circle-red{float:left; width:77px; height:77px;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px; color:#cbd1d4;\n  text-align:center; font-family:montserratregular; padding-top:18px; margin-right:20px; border:3px solid #fb545b;  }\n.dash-circle-pink{ float:left; width:77px; height:77px;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px; color:#cbd1d4;\n  text-align:center; font-family:montserratregular; padding-top:18px; margin-right:20px; border:3px solid #ff5796;  }\n.dash-circle-d-pink{ float:left; width:77px; height:77px;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px; color:#cbd1d4;\n  text-align:center; font-family:montserratregular;  padding-top:18px; margin-right:20px; border:3px solid #c859b7;  }\n.dash-circle-red i,.dash-circle-pink i,.dash-circle-d-pink i{ font-size:35px;}\n\n\n/* ####  dashboard 3 boxes css start (sahil) ### */\n.dashboard-topsec{\n  padding-top: 25px;\n  background: #f6f8f9;\n  padding-bottom: 25px;\n}\n.user-outr{\n  float: right;\n  width: 70%;\n  padding: 0;\n}\n.user-outr li{\n  float: left;\n}\n.user-outr li a{\n  float: left;\n  width: auto;\n  border: 2px solid #dae2e6;\n  border-radius: 50%;\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\n.user-outr li a:hover{\n  border: 2px solid #f56151;\n}\n.user-outr li a img{\n  float: left;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n}\n.user-outr li a span{\n  float: none;\n  text-align: center;\n  font-size: 16px;\n  padding-top: 1px;\n  color: #f56151;\n  text-transform: uppercase;\n  display: inline-block;\n}\n.user-outr li a.more-users{\n  float: left;\n  width: 35px;\n  border: 2px solid #dae2e6;\n  border-radius: 50%;\n  margin-left: 5px;\n  margin-bottom: 5px;\n  background: #fff;\n  color: #dae2e6;\n  height: 35px;\n  text-align: center;\n  padding-top: 3px;\n  margin-top: 3px;\n}\n.user-outr li a.more-users:hover{\n  color: #fb545b;\n  border: 2px solid #fb545b;\n}\n.user-outr li a.single-user{\n  width: 34px;\n  height: 34px;\n  float: left;\n  text-align: center;\n  font-size: 16px;\n  padding-top: 6px;\n  color: #f56151;\n  text-transform: uppercase;\n}\n/* Start: popover effect */\n.popover-wrapper .more-popover-block {\n  position: relative;\n  top: 10px;\n  left: -76px;\n  min-width: 180px;\n  padding: 8px;\n  font-size: 12px;\n  border-radius: 0px;\n  background: #62696d;\n  /* color: #fff; */\n  border-radius: 4px !important;\n  border: none;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\n  display: none;\n  z-index: 9;\n}\n\n.popover-wrapper:hover .more-popover-block {\n  display: block;\n  float: left;\n  padding: 0;\n}\n\n.popover-wrapper .more-popover-block:before {\n  position: absolute;\n  top: -8px;\n  right:83px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 8px solid #62696d;\n  border-left: 6px solid transparent;\n  border-bottom-color: #62696d;\n  content: '';\n}\n.popover-wrapper .single-user.more-popover-block {\n  position: relative;\n  top: 25px;\n  left: -56px;\n  min-width: 150px;\n  padding: 8px;\n  font-size: 12px;\n  border-radius: 0px;\n  background: #62696d;\n  /* color: #fff; */\n  border-radius: 4px !important;\n  border: none;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\n  display: none;\n  z-index: 9;\n}\n.popover-wrapper:hover .single-user.more-popover-block {\n  display: block;\n  float: left;\n  padding: 0;\n}\n\n.popover-wrapper .single-user.more-popover-block:before {\n  position: absolute;\n  top: -8px;\n  right: 72px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 8px solid #62696d;\n  border-left: 6px solid transparent;\n  border-bottom-color: #62696d;\n  content: '';\n}\n.popover-wrapper .single-user.more-popover-block p{\n  float: left;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  font-size: 12px;\n  margin: 0;\n  padding: 6px;\n  padding-bottom: 0;\n}\n.popover-wrapper .single-user.more-popover-block label{\n  float: left;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 11px;\n  text-align: center;\n  padding: 6px;\n  padding-top: 0;\n}\n\n\n\n/* End: popover effect */\n\n\n\n.more-users .more-popover-block ul{\n  float: left;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.more-users .more-popover-block ul li{\n  float: left;\n  width: 100%;\n}\n.more-users .more-popover-block ul li a{\n  float: left;\n  border: none;\n  width: 100%;\n  padding: 10px;\n  margin: 0;\n}\n.more-users .more-popover-block ul li a.hvr-sweep-to-right:before{\n  background: #71787b ;\n}\n.more-users .more-popover-block ul li a span{\n  float: left;\n  border: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  text-align: center;\n  background: #f6f8f9;\n  font-size: 14px;\n  padding-top: 5px;\n}\n.more-users .more-popover-block ul li a .more-users-list{\n  float: left;\n  width: 66%;\n  margin-left: 10px;\n}\n.more-users .more-popover-block ul li a .more-users-list p{\n  float: left;\n  width: 100%;\n  text-align: left;\n  color: #fff;\n  font-size: 12px;\n  margin: 0;\n}\n.more-users .more-popover-block ul li a .more-users-list label{\n  float: left;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 11px;\n  text-align: left;\n}\n.user-outr li a.add-user{\n  float: left;\n  width: 35px;\n  border: 2px solid #fb545b;\n  border-radius: 50%;\n  margin-left: 5px;\n  margin-bottom: 5px;\n  background: #fb545b;\n  color: #fff;\n  height: 35px;\n  text-align: center;\n  padding-top: 3px;\n  margin-top: 3px;\n}\n.dash-boxes-outr{\n  float: left;\n  width: 100%;\n  border-top: 1px solid #dae2e6;\n  padding: 35px;\n  background: #f6f8f9;\n  min-height: 77vh;\n}\n.dash-box{\n  border: 1px solid #dae2e6;\n  min-height: 250px;\n  float: left;\n  width: 100%;\n  cursor: pointer;\n  margin-bottom: 30px;\n  position: relative;\n}\n.dash-box:hover{\n  box-shadow: 0 2px 5px 1px rgba(0,0,0,0.2);\n}\n.dash-box figure{\n  height: 187px;\n  overflow: hidden;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n}\n.dash-box-top{\n  background-image: url(app/site/components/+dashboard/images/dash-top.jpg);\n  background-size: cover;\n  background-position: center center;\n  float: left;\n  width: 100%;\n  min-height: 187px;\n\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n}\n.dash-box:hover .dash-box-top{\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2);\n}\n\n\n.dash-box-bottom{\n  padding: 28px;\n  width: 100%;\n  float: left;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  background: #fff;\n}\n.dash-box-bottom ul{\n  padding: 0px;\n  float: left;\n}\n.dash-box-bottom ul li{\n  float: left;\n  width: 100%;\n  margin-top: 22px;\n}\n.dash-box-bottom ul li i{\n  float: left;\n  color: #ccc;\n  font-size: 24px;\n  padding-right: 20px;\n}\n.switch-outr{\n  float: right;\n}\n.dash-box-bottom ul li label.text{\n  font-size:13px;\n  color:#999999;\n  float: left;\n  text-transform: uppercase;\n  margin-top: 3px;\n  margin-bottom: 0px;\n  font-weight: normal;\n}\n.dash-box-bottom ul li span.value{\n  font-size:20px;\n  color:#fb545b;\n  float: right;\n  text-align: right;\n}\n.dash-box2{\n  float: left;\n  width: 100%;\n  min-height: 406px;\n  cursor: pointer;\n  margin-bottom: 30px;\n}\n.dash-box2:hover{\n  box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);\n}\n.dash-box2 figure{\n  height: 187px;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: 93%;\n  z-index: -1;\n}\n.dash-box-figure2{\n  min-height:336px;\n}\n.dash-top2{\n  background-image: url(app/site/components/+dashboard/images/dash-top2.jpg);\n  background-size: cover;\n  float: left;\n  width: 100%;\n  min-height: 336px;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n}\n.dash-box2:hover .dash-top2{\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2);\n}\n.dash-top2-text{\n  float: left;\n  width: 100%;\n}\n.dash-top2-textinner{\n  float: left;\n  padding: 28px;\n  position: absolute;\n  min-height: 187px;\n  top: 0px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.3) none repeat scroll 0 0;\n}\n.dash-top2-textinner label{\n  float: left;\n  width: auto;\n  color: #ffffff;\n  font-size: 12px;\n  line-height: normal;\n  font-family: 'montserratlight';\n}\n.dash-top2-textinner i{\n  position: relative;\n  float: left;\n  color: #fff;\n  font-size: 18px;\n  margin-left: 5px;\n}\n.dash-top2-textinner h3{\n  float: left;\n  width: 94%;\n  color: #ffffff;\n  font-size: 16px;\n  text-transform: uppercase;\n  line-height: 22px;\n  margin-top: 0px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-bottom: 20px;\n}\n\n\n\n.dash-top3{\n  background: rgb(248,248,248); /* Old browsers */\n  background: -moz-linear-gradient(top,  rgba(248,248,248,1) 0%, rgba(240,240,240,1) 100%); /* FF3.6-15 */\n  background: -webkit-linear-gradient(top,  rgba(248,248,248,1) 0%,rgba(240,240,240,1) 100%); /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom,  rgba(248,248,248,1) 0%,rgba(240,240,240,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8f8f8', endColorstr='#f0f0f0',GradientType=0 ); /* IE6-9 */\n\n  width: 100%;\n  min-height: 411px;\n  display: table;\n}\n.dash-top3:hover .dash-top3circletable{\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2);\n}\n.dash-top3circletable{\n  width: 100%;\n  float: none;\n  text-align: center;\n  display: table-cell;\n  height: 409px;\n  vertical-align: middle;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n}\n.dash-top3-circle{\n  background:#fcfcfc;\n  height:151px;\n  width:151px;\n  border-radius:50%;\n  text-align: center;\n  vertical-align: middle;\n  color: #999999;\n  font-size: 13px;\n  line-height: normal;\n  display: inline-block;\n  padding-top: 46px;\n}\n.dash-top3-circle:hover,.dash-top3-circle:focus{\n  color: #fb545b;\n}\n.dash-top3-circle i{\n  display:block;\n  color: #fb545b;\n  font-size: 24px;\n  margin-bottom: 7px;\n}\n\n.dash-top3-textinner{\n  float: left;\n  width: 100%;\n  padding: 28px;\n}\n.dash-top3-textinner label{\n  float: left;\n  width: auto;\n  color: #62696d;\n  font-size: 12px;\n  line-height: normal;\n  font-family: 'montserratlight';\n}\n.dash-top3-textinner i{\n  position: relative;\n  float: left;\n  color: #fff;\n  font-size: 18px;\n  margin-left: 5px;\n}\n.dash-top3-textinner h3{\n  float: left;\n  width: 100%;\n  color: #62696d;\n  font-size: 16px;\n  text-transform: uppercase;\n  line-height: 22px;\n  margin-top: 0px;\n}\n\n.dash-prog-outer .company-dropdown-wrapper{\n  margin: 0px;\n  margin-left: 5px;\n  float: left;\n  min-height: 35px;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\n  font-size: 18px;\n  color: #fff;\n  padding: 0;\n  position: relative;\n  top: 5px;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\n  color: #fff;\n  padding: 5px 15px 10px;\n  text-transform: capitalize;\n  font-family: montserratregular;\n  float: left;\n  width: 100%;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle{\n  line-height: normal !important;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i{\n  color: #f56151;\n  font-size: 20px;\n  position: relative;\n  top: -3px;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i:hover{\n  color: #f87b80;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle span.company-dropdown-title-active{\n  width: 90%;\n  float: left;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before{\n  right: 91px;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.hvr-sweep-to-right::before{\n  background: #71787b none repeat scroll 0 0;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n  top: 27px;\n  left: -80px;\n  min-width: 190px;\n  font-size: 12px;\n  border-radius: 0px;\n  /* background: #f87b80; */\n  /* color: #fff; */\n  background: #62696d;\n  border-radius: 4px !important;\n  border: none;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\n  display: none;\n  z-index: 9;\n}\n.dash-prog-outer .company-dropdown-wrapper:hover .dropdown-menu {\n  display: block;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a {\n  color: #fff;\n  padding: 10px 15px;\n  text-transform: capitalize;\n  font-family: montserratregular;\n  float: left;\n  width: 100%;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-block {\n  float: left;\n  width: 10%;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\n  background: #fff;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  color: #62696d;\n  text-align: center;\n  padding-top: 3px;\n  font-size: 11px;\n  top: 13px;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\n  background: #fff;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  color: #62696d;\n  text-align: center;\n  padding-top: 3px;\n  font-size: 11px;\n  top: 13px;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\n  float: left;\n  width: 95%;\n}\n.company-dropdown-wrapper .dropdown-menu > li > a .company-site {\n  float: left;\n  width: 95%;\n  font-size: 10px;\n}\n.dash-top2-textinner .company-dropdown-wrapper{\n  float: right;\n  margin: 0;\n  width: 6%;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-toggle{\n  line-height: normal;\n  text-align: left;\n  width: 100%;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-toggle span{\n  color: #fff;\n  line-height: normal;\n  width: 90% !important;\n  float: left;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu{\n  left: -67px;\n  min-width: 155px;\n  padding: 10px 0;\n  top: 28px;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu::before{\n  right: 65px;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu li a{\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu li a.hvr-sweep-to-right::before{\n  background: #71787b none repeat scroll 0 0;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block{\n  float: left;\n  margin-right: 3px;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block i{\n  font-size: 16px;\n  color: #fff !important;\n  margin: 0px;\n  margin-right: 10px;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block-content{\n  float: left;\n  margin: 0px;\n  width: 78%;\n  color: #fff;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block-content .company-title{\n  float: left;\n  width: 100%;\n}\n.dash-top2-textinner .das-box-menu\n{\n  float: right;\n  position: relative;\n}\n.dash-top2-textinner .company-dropdown-title-active{\n  color: #fff;\n  line-height: normal;\n  font-size: 12px;\n  font-family: montserratlight;\n  width: 90% !important;\n  float: left;\n}\n.dash-pullout-new{\n  float: right;\n  width: 6%;\n  position: relative;\n  padding-bottom: 10px;\n}\n.dash-pullout-new:hover .new-dropdown-menu{\n  display: block;\n}\n.new-dropdown-menu{\n  position: absolute;\n  left: -64px;\n  top: 32px;\n  float: left;\n  background: #62696d;\n  color: #fff;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\n  display: none;\n  padding: 10px 0;\n  z-index: 9;\n  border-radius: 4px !important;\n  min-width: 155px;\n}\n.new-dropdown-menu:before\n{\n  position: absolute;\n  top: -12px;\n  left: 70px;\n  display: inline-block;\n  border-right: 8px solid transparent;\n  border-bottom: 12px solid #62696d;\n  border-left: 8px solid transparent;\n  border-bottom-color: #62696d;\n  content: '';\n}\n.new-dropdown-menu a\n{\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n}\n.new-dropdown-menu a.hvr-sweep-to-right:before\n{\n  background:#71787b none repeat scroll 0 0;\n}\n.new-dropdown-menu a .company-block\n{\n  float: left;\n  margin-right: 3px;\n}\n.new-dropdown-menu a .company-block i\n{\n  font-size: 16px;\n  color: #fff !important;\n  margin: 0px;\n  margin-right: 10px;\n}\n.new-dropdown-menu a .company-block-content\n{\n  float: left;\n  margin: 0px;\n  width: 78%;\n  color: #fff;\n}\n.new-dropdown-menu a .company-block-content .company-title\n{\n  color: #fff;\n  line-height: normal;\n  width: 90% !important;\n  float: left;\n  font-size: 12px;\n  font-family: montserratlight;\n}\n\n\n\n/* switch new css (sahil) */\n.onoffswitch {\n  position: relative; width: 80px;\n  -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;\n}\n.onoffswitch-checkbox {\n  display: none;\n}\n.onoffswitch-label {\n  display: block; overflow: hidden; cursor: pointer;\n  border-radius: 20px;\n}\n.onoffswitch-inner {\n  display: block; width: 200%; margin-left: -100%;\n  transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before, .onoffswitch-inner:after {\n  display: block; float: left; width: 50%; height: 20px; padding: 0; line-height: 20px;\n  font-size: 13px; color: white;\n  box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n  content: \"Public\";\n  padding-left: 10px;\n  background-color: #f87b80; color: #FFFFFF;\n  font-weight: normal;\n}\n.onoffswitch-inner:after {\n  content: \"Private\";\n  padding-right: 10px;\n  background-color: #EEEEEE; color: #999999;\n  text-align: right;\n}\n.onoffswitch-switch {\n  display: block;\n  width: 14px;\n  height: 14px;\n  margin: 3px;\n  background: #FFFFFF;\n  position: absolute; top: 0; bottom: 0;\n  right: 56px; border-radius: 20px;\n  transition: all 0.3s ease-in 0s;\n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\n  margin-left: 0;\n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\n  right: 0px;\n}\n\n/* switch new css end (sahil) */\n\n/* Circluar progress css start (sahil) */\n.rect-auto,\n.c100.p51 .slice,\n.c100.p52 .slice,\n.c100.p53 .slice,\n.c100.p54 .slice,\n.c100.p55 .slice,\n.c100.p56 .slice,\n.c100.p57 .slice,\n.c100.p58 .slice,\n.c100.p59 .slice,\n.c100.p60 .slice,\n.c100.p61 .slice,\n.c100.p62 .slice,\n.c100.p63 .slice,\n.c100.p64 .slice,\n.c100.p65 .slice,\n.c100.p66 .slice,\n.c100.p67 .slice,\n.c100.p68 .slice,\n.c100.p69 .slice,\n.c100.p70 .slice,\n.c100.p71 .slice,\n.c100.p72 .slice,\n.c100.p73 .slice,\n.c100.p74 .slice,\n.c100.p75 .slice,\n.c100.p76 .slice,\n.c100.p77 .slice,\n.c100.p78 .slice,\n.c100.p79 .slice,\n.c100.p80 .slice,\n.c100.p81 .slice,\n.c100.p82 .slice,\n.c100.p83 .slice,\n.c100.p84 .slice,\n.c100.p85 .slice,\n.c100.p86 .slice,\n.c100.p87 .slice,\n.c100.p88 .slice,\n.c100.p89 .slice,\n.c100.p90 .slice,\n.c100.p91 .slice,\n.c100.p92 .slice,\n.c100.p93 .slice,\n.c100.p94 .slice,\n.c100.p95 .slice,\n.c100.p96 .slice,\n.c100.p97 .slice,\n.c100.p98 .slice,\n.c100.p99 .slice,\n.c100.p100 .slice {\n  clip: rect(auto, auto, auto, auto);\n}\n.pie,\n.c100 .bar,\n.c100.p51 .fill,\n.c100.p52 .fill,\n.c100.p53 .fill,\n.c100.p54 .fill,\n.c100.p55 .fill,\n.c100.p56 .fill,\n.c100.p57 .fill,\n.c100.p58 .fill,\n.c100.p59 .fill,\n.c100.p60 .fill,\n.c100.p61 .fill,\n.c100.p62 .fill,\n.c100.p63 .fill,\n.c100.p64 .fill,\n.c100.p65 .fill,\n.c100.p66 .fill,\n.c100.p67 .fill,\n.c100.p68 .fill,\n.c100.p69 .fill,\n.c100.p70 .fill,\n.c100.p71 .fill,\n.c100.p72 .fill,\n.c100.p73 .fill,\n.c100.p74 .fill,\n.c100.p75 .fill,\n.c100.p76 .fill,\n.c100.p77 .fill,\n.c100.p78 .fill,\n.c100.p79 .fill,\n.c100.p80 .fill,\n.c100.p81 .fill,\n.c100.p82 .fill,\n.c100.p83 .fill,\n.c100.p84 .fill,\n.c100.p85 .fill,\n.c100.p86 .fill,\n.c100.p87 .fill,\n.c100.p88 .fill,\n.c100.p89 .fill,\n.c100.p90 .fill,\n.c100.p91 .fill,\n.c100.p92 .fill,\n.c100.p93 .fill,\n.c100.p94 .fill,\n.c100.p95 .fill,\n.c100.p96 .fill,\n.c100.p97 .fill,\n.c100.p98 .fill,\n.c100.p99 .fill,\n.c100.p100 .fill {\n  position: absolute;\n  border: 0.08em solid #307bbb;\n  width: 0.84em;\n  height: 0.84em;\n  clip: rect(0em, 0.5em, 1em, 0em);\n  border-radius: 50%;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -ms-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n}\n.pie-fill,\n.c100.p51 .bar:after,\n.c100.p51 .fill,\n.c100.p52 .bar:after,\n.c100.p52 .fill,\n.c100.p53 .bar:after,\n.c100.p53 .fill,\n.c100.p54 .bar:after,\n.c100.p54 .fill,\n.c100.p55 .bar:after,\n.c100.p55 .fill,\n.c100.p56 .bar:after,\n.c100.p56 .fill,\n.c100.p57 .bar:after,\n.c100.p57 .fill,\n.c100.p58 .bar:after,\n.c100.p58 .fill,\n.c100.p59 .bar:after,\n.c100.p59 .fill,\n.c100.p60 .bar:after,\n.c100.p60 .fill,\n.c100.p61 .bar:after,\n.c100.p61 .fill,\n.c100.p62 .bar:after,\n.c100.p62 .fill,\n.c100.p63 .bar:after,\n.c100.p63 .fill,\n.c100.p64 .bar:after,\n.c100.p64 .fill,\n.c100.p65 .bar:after,\n.c100.p65 .fill,\n.c100.p66 .bar:after,\n.c100.p66 .fill,\n.c100.p67 .bar:after,\n.c100.p67 .fill,\n.c100.p68 .bar:after,\n.c100.p68 .fill,\n.c100.p69 .bar:after,\n.c100.p69 .fill,\n.c100.p70 .bar:after,\n.c100.p70 .fill,\n.c100.p71 .bar:after,\n.c100.p71 .fill,\n.c100.p72 .bar:after,\n.c100.p72 .fill,\n.c100.p73 .bar:after,\n.c100.p73 .fill,\n.c100.p74 .bar:after,\n.c100.p74 .fill,\n.c100.p75 .bar:after,\n.c100.p75 .fill,\n.c100.p76 .bar:after,\n.c100.p76 .fill,\n.c100.p77 .bar:after,\n.c100.p77 .fill,\n.c100.p78 .bar:after,\n.c100.p78 .fill,\n.c100.p79 .bar:after,\n.c100.p79 .fill,\n.c100.p80 .bar:after,\n.c100.p80 .fill,\n.c100.p81 .bar:after,\n.c100.p81 .fill,\n.c100.p82 .bar:after,\n.c100.p82 .fill,\n.c100.p83 .bar:after,\n.c100.p83 .fill,\n.c100.p84 .bar:after,\n.c100.p84 .fill,\n.c100.p85 .bar:after,\n.c100.p85 .fill,\n.c100.p86 .bar:after,\n.c100.p86 .fill,\n.c100.p87 .bar:after,\n.c100.p87 .fill,\n.c100.p88 .bar:after,\n.c100.p88 .fill,\n.c100.p89 .bar:after,\n.c100.p89 .fill,\n.c100.p90 .bar:after,\n.c100.p90 .fill,\n.c100.p91 .bar:after,\n.c100.p91 .fill,\n.c100.p92 .bar:after,\n.c100.p92 .fill,\n.c100.p93 .bar:after,\n.c100.p93 .fill,\n.c100.p94 .bar:after,\n.c100.p94 .fill,\n.c100.p95 .bar:after,\n.c100.p95 .fill,\n.c100.p96 .bar:after,\n.c100.p96 .fill,\n.c100.p97 .bar:after,\n.c100.p97 .fill,\n.c100.p98 .bar:after,\n.c100.p98 .fill,\n.c100.p99 .bar:after,\n.c100.p99 .fill,\n.c100.p100 .bar:after,\n.c100.p100 .fill {\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.c100 {\n  position: relative;\n  font-size: 120px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  float: left;\n  margin: 0 0.1em 0.1em 0;\n  background-color: #cccccc;\n}\n.c100 *,\n.c100 *:before,\n.c100 *:after {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n.c100.center {\n  float: none;\n  margin: 0 auto;\n}\n.c100.big {\n  font-size: 240px;\n}\n.c100.small {\n  font-size: 80px;\n}\n.c100 > span {\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 5em;\n  line-height: 5em;\n  font-size: 0.2em;\n  color: #cccccc;\n  display: block;\n  text-align: center;\n  white-space: nowrap;\n  -webkit-transition-property: all;\n  -moz-transition-property: all;\n  -o-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 0.2s;\n  -moz-transition-duration: 0.2s;\n  -o-transition-duration: 0.2s;\n  transition-duration: 0.2s;\n  -webkit-transition-timing-function: ease-out;\n  -moz-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.c100:after {\n  position: absolute;\n  top: 0.08em;\n  left: 0.08em;\n  display: block;\n  content: \" \";\n  border-radius: 50%;\n  background-color: #f5f5f5;\n  width: 0.84em;\n  height: 0.84em;\n  -webkit-transition-property: all;\n  -moz-transition-property: all;\n  -o-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 0.2s;\n  -moz-transition-duration: 0.2s;\n  -o-transition-duration: 0.2s;\n  transition-duration: 0.2s;\n  -webkit-transition-timing-function: ease-in;\n  -moz-transition-timing-function: ease-in;\n  -o-transition-timing-function: ease-in;\n  transition-timing-function: ease-in;\n}\n.c100 .slice {\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  clip: rect(0em, 1em, 1em, 0.5em);\n}\n.c100.p1 .bar {\n  -webkit-transform: rotate(3.6deg);\n  -moz-transform: rotate(3.6deg);\n  -ms-transform: rotate(3.6deg);\n  -o-transform: rotate(3.6deg);\n  transform: rotate(3.6deg);\n}\n.c100.p2 .bar {\n  -webkit-transform: rotate(7.2deg);\n  -moz-transform: rotate(7.2deg);\n  -ms-transform: rotate(7.2deg);\n  -o-transform: rotate(7.2deg);\n  transform: rotate(7.2deg);\n}\n.c100.p3 .bar {\n  -webkit-transform: rotate(10.8deg);\n  -moz-transform: rotate(10.8deg);\n  -ms-transform: rotate(10.8deg);\n  -o-transform: rotate(10.8deg);\n  transform: rotate(10.8deg);\n}\n.c100.p4 .bar {\n  -webkit-transform: rotate(14.4deg);\n  -moz-transform: rotate(14.4deg);\n  -ms-transform: rotate(14.4deg);\n  -o-transform: rotate(14.4deg);\n  transform: rotate(14.4deg);\n}\n.c100.p5 .bar {\n  -webkit-transform: rotate(18deg);\n  -moz-transform: rotate(18deg);\n  -ms-transform: rotate(18deg);\n  -o-transform: rotate(18deg);\n  transform: rotate(18deg);\n}\n.c100.p6 .bar {\n  -webkit-transform: rotate(21.6deg);\n  -moz-transform: rotate(21.6deg);\n  -ms-transform: rotate(21.6deg);\n  -o-transform: rotate(21.6deg);\n  transform: rotate(21.6deg);\n}\n.c100.p7 .bar {\n  -webkit-transform: rotate(25.2deg);\n  -moz-transform: rotate(25.2deg);\n  -ms-transform: rotate(25.2deg);\n  -o-transform: rotate(25.2deg);\n  transform: rotate(25.2deg);\n}\n.c100.p8 .bar {\n  -webkit-transform: rotate(28.8deg);\n  -moz-transform: rotate(28.8deg);\n  -ms-transform: rotate(28.8deg);\n  -o-transform: rotate(28.8deg);\n  transform: rotate(28.8deg);\n}\n.c100.p9 .bar {\n  -webkit-transform: rotate(32.4deg);\n  -moz-transform: rotate(32.4deg);\n  -ms-transform: rotate(32.4deg);\n  -o-transform: rotate(32.4deg);\n  transform: rotate(32.4deg);\n}\n.c100.p10 .bar {\n  -webkit-transform: rotate(36deg);\n  -moz-transform: rotate(36deg);\n  -ms-transform: rotate(36deg);\n  -o-transform: rotate(36deg);\n  transform: rotate(36deg);\n}\n.c100.p11 .bar {\n  -webkit-transform: rotate(39.6deg);\n  -moz-transform: rotate(39.6deg);\n  -ms-transform: rotate(39.6deg);\n  -o-transform: rotate(39.6deg);\n  transform: rotate(39.6deg);\n}\n.c100.p12 .bar {\n  -webkit-transform: rotate(43.2deg);\n  -moz-transform: rotate(43.2deg);\n  -ms-transform: rotate(43.2deg);\n  -o-transform: rotate(43.2deg);\n  transform: rotate(43.2deg);\n}\n.c100.p13 .bar {\n  -webkit-transform: rotate(46.800000000000004deg);\n  -moz-transform: rotate(46.800000000000004deg);\n  -ms-transform: rotate(46.800000000000004deg);\n  -o-transform: rotate(46.800000000000004deg);\n  transform: rotate(46.800000000000004deg);\n}\n.c100.p14 .bar {\n  -webkit-transform: rotate(50.4deg);\n  -moz-transform: rotate(50.4deg);\n  -ms-transform: rotate(50.4deg);\n  -o-transform: rotate(50.4deg);\n  transform: rotate(50.4deg);\n}\n.c100.p15 .bar {\n  -webkit-transform: rotate(54deg);\n  -moz-transform: rotate(54deg);\n  -ms-transform: rotate(54deg);\n  -o-transform: rotate(54deg);\n  transform: rotate(54deg);\n}\n.c100.p16 .bar {\n  -webkit-transform: rotate(57.6deg);\n  -moz-transform: rotate(57.6deg);\n  -ms-transform: rotate(57.6deg);\n  -o-transform: rotate(57.6deg);\n  transform: rotate(57.6deg);\n}\n.c100.p17 .bar {\n  -webkit-transform: rotate(61.2deg);\n  -moz-transform: rotate(61.2deg);\n  -ms-transform: rotate(61.2deg);\n  -o-transform: rotate(61.2deg);\n  transform: rotate(61.2deg);\n}\n.c100.p18 .bar {\n  -webkit-transform: rotate(64.8deg);\n  -moz-transform: rotate(64.8deg);\n  -ms-transform: rotate(64.8deg);\n  -o-transform: rotate(64.8deg);\n  transform: rotate(64.8deg);\n}\n.c100.p19 .bar {\n  -webkit-transform: rotate(68.4deg);\n  -moz-transform: rotate(68.4deg);\n  -ms-transform: rotate(68.4deg);\n  -o-transform: rotate(68.4deg);\n  transform: rotate(68.4deg);\n}\n.c100.p20 .bar {\n  -webkit-transform: rotate(72deg);\n  -moz-transform: rotate(72deg);\n  -ms-transform: rotate(72deg);\n  -o-transform: rotate(72deg);\n  transform: rotate(72deg);\n}\n.c100.p21 .bar {\n  -webkit-transform: rotate(75.60000000000001deg);\n  -moz-transform: rotate(75.60000000000001deg);\n  -ms-transform: rotate(75.60000000000001deg);\n  -o-transform: rotate(75.60000000000001deg);\n  transform: rotate(75.60000000000001deg);\n}\n.c100.p22 .bar {\n  -webkit-transform: rotate(79.2deg);\n  -moz-transform: rotate(79.2deg);\n  -ms-transform: rotate(79.2deg);\n  -o-transform: rotate(79.2deg);\n  transform: rotate(79.2deg);\n}\n.c100.p23 .bar {\n  -webkit-transform: rotate(82.8deg);\n  -moz-transform: rotate(82.8deg);\n  -ms-transform: rotate(82.8deg);\n  -o-transform: rotate(82.8deg);\n  transform: rotate(82.8deg);\n}\n.c100.p24 .bar {\n  -webkit-transform: rotate(86.4deg);\n  -moz-transform: rotate(86.4deg);\n  -ms-transform: rotate(86.4deg);\n  -o-transform: rotate(86.4deg);\n  transform: rotate(86.4deg);\n}\n.c100.p25 .bar {\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.c100.p26 .bar {\n  -webkit-transform: rotate(93.60000000000001deg);\n  -moz-transform: rotate(93.60000000000001deg);\n  -ms-transform: rotate(93.60000000000001deg);\n  -o-transform: rotate(93.60000000000001deg);\n  transform: rotate(93.60000000000001deg);\n}\n.c100.p27 .bar {\n  -webkit-transform: rotate(97.2deg);\n  -moz-transform: rotate(97.2deg);\n  -ms-transform: rotate(97.2deg);\n  -o-transform: rotate(97.2deg);\n  transform: rotate(97.2deg);\n}\n.c100.p28 .bar {\n  -webkit-transform: rotate(100.8deg);\n  -moz-transform: rotate(100.8deg);\n  -ms-transform: rotate(100.8deg);\n  -o-transform: rotate(100.8deg);\n  transform: rotate(100.8deg);\n}\n.c100.p29 .bar {\n  -webkit-transform: rotate(104.4deg);\n  -moz-transform: rotate(104.4deg);\n  -ms-transform: rotate(104.4deg);\n  -o-transform: rotate(104.4deg);\n  transform: rotate(104.4deg);\n}\n.c100.p30 .bar {\n  -webkit-transform: rotate(108deg);\n  -moz-transform: rotate(108deg);\n  -ms-transform: rotate(108deg);\n  -o-transform: rotate(108deg);\n  transform: rotate(108deg);\n}\n.c100.p31 .bar {\n  -webkit-transform: rotate(111.60000000000001deg);\n  -moz-transform: rotate(111.60000000000001deg);\n  -ms-transform: rotate(111.60000000000001deg);\n  -o-transform: rotate(111.60000000000001deg);\n  transform: rotate(111.60000000000001deg);\n}\n.c100.p32 .bar {\n  -webkit-transform: rotate(115.2deg);\n  -moz-transform: rotate(115.2deg);\n  -ms-transform: rotate(115.2deg);\n  -o-transform: rotate(115.2deg);\n  transform: rotate(115.2deg);\n}\n.c100.p33 .bar {\n  -webkit-transform: rotate(118.8deg);\n  -moz-transform: rotate(118.8deg);\n  -ms-transform: rotate(118.8deg);\n  -o-transform: rotate(118.8deg);\n  transform: rotate(118.8deg);\n}\n.c100.p34 .bar {\n  -webkit-transform: rotate(122.4deg);\n  -moz-transform: rotate(122.4deg);\n  -ms-transform: rotate(122.4deg);\n  -o-transform: rotate(122.4deg);\n  transform: rotate(122.4deg);\n}\n.c100.p35 .bar {\n  -webkit-transform: rotate(126deg);\n  -moz-transform: rotate(126deg);\n  -ms-transform: rotate(126deg);\n  -o-transform: rotate(126deg);\n  transform: rotate(126deg);\n}\n.c100.p36 .bar {\n  -webkit-transform: rotate(129.6deg);\n  -moz-transform: rotate(129.6deg);\n  -ms-transform: rotate(129.6deg);\n  -o-transform: rotate(129.6deg);\n  transform: rotate(129.6deg);\n}\n.c100.p37 .bar {\n  -webkit-transform: rotate(133.20000000000002deg);\n  -moz-transform: rotate(133.20000000000002deg);\n  -ms-transform: rotate(133.20000000000002deg);\n  -o-transform: rotate(133.20000000000002deg);\n  transform: rotate(133.20000000000002deg);\n}\n.c100.p38 .bar {\n  -webkit-transform: rotate(136.8deg);\n  -moz-transform: rotate(136.8deg);\n  -ms-transform: rotate(136.8deg);\n  -o-transform: rotate(136.8deg);\n  transform: rotate(136.8deg);\n}\n.c100.p39 .bar {\n  -webkit-transform: rotate(140.4deg);\n  -moz-transform: rotate(140.4deg);\n  -ms-transform: rotate(140.4deg);\n  -o-transform: rotate(140.4deg);\n  transform: rotate(140.4deg);\n}\n.c100.p40 .bar {\n  -webkit-transform: rotate(144deg);\n  -moz-transform: rotate(144deg);\n  -ms-transform: rotate(144deg);\n  -o-transform: rotate(144deg);\n  transform: rotate(144deg);\n}\n.c100.p41 .bar {\n  -webkit-transform: rotate(147.6deg);\n  -moz-transform: rotate(147.6deg);\n  -ms-transform: rotate(147.6deg);\n  -o-transform: rotate(147.6deg);\n  transform: rotate(147.6deg);\n}\n.c100.p42 .bar {\n  -webkit-transform: rotate(151.20000000000002deg);\n  -moz-transform: rotate(151.20000000000002deg);\n  -ms-transform: rotate(151.20000000000002deg);\n  -o-transform: rotate(151.20000000000002deg);\n  transform: rotate(151.20000000000002deg);\n}\n.c100.p43 .bar {\n  -webkit-transform: rotate(154.8deg);\n  -moz-transform: rotate(154.8deg);\n  -ms-transform: rotate(154.8deg);\n  -o-transform: rotate(154.8deg);\n  transform: rotate(154.8deg);\n}\n.c100.p44 .bar {\n  -webkit-transform: rotate(158.4deg);\n  -moz-transform: rotate(158.4deg);\n  -ms-transform: rotate(158.4deg);\n  -o-transform: rotate(158.4deg);\n  transform: rotate(158.4deg);\n}\n.c100.p45 .bar {\n  -webkit-transform: rotate(162deg);\n  -moz-transform: rotate(162deg);\n  -ms-transform: rotate(162deg);\n  -o-transform: rotate(162deg);\n  transform: rotate(162deg);\n}\n.c100.p46 .bar {\n  -webkit-transform: rotate(165.6deg);\n  -moz-transform: rotate(165.6deg);\n  -ms-transform: rotate(165.6deg);\n  -o-transform: rotate(165.6deg);\n  transform: rotate(165.6deg);\n}\n.c100.p47 .bar {\n  -webkit-transform: rotate(169.20000000000002deg);\n  -moz-transform: rotate(169.20000000000002deg);\n  -ms-transform: rotate(169.20000000000002deg);\n  -o-transform: rotate(169.20000000000002deg);\n  transform: rotate(169.20000000000002deg);\n}\n.c100.p48 .bar {\n  -webkit-transform: rotate(172.8deg);\n  -moz-transform: rotate(172.8deg);\n  -ms-transform: rotate(172.8deg);\n  -o-transform: rotate(172.8deg);\n  transform: rotate(172.8deg);\n}\n.c100.p49 .bar {\n  -webkit-transform: rotate(176.4deg);\n  -moz-transform: rotate(176.4deg);\n  -ms-transform: rotate(176.4deg);\n  -o-transform: rotate(176.4deg);\n  transform: rotate(176.4deg);\n}\n.c100.p50 .bar {\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.c100.p51 .bar {\n  -webkit-transform: rotate(183.6deg);\n  -moz-transform: rotate(183.6deg);\n  -ms-transform: rotate(183.6deg);\n  -o-transform: rotate(183.6deg);\n  transform: rotate(183.6deg);\n}\n.c100.p52 .bar {\n  -webkit-transform: rotate(187.20000000000002deg);\n  -moz-transform: rotate(187.20000000000002deg);\n  -ms-transform: rotate(187.20000000000002deg);\n  -o-transform: rotate(187.20000000000002deg);\n  transform: rotate(187.20000000000002deg);\n}\n.c100.p53 .bar {\n  -webkit-transform: rotate(190.8deg);\n  -moz-transform: rotate(190.8deg);\n  -ms-transform: rotate(190.8deg);\n  -o-transform: rotate(190.8deg);\n  transform: rotate(190.8deg);\n}\n.c100.p54 .bar {\n  -webkit-transform: rotate(194.4deg);\n  -moz-transform: rotate(194.4deg);\n  -ms-transform: rotate(194.4deg);\n  -o-transform: rotate(194.4deg);\n  transform: rotate(194.4deg);\n}\n.c100.p55 .bar {\n  -webkit-transform: rotate(198deg);\n  -moz-transform: rotate(198deg);\n  -ms-transform: rotate(198deg);\n  -o-transform: rotate(198deg);\n  transform: rotate(198deg);\n}\n.c100.p56 .bar {\n  -webkit-transform: rotate(201.6deg);\n  -moz-transform: rotate(201.6deg);\n  -ms-transform: rotate(201.6deg);\n  -o-transform: rotate(201.6deg);\n  transform: rotate(201.6deg);\n}\n.c100.p57 .bar {\n  -webkit-transform: rotate(205.20000000000002deg);\n  -moz-transform: rotate(205.20000000000002deg);\n  -ms-transform: rotate(205.20000000000002deg);\n  -o-transform: rotate(205.20000000000002deg);\n  transform: rotate(205.20000000000002deg);\n}\n.c100.p58 .bar {\n  -webkit-transform: rotate(208.8deg);\n  -moz-transform: rotate(208.8deg);\n  -ms-transform: rotate(208.8deg);\n  -o-transform: rotate(208.8deg);\n  transform: rotate(208.8deg);\n}\n.c100.p59 .bar {\n  -webkit-transform: rotate(212.4deg);\n  -moz-transform: rotate(212.4deg);\n  -ms-transform: rotate(212.4deg);\n  -o-transform: rotate(212.4deg);\n  transform: rotate(212.4deg);\n}\n.c100.p60 .bar {\n  -webkit-transform: rotate(216deg);\n  -moz-transform: rotate(216deg);\n  -ms-transform: rotate(216deg);\n  -o-transform: rotate(216deg);\n  transform: rotate(216deg);\n}\n.c100.p61 .bar {\n  -webkit-transform: rotate(219.6deg);\n  -moz-transform: rotate(219.6deg);\n  -ms-transform: rotate(219.6deg);\n  -o-transform: rotate(219.6deg);\n  transform: rotate(219.6deg);\n}\n.c100.p62 .bar {\n  -webkit-transform: rotate(223.20000000000002deg);\n  -moz-transform: rotate(223.20000000000002deg);\n  -ms-transform: rotate(223.20000000000002deg);\n  -o-transform: rotate(223.20000000000002deg);\n  transform: rotate(223.20000000000002deg);\n}\n.c100.p63 .bar {\n  -webkit-transform: rotate(226.8deg);\n  -moz-transform: rotate(226.8deg);\n  -ms-transform: rotate(226.8deg);\n  -o-transform: rotate(226.8deg);\n  transform: rotate(226.8deg);\n}\n.c100.p64 .bar {\n  -webkit-transform: rotate(230.4deg);\n  -moz-transform: rotate(230.4deg);\n  -ms-transform: rotate(230.4deg);\n  -o-transform: rotate(230.4deg);\n  transform: rotate(230.4deg);\n}\n.c100.p65 .bar {\n  -webkit-transform: rotate(234deg);\n  -moz-transform: rotate(234deg);\n  -ms-transform: rotate(234deg);\n  -o-transform: rotate(234deg);\n  transform: rotate(234deg);\n}\n.c100.p66 .bar {\n  -webkit-transform: rotate(237.6deg);\n  -moz-transform: rotate(237.6deg);\n  -ms-transform: rotate(237.6deg);\n  -o-transform: rotate(237.6deg);\n  transform: rotate(237.6deg);\n}\n.c100.p67 .bar {\n  -webkit-transform: rotate(241.20000000000002deg);\n  -moz-transform: rotate(241.20000000000002deg);\n  -ms-transform: rotate(241.20000000000002deg);\n  -o-transform: rotate(241.20000000000002deg);\n  transform: rotate(241.20000000000002deg);\n}\n.c100.p68 .bar {\n  -webkit-transform: rotate(244.8deg);\n  -moz-transform: rotate(244.8deg);\n  -ms-transform: rotate(244.8deg);\n  -o-transform: rotate(244.8deg);\n  transform: rotate(244.8deg);\n}\n.c100.p69 .bar {\n  -webkit-transform: rotate(248.4deg);\n  -moz-transform: rotate(248.4deg);\n  -ms-transform: rotate(248.4deg);\n  -o-transform: rotate(248.4deg);\n  transform: rotate(248.4deg);\n}\n.c100.p70 .bar {\n  -webkit-transform: rotate(252deg);\n  -moz-transform: rotate(252deg);\n  -ms-transform: rotate(252deg);\n  -o-transform: rotate(252deg);\n  transform: rotate(252deg);\n}\n.c100.p71 .bar {\n  -webkit-transform: rotate(255.6deg);\n  -moz-transform: rotate(255.6deg);\n  -ms-transform: rotate(255.6deg);\n  -o-transform: rotate(255.6deg);\n  transform: rotate(255.6deg);\n}\n.c100.p72 .bar {\n  -webkit-transform: rotate(259.2deg);\n  -moz-transform: rotate(259.2deg);\n  -ms-transform: rotate(259.2deg);\n  -o-transform: rotate(259.2deg);\n  transform: rotate(259.2deg);\n}\n.c100.p73 .bar {\n  -webkit-transform: rotate(262.8deg);\n  -moz-transform: rotate(262.8deg);\n  -ms-transform: rotate(262.8deg);\n  -o-transform: rotate(262.8deg);\n  transform: rotate(262.8deg);\n}\n.c100.p74 .bar {\n  -webkit-transform: rotate(266.40000000000003deg);\n  -moz-transform: rotate(266.40000000000003deg);\n  -ms-transform: rotate(266.40000000000003deg);\n  -o-transform: rotate(266.40000000000003deg);\n  transform: rotate(266.40000000000003deg);\n}\n.c100.p75 .bar {\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  -o-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.c100.p76 .bar {\n  -webkit-transform: rotate(273.6deg);\n  -moz-transform: rotate(273.6deg);\n  -ms-transform: rotate(273.6deg);\n  -o-transform: rotate(273.6deg);\n  transform: rotate(273.6deg);\n}\n.c100.p77 .bar {\n  -webkit-transform: rotate(277.2deg);\n  -moz-transform: rotate(277.2deg);\n  -ms-transform: rotate(277.2deg);\n  -o-transform: rotate(277.2deg);\n  transform: rotate(277.2deg);\n}\n.c100.p78 .bar {\n  -webkit-transform: rotate(280.8deg);\n  -moz-transform: rotate(280.8deg);\n  -ms-transform: rotate(280.8deg);\n  -o-transform: rotate(280.8deg);\n  transform: rotate(280.8deg);\n}\n.c100.p79 .bar {\n  -webkit-transform: rotate(284.40000000000003deg);\n  -moz-transform: rotate(284.40000000000003deg);\n  -ms-transform: rotate(284.40000000000003deg);\n  -o-transform: rotate(284.40000000000003deg);\n  transform: rotate(284.40000000000003deg);\n}\n.c100.p80 .bar {\n  -webkit-transform: rotate(288deg);\n  -moz-transform: rotate(288deg);\n  -ms-transform: rotate(288deg);\n  -o-transform: rotate(288deg);\n  transform: rotate(288deg);\n}\n.c100.p81 .bar {\n  -webkit-transform: rotate(291.6deg);\n  -moz-transform: rotate(291.6deg);\n  -ms-transform: rotate(291.6deg);\n  -o-transform: rotate(291.6deg);\n  transform: rotate(291.6deg);\n}\n.c100.p82 .bar {\n  -webkit-transform: rotate(295.2deg);\n  -moz-transform: rotate(295.2deg);\n  -ms-transform: rotate(295.2deg);\n  -o-transform: rotate(295.2deg);\n  transform: rotate(295.2deg);\n}\n.c100.p83 .bar {\n  -webkit-transform: rotate(298.8deg);\n  -moz-transform: rotate(298.8deg);\n  -ms-transform: rotate(298.8deg);\n  -o-transform: rotate(298.8deg);\n  transform: rotate(298.8deg);\n}\n.c100.p84 .bar {\n  -webkit-transform: rotate(302.40000000000003deg);\n  -moz-transform: rotate(302.40000000000003deg);\n  -ms-transform: rotate(302.40000000000003deg);\n  -o-transform: rotate(302.40000000000003deg);\n  transform: rotate(302.40000000000003deg);\n}\n.c100.p85 .bar {\n  -webkit-transform: rotate(306deg);\n  -moz-transform: rotate(306deg);\n  -ms-transform: rotate(306deg);\n  -o-transform: rotate(306deg);\n  transform: rotate(306deg);\n}\n.c100.p86 .bar {\n  -webkit-transform: rotate(309.6deg);\n  -moz-transform: rotate(309.6deg);\n  -ms-transform: rotate(309.6deg);\n  -o-transform: rotate(309.6deg);\n  transform: rotate(309.6deg);\n}\n.c100.p87 .bar {\n  -webkit-transform: rotate(313.2deg);\n  -moz-transform: rotate(313.2deg);\n  -ms-transform: rotate(313.2deg);\n  -o-transform: rotate(313.2deg);\n  transform: rotate(313.2deg);\n}\n.c100.p88 .bar {\n  -webkit-transform: rotate(316.8deg);\n  -moz-transform: rotate(316.8deg);\n  -ms-transform: rotate(316.8deg);\n  -o-transform: rotate(316.8deg);\n  transform: rotate(316.8deg);\n}\n.c100.p89 .bar {\n  -webkit-transform: rotate(320.40000000000003deg);\n  -moz-transform: rotate(320.40000000000003deg);\n  -ms-transform: rotate(320.40000000000003deg);\n  -o-transform: rotate(320.40000000000003deg);\n  transform: rotate(320.40000000000003deg);\n}\n.c100.p90 .bar {\n  -webkit-transform: rotate(324deg);\n  -moz-transform: rotate(324deg);\n  -ms-transform: rotate(324deg);\n  -o-transform: rotate(324deg);\n  transform: rotate(324deg);\n}\n.c100.p91 .bar {\n  -webkit-transform: rotate(327.6deg);\n  -moz-transform: rotate(327.6deg);\n  -ms-transform: rotate(327.6deg);\n  -o-transform: rotate(327.6deg);\n  transform: rotate(327.6deg);\n}\n.c100.p92 .bar {\n  -webkit-transform: rotate(331.2deg);\n  -moz-transform: rotate(331.2deg);\n  -ms-transform: rotate(331.2deg);\n  -o-transform: rotate(331.2deg);\n  transform: rotate(331.2deg);\n}\n.c100.p93 .bar {\n  -webkit-transform: rotate(334.8deg);\n  -moz-transform: rotate(334.8deg);\n  -ms-transform: rotate(334.8deg);\n  -o-transform: rotate(334.8deg);\n  transform: rotate(334.8deg);\n}\n.c100.p94 .bar {\n  -webkit-transform: rotate(338.40000000000003deg);\n  -moz-transform: rotate(338.40000000000003deg);\n  -ms-transform: rotate(338.40000000000003deg);\n  -o-transform: rotate(338.40000000000003deg);\n  transform: rotate(338.40000000000003deg);\n}\n.c100.p95 .bar {\n  -webkit-transform: rotate(342deg);\n  -moz-transform: rotate(342deg);\n  -ms-transform: rotate(342deg);\n  -o-transform: rotate(342deg);\n  transform: rotate(342deg);\n}\n.c100.p96 .bar {\n  -webkit-transform: rotate(345.6deg);\n  -moz-transform: rotate(345.6deg);\n  -ms-transform: rotate(345.6deg);\n  -o-transform: rotate(345.6deg);\n  transform: rotate(345.6deg);\n}\n.c100.p97 .bar {\n  -webkit-transform: rotate(349.2deg);\n  -moz-transform: rotate(349.2deg);\n  -ms-transform: rotate(349.2deg);\n  -o-transform: rotate(349.2deg);\n  transform: rotate(349.2deg);\n}\n.c100.p98 .bar {\n  -webkit-transform: rotate(352.8deg);\n  -moz-transform: rotate(352.8deg);\n  -ms-transform: rotate(352.8deg);\n  -o-transform: rotate(352.8deg);\n  transform: rotate(352.8deg);\n}\n.c100.p99 .bar {\n  -webkit-transform: rotate(356.40000000000003deg);\n  -moz-transform: rotate(356.40000000000003deg);\n  -ms-transform: rotate(356.40000000000003deg);\n  -o-transform: rotate(356.40000000000003deg);\n  transform: rotate(356.40000000000003deg);\n}\n.c100.p100 .bar {\n  -webkit-transform: rotate(360deg);\n  -moz-transform: rotate(360deg);\n  -ms-transform: rotate(360deg);\n  -o-transform: rotate(360deg);\n  transform: rotate(360deg);\n}\n.c100:hover {\n  cursor: default;\n}\n.c100:hover > span {\n  width: 3.33em;\n  line-height: 3.33em;\n  font-size: 0.3em;\n  color: #307bbb;\n}\n.c100:hover:after {\n  top: 0.04em;\n  left: 0.04em;\n  width: 0.92em;\n  height: 0.92em;\n}\n.c100.dark {\n  background-color: #777777;\n}\n.c100.dark .bar,\n.c100.dark .fill {\n  border-color: #c6ff00 !important;\n}\n.c100.dark > span {\n  color: #777777;\n}\n.c100.dark:after {\n  background-color: #666666;\n}\n.c100.dark:hover > span {\n  color: #c6ff00;\n}\n.c100.green .bar,\n.c100.green .fill {\n  border-color: #4db53c !important;\n}\n.c100.green:hover > span {\n  color: #4db53c;\n}\n.c100.green.dark .bar,\n.c100.green.dark .fill {\n  border-color: #5fd400 !important;\n}\n.c100.green.dark:hover > span {\n  color: #5fd400;\n}\n.c100.orange .bar,\n.c100.orange .fill {\n  border-color: #dd9d22 !important;\n}\n.c100.orange:hover > span {\n  color: #dd9d22;\n}\n.c100.orange.dark .bar,\n.c100.orange.dark .fill {\n  border-color: #e08833 !important;\n}\n.c100.orange.dark:hover > span {\n  color: #e08833;\n}\n.circluar-progress-outr{\n  width: 100%;\n  float: left;\n  text-align: center;\n  margin-top: 10%;\n}\n.circluar-progress{\n  font-size: 200px;\n  background: #fcfcfc;\n  display: inline-block;\n  margin: 0;\n  float: none;\n}\n.circluar-progress.c100:after{\n  font-size: 200px;\n  background: #fcfcfc;\n}\n.c100.circluar-progress .bar, .c100.circluar-progress .fill{\n  border-color: #fb545b;\n}\n.circluar-progress.c100 > span{\n  color: #fb545b;\n  font-size: 36px;\n  width: 100%;\n  height: 100%;\n  line-height: 4.8em;\n}\n.circluar-progress.c100 .steps{\n  color: #999999;\n  font-size: 13px;\n  width: 100%;\n  position: absolute;\n  top: 54%;\n  z-index: 9;\n  line-height: 13px;\n}\n.circluar-progress.c100:hover:after{\n  top: 0.08em;\n  left: 0.08em;\n  width: 0.84em;\n  height: 0.84em;\n}\n/* Circluar progress css end (sahil) */\n\n/* Preloader */\n\n.preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff;\n  /* change if the mask should be a color other than white */\n  z-index: 9999;\n  /* makes sure it stays on top */\n}\n\n.status {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  /* centers the loading animation horizontally on the screen */\n  top: 50%;\n  /* centers the loading animation vertically on the screen */\n  background-image: url(\"./app/site/+builder/assets/images/logoAnim.gif\");\n  /* path to your loading animation */\n  background-repeat: no-repeat;\n  background-position: center;\n  margin: -100px 0 0 -100px;\n  /* is width and height divided by two */\n}\n\n.dash-box-new.dash-box-bottom{\n  background: #fff;\n  width: 100%;\n  border: 1px solid #dae2e6;\n  border-top: 0;\n  padding: 28px;\n  float: left;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.dash-box-new.dash-box-bottom ul{\n  width: 100%;\n}\n.dummy-switch{\n  width: 70px;\n  height: 20px;\n  background: #eee;\n  color: #999;\n  line-height: 20px;\n  font-size: 13px;\n  display: block;\n  float: right;\n  border-radius: 40px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n.dummy-switch.red{\n  width: 70px;\n  height: 20px;\n  background: #fb545b;\n  color: #fff;\n  line-height: 20px;\n  font-size: 13px;\n  display: block;\n  float: right;\n  border-radius: 40px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.dummy-switch p{\n  float: left;\n  width: 100%;\n}\n.dummy-switch span{\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #fff;\n  display: inline-block;\n  position: relative;\n  top: 3px;\n  float:left;\n  right: 3px;\n}\n.dash-box-send{\n  height: 70px;\n  width: 70px;\n  background: rgba(255,255,255,0.2);\n  border-radius: 50%;\n  float: none;\n  position: relative;\n  text-align: center;\n  padding-top: 20px;\n  display: inline-block;\n}\n.dash-box-send i{\n  float: none;\n  font-size: 32px;\n}\n.dash-top2-text .dash-box-send{\n  top:60px;\n}\n/* duplicate toast */\n.dashboard-toast{\n  position: fixed;\n  display: none;\n  bottom: -100px;\n  background: #fff;\n  color: #62696d;\n  left: 60px;\n  z-index: 9999;\n  width: 344px;\n  border: 1px solid #ccc;\n  box-shadow: 0 0px 7px 2px rgba(0,0,0,0.2);\n}\n.dashboard-toast i {\n  float: none;\n  margin-top: 0px;\n  margin-right: 10px;\n  width: 40px;\n  background: #fb545b ;\n  color: #fff;\n  /* padding: 13px 13px; */\n  padding-left: 8px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.dashboard-toast span {\n  float: none;\n  width: 74%;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.dashboard-toast .btn{\n  float: right;\n  background: none;\n  padding: 0px;\n  font-size: 12px;\n  color: #bec5c9;\n}\n.d-toast-btn i{\n  background: none;\n  font-size: 16px;\n  padding: 0px;\n  width: auto;\n  padding-top: 8px;\n  color: #bec5c9;\n}\n\n\n\n/*Responsiveness start*/\n\n.mobile-menu {\n  display: none;\n}\n\n.white-logo {\n  display: none !important;\n}\n\n.company-list,\n.name-list {\n  width: 100%;\n  float: left;\n}\n\n/* Start: Modal calcquiz */\n#calquiz-modal .modal-body{\n  display: inline-block;\n  padding-bottom: 25px !important;\n  padding: 0px;\n}\n#calquiz-modal .modal-header{\n  padding: 10px 17px;\n  border-bottom: none;\n  background: #fb6066;\n  border-radius: 7px 7px 0px 0px;\n  /*margin-left: -15px;\n  margin-right: -15px;\n  margin-top: -15px;*/\n  text-align: left;\n  float: left;\n  width: 100%;\n}\n#calquiz-modal .modal-header h5.modal-title{\n  color: #fff;\n  font-size: 18px;\n  text-transform: none;\n  font-weight: normal !important;\n}\n#calquiz-modal .modal-content {\n  border-radius: 8px;\n}\n#calquiz-modal .calquiz-left{\n  width:50%;\n  padding: 35px 25px 0px 55px;\n  display: inline-block; float: left;\n  margin: 0px;\n}\n#calquiz-modal .calquiz-left a{\n  float: left;\n}\n#calquiz-modal .calquiz-left i{\n  font-size: 38px !important;\n  color: #989898;\n  /* float: left; */\n  width: auto;\n  background: #f3f3f3;\n  border-radius: 50%;\n  border: 3px solid rgba(251,251,251,0.67);\n  height: 80px;\n  width: 80px !important;\n  margin: 0 auto;\n  text-align: center;\n  padding-top: 18px !important;\n}\n#calquiz-modal .calquiz-left h3{\n  font-size: 18px;\n  color: #fb545b;\n  float: left;\n  width: 90%;\n  margin-top: 0px;\n}\n#calquiz-modal .calquiz-left label{\n  font-size: 12px;\n  color: #62696d;\n  width: 45%;\n}\n#calquiz-modal .calquiz-left p{\n  font-size: 10px;\n  color: #62696d;\n  font-family: montserratlight;\n  width: 100%;\n  padding-top: 15px;\n}\n\n#calquiz-modal .calc-quiz-margin {\n  width: 100%;\n  float: left;\n  /*margin-left: 10px;*/\n  text-align: left;\n  margin-top: 20px;\n}\n\n#calquiz-modal .calquiz-left .form-group:first-child {\n  margin-top: 23px;\n}\n\n.calc-quiz-form {\n  padding: 0px 25px;\n  margin-top: 23px !important;\n}\n\n#calquiz-modal.modal .form-group.label-floating label.control-label,\n#calquiz-modal.modal .form-group.label-placeholder label.control-label {\n  top: -7px;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n#calquiz-modal.modal .form-group.label-floating:not(.is-empty) label.control-label {\n  font-size: 10px !important;\n  left: 25px;\n}\n\n#calquiz-modal.modal .form-group.label-floating.is-focused label.control-label {\n  top: -20px !important;\n  font-size: 10px;\n  font-family: montserratregular;\n  color: #fb545b !important;\n  left: 25px;\n}\n#calquiz-modal.modal .form-group.label-floating:not(.is-empty) label.control-label {\n  top: -20px;\n  font-family: montserratregular;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #8e989f  !important;\n}\n#calquiz-modal .check-icon div {\n  line-height: 16;\n  display: inherit;\n  font-size: 12px;\n  color: #62696d;\n}\n#calquiz-modal .calquiz-right{\n  width:50%;\n  padding: 35px 25px 0px 40px;\n  display: inline-block; float: left;\n}\n#calquiz-modal .calquiz-right a{\n  float: left;\n}\n#calquiz-modal .calquiz-right i{\n  font-size: 42px;\n  color: #989898;\n  /* float: left; */\n  width: auto;\n  background: #f3f3f3;\n  border-radius: 50%;\n  border: 3px solid rgba(251,251,251,0.8);\n  height: 80px;\n  width: 80px !important;\n  margin: 0 auto;\n  text-align: center;\n  padding-top: 16px;\n  padding-left: 1px;\n}\n#calquiz-modal .calquiz-right h3{\n  font-size: 18px;\n  color: #fb545b;\n  float: left;\n  width: 90%;\n  margin-top: 0px;\n}\n#calquiz-modal .calquiz-right label{\n  font-size: 12px;\n  color: #62696d;\n  width: 45%;\n}\n#calquiz-modal .calquiz-right p{\n  font-size: 10px;\n  color: #62696d;\n  font-family: montserratlight;\n  width: 45%;\n  padding-top: 15px;\n}\n\n#calquiz-modal .btn-red {\n  color: #fff !important;\n  background-color: #fb545b !important;\n  border-color: #fb545b !important;\n  border-radius: 0 !important;\n  font-size: 14px !important;\n  padding: 7px 30px !important;\n  margin-top: 40px !important;\n  transition: all 0.3s ease 0s;\n  margin-right: 0 !important;\n  font-family: montserratregular;\n  font-weight: normal;\n  text-transform: none;\n  border-width: 2px;\n}\n\n#calquiz-modal .btn.btn-red:hover {\n  background: #fdb6b9 !important;\n  color: #fb545b !important;\n  border-color: #fdb6b9 !important;\n}\n\n.calquiz-outr span.title{\n  font-size: 10px !important;\n  color: #fb545b;\n  font-family: montserratregular;\n  padding: 27px 25px 0px;\n  float: left;\n  width: 100%;\n  text-transform: uppercase;\n}\n\n#calquiz-modal.modal .modal-header i.material-icons {\n  font-size: 16px;\n  color: #fff;\n  text-shadow: none;\n  top: -1px;\n  position: relative;\n}\n\n#calquiz-modal .calquiz-outr .check-icon:hover label span.outer-border{\n  /*display: none;*/\n  border: 3px solid transparent;\n  /* opacity: 0; */\n}\n\n#calquiz-modal .calquiz-outr .check-icon label .outer-border:after{\n  content: '';\n  top: -7px;\n  left: -7px;\n  padding: 7px;\n  box-shadow: 0 0 0 3px rgba(251, 84, 91, 0.67);\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\n  -webkit-transform: scale(.8);\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\n  -moz-transform: scale(.8);\n  -ms-transform: scale(.8);\n  transition: transform 0.2s, opacity 0.2s;\n  transform: scale(.8);\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  content: '';\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n#calquiz-modal .calquiz-outr .check-icon:hover label .outer-border:after{\n  -webkit-transform: scale(1);\n  -moz-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n}\n\n#calquiz-modal .calquiz-outr .check-icon input[type=\"radio\"]:checked + label .outer-border:after{\n  content: '';\n  top: -2px;\n  left: -2px;\n  padding: 7px;\n  box-shadow: none;\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\n  -webkit-transform: scale(.8);\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\n  -moz-transform: scale(.8);\n  -ms-transform: scale(.8);\n  transition: opacity 0.2s, -webkit-transform 0.2s;\n  transition: transform 0.2s, opacity 0.2s;\n  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;\n  transform: scale(.8);\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 80%;\n  height: 80%;\n  border-radius: 50%;\n  content: '';\n  box-sizing: content-box;\n  border: 3px solid #000;\n}\n\n#calquiz-modal .calquiz-outr .check-icon:hover label i{\n  /*display: none;*/\n  color: #fff;\n  background: #fb545b;\n  border: 3px solid rgba(251, 84, 91, 0.67);\n}\n\n/* Checkbox with tick icons */\n.check-icon { width: 100%; padding: 8px 15px; font-size: 16px;font-weight: normal;\n  line-height: 16px;border-bottom: 0;}\n.check-icon.last {border: 2px solid #eee;}\n.check-icon:hover, .check-icon.last:hover{cursor:pointer;}\n.check-icon input[type=\"radio\"] {left: -9999px; position: absolute;}\n.check-icon label {content: \"\"; width: 24px; height: 24px;margin-bottom: 0px;}\n.modal .check-icon label i.material-icons{     font-size: 18px;\n  color: #fb545b;\n\n}\n\n.check-icon input[type=\"radio\"]:checked + label span.outer-border {\n  border: 3px solid rgba(251, 84, 91, 0.67) !important;\n  border-radius: 50%;\n  height: 80px;\n  width: 80px !important;\n  display: inline-table;\n}\n\n.check-icon label span.outer-border{\n  border: 3px solid rgba(102, 102, 102, 0.67);\n  border-radius: 50%;\n  height: 80px;\n  width: 80px !important;\n  display: inline-table;\n  -webkit-transition: background 0.2s, color 0.2s;\n  -moz-transition: background 0.2s, color 0.2s;\n  transition: background 0.2s, color 0.2s;\n  cursor: pointer;\n  /*margin: 15px 30px;*/\n  border-radius: 50%;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n  color: #fff;\n}\n\n.check-icon input[type=\"radio\"]:checked + label i.material-icons {\n  /*display: none;*/\n  color: #fff !important;\n  background: #fb545b !important;\n  border: 0px solid #fff !important;\n  -webkit-transform: scale(.8);\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\n  -moz-transform: scale(.8);\n  -ms-transform: scale(.8);\n  transition: transform 0.2s, opacity 0.2s;\n  transform: scale(.8);\n  /* opacity: 0; */\n}\n\n.check-icon input[type=\"radio\"]:checked + label::after{\n  background: #fb545b;\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 18px;\n  left: 0px;\n  font-size: 13px;\n  color: #fff;\n  border-radius: 50%;\n  padding-left: 3px;\n}\n\n#calquiz-modal .calquiz-outr .check-icon:hover input[type=\"radio\"]:checked + label {\n  border:none;\n}\n\n.check-icon input[type=\"radio\"]:checked + label::after{\n\n}\n\n/*.check-icon input[type=\"radio\"]:checked + label {\n    background-color: #00aea5;\n    border: none;top: 1px;\n}*/\n\n/*.check-icon input[type=\"radio\"]:checked + label::after {\n   font-family: \"Material Icons\"; content: \"\\e5ca\";\n}*/\n\n.check-icon div {\n  /*line-height: 38px; */\n  display: inherit;\n}\n\n#calquiz-modal .calquiz-outr .check-icon label{\n  /*width: 18px;\n  float: left;*/\n  text-align: left;\n  border: none;\n}\n\n#calquiz-modal .calquiz-outr .step2 .check-icon label{\n  text-align: center;\n}\n\n#calquiz-modal .calquiz-outr .check-icon:hover label{\n  /*content: \"\";\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  top: 0px;\n  border: 2px solid #fb545b;\n  border-radius: 50%;\n  margin: 0 auto;*/\n  cursor: pointer;\n}\n\n#calquiz-modal .calquiz-outr h3{\n  font-size: 18px;\n  color: #fb545b;\n  float: left;\n  width: 100%;\n  margin-top: 0px;\n}\n\n#calquiz-modal .calquiz-outr label{\n  font-size: 12px;\n  color: #62696d;\n  width: 100%;\n  padding: 0px;\n  float: left;\n  text-align: center;\n  height: 100%;\n}\n\n#calquiz-modal .calquiz-outr p{\n  font-size: 10px;\n  color: #62696d;\n  font-family: montserratlight;\n  width: 100%;\n  line-height:16px;\n}\n\n#calquiz-modal .calquiz-outr span{\n  /*float: left;*/\n  width: 100%;\n  /*font-size: 12px;\n  color: #62696d;*/\n  line-height: 16px;\n}\n\n.calquiz-outr{\n  float: left;\n  width: 100%;\n}\n\n.footer-btn{\n  float: left;\n  width: 100%;\n}\n\n#calquiz-modal .alert.alert-danger{\n  top: 0px;\n  left: 75px;\n  float: left;\n  text-align: left;\n}\n\n#calquiz-modal .alert.alert-danger p{\n  position: absolute;\n  width: 100%;\n  padding-top: 0px;\n  color: #fb545b !important;\n}\n\n#calquiz-modal .alert.alert-danger p span.mat-icon {\n  float: left;\n  width: auto;\n}\n\n#calquiz-modal .alert.alert-danger p span.mat-icon i.material-icons {\n  font-size: 12px !important;\n  margin-right: 5px;\n  margin-top: 2px;\n  color: #fb545b;\n  width: auto !important;\n  padding-top: 0px !important;\n  height: auto !important;\n  background: none;\n  border: none;\n}\n\n.step1 {\n  float: left;\n  width: 100%;\n  text-align: center;\n}\n\n.step2 {\n  float: left;\n  width: 100%;\n  text-align: center;\n}\n\n.full-width {\n  width: 100% !important;\n  float: left;\n}\n\n.text-center{\n  text-align: center !important;\n}\n\n#calquiz-modal .calquiz-outr .step2 h3{\n  width: 100%;\n}\n\n#calquiz-modal .calquiz-outr .step2 input{\n  min-height: 38px;\n  border: 1px solid #cccccc;\n  width: 70%;\n  font-size: 14px;\n  color: #62696d;\n  padding-left: 10px;\n  margin-top: 10px;\n}\n\n.back-icon {\n  height: 0px;\n  position: relative;\n  top: 0px;\n  left: -60px;\n  float: left;\n  width: 100%;\n}\n\n#calquiz-modal .back-icon i.material-icons {\n  font-size: 18px !important;\n  color: #989898;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding-top: 0px !important;\n  opacity: 0.7;\n  width: 17px !important;\n  height: 17px;\n}\n\n#calquiz-modal .back-icon i.material-icons:hover {\n  opacity: 1;\n  /*-webkit-animation: spinAround 2s linear infinite;\n  -moz-animation: spinAround 2s linear infinite;\n  animation: spinAround 2s linear infinite;*/\n}\n\n-webkit-keyframes spinAround {\nfrom {\n  -webkit-transform: rotate(0deg)\n}\nto {\n  -webkit-transform: rotate(360deg);\n}\n}\n@-moz-keyframes spinAround {\n  from {\n    -moz-transform: rotate(0deg)\n  }\n  to {\n    -moz-transform: rotate(360deg);\n  }\n}\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg)\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.hide{\n  display: none;\n}\n\n#calquiz-modal .next-step {\n  padding: 7px 50px !important;\n}\n\n/* End: Modal calcquiz */\n\n\n@media (min-width: 320px) and (max-width: 768px) {\n  #new-header .navbar-fixed-top .nav-padding {\n    padding-right: 0px;\n  }\n  .full-menu,\n  .dash-circle,\n  .dash-prog-outer h2 {\n    display: none;\n  }\n  .main-logo {\n    display: none !important;\n  }\n  .mobile-menu {\n    display: block;\n    float: right;\n    margin-top: 9px;\n    position: relative;\n  }\n  #new-header .navbar-default {\n    background: #fb5f66 !important;\n    border: none;\n  }\n  .mobile-menu button {\n    border: none;\n    box-shadow: none;\n    color: #fff;\n    background: none;\n  }\n  .mobile-menu .btn-default:hover {\n    color: #fff;\n    background: none;\n  }\n  .dash-boxes-outr {\n    padding: 10px;\n    padding-top: 30px;\n  }\n  .mobile-menu .dropdown-menu {\n    background: #62696d;\n    top: -11px;\n    border-radius: 0px;\n    left: -176px;\n    width: 235px;\n    font-family: montserratlight;\n    padding-bottom: 55px;\n  }\n  .mobile-menu .name-dropdown-border {\n    width: 100%;\n    margin: 5px 0px;\n  }\n  .mobile-menu .user-outr {\n    float: left;\n    width: 100%;\n    padding: 0;\n    margin: 0px;\n    display: block;\n    text-transform: capitalize;\n  }\n  .mobile-menu .user-outr li {\n    float: right;\n    font-size: 24px;\n    font-family: montserratlight;\n    color: #fff;\n    margin-right: 24px;\n    /* margin: 10px 19px; */\n    margin-top: 8px;\n    margin-bottom: 6px;\n  }\n  .mobile-menu .user-outr li a {\n    margin-right: 30px;\n  }\n  .mobile-menu .company-list li,\n  .mobile-menu .name-list li {\n    margin: 10px 0px;\n    text-align: right;\n    font-size: 16px;\n    width: 100%;\n    float: left;\n    padding-right: 20px;\n  }\n  .mobile-menu .company-list li a,\n  .mobile-menu .name-list li a {\n    float: right;\n    color: #fff;\n  }\n  .mobile-menu .company-list li a i {\n    margin-right: 20px;\n    float: left;\n  }\n  .mobile-menu .name-list li a i {\n    margin-left: 20px;\n    float: right;\n  }\n  .mobile-menu .company-list-title {\n    float: left;\n    color: #fff;\n  }\n  .white-logo {\n    display: none !important;\n  }\n  .dash-prog-outer {\n    float: left;\n    width: 100%;\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }\n  .dash-prog-outer h5 {\n    font-size: 24px;\n    text-align: center;\n    max-width: 90%;\n    margin-bottom: 1px;\n\n  }\n  .dash-prog-outer .company-dropdown-wrapper {\n    min-height: 35px;\n    width: 100%;\n    text-align: center;\n  }\n  .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    margin: 0 auto;\n    float: none;\n    text-align: center;\n  }\n  #new-header .navbar-header {\n    float: left;\n    margin-left: 0px;\n    margin-right: 0px !important;\n  }\n  #new-header .navbar-logopadding {\n    padding-right: 0px;\n    padding-top: 0px;\n  }\n  .circle-sec {\n    float: left;\n    width: 33%;\n    text-align: center;\n  }\n  .dash-circle-red,\n  .dash-circle-pink,\n  .dash-circle-d-pink {\n    float: none;\n    /* margin-right: 20px; */\n    margin: 0 auto;\n    width: 67px;\n    height: 38px;\n    padding-top: 13px;\n    border: none;\n  }\n  .dash-circle-red i,\n  .dash-circle-pink i,\n  .dash-circle-d-pink i {\n    font-size: 30px;\n  }\n  .circle-cal-outer h2 {\n    color: #62696d;\n    float: left;\n    font-family: montserratregular !important;\n    font-size: 24px !important;\n    margin: 15px 0 5px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n  }\n  .circle-cal-outer h5 {\n    float: left;\n    color: #8e989f;\n    font-size: 10px;\n    font-family: montserratregular;\n    text-transform: uppercase;\n    margin-top: 0;\n    width: 100%;\n  }\n  .circle-cal-outer {\n    float: left;\n    width: 100%;\n  }\n  .user-outr {\n    float: none;\n    width: 130px;\n    padding: 0;\n    margin: 0 auto;\n    margin-top: 30px;\n  }\n  .dash-top2-textinner h3 {\n    font-size: 20px;\n    margin-top: 5px;\n  }\n  .dash-top2-textinner .company-dropdown-wrapper .dropdown-toggle span {\n    width: auto !important;\n    font-size: 14px;\n  }\n  .user-outr li a img {\n    width: 44px;\n    height: 44px;\n  }\n  .user-outr {\n    display: none;\n    float: none;\n    width: 160px;\n    margin-top: 30px;\n  }\n  .dash-top2-textinner .company-dropdown-wrapper {\n    float: left;\n    margin: 0;\n    width: 100%;\n  }\n  .dash-top2-textinner .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    float: left;\n    text-align: left;\n  }\n  #new-header .navbar-default {\n    height: 56px;\n  }\n  .white-logo .navbar-brand img {\n    height: 53px;\n    margin-top: -20px;\n    margin: 0 auto;\n    margin-top: -20px;\n  }\n  .white-logo .navbar-brand {\n    float: none;\n  }\n  .dashboard-topsec {\n    padding: 0px;\n    padding-top: 0px;\n    padding-bottom: 5px;\n    margin-top: 0px;\n    float: left;\n    width: 100%;\n  }\n  .circle-parent {\n    padding-bottom: 20px;\n  }\n  .user-outr li a.add-user {\n    width: 45px;\n    height: 45px;\n    padding-top: 9px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\n    top: -30px;\n    left: 17px;\n    font-size: 34px;\n    position: relative;\n    color: #f87b80;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\n    font-size: 16px;\n  }\n  .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\n    width: 91%;\n    font-size: 14px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\n    width: 35px;\n    height: 35px;\n    padding-top: 8px;\n    font-size: 14px;\n    top: 13px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\n    font-size: 14px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\n    font-size: 24px;\n  }\n  .company-block-content {\n    margin-left: 50px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n    left: 42px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\n    right: 34px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n    top: 8px;\n    left: -8px;\n  }\n  .choosetem-topsec p {\n    font-size: 14px;\n    width: 100%;\n  }\n  .choosetem-topsec h3 {\n    font-size: 20px;\n  }\n  .choosetemp-social li {\n    margin-bottom: 0px;\n    margin-top: 20px;\n  }\n  .choosetemp-actions {\n    margin-top: 10px;\n    width: 100%;\n  }\n\n  .choosetemp-boxes-outr {\n    padding: 0px;\n  }\n  .choosetemp-box-figure2 {\n    padding: 0px;\n  }\n\n  .dashboard-topsec{\n    padding-top: 0px;\n    margin-top: 0px;\n  }\n\n  .bootbox .modal-content {\n    float: left;\n    width: 62%;\n    margin-left: 5px;\n  }\n\n  .one-line-bootbox .bootbox-body-left {\n    min-height: 122px;\n  }\n\n  .bootbox-body .bootbox-body-right {\n    width: 80%;\n  }\n\n  #calquiz-modal .calquiz-outr .step2 input{\n    width: 100%;\n  }\n\n  #calquiz-modal .alert.alert-danger{\n    left: 0px;\n  }\n\n  #calquiz-modal .calquiz-left{\n    width: 100%;\n    padding: 35px 25px 0px 25px;\n  }\n\n  #calquiz-modal .calquiz-right{\n    width: 100%;\n    padding: 35px 25px 0px 25px;\n  }\n  #calquiz-modal .calquiz-right i{\n    padding-left:0px;\n  }\n  #calquiz-modal .calquiz-left i{\n    padding-left: 0px;\n  }\n\n}\n\n@media (min-width: 990px) and (max-width:1300px) {\n  .user-outr{ width:100%;}\n  .dash-prog-outer{\n    width:190px;\n  }\n  .circle-sec{\n    text-align: center;\n  }\n  .dash-circle-pink{\n    width: 57px;\n    height: 57px;\n    padding-top: 7px;\n    margin-right: 10px;\n  }\n  .dash-circle-red{\n    width: 57px;\n    height: 57px;\n    padding-top: 7px;\n    margin-right: 10px;\n  }\n  .dash-circle-d-pink{\n    width: 57px;\n    height: 57px;\n    padding-top: 7px;\n    margin-right: 10px;\n  }\n  .circle-cal-outer{\n    width: 54%;\n  }\n  .circle-cal-outer h2{\n    width: 94%;\n  }\n  .circle-cal-outer h5{\n    width: 94%;\n  }\n  .dash-prog-outer h2{\n    font-size: 15px !important;\n  }\n  .dash-prog-outer h5{\n    font-size: 11px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\n    width: 100%;\n  }\n  .dash-prog-outer .company-dropdown-wrapper{\n    width:50%;\n  }\n  .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle{\n    width: 100%;\n  }\n\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu{\n    left: 6px;\n  }\n}\n\n/* Start: bootbox modal */\n@media screen and (min-width: 320px) and (max-width: 320px){\n  .bootbox .modal-content {\n    width: 62%;\n    margin-left: 5px;\n  }\n\n  .one-line-bootbox .bootbox-body-left {\n    min-height: 122px;\n  }\n\n  .bootbox-body .bootbox-body-right {\n    width: 80%;\n  }\n\n  .dashboard-toast{\n    left: 8px !important;\n    width: 285px !important;\n  }\n\n  .dashboard-toast i{\n    width: 30px !important;\n    padding-left: 3px;\n  }\n\n  .d-toast-btn i{\n    width: auto !important;\n    padding-left: 0px !important;\n  }\n\n  .toast{\n    left: 8px !important;\n    width: 285px !important;\n  }\n\n  .toast i{\n    width: 30px !important;\n    padding-left: 3px;\n  }\n\n  .toast .btn i{\n    width: auto !important;\n    padding-left: 0px !important;\n  }\n\n}\n\n@media screen and (min-width: 480px) and (max-width: 480px){\n  .bootbox .modal-content {\n    width: 90%;\n    margin-left: 15px;\n  }\n}\n\n/* End: bootbox modal */\n\n"

/***/ },

/***/ 1123:
/***/ function(module, exports) {

module.exports = "<sd-toolbar></sd-toolbar>\n<div class=\"preloader\" *ngIf=\"loader==0\">\n  <div class=\"status\">&nbsp;</div>\n</div>\n<!--<div class=\"loader\" *ngIf=\"loader==0\"></div>-->\n<div class=\"dashboard-toast\" style=\"display: none; bottom:60px;\"><i class=\"material-icons toast-ic\">check</i>\n  <span class=\"dash-toast-msg\">Calculator Deleted Successfully.</span>\n  <button type=\"button\" class=\"btn d-toast-btn\"><i class=\"material-icons\">clear</i></button>\n</div>\n<!-- Dashboard Section -->\n<div class=\"col-md-12 dashboard-topsec\">\n  <div class=\"col-md-4 col-sm-12 col-xs-12\">\n    <div class=\"dash-circle\">{{currentCompanyInit}}</div>\n    <div class=\"dash-prog-outer\">\n      <h2>Hey {{(username.substr(0,username.indexOf(' '))=='')?username:username.substr(0,username.indexOf(' '))}}, <br>We wish you a productive day :)</h2>\n      <h5 class=\"ellipsis hide\">{{currentCompany.name}}</h5>\n      <div class=\"btn-group company-dropdown-wrapper hide\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"material-icons\">keyboard_arrow_down</i>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a href=\"javascript:void(0);\" (click)=\"callGA('ADDCOMPANY')\" class=\"hvr-sweep-to-right add-new-company\" data-toggle=\"modal\" data-target=\"#add-new-company\">\n              <i class=\"material-icons\">playlist_add</i> &nbsp;Add New Company\n            </a>\n          </li>\n          <div class=\"company-dropdown-main\">\n            <div class=\"company-dropdown-list\" [class.slimscroll]=\"myCompaniesList.length > 3\">\n              <li *ngFor=\"let company of myCompaniesList\">\n                <a href=\"//{{company.sub_domain}}{{subdomainExtension}}/dashboard\" class=\"hvr-sweep-to-right\" *ngIf=\"company.user_company.active\">\n                  <div class=\"company-block\">\n                    <span class=\"company-block-inner\">{{company.name[0]}}</span>\n                  </div>\n                  <div class=\"company-block-content\">\n                    <span class=\"company-title ellipsis\">{{company.name}}</span>\n                    <span class=\"company-site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\n                  </div>\n                </a>\n              </li>\n            </div>\n          </div>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-sm-12 col-xs-12\">\n    <div class=\"circle-sec\">\n      <div class=\"dash-circle-red\"><i class=\"material-icons\">person</i></div>\n      <div class=\"circle-cal-outer\">\n        <h2>{{totalUniqueVisitors}}</h2>\n        <h5>Unique Visitors</h5>\n      </div>\n    </div>\n    <div class=\"circle-sec\">\n      <div class=\"dash-circle-pink\"><i class=\"material-icons\">check_circle</i></div>\n      <div class=\"circle-cal-outer\">\n        <h2>{{totalLeads}}</h2>\n        <h5>Leads Generated</h5>\n      </div>\n    </div>\n    <div class=\"circle-sec\">\n      <div class=\"dash-circle-d-pink\"><i class=\"material-icons\">trending_up</i></div>\n      <div class=\"circle-cal-outer\">\n        <h2>{{overallConversionRate}}%</h2>\n        <h5>Conversion Rate</h5>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-2 col-sm-12 col-xs-12\">\n    <ul class=\"user-outr\">\n\n      <li *ngFor=\"let user of currentCompanyUsers\">\n        <a href=\"javascript:void(0);\" class=\"more-users popover-wrapper\">\n          <span>{{user.name[0]}}</span>\n          <div class=\"more-popover-block single-user\">\n            <p class=\"ellipsis\">{{user.name}}</p>\n            <label class=\"ellipsis\">{{user.user_company.role}}</label>\n          </div>\n        </a>\n      </li>\n      <li *ngIf=\"moreCompanyUsers.length > 0\">\n        <a href=\"javascript:void(0);\" class=\"more-users popover-wrapper\">\n          <i class=\"material-icons\">more_horiz</i>\n          <div class=\"more-popover-block \">\n            <ul>\n              <li *ngFor=\"let user of moreCompanyUsers\">\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\">\n                  <span>{{user.name[0]}}</span>\n                  <div class=\"more-users-list\">\n                    <p class=\"ellipsis\">{{user.name}}</p>\n                    <label class=\"ellipsis\">{{user.user_company.role}}</label>\n                  </div>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </a>\n      </li>\n      <li>\n        <a (click)=\"callGA('ADDUSER')\" href=\"javascript:void(0);\" class=\"add-user popover-wrapper\" data-toggle=\"modal\" data-target=\"#add-new-user\">\n          <i class=\"material-icons\">add</i>\n          <div class=\"popover-block\">Add collaborator</div>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n<!-- Dashboard Section End-->\n<!-- Dashboard 3 boxes start (sahil) -->\n<div class=\"col-xs-12 dash-boxes-outr\">\n  <div class=\"col-xs-12 col-sm-12 col-md-4\">\n    <div class=\"dash-box dash-top3\">\n      <div class=\"dash-top3-textinner hide\">\n        <label>Now</label>\n        <h3>Create a New Experience</h3>\n      </div>\n      <div class=\"dash-top3circletable\">\n        <!--<a href=\"javascript:void(0);\" class=\"dash-top3-circle\" (click)=\"addNewCalc();callGA('ADDCALC')\"  data-toggle=\"modal\" data-target=\"#calquiz-modal\">-->\n        <a href=\"javascript:void(0);\" class=\"dash-top3-circle\"  (click)=\"initCalcQuiz()\" data-toggle=\"modal\" data-target=\"#calquiz-modal\">\n          <i class=\"material-icons\">add_circle_outline</i> Create a New Experience\n        </a>\n      </div>\n    </div>\n  </div>\n  <div *ngFor=\"let app of apps\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 \">\n      <div class=\"dash-box\">\n        <figure>\n          <div class=\"dash-box-top\" *ngIf=\"app.pages[0].bgImage\" [style.backgroundImage]=\"'url(' + app.pages[0].bgImage + ')' | safeStyle\">\n          </div>\n          <div class=\"dash-box-top\" *ngIf=\"!app.pages[0].bgImage\">\n          </div>\n        </figure>\n        <div class=\"dash-top2-textinner\">\n          <div class=\"\">\n            <span class=\"company-dropdown-title-active ellipsis\" *ngIf=\"app.liveApp\">Published: {{app.createdAt}}</span>\n            <span class=\"company-dropdown-title-active ellipsis\" *ngIf=\"!app.liveApp\">Last Edited: {{app.updatedAt}}</span>\n          </div>\n          <div class=\"dash-pullout-new\">\n            <i class=\"material-icons\">more_vert</i>\n            <ul class=\"new-dropdown-menu\">\n              <li>\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC')\">\n                  <div class=\"company-block\">\n                    <i class=\"material-icons\">format_paint</i>\n                  </div>\n                  <div class=\"company-block-content\">\n                    <span class=\"company-title ellipsis\">&nbsp;Edit</span>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\" checkAnalytics(app,'analytics');callGA('ANALYTICS')\">\n                  <div class=\"company-block\">\n                    <i class=\"material-icons\">trending_up</i>\n                  </div>\n                  <div class=\"company-block-content\">\n                    <span class=\"company-title ellipsis\">&nbsp;Analytics</span>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'config');selectSubTab('settings');callGA('SETTINGS');\">\n                  <div class=\"company-block\">\n                    <i class=\"material-icons\">mode_edit</i>\n                  </div>\n                  <div class=\"company-block-content\">\n                    <span class=\"company-title ellipsis\">&nbsp;Settings</span>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a class=\"hvr-sweep-to-right\" (click)=\"duplicateApp(app._id);callGA('DUPLICATE')\">\n                  <div class=\"company-block\">\n                    <i class=\"material-icons\">content_copy</i>\n                  </div>\n                  <div class=\"company-block-content\">\n                    <span class=\"company-title ellipsis\">&nbsp;Duplicate</span>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\" (click)=\"deleteApp(app._id);callGA('DELETE')\" class=\"hvr-sweep-to-right\">\n                  <div class=\"company-block\">\n                    <i class=\"material-icons\">delete</i>\n                  </div>\n                  <div class=\"company-block-content\">\n                    <span class=\"company-title ellipsis\">&nbsp;Delete</span>\n                  </div>\n                </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"btn-group company-dropdown-wrapper hide\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <div class=\"das-box-menu\">\n                <i class=\"material-icons\">more_vert</i>\n                <ul class=\"dropdown-menu\">\n                  <li>\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC')\">\n                      <div class=\"company-block\">\n                        <i class=\"material-icons\">format_paint</i>\n                      </div>\n                      <div class=\"company-block-content\">\n                        <span class=\"company-title ellipsis\">&nbsp;Edit Design</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'config');selectSubTab('settings');callGA('SETTINGS')\">\n                      <div class=\"company-block\">\n                        <i class=\"material-icons\">mode_edit</i>\n                      </div>\n                      <div class=\"company-block-content\">\n                        <span class=\"company-title ellipsis\">&nbsp;Edit Settings</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"checkAnalytics();callGA('ANALYTICS')\">\n                      <div class=\"company-block\">\n                        <i class=\"material-icons\">trending_up</i>\n                      </div>\n                      <div class=\"company-block-content\">\n                        <span class=\"company-title ellipsis\">&nbsp;View Analytics</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"hvr-sweep-to-right\" (click)=\"duplicateApp(app._id);callGA('DUPLICATE')\">\n                      <div class=\"company-block\">\n                        <i class=\"material-icons\">content_copy</i>\n                      </div>\n                      <div class=\"company-block-content\">\n                        <span class=\"company-title ellipsis\">&nbsp;Duplicate Calc</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'config');selectSubTab('share-your-calculator');callGA('SHARE')\">\n                      <div class=\"company-block\">\n                        <i class=\"material-icons\">computer</i>\n                      </div>\n                      <div class=\"company-block-content\">\n                        <span class=\"company-title ellipsis\">&nbsp;Publish / Share</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:void(0);\" (click)=\"deleteApp(app._id);callGA('DELETE')\" class=\"hvr-sweep-to-right\">\n                      <div class=\"company-block\">\n                        <i class=\"material-icons\">delete</i>\n                      </div>\n                      <div class=\"company-block-content\">\n                        <span class=\"company-title ellipsis\">&nbsp;Delete</span>\n                      </div>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </button>\n          </div>\n          <h3>{{app.name}}</h3>\n          <div class=\"col-xs-12 text-center\">\n            <a href=\"javascript:void(0);\" (click)=\"openOldCalc(app,'build');callGA('OPENCALC')\" class=\"dash-box-send\">\n              <i class=\"material-icons\">send</i>\n            </a>\n          </div>\n        </div>\n        <div class=\"dash-box-bottom\">\n          <ul>\n            <li>\n              <i class=\"material-icons\">public</i>\n              <label class=\"text\">Status</label>\n              <div class=\"switch-outr\">\n                <div class=\"dummy-switch\" [class.red]=\"app.mode=='PUBLIC'\">\n                  <p>{{(app.mode=='PUBLIC')?'Live':'Draft'}}</p>\n                </div>\n              </div>\n            </li>\n            <li>\n              <i class=\"material-icons\">person</i>\n              <label class=\"text\">Unique Visits</label>\n              <span class=\"value\">{{ (app.uniqueViews!=undefined)?app.uniqueViews:'--' }}</span>\n            </li>\n            <li>\n              <i class=\"material-icons\">reorder</i>\n              <label class=\"text\">Leads Generated</label>\n              <span class=\"value\">{{ (app.leads!=undefined)?app.leads:'--' }}</span>\n            </li>\n            <li>\n              <i class=\"material-icons\">done_all</i>\n              <label class=\"text\">Conversion Rate</label>\n              <span class=\"value\">{{ (app.conversionRate!=undefined)?app.conversionRate+'%':'--' }}</span>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Dashboard 3 boxes end (sahil) -->\n\n<div id=\"add-new-company\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    Modal content\n    <div class=\"modal-content modal-bg\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <i class=\"material-icons\">close</i>\n        </button>\n        <h5 class=\"modal-title\">Create a New Company</h5>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"sahil-material\">\n          <form [formGroup]=\"createCompanyForm\" (ngSubmit)=\"createCompany()\">\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\" for=\"companyname\"> New Company Name</label>\n              <input class=\"form-control\" id=\"companyname\" type=\"text\" name=\"companyname\" formControlName=\"companyname\" (focus)=\"hideError()\">\n            </div>\n            <div *ngIf=\"createCompanyForm.controls.companyname.touched && !createCompanyForm.controls.companyname.valid\" class=\"alert alert-danger\">\n              <p *ngIf=\"createCompanyForm.controls.companyname.errors.required\">Company Name is required.</p>\n              <p *ngIf=\"createCompanyForm.controls.companyname.errors.minlength\">Min 3 character is required.</p>\n            </div>\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\" for=\"domain\"> Company Url</label>\n              <input class=\"form-control\" id=\"domain\" type=\"text\" name=\"domain\" formControlName=\"domain\" (focus)=\"hideError()\">\n              <label class=\"in-active\">{{subdomainExtension}}</label>\n            </div>\n            <div *ngIf=\"createCompanyForm.controls.domain.touched && !createCompanyForm.controls.domain.valid\" class=\"alert alert-danger\">\n              <p *ngIf=\"createCompanyForm.controls.domain.errors.required\">Company Name is required.</p>\n              <p *ngIf=\"createCompanyForm.controls.domain.errors.minlength\">Min 3 character is required.</p>\n              <p *ngIf=\"createCompanyForm.controls.domain.errors.pattern\">\n                Invalid Url\n              </p>\n            </div>\n            <button type=\"submit\" id=\"btnCreateCompany\" class=\"btn btn-red-outline btn-add-user btn-hover\" [disabled]=\"!createCompanyForm.valid\">Add New Company</button>\n          </form>\n          <div class=\"alert alert-danger hide\" id=\"success-addCompany\">\n            {{Message}}\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        Your company will be created immediately. As soon as the company is created, you can start adding users to collaborate.\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"add-new-user\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content modal-bg\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <i class=\"material-icons\">close</i>\n        </button>\n        <h5 class=\"modal-title\">Add New User</h5>\n      </div>\n      <form [formGroup]=\"inviteUserForm\" (ngSubmit)=\"inviteUser()\" id=\"inviteUserForm\">\n        <div class=\"modal-body\">\n          <div class=\"alert alert-danger custom-alert hide\" id=\"success-addUser\">\n            <p>\n                            <span class=\"mat-icon\">\n                                <i class=\"material-icons\">report_problem</i>\n                            </span>\n              <span id=\"dashboardAdduserMessage\"></span>\n            </p>\n          </div>\n          <div class=\"sahil-material\">\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\" for=\"inputName\"> Name</label>\n              <input class=\"form-control\" id=\"inputName\" type=\"text\" formControlName=\"userName\" name=\"userName\">\n            </div>\n            <div *ngIf=\"inviteUserForm.controls.userName.touched && !inviteUserForm.controls.userName.valid\" class=\"alert alert-danger\">\n              <p *ngIf=\"inviteUserForm.controls.userName.errors.required\">Name is required.</p>\n              <p *ngIf=\"inviteUserForm.controls.userName.errors.minlength\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\n\t\t\t\t\t\t\t\t</span>\n                Min 3 character is required.\n              </p>\n            </div>\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\" for=\"inputEmail\"> Email Address</label>\n              <input class=\"form-control\" id=\"inputEmail\" type=\"email\" formControlName=\"userEmail\" name=\"userEmail\">\n            </div>\n            <div *ngIf=\"inviteUserForm.controls.userEmail.touched && !inviteUserForm.controls.userEmail.valid\" class=\"alert alert-danger\">\n              <p *ngIf=\"inviteUserForm.controls.userEmail.errors.required\">Email is required.</p>\n              <p *ngIf=\"inviteUserForm.controls.userEmail.errors.checkmail\">Invalid Email.</p>\n            </div>\n            <div class=\"form-group form-group-radio\">\n              <label class=\"radio-inline\">\n                <input type=\"radio\" value=\"ADMIN\" id=\"radioAdmin\" formControlName=\"userRole\" name=\"userRole\">\n                <label for=\"radioAdmin\"> </label> Admin {{userRole}}\n              </label>\n              <label class=\"radio-inline\">\n                <input type=\"radio\" value=\"MANAGER\" id=\"radioManager\" formControlName=\"userRole\" name=\"userRole\">\n                <label for=\"radioManager\"> </label> Manager\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"submit\" [disabled]=\"!inviteUserForm.valid\" class=\"btn btn-red-outline btn-add-user btn-hover\" id=\"btnInvite\">Add New User</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<!--- cal quiz modal -->\n<div id=\"calquiz-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content modal-bg\">\n      <div class=\"modal-body\">\n        <div class=\"calquiz-outr\">\n          <div class=\"step1\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <i class=\"material-icons\">close</i>\n              </button>\n              <h5 class=\"modal-title\">What will You Create Today? </h5>\n            </div>\n            <div class=\"calquiz-left\">\n              <label class=\"check-icon\">\n                <input type=\"radio\" value=\"Numerical\" name=\"calQuiz\" id=\"radio1\" (click) = \"selectCalc()\">\n                <label for=\"radio1\">\n                                    <span class=\"outer-border \">\n                                        <i class=\"material-icons\">dialpad</i>\n                                    </span>\n                </label>\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np calc-quiz-margin\">\n                  <h3>Numerical Calculator</h3>\n                  <span class=\"col-md-6 col-sm-12 col-xs-12 np\">Gives a result in the form of a number like a price estimate, percentage or score.</span>\n                  <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\n                    How much does it cost to remodel your kitchen?<br/>\n                    What is the risk of getting zika?  <br/>\n                    How much do you really know about the Lakers?\n                  </p>\n                </div>\n              </label>\n            </div>\n            <div class=\"calquiz-right\">\n              <label class=\"check-icon ic\">\n                <input type=\"radio\" value=\"Recommendation\" name=\"calQuiz\" id=\"radio2\" (click) = \"selectCalc()\" >\n                <label for=\"radio2\">\n                                    <span class=\"outer-border\">\n                                        <i class=\"material-icons\">filter_vintage</i>\n                                    </span>\n                </label>\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np calc-quiz-margin\">\n                  <h3>Outcome Quiz</h3>\n                  <span class=\"col-md-6 col-sm-12 col-xs-12 np\">Gives a result in the form of a recommendation or a suggestion.</span>\n                  <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\n                    Which jeans should you wear?<br/>\n                    Which insurance plan is right for you?<br/>\n                    Which celebrity matches your style?\n                  </p>\n                </div>\n              </label>\n            </div>\n          </div>\n          <form [formGroup] = \"calcNameform\" (ngSubmit) = \"onAddNewCalc()\" id=\"type-calc\" novalidate>\n            <div class=\"step2 hide\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <i class=\"material-icons\">close</i>\n                </button>\n                <h5 class=\"modal-title\" style=\"color:#fb6066;\">Give a Name </h5>\n              </div>\n              <div class=\"calquiz-left calquiz-right full-width\">\n                <div class=\"back-icon\" (click)=\"goBack()\">\n                  <i class=\"material-icons\">arrow_back</i>\n                </div>\n                <label class=\"check-icon\">\n                  <input type=\"radio\" checked=\"checked\" id=\"lopa\" name=\"noname\">\n                  <label for=\"lopa\">\n                                        <span class=\"outer-border\">\n                                            <i class=\"material-icons\" *ngIf=\"calcType ==='Numerical'\">dialpad</i>\n                                            <i class=\"material-icons\" *ngIf=\"calcType ==='Recommendation'\">filter_vintage</i>\n                                        </span>\n                  </label>\n                </label>\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np calc-quiz-margin text-center\">\n                  <div>\n                    <h3 *ngIf=\"calcType ==='Recommendation'\">Quiz Title</h3>\n                    <h3 *ngIf=\"calcType ==='Numerical'\">Calculator Title</h3>\n                    <input type=\"text\" placeholder=\"{{calcType=='Recommendation'?'Which insurance plan is right for you?':'Estimate the Cost of Building a Website'}}\"  (blur)=\"reset = true;\" formControlName=\"calcName\" name=\"calcName\" class=\"calcName-input\" >\n                    <div *ngIf=\"(calcNameform.controls.calcName.touched && !calcNameform.controls.calcName.valid) && reset\" class=\"alert alert-danger\">\n                      <p >\n                                                <span  class=\"mat-icon\">\n                                                    <i class=\"material-icons\">report_problem</i>\n                                                </span>\n                        <span *ngIf=\"calcType ==='Numerical'\">Calculator name is required.</span>\n                        <span *ngIf=\"calcType ==='Recommendation'\">Quiz title is required.</span>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <button  class=\"btn btn-red btn-hover\">\n                <span *ngIf=\"calcType ==='Numerical'\">Select Template</span>\n                <span *ngIf=\"calcType ==='Recommendation'\">Get Started</span>\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--- cal quiz modal -->\n<div class=\"float-changes-updated hide\">\n  <div class=\"col-md-12 np\">\n    <span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\n    <span id=\"floatMessage\">{{ Message }} </span>\n  </div>\n</div>\n"

/***/ },

/***/ 869:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(1000);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_membership_service__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analytics_services_calculator_analytics_service__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_dashboard_service__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__templates_controls_controls_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolbar_toolbar_module__ = __webpack_require__(424);
/* harmony export (binding) */ __webpack_require__.d(exports, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DASHBOARD_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]
    }
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forChild(DASHBOARD_ROUTES), __WEBPACK_IMPORTED_MODULE_8__templates_controls_controls_module__["a" /* ControlsModule */], __WEBPACK_IMPORTED_MODULE_9__toolbar_toolbar_module__["a" /* ToolbarModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__["a" /* BuilderService */], __WEBPACK_IMPORTED_MODULE_4__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */], __WEBPACK_IMPORTED_MODULE_3__shared_services_membership_service__["a" /* MembershipService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());


/***/ },

/***/ 874:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalculatorAnalytics; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalculatorAnalytics = (function (_super) {
    __extends(CalculatorAnalytics, _super);
    function CalculatorAnalytics(_http) {
        _super.call(this);
        this._http = _http;
    }
    CalculatorAnalytics.prototype.getTrafficStats = function (data) {
        var URL = this._url + '/analytic/calculator_stats';
        return this._http.post(URL, data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CalculatorAnalytics.prototype.getLeads = function (appId) {
        return this._http.post(this._url + '/analytic/get_leads', appId, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CalculatorAnalytics.prototype.getStats = function (key) {
        return this._http.post(this._url + '/analytic/get_stats', key, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CalculatorAnalytics.prototype.getLeadsCount = function (companyId) {
        return this._http.get(this._url + '/analytic/leads/count/' + companyId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CalculatorAnalytics = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CalculatorAnalytics);
    return CalculatorAnalytics;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__["a" /* BaseService */]));


/***/ },

/***/ 877:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_emails__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userCompany__ = __webpack_require__(423);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });


var User = (function () {
    function User(user) {
        var _this = this;
        if (user) {
            this.id = user._id;
            this.updatedAt = user.updatedAt;
            this.createdAt = user.createdAt;
            this.username = user.username;
            this.timezone = user.timezone;
            this.location = user.location;
            this.phone = user.phone;
            this.role = user.role;
            this.name = user.name;
            this.isLoggedIn = user.isLoggedIn;
            this.password = user.password;
            this.active = user.active;
            this.emails = [];
            var i_1 = 0;
            if (user.emails) {
                user.emails.forEach(function (email) {
                    _this.emails[i_1] = new __WEBPACK_IMPORTED_MODULE_0__models_emails__["a" /* Emails */](email);
                    i_1++;
                });
            }
            this.user_company = new __WEBPACK_IMPORTED_MODULE_1__userCompany__["a" /* UsersCompany */](user.user_company);
        }
    }
    return User;
}());


/***/ },

/***/ 883:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Emails; });
/* unused harmony export Verification */
/* unused harmony export Hash */
var Emails = (function () {
    function Emails(email) {
        if (email) {
            this.updatedAt = email.updatedAt;
            this.createdAt = email.createdAt;
            this.email = email.email;
            this.is_primary = email.is_primary;
            this.verification = new Verification(email.verification);
        }
    }
    return Emails;
}());
var Verification = (function () {
    function Verification(verification) {
        if (verification) {
            this.completed_at = verification.completed_at;
            this.complete = verification.complete;
            this.hash = new Hash(verification.hash);
        }
    }
    return Verification;
}());
var Hash = (function () {
    function Hash(hash) {
        if (hash) {
            this.expire_at = hash.expire_at;
            this.value = hash.value;
        }
    }
    return Hash;
}());


/***/ }

});
//# sourceMappingURL=6.map