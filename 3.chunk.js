webpackJsonp([3,13],{

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_features_interface__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_company_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_script_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_feature_access_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_marketing_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
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
    function AnalyticsComponent(companyService, _router, _script, _marketingService, titleService, _featureAuthService) {
        this.companyService = companyService;
        this._router = _router;
        this._script = _script;
        this._marketingService = _marketingService;
        this.titleService = titleService;
        this._featureAuthService = _featureAuthService;
        this.live_calculators = [];
        this.analytic_component = '';
        this.titleService.setTitle("Outgrow Home");
        this.company_id = localStorage.getItem('company');
        this._script.load('marketing')
            .then(function (data) {
            //console.log('Scripts Loaded', data);
            if (data.length && data[0].status == 'Loaded')
                _marketingService.initMarketingStuff();
        })
            .catch(function (error) {
            //any error
        });
    }
    AnalyticsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._script.load('gCharts', 'jqueryUI', 'slimScroll', 'raphael', 'morrisCharts', 'datatables', 'daterangepicker')
            .then(function (data) {
            //console.log('Scripts Loaded', data);
            window.loadGoogleCharts();
            _this.analytic_component = "overview";
        })
            .catch(function (error) {
            //any error
        });
    };
    AnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            }
        }, function (error) {
            console.log(error);
        });
        if (!this._featureAuthService.features.isLoaded) {
            this._featureAuthService.getAllFeatureAccess().subscribe(function (result) {
                _this._featureAuthService.features = new __WEBPACK_IMPORTED_MODULE_1__shared_interfaces_features_interface__["a" /* FeatureAccess */](result);
            });
        }
    };
    AnalyticsComponent.prototype.onAnalyticTypeSelect = function (type) {
        var isTrafficAvail = this._featureAuthService.features.analytics.traffic_details;
        if ((type == 'overview' && true) || (type == 'details' && true) || (type == 'traffic' && isTrafficAvail)) {
            this.analytic_component = type;
        }
        else {
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
    AnalyticsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'og-analytics',
            template: __webpack_require__(1221),
            styles: [__webpack_require__(955), __webpack_require__(954)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_company_service__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_company_service__["a" /* CompanyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_script_service__["a" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_script_service__["a" /* Script */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_marketing_service__["a" /* MarketingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_services_marketing_service__["a" /* MarketingService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* Title */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_feature_access_service__["a" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_feature_access_service__["a" /* FeatureAuthService */]) === 'function' && _f) || Object])
    ], AnalyticsComponent);
    return AnalyticsComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/analytics.component.js.map

/***/ }),

