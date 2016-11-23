webpackJsonp([6,11],{

/***/ 1010:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_validators_email_validator__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_feature_access_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_company__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_user__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__analytics_services_calculator_analytics_service__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(18);
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
            companyname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)])],
            domain: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('^[a-zA-Z0-9]*$')])]
        });
        this.inviteUserForm = this.fb.group({
            userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, , __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)])],
            userEmail: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__shared_validators_email_validator__["a" /* EmailValidator */].format])],
            userRole: ['MANAGER', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])]
        });
        this.calcNameform = this.fb.group({
            calcName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])]
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
            if (localStorage.getItem('temp_type') === 'Recommendation') {
                localStorage.setItem('temp_name', 'one-page-card');
                //this._router.navigate(['/builder']);
                window.location.href = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].APP_EXTENSION + '/builder/';
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
        window.location.href = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].APP_EXTENSION + '/builder/' + app.url;
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
            template: __webpack_require__(1140),
            styles: [__webpack_require__(1067)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["h" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["h" /* MembershipService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* SubDomainService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* CompanyService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["i" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["i" /* DashboardService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__["a" /* BuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__["a" /* BuilderService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_feature_access_service__["a" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_services_feature_access_service__["a" /* FeatureAuthService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["c" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["c" /* CookieService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* Script */]) === 'function' && _l) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());


/***/ },

