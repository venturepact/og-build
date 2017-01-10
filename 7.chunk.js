webpackJsonp([7,12],{

/***/ 1036:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_marketing_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(29);
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
    function AnalyticsComponent(companyService, _router, _script, _marketingService, titleService) {
        this.companyService = companyService;
        this._router = _router;
        this._script = _script;
        this._marketingService = _marketingService;
        this.titleService = titleService;
        this.live_calculators = [];
        this.analytic_component = '';
        this.titleService.setTitle("Outgrow Home");
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
        this._script.load('gCharts', 'jqueryUI', 'slimScroll', 'raphael', 'morrisCharts', 'datatables', 'daterangepicker')
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
        // jQuery('.slimscroll').slimscroll({
        //   railVisible: true,
        //   alwaysVisible: true
        // });
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
        jQuery('.company-dropdown-wrapper').removeClass('.open');
    };
    AnalyticsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-analytics',
            template: __webpack_require__(1175),
            styles: [
                __webpack_require__(922),
                __webpack_require__(921)
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* CompanyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["c" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["c" /* Script */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_marketing_service__["a" /* MarketingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_marketing_service__["a" /* MarketingService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* Title */]) === 'function' && _e) || Object])
    ], AnalyticsComponent);
    return AnalyticsComponent;
    var _a, _b, _c, _d, _e;
}());


/***/ },

/***/ 1175:
/***/ function(module, exports) {

module.exports = "<sd-toolbar [page]=\"'analytics'\"></sd-toolbar>\n<div class=\"preloader\" *ngIf=\"!calc_id\">\n  <div class=\"status\">&nbsp;</div>\n</div>\n\n<div *ngIf=\"calc_id!='null'\">\n  <!-- Analytics Section -->\n  <div class=\"analytics-top-outer\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-top-inner\">\n      <h6>Showing analytics for </h6>\n      <h4><span class=\"mob-width-set\">{{calc_name}}</span>\n        <div class=\"btn-group company-dropdown-wrapper\">\n          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"material-icons\" *ngIf=\"live_calculators.length>1\">keyboard_arrow_down</i>\n          </button>\n          <ul class=\"dropdown-menu \">\n            <div class=\"company-dropdown-main\">\n              <div class=\"company-dropdown-list\" [class.scrollbar]=\"live_calculators.length > 5\">\n                <li *ngFor=\"let calc of live_calculators, let i = index\">\n                  <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"onCalcSelect(calc)\">\n                    <div class=\"company-block\">\n                      <span class=\"company-block-inner\">{{calc.name.charAt(0)}}</span>\n                    </div>\n                    <div class=\"company-block-content\">\n                      <span class=\"company-title ellipsis\">{{calc.name}}</span>\n                      <span class=\"company-site ellipsis hide\">{{calc.url}}</span>\n                    </div>\n                  </a>\n                </li>\n              </div>\n            </div>\n          </ul>\n        </div>\n      </h4>\n    </div>\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-mid-inner\">\n            <span class=\"active-outer\" *ngIf=\"isActive\">\n                <i class=\"material-icons\">check_circle</i>\n                Active (since {{activeSince}})\n            </span>\n      <span class=\"active-outer\" *ngIf=\"!isActive\">\n                <i class=\"material-icons\" style=\"color:red;\">check_circle</i>\n                Not Active\n            </span>\n      <!--<a class=\"preview-outer\" href=\"#\"><i class=\"material-icons\">launch</i> Preview Calculator</a>-->\n    </div>\n  </div>\n  <!-- Start: wrapper -->\n  <section class=\"wrapper\" *ngIf=\"calc_id\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n      <!-- Start: Left Sidebar -->\n      <div class=\"left-sidebar analytics-left-side col-md-3 col-sm-3 col-xs-3 np\">\n        <div id=\"\" class=\"tabbable tabs-left\">\n          <ul>\n            <li class=\"active\">\n              <a href=\"#overview\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('overview')\">\n                                <span class=\"left-sidebar-icon\">\n                                    <i class=\"material-icons\">dialpad</i>\n                                </span>\n                <div class=\"left-sidebar-title\">\n                  <h6 class=\"tab-overview\">Overview</h6>\n                  <span class=\"\">Get an overview of your visitors and conversions.</span>\n                </div>\n              </a>\n            </li>\n            <li class=\"\">\n              <a href=\"#person\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('details')\">\n                                <span class=\"left-sidebar-icon\">\n                                    <i class=\"material-icons\">person</i>\n                                </span>\n                <div class=\"left-sidebar-title\">\n                  <h6 class=\"\">User Details</h6>\n                  <span class=\"\">See detailed analytics and user responses.</span>\n                </div>\n              </a>\n            </li>\n            <li class=\"\">\n              <a href=\"#traffic\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('traffic')\">\n                                <span class=\"left-sidebar-icon noti-icon\">\n                                    <i class=\"material-icons\">traffic</i>\n                                </span>\n                <div class=\"left-sidebar-title\">\n                  <h6 class=\"\">Traffic Details</h6>\n                  <span class=\"\">Get deeper insights about your calculator's traffic data.</span>\n                </div>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <!-- End: Left Sidebar -->\n      <!-- Start: wrapper content -->\n      <div class=\"wrapper-content col-md-9 col-sm-9 col-xs-9 analytics-mt0\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n          <div class=\"tab-content tabs-wrapper col-md-12 col-sm-12 col-xs-12 np analytics-page\">\n            <!-- Start: overview (1) -->\n            <og-overview *ngIf=\"analytic_component === 'overview'\" [calc]=\"calculator\"></og-overview>\n            <!-- End: overview (1) -->\n            <!-- Start: person (2) -->\n            <og-user-details *ngIf=\"analytic_component === 'details'\"  [calc]=\"calculator\"></og-user-details>\n            <!-- End: person (2) -->\n            <!-- Start: traffic (3) -->\n            <og-traffic-details *ngIf=\"analytic_component === 'traffic'\" [calc]=\"calculator\"></og-traffic-details>\n            <!-- End: traffic (3) -->\n          </div>\n        </div>\n      </div>\n      <!-- End: wrapper content -->\n    </div>\n  </section>\n  <!-- End: wrapper -->\n</div>\n\n<div *ngIf=\"calc_id=='null'\">\n  <div class=\"analytics-top-outer\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-top-inner\">\n      <!--<h6>Showing analytics for </h6>-->\n      <h4>No Live Calculator</h4>\n    </div>\n  </div>\n  <div class=\"col-xs-12 analytics-bottom-dummy\">\n    <div class=\"col-xs-12 col-sm-12\">\n      <div class=\"analytics-bottom-popup\">\n        <i class=\"material-icons\">grid_off</i>\n        There are no calculators which are live and hence there will be no data to display\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 785:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__analytics_component__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_utilities_module__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__analyticsChild_module__ = __webpack_require__(915);
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

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(56);
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CalculatorAnalytics);
    return CalculatorAnalytics;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__["a" /* BaseService */]));


/***/ },

/***/ 900:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_components_analytics_components_date_range_picker_date_range_picker_component__ = __webpack_require__(908);
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

/***/ 908:
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
            template: __webpack_require__(911),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], DateRangePickerComponent);
    return DateRangePickerComponent;
    var _a;
}());


/***/ },

/***/ 911:
/***/ function(module, exports) {

module.exports = "<div class=\"dp-outer \">\n\t<i class=\"material-icons icon-left\">date_range</i>\n\t<input class=\"input-daterange-datepicker datepicker-outer\" type=\"text\" name=\"daterange\" />\n\t<i class=\"material-icons icon-right\">keyboard_arrow_down</i>\n</div>\n"

/***/ },

/***/ 915:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calculator_analytics_service__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_overview_overview_component__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_details_user_details_component__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_traffic_details_traffic_details_component__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_details_popup_user_details_popup_component__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_modules_utilities_module__ = __webpack_require__(900);
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

/***/ 916:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(811);
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
            template: __webpack_require__(924),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object])
    ], OverviewComponent);
    return OverviewComponent;
    var _a;
}());


/***/ },

/***/ 917:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(811);
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
            template: __webpack_require__(925),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* CookieService */]) === 'function' && _b) || Object])
    ], TrafficDetailsComponent);
    return TrafficDetailsComponent;
    var _a, _b;
}());


/***/ },

/***/ 918:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(811);
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
        this.disable = false;
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
        this.lead = true;
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
        // if (this.calc.spredsheetUrl) {
        //   this.exportToGoogleSheet();
        // }
        this.checkLeadsLimit();
    };
    UserDetailsComponent.prototype.ngOnChanges = function () {
        if (this.calc) {
            if (this.calc.liveApp)
                this.calc_id = this.calc._id;
            else
                this.calc_id = this.calc.parentApp;
            this.intializeDatatable();
            this.loader = 0;
            this.reInitAvgVariable();
        }
    };
    UserDetailsComponent.prototype.calulateAnalyticsData = function (data) {
        var _this = this;
        console.log('data', data);
        if (data.length) {
            data.map(function (response) {
                if (response[6] != '--' || response[8] != '--') {
                    _this.viewedOnStats[response[6]] += 1;
                    _this.viewedViaStats[response[8] == '(not set)' ? 'direct' : response[8]] += 1;
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
    UserDetailsComponent.prototype.reInitAvgVariable = function () {
        this.mostViewedVia = '--';
        this.mostViewedOn = '--';
        this.avgLengthTime = '--';
        this.socialEgagement = '--';
        this.avgAnswered = '--';
        this.avgResult = '--';
    };
    UserDetailsComponent.prototype.intializeDatatable = function () {
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
                "data": { id: self.calc_id, start_date: this.postData.start_date, end_date: this.postData.end_date, lead: this.lead },
                "dataSrc": function (response) {
                    self.subs.push(self.avgAnalyticsData());
                    self.loader = 1;
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
                { title: 'Engagement' },
                { title: 'Questions Answered' },
                { title: (self.calc.templateType == 'Numerical') ? 'Result Obtained' : 'Outcome Obtained' },
                { title: 'Visited From' },
                { title: 'Visited On' },
                { title: 'Length of Visit' },
                { title: 'Source' },
                { title: '' }
            ]
        });
        this.dataTableRef.column(5).visible(false);
    };
    UserDetailsComponent.prototype.exportToGoogleSheet = function () {
        var _this = this;
        this.disable = true;
        jQuery('.export').html('Preparing your sheet..');
        jQuery('.update').html('Updating..');
        this._calculatorAnalytics.exportToSheet({ id: this.calc_id, spredsheetUrl: this.calc.spredsheetUrl }).subscribe(function (response) {
            // if (this.calc.spredsheetUrl === '') {
            window.open(_this.calc.spredsheetUrl, '_blank');
            // }
            _this.calc.spredsheetUrl = response;
            _this.disable = false;
            jQuery('.export').html('<i class="material-icons">exit_to_app</i> &nbsp;View Sheet');
            jQuery('.update').html('<i class="material-icons">visibility</i>');
            //  window.location.href = response;
        }, function (error) {
            console.log('error', error);
        });
    };
    UserDetailsComponent.prototype.avgAnalyticsData = function () {
        var self = this;
        return this._calculatorAnalytics.getAvgOfLeads({ id: this.calc_id, start_date: this.postData.start_date, end_date: this.postData.end_date, lead: this.lead })
            .subscribe(function (response) {
            self.avgAnswered = Math.round(response.avgAnswers);
            self.avgResult = response.avgResult;
            var min = Math.floor(Number(response.avgTimeOnPage) / 60);
            var seconds = Math.round(Number(response.avgTimeOnPage) % 60);
            self.avgLengthTime = min ? (min + '.' + seconds + ' m') : seconds + ' s';
            self.socialEgagement = response.CtaEngagementLength;
            self.calulateAnalyticsData(response.data);
        }, function (error) {
            console.log('Something Went Wrong in Avg leads!');
        });
    };
    UserDetailsComponent.prototype.onDateSelect = function (date) {
        this.postData.start_date = new Date(date.start_date).toISOString().substr(0, 10);
        this.postData.end_date = new Date(moment(new Date(date.end_date)).add(1, 'day').format('YYYY-MM-DD')).toISOString().substr(0, 10);
        //refresh stats
        if (this.calc_id) {
            this.intializeDatatable(); //this.subs.push(this.getLeadData(this.calc_id));
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], UserDetailsComponent.prototype, "calc", void 0);
    UserDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-user-details',
            template: __webpack_require__(926),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* FeatureAuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* CookieService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ChangeDetectorRef */]) === 'function' && _d) || Object])
    ], UserDetailsComponent);
    return UserDetailsComponent;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 919:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(811);
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
            template: __webpack_require__(927),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ChangeDetectorRef */]) === 'function' && _b) || Object])
    ], UserDetailsPopupComponent);
    return UserDetailsPopupComponent;
    var _a, _b;
}());