/***/ 1221:
/***/ (function(module, exports) {

module.exports = "<sd-toolbar [page]=\"'analytics'\"></sd-toolbar>\r\n<div class=\"preloader\" *ngIf=\"!calc_id\">\r\n  <div class=\"status\">&nbsp;</div>\r\n</div>\r\n\r\n<div *ngIf=\"calc_id!='null'\">\r\n  <!-- Analytics Section -->\r\n  <div class=\"analytics-top-outer\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-top-inner\">\r\n      <h6>Showing analytics for </h6>\r\n      <h4><span class=\"mob-width-set\">{{calc_name}}</span>\r\n        <div class=\"btn-group company-dropdown-wrapper\">\r\n          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"material-icons\" *ngIf=\"live_calculators.length>1\">keyboard_arrow_down</i>\r\n          </button>\r\n          <ul class=\"dropdown-menu \">\r\n            <div class=\"company-dropdown-main\">\r\n              <div class=\"company-dropdown-list\" [class.scrollbar]=\"live_calculators.length > 5\">\r\n                <li *ngFor=\"let calc of live_calculators, let i = index\">\r\n                  <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"onCalcSelect(calc)\">\r\n                    <div class=\"company-block\">\r\n                      <span class=\"company-block-inner\">{{calc.name.charAt(0)}}</span>\r\n                    </div>\r\n                    <div class=\"company-block-content\">\r\n                      <span class=\"company-title ellipsis\">{{calc.name}}</span>\r\n                      <span class=\"company-site ellipsis hide\">{{calc.url}}</span>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n              </div>\r\n            </div>\r\n          </ul>\r\n        </div>\r\n      </h4>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-mid-inner\">\r\n            <span class=\"active-outer\" *ngIf=\"isActive\">\r\n                <i class=\"material-icons\">check_circle</i>\r\n                Active (since {{activeSince}})\r\n            </span>\r\n      <span class=\"active-outer\" *ngIf=\"!isActive\">\r\n                <i class=\"material-icons\" style=\"color:red;\">check_circle</i>\r\n                Not Active\r\n            </span>\r\n      <!--<a class=\"preview-outer\" href=\"#\"><i class=\"material-icons\">launch</i> Preview Calculator</a>-->\r\n    </div>\r\n  </div>\r\n  <!-- Start: wrapper -->\r\n  <section class=\"wrapper\" *ngIf=\"calc_id\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n      <!-- Start: Left Sidebar -->\r\n      <div class=\"left-sidebar analytics-left-side col-md-3 col-sm-3 col-xs-3 np\">\r\n        <div id=\"\" class=\"tabbable tabs-left\">\r\n          <ul>\r\n            <li class=\"active\">\r\n              <a href=\"#overview\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('overview')\">\r\n                                <span class=\"left-sidebar-icon\">\r\n                                    <i class=\"material-icons\">dialpad</i>\r\n                                </span>\r\n                <div class=\"left-sidebar-title\">\r\n                  <h6 class=\"tab-overview\">Overview</h6>\r\n                  <span class=\"\">Get an overview of your visitors and conversions.</span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li class=\"\">\r\n              <a href=\"#person\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('details')\">\r\n                                <span class=\"left-sidebar-icon\">\r\n                                    <i class=\"material-icons\">person</i>\r\n                                </span>\r\n                <div class=\"left-sidebar-title\">\r\n                  <h6 class=\"\">User Details</h6>\r\n                  <span class=\"\">See detailed analytics and user responses.</span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li class=\"\">\r\n              <a href=\"#traffic\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('traffic')\">\r\n                                <span class=\"left-sidebar-icon noti-icon\">\r\n                                    <i class=\"material-icons\">traffic</i>\r\n                                </span>\r\n                <div class=\"left-sidebar-title\">\r\n                  <h6 class=\"\">Traffic Details\r\n                    <span class=\"main\">\r\n                      <i class=\"material-icons lock-icon\" *ngIf=\"!_featureAuthService.features.analytics.traffic_details\">lock_outline</i>\r\n                    </span>\r\n                  </h6>\r\n                  <span class=\"\">Get deeper insights about your calculator's traffic data.</span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- End: Left Sidebar -->\r\n      <!-- Start: wrapper content -->\r\n      <div class=\"wrapper-content col-md-9 col-sm-9 col-xs-9 analytics-mt0\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n          <div class=\"tab-content tabs-wrapper col-md-12 col-sm-12 col-xs-12 np analytics-page\">\r\n            <!-- Start: overview (1) -->\r\n            <og-overview *ngIf=\"analytic_component === 'overview'\" [calc]=\"calculator\"></og-overview>\r\n            <!-- End: overview (1) -->\r\n            <!-- Start: person (2) -->\r\n            <og-user-details *ngIf=\"analytic_component === 'details'\"  [calc]=\"calculator\"></og-user-details>\r\n            <!-- End: person (2) -->\r\n            <!-- Start: traffic (3) -->\r\n            <og-traffic-details *ngIf=\"analytic_component === 'traffic'\" [calc]=\"calculator\"></og-traffic-details>\r\n            <!-- End: traffic (3) -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- End: wrapper content -->\r\n    </div>\r\n  </section>\r\n  <!-- End: wrapper -->\r\n</div>\r\n\r\n<div *ngIf=\"calc_id=='null'\">\r\n  <div class=\"analytics-top-outer\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-top-inner\">\r\n      <!--<h6>Showing analytics for </h6>-->\r\n      <h4>No Live Calculator</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12 analytics-bottom-dummy\">\r\n    <div class=\"col-xs-12 col-sm-12\">\r\n      <div class=\"analytics-bottom-popup\">\r\n        <i class=\"material-icons\">grid_off</i>\r\n        Since you haven't published anything, there is no data just yet.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__analytics_component__ = __webpack_require__(1074);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_utilities_module__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__analyticsChild_module__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toolbar_toolbar_module__ = __webpack_require__(603);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    AnalyticsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__analytics_component__["a" /* AnalyticsComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(ANALYTIC_ROUTES), __WEBPACK_IMPORTED_MODULE_4__shared_modules_utilities_module__["a" /* UtilitiesModule */], __WEBPACK_IMPORTED_MODULE_5__analyticsChild_module__["a" /* AnalyticsChildModule */], __WEBPACK_IMPORTED_MODULE_6__toolbar_toolbar_module__["a" /* ToolbarModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AnalyticsModule);
    return AnalyticsModule;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/analytics.module.js.map

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

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateRangePickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateRangePickerComponent = (function () {
    function DateRangePickerComponent() {
        this.date = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.initialized = false;
    }
    DateRangePickerComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        // TODO error in these two functions so commented it.
        //Data range Picker
        var startDate = this.calc ? this.calc.createdAt : moment().subtract(10, 'days').calendar();
        var _a = this.getStartEndDates(startDate, new Date(), 'MM/DD/YYYY'), start_date = _a.start_date, end_date = _a.end_date;
        jQuery('.input-daterange-datepicker').daterangepicker({
            buttonClasses: ['btn', 'btn-sm'],
            applyClass: 'btn-danger',
            cancelClass: 'btn-inverse',
            startDate: start_date,
            endDate: end_date,
            maxDate: this.getUTCDate(new Date(), 'MM/DD/YYYY')
        });
        //On Date Apply
        jQuery('.input-daterange-datepicker').on('apply.daterangepicker', function (ev, picker) {
            start_date = moment(new Date(picker.startDate.format('YYYY-MM-DD'))).utc().add(0, 'days').format('YYYY-MM-DD');
            end_date = moment(new Date(picker.endDate.format('YYYY-MM-DD'))).utc().add(1, 'days').format('YYYY-MM-DD');
            self.date.emit({ start_date: start_date, end_date: end_date });
            localStorage.setItem('df', JSON.stringify({ start_date: start_date, end_date: end_date }));
        });
        this.initialized = true;
    };
    DateRangePickerComponent.prototype.ngOnChanges = function () {
        if (this.initialized) {
            var startDate = this.calc ? this.calc.createdAt : moment().subtract(10, 'days').calendar();
            jQuery('.input-daterange-datepicker').data('daterangepicker').setStartDate(this.getUTCDate(startDate, 'MM/DD/YYYY'));
            jQuery('.input-daterange-datepicker').data('daterangepicker').setEndDate(this.getUTCDate(new Date(), 'MM/DD/YYYY'));
            localStorage.removeItem('df');
        }
    };
    DateRangePickerComponent.prototype.getUTCDate = function (date, format, addDays) {
        if (date === void 0) { date = new Date(); }
        if (format === void 0) { format = 'YYYY-MM-DD'; }
        if (addDays === void 0) { addDays = 0; }
        return moment(date).utc().add(addDays, 'days').format(format);
    };
    DateRangePickerComponent.prototype.getStartEndDates = function (startDate, endDate, format) {
        if (format === void 0) { format = 'YYYY-MM-DD'; }
        var start_date, end_date;
        var dateFilterApplied = localStorage.getItem('df');
        if (dateFilterApplied && format == 'YYYY-MM-DD') {
            var dateFilterDate = JSON.parse(dateFilterApplied);
            start_date = moment(dateFilterDate.start_date).format(format);
            end_date = moment(dateFilterDate.end_date).format(format);
        }
        else if (dateFilterApplied && format != 'YYYY-MM-DD') {
            var dateFilterDate = JSON.parse(dateFilterApplied);
            start_date = moment(dateFilterDate.start_date).format(format);
            end_date = moment(dateFilterDate.end_date).add(-1, 'days').format(format);
        }
        else {
            start_date = moment(startDate).utc().add(0, 'days').format(format);
            end_date = moment(endDate).utc().add(1, 'days').format(format);
        }
        return { start_date: start_date, end_date: end_date };
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], DateRangePickerComponent.prototype, "calc", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], DateRangePickerComponent.prototype, "date", void 0);
    DateRangePickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'og-date-range-picker',
            template: __webpack_require__(945),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], DateRangePickerComponent);
    return DateRangePickerComponent;
    var _a;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/date_range_picker.component.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_components_analytics_components_date_range_picker_date_range_picker_component__ = __webpack_require__(925);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilitiesModule = (function () {
    function UtilitiesModule() {
    }
    UtilitiesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__site_components_analytics_components_date_range_picker_date_range_picker_component__["a" /* DateRangePickerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__site_components_analytics_components_date_range_picker_date_range_picker_component__["a" /* DateRangePickerComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], UtilitiesModule);
    return UtilitiesModule;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/utilities.module.js.map

/***/ }),

/***/ 945:
/***/ (function(module, exports) {

module.exports = "<div class=\"dp-outer \">\r\n\t<i class=\"material-icons icon-left\">date_range</i>\r\n\t<input class=\"input-daterange-datepicker datepicker-outer\" type=\"text\" name=\"daterange\" />\r\n\t<i class=\"material-icons icon-right\">keyboard_arrow_down</i>\r\n</div>\r\n"

/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calculator_analytics_service__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_overview_overview_component__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_details_user_details_component__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_traffic_details_traffic_details_component__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_details_popup_user_details_popup_component__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_modules_shared_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_modules_utilities_module__ = __webpack_require__(934);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsChildModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AnalyticsChildModule = (function () {
    function AnalyticsChildModule() {
    }
    AnalyticsChildModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__components_overview_overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_4__components_user_details_user_details_component__["a" /* UserDetailsComponent */], __WEBPACK_IMPORTED_MODULE_5__components_traffic_details_traffic_details_component__["a" /* TrafficDetailsComponent */], __WEBPACK_IMPORTED_MODULE_6__components_user_details_popup_user_details_popup_component__["a" /* UserDetailsPopupComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_7__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_8__shared_modules_utilities_module__["a" /* UtilitiesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__components_overview_overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_4__components_user_details_user_details_component__["a" /* UserDetailsComponent */], __WEBPACK_IMPORTED_MODULE_5__components_traffic_details_traffic_details_component__["a" /* TrafficDetailsComponent */], __WEBPACK_IMPORTED_MODULE_6__components_user_details_popup_user_details_popup_component__["a" /* UserDetailsPopupComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AnalyticsChildModule);
    return AnalyticsChildModule;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/analyticsChild.module.js.map

/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_feature_access_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calculator_analytics_service__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_range_picker_date_range_picker_component__ = __webpack_require__(925);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OverviewComponent = (function () {
    function OverviewComponent(_calcAnalytics, _featureAuthService) {
        this._calcAnalytics = _calcAnalytics;
        this._featureAuthService = _featureAuthService;
        this.postData = {};
        this.totalUniqueVisits = 0;
        this.totalVisits = 0;
        this.graphLoader = 'loading';
        this.subs = [];
    }
    OverviewComponent.prototype.ngAfterViewInit = function () {
        this.overviewChart = Morris.Area({
            element: 'area-example',
            data: [{ y: '0', a: 0, b: 0 }],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Unique Views', 'Page Views'],
            fillOpacity: 0.4,
            hideHover: 'auto',
            behaveLikeLine: true,
            resize: true,
            pointFillColors: ['#fb545b'],
            pointStrokeColors: ['#269fd8'],
            lineColors: ['#fb545b', '#269fd8'],
        });
    };
    OverviewComponent.prototype.ngOnInit = function () {
        //code
    };
    OverviewComponent.prototype.ngOnChanges = function () {
        if (this.calc) {
            if (this.calc.liveApp)
                this.calc_id = this.calc._id;
            else
                this.calc_id = this.calc.parentApp;
            var _a = this.drPicker.getStartEndDates(this.calc.createdAt, new Date()), start_date = _a.start_date, end_date = _a.end_date;
            this.postData.start_date = start_date;
            this.postData.end_date = end_date;
            this.postData.calc_id = this.calc_id;
            //get stats
            this.subs.push(this.getViewStats());
            //get stats
            this.subs.push(this.getCombinedStats());
        }
    };
    OverviewComponent.prototype.getViewStats = function () {
        var _this = this;
        this.graphLoader = 'loading';
        this.postData.type = 'date';
        return this._calcAnalytics.getTrafficStats(this.postData)
            .subscribe(function (response) {
            if (response.length && response[0][0] != '(not set)') {
                _this.totalUniqueVisits = 0;
                _this.totalVisits = 0;
                response = response.map(function (val) {
                    _this.totalUniqueVisits += Number(val[1]);
                    _this.totalVisits += Number(val[2]);
                    val[0] = val[0].replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$1-$2-$3');
                    return { y: val[0], a: val[1], b: val[2] };
                });
                _this.overviewChart.setData(response);
                response = response.map(function (val) { return { label: 'Visitors', value: val.b }; });
                _this.graphLoader = 'done';
            }
            else {
                _this.graphLoader = 'No Data Available !';
            }
        }, function (error) {
            _this.graphLoader = 'Something Went Wrong !';
        });
    };
    OverviewComponent.prototype.getCombinedStats = function () {
        var _this = this;
        // this.geoLoader = 'loading';
        this.postData.type = 'overview';
        return this._calcAnalytics.getTrafficStats(this.postData)
            .subscribe(function (response) {
            if (response.length) {
                var min = Math.floor(Number(response[0][3]) / 60);
                var seconds = Math.round(Number(response[0][3]) % 60);
                _this.stats = {
                    uniqueVisitors: response[0][1],
                    visitors: response[0][2],
                    timeOnPage: (min ? (min + ((min == 1) ? ' min ' : ' mins ')) : '') + ((seconds) ? seconds + ' s' : ''),
                    conversions: response[0][4],
                    conversionRate: (response[0][1] && response[0][4]) ? ((response[0][4] / response[0][1]) * 100).toFixed(2) : '0',
                    avgResponse: response[0][5],
                    engagements: response[0][6],
                    calcStarts: response[0][7]
                };
            }
            else {
                //this.geoLoader = 'No Data Available !';
                _this.stats = {
                    uniqueVisitors: '0',
                    visitors: '0',
                    timeOnPage: '0',
                    conversions: 0,
                    conversionRate: '0',
                    avgResponse: '0',
                    engagements: '0',
                    calcStarts: '0'
                };
            }
        }, function (error) {
            //this.geoLoader = 'Something Went Wrong !';
        });
    };
    OverviewComponent.prototype.onDateSelect = function (date) {
        this.postData.start_date = this.start_date = date.start_date;
        this.postData.end_date = this.end_date = date.end_date;
        //refresh stats
        this.getViewStats();
        this.getCombinedStats();
    };
    OverviewComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    OverviewComponent.prototype.unsubscribe = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__date_range_picker_date_range_picker_component__["a" /* DateRangePickerComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__date_range_picker_date_range_picker_component__["a" /* DateRangePickerComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__date_range_picker_date_range_picker_component__["a" /* DateRangePickerComponent */]) === 'function' && _a) || Object)
    ], OverviewComponent.prototype, "drPicker", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], OverviewComponent.prototype, "calc", void 0);
    OverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Component */])({
            selector: 'og-overview',
            template: __webpack_require__(956),
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_feature_access_service__["a" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_feature_access_service__["a" /* FeatureAuthService */]) === 'function' && _c) || Object])
    ], OverviewComponent);
    return OverviewComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/overview.component.js.map

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_cookie_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_range_picker_date_range_picker_component__ = __webpack_require__(925);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrafficDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrafficDetailsComponent = (function () {
    function TrafficDetailsComponent(_calcAnalytics, _cookieService) {
        this._calcAnalytics = _calcAnalytics;
        this._cookieService = _cookieService;
        this.geoLoader = 'loading';
        this.deviceLoader = 'loading';
        this.socialLoader = 'loading';
        this.browserLoader = 'loading';
        this.limit_alert = false;
        this.postData = {};
        this.subs = [];
    }
    TrafficDetailsComponent.prototype.ngAfterViewInit = function () {
        //Code
    };
    TrafficDetailsComponent.prototype.ngOnInit = function () {
        this.checkTrafficLimit();
    };
    TrafficDetailsComponent.prototype.checkTrafficLimit = function () {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var company = storage.company;
        this.limit_alert = company.current_limit.traffic === -1 || company.current_limit.traffic > company.current_usage.traffic ? false : true;
        //this.limit_alert  = true;
        //console.log(this.limit_alert, 'limit alert');
    };
    TrafficDetailsComponent.prototype.ngOnChanges = function () {
        if (this.calc) {
            if (this.calc.liveApp)
                this.calc_id = this.calc._id;
            else
                this.calc_id = this.calc.parentApp;
            var _a = this.drPicker.getStartEndDates(this.calc.createdAt, new Date()), start_date = _a.start_date, end_date = _a.end_date;
            this.postData.start_date = start_date;
            this.postData.end_date = end_date;
            this.postData.calc_id = this.calc_id;
            //get stats
            this.getStats();
        }
    };
    TrafficDetailsComponent.prototype.getStats = function () {
        //geo location data
        this.subs.push(this.getGeoStats());
        //device data
        this.subs.push(this.getDeviceStats());
        //social data
        this.subs.push(this.getSocialStats());
        //browser data
        this.subs.push(this.getBrowserStats());
    };
    TrafficDetailsComponent.prototype.getGeoStats = function () {
        var _this = this;
        this.geoLoader = 'loading';
        this.postData.type = 'country';
        return this._calcAnalytics.getTrafficStats(this.postData)
            .subscribe(function (response) {
            if (!response.length || (response.length == 1 && response[0][0] == '(not set)')) {
                _this.geoLoader = 'Available Soon !';
            }
            else {
                response = response.map(function (val) { return [val[0], Number(val[2])]; });
                response.unshift(['Country', 'Page Views']);
                _this.drawRegionsMap(response);
                _this.geoLoader = 'done';
            }
        }, function (error) {
            _this.geoLoader = 'Something Went Wrong !';
        });
    };
    TrafficDetailsComponent.prototype.getDeviceStats = function () {
        var _this = this;
        this.deviceLoader = 'loading';
        this.postData.type = 'deviceCategory';
        return this._calcAnalytics.getTrafficStats(this.postData)
            .subscribe(function (response) {
            if (response.length) {
                response = response.map(function (val) {
                    if (val[0] == '(not set)')
                        val[0] = 'Unknown device';
                    return response = [val[0], Number(val[2])];
                });
                response.unshift(['Devices', 'Page Views']);
                _this.drawPieChart(response, 'piechart');
                _this.deviceLoader = 'done';
            }
            else {
                _this.deviceLoader = 'Available Soon !';
            }
        }, function (error) {
            _this.deviceLoader = 'Something Went Wrong !';
        });
    };
    TrafficDetailsComponent.prototype.getSocialStats = function () {
        var _this = this;
        this.socialLoader = 'loading';
        this.postData.type = 'socialNetwork';
        return this._calcAnalytics.getTrafficStats(this.postData)
            .subscribe(function (response) {
            if (response.length) {
                response = response.map(function (val) {
                    if (val[0] == '(not set)')
                        val[0] = 'Direct Access';
                    return response = [val[0], Number(val[2])];
                });
                response.unshift(['Social', 'Page Views']);
                _this.drawPieChart(response, 'piechart1');
                _this.socialLoader = 'done';
            }
            else {
                _this.socialLoader = 'Available Soon !';
            }
        }, function (error) {
            _this.socialLoader = 'Something Went Wrong !';
        });
    };
    TrafficDetailsComponent.prototype.getBrowserStats = function () {
        var _this = this;
        this.browserLoader = 'loading';
        this.postData.type = 'browser';
        return this._calcAnalytics.getTrafficStats(this.postData)
            .subscribe(function (response) {
            if (response.length) {
                response = response.map(function (val) { return [val[0], Number(val[2])]; });
                response.unshift(['Browser', 'Page Views']);
                _this.drawPieChart(response, 'piechart2');
                _this.browserLoader = 'done';
            }
            else {
                _this.browserLoader = 'Available Soon !';
            }
        }, function (error) {
            _this.browserLoader = 'Something Went Wrong !';
        });
    };
    TrafficDetailsComponent.prototype.drawRegionsMap = function (graphData) {
        var data = google.visualization.arrayToDataTable(graphData);
        var options = { 'width': 250, 'height': 180,
            colors: ['#ce5050', '#f17a52', '#f9de71'],
            legend: 'none'
        };
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);
    };
    TrafficDetailsComponent.prototype.drawPieChart = function (graphData, drawingArea) {
        var data = google.visualization.arrayToDataTable(graphData);
        var options = {
            'width': '680', 'height': '280',
            backgroundColor: 'transparent',
            legend: { textStyle: { color: '#8c9194', fontSize: '11px', marginBottom: '5px' } },
            colors: ['#f38630', '#69d2e7', '#e0e4cc']
        };
        var chart = new google.visualization.PieChart(document.getElementById(drawingArea));
        chart.draw(data, options);
    };
    TrafficDetailsComponent.prototype.onDateSelect = function (date) {
        this.postData.start_date = date.start_date;
        this.postData.end_date = date.end_date;
        //refresh stats
        this.getStats();
    };
    TrafficDetailsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    TrafficDetailsComponent.prototype.unsubscribe = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__date_range_picker_date_range_picker_component__["a" /* DateRangePickerComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__date_range_picker_date_range_picker_component__["a" /* DateRangePickerComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__date_range_picker_date_range_picker_component__["a" /* DateRangePickerComponent */]) === 'function' && _a) || Object)
    ], TrafficDetailsComponent.prototype, "drPicker", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], TrafficDetailsComponent.prototype, "calc", void 0);
    TrafficDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'og-traffic-details',
            template: __webpack_require__(957),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_cookie_service__["a" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_cookie_service__["a" /* CookieService */]) === 'function' && _c) || Object])
    ], TrafficDetailsComponent);
    return TrafficDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/traffic_details.component.js.map

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_feature_access_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_cookie_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__date_range_picker_date_range_picker_component__ = __webpack_require__(925);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserDetailsComponent = (function () {
    function UserDetailsComponent(_calculatorAnalytics, _featureAuthService, _cookieService, cdr) {
        this._calculatorAnalytics = _calculatorAnalytics;
        this._featureAuthService = _featureAuthService;
        this._cookieService = _cookieService;
        this.cdr = cdr;
        this.avgAnswered = 0;
        this.conversionRate = 0;
        this.avgResult = 0;
        this.totalTime = 0;
        this.limit_alert = false;
        this.disable = false;
        this.loader = 1;
        this.postData = {};
        this.viewedOnStats = {
            desktop: 0,
            mobile: 0
        };
        this.viewedViaStats = {
            facebook: 0,
            twitter: 0,
            direct: 0
        };
        this.load = false;
        this.subs = [];
        this.lead = true;
    }
    UserDetailsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        jQuery(document).on('click', '.vd', function (event) {
            if (_this._featureAuthService.features.analytics.user_details) {
                self.visitorKey = jQuery(event.target).data('key');
                // Slide right
                event.stopPropagation();
                setTimeout(function () {
                    _this.cdr.detectChanges();
                    jQuery('.user-detail-outer').fadeIn();
                }, 100);
            }
            else {
                _this._featureAuthService.setSelectedFeature('analytics', 'user_details');
                jQuery('.analytics').addClass('activegreen limited-label');
                jQuery('#premiumModal').modal('show');
                jQuery('.modal-backdrop').insertAfter('#premiumModal');
            }
        });
        jQuery(document).on('click', '.as', function (event) {
            _this._featureAuthService.setSelectedFeature('analytics', 'user_details');
            jQuery('.analytics').addClass('activegreen limited-label');
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
        });
        this.intializeDatatable();
    };
    UserDetailsComponent.prototype.checkLeadsLimit = function () {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var company = storage.company;
        this.limit_alert = company.current_limit.leads === -1 || company.current_limit.leads > company.current_usage.leads ? false : true;
        //this.limit_alert  = true;
        if (this.limit_alert)
            this.loader = 1;
    };
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.checkLeadsLimit();
        this.load = true;
    };
    UserDetailsComponent.prototype.ngOnChanges = function () {
        if (this.calc) {
            if (this.calc.liveApp)
                this.calc_id = this.calc._id;
            else
                this.calc_id = this.calc.parentApp;
            var _a = this.drPicker.getStartEndDates(this.calc.createdAt, new Date()), start_date = _a.start_date, end_date = _a.end_date;
            this.postData.start_date = start_date;
            this.postData.end_date = end_date;
            this.intializeDatatable();
            this.loader = 0;
            this.reInitAvgVariable();
        }
    };
    UserDetailsComponent.prototype.calulateAnalyticsData = function (data) {
        var _this = this;
        if (data.length) {
            data.map(function (response) {
                if (response[7] != '--' || response[9] != '--') {
                    _this.viewedOnStats[response[7]] += 1;
                    _this.viewedViaStats[response[9] == '(not set)' ? 'direct' : response[9]] += 1;
                    _this.mostViewedVia = Object.keys(_this.viewedViaStats).reduce(function (a, b) { return _this.viewedViaStats[a] > _this.viewedViaStats[b] ? a : b; });
                    _this.mostViewedOn = Object.keys(_this.viewedOnStats).reduce(function (a, b) { return _this.viewedOnStats[a] > _this.viewedOnStats[b] ? a : b; });
                }
            });
        }
        else {
            this.mostViewedVia = '--';
            this.mostViewedOn = '--';
            this.avgLengthTime = '--';
            this.socialEgagement = '--';
        }
    };
    UserDetailsComponent.prototype.upgrade = function () {
        this._featureAuthService.setSelectedFeature('analytics', 'user_details');
        jQuery('#premiumModal').modal('show');
        jQuery('.analytics').addClass('activegreen limited-label');
        jQuery('.modal-backdrop').insertAfter('#premiumModal');
    };
    UserDetailsComponent.prototype.reInitAvgVariable = function () {
        this.mostViewedVia = '--';
        this.mostViewedOn = '--';
        this.avgLengthTime = '--';
        this.socialEgagement = '--';
        this.avgAnswered = '--';
        this.avgResult = '--';
    };
    UserDetailsComponent.prototype.intializeDatatable = function () {
        if (this.lead.toString() == 'false') {
            this.engagementInit();
        }
        else {
            this.leadInit();
        }
    };
    UserDetailsComponent.prototype.engagementInit = function () {
        var self = this;
        this.engageDataTableRef = jQuery('#engagement_Table').DataTable({
            "order": [10, "desc"],
            "processing": true,
            "destroy": true,
            "serverSide": true,
            "paging": true,
            "pageLength": 10,
            "ajax": {
                "url": __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API + "/analytic/get_engagements",
                "type": "POST",
                "data": { id: self.calc_id, start_date: this.postData.start_date, end_date: this.postData.end_date, lead: this.lead },
                "dataSrc": function (response) {
                    //self.subs.push(self.avgAnalyticsData());
                    self.loader = 1;
                    //self.visibleEmail(response.data);
                    return response.data;
                }
            },
            'sPaginationType': 'full_numbers',
            language: {
                emptyTable: '<center>No data available</center>',
                paginate: {
                    "previous": '<i class="material-icons">skip_previous</i>',
                    "first": '<i class="material-icons">keyboard_arrow_left</i>',
                    "next": '<i class="material-icons">skip_next</i>',
                    "last": '<i class="material-icons">keyboard_arrow_right</i>'
                }
            },
            columns: [
                { title: 'Location' },
                { title: 'Engagement' },
                { title: 'Questions Answered' },
                { title: (self.calc.templateType == 'Numerical') ? 'Result Obtained' : 'Outcome Obtained' },
                { title: 'Visited From' },
                { title: 'Visited On' },
                { title: 'Length of Visit' },
                { title: 'Source' },
                { title: 'Redo Count' },
                { title: '' },
                { title: 'Date' }
            ]
        });
        // this.engageDataTableRef.column(4).visible(false);
        // this.engageDataTableRef.column(5).visible(false);
        this.engageDataTableRef.column(6).visible(false);
        // this.engageDataTableRef.column(7).visible(false);
        // this.engageDataTableRef.column(8).visible(false);
        // this.engageDataTableRef.column(9).visible(false);
        this.engageDataTableRef.column(10).visible(false);
        this.engageDataTableRef.column(4).visible(false);
        if (this.lead.toString() == 'false') {
        }
        else {
            this.engageDataTableRef.column(2).visible(false);
        }
        // for ajax call
        this.engageDataTableRef.draw();
    };
    UserDetailsComponent.prototype.leadInit = function () {
        var self = this;
        this.leadDataTableRef = jQuery('#lead_Table').DataTable({
            "order": [0, "desc"],
            "processing": true,
            "destroy": true,
            "serverSide": true,
            "paging": true,
            "pageLength": 10,
            "ajax": {
                "url": __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API + "/analytic/get_leads",
                "type": "POST",
                "data": { id: self.calc_id, start_date: this.postData.start_date, end_date: this.postData.end_date },
                "dataSrc": function (response) {
                    self.updateTitles(response.columns);
                    self.loader = 1;
                    if (response.data.length) {
                        jQuery('#lead_Table thead').removeClass('hide');
                    }
                    else {
                        jQuery('#lead_Table thead').addClass('hide');
                        if (self.load) {
                            self.load = self.lead = false;
                            jQuery(".details-dropdown").val('false').change();
                            self.intializeDatatable();
                        }
                    }
                    return response.data;
                }
            },
            'sPaginationType': 'full_numbers',
            language: {
                emptyTable: '<center>No data available</center>',
                paginate: {
                    "previous": '<i class="material-icons">skip_previous</i>',
                    "first": '<i class="material-icons">keyboard_arrow_left</i>',
                    "next": '<i class="material-icons">skip_next</i>',
                    "last": '<i class="material-icons">keyboard_arrow_right</i>'
                }
            },
            columns: [
                { title: 'Column1' },
                { title: 'Column2' },
                { title: 'Column3' },
                { title: 'Column4' },
                { title: 'Column5' },
                { title: 'Column6' },
                { title: 'Column7' },
                { title: 'Column8' },
                { title: 'Column8' },
                { title: 'Column10' },
                { title: 'Column11' },
                { title: 'Column12' },
                { title: 'Column13' },
                { title: 'Column14' },
                { title: 'Column15' }
            ]
        });
        // for ajax call
        this.leadDataTableRef.draw();
    };
    /** Update Columns Titiles */
    UserDetailsComponent.prototype.updateTitles = function (columns) {
        if (this.leadDataTableRef) {
            var index = 0;
            for (var column in columns) {
                // /** hide column with no data */
                if (columns[column] == 'NO_DATA' || columns[column] == 'Date')
                    this.leadDataTableRef.column(index).visible(false);
                /** CHanges header title */
                jQuery(this.leadDataTableRef.column(index).header()).html(columns[column]);
                index++;
            }
        }
    };
    // visibleEmail(dataSet: any[]) {
    //   for (let data in dataSet) {
    //     console.log('datasdfsdfsd', dataSet[data][1]);
    //     if (dataSet[data][1] != 'Not Provided') {
    //       this.dataTableRef.column(1).visible(true);
    //       break;
    //     }
    //   };
    // }
    UserDetailsComponent.prototype.exportToGoogleSheet = function () {
        var _this = this;
        // if (this._featureAuthService.features.analytics.spreadsheet) {
        this.disable = true;
        jQuery('.export').html('Preparing your sheet..');
        jQuery('.update').html('Updating..');
        this._calculatorAnalytics.exportToSheet({ id: this.calc_id, lead: this.lead }).subscribe(function (response) {
            _this.calc.spredsheetUrl = response;
            window.open(_this.calc.spredsheetUrl, '_blank');
            _this.disable = false;
            jQuery('.export').html('<i class="material-icons">exit_to_app</i> &nbsp;View Spreadsheet');
            jQuery('.update').html('<i class="material-icons">exit_to_app</i> &nbsp;View Spreadsheet');
        }, function (error) {
            console.log('error', error);
        });
        // } else {
        //   this._featureAuthService.setSelectedFeature('analytics','spreadsheet');
        //   jQuery('#premiumModal').modal('show');
        //   jQuery('.analytics').addClass('activegreen limited-label');
        //   jQuery('.modal-backdrop').insertAfter('#premiumModal');
        // }
    };
    UserDetailsComponent.prototype.avgAnalyticsData = function () {
        var self = this;
        return this._calculatorAnalytics.getAvgOfLeads({ id: this.calc_id, start_date: this.postData.start_date, end_date: this.postData.end_date, lead: this.lead })
            .subscribe(function (response) {
            self.avgAnswered = Math.round(response.avgAnswers);
            self.avgResult = response.avgResult ? response.avgResult.toString().replace(/<(?:.|\n)*?>|&nbsp;/gm, '').trim() : response.avgResult;
            var min = Math.floor(Number(response.avgTimeOnPage) / 60);
            var seconds = Math.round(Number(response.avgTimeOnPage) % 60);
            self.avgLengthTime = (min ? (min + ((min == 1) ? ' min ' : ' mins ')) : '') + ((seconds) ? seconds + ' s' : '');
            self.socialEgagement = response.CtaEngagementLength;
            self.conversionRate = response.conversionRate;
            self.calulateAnalyticsData(response.data);
        }, function (error) {
            console.log('Something Went Wrong in Avg leads!');
        });
    };
    UserDetailsComponent.prototype.onDateSelect = function (date) {
        this.postData.start_date = date.start_date;
        this.postData.end_date = date.end_date;
        //refresh stats
        if (this.calc_id) {
            this.leadInit();
            this.engagementInit(); //this.subs.push(this.getLeadData(this.calc_id));
        }
    };
    UserDetailsComponent.prototype.leadDropdown = function (event) {
        this.lead = event;
        this.intializeDatatable();
    };
    UserDetailsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    UserDetailsComponent.prototype.unsubscribe = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__date_range_picker_date_range_picker_component__["a" /* DateRangePickerComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__date_range_picker_date_range_picker_component__["a" /* DateRangePickerComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__date_range_picker_date_range_picker_component__["a" /* DateRangePickerComponent */]) === 'function' && _a) || Object)
    ], UserDetailsComponent.prototype, "drPicker", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], UserDetailsComponent.prototype, "calc", void 0);
    UserDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'og-user-details',
            template: __webpack_require__(958),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_feature_access_service__["a" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_feature_access_service__["a" /* FeatureAuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_cookie_service__["a" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_cookie_service__["a" /* CookieService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ChangeDetectorRef */]) === 'function' && _e) || Object])
    ], UserDetailsComponent);
    return UserDetailsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/user_details.component.js.map