/***/ 1067:
/***/ function(module, exports) {

module.exports = "body, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\n  font-family: 'montserratregular' !important;\n  font-weight: 300  !important;\n}\n\n.dash-circle{float:left; width:80px; height:80px;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px; background:#eceff0; color:#444f54;\n  text-align:center; font-family:montserratregular; font-size:24px; padding-top:23px; margin-right:20px;  text-transform: uppercase;}\n\n.dash-prog-outer{float:left; width:300px;}\n.dash-prog-outer h2{\n  float: left;\n  color: #62696d;\n  font-size: 19px!important;\n  font-family: montserratlight!important;\n  margin: 16px 0 8px;\n  line-height: 24px;\n}\n.dash-prog-outer h5{ float:left;color:#f56151; font-size:13px; font-family:montserratregular;  text-transform:uppercase; margin-top:0; max-width: 90%;}\n\n.circle-sec{ float:left; width:33%;}\n\n.circle-cal-outer{float:left; width:100px;}\n.circle-cal-outer h2{ color: #62696d;\n  float: left;\n  font-family: montserratregular !important;\n  font-size: 24px !important;\n  margin: 15px 0 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 102%;}\n.circle-cal-outer h5{ float:left;color:#8e989f; font-size:10px; font-family:montserratregular;  text-transform:uppercase; margin-top:0;}\n\n.dash-circle-red{float:left; width:77px; height:77px;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px; color:#cbd1d4;\n  text-align:center; font-family:montserratregular; padding-top:18px; margin-right:20px; border:3px solid #fb545b;  }\n.dash-circle-pink{ float:left; width:77px; height:77px;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px; color:#cbd1d4;\n  text-align:center; font-family:montserratregular; padding-top:18px; margin-right:20px; border:3px solid #ff5796;  }\n.dash-circle-d-pink{ float:left; width:77px; height:77px;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px; color:#cbd1d4;\n  text-align:center; font-family:montserratregular;  padding-top:18px; margin-right:20px; border:3px solid #c859b7;  }\n.dash-circle-red i,.dash-circle-pink i,.dash-circle-d-pink i{ font-size:35px;}\n\n\n/* ####  dashboard 3 boxes css start (sahil) ### */\n.dashboard-topsec{\n  padding-top: 25px;\n  background: #f6f8f9;\n  padding-bottom: 25px;\n}\n.user-outr{\n  float: right;\n  width: 70%;\n  padding: 0;\n}\n.user-outr li{\n  float: left;\n}\n.user-outr li a{\n  float: left;\n  width: auto;\n  border: 2px solid #dae2e6;\n  border-radius: 50%;\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\n.user-outr li a:hover{\n  border: 2px solid #f56151;\n}\n.user-outr li a img{\n  float: left;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n}\n.user-outr li a span{\n  float: none;\n  text-align: center;\n  font-size: 16px;\n  padding-top: 1px;\n  color: #f56151;\n  text-transform: uppercase;\n  display: inline-block;\n}\n.user-outr li a.more-users{\n  float: left;\n  width: 35px;\n  border: 2px solid #dae2e6;\n  border-radius: 50%;\n  margin-left: 5px;\n  margin-bottom: 5px;\n  background: #fff;\n  color: #dae2e6;\n  height: 35px;\n  text-align: center;\n  padding-top: 3px;\n  margin-top: 3px;\n}\n.user-outr li a.more-users:hover{\n  color: #fb545b;\n  border: 2px solid #fb545b;\n}\n.user-outr li a.single-user{\n  width: 34px;\n  height: 34px;\n  float: left;\n  text-align: center;\n  font-size: 16px;\n  padding-top: 6px;\n  color: #f56151;\n  text-transform: uppercase;\n}\n/* Start: popover effect */\n.popover-wrapper .more-popover-block {\n  position: relative;\n  top: 10px;\n  left: -76px;\n  min-width: 180px;\n  padding: 8px;\n  font-size: 12px;\n  border-radius: 0px;\n  background: #62696d;\n  /* color: #fff; */\n  border-radius: 4px !important;\n  border: none;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\n  display: none;\n  z-index: 9;\n}\n\n.popover-wrapper:hover .more-popover-block {\n  display: block;\n  float: left;\n  padding: 0;\n}\n\n.popover-wrapper .more-popover-block:before {\n  position: absolute;\n  top: -8px;\n  right:83px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 8px solid #62696d;\n  border-left: 6px solid transparent;\n  border-bottom-color: #62696d;\n  content: '';\n}\n.popover-wrapper .single-user.more-popover-block {\n  position: relative;\n  top: 25px;\n  left: -56px;\n  min-width: 150px;\n  padding: 8px;\n  font-size: 12px;\n  border-radius: 0px;\n  background: #62696d;\n  /* color: #fff; */\n  border-radius: 4px !important;\n  border: none;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\n  display: none;\n  z-index: 9;\n}\n.popover-wrapper:hover .single-user.more-popover-block {\n  display: block;\n  float: left;\n  padding: 0;\n}\n\n.popover-wrapper .single-user.more-popover-block:before {\n  position: absolute;\n  top: -8px;\n  right: 72px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 8px solid #62696d;\n  border-left: 6px solid transparent;\n  border-bottom-color: #62696d;\n  content: '';\n}\n.popover-wrapper .single-user.more-popover-block p{\n  float: left;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  font-size: 12px;\n  margin: 0;\n  padding: 6px;\n  padding-bottom: 0;\n}\n.popover-wrapper .single-user.more-popover-block label{\n  float: left;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 11px;\n  text-align: center;\n  padding: 6px;\n  padding-top: 0;\n}\n\n\n\n/* End: popover effect */\n\n\n\n.more-users .more-popover-block ul{\n  float: left;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.more-users .more-popover-block ul li{\n  float: left;\n  width: 100%;\n}\n.more-users .more-popover-block ul li a{\n  float: left;\n  border: none;\n  width: 100%;\n  padding: 10px;\n  margin: 0;\n}\n.more-users .more-popover-block ul li a.hvr-sweep-to-right:before{\n  background: #71787b ;\n}\n.more-users .more-popover-block ul li a span{\n  float: left;\n  border: none;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  text-align: center;\n  background: #f6f8f9;\n  font-size: 14px;\n  padding-top: 5px;\n}\n.more-users .more-popover-block ul li a .more-users-list{\n  float: left;\n  width: 66%;\n  margin-left: 10px;\n}\n.more-users .more-popover-block ul li a .more-users-list p{\n  float: left;\n  width: 100%;\n  text-align: left;\n  color: #fff;\n  font-size: 12px;\n  margin: 0;\n}\n.more-users .more-popover-block ul li a .more-users-list label{\n  float: left;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 11px;\n  text-align: left;\n}\n.user-outr li a.add-user{\n  float: left;\n  width: 35px;\n  border: 2px solid #fb545b;\n  border-radius: 50%;\n  margin-left: 5px;\n  margin-bottom: 5px;\n  background: #fb545b;\n  color: #fff;\n  height: 35px;\n  text-align: center;\n  padding-top: 3px;\n  margin-top: 3px;\n}\n.dash-boxes-outr{\n  float: left;\n  width: 100%;\n  border-top: 1px solid #dae2e6;\n  padding: 35px;\n  background: #f6f8f9;\n  min-height: 77vh;\n}\n.dash-box{\n  border: 1px solid #dae2e6;\n  min-height: 250px;\n  float: left;\n  width: 100%;\n  cursor: pointer;\n  margin-bottom: 30px;\n  position: relative;\n}\n.dash-box:hover{\n  box-shadow: 0 2px 5px 1px rgba(0,0,0,0.2);\n}\n.dash-box figure{\n  height: 187px;\n  overflow: hidden;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n}\n.dash-box-top{\n  background-image: url(app/site/components/+dashboard/images/dash-top.jpg);\n  background-size: cover;\n  background-position: center center;\n  float: left;\n  width: 100%;\n  min-height: 187px;\n\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n}\n.dash-box:hover .dash-box-top{\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2);\n}\n\n\n.dash-box-bottom{\n  padding: 28px;\n  width: 100%;\n  float: left;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  background: #fff;\n}\n.dash-box-bottom ul{\n  padding: 0px;\n  float: left;\n}\n.dash-box-bottom ul li{\n  float: left;\n  width: 100%;\n  margin-top: 22px;\n}\n.dash-box-bottom ul li i{\n  float: left;\n  color: #ccc;\n  font-size: 24px;\n  padding-right: 20px;\n}\n.switch-outr{\n  float: right;\n}\n.dash-box-bottom ul li label.text{\n  font-size:13px;\n  color:#999999;\n  float: left;\n  text-transform: uppercase;\n  margin-top: 3px;\n  margin-bottom: 0px;\n  font-weight: normal;\n}\n.dash-box-bottom ul li span.value{\n  font-size:20px;\n  color:#fb545b;\n  float: right;\n  text-align: right;\n}\n.dash-box2{\n  float: left;\n  width: 100%;\n  min-height: 406px;\n  cursor: pointer;\n  margin-bottom: 30px;\n}\n.dash-box2:hover{\n  box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);\n}\n.dash-box2 figure{\n  height: 187px;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: 93%;\n  z-index: -1;\n}\n.dash-box-figure2{\n  min-height:336px;\n}\n.dash-top2{\n  background-image: url(app/site/components/+dashboard/images/dash-top2.jpg);\n  background-size: cover;\n  float: left;\n  width: 100%;\n  min-height: 336px;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n}\n.dash-box2:hover .dash-top2{\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2);\n}\n.dash-top2-text{\n  float: left;\n  width: 100%;\n}\n.dash-top2-textinner{\n  float: left;\n  padding: 28px;\n  position: absolute;\n  min-height: 187px;\n  top: 0px;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.3) none repeat scroll 0 0;\n}\n.dash-top2-textinner label{\n  float: left;\n  width: auto;\n  color: #ffffff;\n  font-size: 12px;\n  line-height: normal;\n  font-family: 'montserratlight';\n}\n.dash-top2-textinner i{\n  position: relative;\n  float: left;\n  color: #fff;\n  font-size: 18px;\n  margin-left: 5px;\n}\n.dash-top2-textinner h3{\n  float: left;\n  width: 94%;\n  color: #ffffff;\n  font-size: 16px;\n  text-transform: uppercase;\n  line-height: 22px;\n  margin-top: 0px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-bottom: 20px;\n}\n\n\n\n.dash-top3{\n  background: rgb(248,248,248); /* Old browsers */\n  background: -moz-linear-gradient(top,  rgba(248,248,248,1) 0%, rgba(240,240,240,1) 100%); /* FF3.6-15 */\n  background: -webkit-linear-gradient(top,  rgba(248,248,248,1) 0%,rgba(240,240,240,1) 100%); /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom,  rgba(248,248,248,1) 0%,rgba(240,240,240,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8f8f8', endColorstr='#f0f0f0',GradientType=0 ); /* IE6-9 */\n\n  width: 100%;\n  min-height: 411px;\n  display: table;\n}\n.dash-top3:hover .dash-top3circletable{\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2);\n}\n.dash-top3circletable{\n  width: 100%;\n  float: none;\n  text-align: center;\n  display: table-cell;\n  height: 409px;\n  vertical-align: middle;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n}\n.dash-top3-circle{\n  background:#fcfcfc;\n  height:151px;\n  width:151px;\n  border-radius:50%;\n  text-align: center;\n  vertical-align: middle;\n  color: #999999;\n  font-size: 13px;\n  line-height: normal;\n  display: inline-block;\n  padding-top: 46px;\n}\n.dash-top3-circle:hover,.dash-top3-circle:focus{\n  color: #fb545b;\n}\n.dash-top3-circle i{\n  display:block;\n  color: #fb545b;\n  font-size: 24px;\n  margin-bottom: 7px;\n}\n\n.dash-top3-textinner{\n  float: left;\n  width: 100%;\n  padding: 28px;\n}\n.dash-top3-textinner label{\n  float: left;\n  width: auto;\n  color: #62696d;\n  font-size: 12px;\n  line-height: normal;\n  font-family: 'montserratlight';\n}\n.dash-top3-textinner i{\n  position: relative;\n  float: left;\n  color: #fff;\n  font-size: 18px;\n  margin-left: 5px;\n}\n.dash-top3-textinner h3{\n  float: left;\n  width: 100%;\n  color: #62696d;\n  font-size: 16px;\n  text-transform: uppercase;\n  line-height: 22px;\n  margin-top: 0px;\n}\n\n.dash-prog-outer .company-dropdown-wrapper{\n  margin: 0px;\n  margin-left: 5px;\n  float: left;\n  min-height: 35px;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\n  font-size: 18px;\n  color: #fff;\n  padding: 0;\n  position: relative;\n  top: 5px;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\n  color: #fff;\n  padding: 5px 15px 10px;\n  text-transform: capitalize;\n  font-family: montserratregular;\n  float: left;\n  width: 100%;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle{\n  line-height: normal !important;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i{\n  color: #f56151;\n  font-size: 20px;\n  position: relative;\n  top: -3px;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i:hover{\n  color: #f87b80;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle span.company-dropdown-title-active{\n  width: 90%;\n  float: left;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before{\n  right: 91px;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.hvr-sweep-to-right::before{\n  background: #71787b none repeat scroll 0 0;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n  top: 27px;\n  left: -80px;\n  min-width: 190px;\n  font-size: 12px;\n  border-radius: 0px;\n  /* background: #f87b80; */\n  /* color: #fff; */\n  background: #62696d;\n  border-radius: 4px !important;\n  border: none;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\n  display: none;\n  z-index: 9;\n}\n.dash-prog-outer .company-dropdown-wrapper:hover .dropdown-menu {\n  display: block;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a {\n  color: #fff;\n  padding: 10px 15px;\n  text-transform: capitalize;\n  font-family: montserratregular;\n  float: left;\n  width: 100%;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-block {\n  float: left;\n  width: 10%;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\n  background: #fff;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  color: #62696d;\n  text-align: center;\n  padding-top: 3px;\n  font-size: 11px;\n  top: 13px;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\n  background: #fff;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  color: #62696d;\n  text-align: center;\n  padding-top: 3px;\n  font-size: 11px;\n  top: 13px;\n}\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\n  float: left;\n  width: 95%;\n}\n.company-dropdown-wrapper .dropdown-menu > li > a .company-site {\n  float: left;\n  width: 95%;\n  font-size: 10px;\n}\n.dash-top2-textinner .company-dropdown-wrapper{\n  float: right;\n  margin: 0;\n  width: 6%;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-toggle{\n  line-height: normal;\n  text-align: left;\n  width: 100%;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-toggle span{\n  color: #fff;\n  line-height: normal;\n  width: 90% !important;\n  float: left;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu{\n  left: -67px;\n  min-width: 155px;\n  padding: 10px 0;\n  top: 28px;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu::before{\n  right: 65px;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu li a{\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu li a.hvr-sweep-to-right::before{\n  background: #71787b none repeat scroll 0 0;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block{\n  float: left;\n  margin-right: 3px;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block i{\n  font-size: 16px;\n  color: #fff !important;\n  margin: 0px;\n  margin-right: 10px;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block-content{\n  float: left;\n  margin: 0px;\n  width: 78%;\n  color: #fff;\n}\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block-content .company-title{\n  float: left;\n  width: 100%;\n}\n.dash-top2-textinner .das-box-menu\n{\n  float: right;\n  position: relative;\n}\n.dash-top2-textinner .company-dropdown-title-active{\n  color: #fff;\n  line-height: normal;\n  font-size: 12px;\n  font-family: montserratlight;\n  width: 90% !important;\n  float: left;\n}\n.dash-pullout-new{\n  float: right;\n  width: 6%;\n  position: relative;\n  padding-bottom: 10px;\n}\n.dash-pullout-new:hover .new-dropdown-menu{\n  display: block;\n}\n.new-dropdown-menu{\n  position: absolute;\n  left: -64px;\n  top: 32px;\n  float: left;\n  background: #62696d;\n  color: #fff;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\n  display: none;\n  padding: 10px 0;\n  z-index: 9;\n  border-radius: 4px !important;\n  min-width: 155px;\n}\n.new-dropdown-menu:before\n{\n  position: absolute;\n  top: -12px;\n  left: 70px;\n  display: inline-block;\n  border-right: 8px solid transparent;\n  border-bottom: 12px solid #62696d;\n  border-left: 8px solid transparent;\n  border-bottom-color: #62696d;\n  content: '';\n}\n.new-dropdown-menu a\n{\n  width: 100%;\n  float: left;\n  padding: 5px 10px;\n}\n.new-dropdown-menu a.hvr-sweep-to-right:before\n{\n  background:#71787b none repeat scroll 0 0;\n}\n.new-dropdown-menu a .company-block\n{\n  float: left;\n  margin-right: 3px;\n}\n.new-dropdown-menu a .company-block i\n{\n  font-size: 16px;\n  color: #fff !important;\n  margin: 0px;\n  margin-right: 10px;\n}\n.new-dropdown-menu a .company-block-content\n{\n  float: left;\n  margin: 0px;\n  width: 78%;\n  color: #fff;\n}\n.new-dropdown-menu a .company-block-content .company-title\n{\n  color: #fff;\n  line-height: normal;\n  width: 90% !important;\n  float: left;\n  font-size: 12px;\n  font-family: montserratlight;\n}\n\n\n\n/* switch new css (sahil) */\n.onoffswitch {\n  position: relative; width: 80px;\n  -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;\n}\n.onoffswitch-checkbox {\n  display: none;\n}\n.onoffswitch-label {\n  display: block; overflow: hidden; cursor: pointer;\n  border-radius: 20px;\n}\n.onoffswitch-inner {\n  display: block; width: 200%; margin-left: -100%;\n  transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before, .onoffswitch-inner:after {\n  display: block; float: left; width: 50%; height: 20px; padding: 0; line-height: 20px;\n  font-size: 13px; color: white;\n  box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n  content: \"Public\";\n  padding-left: 10px;\n  background-color: #f87b80; color: #FFFFFF;\n  font-weight: normal;\n}\n.onoffswitch-inner:after {\n  content: \"Private\";\n  padding-right: 10px;\n  background-color: #EEEEEE; color: #999999;\n  text-align: right;\n}\n.onoffswitch-switch {\n  display: block;\n  width: 14px;\n  height: 14px;\n  margin: 3px;\n  background: #FFFFFF;\n  position: absolute; top: 0; bottom: 0;\n  right: 56px; border-radius: 20px;\n  transition: all 0.3s ease-in 0s;\n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\n  margin-left: 0;\n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\n  right: 0px;\n}\n\n/* switch new css end (sahil) */\n\n/* Circluar progress css start (sahil) */\n.rect-auto,\n.c100.p51 .slice,\n.c100.p52 .slice,\n.c100.p53 .slice,\n.c100.p54 .slice,\n.c100.p55 .slice,\n.c100.p56 .slice,\n.c100.p57 .slice,\n.c100.p58 .slice,\n.c100.p59 .slice,\n.c100.p60 .slice,\n.c100.p61 .slice,\n.c100.p62 .slice,\n.c100.p63 .slice,\n.c100.p64 .slice,\n.c100.p65 .slice,\n.c100.p66 .slice,\n.c100.p67 .slice,\n.c100.p68 .slice,\n.c100.p69 .slice,\n.c100.p70 .slice,\n.c100.p71 .slice,\n.c100.p72 .slice,\n.c100.p73 .slice,\n.c100.p74 .slice,\n.c100.p75 .slice,\n.c100.p76 .slice,\n.c100.p77 .slice,\n.c100.p78 .slice,\n.c100.p79 .slice,\n.c100.p80 .slice,\n.c100.p81 .slice,\n.c100.p82 .slice,\n.c100.p83 .slice,\n.c100.p84 .slice,\n.c100.p85 .slice,\n.c100.p86 .slice,\n.c100.p87 .slice,\n.c100.p88 .slice,\n.c100.p89 .slice,\n.c100.p90 .slice,\n.c100.p91 .slice,\n.c100.p92 .slice,\n.c100.p93 .slice,\n.c100.p94 .slice,\n.c100.p95 .slice,\n.c100.p96 .slice,\n.c100.p97 .slice,\n.c100.p98 .slice,\n.c100.p99 .slice,\n.c100.p100 .slice {\n  clip: rect(auto, auto, auto, auto);\n}\n.pie,\n.c100 .bar,\n.c100.p51 .fill,\n.c100.p52 .fill,\n.c100.p53 .fill,\n.c100.p54 .fill,\n.c100.p55 .fill,\n.c100.p56 .fill,\n.c100.p57 .fill,\n.c100.p58 .fill,\n.c100.p59 .fill,\n.c100.p60 .fill,\n.c100.p61 .fill,\n.c100.p62 .fill,\n.c100.p63 .fill,\n.c100.p64 .fill,\n.c100.p65 .fill,\n.c100.p66 .fill,\n.c100.p67 .fill,\n.c100.p68 .fill,\n.c100.p69 .fill,\n.c100.p70 .fill,\n.c100.p71 .fill,\n.c100.p72 .fill,\n.c100.p73 .fill,\n.c100.p74 .fill,\n.c100.p75 .fill,\n.c100.p76 .fill,\n.c100.p77 .fill,\n.c100.p78 .fill,\n.c100.p79 .fill,\n.c100.p80 .fill,\n.c100.p81 .fill,\n.c100.p82 .fill,\n.c100.p83 .fill,\n.c100.p84 .fill,\n.c100.p85 .fill,\n.c100.p86 .fill,\n.c100.p87 .fill,\n.c100.p88 .fill,\n.c100.p89 .fill,\n.c100.p90 .fill,\n.c100.p91 .fill,\n.c100.p92 .fill,\n.c100.p93 .fill,\n.c100.p94 .fill,\n.c100.p95 .fill,\n.c100.p96 .fill,\n.c100.p97 .fill,\n.c100.p98 .fill,\n.c100.p99 .fill,\n.c100.p100 .fill {\n  position: absolute;\n  border: 0.08em solid #307bbb;\n  width: 0.84em;\n  height: 0.84em;\n  clip: rect(0em, 0.5em, 1em, 0em);\n  border-radius: 50%;\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -ms-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n}\n.pie-fill,\n.c100.p51 .bar:after,\n.c100.p51 .fill,\n.c100.p52 .bar:after,\n.c100.p52 .fill,\n.c100.p53 .bar:after,\n.c100.p53 .fill,\n.c100.p54 .bar:after,\n.c100.p54 .fill,\n.c100.p55 .bar:after,\n.c100.p55 .fill,\n.c100.p56 .bar:after,\n.c100.p56 .fill,\n.c100.p57 .bar:after,\n.c100.p57 .fill,\n.c100.p58 .bar:after,\n.c100.p58 .fill,\n.c100.p59 .bar:after,\n.c100.p59 .fill,\n.c100.p60 .bar:after,\n.c100.p60 .fill,\n.c100.p61 .bar:after,\n.c100.p61 .fill,\n.c100.p62 .bar:after,\n.c100.p62 .fill,\n.c100.p63 .bar:after,\n.c100.p63 .fill,\n.c100.p64 .bar:after,\n.c100.p64 .fill,\n.c100.p65 .bar:after,\n.c100.p65 .fill,\n.c100.p66 .bar:after,\n.c100.p66 .fill,\n.c100.p67 .bar:after,\n.c100.p67 .fill,\n.c100.p68 .bar:after,\n.c100.p68 .fill,\n.c100.p69 .bar:after,\n.c100.p69 .fill,\n.c100.p70 .bar:after,\n.c100.p70 .fill,\n.c100.p71 .bar:after,\n.c100.p71 .fill,\n.c100.p72 .bar:after,\n.c100.p72 .fill,\n.c100.p73 .bar:after,\n.c100.p73 .fill,\n.c100.p74 .bar:after,\n.c100.p74 .fill,\n.c100.p75 .bar:after,\n.c100.p75 .fill,\n.c100.p76 .bar:after,\n.c100.p76 .fill,\n.c100.p77 .bar:after,\n.c100.p77 .fill,\n.c100.p78 .bar:after,\n.c100.p78 .fill,\n.c100.p79 .bar:after,\n.c100.p79 .fill,\n.c100.p80 .bar:after,\n.c100.p80 .fill,\n.c100.p81 .bar:after,\n.c100.p81 .fill,\n.c100.p82 .bar:after,\n.c100.p82 .fill,\n.c100.p83 .bar:after,\n.c100.p83 .fill,\n.c100.p84 .bar:after,\n.c100.p84 .fill,\n.c100.p85 .bar:after,\n.c100.p85 .fill,\n.c100.p86 .bar:after,\n.c100.p86 .fill,\n.c100.p87 .bar:after,\n.c100.p87 .fill,\n.c100.p88 .bar:after,\n.c100.p88 .fill,\n.c100.p89 .bar:after,\n.c100.p89 .fill,\n.c100.p90 .bar:after,\n.c100.p90 .fill,\n.c100.p91 .bar:after,\n.c100.p91 .fill,\n.c100.p92 .bar:after,\n.c100.p92 .fill,\n.c100.p93 .bar:after,\n.c100.p93 .fill,\n.c100.p94 .bar:after,\n.c100.p94 .fill,\n.c100.p95 .bar:after,\n.c100.p95 .fill,\n.c100.p96 .bar:after,\n.c100.p96 .fill,\n.c100.p97 .bar:after,\n.c100.p97 .fill,\n.c100.p98 .bar:after,\n.c100.p98 .fill,\n.c100.p99 .bar:after,\n.c100.p99 .fill,\n.c100.p100 .bar:after,\n.c100.p100 .fill {\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.c100 {\n  position: relative;\n  font-size: 120px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  float: left;\n  margin: 0 0.1em 0.1em 0;\n  background-color: #cccccc;\n}\n.c100 *,\n.c100 *:before,\n.c100 *:after {\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n.c100.center {\n  float: none;\n  margin: 0 auto;\n}\n.c100.big {\n  font-size: 240px;\n}\n.c100.small {\n  font-size: 80px;\n}\n.c100 > span {\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 5em;\n  line-height: 5em;\n  font-size: 0.2em;\n  color: #cccccc;\n  display: block;\n  text-align: center;\n  white-space: nowrap;\n  -webkit-transition-property: all;\n  -moz-transition-property: all;\n  -o-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 0.2s;\n  -moz-transition-duration: 0.2s;\n  -o-transition-duration: 0.2s;\n  transition-duration: 0.2s;\n  -webkit-transition-timing-function: ease-out;\n  -moz-transition-timing-function: ease-out;\n  -o-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.c100:after {\n  position: absolute;\n  top: 0.08em;\n  left: 0.08em;\n  display: block;\n  content: \" \";\n  border-radius: 50%;\n  background-color: #f5f5f5;\n  width: 0.84em;\n  height: 0.84em;\n  -webkit-transition-property: all;\n  -moz-transition-property: all;\n  -o-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 0.2s;\n  -moz-transition-duration: 0.2s;\n  -o-transition-duration: 0.2s;\n  transition-duration: 0.2s;\n  -webkit-transition-timing-function: ease-in;\n  -moz-transition-timing-function: ease-in;\n  -o-transition-timing-function: ease-in;\n  transition-timing-function: ease-in;\n}\n.c100 .slice {\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  clip: rect(0em, 1em, 1em, 0.5em);\n}\n.c100.p1 .bar {\n  -webkit-transform: rotate(3.6deg);\n  -moz-transform: rotate(3.6deg);\n  -ms-transform: rotate(3.6deg);\n  -o-transform: rotate(3.6deg);\n  transform: rotate(3.6deg);\n}\n.c100.p2 .bar {\n  -webkit-transform: rotate(7.2deg);\n  -moz-transform: rotate(7.2deg);\n  -ms-transform: rotate(7.2deg);\n  -o-transform: rotate(7.2deg);\n  transform: rotate(7.2deg);\n}\n.c100.p3 .bar {\n  -webkit-transform: rotate(10.8deg);\n  -moz-transform: rotate(10.8deg);\n  -ms-transform: rotate(10.8deg);\n  -o-transform: rotate(10.8deg);\n  transform: rotate(10.8deg);\n}\n.c100.p4 .bar {\n  -webkit-transform: rotate(14.4deg);\n  -moz-transform: rotate(14.4deg);\n  -ms-transform: rotate(14.4deg);\n  -o-transform: rotate(14.4deg);\n  transform: rotate(14.4deg);\n}\n.c100.p5 .bar {\n  -webkit-transform: rotate(18deg);\n  -moz-transform: rotate(18deg);\n  -ms-transform: rotate(18deg);\n  -o-transform: rotate(18deg);\n  transform: rotate(18deg);\n}\n.c100.p6 .bar {\n  -webkit-transform: rotate(21.6deg);\n  -moz-transform: rotate(21.6deg);\n  -ms-transform: rotate(21.6deg);\n  -o-transform: rotate(21.6deg);\n  transform: rotate(21.6deg);\n}\n.c100.p7 .bar {\n  -webkit-transform: rotate(25.2deg);\n  -moz-transform: rotate(25.2deg);\n  -ms-transform: rotate(25.2deg);\n  -o-transform: rotate(25.2deg);\n  transform: rotate(25.2deg);\n}\n.c100.p8 .bar {\n  -webkit-transform: rotate(28.8deg);\n  -moz-transform: rotate(28.8deg);\n  -ms-transform: rotate(28.8deg);\n  -o-transform: rotate(28.8deg);\n  transform: rotate(28.8deg);\n}\n.c100.p9 .bar {\n  -webkit-transform: rotate(32.4deg);\n  -moz-transform: rotate(32.4deg);\n  -ms-transform: rotate(32.4deg);\n  -o-transform: rotate(32.4deg);\n  transform: rotate(32.4deg);\n}\n.c100.p10 .bar {\n  -webkit-transform: rotate(36deg);\n  -moz-transform: rotate(36deg);\n  -ms-transform: rotate(36deg);\n  -o-transform: rotate(36deg);\n  transform: rotate(36deg);\n}\n.c100.p11 .bar {\n  -webkit-transform: rotate(39.6deg);\n  -moz-transform: rotate(39.6deg);\n  -ms-transform: rotate(39.6deg);\n  -o-transform: rotate(39.6deg);\n  transform: rotate(39.6deg);\n}\n.c100.p12 .bar {\n  -webkit-transform: rotate(43.2deg);\n  -moz-transform: rotate(43.2deg);\n  -ms-transform: rotate(43.2deg);\n  -o-transform: rotate(43.2deg);\n  transform: rotate(43.2deg);\n}\n.c100.p13 .bar {\n  -webkit-transform: rotate(46.800000000000004deg);\n  -moz-transform: rotate(46.800000000000004deg);\n  -ms-transform: rotate(46.800000000000004deg);\n  -o-transform: rotate(46.800000000000004deg);\n  transform: rotate(46.800000000000004deg);\n}\n.c100.p14 .bar {\n  -webkit-transform: rotate(50.4deg);\n  -moz-transform: rotate(50.4deg);\n  -ms-transform: rotate(50.4deg);\n  -o-transform: rotate(50.4deg);\n  transform: rotate(50.4deg);\n}\n.c100.p15 .bar {\n  -webkit-transform: rotate(54deg);\n  -moz-transform: rotate(54deg);\n  -ms-transform: rotate(54deg);\n  -o-transform: rotate(54deg);\n  transform: rotate(54deg);\n}\n.c100.p16 .bar {\n  -webkit-transform: rotate(57.6deg);\n  -moz-transform: rotate(57.6deg);\n  -ms-transform: rotate(57.6deg);\n  -o-transform: rotate(57.6deg);\n  transform: rotate(57.6deg);\n}\n.c100.p17 .bar {\n  -webkit-transform: rotate(61.2deg);\n  -moz-transform: rotate(61.2deg);\n  -ms-transform: rotate(61.2deg);\n  -o-transform: rotate(61.2deg);\n  transform: rotate(61.2deg);\n}\n.c100.p18 .bar {\n  -webkit-transform: rotate(64.8deg);\n  -moz-transform: rotate(64.8deg);\n  -ms-transform: rotate(64.8deg);\n  -o-transform: rotate(64.8deg);\n  transform: rotate(64.8deg);\n}\n.c100.p19 .bar {\n  -webkit-transform: rotate(68.4deg);\n  -moz-transform: rotate(68.4deg);\n  -ms-transform: rotate(68.4deg);\n  -o-transform: rotate(68.4deg);\n  transform: rotate(68.4deg);\n}\n.c100.p20 .bar {\n  -webkit-transform: rotate(72deg);\n  -moz-transform: rotate(72deg);\n  -ms-transform: rotate(72deg);\n  -o-transform: rotate(72deg);\n  transform: rotate(72deg);\n}\n.c100.p21 .bar {\n  -webkit-transform: rotate(75.60000000000001deg);\n  -moz-transform: rotate(75.60000000000001deg);\n  -ms-transform: rotate(75.60000000000001deg);\n  -o-transform: rotate(75.60000000000001deg);\n  transform: rotate(75.60000000000001deg);\n}\n.c100.p22 .bar {\n  -webkit-transform: rotate(79.2deg);\n  -moz-transform: rotate(79.2deg);\n  -ms-transform: rotate(79.2deg);\n  -o-transform: rotate(79.2deg);\n  transform: rotate(79.2deg);\n}\n.c100.p23 .bar {\n  -webkit-transform: rotate(82.8deg);\n  -moz-transform: rotate(82.8deg);\n  -ms-transform: rotate(82.8deg);\n  -o-transform: rotate(82.8deg);\n  transform: rotate(82.8deg);\n}\n.c100.p24 .bar {\n  -webkit-transform: rotate(86.4deg);\n  -moz-transform: rotate(86.4deg);\n  -ms-transform: rotate(86.4deg);\n  -o-transform: rotate(86.4deg);\n  transform: rotate(86.4deg);\n}\n.c100.p25 .bar {\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.c100.p26 .bar {\n  -webkit-transform: rotate(93.60000000000001deg);\n  -moz-transform: rotate(93.60000000000001deg);\n  -ms-transform: rotate(93.60000000000001deg);\n  -o-transform: rotate(93.60000000000001deg);\n  transform: rotate(93.60000000000001deg);\n}\n.c100.p27 .bar {\n  -webkit-transform: rotate(97.2deg);\n  -moz-transform: rotate(97.2deg);\n  -ms-transform: rotate(97.2deg);\n  -o-transform: rotate(97.2deg);\n  transform: rotate(97.2deg);\n}\n.c100.p28 .bar {\n  -webkit-transform: rotate(100.8deg);\n  -moz-transform: rotate(100.8deg);\n  -ms-transform: rotate(100.8deg);\n  -o-transform: rotate(100.8deg);\n  transform: rotate(100.8deg);\n}\n.c100.p29 .bar {\n  -webkit-transform: rotate(104.4deg);\n  -moz-transform: rotate(104.4deg);\n  -ms-transform: rotate(104.4deg);\n  -o-transform: rotate(104.4deg);\n  transform: rotate(104.4deg);\n}\n.c100.p30 .bar {\n  -webkit-transform: rotate(108deg);\n  -moz-transform: rotate(108deg);\n  -ms-transform: rotate(108deg);\n  -o-transform: rotate(108deg);\n  transform: rotate(108deg);\n}\n.c100.p31 .bar {\n  -webkit-transform: rotate(111.60000000000001deg);\n  -moz-transform: rotate(111.60000000000001deg);\n  -ms-transform: rotate(111.60000000000001deg);\n  -o-transform: rotate(111.60000000000001deg);\n  transform: rotate(111.60000000000001deg);\n}\n.c100.p32 .bar {\n  -webkit-transform: rotate(115.2deg);\n  -moz-transform: rotate(115.2deg);\n  -ms-transform: rotate(115.2deg);\n  -o-transform: rotate(115.2deg);\n  transform: rotate(115.2deg);\n}\n.c100.p33 .bar {\n  -webkit-transform: rotate(118.8deg);\n  -moz-transform: rotate(118.8deg);\n  -ms-transform: rotate(118.8deg);\n  -o-transform: rotate(118.8deg);\n  transform: rotate(118.8deg);\n}\n.c100.p34 .bar {\n  -webkit-transform: rotate(122.4deg);\n  -moz-transform: rotate(122.4deg);\n  -ms-transform: rotate(122.4deg);\n  -o-transform: rotate(122.4deg);\n  transform: rotate(122.4deg);\n}\n.c100.p35 .bar {\n  -webkit-transform: rotate(126deg);\n  -moz-transform: rotate(126deg);\n  -ms-transform: rotate(126deg);\n  -o-transform: rotate(126deg);\n  transform: rotate(126deg);\n}\n.c100.p36 .bar {\n  -webkit-transform: rotate(129.6deg);\n  -moz-transform: rotate(129.6deg);\n  -ms-transform: rotate(129.6deg);\n  -o-transform: rotate(129.6deg);\n  transform: rotate(129.6deg);\n}\n.c100.p37 .bar {\n  -webkit-transform: rotate(133.20000000000002deg);\n  -moz-transform: rotate(133.20000000000002deg);\n  -ms-transform: rotate(133.20000000000002deg);\n  -o-transform: rotate(133.20000000000002deg);\n  transform: rotate(133.20000000000002deg);\n}\n.c100.p38 .bar {\n  -webkit-transform: rotate(136.8deg);\n  -moz-transform: rotate(136.8deg);\n  -ms-transform: rotate(136.8deg);\n  -o-transform: rotate(136.8deg);\n  transform: rotate(136.8deg);\n}\n.c100.p39 .bar {\n  -webkit-transform: rotate(140.4deg);\n  -moz-transform: rotate(140.4deg);\n  -ms-transform: rotate(140.4deg);\n  -o-transform: rotate(140.4deg);\n  transform: rotate(140.4deg);\n}\n.c100.p40 .bar {\n  -webkit-transform: rotate(144deg);\n  -moz-transform: rotate(144deg);\n  -ms-transform: rotate(144deg);\n  -o-transform: rotate(144deg);\n  transform: rotate(144deg);\n}\n.c100.p41 .bar {\n  -webkit-transform: rotate(147.6deg);\n  -moz-transform: rotate(147.6deg);\n  -ms-transform: rotate(147.6deg);\n  -o-transform: rotate(147.6deg);\n  transform: rotate(147.6deg);\n}\n.c100.p42 .bar {\n  -webkit-transform: rotate(151.20000000000002deg);\n  -moz-transform: rotate(151.20000000000002deg);\n  -ms-transform: rotate(151.20000000000002deg);\n  -o-transform: rotate(151.20000000000002deg);\n  transform: rotate(151.20000000000002deg);\n}\n.c100.p43 .bar {\n  -webkit-transform: rotate(154.8deg);\n  -moz-transform: rotate(154.8deg);\n  -ms-transform: rotate(154.8deg);\n  -o-transform: rotate(154.8deg);\n  transform: rotate(154.8deg);\n}\n.c100.p44 .bar {\n  -webkit-transform: rotate(158.4deg);\n  -moz-transform: rotate(158.4deg);\n  -ms-transform: rotate(158.4deg);\n  -o-transform: rotate(158.4deg);\n  transform: rotate(158.4deg);\n}\n.c100.p45 .bar {\n  -webkit-transform: rotate(162deg);\n  -moz-transform: rotate(162deg);\n  -ms-transform: rotate(162deg);\n  -o-transform: rotate(162deg);\n  transform: rotate(162deg);\n}\n.c100.p46 .bar {\n  -webkit-transform: rotate(165.6deg);\n  -moz-transform: rotate(165.6deg);\n  -ms-transform: rotate(165.6deg);\n  -o-transform: rotate(165.6deg);\n  transform: rotate(165.6deg);\n}\n.c100.p47 .bar {\n  -webkit-transform: rotate(169.20000000000002deg);\n  -moz-transform: rotate(169.20000000000002deg);\n  -ms-transform: rotate(169.20000000000002deg);\n  -o-transform: rotate(169.20000000000002deg);\n  transform: rotate(169.20000000000002deg);\n}\n.c100.p48 .bar {\n  -webkit-transform: rotate(172.8deg);\n  -moz-transform: rotate(172.8deg);\n  -ms-transform: rotate(172.8deg);\n  -o-transform: rotate(172.8deg);\n  transform: rotate(172.8deg);\n}\n.c100.p49 .bar {\n  -webkit-transform: rotate(176.4deg);\n  -moz-transform: rotate(176.4deg);\n  -ms-transform: rotate(176.4deg);\n  -o-transform: rotate(176.4deg);\n  transform: rotate(176.4deg);\n}\n.c100.p50 .bar {\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.c100.p51 .bar {\n  -webkit-transform: rotate(183.6deg);\n  -moz-transform: rotate(183.6deg);\n  -ms-transform: rotate(183.6deg);\n  -o-transform: rotate(183.6deg);\n  transform: rotate(183.6deg);\n}\n.c100.p52 .bar {\n  -webkit-transform: rotate(187.20000000000002deg);\n  -moz-transform: rotate(187.20000000000002deg);\n  -ms-transform: rotate(187.20000000000002deg);\n  -o-transform: rotate(187.20000000000002deg);\n  transform: rotate(187.20000000000002deg);\n}\n.c100.p53 .bar {\n  -webkit-transform: rotate(190.8deg);\n  -moz-transform: rotate(190.8deg);\n  -ms-transform: rotate(190.8deg);\n  -o-transform: rotate(190.8deg);\n  transform: rotate(190.8deg);\n}\n.c100.p54 .bar {\n  -webkit-transform: rotate(194.4deg);\n  -moz-transform: rotate(194.4deg);\n  -ms-transform: rotate(194.4deg);\n  -o-transform: rotate(194.4deg);\n  transform: rotate(194.4deg);\n}\n.c100.p55 .bar {\n  -webkit-transform: rotate(198deg);\n  -moz-transform: rotate(198deg);\n  -ms-transform: rotate(198deg);\n  -o-transform: rotate(198deg);\n  transform: rotate(198deg);\n}\n.c100.p56 .bar {\n  -webkit-transform: rotate(201.6deg);\n  -moz-transform: rotate(201.6deg);\n  -ms-transform: rotate(201.6deg);\n  -o-transform: rotate(201.6deg);\n  transform: rotate(201.6deg);\n}\n.c100.p57 .bar {\n  -webkit-transform: rotate(205.20000000000002deg);\n  -moz-transform: rotate(205.20000000000002deg);\n  -ms-transform: rotate(205.20000000000002deg);\n  -o-transform: rotate(205.20000000000002deg);\n  transform: rotate(205.20000000000002deg);\n}\n.c100.p58 .bar {\n  -webkit-transform: rotate(208.8deg);\n  -moz-transform: rotate(208.8deg);\n  -ms-transform: rotate(208.8deg);\n  -o-transform: rotate(208.8deg);\n  transform: rotate(208.8deg);\n}\n.c100.p59 .bar {\n  -webkit-transform: rotate(212.4deg);\n  -moz-transform: rotate(212.4deg);\n  -ms-transform: rotate(212.4deg);\n  -o-transform: rotate(212.4deg);\n  transform: rotate(212.4deg);\n}\n.c100.p60 .bar {\n  -webkit-transform: rotate(216deg);\n  -moz-transform: rotate(216deg);\n  -ms-transform: rotate(216deg);\n  -o-transform: rotate(216deg);\n  transform: rotate(216deg);\n}\n.c100.p61 .bar {\n  -webkit-transform: rotate(219.6deg);\n  -moz-transform: rotate(219.6deg);\n  -ms-transform: rotate(219.6deg);\n  -o-transform: rotate(219.6deg);\n  transform: rotate(219.6deg);\n}\n.c100.p62 .bar {\n  -webkit-transform: rotate(223.20000000000002deg);\n  -moz-transform: rotate(223.20000000000002deg);\n  -ms-transform: rotate(223.20000000000002deg);\n  -o-transform: rotate(223.20000000000002deg);\n  transform: rotate(223.20000000000002deg);\n}\n.c100.p63 .bar {\n  -webkit-transform: rotate(226.8deg);\n  -moz-transform: rotate(226.8deg);\n  -ms-transform: rotate(226.8deg);\n  -o-transform: rotate(226.8deg);\n  transform: rotate(226.8deg);\n}\n.c100.p64 .bar {\n  -webkit-transform: rotate(230.4deg);\n  -moz-transform: rotate(230.4deg);\n  -ms-transform: rotate(230.4deg);\n  -o-transform: rotate(230.4deg);\n  transform: rotate(230.4deg);\n}\n.c100.p65 .bar {\n  -webkit-transform: rotate(234deg);\n  -moz-transform: rotate(234deg);\n  -ms-transform: rotate(234deg);\n  -o-transform: rotate(234deg);\n  transform: rotate(234deg);\n}\n.c100.p66 .bar {\n  -webkit-transform: rotate(237.6deg);\n  -moz-transform: rotate(237.6deg);\n  -ms-transform: rotate(237.6deg);\n  -o-transform: rotate(237.6deg);\n  transform: rotate(237.6deg);\n}\n.c100.p67 .bar {\n  -webkit-transform: rotate(241.20000000000002deg);\n  -moz-transform: rotate(241.20000000000002deg);\n  -ms-transform: rotate(241.20000000000002deg);\n  -o-transform: rotate(241.20000000000002deg);\n  transform: rotate(241.20000000000002deg);\n}\n.c100.p68 .bar {\n  -webkit-transform: rotate(244.8deg);\n  -moz-transform: rotate(244.8deg);\n  -ms-transform: rotate(244.8deg);\n  -o-transform: rotate(244.8deg);\n  transform: rotate(244.8deg);\n}\n.c100.p69 .bar {\n  -webkit-transform: rotate(248.4deg);\n  -moz-transform: rotate(248.4deg);\n  -ms-transform: rotate(248.4deg);\n  -o-transform: rotate(248.4deg);\n  transform: rotate(248.4deg);\n}\n.c100.p70 .bar {\n  -webkit-transform: rotate(252deg);\n  -moz-transform: rotate(252deg);\n  -ms-transform: rotate(252deg);\n  -o-transform: rotate(252deg);\n  transform: rotate(252deg);\n}\n.c100.p71 .bar {\n  -webkit-transform: rotate(255.6deg);\n  -moz-transform: rotate(255.6deg);\n  -ms-transform: rotate(255.6deg);\n  -o-transform: rotate(255.6deg);\n  transform: rotate(255.6deg);\n}\n.c100.p72 .bar {\n  -webkit-transform: rotate(259.2deg);\n  -moz-transform: rotate(259.2deg);\n  -ms-transform: rotate(259.2deg);\n  -o-transform: rotate(259.2deg);\n  transform: rotate(259.2deg);\n}\n.c100.p73 .bar {\n  -webkit-transform: rotate(262.8deg);\n  -moz-transform: rotate(262.8deg);\n  -ms-transform: rotate(262.8deg);\n  -o-transform: rotate(262.8deg);\n  transform: rotate(262.8deg);\n}\n.c100.p74 .bar {\n  -webkit-transform: rotate(266.40000000000003deg);\n  -moz-transform: rotate(266.40000000000003deg);\n  -ms-transform: rotate(266.40000000000003deg);\n  -o-transform: rotate(266.40000000000003deg);\n  transform: rotate(266.40000000000003deg);\n}\n.c100.p75 .bar {\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  -o-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.c100.p76 .bar {\n  -webkit-transform: rotate(273.6deg);\n  -moz-transform: rotate(273.6deg);\n  -ms-transform: rotate(273.6deg);\n  -o-transform: rotate(273.6deg);\n  transform: rotate(273.6deg);\n}\n.c100.p77 .bar {\n  -webkit-transform: rotate(277.2deg);\n  -moz-transform: rotate(277.2deg);\n  -ms-transform: rotate(277.2deg);\n  -o-transform: rotate(277.2deg);\n  transform: rotate(277.2deg);\n}\n.c100.p78 .bar {\n  -webkit-transform: rotate(280.8deg);\n  -moz-transform: rotate(280.8deg);\n  -ms-transform: rotate(280.8deg);\n  -o-transform: rotate(280.8deg);\n  transform: rotate(280.8deg);\n}\n.c100.p79 .bar {\n  -webkit-transform: rotate(284.40000000000003deg);\n  -moz-transform: rotate(284.40000000000003deg);\n  -ms-transform: rotate(284.40000000000003deg);\n  -o-transform: rotate(284.40000000000003deg);\n  transform: rotate(284.40000000000003deg);\n}\n.c100.p80 .bar {\n  -webkit-transform: rotate(288deg);\n  -moz-transform: rotate(288deg);\n  -ms-transform: rotate(288deg);\n  -o-transform: rotate(288deg);\n  transform: rotate(288deg);\n}\n.c100.p81 .bar {\n  -webkit-transform: rotate(291.6deg);\n  -moz-transform: rotate(291.6deg);\n  -ms-transform: rotate(291.6deg);\n  -o-transform: rotate(291.6deg);\n  transform: rotate(291.6deg);\n}\n.c100.p82 .bar {\n  -webkit-transform: rotate(295.2deg);\n  -moz-transform: rotate(295.2deg);\n  -ms-transform: rotate(295.2deg);\n  -o-transform: rotate(295.2deg);\n  transform: rotate(295.2deg);\n}\n.c100.p83 .bar {\n  -webkit-transform: rotate(298.8deg);\n  -moz-transform: rotate(298.8deg);\n  -ms-transform: rotate(298.8deg);\n  -o-transform: rotate(298.8deg);\n  transform: rotate(298.8deg);\n}\n.c100.p84 .bar {\n  -webkit-transform: rotate(302.40000000000003deg);\n  -moz-transform: rotate(302.40000000000003deg);\n  -ms-transform: rotate(302.40000000000003deg);\n  -o-transform: rotate(302.40000000000003deg);\n  transform: rotate(302.40000000000003deg);\n}\n.c100.p85 .bar {\n  -webkit-transform: rotate(306deg);\n  -moz-transform: rotate(306deg);\n  -ms-transform: rotate(306deg);\n  -o-transform: rotate(306deg);\n  transform: rotate(306deg);\n}\n.c100.p86 .bar {\n  -webkit-transform: rotate(309.6deg);\n  -moz-transform: rotate(309.6deg);\n  -ms-transform: rotate(309.6deg);\n  -o-transform: rotate(309.6deg);\n  transform: rotate(309.6deg);\n}\n.c100.p87 .bar {\n  -webkit-transform: rotate(313.2deg);\n  -moz-transform: rotate(313.2deg);\n  -ms-transform: rotate(313.2deg);\n  -o-transform: rotate(313.2deg);\n  transform: rotate(313.2deg);\n}\n.c100.p88 .bar {\n  -webkit-transform: rotate(316.8deg);\n  -moz-transform: rotate(316.8deg);\n  -ms-transform: rotate(316.8deg);\n  -o-transform: rotate(316.8deg);\n  transform: rotate(316.8deg);\n}\n.c100.p89 .bar {\n  -webkit-transform: rotate(320.40000000000003deg);\n  -moz-transform: rotate(320.40000000000003deg);\n  -ms-transform: rotate(320.40000000000003deg);\n  -o-transform: rotate(320.40000000000003deg);\n  transform: rotate(320.40000000000003deg);\n}\n.c100.p90 .bar {\n  -webkit-transform: rotate(324deg);\n  -moz-transform: rotate(324deg);\n  -ms-transform: rotate(324deg);\n  -o-transform: rotate(324deg);\n  transform: rotate(324deg);\n}\n.c100.p91 .bar {\n  -webkit-transform: rotate(327.6deg);\n  -moz-transform: rotate(327.6deg);\n  -ms-transform: rotate(327.6deg);\n  -o-transform: rotate(327.6deg);\n  transform: rotate(327.6deg);\n}\n.c100.p92 .bar {\n  -webkit-transform: rotate(331.2deg);\n  -moz-transform: rotate(331.2deg);\n  -ms-transform: rotate(331.2deg);\n  -o-transform: rotate(331.2deg);\n  transform: rotate(331.2deg);\n}\n.c100.p93 .bar {\n  -webkit-transform: rotate(334.8deg);\n  -moz-transform: rotate(334.8deg);\n  -ms-transform: rotate(334.8deg);\n  -o-transform: rotate(334.8deg);\n  transform: rotate(334.8deg);\n}\n.c100.p94 .bar {\n  -webkit-transform: rotate(338.40000000000003deg);\n  -moz-transform: rotate(338.40000000000003deg);\n  -ms-transform: rotate(338.40000000000003deg);\n  -o-transform: rotate(338.40000000000003deg);\n  transform: rotate(338.40000000000003deg);\n}\n.c100.p95 .bar {\n  -webkit-transform: rotate(342deg);\n  -moz-transform: rotate(342deg);\n  -ms-transform: rotate(342deg);\n  -o-transform: rotate(342deg);\n  transform: rotate(342deg);\n}\n.c100.p96 .bar {\n  -webkit-transform: rotate(345.6deg);\n  -moz-transform: rotate(345.6deg);\n  -ms-transform: rotate(345.6deg);\n  -o-transform: rotate(345.6deg);\n  transform: rotate(345.6deg);\n}\n.c100.p97 .bar {\n  -webkit-transform: rotate(349.2deg);\n  -moz-transform: rotate(349.2deg);\n  -ms-transform: rotate(349.2deg);\n  -o-transform: rotate(349.2deg);\n  transform: rotate(349.2deg);\n}\n.c100.p98 .bar {\n  -webkit-transform: rotate(352.8deg);\n  -moz-transform: rotate(352.8deg);\n  -ms-transform: rotate(352.8deg);\n  -o-transform: rotate(352.8deg);\n  transform: rotate(352.8deg);\n}\n.c100.p99 .bar {\n  -webkit-transform: rotate(356.40000000000003deg);\n  -moz-transform: rotate(356.40000000000003deg);\n  -ms-transform: rotate(356.40000000000003deg);\n  -o-transform: rotate(356.40000000000003deg);\n  transform: rotate(356.40000000000003deg);\n}\n.c100.p100 .bar {\n  -webkit-transform: rotate(360deg);\n  -moz-transform: rotate(360deg);\n  -ms-transform: rotate(360deg);\n  -o-transform: rotate(360deg);\n  transform: rotate(360deg);\n}\n.c100:hover {\n  cursor: default;\n}\n.c100:hover > span {\n  width: 3.33em;\n  line-height: 3.33em;\n  font-size: 0.3em;\n  color: #307bbb;\n}\n.c100:hover:after {\n  top: 0.04em;\n  left: 0.04em;\n  width: 0.92em;\n  height: 0.92em;\n}\n.c100.dark {\n  background-color: #777777;\n}\n.c100.dark .bar,\n.c100.dark .fill {\n  border-color: #c6ff00 !important;\n}\n.c100.dark > span {\n  color: #777777;\n}\n.c100.dark:after {\n  background-color: #666666;\n}\n.c100.dark:hover > span {\n  color: #c6ff00;\n}\n.c100.green .bar,\n.c100.green .fill {\n  border-color: #4db53c !important;\n}\n.c100.green:hover > span {\n  color: #4db53c;\n}\n.c100.green.dark .bar,\n.c100.green.dark .fill {\n  border-color: #5fd400 !important;\n}\n.c100.green.dark:hover > span {\n  color: #5fd400;\n}\n.c100.orange .bar,\n.c100.orange .fill {\n  border-color: #dd9d22 !important;\n}\n.c100.orange:hover > span {\n  color: #dd9d22;\n}\n.c100.orange.dark .bar,\n.c100.orange.dark .fill {\n  border-color: #e08833 !important;\n}\n.c100.orange.dark:hover > span {\n  color: #e08833;\n}\n.circluar-progress-outr{\n  width: 100%;\n  float: left;\n  text-align: center;\n  margin-top: 10%;\n}\n.circluar-progress{\n  font-size: 200px;\n  background: #fcfcfc;\n  display: inline-block;\n  margin: 0;\n  float: none;\n}\n.circluar-progress.c100:after{\n  font-size: 200px;\n  background: #fcfcfc;\n}\n.c100.circluar-progress .bar, .c100.circluar-progress .fill{\n  border-color: #fb545b;\n}\n.circluar-progress.c100 > span{\n  color: #fb545b;\n  font-size: 36px;\n  width: 100%;\n  height: 100%;\n  line-height: 4.8em;\n}\n.circluar-progress.c100 .steps{\n  color: #999999;\n  font-size: 13px;\n  width: 100%;\n  position: absolute;\n  top: 54%;\n  z-index: 9;\n  line-height: 13px;\n}\n.circluar-progress.c100:hover:after{\n  top: 0.08em;\n  left: 0.08em;\n  width: 0.84em;\n  height: 0.84em;\n}\n/* Circluar progress css end (sahil) */\n\n/* Preloader */\n\n.preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff;\n  /* change if the mask should be a color other than white */\n  z-index: 9999;\n  /* makes sure it stays on top */\n}\n\n.status {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  /* centers the loading animation horizontally on the screen */\n  top: 50%;\n  /* centers the loading animation vertically on the screen */\n  background-image: url(\"assets/images/loaders/logoAnim.gif\");\n  /* path to your loading animation */\n  background-repeat: no-repeat;\n  background-position: center;\n  margin: -100px 0 0 -100px;\n  /* is width and height divided by two */\n}\n\n.dash-box-new.dash-box-bottom{\n  background: #fff;\n  width: 100%;\n  border: 1px solid #dae2e6;\n  border-top: 0;\n  padding: 28px;\n  float: left;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.dash-box-new.dash-box-bottom ul{\n  width: 100%;\n}\n.dummy-switch{\n  width: 70px;\n  height: 20px;\n  background: #eee;\n  color: #999;\n  line-height: 20px;\n  font-size: 13px;\n  display: block;\n  float: right;\n  border-radius: 40px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n.dummy-switch.red{\n  width: 70px;\n  height: 20px;\n  background: #fb545b;\n  color: #fff;\n  line-height: 20px;\n  font-size: 13px;\n  display: block;\n  float: right;\n  border-radius: 40px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.dummy-switch p{\n  float: left;\n  width: 100%;\n}\n.dummy-switch span{\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #fff;\n  display: inline-block;\n  position: relative;\n  top: 3px;\n  float:left;\n  right: 3px;\n}\n.dash-box-send{\n  height: 70px;\n  width: 70px;\n  background: rgba(255,255,255,0.2);\n  border-radius: 50%;\n  float: none;\n  position: relative;\n  text-align: center;\n  padding-top: 20px;\n  display: inline-block;\n}\n.dash-box-send i{\n  float: none;\n  font-size: 32px;\n}\n.dash-top2-text .dash-box-send{\n  top:60px;\n}\n/* duplicate toast */\n.dashboard-toast{\n  position: fixed;\n  display: none;\n  bottom: -100px;\n  background: #fff;\n  color: #62696d;\n  left: 60px;\n  z-index: 9999;\n  width: 344px;\n  border: 1px solid #ccc;\n  box-shadow: 0 0px 7px 2px rgba(0,0,0,0.2);\n}\n.dashboard-toast i {\n  float: none;\n  margin-top: 0px;\n  margin-right: 10px;\n  width: 40px;\n  background: #fb545b ;\n  color: #fff;\n  /* padding: 13px 13px; */\n  padding-left: 8px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.dashboard-toast span {\n  float: none;\n  width: 74%;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.dashboard-toast .btn{\n  float: right;\n  background: none;\n  padding: 0px;\n  font-size: 12px;\n  color: #bec5c9;\n}\n.d-toast-btn i{\n  background: none;\n  font-size: 16px;\n  padding: 0px;\n  width: auto;\n  padding-top: 8px;\n  color: #bec5c9;\n}\n\n\n\n/*Responsiveness start*/\n\n.mobile-menu {\n  display: none;\n}\n\n.white-logo {\n  display: none !important;\n}\n\n.company-list,\n.name-list {\n  width: 100%;\n  float: left;\n}\n\n/* Start: Modal calcquiz */\n#calquiz-modal .modal-body{\n  display: inline-block;\n  padding: 0px;\n}\n#calquiz-modal .modal-header{\n  padding: 13px 17px;\n  border-bottom: none;\n  /*background: #fb6066;*/\n  background:#61686e;\n  border-radius: 7px 7px 0px 0px;\n  /*margin-left: -15px;\n  margin-right: -15px;\n  margin-top: -15px;*/\n  text-align: left;\n  float: left;\n  width: 100%;\n}\n#calquiz-modal  .step2 input {\n  min-height: 38px;\n  border: 1px solid #cccccc;\n  width: 70%;\n  font-size: 14px;\n  color: #62696d;\n  padding-left: 10px;\n  margin-top: 10px;\n}\n#calquiz-modal .modal-header h5.modal-title{\n  color: #fff;\n  font-size: 14px;\n  /*text-transform: none;*/\n  text-transform: uppercase;\n  font-weight: normal !important;\n}\n#calquiz-modal .modal-content {\n  border-radius: 8px;\n}\n#calquiz-modal .calquiz-left{\n  /*width:50%;\n  padding: 35px 25px 0px 40px;\n  display: inline-block; float: left;\n  margin: 0px;*/\n  /*padding: 30px;\n  float: left;\n  padding-top: 50px;*/\n  width:100%;\n  float: left;\n}\n#calquiz-modal .calquiz-left a{\n  float: left;\n}\n#calquiz-modal .calquiz-left i{\n  font-size: 36px !important;\n  width: auto;\n  /*color: #989898;\n  background: #f3f3f3;\n  border-radius: 50%;\n  border: 3px solid rgba(251,251,251,0.67);\n  height: 80px;\n  width: 80px !important;\n  margin: 0 auto;\n  text-align: center;\n  padding-top: 18px !important;*/\n}\n#calquiz-modal .calquiz-left h3{\n  font-size: 18px;\n  color: #fb545b;\n  float: left;\n  width: 90%;\n  margin-top: 0px;\n}\n#calquiz-modal .calquiz-left label{\n  /*font-size: 12px;\n  color: #62696d;\n  width: 45%;*/\n}\n#calquiz-modal .calquiz-left p{\n  font-size: 10px;\n  color: #62696d;\n  font-family: montserratlight;\n  width: 100%;\n  padding-top: 15px;\n}\n\n#calquiz-modal .calc-quiz-margin {\n  /*width: 100%;\n  float: left;\n  text-align: left;\n  margin-top: 20px;*/\n  width: calc(50% - 60px);\n  float: left;\n  text-align: left;\n  margin-left: 10px;\n}\n\n#calquiz-modal .calquiz-left .form-group:first-child {\n  margin-top: 23px;\n}\n\n.calc-quiz-form {\n  padding: 0px 25px;\n  margin-top: 23px !important;\n}\n\n#calquiz-modal.modal .form-group.label-floating label.control-label,\n#calquiz-modal.modal .form-group.label-placeholder label.control-label {\n  top: -7px;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n#calquiz-modal.modal .form-group.label-floating:not(.is-empty) label.control-label {\n  font-size: 10px !important;\n  left: 25px;\n}\n\n#calquiz-modal.modal .form-group.label-floating.is-focused label.control-label {\n  top: -20px !important;\n  font-size: 10px;\n  font-family: montserratregular;\n  color: #fb545b !important;\n  left: 25px;\n}\n#calquiz-modal.modal .form-group.label-floating:not(.is-empty) label.control-label {\n  top: -20px;\n  font-family: montserratregular;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #8e989f  !important;\n}\n#calquiz-modal .check-icon div {\n  line-height: 16;\n  display: inherit;\n  font-size: 12px;\n  color: #62696d;\n}\n#calquiz-modal .calquiz-right{\n  /*width:50%;\n  padding: 35px 25px 0px 40px;\n  display: inline-block; */\n  /*padding: 30px;\n  float: left;\n  padding-bottom: 45px;*/\n  width: 100%;\n  float: left;\n}\n#calquiz-modal .calquiz-right a{\n  float: left;\n}\n#calquiz-modal .calquiz-right i{\n  font-size: 36px;\n  /*color: #989898;\n  width: auto;\n  background: #f3f3f3;\n  border-radius: 50%;\n  border: 3px solid rgba(251,251,251,0.8);\n  height: 80px;\n  width: 80px !important;\n  margin: 0 auto;\n  text-align: center;\n  padding-top: 16px;\n  padding-left: 1px;*/\n}\n#calquiz-modal .calquiz-right h3{\n  font-size: 18px;\n  color: #fb545b;\n  float: left;\n  width: 90%;\n  margin-top: 0px;\n}\n#calquiz-modal .calquiz-right label{\n  font-size: 12px;\n  color: #62696d;\n  width: 45%;\n}\n#calquiz-modal .calquiz-right p{\n  font-size: 10px;\n  color: #62696d;\n  font-family: montserratlight;\n  width: 45%;\n  padding-top: 15px;\n}\n\n#calquiz-modal .btn-red {\n  color: #fff !important;\n  background-color: #fb545b !important;\n  border-color: #fb545b !important;\n  border-radius: 0 !important;\n  font-size: 14px !important;\n  padding: 7px 30px !important;\n  margin-top: 40px !important;\n  transition: all 0.3s ease 0s;\n  margin-right: 0 !important;\n  font-family: montserratregular;\n  font-weight: normal;\n  text-transform: none;\n  border-width: 2px;\n}\n\n#calquiz-modal .btn.btn-red:hover {\n  background: #fdb6b9 !important;\n  color: #fb545b !important;\n  border-color: #fdb6b9 !important;\n}\n#calquiz-modal .step2 .btn-red {\n  margin-bottom: 30px;\n  margin-top: 0px !important;\n}\n.calquiz-outr span.title{\n  font-size: 10px !important;\n  color: #fb545b;\n  font-family: montserratregular;\n  padding: 27px 25px 0px;\n  float: left;\n  width: 100%;\n  text-transform: uppercase;\n}\n\n#calquiz-modal.modal .modal-header i.material-icons {\n  font-size: 16px;\n  color: #fff;\n  text-shadow: none;\n  top: -1px;\n  position: relative;\n}\n\n#calquiz-modal .calquiz-outr .check-icon:hover label span.outer-border{\n  /*display: none;*/\n  /*border: 3px solid transparent;*/\n  /* opacity: 0; */\n}\n\n#calquiz-modal .calquiz-outr .check-icon label .outer-border:after{\n  /*content: '';\n  top: -7px;\n  left: -7px;\n  padding: 7px;\n  box-shadow: 0 0 0 3px rgba(251, 84, 91, 0.67);\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\n  -webkit-transform: scale(.8);\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\n  -moz-transform: scale(.8);\n  -ms-transform: scale(.8);\n  transition: transform 0.2s, opacity 0.2s;\n  transform: scale(.8);\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  content: '';\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;*/\n}\n\n#calquiz-modal .calquiz-outr .check-icon:hover label .outer-border:after{\n  -webkit-transform: scale(1);\n  -moz-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n}\n\n#calquiz-modal .calquiz-outr .check-icon input[type=\"radio\"]:checked + label .outer-border:after{\n  /*content: '';\n  top: -2px;\n  left: -2px;\n  padding: 7px;\n  box-shadow: none;\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\n  -webkit-transform: scale(.8);\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\n  -moz-transform: scale(.8);\n  -ms-transform: scale(.8);\n  transition: opacity 0.2s, -webkit-transform 0.2s;\n  transition: transform 0.2s, opacity 0.2s;\n  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;\n  transform: scale(.8);\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 80%;\n  height: 80%;\n  border-radius: 50%;\n  content: '';\n  box-sizing: content-box;\n  border: 3px solid #000;*/\n}\n\n#calquiz-modal .calquiz-outr .check-icon:hover label i{\n  /*display: none;*/\n  /*color: #fff;\n  background: #fb545b;\n  border: 3px solid rgba(251, 84, 91, 0.67);*/\n}\n\n/* Checkbox with tick icons */\n.check-icon { width: 100%; padding: 8px 15px; font-size: 16px;font-weight: normal;\n  line-height: 16px;border-bottom: 0;}\n.check-icon.last {border: 2px solid #eee;}\n.check-icon:hover, .check-icon.last:hover{cursor:pointer;}\n.check-icon input[type=\"radio\"] {left: -9999px; position: absolute;}\n.check-icon label {content: \"\"; width: 24px; height: 24px;margin-bottom: 0px;}\n.modal .check-icon label i.material-icons{     font-size: 18px;\n  color: #fb545b;\n\n}\n\n.check-icon input[type=\"radio\"]:checked + label span.outer-border {\n  /*border: 3px solid rgba(251, 84, 91, 0.67) !important;\n  border-radius: 50%;\n  height: 80px;\n  width: 80px !important;\n  display: inline-table;*/\n}\n\n.check-icon label span.outer-border{\n  /*border: 3px solid rgba(102, 102, 102, 0.67);\n  border-radius: 50%;\n  height: 80px;\n  width: 80px !important;\n  display: inline-table;\n  -webkit-transition: background 0.2s, color 0.2s;\n  -moz-transition: background 0.2s, color 0.2s;\n  transition: background 0.2s, color 0.2s;\n  cursor: pointer;\n  border-radius: 50%;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n  color: #fff;*/\n}\n\n.check-icon input[type=\"radio\"]:checked + label i.material-icons {\n  /*color: #fff !important;\n  background: #fb545b !important;\n  border: 0px solid #fff !important;\n  -webkit-transform: scale(.8);\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\n  -moz-transform: scale(.8);\n  -ms-transform: scale(.8);\n  transition: transform 0.2s, opacity 0.2s;\n  transform: scale(.8);*/\n}\n\n.check-icon input[type=\"radio\"]:checked + label::after{\n  background: #fb545b;\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 18px;\n  left: 0px;\n  font-size: 13px;\n  color: #fff;\n  border-radius: 50%;\n  padding-left: 3px;\n}\n\n#calquiz-modal .calquiz-outr .check-icon:hover input[type=\"radio\"]:checked + label {\n  border:none;\n}\n\n.check-icon input[type=\"radio\"]:checked + label::after{\n\n}\n\n/*.check-icon input[type=\"radio\"]:checked + label {\n    background-color: #00aea5;\n    border: none;top: 1px;\n}*/\n\n/*.check-icon input[type=\"radio\"]:checked + label::after {\n   font-family: \"Material Icons\"; content: \"\\e5ca\";\n}*/\n\n.check-icon div {\n  /*line-height: 38px; */\n  display: inherit;\n}\n\n#calquiz-modal .calquiz-outr .check-icon label{\n  /*width: 18px;\n  float: left;*/\n  text-align: left;\n  border: none;\n  margin:0px;\n}\n\n#calquiz-modal .calquiz-outr .step2 .check-icon label{\n  text-align: center;\n}\n\n#calquiz-modal .calquiz-outr .check-icon:hover label{\n  /*content: \"\";\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  top: 0px;\n  border: 2px solid #fb545b;\n  border-radius: 50%;\n  margin: 0 auto;*/\n  cursor: pointer;\n}\n\n#calquiz-modal .calquiz-outr h3{\n  font-size: 18px;\n  color: #fb545b;\n  float: left;\n  width: 100%;\n  margin-top: 0px;\n  text-align: left;\n}\n#calquiz-modal .calquiz-outr h3.example-heading{\n  font-size: 14px;\n  color: rgba(97,104,110,0.5);\n  float: left;\n  width: 100%;\n  margin-top: 0px;\n  text-align: left;\n}\n#calquiz-modal .calquiz-outr label{\n  font-size: 12px;\n  color: #62696d;\n  /*width: 100%;*/\n  padding: 0px;\n  float: left;\n  text-align: center;\n  height: auto;\n  width:auto;\n}\n#calquiz-modal .calquiz-left .check-icon {\n  padding: 30px !important;\n  float: left;\n  padding-top: 50px !important;\n}\n#calquiz-modal .calquiz-right .check-icon {\n  padding: 30px !important;\n  float: left;\n  padding-bottom: 50px !important;\n}\n#calquiz-modal .step2 .calquiz-left .check-icon {\n  padding:0px !important;\n}\n#calquiz-modal .step2 .calquiz-right .check-icon {\n  padding:0px !important;\n}\n#calquiz-modal .calquiz-outr p{\n  font-size: 12px;\n  color: #62696d;\n  font-family: montserratlight;\n  width: 100%;\n  line-height:20px;\n  padding:0px;\n  text-align: left;\n}\n\n#calquiz-modal .calquiz-outr span{\n  /*float: left;*/\n  width: 90%;\n  font-size: 14px;\n  /*color: #62696d;*/\n  line-height: 20px;\n  float: left;\n}\n\n.calquiz-outr{\n  float: left;\n  width: 100%;\n}\n#calquiz-modal .res-outer{\n  padding-left:10px;\n}\n#calquiz-modal .check-icon{\n  width: 100%;\n}\n.footer-btn{\n  float: left;\n  width: 100%;\n}\n\n#calquiz-modal .alert.alert-danger{\n  top: 0px;\n  left: 89px;\n  float: left;\n  text-align: left;\n}\n\n#calquiz-modal .alert.alert-danger p{\n  position: absolute;\n  width: 100%;\n  padding-top: 0px;\n  color: #fb545b !important;\n}\n\n#calquiz-modal .alert.alert-danger p span.mat-icon {\n  float: left;\n  width: auto;\n}\n\n#calquiz-modal .alert.alert-danger p span.mat-icon i.material-icons {\n  font-size: 12px !important;\n  margin-right: 5px;\n  margin-top: 4px;\n  color: #fb545b;\n  width: auto !important;\n  padding-top: 0px !important;\n  height: auto !important;\n  background: none;\n  border: none;\n}\n\n.step1 {\n  float: left;\n  width: 100%;\n  text-align: center;\n}\n\n.step2 {\n  float: left;\n  width: 100%;\n  text-align: center;\n}\n\n.full-width {\n  width: 100% !important;\n  float: left;\n}\n\n.text-center{\n  text-align: center !important;\n}\n\n#calquiz-modal .calquiz-outr .step2 h3{\n  width: 100%;\n  text-align:center;\n}\n\n#calquiz-modal .calquiz-outr .step2 input{\n  min-height: 38px;\n  border: 1px solid #cccccc;\n  width: 70%;\n  font-size: 14px;\n  color: #62696d;\n  padding-left: 10px;\n  margin-top: 10px;\n}\n#calquiz-modal .step2 .calquiz-right {\n  width: 50%;\n  padding: 30px 40px;\n  display: inline-block;\n  float: left;\n  margin: 0;\n}\n#calquiz-modal .calquiz-outr .step2 label {\n  font-size: 12px;\n  color: #62696d;\n  width: 100%;\n  padding: 0px;\n  float: left;\n  text-align: center;\n  height: 100%;\n}\n.step2 .check-icon input[type=\"radio\"]:checked + label span.outer-border {\n  border: 3px solid rgba(251, 84, 91, 0.67) !important;\n  border-radius: 50%;\n  height: 80px;\n  width: 80px !important;\n  display: inline-table;\n}\n#calquiz-modal .calquiz-outr .step2 span {\n  width: 100%;\n  line-height: 16px;\n  float: none;\n}\n#calquiz-modal .calquiz-outr .step2 .alert span {\n  font-size: 10px !important;\n}\n.step2 .check-icon label span.outer-border {\n  border: 3px solid rgba(102, 102, 102, 0.67);\n  border-radius: 50%;\n  height: 80px;\n  width: 80px !important;\n  display: inline-table;\n  transition: background 0.2s, color 0.2s;\n  cursor: pointer;\n  border-radius: 50%;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n  color: #fff;\n}\n#calquiz-modal .step2 .calquiz-right i {\n  font-size: 42px;\n  color: #989898;\n  width: auto;\n  /*background: #f3f3f3;*/\n  border-radius: 50%;\n  /*border: 3px solid rgba(251,251,251,0.8);*/\n  /*height: 80px;\n  width: 80px !important;*/\n  margin: 0 auto;\n  text-align: center;\n  padding-top: 22px;\n  padding-left: 1px;\n}\n.step2 .check-icon input[type=\"radio\"]:checked + label i.material-icons {\n  /*color: #fff !important;\n  background: #fb545b !important;*/\n  color: #fb545b !important;\n  border: 0px solid #fff !important;\n  -webkit-transform: scale(.8);\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\n  -moz-transform: scale(.8);\n  -ms-transform: scale(.8);\n  transition: opacity 0.2s, -webkit-transform 0.2s;\n  transition: transform 0.2s, opacity 0.2s;\n  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;\n  transform: scale(.8);\n}\n#calquiz-modal .calquiz-outr .step2 .check-icon input[type=\"radio\"]:checked + label .outer-border:after {\n  content: '';\n  top: -2px;\n  left: -2px;\n  padding: 7px;\n  box-shadow: none;\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\n  -webkit-transform: scale(.8);\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\n  -moz-transform: scale(.8);\n  -ms-transform: scale(.8);\n  transition: opacity 0.2s, -webkit-transform 0.2s;\n  transition: transform 0.2s, opacity 0.2s;\n  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;\n  transform: scale(.8);\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 80%;\n  height: 80%;\n  border-radius: 50%;\n  content: '';\n  box-sizing: content-box;\n  border: 3px solid #000;\n}\n#calquiz-modal .calquiz-outr .step2 .check-icon label .outer-border:after {\n  content: '';\n  top: -7px;\n  left: -7px;\n  padding: 7px;\n  box-shadow: 0 0 0 3px rgba(251, 84, 91, 0.67);\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\n  -webkit-transform: scale(.8);\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\n  -moz-transform: scale(.8);\n  -ms-transform: scale(.8);\n  transition: opacity 0.2s, -webkit-transform 0.2s;\n  transition: transform 0.2s, opacity 0.2s;\n  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;\n  transform: scale(.8);\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  content: '';\n  box-sizing: content-box;\n}\n#calquiz-modal .step2 .calc-quiz-margin {\n  width: 100%;\n  float: left;\n  text-align: left;\n  margin-top: 20px;\n  margin-left: 0px;\n}\n.back-icon {\n  height: 0px;\n  position: relative;\n  top: 0px;\n  left: -60px;\n  float: left;\n  width: 100%;\n}\n\n#calquiz-modal .back-icon i.material-icons {\n  font-size: 18px !important;\n  color: #989898;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding-top: 0px !important;\n  opacity: 0.7;\n  width: 17px !important;\n  height: 17px;\n}\n\n#calquiz-modal .back-icon i.material-icons:hover {\n  opacity: 1;\n  /*-webkit-animation: spinAround 2s linear infinite;\n  -moz-animation: spinAround 2s linear infinite;\n  animation: spinAround 2s linear infinite;*/\n}\n\n-webkit-keyframes spinAround {\nfrom {\n  -webkit-transform: rotate(0deg)\n}\nto {\n  -webkit-transform: rotate(360deg);\n}\n}\n@-moz-keyframes spinAround {\n  from {\n    -moz-transform: rotate(0deg)\n  }\n  to {\n    -moz-transform: rotate(360deg);\n  }\n}\n@keyframes spinAround {\n  from {\n    transform: rotate(0deg)\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.hide{\n  display: none;\n}\n\n#calquiz-modal .next-step {\n  padding: 7px 50px !important;\n}\n\n.custom-width{\n  width:700px;\n}\n.custom-width .modal-body{\n  padding: 0px;\n  padding-bottom: 0px !important;\n}\n.custom-width .modal-header{\n  margin:0px !important;\n  float: left;\n  width: 100%;\n}\n.header-grey{\n  background: #61686e !important;\n  color: #fff;\n  text-transform: uppercase;\n}\n.animated-icon{\n\n  display: inline-block;\n  vertical-align: top;\n  overflow: hidden;\n  margin: 4px;\n  width: 40px !important;\n  height: 40px;\n  font-size: 0;\n  text-indent: -9999px;\n  border-radius: 50%;\n  -webkit-transition: background 0.5s;\n  transition: background 0.5s;\n  position: relative;\n  top: -7px;\n}\n.animated-calc{\n  /*background: url(app/site/components/+dashboard/images/icon_01.png);*/\n  background: url(/assets/images/dashboard/icon_01.png);\n  background-position: -2px -8px;\n}\n.animated-recom{\n  /*background: url(app/site/components/+dashboard/images/icon_02.png);*/\n   background: url(/assets/images/dashboard/icon_02.png);\n  background-position: -2px -8px;\n}\n.step1 .calquiz-left:hover{\n  background: #f6f8f9;\n}\n.step1 .calquiz-left:hover .animated-calc{\n  background-position: -2px -59px;\n}\n\n.step1 .calquiz-right:hover{\n  background:#f6f8f9;\n}\n.step1 .calquiz-right:hover .animated-recom{\n  background-position: -2px -59px;\n}\n\n\n\n\n/* End: Modal calcquiz */\n\n\n\n\n@media (min-width: 320px) and (max-width: 768px) {\n  #new-header .navbar-fixed-top .nav-padding {\n    padding-right: 0px;\n  }\n  .full-menu,\n  .dash-circle,\n  .dash-prog-outer h2 {\n    display: none;\n  }\n  .main-logo {\n    display: none !important;\n  }\n  .mobile-menu {\n    display: block;\n    float: right;\n    margin-top: 9px;\n    position: relative;\n  }\n  #new-header .navbar-default {\n    background: #fb5f66 !important;\n    border: none;\n  }\n  .mobile-menu button {\n    border: none;\n    box-shadow: none;\n    color: #fff;\n    background: none;\n  }\n  .mobile-menu .btn-default:hover {\n    color: #fff;\n    background: none;\n  }\n  .dash-boxes-outr {\n    padding: 10px;\n    padding-top: 30px;\n  }\n  .mobile-menu .dropdown-menu {\n    background: #62696d;\n    top: -11px;\n    border-radius: 0px;\n    left: -176px;\n    width: 235px;\n    font-family: montserratlight;\n    padding-bottom: 55px;\n  }\n  .mobile-menu .name-dropdown-border {\n    width: 100%;\n    margin: 5px 0px;\n  }\n  .mobile-menu .user-outr {\n    float: left;\n    width: 100%;\n    padding: 0;\n    margin: 0px;\n    display: block;\n    text-transform: capitalize;\n  }\n  .mobile-menu .user-outr li {\n    float: right;\n    font-size: 24px;\n    font-family: montserratlight;\n    color: #fff;\n    margin-right: 24px;\n    /* margin: 10px 19px; */\n    margin-top: 8px;\n    margin-bottom: 6px;\n  }\n  .mobile-menu .user-outr li a {\n    margin-right: 30px;\n  }\n  .mobile-menu .company-list li,\n  .mobile-menu .name-list li {\n    margin: 10px 0px;\n    text-align: right;\n    font-size: 16px;\n    width: 100%;\n    float: left;\n    padding-right: 20px;\n  }\n  .mobile-menu .company-list li a,\n  .mobile-menu .name-list li a {\n    float: right;\n    color: #fff;\n  }\n  .mobile-menu .company-list li a i {\n    margin-right: 20px;\n    float: left;\n  }\n  .mobile-menu .name-list li a i {\n    margin-left: 20px;\n    float: right;\n  }\n  .mobile-menu .company-list-title {\n    float: left;\n    color: #fff;\n  }\n  .white-logo {\n    display: none !important;\n  }\n  .dash-prog-outer {\n    float: left;\n    width: 100%;\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }\n  .dash-prog-outer h5 {\n    font-size: 24px;\n    text-align: center;\n    max-width: 90%;\n    margin-bottom: 1px;\n\n  }\n  .dash-prog-outer .company-dropdown-wrapper {\n    min-height: 35px;\n    width: 100%;\n    text-align: center;\n  }\n  .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    margin: 0 auto;\n    float: none;\n    text-align: center;\n  }\n  #new-header .navbar-header {\n    float: left;\n    margin-left: 0px;\n    margin-right: 0px !important;\n  }\n  #new-header .navbar-logopadding {\n    padding-right: 0px;\n    padding-top: 0px;\n  }\n  .circle-sec {\n    float: left;\n    width: 33%;\n    text-align: center;\n  }\n  .dash-circle-red,\n  .dash-circle-pink,\n  .dash-circle-d-pink {\n    float: none;\n    /* margin-right: 20px; */\n    margin: 0 auto;\n    width: 67px;\n    height: 38px;\n    padding-top: 13px;\n    border: none;\n  }\n  .dash-circle-red i,\n  .dash-circle-pink i,\n  .dash-circle-d-pink i {\n    font-size: 30px;\n  }\n  .circle-cal-outer h2 {\n    color: #62696d;\n    float: left;\n    font-family: montserratregular !important;\n    font-size: 24px !important;\n    margin: 15px 0 5px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n  }\n  .circle-cal-outer h5 {\n    float: left;\n    color: #8e989f;\n    font-size: 10px;\n    font-family: montserratregular;\n    text-transform: uppercase;\n    margin-top: 0;\n    width: 100%;\n  }\n  .circle-cal-outer {\n    float: left;\n    width: 100%;\n  }\n  .user-outr {\n    float: none;\n    width: 130px;\n    padding: 0;\n    margin: 0 auto;\n    margin-top: 30px;\n  }\n  .dash-top2-textinner h3 {\n    font-size: 20px;\n    margin-top: 5px;\n  }\n  .dash-top2-textinner .company-dropdown-wrapper .dropdown-toggle span {\n    width: auto !important;\n    font-size: 14px;\n  }\n  .user-outr li a img {\n    width: 44px;\n    height: 44px;\n  }\n  .user-outr {\n    display: none;\n    float: none;\n    width: 160px;\n    margin-top: 30px;\n  }\n  .dash-top2-textinner .company-dropdown-wrapper {\n    float: left;\n    margin: 0;\n    width: 100%;\n  }\n  .dash-top2-textinner .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    float: left;\n    text-align: left;\n  }\n  #new-header .navbar-default {\n    height: 56px;\n  }\n  .white-logo .navbar-brand img {\n    height: 53px;\n    margin-top: -20px;\n    margin: 0 auto;\n    margin-top: -20px;\n  }\n  .white-logo .navbar-brand {\n    float: none;\n  }\n  .dashboard-topsec {\n    padding: 0px;\n    padding-top: 0px;\n    padding-bottom: 5px;\n    margin-top: 0px;\n    float: left;\n    width: 100%;\n  }\n  .circle-parent {\n    padding-bottom: 20px;\n  }\n  .user-outr li a.add-user {\n    width: 45px;\n    height: 45px;\n    padding-top: 9px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\n    top: -30px;\n    left: 17px;\n    font-size: 34px;\n    position: relative;\n    color: #f87b80;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\n    font-size: 16px;\n  }\n  .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\n    width: 91%;\n    font-size: 14px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\n    width: 35px;\n    height: 35px;\n    padding-top: 8px;\n    font-size: 14px;\n    top: 13px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\n    font-size: 14px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\n    font-size: 24px;\n  }\n  .company-block-content {\n    margin-left: 50px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n    left: 42px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\n    right: 34px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n    top: 8px;\n    left: -8px;\n  }\n  .choosetem-topsec p {\n    font-size: 14px;\n    width: 100%;\n  }\n  .choosetem-topsec h3 {\n    font-size: 20px;\n  }\n  .choosetemp-social li {\n    margin-bottom: 0px;\n    margin-top: 20px;\n  }\n  .choosetemp-actions {\n    margin-top: 10px;\n    width: 100%;\n  }\n\n  .choosetemp-boxes-outr {\n    padding: 0px;\n  }\n  .choosetemp-box-figure2 {\n    padding: 0px;\n  }\n\n  .dashboard-topsec{\n    padding-top: 0px;\n    margin-top: 0px;\n  }\n\n  .bootbox .modal-content {\n    float: left;\n    width: 62%;\n    margin-left: 5px;\n  }\n\n  .one-line-bootbox .bootbox-body-left {\n    min-height: 122px;\n  }\n\n  .bootbox-body .bootbox-body-right {\n    width: 80%;\n  }\n\n  #calquiz-modal .calquiz-outr .step2 input{\n    width: 100%;\n  }\n\n  #calquiz-modal .alert.alert-danger{\n    left: 0px;\n  }\n\n  #calquiz-modal .calquiz-left{\n    width: 100%;\n    /*padding: 35px 25px 0px 25px;*/\n    float: left;\n  }\n\n  #calquiz-modal .calquiz-right{\n    /*width: 100%;\n    padding: 25px;\n    padding-bottom: 35px;*/\n    width:100%;\n    float: left;\n  }\n  #calquiz-modal .calquiz-right i{\n    padding-left:0px;\n  }\n  #calquiz-modal .calquiz-left i{\n    padding-left: 0px;\n  }\n  #calquiz-modal .calquiz-left .check-icon{\n    padding: 30px 20px!important;\n  }\n  #calquiz-modal .calquiz-right .check-icon{\n    padding: 30px 20px!important;\n  }\n\n}\n\n@media (min-width: 990px) and (max-width:1300px) {\n  .user-outr{ width:100%;}\n  .dash-prog-outer{\n    width:190px;\n  }\n  .circle-sec{\n    text-align: center;\n  }\n  .dash-circle-pink{\n    width: 57px;\n    height: 57px;\n    padding-top: 7px;\n    margin-right: 10px;\n  }\n  .dash-circle-red{\n    width: 57px;\n    height: 57px;\n    padding-top: 7px;\n    margin-right: 10px;\n  }\n  .dash-circle-d-pink{\n    width: 57px;\n    height: 57px;\n    padding-top: 7px;\n    margin-right: 10px;\n  }\n  .circle-cal-outer{\n    width: 54%;\n  }\n  .circle-cal-outer h2{\n    width: 94%;\n  }\n  .circle-cal-outer h5{\n    width: 94%;\n  }\n  .dash-prog-outer h2{\n    font-size: 15px !important;\n  }\n  .dash-prog-outer h5{\n    font-size: 11px;\n  }\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\n    width: 100%;\n  }\n  .dash-prog-outer .company-dropdown-wrapper{\n    width:50%;\n  }\n  .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle{\n    width: 100%;\n  }\n\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu{\n    left: 6px;\n  }\n}\n@media (min-width:320px) and (max-width:767px){\n  .res-outer {\n    width: 80%;\n    margin-left: 58px;\n    margin-top: 10px;\n    padding-left: 0 !important;\n  }\n  .custom-width{\n    width:auto;\n  }\n  #calquiz-modal .calc-quiz-margin{\n    width:calc(100% - 60px);\n  }\n}\n/* Start: bootbox modal */\n@media screen and (min-width: 320px) and (max-width: 320px){\n  .bootbox .modal-content {\n    width: 62%;\n    margin-left: 5px;\n  }\n\n  .one-line-bootbox .bootbox-body-left {\n    min-height: 122px;\n  }\n\n  .bootbox-body .bootbox-body-right {\n    width: 80%;\n  }\n\n  .dashboard-toast{\n    left: 8px !important;\n    width: 285px !important;\n  }\n\n  .dashboard-toast i{\n    width: 30px !important;\n    padding-left: 3px;\n  }\n\n  .d-toast-btn i{\n    width: auto !important;\n    padding-left: 0px !important;\n  }\n\n  .toast{\n    left: 8px !important;\n    width: 285px !important;\n  }\n\n  .toast i{\n    width: 30px !important;\n    padding-left: 3px;\n  }\n\n  .toast .btn i{\n    width: auto !important;\n    padding-left: 0px !important;\n  }\n\n}\n\n@media screen and (min-width: 480px) and (max-width: 480px){\n  .bootbox .modal-content {\n    width: 90%;\n    margin-left: 15px;\n  }\n}\n\n/* End: bootbox modal */\n\n"

/***/ },