/***/ },

/***/ 921:
/***/ function(module, exports) {

module.exports = "body {\n    font-family: montserratregular;\n}\n@font-face {\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: 400;\n    src: url(MaterialIcons-Regular.eot);\n    src: local('Material Icons'), local('materialIcons-Regular'), url(../assets/fonts/materialIcons-Regular.woff2) format('woff2'), url(../fonts/materialIcons-Regular.woff) format('woff'), url(../fonts/materialIcons-Regular.ttf) format('truetype')\n}\n.material-icons {\n    font-family: 'Material Icons';\n    font-weight: 400;\n    font-style: normal;\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n    -webkit-font-smoothing: antialiased;\n    text-rendering: optimizeLegibility;\n    -moz-osx-font-smoothing: grayscale;\n    font-feature-settings: 'liga'\n}\n@font-face {\n    font-family: montserratregular;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n}\n@font-face {\n    font-family: montserratbold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../assets/fonts/montserrat-bold-webfont.eot) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-bold-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-bold-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-bold-webfont.ttf) format(\"truetype\")\n}\n@font-face {\n    font-family: montserratsemibold;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../assets/fonts/montserrat-semibold-webfont.eot?#iefix) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-semibold-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-semibold-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-semibold-webfont.ttf) format(\"truetype\")\n}\n@font-face {\n    font-family: montserratlight;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../assets/fonts/montserrat-light-webfont.eot) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-light-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-light-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-light-webfont.ttf) format(\"truetype\")\n}\n@font-face {\n    font-family: montserrathairline;\n    font-style: normal;\n    font-weight: 400;\n    src: url(../assets/fonts/montserrat-hairline-webfont.eot?#iefix) format(\"embedded-opentype\"), url(../assets/fonts/montserrat-hairline-webfont.woff2) format(\"woff2\"), url(../assets/fonts/montserrat-hairline-webfont.woff) format(\"woff\"), url(../assets/fonts/montserrat-hairline-webfont.ttf) format(\"truetype\")\n}\n@font-face {\n    font-family: montserratultra_light;\n    src: url(../assets/fonts/montserrat-ultralight-webfont.woff2) format('woff2'), url(../assets/fonts/montserrat-ultralight-webfont.woff) format('woff'), url(../assets/fonts/montserrat-ultralight-webfont.ttf) format('truetype');\n    font-weight: 400;\n    font-style: normal\n}\n.wrapper {\n    width: 100%;\n    float: left\n}\n.np {\n    padding: 0px;\n}\n.ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.analytics-top-inner {\n    margin-top: 3%;\n}\n.analytics-top-inner h6 {\n    color: #c4c4c1;\n    font-size: 14px;\n    font-family: montserratregular;\n    padding-left: 10px;\n}\n.analytics-top-inner h4 {\n    color: #f56151;\n    font-size: 24px;\n    font-family: montserratregular;\n    text-transform: uppercase;\n    padding-left: 10px;\n}\n.analytics-top-inner h4 i {\n    color: #f87b80;\n    font-size: 24px;\n}\n.analytics-mid-inner {\n    margin-top: 10px;\n    text-align: right;\n    padding-right: 46px;\n    font-size: 14px;\n    color: #fff;\n}\n.analytics-mid-inner .preview-outer {\n    position: relative;\n    color: #fff;\n    padding-left: 18px;\n    margin-left: 10px;\n}\n.analytics-mid-inner .preview-outer i {\n    font-size: 14px;\n    color: #999 !important;\n    position: absolute;\n    left: 0px;\n    top: 2px;\n}\n.analytics-mid-inner .preview-outer:hover {\n    color: #ccc;\n}\n.analytics-mid-inner .active-outer {\n    position: relative;\n    color: #fff;\n    padding-left: 18px;\n    margin-left: 10px;\n}\n.analytics-mid-inner .active-outer i {\n    font-size: 14px;\n    color: #1fde2d;\n    position: absolute;\n    left: 0px;\n    top: 2px;\n}\n.analytics-left-side {\n    position: absolute;\n    top: 0 !important;\n    height: 100%;\n}\n.analytics-mt0 {\n    margin-top: 0 !important;\n}\n.user-detail-outr {\n    padding: 30px;\n}\n.traffic-outr {\n    padding: 0 30px;\n}\n.analytics-mt20 {\n    margin-top: 20px !important;\n}\n.analytics-box-outer {\n    float: left;\n    border: 1px solid #dae2e6;\n    padding: 10px;\n    margin-left: 4.16%;\n    background: #fff;\n}\n.analytics-box-outer:first-child {\n    float: left;\n    border: 1px solid #dae2e6;\n    padding: 10px;\n    margin-left: 0px;\n    background: #fff;\n}\n.analytics-box-outer h6 {\n    float: left;\n    font-size: 10px;\n    color: #8c9194;\n    font-family: montserratregular !important;\n    padding-left: 18px;\n    position: relative;\n    margin-top: 0;\n    margin-bottom: 5px;\n    width: 100%;\n    text-transform: uppercase;\n}\n.analytics-box-outer h6 i {\n    font-size: 14px;\n    position: absolute;\n    left: 0;\n    top: -2px;\n}\n.analytics-box-outer h4 {\n    float: left;\n    font-size: 24px;\n    color: #62696d;\n    font-family: montserratregular !important;\n    position: relative;\n    margin-top: 0;\n    margin-bottom: 5px;\n    width: 100%;\n}\n.dp-outer {\n    position: relative;\n    width: 205px;\n    float: right;\n    z-index: 0;\n    margin-right: 30px;\n}\n.datepicker-outer {\n    border: 2px solid #fb545b;\n    width: 100%;\n    padding: 4px 10px 4px 28px;\n    float: right;\n    color: #636f76;\n    z-index: 9;\n    background: none;\n    cursor: pointer;\n    font-size: 13px;\n}\n.datepicker-outer:focus {\n    outline: none !important;\n}\n.datepicker-outer.datepicker {\n    padding: 4px 10px 4px 30px !important;\n}\n.dp-outer .icon-left {\n    position: absolute;\n    font-size: 14px;\n    top: 8px;\n    z-index: -1;\n    left: 9px;\n    color: #bec5c9;\n}\n.dp-outer .icon-right {\n    position: absolute;\n    right: 5px;\n    top: 9px;\n    font-size: 16px;\n    z-index: -1;\n    color: #bec5c9;\n}\n.details-heading {\n    font-size: 24px;\n    font-family: montserratlight;\n    color: #636f76;\n    width: auto;\n    float: left;\n    margin-left: 30px;\n    line-height: 1;\n}\n.details-box-outer:first-child {\n    margin-left: 0px;\n}\n#person .details-box-outer {\n    width: 14%;\n    margin-left: 3.2%\n}\n#person .details-box-outer:first-child {\n    margin-left: 0;\n}\n.details-box-outer {\n    float: left;\n    border: 1px solid #dae2e6;\n    padding: 15px 7px;\n    position: relative;\n    background: #fff;\n    margin-left: 4.16%;\n    /*width: 14%;\n    margin-left: 3.2%;*/\n}\n.details-box-outer:last-child {\n}\n.details-mt20 {\n    margin-top: 20px;\n    padding: 0px 30px;\n}\n.details-box-outer h4 {\n    margin: 0;\n    font-size: 18px;\n    padding-left: 30px;\n    float: left;\n    width: 100%;\n    font-family: montserratregular;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.details-box-outer h4 i {\n    position: absolute;\n    left: 7px;\n    font-size: 21px;\n    color: #269fd8;\n}\n.details-box-outer h6 {\n    margin: 0;\n    font-size: 10px;\n    color: #8c9194;\n    float: left;\n    font-family: montserratregular;\n    text-transform: uppercase;\n    margin-top: 5px;\n    margin-left: 30px;\n}\n.details-box-outer h4:hover > .range-checktip {\n    visibility: visible;\n    z-index: 999;\n}\n.details-box-outer h4 .range-tip {\n    margin: 1px 7px;\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n    margin: 0px;\n    cursor: default;\n}\n.details-box-outer h4 .range-tip i {\n    color: #8e989f;\n    font-size: 13px;\n    line-height: 17px;\n    cursor: pointer;\n    opacity: 0.8;\n}\n.details-box-outer h4 .range-tip:hover i {\n    color: #f87b80;\n}\n.range-tip:hover > .range-checktip {\n    visibility: visible;\n    z-index: 999;\n}\n.details-box-outer h4 .range-checktip {\n    float: left;\n    background-color: #61696C;\n    color: #fff;\n    padding: 5px;\n    width: 180px;\n    font-size: 11px;\n    position: absolute;\n    top: -19px;\n    border-radius: 0px;\n    visibility: hidden;\n    box-shadow: 0 3px 7px 0px #919191;\n    text-align: center;\n    left: 35px;\n    line-height: 1.42857143;\n    text-transform: none;\n}\n.details-box-outer h4 .range-checktip:before {\n    content: '';\n    position: absolute;\n    bottom: -40%;\n    left: 50%;\n    margin-left: -8px;\n    width: 10px;\n    height: 10px;\n    border-top: 6px solid #61696C;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n}\n.tab-pane {\n    /*background: #fff;\n    padding: 10px;\n    border: 1px solid #ddd;\n    margin-top: -1px*/\n}\n.tabs-wrapper .tab-pane {\n    background: 0 0;\n    padding: 0;\n    border: none;\n    margin-top: -1px;\n    float: left;\n    width: 100%;\n    margin-bottom: 20px;\n}\n.details-table-outer {\n    float: left;\n    margin-top: 30px;\n    width: 100%;\n    padding: 0px 30px;\n}\n.details-table-outer table {\n    margin-bottom: 30px;\n}\n.details-table-outer table tr th {\n    font-size: 10px;\n    color: #6c7377;\n    font-family: montserratregular;\n    text-transform: uppercase;\n    font-weight: normal;\n    text-align: right;\n}\n.details-table-outer table thead tr:hover {\n    background: none !important;\n}\n.details-table-outer table thead select {\n    padding: 0;\n    border: none;\n    text-transform: uppercase;\n    font-size: 12px;\n    outline: none;\n    color: #fb5f66;\n    border: 1px solid #ccc;\n    padding: 5px;\n}\n.details-table-outer table tr.blue-border {\n    border-bottom: 2px solid #269fd8\n}\n.details-table-outer table tr:hover {\n    background: #f8fafa;\n}\n.details-table-outer table tr td {\n    border-bottom: 1px solid #dae2e6;\n}\n.details-table-outer table tr td {\n    color: #62696d;\n    font-size: 11px;\n    font-weight: normal;\n    font-family: montserratregular;\n    text-align: right;\n}\n.details-table-outer table tr td:first-child {\n    color: #bec5c9;\n    font-size: 11px;\n    font-weight: normal;\n    font-family: montserratregular;\n    text-align: left;\n    padding: 15px 10px;\n    background: #fff;\n}\n.details-table-outer table tr td.link {\n    color: #fb545b;\n    font-size: 13px;\n    font-weight: normal;\n    font-family: montserratregular;\n    text-align: right;\n}\n.details-table-outer table tr.date-outer td {\n    border-bottom: 1px solid #fff;\n    color: #269fd8;\n    font-family: montserratlight;\n    font-size: 16px;\n    border-top: 2px solid #269fd8\n}\n.details-table-outer table tr.date-outer:hover {\n    background: none;\n}\n.details-table-outer table tr td:last-child a {\n    color: #fb545b;\n    font-size: 11px;\n    cursor: pointer;\n}\n.details-table-outer .pagination li a {\n    border: none;\n    color: #fb5f66;\n}\n.details-table-outer .pagination li a:hover {\n    color: #62696d;\n    background: none;\n}\n.details-table-outer .pagination li a:focus {\n    color: #62696d;\n    background: none;\n}\n.details-table-outer .dataTables_paginate {\n    width: 100%;\n    text-align: center;\n}\n.recomtable th.sorting:nth-child(3) {\n    text-align: left;\n    padding: 10px 10px;\n}\n.recomtable tr td:nth-child(3) {\n    text-align: left;\n}\n.traffic-graph-outer {\n    border: 1px solid #dae2e6;\n    padding: 20px;\n    float: left;\n    width: 100%;\n    min-height: 225px;\n    position: relative;\n    margin-top: 30px;\n}\n.traffic-graph-outer h4 {\n    font-family: montserratlight !important;\n    font-size: 18px;\n    float: left;\n    width: 100%;\n    margin-top: 0;\n    color: #62696d;\n}\n.traffic-graph-outer h6 {\n    color: #8c9194;\n    font-size: 11px;\n    font-family: montserratregular;\n    float: left;\n    text-transform: uppercase;\n    width: 100%;\n    margin-bottom: 5px;\n}\n.traffic-graph-outer h6 span.red {\n    float: left;\n    background: #fb545b;\n    -webkit-border-radius: 25px;\n    -moz-border-radius: 25px;\n    border-radius: 25px;\n    height: 11px;\n    width: 11px;\n    margin-right: 10px;\n}\n.traffic-graph-outer h6 span.green {\n    float: left;\n    background: #50d650;\n    -webkit-border-radius: 25px;\n    -moz-border-radius: 25px;\n    border-radius: 25px;\n    height: 11px;\n    width: 11px;\n    margin-right: 10px;\n}\n.traffic-graph-outer h6 span.sky {\n    float: left;\n    background: #69d2e7;\n    -webkit-border-radius: 25px;\n    -moz-border-radius: 25px;\n    border-radius: 25px;\n    height: 11px;\n    width: 11px;\n    margin-right: 10px;\n}\n.traffic-graph-outer h6 span.orange {\n    float: left;\n    background: #f38630;\n    -webkit-border-radius: 25px;\n    -moz-border-radius: 25px;\n    border-radius: 25px;\n    height: 11px;\n    width: 11px;\n    margin-right: 10px;\n}\n.traffic-graph-outer h6 span.ex-light-green {\n    float: left;\n    background: #e0e4cc;\n    -webkit-border-radius: 25px;\n    -moz-border-radius: 25px;\n    border-radius: 25px;\n    height: 11px;\n    width: 11px;\n    margin-right: 10px;\n}\n.chart-position {\n    position: absolute;\n    position: absolute;\n    top: -70px;\n    left: -20px;\n}\n.traffic-graph-height {\n    min-height: 225px !important;\n}\n\n/*date rangepicker css*/\n.daterangepicker.dropdown-menu {\n    right: 28px !important;\n    width: 492px !important;\n}\n.daterangepicker.opensright:before {\n    right: 40px !important;\n}\n.daterangepicker.opensright:after {\n    right: 41px !important;\n}\n.daterangepicker .ranges {\n    margin: 4px;\n    text-align: right !important;\n    width: 98%;\n}\n.btn-danger {\n    margin-right: 5px;\n}\n\n/*date rangepicker end css*/\n\n/*data table css*/\n.dataTables_length {\n    display: none;\n}\n.dataTables_filter {\n    display: none;\n}\n.dataTables_info {\n    display: none;\n}\n.first, .last {\n    display: none;\n}\n.dataTables_paginate {\n    text-align: center;\n    margin-bottom: 20px;\n}\n.dataTables_paginate a {\n    margin: 10px;\n    color: #fb5f66;\n    cursor: pointer;\n}\n.dataTables_paginate a:focus {\n    color: #62696d;\n    background: none;\n}\n\n/*data table css end*/\n.user-detail-outer {\n    position: fixed;\n    width: 325px;\n    background: #fff;\n    z-index: 9999;\n    right: 0;\n    top: 0;\n    height: 100vh;\n    -webkit-box-shadow: -6px 3px 20px -6px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: -6px 3px 20px -6px rgba(0, 0, 0, 0.75);\n    box-shadow: -6px 3px 20px -6px rgba(0, 0, 0, 0.75);\n    display: none;\n}\n.user-detail-outer .top-section {\n    float: left;\n    width: 100%;\n    padding: 25px;\n    border-bottom: 2px solid #dae2e6;\n    position: relative;\n}\n.user-detail-outer .top-section .name-circle {\n    float: left;\n    width: 35px;\n    height: 35px;\n    background: #fb5f66;\n    -webkit-border-radius: 25px;\n    -moz-border-radius: 25px;\n    border-radius: 25px;\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 12px;\n    font-family: montserratregular;\n    color: #fff;\n    padding-top: 9px;\n}\n.user-detail-outer .top-section .detail-section {\n    float: left;\n    width: 80%;\n    margin-left: 10px;\n}\n.user-detail-outer .top-section .detail-section h4 {\n    float: left;\n    width: 100%;\n    font-size: 16px;\n    margin-bottom: 0;\n}\n.user-detail-outer .top-section .detail-section h6 {\n    float: left;\n    width: 100%;\n    font-size: 11px;\n    font-family: montserratregular;\n    color: #8e989f;\n    margin-bottom: 0;\n    position: relative;\n    padding-left: 20px;\n}\n.user-detail-outer .top-section .detail-section h6 i {\n    position: absolute;\n    top: 0;\n    font-size: 14px;\n    left: 0;\n    color: #bec5c9;\n}\n.user-detail-outer .mid-section {\n    float: left;\n    width: 100%;\n    padding: 25px;\n    padding-right: 5px;\n}\n.user-detail-outer .mid-section .que-outer {\n    float: left;\n    width: 100%;\n}\n.user-detail-outer .mid-section .que-icon-outer {\n    float: left;\n    width: 35px;\n    color: #bec5c9;\n}\n.user-detail-outer .mid-section .que-icon-outer i {\n    font-size: 30px;\n}\n.user-detail-outer .mid-section .que-section {\n    float: left;\n    width: 86%;\n    margin-bottom: 20px;\n}\n.user-detail-outer .mid-section .que-section h6 {\n    float: left;\n    font-size: 12px;\n    font-family: montserratlight !important;\n    width: 100%;\n    margin-top: 0;\n    line-height: 20px;\n}\n.user-detail-outer .mid-section .que-section h6.ans {\n    float: left;\n    font-size: 12px;\n    font-family: montserratregular !important;\n    width: 100%;\n    margin-top: 0;\n    line-height: 20px;\n    color: #62696d;\n}\n\n/* .user-detail-outer .mid-section .slimScrollDiv{height: 600px !important;}\n.user-detail-outer .mid-section .outer-slim{height: 600px !important;} */\n.user-detail-outer .mid-section .outer-slim .bh {\n    float: left;\n}\n.user-detail-outer .clear-set {\n    position: absolute;\n    top: 10px;\n    cursor: pointer;\n    right: 7px;\n}\n.graph-val {\n    color: #8c9194;\n    font-size: 11px;\n    font-family: montserratregular;\n    float: left;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n    margin-top: 5px;\n    margin-left: 30px;\n}\n.graph-val span.red {\n    float: left;\n    background: #fb545b;\n    -webkit-border-radius: 25px;\n    -moz-border-radius: 25px;\n    border-radius: 25px;\n    height: 11px;\n    width: 11px;\n    margin-right: 10px;\n    margin-top: 2px;\n}\n.graph-val span.blue {\n    float: left;\n    background: #269fd8;\n    -webkit-border-radius: 25px;\n    -moz-border-radius: 25px;\n    border-radius: 25px;\n    height: 11px;\n    width: 11px;\n    margin-right: 10px;\n    margin-top: 2px;\n}\n.morris-hover {\n    position: absolute;\n    z-index: 1000\n}\n.morris-hover.morris-default-style {\n    border-radius: 10px;\n    padding: 6px;\n    color: #666;\n    background: rgba(255, 255, 255, 0.8);\n    border: solid 2px rgba(230, 230, 230, 0.8);\n    font-family: sans-serif;\n    font-size: 12px;\n    text-align: center\n}\n.morris-hover.morris-default-style .morris-hover-row-label {\n    font-weight: bold;\n    margin: 0.25em 0\n}\n.morris-hover.morris-default-style .morris-hover-point {\n    white-space: nowrap;\n    margin: 0.1em 0\n}\n.analytics-top-outer .company-dropdown-wrapper .dropdown-menu {\n    z-index: 999 !important;\n    min-width: 260px;\n}\n\n/*loader css*/\n.dark-loader-outer {\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 30px;\n    text-align: center;\n}\n.traffic1 {\n    background: url(/assets/images/analytics/traffic1.jpg)no-repeat !important;\n    background-color: #fff;\n    background-position: center center;\n    display: table;\n    height: 223px !important;\n}\n.traffic1 p {\n    color: #269fd8;\n    font-style: italic;\n    display: table-cell;\n    vertical-align: middle;\n}\n.traffic2 {\n    background: url(/assets/images/analytics//traffic2.jpg)no-repeat !important;\n    background-color: #fff;\n    background-position: center center;\n    display: table;\n    height: 223px !important;\n}\n.traffic2 p {\n    color: #269fd8;\n    font-style: italic;\n    display: table-cell;\n    vertical-align: middle;\n}\n.traffic3 {\n    background: url(/assets/images/analytics/traffic3.jpg)no-repeat !important;\n    background-color: #fff;\n    background-position: center center;\n    display: table;\n    height: 223px !important;\n}\n.traffic3 p {\n    color: #269fd8;\n    font-style: italic;\n    display: table-cell;\n    vertical-align: middle;\n}\n.traffic4 {\n    background: url(/assets/images/analytics/traffic4.jpg)no-repeat !important;\n    background-color: #fff;\n    background-position: center center;\n    display: table;\n    height: 223px !important;\n}\n.traffic4 p {\n    color: #269fd8;\n    font-style: italic;\n    display: table-cell;\n    vertical-align: middle;\n}\n.light-loader-outer {\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 30px;\n    text-align: center;\n    opacity: 0.9;\n}\n.loader {\n    border: 5px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 5px solid #fb545b;\n    width: 50px;\n    height: 50px;\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n    position: absolute;\n    left: 44%;\n    top: 39%;\n}\n@-webkit-keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n    }\n}\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n.light-loader-outer .icon-link i {\n    font-size: 18px;\n    cursor: pointer;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    color: #bec5c9;\n}\n\n/* Preloader */\n.preloader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #fff;    /* change if the mask should be a color other than white */\n    z-index: 9999;    /* makes sure it stays on top */\n}\n.status {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;    /* centers the loading animation horizontally on the screen */\n    top: 50%;    /* centers the loading animation vertically on the screen */\n    background-image: url(\"assets/images/loaders/logoAnim.gif\");    /* path to your loading animation */\n    background-repeat: no-repeat;\n    background-position: center;\n    margin: -100px 0 0 -100px;    /* is width and height divided by two */\n}\n.wrapper-content.pb30 {\n    padding-bottom: 30px;\n}\n.chart-position {\n    position: absolute;\n    top: -20px;\n    left: -329px;\n}\n.traffic-graph-outer {\n    background: #fff;\n    min-height: 270px;\n    overflow: hidden !important;\n}\n\n/*Analytic bropdown setting*/\n.analytics-top-inner h4 .company-dropdown-wrapper {\n    position: relative;\n}\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu {\n    position: absolute;\n    left: -14px;\n}\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu:before {\n    right: 227px;\n}\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu .company-dropdown-main {\n    width: 260px;\n    float: left;\n}\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu .company-dropdown-list > li > a .company-title {\n    width: 100%;\n}\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list >li > a .company-block-inner {\n    top: 7px;\n}\n\n/*Analytic bropdown setting end*/\n.light-loader-outer-new {\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    position: absolute;\n    top: 0;\n    left: 0px;\n    padding: 130px;\n    text-align: center;\n    opacity: 0.9;\n    margin-top: 20px;\n    display: table;\n}\n.light-loader-outer-new .light-loader-inner-new div {\n    display: table-cell;\n    float: none;\n    vertical-align: middle;\n}\n.analytics-bottom-dummy {\n    float: left;\n    width: 100%;\n    background: url('/assets/images/analytics/analytics_noCalc.jpg')no-repeat;\n    min-height: 67vh;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    position: fixed;\n    bottom: 0;\n}\n.analytics-bottom-popup {\n    background: #fb6066;\n    width: 50%;\n    margin: 0 auto;\n    position: relative;\n    margin-top: 85px;\n    min-height: 150px;\n    color: #fff;\n    text-align: center;\n    padding: 25px;\n    font-family: montserratlight;\n    font-size: 16px;\n    box-shadow: 13px 13px 10px rgba(0, 0, 0, 0.20);\n    z-index: 1;\n}\n.user-margin {\n    margin-top: -155px;\n}\n.traffic-margin {\n    margin-top: 15px;\n}\n.no-analytics-overlay {\n    position: fixed;\n    top: 42px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1010;\n    margin-top: 56px;\n    background: rgba(255, 255, 255, 0.5);\n    margin-left: 235px;\n}\n.no-analytics-overlay img {\n    width: 100%;\n}\n.analytics-bottom-popup i {\n    display: inherit;\n    margin-bottom: 15px;\n}\n.analytics-bottom-popup a {\n    color: #fff;\n    text-decoration: underline;\n}\n.analytics-overlay {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 0;\n    margin-top: 0px;\n    background: rgba(255, 255, 255, 0.99);\n    filter: alpha(opacity=50);\n    opacity: .5;\n}\n#person .dataTables_paginate.paging_full_numbers span {\n    position: relative;\n    top: -7px;\n}\n#person .dataTables_wrapper .dataTables_paginate .paginate_button {\n    padding: 0 3px;\n    margin: 0;\n    color: #fb545b !important;\n    background: none;\n    border: none;\n}\n#person .dataTables_wrapper .dataTables_paginate .paginate_button i {\n    font-size: 24px;\n}\n#person .dataTables_wrapper .dataTables_paginate .paginate_button {\n    padding: 0 3px;\n    margin: 0;\n    color: #fb545b !important;\n    background: none;\n    border: none;\n}\n#person .dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {\n    background: none;\n    border: none;\n    margin: 0;\n    padding: 0 3px;\n    color: #333 !important;\n}\n#person .dataTables_wrapper .dataTables_paginate .paginate_button:hover {\n    background: none;\n    border: none;\n    color: #333 !important;\n    margin: 0;\n    padding: 0 3px;\n}\n#person .dataTables_wrapper .dataTables_paginate .paginate_button.disabled, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {\n    color: #bec5c9 !important;\n}\n\n/* analytics resposnive */\n.loading:after {\n    content: ' .';\n    animation: dots 1s steps(5, end) infinite;\n    font-size: 18px;\n    line-height: 1px;\n    position: relative;\n    left: -3px;\n}\n@keyframes dots {\n    0%, 20% {\n        color: rgba(0, 0, 0, 0);\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    40% {\n        color: white;\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    60% {\n        text-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    80%, 100% {\n        text-shadow: .25em 0 0 white, .5em 0 0 white;\n    }\n}\n.leadlimit-alert {\n    padding-left: 15px;\n    width: 100%;\n    text-align: center;\n    display: inline-block;\n}\n.leadlimit-alert a {\n    color: #f00;\n}\n.company-dropdown-list.scrollbar {\n    height: 170px;\n}\n.scrollbar {\n    overflow-y: scroll;\n}\n.scrollbar::-webkit-scrollbar-track {\n    border-radius: 0px;\n    background-color: #f5f5f5;\n}\n.scrollbar::-webkit-scrollbar {\n    width: 6px;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n.scrollbar::-webkit-scrollbar:horizontal {\n    height: 6px;\n    background-color: rgba(0, 0, 0, 0.2);\n}\n.scrollbar::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    -webkit-box-shadow: inset 0 0 6px rgba(245, 245, 248, .8);\n    background-color: #aaa;\n}\n.company-dropdown-wrapper:hover .btn.dropdown-toggle i, .team-settings-wrapper .company-dropdown-wrapper i.material-icons:focus, .team-settings-wrapper .company-dropdown-wrapper i.material-icons:hover {\n    color: #f87b80\n}\n.company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    padding: 0;\n    font-size: 12px;\n    text-transform: none;\n    color: #62696d;\n    font-family: montserratlight;\n    line-height: 20px;\n    border: none;\n    background: 0 0\n}\n.company-dropdown-wrapper button.btn.btn-default.dropdown-toggle:focus, .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle:hover {\n    background: 0 0 !important;\n    box-shadow: none !important;\n    border: 0 !important\n}\n.company-dropdown-wrapper .dropdown-menu {\n    padding: 10px 0;\n    top: 30px;\n    left: 16px;\n    min-width: 190px;\n    font-size: 12px;\n    background: #62696d;\n    border-radius: 4px !important;\n    border: none;\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .24);\n    display: none;\n    z-index: 9\n}\n.company-dropdown-wrapper:hover .dropdown-menu {\n    display: block\n}\n.company-dropdown-wrapper .dropdown-menu:before {\n    position: absolute;\n    top: -12px;\n    right: 85px;\n    display: inline-block;\n    border-right: 8px solid transparent;\n    border-bottom: 12px solid #62696d;\n    border-left: 8px solid transparent;\n    border-bottom-color: #62696d;\n    content: ''\n}\n.company-dropdown-wrapper .dropdown-menu>li>a:hover {\n    color: #fff;\n    background: #62696d\n}\n.company-dropdown-wrapper .dropdown-menu>li>a:focus {\n    color: #fff;\n    background: 0 0\n}\n.company-dropdown-wrapper .dropdown-menu>li>a:focus i.material-icons, .company-dropdown-wrapper .dropdown-menu>li>a:hover i.material-icons {\n    color: #fff\n}\n.company-dropdown-wrapper .dropdown-menu>li>a.add-new-company {\n    color: #fff;\n    padding: 10px 15px;\n    text-transform: capitalize;\n    font-family: montserratregular;\n    float: left;\n    width: 100%\n}\n.company-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\n    font-size: 18px;\n    color: #fff;\n    padding: 0\n}\n.company-dropdown-main {\n    width: 190px\n}\n.company-dropdown-wrapper .company-dropdown-list.slimscroll, .company-dropdown-wrapper .slimScrollDiv {\n    float: left;\n    width: 100% !important;\n    height: 155px !important\n}\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a {\n    color: #fff;\n    padding: 10px 15px;\n    text-transform: capitalize;\n    font-family: montserratregular;\n    float: left;\n    width: 100%;\n    position: relative;\n}\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a i.material-icons {\n    font-size: 18px;\n    color: #fff;\n    padding: 0\n}\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-block {\n    float: left;\n    width: 10%\n}\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-block-inner {\n    background: #fff;\n    border-radius: 50px;\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    color: #62696d;\n    text-align: center;\n    padding-top: 4px;\n    font-size: 11px;\n    top: 7px\n}\n.company-block-content {\n    float: left;\n    width: 80%;\n    margin-left: 30px\n}\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-title {\n    float: left;\n    width: 95%\n}\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-site {\n    float: left;\n    width: 95%;\n    font-size: 10px\n}\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a.hvr-sweep-to-right::before, .company-dropdown-wrapper .dropdown-menu>li>a.hvr-sweep-to-right.add-new-company::before {\n    background: #71787b\n}\n.select-style{\n    outline: none;\n    border: 2px solid #dae2e6;\n    padding:5px 10px 5px 5px;\n    color: #636f76;\n    background: none;\n    cursor: pointer;\n    font-size: 12px;\n    margin-right: 12px;\n    width: 22%;\n    float: right;\n    font-family: montserratlight;\n}\n.select-span{\n    float: right;\n    background: #dae2e6;\n    display: block;\n    height: 31px;\n    width: 1px;\n    margin-right: 11px;\n}\n.btn-outer {\n    float: right;\n    margin-right: 0px;\n    width: 570px;\n}\n.btn-outer button {\n    border: 2px solid #dae2e6;\n    padding: 4px 10px 4px 10px;\n    color: #636f76;\n    background: none;\n    cursor: pointer;\n    font-size: 12px;\n    margin-right: 15px;\n    float: right;\n    font-family: montserratlight;\n}\n.btn-outer button:hover {\n    background: #fb545b;\n    color: #fff;\n}\n.btn-outer button:hover .export i {\n    color: #fff;\n}\n.btn-outer button:hover .update i {\n    color: #fff;\n}\n.btn-outer button p {\n    margin: 0px;\n}\n.btn-outer button p i {\n    font-size: 14px;\n    color: #636f76;\n    position: relative;\n    top: 2px;\n}\n.btn-outer a {\n    border: 2px solid #dae2e6;\n    padding: 4px 10px 4px 10px;\n    color: #636f76;\n    background: none;\n    cursor: pointer;\n    font-size: 12px;\n    margin-right: 15px;\n    float: right;\n}\n.btn-outer a:hover {\n    background: #fb545b;\n    color: #fff;\n}\n.btn-outer a:hover i {\n    background: #fb545b;\n    color: #fff;\n}\n.btn-outer a i {\n    font-size: 14px;\n    color: #636f76;\n    position: relative;\n    top: 2px;\n}\n.export i.material-icons {\n    position: relative;\n    font-size: 14px;\n    top: 3px;\n    left: 0;\n    color: #bec5c9;\n}\n\n/* analytics */\n.left-sidebar {\n    left: 0;\n    top: 60px;\n    bottom: 0;\n    height: 100vh;\n    width: 255px;\n    z-index: 1;\n    padding-top: 15px;\n    box-shadow: 0 0 9px 1px rgba(0, 0, 0, .1);\n    border-right: 1px solid #d7dbdd\n}\n.left-sidebar ul {\n    padding: 0;\n    margin: 0\n}\n.left-sidebar ul li a {\n    font-size: 12px;\n    color: #8e989f;\n    line-height: 14px;\n    float: left;\n    padding: 20px 15px;\n    width: 100%\n}\n.left-sidebar ul li a h6 {\n    font-size: 12px;\n    color: #62696d;\n    font-family: montserratregular;\n    text-transform: uppercase;\n    margin: 0 0 6px\n}\n.left-sidebar ul li a .left-sidebar-icon i.material-icons {\n    color: #bec5c9;\n    margin-top: -2px;\n    font-size: 24px;\n}\n.left-sidebar ul li a .left-sidebar-icon {\n    float: left;\n    width: auto\n}\n.left-sidebar ul li a .left-sidebar-icon.noti-icon i.material-icons {\n    font-size: 22px\n}\n.left-sidebar ul li a .left-sidebar-title {\n    float: left;\n    width: 81%;\n    margin-left: 17px\n}\n.left-sidebar ul li.active a .left-sidebar-icon i.material-icons, .left-sidebar ul li.active a .left-sidebar-title h6, .left-sidebar ul li:hover a .left-sidebar-icon i.material-icons, .left-sidebar ul li:hover a .left-sidebar-title h6 {\n    color: #fb545b;\n    transition: all .3s ease 0s !important\n}\n.left-sidebar .tabs-left, .tabs-wrapper .tab-sub-content {\n    float: left;\n    width: 100%\n}\n@media (max-width:767px) {\n    .settings-cookies #smScrSideNavbar.left-sidebar, .settings-cookies .membership-details-inner-tabs {\n        top: 50px !important\n    }\n}\n.settings-cookies #membership-details .membership-details-inner-tabs, .settings-cookies .left-sidebar {\n    top: 98px\n}\n.left-sidebar {\n    background: #fff;\n    position: fixed;\n    float: left\n}\n.left-sidebar {\n    left: 0;\n    top: 60px;\n    bottom: 0;\n    height: 100vh;\n    width: 255px;\n    z-index: 1;\n    padding: 0px;\n    padding-top: 15px;\n    box-shadow: 0 0 9px 1px rgba(0, 0, 0, .1);\n    border-right: 1px solid #d7dbdd\n}\n.left-sidebar ul {\n    padding: 0;\n    margin: 0\n}\n.left-sidebar ul li a {\n    font-size: 12px;\n    color: #8e989f;\n    line-height: 14px;\n    float: left;\n    padding: 20px 15px;\n    width: 100%\n}\n.left-sidebar ul li a h6 {\n    font-size: 12px;\n    color: #62696d;\n    font-family: montserratregular;\n    text-transform: uppercase;\n    margin: 0 0 6px\n}\n.left-sidebar ul li a .left-sidebar-icon i.material-icons {\n    color: #bec5c9;\n    margin-top: -2px\n}\n.left-sidebar ul li a .left-sidebar-icon {\n    float: left;\n    width: auto\n}\n.left-sidebar ul li a .left-sidebar-icon.noti-icon i.material-icons {\n    font-size: 22px\n}\n.left-sidebar ul li a .left-sidebar-title {\n    float: left;\n    width: 81%;\n    margin-left: 17px\n}\n.left-sidebar ul li.active a .left-sidebar-icon i.material-icons, .left-sidebar ul li.active a .left-sidebar-title h6, .left-sidebar ul li:hover a .left-sidebar-icon i.material-icons, .left-sidebar ul li:hover a .left-sidebar-title h6 {\n    color: #fb545b;\n    transition: all .3s ease 0s !important\n}\n.left-sidebar .tabs-left, .tabs-wrapper .tab-sub-content {\n    float: left;\n    width: 100%\n}\n.analytics-left-side {\n    position: absolute;\n    top: 0 !important;\n    height: 100%;\n}\n.analytics-top-outer {\n    float: left;\n    width: 100%;\n    background: url('/assets/images/analytics/analytics-img.jpg')no-repeat;\n    min-height: 160px; /* margin-top:72px;  */\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    position: relative;\n    z-index: 10;\n}\n.wrapper-content {\n    float: left;\n    width: 100%;\n    padding: 35px 0px 30px 255px;\n    background: #f6f8f9;\n    min-height: 100vh;\n    height: 100%\n}\n.wrapper-content.cancelled-setting {\n    padding-left: 30px\n}\n.popover-wrapper .popover-block {\n    position: relative;\n    top: 18px;\n    left: -35px;\n    min-width: 100px;\n    padding: 8px;\n    font-size: 12px;\n    background: #62696d;\n    border-radius: 4px !important;\n    border: none;\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .24);\n    display: none;\n    z-index: 9\n}\n.popover-wrapper:hover .popover-block {\n    display: block\n}\n.popover-wrapper .popover-block:before {\n    position: absolute;\n    top: -8px;\n    right: 42px;\n    display: inline-block;\n    border-right: 6px solid transparent;\n    border-bottom: 8px solid #62696d;\n    border-left: 6px solid transparent;\n    border-bottom-color: #62696d;\n    content: ''\n}\n.billing-white-bottom ul.billing-list li, .left-sidebar ul li, li, ul {\n    list-style: none\n}\n.analytics-content {\n    padding: 30px 0px;\n}\n\n/*Css Import From Custom */\n@media screen and (min-width:320px) and (max-width:768px) {\n    .chart-position {\n        position: absolute;\n        top: -45px !important;\n        left: -133px !important\n    }\n}\n@media (max-width:767px) {\n    #lgScrSideNavbar, .dash-circle, .dash-prog-outer h2, .full-menu {\n        display: none\n    }\n    #responsive-header .navbar-fixed-top .nav-padding {\n        padding-right: 0;\n        padding-left: 0\n    }\n    .main-logo {\n        display: none !important\n    }\n    .mobile-menu {\n        display: block;\n        float: right;\n        margin-top: 7px;\n        position: relative\n    }\n    #responsive-header .navbar-default {\n        background: #fb5f66 !important;\n        border: none;\n        margin-top: 0\n    }\n    #responsive-header .navbar-default .mat-icon i.material-icons {\n        font-size: 24px;\n        color: #fff;\n        padding: 13px\n    }\n    #responsive-header .navbar-header h4.title {\n        color: #fff;\n        font-size: 16px;\n        text-align: center;\n        text-transform: uppercase;\n        padding-top: 7px\n    }\n    .mobile-menu button {\n        border: none;\n        box-shadow: none;\n        color: #fff;\n        background: 0 0;\n        float: right;\n        margin: 0 5px\n    }\n    .mobile-menu button:focus {\n        background: 0 0 !important;\n        color: #fff !important\n    }\n    .mobile-menu .btn-default:hover {\n        color: #fff;\n        background: 0 0\n    }\n    .mobile-dash {\n        padding: 0\n    }\n    .mobile-menu .dropdown-menu {\n        background: #62696d;\n        top: -11px;\n        border-radius: 0;\n        left: -176px;\n        width: 235px;\n        font-family: montserratlight;\n        padding-bottom: 55px\n    }\n    .mobile-menu .name-dropdown-border {\n        width: 100%;\n        margin: 5px 0\n    }\n    .mobile-menu .user-outr {\n        float: left;\n        width: 100%;\n        padding: 0;\n        margin: 0;\n        display: block;\n        text-transform: capitalize\n    }\n    .mobile-menu .user-outr li {\n        float: right;\n        font-size: 24px;\n        font-family: montserratlight;\n        color: #fff;\n        margin-right: 24px;\n        margin-top: 8px;\n        margin-bottom: 6px;\n        margin-left: 30px;        /*white-space: normal;*/\n        word-wrap: break-word;\n        width: 175px;\n        text-align: right;\n    }\n    .mobile-menu .user-outr li a {\n        margin-right: 30px\n    }\n    .user-outr li a {\n        float: left;\n        width: auto;\n        border: 2px solid #dae2e6;\n        border-radius: 50%;\n        margin-left: 5px;\n        margin-bottom: 5px\n    }\n    .user-outr li a:hover {\n        border: 2px solid #f56151\n    }\n    .mobile-menu .company-list li, .mobile-menu .name-list li {\n        margin: 10px 0;\n        text-align: right;\n        font-size: 16px;\n        width: 100%;\n        float: left;\n        padding-right: 20px\n    }\n    .mobile-menu .company-list li a, .mobile-menu .name-list li a {\n        float: right;\n        color: #fff\n    }\n    .mobile-menu .company-list li a i {\n        margin-right: 20px;\n        float: left\n    }\n    .mobile-menu .name-list li a i {\n        margin-left: 20px;\n        float: right\n    }\n    .mobile-menu .company-list-title {\n        float: left;\n        color: #fff\n    }\n    .white-logo {\n        display: block !important\n    }\n    .dash-prog-outer {\n        float: left;\n        width: 100%;\n        margin-top: 10px;\n        margin-bottom: 10px\n    }\n    .dash-prog-outer h5 {\n        font-size: 24px;\n        text-align: center;\n        width: 100%;\n        margin-bottom: 1px\n    }\n    .dash-prog-outer .company-dropdown-wrapper {\n        min-height: 35px;\n        width: 100%;\n        text-align: center\n    }\n    .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n        margin: 0 auto;\n        float: none;\n        text-align: center\n    }\n    #responsive-header .navbar-header {\n        float: left;\n        margin-left: -5px;\n        margin-right: 0 !important\n    }\n    #responsive-header .navbar-logopadding {\n        padding-right: 0;\n        padding-top: 0\n    }\n    #responsive-header .navbar-default {\n        height: 50px;\n        margin: 0;\n        padding-bottom: 0\n    }\n    .white-logo .navbar-brand img {\n        height: 53px;\n        margin: -20px auto 0\n    }\n    .white-logo .navbar-brand {\n        float: none\n    }\n    .user-outr li a.add-user {\n        width: 45px;\n        height: 45px;\n        padding-top: 9px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\n        top: -30px;\n        left: 17px;\n        font-size: 34px;\n        position: relative;\n        color: #f87b80\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-title {\n        font-size: 16px\n    }\n    .company-dropdown-wrapper .dropdown-menu>li>a .company-site {\n        width: 91%;\n        font-size: 14px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-block-inner {\n        width: 35px;\n        height: 35px;\n        padding-top: 8px;\n        font-size: 14px;\n        top: 13px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a.add-new-company {\n        font-size: 14px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\n        font-size: 24px\n    }\n    .company-block-content {\n        margin-left: 50px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\n        right: 34px\n    }\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n        top: 8px;\n        left: -8px\n    }\n    #smScrWrapperContent {\n        display: none\n    }\n    #new-header .company-nav {\n        display: block !important\n    }\n    #new-header .navbar-default.company-nav {\n        background: #fff !important;\n        border-bottom: 1px solid #dae2e6;\n        padding-top: 0 !important\n    }\n    #new-header .company-nav .navbar-header {\n        width: 100% !important\n    }\n    #new-header .company-nav .navbar-logopadding {\n        padding-left: 15px;\n        padding-top: 22px;\n        height: 105px;\n        width: 100%;\n        padding-right: 15px !important\n    }\n    .company_name_avatar-circle {\n        margin-right: 15px\n    }\n    .company_name_span {\n        width: 57%;\n        line-height: 30px\n    }\n    #new-header {\n        height: 50px\n    }\n    #new-header .company-nav.navbar-fixed-top .nav-padding {\n        padding-left: 0;\n        padding-right: 0\n    }\n}\n@media (max-width:991px) {\n    .visible-tabs {\n        display: none\n    }\n}\n@media (min-width:992px) {\n    .visible-tabs {\n        display: block !important\n    }\n    .hidden-tabs {\n        display: none !important\n    }\n}\n@media (min-width:768px) and (max-width:768px) {\n    .analytics-mt0 {\n        padding-left: 0px;\n    }\n}\n@media (min-width:360px) and (max-width:400px) {\n    .chart-position {\n        position: absolute;\n        top: -45px !important;\n        left: -100px !important\n    }\n}\n@media (min-width:410px) and (max-width:440px) {\n    .chart-position {\n        position: absolute;\n        top: -45px !important;\n        left: -170px !important\n    }\n}\n@media screen and (min-width:1024px) and (max-width:1100px) {\n    .analytics-box-outer {\n        margin-left: 20px !important\n    }\n    .analytics-box-outer h4 {\n        font-size: 18px !important\n    }\n    .traffic-graph-outer {\n        width: 100% !important;\n        margin-right: 20px;\n        margin-left: 20px\n    }\n    .chart-position {\n        position: absolute;\n        top: -20px;\n        left: -315px\n    }\n}\n@media (max-width:767px) {\n    #person .details-box-outer {\n    width: 100%;\n    margin-left: 0;\n}\n.select-span{\n    display: none;\n}\n    .main-left-sidebar {\n        display: none\n    }\n    .mobile-left-sidebar {\n        display: block;\n        width: 100%;\n        top: 50px;\n        border-right: none;\n        box-shadow: none\n    }\n    .modal-open .modal {\n        padding-right: 0 !important\n    }\n    .wrapper-content {\n        margin-left: 0;\n        width: 100%;\n        padding-left: 0;\n        padding-right: 0;\n        padding-top: 0;\n        margin-top: 0;\n        min-height: 89vh\n    }\n    .company-dropdown-main {\n        width: 100%\n    }\n    .company-dropdown-wrapper .dropdown-menu {\n        top: 40px;\n        left: 7px;\n        font-size: 14px;\n        width: 282px\n    }\n    .company-dropdown-wrapper .dropdown-menu:before {\n        right: 90px\n    }\n    .company-dropdown-wrapper .dropdown-menu>li>a .company-title {\n        font-size: 16px\n    }\n    .company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-site {\n        font-size: 14px\n    }\n    .company-dropdown-wrapper .dropdown-menu .company-dropdown-list>li>a .company-block-inner {\n        width: 35px;\n        height: 35px;\n        padding-top: 8px;\n        font-size: 14px;\n        top: 13px\n    }\n    .tabs-wrapper .nav-tabs.nav-justified>li:nth-child(1)>a {\n        font-size: 11px;\n        float: left;\n        width: 33.3%;\n        text-align: center;\n        padding: 10px 22px;\n        margin-bottom: 0\n    }\n    .tabs-wrapper .nav-tabs.nav-justified>li:nth-child(2)>a, .tabs-wrapper .nav-tabs.nav-justified>li:nth-child(3)>a {\n        font-size: 11px;\n        float: left;\n        width: 33.3%;\n        text-align: center;\n        padding: 10px 12px;\n        margin-bottom: 0\n    }\n    .tabs-wrapper #team-settings .nav-tabs.nav-justified>li:nth-child(1)>a {\n        font-size: 11px;\n        float: left;\n        width: 50%;\n        text-align: center;\n        padding: 10px 22px;\n        margin-bottom: 0\n    }\n    .tabs-wrapper #team-settings .nav-tabs.nav-justified>li:nth-child(2)>a {\n        font-size: 11px;\n        float: left;\n        width: 50%;\n        text-align: center;\n        padding: 10px 12px;\n        margin-bottom: 0\n    }\n    .company-block-content {\n        margin-left: 50px\n    }\n    .company-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\n        font-size: 24px !important;\n        top: -2px;\n        position: relative;\n        margin-right: 5px\n    }\n    .team-settings-wrapper .company-dropdown-wrapper i.material-icons {\n        padding-top: 2px\n    }\n    .company-dropdown-title-active-mobile {\n        display: block\n    }\n    #active-users .active-users-dropdown-wrapper .mat-icon-arrow-down, .active-users-box span.joined-date-mobile, .invited-users-card .active-users-box h6.designation {\n        display: none\n    }\n    .wrapper-content-inner {\n        padding: 0;\n        margin-top: 22px;\n        float: left;\n        width: 100%\n    }\n}\n@media (min-width:320px) and (max-width:768px) {\n    .select-style {\n        margin-top: 10px;\n    float: left;\n    margin-left: 30px;\n}\n    .daterangepicker .calendar-table{\n        border:none;\n    }\n    #membership-details .membership-details-inner-tabs {\n        display: none;\n    }\n    #membership-details .membership-details-tabs-resp {\n        display: block;\n    }\n    #membership-details .tab-content.tab-sub-content {\n        width: 100%;\n        margin-left: 0;\n        padding: 0px 0px;\n    }\n\n    /* analytics resp sahil start */\n    .analytics-top-outer {\n        margin-top: 0px;\n        min-height: 160px;\n    }\n    .analytics-left-side {\n        position: relative !important;\n        top: 0 !important;\n        width: 100%;\n        height: auto !important;\n        padding-top: 0;\n    }\n    .analytics-bottom-popup {\n        width: 100%;\n    }\n    .analytics-top-inner h4 {\n        font-size: 20px;\n    }\n    .left-sidebar.analytics-left-side ul li a {\n        width: 33%;\n        text-align: center;\n    }\n    .left-sidebar.analytics-left-side ul li a h6 {\n        margin-bottom: 0px;\n        font-size: 11px;\n    }\n    .left-sidebar.analytics-left-side ul li a .left-sidebar-icon {\n        display: none;\n    }\n    .left-sidebar.analytics-left-side ul li a .left-sidebar-title {\n        width: 100%;\n        margin: 0px;\n    }\n    .left-sidebar.analytics-left-side ul li a .left-sidebar-title span {\n        display: none;\n    }\n\n    /*.wrapper-content{ padding-top: 25px !important; }*/\n    .analytics-box-outer {\n        margin-left: 0px;\n        margin-bottom: 20px;\n    }\n    .user-detail-outr {\n        padding-left: 30px;\n        padding-right: 30px;\n    }\n    #area-example svg {\n        width: 100%;\n    }\n    .dp-outer {\n           margin: 0px auto;\n    float: left;\n    display: block;\n    margin-top: 10px;\n    margin-left: 30px;\n        margin-right: calc(100% - 205px);\n    }\n    .btn-outer {\n           width: 100%;\n    margin-top: 10px;\n    text-align: center;\n    }\n    .btn-outer button {\n        margin: 0;\n    margin-bottom: 10px;\n    margin-left: 30px;\n    float: left;\n    margin-top: 10px;\n        margin-right: calc(100% - 280px);\n   \n    }\n    .details-box-outer {\n        margin-left: 0px;\n        margin-bottom: 20px;\n    }\n    .traffic-graph-outer {\n        width: 100%;\n    }\n    .analytics-top-inner {\n        margin-top: 6%;\n    }\n    .analytics-mid-inner {\n        padding-right: 26px;\n        margin-top: 20px;\n    }\n    .traffic-outr {\n        padding: 0 30px;\n    }\n    .user-detail-outer {\n        width: 305px;\n    }\n    .user-detail-outer .mid-section {\n        padding-right: 15px;\n    }\n\n    /* .user-detail-outer .mid-section .slimScrollDiv {height: 320px !important;}\n    .user-detail-outer .mid-section .outer-slim {height: 320px !important;} */\n    .analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu {\n        position: absolute;\n        left: -75px;\n        width: 170px;\n        min-width: 170px;\n    }\n    .analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu:before {\n        right: 75px;\n    }\n    .analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu .company-dropdown-main {\n        width: 100%;\n    }\n    .analytics-top-inner .company-dropdown-wrapper .dropdown-menu .company-dropdown-list > li > a {\n        padding: 10px 15px;\n    }\n    .analytics-top-outer .company-dropdown-wrapper .dropdown-menu .company-dropdown-list >li > a .company-block-inner {\n        width: 20px;\n        height: 20px;\n        padding-top: 4px;\n        font-size: 11px;\n    }\n    .analytics-top-outer .company-block-content {\n        margin-left: 30px;\n        font-size: 12px;\n    }\n    .analytics-mt0 {\n        padding-top: 25px;\n    }\n    .daterangepicker.dropdown-menu {\n        right: 28px !important;\n        width: 252px !important;\n        left: 25px !important;\n        top: 368px !important;\n    }\n    .analytics-top-inner h4 .mob-width-set {\n        min-width: 60px;\n        float: left;\n        max-width: 190px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap\n    }\n    .navbar-fixed-bottom, .navbar-fixed-top {\n        z-index: 9999 !important;\n    }\n    .analytics-page.tab-content {\n        padding: 0;\n    }\n    .light-loader-outer-new {\n        padding: 130px 0px;\n        width: calc(100% + 60px);\n    }\n    #traffic .dp-outer {\n        margin-top: 5px;\n    }\n}\n@media screen and (min-width:640px) and (max-width:640px) {\n    .chart-position {\n        position: absolute;\n        top: -45px !important;\n        left: -63px !important\n    }\n}"

/***/ },