/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(922);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsPopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDetailsPopupComponent = (function () {
    function UserDetailsPopupComponent(_calculatorAnalytics, cdr) {
        this._calculatorAnalytics = _calculatorAnalytics;
        this.cdr = cdr;
    }
    UserDetailsPopupComponent.prototype.ngOnInit = function () {
        //Code
    };
    UserDetailsPopupComponent.prototype.ngAfterViewInit = function () {
        //code
        jQuery(document).on('click', '.clear-set', function () {
            //Hide the menus if visible
            jQuery('.user-detail-outer').fadeOut();
        });
    };
    UserDetailsPopupComponent.prototype.ngOnChanges = function () {
        this.statsResult = undefined;
        if (this.visitorKey)
            this.getStatsInfo();
    };
    UserDetailsPopupComponent.prototype.getStatsInfo = function () {
        var _this = this;
        /* get leads of user on page */
        this._calculatorAnalytics.getStats({ key: this.visitorKey })
            .subscribe(function (response) {
            /** intialize data table */
            _this.statsResult = response;
            _this.time = moment(_this.statsResult.leads.createdAt).format("MM-DD-YYYY hh:mm A");
            var heightWindow = jQuery(window).height() - 180;
            setTimeout(function () {
                jQuery('.outer-slim').css('height', heightWindow);
            }, 500);
            jQuery(window).on("resize", function () {
                heightWindow = jQuery(window).height() - 180;
                jQuery('.outer-slim').css('height', heightWindow);
            });
            _this.cdr.detectChanges();
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], UserDetailsPopupComponent.prototype, "visitorKey", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], UserDetailsPopupComponent.prototype, "lead", void 0);
    UserDetailsPopupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'og-user-details-popup',
            template: __webpack_require__(959),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ChangeDetectorRef */]) === 'function' && _b) || Object])
    ], UserDetailsPopupComponent);
    return UserDetailsPopupComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/user_details_popup.component.js.map

/***/ }),

