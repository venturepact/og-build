webpackJsonp([7,12],{

/***/ 1005:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_marketing_service__ = __webpack_require__(115);
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
        this._script.load('jqueryUI', 'raphael', 'morrisCharts', 'datatables', 'daterangepicker')
            .then(function (data) {
            console.log('Scripts Loaded', data);
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
            template: __webpack_require__(1137),
            styles: [
                __webpack_require__(898),
                __webpack_require__(897)
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* CompanyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["c" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["c" /* Script */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_marketing_service__["a" /* MarketingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_marketing_service__["a" /* MarketingService */]) === 'function' && _d) || Object])
    ], AnalyticsComponent);
    return AnalyticsComponent;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 1137:
/***/ function(module, exports) {

module.exports = "<sd-toolbar [page]=\"'analytics'\"></sd-toolbar>\n<div class=\"preloader\" *ngIf=\"!calc_id\">\n  <div class=\"status\">&nbsp;</div>\n</div>\n\n<div *ngIf=\"calc_id!='null'\">\n  <!-- Analytics Section -->\n  <div class=\"analytics-top-outer\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-top-inner\">\n      <h6>Showing analytics for </h6>\n      <h4>{{calc_name}}\n        <div class=\"btn-group company-dropdown-wrapper\">\n          <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"material-icons\" *ngIf=\"live_calculators.length>1\">keyboard_arrow_down</i>\n          </button>\n          <ul class=\"dropdown-menu \">\n            <div class=\"company-dropdown-main\">\n              <div class=\"company-dropdown-list\" [class.scrollbar]=\"live_calculators.length > 5\">\n                <li *ngFor=\"let calc of live_calculators, let i = index\">\n                  <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"onCalcSelect(calc)\">\n                    <div class=\"company-block\">\n                      <span class=\"company-block-inner\">{{calc.name.charAt(0)}}</span>\n                    </div>\n                    <div class=\"company-block-content\">\n                      <span class=\"company-title ellipsis\">{{calc.name}}</span>\n                      <span class=\"company-site ellipsis hide\">{{calc.url}}</span>\n                    </div>\n                  </a>\n                </li>\n              </div>\n            </div>\n          </ul>\n        </div>\n      </h4>\n    </div>\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-mid-inner\">\n            <span class=\"active-outer\" *ngIf=\"isActive\">\n                <i class=\"material-icons\">check_circle</i>\n                Active (since {{activeSince}})\n            </span>\n      <span class=\"active-outer\" *ngIf=\"!isActive\">\n                <i class=\"material-icons\" style=\"color:red;\">check_circle</i>\n                Not Active\n            </span>\n      <!--<a class=\"preview-outer\" href=\"#\"><i class=\"material-icons\">launch</i> Preview Calculator</a>-->\n    </div>\n  </div>\n  <!-- Start: wrapper -->\n  <section class=\"wrapper\" *ngIf=\"calc_id\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n      <!-- Start: Left Sidebar -->\n      <div class=\"left-sidebar analytics-left-side col-md-3 col-sm-3 col-xs-3 np\">\n        <div id=\"\" class=\"tabbable tabs-left\">\n          <ul>\n            <li class=\"active\">\n              <a href=\"#overview\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('overview')\">\n                                <span class=\"left-sidebar-icon\">\n                                    <i class=\"material-icons\">dialpad</i>\n                                </span>\n                <div class=\"left-sidebar-title\">\n                  <h6 class=\"\">Overview</h6>\n                  <span class=\"\">Get an overview of your visitors and conversions.</span>\n                </div>\n              </a>\n            </li>\n            <li class=\"\">\n              <a href=\"#person\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('details')\">\n                                <span class=\"left-sidebar-icon\">\n                                    <i class=\"material-icons\">person</i>\n                                </span>\n                <div class=\"left-sidebar-title\">\n                  <h6 class=\"\">User Details</h6>\n                  <span class=\"\">See detailed analytics and user responses.</span>\n                </div>\n              </a>\n            </li>\n            <li class=\"\">\n              <a href=\"#traffic\" data-toggle=\"tab\" (click)=\"onAnalyticTypeSelect('traffic')\">\n                                <span class=\"left-sidebar-icon noti-icon\">\n                                    <i class=\"material-icons\">traffic</i>\n                                </span>\n                <div class=\"left-sidebar-title\">\n                  <h6 class=\"\">Traffic Details</h6>\n                  <span class=\"\">Get deeper insights about your calculator's traffic data.</span>\n                </div>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <!-- End: Left Sidebar -->\n      <!-- Start: wrapper content -->\n      <div class=\"wrapper-content col-md-9 col-sm-9 col-xs-9 analytics-mt0\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n          <div class=\"tab-content tabs-wrapper col-md-12 col-sm-12 col-xs-12 np\">\n            <!-- Start: overview (1) -->\n            <og-overview *ngIf=\"analytic_component === 'overview'\" [calc]=\"calculator\"></og-overview>\n            <!-- End: overview (1) -->\n            <!-- Start: person (2) -->\n            <og-user-details *ngIf=\"analytic_component === 'details'\"  [calc]=\"calculator\"></og-user-details>\n            <!-- End: person (2) -->\n            <!-- Start: traffic (3) -->\n            <og-traffic-details *ngIf=\"analytic_component === 'traffic'\" [calc]=\"calculator\"></og-traffic-details>\n            <!-- End: traffic (3) -->\n          </div>\n        </div>\n      </div>\n      <!-- End: wrapper content -->\n    </div>\n  </section>\n  <!-- End: wrapper -->\n</div>\n\n<div *ngIf=\"calc_id=='null'\">\n  <div class=\"analytics-top-outer\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 analytics-top-inner\">\n      <!--<h6>Showing analytics for </h6>-->\n      <h4>No Live Calculator</h4>\n    </div>\n  </div>\n  <div class=\"col-xs-12 analytics-bottom-dummy\">\n    <div class=\"col-xs-12 col-sm-12\">\n      <div class=\"analytics-bottom-popup\">\n        <i class=\"material-icons\">grid_off</i>\n        There are no calculators which are live and hence there will be no data to display\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 780:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__analytics_component__ = __webpack_require__(1005);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_utilities_module__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__analyticsChild_module__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toolbar_toolbar_module__ = __webpack_require__(408);
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

/***/ 803:
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

/***/ 877:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_components_analytics_components_date_range_picker_date_range_picker_component__ = __webpack_require__(884);
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

/***/ 884:
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
            template: __webpack_require__(888),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], DateRangePickerComponent);
    return DateRangePickerComponent;
    var _a;
}());


/***/ },

/***/ 888:
/***/ function(module, exports) {

module.exports = "<div class=\"dp-outer \">\n\t<i class=\"material-icons icon-left\">date_range</i>\n\t<input class=\"input-daterange-datepicker datepicker-outer\" type=\"text\" name=\"daterange\" />\n\t<i class=\"material-icons icon-right\">keyboard_arrow_down</i>\n</div>\n"

/***/ },

/***/ 891:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calculator_analytics_service__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_overview_overview_component__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_details_user_details_component__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_traffic_details_traffic_details_component__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_details_popup_user_details_popup_component__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_modules_utilities_module__ = __webpack_require__(877);
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