/***/ 922:
/***/ function(module, exports) {

module.exports = "/**\n* A stylesheet for use with Bootstrap 3.x\n* @author: Dan Grossman http://www.dangrossman.info/\n* @copyright: Copyright (c) 2012-2015 Dan Grossman. All rights reserved.\n* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php\n* @website: https://www.improvely.com/\n*/\n\n/* Container Appearance */\n\n.daterangepicker {\n  position: absolute;\n  background: #fff;\n  top: 100px;\n  left: 20px;\n  padding: 4px;\n  margin-top: 1px;\n  border-radius: 4px;\n}\n\n.daterangepicker.opensleft:before {\n  position: absolute;\n  top: -7px;\n  right: 9px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #ccc;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: '';\n}\n\n.daterangepicker.opensleft:after {\n  position: absolute;\n  top: -6px;\n  right: 10px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #fff;\n  border-left: 6px solid transparent;\n  content: '';\n}\n\n.daterangepicker.openscenter:before {\n  position: absolute;\n  top: -7px;\n  left: 0;\n  right: 0;\n  width: 0;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #ccc;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: '';\n}\n\n.daterangepicker.openscenter:after {\n  position: absolute;\n  top: -6px;\n  left: 0;\n  right: 0;\n  width: 0;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #fff;\n  border-left: 6px solid transparent;\n  content: '';\n}\n\n.daterangepicker.opensright:before {\n  position: absolute;\n  top: -7px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #ccc;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: '';\n}\n\n.daterangepicker.opensright:after {\n  position: absolute;\n  top: -6px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #fff;\n  border-left: 6px solid transparent;\n  content: '';\n}\n\n.daterangepicker.dropup{\n  margin-top: -5px;\n}\n.daterangepicker.dropup:before{\n  top: initial;\n  bottom:-7px;\n  border-bottom: initial;\n  border-top: 7px solid #ccc;\n}\n.daterangepicker.dropup:after{\n  top: initial;\n  bottom:-6px;\n  border-bottom: initial;\n  border-top: 6px solid #fff;\n}\n\n.daterangepicker.dropdown-menu {\n  max-width: none;\n  z-index: 3000;\n}\n\n.daterangepicker .ranges, .daterangepicker .calendar {\n  float: left;\n}\n\n.daterangepicker.single .ranges, .daterangepicker.single .calendar {\n  float: none;\n}\n\n.daterangepicker .ranges {\n  margin: 4px;\n  text-align: left;\n}\n\n.daterangepicker .calendar {\n  display: none;\n  max-width: 270px;\n}\n\n.daterangepicker.show-calendar .calendar {\n  display: block;\n}\n\n.daterangepicker .calendar.single .calendar-table {\n  border: none;\n}\n\n/* Calendars */\n\n.daterangepicker .calendar th, .daterangepicker .calendar td {\n  white-space: nowrap;\n  text-align: center;\n  min-width: 32px;\n}\n\n.daterangepicker .calendar-table {\n  border: 1px solid #ddd;\n  padding: 4px;\n  border-radius: 4px;\n  background: #fff;\n}\n\n.daterangepicker .calendar.left .calendar-table {\n  border-right: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.daterangepicker .calendar.right .calendar-table {\n  border-left: none;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;  \n}\n\n.daterangepicker .calendar.left {\n  margin: 4px 0 4px 4px;\n}\n\n.daterangepicker .calendar.right {\n  margin: 4px 4px 4px 0;\n}\n\n.daterangepicker .calendar.left .calendar-table {\n  padding-right: 12px;\n}\n\n.daterangepicker table {\n  width: 100%;\n  margin: 0;\n}\n\n.daterangepicker td, .daterangepicker th {\n  text-align: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.daterangepicker td.off, .daterangepicker td.off.in-range, .daterangepicker td.off.start-date, .daterangepicker td.off.end-date {\n  color: #999;\n  background: #fff;\n}\n\n.daterangepicker td.disabled, .daterangepicker option.disabled {\n  color: #999;\n}\n\n.daterangepicker td.available:hover, .daterangepicker th.available:hover {\n  background: #eee;\n}\n\n.daterangepicker td.in-range {\n  background: #ebf4f8;\n  border-radius: 0;\n}\n\n.daterangepicker td.start-date {\n  border-radius: 4px 0 0 4px;\n}\n\n.daterangepicker td.end-date {\n  border-radius: 0 4px 4px 0;\n}\n\n.daterangepicker td.start-date.end-date {\n  border-radius: 4px;\n}\n\n.daterangepicker td.active, .daterangepicker td.active:hover {\n  background-color: #357ebd;\n  border-color: #3071a9;\n  color: #fff;\n}\n\n.daterangepicker td.week, .daterangepicker th.week {\n  font-size: 80%;\n  color: #ccc;\n}\n\n.daterangepicker select.monthselect, .daterangepicker select.yearselect {\n  font-size: 12px;\n  padding: 1px;\n  height: auto;\n  margin: 0;\n  cursor: default;\n}\n\n.daterangepicker select.monthselect {\n  margin-right: 2%;\n  width: 56%;\n}\n\n.daterangepicker select.yearselect {\n  width: 40%;\n}\n\n.daterangepicker select.hourselect, .daterangepicker select.minuteselect, .daterangepicker select.secondselect, .daterangepicker select.ampmselect {\n  width: 50px;\n  margin-bottom: 0;\n}\n\n.daterangepicker th.month {\n  width: auto;\n}\n\n/* Text Input Above Each Calendar */\n\n.daterangepicker .input-mini {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  color: #555;\n  display: block;\n  height: 30px;\n  line-height: 30px;\n  vertical-align: middle;\n  margin: 0 0 5px 0;\n  padding: 0 6px 0 28px;\n  width: 100%;\n}\n\n.daterangepicker .input-mini.active {\n  border: 1px solid #357ebd;\n}\n\n.daterangepicker .daterangepicker_input i {\n  position: absolute;\n  left: 8px;\n  top: 8px;\n}\n\n.daterangepicker .left .daterangepicker_input {\n  padding-right: 12px;\n}\n\n.daterangepicker .daterangepicker_input {\n  position: relative;\n}\n\n/* Time Picker */\n\n.daterangepicker .calendar-time {\n  text-align: center;\n  margin: 5px auto;\n  line-height: 30px;\n  position: relative;\n  padding-left: 28px;\n}\n\n.daterangepicker .calendar-time select.disabled {\n  color: #ccc;\n  cursor: not-allowed;\n}\n\n/* Predefined Ranges */\n\n.daterangepicker .ranges {\n  font-size: 11px;\n}\n\n.daterangepicker .ranges ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 160px;\n}\n\n.daterangepicker .ranges li {\n  font-size: 13px;\n  background: #f5f5f5;\n  border: 1px solid #f5f5f5;\n  color: #08c;\n  padding: 3px 12px;\n  margin-bottom: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.daterangepicker .ranges li.active, .daterangepicker .ranges li:hover {\n  background: #08c;\n  border: 1px solid #08c;\n  color: #fff;\n}"

/***/ },