/***/ 954:
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family: montserratregular;\r\n}\r\n@font-face {\r\n    font-family: 'Material Icons';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(MaterialIcons-Regular.eot);\r\n    src: local('Material Icons'), local('materialIcons-Regular'), url(../assets/fonts/materialIcons-Regular.woff2) format('woff2'), url(../fonts/materialIcons-Regular.woff) format('woff'), url(../fonts/materialIcons-Regular.ttf) format('truetype')\r\n}\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n    -webkit-font-smoothing: antialiased;\r\n    text-rendering: optimizeLegibility;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-feature-settings: 'liga';\r\n            font-feature-settings: 'liga'\r\n}\r\n@font-face {\r\n    font-family: montserratregular;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\r\n}\r\n@font-face {\r\n    font-family: montserratbold;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(../assets/fonts/montserrat-bold-webfont.eot) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-bold-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-bold-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-bold-webfont.ttf) format(\"truetype\")\r\n}\r\n@font-face {\r\n    font-family: montserratsemibold;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(../assets/fonts/montserrat-semibold-webfont.eot?#iefix) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-semibold-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-semibold-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-semibold-webfont.ttf) format(\"truetype\")\r\n}\r\n@font-face {\r\n    font-family: montserratlight;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(../assets/fonts/montserrat-light-webfont.eot) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-light-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-light-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-light-webfont.ttf) format(\"truetype\")\r\n}\r\n.wrapper {\r\n    width: 100%;\r\n    float: left\r\n}\r\n.np {\r\n    padding: 0px;\r\n}\r\n.ellipsis {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.statstic-heading{\r\n    float:left;\r\n}\r\n.analytics-top-inner {\r\n    margin-top: 3%;\r\n}\r\n.analytics-top-inner h6 {\r\n    color: #c4c4c1;\r\n    font-size: 14px;\r\n    font-family: montserratregular;\r\n    padding-left: 10px;\r\n}\r\n.analytics-top-inner h4 {\r\n    color: #f56151;\r\n    font-size: 24px;\r\n    font-family: montserratregular;\r\n    text-transform: uppercase;\r\n    padding-left: 10px;\r\n}\r\n.analytics-top-inner h4 i {\r\n    color: #f87b80;\r\n    font-size: 24px;\r\n}\r\n.analytics-mid-inner {\r\n    margin-top: 10px;\r\n    text-align: right;\r\n    padding-right: 46px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n}\r\n.analytics-mid-inner .preview-outer {\r\n    position: relative;\r\n    color: #fff;\r\n    padding-left: 18px;\r\n    margin-left: 10px;\r\n}\r\n.analytics-mid-inner .preview-outer i {\r\n    font-size: 14px;\r\n    color: #999 !important;\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 2px;\r\n}\r\n.analytics-mid-inner .preview-outer:hover {\r\n    color: #ccc;\r\n}\r\n.analytics-mid-inner .active-outer {\r\n    position: relative;\r\n    color: #fff;\r\n    padding-left: 18px;\r\n    margin-left: 10px;\r\n}\r\n.analytics-mid-inner .active-outer i {\r\n    font-size: 14px;\r\n    color: #1fde2d;\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 2px;\r\n}\r\n.analytics-left-side {\r\n    position: absolute !important;\r\n    top: 0 !important;\r\n    height: 100%;\r\n    background: #fff;\r\n}\r\n.analytics-mt0 {\r\n    margin-top: 0 !important;\r\n}\r\n.user-detail-outr {\r\n    padding: 30px;\r\n}\r\n.traffic-outr {\r\n    padding: 0 30px;\r\n}\r\n.analytics-mt20 {\r\n    margin-top: 20px !important;\r\n}\r\n.analytics-box-outer {\r\n    float: left;\r\n    border: 1px solid #dae2e6;\r\n    padding: 10px;\r\n    /*margin-left: 4.16%;*/\r\n    margin-left: 2%;\r\n    width: 15%;\r\n    background: #fff;\r\n    min-height: 61px;\r\n}\r\n.analytics-box-outer:first-child {\r\n    float: left;\r\n    border: 1px solid #dae2e6;\r\n    padding: 10px;\r\n    margin-left: 0px;\r\n    background: #fff;\r\n}\r\n.analytics-box-outer h6 {\r\n    float: left;\r\n    font-size: 10px;\r\n    color: #8c9194;\r\n    font-family: montserratregular !important;\r\n    padding-left: 18px;\r\n    position: relative;\r\n    margin-top: 0;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n    text-transform: uppercase;\r\n}\r\n.analytics-box-outer h6 i {\r\n    font-size: 14px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: -2px;\r\n    color: #23a0d6;\r\n}\r\n.analytics-box-outer h4 {\r\n    float: left;\r\n    font-size: 18px;\r\n    color: #62696d;\r\n    font-family: montserratregular !important;\r\n    position: relative;\r\n    margin-top: 4px;\r\n    margin-bottom: 0px;\r\n    width: 100%;\r\n}\r\n.dp-outer {\r\n    position: relative;\r\n    width: 205px;\r\n    float: right;\r\n    z-index: 0;\r\n    margin-right: 30px;\r\n}\r\n.datepicker-outer {\r\n    border: 2px solid #fb545b;\r\n    width: 100%;\r\n    padding: 4px 10px 4px 28px;\r\n    float: right;\r\n    color: #636f76;\r\n    z-index: 9;\r\n    background: none;\r\n    cursor: pointer;\r\n    font-size: 13px;\r\n}\r\n.datepicker-outer:focus {\r\n    outline: none !important;\r\n}\r\n.datepicker-outer.datepicker {\r\n    padding: 4px 10px 4px 30px !important;\r\n}\r\n.dp-outer .icon-left {\r\n    position: absolute;\r\n    font-size: 14px;\r\n    top: 8px;\r\n    z-index: -1;\r\n    left: 9px;\r\n    color: #bec5c9;\r\n}\r\n.dp-outer .icon-right {\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 9px;\r\n    font-size: 16px;\r\n    z-index: -1;\r\n    color: #bec5c9;\r\n}\r\n.details-heading {\r\n    font-size: 24px;\r\n    font-family: montserratlight;\r\n    color: #636f76;\r\n    width: auto;\r\n    float: left;\r\n    margin-left: 30px;\r\n    line-height: 1;\r\n}\r\n.details-box-outer:first-child {\r\n    margin-left: 0px;\r\n}\r\n#person .details-box-outer {\r\n       width: 17%;\r\n    margin-left: 3.75%;\r\n}\r\n#person .details-box-outer:first-child {\r\n    margin-left: 0;\r\n}\r\n.details-box-outer {\r\n    float: left;\r\n    border: 1px solid #dae2e6;\r\n    padding: 15px 7px;\r\n    position: relative;\r\n    background: #fff;\r\n    margin-left: 4.16%;\r\n    /*width: 14%;\r\n    margin-left: 3.2%;*/\r\n}\r\n.details-box-outer:last-child {\r\n}\r\n.details-mt20 {\r\n    margin-top: 20px;\r\n    padding: 0px 30px;\r\n}\r\n.details-mt40 {\r\n    margin-top: 20px;\r\n    padding: 0px 30px;\r\n}\r\n.details-box-outer h4 {\r\n    margin: 0;\r\n    font-size: 18px;\r\n    padding-left: 30px;\r\n    float: left;\r\n    width: 100%;\r\n    font-family: montserratregular;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.details-box-outer h4 i {\r\n    position: absolute;\r\n    left: 7px;\r\n    font-size: 21px;\r\n    color: #269fd8;\r\n}\r\n.details-box-outer h6 {\r\n    margin: 0;\r\n    font-size: 10px;\r\n    color: #8c9194;\r\n    float: left;\r\n    font-family: montserratregular;\r\n    text-transform: uppercase;\r\n    margin-top: 5px;\r\n    margin-left: 30px;\r\n}\r\n.details-box-outer h4:hover > .range-checktip {\r\n    visibility: visible;\r\n    z-index: 999;\r\n}\r\n.details-box-outer h4 .range-tip {\r\n    margin: 1px 7px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    position: relative;\r\n    margin: 0px;\r\n    cursor: default;\r\n}\r\n.details-box-outer h4 .range-tip i {\r\n    color: #8e989f;\r\n    font-size: 13px;\r\n    line-height: 17px;\r\n    cursor: pointer;\r\n    opacity: 0.8;\r\n}\r\n.details-box-outer h4 .range-tip:hover i {\r\n    color: #f87b80;\r\n}\r\n.range-tip:hover > .range-checktip {\r\n    visibility: visible;\r\n    z-index: 999;\r\n}\r\n.details-box-outer h4 .range-checktip {\r\n    float: left;\r\n    background-color: #61696C;\r\n    color: #fff;\r\n    padding: 5px;\r\n    width: 180px;\r\n    font-size: 11px;\r\n    position: absolute;\r\n    top: -19px;\r\n    border-radius: 0px;\r\n    visibility: hidden;\r\n    box-shadow: 0 3px 7px 0px #919191;\r\n    text-align: center;\r\n    left: 35px;\r\n    line-height: 1.42857143;\r\n    text-transform: none;\r\n}\r\n.details-box-outer h4 .range-checktip:before {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: -40%;\r\n    left: 50%;\r\n    margin-left: -8px;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-top: 6px solid #61696C;\r\n    border-left: 6px solid transparent;\r\n    border-right: 6px solid transparent;\r\n}\r\n.tab-pane {\r\n    /*background: #fff;\r\n    padding: 10px;\r\n    border: 1px solid #ddd;\r\n    margin-top: -1px*/\r\n}\r\n.tabs-wrapper .tab-pane {\r\n    background: 0 0;\r\n    padding: 0;\r\n    border: none;\r\n    margin-top: -1px;\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n.details-table-outer {\r\n    float: left;\r\n    margin-top: 30px;\r\n    width: 100%;\r\n    padding: 0px 30px;\r\n}\r\n.details-table-outer table {\r\n    margin-bottom: 15px;\r\n}\r\n.details-table-outer table tr th {\r\n    font-size: 10px;\r\n    color: #6c7377;\r\n    font-family: montserratregular;\r\n    text-transform: uppercase;\r\n    font-weight: normal;\r\n    text-align: left;\r\n    border-top: 2px solid #ddd !important;\r\n    padding: 10px 15px;\r\n    width: auto !important;\r\n}\r\n.details-table-outer table thead tr:hover {\r\n    background: none !important;\r\n}\r\n.details-table-outer table thead select {\r\n    padding: 0;\r\n    border: none;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    outline: none;\r\n    color: #fb5f66;\r\n    border: 1px solid #ccc;\r\n    padding: 5px;\r\n}\r\n.details-table-outer table tr.blue-border {\r\n    border-bottom: 2px solid #269fd8\r\n}\r\n.details-table-outer table tr:hover {\r\n    background: #f8fafa;\r\n}\r\n.details-table-outer table tr td {\r\n    border-bottom: 1px solid #dae2e6;\r\n}\r\n.details-table-outer table tr td {\r\n    color: #62696d;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    font-family: montserratregular;\r\n    text-align: left;\r\n    padding: 10px 15px;\r\n\r\n}\r\n.details-table-outer table tr td:only-child {\r\n    color: #bec5c9;\r\n    background: #fff;\r\n}\r\n.details-table-outer table tr td.link {\r\n    color: #fb545b;\r\n    font-size: 13px;\r\n    font-weight: normal;\r\n    font-family: montserratregular;\r\n    text-align: left;\r\n}\r\n.details-table-outer table tr.date-outer td {\r\n    border-bottom: 1px solid #fff;\r\n    color: #269fd8;\r\n    font-family: montserratlight;\r\n    font-size: 16px;\r\n    border-top: 2px solid #269fd8\r\n}\r\n.details-table-outer table tr.date-outer:hover {\r\n    background: none;\r\n}\r\n.details-table-outer table tr td:last-child a {\r\n    color: #fb545b;\r\n    font-size: 11px;\r\n    cursor: pointer;\r\n}\r\n.details-table-outer .pagination li a {\r\n    border: none;\r\n    color: #fb5f66;\r\n}\r\n.details-table-outer .pagination li a:hover {\r\n    color: #62696d;\r\n    background: none;\r\n}\r\n.details-table-outer .pagination li a:focus {\r\n    color: #62696d;\r\n    background: none;\r\n}\r\n.details-table-outer .dataTables_paginate {\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.traffic-graph-outer {\r\n    border: 1px solid #dae2e6;\r\n    padding: 20px;\r\n    float: left;\r\n    width: 100%;\r\n    min-height: 225px;\r\n    position: relative;\r\n    margin-top: 30px;\r\n}\r\n.traffic-graph-outer h4 {\r\n    font-family: montserratlight !important;\r\n    font-size: 18px;\r\n    float: left;\r\n    width: 100%;\r\n    margin-top: 0;\r\n    color: #62696d;\r\n}\r\n.traffic-graph-outer h6 {\r\n    color: #8c9194;\r\n    font-size: 11px;\r\n    font-family: montserratregular;\r\n    float: left;\r\n    text-transform: uppercase;\r\n    width: 100%;\r\n    margin-bottom: 5px;\r\n}\r\n.traffic-graph-outer h6 span.red {\r\n    float: left;\r\n    background: #fb545b;\r\n    border-radius: 25px;\r\n    height: 11px;\r\n    width: 11px;\r\n    margin-right: 10px;\r\n}\r\n.traffic-graph-outer h6 span.green {\r\n    float: left;\r\n    background: #50d650;\r\n    border-radius: 25px;\r\n    height: 11px;\r\n    width: 11px;\r\n    margin-right: 10px;\r\n}\r\n.traffic-graph-outer h6 span.sky {\r\n    float: left;\r\n    background: #69d2e7;\r\n    border-radius: 25px;\r\n    height: 11px;\r\n    width: 11px;\r\n    margin-right: 10px;\r\n}\r\n.traffic-graph-outer h6 span.orange {\r\n    float: left;\r\n    background: #f38630;\r\n    border-radius: 25px;\r\n    height: 11px;\r\n    width: 11px;\r\n    margin-right: 10px;\r\n}\r\n.traffic-graph-outer h6 span.ex-light-green {\r\n    float: left;\r\n    background: #e0e4cc;\r\n    border-radius: 25px;\r\n    height: 11px;\r\n    width: 11px;\r\n    margin-right: 10px;\r\n}\r\n.chart-position {\r\n    position: absolute;\r\n    position: absolute;\r\n    top: -70px;\r\n    left: -20px;\r\n}\r\n.traffic-graph-height {\r\n    min-height: 225px !important;\r\n}\r\n\r\n/*date rangepicker css*/\r\n.daterangepicker.dropdown-menu {\r\n    right: 28px !important;\r\n    width: 492px !important;\r\n}\r\n.daterangepicker.opensright:before {\r\n    right: 40px !important;\r\n}\r\n.daterangepicker.opensright:after {\r\n    right: 41px !important;\r\n}\r\n.daterangepicker .ranges {\r\n    margin: 4px;\r\n    text-align: right !important;\r\n    width: 98%;\r\n}\r\n.btn-danger {\r\n    margin-right: 5px;\r\n}\r\n\r\n/*date rangepicker end css*/\r\n\r\n/*data table css*/\r\n.dataTables_length {\r\n    display: none;\r\n}\r\n.dataTables_filter {\r\n    display: none;\r\n}\r\n.dataTables_info {\r\n    display: none;\r\n}\r\n.first, .last {\r\n    display: none;\r\n}\r\n.dataTables_paginate {\r\n    text-align: center;\r\n}\r\n.dataTables_paginate a {\r\n    margin: 10px;\r\n    color: #fb5f66;\r\n    cursor: pointer;\r\n}\r\n.dataTables_paginate a:focus {\r\n    color: #62696d;\r\n    background: none;\r\n}\r\n\r\n/*data table css end*/\r\n.user-detail-outer {\r\n    position: fixed;\r\n    width: 325px;\r\n    background: #fff;\r\n    z-index: 9999;\r\n    right: 0;\r\n    top: 0;\r\n    height: 100vh;\r\n    box-shadow: -6px 3px 20px -6px rgba(0, 0, 0, 0.75);\r\n    display: none;\r\n}\r\n.user-detail-outer .top-section {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 25px;\r\n    border-bottom: 2px solid #dae2e6;\r\n    position: relative;\r\n}\r\n.user-detail-outer .top-section .name-circle {\r\n    float: left;\r\n    width: 35px;\r\n    height: 35px;\r\n    background: #fb5f66;\r\n    border-radius: 25px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    font-family: montserratregular;\r\n    color: #fff;\r\n    padding-top: 9px;\r\n}\r\n.user-detail-outer .top-section .detail-section {\r\n    float: left;\r\n    width: 80%;\r\n    margin-left: 10px;\r\n}\r\n.user-detail-outer .top-section .detail-section h4 {\r\n    float: left;\r\n    width: 100%;\r\n    font-size: 16px;\r\n    margin-bottom: 0;\r\n}\r\n.user-detail-outer .top-section .detail-section h6 {\r\n    float: left;\r\n    width: 100%;\r\n    font-size: 11px;\r\n    font-family: montserratregular;\r\n    color: #8e989f;\r\n    margin-bottom: 0;\r\n    position: relative;\r\n    padding-left: 20px;\r\n}\r\n.user-detail-outer .top-section .detail-section h6 i {\r\n    position: absolute;\r\n    top: 0;\r\n    font-size: 14px;\r\n    left: 0;\r\n    color: #bec5c9;\r\n}\r\n.user-detail-outer .mid-section {\r\n    float: left;\r\n    width: 100%;\r\n    /*padding: 25px;*/\r\n    padding-right: 0px;\r\n}\r\n.user-detail-outer .mid-section .outer-slim {\r\n    padding: 25px; padding-right: 10px; overflow-y: auto;\r\n}\r\n.outer-slim::-webkit-scrollbar-track {\r\n    border-radius: 0;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.outer-slim::-webkit-scrollbar {\r\n    width: 6px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.outer-slim::-webkit-scrollbar:horizontal {\r\n    height: 6px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.outer-slim::-webkit-scrollbar-thumb {\r\n    border-radius: 4px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.user-detail-outer .mid-section .que-outer {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.user-detail-outer .mid-section .que-icon-outer {\r\n    float: left;\r\n    width: 35px;\r\n    color: #bec5c9;\r\n}\r\n.user-detail-outer .mid-section .que-icon-outer i {\r\n    font-size: 30px;\r\n}\r\n.user-detail-outer .mid-section .que-section {\r\n    float: left;\r\n    width: 86%;\r\n    margin-bottom: 10px;\r\n}\r\n.user-detail-outer .mid-section .que-section h6 {\r\n    float: left;\r\n    font-size: 12px;\r\n    font-family: montserratlight !important;\r\n    width: 100%;\r\n    margin-top: 0;\r\n    line-height: 16px;\r\n    margin-bottom: 7px;\r\n}\r\n.user-detail-outer .mid-section .que-section h6 p{margin: 0;}\r\n.user-detail-outer .mid-section .que-section h6 p strong {font-weight: normal;}\r\n.user-detail-outer .mid-section .que-section h6.ans {\r\n    float: left;\r\n    font-size: 12px;\r\n    font-family: montserratregular !important;\r\n    width: 100%;\r\n    margin-top: 0;\r\n    line-height: 16px;\r\n    color: #62696d;\r\n}\r\n\r\n/* .user-detail-outer .mid-section .slimScrollDiv{height: 600px !important;}\r\n.user-detail-outer .mid-section .outer-slim{height: 600px !important;} */\r\n.user-detail-outer .mid-section .outer-slim .bh {\r\n    float: left;\r\n        padding-right: 10px;\r\n}\r\n.user-detail-outer .clear-set {\r\n    position: absolute;\r\n    top: 10px;\r\n    cursor: pointer;\r\n    right: 7px;\r\n}\r\n.graph-val {\r\n    color: #8c9194;\r\n    font-size: 11px;\r\n    font-family: montserratregular;\r\n    float: left;\r\n    text-transform: uppercase;\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n    margin-left: 30px;\r\n}\r\n.graph-val span.red {\r\n    float: left;\r\n    background: #fb545b;\r\n    border-radius: 25px;\r\n    height: 11px;\r\n    width: 11px;\r\n    margin-right: 10px;\r\n    margin-top: 2px;\r\n}\r\n.graph-val span.blue {\r\n    float: left;\r\n    background: #269fd8;\r\n    border-radius: 25px;\r\n    height: 11px;\r\n    width: 11px;\r\n    margin-right: 10px;\r\n    margin-top: 2px;\r\n}\r\n.morris-hover {\r\n    position: absolute;\r\n    z-index: 1000\r\n}\r\n.morris-hover.morris-default-style {\r\n    border-radius: 10px;\r\n    padding: 6px;\r\n    color: #666;\r\n    background: rgba(255, 255, 255, 0.8);\r\n    border: solid 2px rgba(230, 230, 230, 0.8);\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    text-align: center\r\n}\r\n.morris-hover.morris-default-style .morris-hover-row-label {\r\n    font-weight: bold;\r\n    margin: 0.25em 0\r\n}\r\n.morris-hover.morris-default-style .morris-hover-point {\r\n    white-space: nowrap;\r\n    margin: 0.1em 0\r\n}\r\n.analytics-top-outer .company-dropdown-wrapper .dropdown-menu {\r\n    z-index: 999 !important;\r\n    min-width: 260px;\r\n}\r\n\r\n/*loader css*/\r\n.dark-loader-outer {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 30px;\r\n    text-align: center;\r\n}\r\n.traffic1 {\r\n    background: url(/assets/images/analytics/traffic1.jpg)no-repeat !important;\r\n    background-color: #fff;\r\n    background-position: center center;\r\n    display: table;\r\n    height: 223px !important;\r\n}\r\n.traffic1 p {\r\n    color: #269fd8;\r\n    font-style: italic;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.traffic2 {\r\n    background: url(/assets/images/analytics//traffic2.jpg)no-repeat !important;\r\n    background-color: #fff;\r\n    background-position: center center;\r\n    display: table;\r\n    height: 223px !important;\r\n}\r\n.traffic2 p {\r\n    color: #269fd8;\r\n    font-style: italic;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.traffic3 {\r\n    background: url(/assets/images/analytics/traffic3.jpg)no-repeat !important;\r\n    background-color: #fff;\r\n    background-position: center center;\r\n    display: table;\r\n    height: 223px !important;\r\n}\r\n.traffic3 p {\r\n    color: #269fd8;\r\n    font-style: italic;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.traffic4 {\r\n    background: url(/assets/images/analytics/traffic4.jpg)no-repeat !important;\r\n    background-color: #fff;\r\n    background-position: center center;\r\n    display: table;\r\n    height: 223px !important;\r\n}\r\n.traffic4 p {\r\n    color: #269fd8;\r\n    font-style: italic;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.light-loader-outer {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 30px;\r\n    text-align: center;\r\n    opacity: 0.9;\r\n}\r\n.loader {\r\n    border: 5px solid #f3f3f3;\r\n    border-radius: 50%;\r\n    border-top: 5px solid #fb545b;\r\n    width: 50px;\r\n    height: 50px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n    animation: spin 2s linear infinite;\r\n    position: absolute;\r\n    left: 44%;\r\n    top: 39%;\r\n}\r\n@-webkit-keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n@keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n.light-loader-outer .icon-link i {\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    color: #bec5c9;\r\n}\r\n\r\n/* Preloader */\r\n.preloader {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #fff;    /* change if the mask should be a color other than white */\r\n    z-index: 9999;    /* makes sure it stays on top */\r\n}\r\n.status {\r\n    width: 200px;\r\n    height: 200px;\r\n    position: absolute;\r\n    left: 50%;    /* centers the loading animation horizontally on the screen */\r\n    top: 50%;    /* centers the loading animation vertically on the screen */\r\n    background-image: url(\"assets/images/loaders/logoAnim.gif\");    /* path to your loading animation */\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    margin: -100px 0 0 -100px;    /* is width and height divided by two */\r\n}\r\n.wrapper-content.pb30 {\r\n    padding-bottom: 30px;\r\n}\r\n.chart-position {\r\n    position: absolute;\r\n    top: -20px;\r\n    left: -329px;\r\n}\r\n.traffic-graph-outer {\r\n    background: #fff;\r\n    min-height: 270px;\r\n    overflow: hidden !important;\r\n}\r\n\r\n/*Analytic bropdown setting*/\r\n.analytics-top-inner h4 .company-dropdown-wrapper {\r\n    position: relative;\r\n}\r\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu {\r\n    position: absolute;\r\n    left: -14px;\r\n}\r\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu:before {\r\n    right: 227px;\r\n}\r\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu .company-dropdown-main {\r\n    width: 260px;\r\n    float: left;\r\n}\r\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu .company-dropdown-list > li > a .company-title {\r\n    width: 100%;\r\n}\r\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list >li > a .company-block-inner {\r\n    top: 7px;\r\n}\r\n\r\n/*Analytic bropdown setting end*/\r\n.light-loader-outer-new {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0px;\r\n    padding: 130px;\r\n    text-align: center;\r\n    opacity: 0.9;\r\n    margin-top: 20px;\r\n    display: table;\r\n}\r\n.light-loader-outer-new .light-loader-inner-new div {\r\n    display: table-cell;\r\n    float: none;\r\n    vertical-align: middle;\r\n    position: absolute;\r\n    background: none;\r\n    left: 45%;\r\n}\r\n.analytics-bottom-dummy {\r\n    float: left;\r\n    width: 100%;\r\n    background: url('/assets/images/analytics/analytics_noCalc.jpg')no-repeat;\r\n    min-height: 67vh;\r\n    background-size: cover;\r\n    position: fixed;\r\n    bottom: 0;\r\n    top: 250px;\r\n}\r\n.analytics-bottom-popup {\r\n    background: #fb6066;\r\n    width: 45%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    margin-top: 85px;\r\n    min-height: 150px;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 25px;\r\n    font-family: montserratlight;\r\n    font-size: 16px;\r\n    box-shadow: 13px 13px 10px rgba(0, 0, 0, 0.20);\r\n    z-index: 1;\r\n}\r\n.user-margin {\r\n    margin-top: -75px;\r\n}\r\n.traffic-margin {\r\n    margin-top: 15px;\r\n}\r\n.no-analytics-overlay {\r\n    position: fixed;\r\n    top: 40px;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1010;\r\n    margin-top: 56px;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    margin-left: 235px;\r\n}\r\n.header-added .no-analytics-overlay{\r\n    top: 74px;\r\n}\r\n.no-analytics-overlay img {\r\n    width: 100%;\r\n}\r\n.analytics-bottom-popup i {\r\n    display: inherit;\r\n    margin-bottom: 15px;\r\n}\r\n.analytics-bottom-popup a {\r\n    color: #fff;\r\n    text-decoration: underline;\r\n}\r\n.analytics-overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n    margin-top: 0px;\r\n    background: rgba(255, 255, 255, 0.99);\r\n    filter: alpha(opacity=50);\r\n    opacity: .5;\r\n}\r\n#person .dataTables_paginate.paging_full_numbers span {\r\n    position: relative;\r\n    top: -7px;\r\n}\r\n#person .dataTables_wrapper .dataTables_paginate .paginate_button {\r\n    padding: 0 3px;\r\n    margin: 0;\r\n    color: #fb545b !important;\r\n    background: none;\r\n    border: none;\r\n}\r\n#person .dataTables_wrapper .dataTables_paginate .paginate_button i {\r\n    font-size: 24px;\r\n    float: none;\r\n}\r\n#person .dataTables_wrapper .dataTables_paginate .paginate_button {\r\n    padding: 0 3px;\r\n    margin: 0;\r\n    color: #fb545b !important;\r\n    background: none;\r\n    border: none;\r\n}\r\n#person .dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {\r\n    background: none;\r\n    border: none;\r\n    margin: 0;\r\n    padding: 0 3px;\r\n    color: #333 !important;\r\n}\r\n#person .dataTables_wrapper .dataTables_paginate .paginate_button:hover {\r\n    background: none;\r\n    border: none;\r\n    color: #333 !important;\r\n    margin: 0;\r\n    padding: 0 3px;\r\n}\r\n#person .dataTables_wrapper .dataTables_paginate .paginate_button.disabled, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {\r\n    color: #bec5c9 !important;\r\n}\r\n\r\n/* analytics resposnive */\r\n.loading:after {\r\n    content: ' .';\r\n    -webkit-animation: dots 1s steps(5, end) infinite;\r\n            animation: dots 1s steps(5, end) infinite;\r\n    font-size: 18px;\r\n    line-height: 1px;\r\n    position: relative;\r\n    left: -3px;\r\n}\r\n@-webkit-keyframes dots {\r\n    0%, 20% {\r\n        color: rgba(0, 0, 0, 0);\r\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    40% {\r\n        color: white;\r\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    60% {\r\n        text-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    80%, 100% {\r\n        text-shadow: .25em 0 0 white, .5em 0 0 white;\r\n    }\r\n}\r\n@keyframes dots {\r\n    0%, 20% {\r\n        color: rgba(0, 0, 0, 0);\r\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    40% {\r\n        color: white;\r\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    60% {\r\n        text-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    80%, 100% {\r\n        text-shadow: .25em 0 0 white, .5em 0 0 white;\r\n    }\r\n}\r\n.leadlimit-alert {\r\n    padding-left: 15px;\r\n    width: 100%;\r\n    text-align: center;\r\n    display: inline-block;\r\n}\r\n.leadlimit-alert a {\r\n    color: #f00;\r\n}\r\n.company-dropdown-list.scrollbar {\r\n    height: 170px;\r\n}\r\n.scrollbar {\r\n    overflow-y: scroll;\r\n}\r\n.scrollbar::-webkit-scrollbar-track {\r\n    border-radius: 0px;\r\n    background-color: #f5f5f5;\r\n}\r\n.scrollbar::-webkit-scrollbar {\r\n    width: 6px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.scrollbar::-webkit-scrollbar:horizontal {\r\n    height: 6px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.scrollbar::-webkit-scrollbar-thumb {\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(245, 245, 248, .8);\r\n    background-color: #aaa;\r\n}\r\n.company-dropdown-wrapper:hover .btn.dropdown-toggle i, .team-settings-wrapper .company-dropdown-wrapper i.material-icons:focus, .team-settings-wrapper .company-dropdown-wrapper i.material-icons:hover {\r\n    color: #f87b80\r\n}\r\n.company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n    padding: 0;\r\n    font-size: 12px;\r\n    text-transform: none;\r\n    color: #62696d;\r\n    font-family: montserratlight;\r\n    line-height: 20px;\r\n    border: none;\r\n    background: 0 0\r\n}\r\n.company-dropdown-wrapper button.btn.btn-default.dropdown-toggle:focus, .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle:hover {\r\n    background: 0 0 !important;\r\n    box-shadow: none !important;\r\n    border: 0 !important\r\n}\r\n.company-dropdown-wrapper .dropdown-menu {\r\n    padding: 10px 0;\r\n    top: 30px;\r\n    left: 16px;\r\n    min-width: 190px;\r\n    font-size: 12px;\r\n    background: #62696d;\r\n    border-radius: 4px !important;\r\n    border: none;\r\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .24);\r\n    display: none;\r\n    z-index: 9\r\n}\r\n.company-dropdown-wrapper:hover .dropdown-menu {\r\n    display: block\r\n}\r\n.company-dropdown-wrapper .dropdown-menu:before {\r\n    position: absolute;\r\n    top: -12px;\r\n    right: 85px;\r\n    display: inline-block;\r\n    border-right: 8px solid transparent;\r\n    border-bottom: 12px solid #62696d;\r\n    border-left: 8px solid transparent;\r\n    border-bottom-color: #62696d;\r\n    content: ''\r\n}\r\n.company-dropdown-wrapper .dropdown-menu>li>a:hover {\r\n    color: #fff;\r\n    background: #62696d\r\n}\r\n.company-dropdown-wrapper .dropdown-menu>li>a:focus {\r\n    color: #fff;\r\n    background: 0 0\r\n}\r\n.company-dropdown-wrapper .dropdown-menu>li>a:focus i.material-icons, .company-dropdown-wrapper .dropdown-menu>li>a:hover i.material-icons {\r\n    color: #fff\r\n}\r\n.company-dropdown-wrapper .dropdown-menu>li>a.add-new-company {\r\n    color: #fff;\r\n    padding: 10px 15px;\r\n    text-transform: capitalize;\r\n    font-family: montserratregular;\r\n    float: left;\r\n    width: 100%\r\n}\r\n.company-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    padding: 0\r\n}\r\n.company-dropdown-main {\r\n    width: 190px\r\n}\r\n.company-dropdown-wrapper .company-dropdown-list.slimscroll, .company-dropdown-wrapper .slimScrollDiv {\r\n    float: left;\r\n    width: 100% !important;\r\n    height: 155px !important\r\n}\r\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a {\r\n    color: #fff;\r\n    padding: 10px 15px;\r\n    text-transform: capitalize;\r\n    font-family: montserratregular;\r\n    float: left;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a i.material-icons {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    padding: 0\r\n}\r\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-block {\r\n    float: left;\r\n    width: 10%\r\n}\r\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-block-inner {\r\n    background: #fff;\r\n    border-radius: 50px;\r\n    width: 20px;\r\n    height: 20px;\r\n    position: absolute;\r\n    color: #62696d;\r\n    text-align: center;\r\n    padding-top: 4px;\r\n    font-size: 11px;\r\n    top: 7px\r\n}\r\n.company-block-content {\r\n    float: left;\r\n    width: 80%;\r\n    margin-left: 30px\r\n}\r\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-title {\r\n    float: left;\r\n    width: 95%\r\n}\r\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-site {\r\n    float: left;\r\n    width: 95%;\r\n    font-size: 10px\r\n}\r\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a.hvr-sweep-to-right::before, .company-dropdown-wrapper .dropdown-menu>li>a.hvr-sweep-to-right.add-new-company::before {\r\n    background: #71787b\r\n}\r\n.select-style{\r\n    outline: none;\r\n    border: 2px solid #dae2e6;\r\n    padding: 5px 10px 5px 5px;\r\n    color: #636f76;\r\n    background: none;\r\n    cursor: pointer;\r\n    font-size: 12px;\r\n    width: 100px;\r\n    -webkit-appearance: none;\r\n    background-image: url(../../assets/images/icon-arrow-down.png);\r\n    float: right;\r\n    font-family: montserratlight;\r\n    background-position: 96% -1px;\r\n    background-size: 9px 15px;\r\n    border-radius: 0px;\r\n    background-repeat: no-repeat;\r\n    margin-left: 15px;\r\n}\r\n.select-span{\r\n    float: right;\r\n    background: #dae2e6;\r\n    display: block;\r\n    height: 31px;\r\n    width: 1px;\r\n    margin-right: 11px;\r\n}\r\n.tabs-outer {\r\n    float: right;\r\n    margin-right: 0px;\r\n    width: 185px;\r\n    margin-left: 15px;\r\n    font-family: montserratregular;\r\n    cursor: pointer;\r\n}\r\n.tabs-outer ul{\r\n    border: 1px solid #ccc !important;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    float: left;\r\n}\r\n.tabs-outer ul li.active a{\r\n    border:2px solid #dae2e6 !important;\r\n    color:#fb545b;\r\n}\r\n.tabs-outer .nav-tabs.nav-justified>li:nth-child(1)>a {\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    border-right: 1px solid #ccc!important;\r\n}\r\n.tabs-outer .nav-tabs.nav-justified>li.active>a {\r\n    cursor: pointer;\r\n    color: #fb545b;\r\n}\r\n.tabs-outer .nav-tabs.nav-justified>li>a {\r\n    color: #8e989f;\r\n    font-size: 10px;\r\n    text-transform: uppercase;\r\n    border: none!important;    \r\n    border-radius: 0;\r\n    background: 0 0;\r\n    padding: 4px 0;\r\n    line-height: 16px;\r\n}\r\n.tabs-outer .nav-tabs.nav-justified>li:hover {\r\n    background: #dae2e6;\r\n}\r\n.btn-main-outer{\r\n    float: right;\r\n}\r\n.btn-outer {\r\n    float: left;\r\n    margin-right: 0px;\r\n    width: auto;\r\n}\r\n.btn-outer button {\r\n    border: 2px solid #dae2e6;\r\n    padding: 4px 10px 4px 10px;\r\n    color: #636f76;\r\n    background: none;\r\n    cursor: pointer;\r\n    font-size: 12px;\r\n    margin-right: 15px;\r\n    float: right;\r\n    font-family: montserratlight;\r\n}\r\n.btn-outer button:hover {\r\n    background: #dae2e6;\r\n}\r\n.btn-outer button p {\r\n    margin: 0px;\r\n}\r\n.btn-outer button p i {\r\n    font-size: 14px;\r\n    color: #636f76;\r\n    position: relative;\r\n    top: 2px;\r\n}\r\n.btn-outer a {\r\n    border: 2px solid #dae2e6;\r\n    padding: 4px 10px 4px 10px;\r\n    color: #636f76;\r\n    background: none;\r\n    cursor: pointer;\r\n    font-size: 12px;\r\n    margin-right: 15px;\r\n    float: right;\r\n}\r\n.btn-outer a:hover {\r\n    background: #fb545b;\r\n    color: #fff;\r\n}\r\n.btn-outer a:hover i {\r\n    background: #fb545b;\r\n    color: #fff;\r\n}\r\n.btn-outer a i {\r\n    font-size: 14px;\r\n    color: #636f76;\r\n    position: relative;\r\n    top: 2px;\r\n}\r\n.export i.material-icons {\r\n    position: relative;\r\n    font-size: 14px;\r\n    top: 3px;\r\n    left: 0;\r\n    color: #bec5c9;\r\n}\r\n.export i.lock-icon.material-icons {\r\n    color: #e97252 !important;\r\n    font-size: 14px;\r\n    top: 2px;\r\n}\r\n/* analytics */\r\n.left-sidebar {\r\n    left: 0;\r\n    top: 60px;\r\n    bottom: 0;\r\n    height: 100vh;\r\n    width: 255px;\r\n    z-index: 1;\r\n    padding-top: 15px;\r\n    box-shadow: 0 0 9px 1px rgba(0, 0, 0, .1);\r\n    border-right: 1px solid #d7dbdd\r\n}\r\n.left-sidebar ul {\r\n    padding: 0;\r\n    margin: 0\r\n}\r\n.wrapper .left-sidebar ul li {\r\n    list-style: none;\r\n    float: left;\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    padding: 0px 15px;\r\n}\r\n.left-sidebar ul li a {\r\n    font-size: 12px;\r\n    color: #8e989f;\r\n    line-height: 14px;\r\n    float: left;\r\n    width: 100%\r\n}\r\n.left-sidebar ul li a h6 {\r\n    font-size: 12px;\r\n    color: #62696d;\r\n    font-family: montserratregular;\r\n    text-transform: uppercase;\r\n    margin: 0 0 6px\r\n}\r\n.left-sidebar ul li a .left-sidebar-icon i.material-icons {\r\n    color: #bec5c9;\r\n    margin-top: -2px;\r\n    font-size: 24px;\r\n}\r\n.left-sidebar ul li a .left-sidebar-icon {\r\n    float: left;\r\n    width: auto\r\n}\r\n.left-sidebar ul li a .left-sidebar-icon.noti-icon i.material-icons {\r\n    font-size: 22px\r\n}\r\n.left-sidebar ul li a .left-sidebar-title {\r\n    float: left;\r\n    width: 81%;\r\n    margin-left: 17px\r\n}\r\n.left-sidebar ul li.active a .left-sidebar-icon i.material-icons, .left-sidebar ul li.active a .left-sidebar-title h6, .left-sidebar ul li:hover a .left-sidebar-icon i.material-icons, .left-sidebar ul li:hover a .left-sidebar-title h6 {\r\n    color: #fb545b;\r\n    -webkit-transition: all .3s ease 0s !important;\r\n    transition: all .3s ease 0s !important\r\n}\r\n.left-sidebar .tabs-left, .tabs-wrapper .tab-sub-content {\r\n    float: left;\r\n    width: 100%\r\n}\r\n@media (max-width:767px) {\r\n    .settings-cookies #smScrSideNavbar.left-sidebar, .settings-cookies .membership-details-inner-tabs {\r\n        top: 50px !important\r\n    }\r\n}\r\n.settings-cookies #membership-details .membership-details-inner-tabs, .settings-cookies .left-sidebar {\r\n    top: 98px\r\n}\r\n.analytics-left-side {\r\n    position: absolute;\r\n    top: 0 !important;\r\n    height: 100%;\r\n}\r\n.analytics-top-outer {\r\n    float: left;\r\n    width: 100%;\r\n    background: url('/assets/images/analytics/analytics-img.jpg')no-repeat;\r\n    min-height: 160px; /* margin-top:72px;  */\r\n    background-size: cover;\r\n    position: relative;\r\n    z-index: 10;\r\n}\r\n.wrapper-content {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 35px 0px 30px 255px;\r\n    background: #f6f8f9;\r\n    min-height: 100vh;\r\n    height: 100%\r\n}\r\n.wrapper-content.cancelled-setting {\r\n    padding-left: 30px\r\n}\r\n.popover-wrapper .popover-block {\r\n    position: relative;\r\n    top: 18px;\r\n    left: -35px;\r\n    min-width: 100px;\r\n    padding: 8px;\r\n    font-size: 12px;\r\n    background: #62696d;\r\n    border-radius: 4px !important;\r\n    border: none;\r\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .24);\r\n    display: none;\r\n    z-index: 9\r\n}\r\n.popover-wrapper:hover .popover-block {\r\n    display: block\r\n}\r\n.popover-wrapper .popover-block:before {\r\n    position: absolute;\r\n    top: -8px;\r\n    right: 42px;\r\n    display: inline-block;\r\n    border-right: 6px solid transparent;\r\n    border-bottom: 8px solid #62696d;\r\n    border-left: 6px solid transparent;\r\n    border-bottom-color: #62696d;\r\n    content: ''\r\n}\r\n.billing-white-bottom ul.billing-list li, .left-sidebar ul li, li, ul {\r\n    list-style: none\r\n}\r\n.analytics-content {\r\n    padding: 30px 0px;\r\n}\r\n\r\n\r\n/*Css Import From Custom */\r\n@media screen and (min-width:320px) and (max-width:768px) {\r\n    .chart-position {\r\n        position: absolute;\r\n        top: -45px !important;\r\n        left: -133px !important\r\n    }\r\n    .tabs-outer{\r\n        float: left;\r\n        margin-top: 0px;\r\n    }\r\n}\r\n@media screen and (min-width:320px) and (max-width:330px) {\r\n    .tabs-outer{\r\n        float: left;\r\n        margin-top: 10px;\r\n        margin-left: 0;\r\n    }\r\n    .statstic-heading {\r\n        float: left;\r\n        width: 100%;\r\n    }\r\n    #person .btn-main-outer {\r\n        margin-top: 0 !important;\r\n    }\r\n    #person .dp-outer {\r\n         margin-top: 0 !important;\r\n    }\r\n}\r\n@media (min-width:320px) and (max-width:530px){\r\n    #overview .dp-outer{\r\n        float: left;\r\n        margin-left: 30px;\r\n        margin-top: 20px;\r\n    }\r\n}\r\n@media (max-width:767px) {\r\n    .details-heading{\r\n        width: 100%;\r\n    }\r\n    .btn-outer button {\r\n        margin: 0;\r\n        float: left;\r\n        margin-right: calc(100% - 280px);\r\n        margin-top: 20px;\r\n    }\r\n    #person .btn-main-outer {\r\n        float: left;\r\n        margin-top: 0px;\r\n    }\r\n    #person .btn-outer {\r\n        float: left;\r\n        margin-left: 30px;\r\n        margin-top: 10px;\r\n    }\r\n    #person .dp-outer {\r\n        margin-right: 0px;\r\n        float: left;\r\n        margin-left: 0px;\r\n        margin-top:0px;\r\n    }\r\n    #traffic .dp-outer {\r\n        float: left;\r\n        margin-left: 30px;\r\n    }\r\n    #lgScrSideNavbar, .dash-circle, .dash-prog-outer h2, .full-menu {\r\n        display: none\r\n    }\r\n    #responsive-header .navbar-fixed-top .nav-padding {\r\n        padding-right: 0;\r\n        padding-left: 0\r\n    }\r\n    .main-logo {\r\n        display: none !important\r\n    }\r\n    .mobile-menu {\r\n        display: block;\r\n        float: right;\r\n        margin-top: 7px;\r\n        position: relative\r\n    }\r\n    #responsive-header .navbar-default {\r\n        background: #fb5f66 !important;\r\n        border: none;\r\n        margin-top: 0\r\n    }\r\n    #responsive-header .navbar-default .mat-icon i.material-icons {\r\n        font-size: 24px;\r\n        color: #fff;\r\n        padding: 13px\r\n    }\r\n    #responsive-header .navbar-header h4.title {\r\n        color: #fff;\r\n        font-size: 16px;\r\n        text-align: center;\r\n        text-transform: uppercase;\r\n        padding-top: 7px\r\n    }\r\n    .mobile-menu button {\r\n        border: none;\r\n        box-shadow: none;\r\n        color: #fff;\r\n        background: 0 0;\r\n        float: right;\r\n        margin: 0 5px\r\n    }\r\n    .mobile-menu button:focus {\r\n        background: 0 0 !important;\r\n        color: #fff !important\r\n    }\r\n    .mobile-menu .btn-default:hover {\r\n        color: #fff;\r\n        background: 0 0\r\n    }\r\n    .mobile-dash {\r\n        padding: 0\r\n    }\r\n    .mobile-menu .dropdown-menu {\r\n        background: #62696d;\r\n        top: -11px;\r\n        border-radius: 0;\r\n        left: -176px;\r\n        width: 235px;\r\n        font-family: montserratlight;\r\n        padding-bottom: 55px\r\n    }\r\n    .mobile-menu .name-dropdown-border {\r\n        width: 100%;\r\n        margin: 5px 0\r\n    }\r\n    .mobile-menu .user-outr {\r\n        float: left;\r\n        width: 100%;\r\n        padding: 0;\r\n        margin: 0;\r\n        display: block;\r\n        text-transform: capitalize\r\n    }\r\n    .mobile-menu .user-outr li {\r\n        float: right;\r\n        font-size: 24px;\r\n        font-family: montserratlight;\r\n        color: #fff;\r\n        margin-right: 24px;\r\n        margin-top: 8px;\r\n        margin-bottom: 6px;\r\n        margin-left: 30px;        /*white-space: normal;*/\r\n        word-wrap: break-word;\r\n        width: 175px;\r\n        text-align: right;\r\n    }\r\n    .mobile-menu .user-outr li a {\r\n        margin-right: 30px\r\n    }\r\n    .user-outr li a {\r\n        float: left;\r\n        width: auto;\r\n        border: 2px solid #dae2e6;\r\n        border-radius: 50%;\r\n        margin-left: 5px;\r\n        margin-bottom: 5px\r\n    }\r\n    .user-outr li a:hover {\r\n        border: 2px solid #f56151\r\n    }\r\n    .mobile-menu .company-list li, .mobile-menu .name-list li {\r\n        margin: 10px 0;\r\n        text-align: right;\r\n        font-size: 16px;\r\n        width: 100%;\r\n        float: left;\r\n        padding-right: 20px\r\n    }\r\n    .mobile-menu .company-list li a, .mobile-menu .name-list li a {\r\n        float: right;\r\n        color: #fff\r\n    }\r\n    .mobile-menu .company-list li a i {\r\n        margin-right: 20px;\r\n        float: left\r\n    }\r\n    .mobile-menu .name-list li a i {\r\n        margin-left: 20px;\r\n        float: right\r\n    }\r\n    .mobile-menu .company-list-title {\r\n        float: left;\r\n        color: #fff\r\n    }\r\n    .white-logo {\r\n        display: block !important\r\n    }\r\n    .dash-prog-outer {\r\n        float: left;\r\n        width: 100%;\r\n        margin-top: 10px;\r\n        margin-bottom: 10px\r\n    }\r\n    .dash-prog-outer h5 {\r\n        font-size: 24px;\r\n        text-align: center;\r\n        width: 100%;\r\n        margin-bottom: 1px\r\n    }\r\n    .dash-prog-outer .company-dropdown-wrapper {\r\n        min-height: 35px;\r\n        width: 100%;\r\n        text-align: center\r\n    }\r\n    .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n        margin: 0 auto;\r\n        float: none;\r\n        text-align: center\r\n    }\r\n    #responsive-header .navbar-header {\r\n        float: left;\r\n        margin-left: -5px;\r\n        margin-right: 0 !important\r\n    }\r\n    #responsive-header .navbar-logopadding {\r\n        padding-right: 0;\r\n        padding-top: 0\r\n    }\r\n    #responsive-header .navbar-default {\r\n        height: 50px;\r\n        margin: 0;\r\n        padding-bottom: 0\r\n    }\r\n    .white-logo .navbar-brand img {\r\n        height: 53px;\r\n        margin: -20px auto 0\r\n    }\r\n    .white-logo .navbar-brand {\r\n        float: none\r\n    }\r\n    .user-outr li a.add-user {\r\n        width: 45px;\r\n        height: 45px;\r\n        padding-top: 9px\r\n    }\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\r\n        top: -30px;\r\n        left: 17px;\r\n        font-size: 34px;\r\n        position: relative;\r\n        color: #f87b80\r\n    }\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-title {\r\n        font-size: 16px\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu>li>a .company-site {\r\n        width: 91%;\r\n        font-size: 14px\r\n    }\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-block-inner {\r\n        width: 35px;\r\n        height: 35px;\r\n        padding-top: 8px;\r\n        font-size: 14px;\r\n        top: 13px\r\n    }\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a.add-new-company {\r\n        font-size: 14px\r\n    }\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\r\n        font-size: 24px\r\n    }\r\n    .company-block-content {\r\n        margin-left: 50px\r\n    }\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\r\n        right: 34px\r\n    }\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n        top: 8px;\r\n        left: -8px\r\n    }\r\n    #smScrWrapperContent {\r\n        display: none\r\n    }\r\n    #new-header .company-nav {\r\n        display: block !important\r\n    }\r\n    #new-header .navbar-default.company-nav {\r\n        background: #fff !important;\r\n        border-bottom: 1px solid #dae2e6;\r\n        padding-top: 0 !important\r\n    }\r\n    #new-header .company-nav .navbar-header {\r\n        width: 100% !important\r\n    }\r\n    #new-header .company-nav .navbar-logopadding {\r\n        padding-left: 15px;\r\n        padding-top: 22px;\r\n        height: 105px;\r\n        width: 100%;\r\n        padding-right: 15px !important\r\n    }\r\n    .company_name_avatar-circle {\r\n        margin-right: 15px\r\n    }\r\n    .company_name_span {\r\n        width: 57%;\r\n        line-height: 30px\r\n    }\r\n    #new-header {\r\n        height: 50px\r\n    }\r\n    #new-header .company-nav.navbar-fixed-top .nav-padding {\r\n        padding-left: 0;\r\n        padding-right: 0\r\n    }\r\n    .daterangepicker.dropdown-menu {\r\n        right: 28px !important;\r\n        width: 252px !important;\r\n        left: 25px !important;\r\n    }\r\n}\r\n@media (max-width:991px) {\r\n    .visible-tabs {\r\n        display: none\r\n    }\r\n}\r\n@media (min-width:992px) {\r\n    .visible-tabs {\r\n        display: block !important\r\n    }\r\n    .hidden-tabs {\r\n        display: none !important\r\n    }\r\n}\r\n@media (min-width:768px) and (max-width:768px) {\r\n    .analytics-mt0 {\r\n        padding-left: 0px;\r\n    }\r\n    .btn-outer {\r\n        float: left;\r\n    }\r\n    .dp-outer{\r\n        margin-left: 15px;\r\n    }\r\n    .daterangepicker.dropdown-menu {\r\n        left: 240px !important;\r\n    }\r\n    .daterangepicker.opensright:before {\r\n        right: 15px !important;\r\n    }\r\n    .daterangepicker.opensright:after {\r\n        right: 16px !important;\r\n    }\r\n\r\n}\r\n@media (min-width:360px) and (max-width:400px) {\r\n    .chart-position {\r\n        position: absolute;\r\n        top: -45px !important;\r\n        left: -100px !important\r\n    }\r\n}\r\n@media (min-width:410px) and (max-width:440px) {\r\n    .chart-position {\r\n        position: absolute;\r\n        top: -45px !important;\r\n        left: -170px !important\r\n    }\r\n}\r\n@media screen and (min-width:1024px) and (max-width:1100px) {\r\n    .analytics-box-outer {\r\n        margin-left: 20px !important\r\n    }\r\n    .analytics-box-outer h4 {\r\n        font-size: 18px !important\r\n    }\r\n    .traffic-graph-outer {\r\n        width: 100% !important;\r\n        margin-right: 20px;\r\n        margin-left: 20px\r\n    }\r\n    .chart-position {\r\n        position: absolute;\r\n        top: -20px;\r\n        left: -315px\r\n    }\r\n    .tabs-outer{\r\n        margin-left: 7px !important;\r\n    }\r\n    .btn-outer button{\r\n        margin-right: 7px !important; \r\n    }\r\n}\r\n@media (max-width:767px) {\r\n    #person .details-box-outer {\r\n        width: 100%;\r\n        margin-left: 0;\r\n    }\r\n    .select-span{\r\n        display: none;\r\n    }\r\n    .main-left-sidebar {\r\n        display: none\r\n    }\r\n    .mobile-left-sidebar {\r\n        display: block;\r\n        width: 100%;\r\n        top: 50px;\r\n        border-right: none;\r\n        box-shadow: none\r\n    }\r\n    .modal-open .modal {\r\n        padding-right: 0 !important\r\n    }\r\n    .wrapper-content {\r\n        margin-left: 0;\r\n        width: 100%;\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n        padding-top: 0;\r\n        margin-top: 0;\r\n        min-height: 89vh\r\n    }\r\n    .company-dropdown-main {\r\n        width: 100%\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu {\r\n        top: 40px;\r\n        left: 7px;\r\n        font-size: 14px;\r\n        width: 282px\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu:before {\r\n        right: 90px\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu>li>a .company-title {\r\n        font-size: 16px\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-site {\r\n        font-size: 14px\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-block-inner {\r\n        width: 35px;\r\n        height: 35px;\r\n        padding-top: 8px;\r\n        font-size: 14px;\r\n        top: 13px\r\n    }\r\n    .tabs-wrapper .nav-tabs.nav-justified>li:nth-child(1)>a {\r\n        font-size: 11px;\r\n        float: left;\r\n        width: 33.3%;\r\n        text-align: center;\r\n        padding: 10px 22px;\r\n        margin-bottom: 0\r\n    }\r\n    .tabs-wrapper .nav-tabs.nav-justified>li:nth-child(2)>a, .tabs-wrapper .nav-tabs.nav-justified>li:nth-child(3)>a {\r\n        font-size: 11px;\r\n        float: left;\r\n        width: 33.3%;\r\n        text-align: center;\r\n        padding: 10px 12px;\r\n        margin-bottom: 0\r\n    }\r\n    .tabs-wrapper #team-settings .nav-tabs.nav-justified>li:nth-child(1)>a {\r\n        font-size: 11px;\r\n        float: left;\r\n        width: 50%;\r\n        text-align: center;\r\n        padding: 10px 22px;\r\n        margin-bottom: 0\r\n    }\r\n    .tabs-wrapper #team-settings .nav-tabs.nav-justified>li:nth-child(2)>a {\r\n        font-size: 11px;\r\n        float: left;\r\n        width: 50%;\r\n        text-align: center;\r\n        padding: 10px 12px;\r\n        margin-bottom: 0\r\n    }\r\n    .company-block-content {\r\n        margin-left: 50px\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\r\n        font-size: 24px !important;\r\n        top: -2px;\r\n        position: relative;\r\n        margin-right: 5px\r\n    }\r\n    .team-settings-wrapper .company-dropdown-wrapper i.material-icons {\r\n        padding-top: 2px\r\n    }\r\n    .company-dropdown-title-active-mobile {\r\n        display: block\r\n    }\r\n    #active-users .active-users-dropdown-wrapper .mat-icon-arrow-down, .active-users-box span.joined-date-mobile, .invited-users-card .active-users-box h6.designation {\r\n        display: none\r\n    }\r\n    .wrapper-content-inner {\r\n        padding: 0;\r\n        margin-top: 22px;\r\n        float: left;\r\n        width: 100%\r\n    }\r\n    .tabs-outer .nav-tabs.nav-justified>li:nth-child(2)>a{\r\n        padding: 5px 0px;\r\n        width: 50%;\r\n    }\r\n    .tabs-outer .nav-tabs.nav-justified>li:nth-child(1)>a{\r\n        padding: 5px 0px;\r\n        width: 50%;\r\n    }\r\n     .btn-outer {\r\n        width: 100%;\r\n        margin-top: 10px;\r\n        text-align: center;\r\n    }\r\n    .btn-outer button {\r\n        margin: 0;\r\n        margin-bottom: 10px;\r\n        margin-left: 30px;\r\n        float: left;\r\n        margin-top: 10px;\r\n        margin-right: calc(100% - 280px);\r\n   \r\n    }\r\n}\r\n@media (min-width:320px) and (max-width:768px) {\r\n    .select-style {\r\n        /*margin-top: 10px;\r\n        float: left;\r\n        margin-left: 30px;*/\r\n    }\r\n    .daterangepicker .calendar-table{\r\n        border:none;\r\n    }\r\n    #membership-details .membership-details-inner-tabs {\r\n        display: none;\r\n    }\r\n    #membership-details .membership-details-tabs-resp {\r\n        display: block;\r\n    }\r\n    #membership-details .tab-content.tab-sub-content {\r\n        width: 100%;\r\n        margin-left: 0;\r\n        padding: 0px 0px;\r\n    }\r\n\r\n    /* analytics resp sahil start */\r\n    .analytics-top-outer {\r\n        margin-top: 0px;\r\n        min-height: 160px;\r\n    }\r\n    .analytics-left-side {\r\n        position: relative !important;\r\n        top: 0 !important;\r\n        width: 100%;\r\n        height: auto !important;\r\n        padding-top: 0;\r\n    }\r\n    .analytics-bottom-popup {\r\n        width: 100%;\r\n    }\r\n    .analytics-top-inner h4 {\r\n        font-size: 20px;\r\n    }\r\n    .left-sidebar.analytics-left-side ul li a {\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    .left-sidebar.analytics-left-side ul li a h6 {\r\n        margin-bottom: 0px;\r\n        font-size: 11px;\r\n    }\r\n    .left-sidebar.analytics-left-side ul li a .left-sidebar-icon {\r\n        display: none;\r\n    }\r\n    .left-sidebar.analytics-left-side ul li a .left-sidebar-title {\r\n        width: 100%;\r\n        margin: 0px;\r\n    }\r\n    .left-sidebar.analytics-left-side ul li a .left-sidebar-title span {\r\n        display: none;\r\n    }\r\n\r\n    /*.wrapper-content{ padding-top: 25px !important; }*/\r\n    .analytics-box-outer {\r\n        margin-left: 0px;\r\n        margin-bottom: 20px;\r\n        width: 100%;\r\n    }\r\n    .user-detail-outr {\r\n        padding-left: 30px;\r\n        padding-right: 30px;\r\n    }\r\n    #area-example svg {\r\n        width: 100%;\r\n    }\r\n    .btn-outer button {\r\n        margin: 0;\r\n        float: left;\r\n    }\r\n    .details-box-outer {\r\n        margin-left: 0px;\r\n        margin-bottom: 20px;\r\n    }\r\n    .traffic-graph-outer {\r\n        width: 100%;\r\n    }\r\n    .analytics-top-inner {\r\n        margin-top: 6%;\r\n    }\r\n    .analytics-mid-inner {\r\n        padding-right: 26px;\r\n        margin-top: 20px;\r\n    }\r\n    .traffic-outr {\r\n        padding: 0 30px;\r\n    }\r\n    .user-detail-outer {\r\n        width: 305px;\r\n    }\r\n    .user-detail-outer .mid-section {\r\n        padding-right: 15px;\r\n    }\r\n\r\n    /* .user-detail-outer .mid-section .slimScrollDiv {height: 320px !important;}\r\n    .user-detail-outer .mid-section .outer-slim {height: 320px !important;} */\r\n    .analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu {\r\n        position: absolute;\r\n        left: -75px;\r\n        width: 170px;\r\n        min-width: 170px;\r\n    }\r\n    .analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu:before {\r\n        right: 75px;\r\n    }\r\n    .analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu .company-dropdown-main {\r\n        width: 100%;\r\n    }\r\n    .analytics-top-inner .company-dropdown-wrapper .dropdown-menu .company-dropdown-list > li > a {\r\n        padding: 10px 15px;\r\n    }\r\n    .analytics-top-outer .company-dropdown-wrapper .dropdown-menu .company-dropdown-list >li > a .company-block-inner {\r\n        width: 20px;\r\n        height: 20px;\r\n        padding-top: 4px;\r\n        font-size: 11px;\r\n    }\r\n    .analytics-top-outer .company-block-content {\r\n        margin-left: 30px;\r\n        font-size: 12px;\r\n    }\r\n    .analytics-mt0 {\r\n        padding-top: 25px;\r\n    }\r\n    \r\n    .analytics-top-inner h4 .mob-width-set {\r\n        min-width: 60px;\r\n        float: left;\r\n        max-width: 190px;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: nowrap\r\n    }\r\n    .navbar-fixed-bottom, .navbar-fixed-top {\r\n        z-index: 9999 !important;\r\n    }\r\n    .analytics-page.tab-content {\r\n        padding: 0;\r\n    }\r\n    .light-loader-outer-new {\r\n        padding: 130px 0px;\r\n        width: calc(100% + 60px);\r\n    }\r\n    #traffic .dp-outer {\r\n        margin-top: 5px;\r\n    }\r\n    #main-div{ overflow: hidden;}\r\n    .wrapper .left-sidebar ul li{\r\n        float: left;\r\n        width: 33%;\r\n    }\r\n    \r\n}\r\n@media screen and (min-width:640px) and (max-width:640px) {\r\n    .chart-position {\r\n        position: absolute;\r\n        top: -45px !important;\r\n        left: -63px !important\r\n    }\r\n}\r\n.details-table-outer i.material-icons{\r\n   font-size: 13px;\r\n   color: #fb545b;\r\n   float: left;\r\n   margin-right: 3px;\r\n}\r\n\r\n.details-table-outer .help-tip {\r\n   margin: 1px 7px;\r\n   display: inline-block;\r\n   vertical-align: middle;\r\n   position: relative;\r\n   margin: 0px;\r\n   cursor: pointer;\r\n   float: left;\r\n}\r\n.details-table-outer .help-checktip {\r\n   float: left;\r\n   background-color: #61696C;\r\n   color: #fff;\r\n   padding: 3px 4px;\r\n   width: 180px;\r\n   font-size: 10px;\r\n   position: absolute;\r\n   top: 22px;\r\n   border-radius: 0px;\r\n   visibility: hidden;\r\n   box-shadow: 0 3px 7px 0px #919191;\r\n   text-align: center;\r\n   left: -83px;\r\n   line-height: 1.42857143;\r\n}\r\n.details-table-outer .help-tip:hover > .help-checktip {\r\n   visibility: visible;\r\n   z-index: 999;\r\n}\r\n.details-table-outer .help-checktip::before {\r\n   content: '';\r\n   position: absolute;\r\n   top: -30%;\r\n   left: 51%;\r\n   margin-left: -8px;\r\n   width: 10px;\r\n   height: 10px;\r\n   border-bottom: 6px solid #61696C;\r\n   border-right: 6px solid transparent;\r\n   border-left: 6px solid transparent;\r\n   border-top:  none;\r\n}\r\n\r\n.analytics-box-outer .help-tip {\r\n    margin: 1px 7px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    position: relative;\r\n    margin: 0px;\r\n    cursor: pointer;\r\n}\r\n.analytics-box-outer .help-tip i {\r\n    color: #bec5c9;\r\n    font-size: 13px;\r\n    line-height: 15px;\r\n    cursor: pointer;\r\n    top: -8px;\r\n    margin-left: 2px;\r\n}\r\n.analytics-box-outer .help-checktip {\r\n    float: left;\r\n    background-color: #61696C;\r\n    color: #fff;\r\n    padding: 3px 4px;\r\n    width: 180px;\r\n    font-size: 10px;\r\n    position: absolute;\r\n    top: 15px;\r\n    border-radius: 0px;\r\n    visibility: hidden;\r\n    box-shadow: 0 3px 7px 0px #919191;\r\n    text-align: center;\r\n    left: -80px;\r\n    line-height: 1.42857143;\r\n    text-transform: none;\r\n    z-index: 99;\r\n}\r\n.analytics-box-outer .help-checktip:before {\r\n    content: '';\r\n    position: relative;\r\n    top: -22px;\r\n    left: 77px;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-bottom: 6px solid #61696C;\r\n    border-right: 6px solid transparent;\r\n    border-left: 6px solid transparent;\r\n    border-top: none;\r\n    margin: 0;\r\n}\r\n.analytics-box-outer .help-checktip.last-help-checktip {\r\n    left: -110px;\r\n}\r\n.analytics-box-outer .help-checktip.last-help-checktip:before {\r\n    left: 103px;\r\n}\r\n\r\n.analytics-box-outer .help-tip:hover > .help-checktip {\r\n    visibility: visible;\r\n    z-index: 999;\r\n}\r\n/*.details-table-outer .table-responsive th {\r\n    width: auto !important;\r\n}*/\r\n\r\np.analytics-upgradeText {\r\n        color: #636f76;\r\n    font-family: \"montserratlight\";\r\n    font-size: 13px;\r\n    display: block;\r\n    line-height: 10px;\r\n    padding-left: 30px;\r\n    float: left;\r\n    width: 100%;\r\n    margin-top: 18px;\r\n    margin-bottom: -10px;\r\n}\r\n.analytics-upgradeText button {\r\n    margin-left: 5px;\r\n}\r\n\r\n.btn-red-outline {\r\n    color: #fb545b;\r\n    background-color: #fff;\r\n    border-color: #ffb5b8;\r\n    border-radius: 0;\r\n    font-size: 11px;\r\n    padding: 7px 20px;\r\n    margin: 10px 0px;\r\n    -webkit-transition: all 0.3s ease 0s;\r\n    transition: all 0.3s ease 0s;\r\n    font-family: montserratregular;\r\n    text-transform: uppercase;\r\n}\r\n.btn-hover:hover {\r\n    -webkit-transition: .5s ease-in-out;\r\n    transition: .5s ease-in-out;\r\n    background: #fdb6b9 !important;\r\n    color: #fb545b !important;\r\n    border-color: #fdb6b9 !important\r\n}\r\n\r\n.btn-hover:focus {\r\n    -webkit-transition: .5s ease-in-out;\r\n    transition: .5s ease-in-out;\r\n    background: #fdb6b9 !important;\r\n    color: #fb545b !important;\r\n    border-color: #fdb6b9 !important\r\n}\r\n.btn-upgrade{\r\n        color: #fff;\r\n    background-color: #fb545b;\r\n    font-size: 10px;\r\n    padding: 1px 8px;\r\n    margin: 7px 0px;\r\n    padding-top: 2px;\r\n    border-radius: 5px;\r\n    -webkit-transition: all 0.3s ease 0s;\r\n    transition: all 0.3s ease 0s;\r\n    font-family: montserratregular;\r\n    text-transform: uppercase;\r\n}\r\n.btn-upgrade:hover, .btn-upgrade:focus, .btn-upgrade:active{\r\n    color: #fff;\r\n    background-color: #f57a7f;\r\n}\r\np.analytics-upgradeText span{ \r\n    float: left;\r\n}\r\n.analytics-upgradeText i.lock-icon{\r\n    clear: both;\r\n    font-size: 20px;\r\n    float: left;\r\n    border: 1px solid #dae2e6;\r\n    color: #fb545b;\r\n    padding: 5px 6px;\r\n    border-radius: 3px;\r\n    margin-right: 8px;\r\n}\r\n/* blurred text css */\r\n.details-table-outer table tr td a span {\r\n    font-size: 11px;\r\n    color: transparent;\r\n    text-shadow: 0 0 3px rgba(0,0,0,0.5);\r\n}\r\n.comming-soon-tag {\r\n    background: #fb545b;\r\n    font-size: 9px;\r\n    font-family: montserratbold;\r\n    padding: 1px 5px;\r\n    border-radius: 6px;\r\n    display: inline-block;\r\n    margin-top: -5px;\r\n    margin-left: 6px;\r\n}\r\ni.lock-icon{\r\n    float: none;\r\n    margin-right: 1px;\r\n    font-size: 14px;\r\n    margin-top: 0px;\r\n    display: inline-block;\r\n    vertical-align: text-top;\r\n    color: #fb545b;\r\n}\r\n.comming-soon-tag i.lock-icon{\r\n    color: #fff !important;\r\n}\r\n@media (min-width:769px) and (max-width:1020px) {\r\n    .btn-outer{\r\n        float: left;\r\n        margin-left: 0px;\r\n        margin-top: 10px;\r\n    }\r\n    .btn-main-outer {\r\n        float: left;\r\n        margin-left: 30px;\r\n    }\r\n    .btn-outer button{\r\n        margin-right: 0px;\r\n    }\r\n    .dp-outer{\r\n        margin-left:10px;\r\n    }\r\n}"

/***/ }),

