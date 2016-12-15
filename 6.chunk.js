webpackJsonp([6,12],{

/***/ 1017:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_feature_access_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_company__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_user__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__analytics_services_calculator_analytics_service__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_marketing_service__ = __webpack_require__(115);
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
    function DashboardComponent(_calculatorAnalytics, _membershipService, subDomainService, companyService, _dashboardService, _builderService, _featureAuthService, _cookieService, _router, fb, _script, _marketingService) {
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
        this._script.load('marketing')
            .then(function (data) {
            console.log('Scripts Loaded', data);
            if (data.length && data[0].status == 'Loaded')
                _marketingService.initMarketingStuff();
        })
            .catch(function (error) {
            //any error
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            companyname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)])],
            domain: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('^[a-zA-Z0-9]*$')])]
        });
        this.inviteUserForm = this.fb.group({
            userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, , __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)])],
            userEmail: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__["a" /* EmailValidator */].format])],
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
        this._script.load('bootBox')
            .then(function (data) {
            console.log('Scripts Loaded', data);
        })
            .catch(function (error) {
            //any error
        });
        console.log('localStorage.getItem', localStorage.getItem('role'));
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery('#calquiz-modal').on('hidden.bs.modal', function () {
            _this.reset = false;
        });
        /*hide help icon on dashboard for mobile screen */
        setTimeout(function () { return jQuery('.builder-help-icon').addClass('hide'); }, 2000);
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
            // if (localStorage.getItem('temp_type') === 'Recommendation') {
            //   localStorage.setItem('temp_name', 'one-page-card');
            //   //this._router.navigate(['/builder']);
            //   window.location.href = environment.PROTOCOL + this.subDomainService.subDomain.sub_domain + 
            // '.' + environment.APP_EXTENSION + '/builder/';
            // } 
            // else {
            this._router.navigate(['/templates']);
        }
        else {
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
        }
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
                jQuery('.modal-backdrop').insertAfter('#premiumModal');
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
    DashboardComponent.prototype.userCheckLimit = function () {
        // console.log("<<<<<<<<<<<",this.currentCompanyUsers.length,"************************",this._featureAuthService.features.users);
        if (this.currentCompanyUsers.length < this._featureAuthService.features.users) {
            jQuery('#add-new-user').modal('show');
            jQuery('#premiumModal').attr('active', false);
            this.callGA('ADDUSER');
        }
        else {
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
            console.log('sdfsdfsdf', error);
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
        this.isAnalyticsAvailable = this._featureAuthService.features.analytics;
        if (this.isAnalyticsAvailable) {
            this.openOldCalc(app, tabName);
        }
        else {
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
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
            template: __webpack_require__(1147),
            styles: [__webpack_require__(117), __webpack_require__(116), __webpack_require__(1072)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["h" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["h" /* MembershipService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["a" /* SubDomainService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["d" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["d" /* CompanyService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["i" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["i" /* DashboardService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__["a" /* BuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__["a" /* BuilderService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_feature_access_service__["a" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_services_feature_access_service__["a" /* FeatureAuthService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["b" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["b" /* CookieService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["c" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["c" /* Script */]) === 'function' && _l) || Object, (typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_11__shared_services_marketing_service__["a" /* MarketingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_11__shared_services_marketing_service__["a" /* MarketingService */]) === 'function' && _m) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());


/***/ },

