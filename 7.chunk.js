webpackJsonp([7,12],{

/***/ 1025:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_marketing_service__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnalyticsComponent; });
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
    function AnalyticsComponent(companyService, _router, _script, _marketingService) {
        this.companyService = companyService;
        this._router = _router;
        this._script = _script;
        this._marketingService = _marketingService;
        this.live_calculators = [];
        this.analytic_component = '';
        this.company_id = localStorage.getItem('company');
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
    AnalyticsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._script.load('gCharts', 'jqueryUI', 'raphael', 'morrisCharts', 'datatables', 'daterangepicker')
            .then(function (data) {
            console.log('Scripts Loaded', data);
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
                _this.calc_id = response[0].parentApp;
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
        jQuery('.slimscroll').slimscroll({
            railVisible: true,
            alwaysVisible: true
        });
    };
    AnalyticsComponent.prototype.onAnalyticTypeSelect = function (type) {
        this.analytic_component = type;
    };
    AnalyticsComponent.prototype.onCalcSelect = function (calc) {
        this.calculator = calc;
        this.calc_id = calc.parentApp;
        this.calc_name = calc.name;
        this.activeSince = moment(calc.createdAt).fromNow().replace('ago', '').trim();
        this.isActive = calc.mode == 'PUBLIC';
    };
    AnalyticsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-analytics',
            template: __webpack_require__(1159),
            styles: [
                __webpack_require__(915),
                __webpack_require__(914)
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* CompanyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["c" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["c" /* Script */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_marketing_service__["a" /* MarketingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_marketing_service__["a" /* MarketingService */]) === 'function' && _d) || Object])
    ], AnalyticsComponent);
    return AnalyticsComponent;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 1159:
/***/ function(module, exports) {

module.exports = "<sd-toolbar [page]=\"'analytics'\"></sd-toolbar>\r\n<div class=\"preloader\" *ngIf=\"!calc_id\">\r\n  <div class=\"status\">&nbsp;</div>\r\n</div>\r\n\r\n<div *ngIf=\"calc_id!='null'\">\r\n  <!-- Analytics Section -->\r\n  <div class=\"analytics-top-outer\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-top-inner\">\r\n      <h6>Showing analytics for </h6>\r\n      <h4>{{calc_name}}\r\n        <div class=\"btn-group company-dropdown-wrapper\">\r\n          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"material-icons\" *ngIf=\"live_calculators.length>1\">keyboard_arrow_down</i>\r\n          </button>\r\n          <ul class=\"dropdown-menu \">\r\n            <div class=\"company-dropdown-main\">\r\n              <div class=\"company-dropdown-list\" [class.scrollbar]=\"live_calculators.length > 5\">\r\n                <li *ngFor=\"let calc of live_calculators, let i = index\">\r\n                  <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"onCalcSelect(calc)\">\r\n                    <div class=\"company-block\">\r\n                      <span class=\"company-block-inner\">{{calc.name.charAt(0)}}</span>\r\n                    </div>\r\n                    <div class=\"company-block-content\">\r\n                      <span class=\"company-title ellipsis\">{{calc.name}}</span>\r\n                      <span class=\"company-site ellipsis hide\">{{calc.url}}</span>\r\n                    </div>\r\n                  </a>\r\n                </li>\r\n              </div>\r\n            </div>\r\n          </ul>\r\n        </div>\r\n      </h4>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-mid-inner\">\r\n            <span class=\"active-outer\" *ngIf=\"isActive\">\r\n                <i class=\"material-icons\">check_circle</i>\r\n                Active (since {{activeSince}})\r\n            </span>\r\n      <span class=\"active-outer\" *ngIf=\"!isActive\">\r\n                <i class=\"material-icons\" style=\"color:red;\">check_circle</i>\r\n                Not Active\r\n            </span>\r\n      <!--<a class=\"preview-outer\" href=\"#\"><i class=\"material-icons\">launch</i> Preview Calculator</a>-->\r\n    </div>\r\n  </div>\r\n  <!-- Start: wrapper -->\r\n  <section class=\"wrapper\" *ngIf=\"calc_id\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n      <!-- Start: Left Sidebar -->\r\n      <div class=\"left-sidebar analytics-left-side col-md-3 col-sm-3 col-xs-3 np\">\r\n        <div id=\"\" class=\"tabbable tabs-left\">\r\n          <ul>\r\n            <li class=\"active\">\r\n              <a href=\"#overview\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('overview')\">\r\n                                <span class=\"left-sidebar-icon\">\r\n                                    <i class=\"material-icons\">dialpad</i>\r\n                                </span>\r\n                <div class=\"left-sidebar-title\">\r\n                  <h6 class=\"\">Overview</h6>\r\n                  <span class=\"\">Get an overview of your visitors and conversions.</span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li class=\"\">\r\n              <a href=\"#person\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('details')\">\r\n                                <span class=\"left-sidebar-icon\">\r\n                                    <i class=\"material-icons\">person</i>\r\n                                </span>\r\n                <div class=\"left-sidebar-title\">\r\n                  <h6 class=\"\">User Details</h6>\r\n                  <span class=\"\">See detailed analytics and user responses.</span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li class=\"\">\r\n              <a href=\"#traffic\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('traffic')\">\r\n                                <span class=\"left-sidebar-icon noti-icon\">\r\n                                    <i class=\"material-icons\">traffic</i>\r\n                                </span>\r\n                <div class=\"left-sidebar-title\">\r\n                  <h6 class=\"\">Traffic Details</h6>\r\n                  <span class=\"\">Get deeper insights about your calculator's traffic data.</span>\r\n                </div>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <!-- End: Left Sidebar -->\r\n      <!-- Start: wrapper content -->\r\n      <div class=\"wrapper-content col-md-9 col-sm-9 col-xs-9 analytics-mt0\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n          <div class=\"tab-content tabs-wrapper col-md-12 col-sm-12 col-xs-12 np\">\r\n            <!-- Start: overview (1) -->\r\n            <og-overview *ngIf=\"analytic_component === 'overview'\" [calc]=\"calculator\"></og-overview>\r\n            <!-- End: overview (1) -->\r\n            <!-- Start: person (2) -->\r\n            <og-user-details *ngIf=\"analytic_component === 'details'\"  [calc]=\"calculator\"></og-user-details>\r\n            <!-- End: person (2) -->\r\n            <!-- Start: traffic (3) -->\r\n            <og-traffic-details *ngIf=\"analytic_component === 'traffic'\" [calc]=\"calculator\"></og-traffic-details>\r\n            <!-- End: traffic (3) -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- End: wrapper content -->\r\n    </div>\r\n  </section>\r\n  <!-- End: wrapper -->\r\n</div>\r\n\r\n<div *ngIf=\"calc_id=='null'\">\r\n  <div class=\"analytics-top-outer\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-top-inner\">\r\n      <!--<h6>Showing analytics for </h6>-->\r\n      <h4>No Live Calculator</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12 analytics-bottom-dummy\">\r\n    <div class=\"col-xs-12 col-sm-12\">\r\n      <div class=\"analytics-bottom-popup\">\r\n        <i class=\"material-icons\">grid_off</i>\r\n        There are no calculators which are live and hence there will be no data to display\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 782:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__analytics_component__ = __webpack_require__(1025);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_utilities_module__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__analyticsChild_module__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toolbar_toolbar_module__ = __webpack_require__(410);
/* harmony export (binding) */ __webpack_require__.d(exports, "AnalyticsModule", function() { return AnalyticsModule; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__analytics_component__["a" /* AnalyticsComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(ANALYTIC_ROUTES), __WEBPACK_IMPORTED_MODULE_4__shared_modules_utilities_module__["a" /* UtilitiesModule */], __WEBPACK_IMPORTED_MODULE_5__analyticsChild_module__["a" /* AnalyticsChildModule */], __WEBPACK_IMPORTED_MODULE_6__toolbar_toolbar_module__["a" /* ToolbarModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AnalyticsModule);
    return AnalyticsModule;
}());


/***/ },

/***/ 807:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
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

/***/ 891:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_components_analytics_components_date_range_picker_date_range_picker_component__ = __webpack_require__(901);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UtilitiesModule; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__site_components_analytics_components_date_range_picker_date_range_picker_component__["a" /* DateRangePickerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__site_components_analytics_components_date_range_picker_date_range_picker_component__["a" /* DateRangePickerComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], UtilitiesModule);
    return UtilitiesModule;
}());


/***/ },

/***/ 901:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DateRangePickerComponent; });
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
        this.date = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    DateRangePickerComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        // TODO error in these two functions so commented it.
        //Data range Picker
        jQuery('.input-daterange-datepicker').daterangepicker({
            buttonClasses: ['btn', 'btn-sm'],
            applyClass: 'btn-danger',
            cancelClass: 'btn-inverse',
            startDate: moment().subtract(10, 'days').calendar()
        });
        //On Date Apply
        jQuery('.input-daterange-datepicker').on('apply.daterangepicker', function (ev, picker) {
            self.date.emit({
                start_date: picker.startDate.format('YYYY-MM-DD'),
                end_date: picker.endDate.format('YYYY-MM-DD')
            });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]) === 'function' && _a) || Object)
    ], DateRangePickerComponent.prototype, "date", void 0);
    DateRangePickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-date-range-picker',
            template: __webpack_require__(905),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], DateRangePickerComponent);
    return DateRangePickerComponent;
    var _a;
}());