/***/ 1140:
/***/ function(module, exports) {

module.exports = "<sd-toolbar [page]=\"'dashboard'\"></sd-toolbar>\n<div class=\"preloader\" *ngIf=\"loader==0\">\n  <div class=\"status\">&nbsp;</div>\n</div>\n<!--<div class=\"loader\" *ngIf=\"loader==0\"></div>-->\n<div class=\"dashboard-toast\" style=\"display: none; bottom:60px;\"><i class=\"material-icons toast-ic\">check</i>\n  <span class=\"dash-toast-msg\">Calculator Deleted Successfully.</span>\n  <button type=\"button\" class=\"btn d-toast-btn\"><i class=\"material-icons\">clear</i></button>\n</div>\n<!-- Dashboard Section -->\n<div class=\"col-md-12 dashboard-topsec\">\n  <div class=\"col-md-4 col-sm-12 col-xs-12\">\n    <div class=\"dash-circle\">{{currentCompanyInit}}</div>\n    <div class=\"dash-prog-outer\">\n      <h2>Hey {{(username.substr(0,username.indexOf(' '))=='')?username:username.substr(0,username.indexOf(' '))}}, <br>We wish you a productive day :)</h2>\n      <h5 class=\"ellipsis hide\">{{currentCompany.name}}</h5>\n      <div class=\"btn-group company-dropdown-wrapper hide\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"material-icons\">keyboard_arrow_down</i>\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a href=\"javascript:void(0);\" (click)=\"callGA('ADDCOMPANY')\" class=\"hvr-sweep-to-right add-new-company\" data-toggle=\"modal\" data-target=\"#add-new-company\">\n              <i class=\"material-icons\">playlist_add</i> &nbsp;Add New Company\n            </a>\n          </li>\n          <div class=\"company-dropdown-main\">\n            <div class=\"company-dropdown-list\" [class.slimscroll]=\"myCompaniesList.length > 3\">\n              <li *ngFor=\"let company of myCompaniesList\">\n                <a href=\"//{{company.sub_domain}}{{subdomainExtension}}/dashboard\" class=\"hvr-sweep-to-right\" *ngIf=\"company.user_company.active\">\n                  <div class=\"company-block\">\n                    <span class=\"company-block-inner\">{{company.name[0]}}</span>\n                  </div>\n                  <div class=\"company-block-content\">\n                    <span class=\"company-title ellipsis\">{{company.name}}</span>\n                    <span class=\"company-site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\n                  </div>\n                </a>\n              </li>\n            </div>\n          </div>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-sm-12 col-xs-12\">\n    <div class=\"circle-sec\">\n      <div class=\"dash-circle-red\"><i class=\"material-icons\">person</i></div>\n      <div class=\"circle-cal-outer\">\n        <h2>{{totalUniqueVisitors}}</h2>\n        <h5>Unique Visitors</h5>\n      </div>\n    </div>\n    <div class=\"circle-sec\">\n      <div class=\"dash-circle-pink\"><i class=\"material-icons\">check_circle</i></div>\n      <div class=\"circle-cal-outer\">\n        <h2>{{totalLeads}}</h2>\n        <h5>Leads Generated</h5>\n      </div>\n    </div>\n    <div class=\"circle-sec\">\n      <div class=\"dash-circle-d-pink\"><i class=\"material-icons\">trending_up</i></div>\n      <div class=\"circle-cal-outer\">\n        <h2>{{overallConversionRate}}%</h2>\n        <h5>Conversion Rate</h5>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-2 col-sm-12 col-xs-12\">\n    <ul class=\"user-outr\">\n\n      <li *ngFor=\"let user of currentCompanyUsers\">\n        <a href=\"javascript:void(0);\" class=\"more-users popover-wrapper\">\n          <span>{{user.name[0]}}</span>\n          <div class=\"more-popover-block single-user\">\n            <p class=\"ellipsis\">{{user.name}}</p>\n            <label class=\"ellipsis\">{{user.user_company.role}}</label>\n          </div>\n        </a>\n      </li>\n      <li *ngIf=\"moreCompanyUsers.length > 0\">\n        <a href=\"javascript:void(0);\" class=\"more-users popover-wrapper\">\n          <i class=\"material-icons\">more_horiz</i>\n          <div class=\"more-popover-block \">\n            <ul>\n              <li *ngFor=\"let user of moreCompanyUsers\">\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\">\n                  <span>{{user.name[0]}}</span>\n                  <div class=\"more-users-list\">\n                    <p class=\"ellipsis\">{{user.name}}</p>\n                    <label class=\"ellipsis\">{{user.user_company.role}}</label>\n                  </div>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </a>\n      </li>\n      <li>\n        <a (click)=\"callGA('ADDUSER')\" href=\"javascript:void(0);\" class=\"add-user popover-wrapper\" data-toggle=\"modal\" data-target=\"#add-new-user\">\n          <i class=\"material-icons\">add</i>\n          <div class=\"popover-block\">Add collaborator</div>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n<!-- Dashboard Section End-->\n<!-- Dashboard 3 boxes start (sahil) -->\n<div class=\"col-xs-12 dash-boxes-outr\">\n  <div class=\"col-xs-12 col-sm-12 col-md-4\">\n    <div class=\"dash-box dash-top3\">\n      <div class=\"dash-top3-textinner hide\">\n        <label>Now</label>\n        <h3>Create a New Experience</h3>\n      </div>\n      <div class=\"dash-top3circletable\">\n        <!--<a href=\"javascript:void(0);\" class=\"dash-top3-circle\" (click)=\"addNewCalc();callGA('ADDCALC')\"  data-toggle=\"modal\" data-target=\"#calquiz-modal\">-->\n        <a href=\"javascript:void(0);\" class=\"dash-top3-circle\"  (click)=\"initCalcQuiz()\" data-toggle=\"modal\" data-target=\"#calquiz-modal\">\n          <i class=\"material-icons\">add_circle_outline</i> Create a New Experience\n        </a>\n      </div>\n    </div>\n  </div>\n  <div *ngFor=\"let app of apps\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 \">\n      <div class=\"dash-box\">\n        <figure>\n          <div class=\"dash-box-top\" *ngIf=\"app.pages[0].bgImage\" [style.backgroundImage]=\"'url(' + app.pages[0].bgImage + ')' | safeStyle\">\n          </div>\n          <div class=\"dash-box-top\" *ngIf=\"!app.pages[0].bgImage\">\n          </div>\n        </figure>\n        <div class=\"dash-top2-textinner\">\n          <div class=\"\">\n            <span class=\"company-dropdown-title-active ellipsis\" *ngIf=\"app.liveApp\">Published: {{app.createdAt}}</span>\n            <span class=\"company-dropdown-title-active ellipsis\" *ngIf=\"!app.liveApp\">Last Edited: {{app.updatedAt}}</span>\n          </div>\n          <div class=\"dash-pullout-new\">\n            <i class=\"material-icons\">more_vert</i>\n            <ul class=\"new-dropdown-menu\">\n              <li>\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC')\">\n                  <div class=\"company-block\">\n                    <i class=\"material-icons\">format_paint</i>\n                  </div>\n                  <div class=\"company-block-content\">\n                    <span class=\"company-title ellipsis\">&nbsp;Edit</span>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\" checkAnalytics(app,'analytics');callGA('ANALYTICS')\">\n                  <div class=\"company-block\">\n                    <i class=\"material-icons\">trending_up</i>\n                  </div>\n                  <div class=\"company-block-content\">\n                    <span class=\"company-title ellipsis\">&nbsp;Analytics</span>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'config');selectSubTab('settings');callGA('SETTINGS');\">\n                  <div class=\"company-block\">\n                    <i class=\"material-icons\">mode_edit</i>\n                  </div>\n                  <div class=\"company-block-content\">\n                    <span class=\"company-title ellipsis\">&nbsp;Settings</span>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a class=\"hvr-sweep-to-right\" (click)=\"duplicateApp(app._id);callGA('DUPLICATE')\">\n                  <div class=\"company-block\">\n                    <i class=\"material-icons\">content_copy</i>\n                  </div>\n                  <div class=\"company-block-content\">\n                    <span class=\"company-title ellipsis\">&nbsp;Duplicate</span>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"javascript:void(0);\" (click)=\"deleteApp(app._id);callGA('DELETE')\" class=\"hvr-sweep-to-right\">\n                  <div class=\"company-block\">\n                    <i class=\"material-icons\">delete</i>\n                  </div>\n                  <div class=\"company-block-content\">\n                    <span class=\"company-title ellipsis\">&nbsp;Delete</span>\n                  </div>\n                </a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"btn-group company-dropdown-wrapper hide\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <div class=\"das-box-menu\">\n                <i class=\"material-icons\">more_vert</i>\n                <ul class=\"dropdown-menu\">\n                  <li>\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC')\">\n                      <div class=\"company-block\">\n                        <i class=\"material-icons\">format_paint</i>\n                      </div>\n                      <div class=\"company-block-content\">\n                        <span class=\"company-title ellipsis\">&nbsp;Edit Design</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'config');selectSubTab('settings');callGA('SETTINGS')\">\n                      <div class=\"company-block\">\n                        <i class=\"material-icons\">mode_edit</i>\n                      </div>\n                      <div class=\"company-block-content\">\n                        <span class=\"company-title ellipsis\">&nbsp;Edit Settings</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"checkAnalytics();callGA('ANALYTICS')\">\n                      <div class=\"company-block\">\n                        <i class=\"material-icons\">trending_up</i>\n                      </div>\n                      <div class=\"company-block-content\">\n                        <span class=\"company-title ellipsis\">&nbsp;View Analytics</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li>\n                    <a class=\"hvr-sweep-to-right\" (click)=\"duplicateApp(app._id);callGA('DUPLICATE')\">\n                      <div class=\"company-block\">\n                        <i class=\"material-icons\">content_copy</i>\n                      </div>\n                      <div class=\"company-block-content\">\n                        <span class=\"company-title ellipsis\">&nbsp;Duplicate Calc</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'config');selectSubTab('share-your-calculator');callGA('SHARE')\">\n                      <div class=\"company-block\">\n                        <i class=\"material-icons\">computer</i>\n                      </div>\n                      <div class=\"company-block-content\">\n                        <span class=\"company-title ellipsis\">&nbsp;Publish / Share</span>\n                      </div>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"javascript:void(0);\" (click)=\"deleteApp(app._id);callGA('DELETE')\" class=\"hvr-sweep-to-right\">\n                      <div class=\"company-block\">\n                        <i class=\"material-icons\">delete</i>\n                      </div>\n                      <div class=\"company-block-content\">\n                        <span class=\"company-title ellipsis\">&nbsp;Delete</span>\n                      </div>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </button>\n          </div>\n          <h3>{{app.name}}</h3>\n          <div class=\"col-xs-12 text-center\">\n            <a href=\"javascript:void(0);\" (click)=\"openOldCalc(app,'build');callGA('OPENCALC')\" class=\"dash-box-send\">\n              <i class=\"material-icons\">send</i>\n            </a>\n          </div>\n        </div>\n        <div class=\"dash-box-bottom\">\n          <ul>\n            <li>\n              <i class=\"material-icons\">public</i>\n              <label class=\"text\">Status</label>\n              <div class=\"switch-outr\">\n                <div class=\"dummy-switch\" [class.red]=\"app.mode=='PUBLIC'\">\n                  <p>{{(app.mode=='PUBLIC')?'Live':'Draft'}}</p>\n                </div>\n              </div>\n            </li>\n            <li>\n              <i class=\"material-icons\">person</i>\n              <label class=\"text\">Unique Visits</label>\n              <span class=\"value\">{{ (app.uniqueViews!=undefined)?app.uniqueViews:'--' }}</span>\n            </li>\n            <li>\n              <i class=\"material-icons\">reorder</i>\n              <label class=\"text\">Leads Generated</label>\n              <span class=\"value\">{{ (app.leads!=undefined)?app.leads:'--' }}</span>\n            </li>\n            <li>\n              <i class=\"material-icons\">done_all</i>\n              <label class=\"text\">Conversion Rate</label>\n              <span class=\"value\">{{ (app.conversionRate!=undefined)?app.conversionRate+'%':'--' }}</span>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Dashboard 3 boxes end (sahil) -->\n\n<div id=\"add-new-company\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    Modal content\n    <div class=\"modal-content modal-bg\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <i class=\"material-icons\">close</i>\n        </button>\n        <h5 class=\"modal-title\">Create a New Company</h5>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"sahil-material\">\n          <form [formGroup]=\"createCompanyForm\" (ngSubmit)=\"createCompany()\">\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\" for=\"companyname\"> New Company Name</label>\n              <input class=\"form-control\" id=\"companyname\" type=\"text\" name=\"companyname\" formControlName=\"companyname\" (focus)=\"hideError()\">\n            </div>\n            <div *ngIf=\"createCompanyForm.controls.companyname.touched && !createCompanyForm.controls.companyname.valid\" class=\"alert alert-danger\">\n              <p *ngIf=\"createCompanyForm.controls.companyname.errors.required\">Company Name is required.</p>\n              <p *ngIf=\"createCompanyForm.controls.companyname.errors.minlength\">Min 3 character is required.</p>\n            </div>\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\" for=\"domain\"> Company Url</label>\n              <input class=\"form-control\" id=\"domain\" type=\"text\" name=\"domain\" formControlName=\"domain\" (focus)=\"hideError()\">\n              <label class=\"in-active\">{{subdomainExtension}}</label>\n            </div>\n            <div *ngIf=\"createCompanyForm.controls.domain.touched && !createCompanyForm.controls.domain.valid\" class=\"alert alert-danger\">\n              <p *ngIf=\"createCompanyForm.controls.domain.errors.required\">Company Name is required.</p>\n              <p *ngIf=\"createCompanyForm.controls.domain.errors.minlength\">Min 3 character is required.</p>\n              <p *ngIf=\"createCompanyForm.controls.domain.errors.pattern\">\n                Invalid Url\n              </p>\n            </div>\n            <button type=\"submit\" id=\"btnCreateCompany\" class=\"btn btn-red-outline btn-add-user btn-hover\" [disabled]=\"!createCompanyForm.valid\">Add New Company</button>\n          </form>\n          <div class=\"alert alert-danger hide\" id=\"success-addCompany\">\n            {{Message}}\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        Your company will be created immediately. As soon as the company is created, you can start adding users to collaborate.\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"add-new-user\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content modal-bg\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                </button>\n                <h5 class=\"modal-title\">Add New User</h5>\n            </div>\n            <form [formGroup]=\"inviteUserForm\" (ngSubmit)=\"inviteUser()\" id=\"inviteUserForm\">\n                <div class=\"modal-body\">\n                    <div class=\"alert alert-danger custom-alert hide\" id=\"success-addUser\">\n                        <p>\n                            <span class=\"mat-icon\">\n                                <i class=\"material-icons\">report_problem</i>\n                            </span>\n                            <span id=\"dashboardAdduserMessage\"></span>\n                        </p>\n                    </div>\n                    <div class=\"sahil-material\">\n                        <div class=\"form-group label-floating name\">\n                            <label class=\"control-label\" for=\"inputName\"> Name</label>\n                            <input class=\"form-control\" id=\"inputName\" type=\"text\" formControlName=\"userName\" name=\"userName\" autocomplete=\"off\">\n                        </div>\n                        <div *ngIf=\"inviteUserForm.controls.userName.touched && !inviteUserForm.controls.userName.valid\" class=\"alert alert-danger\">\n                            <p *ngIf=\"inviteUserForm.controls.userName.errors.required\">Name is required.</p>\n                            <p *ngIf=\"inviteUserForm.controls.userName.errors.minlength\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\tMin 3 character is required.\n\t\t\t\t\t\t\t</p>\n                        </div>\n                        <div class=\"form-group label-floating email\">\n                            <label class=\"control-label\" for=\"inputEmail\"> Email Address</label>\n                            <input class=\"form-control\" id=\"inputEmail\" type=\"email\" formControlName=\"userEmail\" name=\"userEmail\" autocomplete=\"off\">\n                        </div>\n                        <div *ngIf=\"inviteUserForm.controls.userEmail.touched && !inviteUserForm.controls.userEmail.valid\" class=\"alert alert-danger\">\n                            <p *ngIf=\"inviteUserForm.controls.userEmail.errors.required\">Email is required.</p>\n                            <p *ngIf=\"inviteUserForm.controls.userEmail.errors.checkmail\">Invalid Email.</p>\n                        </div>\n                        <div class=\"form-group form-group-radio\">\n                            <label class=\"radio-inline\">\n                                <input type=\"radio\" value=\"ADMIN\" id=\"radioAdmin\" formControlName=\"userRole\" name=\"userRole\">\n                                <label for=\"radioAdmin\"> </label> Admin {{userRole}}\n                            </label>\n                            <label class=\"radio-inline\">\n                                <input type=\"radio\" value=\"MANAGER\" id=\"radioManager\" formControlName=\"userRole\" name=\"userRole\">\n                                <label for=\"radioManager\"> </label> Manager\n                            </label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"submit\" [disabled]=\"!inviteUserForm.valid\" class=\"btn btn-red-outline btn-add-user btn-hover\" id=\"btnInvite\">Add New User</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<!--- cal quiz modal -->\n<div id=\"calquiz-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog custom-width\">\n        <div class=\"modal-content modal-bg\">\n                <div class=\"modal-body\">\n                    <div class=\"calquiz-outr\">\n                        <div class=\"step1\">\n                             <div class=\"modal-header\">\n                                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                    <i class=\"material-icons\">close</i>\n                                </button>\n                                <h5 class=\"modal-title\">What will You Create Today? </h5>\n                            </div>\n                            <!--<div class=\"calquiz-left\">\n                                <label class=\"check-icon\">\n                                    <input type=\"radio\" value=\"Numerical\" name=\"calQuiz\" id=\"radio1\" (click) = \"selectCalc()\">\n                                    <label for=\"radio1\">\n                                        <span class=\"outer-border \">\n                                            <i class=\"material-icons\">dialpad</i>\n                                        </span>\n                                    </label>\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 np calc-quiz-margin\">\n                                        <h3>Numerical Calculator</h3>\n                                        <span class=\"col-md-6 col-sm-12 col-xs-12 np\">Gives a result in the form of a number like a price estimate, percentage or\n\n\t\t\t\tscore.</span>\n                                        <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\n                                           How much does it cost to remodel your kitchen?<br/>\n                                           What is the risk of getting zika?  <br/>\n                                           How much do you really know about the Lakers?\n                                        </p>\n                                    </div>\n                                </label>\n                            </div>-->\n                            <!--<div class=\"calquiz-right\">\n                                <label class=\"check-icon ic\">\n                                    <input type=\"radio\" value=\"Recommendation\" name=\"calQuiz\" id=\"radio2\" (click) = \"selectCalc()\" >\n                                    <label for=\"radio2\">\n                                        <span class=\"outer-border\">\n                                            <i class=\"material-icons\">filter_vintage</i>\n                                        </span>\n                                    </label>\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 np calc-quiz-margin\">\n                                        <h3>Outcome Quiz</h3>\n                                        <span class=\"col-md-6 col-sm-12 col-xs-12 np\">Gives a result in the form of a recommendation or a suggestion.</span>\n                                        <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\n                                            Which jeans should you wear?<br/>\n                                            Which insurance plan is right for you?<br/>\n                                            Which celebrity matches your style?\n                                        </p>\n                                    </div>\n                                </label>\n                            </div>-->\n                            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                <div class=\"calquiz-left\">\n                                    <label class=\"check-icon\">\n                                            <input type=\"radio\" value=\"Numerical\" name=\"calQuiz\" id=\"radio1\" (click) = \"selectCalc()\">\n                                            <label for=\"radio1\">\n                                                <span class=\"outer-border \">\n                                                    <!--<i class=\"material-icons\">dialpad</i>-->\n                                                    <span class=\"animated-icon animated-calc\">\n                                                    </span>\n                                                </span>\n                                            </label>\n                                            <div class=\"calc-quiz-margin\">\n                                                <h3>Numerical Calculator</h3>\n                                                <span class=\"\">Gives a result in the form of a number like a price estimate, percentage or score.</span>\n                                            </div>\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 np res-outer\">\n                                                <h3 class=\"example-heading\">Examples</h3>\n                                                <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\n                                                How much does it cost to remodel your kitchen?<br>\n                                                What is the risk of getting zika?    <br>\n                                                How much do you really know about the Lakers?\n                                                </p>\n                                            </div>\n                                        </label>\n                                    </div>\n                                    <div class=\"calquiz-right\">\n                                        <label class=\"check-icon ic\">\n                                                <input type=\"radio\" value=\"Recommendation\" name=\"calQuiz\" id=\"radio2\" (click) = \"selectCalc()\">\n                                                <label for=\"radio2\">\n                                                    <span class=\"outer-border\">\n                                                        <!--<i class=\"material-icons\">insert_photo</i>-->\n                                                        <span class=\"animated-icon animated-recom\">\n                                                        </span>\n                                                    </span>\n                                                </label>\n                                                <div class=\"calc-quiz-margin\">\n                                                    <h3>Outcome Quiz</h3>\n                                                    <span class=\"col-md-7 col-sm-12 col-xs-12 np\">Gives a result in the form of a recommendation or a suggestion.</span>\n                                                </div>\n                                                <div class=\"col-md-6 col-sm-6 col-xs-12 np res-outer\">\n                                                    <h3 class=\"example-heading\">Examples</h3>\n                                                    <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\n                                                    Which jeans should you wear?<br>\n                                                    Which insurance plan is right for you? <br>\n                                                    Which celebrity matches your style?\n                                                    </p>\n                                                </div>\n                                            </label>\n                                    </div>\n                                </div>\n                        </div>\n                   <form [formGroup] = \"calcNameform\" (ngSubmit) = \"onAddNewCalc()\" id=\"type-calc\" novalidate>\n                        <div class=\"step2 hide\">\n                             <div class=\"modal-header\">\n                                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                    <i class=\"material-icons\">close</i>\n                                </button>\n                                <h5 class=\"modal-title\">Add a Title </h5>\n                            </div>\n                            <div class=\"calquiz-left calquiz-right full-width\">\n                                <div class=\"back-icon\" (click)=\"goBack()\">\n                                    <i class=\"material-icons\">arrow_back</i>\n                                </div>\n                                <label class=\"check-icon\">\n                                    <input type=\"radio\" checked=\"checked\" id=\"lopa\" name=\"noname\">\n                                    <label for=\"lopa\">\n                                        <span class=\"outer-border\">\n                                            <i class=\"material-icons\" *ngIf=\"calcType ==='Numerical'\">dialpad</i>\n                                            <i class=\"material-icons\" *ngIf=\"calcType ==='Recommendation'\">insert_photo</i>\n                                        </span>\n                                    </label>\n                                </label>\n                                <div class=\"col-md-12 col-sm-12 col-xs-12 np calc-quiz-margin text-center\">\n                                    <div>\n                                        <h3 *ngIf=\"calcType ==='Recommendation'\">Quiz Title</h3>\n                                        <h3 *ngIf=\"calcType ==='Numerical'\">Calculator Title</h3>\n                                        <input type=\"text\" placeholder=\"{{calcType=='Recommendation'?'Which insurance plan is right for you?':'Estimate the Cost of Building a Website'}}\"  (blur)=\"reset = true;\" formControlName=\"calcName\" name=\"calcName\" class=\"calcName-input\" >\n                                        <div *ngIf=\"(calcNameform.controls.calcName.touched && !calcNameform.controls.calcName.valid) && reset\" class=\"alert alert-danger\">\n                                            <p >\n                                                <span  class=\"mat-icon\">\n                                                    <i class=\"material-icons\">report_problem</i>\n                                                </span>\n                                                <span *ngIf=\"calcType ==='Numerical'\">Calculator name is required.</span>\n                                                <span *ngIf=\"calcType ==='Recommendation'\">Quiz title is required.</span>\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                             <button  class=\"btn btn-red btn-hover\">\n                                <span *ngIf=\"calcType ==='Numerical'\">Select Template</span>\n                                <span *ngIf=\"calcType ==='Recommendation'\">Get Started</span>\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div> </div>\n<!--- cal quiz modal -->\n\n<div class=\"float-changes-updated hide\">\n  <div class=\"col-md-12 np\">\n    <span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\n    <span id=\"floatMessage\">{{ Message }} </span>\n  </div>\n</div>\n"

/***/ },