/***/ 1072:
/***/ function(module, exports) {

module.exports = "body, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\r\n  font-family: 'montserratregular' !important;\r\n  font-weight: 300  !important;\r\n}\r\n\r\n.dash-circle{float:left; width:80px; height:80px;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px; background:#eceff0; color:#444f54;\r\n  text-align:center; font-family:montserratregular; font-size:24px; padding-top:23px; margin-right:20px;  text-transform: uppercase;}\r\n\r\n.dash-prog-outer{float:left; width:300px;}\r\n.dash-prog-outer h2{\r\n  float: left;\r\n  color: #62696d;\r\n  font-size: 19px!important;\r\n  font-family: montserratlight!important;\r\n  margin: 16px 0 8px;\r\n  line-height: 24px;\r\n}\r\n.dash-prog-outer h5{ float:left;color:#f56151; font-size:13px; font-family:montserratregular;  text-transform:uppercase; margin-top:0; max-width: 90%;}\r\n\r\n.circle-sec{ float:left; width:33%;}\r\n\r\n.circle-cal-outer{float:left; width:100px;}\r\n.circle-cal-outer h2{ color: #62696d;\r\n  float: left;\r\n  font-family: montserratregular !important;\r\n  font-size: 24px !important;\r\n  margin: 15px 0 5px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  width: 102%;}\r\n.circle-cal-outer h5{ float:left;color:#8e989f; font-size:10px; font-family:montserratregular;  text-transform:uppercase; margin-top:0;}\r\n\r\n.dash-circle-red{float:left; width:77px; height:77px;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px; color:#cbd1d4;\r\n  text-align:center; font-family:montserratregular; padding-top:18px; margin-right:20px; border:3px solid #fb545b;  }\r\n.dash-circle-pink{ float:left; width:77px; height:77px;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px; color:#cbd1d4;\r\n  text-align:center; font-family:montserratregular; padding-top:18px; margin-right:20px; border:3px solid #ff5796;  }\r\n.dash-circle-d-pink{ float:left; width:77px; height:77px;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px; color:#cbd1d4;\r\n  text-align:center; font-family:montserratregular;  padding-top:18px; margin-right:20px; border:3px solid #c859b7;  }\r\n.dash-circle-red i,.dash-circle-pink i,.dash-circle-d-pink i{ font-size:35px;}\r\n\r\n\r\n/* ####  dashboard 3 boxes css start (sahil) ### */\r\n.dashboard-topsec{\r\n  padding-top: 25px;\r\n  background: #f6f8f9;\r\n  padding-bottom: 25px;\r\n}\r\n.user-outr{\r\n  float: right;\r\n  width: 70%;\r\n  padding: 0;\r\n}\r\n.user-outr li{\r\n  float: left;\r\n}\r\n.user-outr li a{\r\n  float: left;\r\n  width: auto;\r\n  border: 2px solid #dae2e6;\r\n  border-radius: 50%;\r\n  margin-left: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.user-outr li a:hover{\r\n  border: 2px solid #f56151;\r\n}\r\n.user-outr li a img{\r\n  float: left;\r\n  width: 34px;\r\n  height: 34px;\r\n  border-radius: 50%;\r\n}\r\n.user-outr li a span{\r\n  float: none;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  padding-top: 1px;\r\n  color: #f56151;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n}\r\n.user-outr li a.more-users{\r\n  float: left;\r\n  width: 35px;\r\n  border: 2px solid #dae2e6;\r\n  border-radius: 50%;\r\n  margin-left: 5px;\r\n  margin-bottom: 5px;\r\n  background: #fff;\r\n  color: #dae2e6;\r\n  height: 35px;\r\n  text-align: center;\r\n  padding-top: 3px;\r\n  margin-top: 3px;\r\n}\r\n.user-outr li a.more-users:hover{\r\n  color: #fb545b;\r\n  border: 2px solid #fb545b;\r\n}\r\n.user-outr li a.single-user{\r\n  width: 34px;\r\n  height: 34px;\r\n  float: left;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  padding-top: 6px;\r\n  color: #f56151;\r\n  text-transform: uppercase;\r\n}\r\n/* Start: popover effect */\r\n.popover-wrapper .more-popover-block {\r\n  position: relative;\r\n  top: 10px;\r\n  left: -76px;\r\n  min-width: 180px;\r\n  padding: 8px;\r\n  font-size: 12px;\r\n  border-radius: 0px;\r\n  background: #62696d;\r\n  /* color: #fff; */\r\n  border-radius: 4px !important;\r\n  border: none;\r\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\r\n  display: none;\r\n  z-index: 9;\r\n}\r\n\r\n.popover-wrapper:hover .more-popover-block {\r\n  display: block;\r\n  float: left;\r\n  padding: 0;\r\n}\r\n\r\n.popover-wrapper .more-popover-block:before {\r\n  position: absolute;\r\n  top: -8px;\r\n  right:83px;\r\n  display: inline-block;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 8px solid #62696d;\r\n  border-left: 6px solid transparent;\r\n  border-bottom-color: #62696d;\r\n  content: '';\r\n}\r\n.popover-wrapper .single-user.more-popover-block {\r\n  position: relative;\r\n  top: 25px;\r\n  left: -56px;\r\n  min-width: 150px;\r\n  padding: 8px;\r\n  font-size: 12px;\r\n  border-radius: 0px;\r\n  background: #62696d;\r\n  /* color: #fff; */\r\n  border-radius: 4px !important;\r\n  border: none;\r\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\r\n  display: none;\r\n  z-index: 9;\r\n}\r\n.popover-wrapper:hover .single-user.more-popover-block {\r\n  display: block;\r\n  float: left;\r\n  padding: 0;\r\n}\r\n\r\n.popover-wrapper .single-user.more-popover-block:before {\r\n  position: absolute;\r\n  top: -8px;\r\n  right: 72px;\r\n  display: inline-block;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 8px solid #62696d;\r\n  border-left: 6px solid transparent;\r\n  border-bottom-color: #62696d;\r\n  content: '';\r\n}\r\n.popover-wrapper .single-user.more-popover-block p{\r\n  float: left;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  margin: 0;\r\n  padding: 6px;\r\n  padding-bottom: 0;\r\n}\r\n.popover-wrapper .single-user.more-popover-block label{\r\n  float: left;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 11px;\r\n  text-align: center;\r\n  padding: 6px;\r\n  padding-top: 0;\r\n}\r\n\r\n\r\n\r\n/* End: popover effect */\r\n\r\n\r\n\r\n.more-users .more-popover-block ul{\r\n  float: left;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.more-users .more-popover-block ul li{\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.more-users .more-popover-block ul li a{\r\n  float: left;\r\n  border: none;\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin: 0;\r\n}\r\n.more-users .more-popover-block ul li a.hvr-sweep-to-right:before{\r\n  background: #71787b ;\r\n}\r\n.more-users .more-popover-block ul li a span{\r\n  float: left;\r\n  border: none;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  background: #f6f8f9;\r\n  font-size: 14px;\r\n  padding-top: 5px;\r\n}\r\n.more-users .more-popover-block ul li a .more-users-list{\r\n  float: left;\r\n  width: 66%;\r\n  margin-left: 10px;\r\n}\r\n.more-users .more-popover-block ul li a .more-users-list p{\r\n  float: left;\r\n  width: 100%;\r\n  text-align: left;\r\n  color: #fff;\r\n  font-size: 12px;\r\n  margin: 0;\r\n}\r\n.more-users .more-popover-block ul li a .more-users-list label{\r\n  float: left;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 11px;\r\n  text-align: left;\r\n}\r\n.user-outr li a.add-user{\r\n  float: left;\r\n  width: 35px;\r\n  border: 2px solid #fb545b;\r\n  border-radius: 50%;\r\n  margin-left: 5px;\r\n  margin-bottom: 5px;\r\n  background: #fb545b;\r\n  color: #fff;\r\n  height: 35px;\r\n  text-align: center;\r\n  padding-top: 3px;\r\n  margin-top: 3px;\r\n}\r\n.dash-boxes-outr{\r\n  float: left;\r\n  width: 100%;\r\n  border-top: 1px solid #dae2e6;\r\n  padding: 35px;\r\n  background: #f6f8f9;\r\n  min-height: 77vh;\r\n}\r\n.dash-box{\r\n  border: 1px solid #dae2e6;\r\n  min-height: 250px;\r\n  float: left;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  margin-bottom: 30px;\r\n  position: relative;\r\n}\r\n.dash-box:hover{\r\n  box-shadow: 0 2px 5px 1px rgba(0,0,0,0.2);\r\n}\r\n.dash-box figure{\r\n  height: 187px;\r\n  overflow: hidden;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: -1;\r\n}\r\n.dash-box-top{\r\n  background-image: url(app/site/components/+dashboard/images/dash-top.jpg);\r\n  background-size: cover;\r\n  background-position: center center;\r\n  float: left;\r\n  width: 100%;\r\n  min-height: 187px;\r\n\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n}\r\n.dash-box:hover .dash-box-top{\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n}\r\n\r\n\r\n.dash-box-bottom{\r\n  padding: 28px;\r\n  width: 100%;\r\n  float: left;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  background: #fff;\r\n}\r\n.dash-box-bottom ul{\r\n  padding: 0px;\r\n  float: left;\r\n}\r\n.dash-box-bottom ul li{\r\n  float: left;\r\n  width: 100%;\r\n  margin-top: 22px;\r\n}\r\n.dash-box-bottom ul li i{\r\n  float: left;\r\n  color: #ccc;\r\n  font-size: 24px;\r\n  padding-right: 20px;\r\n}\r\n.switch-outr{\r\n  float: right;\r\n}\r\n.dash-box-bottom ul li label.text{\r\n  font-size:13px;\r\n  color:#999999;\r\n  float: left;\r\n  text-transform: uppercase;\r\n  margin-top: 3px;\r\n  margin-bottom: 0px;\r\n  font-weight: normal;\r\n}\r\n.dash-box-bottom ul li span.value{\r\n  font-size:20px;\r\n  color:#fb545b;\r\n  float: right;\r\n  text-align: right;\r\n}\r\n.dash-box2{\r\n  float: left;\r\n  width: 100%;\r\n  min-height: 406px;\r\n  cursor: pointer;\r\n  margin-bottom: 30px;\r\n}\r\n.dash-box2:hover{\r\n  box-shadow: 0 2px 5px 1px rgba(0,0,0,0.1);\r\n}\r\n.dash-box2 figure{\r\n  height: 187px;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 93%;\r\n  z-index: -1;\r\n}\r\n.dash-box-figure2{\r\n  min-height:336px;\r\n}\r\n.dash-top2{\r\n  background-image: url(app/site/components/+dashboard/images/dash-top2.jpg);\r\n  background-size: cover;\r\n  float: left;\r\n  width: 100%;\r\n  min-height: 336px;\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n}\r\n.dash-box2:hover .dash-top2{\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n}\r\n.dash-top2-text{\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.dash-top2-textinner{\r\n  float: left;\r\n  padding: 28px;\r\n  position: absolute;\r\n  min-height: 187px;\r\n  top: 0px;\r\n  width: 100%;\r\n  background: rgba(0, 0, 0, 0.3) none repeat scroll 0 0;\r\n}\r\n.dash-top2-textinner label{\r\n  float: left;\r\n  width: auto;\r\n  color: #ffffff;\r\n  font-size: 12px;\r\n  line-height: normal;\r\n  font-family: 'montserratlight';\r\n}\r\n.dash-top2-textinner i{\r\n  position: relative;\r\n  float: left;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  margin-left: 5px;\r\n}\r\n.dash-top2-textinner h3{\r\n  float: left;\r\n  width: 94%;\r\n  color: #ffffff;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  line-height: 22px;\r\n  margin-top: 0px;\r\n  display: block;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n.dash-top3{\r\n  background: rgb(248,248,248); /* Old browsers */\r\n  background: -moz-linear-gradient(top,  rgba(248,248,248,1) 0%, rgba(240,240,240,1) 100%); /* FF3.6-15 */\r\n  background: -webkit-linear-gradient(top,  rgba(248,248,248,1) 0%,rgba(240,240,240,1) 100%); /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom,  rgba(248,248,248,1) 0%,rgba(240,240,240,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8f8f8', endColorstr='#f0f0f0',GradientType=0 ); /* IE6-9 */\r\n\r\n  width: 100%;\r\n  min-height: 411px;\r\n  display: table;\r\n}\r\n.dash-top3:hover .dash-top3circletable{\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n}\r\n.dash-top3circletable{\r\n  width: 100%;\r\n  float: none;\r\n  text-align: center;\r\n  display: table-cell;\r\n  height: 409px;\r\n  vertical-align: middle;\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n}\r\n.dash-top3-circle{\r\n  background:#fcfcfc;\r\n  height:151px;\r\n  width:151px;\r\n  border-radius:50%;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  color: #999999;\r\n  font-size: 13px;\r\n  line-height: normal;\r\n  display: inline-block;\r\n  padding-top: 46px;\r\n}\r\n.dash-top3-circle:hover,.dash-top3-circle:focus{\r\n  color: #fb545b;\r\n}\r\n.dash-top3-circle i{\r\n  display:block;\r\n  color: #fb545b;\r\n  font-size: 24px;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.dash-top3-textinner{\r\n  float: left;\r\n  width: 100%;\r\n  padding: 28px;\r\n}\r\n.dash-top3-textinner label{\r\n  float: left;\r\n  width: auto;\r\n  color: #62696d;\r\n  font-size: 12px;\r\n  line-height: normal;\r\n  font-family: 'montserratlight';\r\n}\r\n.dash-top3-textinner i{\r\n  position: relative;\r\n  float: left;\r\n  color: #fff;\r\n  font-size: 18px;\r\n  margin-left: 5px;\r\n}\r\n.dash-top3-textinner h3{\r\n  float: left;\r\n  width: 100%;\r\n  color: #62696d;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  line-height: 22px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.dash-prog-outer .company-dropdown-wrapper{\r\n  margin: 0px;\r\n  margin-left: 5px;\r\n  float: left;\r\n  min-height: 35px;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\r\n  font-size: 18px;\r\n  color: #fff;\r\n  padding: 0;\r\n  position: relative;\r\n  top: 5px;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\r\n  color: #fff;\r\n  padding: 5px 15px 10px;\r\n  text-transform: capitalize;\r\n  font-family: montserratregular;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle{\r\n  line-height: normal !important;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i{\r\n  color: #f56151;\r\n  font-size: 20px;\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i:hover{\r\n  color: #f87b80;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-toggle span.company-dropdown-title-active{\r\n  width: 90%;\r\n  float: left;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before{\r\n  right: 91px;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.hvr-sweep-to-right::before{\r\n  background: #71787b none repeat scroll 0 0;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n  top: 27px;\r\n  left: -80px;\r\n  min-width: 190px;\r\n  font-size: 12px;\r\n  border-radius: 0px;\r\n  /* background: #f87b80; */\r\n  /* color: #fff; */\r\n  background: #62696d;\r\n  border-radius: 4px !important;\r\n  border: none;\r\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\r\n  display: none;\r\n  z-index: 9;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper:hover .dropdown-menu {\r\n  display: block;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a {\r\n  color: #fff;\r\n  padding: 10px 15px;\r\n  text-transform: capitalize;\r\n  font-family: montserratregular;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-block {\r\n  float: left;\r\n  width: 10%;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\r\n  background: #fff;\r\n  border-radius: 50px;\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  color: #62696d;\r\n  text-align: center;\r\n  padding-top: 3px;\r\n  font-size: 11px;\r\n  top: 13px;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\r\n  background: #fff;\r\n  border-radius: 50px;\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  color: #62696d;\r\n  text-align: center;\r\n  padding-top: 3px;\r\n  font-size: 11px;\r\n  top: 13px;\r\n}\r\n.dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\r\n  float: left;\r\n  width: 95%;\r\n}\r\n.company-dropdown-wrapper .dropdown-menu > li > a .company-site {\r\n  float: left;\r\n  width: 95%;\r\n  font-size: 10px;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper{\r\n  float: right;\r\n  margin: 0;\r\n  width: 6%;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-toggle{\r\n  line-height: normal;\r\n  text-align: left;\r\n  width: 100%;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-toggle span{\r\n  color: #fff;\r\n  line-height: normal;\r\n  width: 90% !important;\r\n  float: left;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu{\r\n  left: -67px;\r\n  min-width: 155px;\r\n  padding: 10px 0;\r\n  top: 28px;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu::before{\r\n  right: 65px;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu li a{\r\n  width: 100%;\r\n  float: left;\r\n  padding: 5px 10px;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu li a.hvr-sweep-to-right::before{\r\n  background: #71787b none repeat scroll 0 0;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block{\r\n  float: left;\r\n  margin-right: 3px;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block i{\r\n  font-size: 16px;\r\n  color: #fff !important;\r\n  margin: 0px;\r\n  margin-right: 10px;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block-content{\r\n  float: left;\r\n  margin: 0px;\r\n  width: 78%;\r\n  color: #fff;\r\n}\r\n.dash-top2-textinner .company-dropdown-wrapper .dropdown-menu .company-block-content .company-title{\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.dash-top2-textinner .das-box-menu\r\n{\r\n  float: right;\r\n  position: relative;\r\n}\r\n.dash-top2-textinner .company-dropdown-title-active{\r\n  color: #fff;\r\n  line-height: normal;\r\n  font-size: 12px;\r\n  font-family: montserratlight;\r\n  width: 90% !important;\r\n  float: left;\r\n}\r\n.dash-pullout-new{\r\n  float: right;\r\n  width: 6%;\r\n  position: relative;\r\n  padding-bottom: 10px;\r\n}\r\n.dash-pullout-new:hover .new-dropdown-menu{\r\n  display: block;\r\n}\r\n.new-dropdown-menu{\r\n  position: absolute;\r\n  left: -64px;\r\n  top: 32px;\r\n  float: left;\r\n  background: #62696d;\r\n  color: #fff;\r\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\r\n  display: none;\r\n  padding: 10px 0;\r\n  z-index: 9;\r\n  border-radius: 4px !important;\r\n  min-width: 155px;\r\n}\r\n.new-dropdown-menu:before\r\n{\r\n  position: absolute;\r\n  top: -12px;\r\n  left: 70px;\r\n  display: inline-block;\r\n  border-right: 8px solid transparent;\r\n  border-bottom: 12px solid #62696d;\r\n  border-left: 8px solid transparent;\r\n  border-bottom-color: #62696d;\r\n  content: '';\r\n}\r\n.new-dropdown-menu a\r\n{\r\n  width: 100%;\r\n  float: left;\r\n  padding: 5px 10px;\r\n}\r\n.new-dropdown-menu a.hvr-sweep-to-right:before\r\n{\r\n  background:#71787b none repeat scroll 0 0;\r\n}\r\n.new-dropdown-menu a .company-block\r\n{\r\n  float: left;\r\n  margin-right: 3px;\r\n}\r\n.new-dropdown-menu a .company-block i\r\n{\r\n  font-size: 16px;\r\n  color: #fff !important;\r\n  margin: 0px;\r\n  margin-right: 10px;\r\n}\r\n.new-dropdown-menu a .company-block-content\r\n{\r\n  float: left;\r\n  margin: 0px;\r\n  width: 78%;\r\n  color: #fff;\r\n}\r\n.new-dropdown-menu a .company-block-content .company-title\r\n{\r\n  color: #fff;\r\n  line-height: normal;\r\n  width: 90% !important;\r\n  float: left;\r\n  font-size: 12px;\r\n  font-family: montserratlight;\r\n}\r\n\r\n\r\n\r\n/* switch new css (sahil) */\r\n.onoffswitch {\r\n  position: relative; width: 80px;\r\n  -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;\r\n}\r\n.onoffswitch-checkbox {\r\n  display: none;\r\n}\r\n.onoffswitch-label {\r\n  display: block; overflow: hidden; cursor: pointer;\r\n  border-radius: 20px;\r\n}\r\n.onoffswitch-inner {\r\n  display: block; width: 200%; margin-left: -100%;\r\n  transition: margin 0.3s ease-in 0s;\r\n}\r\n.onoffswitch-inner:before, .onoffswitch-inner:after {\r\n  display: block; float: left; width: 50%; height: 20px; padding: 0; line-height: 20px;\r\n  font-size: 13px; color: white;\r\n  box-sizing: border-box;\r\n}\r\n.onoffswitch-inner:before {\r\n  content: \"Public\";\r\n  padding-left: 10px;\r\n  background-color: #f87b80; color: #FFFFFF;\r\n  font-weight: normal;\r\n}\r\n.onoffswitch-inner:after {\r\n  content: \"Private\";\r\n  padding-right: 10px;\r\n  background-color: #EEEEEE; color: #999999;\r\n  text-align: right;\r\n}\r\n.onoffswitch-switch {\r\n  display: block;\r\n  width: 14px;\r\n  height: 14px;\r\n  margin: 3px;\r\n  background: #FFFFFF;\r\n  position: absolute; top: 0; bottom: 0;\r\n  right: 56px; border-radius: 20px;\r\n  transition: all 0.3s ease-in 0s;\r\n}\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\r\n  margin-left: 0;\r\n}\r\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\r\n  right: 0px;\r\n}\r\n\r\n/* switch new css end (sahil) */\r\n\r\n/* Circluar progress css start (sahil) */\r\n.rect-auto,\r\n.c100.p51 .slice,\r\n.c100.p52 .slice,\r\n.c100.p53 .slice,\r\n.c100.p54 .slice,\r\n.c100.p55 .slice,\r\n.c100.p56 .slice,\r\n.c100.p57 .slice,\r\n.c100.p58 .slice,\r\n.c100.p59 .slice,\r\n.c100.p60 .slice,\r\n.c100.p61 .slice,\r\n.c100.p62 .slice,\r\n.c100.p63 .slice,\r\n.c100.p64 .slice,\r\n.c100.p65 .slice,\r\n.c100.p66 .slice,\r\n.c100.p67 .slice,\r\n.c100.p68 .slice,\r\n.c100.p69 .slice,\r\n.c100.p70 .slice,\r\n.c100.p71 .slice,\r\n.c100.p72 .slice,\r\n.c100.p73 .slice,\r\n.c100.p74 .slice,\r\n.c100.p75 .slice,\r\n.c100.p76 .slice,\r\n.c100.p77 .slice,\r\n.c100.p78 .slice,\r\n.c100.p79 .slice,\r\n.c100.p80 .slice,\r\n.c100.p81 .slice,\r\n.c100.p82 .slice,\r\n.c100.p83 .slice,\r\n.c100.p84 .slice,\r\n.c100.p85 .slice,\r\n.c100.p86 .slice,\r\n.c100.p87 .slice,\r\n.c100.p88 .slice,\r\n.c100.p89 .slice,\r\n.c100.p90 .slice,\r\n.c100.p91 .slice,\r\n.c100.p92 .slice,\r\n.c100.p93 .slice,\r\n.c100.p94 .slice,\r\n.c100.p95 .slice,\r\n.c100.p96 .slice,\r\n.c100.p97 .slice,\r\n.c100.p98 .slice,\r\n.c100.p99 .slice,\r\n.c100.p100 .slice {\r\n  clip: rect(auto, auto, auto, auto);\r\n}\r\n.pie,\r\n.c100 .bar,\r\n.c100.p51 .fill,\r\n.c100.p52 .fill,\r\n.c100.p53 .fill,\r\n.c100.p54 .fill,\r\n.c100.p55 .fill,\r\n.c100.p56 .fill,\r\n.c100.p57 .fill,\r\n.c100.p58 .fill,\r\n.c100.p59 .fill,\r\n.c100.p60 .fill,\r\n.c100.p61 .fill,\r\n.c100.p62 .fill,\r\n.c100.p63 .fill,\r\n.c100.p64 .fill,\r\n.c100.p65 .fill,\r\n.c100.p66 .fill,\r\n.c100.p67 .fill,\r\n.c100.p68 .fill,\r\n.c100.p69 .fill,\r\n.c100.p70 .fill,\r\n.c100.p71 .fill,\r\n.c100.p72 .fill,\r\n.c100.p73 .fill,\r\n.c100.p74 .fill,\r\n.c100.p75 .fill,\r\n.c100.p76 .fill,\r\n.c100.p77 .fill,\r\n.c100.p78 .fill,\r\n.c100.p79 .fill,\r\n.c100.p80 .fill,\r\n.c100.p81 .fill,\r\n.c100.p82 .fill,\r\n.c100.p83 .fill,\r\n.c100.p84 .fill,\r\n.c100.p85 .fill,\r\n.c100.p86 .fill,\r\n.c100.p87 .fill,\r\n.c100.p88 .fill,\r\n.c100.p89 .fill,\r\n.c100.p90 .fill,\r\n.c100.p91 .fill,\r\n.c100.p92 .fill,\r\n.c100.p93 .fill,\r\n.c100.p94 .fill,\r\n.c100.p95 .fill,\r\n.c100.p96 .fill,\r\n.c100.p97 .fill,\r\n.c100.p98 .fill,\r\n.c100.p99 .fill,\r\n.c100.p100 .fill {\r\n  position: absolute;\r\n  border: 0.08em solid #307bbb;\r\n  width: 0.84em;\r\n  height: 0.84em;\r\n  clip: rect(0em, 0.5em, 1em, 0em);\r\n  border-radius: 50%;\r\n  -webkit-transform: rotate(0deg);\r\n  -moz-transform: rotate(0deg);\r\n  -ms-transform: rotate(0deg);\r\n  -o-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n}\r\n.pie-fill,\r\n.c100.p51 .bar:after,\r\n.c100.p51 .fill,\r\n.c100.p52 .bar:after,\r\n.c100.p52 .fill,\r\n.c100.p53 .bar:after,\r\n.c100.p53 .fill,\r\n.c100.p54 .bar:after,\r\n.c100.p54 .fill,\r\n.c100.p55 .bar:after,\r\n.c100.p55 .fill,\r\n.c100.p56 .bar:after,\r\n.c100.p56 .fill,\r\n.c100.p57 .bar:after,\r\n.c100.p57 .fill,\r\n.c100.p58 .bar:after,\r\n.c100.p58 .fill,\r\n.c100.p59 .bar:after,\r\n.c100.p59 .fill,\r\n.c100.p60 .bar:after,\r\n.c100.p60 .fill,\r\n.c100.p61 .bar:after,\r\n.c100.p61 .fill,\r\n.c100.p62 .bar:after,\r\n.c100.p62 .fill,\r\n.c100.p63 .bar:after,\r\n.c100.p63 .fill,\r\n.c100.p64 .bar:after,\r\n.c100.p64 .fill,\r\n.c100.p65 .bar:after,\r\n.c100.p65 .fill,\r\n.c100.p66 .bar:after,\r\n.c100.p66 .fill,\r\n.c100.p67 .bar:after,\r\n.c100.p67 .fill,\r\n.c100.p68 .bar:after,\r\n.c100.p68 .fill,\r\n.c100.p69 .bar:after,\r\n.c100.p69 .fill,\r\n.c100.p70 .bar:after,\r\n.c100.p70 .fill,\r\n.c100.p71 .bar:after,\r\n.c100.p71 .fill,\r\n.c100.p72 .bar:after,\r\n.c100.p72 .fill,\r\n.c100.p73 .bar:after,\r\n.c100.p73 .fill,\r\n.c100.p74 .bar:after,\r\n.c100.p74 .fill,\r\n.c100.p75 .bar:after,\r\n.c100.p75 .fill,\r\n.c100.p76 .bar:after,\r\n.c100.p76 .fill,\r\n.c100.p77 .bar:after,\r\n.c100.p77 .fill,\r\n.c100.p78 .bar:after,\r\n.c100.p78 .fill,\r\n.c100.p79 .bar:after,\r\n.c100.p79 .fill,\r\n.c100.p80 .bar:after,\r\n.c100.p80 .fill,\r\n.c100.p81 .bar:after,\r\n.c100.p81 .fill,\r\n.c100.p82 .bar:after,\r\n.c100.p82 .fill,\r\n.c100.p83 .bar:after,\r\n.c100.p83 .fill,\r\n.c100.p84 .bar:after,\r\n.c100.p84 .fill,\r\n.c100.p85 .bar:after,\r\n.c100.p85 .fill,\r\n.c100.p86 .bar:after,\r\n.c100.p86 .fill,\r\n.c100.p87 .bar:after,\r\n.c100.p87 .fill,\r\n.c100.p88 .bar:after,\r\n.c100.p88 .fill,\r\n.c100.p89 .bar:after,\r\n.c100.p89 .fill,\r\n.c100.p90 .bar:after,\r\n.c100.p90 .fill,\r\n.c100.p91 .bar:after,\r\n.c100.p91 .fill,\r\n.c100.p92 .bar:after,\r\n.c100.p92 .fill,\r\n.c100.p93 .bar:after,\r\n.c100.p93 .fill,\r\n.c100.p94 .bar:after,\r\n.c100.p94 .fill,\r\n.c100.p95 .bar:after,\r\n.c100.p95 .fill,\r\n.c100.p96 .bar:after,\r\n.c100.p96 .fill,\r\n.c100.p97 .bar:after,\r\n.c100.p97 .fill,\r\n.c100.p98 .bar:after,\r\n.c100.p98 .fill,\r\n.c100.p99 .bar:after,\r\n.c100.p99 .fill,\r\n.c100.p100 .bar:after,\r\n.c100.p100 .fill {\r\n  -webkit-transform: rotate(180deg);\r\n  -moz-transform: rotate(180deg);\r\n  -ms-transform: rotate(180deg);\r\n  -o-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n.c100 {\r\n  position: relative;\r\n  font-size: 120px;\r\n  width: 1em;\r\n  height: 1em;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin: 0 0.1em 0.1em 0;\r\n  background-color: #cccccc;\r\n}\r\n.c100 *,\r\n.c100 *:before,\r\n.c100 *:after {\r\n  -webkit-box-sizing: content-box;\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n}\r\n.c100.center {\r\n  float: none;\r\n  margin: 0 auto;\r\n}\r\n.c100.big {\r\n  font-size: 240px;\r\n}\r\n.c100.small {\r\n  font-size: 80px;\r\n}\r\n.c100 > span {\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 1;\r\n  left: 0;\r\n  top: 0;\r\n  width: 5em;\r\n  line-height: 5em;\r\n  font-size: 0.2em;\r\n  color: #cccccc;\r\n  display: block;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  -webkit-transition-property: all;\r\n  -moz-transition-property: all;\r\n  -o-transition-property: all;\r\n  transition-property: all;\r\n  -webkit-transition-duration: 0.2s;\r\n  -moz-transition-duration: 0.2s;\r\n  -o-transition-duration: 0.2s;\r\n  transition-duration: 0.2s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  -moz-transition-timing-function: ease-out;\r\n  -o-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.c100:after {\r\n  position: absolute;\r\n  top: 0.08em;\r\n  left: 0.08em;\r\n  display: block;\r\n  content: \" \";\r\n  border-radius: 50%;\r\n  background-color: #f5f5f5;\r\n  width: 0.84em;\r\n  height: 0.84em;\r\n  -webkit-transition-property: all;\r\n  -moz-transition-property: all;\r\n  -o-transition-property: all;\r\n  transition-property: all;\r\n  -webkit-transition-duration: 0.2s;\r\n  -moz-transition-duration: 0.2s;\r\n  -o-transition-duration: 0.2s;\r\n  transition-duration: 0.2s;\r\n  -webkit-transition-timing-function: ease-in;\r\n  -moz-transition-timing-function: ease-in;\r\n  -o-transition-timing-function: ease-in;\r\n  transition-timing-function: ease-in;\r\n}\r\n.c100 .slice {\r\n  position: absolute;\r\n  width: 1em;\r\n  height: 1em;\r\n  clip: rect(0em, 1em, 1em, 0.5em);\r\n}\r\n.c100.p1 .bar {\r\n  -webkit-transform: rotate(3.6deg);\r\n  -moz-transform: rotate(3.6deg);\r\n  -ms-transform: rotate(3.6deg);\r\n  -o-transform: rotate(3.6deg);\r\n  transform: rotate(3.6deg);\r\n}\r\n.c100.p2 .bar {\r\n  -webkit-transform: rotate(7.2deg);\r\n  -moz-transform: rotate(7.2deg);\r\n  -ms-transform: rotate(7.2deg);\r\n  -o-transform: rotate(7.2deg);\r\n  transform: rotate(7.2deg);\r\n}\r\n.c100.p3 .bar {\r\n  -webkit-transform: rotate(10.8deg);\r\n  -moz-transform: rotate(10.8deg);\r\n  -ms-transform: rotate(10.8deg);\r\n  -o-transform: rotate(10.8deg);\r\n  transform: rotate(10.8deg);\r\n}\r\n.c100.p4 .bar {\r\n  -webkit-transform: rotate(14.4deg);\r\n  -moz-transform: rotate(14.4deg);\r\n  -ms-transform: rotate(14.4deg);\r\n  -o-transform: rotate(14.4deg);\r\n  transform: rotate(14.4deg);\r\n}\r\n.c100.p5 .bar {\r\n  -webkit-transform: rotate(18deg);\r\n  -moz-transform: rotate(18deg);\r\n  -ms-transform: rotate(18deg);\r\n  -o-transform: rotate(18deg);\r\n  transform: rotate(18deg);\r\n}\r\n.c100.p6 .bar {\r\n  -webkit-transform: rotate(21.6deg);\r\n  -moz-transform: rotate(21.6deg);\r\n  -ms-transform: rotate(21.6deg);\r\n  -o-transform: rotate(21.6deg);\r\n  transform: rotate(21.6deg);\r\n}\r\n.c100.p7 .bar {\r\n  -webkit-transform: rotate(25.2deg);\r\n  -moz-transform: rotate(25.2deg);\r\n  -ms-transform: rotate(25.2deg);\r\n  -o-transform: rotate(25.2deg);\r\n  transform: rotate(25.2deg);\r\n}\r\n.c100.p8 .bar {\r\n  -webkit-transform: rotate(28.8deg);\r\n  -moz-transform: rotate(28.8deg);\r\n  -ms-transform: rotate(28.8deg);\r\n  -o-transform: rotate(28.8deg);\r\n  transform: rotate(28.8deg);\r\n}\r\n.c100.p9 .bar {\r\n  -webkit-transform: rotate(32.4deg);\r\n  -moz-transform: rotate(32.4deg);\r\n  -ms-transform: rotate(32.4deg);\r\n  -o-transform: rotate(32.4deg);\r\n  transform: rotate(32.4deg);\r\n}\r\n.c100.p10 .bar {\r\n  -webkit-transform: rotate(36deg);\r\n  -moz-transform: rotate(36deg);\r\n  -ms-transform: rotate(36deg);\r\n  -o-transform: rotate(36deg);\r\n  transform: rotate(36deg);\r\n}\r\n.c100.p11 .bar {\r\n  -webkit-transform: rotate(39.6deg);\r\n  -moz-transform: rotate(39.6deg);\r\n  -ms-transform: rotate(39.6deg);\r\n  -o-transform: rotate(39.6deg);\r\n  transform: rotate(39.6deg);\r\n}\r\n.c100.p12 .bar {\r\n  -webkit-transform: rotate(43.2deg);\r\n  -moz-transform: rotate(43.2deg);\r\n  -ms-transform: rotate(43.2deg);\r\n  -o-transform: rotate(43.2deg);\r\n  transform: rotate(43.2deg);\r\n}\r\n.c100.p13 .bar {\r\n  -webkit-transform: rotate(46.800000000000004deg);\r\n  -moz-transform: rotate(46.800000000000004deg);\r\n  -ms-transform: rotate(46.800000000000004deg);\r\n  -o-transform: rotate(46.800000000000004deg);\r\n  transform: rotate(46.800000000000004deg);\r\n}\r\n.c100.p14 .bar {\r\n  -webkit-transform: rotate(50.4deg);\r\n  -moz-transform: rotate(50.4deg);\r\n  -ms-transform: rotate(50.4deg);\r\n  -o-transform: rotate(50.4deg);\r\n  transform: rotate(50.4deg);\r\n}\r\n.c100.p15 .bar {\r\n  -webkit-transform: rotate(54deg);\r\n  -moz-transform: rotate(54deg);\r\n  -ms-transform: rotate(54deg);\r\n  -o-transform: rotate(54deg);\r\n  transform: rotate(54deg);\r\n}\r\n.c100.p16 .bar {\r\n  -webkit-transform: rotate(57.6deg);\r\n  -moz-transform: rotate(57.6deg);\r\n  -ms-transform: rotate(57.6deg);\r\n  -o-transform: rotate(57.6deg);\r\n  transform: rotate(57.6deg);\r\n}\r\n.c100.p17 .bar {\r\n  -webkit-transform: rotate(61.2deg);\r\n  -moz-transform: rotate(61.2deg);\r\n  -ms-transform: rotate(61.2deg);\r\n  -o-transform: rotate(61.2deg);\r\n  transform: rotate(61.2deg);\r\n}\r\n.c100.p18 .bar {\r\n  -webkit-transform: rotate(64.8deg);\r\n  -moz-transform: rotate(64.8deg);\r\n  -ms-transform: rotate(64.8deg);\r\n  -o-transform: rotate(64.8deg);\r\n  transform: rotate(64.8deg);\r\n}\r\n.c100.p19 .bar {\r\n  -webkit-transform: rotate(68.4deg);\r\n  -moz-transform: rotate(68.4deg);\r\n  -ms-transform: rotate(68.4deg);\r\n  -o-transform: rotate(68.4deg);\r\n  transform: rotate(68.4deg);\r\n}\r\n.c100.p20 .bar {\r\n  -webkit-transform: rotate(72deg);\r\n  -moz-transform: rotate(72deg);\r\n  -ms-transform: rotate(72deg);\r\n  -o-transform: rotate(72deg);\r\n  transform: rotate(72deg);\r\n}\r\n.c100.p21 .bar {\r\n  -webkit-transform: rotate(75.60000000000001deg);\r\n  -moz-transform: rotate(75.60000000000001deg);\r\n  -ms-transform: rotate(75.60000000000001deg);\r\n  -o-transform: rotate(75.60000000000001deg);\r\n  transform: rotate(75.60000000000001deg);\r\n}\r\n.c100.p22 .bar {\r\n  -webkit-transform: rotate(79.2deg);\r\n  -moz-transform: rotate(79.2deg);\r\n  -ms-transform: rotate(79.2deg);\r\n  -o-transform: rotate(79.2deg);\r\n  transform: rotate(79.2deg);\r\n}\r\n.c100.p23 .bar {\r\n  -webkit-transform: rotate(82.8deg);\r\n  -moz-transform: rotate(82.8deg);\r\n  -ms-transform: rotate(82.8deg);\r\n  -o-transform: rotate(82.8deg);\r\n  transform: rotate(82.8deg);\r\n}\r\n.c100.p24 .bar {\r\n  -webkit-transform: rotate(86.4deg);\r\n  -moz-transform: rotate(86.4deg);\r\n  -ms-transform: rotate(86.4deg);\r\n  -o-transform: rotate(86.4deg);\r\n  transform: rotate(86.4deg);\r\n}\r\n.c100.p25 .bar {\r\n  -webkit-transform: rotate(90deg);\r\n  -moz-transform: rotate(90deg);\r\n  -ms-transform: rotate(90deg);\r\n  -o-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n.c100.p26 .bar {\r\n  -webkit-transform: rotate(93.60000000000001deg);\r\n  -moz-transform: rotate(93.60000000000001deg);\r\n  -ms-transform: rotate(93.60000000000001deg);\r\n  -o-transform: rotate(93.60000000000001deg);\r\n  transform: rotate(93.60000000000001deg);\r\n}\r\n.c100.p27 .bar {\r\n  -webkit-transform: rotate(97.2deg);\r\n  -moz-transform: rotate(97.2deg);\r\n  -ms-transform: rotate(97.2deg);\r\n  -o-transform: rotate(97.2deg);\r\n  transform: rotate(97.2deg);\r\n}\r\n.c100.p28 .bar {\r\n  -webkit-transform: rotate(100.8deg);\r\n  -moz-transform: rotate(100.8deg);\r\n  -ms-transform: rotate(100.8deg);\r\n  -o-transform: rotate(100.8deg);\r\n  transform: rotate(100.8deg);\r\n}\r\n.c100.p29 .bar {\r\n  -webkit-transform: rotate(104.4deg);\r\n  -moz-transform: rotate(104.4deg);\r\n  -ms-transform: rotate(104.4deg);\r\n  -o-transform: rotate(104.4deg);\r\n  transform: rotate(104.4deg);\r\n}\r\n.c100.p30 .bar {\r\n  -webkit-transform: rotate(108deg);\r\n  -moz-transform: rotate(108deg);\r\n  -ms-transform: rotate(108deg);\r\n  -o-transform: rotate(108deg);\r\n  transform: rotate(108deg);\r\n}\r\n.c100.p31 .bar {\r\n  -webkit-transform: rotate(111.60000000000001deg);\r\n  -moz-transform: rotate(111.60000000000001deg);\r\n  -ms-transform: rotate(111.60000000000001deg);\r\n  -o-transform: rotate(111.60000000000001deg);\r\n  transform: rotate(111.60000000000001deg);\r\n}\r\n.c100.p32 .bar {\r\n  -webkit-transform: rotate(115.2deg);\r\n  -moz-transform: rotate(115.2deg);\r\n  -ms-transform: rotate(115.2deg);\r\n  -o-transform: rotate(115.2deg);\r\n  transform: rotate(115.2deg);\r\n}\r\n.c100.p33 .bar {\r\n  -webkit-transform: rotate(118.8deg);\r\n  -moz-transform: rotate(118.8deg);\r\n  -ms-transform: rotate(118.8deg);\r\n  -o-transform: rotate(118.8deg);\r\n  transform: rotate(118.8deg);\r\n}\r\n.c100.p34 .bar {\r\n  -webkit-transform: rotate(122.4deg);\r\n  -moz-transform: rotate(122.4deg);\r\n  -ms-transform: rotate(122.4deg);\r\n  -o-transform: rotate(122.4deg);\r\n  transform: rotate(122.4deg);\r\n}\r\n.c100.p35 .bar {\r\n  -webkit-transform: rotate(126deg);\r\n  -moz-transform: rotate(126deg);\r\n  -ms-transform: rotate(126deg);\r\n  -o-transform: rotate(126deg);\r\n  transform: rotate(126deg);\r\n}\r\n.c100.p36 .bar {\r\n  -webkit-transform: rotate(129.6deg);\r\n  -moz-transform: rotate(129.6deg);\r\n  -ms-transform: rotate(129.6deg);\r\n  -o-transform: rotate(129.6deg);\r\n  transform: rotate(129.6deg);\r\n}\r\n.c100.p37 .bar {\r\n  -webkit-transform: rotate(133.20000000000002deg);\r\n  -moz-transform: rotate(133.20000000000002deg);\r\n  -ms-transform: rotate(133.20000000000002deg);\r\n  -o-transform: rotate(133.20000000000002deg);\r\n  transform: rotate(133.20000000000002deg);\r\n}\r\n.c100.p38 .bar {\r\n  -webkit-transform: rotate(136.8deg);\r\n  -moz-transform: rotate(136.8deg);\r\n  -ms-transform: rotate(136.8deg);\r\n  -o-transform: rotate(136.8deg);\r\n  transform: rotate(136.8deg);\r\n}\r\n.c100.p39 .bar {\r\n  -webkit-transform: rotate(140.4deg);\r\n  -moz-transform: rotate(140.4deg);\r\n  -ms-transform: rotate(140.4deg);\r\n  -o-transform: rotate(140.4deg);\r\n  transform: rotate(140.4deg);\r\n}\r\n.c100.p40 .bar {\r\n  -webkit-transform: rotate(144deg);\r\n  -moz-transform: rotate(144deg);\r\n  -ms-transform: rotate(144deg);\r\n  -o-transform: rotate(144deg);\r\n  transform: rotate(144deg);\r\n}\r\n.c100.p41 .bar {\r\n  -webkit-transform: rotate(147.6deg);\r\n  -moz-transform: rotate(147.6deg);\r\n  -ms-transform: rotate(147.6deg);\r\n  -o-transform: rotate(147.6deg);\r\n  transform: rotate(147.6deg);\r\n}\r\n.c100.p42 .bar {\r\n  -webkit-transform: rotate(151.20000000000002deg);\r\n  -moz-transform: rotate(151.20000000000002deg);\r\n  -ms-transform: rotate(151.20000000000002deg);\r\n  -o-transform: rotate(151.20000000000002deg);\r\n  transform: rotate(151.20000000000002deg);\r\n}\r\n.c100.p43 .bar {\r\n  -webkit-transform: rotate(154.8deg);\r\n  -moz-transform: rotate(154.8deg);\r\n  -ms-transform: rotate(154.8deg);\r\n  -o-transform: rotate(154.8deg);\r\n  transform: rotate(154.8deg);\r\n}\r\n.c100.p44 .bar {\r\n  -webkit-transform: rotate(158.4deg);\r\n  -moz-transform: rotate(158.4deg);\r\n  -ms-transform: rotate(158.4deg);\r\n  -o-transform: rotate(158.4deg);\r\n  transform: rotate(158.4deg);\r\n}\r\n.c100.p45 .bar {\r\n  -webkit-transform: rotate(162deg);\r\n  -moz-transform: rotate(162deg);\r\n  -ms-transform: rotate(162deg);\r\n  -o-transform: rotate(162deg);\r\n  transform: rotate(162deg);\r\n}\r\n.c100.p46 .bar {\r\n  -webkit-transform: rotate(165.6deg);\r\n  -moz-transform: rotate(165.6deg);\r\n  -ms-transform: rotate(165.6deg);\r\n  -o-transform: rotate(165.6deg);\r\n  transform: rotate(165.6deg);\r\n}\r\n.c100.p47 .bar {\r\n  -webkit-transform: rotate(169.20000000000002deg);\r\n  -moz-transform: rotate(169.20000000000002deg);\r\n  -ms-transform: rotate(169.20000000000002deg);\r\n  -o-transform: rotate(169.20000000000002deg);\r\n  transform: rotate(169.20000000000002deg);\r\n}\r\n.c100.p48 .bar {\r\n  -webkit-transform: rotate(172.8deg);\r\n  -moz-transform: rotate(172.8deg);\r\n  -ms-transform: rotate(172.8deg);\r\n  -o-transform: rotate(172.8deg);\r\n  transform: rotate(172.8deg);\r\n}\r\n.c100.p49 .bar {\r\n  -webkit-transform: rotate(176.4deg);\r\n  -moz-transform: rotate(176.4deg);\r\n  -ms-transform: rotate(176.4deg);\r\n  -o-transform: rotate(176.4deg);\r\n  transform: rotate(176.4deg);\r\n}\r\n.c100.p50 .bar {\r\n  -webkit-transform: rotate(180deg);\r\n  -moz-transform: rotate(180deg);\r\n  -ms-transform: rotate(180deg);\r\n  -o-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n.c100.p51 .bar {\r\n  -webkit-transform: rotate(183.6deg);\r\n  -moz-transform: rotate(183.6deg);\r\n  -ms-transform: rotate(183.6deg);\r\n  -o-transform: rotate(183.6deg);\r\n  transform: rotate(183.6deg);\r\n}\r\n.c100.p52 .bar {\r\n  -webkit-transform: rotate(187.20000000000002deg);\r\n  -moz-transform: rotate(187.20000000000002deg);\r\n  -ms-transform: rotate(187.20000000000002deg);\r\n  -o-transform: rotate(187.20000000000002deg);\r\n  transform: rotate(187.20000000000002deg);\r\n}\r\n.c100.p53 .bar {\r\n  -webkit-transform: rotate(190.8deg);\r\n  -moz-transform: rotate(190.8deg);\r\n  -ms-transform: rotate(190.8deg);\r\n  -o-transform: rotate(190.8deg);\r\n  transform: rotate(190.8deg);\r\n}\r\n.c100.p54 .bar {\r\n  -webkit-transform: rotate(194.4deg);\r\n  -moz-transform: rotate(194.4deg);\r\n  -ms-transform: rotate(194.4deg);\r\n  -o-transform: rotate(194.4deg);\r\n  transform: rotate(194.4deg);\r\n}\r\n.c100.p55 .bar {\r\n  -webkit-transform: rotate(198deg);\r\n  -moz-transform: rotate(198deg);\r\n  -ms-transform: rotate(198deg);\r\n  -o-transform: rotate(198deg);\r\n  transform: rotate(198deg);\r\n}\r\n.c100.p56 .bar {\r\n  -webkit-transform: rotate(201.6deg);\r\n  -moz-transform: rotate(201.6deg);\r\n  -ms-transform: rotate(201.6deg);\r\n  -o-transform: rotate(201.6deg);\r\n  transform: rotate(201.6deg);\r\n}\r\n.c100.p57 .bar {\r\n  -webkit-transform: rotate(205.20000000000002deg);\r\n  -moz-transform: rotate(205.20000000000002deg);\r\n  -ms-transform: rotate(205.20000000000002deg);\r\n  -o-transform: rotate(205.20000000000002deg);\r\n  transform: rotate(205.20000000000002deg);\r\n}\r\n.c100.p58 .bar {\r\n  -webkit-transform: rotate(208.8deg);\r\n  -moz-transform: rotate(208.8deg);\r\n  -ms-transform: rotate(208.8deg);\r\n  -o-transform: rotate(208.8deg);\r\n  transform: rotate(208.8deg);\r\n}\r\n.c100.p59 .bar {\r\n  -webkit-transform: rotate(212.4deg);\r\n  -moz-transform: rotate(212.4deg);\r\n  -ms-transform: rotate(212.4deg);\r\n  -o-transform: rotate(212.4deg);\r\n  transform: rotate(212.4deg);\r\n}\r\n.c100.p60 .bar {\r\n  -webkit-transform: rotate(216deg);\r\n  -moz-transform: rotate(216deg);\r\n  -ms-transform: rotate(216deg);\r\n  -o-transform: rotate(216deg);\r\n  transform: rotate(216deg);\r\n}\r\n.c100.p61 .bar {\r\n  -webkit-transform: rotate(219.6deg);\r\n  -moz-transform: rotate(219.6deg);\r\n  -ms-transform: rotate(219.6deg);\r\n  -o-transform: rotate(219.6deg);\r\n  transform: rotate(219.6deg);\r\n}\r\n.c100.p62 .bar {\r\n  -webkit-transform: rotate(223.20000000000002deg);\r\n  -moz-transform: rotate(223.20000000000002deg);\r\n  -ms-transform: rotate(223.20000000000002deg);\r\n  -o-transform: rotate(223.20000000000002deg);\r\n  transform: rotate(223.20000000000002deg);\r\n}\r\n.c100.p63 .bar {\r\n  -webkit-transform: rotate(226.8deg);\r\n  -moz-transform: rotate(226.8deg);\r\n  -ms-transform: rotate(226.8deg);\r\n  -o-transform: rotate(226.8deg);\r\n  transform: rotate(226.8deg);\r\n}\r\n.c100.p64 .bar {\r\n  -webkit-transform: rotate(230.4deg);\r\n  -moz-transform: rotate(230.4deg);\r\n  -ms-transform: rotate(230.4deg);\r\n  -o-transform: rotate(230.4deg);\r\n  transform: rotate(230.4deg);\r\n}\r\n.c100.p65 .bar {\r\n  -webkit-transform: rotate(234deg);\r\n  -moz-transform: rotate(234deg);\r\n  -ms-transform: rotate(234deg);\r\n  -o-transform: rotate(234deg);\r\n  transform: rotate(234deg);\r\n}\r\n.c100.p66 .bar {\r\n  -webkit-transform: rotate(237.6deg);\r\n  -moz-transform: rotate(237.6deg);\r\n  -ms-transform: rotate(237.6deg);\r\n  -o-transform: rotate(237.6deg);\r\n  transform: rotate(237.6deg);\r\n}\r\n.c100.p67 .bar {\r\n  -webkit-transform: rotate(241.20000000000002deg);\r\n  -moz-transform: rotate(241.20000000000002deg);\r\n  -ms-transform: rotate(241.20000000000002deg);\r\n  -o-transform: rotate(241.20000000000002deg);\r\n  transform: rotate(241.20000000000002deg);\r\n}\r\n.c100.p68 .bar {\r\n  -webkit-transform: rotate(244.8deg);\r\n  -moz-transform: rotate(244.8deg);\r\n  -ms-transform: rotate(244.8deg);\r\n  -o-transform: rotate(244.8deg);\r\n  transform: rotate(244.8deg);\r\n}\r\n.c100.p69 .bar {\r\n  -webkit-transform: rotate(248.4deg);\r\n  -moz-transform: rotate(248.4deg);\r\n  -ms-transform: rotate(248.4deg);\r\n  -o-transform: rotate(248.4deg);\r\n  transform: rotate(248.4deg);\r\n}\r\n.c100.p70 .bar {\r\n  -webkit-transform: rotate(252deg);\r\n  -moz-transform: rotate(252deg);\r\n  -ms-transform: rotate(252deg);\r\n  -o-transform: rotate(252deg);\r\n  transform: rotate(252deg);\r\n}\r\n.c100.p71 .bar {\r\n  -webkit-transform: rotate(255.6deg);\r\n  -moz-transform: rotate(255.6deg);\r\n  -ms-transform: rotate(255.6deg);\r\n  -o-transform: rotate(255.6deg);\r\n  transform: rotate(255.6deg);\r\n}\r\n.c100.p72 .bar {\r\n  -webkit-transform: rotate(259.2deg);\r\n  -moz-transform: rotate(259.2deg);\r\n  -ms-transform: rotate(259.2deg);\r\n  -o-transform: rotate(259.2deg);\r\n  transform: rotate(259.2deg);\r\n}\r\n.c100.p73 .bar {\r\n  -webkit-transform: rotate(262.8deg);\r\n  -moz-transform: rotate(262.8deg);\r\n  -ms-transform: rotate(262.8deg);\r\n  -o-transform: rotate(262.8deg);\r\n  transform: rotate(262.8deg);\r\n}\r\n.c100.p74 .bar {\r\n  -webkit-transform: rotate(266.40000000000003deg);\r\n  -moz-transform: rotate(266.40000000000003deg);\r\n  -ms-transform: rotate(266.40000000000003deg);\r\n  -o-transform: rotate(266.40000000000003deg);\r\n  transform: rotate(266.40000000000003deg);\r\n}\r\n.c100.p75 .bar {\r\n  -webkit-transform: rotate(270deg);\r\n  -moz-transform: rotate(270deg);\r\n  -ms-transform: rotate(270deg);\r\n  -o-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n}\r\n.c100.p76 .bar {\r\n  -webkit-transform: rotate(273.6deg);\r\n  -moz-transform: rotate(273.6deg);\r\n  -ms-transform: rotate(273.6deg);\r\n  -o-transform: rotate(273.6deg);\r\n  transform: rotate(273.6deg);\r\n}\r\n.c100.p77 .bar {\r\n  -webkit-transform: rotate(277.2deg);\r\n  -moz-transform: rotate(277.2deg);\r\n  -ms-transform: rotate(277.2deg);\r\n  -o-transform: rotate(277.2deg);\r\n  transform: rotate(277.2deg);\r\n}\r\n.c100.p78 .bar {\r\n  -webkit-transform: rotate(280.8deg);\r\n  -moz-transform: rotate(280.8deg);\r\n  -ms-transform: rotate(280.8deg);\r\n  -o-transform: rotate(280.8deg);\r\n  transform: rotate(280.8deg);\r\n}\r\n.c100.p79 .bar {\r\n  -webkit-transform: rotate(284.40000000000003deg);\r\n  -moz-transform: rotate(284.40000000000003deg);\r\n  -ms-transform: rotate(284.40000000000003deg);\r\n  -o-transform: rotate(284.40000000000003deg);\r\n  transform: rotate(284.40000000000003deg);\r\n}\r\n.c100.p80 .bar {\r\n  -webkit-transform: rotate(288deg);\r\n  -moz-transform: rotate(288deg);\r\n  -ms-transform: rotate(288deg);\r\n  -o-transform: rotate(288deg);\r\n  transform: rotate(288deg);\r\n}\r\n.c100.p81 .bar {\r\n  -webkit-transform: rotate(291.6deg);\r\n  -moz-transform: rotate(291.6deg);\r\n  -ms-transform: rotate(291.6deg);\r\n  -o-transform: rotate(291.6deg);\r\n  transform: rotate(291.6deg);\r\n}\r\n.c100.p82 .bar {\r\n  -webkit-transform: rotate(295.2deg);\r\n  -moz-transform: rotate(295.2deg);\r\n  -ms-transform: rotate(295.2deg);\r\n  -o-transform: rotate(295.2deg);\r\n  transform: rotate(295.2deg);\r\n}\r\n.c100.p83 .bar {\r\n  -webkit-transform: rotate(298.8deg);\r\n  -moz-transform: rotate(298.8deg);\r\n  -ms-transform: rotate(298.8deg);\r\n  -o-transform: rotate(298.8deg);\r\n  transform: rotate(298.8deg);\r\n}\r\n.c100.p84 .bar {\r\n  -webkit-transform: rotate(302.40000000000003deg);\r\n  -moz-transform: rotate(302.40000000000003deg);\r\n  -ms-transform: rotate(302.40000000000003deg);\r\n  -o-transform: rotate(302.40000000000003deg);\r\n  transform: rotate(302.40000000000003deg);\r\n}\r\n.c100.p85 .bar {\r\n  -webkit-transform: rotate(306deg);\r\n  -moz-transform: rotate(306deg);\r\n  -ms-transform: rotate(306deg);\r\n  -o-transform: rotate(306deg);\r\n  transform: rotate(306deg);\r\n}\r\n.c100.p86 .bar {\r\n  -webkit-transform: rotate(309.6deg);\r\n  -moz-transform: rotate(309.6deg);\r\n  -ms-transform: rotate(309.6deg);\r\n  -o-transform: rotate(309.6deg);\r\n  transform: rotate(309.6deg);\r\n}\r\n.c100.p87 .bar {\r\n  -webkit-transform: rotate(313.2deg);\r\n  -moz-transform: rotate(313.2deg);\r\n  -ms-transform: rotate(313.2deg);\r\n  -o-transform: rotate(313.2deg);\r\n  transform: rotate(313.2deg);\r\n}\r\n.c100.p88 .bar {\r\n  -webkit-transform: rotate(316.8deg);\r\n  -moz-transform: rotate(316.8deg);\r\n  -ms-transform: rotate(316.8deg);\r\n  -o-transform: rotate(316.8deg);\r\n  transform: rotate(316.8deg);\r\n}\r\n.c100.p89 .bar {\r\n  -webkit-transform: rotate(320.40000000000003deg);\r\n  -moz-transform: rotate(320.40000000000003deg);\r\n  -ms-transform: rotate(320.40000000000003deg);\r\n  -o-transform: rotate(320.40000000000003deg);\r\n  transform: rotate(320.40000000000003deg);\r\n}\r\n.c100.p90 .bar {\r\n  -webkit-transform: rotate(324deg);\r\n  -moz-transform: rotate(324deg);\r\n  -ms-transform: rotate(324deg);\r\n  -o-transform: rotate(324deg);\r\n  transform: rotate(324deg);\r\n}\r\n.c100.p91 .bar {\r\n  -webkit-transform: rotate(327.6deg);\r\n  -moz-transform: rotate(327.6deg);\r\n  -ms-transform: rotate(327.6deg);\r\n  -o-transform: rotate(327.6deg);\r\n  transform: rotate(327.6deg);\r\n}\r\n.c100.p92 .bar {\r\n  -webkit-transform: rotate(331.2deg);\r\n  -moz-transform: rotate(331.2deg);\r\n  -ms-transform: rotate(331.2deg);\r\n  -o-transform: rotate(331.2deg);\r\n  transform: rotate(331.2deg);\r\n}\r\n.c100.p93 .bar {\r\n  -webkit-transform: rotate(334.8deg);\r\n  -moz-transform: rotate(334.8deg);\r\n  -ms-transform: rotate(334.8deg);\r\n  -o-transform: rotate(334.8deg);\r\n  transform: rotate(334.8deg);\r\n}\r\n.c100.p94 .bar {\r\n  -webkit-transform: rotate(338.40000000000003deg);\r\n  -moz-transform: rotate(338.40000000000003deg);\r\n  -ms-transform: rotate(338.40000000000003deg);\r\n  -o-transform: rotate(338.40000000000003deg);\r\n  transform: rotate(338.40000000000003deg);\r\n}\r\n.c100.p95 .bar {\r\n  -webkit-transform: rotate(342deg);\r\n  -moz-transform: rotate(342deg);\r\n  -ms-transform: rotate(342deg);\r\n  -o-transform: rotate(342deg);\r\n  transform: rotate(342deg);\r\n}\r\n.c100.p96 .bar {\r\n  -webkit-transform: rotate(345.6deg);\r\n  -moz-transform: rotate(345.6deg);\r\n  -ms-transform: rotate(345.6deg);\r\n  -o-transform: rotate(345.6deg);\r\n  transform: rotate(345.6deg);\r\n}\r\n.c100.p97 .bar {\r\n  -webkit-transform: rotate(349.2deg);\r\n  -moz-transform: rotate(349.2deg);\r\n  -ms-transform: rotate(349.2deg);\r\n  -o-transform: rotate(349.2deg);\r\n  transform: rotate(349.2deg);\r\n}\r\n.c100.p98 .bar {\r\n  -webkit-transform: rotate(352.8deg);\r\n  -moz-transform: rotate(352.8deg);\r\n  -ms-transform: rotate(352.8deg);\r\n  -o-transform: rotate(352.8deg);\r\n  transform: rotate(352.8deg);\r\n}\r\n.c100.p99 .bar {\r\n  -webkit-transform: rotate(356.40000000000003deg);\r\n  -moz-transform: rotate(356.40000000000003deg);\r\n  -ms-transform: rotate(356.40000000000003deg);\r\n  -o-transform: rotate(356.40000000000003deg);\r\n  transform: rotate(356.40000000000003deg);\r\n}\r\n.c100.p100 .bar {\r\n  -webkit-transform: rotate(360deg);\r\n  -moz-transform: rotate(360deg);\r\n  -ms-transform: rotate(360deg);\r\n  -o-transform: rotate(360deg);\r\n  transform: rotate(360deg);\r\n}\r\n.c100:hover {\r\n  cursor: default;\r\n}\r\n.c100:hover > span {\r\n  width: 3.33em;\r\n  line-height: 3.33em;\r\n  font-size: 0.3em;\r\n  color: #307bbb;\r\n}\r\n.c100:hover:after {\r\n  top: 0.04em;\r\n  left: 0.04em;\r\n  width: 0.92em;\r\n  height: 0.92em;\r\n}\r\n.c100.dark {\r\n  background-color: #777777;\r\n}\r\n.c100.dark .bar,\r\n.c100.dark .fill {\r\n  border-color: #c6ff00 !important;\r\n}\r\n.c100.dark > span {\r\n  color: #777777;\r\n}\r\n.c100.dark:after {\r\n  background-color: #666666;\r\n}\r\n.c100.dark:hover > span {\r\n  color: #c6ff00;\r\n}\r\n.c100.green .bar,\r\n.c100.green .fill {\r\n  border-color: #4db53c !important;\r\n}\r\n.c100.green:hover > span {\r\n  color: #4db53c;\r\n}\r\n.c100.green.dark .bar,\r\n.c100.green.dark .fill {\r\n  border-color: #5fd400 !important;\r\n}\r\n.c100.green.dark:hover > span {\r\n  color: #5fd400;\r\n}\r\n.c100.orange .bar,\r\n.c100.orange .fill {\r\n  border-color: #dd9d22 !important;\r\n}\r\n.c100.orange:hover > span {\r\n  color: #dd9d22;\r\n}\r\n.c100.orange.dark .bar,\r\n.c100.orange.dark .fill {\r\n  border-color: #e08833 !important;\r\n}\r\n.c100.orange.dark:hover > span {\r\n  color: #e08833;\r\n}\r\n.circluar-progress-outr{\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\r\n  margin-top: 10%;\r\n}\r\n.circluar-progress{\r\n  font-size: 200px;\r\n  background: #fcfcfc;\r\n  display: inline-block;\r\n  margin: 0;\r\n  float: none;\r\n}\r\n.circluar-progress.c100:after{\r\n  font-size: 200px;\r\n  background: #fcfcfc;\r\n}\r\n.c100.circluar-progress .bar, .c100.circluar-progress .fill{\r\n  border-color: #fb545b;\r\n}\r\n.circluar-progress.c100 > span{\r\n  color: #fb545b;\r\n  font-size: 36px;\r\n  width: 100%;\r\n  height: 100%;\r\n  line-height: 4.8em;\r\n}\r\n.circluar-progress.c100 .steps{\r\n  color: #999999;\r\n  font-size: 13px;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 54%;\r\n  z-index: 9;\r\n  line-height: 13px;\r\n}\r\n.circluar-progress.c100:hover:after{\r\n  top: 0.08em;\r\n  left: 0.08em;\r\n  width: 0.84em;\r\n  height: 0.84em;\r\n}\r\n/* Circluar progress css end (sahil) */\r\n\r\n/* Preloader */\r\n\r\n.preloader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #fff;\r\n  /* change if the mask should be a color other than white */\r\n  z-index: 9999;\r\n  /* makes sure it stays on top */\r\n}\r\n\r\n.status {\r\n  width: 200px;\r\n  height: 200px;\r\n  position: absolute;\r\n  left: 50%;\r\n  /* centers the loading animation horizontally on the screen */\r\n  top: 50%;\r\n  /* centers the loading animation vertically on the screen */\r\n  background-image: url(\"assets/images/loaders/logoAnim.gif\");\r\n  /* path to your loading animation */\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  margin: -100px 0 0 -100px;\r\n  /* is width and height divided by two */\r\n}\r\n\r\n.dash-box-new.dash-box-bottom{\r\n  background: #fff;\r\n  width: 100%;\r\n  border: 1px solid #dae2e6;\r\n  border-top: 0;\r\n  padding: 28px;\r\n  float: left;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n}\r\n.dash-box-new.dash-box-bottom ul{\r\n  width: 100%;\r\n}\r\n.dummy-switch{\r\n  width: 70px;\r\n  height: 20px;\r\n  background: #eee;\r\n  color: #999;\r\n  line-height: 20px;\r\n  font-size: 13px;\r\n  display: block;\r\n  float: right;\r\n  border-radius: 40px;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\n.dummy-switch.red{\r\n  width: 70px;\r\n  height: 20px;\r\n  background: #fb545b;\r\n  color: #fff;\r\n  line-height: 20px;\r\n  font-size: 13px;\r\n  display: block;\r\n  float: right;\r\n  border-radius: 40px;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.dummy-switch p{\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.dummy-switch span{\r\n  height: 14px;\r\n  width: 14px;\r\n  border-radius: 50%;\r\n  background: #fff;\r\n  display: inline-block;\r\n  position: relative;\r\n  top: 3px;\r\n  float:left;\r\n  right: 3px;\r\n}\r\n.dash-box-send{\r\n  height: 70px;\r\n  width: 70px;\r\n  background: rgba(255,255,255,0.2);\r\n  border-radius: 50%;\r\n  float: none;\r\n  position: relative;\r\n  text-align: center;\r\n  padding-top: 20px;\r\n  display: inline-block;\r\n}\r\n.dash-box-send i{\r\n  float: none;\r\n  font-size: 32px;\r\n}\r\n.dash-top2-text .dash-box-send{\r\n  top:60px;\r\n}\r\n/* duplicate toast */\r\n.dashboard-toast{\r\n  position: fixed;\r\n  display: none;\r\n  bottom: -100px;\r\n  background: #fff;\r\n  color: #62696d;\r\n  left: 60px;\r\n  z-index: 9999;\r\n  width: 344px;\r\n  border: 1px solid #ccc;\r\n  box-shadow: 0 0px 7px 2px rgba(0,0,0,0.2);\r\n}\r\n.dashboard-toast i {\r\n  float: none;\r\n  margin-top: 0px;\r\n  margin-right: 10px;\r\n  width: 40px;\r\n  background: #fb545b ;\r\n  color: #fff;\r\n  /* padding: 13px 13px; */\r\n  padding-left: 8px;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.dashboard-toast span {\r\n  float: none;\r\n  width: 74%;\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.dashboard-toast .btn{\r\n  float: right;\r\n  background: none;\r\n  padding: 0px;\r\n  font-size: 12px;\r\n  color: #bec5c9;\r\n}\r\n.d-toast-btn i{\r\n  background: none;\r\n  font-size: 16px;\r\n  padding: 0px;\r\n  width: auto;\r\n  padding-top: 8px;\r\n  color: #bec5c9;\r\n}\r\n\r\n\r\n\r\n/*Responsiveness start*/\r\n\r\n.mobile-menu {\r\n  display: none;\r\n}\r\n\r\n.white-logo {\r\n  display: none !important;\r\n}\r\n\r\n.company-list,\r\n.name-list {\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\n/* Start: Modal calcquiz */\r\n#calquiz-modal .modal-body{\r\n  display: inline-block;\r\n  padding: 0px;\r\n}\r\n#calquiz-modal .modal-header{\r\n  padding: 13px 17px;\r\n  border-bottom: none;\r\n  /*background: #fb6066;*/\r\n  background:#61686e;\r\n  border-radius: 7px 7px 0px 0px;\r\n  /*margin-left: -15px;\r\n  margin-right: -15px;\r\n  margin-top: -15px;*/\r\n  text-align: left;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n#calquiz-modal  .step2 input {\r\n  min-height: 38px;\r\n  border: 1px solid #cccccc;\r\n  width: 70%;\r\n  font-size: 14px;\r\n  color: #62696d;\r\n  padding-left: 10px;\r\n  margin-top: 10px;\r\n}\r\n#calquiz-modal .modal-header h5.modal-title{\r\n  color: #fff;\r\n  font-size: 14px;\r\n  /*text-transform: none;*/\r\n  text-transform: uppercase;\r\n  font-weight: normal !important;\r\n}\r\n#calquiz-modal .modal-content {\r\n  border-radius: 8px;\r\n}\r\n#calquiz-modal .calquiz-left{\r\n  /*width:50%;\r\n  padding: 35px 25px 0px 40px;\r\n  display: inline-block; float: left;\r\n  margin: 0px;*/\r\n  /*padding: 30px;\r\n  float: left;\r\n  padding-top: 50px;*/\r\n  width:100%;\r\n  float: left;\r\n}\r\n#calquiz-modal .calquiz-left a{\r\n  float: left;\r\n}\r\n#calquiz-modal .calquiz-left i{\r\n  font-size: 36px !important;\r\n  width: auto;\r\n  /*color: #989898;\r\n  background: #f3f3f3;\r\n  border-radius: 50%;\r\n  border: 3px solid rgba(251,251,251,0.67);\r\n  height: 80px;\r\n  width: 80px !important;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  padding-top: 18px !important;*/\r\n}\r\n#calquiz-modal .calquiz-left h3{\r\n  font-size: 18px;\r\n  color: #fb545b;\r\n  float: left;\r\n  width: 90%;\r\n  margin-top: 0px;\r\n}\r\n#calquiz-modal .calquiz-left label{\r\n  /*font-size: 12px;\r\n  color: #62696d;\r\n  width: 45%;*/\r\n}\r\n#calquiz-modal .calquiz-left p{\r\n  font-size: 10px;\r\n  color: #62696d;\r\n  font-family: montserratlight;\r\n  width: 100%;\r\n  padding-top: 15px;\r\n}\r\n\r\n#calquiz-modal .calc-quiz-margin {\r\n  /*width: 100%;\r\n  float: left;\r\n  text-align: left;\r\n  margin-top: 20px;*/\r\n  width: calc(50% - 60px);\r\n  float: left;\r\n  text-align: left;\r\n  margin-left: 10px;\r\n}\r\n\r\n#calquiz-modal .calquiz-left .form-group:first-child {\r\n  margin-top: 23px;\r\n}\r\n\r\n.calc-quiz-form {\r\n  padding: 0px 25px;\r\n  margin-top: 23px !important;\r\n}\r\n\r\n#calquiz-modal.modal .form-group.label-floating label.control-label,\r\n#calquiz-modal.modal .form-group.label-placeholder label.control-label {\r\n  top: -7px;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n}\r\n\r\n#calquiz-modal.modal .form-group.label-floating:not(.is-empty) label.control-label {\r\n  font-size: 10px !important;\r\n  left: 25px;\r\n}\r\n\r\n#calquiz-modal.modal .form-group.label-floating.is-focused label.control-label {\r\n  top: -20px !important;\r\n  font-size: 10px;\r\n  font-family: montserratregular;\r\n  color: #fb545b !important;\r\n  left: 25px;\r\n}\r\n#calquiz-modal.modal .form-group.label-floating:not(.is-empty) label.control-label {\r\n  top: -20px;\r\n  font-family: montserratregular;\r\n  font-size: 11px;\r\n  text-transform: uppercase;\r\n  color: #8e989f  !important;\r\n}\r\n#calquiz-modal .check-icon div {\r\n  line-height: 16;\r\n  display: inherit;\r\n  font-size: 12px;\r\n  color: #62696d;\r\n}\r\n#calquiz-modal .calquiz-right{\r\n  /*width:50%;\r\n  padding: 35px 25px 0px 40px;\r\n  display: inline-block; */\r\n  /*padding: 30px;\r\n  float: left;\r\n  padding-bottom: 45px;*/\r\n  width: 100%;\r\n  float: left;\r\n}\r\n#calquiz-modal .calquiz-right a{\r\n  float: left;\r\n}\r\n#calquiz-modal .calquiz-right i{\r\n  font-size: 36px;\r\n  /*color: #989898;\r\n  width: auto;\r\n  background: #f3f3f3;\r\n  border-radius: 50%;\r\n  border: 3px solid rgba(251,251,251,0.8);\r\n  height: 80px;\r\n  width: 80px !important;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  padding-top: 16px;\r\n  padding-left: 1px;*/\r\n}\r\n#calquiz-modal .calquiz-right h3{\r\n  font-size: 18px;\r\n  color: #fb545b;\r\n  float: left;\r\n  width: 90%;\r\n  margin-top: 0px;\r\n}\r\n#calquiz-modal .calquiz-right label{\r\n  font-size: 12px;\r\n  color: #62696d;\r\n  width: 45%;\r\n}\r\n#calquiz-modal .calquiz-right p{\r\n  font-size: 10px;\r\n  color: #62696d;\r\n  font-family: montserratlight;\r\n  width: 45%;\r\n  padding-top: 15px;\r\n}\r\n\r\n#calquiz-modal .btn-red {\r\n  color: #fff !important;\r\n  background-color: #fb545b !important;\r\n  border-color: #fb545b !important;\r\n  border-radius: 0 !important;\r\n  font-size: 14px !important;\r\n  padding: 7px 30px !important;\r\n  margin-top: 40px !important;\r\n  transition: all 0.3s ease 0s;\r\n  margin-right: 0 !important;\r\n  font-family: montserratregular;\r\n  font-weight: normal;\r\n  text-transform: none;\r\n  border-width: 2px;\r\n}\r\n\r\n#calquiz-modal .btn.btn-red:hover {\r\n  background: #fdb6b9 !important;\r\n  color: #fb545b !important;\r\n  border-color: #fdb6b9 !important;\r\n}\r\n#calquiz-modal .step2 .btn-red {\r\n  margin-bottom: 30px;\r\n  margin-top: 0px !important;\r\n}\r\n.calquiz-outr span.title{\r\n  font-size: 10px !important;\r\n  color: #fb545b;\r\n  font-family: montserratregular;\r\n  padding: 27px 25px 0px;\r\n  float: left;\r\n  width: 100%;\r\n  text-transform: uppercase;\r\n}\r\n\r\n#calquiz-modal.modal .modal-header i.material-icons {\r\n  font-size: 16px;\r\n  color: #fff;\r\n  text-shadow: none;\r\n  top: -1px;\r\n  position: relative;\r\n}\r\n\r\n#calquiz-modal .calquiz-outr .check-icon:hover label span.outer-border{\r\n  /*display: none;*/\r\n  /*border: 3px solid transparent;*/\r\n  /* opacity: 0; */\r\n}\r\n\r\n#calquiz-modal .calquiz-outr .check-icon label .outer-border:after{\r\n  /*content: '';\r\n  top: -7px;\r\n  left: -7px;\r\n  padding: 7px;\r\n  box-shadow: 0 0 0 3px rgba(251, 84, 91, 0.67);\r\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\r\n  -webkit-transform: scale(.8);\r\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\r\n  -moz-transform: scale(.8);\r\n  -ms-transform: scale(.8);\r\n  transition: transform 0.2s, opacity 0.2s;\r\n  transform: scale(.8);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  content: '';\r\n  -webkit-box-sizing: content-box;\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;*/\r\n}\r\n\r\n#calquiz-modal .calquiz-outr .check-icon:hover label .outer-border:after{\r\n  -webkit-transform: scale(1);\r\n  -moz-transform: scale(1);\r\n  -ms-transform: scale(1);\r\n  transform: scale(1);\r\n  opacity: 1;\r\n}\r\n\r\n#calquiz-modal .calquiz-outr .check-icon input[type=\"radio\"]:checked + label .outer-border:after{\r\n  /*content: '';\r\n  top: -2px;\r\n  left: -2px;\r\n  padding: 7px;\r\n  box-shadow: none;\r\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\r\n  -webkit-transform: scale(.8);\r\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\r\n  -moz-transform: scale(.8);\r\n  -ms-transform: scale(.8);\r\n  transition: opacity 0.2s, -webkit-transform 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;\r\n  transform: scale(.8);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  width: 80%;\r\n  height: 80%;\r\n  border-radius: 50%;\r\n  content: '';\r\n  box-sizing: content-box;\r\n  border: 3px solid #000;*/\r\n}\r\n\r\n#calquiz-modal .calquiz-outr .check-icon:hover label i{\r\n  /*display: none;*/\r\n  /*color: #fff;\r\n  background: #fb545b;\r\n  border: 3px solid rgba(251, 84, 91, 0.67);*/\r\n}\r\n\r\n/* Checkbox with tick icons */\r\n.check-icon { width: 100%; padding: 8px 15px; font-size: 16px;font-weight: normal;\r\n  line-height: 16px;border-bottom: 0;}\r\n.check-icon.last {border: 2px solid #eee;}\r\n.check-icon:hover, .check-icon.last:hover{cursor:pointer;}\r\n.check-icon input[type=\"radio\"] {left: -9999px; position: absolute;}\r\n.check-icon label {content: \"\"; width: 24px; height: 24px;margin-bottom: 0px;}\r\n.modal .check-icon label i.material-icons{     font-size: 18px;\r\n  color: #fb545b;\r\n\r\n}\r\n\r\n.check-icon input[type=\"radio\"]:checked + label span.outer-border {\r\n  /*border: 3px solid rgba(251, 84, 91, 0.67) !important;\r\n  border-radius: 50%;\r\n  height: 80px;\r\n  width: 80px !important;\r\n  display: inline-table;*/\r\n}\r\n\r\n.check-icon label span.outer-border{\r\n  /*border: 3px solid rgba(102, 102, 102, 0.67);\r\n  border-radius: 50%;\r\n  height: 80px;\r\n  width: 80px !important;\r\n  display: inline-table;\r\n  -webkit-transition: background 0.2s, color 0.2s;\r\n  -moz-transition: background 0.2s, color 0.2s;\r\n  transition: background 0.2s, color 0.2s;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  position: relative;\r\n  z-index: 1;\r\n  color: #fff;*/\r\n}\r\n\r\n.check-icon input[type=\"radio\"]:checked + label i.material-icons {\r\n  /*color: #fff !important;\r\n  background: #fb545b !important;\r\n  border: 0px solid #fff !important;\r\n  -webkit-transform: scale(.8);\r\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\r\n  -moz-transform: scale(.8);\r\n  -ms-transform: scale(.8);\r\n  transition: transform 0.2s, opacity 0.2s;\r\n  transform: scale(.8);*/\r\n}\r\n\r\n.check-icon input[type=\"radio\"]:checked + label::after{\r\n  background: #fb545b;\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 18px;\r\n  height: 18px;\r\n  left: 0px;\r\n  font-size: 13px;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n  padding-left: 3px;\r\n}\r\n\r\n#calquiz-modal .calquiz-outr .check-icon:hover input[type=\"radio\"]:checked + label {\r\n  border:none;\r\n}\r\n\r\n.check-icon input[type=\"radio\"]:checked + label::after{\r\n\r\n}\r\n\r\n/*.check-icon input[type=\"radio\"]:checked + label {\r\n    background-color: #00aea5;\r\n    border: none;top: 1px;\r\n}*/\r\n\r\n/*.check-icon input[type=\"radio\"]:checked + label::after {\r\n   font-family: \"Material Icons\"; content: \"\\e5ca\";\r\n}*/\r\n\r\n.check-icon div {\r\n  /*line-height: 38px; */\r\n  display: inherit;\r\n}\r\n\r\n#calquiz-modal .calquiz-outr .check-icon label{\r\n  /*width: 18px;\r\n  float: left;*/\r\n  text-align: left;\r\n  border: none;\r\n  margin:0px;\r\n}\r\n\r\n#calquiz-modal .calquiz-outr .step2 .check-icon label{\r\n  text-align: center;\r\n}\r\n\r\n#calquiz-modal .calquiz-outr .check-icon:hover label{\r\n  /*content: \"\";\r\n  display: inline-block;\r\n  width: 18px;\r\n  height: 18px;\r\n  top: 0px;\r\n  border: 2px solid #fb545b;\r\n  border-radius: 50%;\r\n  margin: 0 auto;*/\r\n  cursor: pointer;\r\n}\r\n\r\n#calquiz-modal .calquiz-outr h3{\r\n  font-size: 18px;\r\n  color: #fb545b;\r\n  float: left;\r\n  width: 100%;\r\n  margin-top: 0px;\r\n  text-align: left;\r\n}\r\n#calquiz-modal .calquiz-outr h3.example-heading{\r\n  font-size: 14px;\r\n  color: rgba(97,104,110,0.5);\r\n  float: left;\r\n  width: 100%;\r\n  margin-top: 0px;\r\n  text-align: left;\r\n}\r\n#calquiz-modal .calquiz-outr label{\r\n  font-size: 12px;\r\n  color: #62696d;\r\n  /*width: 100%;*/\r\n  padding: 0px;\r\n  float: left;\r\n  text-align: center;\r\n  height: auto;\r\n  width:auto;\r\n}\r\n#calquiz-modal .calquiz-left .check-icon {\r\n  padding: 30px !important;\r\n  float: left;\r\n  padding-top: 50px !important;\r\n}\r\n#calquiz-modal .calquiz-right .check-icon {\r\n  padding: 30px !important;\r\n  float: left;\r\n  padding-bottom: 50px !important;\r\n}\r\n#calquiz-modal .step2 .calquiz-left .check-icon {\r\n  padding:0px !important;\r\n}\r\n#calquiz-modal .step2 .calquiz-right .check-icon {\r\n  padding:0px !important;\r\n  margin-bottom: 0;\r\n}\r\n#calquiz-modal .calquiz-outr p{\r\n  font-size: 12px;\r\n  color: #62696d;\r\n  font-family: montserratlight;\r\n  width: 100%;\r\n  line-height:20px;\r\n  padding:0px;\r\n  text-align: left;\r\n}\r\n\r\n#calquiz-modal .calquiz-outr span{\r\n  /*float: left;*/\r\n  width: 90%;\r\n  font-size: 14px;\r\n  /*color: #62696d;*/\r\n  line-height: 20px;\r\n  float: left;\r\n}\r\n\r\n.calquiz-outr{\r\n  float: left;\r\n  width: 100%;\r\n}\r\n#calquiz-modal .res-outer{\r\n  padding-left:10px;\r\n}\r\n#calquiz-modal .check-icon{\r\n  width: 100%;\r\n}\r\n.footer-btn{\r\n  float: left;\r\n  width: 100%;\r\n}\r\n\r\n#calquiz-modal .alert.alert-danger{\r\n  top: 0px;\r\n  left: 89px;\r\n  float: left;\r\n  text-align: left;\r\n}\r\n\r\n#calquiz-modal .alert.alert-danger p{\r\n  position: absolute;\r\n  width: 100%;\r\n  padding-top: 0px;\r\n  color: #fb545b !important;\r\n}\r\n\r\n#calquiz-modal .alert.alert-danger p span.mat-icon {\r\n  float: left;\r\n  width: auto;\r\n}\r\n\r\n#calquiz-modal .alert.alert-danger p span.mat-icon i.material-icons {\r\n  font-size: 12px !important;\r\n  margin-right: 5px;\r\n  margin-top: 4px;\r\n  color: #fb545b;\r\n  width: auto !important;\r\n  padding-top: 0px !important;\r\n  height: auto !important;\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n.step1 {\r\n  float: left;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.step2 {\r\n  float: left;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.full-width {\r\n  width: 100% !important;\r\n  float: left;\r\n}\r\n\r\n.text-center{\r\n  text-align: center !important;\r\n}\r\n\r\n#calquiz-modal .calquiz-outr .step2 h3{\r\n  width: 100%;\r\n  text-align:center;\r\n}\r\n\r\n#calquiz-modal .calquiz-outr .step2 input{\r\n    min-height: 38px;\r\n    border: 1px solid #cccccc;\r\n    width: 70%;\r\n    font-size: 14px;\r\n    color: #62696d;\r\n    margin-top: 10px;\r\n    padding: 0px 0px 0px 10px;\r\n    margin-bottom: 0;\r\n}\r\n#calquiz-modal .step2 .calquiz-right {\r\n  width: 50%;\r\n  padding: 30px 40px;\r\n  display: inline-block;\r\n  float: left;\r\n  margin: 0;\r\n}\r\n#calquiz-modal .calquiz-outr .step2 label {\r\n  font-size: 12px;\r\n  color: #62696d;\r\n  width: 100%;\r\n  padding: 0px;\r\n  float: left;\r\n  text-align: center;\r\n  height: 100%;\r\n}\r\n.step2 .check-icon input[type=\"radio\"]:checked + label span.outer-border {\r\n  border: 3px solid rgba(251, 84, 91, 0.67) !important;\r\n  border-radius: 50%;\r\n  height: 80px;\r\n  width: 80px !important;\r\n  display: inline-table;\r\n}\r\n#calquiz-modal .calquiz-outr .step2 span {\r\n  width: 100%;\r\n  line-height: 16px;\r\n  float: none;\r\n}\r\n#calquiz-modal .calquiz-outr .step2 .alert span {\r\n  font-size: 10px !important;\r\n}\r\n.step2 .check-icon label span.outer-border {\r\n  border: 3px solid rgba(102, 102, 102, 0.67);\r\n  border-radius: 50%;\r\n  height: 80px;\r\n  width: 80px !important;\r\n  display: inline-table;\r\n  transition: background 0.2s, color 0.2s;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  position: relative;\r\n  z-index: 1;\r\n  color: #fff;\r\n}\r\n#calquiz-modal .step2 .calquiz-right i {\r\n  font-size: 42px;\r\n  color: #989898;\r\n  width: auto;\r\n  /*background: #f3f3f3;*/\r\n  border-radius: 50%;\r\n  /*border: 3px solid rgba(251,251,251,0.8);*/\r\n  /*height: 80px;\r\n  width: 80px !important;*/\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  padding-top: 22px;\r\n  padding-left: 1px;\r\n}\r\n.step2 .check-icon input[type=\"radio\"]:checked + label i.material-icons {\r\n  /*color: #fff !important;\r\n  background: #fb545b !important;*/\r\n  color: #fb545b !important;\r\n  border: 0px solid #fff !important;\r\n  -webkit-transform: scale(.8);\r\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\r\n  -moz-transform: scale(.8);\r\n  -ms-transform: scale(.8);\r\n  transition: opacity 0.2s, -webkit-transform 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;\r\n  transform: scale(.8);\r\n}\r\n#calquiz-modal .calquiz-outr .step2 .check-icon input[type=\"radio\"]:checked + label .outer-border:after {\r\n  content: '';\r\n  top: -2px;\r\n  left: -2px;\r\n  padding: 7px;\r\n  box-shadow: none;\r\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\r\n  -webkit-transform: scale(.8);\r\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\r\n  -moz-transform: scale(.8);\r\n  -ms-transform: scale(.8);\r\n  transition: opacity 0.2s, -webkit-transform 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;\r\n  transform: scale(.8);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  width: 80%;\r\n  height: 80%;\r\n  border-radius: 50%;\r\n  content: '';\r\n  box-sizing: content-box;\r\n  border: 3px solid #000;\r\n}\r\n#calquiz-modal .calquiz-outr .step2 .check-icon label .outer-border:after {\r\n  content: '';\r\n  top: -7px;\r\n  left: -7px;\r\n  padding: 7px;\r\n  box-shadow: 0 0 0 3px rgba(251, 84, 91, 0.67);\r\n  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;\r\n  -webkit-transform: scale(.8);\r\n  -moz-transition: -moz-transform 0.2s, opacity 0.2s;\r\n  -moz-transform: scale(.8);\r\n  -ms-transform: scale(.8);\r\n  transition: opacity 0.2s, -webkit-transform 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s;\r\n  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;\r\n  transform: scale(.8);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  content: '';\r\n  box-sizing: content-box;\r\n}\r\n#calquiz-modal .step2 .calc-quiz-margin {\r\n  width: 100%;\r\n  float: left;\r\n  text-align: left;\r\n  margin-top: 20px;\r\n  margin-left: 0px;\r\n}\r\n#calquiz-modal .back-icon {\r\n  height: 0px;\r\n  position: relative;\r\n  top: 0px;\r\n  left: -60px;\r\n  float: left;\r\n  width: 100%;\r\n  z-index: 9;\r\n}\r\n\r\n#calquiz-modal .back-icon i.material-icons {\r\n  font-size: 18px !important;\r\n  color: #989898;\r\n  border: none;\r\n  background: none;\r\n  cursor: pointer;\r\n  padding-top: 0px !important;\r\n  opacity: 0.7;\r\n  width: 17px !important;\r\n  height: 17px;\r\n}\r\n\r\n#calquiz-modal .back-icon i.material-icons:hover {\r\n  opacity: 1;\r\n  /*-webkit-animation: spinAround 2s linear infinite;\r\n  -moz-animation: spinAround 2s linear infinite;\r\n  animation: spinAround 2s linear infinite;*/\r\n}\r\n\r\n-webkit-keyframes spinAround {\r\nfrom {\r\n  -webkit-transform: rotate(0deg)\r\n}\r\nto {\r\n  -webkit-transform: rotate(360deg);\r\n}\r\n}\r\n@-moz-keyframes spinAround {\r\n  from {\r\n    -moz-transform: rotate(0deg)\r\n  }\r\n  to {\r\n    -moz-transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spinAround {\r\n  from {\r\n    transform: rotate(0deg)\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.hide{\r\n  display: none;\r\n}\r\n\r\n#calquiz-modal .next-step {\r\n  padding: 7px 50px !important;\r\n}\r\n\r\n.custom-width{\r\n  width:700px;\r\n}\r\n.custom-width .modal-body{\r\n  padding: 0px;\r\n  padding-bottom: 0px !important;\r\n}\r\n.custom-width .modal-header{\r\n  margin:0px !important;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.header-grey{\r\n  background: #61686e !important;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n}\r\n.animated-icon{\r\n\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  overflow: hidden;\r\n  margin: 4px;\r\n  width: 40px !important;\r\n  height: 40px;\r\n  font-size: 0;\r\n  text-indent: -9999px;\r\n  border-radius: 50%;\r\n  -webkit-transition: background 0.5s;\r\n  transition: background 0.5s;\r\n  position: relative;\r\n  top: -7px;\r\n}\r\n.animated-calc{\r\n  /*background: url(app/site/components/+dashboard/images/icon_01.png);*/\r\n  background: url(/assets/images/dashboard/icon_01.png);\r\n  background-position: -2px -8px;\r\n}\r\n.animated-recom{\r\n  /*background: url(app/site/components/+dashboard/images/icon_02.png);*/\r\n   background: url(/assets/images/dashboard/icon_02.png);\r\n  background-position: -2px -8px;\r\n}\r\n.step1 .calquiz-left:hover{\r\n  background: #f6f8f9;\r\n}\r\n.step1 .calquiz-left:hover .animated-calc{\r\n  background-position: -2px -59px;\r\n}\r\n\r\n.step1 .calquiz-right:hover{\r\n  background:#f6f8f9;\r\n}\r\n.step1 .calquiz-right:hover .animated-recom{\r\n  background-position: -2px -59px;\r\n}\r\n\r\n\r\n\r\n\r\n/* End: Modal calcquiz */\r\n\r\n\r\n\r\n\r\n@media (min-width: 320px) and (max-width: 768px) {\r\n  #new-header .navbar-fixed-top .nav-padding {\r\n    padding-right: 0px;\r\n  }\r\n  .full-menu,\r\n  .dash-circle,\r\n  .dash-prog-outer h2 {\r\n    display: none;\r\n  }\r\n  .main-logo {\r\n    display: none !important;\r\n  }\r\n  .mobile-menu {\r\n    display: block;\r\n    float: right;\r\n    margin-top: 9px;\r\n    position: relative;\r\n  }\r\n  #new-header .navbar-default {\r\n    background: #fb5f66 !important;\r\n    border: none;\r\n  }\r\n  .mobile-menu button {\r\n    border: none;\r\n    box-shadow: none;\r\n    color: #fff;\r\n    background: none;\r\n  }\r\n  .mobile-menu .btn-default:hover {\r\n    color: #fff;\r\n    background: none;\r\n  }\r\n  .dash-boxes-outr {\r\n    padding: 10px;\r\n    padding-top: 30px;\r\n  }\r\n  .mobile-menu .dropdown-menu {\r\n    background: #62696d;\r\n    top: -11px;\r\n    border-radius: 0px;\r\n    left: -176px;\r\n    width: 235px;\r\n    font-family: montserratlight;\r\n    padding-bottom: 55px;\r\n  }\r\n  .mobile-menu .name-dropdown-border {\r\n    width: 100%;\r\n    margin: 5px 0px;\r\n  }\r\n  .mobile-menu .user-outr {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0px;\r\n    display: block;\r\n    text-transform: capitalize;\r\n  }\r\n  .mobile-menu .user-outr li {\r\n    float: right;\r\n    font-size: 24px;\r\n    font-family: montserratlight;\r\n    color: #fff;\r\n    margin-right: 24px;\r\n    /* margin: 10px 19px; */\r\n    margin-top: 8px;\r\n    margin-bottom: 6px;\r\n  }\r\n  .mobile-menu .user-outr li a {\r\n    margin-right: 30px;\r\n  }\r\n  .mobile-menu .company-list li,\r\n  .mobile-menu .name-list li {\r\n    margin: 10px 0px;\r\n    text-align: right;\r\n    font-size: 16px;\r\n    width: 100%;\r\n    float: left;\r\n    padding-right: 20px;\r\n  }\r\n  .mobile-menu .company-list li a,\r\n  .mobile-menu .name-list li a {\r\n    float: right;\r\n    color: #fff;\r\n  }\r\n  .mobile-menu .company-list li a i {\r\n    margin-right: 20px;\r\n    float: left;\r\n  }\r\n  .mobile-menu .name-list li a i {\r\n    margin-left: 20px;\r\n    float: right;\r\n  }\r\n  .mobile-menu .company-list-title {\r\n    float: left;\r\n    color: #fff;\r\n  }\r\n  .white-logo {\r\n    display: none !important;\r\n  }\r\n  .dash-prog-outer {\r\n    float: left;\r\n    width: 100%;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n  }\r\n  .dash-prog-outer h5 {\r\n    font-size: 24px;\r\n    text-align: center;\r\n    max-width: 90%;\r\n    margin-bottom: 1px;\r\n\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper {\r\n    min-height: 35px;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n    margin: 0 auto;\r\n    float: none;\r\n    text-align: center;\r\n  }\r\n  #new-header .navbar-header {\r\n    float: left;\r\n    margin-left: 0px;\r\n    margin-right: 0px !important;\r\n  }\r\n  #new-header .navbar-logopadding {\r\n    padding-right: 0px;\r\n    padding-top: 0px;\r\n  }\r\n  .circle-sec {\r\n    float: left;\r\n    width: 33%;\r\n    text-align: center;\r\n  }\r\n  .dash-circle-red,\r\n  .dash-circle-pink,\r\n  .dash-circle-d-pink {\r\n    float: none;\r\n    /* margin-right: 20px; */\r\n    margin: 0 auto;\r\n    width: 67px;\r\n    height: 38px;\r\n    padding-top: 13px;\r\n    border: none;\r\n  }\r\n  .dash-circle-red i,\r\n  .dash-circle-pink i,\r\n  .dash-circle-d-pink i {\r\n    font-size: 30px;\r\n  }\r\n  .circle-cal-outer h2 {\r\n    color: #62696d;\r\n    float: left;\r\n    font-family: montserratregular !important;\r\n    font-size: 24px !important;\r\n    margin: 15px 0 5px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    width: 100%;\r\n  }\r\n  .circle-cal-outer h5 {\r\n    float: left;\r\n    color: #8e989f;\r\n    font-size: 10px;\r\n    font-family: montserratregular;\r\n    text-transform: uppercase;\r\n    margin-top: 0;\r\n    width: 100%;\r\n  }\r\n  .circle-cal-outer {\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n  .user-outr {\r\n    float: none;\r\n    width: 130px;\r\n    padding: 0;\r\n    margin: 0 auto;\r\n    margin-top: 30px;\r\n  }\r\n  .dash-top2-textinner h3 {\r\n    font-size: 20px;\r\n    margin-top: 5px;\r\n  }\r\n  .dash-top2-textinner .company-dropdown-wrapper .dropdown-toggle span {\r\n    width: auto !important;\r\n    font-size: 14px;\r\n  }\r\n  .user-outr li a img {\r\n    width: 44px;\r\n    height: 44px;\r\n  }\r\n  .user-outr {\r\n    display: none;\r\n    float: none;\r\n    width: 160px;\r\n    margin-top: 30px;\r\n  }\r\n  .dash-top2-textinner .company-dropdown-wrapper {\r\n    float: left;\r\n    margin: 0;\r\n    width: 100%;\r\n  }\r\n  .dash-top2-textinner .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n    float: left;\r\n    text-align: left;\r\n  }\r\n  #new-header .navbar-default {\r\n    height: 56px;\r\n  }\r\n  .white-logo .navbar-brand img {\r\n    height: 53px;\r\n    margin-top: -20px;\r\n    margin: 0 auto;\r\n    margin-top: -20px;\r\n  }\r\n  .white-logo .navbar-brand {\r\n    float: none;\r\n  }\r\n  .dashboard-topsec {\r\n    padding: 0px;\r\n    padding-top: 0px;\r\n    padding-bottom: 5px;\r\n    margin-top: 0px;\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n  .circle-parent {\r\n    padding-bottom: 20px;\r\n  }\r\n  .user-outr li a.add-user {\r\n    width: 45px;\r\n    height: 45px;\r\n    padding-top: 9px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\r\n    top: -30px;\r\n    left: 17px;\r\n    font-size: 34px;\r\n    position: relative;\r\n    color: #f87b80;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\r\n    font-size: 16px;\r\n  }\r\n  .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\r\n    width: 91%;\r\n    font-size: 14px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\r\n    width: 35px;\r\n    height: 35px;\r\n    padding-top: 8px;\r\n    font-size: 14px;\r\n    top: 13px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\r\n    font-size: 14px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\r\n    font-size: 24px;\r\n  }\r\n  .company-block-content {\r\n    margin-left: 50px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n    left: 42px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\r\n    right: 34px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n    top: 8px;\r\n    left: -8px;\r\n  }\r\n  .choosetem-topsec p {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  .choosetem-topsec h3 {\r\n    font-size: 20px;\r\n  }\r\n  .choosetemp-social li {\r\n    margin-bottom: 0px;\r\n    margin-top: 20px;\r\n  }\r\n  .choosetemp-actions {\r\n    margin-top: 10px;\r\n    width: 100%;\r\n  }\r\n\r\n  .choosetemp-boxes-outr {\r\n    padding: 0px;\r\n  }\r\n  .choosetemp-box-figure2 {\r\n    padding: 0px;\r\n  }\r\n\r\n  .dashboard-topsec{\r\n    padding-top: 0px;\r\n    margin-top: 0px;\r\n  }\r\n\r\n  .bootbox .modal-content {\r\n    float: left;\r\n    width: 62%;\r\n    margin-left: 5px;\r\n  }\r\n\r\n  .one-line-bootbox .bootbox-body-left {\r\n    min-height: 122px;\r\n  }\r\n\r\n  .bootbox-body .bootbox-body-right {\r\n    width: 80%;\r\n  }\r\n\r\n  #calquiz-modal .calquiz-outr .step2 input{\r\n    width: 100%;\r\n  }\r\n\r\n  #calquiz-modal .alert.alert-danger{\r\n    left: 0px;\r\n  }\r\n\r\n  #calquiz-modal .calquiz-left{\r\n    width: 100%;\r\n    /*padding: 35px 25px 0px 25px;*/\r\n    float: left;\r\n  }\r\n\r\n  #calquiz-modal .calquiz-right{\r\n    /*width: 100%;\r\n    padding: 25px;\r\n    padding-bottom: 35px;*/\r\n    width:100%;\r\n    float: left;\r\n  }\r\n  #calquiz-modal .calquiz-right i{\r\n    padding-left:0px;\r\n  }\r\n  #calquiz-modal .calquiz-left i{\r\n    padding-left: 0px;\r\n  }\r\n  #calquiz-modal .calquiz-left .check-icon{\r\n    padding: 30px 20px!important;\r\n  }\r\n  #calquiz-modal .calquiz-right .check-icon{\r\n    padding: 30px 20px!important;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 990px) and (max-width:1300px) {\r\n  .user-outr{ width:100%;}\r\n  .dash-prog-outer{\r\n    width:190px;\r\n  }\r\n  .circle-sec{\r\n    text-align: center;\r\n  }\r\n  .dash-circle-pink{\r\n    width: 57px;\r\n    height: 57px;\r\n    padding-top: 7px;\r\n    margin-right: 10px;\r\n  }\r\n  .dash-circle-red{\r\n    width: 57px;\r\n    height: 57px;\r\n    padding-top: 7px;\r\n    margin-right: 10px;\r\n  }\r\n  .dash-circle-d-pink{\r\n    width: 57px;\r\n    height: 57px;\r\n    padding-top: 7px;\r\n    margin-right: 10px;\r\n  }\r\n  .circle-cal-outer{\r\n    width: 54%;\r\n  }\r\n  .circle-cal-outer h2{\r\n    width: 94%;\r\n  }\r\n  .circle-cal-outer h5{\r\n    width: 94%;\r\n  }\r\n  .dash-prog-outer h2{\r\n    font-size: 15px !important;\r\n  }\r\n  .dash-prog-outer h5{\r\n    font-size: 11px;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\r\n    width: 100%;\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper{\r\n    width:50%;\r\n  }\r\n  .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle{\r\n    width: 100%;\r\n  }\r\n\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu{\r\n    left: 6px;\r\n  }\r\n}\r\n@media (min-width:320px) and (max-width:767px){\r\n  .res-outer {\r\n    width: 80%;\r\n    margin-left: 58px;\r\n    margin-top: 10px;\r\n    padding-left: 0 !important;\r\n  }\r\n  .custom-width{\r\n    width:auto;\r\n  }\r\n  #calquiz-modal .calc-quiz-margin{\r\n    width:calc(100% - 60px);\r\n  }\r\n}\r\n/* Start: bootbox modal */\r\n@media screen and (min-width: 320px) and (max-width: 320px){\r\n  .bootbox .modal-content {\r\n    width: 62%;\r\n    margin-left: 5px;\r\n  }\r\n\r\n  .one-line-bootbox .bootbox-body-left {\r\n    min-height: 122px;\r\n  }\r\n\r\n  .bootbox-body .bootbox-body-right {\r\n    width: 80%;\r\n  }\r\n\r\n  .dashboard-toast{\r\n    left: 8px !important;\r\n    width: 285px !important;\r\n  }\r\n\r\n  .dashboard-toast i{\r\n    width: 30px !important;\r\n    padding-left: 3px;\r\n  }\r\n\r\n  .d-toast-btn i{\r\n    width: auto !important;\r\n    padding-left: 0px !important;\r\n  }\r\n\r\n  .toast{\r\n    left: 8px !important;\r\n    width: 285px !important;\r\n  }\r\n\r\n  .toast i{\r\n    width: 30px !important;\r\n    padding-left: 3px;\r\n  }\r\n\r\n  .toast .btn i{\r\n    width: auto !important;\r\n    padding-left: 0px !important;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 480px) and (max-width: 480px){\r\n  .bootbox .modal-content {\r\n    width: 90%;\r\n    margin-left: 15px;\r\n  }\r\n}\r\n\r\n/* End: bootbox modal */\r\n\r\n/* custom material css start (sahil) */\r\n    .sahil-material .form-control {\r\n        height: 38px;\r\n        padding: 7px 0;\r\n        font-size: 14px;\r\n        line-height: 1.42857143;\r\n        font-family: montserratregular;\r\n        color: #62696d;\r\n    }\r\n    .sahil-material .form-group label.control-label {\r\n        font-size: 14px;\r\n        line-height: 1.07142857;\r\n        color: #8e989f;\r\n        font-weight: 400;\r\n        margin: 16px 0 0 0;\r\n        font-family: montserratregular;\r\n    }\r\n    .sahil-material .form-group label.control-label.seo-static-label{\r\n        text-transform: uppercase !important;\r\n        font-size: 11px;\r\n        color: #8e989f !important;\r\n    }\r\n    .sahil-material .form-group.label-floating label.control-label,\r\n    .sahil-material .form-group.label-placeholder label.control-label {\r\n        top: -7px;\r\n        font-size: 14px;\r\n        line-height: 18px;\r\n        color: #8e989f;\r\n    }\r\n    .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\r\n        top: -20px;\r\n        font-family: montserratregular;\r\n        font-size: 11px;\r\n        text-transform: uppercase;\r\n        color: #8e989f !important;\r\n    }\r\n    .sahil-material .form-group.label-floating.is-focused label.control-label {\r\n        top: -20px;\r\n        font-size: 11px;\r\n        font-family: montserratregular;\r\n        color: #8e989f !important;\r\n    }\r\n    .sahil-material .form-group.is-focused label,\r\n    .sahil-material .form-group.is-focused label.control-label {\r\n        font-size: 11px;\r\n        font-family: montserratregular;\r\n        color: #8e989f !important;\r\n        text-transform: uppercase;\r\n    }\r\n    .sahil-material .form-control,\r\n    .sahil-material .form-group .form-control {\r\n        border: 0 !important;\r\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n        background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\r\n        background-image: -o-linear-gradient(#009688, #009688), -o-linear-gradient(#d7dbdd, #d7dbdd);\r\n        background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\r\n    }\r\n    /*input:-webkit-autofill,\r\n    input:-webkit-autofill:hover,\r\n    input:-webkit-autofill:focus,\r\n    input:-webkit-autofill:active,\r\n    .form-group.is-focused input:-webkit-autofill,\r\n    .form-group.is-focused input:-webkit-autofill:hover,\r\n    .form-group.is-focused input:-webkit-autofill:focus,\r\n    .form-group.is-focused input:-webkit-autofill:active {\r\n        -webkit-box-shadow: 0 0 0px 20px #fff inset !important;\r\n    }*/\r\n    .sahil-material .form-group.is-focused .form-control {\r\n        outline: none;\r\n        background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n        background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n        background-image: -o-linear-gradient(#fb545b, #fb545b), -o-linear-gradient(#D2D2D2, #D2D2D2);\r\n        background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\r\n        -webkit-background-size: 100% 2px, 100% 1px;\r\n                background-size: 100% 2px, 100% 1px;\r\n        -webkit-box-shadow: none;\r\n                box-shadow: none;\r\n        -webkit-transition-duration: 0.3s;\r\n            -o-transition-duration: 0.3s;\r\n                transition-duration: 0.3s;\r\n    }\r\n\r\n/* custom material css end (sahil) */\r\n\r\n"

/***/ },