/***/ },

/***/ 905:
/***/ function(module, exports) {

module.exports = "<div class=\"dp-outer \">\r\n\t<i class=\"material-icons icon-left\">date_range</i>\r\n\t<input class=\"input-daterange-datepicker datepicker-outer\" type=\"text\" name=\"daterange\" />\r\n\t<i class=\"material-icons icon-right\">keyboard_arrow_down</i>\r\n</div>\r\n"

/***/ },

/***/ 908:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calculator_analytics_service__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_overview_overview_component__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_details_user_details_component__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_traffic_details_traffic_details_component__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_details_popup_user_details_popup_component__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_modules_utilities_module__ = __webpack_require__(891);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnalyticsChildModule; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__components_overview_overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_4__components_user_details_user_details_component__["a" /* UserDetailsComponent */], __WEBPACK_IMPORTED_MODULE_5__components_traffic_details_traffic_details_component__["a" /* TrafficDetailsComponent */], __WEBPACK_IMPORTED_MODULE_6__components_user_details_popup_user_details_popup_component__["a" /* UserDetailsPopupComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_7__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_8__shared_modules_utilities_module__["a" /* UtilitiesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__components_overview_overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_4__components_user_details_user_details_component__["a" /* UserDetailsComponent */], __WEBPACK_IMPORTED_MODULE_5__components_traffic_details_traffic_details_component__["a" /* TrafficDetailsComponent */], __WEBPACK_IMPORTED_MODULE_6__components_user_details_popup_user_details_popup_component__["a" /* UserDetailsPopupComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AnalyticsChildModule);
    return AnalyticsChildModule;
}());


/***/ },

/***/ 909:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(807);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OverviewComponent; });
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
    function OverviewComponent(_calcAnalytics) {
        this._calcAnalytics = _calcAnalytics;
        this.postData = {
            start_date: new Date(moment().subtract(10, 'days').format('YYYY-MM-DD')).toISOString().substr(0, 10),
            end_date: new Date(moment().add(1, 'day').format('YYYY-MM-DD')).toISOString().substr(0, 10)
        };
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
                _this.stats = {
                    uniqueVisitors: response[0][1],
                    visitors: response[0][2],
                    timeOnPage: (response[0][3] > 60) ? (response[0][3] / 60).toFixed(2) + ' min' : response[0][3].toFixed(2) + ' sec',
                    conversions: response[0][4],
                    conversionRate: (response[0][1] && response[0][4]) ? ((response[0][4] / response[0][1]) * 100).toFixed(2) : '0',
                    avgResponse: response[0][5],
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
                    avgResponse: '0'
                };
            }
        }, function (error) {
            //this.geoLoader = 'Something Went Wrong !';
        });
    };
    OverviewComponent.prototype.onDateSelect = function (date) {
        this.start_date = date.start_date;
        this.end_date = date.end_date;
        this.postData.start_date = new Date(date.start_date).toISOString().substr(0, 10);
        this.postData.end_date = new Date(moment(new Date(date.end_date)).add(1, 'day').format('YYYY-MM-DD')).toISOString().substr(0, 10);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], OverviewComponent.prototype, "calc", void 0);
    OverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-overview',
            template: __webpack_require__(916),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object])
    ], OverviewComponent);
    return OverviewComponent;
    var _a;
}());


/***/ },

/***/ 910:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TrafficDetailsComponent; });
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
        this.postData = {
            start_date: new Date(moment().subtract(10, 'days').format('YYYY-MM-DD')).toISOString().substr(0, 10),
            end_date: new Date(moment().add(1, 'day').format('YYYY-MM-DD')).toISOString().substr(0, 10)
        };
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
        this.postData.start_date = new Date(date.start_date).toISOString().substr(0, 10);
        this.postData.end_date = new Date(moment(new Date(date.end_date)).add(1, 'day').format('YYYY-MM-DD')).toISOString().substr(0, 10);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], TrafficDetailsComponent.prototype, "calc", void 0);
    TrafficDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-traffic-details',
            template: __webpack_require__(917),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* CookieService */]) === 'function' && _b) || Object])
    ], TrafficDetailsComponent);
    return TrafficDetailsComponent;
    var _a, _b;
}());


/***/ },

/***/ 911:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserDetailsComponent; });
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
        // dataSet: any[] = [];
        this.avgAnswered = 0;
        this.avgResult = 0;
        this.totalTime = 0;
        this.limit_alert = false;
        this.loader = 1;
        this.postData = {
            start_date: moment().subtract(10, 'days').format('YYYY-MM-DD'),
            end_date: moment().add(1, 'day').format('YYYY-MM-DD')
        };
        this.viewedOnStats = {
            desktop: 0,
            mobile: 0
        };
        this.viewedViaStats = {
            facebook: 0,
            twitter: 0,
            direct: 0
        };
        this.subs = [];
    }
    UserDetailsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        jQuery(document).on('click', '.vd', function (event) {
            self.visitorKey = jQuery(event.target).data('key');
            // Slide right
            event.stopPropagation();
            setTimeout(function () {
                _this.cdr.detectChanges();
                jQuery('.user-detail-outer').fadeIn();
            }, 100);
        });
        this.intializeDatatable();
    };
    UserDetailsComponent.prototype.checkLeadsLimit = function () {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var company = storage.company;
        this.limit_alert = company.current_limit.leads === -1 || company.current_limit.leads > company.current_usage.leads ? false : true;
        //this.limit_alert  = true;
    };
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.checkLeadsLimit();
    };
    // initializeViewDetails() {
    //   jQuery('.vd').unbind().bind('click', (event: any) => {
    //     this.visitorKey = jQuery(event.target).data('key');
    //     // Slide right
    //     jQuery('.user-detail-outer').toggle('slide', { direction: 'right' }, 700);
    //   });
    // }
    UserDetailsComponent.prototype.ngOnChanges = function () {
        if (this.calc) {
            if (this.calc.liveApp)
                this.calc_id = this.calc._id;
            else
                this.calc_id = this.calc.parentApp;
            this.intializeDatatable();
            this.loader = 0;
        }
    };
    // getLeadData(id: any) {
    //   /* get leads of user on page */
    //   return this._calculatorAnalytics.getLeads({ id: id, date: this.postData })
    //     .subscribe(
    //     (response: any) => {
    //       this.dataSet = response.data;
    //       //this.limit_alert = response.limit_cross;
    //       this.avgAnswered = Math.round(response.avgAnswers);
    //       this.avgResult = response.avgResult;
    //       /* -- */
    //       this.dataSet = this.dataSet.map(data => {
    //         this.subs.push(this.getAnalyticData(data));
    //         data.shift();
    //         return data;
    //       });
    //       this.intializeDatatable();
    //     },
    //     (error: any) => {
    //       console.log(error);
    //     }
    //     );
    // }
    // getAnalyticData(lead: any[]) {
    //   this.postData.type = 'leadStats';
    //   this.postData.calc_id = lead[0];
    //   return this._calculatorAnalytics.getTrafficStats(this.postData)
    //     .subscribe(
    //     (response: any[]) => {
    //       if (response.length) {
    //         lead[4] = (response[0][4] > 60) ? (response[0][4] / 60).toFixed(2) + ' m' : response[0][4] + ' s';
    //         lead[3] = response[0][3];
    //         lead[5] = (response[0][2] == '(not set)' ? 'direct' : response[0][2]);
    //         //avg time
    //         this.totalTime += Number(response[0][4]);
    //         let avgTime: number = this.totalTime / this.dataSet.length;
    //         this.avgLengthTime = (avgTime > 60) ? (avgTime / 60).toFixed(2) + ' m' : avgTime.toFixed(2) + ' s';
    //         //other stats
    //         this.viewedOnStats[response[0][3]] += 1;
    //         this.viewedViaStats[response[0][2] == '(not set)' ? 'direct' : response[0][2]] += 1;
    //         this.mostViewedVia = Object.keys(this.viewedViaStats).reduce((a: any, b: any) => this.viewedViaStats[a] > this.viewedViaStats[b] ? a : b);
    //         this.mostViewedOn = Object.keys(this.viewedOnStats).reduce((a: any, b: any) => this.viewedOnStats[a] > this.viewedOnStats[b] ? a : b);
    //         //reinit data table
    //         //this.intializeDatatable();
    //         // this.geoLoader = 'done';
    //       } else {
    //         lead[3] = lead[4] = lead[5] = 'Not Available';
    //         // this.geoLoader = 'No Data Available !';
    //       }
    //     },
    //     (error: any) => {
    //       // this.geoLoader = 'Something Went Wrong !';
    //     }
    //     );
    // }
    UserDetailsComponent.prototype.avgAnalyticsData = function (data) {
        var _this = this;
        if (data.length) {
            data.map(function (response) {
                _this.totalTime = 0;
                if (response[4] != '--' || response[5] != '--' || response[6] != '--' || response[7] != '--') {
                    //avg time
                    // this.totalTime += Number(response[9]);
                    // let avgTime: number = this.totalTime / data.length;
                    //this.avgLengthTime = (avgTime > 60) ? (avgTime / 60).toFixed(2) + ' m' : avgTime.toFixed(2) + ' s';
                    _this.viewedOnStats[response[5]] += 1;
                    _this.viewedViaStats[response[7] == '(not set)' ? 'direct' : response[7]] += 1;
                    _this.mostViewedVia = Object.keys(_this.viewedViaStats).reduce(function (a, b) { return _this.viewedViaStats[a] > _this.viewedViaStats[b] ? a : b; });
                    _this.mostViewedOn = Object.keys(_this.viewedOnStats).reduce(function (a, b) { return _this.viewedOnStats[a] > _this.viewedOnStats[b] ? a : b; });
                }
            });
        }
        else {
            this.mostViewedVia = '--';
            this.mostViewedOn = '--';
            this.avgLengthTime = '--';
        }
    };
    UserDetailsComponent.prototype.intializeDatatable = function () {
        console.log('test init');
        var self = this;
        this.dataTableRef = jQuery('#myTable').DataTable({
            "processing": true,
            "destroy": true,
            "serverSide": true,
            "paging": true,
            "pageLength": 10,
            "ajax": {
                "url": __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API + "/analytic/get_leads",
                "type": "POST",
                "data": { id: self.calc_id, start_date: this.postData.start_date, end_date: this.postData.end_date },
                "dataSrc": function (response) {
                    self.avgAnswered = Math.round(response.avgAnswers);
                    self.avgResult = response.avgResult;
                    self.avgLengthTime = (Number(response.avgTimeOnPage) > 60) ? Number(response.avgTimeOnPage / 60).toFixed(2) + ' m' : Number(response.avgTimeOnPage).toFixed(2) + ' s';
                    self.loader = 1;
                    self.avgAnalyticsData(response.data);
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
                { title: 'Name' },
                { title: 'Email' },
                { title: 'Questions Answered' },
                { title: (self.calc.templateType == 'Numerical') ? 'Result Obtained' : 'Outcome Obtained' },
                { title: 'Visited From' },
                { title: 'Visited On' },
                { title: 'Length of Visit' },
                { title: 'Visited Via' },
                { title: 'View Details' },
                { title: 'Time' }
            ]
        });
        // this.dataTableRef.clear();
        // //this.dataTableRef.rows.add(this.dataSet);
        // this.dataTableRef.draw();
        this.dataTableRef.column(4).visible(false);
        this.dataTableRef.column(9).visible(false);
    };
    UserDetailsComponent.prototype.onDateSelect = function (date) {
        this.postData.start_date = new Date(date.start_date).toISOString().substr(0, 10);
        this.postData.end_date = new Date(moment(new Date(date.end_date)).add(1, 'day').format('YYYY-MM-DD')).toISOString().substr(0, 10);
        //refresh stats
        if (this.calc_id) {
            this.intializeDatatable(); //this.subs.push(this.getLeadData(this.calc_id));
        }
    };
    UserDetailsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    UserDetailsComponent.prototype.unsubscribe = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], UserDetailsComponent.prototype, "calc", void 0);
    UserDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-user-details',
            template: __webpack_require__(918),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* FeatureAuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* CookieService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ChangeDetectorRef */]) === 'function' && _d) || Object])
    ], UserDetailsComponent);
    return UserDetailsComponent;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 912:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(807);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserDetailsPopupComponent; });
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
        this._calculatorAnalytics.getStats({ key: this.visitorKey, answered: true })
            .subscribe(function (response) {
            /** intialize data table */
            _this.statsResult = response;
            var heightWindow = jQuery(window).height() - 153;
            setTimeout(function () {
                jQuery('.outer-slim').slimScroll({
                    height: heightWindow
                });
            }, 500);
            _this.cdr.detectChanges();
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], UserDetailsPopupComponent.prototype, "visitorKey", void 0);
    UserDetailsPopupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-user-details-popup',
            template: __webpack_require__(919),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ChangeDetectorRef */]) === 'function' && _b) || Object])
    ], UserDetailsPopupComponent);
    return UserDetailsPopupComponent;
    var _a, _b;
}());