/***/ 789:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_membership_service__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analytics_services_calculator_analytics_service__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_dashboard_service__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__templates_controls_controls_module__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolbar_toolbar_module__ = __webpack_require__(404);
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
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forChild(DASHBOARD_ROUTES), __WEBPACK_IMPORTED_MODULE_8__templates_controls_controls_module__["a" /* ControlsModule */], __WEBPACK_IMPORTED_MODULE_9__toolbar_toolbar_module__["a" /* ToolbarModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__["a" /* BuilderService */], __WEBPACK_IMPORTED_MODULE_4__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */], __WEBPACK_IMPORTED_MODULE_3__shared_services_membership_service__["a" /* MembershipService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());


/***/ },

/***/ 794:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_service__ = __webpack_require__(798);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return JSONBuilder; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JSONBuilder = (function () {
    function JSONBuilder(_BuilderService) {
        this._BuilderService = _BuilderService;
        this.selectedModel = 'Page';
        this.templateQuestionare = [];
        this.templateQuestionareWithEmittedLeadFormQuestion = [];
    }
    JSONBuilder.prototype.setTemplate = function (template) {
        this.JSONTemplate = template;
        for (var _i = 0, _a = template.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (!this.selectedPage)
                this.selectedPage = page;
            if (page.type === 'Questionnaire') {
                // if (!this.selectedPage)
                //   this.selectedPage = page;
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    /*if (localStorage.getItem('hash-link') == 'Questionnaire') {
                      this.selectedSection = section;
                      this.selectedModel = 'Section';
                      localStorage.removeItem('hash-link');
                    }*/
                    for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                        var item = _e[_d];
                        this.templateQuestionare.push(item);
                        if (item.type != 'leadform_question')
                            this.templateQuestionareWithEmittedLeadFormQuestion.push(item);
                    }
                }
            } /* else if (page.type === localStorage.getItem('hash-link') && (page.visible == true)) {
              this.selectedPage = page;
              localStorage.removeItem('hash-link');
            }*/
        }
    };
    JSONBuilder.prototype.getQuestionsList = function () {
        var questions = [];
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === 'Questionnaire') {
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    if (section.type === 'LeadFormQ' && section.visible === false) {
                    }
                    else {
                        for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                            var item = _e[_d];
                            questions.push(item);
                        }
                    }
                }
            }
        }
        return questions;
    };
    JSONBuilder.prototype.reorder = function (order) {
        var sectionItems = this.selectedSection.items;
        for (var control in sectionItems) {
            if (sectionItems[control].type != 'leadform_question') {
                for (var index in order) {
                    if (sectionItems[control].order == order[index]) {
                        sectionItems[control].order = Number(index) + 1;
                        break;
                    }
                }
            }
        }
    };
    // get question No.
    JSONBuilder.prototype.getQuestionNo = function () {
        var items = [];
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === 'Questionnaire') {
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    if (section.type !== 'LeadFormQ') {
                        for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                            var item = _e[_d];
                            items.push(item);
                        }
                    }
                }
            }
        }
        for (var _f = 0, items_1 = items; _f < items_1.length; _f++) {
            var item1 = items_1[_f];
            if (item1 === this.selectedControl) {
                var index = jQuery.inArray(item1, items);
                return index + 1;
            }
        }
    };
    // hide other LeadForm
    JSONBuilder.prototype.hideOtherLeadForm = function (lead_on_page, index) {
        var sections = [];
        var leadsection;
        var items = [];
        var editorControl = {
            click_button: {},
            leadform: {}
        };
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === lead_on_page) {
                this.setSelectedPage(page);
                this.setSelectedModel('Page');
                if (page.type === 'Questionnaire') {
                    for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                        var section1 = _c[_b];
                        if (section1.type === 'LeadFormQ') {
                            section1.visible = true;
                            section1.items[0].visible = true;
                            sections.push(section1);
                            items.push(section1.items[0]);
                            editorControl['leadform_question'] = section1.items[0];
                            // this.setSelectedSection(section1);
                            leadsection = section1;
                            //before/after question
                            var index1 = jQuery.inArray(section1, page.sections);
                            if (index1 === 0) {
                                page.sections.push(section1);
                                page.sections.splice(index1, 1);
                            }
                        }
                    }
                }
                else {
                    for (var _d = 0, _e = page.sections; _d < _e.length; _d++) {
                        var section1 = _e[_d];
                        for (var _f = 0, _g = section1.items; _f < _g.length; _f++) {
                            var item = _g[_f];
                            if (item.type === 'leadform') {
                                item.visible = true;
                                items.push(item);
                                editorControl['leadform'] = item;
                                leadsection = section1;
                                this.setSelectedSection(section1);
                            }
                            if (item.type === 'click_button') {
                                item.visible = false;
                                items.push(item);
                                editorControl['click_button'] = item;
                            }
                        }
                    }
                }
            }
            else {
                if (page.type === 'Questionnaire') {
                    for (var _h = 0, _j = page.sections; _h < _j.length; _h++) {
                        var section1 = _j[_h];
                        if (section1.type === 'LeadFormQ') {
                            section1.visible = false;
                            section1.items[0].visible = false;
                            sections.push(section1);
                            items.push(section1.items[0]);
                        }
                    }
                }
                else {
                    for (var _k = 0, _l = page.sections; _k < _l.length; _k++) {
                        var section1 = _l[_k];
                        for (var _m = 0, _o = section1.items; _m < _o.length; _m++) {
                            var item = _o[_m];
                            if (item.type === 'leadform') {
                                item.visible = false;
                                items.push(item);
                            }
                            if (item.type === 'click_button') {
                                item.visible = true;
                                items.push(item);
                            }
                        }
                    }
                }
            }
        }
        var unsaveddata = {
            app: '',
            sections: sections,
            items: items,
            page: ''
        };
        this._BuilderService.updateChanges(unsaveddata).subscribe(function (response) {
            //if(response.success)
            //this._ItemTrackService.resetUnsavedData();
        }, function (error) {
            console.log(error);
        });
        var data = [];
        data.push(leadsection);
        data.push(editorControl);
        return data;
    };
    JSONBuilder.prototype.hideOtherLeadForm1 = function (lead_on_page, index) {
        var sections = [];
        var items = [];
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page !== this.selectedPage) {
                if (page.type === 'Questionnaire') {
                    for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                        var section1 = _c[_b];
                        if (section1.type === 'LeadFormQ') {
                            section1.visible = false;
                            section1.items[0].visible = false;
                            sections.push(section1);
                            items.push(section1.items[0]);
                        }
                    }
                }
                else {
                    for (var _d = 0, _e = page.sections; _d < _e.length; _d++) {
                        var section1 = _e[_d];
                        for (var _f = 0, _g = section1.items; _f < _g.length; _f++) {
                            var item = _g[_f];
                            if (item.type === 'leadform') {
                                item.visible = false;
                                items.push(item);
                            }
                            if (item.type === 'click_button') {
                                item.visible = true;
                                items.push(item);
                            }
                        }
                    }
                }
            }
        }
        var unsaveddata = {
            app: '',
            sections: sections,
            items: items,
            page: ''
        };
        this._BuilderService.updateChanges(unsaveddata).subscribe(function (response) {
            //if(response.success)
            //this._ItemTrackService.resetUnsavedData();
        }, function (error) {
            console.log(error);
        });
    };
    //get visible leadform
    JSONBuilder.prototype.getOtherVisibleLeadForm = function () {
        var pageType = '';
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                var section = _c[_b];
                for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                    var item = _e[_d];
                    if ((item.type === 'leadform' || (section.visible === true && item.type === 'leadform_question')) && item.visible === true) {
                        pageType = page.type;
                    }
                }
            }
        }
        return pageType;
    };
    JSONBuilder.prototype.setChanged = function (value) {
        this.changed = value;
    };
    JSONBuilder.prototype.getChanged = function () {
        return this.changed;
    };
    JSONBuilder.prototype.addNewChild = function (childTemplate) {
        this.selectedSection.items.push(childTemplate);
    };
    JSONBuilder.prototype.sort = function (order) {
        this.reorder(order);
        this.selectedSection.items.sort(function (a, b) { return ((a.order < b.order) ? -1 : ((a.order > b.order) ? 1 : 0)); });
    };
    JSONBuilder.prototype.getJSONBuilt = function () {
        return this.JSONTemplate;
    };
    JSONBuilder.prototype.setSelectedControl = function (control) {
        this.selectedControl = control;
    };
    JSONBuilder.prototype.setSelectedSection = function (section) {
        this.selectedSection = section;
    };
    JSONBuilder.prototype.setSelectedPage = function (page) {
        this.selectedPage = page;
        //window.location.hash = '#' + page.type;
    };
    JSONBuilder.prototype.getSelectedControl = function () {
        return this.selectedControl;
    };
    JSONBuilder.prototype.getSelectedSection = function () {
        return this.selectedSection;
    };
    JSONBuilder.prototype.getSelectedPage = function () {
        return this.selectedPage;
    };
    JSONBuilder.prototype.changeControl = function (newControl) {
        //index of old control in array
        var index = jQuery.inArray(this.selectedControl, this.selectedSection.items);
        //replace oldControl with newControl at index
        this.selectedSection.items[index].type = newControl;
        this.tvs.updateFormGroup(this.selectedSection);
    };
    JSONBuilder.prototype.deleteControl = function () {
        //index of old control in arra
        var index = jQuery.inArray(this.selectedControl, this.selectedSection.items);
        //replace oldControl with newControl at index
        this.selectedSection.items.splice(index, 1);
        //choose the next selected element from template section
        if (this.selectedSection.items.length > 0) {
            this.selectedControl = this.selectedSection.items[0];
        }
        else {
            // this.selectedControl = undefined;
            //index of old section
            var index1 = jQuery.inArray(this.selectedSection, this.selectedPage.sections);
            //replace oldsection with new section at index
            this.selectedPage.sections.splice(index1, 1);
            if (this.selectedPage.sections.length > 0) {
                //set control to first section
                this.selectedSection = this.selectedPage.sections[0];
            }
            else {
            }
        }
    };
    JSONBuilder.prototype.deleteSection = function () {
        //Remove all Items
        this.selectedSection.items.splice(0, this.selectedSection.items.length);
        //Remove Section
        var index = jQuery.inArray(this.selectedSection, this.selectedPage.sections);
        //replace oldsection with new section at index
        this.selectedPage.sections.splice(index, 1);
        if (this.selectedPage.sections.length > 0) {
            //set control to first section
            this.selectedSection = this.selectedPage.sections[0];
        }
    };
    JSONBuilder.prototype.multiSectionSort = function (sectionIndex, itemIndex, order) {
        var secindex = sectionIndex - 1;
        for (var section in this.selectedPage.sections) {
            if (this.selectedPage.sections[section].type == 'LeadFormQ' && !this.selectedPage.sections[section].visible && Number(section) == 0) {
                secindex = sectionIndex;
            }
        }
        var sectionItems = this.selectedPage.sections[secindex].items;
        sectionItems.splice(itemIndex, 0, this.selectedControl);
        // delete control from out section
        var index = jQuery.inArray(this.selectedControl, this.selectedSection.items);
        //replace oldControl with newControl at index
        this.selectedSection.items.splice(index, 1);
        // sort the result section
        jQuery.each(sectionItems, function (key, item) {
            if (item.type != 'leadform_question')
                item.order = key + 1;
        });
        //sort the parent array
        this.sort;
        this.tvs.updateFormGroup(this.selectedSection);
        this.tvs.updateFormGroup(this.selectedPage.sections[secindex]);
    };
    JSONBuilder.prototype.addControl = function (item, index) {
        //index of current item
        //let indexs = jQuery.inArray(this.selectedControl, this.selectedSection.items);
        //put it next to current item
        this.selectedSection.items.splice(index + 1, 0, item);
        //update form groups
        this.tvs.updateFormGroup(this.selectedSection);
        //sort the parent array
        this.sort;
        // sort the result section
        jQuery.each(this.selectedSection.items, function (key, item) {
            item.order = key + 1;
        });
        //return item;
    };
    JSONBuilder.prototype.addNewSection = function (section, item) {
        var section1 = new __WEBPACK_IMPORTED_MODULE_1__models_model__["a" /* Section */](section.title);
        section1._id = section._id;
        section1.addItems(item);
        this.JSONTemplate.pages[1].addSections(section1);
        //update form groups
        this.tvs.updateFormGroup(section1);
    };
    JSONBuilder.prototype.addNewQuestion = function (item, index) {
        this.JSONTemplate.pages[1].sections[index - 1].addItems(item);
        //update form groups
        this.tvs.updateFormGroup(this.JSONTemplate.pages[1].sections[index - 1]);
        //sort the parent array
        this.sort;
        // sort the result section
        jQuery.each(this.JSONTemplate.pages[1].sections[index - 1].items, function (key, item) {
            item.order = key + 1;
        });
    };
    JSONBuilder.prototype.setSelectedModel = function (type) {
        this.selectedModel = type;
    };
    JSONBuilder.prototype.getSelectedModel = function () {
        return this.selectedModel;
    };
    JSONBuilder.prototype.setSelectedFormula = function (formula) {
        if (!formula)
            formula = this.JSONTemplate.formula[0];
        this.setResultButtonCTA(formula);
        this.selectedFormula = formula;
    };
    JSONBuilder.prototype.setResultButtonCTA = function (formula) {
        if (this.JSONTemplate.templateType == 'Recommendation') {
            this.JSONTemplate.navigate_Url = formula.units.postValue;
            /** set text */
            for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
                var page = _a[_i];
                if (page.type === 'Result') {
                    for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                        var section = _c[_b];
                        for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                            var item = _e[_d];
                            if (item.type == 'leadform' || item.type == 'click_button')
                                item.props.title = formula.units.preValue;
                        }
                    }
                }
            }
        }
    };
    JSONBuilder.prototype.getSelectedFormula = function () {
        var self = this;
        var leftHeight = jQuery('.recom-section .left-sec').height();
        var rightHeight = jQuery('.recom-section .outer-main').height();
        if (leftHeight > rightHeight)
            jQuery('.outer-main').css('height', leftHeight);
        else
            jQuery('.left-outer').css('height', rightHeight);
        self.textareaSize();
        return this.selectedFormula;
    };
    JSONBuilder.prototype.textareaSize = function () {
        if (jQuery('.big-text').prop('scrollHeight') > 50)
            jQuery('.big-text').css('height', jQuery('.big-text').prop('scrollHeight'));
        else
            jQuery('.big-text').css('height', 50);
    };
    JSONBuilder.prototype.addResultSection = function (section) {
        var itemNew = new __WEBPACK_IMPORTED_MODULE_1__models_model__["b" /* Item */]('result_output', "\n\t\t \t<p>{R" + (this.getJSONBuilt().formula.length) + "}</p>\n            <p>By the age of 65</p>\n            <p>Things get serious now. Ensure you're living healthy.</p>", '', '', '');
        //itemNew.setFormulaIndex(formulaIndex.toString());
        itemNew.setVisibility(true);
        section.addItems(itemNew);
        return { item: section.items[section.items.length - 1], index: section.items.length - 1 };
    };
    JSONBuilder.prototype.deleteResultSection = function (section, formulaIndex) {
        section.items.forEach(function (item, index) {
            item.setFormulaIndex(index.toString());
        });
        section.items.splice(formulaIndex, 1);
    };
    JSONBuilder.prototype.getTemplateQuestionare = function () {
        return this.templateQuestionare;
    };
    JSONBuilder.prototype.updateTemplateQuestionare = function () {
        this.templateQuestionare = [];
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === 'Questionnaire') {
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                        var item = _e[_d];
                        this.templateQuestionare.push(item);
                    }
                }
            }
        }
    };
    JSONBuilder.prototype.getTemplateQuestionareWithEmittedLeadFormQuestion = function () {
        //First Updates the questionare list and then returns
        this.templateQuestionareWithEmittedLeadFormQuestion = [];
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === 'Questionnaire') {
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                        var item = _e[_d];
                        if (item.type != 'leadform_question')
                            this.templateQuestionareWithEmittedLeadFormQuestion.push(item);
                    }
                }
            }
        }
        return this.templateQuestionareWithEmittedLeadFormQuestion;
    };
    JSONBuilder.prototype.addFormula = function () {
        return this.JSONTemplate.addformula();
    };
    JSONBuilder.prototype.setValidatorService = function (instance) {
        this.tvs = instance;
    };
    JSONBuilder.prototype.updateFormGroup = function () {
        this.tvs.updateFormGroup(this.selectedSection);
    };
    /*Animation funtions*/
    JSONBuilder.prototype.animInit = function () {
        if (jQuery('.elem').parent().hasClass('green-bg')) {
            jQuery('.elem').parent().removeClass('green-bg');
        }
        jQuery('.elem').addClass('elem-rotate').html('<i class="material-icons">donut_large</i>').fadeIn('slow');
    };
    JSONBuilder.prototype.animLoad = function () {
        jQuery('.elem').removeClass('elem-rotate').html('<i class="material-icons green-color">check</i>').fadeIn('slow');
        jQuery('.elem').parent().addClass('green-bg');
        setTimeout(function () {
            jQuery('.elem').parent().removeClass('green-bg');
            jQuery('.elem').html('<i class="material-icons">donut_large</i>').fadeIn('slow');
        }, 700);
    };
    JSONBuilder.prototype.debounce = function (func, wait) {
        var timeout;
        return function () {
            var context = this;
            var later = function () {
                timeout = null;
                func.apply(context);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    JSONBuilder = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__builder_service__["a" /* BuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_service__["a" /* BuilderService */]) === 'function' && _a) || Object])
    ], JSONBuilder);
    return JSONBuilder;
    var _a;
}());