/***/ 892:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(803);
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
            start_date: moment().subtract(10, 'days').format('YYYY-MM-DD'),
            end_date: moment().add(1, 'day').format('YYYY-MM-DD')
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
                    timeOnPage: (response[0][3] > 60) ? (response[0][3] / 60).toFixed(2) + ' min' : response[0][3] + ' sec',
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
        this.postData.start_date = date.start_date;
        this.postData.end_date = date.end_date;
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
            template: __webpack_require__(899),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object])
    ], OverviewComponent);
    return OverviewComponent;
    var _a;
}());


/***/ },

/***/ 893:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(803);
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
            start_date: moment().subtract(10, 'days').format('YYYY-MM-DD'),
            end_date: moment().format('YYYY-MM-DD')
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
            if (response.length && response[0][0] != '(not set)') {
                response = response.map(function (val) { return [val[0], Number(val[2])]; });
                response.unshift(['Country', 'Page Views']);
                _this.drawRegionsMap(response);
                _this.geoLoader = 'done';
            }
            else {
                _this.geoLoader = 'No Data Available !';
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
            if (response.length && response[0][0] != '(not set)') {
                response = response.map(function (val) { return [val[0], Number(val[2])]; });
                response.unshift(['Devices', 'Page Views']);
                _this.drawPieChart(response, 'piechart');
                _this.deviceLoader = 'done';
            }
            else {
                _this.deviceLoader = 'No Data Available !';
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
                _this.socialLoader = 'No Data Available !';
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
                _this.browserLoader = 'No Data Available !';
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], TrafficDetailsComponent.prototype, "calc", void 0);
    TrafficDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-traffic-details',
            template: __webpack_require__(900),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* CookieService */]) === 'function' && _b) || Object])
    ], TrafficDetailsComponent);
    return TrafficDetailsComponent;
    var _a, _b;
}());


/***/ },

/***/ 894:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
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
    function UserDetailsComponent(_calculatorAnalytics, _featureAuthService, _cookieService) {
        this._calculatorAnalytics = _calculatorAnalytics;
        this._featureAuthService = _featureAuthService;
        this._cookieService = _cookieService;
        this.dataSet = [];
        this.avgAnswered = 0;
        this.avgResult = 0;
        this.totalTime = 0;
        this.limit_alert = false;
        this.loader = 0;
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
        //code
        var self = this;
        jQuery(document).on('click', 'a.paginate_button', function () {
            self.initializeViewDetails();
        });
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
    UserDetailsComponent.prototype.initializeViewDetails = function () {
        var _this = this;
        jQuery('.vd').unbind().bind('click', function (event) {
            _this.visitorKey = jQuery(event.target).data('key');
            // Slide right
            jQuery('.user-detail-outer').toggle('slide', { direction: 'right' }, 700);
        });
    };
    UserDetailsComponent.prototype.ngOnChanges = function () {
        if (this.calc) {
            if (this.calc.liveApp)
                this.calc_id = this.calc._id;
            else
                this.calc_id = this.calc.parentApp;
            this.loader = 0;
            this.subs.push(this.getLeadData(this.calc_id));
        }
    };
    UserDetailsComponent.prototype.getLeadData = function (id) {
        var _this = this;
        /* get leads of user on page */
        return this._calculatorAnalytics.getLeads({ id: id, date: this.postData })
            .subscribe(function (response) {
            _this.dataSet = response.data;
            //this.limit_alert = response.limit_cross;
            _this.avgAnswered = Math.round(response.avgAnswers);
            _this.avgResult = response.avgResult;
            /* -- */
            _this.dataSet = _this.dataSet.map(function (data) {
                _this.subs.push(_this.getAnalyticData(data));
                data.shift();
                return data;
            });
            _this.intializeDatatable();
        }, function (error) {
            console.log(error);
        });
    };
    UserDetailsComponent.prototype.getAnalyticData = function (lead) {
        var _this = this;
        this.postData.type = 'leadStats';
        this.postData.calc_id = lead[0];
        return this._calculatorAnalytics.getTrafficStats(this.postData)
            .subscribe(function (response) {
            if (response.length) {
                lead[4] = (response[0][4] > 60) ? (response[0][4] / 60).toFixed(2) + ' m' : response[0][4] + ' s';
                lead[3] = response[0][3];
                lead[5] = (response[0][2] == '(not set)' ? 'direct' : response[0][2]);
                //avg time
                _this.totalTime += Number(response[0][4]);
                var avgTime = _this.totalTime / _this.dataSet.length;
                _this.avgLengthTime = (avgTime > 60) ? (avgTime / 60).toFixed(2) + ' m' : avgTime.toFixed(2) + ' s';
                //other stats
                _this.viewedOnStats[response[0][3]] += 1;
                _this.viewedViaStats[response[0][2] == '(not set)' ? 'direct' : response[0][2]] += 1;
                _this.mostViewedVia = Object.keys(_this.viewedViaStats).reduce(function (a, b) { return _this.viewedViaStats[a] > _this.viewedViaStats[b] ? a : b; });
                _this.mostViewedOn = Object.keys(_this.viewedOnStats).reduce(function (a, b) { return _this.viewedOnStats[a] > _this.viewedOnStats[b] ? a : b; });
                //reinit data table
                _this.intializeDatatable();
            }
            else {
                lead[3] = lead[4] = lead[5] = 'Not Available';
                _this.intializeDatatable();
            }
        }, function (error) {
            // this.geoLoader = 'Something Went Wrong !';
        });
    };
    UserDetailsComponent.prototype.intializeDatatable = function () {
        var _this = this;
        var self = this;
        if (this.dataTableRef === undefined) {
            this.dataTableRef = jQuery('#myTable').DataTable({
                data: this.dataSet,
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
                    { title: 'Questions Answered' },
                    { title: (self.calc.templateType == 'Numerical') ? 'Result Obtained' : 'Outcome Obtained' },
                    { title: 'Visited On' },
                    { title: 'Length of Visit' },
                    { title: 'Visited Via' },
                    { title: 'View Details' }
                ]
            });
        }
        else {
            this.dataTableRef.clear();
            this.dataTableRef.rows.add(this.dataSet);
            this.dataTableRef.draw();
        }
        //bind click
        jQuery('.vd').unbind().bind('click', function (event) {
            _this.visitorKey = jQuery(event.target).data('key');
            // Slide right
            jQuery('.user-detail-outer').toggle('slide', { direction: 'right' }, 700);
        });
        this.loader = 1;
    };
    UserDetailsComponent.prototype.onDateSelect = function (date) {
        this.postData.start_date = date.start_date;
        this.postData.end_date = date.end_date;
        //refresh stats
        if (this.calc_id) {
            this.subs.push(this.getLeadData(this.calc_id));
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
            template: __webpack_require__(901),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* FeatureAuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* CookieService */]) === 'function' && _c) || Object])
    ], UserDetailsComponent);
    return UserDetailsComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 895:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__ = __webpack_require__(803);
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
    function UserDetailsPopupComponent(_calculatorAnalytics) {
        this._calculatorAnalytics = _calculatorAnalytics;
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
            template: __webpack_require__(902),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === 'function' && _a) || Object])
    ], UserDetailsPopupComponent);
    return UserDetailsPopupComponent;
    var _a;
}());