/***/ },

/***/ 914:
/***/ function(module, exports) {

module.exports = ".analytics-top-outer{ float:left; width:100%; background:url('/assets/images/analytics/analytics-img.jpg')no-repeat; min-height:160px; /* margin-top:72px;  */-webkit-background-size: cover; -moz-background-size: cover;  -o-background-size: cover;  background-size: cover; position:relative; z-index: 10;}\r\n.analytics-top-inner{ margin-top:3%;  }\r\n.analytics-top-inner h6{ color:#c4c4c1; font-size:14px; font-family:montserratregular; padding-left:10px;}\r\n.analytics-top-inner h4{ color:#f56151; font-size:24px; font-family:montserratregular; text-transform:uppercase;padding-left:10px;}\r\n.analytics-top-inner h4 i{color:#f87b80;}\r\n.analytics-mid-inner{ margin-top:10px;  text-align:right; padding-right:46px; font-size:14px; color:#fff; }\r\n.analytics-mid-inner .preview-outer{ position: relative;color: #fff; padding-left: 18px; margin-left: 10px; }\r\n.analytics-mid-inner .preview-outer i{  font-size: 14px;color: #999 !important; position: absolute;left: 0px;top: 2px; }\r\n.analytics-mid-inner .preview-outer:hover{color:#ccc;}\r\n.analytics-mid-inner .active-outer{ position: relative;color: #fff; padding-left: 18px; margin-left: 10px; }\r\n.analytics-mid-inner .active-outer i{  font-size: 14px;color: #1fde2d; position: absolute;left: 0px;top: 2px; }\r\n.analytics-left-side{ position:absolute; top:0 !important; height: 100%;}\r\n.analytics-mt0{ margin-top:0 !important;}\r\n.user-detail-outr{padding: 30px;}\r\n.traffic-outr{padding: 0 30px;}\r\n.analytics-mt20{ margin-top:20px !important;}\r\n.analytics-box-outer{ float:left; border:1px solid #dae2e6; padding:10px; margin-left:4.16%; background: #fff;}\r\n.analytics-box-outer:first-child{ float:left; border:1px solid #dae2e6; padding:10px; margin-left:0px; background: #fff;}\r\n.analytics-box-outer h6{ float:left; font-size:10px; color:#8c9194;font-family:montserratregular !important; padding-left:18px; position:relative; margin-top:0; margin-bottom:5px; width:100%; text-transform:uppercase; }\r\n.analytics-box-outer h6 i{ font-size: 14px; position: absolute;left: 0;top: -2px;}\r\n.analytics-box-outer h4{ float:left; font-size:24px; color:#62696d;font-family:montserratregular !important;  position:relative; margin-top:0; margin-bottom:5px; width:100%; }\r\n.dp-outer{ position:relative; width:205px; float:right; z-index:0; margin-right: 30px;}\r\n.datepicker-outer{ border: 2px solid #fb545b; width:100%; padding:4px 10px 4px 28px; float:right; color:#636f76; z-index:9; background:none; cursor:pointer; font-size: 13px; }\r\n.datepicker-outer:focus{ outline:none !important; }\r\n.datepicker-outer.datepicker{ padding:4px 10px 4px 30px !important;}\r\n.dp-outer .icon-left{ position: absolute;font-size: 14px;top: 8px;z-index: -1;left: 9px; color:#bec5c9; }\r\n.dp-outer .icon-right{ position: absolute; right: 5px;top: 9px;font-size: 16px; z-index:-1; color:#bec5c9;}\r\n.details-heading{ font-size:24px; font-family:montserratlight; color:#636f76;width: auto;\r\n    float: left;\r\n    margin-left: 30px;}\r\n.details-box-outer:first-child{margin-left: 0px;}\r\n.details-box-outer{ float:left; border:1px solid #dae2e6; padding:15px 7px; position:relative;  background: #fff; margin-left: 4.16%;}\r\n.details-box-outer:last-child{}\r\n.details-mt20{ margin-top:20px;    padding: 0 30px;}\r\n.details-box-outer h4{margin:0; font-size:18px; padding-left:30px;float:left; width:100%; font-family:montserratregular; white-space: nowrap; overflow: hidden;text-overflow: ellipsis;}\r\n.details-box-outer h4 i{position:absolute;left: 7px; font-size: 21px; color:#269fd8;}\r\n.details-box-outer h6{margin:0; font-size:10px; color:#8c9194; float:left; font-family:montserratregular; text-transform:uppercase; margin-top:5px; margin-left: 30px;}\r\n\r\n.details-box-outer h4:hover > .range-checktip {\r\n    visibility: visible;\r\n    z-index: 999;\r\n}\r\n.details-box-outer h4 .range-tip {\r\n    margin: 1px 7px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    position: relative;\r\n    margin: 0px;\r\n    cursor: default;\r\n}\r\n.details-box-outer h4 .range-tip i {\r\n    color: #8e989f;\r\n    font-size: 13px;\r\n    line-height: 17px;\r\n    cursor: pointer;\r\n    opacity: 0.8;\r\n}\r\n.details-box-outer h4 .range-tip:hover i {\r\n    color: #f87b80;\r\n}\r\n.range-tip:hover > .range-checktip {\r\n    visibility: visible;\r\n    z-index: 999;\r\n}\r\n.details-box-outer h4 .range-checktip {\r\n    float: left;\r\n    background-color: #61696C;\r\n    color: #fff;\r\n    padding: 5px;\r\n    width: 180px;\r\n    font-size: 11px;\r\n    position: absolute;\r\n    top: -19px;\r\n    border-radius: 0px;\r\n    visibility: hidden;\r\n    box-shadow: 0 3px 7px 0px #919191;\r\n    text-align: center;\r\n    left: 35px;\r\n    line-height: 1.42857143;\r\n    text-transform: none;\r\n}\r\n.details-box-outer h4 .range-checktip:before {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: -40%;\r\n    left: 50%;\r\n    margin-left: -8px;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-top: 6px solid #61696C;\r\n    border-left: 6px solid transparent;\r\n    border-right: 6px solid transparent;\r\n}\r\n\r\n\r\n\r\n.details-table-outer{ float:left; margin-top:30px;    width: 100%;\r\n    padding: 0 30px;}\r\n.details-table-outer table {margin-bottom:30px;}\r\n.details-table-outer table tr th{ font-size:10px; color:#6c7377; font-family:montserratregular; text-transform:uppercase; font-weight:normal; text-align:right;}\r\n.details-table-outer table thead tr:hover{ background:none!important;}\r\n.details-table-outer table thead select{padding: 0;border: none;text-transform: uppercase;font-size: 12px; outline:none; color:#fb5f66 ; border: 1px solid #ccc; padding: 5px;}\r\n.details-table-outer table tr.blue-border{border-bottom:2px solid #269fd8 }\r\n.details-table-outer table tr:hover{background:#f8fafa; }\r\n.details-table-outer table tr td{border-bottom:1px solid #dae2e6; }\r\n.details-table-outer table tr td{color:#62696d; font-size:13px; font-weight:normal; font-family:montserratregular; text-align:right;}\r\n.details-table-outer table tr td:first-child{color:#bec5c9; font-size:13px; font-weight:normal; font-family:montserratregular; text-align:left; padding: 15px 10px; background: #fff;font-style: italic;}\r\n.details-table-outer table tr td.link{color:#fb545b; font-size:13px; font-weight:normal; font-family:montserratregular; text-align:right;}\r\n.details-table-outer table tr.date-outer td{border-bottom:1px solid #fff; color:#269fd8; font-family:montserratlight; font-size:16px; border-top:2px solid #269fd8 }\r\n.details-table-outer table tr.date-outer:hover{background:none;}\r\n.details-table-outer table tr td:last-child a{color:#fb545b; font-size:11px; cursor: pointer;}\r\n.details-table-outer .pagination li a{ border:none; color:#fb5f66;}\r\n.details-table-outer .pagination li a:hover{color:#62696d;background:none;}\r\n.details-table-outer .pagination li a:focus{color:#62696d;background:none;}\r\n.details-table-outer .dataTables_paginate{ width: 100%; text-align: center;}\r\n\r\n.recomtable th.sorting:nth-child(3) { text-align: left;padding: 10px 10px;}\r\n.recomtable tr td:nth-child(3) { text-align: left; }\r\n\r\n\r\n\r\n.traffic-graph-outer{ border:1px solid #dae2e6; padding:20px; float:left; width: 100%; min-height:225px; position:relative; margin-top:30px;}\r\n.traffic-graph-outer h4{ font-family:montserratlight !important; font-size:18px; float:left; width:100%; margin-top:0; color:#62696d; }\r\n.traffic-graph-outer h6 { color:#8c9194; font-size:11px; font-family:montserratregular; float:left; text-transform:uppercase; width:100%; margin-bottom:5px;}\r\n.traffic-graph-outer h6 span.red{ float:left; background:#fb545b; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px;}\r\n.traffic-graph-outer h6 span.green{ float:left; background:#50d650; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px;}\r\n.traffic-graph-outer h6 span.sky{ float:left; background:#69d2e7; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px;}\r\n.traffic-graph-outer h6 span.orange{ float:left; background:#f38630; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px;}\r\n.traffic-graph-outer h6 span.ex-light-green{ float:left; background:#e0e4cc; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px;}\r\n.chart-position{ position:absolute;position: absolute;top: -70px;left: -20px;}\r\n\r\n.traffic-graph-height{ min-height: 225px !important;}\r\n\r\n/*date rangepicker css*/\r\n.daterangepicker.dropdown-menu {right: 28px !important; width:492px !important;}\r\n.daterangepicker.opensright:before {right: 40px !important; }\r\n.daterangepicker.opensright:after{right: 41px !important; }\r\n.daterangepicker .ranges {margin: 4px;text-align: right !important;width: 98%;}\r\n.btn-danger { margin-right: 5px;}\r\n/*date rangepicker end css*/\r\n\r\n/*data table css*/\r\n.dataTables_length{ display:none;}\r\n.dataTables_filter{ display:none;}\r\n.dataTables_info{ display:none;}\r\n.first, .last{ display:none;}\r\n.dataTables_paginate{ text-align:center; margin-bottom:20px;}\r\n.dataTables_paginate a{ margin:10px; color:#fb5f66; cursor:pointer; }\r\n.dataTables_paginate a:focus{color:#62696d;background:none;}\r\n/*data table css end*/\r\n\r\n.user-detail-outer{position:fixed; width:325px; background:#fff;  z-index:9999;  right:0; top:0; height:100vh; -webkit-box-shadow: -6px 3px 20px -6px rgba(0,0,0,0.75);-moz-box-shadow: -6px 3px 20px -6px rgba(0,0,0,0.75);box-shadow: -6px 3px 20px -6px rgba(0,0,0,0.75); display:none;   }\r\n.user-detail-outer .top-section{ float:left; width:100%; padding:25px; border-bottom:2px solid #dae2e6; position: relative;}\r\n.user-detail-outer .top-section .name-circle{ float:left; width:35px; height:35px; background:#fb5f66; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; text-align:center; text-transform:uppercase;\r\nfont-size:12px; font-family:montserratregular; color:#fff; padding-top:9px; }\r\n.user-detail-outer .top-section .detail-section{ float:left; width:80%; margin-left:10px;}\r\n.user-detail-outer .top-section .detail-section h4{ float:left; width:100%; font-size:16px; margin-bottom:0;}\r\n.user-detail-outer .top-section .detail-section h6{ float:left; width:100%; font-size:11px; font-family:montserratregular; color:#8e989f; margin-bottom:0; position:relative; padding-left:20px;}\r\n.user-detail-outer .top-section .detail-section h6 i{position:absolute; top:0; font-size:14px; left:0; color:#bec5c9;}\r\n.user-detail-outer .mid-section{ float:left; width:100%; padding:25px; padding-right: 5px;}\r\n.user-detail-outer .mid-section .que-outer{ float:left; width:100%;}\r\n.user-detail-outer .mid-section .que-icon-outer{ float:left; width:35px; color:#bec5c9;}\r\n.user-detail-outer .mid-section .que-icon-outer i{ font-size:30px;}\r\n.user-detail-outer .mid-section .que-section { float:left; width:86%; margin-bottom:20px; }\r\n.user-detail-outer .mid-section .que-section h6{float:left; font-size:12px; font-family:montserratlight !important; width:100%; margin-top:0; line-height:20px;}\r\n.user-detail-outer .mid-section .que-section h6.ans{float:left; font-size:12px; font-family:montserratregular !important; width:100%; margin-top:0; line-height:20px; color:#62696d;}\r\n/* .user-detail-outer .mid-section .slimScrollDiv{height: 600px !important;}\r\n.user-detail-outer .mid-section .outer-slim{height: 600px !important;} */\r\n.user-detail-outer .mid-section .outer-slim .bh{float: left;}\r\n.user-detail-outer .clear-set{ position: absolute; top: 10px; cursor: pointer; right: 7px;}\r\n.graph-val{ color:#8c9194; font-size:11px; font-family:montserratregular; float:left; text-transform:uppercase; margin-bottom:5px;  margin-top:5px; margin-left:30px;}\r\n.graph-val span.red{ float:left; background:#fb545b; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px; margin-top:2px; }\r\n.graph-val span.blue{ float:left; background:#269fd8; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px; margin-top:2px; }\r\n\r\n.morris-hover{position:absolute;z-index:1000}.morris-hover.morris-default-style{border-radius:10px;padding:6px;color:#666;background:rgba(255,255,255,0.8);border:solid 2px rgba(230,230,230,0.8);font-family:sans-serif;font-size:12px;text-align:center}.morris-hover.morris-default-style .morris-hover-row-label{font-weight:bold;margin:0.25em 0}\r\n.morris-hover.morris-default-style .morris-hover-point{white-space:nowrap;margin:0.1em 0}\r\n\r\n.analytics-top-outer .company-dropdown-wrapper .dropdown-menu { z-index: 999 !important; min-width: 260px;}\r\n\r\n/*loader css*/\r\n.dark-loader-outer{width: 100%;height: 100%;background: #fff; position: absolute;top: 0; left: 0; padding:30px; text-align:center;}\r\n.traffic1{\r\n    background: url(/assets/images/analytics/traffic1.jpg)no-repeat !important;\r\n    background-color: #fff;\r\n    background-position: center center;\r\n    display: table;\r\n    height: 223px !important;\r\n}\r\n.traffic1 p{\r\n    color: #269fd8;\r\n    font-style: italic;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.traffic2{\r\n    background: url(/assets/images/analytics//traffic2.jpg)no-repeat !important;\r\n    background-color: #fff;\r\n    background-position: center center;\r\n    display: table;\r\n    height: 223px !important;\r\n}\r\n.traffic2 p{\r\n    color: #269fd8;\r\n    font-style: italic;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.traffic3{\r\n    background: url(/assets/images/analytics/traffic3.jpg)no-repeat !important;\r\n    background-color: #fff;\r\n    background-position: center center;\r\n    display: table;\r\n    height: 223px !important;\r\n}\r\n.traffic3 p{\r\n    color: #269fd8;\r\n    font-style: italic;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.traffic4{\r\n    background: url(/assets/images/analytics/traffic4.jpg)no-repeat !important;\r\n    background-color: #fff;\r\n    background-position: center center;\r\n    display: table;\r\n    height: 223px !important;\r\n}\r\n.traffic4 p{\r\n    color: #269fd8;\r\n    font-style: italic;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.light-loader-outer{width: 100%;height: 100%;background: #fff; position: absolute;top: 0; left: 0; padding:30px; text-align:center; opacity:0.9;}\r\n.loader {border: 5px solid #f3f3f3;border-radius: 50%; border-top: 5px solid #fb545b;width: 50px;height: 50px;-webkit-animation: spin 2s linear infinite; animation: spin 2s linear infinite; position:absolute; left:44%; top:39%;}\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n.light-loader-outer .icon-link i{ font-size:18px; cursor:pointer; position:absolute; right:10px; top:10px;color: #bec5c9; }\r\n\r\n/* Preloader */\r\n\r\n.preloader {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #fff;\r\n    /* change if the mask should be a color other than white */\r\n    z-index: 9999;\r\n    /* makes sure it stays on top */\r\n}\r\n\r\n.status {\r\n    width: 200px;\r\n    height: 200px;\r\n    position: absolute;\r\n    left: 50%;\r\n    /* centers the loading animation horizontally on the screen */\r\n    top: 50%;\r\n    /* centers the loading animation vertically on the screen */\r\n    background-image: url(\"assets/images/loaders/logoAnim.gif\");\r\n    /* path to your loading animation */\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    margin: -100px 0 0 -100px;\r\n    /* is width and height divided by two */\r\n}\r\n\r\n.wrapper-content.pb30{ padding-bottom: 30px;}\r\n.chart-position{position: absolute;top: -20px;left: -329px;}\r\n.traffic-graph-outer{background: #fff;min-height:270px;overflow:hidden !important;}\r\n\r\n/*Analytic bropdown setting*/\r\n.analytics-top-inner h4 .company-dropdown-wrapper{ position: relative;}\r\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu{position: absolute; left:-14px;}\r\n\r\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu:before{right: 227px;}\r\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu .company-dropdown-main {\r\n    width: 260px;\r\n    float: left;\r\n}\r\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu .company-dropdown-list > li > a .company-title{\r\n    width: 100%;\r\n}\r\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list >li > a .company-block-inner{\r\n    top: 7px;\r\n}\r\n/*Analytic bropdown setting end*/\r\n.light-loader-outer-new{width: 100%;height: 100%;background: #fff; position: absolute;top: 0; left: 0; padding:30px; text-align:center; opacity:0.9;}\r\n\r\n.analytics-bottom-dummy{\r\n    float:left; \r\n    width:100%;\r\n    background:url('/assets/images/analytics/analytics_noCalc.jpg')no-repeat;\r\n    min-height:67vh;\r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;  \r\n    -o-background-size: cover;  \r\n    background-size: cover;\r\n    position:fixed; \r\n    bottom: 0;\r\n}\r\n.analytics-bottom-popup{\r\n  background: #fb6066;\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    margin-top: 85px;\r\n    min-height: 150px;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 25px;\r\n    font-family: montserratlight;\r\n    font-size: 16px;\r\n    box-shadow:13px 13px 10px rgba(0,0,0,0.20);\r\n    z-index: 1;\r\n}\r\n.user-margin{\r\n    margin-top:-155px;\r\n}\r\n.traffic-margin{\r\n    margin-top: 15px;\r\n}\r\n.no-analytics-overlay{\r\n    position: fixed;\r\n    top: 42px;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1010;\r\n    margin-top: 56px;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    margin-left: 235px;\r\n}\r\n.no-analytics-overlay img{\r\n    width: 100%;\r\n}\r\n.analytics-bottom-popup i\r\n{\r\n    display: inherit;\r\n    margin-bottom: 15px;\r\n}\r\n.analytics-bottom-popup a\r\n{\r\n        color: #fff;\r\n    text-decoration: underline;\r\n}\r\n.analytics-overlay{\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 0;\r\n    margin-top: 0px;\r\n    background: rgba(255, 255, 255, 0.99);\r\n    filter: alpha(opacity=50);\r\n    opacity: .5;\r\n}\r\n#person .dataTables_paginate.paging_full_numbers span{\r\n    position: relative;\r\n    top: -7px;\r\n}\r\n#person .dataTables_wrapper .dataTables_paginate .paginate_button{\r\n    padding: 0 3px;\r\n    margin: 0;\r\n    color: #fb545b !important;\r\n    background: none;\r\n    border: none;\r\n}\r\n#person .dataTables_wrapper .dataTables_paginate .paginate_button{\r\n    padding: 0 3px;\r\n    margin: 0;\r\n    color: #fb545b !important;\r\n    background: none;\r\n    border: none;\r\n}\r\n#person .dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover{\r\n    background: none;\r\n    border: none;\r\n    margin: 0;\r\n     padding: 0 3px;\r\n    color: #333 !important;\r\n}\r\n#person .dataTables_wrapper .dataTables_paginate .paginate_button:hover{\r\n    background: none;\r\n    border: none;\r\n    color: #333 !important;\r\n    margin: 0;\r\n    padding: 0 3px;\r\n}\r\n#person .dataTables_wrapper .dataTables_paginate .paginate_button.disabled, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active{\r\n    color: #bec5c9 !important;\r\n}\r\n\r\n/* analytics resposnive */\r\n@media (min-width: 320px) and (max-width: 768px) {\r\n    #membership-details .membership-details-inner-tabs {\r\n        display: none;\r\n    }\r\n\r\n    #membership-details .membership-details-tabs-resp{\r\n        display: block;\r\n    }\r\n\r\n    #membership-details .tab-content.tab-sub-content {\r\n        width: 100%;\r\n        margin-left: 0;\r\n        padding: 0px 0px;\r\n    }\r\n    /* analytics resp sahil start */\r\n    .analytics-top-outer{ margin-top: 0px; min-height: 160px;}\r\n    .analytics-left-side{\r\n        position: relative !important;\r\n        top: 0 !important;\r\n        width: 100%;\r\n        height: auto !important;\r\n        padding-top: 0;\r\n    }\r\n    .analytics-bottom-popup{ width: 100%;}\r\n    .analytics-top-inner h4{ font-size: 20px;}\r\n    .left-sidebar.analytics-left-side ul li a{ width: 33%; text-align: center;}\r\n    .left-sidebar.analytics-left-side ul li a h6{ margin-bottom:0px; font-size: 11px;}\r\n    .left-sidebar.analytics-left-side ul li a .left-sidebar-icon{ display: none;}\r\n    .left-sidebar.analytics-left-side ul li a .left-sidebar-title{ width: 100%; margin: 0px;}\r\n    .left-sidebar.analytics-left-side ul li a .left-sidebar-title span{ display: none;}\r\n    /*.wrapper-content{ padding-top: 25px !important; }*/\r\n    .analytics-box-outer{ margin-left:0px; margin-bottom: 20px;}\r\n    .user-detail-outr{ padding-left: 30px; padding-right: 30px;}\r\n    #area-example svg{ width: 100%;}\r\n    .dp-outer{ margin: 0 auto; float: none; margin-top:40px;}\r\n    .details-box-outer{ margin-left: 0px;  margin-bottom: 20px;}\r\n    .traffic-graph-outer{ width: 100%;}\r\n    .analytics-top-inner{margin-top: 6%;}\r\n    .analytics-mid-inner{ padding-right: 26px; margin-top: 20px;}\r\n    .traffic-outr{ padding-right: 30px;}\r\n    .user-detail-outer{width: 305px;}\r\n    .user-detail-outer .mid-section{padding-right: 15px;}\r\n    /* .user-detail-outer .mid-section .slimScrollDiv {height: 320px !important;}\r\n    .user-detail-outer .mid-section .outer-slim {height: 320px !important;} */\r\n    .analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu {\r\n        position: absolute;\r\n        left: -40px;\r\n        width: 200px;\r\n        min-width: 220px;\r\n    }\r\n\r\n    .analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu:before {\r\n        right: 160px;\r\n    }\r\n\r\n    .analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu .company-dropdown-main {\r\n        width: 100%; \r\n    }\r\n\r\n    .analytics-top-inner .company-dropdown-wrapper .dropdown-menu .company-dropdown-list > li > a {\r\n        padding: 10px 15px;\r\n    }\r\n\r\n    .analytics-top-outer .company-dropdown-wrapper .dropdown-menu .company-dropdown-list >li > a .company-block-inner {\r\n        width: 20px;\r\n        height: 20px;\r\n        padding-top: 4px;\r\n        font-size: 11px;\r\n    }\r\n\r\n    .analytics-top-outer .company-block-content {\r\n        margin-left: 30px;\r\n        font-size: 12px;\r\n    }\r\n\r\n    .analytics-mt0{padding-top: 25px;}\r\n\r\n}\r\n@media (min-width:768px) and (max-width:768px){\r\n     .analytics-mt0{padding-left: 0px;}\r\n}\r\n.loading:after {\r\n    content: ' .';\r\n    animation: dots 1s steps(5, end) infinite;\r\n    font-size: 18px;\r\n    line-height: 1px;\r\n    position: relative;\r\n    left: -3px;\r\n}\r\n\r\n@keyframes dots {\r\n    0%,\r\n    20% {\r\n        color: rgba(0, 0, 0, 0);\r\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    40% {\r\n        color: white;\r\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    60% {\r\n        text-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    80%,\r\n    100% {\r\n        text-shadow: .25em 0 0 white, .5em 0 0 white;\r\n    }\r\n}\r\n\r\n.leadlimit-alert{\r\n    padding-left: 15px;\r\n    width: 100%;\r\n    text-align: center;\r\n    display: inline-block;\r\n}\r\n.leadlimit-alert a{ color: #f00;} \r\n\r\n.company-dropdown-list.scrollbar{height: 170px;}\r\n\r\n.scrollbar {\r\n    overflow-y: scroll;\r\n}\r\n\r\n.scrollbar::-webkit-scrollbar-track {\r\n    border-radius: 0px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.scrollbar::-webkit-scrollbar {\r\n    width: 6px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.scrollbar::-webkit-scrollbar:horizontal {\r\n    height: 6px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.scrollbar::-webkit-scrollbar-thumb\r\n{\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(245,245,248,.8);\r\n    background-color: #aaa;\r\n}\r\n\r\n\r\n\r\n.company-dropdown-wrapper:hover .btn.dropdown-toggle i,\r\n    .team-settings-wrapper .company-dropdown-wrapper i.material-icons:focus,\r\n    .team-settings-wrapper .company-dropdown-wrapper i.material-icons:hover {\r\n        color: #f87b80\r\n    }\r\n    .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n        padding: 0;\r\n        font-size: 12px;\r\n        text-transform: none;\r\n        color: #62696d;\r\n        font-family: montserratlight;\r\n        line-height: 20px;\r\n        border: none;\r\n        background: 0 0\r\n    }\r\n    .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle:focus,\r\n    .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle:hover {\r\n        background: 0 0!important;\r\n        box-shadow: none!important;\r\n        border: 0!important\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu {\r\n        padding: 10px 0;\r\n        top: 30px;\r\n        left: 16px;\r\n        min-width: 190px;\r\n        font-size: 12px;\r\n        background: #62696d;\r\n        border-radius: 4px!important;\r\n        border: none;\r\n        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .24);\r\n        display: none;\r\n        z-index: 9\r\n    }\r\n    .company-dropdown-wrapper:hover .dropdown-menu {\r\n        display: block\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu:before {\r\n        position: absolute;\r\n        top: -12px;\r\n        right: 85px;\r\n        display: inline-block;\r\n        border-right: 8px solid transparent;\r\n        border-bottom: 12px solid #62696d;\r\n        border-left: 8px solid transparent;\r\n        border-bottom-color: #62696d;\r\n        content: ''\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu>li>a:hover {\r\n        color: #fff;\r\n        background: #62696d\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu>li>a:focus {\r\n        color: #fff;\r\n        background: 0 0\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu>li>a:focus i.material-icons,\r\n    .company-dropdown-wrapper .dropdown-menu>li>a:hover i.material-icons {\r\n        color: #fff\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu>li>a.add-new-company {\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        text-transform: capitalize;\r\n        font-family: montserratregular;\r\n        float: left;\r\n        width: 100%\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\r\n        font-size: 18px;\r\n        color: #fff;\r\n        padding: 0\r\n    }\r\n    .company-dropdown-main {\r\n        width: 190px\r\n    }\r\n    .company-dropdown-wrapper .company-dropdown-list.slimscroll,\r\n    .company-dropdown-wrapper .slimScrollDiv {\r\n        float: left;\r\n        width: 100%!important;\r\n        height: 155px!important\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a {\r\n        color: #fff;\r\n        padding: 10px 15px;\r\n        text-transform: capitalize;\r\n        font-family: montserratregular;\r\n        float: left;\r\n        width: 100%;\r\n        position: relative;\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a i.material-icons {\r\n        font-size: 18px;\r\n        color: #fff;\r\n        padding: 0\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-block {\r\n        float: left;\r\n        width: 10%\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-block-inner {\r\n        background: #fff;\r\n        border-radius: 50px;\r\n        width: 20px;\r\n        height: 20px;\r\n        position: absolute;\r\n        color: #62696d;\r\n        text-align: center;\r\n        padding-top: 4px;\r\n        font-size: 11px;\r\n        top: 7px\r\n    }\r\n    .company-block-content {\r\n        float: left;\r\n        width: 80%;\r\n        margin-left: 30px\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-title {\r\n        float: left;\r\n        width: 95%\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-site {\r\n        float: left;\r\n        width: 95%;\r\n        font-size: 10px\r\n    }\r\n    .company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a.hvr-sweep-to-right::before,\r\n    .company-dropdown-wrapper .dropdown-menu>li>a.hvr-sweep-to-right.add-new-company::before {\r\n        background: #71787b\r\n    }"

/***/ },