/***/ },

/***/ 795:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnalyticService; });
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



var AnalyticService = (function (_super) {
    __extends(AnalyticService, _super);
    function AnalyticService(_http) {
        _super.call(this);
        this._http = _http;
        this.visitorAnswers = [];
    }
    AnalyticService.prototype.reInitVisitorAnswers = function () {
        this.visitorAnswers = [];
    };
    AnalyticService.prototype.setVisitorAnswers = function (item) {
        this.visitorAnswers.push(item);
    };
    AnalyticService.prototype.getVisitorAnswers = function () {
        return this.visitorAnswers;
    };
    AnalyticService.prototype.setVisitorKey = function (key) {
        if (!this.visitorKey)
            ga('devteam.send', 'pageview', '/' + key);
        this.visitorKey = key;
    };
    AnalyticService.prototype.getVisitorKey = function () {
        return (this.visitorKey == undefined || this.visitorKey == '') ? '' : this.visitorKey;
    };
    AnalyticService.prototype.saveStats = function (appId, item) {
        return this._http.post(this._url + '/analytic/save_stats', {
            appId: appId,
            item: item,
            key: this.getVisitorKey(),
            unsavedArray: this.getVisitorAnswers()
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.saveLead = function (appId, lead) {
        return this._http.post(this._url + '/analytic/save_lead', {
            appId: appId,
            lead: lead,
            key: this.getVisitorKey()
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.saveResult = function (appId, formula) {
        return this._http.post(this._url + '/analytic/save_result', {
            appId: appId,
            formula: formula,
            key: this.getVisitorKey(),
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.saveOutCome = function (appId, formula) {
        return this._http.post(this._url + '/analytic/save_outcome', {
            appId: appId,
            formula: formula,
            key: this.getVisitorKey(),
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.saveSectionResult = function (sectionId) {
        return this._http.post(this._url + '/analytic/save_section_result', {
            sectionId: sectionId,
            key: this.getVisitorKey(),
            unsavedArray: this.getVisitorAnswers()
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.generateVisitorKey = function (appId, questions, utmObj) {
        return this._http.post(this._url + '/analytic/visitor_key', {
            appId: appId,
            key: this.getVisitorKey(),
            questions: questions,
            utm_param: utmObj
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AnalyticService);
    return AnalyticService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__["a" /* BaseService */]));


/***/ },

/***/ 796:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_models_model__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__analytic_service__ = __webpack_require__(795);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RecommendationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecommendationService = (function () {
    function RecommendationService(_jsonBuilderHelper, _analyticService) {
        this._jsonBuilderHelper = _jsonBuilderHelper;
        this._analyticService = _analyticService;
        this.recommendedResult = { resultItem: __WEBPACK_IMPORTED_MODULE_2__builder_models_model__["b" /* Item */], count: 0, resultObj: {} };
        this.formulaResults = {};
        //console.log('max: ' + max);
        // console.log('key/s with max count: ' + JSON.stringify(result));
        // console.log(reccomendedObj);
    }
    RecommendationService.prototype.getRecomendedResult = function () {
        var recommendedObj = {};
        var max = 0;
        var result = [];
        var self = this;
        this._jsonBuilderHelper.getJSONBuilt().formula.forEach(function (formula) {
            if (!self.formulaResults.hasOwnProperty(formula.value)) {
                self.formulaResults[formula.value] = formula;
            }
        });
        this._jsonBuilderHelper.getTemplateQuestionare().forEach(function (item) {
            if (item.type == 'selectbox' || item.type == 'radio_button' || item.type == 'checkbox') {
                item.options.forEach(function (option) {
                    var type = option.value;
                    if (type && type != '' && isNaN(type)) {
                        var typeArray = type.split(',');
                        typeArray.forEach(function (obj) {
                            type = obj.trim();
                            if (option.selected) {
                                recommendedObj[type] = (recommendedObj[type] || 0) + (1);
                                if (recommendedObj[type] > max) {
                                    max = recommendedObj[type];
                                    result = [type];
                                    return;
                                }
                                if (recommendedObj[type] == max) {
                                    var arrayIndex = result.indexOf(type);
                                    if (arrayIndex != (-1)) {
                                        result.splice(arrayIndex, 1);
                                    }
                                    result.push(type);
                                }
                            }
                            else {
                                recommendedObj[type] = (recommendedObj[type] || 0);
                            }
                        });
                    }
                });
            }
        });
        this.recommendedResult.resultItem = this.formulaResults[result[result.length - 1]];
        this.recommendedResult.count = max;
        this.recommendedResult.resultObj = result;
        console.log('max: ' + max);
        console.log('key/s with max count: ' + JSON.stringify(result));
        console.log('result', this.recommendedResult.resultItem);
        console.log('this.formulaResults', this.formulaResults);
        /* fro live calcs */
        if (result.length > 0) {
            if (this._jsonBuilderHelper.getSelectedFormula() != this.recommendedResult.resultItem) {
                this._jsonBuilderHelper.setSelectedFormula(this.recommendedResult.resultItem);
                /** save outcome */
                if (this._jsonBuilderHelper.getJSONBuilt().status == 'LIVE' && this._analyticService.getVisitorKey()) {
                    if (this.sub)
                        this.sub.unsubscribe();
                    this.sub = this._analyticService.saveOutCome(this._jsonBuilderHelper.getJSONBuilt()._id, this._jsonBuilderHelper.getSelectedFormula())
                        .subscribe(function (response) {
                        //
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        }
        else {
            this._jsonBuilderHelper.setSelectedFormula(this._jsonBuilderHelper.getJSONBuilt().formula[0]);
            /** save outcome */
            if (this._jsonBuilderHelper.getJSONBuilt().status == 'LIVE' && this._analyticService.getVisitorKey()) {
                if (this.sub)
                    this.sub.unsubscribe();
                this.sub = this._analyticService.saveOutCome(this._jsonBuilderHelper.getJSONBuilt()._id, this._jsonBuilderHelper.getSelectedFormula())
                    .subscribe(function (response) {
                    //
                }, function (error) {
                    console.log(error);
                });
            }
        }
        console.log('this.formulaResults', recommendedObj);
        return this.recommendedResult;
    };
    RecommendationService.prototype.getAvailableOptions = function () {
        var optionArray = [];
        this._jsonBuilderHelper.getJSONBuilt().formula.map(function (formula) { optionArray.push({ name: formula.name, value: formula.value }); });
        return optionArray;
    };
    RecommendationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object])
    ], RecommendationService);
    return RecommendationService;
    var _a, _b;
}());


/***/ },

/***/ 797:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_model__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_model__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_model__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calc_email_model__ = __webpack_require__(811);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__app_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__page_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__section_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__item_model__["a"]; });
/* unused harmony reexport CalcEmail */







/***/ },

/***/ 798:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BuilderService; });
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



var BuilderService = (function (_super) {
    __extends(BuilderService, _super);
    function BuilderService(_http) {
        _super.call(this);
        this._http = _http;
    }
    BuilderService.prototype.createApp = function (app) {
        return this._http.post(this._url + '/builder/create_app', app, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.publishApp = function (app) {
        return this._http.post(this._url + '/builder/publish_app', app, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.getProject = function (data) {
        return this._http.post(this._url + '/builder/get_project', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.changeTemplate = function (projectId, templateName) {
        return this._http.post(this._url + '/builder/change_template', { projectId: projectId, templateName: templateName }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.remove = function (itemId, sectionId) {
        return this._http.post(this._url + '/builder/remove', { itemId: itemId, sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.deleteItem = function (itemId, sectionId) {
        return this._http.post(this._url + '/builder/delete_item', { itemId: itemId, sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.checkUniqueUrl = function (id, url) {
        return this._http.post(this._url + '/builder/check_unique_url', {
            id: id,
            url: this.sanitizeUrl(url)
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.updateName = function (id, name) {
        return this._http.post(this._url + '/builder/update_name', {
            id: id,
            name: name,
            url: this.sanitizeUrl(name)
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.addItem = function (sectionId, item, index) {
        return this._http.post(this._url + '/builder/add_item', { item: item, sectionId: sectionId, index: index }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.addSection = function (section, item, pageId) {
        return this._http.post(this._url + '/builder/add_section', { item: item, section: section, pageId: pageId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.removeSection = function (sectionId) {
        return this._http.post(this._url + '/builder/remove_section', { sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.updateInterSectionOrder = function (items, sectionId) {
        return this._http.post(this._url + '/builder/update_intersection', { items: items, sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.updateIntraSectionOrder = function (items, sectionId) {
        return this._http.post(this._url + '/builder/update_intrasection', { items: items, sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    /** update unsaved changes **/
    BuilderService.prototype.updateChanges = function (unSavedData) {
        return this._http.post(this._url + '/builder/update_changes', unSavedData, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    //utility functions
    BuilderService.prototype.sanitizeUrl = function (url) {
        url = url.toString().trim().replace(/[^a-zA-Z0-9_]/g, ' ').replace(/\s\s+/g, ' ').toString().split(' ').join('-');
        if (url.charAt(0) === '-')
            url = url.substring(1);
        if (url.charAt(url.length - 1) === '-')
            url = url.substring(0, url.length - 1);
        return url;
    };
    BuilderService.prototype.debounce = function (func, wait) {
        var timeout;
        return function () {
            var context = this;
            var later = function () {
                timeout = null;
                func.apply(context);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    BuilderService.prototype.saveAppSetting = function (app) {
        return this._http.post(this._url + '/builder/save_app_setting', app, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.saveCalcEmail = function (data) {
        return this._http.post(this._url + '/builder/save_calc_email', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.calcEmail = function (data) {
        return this._http.post(this._url + '/builder/calc_email', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], BuilderService);
    return BuilderService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__["a" /* BaseService */]));


/***/ },

/***/ 799:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CustomValidator; });
//TODO  calcNameTaken function deleted for purpose
var CustomValidator = (function () {
    function CustomValidator() {
    }
    CustomValidator.emailFormat = function (Control) {
        var EMAIL_REGEX = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        if (!EMAIL_REGEX.test(Control.value)) {
            return { 'EmailError': true };
        }
        return null;
    };
    //start phone validation
    CustomValidator.phoneNumer = function (Control) {
        // var PhoneFormat =  /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var PhoneFormat = /^(?:\(?\+?([0-9]{1,3})\)?[-. ]?)?\(?([0-9]{1,3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2,6})$/;
        if (!PhoneFormat.test(Control.value)) {
            return { 'PhoneNumberError': true };
        }
        return null;
    };
    CustomValidator.checkboxRequired = function (question) {
        return function (group) {
            var valid = false;
            for (var name in group.controls) {
                var val = group.controls[name].value;
                if (val) {
                    valid = true;
                    break;
                }
            }
            for (var _i = 0, _a = question.options; _i < _a.length; _i++) {
                var option = _a[_i];
                if (option.selected) {
                    valid = true;
                    break;
                }
            }
            if (valid) {
                return null;
            }
            return { checkboxRequired: true };
        };
    };
    CustomValidator.minimum = function (min) {
        return function (Control) {
            if (Number(Control.value) < Number(min)) {
                return { 'minval': true };
            }
            return null;
        };
    };
    CustomValidator.maximum = function (max) {
        return function (Control) {
            if (Number(Control.value) > Number(max)) {
                return { 'maxval': true };
            }
            return null;
        };
    };
    return CustomValidator;
}());


/***/ },

/***/ 800:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_services_analytic_service__ = __webpack_require__(795);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FormulaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormulaService = (function () {
    function FormulaService(jsonBuilderHelper, _analysisService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._analysisService = _analysisService;
    }
    FormulaService.prototype.addCommas = function (nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    };
    FormulaService.prototype.textParser = function (normalText) {
        var finder = normalText.match(/\{(.*?)\}/g);
        var finalText = normalText;
        for (var a in finder) {
            if (finalText != undefined) {
                var val = finalText.indexOf(finder[a]);
                if (finder[a][1] == 'Q') {
                    var quesNumber = finder[a].substring(2, finder[a].length - 1);
                    if (!isNaN(quesNumber)) {
                        var currentQues = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[quesNumber - 1];
                        var questionLabel = undefined;
                        if (currentQues != undefined) {
                            questionLabel = "Question " + quesNumber;
                            if (currentQues.props.currentLabel != '' && currentQues.props.currentLabel != undefined)
                                questionLabel = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[quesNumber - 1].props.currentLabel;
                        }
                        if (questionLabel != undefined)
                            finalText = finalText.substring(0, val) + questionLabel + finalText.substring(val + finder[a].length);
                        else
                            finalText = undefined;
                    }
                }
                else if (finder[a][1] == 'R') {
                    var resultNumber = finder[a].substring(2, finder[a].length - 1);
                    if (!isNaN(resultNumber)) {
                        var finalResultValue = this.formulaFunction(resultNumber - 1);
                        if (finalResultValue != undefined)
                            finalText = finalText.substring(0, val) + finalResultValue + finalText.substring(val + finder[a].length);
                        else
                            finalText = undefined;
                    }
                }
            }
        }
        var leadformItem = this.getFirstLeadForm();
        if (finalText && leadformItem) {
            finalText = finalText.replace(/({name}|{email}|{tel}|{others})/g, function (match) {
                var fieldMatched = match.split(/[{}]/)[1];
                for (var field in leadformItem.fields) {
                    var type = (leadformItem.fields[field].type == "lastName") ?
                        "others" : (leadformItem.fields[field].type == 'firstName') ? "name" : leadformItem.fields[field].type;
                    if (type == fieldMatched)
                        return leadformItem.fields[field].value || match;
                }
            });
        }
        if (finalText == undefined)
            return normalText;
        return finalText;
    };
    //	wysiwig List --Start
    FormulaService.prototype.getFirstLeadForm = function () {
        var leadformItem = undefined;
        for (var _i = 0, _a = this.jsonBuilderHelper.getJSONBuilt().pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === 'Landing' || page.type === 'Result') {
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                        var item = _e[_d];
                        if (item.type == 'leadform' && item.visible == true) {
                            leadformItem = item;
                        }
                    }
                }
            }
        }
        if (!leadformItem) {
            this.jsonBuilderHelper.updateTemplateQuestionare();
            for (var i = 0; i < this.jsonBuilderHelper.getTemplateQuestionare().length; i++) {
                if (this.jsonBuilderHelper.getTemplateQuestionare()[i].type == 'leadform_question' &&
                    this.jsonBuilderHelper.getTemplateQuestionare()[i].visible == true) {
                    leadformItem = this.jsonBuilderHelper.getTemplateQuestionare()[i];
                    break;
                }
            }
        }
        return leadformItem;
    };
    FormulaService.prototype.allValidVariables = function () {
        var allVariables = [];
        var i;
        var leadformItem = this.getFirstLeadForm();
        if (leadformItem) {
            allVariables.push('');
            for (var field in leadformItem.fields) {
                var type = (leadformItem.fields[field].type == "lastName") ?
                    "others" : (leadformItem.fields[field].type == 'firstName') ? "name" : leadformItem.fields[field].type;
                allVariables.push('{' + type + '}');
            }
        }
        allVariables.push(' ');
        for (i = 0; i < this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion().length; i++)
            allVariables.push('{Q' + (i + 1) + '}');
        allVariables.push('   ');
        for (i = 0; i < this.jsonBuilderHelper.getJSONBuilt().formula.length; i++)
            allVariables.push('{R' + (i + 1) + '}');
        return allVariables;
    };
    FormulaService.prototype.allValidVariablesWysiywigList = function () {
        var allVariables = [];
        var i;
        var leadformItem = this.getFirstLeadForm();
        if (leadformItem) {
            allVariables.push('Lead Details:');
            for (var field in leadformItem.fields) {
                var title = leadformItem.fields[field].placeholder;
                if (title.length > 35)
                    title = title.substr(0, 35) + "...";
                allVariables.push(title + ' : ' + leadformItem.fields[field].value);
            }
        }
        allVariables.push('Answer to:');
        for (i = 0; i < this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion().length; i++) {
            var title = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[i].props.title;
            if (title.length > 35)
                title = title.substr(0, 35) + "...";
            allVariables.push('  Q' + (i + 1) + ': ' + title);
        }
        allVariables.push('Result:');
        for (i = 0; i < this.jsonBuilderHelper.getJSONBuilt().formula.length; i++)
            allVariables.push('  Result ' + (i + 1));
        return allVariables;
    };
    //	wysiwig List --End
    // Checking Questionare Validity After Changes To builder
    FormulaService.prototype.correctAllInvalidQuestions = function (rawFormula, formulaIndex) {
        var currentQuesNumber;
        for (var i = 0; i < rawFormula.length; i++) {
            if (rawFormula[i] == 'Q') {
                i++;
                currentQuesNumber = '';
                while (!isNaN(parseInt(rawFormula[i])))
                    currentQuesNumber += rawFormula[i++];
                var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                //for marking as mandatory
                if (currentQuesObject && (currentQuesObject.type == 'switchbox' || currentQuesObject.type == 'radio_button' ||
                    currentQuesObject.type == 'selectbox' || currentQuesObject.type == 'checkbox' || (currentQuesObject.type == 'textfield' && currentQuesObject.config.type == 'number'))) {
                    if (!currentQuesObject.config.validations.required.status)
                        currentQuesObject.config.validations.required.status = true;
                    var isAnyDefaultSelected = false;
                    for (var option in currentQuesObject.options) {
                        if (currentQuesObject.options[option].defualtselected == true)
                            isAnyDefaultSelected = true;
                    }
                    if (!isAnyDefaultSelected) {
                        currentQuesObject.options[0].defualtselected = true;
                        currentQuesObject.options[0].selected = true;
                    }
                }
            }
        }
        // return errorQuestionString;
    };
    FormulaService.prototype.updateFormulaValidity = function (rawFormula, formulaIndex) {
        var currentQuesNumber;
        var isValid = true;
        for (var i = 0; i < rawFormula.length; i++) {
            if (rawFormula[i] == 'Q') {
                i++;
                currentQuesNumber = '';
                while (!isNaN(parseInt(rawFormula[i])))
                    currentQuesNumber += rawFormula[i++];
                var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                if (currentQuesObject) {
                    if ((currentQuesObject.type == 'switchbox' || currentQuesObject.type == 'radio_button' ||
                        currentQuesObject.type == 'selectbox' || currentQuesObject.type == 'checkbox' || (currentQuesObject.type == 'textfield' && currentQuesObject.config.type == 'number'))) {
                        var isAnyDefaultSelected = false;
                        for (var option in currentQuesObject.options) {
                            if (currentQuesObject.options[option].defualtselected == true)
                                isAnyDefaultSelected = true;
                        }
                        if (currentQuesObject.config.validations.required.status || isAnyDefaultSelected) { }
                        else
                            isValid = false;
                    }
                }
                else
                    isValid = false;
            }
        }
        this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].isValid = isValid;
    };
    FormulaService.prototype.getAllInvalidFormulas = function () {
        var areAllFormulasValid = true;
        var allInvalidFormulas = '';
        for (var formula in this.jsonBuilderHelper.getJSONBuilt().formula) {
            this.updateFormulaValidity(this.jsonBuilderHelper.getJSONBuilt().formula[formula].result, formula);
            if (!this.jsonBuilderHelper.getJSONBuilt().formula[formula].isValid) {
                areAllFormulasValid = false;
                allInvalidFormulas += 'Result ' + (parseInt(formula) + 1) + ',';
            }
        }
        if (areAllFormulasValid)
            return undefined;
        else {
            allInvalidFormulas = allInvalidFormulas.slice(0, -1);
            return allInvalidFormulas;
        }
    };
    FormulaService.prototype.checkIfFormulaWouldGiveSyntaxError = function () {
        var allFormulas = this.jsonBuilderHelper.getJSONBuilt().formula;
        var errorResultList = '';
        for (var formula in allFormulas) {
            var rawFormula = allFormulas[formula].result;
            for (var i = 0; i < rawFormula.length; i++) {
                if (rawFormula[i] == 'Q') {
                    i++;
                    var currentQuesNumber = '';
                    while (!isNaN(parseInt(rawFormula[i])))
                        currentQuesNumber += rawFormula[i++];
                    var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                    if (!currentQuesObject || ((currentQuesObject.type == 'textfield' && (currentQuesObject.config.type == 'text' || currentQuesObject.config.type == 'email'))
                        || currentQuesObject.type == 'text-area')) {
                        errorResultList += 'Result ' + (parseInt(formula) + 1) + ',';
                        break;
                    }
                }
            }
        }
        errorResultList = errorResultList.slice(0, -1);
        return errorResultList;
    };
    FormulaService.prototype.checkIfResultsAreRight = function () {
        var allFormulas = this.jsonBuilderHelper.getJSONBuilt().formula;
        var errorResultList = '';
        for (var formula in allFormulas) {
            var rawFormula = allFormulas[formula].result;
            for (var i = 0; i < rawFormula.length; i++) {
                if (rawFormula[i] == 'Q') {
                    i++;
                    var currentQuesNumber = '';
                    while (!isNaN(parseInt(rawFormula[i])))
                        currentQuesNumber += rawFormula[i++];
                    var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                    if ((currentQuesObject.type == 'textfield' && (currentQuesObject.config.type == 'text' || currentQuesObject.config.type == 'email'))
                        || currentQuesObject.type == 'text-area') {
                        errorResultList += 'Result ' + (parseInt(formula) + 1) + ',';
                        break;
                    }
                }
            }
        }
        errorResultList = errorResultList.slice(0, -1);
        return errorResultList;
    };
    FormulaService.prototype.formulaFunction = function (formulaIndex) {
        var finalAnswer;
        if (!this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex]) {
            return undefined;
        }
        var formula = this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].result;
        var value = this.createFinalQuestionString(formula.replace(/\s/g, '')
            .replace(/,/g, '').replace(/x/g, '*'));
        try {
            finalAnswer = math.eval(value);
        }
        catch (e) {
            finalAnswer = 0;
        }
        if (finalAnswer == undefined)
            finalAnswer = '{R' + (parseInt(formulaIndex) + 1) + '}';
        var quesNowObject = this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex];
        var lower, upper;
        if (quesNowObject.range.status) {
            var lowerVal = parseFloat(quesNowObject.range.lower.value);
            var upperVal = parseFloat(quesNowObject.range.higher.value);
            if (isNaN(lowerVal))
                lowerVal = 0;
            if (isNaN(upperVal))
                upperVal = 0;
            if (isNaN(parseFloat(finalAnswer))) {
                finalAnswer = 0;
            }
            else {
                if (quesNowObject.range.higher.type == 'Number' && quesNowObject.range.lower.type == 'Number') {
                    lower = (parseFloat(finalAnswer) - lowerVal);
                    upper = (parseFloat(finalAnswer) + upperVal);
                    lower = this.addCommas(lower.toFixed(Number(quesNowObject.decimal)));
                    upper = this.addCommas(upper.toFixed(Number(quesNowObject.decimal)));
                    finalAnswer = lower + ' to ' + upper;
                }
                else if (quesNowObject.range.higher.type == 'Percentage' && quesNowObject.range.lower.type == 'Percentage') {
                    lower = (parseFloat(finalAnswer) - (lowerVal / 100) * (parseFloat(finalAnswer)));
                    upper = (parseFloat(finalAnswer) + (upperVal / 100) * (parseFloat(finalAnswer)));
                    if (isNaN(upperVal))
                        upper = parseFloat(finalAnswer);
                    if (isNaN(lowerVal))
                        lower = parseFloat(finalAnswer);
                    lower = this.addCommas(lower.toFixed(Number(quesNowObject.decimal)));
                    upper = this.addCommas(upper.toFixed(Number(quesNowObject.decimal)));
                    finalAnswer = lower + ' to ' + upper;
                }
            }
        }
        else {
            if (isNaN(parseFloat(finalAnswer))) {
                if (finalAnswer == undefined)
                    finalAnswer = 0;
            }
            else {
                finalAnswer = Number(finalAnswer);
                finalAnswer = this.addCommas(finalAnswer.toFixed(Number(quesNowObject.decimal)));
                if (quesNowObject.units.postfix) {
                    finalAnswer = finalAnswer + quesNowObject.units.postValue;
                }
                if (quesNowObject.units.prefix) {
                    finalAnswer = quesNowObject.units.preValue + finalAnswer;
                }
            }
        }
        if (this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].value != finalAnswer) {
            this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].value = finalAnswer;
            if (this._analysisService.getVisitorKey() && this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
                if (this.sub)
                    this.sub.unsubscribe();
                this.sub = this._analysisService.saveResult(this.jsonBuilderHelper.getJSONBuilt()._id, this.jsonBuilderHelper.getJSONBuilt().formula)
                    .subscribe(function (response) {
                }, function (error) {
                    console.log(error);
                });
            }
        }
        this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].value = finalAnswer;
        if (isNaN(parseFloat(lower)) && isNaN(parseFloat(upper))) { }
        else {
            if (quesNowObject.units.postfix) {
                lower = lower + quesNowObject.units.postValue;
                upper = upper + quesNowObject.units.postValue;
            }
            if (quesNowObject.units.prefix) {
                lower = quesNowObject.units.preValue + lower;
                upper = quesNowObject.units.preValue + upper;
            }
            finalAnswer = lower + ' to ' + upper;
        }
        return finalAnswer;
    };
    FormulaService.prototype.createFinalQuestionString = function (genericQuestion) {
        var currentQuesNumber, j;
        for (var i = 0; i < genericQuestion.length; i++) {
            if (genericQuestion[i] == 'Q') {
                j = ++i;
                currentQuesNumber = '';
                while (!isNaN(parseInt(genericQuestion[i])))
                    currentQuesNumber += genericQuestion[i++];
                genericQuestion = genericQuestion.substring(0, j - 1) +
                    this.getValueOfQuestionNumber(currentQuesNumber) +
                    genericQuestion.substring(i);
                i = j - 1 + this.getValueOfQuestionNumber(currentQuesNumber).toString().length;
            }
        }
        return genericQuestion;
    };
    FormulaService.prototype.getValueOfQuestionNumber = function (quesNumber) {
        this.jsonBuilderHelper.updateTemplateQuestionare();
        var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[quesNumber - 1];
        if (currentQuesObject) {
            var currentValue = parseFloat(currentQuesObject.props.currentValue);
            if (isNaN(currentValue) || currentValue == null || currentValue == undefined)
                currentValue = 0;
            return currentValue;
        }
        else {
            return 0;
        }
    };
    FormulaService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__templates_services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__templates_services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object])
    ], FormulaService);
    return FormulaService;
    var _a, _b;
}());


/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UrlShortner; });
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



var UrlShortner = (function (_super) {
    __extends(UrlShortner, _super);
    function UrlShortner(_http) {
        _super.call(this);
        this._http = _http;
        this.shortUrl = '';
    }
    UrlShortner.prototype.googleShortner = function (longUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = { longUrl: longUrl };
        return this._http.post('https://www.googleapis.com/urlshortener/v1/url?shortUrl=http://goo.gl/fbsS&key=AIzaSyAyEiPl1ZWGqIjhCb4hPz34HgwLS_G9zZk', body, headers)
            .map(function (res) { return res.json(); });
    };
    UrlShortner = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], UrlShortner);
    return UrlShortner;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__["a" /* BaseService */]));


/***/ },

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__itemNames_store__ = __webpack_require__(812);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Item; });

var Item = (function () {
    function Item(type, title, helpText, placeholder, defaultClass, minVal, maxVal) {
        this._id = '';
        this.order = 0;
        this.type = '';
        this.name = '';
        this.visible = true;
        this.isIconPresent = false;
        this.defaultClass = '';
        this.formulaIndex = '';
        this.imageVisible = false;
        this.optionImageVisible = false;
        this.imageURL = 'https://cdn.filestackcontent.com/ueNrjSMReChnz2Ohiqwg';
        this.props = {
            title: '',
            postTitle: '',
            currentValue: '',
            currentLabel: '',
            defaultValue: '',
            helpText: '',
            minVal: 10,
            maxVal: 500,
            steps: 1,
            scale: false,
            unit: '',
            postfix: false
        };
        this.config = {
            type: 'text',
            showHelp: false,
            showControl: '',
            attr: {
                class: '',
                style: '',
                width: '',
                height: '',
            },
            validations: {
                required: {
                    status: false,
                    message: 'This question is mandatory'
                },
                minLength: {
                    status: false
                },
                maxLength: {
                    status: false
                }
            },
            maxSelections: '',
            direction: '',
            placeholder: 'Default Placeholder'
        };
        this.options = [
            {
                type: '',
                label: 'Option',
                value: 0,
                selected: false,
                defualtselected: false,
                icon: '',
                previousIcons: [],
                imageURL: 'https://cdn.filestackcontent.com/ueNrjSMReChnz2Ohiqwg',
                attr: {
                    class: '',
                    style: '',
                }
            }
        ];
        this.fields = [
            {
                type: 'firstName',
                name: 'Name',
                placeholder: 'Name',
                value: '',
                validations: {
                    required: {
                        status: true,
                        message: 'Field is Required'
                    },
                    minLength: {
                        status: false
                    },
                    maxLength: {
                        status: false
                    }
                },
                icon: '',
                attr: {
                    class: '',
                    style: '',
                }
            },
            {
                type: 'email',
                name: 'Email',
                placeholder: 'Email Address',
                value: '',
                validations: {
                    required: {
                        status: true,
                        message: 'Field is Required'
                    },
                    minLength: {
                        status: false
                    },
                    maxLength: {
                        status: false
                    }
                },
                icon: '',
                attr: {
                    class: '',
                    style: '',
                }
            }
        ];
        //generate unique id on creation
        this._id = 'q_' + Math.floor(Math.random() * (100000 - 2 + 1)) + 2;
        //do rest stuff
        this.type = type;
        this.props.title = title || '';
        this.props.helpText = helpText || '';
        this.config.placeholder = placeholder || this.config.placeholder;
        this.defaultClass = defaultClass || this.defaultClass;
        this.order = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
        this.props.minVal = minVal || 10;
        this.props.maxVal = maxVal || 500;
        //auto assign names on item creation based oon type
        this.name = __WEBPACK_IMPORTED_MODULE_0__itemNames_store__["a" /* ITEMS */][type];
    }
    Item.prototype.setItemType = function (type) {
        this.type = type;
    };
    Item.prototype.setFormulaIndex = function (index) {
        this.formulaIndex = index;
    };
    Item.prototype.setVisibility = function (visible) {
        this.visible = visible;
    };
    Item.prototype.setTitle = function (title) {
        this.props.title = title;
    };
    Item.prototype.setPostTitle = function (postTitle) {
        this.props.postTitle = postTitle;
    };
    Item.prototype.setHelptext = function (helpText) {
        this.props.helpText = helpText;
    };
    Item.prototype.setPlaceHolder = function (placeholder) {
        this.config.placeholder = placeholder;
    };
    Item.prototype.setOptions = function () {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i - 0] = arguments[_i];
        }
        for (var option in options)
            this.options.push(options[option]);
    };
    Item.prototype.getField = function () {
        return JSON.parse(JSON.stringify(this.fields[0]));
    };
    Item.prototype.getOption = function () {
        return this.options[0];
    };
    Item.prototype.addFieldToCheckbox = function (addOptions) {
        var defaultOption = this.options[0];
        this.options = [];
        for (var option in addOptions) {
            defaultOption.label = addOptions[option].label;
            defaultOption.icon = addOptions[option].icon;
            defaultOption.value = addOptions[option]['value'] ? addOptions[option].value : Number(option) + 1;
            this.options.push(Object.assign({}, defaultOption));
        }
    };
    Item.prototype.addLinksToFooter = function (addLinks) {
        var defaultOption = this.options[0];
        // let defaultOption = this.options[0];
        this.options = [];
        for (var option in addLinks) {
            defaultOption.label = addLinks[option].label;
            defaultOption.value = addLinks[option].value;
            this.options.push(Object.assign({}, defaultOption));
        }
    };
    Item.prototype.deserialize = function (input) {
        var self = this;
        for (var prop in input) {
            if (typeof input[prop] === 'object') {
                if (prop === 'options' && input[prop].length < 1) {
                    self[prop].splice(0, 1);
                }
                if (prop === 'fields' && input[prop].length < 2) {
                    self[prop].splice(0, 2);
                }
                jQuery.extend(true, self[prop], input[prop]);
            }
            else {
                self[prop] = input[prop];
            }
        }
        return self;
    };
    return Item;
}());


/***/ },

/***/ 807:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section_model__ = __webpack_require__(808);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Page; });

var Page = (function () {
    function Page(type, bgImage, bgColor) {
        this._id = '';
        this.description = '';
        this.defaultClass = '';
        this.bgImage = '';
        this.bgImageVisible = true;
        this.bgColor = '';
        this.type = '';
        this.visible = true;
        this.sections = [];
        this.type = type;
        this.bgImage = bgImage;
        this.bgColor = bgColor;
    }
    //add sections to page
    Page.prototype.addSections = function () {
        var sections = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sections[_i - 0] = arguments[_i];
        }
        for (var section in sections) {
            sections[section].order = Number(section) + 1;
            if (this.sections.length != 0 && this.sections[this.sections.length - 1].type === 'LeadFormQ') {
                this.sections.splice(this.sections.length - 1, 0, sections[section]);
            }
            else {
                this.sections.push(sections[section]);
            }
        }
    };
    Page.prototype.deserialize = function (input) {
        var self = this;
        for (var prop in input) {
            if (typeof input[prop] === 'object') {
                for (var section in input[prop]) {
                    self.sections.push(new __WEBPACK_IMPORTED_MODULE_0__section_model__["a" /* Section */]().deserialize(input[prop][section]));
                }
            }
            else
                self[prop] = input[prop];
        }
        return self;
    };
    return Page;
}());


/***/ },

/***/ 808:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_model__ = __webpack_require__(806);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Section; });

var Section = (function () {
    function Section(title, defaultClass, description) {
        this._id = '';
        this.title = 'Title';
        this.description = '';
        this.showDesc = true;
        this.buttonTitle = 'Next';
        this.previousIcons = [];
        this.icon = '';
        this.showIcon = true;
        this.defaultClass = '';
        this.fullWidth = false;
        this.order = '';
        this.visible = true;
        this.type = '';
        this.items = [];
        //generate unique id on creation
        this._id = 's_' + Math.floor(Math.random() * (100000 - 2 + 1)) + 2;
        //do rest of the stuff
        this.type = title;
        if (title === 'LeadForm' || title === 'LeadFormQ') {
            this.title = 'How can we get in touch?';
        }
        else {
            this.title = title;
        }
        this.defaultClass = defaultClass;
        this.description = description;
    }
    //add items to page
    Section.prototype.addItems = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i - 0] = arguments[_i];
        }
        for (var item in items) {
            items[item].order = this.items.length + 1;
            this.items.push(items[item]);
        }
    };
    Section.prototype.setVisibility = function (visible) {
        this.visible = visible;
    };
    Section.prototype.deserialize = function (input) {
        var self = this;
        for (var prop in input) {
            if (typeof input[prop] === 'object') {
                for (var item in input[prop]) {
                    self.items.push(new __WEBPACK_IMPORTED_MODULE_0__item_model__["a" /* Item */]().deserialize(input[prop][item]));
                }
            }
            else {
                self[prop] = input[prop];
            }
        }
        return self;
    };
    return Section;
}());


/***/ },

/***/ 809:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controls__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_themeColor_directive__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_result_directive__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_htmlprocessor_directive__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__builder_services_UrlShortner_service__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_customValidation__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__control_component__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_fetchResult_directive__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_recommendation_service__ = __webpack_require__(796);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ControlsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ControlsModule = (function () {
    function ControlsModule() {
    }
    ControlsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__control_component__["a" /* Control */], __WEBPACK_IMPORTED_MODULE_1__controls__["a" /* CONTROLS */],
                __WEBPACK_IMPORTED_MODULE_10__components_fetchResult_directive__["a" /* FetchResult */],
                __WEBPACK_IMPORTED_MODULE_2__components_themeColor_directive__["a" /* ThemeColor */], __WEBPACK_IMPORTED_MODULE_4__components_htmlprocessor_directive__["a" /* HtmlProcessor */], __WEBPACK_IMPORTED_MODULE_3__components_result_directive__["a" /* Result */]],
            imports: [__WEBPACK_IMPORTED_MODULE_9__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__controls__["a" /* CONTROLS */], __WEBPACK_IMPORTED_MODULE_8__control_component__["a" /* Control */], __WEBPACK_IMPORTED_MODULE_10__components_fetchResult_directive__["a" /* FetchResult */], __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__["a" /* PipesModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__builder_services_JSONBuilder_service__["a" /* JSONBuilder */], __WEBPACK_IMPORTED_MODULE_6__builder_services_UrlShortner_service__["a" /* UrlShortner */], __WEBPACK_IMPORTED_MODULE_7__services_customValidation__["a" /* CustomValidator */], __WEBPACK_IMPORTED_MODULE_12__services_recommendation_service__["a" /* RecommendationService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ControlsModule);
    return ControlsModule;
}());


/***/ },

/***/ 810:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(55);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CalculatorAnalytics);
    return CalculatorAnalytics;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__["a" /* BaseService */]));


/***/ },

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalcEmail; });
var CalcEmail = (function () {
    function CalcEmail(data) {
        this._id = '';
        this.app = '';
        this.type = 'Finish';
        this.email = 'team@videoagency.com';
        this.subject = 'Your Video Production Estimate';
        this.message = "\n      <p>Hello!</p>\n      <p> Thank you for using our video production cost calculator. Just so you know, your estimate came to approximately $40,000 (and $30,000 if you go with a slightly lower production quality). </p>\n      <p> If you have any further questions, feel free email us :) </p>\n      <p> Thank You</p>";
        this.sendEmail = false;
        var self = this;
        for (var prop in data) {
            self[prop] = data[prop] || self[prop];
        }
    }
    return CalcEmail;
}());


/***/ },

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return RECOMMENDED_ITEMS; });
var ITEMS = {
    textfield: 'Text Input',
    //selectbox: 'Drop Down',
    checkbox: 'Multi Select',
    radio_button: 'Single Select',
    slider: 'Numeric Slider'
};
var RECOMMENDED_ITEMS = {
    radio_button: 'Single Select',
    checkbox: 'Multi Select',
    //selectbox: 'Drop Down',
    textfield: 'Text Input',
};


/***/ },

/***/ 813:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_model__ = __webpack_require__(807);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return App; });

var App = (function () {
    function App() {
        this._id = '';
        this.company = '';
        this.name = '';
        this.templateType = 'Numerical';
        this.title = 'Outgrow';
        this.ga = '';
        this.favicon = '';
        this.description = 'Default Meta Description';
        this.public = true;
        this.visible = true;
        this.poweredby = true;
        this.realTime = false;
        this.realTimeHeading = 'Result Heading goes here';
        this.themeColor = 'cp1';
        this.template = '';
        this.formula = [];
        this.url = '';
        this.navigate_Url = 'https://outgrow.co';
        this.mode = 'PRIVATE';
        this.status = 'DEV';
        this.changed = true;
        this.liveApp = '';
        this.embedTitle = 'Get Started';
        this.embedBgColor = '#fb545b';
        this.embedTextColor = '#ffffff';
        this.embedLinkColor = '#fb545b';
        this.pages = [];
        // code
    }
    //add a page
    App.prototype.addPages = function () {
        var pages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pages[_i - 0] = arguments[_i];
        }
        for (var page in pages)
            this.pages.push(pages[page]);
    };
    App.prototype.setThemeColor = function (color) {
        this.themeColor = color;
    };
    App.prototype.setUrl = function (url) {
        this.url = url;
    };
    App.prototype.setName = function (appName) {
        this.name = appName;
    };
    App.prototype.setTemplateName = function (tempName) {
        this.template = tempName;
    };
    App.prototype.setTemplateType = function (temp_type) {
        this.templateType = temp_type;
    };
    App.prototype.setNavigateUrl = function (nav_url) {
        this.navigate_Url = nav_url;
    };
    App.prototype.setCompany = function (id) {
        this.company = id;
    };
    App.prototype.addformula = function (name, value, result, html, heading, textCTA, href, range) {
        /*  -- In recomended calc ---
            name -> subheading
            value -> value
            result -> imagepath
            html -> description
            decimal -> Heading
            unit-prevalue -> CTA html
            unit-postvalue -> CTA href
            range-status -> img show or hide
        */
        var formula_name = (name) ? name : '';
        var formula_value = (value) ? value : '';
        var formula_result = (result) ? result : '';
        var formula_html = (html) ? html : '';
        var formula_decimal = (heading) ? heading : '0';
        var formula_pre = (textCTA) ? textCTA : '';
        var formula_post = (href) ? href : '';
        var rangeStatus = (range) ? true : false;
        this.formula.push({
            name: formula_name,
            html: formula_html,
            result: formula_result,
            decimal: formula_decimal,
            isValid: true,
            value: formula_value,
            units: {
                prefix: true,
                preValue: formula_pre,
                postfix: true,
                postValue: formula_post
            },
            range: {
                status: rangeStatus,
                lower: {
                    type: 'Number',
                    value: 0.0
                },
                higher: {
                    type: 'Number',
                    value: 0.0
                }
            }
        });
        // let html: string = this.formula[this.formula.length - 1].html;
        // this.formula[this.formula.length - 1].html = html.replace('/{R[0-9]}/gi', '{R' + (this.formula.length - 1) + '}');
        return this.formula.length - 1;
    };
    App.prototype.deserialize = function (input) {
        var self = this;
        for (var prop in input) {
            if (prop === 'pages') {
                for (var page in input[prop]) {
                    self.pages.push(new __WEBPACK_IMPORTED_MODULE_0__page_model__["a" /* Page */]().deserialize(input[prop][page]));
                }
            }
            else
                self[prop] = input[prop];
        }
        return self;
    };
    return App;
}());


/***/ },

/***/ 814:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__ = __webpack_require__(800);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FetchResult; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FetchResult = (function () {
    function FetchResult(el, jsonBuilderHelper, formulaService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.formulaService = formulaService;
        this.ele = el.nativeElement;
    }
    FetchResult.prototype.ngDoCheck = function () {
        this.ele.innerHTML = this.formulaService.formulaFunction(this.formulaIndex);
    };
    FetchResult.prototype.ngOnInit = function () {
        this.formulaService.formulaFunction(this.formulaIndex);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])('fetch-result'), 
        __metadata('design:type', Object)
    ], FetchResult.prototype, "formulaIndex", void 0);
    FetchResult = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
            selector: '[fetch-result]',
            providers: [__WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__["a" /* FormulaService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__["a" /* FormulaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__["a" /* FormulaService */]) === 'function' && _c) || Object])
    ], FetchResult);
    return FetchResult;
    var _a, _b, _c;
}());