/***/ },

/***/ 897:
/***/ function(module, exports) {

module.exports = ".analytics-top-outer{ float:left; width:100%; background:url('/assets/images/analytics/analytics-img.jpg')no-repeat; min-height:160px; /* margin-top:72px;  */-webkit-background-size: cover; -moz-background-size: cover;  -o-background-size: cover;  background-size: cover; position:relative; z-index: 10;}\n.analytics-top-inner{ margin-top:3%;  }\n.analytics-top-inner h6{ color:#c4c4c1; font-size:14px; font-family:montserratregular; padding-left:10px;}\n.analytics-top-inner h4{ color:#f56151; font-size:24px; font-family:montserratregular; text-transform:uppercase;padding-left:10px;}\n.analytics-top-inner h4 i{color:#f87b80;}\n.analytics-mid-inner{ margin-top:10px;  text-align:right; padding-right:46px; font-size:14px; color:#fff; }\n.analytics-mid-inner .preview-outer{ position: relative;color: #fff; padding-left: 18px; margin-left: 10px; }\n.analytics-mid-inner .preview-outer i{  font-size: 14px;color: #999 !important; position: absolute;left: 0px;top: 2px; }\n.analytics-mid-inner .preview-outer:hover{color:#ccc;}\n.analytics-mid-inner .active-outer{ position: relative;color: #fff; padding-left: 18px; margin-left: 10px; }\n.analytics-mid-inner .active-outer i{  font-size: 14px;color: #1fde2d; position: absolute;left: 0px;top: 2px; }\n.analytics-left-side{ position:absolute; top:0 !important; height: 100%;}\n.analytics-mt0{ margin-top:0 !important;}\n.user-detail-outr{padding: 30px;}\n.traffic-outr{padding: 0 30px;}\n.analytics-mt20{ margin-top:20px !important;}\n.analytics-box-outer{ float:left; border:1px solid #dae2e6; padding:10px; margin-left:4.16%; background: #fff;}\n.analytics-box-outer:first-child{ float:left; border:1px solid #dae2e6; padding:10px; margin-left:0px; background: #fff;}\n.analytics-box-outer h6{ float:left; font-size:10px; color:#8c9194;font-family:montserratregular !important; padding-left:18px; position:relative; margin-top:0; margin-bottom:5px; width:100%; text-transform:uppercase; }\n.analytics-box-outer h6 i{ font-size: 14px; position: absolute;left: 0;top: -2px;}\n.analytics-box-outer h4{ float:left; font-size:24px; color:#62696d;font-family:montserratregular !important;  position:relative; margin-top:0; margin-bottom:5px; width:100%; }\n.dp-outer{ position:relative; width:205px; float:right; z-index:0; margin-right: 30px;}\n.datepicker-outer{ border: 2px solid #fb545b; width:100%; padding:4px 10px 4px 28px; float:right; color:#636f76; z-index:9; background:none; cursor:pointer; font-size: 13px; }\n.datepicker-outer:focus{ outline:none !important; }\n.datepicker-outer.datepicker{ padding:4px 10px 4px 30px !important;}\n.dp-outer .icon-left{ position: absolute;font-size: 14px;top: 8px;z-index: -1;left: 9px; color:#bec5c9; }\n.dp-outer .icon-right{ position: absolute; right: 5px;top: 9px;font-size: 16px; z-index:-1; color:#bec5c9;}\n.details-heading{ font-size:24px; font-family:montserratlight; color:#636f76;width: auto;\n    float: left;\n    margin-left: 30px;}\n.details-box-outer:first-child{margin-left: 0px;}\n.details-box-outer{ float:left; border:1px solid #dae2e6; padding:15px 7px; position:relative;  background: #fff; margin-left: 4.16%;}\n.details-box-outer:last-child{}\n.details-mt20{ margin-top:20px;    padding: 0 30px;}\n.details-box-outer h4{margin:0; font-size:18px; padding-left:30px;float:left; width:100%; font-family:montserratregular; white-space: nowrap; overflow: hidden;text-overflow: ellipsis;}\n.details-box-outer h4 i{position:absolute;left: 7px; font-size: 21px; color:#269fd8;}\n.details-box-outer h6{margin:0; font-size:10px; color:#8c9194; float:left; font-family:montserratregular; text-transform:uppercase; margin-top:5px; margin-left: 30px;}\n\n.details-box-outer h4:hover > .range-checktip {\n    visibility: visible;\n    z-index: 999;\n}\n.details-box-outer h4 .range-tip {\n    margin: 1px 7px;\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n    margin: 0px;\n    cursor: default;\n}\n.details-box-outer h4 .range-tip i {\n    color: #8e989f;\n    font-size: 13px;\n    line-height: 17px;\n    cursor: pointer;\n    opacity: 0.8;\n}\n.details-box-outer h4 .range-tip:hover i {\n    color: #f87b80;\n}\n.range-tip:hover > .range-checktip {\n    visibility: visible;\n    z-index: 999;\n}\n.details-box-outer h4 .range-checktip {\n    float: left;\n    background-color: #61696C;\n    color: #fff;\n    padding: 5px;\n    width: 180px;\n    font-size: 11px;\n    position: absolute;\n    top: -19px;\n    border-radius: 0px;\n    visibility: hidden;\n    box-shadow: 0 3px 7px 0px #919191;\n    text-align: center;\n    left: 35px;\n    line-height: 1.42857143;\n    text-transform: none;\n}\n.details-box-outer h4 .range-checktip:before {\n    content: '';\n    position: absolute;\n    bottom: -40%;\n    left: 50%;\n    margin-left: -8px;\n    width: 10px;\n    height: 10px;\n    border-top: 6px solid #61696C;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n}\n\n\n\n.details-table-outer{ float:left; margin-top:30px;    width: 100%;\n    padding: 0 30px;}\n.details-table-outer table {margin-bottom:30px;}\n.details-table-outer table tr th{ font-size:10px; color:#6c7377; font-family:montserratregular; text-transform:uppercase; font-weight:normal; text-align:right;}\n.details-table-outer table thead tr:hover{ background:none!important;}\n.details-table-outer table thead select{padding: 0;border: none;text-transform: uppercase;font-size: 12px; outline:none; color:#fb5f66 ; border: 1px solid #ccc; padding: 5px;}\n.details-table-outer table tr.blue-border{border-bottom:2px solid #269fd8 }\n.details-table-outer table tr:hover{background:#f8fafa; }\n.details-table-outer table tr td{border-bottom:1px solid #dae2e6; }\n.details-table-outer table tr td{color:#62696d; font-size:13px; font-weight:normal; font-family:montserratregular; text-align:right;}\n.details-table-outer table tr td:first-child{color:#bec5c9; font-size:13px; font-weight:normal; font-family:montserratregular; text-align:left; padding: 15px 10px; background: #fff;font-style: italic;}\n.details-table-outer table tr td.link{color:#fb545b; font-size:13px; font-weight:normal; font-family:montserratregular; text-align:right;}\n.details-table-outer table tr.date-outer td{border-bottom:1px solid #fff; color:#269fd8; font-family:montserratlight; font-size:16px; border-top:2px solid #269fd8 }\n.details-table-outer table tr.date-outer:hover{background:none;}\n.details-table-outer table tr td:last-child a{color:#fb545b; font-size:11px;}\n.details-table-outer .pagination li a{ border:none; color:#fb5f66;}\n.details-table-outer .pagination li a:hover{color:#62696d;background:none;}\n.details-table-outer .pagination li a:focus{color:#62696d;background:none;}\n.details-table-outer .dataTables_paginate{ width: 100%; text-align: center;}\n\n.recomtable th.sorting:nth-child(3) { text-align: left;padding: 10px 10px;}\n.recomtable tr td:nth-child(3) { text-align: left; }\n\n\n\n.traffic-graph-outer{ border:1px solid #dae2e6; padding:20px; float:left; width: 100%; min-height:225px; position:relative; margin-top:30px;}\n.traffic-graph-outer h4{ font-family:montserratlight !important; font-size:18px; float:left; width:100%; margin-top:0; color:#62696d; }\n.traffic-graph-outer h6 { color:#8c9194; font-size:11px; font-family:montserratregular; float:left; text-transform:uppercase; width:100%; margin-bottom:5px;}\n.traffic-graph-outer h6 span.red{ float:left; background:#fb545b; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px;}\n.traffic-graph-outer h6 span.green{ float:left; background:#50d650; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px;}\n.traffic-graph-outer h6 span.sky{ float:left; background:#69d2e7; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px;}\n.traffic-graph-outer h6 span.orange{ float:left; background:#f38630; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px;}\n.traffic-graph-outer h6 span.ex-light-green{ float:left; background:#e0e4cc; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px;}\n.chart-position{ position:absolute;position: absolute;top: -70px;left: -20px;}\n\n.traffic-graph-height{ min-height: 225px !important;}\n\n/*date rangepicker css*/\n.daterangepicker.dropdown-menu {right: 28px !important; width:492px !important;}\n.daterangepicker.opensright:before {right: 40px !important; }\n.daterangepicker.opensright:after{right: 41px !important; }\n.daterangepicker .ranges {margin: 4px;text-align: right !important;width: 98%;}\n.btn-danger { margin-right: 5px;}\n/*date rangepicker end css*/\n\n/*data table css*/\n.dataTables_length{ display:none;}\n.dataTables_filter{ display:none;}\n.dataTables_info{ display:none;}\n.first, .last{ display:none;}\n.dataTables_paginate{ text-align:center; margin-bottom:20px;}\n.dataTables_paginate a{ margin:10px; color:#fb5f66; cursor:pointer; }\n.dataTables_paginate a:focus{color:#62696d;background:none;}\n/*data table css end*/\n\n.user-detail-outer{position:fixed; width:325px; background:#fff;  z-index:9999;  right:0; top:0; height:100vh; -webkit-box-shadow: -6px 3px 20px -6px rgba(0,0,0,0.75);-moz-box-shadow: -6px 3px 20px -6px rgba(0,0,0,0.75);box-shadow: -6px 3px 20px -6px rgba(0,0,0,0.75); display:none;   }\n.user-detail-outer .top-section{ float:left; width:100%; padding:25px; border-bottom:2px solid #dae2e6; position: relative;}\n.user-detail-outer .top-section .name-circle{ float:left; width:35px; height:35px; background:#fb5f66; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; text-align:center; text-transform:uppercase;\nfont-size:12px; font-family:montserratregular; color:#fff; padding-top:9px; }\n.user-detail-outer .top-section .detail-section{ float:left; width:80%; margin-left:10px;}\n.user-detail-outer .top-section .detail-section h4{ float:left; width:100%; font-size:16px; margin-bottom:0;}\n.user-detail-outer .top-section .detail-section h6{ float:left; width:100%; font-size:11px; font-family:montserratregular; color:#8e989f; margin-bottom:0; position:relative; padding-left:20px;}\n.user-detail-outer .top-section .detail-section h6 i{position:absolute; top:0; font-size:14px; left:0; color:#bec5c9;}\n.user-detail-outer .mid-section{ float:left; width:100%; padding:25px; padding-right: 5px;}\n.user-detail-outer .mid-section .que-outer{ float:left; width:100%;}\n.user-detail-outer .mid-section .que-icon-outer{ float:left; width:35px; color:#bec5c9;}\n.user-detail-outer .mid-section .que-icon-outer i{ font-size:30px;}\n.user-detail-outer .mid-section .que-section { float:left; width:86%; margin-bottom:20px; }\n.user-detail-outer .mid-section .que-section h6{float:left; font-size:12px; font-family:montserratlight !important; width:100%; margin-top:0; line-height:20px;}\n.user-detail-outer .mid-section .que-section h6.ans{float:left; font-size:12px; font-family:montserratregular !important; width:100%; margin-top:0; line-height:20px; color:#62696d;}\n/* .user-detail-outer .mid-section .slimScrollDiv{height: 600px !important;}\n.user-detail-outer .mid-section .outer-slim{height: 600px !important;} */\n.user-detail-outer .mid-section .outer-slim .bh{float: left;}\n.user-detail-outer .clear-set{ position: absolute; top: 10px; cursor: pointer; right: 7px;}\n.graph-val{ color:#8c9194; font-size:11px; font-family:montserratregular; float:left; text-transform:uppercase; margin-bottom:5px;  margin-top:5px; margin-left:30px;}\n.graph-val span.red{ float:left; background:#fb545b; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px; margin-top:2px; }\n.graph-val span.blue{ float:left; background:#269fd8; -webkit-border-radius: 25px;-moz-border-radius: 25px;border-radius: 25px; height:11px; width:11px; margin-right:10px; margin-top:2px; }\n\n.morris-hover{position:absolute;z-index:1000}.morris-hover.morris-default-style{border-radius:10px;padding:6px;color:#666;background:rgba(255,255,255,0.8);border:solid 2px rgba(230,230,230,0.8);font-family:sans-serif;font-size:12px;text-align:center}.morris-hover.morris-default-style .morris-hover-row-label{font-weight:bold;margin:0.25em 0}\n.morris-hover.morris-default-style .morris-hover-point{white-space:nowrap;margin:0.1em 0}\n\n.analytics-top-outer .company-dropdown-wrapper .dropdown-menu { z-index: 999 !important; min-width: 260px;}\n\n/*loader css*/\n.dark-loader-outer{width: 100%;height: 100%;background: #fff; position: absolute;top: 0; left: 0; padding:30px; text-align:center;}\n.traffic1{\n    background: url(/assets/images/analytics/traffic1.jpg)no-repeat !important;\n    background-color: #fff;\n    background-position: center center;\n    display: table;\n    height: 223px !important;\n}\n.traffic1 p{\n    color: #269fd8;\n    font-style: italic;\n    display: table-cell;\n    vertical-align: middle;\n}\n.traffic2{\n    background: url(/assets/images/analytics//traffic2.jpg)no-repeat !important;\n    background-color: #fff;\n    background-position: center center;\n    display: table;\n    height: 223px !important;\n}\n.traffic2 p{\n    color: #269fd8;\n    font-style: italic;\n    display: table-cell;\n    vertical-align: middle;\n}\n.traffic3{\n    background: url(/assets/images/analytics/traffic3.jpg)no-repeat !important;\n    background-color: #fff;\n    background-position: center center;\n    display: table;\n    height: 223px !important;\n}\n.traffic3 p{\n    color: #269fd8;\n    font-style: italic;\n    display: table-cell;\n    vertical-align: middle;\n}\n.traffic4{\n    background: url(/assets/images/analytics/traffic4.jpg)no-repeat !important;\n    background-color: #fff;\n    background-position: center center;\n    display: table;\n    height: 223px !important;\n}\n.traffic4 p{\n    color: #269fd8;\n    font-style: italic;\n    display: table-cell;\n    vertical-align: middle;\n}\n.light-loader-outer{width: 100%;height: 100%;background: #fff; position: absolute;top: 0; left: 0; padding:30px; text-align:center; opacity:0.9;}\n.loader {border: 5px solid #f3f3f3;border-radius: 50%; border-top: 5px solid #fb545b;width: 50px;height: 50px;-webkit-animation: spin 2s linear infinite; animation: spin 2s linear infinite; position:absolute; left:44%; top:39%;}\n@-webkit-keyframes spin {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n.light-loader-outer .icon-link i{ font-size:18px; cursor:pointer; position:absolute; right:10px; top:10px;color: #bec5c9; }\n\n/* Preloader */\n\n.preloader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #fff;\n    /* change if the mask should be a color other than white */\n    z-index: 9999;\n    /* makes sure it stays on top */\n}\n\n.status {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    /* centers the loading animation horizontally on the screen */\n    top: 50%;\n    /* centers the loading animation vertically on the screen */\n    background-image: url(\"assets/images/loaders/logoAnim.gif\");\n    /* path to your loading animation */\n    background-repeat: no-repeat;\n    background-position: center;\n    margin: -100px 0 0 -100px;\n    /* is width and height divided by two */\n}\n\n.wrapper-content.pb30{ padding-bottom: 30px;}\n.chart-position{position: absolute;top: -20px;left: -329px;}\n.traffic-graph-outer{background: #fff;min-height:270px;overflow:hidden !important;}\n\n/*Analytic bropdown setting*/\n.analytics-top-inner h4 .company-dropdown-wrapper{ position: relative;}\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu{position: absolute; left:-14px;}\n\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu:before{right: 227px;}\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu .company-dropdown-main {\n    width: 260px;\n    float: left;\n}\n.analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu .company-dropdown-list > li > a .company-title{\n    width: 100%;\n}\n.company-dropdown-wrapper .dropdown-menu .company-dropdown-list >li > a .company-block-inner{\n    top: 7px;\n}\n/*Analytic bropdown setting end*/\n.light-loader-outer-new{width: 100%;height: 100%;background: #fff; position: absolute;top: 0; left: 0; padding:30px; text-align:center; opacity:0.9;}\n\n.analytics-bottom-dummy{\n    float:left; \n    width:100%;\n    background:url('/assets/images/analytics/analytics_noCalc.jpg')no-repeat;\n    min-height:67vh;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;  \n    -o-background-size: cover;  \n    background-size: cover;\n    position:fixed; \n    bottom: 0;\n}\n.analytics-bottom-popup{\n  background: #fb6066;\n    width: 50%;\n    margin: 0 auto;\n    position: relative;\n    margin-top: 85px;\n    min-height: 150px;\n    color: #fff;\n    text-align: center;\n    padding: 25px;\n    font-family: montserratlight;\n    font-size: 16px;\n    box-shadow:13px 13px 10px rgba(0,0,0,0.20);\n    z-index: 1;\n}\n.user-margin{\n    margin-top:-155px;\n}\n.traffic-margin{\n    margin-top: 15px;\n}\n.no-analytics-overlay{\n    position: fixed;\n    top: 42px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1010;\n    margin-top: 56px;\n    background: rgba(255, 255, 255, 0.5);\n    margin-left: 235px;\n}\n.no-analytics-overlay img{\n    width: 100%;\n}\n.analytics-bottom-popup i\n{\n    display: inherit;\n    margin-bottom: 15px;\n}\n.analytics-bottom-popup a\n{\n        color: #fff;\n    text-decoration: underline;\n}\n.analytics-overlay{\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 0;\n    margin-top: 0px;\n    background: rgba(255, 255, 255, 0.99);\n    filter: alpha(opacity=50);\n    opacity: .5;\n}\n#person .dataTables_paginate.paging_full_numbers span{\n    position: relative;\n    top: -7px;\n}\n#person .dataTables_wrapper .dataTables_paginate .paginate_button{\n    padding: 0;\n    margin: 0;\n    color: #fb545b !important;\n    background: none;\n    border: none;\n}\n#person .dataTables_wrapper .dataTables_paginate .paginate_button{\n    padding: 0;\n    margin: 0;\n    color: #fb545b !important;\n    background: none;\n    border: none;\n}\n#person .dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover{\n    background: none;\n    border: none;\n    margin: 0;\n    padding: 0;\n    color: #333 !important;\n}\n#person .dataTables_wrapper .dataTables_paginate .paginate_button:hover{\n    background: none;\n    border: none;\n    color: #333 !important;\n    margin: 0;\n    padding: 0;\n}\n#person .dataTables_wrapper .dataTables_paginate .paginate_button.disabled, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active{\n    color: #bec5c9 !important;\n}\n\n/* analytics resposnive */\n@media (min-width: 320px) and (max-width: 768px) {\n    #membership-details .membership-details-inner-tabs {\n        display: none;\n    }\n\n    #membership-details .membership-details-tabs-resp{\n        display: block;\n    }\n\n    #membership-details .tab-content.tab-sub-content {\n        width: 100%;\n        margin-left: 0;\n        padding: 0px 0px;\n    }\n    /* analytics resp sahil start */\n    .analytics-top-outer{ margin-top: 0px; min-height: 160px;}\n    .analytics-left-side{\n        position: relative !important;\n        top: 0 !important;\n        width: 100%;\n        height: auto !important;\n        padding-top: 0;\n    }\n    .analytics-bottom-popup{ width: 100%;}\n    .analytics-top-inner h4{ font-size: 20px;}\n    .left-sidebar.analytics-left-side ul li a{ width: 33%; text-align: center;}\n    .left-sidebar.analytics-left-side ul li a h6{ margin-bottom:0px; font-size: 11px;}\n    .left-sidebar.analytics-left-side ul li a .left-sidebar-icon{ display: none;}\n    .left-sidebar.analytics-left-side ul li a .left-sidebar-title{ width: 100%; margin: 0px;}\n    .left-sidebar.analytics-left-side ul li a .left-sidebar-title span{ display: none;}\n    /*.wrapper-content{ padding-top: 25px !important; }*/\n    .analytics-box-outer{ margin-left:0px; margin-bottom: 20px;}\n    .user-detail-outr{ padding-left: 30px; padding-right: 30px;}\n    #area-example svg{ width: 100%;}\n    .dp-outer{ margin: 0 auto; float: none; margin-top: 10px;}\n    .details-box-outer{ margin-left: 0px;  margin-bottom: 20px;}\n    .traffic-graph-outer{ width: 100%;}\n    .analytics-top-inner{margin-top: 6%;}\n    .analytics-mid-inner{ padding-right: 26px; margin-top: 20px;}\n    .traffic-outr{ padding-right: 30px;}\n    .user-detail-outer{width: 305px;}\n    .user-detail-outer .mid-section{padding-right: 15px;}\n    /* .user-detail-outer .mid-section .slimScrollDiv {height: 320px !important;}\n    .user-detail-outer .mid-section .outer-slim {height: 320px !important;} */\n    .analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu {\n        position: absolute;\n        left: -100px;\n        width: 200px;\n        min-width: 220px;\n    }\n\n    .analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu:before {\n        right: 100px;\n    }\n\n    .analytics-top-inner h4 .company-dropdown-wrapper .dropdown-menu .company-dropdown-main {\n        width: 100%; \n    }\n\n    .analytics-top-inner .company-dropdown-wrapper .dropdown-menu .company-dropdown-list > li > a {\n        padding: 10px 15px;\n    }\n\n    .analytics-top-outer .company-dropdown-wrapper .dropdown-menu .company-dropdown-list >li > a .company-block-inner {\n        width: 20px;\n        height: 20px;\n        padding-top: 4px;\n        font-size: 11px;\n    }\n\n    .analytics-top-outer .company-block-content {\n        margin-left: 30px;\n        font-size: 12px;\n    }\n\n    .analytics-mt0{padding-top: 25px;}\n\n}\n@media (min-width:768px) and (max-width:768px){\n     .analytics-mt0{padding-left: 0px;}\n}\n.loading:after {\n    content: ' .';\n    animation: dots 1s steps(5, end) infinite;\n    font-size: 18px;\n    line-height: 1px;\n    position: relative;\n    left: -3px;\n}\n\n@keyframes dots {\n    0%,\n    20% {\n        color: rgba(0, 0, 0, 0);\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    40% {\n        color: white;\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    60% {\n        text-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    80%,\n    100% {\n        text-shadow: .25em 0 0 white, .5em 0 0 white;\n    }\n}\n\n.leadlimit-alert{\n    padding-left: 15px;\n    width: 100%;\n    text-align: center;\n    display: inline-block;\n}\n.leadlimit-alert a{ color: #f00;} \n\n.company-dropdown-list.scrollbar{height: 170px;}\n.scrollbar\n{\n    overflow-y: scroll;\n}\n/*\n *  STYLE 1\n */\n.scrollbar::-webkit-scrollbar-track\n{\n    -webkit-box-shadow: inset 0 0 6px rgba(98,105,109,.8);\n    border-radius: 5px;\n    background-color: #f5f5f5;\n}\n\n.scrollbar::-webkit-scrollbar\n{\n    width: 7px;\n\n    background-color: #aaa;\n}\n.scrollbar::-webkit-scrollbar:horizontal\n{\n    height: 7px;\n\n    background-color: #aaa;\n}\n.scrollbar::-webkit-scrollbar-thumb\n{\n    border-radius: 5px;\n    -webkit-box-shadow: inset 0 0 6px rgba(245,245,248,.8);\n    background-color: #aaa;\n}"

/***/ },