/***/ 955:
/***/ (function(module, exports) {

module.exports = "/**\r\n* A stylesheet for use with Bootstrap 3.x\r\n* @author: Dan Grossman http://www.dangrossman.info/\r\n* @copyright: Copyright (c) 2012-2015 Dan Grossman. All rights reserved.\r\n* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php\r\n* @website: https://www.improvely.com/\r\n*/\r\n\r\n/* Container Appearance */\r\n\r\n.daterangepicker {\r\n  position: absolute;\r\n  background: #fff;\r\n  top: 100px;\r\n  left: 20px;\r\n  padding: 3px;\r\n  margin-top: 1px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.daterangepicker.opensleft:before {\r\n  position: absolute;\r\n  top: -7px;\r\n  right: 9px;\r\n  display: inline-block;\r\n  border-right: 7px solid transparent;\r\n  border-bottom: 7px solid #ccc;\r\n  border-left: 7px solid transparent;\r\n  border-bottom-color: rgba(0, 0, 0, 0.2);\r\n  content: '';\r\n}\r\n\r\n.daterangepicker.opensleft:after {\r\n  position: absolute;\r\n  top: -6px;\r\n  right: 10px;\r\n  display: inline-block;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 6px solid #fff;\r\n  border-left: 6px solid transparent;\r\n  content: '';\r\n}\r\n\r\n.daterangepicker.openscenter:before {\r\n  position: absolute;\r\n  top: -7px;\r\n  left: 0;\r\n  right: 0;\r\n  width: 0;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: inline-block;\r\n  border-right: 7px solid transparent;\r\n  border-bottom: 7px solid #ccc;\r\n  border-left: 7px solid transparent;\r\n  border-bottom-color: rgba(0, 0, 0, 0.2);\r\n  content: '';\r\n}\r\n\r\n.daterangepicker.openscenter:after {\r\n  position: absolute;\r\n  top: -6px;\r\n  left: 0;\r\n  right: 0;\r\n  width: 0;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: inline-block;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 6px solid #fff;\r\n  border-left: 6px solid transparent;\r\n  content: '';\r\n}\r\n\r\n.daterangepicker.opensright:before {\r\n  position: absolute;\r\n  top: -7px;\r\n  display: inline-block;\r\n  border-right: 7px solid transparent;\r\n  border-bottom: 7px solid #ccc;\r\n  border-left: 7px solid transparent;\r\n  border-bottom-color: rgba(0, 0, 0, 0.2);\r\n  content: '';\r\n}\r\n\r\n.daterangepicker.opensright:after {\r\n  position: absolute;\r\n  top: -6px;\r\n  display: inline-block;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 6px solid #fff;\r\n  border-left: 6px solid transparent;\r\n  content: '';\r\n}\r\n\r\n.daterangepicker.dropup{\r\n  margin-top: -5px;\r\n}\r\n.daterangepicker.dropup:before{\r\n  top: initial;\r\n  bottom:-7px;\r\n  border-bottom: initial;\r\n  border-top: 7px solid #ccc;\r\n}\r\n.daterangepicker.dropup:after{\r\n  top: initial;\r\n  bottom:-6px;\r\n  border-bottom: initial;\r\n  border-top: 6px solid #fff;\r\n}\r\n\r\n.daterangepicker.dropdown-menu {\r\n  max-width: none;\r\n  z-index: 3000;\r\n}\r\n\r\n.daterangepicker .ranges, .daterangepicker .calendar {\r\n  float: left;\r\n}\r\n\r\n.daterangepicker.single .ranges, .daterangepicker.single .calendar {\r\n  float: none;\r\n}\r\n\r\n.daterangepicker .ranges {\r\n  margin: 4px;\r\n  text-align: left;\r\n}\r\n\r\n.daterangepicker .calendar {\r\n  display: none;\r\n  max-width: 270px;\r\n}\r\n\r\n.daterangepicker.show-calendar .calendar {\r\n  display: block;\r\n}\r\n\r\n.daterangepicker .calendar.single .calendar-table {\r\n  border: none;\r\n}\r\n\r\n/* Calendars */\r\n\r\n.daterangepicker .calendar th, .daterangepicker .calendar td {\r\n  white-space: nowrap;\r\n  text-align: center;\r\n  min-width: 32px;\r\n}\r\n\r\n.daterangepicker .calendar-table {\r\n  border: 1px solid #ddd;\r\n  padding: 4px;\r\n  border-radius: 4px;\r\n  background: #fff;\r\n}\r\n\r\n.daterangepicker .calendar.left .calendar-table {\r\n  border-right: none;\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.daterangepicker .calendar.right .calendar-table {\r\n  border-left: none;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;  \r\n}\r\n\r\n.daterangepicker .calendar.left {\r\n  margin: 4px 0 4px 4px;\r\n}\r\n\r\n.daterangepicker .calendar.right {\r\n  margin: 4px 4px 4px 0;\r\n}\r\n\r\n.daterangepicker .calendar.left .calendar-table {\r\n  padding-right: 12px;\r\n}\r\n\r\n.daterangepicker table {\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.daterangepicker td, .daterangepicker th {\r\n  text-align: center;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 4px;\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n}\r\n\r\n.daterangepicker td.off, .daterangepicker td.off.in-range, .daterangepicker td.off.start-date, .daterangepicker td.off.end-date {\r\n  color: #999;\r\n  background: #fff;\r\n}\r\n\r\n.daterangepicker td.disabled, .daterangepicker option.disabled {\r\n  color: #999;\r\n}\r\n\r\n.daterangepicker td.available:hover, .daterangepicker th.available:hover {\r\n  background: #eee;\r\n}\r\n\r\n.daterangepicker td.in-range {\r\n  background: #ebf4f8;\r\n  border-radius: 0;\r\n}\r\n\r\n.daterangepicker td.start-date {\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.daterangepicker td.end-date {\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.daterangepicker td.start-date.end-date {\r\n  border-radius: 4px;\r\n}\r\n\r\n.daterangepicker td.active, .daterangepicker td.active:hover {\r\n  background-color: #357ebd;\r\n  border-color: #3071a9;\r\n  color: #fff;\r\n}\r\n\r\n.daterangepicker td.week, .daterangepicker th.week {\r\n  font-size: 80%;\r\n  color: #ccc;\r\n}\r\n\r\n.daterangepicker select.monthselect, .daterangepicker select.yearselect {\r\n  font-size: 12px;\r\n  padding: 1px;\r\n  height: auto;\r\n  margin: 0;\r\n  cursor: default;\r\n}\r\n\r\n.daterangepicker select.monthselect {\r\n  margin-right: 2%;\r\n  width: 56%;\r\n}\r\n\r\n.daterangepicker select.yearselect {\r\n  width: 40%;\r\n}\r\n\r\n.daterangepicker select.hourselect, .daterangepicker select.minuteselect, .daterangepicker select.secondselect, .daterangepicker select.ampmselect {\r\n  width: 50px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.daterangepicker th.month {\r\n  width: auto;\r\n}\r\n\r\n/* Text Input Above Each Calendar */\r\n\r\n.daterangepicker .input-mini {\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  color: #555;\r\n  display: block;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  vertical-align: middle;\r\n  margin: 0 0 5px 0;\r\n  padding: 0 6px 0 28px;\r\n  width: 100%;\r\n}\r\n\r\n.daterangepicker .input-mini.active {\r\n  border: 1px solid #357ebd;\r\n}\r\n\r\n.daterangepicker .daterangepicker_input i {\r\n  position: absolute;\r\n  left: 8px;\r\n  top: 8px;\r\n}\r\n\r\n.daterangepicker .left .daterangepicker_input {\r\n  padding-right: 12px;\r\n}\r\n\r\n.daterangepicker .daterangepicker_input {\r\n  position: relative;\r\n}\r\n\r\n/* Time Picker */\r\n\r\n.daterangepicker .calendar-time {\r\n  text-align: center;\r\n  margin: 5px auto;\r\n  line-height: 30px;\r\n  position: relative;\r\n  padding-left: 28px;\r\n}\r\n\r\n.daterangepicker .calendar-time select.disabled {\r\n  color: #ccc;\r\n  cursor: not-allowed;\r\n}\r\n\r\n/* Predefined Ranges */\r\n\r\n.daterangepicker .ranges {\r\n  font-size: 11px;\r\n}\r\n\r\n.daterangepicker .ranges ul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 160px;\r\n}\r\n\r\n.daterangepicker .ranges li {\r\n  font-size: 13px;\r\n  background: #f5f5f5;\r\n  border: 1px solid #f5f5f5;\r\n  color: #08c;\r\n  padding: 3px 12px;\r\n  margin-bottom: 8px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.daterangepicker .ranges li.active, .daterangepicker .ranges li:hover {\r\n  background: #08c;\r\n  border: 1px solid #08c;\r\n  color: #fff;\r\n}"

/***/ }),