/***/ },

/***/ 815:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__ = __webpack_require__(800);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HtmlProcessor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HtmlProcessor = (function () {
    function HtmlProcessor(el, jsonBuilderHelper, formulaService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.formulaService = formulaService;
        this.ele = el.nativeElement;
    }
    HtmlProcessor.prototype.ngDoCheck = function () {
        var tempHtml = this.formulaService.textParser(this.html);
        if (this.ele.innerHTML != tempHtml) {
            this.ele.innerHTML = this.formulaService.textParser(this.html);
        }
    };
    HtmlProcessor.prototype.ngOnInit = function () {
        this.ele.innerHTML = this.formulaService.textParser(this.html);
        //console.log("check",this.ele.innerHTML);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])('htmlProcess'), 
        __metadata('design:type', Object)
    ], HtmlProcessor.prototype, "html", void 0);
    HtmlProcessor = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
            selector: '[htmlProcess]',
            providers: [__WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__["a" /* FormulaService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__["a" /* FormulaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__["a" /* FormulaService */]) === 'function' && _c) || Object])
    ], HtmlProcessor);
    return HtmlProcessor;
    var _a, _b, _c;
}());


/***/ },

/***/ 816:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Result; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Result = (function () {
    function Result(el, jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.ele = el.nativeElement;
    }
    Result.prototype.ngOnInit = function () {
        var _this = this;
        var dataText = this.result.props.title;
        /* parse Q values /*/
        dataText = this.result.props.title.replace(/({Q[\d]+})/g, function (match) {
            var qIndex = Number(match.split(/[{Q}]/)[2]);
            return _this.result.stats[qIndex - 1].value || match;
        });
        /* parse R values */
        dataText = this.result.props.title.replace(/({R[\d]+})/g, function (match) {
            var qIndex = Number(match.split(/[{R}]/)[2]);
            var resultObj = _this.result.result[qIndex - 1];
            var resultValue = (resultObj.postfix == 'false') ? (resultObj.unit + '' + resultObj.value) : (resultObj.value + '' + resultObj.unit);
            return resultValue || match;
        });
        this.ele.innerHTML = dataText;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])('result'), 
        __metadata('design:type', Object)
    ], Result.prototype, "result", void 0);
    Result = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
            selector: '[result]',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], Result);
    return Result;
    var _a, _b;
}());