/***/ 1147:
/***/ function(module, exports) {

module.exports = "<sd-toolbar [page]=\"'dashboard'\"></sd-toolbar>\r\n<div class=\"preloader\" *ngIf=\"loader==0\">\r\n  <div class=\"status\">&nbsp;</div>\r\n</div>\r\n<!--<div class=\"loader\" *ngIf=\"loader==0\"></div>-->\r\n<div class=\"dashboard-toast\" style=\"display: none; bottom:60px;\"><i class=\"material-icons toast-ic\">check</i>\r\n  <span class=\"dash-toast-msg\">Calculator Deleted Successfully.</span>\r\n  <button type=\"button\" class=\"btn d-toast-btn\"><i class=\"material-icons\">clear</i></button>\r\n</div>\r\n<!-- Dashboard Section -->\r\n<div class=\"col-md-12 dashboard-topsec\">\r\n  <div class=\"col-md-4 col-sm-12 col-xs-12\">\r\n    <div class=\"dash-circle\">{{currentCompanyInit}}</div>\r\n    <div class=\"dash-prog-outer\">\r\n      <h2>Hey {{(username.substr(0,username.indexOf(' '))=='')?username:username.substr(0,username.indexOf(' '))}}, <br>We wish you a productive day :)</h2>\r\n      <h5 class=\"ellipsis hide\">{{currentCompany.name}}</h5>\r\n      <div class=\"btn-group company-dropdown-wrapper hide\">\r\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"material-icons\">keyboard_arrow_down</i>\r\n        </button>\r\n        <ul class=\"dropdown-menu\">\r\n          <li>\r\n            <a href=\"javascript:void(0);\" (click)=\"callGA('ADDCOMPANY')\" class=\"hvr-sweep-to-right add-new-company\" data-toggle=\"modal\" data-target=\"#add-new-company\">\r\n              <i class=\"material-icons\">playlist_add</i> &nbsp;Add New Company\r\n            </a>\r\n          </li>\r\n          <div class=\"company-dropdown-main\">\r\n            <div class=\"company-dropdown-list\" [class.slimscroll]=\"myCompaniesList.length > 3\">\r\n              <li *ngFor=\"let company of myCompaniesList\">\r\n                <a href=\"//{{company.sub_domain}}{{subdomainExtension}}/dashboard\" class=\"hvr-sweep-to-right\" *ngIf=\"company.user_company.active\">\r\n                  <div class=\"company-block\">\r\n                    <span class=\"company-block-inner\">{{company.name[0]}}</span>\r\n                  </div>\r\n                  <div class=\"company-block-content\">\r\n                    <span class=\"company-title ellipsis\">{{company.name}}</span>\r\n                    <span class=\"company-site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n            </div>\r\n          </div>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-12 col-xs-12\">\r\n    <div class=\"circle-sec\">\r\n      <div class=\"dash-circle-red\"><i class=\"material-icons\">person</i></div>\r\n      <div class=\"circle-cal-outer\">\r\n        <h2>{{totalUniqueVisitors}}</h2>\r\n        <h5>Unique Visitors</h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"circle-sec\">\r\n      <div class=\"dash-circle-pink\"><i class=\"material-icons\">check_circle</i></div>\r\n      <div class=\"circle-cal-outer\">\r\n        <h2>{{totalLeads}}</h2>\r\n        <h5>Leads Generated</h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"circle-sec\">\r\n      <div class=\"dash-circle-d-pink\"><i class=\"material-icons\">trending_up</i></div>\r\n      <div class=\"circle-cal-outer\">\r\n        <h2>{{overallConversionRate}}%</h2>\r\n        <h5>Conversion Rate</h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-sm-12 col-xs-12\">\r\n    <ul class=\"user-outr\">\r\n\r\n      <li *ngFor=\"let user of currentCompanyUsers\">\r\n        <a href=\"javascript:void(0);\" class=\"more-users popover-wrapper\">\r\n          <span>{{user.name[0]}}</span>\r\n          <div class=\"more-popover-block single-user\">\r\n            <p class=\"ellipsis\">{{user.name}}</p>\r\n            <label class=\"ellipsis\">{{user.user_company.role}}</label>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li *ngIf=\"moreCompanyUsers.length > 0\">\r\n        <a href=\"javascript:void(0);\" class=\"more-users popover-wrapper\">\r\n          <i class=\"material-icons\">more_horiz</i>\r\n          <div class=\"more-popover-block \">\r\n            <ul>\r\n              <li *ngFor=\"let user of moreCompanyUsers\">\r\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\">\r\n                  <span>{{user.name[0]}}</span>\r\n                  <div class=\"more-users-list\">\r\n                    <p class=\"ellipsis\">{{user.name}}</p>\r\n                    <label class=\"ellipsis\">{{user.user_company.role}}</label>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a (click)=\"userCheckLimit()\" href=\"javascript:void(0);\" class=\"add-user popover-wrapper\">\r\n          <i class=\"material-icons\">add</i>\r\n          <div class=\"popover-block\">Add collaborator</div>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<!-- Dashboard Section End-->\r\n<!-- Dashboard 3 boxes start (sahil) -->\r\n<div class=\"col-xs-12 dash-boxes-outr\">\r\n  <div class=\"col-xs-12 col-sm-12 col-md-4\">\r\n    <div class=\"dash-box dash-top3\">\r\n      <div class=\"dash-top3-textinner hide\">\r\n        <label>Now</label>\r\n        <h3>Create a New Experience</h3>\r\n      </div>\r\n      <div class=\"dash-top3circletable\">\r\n        <!--<a href=\"javascript:void(0);\" class=\"dash-top3-circle\" (click)=\"addNewCalc();callGA('ADDCALC')\"  data-toggle=\"modal\" data-target=\"#calquiz-modal\">-->\r\n        <a href=\"javascript:void(0);\" class=\"dash-top3-circle\"  (click)=\"initCalcQuiz()\" data-toggle=\"modal\" data-target=\"#calquiz-modal\">\r\n          <i class=\"material-icons\">add_circle_outline</i> Create a New Experience\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngFor=\"let app of apps\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 \">\r\n      <div class=\"dash-box\">\r\n        <figure>\r\n          <div class=\"dash-box-top\" *ngIf=\"app.pages[0].bgImage\" [style.backgroundImage]=\"'url(' + app.pages[0].bgImage + ')' | safeStyle\">\r\n          </div>\r\n          <div class=\"dash-box-top\" *ngIf=\"!app.pages[0].bgImage\">\r\n          </div>\r\n        </figure>\r\n        <div class=\"dash-top2-textinner\">\r\n          <div class=\"\">\r\n            <span class=\"company-dropdown-title-active ellipsis\" *ngIf=\"app.liveApp\">Published: {{app.createdAt}}</span>\r\n            <span class=\"company-dropdown-title-active ellipsis\" *ngIf=\"!app.liveApp\">Last Edited: {{app.updatedAt}}</span>\r\n          </div>\r\n          <div class=\"dash-pullout-new\">\r\n            <i class=\"material-icons\">more_vert</i>\r\n            <ul class=\"new-dropdown-menu\">\r\n              <li>\r\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC')\">\r\n                  <div class=\"company-block\">\r\n                    <i class=\"material-icons\">format_paint</i>\r\n                  </div>\r\n                  <div class=\"company-block-content\">\r\n                    <span class=\"company-title ellipsis\">&nbsp;Edit</span>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\" checkAnalytics(app,'analytics');callGA('ANALYTICS')\">\r\n                  <div class=\"company-block\">\r\n                    <i class=\"material-icons\">trending_up</i>\r\n                  </div>\r\n                  <div class=\"company-block-content\">\r\n                    <span class=\"company-title ellipsis\">&nbsp;Analytics</span>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'config');selectSubTab('settings');callGA('SETTINGS');\">\r\n                  <div class=\"company-block\">\r\n                    <i class=\"material-icons\">mode_edit</i>\r\n                  </div>\r\n                  <div class=\"company-block-content\">\r\n                    <span class=\"company-title ellipsis\">&nbsp;Settings</span>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a class=\"hvr-sweep-to-right\" (click)=\"duplicateApp(app._id);callGA('DUPLICATE')\">\r\n                  <div class=\"company-block\">\r\n                    <i class=\"material-icons\">content_copy</i>\r\n                  </div>\r\n                  <div class=\"company-block-content\">\r\n                    <span class=\"company-title ellipsis\">&nbsp;Duplicate</span>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a href=\"javascript:void(0);\" (click)=\"deleteApp(app._id);callGA('DELETE')\" class=\"hvr-sweep-to-right\">\r\n                  <div class=\"company-block\">\r\n                    <i class=\"material-icons\">delete</i>\r\n                  </div>\r\n                  <div class=\"company-block-content\">\r\n                    <span class=\"company-title ellipsis\">&nbsp;Delete</span>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"btn-group company-dropdown-wrapper hide\">\r\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <div class=\"das-box-menu\">\r\n                <i class=\"material-icons\">more_vert</i>\r\n                <ul class=\"dropdown-menu\">\r\n                  <li>\r\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC')\">\r\n                      <div class=\"company-block\">\r\n                        <i class=\"material-icons\">format_paint</i>\r\n                      </div>\r\n                      <div class=\"company-block-content\">\r\n                        <span class=\"company-title ellipsis\">&nbsp;Edit Design</span>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'config');selectSubTab('settings');callGA('SETTINGS')\">\r\n                      <div class=\"company-block\">\r\n                        <i class=\"material-icons\">mode_edit</i>\r\n                      </div>\r\n                      <div class=\"company-block-content\">\r\n                        <span class=\"company-title ellipsis\">&nbsp;Edit Settings</span>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"checkAnalytics();callGA('ANALYTICS')\">\r\n                      <div class=\"company-block\">\r\n                        <i class=\"material-icons\">trending_up</i>\r\n                      </div>\r\n                      <div class=\"company-block-content\">\r\n                        <span class=\"company-title ellipsis\">&nbsp;View Analytics</span>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a class=\"hvr-sweep-to-right\" (click)=\"duplicateApp(app._id);callGA('DUPLICATE')\">\r\n                      <div class=\"company-block\">\r\n                        <i class=\"material-icons\">content_copy</i>\r\n                      </div>\r\n                      <div class=\"company-block-content\">\r\n                        <span class=\"company-title ellipsis\">&nbsp;Duplicate Calc</span>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"openOldCalc(app,'config');selectSubTab('share-your-calculator');callGA('SHARE')\">\r\n                      <div class=\"company-block\">\r\n                        <i class=\"material-icons\">computer</i>\r\n                      </div>\r\n                      <div class=\"company-block-content\">\r\n                        <span class=\"company-title ellipsis\">&nbsp;Publish / Share</span>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:void(0);\" (click)=\"deleteApp(app._id);callGA('DELETE')\" class=\"hvr-sweep-to-right\">\r\n                      <div class=\"company-block\">\r\n                        <i class=\"material-icons\">delete</i>\r\n                      </div>\r\n                      <div class=\"company-block-content\">\r\n                        <span class=\"company-title ellipsis\">&nbsp;Delete</span>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </button>\r\n          </div>\r\n          <h3>{{app.name}}</h3>\r\n          <div class=\"col-xs-12 text-center\">\r\n            <a href=\"javascript:void(0);\" (click)=\"openOldCalc(app,'build');callGA('OPENCALC')\" class=\"dash-box-send\">\r\n              <i class=\"material-icons\">send</i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"dash-box-bottom\">\r\n          <ul>\r\n            <li>\r\n              <i class=\"material-icons\">public</i>\r\n              <label class=\"text\">Status</label>\r\n              <div class=\"switch-outr\">\r\n                <div class=\"dummy-switch\" [class.red]=\"app.mode=='PUBLIC'\">\r\n                  <p>{{(app.mode=='PUBLIC')?'Live':'Draft'}}</p>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li>\r\n              <i class=\"material-icons\">person</i>\r\n              <label class=\"text\">Unique Visits</label>\r\n              <span class=\"value\">{{ (app.uniqueViews!=undefined)?app.uniqueViews:'--' }}</span>\r\n            </li>\r\n            <li>\r\n              <i class=\"material-icons\">reorder</i>\r\n              <label class=\"text\">Leads Generated</label>\r\n              <span class=\"value\">{{ (app.leads!=undefined)?app.leads:'--' }}</span>\r\n            </li>\r\n            <li>\r\n              <i class=\"material-icons\">done_all</i>\r\n              <label class=\"text\">Conversion Rate</label>\r\n              <span class=\"value\">{{ (app.conversionRate!=undefined)?app.conversionRate+'%':'--' }}</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Dashboard 3 boxes end (sahil) -->\r\n\r\n<div id=\"add-new-company\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    Modal content\r\n    <div class=\"modal-content modal-bg\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <i class=\"material-icons\">close</i>\r\n        </button>\r\n        <h5 class=\"modal-title\">Create a New Company</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"sahil-material\">\r\n          <form [formGroup]=\"createCompanyForm\" (ngSubmit)=\"createCompany()\">\r\n            <div class=\"form-group label-floating\">\r\n              <label class=\"control-label\" for=\"companyname\"> New Company Name</label>\r\n              <input class=\"form-control\" id=\"companyname\" type=\"text\" name=\"companyname\" formControlName=\"companyname\" (focus)=\"hideError()\">\r\n            </div>\r\n            <div *ngIf=\"createCompanyForm.controls.companyname.touched && !createCompanyForm.controls.companyname.valid\" class=\"alert alert-danger\">\r\n              <p *ngIf=\"createCompanyForm.controls.companyname.errors.required\">Company Name is required.</p>\r\n              <p *ngIf=\"createCompanyForm.controls.companyname.errors.minlength\">Min 3 character is required.</p>\r\n            </div>\r\n            <div class=\"form-group label-floating\">\r\n              <label class=\"control-label\" for=\"domain\"> Company Url</label>\r\n              <input class=\"form-control\" id=\"domain\" type=\"text\" name=\"domain\" formControlName=\"domain\" (focus)=\"hideError()\">\r\n              <label class=\"in-active\">{{subdomainExtension}}</label>\r\n            </div>\r\n            <div *ngIf=\"createCompanyForm.controls.domain.touched && !createCompanyForm.controls.domain.valid\" class=\"alert alert-danger\">\r\n              <p *ngIf=\"createCompanyForm.controls.domain.errors.required\">Company Name is required.</p>\r\n              <p *ngIf=\"createCompanyForm.controls.domain.errors.minlength\">Min 3 character is required.</p>\r\n              <p *ngIf=\"createCompanyForm.controls.domain.errors.pattern\">\r\n                Invalid Url\r\n              </p>\r\n            </div>\r\n            <button type=\"submit\" id=\"btnCreateCompany\" class=\"btn btn-red-outline btn-add-user btn-hover\" [disabled]=\"!createCompanyForm.valid\">Add New Company</button>\r\n          </form>\r\n          <div class=\"alert alert-danger hide\" id=\"success-addCompany\">\r\n            {{Message}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        Your company will be created immediately. As soon as the company is created, you can start adding users to collaborate.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"add-new-user\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content modal-bg\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n                <h5 class=\"modal-title\">Add New User</h5>\r\n            </div>\r\n            <form [formGroup]=\"inviteUserForm\" (ngSubmit)=\"inviteUser()\" id=\"inviteUserForm\">\r\n                <div class=\"modal-body\">\r\n                    <!--<div class=\"alert alert-danger custom-alert hide\" id=\"success-addUser\">\r\n                        <p>\r\n                            <span class=\"mat-icon\">\r\n                                <i class=\"material-icons\">report_problem</i>\r\n                            </span>\r\n                            <span id=\"dashboardAdduserMessage\"></span>\r\n                        </p>\r\n                    </div>-->\r\n                    <div class=\"alert alert-danger custom-alert hide\" id=\"success-addUser\">\r\n                      <p>\r\n                        <span class=\"mat-icon\">\r\n                          <i class=\"material-icons\">report_problem</i>\r\n                        </span>\r\n                        <span id=\"dashboardAdduserMessage\"></span>\r\n                      </p>\r\n                      <span (click)=\"upgradeNavigation()\" id=\"upgradeLink\"><button type=\"\">UPGRADE</button></span>\r\n                    </div>\r\n                    <div class=\"sahil-material\">\r\n                        <div class=\"form-group label-floating name\">\r\n                            <label class=\"control-label\" for=\"inputName\"> Name</label>\r\n                            <input class=\"form-control\" id=\"inputName\" type=\"text\" formControlName=\"userName\" name=\"userName\" autocomplete=\"off\">\r\n                        </div>\r\n                        <div *ngIf=\"inviteUserForm.controls.userName.touched && !inviteUserForm.controls.userName.valid\" class=\"alert alert-danger\">\r\n                            <p *ngIf=\"inviteUserForm.controls.userName.errors.required\">Name is required.</p>\r\n                            <p *ngIf=\"inviteUserForm.controls.userName.errors.minlength\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tMin 3 character is required.\r\n\t\t\t\t\t\t\t</p>\r\n                        </div>\r\n                        <div class=\"form-group label-floating email\">\r\n                            <label class=\"control-label\" for=\"inputEmail\"> Email Address</label>\r\n                            <input class=\"form-control\" id=\"inputEmail\" type=\"email\" formControlName=\"userEmail\" name=\"userEmail\" autocomplete=\"off\">\r\n                        </div>\r\n                        <div *ngIf=\"inviteUserForm.controls.userEmail.touched && !inviteUserForm.controls.userEmail.valid\" class=\"alert alert-danger\">\r\n                            <p *ngIf=\"inviteUserForm.controls.userEmail.errors.required\">Email is required.</p>\r\n                            <p *ngIf=\"inviteUserForm.controls.userEmail.errors.checkmail\">Invalid Email.</p>\r\n                        </div>\r\n                        <div class=\"form-group form-group-radio\">\r\n                            <label class=\"radio-inline\">\r\n                                <input type=\"radio\" value=\"ADMIN\" id=\"radioAdmin\" formControlName=\"userRole\" name=\"userRole\">\r\n                                <label for=\"radioAdmin\"> </label> Admin {{userRole}}\r\n                            </label>\r\n                            <label class=\"radio-inline\">\r\n                                <input type=\"radio\" value=\"MANAGER\" id=\"radioManager\" formControlName=\"userRole\" name=\"userRole\">\r\n                                <label for=\"radioManager\"> </label> Manager\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"submit\" [disabled]=\"!inviteUserForm.valid\" class=\"btn btn-red-outline btn-add-user btn-hover\" id=\"btnInvite\">Add New User</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--- cal quiz modal -->\r\n<div id=\"calquiz-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog custom-width\">\r\n        <div class=\"modal-content modal-bg\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"calquiz-outr\">\r\n                        <div class=\"step1\">\r\n                             <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                    <i class=\"material-icons\">close</i>\r\n                                </button>\r\n                                <h5 class=\"modal-title\">What will You Create Today? </h5>\r\n                            </div>\r\n                            <!--<div class=\"calquiz-left\">\r\n                                <label class=\"check-icon\">\r\n                                    <input type=\"radio\" value=\"Numerical\" name=\"calQuiz\" id=\"radio1\" (click) = \"selectCalc()\">\r\n                                    <label for=\"radio1\">\r\n                                        <span class=\"outer-border \">\r\n                                            <i class=\"material-icons\">dialpad</i>\r\n                                        </span>\r\n                                    </label>\r\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 np calc-quiz-margin\">\r\n                                        <h3>Numerical Calculator</h3>\r\n                                        <span class=\"col-md-6 col-sm-12 col-xs-12 np\">Gives a result in the form of a number like a price estimate, percentage or\r\n\r\n\t\t\t\tscore.</span>\r\n                                        <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n                                           How much does it cost to remodel your kitchen?<br/>\r\n                                           What is the risk of getting zika?  <br/>\r\n                                           How much do you really know about the Lakers?\r\n                                        </p>\r\n                                    </div>\r\n                                </label>\r\n                            </div>-->\r\n                            <!--<div class=\"calquiz-right\">\r\n                                <label class=\"check-icon ic\">\r\n                                    <input type=\"radio\" value=\"Recommendation\" name=\"calQuiz\" id=\"radio2\" (click) = \"selectCalc()\" >\r\n                                    <label for=\"radio2\">\r\n                                        <span class=\"outer-border\">\r\n                                            <i class=\"material-icons\">filter_vintage</i>\r\n                                        </span>\r\n                                    </label>\r\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 np calc-quiz-margin\">\r\n                                        <h3>Outcome Quiz</h3>\r\n                                        <span class=\"col-md-6 col-sm-12 col-xs-12 np\">Gives a result in the form of a recommendation or a suggestion.</span>\r\n                                        <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n                                            Which jeans should you wear?<br/>\r\n                                            Which insurance plan is right for you?<br/>\r\n                                            Which celebrity matches your style?\r\n                                        </p>\r\n                                    </div>\r\n                                </label>\r\n                            </div>-->\r\n                            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                <div class=\"calquiz-left\">\r\n                                    <label class=\"check-icon\">\r\n                                            <input type=\"radio\" value=\"Numerical\" name=\"calQuiz\" id=\"radio1\" (click) = \"selectCalc()\">\r\n                                            <label for=\"radio1\">\r\n                                                <span class=\"outer-border \">\r\n                                                    <!--<i class=\"material-icons\">dialpad</i>-->\r\n                                                    <span class=\"animated-icon animated-calc\">\r\n                                                    </span>\r\n                                                </span>\r\n                                            </label>\r\n                                            <div class=\"calc-quiz-margin\">\r\n                                                <h3>Numerical Calculator</h3>\r\n                                                <span class=\"\">Gives a result in the form of a number like a price estimate, percentage or score.</span>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 col-sm-6 col-xs-12 np res-outer\">\r\n                                                <h3 class=\"example-heading\">Examples</h3>\r\n                                                <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n                                                How much does it cost to remodel your kitchen?<br>\r\n                                                What is the risk of getting zika?    <br>\r\n                                                How much do you really know about the Lakers?\r\n                                                </p>\r\n                                            </div>\r\n                                        </label>\r\n                                    </div>\r\n                                    <div class=\"calquiz-right\">\r\n                                        <label class=\"check-icon ic\">\r\n                                                <input type=\"radio\" value=\"Recommendation\" name=\"calQuiz\" id=\"radio2\" (click) = \"selectCalc()\">\r\n                                                <label for=\"radio2\">\r\n                                                    <span class=\"outer-border\">\r\n                                                        <!--<i class=\"material-icons\">insert_photo</i>-->\r\n                                                        <span class=\"animated-icon animated-recom\">\r\n                                                        </span>\r\n                                                    </span>\r\n                                                </label>\r\n                                                <div class=\"calc-quiz-margin\">\r\n                                                    <h3>Outcome Quiz</h3>\r\n                                                    <span class=\"col-md-7 col-sm-12 col-xs-12 np\">Gives a result in the form of a recommendation or a suggestion.</span>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 col-sm-6 col-xs-12 np res-outer\">\r\n                                                    <h3 class=\"example-heading\">Examples</h3>\r\n                                                    <p class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n                                                    Which jeans should you wear?<br>\r\n                                                    Which insurance plan is right for you? <br>\r\n                                                    Which celebrity matches your style?\r\n                                                    </p>\r\n                                                </div>\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                        </div>\r\n                   <form [formGroup] = \"calcNameform\" (ngSubmit) = \"onAddNewCalc()\" id=\"type-calc\" novalidate>\r\n                        <div class=\"step2 hide\">\r\n                             <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                    <i class=\"material-icons\">close</i>\r\n                                </button>\r\n                                <h5 class=\"modal-title\">Add a Title </h5>\r\n                            </div>\r\n                            <div class=\"calquiz-left calquiz-right full-width\">\r\n                                <div class=\"back-icon\" (click)=\"goBack()\">\r\n                                    <i class=\"material-icons\">arrow_back</i>\r\n                                </div>\r\n                                <label class=\"check-icon\">\r\n                                    <input type=\"radio\" checked=\"checked\" id=\"lopa\" name=\"noname\">\r\n                                    <label for=\"lopa\">\r\n                                        <span class=\"outer-border\">\r\n                                            <i class=\"material-icons\" *ngIf=\"calcType ==='Numerical'\">dialpad</i>\r\n                                            <i class=\"material-icons\" *ngIf=\"calcType ==='Recommendation'\">insert_photo</i>\r\n                                        </span>\r\n                                    </label>\r\n                                </label>\r\n                                <div class=\"col-md-12 col-sm-12 col-xs-12 np calc-quiz-margin text-center\">\r\n                                    <div>\r\n                                        <h3 *ngIf=\"calcType ==='Recommendation'\">Quiz Title</h3>\r\n                                        <h3 *ngIf=\"calcType ==='Numerical'\">Calculator Title</h3>\r\n                                        <input type=\"text\" placeholder=\"{{calcType=='Recommendation'?'Which insurance plan is right for you?':'Estimate the Cost of Building a Website'}}\"  (blur)=\"reset = true;\" formControlName=\"calcName\" name=\"calcName\" class=\"calcName-input\" >\r\n                                        <div *ngIf=\"(calcNameform.controls.calcName.touched && !calcNameform.controls.calcName.valid) && reset\" class=\"alert alert-danger\">\r\n                                            <p >\r\n                                                <span  class=\"mat-icon\">\r\n                                                    <i class=\"material-icons\">report_problem</i>\r\n                                                </span>\r\n                                                <span *ngIf=\"calcType ==='Numerical'\">Calculator name is required.</span>\r\n                                                <span *ngIf=\"calcType ==='Recommendation'\">Quiz title is required.</span>\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                             <button  class=\"btn btn-red btn-hover\">\r\n                                <span *ngIf=\"calcType ==='Numerical'\">Select Template</span>\r\n                                <span *ngIf=\"calcType ==='Recommendation'\">Get Started</span>\r\n                            </button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> </div>\r\n<!--- cal quiz modal -->\r\n\r\n<div class=\"float-changes-updated hide\">\r\n  <div class=\"col-md-12 np\">\r\n    <span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\r\n    <span id=\"floatMessage\">{{ Message }} </span>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 781:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_membership_service__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analytics_services_calculator_analytics_service__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_dashboard_service__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__templates_controls_controls_module__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolbar_toolbar_module__ = __webpack_require__(408);
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

/***/ 787:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_service__ = __webpack_require__(792);
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
                break;
            }
        }
        var index = jQuery.inArray(this.selectedControl, items);
        return index + 1;
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
                this.setSelectedModel('Section');
                if (page.type === 'Questionnaire') {
                    for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                        var section1 = _c[_b];
                        if (section1.type === 'LeadFormQ') {
                            section1.visible = true;
                            section1.items[0].visible = true;
                            sections.push(section1);
                            items.push(section1.items[0]);
                            editorControl['leadform_question'] = section1.items[0];
                            this.setSelectedSection(section1);
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
        var data = this.getVisibleLeadForm();
        if (!jQuery.isEmptyObject(data['page'][0])) {
            pageType = data['page'][0].type;
        }
        return pageType;
    };
    JSONBuilder.prototype.getVisibleLeadForm = function () {
        var leadsection = [];
        var leaditem = [];
        var leadpage = [];
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                var section = _c[_b];
                for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                    var item = _e[_d];
                    if ((item.type === 'leadform' || (section.visible === true && item.type === 'leadform_question')) && item.visible === true) {
                        leadpage.push(page);
                        leadsection.push(section);
                        leaditem.push(item);
                        break;
                    }
                }
            }
        }
        var lead = {
            page: leadpage,
            section: leadsection,
            item: leaditem
        };
        return lead;
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
        if (newControl == 'slider')
            this.selectedSection.items[index].config.validations.required.status = false;
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
        if (this.JSONTemplate.templateType == 'Recommendation' && formula) {
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
        //<p>{R` + (this.getJSONBuilt().formula.length) + `}</p>
        var itemNew = new __WEBPACK_IMPORTED_MODULE_1__models_model__["b" /* Item */]('result_output', "\n            <p>By the age of 65</p>\n            <p>Things get serious now. Ensure you're living healthy.</p>", '', '', '');
        //itemNew.setFormulaIndex(formulaIndex.toString());
        itemNew.setVisibility(true);
        section.addItems(itemNew);
        return { item: section.items[section.items.length - 1], index: section.items.length - 1 };
    };
    JSONBuilder.prototype.duplicateResultItem = function (section, item) {
        var itemNew = new __WEBPACK_IMPORTED_MODULE_1__models_model__["b" /* Item */]('result_output', item.props.title, '', '', '');
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
    JSONBuilder.prototype.duplicateFormula = function (formula) {
        return this.JSONTemplate.duplicateFormula(formula);
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

/***/ 788:
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

/***/ 789:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_models_model__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__analytic_service__ = __webpack_require__(788);
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
        /** update formula object */
        this.updateformulaObject();
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
        // console.log('max: ' + max);
        // console.log('key/s with max count: ' + JSON.stringify(result));
        // console.log('result', this.recommendedResult.resultItem);
        // console.log('this.formulaResults', this.formulaResults);
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
        // console.log('this.formulaResults', recommendedObj);
        return this.recommendedResult;
    };
    RecommendationService.prototype.getAvailableOptions = function () {
        var optionArray = [];
        this._jsonBuilderHelper.getJSONBuilt().formula.map(function (formula) { optionArray.push({ name: formula.name, value: formula.value }); });
        return optionArray;
    };
    RecommendationService.prototype.updateformulaObject = function () {
        var self = this;
        this._jsonBuilderHelper.getJSONBuilt().formula.forEach(function (formula) {
            if (!self.formulaResults.hasOwnProperty(formula.value)) {
                self.formulaResults[formula.value] = formula;
            }
        });
    };
    RecommendationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object])
    ], RecommendationService);
    return RecommendationService;
    var _a, _b;
}());