/***/ 956:
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane active \" id=\"overview\">\r\n  <div class=\"graph-val\"><span class=\"red\"></span> Unique Views </div>\r\n  <div class=\"graph-val\"><span class=\"blue\"></span> Page Views </div>\r\n  <og-date-range-picker (date)=\"onDateSelect($event)\" [calc]=\"calc\"></og-date-range-picker>\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 user-detail-outr \">\r\n    <div id=\"area-example\" style=\"height: 300px;\"></div>\r\n<div class=\"light-loader-outer-new\" *ngIf=\"graphLoader !== 'done'\">\r\n  <div class=\"light-loader-inner-new\">\r\n    <div class=\"loader\" *ngIf=\"graphLoader === 'loading'\"></div>\r\n    <p *ngIf=\"graphLoader !== 'loading'\">{{graphLoader}}</p>\r\n    <a class=\"icon-link\" *ngIf=\"graphLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"col-md-12 col-sm-12 col-xs-12 traffic-outr\">\r\n  <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\r\n    <h6>\r\n      <i class=\"material-icons\" *ngIf=\"_featureAuthService.features.analytics.summary\">people</i> \r\n      <i class=\"material-icons lock-icon\"  *ngIf=\"!_featureAuthService.features.analytics.summary\">lock_outline</i>\r\n    Total Visitors</h6>\r\n    <h4>{{(!stats  || !_featureAuthService.features.analytics.summary)?'--':stats.visitors}}</h4>\r\n    <div class=\"pull-left\">\r\n      <div id=\"chart-container4\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\r\n    <h6><i class=\"material-icons\" *ngIf=\"_featureAuthService.features.analytics.summary\">person</i> \r\n     <i class=\"material-icons lock-icon\"  *ngIf=\"!_featureAuthService.features.analytics.summary\">lock_outline</i>\r\n    Unique Visitors</h6>\r\n    <h4>{{(!stats  || !_featureAuthService.features.analytics.summary)?'--':stats.uniqueVisitors}}</h4>\r\n    <div class=\"pull-left\">\r\n      <div id=\"chart-container\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\r\n    <h6><i class=\"material-icons\" *ngIf=\"_featureAuthService.features.analytics.summary\">done</i>\r\n     <i class=\"material-icons lock-icon\"  *ngIf=\"!_featureAuthService.features.analytics.summary\">lock_outline</i>\r\n     Total Starts \r\n        <div class=\"help-tip\">\r\n            <i class=\"material-icons\">info_outline</i>\r\n            <div class=\"help-checktip\">Those visitors who actually start the quiz or calculator.</div>\r\n        </div>\r\n    </h6>\r\n    <h4>{{(!stats  || !_featureAuthService.features.analytics.summary)?'--':stats.calcStarts}}</h4>\r\n    <div class=\"pull-left\">\r\n      <div id=\"chart-container1\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\r\n    <h6><i class=\"material-icons\" *ngIf=\"_featureAuthService.features.analytics.summary\">person_add</i>\r\n    <i class=\"material-icons lock-icon\"  *ngIf=\"!_featureAuthService.features.analytics.summary\">lock_outline</i>\r\n     Conversions\r\n        <div class=\"help-tip\">\r\n            <i class=\"material-icons\">info_outline</i>\r\n            <div class=\"help-checktip\">Those visitors who provide their contact information like name, email etc.</div>\r\n        </div>\r\n    </h6>\r\n    <h4>{{(!stats  || !_featureAuthService.features.analytics.summary)?'--':stats.conversions}}</h4>\r\n    <div class=\"pull-left\">\r\n      <div id=\"chart-container1\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\r\n    <h6><i class=\"material-icons\" *ngIf=\"_featureAuthService.features.analytics.summary\">trending_up</i> \r\n    <i class=\"material-icons lock-icon\"  *ngIf=\"!_featureAuthService.features.analytics.summary\">lock_outline</i>\r\n    Conversion Rate</h6>\r\n    <h4>{{(!stats || !_featureAuthService.features.analytics.summary)?'--':stats.conversionRate}}%</h4>\r\n    <div class=\"pull-left\">\r\n      <div id=\"chart-container2\"></div>\r\n    </div>\r\n  </div>\r\n  <!--<div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer hide\">\r\n    <h6><i class=\"material-icons\">query_builder</i> Avg Length of Visit</h6>\r\n    <h4>{{(!stats)?'--':stats.timeOnPage}}</h4>\r\n    <div class=\"pull-left\">\r\n      <div id=\"chart-container3\"></div>\r\n    </div>\r\n  </div>-->\r\n  <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\r\n    <h6><i class=\"material-icons\" *ngIf=\"_featureAuthService.features.analytics.summary\">query_builder</i> \r\n    <i class=\"material-icons lock-icon\"  *ngIf=\"!_featureAuthService.features.analytics.summary\">lock_outline</i>\r\n    Engagements\r\n        <div class=\"help-tip\">\r\n            <i class=\"material-icons\">info_outline</i>\r\n            <div class=\"help-checktip last-help-checktip\">Number of times users shared on social media or clicked through to your website.</div>\r\n        </div>\r\n    </h6>\r\n    <h4>{{(!stats || !_featureAuthService.features.analytics.summary)?'--':stats.engagements}}</h4>\r\n    <div class=\"pull-left\">\r\n      <div id=\"chart-container3\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ 957:
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane\" id=\"traffic\">\r\n  <og-date-range-picker (date)=\"onDateSelect($event)\" [calc]=\"calc\"></og-date-range-picker>\r\n  <div *ngIf= \"!limit_alert\" class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"col-md-6\"><div class=\" traffic-graph-outer\" [class.traffic-graph-height]=\"geoLoader !== 'done'\">\r\n      <div class=\"col-md-5 col-sm-12 col-xs-12 np\" *ngIf=\"geoLoader == 'done'\">\r\n        <h4>Top Geographies</h4>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n        <div id=\"regions_div\" ></div>\r\n      </div>\r\n      <div class=\"light-loader-outer traffic1\" *ngIf=\"geoLoader !== 'done'\">\r\n        <div class=\"loader\" *ngIf=\"geoLoader === 'loading'\"></div>\r\n        <p *ngIf=\"geoLoader !== 'loading'\">{{geoLoader}}</p>\r\n        <a class=\"icon-link\" *ngIf=\"geoLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\r\n      </div>\r\n    </div></div>\r\n    <div class=\"col-md-6\"><div class=\"traffic-graph-outer\" [class.traffic-graph-height]=\"deviceLoader !== 'done'\">\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\" *ngIf=\"deviceLoader == 'done'\">\r\n        <h4>Devices</h4>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n        <div id=\"piechart\" class=\"chart-position\" ></div>\r\n      </div>\r\n      <div class=\"light-loader-outer traffic2\" *ngIf=\"deviceLoader !== 'done'\">\r\n        <div class=\"loader\" *ngIf=\"deviceLoader === 'loading'\"></div>\r\n        <p *ngIf=\"deviceLoader !== 'loading'\">{{deviceLoader}}</p>\r\n        <a class=\"icon-link\" *ngIf=\"deviceLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\r\n      </div>\r\n    </div></div>\r\n  </div>\r\n  <div *ngIf= \"!limit_alert\" class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"col-md-6\"><div class=\"traffic-graph-outer\" [class.traffic-graph-height]=\"socialLoader !== 'done'\">\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\" *ngIf=\"socialLoader == 'done'\">\r\n        <h4>Traffic Sources</h4>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n        <div id=\"piechart1\" class=\"chart-position\" ></div>\r\n      </div>\r\n      <div class=\"light-loader-outer traffic3\" *ngIf=\"socialLoader !== 'done'\">\r\n        <div class=\"loader\" *ngIf=\"socialLoader === 'loading'\"></div>\r\n        <p *ngIf=\"socialLoader !== 'loading'\">{{socialLoader}}</p>\r\n        <a class=\"icon-link\" *ngIf=\"socialLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\r\n      </div>\r\n    </div></div>\r\n    <div class=\"col-md-6\"><div class=\"traffic-graph-outer\" [class.traffic-graph-height]=\"browserLoader !== 'done'\">\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\" *ngIf=\"browserLoader == 'done'\">\r\n        <h4>Browser</h4>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n        <div id=\"piechart2\" class=\"chart-position\" ></div>\r\n      </div>\r\n      <div class=\"light-loader-outer traffic4\" *ngIf=\"browserLoader !== 'done'\">\r\n        <div class=\"loader\" *ngIf=\"browserLoader === 'loading'\"></div>\r\n        <p *ngIf=\"browserLoader !== 'loading'\">{{browserLoader}}</p>\r\n        <a class=\"icon-link\" *ngIf=\"browserLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\r\n      </div>\r\n    </div></div>\r\n  </div>\r\n  <div *ngIf=\"limit_alert\" class=\"analytics-bottom-popup traffic-margin\">\r\n    <i class=\"material-icons\">warning</i>\r\n    You have exceeded the Visits limit for your Plan <br>\r\n    <a href=\"\" [routerLink]=\"['/settings/membership']\">Click here</a> to buy an Addon to unlock the visits for your account.\r\n  </div>\r\n  <div *ngIf=\"limit_alert\" class=\"analytics-overlay\"></div>\r\n</div>\r\n"