/***/ },

/***/ 817:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ThemeColor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeColor = (function () {
    function ThemeColor(el, jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.colors = ['#61bd6d', '#1abc9c', '#54acd2', '#2c82c9', '#9365b8', '#475577', '#cccccc',
            '#41a85f', '#00a885', '#3d8eb9', '#2969b0', '#553982', '#28324e', '#000000', '#f7da64', '#fba026',
            '#eb6b56', '#e25041', '#a38f84', '#efefef', '#ffffff', '#fac51c', '#f37934', '#d14841', '#b8312f',
            '#7c706b', '#d1d5d8', '#00aea5'];
        this.ele = el.nativeElement;
    }
    ThemeColor.prototype.ngOnInit = function () {
        this.ngDoCheck();
    };
    ThemeColor.prototype.ngDoCheck = function () {
        var color = this.jsonBuilderHelper.getJSONBuilt().themeColor;
        for (var _i = 0, _a = this.themeColor; _i < _a.length; _i++) {
            var atrribute = _a[_i];
            switch (atrribute) {
                case 'background':
                    this.ele.style.backgroundColor = color;
                    break;
                case 'border':
                    this.ele.style.borderColor = color;
                    break;
                case 'colorClass':
                    this.addColorClass(color);
                    break;
                default:
                    this.ele.style.color = color;
                    break;
            }
        }
    };
    ThemeColor.prototype.addColorClass = function (color) {
        var colorIndex = (this.colors.indexOf(color) + 1);
        var element = jQuery(this.ele);
        var colorClass = 'tc' + colorIndex;
        if ((colorIndex !== 0 && this.colorClass != colorClass) || element.hasClass('w100')) {
            element
                .removeClass(function (index, css) {
                return (css.match(/(^|\s)tc\S+/g) || []).join(' ');
            })
                .addClass(colorClass);
            this.colorClass = colorClass;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])('themeColor'), 
        __metadata('design:type', Object)
    ], ThemeColor.prototype, "themeColor", void 0);
    ThemeColor = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
            selector: '[themeColor]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], ThemeColor);
    return ThemeColor;
    var _a, _b;
}());


/***/ },

/***/ 818:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Button; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Button = (function () {
    function Button() {
        this.controlOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    Button.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Button.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], Button.prototype, "controlOutput", void 0);
    Button = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'click-button',
            template: "\n\t\t\t <div class=\"text-center\" *ngIf=\"data.visible\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn prime-action  next-step sliding-next \"\n\t\t\t\t\t\t(click)=\"controlOutput.emit($event)\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{data.props.title}}\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t ",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], Button);
    return Button;
}());


/***/ },

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(796);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Checkbox; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Checkbox = (function () {
    function Checkbox(_analyticService, jsonBuilderHelper, recommendationService) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.recommendationService = recommendationService;
        this.isIconPresent = false;
        this.touched = false;
    }
    Checkbox.prototype.ngOnInit = function () {
        this.data.props.currentLabel = '';
        this.data.props.currentValue = 0;
        for (var iconCheck in this.data.options) {
            this.data.options[iconCheck].selected = this.data.options[iconCheck].defualtselected;
            /* check for default to set current value */
            if (this.data.options[iconCheck].selected == true) {
                this.form.controls[this.data._id].markAsDirty();
                this.data.props.currentValue = parseFloat(this.data.options[iconCheck].value) + parseFloat(this.data.props.currentValue);
                this.data.props.currentLabel = this.data.options[iconCheck].currentLabel + ',' + this.data.props.currentLabel;
            }
            if (this.data.options[iconCheck].icon !== '') {
                this.data.isIconPresent = true;
            }
        }
    };
    Checkbox.prototype.onChange = function (event, index) {
        var _this = this;
        this.data.props.currentLabel = '';
        this.data.props.currentValue = 0;
        for (var option in this.data.options) {
            if (option == index)
                this.data.options[option].selected = !this.data.options[option].selected;
            if (this.data.options[option].selected == true) {
                this.data.props.currentValue += parseFloat(this.data.options[option].value);
                this.data.props.currentLabel += this.data.options[option].label + ',';
            }
        }
        if (this.data.props.currentLabel != '')
            this.data.props.currentLabel = this.data.props.currentLabel.slice(0, -1);
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            /* if key is undefined then push in array */
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            /*  */
            if (this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.recommendationService.getRecomendedResult();
        }
        this.touched = true;
    };
    Object.defineProperty(Checkbox.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.data._id].valid;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Checkbox.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Checkbox.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]) === 'function' && _a) || Object)
    ], Checkbox.prototype, "form", void 0);
    Checkbox = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'checkbox',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: __webpack_require__(842)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], Checkbox);
    return Checkbox;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Control; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Control = (function () {
    function Control() {
        this.controlOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    Control.prototype.ngOnInit = function () { };
    Control.prototype.onControlOutput = function (value) {
        this.controlOutput.emit(value);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Control.prototype, "page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Control.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]) === 'function' && _a) || Object)
    ], Control.prototype, "form", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Control.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], Control.prototype, "controlOutput", void 0);
    Control = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'control',
            template: "\n          <textfield *ngIf=\"data.type=='textfield'\" [data]=\"data\" [form]=\"form\" ></textfield>\n          <text_area *ngIf=\"data.type=='text-area'\" [data]=\"data\"  ></text_area>\n          <selectbox *ngIf=\"data.type=='selectbox'\" [data]=\"data\" [form]=\"form\" ></selectbox>\n          <radio-button *ngIf=\"data.type=='radio_button'\" [data]=\"data\" [form]=\"form\" (controlOutput)=\"onControlOutput($event)\"></radio-button>\n          <og-header *ngIf=\"data.type=='header'\" [data]=\"data\" ></og-header>\n          <sub_header *ngIf=\"data.type=='sub_header'\" [data]=\"data\" ></sub_header>\n          <click-button *ngIf=\"data.type=='click_button'\" [data]=\"data\"\n            (controlOutput)=\"onControlOutput($event)\" ></click-button>\n      \t\t<logo *ngIf=\"data.type=='logo'\" [data]=\"data\" ></logo>\n          <slider *ngIf=\"data.type=='slider'\" [data]=\"data\" ></slider>\n          <leadform_question *ngIf=\"data.type=='leadform_question'\" [data]=\"data\"\n            (controlOutput)=\"onControlOutput($event)\" ></leadform_question>\n          <leadform *ngIf=\"data.type=='leadform'\" [data]=\"data\" [page]=\"page\"\n           (controlOutput)=\"onControlOutput($event)\" ></leadform>\n          <poweredby *ngIf=\"data.type=='poweredby'\"  [data]=\"data\" ></poweredby>\n          <footer-links *ngIf=\"data.type=='footer_links'\"  [data]=\"data\" ></footer-links>\n          <checkbox *ngIf=\"data.type=='checkbox'\" [data]=\"data\" [form]=\"form\" ></checkbox>\n          <switchbox *ngIf=\"data.type=='switchbox'\" [data]=\"data\" [form]=\"form\" ></switchbox>\n          <result_output *ngIf=\"data.type=='result_output'\" [data]=\"data\" ></result_output>\n          <result_header *ngIf=\"data.type=='result_header'\" [data]=\"data\" ></result_header>\n          <share_links *ngIf=\"data.type=='share_links'\"  [data]=\"data\" ></share_links>\n          <result_disclaimer *ngIf=\"data.type=='result_disclaimer'\" [data]=\"data\" ></result_disclaimer>\n          <result_redo *ngIf=\"data.type=='result_redo'\" [data]=\"data\" ></result_redo>\n      ",
        }), 
        __metadata('design:paramtypes', [])
    ], Control);
    return Control;
    var _a;
}());


/***/ },

/***/ 821:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__textfield_textfield_component__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textarea_textarea_component__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectbox_selectbox_component__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radiobutton_radiobutton_component__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sub_header_sub_header_component__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button_button_component__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logo_logo_component__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slider_slider_component__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leadform_leadform_component__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__leadform_question_leadform_question_component__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_poweredby_component__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_links_component__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__checkbox_checkbox_component__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__switch_switchbox_component__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__resultoutput_resultoutput_component__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__resultheader_resultheader_component__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sharelinks_sharelinks_component__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__resultredo_redo_component__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__resultdisclaimer_resultdisclaimer_component__ = __webpack_require__(829);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CONTROLS; });




















var CONTROLS = [
    __WEBPACK_IMPORTED_MODULE_7__logo_logo_component__["a" /* Logo */],
    __WEBPACK_IMPORTED_MODULE_0__textfield_textfield_component__["a" /* TextField */],
    __WEBPACK_IMPORTED_MODULE_1__textarea_textarea_component__["a" /* TextArea */],
    __WEBPACK_IMPORTED_MODULE_2__selectbox_selectbox_component__["a" /* SelectBox */],
    __WEBPACK_IMPORTED_MODULE_3__radiobutton_radiobutton_component__["a" /* RadioButton */],
    __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* Header */],
    __WEBPACK_IMPORTED_MODULE_5__sub_header_sub_header_component__["a" /* SubHeader */],
    __WEBPACK_IMPORTED_MODULE_6__button_button_component__["a" /* Button */],
    __WEBPACK_IMPORTED_MODULE_8__slider_slider_component__["a" /* Slider */],
    __WEBPACK_IMPORTED_MODULE_9__leadform_leadform_component__["a" /* LeadForm */],
    __WEBPACK_IMPORTED_MODULE_10__leadform_question_leadform_question_component__["a" /* LeadFormQuestion */],
    __WEBPACK_IMPORTED_MODULE_11__footer_poweredby_component__["a" /* PoweredByComponent */],
    __WEBPACK_IMPORTED_MODULE_12__footer_footer_links_component__["a" /* FooterLinksComponent */],
    __WEBPACK_IMPORTED_MODULE_13__checkbox_checkbox_component__["a" /* Checkbox */],
    __WEBPACK_IMPORTED_MODULE_14__switch_switchbox_component__["a" /* SwitchBox */],
    __WEBPACK_IMPORTED_MODULE_15__resultoutput_resultoutput_component__["a" /* ResultOutput */],
    __WEBPACK_IMPORTED_MODULE_16__resultheader_resultheader_component__["a" /* ResultHeader */],
    __WEBPACK_IMPORTED_MODULE_17__sharelinks_sharelinks_component__["a" /* ShareLinks */],
    __WEBPACK_IMPORTED_MODULE_18__resultredo_redo_component__["a" /* RedoComponent */],
    __WEBPACK_IMPORTED_MODULE_19__resultdisclaimer_resultdisclaimer_component__["a" /* ResultDisclaimer */]
];


/***/ },

/***/ 822:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterLinksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterLinksComponent = (function () {
    function FooterLinksComponent() {
    }
    FooterLinksComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], FooterLinksComponent.prototype, "data", void 0);
    FooterLinksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'footer-links',
            template: "\n    <div class=\" text-left\" *ngIf=\"data.visible == true\" >\n      <ul class=\"footer-nav\">\n        <li  *ngFor=\"let item of data.options;let i=index\">\n          <a href=\"{{item.value}}\">{{ item.label }}</a>\n          <span *ngIf=\"i < data.options.length-1\">-</span>\n        </li>\n      </ul>\n    </div>\n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], FooterLinksComponent);
    return FooterLinksComponent;
}());


/***/ },

/***/ 823:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PoweredByComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoweredByComponent = (function () {
    function PoweredByComponent() {
    }
    PoweredByComponent.prototype.ngOnInit = function () {
        this.url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PROTOCOL + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].APP_EXTENSION;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], PoweredByComponent.prototype, "data", void 0);
    PoweredByComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'poweredby',
            template: "\n\t\t<div class=\" text-right\" *ngIf=\"data.visible == true\" >\n\t\t\t<div class=\" powered-by\">\n\t\t\t\t<span>Powered by </span>\n\t\t\t\t<a href=\"{{url}}\" target=\"_blank\">\n\t\t\t\t\t\t<img src=\"https://cdn.filestackcontent.com/aGXPG3NCRemoiIEP7xtg\" alt=\"Powered By\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], PoweredByComponent);
    return PoweredByComponent;
}());


/***/ },

/***/ 824:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Header; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Header = (function () {
    function Header() {
    }
    Header.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Header.prototype, "data", void 0);
    Header = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-header',
            template: "\n    <div [innerHtml]=\"data.props.title | safeHtml\" [class]=\"data.defaultClass\">\n    </div>  \n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
}());


/***/ },

/***/ 825:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customValidation__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LeadForm; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeadForm = (function () {
    function LeadForm(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.controlOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.obj = {};
    }
    LeadForm.prototype.ngOnInit = function () {
        // console.log("jsonBuilderHelper.getJSONBuilt()",this.page);
    };
    LeadForm.prototype.onTouched = function (i) {
        jQuery('#touched' + this.data._id + i).show();
    };
    LeadForm.prototype.onSubmit = function (form) {
        var _this = this;
        for (var i in this.form.controls) {
            jQuery('#touched' + this.data._id + i).show();
            this.form.controls[i].markAsTouched();
        }
        if (form.valid) {
            this.controlOutput.emit(true);
        }
        for (var _i = 0, _a = this.data.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            this.obj[field.type] = field.value;
        }
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE' && form['_status'] == 'VALID') {
            //SEND Analytic
            //Ours
            ga('devteam.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + this.jsonBuilderHelper.getOtherVisibleLeadForm() + ' Leadform', 'Submitted', this.jsonBuilderHelper.getJSONBuilt().url);
            //Users
            if (this.jsonBuilderHelper.getJSONBuilt().ga)
                ga('userCustom.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + this.jsonBuilderHelper.getOtherVisibleLeadForm() + ' Leadform', 'Submitted', this.jsonBuilderHelper.getJSONBuilt().url);
            this._analyticService.saveLead(this.jsonBuilderHelper.getJSONBuilt()._id, this.obj)
                .subscribe(function (response) {
                _this._analyticService.setVisitorKey(response.key);
            }, function (error) {
                console.log(error);
            });
        }
    };
    LeadForm.prototype.formGroup = function () {
        if (!this.form || this.data.fields.length > Object.keys(this.form.controls).length) {
            var group_1 = {};
            this.data.fields.forEach(function (field, index) {
                var validators = [];
                if (field.validations.required.status === true) {
                    validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
                    if (field.type === 'email')
                        validators.push(__WEBPACK_IMPORTED_MODULE_2__services_customValidation__["a" /* CustomValidator */].emailFormat);
                    if (field.type === 'tel')
                        validators.push(__WEBPACK_IMPORTED_MODULE_2__services_customValidation__["a" /* CustomValidator */].phoneNumer);
                }
                // if(field.validations.maxLength.status===true)
                //   validators.push(Validators.maxLength);
                group_1[index] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](field.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose(validators));
            });
            this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */](group_1);
            return this.form;
        }
        return this.form;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], LeadForm.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], LeadForm.prototype, "page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], LeadForm.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], LeadForm.prototype, "controlOutput", void 0);
    LeadForm = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'leadform',
            template: __webpack_require__(843),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], LeadForm);
    return LeadForm;
    var _a, _b;
}());


/***/ },

/***/ 826:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customValidation__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LeadFormQuestion; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeadFormQuestion = (function () {
    function LeadFormQuestion(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.controlOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.obj = {};
    }
    LeadFormQuestion.prototype.ngOnInit = function () { };
    LeadFormQuestion.prototype.onTouched = function (i) {
        jQuery('#touched' + this.data._id + i).show();
    };
    LeadFormQuestion.prototype.onSubmit = function (form) {
        var _this = this;
        for (var i in this.form.controls) {
            jQuery('#touched' + this.data._id + i).show();
            this.form.controls[i].markAsTouched();
        }
        if (form.valid) {
            this.controlOutput.emit(true);
        }
        for (var _i = 0, _a = this.data.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            this.obj[field.type] = field.value;
        }
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE' && form['_status'] == 'VALID') {
            //SEND Analytic
            //Ours
            ga('devteam.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + this.jsonBuilderHelper.getOtherVisibleLeadForm() + ' Leadform', 'Submitted', this.jsonBuilderHelper.getJSONBuilt().url);
            //Users
            if (this.jsonBuilderHelper.getJSONBuilt().ga)
                ga('userCustom.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + this.jsonBuilderHelper.getOtherVisibleLeadForm() + ' Leadform', 'Submitted', this.jsonBuilderHelper.getJSONBuilt().url);
            this._analyticService.saveLead(this.jsonBuilderHelper.getJSONBuilt()._id, this.obj)
                .subscribe(function (response) {
                _this._analyticService.setVisitorKey(response.key);
                ga('devteam.send', 'pageview', '/' + response.lead);
            }, function (error) {
                console.log(error);
            });
        }
    };
    LeadFormQuestion.prototype.formGroup = function () {
        if (!this.form || this.data.fields.length > Object.keys(this.form.controls).length) {
            var group_1 = {};
            this.data.fields.forEach(function (field, index) {
                var validators = [];
                if (field.validations.required.status === true) {
                    validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
                    if (field.type === 'email')
                        validators.push(__WEBPACK_IMPORTED_MODULE_2__services_customValidation__["a" /* CustomValidator */].emailFormat);
                    if (field.type === 'tel')
                        validators.push(__WEBPACK_IMPORTED_MODULE_2__services_customValidation__["a" /* CustomValidator */].phoneNumer);
                }
                // if(field.validations.maxLength.status===true)
                //   validators.push(Validators.maxLength);
                group_1[index] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](field.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose(validators));
            });
            this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */](group_1);
            return this.form;
        }
        return this.form;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], LeadFormQuestion.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], LeadFormQuestion.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], LeadFormQuestion.prototype, "controlOutput", void 0);
    LeadFormQuestion = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'leadform_question',
            template: __webpack_require__(844),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], LeadFormQuestion);
    return LeadFormQuestion;
    var _a, _b;
}());


/***/ },

/***/ 827:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Logo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Logo = (function () {
    function Logo() {
    }
    Logo.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Logo.prototype, "data", void 0);
    Logo = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'logo',
            template: "\n      <header class=\"landing-page-header\" *ngIf=\"data.visible\" >\n        <div class=\" logo\">\n          <a href=\"javascript:void(0);\">\n            <img src=\"{{data.props.title}}\" alt=\"{{data.config.placeholder}}\">\n          </a>\n        </div>\n      </header>\n  ",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], Logo);
    return Logo;
}());


/***/ },

/***/ 828:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(796);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RadioButton; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RadioButton = (function () {
    function RadioButton(_analyticService, jsonBuilderHelper, recommendationService) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.recommendationService = recommendationService;
        this.controlOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.isIconPresent = false;
        this.touched = false;
    }
    RadioButton.prototype.ngOnInit = function () {
        this.data.props.currentLabel = '';
        this.data.props.currentValue = 0;
        for (var _i = 0, _a = this.data.options; _i < _a.length; _i++) {
            var radio_item = _a[_i];
            /* check for default to set current value */
            radio_item.selected = radio_item.defualtselected;
            if (radio_item.selected == true) {
                this.data.props.currentValue = parseFloat(radio_item.value);
                this.data.props.currentLabel = radio_item.label;
            }
            if (radio_item.icon !== '') {
                this.data.isIconPresent = true;
            }
        }
    };
    RadioButton.prototype.onClick = function (radioItem) {
        var _this = this;
        this.data.options = this.data.options.map(function (option) { option.selected = false; return option; });
        radioItem.selected = true;
        this.data.props.currentLabel = radioItem.label;
        this.data.props.currentValue = radioItem.value;
        this.controlOutput.emit(true);
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            /* if key is undefined then push in array */
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            /*  */
            if (this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.recommendationService.getRecomendedResult();
        }
    };
    Object.defineProperty(RadioButton.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.data._id].valid;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], RadioButton.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], RadioButton.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], RadioButton.prototype, "controlOutput", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]) === 'function' && _a) || Object)
    ], RadioButton.prototype, "form", void 0);
    RadioButton = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'radio-button',
            template: __webpack_require__(845)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], RadioButton);
    return RadioButton;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 829:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResultDisclaimer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultDisclaimer = (function () {
    function ResultDisclaimer() {
    }
    ResultDisclaimer.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ResultDisclaimer.prototype, "data", void 0);
    ResultDisclaimer = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'result_disclaimer',
            template: "\t\n\t\t<div [innerHtml]=\"data.props.title | safeHtml\" class=\"disc-set\">\n\t\t</div>\n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], ResultDisclaimer);
    return ResultDisclaimer;
}());


/***/ },

/***/ 830:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResultHeader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultHeader = (function () {
    function ResultHeader() {
    }
    ResultHeader.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ResultHeader.prototype, "data", void 0);
    ResultHeader = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'result_header',
            template: "\n    <div class=\"mid-width\" [innerHtml]=\"data.props.title | safeHtml\">\n    </div>  \n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], ResultHeader);
    return ResultHeader;
}());


/***/ },

/***/ 831:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResultOutput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultOutput = (function () {
    function ResultOutput(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    ResultOutput.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ResultOutput.prototype, "data", void 0);
    ResultOutput = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'result_output',
            template: __webpack_require__(846),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object])
    ], ResultOutput);
    return ResultOutput;
    var _a;
}());


/***/ },

/***/ 832:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RedoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RedoComponent = (function () {
    function RedoComponent() {
    }
    RedoComponent.prototype.redoFun = function () {
        window.location.reload(true);
    };
    RedoComponent.prototype.ngAfterViewInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], RedoComponent.prototype, "data", void 0);
    RedoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'result_redo',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: "\n    <div class=\"redo-link\">\n\t\t<ul>\n\t\t    <li><span>|</span></li>\n\t\t\t<li><a  id=\"refresh-button\" (click)=\"redoFun()\"><i class=\"material-icons\">replay</i></a></li>\t\n        </ul>\n\t</div>\n\t\t\t\n"
        }), 
        __metadata('design:paramtypes', [])
    ], RedoComponent);
    return RedoComponent;
}());


/***/ },