/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_services_analytic_service__ = __webpack_require__(788);
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
                var fieldNow = leadformItem.fields[field];
                var title = (fieldNow.type == 'firstName' ? 'Name' : (fieldNow.type == 'tel' ? 'Phone Number' : (fieldNow.type == 'lastName' ? 'Others' : fieldNow.type)));
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
    FormulaService.prototype.isQuestionInResults = function (quesIndex) {
        for (var formulaIndex in this.jsonBuilderHelper.getJSONBuilt().formula) {
            if (this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].result.indexOf("Q" + (parseInt(quesIndex) + 1)) >= 0)
                return true;
        }
        return false;
    };
    FormulaService.prototype.correctAll = function () {
        for (var formulaIndex in this.jsonBuilderHelper.getJSONBuilt().formula)
            this.correctAllInvalidQuestions(this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].result, formulaIndex);
    };
    // Checking Questionare Validity After Changes To builder
    FormulaService.prototype.correctAllInvalidQuestions = function (rawFormula, formulaIndex) {
        var currentQuesNumber;
        for (var i = 0; i < rawFormula.length; i++) {
            if (rawFormula[i] == 'Q') {
                i++;
                currentQuesNumber = '';
                while (!isNaN(parseFloat(rawFormula[i])))
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
                while (!isNaN(parseFloat(rawFormula[i])))
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
                allInvalidFormulas += 'Result ' + (parseFloat(formula) + 1) + ',';
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
                    while (!isNaN(parseFloat(rawFormula[i])))
                        currentQuesNumber += rawFormula[i++];
                    var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                    if (!currentQuesObject || ((currentQuesObject.type == 'textfield' && (currentQuesObject.config.type == 'text' || currentQuesObject.config.type == 'email'))
                        || currentQuesObject.type == 'text-area')) {
                        errorResultList += 'Result ' + (parseFloat(formula) + 1) + ',';
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
                    while (!isNaN(parseFloat(rawFormula[i])))
                        currentQuesNumber += rawFormula[i++];
                    var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                    if ((currentQuesObject.type == 'textfield' && (currentQuesObject.config.type == 'text' || currentQuesObject.config.type == 'email'))
                        || currentQuesObject.type == 'text-area') {
                        errorResultList += 'Result ' + (parseFloat(formula) + 1) + ',';
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
            finalAnswer = '{R' + (parseFloat(formulaIndex) + 1) + '}';
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
            if (isNaN(parseFloat(finalAnswer)) || finalAnswer == undefined) {
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
                while (!isNaN(parseFloat(genericQuestion[i])))
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

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_model__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_model__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_model__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calc_email_model__ = __webpack_require__(805);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__app_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__page_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__section_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__item_model__["a"]; });
/* unused harmony reexport CalcEmail */







/***/ },

/***/ 792:
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

/***/ 793:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TemplateRendererService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplateRendererService = (function () {
    function TemplateRendererService(_jsonBuilderHelper) {
        this._jsonBuilderHelper = _jsonBuilderHelper;
        this.staticControls = {};
        //code
        this.setStaticControls();
    }
    TemplateRendererService.prototype.setStaticControls = function () {
        var self = this;
        self._jsonBuilderHelper.getJSONBuilt().pages.forEach(function (page) {
            if (page.type != 'Questionnaire') {
                self.staticControls[page.type] = {};
                page.sections.forEach(function (section) {
                    section.items.forEach(function (item) {
                        // check for result outputs
                        if (section.title === 'Result') {
                            self.staticControls[page.type][section.title] = section;
                        }
                        else {
                            if (self.staticControls[page.type].hasOwnProperty(item.type)) {
                                var itemObj = void 0;
                                var i = 1;
                                while (itemObj == undefined) {
                                    if ((self.staticControls[page.type][item.type + '_' + i]))
                                        i++;
                                    else {
                                        self.staticControls[page.type][item.type + '_' + i] = item;
                                        itemObj = item;
                                    }
                                }
                            }
                            else {
                                self.staticControls[page.type][item.type] = item;
                            }
                        }
                    });
                });
            }
        });
    };
    TemplateRendererService.prototype.getStaticControls = function () {
        return this.staticControls;
    };
    TemplateRendererService.prototype.getBackground = function (what) {
        var landingPage = this._jsonBuilderHelper.getJSONBuilt().pages.filter(function (page) { return page.type == 'Landing'; });
        if (landingPage) {
            if (what == 'img')
                return landingPage[0].bgImage && landingPage[0].bgImageVisible ? ('url(' + landingPage[0].bgImage + ')') : '';
            else
                return landingPage[0].bgColor ? landingPage[0].bgColor : '';
        }
        else
            return '';
    };
    TemplateRendererService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object])
    ], TemplateRendererService);
    return TemplateRendererService;
    var _a;
}());