/***/ }),

/***/ 958:
/***/ (function(module, exports) {

module.exports = "<div [class.hide]=\"loader==0\" class=\"tab-pane \" id=\"person\">\r\n  <div class=\"details-heading rs-mb40\"><span class=\"statstic-heading\">Statistics</span>\r\n    <select class=\"select-style details-dropdown hide\" (change)=\"leadDropdown($event.target.value)\">\r\n        <option value=\"true\">Leads</option>\r\n        <option value=\"false\">Visits</option>\r\n    </select>\r\n    <div class=\"tabs-outer\">\r\n      <ul class=\"nav nav-tabs nav-justified test\" role=\"tablist\">\r\n        <li [class.active]=\"lead\">\r\n          <a class=\"\" data-toggle=\"tab\" role=\"tab\" (click)=\"leadDropdown(true)\">Leads</a>\r\n        </li>\r\n        <li [class.active]=\"!lead\">\r\n          <a  class=\"\" data-toggle=\"tab\" href=\"\" role=\"tab\" (click)=\"leadDropdown(false)\">Visits</a>\r\n        </li>\r\n      </ul>\r\n  </div>\r\n  </div>\r\n  <div class=\"btn-main-outer\">\r\n     <div class=\"btn-outer\">\r\n        <!--<a href=\"{{calc.spredsheetUrl}}\" target=\"_blank\" *ngIf=\"calc.spredsheetUrl\"><i class=\"material-icons\">open_in_new</i></a>-->\r\n      <button [disabled]=\"disable\" (click)=\"exportToGoogleSheet()\">\r\n        <span *ngIf=\"!calc.spredsheetUrl\" class = \"export\">\r\n          <i class=\"material-icons\" >exit_to_app</i>\r\n          <!--<i class=\"material-icons lock-icon\" *ngIf=\"!_featureAuthService.features.analytics.spreadsheet\">lock_outline</i>-->\r\n          &nbsp;View Spreadsheet</span>\r\n        <p *ngIf=\"calc.spredsheetUrl\" class = \"update\">\r\n          <i class=\"material-icons\" >exit_to_app</i>\r\n          <!--<i class=\"material-icons lock-icon\" *ngIf=\"!_featureAuthService.features.analytics.spreadsheet\">lock_outline</i>-->\r\n          &nbsp;View Spreadsheet</p>\r\n      </button>\r\n\r\n    </div>\r\n    <div class=\"btn-outer\">\r\n      <og-date-range-picker (date)=\"onDateSelect($event)\" [calc]=\"calc\"></og-date-range-picker>\r\n    </div>\r\n   \r\n  </div>\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 details-mt40 hide\">\r\n    <!--<div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\r\n            <h4><i class=\"material-icons\">people</i> 5</h4>\r\n            <h6>Avg. Referrals Made</h6>\r\n        </div>-->\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\r\n      <h4><i class=\"material-icons\">person_add</i>{{(avgAnswered)?avgAnswered:'--'}}</h4>\r\n      <h6>Avg. Questions Answered</h6>\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\r\n      <h4 id=\"reco-tool\"><i class=\"material-icons\">timeline</i>{{(avgResult)?avgResult:'--'}}\r\n        <div class=\"range-checktip\">{{(calc.templateType=='Numerical')?'This is a rounded off average':'Most Outcome Obtained'}}</div>\r\n      </h4>\r\n      <h6>{{(calc.templateType=='Numerical')?'Avg. Result':'Most Outcome Obtained'}}</h6>\r\n    </div>\r\n    <!--<div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\r\n      <h4><i class=\"material-icons\">public</i>{{(mostViewedOn)?mostViewedOn:'--'}}</h4>\r\n      <h6>Most Viewed On</h6>\r\n    </div>-->\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\r\n      <h4><i class=\"material-icons\">schedule</i>{{(avgLengthTime)?avgLengthTime:'--'}}\r\n        <div class=\"range-checktip\">This is a rounded off average</div>\r\n      </h4>\r\n      <h6>Avg, Length of Visit</h6>\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\r\n      <h4><i class=\"material-icons\">trending_up</i>{{(conversionRate)?conversionRate:'--'}}%</h4>\r\n      <h6>Conversion Rate</h6>\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\r\n      <h4><i class=\"material-icons\">near_me</i>{{(mostViewedVia)?mostViewedVia:'--'}}</h4>\r\n      <h6>Source</h6>\r\n    </div>\r\n  </div>\r\n  \r\n  <p class=\"analytics-upgradeText\" *ngIf=\"!_featureAuthService.features.analytics.user_details\" >\r\n      <i class=\"material-icons lock-icon\">lock_outline</i>\r\n      <span> Your current plan comes with limited access to analytics.  Please upgrade to unlock full access.\r\n      <button type=\"button\" (click)=\"upgrade()\" class=\"btn btn-upgrade\"> Upgrade</button></span>\r\n  </p>\r\n  <div class=\"details-table-outer\" [class.recomtable]=\"calc.templateType=='Recommendation'\">\r\n    <div class=\"table-responsive\" *ngIf=\"!limit_alert\">\r\n      <div [class.hide]=\"lead.toString() == 'false'\">\r\n        <table id=\"lead_Table\" class=\"display table\" cellspacing=\"0\" width=\"100%\">\r\n        </table>\r\n      </div>\r\n      <div [class.hide]=\"lead.toString() == 'true'\">\r\n        <table id=\"engagement_Table\" class=\"display table\" cellspacing=\"0\" width=\"100%\">\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"limit_alert\" class=\"analytics-bottom-popup user-margin\">\r\n      <i class=\"material-icons\">warning</i> You have exceeded the Leads limit for your Plan <br>\r\n      <a href=\"\" [routerLink]=\"['/settings/membership']\">Click here</a> to buy an Addon to unlock the leads for your account.\r\n    </div>\r\n    <div *ngIf=\"limit_alert\" class=\"analytics-overlay\"></div>\r\n  </div>\r\n\r\n</div>\r\n<og-user-details-popup *ngIf=\"visitorKey\" [visitorKey]=\"visitorKey\" [lead]=\"lead.toString()\"></og-user-details-popup>\r\n<div class=\"loader\" *ngIf=\"loader==0\"></div>\r\n"

/***/ }),