/***/ 898:
/***/ function(module, exports) {

module.exports = "/**\n* A stylesheet for use with Bootstrap 3.x\n* @author: Dan Grossman http://www.dangrossman.info/\n* @copyright: Copyright (c) 2012-2015 Dan Grossman. All rights reserved.\n* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php\n* @website: https://www.improvely.com/\n*/\n\n/* Container Appearance */\n\n.daterangepicker {\n  position: absolute;\n  background: #fff;\n  top: 100px;\n  left: 20px;\n  padding: 4px;\n  margin-top: 1px;\n  border-radius: 4px;\n}\n\n.daterangepicker.opensleft:before {\n  position: absolute;\n  top: -7px;\n  right: 9px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #ccc;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: '';\n}\n\n.daterangepicker.opensleft:after {\n  position: absolute;\n  top: -6px;\n  right: 10px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #fff;\n  border-left: 6px solid transparent;\n  content: '';\n}\n\n.daterangepicker.openscenter:before {\n  position: absolute;\n  top: -7px;\n  left: 0;\n  right: 0;\n  width: 0;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #ccc;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: '';\n}\n\n.daterangepicker.openscenter:after {\n  position: absolute;\n  top: -6px;\n  left: 0;\n  right: 0;\n  width: 0;\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #fff;\n  border-left: 6px solid transparent;\n  content: '';\n}\n\n.daterangepicker.opensright:before {\n  position: absolute;\n  top: -7px;\n  display: inline-block;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #ccc;\n  border-left: 7px solid transparent;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: '';\n}\n\n.daterangepicker.opensright:after {\n  position: absolute;\n  top: -6px;\n  display: inline-block;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #fff;\n  border-left: 6px solid transparent;\n  content: '';\n}\n\n.daterangepicker.dropup{\n  margin-top: -5px;\n}\n.daterangepicker.dropup:before{\n  top: initial;\n  bottom:-7px;\n  border-bottom: initial;\n  border-top: 7px solid #ccc;\n}\n.daterangepicker.dropup:after{\n  top: initial;\n  bottom:-6px;\n  border-bottom: initial;\n  border-top: 6px solid #fff;\n}\n\n.daterangepicker.dropdown-menu {\n  max-width: none;\n  z-index: 3000;\n}\n\n.daterangepicker .ranges, .daterangepicker .calendar {\n  float: left;\n}\n\n.daterangepicker.single .ranges, .daterangepicker.single .calendar {\n  float: none;\n}\n\n.daterangepicker .ranges {\n  margin: 4px;\n  text-align: left;\n}\n\n.daterangepicker .calendar {\n  display: none;\n  max-width: 270px;\n}\n\n.daterangepicker.show-calendar .calendar {\n  display: block;\n}\n\n.daterangepicker .calendar.single .calendar-table {\n  border: none;\n}\n\n/* Calendars */\n\n.daterangepicker .calendar th, .daterangepicker .calendar td {\n  white-space: nowrap;\n  text-align: center;\n  min-width: 32px;\n}\n\n.daterangepicker .calendar-table {\n  border: 1px solid #ddd;\n  padding: 4px;\n  border-radius: 4px;\n  background: #fff;\n}\n\n.daterangepicker .calendar.left .calendar-table {\n  border-right: none;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.daterangepicker .calendar.right .calendar-table {\n  border-left: none;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;  \n}\n\n.daterangepicker .calendar.left {\n  margin: 4px 0 4px 4px;\n}\n\n.daterangepicker .calendar.right {\n  margin: 4px 4px 4px 0;\n}\n\n.daterangepicker .calendar.left .calendar-table {\n  padding-right: 12px;\n}\n\n.daterangepicker table {\n  width: 100%;\n  margin: 0;\n}\n\n.daterangepicker td, .daterangepicker th {\n  text-align: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.daterangepicker td.off, .daterangepicker td.off.in-range, .daterangepicker td.off.start-date, .daterangepicker td.off.end-date {\n  color: #999;\n  background: #fff;\n}\n\n.daterangepicker td.disabled, .daterangepicker option.disabled {\n  color: #999;\n}\n\n.daterangepicker td.available:hover, .daterangepicker th.available:hover {\n  background: #eee;\n}\n\n.daterangepicker td.in-range {\n  background: #ebf4f8;\n  border-radius: 0;\n}\n\n.daterangepicker td.start-date {\n  border-radius: 4px 0 0 4px;\n}\n\n.daterangepicker td.end-date {\n  border-radius: 0 4px 4px 0;\n}\n\n.daterangepicker td.start-date.end-date {\n  border-radius: 4px;\n}\n\n.daterangepicker td.active, .daterangepicker td.active:hover {\n  background-color: #357ebd;\n  border-color: #3071a9;\n  color: #fff;\n}\n\n.daterangepicker td.week, .daterangepicker th.week {\n  font-size: 80%;\n  color: #ccc;\n}\n\n.daterangepicker select.monthselect, .daterangepicker select.yearselect {\n  font-size: 12px;\n  padding: 1px;\n  height: auto;\n  margin: 0;\n  cursor: default;\n}\n\n.daterangepicker select.monthselect {\n  margin-right: 2%;\n  width: 56%;\n}\n\n.daterangepicker select.yearselect {\n  width: 40%;\n}\n\n.daterangepicker select.hourselect, .daterangepicker select.minuteselect, .daterangepicker select.secondselect, .daterangepicker select.ampmselect {\n  width: 50px;\n  margin-bottom: 0;\n}\n\n.daterangepicker th.month {\n  width: auto;\n}\n\n/* Text Input Above Each Calendar */\n\n.daterangepicker .input-mini {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  color: #555;\n  display: block;\n  height: 30px;\n  line-height: 30px;\n  vertical-align: middle;\n  margin: 0 0 5px 0;\n  padding: 0 6px 0 28px;\n  width: 100%;\n}\n\n.daterangepicker .input-mini.active {\n  border: 1px solid #357ebd;\n}\n\n.daterangepicker .daterangepicker_input i {\n  position: absolute;\n  left: 8px;\n  top: 8px;\n}\n\n.daterangepicker .left .daterangepicker_input {\n  padding-right: 12px;\n}\n\n.daterangepicker .daterangepicker_input {\n  position: relative;\n}\n\n/* Time Picker */\n\n.daterangepicker .calendar-time {\n  text-align: center;\n  margin: 5px auto;\n  line-height: 30px;\n  position: relative;\n  padding-left: 28px;\n}\n\n.daterangepicker .calendar-time select.disabled {\n  color: #ccc;\n  cursor: not-allowed;\n}\n\n/* Predefined Ranges */\n\n.daterangepicker .ranges {\n  font-size: 11px;\n}\n\n.daterangepicker .ranges ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 160px;\n}\n\n.daterangepicker .ranges li {\n  font-size: 13px;\n  background: #f5f5f5;\n  border: 1px solid #f5f5f5;\n  color: #08c;\n  padding: 3px 12px;\n  margin-bottom: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.daterangepicker .ranges li.active, .daterangepicker .ranges li:hover {\n  background: #08c;\n  border: 1px solid #08c;\n  color: #fff;\n}"

/***/ },