/***/ },

/***/ 795:
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

/***/ 798:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controls__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_themeColor_directive__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_result_directive__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_htmlprocessor_directive__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__builder_services_formula_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__builder_services_UrlShortner_service__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_customValidation__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__control_component__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_fetchResult_directive__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_pipes_module__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_recommendation_service__ = __webpack_require__(789);
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
                __WEBPACK_IMPORTED_MODULE_9__control_component__["a" /* Control */], __WEBPACK_IMPORTED_MODULE_1__controls__["a" /* CONTROLS */],
                __WEBPACK_IMPORTED_MODULE_11__components_fetchResult_directive__["a" /* FetchResult */],
                __WEBPACK_IMPORTED_MODULE_2__components_themeColor_directive__["a" /* ThemeColor */], __WEBPACK_IMPORTED_MODULE_4__components_htmlprocessor_directive__["a" /* HtmlProcessor */], __WEBPACK_IMPORTED_MODULE_3__components_result_directive__["a" /* Result */]],
            imports: [__WEBPACK_IMPORTED_MODULE_10__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_12__pipes_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__controls__["a" /* CONTROLS */], __WEBPACK_IMPORTED_MODULE_9__control_component__["a" /* Control */], __WEBPACK_IMPORTED_MODULE_11__components_fetchResult_directive__["a" /* FetchResult */], __WEBPACK_IMPORTED_MODULE_12__pipes_pipes_module__["a" /* PipesModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__builder_services_JSONBuilder_service__["a" /* JSONBuilder */], __WEBPACK_IMPORTED_MODULE_7__builder_services_UrlShortner_service__["a" /* UrlShortner */], __WEBPACK_IMPORTED_MODULE_8__services_customValidation__["a" /* CustomValidator */], __WEBPACK_IMPORTED_MODULE_13__services_recommendation_service__["a" /* RecommendationService */], __WEBPACK_IMPORTED_MODULE_6__builder_services_formula_service__["a" /* FormulaService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ControlsModule);
    return ControlsModule;
}());


/***/ },

/***/ 799:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__itemNames_store__ = __webpack_require__(806);
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
            followUpText: '',
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
                hashIndex: 0,
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
                placeholder: 'John Doe',
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
                placeholder: 'John@outgrow.co',
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
            defaultOption.hashIndex = option;
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

/***/ 800:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section_model__ = __webpack_require__(801);
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

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_model__ = __webpack_require__(799);
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
    Section.prototype.setVisibilityOfShowDesc = function (showDesc) {
        this.showDesc = showDesc;
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

/***/ 802:
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

/***/ 804:
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

/***/ 805:
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
        this.notifyMe = false;
        var self = this;
        for (var prop in data) {
            self[prop] = data[prop] || self[prop];
        }
    }
    return CalcEmail;
}());