/***/ 924:
/***/ function(module, exports) {

module.exports = "<div class=\"tab-pane active \" id=\"overview\">\n  <div class=\"graph-val\"><span class=\"red\"></span> Unique Views </div>\n  <div class=\"graph-val\"><span class=\"blue\"></span> Page Views </div>\n  <og-date-range-picker (date)=\"onDateSelect($event)\"></og-date-range-picker>\n  <div class=\"col-md-12 col-sm-12 col-xs-12 user-detail-outr \">\n    <div id=\"area-example\" style=\"height: 300px;\"></div>\n    <div class=\"light-loader-outer-new\" *ngIf=\"graphLoader !== 'done'\">\n      <div class=\"light-loader-inner-new\">\n          <div class=\"loader\" *ngIf=\"graphLoader === 'loading'\"></div>\n          <p *ngIf=\"graphLoader !== 'loading'\">{{graphLoader}}</p>\n          <a class=\"icon-link\" *ngIf=\"graphLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-sm-12 col-xs-12 traffic-outr\">\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\n      <h6><i class=\"material-icons\">people</i> Unique/Total Visitors</h6>\n      <h4>{{(!stats)?'--':stats.uniqueVisitors}}/{{(!stats)?'--':stats.visitors}}</h4>\n      <div class=\"pull-left\">\n        <div id=\"chart-container\"></div>\n      </div>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\n      <h6><i class=\"material-icons\">person_add</i> Conversions</h6>\n      <h4>{{(!stats)?'--':stats.conversions}}</h4>\n      <div class=\"pull-left\">\n        <div id=\"chart-container1\"></div>\n      </div>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\n      <h6><i class=\"material-icons\">trending_up</i> Conversion Rate</h6>\n      <h4>{{(!stats)?'--':stats.conversionRate}}%</h4>\n      <div class=\"pull-left\">\n        <div id=\"chart-container2\"></div>\n      </div>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\n      <h6><i class=\"material-icons\">query_builder</i> Avg Length of Visit</h6>\n      <h4>{{(!stats)?'--':stats.timeOnPage}}</h4>\n      <div class=\"pull-left\">\n        <div id=\"chart-container3\"></div>\n      </div>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\n      <h6><i class=\"material-icons\">record_voice_over</i> Avg. Responses</h6>\n      <h4>{{(!stats)?'--':stats.avgResponse}}</h4>\n      <div class=\"pull-left\">\n        <div id=\"chart-container4\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 925:
/***/ function(module, exports) {

module.exports = "<div class=\"tab-pane\" id=\"traffic\">\n  <og-date-range-picker (date)=\"onDateSelect($event)\"></og-date-range-picker>\n  <div *ngIf= \"!limit_alert\" class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"col-md-6\"><div class=\" traffic-graph-outer\" [class.traffic-graph-height]=\"geoLoader !== 'done'\">\n      <div class=\"col-md-5 col-sm-12 col-xs-12 np\" *ngIf=\"geoLoader == 'done'\">\n        <h4>Top Geographies</h4>\n      </div>\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\n        <div id=\"regions_div\" ></div>\n      </div>\n      <div class=\"light-loader-outer traffic1\" *ngIf=\"geoLoader !== 'done'\">\n        <div class=\"loader\" *ngIf=\"geoLoader === 'loading'\"></div>\n        <p *ngIf=\"geoLoader !== 'loading'\">{{geoLoader}}</p>\n        <a class=\"icon-link\" *ngIf=\"geoLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\n      </div>\n    </div></div>\n    <div class=\"col-md-6\"><div class=\"traffic-graph-outer\" [class.traffic-graph-height]=\"deviceLoader !== 'done'\">\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\" *ngIf=\"deviceLoader == 'done'\">\n        <h4>Devices</h4>\n      </div>\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\n        <div id=\"piechart\" class=\"chart-position\" ></div>\n      </div>\n      <div class=\"light-loader-outer traffic2\" *ngIf=\"deviceLoader !== 'done'\">\n        <div class=\"loader\" *ngIf=\"deviceLoader === 'loading'\"></div>\n        <p *ngIf=\"deviceLoader !== 'loading'\">{{deviceLoader}}</p>\n        <a class=\"icon-link\" *ngIf=\"deviceLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\n      </div>\n    </div></div>\n  </div>\n  <div *ngIf= \"!limit_alert\" class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"col-md-6\"><div class=\"traffic-graph-outer\" [class.traffic-graph-height]=\"socialLoader !== 'done'\">\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\" *ngIf=\"socialLoader == 'done'\">\n        <h4>Traffic Sources</h4>\n      </div>\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\n        <div id=\"piechart1\" class=\"chart-position\" ></div>\n      </div>\n      <div class=\"light-loader-outer traffic3\" *ngIf=\"socialLoader !== 'done'\">\n        <div class=\"loader\" *ngIf=\"socialLoader === 'loading'\"></div>\n        <p *ngIf=\"socialLoader !== 'loading'\">{{socialLoader}}</p>\n        <a class=\"icon-link\" *ngIf=\"socialLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\n      </div>\n    </div></div>\n    <div class=\"col-md-6\"><div class=\"traffic-graph-outer\" [class.traffic-graph-height]=\"browserLoader !== 'done'\">\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\" *ngIf=\"browserLoader == 'done'\">\n        <h4>Browser</h4>\n      </div>\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\n        <div id=\"piechart2\" class=\"chart-position\" ></div>\n      </div>\n      <div class=\"light-loader-outer traffic4\" *ngIf=\"browserLoader !== 'done'\">\n        <div class=\"loader\" *ngIf=\"browserLoader === 'loading'\"></div>\n        <p *ngIf=\"browserLoader !== 'loading'\">{{browserLoader}}</p>\n        <a class=\"icon-link\" *ngIf=\"browserLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\n      </div>\n    </div></div>\n  </div>\n  <div *ngIf=\"limit_alert\" class=\"analytics-bottom-popup traffic-margin\">\n    <i class=\"material-icons\">warning</i>\n    You have exceeded the Visits limit for your Plan <br>\n    <a href=\"\" [routerLink]=\"['/settings/membership']\">Click here</a> to buy an Addon to unlock the visits for your account.\n  </div>\n  <div *ngIf=\"limit_alert\" class=\"analytics-overlay\"></div>\n</div>\n"

/***/ },

/***/ 926:
/***/ function(module, exports) {

module.exports = "<div [class.hide]=\"loader==0\" class=\"tab-pane \" id=\"person\">\n  <div class=\"details-heading rs-mb40\">Lifetime Statistics</div>\n  <div class=\"btn-outer\">\n    <og-date-range-picker (date)=\"onDateSelect($event)\"></og-date-range-picker>\n    <span class=\"select-span\"></span>\n    <select class=\"select-style\" (change)=\"leadDropdown($event.target.value)\">\n        <option value=\"true\">Show Leads</option>\n        <option value=\"false\">Show Visits</option>\n    </select>\n\n    <!--<a href=\"{{calc.spredsheetUrl}}\" target=\"_blank\" *ngIf=\"calc.spredsheetUrl\"><i class=\"material-icons\">open_in_new</i></a>-->\n    <button [disabled]=\"disable\" (click)=\"exportToGoogleSheet()\">\n      \n      <span *ngIf=\"!calc.spredsheetUrl\" class = \"export\"><i class=\"material-icons\">exit_to_app</i> &nbsp;View Sheet</span> \n      <p *ngIf=\"calc.spredsheetUrl\" class = \"update\"><i class=\"material-icons\">visibility</i></p>\n    </button>\n    \n  </div>\n  <div class=\"col-md-12 col-sm-12 col-xs-12 details-mt20\">\n    <!--<div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\n            <h4><i class=\"material-icons\">people</i> 5</h4>\n            <h6>Avg. Referrals Made</h6>\n        </div>-->\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\n      <h4><i class=\"material-icons\">person_add</i>{{(avgAnswered)?avgAnswered:'--'}}</h4>\n      <h6>Avg. Questions Answered</h6>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\n      <h4 id=\"reco-tool\"><i class=\"material-icons\">timeline</i>{{(avgResult)?avgResult:'--'}}\n        <div class=\"range-checktip\">This is a rounded off average</div>\n      </h4>\n      <h6>{{(calc.templateType=='Numerical')?'Avg. Result':'Most Outcome Obtained'}}</h6>\n    </div>\n    <!--<div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\n      <h4><i class=\"material-icons\">public</i>{{(mostViewedOn)?mostViewedOn:'--'}}</h4>\n      <h6>Most Viewed On</h6>\n    </div>-->\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\n      <h4><i class=\"material-icons\">schedule</i>{{(avgLengthTime)?avgLengthTime:'--'}}\n        <div class=\"range-checktip\">This is a rounded off average</div>\n      </h4>\n      <h6>Avg, Length of Visit</h6>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\n      <h4><i class=\"material-icons\">schedule</i>{{(socialEgagement)?socialEgagement:'--'}}</h4>\n      <h6>Engagement</h6>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\n      <h4><i class=\"material-icons\">near_me</i>{{(mostViewedVia)?mostViewedVia:'--'}}</h4>\n      <h6>Source</h6>\n    </div>\n  </div>\n  <div class=\"details-table-outer\" [class.recomtable]=\"calc.templateType=='Recommendation'\">\n    <div class=\"table-responsive\" *ngIf=\"!limit_alert\">\n      <table id=\"myTable\" class=\"display table\" cellspacing=\"0\" width=\"100%\"></table>\n    </div>\n    <div *ngIf=\"limit_alert\" class=\"analytics-bottom-popup user-margin\">\n      <i class=\"material-icons\">warning</i> You have exceeded the Leads limit for your Plan <br>\n      <a href=\"\" [routerLink]=\"['/settings/membership']\">Click here</a> to buy an Addon to unlock the leads for your account.\n    </div>\n    <div *ngIf=\"limit_alert\" class=\"analytics-overlay\"></div>\n  </div>\n\n</div>\n<og-user-details-popup *ngIf=\"visitorKey\" [visitorKey]=\"visitorKey\"></og-user-details-popup>\n<div class=\"loader\" *ngIf=\"loader==0\"></div>"

/***/ },

/***/ 927:
/***/ function(module, exports) {

module.exports = "<div class=\"user-detail-outer\">\n  <div class=\"top-section\" *ngIf=\"!statsResult\">\n    <div class=\"clear-set\"><i class=\"material-icons\">clear</i></div>\n    <div class=\"name-circle loading\"></div>\n    <div class=\"detail-section\">\n      <h4>fetching</h4>\n    </div>\n  </div>\n  <div class=\"top-section\" *ngIf=\"statsResult\">\n    <div class=\"clear-set\"><i class=\"material-icons\">clear</i></div>\n    <div class=\"name-circle\" *ngIf=\"statsResult.leads!=null\">{{statsResult.leads.firstName.substr(0, 2)}}</div>\n    <div class=\"detail-section\">\n      <h4 *ngIf=\"statsResult.leads\">{{statsResult.leads.firstName}}</h4>\n      <h6 *ngIf=\"statsResult.location.city && statsResult.location.country\">\n        <i class=\"material-icons\">room</i> {{statsResult.location.city}}, {{statsResult.location.country}}\n      </h6>\n      <h6 *ngIf=\"statsResult.leads.tel\"><i class=\"material-icons\">phone</i> {{statsResult.leads.tel}}</h6>\n      <h6 *ngIf=\"statsResult.leads.email\"><i class=\"material-icons\">mail_outline</i>{{statsResult.leads.email}}</h6>\n      <!--<h6><i class=\"material-icons\">public</i> Chrome</h6>-->\n    </div>\n  </div>\n  <div class=\"mid-section\" *ngIf=\"statsResult && statsResult.stats.length>0\">\n    <div class=\"outer-slim\">\n    <div class=\"bh\">\n      <div class=\"que-outer\" *ngFor=\"let stat of statsResult.stats\">\n        <div class=\"que-icon-outer\"><i class=\"material-icons\">live_help</i></div>\n        <div class=\"que-section\">\n          <h6 [innerHtml]=\"stat.title\"></h6>\n          <h6 class=\"ans\">{{stat.label}}</h6>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }

});
//# sourceMappingURL=7.map