/***/ 899:
/***/ function(module, exports) {

module.exports = "<div class=\"tab-pane active \" id=\"overview\">\n  <div class=\"graph-val\"><span class=\"red\"></span> Unique Views </div>\n  <div class=\"graph-val\"><span class=\"blue\"></span> Page Views </div>\n  <og-date-range-picker (date)=\"onDateSelect($event)\"></og-date-range-picker>\n  <div class=\"col-md-12 col-sm-12 col-xs-12 user-detail-outr \">\n    <div id=\"area-example\" style=\"height: 300px;\"></div>\n    <div class=\"light-loader-outer-new\" *ngIf=\"graphLoader !== 'done'\">\n      <div class=\"loader\" *ngIf=\"graphLoader === 'loading'\"></div>\n      <p *ngIf=\"graphLoader !== 'loading'\">{{graphLoader}}</p>\n      <a class=\"icon-link\" *ngIf=\"graphLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\n    </div>\n  </div>\n  <div class=\"col-md-12 col-sm-12 col-xs-12 traffic-outr\">\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\n      <h6><i class=\"material-icons\">people</i> Unique/Total Visitors</h6>\n      <h4>{{(!stats)?'--':stats.uniqueVisitors}}/{{(!stats)?'--':stats.visitors}}</h4>\n      <div class=\"pull-left\">\n        <div id=\"chart-container\"></div>\n      </div>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\n      <h6><i class=\"material-icons\">person_add</i> Conversions</h6>\n      <h4>{{(!stats)?'--':stats.conversions}}</h4>\n      <div class=\"pull-left\">\n        <div id=\"chart-container1\"></div>\n      </div>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\n      <h6><i class=\"material-icons\">trending_up</i> Conversion Rate</h6>\n      <h4>{{(!stats)?'--':stats.conversionRate}}%</h4>\n      <div class=\"pull-left\">\n        <div id=\"chart-container2\"></div>\n      </div>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\n      <h6><i class=\"material-icons\">query_builder</i> Avg Length of Visit</h6>\n      <h4>{{(!stats)?'--':stats.timeOnPage}}</h4>\n      <div class=\"pull-left\">\n        <div id=\"chart-container3\"></div>\n      </div>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 analytics-box-outer\">\n      <h6><i class=\"material-icons\">record_voice_over</i> Avg. Responses</h6>\n      <h4>{{(!stats)?'--':stats.avgResponse}}</h4>\n      <div class=\"pull-left\">\n        <div id=\"chart-container4\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 900:
/***/ function(module, exports) {

module.exports = "<div class=\"tab-pane\" id=\"traffic\">\n  <og-date-range-picker (date)=\"onDateSelect($event)\"></og-date-range-picker>\n  <div *ngIf= \"!limit_alert\" class=\"col-md-12 col-sm-12 col-xs-12 \">\n    <div class=\"col-md-6\"><div class=\" traffic-graph-outer\" [class.traffic-graph-height]=\"geoLoader !== 'done'\">\n      <div class=\"col-md-5 col-sm-12 col-xs-12 np\" *ngIf=\"geoLoader == 'done'\">\n        <h4>Top Geographies</h4>\n      </div>\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\n        <div id=\"regions_div\" ></div>\n      </div>\n      <div class=\"light-loader-outer traffic1\" *ngIf=\"geoLoader !== 'done'\">\n        <div class=\"loader\" *ngIf=\"geoLoader === 'loading'\"></div>\n        <p *ngIf=\"geoLoader !== 'loading'\">{{geoLoader}}</p>\n        <a class=\"icon-link\" *ngIf=\"geoLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\n      </div>\n    </div></div>\n    <div class=\"col-md-6\"><div class=\"traffic-graph-outer\" [class.traffic-graph-height]=\"deviceLoader !== 'done'\">\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\" *ngIf=\"geoLoader == 'done'\">\n        <h4>Devices</h4>\n      </div>\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\n        <div id=\"piechart\" class=\"chart-position\" ></div>\n      </div>\n      <div class=\"light-loader-outer traffic2\" *ngIf=\"deviceLoader !== 'done'\">\n        <div class=\"loader\" *ngIf=\"deviceLoader === 'loading'\"></div>\n        <p *ngIf=\"deviceLoader !== 'loading'\">{{deviceLoader}}</p>\n        <a class=\"icon-link\" *ngIf=\"deviceLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\n      </div>\n    </div></div>\n  </div>\n  <div *ngIf= \"!limit_alert\" class=\"col-md-12 col-sm-12 col-xs-12 \">\n    <div class=\"col-md-6\"><div class=\"traffic-graph-outer\" [class.traffic-graph-height]=\"socialLoader !== 'done'\">\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\" *ngIf=\"geoLoader == 'done'\">\n        <h4>Traffic Sources</h4>\n      </div>\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\n        <div id=\"piechart1\" class=\"chart-position\" ></div>\n      </div>\n      <div class=\"light-loader-outer traffic3\" *ngIf=\"socialLoader !== 'done'\">\n        <div class=\"loader\" *ngIf=\"socialLoader === 'loading'\"></div>\n        <p *ngIf=\"socialLoader !== 'loading'\">{{socialLoader}}</p>\n        <a class=\"icon-link\" *ngIf=\"socialLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\n      </div>\n    </div></div>\n    <div class=\"col-md-6\"><div class=\"traffic-graph-outer\" [class.traffic-graph-height]=\"browserLoader !== 'done'\">\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\" *ngIf=\"geoLoader == 'done'\">\n        <h4>Browser</h4>\n      </div>\n      <div class=\"col-md-6 col-sm-12 col-xs-12 np\">\n        <div id=\"piechart2\" class=\"chart-position\" ></div>\n      </div>\n      <div class=\"light-loader-outer traffic4\" *ngIf=\"browserLoader !== 'done'\">\n        <div class=\"loader\" *ngIf=\"browserLoader === 'loading'\"></div>\n        <p *ngIf=\"browserLoader !== 'loading'\">{{browserLoader}}</p>\n        <a class=\"icon-link\" *ngIf=\"browserLoader !== 'loading'\"><i class=\"material-icons\">refresh</i></a>\n      </div>\n    </div></div>\n  </div>\n  <div *ngIf=\"limit_alert\" class=\"analytics-bottom-popup traffic-margin\">\n    <i class=\"material-icons\">warning</i>    \n    You have exceeded the Visits limit for your Plan <br>\n    <a href=\"\" [routerLink]=\"['/settings/membership']\">Click here</a> to buy an Addon to unlock the visits for your account. \n  </div>\n  <div *ngIf=\"limit_alert\" class=\"analytics-overlay\"></div>\n</div>\n"

/***/ },

/***/ 901:
/***/ function(module, exports) {

module.exports = "<div [class.hide]=\"loader==0\" class=\"tab-pane \" id=\"person\">\n    <div class=\"details-heading \">Lifetime Statistics</div>\n    <og-date-range-picker (date)=\"onDateSelect($event)\"></og-date-range-picker>\n  <div class=\"col-md-12 col-sm-12 col-xs-12 details-mt20\">\n    <!--<div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\n            <h4><i class=\"material-icons\">people</i> 5</h4>\n            <h6>Avg. Referrals Made</h6>\n        </div>-->\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\n      <h4><i class=\"material-icons\">person_add</i>{{(avgAnswered)?avgAnswered:'--'}}</h4>\n      <h6>Avg. Questions Answered</h6>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\n      <h4 id=\"reco-tool\"><i class=\"material-icons\">timeline</i>{{(avgResult)?avgResult:'--'}}\n        <div class=\"range-checktip\">{{(avgResult)?avgResult:'--'}}</div>\n      </h4>\n      <h6>{{(calc.templateType=='Numerical')?'Avg. Result':'Most Outcome Obtained'}}</h6>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\n      <h4><i class=\"material-icons\">public</i>{{(mostViewedOn)?mostViewedOn:'--'}}</h4>\n      <h6>Most Viewed On</h6>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\n      <h4><i class=\"material-icons\">schedule</i>{{(avgLengthTime)?avgLengthTime:'--'}}</h4>\n      <h6>Avg, Length of Visit</h6>\n    </div>\n    <div class=\"col-md-2 col-sm-12 col-xs-12 details-box-outer\">\n      <h4><i class=\"material-icons\">near_me</i>{{(mostViewedVia)?mostViewedVia:'--'}}</h4>\n      <h6>Most Visited Via</h6>\n    </div>\n  </div>\n  <div class=\"details-table-outer\" [class.recomtable]=\"calc.templateType=='Recommendation'\">\n    <div class=\"table-responsive\" *ngIf=\"!limit_alert\">\n      <table id=\"myTable\" class=\"display table\" cellspacing=\"0\" width=\"100%\"></table>\n    </div>\n    <div *ngIf=\"limit_alert\" class=\"analytics-bottom-popup user-margin\">\n      <i class=\"material-icons\">warning</i>\n      You have exceeded the Leads limit for your Plan <br>\n      <a href=\"\" [routerLink]=\"['/settings/membership']\">Click here</a> to buy an Addon to unlock the leads for your account.\n    </div>\n    <div *ngIf=\"limit_alert\" class=\"analytics-overlay\"></div>\n  </div>\n\n</div>\n<og-user-details-popup [visitorKey]=\"visitorKey\"></og-user-details-popup>\n<div class=\"loader\" *ngIf=\"loader==0\"></div>"

/***/ },

/***/ 902:
/***/ function(module, exports) {

module.exports = "<div class=\"user-detail-outer\">\n  <div class=\"top-section\" *ngIf=\"!statsResult\">\n    <div class=\"clear-set\"><i class=\"material-icons\">clear</i></div>\n    <div class=\"name-circle loading\"></div>\n    <div class=\"detail-section\">\n      <h4>fetching</h4>\n    </div>\n  </div>\n  <div class=\"top-section\" *ngIf=\"statsResult\">\n    <div class=\"clear-set\"><i class=\"material-icons\">clear</i></div>\n    <div class=\"name-circle\" *ngIf=\"statsResult.leads!=null\">{{statsResult.leads.firstName.substr(0, 2)}}</div>\n    <div class=\"detail-section\">\n      <h4 *ngIf=\"statsResult.leads\">{{statsResult.leads.firstName}}</h4>\n      <h6 *ngIf=\"statsResult.location.city && statsResult.location.country\">\n        <i class=\"material-icons\">room</i> {{statsResult.location.city}}, {{statsResult.location.country}}\n      </h6>\n      <h6><i class=\"material-icons\" *ngIf=\"statsResult.leads.tel \">phone</i> {{statsResult.leads.tel}}</h6>\n      <h6><i class=\"material-icons\" *ngIf=\"statsResult.leads.email\">mail_outline</i>{{statsResult.leads.email}}</h6>\n      <!--<h6><i class=\"material-icons\">public</i> Chrome</h6>-->\n    </div>\n  </div>\n  <div class=\"mid-section\" *ngIf=\"statsResult && statsResult.stats.length>0\">\n    <div class=\"outer-slim\">\n    <div class=\"bh\">\n      <div class=\"que-outer\" *ngFor=\"let stat of statsResult.stats\">\n        <div class=\"que-icon-outer\"><i class=\"material-icons\">live_help</i></div>\n        <div class=\"que-section\">\n          <h6>{{stat.title}}</h6>\n          <h6 class=\"ans\">{{stat.label}}</h6>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }

});
//# sourceMappingURL=7.map