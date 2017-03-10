webpackJsonp([6,13],{

/***/ 1075:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_validators_email_validator__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_builder_service__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_feature_access_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_company__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_user__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__analytics_services_calculator_analytics_service__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_marketing_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_membership_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_script_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_subdomain_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_company_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_dashboard_service__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_services_cookie_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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
    function DashboardComponent(_calculatorAnalytics, _membershipService, subDomainService, companyService, _dashboardService, _builderService, _featureAuthService, _cookieService, _router, fb, _script, _marketingService, titleService) {
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
        this._marketingService = _marketingService;
        this.titleService = titleService;
        this.stats = {};
        this.loader = 0;
        this.Message = '';
        this.user_status = '';
        this.subdomainExtension = '';
        this.myCompaniesList = [];
        this.currentCompany = '';
        this.calcCount = '';
        this.runningPlan = '';
        this.currentCompanyInit = '';
        this.currentCompanyUsers = [];
        this.companyUsersCount = 0;
        this.moreCompanyUsers = [];
        this.sub_domain = '';
        //variable used to clear validation msgs on modal hide
        this.reset = true;
        this.isLimitCrossed = false;
        this.isAnalyticsAvailable = false;
        this.totalUniqueVisitors = 0;
        this.totalLeads = 0;
        this.totalCta_Engagement = 0;
        this.overallConversionRate = 0;
        this.subs = [];
        jQuery('#modalcss').attr('href', "./assets/css/common.css");
        this.titleService.setTitle("Outgrow Home");
        var url = window.location.hostname;
        if (this.checkSubDomain(url))
            this.sub_domain = url.split('.')[0];
        this._script.load('slimScroll', 'bootBox', 'marketing')
            .then(function (data) {
            //console.log('Scripts Loaded', data);
            if (data.length && data[0].status == 'Loaded')
                _marketingService.initMarketingStuff();
            jQuery('.slimscroll').slimscroll({
                railVisible: true,
                alwaysVisible: true
            });
        })
            .catch(function (error) {
            //any error
        });
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        this.runningPlan = storage.company.billing.chargebee_plan_id;
    }
    DashboardComponent.prototype.switchedToCompany = function () {
        var _this = this;
        var self = this;
        var selectedCompany = window.location.href.split('//')[1].split('.')[0];
        if (selectedCompany !== 'app') {
            var subDomainExist_1 = this.companyService.isSubDomainExist(selectedCompany)
                .subscribe(function (success) {
                var storage = JSON.parse(self._cookieService.readCookie('storage'));
                storage.company = success;
                _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
            }, function (error) {
                subDomainExist_1.unsubscribe();
            });
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.switchedToCompany();
        var storage = this._cookieService.readCookie('storage');
        if (storage !== null) {
            storage = JSON.parse(storage);
            if (storage.showUpgradeModal)
                jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
            this.username = storage.user.name;
            if (this.subDomainService.subDomain.sub_domain === storage.company.sub_domain)
                this.company_id = storage.company._id;
            else {
                this.company_id = localStorage.getItem('company');
            }
        }
        this.createCompanyForm = this.fb.group({
            companyname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].minLength(3)])],
            domain: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].pattern('^[a-zA-Z0-9]*$')])]
        });
        this.inviteUserForm = this.fb.group({
            userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required, , __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].minLength(3)])],
            userEmail: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__shared_validators_email_validator__["a" /* EmailValidator */].format])],
            userRole: ['MANAGER', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required])]
        });
        this.calcNameform = this.fb.group({
            calcName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* Validators */].required])]
        });
        this.subdomainExtension = '.' + __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].APP_EXTENSION;
        this.subs.push(this.getCompanyProjects());
        this.getMyCompanies();
        jQuery.material.init();
        var co = window.location.href.split('//')[1].split('.')[0];
        if (co !== 'app') {
            this.companyService.isSubDomainExist(co)
                .subscribe(function (success) {
                _this.currentCompany = new __WEBPACK_IMPORTED_MODULE_6__shared_models_company__["b" /* Company */](success);
                _this.calcCount = _this.currentCompany.current_limit.calculators > 1 ? _this.currentCompany.current_limit.calculators + ' calculators or quizzes' : 'one calculator or quiz';
                _this.currentCompanyInit = _this.currentCompany.name[0];
                _this.getSelectedCompanyUsers();
            }, function (error) {
                //console.log('dashboard company Error', error);
            });
        }
        //console.log('localStorage.getItem', localStorage.getItem('role'));
        this.updateIntercomData();
        this.initRefersionLocalStorage();
    };
    DashboardComponent.prototype.initRefersionLocalStorage = function () {
        var rfsn = this._cookieService.readCookie('rfsn');
        if (null !== rfsn) {
            var refersion = JSON.parse(rfsn);
            for (var key in refersion) {
                console.log('Called in loop');
                if ('current_rfsn_lsts' === key && !localStorage.getItem('current_rfsn_lsts')) {
                    console.log('Called if');
                    localStorage.setItem('current_rfsn_lsts', refersion[key]);
                }
                else if (!localStorage.getItem('rfsn_' + key)) {
                    console.log('Called if');
                    localStorage.setItem('rfsn_' + key, refersion[key]);
                }
            }
        }
    };
    DashboardComponent.prototype.updateIntercomData = function () {
        var _this = this;
        this.companyService.getCompanies()
            .subscribe(function (res) {
            var cookieString = _this._cookieService.readCookie('utm_ref');
            if (cookieString)
                window.Intercom('update', JSON.parse(cookieString));
            if (res[0].is_appsumo_created) {
                if (window.location.href.indexOf('outgrow.co') >= 0)
                    fbq('trackCustom', 'AppsumoRegistration');
                window.Intercom('update', { 'is_appsumo': true });
            }
            else {
                window.Intercom('update', { 'is_appsumo': false });
            }
        }, function (err) {
        });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery('#calquiz-modal').on('hidden.bs.modal', function () {
            _this.reset = false;
        });
        /*hide help icon on dashboard for mobile screen */
        setTimeout(function () { return jQuery('.builder-help-icon').addClass('hide'); }, 2000);
        //for date range filter in Analytics
        localStorage.removeItem('df');
    };
    DashboardComponent.prototype.upgradeNavigation = function () {
        jQuery('#add-new-user').modal('hide');
        jQuery('#success-addUser').addClass('hide');
        this._router.navigate(['/settings/membership']);
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
        return this.companyService.getCompanyProjects(this.sub_domain)
            .subscribe(function (response) {
            _this.totalUniqueVisitors = 0;
            _this.totalLeads = 0;
            _this.totalCta_Engagement = 0;
            _this.overallConversionRate = 0;
            var i = 0;
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
                app.Cta_Engagement_Count = Number(response[0][4]);
                app.conversionRate = (app.uniqueViews && app.leads) ? ((app.leads / app.uniqueViews) * 100).toFixed(2) : 0;
                _this.totalUniqueVisitors += app.uniqueViews;
                _this.totalCta_Engagement += app.Cta_Engagement_Count;
                _this.totalLeads += app.leads;
                _this.overallConversionRate = (_this.totalUniqueVisitors) ? ((_this.totalLeads / _this.totalUniqueVisitors) * 100).toFixed(2) : 0;
            }
            else {
                app.uniqueViews = 0;
                app.leads = 0;
                app.conversionRate = 0;
                app.Cta_Engagement_Count = 0;
            }
        }, function (error) {
            console.log(error);
        });
    };
    // popup acitivity //
    DashboardComponent.prototype.initCalcQuiz = function () {
        this.isLimitCrossed = false;
        this._featureAuthService.setSelectedFeature('Need more calculators?');
        var plan_calc_limit = this._featureAuthService.features.calculators;
        if (this.apps.length >= plan_calc_limit && plan_calc_limit !== -1) {
            this.isLimitCrossed = true;
        }
        else {
            this.isLimitCrossed = false;
        }
        if (!this.isLimitCrossed) {
            jQuery("input[name='calQuiz']").prop("checked", false);
            jQuery('.step1').removeClass('hide');
            jQuery('.step2').addClass('hide');
            jQuery('.calcName-input').val('');
            jQuery('#calquiz-modal').modal('show');
        }
        else {
            //jQuery('.calculators').addClass('activegreen limited-label');
            this.premiumPopup();
        }
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
        jQuery('#calquiz-modal').modal('hide');
        localStorage.setItem('project', 'New');
        localStorage.setItem('show_popup', 'show');
        // if (localStorage.getItem('temp_type') === 'Recommendation') {
        //   localStorage.setItem('temp_name', 'one-page-card');
        //   //this._router.navigate(['/builder']);
        //   window.location.href = environment.PROTOCOL + this.subDomainService.subDomain.sub_domain +
        // '.' + environment.APP_EXTENSION + '/builder/';
        // }
        // else {
        this._router.navigate(['/templates']);
        // }
    };
    DashboardComponent.prototype.openOldCalc = function (app, tabName) {
        localStorage.setItem('project', app._id);
        localStorage.setItem('tab-selected', tabName);
        window.location.href = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].APP_EXTENSION + '/builder/' + app.url;
    };
    DashboardComponent.prototype.selectSubTab = function (tabName) {
        localStorage.setItem('selected-sub-tab', tabName);
    };
    /* duplicate app*/
    DashboardComponent.prototype.duplicateApp = function (dataId) {
        var _this = this;
        this.isLimitCrossed = false;
        var plan_calc_limit = this._featureAuthService.features.calculators;
        if (this.apps.length >= plan_calc_limit && plan_calc_limit !== -1) {
            this.isLimitCrossed = true;
        }
        else {
            this.isLimitCrossed = false;
        }
        if (this.isLimitCrossed) {
            this._featureAuthService.setSelectedFeature('Need more calculators?');
            //jQuery('.calculators').addClass('activegreen limited-label');
            this.premiumPopup();
        }
        else {
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
                    _this._featureAuthService.setSelectedFeature('Need more calculators?');
                    //jQuery('.calculators').addClass('activegreen limited-label');
                    jQuery('#premiumModal').modal('show');
                    jQuery('.modal-backdrop').insertAfter('#premiumModal');
                    setTimeout(function () {
                        jQuery('.dashboard-toast').fadeOut().animate({ bottom: -60 }, 800, function () { });
                    }, 200);
                }
                else {
                    console.log(error);
                }
            });
        }
    };
    /* Delete app*/
    DashboardComponent.prototype.deleteApp = function (app) {
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
                        that._dashboardService.deleteApp({ id: app._id })
                            .subscribe(function (response) {
                            if (jQuery.isEmptyObject(response)) {
                                that._router.navigate(['/dashboard']);
                            }
                            else {
                                app.status = 'DELETED';
                                that.recalculateStats();
                                window.toastNotification('Calculator Deleted Successfully.');
                                //console.log(that.apps);
                                var indexOfApp = that.apps.map(function (e) { return e._id; }).indexOf(app._id);
                                //console.log('index->',indexOfApp);
                                that.apps.splice(indexOfApp, 1);
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
    DashboardComponent.prototype.recalculateStats = function () {
        var _this = this;
        this.totalUniqueVisitors = 0;
        this.totalLeads = 0;
        this.totalCta_Engagement = 0;
        this.overallConversionRate = 0;
        this.apps.forEach(function (app) {
            if (app.liveApp && app.status != 'DELETED') {
                _this.totalUniqueVisitors += app.uniqueViews;
                _this.totalCta_Engagement += app.Cta_Engagement_Count;
                _this.totalLeads += app.leads;
                _this.overallConversionRate = (_this.totalUniqueVisitors) ? ((_this.totalLeads / _this.totalUniqueVisitors) * 100).toFixed(2) : 0;
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
        var mode = (app.mode === 'PRIVATE') ? 'PUBLIC' : 'PRIVATE';
        this._dashboardService.changeAppMode(app._id)
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
                    self.myCompaniesList.push(new __WEBPACK_IMPORTED_MODULE_6__shared_models_company__["b" /* Company */](company));
            });
        }, function (error) {
            //console.log('getMyCompanies TS', error.error.err_message);
        });
    };
    DashboardComponent.prototype.getSelectedCompanyUsers = function () {
        var _this = this;
        var self = this;
        var count = 0;
        this.companyService.getCompanyUsers(self.currentCompany.id)
            .subscribe(function (success) {
            self.currentCompanyUsers = [];
            success.forEach(function (user) {
                _this.companyUsersCount = success.length;
                if (user) {
                    if (user.user_company.active) {
                        if (count < 4) {
                            self.currentCompanyUsers.push(new __WEBPACK_IMPORTED_MODULE_7__shared_models_user__["a" /* User */](user));
                            count++;
                        }
                        else
                            self.moreCompanyUsers.push(new __WEBPACK_IMPORTED_MODULE_7__shared_models_user__["a" /* User */](user));
                    }
                }
            });
        }, function (error) {
            //console.log('getSelectedCompanyUsers Dashboard', error.error.err_message);
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
    DashboardComponent.prototype.userCheckLimit = function () {
        this._featureAuthService.setSelectedFeature('Team Getting Bigger?');
        if (this.companyUsersCount < this._featureAuthService.features.users) {
            jQuery('#add-new-user').modal('show');
            jQuery('#premiumModal').attr('active', false);
            this.callGA('ADDUSER');
        }
        else {
            //jQuery('.users').addClass('activegreen limited-label');
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
            jQuery('#add-new-user').attr('active', false);
        }
    };
    DashboardComponent.prototype.inviteUser = function () {
        var self = this;
        self.Message = '';
        jQuery('#btnInvite').text('Please Wait...').attr('disabled', true);
        self.companyService.addUser(self.inviteUserForm.value, self.currentCompany.id)
            .subscribe(function (success) {
            jQuery('#add-new-user input').val('');
            jQuery('.name').addClass('is-empty');
            jQuery('.email').addClass('is-empty');
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
            // console.log('sdfsdfsdf', error);
            var error_code = error.error.code;
            if (error_code === 'E_UNIQUE_USERNAME_VALIDATION' ||
                error_code === 'E_UNIQUE_EMAIL_VALIDATION' ||
                error_code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION' ||
                error_code === 'E_USER_COMPANY_ALREADY_EXISTS') {
                self.Message = ' This user is already a part of this company on Outgrow';
            }
            else if (error_code === 'E_USER_LIMIT_EXCEEDED') {
                self.Message = 'Please upgrade your plan you have exceeded the limit!';
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
            jQuery('#add-new-user input').val('');
            jQuery('.name').addClass('is-empty');
            jQuery('.email').addClass('is-empty');
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
        this.isAnalyticsAvailable = this._featureAuthService.features.analytics.active;
        //console.log(this.isAnalyticsAvailable,'///////////////////////////////////////////////');
        if (this.isAnalyticsAvailable) {
            this.openOldCalc(app, tabName);
        }
        else {
            this._featureAuthService.setSelectedFeature('analytics');
            jQuery('.analytics').addClass('activegreen limited-label');
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
        }
    };
    DashboardComponent.prototype.premiumPopup = function () {
        jQuery('#premiumModal').modal('show');
        jQuery('.modal-backdrop').insertAfter('#premiumModal');
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'og-dashboard',
            template: __webpack_require__(1222),
            styles: [__webpack_require__(128), __webpack_require__(129), __webpack_require__(1133)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_12__shared_services_membership_service__["a" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_12__shared_services_membership_service__["a" /* MembershipService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_14__shared_services_subdomain_service__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_14__shared_services_subdomain_service__["a" /* SubDomainService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_15__shared_services_company_service__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_15__shared_services_company_service__["a" /* CompanyService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_16__shared_services_dashboard_service__["a" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_16__shared_services_dashboard_service__["a" /* DashboardService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_builder_service__["a" /* BuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_builder_service__["a" /* BuilderService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_feature_access_service__["a" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_feature_access_service__["a" /* FeatureAuthService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_17__shared_services_cookie_service__["a" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_17__shared_services_cookie_service__["a" /* CookieService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_13__shared_services_script_service__["a" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_13__shared_services_script_service__["a" /* Script */]) === 'function' && _l) || Object, (typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_10__shared_services_marketing_service__["a" /* MarketingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__shared_services_marketing_service__["a" /* MarketingService */]) === 'function' && _m) || Object, (typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["c" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["c" /* Title */]) === 'function' && _o) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/dashboard.component.js.map

/***/ }),

/***/ 1133:
/***/ (function(module, exports) {

module.exports = "body, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\r\n  font-family: 'montserratregular';\r\n}\r\n@font-face {\r\n  font-family: 'Material Icons';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(MaterialIcons-Regular.eot);\r\n  src: local('Material Icons'), local('materialIcons-Regular'), url(../assets/fonts/materialIcons-Regular.woff2) format('woff2'), url(../fonts/materialIcons-Regular.woff) format('woff'), url(../fonts/materialIcons-Regular.ttf) format('truetype')\r\n}\r\n.material-icons {\r\n  font-family: 'Material Icons';\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  display: inline-block;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-wrap: normal;\r\n  white-space: nowrap;\r\n  direction: ltr;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-rendering: optimizeLegibility;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-feature-settings: 'liga';\r\n          font-feature-settings: 'liga'\r\n}\r\n@font-face {\r\n  font-family: montserratregular;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\r\n}\r\n@font-face {\r\n  font-family: montserratbold;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(../assets/fonts/montserrat-bold-webfont.eot) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-bold-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-bold-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-bold-webfont.ttf) format(\"truetype\")\r\n}\r\n@font-face {\r\n  font-family: montserratsemibold;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(../assets/fonts/montserrat-semibold-webfont.eot?#iefix) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-semibold-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-semibold-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-semibold-webfont.ttf) format(\"truetype\")\r\n}\r\n@font-face {\r\n  font-family: montserratlight;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(../assets/fonts/montserrat-light-webfont.eot) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-light-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-light-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-light-webfont.ttf) format(\"truetype\")\r\n}\r\n.np {\r\n  padding: 0px;\r\n}\r\nbody {\r\n  font-family: montserratregular;\r\n}\r\n.dash-circle {\r\n  float: left;\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 50px;\r\n  background: #eceff0;\r\n  color: #444f54;\r\n  text-align: center;\r\n  font-family: montserratregular;\r\n  font-size: 24px;\r\n  margin-right: 18px;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.dash-prog-outer {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  height: 77px;\r\n}\r\n.dash-prog-outer h2 {\r\n  float: left;\r\n  color: #62696d;\r\n  font-size: 19px !important;\r\n  font-family: montserratlight !important;\r\n  margin: 0px;\r\n  line-height: 24px;\r\n}\r\n.dash-prog-outer h5 {\r\n  float: left;\r\n  color: #f56151;\r\n  font-size: 13px;\r\n  font-family: montserratregular;\r\n  text-transform: uppercase;\r\n  margin-top: 0;\r\n  max-width: 90%;\r\n}\r\n.circle-sec {\r\n  float: left;\r\n  width: 33%;\r\n}\r\n.circle-cal-outer {\r\n  float: left;\r\n  width: 100px;\r\n}\r\n.circle-cal-outer h2 {\r\n  color: #62696d;\r\n  float: left;\r\n  font-family: montserratregular !important;\r\n  font-size: 24px !important;\r\n  margin: 15px 0 5px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  width: 102%;\r\n}\r\n.circle-cal-outer h5 {\r\n  float: left;\r\n  color: #8e989f;\r\n  font-size: 10px;\r\n  font-family: montserratregular;\r\n  text-transform: uppercase;\r\n  margin-top: 0;\r\n  width: 100%;\r\n}\r\n.dash-circle-red {\r\n  float: left;\r\n  width: 77px;\r\n  height: 77px;\r\n  border-radius: 50px;\r\n  color: #cbd1d4;\r\n  text-align: center;\r\n  font-family: montserratregular;\r\n  padding-top: 18px;\r\n  margin-right: 20px;\r\n  border: 3px solid #fb545b;\r\n}\r\n.dash-circle-pink {\r\n  float: left;\r\n  width: 77px;\r\n  height: 77px;\r\n  border-radius: 50px;\r\n  color: #cbd1d4;\r\n  text-align: center;\r\n  font-family: montserratregular;\r\n  padding-top: 18px;\r\n  margin-right: 20px;\r\n  border: 3px solid #ff5796;\r\n}\r\n.dash-circle-d-pink {\r\n  float: left;\r\n  width: 77px;\r\n  height: 77px;\r\n  border-radius: 50px;\r\n  color: #cbd1d4;\r\n  text-align: center;\r\n  font-family: montserratregular;\r\n  padding-top: 18px;\r\n  margin-right: 20px;\r\n  border: 3px solid #c859b7;\r\n}\r\n.dash-circle-red i, .dash-circle-pink i, .dash-circle-d-pink i {\r\n  font-size: 35px;\r\n}\r\n\r\n/* ####  dashboard 3 boxes css start (sahil) ### */\r\n.dashboard-topsec {\r\n  padding-top: 25px;\r\n  background: #f6f8f9;\r\n  padding-bottom: 25px;\r\n}\r\n.help-tip {\r\n  margin: 1px 7px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  position: relative;\r\n  margin: 0px;\r\n  cursor: default;\r\n}\r\n.dashboard-helptip {\r\n  margin-left: 3px;\r\n  margin-top: -2px;\r\n  line-height: 9px;\r\n}\r\n.dashboard-helptip:hover i {\r\n  color: #f87b80 !important;\r\n}\r\n.dashboard-helptip.help-tip i {\r\n  color: #bec5c9;\r\n  font-size: 13px;\r\n  line-height: 15px;\r\n  cursor: pointer;\r\n}\r\n.dashboard-helptip .help-checktip {\r\n  top: 16px;\r\n  left: -50px;\r\n  padding: 9px;\r\n  font-family: montserratlight;\r\n  width: 157px;\r\n  font-size: 10px;\r\n  white-space: normal;\r\n  text-align: left;\r\n  text-transform: none;\r\n}\r\n.help-checktip {\r\n  float: left;\r\n  background-color: #61696C;\r\n  color: #fff;\r\n  padding: 3px 4px;\r\n  width: 180px;\r\n  font-size: 10px;\r\n  position: absolute;\r\n  top: 20px;\r\n  border-radius: 0px;\r\n  visibility: hidden;\r\n  box-shadow: 0 3px 7px 0px #919191;\r\n  text-align: center;\r\n  left: -83px;\r\n  line-height: 1.42857143;\r\n}\r\n.help-checktip:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  margin-left: -8px;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-top: 6px solid #61696C;\r\n  border-right: 6px solid transparent;\r\n  border-left: 6px solid transparent;\r\n}\r\n.dashboard-helptip .help-checktip:before {\r\n  border: none;\r\n}\r\n.dashboard-helptip.help-tip:hover > .help-checktip {\r\n  visibility: visible;\r\n  z-index: 999;\r\n}\r\n.user-outr {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding: 0;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n.user-outr li {\r\n  float: left;\r\n}\r\n.user-outr li a {\r\n  float: left;\r\n  width: auto;\r\n  border: 2px solid #dae2e6;\r\n  border-radius: 50%;\r\n  margin-left: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.user-outr li a i {\r\n  font-size: 24px;\r\n}\r\n.user-outr li a:hover {\r\n  border: 2px solid #f56151;\r\n}\r\n.user-outr li a img {\r\n  float: left;\r\n  width: 34px;\r\n  height: 34px;\r\n  border-radius: 50%;\r\n}\r\n.user-outr li a span {\r\n  float: none;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  padding-top: 1px;\r\n  color: #f56151;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n}\r\n.user-outr li a.more-users {\r\n  float: left;\r\n  width: 35px;\r\n  border: 2px solid #dae2e6;\r\n  border-radius: 50%;\r\n  margin-left: 5px;\r\n  margin-bottom: 5px;\r\n  background: #fff;\r\n  color: #dae2e6;\r\n  height: 35px;\r\n  text-align: center;\r\n  padding-top: 3px;\r\n  margin-top: 3px;\r\n}\r\n.user-outr li a.more-users:hover {\r\n  color: #fb545b;\r\n  border: 2px solid #fb545b;\r\n}\r\n.user-outr li a.single-user {\r\n  width: 34px;\r\n  height: 34px;\r\n  float: left;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  padding-top: 6px;\r\n  color: #f56151;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/* Start: popover effect */\r\n.popover-wrapper .more-popover-block {\r\n  position: relative;\r\n  top: 10px;\r\n  left: -96px;\r\n  min-width: 140px;\r\n  padding: 8px;\r\n  font-size: 12px;\r\n  border-radius: 0px;\r\n  background: #62696d;  /* color: #fff; */\r\n  border-radius: 4px !important;\r\n  border: none;\r\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\r\n  display: none;\r\n  z-index: 9;\r\n}\r\n.popover-wrapper:hover .more-popover-block {\r\n  display: block;\r\n  float: left;\r\n  padding: 0;\r\n}\r\n.popover-wrapper .more-popover-block:before {\r\n  position: absolute;\r\n  top: -8px;\r\n  right: 23px;\r\n  display: inline-block;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 8px solid #62696d;\r\n  border-left: 6px solid transparent;\r\n  border-bottom-color: #62696d;\r\n  content: '';\r\n}\r\n.popover-wrapper .single-user.more-popover-block {\r\n  position: relative;\r\n  top: 18px;\r\n  left: -36px;\r\n  min-width: 100px;\r\n  max-width: 100px;\r\n  padding: 8px;\r\n  font-size: 12px;\r\n  border-radius: 0px;\r\n  background: #62696d;  /* color: #fff; */\r\n  border-radius: 4px !important;\r\n  border: none;\r\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\r\n  display: none;\r\n  z-index: 9;\r\n}\r\n.popover-wrapper:hover .single-user.more-popover-block {\r\n  display: block;\r\n  float: left;\r\n  padding: 0;\r\n}\r\n.popover-wrapper .single-user.more-popover-block:before {\r\n  position: absolute;\r\n  top: -8px;\r\n  right: 42px;\r\n  display: inline-block;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 8px solid #62696d;\r\n  border-left: 6px solid transparent;\r\n  border-bottom-color: #62696d;\r\n  content: '';\r\n}\r\n.popover-wrapper .single-user.more-popover-block p {\r\n  float: left;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  margin: 0;\r\n  padding: 6px;\r\n  padding-bottom: 0;\r\n}\r\n.popover-wrapper .single-user.more-popover-block label {\r\n  float: left;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 11px;\r\n  text-align: center;\r\n  padding: 6px;\r\n  padding-top: 0;\r\n}\r\n\r\n/* End: popover effect */\r\n.more-users .more-popover-block ul {\r\n  float: left;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.more-users .more-popover-block ul li {\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.more-users .more-popover-block ul li a {\r\n  float: left;\r\n  border: none;\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin: 0;\r\n}\r\n.more-users .more-popover-block ul li a.hvr-sweep-to-right:before {\r\n  background: #71787b;\r\n}\r\n.more-users .more-popover-block ul li a span {\r\n  float: left;\r\n  border: none;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  background: #f6f8f9;\r\n  font-size: 14px;\r\n  padding-top: 5px;\r\n}\r\n.more-users .more-popover-block ul li a .more-users-list {\r\n  float: left;\r\n  width: 66%;\r\n  margin-left: 10px;\r\n}\r\n.more-users .more-popover-block ul li a .more-users-list p {\r\n  float: left;\r\n  width: 100%;\r\n  text-align: left;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  margin: 0;\r\n}\r\n.more-users .more-popover-block ul li a .more-users-list label {\r\n  float: left;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 11px;\r\n  text-align: left;\r\n}\r\n.user-outr li a.add-user {\r\n  float: left;\r\n  width: 35px;\r\n  border: 2px solid #fb545b;\r\n  border-radius: 50%;\r\n  margin-left: 5px;\r\n  margin-bottom: 5px;\r\n  background: #fb545b;\r\n  color: #fff;\r\n  height: 35px;\r\n  text-align: center;\r\n  padding-top: 3px;\r\n  margin-top: 3px;\r\n}\r\n.dash-boxes-outr {\r\n  float: left;\r\n  width: 100%;\r\n  border-top: 1px solid #dae2e6;\r\n  padding: 35px;\r\n  background: #f6f8f9;\r\n  min-height: 77vh;\r\n}\r\n.dash-box {\r\n  border: 1px solid #dae2e6;\r\n  min-height: 250px;\r\n  float: left;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  margin-bottom: 30px;\r\n  position: relative;\r\n}\r\n.dash-box:hover {\r\n  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n.dash-box .banner {\r\n  background: #259FDB;\r\n  color: #fff;\r\n  height: 24px;\r\n  padding: 5px;\r\n  position: absolute;\r\n  top: -10px;\r\n  right: -8px;\r\n  padding-left: 0;\r\n  padding-right: 12px;\r\n  z-index: 99;\r\n  text-transform: uppercase;\r\n  font-size: 11px;\r\n  box-shadow: -14px 5px 6px -1px rgba(0, 0, 0, 0.4)\r\n}\r\n.dash-box .banner:before {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: -8px;\r\n  right: 0;\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 0px solid transparent;\r\n  border-bottom: 8px solid transparent;\r\n  border-left: 8px solid #656565;\r\n}\r\n.dash-box .banner:after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0px;\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 8px solid transparent;\r\n  border-right: 8px solid transparent;\r\n  z-index: 0;\r\n}\r\n.dash-box .banner span {\r\n  border: 12px solid #259FDB;\r\n  position: absolute;\r\n  left: -20px;\r\n  border-right-width: 0;\r\n  border-left-color: transparent;\r\n  top: 0px;\r\n  width: 20px;\r\n}\r\n.dash-box .help-checktip {\r\n  float: left;\r\n  background-color: #61696C;\r\n  color: #fff;\r\n  padding: 3px 4px;\r\n  width: 180px;\r\n  font-size: 10px;\r\n  position: absolute;\r\n  top: 34px;\r\n  border-radius: 0px;\r\n  visibility: hidden;\r\n  box-shadow: 0 3px 7px 0px #919191;\r\n  text-align: center;\r\n  left: -80px;\r\n  line-height: 1.42857143;\r\n  text-transform: none;\r\n}\r\n.dash-box .banner:hover .help-checktip {\r\n  visibility: visible;\r\n}\r\n.dash-box .help-checktip:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -26%;\r\n  left: 100px;\r\n  margin-left: 0;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-top: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 6px solid #61696C;\r\n  border-left: 6px solid transparent;\r\n}\r\n.dash-box figure {\r\n  height: 187px;\r\n  overflow: hidden;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: -1;\r\n}\r\n.dash-box-top {\r\n  background-image: url(app/site/components/+dashboard/images/dash-top.jpg);\r\n  background-size: cover;\r\n  background-position: center center;\r\n  float: left;\r\n  width: 100%;\r\n  min-height: 187px;\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n}\r\n.dash-box:hover .dash-box-top {\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n}\r\n.dash-box-bottom {\r\n  padding: 28px;\r\n  width: 100%;\r\n  float: left;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  background: #fff;\r\n}\r\n.dash-box-bottom ul {\r\n  padding: 0px;\r\n  float: left;\r\n}\r\n.dash-box-bottom ul li {\r\n  float: left;\r\n  width: 100%;\r\n  margin-top: 22px;\r\n}\r\n.dash-box-bottom ul li i {\r\n  float: left;\r\n  color: #ccc;\r\n  font-size: 24px;\r\n  padding-right: 20px;\r\n}\r\n.switch-outr {\r\n  float: right;\r\n}\r\n.dash-box-bottom ul li label.text {\r\n  font-size: 13px;\r\n  color: #999999;\r\n  float: left;\r\n  text-transform: uppercase;\r\n  margin-top: 3px;\r\n  margin-bottom: 0px;\r\n  font-weight: normal;\r\n}\r\n.dash-box-bottom ul li span.value {\r\n  font-size: 20px;\r\n  color: #fb545b;\r\n  float: right;\r\n  text-align: right;\r\n}\r\n.dash-box2 {\r\n  float: left;\r\n  width: 100%;\r\n  min-height: 406px;\r\n  cursor: pointer;\r\n  margin-bottom: 30px;\r\n}\r\n.dash-box2:hover {\r\n  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);\r\n}\r\n.dash-box2 figure {\r\n  height: 187px;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 93%;\r\n  z-index: -1;\r\n}\r\n.dash-box-figure2 {\r\n  min-height: 336px;\r\n}\r\n.dash-top2 {\r\n  background-image: url(app/site/components/+dashboard/images/dash-top2.jpg);\r\n  background-size: cover;\r\n  float: left;\r\n  width: 100%;\r\n  min-height: 336px;\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n}\r\n.dash-box2:hover .dash-top2 {\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n}\r\n.dash-top2-text {\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.dash-top2-textinner {\r\n  float: left;\r\n  padding: 28px;\r\n  position: absolute;\r\n  min-height: 187px;\r\n  top: 0px;\r\n  width: 100%;\r\n  background: rgba(0, 0, 0, 0.3) none repeat scroll 0 0;\r\n}\r\n.dash-top2-textinner label {\r\n  float: left;\r\n  width: auto;\r\n  color: #ffffff;\r\n  font-size: 12px;\r\n  line-height: normal;\r\n  font-family: 'montserratlight';\r\n}\r\n.dash-top2-textinner i {\r\n  position: relative;\r\n  float: left;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  margin-left: 5px;\r\n}\r\n.dash-top2-textinner h3 {\r\n  float: left;\r\n  width: 94%;\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  line-height: 22px;\r\n  margin-top: 0px;\r\n  display: block;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  margin-bottom: 20px;\r\n}\r\n.dash-top3 {\r\n  background: rgb(248, 248, 248); /* Old browsers */ /* FF3.6-15 */\r\n  background: -webkit-linear-gradient(top, rgba(248, 248, 248, 1) 0%, rgba(240, 240, 240, 1) 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom, rgba(248, 248, 248, 1) 0%, rgba(240, 240, 240, 1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f8f8f8', endColorstr='#f0f0f0', GradientType=0); /* IE6-9 */\r\n  width: 100%;\r\n  min-height: 411px;\r\n  display: table;\r\n}\r\n.dash-top3:hover .dash-top3circletable {\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n}\r\n.dash-top3circletable {\r\n  width: 100%;\r\n  float: none;\r\n  text-align: center;\r\n  display: table-cell;\r\n  height: 409px;\r\n  vertical-align: middle;\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n}\r\n.dash-top3-circle {\r\n  background: #fcfcfc;\r\n  height: 151px;\r\n  width: 151px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  color: #999999;\r\n  font-size: 13px;\r\n  line-height: normal;\r\n  display: inline-block;\r\n  padding-top: 46px;\r\n  font-family: montserratregular;\r\n}\r\n.dash-top3-circle:hover, .dash-top3-circle:focus {\r\n  color: #fb545b;\r\n}\r\n.dash-top3-circle i {\r\n  display: block;\r\n  color: #fb545b !important;\r\n  font-size: 24px;\r\n  margin-bottom: 7px;\r\n  width: 100%;\r\n}\r\n.dash-top3-textinner {\r\n  float: left;\r\n  width: 100%;\r\n  padding: 28px;\r\n}\r\n.dash-top3-textinner label {\r\n  float: left;\r\n  width: auto;\r\n  color: #62696d;\r\n  font-size: 12px;\r\n  line-height: normal;\r\n  font-family: 'montserratlight';\r\n}\r\n.dash-top3-textinner i {\r\n  position: relative;\r\n  float: left;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  margin-left: 5px;\r\n}\r\n.dash-top3-textinner h3 {\r\n  float: left;\r\n  width: 100%;\r\n  color: #62696d;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  line-height: 22px;\r\n  margin-top: 0px;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper {\r\n  margin: 0px;\r\n  margin-left: 5px;\r\n  float: left;\r\n  min-height: 35px;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\r\n  font-size: 18px;\r\n  color: #fff;\r\n  padding: 0;\r\n  position: relative;\r\n  top: 5px;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\r\n  color: #fff;\r\n  padding: 5px 15px 10px;\r\n  text-transform: capitalize;\r\n  font-family: montserratregular;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle {\r\n  line-height: normal !important;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\r\n  color: #f56151;\r\n  font-size: 20px;\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i:hover {\r\n  color: #f87b80;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle span.company-dropdown-title-active {\r\n  width: 90%;\r\n  float: left;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\r\n  right: 91px;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.hvr-sweep-to-right::before {\r\n  background: #71787b none repeat scroll 0 0;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n  top: 27px;\r\n  left: -80px;\r\n  min-width: 190px;\r\n  font-size: 12px;\r\n  border-radius: 0px;  /* background: #f87b80; */\r\n\r\n  /* color: #fff; */\r\n  background: #62696d;\r\n  border-radius: 4px !important;\r\n  border: none;\r\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\r\n  display: none;\r\n  z-index: 9;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper:hover .dropdown-menu {\r\n  display: block;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a {\r\n  color: #fff;\r\n  padding: 10px 15px;\r\n  text-transform: capitalize;\r\n  font-family: montserratregular;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-block {\r\n  float: left;\r\n  width: 10%;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\r\n  background: #fff;\r\n  border-radius: 50px;\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  color: #62696d;\r\n  text-align: center;\r\n  padding-top: 3px;\r\n  font-size: 11px;\r\n  top: 13px;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\r\n  background: #fff;\r\n  border-radius: 50px;\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  color: #62696d;\r\n  text-align: center;\r\n  padding-top: 3px;\r\n  font-size: 11px;\r\n  top: 13px;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\r\n  float: left;\r\n  width: 95%;\r\n}\r\n.company-dropdown-wrapper .dropdown-menu > li > a .company-site {\r\n  float: left;\r\n  width: 95%;\r\n  font-size: 10px;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper {\r\n  float: right;\r\n  margin: 0;\r\n  width: 6%;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-toggle {\r\n  line-height: normal;\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-toggle span {\r\n  color: #fff;\r\n  line-height: normal;\r\n  width: 90% !important;\r\n  float: left;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu {\r\n  left: -67px;\r\n  min-width: 155px;\r\n  padding: 10px 0;\r\n  top: 28px;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu::before {\r\n  right: 65px;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu li a {\r\n  width: 100%;\r\n  float: left;\r\n  padding: 5px 10px;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu li a.hvr-sweep-to-right::before {\r\n  background: #71787b none repeat scroll 0 0;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block {\r\n  float: left;\r\n  margin-right: 3px;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block i {\r\n  font-size: 16px;\r\n  color: #fff !important;\r\n  margin: 0px;\r\n  margin-right: 10px;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block-content {\r\n  float: left;\r\n  margin: 0px;\r\n  width: 78%;\r\n  color: #fff;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block-content .company-title {\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.dash-top2-textinner .das-box-menu {\r\n  float: right;\r\n  position: relative;\r\n}\r\n.dash-top2-textinner .company-dropdown-title-active {\r\n  color: #fff;\r\n  line-height: normal;\r\n  font-size: 12px;\r\n  font-family: montserratlight;\r\n  width: 90% !important;\r\n  float: left;\r\n}\r\n.dash-pullout-new {\r\n  float: right;\r\n  width: 6%;\r\n  position: relative;\r\n  padding-bottom: 10px;\r\n}\r\n.dash-pullout-new:hover .new-dropdown-menu {\r\n  display: block;\r\n}\r\n.new-dropdown-menu {\r\n  position: absolute;\r\n  left: -64px;\r\n  top: 32px;\r\n  float: left;\r\n  background: #62696d;\r\n  color: #fff;\r\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\r\n  display: none;\r\n  padding: 10px 0;\r\n  z-index: 9;\r\n  border-radius: 4px !important;\r\n  min-width: 155px;\r\n}\r\n.new-dropdown-menu:before {\r\n  position: absolute;\r\n  top: -12px;\r\n  left: 70px;\r\n  display: inline-block;\r\n  border-right: 8px solid transparent;\r\n  border-bottom: 12px solid #62696d;\r\n  border-left: 8px solid transparent;\r\n  border-bottom-color: #62696d;\r\n  content: '';\r\n}\r\n.new-dropdown-menu a {\r\n  width: 100%;\r\n  float: left;\r\n  padding: 5px 10px;\r\n}\r\n.new-dropdown-menu a.hvr-sweep-to-right:before {\r\n  background: #71787b none repeat scroll 0 0;\r\n}\r\n.new-dropdown-menu a .company-block {\r\n  float: left;\r\n  margin-right: 3px;\r\n}\r\n.new-dropdown-menu a .company-block i {\r\n  font-size: 16px;\r\n  color: #fff !important;\r\n  margin: 0px;\r\n  margin-right: 10px;\r\n}\r\n.new-dropdown-menu a .company-block-content {\r\n  float: left;\r\n  margin: 0px;\r\n  width: 78%;\r\n  color: #fff;\r\n}\r\n.new-dropdown-menu a .company-block-content .company-title {\r\n  color: #fff;\r\n  line-height: normal;\r\n  width: 90% !important;\r\n  float: left;\r\n  font-size: 12px;\r\n  font-family: montserratlight;\r\n}\r\n\r\n/* switch new css (sahil) */\r\n.onoffswitch {\r\n  position: relative;\r\n  width: 80px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n}\r\n.onoffswitch-checkbox {\r\n  display: none;\r\n}\r\n.onoffswitch-label {\r\n  display: block;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  border-radius: 20px;\r\n}\r\n.onoffswitch-inner {\r\n  display: block;\r\n  width: 200%;\r\n  margin-left: -100%;\r\n  -webkit-transition: margin 0.3s ease-in 0s;\r\n  transition: margin 0.3s ease-in 0s;\r\n}\r\n.onoffswitch-inner:before, .onoffswitch-inner:after {\r\n  display: block;\r\n  float: left;\r\n  width: 50%;\r\n  height: 20px;\r\n  padding: 0;\r\n  line-height: 20px;\r\n  font-size: 13px;\r\n  color: white;\r\n  box-sizing: border-box;\r\n}\r\n.onoffswitch-inner:before {\r\n  content: \"Public\";\r\n  padding-left: 10px;\r\n  background-color: #f87b80;\r\n  color: #FFFFFF;\r\n  font-weight: normal;\r\n}\r\n.onoffswitch-inner:after {\r\n  content: \"Private\";\r\n  padding-right: 10px;\r\n  background-color: #EEEEEE;\r\n  color: #999999;\r\n  text-align: right;\r\n}\r\n.onoffswitch-switch {\r\n  display: block;\r\n  width: 14px;\r\n  height: 14px;\r\n  margin: 3px;\r\n  background: #FFFFFF;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 56px;\r\n  border-radius: 20px;\r\n  -webkit-transition: all 0.3s ease-in 0s;\r\n  transition: all 0.3s ease-in 0s;\r\n}\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\r\n  margin-left: 0;\r\n}\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\r\n  right: 0px;\r\n}\r\n\r\n/* switch new css end (sahil) */\r\n\r\n/* Circluar progress css start (sahil) */\r\n.rect-auto, .c100.p51 .slice, .c100.p52 .slice, .c100.p53 .slice, .c100.p54 .slice, .c100.p55 .slice, .c100.p56 .slice, .c100.p57 .slice, .c100.p58 .slice, .c100.p59 .slice, .c100.p60 .slice, .c100.p61 .slice, .c100.p62 .slice, .c100.p63 .slice, .c100.p64 .slice, .c100.p65 .slice, .c100.p66 .slice, .c100.p67 .slice, .c100.p68 .slice, .c100.p69 .slice, .c100.p70 .slice, .c100.p71 .slice, .c100.p72 .slice, .c100.p73 .slice, .c100.p74 .slice, .c100.p75 .slice, .c100.p76 .slice, .c100.p77 .slice, .c100.p78 .slice, .c100.p79 .slice, .c100.p80 .slice, .c100.p81 .slice, .c100.p82 .slice, .c100.p83 .slice, .c100.p84 .slice, .c100.p85 .slice, .c100.p86 .slice, .c100.p87 .slice, .c100.p88 .slice, .c100.p89 .slice, .c100.p90 .slice, .c100.p91 .slice, .c100.p92 .slice, .c100.p93 .slice, .c100.p94 .slice, .c100.p95 .slice, .c100.p96 .slice, .c100.p97 .slice, .c100.p98 .slice, .c100.p99 .slice, .c100.p100 .slice {\r\n  clip: rect(auto, auto, auto, auto);\r\n}\r\n.pie, .c100 .bar, .c100.p51 .fill, .c100.p52 .fill, .c100.p53 .fill, .c100.p54 .fill, .c100.p55 .fill, .c100.p56 .fill, .c100.p57 .fill, .c100.p58 .fill, .c100.p59 .fill, .c100.p60 .fill, .c100.p61 .fill, .c100.p62 .fill, .c100.p63 .fill, .c100.p64 .fill, .c100.p65 .fill, .c100.p66 .fill, .c100.p67 .fill, .c100.p68 .fill, .c100.p69 .fill, .c100.p70 .fill, .c100.p71 .fill, .c100.p72 .fill, .c100.p73 .fill, .c100.p74 .fill, .c100.p75 .fill, .c100.p76 .fill, .c100.p77 .fill, .c100.p78 .fill, .c100.p79 .fill, .c100.p80 .fill, .c100.p81 .fill, .c100.p82 .fill, .c100.p83 .fill, .c100.p84 .fill, .c100.p85 .fill, .c100.p86 .fill, .c100.p87 .fill, .c100.p88 .fill, .c100.p89 .fill, .c100.p90 .fill, .c100.p91 .fill, .c100.p92 .fill, .c100.p93 .fill, .c100.p94 .fill, .c100.p95 .fill, .c100.p96 .fill, .c100.p97 .fill, .c100.p98 .fill, .c100.p99 .fill, .c100.p100 .fill {\r\n  position: absolute;\r\n  border: 0.08em solid #307bbb;\r\n  width: 0.84em;\r\n  height: 0.84em;\r\n  clip: rect(0em, 0.5em, 1em, 0em);\r\n  border-radius: 50%;\r\n  -webkit-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n}\r\n.pie-fill, .c100.p51 .bar:after, .c100.p51 .fill, .c100.p52 .bar:after, .c100.p52 .fill, .c100.p53 .bar:after, .c100.p53 .fill, .c100.p54 .bar:after, .c100.p54 .fill, .c100.p55 .bar:after, .c100.p55 .fill, .c100.p56 .bar:after, .c100.p56 .fill, .c100.p57 .bar:after, .c100.p57 .fill, .c100.p58 .bar:after, .c100.p58 .fill, .c100.p59 .bar:after, .c100.p59 .fill, .c100.p60 .bar:after, .c100.p60 .fill, .c100.p61 .bar:after, .c100.p61 .fill, .c100.p62 .bar:after, .c100.p62 .fill, .c100.p63 .bar:after, .c100.p63 .fill, .c100.p64 .bar:after, .c100.p64 .fill, .c100.p65 .bar:after, .c100.p65 .fill, .c100.p66 .bar:after, .c100.p66 .fill, .c100.p67 .bar:after, .c100.p67 .fill, .c100.p68 .bar:after, .c100.p68 .fill, .c100.p69 .bar:after, .c100.p69 .fill, .c100.p70 .bar:after, .c100.p70 .fill, .c100.p71 .bar:after, .c100.p71 .fill, .c100.p72 .bar:after, .c100.p72 .fill, .c100.p73 .bar:after, .c100.p73 .fill, .c100.p74 .bar:after, .c100.p74 .fill, .c100.p75 .bar:after, .c100.p75 .fill, .c100.p76 .bar:after, .c100.p76 .fill, .c100.p77 .bar:after, .c100.p77 .fill, .c100.p78 .bar:after, .c100.p78 .fill, .c100.p79 .bar:after, .c100.p79 .fill, .c100.p80 .bar:after, .c100.p80 .fill, .c100.p81 .bar:after, .c100.p81 .fill, .c100.p82 .bar:after, .c100.p82 .fill, .c100.p83 .bar:after, .c100.p83 .fill, .c100.p84 .bar:after, .c100.p84 .fill, .c100.p85 .bar:after, .c100.p85 .fill, .c100.p86 .bar:after, .c100.p86 .fill, .c100.p87 .bar:after, .c100.p87 .fill, .c100.p88 .bar:after, .c100.p88 .fill, .c100.p89 .bar:after, .c100.p89 .fill, .c100.p90 .bar:after, .c100.p90 .fill, .c100.p91 .bar:after, .c100.p91 .fill, .c100.p92 .bar:after, .c100.p92 .fill, .c100.p93 .bar:after, .c100.p93 .fill, .c100.p94 .bar:after, .c100.p94 .fill, .c100.p95 .bar:after, .c100.p95 .fill, .c100.p96 .bar:after, .c100.p96 .fill, .c100.p97 .bar:after, .c100.p97 .fill, .c100.p98 .bar:after, .c100.p98 .fill, .c100.p99 .bar:after, .c100.p99 .fill, .c100.p100 .bar:after, .c100.p100 .fill {\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n.c100 {\r\n  position: relative;\r\n  font-size: 120px;\r\n  width: 1em;\r\n  height: 1em;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin: 0 0.1em 0.1em 0;\r\n  background-color: #cccccc;\r\n}\r\n.c100 *, .c100 *:before, .c100 *:after {\r\n  box-sizing: content-box;\r\n}\r\n.c100.center {\r\n  float: none;\r\n  margin: 0 auto;\r\n}\r\n.c100.big {\r\n  font-size: 240px;\r\n}\r\n.c100.small {\r\n  font-size: 80px;\r\n}\r\n.c100 > span {\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 5em;\r\n  line-height: 5em;\r\n  font-size: 0.2em;\r\n  color: #cccccc;\r\n  display: block;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  -webkit-transition-property: all;\r\n  transition-property: all;\r\n  -webkit-transition-duration: 0.2s;\r\n  transition-duration: 0.2s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.c100:after {\r\n  position: absolute;\r\n  top: 0.08em;\r\n  left: 0.08em;\r\n  display: block;\r\n  content: \" \";\r\n  border-radius: 50%;\r\n  background-color: #f5f5f5;\r\n  width: 0.84em;\r\n  height: 0.84em;\r\n  -webkit-transition-property: all;\r\n  transition-property: all;\r\n  -webkit-transition-duration: 0.2s;\r\n  transition-duration: 0.2s;\r\n  -webkit-transition-timing-function: ease-in;\r\n  transition-timing-function: ease-in;\r\n}\r\n.c100 .slice {\r\n  position: absolute;\r\n  width: 1em;\r\n  height: 1em;\r\n  clip: rect(0em, 1em, 1em, 0.5em);\r\n}\r\n.c100.p1 .bar {\r\n  -webkit-transform: rotate(3.6deg);\r\n  transform: rotate(3.6deg);\r\n}\r\n.c100.p2 .bar {\r\n  -webkit-transform: rotate(7.2deg);\r\n  transform: rotate(7.2deg);\r\n}\r\n.c100.p3 .bar {\r\n  -webkit-transform: rotate(10.8deg);\r\n  transform: rotate(10.8deg);\r\n}\r\n.c100.p4 .bar {\r\n  -webkit-transform: rotate(14.4deg);\r\n  transform: rotate(14.4deg);\r\n}\r\n.c100.p5 .bar {\r\n  -webkit-transform: rotate(18deg);\r\n  transform: rotate(18deg);\r\n}\r\n.c100.p6 .bar {\r\n  -webkit-transform: rotate(21.6deg);\r\n  transform: rotate(21.6deg);\r\n}\r\n.c100.p7 .bar {\r\n  -webkit-transform: rotate(25.2deg);\r\n  transform: rotate(25.2deg);\r\n}\r\n.c100.p8 .bar {\r\n  -webkit-transform: rotate(28.8deg);\r\n  transform: rotate(28.8deg);\r\n}\r\n.c100.p9 .bar {\r\n  -webkit-transform: rotate(32.4deg);\r\n  transform: rotate(32.4deg);\r\n}\r\n.c100.p10 .bar {\r\n  -webkit-transform: rotate(36deg);\r\n  transform: rotate(36deg);\r\n}\r\n.c100.p11 .bar {\r\n  -webkit-transform: rotate(39.6deg);\r\n  transform: rotate(39.6deg);\r\n}\r\n.c100.p12 .bar {\r\n  -webkit-transform: rotate(43.2deg);\r\n  transform: rotate(43.2deg);\r\n}\r\n.c100.p13 .bar {\r\n  -webkit-transform: rotate(46.800000000000004deg);\r\n  transform: rotate(46.800000000000004deg);\r\n}\r\n.c100.p14 .bar {\r\n  -webkit-transform: rotate(50.4deg);\r\n  transform: rotate(50.4deg);\r\n}\r\n.c100.p15 .bar {\r\n  -webkit-transform: rotate(54deg);\r\n  transform: rotate(54deg);\r\n}\r\n.c100.p16 .bar {\r\n  -webkit-transform: rotate(57.6deg);\r\n  transform: rotate(57.6deg);\r\n}\r\n.c100.p17 .bar {\r\n  -webkit-transform: rotate(61.2deg);\r\n  transform: rotate(61.2deg);\r\n}\r\n.c100.p18 .bar {\r\n  -webkit-transform: rotate(64.8deg);\r\n  transform: rotate(64.8deg);\r\n}\r\n.c100.p19 .bar {\r\n  -webkit-transform: rotate(68.4deg);\r\n  transform: rotate(68.4deg);\r\n}\r\n.c100.p20 .bar {\r\n  -webkit-transform: rotate(72deg);\r\n  transform: rotate(72deg);\r\n}\r\n.c100.p21 .bar {\r\n  -webkit-transform: rotate(75.60000000000001deg);\r\n  transform: rotate(75.60000000000001deg);\r\n}\r\n.c100.p22 .bar {\r\n  -webkit-transform: rotate(79.2deg);\r\n  transform: rotate(79.2deg);\r\n}\r\n.c100.p23 .bar {\r\n  -webkit-transform: rotate(82.8deg);\r\n  transform: rotate(82.8deg);\r\n}\r\n.c100.p24 .bar {\r\n  -webkit-transform: rotate(86.4deg);\r\n  transform: rotate(86.4deg);\r\n}\r\n.c100.p25 .bar {\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n.c100.p26 .bar {\r\n  -webkit-transform: rotate(93.60000000000001deg);\r\n  transform: rotate(93.60000000000001deg);\r\n}\r\n.c100.p27 .bar {\r\n  -webkit-transform: rotate(97.2deg);\r\n  transform: rotate(97.2deg);\r\n}\r\n.c100.p28 .bar {\r\n  -webkit-transform: rotate(100.8deg);\r\n  transform: rotate(100.8deg);\r\n}\r\n.c100.p29 .bar {\r\n  -webkit-transform: rotate(104.4deg);\r\n  transform: rotate(104.4deg);\r\n}\r\n.c100.p30 .bar {\r\n  -webkit-transform: rotate(108deg);\r\n  transform: rotate(108deg);\r\n}\r\n.c100.p31 .bar {\r\n  -webkit-transform: rotate(111.60000000000001deg);\r\n  transform: rotate(111.60000000000001deg);\r\n}\r\n.c100.p32 .bar {\r\n  -webkit-transform: rotate(115.2deg);\r\n  transform: rotate(115.2deg);\r\n}\r\n.c100.p33 .bar {\r\n  -webkit-transform: rotate(118.8deg);\r\n  transform: rotate(118.8deg);\r\n}\r\n.c100.p34 .bar {\r\n  -webkit-transform: rotate(122.4deg);\r\n  transform: rotate(122.4deg);\r\n}\r\n.c100.p35 .bar {\r\n  -webkit-transform: rotate(126deg);\r\n  transform: rotate(126deg);\r\n}\r\n.c100.p36 .bar {\r\n  -webkit-transform: rotate(129.6deg);\r\n  transform: rotate(129.6deg);\r\n}\r\n.c100.p37 .bar {\r\n  -webkit-transform: rotate(133.20000000000002deg);\r\n  transform: rotate(133.20000000000002deg);\r\n}\r\n.c100.p38 .bar {\r\n  -webkit-transform: rotate(136.8deg);\r\n  transform: rotate(136.8deg);\r\n}\r\n.c100.p39 .bar {\r\n  -webkit-transform: rotate(140.4deg);\r\n  transform: rotate(140.4deg);\r\n}\r\n.c100.p40 .bar {\r\n  -webkit-transform: rotate(144deg);\r\n  transform: rotate(144deg);\r\n}\r\n.c100.p41 .bar {\r\n  -webkit-transform: rotate(147.6deg);\r\n  transform: rotate(147.6deg);\r\n}\r\n.c100.p42 .bar {\r\n  -webkit-transform: rotate(151.20000000000002deg);\r\n  transform: rotate(151.20000000000002deg);\r\n}\r\n.c100.p43 .bar {\r\n  -webkit-transform: rotate(154.8deg);\r\n  transform: rotate(154.8deg);\r\n}\r\n.c100.p44 .bar {\r\n  -webkit-transform: rotate(158.4deg);\r\n  transform: rotate(158.4deg);\r\n}\r\n.c100.p45 .bar {\r\n  -webkit-transform: rotate(162deg);\r\n  transform: rotate(162deg);\r\n}\r\n.c100.p46 .bar {\r\n  -webkit-transform: rotate(165.6deg);\r\n  transform: rotate(165.6deg);\r\n}\r\n.c100.p47 .bar {\r\n  -webkit-transform: rotate(169.20000000000002deg);\r\n  transform: rotate(169.20000000000002deg);\r\n}\r\n.c100.p48 .bar {\r\n  -webkit-transform: rotate(172.8deg);\r\n  transform: rotate(172.8deg);\r\n}\r\n.c100.p49 .bar {\r\n  -webkit-transform: rotate(176.4deg);\r\n  transform: rotate(176.4deg);\r\n}\r\n.c100.p50 .bar {\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n.c100.p51 .bar {\r\n  -webkit-transform: rotate(183.6deg);\r\n  transform: rotate(183.6deg);\r\n}\r\n.c100.p52 .bar {\r\n  -webkit-transform: rotate(187.20000000000002deg);\r\n  transform: rotate(187.20000000000002deg);\r\n}\r\n.c100.p53 .bar {\r\n  -webkit-transform: rotate(190.8deg);\r\n  transform: rotate(190.8deg);\r\n}\r\n.c100.p54 .bar {\r\n  -webkit-transform: rotate(194.4deg);\r\n  transform: rotate(194.4deg);\r\n}\r\n.c100.p55 .bar {\r\n  -webkit-transform: rotate(198deg);\r\n  transform: rotate(198deg);\r\n}\r\n.c100.p56 .bar {\r\n  -webkit-transform: rotate(201.6deg);\r\n  transform: rotate(201.6deg);\r\n}\r\n.c100.p57 .bar {\r\n  -webkit-transform: rotate(205.20000000000002deg);\r\n  transform: rotate(205.20000000000002deg);\r\n}\r\n.c100.p58 .bar {\r\n  -webkit-transform: rotate(208.8deg);\r\n  transform: rotate(208.8deg);\r\n}\r\n.c100.p59 .bar {\r\n  -webkit-transform: rotate(212.4deg);\r\n  transform: rotate(212.4deg);\r\n}\r\n.c100.p60 .bar {\r\n  -webkit-transform: rotate(216deg);\r\n  transform: rotate(216deg);\r\n}\r\n.c100.p61 .bar {\r\n  -webkit-transform: rotate(219.6deg);\r\n  transform: rotate(219.6deg);\r\n}\r\n.c100.p62 .bar {\r\n  -webkit-transform: rotate(223.20000000000002deg);\r\n  transform: rotate(223.20000000000002deg);\r\n}\r\n.c100.p63 .bar {\r\n  -webkit-transform: rotate(226.8deg);\r\n  transform: rotate(226.8deg);\r\n}\r\n.c100.p64 .bar {\r\n  -webkit-transform: rotate(230.4deg);\r\n  transform: rotate(230.4deg);\r\n}\r\n.c100.p65 .bar {\r\n  -webkit-transform: rotate(234deg);\r\n  transform: rotate(234deg);\r\n}\r\n.c100.p66 .bar {\r\n  -webkit-transform: rotate(237.6deg);\r\n  transform: rotate(237.6deg);\r\n}\r\n.c100.p67 .bar {\r\n  -webkit-transform: rotate(241.20000000000002deg);\r\n  transform: rotate(241.20000000000002deg);\r\n}\r\n.c100.p68 .bar {\r\n  -webkit-transform: rotate(244.8deg);\r\n  transform: rotate(244.8deg);\r\n}\r\n.c100.p69 .bar {\r\n  -webkit-transform: rotate(248.4deg);\r\n  transform: rotate(248.4deg);\r\n}\r\n.c100.p70 .bar {\r\n  -webkit-transform: rotate(252deg);\r\n  transform: rotate(252deg);\r\n}\r\n.c100.p71 .bar {\r\n  -webkit-transform: rotate(255.6deg);\r\n  transform: rotate(255.6deg);\r\n}\r\n.c100.p72 .bar {\r\n  -webkit-transform: rotate(259.2deg);\r\n  transform: rotate(259.2deg);\r\n}\r\n.c100.p73 .bar {\r\n  -webkit-transform: rotate(262.8deg);\r\n  transform: rotate(262.8deg);\r\n}\r\n.c100.p74 .bar {\r\n  -webkit-transform: rotate(266.40000000000003deg);\r\n  transform: rotate(266.40000000000003deg);\r\n}\r\n.c100.p75 .bar {\r\n  -webkit-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n}\r\n.c100.p76 .bar {\r\n  -webkit-transform: rotate(273.6deg);\r\n  transform: rotate(273.6deg);\r\n}\r\n.c100.p77 .bar {\r\n  -webkit-transform: rotate(277.2deg);\r\n  transform: rotate(277.2deg);\r\n}\r\n.c100.p78 .bar {\r\n  -webkit-transform: rotate(280.8deg);\r\n  transform: rotate(280.8deg);\r\n}\r\n.c100.p79 .bar {\r\n  -webkit-transform: rotate(284.40000000000003deg);\r\n  transform: rotate(284.40000000000003deg);\r\n}\r\n.c100.p80 .bar {\r\n  -webkit-transform: rotate(288deg);\r\n  transform: rotate(288deg);\r\n}\r\n.c100.p81 .bar {\r\n  -webkit-transform: rotate(291.6deg);\r\n  transform: rotate(291.6deg);\r\n}\r\n.c100.p82 .bar {\r\n  -webkit-transform: rotate(295.2deg);\r\n  transform: rotate(295.2deg);\r\n}\r\n.c100.p83 .bar {\r\n  -webkit-transform: rotate(298.8deg);\r\n  transform: rotate(298.8deg);\r\n}\r\n.c100.p84 .bar {\r\n  -webkit-transform: rotate(302.40000000000003deg);\r\n  transform: rotate(302.40000000000003deg);\r\n}\r\n.c100.p85 .bar {\r\n  -webkit-transform: rotate(306deg);\r\n  transform: rotate(306deg);\r\n}\r\n.c100.p86 .bar {\r\n  -webkit-transform: rotate(309.6deg);\r\n  transform: rotate(309.6deg);\r\n}\r\n.c100.p87 .bar {\r\n  -webkit-transform: rotate(313.2deg);\r\n  transform: rotate(313.2deg);\r\n}\r\n.c100.p88 .bar {\r\n  -webkit-transform: rotate(316.8deg);\r\n  transform: rotate(316.8deg);\r\n}\r\n.c100.p89 .bar {\r\n  -webkit-transform: rotate(320.40000000000003deg);\r\n  transform: rotate(320.40000000000003deg);\r\n}\r\n.c100.p90 .bar {\r\n  -webkit-transform: rotate(324deg);\r\n  transform: rotate(324deg);\r\n}\r\n.c100.p91 .bar {\r\n  -webkit-transform: rotate(327.6deg);\r\n  transform: rotate(327.6deg);\r\n}\r\n.c100.p92 .bar {\r\n  -webkit-transform: rotate(331.2deg);\r\n  transform: rotate(331.2deg);\r\n}\r\n.c100.p93 .bar {\r\n  -webkit-transform: rotate(334.8deg);\r\n  transform: rotate(334.8deg);\r\n}\r\n.c100.p94 .bar {\r\n  -webkit-transform: rotate(338.40000000000003deg);\r\n  transform: rotate(338.40000000000003deg);\r\n}\r\n.c100.p95 .bar {\r\n  -webkit-transform: rotate(342deg);\r\n  transform: rotate(342deg);\r\n}\r\n.c100.p96 .bar {\r\n  -webkit-transform: rotate(345.6deg);\r\n  transform: rotate(345.6deg);\r\n}\r\n.c100.p97 .bar {\r\n  -webkit-transform: rotate(349.2deg);\r\n  transform: rotate(349.2deg);\r\n}\r\n.c100.p98 .bar {\r\n  -webkit-transform: rotate(352.8deg);\r\n  transform: rotate(352.8deg);\r\n}\r\n.c100.p99 .bar {\r\n  -webkit-transform: rotate(356.40000000000003deg);\r\n  transform: rotate(356.40000000000003deg);\r\n}\r\n.c100.p100 .bar {\r\n  -webkit-transform: rotate(360deg);\r\n  transform: rotate(360deg);\r\n}\r\n.c100:hover {\r\n  cursor: default;\r\n}\r\n.c100:hover > span {\r\n  width: 3.33em;\r\n  line-height: 3.33em;\r\n  font-size: 0.3em;\r\n  color: #307bbb;\r\n}\r\n.c100:hover:after {\r\n  top: 0.04em;\r\n  left: 0.04em;\r\n  width: 0.92em;\r\n  height: 0.92em;\r\n}\r\n.c100.dark {\r\n  background-color: #777777;\r\n}\r\n.c100.dark .bar, .c100.dark .fill {\r\n  border-color: #c6ff00 !important;\r\n}\r\n.c100.dark > span {\r\n  color: #777777;\r\n}\r\n.c100.dark:after {\r\n  background-color: #666666;\r\n}\r\n.c100.dark:hover > span {\r\n  color: #c6ff00;\r\n}\r\n.c100.green .bar, .c100.green .fill {\r\n  border-color: #4db53c !important;\r\n}\r\n.c100.green:hover > span {\r\n  color: #4db53c;\r\n}\r\n.c100.green.dark .bar, .c100.green.dark .fill {\r\n  border-color: #5fd400 !important;\r\n}\r\n.c100.green.dark:hover > span {\r\n  color: #5fd400;\r\n}\r\n.c100.orange .bar, .c100.orange .fill {\r\n  border-color: #dd9d22 !important;\r\n}\r\n.c100.orange:hover > span {\r\n  color: #dd9d22;\r\n}\r\n.c100.orange.dark .bar, .c100.orange.dark .fill {\r\n  border-color: #e08833 !important;\r\n}\r\n.c100.orange.dark:hover > span {\r\n  color: #e08833;\r\n}\r\n.circluar-progress-outr {\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\r\n  margin-top: 10%;\r\n}\r\n.circluar-progress {\r\n  font-size: 200px;\r\n  background: #fcfcfc;\r\n  display: inline-block;\r\n  margin: 0;\r\n  float: none;\r\n}\r\n.circluar-progress.c100:after {\r\n  font-size: 200px;\r\n  background: #fcfcfc;\r\n}\r\n.c100.circluar-progress .bar, .c100.circluar-progress .fill {\r\n  border-color: #fb545b;\r\n}\r\n.circluar-progress.c100 > span {\r\n  color: #fb545b;\r\n  font-size: 36px;\r\n  width: 100%;\r\n  height: 100%;\r\n  line-height: 4.8em;\r\n}\r\n.circluar-progress.c100 .steps {\r\n  color: #999999;\r\n  font-size: 13px;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 54%;\r\n  z-index: 9;\r\n  line-height: 13px;\r\n}\r\n.circluar-progress.c100:hover:after {\r\n  top: 0.08em;\r\n  left: 0.08em;\r\n  width: 0.84em;\r\n  height: 0.84em;\r\n}\r\n\r\n/* Circluar progress css end (sahil) */\r\n\r\n/* Preloader */\r\n\r\n.preloader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #fff;  /* change if the mask should be a color other than white */\r\n  z-index: 9999;  /* makes sure it stays on top */\r\n}\r\n.status {\r\n  width: 200px;\r\n  height: 200px;\r\n  position: absolute;\r\n  left: 50%;  /* centers the loading animation horizontally on the screen */\r\n  top: 50%;  /* centers the loading animation vertically on the screen */\r\n  background-image: url(\"assets/images/loaders/logoAnim.gif\");  /* path to your loading animation */\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  margin: -100px 0 0 -100px;  /* is width and height divided by two */\r\n}\r\n.dash-box-new.dash-box-bottom {\r\n  background: #fff;\r\n  width: 100%;\r\n  border: 1px solid #dae2e6;\r\n  border-top: 0;\r\n  padding: 28px;\r\n  float: left;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n}\r\n.dash-box-new.dash-box-bottom ul {\r\n  width: 100%;\r\n}\r\n.dummy-switch {\r\n  width: 70px;\r\n  height: 20px;\r\n  background: #eee;\r\n  color: #999;\r\n  line-height: 20px;\r\n  font-size: 13px;\r\n  display: block;\r\n  float: right;\r\n  border-radius: 40px;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\n.dummy-switch.red {\r\n  width: 70px;\r\n  height: 20px;\r\n  background: #fb545b;\r\n  color: #fff;\r\n  line-height: 20px;\r\n  font-size: 13px;\r\n  display: block;\r\n  float: right;\r\n  border-radius: 40px;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\n.dummy-switch p {\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.dummy-switch span {\r\n  height: 14px;\r\n  width: 14px;\r\n  border-radius: 50%;\r\n  background: #fff;\r\n  display: inline-block;\r\n  position: relative;\r\n  top: 3px;\r\n  float: left;\r\n  right: 3px;\r\n}\r\n.dash-box-send {\r\n  height: 70px;\r\n  width: 70px;\r\n  background: rgba(255, 255, 255, 0.2);\r\n  border-radius: 50%;\r\n  float: none;\r\n  position: relative;\r\n  text-align: center;\r\n  padding-top: 20px;\r\n  display: inline-block;\r\n}\r\n.dash-box-send i {\r\n  float: none;\r\n  font-size: 32px;\r\n}\r\n.dash-top2-text .dash-box-send {\r\n  top: 60px;\r\n}\r\n\r\n/* duplicate toast */\r\n.dashboard-toast {\r\n  position: fixed;\r\n  display: none;\r\n  bottom: -100px;\r\n  background: #fff;\r\n  color: #62696d;\r\n  left: 60px;\r\n  z-index: 9999;\r\n  width: 344px;\r\n  border: 1px solid #ccc;\r\n  box-shadow: 0 0px 7px 2px rgba(0, 0, 0, 0.2);\r\n}\r\n.dashboard-toast i {\r\n  float: none;\r\n  margin-top: 0px;\r\n  margin-right: 10px;\r\n  width: 40px;\r\n  background: #fb545b;\r\n  color: #fff;  /* padding: 13px 13px; */\r\n  padding-left: 8px;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.dashboard-toast span {\r\n  float: none;\r\n  width: 74%;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.dashboard-toast .btn {\r\n  float: right;\r\n  background: none;\r\n  padding: 0px;\r\n  font-size: 12px;\r\n  color: #bec5c9;\r\n}\r\n.d-toast-btn i {\r\n  background: none;\r\n  font-size: 16px;\r\n  padding: 0px;\r\n  width: auto;\r\n  padding-top: 8px;\r\n  color: #bec5c9;\r\n}\r\n\r\n/*Responsiveness start*/\r\n.mobile-menu {\r\n  display: none;\r\n}\r\n.white-logo {\r\n  display: none !important;\r\n}\r\n.company-list, .name-list {\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\n/* Start: Modal calcquiz */\r\n#calquiz-modal .modal-body {\r\n  display: inline-block;\r\n  padding: 0px;\r\n}\r\n#calquiz-modal .modal-header {\r\n  padding: 13px 17px;\r\n  border-bottom: none;  /*background: #fb6066;*/\r\n  background: #61686e;\r\n  border-radius: 7px 7px 0px 0px;  /*margin-left: -15px;\r\n  margin-right: -15px;\r\n  margin-top: -15px;*/\r\n  text-align: left;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n#calquiz-modal  .step2 input {\r\n  min-height: 38px;\r\n  border: 1px solid #cccccc;\r\n  width: 70%;\r\n  font-size: 14px;\r\n  color: #62696d;\r\n  padding-left: 10px;\r\n  margin-top: 10px;\r\n}\r\n#calquiz-modal .modal-header h5.modal-title {\r\n  color: #fff;\r\n  font-size: 14px;  /*text-transform: none;*/\r\n  text-transform: uppercase;\r\n  font-weight: normal !important;\r\n}\r\n#calquiz-modal .modal-content {\r\n  border-radius: 8px;\r\n}\r\n#calquiz-modal .calquiz-left {\r\n\r\n  /*width:50%;\r\n  padding: 35px 25px 0px 40px;\r\n  display: inline-block; float: left;\r\n  margin: 0px;*/\r\n\r\n  /*padding: 30px;\r\n  float: left;\r\n  padding-top: 50px;*/\r\n  width: 100%;\r\n  float: left;\r\n}\r\n#calquiz-modal .calquiz-left a {\r\n  float: left;\r\n}\r\n#calquiz-modal .calquiz-left i {\r\n  font-size: 36px !important;\r\n  width: auto;  /*color: #989898;\r\n  background: #f3f3f3;\r\n  border-radius: 50%;\r\n  border: 3px solid rgba(251,251,251,0.67);\r\n  height: 80px;\r\n  width: 80px !important;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  padding-top: 18px !important;*/\r\n}\r\n#calquiz-modal .calquiz-left h3 {\r\n  font-size: 18px;\r\n  color: #fb545b;\r\n  float: left;\r\n  width: 90%;\r\n  margin-top: 0px;\r\n}\r\n#calquiz-modal .calquiz-left label {\r\n\r\n  /*font-size: 12px;\r\n  color: #62696d;\r\n  width: 45%;*/\r\n}\r\n#calquiz-modal .calquiz-left p {\r\n  font-size: 10px;\r\n  color: #62696d;\r\n  font-family: montserratlight;\r\n  width: 100%;\r\n  padding-top: 15px;\r\n}\r\n#calquiz-modal .calc-quiz-margin {\r\n\r\n  /*width: 100%;\r\n  float: left;\r\n  text-align: left;\r\n  margin-top: 20px;*/\r\n  width: calc(50% - 60px);\r\n  float: left;\r\n  text-align: left;\r\n  margin-left: 10px;\r\n}\r\n#calquiz-modal .calquiz-left .form-group:first-child {\r\n  margin-top: 23px;\r\n}\r\n.calc-quiz-form {\r\n  padding: 0px 25px;\r\n  margin-top: 23px !important;\r\n}\r\n#calquiz-modal.modal .form-group.label-floating label.control-label, #calquiz-modal.modal .form-group.label-placeholder label.control-label {\r\n  top: -7px;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n}\r\n#calquiz-modal.modal .form-group.label-floating:not(.is-empty) label.control-label {\r\n  font-size: 10px !important;\r\n  left: 25px;\r\n}\r\n#calquiz-modal.modal .form-group.label-floating.is-focused label.control-label {\r\n  top: -20px !important;\r\n  font-size: 10px;\r\n  font-family: montserratregular;\r\n  color: #fb545b !important;\r\n  left: 25px;\r\n}\r\n#calquiz-modal.modal .form-group.label-floating:not(.is-empty) label.control-label {\r\n  top: -20px;\r\n  font-family: montserratregular;\r\n  font-size: 11px;\r\n  text-transform: uppercase;\r\n  color: #8e989f !important;\r\n}\r\n#calquiz-modal .check-icon div {\r\n  line-height: 16;\r\n  display: inherit;\r\n  font-size: 12px;\r\n  color: #62696d;\r\n}\r\n#calquiz-modal .calquiz-right {\r\n\r\n  /*width:50%;\r\n  padding: 35px 25px 0px 40px;\r\n  display: inline-block; */\r\n\r\n  /*padding: 30px;\r\n  float: left;\r\n  padding-bottom: 45px;*/\r\n  width: 100%;\r\n  float: left;\r\n}\r\n#calquiz-modal .calquiz-right a {\r\n  float: left;\r\n}\r\n#calquiz-modal .calquiz-right i {\r\n  font-size: 36px;  /*color: #989898;\r\n  width: auto;\r\n  background: #f3f3f3;\r\n  border-radius: 50%;\r\n  border: 3px solid rgba(251,251,251,0.8);\r\n  height: 80px;\r\n  width: 80px !important;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  padding-top: 16px;\r\n  padding-left: 1px;*/\r\n}\r\n#calquiz-modal .calquiz-right h3 {\r\n  font-size: 18px;\r\n  color: #fb545b;\r\n  float: left;\r\n  width: 90%;\r\n  margin-top: 0px;\r\n}\r\n#calquiz-modal .calquiz-right label {\r\n  font-size: 12px;\r\n  color: #62696d;\r\n  width: 45%;\r\n}\r\n#calquiz-modal .calquiz-right p {\r\n  font-size: 10px;\r\n  color: #62696d;\r\n  font-family: montserratlight;\r\n  width: 45%;\r\n  padding-top: 15px;\r\n}\r\n#calquiz-modal .btn-red {\r\n  color: #fff !important;\r\n  background-color: #fb545b !important;\r\n  border-color: #fb545b !important;\r\n  border-radius: 0 !important;\r\n  font-size: 14px !important;\r\n  padding: 7px 30px !important;\r\n  margin-top: 40px !important;\r\n  -webkit-transition: all 0.3s ease 0s;\r\n  transition: all 0.3s ease 0s;\r\n  margin-right: 0 !important;\r\n  font-family: montserratregular;\r\n  font-weight: normal;\r\n  text-transform: none;\r\n  border-width: 2px;\r\n}\r\n#calquiz-modal .btn.btn-red:hover {\r\n  background: #fdb6b9 !important;\r\n  color: #fb545b !important;\r\n  border-color: #fdb6b9 !important;\r\n}\r\n#calquiz-modal .step2 .btn-red {\r\n  margin-bottom: 30px;\r\n  margin-top: 0px !important;\r\n}\r\n.calquiz-outr span.title {\r\n  font-size: 10px !important;\r\n  color: #fb545b;\r\n  font-family: montserratregular;\r\n  padding: 27px 25px 0px;\r\n  float: left;\r\n  width: 100%;\r\n  text-transform: uppercase;\r\n}\r\n#calquiz-modal.modal .modal-header i.material-icons {\r\n  font-size: 16px;\r\n  color: #fff;\r\n  text-shadow: none;\r\n  top: -1px;\r\n  position: relative;\r\n}\r\n#calquiz-modal .calquiz-outr .check-icon:hover label span.outer-border {\r\n\r\n  /*display: none;*/\r\n\r\n  /*border: 3px solid transparent;*/\r\n\r\n  /* opacity: 0; */\r\n}\r\n#calquiz-modal .calquiz-outr .check-icon label .outer-border:after {\r\n\r\n  /*content: '';\r\n  top: -7px;\r\n  left: -7px;\r\n  padding: 7px;\r\n  box-shadow: 0 0 0 3px rgba(251, 84, 91, 0.67);\r\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\r\n  -webkit-transform: scale(.8);\r\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\r\n  -moz-transform: scale(.8);\r\n  -ms-transform: scale(.8);\r\n  transition: transform 0.2s, opacity 0.2s;\r\n  transform: scale(.8);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  content: '';\r\n  -webkit-box-sizing: content-box;\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;*/\r\n}\r\n#calquiz-modal .calquiz-outr .check-icon:hover label .outer-border:after {\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  opacity: 1;\r\n}\r\n#calquiz-modal .calquiz-outr .check-icon input[type=\"radio\"]:checked + label .outer-border:after {\r\n\r\n  /*content: '';\r\n  top: -2px;\r\n  left: -2px;\r\n  padding: 7px;\r\n  box-shadow: none;\r\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\r\n  -webkit-transform: scale(.8);\r\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\r\n  -moz-transform: scale(.8);\r\n  -ms-transform: scale(.8);\r\n  transition: opacity 0.2s, -webkit-transform 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;\r\n  transform: scale(.8);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  width: 80%;\r\n  height: 80%;\r\n  border-radius: 50%;\r\n  content: '';\r\n  box-sizing: content-box;\r\n  border: 3px solid #000;*/\r\n}\r\n#calquiz-modal .calquiz-outr .check-icon:hover label i {\r\n\r\n  /*display: none;*/\r\n\r\n  /*color: #fff;\r\n  background: #fb545b;\r\n  border: 3px solid rgba(251, 84, 91, 0.67);*/\r\n}\r\n\r\n/* Checkbox with tick icons */\r\n.check-icon {\r\n  width: 100%;\r\n  padding: 8px 15px;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  border-bottom: 0;\r\n}\r\n.check-icon.last {\r\n  border: 2px solid #eee;\r\n}\r\n.check-icon:hover, .check-icon.last:hover {\r\n  cursor: pointer;\r\n}\r\n.check-icon input[type=\"radio\"] {\r\n  left: -9999px;\r\n  position: absolute;\r\n}\r\n.check-icon label {\r\n  content: \"\";\r\n  width: 24px;\r\n  height: 24px;\r\n  margin-bottom: 0px;\r\n}\r\n.modal .check-icon label i.material-icons {\r\n  font-size: 18px;\r\n  color: #fb545b;\r\n}\r\n.check-icon input[type=\"radio\"]:checked + label span.outer-border {\r\n\r\n  /*border: 3px solid rgba(251, 84, 91, 0.67) !important;\r\n  border-radius: 50%;\r\n  height: 80px;\r\n  width: 80px !important;\r\n  display: inline-table;*/\r\n  cursor: default;\r\n}\r\n.check-icon label span.outer-border {\r\n\r\n  /*border: 3px solid rgba(102, 102, 102, 0.67);\r\n  border-radius: 50%;\r\n  height: 80px;\r\n  width: 80px !important;\r\n  display: inline-table;\r\n  -webkit-transition: background 0.2s, color 0.2s;\r\n  -moz-transition: background 0.2s, color 0.2s;\r\n  transition: background 0.2s, color 0.2s;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  position: relative;\r\n  z-index: 1;\r\n  color: #fff;*/\r\n}\r\n.check-icon input[type=\"radio\"]:checked + label i.material-icons {\r\n\r\n  /*color: #fff !important;\r\n  background: #fb545b !important;\r\n  border: 0px solid #fff !important;\r\n  -webkit-transform: scale(.8);\r\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\r\n  -moz-transform: scale(.8);\r\n  -ms-transform: scale(.8);\r\n  transition: transform 0.2s, opacity 0.2s;\r\n  transform: scale(.8);*/\r\n}\r\n.check-icon input[type=\"radio\"]:checked + label::after {\r\n  background: #fb545b;\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 18px;\r\n  height: 18px;\r\n  left: 0px;\r\n  font-size: 13px;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n  padding-left: 3px;\r\n}\r\n#calquiz-modal .calquiz-outr .check-icon:hover input[type=\"radio\"]:checked + label {\r\n  border: none;\r\n}\r\n.check-icon input[type=\"radio\"]:checked + label::after {\r\n}\r\n\r\n/*.check-icon input[type=\"radio\"]:checked + label {\r\n  background-color: #00aea5;\r\n  border: none;top: 1px;\r\n}*/\r\n\r\n/*.check-icon input[type=\"radio\"]:checked + label::after {\r\n font-family: \"Material Icons\"; content: \"\\e5ca\";\r\n}*/\r\n\r\n.check-icon div {\r\n\r\n  /*line-height: 38px; */\r\n  display: inherit;\r\n}\r\n#calquiz-modal .calquiz-outr .check-icon label {\r\n\r\n  /*width: 18px;\r\n  float: left;*/\r\n  text-align: left;\r\n  border: none;\r\n  margin: 0px;\r\n}\r\n#calquiz-modal .calquiz-outr .step2 .check-icon label {\r\n  text-align: center;\r\n}\r\n#calquiz-modal .calquiz-outr .check-icon:hover label {\r\n\r\n  /*content: \"\";\r\n  display: inline-block;\r\n  width: 18px;\r\n  height: 18px;\r\n  top: 0px;\r\n  border: 2px solid #fb545b;\r\n  border-radius: 50%;\r\n  margin: 0 auto;*/\r\n  cursor: pointer;\r\n}\r\n#calquiz-modal .calquiz-outr h3 {\r\n  font-size: 18px;\r\n  color: #fb545b;\r\n  float: left;\r\n  width: 100%;\r\n  margin-top: 0px;\r\n  text-align: left;\r\n}\r\n#calquiz-modal .calquiz-outr h3.example-heading {\r\n  font-size: 14px;\r\n  color: rgba(97, 104, 110, 0.5);\r\n  float: left;\r\n  width: 100%;\r\n  margin-top: 0px;\r\n  text-align: left;\r\n}\r\n#calquiz-modal .calquiz-outr label {\r\n  font-size: 12px;\r\n  color: #62696d;  /*width: 100%;*/\r\n  padding: 0px;\r\n  float: left;\r\n  text-align: center;\r\n  height: auto;\r\n  width: auto;\r\n}\r\n#calquiz-modal .calquiz-left .check-icon {\r\n  padding: 30px !important;\r\n  float: left;\r\n  padding-top: 50px !important;\r\n}\r\n#calquiz-modal .calquiz-right .check-icon {\r\n  padding: 30px !important;\r\n  float: left;\r\n  padding-bottom: 50px !important;\r\n}\r\n#calquiz-modal .step2 .calquiz-left .check-icon {\r\n  padding: 0px !important;\r\n}\r\n#calquiz-modal .step2 .calquiz-right .check-icon {\r\n  padding: 0px !important;\r\n  margin-bottom: 0;\r\n}\r\n#calquiz-modal .calquiz-outr p {\r\n  font-size: 12px;\r\n  color: #62696d;\r\n  font-family: montserratlight;\r\n  width: 100%;\r\n  line-height: 20px;\r\n  padding: 0px;\r\n  text-align: left;\r\n}\r\n#calquiz-modal .calquiz-outr span {\r\n\r\n  /*float: left;*/\r\n  width: 90%;\r\n  font-size: 14px;  /*color: #62696d;*/\r\n  line-height: 20px;\r\n  float: left;\r\n}\r\n.calquiz-outr {\r\n  float: left;\r\n  width: 100%;\r\n}\r\n#calquiz-modal .res-outer {\r\n  padding-left: 10px;\r\n}\r\n#calquiz-modal .check-icon {\r\n  width: 100%;\r\n}\r\n.footer-btn {\r\n  float: left;\r\n  width: 100%;\r\n}\r\n#calquiz-modal .alert.alert-danger {\r\n  top: 0px;\r\n  left: 89px;\r\n  float: left;\r\n  text-align: left;\r\n}\r\n#calquiz-modal .alert.alert-danger p {\r\n  position: absolute;\r\n  width: 100%;\r\n  padding-top: 0px;\r\n  color: #fb545b !important;\r\n}\r\n#calquiz-modal .alert.alert-danger p span.mat-icon {\r\n  float: left;\r\n  width: auto;\r\n}\r\n#calquiz-modal .alert.alert-danger p span.mat-icon i.material-icons {\r\n  font-size: 12px !important;\r\n  margin-right: 5px;\r\n  margin-top: 4px;\r\n  color: #fb545b;\r\n  width: auto !important;\r\n  padding-top: 0px !important;\r\n  height: auto !important;\r\n  background: none;\r\n  border: none;\r\n}\r\n.step1 {\r\n  float: left;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.step2 {\r\n  float: left;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.full-width {\r\n  width: 100% !important;\r\n  float: left;\r\n}\r\n.text-center {\r\n  text-align: center !important;\r\n}\r\n#calquiz-modal .calquiz-outr .step2 h3 {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n#calquiz-modal .calquiz-outr .step2 input {\r\n  min-height: 38px;\r\n  border: 1px solid #cccccc;\r\n  width: 70%;\r\n  font-size: 14px;\r\n  color: #62696d;\r\n  margin-top: 10px;\r\n  padding: 0px 0px 0px 10px;\r\n  margin-bottom: 0;\r\n}\r\n#calquiz-modal .step2 .calquiz-right {\r\n  width: 50%;\r\n  padding: 30px 40px;\r\n  display: inline-block;\r\n  float: left;\r\n  margin: 0;\r\n}\r\n#calquiz-modal .calquiz-outr .step2 label {\r\n  font-size: 12px;\r\n  color: #62696d;\r\n  width: 100%;\r\n  padding: 0px;\r\n  float: left;\r\n  text-align: center;\r\n  height: 100%;\r\n  cursor: default !important;\r\n}\r\n.step2 .check-icon input[type=\"radio\"]:checked + label span.outer-border {\r\n  border: 3px solid rgba(251, 84, 91, 0.67) !important;\r\n  border-radius: 50%;\r\n  height: 80px;\r\n  width: 80px !important;\r\n  display: inline-table;\r\n}\r\n#calquiz-modal .calquiz-outr .step2 span {\r\n  width: 100%;\r\n  line-height: 16px;\r\n  float: none;\r\n}\r\n#calquiz-modal .calquiz-outr .step2 .alert span {\r\n  font-size: 10px !important;\r\n}\r\n.step2 .check-icon label span.outer-border {\r\n  border: 3px solid rgba(102, 102, 102, 0.67);\r\n  border-radius: 50%;\r\n  height: 80px;\r\n  width: 80px !important;\r\n  display: inline-table;\r\n  -webkit-transition: background 0.2s, color 0.2s;\r\n  transition: background 0.2s, color 0.2s;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  position: relative;\r\n  z-index: 1;\r\n  color: #fff;\r\n}\r\n#calquiz-modal .step2 .calquiz-right i {\r\n  font-size: 42px;\r\n  color: #989898;\r\n  width: auto;  /*background: #f3f3f3;*/\r\n  border-radius: 50%;  /*border: 3px solid rgba(251,251,251,0.8);*/\r\n\r\n  /*height: 80px;\r\n  width: 80px !important;*/\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  padding-top: 22px;\r\n  padding-left: 1px;\r\n}\r\n.step2 .check-icon input[type=\"radio\"]:checked + label i.material-icons {\r\n\r\n  /*color: #fff !important;\r\n  background: #fb545b !important;*/\r\n  color: #fb545b !important;\r\n  border: 0px solid #fff !important;\r\n  -webkit-transform: scale(.8);\r\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\r\n  -moz-transform: scale(.8);\r\n  -ms-transform: scale(.8);\r\n  transition: opacity 0.2s, -webkit-transform 0.2s;\r\n  -webkit-transition: opacity 0.2s, -webkit-transform 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;\r\n  transform: scale(.8);\r\n}\r\n#calquiz-modal .calquiz-outr .step2 .check-icon input[type=\"radio\"]:checked + label .outer-border:after {\r\n  content: '';\r\n  top: -2px;\r\n  left: -2px;\r\n  padding: 7px;\r\n  box-shadow: none;\r\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\r\n  -webkit-transform: scale(.8);\r\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\r\n  -moz-transform: scale(.8);\r\n  -ms-transform: scale(.8);\r\n  transition: opacity 0.2s, -webkit-transform 0.2s;\r\n  -webkit-transition: opacity 0.2s, -webkit-transform 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;\r\n  transform: scale(.8);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  width: 80%;\r\n  height: 80%;\r\n  border-radius: 50%;\r\n  content: '';\r\n  box-sizing: content-box;\r\n  border: 3px solid #000;\r\n}\r\n#calquiz-modal .calquiz-outr .step2 .check-icon label .outer-border:after {\r\n  content: '';\r\n  top: -7px;\r\n  left: -7px;\r\n  padding: 7px;\r\n  box-shadow: 0 0 0 3px rgba(251, 84, 91, 0.67);\r\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\r\n  -webkit-transform: scale(.8);\r\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\r\n  -moz-transform: scale(.8);\r\n  -ms-transform: scale(.8);\r\n  transition: opacity 0.2s, -webkit-transform 0.2s;\r\n  -webkit-transition: opacity 0.2s, -webkit-transform 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;\r\n  transform: scale(.8);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  content: '';\r\n  box-sizing: content-box;\r\n}\r\n#calquiz-modal .step2 .calc-quiz-margin {\r\n  width: 100%;\r\n  float: left;\r\n  text-align: left;\r\n  margin-top: 20px;\r\n  margin-left: 0px;\r\n}\r\n#calquiz-modal .back-icon {\r\n  height: 0px;\r\n  position: relative;\r\n  top: 0px;\r\n  left: -60px;\r\n  float: left;\r\n  width: 100%;\r\n  z-index: 9;\r\n}\r\n#calquiz-modal .back-icon i.material-icons {\r\n  font-size: 18px !important;\r\n  color: #989898;\r\n  border: none;\r\n  background: none;\r\n  cursor: pointer;\r\n  padding-top: 0px !important;\r\n  opacity: 0.7;\r\n  width: 17px !important;\r\n  height: 17px;\r\n}\r\n#calquiz-modal .back-icon i.material-icons:hover {\r\n  opacity: 1;  /*-webkit-animation: spinAround 2s linear infinite;\r\n  -moz-animation: spinAround 2s linear infinite;\r\n  animation: spinAround 2s linear infinite;*/\r\n}\r\n-webkit-keyframes spinAround {\r\n  from {\r\n    -webkit-transform: rotate(0deg)\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n@-webkit-keyframes spinAround {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg)\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spinAround {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg)\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n.hide {\r\n  display: none;\r\n}\r\n#calquiz-modal .next-step {\r\n  padding: 7px 50px !important;\r\n}\r\n.custom-width {\r\n  width: 700px;\r\n}\r\n.custom-width .modal-body {\r\n  padding: 0px;\r\n  padding-bottom: 0px !important;\r\n}\r\n.custom-width .modal-header {\r\n  margin: 0px !important;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.header-grey {\r\n  background: #61686e !important;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n}\r\n.animated-icon {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  overflow: hidden;\r\n  margin: 4px;\r\n  width: 40px !important;\r\n  height: 40px;\r\n  font-size: 0;\r\n  text-indent: -9999px;\r\n  border-radius: 50%;\r\n  -webkit-transition: background 0.5s;\r\n  transition: background 0.5s;\r\n  position: relative;\r\n  top: -7px;\r\n}\r\n.animated-calc {\r\n\r\n  /*background: url(app/site/components/+dashboard/images/icon_01.png);*/\r\n  background: url(/assets/images/dashboard/icon_01.png);\r\n  background-position: -2px -8px;\r\n}\r\n.animated-recom {\r\n\r\n  /*background: url(app/site/components/+dashboard/images/icon_02.png);*/\r\n  background: url(/assets/images/dashboard/icon_02.png);\r\n  background-position: -2px -8px;\r\n}\r\n.step1 .calquiz-left:hover {\r\n  background: #f6f8f9;\r\n}\r\n.step1 .calquiz-left:hover .animated-calc {\r\n  background-position: -2px -59px;\r\n}\r\n.step1 .calquiz-right:hover {\r\n  background: #f6f8f9;\r\n}\r\n.step1 .calquiz-right:hover .animated-recom {\r\n  background-position: -2px -59px;\r\n}\r\n\r\n/* End: Modal calcquiz */\r\n@media (min-width:320px) and (max-width:768px) {\r\n  #new-header .navbar-fixed-top .nav-padding {\r\n    padding-right: 0px;\r\n  }\r\n  .full-menu, .dash-circle, .dash-prog-outer h2 {\r\n    display: none;\r\n  }\r\n  .main-logo {\r\n    display: none !important;\r\n  }\r\n  .mobile-menu {\r\n    display: block;\r\n    float: right;\r\n    margin-top: 9px;\r\n    position: relative;\r\n  }\r\n  #new-header .navbar-default {\r\n    background: #fb5f66 !important;\r\n    border: none;\r\n  }\r\n  .mobile-menu button {\r\n    border: none;\r\n    box-shadow: none;\r\n    color: #fff;\r\n    background: none;\r\n  }\r\n  .mobile-menu .btn-default:hover {\r\n    color: #fff;\r\n    background: none;\r\n  }\r\n  .dash-boxes-outr {\r\n    padding: 10px;\r\n    padding-top: 30px;\r\n  }\r\n  .mobile-menu .dropdown-menu {\r\n    background: #62696d;\r\n    top: -11px;\r\n    border-radius: 0px;\r\n    left: -176px;\r\n    width: 235px;\r\n    font-family: montserratlight;\r\n    padding-bottom: 55px;\r\n  }\r\n  .mobile-menu .name-dropdown-border {\r\n    width: 100%;\r\n    margin: 5px 0px;\r\n  }\r\n  .mobile-menu .user-outr {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0px;\r\n    display: block;\r\n    text-transform: capitalize;\r\n  }\r\n  .mobile-menu .user-outr li {\r\n    float: right;\r\n    font-size: 24px;\r\n    font-family: montserratlight;\r\n    color: #fff;\r\n    margin-right: 24px;    /* margin: 10px 19px; */\r\n    margin-top: 8px;\r\n    margin-bottom: 6px;\r\n  }\r\n  .mobile-menu .user-outr li a {\r\n    margin-right: 30px;\r\n  }\r\n  .mobile-menu .company-list li, .mobile-menu .name-list li {\r\n    margin: 10px 0px;\r\n    text-align: right;\r\n    font-size: 16px;\r\n    width: 100%;\r\n    float: left;\r\n    padding-right: 20px;\r\n  }\r\n  .mobile-menu .company-list li a, .mobile-menu .name-list li a {\r\n    float: right;\r\n    color: #fff;\r\n  }\r\n  .mobile-menu .company-list li a i {\r\n    margin-right: 20px;\r\n    float: left;\r\n  }\r\n  .mobile-menu .name-list li a i {\r\n    margin-left: 20px;\r\n    float: right;\r\n  }\r\n  .mobile-menu .company-list-title {\r\n    float: left;\r\n    color: #fff;\r\n  }\r\n  .white-logo {\r\n    display: none !important;\r\n  }\r\n  .dash-prog-outer {\r\n    float: left;\r\n    width: 100%;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n  }\r\n  .dash-prog-outer h5 {\r\n    font-size: 24px;\r\n    text-align: center;\r\n    max-width: 90%;\r\n    margin-bottom: 1px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper {\r\n    min-height: 35px;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n    margin: 0 auto;\r\n    float: none;\r\n    text-align: center;\r\n  }\r\n  #new-header .navbar-header {\r\n    float: left;\r\n    margin-left: 0px;\r\n    margin-right: 0px !important;\r\n  }\r\n  #new-header .navbar-logopadding {\r\n    padding-right: 0px;\r\n    padding-top: 0px;\r\n  }\r\n  .circle-sec {\r\n    float: left;\r\n    width: 33%;\r\n    text-align: center;\r\n  }\r\n  .dash-circle-red, .dash-circle-pink, .dash-circle-d-pink {\r\n    float: none;    /* margin-right: 20px; */\r\n    margin: 0 auto;\r\n    width: 67px;\r\n    height: 38px;\r\n    padding-top: 13px;\r\n    border: none;\r\n  }\r\n  .dash-circle-red i, .dash-circle-pink i, .dash-circle-d-pink i {\r\n    font-size: 30px;\r\n  }\r\n  .circle-cal-outer h2 {\r\n    color: #62696d;\r\n    float: left;\r\n    font-family: montserratregular !important;\r\n    font-size: 24px !important;\r\n    margin: 15px 0 5px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    width: 100%;\r\n  }\r\n  .circle-cal-outer h5 {\r\n    float: left;\r\n    color: #8e989f;\r\n    font-size: 10px;\r\n    font-family: montserratregular;\r\n    text-transform: uppercase;\r\n    margin-top: 0;\r\n    width: 100%;\r\n  }\r\n  .circle-cal-outer {\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n  .user-outr {\r\n    float: none;\r\n    width: 130px;\r\n    padding: 0;\r\n    margin: 0 auto;\r\n    margin-top: 30px;\r\n  }\r\n  .dash-top2-textinner h3 {\r\n    font-size: 20px;\r\n    margin-top: 5px;\r\n  }\r\n  .dash-top2-textinner .company-dropdown-wrapper .dropdown-toggle span {\r\n    width: auto !important;\r\n    font-size: 14px;\r\n  }\r\n  .user-outr li a img {\r\n    width: 44px;\r\n    height: 44px;\r\n  }\r\n  .user-outr {\r\n    display: none;\r\n    float: none;\r\n    width: 160px;\r\n    margin-top: 30px;\r\n  }\r\n  .dash-top2-textinner .company-dropdown-wrapper {\r\n    float: left;\r\n    margin: 0;\r\n    width: 100%;\r\n  }\r\n  .dash-top2-textinner .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n    float: left;\r\n    text-align: left;\r\n  }\r\n  #new-header .navbar-default {\r\n    height: 56px;\r\n  }\r\n  .white-logo .navbar-brand img {\r\n    height: 53px;\r\n    margin-top: -20px;\r\n    margin: 0 auto;\r\n    margin-top: -20px;\r\n  }\r\n  .white-logo .navbar-brand {\r\n    float: none;\r\n  }\r\n  .dashboard-topsec {\r\n    padding: 0px;\r\n    padding-top: 0px;\r\n    padding-bottom: 5px;\r\n    margin-top: 0px;\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n  .circle-parent {\r\n    padding-bottom: 20px;\r\n  }\r\n  .user-outr li a.add-user {\r\n    width: 45px;\r\n    height: 45px;\r\n    padding-top: 9px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\r\n    top: -30px;\r\n    left: 17px;\r\n    font-size: 34px;\r\n    position: relative;\r\n    color: #f87b80;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\r\n    font-size: 16px;\r\n  }\r\n  .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\r\n    width: 91%;\r\n    font-size: 14px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\r\n    width: 35px;\r\n    height: 35px;\r\n    padding-top: 8px;\r\n    font-size: 14px;\r\n    top: 13px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\r\n    font-size: 14px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\r\n    font-size: 24px;\r\n  }\r\n  .company-block-content {\r\n    margin-left: 50px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n    left: 42px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\r\n    right: 34px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n    top: 8px;\r\n    left: -8px;\r\n  }\r\n  .choosetem-topsec p {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  .choosetem-topsec h3 {\r\n    font-size: 20px;\r\n  }\r\n  .choosetemp-social li {\r\n    margin-bottom: 0px;\r\n    margin-top: 20px;\r\n  }\r\n  .choosetemp-actions {\r\n    margin-top: 10px;\r\n    width: 100%;\r\n  }\r\n  .choosetemp-boxes-outr {\r\n    padding: 0px;\r\n  }\r\n  .choosetemp-box-figure2 {\r\n    padding: 0px;\r\n  }\r\n  .dashboard-topsec {\r\n    padding-top: 0px;\r\n    margin-top: 0px;\r\n  }\r\n  .bootbox .modal-content {\r\n    float: left;\r\n    width: 62%;\r\n    margin-left: 5px;\r\n  }\r\n  .one-line-bootbox .bootbox-body-left {\r\n    min-height: 122px;\r\n  }\r\n  .bootbox-body .bootbox-body-right {\r\n    width: 80%;\r\n  }\r\n  #calquiz-modal .calquiz-outr .step2 input {\r\n    width: 100%;\r\n  }\r\n  #calquiz-modal .alert.alert-danger {\r\n    left: 0px;\r\n  }\r\n  #calquiz-modal .calquiz-left {\r\n    width: 100%;    /*padding: 35px 25px 0px 25px;*/\r\n    float: left;\r\n  }\r\n  #calquiz-modal .calquiz-right {\r\n\r\n    /*width: 100%;\r\n    padding: 25px;\r\n    padding-bottom: 35px;*/\r\n    width: 100%;\r\n    float: left;\r\n  }\r\n  #calquiz-modal .calquiz-right i {\r\n    padding-left: 0px;\r\n  }\r\n  #calquiz-modal .calquiz-left i {\r\n    padding-left: 0px;\r\n  }\r\n  #calquiz-modal .calquiz-left .check-icon {\r\n    padding: 30px 20px !important;\r\n  }\r\n  #calquiz-modal .calquiz-right .check-icon {\r\n    padding: 30px 20px !important;\r\n  }\r\n  .dashboard-toast {\r\n    left: 8px !important;\r\n    width: 285px !important;\r\n  }\r\n  .dashboard-toast i {\r\n    width: 30px !important;\r\n    padding-left: 3px;\r\n  }\r\n  .dashboard-toast span {\r\n    float: none;\r\n    width: 60%;\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n  }\r\n  .dashboard-helptip .help-checktip {\r\n    left: -120px;\r\n  }\r\n}\r\n@media (min-width:990px) and (max-width:1300px) {\r\n  .user-outr {\r\n    width: 100%;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n  }\r\n  .dash-prog-outer {\r\n    width: calc(100% - 110px);\r\n  }\r\n  .circle-sec {\r\n    text-align: center;\r\n  }\r\n  .dash-circle-pink {\r\n    width: 57px;\r\n    height: 57px;\r\n    padding-top: 7px;\r\n    margin-right: 2px;\r\n  }\r\n  .dash-circle-red {\r\n    width: 57px;\r\n    height: 57px;\r\n    padding-top: 7px;\r\n    margin-right: 2px;\r\n  }\r\n  .dash-circle-d-pink {\r\n    width: 57px;\r\n    height: 57px;\r\n    padding-top: 7px;\r\n    margin-right: 2px;\r\n  }\r\n  .circle-cal-outer {\r\n    width: 65%;\r\n  }\r\n  .circle-cal-outer h2 {\r\n    width: 94%;\r\n    margin: 7px 0 5px;\r\n  }\r\n  .dash-prog-outer h2 {\r\n    font-size: 15px !important;\r\n  }\r\n  .dash-prog-outer h5 {\r\n    font-size: 11px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\r\n    width: 100%;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper {\r\n    width: 50%;\r\n  }\r\n  .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n    width: 100%;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n    left: 6px;\r\n  }\r\n  .popover-wrapper .single-user.more-popover-block{\r\n    left: -36px;\r\n    min-width: 79px;\r\n    max-width: 79px;\r\n  }\r\n  .popover-wrapper .single-user.more-popover-block:before{\r\n    right: 22px;\r\n  }\r\n  .popover-wrapper .popover-block {\r\n    top: 12px !important;\r\n    left: -31px!important;\r\n    min-width: 79px!important;\r\n    padding: 4px!important;\r\n    font-size: 10px !important;\r\n  }\r\n  .popover-wrapper .popover-block:before {\r\n    top: -8px;\r\n    right: 26px!important;\r\n  }\r\n}\r\n\r\n@media (min-width:769px) and (max-width:1120px) {\r\n  .dash-circle-d-pink, .dash-circle-pink, .dash-circle-red {\r\n    border: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    margin-right: 0;\r\n    padding: 0;\r\n  }\r\n  .circle-cal-outer {\r\n    width: auto;\r\n    float: none;\r\n  }\r\n  .circle-cal-outer h2 {\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n  .circle-cal-outer h5 {\r\n    float: none;\r\n    margin-top: 0;\r\n  }\r\n}\r\n@media (min-width:320px) and (max-width:767px) {\r\n  .res-outer {\r\n    width: 80%;\r\n    margin-left: 58px;\r\n    margin-top: 10px;\r\n    padding-left: 0 !important;\r\n  }\r\n  .custom-width {\r\n    width: auto;\r\n  }\r\n  #calquiz-modal .calc-quiz-margin {\r\n    width: calc(100% - 60px);\r\n  }\r\n}\r\n\r\n/* Start: bootbox modal */\r\n@media screen and (min-width:320px) and (max-width:320px) {\r\n  .bootbox .modal-content {\r\n    width: 62%;\r\n    margin-left: 5px;\r\n  }\r\n  .one-line-bootbox .bootbox-body-left {\r\n    min-height: 122px;\r\n  }\r\n  .bootbox-body .bootbox-body-right {\r\n    width: 80%;\r\n  }\r\n  .dashboard-toast {\r\n    left: 8px !important;\r\n    width: 285px !important;\r\n  }\r\n  .dashboard-toast i {\r\n    width: 30px !important;\r\n    padding-left: 3px;\r\n  }\r\n  .d-toast-btn i {\r\n    width: auto !important;\r\n    padding-left: 0px !important;\r\n  }\r\n  .toast {\r\n    left: 8px !important;\r\n    width: 285px !important;\r\n  }\r\n  .toast i {\r\n    width: 30px !important;\r\n    padding-left: 3px;\r\n  }\r\n  .toast .btn i {\r\n    width: auto !important;\r\n    padding-left: 0px !important;\r\n  }\r\n}\r\n@media screen and (min-width:480px) and (max-width:480px) {\r\n  .bootbox .modal-content {\r\n    width: 90%;\r\n    margin-left: 15px;\r\n  }\r\n}\r\n\r\n/* End: bootbox modal */\r\n\r\n/* custom material css start (sahil) */\r\n.sahil-material .form-control {\r\n  height: 38px;\r\n  padding: 7px 0;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  font-family: montserratregular;\r\n  color: #62696d;\r\n}\r\n.sahil-material .form-group label.control-label {\r\n  font-size: 14px;\r\n  line-height: 1.07142857;\r\n  color: #8e989f;\r\n  font-weight: 400;\r\n  margin: 16px 0 0 0;\r\n  font-family: montserratregular;\r\n}\r\n.sahil-material .form-group label.control-label.seo-static-label {\r\n  text-transform: uppercase !important;\r\n  font-size: 11px;\r\n  color: #8e989f !important;\r\n}\r\n.sahil-material .form-group.label-floating label.control-label, .sahil-material .form-group.label-placeholder label.control-label {\r\n  top: -7px;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  color: #8e989f;\r\n}\r\n.sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\r\n  top: -20px;\r\n  font-family: montserratregular;\r\n  font-size: 11px;\r\n  text-transform: uppercase;\r\n  color: #8e989f !important;\r\n}\r\n.sahil-material .form-group.label-floating.is-focused label.control-label {\r\n  top: -20px;\r\n  font-size: 11px;\r\n  font-family: montserratregular;\r\n  color: #8e989f !important;\r\n}\r\n.sahil-material .form-group.is-focused label, .sahil-material .form-group.is-focused label.control-label {\r\n  font-size: 11px;\r\n  font-family: montserratregular;\r\n  color: #8e989f !important;\r\n  text-transform: uppercase;\r\n}\r\n.sahil-material .form-control, .sahil-material .form-group .form-control {\r\n  border: 0 !important;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\r\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #d7dbdd);\r\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\r\n}\r\n\r\n/*input:-webkit-autofill,\r\ninput:-webkit-autofill:hover,\r\ninput:-webkit-autofill:focus,\r\ninput:-webkit-autofill:active,\r\n.form-group.is-focused input:-webkit-autofill,\r\n.form-group.is-focused input:-webkit-autofill:hover,\r\n.form-group.is-focused input:-webkit-autofill:focus,\r\n.form-group.is-focused input:-webkit-autofill:active {\r\n    -webkit-box-shadow: 0 0 0px 20px #fff inset !important;\r\n}*/\r\n.sahil-material .form-group.is-focused .form-control {\r\n  outline: none;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n  background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-size: 100% 2px, 100% 1px;\r\n  box-shadow: none;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n\r\n/* custom material css end (sahil) */\r\n#new-header .navbar-left ul, #new-header .navbar-left ul li, .billing-grey-bottom ul.billing-list li, .billing-white-bottom ul.billing-list li, .left-sidebar ul li, li, ul {\r\n  list-style: none\r\n}\r\na:focus, a:hover {\r\n  text-decoration: none;\r\n  color: #8e989f\r\n}\r\n#new-header .navbar-left {\r\n  margin-top: 10px;\r\n  border-left: 1px solid #dae2e6;\r\n  padding: 0px;\r\n}\r\n\r\n/* add new user */\r\n.modal .val-success-msg {\r\n  font-size: 12px;\r\n  color: #00c853;\r\n  width: auto;\r\n  float: right;\r\n  margin-top: 17px;\r\n  margin-right: 20px\r\n}\r\n.modal .modal-body .val-success-msg span.icon-success i.material-icons, .modal .modal-footer .val-success-msg span.icon-success i.material-icons {\r\n  color: #00c853 !important;\r\n  font-size: 14px !important\r\n}\r\n#add-new-user .modal-content {\r\n  border-radius: 8px\r\n}\r\n#add-new-user .modal-header {\r\n  padding: 10px 17px;\r\n  border-bottom: none;\r\n  background: #61686e\r\n}\r\n#add-new-user.modal button.close.btn-close {\r\n  text-shadow: none;\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 12px;\r\n  z-index: 9;\r\n  opacity: 1;\r\n  -webkit-transition: all .3s ease 0s !important;\r\n  transition: all .3s ease 0s !important\r\n}\r\n#add-new-user.modal button.close.btn-help {\r\n  text-shadow: none;\r\n  position: absolute;\r\n  right: 40px;\r\n  top: 11px;\r\n  z-index: 9;\r\n  opacity: 1;\r\n  -webkit-transition: all .3s ease 0s !important;\r\n  transition: all .3s ease 0s !important\r\n}\r\n#add-new-user.modal i.material-icons {\r\n  font-size: 16px;\r\n  color: #fff\r\n}\r\n#add-new-user.modal button.close.btn-help i.material-icons {\r\n  font-size: 14px;\r\n  color: #fff\r\n}\r\n#add-new-user .modal-title {\r\n  text-transform: uppercase;\r\n  color: #fff\r\n}\r\n#add-new-user .modal-body {\r\n  padding: 15px 25px 30px\r\n}\r\n#add-new-user .btn-red-outline {\r\n  color: #fb545b;\r\n  background-color: #fff;\r\n  border-color: #ffb5b8;\r\n  border-radius: 0;\r\n  font-size: 11px;\r\n  padding: 7px 20px;\r\n  margin: 10px 0;\r\n  -webkit-transition: all .3s ease 0s;\r\n  transition: all .3s ease 0s;\r\n  font-family: montserratregular;\r\n  text-transform: uppercase\r\n}\r\n.radio-inline {\r\n  font-size: 11px !important;\r\n  font-weight: 400 !important;\r\n  padding-left: 0;\r\n  font-family: montserratlight;\r\n  color: #666 !important\r\n}\r\n.radio-inline input[type=radio] {\r\n  left: -9999px;\r\n  position: absolute\r\n}\r\n.form-group.form-group-radio .radio-inline+.radio-inline {\r\n  margin-left: 15px\r\n}\r\n.radio-inline label {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 14px;\r\n  height: 14px;\r\n  top: 0;\r\n  border: 1px solid #fb545b;\r\n  border-radius: 50%;\r\n  margin: 0 7px 0 auto;\r\n  cursor: pointer\r\n}\r\n.form-group.form-group-radio {\r\n  margin: 20px 0;\r\n  float: left;\r\n  width: 100%\r\n}\r\n.form-group-radio label {\r\n  float: left\r\n}\r\n.radio-inline input[type=radio]:checked+label {\r\n  background: #fb545b\r\n}\r\n.radio-inline input[type=radio]:checked+label::after {\r\n  font-family: \"Material Icons\";\r\n  content: \"\\e5ca\"\r\n}\r\n.radio-inline label::after {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 14px;\r\n  height: 14px;\r\n  left: 1px;\r\n  top: -5px;\r\n  font-size: 10px;\r\n  color: #fff\r\n}\r\n#add-new-user .modal-footer {\r\n  padding: 15px 25px;\r\n  text-align: right;\r\n  border-top: none\r\n}\r\n.modal#add-new-user .form-group:first-child {\r\n  margin-top: 12px;\r\n  clear: both;\r\n}\r\n.alert.alert-danger {\r\n  background: 0 0 !important;\r\n  border: none;\r\n  position: relative;\r\n  top: -12px;\r\n  left: 0;\r\n  padding: 0;\r\n  color: #fb545b !important;\r\n  font-size: 11px;\r\n  margin: 0;\r\n  float: left;\r\n  width: 100%;\r\n  text-align: left\r\n}\r\n.alert.alert-danger p {\r\n  position: absolute;\r\n  width: 100%\r\n}\r\n.alert.alert-dange p span.mat-icon {\r\n  float: left;\r\n  width: auto\r\n}\r\n.alert.alert-danger p span.mat-icon i.material-icons {\r\n  float: left;\r\n  font-size: 12px !important;\r\n  margin-right: 5px;\r\n  margin-top: 1px;\r\n  color: #fb545b !important\r\n}\r\n.alert.alert-danger.custom-alert {\r\n  padding: 10px;\r\n  margin-top: 10px;\r\n  border-radius: 0;\r\n  background: #feddde !important\r\n}\r\n.alert.alert-danger.custom-alert p {\r\n  position: relative\r\n}\r\n#add-new-company .modal-content, #add-new-companyUC .modal-content {\r\n  border-radius: 8px;\r\n  float: left;\r\n  width: 100%\r\n}\r\n#add-new-company .modal-header, #add-new-companyUC .modal-header {\r\n  padding: 10px 17px;\r\n  border-bottom: none;\r\n  background: #fb6066;\r\n  border-radius: 7px 7px 0 0\r\n}\r\n#add-new-company.modal button.close.btn-close, #add-new-companyUC.modal button.close.btn-close {\r\n  text-shadow: none;\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 12px;\r\n  z-index: 9;\r\n  opacity: 1;\r\n  -webkit-transition: all .3s ease 0s !important;\r\n  transition: all .3s ease 0s !important\r\n}\r\n#add-new-company.modal button.close.btn-help, #add-new-companyUC.modal button.close.btn-help {\r\n  text-shadow: none;\r\n  position: absolute;\r\n  right: 40px;\r\n  top: 11px;\r\n  z-index: 9;\r\n  opacity: 1;\r\n  -webkit-transition: all .3s ease 0s !important;\r\n  transition: all .3s ease 0s !important\r\n}\r\n#add-new-company.modal i.material-icons, #add-new-companyUC.modal i.material-icons {\r\n  font-size: 16px;\r\n  color: #fff\r\n}\r\n#add-new-company.modal button.close.btn-help i.material-icons, #add-new-companyUC.modal button.close.btn-help i.material-icons {\r\n  font-size: 14px;\r\n  color: #fff\r\n}\r\n#add-new-company .modal-title, #add-new-companyUC .modal-title {\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n  margin-bottom: 0;\r\n  font-size: 14px;\r\n  font-family: montserratregular !important\r\n}\r\n#add-new-company .modal-body, #add-new-companyUC .modal-body {\r\n  padding: 15px 25px;\r\n  float: left;\r\n  width: 100%\r\n}\r\n#add-new-company .btn-red-outline, #add-new-companyUC .btn-red-outline {\r\n  color: #fb545b;\r\n  background-color: #fff;\r\n  border-color: #ffb5b8;\r\n  border-radius: 0;\r\n  font-size: 11px;\r\n  padding: 7px 20px;\r\n  margin: 10px 0;\r\n  -webkit-transition: all .3s ease 0s;\r\n  transition: all .3s ease 0s;\r\n  font-family: montserratregular;\r\n  text-transform: uppercase;\r\n  float: right\r\n}\r\n#add-new-company .modal-footer, #add-new-companyUC .modal-footer {\r\n  padding: 15px 40px;\r\n  text-align: center;\r\n  border-top: none;\r\n  font-size: 12px;\r\n  color: #666;\r\n  background: #eee;\r\n  line-height: 18px;\r\n  border-radius: 0 0 7px 7px;\r\n  font-family: montserratlight;\r\n  float: left\r\n}\r\n#add-new-company .in-active, #add-new-companyUC .in-active {\r\n  position: absolute;\r\n  top: 14px;\r\n  right: 0;\r\n  font-size: 10px !important;\r\n  color: #666 !important;\r\n  font-family: montserratregular;\r\n  text-transform: uppercase\r\n}\r\n.modal#add-new-company .form-group:first-child {\r\n  margin-top: 12px\r\n}\r\n.popover-wrapper .popover-block {\r\n  position: relative;\r\n  top: 18px;\r\n  left: -32px;\r\n  min-width: 95px;\r\n  padding: 8px;\r\n  font-size: 12px;\r\n  background: #62696d;\r\n  border-radius: 4px !important;\r\n  border: none;\r\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .24);\r\n  display: none;\r\n  z-index: 9\r\n}\r\n.popover-wrapper:hover .popover-block {\r\n  display: block\r\n}\r\n.popover-wrapper .popover-block:before {\r\n  position: absolute;\r\n  top: -8px;\r\n  right: 42px;\r\n  display: inline-block;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 8px solid #62696d;\r\n  border-left: 6px solid transparent;\r\n  border-bottom-color: #62696d;\r\n  content: ''\r\n}\r\n.toast {\r\n  font-family: montserratregular;\r\n  position: fixed;\r\n  display: none;\r\n  bottom: -100px;\r\n  background: #fff;\r\n  color: #62696d;\r\n  left: 60px;\r\n  z-index: 10005;\r\n  width: 344px;\r\n  border: 1px solid #ccc;\r\n  box-shadow: 0 0 7px 2px rgba(0, 0, 0, .2)\r\n}\r\n.toast i, .toast span {\r\n  float: none;\r\n  display: inline-block;\r\n  vertical-align: middle\r\n}\r\n.toast i {\r\n  margin-top: 0;\r\n  margin-right: 10px;\r\n  width: 40px;\r\n  background: #fb545b;\r\n  color: #fff;\r\n  padding-left: 8px;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px\r\n}\r\n.toast .btn, .toast-btn i {\r\n  background: 0 0;\r\n  color: #bec5c9\r\n}\r\n.toast span {\r\n  width: 74%;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  line-height: 15px;\r\n  font-size: 13px\r\n}\r\n.toast .btn {\r\n  float: right;\r\n  padding: 0;\r\n  font-size: 12px\r\n}\r\n.toast-btn i {\r\n  font-size: 16px !important;\r\n  padding: 8px 0 0;\r\n  width: auto\r\n}\r\n.editor-modal .modal-dialog {\r\n  margin: 80px auto\r\n}\r\n.editor-modal .modal-header {\r\n  padding: 11px 15px;\r\n  background: #fb6066;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px\r\n}\r\n.editor-modal .modal-title {\r\n  margin: 0;\r\n  line-height: 1.42857143;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  color: #fff\r\n}\r\n.editor-modal button.close {\r\n  color: #bdbdbd;\r\n  opacity: 1;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-family: \"Material Icons\";\r\n  content: \"close\";\r\n  font-size: 23px;\r\n  text-shadow: none;\r\n  -webkit-transition: all .3s ease 0s !important;\r\n  transition: all .3s ease 0s !important\r\n}\r\n.editor-modal .modal-footer {\r\n  padding: 15px;\r\n  border-top: none\r\n}\r\n.editor-modal .modal-body {\r\n  font-size: 13px;\r\n  color: #62696d\r\n}\r\n.editor-modal .btn.btn-basic {\r\n  color: #fff;\r\n  background: #fb545b;\r\n  font-size: 12px;\r\n  width: 105px;\r\n  border: 1px solid #fb545b;\r\n  -webkit-transition: all .5s ease;\r\n  transition: all .5s ease\r\n}\r\n.editor-modal .btn.btn-basic:hover {\r\n  background: #fff;\r\n  color: #fb545b;\r\n  border-color: #fb545b\r\n}\r\n.editor-modal .btn.btn-basic:first-child {\r\n  color: #8e989f;\r\n  border-color: #8e989f;\r\n  background: #fff\r\n}\r\n.editor-modal .btn.btn-basic:first-child:hover {\r\n  background: #8e989f;\r\n  color: #fff;\r\n  border: none\r\n}\r\n.editor-modal .btn.btn-basic:only-child {\r\n  color: #fff;\r\n  background: #fb545b;\r\n  border-color: #fb545b\r\n}\r\n.editor-modal .btn.btn-basic:only-child:hover {\r\n  background: #fff;\r\n  color: #fb545b;\r\n  border: 1px solid #fb545b\r\n}\r\n.editor-modal .live-subhead i.material-icons {\r\n  font-size: 38px;\r\n  color: #fb6066;\r\n  float: left;\r\n  text-align: center;\r\n  display: block\r\n}\r\n.editor-modal .live-url {\r\n  font-size: 11px;\r\n  font-family: montserratlight;\r\n  color: #fb545b;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  margin-bottom: 0;\r\n  text-transform: uppercase;\r\n  cursor: pointer\r\n}\r\n.editor-modal .live-subhead .url-style {\r\n  color: #a9a9a9;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  text-transform: none;\r\n  background: #ceebff;\r\n  padding: 0 5px\r\n}\r\n.editor-modal .live-subhead {\r\n  font-size: 16px;\r\n  margin: 0 auto;\r\n  display: block;\r\n  background: #fff;\r\n  border: 1px solid #bec6c9;\r\n  border-top: 0;\r\n  padding: 7px 10px 12px;\r\n  text-align: left\r\n}\r\n.editor-modal .live-subhead.link-style {\r\n  background: #f9f9f9;\r\n  border: 1px solid #bec6c9;\r\n  padding: 7px 12px;\r\n  text-align: left\r\n}\r\n.editor-modal span {\r\n  font-family: montserratlight;\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  color: #4d5052\r\n}\r\na.live-url.preview_copy {\r\n  float: right;\r\n  margin-top: 5px\r\n}\r\n.editor-modal .modal .form-group .form-control, .editor-modal.modal .form-control {\r\n  width: 100%;\r\n  float: left;\r\n  height: 27px;\r\n  border: 1px solid rgba(93, 104, 110, .4);\r\n  color: #61686e !important;\r\n  font-size: 14px;\r\n  background: #f8f8f8;\r\n  font-family: montserratlight;\r\n  padding: 0 10px\r\n}\r\n.editor-modal .form-control[disabled], .editor-modal .form-control[readonly], .editor-modal .form-group .form-control[disabled], .editor-modal .form-group .form-control[readonly], fieldset[disabled] .editor-modal .form-control, fieldset[disabled] .editor-modal .form-group .form-control {\r\n  background-color: #f8f8f8;\r\n  border: 1px solid rgba(97, 104, 110, .3);\r\n  padding: 0 10px\r\n}\r\n.icon-play-next i.material-icons {\r\n  font-size: 38px;\r\n  color: #fb6066 !important;\r\n  margin-top: 10px\r\n}\r\n.live-modal {\r\n  padding: 0 20px 50px\r\n}\r\n.live-modal td, .live-modal th {\r\n  padding: 0 !important;\r\n  border-bottom: 0 !important\r\n}\r\n.live-modal th {\r\n  width: 100%;\r\n  font-weight: 100\r\n}\r\n.selected-link {\r\n  white-space: nowrap;\r\n  overflow: auto;\r\n  overflow: hidden\r\n}\r\n.bootbox .modal-content {\r\n  float: left;\r\n  width: 100%\r\n}\r\n.bootbox .modal-body {\r\n  border-radius: 5px\r\n}\r\n.bootbox-body-left {\r\n  float: left;\r\n  width: 37px;\r\n  background: #fb545b;\r\n  border-radius: 5px 0 0 5px;\r\n  height: 132px;\r\n  display: table;\r\n  margin: -15px 20px -15px -15px\r\n}\r\n.bootbox-body .bootbox-body-left .mat-icon {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  float: none\r\n}\r\n.bootbox-body .bootbox-body-left .mat-icon i.material-icons {\r\n  padding-left: 6px;\r\n  color: #fff;\r\n  font-size: 24px\r\n}\r\n.bootbox-body .bootbox-body-right {\r\n  float: left;\r\n  width: 88%;\r\n  color: #626983;\r\n  font-size: 14px;\r\n  font-family: montserratlight;\r\n  padding: 5px 0 10px\r\n}\r\n.btn.btn-cancel, .btn.btn-ok {\r\n  background: 0 0;\r\n  font-size: 12px;\r\n  font-family: montserratregular\r\n}\r\n.one-line-bootbox .bootbox-body-left {\r\n  height: 102px\r\n}\r\n.bootbox-config .bootbox-body-left {\r\n  height: 142px\r\n}\r\n.btn.btn-ok {\r\n  border: 2px solid #fb545b;\r\n  border-radius: 0;\r\n  color: #fb545b !important;\r\n  padding: 3px 42px\r\n}\r\n.btn.btn-cancel {\r\n  border: 2px solid #8e989f;\r\n  border-radius: 0;\r\n  color: #8e989f !important;\r\n  padding: 3px 30px;\r\n  margin-right: 5px\r\n}\r\n.btn.btn-cancel.btn-cancel-hover:hover {\r\n  background: #8e989f;\r\n  color: #fff !important;\r\n  border-color: #8e989f;\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out\r\n}\r\n.btn-hover:hover {\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n  background: #fdb6b9 !important;\r\n  color: #fb545b !important;\r\n  border-color: #fdb6b9 !important\r\n}\r\n.btn-hover:focus {\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n  background: #fdb6b9 !important;\r\n  color: #fb545b !important;\r\n  border-color: #fdb6b9 !important\r\n}\r\n.btn-grey-hover:hover {\r\n  background: #bdc5c8 !important;\r\n  color: #fff !important;\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out\r\n}\r\n.alert-success {\r\n  color: #fff;\r\n  background-color: #00c853;\r\n  border-color: #00c853;\r\n  font-size: 12px;\r\n  font-family: montserratregular;\r\n  text-transform: capitalize;\r\n  padding: 7px 13px 10px;\r\n  margin-bottom: 0;\r\n  float: left\r\n}\r\n.alert-success i.material-icons {\r\n  font-size: 16px !important;\r\n  color: #fff;\r\n  position: relative;\r\n  top: 3px;\r\n  margin-left: 5px\r\n}\r\n@media (min-width:768px) {\r\n  .editor-modal .modal-dialog {\r\n    width: 500px;\r\n    margin: 80px auto !important\r\n  }\r\n}\r\n@media (max-width:767px) {\r\n  #lgScrSideNavbar, .dash-circle, .dash-prog-outer h2, .full-menu {\r\n    display: none\r\n  }\r\n  .dash-prog-outer{\r\n    display: none;\r\n  }\r\n  .new-dropdown-menu {\r\n    left: -114px;\r\n  }\r\n  .new-dropdown-menu:before {\r\n    left: 120px;\r\n  }\r\n  #responsive-header .navbar-fixed-top .nav-padding {\r\n    padding-right: 0;\r\n    padding-left: 0\r\n  }\r\n  .main-logo {\r\n    display: none !important\r\n  }\r\n  .mobile-menu {\r\n    display: block;\r\n    float: right;\r\n    margin-top: 7px;\r\n    position: relative\r\n  }\r\n  #responsive-header .navbar-default {\r\n    background: #fb5f66 !important;\r\n    border: none;\r\n    margin-top: 0\r\n  }\r\n  #responsive-header .navbar-default .mat-icon i.material-icons {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    padding: 13px\r\n  }\r\n  #responsive-header .navbar-header h4.title {\r\n    color: #fff;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    padding-top: 7px\r\n  }\r\n  .mobile-menu button {\r\n    border: none;\r\n    box-shadow: none;\r\n    color: #fff;\r\n    background: 0 0;\r\n    float: right;\r\n    margin: 0 5px\r\n  }\r\n  .mobile-menu button:focus {\r\n    background: 0 0 !important;\r\n    color: #fff !important\r\n  }\r\n  .mobile-menu .btn-default:hover {\r\n    color: #fff;\r\n    background: 0 0\r\n  }\r\n  .mobile-dash {\r\n    padding: 0\r\n  }\r\n  .mobile-menu .dropdown-menu {\r\n    background: #62696d;\r\n    top: -11px;\r\n    border-radius: 0;\r\n    left: -176px;\r\n    width: 235px;\r\n    font-family: montserratlight;\r\n    padding-bottom: 55px\r\n  }\r\n  .mobile-menu .name-dropdown-border {\r\n    width: 100%;\r\n    margin: 5px 0\r\n  }\r\n  .mobile-menu .user-outr {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: block;\r\n    text-transform: capitalize\r\n  }\r\n  .mobile-menu .user-outr li {\r\n    float: right;\r\n    font-size: 24px;\r\n    font-family: montserratlight;\r\n    color: #fff;\r\n    margin-right: 24px;\r\n    margin-top: 8px;\r\n    margin-bottom: 6px;\r\n    margin-left: 30px;        /*white-space: normal;*/\r\n    word-wrap: break-word;\r\n    width: 175px;\r\n    text-align: right;\r\n  }\r\n  .mobile-menu .user-outr li a {\r\n    margin-right: 30px\r\n  }\r\n  .user-outr li a {\r\n    float: left;\r\n    width: auto;\r\n    border: 2px solid #dae2e6;\r\n    border-radius: 50%;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px\r\n  }\r\n  .user-outr li a:hover {\r\n    border: 2px solid #f56151\r\n  }\r\n  .mobile-menu .company-list li, .mobile-menu .name-list li {\r\n    margin: 10px 0;\r\n    text-align: right;\r\n    font-size: 16px;\r\n    width: 100%;\r\n    float: left;\r\n    padding-right: 20px\r\n  }\r\n  .mobile-menu .company-list li a, .mobile-menu .name-list li a {\r\n    float: right;\r\n    color: #fff\r\n  }\r\n  .mobile-menu .company-list li a i {\r\n    margin-right: 20px;\r\n    float: left\r\n  }\r\n  .mobile-menu .name-list li a i {\r\n    margin-left: 20px;\r\n    float: right\r\n  }\r\n  .mobile-menu .company-list-title {\r\n    float: left;\r\n    color: #fff\r\n  }\r\n  .white-logo {\r\n    display: block !important\r\n  }\r\n  .dash-prog-outer {\r\n    float: left;\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px\r\n  }\r\n  .dash-prog-outer h5 {\r\n    font-size: 24px;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-bottom: 1px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper {\r\n    min-height: 35px;\r\n    width: 100%;\r\n    text-align: center\r\n  }\r\n  .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n    margin: 0 auto;\r\n    float: none;\r\n    text-align: center\r\n  }\r\n  #responsive-header .navbar-header {\r\n    float: left;\r\n    margin-left: -5px;\r\n    margin-right: 0 !important\r\n  }\r\n  #responsive-header .navbar-logopadding {\r\n    padding-right: 0;\r\n    padding-top: 0\r\n  }\r\n  #responsive-header .navbar-default {\r\n    height: 50px;\r\n    margin: 0;\r\n    padding-bottom: 0\r\n  }\r\n  .settings-cookies #new-header.cookies-parent {\r\n    height: 50px;\r\n    margin-bottom: 0\r\n  }\r\n  .white-logo .navbar-brand img {\r\n    height: 53px;\r\n    margin: -20px auto 0\r\n  }\r\n  .white-logo .navbar-brand {\r\n    float: none\r\n  }\r\n  .user-outr li a.add-user {\r\n    width: 45px;\r\n    height: 45px;\r\n    padding-top: 9px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\r\n    top: -30px;\r\n    left: 17px;\r\n    font-size: 34px;\r\n    position: relative;\r\n    color: #f87b80\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-title {\r\n    font-size: 16px\r\n  }\r\n  .company-dropdown-wrapper .dropdown-menu>li>a .company-site {\r\n    width: 91%;\r\n    font-size: 14px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-block-inner {\r\n    width: 35px;\r\n    height: 35px;\r\n    padding-top: 8px;\r\n    font-size: 14px;\r\n    top: 13px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a.add-new-company {\r\n    font-size: 14px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\r\n    font-size: 24px\r\n  }\r\n  .company-block-content {\r\n    margin-left: 50px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\r\n    right: 34px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n    top: 8px;\r\n    left: -8px\r\n  }\r\n  header#new-header.cookies-parent {\r\n    margin-bottom: 0;\r\n    height: 50px\r\n  }\r\n  .settings-cookies #smScrSideNavbar.left-sidebar, .settings-cookies .membership-details-inner-tabs {\r\n    top: 50px !important\r\n  }\r\n  #smScrWrapperContent {\r\n    display: none\r\n  }\r\n  #new-header .company-nav {\r\n    display: block !important\r\n  }\r\n  #new-header .navbar-default.company-nav {\r\n    background: #fff !important;\r\n    border-bottom: 1px solid #dae2e6;\r\n    padding-top: 0 !important\r\n  }\r\n  #new-header .company-nav .navbar-header {\r\n    width: 100% !important\r\n  }\r\n  #new-header .company-nav .navbar-logopadding {\r\n    padding-left: 15px;\r\n    padding-top: 22px;\r\n    height: 105px;\r\n    width: 100%;\r\n    padding-right: 15px !important\r\n  }\r\n  .company_name_avatar-circle {\r\n    margin-right: 15px\r\n  }\r\n  .company_name_span {\r\n    width: 57%;\r\n    line-height: 30px\r\n  }\r\n  #new-header {\r\n    height: 50px !important;\r\n  }\r\n  #new-header .company-nav.navbar-fixed-top .nav-padding {\r\n    padding-left: 0;\r\n    padding-right: 0\r\n  }\r\n  #new-header.cookies-parent {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n#add-new-user span#upgradeLink button {\r\n  color: #fb545b;\r\n  background-color: #fff;\r\n  border-radius: 0;\r\n  font-size: 10px;\r\n  padding: 6px 10px;\r\n  -webkit-transition: all .3s ease 0s;\r\n  transition: all .3s ease 0s;\r\n  font-family: montserratregular;\r\n  text-transform: uppercase;\r\n  box-shadow: none;\r\n  border: none;\r\n  margin-left: 10px\r\n}\r\n#add-new-user span#upgradeLink button:hover {\r\n  background: #fdb6b9;\r\n  color: #fb545b;\r\n  border-color: #fdb6b9\r\n}\r\n#add-new-user .alert.alert-danger p {\r\n  float: left;\r\n  width: auto;\r\n}\r\n#add-new-user .alert.alert-danger p span, #add-new-user span#upgradeLink {\r\n  float: left\r\n}\r\n\r\n@media (min-width:5120px) and (max-width:5120px) {\r\n    .dash-box{\r\n        min-height: 1000px;\r\n    }\r\n    .dash-box figure {\r\n        height: 500px;\r\n    }\r\n    .dash-box-top {\r\n        min-height: 500px;\r\n    }\r\n    .dash-top2-textinner{\r\n        min-height: 500px;\r\n    }\r\n    .dash-box-bottom{\r\n        padding: 80px;\r\n    }\r\n    .dash-box-bottom ul{\r\n        width: 100%;\r\n        margin-bottom: 100px;\r\n    }\r\n    .dash-box-bottom ul li{\r\n        margin-top: 50px;\r\n    }\r\n    .dash-top2-textinner h3{\r\n        margin-bottom: 100px;\r\n    }\r\n    .dash-top3-circle{\r\n        height: 280px;\r\n        width: 280px;\r\n        font-size: 23px;\r\n        padding-top: 80px;\r\n    }\r\n    .dash-top3circletable{\r\n        height: 1024px;\r\n    }\r\n    .dash-circle {\r\n        width: 100px;\r\n        height: 100px;\r\n        font-size: 44px;\r\n        margin-right: 28px;\r\n    }\r\n    .dash-prog-outer h2{\r\n        font-size: 26px !important;\r\n        line-height: 32px;\r\n        margin-top: 20px;\r\n    }\r\n    .dash-circle-red{\r\n        width: 100px;\r\n        height: 100px;\r\n        padding-top: 30px;\r\n    }\r\n    .circle-cal-outer{\r\n       width: 200px;\r\n    }\r\n    .circle-cal-outerh2 {\r\n        font-size: 34px !important;\r\n    }\r\n    .circle-cal-outer h5 {\r\n        font-size: 17px;\r\n    }\r\n    .dash-circle-pink{\r\n        width: 100px;\r\n        height: 100px;\r\n        padding-top: 30px;\r\n    }\r\n    .dash-circle-d-pink{\r\n        width: 100px;\r\n        height: 100px;\r\n        padding-top: 30px;\r\n    }\r\n    .dashboard-helptip.help-tip i{\r\n        font-size: 17px;\r\n    }\r\n    .dash-top2-textinner .company-dropdown-title-active{\r\n        font-size: 22px;\r\n    }\r\n    .dash-top2-textinner h3{\r\n        font-size: 36px;\r\n        margin-top: 20px;\r\n    }\r\n    .dash-box-send{\r\n        height: 120px;\r\n        width: 120px;\r\n        padding-top: 40px;\r\n    }\r\n    .dash-box-bottom ul li:first-child {\r\n        margin-top: 0px !important;\r\n    }\r\n\r\n}"

/***/ }),

/***/ 1222:
/***/ (function(module, exports) {

module.exports = "<sd-toolbar [page]=\"'dashboard'\"></sd-toolbar>\r\n<div class=\"preloader\" *ngIf=\"loader==0\">\r\n  <div class=\"status\">&nbsp;</div>\r\n</div>\r\n<!--<div class=\"loader\" *ngIf=\"loader==0\"></div>-->\r\n<div class=\"dashboard-toast\" style=\"display: none; bottom:60px;\"><i class=\"material-icons toast-ic\">check</i>\r\n  <span class=\"dash-toast-msg\">Calculator Deleted Successfully.</span>\r\n  <button type=\"button\" class=\"btn d-toast-btn\"><i class=\"material-icons\">clear</i></button>\r\n</div>\r\n<!-- Dashboard Section -->\r\n<div class=\"col-md-12 dashboard-topsec\">\r\n  <div class=\"col-md-4 col-sm-12 col-xs-12\">\r\n    <div class=\"dash-circle\">{{currentCompanyInit}}</div>\r\n    <div class=\"dash-prog-outer\">\r\n      <h2>Hey {{(username.substr(0,username.indexOf(' '))=='')?username:username.substr(0,username.indexOf(' '))}}, <br>We wish you a productive day :)</h2>\r\n      <h5 class=\"ellipsis hide\">{{currentCompany.name}}</h5>\r\n      <div class=\"btn-group company-dropdown-wrapper hide\">\r\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"material-icons\">keyboard_arrow_down</i>\r\n        </button>\r\n        <ul class=\"dropdown-menu\">\r\n          <li>\r\n            <a href=\"javascript:void(0);\" (click)=\"callGA('ADDCOMPANY')\" class=\"hvr-sweep-to-right add-new-company\" data-toggle=\"modal\" data-target=\"#add-new-company\">\r\n              <i class=\"material-icons\">playlist_add</i> &nbsp;Add New Company\r\n            </a>\r\n          </li>\r\n          <div class=\"company-dropdown-main\">\r\n            <div class=\"company-dropdown-list\" [class.slimscroll]=\"myCompaniesList.length > 3\">\r\n              <li *ngFor=\"let company of myCompaniesList\">\r\n                <a href=\"//{{company.sub_domain}}{{subdomainExtension}}/dashboard\" class=\"hvr-sweep-to-right\" *ngIf=\"company.user_company.active\">\r\n                  <div class=\"company-block\">\r\n                    <span class=\"company-block-inner\">{{company.name[0]}}</span>\r\n                  </div>\r\n                  <div class=\"company-block-content\">\r\n                    <span class=\"company-title ellipsis\">{{company.name}}</span>\r\n                    <span class=\"company-site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n            </div>\r\n          </div>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n    <div class=\"circle-sec\">\r\n      <div class=\"dash-circle-red\"><i class=\"material-icons\">person</i></div>\r\n      <div class=\"circle-cal-outer\">\r\n        <h2>{{totalUniqueVisitors}}</h2>\r\n        <h5>Unique Visitors</h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"circle-sec\">\r\n      <div class=\"dash-circle-pink\"><i class=\"material-icons\">check_circle</i></div>\r\n      <div class=\"circle-cal-outer\">\r\n        <h2>{{totalLeads}}</h2>\r\n        <h5>Leads Generated</h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"circle-sec hide\">\r\n      <div class=\"dash-circle-d-pink\"><i class=\"material-icons\">trending_up</i></div>\r\n      <div class=\"circle-cal-outer\">\r\n        <h2>{{overallConversionRate}}%</h2>\r\n        <h5>Conversion Rate</h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"circle-sec\">\r\n      <div class=\"dash-circle-d-pink\"><i class=\"material-icons\">trending_up</i></div>\r\n      <div class=\"circle-cal-outer\">\r\n        <h2>{{totalCta_Engagement}}</h2>\r\n        <h5>Engagements<div class=\"help-tip dashboard-helptip\">\r\n          <i class=\"material-icons\">info_outline</i>\r\n          <div class=\"help-checktip\">Number of times the user clicks on a call to action or a social share. Does not include engagement with forms.</div>\r\n        </div></h5>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-sm-12 col-xs-12 np\">\r\n    <ul class=\"user-outr\">\r\n\r\n      <li *ngFor=\"let user of currentCompanyUsers\">\r\n        <a href=\"javascript:void(0);\" class=\"more-users popover-wrapper\">\r\n          <span>{{user.name[0]}}</span>\r\n          <div class=\"more-popover-block single-user\">\r\n            <p class=\"ellipsis\">{{user.name}}</p>\r\n            <label class=\"ellipsis\">{{user.user_company.role}}</label>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li *ngIf=\"moreCompanyUsers.length > 0\">\r\n        <a href=\"javascript:void(0);\" class=\"more-users popover-wrapper\">\r\n          <i class=\"material-icons\">more_horiz</i>\r\n          <div class=\"more-popover-block \">\r\n            <ul>\r\n              <li *ngFor=\"let user of moreCompanyUsers\">\r\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\">\r\n                  <span>{{user.name[0]}}</span>\r\n                  <div class=\"more-users-list\">\r\n                    <p class=\"ellipsis\">{{user.name}}</p>\r\n                    <label class=\"ellipsis\">{{user.user_company.role}}</label>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a (click)=\"userCheckLimit()\" href=\"javascript:void(0);\" class=\"add-user popover-wrapper\">\r\n          <i class=\"material-icons\">add</i>\r\n          <div class=\"popover-block\">Add collaborator</div>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<!-- Dashboard Section End-->\r\n<!-- Dashboard 3 boxes start (sahil) -->\r\n<div class=\"col-xs-12 dash-boxes-outr\">\r\n  <div class=\"col-xs-12 col-sm-12 col-md-4\">\r\n    <div class=\"dash-box dash-top3\">\r\n      <div class=\"dash-top3-textinner hide\">\r\n        <label>Now</label>\r\n        <h3>Create a New Experience</h3>\r\n      </div>\r\n      <div class=\"dash-top3circletable\">\r\n        <!--<a href=\"javascript:void(0);\" class=\"dash-top3-circle\" (click)=\"addNewCalc();callGA('ADDCALC')\"  data-toggle=\"modal\" data-target=\"#calquiz-modal\">-->\r\n        <a href=\"javascript:void(0);\" class=\"dash-top3-circle\"  (click)=\"initCalcQuiz()\" >\r\n          <i class=\"material-icons lock-icon\" *ngIf=\"_featureAuthService.features.calculators!==-1 && apps?.length >= _featureAuthService.features.calculators\">lock_outline</i>\r\n          <i class=\"material-icons\" *ngIf=\"!(_featureAuthService.features.calculators!==-1 && apps?.length >= _featureAuthService.features.calculators)\">add_circle_outline</i>\r\n          Create a New Experience\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngFor=\"let app of apps\" id=\"calc_{{app._id}}\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 \">\r\n      <div class=\"dash-box\">\r\n        <div *ngIf=\"app.isAppSumoCreated && runningPlan == 'appsumo_d'\" class=\"banner\">\r\n          <span></span>\r\n          AppSumo\r\n          <div class=\"help-checktip\">Your appsumo plan comes with {{calcCount}}. To create more, please upgrade.</div>\r\n        </div>\r\n        <figure>\r\n          <div class=\"dash-box-top\" *ngIf=\"app.pages[0].bgImage\" [style.backgroundImage]=\"'url(' + app.pages[0].bgImage + ')' | safeStyle\">\r\n          </div>\r\n          <div class=\"dash-box-top\" *ngIf=\"!app.pages[0].bgImage\">\r\n          </div>\r\n        </figure>\r\n        <div class=\"dash-top2-textinner\">\r\n          <div class=\"\">\r\n            <span class=\"company-dropdown-title-active ellipsis\" *ngIf=\"app.liveApp\">Published: {{app.createdAt}}</span>\r\n            <span class=\"company-dropdown-title-active ellipsis\" *ngIf=\"!app.liveApp\">Last Edited: {{app.updatedAt}}</span>\r\n          </div>\r\n          <div class=\"dash-pullout-new\">\r\n            <i class=\"material-icons\">more_vert</i>\r\n            <ul class=\"new-dropdown-menu\">\r\n              <li>\r\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC')\">\r\n                  <div class=\"company-block\">\r\n                    <i class=\"material-icons\">format_paint</i>\r\n                  </div>\r\n                  <div class=\"company-block-content\">\r\n                    <span class=\"company-title ellipsis\">&nbsp;Edit</span>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\" checkAnalytics(app,'analytics');callGA('ANALYTICS')\">\r\n                  <div class=\"company-block\">\r\n                    <i class=\"material-icons\">trending_up</i>\r\n                  </div>\r\n                  <div class=\"company-block-content\">\r\n                    <span class=\"company-title ellipsis\">&nbsp;Analytics</span>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'config');selectSubTab('settings');callGA('SETTINGS');\">\r\n                  <div class=\"company-block\">\r\n                    <i class=\"material-icons\">mode_edit</i>\r\n                  </div>\r\n                  <div class=\"company-block-content\">\r\n                    <span class=\"company-title ellipsis\">&nbsp;Settings</span>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a class=\"hvr-sweep-to-right\" (click)=\"duplicateApp(app._id);callGA('DUPLICATE')\">\r\n                  <div class=\"company-block\">\r\n                    <i class=\"material-icons\">content_copy</i>\r\n                  </div>\r\n                  <div class=\"company-block-content\">\r\n                    <span class=\"company-title ellipsis\">&nbsp;Duplicate</span>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:void(0);\" (click)=\"deleteApp(app);callGA('DELETE')\" class=\"hvr-sweep-to-right\">\r\n                  <div class=\"company-block\">\r\n                    <i class=\"material-icons\">delete</i>\r\n                  </div>\r\n                  <div class=\"company-block-content\">\r\n                    <span class=\"company-title ellipsis\">&nbsp;Delete</span>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"btn-group company-dropdown-wrapper hide\">\r\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <div class=\"das-box-menu\">\r\n                <i class=\"material-icons\">more_vert</i>\r\n                <ul class=\"dropdown-menu\">\r\n                  <li>\r\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC')\">\r\n                      <div class=\"company-block\">\r\n                        <i class=\"material-icons\">format_paint</i>\r\n                      </div>\r\n                      <div class=\"company-block-content\">\r\n                        <span class=\"company-title ellipsis\">&nbsp;Edit Design</span>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'config');selectSubTab('settings');callGA('SETTINGS')\">\r\n                      <div class=\"company-block\">\r\n                        <i class=\"material-icons\">mode_edit</i>\r\n                      </div>\r\n                      <div class=\"company-block-content\">\r\n                        <span class=\"company-title ellipsis\">&nbsp;Edit Settings</span>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"checkAnalytics();callGA('ANALYTICS')\">\r\n                      <div class=\"company-block\">\r\n                        <i class=\"material-icons\">trending_up</i>\r\n                      </div>\r\n                      <div class=\"company-block-content\">\r\n                        <span class=\"company-title ellipsis\">&nbsp;View Analytics</span>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a class=\"hvr-sweep-to-right\" (click)=\"duplicateApp(app._id);callGA('DUPLICATE')\">\r\n                      <div class=\"company-block\">\r\n                        <i class=\"material-icons\">content_copy</i>\r\n                      </div>\r\n                      <div class=\"company-block-content\">\r\n                        <span class=\"company-title ellipsis\">&nbsp;Duplicate Calc</span>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'config');selectSubTab('share-your-calculator');callGA('SHARE')\">\r\n                      <div class=\"company-block\">\r\n                        <i class=\"material-icons\">computer</i>\r\n                      </div>\r\n                      <div class=\"company-block-content\">\r\n                        <span class=\"company-title ellipsis\">&nbsp;Publish / Share</span>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:void(0);\" (click)=\"deleteApp(app._id);callGA('DELETE')\" class=\"hvr-sweep-to-right\">\r\n                      <div class=\"company-block\">\r\n                        <i class=\"material-icons\">delete</i>\r\n                      </div>\r\n                      <div class=\"company-block-content\">\r\n                        <span class=\"company-title ellipsis\">&nbsp;Delete</span>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </button>\r\n          </div>\r\n          <h3>{{app.name}}</h3>\r\n          <div class=\"col-xs-12 text-center\">\r\n            <a href=\"javascript:void(0);\" (click)=\"openOldCalc(app,'build');callGA('OPENCALC')\" class=\"dash-box-send\">\r\n              <i class=\"material-icons\">send</i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"dash-box-bottom\">\r\n          <ul>\r\n            <li>\r\n              <i class=\"material-icons\">public</i>\r\n              <label class=\"text\">Status</label>\r\n              <div class=\"switch-outr\">\r\n                <div class=\"dummy-switch\" [class.red]=\"app.mode=='PUBLIC'\">\r\n                  <p>{{(app.mode=='PUBLIC')?'Live':'Draft'}}</p>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <i class=\"material-icons\">person</i>\r\n              <label class=\"text\">Unique Visits</label>\r\n              <span class=\"value\">{{ (app.uniqueViews!=undefined)?app.uniqueViews:'--' }}</span>\r\n            </li>\r\n            <li>\r\n              <i class=\"material-icons\">reorder</i>\r\n              <label class=\"text\">Leads Generated</label>\r\n              <span class=\"value\">{{ (app.leads!=undefined)?app.leads:'--' }}</span>\r\n            </li>\r\n            <li>\r\n              <i class=\"material-icons\">trending_up</i>\r\n              <label class=\"text\">Engagement</label>\r\n              <span class=\"value\">{{ (app.Cta_Engagement_Count!=undefined)?((app.Cta_Engagement_Count !='0')?app.Cta_Engagement_Count:'--'):'--' }}</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Dashboard 3 boxes end (sahil) -->\r\n\r\n<div id=\"add-new-company\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    Modal content\r\n    <div class=\"modal-content modal-bg\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <i class=\"material-icons\">close</i>\r\n        </button>\r\n        <h5 class=\"modal-title\">Create a New Company</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"sahil-material\">\r\n          <form [formGroup]=\"createCompanyForm\" (ngSubmit)=\"createCompany()\">\r\n            <div class=\"form-group label-floating\">\r\n              <label class=\"control-label\" for=\"companyname\"> New Company Name</label>\r\n              <input class=\"form-control\" id=\"companyname\" type=\"text\" name=\"companyname\" formControlName=\"companyname\" (focus)=\"hideError()\">\r\n            </div>\r\n            <div *ngIf=\"createCompanyForm.controls.companyname.touched && !createCompanyForm.controls.companyname.valid\" class=\"alert alert-danger\">\r\n              <p *ngIf=\"createCompanyForm.controls.companyname.errors.required\">Company Name is required.</p>\r\n              <p *ngIf=\"createCompanyForm.controls.companyname.errors.minlength\">Min 3 character is required.</p>\r\n            </div>\r\n            <div class=\"form-group label-floating\">\r\n              <label class=\"control-label\" for=\"domain\"> Company Url</label>\r\n              <input class=\"form-control\" id=\"domain\" type=\"text\" name=\"domain\" formControlName=\"domain\" (focus)=\"hideError()\">\r\n              <label class=\"in-active\">{{subdomainExtension}}</label>\r\n            </div>\r\n            <div *ngIf=\"createCompanyForm.controls.domain.touched && !createCompanyForm.controls.domain.valid\" class=\"alert alert-danger\">\r\n              <p *ngIf=\"createCompanyForm.controls.domain.errors.required\">Company Name is required.</p>\r\n              <p *ngIf=\"createCompanyForm.controls.domain.errors.minlength\">Min 3 character is required.</p>\r\n              <p *ngIf=\"createCompanyForm.controls.domain.errors.pattern\">\r\n                Invalid Url\r\n              </p>\r\n            </div>\r\n            <button type=\"submit\" id=\"btnCreateCompany\" class=\"btn btn-red-outline btn-add-user btn-hover\" [disabled]=\"!createCompanyForm.valid\">Add New Company</button>\r\n          </form>\r\n          <div class=\"alert alert-danger hide\" id=\"success-addCompany\">\r\n            {{Message}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        Your company will be created immediately. As soon as the company is created, you can start adding users to collaborate.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"add-new-user\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content modal-bg\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n                <h5 class=\"modal-title\">Add New User</h5>\r\n            </div>\r\n            <form [formGroup]=\"inviteUserForm\" (ngSubmit)=\"inviteUser()\" id=\"inviteUserForm\">\r\n                <div class=\"modal-body\">\r\n                    <!--<div class=\"alert alert-danger custom-alert hide\" id=\"success-addUser\">\r\n                        <p>\r\n                            <span class=\"mat-icon\">\r\n                                <i class=\"material-icons\">report_problem</i>\r\n                            </span>\r\n                            <span id=\"dashboardAdduserMessage\"></span>\r\n                        </p>\r\n                    </div>-->\r\n                    <div class=\"alert alert-danger custom-alert hide\" id=\"success-addUser\">\r\n                      <p>\r\n                        <span class=\"mat-icon\">\r\n                          <i class=\"material-icons\">report_problem</i>\r\n                        </span>\r\n                        <span id=\"dashboardAdduserMessage\"></span>\r\n                      </p>\r\n                      <span (click)=\"upgradeNavigation()\" id=\"upgradeLink\"><button type=\"\">UPGRADE</button></span>\r\n                    </div>\r\n                    <div class=\"sahil-material\">\r\n                        <div class=\"form-group label-floating name\">\r\n                            <label class=\"control-label\" for=\"inputName\"> Name</label>\r\n                            <input class=\"form-control\" id=\"inputName\" type=\"text\" formControlName=\"userName\" name=\"userName\" autocomplete=\"off\">\r\n                        </div>\r\n                        <div *ngIf=\"inviteUserForm.controls.userName.touched && !inviteUserForm.controls.userName.valid\" class=\"alert alert-danger\">\r\n                            <p *ngIf=\"inviteUserForm.controls.userName.errors.required\">Name is required.</p>\r\n                            <p *ngIf=\"inviteUserForm.controls.userName.errors.minlength\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tMin 3 character is required.\r\n\t\t\t\t\t\t\t</p>\r\n                        </div>\r\n                        <div class=\"form-group label-floating email\">\r\n                            <label class=\"control-label\" for=\"inputEmail\"> Email Address</label>\r\n                            <input class=\"form-control\" id=\"inputEmail\" type=\"email\" formControlName=\"userEmail\" name=\"userEmail\" autocomplete=\"off\">\r\n                        </div>\r\n                        <div *ngIf=\"inviteUserForm.controls.userEmail.touched && !inviteUserForm.controls.userEmail.valid\" class=\"alert alert-danger\">\r\n                            <p *ngIf=\"inviteUserForm.controls.userEmail.errors.required\">Email is required.</p>\r\n                            <p *ngIf=\"inviteUserForm.controls.userEmail.errors.checkmail\">Invalid Email.</p>\r\n                        </div>\r\n                        <div class=\"form-group form-group-radio\">\r\n                            <label class=\"radio-inline\">\r\n                                <input type=\"radio\" value=\"ADMIN\" id=\"radioAdmin\" formControlName=\"userRole\" name=\"userRole\">\r\n                                <label for=\"radioAdmin\"> </label> Admin {{userRole}}\r\n                            </label>\r\n                            <label class=\"radio-inline\">\r\n                                <input type=\"radio\" value=\"MANAGER\" id=\"radioManager\" formControlName=\"userRole\" name=\"userRole\">\r\n                                <label for=\"radioManager\"> </label> Manager\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"submit\" [disabled]=\"!inviteUserForm.valid\" class=\"btn btn-red-outline btn-add-user btn-hover\" id=\"btnInvite\">Add New User</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--- cal quiz modal -->\r\n<div id=\"calquiz-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog custom-width\">\r\n        <div class=\"modal-content modal-bg\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"calquiz-outr\">\r\n                        <div class=\"step1\">\r\n                             <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                    <i class=\"material-icons\">close</i>\r\n                                </button>\r\n                                <h5 class=\"modal-title\">What will You Create Today? </h5>\r\n                            </div>\r\n                            <!--<div class=\"calquiz-left\">\r\n                                <label class=\"check-icon\">\r\n                                    <input type=\"radio\" value=\"Numerical\" name=\"calQuiz\" id=\"radio1\" (click) = \"selectCalc()\">\r\n                                    <label for=\"radio1\">\r\n                                        <span class=\"outer-border \">\r\n                                            <i class=\"material-icons\">dialpad</i>\r\n                                        </span>\r\n                                    </label>\r\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 np calc-quiz-margin\">\r\n                                        <h3>Numerical Calculator</h3>\r\n                                        <span class=\"col-md-6 col-sm-12 col-xs-12 np\">Gives a result in the form of a number like a price estimate, percentage or\r\n\r\n\t\t\t\tscore.</span>\r\n                                        <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n                                           How much does it cost to remodel your kitchen?<br/>\r\n                                           What is the risk of getting zika?  <br/>\r\n                                           How much do you really know about the Lakers?\r\n                                        </p>\r\n                                    </div>\r\n                                </label>\r\n                            </div>-->\r\n                            <!--<div class=\"calquiz-right\">\r\n                                <label class=\"check-icon ic\">\r\n                                    <input type=\"radio\" value=\"Recommendation\" name=\"calQuiz\" id=\"radio2\" (click) = \"selectCalc()\" >\r\n                                    <label for=\"radio2\">\r\n                                        <span class=\"outer-border\">\r\n                                            <i class=\"material-icons\">filter_vintage</i>\r\n                                        </span>\r\n                                    </label>\r\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 np calc-quiz-margin\">\r\n                                        <h3>Outcome Quiz</h3>\r\n                                        <span class=\"col-md-6 col-sm-12 col-xs-12 np\">Gives a result in the form of a recommendation or a suggestion.</span>\r\n                                        <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n                                            Which jeans should you wear?<br/>\r\n                                            Which insurance plan is right for you?<br/>\r\n                                            Which celebrity matches your style?\r\n                                        </p>\r\n                                    </div>\r\n                                </label>\r\n                            </div>-->\r\n                            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                <div class=\"calquiz-left\">\r\n                                    <label class=\"check-icon\">\r\n                                            <input type=\"radio\" value=\"Numerical\" name=\"calQuiz\" id=\"radio1\" (click) = \"selectCalc()\">\r\n                                            <label for=\"radio1\">\r\n                                                <span class=\"outer-border \">\r\n                                                    <!--<i class=\"material-icons\">dialpad</i>-->\r\n                                                    <span class=\"animated-icon animated-calc\">\r\n                                                    </span>\r\n                                                </span>\r\n                                            </label>\r\n                                            <div class=\"calc-quiz-margin\">\r\n                                                <h3>Numerical Calculator</h3>\r\n                                                <span class=\"\">Gives a result in the form of a number like a price estimate, percentage or score.</span>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 np res-outer\">\r\n                                                <h3 class=\"example-heading\">Examples</h3>\r\n                                                <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n                                                How much does it cost to remodel your kitchen?<br>\r\n                                                What is the risk of getting zika?    <br>\r\n                                                How much do you really know about the Lakers?\r\n                                                </p>\r\n                                            </div>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"calquiz-right\">\r\n                                        <label class=\"check-icon ic\">\r\n                                                <input type=\"radio\" value=\"Recommendation\" name=\"calQuiz\" id=\"radio2\" (click) = \"selectCalc()\">\r\n                                                <label for=\"radio2\">\r\n                                                    <span class=\"outer-border\">\r\n                                                        <!--<i class=\"material-icons\">insert_photo</i>-->\r\n                                                        <span class=\"animated-icon animated-recom\">\r\n                                                        </span>\r\n                                                    </span>\r\n                                                </label>\r\n                                                <div class=\"calc-quiz-margin\">\r\n                                                    <h3>Outcome Quiz</h3>\r\n                                                    <span class=\"col-md-7 col-sm-12 col-xs-12 np\">Gives a result in the form of a recommendation or a suggestion.</span>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-12 np res-outer\">\r\n                                                    <h3 class=\"example-heading\">Examples</h3>\r\n                                                    <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n                                                    Which jeans should you wear?<br>\r\n                                                    Which insurance plan is right for you? <br>\r\n                                                    Which celebrity matches your style?\r\n                                                    </p>\r\n                                                </div>\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                        </div>\r\n                   <form [formGroup] = \"calcNameform\" (ngSubmit) = \"onAddNewCalc()\" id=\"type-calc\" novalidate>\r\n                        <div class=\"step2 hide\">\r\n                             <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                    <i class=\"material-icons\">close</i>\r\n                                </button>\r\n                                <h5 class=\"modal-title\">Add a Title </h5>\r\n                            </div>\r\n                            <div class=\"calquiz-left calquiz-right full-width\">\r\n                                <div class=\"back-icon\" (click)=\"goBack()\">\r\n                                    <i class=\"material-icons\">arrow_back</i>\r\n                                </div>\r\n                                <label class=\"check-icon\">\r\n                                    <input type=\"radio\" checked=\"checked\" id=\"lopa\" name=\"noname\">\r\n                                    <label for=\"lopa\">\r\n                                        <span class=\"outer-border\">\r\n                                            <i class=\"material-icons\" *ngIf=\"calcType ==='Numerical'\">dialpad</i>\r\n                                            <i class=\"material-icons\" *ngIf=\"calcType ==='Recommendation'\">insert_photo</i>\r\n                                        </span>\r\n                                    </label>\r\n                                </label>\r\n                                <div class=\"col-md-12 col-sm-12 col-xs-12 np calc-quiz-margin text-center\">\r\n                                    <div>\r\n                                        <h3 *ngIf=\"calcType ==='Recommendation'\">Quiz Title</h3>\r\n                                        <h3 *ngIf=\"calcType ==='Numerical'\">Calculator Title</h3>\r\n                                        <input type=\"text\" placeholder=\"{{calcType=='Recommendation'?'Which insurance plan is right for you?':'Estimate the Cost of Building a Website'}}\"  (blur)=\"reset = true;\" formControlName=\"calcName\" name=\"calcName\" class=\"calcName-input\" >\r\n                                        <div *ngIf=\"(calcNameform.controls.calcName.touched && !calcNameform.controls.calcName.valid) && reset\" class=\"alert alert-danger\">\r\n                                            <p >\r\n                                                <span  class=\"mat-icon\">\r\n                                                    <i class=\"material-icons\">report_problem</i>\r\n                                                </span>\r\n                                                <span *ngIf=\"calcType ==='Numerical'\">Calculator name is required.</span>\r\n                                                <span *ngIf=\"calcType ==='Recommendation'\">Quiz title is required.</span>\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                             <button  class=\"btn btn-red btn-hover\">\r\n                                <span *ngIf=\"calcType ==='Numerical'\">Select Template</span>\r\n                                <span *ngIf=\"calcType ==='Recommendation'\">Select Template</span>\r\n                            </button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> </div>\r\n<!--- cal quiz modal -->\r\n\r\n<div class=\"float-changes-updated hide\">\r\n  <div class=\"col-md-12 np\">\r\n    <span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\r\n    <span id=\"floatMessage\">{{ Message }} </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(1075);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_membership_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analytics_services_calculator_analytics_service__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_dashboard_service__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__templates_controls_controls_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolbar_toolbar_module__ = __webpack_require__(603);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forChild(DASHBOARD_ROUTES), __WEBPACK_IMPORTED_MODULE_8__templates_controls_controls_module__["a" /* ControlsModule */], __WEBPACK_IMPORTED_MODULE_9__toolbar_toolbar_module__["a" /* ToolbarModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__["a" /* BuilderService */], __WEBPACK_IMPORTED_MODULE_4__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */], __WEBPACK_IMPORTED_MODULE_3__shared_services_membership_service__["a" /* MembershipService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/dashboard.module.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorAnalytics; });
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
    CalculatorAnalytics.prototype.exportToSheet = function (data) {
        var URL = this._url + '/analytic/export_to_sheet';
        return this._http.post(URL, data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    //getleads
    CalculatorAnalytics.prototype.getAvgOfLeads = function (data) {
        return this._http.post(this._url + '/analytic/get_leads_avg', data, this.post_options())
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], CalculatorAnalytics);
    return CalculatorAnalytics;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__["a" /* BaseService */]));
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/calculator-analytics.service.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
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



var DashboardService = (function (_super) {
    __extends(DashboardService, _super);
    function DashboardService(_http) {
        _super.call(this);
        this._http = _http;
    }
    DashboardService.prototype.duplicateApp = function (appId) {
        return this._http.post(this._url + '/dashboard/duplicate_app', appId, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DashboardService.prototype.deleteApp = function (appId) {
        return this._http.post(this._url + '/dashboard/delete_app', appId, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DashboardService.prototype.changeAppMode = function (id) {
        return this._http.post(this._url + '/dashboard/change_app_mode', { id: id }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DashboardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], DashboardService);
    return DashboardService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/dashboard.service.js.map

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_emails__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userCompany__ = __webpack_require__(606);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });


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
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/user.js.map

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Emails; });
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
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/emails.js.map

/***/ })

});
//# sourceMappingURL=6.bundle.map