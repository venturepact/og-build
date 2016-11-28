webpackJsonp([4,11],{

/***/ 1012:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calculator_service__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalculatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalculatorComponent = (function () {
    function CalculatorComponent(_calService, subDomainService, loggedInService, _cookieService, _router) {
        this._calService = _calService;
        this.subDomainService = subDomainService;
        this.loggedInService = loggedInService;
        this._cookieService = _cookieService;
        this._router = _router;
        this.loggedIn = false;
        this.isLoggedin = false;
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var sub_domain = this.subDomainService.subDomain.sub_domain;
        if (this._cookieService.readCookie('storage') != null && storage.user.role !== "ADMIN" && storage.companyList.includes(sub_domain))
            this.loggedIn = true;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        //get name from url
        var storage = this._cookieService.readCookie('storage');
        if (storage) {
            this.isLoggedin = true;
        }
        var url = window.location.href;
        var urlParts = url.split('/');
        var name = urlParts[3].split('?')[0];
        this.subdomain = urlParts[2].split('.')[0];
        if (name === 'himanshu' || name.charAt(0) === '?') {
            this._router.navigate(['/']);
        }
        else {
            //get App and initialize page
            this.initPage(name);
        }
    };
    CalculatorComponent.prototype.initPage = function (name) {
        var _this = this;
        this._calService.getCompanyApp(name, this.subdomain)
            .subscribe(function (response) {
            if (response != 'CALC_NOT_FOUND') {
                if (_this.loggedIn) {
                    response.status = 'DEV';
                    localStorage.setItem('template', JSON.stringify(response));
                    _this._router.navigate(['/preview']);
                }
                else {
                    if (response.mode != 'PRIVATE') {
                        //handle tracking
                        _this.googleAnalytics(response);
                        //localStorage.setItem('template', JSON.stringify(response));
                        _this.JSON_Template = response;
                        _this.tempName = response.template;
                    }
                    else
                        _this.pageStatus = 'Private';
                }
            }
            else
                _this.pageStatus = 'Not-Found';
        }, function (error) {
            console.log(error);
        });
    };
    CalculatorComponent.prototype.googleAnalytics = function (calc) {
        //ours
        ga('devteam.send', 'pageview', '/' + calc.parentApp);
        ga('devteam.send', 'pageview', '/' + calc.company);
        ga('devteam.send', 'event', calc.name + ' Page View', 'Calculator Visited', calc.url);
        //users
        if (calc.ga) {
            ga('create', calc.ga, 'auto', 'userCustom');
            ga('userCustom.send', 'pageview', '/' + calc.url);
            ga('userCustom.send', 'event', calc.name + ' Page View', 'Calculator Visited', calc.url);
        }
    };
    CalculatorComponent.prototype.pricing = function () {
        this.link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].APP_EXTENSION;
        var protocol = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].PROTOCOL;
        var url = this.link + '/pricing.html';
        jQuery(location).attr('href', protocol + url);
    };
    CalculatorComponent.prototype.features = function () {
        this.link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].APP_EXTENSION;
        var protocol = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].PROTOCOL;
        var url = this.link + '/features.html';
        jQuery(location).attr('href', protocol + url);
    };
    CalculatorComponent.prototype.whyCalculators = function () {
        this.link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].APP_EXTENSION;
        var protocol = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].PROTOCOL;
        var url = this.link + '/why_calculators.html';
        jQuery(location).attr('href', protocol + url);
    };
    CalculatorComponent.prototype.examples = function () {
        this.link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].APP_EXTENSION;
        var protocol = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].PROTOCOL;
        var url = this.link + '/examples.html';
        jQuery(location).attr('href', protocol + url);
    };
    CalculatorComponent.prototype.login = function () {
        this._router.navigate(['/login']);
    };
    CalculatorComponent.prototype.dashboard = function () {
        this._router.navigate(['/dashboard']);
    };
    CalculatorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'og-calc',
            template: __webpack_require__(1143),
            styles: [__webpack_require__(923)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_calculator_service__["a" /* CalculatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_calculator_service__["a" /* CalculatorService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["a" /* SubDomainService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["b" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["b" /* LoggedInService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["c" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["c" /* CookieService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _e) || Object])
    ], CalculatorComponent);
    return CalculatorComponent;
    var _a, _b, _c, _d, _e;
}());


/***/ },

/***/ 1013:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calculator_service__ = __webpack_require__(898);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SeoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SeoComponent = (function () {
    function SeoComponent(_calService, route) {
        this._calService = _calService;
        this.route = route;
    }
    SeoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var name = params['name'];
            if (name)
                _this.initPage(name);
        });
    };
    SeoComponent.prototype.initPage = function (name) {
        var _this = this;
        var url = window.location.href;
        var urlParts = url.split('/');
        this._calService.getCompanyApp(name, urlParts[2].split('.')[0])
            .subscribe(function (response) {
            if (response.mode != 'PRIVATE') {
                _this.JSON_Template = response;
                _this.tempName = response.template;
            }
            else
                _this.pageStatus = 'Private';
        }, function (error) {
            console.log(error);
        });
    };
    SeoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'og-seo-calc',
            template: "<Temp *ngIf=\"tempName\" [JSON_Template]=\"JSON_Template\"></Temp>",
            styles: [__webpack_require__(923)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_calculator_service__["a" /* CalculatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_calculator_service__["a" /* CalculatorService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], SeoComponent);
    return SeoComponent;
    var _a, _b;
}());


/***/ },

/***/ 1143:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"!tempName\" class=\"loader-live\"></div>\r\n\r\n<Temp *ngIf=\"tempName\" [JSON_Template]=\"JSON_Template\"></Temp>\r\n\r\n<div *ngIf=\"pageStatus==='Not-Found'\">\r\n  <nav class=\"navbar custom-navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"index.html\"><img src=\"assets/images/outgrow-logo.png\" /></a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"javascript:void(0);\" (click)=\"whyCalculators()\">Why Calculators ?</a></li>\r\n          <li><a href=\"javascript:void(0);\" (click)=\"features()\">Featuress</a></li>\r\n          <li><a href=\"javascript:void(0);\" (click)=\"pricing()\">Pricing</a></li>\r\n          <li><a href=\"javascript:void(0);\" (click)=\"examples()\">Examples</a></li>\r\n          <li>\r\n            <a *ngIf=\"!isLoggedin\" href=\"javascript:void(0);\" class=\"link-login\" (click)=\"login()\">Login</a>\r\n            <a *ngIf=\"isLoggedin\" href=\"javascript:void(0);\" class=\"link-login\" (click)=\"dashboard()\">Dashboard</a>\r\n          </li>\r\n        </ul>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n  <!-- Homepage header end-->\r\n  <!-- Homepage section 1 start-->\r\n  <section class=\"section section-1\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"col-xs-12 col-sm-6 section-1-left\">\r\n        <div class=\"section1-left-cell\">\r\n          <h3 class=\"mk-animate-element fade-in heading-404\">\r\n            404\r\n          </h3>\r\n          <h4 class=\"mk-animate-element fade-in heading2-404\">\r\n            Looks like your calc is not published yet, please<br> login and publish your calc.\r\n          </h4>\r\n          <div class=\"form-group mk-animate-element fade-in hide\">\r\n            <input type=\"text\" placeholder=\"Email Address\" />\r\n          </div>\r\n          <div class=\"col-xs-12 col-sm-8 np\">\r\n            <a *ngIf=\"!isLoggedin\" href=\"javascript:void(0);\" class=\"btn-buildcal mk-animate-element fade-in login-404\" (click)=\"login()\">Login</a>\r\n            <a *ngIf=\"isLoggedin\" href=\"javascript:void(0);\" class=\"btn-buildcal mk-animate-element fade-in login-404\" (click)=\"dashboard()\">Dashboard</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-6 np rs-hide\">\r\n        <div class=\"sec1-box-left img-404\">\r\n          <div class=\"sec1-box1 mk-animate-element fade-in\">\r\n            <img src=\"assets/images/404.png\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-12 text-center footer-404\">\r\n        <i class=\"material-icons\">copyright</i>\r\n        <span>Copyrights</span>\r\n        <img src=\"assets/images/footer-logo-dark.png\" />\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n\r\n<div *ngIf=\"pageStatus==='Private'\">\r\n  Calculator is no longer available for Public Use.\r\n</div>\r\n"

/***/ },

/***/ 787:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculator_component__ = __webpack_require__(1012);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_logged_in_service__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_calculator_service__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_shared_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templateAll_template_module__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__builder_services_builder_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__seo_component__ = __webpack_require__(1013);
/* harmony export (binding) */ __webpack_require__.d(exports, "CalculatorModule", function() { return CalculatorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CALCULATOR_ROUTES = [
    {
        path: '',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__calculator_component__["a" /* CalculatorComponent */]
            },
            {
                path: ':name',
                component: __WEBPACK_IMPORTED_MODULE_8__seo_component__["a" /* SeoComponent */]
            }
        ]
    }
];
var CalculatorModule = (function () {
    function CalculatorModule() {
    }
    CalculatorModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forChild(CALCULATOR_ROUTES), __WEBPACK_IMPORTED_MODULE_4__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_5__templateAll_template_module__["a" /* TemplateModule */]],
            exports: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__calculator_component__["a" /* CalculatorComponent */], __WEBPACK_IMPORTED_MODULE_8__seo_component__["a" /* SeoComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_calculator_service__["a" /* CalculatorService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_logged_in_service__["a" /* LoggedInService */], __WEBPACK_IMPORTED_MODULE_6__builder_services_builder_service__["a" /* BuilderService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CalculatorModule);
    return CalculatorModule;
}());


/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_service__ = __webpack_require__(794);
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

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(51);
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

/***/ 792:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_models_model__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__analytic_service__ = __webpack_require__(791);
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

/***/ 793:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_model__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_model__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_model__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calc_email_model__ = __webpack_require__(807);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__app_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__page_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__section_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__item_model__["a"]; });
/* unused harmony reexport CalcEmail */







/***/ },

/***/ 794:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(51);
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

/***/ 796:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_services_analytic_service__ = __webpack_require__(791);
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

/***/ 797:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customValidation__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TemplateValidatorService; });
// TODO This file has not been replaced ever since ages.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TemplateValidatorService = (function () {
    function TemplateValidatorService(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    TemplateValidatorService.prototype.getFormGroups = function () {
        var _this = this;
        if (!this.forms) {
            this.jsonBuilderHelper.setValidatorService(this);
            var pages = this.jsonBuilderHelper.getJSONBuilt().pages;
            var forms_1 = {};
            pages.forEach(function (page) {
                if (page.type === 'Questionnaire') {
                    page.sections.forEach(function (section) {
                        forms_1[section._id] = _this.toFormGroup(section.items);
                    });
                }
            });
            this.forms = forms_1;
        }
        return this.forms;
    };
    TemplateValidatorService.prototype.toFormGroup = function (questions) {
        var _this = this;
        var group = {};
        questions.forEach(function (question) {
            var validators = [];
            if (question.type === 'checkbox' || question.type === 'radio_button' || question.type === 'switchbox') {
                group[question._id] = [];
                question.options.forEach(function (option, index) {
                    group[question._id][index] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
                });
                if (question.config.validations.required.status === true)
                    group[question._id] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */](group[question._id], __WEBPACK_IMPORTED_MODULE_2__customValidation__["a" /* CustomValidator */].checkboxRequired(question));
                else
                    group[question._id] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */](group[question._id]);
            }
            else {
                validators = _this.composeValidators(question.config.validations, question);
                group[question._id] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose(validators));
            }
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */](group);
    };
    TemplateValidatorService.prototype.composeValidators = function (validator, question) {
        var validators = [];
        if (question.type === 'textfield' && question.config.type === 'number') {
            validators.push(__WEBPACK_IMPORTED_MODULE_2__customValidation__["a" /* CustomValidator */].minimum(question.props.minVal));
            validators.push(__WEBPACK_IMPORTED_MODULE_2__customValidation__["a" /* CustomValidator */].maximum(question.props.maxVal));
        }
        if (validator.required.status === true && question.type === 'textfield') {
            validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
            // validation for numeric field
            if (question.config.type === 'email') {
                validators.push(__WEBPACK_IMPORTED_MODULE_2__customValidation__["a" /* CustomValidator */].emailFormat);
            }
            else if (question.config.type === 'text') {
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(question.props.minVal));
            }
        }
        else {
            if (validator.required.status === true)
                validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        }
        return validators;
    };
    TemplateValidatorService.prototype.updateFormGroup = function (section) {
        var self = this;
        self.forms[section._id] = [];
        self.forms[section._id] = this.toFormGroup(section.items);
    };
    TemplateValidatorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object])
    ], TemplateValidatorService);
    return TemplateValidatorService;
    var _a;
}());


/***/ },

/***/ 799:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TemplateHttpService; });
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



var TemplateHttpService = (function (_super) {
    __extends(TemplateHttpService, _super);
    function TemplateHttpService(_http) {
        _super.call(this);
        this._http = _http;
    }
    TemplateHttpService.prototype.sendEmail = function (data) {
        var URL = this._url + '/builder/sendMail';
        return this._http.post(URL, data)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TemplateHttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], TemplateHttpService);
    return TemplateHttpService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__["a" /* BaseService */]));


/***/ },

/***/ 800:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(790);
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

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(51);
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

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__itemNames_store__ = __webpack_require__(808);
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

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section_model__ = __webpack_require__(804);
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

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_model__ = __webpack_require__(802);
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

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controls__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_themeColor_directive__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_result_directive__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_htmlprocessor_directive__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__builder_services_UrlShortner_service__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_customValidation__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__control_component__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_modules_shared_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_fetchResult_directive__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_recommendation_service__ = __webpack_require__(792);
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

/***/ 807:
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

/***/ 808:
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

/***/ 809:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_model__ = __webpack_require__(803);
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

/***/ 810:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__ = __webpack_require__(796);
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

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__ = __webpack_require__(796);
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

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(790);
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

/***/ 813:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(790);
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

/***/ 814:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'click-button',
            template: "\n\t\t\t <div class=\"text-center\" *ngIf=\"data.visible\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn prime-action  next-step sliding-next \"\n\t\t\t\t\t\t(click)=\"controlOutput.emit($event)\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{data.props.title}}\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t ",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], Button);
    return Button;
}());


/***/ },

/***/ 815:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(792);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'checkbox',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None,
            template: __webpack_require__(838)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], Checkbox);
    return Checkbox;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 816:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'control',
            template: "\n          <textfield *ngIf=\"data.type=='textfield'\" [data]=\"data\" [form]=\"form\" (controlOutput)=\"onControlOutput($event)\"></textfield>\n          <text_area *ngIf=\"data.type=='text-area'\" [data]=\"data\"  ></text_area>\n          <selectbox *ngIf=\"data.type=='selectbox'\" [data]=\"data\" [form]=\"form\" ></selectbox>\n          <radio-button *ngIf=\"data.type=='radio_button'\" [data]=\"data\" [form]=\"form\" (controlOutput)=\"onControlOutput($event)\"></radio-button>\n          <og-header *ngIf=\"data.type=='header'\" [data]=\"data\" ></og-header>\n          <sub_header *ngIf=\"data.type=='sub_header'\" [data]=\"data\" ></sub_header>\n          <click-button *ngIf=\"data.type=='click_button'\" [data]=\"data\"\n            (controlOutput)=\"onControlOutput($event)\" ></click-button>\n      \t\t<logo *ngIf=\"data.type=='logo'\" [data]=\"data\" ></logo>\n          <slider *ngIf=\"data.type=='slider'\" [data]=\"data\" ></slider>\n          <leadform_question *ngIf=\"data.type=='leadform_question'\" [data]=\"data\"\n            (controlOutput)=\"onControlOutput($event)\" ></leadform_question>\n          <leadform *ngIf=\"data.type=='leadform'\" [data]=\"data\" [page]=\"page\"\n           (controlOutput)=\"onControlOutput($event)\" ></leadform>\n          <poweredby *ngIf=\"data.type=='poweredby'\"  [data]=\"data\" ></poweredby>\n          <footer-links *ngIf=\"data.type=='footer_links'\"  [data]=\"data\" ></footer-links>\n          <checkbox *ngIf=\"data.type=='checkbox'\" [data]=\"data\" [form]=\"form\"></checkbox>\n          <switchbox *ngIf=\"data.type=='switchbox'\" [data]=\"data\" [form]=\"form\" ></switchbox>\n          <result_output *ngIf=\"data.type=='result_output'\" [data]=\"data\" ></result_output>\n          <result_header *ngIf=\"data.type=='result_header'\" [data]=\"data\" ></result_header>\n          <share_links *ngIf=\"data.type=='share_links'\"  [data]=\"data\" ></share_links>\n          <result_disclaimer *ngIf=\"data.type=='result_disclaimer'\" [data]=\"data\" ></result_disclaimer>\n          <result_redo *ngIf=\"data.type=='result_redo'\" [data]=\"data\" ></result_redo>\n      ",
        }), 
        __metadata('design:paramtypes', [])
    ], Control);
    return Control;
    var _a;
}());


/***/ },

/***/ 817:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__textfield_textfield_component__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textarea_textarea_component__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectbox_selectbox_component__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radiobutton_radiobutton_component__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sub_header_sub_header_component__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button_button_component__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logo_logo_component__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slider_slider_component__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leadform_leadform_component__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__leadform_question_leadform_question_component__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_poweredby_component__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_links_component__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__checkbox_checkbox_component__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__switch_switchbox_component__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__resultoutput_resultoutput_component__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__resultheader_resultheader_component__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sharelinks_sharelinks_component__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__resultredo_redo_component__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__resultdisclaimer_resultdisclaimer_component__ = __webpack_require__(825);
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

/***/ 818:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'footer-links',
            template: "\n    <div class=\" text-left\" *ngIf=\"data.visible == true\" >\n      <ul class=\"footer-nav\">\n        <li  *ngFor=\"let item of data.options;let i=index\">\n          <a href=\"{{item.value}}\">{{ item.label }}</a>\n          <span *ngIf=\"i < data.options.length-1\">-</span>\n        </li>\n      </ul>\n    </div>\n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], FooterLinksComponent);
    return FooterLinksComponent;
}());


/***/ },

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(17);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'poweredby',
            template: "\n\t\t<div class=\" text-right\" *ngIf=\"data.visible == true\" >\n\t\t\t<div class=\" powered-by\">\n\t\t\t\t<span>Powered by </span>\n\t\t\t\t<a href=\"{{url}}\" target=\"_blank\">\n\t\t\t\t\t\t<img src=\"https://cdn.filestackcontent.com/tqowVp1lQYSVmPLRr8Hu\" alt=\"Powered By\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], PoweredByComponent);
    return PoweredByComponent;
}());


/***/ },

/***/ 820:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'og-header',
            template: "\n    <div [innerHtml]=\"data.props.title | safeHtml\" [class]=\"data.defaultClass\">\n    </div>  \n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
}());


/***/ },

/***/ 821:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customValidation__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__ = __webpack_require__(790);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'leadform',
            template: __webpack_require__(839),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], LeadForm);
    return LeadForm;
    var _a, _b;
}());


/***/ },

/***/ 822:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customValidation__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__ = __webpack_require__(790);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'leadform_question',
            template: __webpack_require__(840),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], LeadFormQuestion);
    return LeadFormQuestion;
    var _a, _b;
}());


/***/ },

/***/ 823:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'logo',
            template: "\n      <header class=\"landing-page-header\" *ngIf=\"data.visible\" >\n        <div class=\" logo\">\n          <a href=\"javascript:void(0);\">\n            <img src=\"{{data.props.title}}\" alt=\"{{data.config.placeholder}}\">\n          </a>\n        </div>\n      </header>\n  ",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], Logo);
    return Logo;
}());


/***/ },

/***/ 824:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(792);
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
        var self = this;
        setTimeout(function () {
            self.controlOutput.emit(true);
        }, 1000);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'radio-button',
            template: __webpack_require__(841)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], RadioButton);
    return RadioButton;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 825:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'result_disclaimer',
            template: "\t\n\t\t<div [innerHtml]=\"data.props.title | safeHtml\" class=\"disc-set\">\n\t\t</div>\n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], ResultDisclaimer);
    return ResultDisclaimer;
}());


/***/ },

/***/ 826:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'result_header',
            template: "\n    <div class=\"mid-width\" [innerHtml]=\"data.props.title | safeHtml\">\n    </div>  \n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], ResultHeader);
    return ResultHeader;
}());


/***/ },

/***/ 827:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(790);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'result_output',
            template: __webpack_require__(842),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object])
    ], ResultOutput);
    return ResultOutput;
    var _a;
}());


/***/ },

/***/ 828:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'result_redo',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None,
            template: "\n    <div class=\"redo-link\">\n\t\t<ul>\n\t\t    <li><span>|</span></li>\n\t\t\t<li><a  id=\"refresh-button\" (click)=\"redoFun()\"><i class=\"material-icons\">replay</i></a></li>\t\n        </ul>\n\t</div>\n\t\t\t\n"
        }), 
        __metadata('design:paramtypes', [])
    ], RedoComponent);
    return RedoComponent;
}());


/***/ },

/***/ 829:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(792);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'selectbox',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None,
            template: __webpack_require__(843),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], SelectBox);
    return SelectBox;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 830:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(17);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'share_links',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None,
            template: "\n\t<div class=\"share-link\">\n\t\t<ul>\n\t\t\t<li *ngIf=\"isVisible('facebook')\"><a (click)=\"facebookShare()\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t<li *ngIf=\"isVisible('twitter')\"><a target=\"_blank\" [href]=\"twitterSrcUrl\" ><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t<li *ngIf=\"isVisible('linkedin')\"><a target=\"_blank\" [href]=\"linkedInSrcUrl\" ><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t<li *ngIf=\"isVisible('email')\"><a target=\"_blank\" [href]=\"mailSrcUrl\" ><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\n\t\t</ul>\n\t</div>\n",
            providers: [__WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__["a" /* UrlShortner */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* SubDomainService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__["a" /* UrlShortner */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__["a" /* UrlShortner */]) === 'function' && _d) || Object])
    ], ShareLinks);
    return ShareLinks;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 831:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(790);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'slider',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None,
            template: __webpack_require__(844),
            // template:'Hello',
            styles: [
                __webpack_require__(836),
                __webpack_require__(837),
            ],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], Slider);
    return Slider;
    var _a, _b;
}());


/***/ },

/***/ 832:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'sub_header',
            template: "\n    <div [innerHtml]=\"data.props.title | safeHtml\" [class]=\"data.defaultClass\">\n    </div>  \n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], SubHeader);
    return SubHeader;
}());


/***/ },

/***/ 833:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(790);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'switchbox',
            viewProviders: [],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None,
            template: __webpack_require__(845),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object])
    ], SwitchBox);
    return SwitchBox;
    var _a, _b, _c;
}());


/***/ },

/***/ 834:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(790);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'text_area',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None,
            template: "<div class=\"input-field\"> \n                <textarea  class=\"validate\" (blur)=\"onBlur()\"  [required]=\"data.required\" placeholder=\"{{data.config.placeholder}}\" (change)=\"data.props.currentLabel=data.props.currentValue\" [(ngModel)]=\"data.props.currentValue\" ></textarea>\n                <label for=\"first_name\">{{data.props.title}}</label>\n             </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], TextArea);
    return TextArea;
    var _a, _b;
}());


/***/ },

/***/ 835:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(34);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'textfield',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None,
            template: __webpack_require__(846)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object])
    ], TextField);
    return TextField;
    var _a, _b, _c;
}());


/***/ },

/***/ 836:
/***/ function(module, exports) {

module.exports = "/* Ion.RangeSlider\r\n// css version 2.0.3\r\n// © 2013-2014 Denis Ineshin | IonDen.com\r\n// ===================================================================================================================*/\r\n\r\n/* =====================================================================================================================\r\n// RangeSlider */\r\n\r\n.irs {\r\n    position: relative; display: block;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n     -khtml-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n    .irs-line {\r\n        position: relative; display: block;\r\n        overflow: hidden;\r\n        outline: none !important;\r\n    }\r\n        .irs-line-left, .irs-line-mid, .irs-line-right {\r\n            position: absolute; display: block;\r\n            top: 0;\r\n        }\r\n        .irs-line-left {\r\n            left: 0; width: 11%;\r\n        }\r\n        .irs-line-mid {\r\n            left: 9%; width: 82%;\r\n        }\r\n        .irs-line-right {\r\n            right: 0; width: 11%;\r\n        }\r\n\r\n    .irs-bar {\r\n        position: absolute; display: block;\r\n        left: 0; width: 0;\r\n    }\r\n        .irs-bar-edge {\r\n            position: absolute; display: block;\r\n            top: 0; left: 0;\r\n        }\r\n\r\n    .irs-shadow {\r\n        position: absolute; display: none;\r\n        left: 0; width: 0;\r\n    }\r\n\r\n    .irs-slider {\r\n        position: absolute; display: block;\r\n        cursor: default;\r\n        z-index: 1;\r\n    }\r\n        .irs-slider.single {\r\n\r\n        }\r\n        .irs-slider.from {\r\n\r\n        }\r\n        .irs-slider.to {\r\n\r\n        }\r\n        .irs-slider.type_last {\r\n            z-index: 2;\r\n        }\r\n\r\n    .irs-min {\r\n        position: absolute; display: block;\r\n        left: 0;\r\n        cursor: default;\r\n    }\r\n    .irs-max {\r\n        position: absolute; display: block;\r\n        right: 0;\r\n        cursor: default;\r\n    }\r\n\r\n    .irs-from, .irs-to, .irs-single {\r\n        position: absolute; display: block;\r\n        top: 0; left: 0;\r\n        cursor: default;\r\n        white-space: nowrap;\r\n    }\r\n\r\n.irs-grid {\r\n    position: absolute; display: none;\r\n    bottom: 0; left: 0;\r\n    width: 100%; height: 20px;\r\n}\r\n.irs-with-grid .irs-grid {\r\n    display: block;\r\n}\r\n    .irs-grid-pol {\r\n        position: absolute;\r\n        top: 0; left: 0;\r\n        width: 1px; height: 8px;\r\n        background: #000;\r\n    }\r\n    .irs-grid-pol.small {\r\n        height: 4px;\r\n    }\r\n    .irs-grid-text {\r\n        position: absolute;\r\n        bottom: 0; left: 0;\r\n        white-space: nowrap;\r\n        text-align: center;\r\n        font-size: 9px; line-height: 9px;\r\n        padding: 0 3px;\r\n        color: #000;\r\n    }\r\n\r\n.irs-disable-mask {\r\n    position: absolute; display: block;\r\n    top: 0; left: -1%;\r\n    width: 102%; height: 100%;\r\n    cursor: default;\r\n    background: rgba(0,0,0,0.0);\r\n    z-index: 2;\r\n}\r\n.irs-disabled {\r\n    opacity: 0.4;\r\n}\r\n.lt-ie9 .irs-disabled {\r\n    filter: alpha(opacity=40);\r\n}\r\n\r\n\r\n.irs-hidden-input {\r\n    position: absolute !important;\r\n    display: block !important;\r\n    top: 0 !important;\r\n    left: 0 !important;\r\n    width: 0 !important;\r\n    height: 0 !important;\r\n    font-size: 0 !important;\r\n    line-height: 0 !important;\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n    outline: none !important;\r\n    z-index: -9999 !important;\r\n    background: none !important;\r\n    border-style: solid !important;\r\n    border-color: transparent !important;\r\n}\r\n"

/***/ },

/***/ 837:
/***/ function(module, exports) {

module.exports = "/* Ion.RangeSlider, Simple Skin\r\n// css version 2.0.3\r\n// © Denis Ineshin, 2014    https://github.com/IonDen\r\n// © guybowden, 2014        https://github.com/guybowden\r\n// ===================================================================================================================*/\r\n\r\n/* =====================================================================================================================\r\n// Skin details */\r\n\r\n.irs {\r\n    height: 55px;\r\n}\r\n.irs-with-grid {\r\n    height: 75px;\r\n}\r\n.irs-line {\r\n    height: 10px; top: 33px;\r\n    background: #EEE;\r\n    background: linear-gradient(to bottom, #DDD -50%, #FFF 150%); /* W3C */\r\n    border: 1px solid #CCC;\r\n    border-radius: 16px;\r\n    -moz-border-radius: 16px;\r\n}\r\n    .irs-line-left {\r\n        height: 8px;\r\n    }\r\n    .irs-line-mid {\r\n        height: 8px;\r\n    }\r\n    .irs-line-right {\r\n        height: 8px;\r\n    }\r\n\r\n.irs-bar {\r\n    height: 10px; top: 33px;\r\n    border-top: 1px solid #428bca;\r\n    border-bottom: 1px solid #428bca;\r\n    background: #428bca;\r\n    background: linear-gradient(to top, rgba(66,139,202,1) 0%,rgba(127,195,232,1) 100%); /* W3C */\r\n}\r\n    .irs-bar-edge {\r\n        height: 10px; top: 33px;\r\n        width: 14px;\r\n        border: 1px solid #428bca;\r\n        border-right: 0;\r\n        background: #428bca;\r\n        background: linear-gradient(to top, rgba(66,139,202,1) 0%,rgba(127,195,232,1) 100%); /* W3C */\r\n        border-radius: 16px 0 0 16px;\r\n        -moz-border-radius: 16px 0 0 16px;\r\n    }\r\n\r\n.irs-shadow {\r\n    height: 2px; top: 38px;\r\n    background: #000;\r\n    opacity: 0.3;\r\n    border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n}\r\n.lt-ie9 .irs-shadow {\r\n    filter: alpha(opacity=30);\r\n}\r\n\r\n.irs-slider {\r\n    top: 25px;\r\n    width: 27px; height: 27px;\r\n    border: 1px solid #AAA;\r\n    background: #DDD;\r\n    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(220,220,220,1) 20%,rgba(255,255,255,1) 100%); /* W3C */\r\n    border-radius: 27px;\r\n    -moz-border-radius: 27px;\r\n    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);\r\n    cursor: pointer;\r\n}\r\n\r\n.irs-slider.state_hover, .irs-slider:hover {\r\n    background: #FFF;\r\n}\r\n\r\n.irs-min, .irs-max {\r\n    color: #333;\r\n    font-size: 12px; line-height: 1.333;\r\n    text-shadow: none;\r\n    top: 0;\r\n    padding: 1px 14px;\r\n    background: rgba(0,0,0,0.1);\r\n    border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n}\r\n\r\n.lt-ie9 .irs-min, .lt-ie9 .irs-max {\r\n    background: #ccc;\r\n}\r\n\r\n.irs-from {\r\n    color: #fff;\r\n    font-size: 14px; line-height: 1.333;\r\n    text-shadow: none;\r\n    padding: 1px 14px;\r\n    background: #428bca;\r\n    border-radius:8px;\r\n    -moz-border-radius: 8px;\r\n}\r\n\r\n.irs-to {\r\n    color: #fff;\r\n    font-size: 14px; line-height: 1.333;\r\n    text-shadow: none;\r\n    padding: 1px 14px;\r\n    background: #428bca;\r\n    border-radius:8px;\r\n    -moz-border-radius: 8px;\r\n}\r\n\r\n.irs-single {\r\n    color: #fff;\r\n    font-size: 12px; line-height: 1.333;\r\n    text-shadow: none;\r\n    padding: 1px 14px;\r\n    background: #428bca;\r\n    border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n}\r\n.lt-ie9 .irs-from, .lt-ie9 .irs-to, .lt-ie9 .irs-single {\r\n    background: #999;\r\n}\r\n\r\n.irs-grid {\r\n    height: 27px;\r\n}\r\n.irs-grid-pol {\r\n    opacity: 0.5;\r\n    background: #428bca;\r\n}\r\n.irs-grid-pol.small {\r\n    background: #999;\r\n}\r\n\r\n.irs-grid-text {\r\n    bottom: 5px;\r\n    color: #99a4ac;\r\n}\r\n\r\n.irs-disabled {\r\n}\r\n"

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = "<div class=\"check-comp\" [formGroup]=\"form.controls[data._id]\">\r\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n    <img [src]=\"data.imageURL\" />\r\n  </div>\r\n  <div [class.checkbox-outer-base]=\"!data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n       [class.checkbox-outer]=\"data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n       [class.pic-selector]=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"\r\n       [class.active]=\"checkbox_item.selected\"\r\n       *ngFor=\"let checkbox_item of data.options, let i = index\" tabindex=\"0\"\r\n  >\r\n    <label onclick=\"\" class=\"control control--checkbox\"  [ngStyle]=\"{'background-image': 'url('+((data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card')?checkbox_item.imageURL:'')+')'}\" >\r\n      <span *ngIf=\"!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'\">{{checkbox_item.label}}</span>\r\n      <input type=\"checkbox\"\r\n             [id]=\"data._id\"\r\n             (change)=\"onChange($event,i)\"\r\n             id=\"{{data._id}}{{i}}\"\r\n             [checked]=\"checkbox_item.selected\"\r\n             [formControlName]=\"i\"\r\n             value=\"{{checkbox_item.value}}\"\r\n      >\r\n      <div class=\"control__indicator check-set\">\r\n        <i\r\n          class=\"material-icons\"\r\n          *ngIf=\"checkbox_item.icon != '' && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n        >\r\n          {{checkbox_item.icon}}\r\n        </i>\r\n        <i\r\n          class=\"material-icons\"\r\n          *ngIf=\"checkbox_item.icon == '' && data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n        >\r\n          landscape\r\n        </i>\r\n        <div class=\"label-image\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"></div>\r\n        <span class=\"img-overlay\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n          <span class=\"text-overlay\">\r\n            <span>{{checkbox_item.label}}</span>\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </label>\r\n  </div>\r\n\r\n  <div class=\"errorMessage\" *ngIf=\"(form.controls[data._id].touched || touched) && !isValid\">\r\n    {{data.config.validations.required.message}}\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 839:
/***/ function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(formGroup())\" [formGroup]=\"formGroup()\"  *ngIf=\"data.visible\" novalidate>\r\n  <div class=\"container-temp text-center\">\r\n    <div class=\"lead-heading-temp1\" *ngIf=\"page && page.type ==='Result'\">\r\n      {{page.sections[2].title}}\r\n    </div>\r\n    <div>\r\n      <div class=\"input-section\">\r\n        <div *ngFor=\"let field of data.fields, let i=index\" class=\"input-outer\" [class.w100]=\"data.fields.length==1\">\r\n          <input tabindex=\"0\"\r\n                 placeholder=\"{{field.placeholder}}\"\r\n                 type=\"{{field.type}}\"\r\n                 (blur) = \"onTouched(i)\"\r\n                 [formControlName]=\"i\"\r\n                 [(ngModel)]=\"field.value\"\r\n          >\r\n          <div *ngIf=\"formGroup().controls[i].touched\">\r\n                    <span\r\n                      *ngIf=\"formGroup().controls[i].errors && formGroup().controls[i].errors['required']\">\r\n                     {{field.placeholder}} is required.\r\n                    </span>\r\n            <span\r\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['EmailError']\">\r\n                      Not a valid Email!\r\n                    </span>\r\n            <span\r\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['PhoneNumberError']\">\r\n                      Not a valid Phone Number!\r\n                    </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container-temp text-center\">\r\n    <button class=\"btn prime-action\"\r\n    >\r\n      <!--[themeColor]=\"['background']\"-->\r\n      {{data.props.title}}\r\n    </button>\r\n  </div>\r\n</form>\r\n"

/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(formGroup())\" [formGroup]=\"formGroup()\" novalidate>\r\n  <div class=\"container-temp text-center\">\r\n    <div class=\" text-center question-section\">\r\n      <div class=\"input-section\">\r\n        <div *ngFor=\"let field of data.fields, let i=index\" class=\"input-outer\" [class.w100]=\"data.fields.length==1\">\r\n          <div class=\"section-head\"> <div class=\"pull-left\">{{field.name}} </div> </div>\r\n          <input tabindex=\"0\"\r\n                 placeholder=\"{{field.placeholder}}\"\r\n                 type=\"{{field.type}}\"\r\n                 (blur) = \"onTouched(i)\"\r\n                 [formControlName]=\"i\"\r\n                 [(ngModel)]=\"field.value\"\r\n          >\r\n          <div *ngIf=\"formGroup().controls[i].touched\">\r\n                    <span\r\n                      *ngIf=\"formGroup().controls[i].errors && formGroup().controls[i].errors['required']\">\r\n                      {{field.placeholder}} is required.\r\n                    </span>\r\n            <span\r\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['EmailError']\">\r\n                      Not a valid Email!\r\n                    </span>\r\n            <span\r\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['PhoneNumberError']\">\r\n                      Not a valid Phone Number!\r\n                    </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"w100 text-center\">\r\n    <button class=\"btn prime-action sliding-next og-lead-ques\"\r\n    >\r\n      <!--[themeColor]=\"['background']\"-->\r\n      {{data.props.title}}\r\n    </button>\r\n  </div>\r\n</form>\r\n"

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = "<div class=\"check-comp\" [formGroup]=\"form.controls[data._id]\">\r\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n    <img [src]=\"data.imageURL\" />\r\n  </div>\r\n  <div class=\"radio-outer\" \r\n    [class.active]=\"radio_item.selected\" \r\n    *ngFor=\"let radio_item of data.options, let i = index\" \r\n    tabindex=\"0\"\r\n    [class.pic-selector]=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"\r\n  >\r\n    <label onclick=\"\" class=\"control control--radio lable-style\" [ngStyle]=\"{'background-image': 'url('+((data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card')?radio_item.imageURL:'')+')'}\">\r\n      <span *ngIf=\"!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'\">{{radio_item.label}}</span>\r\n      <input type=\"radio\"\r\n             id=\"{{data._id}}{{i}}\"\r\n             [formControlName]=\"i\"\r\n             [checked]=\"radio_item.selected\"\r\n             (change)=\"onClick(radio_item)\"\r\n      />\r\n      <div class=\"control__indicator icon-set\" [class.icon-set]=\"data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\">\r\n        <i\r\n          class=\"material-icons\"\r\n          *ngIf=\"(radio_item.icon != '' && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'))\"\r\n        >\r\n          {{radio_item.icon}}\r\n        </i>\r\n        <i\r\n          class=\"material-icons\"\r\n          *ngIf=\"radio_item.icon == '' && data.isIconPresent  && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n        >\r\n          landscape\r\n        </i>\r\n        <div class=\"label-image\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"></div>\r\n        <span class=\"img-overlay\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n          <span class=\"text-overlay\">\r\n            <span>{{radio_item.label}}</span>\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </label>\r\n  </div>\r\n  <!-- <span *ngIf=\"form.controls[data._id].touched\">\r\n      <div class=\"errorMessage\" *ngIf=\"!isValid\">{{data.config.validations.required.message}}</div>\r\n  </span> -->\r\n  <div class=\"errorMessage\" *ngIf=\"(form.controls[data._id].touched) && !isValid\">\r\n    {{data.config.validations.required.message}}\r\n  </div>\r\n</div>"

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"data.visible == true\">\r\n  <div\r\n\r\n  >\r\n    <div\r\n      class=\"small-top-sec\"\r\n      *ngIf=\"!data.hasOwnProperty('result')\"\r\n      [htmlProcess]=\"data.props.title\"\r\n    >\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = "<div class=\"dropdown-set\">\r\n  <div class=\"control-group select\" [formGroup]=\"form\" tabindex=\"0\">\r\n    <select class=\"demo-default {{data._id}} \" [(ngModel)]=\"data.props.currentValue\" [id]=\"data._id\" (change)=\"onChange($event)\" [formControlName]=\"data._id\">\r\n      <option tabindex=\"0\"\r\n              *ngFor=\"let option of data.options; let i = index\"\r\n              id=\"{{data._id}}{{i}}\"\r\n              [value]=\"option.value\"\r\n              [selected]=\"option.selected\"\r\n      >\r\n        {{option.label}}\r\n      </option>\r\n    </select>\r\n    <div class=\"select__arrow\"></div>\r\n    <div class=\"errorMessage\" *ngIf=\"!form.controls[data._id].pristine && !isValid\">\r\n      {{data.config.validations.required.message}}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 844:
/***/ function(module, exports) {

module.exports = "<div class=\"slider-set\">\r\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n    <img [src]=\"data.imageURL\" />\r\n  </div>\r\n  <div class=\"range-slider\">\r\n    <div class=\"well1\" tabindex=\"0\">\r\n      <input id=\"{{data._id}}\" type=\"text\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 845:
/***/ function(module, exports) {

module.exports = "<div [formGroup]=\"form.controls[data._id]\">\r\n\t<div class=\"switch-outer text-right\" *ngFor=\"let switch_item of data.options, let i = index\">\r\n\t\t<div class=\"switch-que\">{{switch_item.label}}</div>\r\n\t\t<div class=\"pull-right\">\r\n\t\t\t<div class=\"switch \">\r\n\t\t\t\t<input \r\n\t\t\t\t\ttype=\"checkbox\"\r\n\t\t\t\t\t[id]=\"data._id\"\r\n\t\t\t\t\t[formControlName]=\"i\"\r\n\t\t\t\t\tclass=\"cmn-toggle cmn-toggle-round-flat\"  \r\n\t\t\t\t\tid=\"{{data._id}}{{i}}\"\r\n\t\t\t\t\t[checked]=\"switch_item.selected\"\r\n\t\t\t\t\t(change)=\"onChange(switch_item,i)\"\r\n\t\t\t\t\tplaceholder=\"{{data.config.placeholder}}\" \r\n\t\t\t\t\tvalue=\"{{switch_item.value}}\"\r\n\t\t\t\t>\r\n\t\t\t\t<label attr.for=\"{{data._id}}{{i}}\"></label>\r\n\t\t\t\t\t<!--[themeColor]=\"['background']\"-->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"errorMessage\" *ngIf=\"form.controls[data._id].touched && !isValid\">\r\n\t\t{{data.config.validations.required.message}}\r\n\t</div>\r\n</div>"

/***/ },

/***/ 846:
/***/ function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\r\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n    <img [src]=\"data.imageURL\" />\r\n  </div>\r\n  <div class=\"input-field\">\r\n    <input tabindex=\"0\"\r\n           type=\"{{data.config.type}}\"\r\n           placeholder=\"{{data.config.placeholder}}\"\r\n           [id]=\"data._id\"\r\n           [(ngModel)]=\"data.props.currentValue\"\r\n           (change)=\"data.props.currentLabel=data.props.currentValue\"\r\n           [formControlName]=\"data._id\"\r\n           (blur)=\"onBlur()\"\r\n           (keypress)=\"keyPressed($event)\"\r\n    >\r\n  </div>\r\n  <div class=\"errorMessage\" *ngIf=\"form.controls[data._id].touched && !isValid\">{{ValidationMessage}}</div>\r\n</div>\r\n"

/***/ },

/***/ 847:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_models_model__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_analytic_service__ = __webpack_require__(791);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Template; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Template = (function () {
    function Template(route, router, jsonBuilderHelper, _analyticService, _script) {
        this.route = route;
        this.router = router;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._analyticService = _analyticService;
        this._script = _script;
        this.devMode = false;
    }
    Template.prototype.ngOnInit = function () {
        var _this = this;
        window.Intercom('update', { hide_default_launcher: true });
        if (!this.JSON_Template) {
            var template = localStorage.getItem('template');
            if (template) {
                this.oldRealTime = JSON.parse(template).realTime;
                this.JSON_Template = new __WEBPACK_IMPORTED_MODULE_3__builder_models_model__["c" /* App */]().deserialize(JSON.parse(template));
                this.JSON_Template.realTime = this.oldRealTime;
            }
        }
        else {
            this.oldRealTime = this.JSON_Template.realTime;
            this.JSON_Template = new __WEBPACK_IMPORTED_MODULE_3__builder_models_model__["c" /* App */]().deserialize(this.JSON_Template);
            this.JSON_Template.realTime = this.oldRealTime;
        }
        this.jsonBuilderHelper.setTemplate(this.JSON_Template);
        this._script.load('rangeSlider', 'math', 'iFrameResizer')
            .then(function (data) {
            console.log('Scripts Loaded', data);
            _this.Temp_name = _this.JSON_Template.template;
        })
            .catch(function (error) {
            //any error
        });
        if (this.JSON_Template.status == 'LIVE') {
            //UTM Code Start
            var queryURL = '';
            var utm_param = {};
            var url = window.location.href;
            if (document.referrer == '' || document.referrer == undefined) {
                queryURL = url;
            }
            else {
                queryURL = document.referrer;
            }
            if (queryURL.length) {
                //null means query param is absent, "" (present with no value), else it will return a value
                var utm_source = this.getParameterByName('utm_source', queryURL);
                var utm_medium = this.getParameterByName('utm_medium', queryURL);
                var utm_campaign = this.getParameterByName('utm_campaign', queryURL);
                var utm_term = this.getParameterByName('utm_term', queryURL);
                var utm_content = this.getParameterByName('utm_content', queryURL);
                utm_param = {
                    utm_source: ((utm_source) ? utm_source : ''),
                    utm_medium: ((utm_medium) ? utm_medium : ''),
                    utm_campaign: ((utm_campaign) ? utm_campaign : ''),
                    utm_term: ((utm_term) ? utm_term : ''),
                    utm_content: ((utm_content) ? utm_content : '')
                };
            }
            //UTM Code End
            this._analyticService.generateVisitorKey(this.jsonBuilderHelper.getJSONBuilt()._id, this.jsonBuilderHelper.getTemplateQuestionare(), utm_param)
                .subscribe(function (response) {
                _this._analyticService.setVisitorKey(response.key);
            }, function (error) {
                console.log(error);
            });
        }
    };
    Template.prototype.getParameterByName = function (name, url) {
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    Template.prototype.ngAfterViewInit = function () {
        jQuery('meta[name=description]').attr('content', this.JSON_Template.description);
        document.title = this.JSON_Template.title;
        jQuery('#favicon').attr('href', this.JSON_Template.favicon);
    };
    Template.prototype.ngOnDestroy = function () {
        window.Intercom('update', { hide_default_launcher: false });
        // this.sub.unsubscribe();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Template.prototype, "JSON_Template", void 0);
    Template = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'Temp',
            template: "\n        <div [ngSwitch]=\"Temp_name\">\n            <one-page-slider *ngSwitchCase=\"'one-page-slider'\"\n            [JSON_Template]=\"JSON_Template\"\n            class=\"main-body {{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n            [devMode]=\"devMode\"\n            >\n            </one-page-slider>\n            <sound-cloud *ngSwitchCase=\"'sound-cloud'\"\n            [JSON_Template]=\"JSON_Template\"\n            [devMode]=\"devMode\"\n            class=\"{{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n            >\n            </sound-cloud>\n            <one-page-card *ngSwitchCase=\"'one-page-card'\"\n            [JSON_Template]=\"JSON_Template\"\n            [devMode]=\"devMode\"\n            class=\"{{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n            >\n            </one-page-card>\n        </div>\n\n      ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["d" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["d" /* Script */]) === 'function' && _e) || Object])
    ], Template);
    return Template;
    var _a, _b, _c, _d, _e;
}());


/***/ },

/***/ 850:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__ = __webpack_require__(792);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OnePageCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OnePageCardComponent = (function () {
    function OnePageCardComponent(tvs, jsonBuilderHelper, _analyticService, _templateHttpService, _templateRenderer, recommendationService) {
        this.tvs = tvs;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._analyticService = _analyticService;
        this._templateHttpService = _templateHttpService;
        this._templateRenderer = _templateRenderer;
        this.recommendationService = recommendationService;
        this.selected_control = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.selected_section = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.selected_page = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.devMode = false;
        this.questions = [];
        this.staticControls = {};
        this.formulaResult = {};
        this.validated = false;
        this.buttonShowHide = false;
        this.currentQ = "slide_0";
        if (!jsonBuilderHelper.getSelectedFormula() && jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation')
            recommendationService.getRecomendedResult();
        //code
    }
    OnePageCardComponent.prototype.ngOnInit = function () {
        /* static controls */
        this.staticControls = this._templateRenderer.getStaticControls();
    };
    OnePageCardComponent.prototype.ngAfterViewInit = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
        }
        // submit lead
        jQuery('.submit-lead').click;
    };
    // loading: boolean = true
    // onLoad() {
    //     console.log('changes');
    //     this.loading = false;
    // }
    OnePageCardComponent.prototype.scrollToTopProperties = function () {
        jQuery('.settings-header').trigger('click');
    };
    OnePageCardComponent.prototype.onResultLeadFormSubmit = function (event) {
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            this.sendCTAAnalytics(event, 'Result');
            var navigate_url = this.jsonBuilderHelper.getJSONBuilt().navigate_Url;
            this.sendMail().subscribe(function (success) {
                if (event) {
                    if (navigate_url.toLowerCase().indexOf('https://') !== 0 && navigate_url.toLowerCase().indexOf('http://') !== 0) {
                        navigate_url = 'https://' + navigate_url;
                    }
                    window.location.href = navigate_url;
                }
            }, function (error) {
                if (event) {
                    if (navigate_url.toLowerCase().indexOf('https://') !== 0 && navigate_url.toLowerCase().indexOf('http://') !== 0) {
                        navigate_url = 'https://' + navigate_url;
                    }
                    window.location.href = navigate_url;
                }
            });
        }
    };
    OnePageCardComponent.prototype.onLeadFormSubmit = function (result, show, hide) {
        this.sendCTAAnalytics(result, 'Landing');
        this.validated = result;
        if (this.validated)
            this.onButtonClick(null, show, hide);
    };
    OnePageCardComponent.prototype.onButtonClick = function (event, show, hide) {
        if (this.validated && !this.devMode) {
            if (show.indexOf('slide') != -1)
                this.currentQ = show;
            //show next div
            jQuery('.' + show).removeClass('hide');
            jQuery('.' + hide).addClass('hide');
            //make validator available again
            this.validated = false;
        }
    };
    OnePageCardComponent.prototype.getVisiblePages = function () {
        return this.JSON_Template.pages.filter(function (page) { return page.visible; });
    };
    OnePageCardComponent.prototype.getVisibleSections = function (page) {
        return page.sections.filter(function (section) { return (section.visible && page.type != 'Result'); });
    };
    OnePageCardComponent.prototype.getVisibleItems = function (section) {
        return section.items.filter(function (item) { return item.visible; });
    };
    OnePageCardComponent.prototype.onSubmit = function (form, sectionId, controlId) {
        var _this = this;
        var control;
        if (controlId)
            control = form.controls[controlId];
        if (control.valid) {
            this.validated = true;
            if (sectionId && this._analyticService.getVisitorKey() != '' && this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
                this._analyticService.saveSectionResult(sectionId)
                    .subscribe(function (response) {
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else {
            control.markAsTouched();
            control.markAsDirty();
            this.validated = false;
        }
    };
    /*  ---
     when control is selected from particluar template then it pass to parent
     template component (i.e Template.ts) and then parent template component pass to home component
     */
    OnePageCardComponent.prototype.selectControl = function (control) {
        this.selected_control.emit(control);
    };
    OnePageCardComponent.prototype.selectSection = function (section) {
        this.selected_section.emit(section);
    };
    OnePageCardComponent.prototype.selectpage = function (page) {
        this.selected_page.emit(page);
    };
    OnePageCardComponent.prototype.selectModel = function (event, type) {
        this.jsonBuilderHelper.setSelectedModel(type);
        event.stopPropagation();
    };
    /** Method addded for Sending email **/
    OnePageCardComponent.prototype.sendMail = function () {
        var data = {
            calcId: this.jsonBuilderHelper.getJSONBuilt()._id,
            visitorId: this._analyticService.getVisitorKey(),
            type: 'Finish'
        };
        return this._templateHttpService.sendEmail(data);
    };
    OnePageCardComponent.prototype.sendCTAAnalytics = function (isCTA, page) {
        if (isCTA != true && isCTA != false) {
            //Ours
            ga('devteam.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + page + ' Page CTA', 'Clicked', this.jsonBuilderHelper.getJSONBuilt().url);
            //Users
            if (this.jsonBuilderHelper.getJSONBuilt().ga)
                ga('userCustom.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + page + ' Page CTA', 'Clicked', this.jsonBuilderHelper.getJSONBuilt().url);
        }
    };
    OnePageCardComponent.prototype.leadSubmit = function () {
        jQuery('.og-lead-ques').trigger('click');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], OnePageCardComponent.prototype, "selected_control", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], OnePageCardComponent.prototype, "selected_section", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], OnePageCardComponent.prototype, "selected_page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], OnePageCardComponent.prototype, "JSON_Template", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], OnePageCardComponent.prototype, "devMode", void 0);
    OnePageCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'one-page-card',
            template: __webpack_require__(875),
            styles: [
                __webpack_require__(859),
                __webpack_require__(861),
                __webpack_require__(860)
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__["a" /* TemplateValidatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__["a" /* TemplateValidatorService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__["a" /* AnalyticService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__["a" /* TemplateRendererService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__["a" /* TemplateRendererService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _f) || Object])
    ], OnePageCardComponent);
    return OnePageCardComponent;
    var _a, _b, _c, _d, _e, _f;
}());


/***/ },

/***/ 851:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__one_page_card_component__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_templateValidator_service__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controls_controls_module__ = __webpack_require__(805);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OnePageCardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OnePageCardModule = (function () {
    function OnePageCardModule() {
    }
    OnePageCardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__one_page_card_component__["a" /* OnePageCardComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__one_page_card_component__["a" /* OnePageCardComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_4__controls_controls_module__["a" /* ControlsModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_templateValidator_service__["a" /* TemplateValidatorService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], OnePageCardModule);
    return OnePageCardModule;
}());


/***/ },

/***/ 852:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__ = __webpack_require__(792);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OnePageSliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OnePageSliderComponent = (function () {
    function OnePageSliderComponent(tvs, jsonBuilderHelper, _analyticService, _templateHttpService, _templateRenderer, recommendationService) {
        this.tvs = tvs;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._analyticService = _analyticService;
        this._templateHttpService = _templateHttpService;
        this._templateRenderer = _templateRenderer;
        this.recommendationService = recommendationService;
        this.selected_control = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.selected_section = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.selected_page = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.devMode = false;
        this.staticControls = {};
        this.formulaResult = {};
        this.validated = false;
        this.buttonShowHide = false;
        if (!jsonBuilderHelper.getSelectedFormula() && jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation')
            recommendationService.getRecomendedResult();
        //code
    }
    OnePageSliderComponent.prototype.ngOnInit = function () {
        /* static controls */
        this.staticControls = this._templateRenderer.getStaticControls();
    };
    OnePageSliderComponent.prototype.ngAfterViewInit = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
        }
    };
    OnePageSliderComponent.prototype.scrollToTopProperties = function () {
        jQuery('.settings-header').trigger('click');
    };
    OnePageSliderComponent.prototype.onResultLeadFormSubmit = function (event) {
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            this.sendCTAAnalytics(event, 'Result');
            var navigate_url = this.jsonBuilderHelper.getJSONBuilt().navigate_Url;
            this.sendMail().subscribe(function (success) {
                if (event) {
                    if (navigate_url.toLowerCase().indexOf('https://') !== 0 && navigate_url.toLowerCase().indexOf('http://') !== 0) {
                        navigate_url = 'https://' + navigate_url;
                    }
                    window.location.href = navigate_url;
                }
            }, function (error) {
                if (event) {
                    if (navigate_url.toLowerCase().indexOf('https://') !== 0 && navigate_url.toLowerCase().indexOf('http://') !== 0) {
                        navigate_url = 'https://' + navigate_url;
                    }
                    window.location.href = navigate_url;
                }
            });
        }
    };
    OnePageSliderComponent.prototype.onLeadFormSubmit = function (result, show, hide) {
        this.sendCTAAnalytics(result, 'Landing');
        this.validated = result;
        if (this.validated)
            this.onButtonClick(null, show, hide);
    };
    OnePageSliderComponent.prototype.onButtonClick = function (event, show, hide) {
        if (this.validated && !this.devMode) {
            //hide button
            if (event) {
                jQuery(event.target).addClass('hide');
            }
            //show next div
            var divToShow = jQuery('.' + show);
            divToShow.removeClass('hide');
            var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
            if (iOS) {
                jQuery('html, body', parent.document).animate({
                    scrollTop: divToShow.offset().top
                }, 1000, function () {
                    if (hide) {
                        jQuery('.' + hide).addClass('hide');
                        window.scrollTo(0, divToShow.offset().top);
                    }
                });
            }
            else {
                jQuery('html, body').animate({
                    scrollTop: divToShow.offset().top
                }, 1000, function () {
                    if (hide) {
                        jQuery('.' + hide).addClass('hide');
                        jQuery(window).scrollTop(divToShow.offset().top);
                    }
                });
            }
            //make validator available again
            this.validated = false;
        }
    };
    OnePageSliderComponent.prototype.getVisiblePages = function () {
        return this.JSON_Template.pages.filter(function (page) { return page.visible; });
    };
    OnePageSliderComponent.prototype.getVisibleSections = function (page) {
        return page.sections.filter(function (section) { return (section.visible && page.type != 'Result'); });
    };
    OnePageSliderComponent.prototype.getVisibleItems = function (section) {
        return section.items.filter(function (item) { return item.visible; });
    };
    OnePageSliderComponent.prototype.onSubmit = function (form, sectionId) {
        var _this = this;
        if (form.valid) {
            this.validated = true;
            if (sectionId && this._analyticService.getVisitorKey() != '' && this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
                this._analyticService.saveSectionResult(sectionId)
                    .subscribe(function (response) {
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
        else {
            for (var i in form.controls) {
                form.controls[i].markAsTouched();
                form.controls[i].markAsDirty();
            }
            this.validated = false;
        }
    };
    /*  ---
     when control is selected from particluar template then it pass to parent
     template component (i.e Template.ts) and then parent template component pass to home component
     */
    OnePageSliderComponent.prototype.selectControl = function (control) {
        this.selected_control.emit(control);
    };
    OnePageSliderComponent.prototype.selectSection = function (section) {
        this.selected_section.emit(section);
    };
    OnePageSliderComponent.prototype.selectpage = function (page) {
        this.selected_page.emit(page);
    };
    OnePageSliderComponent.prototype.selectModel = function (event, type) {
        this.jsonBuilderHelper.setSelectedModel(type);
        event.stopPropagation();
    };
    /** Method addded for Sending email **/
    OnePageSliderComponent.prototype.sendMail = function () {
        var data = {
            calcId: this.jsonBuilderHelper.getJSONBuilt()._id,
            visitorId: this._analyticService.getVisitorKey(),
            type: 'Finish'
        };
        return this._templateHttpService.sendEmail(data);
    };
    OnePageSliderComponent.prototype.sendCTAAnalytics = function (isCTA, page) {
        if (isCTA != true && isCTA != false) {
            //Ours
            ga('devteam.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + page + ' Page CTA', 'Clicked', this.jsonBuilderHelper.getJSONBuilt().url);
            //Users
            if (this.jsonBuilderHelper.getJSONBuilt().ga)
                ga('userCustom.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + page + ' Page CTA', 'Clicked', this.jsonBuilderHelper.getJSONBuilt().url);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], OnePageSliderComponent.prototype, "selected_control", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], OnePageSliderComponent.prototype, "selected_section", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], OnePageSliderComponent.prototype, "selected_page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], OnePageSliderComponent.prototype, "JSON_Template", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], OnePageSliderComponent.prototype, "devMode", void 0);
    OnePageSliderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'one-page-slider',
            template: __webpack_require__(876),
            styles: [
                __webpack_require__(862),
                __webpack_require__(866),
                __webpack_require__(863),
                __webpack_require__(864),
                __webpack_require__(867),
                __webpack_require__(865)
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__["a" /* TemplateValidatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__["a" /* TemplateValidatorService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__["a" /* AnalyticService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__["a" /* TemplateRendererService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__["a" /* TemplateRendererService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _f) || Object])
    ], OnePageSliderComponent);
    return OnePageSliderComponent;
    var _a, _b, _c, _d, _e, _f;
}());


/***/ },

/***/ 853:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__one_page_slider_component__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_templateValidator_service__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controls_controls_module__ = __webpack_require__(805);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OnePageSliderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OnePageSliderModule = (function () {
    function OnePageSliderModule() {
    }
    OnePageSliderModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__one_page_slider_component__["a" /* OnePageSliderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__one_page_slider_component__["a" /* OnePageSliderComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_4__controls_controls_module__["a" /* ControlsModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_templateValidator_service__["a" /* TemplateValidatorService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], OnePageSliderModule);
    return OnePageSliderModule;
}());


/***/ },

/***/ 854:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__ = __webpack_require__(800);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SoundCloudComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SoundCloudComponent = (function () {
    function SoundCloudComponent(tvs, jsonBuilderHelper, _analyticService, _templateHttpService, _templateRenderer) {
        this.tvs = tvs;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._analyticService = _analyticService;
        this._templateHttpService = _templateHttpService;
        this._templateRenderer = _templateRenderer;
        this.selected_control = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.selected_section = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.selected_page = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.devMode = false;
        this.staticControls = {};
        this.counter = 0;
        this.validated = false;
        this.showResult = false;
        this.buttonShowHide = false;
    }
    SoundCloudComponent.prototype.ngOnInit = function () {
        /* static controls */
        this.staticControls = this._templateRenderer.getStaticControls();
    };
    SoundCloudComponent.prototype.mobilestickyRemove = function () {
        jQuery(".mobile-result-link").hide();
        jQuery(".page_1").removeClass("mobile-result-sticky");
        jQuery(".page_2").removeClass("mobile-result-sticky");
        jQuery(".mobile-result-linkAdd").css('display', 'block');
        jQuery('html,body').animate({ scrollTop: jQuery(".page_2").offset().top }, 800);
    };
    SoundCloudComponent.prototype.mobilestickyAdd = function () {
        jQuery(".mobile-result-linkAdd").hide();
        jQuery(".mobile-result-link").show();
        jQuery(".page_1").addClass("mobile-result-sticky");
        jQuery(".page_2").addClass("mobile-result-sticky");
        jQuery('html,body').animate({ scrollTop: jQuery(".page_1").offset().top }, 800);
    };
    SoundCloudComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 160) {
                if (self.showResult)
                    jQuery(".page_2").addClass("result-fixed");
            }
            else {
                jQuery(".page_2").removeClass("result-fixed");
            }
        });
    };
    SoundCloudComponent.prototype.scrollToTopProperties = function () {
        jQuery('.settings-header').trigger('click');
    };
    SoundCloudComponent.prototype.onResultLeadFormSubmit = function (event) {
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            this.sendCTAAnalytics(event, 'Result');
            var navigate_url = this.jsonBuilderHelper.getJSONBuilt().navigate_Url;
            this.sendMail().subscribe(function (success) {
                if (event) {
                    if (navigate_url.toLowerCase().indexOf('https://') !== 0 && navigate_url.toLowerCase().indexOf('http://') !== 0) {
                        navigate_url = 'https://' + navigate_url;
                    }
                    window.location.href = navigate_url;
                }
            }, function (error) {
                if (event) {
                    if (navigate_url.toLowerCase().indexOf('https://') !== 0 && navigate_url.toLowerCase().indexOf('http://') !== 0) {
                        navigate_url = 'https://' + navigate_url;
                    }
                    window.location.href = navigate_url;
                }
            });
        }
    };
    SoundCloudComponent.prototype.onLeadFormSubmit = function (result, show, hide) {
        this.sendCTAAnalytics(result, 'Landing');
        this.validated = result;
        if (this.validated)
            this.onButtonClick(null, show, hide);
    };
    SoundCloudComponent.prototype.onButtonClick = function (event, show, hide) {
        var _this = this;
        console.log(show);
        if (this.validated && !this.devMode) {
            //hide button
            if (event)
                jQuery(event.target).addClass('hide');
            //show next div
            var divToShow = jQuery('.' + show);
            divToShow.removeClass('hide');
            jQuery('.page-logo').removeClass('hide');
            jQuery('.page_2').removeClass('hide');
            jQuery('html, body').animate({
                scrollTop: divToShow.offset().top
            }, 1000, function () {
                if (hide) {
                    jQuery('.' + hide).addClass('hide');
                    jQuery(window).scrollTop(divToShow.offset().top);
                    _this.showResult = true;
                }
            });
            //make validator available again
            this.validated = false;
        }
    };
    SoundCloudComponent.prototype.getLandingPage = function () {
        return this.JSON_Template.pages.filter(function (page) { return page.visible && page.type == 'Landing'; });
    };
    SoundCloudComponent.prototype.getVisiblePages = function () {
        return this.JSON_Template.pages.filter(function (page) { return page.visible && page.type != 'Landing'; });
    };
    SoundCloudComponent.prototype.getVisibleItems = function (section) {
        return section.items.filter(function (item) { return item.visible; });
    };
    SoundCloudComponent.prototype.getVisibleSections = function (page) {
        return page.sections.filter(function (section) { return section.visible; });
    };
    SoundCloudComponent.prototype.onSubmit = function (form) {
        if (form.valid)
            this.validated = true;
    };
    /*  ---
     when control is selected from particluar template then it pass to parent
     template component (i.e Template.ts) and then parent template component pass to home component
     */
    SoundCloudComponent.prototype.selectControl = function (control) {
        this.selected_control.emit(control);
    };
    SoundCloudComponent.prototype.selectSection = function (section) {
        this.selected_section.emit(section);
    };
    SoundCloudComponent.prototype.selectpage = function (page) {
        this.selected_page.emit(page);
    };
    SoundCloudComponent.prototype.selectModel = function (event, type) {
        this.jsonBuilderHelper.setSelectedModel(type);
        event.stopPropagation();
    };
    SoundCloudComponent.prototype.sendMail = function () {
        var data = {
            calcId: this.jsonBuilderHelper.getJSONBuilt()._id,
            visitorId: this._analyticService.getVisitorKey(),
            type: 'Finish'
        };
        return this._templateHttpService.sendEmail(data);
    };
    SoundCloudComponent.prototype.sendCTAAnalytics = function (isCTA, page) {
        if (isCTA != true && isCTA != false) {
            //Ours
            ga('devteam.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + page + ' Page CTA', 'Clicked', this.jsonBuilderHelper.getJSONBuilt().url);
            //Users
            if (this.jsonBuilderHelper.getJSONBuilt().ga)
                ga('userCustom.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + page + ' Page CTA', 'Clicked', this.jsonBuilderHelper.getJSONBuilt().url);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], SoundCloudComponent.prototype, "selected_control", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], SoundCloudComponent.prototype, "selected_section", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], SoundCloudComponent.prototype, "selected_page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], SoundCloudComponent.prototype, "JSON_Template", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], SoundCloudComponent.prototype, "devMode", void 0);
    SoundCloudComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'sound-cloud',
            template: __webpack_require__(877),
            styles: [
                __webpack_require__(868),
                __webpack_require__(872),
                __webpack_require__(869),
                __webpack_require__(870),
                __webpack_require__(871),
                __webpack_require__(873),
                __webpack_require__(874)
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__["a" /* TemplateValidatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__["a" /* TemplateValidatorService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__["a" /* AnalyticService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__["a" /* TemplateRendererService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__["a" /* TemplateRendererService */]) === 'function' && _e) || Object])
    ], SoundCloudComponent);
    return SoundCloudComponent;
    var _a, _b, _c, _d, _e;
}());


/***/ },

/***/ 855:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_controls_module__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soundcloud_component__ = __webpack_require__(854);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SoundCloudModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SoundCloudModule = (function () {
    function SoundCloudModule() {
    }
    SoundCloudModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__soundcloud_component__["a" /* SoundCloudComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__soundcloud_component__["a" /* SoundCloudComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__controls_controls_module__["a" /* ControlsModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__["a" /* TemplateValidatorService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SoundCloudModule);
    return SoundCloudModule;
}());


/***/ },

/***/ 856:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_templateRenderer_service__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__template_component__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__templates__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__templateDev_component__ = __webpack_require__(857);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TemplateModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TemplateModule = (function () {
    function TemplateModule() {
    }
    TemplateModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__template_component__["a" /* Template */], __WEBPACK_IMPORTED_MODULE_8__templateDev_component__["a" /* TemplateDev */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_7__templates__["a" /* TEMPLATEMODULES */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__template_component__["a" /* Template */], __WEBPACK_IMPORTED_MODULE_8__templateDev_component__["a" /* TemplateDev */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__builder_services_JSONBuilder_service__["a" /* JSONBuilder */], __WEBPACK_IMPORTED_MODULE_4__services_analytic_service__["a" /* AnalyticService */], __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */], __WEBPACK_IMPORTED_MODULE_2__services_templateRenderer_service__["a" /* TemplateRendererService */]],
        }), 
        __metadata('design:paramtypes', [])
    ], TemplateModule);
    return TemplateModule;
}());


/***/ },

/***/ 857:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_services_analytic_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_templateRenderer_service__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_recommendation_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TemplateDev; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TemplateDev = (function () {
    function TemplateDev(jsonBuilderHelper, _script) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._script = _script;
    }
    TemplateDev.prototype.ngOnInit = function () {
        var _this = this;
        this.JSON_Template = this.jsonBuilderHelper.getJSONBuilt();
        this._script.load('rangeSlider')
            .then(function (data) {
            console.log('Scripts Loaded', data);
            _this.Temp_name = _this.JSON_Template.template;
        })
            .catch(function (error) {
            //any error
        });
    };
    TemplateDev = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
            selector: 'Temp-dev',
            template: "\n        <div [ngSwitch]=\"Temp_name\" [class]=\"Temp_name\">\n            <one-page-slider *ngSwitchCase=\"'one-page-slider'\"\n               (default_Template)=\"bind_Template_Json($event)\" \n               (selected_control)=\"jsonBuilderHelper.setSelectedControl($event)\"\n               (selected_section)=\"jsonBuilderHelper.setSelectedSection($event)\"\n               (selected_page)=\"jsonBuilderHelper.setSelectedPage($event)\"\n               [JSON_Template]=\"JSON_Template\"\n               [devMode]=\"true\"\n               class=\"{{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n             >\n            </one-page-slider>\n            <sound-cloud *ngSwitchCase=\"'sound-cloud'\"\n                class=\"{{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n               (default_Template)=\"bind_Template_Json($event)\" \n               (selected_control)=\"jsonBuilderHelper.setSelectedControl($event)\"\n               (selected_section)=\"jsonBuilderHelper.setSelectedSection($event)\"\n               (selected_page)=\"jsonBuilderHelper.setSelectedPage($event)\"\n               [JSON_Template]=\"JSON_Template\"\n               [devMode]=\"true\"\n            >\n            </sound-cloud>\n            <one-page-card *ngSwitchCase=\"'one-page-card'\"\n                class=\"{{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n               (default_Template)=\"bind_Template_Json($event)\" \n               (selected_control)=\"jsonBuilderHelper.setSelectedControl($event)\"\n               (selected_section)=\"jsonBuilderHelper.setSelectedSection($event)\"\n               (selected_page)=\"jsonBuilderHelper.setSelectedPage($event)\"\n               [JSON_Template]=\"JSON_Template\"\n               [devMode]=\"true\"\n            >\n            </one-page-card>\n        </div>\n      ",
            providers: [__WEBPACK_IMPORTED_MODULE_2__templates_services_analytic_service__["a" /* AnalyticService */], __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */], __WEBPACK_IMPORTED_MODULE_4__services_templateRenderer_service__["a" /* TemplateRendererService */], __WEBPACK_IMPORTED_MODULE_5__services_recommendation_service__["a" /* RecommendationService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_index__["d" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_services_index__["d" /* Script */]) === 'function' && _b) || Object])
    ], TemplateDev);
    return TemplateDev;
    var _a, _b;
}());


/***/ },

/***/ 858:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_page_slider_one_page_slider_module__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sound_cloud_soundcloud_module__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__one_page_card_one_page_card_module__ = __webpack_require__(851);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TEMPLATEMODULES; });



var TEMPLATEMODULES = [
    __WEBPACK_IMPORTED_MODULE_0__one_page_slider_one_page_slider_module__["a" /* OnePageSliderModule */],
    __WEBPACK_IMPORTED_MODULE_1__sound_cloud_soundcloud_module__["a" /* SoundCloudModule */],
    __WEBPACK_IMPORTED_MODULE_2__one_page_card_one_page_card_module__["a" /* OnePageCardModule */]
];


/***/ },

/***/ 859:
/***/ function(module, exports) {

module.exports = "/*!\r\n *  Font Awesome 4.6.3 by @davegandy - http://fontawesome.io - @fontawesome\r\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\r\n */\r\n/* FONT PATH\r\n * -------------------------- */\r\n@font-face {\r\n  font-family: 'FontAwesome';\r\n  src: url('../fonts/fontawesome-webfont.eot?v=4.6.3');\r\n  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.6.3') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff2?v=4.6.3') format('woff2'), url('../fonts/fontawesome-webfont.woff?v=4.6.3') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.6.3') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular') format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.fa {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n/* makes the font 33% larger relative to the icon container */\r\n.fa-lg {\r\n  font-size: 1.33333333em;\r\n  line-height: 0.75em;\r\n  vertical-align: -15%;\r\n}\r\n.fa-2x {\r\n  font-size: 2em;\r\n}\r\n.fa-3x {\r\n  font-size: 3em;\r\n}\r\n.fa-4x {\r\n  font-size: 4em;\r\n}\r\n.fa-5x {\r\n  font-size: 5em;\r\n}\r\n.fa-fw {\r\n  width: 1.28571429em;\r\n  text-align: center;\r\n}\r\n.fa-ul {\r\n  padding-left: 0;\r\n  margin-left: 2.14285714em;\r\n  list-style-type: none;\r\n}\r\n.fa-ul > li {\r\n  position: relative;\r\n}\r\n.fa-li {\r\n  position: absolute;\r\n  left: -2.14285714em;\r\n  width: 2.14285714em;\r\n  top: 0.14285714em;\r\n  text-align: center;\r\n}\r\n.fa-li.fa-lg {\r\n  left: -1.85714286em;\r\n}\r\n.fa-border {\r\n  padding: .2em .25em .15em;\r\n  border: solid 0.08em #eeeeee;\r\n  border-radius: .1em;\r\n}\r\n.fa-pull-left {\r\n  float: left;\r\n}\r\n.fa-pull-right {\r\n  float: right;\r\n}\r\n.fa.fa-pull-left {\r\n  margin-right: .3em;\r\n}\r\n.fa.fa-pull-right {\r\n  margin-left: .3em;\r\n}\r\n/* Deprecated as of 4.4.0 */\r\n.pull-right {\r\n  float: right;\r\n}\r\n.pull-left {\r\n  float: left;\r\n}\r\n.fa.pull-left {\r\n  margin-right: .3em;\r\n}\r\n.fa.pull-right {\r\n  margin-left: .3em;\r\n}\r\n.fa-spin {\r\n  -webkit-animation: fa-spin 2s infinite linear;\r\n  animation: fa-spin 2s infinite linear;\r\n}\r\n.fa-pulse {\r\n  -webkit-animation: fa-spin 1s infinite steps(8);\r\n  animation: fa-spin 1s infinite steps(8);\r\n}\r\n@-webkit-keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n@keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n.fa-rotate-90 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\r\n  -webkit-transform: rotate(90deg);\r\n  -ms-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n.fa-rotate-180 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\r\n  -webkit-transform: rotate(180deg);\r\n  -ms-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n.fa-rotate-270 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\r\n  -webkit-transform: rotate(270deg);\r\n  -ms-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n}\r\n.fa-flip-horizontal {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\r\n  -webkit-transform: scale(-1, 1);\r\n  -ms-transform: scale(-1, 1);\r\n  transform: scale(-1, 1);\r\n}\r\n.fa-flip-vertical {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\r\n  -webkit-transform: scale(1, -1);\r\n  -ms-transform: scale(1, -1);\r\n  transform: scale(1, -1);\r\n}\r\n:root .fa-rotate-90,\r\n:root .fa-rotate-180,\r\n:root .fa-rotate-270,\r\n:root .fa-flip-horizontal,\r\n:root .fa-flip-vertical {\r\n  filter: none;\r\n}\r\n.fa-stack {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 2em;\r\n  height: 2em;\r\n  line-height: 2em;\r\n  vertical-align: middle;\r\n}\r\n.fa-stack-1x,\r\n.fa-stack-2x {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.fa-stack-1x {\r\n  line-height: inherit;\r\n}\r\n.fa-stack-2x {\r\n  font-size: 2em;\r\n}\r\n.fa-inverse {\r\n  color: #ffffff;\r\n}\r\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\r\n   readers do not read off random characters that represent icons */\r\n.fa-glass:before {\r\n  content: \"\\f000\";\r\n}\r\n.fa-music:before {\r\n  content: \"\\f001\";\r\n}\r\n.fa-search:before {\r\n  content: \"\\f002\";\r\n}\r\n.fa-envelope-o:before {\r\n  content: \"\\f003\";\r\n}\r\n.fa-heart:before {\r\n  content: \"\\f004\";\r\n}\r\n.fa-star:before {\r\n  content: \"\\f005\";\r\n}\r\n.fa-star-o:before {\r\n  content: \"\\f006\";\r\n}\r\n.fa-user:before {\r\n  content: \"\\f007\";\r\n}\r\n.fa-film:before {\r\n  content: \"\\f008\";\r\n}\r\n.fa-th-large:before {\r\n  content: \"\\f009\";\r\n}\r\n.fa-th:before {\r\n  content: \"\\f00a\";\r\n}\r\n.fa-th-list:before {\r\n  content: \"\\f00b\";\r\n}\r\n.fa-check:before {\r\n  content: \"\\f00c\";\r\n}\r\n.fa-remove:before,\r\n.fa-close:before,\r\n.fa-times:before {\r\n  content: \"\\f00d\";\r\n}\r\n.fa-search-plus:before {\r\n  content: \"\\f00e\";\r\n}\r\n.fa-search-minus:before {\r\n  content: \"\\f010\";\r\n}\r\n.fa-power-off:before {\r\n  content: \"\\f011\";\r\n}\r\n.fa-signal:before {\r\n  content: \"\\f012\";\r\n}\r\n.fa-gear:before,\r\n.fa-cog:before {\r\n  content: \"\\f013\";\r\n}\r\n.fa-trash-o:before {\r\n  content: \"\\f014\";\r\n}\r\n.fa-home:before {\r\n  content: \"\\f015\";\r\n}\r\n.fa-file-o:before {\r\n  content: \"\\f016\";\r\n}\r\n.fa-clock-o:before {\r\n  content: \"\\f017\";\r\n}\r\n.fa-road:before {\r\n  content: \"\\f018\";\r\n}\r\n.fa-download:before {\r\n  content: \"\\f019\";\r\n}\r\n.fa-arrow-circle-o-down:before {\r\n  content: \"\\f01a\";\r\n}\r\n.fa-arrow-circle-o-up:before {\r\n  content: \"\\f01b\";\r\n}\r\n.fa-inbox:before {\r\n  content: \"\\f01c\";\r\n}\r\n.fa-play-circle-o:before {\r\n  content: \"\\f01d\";\r\n}\r\n.fa-rotate-right:before,\r\n.fa-repeat:before {\r\n  content: \"\\f01e\";\r\n}\r\n.fa-refresh:before {\r\n  content: \"\\f021\";\r\n}\r\n.fa-list-alt:before {\r\n  content: \"\\f022\";\r\n}\r\n.fa-lock:before {\r\n  content: \"\\f023\";\r\n}\r\n.fa-flag:before {\r\n  content: \"\\f024\";\r\n}\r\n.fa-headphones:before {\r\n  content: \"\\f025\";\r\n}\r\n.fa-volume-off:before {\r\n  content: \"\\f026\";\r\n}\r\n.fa-volume-down:before {\r\n  content: \"\\f027\";\r\n}\r\n.fa-volume-up:before {\r\n  content: \"\\f028\";\r\n}\r\n.fa-qrcode:before {\r\n  content: \"\\f029\";\r\n}\r\n.fa-barcode:before {\r\n  content: \"\\f02a\";\r\n}\r\n.fa-tag:before {\r\n  content: \"\\f02b\";\r\n}\r\n.fa-tags:before {\r\n  content: \"\\f02c\";\r\n}\r\n.fa-book:before {\r\n  content: \"\\f02d\";\r\n}\r\n.fa-bookmark:before {\r\n  content: \"\\f02e\";\r\n}\r\n.fa-print:before {\r\n  content: \"\\f02f\";\r\n}\r\n.fa-camera:before {\r\n  content: \"\\f030\";\r\n}\r\n.fa-font:before {\r\n  content: \"\\f031\";\r\n}\r\n.fa-bold:before {\r\n  content: \"\\f032\";\r\n}\r\n.fa-italic:before {\r\n  content: \"\\f033\";\r\n}\r\n.fa-text-height:before {\r\n  content: \"\\f034\";\r\n}\r\n.fa-text-width:before {\r\n  content: \"\\f035\";\r\n}\r\n.fa-align-left:before {\r\n  content: \"\\f036\";\r\n}\r\n.fa-align-center:before {\r\n  content: \"\\f037\";\r\n}\r\n.fa-align-right:before {\r\n  content: \"\\f038\";\r\n}\r\n.fa-align-justify:before {\r\n  content: \"\\f039\";\r\n}\r\n.fa-list:before {\r\n  content: \"\\f03a\";\r\n}\r\n.fa-dedent:before,\r\n.fa-outdent:before {\r\n  content: \"\\f03b\";\r\n}\r\n.fa-indent:before {\r\n  content: \"\\f03c\";\r\n}\r\n.fa-video-camera:before {\r\n  content: \"\\f03d\";\r\n}\r\n.fa-photo:before,\r\n.fa-image:before,\r\n.fa-picture-o:before {\r\n  content: \"\\f03e\";\r\n}\r\n.fa-pencil:before {\r\n  content: \"\\f040\";\r\n}\r\n.fa-map-marker:before {\r\n  content: \"\\f041\";\r\n}\r\n.fa-adjust:before {\r\n  content: \"\\f042\";\r\n}\r\n.fa-tint:before {\r\n  content: \"\\f043\";\r\n}\r\n.fa-edit:before,\r\n.fa-pencil-square-o:before {\r\n  content: \"\\f044\";\r\n}\r\n.fa-share-square-o:before {\r\n  content: \"\\f045\";\r\n}\r\n.fa-check-square-o:before {\r\n  content: \"\\f046\";\r\n}\r\n.fa-arrows:before {\r\n  content: \"\\f047\";\r\n}\r\n.fa-step-backward:before {\r\n  content: \"\\f048\";\r\n}\r\n.fa-fast-backward:before {\r\n  content: \"\\f049\";\r\n}\r\n.fa-backward:before {\r\n  content: \"\\f04a\";\r\n}\r\n.fa-play:before {\r\n  content: \"\\f04b\";\r\n}\r\n.fa-pause:before {\r\n  content: \"\\f04c\";\r\n}\r\n.fa-stop:before {\r\n  content: \"\\f04d\";\r\n}\r\n.fa-forward:before {\r\n  content: \"\\f04e\";\r\n}\r\n.fa-fast-forward:before {\r\n  content: \"\\f050\";\r\n}\r\n.fa-step-forward:before {\r\n  content: \"\\f051\";\r\n}\r\n.fa-eject:before {\r\n  content: \"\\f052\";\r\n}\r\n.fa-chevron-left:before {\r\n  content: \"\\f053\";\r\n}\r\n.fa-chevron-right:before {\r\n  content: \"\\f054\";\r\n}\r\n.fa-plus-circle:before {\r\n  content: \"\\f055\";\r\n}\r\n.fa-minus-circle:before {\r\n  content: \"\\f056\";\r\n}\r\n.fa-times-circle:before {\r\n  content: \"\\f057\";\r\n}\r\n.fa-check-circle:before {\r\n  content: \"\\f058\";\r\n}\r\n.fa-question-circle:before {\r\n  content: \"\\f059\";\r\n}\r\n.fa-info-circle:before {\r\n  content: \"\\f05a\";\r\n}\r\n.fa-crosshairs:before {\r\n  content: \"\\f05b\";\r\n}\r\n.fa-times-circle-o:before {\r\n  content: \"\\f05c\";\r\n}\r\n.fa-check-circle-o:before {\r\n  content: \"\\f05d\";\r\n}\r\n.fa-ban:before {\r\n  content: \"\\f05e\";\r\n}\r\n.fa-arrow-left:before {\r\n  content: \"\\f060\";\r\n}\r\n.fa-arrow-right:before {\r\n  content: \"\\f061\";\r\n}\r\n.fa-arrow-up:before {\r\n  content: \"\\f062\";\r\n}\r\n.fa-arrow-down:before {\r\n  content: \"\\f063\";\r\n}\r\n.fa-mail-forward:before,\r\n.fa-share:before {\r\n  content: \"\\f064\";\r\n}\r\n.fa-expand:before {\r\n  content: \"\\f065\";\r\n}\r\n.fa-compress:before {\r\n  content: \"\\f066\";\r\n}\r\n.fa-plus:before {\r\n  content: \"\\f067\";\r\n}\r\n.fa-minus:before {\r\n  content: \"\\f068\";\r\n}\r\n.fa-asterisk:before {\r\n  content: \"\\f069\";\r\n}\r\n.fa-exclamation-circle:before {\r\n  content: \"\\f06a\";\r\n}\r\n.fa-gift:before {\r\n  content: \"\\f06b\";\r\n}\r\n.fa-leaf:before {\r\n  content: \"\\f06c\";\r\n}\r\n.fa-fire:before {\r\n  content: \"\\f06d\";\r\n}\r\n.fa-eye:before {\r\n  content: \"\\f06e\";\r\n}\r\n.fa-eye-slash:before {\r\n  content: \"\\f070\";\r\n}\r\n.fa-warning:before,\r\n.fa-exclamation-triangle:before {\r\n  content: \"\\f071\";\r\n}\r\n.fa-plane:before {\r\n  content: \"\\f072\";\r\n}\r\n.fa-calendar:before {\r\n  content: \"\\f073\";\r\n}\r\n.fa-random:before {\r\n  content: \"\\f074\";\r\n}\r\n.fa-comment:before {\r\n  content: \"\\f075\";\r\n}\r\n.fa-magnet:before {\r\n  content: \"\\f076\";\r\n}\r\n.fa-chevron-up:before {\r\n  content: \"\\f077\";\r\n}\r\n.fa-chevron-down:before {\r\n  content: \"\\f078\";\r\n}\r\n.fa-retweet:before {\r\n  content: \"\\f079\";\r\n}\r\n.fa-shopping-cart:before {\r\n  content: \"\\f07a\";\r\n}\r\n.fa-folder:before {\r\n  content: \"\\f07b\";\r\n}\r\n.fa-folder-open:before {\r\n  content: \"\\f07c\";\r\n}\r\n.fa-arrows-v:before {\r\n  content: \"\\f07d\";\r\n}\r\n.fa-arrows-h:before {\r\n  content: \"\\f07e\";\r\n}\r\n.fa-bar-chart-o:before,\r\n.fa-bar-chart:before {\r\n  content: \"\\f080\";\r\n}\r\n.fa-twitter-square:before {\r\n  content: \"\\f081\";\r\n}\r\n.fa-facebook-square:before {\r\n  content: \"\\f082\";\r\n}\r\n.fa-camera-retro:before {\r\n  content: \"\\f083\";\r\n}\r\n.fa-key:before {\r\n  content: \"\\f084\";\r\n}\r\n.fa-gears:before,\r\n.fa-cogs:before {\r\n  content: \"\\f085\";\r\n}\r\n.fa-comments:before {\r\n  content: \"\\f086\";\r\n}\r\n.fa-thumbs-o-up:before {\r\n  content: \"\\f087\";\r\n}\r\n.fa-thumbs-o-down:before {\r\n  content: \"\\f088\";\r\n}\r\n.fa-star-half:before {\r\n  content: \"\\f089\";\r\n}\r\n.fa-heart-o:before {\r\n  content: \"\\f08a\";\r\n}\r\n.fa-sign-out:before {\r\n  content: \"\\f08b\";\r\n}\r\n.fa-linkedin-square:before {\r\n  content: \"\\f08c\";\r\n}\r\n.fa-thumb-tack:before {\r\n  content: \"\\f08d\";\r\n}\r\n.fa-external-link:before {\r\n  content: \"\\f08e\";\r\n}\r\n.fa-sign-in:before {\r\n  content: \"\\f090\";\r\n}\r\n.fa-trophy:before {\r\n  content: \"\\f091\";\r\n}\r\n.fa-github-square:before {\r\n  content: \"\\f092\";\r\n}\r\n.fa-upload:before {\r\n  content: \"\\f093\";\r\n}\r\n.fa-lemon-o:before {\r\n  content: \"\\f094\";\r\n}\r\n.fa-phone:before {\r\n  content: \"\\f095\";\r\n}\r\n.fa-square-o:before {\r\n  content: \"\\f096\";\r\n}\r\n.fa-bookmark-o:before {\r\n  content: \"\\f097\";\r\n}\r\n.fa-phone-square:before {\r\n  content: \"\\f098\";\r\n}\r\n.fa-twitter:before {\r\n  content: \"\\f099\";\r\n}\r\n.fa-facebook-f:before,\r\n.fa-facebook:before {\r\n  content: \"\\f09a\";\r\n}\r\n.fa-github:before {\r\n  content: \"\\f09b\";\r\n}\r\n.fa-unlock:before {\r\n  content: \"\\f09c\";\r\n}\r\n.fa-credit-card:before {\r\n  content: \"\\f09d\";\r\n}\r\n.fa-feed:before,\r\n.fa-rss:before {\r\n  content: \"\\f09e\";\r\n}\r\n.fa-hdd-o:before {\r\n  content: \"\\f0a0\";\r\n}\r\n.fa-bullhorn:before {\r\n  content: \"\\f0a1\";\r\n}\r\n.fa-bell:before {\r\n  content: \"\\f0f3\";\r\n}\r\n.fa-certificate:before {\r\n  content: \"\\f0a3\";\r\n}\r\n.fa-hand-o-right:before {\r\n  content: \"\\f0a4\";\r\n}\r\n.fa-hand-o-left:before {\r\n  content: \"\\f0a5\";\r\n}\r\n.fa-hand-o-up:before {\r\n  content: \"\\f0a6\";\r\n}\r\n.fa-hand-o-down:before {\r\n  content: \"\\f0a7\";\r\n}\r\n.fa-arrow-circle-left:before {\r\n  content: \"\\f0a8\";\r\n}\r\n.fa-arrow-circle-right:before {\r\n  content: \"\\f0a9\";\r\n}\r\n.fa-arrow-circle-up:before {\r\n  content: \"\\f0aa\";\r\n}\r\n.fa-arrow-circle-down:before {\r\n  content: \"\\f0ab\";\r\n}\r\n.fa-globe:before {\r\n  content: \"\\f0ac\";\r\n}\r\n.fa-wrench:before {\r\n  content: \"\\f0ad\";\r\n}\r\n.fa-tasks:before {\r\n  content: \"\\f0ae\";\r\n}\r\n.fa-filter:before {\r\n  content: \"\\f0b0\";\r\n}\r\n.fa-briefcase:before {\r\n  content: \"\\f0b1\";\r\n}\r\n.fa-arrows-alt:before {\r\n  content: \"\\f0b2\";\r\n}\r\n.fa-group:before,\r\n.fa-users:before {\r\n  content: \"\\f0c0\";\r\n}\r\n.fa-chain:before,\r\n.fa-link:before {\r\n  content: \"\\f0c1\";\r\n}\r\n.fa-cloud:before {\r\n  content: \"\\f0c2\";\r\n}\r\n.fa-flask:before {\r\n  content: \"\\f0c3\";\r\n}\r\n.fa-cut:before,\r\n.fa-scissors:before {\r\n  content: \"\\f0c4\";\r\n}\r\n.fa-copy:before,\r\n.fa-files-o:before {\r\n  content: \"\\f0c5\";\r\n}\r\n.fa-paperclip:before {\r\n  content: \"\\f0c6\";\r\n}\r\n.fa-save:before,\r\n.fa-floppy-o:before {\r\n  content: \"\\f0c7\";\r\n}\r\n.fa-square:before {\r\n  content: \"\\f0c8\";\r\n}\r\n.fa-navicon:before,\r\n.fa-reorder:before,\r\n.fa-bars:before {\r\n  content: \"\\f0c9\";\r\n}\r\n.fa-list-ul:before {\r\n  content: \"\\f0ca\";\r\n}\r\n.fa-list-ol:before {\r\n  content: \"\\f0cb\";\r\n}\r\n.fa-strikethrough:before {\r\n  content: \"\\f0cc\";\r\n}\r\n.fa-underline:before {\r\n  content: \"\\f0cd\";\r\n}\r\n.fa-table:before {\r\n  content: \"\\f0ce\";\r\n}\r\n.fa-magic:before {\r\n  content: \"\\f0d0\";\r\n}\r\n.fa-truck:before {\r\n  content: \"\\f0d1\";\r\n}\r\n.fa-pinterest:before {\r\n  content: \"\\f0d2\";\r\n}\r\n.fa-pinterest-square:before {\r\n  content: \"\\f0d3\";\r\n}\r\n.fa-google-plus-square:before {\r\n  content: \"\\f0d4\";\r\n}\r\n.fa-google-plus:before {\r\n  content: \"\\f0d5\";\r\n}\r\n.fa-money:before {\r\n  content: \"\\f0d6\";\r\n}\r\n.fa-caret-down:before {\r\n  content: \"\\f0d7\";\r\n}\r\n.fa-caret-up:before {\r\n  content: \"\\f0d8\";\r\n}\r\n.fa-caret-left:before {\r\n  content: \"\\f0d9\";\r\n}\r\n.fa-caret-right:before {\r\n  content: \"\\f0da\";\r\n}\r\n.fa-columns:before {\r\n  content: \"\\f0db\";\r\n}\r\n.fa-unsorted:before,\r\n.fa-sort:before {\r\n  content: \"\\f0dc\";\r\n}\r\n.fa-sort-down:before,\r\n.fa-sort-desc:before {\r\n  content: \"\\f0dd\";\r\n}\r\n.fa-sort-up:before,\r\n.fa-sort-asc:before {\r\n  content: \"\\f0de\";\r\n}\r\n.fa-envelope:before {\r\n  content: \"\\f0e0\";\r\n}\r\n.fa-linkedin:before {\r\n  content: \"\\f0e1\";\r\n}\r\n.fa-rotate-left:before,\r\n.fa-undo:before {\r\n  content: \"\\f0e2\";\r\n}\r\n.fa-legal:before,\r\n.fa-gavel:before {\r\n  content: \"\\f0e3\";\r\n}\r\n.fa-dashboard:before,\r\n.fa-tachometer:before {\r\n  content: \"\\f0e4\";\r\n}\r\n.fa-comment-o:before {\r\n  content: \"\\f0e5\";\r\n}\r\n.fa-comments-o:before {\r\n  content: \"\\f0e6\";\r\n}\r\n.fa-flash:before,\r\n.fa-bolt:before {\r\n  content: \"\\f0e7\";\r\n}\r\n.fa-sitemap:before {\r\n  content: \"\\f0e8\";\r\n}\r\n.fa-umbrella:before {\r\n  content: \"\\f0e9\";\r\n}\r\n.fa-paste:before,\r\n.fa-clipboard:before {\r\n  content: \"\\f0ea\";\r\n}\r\n.fa-lightbulb-o:before {\r\n  content: \"\\f0eb\";\r\n}\r\n.fa-exchange:before {\r\n  content: \"\\f0ec\";\r\n}\r\n.fa-cloud-download:before {\r\n  content: \"\\f0ed\";\r\n}\r\n.fa-cloud-upload:before {\r\n  content: \"\\f0ee\";\r\n}\r\n.fa-user-md:before {\r\n  content: \"\\f0f0\";\r\n}\r\n.fa-stethoscope:before {\r\n  content: \"\\f0f1\";\r\n}\r\n.fa-suitcase:before {\r\n  content: \"\\f0f2\";\r\n}\r\n.fa-bell-o:before {\r\n  content: \"\\f0a2\";\r\n}\r\n.fa-coffee:before {\r\n  content: \"\\f0f4\";\r\n}\r\n.fa-cutlery:before {\r\n  content: \"\\f0f5\";\r\n}\r\n.fa-file-text-o:before {\r\n  content: \"\\f0f6\";\r\n}\r\n.fa-building-o:before {\r\n  content: \"\\f0f7\";\r\n}\r\n.fa-hospital-o:before {\r\n  content: \"\\f0f8\";\r\n}\r\n.fa-ambulance:before {\r\n  content: \"\\f0f9\";\r\n}\r\n.fa-medkit:before {\r\n  content: \"\\f0fa\";\r\n}\r\n.fa-fighter-jet:before {\r\n  content: \"\\f0fb\";\r\n}\r\n.fa-beer:before {\r\n  content: \"\\f0fc\";\r\n}\r\n.fa-h-square:before {\r\n  content: \"\\f0fd\";\r\n}\r\n.fa-plus-square:before {\r\n  content: \"\\f0fe\";\r\n}\r\n.fa-angle-double-left:before {\r\n  content: \"\\f100\";\r\n}\r\n.fa-angle-double-right:before {\r\n  content: \"\\f101\";\r\n}\r\n.fa-angle-double-up:before {\r\n  content: \"\\f102\";\r\n}\r\n.fa-angle-double-down:before {\r\n  content: \"\\f103\";\r\n}\r\n.fa-angle-left:before {\r\n  content: \"\\f104\";\r\n}\r\n.fa-angle-right:before {\r\n  content: \"\\f105\";\r\n}\r\n.fa-angle-up:before {\r\n  content: \"\\f106\";\r\n}\r\n.fa-angle-down:before {\r\n  content: \"\\f107\";\r\n}\r\n.fa-desktop:before {\r\n  content: \"\\f108\";\r\n}\r\n.fa-laptop:before {\r\n  content: \"\\f109\";\r\n}\r\n.fa-tablet:before {\r\n  content: \"\\f10a\";\r\n}\r\n.fa-mobile-phone:before,\r\n.fa-mobile:before {\r\n  content: \"\\f10b\";\r\n}\r\n.fa-circle-o:before {\r\n  content: \"\\f10c\";\r\n}\r\n.fa-quote-left:before {\r\n  content: \"\\f10d\";\r\n}\r\n.fa-quote-right:before {\r\n  content: \"\\f10e\";\r\n}\r\n.fa-spinner:before {\r\n  content: \"\\f110\";\r\n}\r\n.fa-circle:before {\r\n  content: \"\\f111\";\r\n}\r\n.fa-mail-reply:before,\r\n.fa-reply:before {\r\n  content: \"\\f112\";\r\n}\r\n.fa-github-alt:before {\r\n  content: \"\\f113\";\r\n}\r\n.fa-folder-o:before {\r\n  content: \"\\f114\";\r\n}\r\n.fa-folder-open-o:before {\r\n  content: \"\\f115\";\r\n}\r\n.fa-smile-o:before {\r\n  content: \"\\f118\";\r\n}\r\n.fa-frown-o:before {\r\n  content: \"\\f119\";\r\n}\r\n.fa-meh-o:before {\r\n  content: \"\\f11a\";\r\n}\r\n.fa-gamepad:before {\r\n  content: \"\\f11b\";\r\n}\r\n.fa-keyboard-o:before {\r\n  content: \"\\f11c\";\r\n}\r\n.fa-flag-o:before {\r\n  content: \"\\f11d\";\r\n}\r\n.fa-flag-checkered:before {\r\n  content: \"\\f11e\";\r\n}\r\n.fa-terminal:before {\r\n  content: \"\\f120\";\r\n}\r\n.fa-code:before {\r\n  content: \"\\f121\";\r\n}\r\n.fa-mail-reply-all:before,\r\n.fa-reply-all:before {\r\n  content: \"\\f122\";\r\n}\r\n.fa-star-half-empty:before,\r\n.fa-star-half-full:before,\r\n.fa-star-half-o:before {\r\n  content: \"\\f123\";\r\n}\r\n.fa-location-arrow:before {\r\n  content: \"\\f124\";\r\n}\r\n.fa-crop:before {\r\n  content: \"\\f125\";\r\n}\r\n.fa-code-fork:before {\r\n  content: \"\\f126\";\r\n}\r\n.fa-unlink:before,\r\n.fa-chain-broken:before {\r\n  content: \"\\f127\";\r\n}\r\n.fa-question:before {\r\n  content: \"\\f128\";\r\n}\r\n.fa-info:before {\r\n  content: \"\\f129\";\r\n}\r\n.fa-exclamation:before {\r\n  content: \"\\f12a\";\r\n}\r\n.fa-superscript:before {\r\n  content: \"\\f12b\";\r\n}\r\n.fa-subscript:before {\r\n  content: \"\\f12c\";\r\n}\r\n.fa-eraser:before {\r\n  content: \"\\f12d\";\r\n}\r\n.fa-puzzle-piece:before {\r\n  content: \"\\f12e\";\r\n}\r\n.fa-microphone:before {\r\n  content: \"\\f130\";\r\n}\r\n.fa-microphone-slash:before {\r\n  content: \"\\f131\";\r\n}\r\n.fa-shield:before {\r\n  content: \"\\f132\";\r\n}\r\n.fa-calendar-o:before {\r\n  content: \"\\f133\";\r\n}\r\n.fa-fire-extinguisher:before {\r\n  content: \"\\f134\";\r\n}\r\n.fa-rocket:before {\r\n  content: \"\\f135\";\r\n}\r\n.fa-maxcdn:before {\r\n  content: \"\\f136\";\r\n}\r\n.fa-chevron-circle-left:before {\r\n  content: \"\\f137\";\r\n}\r\n.fa-chevron-circle-right:before {\r\n  content: \"\\f138\";\r\n}\r\n.fa-chevron-circle-up:before {\r\n  content: \"\\f139\";\r\n}\r\n.fa-chevron-circle-down:before {\r\n  content: \"\\f13a\";\r\n}\r\n.fa-html5:before {\r\n  content: \"\\f13b\";\r\n}\r\n.fa-css3:before {\r\n  content: \"\\f13c\";\r\n}\r\n.fa-anchor:before {\r\n  content: \"\\f13d\";\r\n}\r\n.fa-unlock-alt:before {\r\n  content: \"\\f13e\";\r\n}\r\n.fa-bullseye:before {\r\n  content: \"\\f140\";\r\n}\r\n.fa-ellipsis-h:before {\r\n  content: \"\\f141\";\r\n}\r\n.fa-ellipsis-v:before {\r\n  content: \"\\f142\";\r\n}\r\n.fa-rss-square:before {\r\n  content: \"\\f143\";\r\n}\r\n.fa-play-circle:before {\r\n  content: \"\\f144\";\r\n}\r\n.fa-ticket:before {\r\n  content: \"\\f145\";\r\n}\r\n.fa-minus-square:before {\r\n  content: \"\\f146\";\r\n}\r\n.fa-minus-square-o:before {\r\n  content: \"\\f147\";\r\n}\r\n.fa-level-up:before {\r\n  content: \"\\f148\";\r\n}\r\n.fa-level-down:before {\r\n  content: \"\\f149\";\r\n}\r\n.fa-check-square:before {\r\n  content: \"\\f14a\";\r\n}\r\n.fa-pencil-square:before {\r\n  content: \"\\f14b\";\r\n}\r\n.fa-external-link-square:before {\r\n  content: \"\\f14c\";\r\n}\r\n.fa-share-square:before {\r\n  content: \"\\f14d\";\r\n}\r\n.fa-compass:before {\r\n  content: \"\\f14e\";\r\n}\r\n.fa-toggle-down:before,\r\n.fa-caret-square-o-down:before {\r\n  content: \"\\f150\";\r\n}\r\n.fa-toggle-up:before,\r\n.fa-caret-square-o-up:before {\r\n  content: \"\\f151\";\r\n}\r\n.fa-toggle-right:before,\r\n.fa-caret-square-o-right:before {\r\n  content: \"\\f152\";\r\n}\r\n.fa-euro:before,\r\n.fa-eur:before {\r\n  content: \"\\f153\";\r\n}\r\n.fa-gbp:before {\r\n  content: \"\\f154\";\r\n}\r\n.fa-dollar:before,\r\n.fa-usd:before {\r\n  content: \"\\f155\";\r\n}\r\n.fa-rupee:before,\r\n.fa-inr:before {\r\n  content: \"\\f156\";\r\n}\r\n.fa-cny:before,\r\n.fa-rmb:before,\r\n.fa-yen:before,\r\n.fa-jpy:before {\r\n  content: \"\\f157\";\r\n}\r\n.fa-ruble:before,\r\n.fa-rouble:before,\r\n.fa-rub:before {\r\n  content: \"\\f158\";\r\n}\r\n.fa-won:before,\r\n.fa-krw:before {\r\n  content: \"\\f159\";\r\n}\r\n.fa-bitcoin:before,\r\n.fa-btc:before {\r\n  content: \"\\f15a\";\r\n}\r\n.fa-file:before {\r\n  content: \"\\f15b\";\r\n}\r\n.fa-file-text:before {\r\n  content: \"\\f15c\";\r\n}\r\n.fa-sort-alpha-asc:before {\r\n  content: \"\\f15d\";\r\n}\r\n.fa-sort-alpha-desc:before {\r\n  content: \"\\f15e\";\r\n}\r\n.fa-sort-amount-asc:before {\r\n  content: \"\\f160\";\r\n}\r\n.fa-sort-amount-desc:before {\r\n  content: \"\\f161\";\r\n}\r\n.fa-sort-numeric-asc:before {\r\n  content: \"\\f162\";\r\n}\r\n.fa-sort-numeric-desc:before {\r\n  content: \"\\f163\";\r\n}\r\n.fa-thumbs-up:before {\r\n  content: \"\\f164\";\r\n}\r\n.fa-thumbs-down:before {\r\n  content: \"\\f165\";\r\n}\r\n.fa-youtube-square:before {\r\n  content: \"\\f166\";\r\n}\r\n.fa-youtube:before {\r\n  content: \"\\f167\";\r\n}\r\n.fa-xing:before {\r\n  content: \"\\f168\";\r\n}\r\n.fa-xing-square:before {\r\n  content: \"\\f169\";\r\n}\r\n.fa-youtube-play:before {\r\n  content: \"\\f16a\";\r\n}\r\n.fa-dropbox:before {\r\n  content: \"\\f16b\";\r\n}\r\n.fa-stack-overflow:before {\r\n  content: \"\\f16c\";\r\n}\r\n.fa-instagram:before {\r\n  content: \"\\f16d\";\r\n}\r\n.fa-flickr:before {\r\n  content: \"\\f16e\";\r\n}\r\n.fa-adn:before {\r\n  content: \"\\f170\";\r\n}\r\n.fa-bitbucket:before {\r\n  content: \"\\f171\";\r\n}\r\n.fa-bitbucket-square:before {\r\n  content: \"\\f172\";\r\n}\r\n.fa-tumblr:before {\r\n  content: \"\\f173\";\r\n}\r\n.fa-tumblr-square:before {\r\n  content: \"\\f174\";\r\n}\r\n.fa-long-arrow-down:before {\r\n  content: \"\\f175\";\r\n}\r\n.fa-long-arrow-up:before {\r\n  content: \"\\f176\";\r\n}\r\n.fa-long-arrow-left:before {\r\n  content: \"\\f177\";\r\n}\r\n.fa-long-arrow-right:before {\r\n  content: \"\\f178\";\r\n}\r\n.fa-apple:before {\r\n  content: \"\\f179\";\r\n}\r\n.fa-windows:before {\r\n  content: \"\\f17a\";\r\n}\r\n.fa-android:before {\r\n  content: \"\\f17b\";\r\n}\r\n.fa-linux:before {\r\n  content: \"\\f17c\";\r\n}\r\n.fa-dribbble:before {\r\n  content: \"\\f17d\";\r\n}\r\n.fa-skype:before {\r\n  content: \"\\f17e\";\r\n}\r\n.fa-foursquare:before {\r\n  content: \"\\f180\";\r\n}\r\n.fa-trello:before {\r\n  content: \"\\f181\";\r\n}\r\n.fa-female:before {\r\n  content: \"\\f182\";\r\n}\r\n.fa-male:before {\r\n  content: \"\\f183\";\r\n}\r\n.fa-gittip:before,\r\n.fa-gratipay:before {\r\n  content: \"\\f184\";\r\n}\r\n.fa-sun-o:before {\r\n  content: \"\\f185\";\r\n}\r\n.fa-moon-o:before {\r\n  content: \"\\f186\";\r\n}\r\n.fa-archive:before {\r\n  content: \"\\f187\";\r\n}\r\n.fa-bug:before {\r\n  content: \"\\f188\";\r\n}\r\n.fa-vk:before {\r\n  content: \"\\f189\";\r\n}\r\n.fa-weibo:before {\r\n  content: \"\\f18a\";\r\n}\r\n.fa-renren:before {\r\n  content: \"\\f18b\";\r\n}\r\n.fa-pagelines:before {\r\n  content: \"\\f18c\";\r\n}\r\n.fa-stack-exchange:before {\r\n  content: \"\\f18d\";\r\n}\r\n.fa-arrow-circle-o-right:before {\r\n  content: \"\\f18e\";\r\n}\r\n.fa-arrow-circle-o-left:before {\r\n  content: \"\\f190\";\r\n}\r\n.fa-toggle-left:before,\r\n.fa-caret-square-o-left:before {\r\n  content: \"\\f191\";\r\n}\r\n.fa-dot-circle-o:before {\r\n  content: \"\\f192\";\r\n}\r\n.fa-wheelchair:before {\r\n  content: \"\\f193\";\r\n}\r\n.fa-vimeo-square:before {\r\n  content: \"\\f194\";\r\n}\r\n.fa-turkish-lira:before,\r\n.fa-try:before {\r\n  content: \"\\f195\";\r\n}\r\n.fa-plus-square-o:before {\r\n  content: \"\\f196\";\r\n}\r\n.fa-space-shuttle:before {\r\n  content: \"\\f197\";\r\n}\r\n.fa-slack:before {\r\n  content: \"\\f198\";\r\n}\r\n.fa-envelope-square:before {\r\n  content: \"\\f199\";\r\n}\r\n.fa-wordpress:before {\r\n  content: \"\\f19a\";\r\n}\r\n.fa-openid:before {\r\n  content: \"\\f19b\";\r\n}\r\n.fa-institution:before,\r\n.fa-bank:before,\r\n.fa-university:before {\r\n  content: \"\\f19c\";\r\n}\r\n.fa-mortar-board:before,\r\n.fa-graduation-cap:before {\r\n  content: \"\\f19d\";\r\n}\r\n.fa-yahoo:before {\r\n  content: \"\\f19e\";\r\n}\r\n.fa-google:before {\r\n  content: \"\\f1a0\";\r\n}\r\n.fa-reddit:before {\r\n  content: \"\\f1a1\";\r\n}\r\n.fa-reddit-square:before {\r\n  content: \"\\f1a2\";\r\n}\r\n.fa-stumbleupon-circle:before {\r\n  content: \"\\f1a3\";\r\n}\r\n.fa-stumbleupon:before {\r\n  content: \"\\f1a4\";\r\n}\r\n.fa-delicious:before {\r\n  content: \"\\f1a5\";\r\n}\r\n.fa-digg:before {\r\n  content: \"\\f1a6\";\r\n}\r\n.fa-pied-piper-pp:before {\r\n  content: \"\\f1a7\";\r\n}\r\n.fa-pied-piper-alt:before {\r\n  content: \"\\f1a8\";\r\n}\r\n.fa-drupal:before {\r\n  content: \"\\f1a9\";\r\n}\r\n.fa-joomla:before {\r\n  content: \"\\f1aa\";\r\n}\r\n.fa-language:before {\r\n  content: \"\\f1ab\";\r\n}\r\n.fa-fax:before {\r\n  content: \"\\f1ac\";\r\n}\r\n.fa-building:before {\r\n  content: \"\\f1ad\";\r\n}\r\n.fa-child:before {\r\n  content: \"\\f1ae\";\r\n}\r\n.fa-paw:before {\r\n  content: \"\\f1b0\";\r\n}\r\n.fa-spoon:before {\r\n  content: \"\\f1b1\";\r\n}\r\n.fa-cube:before {\r\n  content: \"\\f1b2\";\r\n}\r\n.fa-cubes:before {\r\n  content: \"\\f1b3\";\r\n}\r\n.fa-behance:before {\r\n  content: \"\\f1b4\";\r\n}\r\n.fa-behance-square:before {\r\n  content: \"\\f1b5\";\r\n}\r\n.fa-steam:before {\r\n  content: \"\\f1b6\";\r\n}\r\n.fa-steam-square:before {\r\n  content: \"\\f1b7\";\r\n}\r\n.fa-recycle:before {\r\n  content: \"\\f1b8\";\r\n}\r\n.fa-automobile:before,\r\n.fa-car:before {\r\n  content: \"\\f1b9\";\r\n}\r\n.fa-cab:before,\r\n.fa-taxi:before {\r\n  content: \"\\f1ba\";\r\n}\r\n.fa-tree:before {\r\n  content: \"\\f1bb\";\r\n}\r\n.fa-spotify:before {\r\n  content: \"\\f1bc\";\r\n}\r\n.fa-deviantart:before {\r\n  content: \"\\f1bd\";\r\n}\r\n.fa-soundcloud:before {\r\n  content: \"\\f1be\";\r\n}\r\n.fa-database:before {\r\n  content: \"\\f1c0\";\r\n}\r\n.fa-file-pdf-o:before {\r\n  content: \"\\f1c1\";\r\n}\r\n.fa-file-word-o:before {\r\n  content: \"\\f1c2\";\r\n}\r\n.fa-file-excel-o:before {\r\n  content: \"\\f1c3\";\r\n}\r\n.fa-file-powerpoint-o:before {\r\n  content: \"\\f1c4\";\r\n}\r\n.fa-file-photo-o:before,\r\n.fa-file-picture-o:before,\r\n.fa-file-image-o:before {\r\n  content: \"\\f1c5\";\r\n}\r\n.fa-file-zip-o:before,\r\n.fa-file-archive-o:before {\r\n  content: \"\\f1c6\";\r\n}\r\n.fa-file-sound-o:before,\r\n.fa-file-audio-o:before {\r\n  content: \"\\f1c7\";\r\n}\r\n.fa-file-movie-o:before,\r\n.fa-file-video-o:before {\r\n  content: \"\\f1c8\";\r\n}\r\n.fa-file-code-o:before {\r\n  content: \"\\f1c9\";\r\n}\r\n.fa-vine:before {\r\n  content: \"\\f1ca\";\r\n}\r\n.fa-codepen:before {\r\n  content: \"\\f1cb\";\r\n}\r\n.fa-jsfiddle:before {\r\n  content: \"\\f1cc\";\r\n}\r\n.fa-life-bouy:before,\r\n.fa-life-buoy:before,\r\n.fa-life-saver:before,\r\n.fa-support:before,\r\n.fa-life-ring:before {\r\n  content: \"\\f1cd\";\r\n}\r\n.fa-circle-o-notch:before {\r\n  content: \"\\f1ce\";\r\n}\r\n.fa-ra:before,\r\n.fa-resistance:before,\r\n.fa-rebel:before {\r\n  content: \"\\f1d0\";\r\n}\r\n.fa-ge:before,\r\n.fa-empire:before {\r\n  content: \"\\f1d1\";\r\n}\r\n.fa-git-square:before {\r\n  content: \"\\f1d2\";\r\n}\r\n.fa-git:before {\r\n  content: \"\\f1d3\";\r\n}\r\n.fa-y-combinator-square:before,\r\n.fa-yc-square:before,\r\n.fa-hacker-news:before {\r\n  content: \"\\f1d4\";\r\n}\r\n.fa-tencent-weibo:before {\r\n  content: \"\\f1d5\";\r\n}\r\n.fa-qq:before {\r\n  content: \"\\f1d6\";\r\n}\r\n.fa-wechat:before,\r\n.fa-weixin:before {\r\n  content: \"\\f1d7\";\r\n}\r\n.fa-send:before,\r\n.fa-paper-plane:before {\r\n  content: \"\\f1d8\";\r\n}\r\n.fa-send-o:before,\r\n.fa-paper-plane-o:before {\r\n  content: \"\\f1d9\";\r\n}\r\n.fa-history:before {\r\n  content: \"\\f1da\";\r\n}\r\n.fa-circle-thin:before {\r\n  content: \"\\f1db\";\r\n}\r\n.fa-header:before {\r\n  content: \"\\f1dc\";\r\n}\r\n.fa-paragraph:before {\r\n  content: \"\\f1dd\";\r\n}\r\n.fa-sliders:before {\r\n  content: \"\\f1de\";\r\n}\r\n.fa-share-alt:before {\r\n  content: \"\\f1e0\";\r\n}\r\n.fa-share-alt-square:before {\r\n  content: \"\\f1e1\";\r\n}\r\n.fa-bomb:before {\r\n  content: \"\\f1e2\";\r\n}\r\n.fa-soccer-ball-o:before,\r\n.fa-futbol-o:before {\r\n  content: \"\\f1e3\";\r\n}\r\n.fa-tty:before {\r\n  content: \"\\f1e4\";\r\n}\r\n.fa-binoculars:before {\r\n  content: \"\\f1e5\";\r\n}\r\n.fa-plug:before {\r\n  content: \"\\f1e6\";\r\n}\r\n.fa-slideshare:before {\r\n  content: \"\\f1e7\";\r\n}\r\n.fa-twitch:before {\r\n  content: \"\\f1e8\";\r\n}\r\n.fa-yelp:before {\r\n  content: \"\\f1e9\";\r\n}\r\n.fa-newspaper-o:before {\r\n  content: \"\\f1ea\";\r\n}\r\n.fa-wifi:before {\r\n  content: \"\\f1eb\";\r\n}\r\n.fa-calculator:before {\r\n  content: \"\\f1ec\";\r\n}\r\n.fa-paypal:before {\r\n  content: \"\\f1ed\";\r\n}\r\n.fa-google-wallet:before {\r\n  content: \"\\f1ee\";\r\n}\r\n.fa-cc-visa:before {\r\n  content: \"\\f1f0\";\r\n}\r\n.fa-cc-mastercard:before {\r\n  content: \"\\f1f1\";\r\n}\r\n.fa-cc-discover:before {\r\n  content: \"\\f1f2\";\r\n}\r\n.fa-cc-amex:before {\r\n  content: \"\\f1f3\";\r\n}\r\n.fa-cc-paypal:before {\r\n  content: \"\\f1f4\";\r\n}\r\n.fa-cc-stripe:before {\r\n  content: \"\\f1f5\";\r\n}\r\n.fa-bell-slash:before {\r\n  content: \"\\f1f6\";\r\n}\r\n.fa-bell-slash-o:before {\r\n  content: \"\\f1f7\";\r\n}\r\n.fa-trash:before {\r\n  content: \"\\f1f8\";\r\n}\r\n.fa-copyright:before {\r\n  content: \"\\f1f9\";\r\n}\r\n.fa-at:before {\r\n  content: \"\\f1fa\";\r\n}\r\n.fa-eyedropper:before {\r\n  content: \"\\f1fb\";\r\n}\r\n.fa-paint-brush:before {\r\n  content: \"\\f1fc\";\r\n}\r\n.fa-birthday-cake:before {\r\n  content: \"\\f1fd\";\r\n}\r\n.fa-area-chart:before {\r\n  content: \"\\f1fe\";\r\n}\r\n.fa-pie-chart:before {\r\n  content: \"\\f200\";\r\n}\r\n.fa-line-chart:before {\r\n  content: \"\\f201\";\r\n}\r\n.fa-lastfm:before {\r\n  content: \"\\f202\";\r\n}\r\n.fa-lastfm-square:before {\r\n  content: \"\\f203\";\r\n}\r\n.fa-toggle-off:before {\r\n  content: \"\\f204\";\r\n}\r\n.fa-toggle-on:before {\r\n  content: \"\\f205\";\r\n}\r\n.fa-bicycle:before {\r\n  content: \"\\f206\";\r\n}\r\n.fa-bus:before {\r\n  content: \"\\f207\";\r\n}\r\n.fa-ioxhost:before {\r\n  content: \"\\f208\";\r\n}\r\n.fa-angellist:before {\r\n  content: \"\\f209\";\r\n}\r\n.fa-cc:before {\r\n  content: \"\\f20a\";\r\n}\r\n.fa-shekel:before,\r\n.fa-sheqel:before,\r\n.fa-ils:before {\r\n  content: \"\\f20b\";\r\n}\r\n.fa-meanpath:before {\r\n  content: \"\\f20c\";\r\n}\r\n.fa-buysellads:before {\r\n  content: \"\\f20d\";\r\n}\r\n.fa-connectdevelop:before {\r\n  content: \"\\f20e\";\r\n}\r\n.fa-dashcube:before {\r\n  content: \"\\f210\";\r\n}\r\n.fa-forumbee:before {\r\n  content: \"\\f211\";\r\n}\r\n.fa-leanpub:before {\r\n  content: \"\\f212\";\r\n}\r\n.fa-sellsy:before {\r\n  content: \"\\f213\";\r\n}\r\n.fa-shirtsinbulk:before {\r\n  content: \"\\f214\";\r\n}\r\n.fa-simplybuilt:before {\r\n  content: \"\\f215\";\r\n}\r\n.fa-skyatlas:before {\r\n  content: \"\\f216\";\r\n}\r\n.fa-cart-plus:before {\r\n  content: \"\\f217\";\r\n}\r\n.fa-cart-arrow-down:before {\r\n  content: \"\\f218\";\r\n}\r\n.fa-diamond:before {\r\n  content: \"\\f219\";\r\n}\r\n.fa-ship:before {\r\n  content: \"\\f21a\";\r\n}\r\n.fa-user-secret:before {\r\n  content: \"\\f21b\";\r\n}\r\n.fa-motorcycle:before {\r\n  content: \"\\f21c\";\r\n}\r\n.fa-street-view:before {\r\n  content: \"\\f21d\";\r\n}\r\n.fa-heartbeat:before {\r\n  content: \"\\f21e\";\r\n}\r\n.fa-venus:before {\r\n  content: \"\\f221\";\r\n}\r\n.fa-mars:before {\r\n  content: \"\\f222\";\r\n}\r\n.fa-mercury:before {\r\n  content: \"\\f223\";\r\n}\r\n.fa-intersex:before,\r\n.fa-transgender:before {\r\n  content: \"\\f224\";\r\n}\r\n.fa-transgender-alt:before {\r\n  content: \"\\f225\";\r\n}\r\n.fa-venus-double:before {\r\n  content: \"\\f226\";\r\n}\r\n.fa-mars-double:before {\r\n  content: \"\\f227\";\r\n}\r\n.fa-venus-mars:before {\r\n  content: \"\\f228\";\r\n}\r\n.fa-mars-stroke:before {\r\n  content: \"\\f229\";\r\n}\r\n.fa-mars-stroke-v:before {\r\n  content: \"\\f22a\";\r\n}\r\n.fa-mars-stroke-h:before {\r\n  content: \"\\f22b\";\r\n}\r\n.fa-neuter:before {\r\n  content: \"\\f22c\";\r\n}\r\n.fa-genderless:before {\r\n  content: \"\\f22d\";\r\n}\r\n.fa-facebook-official:before {\r\n  content: \"\\f230\";\r\n}\r\n.fa-pinterest-p:before {\r\n  content: \"\\f231\";\r\n}\r\n.fa-whatsapp:before {\r\n  content: \"\\f232\";\r\n}\r\n.fa-server:before {\r\n  content: \"\\f233\";\r\n}\r\n.fa-user-plus:before {\r\n  content: \"\\f234\";\r\n}\r\n.fa-user-times:before {\r\n  content: \"\\f235\";\r\n}\r\n.fa-hotel:before,\r\n.fa-bed:before {\r\n  content: \"\\f236\";\r\n}\r\n.fa-viacoin:before {\r\n  content: \"\\f237\";\r\n}\r\n.fa-train:before {\r\n  content: \"\\f238\";\r\n}\r\n.fa-subway:before {\r\n  content: \"\\f239\";\r\n}\r\n.fa-medium:before {\r\n  content: \"\\f23a\";\r\n}\r\n.fa-yc:before,\r\n.fa-y-combinator:before {\r\n  content: \"\\f23b\";\r\n}\r\n.fa-optin-monster:before {\r\n  content: \"\\f23c\";\r\n}\r\n.fa-opencart:before {\r\n  content: \"\\f23d\";\r\n}\r\n.fa-expeditedssl:before {\r\n  content: \"\\f23e\";\r\n}\r\n.fa-battery-4:before,\r\n.fa-battery-full:before {\r\n  content: \"\\f240\";\r\n}\r\n.fa-battery-3:before,\r\n.fa-battery-three-quarters:before {\r\n  content: \"\\f241\";\r\n}\r\n.fa-battery-2:before,\r\n.fa-battery-half:before {\r\n  content: \"\\f242\";\r\n}\r\n.fa-battery-1:before,\r\n.fa-battery-quarter:before {\r\n  content: \"\\f243\";\r\n}\r\n.fa-battery-0:before,\r\n.fa-battery-empty:before {\r\n  content: \"\\f244\";\r\n}\r\n.fa-mouse-pointer:before {\r\n  content: \"\\f245\";\r\n}\r\n.fa-i-cursor:before {\r\n  content: \"\\f246\";\r\n}\r\n.fa-object-group:before {\r\n  content: \"\\f247\";\r\n}\r\n.fa-object-ungroup:before {\r\n  content: \"\\f248\";\r\n}\r\n.fa-sticky-note:before {\r\n  content: \"\\f249\";\r\n}\r\n.fa-sticky-note-o:before {\r\n  content: \"\\f24a\";\r\n}\r\n.fa-cc-jcb:before {\r\n  content: \"\\f24b\";\r\n}\r\n.fa-cc-diners-club:before {\r\n  content: \"\\f24c\";\r\n}\r\n.fa-clone:before {\r\n  content: \"\\f24d\";\r\n}\r\n.fa-balance-scale:before {\r\n  content: \"\\f24e\";\r\n}\r\n.fa-hourglass-o:before {\r\n  content: \"\\f250\";\r\n}\r\n.fa-hourglass-1:before,\r\n.fa-hourglass-start:before {\r\n  content: \"\\f251\";\r\n}\r\n.fa-hourglass-2:before,\r\n.fa-hourglass-half:before {\r\n  content: \"\\f252\";\r\n}\r\n.fa-hourglass-3:before,\r\n.fa-hourglass-end:before {\r\n  content: \"\\f253\";\r\n}\r\n.fa-hourglass:before {\r\n  content: \"\\f254\";\r\n}\r\n.fa-hand-grab-o:before,\r\n.fa-hand-rock-o:before {\r\n  content: \"\\f255\";\r\n}\r\n.fa-hand-stop-o:before,\r\n.fa-hand-paper-o:before {\r\n  content: \"\\f256\";\r\n}\r\n.fa-hand-scissors-o:before {\r\n  content: \"\\f257\";\r\n}\r\n.fa-hand-lizard-o:before {\r\n  content: \"\\f258\";\r\n}\r\n.fa-hand-spock-o:before {\r\n  content: \"\\f259\";\r\n}\r\n.fa-hand-pointer-o:before {\r\n  content: \"\\f25a\";\r\n}\r\n.fa-hand-peace-o:before {\r\n  content: \"\\f25b\";\r\n}\r\n.fa-trademark:before {\r\n  content: \"\\f25c\";\r\n}\r\n.fa-registered:before {\r\n  content: \"\\f25d\";\r\n}\r\n.fa-creative-commons:before {\r\n  content: \"\\f25e\";\r\n}\r\n.fa-gg:before {\r\n  content: \"\\f260\";\r\n}\r\n.fa-gg-circle:before {\r\n  content: \"\\f261\";\r\n}\r\n.fa-tripadvisor:before {\r\n  content: \"\\f262\";\r\n}\r\n.fa-odnoklassniki:before {\r\n  content: \"\\f263\";\r\n}\r\n.fa-odnoklassniki-square:before {\r\n  content: \"\\f264\";\r\n}\r\n.fa-get-pocket:before {\r\n  content: \"\\f265\";\r\n}\r\n.fa-wikipedia-w:before {\r\n  content: \"\\f266\";\r\n}\r\n.fa-safari:before {\r\n  content: \"\\f267\";\r\n}\r\n.fa-chrome:before {\r\n  content: \"\\f268\";\r\n}\r\n.fa-firefox:before {\r\n  content: \"\\f269\";\r\n}\r\n.fa-opera:before {\r\n  content: \"\\f26a\";\r\n}\r\n.fa-internet-explorer:before {\r\n  content: \"\\f26b\";\r\n}\r\n.fa-tv:before,\r\n.fa-television:before {\r\n  content: \"\\f26c\";\r\n}\r\n.fa-contao:before {\r\n  content: \"\\f26d\";\r\n}\r\n.fa-500px:before {\r\n  content: \"\\f26e\";\r\n}\r\n.fa-amazon:before {\r\n  content: \"\\f270\";\r\n}\r\n.fa-calendar-plus-o:before {\r\n  content: \"\\f271\";\r\n}\r\n.fa-calendar-minus-o:before {\r\n  content: \"\\f272\";\r\n}\r\n.fa-calendar-times-o:before {\r\n  content: \"\\f273\";\r\n}\r\n.fa-calendar-check-o:before {\r\n  content: \"\\f274\";\r\n}\r\n.fa-industry:before {\r\n  content: \"\\f275\";\r\n}\r\n.fa-map-pin:before {\r\n  content: \"\\f276\";\r\n}\r\n.fa-map-signs:before {\r\n  content: \"\\f277\";\r\n}\r\n.fa-map-o:before {\r\n  content: \"\\f278\";\r\n}\r\n.fa-map:before {\r\n  content: \"\\f279\";\r\n}\r\n.fa-commenting:before {\r\n  content: \"\\f27a\";\r\n}\r\n.fa-commenting-o:before {\r\n  content: \"\\f27b\";\r\n}\r\n.fa-houzz:before {\r\n  content: \"\\f27c\";\r\n}\r\n.fa-vimeo:before {\r\n  content: \"\\f27d\";\r\n}\r\n.fa-black-tie:before {\r\n  content: \"\\f27e\";\r\n}\r\n.fa-fonticons:before {\r\n  content: \"\\f280\";\r\n}\r\n.fa-reddit-alien:before {\r\n  content: \"\\f281\";\r\n}\r\n.fa-edge:before {\r\n  content: \"\\f282\";\r\n}\r\n.fa-credit-card-alt:before {\r\n  content: \"\\f283\";\r\n}\r\n.fa-codiepie:before {\r\n  content: \"\\f284\";\r\n}\r\n.fa-modx:before {\r\n  content: \"\\f285\";\r\n}\r\n.fa-fort-awesome:before {\r\n  content: \"\\f286\";\r\n}\r\n.fa-usb:before {\r\n  content: \"\\f287\";\r\n}\r\n.fa-product-hunt:before {\r\n  content: \"\\f288\";\r\n}\r\n.fa-mixcloud:before {\r\n  content: \"\\f289\";\r\n}\r\n.fa-scribd:before {\r\n  content: \"\\f28a\";\r\n}\r\n.fa-pause-circle:before {\r\n  content: \"\\f28b\";\r\n}\r\n.fa-pause-circle-o:before {\r\n  content: \"\\f28c\";\r\n}\r\n.fa-stop-circle:before {\r\n  content: \"\\f28d\";\r\n}\r\n.fa-stop-circle-o:before {\r\n  content: \"\\f28e\";\r\n}\r\n.fa-shopping-bag:before {\r\n  content: \"\\f290\";\r\n}\r\n.fa-shopping-basket:before {\r\n  content: \"\\f291\";\r\n}\r\n.fa-hashtag:before {\r\n  content: \"\\f292\";\r\n}\r\n.fa-bluetooth:before {\r\n  content: \"\\f293\";\r\n}\r\n.fa-bluetooth-b:before {\r\n  content: \"\\f294\";\r\n}\r\n.fa-percent:before {\r\n  content: \"\\f295\";\r\n}\r\n.fa-gitlab:before {\r\n  content: \"\\f296\";\r\n}\r\n.fa-wpbeginner:before {\r\n  content: \"\\f297\";\r\n}\r\n.fa-wpforms:before {\r\n  content: \"\\f298\";\r\n}\r\n.fa-envira:before {\r\n  content: \"\\f299\";\r\n}\r\n.fa-universal-access:before {\r\n  content: \"\\f29a\";\r\n}\r\n.fa-wheelchair-alt:before {\r\n  content: \"\\f29b\";\r\n}\r\n.fa-question-circle-o:before {\r\n  content: \"\\f29c\";\r\n}\r\n.fa-blind:before {\r\n  content: \"\\f29d\";\r\n}\r\n.fa-audio-description:before {\r\n  content: \"\\f29e\";\r\n}\r\n.fa-volume-control-phone:before {\r\n  content: \"\\f2a0\";\r\n}\r\n.fa-braille:before {\r\n  content: \"\\f2a1\";\r\n}\r\n.fa-assistive-listening-systems:before {\r\n  content: \"\\f2a2\";\r\n}\r\n.fa-asl-interpreting:before,\r\n.fa-american-sign-language-interpreting:before {\r\n  content: \"\\f2a3\";\r\n}\r\n.fa-deafness:before,\r\n.fa-hard-of-hearing:before,\r\n.fa-deaf:before {\r\n  content: \"\\f2a4\";\r\n}\r\n.fa-glide:before {\r\n  content: \"\\f2a5\";\r\n}\r\n.fa-glide-g:before {\r\n  content: \"\\f2a6\";\r\n}\r\n.fa-signing:before,\r\n.fa-sign-language:before {\r\n  content: \"\\f2a7\";\r\n}\r\n.fa-low-vision:before {\r\n  content: \"\\f2a8\";\r\n}\r\n.fa-viadeo:before {\r\n  content: \"\\f2a9\";\r\n}\r\n.fa-viadeo-square:before {\r\n  content: \"\\f2aa\";\r\n}\r\n.fa-snapchat:before {\r\n  content: \"\\f2ab\";\r\n}\r\n.fa-snapchat-ghost:before {\r\n  content: \"\\f2ac\";\r\n}\r\n.fa-snapchat-square:before {\r\n  content: \"\\f2ad\";\r\n}\r\n.fa-pied-piper:before {\r\n  content: \"\\f2ae\";\r\n}\r\n.fa-first-order:before {\r\n  content: \"\\f2b0\";\r\n}\r\n.fa-yoast:before {\r\n  content: \"\\f2b1\";\r\n}\r\n.fa-themeisle:before {\r\n  content: \"\\f2b2\";\r\n}\r\n.fa-google-plus-circle:before,\r\n.fa-google-plus-official:before {\r\n  content: \"\\f2b3\";\r\n}\r\n.fa-fa:before,\r\n.fa-font-awesome:before {\r\n  content: \"\\f2b4\";\r\n}\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n.sr-only-focusable:active,\r\n.sr-only-focusable:focus {\r\n  position: static;\r\n  width: auto;\r\n  height: auto;\r\n  margin: 0;\r\n  overflow: visible;\r\n  clip: auto;\r\n}\r\n"

/***/ },

/***/ 860:
/***/ function(module, exports) {

module.exports = "@media (min-width: 0px) and (max-width: 767px){\r\n    .main-heading{\r\n        /*font-size: 24px;*/\r\n        font-size: 7.4vmin;\r\n        margin-bottom: 20px;\r\n    }\r\n    .sub-heading{\r\n        font-size: 14px;\r\n        margin-bottom: 20px;\r\n        line-height: 20px;\r\n    }\r\n    .t1-logo{\r\n        width: 130px;\r\n        float: none;\r\n        margin: 0 auto;\r\n    }\r\n    .t1-logo .landing-page-header{\r\n        width: 130px;\r\n        float: none;\r\n        margin: 0 auto;\r\n        position: relative !important;\r\n        top: inherit !important;\r\n        left: inherit !important;\r\n    }\r\n    .t1-logo a{\r\n        float: none;\r\n    }\r\n     .t1-logo a img{\r\n        max-width: 100%;\r\n        max-height: inherit;\r\n    }\r\n    .t1-landing{\r\n        width: 100% !important;\r\n    }\r\n    .t1-question{\r\n        width: 100% !important;\r\n    }\r\n    .t1-result{\r\n        width: 100% !important;\r\n    }\r\n    .t1-landing-top {\r\n        position: fixed;\r\n        top: 10px;\r\n        left: 0;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    .landing-page-mid button{\r\n        font-family: montserratregular;\r\n        font-size: 14px;\r\n        padding: 10px 40px;\r\n    }\r\n    .landing-page-mid leadform button.prime-action{\r\n        font-family: montserratregular;\r\n        font-size: 14px;\r\n        padding: 10px 40px;\r\n    }\r\n    .landing-page-mid leadform{\r\n        width: 100%;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer input{\r\n        border: 1px solid rgba(255,255,255,0.4);\r\n        font-size: 13px;\r\n        width: 98%;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer input{\r\n        border: 1px solid rgba(255,255,255,0.4);\r\n        font-size: 13px;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer span{\r\n        font-size: 8px;\r\n        top: inherit;\r\n        bottom: -35%\r\n    }\r\n    .landing-footer-outer{\r\n        position: absolute;\r\n        bottom: 10px;\r\n        right: inherit;\r\n        width: 100%;\r\n        float: left;\r\n        text-align: center;\r\n    }\r\n    .landing-footer-outer .text-right{\r\n        text-align: center;\r\n    }\r\n    .t1-footerlogo{\r\n        float: none;\r\n    }\r\n    .t1-footerlogo p{\r\n        font-size: 9px;\r\n        margin-top: 0px;\r\n        display: inline;\r\n        float: none;\r\n    }\r\n    .landing-footer-outer .powered-by span{\r\n        font-size: 9px;\r\n        margin-top: 0px;\r\n        display: inline;\r\n        float: none;\r\n    }\r\n    .landing-footer-outer .powered-by img{\r\n        max-width: 80px;\r\n        display: inline;\r\n        vertical-align: middle;\r\n    }\r\n    \r\n\r\n    .t1-question-mid {\r\n        margin: 0 auto;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    .t1-question-slider{\r\n        width: 85%;\r\n    }\r\n    .t1-slider{\r\n        padding-bottom:80px;\r\n    }\r\n    .t1-slider-question{\r\n        padding: 20px;\r\n        width: 100%;\r\n    }\r\n    /*.question-pic img{\r\n        width: 150px;\r\n        height: inherit;\r\n    }*/\r\n    .t1-question-resultheading{\r\n        font-size: 16px;\r\n        margin-bottom: 5px;\r\n    }\r\n    .t1-question-liveresult{\r\n        font-size: 26px;\r\n        margin-bottom: 5px;\r\n    }\r\n    .t1-ques-head .help-outer{ display: none;}\r\n    .t1-slider-pagination{\r\n        top: 0px;\r\n    }\r\n    .pic-selector{\r\n        width: 48% !important;\r\n        margin-bottom: 1.8%;\r\n        margin-right: 1%;\r\n        margin-left: 1%;\r\n    }\r\n    .pic-selector label.control{\r\n        width: 100%;\r\n        height: 0;\r\n        padding-bottom: 100%;\r\n        margin: 0;\r\n        display: flex;\r\n    }\r\n    .pic-selector label.control .text-overlay span{\r\n        font-size: 9px;\r\n    }\r\n    .text-overlay{\r\n        top: 5px;\r\n        padding-bottom: 100%;\r\n    }\r\n    .pic-selector input:checked + .control__indicator span.img-overlay{\r\n        padding-bottom: 100%;\r\n    }\r\n    /*.pic-selector input[type=\"radio\"]:checked + label.control::after{\r\n        font-size: 26px;\r\n    }*/\r\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::after{\r\n        font-size: 6vmin;\r\n        left: 40%;\r\n        top: 0%;\r\n        padding-top: 40%;\r\n    }\r\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::before{\r\n       font-size: 6vmin;\r\n        left: 40%;\r\n        top: 22%;\r\n        padding-top: 40%;\r\n        opacity: 1;\r\n    }\r\n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::after{\r\n        font-size: 6vmin;\r\n        left: 40%;\r\n        top: 0%;\r\n        padding-top: 40%;\r\n    }\r\n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::before{\r\n        font-size: 6vmin;\r\n        left: 40%;\r\n        top: 22%;\r\n        padding-top: 40%;\r\n        opacity: 1;\r\n    }\r\n    .pic-selector label.control span.img-overlay:hover {\r\n        height: 100%;\r\n        width: 100%;\r\n        top: 0;\r\n        position: absolute;\r\n        left: 0px;\r\n        background: rgba(0,0,0,0.5);\r\n        /*transition: all .5s;*/\r\n    }\r\n    /*.pic-selector input[type=\"checkbox\"]:checked + label.control::after {\r\n        font-size: 26px;\r\n    }*/\r\n    .t1-social-links li a{\r\n        font-size: 18px;\r\n    }\r\n    .t1-ques-component .pic-selector input{\r\n        padding: 0px;\r\n    }\r\n    .t1-slider-nav a.prev {\r\n        left: 25%;\r\n        bottom: -70px !important;\r\n        top: inherit;\r\n    }\r\n    .t1-slider-nav a.next {\r\n        right: 25%;\r\n        bottom: -70px;\r\n        top: inherit;\r\n    }\r\n    .t1-slider-nav a.go {\r\n        right: 25%;\r\n        bottom: 20px;\r\n        top: inherit;\r\n    }\r\n    .t1-ques-inner{\r\n        margin-bottom: 25px;\r\n    }\r\n    .t1-ques-head{\r\n        font-size: 18px;\r\n        margin-bottom: 15px;\r\n    }\r\n    .t1-ques-component .section-head div{\r\n        font-size: 16px;\r\n    }\r\n    .t1-ques-component .input-outer input{\r\n        font-size: 14px;\r\n    }\r\n    .t1-ques-component input{\r\n        font-size: 14px;\r\n        padding: 12px;\r\n        /*width: 91%;*/\r\n    }\r\n\r\n    .t1-result-top{\r\n        width: 90%;\r\n        margin-left: 5%;\r\n    }\r\n    .t1-result-topheading p{\r\n        font-size: 18px;\r\n        width: 100%;\r\n    }\r\n    .t1-result-topheading{\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    .t1-result-inner{\r\n        padding: 6%;\r\n        width: 100%;\r\n    }\r\n    .t1-result-full-section{\r\n        text-align: center;\r\n        margin-top: 0 !important;\r\n    }\r\n    .t1-result-full-container{\r\n        text-align: center;\r\n        width: 100%;\r\n    }\r\n    .t1-result-small-section{\r\n        text-align: center;\r\n        margin-right: 0;\r\n        margin-top: 20px;\r\n        width: 100%;\r\n    }\r\n    .t1-result-small-container{\r\n        text-align: center;\r\n    }\r\n    .t1-result-leadform-heading{\r\n        margin-top: 30px;\r\n        text-align: center;\r\n    }\r\n    .t1-result-leadform-inner{\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n    }\r\n    .t1-leadform-field{\r\n        margin-bottom: 30px;\r\n    }\r\n    .t1-result-leadform-inner input{\r\n        font-size: 14px;\r\n    }\r\n    .t1-leadform-btnoutr{\r\n        text-align: center;\r\n    }\r\n    .t1-result-leadform .input-section{\r\n        width: 100%;\r\n    }\r\n    .t1-result-leadform .page_2 click-button .prime-action{\r\n        padding: 15px;\r\n        font-size: 13px;\r\n    }\r\n    .page_2 click-button .text-center{\r\n        text-align: center !important;\r\n    }\r\n    .t1-result-leadform .container-temp{\r\n        text-align: center;\r\n    }\r\n    .page_2 click-button .prime-action{\r\n        padding: 15px !important;\r\n        font-size: 13px !important;\r\n    }\r\n    .t1-result-disclaimer{\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    .t1-social-links{\r\n        float: left;\r\n        width: 100%;\r\n        text-align: center;\r\n        margin-top: 15px;\r\n        margin-bottom: 15px;\r\n    }\r\n    .t1-social-links li{\r\n        display: inline;\r\n        float: none;\r\n    }\r\n    .t1-social-links li p{\r\n        display: inline;\r\n        float: none;\r\n        font-family: montserratregular;\r\n        font-size: 14px;\r\n    }\r\n    .t1-social-links li a{\r\n        display: inline;\r\n        float: none;\r\n    }\r\n\r\n    .t1-result-full-section p:nth-child(1){\r\n        font-size: 26px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .t1-result-full-section p:nth-child(2){\r\n        font-size: 12px;\r\n    }\r\n    .t1-result-full-section p:nth-child(3){\r\n        font-size: 12px;\r\n    }\r\n\r\n    .t1-result-small-section p:nth-child(1){\r\n        font-size: 26px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .t1-result-small-section p:nth-child(2){\r\n        font-size: 12px;\r\n    }\r\n    .t1-result-small-section p:nth-child(3){\r\n        font-size: 12px;\r\n    }\r\n    .t1-ques-head .help-text{ width: 160px;}\r\n\r\n\r\n\r\n\r\n    .recommendation-outer .mid-width p { font-size: 18px;text-align: center; width: 100%; margin-bottom: 25px;}\r\n    .recom-section .w100 .leadform-outer h1 {text-align: center; }\r\n    .recom-section .w100 .leadform-outer h5 {text-align: center;}\r\n    .recom-section .w100 .container-temp {text-align: center !important; width: 100%;}\r\n    .recom-section .leadform-outer .container-temp .prime-action {width: 100%;  float: none !important; margin-left: 0!important}\r\n    .recom-section .disc-set { width: 100%; padding-left:0;}\r\n    .recom-section .outer-main{ text-align: center !important;}\r\n    .recom-section .container-temp {text-align: center !important; width: 98%;}\r\n    .recom-section .left-outer { height: auto !important; padding: 10px 0;}\r\n    .recom-section .leadform-outer h1 {margin-top: 10px; font-size: 24px; margin-bottom: 0; }\r\n    .recommendation-outer .t1-result-inner {padding: 6% !important; width: 100%;}\r\n    .recom-section .outer-main { height: auto !important;}\r\n    .recom-section .leadform-outer .prime-action{min-width: 80%; margin-left: 10%;}\r\n    .recom-section .w100 .leadform-outer { padding-left:0!important;}\r\n    .recom-section .w100 .container-temp {text-align: left !important; width: 100% !important;}\r\n    .recom-section .w100 .leadform-outer .container-temp .prime-action {width: 90% !important; float: left !important;}\r\n    .recom-section .t1-social-links {float: left;width: 100%;text-align: center; margin-top: 15px; margin-bottom: 0 !important;}\r\n    .recom-section .disc-set{ text-align: center !important;}\r\n    .recom-section .w100 .leadform-outer .prime-action{min-width: 90%; margin-left: 0%;}\r\n    .rec-image-outer { max-width: 96%;}\r\n    \r\n    .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){width:100%;}\r\n    .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input{width:98%;}\r\n    \r\n}\r\n@media (min-width: 0px) and (max-width: 767px) and (orientation: portrait) {\r\n    .t1-landing-leadform .t1-leadform-field{\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer{\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n    }\r\n    .landing-page-mid button {\r\n    font-family: montserratregular;\r\n    font-size: 14px !important;\r\n    padding: 10px 40px !important;\r\n}\r\n    /*.pic-selector label.control{\r\n        width: 33vw;\r\n        height: 33vw;\r\n    }*/\r\n    \r\n}\r\n@media (min-width: 0px) and (max-width: 767px) and (orientation: landscape) {\r\n    .landing-page-mid{\r\n        width: 90%;\r\n    }\r\n    /*.pic-selector label.control{\r\n        width: 15vw;\r\n        height: 15vw;\r\n    }*/\r\n    .main-heading{\r\n        margin-bottom: 2%;\r\n    }\r\n    .sub-heading {\r\n        font-size: 11px;\r\n        margin-bottom: 3%;\r\n        line-height: normal;\r\n    }\r\n     \r\n    .landing-page-mid leadform .input-section .input-outer input{\r\n        padding: 7px 5px;\r\n        width: 100%;\r\n        font-size: 11px;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer input{\r\n        padding: 7px 5px;\r\n        width: 100%;\r\n        font-size: 11px;\r\n    }\r\n    .landing-page-mid button {\r\n        font-family: montserratregular;\r\n        font-size: 9px;\r\n        padding: 7px 30px;\r\n    }\r\n    .landing-page-mid leadform button.prime-action {\r\n        font-family: montserratregular;\r\n        font-size: 9px;\r\n        padding: 7px 30px;\r\n    }\r\n    .t1-landing-leadform .t1-leadform-field {\r\n        display: inline-block;\r\n        width: 40%;\r\n        float: none;\r\n        margin-bottom: 10px;\r\n        margin-right: 10px;\r\n        margin-left: 10px;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer {\r\n        display: inline-block;\r\n        width: 40%;\r\n        float: none;\r\n        margin-bottom: 10px;\r\n        margin-right: 10px;\r\n        margin-left: 10px;\r\n    }\r\n    .t1-landing-top{\r\n        position: relative;\r\n        top: -10px;\r\n    }\r\n    .t1-logo a img{\r\n        max-width: 90%;\r\n        max-height: inherit;\r\n    }\r\n}\r\n\r\n@media (min-width: 0px) and (max-width: 319px){\r\n    .main-heading{\r\n        margin-bottom: 2%;\r\n    }\r\n    .sub-heading {\r\n        font-size: 11px;\r\n        margin-bottom: 3%;\r\n        line-height: normal;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer input{\r\n        padding: 7px 5px;\r\n        width: 100%;\r\n        font-size: 11px;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer input{\r\n        padding: 7px 5px;\r\n        width: 100%;\r\n        font-size: 11px;\r\n    }\r\n    .landing-page-mid button {\r\n        font-family: montserratregular;\r\n        font-size: 9px;\r\n        padding: 7px 30px;\r\n    }\r\n    .landing-page-mid leadform button.prime-action {\r\n        font-family: montserratregular;\r\n        font-size: 9px;\r\n        padding: 7px 30px;\r\n    }\r\n}\r\n@media (min-width: 0px) and (max-width: 319px) and (orientation: landscape){\r\n    .t1-landing {\r\n        height: 100vh;\r\n        position: relative;\r\n    }\r\n    .t1-landing-top{\r\n        position: relative;\r\n        top: -10px;\r\n    }\r\n    .t1-logo a img{\r\n        max-width: 70%;\r\n        max-height: inherit;\r\n    }\r\n    \r\n}\r\n@media (min-width: 0px) and (max-width: 420px) and (orientation: portrait){\r\n    \r\n    .main-heading{\r\n        margin-bottom: 2%;\r\n    }\r\n    .sub-heading {\r\n        font-size: 13px;\r\n        margin-bottom: 5%;\r\n        line-height: normal;\r\n    }\r\n    .landing-page-mid button {\r\n        font-family: montserratregular;\r\n        font-size: 9px;\r\n        padding: 7px 30px;\r\n    }\r\n    .landing-page-mid leadform button.prime-action {\r\n        font-family: montserratregular;\r\n        font-size: 9px;\r\n        padding: 7px 30px;\r\n    }\r\n    .t1-logo a img{\r\n        max-width: 70%;\r\n        max-height: inherit;\r\n    }\r\n    /*.pic-selector label.control .text-overlay span{\r\n        display: none;\r\n    }*/\r\n    \r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 770px) {\r\n    .t1-result-top{ width: 85%;}\r\n}\r\n\r\n\r\n@media (min-width: 768px) and (max-width: 1023px) {\r\n    .t1-result-small-section{\r\n        margin-top: 20px;\r\n        margin-right: 30px;\r\n    }\r\n    \r\n    .t1-question-slider {\r\n        width: 100%;\r\n    }\r\n    .t1-result-full-section{\r\n        margin-top: 0px;\r\n    }\r\n    .t1-slider-question {\r\n        padding: 30px;\r\n    }\r\n    .t1-question-liveresult{\r\n        margin-bottom: 5px;\r\n    }\r\n    .t1-slider-pagination {\r\n        top: 0px;\r\n    }\r\n    .t1-slider-nav a.prev {\r\n        left: -75px;\r\n    }\r\n    .t1-slider-nav a.next {\r\n        right: -75px;\r\n    }\r\n    .t1-slider-nav a.go {\r\n        right: -75px;\r\n    }\r\n    .recommendation-outer .t1-result-inner{\r\n        width: 94%;\r\n        padding: 30px;\r\n    }\r\n    .t1-result-inner{\r\n        width: 94%;\r\n        padding: 30px;\r\n    }\r\n    .t1-result-leadform-inner{\r\n        width: 70%;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer span{\r\n        font-size: 10px;\r\n        top: 45px;\r\n    }\r\n    .pic-selector{\r\n        width: 32% !important;\r\n        margin-bottom: 1.5% !important;\r\n        margin-right: 0.5% !important;\r\n        margin-left: 0.7% !important;\r\n    }\r\n    .pic-selector label.control{\r\n        width: 100%;\r\n        height: 0;\r\n        padding-bottom: 100%;\r\n        margin: 0;\r\n        display: flex;\r\n    }\r\n    .pic-selector input:checked + .control__indicator span.img-overlay {\r\n        padding-bottom: 100%;\r\n        top: 0px;\r\n    }\r\n    .text-overlay {\r\n        top: 5px;\r\n        padding-bottom: 100%;\r\n    }  \r\n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::before {\r\n        font-size: 5vmin;\r\n        left: 40%;\r\n        top: 22%;\r\n        padding-top: 37%;\r\n        opacity: 1;\r\n    }\r\n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::after {\r\n        font-size: 5vmin;\r\n        left: 40%;\r\n        top: 0%;\r\n        padding-top: 37%;\r\n    }\r\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::after{\r\n        font-size: 5vmin;\r\n        left: 40%;\r\n        top: 0%;\r\n        padding-top: 37%;\r\n    }\r\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::before{\r\n        font-size: 5vmin;\r\n        left: 40%;\r\n        top: 22%;\r\n        padding-top: 37%;\r\n        opacity: 1;\r\n    }\r\n    .t1-result-topheading p{\r\n        font-size: 22px;\r\n    }\r\n    .t1-result-full-section p:nth-child(1){\r\n        font-size: 28px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .t1-result-full-section p:nth-child(2){\r\n        font-size: 13px;\r\n    }\r\n    .t1-result-full-section p:nth-child(3){\r\n        font-size: 13px;\r\n    }\r\n\r\n    .t1-result-small-section p:nth-child(1){\r\n        font-size: 28px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .t1-result-small-section p:nth-child(2){\r\n        font-size: 13px;\r\n    }\r\n    .t1-result-small-section p:nth-child(3){\r\n        font-size: 13px;\r\n    }\r\n    .t1-result-leadform .t1-result-cta .prime-action{\r\n        font-size: 12px;\r\n        padding: 15px 25px;\r\n        margin-bottom: 30px;\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .t1-ques-head .help-text{ width: 160px;}\r\n    .t1-social-links li a{\r\n        font-size: 18px;\r\n    }\r\n\r\n    .recom-section .w100 .leadform-outer { padding-left: 0 !important;}\r\n    .recom-section .w100 .leadform-outer h1 {text-align: left; margin-top: 0;}\r\n    .recom-section .w100 .container-temp {text-align: left !important;width: 52%;}\r\n    .recom-section .w100 .leadform-outer .container-temp .prime-action {width: 100% !important;float: left !important;}\r\n    .recom-section .disc-set {width: 76%;  margin-top: 2px;}\r\n    .recom-section .container-temp {text-align: left !important;width: 62%; }\r\n    .recom-section .left-outer { height: auto !important; padding: 25px 0;}\r\n    .recommendation-outer .t1-result-inner {padding: 30px !important; width: 94% !important; padding-bottom: 10px !important;}\r\n    .t1-result-top.recommendation-outer {width: 70% !important;  margin-left: 17%;}\r\n    .t1-result-top {width: 85% !important;}\r\n    .recom-section .leadform-outer {float: left; padding:0 5%;}\r\n    .recom-section .outer-main { height: auto !important;}\r\n    .recom-section .disc-set{ padding-left:0; text-align: left !important;}\r\n    .rec-image-outer {max-width: 90%;  }\r\n     .recommendation-outer .mid-width p {width: 94%; text-align: center;}\r\n     .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){width:100%;}\r\n    .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input{width:98%;}\r\n\r\n\r\n}\r\n@media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {\r\n    .t1-landing-leadform .t1-leadform-field {\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer{\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer input{\r\n        width: 98%;\r\n    }\r\n    /*.pic-selector label.control {\r\n        width: 15vw;\r\n        height: 15vw;\r\n    }*/\r\n\r\n    .recom-section .w100 .container-temp {text-align: left !important;width: 60%;}\r\n    .recom-section .w100 .leadform-outer .container-temp .prime-action {width: 100% !important;float: left !important;}\r\n    .recom-section .disc-set {width: 76%;  margin-top: 2px;}\r\n    .recom-section .container-temp {text-align: left !important; width: 62%;}\r\n    .recom-section .left-outer { height: auto !important; padding: 25px 0;}\r\n    .recommendation-outer .t1-result-inner {padding: 30px !important; width: 94% !important; padding-bottom: 10px !important;}\r\n    .t1-result-top {width: 85% !important;}\r\n    .recom-section .leadform-outer {float: left; padding:0 5%;}\r\n    .recom-section .outer-main { height: auto !important;}\r\n    .recom-section .disc-set{ padding-left:0; text-align: left !important}\r\n    .rec-image-outer {max-width: 90%;  }\r\n    .recommendation-outer .mid-width p {width: 94%; text-align: center;}\r\n    .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){width:100%;}\r\n    .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input{width:98%;}\r\n    \r\n    \r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape){\r\n    .t1-logo a img {\r\n        max-width: 50%;\r\n        max-height: 45%;\r\n    }\r\n    .main-heading {\r\n        font-size: 8vmin;\r\n        margin-bottom: 10px;\r\n\r\n    }\r\n    .sub-heading {\r\n        font-size: 16px;\r\n        margin-bottom: 20px;\r\n        line-height: 20px;\r\n    }\r\n    .t1-landing-leadform .t1-leadform-field{\r\n        margin-left: 10px;\r\n        margin-right: 10px;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer{\r\n        margin-left: 3px;\r\n        margin-right: 3px;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer input {\r\n        border: 2px solid rgba(255,255,255,0.4);\r\n        font-size: 13px;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer input {\r\n        border: 2px solid rgba(255,255,255,0.4);\r\n        font-size: 13px;\r\n    }\r\n    .landing-page-mid button {\r\n        font-family: montserratregular;\r\n        font-size: 14px;\r\n        padding: 10px 40px;\r\n    }\r\n    .landing-page-mid leadform button.prime-action {\r\n        font-family: montserratregular;\r\n        font-size: 14px;\r\n        padding: 10px 40px;\r\n    }\r\n    /*.pic-selector label.control {\r\n        width: 16vw;\r\n        height: 16vw;\r\n    }*/\r\n    /*.question-pic img{\r\n        width: 125px;\r\n        height: 125px;\r\n    }*/\r\n}\r\n\r\n@media (min-width: 1024px) and (max-width: 1365px) {\r\n    .pic-selector{\r\n        width: 32% !important;\r\n        margin-bottom: 1.5% !important;\r\n        margin-right: 0.5% !important;\r\n        margin-left: 0.7% !important;\r\n    }\r\n    .pic-selector label.control{\r\n        width: 100%;\r\n        height: 0;\r\n        padding-bottom: 100%;\r\n        margin: 0;\r\n        display: flex;\r\n    }\r\n    .pic-selector input:checked + .control__indicator span.img-overlay {\r\n        padding-bottom: 100%;\r\n        top: 0px;\r\n    }\r\n    .text-overlay {\r\n        top: 5px;\r\n        padding-bottom: 100%;\r\n    }  \r\n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::before {\r\n        font-size: 5vmin;\r\n        left: 45%;\r\n        top: 5%;\r\n        padding-top: 37%;\r\n        opacity: 1;\r\n    }\r\n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::after {\r\n        font-size: 5vmin;\r\n        left: 45%;\r\n        top: 5%;\r\n        padding-top: 37%;\r\n    }\r\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::after{\r\n        font-size: 5vmin;\r\n        left: 45%;\r\n        top: 5%;\r\n        padding-top: 37%;\r\n    }\r\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::before{\r\n        font-size: 5vmin;\r\n        left: 40%;\r\n        top: 22%;\r\n        padding-top: 37%;\r\n        opacity: 1;\r\n    }\r\n    .t1-social-links li a{\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1024px) and (max-width: 1365px) and (orientation: landscape){\r\n    .t1-logo a img {\r\n        max-width: 50%;\r\n        max-height: 45%;\r\n    }\r\n    .main-heading {\r\n        font-size: 36px;\r\n        margin-bottom: 25px;\r\n    }\r\n    .sub-heading {\r\n        font-size: 16px;\r\n        margin-bottom: 25px;\r\n        line-height: 20px;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer input {\r\n        border: 2px solid rgba(255,255,255,0.4);\r\n        font-size: 13px;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer input {\r\n        border: 2px solid rgba(255,255,255,0.4);\r\n        font-size: 13px;\r\n    }\r\n    .t1-question-slider{\r\n        width: 90%;\r\n    }\r\n    .landing-page-mid button {\r\n        font-size: 14px;\r\n        padding: 10px 40px;\r\n    }\r\n    .landing-page-mid leadform button.prime-action {\r\n        font-size: 14px;\r\n        padding: 10px 40px;\r\n    }\r\n    /*.pic-selector label.control{\r\n        width: 15vw;\r\n        height: 15vw;\r\n    }*/\r\n}\r\n\r\n\r\n@media (min-width: 1680px) and (max-width: 1920px){\r\n    .main-heading{\r\n        font-size: 52px;\r\n        margin-bottom: 25px;\r\n    }\r\n    .sub-heading{\r\n        font-size: 26px;\r\n    }\r\n    .landing-page-mid leadform .t1-leadform-field{\r\n        margin-bottom: 40px;\r\n    }\r\n    .landing-page-mid leadform .input-section .input-outer{\r\n        margin-bottom: 30px;\r\n    }\r\n    /*.question-pic img{\r\n        width: 175px;\r\n    }*/\r\n    .t1-logo a img{\r\n        max-height: 65px;\r\n    }\r\n    \r\n    .pic-selector{\r\n        width: 24% !important;\r\n        margin-bottom: 1.8%;\r\n        margin-right: 0.5%;\r\n        margin-left: 1.5%;\r\n    }\r\n    .pic-selector label.control{\r\n        width: 100%;\r\n        height: 0;\r\n        padding-bottom: 100%;\r\n        margin: 0;\r\n        display: flex;\r\n    }\r\n    .pic-selector input:checked + .control__indicator span.img-overlay {\r\n        padding-bottom: 100%;\r\n        top: 0px;\r\n    }\r\n    .text-overlay {\r\n        top: 5px;\r\n        padding-bottom: 100%;\r\n    }  \r\n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::before {\r\n        font-size: 5vmin;\r\n        left: 40%;\r\n        top: 22%;\r\n        padding-top: 37%;\r\n    }\r\n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::after {\r\n        font-size: 5vmin;\r\n        left: 40%;\r\n        top: 0%;\r\n        padding-top: 37%;\r\n    }\r\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::after{\r\n        font-size: 5vmin;\r\n        left: 40%;\r\n        top: 0%;\r\n        padding-top: 37%;\r\n    }\r\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::before{\r\n        font-size: 5vmin;\r\n        left: 40%;\r\n        top: 22%;\r\n        padding-top: 37%;\r\n    }\r\n    .t1-social-links li a{\r\n        font-size: 22px;\r\n    }\r\n}\r\n"

/***/ },

/***/ 861:
/***/ function(module, exports) {

module.exports = "*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n@font-face {\r\n    font-family: 'montserratbold';\r\n    src: url('../fonts/montserrat-bold-webfont-webfont.woff2') format('woff2'),\r\n         url('../fonts/montserrat-bold-webfont-webfont.woff') format('woff'),\r\n         url('../fonts/montserrat-bold-webfont-webfont.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n\r\n@font-face {\r\n    font-family: 'montserratregular';\r\n    src: url('../fonts/montserrat-regular-webfont-webfont.woff2') format('woff2'),\r\n         url('../fonts/montserrat-regular-webfont-webfont.woff') format('woff'),\r\n         url('../fonts/montserrat-regular-webfont-webfont.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n@font-face {\r\n    font-family: 'montserratlight';\r\n    src: url('../fonts/montserrat-light_0-webfont.woff2') format('woff2'),\r\n         url('../fonts/montserrat-light_0-webfont.woff') format('woff'),\r\n         url('../fonts/montserrat-light_0-webfont.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n@font-face {\r\n    font-family: 'material_iconsregular';\r\n    src: url('../fonts/materialicons-regular-webfont.woff2') format('woff2'),\r\n         url('../fonts/materialicons-regular-webfont.woff') format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n@font-face {\r\n  font-family: 'Material Icons';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(MaterialIcons-Regular.eot);\r\n  src: local('Material Icons'),\r\n       local('materialIcons-Regular'),\r\n       url(../fonts/materialIcons-Regular.woff2) format('woff2'),\r\n       url(../fonts/materialIcons-Regular.woff) format('woff'),\r\n       url(../fonts/materialIcons-Regular.ttf) format('truetype');\r\n}\r\n\r\n.material-icons {\r\n  font-family: 'Material Icons';\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;  /* Preferred icon size */\r\n  display: inline-block;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-wrap: normal;\r\n  white-space: nowrap;\r\n  direction: ltr;\r\n\r\n  /* Support for all WebKit browsers. */\r\n  -webkit-font-smoothing: antialiased;\r\n  /* Support for Safari and Chrome. */\r\n  text-rendering: optimizeLegibility;\r\n\r\n  /* Support for Firefox. */\r\n  -moz-osx-font-smoothing: grayscale;\r\n\r\n  /* Support for IE. */\r\n  font-feature-settings: 'liga';\r\n}\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 14px;\r\n    color: #666e78;\r\n    font-family: montserratregular;\r\n    overflow-x: hidden; /* Prevents horizontal scroll */\r\n}\r\na, input, textarea, button:focus{outline: none;}\r\n.hide{ display: none !important;}\r\n.t1-landing{\r\n    width: 100%;\r\n    height: 100vh;\r\n    max-width: 100%;\r\n    position: relative;\r\n    display: table;\r\n    background: url(../images/main-bg.jpg) no-repeat center center;\r\n    background-size: cover;\r\n}\r\n.t1-landing-inner{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    height: 100%;\r\n    padding-top: 25px;\r\n    padding-bottom: 25px;\r\n    box-shadow: 0 2px 9px 2px rgba(0,0,0,0.4);\r\n}\r\n.t1-overlay{\r\n    background: rgba(0,0,0,0.3);\r\n}\r\n/*.t1-landing-top{\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 40px;\r\n}*/\r\n.t1-logo{\r\n    width: 180px;\r\n    float: left;\r\n}\r\n.t1-logo a{\r\n    float: left;\r\n}\r\n.t1-logo a img{\r\n    max-width: 100%;\r\n    max-height: 50px;\r\n}\r\n.landing-page-mid{\r\n    margin: 0 auto;\r\n    width: 75%;\r\n    text-align: center;\r\n}\r\n.main-heading{\r\n    color: #f7da64;\r\n    font-size: 48px;\r\n    font-family: montserratbold;\r\n    margin-bottom: 15px;\r\n    line-height: normal;\r\n}\r\n.sub-heading{\r\n    color:rgba(247,218,100,0.7);\r\n    font-size: 22px;\r\n    font-family: montserratregular;\r\n    margin-bottom: 30px;\r\n    line-height: normal;\r\n}\r\n.t1-landing-leadform{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    display: inline-block;\r\n}\r\n.t1-landing-leadform .t1-leadform-field{\r\n    display: inline-block;\r\n    width: 40%;\r\n    float: none;\r\n    margin-bottom: 20px;\r\n}\r\n.t1-landing-leadform .t1-leadform-field input{\r\n    float: left;\r\n    width: 88%;\r\n    border:2px solid rgba(255,255,255,0.4);\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-family: montserratregular;\r\n    padding: 10px;\r\n    background: none;\r\n}\r\n.t1-landing-leadform .input-section .input-outer{\r\n    display: inline-block;\r\n    width: 40%;\r\n    float: none;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n}\r\n.t1-landing-leadform .input-section .input-outer input{\r\n    float: left;\r\n    width: 94%;\r\n    border:2px solid rgba(255,255,255,0.4);\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-family: montserratregular;\r\n    padding: 10px;\r\n    background: none;\r\n}\r\n.t1-landing-leadform .input-section .input-outer span {\r\n    float: left;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 48px;\r\n    left: 0px;\r\n    text-align: left;\r\n    padding-left: 2px;\r\n    color: #f44336;\r\n    font-size: 12px;\r\n}\r\n.t1-landing-leadform{\r\n    float: left;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.t1-landing-leadform button.prime-action{\r\n    color: #012435;\r\n    font-size: 16px;\r\n    font-family: montserratbold;\r\n    width: auto;\r\n    padding: 13px 60px;\r\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\r\n    background: rgba(247,218,100,0.9);\r\n    border: none;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    border-radius: 0px;\r\n}\r\n.t1-landing-leadform button.prime-action:hover{\r\n    background: rgba(247,218,100,0.9);\r\n    color: #012435;\r\n}\r\n.t1-button{\r\n    float: left;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.t1-button button{\r\n    color: #012435;\r\n    font-size: 16px;\r\n    font-family: montserratbold;\r\n    width: auto;\r\n    padding: 13px 60px;\r\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\r\n    background: rgba(247,218,100,0.9);\r\n    border: none;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    border-radius: 0px;\r\n}\r\n.t1-button button:hover,.t1-button button:focus{\r\n    background: rgba(247,218,100,0.9);\r\n    color: #012435;\r\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\r\n}\r\n.landing-btn{\r\n    color: #012435;\r\n    font-size: 16px;\r\n    font-family: montserratbold;\r\n    width: auto;\r\n    padding:16px 50px;\r\n    background: rgba(247,218,100,0.9);\r\n    border: none;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n}\r\n.t1-question .t1-overlay{\r\n    /*background: rgba(38,33,33,0.5);*/\r\n    background: rgba(0,0,0,0.3)\r\n}\r\n.t1-landing-bot{\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 40px;\r\n}\r\n.landing-footer-outer{\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 40px;\r\n}\r\n.t1-footerlogo{\r\n    float: right;\r\n    width: auto;\r\n}\r\n.t1-footerlogo p{\r\n    float: left;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    margin-top: 8px;\r\n    margin-right: 5px;\r\n}\r\n.t1-landing-bot .powered-by span{\r\n    float: left;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    margin-top: 8px;\r\n    margin-right: 5px;\r\n    text-shadow: 3px 4px 3px rgba(0,0,0,0.5);\r\n}\r\n.landing-footer-outer .powered-by span{\r\n    float: left;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    margin-top: 10px;\r\n    margin-right: 5px;\r\n    text-shadow: 3px 4px 3px rgba(0,0,0,0.5);\r\n}\r\n.t1-question{\r\n    width: 100%;\r\n    height: 100vh;\r\n    max-width: 100%;\r\n    position: relative;\r\n    display: table;\r\n    background: url(../images/main-bg.jpg) no-repeat center center;\r\n    background-size: cover;\r\n}\r\n.t1-question-mid{\r\n    margin: 0 auto;\r\n    width: 75%;\r\n    text-align: center;\r\n}\r\n.t1-question-resultheading{\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 24px;\r\n    color: #eceeef;\r\n    font-family: montserratlight;\r\n    margin-bottom: 10px;\r\n}\r\n.t1-question-liveresult{\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 36px;\r\n    color: #eceeef;\r\n    font-family: montserratlight;\r\n    margin-bottom: 5px;\r\n}\r\n.t1-question-slider{\r\n    margin: 0 auto;\r\n    width: 86%;\r\n    position: relative;\r\n}\r\n.t1-slider{\r\n    position: relative;\r\n    float: left;\r\n    width: 100%;\r\n    margin-top: 25px;\r\n}\r\n.t1-slider-nav{\r\n\r\n}\r\n.t1-slider-nav a{\r\n    position: absolute;\r\n    top: 44%;\r\n    background: #f3d455;\r\n    color: #232f3f;\r\n    width: 42px;\r\n    height: 42px;\r\n    text-align: center;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.a-disable{\r\n    pointer-events: none;\r\n    opacity:0.3;\r\n}\r\n.t1-slider-nav a i{\r\n    margin-top: 10px;\r\n}\r\n.t1-slider-nav a.prev{\r\n    left: -165px;\r\n}\r\n.t1-slider-nav a.next{\r\n    right: -165px;\r\n}\r\n.t1-slider-nav a.go{\r\n    right: -165px;\r\n}\r\n/*.t1-slider-pagination{\r\n    position: absolute;\r\n    float: left;\r\n    width: 100%;\r\n    text-align: center;\r\n    top: -30px;\r\n}*/\r\n.t1-slider-pagination{\r\n    position: relative;\r\n    float: left;\r\n    width: 100%;\r\n    text-align: center;\r\n    top:0px;\r\n}\r\n.t1-slider-pagination a{\r\n    display: inline-block;\r\n    height: 7px;\r\n    width: 7px;\r\n    border: 1px solid #fff;\r\n    border-radius: 50%;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    cursor: default;\r\n}\r\n.t1-slider-pagination a.active{\r\n    background: #fff;\r\n}\r\n.editor-page-divider{\r\n    margin-bottom: 35px;\r\n}\r\n.t1-slider-question-divider{\r\n    margin-bottom: 40px;\r\n}\r\n.t1-slider-question{\r\n    padding: 40px;\r\n    background: #fff;\r\n    width: 100%;\r\n    float: left;\r\n    box-shadow: 3px 10px 19px 5px rgba(0,0,0,0.4);\r\n}\r\n.t1-question-slider .unslider-nav{\r\n    position: absolute;\r\n    top: -60px;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.t1-question-slider .unslider-nav ol li{\r\n    width: 3px;\r\n    height: 3px;\r\n    border: 1px solid #fff;\r\n}\r\n.t1-question-slider .unslider-arrow\r\n{\r\n    position: absolute;\r\n    left: 20px;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    background: #f3d455;\r\n    width: 42px;\r\n    height: 42px;\r\n    color: #232f3f;\r\n}\r\n.t1-question-slider .unslider-arrow.next\r\n{\r\n    left: auto;\r\n    right: -120px;\r\n    top: 45%;\r\n}\r\n.t1-question-slider .unslider-arrow.next i{\r\n    margin-top: 10px;\r\n}\r\n.t1-question-slider .unslider-arrow.prev\r\n{\r\n    left: auto;\r\n    left: -120px;\r\n    top: 45%;\r\n}\r\n.t1-question-slider .unslider-arrow.prev i{\r\n    margin-top: 10px;\r\n}\r\n.t1-question-slider .unslider-arrow.go\r\n{\r\n    left: auto;\r\n    right: -120px;\r\n    top: 45%;\r\n}\r\n.t1-question-slider .unslider-arrow.go i{\r\n    margin-top: 10px;\r\n}\r\n.question-pic{\r\n    margin-bottom: 25px;\r\n    width: 100%;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n.question-pic img{\r\n    max-width: 100%;\r\n}\r\n.t1-slider-section{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.t1-ques-inner{\r\n    float: left;\r\n    width: 100%;\r\n    text-align: left;\r\n}\r\n.t1-ques-head{\r\n    color: #28324e;\r\n    font-size: 22px;\r\n    font-family: montserratlight;\r\n    margin-bottom: 25px;\r\n}\r\n.t1-ques-component{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.t1-ques-component input.t1-input{\r\n    float: left;\r\n    color: #666e78;\r\n    font-size: 16px;\r\n    border: 1px solid #d9dad3;\r\n    font-family: montserratlight;\r\n    width: 95%;\r\n    padding: 15px;\r\n}\r\n.t1-ques-component .input-section .input-outer{\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n}\r\n.t1-ques-component .input-section .input-outer .section-head\r\n{\r\n    font-size: 20px;\r\n    margin-bottom: 10px;\r\n    font-family: montserratlight;\r\n    color: #666e78;\r\n    width: 100%;\r\n    float: left;\r\n    word-break: break-word;\r\n}\r\n.t1-ques-component .input-section .input-outer span {\r\n    float: left;\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom:-5px;\r\n    left: 0px;\r\n    text-align: left;\r\n    padding-left: 2px;\r\n    color: #f44336;\r\n    font-size: 12px;\r\n}\r\n.t1-ques-component .prime-action{\r\n    color: #012435;\r\n    font-size: 16px;\r\n    font-family: montserratbold;\r\n    width: auto;\r\n    padding: 16px 50px;\r\n    background: rgba(247,218,100,0.9);\r\n    border: none;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    border-radius: 0px;\r\n    display: none;\r\n}\r\n.t1-ques-component .prime-action:hover{\r\n    background: rgba(247,218,100,0.9);\r\n    color: #012435;\r\n    display: none;\r\n}\r\n.pic-selector{\r\n    /*text-align: center;\r\n    float: left !important;\r\n    border: none !important;\r\n    background: none !important;\r\n    width: 23% !important;\r\n    margin-bottom: 1.8%;\r\n    margin-right: 0.5%;\r\n    margin-left: 1.5%;*/\r\n    text-align: center;\r\n    float: left !important;\r\n    border: none !important;\r\n    background: none !important;\r\n    width: 24% !important;\r\n    margin-bottom: 1.5% !important;\r\n    margin-right: 0.5% !important;\r\n    margin-left: 0.5% !important;\r\n}\r\n.t1-ques-component .pic-selector input{\r\n    border: none;\r\n    opacity: 0;\r\n    display: none;\r\n}\r\n.t1-ques-component .section-head div{\r\n    color: #28324e;\r\n    font-size: 22px;\r\n    font-family: montserratlight;\r\n}\r\n.t1-ques-component .input-outer input {\r\n    background-color:transparent;\r\n    /*border:1px solid #d9dad3;*/\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #d9dad3;\r\n    border-radius:0;\r\n    outline:none;\r\n    width:100%;\r\n    font-size:16px;\r\n    margin:0 0 15px 0;\r\n    padding:16px 2%;\r\n    box-shadow:none;\r\n    transition:all 0.3s;\r\n    -moz-box-sizing:border-box;\r\n    -webkit-box-sizing:border-box;\r\n    box-sizing:border-box;\r\n    font-family: montserratlight;\r\n}\r\n.t1-ques-head .requiredAsteric{\r\n    color: #f00;\r\n}\r\n\r\n\r\n\r\n\r\n/* start : radio btns with picture question */\r\n\r\n/* start: xs-img-wrapper */\r\n.pic-selector input{\r\n    margin:0;\r\n    padding:0;\r\n    -webkit-appearance:none;\r\n        -moz-appearance:none;\r\n            appearance:none;\r\n}\r\n\r\n/*.pic-selector-2 input{\r\n    position:absolute;\r\n    z-index:999;\r\n}*/\r\n\r\n.pic-selector input:active +.xs-img-hover{\r\n    /*opacity: .9;*/\r\n    /*border: 2px solid rgba(255,255,255,0.8);*/\r\n}\r\n\r\n.pic-selector input:checked +.xs-img-hover{\r\n    /*-webkit-filter: none;\r\n        -moz-filter: none;\r\n            filter: none;*/\r\n\r\n    /*border: 2px solid rgba(255,255,255,0.8);*/\r\n}\r\n\r\n.pic-selector label.control{\r\n    position: relative;\r\n    cursor:pointer;\r\n    background-size:cover;\r\n    background-repeat:no-repeat;\r\n    background-position: center top;\r\n    border: 2px solid #d9dad3;\r\n    -webkit-transition: all 100ms ease-in;\r\n    -moz-transition: all 100ms ease-in;\r\n    transition: all 100ms ease-in;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    padding: 0px;\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 0;\r\n    padding-bottom: 100%;\r\n    margin: 0;\r\n    display: flex;\r\n\r\n\r\n}\r\n.pic-selector label.control .check-set.control__indicator{\r\n    background: none !important;\r\n    position: initial;\r\n    border: none;\r\n    height: inherit;\r\n    width: inherit;\r\n    left: 0 !important;\r\n    top: 0;\r\n}\r\n.pic-selector label.control .control__indicator{\r\n    background: none !important;\r\n    position: initial;\r\n    border: none;\r\n    height: inherit;\r\n    width: inherit;\r\n    left: 0 !important;\r\n    top: 0;\r\n}\r\n.pic-selector input[type=\"radio\"]:checked + .control__indicator::after {\r\n    font-family: \"Material Icons\";\r\n    content: \"check_circle\";\r\n    position: absolute;\r\n    color: #f3d455;\r\n    font-size: 26px;\r\n    font-weight: normal;\r\n    left: 40%;\r\n    top: 0%;\r\n    padding-top: 37%;\r\n    text-rendering: optimizeLegibility;\r\n    transform: initial;\r\n    border: none;\r\n    background: none;\r\n}\r\n.pic-selector input[type=\"radio\"]:checked + .control__indicator::before {\r\n    font-family: \"Material Icons\";\r\n    content: \"\\f269\";\r\n    position: absolute;\r\n    color: #f3d455;\r\n    font-size: 26px;\r\n    font-weight: normal;\r\n    left: 40%;\r\n    top: 0%;\r\n    padding-top: 37%;\r\n    text-rendering: optimizeLegibility;\r\n    transform: initial;\r\n    border: none;\r\n    background: none;\r\n    opacity: 0;\r\n}\r\n\r\n.pic-selector input[type=\"checkbox\"]:checked + .control__indicator::after {\r\n    font-family: \"Material Icons\";\r\n    content: \"check_circle\";\r\n    position: absolute;\r\n    color: #f3d455;\r\n    font-size: 26px;\r\n    font-weight: normal;\r\n    left: 40%;\r\n    top: 0%;\r\n    padding-top: 37%;\r\n    text-rendering: optimizeLegibility;\r\n    transform: initial;\r\n    border: none;\r\n    background: none;\r\n}\r\n.pic-selector input[type=\"checkbox\"]:checked + .control__indicator::before {\r\n    font-family: \"Material Icons\";\r\n    content: \"\\f269\";\r\n    position: absolute;\r\n    color: #f3d455;\r\n    font-size: 26px;\r\n    font-weight: normal;\r\n    left: 40%;\r\n    top: 22%;\r\n    padding-top: 37%;\r\n    text-rendering: optimizeLegibility;\r\n    transform: initial;\r\n    border: none;\r\n    background: none;\r\n    opacity: 0;\r\n}\r\n.pic-selector label.control .text-overlay span {\r\n    font-size: 12px;\r\n    font-family: montserratlight;\r\n    color: #fff;\r\n    bottom: 4px;\r\n    position: absolute;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    -webkit-line-clamp:3;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n}\r\n.pic-selector label.control span.img-overlay:hover {\r\n    height: 100%;\r\n    width: 100%;\r\n    bottom: 0;\r\n    position: absolute;\r\n    left: 0px;\r\n    background: rgba(0,0,0,0.5);\r\n}\r\n\r\n.pic-selector input:active + .control span.img-overlay {\r\n    background: rgba(0,0,0,0.5);\r\n    float: left;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.pic-selector input:checked + .control__indicator span.img-overlay {\r\n    background: rgba(0,0,0,0.5);\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    padding-bottom: 100%;\r\n    top: 0px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.xs-img-hover{\r\n    position: relative;\r\n    cursor:pointer;\r\n    background-size:cover;\r\n    background-repeat:no-repeat;\r\n    display:inline-block;\r\n    width:150px;\r\n    height:150px;\r\n    border: 2px solid #d9dad3;\r\n    -webkit-transition: all 100ms ease-in;\r\n    -moz-transition: all 100ms ease-in;\r\n    transition: all 100ms ease-in;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.xs-img-hover:hover{\r\n    /*-webkit-filter: brightness(0.5) grayscale(.5) opacity(.9);\r\n        -moz-filter: brightness(0.5) grayscale(.5) opacity(.9);\r\n            filter: brightness(0.5) grayscale(.5) opacity(.9);*/\r\n}\r\n\r\n.pic-selector label.xs-img-hover span.img-overlay:hover {\r\n    /*background: rgba(0,0,0,0.5);\r\n    float: left;\r\n    width: 190px;\r\n    height: 190px;\r\n    position: relative;*/\r\n\r\n    height: 100%;\r\n    width: 100%;\r\n    bottom: 0;\r\n    position: absolute;\r\n    left: 0px;\r\n    background: rgba(0,0,0,0.5);\r\n    transition: all .5s;\r\n}\r\n\r\n.pic-selector input:active +.xs-img-hover span.img-overlay {\r\n    background: rgba(0,0,0,0.5);\r\n    float: left;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.pic-selector input:checked +.xs-img-hover span.img-overlay {\r\n    background: rgba(0,0,0,0.5);\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n.pic-selector input[type=\"radio\"]:checked + label.xs-img-hover::after {\r\n    font-family: \"Material Icons\";\r\n    content: \"check_circle\";\r\n    position: absolute;\r\n    color: #f3d455;\r\n    font-size: 26px;\r\n    font-weight: normal;\r\n    top: 40%;\r\n    left: 40%;\r\n    text-rendering: optimizeLegibility;\r\n}\r\n.pic-selector input[type=\"radio\"]:checked + label.xs-img-hover::before {\r\n    font-family: \"Material Icons\";\r\n    content: \"\\f269\";\r\n    position: absolute;\r\n    color: #f3d455;\r\n    font-size: 26px;\r\n    font-weight: normal;\r\n    top: 40%;\r\n    left: 40%;\r\n    text-rendering: optimizeLegibility;\r\n}\r\n\r\n.pic-selector input[type=\"checkbox\"]:checked + label.xs-img-hover::after {\r\n    font-family: \"Material Icons\";\r\n    content: \"check_circle\";\r\n    position: absolute;\r\n    color: #f3d455;\r\n    font-size: 26px;\r\n    font-weight: normal;\r\n    top: 40%;\r\n    left: 40%;\r\n    text-rendering: optimizeLegibility;\r\n}\r\n.pic-selector input[type=\"checkbox\"]:checked + label.xs-img-hover::before {\r\n    font-family: \"Material Icons\";\r\n    content: \"\\f269\";\r\n    position: absolute;\r\n    color: #f3d455;\r\n    font-size: 26px;\r\n    font-weight: normal;\r\n    top: 40%;\r\n    left: 40%;\r\n    text-rendering: optimizeLegibility;\r\n}\r\n\r\n.text-overlay {\r\n    /*background: url(../img/text-overlay.png) repeat-x;*/\r\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000fff+0,000000+100&0+0,1+100 */\r\n    background: -moz-linear-gradient(top,  rgba(0,15,255,0) 0%, rgba(0,0,0,0.5) 100%); /* FF3.6-15 */\r\n    background: -webkit-linear-gradient(top,  rgba(0,15,255,0) 0%,rgba(0,0,0,0.5) 100%); /* Chrome10-25,Safari5.1-6 */\r\n    background: linear-gradient(to bottom,  rgba(0,15,255,0) 0%,rgba(0,0,0,0.5) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000fff', endColorstr='#000000',GradientType=0 ); /* IE6-9 */\r\n\r\n    height: 70px;\r\n    width: 100%;\r\n    position: absolute;\r\n    left: 0px;\r\n    bottom:0px;\r\n    text-align: left;\r\n}\r\n\r\n.pic-selector label.xs-img-hover .text-overlay span {\r\n    font-size: 12px;\r\n    font-family: montserratlight;\r\n    color: #fff;\r\n    bottom: 2px;\r\n    position: absolute;\r\n    padding-left: 5px;\r\n    -webkit-line-clamp:3;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n}\r\n\r\n.images-wrap {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n\r\n/* start: xs radio images */\r\n.img1{\r\n    background: url(\"../images/q1.jpg\") no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.img2{\r\n    background: url(\"../images/q2.jpg\") no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.img3{\r\n    background: url(\"../images/q3.jpg\") no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.img4{\r\n    background: url(\"../images/q4.jpg\") no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.img5{\r\n    background: url(\"../images/q5.jpg\") no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.img6{\r\n    background: url(\"../images/q6.jpg\") no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.img7{\r\n    background: url(\"../images/q7.jpg\") no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.img8{\r\n    background: url(\"../images/q8.jpg\") no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n/* end: xs radio images */\r\n\r\n/* end: xs-img-wrapper */\r\n\r\n.t1-result{\r\n    width: 100%;\r\n    height: 100vh;\r\n    max-width: 100%;\r\n    display: table;\r\n    position: relative;\r\n    background: url(../images/main-bg.jpg) no-repeat center center;\r\n    background-size: cover;\r\n}\r\n.t1-result-main{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    height: 100%;\r\n}\r\n.t1-result .t1-overlay{\r\n    background: rgba(0,0,0,0.3);\r\n}\r\n.t1-result-top{\r\n    float: left;\r\n    width: 70%;\r\n    margin-left: 10%;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n.t1-result-topheading{\r\n    font-size: 24px;\r\n    color: #fff;\r\n    font-family: montserratlight;\r\n    float: left;\r\n    width: 80%;\r\n    margin-bottom: 25px;\r\n}\r\n.t1-result-topheading p{\r\n    font-size: 24px;\r\n    color: #fff;\r\n    font-family: montserratlight;\r\n    float: left;\r\n    width: 80%;\r\n    margin-bottom: 0px;\r\n}\r\n.t1-result-inner{\r\n    float: left;\r\n    width: 95%;\r\n    background: #fff;\r\n    min-height: 400px;\r\n    padding: 50px;\r\n    padding-bottom: 30px;\r\n    box-shadow: 0 2px 9px 2px rgba(0,0,0,0.4);\r\n}\r\n\r\n\r\n\r\n.t1-result-small-section{\r\n    /*float: left;*/\r\n    display: inline-flex;\r\n    width: 40%;\r\n    margin-top: 40px;\r\n    margin-right: 50px;\r\n}\r\n.t1-result-small-container{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.t1-result-small-section p:nth-child(1){\r\n    float: left;\r\n    width: 100%;\r\n    color: #28324e;\r\n    font-size: 30px;\r\n    font-family: montserratlight;\r\n    margin-bottom: 15px;\r\n}\r\n.t1-result-small-section p:nth-child(2){\r\n    float: left;\r\n    width: 100%;\r\n    color: #666e78;\r\n    font-size: 14px;\r\n    font-family: montserratregular;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0px;\r\n}\r\n.t1-result-small-section p:nth-child(3){\r\n    float: left;\r\n    width: 100%;\r\n    color: #666e78;\r\n    font-size: 14px;\r\n    font-family: montserratlight;\r\n    margin-bottom: 0px;\r\n}\r\n.t1-result-sm-value{\r\n    float: left;\r\n    width: 100%;\r\n    color: #28324e;\r\n    font-size: 30px;\r\n    font-family: montserratlight;\r\n    margin-bottom: 10px;\r\n}\r\n.t1-result-sm-heading{\r\n    float: left;\r\n    width: 100%;\r\n    color: #666e78;\r\n    font-size: 14px;\r\n    font-family: montserratregular;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0px;\r\n}\r\n.t1-result-sm-subheading{\r\n    float: left;\r\n    width: 100%;\r\n    color: #666e78;\r\n    font-size: 14px;\r\n    font-family: montserratlight;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n\r\n\r\n\r\n.t1-result-half-container{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n.t1-result-full-section{\r\n    float: left;\r\n    width: 100%;\r\n    margin: 0px;\r\n}\r\n.t1-result-full-container{\r\n    float: left;\r\n    width: 40%;\r\n}\r\n.t1-result-full-section p:nth-child(1){\r\n    float: left;\r\n    width: 100%;\r\n    color: #28324e;\r\n    font-size: 30px;\r\n    font-family: montserratlight;\r\n    margin-bottom: 15px;\r\n}\r\n.t1-result-full-section p:nth-child(2){\r\n    float: left;\r\n    width: 100%;\r\n    color: #666e78;\r\n    font-size: 14px;\r\n    font-family: montserratregular;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0px;\r\n}\r\n.t1-result-full-section p:nth-child(3){\r\n    float: left;\r\n    width: 100%;\r\n    color: #666e78;\r\n    font-size: 14px;\r\n    font-family: montserratlight;\r\n    margin-bottom: 0px;\r\n}\r\n.t1-result-value{\r\n    float: left;\r\n    width: 100%;\r\n    color: #28324e;\r\n    font-size: 30px;\r\n    font-family: montserratlight;\r\n    margin-bottom: 15px;\r\n}\r\n.t1-result-heading{\r\n    float: left;\r\n    width: 100%;\r\n    color: #666e78;\r\n    font-size: 14px;\r\n    font-family: montserratregular;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0px;\r\n}\r\n.t1-result-subheading{\r\n    float: left;\r\n    width: 100%;\r\n    color: #666e78;\r\n    font-size: 14px;\r\n    font-family: montserratlight;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.t1-result-leadform{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.t1-result-leadform .lead-heading-temp1{\r\n    color: #666e78;\r\n    font-size: 16px;\r\n    font-family: montserratregular;\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 25px;\r\n    margin-top: 40px;\r\n    text-align: left;\r\n}\r\n.t1-result-leadform-heading{\r\n    color:#666e78;\r\n    font-size: 16px;\r\n    font-family: montserratregular;\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 25px;\r\n    margin-top: 40px;\r\n}\r\n.t1-result-leadform .input-section{\r\n    float: left;\r\n    width: 50%;\r\n}\r\n.t1-result-leadform-inner{\r\n    float: left;\r\n    width: 50%;\r\n}\r\n.t1-result-leadform .input-outer{\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 40px;\r\n    position: relative;\r\n}\r\n.t1-leadform-field{\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 40px;\r\n}\r\n.t1-result-leadform .input-outer input{\r\n    float: left;\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom:2px solid rgba(40,50,58,0.4);\r\n    color: #28324e;\r\n    font-size: 16px;\r\n    font-family: montserratregular;\r\n    padding-bottom: 5px;\r\n    padding-top: 5px;\r\n}\r\n.t1-result-leadform .input-outer span\r\n{\r\n    float: left;\r\n    width: 100%;\r\n    text-align: left;\r\n    padding-left: 20px;\r\n    color: #f44336;\r\n    font-size: 12px;\r\n    bottom: -21px;\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: -20px;\r\n}\r\n.t1-result-leadform-inner input{\r\n    float: left;\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom:2px solid rgba(40,50,58,0.4);\r\n    color: #28324e;\r\n    font-size: 16px;\r\n    font-family: montserratregular;\r\n    padding-bottom: 5px;\r\n    padding-top: 5px;\r\n}\r\n.t1-result-leadform .container-temp {\r\n    float: left;\r\n    width: 100%;\r\n    text-align: left;\r\n}\r\n.t1-leadform-btnoutr{\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n.t1-result-cta{\r\n    float: left;\r\n    width: 100%;\r\n    margin-top: 20px;\r\n}\r\n.t1-result-cta .text-center{ text-align: left !important}\r\n.t1-result-leadform .prime-action\r\n{\r\n    border: none;\r\n    background: #012435;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-family: montserratregular;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    padding: 15px 35px;\r\n    cursor: pointer;\r\n    border-radius:0px;\r\n    margin-bottom: 25px;\r\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\r\n}\r\n.t1-result-leadform .prime-action:hover\r\n{\r\n    background: #012435;\r\n    color: #ffffff;\r\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\r\n}\r\n\r\n.t1-result-leadform .t1-result-cta .prime-action\r\n{\r\n    border: none;\r\n    background: #012435;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-family: montserratregular;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    padding: 15px 35px;\r\n    cursor: pointer;\r\n    border-radius:0px;\r\n    margin-bottom: 40px;\r\n    margin-top: 20px;\r\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\r\n}\r\n.t1-result-leadform .t1-result-cta .prime-action:hover\r\n{\r\n    background: #012435;\r\n    color: #ffffff;\r\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\r\n}\r\n.t1-leadform-btn{\r\n    border: none;\r\n    background: #012435;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-family: montserratregular;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    padding: 15px 35px;\r\n    cursor: pointer;\r\n}\r\n.t1-result-disclaimer{\r\n    float: left;\r\n    width: 64%;\r\n    color: #012435;\r\n    font-size: 12px;\r\n    font-family: montserratlight;\r\n    margin-bottom: 5px;\r\n}\r\n.t1-social-links{\r\n    float: right;\r\n    width: auto;\r\n    list-style: none;\r\n}\r\n.t1-social-links li{\r\n    float: left;\r\n    width: auto;\r\n}\r\n.t1-social-links li a{\r\n    float: left;\r\n    width: auto;\r\n    font-size: 20px;\r\n    margin-left: 10px;\r\n    color: rgba(40,50,78,0.7);\r\n}\r\n.t1-social-links li p{\r\n    float: left;\r\n    width: auto;\r\n    font-size: 12px;\r\n    font-family: montserratlight;\r\n    margin-left: 10px;\r\n    color: rgba(40,50,78,0.7);\r\n    line-height: 25px;\r\n}\r\n\r\n\r\n/* color style css */\r\n.cp1 .page_0.t1-landing { background-color: #012435 !important;}\r\n.cp1 .page_1 .t1-question { background-color: #012435 !important;}\r\n.cp1 .page_2.t1-result { background-color: #012435 !important;}\r\n.cp1 .check-comp .control input:checked ~ .control__indicator{background:#f3d455;}\r\n.cp1 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #f3d455;}\r\n.cp1 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#f3d455;}\r\n.cp1 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#f3d455;}\r\n.cp1 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #f3d455;}\r\n.cp1 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp1 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp1 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#f3d455;}\r\n.cp1 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp1 .check-comp .control--radio .control__indicator.icon-set i{color:#f3d455;}\r\n.cp1 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f3d455;border:3px solid #fff;}\r\n.cp1 .range-slider .irs-bar-edge {border: 1px solid #f3d455; border-right: 0; background: #f3d455;}\r\n.cp1 .range-slider .irs-bar {border-top: 1px solid #f3d455;border-bottom: 1px solid #f3d455; background: #f3d455;}\r\n.cp1 .range-slider .irs-single { background: #f3d455; font-family: montserratregular;}\r\n.cp1 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n\r\n\r\n\r\n\r\n.cp2 .page_0.t1-landing { background-color: #404948 !important;}\r\n.cp2 .page_1 .t1-question { background-color: #404948 !important;}\r\n.cp2 .page_2.t1-result { background-color: #404948 !important;}\r\n.cp2 .main-heading{color:#fff;}\r\n.cp2 .sub-heading{ color: rgba(255,255,255,0.7);}\r\n.cp2 .t1-button button{ background:#EF2158; color: #fff;}\r\n.cp2 .t1-button button:hover,.cp2 .t1-button button:focus{ background: rgba(239,33,88,0.8); color: #fff;}\r\n.cp2 .t1-landing-leadform button.prime-action{ background:#EF2158; color: #fff;}\r\n.cp2 .t1-landing-leadform button.prime-action:hover{ background: rgba(239,33,88,0.8); color: #fff;}\r\n.cp2 .check-comp .control input:checked ~ .control__indicator{background:#EF2158;}\r\n.cp2 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #EF2158;}\r\n.cp2 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#EF2158;}\r\n.cp2 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#EF2158;}\r\n.cp2 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #EF2158;}\r\n.cp2 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp2 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp2 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#EF2158;}\r\n.cp2 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp2 .check-comp .control--radio .control__indicator.icon-set i{color:#EF2158;}\r\n.cp2 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#EF2158;border:3px solid #fff;}\r\n.cp2 .range-slider .irs-bar-edge {border: 1px solid #EF2158; border-right: 0; background: #EF2158;}\r\n.cp2 .range-slider .irs-bar {border-top: 1px solid #EF2158;border-bottom: 1px solid #EF2158; background: #EF2158;}\r\n.cp2 .range-slider .irs-single { background: #EF2158; font-family: montserratregular;}\r\n.cp2 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.cp2 .t1-slider-nav a{ background: #EF2158; color:#fff;}\r\n.cp2 .t1-result-leadform .prime-action{background: #404948 ;}\r\n.cp2 .t1-result-leadform .t1-result-cta .prime-action:hover{background: #404948 ;}\r\n\r\n\r\n\r\n\r\n.cp3 .page_0.t1-landing { background-color: #09141f  !important;}\r\n.cp3 .page_1 .t1-question { background-color: #09141f !important;}\r\n.cp3 .page_2.t1-result { background-color: #09141f  !important;}\r\n.cp3 .main-heading{color:#fff;}\r\n.cp3 .sub-heading{ color: rgba(255,255,255,0.7);}\r\n.cp3 .t1-button button{ background:#0079c1; color: #fff;}\r\n.cp3 .t1-button button:hover,.cp2 .t1-button button:focus{ background: rgba(0,121,193,0.8); color: #fff;}\r\n.cp3 .t1-landing-leadform button.prime-action{ background:#0079c1; color: #fff;}\r\n.cp3 .t1-landing-leadform button.prime-action:hover{ background: rgba(0,121,193,0.8); color: #fff;}\r\n.cp3 .check-comp .control input:checked ~ .control__indicator{background:#0079c1;}\r\n.cp3 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #0079c1;}\r\n.cp3 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#0079c1;}\r\n.cp3 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#0079c1;}\r\n.cp3 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #0079c1;}\r\n.cp3 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp3 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp3 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#0079c1;}\r\n.cp3 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp3 .check-comp .control--radio .control__indicator.icon-set i{color:#0079c1;}\r\n.cp3 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#0079c1;border:3px solid #fff;}\r\n.cp3 .range-slider .irs-bar-edge {border: 1px solid #0079c1; border-right: 0; background: #0079c1;}\r\n.cp3 .range-slider .irs-bar {border-top: 1px solid #0079c1;border-bottom: 1px solid #0079c1; background: #0079c1;}\r\n.cp3 .range-slider .irs-single { background: #0079c1; font-family: montserratregular;}\r\n.cp3 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.cp3 .t1-slider-nav a{ background: #0079c1; color:#fff; }\r\n.cp3 .t1-result-leadform .prime-action{background: #09141f;}\r\n.cp3 .t1-result-leadform .t1-result-cta .prime-action:hover{background: #09141f ;}\r\n\r\n\r\n\r\n.cp4 .page_0.t1-landing { background-color: #012435 !important;}\r\n.cp4 .page_1 .t1-question { background-color: #012435 !important;}\r\n.cp4 .page_2.t1-result { background-color: #012435 !important;}\r\n.cp4 .main-heading{color:#fff;}\r\n.cp4 .sub-heading{ color: rgba(255,255,255,0.7);}\r\n.cp4 .t1-button button{ background:#678D29; color: #fff;}\r\n.cp4 .t1-button button:hover,.cp2 .t1-button button:focus{ background: rgba(103,141,41,0.8); color: #fff;}\r\n.cp4 .t1-landing-leadform button.prime-action{ background:#678D29 ; color: #fff;}\r\n.cp4 .t1-landing-leadform button.prime-action:hover{ background: rgba(103,141,41,0.8); color: #fff;}\r\n.cp4 .check-comp .control input:checked ~ .control__indicator{background:#678D29 ;}\r\n.cp4 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #678D29 ;}\r\n.cp4 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#678D29 ;}\r\n.cp4 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#678D29 ;}\r\n.cp4 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #678D29 ;}\r\n.cp4 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp4 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp4 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#678D29 ;}\r\n.cp4 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp4 .check-comp .control--radio .control__indicator.icon-set i{color:#678D29 ;}\r\n.cp4 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#678D29 ;border:3px solid #fff;}\r\n.cp4 .range-slider .irs-bar-edge {border: 1px solid #678D29 ; border-right: 0; background: #678D29 ;}\r\n.cp4 .range-slider .irs-bar {border-top: 1px solid #678D29 ;border-bottom: 1px solid #678D29 ; background: #678D29 ;}\r\n.cp4 .range-slider .irs-single { background: #678D29 ; font-family: montserratregular;}\r\n.cp4 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.cp4 .t1-slider-nav a{ background: #678D29; color:#fff;}\r\n.cp4 .t1-result-leadform .prime-action{background: #012435;}\r\n.cp4 .t1-result-leadform .t1-result-cta .prime-action:hover{background: #012435 ;}\r\n\r\n\r\n\r\n.cp5 .page_0.t1-landing { background-color: #09141f  !important;}\r\n.cp5 .page_1 .t1-question { background-color: #09141f  !important;}\r\n.cp5 .page_2.t1-result { background-color: #09141f  !important;}\r\n.cp5 .main-heading{color:#fff;}\r\n.cp5 .sub-heading{ color: rgba(255,255,255,0.7);}\r\n.cp5 .t1-button button{ background:#17438B; color: #fff;}\r\n.cp5 .t1-button button:hover,.cp2 .t1-button button:focus{ background: rgba(23,67,139,0.8); color: #fff;}\r\n.cp5 .t1-landing-leadform button.prime-action{ background:#17438B  ; color: #fff;}\r\n.cp5 .t1-landing-leadform button.prime-action:hover{ background: rgba(23,67,139,0.8); color: #fff;}\r\n.cp5 .check-comp .control input:checked ~ .control__indicator{background:#17438B  ;}\r\n.cp5 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #17438B  ;}\r\n.cp5 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#17438B  ;}\r\n.cp5 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#17438B  ;}\r\n.cp5 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #17438B  ;}\r\n.cp5 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp5 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp5 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#17438B  ;}\r\n.cp5 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp5 .check-comp .control--radio .control__indicator.icon-set i{color:#17438B  ;}\r\n.cp5 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#17438B  ;border:3px solid #fff;}\r\n.cp5 .range-slider .irs-bar-edge {border: 1px solid #17438B  ; border-right: 0; background: #17438B  ;}\r\n.cp5 .range-slider .irs-bar {border-top: 1px solid #17438B  ;border-bottom: 1px solid #17438B  ; background: #17438B  ;}\r\n.cp5 .range-slider .irs-single { background: #17438B  ; font-family: montserratregular;}\r\n.cp5 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.cp5 .t1-slider-nav a{ background: #17438B; color:#fff;}\r\n.cp5 .t1-result-leadform .prime-action{background: #09141f;}\r\n.cp5 .t1-result-leadform .t1-result-cta .prime-action:hover{background: #09141f ;}\r\n\r\n\r\n\r\n\r\n\r\n/*New Checkbox Style  Control*/\r\n.checkbox-outer-base{border:1px solid #d9dad3;border-bottom:0px;font-family:montserratlight;width:100%;float:left;padding: 1px;}\r\n.checkbox-outer-base:last-child{border:1px solid #d9dad3;}\r\n.checkbox-outer-base:hover{background:#f1f3f3;}\r\n.checkbox-outer-base.active{background:#f1f3f3;}\r\n.checkbox-outer{border:1px solid #d9dad3;border-bottom:0;font-family:montserratlight;width:100%;float:left;}\r\n.checkbox-outer:last-child{border:1px solid #d9dad3;}\r\n.checkbox-outer-base:last-child:hover{background:#f1f3f3;}\r\n.checkbox-outer-base:last-child.active {border: 1px solid #d9dad3 !important;}\r\n.checkbox-outer:hover{background:#f1f3f3;}\r\n.checkbox-outer.active,.radio-outer.active{background:#f1f3f3;}\r\n.control__indicator.check-set{left:16px!important;border:2px solid #f7da64;}\r\n.control { display: block; position: relative; padding-left: 30px; cursor: pointer; font-size: 16px; font-weight: 500;}\r\n.control--checkbox{padding:20px 55px;}\r\n.question-components input{background-color:transparent;border:1px solid #d9dad3;border-radius:0;outline:none;width:100%;font-size:16px;margin:0 0 15px 0;padding:16px 2%;box-shadow:none;transition:all 0.3s;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}\r\n.control input { position: absolute; z-index: -1; opacity: 0; width: auto;}\r\n.control--checkbox .control__indicator:after{left:6px;top:1px;width:5px;height:11px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg);}\r\n.check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#f7da64;}\r\n.check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#f7da64;}\r\n.check-comp .checkbox-outer .control--checkbox .control__indicator:after{border:none;}\r\n.check-comp .checkbox-outer .control--checkbox{padding:20px 50px;}\r\n\r\n.checkbox-outer-base.green .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#000000;}\r\n\r\n/*New Radio Style   Control*/\r\n.radio-outer{border:1px solid #d9dad3;border-bottom: 0;font-family:montserratlight;width:100%;float:left;margin-bottom: 2px; margin-top: -3px; margin-left: -1px; padding: 1px;}\r\n.radio-outer:last-child{border:1px solid #d9dad3 !important; -webkit-box-sizing: border-box;\r\n      -moz-box-sizing: border-box;\r\n      box-sizing: border-box;\r\n}\r\n.radio-outer:hover{background:#f1f3f3;}\r\n.lable-style{padding:20px 30px;margin-left:22px;}\r\n.control--radio .control__indicator{border-radius:50%;}\r\n.control input:checked ~ .control__indicator{background:#f7da64;}\r\n.control__indicator:after{content:'';position:absolute;display:none;}\r\n.control input:checked ~ .control__indicator:after{display:block;}\r\n.control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f7da64;border:3px solid #fff;}\r\n.control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#f7da64;}\r\n.control--radio .control__indicator.icon-set:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:none;border:none;}\r\n.control input:checked ~ .control__indicator.icon-set{background:none;}\r\n\r\n\r\n.slider-set{ float: left; width:100%; margin-top: 6px;}\r\n.range-slider {text-align: center;}\r\n.range-slider .well1 { width: 100%; float: left;}\r\n.range-slider .irs-slider {top: 29px;width: 20px; height: 20px;}\r\n.range-slider .irs-bar-edge {border: 1px solid #f7da64; border-right: 0; background: #f7da64;}\r\n.range-slider .irs-bar {border-top: 1px solid #f7da64;border-bottom: 1px solid #f7da64; background: #f7da64;}\r\n.range-slider .irs-single { background: #f7da64; font-family: montserratlight; border-radius:8px !important; padding: 1px 14px  !important;}\r\n.range-slider .irs-min, .irs-max{font-family: montserratregular; }\r\n\r\n\r\n.input-field { position: relative;  max-height: 54px; float: left; width: 100%; font-family: montserratlight;}\r\n.t1-question .question-components input {color: #666e78;}\r\n\r\n\r\n.t1-question .question-components .check-comp label {\r\n    margin-bottom: 0;\r\n    min-height: 62px;\r\n    color: #666e78;\r\n}\r\n\r\n\r\n.t1-ques-head .help-outer { width: 23px; position: relative; display: inline-block; top: 4px; padding-left: 5px; cursor: pointer;}\r\n.t1-ques-head .help-text {display: none;\r\n    width: 250px;\r\n    background: #61696c;\r\n    border: 1px solid #61696c;\r\n    padding: 12px;\r\n    left: -50px;\r\n    font-size: 14px;\r\n    position: absolute;\r\n    color: #fff;\r\n    line-height: 18px;\r\n    font-family: montserratlight;\r\n    -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);\r\n    -moz-box-shadow: 3px 3px 10px 0px rgba(224, 221, 224, 1);\r\n    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);\r\n    z-index: 9;\r\n}\r\n.t1-ques-head i {color: #dcdddf; font-size: 24px;margin-top: 4px;}\r\n.t1-ques-head i:hover + .help-text { display: block !important; z-index: 99; }\r\n\r\n.card-sec-wrapper{\r\n  float: left;\r\n  width:100%;\r\n  position: relative;\r\n}\r\n\r\n\r\n/* one temp and temp 2 css */\r\n.page_0 logo header.landing-page-header{\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 40px;\r\n}\r\n.page_0 logo{\r\n    width: 180px;\r\n}\r\n.landing-page-mid leadform .input-section .input-outer {\r\n    display: inline-block;\r\n    width: 40%;\r\n    float: none;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n}\r\n.landing-page-mid leadform .input-section .input-outer input {\r\n    float: left;\r\n    width: 94%;\r\n    border: 2px solid rgba(255,255,255,0.4);\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-family: montserratregular;\r\n    padding: 10px;\r\n    background: none;\r\n}\r\n.landing-page-mid leadform .input-section .input-outer span {\r\n    float: left;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 48px;\r\n    left: 0px;\r\n    text-align: left;\r\n    padding-left: 2px;\r\n    color: #f44336;\r\n    font-size: 12px;\r\n}\r\n.landing-page-mid button {\r\n    color: #012435;\r\n    font-size: 16px;\r\n    font-family: montserratregular;\r\n    width: auto;\r\n    padding: 13px 60px;\r\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\r\n    background: rgba(247,218,100,0.9);\r\n    border: none;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    border-radius: 0px;\r\n}\r\n.landing-page-mid button:hover,.landing-page-mid button:focus{\r\n    background: rgba(247,218,100,0.9);\r\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\r\n    color: #012435;\r\n}\r\n.landing-page-mid leadform button.prime-action {\r\n    color: #012435;\r\n    font-size: 16px;\r\n    font-family: montserratregular;\r\n    width: auto;\r\n    padding: 13px 60px;\r\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\r\n    background: rgba(247,218,100,0.9);\r\n    border: none;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    border-radius: 0px;\r\n}\r\n.landing-page-mid leadform button.prime-action:hover,.landing-page-mid leadform button.prime-action:focus {\r\n    background: rgba(247,218,100,0.9);\r\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\r\n    color: #012435;\r\n}\r\n.page_2 click-button .text-center {\r\n    text-align: left !important;\r\n}\r\n.page_2 .prime-action {\r\n    border: none;\r\n    background: #012435;\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n    font-family: montserratregular;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    padding: 15px 35px;\r\n    cursor: pointer;\r\n    border-radius: 0px;\r\n    margin-bottom: 40px;\r\n    margin-top: 40px;\r\n}\r\n.page_2 form .prime-action {\r\n    margin-bottom: 40px;\r\n    margin-top: 0px;\r\n}\r\n\r\n\r\n\r\n/*recommendation css*/\r\n.w100{ width:100% !important;}\r\n.recom-section{ background: #fff;  float: left; width:100%; }\r\n.recommendation-outer .mid-width p {font-size: 24px;color: #fff; font-family: montserratlight; float: left; width: 80%; margin-bottom: 25px;}\r\n.recom-section .left-sec{ display: table; width: 100%;}\r\n.recom-section .left-outer{display: table-cell; vertical-align: middle; text-align: center;}\r\n.rec-image-outer{margin: 0 auto; max-width: 78%; max-height: 420px; overflow: hidden; text-align: center; box-shadow: 8px 9px 7px 2px #d1d1d1; min-width: 200px; display: inline-block; }\r\n.rec-image-outer img{width: 100%; }\r\n.recom-section .lead-heading-temp1{ background: none; text-align: left; padding-left:0;  color:#666e78; font-size: 16px; padding-top:0; margin-top:10px;}\r\n.recom-section .container-temp{ text-align: left !important; width:100%;}\r\n.recom-section .w100 .container-temp{ text-align: left !important; width:70%;}\r\n.recom-section .outer-main {display: table; width: 100%;}\r\n.recom-section .leadform-outer .prime-action { min-width:70%; float: left; margin-bottom: 10px; margin-top: 5px; }\r\n.recom-section .leadform-outer .container-temp .prime-action { width:98%; margin-top: 15px;}\r\n.recom-section .leadform-outer {float: none; background: none; margin-bottom:0; display: table-cell; vertical-align: middle;}\r\n.recom-section .leadform-outer h1{ display: inline-block; width:100%; word-break: break-word; float: left; color: #28324e;font-size: 30px;font-family: montserratlight; margin-bottom: 15px; margin-top: 0;}\r\n.recom-section .leadform-outer h4{ display: inline-block; width:100%; text-transform: uppercase; margin-bottom: 0px; font-family:montserratregular;  font-size: 16px; }\r\n.recom-section .leadform-outer h5{ display: inline-block; width:100%;  margin-bottom: 0; color:#666e78; font-family:montserratlight; font-size: 14px; line-height: 24px; }\r\n.recom-section .w100 .leadform-outer h1 { text-align: left; padding:0;}\r\n.recom-section .w100 .leadform-outer h5 {text-align: left;padding:0;}\r\n.recom-section .w100 .lead-heading-temp1{text-align: left; width: 98%; padding-bottom: 0; font-size: 16px;}\r\n.recom-section .w100 .cta-outer .input-section .input-outer {float: left; width: 100%; position: relative;}\r\n.recom-section .w100 .leadform-outer .container-temp .prime-action{ width:60%; float: left !important;}\r\n.recom-section .w100 .leadform-outer .prime-action{ width:auto; float: none !important;}\r\n.result-centre-outer .recom-section .w100  .cta-outer .input-section .input-outer span{    float: left; width: 100%;text-align: left;padding-left: 20px;color: #f44336;font-size: 12px;bottom: -1px !important;position: absolute;z-index: 1; left: 10px !important;}\r\n.result-centre-outer .recom-section .cta-outer .input-section .input-outer span{    float: left; width: 100%;text-align: left;padding-left: 20px;color: #f44336;font-size: 12px;bottom: -4px !important;position: absolute;z-index: 1; left: -17px !important;}\r\n.recom-section .t1-result-leadform .input-section { float: left; width: 97%;}\r\n.recom-section .w100 .leadform-outer .prime-action { min-width:50%; float: left;}\r\n.recom-section .disc-set{float: left; width: 80%; margin-top: 15px; color: #012435;font-size: 12px; font-family: montserratlight;  margin-bottom: 5px; padding-left:30px;}\r\n.recommendation-outer .t1-result-inner {float: left;width: 95%;background: #fff; min-height: inherit;padding: 30px;padding-bottom: 10px;box-shadow: 0 2px 9px 2px rgba(0,0,0,0.4);padding-left: 0;}\r\n.recom-section .w100 .leadform-outer{ padding-left:50px;}\r\n.recom-section .input-outer {float: left; width: 100%; margin-bottom: 30px; position: relative;}\r\n.recom-section .t1-result-cta {float: left; width: 100%; margin-top: 10px;}\r\n\r\n\r\n\r\n.pic-selector label:hover .check-set span.img-overlay {\r\n    height: 100%;\r\n    width: 100%;\r\n    bottom: 0;\r\n    position: absolute;\r\n    left: 0px;\r\n    background: rgba(0,0,0,0.5);\r\n    transition: all .5s;\r\n}\r\n\r\n.pic-selector label:hover span.img-overlay{\r\n    height: 100%;\r\n    width: 100%;\r\n    bottom: 0;\r\n    position: absolute;\r\n    left: 0px;\r\n    background: rgba(0,0,0,0.5);\r\n    transition: all .5s;\r\n}\r\n\r\n\r\n\r\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){width:80%;}\r\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input{width:97%;}"

/***/ },

/***/ 862:
/***/ function(module, exports) {

module.exports = "/*!\r\n * Datepicker for Bootstrap v1.6.1 (https://github.com/eternicode/bootstrap-datepicker)\r\n *\r\n * Copyright 2012 Stefan Petre\r\n * Improvements by Andrew Rowls\r\n * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)\r\n */\r\n.datepicker{padding:4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;direction:ltr}.datepicker-inline{width:220px}.datepicker.datepicker-rtl{direction:rtl}.datepicker.datepicker-rtl table tr td span{float:right}.datepicker-dropdown{top:0;left:0}.datepicker-dropdown:before{content:'';display:inline-block;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #999;border-top:0;border-bottom-color:rgba(0,0,0,.2);position:absolute}.datepicker-dropdown:after{content:'';display:inline-block;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;border-top:0;position:absolute}.datepicker-dropdown.datepicker-orient-left:before{left:6px}.datepicker-dropdown.datepicker-orient-left:after{left:7px}.datepicker-dropdown.datepicker-orient-right:before{right:6px}.datepicker-dropdown.datepicker-orient-right:after{right:7px}.datepicker-dropdown.datepicker-orient-bottom:before{top:-7px}.datepicker-dropdown.datepicker-orient-bottom:after{top:-6px}.datepicker-dropdown.datepicker-orient-top:before{bottom:-7px;border-bottom:0;border-top:7px solid #999}.datepicker-dropdown.datepicker-orient-top:after{bottom:-6px;border-bottom:0;border-top:6px solid #fff}.datepicker>div{display:none}.datepicker table{margin:0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.datepicker td,.datepicker th{text-align:center;width:20px;height:20px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:none}.table-striped .datepicker table tr td,.table-striped .datepicker table tr th{background-color:transparent}.datepicker table tr td.day.focused,.datepicker table tr td.day:hover{background:#eee;cursor:pointer}.datepicker table tr td.new,.datepicker table tr td.old{color:#999}.datepicker table tr td.disabled,.datepicker table tr td.disabled:hover{background:0 0;color:#999;cursor:default}.datepicker table tr td.highlighted{background:#d9edf7;border-radius:0}.datepicker table tr td.today,.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled:hover,.datepicker table tr td.today:hover{background-color:#fde19a;background-image:-moz-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-ms-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-webkit-gradient(linear,0 0,0 100%,from(#fdd49a),to(#fdf59a));background-image:-webkit-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-o-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:linear-gradient(to bottom,#fdd49a,#fdf59a);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fdd49a', endColorstr='#fdf59a', GradientType=0);border-color:#fdf59a #fdf59a #fbed50;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#000}.datepicker table tr td.today.active,.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled.active,.datepicker table tr td.today.disabled.disabled,.datepicker table tr td.today.disabled:active,.datepicker table tr td.today.disabled:hover,.datepicker table tr td.today.disabled:hover.active,.datepicker table tr td.today.disabled:hover.disabled,.datepicker table tr td.today.disabled:hover:active,.datepicker table tr td.today.disabled:hover:hover,.datepicker table tr td.today.disabled:hover[disabled],.datepicker table tr td.today.disabled[disabled],.datepicker table tr td.today:active,.datepicker table tr td.today:hover,.datepicker table tr td.today:hover.active,.datepicker table tr td.today:hover.disabled,.datepicker table tr td.today:hover:active,.datepicker table tr td.today:hover:hover,.datepicker table tr td.today:hover[disabled],.datepicker table tr td.today[disabled]{background-color:#fdf59a}.datepicker table tr td.today.active,.datepicker table tr td.today.disabled.active,.datepicker table tr td.today.disabled:active,.datepicker table tr td.today.disabled:hover.active,.datepicker table tr td.today.disabled:hover:active,.datepicker table tr td.today:active,.datepicker table tr td.today:hover.active,.datepicker table tr td.today:hover:active{background-color:#fbf069\\9}.datepicker table tr td.today:hover:hover{color:#000}.datepicker table tr td.today.active:hover{color:#fff}.datepicker table tr td.range,.datepicker table tr td.range.disabled,.datepicker table tr td.range.disabled:hover,.datepicker table tr td.range:hover{background:#eee;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.datepicker table tr td.range.today,.datepicker table tr td.range.today.disabled,.datepicker table tr td.range.today.disabled:hover,.datepicker table tr td.range.today:hover{background-color:#f3d17a;background-image:-moz-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-ms-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-webkit-gradient(linear,0 0,0 100%,from(#f3c17a),to(#f3e97a));background-image:-webkit-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-o-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:linear-gradient(to bottom,#f3c17a,#f3e97a);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f3c17a', endColorstr='#f3e97a', GradientType=0);border-color:#f3e97a #f3e97a #edde34;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.datepicker table tr td.range.today.active,.datepicker table tr td.range.today.disabled,.datepicker table tr td.range.today.disabled.active,.datepicker table tr td.range.today.disabled.disabled,.datepicker table tr td.range.today.disabled:active,.datepicker table tr td.range.today.disabled:hover,.datepicker table tr td.range.today.disabled:hover.active,.datepicker table tr td.range.today.disabled:hover.disabled,.datepicker table tr td.range.today.disabled:hover:active,.datepicker table tr td.range.today.disabled:hover:hover,.datepicker table tr td.range.today.disabled:hover[disabled],.datepicker table tr td.range.today.disabled[disabled],.datepicker table tr td.range.today:active,.datepicker table tr td.range.today:hover,.datepicker table tr td.range.today:hover.active,.datepicker table tr td.range.today:hover.disabled,.datepicker table tr td.range.today:hover:active,.datepicker table tr td.range.today:hover:hover,.datepicker table tr td.range.today:hover[disabled],.datepicker table tr td.range.today[disabled]{background-color:#f3e97a}.datepicker table tr td.range.today.active,.datepicker table tr td.range.today.disabled.active,.datepicker table tr td.range.today.disabled:active,.datepicker table tr td.range.today.disabled:hover.active,.datepicker table tr td.range.today.disabled:hover:active,.datepicker table tr td.range.today:active,.datepicker table tr td.range.today:hover.active,.datepicker table tr td.range.today:hover:active{background-color:#efe24b\\9}.datepicker table tr td.selected,.datepicker table tr td.selected.disabled,.datepicker table tr td.selected.disabled:hover,.datepicker table tr td.selected:hover{background-color:#9e9e9e;background-image:-moz-linear-gradient(to bottom,#b3b3b3,grey);background-image:-ms-linear-gradient(to bottom,#b3b3b3,grey);background-image:-webkit-gradient(linear,0 0,0 100%,from(#b3b3b3),to(grey));background-image:-webkit-linear-gradient(to bottom,#b3b3b3,grey);background-image:-o-linear-gradient(to bottom,#b3b3b3,grey);background-image:linear-gradient(to bottom,#b3b3b3,grey);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#b3b3b3', endColorstr='#808080', GradientType=0);border-color:grey grey #595959;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td.selected.active,.datepicker table tr td.selected.disabled,.datepicker table tr td.selected.disabled.active,.datepicker table tr td.selected.disabled.disabled,.datepicker table tr td.selected.disabled:active,.datepicker table tr td.selected.disabled:hover,.datepicker table tr td.selected.disabled:hover.active,.datepicker table tr td.selected.disabled:hover.disabled,.datepicker table tr td.selected.disabled:hover:active,.datepicker table tr td.selected.disabled:hover:hover,.datepicker table tr td.selected.disabled:hover[disabled],.datepicker table tr td.selected.disabled[disabled],.datepicker table tr td.selected:active,.datepicker table tr td.selected:hover,.datepicker table tr td.selected:hover.active,.datepicker table tr td.selected:hover.disabled,.datepicker table tr td.selected:hover:active,.datepicker table tr td.selected:hover:hover,.datepicker table tr td.selected:hover[disabled],.datepicker table tr td.selected[disabled]{background-color:grey}.datepicker table tr td.selected.active,.datepicker table tr td.selected.disabled.active,.datepicker table tr td.selected.disabled:active,.datepicker table tr td.selected.disabled:hover.active,.datepicker table tr td.selected.disabled:hover:active,.datepicker table tr td.selected:active,.datepicker table tr td.selected:hover.active,.datepicker table tr td.selected:hover:active{background-color:#666\\9}.datepicker table tr td.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active:hover{background-color:#006dcc;background-image:-moz-linear-gradient(to bottom,#08c,#04c);background-image:-ms-linear-gradient(to bottom,#08c,#04c);background-image:-webkit-gradient(linear,0 0,0 100%,from(#08c),to(#04c));background-image:-webkit-linear-gradient(to bottom,#08c,#04c);background-image:-o-linear-gradient(to bottom,#08c,#04c);background-image:linear-gradient(to bottom,#08c,#04c);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);border-color:#04c #04c #002a80;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td.active.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled.disabled,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active.disabled:hover.active,.datepicker table tr td.active.disabled:hover.disabled,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active.disabled:hover:hover,.datepicker table tr td.active.disabled:hover[disabled],.datepicker table tr td.active.disabled[disabled],.datepicker table tr td.active:active,.datepicker table tr td.active:hover,.datepicker table tr td.active:hover.active,.datepicker table tr td.active:hover.disabled,.datepicker table tr td.active:hover:active,.datepicker table tr td.active:hover:hover,.datepicker table tr td.active:hover[disabled],.datepicker table tr td.active[disabled]{background-color:#04c}.datepicker table tr td.active.active,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled:hover.active,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active:active,.datepicker table tr td.active:hover.active,.datepicker table tr td.active:hover:active{background-color:#039\\9}.datepicker table tr td span{display:block;width:23%;height:54px;line-height:54px;float:left;margin:1%;cursor:pointer;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.datepicker table tr td span.focused,.datepicker table tr td span:hover{background:#eee}.datepicker table tr td span.disabled,.datepicker table tr td span.disabled:hover{background:0 0;color:#999;cursor:default}.datepicker table tr td span.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active:hover{background-color:#006dcc;background-image:-moz-linear-gradient(to bottom,#08c,#04c);background-image:-ms-linear-gradient(to bottom,#08c,#04c);background-image:-webkit-gradient(linear,0 0,0 100%,from(#08c),to(#04c));background-image:-webkit-linear-gradient(to bottom,#08c,#04c);background-image:-o-linear-gradient(to bottom,#08c,#04c);background-image:linear-gradient(to bottom,#08c,#04c);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);border-color:#04c #04c #002a80;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td span.active.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled.active,.datepicker table tr td span.active.disabled.disabled,.datepicker table tr td span.active.disabled:active,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active.disabled:hover.active,.datepicker table tr td span.active.disabled:hover.disabled,.datepicker table tr td span.active.disabled:hover:active,.datepicker table tr td span.active.disabled:hover:hover,.datepicker table tr td span.active.disabled:hover[disabled],.datepicker table tr td span.active.disabled[disabled],.datepicker table tr td span.active:active,.datepicker table tr td span.active:hover,.datepicker table tr td span.active:hover.active,.datepicker table tr td span.active:hover.disabled,.datepicker table tr td span.active:hover:active,.datepicker table tr td span.active:hover:hover,.datepicker table tr td span.active:hover[disabled],.datepicker table tr td span.active[disabled]{background-color:#04c}.datepicker table tr td span.active.active,.datepicker table tr td span.active.disabled.active,.datepicker table tr td span.active.disabled:active,.datepicker table tr td span.active.disabled:hover.active,.datepicker table tr td span.active.disabled:hover:active,.datepicker table tr td span.active:active,.datepicker table tr td span.active:hover.active,.datepicker table tr td span.active:hover:active{background-color:#039\\9}.datepicker table tr td span.new,.datepicker table tr td span.old{color:#999}.datepicker .datepicker-switch{width:145px}.datepicker .datepicker-switch,.datepicker .next,.datepicker .prev,.datepicker tfoot tr th{cursor:pointer}.datepicker .datepicker-switch:hover,.datepicker .next:hover,.datepicker .prev:hover,.datepicker tfoot tr th:hover{background:#eee}.datepicker .cw{font-size:10px;width:12px;padding:0 2px 0 5px;vertical-align:middle}.input-append.date .add-on,.input-prepend.date .add-on{cursor:pointer}.input-append.date .add-on i,.input-prepend.date .add-on i{margin-top:3px}.input-daterange input{text-align:center}.input-daterange input:first-child{-webkit-border-radius:3px 0 0 3px;-moz-border-radius:3px 0 0 3px;border-radius:3px 0 0 3px}.input-daterange input:last-child{-webkit-border-radius:0 3px 3px 0;-moz-border-radius:0 3px 3px 0;border-radius:0 3px 3px 0}.input-daterange .add-on{display:inline-block;width:auto;min-width:16px;height:18px;padding:4px 5px;font-weight:400;line-height:18px;text-align:center;text-shadow:0 1px 0 #fff;vertical-align:middle;background-color:#eee;border:1px solid #ccc;margin-left:-5px;margin-right:-5px}\r\n/*# sourceMappingURL=bootstrap-datepicker.min.css.map */"

/***/ },

/***/ 863:
/***/ function(module, exports) {

module.exports = "/*! =======================================================\r\n                      VERSION  7.1.1              \r\n========================================================= */\r\n/*! =========================================================\r\n * bootstrap-slider.js\r\n *\r\n * Maintainers:\r\n *\t\tKyle Kemp\r\n *\t\t\t- Twitter: @seiyria\r\n *\t\t\t- Github:  seiyria\r\n *\t\tRohit Kalkur\r\n *\t\t\t- Twitter: @Rovolutionary\r\n *\t\t\t- Github:  rovolution\r\n *\r\n * =========================================================\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n * ========================================================= */.slider{display:inline-block;vertical-align:middle;position:relative}.slider.slider-horizontal{width:210px;height:20px}.slider.slider-horizontal .slider-track{height:10px;width:100%;margin-top:-5px;top:50%;left:0}.slider.slider-horizontal .slider-selection,.slider.slider-horizontal .slider-track-low,.slider.slider-horizontal .slider-track-high{height:100%;top:0;bottom:0}.slider.slider-horizontal .slider-tick,.slider.slider-horizontal .slider-handle{margin-left:-10px;margin-top:-5px}.slider.slider-horizontal .slider-tick.triangle,.slider.slider-horizontal .slider-handle.triangle{border-width:0 10px 10px 10px;width:0;height:0;border-bottom-color:#0480be;margin-top:0}.slider.slider-horizontal .slider-tick-label-container{white-space:nowrap;margin-top:20px}.slider.slider-horizontal .slider-tick-label-container .slider-tick-label{padding-top:4px;display:inline-block;text-align:center}.slider.slider-vertical{height:210px;width:20px}.slider.slider-vertical .slider-track{width:10px;height:100%;margin-left:-5px;left:50%;top:0}.slider.slider-vertical .slider-selection{width:100%;left:0;top:0;bottom:0}.slider.slider-vertical .slider-track-low,.slider.slider-vertical .slider-track-high{width:100%;left:0;right:0}.slider.slider-vertical .slider-tick,.slider.slider-vertical .slider-handle{margin-left:-5px;margin-top:-10px}.slider.slider-vertical .slider-tick.triangle,.slider.slider-vertical .slider-handle.triangle{border-width:10px 0 10px 10px;width:1px;height:1px;border-left-color:#0480be;margin-left:0}.slider.slider-vertical .slider-tick-label-container{white-space:nowrap}.slider.slider-vertical .slider-tick-label-container .slider-tick-label{padding-left:4px}.slider.slider-disabled .slider-handle{background-image:-webkit-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:-o-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:linear-gradient(to bottom,#dfdfdf 0,#bebebe 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdfdfdf',endColorstr='#ffbebebe',GradientType=0)}.slider.slider-disabled .slider-track{background-image:-webkit-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:-o-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:linear-gradient(to bottom,#e5e5e5 0,#e9e9e9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe5e5e5',endColorstr='#ffe9e9e9',GradientType=0);cursor:not-allowed}.slider input{display:none}.slider .tooltip.top{margin-top:-36px}.slider .tooltip-inner{white-space:nowrap;max-width:none}.slider .hide{display:none}.slider-track{position:absolute;cursor:pointer;background-image:-webkit-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:-o-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:linear-gradient(to bottom,#f5f5f5 0,#f9f9f9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5',endColorstr='#fff9f9f9',GradientType=0);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);border-radius:4px}.slider-selection{position:absolute;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-selection.tick-slider-selection{background-image:-webkit-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:-o-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:linear-gradient(to bottom,#89cdef 0,#81bfde 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef',endColorstr='#ff81bfde',GradientType=0)}.slider-track-low,.slider-track-high{position:absolute;background:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-handle{position:absolute;width:20px;height:20px;background-color:#337ab7;background-image:-webkit-linear-gradient(top,#149bdf 0,#0480be 100%);background-image:-o-linear-gradient(top,#149bdf 0,#0480be 100%);background-image:linear-gradient(to bottom,#149bdf 0,#0480be 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf',endColorstr='#ff0480be',GradientType=0);filter:none;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);border:0 solid transparent}.slider-handle.round{border-radius:50%}.slider-handle.triangle{background:transparent none}.slider-handle.custom{background:transparent none}.slider-handle.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick{position:absolute;width:20px;height:20px;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;filter:none;opacity:.8;border:0 solid transparent}.slider-tick.round{border-radius:50%}.slider-tick.triangle{background:transparent none}.slider-tick.custom{background:transparent none}.slider-tick.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick.in-selection{background-image:-webkit-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:-o-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:linear-gradient(to bottom,#89cdef 0,#81bfde 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef',endColorstr='#ff81bfde',GradientType=0);opacity:1}"

/***/ },

/***/ 864:
/***/ function(module, exports) {

module.exports = "@font-face {\r\n    font-family: 'montserratregular';\r\n    src: url('assets/fonts/templateFonts/one_page_slider/montserrat-regular-webfont.eot');\r\n    }\r\n\r\n@font-face {\r\n    font-family: 'montserratregular';\r\n    src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2'),\r\n         url(data:application/font-woff;charset=utf-8;base64,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) format('woff'),\r\n         url('assets/fonts/templateFonts/one_page_slider/montserrat-regular-webfont.ttf') format('truetype'),\r\n         url('assets/fonts/templateFonts/one_page_slider/montserrat-regular-webfont.svg#montserratregular') format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\tfont-smooth: always;\r\n  -webkit-font-smoothing: antialiased;\r\n\r\n}\r\n\r\n\r\n.mregular-font {\r\n    font-family: montserratregular;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'material_iconsregular';\r\n    src: url('assets/fonts/templateFonts/one_page_slider/materialicons-regular-webfont.woff2') format('woff2'),\r\n         url('assets/fonts/templateFonts/one_page_slider/materialicons-regular-webfont.woff') format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n@font-face {\r\n  font-family: 'Material Icons';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('MaterialIcons-Regular.eot');\r\n  src: local('Material Icons'),\r\n       local('materialIcons-Regular'),\r\n       url('assets/fonts/templateFonts/one_page_slider/materialIcons-Regular.woff2') format('woff2'),\r\n       url('assets/fonts/templateFonts/one_page_slider/materialIcons-Regular.woff') format('woff'),\r\n       url('assets/fonts/templateFonts/one_page_slider/materialIcons-Regular.ttf') format('truetype');\r\n}\r\n\r\n.material-icons {\r\n  font-family: 'Material Icons';\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;  /* Preferred icon size */\r\n  display: inline-block;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-wrap: normal;\r\n  white-space: nowrap;\r\n  direction: ltr;\r\n\r\n  /* Support for all WebKit browsers. */\r\n  -webkit-font-smoothing: antialiased;\r\n  /* Support for Safari and Chrome. */\r\n  text-rendering: optimizeLegibility;\r\n\r\n  /* Support for Firefox. */\r\n  -moz-osx-font-smoothing: grayscale;\r\n\r\n  /* Support for IE. */\r\n  font-feature-settings: 'liga';\r\n}\r\n\r\n@font-face {\r\n    font-family: \"montserratlight\";\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    src: url(\"assets/fonts/templateFonts/one_page_slider/montserrat-light-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"assets/fonts/templateFonts/one_page_slider/montserrat-light-webfont.woff2\") format(\"woff2\"), url(\"assets/fonts/templateFonts/one_page_slider/montserrat-light-webfont.woff\") format(\"woff\"), url(\"assets/fonts/templateFonts/one_page_slider/montserrat-light-webfont.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n    font-family: 'montserrat-bold';\r\n    src: url('assets/fonts/templateFonts/one_page_slider/montserrat-bold-webfont.eot');\r\n    src: url('assets/fonts/templateFonts/one_page_slider/montserrat-bold-webfont.eot?#iefix') format('embedded-opentype'),\r\n         url('assets/fonts/templateFonts/one_page_slider/montserrat-bold-webfont.woff2') format('woff2'),\r\n         url('assets/fonts/templateFonts/one_page_slider/montserrat-bold-webfont.woff') format('woff'),\r\n         url('assets/fonts/templateFonts/one_page_slider/montserrat-bold-webfont.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n"

/***/ },

/***/ 865:
/***/ function(module, exports) {

module.exports = "\r\n@media (max-width:775px) {\r\n    .landing-page-mid .input-section .input-outer {\r\n        float: left;\r\n        width: 48%;\r\n    }\r\n    .landing-page-mid .input-section {\r\n        width: 90%;\r\n        margin: auto;\r\n        margin-left: -4px;\r\n    }\r\n    .question-section-outer {\r\n        float: left;\r\n        width: 90%;\r\n        margin-left: 5%;\r\n    }\r\n    .mid-width {\r\n        width: 100%;\r\n        float: left;\r\n        text-align: center;\r\n    }\r\n    .top-head {\r\n        padding: 10px 20px;\r\n    }\r\n    \r\n    .left-section {\r\n        float: left;\r\n        width: 100%;\r\n    }\r\n    .result-small-section {\r\n        float: left;\r\n        padding: 30px 30px 30px 30px;\r\n        min-height: 170px;\r\n    }\r\n    .cta-outer {\r\n        float: left;\r\n        width: 100%;\r\n        background: #fff;\r\n        padding: 13px 0;\r\n        text-align: center;\r\n    }\r\n    .cta-outer .container {\r\n        width: 100%;\r\n        padding: 10px 0;\r\n    }\r\n   .cta-outer .input-section .input-outer {\r\n        float: left;\r\n        width: 49%  ;\r\n    }\r\n    .right-section {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    .landing-page-mid {\r\n        /*display: block;*/\r\n        width: 100vw;\r\n        height: 90vh;\r\n    }\r\n    .landing-page-header {\r\n        /*position: relative;*/\r\n        left: 0px;\r\n        background: none !important;\r\n    }\r\n    .landing-footer-outer {\r\n        position: relative;\r\n    }\r\n    #main-profile .logo {\r\n        height: auto;\r\n    }\r\n    .landing-footer-outer .powered-by img {\r\n        width: 55% !important;\r\n        padding-right: 0px;\r\n        padding-bottom: 5px;\r\n    }\r\n    \r\n    .landing-footer-outer .powered-by {\r\n        width: 202px;\r\n    }\r\n    .questions .question-section {\r\n        padding: 30px 20px;\r\n    }\r\n    logo {\r\n        position: relative;\r\n        float: left;\r\n    width: 100%;\r\n    }\r\n    .switch-outer .switch-que {\r\n        width: 70%;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n        float: none;\r\n    }\r\n    .switch-que + .pull-right {\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n        float: none !important;\r\n        width: 28%;\r\n    }\r\n    .switch-outer {\r\n\t    padding: 8px 8px;\r\n\t}\r\n.page_2 { position: relative !important; width: 100% !important; float: none;  margin-top: -55px;  margin-left: 40px;    margin-bottom: 30px;}         \r\n.landing-page-mid { /*padding-top:150px !important;*/}\r\n.landing-footer-outer {  position: absolute;}\r\n.landing-page-mid .prime-action { font-size: 1.8vw !important;}\r\n\r\n.landing-page-mid .main-heading{font-size: 7vmin;line-height: 1.2em !important;}\r\n.landing-page-mid .sub-heading{font-size: 3vmin !important; line-height: 1.3em !important;}\r\n\r\n.disc-set{ width:100% !important;}\r\n.questions{ padding-top: 90px;}\r\n.redo-link ul { right: 5%; top: 4% !important;}\r\n.redo-link ul li a .material-icons { font-size: 14px!important; margin-top: 5px;}\r\n.page_2 .result-centre-outer .mid-width p { padding: 5px 25px; margin:0 !important; font-size: 4vmin !important;}\r\n.redo-link ul li {padding: 2px 7px !important;}\r\n\r\n/* recome result */\r\n.recom-section .left-sec{ min-height: auto; max-height: none; display: block;}\r\n.recom-section .left-outer {display: block; text-align: center; padding: 8%;height: auto !important;}\r\n.recom-section .outer-main {height: auto !important; width: 100%;}\r\n.recom-section .w100 .leadform-outer {padding: 0 8% 6% 8% !important; float: none; background: none; margin-bottom: 0; display: block; vertical-align: middle;}\r\n.result-centre-outer .recom-section .w100 .cta-outer .input-section .input-outer span {float: left;width: 100%;text-align: left;padding-left: 0;color: #f44336;font-size: 12px;bottom: -1px !important;position: absolute; z-index: 1; left: 8px !important;}\r\n\r\n.recom-section .w100 .cta-outer .input-section .input-outer{ float: left; width: 49%; padding: 10px 8px;}\r\n.result-small-section p:nth-child(1) {font-family: montserratlight !important;font-size: 4vmin;}\r\n.questions  .question-section-outer .question-head{font-size: 4.5vmin;}\r\n.landing-page-header .logo { width: 150px;}\r\n.questions-header header .logo {float: left;padding: 5px 15px;}\r\n.recom-section .w100 .cta-outer .input-section .input-outer input{padding: 10px 2% !important;}\r\n\r\n.recom-section .leadform-outer .prime-action{ float:none;}\r\n.recommendation-outer{ text-align: center;}\r\n}\r\n@media (min-width: 768px) and (max-width:991px) {\r\n    .recom-section .outer-main{ height: auto !important;}\r\n    .recom-section .left-outer{ height: auto !important;}\r\n}\r\n/*@media (max-width:768px){\r\n    .cp1 .landing-page-mid .main-heading{font-size: 7vmin;line-height: 1.2em !important; margin-top:25%;}\r\n}*/\r\n/*@media (max-width:774px) {\r\n.landing-footer-outer .powered-by img {\r\n        width: 25% !important;\r\n        padding-right: 0px;\r\n        padding-bottom: 5px;\r\n    }\r\n    }\r\n@media (max-width:780px) {\r\n\r\nsection .questions-header header .right-sec i { left: -83px !important;}\r\n}\r\n\r\n@media (max-width:1020px) {\r\n.landing-footer-outer{ float:left; width:100%; padding:0px 25px;}\r\n}\r\n@media (max-width:900px){\r\n.questions-header header .right-sec i {left: -80px !important;}\r\n\r\n}*/\r\n\r\n@media (max-width:375px) {\r\n\r\n.landing-page-header .logo{float: left;padding: 0px; width: 100%;text-align: center; height: auto;}\r\n.landing-page-header .logo img{ max-width: 55%;  max-height: 40px; }\r\n.questions-header header .logo{ float: left; padding-left:6px; padding-right: 0; text-align: left; padding-top: 7px;}\r\n.landing-page-header .questions-header header .logo img{ max-width: 40%; max-height: 40px;  float: left;}\r\n.questions-header header { background: none;}\r\n.questions-header header .p-right0 { padding:0; min-height: 60px;}\r\n.questions-header header .right-sec{ width:100%;}\r\n.questions-header header .right-sec p {width: 100%; text-align: center;}\r\nsection .questions-header header .right-sec i {left: 9px !important;}\r\n.questions-header header .right-sec span {width: 100%;text-align: center;}\r\n.que-fixed { /*top: -29px;*/ }\r\n.top-head .mid-width:nth-child(1){width:100%;float:left; font-family:montserratlight !important; text-align: center;}\r\n.top-head .mid-width:nth-child(2){width:100%;float:left; font-family:montserratlight !important;  text-align: center;}\r\n.redo-link ul{ float:left;}\r\n/*.cp1 .landing-page-mid  { padding-top: 26% !important;}\r\n.cp2 .landing-page-mid  { padding-top: 26% !important;}\r\n.cp3 .landing-page-mid  { padding-top: 26% !important;}*/\r\n.btn.prime-action{/* margin-bottom:0 !important; */}\r\n  .question-section-outer{ overflow: hidden;}\r\n\r\n.landing-page-mid .landing-responsive .main-heading{font-size: 8vmin !important;line-height: 1.1em !important;  margin-bottom: 6% !important;}\r\n.landing-page-mid .sub-heading{    font-size: 5vmin !important; line-height: 1.3em !important;} \r\n.landing-page-mid .prime-action {font-size: 3.5vmin !important;}\r\n.landing-page-mid .input-section .input-outer span{left:10px !important; top:48px;}\r\n.result-small-section p:nth-child(2) {font-family: montserratlight !important; font-size: 3.8vmin;} \r\n.result-small-section p:nth-child(3) {font-family: montserratlight !important; font-size: 3.4vmin;} \r\n.result-mid .result-small-section {padding: 30px 30px 0px 30px; min-height: auto; width:100% !important;}\r\n.landing-page-mid .landing-responsive .text-center .prime-action { font-size: 3.5vmin !important;}\r\n.leadform-outer { padding-bottom: 0 !important; }\r\n.result-centre-outer .share-set {float: left; width: 65%;}\r\n.result-centre-outer .bottom-section {width: 100%;}\r\n.questions  .question-section-outer .question-head{ font-size: 6vmin;}\r\n.questions .question-subhead { font-size: 3.3vmin;}\r\n.questions{padding-top: 27%;}\r\n.landing-footer-outer .powered-by { width: 100%; text-align: center;}\r\n\r\n .landing-page-mid .container-temp .input-section .input-outer{width: 100% !important;}\r\n .landing-footer-outer {margin-top: 10px;}\r\n .leadform-outer .prime-action{ font-size: 13px; padding: 10px 35px;}\r\n.landing-page-mid .input-section .input-outer input{ margin-left: 10px !important; margin-bottom: 15px !important;}\r\n\r\n\r\n.container-temp{ width: 100%;}\r\n.redo-link ul {right: 7%; top: 2.5%;}\r\n.redo-link ul li { padding: 2px 7px;}\r\n.page_2 .result-centre-outer .mid-width p { padding: 5px 12px; font-size: 4.5vmin !important;}\r\n.redo-link ul li a .material-icons {font-size: 12px!important; margin-top: 3px;}\r\n\r\n.page_2 {\r\n    position: relative !important;\r\n    width: 100% !important; float: none; \r\n    height: 100vh;\r\n}\r\n\r\n.landing-page-mid .input-section .input-outer span{left:10px; font-size: 11px;} \r\n/* recome result */\r\n.recom-section .left-outer { text-align: center; padding: 8%;height: auto !important;}\r\n.rec-image-outer { margin: 0 auto; width: auto !important; overflow: hidden; text-align: center; box-shadow: 8px 9px 7px 2px #d1d1d1;  }\r\n.recom-section .leadform-outer {padding: 0 8% 8% 8%;}\r\n.recom-section .outer-main {height: auto !important; width: 100%;margin-bottom: 0 !important; }\r\n.questions .section-head{ font-size: 18px;}\r\n.cp1 .landing-page-mid .input-section .input-outer input{ margin: 0 28px;}\r\n.cp2 .landing-page-mid .input-section .input-outer input{ margin: 0 28px;}\r\n.cp3 .landing-page-mid .input-section .input-outer input{ margin: 0 28px;}\r\n.landing-footer-outer .landing-responsive .text-right .powered-by img { width: 30% !important;}\r\n.page_2 .result-small-section .small-top-sec p:nth-child(1) {font-family: montserratlight !important; font-size: 4.5vmin;}\r\n.page_2 .result-small-section .small-top-sec p:nth-child(2) {font-family: montserratlight !important; font-size: 3.5vmin;}\r\n.page_2 .result-small-section .small-top-sec p:nth-child(3) {font-family: montserratlight !important; font-size: 3vmin;}\r\n.questions .question-section-outer .w100 .text-center .prime-action { font-size: 3.5vmin; padding: 1% 10%;}\r\n.result-small-section p:nth-child(n+4){font-family: montserratlight !important; font-size: 3vmin;}\r\n.page_2 .bottom-section { width: 100% !important;}\r\n.recom-section .leadform-outer h1 {padding-left: 0; margin-top: 0; font-size: 25px; margin-bottom: 0; padding-top:4% !important}\r\n.recom-section .leadform-outer h5{ padding-left:0;}\r\n.cta-outer .container-temp .input-section .input-outer{ float: left; width: 100%;}\r\n.result-centre-outer .cta-outer .input-section .input-outer span {font-size: 11px !important; bottom: -4px;}\r\n.recom-section .w100 .leadform-outer .container-temp .prime-action {font-size: 11px !important;  }\r\n.result-centre-outer .recom-section .w100 .cta-outer .input-section .input-outer span {padding-left: 0 !important; left: 0 !important;}\r\n.recom-section .w100 .lead-heading-temp1 { padding: 0 20px !important;}\r\n.page_0 .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) { width: 100% !important; }\r\n.page_0 .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input { padding: 3% 2% !important; }\r\n.cp1 .result-overlay{ display: block;}\r\n.cp2 .result-overlay{ display: block; }\r\n.cp3 .result-overlay{display: block; }\r\n.cp1 .result-centre-outer{ margin-bottom: 10px !important;}\r\n.cp2 .result-centre-outer{ margin-bottom: 10px !important;}\r\n.cp3 .result-centre-outer{ margin-bottom: 10px !important;}\r\n}\r\n@media (min-width:1500px){\r\n\r\n .right-section .internal-sec.slimscroll{ height:95vh !important;  padding-bottom:20px;}\r\n.right-section .slimScrollDiv{height:95vh !important; padding-bottom:20px;}\r\n.container-temp{ width:100%;}\r\n.questions-header header .right-sec i{ left:-61px;}\r\n.margin-none{ margin: 0 !important;}\r\n\r\n\r\n}\r\n\r\n@media (max-width:1400px){\r\n.right-section .slimScrollDiv{ height: 91vh !important}\r\n.right-section .slimscroll{ height: 91vh !important}\r\n\r\n}\r\n\r\n@media (max-width:1366px){\r\n.redo-link ul li{float: left; display:inline-block; -webkit-border-radius: 28px;-moz-border-radius: 28px;border-radius: 28px;  padding: 2px 8px;  }\r\n.redo-link ul li a .material-icons {font-size: 14px!important; margin-top: 4px;}\r\n.result-centre-outer.recommendation-outer .container-temp .prime-action{ margin-bottom:0;}\r\n\r\n}\r\n\r\n@media (max-width:1024px){\r\n    .result-centre-outer .mid-width p{ padding:5px 35px 0 15px;}\r\n    .editor-template-tabs .redo-link ul { top: 5%;}\r\n    .redo-link ul { top: 7%;}\r\n    }\r\n\r\n\r\n\r\n@media (min-width: 320px) and (max-width:767px) {\r\n     /* recome result */\r\n.recom-section .left-outer { text-align: center; padding: 8%;height: auto !important;}\r\n.rec-image-outer { margin: 0 auto; width: auto !important; overflow: hidden; text-align: center; box-shadow: 8px 9px 7px 2px #d1d1d1;  }\r\n.recom-section .leadform-outer {padding: 0 8% 8% 8%;}\r\n.recom-section .outer-main{ height: auto !important;}\r\n\r\n.recom-section .w100 .cta-outer .input-section .input-outer{ float: left;width: 94%;    padding: 4% 0;}\r\n.result-centre-outer .recom-section .w100 .cta-outer .input-section .input-outer span {float: left;width: 100%;text-align: left;padding-left: 20px;color: #f44336;font-size: 12px;bottom: -1px !important;position: absolute;z-index: 1;left: 0 !important;}\r\n\r\n.landing-page-header .logo{float: left;padding: 0px; width: 100%;text-align: center; height: auto;}\r\n.landing-page-header .logo img{ max-width: 55%;  max-height: 40px; }\r\n.questions-header header .logo{ float: left; padding-left:6px; padding-right: 0; text-align: left; padding-top: 7px;}\r\n.questions-header header .logo img{ max-width: 40%; max-height: 40px;  float: left;}\r\n.questions-header header { background: none;}\r\n.questions-header header .p-right0 { padding:0; min-height: 60px;}\r\n.questions-header header .right-sec{ width:100%;}\r\n.questions-header header .right-sec p {width: 100%; text-align: center;}\r\nsection .questions-header header .right-sec i {left: 9px !important;}\r\n.questions-header header .right-sec span {width: 100%;text-align: center;}\r\n.que-fixed { /*top: -29px;*/ }\r\n.top-head .mid-width:nth-child(1){width:100%;float:left; font-family:montserratlight !important; text-align: center;}\r\n.top-head .mid-width:nth-child(2){width:100%;float:left; font-family:montserratlight !important;  text-align: center;}\r\n.redo-link ul{ float:left;}\r\n/*.cp1 .landing-page-mid  { padding-top: 26% !important;}\r\n.cp2 .landing-page-mid  { padding-top: 26% !important;}\r\n.cp3 .landing-page-mid  { padding-top: 26% !important;}*/\r\n.btn.prime-action{/* margin-bottom:0 !important; */}\r\n  .question-section-outer{ overflow: hidden;}\r\n\r\n.landing-page-mid .main-heading{font-size: 8vmin;line-height: 1.3em !important; margin-top:25%;}\r\n.landing-page-mid .sub-heading{    font-size: 5vmin !important; line-height: 1.3em !important;} \r\n.landing-page-mid .prime-action {font-size: 2.5vmin !important; margin-top:0 !important; }\r\n.landing-page-mid .input-section .input-outer span{left:10px !important;}\r\n.result-small-section .small-top-sec p:nth-child(2) {font-family: montserratlight !important; font-size: 1.6vmin;} \r\n.result-small-section .small-top-sec p:nth-child(3) {font-family: montserratlight !important; font-size: 1.6vmin;} \r\n.result-small-section {padding: 30px 30px 0px 30px; min-height: auto;}\r\n.leadform-outer { padding-bottom: 0 !important; }\r\n.share-set {float: left; width: 98%;}\r\n.page_2 .bottom-section {width: 100%;}\r\n.questions .question-head { font-size: 6vmin;}\r\n.questions .question-subhead { font-size: 3.3vmin;}\r\n.questions{padding-top: 27%;}\r\n.page_2 .result-centre-outer .mid-width p {font-size: 3.5vmin !important;}\r\n.landing-footer-outer .powered-by { width: 100%; text-align: center;}\r\n\r\n .landing-page-mid .input-section .input-outer{width: 100% !important;}\r\n .landing-footer-outer {margin-top: 10px;}\r\n .leadform-outer .prime-action{ font-size: 13px; padding: 10px 40px;}\r\n.landing-page-mid .input-section .input-outer input{ margin-left: 10px !important;}\r\n\r\n\r\n.container-temp{ width: 100%;}\r\n.redo-link ul {right: 7%; top: 2.5%;}\r\n.redo-link ul li { padding: 2px 7px;}\r\n.result-centre-outer .mid-width p { padding: 5px 35px;}\r\n.redo-link ul li a .material-icons {font-size: 12px!important; margin-top: 3px;}\r\n\r\n.page_2 {\r\n    position: relative !important;\r\n    width: 100% !important; float: none; \r\n    height: 100vh;\r\n}\r\n.questions .section-head{ font-size: 18px;}  \r\n.landing-page-mid{ padding:0 !important;} \r\n\r\n.cp1 .landing-page-mid .container-temp .input-section .input-outer input {font-size: 2.2vmin !important;}\r\n.cp2 .landing-page-mid .container-temp .input-section .input-outer input {font-size: 2.2vmin !important;}\r\n.cp3 .landing-page-mid .container-temp .input-section .input-outer input {font-size: 2.2vmin !important;}\r\n.landing-footer-outer .text-right .powered-by span { font-size: 2.2vmin;}\r\n.landing-footer-outer .text-right .powered-by img {width: 18% !important;padding-right: 0px;padding-bottom: 5px;}\r\n.landing-page-mid .text-center .prime-action {font-size: 2.2vmin !important;margin-bottom: 0 !important;margin-top: 1% !important;}\r\n.landing-page-mid .container-temp .input-section .input-outer span {top: 68%;font-size: 2vmin;}\r\n.questions .question-section-outer .text-center .prime-action { font-size: 14px;  padding: 1% 10%;}\r\n.page_2 .result-centre-outer .prime-action {font-size: 13px; margin-top: 20px; margin-bottom: 20px;}\r\n.share-link ul li a { font-size: 16px;}\r\n }\r\n\r\n @media (min-width: 768px) and (max-width:1023px) {\r\n\r\n.landing-page-mid .input-section .input-outer {\r\n        float: left;\r\n        width: 48%;\r\n    }\r\n    .landing-page-mid .input-section {\r\n        width: 90%;\r\n        margin: auto;\r\n        margin-left: -4px;\r\n    }\r\n    .question-section-outer {\r\n        float: left;\r\n        width: 90%;\r\n        margin-left: 5%;\r\n    }\r\n    .mid-width {\r\n        width: 100%;\r\n        float: left;\r\n        text-align: center;\r\n        min-height: 50px !important;\r\n    }\r\n    .top-head {\r\n        padding: 10px 20px;\r\n    }\r\n    \r\n    .left-section {\r\n        float: left;\r\n        width: 100%;\r\n    }\r\n    .result-small-section {\r\n        float: left;\r\n        padding: 15px;\r\n        min-height: 100px;\r\n        padding-bottom:0;\r\n    }\r\n    .cta-outer {\r\n        float: left;\r\n        width: 100%;\r\n        background: #fff;\r\n        padding: 13px 0;\r\n        text-align: center;\r\n    }\r\n    .cta-outer .container {\r\n        width: 100%;\r\n        padding: 10px 0;\r\n    }\r\n    .cta-outer .input-section .input-outer {\r\n        float: left;\r\n        width: 49%;\r\n    }\r\n    .right-section {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    .landing-page-mid {\r\n        /*display: block;*/\r\n        width: 100vw;\r\n        height: 90vh;\r\n    }\r\n    .landing-page-header {\r\n        /*position: relative;*/\r\n        left: 0px;\r\n        background: none !important;\r\n    }\r\n    .landing-footer-outer {\r\n        position: relative;\r\n    }\r\n    #main-profile .logo {\r\n        height: auto;\r\n    }\r\n    .landing-footer-outer .powered-by img {\r\n        width: 50% !important;\r\n        padding-right: 0px;\r\n        padding-bottom: 5px;\r\n    }\r\n    .landing-footer-outer .powered-by {\r\n        width: 202px;\r\n    }\r\n    .questions .question-section {\r\n        padding: 30px 20px;\r\n    }\r\n    logo {\r\n        position: relative;\r\n        float: left;\r\n    width: 100%;\r\n    }\r\n    .switch-outer .switch-que {\r\n        width: 70%;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n        float: none;\r\n    }\r\n    .switch-que + .pull-right {\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n        float: none !important;\r\n        width: 28%;\r\n    }\r\n    .switch-outer {\r\n\t    padding: 8px 8px;\r\n\t}\r\n.page_2 { position: relative !important; width: 100% !important; float: none;  margin-top: -55px;  margin-left: 40px;   margin-bottom: 30px;}         \r\n.landing-page-mid { /*padding-top:150px !important;*/}\r\n.landing-footer-outer {  position: absolute;}\r\n.landing-page-mid .prime-action { font-size: 1.5vw !important; margin-bottom:0 !important; margin-top: 4px; }\r\n\r\n.landing-page-mid .main-heading{font-size: 7.5vmin !important;line-height: 1.2em !important; margin-bottom: 10px !important;}\r\n.landing-page-mid .sub-heading{font-size: 3.8vmin !important; line-height: 1.3em !important; padding-bottom:20px !important;}\r\n\r\n.disc-set{ width:100% !important; font-family: montserratlight; font-size: 10px;}\r\n.questions{ padding-top: 90px;}\r\n.questions .question-head{ font-size: 6vmin; margin-bottom:0;}\r\n.questions .question-subhead { font-size: 3.2vmin;}\r\n.redo-link ul { right: 5%; top: 4% !important;}\r\n.redo-link ul li a .material-icons { font-size: 14px!important; margin-top: 5px;}\r\n.result-centre-outer .mid-width p { padding: 5px 25px; margin: 0 !important; font-size: 5vmin !important;}\r\n.redo-link ul li {padding: 2px 7px !important;}\r\n.result-centre-outer .prime-action { font-size: 14px; margin-bottom: 0px; margin-top: 13px;}\r\n.landing-page-mid .input-section .input-outer input{ padding: 14px 2% !important;}\r\n.cp1 .landing-page-mid .main-heading {line-height:1.1em;}\r\n.cp2 .landing-page-mid .main-heading {line-height:1.1em;}\r\n.cp3 .landing-page-mid .main-heading {line-height:1.1em;}\r\n.landing-page-header .questions-header .logo img {max-width: 84%;max-height: 50px;}\r\n.cp1 .top-fix-bar {min-height: 63px;}\r\n.cp2 .top-fix-bar {min-height: 63px; }\r\n.cp3 .top-fix-bar {min-height: 63px; }\r\n.questions .prime-action { padding: 5px 55px;}\r\n.cp1 .result-centre-outer { margin: 1% 3%;}\r\n.cp2 .result-centre-outer { margin: 1% 3%;}\r\n.cp3 .result-centre-outer { margin: 1% 3%;}\r\n.recom-section .leadform-outer { padding: 0 12% 6% 12% !important;}\r\n.recom-section .leadform-outer h1 {padding-left: 0; margin-top: 0; font-size: 30px; margin-bottom: 0; }\r\n.recom-section .leadform-outer h5{ padding-left:0;}\r\n.result-centre-outer .cta-outer .input-section .input-outer input{ padding:10px 2% !important}\r\n}\r\n\r\n  \r\n @media (min-width: 1024px) and (max-width:767px) {\r\n\r\n.landing-page-mid .input-section .input-outer {\r\n        float: left;\r\n        width: 48%;\r\n    }\r\n    .landing-page-mid .input-section {\r\n        width: 90%;\r\n        margin: auto;\r\n        margin-left: -4px;\r\n    }\r\n    .question-section-outer {\r\n        float: left;\r\n        width: 90%;\r\n        margin-left: 5%;\r\n    }\r\n    .mid-width {\r\n        width: 100%;\r\n        float: left;\r\n        text-align: center;\r\n    }\r\n    .top-head {\r\n        padding: 10px 20px;\r\n    }\r\n    \r\n    .left-section {\r\n        float: left;\r\n        width: 100%;\r\n    }\r\n    .result-small-section {\r\n        float: left;\r\n        padding: 30px 30px 30px 30px;\r\n        min-height: 170px;\r\n        width: 100%;\r\n    }\r\n    .cta-outer {\r\n        float: left;\r\n        width: 100%;\r\n        background: #fff;\r\n        padding: 13px 0;\r\n        text-align: center;\r\n    }\r\n    .cta-outer .container {\r\n        width: 100%;\r\n        padding: 10px 0;\r\n    }\r\n    .cta-outer .input-section .input-outer {\r\n        float: left;\r\n        width: 100%;\r\n    }\r\n    .right-section {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    .landing-page-mid {\r\n        /*display: block;*/\r\n        width: 100vw;\r\n        height: 90vh;\r\n    }\r\n    .landing-page-header {\r\n        /*position: relative;*/\r\n        left: 0px;\r\n        background: none !important;\r\n    }\r\n    .landing-footer-outer {\r\n        position: relative;\r\n    }\r\n    #main-profile .logo {\r\n        height: auto;\r\n    }\r\n    .landing-footer-outer .powered-by img {\r\n        width: 50% !important;\r\n        padding-right: 0px;\r\n        padding-bottom: 5px;\r\n    }\r\n    .landing-footer-outer .powered-by {\r\n        width: 202px;\r\n    }\r\n    .questions .question-section {\r\n        padding: 30px 20px;\r\n    }\r\n    logo {\r\n        position: relative;\r\n        float: left;\r\n    width: 100%;\r\n    }\r\n    .switch-outer .switch-que {\r\n        width: 70%;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n        float: none;\r\n    }\r\n    .switch-que + .pull-right {\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n        float: none !important;\r\n        width: 28%;\r\n    }\r\n    .switch-outer {\r\n\t    padding: 8px 8px;\r\n\t}\r\n.page_2 { position: relative !important; width: 100% !important; float: none;  margin-top: -55px;  margin-left: 40px;    margin-bottom: 30px;}         \r\n.landing-page-mid { /*padding-top:150px !important;*/}\r\n.landing-footer-outer {  position: absolute;}\r\n.landing-page-mid .prime-action { font-size: 1.8vw !important;}\r\n\r\n.landing-page-mid .main-heading{font-size: 7vmin;line-height: 1.2em !important;}\r\n.landing-page-mid .sub-heading{font-size: 3vmin !important; line-height: 1.3em !important;}\r\n\r\n.disc-set{ width:100% !important;}\r\n.questions{ padding-top: 90px;}\r\n.redo-link ul { right: 5%; top: 4% !important;}\r\n.redo-link ul li a .material-icons { font-size: 14px!important; margin-top: 5px;}\r\n.result-centre-outer .mid-width p { padding: 5px 25px; margin: 0 !important;}\r\n.redo-link ul li {padding: 2px 7px !important;}\r\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) { width: 100% !important; }\r\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input { padding: 1.8% 2% !important; }\r\n\r\n }\r\n\r\n@media (min-width: 700px) and (max-width:800px) {\r\n\r\n.landing-page-mid .main-heading{font-size: 6.5vmin !important;line-height: 1.2em !important; margin-bottom: 10px !important;}\r\n.landing-page-mid .sub-heading{font-size: 3.2vmin !important; line-height: 1.3em !important; padding-bottom:20px !important;}\r\n\r\n}\r\n\r\n@media (min-width: 1024px) and (max-width:1366px) {\r\n\r\n.landing-page-mid .prime-action { font-size: 2.3vmin !important; margin-bottom: 0%;}\r\n.landing-page-mid .main-heading{font-size: 7vmin !important;line-height: 1.2em !important;}\r\n.landing-page-mid .sub-heading{font-size: 3vmin !important; line-height: 1.3em !important;}\r\n\r\n\r\n\r\n}\r\n\r\n@media (min-width: 100px) and (max-width:767px) { \r\n\r\n.landing-page-mid .input-section .input-outer { float: left; width: 48% !important;}\r\n.landing-page-mid .input-section {width: 90%; margin: auto;margin-left: -4px;}\r\n.landing-page-header .logo img {max-width: 28%;}\r\n.question-section-outer {float: left; width: 90%; margin-left: 5%; }\r\n.mid-width {width: 100%;float: left;text-align: center; min-height: 35px !important;}\r\n.top-head {padding: 10px 20px;}\r\n.left-section {float: left;width: 100%;}\r\n.result-small-section {float: left; padding: 15px; min-height: 100px;}\r\n.cta-outer {float: left; width: 100%;background: #fff;padding: 13px 0;text-align: center;}\r\n.cta-outer .container { width: 100%; padding: 10px 0;}\r\n.cta-outer .input-section .input-outer { float: left; width: 49%;}\r\n.right-section { width: 100%;height: auto;}\r\n.landing-page-mid { width: 100vw; height: 90vh; padding: 10% 8% 7% !important;}\r\n.landing-page-header {padding-top: 0px;left: 0px;background: none !important;}\r\n.landing-footer-outer { position: relative;}\r\n#main-profile .logo {height: auto;}\r\n.landing-footer-outer .powered-by img {width: 15% !important;padding-right: 0px;padding-bottom: 0px !important;}\r\n.landing-footer-outer .powered-by { width: 100%;}\r\n.landing-footer-outer .powered-by span{font-size: 3.2vmin;}\r\n.questions .question-section {padding: 30px 20px;}\r\nlogo {position: relative; float: left; width: 100%;}\r\n.switch-outer .switch-que {width: 70%; display: inline-block; vertical-align: middle; float:none; }\r\n.switch-que + .pull-right {display: inline-block; vertical-align: middle;float:none !important; width: 28%;}\r\n.switch-outer {padding: 8px 8px;}\r\n.page_2 { position: relative !important; width: 100% !important; float: none;  margin-top: -55px;  margin-left: 40px;   margin-bottom: 30px; overflow: } \r\n.landing-footer-outer {  position: absolute;}\r\n.landing-page-mid .prime-action { font-size: 2.8vmin !important; margin-bottom:0 !important; margin-top: 1%;}\r\n.landing-page-mid .main-heading{font-size: 6vmin !important;line-height: 1.2em !important; margin-bottom: 1% !important; margin-top: 0%;}\r\n.landing-page-mid .sub-heading{font-size: 3.5vmin !important; line-height: 1.3em !important; padding-bottom:3% !important;}\r\n.disc-set{ width:100% !important; font-family: montserratlight; font-size: 10px;}\r\n.questions{ padding-top: 90px;}\r\n.redo-link ul { right: 5%; top: 4% !important;}\r\n.redo-link ul li a .material-icons { font-size: 14px!important; margin-top: 5px;}\r\n.result-centre-outer .mid-width p { padding: 5px 25px; margin: 0 !important; font-size: 5vmin !important;}\r\n.redo-link ul li {padding: 2px 7px !important;}\r\n.result-centre-outer .prime-action { font-size: 10px;  margin-top: 12px; margin-bottom: 12px;}\r\n.cp1 .landing-page-mid .input-section .input-outer input{ font-size: 3vmin !important;  padding: 3% 2% !important; border: 1px solid #f7da64 !important;}\r\n.cp2 .landing-page-mid .input-section .input-outer input{ font-size: 3vmin !important;  padding: 3% 2% !important; border: 1px solid #fff !important;}\r\n.cp3 .landing-page-mid .input-section .input-outer input{ font-size: 3vmin !important;  padding: 3% 2% !important; border: 1px solid #fff !important;}\r\n.questions-header header .logo { padding-top: 5px;}\r\n.questions .question-section-outer .prime-action{font-size: 4vmin;  padding: 1% 10%;}\r\n.result-full-section{ width:100% !important; padding-bottom:0; min-height: 35px !important;}\r\n.result-small-section{ width:33.3%; padding-bottom:0; min-height: 70px;}\r\n.result-small-section p:nth-child(1) {font-family: montserratlight !important; font-size: 4vmin;}\r\n.result-small-section p:nth-child(2) {font-family: montserratlight !important; font-size: 2.8vmin;}\r\n.result-small-section p:nth-child(3) {font-family: montserratlight !important; font-size: 2.5vmin;}\r\n.share-set {float: left;width: 100%;}\r\n.share-link{ width:100%;}\r\n.share-link ul li {float: left;}\r\n.bottom-section {width: 100% ; float: left;}\r\n.cp1 .result-centre-outer { margin: 0.3% 3%; }\r\n.cp2 .result-centre-outer { margin: 0.3% 3%;}\r\n.cp3 .result-centre-outer { margin: 0.3% 3%;}\r\n.landing-page-mid .input-section .input-outer span { top: 78%; font-size: 2.5vmin;}\r\n.lead-heading-temp1 {font-size: 14px; padding: 0 !important; }\r\n.result-centre-outer .cta-outer .input-section .input-outer input {font-size: 13px!important; padding: 9px 2% !important}\r\n.result-centre-outer .cta-outer .input-section .input-outer span {font-size: 1.5vmin; bottom: -1px;}\r\n.result-centre-outer .container-temp .prime-action {font-size: 12px; margin-bottom: 10px; margin-top: 11px;}\r\n.recom-section .leadform-outer { padding: 0 12% 6% 12% !important;}\r\n.recom-section .leadform-outer h1 {padding-left: 0; margin-top: 0; font-size: 25px; margin-bottom: 0;}\r\n.recom-section .leadform-outer h5{ padding-left:0;}\r\n.recom-section .outer-main{ height: auto !important;}\r\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) { width: 98% !important; }\r\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input { padding: 1.8% 2% !important; }\r\n}\r\n@media (min-width: 200px) and (max-width:600px) {\r\n\r\n    .landing-page-mid .prime-action { padding: 2% 8%;}\r\n}\r\n "

/***/ },

/***/ 866:
/***/ function(module, exports) {

module.exports = "/**\r\n * selectize.default.css (v0.12.1) - Default Theme\r\n * Copyright (c) 2013–2015 Brian Reavis & contributors\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this\r\n * file except in compliance with the License. You may obtain a copy of the License at:\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software distributed under\r\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF\r\n * ANY KIND, either express or implied. See the License for the specific language\r\n * governing permissions and limitations under the License.\r\n *\r\n * @author Brian Reavis <brian@thirdroute.com>\r\n */\r\n.selectize-control.plugin-drag_drop.multi > .selectize-input > div.ui-sortable-placeholder {\r\n  visibility: visible !important;\r\n  background: #f2f2f2 !important;\r\n  background: rgba(0, 0, 0, 0.06) !important;\r\n  border: 0 none !important;\r\n  -webkit-box-shadow: inset 0 0 12px 4px #ffffff;\r\n  box-shadow: inset 0 0 12px 4px #ffffff;\r\n}\r\n.selectize-control.plugin-drag_drop .ui-sortable-placeholder::after {\r\n  content: '!';\r\n  visibility: hidden;\r\n}\r\n.selectize-control.plugin-drag_drop .ui-sortable-helper {\r\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n.selectize-dropdown-header {\r\n  position: relative;\r\n  padding: 5px 8px;\r\n  border-bottom: 1px solid #d0d0d0;\r\n  background: #f8f8f8;\r\n  -webkit-border-radius: 3px 3px 0 0;\r\n  -moz-border-radius: 3px 3px 0 0;\r\n  border-radius: 3px 3px 0 0;\r\n}\r\n.selectize-dropdown-header-close {\r\n  position: absolute;\r\n  right: 8px;\r\n  top: 50%;\r\n  color: #303030;\r\n  opacity: 0.4;\r\n  margin-top: -12px;\r\n  line-height: 20px;\r\n  font-size: 20px !important;\r\n}\r\n.selectize-dropdown-header-close:hover {\r\n  color: #000000;\r\n}\r\n.selectize-dropdown.plugin-optgroup_columns .optgroup {\r\n  border-right: 1px solid #f2f2f2;\r\n  border-top: 0 none;\r\n  float: left;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n.selectize-dropdown.plugin-optgroup_columns .optgroup:last-child {\r\n  border-right: 0 none;\r\n}\r\n.selectize-dropdown.plugin-optgroup_columns .optgroup:before {\r\n  display: none;\r\n}\r\n.selectize-dropdown.plugin-optgroup_columns .optgroup-header {\r\n  border-top: 0 none;\r\n}\r\n.selectize-control.plugin-remove_button [data-value] {\r\n  position: relative;\r\n  padding-right: 24px !important;\r\n}\r\n.selectize-control.plugin-remove_button [data-value] .remove {\r\n  z-index: 1;\r\n  /* fixes ie bug (see #392) */\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 17px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  color: inherit;\r\n  text-decoration: none;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  padding: 2px 0 0 0;\r\n  border-left: 1px solid #0073bb;\r\n  -webkit-border-radius: 0 2px 2px 0;\r\n  -moz-border-radius: 0 2px 2px 0;\r\n  border-radius: 0 2px 2px 0;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n.selectize-control.plugin-remove_button [data-value] .remove:hover {\r\n  background: rgba(0, 0, 0, 0.05);\r\n}\r\n.selectize-control.plugin-remove_button [data-value].active .remove {\r\n  border-left-color: #00578d;\r\n}\r\n.selectize-control.plugin-remove_button .disabled [data-value] .remove:hover {\r\n  background: none;\r\n}\r\n.selectize-control.plugin-remove_button .disabled [data-value] .remove {\r\n  border-left-color: #aaaaaa;\r\n}\r\n.selectize-control {\r\n  position: relative;\r\n}\r\n.selectize-dropdown,\r\n.selectize-input,\r\n.selectize-input input {\r\n  color: #303030;\r\n  font-family: inherit;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  -webkit-font-smoothing: inherit;\r\n}\r\n.selectize-input,\r\n.selectize-control.single .selectize-input.input-active {\r\n  background: #ffffff;\r\n  cursor: text;\r\n  display: inline-block;\r\n}\r\n.selectize-input {\r\n  border: 1px solid #d0d0d0;\r\n  padding: 8px 8px;\r\n  display: inline-block;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n  z-index: 1;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n}\r\n.selectize-control.multi .selectize-input.has-items {\r\n  padding: 5px 8px 2px;\r\n}\r\n.selectize-input.full {\r\n  background-color: #ffffff;\r\n}\r\n.selectize-input.disabled,\r\n.selectize-input.disabled * {\r\n  cursor: default !important;\r\n}\r\n.selectize-input.focus {\r\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\r\n}\r\n.selectize-input.dropdown-active {\r\n  -webkit-border-radius: 3px 3px 0 0;\r\n  -moz-border-radius: 3px 3px 0 0;\r\n  border-radius: 3px 3px 0 0;\r\n}\r\n.selectize-input > * {\r\n  vertical-align: baseline;\r\n  display: -moz-inline-stack;\r\n  display: inline-block;\r\n  zoom: 1;\r\n  *display: inline;\r\n}\r\n.selectize-control.multi .selectize-input > div {\r\n  cursor: pointer;\r\n  margin: 0 3px 3px 0;\r\n  padding: 2px 6px;\r\n  background: #1da7ee;\r\n  color: #ffffff;\r\n  border: 1px solid #0073bb;\r\n}\r\n.selectize-control.multi .selectize-input > div.active {\r\n  background: #92c836;\r\n  color: #ffffff;\r\n  border: 1px solid #00578d;\r\n}\r\n.selectize-control.multi .selectize-input.disabled > div,\r\n.selectize-control.multi .selectize-input.disabled > div.active {\r\n  color: #ffffff;\r\n  background: #d2d2d2;\r\n  border: 1px solid #aaaaaa;\r\n}\r\n.selectize-input > input {\r\n  display: inline-block !important;\r\n  padding: 0 !important;\r\n  min-height: 0 !important;\r\n  max-height: none !important;\r\n  max-width: 100% !important;\r\n  margin: 0 1px !important;\r\n  text-indent: 0 !important;\r\n  border: 0 none !important;\r\n  background: none !important;\r\n  line-height: inherit !important;\r\n  -webkit-user-select: auto !important;\r\n  -webkit-box-shadow: none !important;\r\n  box-shadow: none !important;\r\n}\r\n.selectize-input > input::-ms-clear {\r\n  display: none;\r\n}\r\n.selectize-input > input:focus {\r\n  outline: none !important;\r\n}\r\n.selectize-input::after {\r\n  content: ' ';\r\n  display: block;\r\n  clear: left;\r\n}\r\n.selectize-input.dropdown-active::before {\r\n  content: ' ';\r\n  display: block;\r\n  position: absolute;\r\n  background: #f0f0f0;\r\n  height: 1px;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.selectize-dropdown {\r\n  position: absolute;\r\n  z-index: 10;\r\n  border: 1px solid #d0d0d0;\r\n  background: #ffffff;\r\n  margin: -1px 0 0 0;\r\n  border-top: 0 none;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  -webkit-border-radius: 0 0 3px 3px;\r\n  -moz-border-radius: 0 0 3px 3px;\r\n  border-radius: 0 0 3px 3px;\r\n}\r\n.selectize-dropdown [data-selectable] {\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n}\r\n.selectize-dropdown [data-selectable] .highlight {\r\n  background: rgba(125, 168, 208, 0.2);\r\n  -webkit-border-radius: 1px;\r\n  -moz-border-radius: 1px;\r\n  border-radius: 1px;\r\n}\r\n.selectize-dropdown [data-selectable],\r\n.selectize-dropdown .optgroup-header {\r\n  padding: 5px 8px;\r\n}\r\n.selectize-dropdown .optgroup:first-child .optgroup-header {\r\n  border-top: 0 none;\r\n}\r\n.selectize-dropdown .optgroup-header {\r\n  color: #303030;\r\n  background: #ffffff;\r\n  cursor: default;\r\n}\r\n.selectize-dropdown .active {\r\n  background-color: #f5fafd;\r\n  color: #495c68;\r\n}\r\n.selectize-dropdown .active.create {\r\n  color: #495c68;\r\n}\r\n.selectize-dropdown .create {\r\n  color: rgba(48, 48, 48, 0.5);\r\n}\r\n.selectize-dropdown-content {\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n.selectize-control.single .selectize-input,\r\n.selectize-control.single .selectize-input input {\r\n  cursor: pointer;\r\n}\r\n.selectize-control.single .selectize-input.input-active,\r\n.selectize-control.single .selectize-input.input-active input {\r\n  cursor: text;\r\n}\r\n/* .selectize-control.single .selectize-input:after {\r\n  content: ' ';\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 15px;\r\n  margin-top: -3px;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 5px 5px 0 5px;\r\n  border-color: #808080 transparent transparent transparent;\r\n} */\r\n.selectize-control.single .selectize-input.dropdown-active:after {\r\n  margin-top: -4px;\r\n  border-width: 0 5px 5px 5px;\r\n  border-color: transparent transparent #808080 transparent;\r\n}\r\n.selectize-control.rtl.single .selectize-input:after {\r\n  left: 15px;\r\n  right: auto;\r\n}\r\n.selectize-control.rtl .selectize-input > input {\r\n  margin: 0 4px 0 -2px !important;\r\n}\r\n.selectize-control .selectize-input.disabled {\r\n  opacity: 0.5;\r\n  background-color: #fafafa;\r\n}\r\n.selectize-control.multi .selectize-input.has-items {\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n.selectize-control.multi .selectize-input.disabled [data-value] {\r\n  color: #999;\r\n  text-shadow: none;\r\n  background: none;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n.selectize-control.multi .selectize-input.disabled [data-value],\r\n.selectize-control.multi .selectize-input.disabled [data-value] .remove {\r\n  border-color: #e6e6e6;\r\n}\r\n.selectize-control.multi .selectize-input.disabled [data-value] .remove {\r\n  background: none;\r\n}\r\n.selectize-control.multi .selectize-input [data-value] {\r\n  text-shadow: 0 1px 0 rgba(0, 51, 83, 0.3);\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n  background-color: #1b9dec;\r\n  background-image: -moz-linear-gradient(top, #1da7ee, #178ee9);\r\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#1da7ee), to(#178ee9));\r\n  background-image: -webkit-linear-gradient(top, #1da7ee, #178ee9);\r\n  background-image: -o-linear-gradient(top, #1da7ee, #178ee9);\r\n  background-image: linear-gradient(to bottom, #1da7ee, #178ee9);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff1da7ee', endColorstr='#ff178ee9', GradientType=0);\r\n  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.2),inset 0 1px rgba(255,255,255,0.03);\r\n  box-shadow: 0 1px 0 rgba(0,0,0,0.2),inset 0 1px rgba(255,255,255,0.03);\r\n}\r\n.selectize-control.multi .selectize-input [data-value].active {\r\n  background-color: #0085d4;\r\n  background-image: -moz-linear-gradient(top, #008fd8, #0075cf);\r\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#008fd8), to(#0075cf));\r\n  background-image: -webkit-linear-gradient(top, #008fd8, #0075cf);\r\n  background-image: -o-linear-gradient(top, #008fd8, #0075cf);\r\n  background-image: linear-gradient(to bottom, #008fd8, #0075cf);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff008fd8', endColorstr='#ff0075cf', GradientType=0);\r\n}\r\n.selectize-control.single .selectize-input {\r\n  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8);\r\n  box-shadow: 0 1px 0 rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8);\r\n  background-color: #f9f9f9;\r\n  background-image: -moz-linear-gradient(top, #fefefe, #f2f2f2);\r\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fefefe), to(#f2f2f2));\r\n  background-image: -webkit-linear-gradient(top, #fefefe, #f2f2f2);\r\n  background-image: -o-linear-gradient(top, #fefefe, #f2f2f2);\r\n  background-image: linear-gradient(to bottom, #fefefe, #f2f2f2);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffefefe', endColorstr='#fff2f2f2', GradientType=0);\r\n}\r\n.selectize-control.single .selectize-input,\r\n.selectize-dropdown.single {\r\n  border-color: #b8b8b8;\r\n}\r\n.selectize-dropdown .optgroup-header {\r\n  padding-top: 7px;\r\n  font-weight: bold;\r\n  font-size: 0.85em;\r\n}\r\n.selectize-dropdown .optgroup {\r\n  border-top: 1px solid #f0f0f0;\r\n}\r\n.selectize-dropdown .optgroup:first-child {\r\n  border-top: 0 none;\r\n}\r\n"

/***/ },

/***/ 867:
/***/ function(module, exports) {

module.exports = "body{margin:0;padding:0;font-size:14px;  background: #f2f2f2 !important; float: left; width:100%;}\r\n.template-section input:not([type]),.template-section input[type=text],.template-section input[type=password],.template-section input[type=email],.template-section input[type=url],.template-section input[type=time],.template-section input[type=date],.template-section input[type=datetime],.template-section input[type=datetime-local],.template-section input[type=tel],.template-section input[type=number],.template-section input[type=search],.template-section input[type=FirstName],.template-section input[type=LastName],input[type=Phone],.template-section textarea.materialize-textarea{background-color:transparent;border:1px solid #d9dad3;border-radius:0;outline:none;width:100%;font-size:16px;margin:0 0 15px 0;padding:16px 2%;box-shadow:none;transition:all 0.3s;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}\r\n.template001{width:100%;height:100%;list-style-position:outside;margin:0;padding:0;}\r\n\r\n.input-section input:not([type]),.input-section input[type=text],.input-section input[type=password],.input-section input[type=email],.input-section input[type=url],.input-section input[type=time],.input-section input[type=date],.input-section input[type=datetime],.input-section input[type=datetime-local],.input-section input[type=tel],.input-section input[type=number],.input-section input[type=search],.input-section input[type=FirstName],.input-section input[type=LastName],input[type=Phone],.input-section textarea.materialize-textarea{background-color:transparent;border:1px solid #d9dad3;border-radius:0;outline:none;width:100%;font-size:16px;margin:0 0 30px 0;padding:16px 2%;box-shadow:none;transition:all 0.3s;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}\r\n.template001{width:100%;height:100%;list-style-position:outside;margin:0;padding:0;}\r\n\r\n.question-components input{background-color:transparent;border:1px solid #d9dad3;border-radius:0;outline:none;width:100%;font-size:16px;margin:0 0 15px 0;padding:16px 2%;box-shadow:none;transition:all 0.3s;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box; border-collapse:separate;}\r\n\r\n/*Main Section Style */\r\n.main-bg{background:url(\"\") no-repeat center center fixed;-webkit-background-size:cover !important;-moz-background-size:cover !important;-o-background-size:cover !important;background-size:cover !important;width:100%;height:100%;position:relative;vertical-align:middle;text-align:center; box-shadow: 0 2px 9px 2px rgba(0,0,0,0.4);}\r\n.main-body{ float: left; width: 100%;}\r\n.container-temp{width:90%;margin:0 auto;display:inline-block;}\r\nselect:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}\r\n\r\n/*LANDING PAGE CSS START HERE */\r\n\r\nlogo{position:absolute;left:0px;}\r\nheader .logo a{cursor:default}\r\n\r\n/*header section*/\r\n.landing-page-header{float:left;width:100%;padding:10px;position:absolute;top:0px;}\r\n.landing-page-header .logo{float:left;padding:15px 10px;width:180px;}\r\n.landing-page-header .logo img{max-width:100%; max-height: 50px;}\r\n.landing-page-header .logo span{color:#fff;font-size:18px;margin-left:15px;font-family:montserratregular;}\r\n\r\n/*header section end*/\r\n\r\n/*Content section */\r\n\r\n.landing-page-mid{width:100vw !important;display:table-cell;vertical-align:middle;height:100vh !important;text-align:center; background:rgba(0,0,0,0.45);     padding: 8% !important; }\r\n.landing-page-mid header{width:90%;margin:0 auto;word-break:break-word; padding-top:20px;}\r\n\r\n/*.input-outer {    width: 100vw; display: table-cell; vertical-align: middle;text-align: center;  } */\r\n.landing-page-mid .cta-outer{width:100vw;display:table-cell;vertical-align:middle;height:20vh;text-align:center;}\r\n.landing-page-mid .main-head{font-family:montserratregular;font-size:48px;color:#00e3d8;word-wrap:break-word;}\r\n.landing-page-mid .sub-head{font-family:montserratregular;font-size:24px;color:#e5e5e6;word-wrap:break-word;}\r\n.landing-page-mid .description{font-family:montserratregular;font-size:14px;color:#b8b9bb;margin-top:25px;word-wrap:break-word;padding:0 20%;}\r\n.landing-page-mid .input-section{width:65%;margin: 0 auto; display: inline-block;}\r\n.landing-page-mid .input-section input{width:43%!important;margin:8px;border:2px solid #c4c4c6!important;color:#fefeff;font-family:montserratregular;font-size:14px!important;}\r\n.landing-page-mid .input-section::-webkit-input-placeholder{color:#c4c4c6;}\r\n.landing-page-mid .input-section .input-outer{float:left;width:49%;position:relative;}\r\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){width:100%;}\r\n.landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #c4c4c6!important;color:#fefeff;font-family:montserratregular;font-size:14px!important;margin-bottom:20px !important;}\r\n.landing-page-mid .input-section .input-outer span{float:left;width:100%;position:absolute;top:68px;left:25px;text-align:left;padding-left:2px;color:#f44336;font-size:12px;}\r\n.landing-footer-outer{position:absolute;width:100%;padding:10px 25px; bottom:0;}\r\n.landing-footer-outer .footer-nav{margin:0;padding:0;float:left;}\r\n.landing-footer-outer .footer-nav li{float:left;display:inline;}\r\n.landing-footer-outer .footer-nav li a{color:#fff;font-family:montserratregular;font-size:12px;text-decoration:none;}\r\n.landing-footer-outer .footer-nav li a:hover{color:#fff;}\r\n.landing-footer-outer .footer-nav li span{color:#fff;font-family:montserratregular;font-size:12px;text-decoration:none;padding:5px 10px;}\r\n.landing-footer-outer .powered-by{float:right;text-align:right;}\r\n.landing-footer-outer .powered-by span{color:#fff;font-size:12px;margin-right:5px;font-family:montserratregular; text-shadow: 3px 4px 3px rgba(0,0,0,0.5);}\r\n.landing-footer-outer .powered-by img{width:44%;padding-bottom:5px;}\r\n.landing-page-mid .prime-action{ font-size:2min !important; box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3); color: #ffffff !important; margin-bottom: 80px; text-transform: uppercase;}\r\n \r\n\r\n\r\n/*LANDING PAGE CSS END HERE */\r\n\r\n/*Questions Section Style Start*/\r\n\r\n.questions{padding-top:7%;float:left;width:100%; height: 100% !important; padding-bottom:3%; min-height: 100vh;}\r\n.question-section-outer{float:left;width:66.66%;margin-left:16.6%;}\r\n.questions .question-section-outer .questions-header header{background:#161a29;float:left;width:100%;padding:0; box-shadow:2px 2px 10px 0px rgba(0,0,0,0.10); }\r\n.questions .question-section-outer .questions-header header .p-right0{padding-right:0;}\r\n.questions .question-section-outer .questions-header header .logo{float:left;padding:10px;}\r\n.questions .question-section-outer .questions-header header .right-sec{float:left;background:#f7da64;min-height:70px;padding:13px 10px 10px 2%;position:absolute; right:0;}\r\n.questions .question-section-outer .questions-header header .right-sec i{font-size:20px;color:#012435;position:absolute;left:-72px;}\r\n.questions .question-section-outer .questions-header header .right-sec p{float:left;font-size:11px;color:#012435;padding-left:26px;font-family:montserratregular;margin-bottom:5px; margin-top:0;}\r\n.questions .question-section-outer .questions-header header .right-sec span{float:left;font-size:20px;color:#012435;font-family:montserratregular;padding-left:5px; width:100%;}\r\n.que-fixed{position:fixed;top:0;width:100%;z-index:99;}\r\n.template-section .que-fixed { z-index: -1;}\r\n.question-page{padding-top:7%;}\r\n.questions .question-head{font-family:montserratregular;font-size:4.5vmin;text-align:center;color:#232f3f;margin-bottom:5px; word-break: break-word;}\r\n.questions .question-subhead{font-family:montserratlight;font-size:2.7vmin;text-align:center;color:#232f3f;width:75%;margin:0 auto;}\r\n.questions .section-head{font-size:20px;margin-bottom:10px;font-family:montserratlight;color:#666e78;width:100%;float:left; word-break:break-word;}\r\n.questions .file-outer .section-head{font-size:22px;margin-bottom:10px;font-family:montserratlight;color:#666e78;}\r\n.questions .section-head i{color:#dcdddf;font-size:24px;margin-top:4px;}\r\n.questions .question-components{width:100%;display:inline-block;padding-bottom:30px;}\r\n.questions .question-components .check-comp label{margin-bottom:0;min-height:62px;color:#666e78;}\r\n.questions .section-head span{margin-bottom:10px;display:inline-block;}\r\n.questions .question-components input{color:#666e78}\r\n.questions .date-picker-outer .section-head{font-size:22px;margin-bottom:10px;font-family:montserratlight;color:#666e78;margin-top:-20px;}\r\n\r\n\r\n.question-section .input-section .input-outer span  {float: left; width: 100%;text-align: left; color: #f44336;font-size: 12px;z-index: 1; margin-top: -22px;  margin-bottom: 8px;}\r\n.head-padding{padding-top:10px;}\r\n.questions .question-section{ box-shadow:3px 10px 19px 5px rgba(0,0,0,0.10);}\r\n.questions .question-section{width:100%;display:inline-block;padding:30px 40px;background:#fff; margin-top: 30px;}\r\n.questions .question-section-outer .prime-action{ background:#f3d455 !important; border:2px solid #e6c746 !important; }\r\n/*Questions Section Style End*/\r\n\r\n/*Common Style for All Themes  */\r\n\r\n.input-section:-moz-placeholder{    /* Firefox 18- */\r\ncolor:#c4c4c6;}\r\n.input-section::-moz-placeholder{    /* Firefox 19+ */\r\ncolor:#c4c4c6;}\r\n.input-section:-ms-input-placeholder{color:#c4c4c6;}\r\n.prime-action{font-family:montserratregular;font-size:18px;color:#28324e;margin-top:30px;margin-bottom:40px;padding:10px 60px;border-radius:0!important;white-space:normal;}\r\n\r\n\r\n/* counter Buttons Control*/\r\n.counter{float:left;padding:5px;border:1px solid #dcdddf;font-family:montserratlight;margin-bottom:20px;}\r\n.qty{width:100px!important;height:25px;text-align:center;float:left;border:none!important;margin-bottom:0!important;font-size:16px!important;}\r\n.qtyplus{width:25px;height:25px;background:none;float:left;margin-left:10px;cursor:pointer;font-size:20px;padding:5px;color:#f7da64;}\r\n.qtyminus{width:25px;height:25px;float:left;margin-right:10px;cursor:pointer;font-size:20px;padding:5px;color:#f7da64;}\r\n.qtyminus .material-icons,.qtyplus .material-icons{font-size:20px!important}\r\n\r\n/* switch Buttons  Control */\r\n.switch-outer{width:100%;float:left;padding:8px 15px;border:1px solid #d9dad3;font-size:16px;font-weight:normal;line-height:16px;border-bottom:0;font-family:montserratlight;}\r\n.switch-outer:last-child{border-bottom:1px solid #d9dad3;}\r\n.switch-outer .switch-que{float:left;padding:12px;font-size:16px;text-align:left;font-family:montserratlight;width:80%;line-height:20px;color:#232f3f;}\r\n.switch-outer .switch{display:table-cell;vertical-align:middle;    padding: 9px 5px;\r\n    margin-top: -1px;}\r\n.switch-outer .cmn-toggle{position:absolute;margin-left:-9999px;visibility:hidden;}\r\n.switch-outer .cmn-toggle + label{display:block;position:relative;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}\r\n.switch-outer input.cmn-toggle-round-flat + label{padding:2px;width:62px;height:30px;background-color:#ccc;-webkit-border-radius:60px;-moz-border-radius:60px;-ms-border-radius:60px;-o-border-radius:60px;border-radius:60px;-webkit-transition:background 0.4s;-moz-transition:background 0.4s;-o-transition:background 0.4s;transition:background 0.4s;}\r\n.switch-outer input.cmn-toggle-round-flat + label:before,input.cmn-toggle-round-flat + label:after{display:block;position:absolute;content:\"\";}\r\n.switch-outer input.cmn-toggle-round-flat + label:before{top:2px;left:2px;bottom:2px;right:2px;background-color:#fff;-webkit-border-radius:60px;-moz-border-radius:60px;-ms-border-radius:60px;-o-border-radius:60px;border-radius:60px;-webkit-transition:background 0.4s;-moz-transition:background 0.4s;-o-transition:background 0.4s;transition:background 0.4s;}\r\n.switch-outer input.cmn-toggle-round-flat + label:after{top:4px;left:4px;bottom:4px;width:23px;background-color:inherit;-webkit-border-radius:52px;-moz-border-radius:52px;-ms-border-radius:52px;-o-border-radius:52px;border-radius:52px;-webkit-transition:margin 0.4s,background 0.4s;-moz-transition:margin 0.4s,background 0.4s;-o-transition:margin 0.4s,background 0.4s;transition:margin 0.4s,background 0.4s;}\r\n.switch-outer input.cmn-toggle-round-flat:checked + label{background-color:#f7da64;}\r\n.switch-outer input.cmn-toggle-round-flat:checked + label:after{margin-left:30px;background-color:inherit;}\r\n\r\n/*input*/\r\n.input-icon{color:initial;position:relative;top:-60px;font-size:16px;background:none;border:none;text-align:right;padding:6px 10px 6px 20px;}\r\n.input-group-addon.input-icon{color:#f7da64;}\r\n\r\n/*File Upload  Control*/\r\n.file-field{position:relative;}\r\n.input-field{position:relative;max-height:54px;float:left;width:100%;font-family:montserratlight}\r\n.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0);z-index:9;}\r\n.file-field .input-icon{left:1px;    /* top: 8px; */color:#f7da64;font-size:24px;text-align:left;}\r\n.file-field input[type=text]{padding-left:55px;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}\r\n\r\n/* Range slider  Control*/\r\n.slider-selection{background:none;background-color:#f7da64;box-shadow:none;}\r\n.slider-track-low,.slider-track-high{background:#ccc;}\r\n.slider-handle{background-color:#fff;background-image:none;box-shadow:none;border:4px solid #f7da64;width:18px;height:18px;}\r\n.tooltip-inner{padding:3px 10px;font-size:16px;background-color:#f7da64;border-radius:0px;}\r\n.tooltip.top .tooltip-arrow{border-top-color:#f7da64;}\r\n.slider .tooltip.top{margin-top:-63px;}\r\n.slider.slider-horizontal{width:100%;}\r\n.slider.slider-horizontal .slider-track{height:6px;}\r\n.slider.slider-horizontal .slider-selection,.slider.slider-horizontal .slider-track-low,.slider.slider-horizontal .slider-track-high{top:1px;}\r\n.slider-track .slider-tick{background:#ccc;opacity:1;}\r\n.slider-tick.in-selection,.slider-tick{background-image:none;background:#f7da64;width:18px;height:18px;}\r\n.slider-selection.tick-slider-selection{background-image:none;background-color:#f7da64;}\r\n.range{font-size:18px;position:relative;top:41px;right:-1px;}\r\n.range-max{top:-6px;float:right;}\r\n.slider.slider-horizontal .slider-track{height:4px;}\r\n.slider.slider-horizontal .slider-tick,.slider.slider-horizontal .slider-handle{margin-top:-4px;}\r\n.slider-handle{width:12px;height:12px;background:#ffffff;border:2px solid #f7da64;}\r\n.slider-track{background:#cccccc;}\r\n.tooltip-inner{background:#f7da64!important;}\r\n.tooltip.top .tooltip-arrow{border-top-color:#f7da64}\r\n.slider-track-low,.slider-track-high{}\r\n.slider-selection.tick-slider-selection{background:#f7da64;}\r\n.slider-tick.in-selection{width:12px;height:12px;background:#f7da64;}\r\n.slider-tick{width:12px;height:12px;background:#cccccc;}\r\n.cir{margin-left:-10px;margin-top:2px;}\r\n.range-slider{text-align:center;}\r\n.slider.slider-horizontal{width:98%;padding:30px 0;padding-bottom:0px;}\r\n.slider.slider-horizontal .slider-tick-label-container .slider-tick-label{font-family:montserratlight;font-size:16px;color:#f7da64;width:100%;}\r\n.slider.slider-horizontal .slider-tick-label-container{white-space:nowrap;margin-top:3px!important;}\r\n.tooltip.top .tooltip-arrow{margin-left:-8px!important;}\r\n\r\n/*new rangeslider Control*/\r\n.range-slider{margin-top:30px;}\r\n.range-slider .well1{position:relative!important;border-color:#f7da64;}\r\n.range-slider .tip{background:#f7da64;border-color:#f7da64;max-width:50px;color:#fff;position:absolute;top:-30px;padding:5px 10px;}\r\n.range-slider .tip:after{top:100%;left:50%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(0,174,165,0);border-top-color:inherit;border-width:8px;margin-left:-8px;color:#fff;}\r\n\r\n/*selectbox style Control*/\r\n.selectize-input{border:1px solid #d9dad3;padding:15px 15px 15px 15px;width:100%;display:inline-block;width:100%;overflow:hidden;position:relative;z-index:1;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:0px;font-family:montserratlight;font-size:14px;  min-height: 51px !important;}\r\n.selectize-input .item{font-family:montserratlight;font-size:16px;}\r\n.selectize-dropdown .active{background-color:#f7da64;color:#28324e; top:50px !important;}\r\n.selectize-dropdown [data-selectable],.selectize-dropdown .optgroup-header{padding:15px;font-family:montserratlight;font-size:14px;}\r\n.selectize-dropdown [data-selectable]{cursor:pointer;overflow:hidden;}\r\n.selectize-control.single .selectize-input,.selectize-dropdown.single{border-color:#d9dad3; background: #f1f3f3 !important;}\r\n.selectize-control.single .selectize-input{ background: #ffffff !important; z-index: 0;}\r\n.control-group{position:relative;font-family:montserratregular;}\r\n.select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#f7da64;bottom:18px}\r\n.selectize-dropdown-content{ max-height: auto!important; }\r\n\r\n\r\n/*Components end */\r\n\r\n/*Date picker color set */\r\n\r\n.datepicker table tr td.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active:hover{background-color:#006dcc!important;background-image:-moz-linear-gradient(to bottom,#f7da64,#03a29a);background-image:-ms-linear-gradient(to bottom,#f7da64,#03a29a);background-image:-webkit-gradient(linear,0 0,0 100%,from(#f7da64),to(#03a29a));background-image:-webkit-linear-gradient(to bottom,#f7da64,#03a29a);background-image:-o-linear-gradient(to bottom,#f7da64,#03a29a);}\r\n.section-head .help-outer{width:40px;position:relative;display:inline-block;top:4px;padding-left:5px;}\r\n.section-head .help-text{display:none;width:250px;background:#eee;border:1px solid #ccc;padding:8px;left:-50px;font-size:12px;position:absolute;color:#999;line-height:18px;font-family:montserratlight;-webkit-box-shadow:3px 3px 10px 0px rgba(224,221,224,1);-moz-box-shadow:3px 3px 10px 0px rgba(224,221,224,1);box-shadow:3px 3px 10px 0px rgba(224,221,224,1);}\r\n.section-head i:hover + .help-text{display:block!important;z-index:99;}\r\n\r\n/*New Radio Style   Control*/\r\n.radio-outer{border:1px solid #d9dad3;border-bottom: 0;font-family:montserratlight;width:100%;float:left;  -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;\r\n    box-sizing: border-box; margin-bottom: 2px; margin-top: -3px; margin-left: -1px; padding: 1px;}\r\n.radio-outer:last-child{border:1px solid #d9dad3 !important;  -webkit-box-sizing: border-box;\r\n      -moz-box-sizing: border-box;\r\n      box-sizing: border-box;\r\n}\r\n.radio-outer:hover{background:#f1f3f3;}\r\n.lable-style{padding:20px 30px;margin-left:22px;}\r\n.control{display:block;position:relative;padding-left:30px;cursor:pointer;font-size:16px;font-weight:500;}\r\n.control input{position:absolute;z-index:-1;opacity:0; width: auto;}\r\n.control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #f7da64;}\r\n.control--radio .control__indicator{border-radius:50%;}\r\n.control input:checked ~ .control__indicator{background:#f7da64;}\r\n.control__indicator:after{content:'';position:absolute;display:none;}\r\n.control input:checked ~ .control__indicator:after{display:block;}\r\n.control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f7da64;border:3px solid #fff;}\r\n.control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#f7da64;}\r\n.control--radio .control__indicator.icon-set:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:none;border:none;}\r\n.control input:checked ~ .control__indicator.icon-set{background:none;}\r\n\r\n\r\n\r\n\r\n\r\n/*New Checkbox Style  Control*/\r\n.checkbox-outer-base{border:1px solid #d9dad3;border-bottom:0px;font-family:montserratlight;width:100%;float:left;padding: 1px;}\r\n.checkbox-outer-base:last-child{border:1px solid #d9dad3;}\r\n.checkbox-outer-base:hover{background:#f1f3f3;}\r\n.checkbox-outer-base.active{background:#f1f3f3;}\r\n.checkbox-outer{border:1px solid #d9dad3;border-bottom:0;font-family:montserratlight;width:100%;float:left;}\r\n.checkbox-outer:last-child{border:1px solid #d9dad3;}\r\n.checkbox-outer-base:last-child.active {border: 1px solid #d9dad3 !important;}\r\n.checkbox-outer-base:last-child:hover{background:#f1f3f3;}\r\n.checkbox-outer:hover{background:#f1f3f3;}\r\n.checkbox-outer.active,.radio-outer.active{background:#f1f3f3;}\r\n.control__indicator.check-set{left:16px!important;border:2px solid #f7da64;}\r\n.control--checkbox{padding:20px 55px;}\r\n.control--checkbox .control__indicator:after{left:6px;top:1px;width:5px;height:11px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg);}\r\n.check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#f7da64;}\r\n.check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#f7da64;}\r\n.check-comp .checkbox-outer .control--checkbox .control__indicator:after{border:none;}\r\n.check-comp .checkbox-outer .control--checkbox{padding:20px 50px;}\r\n\r\n\r\n\r\n.checkbox-outer-base.green .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#000000;}\r\n\r\n\r\n/* New CSS */\r\n.w100{width:100%!important;float:left;}\r\n.select{position:relative;display:inline-block;margin-bottom:15px;width:100%;font-family:montserratlight!important;}\r\n.select select{display:inline-block;width:100%;cursor:pointer;padding:15px;outline:0;border-radius:0;appearance:none;-webkit-appearance:none;-moz-appearance:none;border:1px solid #d9dad3;font-family:montserratlight;font-size:16px;-webkit-appearance:none;-moz-appearance:none;appearance:none;}\r\n[disabled]{color:#bdbdbd;}\r\n[selected]{color:#232f3f;}\r\noption{color:#232f3f;}\r\noption.op{color:red;}\r\n.select select::-ms-expand{display:none;}\r\n.select select:hover,.select select:focus{background:#fff;}\r\n.select__arrow{position:absolute;top:24px;right:15px;width:0;height:0;pointer-events:none;border-style:solid;border-width:8px 5px 0 5px;border-color:#7b7b7b transparent transparent transparent;}\r\n/*.template-section .select__arrow{display: none;}*/\r\n.template-section .selectize-control.single .selectize-input:after{display: none;}\r\ninput[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;}\r\n\r\n/*New circle outer*/\r\n.circle-outer{float:left;width:100%;padding:10px;text-align:center;}\r\n.circle-outer .icon-outer{color:#f7da64;}\r\n.circle-outer .icon-outer i{font-size:40px;}\r\n.circle-outer .num-circle-outer{-webkit-border-radius:50px;-moz-border-radius:50px;border-radius:50px;background:#f7da64;padding:10px 17px;color:#fff;font-size:14px;font-family:montserratregular;}\r\n\r\n/*Common Style for All Themes  */\r\n\r\n/*Result Section Style */\r\n\r\n.full-width{width:100%;position:relative;min-height:1px;padding-right:15px;padding-left:15px;}\r\n.mid-width{width:50%;float:left;}\r\n.small-width{width:33%;position:relative;float:left;min-height:1px;padding-right:15px;padding-left:15px;}\r\n.left-section{float:left;width:100%; }\r\n.top-head{position:relative;z-index:1;float:left;width:100%;background:#f7da64 !important;min-height:50px;padding:10px 35px; opacity: 0.8; text-align: center;}\r\n.top-head h4{color:#6f7072;font-size:24px;text-transform:uppercase;font-family:montserratregular;}\r\n.top-head h4 span{color:#f7da64;font-size:24px;}\r\n.top-head p{margin-bottom:0px;margin-top:6px;}\r\n.share-link{float:left;text-align:right;width:100%; color:#000;}\r\n.share-link ul{padding:0;float:right; margin:0;}\r\n.share-link ul li{float:left;display:inline-block;}\r\n.share-link ul li span{padding:0px 10px;color:#f7da64;font-size:18px;font-weight:bold;}\r\n.share-link ul li a{float:left;display:inline-block;text-decoration:none;color:#000;font-size:18px;padding:5px; opacity:0.4;}\r\n.share-link ul li a .material-icons{font-size:18px!important;margin-top:3px;}\r\n.share-link span i{font-size:16px;margin-left:6px;color:#6e6f71;}\r\n.share-link span li{border-left:1px dotted #6e6f71;height:18px;margin-top:8px;margin-left:5px;margin-right:5px;}\r\n.result-small-section{float:left;padding:0px 30px 30px 30px;min-height:90px;width:33.3%;}\r\n.result-small-section h4{color:#f7da64;text-align:center;font-size:24px;font-family:montserratregular;color:#999;}\r\n.result-small-section h6{color:#f7da64;text-align:center;font-size:14px;font-family:montserratregular;margin:0;line-height:22px;}\r\n.result-half-section{float:left;padding:0px 30px 30px 30px;min-height:170px;width:50%;}\r\n.result-half-section h4{color:#f7da64;text-align:center;font-size:24px;font-family:montserratregular;color:#999;}\r\n.result-half-section h6{color:#f7da64;text-align:center;font-size:14px;font-family:montserratregular;margin:0;line-height:22px;}\r\n.share-link{float:left;}\r\n\r\n\r\n.redo-link ul{ padding: 0; margin: 0; position: absolute; right: 5%; top: 8%;}\r\n.redo-link ul li{float: left; display:inline-block; -webkit-border-radius: 28px;-moz-border-radius: 28px;border-radius: 28px;  padding: 3px 8px;  }\r\n.redo-link ul li:nth-child(1){display:none;}\r\n.redo-link ul li span{padding:2px 10px 0 10px; float: left; font-size: 20px; }\r\n.redo-link ul li a{float:left;display:inline-block;text-decoration:none;color:#fff;font-size:18px; }\r\n.redo-link ul li a .material-icons{font-size:16px!important;margin-top:4px;}\r\n.redo-link span i{font-size:16px;margin-left:6px;color:#6e6f71;}\r\n.redo-link span li{border-left:1px dotted #6e6f71;height:18px;margin-top:8px;margin-left:5px;margin-right:5px;}\r\n\r\n.result-full-section{float:left;padding:30px;min-height:160px;z-index:1;width: 100%;}\r\n.result-full-section h4{color:#f7da64;text-align:center;font-size:30px;font-family:montserratregular;}\r\n.result-full-section h6{color:#f7da64;text-align:center;font-size:14px;font-family:montserratregular;margin:0;line-height:22px;}\r\n.grey-color{color:#9a9a9a!important;}\r\n.small-top-sec p{text-align:center;margin:0;}\r\n.right-section{border-left:1px solid #dfdfdf;width:30%;display:table;height:80vh;padding-right: 20px;box-shadow:inset 2px 0px 9px -6px; background-color:rgba(0, 0, 0, 0.05); display:none;}\r\n.right-section .internal-sec h3{color:#f7da64;float:left;}\r\n.right-section .internal-sec h3 i{font-size:30px;float:left;}\r\n.right-section .internal-sec h3 span{margin-top:3px;float:left;padding-left:10px;font-size:24px;color:#f7da64;}\r\n.right-section .internal-sec h3 span i{float:left;font-size:13px;color:#999999;margin-top:10px;}\r\n.right-section h4{color:#6e7071;font-size:13px;float:left;line-height:20px;width:100%;margin-top:8px;margin-bottom:3px; font-family:montserratlight; word-break: break-word; }\r\n.right-section h5{font-size:13px;float:left;line-height:20px;color:#6e7071;font-family:montserratregular;margin-top:0;}\r\n.cta-outer{float:left;width:100%;padding:13px 2%;text-align:center;}\r\n.cta-outer .container{width:100%;padding:10px 40px;}\r\n.cta-outer .container .input-section{width:100%;padding:20px 50px;margin:0;background:#f5f5f5;float:left;}\r\n.cta-outer .container .input-section input{width:98%!important;margin:6px!important;border:2px solid #cccccc!important;color:#b9b9b9;font-family:montserratregular;font-size:14px!important;background:#ffffff;float:left;cursor:auto;}\r\n.bottom-section{text-align:left;color:#333333;font-size:13px;font-family:montserratregular;padding:0 0 0px 0;float:left;width:70%; opacity:0.5; }\r\n.result-cta-outer .container{width:100%;background:#fff;float:left;}\r\n.result-cta-outer .container .prime-action{background-color:#f9f9f9;font-family:montserratregular;color:#00afa5;padding:6px 40px;border:2px solid #00afa5;text-decoration:none!important;transition:background-color 0.5s ease;}\r\n.result-cta-outer .container .prime-action:hover{background-color:#00afa5;color:#fff;}\r\n.cta-outer .input-section .input-outer{float:left;width:49%; padding:10px 15px;/*background-color:rgba(0, 0, 0, 0.05);*/position: relative;}\r\n.cta-outer .input-section .input-outer:nth-last-child(1):nth-child(odd) {float:left;width:100%;position: relative; }\r\n\r\n.cta-outer .input-section .input-outer input{ margin-bottom:5px; float:left;width:100%;border:2px solid #c4c4c6!important;color:#232f3f;font-family:montserratregular;font-size:14px!important;background:#fff}\r\n.cta-outer .input-section .input-outer input:nth-last-child(1):nth-child(odd){width:97.5%;}\r\n.cta-outer .input-section .input-outer span{    float: left;\r\n    width: 100%;\r\n    text-align: left;\r\n    padding-left: 9px;\r\n    color: #f44336;\r\n    font-size: 12px;\r\n    bottom: -1px;\r\n    /* background: #f2f2f2; */\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 10px;}\r\n.page_2{ box-shadow: 0 2px 9px 2px rgba(0,0,0,0.4); position: relative; float: none; display: table-cell;  height:100vh; width: 100vw !important; background-position: fixed; background-size: cover !important}\r\n\r\n.top-head .mid-width:nth-child(1){width:100%;float:left; font-family:montserratlight !important; text-align: center;}\r\n.top-head .mid-width:nth-child(2){width:30%;float:left; font-family:montserratlight !important;  text-align: left;}\r\n.result-small-section p:nth-child(1){ font-family:montserratlight !important; font-size:5.4vmin; line-height: 1.5em;}\r\n.result-small-section p:nth-child(2){ font-family:montserratregular !important;  font-size:2.2vmin; text-transform: uppercase; opacity: 0.8;}\r\n.result-small-section p:nth-child(3){ font-family:montserratlight !important;font-size:2.4vmin; opacity: 0.8;}\r\n.result-small-section p:nth-child(n+4){ font-family:montserratlight !important;font-size:2.4vmin; opacity: 0.8;}\r\n\r\n\r\n.result-centre-outer{margin:3%; padding:0 4%; padding-bottom: 2%; float: left; width:94%; background: #f7da64 !important; display:inline-block; box-shadow:3px 3px 50px 5px rgba(0,0,0,0.6);  margin-bottom: 0px !important;}\r\n.result-centre-outer .mid-width{ width:100%; text-align: center;  font-family: montserratlight; margin-top: 1%; margin-bottom: 1%; min-height: 52px;}\r\n.result-mid .result-full-section:only-child {\r\n    float: none;\r\n}\r\n.result-centre-outer .result-small-section{ background: #fff; }\r\n.result-centre-outer .mid-width p{ font-family: montserratlight;  font-size:3.6vmin; line-height: 1.5em; padding-top:5px; margin:0; }\r\n.leadform-outer{background: #fff; float: left; width:100%;padding-bottom:2%; margin-bottom:5px;  }\r\n\r\n.result-mid{ width: 100%;display: table;text-align: center; background: #fff;}\r\n.result-full-section{width:100%;display:table-cell;vertical-align:middle;text-align:center; }\r\n.share-set{ float: right; width:30%; min-height: 52px;}\r\n.result-comm{  float: left; width:100%; }\r\n\r\n\r\n/*Result Section Style end*/\r\ninput[type=range]{-webkit-appearance:none;border:1px solid white;width:100%;}\r\ninput[type=range]::-webkit-slider-runnable-track{width:100%;height:5px;background:#ddd;border:none;border-radius:3px;}\r\ninput[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:16px;width:16px;border-radius:50%;background:#f7da64;margin-top:-4px;}\r\n.abc{display:none;background:#666;width:20px;height:20px;}\r\ninput[type=range]::-webkit-slider-thumb:hover{background:#ccc;}\r\ninput[type=range]:focus{outline:none;}\r\ninput[type=range]:focus::-webkit-slider-runnable-track{background:#ccc;}\r\ninput[type=range]::-moz-range-track{width:100%;height:5px;background:#ddd;border:none;border-radius:3px;}\r\ninput[type=range]::-moz-range-thumb{border:none;height:16px;width:16px;border-radius:50%;background:#f7da64;}\r\n\r\n/*hide the outline behind the border*/\r\ninput[type=range]:-moz-focusring{outline:1px solid white;outline-offset:-1px;}\r\ninput[type=range]::-ms-track{width:100%;height:5px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent;}\r\ninput[type=range]::-ms-fill-lower{background:#777;border-radius:10px;}\r\ninput[type=range]::-ms-fill-upper{background:#ddd;border-radius:10px;}\r\ninput[type=range]::-ms-thumb{border:none;height:16px;width:16px;border-radius:50%;background:#f7da64;}\r\ninput[type=range]:focus::-ms-fill-lower{background:#888;}\r\ninput[type=range]:focus::-ms-fill-upper{background:#ccc;}\r\n.range-slider .slider-min{width:2%;float:left;padding-top:8px;color:#f7da64;}\r\n.range-slider .well1{width:100%;float:left;}\r\n.range-slider .slider-max{width:2%;float:right;padding-top:8px;color:#f7da64;}\r\n.tip{position:absolute;border:1px solid black;padding:4px;}\r\n.requiredAsteric{color:#fa555c;margin:0!important; padding-right:2px !important;}\r\n\r\nselect{color:black;}\r\n.choice option{color:black;}\r\n.select-empty{color:gray!important;}\r\n\r\n\r\n.range-slider .irs-slider {top: 29px;width: 20px; height: 20px;}\r\n.range-slider .irs-bar-edge {border: 1px solid #01a098; border-right: 0; background: #f7da64;}\r\n.range-slider .irs-bar {border-top: 1px solid #01a098;border-bottom: 1px solid #01a098; background: #f7da64;}\r\n.range-slider .irs-single { background: #f7da64; font-family: montserratlight; border-radius:8px !important; padding: 1px 14px  !important;}\r\n.range-slider .irs-min, .irs-max{font-family: montserratregular; }\r\n\r\n.question-section-outer .question-section .container-temp { width:100%;}\r\n.question-section-outer .question-section .container-temp .prime-action {margin-bottom: 0; margin-top: 15px;}\r\n.landing-responsive{ width:100%; float: left;}\r\n\r\n.right-section .internal-sec.slimscroll{ height:92vh !important;  padding-bottom:20px;}\r\n.right-section .slimScrollDiv{height:92vh !important; padding-bottom:20px;}\r\n\r\n\r\n\r\n\r\n/*Questions Header css  */\r\n.questions-header header {background: #161a29;float: left;width: 100%;padding: 0;}\r\n.questions-header header .p-right0 {padding-right: 0;}\r\n.questions-header header .logo { float: left; padding:6px 15px;}\r\n.questions-header header .right-sec {float: left; background: #f7da64; min-height: 70px;padding: 13px 10px 10px 2%; position: absolute;right:0;}\r\n.questions-header header .right-sec i {font-size: 20px; color: #012435;position: absolute;left: -76px; z-index: 9;}\r\n.questions-header header .right-sec p {float: left;font-size: 11px;color: #012435; padding-left: 26px;font-family: montserratregular;margin-bottom: 5px;margin-top: 0;}\r\n.questions-header header .right-sec span {float: left;font-size: 20px;color: #012435;font-family: montserratregular;padding-left: 5px; width:100%;}\r\n.que-fixed {position: fixed; top: 0; width: 100%; z-index: 99;}\r\n/*Questions Header css  end*/\r\n.section-set{height: 100vh; padding-top:2%;}\r\n.margin-none{ margin: 0 !important;}\r\n\r\n.disc-set{  float: left; width:100%; text-align: left; padding: 8px;}\r\n\r\n/* new changes sahil */\r\n/*.page_0.w100{ background: #d9dede;}\r\n.page_1.w100{background: #d9dede; }*/\r\n.editor-page-divider{box-shadow: 0 2px 9px 2px rgba(0,0,0,0.4); background: #d9dede;  margin-bottom: 35px;}\r\n.left-section .btn.prime-action.next-step.sliding-next{ margin: 10% 0} \r\n.top-fix-bar{ background: #012435; min-height: 70px;}\r\n\r\n#drawerIframe .landing-page-mid { height: 100vh; }\r\n#drawerIframe .main-bg{ height: 100vh;}\r\n.lead-heading-temp1{\r\n    /*background: rgba(0, 0, 0, 0.05);*/\r\n    padding: 20px 30px;\r\n    text-align: left;\r\n    width: 98%;\r\n    padding-bottom: 0; font-size: 18px; text-align: center;\r\n}\r\n\r\n\r\n/*color style css*/\r\n\r\n.cp1 .check-comp .control input:checked ~ .control__indicator{background:#f3d455;} \r\n.cp1 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #f3d455;}\r\n.cp1 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#f3d455;}\r\n.cp1 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#f3d455;}\r\n.cp1 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #f3d455;}\r\n.cp1 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp1 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp1 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#f3d455;}\r\n.cp1 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp1 .check-comp .control--radio .control__indicator.icon-set i{color:#f3d455;}\r\n.cp1 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f3d455;border:3px solid #fff;}\r\n.cp1 .range-slider .irs-bar-edge {border: 1px solid #f3d455; border-right: 0; background: #f3d455;}\r\n.cp1 .range-slider .irs-bar {border-top: 1px solid #f3d455;border-bottom: 1px solid #f3d455; background: #f3d455;}\r\n.cp1 .range-slider .irs-single { background: #f3d455; font-family: montserratregular;}\r\n.cp1 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.cp1 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\r\n.cp1 .select .selectize-dropdown .active{background-color:#f3d455;color:#ffffff;}\r\n.cp1 .left-section .result-full-section{background: #f3d455 !important}\r\n.cp1 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(247, 218, 100);font-family: montserratbold; float:left; width:100%; text-align: center; margin-bottom: 20px;}\r\n.cp1 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(247, 218, 100, 0.8); font-family: montserratregular; padding:30px; padding-top: 0px; float:left; width:100%; text-align: center;}\r\n/*.cp1 .btn.prime-action.focus,.cp1 .btn.prime-action:focus,.cp1 .btn.prime-action:hover{color:#28324e;text-decoration:none;background:#f7da64;}*/\r\n.cp1 .top-fix-bar{ background: #012435; min-height: 70px; position:relative;}\r\n.cp1 .questions{ background: #d9dede;}\r\n.cp1 .questions .question-section-outer .prime-action{ background:#f3d455 !important; border:2px solid #e6c746 !important; }\r\n.cp1 .result-centre-outer {margin:3% !important;padding: 0 4% ; float:left; width: 94%;background: #f7da64 !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6);}\r\n.cp1 .prime-action{ background:#f3d455 !important; border:2px solid #e6c746 !important; color:#012435 !important; }\r\n.cp1 .leadform-outer .prime-action { background:#012435 !important; border:2px solid #012435 !important; color:#fff !important;}\r\n.cp1 .leadform-outer .prime-action:hover { background:#012435 !important; border:2px solid #012435 !important; color:#fff !important;}\r\n.cp1 .landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #f7da64 !important;color:#f7da64;font-family:montserratregular;font-size:14px!important;}\r\n.cp1 .page_0.editor-page-divider { background: #012435; }\r\n.cp1 .landing-page-mid {background: rgba(1,36,53,0.45);}\r\n.cp1 .landing-page-mid ::-webkit-input-placeholder{color:#f3d455 !important;}\r\n.cp1 .landing-page-mid ::-webkit-input-placeholder{color:#f3d455 !important;}\r\n.cp1 .landing-page-mid :-moz-placeholder { /* Firefox 18- */   color: #f3d455 !important;  }\r\n.cp1 .landing-page-mid ::-moz-placeholder {  /* Firefox 19+ */ color: #f3d455 !important;  }\r\n.cp1 .landing-page-mid :-ms-input-placeholder {color: #f3d455 !important;}\r\n.cp1 .questions-header header .right-sec{ background:#f3d455 !important }\r\n.cp1 .redo-link ul li{ background: #012535;  }\r\n.cp1 .result-centre-outer .mid-width p{color: #fff; margin:0 !important;}\r\n.cp1 .page_2{ background: #012535; }\r\n.cp1 .page_0.main-bg{ background-color: #012435 !important;}\r\n.cp1 .result-overlay{background: rgba(1,36,53,0.45); height: 100vh; float: none; width: 100vw !important; display: table-cell; vertical-align: middle;  }\r\n\r\n\r\n\r\n\r\n\r\n.cp2 .check-comp .control input:checked ~ .control__indicator{background:#EF2158 ;} \r\n.cp2 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #EF2158 ;}\r\n.cp2 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#EF2158 ;}\r\n.cp2 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#EF2158 ;}\r\n.cp2 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #EF2158 ;}\r\n.cp2 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp2 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp2 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#EF2158 ;}\r\n.cp2 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp2 .check-comp .control--radio .control__indicator.icon-set i{color:#EF2158 ;}\r\n.cp2 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#EF2158 ;border:3px solid #fff;}\r\n.cp2 .range-slider .irs-bar-edge {border: 1px solid #EF2158 ; border-right: 0; background: #EF2158 ;}\r\n.cp2 .range-slider .irs-bar {border-top: 1px solid #EF2158 ;border-bottom: 1px solid #EF2158 ; background: #EF2158 ;}\r\n.cp2 .range-slider .irs-single { background: #EF2158 ; font-family: montserratregular;}\r\n.cp2 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.cp2 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#EF2158 ;bottom:18px}\r\n.cp2 .select .selectize-dropdown .active{background-color:#EF2158 ;color:#ffffff;}\r\n.cp2 .left-section .result-full-section{background: #EF2158  !important}\r\n.cp2 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(254, 255, 255); font-family: montserratbold; float:left; width:100%; text-align: center; margin-bottom: 20px;}\r\n.cp2 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(254, 255, 255, 0.8); font-family: montserratregular; padding:30px;  padding-top: 0px; float:left; width:100%; text-align: center;}.cp2 .btn.prime-action.focus,.cp2 .btn.prime-action:focus,.cp2 .btn.prime-action:hover{text-decoration:none;background:#404948;}\r\n.cp2 .top-fix-bar{ background: #404948; min-height: 70px; position: relative;}\r\n.cp2 .questions{ background: #d9dede;}\r\n.cp2 .questions .question-section-outer .prime-action{ background:#EF2158  !important; border:2px solid #EF2158  !important; }\r\n.cp2 .result-centre-outer {margin:3% !important;  padding: 0 4% ; float:left; width: 94%;background: #EF2158  !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0px !important;}\r\n.cp2 .prime-action{ background:#EF2158 !important; border:2px solid #EF2158  !important; color:#ffffff; }\r\n.cp2 .leadform-outer .prime-action { background:#404948 !important; border:2px solid #404948 !important; color:#fff;}\r\n.cp2 .leadform-outer .prime-action:hover { background:#404948 !important; border:2px solid #404948 !important; color:#fff;}\r\n.cp2 .page_0.editor-page-divider { background: #404948; }\r\n.cp2 .landing-page-mid {background: rgba(64,73,72,0.45);}\r\n.cp2 .questions-header header .right-sec{ background:#EF2158 !important }\r\n.cp2 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\r\n.cp2 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\r\n.cp2 .landing-page-mid :-moz-placeholder { /* Firefox 18- */   color: #c4c4c6 !important;  }\r\n.cp2 .landing-page-mid ::-moz-placeholder {  /* Firefox 19+ */ color: #c4c4c6 !important;  }\r\n.cp2 .landing-page-mid :-ms-input-placeholder {color: #c4c4c6 !important;}\r\n.cp2 .redo-link ul li{ background: #404948;  }\r\n.cp2 .result-centre-outer .mid-width p{color: #fff;  margin:0 !important}\r\n.cp2 .bottom-section{ color:#fff}\r\n.cp2 .share-link ul li a{ color:#fff}\r\n.cp2 .page_2{ background: #404948; }\r\n.cp2 .page_0.main-bg{ background-color: #404948 !important;}\r\n.cp2 .result-overlay{background: rgba(64,73,72,0.45); height: 100vh; float: none; width: 100vw !important; display: table-cell; vertical-align: middle;}\r\n\r\n\r\n\r\n\r\n\r\n.cp3 .check-comp .control input:checked ~ .control__indicator{background:#0079c1;} \r\n.cp3 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #0079c1;}\r\n.cp3 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#0079c1;}\r\n.cp3 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#0079c1;}\r\n.cp3 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #0079c1;}\r\n.cp3 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp3 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp3 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#0079c1;}\r\n.cp3 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp3 .check-comp .control--radio .control__indicator.icon-set i{color:#0079c1;}\r\n.cp3 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#34bcad;border:3px solid #fff;}\r\n.cp3 .range-slider .irs-bar-edge {border: 1px solid #0079c1; border-right: 0; background: #0079c1;}\r\n.cp3 .range-slider .irs-bar {border-top: 1px solid #0079c1;border-bottom: 1px solid #0079c1; background: #0079c1;}\r\n.cp3 .range-slider .irs-single { background: #0079c1; font-family: montserratregular;}\r\n.cp3 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.cp3 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#0079c1;bottom:18px}\r\n.cp3 .select .selectize-dropdown .active{background-color:#0079c1;color:#ffffff;}\r\n.cp3 .left-section .result-full-section{background: #0079c1 !important}\r\n.cp3 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(255, 255, 255); font-family: montserratbold; float:left; width:100%; text-align: center; margin-bottom: 20px;}\r\n.cp3 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(255, 255, 255, 0.8); font-family: montserratregular;  padding:30px; padding-top: 0px; float:left; width:100%; text-align: center;}.cp3 .btn.prime-action.focus,.cp3 .btn.prime-action:focus,.cp3 .btn.prime-action:hover{text-decoration:none;background:#404948;}\r\n.cp3 .top-fix-bar{ background: #012435; min-height: 70px; position:relative;}\r\n.cp3 .questions{ background: #d9dede;}\r\n.cp3 .questions .question-section-outer .prime-action{ background:#0079c1 !important; border:2px solid #0079c1 !important; color: #fff; }\r\n.cp3 .result-centre-outer {margin: 3% !important; padding: 0 4% ; float:left; width: 94%;background: #0079c1 !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6);}\r\n.cp3 .prime-action{ background:#0079c1 !important; border:2px solid #0079c1 !important; color: #fff !important; }\r\n.cp3 .leadform-outer .prime-action { background:#012435 !important; border:none!important; color:#fff !important;}\r\n.cp3 .leadform-outer .prime-action:hover { background:#012435 !important; border:none !important; color:#fff;}\r\n.cp3 .page_0.editor-page-divider { background: #012435; }\r\n.cp3 .landing-page-mid {background: rgba(1,36,53,0.45);}\r\n.cp3 .result-centre-outer .mid-width p{color: #fff;  margin:0 !important}\r\n.cp3 .disc-set{ color: rgba(255,255,255,0.8);}\r\n.cp3 .questions-header header .right-sec{ background:#0079c1 !important }\r\n.cp3 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\r\n.cp3 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\r\n.cp3 .landing-page-mid :-moz-placeholder { /* Firefox 18- */   color: #c4c4c6 !important;  }\r\n.cp3 .landing-page-mid ::-moz-placeholder {  /* Firefox 19+ */ color: #c4c4c6 !important;  }\r\n.cp3 .landing-page-mid :-ms-input-placeholder {color: #c4c4c6 !important;}\r\n.cp3 .redo-link ul li{ background: #012535;  }\r\n.result-centre-outer .cta-outer .input-section .input-outer span{    float: left; width: 100%;text-align: left;padding-left: 20px;color: #f44336;font-size: 12px;bottom: -1px;position: absolute;z-index: 1; left: -2px;}\r\n.cp3 .share-link ul li a{ color:#fff}\r\n.cp3 .page_2{ background: #012435; }\r\n.cp3 .page_0.main-bg{ background-color: #012435 !important;}\r\n.cp3 .result-overlay{background: rgba(1,36,53,0.45); height: 100vh; float: none; width: 100vw !important; display: table-cell; vertical-align: middle;}\r\n\r\n/*recommendation css*/\r\n.recom-section{ background: #fff;  float: left; width:100%;}\r\n.recom-section .left-sec{ display: table; width: 100%; }\r\n.recom-section .left-outer{display: table-cell; vertical-align: middle; text-align: center; padding:8%;}\r\n.rec-image-outer{margin: 0 auto; max-width: 350px; max-height: 420px; overflow: hidden; text-align: center; box-shadow: 8px 9px 7px 2px #d1d1d1; min-width: 200px; display: inline-block; }\r\n.rec-image-outer img{width: 100%; }\r\n.recom-section .lead-heading-temp1{ background: none; text-align: left; padding-left:0;  color:#666e78; font-size: 16px; padding-top:0;}\r\n.recom-section .cta-outer .input-section .input-outer {float: left; width: 100%; padding: 10px 0px; background:none; position: relative;}\r\n.recom-section .container-temp{ text-align: left !important; width:100%;}\r\n.recom-section .outer-main {display: table; width: 100%;}\r\n.recom-section .leadform-outer .prime-action { min-width:70%; float: left;}\r\n.recom-section .leadform-outer .container-temp .prime-action { width:98%; margin-top: 15px;}\r\n.recom-section .leadform-outer {padding: 0% 12% 0% 3%; float: none; background: none; margin-bottom:0; display: table-cell; vertical-align: middle;}\r\n.recom-section .leadform-outer h1{ display: inline-block; padding-left:2%; width:100%; word-break: break-word;}\r\n.recom-section .leadform-outer h4{ display: inline-block; padding-left:2%; width:100%; text-transform: uppercase; margin-bottom: 0px; font-family:montserratregular;  font-size: 16px; }\r\n.recom-section .leadform-outer h5{ display: inline-block; padding-left:2%; width:100%;  margin-bottom: 8px; color:#666e78; font-family:montserratlight; font-size: 14px; line-height: 24px;}\r\n.recom-section .w100 .leadform-outer { padding:6%;}\r\n.recom-section .w100 .leadform-outer h1 { text-align: center; padding:0;}  \r\n.recom-section .w100 .leadform-outer h5 {text-align: center;padding:0;}\r\n.recom-section .w100 .lead-heading-temp1{ padding: 20px 30px; text-align: left; width: 98%; padding-bottom: 0; font-size: 16px; text-align: center;}\r\n.recom-section .w100 .cta-outer .input-section .input-outer {float: left; width: 49%; padding: 15px 30px; position: relative;}\r\n.recom-section .w100 .leadform-outer .container-temp .prime-action {font-family: montserratregular;font-size: 18px;color: #28324e; margin-top: 30px; margin-bottom: 40px;padding: 10px 60px; border-radius: 0!important;white-space: normal;}\r\n.recom-section .w100 .container-temp{ text-align: center !important;}\r\n.recom-section .w100 .leadform-outer .container-temp .prime-action{ width:auto; float: none !important;}\r\n.recom-section .w100 .leadform-outer .prime-action{ width:auto; float: none !important;}\r\n.result-centre-outer .recom-section .w100  .cta-outer .input-section .input-outer span{    float: left; width: 100%;text-align: left;padding-left: 20px;color: #f44336;font-size: 12px;bottom: -1px !important;position: absolute;z-index: 1; left: 10px !important;}\r\n.result-centre-outer .recom-section .cta-outer .input-section .input-outer span{    float: left; width: 100%;text-align: left;padding-left: 20px;color: #f44336;font-size: 12px;bottom: -4px !important;position: absolute;z-index: 1; left: -17px !important;}\r\n.result-centre-outer .recom-section .cta-outer .input-section .input-outer:nth-last-child(1):nth-child(odd) {float:left;width:100%;position: relative; }\r\n/*recommendation css end*/\r\n.selectize-dropdown, .selectize-input, .selectize-input input { color: #666e78;}\r\n.container-temp .question-section input{color:#666e78}\r\n\r\n\r\n\r\n.cp4 .check-comp .control input:checked ~ .control__indicator{background:#678D29 ;} \r\n.cp4 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #678D29 ;}\r\n.cp4 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#678D29 ;}\r\n.cp4 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#678D29 ;}\r\n.cp4 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #678D29 ;}\r\n.cp4 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp4 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp4 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#678D29 ;}\r\n.cp4 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp4 .check-comp .control--radio .control__indicator.icon-set i{color:#678D29 ;}\r\n.cp4 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#678D29 ;border:3px solid #fff;}\r\n.cp4 .range-slider .irs-bar-edge {border: 1px solid #678D29 ; border-right: 0; background: #678D29 ;}\r\n.cp4 .range-slider .irs-bar {border-top: 1px solid #678D29 ;border-bottom: 1px solid #678D29 ; background: #678D29 ;}\r\n.cp4 .range-slider .irs-single { background: #678D29 ; font-family: montserratregular;}\r\n.cp4 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.cp4 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#678D29 ;bottom:18px}\r\n.cp4 .select .selectize-dropdown .active{background-color:#678D29 ;color:#ffffff;}\r\n.cp4 .left-section .result-full-section{background: #678D29  !important}\r\n.cp4 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(254, 255, 255); font-family: montserratbold; float:left; width:100%; text-align: center; margin-bottom: 20px;}\r\n.cp4 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(254, 255, 255, 0.8); font-family: montserratregular; padding:30px;  padding-top: 0px; float:left; width:100%; text-align: center;}\r\n.cp4 .btn.prime-action.focus,.cp4 .btn.prime-action:focus,.cp4 .btn.prime-action:hover{text-decoration:none;background:#404948;}\r\n.cp4 .top-fix-bar{ background: #09141f; min-height: 70px; position: relative;}\r\n.cp4 .questions{ background: #d9dede;}\r\n.cp4 .questions .question-section-outer .prime-action{ background:#678D29  !important; border:2px solid #678D29  !important; }\r\n.cp4 .result-centre-outer {margin:3% !important;  padding: 0 4% ; float:left; width: 94%;background: #678D29  !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0px !important;}\r\n.cp4 .prime-action{ background:#678D29 !important; border:2px solid #678D29  !important; color:#ffffff; }\r\n.cp4 .leadform-outer .prime-action { background:#09141f !important; border:2px solid #09141f !important; color:#fff;}\r\n.cp4 .leadform-outer .prime-action:hover { background:#09141f !important; border:2px solid #09141f !important; color:#fff;}\r\n.cp4 .page_0.editor-page-divider { background: #09141f; }\r\n.cp4 .landing-page-mid {background: rgba(9,20,31,0.45);}\r\n.cp4 .questions-header header .right-sec{ background:#678D29 !important }\r\n.cp4 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\r\n.cp4 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\r\n.cp4 .landing-page-mid :-moz-placeholder { /* Firefox 18- */   color: #c4c4c6 !important;  }\r\n.cp4 .landing-page-mid ::-moz-placeholder {  /* Firefox 19+ */ color: #c4c4c6 !important;  }\r\n.cp4 .landing-page-mid :-ms-input-placeholder {color: #c4c4c6 !important;}\r\n.cp4 .redo-link ul li{ background: #09141f;  }\r\n.cp4 .result-centre-outer .mid-width p{color: #fff;  margin:0 !important}\r\n.cp4 .bottom-section{ color:#fff}\r\n.cp4 .share-link ul li a{ color:#fff}\r\n.cp4 .page_2{ background: #09141f; }\r\n.cp4 .page_0.main-bg{ background-color: #09141f !important;}\r\n.cp4 .result-overlay{background: rgba(9,20,31,0.45); height: 100vh; float: none; width: 100vw !important; display: table-cell; vertical-align: middle;}\r\n@media (max-width:775px) {\r\n\t.cp4 .page_2.w100.result-fixed.mobile-result-sticky{\r\n\t    background: #09141f !important;\r\n\t}\r\n}\r\n\r\n\r\n\r\n.cp5 .check-comp .control input:checked ~ .control__indicator{background:#17438B ;} \r\n.cp5 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #17438B ;}\r\n.cp5 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#17438B ;}\r\n.cp5 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#17438B ;}\r\n.cp5 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #17438B ;}\r\n.cp5 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp5 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp5 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#17438B ;}\r\n.cp5 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp5 .check-comp .control--radio .control__indicator.icon-set i{color:#17438B ;}\r\n.cp5 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#17438B ;border:3px solid #fff;}\r\n.cp5 .range-slider .irs-bar-edge {border: 1px solid #17438B ; border-right: 0; background: #17438B ;}\r\n.cp5 .range-slider .irs-bar {border-top: 1px solid #17438B ;border-bottom: 1px solid #17438B ; background: #17438B ;}\r\n.cp5 .range-slider .irs-single { background: #17438B ; font-family: montserratregular;}\r\n.cp5 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.cp5 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#17438B ;bottom:18px}\r\n.cp5 .select .selectize-dropdown .active{background-color:#17438B ;color:#ffffff;}\r\n.cp5 .left-section .result-full-section{background: #17438B  !important}\r\n.cp5 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(254, 255, 255); font-family: montserratbold; float:left; width:100%; text-align: center; margin-bottom: 20px;}\r\n.cp5 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(254, 255, 255, 0.8); font-family: montserratregular; padding:30px;  padding-top: 0px; float:left; width:100%; text-align: center;}\r\n.cp5 .btn.prime-action.focus,.cp5 .btn.prime-action:focus,.cp5 .btn.prime-action:hover{text-decoration:none;background:#404948;}\r\n.cp5 .top-fix-bar{ background: #09141f; min-height: 70px; position: relative;}\r\n.cp5 .questions{ background: #d9dede;}\r\n.cp5 .questions .question-section-outer .prime-action{ background:#17438B  !important; border:2px solid #17438B  !important; }\r\n.cp5 .result-centre-outer {margin:3% !important;  padding: 0 4% ; float:left; width: 94%;background: #17438B  !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0px !important;}\r\n.cp5 .prime-action{ background:#17438B !important; border:2px solid #17438B  !important; color:#ffffff; }\r\n.cp5 .leadform-outer .prime-action { background:#09141f !important; border:2px solid #09141f !important; color:#fff;}\r\n.cp5 .leadform-outer .prime-action:hover { background:#09141f !important; border:2px solid #09141f !important; color:#fff;}\r\n.cp5 .page_0.editor-page-divider { background: #09141f; }\r\n.cp5 .landing-page-mid {background: rgba(9,20,31,0.45);}\r\n.cp5 .questions-header header .right-sec{ background:#17438B !important }\r\n.cp5 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\r\n.cp5 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\r\n.cp5 .landing-page-mid :-moz-placeholder { /* Firefox 18- */   color: #c4c4c6 !important;  }\r\n.cp5 .landing-page-mid ::-moz-placeholder {  /* Firefox 19+ */ color: #c4c4c6 !important;  }\r\n.cp5 .landing-page-mid :-ms-input-placeholder {color: #c4c4c6 !important;}\r\n.cp5 .redo-link ul li{ background: #09141f;  }\r\n.cp5 .result-centre-outer .mid-width p{color: #fff;  margin:0 !important}\r\n.cp5 .bottom-section{ color:#fff}\r\n.cp5 .share-link ul li a{ color:#fff}\r\n.cp5 .page_2{ background: #09141f; }\r\n.cp5 .page_0.main-bg{ background-color: #09141f !important;}\r\n.cp5 .result-overlay{background: rgba(9,20,31,0.45); height: 100vh; float: none; width: 100vw !important; display: table-cell; vertical-align: middle;}\r\n@media (max-width:775px) {\r\n\t.cp5 .page_2.w100.result-fixed.mobile-result-sticky{\r\n\t    background: #09141f !important;\r\n\t}\r\n}\r\n\r\n\r\n.result-centre-outer.recommendation-outer .mid-width {margin-top: 0;  margin-bottom: 0;   min-height: 55px;}\r\n.result-centre-outer.recommendation-outer .mid-width p{ padding-top:8px;}\r\n"

/***/ },

/***/ 868:
/***/ function(module, exports) {

module.exports = "/*!\r\n * Datepicker for Bootstrap v1.6.1 (https://github.com/eternicode/bootstrap-datepicker)\r\n *\r\n * Copyright 2012 Stefan Petre\r\n * Improvements by Andrew Rowls\r\n * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)\r\n */\r\n.datepicker{padding:4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;direction:ltr}.datepicker-inline{width:220px}.datepicker.datepicker-rtl{direction:rtl}.datepicker.datepicker-rtl table tr td span{float:right}.datepicker-dropdown{top:0;left:0}.datepicker-dropdown:before{content:'';display:inline-block;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #999;border-top:0;border-bottom-color:rgba(0,0,0,.2);position:absolute}.datepicker-dropdown:after{content:'';display:inline-block;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;border-top:0;position:absolute}.datepicker-dropdown.datepicker-orient-left:before{left:6px}.datepicker-dropdown.datepicker-orient-left:after{left:7px}.datepicker-dropdown.datepicker-orient-right:before{right:6px}.datepicker-dropdown.datepicker-orient-right:after{right:7px}.datepicker-dropdown.datepicker-orient-bottom:before{top:-7px}.datepicker-dropdown.datepicker-orient-bottom:after{top:-6px}.datepicker-dropdown.datepicker-orient-top:before{bottom:-7px;border-bottom:0;border-top:7px solid #999}.datepicker-dropdown.datepicker-orient-top:after{bottom:-6px;border-bottom:0;border-top:6px solid #fff}.datepicker>div{display:none}.datepicker table{margin:0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.datepicker td,.datepicker th{text-align:center;width:20px;height:20px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:none}.table-striped .datepicker table tr td,.table-striped .datepicker table tr th{background-color:transparent}.datepicker table tr td.day.focused,.datepicker table tr td.day:hover{background:#eee;cursor:pointer}.datepicker table tr td.new,.datepicker table tr td.old{color:#999}.datepicker table tr td.disabled,.datepicker table tr td.disabled:hover{background:0 0;color:#999;cursor:default}.datepicker table tr td.highlighted{background:#d9edf7;border-radius:0}.datepicker table tr td.today,.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled:hover,.datepicker table tr td.today:hover{background-color:#fde19a;background-image:-moz-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-ms-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-webkit-gradient(linear,0 0,0 100%,from(#fdd49a),to(#fdf59a));background-image:-webkit-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-o-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:linear-gradient(to bottom,#fdd49a,#fdf59a);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fdd49a', endColorstr='#fdf59a', GradientType=0);border-color:#fdf59a #fdf59a #fbed50;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#000}.datepicker table tr td.today.active,.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled.active,.datepicker table tr td.today.disabled.disabled,.datepicker table tr td.today.disabled:active,.datepicker table tr td.today.disabled:hover,.datepicker table tr td.today.disabled:hover.active,.datepicker table tr td.today.disabled:hover.disabled,.datepicker table tr td.today.disabled:hover:active,.datepicker table tr td.today.disabled:hover:hover,.datepicker table tr td.today.disabled:hover[disabled],.datepicker table tr td.today.disabled[disabled],.datepicker table tr td.today:active,.datepicker table tr td.today:hover,.datepicker table tr td.today:hover.active,.datepicker table tr td.today:hover.disabled,.datepicker table tr td.today:hover:active,.datepicker table tr td.today:hover:hover,.datepicker table tr td.today:hover[disabled],.datepicker table tr td.today[disabled]{background-color:#fdf59a}.datepicker table tr td.today.active,.datepicker table tr td.today.disabled.active,.datepicker table tr td.today.disabled:active,.datepicker table tr td.today.disabled:hover.active,.datepicker table tr td.today.disabled:hover:active,.datepicker table tr td.today:active,.datepicker table tr td.today:hover.active,.datepicker table tr td.today:hover:active{background-color:#fbf069\\9}.datepicker table tr td.today:hover:hover{color:#000}.datepicker table tr td.today.active:hover{color:#fff}.datepicker table tr td.range,.datepicker table tr td.range.disabled,.datepicker table tr td.range.disabled:hover,.datepicker table tr td.range:hover{background:#eee;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.datepicker table tr td.range.today,.datepicker table tr td.range.today.disabled,.datepicker table tr td.range.today.disabled:hover,.datepicker table tr td.range.today:hover{background-color:#f3d17a;background-image:-moz-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-ms-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-webkit-gradient(linear,0 0,0 100%,from(#f3c17a),to(#f3e97a));background-image:-webkit-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-o-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:linear-gradient(to bottom,#f3c17a,#f3e97a);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f3c17a', endColorstr='#f3e97a', GradientType=0);border-color:#f3e97a #f3e97a #edde34;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.datepicker table tr td.range.today.active,.datepicker table tr td.range.today.disabled,.datepicker table tr td.range.today.disabled.active,.datepicker table tr td.range.today.disabled.disabled,.datepicker table tr td.range.today.disabled:active,.datepicker table tr td.range.today.disabled:hover,.datepicker table tr td.range.today.disabled:hover.active,.datepicker table tr td.range.today.disabled:hover.disabled,.datepicker table tr td.range.today.disabled:hover:active,.datepicker table tr td.range.today.disabled:hover:hover,.datepicker table tr td.range.today.disabled:hover[disabled],.datepicker table tr td.range.today.disabled[disabled],.datepicker table tr td.range.today:active,.datepicker table tr td.range.today:hover,.datepicker table tr td.range.today:hover.active,.datepicker table tr td.range.today:hover.disabled,.datepicker table tr td.range.today:hover:active,.datepicker table tr td.range.today:hover:hover,.datepicker table tr td.range.today:hover[disabled],.datepicker table tr td.range.today[disabled]{background-color:#f3e97a}.datepicker table tr td.range.today.active,.datepicker table tr td.range.today.disabled.active,.datepicker table tr td.range.today.disabled:active,.datepicker table tr td.range.today.disabled:hover.active,.datepicker table tr td.range.today.disabled:hover:active,.datepicker table tr td.range.today:active,.datepicker table tr td.range.today:hover.active,.datepicker table tr td.range.today:hover:active{background-color:#efe24b\\9}.datepicker table tr td.selected,.datepicker table tr td.selected.disabled,.datepicker table tr td.selected.disabled:hover,.datepicker table tr td.selected:hover{background-color:#9e9e9e;background-image:-moz-linear-gradient(to bottom,#b3b3b3,grey);background-image:-ms-linear-gradient(to bottom,#b3b3b3,grey);background-image:-webkit-gradient(linear,0 0,0 100%,from(#b3b3b3),to(grey));background-image:-webkit-linear-gradient(to bottom,#b3b3b3,grey);background-image:-o-linear-gradient(to bottom,#b3b3b3,grey);background-image:linear-gradient(to bottom,#b3b3b3,grey);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#b3b3b3', endColorstr='#808080', GradientType=0);border-color:grey grey #595959;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td.selected.active,.datepicker table tr td.selected.disabled,.datepicker table tr td.selected.disabled.active,.datepicker table tr td.selected.disabled.disabled,.datepicker table tr td.selected.disabled:active,.datepicker table tr td.selected.disabled:hover,.datepicker table tr td.selected.disabled:hover.active,.datepicker table tr td.selected.disabled:hover.disabled,.datepicker table tr td.selected.disabled:hover:active,.datepicker table tr td.selected.disabled:hover:hover,.datepicker table tr td.selected.disabled:hover[disabled],.datepicker table tr td.selected.disabled[disabled],.datepicker table tr td.selected:active,.datepicker table tr td.selected:hover,.datepicker table tr td.selected:hover.active,.datepicker table tr td.selected:hover.disabled,.datepicker table tr td.selected:hover:active,.datepicker table tr td.selected:hover:hover,.datepicker table tr td.selected:hover[disabled],.datepicker table tr td.selected[disabled]{background-color:grey}.datepicker table tr td.selected.active,.datepicker table tr td.selected.disabled.active,.datepicker table tr td.selected.disabled:active,.datepicker table tr td.selected.disabled:hover.active,.datepicker table tr td.selected.disabled:hover:active,.datepicker table tr td.selected:active,.datepicker table tr td.selected:hover.active,.datepicker table tr td.selected:hover:active{background-color:#666\\9}.datepicker table tr td.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active:hover{background-color:#006dcc;background-image:-moz-linear-gradient(to bottom,#08c,#04c);background-image:-ms-linear-gradient(to bottom,#08c,#04c);background-image:-webkit-gradient(linear,0 0,0 100%,from(#08c),to(#04c));background-image:-webkit-linear-gradient(to bottom,#08c,#04c);background-image:-o-linear-gradient(to bottom,#08c,#04c);background-image:linear-gradient(to bottom,#08c,#04c);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);border-color:#04c #04c #002a80;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td.active.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled.disabled,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active.disabled:hover.active,.datepicker table tr td.active.disabled:hover.disabled,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active.disabled:hover:hover,.datepicker table tr td.active.disabled:hover[disabled],.datepicker table tr td.active.disabled[disabled],.datepicker table tr td.active:active,.datepicker table tr td.active:hover,.datepicker table tr td.active:hover.active,.datepicker table tr td.active:hover.disabled,.datepicker table tr td.active:hover:active,.datepicker table tr td.active:hover:hover,.datepicker table tr td.active:hover[disabled],.datepicker table tr td.active[disabled]{background-color:#04c}.datepicker table tr td.active.active,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled:hover.active,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active:active,.datepicker table tr td.active:hover.active,.datepicker table tr td.active:hover:active{background-color:#039\\9}.datepicker table tr td span{display:block;width:23%;height:54px;line-height:54px;float:left;margin:1%;cursor:pointer;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.datepicker table tr td span.focused,.datepicker table tr td span:hover{background:#eee}.datepicker table tr td span.disabled,.datepicker table tr td span.disabled:hover{background:0 0;color:#999;cursor:default}.datepicker table tr td span.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active:hover{background-color:#006dcc;background-image:-moz-linear-gradient(to bottom,#08c,#04c);background-image:-ms-linear-gradient(to bottom,#08c,#04c);background-image:-webkit-gradient(linear,0 0,0 100%,from(#08c),to(#04c));background-image:-webkit-linear-gradient(to bottom,#08c,#04c);background-image:-o-linear-gradient(to bottom,#08c,#04c);background-image:linear-gradient(to bottom,#08c,#04c);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);border-color:#04c #04c #002a80;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td span.active.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled.active,.datepicker table tr td span.active.disabled.disabled,.datepicker table tr td span.active.disabled:active,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active.disabled:hover.active,.datepicker table tr td span.active.disabled:hover.disabled,.datepicker table tr td span.active.disabled:hover:active,.datepicker table tr td span.active.disabled:hover:hover,.datepicker table tr td span.active.disabled:hover[disabled],.datepicker table tr td span.active.disabled[disabled],.datepicker table tr td span.active:active,.datepicker table tr td span.active:hover,.datepicker table tr td span.active:hover.active,.datepicker table tr td span.active:hover.disabled,.datepicker table tr td span.active:hover:active,.datepicker table tr td span.active:hover:hover,.datepicker table tr td span.active:hover[disabled],.datepicker table tr td span.active[disabled]{background-color:#04c}.datepicker table tr td span.active.active,.datepicker table tr td span.active.disabled.active,.datepicker table tr td span.active.disabled:active,.datepicker table tr td span.active.disabled:hover.active,.datepicker table tr td span.active.disabled:hover:active,.datepicker table tr td span.active:active,.datepicker table tr td span.active:hover.active,.datepicker table tr td span.active:hover:active{background-color:#039\\9}.datepicker table tr td span.new,.datepicker table tr td span.old{color:#999}.datepicker .datepicker-switch{width:145px}.datepicker .datepicker-switch,.datepicker .next,.datepicker .prev,.datepicker tfoot tr th{cursor:pointer}.datepicker .datepicker-switch:hover,.datepicker .next:hover,.datepicker .prev:hover,.datepicker tfoot tr th:hover{background:#eee}.datepicker .cw{font-size:10px;width:12px;padding:0 2px 0 5px;vertical-align:middle}.input-append.date .add-on,.input-prepend.date .add-on{cursor:pointer}.input-append.date .add-on i,.input-prepend.date .add-on i{margin-top:3px}.input-daterange input{text-align:center}.input-daterange input:first-child{-webkit-border-radius:3px 0 0 3px;-moz-border-radius:3px 0 0 3px;border-radius:3px 0 0 3px}.input-daterange input:last-child{-webkit-border-radius:0 3px 3px 0;-moz-border-radius:0 3px 3px 0;border-radius:0 3px 3px 0}.input-daterange .add-on{display:inline-block;width:auto;min-width:16px;height:18px;padding:4px 5px;font-weight:400;line-height:18px;text-align:center;text-shadow:0 1px 0 #fff;vertical-align:middle;background-color:#eee;border:1px solid #ccc;margin-left:-5px;margin-right:-5px}\r\n/*# sourceMappingURL=bootstrap-datepicker.min.css.map */"

/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = "/*! =======================================================\r\n                      VERSION  7.1.1              \r\n========================================================= */\r\n/*! =========================================================\r\n * bootstrap-slider.js\r\n *\r\n * Maintainers:\r\n *\t\tKyle Kemp\r\n *\t\t\t- Twitter: @seiyria\r\n *\t\t\t- Github:  seiyria\r\n *\t\tRohit Kalkur\r\n *\t\t\t- Twitter: @Rovolutionary\r\n *\t\t\t- Github:  rovolution\r\n *\r\n * =========================================================\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n * ========================================================= */.slider{display:inline-block;vertical-align:middle;position:relative}.slider.slider-horizontal{width:210px;height:20px}.slider.slider-horizontal .slider-track{height:10px;width:100%;margin-top:-5px;top:50%;left:0}.slider.slider-horizontal .slider-selection,.slider.slider-horizontal .slider-track-low,.slider.slider-horizontal .slider-track-high{height:100%;top:0;bottom:0}.slider.slider-horizontal .slider-tick,.slider.slider-horizontal .slider-handle{margin-left:-10px;margin-top:-5px}.slider.slider-horizontal .slider-tick.triangle,.slider.slider-horizontal .slider-handle.triangle{border-width:0 10px 10px 10px;width:0;height:0;border-bottom-color:#0480be;margin-top:0}.slider.slider-horizontal .slider-tick-label-container{white-space:nowrap;margin-top:20px}.slider.slider-horizontal .slider-tick-label-container .slider-tick-label{padding-top:4px;display:inline-block;text-align:center}.slider.slider-vertical{height:210px;width:20px}.slider.slider-vertical .slider-track{width:10px;height:100%;margin-left:-5px;left:50%;top:0}.slider.slider-vertical .slider-selection{width:100%;left:0;top:0;bottom:0}.slider.slider-vertical .slider-track-low,.slider.slider-vertical .slider-track-high{width:100%;left:0;right:0}.slider.slider-vertical .slider-tick,.slider.slider-vertical .slider-handle{margin-left:-5px;margin-top:-10px}.slider.slider-vertical .slider-tick.triangle,.slider.slider-vertical .slider-handle.triangle{border-width:10px 0 10px 10px;width:1px;height:1px;border-left-color:#0480be;margin-left:0}.slider.slider-vertical .slider-tick-label-container{white-space:nowrap}.slider.slider-vertical .slider-tick-label-container .slider-tick-label{padding-left:4px}.slider.slider-disabled .slider-handle{background-image:-webkit-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:-o-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:linear-gradient(to bottom,#dfdfdf 0,#bebebe 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdfdfdf',endColorstr='#ffbebebe',GradientType=0)}.slider.slider-disabled .slider-track{background-image:-webkit-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:-o-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:linear-gradient(to bottom,#e5e5e5 0,#e9e9e9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe5e5e5',endColorstr='#ffe9e9e9',GradientType=0);cursor:not-allowed}.slider input{display:none}.slider .tooltip.top{margin-top:-36px}.slider .tooltip-inner{white-space:nowrap;max-width:none}.slider .hide{display:none}.slider-track{position:absolute;cursor:pointer;background-image:-webkit-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:-o-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:linear-gradient(to bottom,#f5f5f5 0,#f9f9f9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5',endColorstr='#fff9f9f9',GradientType=0);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);border-radius:4px}.slider-selection{position:absolute;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-selection.tick-slider-selection{background-image:-webkit-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:-o-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:linear-gradient(to bottom,#89cdef 0,#81bfde 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef',endColorstr='#ff81bfde',GradientType=0)}.slider-track-low,.slider-track-high{position:absolute;background:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-handle{position:absolute;width:20px;height:20px;background-color:#337ab7;background-image:-webkit-linear-gradient(top,#149bdf 0,#0480be 100%);background-image:-o-linear-gradient(top,#149bdf 0,#0480be 100%);background-image:linear-gradient(to bottom,#149bdf 0,#0480be 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf',endColorstr='#ff0480be',GradientType=0);filter:none;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);border:0 solid transparent}.slider-handle.round{border-radius:50%}.slider-handle.triangle{background:transparent none}.slider-handle.custom{background:transparent none}.slider-handle.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick{position:absolute;width:20px;height:20px;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;filter:none;opacity:.8;border:0 solid transparent}.slider-tick.round{border-radius:50%}.slider-tick.triangle{background:transparent none}.slider-tick.custom{background:transparent none}.slider-tick.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick.in-selection{background-image:-webkit-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:-o-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:linear-gradient(to bottom,#89cdef 0,#81bfde 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef',endColorstr='#ff81bfde',GradientType=0);opacity:1}"

/***/ },

/***/ 870:
/***/ function(module, exports) {

module.exports = "@font-face {\r\n    font-family: 'montserratregular';\r\n    src: url('assets/fonts/templateFonts/sound_cloud/montserrat-regular-webfont.eot');\r\n    }\r\n\r\n.mregular-font {\r\n    font-family: montserratregular;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'material_iconsregular';\r\n    src: url('assets/fonts/templateFonts/sound_cloud/materialicons-regular-webfont.woff2') format('woff2'),\r\n         url('assets/fonts/templateFonts/sound_cloud/materialicons-regular-webfont.woff') format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n@font-face {\r\n  font-family: 'Material Icons';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('MaterialIcons-Regular.eot');\r\n  src: local('Material Icons'),\r\n       local('materialIcons-Regular'),\r\n       url('assets/fonts/templateFonts/sound_cloud/materialIcons-Regular.woff2') format('woff2'),\r\n       url('assets/fonts/templateFonts/sound_cloud/materialIcons-Regular.woff') format('woff'),\r\n       url('assets/fonts/templateFonts/sound_cloud/materialIcons-Regular.ttf') format('truetype');\r\n}\r\n\r\n.material-icons {\r\n  font-family: 'Material Icons';\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;  /* Preferred icon size */\r\n  display: inline-block;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-wrap: normal;\r\n  white-space: nowrap;\r\n  direction: ltr;\r\n\r\n  /* Support for all WebKit browsers. */\r\n  -webkit-font-smoothing: antialiased;\r\n  /* Support for Safari and Chrome. */\r\n  text-rendering: optimizeLegibility;\r\n\r\n  /* Support for Firefox. */\r\n  -moz-osx-font-smoothing: grayscale;\r\n\r\n  /* Support for IE. */\r\n  font-feature-settings: 'liga';\r\n}\r\n\r\n@font-face {\r\n    font-family: \"montserratlight\";\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    src: url(\"assets/fonts/templateFonts/sound_cloud/montserrat-light-webfont.eot\") format(\"embedded-opentype\"), url(\"assets/fonts/templateFonts/sound_cloud/montserrat-light-webfont.woff2\") format(\"woff2\"), url(\"assets/fonts/templateFonts/sound_cloud/montserrat-light-webfont.woff\") format(\"woff\"), url(\"assets/fonts/templateFonts/sound_cloud/montserrat-light-webfont.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n    font-family: 'montserrat-bold';\r\n    src: url('assets/fonts/templateFonts/sound_cloud/montserrat-bold-webfont.eot');\r\n    src: url('assets/fonts/templateFonts/sound_cloud/montserrat-bold-webfont.eot?#iefix') format('embedded-opentype'),\r\n         url('assets/fonts/templateFonts/sound_cloud/montserrat-bold-webfont.woff2') format('woff2'),\r\n         url('assets/fonts/templateFonts/sound_cloud/montserrat-bold-webfont.woff') format('woff'),\r\n         url('assets/fonts/templateFonts/sound_cloud/montserrat-bold-webfont.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n\r\n@font-face {\r\n    font-family: 'oxygenregular';\r\n    src: url('assets/fonts/templateFonts/sound_cloud/oxygen-regular-webfont.eot');\r\n    src: url('assets/fonts/templateFonts/sound_cloud/oxygen-regular-webfont.eot?#iefix') format('embedded-opentype'),\r\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-regular-webfont.woff2') format('woff2'),\r\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-regular-webfont.woff') format('woff'),\r\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-regular-webfont.ttf') format('truetype'),\r\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-regular-webfont.svg#oxygenregular') format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'oxygenbold';\r\n    src: url('assets/fonts/templateFonts/sound_cloud/oxygen-bold-webfont.eot');\r\n    src: url('assets/fonts/templateFonts/sound_cloud/oxygen-bold-webfont.eot?#iefix') format('embedded-opentype'),\r\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-bold-webfont.woff2') format('woff2'),\r\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-bold-webfont.woff') format('woff'),\r\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-bold-webfont.ttf') format('truetype'),\r\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-bold-webfont.svg#oxygenbold') format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n"

/***/ },

/***/ 871:
/***/ function(module, exports) {

module.exports = "@media (max-width:775px) {\r\n.page_1 { width: 90% !important; margin-left: 40px !important;}\r\n.page_2.w100.result-fixed { position: relative !important; left: 0px; top: 50px; width: 90%; float: left; margin-top: 0px; margin-left: 40px; -webkit-border-radius:\r\n         10px;-moz-border-radius: 10px;border-radius: 10px; margin-bottom: 30px;}\r\n\r\n.page_2 {\r\n    position: relative !important;\r\n    width: 90% !important;\r\n    left: 0px;\r\n    top: 50px !important;\r\n    float: left;\r\n    margin-top: 0px;\r\n    margin-left: 40px;\r\n    border-radius: 10px;\r\n    margin-bottom: 30px; \r\n}         \r\n.redo-link {position: absolute; top: 2.5%; right: 2.5%;}\r\n.landing-page-mid{  width: 100%; overflow: hidden; padding:0 !important;}\r\n.page-logo{ display:none;}\r\n.prime-action{padding: 13px 30px; font-size: 2.3vmin !important;}\r\n.landing-page-mid .main-heading{font-size:6vmin !important; padding:0 10px;line-height: 1.2em !important;}\r\n.landing-page-mid .input-section{ width: 92%;}\r\n.landing-page-mid .input-section .input-outer{ width: 47% !important; margin-left: 10px;}\r\n.landing-page-mid .input-section input{ margin: 10px 0px !important;}\r\n.temp2-scrollbar{overflow-y: auto !important; height: auto !important;}\r\n.page_1.mobile-result-sticky{ margin-bottom: 45px !important;}\r\n.page_2.w100.mobile-result-sticky{\r\n    position: fixed !important;\r\n    bottom: 0 !important;\r\n    top: initial !important;\r\n    height: 70px;\r\n    z-index: 9;\r\n    margin: 0;\r\n    padding-top: 5px;\r\n    padding-bottom: 0;\r\n    border-radius: 0;\r\n    background: #413832;\r\n    width: 100% !important;\r\n}\r\n.page_2.w100.result-fixed.mobile-result-sticky{\r\n    position: fixed !important;\r\n    bottom: 0 !important;\r\n    top: initial !important;\r\n    height: 70px;\r\n    z-index: 9;\r\n    margin: 0;\r\n    padding-top: 5px;\r\n    padding-bottom: 0;\r\n    border-radius: 0;\r\n    background: #413832;\r\n    width: 100% !important;\r\n}\r\n.page_2.w100.mobile-result-sticky .mid-width p{ display: none;}\r\n.page_2.w100.mobile-result-sticky .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){\r\n    font-size: 20px;\r\n    width: 100%;\r\n    float: left;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    text-align: left !important;\r\n}\r\n.page_2.w100.mobile-result-sticky .result-temp2-default-section{ padding-top: 0px;}\r\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(2){\r\n    float: left;\r\n    width: 70%;\r\n    text-align: left !important;\r\n    font-family: oxygenbold;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(3){\r\n    display: block;\r\n    float: left;\r\n    width: 70%;\r\n    text-align: left;\r\n    font-family: oxygenregular;\r\n    color: #fff;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){\r\n    font-size: 20px;\r\n    width: 30%;\r\n    float: left;\r\n    margin-top: 12px;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(2){\r\n    float: left;\r\n    width: 70%;\r\n    text-align: left !important;\r\n    font-family: oxygenbold;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(3){\r\n    display: block;\r\n    float: left;\r\n    width: 70%;\r\n    text-align: left;\r\n    font-family: oxygenregular;\r\n    color: #fff;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link{\r\n        font-size: 34px;\r\n    color: #ce7e48;\r\n    width: 94%;\r\n    height: 66px;\r\n    text-align: right;\r\n    font-family: oxygenbold;\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 3%;\r\n    padding-left: 1px;\r\n    z-index: 99;\r\n    display: block !important;\r\n}\r\n.page_2.w100 .mobile-result-linkAdd{\r\n    font-size: 14px;\r\n    color: #ff6600;\r\n    width: 70%;\r\n    text-align: left;\r\n    font-family: oxygenbold;\r\n    z-index: 99;\r\n    display: none;\r\n    visibility: visible !important;\r\n}\r\n.page_2.w100 .mobile-result-linkAdd i{\r\n    font-size: 16px;\r\n    top: 3px;\r\n    position: relative;\r\n}\r\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){\r\n    width: 98% !important;\r\n}\r\n\r\n\r\n\r\n\r\n}\r\n\r\n@media (max-width:375px) {\r\nheader .logo { width: 100% !important; text-align: center !important;}\r\n.page_1 { width: 100% !important; margin-left: 0 !important;  -webkit-border-radius:0 !important;-moz-border-radius: 0 !important;border-radius: 0 !important; margin-bottom:0 !important;overflow: hidden;}\r\n.page_2.w100.result-fixed {z-index: 9999; position: relative !important; width: 100%; float: left;  margin-left: 0; -webkit-border-radius:0;-moz-border-radius: 0;border-radius: 0 !important; margin-bottom: 0px; overflow: visible;}\r\n.footer-nav {float: left; width: 100%; text-align: center;}         \r\n.footer-nav li{ width:100%;}       \r\n.powered-by {float: left !important; text-align: left !important;margin-top: 2%;}\r\n.page_2 { position: relative !important; width: 100% !important; float: left; margin-left: 0 !important; margin-bottom: 30px; border-radius: 0!important;}     \r\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){\r\n    width: 94% !important;\r\n}\r\n.redo-link { position: absolute; top: 2.5%;  right: 2.5%; z-index: 999 !important;}\r\n.page_2 .result-full-section .input-section input { width: 100% !important; margin: 8px 0 !important;}\r\n.result-full-section .input-section .input-outer span{ margin-left: 0 !important;}\r\n.main-bg header .logo{ padding:28px !important;}\r\n.main-bg header .logo img{max-width:45% !important; max-height: 40px !important;}\r\n.landing-page-mid{  width: 100%; overflow: hidden; padding:0 !important}\r\n/*.landing-page-header .logo img { width:70%;}*/\r\n.page-logo{ display:none;}\r\n.redo-link ul li { padding: 2px 6px !important;}\r\n.redo-link ul li a {  font-size: 12px !important;}\r\n.page_2 .disc-set{ float: left; width: 100%;}\r\n.share-set{ z-index: 9999;}\r\n.page_2  .share-link ul li a{ position: relative; z-index: 9999;}\r\n\r\n.page_1{margin-top:0px !important; box-shadow: none !important;}\r\n.landing-page-mid .input-section {  width: 90% !important; margin: 30px auto 0 0 !important; margin-left: 30px !important;}\r\n.landing-page-mid .input-section .input-outer{ width: 100% !important; }\r\n.landing-page-mid .input-section .input-outer input{margin-bottom: 20px !important; margin-left: 10px !important;margin-right: 10px !important;}\r\n.landing-page-mid .main-heading {font-size: 8vmin !important; line-height: 1.3em !important;margin-top: 30%;}\r\n.landing-page-mid .sub-heading {font-size: 3vmin !important;line-height: 1.3em !important;}\r\n.landing-page-mid .prime-action {font-size: 3.5vmin !important;}\r\n.cp1 .landing-page-mid .sub-heading{font-size: 3vmin !important;line-height: 1.3em !important;}\r\n.cp2 .landing-page-mid .sub-heading{font-size: 3vmin !important;line-height: 1.3em !important;}\r\n.cp3 .landing-page-mid .sub-heading{font-size: 3vmin !important;line-height: 1.3em !important;}\r\n\r\n\r\n.temp2-scrollbar{overflow-y: auto !important; height: auto !important;}\r\n.page_1.mobile-result-sticky{ margin-bottom: 45px !important;}\r\n.page_2.w100.mobile-result-sticky{\r\n    position: fixed !important;\r\n    bottom: 0 !important;\r\n    top: initial !important;\r\n    height: 70px;\r\n    z-index: 9;\r\n    margin: 0;\r\n    padding-top: 5px;\r\n    padding-bottom: 0;\r\n    border-radius: 0;\r\n    background: #413832;\r\n    width: 100% !important;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.page_2.w100.result-fixed.mobile-result-sticky{\r\n    position: fixed !important;\r\n    bottom: 0 !important;\r\n    top: initial !important;\r\n    height: 70px;\r\n    z-index: 9;\r\n    margin: 0;\r\n    padding-top: 5px;\r\n    padding-bottom: 0;\r\n    border-radius: 0;\r\n    background: #413832;\r\n    width: 100% !important;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n.page_2.w100.mobile-result-sticky .mid-width p{ display: none;}\r\n.page_2.w100.mobile-result-sticky .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){\r\n    font-size: 16px;\r\n        width: 100%;\r\n    float: left;\r\n    margin-top: 0px;\r\n}\r\n.page_2.w100.mobile-result-sticky .result-temp2-default-section{ padding-top: 0px;}\r\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(2){\r\n    float: left;\r\n    width: 70%;\r\n    text-align: left !important;\r\n    font-family: oxygenbold;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(3){\r\n    display: block;\r\n    float: left;\r\n    width: 70%;\r\n    text-align: left;\r\n    font-family: oxygenregular;\r\n    color: #fff;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){\r\n    font-size: 16px;\r\n    width: 30%;\r\n    float: left;\r\n    margin-top: 16px;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(2){\r\n    float: left;\r\n    width: 70%;\r\n    text-align: left !important;\r\n    font-family: oxygenbold;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(3){\r\n    display: block;\r\n    float: left;\r\n    width: 70%;\r\n    text-align: left;\r\n    font-family: oxygenregular;\r\n    color: #fff;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link{\r\n        font-size: 24px;\r\n    color: #ce7e48;\r\n    font-family: oxygenbold;\r\n    position: absolute;\r\n    top: 4px;\r\n    padding-left: 0px;\r\n    z-index: 99;\r\n    display: block !important;\r\n}\r\n.page_2.w100 .mobile-result-linkAdd{\r\n    font-size: 14px;\r\n    color: #ff6600;\r\n    width: 70%;\r\n    text-align: left;\r\n    font-family: oxygenbold;\r\n    z-index: 99;\r\n    display: none;\r\n}\r\n.page_2.w100 .mobile-result-linkAdd i{\r\n    font-size: 16px;\r\n    top: 3px;\r\n    position: relative;\r\n}\r\n\r\n\r\n}\r\n\r\n@media (min-width: 1500px ) {\r\n\r\n.page_2.result-fixed { min-height: 480px; top: 80px !important;}\r\n\r\n}\r\n@media (min-width: 1200px) and (max-width:1300px) {\r\n    .page_2 .share-link { width: 100% !important;}\r\n}\r\n@media (min-width: 1920px) and (max-width:1920px) {\r\n    .page_2 .share-link ul li a {font-size: 22px !important;}\r\n}\r\n@media (min-width: 1366px) and (max-width:1366px) {\r\n    .page_2 .share-link ul li a {font-size: 20px !important;}\r\n}\r\n@media (min-width: 150px) and (max-width:768px) {\r\n.page_2{-webkit-border-top-right-radius: 0 !important; -webkit-border-bottom-right-radius: 0 !important;-moz-border-radius-topright:0 !important;-moz-border-radius-bottomright: 0!important; border-top-right-radius: 0 !important; border-bottom-right-radius: 0 !important; border-radius: 0!important;}    \r\n.page_2.w100.result-fixed {z-index: 9999; position: relative !important;}\r\n.page_2  .share-link{width:auto;z-index: 999;position: relative;}\r\n.redo-link ul li { padding: 2px 6px;}\r\n.redo-link ul li a { font-size: 12px;}\r\n.page_2 .disc-set{ float: left; width: 100%;}\r\n.share-set{ z-index: 9999;}\r\n.page_2  .share-link ul li a{ position: relative; z-index: 9999;}\r\n header .logo { width: 100% !important; text-align: center !important;}\r\n.page_1 { width: 100% !important; margin-left: 0 !important;  -webkit-border-radius:0 !important;-moz-border-radius: 0 !important;border-radius: 0 !important; margin-bottom:0 !important;overflow: hidden; box-shadow:none !important;}\r\n.page_2.w100.result-fixed {z-index: 9999; position: relative !important; width: 100%; float: left; margin-left: 0; -webkit-border-radius: 0;-moz-border-radius: 0;border-radius: 0!important; margin-bottom: 0px; overflow: visible;}\r\n.footer-nav {float: left; width: 100%; text-align: center;}         \r\n.footer-nav li{ width:100%;}       \r\n.page_2 { position: relative !important; width: 100% !important; float: left; margin-top: -100px !important; margin-left: 0 !important;border-radius: 0!important;margin-bottom: 30px;}     \r\n.redo-link { position: absolute; top: 2.5%;  right: 2.5%; z-index: 999 !important;}\r\n.page_2 .result-full-section .input-section input { width: 100% !important; margin: 8px 0 !important;}\r\n.result-full-section .input-section .input-outer span{ margin-left: 0 !important;}\r\n.main-bg header .logo{ padding:28px !important; padding-top: 10px !important;}\r\n.main-bg header .logo img{max-width:32% !important; max-height: 40px !important;}\r\n.landing-page-mid{  width: 100%; overflow: hidden; padding:6% !important;}\r\n/*.landing-page-header .logo img { width:70%;}*/\r\n.page-logo{ display:none;}\r\n.redo-link ul li { padding: 2px 6px !important;}\r\n.redo-link ul li a {  font-size: 12px !important;}\r\n.page_2 .disc-set{ float: left; width: 100%;}\r\n.share-set{ z-index: 9999;}\r\n.page_2  .share-link ul li a{ position: relative; z-index: 9999;}\r\n.landing-page-mid .input-section {  width: 90% !important; margin: 0 auto !important; margin-top: 3% !important;}\r\n.landing-page-mid .input-section .input-outer{ width: 45% !important; margin-left: 3%;}\r\n.landing-page-mid .input-section .input-outer input{  margin-left: 2% !important; margin-right: 10px !important; padding: 5%; margin-top: 4% !important;margin-bottom: 10% !important; }\r\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input{  margin-left: 1% !important; margin-right: 10px !important; padding: 3%; margin-top: 3% !important;margin-bottom: 5% !important; }\r\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) span{ padding-left: 0;}\r\n.cp1 .landing-page-mid .input-section .input-outer input{font-size: 2.4vmin !important;}\r\n.cp2 .landing-page-mid .input-section .input-outer input{font-size: 2.4vmin !important;}\r\n.cp3 .landing-page-mid .input-section .input-outer input{font-size: 2.4vmin !important;}\r\n.landing-footer-outer{position:absolute !important;}\r\n.page_1{margin-top:0px !important;}\r\n.landing-page-mid .main-heading{margin-top: 12%; margin-bottom: 2% !important; font-size:5.5vmin !important; line-height: 1.3em !important;}\r\n.landing-page-mid .sub-heading {font-size: 3vmin !important;line-height: 1.3em !important;}\r\n.landing-page-mid .prime-action {font-size: 2.5vmin !important;  padding: 2% 7%; margin-top: 2%;}\r\n.landing-page-mid .input-section .input-outer span{top: 78% !important;  left: 2% !important; font-size: 2vmin !important;}\r\n.powered-by {float: left !important; text-align: center !important; margin-top: 2%;width: 100%;}\r\n.powered-by span{ font-size: 2vmin !important;}\r\n.powered-by img {\r\n    width: 14% !important;\r\n    padding-top: 0px;\r\n    padding-bottom: 0px !important;\r\n}\r\n\r\n}\r\n@media (min-width: 150px) and (max-width:500px) {\r\n    .prime-action{\r\n        font-size: 3.2vmin !important;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 780px) and (max-width:1024px) {\r\n    .landing-page-mid{\r\n        padding-bottom: 0px !important;\r\n    }\r\n    .main-bg header .logo{\r\n        padding-top: 20px !important;\r\n        padding-left: 20px !important;\r\n    }\r\n    .page-logo{\r\n        padding-top: 20px !important;\r\n        padding-left: 20px !important;\r\n    }\r\n    .landing-page-header .logo img{\r\n        max-width: 60% !important;\r\n    }\r\n    .page_1{\r\n        margin-left: 7% !important;\r\n        width: 50% !important;\r\n        margin-bottom: 20px !important;\r\n        margin-top: 20px !important;\r\n    }\r\n    .page_2{\r\n        width: 35% !important;\r\n    }\r\n    .page_2 .mid-width p{\r\n        font-size: 16px !important;\r\n    }\r\n    .page_2.result-fixed{\r\n        width: 36% !important;\r\n        top: 30px !important;\r\n    }\r\n    .temp2-scrollbar{\r\n        height: 360px !important;\r\n    }\r\n}\r\n@media (min-width: 150px) and (max-width:320px) {\r\n    .page_2{-webkit-border-top-right-radius: 0 !important;  -webkit-border-bottom-right-radius: 0 !important;-moz-border-radius-topright:0 !important;-moz-border-radius-bottomright: 0!important; border-top-right-radius: 0 !important; border-bottom-right-radius: 0 !important; border-radius: 0 !important; border-radius: 0!important;}\r\n    .page_2.w100.mobile-result-sticky{ padding-left: 2% !important; padding-right: 2% !important;}\r\n    .page_2.w100.mobile-result-sticky .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){\r\n        font-size: 4vmin !important;\r\n    }\r\n    .page_2.w100.mobile-result-sticky .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(2){\r\n        font-size: 3vmin !important;\r\n    }\r\n    .page_2.w100.mobile-result-sticky .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(3){\r\n        font-size: 3vmin !important;\r\n    }\r\n    .page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link{\r\n        bottom: 2% !important;\r\n        left: 29% !important;\r\n        font-size: 3vmin !important;\r\n    }\r\n    .page_2 .mid-width p{ font-size: 4vmin !important;}\r\n    .page_2.w100 .mobile-result-linkAdd{ font-size: 3.5vmin;}\r\n    .page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){\r\n        font-size: 7vmin !important;\r\n        margin-bottom: 2% !important;\r\n    }\r\n    .page_2 .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(2){\r\n        font-size: 3.8vmin !important;\r\n        margin-bottom: 2% !important;\r\n    }\r\n    .page_2 .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(3){\r\n        font-size: 3.5vmin !important;\r\n        margin-bottom: 2% !important;\r\n    }\r\n    .page_2.result-fixed .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(2){\r\n        font-size: 3.5vmin !important;\r\n    }\r\n    .cp1 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){\r\n        font-size: 3.5vmin !important;\r\n    }\r\n    .cp2 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){\r\n        font-size: 3.5vmin !important;\r\n    }\r\n    .cp3 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){\r\n        font-size: 3.5vmin !important;\r\n    }\r\n    .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(3){\r\n        font-size: 3vmin !important;\r\n    }\r\n    .page_2 .btn.prime-action{\r\n        padding: 3% 6% !important;\r\n        font-size: 3vmin !important;\r\n        margin-bottom: 7% !important;\r\n    }\r\n    .page_2 .disc-set{ font-size: 3vmin !important;}\r\n    .page_2.w100.mobile-result-sticky .result-temp2-default-section{ padding-bottom: 11% !important;}\r\n}\r\n\r\n\r\n"

/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = "/**\r\n * selectize.default.css (v0.12.1) - Default Theme\r\n * Copyright (c) 2013–2015 Brian Reavis & contributors\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this\r\n * file except in compliance with the License. You may obtain a copy of the License at:\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software distributed under\r\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF\r\n * ANY KIND, either express or implied. See the License for the specific language\r\n * governing permissions and limitations under the License.\r\n *\r\n * @author Brian Reavis <brian@thirdroute.com>\r\n */\r\n.selectize-control.plugin-drag_drop.multi > .selectize-input > div.ui-sortable-placeholder {\r\n  visibility: visible !important;\r\n  background: #f2f2f2 !important;\r\n  background: rgba(0, 0, 0, 0.06) !important;\r\n  border: 0 none !important;\r\n  -webkit-box-shadow: inset 0 0 12px 4px #ffffff;\r\n  box-shadow: inset 0 0 12px 4px #ffffff;\r\n}\r\n.selectize-control.plugin-drag_drop .ui-sortable-placeholder::after {\r\n  content: '!';\r\n  visibility: hidden;\r\n}\r\n.selectize-control.plugin-drag_drop .ui-sortable-helper {\r\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n.selectize-dropdown-header {\r\n  position: relative;\r\n  padding: 5px 8px;\r\n  border-bottom: 1px solid #d0d0d0;\r\n  background: #f8f8f8;\r\n  -webkit-border-radius: 3px 3px 0 0;\r\n  -moz-border-radius: 3px 3px 0 0;\r\n  border-radius: 3px 3px 0 0;\r\n}\r\n.selectize-dropdown-header-close {\r\n  position: absolute;\r\n  right: 8px;\r\n  top: 50%;\r\n  color: #303030;\r\n  opacity: 0.4;\r\n  margin-top: -12px;\r\n  line-height: 20px;\r\n  font-size: 20px !important;\r\n}\r\n.selectize-dropdown-header-close:hover {\r\n  color: #000000;\r\n}\r\n.selectize-dropdown.plugin-optgroup_columns .optgroup {\r\n  border-right: 1px solid #f2f2f2;\r\n  border-top: 0 none;\r\n  float: left;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n.selectize-dropdown.plugin-optgroup_columns .optgroup:last-child {\r\n  border-right: 0 none;\r\n}\r\n.selectize-dropdown.plugin-optgroup_columns .optgroup:before {\r\n  display: none;\r\n}\r\n.selectize-dropdown.plugin-optgroup_columns .optgroup-header {\r\n  border-top: 0 none;\r\n}\r\n.selectize-control.plugin-remove_button [data-value] {\r\n  position: relative;\r\n  padding-right: 24px !important;\r\n}\r\n.selectize-control.plugin-remove_button [data-value] .remove {\r\n  z-index: 1;\r\n  /* fixes ie bug (see #392) */\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 17px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  color: inherit;\r\n  text-decoration: none;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  padding: 2px 0 0 0;\r\n  border-left: 1px solid #0073bb;\r\n  -webkit-border-radius: 0 2px 2px 0;\r\n  -moz-border-radius: 0 2px 2px 0;\r\n  border-radius: 0 2px 2px 0;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n.selectize-control.plugin-remove_button [data-value] .remove:hover {\r\n  background: rgba(0, 0, 0, 0.05);\r\n}\r\n.selectize-control.plugin-remove_button [data-value].active .remove {\r\n  border-left-color: #00578d;\r\n}\r\n.selectize-control.plugin-remove_button .disabled [data-value] .remove:hover {\r\n  background: none;\r\n}\r\n.selectize-control.plugin-remove_button .disabled [data-value] .remove {\r\n  border-left-color: #aaaaaa;\r\n}\r\n.selectize-control {\r\n  position: relative;\r\n}\r\n.selectize-dropdown,\r\n.selectize-input,\r\n.selectize-input input {\r\n  color: #303030;\r\n  font-family: inherit;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  -webkit-font-smoothing: inherit;\r\n}\r\n.selectize-input,\r\n.selectize-control.single .selectize-input.input-active {\r\n  background: #ffffff;\r\n  cursor: text;\r\n  display: inline-block;\r\n}\r\n.selectize-input {\r\n  border: 1px solid #d0d0d0;\r\n  padding: 8px 8px;\r\n  display: inline-block;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n  z-index: 1;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n}\r\n.selectize-control.multi .selectize-input.has-items {\r\n  padding: 5px 8px 2px;\r\n}\r\n.selectize-input.full {\r\n  background-color: #ffffff;\r\n}\r\n.selectize-input.disabled,\r\n.selectize-input.disabled * {\r\n  cursor: default !important;\r\n}\r\n.selectize-input.focus {\r\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\r\n}\r\n.selectize-input.dropdown-active {\r\n  -webkit-border-radius: 3px 3px 0 0;\r\n  -moz-border-radius: 3px 3px 0 0;\r\n  border-radius: 3px 3px 0 0;\r\n}\r\n.selectize-input > * {\r\n  vertical-align: baseline;\r\n  display: -moz-inline-stack;\r\n  display: inline-block;\r\n  zoom: 1;\r\n  *display: inline;\r\n}\r\n.selectize-control.multi .selectize-input > div {\r\n  cursor: pointer;\r\n  margin: 0 3px 3px 0;\r\n  padding: 2px 6px;\r\n  background: #1da7ee;\r\n  color: #ffffff;\r\n  border: 1px solid #0073bb;\r\n}\r\n.selectize-control.multi .selectize-input > div.active {\r\n  background: #92c836;\r\n  color: #ffffff;\r\n  border: 1px solid #00578d;\r\n}\r\n.selectize-control.multi .selectize-input.disabled > div,\r\n.selectize-control.multi .selectize-input.disabled > div.active {\r\n  color: #ffffff;\r\n  background: #d2d2d2;\r\n  border: 1px solid #aaaaaa;\r\n}\r\n.selectize-input > input {\r\n  display: inline-block !important;\r\n  padding: 0 !important;\r\n  min-height: 0 !important;\r\n  max-height: none !important;\r\n  max-width: 100% !important;\r\n  margin: 0 1px !important;\r\n  text-indent: 0 !important;\r\n  border: 0 none !important;\r\n  background: none !important;\r\n  line-height: inherit !important;\r\n  -webkit-user-select: auto !important;\r\n  -webkit-box-shadow: none !important;\r\n  box-shadow: none !important;\r\n}\r\n.selectize-input > input::-ms-clear {\r\n  display: none;\r\n}\r\n.selectize-input > input:focus {\r\n  outline: none !important;\r\n}\r\n.selectize-input::after {\r\n  content: ' ';\r\n  display: block;\r\n  clear: left;\r\n}\r\n.selectize-input.dropdown-active::before {\r\n  content: ' ';\r\n  display: block;\r\n  position: absolute;\r\n  background: #f0f0f0;\r\n  height: 1px;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.selectize-dropdown {\r\n  position: absolute;\r\n  z-index: 10;\r\n  border: 1px solid #d0d0d0;\r\n  background: #ffffff;\r\n  margin: -1px 0 0 0;\r\n  border-top: 0 none;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  -webkit-border-radius: 0 0 3px 3px;\r\n  -moz-border-radius: 0 0 3px 3px;\r\n  border-radius: 0 0 3px 3px;\r\n}\r\n.selectize-dropdown [data-selectable] {\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n}\r\n.selectize-dropdown [data-selectable] .highlight {\r\n  background: rgba(125, 168, 208, 0.2);\r\n  -webkit-border-radius: 1px;\r\n  -moz-border-radius: 1px;\r\n  border-radius: 1px;\r\n}\r\n.selectize-dropdown [data-selectable],\r\n.selectize-dropdown .optgroup-header {\r\n  padding: 5px 8px;\r\n}\r\n.selectize-dropdown .optgroup:first-child .optgroup-header {\r\n  border-top: 0 none;\r\n}\r\n.selectize-dropdown .optgroup-header {\r\n  color: #303030;\r\n  background: #ffffff;\r\n  cursor: default;\r\n}\r\n.selectize-dropdown .active {\r\n  background-color: #f5fafd;\r\n  color: #495c68;\r\n}\r\n.selectize-dropdown .active.create {\r\n  color: #495c68;\r\n}\r\n.selectize-dropdown .create {\r\n  color: rgba(48, 48, 48, 0.5);\r\n}\r\n.selectize-dropdown-content {\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  max-height: 200px;\r\n}\r\n.selectize-control.single .selectize-input,\r\n.selectize-control.single .selectize-input input {\r\n  cursor: pointer;\r\n}\r\n.selectize-control.single .selectize-input.input-active,\r\n.selectize-control.single .selectize-input.input-active input {\r\n  cursor: text;\r\n}\r\n.selectize-control.single .selectize-input:after {\r\n  content: ' ';\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 15px;\r\n  margin-top: -3px;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 5px 5px 0 5px;\r\n  border-color: #808080 transparent transparent transparent;\r\n}\r\n.selectize-control.single .selectize-input.dropdown-active:after {\r\n  margin-top: -4px;\r\n  border-width: 0 5px 5px 5px;\r\n  border-color: transparent transparent #808080 transparent;\r\n}\r\n.selectize-control.rtl.single .selectize-input:after {\r\n  left: 15px;\r\n  right: auto;\r\n}\r\n.selectize-control.rtl .selectize-input > input {\r\n  margin: 0 4px 0 -2px !important;\r\n}\r\n.selectize-control .selectize-input.disabled {\r\n  opacity: 0.5;\r\n  background-color: #fafafa;\r\n}\r\n.selectize-control.multi .selectize-input.has-items {\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n.selectize-control.multi .selectize-input.disabled [data-value] {\r\n  color: #999;\r\n  text-shadow: none;\r\n  background: none;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n.selectize-control.multi .selectize-input.disabled [data-value],\r\n.selectize-control.multi .selectize-input.disabled [data-value] .remove {\r\n  border-color: #e6e6e6;\r\n}\r\n.selectize-control.multi .selectize-input.disabled [data-value] .remove {\r\n  background: none;\r\n}\r\n.selectize-control.multi .selectize-input [data-value] {\r\n  text-shadow: 0 1px 0 rgba(0, 51, 83, 0.3);\r\n  -webkit-border-radius: 3px;\r\n  -moz-border-radius: 3px;\r\n  border-radius: 3px;\r\n  background-color: #1b9dec;\r\n  background-image: -moz-linear-gradient(top, #1da7ee, #178ee9);\r\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#1da7ee), to(#178ee9));\r\n  background-image: -webkit-linear-gradient(top, #1da7ee, #178ee9);\r\n  background-image: -o-linear-gradient(top, #1da7ee, #178ee9);\r\n  background-image: linear-gradient(to bottom, #1da7ee, #178ee9);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff1da7ee', endColorstr='#ff178ee9', GradientType=0);\r\n  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.2),inset 0 1px rgba(255,255,255,0.03);\r\n  box-shadow: 0 1px 0 rgba(0,0,0,0.2),inset 0 1px rgba(255,255,255,0.03);\r\n}\r\n.selectize-control.multi .selectize-input [data-value].active {\r\n  background-color: #0085d4;\r\n  background-image: -moz-linear-gradient(top, #008fd8, #0075cf);\r\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#008fd8), to(#0075cf));\r\n  background-image: -webkit-linear-gradient(top, #008fd8, #0075cf);\r\n  background-image: -o-linear-gradient(top, #008fd8, #0075cf);\r\n  background-image: linear-gradient(to bottom, #008fd8, #0075cf);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff008fd8', endColorstr='#ff0075cf', GradientType=0);\r\n}\r\n.selectize-control.single .selectize-input {\r\n  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8);\r\n  box-shadow: 0 1px 0 rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8);\r\n  background-color: #f9f9f9;\r\n  background-image: -moz-linear-gradient(top, #fefefe, #f2f2f2);\r\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fefefe), to(#f2f2f2));\r\n  background-image: -webkit-linear-gradient(top, #fefefe, #f2f2f2);\r\n  background-image: -o-linear-gradient(top, #fefefe, #f2f2f2);\r\n  background-image: linear-gradient(to bottom, #fefefe, #f2f2f2);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffefefe', endColorstr='#fff2f2f2', GradientType=0);\r\n}\r\n.selectize-control.single .selectize-input,\r\n.selectize-dropdown.single {\r\n  border-color: #b8b8b8;\r\n}\r\n.selectize-dropdown .optgroup-header {\r\n  padding-top: 7px;\r\n  font-weight: bold;\r\n  font-size: 0.85em;\r\n}\r\n.selectize-dropdown .optgroup {\r\n  border-top: 1px solid #f0f0f0;\r\n}\r\n.selectize-dropdown .optgroup:first-child {\r\n  border-top: 0 none;\r\n}\r\n"

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = "body {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 14px; background:#f2f2f2;\r\n    background: url(\"../images/temp-bg1.jpg\") no-repeat center center fixed;\r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;   \r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100%; \r\n    position:relative; \r\n    vertical-align: middle; float: left;\r\n}\r\n\r\n\r\ninput,\r\ntextarea.materialize-textarea {\r\n    background-color: transparent;\r\n    border: 1px solid #d9dad3;\r\n    border-radius: 0;\r\n    outline: none;\r\n    width: 100%;\r\n    font-size: 16px;\r\n    margin: 0 0 15px 0;\r\n    padding: 14px 1%;\r\n    box-shadow: none;\r\n    transition: all 0.3s;\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\n.template001{ width: 100%; height: 100%;list-style-position: outside; margin:0; padding:0;}\r\n\r\n/*Main Section Style */\r\n.main-bg {background-image: url(\"../images/temp-bg1.jpg\") ;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;   background-size: cover !important;\r\n    background-repeat: no-repeat !important;\r\n    background-attachment: fixed !important;\r\n    background-position: center center !important;\r\n    width: 100%;height: 100% !important; position:relative; vertical-align: middle;\r\n    text-align: center; }\r\n\t\r\n/*header section*/\r\n\r\n\r\n.main-bg header { float:left; width:100%; position: relative;}\r\n.main-bg header .logo {    float: left;\r\n    padding: 38px;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0;\r\n    width: 25%;\r\n    text-align: left;}\r\n.main-bg header .logo img{max-width: 150px; max-height:50px;}\r\n.main-bg header .logo span {color: #fff;font-size: 18px;margin-left: 15px;font-family: montserratregular;}\r\n.main-bg header .logo a{cursor:default}\r\n\r\n.divider-2 .logo img {\r\n    max-width: 150px;\r\n    max-height: 50px;\r\n}\r\n\r\n/*header section end*/\r\n\r\n/*Content section */\r\n.landing-page {width: 100vw;display: table-cell;vertical-align: middle;height: 95vh;text-align:center;  }\r\n.landing-page-header .logo img{max-width:100%; max-height: 50px;}\r\n/*.input-outer {    width: 100vw; display: table-cell; vertical-align: middle;text-align: center;  }*/\r\n.cta-outer {\r\n    width: 100%;\r\n    text-align: center;\r\n    float: left;\r\n    margin-top: 5px;\r\n}\r\n.main-head {font-family: montserratregular;font-size: 60px;color: #fff;word-wrap: break-word;}\r\n.sub-head {font-family: montserratregular;font-size: 24px;color: rgba(255,255,255,0.5);word-wrap: break-word;}\r\n.description {font-family: montserratregular;font-size: 18px;color: rgba(255,255,255,0.5);margin-top: 25px;word-wrap: break-word; padding: 0 20%;}\r\n.input-section{ width:65%; margin:30px auto 0 auto ;}\r\n.input-section input{ background: #f7f7f7; border-radius: 5px; padding: 10px; color: #5e5e5e;font-size: 14px;font-family: montserratregular; margin-bottom: 15px; border:1px solid #d9dad3 !important;}\r\n.input-section ::-webkit-input-placeholder {color: #c4c4c6;}\r\n.input-section :-moz-placeholder { /* Firefox 18- */ color: #c4c4c6;  }\r\n.input-section ::-moz-placeholder {  /* Firefox 19+ */color: #c4c4c6; }\r\n.input-section :-ms-input-placeholder {color: #c4c4c6;}\r\n.prime-action {\r\n    font-family: montserratregular;\r\n    font-size: 18px;\r\n    color: #333333;\r\n    margin-top: 20px;\r\n    padding: 15px 40px;\r\n    background: #fff;\r\n    border-radius: 50px !important;}\r\n.btn.prime-action.focus,.btn.prime-action:focus,.btn.prime-action:hover {color: #333; background: rgba(255,255,255,0.8); text-decoration: none;}\r\n\r\n.footer-nav-outer{ position:absolute; bottom:0; width:100%; padding:10px;}\r\n.footer-nav { margin: 0; padding: 0; float:left;}\r\n.footer-nav li {float: left;display: inline;}\r\n.footer-nav li a {color:rgb(94,94,94);font-family: oxygenbold;font-size: 12px;text-decoration: none;}\r\n.footer-nav li a:hover { color:rgb(94,94,94);}\r\n.footer-nav li span {color:rgb(94,94,94);font-family: oxygenbold;font-size: 12px;text-decoration: none;padding: 5px 10px;}\r\n.powered-by {float: right;text-align: right;}\r\n.powered-by span {\r\n    font-size: 12px; \r\n    margin-right: 5px; \r\n    color: #fff;\r\n    text-shadow: 3px 4px 3px rgba(0,0,0,0.5);\r\n}\r\n\r\n/*new style 7/9/16*/\r\n\r\n.question-section .input-section{ width:93%; margin:30px auto 0 44px ;}\r\n\r\n/*new style*/\r\n/*theme style*/\r\n.questions{ float:left; width:100%;}\r\n.questions-header header{ background:none; float:left; width:100%; padding:0;} \r\n.questions-header header .p-right0{ padding-right:0;}\r\n.questions-header header .logo {float: left; padding:10px; }\r\n.questions-header header .right-sec {float: left; background:#ff6600; min-height:70px; padding:13px 10px 10px 2% ; position:relative; }\r\n.questions-header header .right-sec i{ font-size:20px;color:#fff; position:absolute; left:-72px;}\r\n.questions-header header .right-sec p{ float:left; font-size:11px;color:#fff; padding-left:26px; font-family: montserratregular; margin-bottom:5px;  }\r\n.questions-header header .right-sec span{ float:left; font-size:20px;color:#fff; font-family: montserratregular; padding-left:5px; }\r\n.que-fixed{position: fixed;top: 0; width: 100%; z-index:99;}\r\n.question-page{padding-top:7%; }\r\n\r\n.questions .question-head {font-family: oxygenbold; font-size: 14px; text-align: left; color: #5e5e5e;margin-bottom: 5px;}\r\n.questions .question-subhead { font-family: oxygenregular; font-size: 14px; text-align: left; color: #999999; width: 100%;}\r\n.questions .question-section {width: 100%;display: inline-block; background:#fff;  margin-top: 15px;}\r\n.questions .section-head {font-family: oxygenbold;\r\n    font-size: 14px;\r\n    text-align: left;\r\n    color: #5e5e5e;\r\n    margin-bottom: 5px;}\r\n.questions  .file-outer .section-head {font-size: 22px; margin-bottom: 10px;font-family: montserratlight;\tcolor: #666e78;}\r\n.questions .section-head i {color:#dcdddf; font-size:23px; cursor:pointer;display:none;}\r\n.question-components {\r\n    width: 100%;\r\n    display: inline-block;\r\n    padding-bottom: 40px;\r\n    padding-left: 30px;\r\n    border-left: 3px solid rgba(255,102,0,0.15);\r\n    margin-left: 11px;\r\n}\r\n.question-components .check-comp label{     \r\n    margin-bottom: 0;\r\n    float: left;\r\n    line-height: 30px;\r\n    word-wrap: break-word; z-index: 9;\r\n}\r\n\r\n\r\n.questions .date-picker-outer .section-head{font-size: 22px;margin-bottom: 10px;font-family: montserratlight;color: #666e78; margin-top:-20px;}\r\n/*theme style end */\r\n\r\n/* Checkbox with tick icons */\r\n.check-icon { width: 100%;padding: 0px; border: none; font-size: 16px;    font-weight: normal; line-height: 16px; border-bottom: 0; font-family: montserratlight;}\r\n.check-icon.last {border: none;}\r\n.check-icon:hover, .check-icon.last:hover{ background:none; cursor:pointer;}\r\n.check-icon input[type=\"checkbox\"] {left: -9999px; position: absolute;}\r\n.check-icon label {content: \"\"; width: 24px; height: 24px;border: 2px solid #ff6600;border-radius:50%;margin-right: 15px;margin-bottom: 0px;position: relative;top: 8px;}\r\n.check-icon input[type=\"checkbox\"]:checked + label { background-color: #ff6600; border: none;top: -1px;}\r\n.check-icon.gray-bg{ background:none;}\r\n.check-icon label::after {display: inline-block;position: relative; /* width: 11px; */height: auto;left: 2px;top: 0px;font-size: 12px; color: #fff;font-weight: 700; height: 0px;/* line-height: 34px; */}\r\n.check-icon input[type=\"checkbox\"]:checked + label::after {font-family: \"Material Icons\"; content: \"\\e5ca\";}\r\n.check-icon div {line-height: 38px; display: inherit;}\r\n\r\n/* Checkbox as icons */\r\n\r\n.check-icon div {line-height: 30px; display: inherit; font-size: 18px; color: #ff6600;}\r\n.check-icon label {display: inline-block;width: 16px; height: 16px; position: relative;top: 1px; margin: 0px 10px 0px 0px;}\r\n.check-icon input[type=\"checkbox\"]:checked + div {background-color: #ff6600;border: none;color: #fff;}\r\n.check-icon input[type=\"checkbox\"]:checked + div label {background-color: #fff;border: none;margin-bottom: 5px;}\r\n.check-icon input[type=\"checkbox\"]:checked + div label::after {font-family: \"Material Icons\"; content: \"\\e5ca\";}\r\n.ic label {content: none; border: none;height: auto; width: auto;color: #ff6600;}\r\n.ic input[type=\"checkbox\"]:checked + label::after { content: none;}\r\n.ic input[type=\"checkbox\"]:checked + label { color: #ff6600; background: none; top: 3px;}\r\n.ic i {font-size: 24px; line-height: 1;}\r\n\r\n\r\n\r\n/* Radio Buttons */\r\n\r\n.radio-icon {\r\n    width: 100%;\r\n    /*padding: 12px 15px; */\r\n    border: 2px solid #eee;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    line-height: 16px;\r\n    border-bottom: 0;\r\n    font-family: montserratlight;\r\n}\r\n.sound-cloud input { cursor:pointer; }\r\n.radio-icon .active{ background:#f9f9f9;}\r\n.radio-icon.last {\r\n    border: 2px solid #eee;\r\n}\r\n\r\n.radio-icon:hover,\r\n.radio-icon.last:hover {\r\n    background: #f9f9f9;\r\n    cursor: pointer;\r\n}\r\n.radio-icon .radio-btn label .radio-btn input[type=\"radio\"]:checked+label {\r\n    color: #ff6600;\r\n    font-size: 15px;\r\n}\r\n.radio-icon .radio-btn input[type=\"radio\"]:checked+label::after {\r\n    border: 3px solid #ff6600;\r\n}\r\n.radio-icon .radio-btn input[type=\"radio\"]:checked+label::before {\r\n    background: #ff6600;\r\n}\r\n.radio-icon .radio-btn label::after {\r\n    border: 3px solid #ff6600;\r\n}\r\n\r\n.radio-btn {\r\n    position: relative;\r\n    padding: 15px 20px\r\n}\r\n.radio-icon .radio-btn label{font-weight: 500;}\r\n.radio-icon .radio-btn input[type=\"radio\"] {\r\n    position: absolute;\r\n    opacity: 0;\r\n    z-index: 1;\r\n\t\r\n}\r\n.radio-btn label {\r\n    display: inline-block;\r\n    line-height: 24px;\r\n    vertical-align: middle;\r\n    position: relative;\r\n    padding-left: 30px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    color: #424242\r\n}\r\n.radio-btn label::after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 21px;\r\n    height: 21px;\r\n    left: 0;\r\n    top: 0;\r\n    margin-left: 0px;\r\n    background-color: #ffffff;\r\n    border: 3px solid #ff6600;\r\n    -webkit-border-radius: 3px;\r\n    border-radius: 3px;\r\n    background-clip: padding-box;\r\n\t\r\n    cursor: pointer\r\n}\r\n.radio-btn label::before {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 10px;\r\n    height: 5px;\r\n    top: 6px;\r\n    left: 6px;\r\n    margin-left: 0px;\r\n    border: 3px solid #ff6600;\r\n    border-top: none;\r\n    border-right: none;\r\n    background: transparent;\r\n    -moz-transform: rotate(-45deg);\r\n    -o-transform: rotate(-45deg);\r\n    -ms-transform: rotate(-45deg);\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n    opacity: 0;\r\n    -webkit-transition: all 0.15s ease-in-out;\r\n    -o-transition: all 0.15s ease-in-out;\r\n    transition: all 0.15s ease-in-out;\r\n    z-index: 1\r\n}\r\n.radio-btn label:active::before {\r\n    opacity: 0.3\r\n}\r\n\r\n.radio-btn input[type=\"radio\"]:checked+label {\r\n    color: #000\r\n}\r\n\r\n.radio-btn input[type=\"radio\"]:checked+label::after {\r\n    border: 3px solid #000\r\n}\r\n\r\n.radio-btn input[type=\"radio\"]:checked+label::before {\r\n    opacity: 1\r\n}\r\n\r\n.radio-btn input[type=\"radio\"]:disabled+label {\r\n    color: #787878;\r\n    cursor: default\r\n}\r\n\r\n.radio-btn input[type=\"radio\"]:disabled+label::after {\r\n    border: 3px solid #787878;\r\n    background-color: #ffffff\r\n}\r\n\r\n.radio-btn input[type=\"radio\"]:disabled+label::before {\r\n    display: none\r\n}\r\n.radio-btn label::after {\r\n    -webkit-border-radius: 50%;\r\n    border-radius: 50%;\r\n    background-clip: padding-box\r\n}\r\n.radio-btn label::before {\r\n    width: 9px;\r\n    height: 9px;\r\n    border: none;\r\n    top: 6px;\r\n    left: 6px;\r\n    -webkit-border-radius: 50%;\r\n    border-radius: 50%;\r\n    background-clip: padding-box;\r\n    background-color: #ff6600;\r\n    -moz-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    -ms-transform: rotate(0deg);\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg)\r\n}\r\n\r\n\r\n\r\n\r\n/* counter Buttons */\r\n.counter{  float:left; padding:5px;  border:1px solid #dcdddf; font-family:montserratlight; margin-bottom:20px;  }\r\n.qty {width: 100px !important;height: 25px;text-align: center; float:left; border:none !important; margin-bottom:0 !important; font-size:16px !important;}\r\n.qtyplus { width:25px; height:25px; background:none; float:left; margin-left:10px; cursor:pointer; font-size:20px;  padding:5px; color:#ff6600;}\r\n.qtyminus { width:25px; height:25px; float:left; margin-right:10px; cursor:pointer; font-size:20px; padding:5px;color:#ff6600;}\r\n.qtyminus .material-icons,.qtyplus .material-icons { font-size:20px !important}\r\n\r\n/* switch Buttons */\r\n\r\n.switch-outer{width: 100%; float:left;padding: 0px 15px;border:none;font-size: 16px;font-weight: normal;line-height: 16px;    border-bottom: 0;font-family: montserratlight;}\r\n.switch-outer.last{border-bottom: 0;}\t\r\n.switch-outer .switch-que{ float:left; padding:12px; font-size:16px; font-family:montserratlight; color:#232f3f;}\r\n.switch-outer .switch {display: table-cell;vertical-align: middle;padding: 5px;}\r\n.switch-outer .cmn-toggle {position: absolute;margin-left: -9999px;visibility: hidden;}\r\n.switch-outer .cmn-toggle + label { display: block; position: relative; cursor: pointer; outline: none; -webkit-user-select: none;\r\n  -moz-user-select: none; -ms-user-select: none; user-select: none;}\r\n.switch-outer input.cmn-toggle-round-flat + label {padding: 2px; width: 62px; height: 30px; background-color: #ff6600; -webkit-border-radius: 60px;  -moz-border-radius: 60px; -ms-border-radius: 60px; -o-border-radius: 60px; border-radius: 60px; -webkit-transition: background 0.4s;  -moz-transition: background 0.4s; -o-transition: background 0.4s; transition: background 0.4s;}\r\n.switch-outer input.cmn-toggle-round-flat + label:before, input.cmn-toggle-round-flat + label:after {display: block;position: absolute; content: \"\";}\r\n.switch-outer input.cmn-toggle-round-flat + label:before { top: 2px; left: 2px; bottom: 2px; right: 2px; background-color: #fff; -webkit-border-radius: 60px;  -moz-border-radius: 60px; -ms-border-radius: 60px; -o-border-radius: 60px; border-radius: 60px; -webkit-transition: background 0.4s;  -moz-transition: background 0.4s; -o-transition: background 0.4s; transition: background 0.4s;}\r\n.switch-outer input.cmn-toggle-round-flat + label:after { top: 4px; left: 4px; bottom: 4px; width: 23px; background-color: #ff6600; -webkit-border-radius: 52px;\r\n  -moz-border-radius: 52px;  -ms-border-radius: 52px; -o-border-radius: 52px; border-radius: 52px; -webkit-transition: margin 0.4s,background 0.4s; -moz-transition: margin 0.4s, background 0.4s;  -o-transition: margin 0.4s, background 0.4s; transition: margin 0.4s, background 0.4s;}\r\n.switch-outer input.cmn-toggle-round-flat:checked + label {  background-color: #ff6600;}\r\n.switch-outer input.cmn-toggle-round-flat:checked + label:after { margin-left: 30px; background-color: #ff6600;}\r\n\r\n\r\n\r\n\r\n\r\n/*input*/\r\n\r\n.input-icon {\r\n    color: initial;\r\n    position: relative;\r\n    top: -60px;\r\n    font-size: 16px;\r\n    background: none;\r\n    border: none;\r\n    text-align: right;\r\n    padding: 6px 10px 6px 20px;\r\n}\r\n\r\n.input-group-addon.input-icon {\r\n    color: #ff6600;\r\n}\r\n\r\n\r\n/*File Upload*/\r\n\r\n.file-field { position: relative;}\r\n.input-field {position: relative;max-height:54px;float:left;width:100%; font-family:montserratlight}\r\n.file-field input[type=file] {position: absolute;top: 0;right: 0;left: 0;bottom: 0; width: 100%; margin: 0;padding: 0;font-size: 20px;cursor: pointer;opacity: 0;filter: alpha(opacity=0);z-index:9;}\r\n.file-field .input-icon {left: 1px;/* top: 8px; */color: #ff6600;font-size: 24px;text-align: left; padding-left:0px;}\r\n.file-field input[type=text] { padding-left: 35px; -moz-box-sizing: border-box;-webkit-box-sizing: border-box; box-sizing: border-box;}\r\n\r\n\r\n/* Range slider */\r\n.slider-selection {background: none;background-color: #ff6600;box-shadow: none;}\r\n.slider-track-low, .slider-track-high {background: #999999;}\r\n.slider-handle {background-color: #fff; background-image: none;box-shadow: none;border: 4px solid #ff6600; width: 18px; height: 18px;}\r\n.tooltip-inner { padding: 3px 10px;font-size: 16px; background-color: #ff6600;border-radius: 0px;}\r\n.tooltip.top .tooltip-arrow {border-top-color: #ff6600;}\r\n.slider .tooltip.top {margin-top: -49px;}\r\n.slider.slider-horizontal {width: 100%;}\r\n.slider.slider-horizontal .slider-track {height: 6px;}\r\n.slider.slider-horizontal .slider-selection, .slider.slider-horizontal .slider-track-low, .slider.slider-horizontal .slider-track-high {top: 1px;}\r\n.slider-track .slider-tick { background: #ff6600; opacity: 1;}\r\n.slider-tick.in-selection,.slider-tick { background-image: none;background: #ff6600;width: 18px;height: 18px;}\r\n.slider-selection.tick-slider-selection {background-image: none; background-color: #ff6600;}\r\ntemp .range {font-size: 18px;position: relative;top: 41px;right: -1px;}\r\n.range-max {top: -6px;float: right;}\r\n\r\n.slider.slider-horizontal .slider-track{ height: 4px;}\r\n.slider.slider-horizontal .slider-tick, .slider.slider-horizontal .slider-handle{margin-top:-4px;}\r\n.slider-handle{width:12px; height:12px; background:#ffffff; border:2px solid #ff6600;}\r\n.slider-track{background:#cccccc;}\r\n.tooltip-inner{background:#ff6600 !important;}\r\n.tooltip.top .tooltip-arrow{border-top-color: #ff6600}\r\n.slider-track-low, .slider-track-high{}\r\n.slider-selection.tick-slider-selection{background:#ff6600;}\r\n.slider-tick.in-selection{width: 12px;height: 12px;background: #ff6600;}\r\n.slider-tick{width:12px; height:12px;background:#cccccc;}\r\n.cir{margin-left:-10px; margin-top:2px;}\r\n.range-slider{text-align:center;}\r\n.slider.slider-horizontal{width:96%; padding:30px 0; margin-bottom: 0px !important;}\r\n.slider.slider-horizontal .slider-tick-label-container .slider-tick-label{ font-family:montserratlight; font-size:16px; color:#ff6600; width:100%;}\r\n.slider.slider-horizontal .slider-tick-label-container { white-space: nowrap; margin-top: 3px !important;}\r\n.tooltip.top .tooltip-arrow {margin-left: -8px !important;}\r\n\r\n\r\n\r\n/*Components end */\r\n\r\n\r\n\r\n/*Result Section Style */\r\n.page_2 {\r\n    background: #f6f6f6;\r\n    width: 28%;\r\n    top:100px !important;\r\n    padding: 30px;\r\n    padding-left: 30px;\r\n    padding-right: 20px;\r\n    position: relative;\r\n    font-family: montserratregular;\r\n    display: inline-block;\r\n    -webkit-border-top-right-radius: 7px;\r\n    -webkit-border-bottom-right-radius: 7px;\r\n    -moz-border-radius-topright: 7px;\r\n    -moz-border-radius-bottomright: 7px;\r\n    border-top-right-radius: 7px;\r\n    border-bottom-right-radius: 7px; position: relative;\r\n}\r\n.page_2 .top-head { position:relative; z-index:1; float:left; width:100%;background:none;\t/*min-height:50px;*/ font-family:oxygenbold;}\r\n.page_2 .top-head  .top-left{\r\n    float: left;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.page_2 .top-head  .top-right{ float:left; width:50%; padding:0 10px;}\r\n.page_2 .top-head h4{\r\n    color: #6f7072;\r\n    font-size: 24px;\r\n    font-family: montserrat;\r\n    font-weight: normal;\r\n    float: left;\r\n}\r\n.page_2 .top-head h4 span{ color:#ff6600; font-size:24px;}\r\n.page_2  .share-link{ float:left; width:100%; margin-top: 10px;}\r\n.page_2  .share-link ul{ margin: 5px 0;padding: 0;float: none; width: 100%;text-align: center; display: inline-block; z-index: 9; position: relative;}\r\n.page_2  .share-link ul li{ display:inline-block;}\r\n.page_2  .share-link ul li:nth-child(5){ display: none;}\r\n.page_2  .share-link ul li span{ padding:0px; color:#ff6600; font-size:18px; font-weight:bold;}\r\n.page_2  .share-link ul li a{ display:inline-block; text-decoration:none; color:#6e7071; font-size:18px; padding:5px; opacity:0.7;} \r\n.page_2  .share-link ul li a .material-icons{font-size:18px !important; margin-top:3px; } \r\n.page_2 .share-link span i{   margin-top: 8px;font-size: 16px;margin-left: 6px; color: #6e6f71;}\r\n.page_2 .share-link span li{border-left: 1px dotted #6e6f71;height: 18px;margin-top: 8px;margin-left:5px; margin-right:5px;}\r\n.page_2 ul li h6{color:#6e6f71; margin-right:12px;}\r\n\r\n\r\n.page_2 .result-full-section{ float:left;  width:100%; background:none; text-align: center; padding-top: 0px;  z-index:1;     border-bottom: 3px solid #fff;   padding-bottom: 20px; padding-top:30px;}\r\n.page_2 .result-full-section:last-child {float: left; width: 100%;background: none; border: 0 !important; text-align: center; padding-top: 0px; z-index: 1; padding-bottom: 0;}\r\n.page_2 .result-full-section h4{color:#ff6600;\ttext-align:center; font-size:30px; font-family:montserratregular;}\r\n.page_2 .result-full-section .small-top-sec p:nth-child(1) span{color:#5e5e5e;text-align:center;font-size:14px; font-family:montserratregular; margin:0; line-height:22px; text-transform:uppercase;}\r\n.page_2 .result-full-section .small-top-sec p:nth-child(2) span{color:#9a9a9a;text-align:center;font-size:14px; font-family:montserratregular; margin:0; line-height:22px;}\r\n.page_2 .result-full-section .small-section{ float:left; width:100%;}\r\n.grey-color{color:#9a9a9a !important;}\r\n.page_2 .result-full-section .small-section h4{\r\n    color: #ff6600 !important;\r\n    font-size: 18px;\r\n    font-family: montserratregular;\r\n    float: right;\r\n    margin-top: 0;\r\n    width: 30%;\r\n    text-align: right;\r\n}\r\n.page_2 .input-section{ float:left;width:100%; background:#f5f5f5; padding:20px 0; margin-top:0 !important}\r\n.page_2 .input-section input{background: #ffffff; border-radius: 5px; padding: 10px; color: #ff6600;font-size: 14px;font-family: montserratregular; margin-bottom: 10px; border:1px solid #d9dad3 !important;}\r\n.bordered-btn{background-color: #f9f9f9;  color: #00afa5;padding: 10px 40px; border: 2px solid #00afa5;text-decoration: none !important; transition: background-color 0.5s ease; }\r\n.bordered-btn:hover{ background-color: #00afa5; color: #fff;}\r\n.page_2 .content-right{ float:left; width:30%; padding:0 10px; }\r\n\r\n.container-temp div:nth-child(1){     \r\n    text-align: center;\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    color: rgb(94,94,94);\r\n    font-family: oxygenbold;\r\n}\r\n\r\n\r\n/*Result Section Style */\r\n\r\n.section-head .help-text{\r\n    font-family: oxygenregular;\r\n    font-size: 14px;\r\n    text-align: left;\r\n    color: #999999;\r\n    width: 100%;\r\n    margin-bottom: 15px;\r\n    margin-top: 5px;\r\n}\r\n/*\r\n.section-head i:hover + .help-text{ display:block !important}*/\r\n\r\n/*\r\n.section-head .help-outer { width: 40px; position: relative; display: inline-block; top: 4px; padding-left: 5px; }\r\n.section-head .help-text { display: none; width: 250px; background: #eee; border: 1px solid #ccc; padding: 8px; left: -50px; font-size: 12px; position: absolute; color: #999; line-height: 18px; font-family: montserratlight; -webkit-box-shadow: 3px 3px 10px 0px rgba(224, 221, 224, 1); -moz-box-shadow: 3px 3px 10px 0px rgba(224, 221, 224, 1); box-shadow: 3px 3px 10px 0px rgba(224, 221, 224, 1); }\r\n.section-head i:hover + .help-text { display: block !important; z-index: 99; }\r\n.section-head span { margin-bottom: 25px;} \r\n\r\n*/\r\n.section-head .help-outer i{ display: none;}\r\n\r\n\r\n\r\n\r\n/*New Radio Style */\r\n.radio-outer{float: left;    \r\n    width: 100%;\r\n    padding: 0px;\r\n    border: none;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    line-height: 16px;\r\n    border-bottom: 0;\r\n    font-family: montserratlight; \r\n    margin-bottom: 10px;\r\n}\r\n.radio-outer:last-child{border: 0;}\r\n.lable-style{padding: 0px 30px; }\r\n.control {    display: block;\r\n    position: relative;\r\n    padding-left: 30px;\r\n    margin-bottom: 15px;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: #ff6600;}\r\n.control input {position: absolute;z-index: 9; opacity: 0; width: auto; margin: 0; height: 0;}\r\n.control__indicator {position: absolute;top:5px;left: 0;height: 20px;width: 20px;border:3px solid #ff6600;}\r\n.control--radio .control__indicator {border-radius: 50%;}\r\n.control input:checked ~ .control__indicator {background: #ff6600;}\r\n.control__indicator:after {content: ''; position: absolute; display: none;}\r\n.control input:checked ~ .control__indicator:after {display: block;}\r\n.control--radio .control__indicator:after { left: 0px; top: 0px; height: 14px; width: 14px; border-radius: 50%; background: #ff6600; border: 3px solid #fff;}\r\n.control--radio .control__indicator.icon-set{ border:none !important;top: 3px;left: 0px; color:#ff6600;}\r\n.control--radio .control__indicator.icon-set:after { left: 0px; top: 0px; height: 14px; width: 14px; border-radius: 50%; background: none; border: none;}\r\n.control input:checked ~ .control__indicator.icon-set {background: none;}\r\n.check-comp .control--radio .control__indicator.icon-set i{font-size: 18px;}\r\n\r\n\r\n/*New Checkbox Style */\r\n.checkbox-outer-base{\r\n    float: left;    \r\n    width: 100%;\r\n    padding: 0px;\r\n    border: none;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    line-height: 16px;\r\n    border-bottom: 0;\r\n    font-family: oxygenregular; \r\n    margin-bottom: 10px;\r\n}\r\n.checkbox-outer-base:last-child{border: none; }\r\n.checkbox-outer{\r\n    float: left;    \r\n    width: 100%;\r\n    padding: 0px;\r\n    border: none;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    line-height: 16px;\r\n    border-bottom: 0;\r\n    font-family: oxygenregular; \r\n    margin-bottom: 10px;\r\n}\r\n.checkbox-outer:last-child{border: none;}\r\n.control__indicator.check-set {     left: 10px !important; border: 2px solid #ff6600; border-radius: 50%;  top: 5px;}\r\n.control--checkbox { padding:0px 38px;}\r\n.control--checkbox .control__indicator:after {left: 6px; top: 1px; width: 5px; height: 11px; border: solid #fff; border-width: 0 2px 2px 0;transform: rotate(45deg);}\r\n.check-comp .checkbox-outer .control__indicator.check-set{ border:none; left:12px; color:#ff6600;}\r\n.check-comp .checkbox-outer .control__indicator.check-set i{font-size: 18px;}\r\n.check-comp .checkbox-outer .control input:checked ~ .control__indicator {background: none; color:#ff6600;}\r\n.check-comp .checkbox-outer .control--checkbox .control__indicator:after{ border:none;}\r\n.check-comp .checkbox-outer .control--checkbox { padding: 0px 20px 0px 35px;}\r\n\r\n\r\n\r\n.select {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin-bottom: 15px;\r\n  width: 100%;\r\n}\r\n.select select {\r\n    display: inline-block;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    padding: 10px 15px;\r\n    outline: 0;\r\n    border-radius: 25px;\r\n    color: #ff6600;\r\n    background: #f7f7f7;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    border: 2px solid #eee;\r\n    font-family: montserratlight;\r\n    font-size: 16px;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n}\r\n.select select::-ms-expand {\r\n  display: none;\r\n}\r\n.select select:hover,\r\n.select select:focus {\r\n    color: #ff6600;\r\n    background: #fff;\r\n    padding: 10px 15px;\r\n  \r\n}\r\n\r\n.select__arrow {\r\n    position: absolute;\r\n    top: 19px;\r\n    right: 15px;\r\n    width: 0;\r\n    height: 0;\r\n    pointer-events: none;\r\n    border-style: solid;\r\n    border-width: 8px 5px 0 5px;\r\n    border-color: #ff6600 transparent transparent transparent;\r\n}\r\n.select select:hover ~ .select__arrow,\r\n.select select:focus ~ .select__arrow {\r\n      border-top-color: #ff6600;\r\n}\r\n.select select .option{ padding:10px;}\r\n.select select > option {\r\n  background: #eee !important;\r\n  padding:20px !important;\r\n}\r\n.select select > option:hover {\r\n  background: #ccc !important;\r\n  padding:20px !important;\r\n  \r\n}\r\n\r\n\r\n\r\n/*New circle outer*/\r\n.circle-outer{ float:left;width:100%; padding:10px; text-align:center;}\r\n.circle-outer .icon-outer{  color:#ff6600;}\r\n.circle-outer .icon-outer i{font-size:40px;}\r\n.circle-outer .num-circle-outer{ -webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px;  background:#ff6600; padding:10px 15px; color:#fff; font-size:14px; font-family:montserratregular;}\r\n\r\n\r\n/* sahil css start template 2 */\r\n.page2{\r\n    margin-top: 10%;\r\n    margin-bottom: 5%;\r\n    float: left;\r\n}\r\n.questions .question-section-outer{\r\n    background: #fff;\r\n    width: 94%;\r\n    float: left;\r\n    padding: 20px 20px 20px 30px;\r\n    padding-bottom: 0;\r\n    padding-top: 0;\r\n}\r\n.questions .question-section-outer:nth-last-child(12){\r\n    display: none;\r\n}\r\n.questions .question-section-outer:nth-last-child(11){\r\n    -webkit-border-top-left-radius: 7px;\r\n    -webkit-border-top-right-radius: 7px;\r\n    -moz-border-radius-topleft: 7px;\r\n    -moz-border-radius-topright: 7px;\r\n    border-top-left-radius: 7px;\r\n    border-top-right-radius: 7px;\r\n    padding-left: 0px;\r\n}\r\n.questions .question-section-outer:nth-last-child(11) .questions{\r\n    padding-top: 20px;\r\n}\r\n.questions .question-section-outer:nth-last-child(11) .questions .question-head{\r\n    color: #ff6600;\r\n    font-size:18px;\r\n}\r\n.questions .question-section-outer:nth-last-child(10) .questions {\r\n    padding-top: 20px;\r\n}\r\n.questions .question-section-outer:nth-last-child(1){\r\n    -webkit-border-bottom-right-radius: 7px;\r\n    -webkit-border-bottom-left-radius: 7px;\r\n    -moz-border-radius-bottomright: 7px;\r\n    -moz-border-radius-bottomleft: 7px;\r\n    border-bottom-right-radius: 7px;\r\n    border-bottom-left-radius: 7px;\r\n}\r\n.questions .question-section-outer .sliding-next{\r\n    display: none;\r\n}\r\n.questions .question-section-outer .questions .col-md-8{\r\n    margin-left: 0px;\r\n    width: 92%;\r\n}\r\n.questions .question-section-outer .question-leftoutr{\r\n    float: left;\r\n}\r\n.questions .question-section-outer .question-number{\r\n    width: 30px;\r\n    height: 30px;\r\n    background: #ff6600;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    line-height: 30px;\r\n    position: absolute;\r\n    left: 28px;\r\n}\r\n.questions .question-section-outer .question-line{\r\n    min-height: 150px;\r\n    position: relative;\r\n    float: left;\r\n    margin-left: 14px;\r\n}\r\n.questions .question-section-outer .question-rightoutr{\r\n    float: left;\r\n    width: 90%;\r\n    padding-left: 30px;\r\n    padding-bottom: 45px;\r\n    margin-left: 17px;\r\n    border-left: 3px solid rgba(255,102,0,0.15);\r\n}\r\n.questions .question-section-outer .question-head{\r\n    /*display: none;*/\r\n}\r\n.questions .question-section-outer .question-subhead{\r\n    /*display: none;*/\r\n}\r\n.questions .question-section-outer .input-field input\r\n{\r\n    background: #f7f7f7;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    color: #ff6600;\r\n    font-size: 14px;\r\n    font-family: montserratregular;\r\n    margin-bottom: 0px;\r\n}\r\n.questions .question-section-outer .questions .question-components .check-comp label:hover{\r\n    background: #ff6600;\r\n    \r\n}\r\n.questions .question-section-outer .questions .question-components .check-comp label:hover .material-icons{\r\n    color: #fff;\r\n}\r\n.questions .question-section-outer .questions .question-components .check-comp label:hover div{\r\n    color: #fff;\r\n}\r\n.page2 .page_2 section {\r\n    background: none;\r\n    width: 100%;\r\n    float: left;\r\n    margin-left: 0px;\r\n}\r\n.page2 .page_2 .top-head section:nth-last-child(1) {\r\n    display: none;\r\n}\r\n.page_2.result-fixed{\r\n    /*position: fixed !important;*/\r\n    position: fixed !important;\r\n    width: 28%;\r\n    top: 5%;\r\n    left: 56%;\r\n}\r\n.page2 .page_2 .result-full-section .small-section h6 {\r\n    display: none;\r\n}\r\n.page2 .page_2 .cta-outer .bordered-btn{\r\n    background: #ff6600;\r\n    color: #fff;\r\n    padding: 5px 30px;\r\n    border: 2px solid #ff6600;\r\n    font-family: montserratlight;\r\n    font-size: 14px;\r\n    text-decoration: none !important;\r\n    border-radius: 5px;\r\n    display: inline-block;\r\n    transition: background-color 0.5s ease;\r\n    box-shadow: 0 2px 5px 1px rgba(0,0,0,0.2);\r\n\r\n}\r\n.page2 .page_2 .cta-outer .bordered-btn:hover{\r\n    background: #fff;\r\n    color: #ff6600;\r\n}\r\n.page2 .page_2 .result-full-section div:nth-last-child(5){\r\n    border-top: 3px solid #fff;\r\n    padding-top: 20px;\r\n    margin-top: 20px;\r\n}\r\n.page2 .page_2 .result-full-section .small-section h5 {\r\n    color: #5e5e5e;\r\n    text-align: left;\r\n    font-size: 14px;\r\n    font-family: montserratregular;\r\n    margin: 0;\r\n    margin-bottom: 15px;\r\n    width: 65%;\r\n    text-transform: uppercase;\r\n}\r\n.questions .question-components .checkbox-outer label:hover{\r\n    margin-bottom: 0;\r\n    background: #ff6600;\r\n    color: #fff;\r\n    border-radius: 25px;\r\n}\r\n.questions .question-components .checkbox-outer label:hover .check-set{\r\n    color: #fff;\r\n}\r\n.template-section{\r\n    float: left;\r\n}\r\n.page_1 {\r\n    background: #fff;\r\n    width: 41%;\r\n    float: left;\r\n    margin-left: 15%;\r\n    z-index: 9;\r\n    position: relative;\r\n    padding: 20px 0;\r\n    margin-top: 40px;\r\n    margin-bottom: 40px;\r\n    -webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;\r\n-webkit-box-shadow:3px 3px 10px 0px rgba(153,153,153,1);-moz-box-shadow:3px 3px 10px 0px rgba(153,153,153,1);box-shadow:3px 3px 10px 0px rgba(153,153,153,1);\r\n}\r\n.page_2 {\r\n    background: #f6f6f6;\r\n    width: 28%;\r\n    top:100px;\r\n    position: relative;\r\n    font-family: montserratregular;\r\n    display: inline-block;\r\n    -webkit-border-top-right-radius: 7px;\r\n    -webkit-border-bottom-right-radius: 7px;\r\n    -moz-border-radius-topright: 7px;\r\n    -moz-border-radius-bottomright: 7px;\r\n    border-top-right-radius: 7px;\r\n    border-bottom-right-radius: 7px;\r\n}\r\n.landing-page-mid{\r\n    width: 100vw !important;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    height: 100vh;\r\n    text-align: center;\r\n    padding:10%;\r\n    background: rgba(42,40,38,0.45);\r\n}\r\n.landing-footer-outer {\r\n    position: absolute;\r\n    width: 100%;\r\n    padding: 10px;\r\n    bottom: 0;\r\n}\r\n.page_2 .right-section {\r\n    display: none;\r\n}\r\n\r\n.page_2 section:nth-child(3) .cta-outer{\r\n    border:none;\r\n    padding-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n.page_2 .btn.prime-action{\r\n    margin-top: 0;\r\n    background: #ff6600;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    border-radius: 5px !important;\r\n    padding: 6px 25px;\r\n    box-shadow: 0 2px 3px 1px rgba(0,0,0,0.2);\r\n    margin-bottom: 30px; white-space: normal;\r\n}\r\n.page_2 .btn.prime-action:hover{ color: #ffffff; background: transparent 0.5;}\r\n.page_2 .top-head .mid-width{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.page_2 .result-temp2-default-section {\r\n    float: left;\r\n    width: 100%;\r\n    padding-top: 15px; position: relative;\r\n}\r\n.page_2 .result-temp2-default-section:last-child {\r\n    float: left;\r\n    width: 100%;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 20px; \r\n    border-bottom: 3px solid #fff;\r\n}\r\n.page_2 .result-temp2-default-section.result-full-section .small-top-sec p:child(1){width: 100% !important; text-align: center !important; float: left !important; word-wrap: break-word;  }\r\n.page_2 .result-temp2-default-section.result-full-section .small-top-sec p:child(2){width: 100% !important; text-align: center !important; float: left !important; word-wrap: break-word;  }\r\n.page_2 .result-temp2-default-section.result-full-section .small-top-sec p:child(3){width: 100% !important; text-align: center !important; float: left !important; word-wrap: break-word;  }\r\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(3){\r\n    float: left; width:70% !important; text-align: left; text-transform: initial !important; font-size: 12px; color: #999;\r\n}\r\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(4){\r\n    float: left; width:70% !important; text-align: left; text-transform: initial !important; font-size: 12px; color: #999;\r\n}\r\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(5){\r\n    float: left; width:70% !important; text-align: left; text-transform: initial !important; font-size: 12px; color: #999;\r\n}\r\n.page_2 .result-temp2-default-section .small-top-sec{\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p{\r\n    color: #5e5e5e;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    font-family: montserratregular;\r\n    margin: 0;\r\n    margin-bottom: 0px;\r\n}\r\n.page_2 .result-temp2-default-section .small-top-sec h4{\r\n    color: #ff6600 !important;\r\n    font-size: 18px;\r\n    font-family: montserratregular;\r\n    float: left;\r\n    margin-top: 0;\r\n}\r\n\r\n.page_2 .result-temp2-default-section .small-top-sec .right-set{float: right; width:50%; text-align: right;}\r\n.page_2 .result-temp2-default-section .small-top-sec .left-set{ float: left; width:50%; text-align: left; }\r\n\r\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){float: right; width:30% !important; text-align: right; word-wrap: break-word;  }\r\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(2){float: left; width:70% !important; text-align: left; word-wrap: break-word; }\r\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1) span{font-family: oxygenbold; color:rgb(255,102,0) !important; font-size: 14px; }\r\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(2) span{font-family: oxygenbold; color:rgb(94,94,94);  font-size: 14px !important ;}\r\n.page_2.result-fixed .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(2){font-size: 14px ;}\r\n\r\n.page_2 .result-temp2-default-section.result-full-section .small-top-sec p:first-child{float: left; width:100%; text-align: center !important; margin-bottom:20px;}\r\n.page_2 .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(2){float: left; width:100%; text-align: center !important;font-family: oxygenbold; color:rgb(94,94,94); text-transform: uppercase; }\r\n.page_2 .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(3){ display:block;float: left; width:100%; text-align: center; font-family: oxygenregular; color: #999;}\r\n\r\n.page_2 .disc-set{color: #999;font-size: 12px;text-align: center; margin-bottom:10px;    float: left;}\r\n\r\n/*.page_2 .result-temp2-default-section div div:nth-child(1){\r\n    float: right;\r\n}\r\n.page_2 .result-temp2-default-section div div:nth-child(2){\r\n    float: left;\r\n}*/\r\n.temp2-bg{\r\n    background: url(\"./app/site/templates/templateAll/template2/templatesHtml/assets/images/temp-bg1.jpg\") no-repeat center center fixed;\r\n    background-size: cover;\r\n    float: left;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n}\r\n\r\n\r\n/*Result Section Style end*/\r\n input[type=range] { -webkit-appearance: none;border:none; width: 100%;}\r\n  input[type=range]::-webkit-slider-runnable-track { width: 100%; height: 5px; background: #ddd; border: none;border-radius: 3px;}\r\n  input[type=range]::-webkit-slider-thumb {-webkit-appearance: none;border: none;height: 16px; width: 16px;border-radius: 50%;background: #ff6600;margin-top: -4px; }  \r\n  .abc{ display:none; background:#666; width:20px; height:20px;}\r\n  input[type=range]::-webkit-slider-thumb:hover{background:#ccc;}\r\n  input[type=range]:focus {outline: none;}\r\n  input[type=range]:focus::-webkit-slider-runnable-track {background: #ccc;}\r\n  input[type=range]::-moz-range-track { width: 100%; height: 5px; background: #ddd; border: none;border-radius: 3px;}\r\n  input[type=range]::-moz-range-thumb { border: none; height: 16px;width: 16px; border-radius: 50%;background: #ff6600; }\r\n\r\n  /*hide the outline behind the border*/\r\n  input[type=range]:-moz-focusring{ outline: 1px solid white; outline-offset: -1px;}\r\n  input[type=range]::-ms-track { width: 100%;  height: 5px; background: transparent; border-color: transparent; border-width: 6px 0; color: transparent;}\r\n  input[type=range]::-ms-fill-lower { background: #777; border-radius: 10px;}\r\n  input[type=range]::-ms-fill-upper { background: #ddd; border-radius: 10px;}\r\n  input[type=range]::-ms-thumb {border: none; height: 16px; width: 16px;border-radius: 50%;background: #ff6600;}\r\n  input[type=range]:focus::-ms-fill-lower { background: #888; }\r\n  input[type=range]:focus::-ms-fill-upper { background: #ccc;}\r\n\r\n  .range-slider .slider-min{ width: 2%; float: left; padding-top:8px; color:#ff6600; }\r\n  .range-slider .well1{ width: 100%; float: left; }\r\n  .range-slider .slider-max{ width: 2%; float: right; padding-top:8px; color:#ff6600; }\r\n  .tip { position: absolute;border: 1px solid black;padding: 4px;}\r\n\r\n\r\n\r\n.question-section .input-section .input-outer span  {float: left; width: 100%;text-align: left; color: #f44336;font-size: 12px;z-index: 1; margin-top: -12px;  margin-bottom: 8px;}\r\n.landing-page-mid .input-section .input-outer span  {float: left; width: 100%;text-align: left; color: #f44336;font-size: 12px;z-index: 1;  margin-bottom: 8px; padding-left:23px;}\r\n.dropdown-set{ float: left; width:100%;}\r\n.slider-set{ float: left; width:100%; margin-top: 6px;}\r\n\r\n.range-slider .irs-slider {top: 29px;width: 20px; height: 20px;}\r\n.range-slider .irs-bar-edge {border: 1px solid #ff6600; border-right: 0; background: #ff6600;}\r\n.range-slider .irs-bar {border-top: 1px solid #ff6600;border-bottom: 1px solid #ff6600; background: #ff6600;}\r\n.range-slider .irs-single { background: #ff6600; font-family: montserratlight; border-radius:8px !important; padding: 1px 14px  !important;}\r\n.range-slider .irs-min, .irs-max{font-family: montserratregular; }\r\n\r\n\r\n.selectize-input{border:1px solid #d9dad3;padding:15px 15px 15px 15px;width:100%;display:inline-block;width:100%;overflow:hidden;position:relative;z-index:1;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:0px;font-family:montserratlight;font-size:14px;}\r\n.selectize-input .item{font-family:montserratlight;font-size:14px;}\r\n.selectize-dropdown .active{background-color:#ff6600;color:#ffffff; }\r\n.selectize-dropdown [data-selectable],.selectize-dropdown .optgroup-header{padding:15px;font-family:montserratlight;font-size:14px;}\r\n.selectize-dropdown [data-selectable]{cursor:pointer;overflow:hidden;}\r\n.selectize-control.single .selectize-input,.selectize-dropdown.single{border-color:#d9dad3; background: #ffffff !important;}\r\n.selectize-control.single .selectize-input{ background: #f7f7f7 !important; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;}\r\n.control-group{position:relative;font-family:montserratregular;}\r\n.select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#ff6600;bottom:18px}\r\n.selectize-dropdown-content{ max-height: auto!important; }\r\n\r\n\r\n\r\n.redo-link{position: absolute;top: 2.5%; right: 3%;}\r\n.redo-link ul li{float:left;display:inline-block;}\r\n.redo-link ul li:nth-child(1){display:none;}\r\n.redo-link ul li{float: left; display:inline-block; -webkit-border-radius: 28px;-moz-border-radius: 28px;border-radius: 28px;  padding:2px 6px; background: #ccc; }\r\n.redo-link ul li span{padding:2px 10px 0 10px; float: left; font-size: 20px;}\r\n.redo-link ul li a{float:left;display:inline-block;text-decoration:none;font-size:14px;}\r\n.redo-link ul li a .material-icons{font-size:14px!important;margin-top:4px;}\r\n.redo-link span i{font-size:16px;margin-left:6px;color:#6e6f71;}\r\n.redo-link span li{border-left:1px dotted #6e6f71;height:18px;margin-top:8px;margin-left:5px;margin-right:5px;}\r\n\r\n.checkbox-outer.active .control {display: block; position: relative; cursor: pointer; font-size: 18px; font-weight: 500; color:#fff; background: #ff6600; border-radius: 25px; }\r\n.checkbox-outer.active .control i{ color:#fff;}\r\n\r\n.landing-page-mid .input-section{width:72%;margin:30px auto 0 auto;}\r\n.landing-page-mid .input-section input{width:43%!important;margin:8px;border:2px solid #c4c4c6!important;color:#fefeff;font-family:montserratregular;font-size:14px!important;}\r\n.landing-page-mid .input-section::-webkit-input-placeholder{color:#c4c4c6;}\r\n.landing-page-mid .cta-outer{width:100vw;display:table-cell;vertical-align:middle;height:20vh;text-align:center;}\r\n.landing-page-mid .input-section .input-outer{float:left;width:49%;position:relative;}\r\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){width:100%;}\r\n.landing-page-mid .input-section input{float:left;width:96%!important;margin: 10px 28px !important; padding:14px; background:none !important; border:2px solid #c4c4c6!important;color:#fefeff;font-family:montserratregular;font-size:14px!important;}\r\n.landing-page-mid .input-section .input-outer span{float:left;width:100%;position:absolute;top:64px;left:27px;text-align:left;padding-left:2px;color:#f44336;font-size:9px;}\r\n.landing-page-mid .container-temp{width:100%; margin:0 auto;display:inline-block;}\r\n.container-temp{width:98%;margin:0 auto;display:inline-block;}\r\n\r\n\r\n.landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(255, 255, 255);font-family: oxygenbold; float:left; width:100%; text-align: center; margin-bottom: 20px;}\r\n.landing-page-mid .sub-heading{ font-size: 2vmin; line-height:1em !important; color: rgba(255, 255, 255, 0.8);font-family: oxygenregular; padding-top:30px; padding-bottom:30px; float:left; width:100%; text-align: center;}\r\n\r\n\r\n\r\n/*.cp1 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(247, 218, 100);font-family: montserratbold;}\r\n.cp1 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1em !important; color: rgba(247, 218, 100, 0.8); font-family: montserratregular;}\r\n*/\r\n\r\n/*theme color 1*/\r\n.tc1 .check-comp .control input:checked ~ .control__indicator{background:#61bd6d;} \r\n.tc1 .check-comp .control__indicator.check-set{border:2px solid #61bd6d;}\r\n.tc1 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#61bd6d;}\r\n.tc1 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#61bd6d;}\r\n.tc1 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #61bd6d;}\r\n.tc1 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc1 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc1 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:5px;color:#61bd6d;}\r\n.tc1 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc1 .check-comp .control--radio .control__indicator.icon-set i{color:#61bd6d;}\r\n.tc1 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#61bd6d;border:3px solid #fff;}\r\n.tc1 .range-slider .irs-bar-edge {border: 1px solid #55a65f; border-right: 0; background: #61bd6d;}\r\n.tc1 .range-slider .irs-bar {border-top: 1px solid #55a65f;border-bottom: 1px solid #55a65f; background: #61bd6d;}\r\n.tc1 .range-slider .irs-single { background: #61bd6d; font-family: montserratregular;}\r\n.tc1 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc1 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\r\n.tc1 .select .selectize-dropdown .active{background-color:#61bd6d;color:#ffffff;}\r\n.tc1 .check-comp .control {  color: #61bd6d;}\r\n.tc1 .check-comp .checkbox-outer.active label{background: #61bd6d; color: #fff;}\r\n.tc1 .check-comp .checkbox-outer label:hover {background: #61bd6d; color: #fff;}\r\n.questions .question-section-outer .question-number.tc1 {width: 30px; height: 30px; background: #61bd6d; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n.question-components.tc1{ border-left: 3px solid rgba(97,189,109,0.15);}\r\n\r\n/*theme color 1 end*/\r\n\r\n/*theme color 2*/\r\n.tc2 .check-comp .control input:checked ~ .control__indicator{background:#1abc9c;} \r\n.tc2 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#1abc9c;border:3px solid #fff;}\r\n.tc2 .check-comp .control__indicator.check-set{border:2px solid #1abc9c;}\r\n.tc2 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#1abc9c;}\r\n.tc2 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#1abc9c;}\r\n.tc2 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #1abc9c;}\r\n.tc2 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc2 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc2 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#1abc9c;}\r\n.tc2 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc2 .check-comp .control--radio .control__indicator.icon-set i{color:#1abc9c;}\r\n.tc2 .range-slider .irs-bar-edge {border: 1px solid #18ab8e; border-right: 0; background: #1abc9c;}\r\n.tc2 .range-slider .irs-bar {border-top: 1px solid #18ab8e;border-bottom: 1px solid #18ab8e; background: #1abc9c;}\r\n.tc2 .range-slider .irs-single { background: #1abc9c; font-family: montserratregular;}\r\n.tc2 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc2 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#1abc9c;bottom:18px}\r\n.tc2 .select .selectize-dropdown .active{background-color:#1abc9c;color:#ffffff;}\r\n.tc2 .check-comp .control {  color: #1abc9c;}\r\n.tc2 .check-comp .checkbox-outer.active label{background: #1abc9c; color: #fff;}\r\n.tc2 .check-comp .checkbox-outer label:hover {background: #1abc9c; color: #fff;}\r\n.questions .question-section-outer .question-number.tc2 {width: 30px; height: 30px; background: #1abc9c; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc2{ border-left: 3px solid rgba(97,188,156,0.15);}\r\n/*theme color 2 end*/\r\n\r\n/*theme color 3*/\r\n.tc3 .range-slider .irs-bar-edge {border: 1px solid #4fa1c4; border-right: 0; background: #54acd2;}\r\n.tc3 .range-slider .irs-bar {border-top: 1px solid #4fa1c4;border-bottom: 1px solid #4fa1c4; background: #54acd2;}\r\n.tc3 .range-slider .irs-single { background: #54acd2; font-family: montserratregular;}\r\n.tc3 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc3 .check-comp .control input:checked ~ .control__indicator{background:#54acd2;} \r\n.tc3 .check-comp .control__indicator.check-set{border:2px solid #54acd2;}\r\n.tc3 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#54acd2;}\r\n.tc3 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#54acd2;}\r\n.tc3 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #54acd2;}\r\n.tc3 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc3 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc3 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#54acd2;}\r\n.tc3 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc3 .check-comp .control--radio .control__indicator.icon-set i{color:#54acd2;}\r\n.tc3 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#54acd2;border:3px solid #fff;}\r\n.tc3 .select .selectize-dropdown .active{background-color:#54acd2;color:#ffffff;}\r\n.tc3 .check-comp .control {  color: #54acd2;}\r\n.tc3 .check-comp .checkbox-outer.active label{background: #54acd2; color: #fff;}\r\n.tc3 .check-comp .checkbox-outer label:hover {background: #54acd2; color: #fff;}\r\n.tc3 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#54acd2;bottom:18px}\r\n.questions .question-section-outer .question-number.tc3 {width: 30px; height: 30px; background: #54acd2; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc3{ border-left: 3px solid rgba(84,172,210,0.15);}\r\n\r\n/*theme color 3 end*/\r\n\r\n/*theme color 4*/\r\n.tc4 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#2c82c9;border:3px solid #fff;}\r\n.tc4 .range-slider .irs-bar-edge {border: 1px solid #2879bb; border-right: 0; background: #2c82c9;}\r\n.tc4 .range-slider .irs-bar {border-top: 1px solid #2879bb;border-bottom: 1px solid #2879bb; background: #2c82c9;}\r\n.tc4 .range-slider .irs-single { background: #2c82c9; font-family: montserratregular;}\r\n.tc4 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc4 .check-comp .control input:checked ~ .control__indicator{background:#2c82c9;} \r\n.tc4 .check-comp .control__indicator.check-set{border:2px solid #2c82c9;}\r\n.tc4 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#2c82c9;}\r\n.tc4 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#2c82c9;}\r\n.tc4 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #2c82c9;}\r\n.tc4 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc4 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc4 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#2c82c9;}\r\n.tc4 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc4 .check-comp .control--radio .control__indicator.icon-set i{color:#2c82c9;}\r\n.tc4 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#2c82c9;border:3px solid #fff;}\r\n.tc4 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#2c82c9;bottom:18px}\r\n.tc4 .select .selectize-dropdown .active{background-color:#2c82c9;color:#ffffff;}\r\n.tc4 .check-comp .control {  color: #2c82c9;}\r\n.tc4 .check-comp .checkbox-outer.active label{background: #2c82c9; color: #fff;}\r\n.tc4 .check-comp .checkbox-outer label:hover {background: #2c82c9; color: #fff;}\r\n.questions .question-section-outer .question-number.tc4 {width: 30px; height: 30px; background: #2c82c9; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc4{ border-left: 3px solid rgba(44,130,201,0.15);}\r\n .tc4 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#2c82c9;bottom:18px}\r\n\r\n/*theme color 4 end*/\r\n\r\n/*theme color 5*/\r\n.tc5 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#9365b8;border:3px solid #fff;}\r\n.tc5 .range-slider .irs-bar-edge {border: 1px solid #865ca8; border-right: 0; background: #9365b8;}\r\n.tc5 .range-slider .irs-bar {border-top: 1px solid #865ca8;border-bottom: 1px solid #865ca8; background: #9365b8;}\r\n.tc5 .range-slider .irs-single { background: #9365b8; font-family: montserratregular;}\r\n.tc5 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc5 .check-comp .control input:checked ~ .control__indicator{background:#9365b8;} \r\n.tc5 .check-comp .control__indicator.check-set{border:2px solid #9365b8;}\r\n.tc5 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#9365b8;}\r\n.tc5 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#9365b8;}\r\n.tc5 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #9365b8;}\r\n.tc5 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc5 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc5 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#9365b8;}\r\n.tc5 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc5 .check-comp .control--radio .control__indicator.icon-set i{color:#9365b8;}\r\n.tc5 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#9365b8;border:3px solid #fff;}\r\n.tc5 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#9365b8;bottom:18px}\r\n.tc5 .select .selectize-dropdown .active{background-color:#9365b8;color:#ffffff;}\r\n.tc5 .check-comp .control {  color: #9365b8;}\r\n.tc5 .check-comp .checkbox-outer.active label{background: #9365b8; color: #fff;}\r\n.tc5 .check-comp .checkbox-outer label:hover {background: #9365b8; color: #fff;}\r\n.questions .question-section-outer .question-number.tc5 {width: 30px; height: 30px; background: #9365b8; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc5{ border-left: 3px solid rgba(147,101,184,0.15);}\r\n .tc5 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#9365b8;bottom:18px}\r\n/*theme color 5 end*/\r\n\r\n/*theme color 6*/\r\n.tc6 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#475577;border:3px solid #fff;}\r\n.tc6 .range-slider .irs-bar-edge {border: 1px solid #3f4c6a; border-right: 0; background: #475577;}\r\n.tc6 .range-slider .irs-bar {border-top: 1px solid #3f4c6a;border-bottom: 1px solid #3f4c6a; background: #475577;}\r\n.tc6 .range-slider .irs-single { background: #475577; font-family: montserratregular;}\r\n.tc6 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc6 .check-comp .control input:checked ~ .control__indicator{background:#475577;} \r\n.tc6 .check-comp .control__indicator.check-set{border:2px solid #475577;}\r\n.tc6 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#475577;}\r\n.tc6 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#475577;}\r\n.tc6 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #475577;}\r\n.tc6 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc6 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc6 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#475577;}\r\n.tc6 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc6 .check-comp .control--radio .control__indicator.icon-set i{color:#475577;}\r\n.tc6 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#475577;border:3px solid #fff;}\r\n.tc6 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#475577;bottom:18px}\r\n.tc6 .select .selectize-dropdown .active{background-color:#475577;color:#ffffff;}\r\n.tc6 .check-comp .control {  color: #475577;}\r\n.tc6 .check-comp .checkbox-outer.active label{background: #475577; color: #fff;}\r\n.tc6 .check-comp .checkbox-outer label:hover {background: #475577; color: #fff;}\r\n.questions .question-section-outer .question-number.tc6 {width: 30px; height: 30px; background: #9365b8; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc6{ border-left: 3px solid rgba(147,101,184,0.15);}\r\n .tc6 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#9365b8;bottom:18px}\r\n/*theme color 6 end*/\r\n\r\n/*theme color 7*/\r\n.tc7 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#cccccc;border:3px solid #fff;}\r\n.tc7 .range-slider .irs-bar-edge {border: 1px solid #bcbbbb; border-right: 0; background: #cccccc;}\r\n.tc7 .range-slider .irs-bar {border-top: 1px solid #bcbbbb;border-bottom: 1px solid #bcbbbb; background: #cccccc;}\r\n.tc7 .range-slider .irs-single { background: #cccccc; font-family: montserratregular;}\r\n.tc7 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc7 .check-comp .control input:checked ~ .control__indicator{background:#cccccc;} \r\n.tc7 .check-comp .control__indicator.check-set{border:2px solid #cccccc;}\r\n.tc7 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#cccccc;}\r\n.tc7 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#cccccc;}\r\n.tc7 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #cccccc;}\r\n.tc7 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc7 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc7 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#cccccc;}\r\n.tc7 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc7 .check-comp .control--radio .control__indicator.icon-set i{color:#cccccc;}\r\n.tc7 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#cccccc;border:3px solid #fff;}\r\n.tc7 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#cccccc;bottom:18px}\r\n.tc7 .select .selectize-dropdown .active{background-color:#cccccc;color:#ffffff;}\r\n.tc7 .check-comp .control {  color: #cccccc;}\r\n.tc7 .check-comp .checkbox-outer.active label{background: #cccccc; color: #fff;}\r\n.tc7 .check-comp .checkbox-outer label:hover {background: #cccccc; color: #fff;}\r\n.questions .question-section-outer .question-number.tc7 {width: 30px; height: 30px; background: #cccccc; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc7{ border-left: 3px solid rgba(204,204,204,0.15);}\r\n .tc7 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#cccccc;bottom:18px}\r\n/*theme color 7 end*/\r\n\r\n/*theme color 8*/\r\n.tc8 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#41a85f;border:3px solid #fff;}\r\n.tc8 .range-slider .irs-bar-edge {border: 1px solid #3b9956; border-right: 0; background: #41a85f;}\r\n.tc8 .range-slider .irs-bar {border-top: 1px solid #3b9956;border-bottom: 1px solid #3b9956; background: #41a85f;}\r\n.tc8 .range-slider .irs-single { background: #41a85f; font-family: montserratregular;}\r\n.tc8 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc8 .check-comp .control input:checked ~ .control__indicator{background:#41a85f;} \r\n.tc8 .check-comp .control__indicator.check-set{border:2px solid #41a85f;}\r\n.tc8 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#41a85f;}\r\n.tc8 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#41a85f;}\r\n.tc8 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #41a85f;}\r\n.tc8 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc8 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc8 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#41a85f;}\r\n.tc8 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc8 .check-comp .control--radio .control__indicator.icon-set i{color:#41a85f;}\r\n.tc8 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#41a85f;border:3px solid #fff;}\r\n.tc8 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#41a85f;bottom:18px}\r\n.tc8 .select .selectize-dropdown .active{background-color:#41a85f;color:#ffffff;}\r\n.tc8 .check-comp .control {  color: #41a85f;}\r\n.tc8 .check-comp .checkbox-outer.active label{background: #41a85f; color: #fff;}\r\n.tc8 .check-comp .checkbox-outer label:hover {background: #41a85f; color: #fff;}\r\n.questions .question-section-outer .question-number.tc8 {width: 30px; height: 30px; background: #41a85f; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc8{ border-left: 3px solid rgba(65,168,95,0.15);}\r\n .tc8 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#41a85f;bottom:18px}\r\n/*theme color 8 end*/\r\n\r\n\r\n/*theme color 9*/\r\n.tc9 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#00a885;border:3px solid #fff;}\r\n.tc9 .range-slider .irs-bar-edge {border: 1px solid #019778; border-right: 0; background: #00a885;}\r\n.tc9 .range-slider .irs-bar {border-top: 1px solid #019778;border-bottom: 1px solid #019778; background: #00a885;}\r\n.tc9 .range-slider .irs-single { background: #00a885; font-family: montserratregular;}\r\n.tc9 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc9 .check-comp .control input:checked ~ .control__indicator{background:#00a885;} \r\n.tc9 .check-comp .control__indicator.check-set{border:2px solid #00a885;}\r\n.tc9 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#00a885;}\r\n.tc9 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#00a885;}\r\n.tc9 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #00a885;}\r\n.tc9 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc9 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc9 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#00a885;}\r\n.tc9 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc9 .check-comp .control--radio .control__indicator.icon-set i{color:#00a885;}\r\n.tc9 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#00a885;border:3px solid #fff;}\r\n.tc9 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#00a885;bottom:18px}\r\n.tc9 .select .selectize-dropdown .active{background-color:#00a885;color:#ffffff;}\r\n.tc9 .check-comp .control {  color: #00a885;}\r\n.tc9 .check-comp .checkbox-outer.active label{background: #00a885; color: #fff;}\r\n.tc9 .check-comp .checkbox-outer label:hover {background: #00a885; color: #fff;}\r\n.questions .question-section-outer .question-number.tc9 {width: 30px; height: 30px; background: #00a885; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc9{ border-left: 3px solid rgba(0,168,133,0.15);}\r\n .tc9 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#00a885;bottom:18px}\r\n/*theme color 9 end*/\r\n\r\n/*theme color 10*/\r\n.tc10 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#3d8eb9;border:3px solid #fff;}\r\n.tc10 .range-slider .irs-bar-edge {border: 1px solid #3984ac; border-right: 0; background: #3d8eb9;}\r\n.tc10 .range-slider .irs-bar {border-top: 1px solid #3984ac;border-bottom: 1px solid #3984ac; background: #3d8eb9;}\r\n.tc10 .range-slider .irs-single { background: #3d8eb9; font-family: montserratregular;}\r\n.tc10 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc10 .check-comp .control input:checked ~ .control__indicator{background:#3d8eb9;} \r\n.tc10 .check-comp .control__indicator.check-set{border:2px solid #3d8eb9;}\r\n.tc10 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#3d8eb9;}\r\n.tc10 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#3d8eb9;}\r\n.tc10 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #3d8eb9;}\r\n.tc10 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc10 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc10 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#3d8eb9;}\r\n.tc10 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc10 .check-comp .control--radio .control__indicator.icon-set i{color:#3d8eb9;}\r\n.tc10 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#3d8eb9;border:3px solid #fff;}\r\n.tc10 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#3d8eb9;bottom:18px}\r\n.tc10 .select .selectize-dropdown .active{background-color:#3d8eb9;color:#ffffff;}\r\n.tc10 .check-comp .control {  color: #3d8eb9;}\r\n.tc10 .check-comp .checkbox-outer.active label{background: #3d8eb9; color: #fff;}\r\n.tc10 .check-comp .checkbox-outer label:hover {background: #3d8eb9; color: #fff;}\r\n.questions .question-section-outer .question-number.tc10 {width: 30px; height: 30px; background: #3d8eb9; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc10{ border-left: 3px solid rgba(61,142,185,0.15);}\r\n .tc10 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#3d8eb9;bottom:18px}\r\n/*theme color 10 end*/\r\n\r\n\r\n/*theme color 11*/\r\n.tc11 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#2969b0;border:3px solid #fff;}\r\n.tc11 .range-slider .irs-bar-edge {border: 1px solid #255fa0; border-right: 0; background: #2969b0;}\r\n.tc11 .range-slider .irs-bar {border-top: 1px solid #255fa0;border-bottom: 1px solid #255fa0; background: #2969b0;}\r\n.tc11 .range-slider .irs-single { background: #2969b0; font-family: montserratregular;}\r\n.tc11 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc11 .check-comp .control input:checked ~ .control__indicator{background:#2969b0;} \r\n.tc11 .check-comp .control__indicator.check-set{border:2px solid #2969b0;}\r\n.tc11 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#2969b0;}\r\n.tc11 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#2969b0;}\r\n.tc11 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #2969b0;}\r\n.tc11 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc11 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc11 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#2969b0;}\r\n.tc11 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc11 .check-comp .control--radio .control__indicator.icon-set i{color:#2969b0;}\r\n.tc11 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#2969b0;border:3px solid #fff;}\r\n.tc11 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#2969b0;bottom:18px}\r\n.tc11 .select .selectize-dropdown .active{background-color:#2969b0;color:#ffffff;}\r\n.tc11 .check-comp .control {  color: #2969b0;}\r\n.tc11 .check-comp .checkbox-outer.active label{background: #2969b0; color: #fff;}\r\n.tc11 .check-comp .checkbox-outer label:hover {background: #2969b0; color: #fff;}\r\n.questions .question-section-outer .question-number.tc11 {width: 30px; height: 30px; background: #2969b0; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc11{ border-left: 3px solid rgba(41,105,176,0.15);}\r\n .tc11 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#2969b0;bottom:18px}\r\n/*theme color 11 end*/\r\n\r\n\r\n/*theme color 12*/\r\n.tc12 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#553982;border:3px solid #fff;}\r\n.tc12 .range-slider .irs-bar-edge {border: 1px solid #4a3272; border-right: 0; background: #553982;}\r\n.tc12 .range-slider .irs-bar {border-top: 1px solid #4a3272;border-bottom: 1px solid #4a3272; background: #553982;}\r\n.tc12 .range-slider .irs-single { background: #553982; font-family: montserratregular;}\r\n.tc12 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc12 .check-comp .control input:checked ~ .control__indicator{background:#553982;} \r\n.tc12 .check-comp .control__indicator.check-set{border:2px solid #553982;}\r\n.tc12 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#553982;}\r\n.tc12 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#553982;}\r\n.tc12 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #553982;}\r\n.tc12 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc12 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc12 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#553982;}\r\n.tc12 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc12 .check-comp .control--radio .control__indicator.icon-set i{color:#553982;}\r\n.tc12 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#553982;border:3px solid #fff;}\r\n.tc12 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#553982;bottom:18px}\r\n.tc12 .select .selectize-dropdown .active{background-color:#553982;color:#ffffff;}\r\n.tc12 .check-comp .control {  color: #553982;}\r\n.tc12 .check-comp .checkbox-outer.active label{background: #553982; color: #fff;}\r\n.tc12 .check-comp .checkbox-outer label:hover {background: #553982; color: #fff;}\r\n.questions .question-section-outer .question-number.tc12 {width: 30px; height: 30px; background: #553982; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc12{ border-left: 3px solid rgba(85,57,130,0.15);}\r\n .tc12 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#553982;bottom:18px}\r\n/*theme color 12 end*/\r\n\r\n\r\n/*theme color 13*/\r\n.tc13 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#28324e;border:3px solid #fff;}\r\n.tc13 .range-slider .irs-bar-edge {border: 1px solid #212a41; border-right: 0; background: #28324e;}\r\n.tc13 .range-slider .irs-bar {border-top: 1px solid #212a41;border-bottom: 1px solid #212a41; background: #28324e;}\r\n.tc13 .range-slider .irs-single { background: #28324e; font-family: montserratregular;}\r\n.tc13 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc13 .check-comp .control input:checked ~ .control__indicator{background:#28324e;} \r\n.tc13 .check-comp .control__indicator.check-set{border:2px solid #28324e;}\r\n.tc13 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#28324e;}\r\n.tc13 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#28324e;}\r\n.tc13 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #28324e;}\r\n.tc13 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc13 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc13 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#28324e;}\r\n.tc13 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc13 .check-comp .control--radio .control__indicator.icon-set i{color:#28324e;}\r\n.tc13 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#28324e;border:3px solid #fff;}\r\n.tc13 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#28324e;bottom:18px}\r\n.tc13 .select .selectize-dropdown .active{background-color:#28324e;color:#ffffff;}\r\n.tc13 .check-comp .control {  color: #28324e;}\r\n.tc13 .check-comp .checkbox-outer.active label{background: #28324e; color: #fff;}\r\n.tc13 .check-comp .checkbox-outer label:hover {background: #28324e; color: #fff;}\r\n.questions .question-section-outer .question-number.tc13 {width: 30px; height: 30px; background: #28324e; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc13{ border-left: 3px solid rgba(40,50,78,0.15);}\r\n .tc13 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#28324e;bottom:18px}\r\n/*theme color 13 end*/\r\n\r\n\r\n/*theme color 14*/\r\n.tc14 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#000000;border:3px solid #fff;}\r\n.tc14 .range-slider .irs-bar-edge {border: 1px solid #000000; border-right: 0; background: #000000;}\r\n.tc14 .range-slider .irs-bar {border-top: 1px solid #000000;border-bottom: 1px solid #000000; background: #000000;}\r\n.tc14 .range-slider .irs-single { background: #000000; font-family: montserratregular;}\r\n.tc14 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc14 .check-comp .control input:checked ~ .control__indicator{background:#000000;} \r\n.tc14 .check-comp .control__indicator.check-set{border:2px solid #000000;}\r\n.tc14 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#000000;}\r\n.tc14 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#000000;}\r\n.tc14 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #000000;}\r\n.tc14 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc14 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc14 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#000000;}\r\n.tc14 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc14 .check-comp .control--radio .control__indicator.icon-set i{color:#000000;}\r\n.tc14 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#000000;border:3px solid #fff;}\r\n.tc14 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#000000;bottom:18px}\r\n.tc14 .select .selectize-dropdown .active{background-color:#000000;color:#ffffff;}\r\n.tc14 .check-comp .control {  color: #000000;}\r\n.tc14 .check-comp .checkbox-outer.active label{background: #000000; color: #fff;}\r\n.tc14 .check-comp .checkbox-outer label:hover {background: #000000; color: #fff;}\r\n.questions .question-section-outer .question-number.tc14 {width: 30px; height: 30px; background: #000000; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc14{ border-left: 3px solid rgba(0,0,0,0.15);}\r\n .tc14 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#000000;bottom:18px}\r\n/*theme color 14 end*/\r\n\r\n/*theme color 15*/\r\n.tc15 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f7da64;border:3px solid #fff;}\r\n.tc15 .range-slider .irs-bar-edge {border: 1px solid #e7cc5d; border-right: 0; background: #f7da64;}\r\n.tc15 .range-slider .irs-bar {border-top: 1px solid #e7cc5d;border-bottom: 1px solid #e7cc5d; background: #f7da64;}\r\n.tc15 .range-slider .irs-single { background: #f7da64; font-family: montserratregular;}\r\n.tc15 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc15 .check-comp .control input:checked ~ .control__indicator{background:#f7da64;} \r\n.tc15 .check-comp .control__indicator.check-set{border:2px solid #f7da64;}\r\n.tc15 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#f7da64;}\r\n.tc15 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#f7da64;}\r\n.tc15 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #f7da64;}\r\n.tc15 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc15 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc15 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#f7da64;}\r\n.tc15 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc15 .check-comp .control--radio .control__indicator.icon-set i{color:#f7da64;}\r\n.tc15 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f7da64;border:3px solid #fff;}\r\n.tc15 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#f7da64;bottom:18px}\r\n.tc15 .select .selectize-dropdown .active{background-color:#f7da64;color:#ffffff;}\r\n.tc15 .check-comp .control {  color: #f7da64;}\r\n.tc15 .check-comp .checkbox-outer.active label{background: #f7da64; color: #fff;}\r\n.tc15 .check-comp .checkbox-outer label:hover {background: #f7da64; color: #fff;}\r\n.questions .question-section-outer .question-number.tc15 {width: 30px; height: 30px; background: #f7da64; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc15{ border-left: 3px solid rgba(0,0,0,0.15);}\r\n .tc15 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#f7da64;bottom:18px}\r\n/*theme color 15 end*/\r\n\r\n\r\n/*theme color 16*/\r\n.tc16 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#fba026;border:3px solid #fff;}\r\n.tc16 .range-slider .irs-bar-edge {border: 1px solid #ec9724; border-right: 0; background: #fba026;}\r\n.tc16 .range-slider .irs-bar {border-top: 1px solid #ec9724;border-bottom: 1px solid #ec9724; background: #fba026;}\r\n.tc16 .range-slider .irs-single { background: #fba026; font-family: montserratregular;}\r\n.tc16 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc16 .check-comp .control input:checked ~ .control__indicator{background:#fba026;} \r\n.tc16 .check-comp .control__indicator.check-set{border:2px solid #fba026;}\r\n.tc16 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#fba026;}\r\n.tc16 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#fba026;}\r\n.tc16 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #fba026;}\r\n.tc16 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc16 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc16 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#fba026;}\r\n.tc16 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc16 .check-comp .control--radio .control__indicator.icon-set i{color:#fba026;}\r\n.tc16 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#fba026;border:3px solid #fff;}\r\n.tc16 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#fba026;bottom:18px}\r\n.tc16 .select .selectize-dropdown .active{background-color:#fba026;color:#ffffff;}\r\n.tc16 .check-comp .control {  color: #fba026;}\r\n.tc16 .check-comp .checkbox-outer.active label{background: #fba026; color: #fff;}\r\n.tc16 .check-comp .checkbox-outer label:hover {background: #fba026; color: #fff;}\r\n.questions .question-section-outer .question-number.tc16 {width: 30px; height: 30px; background: #fba026; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc16{ border-left: 3px solid rgba(251,160,38,0.15);}\r\n .tc16 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#fba026;bottom:18px}\r\n/*theme color 16 end*/\r\n\r\n\r\n/*theme color 17*/\r\n.tc17 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#eb6b56;border:3px solid #fff;}\r\n.tc17 .range-slider .irs-bar-edge {border: 1px solid #de6652; border-right: 0; background: #eb6b56;}\r\n.tc17 .range-slider .irs-bar {border-top: 1px solid #de6652;border-bottom: 1px solid #de6652; background: #eb6b56;}\r\n.tc17 .range-slider .irs-single { background: #eb6b56; font-family: montserratregular;}\r\n.tc17 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc17 .check-comp .control input:checked ~ .control__indicator{background:#eb6b56;} \r\n.tc17 .check-comp .control__indicator.check-set{border:2px solid #eb6b56;}\r\n.tc17 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#eb6b56;}\r\n.tc17 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#eb6b56;}\r\n.tc17 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #eb6b56;}\r\n.tc17 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc17 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc17 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#eb6b56;}\r\n.tc17 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc17 .check-comp .control--radio .control__indicator.icon-set i{color:#eb6b56;}\r\n.tc17 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#eb6b56;border:3px solid #fff;}\r\n.tc17 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#eb6b56;bottom:18px}\r\n.tc17 .select .selectize-dropdown .active{background-color:#eb6b56;color:#ffffff;}\r\n.tc17 .check-comp .control {  color: #eb6b56;}\r\n.tc17 .check-comp .checkbox-outer.active label{background: #eb6b56; color: #fff;}\r\n.tc17 .check-comp .checkbox-outer label:hover {background: #eb6b56; color: #fff;}\r\n.questions .question-section-outer .question-number.tc17 {width: 30px; height: 30px; background: #eb6b56; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc17{ border-left: 3px solid rgba(235,107,86,0.15);}\r\n .tc17 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#eb6b56;bottom:18px}\r\n/*theme color 17 end*/\r\n\r\n\r\n/*theme color 18*/\r\n.tc18 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#e25041;border:3px solid #fff;}\r\n.tc18 .range-slider .irs-bar-edge {border: 1px solid #d24a3c; border-right: 0; background: #d24a3c;}\r\n.tc18 .range-slider .irs-bar {border-top: 1px solid #d24a3c;border-bottom: 1px solid #d24a3c; background: #e25041;}\r\n.tc18 .range-slider .irs-single { background: #e25041; font-family: montserratregular;}\r\n.tc18 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc18 .check-comp .control input:checked ~ .control__indicator{background:#e25041;} \r\n.tc18 .check-comp .control__indicator.check-set{border:2px solid #e25041;}\r\n.tc18 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#e25041;}\r\n.tc18 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#e25041;}\r\n.tc18 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #e25041;}\r\n.tc18 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc18 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc18 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#e25041;}\r\n.tc18 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc18 .check-comp .control--radio .control__indicator.icon-set i{color:#e25041;}\r\n.tc18 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#e25041;border:3px solid #fff;}\r\n.tc18 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#e25041;bottom:18px}\r\n.tc18 .select .selectize-dropdown .active{background-color:#e25041;color:#ffffff;}\r\n.tc18 .check-comp .control {  color: #e25041;}\r\n.tc18 .check-comp .checkbox-outer.active label{background: #e25041; color: #fff;}\r\n.tc18 .check-comp .checkbox-outer label:hover {background: #e25041; color: #fff;}\r\n.questions .question-section-outer .question-number.tc18 {width: 30px; height: 30px; background: #e25041; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc18{ border-left: 3px solid rgba(226,80,65,0.15);}\r\n .tc18 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#e25041;bottom:18px}\r\n/*theme color 18 end*/\r\n\r\n\r\n/*theme color 19*/\r\n.tc19 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#a38f84;border:3px solid #fff;}\r\n.tc19 .range-slider .irs-bar-edge {border: 1px solid #948278; border-right: 0; background: #a38f84;}\r\n.tc19 .range-slider .irs-bar {border-top: 1px solid #948278;border-bottom: 1px solid #948278; background: #a38f84;}\r\n.tc19 .range-slider .irs-single { background: #a38f84; font-family: montserratregular;}\r\n.tc19 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc19 .check-comp .control input:checked ~ .control__indicator{background:#a38f84;} \r\n.tc19 .check-comp .control__indicator.check-set{border:2px solid #a38f84;}\r\n.tc19 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#a38f84;}\r\n.tc19 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#a38f84;}\r\n.tc19 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #a38f84;}\r\n.tc19 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc19 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc19 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#a38f84;}\r\n.tc19 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc19 .check-comp .control--radio .control__indicator.icon-set i{color:#a38f84;}\r\n.tc19 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#a38f84;border:3px solid #fff;}\r\n.tc19 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#a38f84;bottom:18px}\r\n.tc19 .select .selectize-dropdown .active{background-color:#a38f84;color:#ffffff;}\r\n.tc19 .check-comp .control {  color: #a38f84;}\r\n.tc19 .check-comp .checkbox-outer.active label{background: #a38f84; color: #fff;}\r\n.tc19 .check-comp .checkbox-outer label:hover {background: #a38f84; color: #fff;}\r\n.questions .question-section-outer .question-number.tc19 {width: 30px; height: 30px; background: #a38f84; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc19{ border-left: 3px solid rgba(226,143,132,0.15);}\r\n .tc19 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#a38f84;bottom:18px}\r\n/*theme color 19 end*/\r\n\r\n\r\n/*theme color 20*/\r\n.tc20 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#efefef;border:3px solid #fff;}\r\n.tc20 .range-slider .irs-bar-edge {border: 1px solid #e0e0e0; border-right: 0; background: #efefef;}\r\n.tc20 .range-slider .irs-bar {border-top: 1px solid #e0e0e0;border-bottom: 1px solid #e0e0e0; background: #efefef;}\r\n.tc20 .range-slider .irs-single { background: #efefef; font-family: montserratregular;}\r\n.tc20 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc20 .check-comp .control input:checked ~ .control__indicator{background:#efefef;} \r\n.tc20 .check-comp .control__indicator.check-set{border:2px solid #efefef;}\r\n.tc20 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#efefef;}\r\n.tc20 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#efefef;}\r\n.tc20 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #efefef;}\r\n.tc20 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc20 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc20 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#efefef;}\r\n.tc20 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc20 .check-comp .control--radio .control__indicator.icon-set i{color:#efefef;}\r\n.tc20 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#efefef;border:3px solid #fff;}\r\n.tc20 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#efefef;bottom:18px}\r\n.tc20 .select .selectize-dropdown .active{background-color:#efefef;color:#ffffff;}\r\n.tc20 .check-comp .control {  color: #efefef;}\r\n.tc20 .check-comp .checkbox-outer.active label{background: #efefef; color: #fff;}\r\n.tc20 .check-comp .checkbox-outer label:hover {background: #efefef; color: #fff;}\r\n.questions .question-section-outer .question-number.tc20 {width: 30px; height: 30px; background: #efefef; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc20{ border-left: 3px solid rgba(239,239,239,0.15);}\r\n .tc20 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#efefef;bottom:18px}\r\n/*theme color 20 end*/\r\n\r\n\r\n/*theme color 21*/\r\n.tc21 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#ffffff;border:3px solid #fff;}\r\n.tc21 .range-slider .irs-bar-edge {border: 1px solid #efeeee; border-right: 0; background: #ffffff;}\r\n.tc21 .range-slider .irs-bar {border-top: 1px solid #efeeee;border-bottom: 1px solid #efeeee; background: #ffffff;}\r\n.tc21 .range-slider .irs-single { background: #ffffff; font-family: montserratregular;}\r\n.tc21 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc21 .check-comp .control input:checked ~ .control__indicator{background:#ffffff;} \r\n.tc21 .check-comp .control__indicator.check-set{border:2px solid #ffffff;}\r\n.tc21 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#ffffff;}\r\n.tc21 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#ffffff;}\r\n.tc21 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #ffffff;}\r\n.tc21 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc21 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc21 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#ffffff;}\r\n.tc21 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc21 .check-comp .control--radio .control__indicator.icon-set i{color:#ffffff;}\r\n.tc21 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#ffffff;border:3px solid #fff;}\r\n.tc21 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#000000;bottom:18px}\r\n.tc21 .select .selectize-dropdown .active{background-color:#ffffff;color:#000000;}\r\n.tc21 .check-comp .control {  color: #ffffff;}\r\n.tc21 .check-comp .checkbox-outer.active label{background: #ffffff; color: #fff;}\r\n.tc21 .check-comp .checkbox-outer label:hover {background: #ffffff; color: #fff;}\r\n.questions .question-section-outer .question-number.tc21 {width: 30px; height: 30px; background: #ffffff; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc21{ border-left: 3px solid rgba(255,255,255,0.15);}\r\n .tc21 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#ffffff;bottom:18px}\r\n/*theme color 21 end*/\r\n\r\n\r\n/*theme color 22*/\r\n.tc22 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#fac51c;border:3px solid #fff;}\r\n.tc22 .range-slider .irs-bar-edge {border: 1px solid #eab91c; border-right: 0; background: #fac51c;}\r\n.tc22 .range-slider .irs-bar {border-top: 1px solid #eab91c;border-bottom: 1px solid #eab91c; background: #fac51c;}\r\n.tc22 .range-slider .irs-single { background: #fac51c; font-family: montserratregular;}\r\n.tc22 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc22 .check-comp .control input:checked ~ .control__indicator{background:#fac51c;} \r\n.tc22 .check-comp .control__indicator.check-set{border:2px solid #fac51c;}\r\n.tc22 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#fac51c;}\r\n.tc22 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#fac51c;}\r\n.tc22 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #fac51c;}\r\n.tc22 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc22 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc22 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#fac51c;}\r\n.tc22 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc22 .check-comp .control--radio .control__indicator.icon-set i{color:#fac51c;}\r\n.tc22 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#fac51c;border:3px solid #fff;}\r\n.tc22 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#fac51c;bottom:18px}\r\n.tc22 .select .selectize-dropdown .active{background-color:#fac51c;color:#ffffff;}\r\n.tc22 .check-comp .control {  color: #fac51c;}\r\n.tc22 .check-comp .checkbox-outer.active label{background: #fac51c; color: #fff;}\r\n.tc22 .check-comp .checkbox-outer label:hover {background: #fac51c; color: #fff;}\r\n.questions .question-section-outer .question-number.tc22 {width: 30px; height: 30px; background: #fac51c; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc22{ border-left: 3px solid rgba(250,197,28,0.15);}\r\n .tc22 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#fac51c;bottom:18px}\r\n/*theme color 22 end*/\r\n\r\n\r\n/*theme color 23*/\r\n.tc23 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f37934;border:3px solid #fff;}\r\n.tc23 .range-slider .irs-bar-edge {border: 1px solid #e57231; border-right: 0; background: #f37934;}\r\n.tc23 .range-slider .irs-bar {border-top: 1px solid #e57231;border-bottom: 1px solid #e57231; background: #f37934;}\r\n.tc23 .range-slider .irs-single { background: #f37934; font-family: montserratregular;}\r\n.tc23 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc23 .check-comp .control input:checked ~ .control__indicator{background:#f37934;} \r\n.tc23 .check-comp .control__indicator.check-set{border:2px solid #f37934;}\r\n.tc23 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#f37934;}\r\n.tc23 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#f37934;}\r\n.tc23 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #f37934;}\r\n.tc23 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc23 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc23 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#f37934;}\r\n.tc23 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc23 .check-comp .control--radio .control__indicator.icon-set i{color:#f37934;}\r\n.tc23 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f37934;border:3px solid #fff;}\r\n.tc23 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#f37934;bottom:18px}\r\n.tc23 .select .selectize-dropdown .active{background-color:#f37934;color:#ffffff;}\r\n.tc23 .check-comp .control {  color: #f37934;}\r\n.tc23 .check-comp .checkbox-outer.active label{background: #f37934; color: #fff;}\r\n.tc23 .check-comp .checkbox-outer label:hover {background: #f37934; color: #fff;}\r\n.questions .question-section-outer .question-number.tc23 {width: 30px; height: 30px; background: #f37934; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc23{ border-left: 3px solid rgba(243,121,52,0.15);}\r\n .tc23 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#f37934;bottom:18px}\r\n/*theme color 23 end*/\r\n\r\n\r\n/*theme color 24*/\r\n.tc24 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#d14841;border:3px solid #fff;}\r\n.tc24 .range-slider .irs-bar-edge {border: 1px solid #c5443d; border-right: 0; background: #d14841;}\r\n.tc24 .range-slider .irs-bar {border-top: 1px solid #c5443d;border-bottom: 1px solid #c5443d; background: #d14841;}\r\n.tc24 .range-slider .irs-single { background: #d14841; font-family: montserratregular;}\r\n.tc24 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc24 .check-comp .control input:checked ~ .control__indicator{background:#d14841;} \r\n.tc24 .check-comp .control__indicator.check-set{border:2px solid #d14841;}\r\n.tc24 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#d14841;}\r\n.tc24 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#d14841;}\r\n.tc24 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #d14841;}\r\n.tc24 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc24 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc24 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#d14841;}\r\n.tc24 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc24 .check-comp .control--radio .control__indicator.icon-set i{color:#d14841;}\r\n.tc24 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#d14841;border:3px solid #fff;}\r\n.tc24 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#d14841;bottom:18px}\r\n.tc24 .select .selectize-dropdown .active{background-color:#d14841;color:#ffffff;}\r\n.tc24 .check-comp .control {  color: #d14841;}\r\n.tc24 .check-comp .checkbox-outer.active label{background: #d14841; color: #fff;}\r\n.tc24 .check-comp .checkbox-outer label:hover {background: #d14841; color: #fff;}\r\n.questions .question-section-outer .question-number.tc24 {width: 30px; height: 30px; background: #d14841; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc24{ border-left: 3px solid rgba(209,72,65,0.15);}\r\n .tc24 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#d14841;bottom:18px}\r\n/*theme color 24 end*/\r\n\r\n\r\n/*theme color 25*/\r\n.tc25 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#b8312f;border:3px solid #fff;}\r\n.tc25 .range-slider .irs-bar-edge {border: 1px solid #a92e2c; border-right: 0; background: #b8312f;}\r\n.tc25 .range-slider .irs-bar {border-top: 1px solid #a92e2c;border-bottom: 1px solid #a92e2c; background: #b8312f;}\r\n.tc25 .range-slider .irs-single { background: #b8312f; font-family: montserratregular;}\r\n.tc25 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc25 .check-comp .control input:checked ~ .control__indicator{background:#b8312f;} \r\n.tc25 .check-comp .control__indicator.check-set{border:2px solid #b8312f;}\r\n.tc25 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#b8312f;}\r\n.tc25 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#b8312f;}\r\n.tc25 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #b8312f;}\r\n.tc25 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc25 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc25 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#b8312f;}\r\n.tc25 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc25 .check-comp .control--radio .control__indicator.icon-set i{color:#b8312f;}\r\n.tc25 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#b8312f;border:3px solid #fff;}\r\n.tc25 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#b8312f;bottom:18px}\r\n.tc25 .select .selectize-dropdown .active{background-color:#b8312f;color:#ffffff;}\r\n.tc25 .check-comp .control {  color: #b8312f;}\r\n.tc25 .check-comp .checkbox-outer.active label{background: #b8312f; color: #fff;}\r\n.tc25 .check-comp .checkbox-outer label:hover {background: #b8312f; color: #fff;}\r\n.questions .question-section-outer .question-number.tc25 {width: 30px; height: 30px; background: #b8312f; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc25{ border-left: 3px solid rgba(184,49,47,0.15);}\r\n .tc25 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#b8312f;bottom:18px}\r\n/*theme color 25 end*/\r\n\r\n\r\n/*theme color 26*/ \r\n.tc26 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#7c706b;border:3px solid #fff;}\r\n.tc26 .range-slider .irs-bar-edge {border: 1px solid #716661; border-right: 0; background: #7c706b;}\r\n.tc26 .range-slider .irs-bar {border-top: 1px solid #716661;border-bottom: 1px solid #716661; background: #7c706b;}\r\n.tc26 .range-slider .irs-single { background: #7c706b; font-family: montserratregular;}\r\n.tc26 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc26 .check-comp .control input:checked ~ .control__indicator{background:#7c706b;} \r\n.tc26 .check-comp .control__indicator.check-set{border:2px solid #7c706b;}\r\n.tc26 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#7c706b;}\r\n.tc26 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#7c706b;}\r\n.tc26 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #7c706b;}\r\n.tc26 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc26 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc26 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#7c706b;}\r\n.tc26 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc26 .check-comp .control--radio .control__indicator.icon-set i{color:#7c706b;}\r\n.tc26 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#7c706b;border:3px solid #fff;}\r\n.tc26 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#7c706b;bottom:18px}\r\n.tc26 .select .selectize-dropdown .active{background-color:#7c706b;color:#ffffff;}\r\n.tc26 .check-comp .control {  color: #7c706b;}\r\n.tc26 .check-comp .checkbox-outer.active label{background: #7c706b; color: #fff;}\r\n.tc26 .check-comp .checkbox-outer label:hover {background: #7c706b; color: #fff;}\r\n.questions .question-section-outer .question-number.tc26 {width: 30px; height: 30px; background: #7c706b; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc26{ border-left: 3px solid rgba(124,112,107,0.15);}\r\n .tc26 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#7c706b;bottom:18px}\r\n/*theme color 26 end*/\r\n\r\n\r\n/*theme color 27*/\r\n.tc27 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#d1d5d8;border:3px solid #fff;}\r\n.tc27 .range-slider .irs-bar-edge {border: 1px solid #c4c8cb; border-right: 0; background: #d1d5d8;}\r\n.tc27 .range-slider .irs-bar {border-top: 1px solid #c4c8cb;border-bottom: 1px solid #c4c8cb; background: #d1d5d8;}\r\n.tc27 .range-slider .irs-single { background: #d1d5d8; font-family: montserratregular;}\r\n.tc27 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc27 .check-comp .control input:checked ~ .control__indicator{background:#d1d5d8;} \r\n.tc27 .check-comp .control__indicator.check-set{border:2px solid #d1d5d8;}\r\n.tc27 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#d1d5d8;}\r\n.tc27 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#d1d5d8;}\r\n.tc27 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #d1d5d8;}\r\n.tc27 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc27 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc27 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#d1d5d8;}\r\n.tc27 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc27 .check-comp .control--radio .control__indicator.icon-set i{color:#d1d5d8;}\r\n.tc27 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#d1d5d8;border:3px solid #fff;}\r\n.tc27 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#d1d5d8;bottom:18px}\r\n.tc27 .select .selectize-dropdown .active{background-color:#d1d5d8;color:#ffffff;}\r\n.tc27 .check-comp .control {  color: #d1d5d8;}\r\n.tc27 .check-comp .checkbox-outer.active label{background: #d1d5d8; color: #fff;}\r\n.tc27 .check-comp .checkbox-outer label:hover {background: #d1d5d8; color: #fff;}\r\n.questions .question-section-outer .question-number.tc27 {width: 30px; height: 30px; background: #d1d5d8; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc27{ border-left: 3px solid rgba(209,213,216,0.15);}\r\n .tc27 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#d1d5d8;bottom:18px}\r\n/*theme color 27 end*/\r\n\r\n\r\n/*theme color 27*/\r\n.tc28 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#d1d5d8;border:3px solid #fff;}\r\n.tc28 .range-slider .irs-bar-edge {border: 1px solid #00aea5; border-right: 0; background: #00aea5;}\r\n.tc28 .range-slider .irs-bar {border-top: 1px solid #00aea5;border-bottom: 1px solid #00aea5; background: #00aea5;}\r\n.tc28 .range-slider .irs-single { background: #d1d5d8; font-family: montserratregular;}\r\n.tc28 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\r\n.tc28 .check-comp .control input:checked ~ .control__indicator{background:#00aea5;} \r\n.tc28 .check-comp .control__indicator.check-set{border:2px solid #00aea5;}\r\n.tc28 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#00aea5;}\r\n.tc28 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#00aea5;}\r\n.tc28 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #00aea5;}\r\n.tc28 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.tc28 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.tc28 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#00aea5;}\r\n.tc28 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.tc28 .check-comp .control--radio .control__indicator.icon-set i{color:#00aea5;}\r\n.tc28 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#00aea5;border:3px solid #fff;}\r\n.tc28 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#d1d5d8;bottom:18px}\r\n.tc28 .select .selectize-dropdown .active{background-color:#00aea5;color:#ffffff;}\r\n.tc28 .check-comp .control {  color: #00aea5;}\r\n.tc28 .check-comp .checkbox-outer.active label{background: #00aea5; color: #fff;}\r\n.tc28 .check-comp .checkbox-outer label:hover {background: #00aea5; color: #fff;}\r\n.questions .question-section-outer .question-number.tc28 {width: 30px; height: 30px; background: #00aea5; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\r\n    position: absolute; left: 18px;}\r\n .question-components.tc28{ border-left: 3px solid rgba(0,174,165,0.15);}\r\n .tc28 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#00aea5;bottom:18px}\r\n/*theme color 27 end*/\r\n\r\n.bottom-section{ font-family: oxygenbold; margin-bottom: 20px; border-bottom: 0 !important }\r\n.result-full-section .container-temp{width:100%;margin:0 auto;display:inline-block;}\r\n.page_2 .input-section .input-outer span  {float: left; width: 80%;text-align: left; color: #f44336;font-size: 11px;z-index: 1; margin-bottom: 5px; margin-top: -6px;  }\r\n\r\ntemp{width:100%;margin:0 auto; display: block;}\r\n\r\n.divider-2{ margin-top:30px; background-image: url(\"../images/temp-bg1.jpg\") ; background-size: cover !important;\r\n    background-repeat: no-repeat !important;\r\n    /*background-attachment: fixed !important;*/\r\n    background-position: center center !important;\r\n    width: 100%; float: left; height: 100%; padding-bottom:30px; position: relative; vertical-align: middle; }\r\n\r\n.page-logo{ padding: 40px; float: left; width:100%;}\r\n\r\n.result-comm{ padding-right: 20px;}\r\n\r\n/* sahil changes */\r\n.page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){ font-size:30px;}\r\n.page_2 .mid-width p{ width: 100%; text-align: center; font-size: 24px; margin-bottom: 0px;}\r\n\r\n.landing-page-header{ position:absolute ;}\r\n.page_2 .slimScrollDiv{ margin-bottom: 30px !important;}\r\n.section-head span{ margin-bottom:16px;}\r\n.powered-by img{\r\n    width: 55%;\r\n    padding-bottom: 5px;\r\n    padding-top: 5px;\r\n}\r\n.leadform-outer{ float: left; width:100%;}\r\n.share-set{ float: left; width:100%;}\r\n\r\n.bg-overlay{background: rgba(42,40,38,0.45);width:100%; height: 100vh; }\r\n\r\n.temp2-scrollbar\r\n{\r\n    overflow-y: scroll;\r\n    height:520px;\r\n}\r\n/*\r\n *  STYLE 1\r\n */\r\n.temp2-scrollbar::-webkit-scrollbar-track\r\n{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(245,245,248,.8);\r\n    border-radius: 5px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.temp2-scrollbar::-webkit-scrollbar\r\n{\r\n    width: 7px;\r\n\r\n    background-color: #aaa;\r\n}\r\n.temp2-scrollbar::-webkit-scrollbar:horizontal\r\n{\r\n    height: 7px;\r\n\r\n    background-color: #aaa;\r\n}\r\n.temp2-scrollbar::-webkit-scrollbar-thumb\r\n{\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(245,245,248,.8);\r\n    background-color: #aaa;\r\n}\r\n.mobile-result-link{ display: none !important;}\r\n.mobile-result-linkAdd{ display: none; visibility: hidden;}"

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = "\r\n\r\n/*color style css*/\r\n\r\n.cp1 .main-bg.page_0{ background: #2a2826;}\r\n.cp1 .divider-2{ background: #2a2826;}\r\n.cp1 .check-comp .control input:checked ~ .control__indicator{background:#ff6600;} \r\n.cp1 .check-comp .control__indicator.check-set{border:2px solid #ff6600;}\r\n.cp1 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#ff6600;}\r\n.cp1 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#ff6600;}\r\n.cp1 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #ff6600;}\r\n.cp1 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp1 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp1 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#ff6600;}\r\n.cp1 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp1 .check-comp .control--radio .control__indicator.icon-set i{color:#ff6600;}\r\n.cp1 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#ff6600;border:3px solid #fff;}\r\n.cp1 .range-slider .irs-bar-edge {border: 1px solid #ff6600; border-right: 0; background: #ff6600;}\r\n.cp1 .range-slider .irs-bar {border-top: 1px solid #ff6600;border-bottom: 1px solid #ff6600; background: #ff6600;}\r\n.cp1 .range-slider .irs-single { background: #ff6600; font-family: oxygenbold;}\r\n.cp1 .range-slider .irs-min, .irs-max{font-family: oxygenbold;}\r\n.cp1 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\r\n.cp1 .select .selectize-dropdown .active{background-color:#ff6600;color:#ffffff;}\r\n.cp1 .left-section .result-full-section{background: #ff6600 !important}\r\n.cp1 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: #fff; float:left; width:100%; text-align: center; margin-bottom: 30px;}\r\n.cp1 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(255, 255, 255, 0.8); font-family: oxygenregular; padding:0px 30px;  float:left; width:100%; text-align: center;}\r\n.cp1 .btn.prime-action.focus,.cp1 .btn.prime-action:focus,.cp1 .btn.prime-action:hover{color:#28324e;text-decoration:none;background:#ff6600;}\r\n.cp1 .top-fix-bar{ background: #ff6600; min-height: 70px; position:relative;}\r\n.cp1 .questions .question-section-outer .prime-action{ background:#ff6600 !important; border:2px solid #ff6600 !important; }\r\n.cp1 .result-centre-outer {margin: 3%; padding: 0 4% ; float:left; width: 94%;background: #ff6600 !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0 !important;}\r\n.cp1 .prime-action{ background:#ff6600 !important; border:2px solid #ff6600 !important; color: #fff !important; font-size: 3vmin; }\r\n.cp1 .leadform-outer .prime-action { background:#ff6600 !important; border:2px solid #ff6600 !important; color:#fff;}\r\n.cp1 .leadform-outer .prime-action:hover { background:#ff6600 !important; border:2px solid #ff6600 !important; color:#fff;}\r\n.cp1 .landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #ffffff !important;color:#ffffff;font-family:oxygenbold;font-size:14px;}\r\n.cp1 .page_0.editor-page-divider { background: #ff6600; }\r\n/*.cp1 .landing-page-mid {background: rgba(1,36,53,0.45);}\r\n.cp1 .landing-page-mid ::-webkit-input-placeholder{color:#ff6600 !important;}\r\n.cp1 .landing-page-mid ::-webkit-input-placeholder{color:#ff6600 !important;}\r\n.cp1 .landing-page-mid :-moz-placeholder {    color: #ff6600 !important;  }\r\n.cp1 .landing-page-mid ::-moz-placeholder {   color: #ff6600 !important;  }\r\n.cp1 .landing-page-mid :-ms-input-placeholder {color: #ff6600 !important;}*/\r\n.cp1 .questions-header header .right-sec{ background:#ff6600 !important }\r\n.cp1 .questions .question-section-outer .question-number{background: #ff6600 !important; }\r\n.cp1 .question-components{ border-left: 3px solid rgba(255,102,0,0.15);}\r\n.cp1 .questions .question-section-outer .input-field input{color:#ff6600;}\r\n.cp1 .page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){color:#ff6600;}\r\n.cp1 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){color:#ff6600;}\r\n.cp1 .redo-link ul li { background: #ff6600; }\r\n.cp1 .redo-link ul li a{ color:#fff;}\r\n.cp1 .page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link{\r\n\tcolor: #ff6600;\r\n}\r\n.cp1 .page_2.w100 .mobile-result-linkAdd{\r\n\tcolor: #2a2826 !important;\r\n}\r\n\r\n\r\n.cp2 .main-bg.page_0{ background: #2a2826;}\r\n.cp2 .divider-2{ background: #2a2826;}\r\n.cp2 .check-comp .control input:checked ~ .control__indicator{background:#00CC10;} \r\n.cp2 .check-comp .control__indicator.check-set{border:2px solid #00CC10;}\r\n.cp2 .question-components .check-comp label{ color:#00CC10; }\r\n.cp2 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#00CC10;}\r\n.cp2 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#00CC10;}\r\n.cp2 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #00CC10;}\r\n.cp2 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp2 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp2 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#00CC10;}\r\n.cp2 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp2 .check-comp .control--radio .control__indicator.icon-set i{color:#00CC10;}\r\n.cp2 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#00CC10;border:3px solid #fff;}\r\n.cp2 .range-slider .irs-bar-edge {border: 1px solid #00CC10; border-right: 0; background: #00CC10;}\r\n.cp2 .range-slider .irs-bar {border-top: 1px solid #00CC10;border-bottom: 1px solid #00CC10; background: #00CC10;}\r\n.cp2 .range-slider .irs-single { background: #00CC10; font-family: oxygenbold;}\r\n.cp2 .range-slider .irs-min, .irs-max{font-family: oxygenbold;}\r\n.cp2 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\r\n.cp2 .select .selectize-dropdown .active{background-color:#00CC10;color:#ffffff;}\r\n.cp2 .left-section .result-full-section{background: #00CC10 !important}\r\n.cp2 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: #fff;font-family: oxygenbold; float:left; width:100%; text-align: center; margin-bottom: 30px;}\r\n.cp2 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(255, 255, 255, 0.8); font-family:oxygenregular; padding:0px 30px; float:left; width:100%; text-align: center;}\r\n.cp2 .btn.prime-action.focus,.cp2 .btn.prime-action:focus,.cp2 .btn.prime-action:hover{color:#28324e;text-decoration:none;background:#00CC10;}\r\n.cp2 .top-fix-bar{ background: #00CC10; min-height: 70px; position:relative;}\r\n.cp2 .questions .question-section-outer .prime-action{ background:#00CC10 !important; border:2px solid #00CC10 !important; }\r\n.cp2 .result-centre-outer {margin: 3%; padding: 0 4% ; float:left; width: 94%;background: #00CC10 !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0 !important;}\r\n.cp2 .prime-action{ background:#00CC10 !important; border:2px solid #00CC10 !important; color: #fff !important; font-size:3vmin; }\r\n.cp2 .leadform-outer .prime-action { background:#00CC10 !important; border:2px solid #00CC10 !important; color:#fff;}\r\n.cp2 .leadform-outer .prime-action:hover { background:#00CC10 !important; border:2px solid #00CC10 !important; color:#fff;}\r\n.cp2 .landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #ffffff !important;color:#ffffff;font-family:oxygenbold;font-size:14px!important;}\r\n.cp2 .page_0.editor-page-divider { background: #00CC10; }\r\n/*.cp2 .landing-page-mid {background: rgba(1,36,53,0.45);}\r\n.cp2 .landing-page-mid ::-webkit-input-placeholder{color:#00CC10 !important;}\r\n.cp2 .landing-page-mid ::-webkit-input-placeholder{color:#00CC10 !important;}\r\n.cp2 .landing-page-mid :-moz-placeholder {    color: #00CC10 !important;  }\r\n.cp2 .landing-page-mid ::-moz-placeholder {   color: #00CC10 !important;  }\r\n.cp2 .landing-page-mid :-ms-input-placeholder {color: #00CC10 !important;}*/\r\n.cp2 .questions-header header .right-sec{ background:#00CC10 !important }\r\n.cp2 .questions .question-section-outer .question-number{background: #00CC10 !important; }\r\n.cp2 .question-components{ border-left: 3px solid rgba(0,204,16,0.15);}\r\n.cp2 .questions .question-section-outer .input-field input{color:#00CC10;}\r\n.cp2 .page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){color:#00CC10;}\r\n.cp2 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){color:#00CC10;}\r\n.cp2 .redo-link ul li { background: #00CC10; }\r\n.cp2 .redo-link ul li a{ color:#fff;}\r\n.cp2 .page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link{\r\n\tcolor: #00CC10;\r\n}\r\n.cp2.page_2.w100 .mobile-result-linkAdd{\r\n\tcolor:  #2a2826 !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.cp3 .main-bg.page_0{ background: #2a2826;}\r\n.cp3 .divider-2{ background: #2a2826;}\r\n.cp3 .check-comp .control input:checked ~ .control__indicator{background:#EF2158;} \r\n.cp3 .check-comp .control__indicator.check-set{border:2px solid #EF2158;}\r\n.cp3 .question-components .check-comp label{ color:#EF2158; }\r\n.cp3 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#EF2158;}\r\n.cp3 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#EF2158;}\r\n.cp3 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #EF2158;}\r\n.cp3 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp3 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp3 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#EF2158;}\r\n.cp3 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp3 .check-comp .control--radio .control__indicator.icon-set i{color:#EF2158;}\r\n.cp3 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#EF2158;border:3px solid #fff;}\r\n.cp3 .range-slider .irs-bar-edge {border: 1px solid #EF2158; border-right: 0; background: #EF2158;}\r\n.cp3 .range-slider .irs-bar {border-top: 1px solid #EF2158;border-bottom: 1px solid #EF2158; background: #EF2158;}\r\n.cp3 .range-slider .irs-single { background: #EF2158; font-family: oxygenbold;}\r\n.cp3 .range-slider .irs-min, .irs-max{font-family: oxygenbold;}\r\n.cp3 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\r\n.cp3 .select .selectize-dropdown .active{background-color:#EF2158;color:#ffffff;}\r\n.cp3 .left-section .result-full-section{background: #EF2158 !important}\r\n.cp3 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: #fff;font-family: oxygenbold; float:left; width:100%; text-align: center; margin-bottom: 30px;}\r\n.cp3 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(255, 255, 255, 0.8); font-family: oxygenregular; padding:0px 30px; float:left; width:100%; text-align: center;}\r\n.cp3 .btn.prime-action.focus,.cp3 .btn.prime-action:focus,.cp3 .btn.prime-action:hover{color:#28324e;text-decoration:none;background:#EF2158;}\r\n.cp3 .top-fix-bar{ background: #EF2158; min-height: 70px; position:relative;}\r\n.cp3 .questions .question-section-outer .prime-action{ background:#EF2158 !important; border:2px solid #EF2158 !important; }\r\n.cp3 .result-centre-outer {margin: 3%; padding: 0 4% ; float:left; width: 94%;background: #EF2158 !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0 !important;}\r\n.cp3 .prime-action{ background:#EF2158 !important; border:2px solid #EF2158 !important; color: #fff !important; font-size: 3vmin; }\r\n.cp3 .leadform-outer .prime-action { background:#EF2158 !important; border:2px solid #EF2158 !important; color:#fff;}\r\n.cp3 .leadform-outer .prime-action:hover { background:#EF2158 !important; border:2px solid #EF2158 !important; color:#fff;}\r\n.cp3 .landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #ffffff !important;color:#ffffff;font-family:oxygenbold;font-size:14px!important;}\r\n.cp3 .page_0.editor-page-divider { background: #EF2158; }\r\n/*.cp3 .landing-page-mid {background: rgba(1,36,53,0.45);}\r\n.cp3 .landing-page-mid ::-webkit-input-placeholder{color:#EF2158 !important;}\r\n.cp3 .landing-page-mid ::-webkit-input-placeholder{color:#EF2158 !important;}\r\n.cp3 .landing-page-mid :-moz-placeholder {    color: #EF2158 !important;  }\r\n.cp3 .landing-page-mid ::-moz-placeholder {   color: #EF2158 !important;  }\r\n.cp3 .landing-page-mid :-ms-input-placeholder {color: #EF2158 !important;}*/\r\n.cp3 .questions-header header .right-sec{ background:#EF2158 !important }\r\n.cp3 .questions .question-section-outer .question-number{background: #EF2158 !important; }\r\n.cp3 .question-components{ border-left: 3px solid rgba(239,33,88,0.15);}\r\n.cp3 .questions .question-section-outer .input-field input{color:#EF2158;}\r\n.cp3 .page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){color:#EF2158;}\r\n.cp3 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){color:#EF2158;}\r\n.cp3 .redo-link ul li { background: #EF2158; }\r\n.cp3 .redo-link ul li a{ color:#fff;}\r\n.cp3 .page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link{\r\n\tcolor: #EF2158;\r\n}\r\n.cp3 .page_2.w100 .mobile-result-linkAdd{\r\n\tcolor: #2a2826 !important;\r\n}\r\n\r\n\r\n\r\n\r\n.cp4 .main-bg.page_0{ background: #09141f;}\r\n.cp4 .temp2-bg{ background: #09141f;}\r\n.cp4 .temp2-bg .bg-overlay{background: rgba(9,20,31,0.45);}\r\n.cp4 .divider-2{ background: #09141f;}\r\n.cp4 .check-comp .control input:checked ~ .control__indicator{background:#17438B;} \r\n.cp4 .check-comp .control__indicator.check-set{border:2px solid #17438B;}\r\n.cp4 .question-components .check-comp label{ color:#17438B; }\r\n.cp4 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#17438B;}\r\n.cp4 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#17438B;}\r\n.cp4 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #17438B;}\r\n.cp4 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp4 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp4 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#17438B;}\r\n.cp4 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp4 .check-comp .control--radio .control__indicator.icon-set i{color:#17438B;}\r\n.cp4 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#17438B;border:3px solid #fff;}\r\n.cp4 .range-slider .irs-bar-edge {border: 1px solid #17438B; border-right: 0; background: #17438B;}\r\n.cp4 .range-slider .irs-bar {border-top: 1px solid #17438B;border-bottom: 1px solid #17438B; background: #17438B;}\r\n.cp4 .range-slider .irs-single { background: #17438B; font-family: oxygenbold;}\r\n.cp4 .range-slider .irs-min, .irs-max{font-family: oxygenbold;}\r\n.cp4 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\r\n.cp4 .select .selectize-dropdown .active{background-color:#17438B;color:#ffffff;}\r\n.cp4 .left-section .result-full-section{background: #17438B !important}\r\n.cp4 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: #fff;font-family: oxygenbold; float:left; width:100%; text-align: center; margin-bottom: 30px;}\r\n.cp4 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(255, 255, 255, 0.8); font-family:oxygenregular; padding:0px 30px; float:left; width:100%; text-align: center;}\r\n.cp4 .btn.prime-action.focus,.cp4 .btn.prime-action:focus,.cp4 .btn.prime-action:hover{color:#28324e;text-decoration:none;background:#17438B;}\r\n.cp4 .top-fix-bar{ background: #17438B; min-height: 70px; position:relative;}\r\n.cp4 .questions .question-section-outer .prime-action{ background:#17438B !important; border:2px solid #17438B !important; }\r\n.cp4 .result-centre-outer {margin: 3%; padding: 0 4% ; float:left; width: 94%;background: #17438B !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0 !important;}\r\n.cp4 .prime-action{ background:#17438B !important; border:2px solid #17438B !important; color: #fff !important; font-size:3vmin; }\r\n.cp4 .leadform-outer .prime-action { background:#17438B !important; border:2px solid #17438B !important; color:#fff;}\r\n.cp4 .leadform-outer .prime-action:hover { background:#17438B !important; border:2px solid #17438B !important; color:#fff;}\r\n.cp4 .landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #ffffff !important;color:#ffffff;font-family:oxygenbold;font-size:14px!important;}\r\n.cp4 .page_0.editor-page-divider { background: #17438B; }\r\n.cp4 .landing-page-mid {background: rgba(9,20,31,0.45);}\r\n/*.cp4 .landing-page-mid ::-webkit-input-placeholder{color:#17438B !important;}\r\n.cp4 .landing-page-mid ::-webkit-input-placeholder{color:#17438B !important;}\r\n.cp4 .landing-page-mid :-moz-placeholder {    color: #17438B !important;  }\r\n.cp4 .landing-page-mid ::-moz-placeholder {   color: #17438B !important;  }\r\n.cp4 .landing-page-mid :-ms-input-placeholder {color: #17438B !important;}*/\r\n.cp4 .questions-header header .right-sec{ background:#17438B !important }\r\n.cp4 .questions .question-section-outer .question-number{background: #17438B !important; }\r\n.cp4 .question-components{ border-left: 3px solid rgba(23,67,139,0.15);}\r\n.cp4 .questions .question-section-outer .input-field input{color:#17438B;}\r\n.cp4 .page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){color:#17438B;}\r\n.cp4 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){color:#17438B;}\r\n.cp4 .redo-link ul li { background: #17438B; }\r\n.cp4 .redo-link ul li a{ color:#fff;}\r\n@media (max-width:775px) {\r\n\t.cp4 .page_2.w100.result-fixed.mobile-result-sticky { background: #09141f !important; }\r\n\t.cp4 .page_2.w100 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){color:#17438B;}\r\n\t.cp4 .page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link { color: #17438B; }\r\n\t.cp4 .page_2.w100 .mobile-result-linkAdd { color: #09141f !important; }\r\n\t.cp4 .page_2.w100.mobile-result-sticky{ background: #09141f; }\r\n}\r\n\r\n\r\n\r\n\r\n.cp5 .main-bg.page_0{ background: #09141f;}\r\n.cp5 .temp2-bg{ background: #09141f;}\r\n.cp5 .temp2-bg .bg-overlay{background: rgba(9,20,31,0.45);}\r\n.cp5 .divider-2{ background: #09141f;}\r\n.cp5 .check-comp .control input:checked ~ .control__indicator{background:#678D29;} \r\n.cp5 .check-comp .control__indicator.check-set{border:2px solid #678D29;}\r\n.cp5 .question-components .check-comp label{ color:#678D29; }\r\n.cp5 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#678D29;}\r\n.cp5 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#678D29;}\r\n.cp5 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #678D29;}\r\n.cp5 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\r\n.cp5 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\r\n.cp5 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#678D29;}\r\n.cp5 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\r\n.cp5 .check-comp .control--radio .control__indicator.icon-set i{color:#678D29;}\r\n.cp5 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#678D29;border:3px solid #fff;}\r\n.cp5 .range-slider .irs-bar-edge {border: 1px solid #678D29; border-right: 0; background: #678D29;}\r\n.cp5 .range-slider .irs-bar {border-top: 1px solid #678D29;border-bottom: 1px solid #678D29; background: #678D29;}\r\n.cp5 .range-slider .irs-single { background: #678D29; font-family: oxygenbold;}\r\n.cp5 .range-slider .irs-min, .irs-max{font-family: oxygenbold;}\r\n.cp5 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\r\n.cp5 .select .selectize-dropdown .active{background-color:#678D29;color:#ffffff;}\r\n.cp5 .left-section .result-full-section{background: #678D29 !important}\r\n.cp5 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: #fff;font-family: oxygenbold; float:left; width:100%; text-align: center; margin-bottom: 30px;}\r\n.cp5 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(255, 255, 255, 0.8); font-family:oxygenregular; padding:0px 30px; float:left; width:100%; text-align: center;}\r\n.cp5 .btn.prime-action.focus,.cp5 .btn.prime-action:focus,.cp5 .btn.prime-action:hover{color:#28324e;text-decoration:none;background:#678D29;}\r\n.cp5 .top-fix-bar{ background: #678D29; min-height: 70px; position:relative;}\r\n.cp5 .questions .question-section-outer .prime-action{ background:#678D29 !important; border:2px solid #678D29 !important; }\r\n.cp5 .result-centre-outer {margin: 3%; padding: 0 4% ; float:left; width: 94%;background: #678D29 !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0 !important;}\r\n.cp5 .prime-action{ background:#678D29 !important; border:2px solid #678D29 !important; color: #fff !important; font-size:3vmin; }\r\n.cp5 .leadform-outer .prime-action { background:#678D29 !important; border:2px solid #678D29 !important; color:#fff;}\r\n.cp5 .leadform-outer .prime-action:hover { background:#678D29 !important; border:2px solid #678D29 !important; color:#fff;}\r\n.cp5 .landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #ffffff !important;color:#ffffff;font-family:oxygenbold;font-size:14px!important;}\r\n.cp5 .page_0.editor-page-divider { background: #678D29; }\r\n.cp5 .landing-page-mid {background: rgba(9,20,31,0.45);}\r\n/*.cp5 .landing-page-mid ::-webkit-input-placeholder{color:#678D29 !important;}\r\n.cp5 .landing-page-mid ::-webkit-input-placeholder{color:#678D29 !important;}\r\n.cp5 .landing-page-mid :-moz-placeholder {    color: #678D29 !important;  }\r\n.cp5 .landing-page-mid ::-moz-placeholder {   color: #678D29 !important;  }\r\n.cp5 .landing-page-mid :-ms-input-placeholder {color: #678D29 !important;}*/\r\n.cp5 .questions-header header .right-sec{ background:#678D29 !important }\r\n.cp5 .questions .question-section-outer .question-number{background: #678D29 !important; }\r\n.cp5 .question-components{ border-left: 3px solid rgba(103,141,41,0.15);}\r\n.cp5 .questions .question-section-outer .input-field input{color:#678D29;}\r\n.cp5 .page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){color:#678D29;}\r\n.cp5 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){color:#678D29;}\r\n.cp5 .redo-link ul li { background: #678D29; }\r\n.cp5 .redo-link ul li a{ color:#fff;}\r\n@media (max-width:775px) {\r\n\t.cp5 .page_2.w100.result-fixed.mobile-result-sticky { background: #09141f !important; }\r\n\t.cp5 .page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link { color: #678D29; }\r\n\t.cp5 .page_2.w100 .mobile-result-linkAdd { color: #09141f !important; }\r\n\t.cp5 .page_2.w100.mobile-result-sticky{ background: #09141f; }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = "<div *ngFor=\"let page of getVisiblePages(), let pageIndex=index\"\r\n     (mousedown)=\"selectpage(page)\"\r\n     (click)=\"selectModel($event,'Page')\"\r\n     class=\"{{devMode?'editor-page-divider':''}}\"\r\n>\r\n\t<div class=\"t1\">\r\n    <!--Landing Pge Start-->\r\n\t\t<div class=\"{{'page_'+pageIndex}} t1-landing\"\r\n         *ngIf=\"page.type=='Landing'\"\r\n         [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\r\n\t\t\t   [style.backgroundImage]=\"(_templateRenderer.getBackground('img')) | safeStyle\"\r\n    >\r\n\t\t\t<div class=\"t1-landing-inner t1-overlay\">\r\n\t\t\t\t<section *ngFor=\"let section of getVisibleSections(page), let secIndex=index\"\r\n                 class=\"{{section.defaultClass}}\"\r\n                 (mousedown)=\"selectSection(section)\"\r\n        >\r\n\t\t\t\t\t<div *ngFor=\"let control of section.items,let i=index\"\r\n               [attr.data-order]=\"i+1\"\r\n          >\r\n\t\t\t\t\t\t<control [page]=\"page\"\r\n                    (mousedown)=\"selectpage(page)\"\r\n                    (click)=\"selectModel($event,'Page')\"\r\n                     [data]=\"control\"\r\n\t\t\t\t\t\t\t       (controlOutput)=\"onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\r\n                     [devMode]=\"devMode\"\r\n                     *ngIf=\"control.visible && control.type == 'leadform'\"\r\n                     class=\"{{control.defaultClass}}\"\r\n            >\r\n\t\t\t\t\t\t</control>\r\n\t\t\t\t\t\t<control [data]=\"control\"\r\n                     [devMode]=\"devMode\"\r\n                     (controlOutput)=\"onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\r\n\t\t\t\t\t\t\t       *ngIf=\"control.visible && control.type !== 'leadform'\" class=\"{{control.defaultClass}}\"\r\n            >\r\n\t\t\t\t\t\t</control>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</section>\r\n\t\t\t</div>\r\n\t\t</div>\r\n    <!--Landing Pge End-->\r\n    <!--Questionnaire Start-->\r\n    <!--Only in Builder HTML Start-->\r\n    <div *ngIf=\"devMode && page.type=='Questionnaire'\" class=\"{{'page_'+pageIndex}}\">\r\n      <div *ngFor=\"let section of getVisibleSections(page), let secIndex=index\" class=\"{{'sec_'+secIndex}}\" (mousedown)=\"selectSection(section)\">\r\n        <div *ngFor=\"let control of section.items,let i=index\"\r\n             class=\"editor-page-divider slide_{{jsonBuilderHelper.getQuestionsList().indexOf(control)}} sec_{{secIndex}}_q_{{i}}\"\r\n             (mousedown)=\"(section.type=='LeadFormQ')?selectSection(section):selectControl(control)\"\r\n             (click)=\"section.type=='LeadFormQ'?selectModel($event,'Section'):selectModel($event,'Control')\"\r\n        >\r\n          <div class=\"t1-question\"\r\n              [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\r\n              [style.backgroundImage]=\"(_templateRenderer.getBackground('img')) | safeStyle\"\r\n          >\r\n            <div class=\"t1-landing-inner t1-overlay\">\r\n              <div *ngIf=\"jsonBuilderHelper.getJSONBuilt().realTime\">\r\n                <div class=\"t1-question-liveresult\" [fetch-result]=\"0\">\r\n                  $53,564\r\n                </div>\r\n                <div class=\"t1-question-resultheading\">\r\n                  {{jsonBuilderHelper.getJSONBuilt().realTimeHeading}}\r\n                </div>\r\n              </div>\r\n              <div class=\"t1-slider-pagination\">\r\n                <a href=\"javascript:void(0);\" *ngFor=\"let slideDot of jsonBuilderHelper.getQuestionsList(), let dotIndex=index\" [class.active]=\"jsonBuilderHelper.getQuestionsList().indexOf(control)==dotIndex\"></a>\r\n              </div>\r\n              <section class=\"t1-question-mid\">\r\n                <div class=\"t1-question-slider\">\r\n                  <div class=\"t1-slider\">\r\n                    <div class=\"t1-slider-nav\">\r\n                      <a href=\"javascript:void(0);\" class=\"prev\" [class.a-disable]=\"jsonBuilderHelper.getQuestionsList().indexOf(control)==0\"><i class=\"material-icons\">keyboard_arrow_left</i></a>\r\n                    </div>\r\n                    <div class=\"t1-slider-question slide-1\"\r\n                        [attr.data-slide]=\"i+1\"\r\n                        [class.t1-slider-question-divider]=\"devMode\"\r\n                    >\r\n                      <div class=\"t1-slider-section\">\r\n                        <div class=\"t1-ques-inner\">\r\n                          <div class=\"t1-ques-head\">\r\n                            {{(section.type=='LeadFormQ')?section.title:control.props.title}}\r\n                            <span *ngIf=\"control.config.validations.required.status\" class=\"requiredAsteric\">*</span>\r\n                            <div class=\"help-outer\" *ngIf=\"control.config.showHelp || (section.type=='LeadFormQ' && section.showDesc)\">\r\n                                <i class=\"material-icons\" >help_outline</i>\r\n                                <div class=\"help-text\">{{(section.type=='LeadFormQ')?section.description:control.props.helpText}}</div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"t1-ques-component\">\r\n                            <div class=\"question-components\">\r\n                              <div class=\"full-width np\">\r\n\r\n                                <control\r\n                                  [data]=\"control\" [form]=\"tvs.getFormGroups()[section._id]\"\r\n\r\n                                ></control>\r\n\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"t1-slider-nav\">\r\n                      <a href=\"javascript:void(0);\" class=\"next\">\r\n                        <i class=\"material-icons\" *ngIf=\"(jsonBuilderHelper.getQuestionsList().indexOf(control)+1)!=jsonBuilderHelper.getQuestionsList().length\">keyboard_arrow_right</i>\r\n                        <i class=\"material-icons\" *ngIf=\"(jsonBuilderHelper.getQuestionsList().indexOf(control)+1)==jsonBuilderHelper.getQuestionsList().length\">done</i>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </section>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Only in Builder HTML End-->\r\n    <!--Preview/Functional HTML Start-->\r\n    <div *ngIf=\"!devMode && page.type=='Questionnaire'\">\r\n      <div class=\"{{'page_'+pageIndex}} t1-question\"\r\n          [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\r\n          [style.backgroundImage]=\"(_templateRenderer.getBackground('img')) | safeStyle\"\r\n          [class.hide]=\"!devMode\"\r\n      >\r\n        <div class=\"t1-landing-inner t1-overlay\">\r\n            <div *ngIf=\"jsonBuilderHelper.getJSONBuilt().realTime\">\r\n              <div class=\"t1-question-liveresult\" [fetch-result]=\"0\">\r\n                $53,564\r\n              </div>\r\n              <div class=\"t1-question-resultheading\">\r\n                {{jsonBuilderHelper.getJSONBuilt().realTimeHeading}}\r\n              </div>\r\n            </div>\r\n            <div class=\"t1-slider-pagination\"\r\n                [class.hide]=\"devMode\"\r\n            >\r\n              <a href=\"javascript:void(0);\" *ngFor=\"let slideDot of jsonBuilderHelper.getQuestionsList(), let dotIndex=index\" [class.active]=\"currentQ=='slide_'+dotIndex\"></a>\r\n            </div>\r\n            <section class=\"t1-question-mid\">\r\n              <div class=\"t1-question-slider\">\r\n                <div class=\"t1-slider\">\r\n                  <div *ngFor=\"let section of getVisibleSections(page), let secIndex=index\" class=\"{{'sec_'+secIndex}} card-sec-wrapper\" (mousedown)=\"selectSection(section)\">\r\n                    <!--Questions-->\r\n                    <form (ngSubmit)=\"onSubmit(tvs.getFormGroups()[section._id])\" [formGroup]=\"tvs.getFormGroups()[section._id]\" novalidate *ngIf =\"section.type!='LeadFormQ'\">\r\n                      <div\r\n                          *ngFor=\"let control of section.items,let i=index\"\r\n                          (mousedown)=\"selectControl(control)\"\r\n                          (click)=\"selectModel($event,'Control')\"\r\n                          class=\"slide_{{jsonBuilderHelper.getQuestionsList().indexOf(control)}} sec_{{secIndex}}_q_{{i}}\"\r\n                          [class.hide]=\"!devMode && jsonBuilderHelper.getQuestionsList().indexOf(control)\" style=\"position: relative;float: left;width: 100%;\" >\r\n                        <div class=\"t1-slider-nav\" [class.hide]=\"devMode\">\r\n                          <a (click)=\"onSubmit(tvs.getFormGroups()[section._id],section._id,control._id);onButtonClick($event,'slide_'+(jsonBuilderHelper.getQuestionsList().indexOf(control)-1),'slide_'+jsonBuilderHelper.getQuestionsList().indexOf(control))\"\r\n                          href=\"javascript:void(0);\"\r\n                          class=\"prev\" [class.a-disable]=\"jsonBuilderHelper.getQuestionsList().indexOf(control)==0\">\r\n                            <i class=\"material-icons\">keyboard_arrow_left</i>\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"t1-slider-question slide-1\"\r\n                            [attr.data-slide]=\"i+1\"\r\n                            [class.t1-slider-question-divider]=\"devMode\"\r\n                        >\r\n                          <div class=\"t1-slider-section\">\r\n                            <div class=\"t1-ques-inner\">\r\n                              <div class=\"t1-ques-head\">\r\n                                {{control.props.title}}\r\n                                <span *ngIf=\"control.config.validations.required.status\" class=\"requiredAsteric\">*</span>\r\n                                <div class=\"help-outer\" *ngIf=\"control.config.showHelp\">\r\n                                    <i class=\"material-icons\" >help_outline</i>\r\n                                    <div class=\"help-text\">{{control.props.helpText}}</div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"t1-ques-component\">\r\n                                <div class=\"question-components\">\r\n                                  <div class=\"full-width np\">\r\n                                    <control\r\n                                      [data]=\"control\" [form]=\"tvs.getFormGroups()[section._id]\"\r\n                                      (controlOutput)=\"onSubmit(tvs.getFormGroups()[section._id],section._id, control._id);\r\n                                      (jsonBuilderHelper.getQuestionsList().indexOf(control)+1)!= jsonBuilderHelper.getQuestionsList().length?\r\n                                      onButtonClick($event,'slide_'+(jsonBuilderHelper.getQuestionsList().indexOf(control)+1),'slide_'+jsonBuilderHelper.getQuestionsList().indexOf(control)):\r\n                                      onButtonClick($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\">\r\n                                    </control>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"t1-slider-nav\" [class.hide]=\"devMode\">\r\n                          <a\r\n                            (click)=\"onSubmit(tvs.getFormGroups()[section._id],section._id, control._id);\r\n                                      (jsonBuilderHelper.getQuestionsList().indexOf(control)+1)!= jsonBuilderHelper.getQuestionsList().length?\r\n                                      onButtonClick($event,'slide_'+(jsonBuilderHelper.getQuestionsList().indexOf(control)+1),'slide_'+jsonBuilderHelper.getQuestionsList().indexOf(control)):\r\n                                      onButtonClick($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\r\n                            href=\"javascript:void(0);\"\r\n                            class=\"next\">\r\n                            <i class=\"material-icons\">\r\n                              {{\r\n                                ((jsonBuilderHelper.getQuestionsList().indexOf(control)+1)==jsonBuilderHelper.getQuestionsList().length)?\r\n                                'done':'keyboard_arrow_right'\r\n                              }}\r\n                            </i>\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                    <!--Questions-->\r\n                    <!--Leadform-->\r\n                    <div *ngIf =\"section.type=='LeadFormQ'\" class=\"slide_{{jsonBuilderHelper.getQuestionsList().indexOf(section.items[0])}}\" [class.hide]=\"!devMode\">\r\n                      <div class=\"t1-slider-nav\" [class.hide]=\"devMode\">\r\n                        <a (click)=\"validated = true; onButtonClick($event,'slide_'+(jsonBuilderHelper.getQuestionsList().length-2),'slide_'+jsonBuilderHelper.getQuestionsList().indexOf(section.items[0]))\" class=\"prev\" ><i class=\"material-icons\">keyboard_arrow_left</i></a>\r\n                      </div>\r\n                      <div class=\"t1-slider-question slide-1 sec_{{secIndex}}_q_{{i}}\"\r\n                          [class.t1-slider-question-divider]=\"devMode\"\r\n                      >\r\n                        <div class=\"t1-slider-section\">\r\n                          <div class=\"t1-ques-inner\">\r\n                            <div class=\"t1-ques-head\">\r\n                              {{section.title}}\r\n                              <div class=\"help-outer\" *ngIf=\"section.showDesc\">\r\n                                <i class=\"material-icons\" >help_outline</i>\r\n                                <div class=\"help-text\">{{section.description}}</div>\r\n                              </div>\r\n                            </div>\r\n                            <div *ngFor=\"let control of section.items,let i=index\"\r\n                              [attr.data-order]=\"i+1\"\r\n                              >\r\n                              <div class=\"t1-ques-component\">\r\n                                <div class=\"question-components\">\r\n                                  <div class=\"full-width np text-center\">\r\n                                    <control [data]=\"control\"\r\n                                            (controlOutput)=\"(secIndex+1)!=getVisibleSections(page).length?onLeadFormSubmit($event,'sec_'+(secIndex+1)):\r\n                                            onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\r\n                                            (mousedown)=\"selectSection(section)\"\r\n                                            (click)=\"selectModel($event,'Section')\"\r\n                                            [devMode]=\"devMode\"\r\n\r\n                                    ></control>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"t1-slider-nav\" [class.hide]=\"devMode\">\r\n                        <a\r\n                            (click)=\"leadSubmit()\"\r\n                            class=\"next\"\r\n                        >\r\n                            <i class=\"material-icons\">done</i>\r\n                          </a>\r\n                      </div>\r\n                  </div>\r\n                  <!--Leadform-->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </section>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Preview/Functional HTML End-->\r\n    <!--Questionnaire End-->\r\n    <!--Result Start-->\r\n    <div class=\"{{'page_'+pageIndex}} t1-result\"\r\n         *ngIf=\"page.type=='Result'\"\r\n         [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\r\n         [style.backgroundImage]=\"(_templateRenderer.getBackground('img')) | safeStyle\"\r\n         [class.hide]=\"!devMode\"\r\n    >\r\n      <div class=\"t1-result-main t1-overlay\">\r\n        <!--Number Result Start-->\r\n        <section class=\"t1-result-top\" *ngIf=\"staticControls!={} && jsonBuilderHelper.getJSONBuilt().templateType =='Numerical'\">\r\n          <div class=\"t1-result-topheading\" *ngIf=\"staticControls.Result.result_header.visible\">\r\n               <control\r\n                  [data]=\"staticControls.Result.result_header\"\r\n                  class=\"{{staticControls.Result.result_header.defaultClass}}\"\r\n               ></control>\r\n          </div>\r\n          <div class=\"t1-result-inner\">\r\n            <div\r\n              *ngFor=\"let control of staticControls.Result.Result.items,let i=index\" [attr.data-order]=\"i+1\" class=\"{{control.defaultClass}}\"\r\n              [hidden]=\"!control.visible\"\r\n              (mousedown)=\"selectpage(page); selectControl(control);\"\r\n              (mouseup)=\"selectModel($event,'Page')\"\r\n              [ngClass]=\"{\r\n                            't1-result-small-section':(staticControls.Result.Result.title=='Result'),\r\n                            't1-result-full-section':(i==0)\r\n                         }\"\r\n            >\r\n              <div [ngClass]=\"{\r\n                                't1-result-small-container':(staticControls.Result.Result.title=='Result'),\r\n                                't1-result-full-container':(i==0)\r\n                              }\"\r\n              >\r\n                <control [data]=\"control\" (controlOutput)=\"onResultLeadFormSubmit($event)\" *ngIf=\"control.visible\"></control>\r\n              </div>\r\n            </div>\r\n            <div class=\"t1-result-leadform\">\r\n              <control\r\n                [data]=\"staticControls.Result.leadform\"\r\n                [page] =\"page\"\r\n                class=\"{{staticControls.Result.leadform.defaultClass}}\"\r\n                (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n                *ngIf=\"staticControls.Result.leadform.visible\"\r\n                 (click)=\"selectModel($event,'Page'); scrollToTopProperties()\"\r\n              ></control>\r\n              <control\r\n                [data]=\"staticControls.Result.click_button\"\r\n                class=\"{{staticControls.Result.click_button.defaultClass}}\"\r\n                (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n                *ngIf=\"staticControls.Result.click_button.visible\"\r\n                (click) = \"scrollToTopProperties()\"\r\n              ></control>\r\n            </div>\r\n            <div class=\"t1-result-disclaimer\">\r\n              <control\r\n                [data]=\"staticControls.Result.result_disclaimer\"\r\n                class=\"{{staticControls.Result.result_disclaimer.defaultClass}}\"\r\n                (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n                *ngIf=\"staticControls.Result.result_disclaimer.visible\"\r\n                (click) = \"scrollToTopProperties()\"\r\n              ></control>\r\n            </div>\r\n            <div class=\"t1-social-links\">\r\n              <control\r\n                [data]=\"staticControls.Result.share_links\"\r\n                class=\"{{staticControls.Result.share_links.defaultClass}}\"\r\n                (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n                *ngIf=\"staticControls.Result.share_links.visible\"\r\n              ></control>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        <!--Number Result End-->\r\n        <!--Recom Result Start-->\r\n        <section class=\"t1-result-top recommendation-outer\" *ngIf=\"staticControls!={} && jsonBuilderHelper.getJSONBuilt().templateType =='Recommendation' && jsonBuilderHelper.getSelectedFormula()\">\r\n            <div class=\"mid-width\" >\r\n              <p [innerHtml]=\"jsonBuilderHelper.getSelectedFormula().decimal | safeHtml\"></p>\r\n            </div>\r\n            <div class=\"col-xs-12 np t1-result-inner\" >\r\n              <div class=\"recom-section\">\r\n                <div class=\"col-md-6  col-sm-12  col-xs-12 np\"  *ngIf=\"jsonBuilderHelper.getSelectedFormula().range.status\" >\r\n                  <div class=\"left-sec\">\r\n                    <div class=\"left-outer\">\r\n                      <div class=\"rec-image-outer\">\r\n\r\n                        <!-- <span style=\"font-size: 45px\" *ngIf=\"loading\" >Loading</span> -->\r\n                        <img [src]=\"jsonBuilderHelper.getSelectedFormula().result\" >\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6  col-sm-12  col-xs-12 np\"\r\n                     [ngClass]=\"{\r\n                                  'w100': !(jsonBuilderHelper.getSelectedFormula().range.status)\r\n                                }\"\r\n                  >\r\n                  <div class=\"outer-main\">\r\n                    <div class=\"leadform-outer\">\r\n                      <h1>{{jsonBuilderHelper.getSelectedFormula().name}}</h1>\r\n                      <h5 *ngIf=\"jsonBuilderHelper.getSelectedFormula().html!=''\">\r\n                        <p [innerHtml]=\"jsonBuilderHelper.getSelectedFormula().html | safeHtml\">\r\n                      </h5>\r\n                      <div class=\"t1-result-leadform\">\r\n                        <control\r\n                          [data]=\"staticControls.Result.leadform\"\r\n                          [page] =\"page\"\r\n                          class=\"{{staticControls.Result.leadform.defaultClass}}\"\r\n                          (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n                          *ngIf=\"staticControls.Result.leadform.visible\"\r\n                          (click)=\"selectModel($event,'Outcome_Settings');\"\r\n                        ></control>\r\n                        <control\r\n                          [data]=\"staticControls.Result.click_button\"\r\n                          class=\"{{staticControls.Result.click_button.defaultClass}}\"\r\n                          (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n                          *ngIf=\"staticControls.Result.click_button.visible\"\r\n                          (click) = \"scrollToTopProperties()\"\r\n                        ></control>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <control\r\n                  [data]=\"staticControls.Result.result_disclaimer\"\r\n                  class=\"{{staticControls.Result.result_disclaimer.defaultClass}}\"\r\n                  (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n                  *ngIf=\"staticControls.Result.result_disclaimer.visible\"\r\n                  (click) = \"scrollToTopProperties()\"\r\n                ></control>\r\n                <div class=\"t1-social-links\">\r\n                  <control\r\n                    [data]=\"staticControls.Result.share_links\"\r\n                    class=\"{{staticControls.Result.share_links.defaultClass}}\"\r\n                    (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n                    *ngIf=\"staticControls.Result.share_links.visible\"\r\n                  ></control>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </section>\r\n        <!--Recom Result End-->\r\n      </div>\r\n    </div>\r\n    <!--Result End-->\r\n\t</div>\r\n</div>\r\n"

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = "<div *ngFor=\"let page of getVisiblePages(), let pageIndex=index\"\r\n     (mousedown)=\"selectpage(page)\"\r\n     class=\"{{page.defaultClass}} {{'page_'+pageIndex}} w100 {{devMode?'editor-page-divider':''}}\"\r\n     [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\r\n     [style.backgroundImage]=\"(page.type!='Questionnaire'?_templateRenderer.getBackground('img'):'') | safeStyle\"\r\n     [class.hide]=\"pageIndex && !devMode\"\r\n     [class.main-bg]=\"page.type=='Landing'\"\r\n     [class.margin-none]=\"page.type=='Result' && !devMode\"\r\n     (click)=\"selectModel($event,'Page')\"\r\n>\r\n\r\n  <section *ngIf=\"page.type=='Questionnaire'\"  >\r\n    <div>\r\n      <div class=\"questions-header que-fixed\" >\r\n        <header>\r\n          <div class=\"w100p p-right0 top-fix-bar\">\r\n            <div class=\"col-md-10 col-sm-12 col-xs-12 logo\">\r\n              <a href=\"#\">\r\n                <control\r\n                  [data]=\"staticControls.Landing.logo\"\r\n                  class=\"{{staticControls.Landing.logo.defaultClass}}\"\r\n                  *ngIf=\"staticControls.Landing.logo.visible\"\r\n                ></control>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-md-2 col-sm-3 col-xs-4 right-sec\" *ngIf=\"jsonBuilderHelper.getJSONBuilt().realTime\">\r\n              <i class=\" material-icons\">zmdi_info</i>\r\n              <p>your app estimate</p>\r\n              <span [fetch-result]=\"0\" >$500 - $1500</span>\r\n            </div>\r\n          </div>\r\n        </header>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section\r\n    *ngFor=\"let section of getVisibleSections(page), let secIndex=index\"\r\n    (mousedown)=\"selectSection(section)\"\r\n    class=\"{{section.defaultClass}}\"\r\n    [ngClass]=\"{\r\n                    'hide': section.defaultClass === 'right-section' && !section.items[0].visible,\r\n                    'w100': section.fullWidth\r\n                }\"\r\n  >\r\n    <div *ngIf=\"page.type=='Landing'\">\r\n      <div class=\"landing-responsive\">\r\n        <div\r\n          *ngFor=\"let control of section.items,let i=index\"\r\n          [attr.data-order]=\"i+1\"\r\n        >\r\n          <control [page] =\"page\" [data]=\"control\"\r\n                   (mousedown)=\"selectpage(page)\"\r\n                   (click)=\"selectModel($event,'Page')\"\r\n                   (controlOutput)=\"onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\r\n                   [devMode]=\"devMode\"   *ngIf=\"control.visible && control.type == 'leadform'\" >\r\n          </control>\r\n          <control  [data]=\"control\"\r\n\r\n                    [devMode]=\"devMode\"\r\n                    (controlOutput)=\"onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\r\n                    *ngIf=\"control.visible && control.type !== 'leadform'\" >\r\n          </control>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"page.type=='Questionnaire'\"  (click)=\"selectModel($event,'Section')\" >\r\n      <div class=\"questions {{'sec_'+secIndex}}\" [class.hide]=\"secIndex && !devMode\">\r\n        <div class=\" question-section-outer\">\r\n          <div class=\"w100\" >\r\n            <div class=\"question-head\">{{section.title}}</div>\r\n            <div class=\"question-subhead\" *ngIf=\"section.showDesc\">{{section.description}}\r\n            </div>\r\n            <div class=\"w100 text-center\"  *ngIf =\"section.type=='LeadFormQ'\">\r\n              <div\r\n                *ngFor=\"let control of section.items,let i=index\"\r\n                [attr.data-order]=\"i+1\"\r\n                class=\"sec_{{secIndex}}_q_{{i}}\"\r\n              >\r\n                <control [data]=\"control\"\r\n                         (controlOutput)=\"(secIndex+1)!=getVisibleSections(page).length?\r\n                                                    onLeadFormSubmit($event,'sec_'+(secIndex+1)):\r\n                                                    onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\r\n                         (mousedown)=\"selectSection(section)\"\r\n                         (click)=\"selectModel($event,'Section')\"\r\n                         [devMode]=\"devMode\">\r\n                </control>\r\n              </div>\r\n            </div>\r\n\r\n            <!--form start-->\r\n            <form (ngSubmit)=\"onSubmit(tvs.getFormGroups()[section._id])\" [formGroup]=\"tvs.getFormGroups()[section._id]\" novalidate *ngIf =\"section.type!='LeadFormQ'\">\r\n              <div class=\"question-section\">\r\n                <div\r\n                  *ngFor=\"let control of section.items,let i=index\"\r\n                  [attr.data-order]=\"i+1\"\r\n                  (mousedown)=\"selectControl(control)\"\r\n                  class=\"sec_{{secIndex}}_q_{{i}}\"\r\n                  (click)=\"selectModel($event,'Control')\"\r\n                >\r\n                  <div class=\"question-components\" >\r\n                    <div class=\"section-head\">\r\n                                                        <span class=\"pull-left\">\r\n                                                                {{control.props.title}}<span *ngIf=\"control.config.validations.required.status\" class=\"requiredAsteric\">*</span>\r\n                                                        <div class=\"help-outer\" *ngIf=\"control.config.showHelp\">\r\n                                                            <i class=\"material-icons\" >help_outline</i>\r\n                                                            <div class=\"help-text\">{{control.props.helpText}}</div>\r\n                                                        </div>\r\n                                                        </span>\r\n                    </div>\r\n                    <control [data]=\"control\" [form]=\"tvs.getFormGroups()[section._id]\"></control>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"w100 text-center\">\r\n                <button class=\"btn prime-action sliding-next\"\r\n\r\n                        (click)=\"onSubmit(tvs.getFormGroups()[section._id],section._id);\r\n                                                (secIndex+1)!= getVisibleSections(page).length?\r\n                                                onButtonClick($event,'sec_'+(secIndex+1)):\r\n                                                onButtonClick($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\r\n                                            \"\r\n                        [class.hide]=\"buttonShowHide\"\r\n                >\r\n                  <!--[themeColor]=\"['background']\"-->\r\n                  {{section.buttonTitle}}\r\n                </button>\r\n              </div>\r\n            </form>\r\n            <!--form end-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <div *ngIf=\"page.type=='Result'\">\r\n    <div class=\"result-overlay\">\r\n      <!-- for numerical calculators start-->\r\n      <div class=\"result-centre-outer\" *ngIf=\"staticControls!={} && jsonBuilderHelper.getJSONBuilt().templateType =='Numerical'\">\r\n        <!-- Control: result header-->\r\n        <control\r\n          [data]=\"staticControls.Result.result_header\"\r\n          class=\"{{staticControls.Result.result_header.defaultClass}}\"\r\n          *ngIf=\"staticControls.Result.result_header.visible\"\r\n        ></control>\r\n        <div class=\"col-xs-12 np\" *ngIf=\"staticControls.Result.Result\">\r\n          <!-- Control: result outputs-->\r\n          <div class=\"result-mid\">\r\n            <div\r\n              *ngFor=\"let control of staticControls.Result.Result.items,let i=index\" [attr.data-order]=\"i+1\" class=\"{{control.defaultClass}}\"\r\n              [hidden]=\"!control.visible\"\r\n              (mousedown)=\"selectpage(page); selectControl(control);\"\r\n              (mouseup)=\"selectModel($event,'Page')\"\r\n              [ngClass]=\"{\r\n                                    'result-small-section':(staticControls.Result.Result.title=='Result'),\r\n                                    'result-full-section':(staticControls.Result.Result.title=='Result' && ((((getVisibleItems(staticControls.Result.Result).length - 1) % 3)==1 && (i+1) == getVisibleItems(staticControls.Result.Result).length) || ((i+1) == 1))),\r\n                                    'result-half-section':(staticControls.Result.Result.title=='Result' && (((getVisibleItems(staticControls.Result.Result).length - 1) % 3)==2 && ((i+1) == getVisibleItems(staticControls.Result.Result).length || (i+1) == getVisibleItems(staticControls.Result.Result).length-1)))\r\n                                }\"\r\n            >\r\n              <control [data]=\"control\" (controlOutput)=\"onResultLeadFormSubmit($event)\" *ngIf=\"control.visible\"></control>\r\n\r\n            </div>\r\n          </div>\r\n          <!-- Control: leadform -->\r\n          <div class=\"leadform-outer\">\r\n            <control\r\n              [data]=\"staticControls.Result.leadform\"\r\n              [page] =\"page\"\r\n              class=\"{{staticControls.Result.leadform.defaultClass}}\"\r\n              (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n              *ngIf=\"staticControls.Result.leadform.visible\"\r\n              (click)=\"selectModel($event,'Page')\"\r\n            ></control>\r\n            <!-- Control: click_button -->\r\n            <control\r\n              [data]=\"staticControls.Result.click_button\"\r\n              class=\"{{staticControls.Result.click_button.defaultClass}}\"\r\n              (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n              *ngIf=\"staticControls.Result.click_button.visible\"\r\n              (click) = \"scrollToTopProperties()\"\r\n            ></control>\r\n          </div>\r\n        </div>\r\n        <!-- Control: result disclaimer -->\r\n        <control\r\n          [data]=\"staticControls.Result.result_disclaimer\"\r\n          class=\"{{staticControls.Result.result_disclaimer.defaultClass}}\"\r\n          (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n          *ngIf=\"staticControls.Result.result_disclaimer.visible\"\r\n          (click) = \"scrollToTopProperties()\"\r\n        ></control>\r\n        <div class=\"share-set\">\r\n          <!-- Control: share links -->\r\n          <control\r\n            [data]=\"staticControls.Result.share_links\"\r\n            class=\"{{staticControls.Result.share_links.defaultClass}}\"\r\n            (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n            *ngIf=\"staticControls.Result.share_links.visible\"\r\n          ></control>\r\n          <!-- Control: result redo -->\r\n\r\n          <!--<control\r\n              [data]=\"staticControls.Result.result_redo\"\r\n              class=\"{{staticControls.Result.result_redo.defaultClass}}\"\r\n              (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n              *ngIf=\"staticControls.Result.result_redo.visible\"\r\n          ></control>-->\r\n        </div>\r\n      </div>\r\n      <!-- for numerical calculators End -->\r\n\r\n      <!-- for recomended calculators -->\r\n      <div class=\"result-centre-outer recommendation-outer\" *ngIf=\"staticControls!={} && jsonBuilderHelper.getJSONBuilt().templateType =='Recommendation' && jsonBuilderHelper.getSelectedFormula()\">\r\n        <!-- Control: result header-->\r\n        <div class=\"mid-width\" ><p [innerHtml]=\"jsonBuilderHelper.getSelectedFormula().decimal | safeHtml\">\r\n        </p></div>\r\n        <div class=\"col-xs-12 np\" >\r\n          <div class=\"recom-section\">\r\n            <div class=\"col-md-6  col-sm-12  col-xs-12 np\"  *ngIf=\"jsonBuilderHelper.getSelectedFormula().range.status\" >\r\n              <div class=\"left-sec\">\r\n                <div class=\"left-outer\">\r\n                  <div class=\"rec-image-outer\">\r\n                    <img [src]=\"jsonBuilderHelper.getSelectedFormula().result\" >\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Control: leadform -->\r\n            <div class=\"col-md-6  col-sm-12  col-xs-12 np\"\r\n                 [ngClass]=\"{\r\n                                    'w100': !(jsonBuilderHelper.getSelectedFormula().range.status)\r\n                                    }\"\r\n            >\r\n              <div class=\"outer-main\">\r\n                <div class=\"leadform-outer\">\r\n                  <h1>{{jsonBuilderHelper.getSelectedFormula().name}}</h1>\r\n                  <h5>\r\n                    <p [innerHtml]=\"jsonBuilderHelper.getSelectedFormula().html | safeHtml\">\r\n                      <!--{{jsonBuilderHelper.getSelectedFormula().html}}-->\r\n                  </h5>\r\n\r\n                  <control\r\n                    [data]=\"staticControls.Result.leadform\"\r\n                    [page] =\"page\"\r\n                    class=\"{{staticControls.Result.leadform.defaultClass}}\"\r\n                    (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n                    *ngIf=\"staticControls.Result.leadform.visible\"\r\n                    (click)=\"selectModel($event,'Page')\"\r\n                  ></control>\r\n                  <!-- Control: click_button -->\r\n                  <control\r\n                    [data]=\"staticControls.Result.click_button\"\r\n                    class=\"{{staticControls.Result.click_button.defaultClass}}\"\r\n                    (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n                    *ngIf=\"staticControls.Result.click_button.visible\"\r\n                    (click) = \"scrollToTopProperties()\"\r\n                  ></control>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Control: result disclaimer -->\r\n        <control\r\n          [data]=\"staticControls.Result.result_disclaimer\"\r\n          class=\"{{staticControls.Result.result_disclaimer.defaultClass}}\"\r\n          (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n          *ngIf=\"staticControls.Result.result_disclaimer.visible\"\r\n          (click) = \"scrollToTopProperties()\"\r\n        ></control>\r\n        <div class=\"share-set\">\r\n          <!-- Control: share links -->\r\n          <control\r\n            [data]=\"staticControls.Result.share_links\"\r\n            class=\"{{staticControls.Result.share_links.defaultClass}}\"\r\n            (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n            *ngIf=\"staticControls.Result.share_links.visible\"\r\n          ></control>\r\n          <!-- Control: result redo -->\r\n        </div>\r\n      </div>\r\n      <!-- for recomended calculators End -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = "<div class=\"temp2-bg\"\r\n     *ngIf=\"!devMode\"\r\n     [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\r\n     [style.backgroundImage]=\"_templateRenderer.getBackground('img') | safeStyle\">\r\n  <div class=\"bg-overlay\"></div>\r\n</div>\r\n<div *ngFor=\"let page of getLandingPage(), let pageIndex=index\"\r\n     (mousedown)=\"selectpage(page)\" (click)=\"selectModel($event,'Page')\"\r\n     class=\"main-bg {{page.defaultClass}} {{'page_'+pageIndex}} w100\"\r\n     [class.hide]=\"pageIndex && !devMode\"\r\n     [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\r\n     [style.backgroundImage]=\"_templateRenderer.getBackground('img') | safeStyle\"\r\n>\r\n  <section *ngFor=\"let section of getVisibleSections(page),let secIndex=index\" (mousedown)=\"selectSection(section)\" class=\"{{section.defaultClass}}\"\r\n           [ngClass]=\"{\r\n                        'hide': section.items.length == 0\r\n                    }\">\r\n    <div *ngFor=\"let control of section.items,let i=index\" [attr.data-order]=\"i+1\" (mousedown)=\"selectControl(control)\">\r\n      <control [page] =\"page\" [data]=\"control\"\r\n              (mousedown)=\"selectpage(page)\"\r\n              (click)=\"selectModel($event,'Page')\"\r\n               (controlOutput)=\"onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\r\n               *ngIf=\"control.visible && control.type == 'leadform'\">\r\n      </control>\r\n      <control  [data]=\"control\"\r\n                [devMode]=\"devMode\"\r\n                (controlOutput)=\"onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\r\n                *ngIf=\"control.visible && control.type !== 'leadform'\" >\r\n      </control>\r\n    </div>\r\n  </section>\r\n</div>\r\n<div [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\r\n     [style.backgroundImage]=\"_templateRenderer.getBackground('img') | safeStyle\"\r\n     [class.divider-2]=\"devMode\"\r\n\r\n>\r\n  <div class=\"page-logo\" [class.hide]=\"getLandingPage().length && !devMode\">\r\n    <control [data]=\"staticControls.Landing.logo\"  *ngIf=\"staticControls!={}\"></control>\r\n  </div>\r\n  <div *ngFor=\"let page of getVisiblePages(), let pageIndex=index\" (mousedown)=\"selectpage(page)\" (click)=\"selectModel($event,'Page')\"\r\n       class=\"{{page.defaultClass}} {{'page_'+(pageIndex+1)}} w100 mobile-result-sticky\" [class.hide]=\"getLandingPage().length && !devMode\"\r\n  >\r\n    <section *ngFor=\"let section of getVisibleSections(page),let secIndex=index\" (mousedown)=\"selectSection(section)\" class=\"{{section.defaultClass}}\"\r\n             [ngClass]=\"{\r\n                        'hide': section.items.length == 0 ,\r\n                        'sroll-result': section.type=='Result'\r\n                    }\">\r\n      <div *ngIf=\"page.type=='Questionnaire'\" (click)=\"selectModel($event,'Section')\">\r\n        <div class=\"questions {{'sec_'+secIndex}}\">\r\n          <div class=\" question-section-outer\">\r\n            <div class=\"w100\">\r\n              <div class=\"question-head\">{{section.title}}</div>\r\n              <div class=\"question-subhead\" *ngIf=\"section.showDesc\">{{section.description}}\r\n              </div>\r\n              <form (ngSubmit)=\"onSubmit(tvs.getFormGroups()[section._id])\"\r\n                    [formGroup]=\"tvs.getFormGroups()[section._id]\"  *ngIf = \"section.type !=='LeadFormQ'\" novalidate>\r\n                <div class=\"question-section\">\r\n                  <div *ngFor=\"let control of section.items,let i=index\" [attr.data-order]=\"i+1\" (mousedown)=\"selectControl(control)\" class=\"sec_{{secIndex}}_q_{{i}}\"\r\n                       (click)=\"selectModel($event,'Control')\">\r\n                    <div class=\"question-number\" *ngIf=\"section.type !== 'LeadFormQ'\">{{i+1}}</div>\r\n\r\n                    <div class=\"question-components\" >\r\n                      <div class=\"section-head\">\r\n                                                <span class=\"pull-left\">\r\n                                                        {{control.props.title}}<span *ngIf=\"control.config.validations.required.status\" class=\"requiredAsteric\">*</span>\r\n                                                <div class=\"help-outer\">\r\n                                                    <i class=\"material-icons\" *ngIf=\"control.config.showHelp\">help_outline</i>\r\n                                                    <div class=\"help-text\" *ngIf=\"control.config.showHelp\">{{control.props.helpText}}</div>\r\n                                                </div>\r\n                                                </span>\r\n                      </div>\r\n                      <control [data]=\"control\" [form]=\"tvs.getFormGroups()[section._id]\"></control>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"w100 text-center\">\r\n                  <button class=\"btn prime-action sliding-next\" [disabled]=\"!tvs.getFormGroups()[section._id].valid\" (click)=\"onSubmit(tvs.getFormGroups()[section._id]);\r\n                                                    (secIndex+1)!=getVisibleSections(page).length?\r\n                                                    onButtonClick($event,'sec_'+(secIndex+1)):\r\n                                                    onButtonClick($event,'page_'+(pageIndex+1))\r\n                                                \" [class.hide]=\"buttonShowHide\" >\r\n                    <!--[themeColor]=\"['background']\"-->\r\n                    {{section.buttonTitle}}\r\n                  </button>\r\n                </div>\r\n              </form>\r\n              <form (ngSubmit)=\"onSubmit(tvs.getFormGroups()[section._id])\"\r\n                    [formGroup]=\"tvs.getFormGroups()[section._id]\"  *ngIf = \"section.type === 'LeadFormQ'\" novalidate>\r\n                <div class=\"question-section\">\r\n                  <div *ngFor=\"let control of section.items,let i=index\" [attr.data-order]=\"i+1\" (mousedown)=\"selectControl(section)\" class=\"sec_{{secIndex}}_q_{{i}}\"\r\n                       (click)=\"selectModel($event,'Section')\">\r\n                    <div class=\"question-number\" *ngIf=\"section.type !== 'LeadFormQ'\">{{i+1}}</div>\r\n                    <!--[themeColor]=\"['colorClass']\"-->\r\n                    <control [data]=\"control\" [form]=\"tvs.getFormGroups()[section._id]\"></control>\r\n                  </div>\r\n                </div>\r\n                <div class=\"w100 text-center\">\r\n                  <button class=\"btn prime-action sliding-next\" [disabled]=\"!tvs.getFormGroups()[section._id].valid\" (click)=\"onSubmit(tvs.getFormGroups()[section._id]);\r\n                                                    (secIndex+1)!=getVisibleSections(page).length?\r\n                                                    onButtonClick($event,'sec_'+(secIndex+1)):\r\n                                                    onButtonClick($event,'page_'+(pageIndex+1))\r\n                                                \" [class.hide]=\"buttonShowHide\" >\r\n                    <!--[themeColor]=\"['background']\"-->\r\n                    {{section.buttonTitle}}\r\n                  </button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <div class=\"temp2-scrollbar\"  *ngIf=\"page.type=='Result'\">\r\n      <a class=\"mobile-result-linkAdd\" (click)=\"mobilestickyAdd()\" href=\"javascript:void(0);\"><i class=\"material-icons\">keyboard_backspace</i> Back</a>\r\n      <control\r\n        [data]=\"staticControls.Result.result_header\"\r\n        class=\"{{staticControls.Result.result_header.defaultClass}}\"\r\n        *ngIf=\"staticControls.Result.result_header.visible\"\r\n      ></control>\r\n      <div *ngIf=\"staticControls.Result.Result\">\r\n        <div class=\"result-mid result-comm\" [class.result-scroller]=\"staticControls.Result.Result.items.length>3\">\r\n          <div\r\n            *ngFor=\"let control of staticControls.Result.Result.items,let i=index\" [attr.data-order]=\"i+1\" class=\"{{control.defaultClass}} \"\r\n            [hidden]=\"!control.visible\"\r\n            (mousedown)=\"selectpage(page); selectControl(control);\"\r\n            (mouseup)=\"selectModel($event,'Page')\"\r\n            [ngClass]=\"{\r\n                                    'result-temp2-default-section':true,\r\n                                    'result-full-section':(i==0),\r\n                                    'result-half-section':(i>0)\r\n                                }\"\r\n          >\r\n            <control [data]=\"control\"  *ngIf=\"control.visible\"></control>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"leadform-outer\">\r\n          <control\r\n            [data]=\"staticControls.Result.leadform\"\r\n            [page] = \"page\"\r\n            class=\"{{staticControls.Result.leadform.defaultClass}}\"\r\n            (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n            *ngIf=\"staticControls.Result.leadform.visible\"\r\n            (mousedown)=\"selectpage(page)\"\r\n            (click)=\"selectModel($event,'Page');scrollToTopProperties()\"\r\n          ></control>\r\n\r\n          <control\r\n            [data]=\"staticControls.Result.click_button\"\r\n            class=\"{{staticControls.Result.click_button.defaultClass}}\"\r\n            (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n            *ngIf=\"staticControls.Result.click_button.visible\"\r\n            (click) = \"scrollToTopProperties()\"\r\n          ></control>\r\n        </div>\r\n      </div>\r\n\r\n      <control\r\n        [data]=\"staticControls.Result.result_disclaimer\"\r\n        class=\"{{staticControls.Result.result_disclaimer.defaultClass}}\"\r\n        *ngIf=\"staticControls.Result.result_disclaimer.visible\"\r\n        (click) = \"scrollToTopProperties()\"\r\n      ></control>\r\n      <div class=\"share-set\">\r\n        <control\r\n          [data]=\"staticControls.Result.share_links\"\r\n          class=\"{{staticControls.Result.share_links.defaultClass}}\"\r\n          *ngIf=\"staticControls.Result.share_links.visible\"\r\n        ></control>\r\n        <!--<control\r\n            [data]=\"staticControls.Result.result_redo\"\r\n            class=\"{{staticControls.Result.result_redo.defaultClass}}\"\r\n            *ngIf=\"staticControls.Result.result_redo.visible\"\r\n        ></control>-->\r\n      </div>\r\n      <a class=\"mobile-result-link\" (click)=\"mobilestickyRemove()\" href=\"javascript:void(0);\"><i class=\"material-icons\">keyboard_arrow_up</i></a>\r\n      <!--<control\r\n          [data]=\"staticControls.Result.result_summary\"\r\n          class=\"{{staticControls.Result.result_summary.defaultClass}}\"\r\n          (controlOutput)=\"onResultLeadFormSubmit($event)\"\r\n          *ngIf=\"staticControls.Result.result_summary.visible\"\r\n      ></control>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 898:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalculatorService; });
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



var CalculatorService = (function (_super) {
    __extends(CalculatorService, _super);
    function CalculatorService(_http) {
        _super.call(this);
        this._http = _http;
    }
    CalculatorService.prototype.getCompanyApp = function (url, company) {
        var URL = this._url + '/builder/get_company_calculator/' + url + '/' + company;
        return this._http.get(URL, this.options)
            .map(this.extractData);
    };
    CalculatorService.prototype.getApp = function (url) {
        var URL = this._url + '/builder/get_calculator/' + url;
        return this._http.get(URL, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CalculatorService.prototype.getAppResult = function (url) {
        var URL = this._url + '/builder/get_calculator_result/' + url;
        return this._http.get(URL, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CalculatorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CalculatorService);
    return CalculatorService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__["a" /* BaseService */]));


/***/ },

/***/ 923:
/***/ function(module, exports) {

module.exports = "/*################### 404  css start ###################*/\r\nbody.main-profile{ overflow: hidden;}\r\n.navbar-brand{\r\n  padding: 0px;\r\n  margin-left: 10px !important;\r\n  margin-top: 5px;\r\n}\r\n.custom-navbar.navbar-default{\r\n  background:#fff;\r\n  border:none;\r\n  padding: 10px;\r\n  padding-right: 25px;\r\n  margin: 0px;\r\n}\r\n.custom-navbar.navbar-default .navbar-nav > li{\r\n  margin-right: 20px;\r\n}\r\n.custom-navbar.navbar-default .navbar-nav > li > a{\r\n  font-size: 14px;\r\n  color: #62696d;\r\n  text-transform: uppercase;\r\n}\r\n.custom-navbar.navbar-default .navbar-nav > li > a:hover{\r\n  color: #fb5f66;\r\n}\r\n.custom-navbar.navbar-default .navbar-nav > li > a.active{\r\n  color: #fb5f66;\r\n}\r\n.custom-navbar.navbar-default .navbar-nav > li > a.line-through{\r\n  text-decoration: line-through;\r\n}\r\n.custom-navbar .btn-login{\r\n  background: #fb5f66;\r\n  color: #fff !important;\r\n  text-transform: none !important;\r\n  padding: 3px 30px;\r\n  margin-top: 10px;\r\n  border: 2px solid #fb5f66;\r\n}\r\n.custom-navbar .btn-login:hover{\r\n  border: 2px solid #fb5f66;\r\n  background: none;\r\n  color: #fb5f66 !important;\r\n}\r\n.custom-navbar .link-login{\r\n  color: #fb6c73 !important;\r\n  /*padding: 3px 30px;\r\n  margin-top: 10px;\r\n  border: 2px solid #fff;*/\r\n  font-family:montserratbold;\r\n}\r\n.custom-navbar .link-login:hover{\r\n  /*border: 2px solid #fb5f66;*/\r\n  background: none;\r\n  color: #fb5f66 !important;\r\n  opacity:0.5;\r\n}\r\n.nav-boxshadow{\r\n  box-shadow:0 2px 9px 1px rgba(0,0,0,0.2);\r\n}\r\n.section{\r\n  float: left;\r\n  width: 100%;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n.section-1{\r\n  float: left;\r\n  width: 100%;\r\n  background: #fff;\r\n  padding-top: 52px;\r\n  padding-bottom: 30px;\r\n  margin-bottom: 0;\r\n}\r\n.section-1 .container-fluid{\r\n  padding: 0px;\r\n}\r\n.section-1-left{\r\n  padding-left: 55px;\r\n  display: table;\r\n}\r\n.section1-left-cell{\r\n  display: table-cell;\r\n  height: 83vh;\r\n  vertical-align: middle;\r\n}\r\n.section-1-left h3{\r\n  float: left;\r\n  width: 100%;\r\n  font-size: 36px;\r\n  font-family:montserratbold;\r\n  color: #fb6c73;\r\n  text-transform: uppercase;\r\n  margin-bottom: 30px;\r\n  margin-top: 0px;\r\n}\r\n.section-1-left h4{\r\n  float: left;\r\n  width: 100%;\r\n  font-size: 24px;\r\n  font-family:montserratlight;\r\n  color: #62696d;\r\n  margin-bottom: 30px;\r\n}\r\n.section-1-left input{\r\n  padding: 10px;\r\n  width: 70%;\r\n}\r\n.section-1-left .btn-buildcal{\r\n  background: #62696d;\r\n  border: none;\r\n  color: #fff;\r\n  float: left;\r\n  font-size: 18px;\r\n  text-transform: uppercase;\r\n  padding: 15px 25px;\r\n  margin-top: 20px;\r\n}\r\n.section-1-left .btn-buildcal i{\r\n  display: inline-block;\r\n  float:left;\r\n  margin-right: 10px;\r\n}\r\n.section-1-left .btn-bottominfo{\r\n  float: left;\r\n  width: 282px;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n.section-1-left .btn-bottominfo span{\r\n  float: none;\r\n  width: 100%;\r\n  color: #fb6c73;\r\n  font-size: 12px;\r\n  font-family: montserratbold;\r\n  text-align: left;\r\n}\r\n.section-1-left .btn-bottominfo label{\r\n  float: none;\r\n  width: 100%;\r\n  color: #62696d;\r\n  font-size: 12px;\r\n  font-family: montserratlight;\r\n}\r\n\r\n.section-1-left h3.heading-404{\r\n  float: left;\r\n  width: 100%;\r\n  font-size: 72px;\r\n  font-family: montserratsemibold;\r\n  color: #fb6c73;\r\n  text-transform: uppercase;\r\n  margin-bottom:0px;\r\n  margin-top: 0px;\r\n}\r\n.section-1-left h4.heading2-404 {\r\n  float: left;\r\n  width: 100%;\r\n  font-size: 18px;\r\n  font-family: montserratlight;\r\n  color: #62696d;\r\n  margin-bottom: 30px;\r\n  line-height: 25px;\r\n}\r\n.section-1 .btn-buildcal.login-404{\r\n  background: #62696d;\r\n  border: none;\r\n  color: #fff;\r\n  float: left;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  border:2px solid #62696d;\r\n  padding: 15px 25px;\r\n  margin-top: 20px;\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n}\r\n.section-1 .btn-buildcal.login-404:hover{\r\n  background:none;\r\n  border:2px solid #62696d;\r\n  color:#62696d;\r\n}\r\n.sec1-box-left.img-404{\r\n  margin-top: 18%;\r\n}\r\n.footer-404{\r\n  position: fixed;\r\n  bottom: 15px;\r\n}\r\n.footer-404 i{\r\n  font-size: 14px;\r\n  color: #62696d;\r\n  position: relative;\r\n  top: 2px;\r\n  right: 4px;\r\n}\r\n.footer-404 span{\r\n  font-family: \"montserratlight\";\r\n  font-size: 14px;\r\n  color: #62696d;\r\n}\r\n.footer-404 img{\r\n  position: relative;\r\n  top: -3px;\r\n  right: -5px;\r\n}\r\n\r\n\r\n/*################### 404  css end ###################*/\r\n"

/***/ }

});
//# sourceMappingURL=4.map