/***/ },

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return RECOMMENDED_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return INLINE_RECOMMENDED_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return INLINE_ITEMS; });
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
var INLINE_RECOMMENDED_ITEMS = {
    selectbox: 'Drop Down'
};
var INLINE_ITEMS = {
    textfield: 'Text Input',
    selectbox: 'Drop Down'
};


/***/ },

/***/ 807:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_model__ = __webpack_require__(800);
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
        this.theme = {};
        this.customColor = {};
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
        this.seoImage = '';
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
    App.prototype.duplicateFormula = function (formula) {
        var newFormula = JSON.parse(JSON.stringify(formula));
        delete newFormula._id;
        this.formula.push(newFormula);
        return this.formula.length - 1;
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

/***/ 808:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__ = __webpack_require__(790);
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

/***/ 809:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__ = __webpack_require__(790);
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

/***/ 810:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(787);
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

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(787);
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

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(787);
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
    function Button(_JSONBuilder) {
        this._JSONBuilder = _JSONBuilder;
        this.controlOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        //
    }
    Button.prototype.ngOnInit = function () {
        //
    };
    Button.prototype.controlOutputOnLive = function (event) {
        if (this._JSONBuilder.getJSONBuilt().status !== 'LIVE') {
            event.preventDefault();
        }
        this.controlOutput.emit(event);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Button.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Button.prototype, "page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], Button.prototype, "controlOutput", void 0);
    Button = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'click-button',
            template: "\n\t\t\t <div class=\"text-center\" *ngIf=\"data.visible\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn prime-action  next-step sliding-next\"\n\t\t\t\t\t\t(click)=\"controlOutput.emit($event)\"\n\t\t\t\t\t\t*ngIf=\"page?.type !== 'Result'\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{data.props.title}}\n\t\t\t\t\t</button>\n\t\t\t\t\t\t<a class=\"btn prime-action  next-step sliding-next \"\n \t\t\t\t\t\t(click)=\"controlOutputOnLive($event)\"\n \t\t\t\t\t\t\t*ngIf=\"page?.type === 'Result'\"\n \t\t\t\t\t\t\t[attr.href]=\"_JSONBuilder.getJSONBuilt().navigate_Url\" target=\"_blank\"\n \t\t\t\t\t>\n \t\t\t\t\t\t{{data.props.title}}\n \t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t ",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object])
    ], Button);
    return Button;
    var _a;
}());