/***/ 959:
/***/ (function(module, exports) {

module.exports = "<div class=\"user-detail-outer\">\r\n  <div class=\"top-section\" *ngIf=\"!statsResult\">\r\n    <div class=\"clear-set\"><i class=\"material-icons\">clear</i></div>\r\n    <div class=\"name-circle loading\"></div>\r\n    <div class=\"detail-section\">\r\n      <h4>fetching</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"top-section\" *ngIf=\"statsResult\">\r\n    <div class=\"clear-set\"><i class=\"material-icons\">clear</i></div>\r\n    <div class=\"name-circle\" *ngIf=\"lead.toString() == 'true' && statsResult.leads!=null\">{{(statsResult.leads.fullname)?statsResult.leads.fullname.substr(0, 2):statsResult.leads.firstname.substr(0, 2)}}</div>\r\n    <div class=\"name-circle\" *ngIf=\"lead.toString() == 'false'\">NA</div>\r\n    \r\n    <div class=\"detail-section\">\r\n      <h4 *ngIf=\"statsResult.leads && lead.toString() == 'true'\">{{(statsResult.leads.fullname)?statsResult.leads.fullname:statsResult.leads.firstname}}</h4>\r\n      <h4 *ngIf=\"statsResult.leads && lead.toString() == 'false'\">Not Provided</h4>      \r\n      <h6 *ngIf=\"statsResult.location\">\r\n        <i class=\"material-icons\">room</i> {{statsResult.location}}\r\n      </h6>\r\n\r\n      <span [class.hide]=\"lead.toString() == 'false'\">        \r\n        <h6 *ngIf=\"statsResult.detailData.browser !== '---'\"><i class=\"material-icons\">language</i> Browser : {{statsResult.detailData.browser}}</h6>\r\n        <h6 *ngIf=\"statsResult.detailData.deviceCategory !== '---'\"><i class=\"material-icons\">important_devices</i> Device : {{statsResult.detailData.deviceCategory}}</h6>\r\n        <!--<h6 *ngIf=\"statsResult.detailData.timeOnPage!== '--'\"><i class=\"material-icons\">query_builder</i> Time On Page : {{statsResult.detailData.timeOnPage}}</h6>-->\r\n        <h6 *ngIf=\"statsResult.detailData.socialNetwork !== '---'\"><i class=\"material-icons\">language</i> Source : {{statsResult.detailData.socialNetwork}}</h6>\r\n        <h6 *ngIf=\"statsResult.result\"><i class=\"material-icons\">trending_up</i> Questions Answered : {{statsResult.questionCount}}</h6>\r\n        <h6 *ngIf=\"statsResult.cta\"><i class=\"material-icons\">trending_up</i> Redo Count : {{statsResult.redo_count}}</h6>\r\n      </span>\r\n      <h6 *ngIf=\"statsResult.leads.createdAt\"><i class=\"material-icons\">timer</i> {{time}}</h6>\r\n\r\n      <!--<h6><i class=\"material-icons\">public</i> Chrome</h6>-->\r\n    </div>\r\n  </div>\r\n  <div class=\"mid-section\" *ngIf=\"statsResult && statsResult.stats.length>0\">\r\n    <div class=\"outer-slim\">\r\n      <div class=\"bh\">\r\n        <div class=\"que-outer\" *ngFor=\"let stat of statsResult.stats;let i=index\">\r\n          <div class=\"que-icon-outer\">Q{{i+1}}. </div>\r\n          <div class=\"que-section\">\r\n            <h6 [innerHtml]=\"stat.title\"></h6>\r\n            <h6 class=\"ans\">{{stat.label}}</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ })

});
//# sourceMappingURL=3.bundle.map