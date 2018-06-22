webpackJsonp(["analytics.module"],{

/***/ "./src/app/site/components/+analytics/analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<sd-toolbar [page]=\"'analytics'\"></sd-toolbar>\r\n<div class=\"preloader\" *ngIf=\"!calc_id\">\r\n  <div class=\"status\">&nbsp;</div>\r\n</div>\r\n\r\n<div *ngIf=\"calc_id!='null'\" [class.builder-parent2]=\"hellobarMessage\">\r\n  <!-- Analytics Section -->\r\n  <div class=\"analytics-top-outer\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-top-inner\">\r\n      <h6>Showing analytics for </h6>\r\n      <h4><span class=\"mob-width-set\">{{calc_name}}</span>\r\n        <div class=\"btn-group company-dropdown-wrapper\">\r\n          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"material-icons\" *ngIf=\"live_calculators.length>1\">keyboard_arrow_down</i>\r\n          </button>\r\n          <ul class=\"dropdown-menu \">\r\n            <div class=\"company-dropdown-main\">\r\n              <div class=\"company-dropdown-list\" [class.scrollbar]=\"live_calculators.length > 5\">\r\n                <li *ngFor=\"let calc of live_calculators, let i = index\">\r\n                  <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"onCalcSelect(calc)\">\r\n                    <div class=\"company-block\">\r\n                      <span class=\"company-block-inner\">{{calc.name.charAt(0)}}</span>\r\n                    </div>\r\n                    <div class=\"company-block-content\">\r\n                      <span class=\"company-title ellipsis\">{{calc.name}}</span>\r\n                      <span class=\"company-site ellipsis hide\">{{calc.url}}</span>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n              </div>\r\n            </div>\r\n          </ul>\r\n        </div>\r\n      </h4>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-mid-inner\">\r\n            <span class=\"active-outer hide\" *ngIf=\"isActive\">\r\n                <i class=\"material-icons\">check_circle</i>\r\n                Active (since {{activeSince}})\r\n            </span>\r\n      <span class=\"active-outer hide\" *ngIf=\"!isActive\">\r\n                <i class=\"material-icons\" style=\"color:red;\">check_circle</i>\r\n                Not Active\r\n            </span>\r\n      <!--<a class=\"preview-outer\" href=\"#\"><i class=\"material-icons\">launch</i> Preview Calculator</a>-->\r\n    </div>\r\n  </div>\r\n  <!-- Start: wrapper -->\r\n  <section class=\"wrapper\" *ngIf=\"calc_id\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n      <!-- Start: Left Sidebar -->\r\n      <div class=\"left-sidebar analytics-left-side col-md-3 col-sm-3 col-xs-3 np\">\r\n        <div id=\"\" class=\"tabbable tabs-left\">\r\n          <ul>\r\n            <li class=\"active\">\r\n              <a href=\"#overview\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('overview')\">\r\n                                <span class=\"left-sidebar-icon\">\r\n                                    <i class=\"material-icons\">dialpad</i>\r\n                                </span>\r\n                <div class=\"left-sidebar-title\">\r\n                  <h6 class=\"tab-overview\">Overview</h6>\r\n                  <span class=\"\">Get an overview of your visitors and conversions.</span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li class=\"\">\r\n              <a href=\"#person\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('details')\">\r\n                                <span class=\"left-sidebar-icon\">\r\n                                    <i class=\"material-icons\">person</i>\r\n                                </span>\r\n                <div class=\"left-sidebar-title\">\r\n                  <h6 class=\"\">User Details</h6>\r\n                  <span class=\"\">See detailed analytics and user responses.</span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <!--<li class=\"\">\r\n              <a href=\"#traffic\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('traffic')\">\r\n                                <span class=\"left-sidebar-icon noti-icon\">\r\n                                    <i class=\"material-icons\">traffic</i>\r\n                                </span>\r\n                <div class=\"left-sidebar-title\">\r\n                  <h6 class=\"\">Traffic Details\r\n                    <span class=\"main\">\r\n                      <i class=\"material-icons lock-icon\" *ngIf=\"!_featureAuthService.features.analytics.traffic_details\">lock_outline</i>\r\n                    </span>\r\n                  </h6>\r\n                  <span class=\"\">Get deeper insights about your calculator's traffic data.</span>\r\n                </div>\r\n              </a>\r\n            </li>-->\r\n            <li>\r\n              <a href=\"#traffic\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('funnel')\">\r\n                <span class=\"left-sidebar-icon noti-icon\">\r\n                    <i class=\"material-icons\">filter_list</i>\r\n                </span>\r\n                <div class=\"left-sidebar-title\">\r\n                   <h6 >User Funnels</h6>\r\n                   <span class=\"main\">\r\n                      <i class=\"material-icons lock-icon\" *ngIf=\"!_featureAuthService.features.analytics.funnel\">lock_outline</i>\r\n                    </span>\r\n                   <span class=\"\">Get detailed metrics on user flows.</span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- End: Left Sidebar -->\r\n      <!-- Start: wrapper content -->\r\n      <div class=\"wrapper-content col-md-9 col-sm-9 col-xs-9 analytics-mt0\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n          <div class=\"tab-content tabs-wrapper col-md-12 col-sm-12 col-xs-12 np analytics-page\">\r\n            <!-- Start: overview (1) -->\r\n            <og-overview *ngIf=\"analytic_component === 'overview'\" [fromGlobalAnalytics]=\"true\" [calc]=\"calculator\"></og-overview>\r\n            <!-- End: overview (1) -->\r\n            <!-- Start: person (2) -->\r\n            <og-user-details *ngIf=\"analytic_component === 'details'\" [fromGlobalAnalytics]=\"true\"  [calc]=\"calculator\"></og-user-details>\r\n            <!-- End: person (2) -->\r\n            <!-- Start: traffic (3) -->\r\n            <!--<og-traffic-details *ngIf=\"analytic_component === 'traffic'\" [calc]=\"calculator\"></og-traffic-details>-->\r\n            <!-- End: traffic (3) -->\r\n            <!-- Start: funnel (3) -->\r\n            <og-funnel-view *ngIf=\"analytic_component === 'funnel'\" [fromGlobalAnalytics]=\"true\" [calc]=\"calculator\"></og-funnel-view>\r\n            <!-- End: funnel (3) -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- End: wrapper content -->\r\n    </div>\r\n  </section>\r\n  <!-- End: wrapper -->\r\n</div>\r\n\r\n<div *ngIf=\"calc_id=='null'\">\r\n  <div class=\"analytics-top-outer\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-top-inner\">\r\n      <!--<h6>Showing analytics for </h6>-->\r\n      <h4>No Live Calculator</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12 analytics-bottom-dummy\">\r\n    <div class=\"col-xs-12 col-sm-12\">\r\n      <div class=\"analytics-bottom-popup\">\r\n        <i class=\"material-icons\">grid_off</i>\r\n        Since you haven't published anything, there is no data just yet.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/site/components/+analytics/analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_cookie_service__ = __webpack_require__("./src/app/shared/services/cookie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_company_service__ = __webpack_require__("./src/app/shared/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_script_service__ = __webpack_require__("./src/app/shared/services/script.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_feature_access_service__ = __webpack_require__("./src/app/shared/services/feature-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_subdomain_service__ = __webpack_require__("./src/app/shared/services/subdomain.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_marketing_service__ = __webpack_require__("./src/app/shared/services/marketing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_membership_service__ = __webpack_require__("./src/app/shared/services/membership.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_models_currentPlan__ = __webpack_require__("./src/app/shared/models/currentPlan.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_countdown_promo_service__ = __webpack_require__("./src/app/shared/services/countdown-promo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AnalyticsComponent = (function () {
    function AnalyticsComponent(companyService, _router, _script, _marketingService, titleService, _featureAuthService, _subDomainService, _membershipService, countdownPromoService, _cookieService) {
        var _this = this;
        this.companyService = companyService;
        this._router = _router;
        this._script = _script;
        this._marketingService = _marketingService;
        this.titleService = titleService;
        this._featureAuthService = _featureAuthService;
        this._subDomainService = _subDomainService;
        this._membershipService = _membershipService;
        this.countdownPromoService = countdownPromoService;
        this._cookieService = _cookieService;
        this.live_calculators = [];
        this.analytic_component = '';
        this.hellobarMessage = '';
        this.titleService.setTitle("Outgrow Home");
        this.company_id = _subDomainService.subDomain.company_id;
        this._marketingService.initGTM()
            .then(function (data) { return _this._marketingService.identifyUser(); })
            .catch(function (err) { return console.log(err); });
    }
    AnalyticsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._script.load('highcharts', 'gCharts', 'jqueryUI', 'slimScroll', 'raphael', 'morrisCharts', 'datatables', 'daterangepicker', 'moment')
            .then(function (data) {
            //console.log('Scripts Loaded', data);
            window.loadGoogleCharts();
            _this.analytic_component = "overview";
        })
            .catch(function (error) {
            //any error
        });
        var interval = setInterval(function () {
            if (window.Intercom) {
                window.Intercom('update', { 'app_current_page': 'analytics' });
                window.Intercom('update', { 'app_current_page_url': window.location.href });
                clearInterval(interval);
            }
        }, 1000);
    };
    AnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hellobarMessage = this._cookieService.readCookie('hellobar') ? JSON.parse(this._cookieService.readCookie('hellobar')) : null;
        var self = this;
        //Code
        this.companyService.getLiveCompanyProjects(this.company_id)
            .subscribe(function (response) {
            if (response.length) {
                self.calculator = response[0];
                _this.live_calculators = response;
                _this.calc_id = response[0]._id;
                _this.calc_name = response[0].name;
                _this.activeSince = moment(response[0].createdAt).fromNow().replace('ago', '').trim();
                _this.isActive = response[0].mode == 'PUBLIC';
            }
            else {
                _this.calc_id = 'null';
                jQuery('body').addClass('hnjjkads');
            }
        }, function (error) {
            console.log(error);
        });
        var cookie = this._cookieService.readCookie('storage');
        var storage = cookie != null ? JSON.parse(cookie) : '';
        if (storage && storage.token) {
            this._membershipService.getPlanSubscription()
                .subscribe(function (success) {
                var subscription = new __WEBPACK_IMPORTED_MODULE_10__shared_models_currentPlan__["c" /* Subscriptions */](success.currentplan.subscription);
                switch (subscription.status) {
                    case 'in_trial':
                        var difference = void 0;
                        _this.countdownPromoService.subscription = subscription;
                        var trialEnd = moment.unix(success.currentplan.subscription.trial_end);
                        _this.countdownPromoService.setCountdownTimer(trialEnd);
                        if (_this.countdownPromoService.trialEnd) {
                            difference = moment.duration(_this.countdownPromoService.trialEnd.diff(moment(new Date())));
                        }
                        // if (difference.asDays() <= 4 && difference.asDays() >= 0) {
                        //this.showPromo = true;
                        //}
                        break;
                }
            });
        }
        // if (!this._featureAuthService.features.isLoaded) {
        //   this._featureAuthService.getAllFeatureAccess().subscribe((result) => {
        //     this._featureAuthService.features = new FeatureAccess(result);
        //   })
        // }
        this._featureAuthService.getFeatures().subscribe(function (f) {
            console.log("Innn Analytics", f, _this._featureAuthService.features);
        });
    };
    AnalyticsComponent.prototype.onAnalyticTypeSelect = function (type) {
        var isTrafficAvail = this._featureAuthService.features.analytics.traffic_details;
        var isFunnelAvail = this._featureAuthService.features.analytics.funnel;
        if ((type == 'funnel' && isFunnelAvail) || (type == 'overview' && true) || (type == 'details' && true) || (type == 'traffic' && isTrafficAvail)) {
            this.analytic_component = type;
        }
        else {
            if (type == 'funnel')
                this._featureAuthService.setSelectedFeature('analytics', 'funnel');
            else
                this._featureAuthService.setSelectedFeature('analytics', 'traffic_details');
            jQuery('.analytics').addClass('activegreen limited-label');
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
        }
    };
    AnalyticsComponent.prototype.onCalcSelect = function (calc) {
        this.calculator = calc;
        this.calc_id = calc._id;
        this.calc_name = calc.name;
        this.activeSince = moment(calc.createdAt).fromNow().replace('ago', '').trim();
        this.isActive = calc.mode == 'PUBLIC';
        jQuery('.company-dropdown-wrapper').removeClass('.open');
    };
    AnalyticsComponent.prototype.ngOnDestroy = function () {
        jQuery('.modal-backdrop.fade.in').addClass('hide');
        jQuery('body').removeClass('hnjjkads modal-open');
    };
    return AnalyticsComponent;
}());
AnalyticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'og-analytics',
        template: __webpack_require__("./src/app/site/components/+analytics/analytics.component.html"),
        styles: [__webpack_require__("./src/app/site/components/+analytics/assets/css/daterangepicker.css"), __webpack_require__("./src/app/site/components/+analytics/assets/css/analytics.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ViewEncapsulation */].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_script_service__["a" /* Script */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_script_service__["a" /* Script */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_marketing_service__["a" /* MarketingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_marketing_service__["a" /* MarketingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["e" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["e" /* Title */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_feature_access_service__["a" /* FeatureAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_feature_access_service__["a" /* FeatureAuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_subdomain_service__["a" /* SubDomainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_subdomain_service__["a" /* SubDomainService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__shared_services_membership_service__["a" /* MembershipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_services_membership_service__["a" /* MembershipService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_11__shared_services_countdown_promo_service__["a" /* CountdownPromoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_services_countdown_promo_service__["a" /* CountdownPromoService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_cookie_service__["a" /* CookieService */]) === "function" && _k || Object])
], AnalyticsComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=analytics.component.js.map

/***/ }),

/***/ "./src/app/site/components/+analytics/analytics.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__analytics_component__ = __webpack_require__("./src/app/site/components/+analytics/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_utilities_module__ = __webpack_require__("./src/app/shared/modules/utilities.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__analyticsChild_module__ = __webpack_require__("./src/app/site/components/+analytics/analyticsChild.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toolbar_toolbar_module__ = __webpack_require__("./src/app/site/components/toolbar/toolbar.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ANALYTIC_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__analytics_component__["a" /* AnalyticsComponent */]
    }
];
var AnalyticsModule = (function () {
    function AnalyticsModule() {
    }
    return AnalyticsModule;
}());
AnalyticsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__analytics_component__["a" /* AnalyticsComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forChild(ANALYTIC_ROUTES), __WEBPACK_IMPORTED_MODULE_4__shared_modules_utilities_module__["a" /* UtilitiesModule */], __WEBPACK_IMPORTED_MODULE_5__analyticsChild_module__["a" /* AnalyticsChildModule */], __WEBPACK_IMPORTED_MODULE_6__toolbar_toolbar_module__["a" /* ToolbarModule */]]
    })
], AnalyticsModule);

//# sourceMappingURL=analytics.module.js.map

/***/ })

});