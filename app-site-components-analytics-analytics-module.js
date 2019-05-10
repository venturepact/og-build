(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-site-components-analytics-analytics-module"],{

/***/ "./src/app/site/components/+analytics/analytics.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/site/components/+analytics/analytics.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sd-toolbar [page]=\"'analytics'\"></sd-toolbar>\n<div class=\"preloader\" *ngIf=\"!calc_id\">\n  <div class=\"status\">&nbsp;</div>\n</div>\n\n<div *ngIf=\"calc_id!='null'\" [class.builder-parent2]=\"hellobarMessage\">\n  <!-- Analytics Section -->\n  <div class=\"analytics-top-outer\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-top-inner\">\n      <h6>Showing analytics for </h6>\n      <h4><span class=\"mob-width-set\">{{calc_name}}</span>\n        <div class=\"btn-group company-dropdown-wrapper\">\n          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"material-icons\" *ngIf=\"live_calculators.length>0\">keyboard_arrow_down</i>\n          </button>\n          <ul class=\"dropdown-menu \">\n            <div class=\"company-dropdown-main\">\n              <div class=\"company-dropdown-list\" [class.scrollbar]=\"live_calculators.length > 5\">\n                <li *ngFor=\"let calc of live_calculators, let i = index\">\n                  <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"onCalcSelect(calc)\">\n                    <div class=\"company-block\">\n                      <span class=\"company-block-inner\">{{calc.name.charAt(0)}}</span>\n                    </div>\n                    <div class=\"company-block-content\">\n                      <span class=\"company-title ellipsis\">{{calc.name}}</span>\n                      <span class=\"company-site ellipsis hide\">{{calc.url}}</span>\n                    </div>\n                  </a>\n                </li>\n                <li *ngIf=\"live_calculators && live_calculators.length &&  live_calculators.length > 1\">\n                  <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"onCalcSelect('all')\">\n                    <div class=\"company-block\">\n                      <span class=\"company-block-inner\">A</span>\n                    </div>\n                    <div class=\"company-block-content\">\n                      <span class=\"company-title ellipsis\">All Experiences</span>\n                      <span class=\"company-site ellipsis hide\">All Experiences</span>\n                    </div>\n                  </a>\n                </li>\n                <li *ngIf=\"live_calculators && live_calculators.length\">\n                  <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"onCalcSelect(sample_analytics_deatils)\">\n                    <div class=\"company-block\">\n                      <span class=\"company-block-inner\">S </span>\n                    </div>\n                    <div class=\"company-block-content\">\n                      <span class=\"company-title ellipsis\">Sample Analytics</span>\n                      <span class=\"company-site ellipsis hide\">Sample Analytics</span>\n                    </div>\n                  </a>\n                </li>\n              </div>\n            </div>\n          </ul>\n        </div>\n      </h4>\n    </div>\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-mid-inner\" *ngIf=\"isApp\">\n      <span class=\"active-outer hide\" *ngIf=\"isActive\">\n        <i class=\"material-icons\">check_circle</i>\n        Active (since {{activeSince}})\n      </span>\n      <span class=\"active-outer hide\" *ngIf=\"!isActive\">\n        <i class=\"material-icons\" style=\"color:red;\">check_circle</i>\n        Not Active\n      </span>\n      <!--<a class=\"preview-outer\" href=\"#\"><i class=\"material-icons\">launch</i> Preview Calculator</a>-->\n    </div>\n  </div>\n  <!-- Start: wrapper -->\n  <section class=\"wrapper\" *ngIf=\"calc_id\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n      <!-- Start: Left Sidebar -->\n      <div class=\"left-sidebar analytics-left-side col-md-3 col-sm-3 col-xs-3 np\">\n        <div id=\"\" class=\"tabbable tabs-left\">\n          <ul>\n            <li class=\"active\" [style.pointer-events]=\"isApp? 'auto' : 'none'\" id=\"user_overview\">\n              <a href=\"#overview\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('overview')\">\n                <span class=\"left-sidebar-icon\">\n                  <i class=\"material-icons\">dialpad</i>\n                </span>\n                <div class=\"left-sidebar-title\">\n                  <h6 class=\"tab-overview\">Overview</h6>\n                  <span class=\"\">Get an overview of your visitors and conversions.</span>\n                </div>\n              </a>\n            </li>\n            <li class=\"userDetilsAnalytics\" id=\"user_detils_analytics_li\">\n              <a href=\"#person\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('details')\" id=\"user_detils_analytics_anchor\">\n                <span class=\"left-sidebar-icon\">\n                  <i class=\"material-icons\">person</i>\n                </span>\n                <div class=\"left-sidebar-title\">\n                  <h6 class=\"\">User Details</h6>\n                  <span class=\"\">See detailed analytics and user responses.</span>\n                </div>\n              </a>\n            </li>\n            <!--<li class=\"\">\n              <a href=\"#traffic\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('traffic')\">\n                                <span class=\"left-sidebar-icon noti-icon\">\n                                    <i class=\"material-icons\">traffic</i>\n                                </span>\n                <div class=\"left-sidebar-title\">\n                  <h6 class=\"\">Traffic Details\n                    <span class=\"main\">\n                      <i class=\"material-icons lock-icon\" *ngIf=\"!_featureAuthService.features.analytics.traffic_details\">lock_outline</i>\n                    </span>\n                  </h6>\n                  <span class=\"\">Get deeper insights about your calculator's traffic data.</span>\n                </div>\n              </a>\n            </li>-->\n            <li id=\"user_funnel\" [style.pointer-events]=\"isApp? 'auto' : 'none'\">\n              <a href=\"#traffic\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('funnel')\">\n                <span class=\"left-sidebar-icon noti-icon\">\n                  <i class=\"material-icons\">filter_list</i>\n                </span>\n                <div class=\"left-sidebar-title\">\n                  <h6>User Funnels</h6>\n                  <span class=\"main\">\n                    <i class=\"material-icons lock-icon\" *ngIf=\"!_featureAuthService.features.analytics.funnel\">lock_outline</i>\n                  </span>\n                  <span class=\"\">Get detailed metrics on user flows.</span>\n                </div>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <!-- End: Left Sidebar -->\n      <!-- Start: wrapper content -->\n      <div class=\"wrapper-content col-md-9 col-sm-9 col-xs-9 analytics-mt0\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n          <div class=\"tab-content tabs-wrapper col-md-12 col-sm-12 col-xs-12 np analytics-page\">\n            <!-- Start: overview (1) -->\n            <og-overview *ngIf=\"analytic_component === 'overview'\" [fromGlobalAnalytics]=\"true\" [calc]=\"calculator\"></og-overview>\n            <!-- End: overview (1) -->\n            <!-- Start: person (2) -->\n            <og-user-details *ngIf=\"analytic_component === 'details'\" [fromGlobalAnalytics]=\"true\" [calc]=\"calculator\" [isApp]=\"isApp\"></og-user-details>\n            <!-- End: person (2) -->\n            <!-- Start: traffic (3) -->\n            <!--<og-traffic-details *ngIf=\"analytic_component === 'traffic'\" [calc]=\"calculator\"></og-traffic-details>-->\n            <!-- End: traffic (3) -->\n            <!-- Start: funnel (3) -->\n            <og-funnel-view *ngIf=\"analytic_component === 'funnel'\" [fromGlobalAnalytics]=\"true\" [calc]=\"calculator\"></og-funnel-view>\n            <!-- End: funnel (3) -->\n          </div>\n        </div>\n      </div>\n      <!-- End: wrapper content -->\n    </div>\n  </section>\n  <!-- End: wrapper -->\n</div>\n\n<div *ngIf=\"calc_id=='null'\">\n  <div class=\"analytics-top-outer\">\n    <!-- <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-top-inner\"> -->\n    <!--<h6>Showing analytics for </h6>-->\n    <!-- <h4>No Live Calculator</h4>\n    </div> -->\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-top-inner\" (click)=\"onCalcSelect(sample_analytics_deatils)\">\n      <!--<h6>Showing analytics for </h6>-->\n      <h4>Sample Analytics</h4>\n    </div>\n  </div>\n  <div class=\"col-xs-12 analytics-bottom-dummy\">\n    <div class=\"col-xs-12 col-sm-12\">\n      <div class=\"analytics-bottom-popup\">\n        <i class=\"material-icons\">grid_off</i>\n        Since you haven't published anything, there is no data just yet.\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/site/components/+analytics/analytics.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/site/components/+analytics/analytics.component.ts ***!
  \*******************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/cookie.service */ "./src/app/shared/services/cookie.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_script_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/script.service */ "./src/app/shared/services/script.service.ts");
/* harmony import */ var _shared_services_feature_access_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/feature-access.service */ "./src/app/shared/services/feature-access.service.ts");
/* harmony import */ var _shared_services_subdomain_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/subdomain.service */ "./src/app/shared/services/subdomain.service.ts");
/* harmony import */ var _shared_services_marketing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/marketing.service */ "./src/app/shared/services/marketing.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_membership_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/membership.service */ "./src/app/shared/services/membership.service.ts");
/* harmony import */ var _shared_models_currentPlan__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/models/currentPlan */ "./src/app/shared/models/currentPlan.ts");
/* harmony import */ var _shared_services_countdown_promo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/countdown-promo.service */ "./src/app/shared/services/countdown-promo.service.ts");