/***/ 833:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(796);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SelectBox; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectBox = (function () {
    function SelectBox(_analyticService, jsonBuilderHelper, recommendationService) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.recommendationService = recommendationService;
        this.optionStatus = 0;
        //code
    }
    SelectBox.prototype.ngOnInit = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.data.props.currentValue = this.data.options[0].value;
        }
        else {
            this.data.props.currentValue = parseFloat(this.data.options[0].value);
        }
        this.data.props.currentLabel = this.data.options[0].label;
        for (var _i = 0, _a = this.data.options; _i < _a.length; _i++) {
            var option = _a[_i];
            option.selected = option.defualtselected;
            /* check for default to set current value */
            if (option.selected == true) {
                if (this.data.props.currentValue == undefined || this.data.props.currentValue == '' || this.data.props.currentValue == null)
                    this.data.props.currentValue = 0;
                if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
                    this.data.props.currentValue = option.value;
                }
                else {
                    this.data.props.currentValue = parseFloat(option.value);
                }
                this.data.props.currentLabel = option.label;
                this.optionStatus = 1;
            }
        }
        if (this.optionStatus == 0 && this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.data.options[0].selected = true;
        }
    };
    SelectBox.prototype.ngAfterViewInit = function () {
        var self = this;
        jQuery('#' + self.data._id).selectize({
            allowEmptyOption: true
        });
        jQuery('#' + self.data._id)[0].selectize.setValue(self.data.props.currentValue);
        jQuery('#' + self.data._id)[0].selectize.on('change', function () {
            var value = jQuery('#' + self.data._id)[0].selectize.getValue();
            for (var option in self.data.options) {
                if (self.data.options[option].value === value) {
                    self.onChange(option);
                    break;
                }
            }
        });
    };
    Object.defineProperty(SelectBox.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.data._id].valid;
        },
        enumerable: true,
        configurable: true
    });
    SelectBox.prototype.onChange = function (index) {
        var _this = this;
        /* select index in item option */
        for (var radio_itemIndex in this.data.options) {
            if (Number(radio_itemIndex) == index) {
                this.data.options[radio_itemIndex].selected = true;
                this.data.props.currentLabel = this.data.options[radio_itemIndex].label;
            }
            else {
                this.data.options[radio_itemIndex].selected = false;
            }
        }
        if (this.data.props.currentValue == undefined || this.data.props.currentValue == '' || this.data.props.currentValue == null)
            this.data.props.currentValue = 0;
        if (index > -1) {
            this.data.props.currentValue = parseFloat(this.data.options[index].value);
        }
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            /* if key is undefined then push in array */
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            /*  */
            if (this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.recommendationService.getRecomendedResult();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], SelectBox.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], SelectBox.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]) === 'function' && _a) || Object)
    ], SelectBox.prototype, "form", void 0);
    SelectBox = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'selectbox',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: __webpack_require__(847),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], SelectBox);
    return SelectBox;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 834:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ShareLinks; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShareLinks = (function () {
    function ShareLinks(_analyticService, subDomainService, jsonBuilderHelper, _urlShortner) {
        this._analyticService = _analyticService;
        this.subDomainService = subDomainService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._urlShortner = _urlShortner;
    }
    ShareLinks.prototype.redirectto = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    ShareLinks.prototype.ngOnInit = function () {
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical')
            this.title = 'I Got ' + this.jsonBuilderHelper.getJSONBuilt().formula[0].value + '.';
        else
            this.title = 'I Got ' + this.jsonBuilderHelper.getSelectedFormula().name + '.';
        this.resultLink = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        var fbImgUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].APP_EXTENSION + '/seo/' + this.jsonBuilderHelper.getJSONBuilt().url;
        this._urlShortner.googleShortner(fbImgUrl).subscribe(function (body) {
            _this.shortURL = body.id;
        });
        this.mailSrcUrl = 'mailto:?Subject=Calculator Result&Body=' + this.resultLink;
        this.twitterSrcUrl = "https://twitter.com/intent/tweet?status=" + encodeURI(this.title) + "+" + this.resultLink;
        this.linkedInSrcUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + this.resultLink + "&title=" + encodeURI(this.title) + "\n                &summary=" + encodeURI(this.jsonBuilderHelper.getJSONBuilt().description) + "&source=LinkedIn";
        //Initialize FB
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        window.fbAsyncInit = function () {
            FB.init({
                appId: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].FB_API,
                xfbml: true,
                version: 'v2.7'
            });
        };
    };
    ShareLinks.prototype.updateResultLink = function () {
        // if (!this.devMode) {
        // 	if (this._analyticService.getVisitorKey()) {
        // 		this.resultLink = 'http://' + this.subDomainService.subDomain.sub_domain +
        // 			'.' + Config.APP_EXTENSION + '/result/' +
        // 			this._analyticService.getVisitorKey();
        // 	}
        // }
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical') {
            this.title = 'I Got ' + this.jsonBuilderHelper.getJSONBuilt().formula[0].value + '.';
        }
        else
            this.title = 'I Got ' + this.jsonBuilderHelper.getSelectedFormula().name + '.';
        this.resultLink = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        var fbImgUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].APP_EXTENSION + '/seo/' + this.jsonBuilderHelper.getJSONBuilt().url;
        this._urlShortner.googleShortner(fbImgUrl).subscribe(function (body) {
            _this.shortURL = body.id;
        });
        this.mailSrcUrl = 'mailto:?Subject=Calculator Result&Body=' + this.resultLink;
        this.twitterSrcUrl = "https://twitter.com/intent/tweet?status=" + encodeURI(this.title) + "+" + this.resultLink;
        this.linkedInSrcUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + this.resultLink + "&title=" + encodeURI(this.title) + "\n                &summary=" + encodeURI(this.title) + "&source=LinkedIn";
    };
    ShareLinks.prototype.facebookShare = function () {
        this.updateResultLink();
        var image = 'http://process.filestackapi.com/A3ygIw4hISSCdApqW4SAwz/urlscreenshot=delay:3000/' + this.shortURL;
        FB.ui({
            method: 'feed',
            display: 'popup',
            name: this.title,
            //caption: this.title,
            description: this.jsonBuilderHelper.getJSONBuilt().description,
            link: this.resultLink,
            picture: image
        }, function (response) { });
    };
    ShareLinks.prototype.isVisible = function (socialMedia) {
        for (var option in this.data.options) {
            if (this.data.options[option].type == socialMedia) {
                return this.data.options[option].selected;
            }
        }
        return true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ShareLinks.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ShareLinks.prototype, "devMode", void 0);
    ShareLinks = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'share_links',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: "\n\t<div class=\"share-link\">\n\t\t<ul>\n\t\t\t<li *ngIf=\"isVisible('facebook')\"><a (click)=\"facebookShare()\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t<li *ngIf=\"isVisible('twitter')\"><a target=\"_blank\" [href]=\"twitterSrcUrl\" ><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t<li *ngIf=\"isVisible('linkedin')\"><a target=\"_blank\" [href]=\"linkedInSrcUrl\" ><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t<li *ngIf=\"isVisible('email')\"><a target=\"_blank\" [href]=\"mailSrcUrl\" ><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\n\t\t</ul>\n\t</div>\n",
            providers: [__WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__["a" /* UrlShortner */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* SubDomainService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__["a" /* UrlShortner */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__["a" /* UrlShortner */]) === 'function' && _d) || Object])
    ], ShareLinks);
    return ShareLinks;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 835:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Slider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Slider = (function () {
    function Slider(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.tipShow = false;
        this.tipLeftPos = '';
    }
    Slider.prototype.ngOnInit = function () {
        if (this.data.props.defaultValue) {
            this.data.props.currentValue = this.data.props.defaultValue;
            this.value = this.data.props.currentValue;
            if (this.data.props.postfix)
                this.data.props.currentLabel = this.data.props.currentValue + ' ' + this.data.props.unit;
            else
                this.data.props.currentLabel = this.data.props.unit + ' ' + this.data.props.currentValue;
        }
        else {
            this.data.props.currentValue = this.data.props.minVal;
            this.value = this.data.props.currentValue;
            if (this.data.props.postfix)
                this.data.props.currentLabel = this.data.props.currentValue + ' ' + this.data.props.unit;
            else
                this.data.props.currentLabel = this.data.props.unit + ' ' + this.data.props.currentValue;
        }
    };
    Slider.prototype.ngAfterViewInit = function () {
        var that = this;
        var sliderJson = {
            min: this.data.props.minVal,
            max: this.data.props.maxVal,
            step: this.data.props.steps,
            grid: this.data.props.scale,
            from: this.data.props.defaultValue,
            prettify_enabled: true,
            prettify_separator: ',',
            onFinish: function (data) {
                that.data.props.currentValue = data.from;
                if (that.data.props.postfix)
                    that.data.props.currentLabel = data.from + ' ' + that.data.props.unit;
                else
                    that.data.props.currentLabel = that.data.props.unit + ' ' + data.from;
                that.change();
            },
            onUpdate: function (data) {
                that.data.props.currentValue = data.from;
                if (that.data.props.postfix)
                    that.data.props.currentLabel = data.from + ' ' + that.data.props.unit;
                else
                    that.data.props.currentLabel = that.data.props.unit + ' ' + data.from;
            }
        };
        if (this.data.props.postfix) {
            sliderJson["postfix"] = this.data.props.unit;
            sliderJson["prefix"] = '';
        }
        else {
            sliderJson["prefix"] = this.data.props.unit;
            sliderJson["postfix"] = '';
        }
        jQuery('#' + this.data._id).ionRangeSlider(sliderJson);
    };
    Slider.prototype.change = function () {
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            /* if key is undefined then push in array */
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            /*  */
            if (this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Slider.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Slider.prototype, "devMode", void 0);
    Slider = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'slider',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: __webpack_require__(848),
            // template:'Hello',
            styles: [
                __webpack_require__(840),
                __webpack_require__(841),
            ],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], Slider);
    return Slider;
    var _a, _b;
}());


/***/ },

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SubHeader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubHeader = (function () {
    function SubHeader() {
    }
    SubHeader.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], SubHeader.prototype, "data", void 0);
    SubHeader = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'sub_header',
            template: "\n    <div [innerHtml]=\"data.props.title | safeHtml\" [class]=\"data.defaultClass\">\n    </div>  \n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], SubHeader);
    return SubHeader;
}());


/***/ },

/***/ 837:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SwitchBox; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SwitchBox = (function () {
    function SwitchBox(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.touched = false;
    }
    SwitchBox.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.data.options; _i < _a.length; _i++) {
            var option = _a[_i];
            option.selected = option.defualtselected;
            /* check for default to set current value */
            if (option.selected == true) {
                if (this.data.props.currentValue == undefined || this.data.props.currentValue == '' || this.data.props.currentValue == null)
                    this.data.props.currentValue = 0;
                if (this.data.props.currentLabel == undefined || this.data.props.currentLabel == '' || this.data.props.currentLabel == null)
                    this.data.props.currentLabel = 0;
                this.data.props.currentLabel = option.label + ',' + this.data.props.currentLabel;
            }
        }
    };
    SwitchBox.prototype.onChange = function (Itemvalue, index) {
        var _this = this;
        if (this.data.props.currentValue == undefined || this.data.props.currentValue == '' || this.data.props.currentValue == null)
            this.data.props.currentValue = 0;
        if (this.data.props.currentLabel == undefined || this.data.props.currentLabel == '' || this.data.props.currentLabel == null)
            this.data.props.currentLabel = '';
        if (this.data.options[index].selected == false) {
            this.data.props.currentValue = parseInt(Itemvalue.value) + parseInt(this.data.props.currentValue);
        }
        else {
            this.data.props.currentValue = parseInt(this.data.props.currentValue) - parseInt(Itemvalue.value);
        }
        for (var switch_itemIndex in this.data.options) {
            if (switch_itemIndex == index) {
                this.data.options[switch_itemIndex].selected = !this.data.options[switch_itemIndex].selected;
            }
        }
        // console.log(Itemvalue);
        this.data.props.currentLabel = '';
        // console.log(this.data.options);
        for (var option in this.data.options) {
            if (this.data.options[option].selected == true) {
                this.data.props.currentLabel += this.data.options[option].label + ',';
            }
        }
        this.data.props.currentLabel = this.data.props.currentLabel.slice(0, -1);
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                .subscribe(function (response) {
                _this._analyticService.setVisitorKey(response);
            }, function (error) {
                console.log(error);
            });
        }
        this.touched = true;
    };
    Object.defineProperty(SwitchBox.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.data._id].valid;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], SwitchBox.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], SwitchBox.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]) === 'function' && _a) || Object)
    ], SwitchBox.prototype, "form", void 0);
    SwitchBox = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'switchbox',
            viewProviders: [],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: __webpack_require__(849),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object])
    ], SwitchBox);
    return SwitchBox;
    var _a, _b, _c;
}());


/***/ },

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TextArea; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextArea = (function () {
    function TextArea(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    TextArea.prototype.ngOnInit = function () {
        this.data.props.currentValue = this.data.props.defaultValue;
        this.data.props.currentLabel = this.data.props.defaultValue;
    };
    TextArea.prototype.onBlur = function () {
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            /* if key is undefined then push in array */
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            /*  */
            if (this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.key == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], TextArea.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], TextArea.prototype, "devMode", void 0);
    TextArea = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'text_area',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: "<div class=\"input-field\"> \n                <textarea  class=\"validate\" (blur)=\"onBlur()\"  [required]=\"data.required\" placeholder=\"{{data.config.placeholder}}\" (change)=\"data.props.currentLabel=data.props.currentValue\" [(ngModel)]=\"data.props.currentValue\" ></textarea>\n                <label for=\"first_name\">{{data.props.title}}</label>\n             </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], TextArea);
    return TextArea;
    var _a, _b;
}());


/***/ },

/***/ 839:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TextField; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextField = (function () {
    function TextField(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    TextField.prototype.ngOnInit = function () {
        this.data.props.currentValue = this.data.props.defaultValue;
        this.data.props.currentlabel = this.data.props.defaultValue;
    };
    Object.defineProperty(TextField.prototype, "isValid", {
        get: function () {
            if (this.form.controls[this.data._id].errors) {
                if (this.form.controls[this.data._id].errors['required']) {
                    this.ValidationMessage = this.data.config.validations.required.message + '!';
                    return false;
                }
                else if (this.form.controls[this.data._id].errors['minval']) {
                    this.ValidationMessage = 'Minimum ' + this.data.props.minVal + ' value required!';
                    return false;
                }
                else if (this.form.controls[this.data._id].errors['maxval']) {
                    this.ValidationMessage = "Can't Go beyond " + this.data.props.maxVal + '!';
                    return false;
                }
                else if (this.form.controls[this.data._id].errors['minlength']) {
                    this.ValidationMessage = 'Minimum ' + this.form.controls[this.data._id].errors['minlength'].requiredLength + ' character required!';
                    return false;
                }
                else if (this.form.controls[this.data._id].errors['EmailError']) {
                    this.ValidationMessage = 'Not A Valid Email!';
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    TextField.prototype.onBlur = function () {
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            /* if key is undefined then push in array */
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            /*  */
            if (this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], TextField.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], TextField.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]) === 'function' && _a) || Object)
    ], TextField.prototype, "form", void 0);
    TextField = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'textfield',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: __webpack_require__(850)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object])
    ], TextField);
    return TextField;
    var _a, _b, _c;
}());


/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = "/* Ion.RangeSlider\n// css version 2.0.3\n// © 2013-2014 Denis Ineshin | IonDen.com\n// ===================================================================================================================*/\n\n/* =====================================================================================================================\n// RangeSlider */\n\n.irs {\n    position: relative; display: block;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n     -khtml-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n    .irs-line {\n        position: relative; display: block;\n        overflow: hidden;\n        outline: none !important;\n    }\n        .irs-line-left, .irs-line-mid, .irs-line-right {\n            position: absolute; display: block;\n            top: 0;\n        }\n        .irs-line-left {\n            left: 0; width: 11%;\n        }\n        .irs-line-mid {\n            left: 9%; width: 82%;\n        }\n        .irs-line-right {\n            right: 0; width: 11%;\n        }\n\n    .irs-bar {\n        position: absolute; display: block;\n        left: 0; width: 0;\n    }\n        .irs-bar-edge {\n            position: absolute; display: block;\n            top: 0; left: 0;\n        }\n\n    .irs-shadow {\n        position: absolute; display: none;\n        left: 0; width: 0;\n    }\n\n    .irs-slider {\n        position: absolute; display: block;\n        cursor: default;\n        z-index: 1;\n    }\n        .irs-slider.single {\n\n        }\n        .irs-slider.from {\n\n        }\n        .irs-slider.to {\n\n        }\n        .irs-slider.type_last {\n            z-index: 2;\n        }\n\n    .irs-min {\n        position: absolute; display: block;\n        left: 0;\n        cursor: default;\n    }\n    .irs-max {\n        position: absolute; display: block;\n        right: 0;\n        cursor: default;\n    }\n\n    .irs-from, .irs-to, .irs-single {\n        position: absolute; display: block;\n        top: 0; left: 0;\n        cursor: default;\n        white-space: nowrap;\n    }\n\n.irs-grid {\n    position: absolute; display: none;\n    bottom: 0; left: 0;\n    width: 100%; height: 20px;\n}\n.irs-with-grid .irs-grid {\n    display: block;\n}\n    .irs-grid-pol {\n        position: absolute;\n        top: 0; left: 0;\n        width: 1px; height: 8px;\n        background: #000;\n    }\n    .irs-grid-pol.small {\n        height: 4px;\n    }\n    .irs-grid-text {\n        position: absolute;\n        bottom: 0; left: 0;\n        white-space: nowrap;\n        text-align: center;\n        font-size: 9px; line-height: 9px;\n        padding: 0 3px;\n        color: #000;\n    }\n\n.irs-disable-mask {\n    position: absolute; display: block;\n    top: 0; left: -1%;\n    width: 102%; height: 100%;\n    cursor: default;\n    background: rgba(0,0,0,0.0);\n    z-index: 2;\n}\n.irs-disabled {\n    opacity: 0.4;\n}\n.lt-ie9 .irs-disabled {\n    filter: alpha(opacity=40);\n}\n\n\n.irs-hidden-input {\n    position: absolute !important;\n    display: block !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 0 !important;\n    height: 0 !important;\n    font-size: 0 !important;\n    line-height: 0 !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    outline: none !important;\n    z-index: -9999 !important;\n    background: none !important;\n    border-style: solid !important;\n    border-color: transparent !important;\n}\n"

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = "/* Ion.RangeSlider, Simple Skin\n// css version 2.0.3\n// © Denis Ineshin, 2014    https://github.com/IonDen\n// © guybowden, 2014        https://github.com/guybowden\n// ===================================================================================================================*/\n\n/* =====================================================================================================================\n// Skin details */\n\n.irs {\n    height: 55px;\n}\n.irs-with-grid {\n    height: 75px;\n}\n.irs-line {\n    height: 10px; top: 33px;\n    background: #EEE;\n    background: linear-gradient(to bottom, #DDD -50%, #FFF 150%); /* W3C */\n    border: 1px solid #CCC;\n    border-radius: 16px;\n    -moz-border-radius: 16px;\n}\n    .irs-line-left {\n        height: 8px;\n    }\n    .irs-line-mid {\n        height: 8px;\n    }\n    .irs-line-right {\n        height: 8px;\n    }\n\n.irs-bar {\n    height: 10px; top: 33px;\n    border-top: 1px solid #428bca;\n    border-bottom: 1px solid #428bca;\n    background: #428bca;\n    background: linear-gradient(to top, rgba(66,139,202,1) 0%,rgba(127,195,232,1) 100%); /* W3C */\n}\n    .irs-bar-edge {\n        height: 10px; top: 33px;\n        width: 14px;\n        border: 1px solid #428bca;\n        border-right: 0;\n        background: #428bca;\n        background: linear-gradient(to top, rgba(66,139,202,1) 0%,rgba(127,195,232,1) 100%); /* W3C */\n        border-radius: 16px 0 0 16px;\n        -moz-border-radius: 16px 0 0 16px;\n    }\n\n.irs-shadow {\n    height: 2px; top: 38px;\n    background: #000;\n    opacity: 0.3;\n    border-radius: 5px;\n    -moz-border-radius: 5px;\n}\n.lt-ie9 .irs-shadow {\n    filter: alpha(opacity=30);\n}\n\n.irs-slider {\n    top: 25px;\n    width: 27px; height: 27px;\n    border: 1px solid #AAA;\n    background: #DDD;\n    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(220,220,220,1) 20%,rgba(255,255,255,1) 100%); /* W3C */\n    border-radius: 27px;\n    -moz-border-radius: 27px;\n    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);\n    cursor: pointer;\n}\n\n.irs-slider.state_hover, .irs-slider:hover {\n    background: #FFF;\n}\n\n.irs-min, .irs-max {\n    color: #333;\n    font-size: 12px; line-height: 1.333;\n    text-shadow: none;\n    top: 0;\n    padding: 1px 14px;\n    background: rgba(0,0,0,0.1);\n    border-radius: 8px;\n    -moz-border-radius: 8px;\n}\n\n.lt-ie9 .irs-min, .lt-ie9 .irs-max {\n    background: #ccc;\n}\n\n.irs-from {\n    color: #fff;\n    font-size: 14px; line-height: 1.333;\n    text-shadow: none;\n    padding: 1px 14px;\n    background: #428bca;\n    border-radius:8px;\n    -moz-border-radius: 8px;\n}\n\n.irs-to {\n    color: #fff;\n    font-size: 14px; line-height: 1.333;\n    text-shadow: none;\n    padding: 1px 14px;\n    background: #428bca;\n    border-radius:8px;\n    -moz-border-radius: 8px;\n}\n\n.irs-single {\n    color: #fff;\n    font-size: 12px; line-height: 1.333;\n    text-shadow: none;\n    padding: 1px 14px;\n    background: #428bca;\n    border-radius: 8px;\n    -moz-border-radius: 8px;\n}\n.lt-ie9 .irs-from, .lt-ie9 .irs-to, .lt-ie9 .irs-single {\n    background: #999;\n}\n\n.irs-grid {\n    height: 27px;\n}\n.irs-grid-pol {\n    opacity: 0.5;\n    background: #428bca;\n}\n.irs-grid-pol.small {\n    background: #999;\n}\n\n.irs-grid-text {\n    bottom: 5px;\n    color: #99a4ac;\n}\n\n.irs-disabled {\n}\n"

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = "<div class=\"check-comp\" [formGroup]=\"form.controls[data._id]\">\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\n    <img [src]=\"data.imageURL\" />\n  </div>\n  <div [class.checkbox-outer-base]=\"!data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\n       [class.checkbox-outer]=\"data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\n       [class.pic-selector]=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"\n       [class.active]=\"checkbox_item.selected\"\n       *ngFor=\"let checkbox_item of data.options, let i = index\" tabindex=\"0\"\n  >\n    <label onclick=\"\" class=\"control control--checkbox\"  [ngStyle]=\"{'background-image': 'url('+((data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card')?checkbox_item.imageURL:'')+')'}\" >\n      <span *ngIf=\"!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'\">{{checkbox_item.label}}</span>\n      <input type=\"checkbox\"\n             [id]=\"data._id\"\n             (change)=\"onChange($event,i)\"\n             id=\"{{data._id}}{{i}}\"\n             [checked]=\"checkbox_item.selected\"\n             [formControlName]=\"i\"\n             value=\"{{checkbox_item.value}}\"\n      >\n      <div class=\"control__indicator check-set\">\n        <i\n          class=\"material-icons\"\n          *ngIf=\"checkbox_item.icon != '' && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\n        >\n          {{checkbox_item.icon}}\n        </i>\n        <i\n          class=\"material-icons\"\n          *ngIf=\"checkbox_item.icon == '' && data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\n        >\n          landscape\n        </i>\n        <div class=\"label-image\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"></div>\n        <span class=\"img-overlay\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\n          <span class=\"text-overlay\">\n            <span>{{checkbox_item.label}}</span>\n          </span>\n        </span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"errorMessage\" *ngIf=\"(form.controls[data._id].touched || touched) && !isValid\">\n    {{data.config.validations.required.message}}\n  </div>\n</div>\n"

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(formGroup())\" [formGroup]=\"formGroup()\"  *ngIf=\"data.visible\" novalidate>\n  <div class=\"container-temp text-center\">\n    <div class=\"lead-heading-temp1\" *ngIf=\"page && page.type ==='Result'\">\n      {{page.sections[2].title}}\n    </div>\n    <div>\n      <div class=\"input-section\">\n        <div *ngFor=\"let field of data.fields, let i=index\" class=\"input-outer\" [class.w100]=\"data.fields.length==1\">\n          <input tabindex=\"0\"\n                 placeholder=\"{{field.placeholder}}\"\n                 type=\"{{field.type}}\"\n                 (blur) = \"onTouched(i)\"\n                 [formControlName]=\"i\"\n                 [(ngModel)]=\"field.value\"\n          >\n          <div *ngIf=\"formGroup().controls[i].touched\">\n                    <span\n                      *ngIf=\"formGroup().controls[i].errors && formGroup().controls[i].errors['required']\">\n                     {{field.placeholder}} is required.\n                    </span>\n            <span\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['EmailError']\">\n                      Not a valid Email!\n                    </span>\n            <span\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['PhoneNumberError']\">\n                      Not a valid Phone Number!\n                    </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-temp text-center\">\n    <button class=\"btn prime-action\"\n    >\n      <!--[themeColor]=\"['background']\"-->\n      {{data.props.title}}\n    </button>\n  </div>\n</form>\n"

/***/ },

/***/ 844:
/***/ function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(formGroup())\" [formGroup]=\"formGroup()\" novalidate>\n  <div class=\"container-temp text-center\">\n    <div class=\" text-center question-section\">\n      <div class=\"input-section\">\n        <div *ngFor=\"let field of data.fields, let i=index\" class=\"input-outer\" [class.w100]=\"data.fields.length==1\">\n          <div class=\"section-head\"> <div class=\"pull-left\">{{field.name}} </div> </div>\n          <input tabindex=\"0\"\n                 placeholder=\"{{field.placeholder}}\"\n                 type=\"{{field.type}}\"\n                 (blur) = \"onTouched(i)\"\n                 [formControlName]=\"i\"\n                 [(ngModel)]=\"field.value\"\n          >\n          <div *ngIf=\"formGroup().controls[i].touched\">\n                    <span\n                      *ngIf=\"formGroup().controls[i].errors && formGroup().controls[i].errors['required']\">\n                      {{field.placeholder}} is required.\n                    </span>\n            <span\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['EmailError']\">\n                      Not a valid Email!\n                    </span>\n            <span\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['PhoneNumberError']\">\n                      Not a valid Phone Number!\n                    </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"w100 text-center\">\n    <button class=\"btn prime-action sliding-next og-lead-ques\"\n    >\n      <!--[themeColor]=\"['background']\"-->\n      {{data.props.title}}\n    </button>\n  </div>\n</form>\n"

/***/ },

/***/ 845:
/***/ function(module, exports) {

module.exports = "<div class=\"check-comp\" [formGroup]=\"form.controls[data._id]\">\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\n    <img [src]=\"data.imageURL\" />\n  </div>\n  <div class=\"radio-outer\" \n    [class.active]=\"radio_item.selected\" \n    *ngFor=\"let radio_item of data.options, let i = index\" \n    tabindex=\"0\"\n    [class.pic-selector]=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"\n  >\n    <label onclick=\"\" class=\"control control--radio lable-style\" [ngStyle]=\"{'background-image': 'url('+((data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card')?radio_item.imageURL:'')+')'}\">\n      <span *ngIf=\"!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'\">{{radio_item.label}}</span>\n      <input type=\"radio\"\n             id=\"{{data._id}}{{i}}\"\n             [formControlName]=\"i\"\n             [checked]=\"radio_item.selected\"\n             (change)=\"onClick(radio_item)\"\n      />\n      <div class=\"control__indicator icon-set\" [class.icon-set]=\"data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\">\n        <i\n          class=\"material-icons\"\n          *ngIf=\"(radio_item.icon != '' && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'))\"\n        >\n          {{radio_item.icon}}\n        </i>\n        <i\n          class=\"material-icons\"\n          *ngIf=\"radio_item.icon == '' && data.isIconPresent  && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\n        >\n          landscape\n        </i>\n        <div class=\"label-image\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"></div>\n        <span class=\"img-overlay\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\n          <span class=\"text-overlay\">\n            <span>{{radio_item.label}}</span>\n          </span>\n        </span>\n      </div>\n    </label>\n  </div>\n  <!-- <span *ngIf=\"form.controls[data._id].touched\">\n      <div class=\"errorMessage\" *ngIf=\"!isValid\">{{data.config.validations.required.message}}</div>\n  </span> -->\n  <div class=\"errorMessage\" *ngIf=\"(form.controls[data._id].touched) && !isValid\">\n    {{data.config.validations.required.message}}\n  </div>\n</div>"

/***/ },

/***/ 846:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"data.visible == true\">\n  <div\n\n  >\n    <div\n      class=\"small-top-sec\"\n      *ngIf=\"!data.hasOwnProperty('result')\"\n      [htmlProcess]=\"data.props.title\"\n    >\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 847:
/***/ function(module, exports) {

module.exports = "<div class=\"dropdown-set\">\n  <div class=\"control-group select\" [formGroup]=\"form\" tabindex=\"0\">\n    <select class=\"demo-default {{data._id}} \" [(ngModel)]=\"data.props.currentValue\" [id]=\"data._id\" (change)=\"onChange($event)\" [formControlName]=\"data._id\">\n      <option tabindex=\"0\"\n              *ngFor=\"let option of data.options; let i = index\"\n              id=\"{{data._id}}{{i}}\"\n              [value]=\"option.value\"\n              [selected]=\"option.selected\"\n      >\n        {{option.label}}\n      </option>\n    </select>\n    <div class=\"select__arrow\"></div>\n    <div class=\"errorMessage\" *ngIf=\"!form.controls[data._id].pristine && !isValid\">\n      {{data.config.validations.required.message}}\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 848:
/***/ function(module, exports) {

module.exports = "<div class=\"slider-set\">\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\n    <img [src]=\"data.imageURL\" />\n  </div>\n  <div class=\"range-slider\">\n    <div class=\"well1\" tabindex=\"0\">\n      <input id=\"{{data._id}}\" type=\"text\" />\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 849:
/***/ function(module, exports) {

module.exports = "<div [formGroup]=\"form.controls[data._id]\">\n\t<div class=\"switch-outer text-right\" *ngFor=\"let switch_item of data.options, let i = index\">\n\t\t<div class=\"switch-que\">{{switch_item.label}}</div>\n\t\t<div class=\"pull-right\">\n\t\t\t<div class=\"switch \">\n\t\t\t\t<input \n\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t[id]=\"data._id\"\n\t\t\t\t\t[formControlName]=\"i\"\n\t\t\t\t\tclass=\"cmn-toggle cmn-toggle-round-flat\"  \n\t\t\t\t\tid=\"{{data._id}}{{i}}\"\n\t\t\t\t\t[checked]=\"switch_item.selected\"\n\t\t\t\t\t(change)=\"onChange(switch_item,i)\"\n\t\t\t\t\tplaceholder=\"{{data.config.placeholder}}\" \n\t\t\t\t\tvalue=\"{{switch_item.value}}\"\n\t\t\t\t>\n\t\t\t\t<label attr.for=\"{{data._id}}{{i}}\"></label>\n\t\t\t\t\t<!--[themeColor]=\"['background']\"-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"errorMessage\" *ngIf=\"form.controls[data._id].touched && !isValid\">\n\t\t{{data.config.validations.required.message}}\n\t</div>\n</div>"

/***/ },

/***/ 850:
/***/ function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\n    <img [src]=\"data.imageURL\" />\n  </div>\n  <div class=\"input-field\">\n    <input tabindex=\"0\"\n           type=\"{{data.config.type}}\"\n           placeholder=\"{{data.config.placeholder}}\"\n           [id]=\"data._id\"\n           [(ngModel)]=\"data.props.currentValue\"\n           (change)=\"data.props.currentLabel=data.props.currentValue\"\n           [formControlName]=\"data._id\"\n           (blur)=\"onBlur()\"\n    >\n  </div>\n  <div class=\"errorMessage\" *ngIf=\"form.controls[data._id].touched && !isValid\">{{ValidationMessage}}</div>\n</div>\n"

/***/ },

/***/ 882:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_emails__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userCompany__ = __webpack_require__(408);
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

/***/ 889:
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