/***/ },

/***/ 813:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(789);
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
        this.width = 0;
    }
    Checkbox.prototype.ngOnInit = function () {
        this.data.props.currentLabel = '';
        this.data.props.currentValue = 0;
        /* recom condition */
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation')
            this.data.props.currentValue = '';
        for (var iconCheck in this.data.options) {
            this.data.options[iconCheck].selected = this.data.options[iconCheck].defualtselected;
            /* check for default to set current value */
            if (this.data.options[iconCheck].selected == true) {
                this.form.controls[this.data._id].markAsDirty();
                this.data.props.currentLabel = this.data.options[iconCheck].currentLabel + ',' + this.data.props.currentLabel;
                /* recom condition */
                if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation')
                    this.data.props.currentValue = this.data.options[iconCheck].value + ', ' + (this.data.props.currentValue);
                else
                    this.data.props.currentValue = parseFloat(this.data.options[iconCheck].value) + parseFloat(this.data.props.currentValue);
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
        /* recom condition */
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation')
            this.data.props.currentValue = '';
        for (var option in this.data.options) {
            if (option == index)
                this.data.options[option].selected = !this.data.options[option].selected;
            if (this.data.options[option].selected == true) {
                this.data.props.currentLabel += this.data.options[option].label + ',';
                /* recom condition */
                if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation')
                    this.data.props.currentValue += (this.data.options[option].value) + ',';
                else
                    this.data.props.currentValue += parseFloat(this.data.options[option].value);
            }
        }
        if (this.data.props.currentLabel != '')
            this.data.props.currentLabel = this.data.props.currentLabel.slice(0, -1);
        /* recom condition */
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation')
            this.data.props.currentValue = this.data.props.currentValue.slice(0, -1);
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
            template: __webpack_require__(836)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], Checkbox);
    return Checkbox;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 814:
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
            template: "\n          <textfield *ngIf=\"data.type=='textfield'\" [data]=\"data\" [form]=\"form\" (controlOutput)=\"onControlOutput($event)\"></textfield>\n          <text_area *ngIf=\"data.type=='text-area'\" [data]=\"data\"  ></text_area>\n          <selectbox *ngIf=\"data.type=='selectbox'\" [data]=\"data\" [form]=\"form\" ></selectbox>\n          <radio-button *ngIf=\"data.type=='radio_button'\" [data]=\"data\" [form]=\"form\" (controlOutput)=\"onControlOutput($event)\"></radio-button>\n          <og-header *ngIf=\"data.type=='header'\" [data]=\"data\" ></og-header>\n          <sub_header *ngIf=\"data.type=='sub_header'\" [data]=\"data\" ></sub_header>\n          <click-button *ngIf=\"data.type=='click_button'\" [data]=\"data\" [page]=\"page\"\n            (controlOutput)=\"onControlOutput($event)\" ></click-button>\n      \t\t<logo *ngIf=\"data.type=='logo'\" [data]=\"data\" ></logo>\n          <slider *ngIf=\"data.type=='slider'\" [data]=\"data\" ></slider>\n          <leadform_question *ngIf=\"data.type=='leadform_question'\" [data]=\"data\"\n            (controlOutput)=\"onControlOutput($event)\" ></leadform_question>\n          <leadform *ngIf=\"data.type=='leadform'\" [data]=\"data\" [page]=\"page\"\n           (controlOutput)=\"onControlOutput($event)\" ></leadform>\n          <poweredby *ngIf=\"data.type=='poweredby'\"  [data]=\"data\" ></poweredby>\n          <footer-links *ngIf=\"data.type=='footer_links'\"  [data]=\"data\" ></footer-links>\n          <checkbox *ngIf=\"data.type=='checkbox'\" [data]=\"data\" [form]=\"form\"></checkbox>\n          <switchbox *ngIf=\"data.type=='switchbox'\" [data]=\"data\" [form]=\"form\" ></switchbox>\n          <result_output *ngIf=\"data.type=='result_output'\" [data]=\"data\" [devMode]=\"devMode\" ></result_output>\n          <result_header *ngIf=\"data.type=='result_header'\" [data]=\"data\" ></result_header>\n          <share_links *ngIf=\"data.type=='share_links'\"  [data]=\"data\" ></share_links>\n          <result_disclaimer *ngIf=\"data.type=='result_disclaimer'\" [data]=\"data\" ></result_disclaimer>\n          <result_redo *ngIf=\"data.type=='result_redo'\" [data]=\"data\" ></result_redo>\n      ",
        }), 
        __metadata('design:paramtypes', [])
    ], Control);
    return Control;
    var _a;
}());


/***/ },

/***/ 815:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__textfield_textfield_component__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textarea_textarea_component__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectbox_selectbox_component__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radiobutton_radiobutton_component__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sub_header_sub_header_component__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button_button_component__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logo_logo_component__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slider_slider_component__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leadform_leadform_component__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__leadform_question_leadform_question_component__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_poweredby_component__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_links_component__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__checkbox_checkbox_component__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__switch_switchbox_component__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__resultoutput_resultoutput_component__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__resultheader_resultheader_component__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sharelinks_sharelinks_component__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__resultredo_redo_component__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__resultdisclaimer_resultdisclaimer_component__ = __webpack_require__(823);
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

/***/ 816:
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

/***/ 817:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(12);
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
            template: "\n\t\t<div class=\" text-right\" *ngIf=\"data.visible == true\" >\n\t\t\t<div class=\" powered-by\">\n\t\t\t\t<span>Powered by </span>\n\t\t\t\t<a href=\"{{url}}\" target=\"_blank\">\n\t\t\t\t\t\t<img src=\"https://cdn.filestackcontent.com/m142kAuTza2GnZIltjtR\" alt=\"Powered By\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], PoweredByComponent);
    return PoweredByComponent;
}());


/***/ },

/***/ 818:
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

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customValidation__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__ = __webpack_require__(787);
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
        this.leadsaved = false;
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
                _this.leadsaved = true;
                _this._analyticService.setVisitorKey(response.key);
                if (form.valid) {
                    _this.controlOutput.emit(true);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else if (form.valid) {
            this.controlOutput.emit(true);
        }
    };
    LeadForm.prototype.preventdefault = function (event) {
        this.onSubmit(this.formGroup());
        if (!this.form.valid || this.jsonBuilderHelper.getJSONBuilt().status !== 'LIVE') {
            event.preventDefault();
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
            template: __webpack_require__(837),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], LeadForm);
    return LeadForm;
    var _a, _b;
}());


/***/ },

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customValidation__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__ = __webpack_require__(787);
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
            template: __webpack_require__(838),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], LeadFormQuestion);
    return LeadFormQuestion;
    var _a, _b;
}());


/***/ },

/***/ 821:
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

/***/ 822:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(789);
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
        this.width = 0;
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
        var self = this;
        jQuery('.prev').addClass('a-disable');
        setTimeout(function () {
            self.controlOutput.emit(true);
            jQuery('.prev').removeClass('a-disable');
        }, 2000);
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
            template: __webpack_require__(839)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], RadioButton);
    return RadioButton;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 823:
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

/***/ 824:
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

/***/ 825:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__builder_services_formula_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_templateRenderer_service__ = __webpack_require__(793);
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
    function ResultOutput(jsonBuilderHelper, _templateRenderer, formulaService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._templateRenderer = _templateRenderer;
        this.formulaService = formulaService;
    }
    ResultOutput.prototype.ngOnInit = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().status === 'DEV' && this.devMode) {
            this.resultNow = 'Result';
        }
        else {
            this.staticControls = this._templateRenderer.getStaticControls();
            this.resultNow = this.formulaService.formulaFunction(this.staticControls.Result.Result.items.indexOf(this.data));
            this.resultNow = '{R' + (this.staticControls.Result.Result.items.indexOf(this.data) + 1) + '}';
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ResultOutput.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ResultOutput.prototype, "devMode", void 0);
    ResultOutput = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* Component */])({
            selector: 'result_output',
            template: __webpack_require__(840),
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_templateRenderer_service__["a" /* TemplateRendererService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_templateRenderer_service__["a" /* TemplateRendererService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__builder_services_formula_service__["a" /* FormulaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__builder_services_formula_service__["a" /* FormulaService */]) === 'function' && _c) || Object])
    ], ResultOutput);
    return ResultOutput;
    var _a, _b, _c;
}());


/***/ },

/***/ 826:
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

/***/ 827:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(789);
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
        var counter = 0;
        for (var _i = 0, _a = this.data.options; _i < _a.length; _i++) {
            var option = _a[_i];
            //Hash value
            option.hashIndex = counter++;
        }
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.data.props.currentValue = this.data.options[0].value;
            this.selectHashIndex = this.data.options[0].hashIndex;
        }
        else {
            this.data.props.currentValue = parseFloat(this.data.options[0].value);
            this.selectHashIndex = this.data.options[0].hashIndex;
        }
        this.data.props.currentLabel = this.data.options[0].label;
        for (var _b = 0, _c = this.data.options; _b < _c.length; _b++) {
            var option = _c[_b];
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
                this.selectHashIndex = option.hashIndex;
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
        jQuery('#' + self.data._id)[0].selectize.setValue(self.selectHashIndex);
        jQuery('#' + self.data._id)[0].selectize.on('change', function () {
            var value = jQuery('#' + self.data._id)[0].selectize.getValue();
            for (var option in self.data.options) {
                if (self.data.options[option].hashIndex == value) {
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
            template: __webpack_require__(841),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], SelectBox);
    return SelectBox;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 828:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(12);
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
        this.title = this.jsonBuilderHelper.getJSONBuilt().title;
        /*  if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical')
          this.title = 'I Got ' + this.jsonBuilderHelper.getJSONBuilt().formula[0].value + '.';
        else
            this.title = 'I Got ' + this.jsonBuilderHelper.getSelectedFormula().name + '.';
      */
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
        this.title = this.jsonBuilderHelper.getJSONBuilt().title;
        /*  if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical') {
            this.title = 'I Got ' + this.jsonBuilderHelper.getJSONBuilt().formula[0].value + '.';
          } else
            this.title = 'I Got ' + this.jsonBuilderHelper.getSelectedFormula().name + '.';*/
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

/***/ 829:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_formula_service__ = __webpack_require__(790);
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
    function Slider(_analyticService, jsonBuilderHelper, formulaService) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.formulaService = formulaService;
        this.tipShow = false;
        this.tipLeftPos = '';
    }
    Slider.prototype.ngOnInit = function () {
        if (!this.data.props.minVal) {
            this.data.props.minVal = 0;
        }
        if (!this.data.props.maxVal) {
            this.data.props.maxVal = 0;
        }
        if (this.data.props.defaultValue) {
            this.data.props.currentValue = this.data.props.defaultValue;
            this.value = this.data.props.currentValue;
            if (this.data.props.postfix)
                this.data.props.currentLabel = this.formulaService.addCommas(this.data.props.currentValue) + this.data.props.unit;
            else
                this.data.props.currentLabel = this.data.props.unit + this.formulaService.addCommas(this.data.props.currentValue);
        }
        else {
            this.data.props.currentValue = this.data.props.minVal;
            this.value = this.data.props.currentValue;
            if (this.data.props.postfix)
                this.data.props.currentLabel = this.formulaService.addCommas(this.data.props.currentValue) + this.data.props.unit;
            else
                this.data.props.currentLabel = this.data.props.unit + this.formulaService.addCommas(this.data.props.currentValue);
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
                    that.data.props.currentLabel = that.formulaService.addCommas(data.from) + that.data.props.unit;
                else
                    that.data.props.currentLabel = that.data.props.unit + that.formulaService.addCommas(data.from);
                that.change();
            },
            onUpdate: function (data) {
                that.data.props.currentValue = data.from;
                if (that.data.props.postfix)
                    that.data.props.currentLabel = that.formulaService.addCommas(data.from) + that.data.props.unit;
                else
                    that.data.props.currentLabel = that.data.props.unit + that.formulaService.addCommas(data.from);
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
            template: __webpack_require__(842),
            // template:'Hello',
            styles: [
                __webpack_require__(834),
                __webpack_require__(835),
            ],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_formula_service__["a" /* FormulaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_formula_service__["a" /* FormulaService */]) === 'function' && _c) || Object])
    ], Slider);
    return Slider;
    var _a, _b, _c;
}());