var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent(companyService, _router, _script, _marketingService, titleService, _featureAuthService, _subDomainService, _membershipService, countdownPromoService, _cookieService, _activateRoute) {
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
        this._activateRoute = _activateRoute;
        this.live_calculators = [];
        this.analytic_component = '';
        this.hellobarMessage = '';
        this.isApp = true;
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
        this.sample_analytics_deatils = this._activateRoute.snapshot.data.sample_calc;
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
                setTimeout(function () { return _this._featureAuthService.reInitUserDetails.next(true); }, 500);
            }
            else {
                _this.calc_id = 'null';
                jQuery('body').addClass('hnjjkads');
                _this.onCalcSelect(_this.sample_analytics_deatils);
            }
        }, function (error) {
            console.log(error);
        });
        var cookie = this._cookieService.readCookie('storage');
        var storage = cookie != null ? JSON.parse(cookie) : '';
        if (storage && storage.token) {
            this._membershipService.getPlanSubscription()
                .subscribe(function (success) {
                var subscription = new _shared_models_currentPlan__WEBPACK_IMPORTED_MODULE_11__["Subscriptions"](success.currentplan.subscription);
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
        var _this = this;
        this.isApp = true;
        if (calc._id == this.sample_analytics_deatils._id) {
            this.calc_id = this.sample_analytics_deatils._id;
            this.calc_name = this._subDomainService.sample_analytics_name;
            this.calculator = this.sample_analytics_deatils;
            this.activeSince = moment(calc.createdAt).fromNow().replace('ago', '').trim();
            this.isActive = calc.mode == 'PUBLIC';
        }
        else if (calc == 'all') {
            this.isApp = false;
            this.calculator = this.live_calculators;
            // console.log('Calc ids:::: ', this.calc_id);
            this.calc_id = String(this.live_calculators.map(function (d) { return d._id; }));
            // console.log('Calc ids:::: ', this.calc_id);
            this.calc_name = 'All Experiences';
            jQuery('#user_overview').removeClass('active');
            jQuery('#user_funnel').removeClass('active');
            jQuery('#user_detils_analytics_anchor')[0].click();
        }
        else {
            this.calculator = calc;
            this.calc_id = calc._id;
            this.calc_name = calc.name;
            this.activeSince = moment(calc.createdAt).fromNow().replace('ago', '').trim();
            this.isActive = calc.mode == 'PUBLIC';
        }
        jQuery('.company-dropdown-wrapper').removeClass('.open');
        setTimeout(function () { return _this._featureAuthService.reInitUserDetails.next(true); }, 500);
        // this._featureAuthService.bootboxInstance.next(bootbox);
    };
    AnalyticsComponent.prototype.ngOnDestroy = function () {
        jQuery('.modal-backdrop.fade.in').addClass('hide');
        jQuery('body').removeClass('hnjjkads modal-open');
    };
    AnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'og-analytics',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/site/components/+analytics/analytics.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./assets/css/daterangepicker.css */ "./src/app/site/components/+analytics/assets/css/daterangepicker.css"), __webpack_require__(/*! ./assets/css/analytics.component.css */ "./src/app/site/components/+analytics/assets/css/analytics.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared_services_script_service__WEBPACK_IMPORTED_MODULE_5__["Script"],
            _shared_services_marketing_service__WEBPACK_IMPORTED_MODULE_8__["MarketingService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"],
            _shared_services_feature_access_service__WEBPACK_IMPORTED_MODULE_6__["FeatureAuthService"],
            _shared_services_subdomain_service__WEBPACK_IMPORTED_MODULE_7__["SubDomainService"],
            _shared_services_membership_service__WEBPACK_IMPORTED_MODULE_10__["MembershipService"],
            _shared_services_countdown_promo_service__WEBPACK_IMPORTED_MODULE_12__["CountdownPromoService"],
            _shared_services_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/site/components/+analytics/analytics.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/site/components/+analytics/analytics.module.ts ***!
  \****************************************************************/
/*! exports provided: AnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.component */ "./src/app/site/components/+analytics/analytics.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _shared_modules_utilities_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/modules/utilities.module */ "./src/app/shared/modules/utilities.module.ts");
/* harmony import */ var _analyticsChild_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analyticsChild.module */ "./src/app/site/components/+analytics/analyticsChild.module.ts");
/* harmony import */ var _toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../toolbar/toolbar.module */ "./src/app/site/components/toolbar/toolbar.module.ts");








var ANALYTIC_ROUTES = [
    {
        path: '',
        component: _analytics_component__WEBPACK_IMPORTED_MODULE_2__["AnalyticsComponent"]
    }
];
var AnalyticsModule = /** @class */ (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_analytics_component__WEBPACK_IMPORTED_MODULE_2__["AnalyticsComponent"]],
            imports: [_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ANALYTIC_ROUTES), _shared_modules_utilities_module__WEBPACK_IMPORTED_MODULE_5__["UtilitiesModule"], _analyticsChild_module__WEBPACK_IMPORTED_MODULE_6__["AnalyticsChildModule"], _toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"]]
        })
    ], AnalyticsModule);
    return AnalyticsModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-site-components-analytics-analytics-module.js.map