/***/ 915:
/***/ function(module, exports) {

module.exports = "/**\r\n* A stylesheet for use with Bootstrap 3.x\r\n* @author: Dan Grossman http://www.dangrossman.info/\r\n* @copyright: Copyright (c) 2012-2015 Dan Grossman. All rights reserved.\r\n* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php\r\n* @website: https://www.improvely.com/\r\n*/\r\n\r\n/* Container Appearance */\r\n\r\n.daterangepicker {\r\n  position: absolute;\r\n  background: #fff;\r\n  top: 100px;\r\n  left: 20px;\r\n  padding: 4px;\r\n  margin-top: 1px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.daterangepicker.opensleft:before {\r\n  position: absolute;\r\n  top: -7px;\r\n  right: 9px;\r\n  display: inline-block;\r\n  border-right: 7px solid transparent;\r\n  border-bottom: 7px solid #ccc;\r\n  border-left: 7px solid transparent;\r\n  border-bottom-color: rgba(0, 0, 0, 0.2);\r\n  content: '';\r\n}\r\n\r\n.daterangepicker.opensleft:after {\r\n  position: absolute;\r\n  top: -6px;\r\n  right: 10px;\r\n  display: inline-block;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 6px solid #fff;\r\n  border-left: 6px solid transparent;\r\n  content: '';\r\n}\r\n\r\n.daterangepicker.openscenter:before {\r\n  position: absolute;\r\n  top: -7px;\r\n  left: 0;\r\n  right: 0;\r\n  width: 0;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: inline-block;\r\n  border-right: 7px solid transparent;\r\n  border-bottom: 7px solid #ccc;\r\n  border-left: 7px solid transparent;\r\n  border-bottom-color: rgba(0, 0, 0, 0.2);\r\n  content: '';\r\n}\r\n\r\n.daterangepicker.openscenter:after {\r\n  position: absolute;\r\n  top: -6px;\r\n  left: 0;\r\n  right: 0;\r\n  width: 0;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: inline-block;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 6px solid #fff;\r\n  border-left: 6px solid transparent;\r\n  content: '';\r\n}\r\n\r\n.daterangepicker.opensright:before {\r\n  position: absolute;\r\n  top: -7px;\r\n  display: inline-block;\r\n  border-right: 7px solid transparent;\r\n  border-bottom: 7px solid #ccc;\r\n  border-left: 7px solid transparent;\r\n  border-bottom-color: rgba(0, 0, 0, 0.2);\r\n  content: '';\r\n}\r\n\r\n.daterangepicker.opensright:after {\r\n  position: absolute;\r\n  top: -6px;\r\n  display: inline-block;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 6px solid #fff;\r\n  border-left: 6px solid transparent;\r\n  content: '';\r\n}\r\n\r\n.daterangepicker.dropup{\r\n  margin-top: -5px;\r\n}\r\n.daterangepicker.dropup:before{\r\n  top: initial;\r\n  bottom:-7px;\r\n  border-bottom: initial;\r\n  border-top: 7px solid #ccc;\r\n}\r\n.daterangepicker.dropup:after{\r\n  top: initial;\r\n  bottom:-6px;\r\n  border-bottom: initial;\r\n  border-top: 6px solid #fff;\r\n}\r\n\r\n.daterangepicker.dropdown-menu {\r\n  max-width: none;\r\n  z-index: 3000;\r\n}\r\n\r\n.daterangepicker .ranges, .daterangepicker .calendar {\r\n  float: left;\r\n}\r\n\r\n.daterangepicker.single .ranges, .daterangepicker.single .calendar {\r\n  float: none;\r\n}\r\n\r\n.daterangepicker .ranges {\r\n  margin: 4px;\r\n  text-align: left;\r\n}\r\n\r\n.daterangepicker .calendar {\r\n  display: none;\r\n  max-width: 270px;\r\n}\r\n\r\n.daterangepicker.show-calendar .calendar {\r\n  display: block;\r\n}\r\n\r\n.daterangepicker .calendar.single .calendar-table {\r\n  border: none;\r\n}\r\n\r\n/* Calendars */\r\n\r\n.daterangepicker .calendar th, .daterangepicker .calendar td {\r\n  white-space: nowrap;\r\n  text-align: center;\r\n  min-width: 32px;\r\n}\r\n\r\n.daterangepicker .calendar-table {\r\n  border: 1px solid #ddd;\r\n  padding: 4px;\r\n  border-radius: 4px;\r\n  background: #fff;\r\n}\r\n\r\n.daterangepicker .calendar.left .calendar-table {\r\n  border-right: none;\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.daterangepicker .calendar.right .calendar-table {\r\n  border-left: none;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;  \r\n}\r\n\r\n.daterangepicker .calendar.left {\r\n  margin: 4px 0 4px 4px;\r\n}\r\n\r\n.daterangepicker .calendar.right {\r\n  margin: 4px 4px 4px 0;\r\n}\r\n\r\n.daterangepicker .calendar.left .calendar-table {\r\n  padding-right: 12px;\r\n}\r\n\r\n.daterangepicker table {\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.daterangepicker td, .daterangepicker th {\r\n  text-align: center;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 4px;\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n}\r\n\r\n.daterangepicker td.off, .daterangepicker td.off.in-range, .daterangepicker td.off.start-date, .daterangepicker td.off.end-date {\r\n  color: #999;\r\n  background: #fff;\r\n}\r\n\r\n.daterangepicker td.disabled, .daterangepicker option.disabled {\r\n  color: #999;\r\n}\r\n\r\n.daterangepicker td.available:hover, .daterangepicker th.available:hover {\r\n  background: #eee;\r\n}\r\n\r\n.daterangepicker td.in-range {\r\n  background: #ebf4f8;\r\n  border-radius: 0;\r\n}\r\n\r\n.daterangepicker td.start-date {\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.daterangepicker td.end-date {\r\n  border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.daterangepicker td.start-date.end-date {\r\n  border-radius: 4px;\r\n}\r\n\r\n.daterangepicker td.active, .daterangepicker td.active:hover {\r\n  background-color: #357ebd;\r\n  border-color: #3071a9;\r\n  color: #fff;\r\n}\r\n\r\n.daterangepicker td.week, .daterangepicker th.week {\r\n  font-size: 80%;\r\n  color: #ccc;\r\n}\r\n\r\n.daterangepicker select.monthselect, .daterangepicker select.yearselect {\r\n  font-size: 12px;\r\n  padding: 1px;\r\n  height: auto;\r\n  margin: 0;\r\n  cursor: default;\r\n}\r\n\r\n.daterangepicker select.monthselect {\r\n  margin-right: 2%;\r\n  width: 56%;\r\n}\r\n\r\n.daterangepicker select.yearselect {\r\n  width: 40%;\r\n}\r\n\r\n.daterangepicker select.hourselect, .daterangepicker select.minuteselect, .daterangepicker select.secondselect, .daterangepicker select.ampmselect {\r\n  width: 50px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.daterangepicker th.month {\r\n  width: auto;\r\n}\r\n\r\n/* Text Input Above Each Calendar */\r\n\r\n.daterangepicker .input-mini {\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  color: #555;\r\n  display: block;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  vertical-align: middle;\r\n  margin: 0 0 5px 0;\r\n  padding: 0 6px 0 28px;\r\n  width: 100%;\r\n}\r\n\r\n.daterangepicker .input-mini.active {\r\n  border: 1px solid #357ebd;\r\n}\r\n\r\n.daterangepicker .daterangepicker_input i {\r\n  position: absolute;\r\n  left: 8px;\r\n  top: 8px;\r\n}\r\n\r\n.daterangepicker .left .daterangepicker_input {\r\n  padding-right: 12px;\r\n}\r\n\r\n.daterangepicker .daterangepicker_input {\r\n  position: relative;\r\n}\r\n\r\n/* Time Picker */\r\n\r\n.daterangepicker .calendar-time {\r\n  text-align: center;\r\n  margin: 5px auto;\r\n  line-height: 30px;\r\n  position: relative;\r\n  padding-left: 28px;\r\n}\r\n\r\n.daterangepicker .calendar-time select.disabled {\r\n  color: #ccc;\r\n  cursor: not-allowed;\r\n}\r\n\r\n/* Predefined Ranges */\r\n\r\n.daterangepicker .ranges {\r\n  font-size: 11px;\r\n}\r\n\r\n.daterangepicker .ranges ul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 160px;\r\n}\r\n\r\n.daterangepicker .ranges li {\r\n  font-size: 13px;\r\n  background: #f5f5f5;\r\n  border: 1px solid #f5f5f5;\r\n  color: #08c;\r\n  padding: 3px 12px;\r\n  margin-bottom: 8px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.daterangepicker .ranges li.active, .daterangepicker .ranges li:hover {\r\n  background: #08c;\r\n  border: 1px solid #08c;\r\n  color: #fff;\r\n}"

/***/ },