/***/ },

/***/ 830:
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

/***/ 831:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(787);
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
            template: __webpack_require__(843),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object])
    ], SwitchBox);
    return SwitchBox;
    var _a, _b, _c;
}());


/***/ },

/***/ 832:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(787);
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

/***/ 833:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(787);
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
        this.controlOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
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
                    this.ValidationMessage = 'Minimum Required Value is ' + this.data.props.minVal;
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
    TextField.prototype.keyPressed = function (e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            this.controlOutput.emit(true);
            e.preventDefault();
            return false;
        }
    };
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], TextField.prototype, "controlOutput", void 0);
    TextField = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'textfield',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: __webpack_require__(844)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object])
    ], TextField);
    return TextField;
    var _a, _b, _c;
}());


/***/ },

/***/ 834:
/***/ function(module, exports) {

module.exports = "/* Ion.RangeSlider\r\n// css version 2.0.3\r\n// © 2013-2014 Denis Ineshin | IonDen.com\r\n// ===================================================================================================================*/\r\n\r\n/* =====================================================================================================================\r\n// RangeSlider */\r\n\r\n.irs {\r\n    position: relative; display: block;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n     -khtml-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n    .irs-line {\r\n        position: relative; display: block;\r\n        overflow: hidden;\r\n        outline: none !important;\r\n    }\r\n        .irs-line-left, .irs-line-mid, .irs-line-right {\r\n            position: absolute; display: block;\r\n            top: 0;\r\n        }\r\n        .irs-line-left {\r\n            left: 0; width: 11%;\r\n        }\r\n        .irs-line-mid {\r\n            left: 9%; width: 82%;\r\n        }\r\n        .irs-line-right {\r\n            right: 0; width: 11%;\r\n        }\r\n\r\n    .irs-bar {\r\n        position: absolute; display: block;\r\n        left: 0; width: 0;\r\n    }\r\n        .irs-bar-edge {\r\n            position: absolute; display: block;\r\n            top: 0; left: 0;\r\n        }\r\n\r\n    .irs-shadow {\r\n        position: absolute; display: none;\r\n        left: 0; width: 0;\r\n    }\r\n\r\n    .irs-slider {\r\n        position: absolute; display: block;\r\n        cursor: default;\r\n        z-index: 1;\r\n    }\r\n        .irs-slider.single {\r\n\r\n        }\r\n        .irs-slider.from {\r\n\r\n        }\r\n        .irs-slider.to {\r\n\r\n        }\r\n        .irs-slider.type_last {\r\n            z-index: 2;\r\n        }\r\n\r\n    .irs-min {\r\n        position: absolute; display: block;\r\n        left: 0;\r\n        cursor: default;\r\n    }\r\n    .irs-max {\r\n        position: absolute; display: block;\r\n        right: 0;\r\n        cursor: default;\r\n    }\r\n\r\n    .irs-from, .irs-to, .irs-single {\r\n        position: absolute; display: block;\r\n        top: 0; left: 0;\r\n        cursor: default;\r\n        white-space: nowrap;\r\n    }\r\n\r\n.irs-grid {\r\n    position: absolute; display: none;\r\n    bottom: 0; left: 0;\r\n    width: 100%; height: 20px;\r\n}\r\n.irs-with-grid .irs-grid {\r\n    display: block;\r\n}\r\n    .irs-grid-pol {\r\n        position: absolute;\r\n        top: 0; left: 0;\r\n        width: 1px; height: 8px;\r\n        background: #000;\r\n    }\r\n    .irs-grid-pol.small {\r\n        height: 4px;\r\n    }\r\n    .irs-grid-text {\r\n        position: absolute;\r\n        bottom: 0; left: 0;\r\n        white-space: nowrap;\r\n        text-align: center;\r\n        font-size: 9px; line-height: 9px;\r\n        padding: 0 3px;\r\n        color: #000;\r\n    }\r\n\r\n.irs-disable-mask {\r\n    position: absolute; display: block;\r\n    top: 0; left: -1%;\r\n    width: 102%; height: 100%;\r\n    cursor: default;\r\n    background: rgba(0,0,0,0.0);\r\n    z-index: 2;\r\n}\r\n.irs-disabled {\r\n    opacity: 0.4;\r\n}\r\n.lt-ie9 .irs-disabled {\r\n    filter: alpha(opacity=40);\r\n}\r\n\r\n\r\n.irs-hidden-input {\r\n    position: absolute !important;\r\n    display: block !important;\r\n    top: 0 !important;\r\n    left: 0 !important;\r\n    width: 0 !important;\r\n    height: 0 !important;\r\n    font-size: 0 !important;\r\n    line-height: 0 !important;\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n    outline: none !important;\r\n    z-index: -9999 !important;\r\n    background: none !important;\r\n    border-style: solid !important;\r\n    border-color: transparent !important;\r\n}\r\n"

/***/ },

/***/ 835:
/***/ function(module, exports) {

module.exports = "/* Ion.RangeSlider, Simple Skin\r\n// css version 2.0.3\r\n// © Denis Ineshin, 2014    https://github.com/IonDen\r\n// © guybowden, 2014        https://github.com/guybowden\r\n// ===================================================================================================================*/\r\n\r\n/* =====================================================================================================================\r\n// Skin details */\r\n\r\n.irs {\r\n    height: 55px;\r\n}\r\n.irs-with-grid {\r\n    height: 75px;\r\n}\r\n.irs-line {\r\n    height: 10px; top: 33px;\r\n    background: #EEE;\r\n    background: linear-gradient(to bottom, #DDD -50%, #FFF 150%); /* W3C */\r\n    border: 1px solid #CCC;\r\n    border-radius: 16px;\r\n    -moz-border-radius: 16px;\r\n}\r\n    .irs-line-left {\r\n        height: 8px;\r\n    }\r\n    .irs-line-mid {\r\n        height: 8px;\r\n    }\r\n    .irs-line-right {\r\n        height: 8px;\r\n    }\r\n\r\n.irs-bar {\r\n    height: 10px; top: 33px;\r\n    border-top: 1px solid #428bca;\r\n    border-bottom: 1px solid #428bca;\r\n    background: #428bca;\r\n    background: linear-gradient(to top, rgba(66,139,202,1) 0%,rgba(127,195,232,1) 100%); /* W3C */\r\n}\r\n    .irs-bar-edge {\r\n        height: 10px; top: 33px;\r\n        width: 14px;\r\n        border: 1px solid #428bca;\r\n        border-right: 0;\r\n        background: #428bca;\r\n        background: linear-gradient(to top, rgba(66,139,202,1) 0%,rgba(127,195,232,1) 100%); /* W3C */\r\n        border-radius: 16px 0 0 16px;\r\n        -moz-border-radius: 16px 0 0 16px;\r\n    }\r\n\r\n.irs-shadow {\r\n    height: 2px; top: 38px;\r\n    background: #000;\r\n    opacity: 0.3;\r\n    border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n}\r\n.lt-ie9 .irs-shadow {\r\n    filter: alpha(opacity=30);\r\n}\r\n\r\n.irs-slider {\r\n    top: 25px;\r\n    width: 27px; height: 27px;\r\n    border: 1px solid #AAA;\r\n    background: #DDD;\r\n    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(220,220,220,1) 20%,rgba(255,255,255,1) 100%); /* W3C */\r\n    border-radius: 27px;\r\n    -moz-border-radius: 27px;\r\n    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);\r\n    cursor: pointer;\r\n}\r\n\r\n.irs-slider.state_hover, .irs-slider:hover {\r\n    background: #FFF;\r\n}\r\n\r\n.irs-min, .irs-max {\r\n    color: #333;\r\n    font-size: 12px; line-height: 1.333;\r\n    text-shadow: none;\r\n    top: 0;\r\n    padding: 1px 14px;\r\n    background: rgba(0,0,0,0.1);\r\n    border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n}\r\n\r\n.lt-ie9 .irs-min, .lt-ie9 .irs-max {\r\n    background: #ccc;\r\n}\r\n\r\n.irs-from {\r\n    color: #fff;\r\n    font-size: 14px; line-height: 1.333;\r\n    text-shadow: none;\r\n    padding: 1px 14px;\r\n    background: #428bca;\r\n    border-radius:8px;\r\n    -moz-border-radius: 8px;\r\n}\r\n\r\n.irs-to {\r\n    color: #fff;\r\n    font-size: 14px; line-height: 1.333;\r\n    text-shadow: none;\r\n    padding: 1px 14px;\r\n    background: #428bca;\r\n    border-radius:8px;\r\n    -moz-border-radius: 8px;\r\n}\r\n\r\n.irs-single {\r\n    color: #fff;\r\n    font-size: 12px; line-height: 1.333;\r\n    text-shadow: none;\r\n    padding: 1px 14px;\r\n    background: #428bca;\r\n    border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n}\r\n.lt-ie9 .irs-from, .lt-ie9 .irs-to, .lt-ie9 .irs-single {\r\n    background: #999;\r\n}\r\n\r\n.irs-grid {\r\n    height: 27px;\r\n}\r\n.irs-grid-pol {\r\n    opacity: 0.5;\r\n    background: #428bca;\r\n}\r\n.irs-grid-pol.small {\r\n    background: #999;\r\n}\r\n\r\n.irs-grid-text {\r\n    bottom: 5px;\r\n    color: #99a4ac;\r\n}\r\n\r\n.irs-disabled {\r\n}\r\n"

/***/ },

/***/ 836:
/***/ function(module, exports) {

module.exports = "<div class=\"check-comp\" [formGroup]=\"form.controls[data._id]\">\r\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n    <img [src]=\"data.imageURL\" />\r\n  </div>\r\n  <div [class.checkbox-outer-base]=\"!data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n       [class.checkbox-outer]=\"data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n       [class.pic-selector]=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"\r\n       [class.active]=\"checkbox_item.selected\"\r\n       *ngFor=\"let checkbox_item of data.options, let i = index\" tabindex=\"0\"\r\n  >\r\n    <label onclick=\"\" class=\"control control--checkbox\"  [ngStyle]=\"{'background-image': 'url('+((data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card')?checkbox_item.imageURL:'')+')'}\" >\r\n      <span *ngIf=\"!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'\">{{checkbox_item.label}}</span>\r\n      <input type=\"checkbox\"\r\n             [id]=\"data._id\"\r\n             (change)=\"onChange($event,i)\"\r\n             id=\"{{data._id}}{{i}}\"\r\n             [checked]=\"checkbox_item.selected\"\r\n             [formControlName]=\"i\"\r\n             value=\"{{checkbox_item.value}}\"\r\n      >\r\n      <div class=\"control__indicator check-set\">\r\n        <i\r\n          class=\"material-icons\"\r\n          *ngIf=\"checkbox_item.icon != '' && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n        >\r\n          {{checkbox_item.icon}}\r\n        </i>\r\n        <i\r\n          class=\"material-icons\"\r\n          *ngIf=\"checkbox_item.icon == '' && data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n        >\r\n          landscape\r\n        </i>\r\n        <div class=\"label-image\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"></div>\r\n        <span class=\"img-overlay\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n          <span class=\"text-overlay\">\r\n            <span>{{checkbox_item.label}}</span>\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </label>\r\n  </div>\r\n\r\n  <div class=\"errorMessage\" *ngIf=\"(form.controls[data._id].touched || touched) && !isValid\">\r\n    {{data.config.validations.required.message}}\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 837:
/***/ function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(formGroup())\" [formGroup]=\"formGroup()\" *ngIf=\"data.visible\" novalidate>\r\n  <div class=\"container-temp text-center\">\r\n    <div class=\"lead-heading-temp1\" *ngIf=\"page && page.type ==='Result'\">\r\n      {{page.sections[2].title}}\r\n    </div>\r\n    <div>\r\n      <div class=\"input-section\">\r\n        <div *ngFor=\"let field of data.fields, let i=index\" class=\"input-outer\" [class.w100]=\"data.fields.length==1\">\r\n          <input tabindex=\"0\" placeholder=\"{{field.placeholder}}\" type=\"{{field.type}}\" (blur)=\"onTouched(i)\" [formControlName]=\"i\"\r\n            [(ngModel)]=\"field.value\">\r\n          <div *ngIf=\"formGroup().controls[i].touched\">\r\n                    <span\r\n                      *ngIf=\"formGroup().controls[i].errors && formGroup().controls[i].errors['required']\">\r\n                      {{(field.type=='firstName'?'Name':(field.type=='tel'?'Phone Number':(field.type=='lastName'?'Others':field.type)))}} is required.\r\n                    </span>\r\n            <span *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['EmailError']\">\r\n                      Not a valid Email!\r\n                    </span>\r\n            <span *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['PhoneNumberError']\">\r\n                      Not a valid Phone Number!\r\n                    </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container-temp text-center\">\r\n    <button class=\"btn prime-action\" *ngIf=\"page.type !=='Result'\">\r\n      {{data.props.title}}\r\n    </button>\r\n    <a class=\"btn prime-action\" *ngIf=\"page.type ==='Result'\"\r\n      [attr.href]=\"jsonBuilderHelper.getJSONBuilt().navigate_Url\"\r\n      target=\"_blank\"\r\n      [class.hide] =\"leadsaved\"\r\n      (click)=\"preventdefault($event)\">\r\n       {{data.props.title}}\r\n    </a>\r\n  </div>\r\n</form>\r\n"

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(formGroup())\" [formGroup]=\"formGroup()\" novalidate>\r\n  <div class=\"container-temp text-center\">\r\n    <div class=\" text-center question-section\">\r\n      <div class=\"input-section\">\r\n        <div *ngFor=\"let field of data.fields, let i=index\" class=\"input-outer\" [class.w100]=\"data.fields.length==1\">\r\n          <div class=\"section-head\"> <div class=\"pull-left\">{{field.name}} </div> </div>\r\n          <input tabindex=\"0\"\r\n                 placeholder=\"{{field.placeholder}}\"\r\n                 type=\"{{field.type}}\"\r\n                 (blur) = \"onTouched(i)\"\r\n                 [formControlName]=\"i\"\r\n                 [(ngModel)]=\"field.value\"\r\n          >\r\n          <div *ngIf=\"formGroup().controls[i].touched\">\r\n                    <span\r\n                      *ngIf=\"formGroup().controls[i].errors && formGroup().controls[i].errors['required']\">\r\n                      {{(field.type=='firstName'?'Name':(field.type=='tel'?'Phone Number':(field.type=='lastName'?'Others':field.type)))}} is required.\r\n                    </span>\r\n            <span\r\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['EmailError']\">\r\n                      Not a valid Email!\r\n                    </span>\r\n            <span\r\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['PhoneNumberError']\">\r\n                      Not a valid Phone Number!\r\n                    </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"w100 text-center\">\r\n    <button class=\"btn prime-action sliding-next og-lead-ques\"\r\n    >\r\n      <!--[themeColor]=\"['background']\"-->\r\n      {{data.props.title}}\r\n    </button>\r\n  </div>\r\n</form>\r\n"

/***/ },

/***/ 839:
/***/ function(module, exports) {

module.exports = "<div class=\"check-comp\" [formGroup]=\"form.controls[data._id]\">\r\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n    <img [src]=\"data.imageURL\" />\r\n  </div>\r\n  <div class=\"radio-outer\" \r\n    [class.active]=\"radio_item.selected\" \r\n    *ngFor=\"let radio_item of data.options, let i = index\" \r\n    tabindex=\"0\"\r\n    [class.pic-selector]=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"\r\n  >\r\n    <label   [class.no-icon]=\"!data.isIconPresent\" onclick=\"\" class=\"control control--radio lable-style\" [ngStyle]=\"{'background-image': 'url('+((data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card')?radio_item.imageURL:'')+')'}\">\r\n      <span *ngIf=\"!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'\">{{radio_item.label}}</span>\r\n      <input type=\"radio\"\r\n             id=\"{{data._id}}{{i}}\"\r\n             [formControlName]=\"i\"\r\n             [checked]=\"radio_item.selected\"\r\n             (change)=\"onClick(radio_item)\"\r\n      />\r\n      <div class=\"control__indicator icon-set\" [class.icon-set]=\"data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\">\r\n        <i\r\n          class=\"material-icons\"\r\n          *ngIf=\"(radio_item.icon != '' && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'))\"\r\n        >\r\n          {{radio_item.icon}}\r\n        </i>\r\n        <i\r\n          class=\"material-icons\"\r\n          *ngIf=\"radio_item.icon == '' && data.isIconPresent  && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n        >\r\n          landscape\r\n        </i>\r\n        <div class=\"label-image\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"></div>\r\n        <span class=\"img-overlay\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n          <span class=\"text-overlay\">\r\n            <span>{{radio_item.label}}</span>\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </label>\r\n  </div>\r\n  <!-- <span *ngIf=\"form.controls[data._id].touched\">\r\n      <div class=\"errorMessage\" *ngIf=\"!isValid\">{{data.config.validations.required.message}}</div>\r\n  </span> -->\r\n  <div class=\"errorMessage\" *ngIf=\"(form.controls[data._id].touched) && !isValid\">\r\n    {{data.config.validations.required.message}}\r\n  </div>\r\n</div>"

/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"data.visible == true\">\r\n    <div\r\n      class=\"small-top-sec\"\r\n      *ngIf=\"!data.hasOwnProperty('result')\"\r\n      [htmlProcess]=\"resultNow\">\r\n    </div>\r\n\r\n    <div\r\n      class=\"small-top-sec\"\r\n      *ngIf=\"!data.hasOwnProperty('result')\"\r\n      [htmlProcess]=\"data.props.title\">\r\n    </div>\r\n    <div\r\n      class=\"small-top-sec\"\r\n      *ngIf=\"!data.hasOwnProperty('result')\"\r\n      [htmlProcess]=\"data.props.postTitle\">\r\n    </div>\r\n</div>\r\n"

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = "<div class=\"dropdown-set\">\r\n  <div class=\"control-group select\" [formGroup]=\"form\" tabindex=\"0\">\r\n    <select class=\"demo-default {{data._id}} \" [(ngModel)]=\"data.props.currentValue\" [id]=\"data._id\" (change)=\"onChange($event)\" [formControlName]=\"data._id\">\r\n      <option tabindex=\"0\"\r\n              *ngFor=\"let option of data.options; let i = index\"\r\n              id=\"{{data._id}}{{i}}\"\r\n              [value]=\"option.hashIndex\"\r\n              [selected]=\"option.selected\"\r\n      >\r\n        {{option.label}}\r\n      </option>\r\n    </select>\r\n    <div class=\"select__arrow\"></div>\r\n    <div class=\"errorMessage\" *ngIf=\"!form.controls[data._id].pristine && !isValid\">\r\n      {{data.config.validations.required.message}}\r\n    </div>\r\n  </div>\r\n</div>"

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = "<div class=\"slider-set\">\r\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n    <img [src]=\"data.imageURL\" />\r\n  </div>\r\n  <div class=\"range-slider\">\r\n    <div class=\"well1\" tabindex=\"0\">\r\n      <input id=\"{{data._id}}\" type=\"text\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = "<div [formGroup]=\"form.controls[data._id]\">\r\n\t<div class=\"switch-outer text-right\" *ngFor=\"let switch_item of data.options, let i = index\">\r\n\t\t<div class=\"switch-que\">{{switch_item.label}}</div>\r\n\t\t<div class=\"pull-right\">\r\n\t\t\t<div class=\"switch \">\r\n\t\t\t\t<input \r\n\t\t\t\t\ttype=\"checkbox\"\r\n\t\t\t\t\t[id]=\"data._id\"\r\n\t\t\t\t\t[formControlName]=\"i\"\r\n\t\t\t\t\tclass=\"cmn-toggle cmn-toggle-round-flat\"  \r\n\t\t\t\t\tid=\"{{data._id}}{{i}}\"\r\n\t\t\t\t\t[checked]=\"switch_item.selected\"\r\n\t\t\t\t\t(change)=\"onChange(switch_item,i)\"\r\n\t\t\t\t\tplaceholder=\"{{data.config.placeholder}}\" \r\n\t\t\t\t\tvalue=\"{{switch_item.value}}\"\r\n\t\t\t\t>\r\n\t\t\t\t<label attr.for=\"{{data._id}}{{i}}\"></label>\r\n\t\t\t\t\t<!--[themeColor]=\"['background']\"-->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"errorMessage\" *ngIf=\"form.controls[data._id].touched && !isValid\">\r\n\t\t{{data.config.validations.required.message}}\r\n\t</div>\r\n</div>"

/***/ },

/***/ 844:
/***/ function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\r\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n    <img [src]=\"data.imageURL\" />\r\n  </div>\r\n  <div class=\"input-field\">\r\n    <input tabindex=\"0\"\r\n           type=\"{{data.config.type}}\"\r\n           placeholder=\"{{data.config.placeholder}}\"\r\n           [id]=\"data._id\"\r\n           [(ngModel)]=\"data.props.currentValue\"\r\n           (change)=\"data.props.currentLabel=data.props.currentValue\"\r\n           [formControlName]=\"data._id\"\r\n           (blur)=\"onBlur()\"\r\n           (keypress)=\"keyPressed($event)\"\r\n    >\r\n  </div>\r\n  <div class=\"errorMessage\" *ngIf=\"form.controls[data._id].touched && !isValid\">{{ValidationMessage}}</div>\r\n</div>\r\n"

/***/ },

/***/ 884:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_emails__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userCompany__ = __webpack_require__(412);
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

/***/ 891:
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