/***/ 916:
/***/ function(module, exports) {

module.exports = "<div class=\"tab-pane active \" id=\"overview\">\r\n  <div class=\"graph-val\"><span class=\"red\"></span> Unique Views </div>\r\n  <div class=\"graph-val\"><span class=\"blue\"></span> Page Views </div>\r\n  <og-date-range-picker (date)=\"onDateSelect($event)\"></og-date-range-picker>\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 user-detail-outr \">\r\n    <div id=\"area-example\" style=\"height: 300px;\"></div>\r\n    <div class=\"light-loader-outer-new\" *ngIf=\"graphLoader !== 'done'\">\r\n      <div class=\"loader\" *ngIf=\"graphLoader === 'loading'\"></div>\r\n      <p *ngIf=\"graphLoader !== 'loading'\">{{graphLoader}}</p>\r\n      <a class=\"icon-link\" *ngIf=\"graphLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 traffic-outr\">\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\r\n      <h6><i class=\"material-icons\">people</i> Unique/Total Visitors</h6>\r\n      <h4>{{(!stats)?'--':stats.uniqueVisitors}}/{{(!stats)?'--':stats.visitors}}</h4>\r\n      <div class=\"pull-left\">\r\n        <div id=\"chart-container\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\r\n      <h6><i class=\"material-icons\">person_add</i> Conversions</h6>\r\n      <h4>{{(!stats)?'--':stats.conversions}}</h4>\r\n      <div class=\"pull-left\">\r\n        <div id=\"chart-container1\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\r\n      <h6><i class=\"material-icons\">trending_up</i> Conversion Rate</h6>\r\n      <h4>{{(!stats)?'--':stats.conversionRate}}%</h4>\r\n      <div class=\"pull-left\">\r\n        <div id=\"chart-container2\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\r\n      <h6><i class=\"material-icons\">query_builder</i> Avg Length of Visit</h6>\r\n      <h4>{{(!stats)?'--':stats.timeOnPage}}</h4>\r\n      <div class=\"pull-left\">\r\n        <div id=\"chart-container3\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\r\n      <h6><i class=\"material-icons\">record_voice_over</i> Avg. Responses</h6>\r\n      <h4>{{(!stats)?'--':stats.avgResponse}}</h4>\r\n      <div class=\"pull-left\">\r\n        <div id=\"chart-container4\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 917:
/***/ function(module, exports) {

module.exports = "<div class=\"tab-pane\" id=\"traffic\">\r\n  <og-date-range-picker (date)=\"onDateSelect($event)\"></og-date-range-picker>\r\n  <div *ngIf= \"!limit_alert\" class=\"col-md-12 col-sm-12 col-xs-12 \">\r\n    <div class=\"col-md-6\"><div class=\" traffic-graph-outer\" [class.traffic-graph-height]=\"geoLoader !== 'done'\">\r\n      <div class=\"col-md-5 col-sm-12 col-xs-12 np\" *ngIf=\"geoLoader == 'done'\">\r\n        <h4>Top Geographies</h4>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n        <div id=\"regions_div\" ></div>\r\n      </div>\r\n      <div class=\"light-loader-outer traffic1\" *ngIf=\"geoLoader !== 'done'\">\r\n        <div class=\"loader\" *ngIf=\"geoLoader === 'loading'\"></div>\r\n        <p *ngIf=\"geoLoader !== 'loading'\">{{geoLoader}}</p>\r\n        <a class=\"icon-link\" *ngIf=\"geoLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\r\n      </div>\r\n    </div></div>\r\n    <div class=\"col-md-6\"><div class=\"traffic-graph-outer\" [class.traffic-graph-height]=\"deviceLoader !== 'done'\">\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\" *ngIf=\"deviceLoader == 'done'\">\r\n        <h4>Devices</h4>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n        <div id=\"piechart\" class=\"chart-position\" ></div>\r\n      </div>\r\n      <div class=\"light-loader-outer traffic2\" *ngIf=\"deviceLoader !== 'done'\">\r\n        <div class=\"loader\" *ngIf=\"deviceLoader === 'loading'\"></div>\r\n        <p *ngIf=\"deviceLoader !== 'loading'\">{{deviceLoader}}</p>\r\n        <a class=\"icon-link\" *ngIf=\"deviceLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\r\n      </div>\r\n    </div></div>\r\n  </div>\r\n  <div *ngIf= \"!limit_alert\" class=\"col-md-12 col-sm-12 col-xs-12 \">\r\n    <div class=\"col-md-6\"><div class=\"traffic-graph-outer\" [class.traffic-graph-height]=\"socialLoader !== 'done'\">\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\" *ngIf=\"socialLoader == 'done'\">\r\n        <h4>Traffic Sources</h4>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n        <div id=\"piechart1\" class=\"chart-position\" ></div>\r\n      </div>\r\n      <div class=\"light-loader-outer traffic3\" *ngIf=\"socialLoader !== 'done'\">\r\n        <div class=\"loader\" *ngIf=\"socialLoader === 'loading'\"></div>\r\n        <p *ngIf=\"socialLoader !== 'loading'\">{{socialLoader}}</p>\r\n        <a class=\"icon-link\" *ngIf=\"socialLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\r\n      </div>\r\n    </div></div>\r\n    <div class=\"col-md-6\"><div class=\"traffic-graph-outer\" [class.traffic-graph-height]=\"browserLoader !== 'done'\">\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\" *ngIf=\"browserLoader == 'done'\">\r\n        <h4>Browser</h4>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\r\n        <div id=\"piechart2\" class=\"chart-position\" ></div>\r\n      </div>\r\n      <div class=\"light-loader-outer traffic4\" *ngIf=\"browserLoader !== 'done'\">\r\n        <div class=\"loader\" *ngIf=\"browserLoader === 'loading'\"></div>\r\n        <p *ngIf=\"browserLoader !== 'loading'\">{{browserLoader}}</p>\r\n        <a class=\"icon-link\" *ngIf=\"browserLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\r\n      </div>\r\n    </div></div>\r\n  </div>\r\n  <div *ngIf=\"limit_alert\" class=\"analytics-bottom-popup traffic-margin\">\r\n    <i class=\"material-icons\">warning</i>\r\n    You have exceeded the Visits limit for your Plan <br>\r\n    <a href=\"\" [routerLink]=\"['/settings/membership']\">Click here</a> to buy an Addon to unlock the visits for your account.\r\n  </div>\r\n  <div *ngIf=\"limit_alert\" class=\"analytics-overlay\"></div>\r\n</div>\r\n"

/***/ },

/***/ 918:
/***/ function(module, exports) {

module.exports = "<div [class.hide]=\"loader==0\" class=\"tab-pane \" id=\"person\">\r\n    <div class=\"details-heading \">Lifetime Statistics</div>\r\n    <og-date-range-picker (date)=\"onDateSelect($event)\"></og-date-range-picker>\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 details-mt20\">\r\n    <!--<div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\r\n            <h4><i class=\"material-icons\">people</i> 5</h4>\r\n            <h6>Avg. Referrals Made</h6>\r\n        </div>-->\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\r\n      <h4><i class=\"material-icons\">person_add</i>{{(avgAnswered)?avgAnswered:'--'}}</h4>\r\n      <h6>Avg. Questions Answered</h6>\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\r\n      <h4 id=\"reco-tool\"><i class=\"material-icons\">timeline</i>{{(avgResult)?avgResult:'--'}}\r\n        <div class=\"range-checktip\">{{(avgResult)?avgResult:'--'}}</div>\r\n      </h4>\r\n      <h6>{{(calc.templateType=='Numerical')?'Avg. Result':'Most Outcome Obtained'}}</h6>\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\r\n      <h4><i class=\"material-icons\">public</i>{{(mostViewedOn)?mostViewedOn:'--'}}</h4>\r\n      <h6>Most Viewed On</h6>\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\r\n      <h4><i class=\"material-icons\">schedule</i>{{(avgLengthTime)?avgLengthTime:'--'}}</h4>\r\n      <h6>Avg, Length of Visit</h6>\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\r\n      <h4><i class=\"material-icons\">near_me</i>{{(mostViewedVia)?mostViewedVia:'--'}}</h4>\r\n      <h6>Most Visited Via</h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"details-table-outer\" [class.recomtable]=\"calc.templateType=='Recommendation'\">\r\n    <div class=\"table-responsive\" *ngIf=\"!limit_alert\">\r\n      <table id=\"myTable\" class=\"display table\" cellspacing=\"0\" width=\"100%\"></table>\r\n    </div>\r\n    <div *ngIf=\"limit_alert\" class=\"analytics-bottom-popup user-margin\">\r\n      <i class=\"material-icons\">warning</i>\r\n      You have exceeded the Leads limit for your Plan <br>\r\n      <a href=\"\" [routerLink]=\"['/settings/membership']\">Click here</a> to buy an Addon to unlock the leads for your account.\r\n    </div>\r\n    <div *ngIf=\"limit_alert\" class=\"analytics-overlay\"></div>\r\n  </div>\r\n\r\n</div>\r\n<og-user-details-popup *ngIf=\"visitorKey\" [visitorKey]=\"visitorKey\"></og-user-details-popup>\r\n<div class=\"loader\" *ngIf=\"loader==0\"></div>\r\n"

/***/ },

/***/ 919:
/***/ function(module, exports) {

module.exports = "<div class=\"user-detail-outer\">\r\n  <div class=\"top-section\" *ngIf=\"!statsResult\">\r\n    <div class=\"clear-set\"><i class=\"material-icons\">clear</i></div>\r\n    <div class=\"name-circle loading\"></div>\r\n    <div class=\"detail-section\">\r\n      <h4>fetching</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"top-section\" *ngIf=\"statsResult\">\r\n    <div class=\"clear-set\"><i class=\"material-icons\">clear</i></div>\r\n    <div class=\"name-circle\" *ngIf=\"statsResult.leads!=null\">{{statsResult.leads.firstName.substr(0, 2)}}</div>\r\n    <div class=\"detail-section\">\r\n      <h4 *ngIf=\"statsResult.leads\">{{statsResult.leads.firstName}}</h4>\r\n      <h6 *ngIf=\"statsResult.location.city && statsResult.location.country\">\r\n        <i class=\"material-icons\">room</i> {{statsResult.location.city}}, {{statsResult.location.country}}\r\n      </h6>\r\n      <h6><i class=\"material-icons\" *ngIf=\"statsResult.leads.tel \">phone</i> {{statsResult.leads.tel}}</h6>\r\n      <h6><i class=\"material-icons\" *ngIf=\"statsResult.leads.email\">mail_outline</i>{{statsResult.leads.email}}</h6>\r\n      <!--<h6><i class=\"material-icons\">public</i> Chrome</h6>-->\r\n    </div>\r\n  </div>\r\n  <div class=\"mid-section\" *ngIf=\"statsResult && statsResult.stats.length>0\">\r\n    <div class=\"outer-slim\">\r\n    <div class=\"bh\">\r\n      <div class=\"que-outer\" *ngFor=\"let stat of statsResult.stats\">\r\n        <div class=\"que-icon-outer\"><i class=\"material-icons\">live_help</i></div>\r\n        <div class=\"que-section\">\r\n          <h6>{{stat.title}}</h6>\r\n          <h6 class=\"ans\">{{stat.label}}</h6>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }

});
//# sourceMappingURL=7.map