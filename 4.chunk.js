webpackJsonp([4,12],{

/***/ 1010:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calculator_service__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_script_service__ = __webpack_require__(114);
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
    function CalculatorComponent(_calService, subDomainService, _cookieService, _router, _script) {
        this._calService = _calService;
        this.subDomainService = subDomainService;
        this._cookieService = _cookieService;
        this._router = _router;
        this._script = _script;
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
            //load scripts
            this._script.load('rangeSlider', 'math', 'iFrameResizer')
                .then(function (data) {
                console.log('Scripts', data);
            })
                .catch(function (error) {
                //any error
            });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-calc',
            template: __webpack_require__(1141),
            styles: [__webpack_require__(920)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_calculator_service__["a" /* CalculatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_calculator_service__["a" /* CalculatorService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["a" /* SubDomainService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["b" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["b" /* CookieService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_script_service__["a" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_script_service__["a" /* Script */]) === 'function' && _e) || Object])
    ], CalculatorComponent);
    return CalculatorComponent;
    var _a, _b, _c, _d, _e;
}());


/***/ },

/***/ 1011:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calculator_service__ = __webpack_require__(896);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-seo-calc',
            template: "<Temp *ngIf=\"tempName\" [JSON_Template]=\"JSON_Template\"></Temp>",
            styles: [__webpack_require__(920)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_calculator_service__["a" /* CalculatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_calculator_service__["a" /* CalculatorService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], SeoComponent);
    return SeoComponent;
    var _a, _b;
}());


/***/ },

/***/ 1141:
/***/ function(module, exports) {

module.exports = "<!--<div *ngIf=\"!tempName\" class=\"loader-live\"></div>-->\n\n<Temp *ngIf=\"tempName\" [JSON_Template]=\"JSON_Template\"></Temp>\n\n<div *ngIf=\"pageStatus==='Not-Found'\">\n  <nav class=\"navbar custom-navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"index.html\"><img src=\"assets/images/outgrow-logo.png\" /></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a href=\"javascript:void(0);\" (click)=\"whyCalculators()\">Why Calculators ?</a></li>\n          <li><a href=\"javascript:void(0);\" (click)=\"features()\">Featuress</a></li>\n          <li><a href=\"javascript:void(0);\" (click)=\"pricing()\">Pricing</a></li>\n          <li><a href=\"javascript:void(0);\" (click)=\"examples()\">Examples</a></li>\n          <li>\n            <a *ngIf=\"!isLoggedin\" href=\"javascript:void(0);\" class=\"link-login\" (click)=\"login()\">Login</a>\n            <a *ngIf=\"isLoggedin\" href=\"javascript:void(0);\" class=\"link-login\" (click)=\"dashboard()\">Dashboard</a>\n          </li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n  <!-- Homepage header end-->\n  <!-- Homepage section 1 start-->\n  <section class=\"section section-1\">\n    <div class=\"container-fluid\">\n      <div class=\"col-xs-12 col-sm-6 section-1-left\">\n        <div class=\"section1-left-cell\">\n          <h3 class=\"mk-animate-element fade-in heading-404\">\n            404\n          </h3>\n          <h4 class=\"mk-animate-element fade-in heading2-404\">\n            Looks like your calc is not published yet, please<br> login and publish your calc.\n          </h4>\n          <div class=\"form-group mk-animate-element fade-in hide\">\n            <input type=\"text\" placeholder=\"Email Address\" />\n          </div>\n          <div class=\"col-xs-12 col-sm-8 np\">\n            <a *ngIf=\"!isLoggedin\" href=\"javascript:void(0);\" class=\"btn-buildcal mk-animate-element fade-in login-404\" (click)=\"login()\">Login</a>\n            <a *ngIf=\"isLoggedin\" href=\"javascript:void(0);\" class=\"btn-buildcal mk-animate-element fade-in login-404\" (click)=\"dashboard()\">Dashboard</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 np rs-hide\">\n        <div class=\"sec1-box-left img-404\">\n          <div class=\"sec1-box1 mk-animate-element fade-in\">\n            <img src=\"assets/images/404.png\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-12 text-center footer-404\">\n        <i class=\"material-icons\">copyright</i>\n        <span>Copyrights</span>\n        <img src=\"assets/images/footer-logo-dark.png\" />\n      </div>\n    </div>\n  </section>\n</div>\n\n<div *ngIf=\"pageStatus==='Private'\">\n  Calculator is no longer available for Public Use.\n</div>\n"

/***/ },

/***/ 784:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculator_component__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_logged_in_service__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_calculator_service__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__templateAll_template_module__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__builder_services_builder_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__seo_component__ = __webpack_require__(1011);
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

/***/ 787:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_service__ = __webpack_require__(791);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_models_model__ = __webpack_require__(790);
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

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_model__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_model__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_model__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calc_email_model__ = __webpack_require__(804);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__app_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__page_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__section_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__item_model__["a"]; });
/* unused harmony reexport CalcEmail */







/***/ },

/***/ 791:
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

/***/ 792:
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

/***/ 793:
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

/***/ 794:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customValidation__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(787);
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

/***/ 796:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(55);
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

/***/ 797:
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

/***/ 798:
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

/***/ 799:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__itemNames_store__ = __webpack_require__(805);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controls__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_themeColor_directive__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_result_directive__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_htmlprocessor_directive__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__builder_services_formula_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__builder_services_UrlShortner_service__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_customValidation__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__control_component__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_fetchResult_directive__ = __webpack_require__(807);
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

/***/ 804:
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

/***/ 805:
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

/***/ 806:
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
    App.prototype.duplicateFormula = function (formula) {
        this.formula.push(JSON.parse(JSON.stringify(formula)));
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

/***/ 807:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__ = __webpack_require__(792);
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

/***/ 808:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__ = __webpack_require__(792);
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

/***/ 809:
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

/***/ 810:
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

/***/ 811:
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

/***/ 812:
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
            template: __webpack_require__(835)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], Checkbox);
    return Checkbox;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 813:
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
            template: "\n          <textfield *ngIf=\"data.type=='textfield'\" [data]=\"data\" [form]=\"form\" (controlOutput)=\"onControlOutput($event)\"></textfield>\n          <text_area *ngIf=\"data.type=='text-area'\" [data]=\"data\"  ></text_area>\n          <selectbox *ngIf=\"data.type=='selectbox'\" [data]=\"data\" [form]=\"form\" ></selectbox>\n          <radio-button *ngIf=\"data.type=='radio_button'\" [data]=\"data\" [form]=\"form\" (controlOutput)=\"onControlOutput($event)\"></radio-button>\n          <og-header *ngIf=\"data.type=='header'\" [data]=\"data\" ></og-header>\n          <sub_header *ngIf=\"data.type=='sub_header'\" [data]=\"data\" ></sub_header>\n          <click-button *ngIf=\"data.type=='click_button'\" [data]=\"data\" [page]=\"page\"\n            (controlOutput)=\"onControlOutput($event)\" ></click-button>\n      \t\t<logo *ngIf=\"data.type=='logo'\" [data]=\"data\" ></logo>\n          <slider *ngIf=\"data.type=='slider'\" [data]=\"data\" ></slider>\n          <leadform_question *ngIf=\"data.type=='leadform_question'\" [data]=\"data\"\n            (controlOutput)=\"onControlOutput($event)\" ></leadform_question>\n          <leadform *ngIf=\"data.type=='leadform'\" [data]=\"data\" [page]=\"page\"\n           (controlOutput)=\"onControlOutput($event)\" ></leadform>\n          <poweredby *ngIf=\"data.type=='poweredby'\"  [data]=\"data\" ></poweredby>\n          <footer-links *ngIf=\"data.type=='footer_links'\"  [data]=\"data\" ></footer-links>\n          <checkbox *ngIf=\"data.type=='checkbox'\" [data]=\"data\" [form]=\"form\"></checkbox>\n          <switchbox *ngIf=\"data.type=='switchbox'\" [data]=\"data\" [form]=\"form\" ></switchbox>\n          <result_output *ngIf=\"data.type=='result_output'\" [data]=\"data\" ></result_output>\n          <result_header *ngIf=\"data.type=='result_header'\" [data]=\"data\" ></result_header>\n          <share_links *ngIf=\"data.type=='share_links'\"  [data]=\"data\" ></share_links>\n          <result_disclaimer *ngIf=\"data.type=='result_disclaimer'\" [data]=\"data\" ></result_disclaimer>\n          <result_redo *ngIf=\"data.type=='result_redo'\" [data]=\"data\" ></result_redo>\n      ",
        }), 
        __metadata('design:paramtypes', [])
    ], Control);
    return Control;
    var _a;
}());


/***/ },

/***/ 814:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__textfield_textfield_component__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textarea_textarea_component__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectbox_selectbox_component__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radiobutton_radiobutton_component__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sub_header_sub_header_component__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button_button_component__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logo_logo_component__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slider_slider_component__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leadform_leadform_component__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__leadform_question_leadform_question_component__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_poweredby_component__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_links_component__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__checkbox_checkbox_component__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__switch_switchbox_component__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__resultoutput_resultoutput_component__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__resultheader_resultheader_component__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sharelinks_sharelinks_component__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__resultredo_redo_component__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__resultdisclaimer_resultdisclaimer_component__ = __webpack_require__(822);
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

/***/ 815:
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

/***/ 816:
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
            template: "\n\t\t<div class=\" text-right\" *ngIf=\"data.visible == true\" >\n\t\t\t<div class=\" powered-by\">\n\t\t\t\t<span>Powered by </span>\n\t\t\t\t<a href=\"{{url}}\" target=\"_blank\">\n\t\t\t\t\t\t<img src=\"https://cdn.filestackcontent.com/tqowVp1lQYSVmPLRr8Hu\" alt=\"Powered By\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], PoweredByComponent);
    return PoweredByComponent;
}());


/***/ },

/***/ 817:
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

/***/ 818:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customValidation__ = __webpack_require__(793);
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
            template: __webpack_require__(836),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], LeadForm);
    return LeadForm;
    var _a, _b;
}());


/***/ },

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customValidation__ = __webpack_require__(793);
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
            template: __webpack_require__(837),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], LeadFormQuestion);
    return LeadFormQuestion;
    var _a, _b;
}());


/***/ },

/***/ 820:
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

/***/ 821:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'radio-button',
            template: __webpack_require__(838)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], RadioButton);
    return RadioButton;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 822:
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

/***/ 823:
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

/***/ 824:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(787);
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
            template: __webpack_require__(839),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object])
    ], ResultOutput);
    return ResultOutput;
    var _a;
}());


/***/ },

/***/ 825:
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

/***/ 826:
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
            template: __webpack_require__(840),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], SelectBox);
    return SelectBox;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 827:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__ = __webpack_require__(798);
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

/***/ 828:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_formula_service__ = __webpack_require__(792);
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
            template: __webpack_require__(841),
            // template:'Hello',
            styles: [
                __webpack_require__(833),
                __webpack_require__(834),
            ],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_formula_service__["a" /* FormulaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_formula_service__["a" /* FormulaService */]) === 'function' && _c) || Object])
    ], Slider);
    return Slider;
    var _a, _b, _c;
}());


/***/ },

/***/ 829:
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

/***/ 830:
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
            template: __webpack_require__(842),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object])
    ], SwitchBox);
    return SwitchBox;
    var _a, _b, _c;
}());


/***/ },

/***/ 831:
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

/***/ 832:
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
            template: __webpack_require__(843)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object])
    ], TextField);
    return TextField;
    var _a, _b, _c;
}());


/***/ },

/***/ 833:
/***/ function(module, exports) {

module.exports = "/* Ion.RangeSlider\n// css version 2.0.3\n// © 2013-2014 Denis Ineshin | IonDen.com\n// ===================================================================================================================*/\n\n/* =====================================================================================================================\n// RangeSlider */\n\n.irs {\n    position: relative; display: block;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n     -khtml-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n    .irs-line {\n        position: relative; display: block;\n        overflow: hidden;\n        outline: none !important;\n    }\n        .irs-line-left, .irs-line-mid, .irs-line-right {\n            position: absolute; display: block;\n            top: 0;\n        }\n        .irs-line-left {\n            left: 0; width: 11%;\n        }\n        .irs-line-mid {\n            left: 9%; width: 82%;\n        }\n        .irs-line-right {\n            right: 0; width: 11%;\n        }\n\n    .irs-bar {\n        position: absolute; display: block;\n        left: 0; width: 0;\n    }\n        .irs-bar-edge {\n            position: absolute; display: block;\n            top: 0; left: 0;\n        }\n\n    .irs-shadow {\n        position: absolute; display: none;\n        left: 0; width: 0;\n    }\n\n    .irs-slider {\n        position: absolute; display: block;\n        cursor: default;\n        z-index: 1;\n    }\n        .irs-slider.single {\n\n        }\n        .irs-slider.from {\n\n        }\n        .irs-slider.to {\n\n        }\n        .irs-slider.type_last {\n            z-index: 2;\n        }\n\n    .irs-min {\n        position: absolute; display: block;\n        left: 0;\n        cursor: default;\n    }\n    .irs-max {\n        position: absolute; display: block;\n        right: 0;\n        cursor: default;\n    }\n\n    .irs-from, .irs-to, .irs-single {\n        position: absolute; display: block;\n        top: 0; left: 0;\n        cursor: default;\n        white-space: nowrap;\n    }\n\n.irs-grid {\n    position: absolute; display: none;\n    bottom: 0; left: 0;\n    width: 100%; height: 20px;\n}\n.irs-with-grid .irs-grid {\n    display: block;\n}\n    .irs-grid-pol {\n        position: absolute;\n        top: 0; left: 0;\n        width: 1px; height: 8px;\n        background: #000;\n    }\n    .irs-grid-pol.small {\n        height: 4px;\n    }\n    .irs-grid-text {\n        position: absolute;\n        bottom: 0; left: 0;\n        white-space: nowrap;\n        text-align: center;\n        font-size: 9px; line-height: 9px;\n        padding: 0 3px;\n        color: #000;\n    }\n\n.irs-disable-mask {\n    position: absolute; display: block;\n    top: 0; left: -1%;\n    width: 102%; height: 100%;\n    cursor: default;\n    background: rgba(0,0,0,0.0);\n    z-index: 2;\n}\n.irs-disabled {\n    opacity: 0.4;\n}\n.lt-ie9 .irs-disabled {\n    filter: alpha(opacity=40);\n}\n\n\n.irs-hidden-input {\n    position: absolute !important;\n    display: block !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 0 !important;\n    height: 0 !important;\n    font-size: 0 !important;\n    line-height: 0 !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    outline: none !important;\n    z-index: -9999 !important;\n    background: none !important;\n    border-style: solid !important;\n    border-color: transparent !important;\n}\n"

/***/ },

/***/ 834:
/***/ function(module, exports) {

module.exports = "/* Ion.RangeSlider, Simple Skin\n// css version 2.0.3\n// © Denis Ineshin, 2014    https://github.com/IonDen\n// © guybowden, 2014        https://github.com/guybowden\n// ===================================================================================================================*/\n\n/* =====================================================================================================================\n// Skin details */\n\n.irs {\n    height: 55px;\n}\n.irs-with-grid {\n    height: 75px;\n}\n.irs-line {\n    height: 10px; top: 33px;\n    background: #EEE;\n    background: linear-gradient(to bottom, #DDD -50%, #FFF 150%); /* W3C */\n    border: 1px solid #CCC;\n    border-radius: 16px;\n    -moz-border-radius: 16px;\n}\n    .irs-line-left {\n        height: 8px;\n    }\n    .irs-line-mid {\n        height: 8px;\n    }\n    .irs-line-right {\n        height: 8px;\n    }\n\n.irs-bar {\n    height: 10px; top: 33px;\n    border-top: 1px solid #428bca;\n    border-bottom: 1px solid #428bca;\n    background: #428bca;\n    background: linear-gradient(to top, rgba(66,139,202,1) 0%,rgba(127,195,232,1) 100%); /* W3C */\n}\n    .irs-bar-edge {\n        height: 10px; top: 33px;\n        width: 14px;\n        border: 1px solid #428bca;\n        border-right: 0;\n        background: #428bca;\n        background: linear-gradient(to top, rgba(66,139,202,1) 0%,rgba(127,195,232,1) 100%); /* W3C */\n        border-radius: 16px 0 0 16px;\n        -moz-border-radius: 16px 0 0 16px;\n    }\n\n.irs-shadow {\n    height: 2px; top: 38px;\n    background: #000;\n    opacity: 0.3;\n    border-radius: 5px;\n    -moz-border-radius: 5px;\n}\n.lt-ie9 .irs-shadow {\n    filter: alpha(opacity=30);\n}\n\n.irs-slider {\n    top: 25px;\n    width: 27px; height: 27px;\n    border: 1px solid #AAA;\n    background: #DDD;\n    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(220,220,220,1) 20%,rgba(255,255,255,1) 100%); /* W3C */\n    border-radius: 27px;\n    -moz-border-radius: 27px;\n    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);\n    cursor: pointer;\n}\n\n.irs-slider.state_hover, .irs-slider:hover {\n    background: #FFF;\n}\n\n.irs-min, .irs-max {\n    color: #333;\n    font-size: 12px; line-height: 1.333;\n    text-shadow: none;\n    top: 0;\n    padding: 1px 14px;\n    background: rgba(0,0,0,0.1);\n    border-radius: 8px;\n    -moz-border-radius: 8px;\n}\n\n.lt-ie9 .irs-min, .lt-ie9 .irs-max {\n    background: #ccc;\n}\n\n.irs-from {\n    color: #fff;\n    font-size: 14px; line-height: 1.333;\n    text-shadow: none;\n    padding: 1px 14px;\n    background: #428bca;\n    border-radius:8px;\n    -moz-border-radius: 8px;\n}\n\n.irs-to {\n    color: #fff;\n    font-size: 14px; line-height: 1.333;\n    text-shadow: none;\n    padding: 1px 14px;\n    background: #428bca;\n    border-radius:8px;\n    -moz-border-radius: 8px;\n}\n\n.irs-single {\n    color: #fff;\n    font-size: 12px; line-height: 1.333;\n    text-shadow: none;\n    padding: 1px 14px;\n    background: #428bca;\n    border-radius: 8px;\n    -moz-border-radius: 8px;\n}\n.lt-ie9 .irs-from, .lt-ie9 .irs-to, .lt-ie9 .irs-single {\n    background: #999;\n}\n\n.irs-grid {\n    height: 27px;\n}\n.irs-grid-pol {\n    opacity: 0.5;\n    background: #428bca;\n}\n.irs-grid-pol.small {\n    background: #999;\n}\n\n.irs-grid-text {\n    bottom: 5px;\n    color: #99a4ac;\n}\n\n.irs-disabled {\n}\n"

/***/ },

/***/ 835:
/***/ function(module, exports) {

module.exports = "<div class=\"check-comp\" [formGroup]=\"form.controls[data._id]\">\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\n    <img [src]=\"data.imageURL\" />\n  </div>\n  <div [class.checkbox-outer-base]=\"!data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\n       [class.checkbox-outer]=\"data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\n       [class.pic-selector]=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"\n       [class.active]=\"checkbox_item.selected\"\n       *ngFor=\"let checkbox_item of data.options, let i = index\" tabindex=\"0\"\n  >\n    <label onclick=\"\" class=\"control control--checkbox\"  [ngStyle]=\"{'background-image': 'url('+((data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card')?checkbox_item.imageURL:'')+')'}\" >\n      <span *ngIf=\"!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'\">{{checkbox_item.label}}</span>\n      <input type=\"checkbox\"\n             [id]=\"data._id\"\n             (change)=\"onChange($event,i)\"\n             id=\"{{data._id}}{{i}}\"\n             [checked]=\"checkbox_item.selected\"\n             [formControlName]=\"i\"\n             value=\"{{checkbox_item.value}}\"\n      >\n      <div class=\"control__indicator check-set\">\n        <i\n          class=\"material-icons\"\n          *ngIf=\"checkbox_item.icon != '' && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\n        >\n          {{checkbox_item.icon}}\n        </i>\n        <i\n          class=\"material-icons\"\n          *ngIf=\"checkbox_item.icon == '' && data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\n        >\n          landscape\n        </i>\n        <div class=\"label-image\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"></div>\n        <span class=\"img-overlay\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\n          <span class=\"text-overlay\">\n            <span>{{checkbox_item.label}}</span>\n          </span>\n        </span>\n      </div>\n    </label>\n  </div>\n\n  <div class=\"errorMessage\" *ngIf=\"(form.controls[data._id].touched || touched) && !isValid\">\n    {{data.config.validations.required.message}}\n  </div>\n</div>\n"

/***/ },

/***/ 836:
/***/ function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(formGroup())\" [formGroup]=\"formGroup()\" *ngIf=\"data.visible\" novalidate>\n  <div class=\"container-temp text-center\">\n    <div class=\"lead-heading-temp1\" *ngIf=\"page && page.type ==='Result'\">\n      {{page.sections[2].title}}\n    </div>\n    <div>\n      <div class=\"input-section\">\n        <div *ngFor=\"let field of data.fields, let i=index\" class=\"input-outer\" [class.w100]=\"data.fields.length==1\">\n          <input tabindex=\"0\" placeholder=\"{{field.placeholder}}\" type=\"{{field.type}}\" (blur)=\"onTouched(i)\" [formControlName]=\"i\"\n            [(ngModel)]=\"field.value\">\n          <div *ngIf=\"formGroup().controls[i].touched\">\n            <span *ngIf=\"formGroup().controls[i].errors && formGroup().controls[i].errors['required']\">\n                      {{(field.type=='firstName'?'Name':(field.type=='tel'?'Phone Number':(field.type=='lastName'?'Others':field.type)))}} is required.\n                    </span>\n            <span *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['EmailError']\">\n                      Not a valid Email!\n                    </span>\n            <span *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['PhoneNumberError']\">\n                      Not a valid Phone Number!\n                    </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-temp text-center\">\n    <button class=\"btn prime-action\" *ngIf=\"page.type !=='Result'\">\n      {{data.props.title}}\n    </button>\n    <a class=\"btn prime-action\" *ngIf=\"page.type ==='Result'\"\n      [attr.href]=\"jsonBuilderHelper.getJSONBuilt().navigate_Url\"\n      target=\"_blank\"\n      [class.hide] =\"leadsaved\"\n      (click)=\"preventdefault($event)\">\n       {{data.props.title}}\n    </a>\n  </div>\n</form>\n"

/***/ },

/***/ 837:
/***/ function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(formGroup())\" [formGroup]=\"formGroup()\" novalidate>\n  <div class=\"container-temp text-center\">\n    <div class=\" text-center question-section\">\n      <div class=\"input-section\">\n        <div *ngFor=\"let field of data.fields, let i=index\" class=\"input-outer\" [class.w100]=\"data.fields.length==1\">\n          <div class=\"section-head\"> <div class=\"pull-left\">{{field.name}} </div> </div>\n          <input tabindex=\"0\"\n                 placeholder=\"{{field.placeholder}}\"\n                 type=\"{{field.type}}\"\n                 (blur) = \"onTouched(i)\"\n                 [formControlName]=\"i\"\n                 [(ngModel)]=\"field.value\"\n          >\n          <div *ngIf=\"formGroup().controls[i].touched\">\n                    <span\n                      *ngIf=\"formGroup().controls[i].errors && formGroup().controls[i].errors['required']\">\n                      {{(field.type=='firstName'?'Name':(field.type=='tel'?'Phone Number':(field.type=='lastName'?'Others':field.type)))}} is required.\n                    </span>\n            <span\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['EmailError']\">\n                      Not a valid Email!\n                    </span>\n            <span\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['PhoneNumberError']\">\n                      Not a valid Phone Number!\n                    </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"w100 text-center\">\n    <button class=\"btn prime-action sliding-next og-lead-ques\"\n    >\n      <!--[themeColor]=\"['background']\"-->\n      {{data.props.title}}\n    </button>\n  </div>\n</form>\n"

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = "<div class=\"check-comp\" [formGroup]=\"form.controls[data._id]\">\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\n    <img [src]=\"data.imageURL\" />\n  </div>\n  <div class=\"radio-outer\" \n    [class.active]=\"radio_item.selected\" \n    *ngFor=\"let radio_item of data.options, let i = index\" \n    tabindex=\"0\"\n    [class.pic-selector]=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"\n  >\n    <label   [class.no-icon]=\"!data.isIconPresent\" onclick=\"\" class=\"control control--radio lable-style\" [ngStyle]=\"{'background-image': 'url('+((data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card')?radio_item.imageURL:'')+')'}\">\n      <span *ngIf=\"!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'\">{{radio_item.label}}</span>\n      <input type=\"radio\"\n             id=\"{{data._id}}{{i}}\"\n             [formControlName]=\"i\"\n             [checked]=\"radio_item.selected\"\n             (change)=\"onClick(radio_item)\"\n      />\n      <div class=\"control__indicator icon-set\" [class.icon-set]=\"data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\">\n        <i\n          class=\"material-icons\"\n          *ngIf=\"(radio_item.icon != '' && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'))\"\n        >\n          {{radio_item.icon}}\n        </i>\n        <i\n          class=\"material-icons\"\n          *ngIf=\"radio_item.icon == '' && data.isIconPresent  && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\n        >\n          landscape\n        </i>\n        <div class=\"label-image\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"></div>\n        <span class=\"img-overlay\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\n          <span class=\"text-overlay\">\n            <span>{{radio_item.label}}</span>\n          </span>\n        </span>\n      </div>\n    </label>\n  </div>\n  <!-- <span *ngIf=\"form.controls[data._id].touched\">\n      <div class=\"errorMessage\" *ngIf=\"!isValid\">{{data.config.validations.required.message}}</div>\n  </span> -->\n  <div class=\"errorMessage\" *ngIf=\"(form.controls[data._id].touched) && !isValid\">\n    {{data.config.validations.required.message}}\n  </div>\n</div>"

/***/ },

/***/ 839:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"data.visible == true\">\n  <div\n\n  >\n    <div\n      class=\"small-top-sec\"\n      *ngIf=\"!data.hasOwnProperty('result')\"\n      [htmlProcess]=\"data.props.title\"\n    >\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = "<div class=\"dropdown-set\">\n  <div class=\"control-group select\" [formGroup]=\"form\" tabindex=\"0\">\n    <select class=\"demo-default {{data._id}} \" [(ngModel)]=\"data.props.currentValue\" [id]=\"data._id\" (change)=\"onChange($event)\" [formControlName]=\"data._id\">\n      <option tabindex=\"0\"\n              *ngFor=\"let option of data.options; let i = index\"\n              id=\"{{data._id}}{{i}}\"\n              [value]=\"option.value\"\n              [selected]=\"option.selected\"\n      >\n        {{option.label}}\n      </option>\n    </select>\n    <div class=\"select__arrow\"></div>\n    <div class=\"errorMessage\" *ngIf=\"!form.controls[data._id].pristine && !isValid\">\n      {{data.config.validations.required.message}}\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = "<div class=\"slider-set\">\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\n    <img [src]=\"data.imageURL\" />\n  </div>\n  <div class=\"range-slider\">\n    <div class=\"well1\" tabindex=\"0\">\n      <input id=\"{{data._id}}\" type=\"text\" />\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = "<div [formGroup]=\"form.controls[data._id]\">\n\t<div class=\"switch-outer text-right\" *ngFor=\"let switch_item of data.options, let i = index\">\n\t\t<div class=\"switch-que\">{{switch_item.label}}</div>\n\t\t<div class=\"pull-right\">\n\t\t\t<div class=\"switch \">\n\t\t\t\t<input \n\t\t\t\t\ttype=\"checkbox\"\n\t\t\t\t\t[id]=\"data._id\"\n\t\t\t\t\t[formControlName]=\"i\"\n\t\t\t\t\tclass=\"cmn-toggle cmn-toggle-round-flat\"  \n\t\t\t\t\tid=\"{{data._id}}{{i}}\"\n\t\t\t\t\t[checked]=\"switch_item.selected\"\n\t\t\t\t\t(change)=\"onChange(switch_item,i)\"\n\t\t\t\t\tplaceholder=\"{{data.config.placeholder}}\" \n\t\t\t\t\tvalue=\"{{switch_item.value}}\"\n\t\t\t\t>\n\t\t\t\t<label attr.for=\"{{data._id}}{{i}}\"></label>\n\t\t\t\t\t<!--[themeColor]=\"['background']\"-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"errorMessage\" *ngIf=\"form.controls[data._id].touched && !isValid\">\n\t\t{{data.config.validations.required.message}}\n\t</div>\n</div>"

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\n    <img [src]=\"data.imageURL\" />\n  </div>\n  <div class=\"input-field\">\n    <input tabindex=\"0\"\n           type=\"{{data.config.type}}\"\n           placeholder=\"{{data.config.placeholder}}\"\n           [id]=\"data._id\"\n           [(ngModel)]=\"data.props.currentValue\"\n           (change)=\"data.props.currentLabel=data.props.currentValue\"\n           [formControlName]=\"data._id\"\n           (blur)=\"onBlur()\"\n           (keypress)=\"keyPressed($event)\"\n    >\n  </div>\n  <div class=\"errorMessage\" *ngIf=\"form.controls[data._id].touched && !isValid\">{{ValidationMessage}}</div>\n</div>\n"

/***/ },

/***/ 844:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_models_model__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_analytic_service__ = __webpack_require__(788);
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
        // window.Intercom('update', { hide_default_launcher: true });
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
            window.Intercom('update', { hide_default_launcher: true });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'Temp',
            template: "\n        <div [ngSwitch]=\"Temp_name\">\n            <one-page-slider *ngSwitchCase=\"'one-page-slider'\"\n            [JSON_Template]=\"JSON_Template\"\n            class=\"main-body {{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n            [devMode]=\"devMode\"\n            >\n            </one-page-slider>\n            <sound-cloud *ngSwitchCase=\"'sound-cloud'\"\n            [JSON_Template]=\"JSON_Template\"\n            [devMode]=\"devMode\"\n            class=\"{{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n            >\n            </sound-cloud>\n            <one-page-card *ngSwitchCase=\"'one-page-card'\"\n            [JSON_Template]=\"JSON_Template\"\n            [devMode]=\"devMode\"\n            class=\"{{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n            >\n            </one-page-card>\n        </div>\n\n      ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["c" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["c" /* Script */]) === 'function' && _e) || Object])
    ], Template);
    return Template;
    var _a, _b, _c, _d, _e;
}());


/***/ },

/***/ 848:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__ = __webpack_require__(789);
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
        }
    };
    OnePageCardComponent.prototype.onLeadFormSubmit = function (result, show, hide) {
        console.log("LANDING", result);
        this.sendCTAAnalytics(result, 'Landing');
        this.validated = result;
        if (this.validated)
            this.onButtonClick(null, show, hide);
    };
    OnePageCardComponent.prototype.onButtonClick = function (event, show, hide) {
        if (this.validated && !this.devMode) {
            if (show.indexOf('slide') != -1)
                this.currentQ = show;
            // else if(show.indexOf('page_2')!=-1)
            //   this.sendMail().subscribe((success: any) => {}, (error: any) => {});
            if (show == 'slide_-1' && hide == 'slide_0') {
                show = 'slide_0';
                hide = 'slide_1';
            }
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
        console.log("sendCTAAnalytics", page, isCTA);
        if (isCTA != true && isCTA != false) {
            console.log("aaya", page);
            //Ours
            ga('devteam.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + page + ' Page CTA', 'Clicked', this.jsonBuilderHelper.getJSONBuilt().url);
            //Users
            if (this.jsonBuilderHelper.getJSONBuilt().ga)
                ga('userCustom.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + page + ' Page CTA', 'Clicked', this.jsonBuilderHelper.getJSONBuilt().url);
            console.log("aaya2", page);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'one-page-card',
            template: __webpack_require__(873),
            styles: [
                __webpack_require__(857),
                __webpack_require__(859),
                __webpack_require__(858)
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__["a" /* TemplateValidatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__["a" /* TemplateValidatorService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__["a" /* AnalyticService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__["a" /* TemplateRendererService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__["a" /* TemplateRendererService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _f) || Object])
    ], OnePageCardComponent);
    return OnePageCardComponent;
    var _a, _b, _c, _d, _e, _f;
}());


/***/ },

/***/ 849:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__one_page_card_component__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_templateValidator_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controls_controls_module__ = __webpack_require__(802);
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

/***/ 850:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__ = __webpack_require__(789);
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
            // if(show.indexOf('page_2')!=-1)
            //   this.sendMail().subscribe((success: any) => {}, (error: any) => {});
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'one-page-slider',
            template: __webpack_require__(874),
            styles: [
                __webpack_require__(860),
                __webpack_require__(864),
                __webpack_require__(861),
                __webpack_require__(862),
                __webpack_require__(865),
                __webpack_require__(863)
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__["a" /* TemplateValidatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__["a" /* TemplateValidatorService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__["a" /* AnalyticService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__["a" /* TemplateRendererService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__["a" /* TemplateRendererService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _f) || Object])
    ], OnePageSliderComponent);
    return OnePageSliderComponent;
    var _a, _b, _c, _d, _e, _f;
}());


/***/ },

/***/ 851:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__one_page_slider_component__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_templateValidator_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controls_controls_module__ = __webpack_require__(802);
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

/***/ 852:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__ = __webpack_require__(797);
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
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
            var scrollPos = jQuery(".page_2").offset().top;
            console.log(scrollPos);
            jQuery(window).scrollTop(scrollPos);
        }
        else {
            jQuery('html,body').animate({ scrollTop: jQuery(".page_2").offset().top }, 800);
        }
    };
    SoundCloudComponent.prototype.mobilestickyAdd = function () {
        jQuery(".mobile-result-linkAdd").hide();
        jQuery(".mobile-result-link").show();
        jQuery(".page_1").addClass("mobile-result-sticky");
        jQuery(".page_2").addClass("mobile-result-sticky");
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
            jQuery(window).scrollTop(0);
        }
        else {
            jQuery('html,body').animate({ scrollTop: jQuery(".page_1").offset().top }, 800);
        }
    };
    SoundCloudComponent.prototype.ngAfterViewInit = function () {
        if (jQuery(window).width() > 768) {
            //Add your javascript for large screens here 
            jQuery(window).scroll(function () {
                if (jQuery(this).scrollTop() > 160) {
                    if (self.showResult)
                        jQuery(".page_2").addClass("result-fixed");
                }
                else {
                    jQuery(".page_2").removeClass("result-fixed");
                }
            });
        }
        else {
        }
        var self = this;
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
            jQuery(".page_2").addClass("mobile-result-sticky");
        }
    };
    SoundCloudComponent.prototype.scrollToTopProperties = function () {
        jQuery('.settings-header').trigger('click');
    };
    SoundCloudComponent.prototype.onResultLeadFormSubmit = function (event) {
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            this.sendCTAAnalytics(event, 'Result');
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
            if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
                if (hide) {
                    jQuery('.' + hide).addClass('hide');
                    jQuery(window).scrollTop(divToShow.offset().top);
                    this.showResult = true;
                }
            }
            else {
                jQuery('html, body').animate({
                    scrollTop: divToShow.offset().top
                }, 1000, function () {
                    if (hide) {
                        jQuery('.' + hide).addClass('hide');
                        jQuery(window).scrollTop(divToShow.offset().top);
                        _this.showResult = true;
                    }
                });
            }
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'sound-cloud',
            template: __webpack_require__(875),
            styles: [
                __webpack_require__(866),
                __webpack_require__(870),
                __webpack_require__(867),
                __webpack_require__(868),
                __webpack_require__(869),
                __webpack_require__(871),
                __webpack_require__(872)
            ],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__["a" /* TemplateValidatorService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__["a" /* TemplateValidatorService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__templates_services_analytic_service__["a" /* AnalyticService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__["a" /* TemplateRendererService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_templateRenderer_service__["a" /* TemplateRendererService */]) === 'function' && _e) || Object])
    ], SoundCloudComponent);
    return SoundCloudComponent;
    var _a, _b, _c, _d, _e;
}());


/***/ },

/***/ 853:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_templateValidator_service__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls_controls_module__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__soundcloud_component__ = __webpack_require__(852);
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

/***/ 854:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_templateRenderer_service__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__template_component__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__templates__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__templateDev_component__ = __webpack_require__(855);
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

/***/ 855:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_services_analytic_service__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_templateRenderer_service__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_recommendation_service__ = __webpack_require__(789);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'Temp-dev',
            template: "\n        <div [ngSwitch]=\"Temp_name\" [class]=\"Temp_name\">\n            <one-page-slider *ngSwitchCase=\"'one-page-slider'\"\n               (default_Template)=\"bind_Template_Json($event)\" \n               (selected_control)=\"jsonBuilderHelper.setSelectedControl($event)\"\n               (selected_section)=\"jsonBuilderHelper.setSelectedSection($event)\"\n               (selected_page)=\"jsonBuilderHelper.setSelectedPage($event)\"\n               [JSON_Template]=\"JSON_Template\"\n               [devMode]=\"true\"\n               class=\"{{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n             >\n            </one-page-slider>\n            <sound-cloud *ngSwitchCase=\"'sound-cloud'\"\n                class=\"{{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n               (default_Template)=\"bind_Template_Json($event)\" \n               (selected_control)=\"jsonBuilderHelper.setSelectedControl($event)\"\n               (selected_section)=\"jsonBuilderHelper.setSelectedSection($event)\"\n               (selected_page)=\"jsonBuilderHelper.setSelectedPage($event)\"\n               [JSON_Template]=\"JSON_Template\"\n               [devMode]=\"true\"\n            >\n            </sound-cloud>\n            <one-page-card *ngSwitchCase=\"'one-page-card'\"\n                class=\"{{jsonBuilderHelper.getJSONBuilt().themeColor}}\"\n               (default_Template)=\"bind_Template_Json($event)\" \n               (selected_control)=\"jsonBuilderHelper.setSelectedControl($event)\"\n               (selected_section)=\"jsonBuilderHelper.setSelectedSection($event)\"\n               (selected_page)=\"jsonBuilderHelper.setSelectedPage($event)\"\n               [JSON_Template]=\"JSON_Template\"\n               [devMode]=\"true\"\n            >\n            </one-page-card>\n        </div>\n      ",
            providers: [__WEBPACK_IMPORTED_MODULE_2__templates_services_analytic_service__["a" /* AnalyticService */], __WEBPACK_IMPORTED_MODULE_3__services_templateHttp_service__["a" /* TemplateHttpService */], __WEBPACK_IMPORTED_MODULE_4__services_templateRenderer_service__["a" /* TemplateRendererService */], __WEBPACK_IMPORTED_MODULE_5__services_recommendation_service__["a" /* RecommendationService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_index__["c" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_services_index__["c" /* Script */]) === 'function' && _b) || Object])
    ], TemplateDev);
    return TemplateDev;
    var _a, _b;
}());


/***/ },

/***/ 856:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_page_slider_one_page_slider_module__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sound_cloud_soundcloud_module__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__one_page_card_one_page_card_module__ = __webpack_require__(849);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TEMPLATEMODULES; });



var TEMPLATEMODULES = [
    __WEBPACK_IMPORTED_MODULE_0__one_page_slider_one_page_slider_module__["a" /* OnePageSliderModule */],
    __WEBPACK_IMPORTED_MODULE_1__sound_cloud_soundcloud_module__["a" /* SoundCloudModule */],
    __WEBPACK_IMPORTED_MODULE_2__one_page_card_one_page_card_module__["a" /* OnePageCardModule */]
];


/***/ },

/***/ 857:
/***/ function(module, exports) {

module.exports = "/*!\n *  Font Awesome 4.6.3 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('../fonts/fontawesome-webfont.eot?v=4.6.3');\n  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.6.3') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff2?v=4.6.3') format('woff2'), url('../fonts/fontawesome-webfont.woff?v=4.6.3') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.6.3') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n.fa-slack:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon:before {\n  content: \"\\f1b1\";\n}\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.fa-history:before {\n  content: \"\\f1da\";\n}\n.fa-circle-thin:before {\n  content: \"\\f1db\";\n}\n.fa-header:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart:before {\n  content: \"\\f200\";\n}\n.fa-line-chart:before {\n  content: \"\\f201\";\n}\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n.fa-bus:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n.fa-cc:before {\n  content: \"\\f20a\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.fa-diamond:before {\n  content: \"\\f219\";\n}\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n.fa-venus:before {\n  content: \"\\f221\";\n}\n.fa-mars:before {\n  content: \"\\f222\";\n}\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n.fa-genderless:before {\n  content: \"\\f22d\";\n}\n.fa-facebook-official:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n.fa-server:before {\n  content: \"\\f233\";\n}\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\";\n}\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n.fa-train:before {\n  content: \"\\f238\";\n}\n.fa-subway:before {\n  content: \"\\f239\";\n}\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\f23b\";\n}\n.fa-optin-monster:before {\n  content: \"\\f23c\";\n}\n.fa-opencart:before {\n  content: \"\\f23d\";\n}\n.fa-expeditedssl:before {\n  content: \"\\f23e\";\n}\n.fa-battery-4:before,\n.fa-battery-full:before {\n  content: \"\\f240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\f241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\f242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\f243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\f244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\f245\";\n}\n.fa-i-cursor:before {\n  content: \"\\f246\";\n}\n.fa-object-group:before {\n  content: \"\\f247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\f248\";\n}\n.fa-sticky-note:before {\n  content: \"\\f249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\f24a\";\n}\n.fa-cc-jcb:before {\n  content: \"\\f24b\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n.fa-clone:before {\n  content: \"\\f24d\";\n}\n.fa-balance-scale:before {\n  content: \"\\f24e\";\n}\n.fa-hourglass-o:before {\n  content: \"\\f250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\f251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\f252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\f253\";\n}\n.fa-hourglass:before {\n  content: \"\\f254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\f255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\f256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\f257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\f258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\f259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\f25a\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\f25b\";\n}\n.fa-trademark:before {\n  content: \"\\f25c\";\n}\n.fa-registered:before {\n  content: \"\\f25d\";\n}\n.fa-creative-commons:before {\n  content: \"\\f25e\";\n}\n.fa-gg:before {\n  content: \"\\f260\";\n}\n.fa-gg-circle:before {\n  content: \"\\f261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\f262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\f263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n.fa-get-pocket:before {\n  content: \"\\f265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\f266\";\n}\n.fa-safari:before {\n  content: \"\\f267\";\n}\n.fa-chrome:before {\n  content: \"\\f268\";\n}\n.fa-firefox:before {\n  content: \"\\f269\";\n}\n.fa-opera:before {\n  content: \"\\f26a\";\n}\n.fa-internet-explorer:before {\n  content: \"\\f26b\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\f26c\";\n}\n.fa-contao:before {\n  content: \"\\f26d\";\n}\n.fa-500px:before {\n  content: \"\\f26e\";\n}\n.fa-amazon:before {\n  content: \"\\f270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\f271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\f272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\f273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\f274\";\n}\n.fa-industry:before {\n  content: \"\\f275\";\n}\n.fa-map-pin:before {\n  content: \"\\f276\";\n}\n.fa-map-signs:before {\n  content: \"\\f277\";\n}\n.fa-map-o:before {\n  content: \"\\f278\";\n}\n.fa-map:before {\n  content: \"\\f279\";\n}\n.fa-commenting:before {\n  content: \"\\f27a\";\n}\n.fa-commenting-o:before {\n  content: \"\\f27b\";\n}\n.fa-houzz:before {\n  content: \"\\f27c\";\n}\n.fa-vimeo:before {\n  content: \"\\f27d\";\n}\n.fa-black-tie:before {\n  content: \"\\f27e\";\n}\n.fa-fonticons:before {\n  content: \"\\f280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\f281\";\n}\n.fa-edge:before {\n  content: \"\\f282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\f283\";\n}\n.fa-codiepie:before {\n  content: \"\\f284\";\n}\n.fa-modx:before {\n  content: \"\\f285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\f286\";\n}\n.fa-usb:before {\n  content: \"\\f287\";\n}\n.fa-product-hunt:before {\n  content: \"\\f288\";\n}\n.fa-mixcloud:before {\n  content: \"\\f289\";\n}\n.fa-scribd:before {\n  content: \"\\f28a\";\n}\n.fa-pause-circle:before {\n  content: \"\\f28b\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\f28c\";\n}\n.fa-stop-circle:before {\n  content: \"\\f28d\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\f28e\";\n}\n.fa-shopping-bag:before {\n  content: \"\\f290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\f291\";\n}\n.fa-hashtag:before {\n  content: \"\\f292\";\n}\n.fa-bluetooth:before {\n  content: \"\\f293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\f294\";\n}\n.fa-percent:before {\n  content: \"\\f295\";\n}\n.fa-gitlab:before {\n  content: \"\\f296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\f297\";\n}\n.fa-wpforms:before {\n  content: \"\\f298\";\n}\n.fa-envira:before {\n  content: \"\\f299\";\n}\n.fa-universal-access:before {\n  content: \"\\f29a\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\f29b\";\n}\n.fa-question-circle-o:before {\n  content: \"\\f29c\";\n}\n.fa-blind:before {\n  content: \"\\f29d\";\n}\n.fa-audio-description:before {\n  content: \"\\f29e\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\f2a0\";\n}\n.fa-braille:before {\n  content: \"\\f2a1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\f2a4\";\n}\n.fa-glide:before {\n  content: \"\\f2a5\";\n}\n.fa-glide-g:before {\n  content: \"\\f2a6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\f2a7\";\n}\n.fa-low-vision:before {\n  content: \"\\f2a8\";\n}\n.fa-viadeo:before {\n  content: \"\\f2a9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\f2aa\";\n}\n.fa-snapchat:before {\n  content: \"\\f2ab\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\";\n}\n.fa-snapchat-square:before {\n  content: \"\\f2ad\";\n}\n.fa-pied-piper:before {\n  content: \"\\f2ae\";\n}\n.fa-first-order:before {\n  content: \"\\f2b0\";\n}\n.fa-yoast:before {\n  content: \"\\f2b1\";\n}\n.fa-themeisle:before {\n  content: \"\\f2b2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\f2b3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\f2b4\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n"

/***/ },

/***/ 858:
/***/ function(module, exports) {

module.exports = "@media (min-width: 0px) and (max-width: 767px){\n    .main-heading{\n        /*font-size: 24px;*/\n        font-size: 7.4vmin;\n        margin-bottom: 20px;\n    }\n    .sub-heading{\n        font-size: 14px;\n        margin-bottom: 20px;\n        line-height: 20px;\n    }\n    .t1-logo{\n        width: 130px;\n        float: none;\n        margin: 0 auto;\n    }\n    .t1-logo .landing-page-header{\n        width: 130px;\n        float: none;\n        margin: 0 auto;\n        position: relative !important;\n        top: inherit !important;\n        left: inherit !important;\n    }\n    .page_0 logo header.landing-page-header{\n        width: 100%;\n        float: none;\n        text-align: center;\n        left: inherit;\n        \n    }\n    .t1-logo a{\n        float: none;\n    }\n     .t1-logo a img{\n        max-width: 100%;\n        max-height: 45px;\n    }\n     .logo a img{\n        max-width: 100%;\n        max-height: 45px;\n    }\n    .t1-landing{\n        width: 100% !important;\n    }\n    .t1-question{\n        width: 100% !important;\n    }\n    .t1-result{\n        width: 100% !important;\n    }\n    .t1-landing-top {\n        position: absolute;\n        top: 10px;\n        left: 0;\n        width: 100%;\n        text-align: center;\n    }\n    .landing-page-mid{\n        margin-top: 30px;\n    }\n    .landing-page-mid button{\n        font-family: montserratregular;\n        font-size: 14px;\n        padding: 10px 40px;\n    }\n    .landing-page-mid leadform button.prime-action{\n        font-family: montserratregular;\n        font-size: 14px;\n        padding: 10px 40px;\n    }\n    .landing-page-mid leadform{\n        width: 100%;\n    }\n    .landing-page-mid leadform .input-section .input-outer input{\n        border: 1px solid rgba(255,255,255,0.4);\n        font-size: 13px;\n        width: 98%;\n    }\n    .landing-page-mid leadform .input-section .input-outer input{\n        border: 1px solid rgba(255,255,255,0.4);\n        font-size: 13px;\n    }\n    .landing-page-mid leadform .input-section .input-outer span{\n        font-size: 8px;\n        top: inherit;\n        bottom: -35%\n    }\n    .landing-footer-outer{\n        position: absolute;\n        bottom: 1px;\n        right: inherit;\n        width: 100%;\n        float: left;\n        text-align: center;\n    }\n    .landing-footer-outer .text-right{\n        text-align: center;\n    }\n    .t1-footerlogo{\n        float: none;\n    }\n    .t1-footerlogo p{\n        font-size: 9px;\n        margin-top: 0px;\n        display: inline;\n        float: none;\n    }\n    .landing-footer-outer .powered-by span{\n        font-size: 9px;\n        margin-top: 0px;\n        display: inline;\n        float: none;\n    }\n    .landing-footer-outer .powered-by img{\n        max-width: 80px;\n        display: inline;\n        vertical-align: middle;\n    }\n    \n\n    .t1-question-mid {\n        margin: 0 auto;\n        width: 100%;\n        text-align: center;\n    }\n    .t1-question-slider{\n        width: 85%;\n    }\n    .t1-slider{\n        padding-bottom:80px;\n    }\n    .t1-slider-question{\n        padding: 20px;\n        width: 100%;\n    }\n    /*.question-pic img{\n        width: 150px;\n        height: inherit;\n    }*/\n    .t1-question-resultheading{\n        font-size: 16px;\n        margin-bottom: 5px;\n    }\n    .t1-question-liveresult{\n        font-size: 26px;\n        margin-bottom: 5px;\n    }\n    /*.t1-ques-head .help-outer{ display: none;}*/\n    .t1-slider-pagination{\n        top: 0px;\n    }\n    .pic-selector{\n        width: 48% !important;\n        margin-bottom: 1.8%;\n        margin-right: 1%;\n        margin-left: 1%;\n    }\n    .pic-selector label.control{\n        width: 100%;\n        height: 0;\n        padding-bottom: 100%;\n        margin: 0;\n        display: flex;\n    }\n    .pic-selector label.control .text-overlay span{\n        font-size: 9px;\n    }\n    .text-overlay{\n        top: 5px;\n        padding-bottom: 100%;\n    }\n    .pic-selector input:checked + .control__indicator span.img-overlay{\n        padding-bottom: 100%;\n    }\n    /*.pic-selector input[type=\"radio\"]:checked + label.control::after{\n        font-size: 26px;\n    }*/\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::after{\n        font-size: 6vmin;\n        left: 40%;\n        top: 0%;\n        padding-top: 40%;\n    }\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::before{\n       font-size: 6vmin;\n        left: 40%;\n        top: 22%;\n        padding-top: 40%;\n        opacity: 1;\n    }\n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::after{\n        font-size: 6vmin;\n        left: 40%;\n        top: 0%;\n        padding-top: 40%;\n    }\n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::before{\n        font-size: 6vmin;\n        left: 40%;\n        top: 22%;\n        padding-top: 40%;\n        opacity: 1;\n    }\n    .pic-selector label.control span.img-overlay:hover {\n        height: 100%;\n        width: 100%;\n        top: 0;\n        position: absolute;\n        left: 0px;\n        background: rgba(0,0,0,0.5);\n        /*transition: all .5s;*/\n    }\n    /*.pic-selector input[type=\"checkbox\"]:checked + label.control::after {\n        font-size: 26px;\n    }*/\n    .t1-social-links li a{\n        font-size: 18px;\n    }\n    .t1-ques-component .pic-selector input{\n        padding: 0px;\n    }\n    .t1-slider-nav a.prev {\n        left: 25%;\n        bottom: -70px !important;\n        top: inherit;\n    }\n    .t1-slider-nav a.next {\n        right: 25%;\n        bottom: -70px;\n        top: inherit;\n    }\n    .t1-slider-nav a.go {\n        right: 25%;\n        bottom: 20px;\n        top: inherit;\n    }\n    .t1-ques-inner{\n        margin-bottom: 25px;\n    }\n    .t1-ques-head{\n        font-size: 18px;\n        margin-bottom: 15px;\n    }\n    .t1-ques-component .section-head div{\n        font-size: 16px;\n    }\n    .t1-ques-component .input-outer input{\n        font-size: 14px;\n    }\n    .t1-ques-component input{\n        font-size: 14px;\n        padding: 12px;\n        /*width: 91%;*/\n    }\n\n    .t1-result-top{\n        width: 90%;\n        margin-left: 5%;\n    }\n    .t1-result-topheading p{\n        font-size: 18px;\n        width: 100%;\n    }\n    .t1-result-topheading{\n        width: 100%;\n        text-align: center;\n    }\n    .t1-result-inner{\n        padding: 6%;\n        width: 100%;\n    }\n    .t1-result-full-section{\n        text-align: center;\n        margin-top: 0 !important;\n    }\n    .t1-result-full-container{\n        text-align: center;\n        width: 100%;\n    }\n    .t1-result-small-section{\n        text-align: center;\n        margin-right: 0;\n        margin-top: 20px;\n        width: 100%;\n    }\n    .t1-result-small-container{\n        text-align: center;\n    }\n    .t1-result-leadform-heading{\n        margin-top: 30px;\n        text-align: center;\n    }\n    .t1-result-leadform-inner{\n        width: 100%;\n        margin-bottom: 10px;\n    }\n    .t1-leadform-field{\n        margin-bottom: 30px;\n    }\n    .t1-result-leadform-inner input{\n        font-size: 14px;\n    }\n    .t1-leadform-btnoutr{\n        text-align: center;\n    }\n    .t1-result-leadform .input-section{\n        width: 100%;\n    }\n    .t1-result-leadform .page_2 click-button .prime-action{\n        padding: 15px;\n        font-size: 13px;\n    }\n    .page_2 click-button .text-center{\n        text-align: center !important;\n    }\n    .t1-result-leadform .container-temp{\n        text-align: center;\n    }\n    .page_2 click-button .prime-action{\n        padding: 15px !important;\n        font-size: 13px !important;\n    }\n    .t1-result-disclaimer{\n        width: 100%;\n        text-align: center;\n    }\n    .t1-social-links{\n        float: left;\n        width: 100%;\n        text-align: center;\n        margin-top: 15px;\n        margin-bottom: 15px;\n    }\n    .t1-social-links li{\n        display: inline;\n        float: none;\n    }\n    .t1-social-links li p{\n        display: inline;\n        float: none;\n        font-family: montserratregular;\n        font-size: 14px;\n    }\n    .t1-social-links li a{\n        display: inline;\n        float: none;\n    }\n\n    .t1-result-full-section p:nth-child(1){\n        font-size: 26px;\n        margin-bottom: 10px;\n    }\n    .t1-result-full-section p:nth-child(2){\n        font-size: 12px;\n    }\n    .t1-result-full-section p:nth-child(3){\n        font-size: 12px;\n    }\n\n    .t1-result-small-section p:nth-child(1){\n        font-size: 26px;\n        margin-bottom: 10px;\n    }\n    .t1-result-small-section p:nth-child(2){\n        font-size: 12px;\n    }\n    .t1-result-small-section p:nth-child(3){\n        font-size: 12px;\n    }\n    .t1-ques-head .help-text{ \n        /*width: 130px; */\n        left: -130px;\n    }\n\n\n    .t1-result-leadform .lead-heading-temp1{\n        text-align: center;\n    }\n\n\n    .recommendation-outer .mid-width p { font-size: 18px;text-align: center; width: 100%; margin-bottom: 25px;}\n    .recom-section .w100 .leadform-outer h1 {text-align: center; }\n    .recom-section .w100 .leadform-outer h5 {text-align: center;}\n    .recom-section .w100 .container-temp {text-align: center !important; width: 100%;}\n    .recom-section .leadform-outer .container-temp .prime-action {width: 100%;  float: none !important; margin-left: 0!important; white-space: normal;}\n    .recom-section .disc-set { width: 100%; padding-left:0;}\n    .recom-section .outer-main{ text-align: center !important;  height: auto !important; display: block;}\n    .recom-section .outer-main{ display: block;}\n    .recom-section .leadform-outer{ display: block;}\n    .recom-section .container-temp {text-align: center !important; width: 98%;}\n    .recom-section .left-outer { height: auto !important; padding: 10px 0;}\n    .recom-section .leadform-outer h1 {margin-top: 10px; font-size: 24px; margin-bottom: 0; }\n    .recommendation-outer .t1-result-inner {padding: 6% !important; width: 100%; overflow: hidden;}\n    .recom-section .leadform-outer .prime-action{width: 100%; margin-left: 0; white-space: normal;}\n    .recom-section .w100 .leadform-outer { padding-left:0!important;}\n    .recom-section .w100 .container-temp {text-align: left !important; width: 100% !important;}\n    .recom-section .w100 .leadform-outer .container-temp .prime-action {width: 90% !important; float: left !important;}\n    .recom-section .t1-social-links {float: left;width: 100%;text-align: center; margin-top: 15px; margin-bottom: 0 !important;}\n    .recom-section .disc-set{ text-align: center !important;}\n    .recom-section .w100 .leadform-outer .prime-action{min-width: 90%; margin-left: 0%;}\n    .rec-image-outer { max-width: 96%;}\n    \n    .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){width:100%;}\n    .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input{width:98%;}\n    .page_2.t1-result{ display: table;}\n    .page_2 .t1-result-main { display: block;}\n\n    .t1-ques-head .help-outer {\n        top: 6px;\n    }\n    \n    \n}\n@media (min-width: 0px) and (max-width: 767px) and (orientation: portrait) {\n    .t1-landing-leadform .t1-leadform-field{\n        width: 100%;\n        margin-bottom: 10px;\n    }\n    .landing-page-mid leadform .input-section .input-outer{\n        width: 100%;\n        margin-bottom: 10px;\n    }\n    .landing-page-mid button {\n    font-family: montserratregular;\n    font-size: 14px !important;\n    padding: 10px 40px !important;\n}\n    /*.pic-selector label.control{\n        width: 33vw;\n        height: 33vw;\n    }*/\n    \n}\n@media (min-width: 0px) and (max-width: 767px) and (orientation: landscape) {\n    .landing-page-mid{\n        width: 90%;\n    }\n    /*.pic-selector label.control{\n        width: 15vw;\n        height: 15vw;\n    }*/\n    .main-heading{\n        margin-bottom: 2%;\n    }\n    .sub-heading {\n        font-size: 11px;\n        margin-bottom: 3%;\n        line-height: normal;\n    }\n     \n    .landing-page-mid leadform .input-section .input-outer input{\n        padding: 7px 5px;\n        width: 100%;\n        font-size: 11px;\n    }\n    .landing-page-mid leadform .input-section .input-outer input{\n        padding: 7px 5px;\n        width: 100%;\n        font-size: 11px;\n    }\n    .landing-page-mid button {\n        font-family: montserratregular;\n        font-size: 9px;\n        padding: 7px 30px;\n    }\n    .landing-page-mid leadform button.prime-action {\n        font-family: montserratregular;\n        font-size: 9px;\n        padding: 7px 30px;\n    }\n    .t1-landing-leadform .t1-leadform-field {\n        display: inline-block;\n        width: 40%;\n        float: none;\n        margin-bottom: 10px;\n        margin-right: 10px;\n        margin-left: 10px;\n    }\n    .landing-page-mid leadform .input-section .input-outer {\n        display: inline-block;\n        width: 40%;\n        float: none;\n        margin-bottom: 10px;\n        margin-right: 10px;\n        margin-left: 10px;\n    }\n    .t1-landing-top{\n        position: relative;\n        top: -10px;\n    }\n    .t1-logo a img{\n        max-width: 90%;\n        max-height: 45px;\n    }\n    .logo a img{\n        max-width: 90%;\n        max-height: 45px;\n    }\n}\n\n@media (min-width: 0px) and (max-width: 319px){\n    .main-heading{\n        margin-bottom: 2%;\n    }\n    .sub-heading {\n        font-size: 11px;\n        margin-bottom: 3%;\n        line-height: normal;\n    }\n    .landing-page-mid leadform .input-section .input-outer input{\n        padding: 7px 5px;\n        width: 100%;\n        font-size: 11px;\n    }\n    .landing-page-mid leadform .input-section .input-outer input{\n        padding: 7px 5px;\n        width: 100%;\n        font-size: 11px;\n    }\n    .landing-page-mid button {\n        font-family: montserratregular;\n        font-size: 9px;\n        padding: 7px 30px;\n    }\n    .landing-page-mid leadform button.prime-action {\n        font-family: montserratregular;\n        font-size: 9px;\n        padding: 7px 30px;\n    }\n}\n@media (min-width: 0px) and (max-width: 319px) and (orientation: landscape){\n    .t1-landing {\n        height: 100vh;\n        position: relative;\n    }\n    .t1-landing-top{\n        position: relative;\n        top: -10px;\n    }\n    .t1-logo a img{\n        max-width: 70%;\n        max-height: 45px;\n    }\n    .logo a img{\n        max-width: 70%;\n        max-height: 45px;\n    }\n    \n}\n@media (min-width: 0px) and (max-width: 420px) and (orientation: portrait){\n    \n    .main-heading{\n        margin-bottom: 2%;\n    }\n    .sub-heading {\n        font-size: 13px;\n        margin-bottom: 5%;\n        line-height: normal;\n    }\n    .landing-page-mid button {\n        font-family: montserratregular;\n        font-size: 9px;\n        padding: 7px 30px;\n    }\n    .landing-page-mid leadform button.prime-action {\n        font-family: montserratregular;\n        font-size: 9px;\n        padding: 7px 30px;\n    }\n    .t1-logo a img{\n        max-width: 70%;\n        max-height: inherit;\n    }\n    .logo a img{\n        max-width: 70%;\n        max-height: 35px;\n    }\n    /*.pic-selector label.control .text-overlay span{\n        display: none;\n    }*/\n    \n}\n\n@media (min-width: 768px) and (max-width: 770px) {\n    .t1-result-top{ width: 85%;}\n}\n\n\n@media (min-width: 768px) and (max-width: 1023px) {\n    .t1-result-small-section{\n        margin-top: 20px;\n        margin-right: 30px;\n    }\n    \n    .t1-question-slider {\n        width: 100%;\n    }\n    .t1-result-full-section{\n        margin-top: 0px;\n    }\n    .t1-slider-question {\n        padding: 30px;\n    }\n    .t1-question-liveresult{\n        margin-bottom: 5px;\n    }\n    .t1-slider-pagination {\n        top: 0px;\n    }\n    .t1-slider-nav a.prev {\n        left: -75px;\n    }\n    .t1-slider-nav a.next {\n        right: -75px;\n    }\n    .t1-slider-nav a.go {\n        right: -75px;\n    }\n    .recommendation-outer .t1-result-inner{\n        width: 94%;\n        padding: 30px;\n    }\n    .t1-result-inner{\n        width: 94%;\n        padding: 30px;\n    }\n    .t1-result-leadform-inner{\n        width: 70%;\n    }\n    .landing-page-mid leadform .input-section .input-outer span{\n        font-size: 10px;\n        top: 45px;\n    }\n    .pic-selector{\n        width: 32% !important;\n        margin-bottom: 1.5% !important;\n        margin-right: 0.5% !important;\n        margin-left: 0.7% !important;\n    }\n    .pic-selector label.control{\n        width: 100%;\n        height: 0;\n        padding-bottom: 100%;\n        margin: 0;\n        display: flex;\n    }\n    .pic-selector input:checked + .control__indicator span.img-overlay {\n        padding-bottom: 100%;\n        top: 0px;\n    }\n    .text-overlay {\n        top: 5px;\n        padding-bottom: 100%;\n    }  \n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::before {\n        font-size: 5vmin;\n        left: 40%;\n        top: 22%;\n        padding-top: 37%;\n        opacity: 1;\n    }\n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::after {\n        font-size: 5vmin;\n        left: 40%;\n        top: 0%;\n        padding-top: 37%;\n    }\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::after{\n        font-size: 5vmin;\n        left: 40%;\n        top: 0%;\n        padding-top: 37%;\n    }\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::before{\n        font-size: 5vmin;\n        left: 40%;\n        top: 22%;\n        padding-top: 37%;\n        opacity: 1;\n    }\n    .t1-result-topheading p{\n        font-size: 22px;\n    }\n    .t1-result-full-section p:nth-child(1){\n        font-size: 28px;\n        margin-bottom: 10px;\n    }\n    .t1-result-full-section p:nth-child(2){\n        font-size: 13px;\n    }\n    .t1-result-full-section p:nth-child(3){\n        font-size: 13px;\n    }\n\n    .t1-result-small-section p:nth-child(1){\n        font-size: 28px;\n        margin-bottom: 10px;\n    }\n    .t1-result-small-section p:nth-child(2){\n        font-size: 13px;\n    }\n    .t1-result-small-section p:nth-child(3){\n        font-size: 13px;\n    }\n    .t1-result-leadform .t1-result-cta .prime-action{\n        font-size: 12px;\n        padding: 15px 25px;\n        margin-bottom: 30px;\n        margin-top: 10px;\n    }\n\n    .t1-ques-head .help-text{ width: 160px;}\n    .t1-social-links li a{\n        font-size: 18px;\n    }\n\n    .recom-section .w100 .leadform-outer { padding-left: 0 !important;}\n    .recom-section .w100 .leadform-outer h1 {text-align: left; margin-top: 0;}\n    .recom-section .w100 .container-temp {text-align: left !important;width: 52%;}\n    .recom-section .w100 .leadform-outer .container-temp .prime-action {width: 100% !important;float: left !important;}\n    .recom-section .disc-set {width: 76%;  margin-top: 2px;}\n    .recom-section .container-temp {text-align: left !important;width: 100%; }\n    .recom-section .t1-result-leadform .input-section { width: 100%;}\n    .recom-section .left-outer { height: auto !important; padding: 25px 0;}\n    .recommendation-outer .t1-result-inner {padding: 30px !important; width: 94% !important; padding-bottom: 10px !important;}\n    .t1-result-top.recommendation-outer {width: 70% !important;  margin-left: 17%;}\n    .t1-result-top {width: 85% !important;}\n    .recom-section .leadform-outer {float: left; padding:0 5%; display: block;}\n    .recom-section .outer-main { height: auto !important; display: block;}\n    .recom-section .disc-set{ padding-left:0; text-align: left !important;}\n    .rec-image-outer {max-width: 90%;  }\n     .recommendation-outer .mid-width p {width: 94%; text-align: center;}\n     .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){width:81%;}\n    .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input{width:97%;}\n    .recom-section .leadform-outer .container-temp .prime-action { white-space: normal;}\n\n}\n@media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {\n    .t1-landing-leadform .t1-leadform-field {\n        width: 100%;\n        margin-bottom: 10px;\n    }\n    .landing-page-mid leadform .input-section .input-outer{\n        width: 100%;\n        margin-bottom: 10px;\n    }\n    .landing-page-mid leadform .input-section .input-outer input{\n        width: 98%;\n    }\n    /*.pic-selector label.control {\n        width: 15vw;\n        height: 15vw;\n    }*/\n\n    .recom-section .w100 .container-temp {text-align: left !important;width: 60%;}\n    .recom-section .w100 .leadform-outer .container-temp .prime-action {width: 100% !important;float: left !important;}\n    .recom-section .disc-set {width: 76%;  margin-top: 2px;}\n    .recom-section .container-temp {text-align: left !important; width: 62%;}\n    .recom-section .left-outer { height: auto !important; padding: 25px 0;}\n    .recommendation-outer .t1-result-inner {padding: 30px !important; width: 94% !important; padding-bottom: 10px !important;}\n    .t1-result-top {width: 85% !important;}\n    .recom-section .leadform-outer {float: left; padding:0 5%;}\n    .recom-section .outer-main { height: auto !important;}\n    .recom-section .disc-set{ padding-left:0; text-align: left !important}\n    .rec-image-outer {max-width: 90%;  }\n    .recommendation-outer .mid-width p {width: 94%; text-align: center;}\n    .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){width:100%;}\n    .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input{width:98%;}\n    \n    \n}\n\n@media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape){\n    .t1-logo a img {\n        max-width: 70%;\n        max-height: 45%;\n    }\n    .logo a img {\n        max-width: 70%;\n        max-height: 45px;\n    }\n    .main-heading {\n        font-size: 8vmin;\n        margin-bottom: 10px;\n\n    }\n    .sub-heading {\n        font-size: 16px;\n        margin-bottom: 20px;\n        line-height: 20px;\n    }\n    .t1-landing-leadform .t1-leadform-field{\n        margin-left: 10px;\n        margin-right: 10px;\n    }\n    .landing-page-mid leadform .input-section .input-outer{\n        margin-left: 3px;\n        margin-right: 3px;\n    }\n    .landing-page-mid leadform .input-section .input-outer input {\n        border: 2px solid rgba(255,255,255,0.4);\n        font-size: 13px;\n    }\n    .landing-page-mid leadform .input-section .input-outer input {\n        border: 2px solid rgba(255,255,255,0.4);\n        font-size: 13px;\n    }\n    .landing-page-mid button {\n        font-family: montserratregular;\n        font-size: 14px;\n        padding: 10px 40px;\n    }\n    .landing-page-mid leadform button.prime-action {\n        font-family: montserratregular;\n        font-size: 14px;\n        padding: 10px 40px;\n    }\n    /*.pic-selector label.control {\n        width: 16vw;\n        height: 16vw;\n    }*/\n    /*.question-pic img{\n        width: 125px;\n        height: 125px;\n    }*/\n}\n\n@media (min-width: 1024px) and (max-width: 1365px) {\n    .pic-selector{\n        width: 32% !important;\n        margin-bottom: 1.5% !important;\n        margin-right: 0.5% !important;\n        margin-left: 0.7% !important;\n    }\n    .pic-selector label.control{\n        width: 100%;\n        height: 0;\n        padding-bottom: 100%;\n        margin: 0;\n        display: flex;\n    }\n    .pic-selector input:checked + .control__indicator span.img-overlay {\n        padding-bottom: 100%;\n        top: 0px;\n    }\n    .text-overlay {\n        top: 5px;\n        padding-bottom: 100%;\n    }  \n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::before {\n        font-size: 5vmin;\n        left: 45%;\n        top: 5%;\n        padding-top: 37%;\n        opacity: 1;\n    }\n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::after {\n        font-size: 5vmin;\n        left: 45%;\n        top: 5%;\n        padding-top: 37%;\n    }\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::after{\n        font-size: 5vmin;\n        left: 45%;\n        top: 5%;\n        padding-top: 37%;\n    }\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::before{\n        font-size: 5vmin;\n        left: 40%;\n        top: 22%;\n        padding-top: 37%;\n        opacity: 1;\n    }\n    .t1-social-links li a{\n        font-size: 18px;\n    }\n}\n\n@media (min-width: 1024px) and (max-width: 1365px) and (orientation: landscape){\n    .t1-logo a img {\n        max-width: 70%;\n        max-height: 45%;\n    }\n    .logo a img {\n        max-width: 70%;\n        max-height: 65px;\n    }\n    .main-heading {\n        font-size: 36px;\n        margin-bottom: 25px;\n    }\n    .sub-heading {\n        font-size: 16px;\n        margin-bottom: 25px;\n        line-height: 20px;\n    }\n    .landing-page-mid leadform .input-section .input-outer input {\n        border: 2px solid rgba(255,255,255,0.4);\n        font-size: 13px;\n    }\n    .landing-page-mid leadform .input-section .input-outer input {\n        border: 2px solid rgba(255,255,255,0.4);\n        font-size: 13px;\n    }\n    .t1-question-slider{\n        width: 90%;\n    }\n    .landing-page-mid button {\n        font-size: 14px;\n        padding: 10px 40px;\n    }\n    .landing-page-mid leadform button.prime-action {\n        font-size: 14px;\n        padding: 10px 40px;\n    }\n    /*.pic-selector label.control{\n        width: 15vw;\n        height: 15vw;\n    }*/\n}\n\n\n@media (min-width: 1680px) and (max-width: 1920px){\n    .main-heading{\n        font-size: 52px;\n        margin-bottom: 25px;\n    }\n    .sub-heading{\n        font-size: 26px;\n    }\n    .landing-page-mid leadform .t1-leadform-field{\n        margin-bottom: 40px;\n    }\n    .landing-page-mid leadform .input-section .input-outer{\n        margin-bottom: 30px;\n    }\n    /*.question-pic img{\n        width: 175px;\n    }*/\n    .t1-logo a img{\n        max-height: 65px;\n    }\n    .logo a img{\n        max-height: 65px;\n    }\n    \n    .pic-selector{\n        width: 24% !important;\n        margin-bottom: 1.8%;\n        margin-right: 0.5%;\n        margin-left: 1.5%;\n    }\n    .pic-selector label.control{\n        width: 100%;\n        height: 0;\n        padding-bottom: 100%;\n        margin: 0;\n        display: flex;\n    }\n    .pic-selector input:checked + .control__indicator span.img-overlay {\n        padding-bottom: 100%;\n        top: 0px;\n    }\n    .text-overlay {\n        top: 5px;\n        padding-bottom: 100%;\n    }  \n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::before {\n        font-size: 5vmin;\n        left: 40%;\n        top: 22%;\n        padding-top: 37%;\n    }\n    .pic-selector input[type=\"checkbox\"]:checked + .control__indicator::after {\n        font-size: 5vmin;\n        left: 40%;\n        top: 0%;\n        padding-top: 37%;\n    }\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::after{\n        font-size: 5vmin;\n        left: 40%;\n        top: 0%;\n        padding-top: 37%;\n    }\n    .pic-selector input[type=\"radio\"]:checked + .control__indicator::before{\n        font-size: 5vmin;\n        left: 40%;\n        top: 22%;\n        padding-top: 37%;\n    }\n    .t1-social-links li a{\n        font-size: 22px;\n    }\n}"

/***/ },

/***/ 859:
/***/ function(module, exports) {

module.exports = "*{\n    margin: 0;\n    padding: 0;\n}\n@font-face {\n    font-family: 'montserratbold';\n    src: url('../fonts/montserrat-bold-webfont-webfont.woff2') format('woff2'),\n         url('../fonts/montserrat-bold-webfont-webfont.woff') format('woff'),\n         url('../fonts/montserrat-bold-webfont-webfont.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\n@font-face {\n    font-family: 'montserratregular';\n    src: url('../fonts/montserrat-regular-webfont-webfont.woff2') format('woff2'),\n         url('../fonts/montserrat-regular-webfont-webfont.woff') format('woff'),\n         url('../fonts/montserrat-regular-webfont-webfont.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n\n}\n@font-face {\n    font-family: 'montserratlight';\n    src: url('../fonts/montserrat-light_0-webfont.woff2') format('woff2'),\n         url('../fonts/montserrat-light_0-webfont.woff') format('woff'),\n         url('../fonts/montserrat-light_0-webfont.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n\n}\n@font-face {\n    font-family: 'material_iconsregular';\n    src: url('../fonts/materialicons-regular-webfont.woff2') format('woff2'),\n         url('../fonts/materialicons-regular-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(MaterialIcons-Regular.eot);\n  src: local('Material Icons'),\n       local('materialIcons-Regular'),\n       url(../fonts/materialIcons-Regular.woff2) format('woff2'),\n       url(../fonts/materialIcons-Regular.woff) format('woff'),\n       url(../fonts/materialIcons-Regular.ttf) format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\nbody {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    color: #666e78;\n    font-family: montserratregular;\n    overflow-x: hidden; /* Prevents horizontal scroll */\n}\na, input, textarea, button:focus{outline: none;}\n.hide{ display: none !important;}\n.t1-landing{\n    width: 100%;\n    height: 100vh;\n    max-width: 100%;\n    position: relative;\n    display: table;\n    background: url(../images/main-bg.jpg) no-repeat center center;\n    background-size: cover;\n}\n.t1-landing-inner{\n    display: table-cell;\n    vertical-align: middle;\n    height: 100%;\n    padding-top: 25px;\n    padding-bottom: 25px;\n    box-shadow: 0 2px 9px 2px rgba(0,0,0,0.4);\n}\n.t1-overlay{\n    background: rgba(0,0,0,0.3);\n}\n/*.t1-landing-top{\n    position: absolute;\n    top: 30px;\n    left: 40px;\n}*/\n.t1-logo{\n    width: 180px;\n    float: left;\n}\n.t1-logo a{\n    float: left;\n}\n.t1-logo a img{\n    max-width: 100%;\n    max-height: 50px;\n}\n.logo a img{\n    max-width: 100%;\n    max-height: 50px;\n}\n.landing-page-mid{\n    margin: 0 auto;\n    width: 75%;\n    text-align: center;\n}\n.main-heading{\n    color: #f7da64;\n    font-size: 48px;\n    font-family: montserratbold;\n    margin-bottom: 15px;\n    line-height: normal;\n}\n.sub-heading{\n    color:rgba(247,218,100,0.7);\n    font-size: 22px;\n    font-family: montserratregular;\n    margin-bottom: 30px;\n    line-height: normal;\n}\n.t1-landing-leadform{\n    width: 80%;\n    margin: 0 auto;\n    display: inline-block;\n}\n.t1-landing-leadform .t1-leadform-field{\n    display: inline-block;\n    width: 40%;\n    float: none;\n    margin-bottom: 20px;\n}\n.t1-landing-leadform .t1-leadform-field input{\n    float: left;\n    width: 88%;\n    border:2px solid rgba(255,255,255,0.4);\n    color: #fff;\n    font-size: 16px;\n    font-family: montserratregular;\n    padding: 10px;\n    background: none;\n}\n.t1-landing-leadform .input-section .input-outer{\n    display: inline-block;\n    width: 40%;\n    float: none;\n    margin-bottom: 20px;\n    position: relative;\n}\n.t1-landing-leadform .input-section .input-outer input{\n    float: left;\n    width: 94%;\n    border:2px solid rgba(255,255,255,0.4);\n    color: #fff;\n    font-size: 16px;\n    font-family: montserratregular;\n    padding: 10px;\n    background: none;\n}\n.t1-landing-leadform .input-section .input-outer span {\n    float: left;\n    width: 100%;\n    position: absolute;\n    top: 48px;\n    left: 0px;\n    text-align: left;\n    padding-left: 2px;\n    color: #f44336;\n    font-size: 12px;\n}\n.t1-landing-leadform{\n    float: left;\n    width: 100%;\n    text-align: center;\n}\n.t1-landing-leadform button.prime-action{\n    color: #012435;\n    font-size: 16px;\n    font-family: montserratbold;\n    width: auto;\n    padding: 13px 60px;\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\n    background: rgba(247,218,100,0.9);\n    border: none;\n    cursor: pointer;\n    text-transform: uppercase;\n    border-radius: 0px;\n}\n.t1-landing-leadform button.prime-action:hover{\n    background: rgba(247,218,100,0.9);\n    color: #012435;\n}\n.t1-button{\n    float: left;\n    width: 100%;\n    text-align: center;\n}\n.t1-button button{\n    color: #012435;\n    font-size: 16px;\n    font-family: montserratbold;\n    width: auto;\n    padding: 13px 60px;\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\n    background: rgba(247,218,100,0.9);\n    border: none;\n    cursor: pointer;\n    text-transform: uppercase;\n    border-radius: 0px;\n}\n.t1-button button:hover,.t1-button button:focus{\n    background: rgba(247,218,100,0.9);\n    color: #012435;\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\n}\n.landing-btn{\n    color: #012435;\n    font-size: 16px;\n    font-family: montserratbold;\n    width: auto;\n    padding:16px 50px;\n    background: rgba(247,218,100,0.9);\n    border: none;\n    cursor: pointer;\n    text-transform: uppercase;\n}\n.t1-question .t1-overlay{\n    /*background: rgba(38,33,33,0.5);*/\n    background: rgba(0,0,0,0.3)\n}\n.t1-landing-bot{\n    position: absolute;\n    bottom: 10px;\n    right: 40px;\n}\n.landing-footer-outer{\n    position: absolute;\n    bottom: 10px;\n    right: 40px;\n}\n.t1-footerlogo{\n    float: right;\n    width: auto;\n}\n.t1-footerlogo p{\n    float: left;\n    color: #fff;\n    font-size: 12px;\n    margin-top: 8px;\n    margin-right: 5px;\n}\n.t1-landing-bot .powered-by span{\n    float: left;\n    color: #fff;\n    font-size: 12px;\n    margin-top: 8px;\n    margin-right: 5px;\n    text-shadow: 3px 4px 3px rgba(0,0,0,0.5);\n}\n.landing-footer-outer .powered-by span{\n    float: left;\n    color: #fff;\n    font-size: 12px;\n    margin-top: 10px;\n    margin-right: 5px;\n    text-shadow: 3px 4px 3px rgba(0,0,0,0.5);\n}\n.t1-question{\n    width: 100%;\n    height: 100vh;\n    max-width: 100%;\n    position: relative;\n    display: table;\n    background: url(../images/main-bg.jpg) no-repeat center center;\n    background-size: cover;\n}\n.t1-question-mid{\n    margin: 0 auto;\n    width: 75%;\n    text-align: center;\n}\n.t1-question-resultheading{\n    width: 100%;\n    text-align: center;\n    font-size: 24px;\n    color: #eceeef;\n    font-family: montserratlight;\n    margin-bottom: 10px;\n}\n.t1-question-liveresult{\n    width: 100%;\n    text-align: center;\n    font-size: 36px;\n    color: #eceeef;\n    font-family: montserratlight;\n    margin-bottom: 5px;\n}\n.t1-question-slider{\n    margin: 0 auto;\n    width: 86%;\n    position: relative;\n}\n.t1-slider{\n    position: relative;\n    float: left;\n    width: 100%;\n    margin-top: 25px;\n}\n.t1-slider-nav{\n\n}\n.t1-slider-nav a{\n    position: absolute;\n    top: 44%;\n    background: #f3d455;\n    color: #232f3f;\n    width: 42px;\n    height: 42px;\n    text-align: center;\n    display: table-cell;\n    vertical-align: middle;\n    cursor: pointer;\n}\n.a-disable{\n    pointer-events: none;\n    opacity:0.3;\n}\n.t1-slider-nav a i{\n    margin-top: 10px;\n}\n.t1-slider-nav a.prev{\n    left: -165px;\n}\n.t1-slider-nav a.next{\n    right: -165px;\n}\n.t1-slider-nav a.go{\n    right: -165px;\n}\n/*.t1-slider-pagination{\n    position: absolute;\n    float: left;\n    width: 100%;\n    text-align: center;\n    top: -30px;\n}*/\n.t1-slider-pagination{\n    position: relative;\n    float: left;\n    width: 100%;\n    text-align: center;\n    top:0px;\n}\n.t1-slider-pagination a{\n    display: inline-block;\n    height: 7px;\n    width: 7px;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    margin-left: 5px;\n    margin-right: 5px;\n    cursor: default;\n}\n.t1-slider-pagination a.active{\n    background: #fff;\n}\n.editor-page-divider{\n    margin-bottom: 35px;\n}\n.t1-slider-question-divider{\n    margin-bottom: 40px;\n}\n.t1-slider-question{\n    padding: 40px;\n    background: #fff;\n    width: 100%;\n    float: left;\n    box-shadow: 3px 10px 19px 5px rgba(0,0,0,0.4);\n}\n.t1-question-slider .unslider-nav{\n    position: absolute;\n    top: -60px;\n    text-align: center;\n    width: 100%;\n}\n.t1-question-slider .unslider-nav ol li{\n    width: 3px;\n    height: 3px;\n    border: 1px solid #fff;\n}\n.t1-question-slider .unslider-arrow\n{\n    position: absolute;\n    left: 20px;\n    z-index: 2;\n    cursor: pointer;\n    background: #f3d455;\n    width: 42px;\n    height: 42px;\n    color: #232f3f;\n}\n.t1-question-slider .unslider-arrow.next\n{\n    left: auto;\n    right: -120px;\n    top: 45%;\n}\n.t1-question-slider .unslider-arrow.next i{\n    margin-top: 10px;\n}\n.t1-question-slider .unslider-arrow.prev\n{\n    left: auto;\n    left: -120px;\n    top: 45%;\n}\n.t1-question-slider .unslider-arrow.prev i{\n    margin-top: 10px;\n}\n.t1-question-slider .unslider-arrow.go\n{\n    left: auto;\n    right: -120px;\n    top: 45%;\n}\n.t1-question-slider .unslider-arrow.go i{\n    margin-top: 10px;\n}\n.question-pic{\n    margin-bottom: 25px;\n    width: 100%;\n    text-align: center;\n    overflow: hidden;\n}\n.question-pic img{\n    max-width: 100%;\n}\n.t1-slider-section{\n    float: left;\n    width: 100%;\n}\n.t1-ques-inner{\n    float: left;\n    width: 100%;\n    text-align: left;\n}\n.t1-ques-head{\n    color: #28324e;\n    font-size: 22px;\n    font-family: montserratlight;\n    margin-bottom: 25px;\n}\n.t1-ques-component{\n    float: left;\n    width: 100%;\n}\n.t1-ques-component input.t1-input{\n    float: left;\n    color: #666e78;\n    font-size: 16px;\n    border: 1px solid #d9dad3;\n    font-family: montserratlight;\n    width: 95%;\n    padding: 15px;\n}\n.t1-ques-component .input-section .input-outer{\n    margin-bottom: 20px;\n    position: relative;\n}\n.t1-ques-component .input-section .input-outer .section-head\n{\n    font-size: 20px;\n    margin-bottom: 10px;\n    font-family: montserratlight;\n    color: #666e78;\n    width: 100%;\n    float: left;\n    word-break: break-word;\n}\n.t1-ques-component .input-section .input-outer span {\n    float: left;\n    width: 100%;\n    position: absolute;\n    bottom:-17px;\n    left: 0px;\n    text-align: left;\n    padding-left: 2px;\n    color: #f44336;\n    font-size: 12px;\n}\n.t1-ques-component .prime-action{\n    color: #012435;\n    font-size: 16px;\n    font-family: montserratbold;\n    width: auto;\n    padding: 16px 50px;\n    background: rgba(247,218,100,0.9);\n    border: none;\n    cursor: pointer;\n    text-transform: uppercase;\n    border-radius: 0px;\n    display: none;\n}\n.t1-ques-component .prime-action:hover{\n    background: rgba(247,218,100,0.9);\n    color: #012435;\n    display: none;\n}\n.pic-selector{\n    /*text-align: center;\n    float: left !important;\n    border: none !important;\n    background: none !important;\n    width: 23% !important;\n    margin-bottom: 1.8%;\n    margin-right: 0.5%;\n    margin-left: 1.5%;*/\n    text-align: center;\n    float: left !important;\n    border: none !important;\n    background: none !important;\n    width: 24% !important;\n    margin-bottom: 1.5% !important;\n    margin-right: 0.5% !important;\n    margin-left: 0.5% !important;\n}\n.t1-ques-component .pic-selector input{\n    border: none;\n    opacity: 0;\n    display: none;\n}\n.t1-ques-component .section-head div{\n    color: #28324e;\n    font-size: 22px;\n    font-family: montserratlight;\n}\n.t1-ques-component .input-outer input {\n    background-color:transparent;\n    /*border:1px solid #d9dad3;*/\n    border-width: 1px;\n    border-style: solid;\n    border-color: #d9dad3;\n    border-radius:0;\n    outline:none;\n    width:100%;\n    font-size:16px;\n    margin:0 0 15px 0;\n    padding:16px 2%;\n    box-shadow:none;\n    transition:all 0.3s;\n    -moz-box-sizing:border-box;\n    -webkit-box-sizing:border-box;\n    box-sizing:border-box;\n    font-family: montserratlight;\n}\n.t1-ques-head .requiredAsteric{\n    color: #f00;\n}\n\n\n\n\n/* start : radio btns with picture question */\n\n/* start: xs-img-wrapper */\n.pic-selector input{\n    margin:0;\n    padding:0;\n    -webkit-appearance:none;\n        -moz-appearance:none;\n            appearance:none;\n}\n\n/*.pic-selector-2 input{\n    position:absolute;\n    z-index:999;\n}*/\n\n.pic-selector input:active +.xs-img-hover{\n    /*opacity: .9;*/\n    /*border: 2px solid rgba(255,255,255,0.8);*/\n}\n\n.pic-selector input:checked +.xs-img-hover{\n    /*-webkit-filter: none;\n        -moz-filter: none;\n            filter: none;*/\n\n    /*border: 2px solid rgba(255,255,255,0.8);*/\n}\n\n.pic-selector label.control{\n    position: relative;\n    cursor:pointer;\n    background-size:cover;\n    background-repeat:no-repeat;\n    background-position: center top;\n    border: 2px solid #d9dad3;\n    -webkit-transition: all 100ms ease-in;\n    -moz-transition: all 100ms ease-in;\n    transition: all 100ms ease-in;\n    overflow: hidden;\n    cursor: pointer;\n    padding: 0px;\n    margin: 0;\n    width: 100%;\n    height: 0;\n    padding-bottom: 100%;\n    margin: 0;\n    display: flex;\n\n\n}\n.pic-selector label.control .check-set.control__indicator{\n    background: none !important;\n    position: initial;\n    border: none;\n    height: inherit;\n    width: inherit;\n    left: 0 !important;\n    top: 0;\n}\n.pic-selector label.control .control__indicator{\n    background: none !important;\n    position: initial;\n    border: none;\n    height: inherit;\n    width: inherit;\n    left: 0 !important;\n    top: 0;\n}\n.pic-selector input[type=\"radio\"]:checked + .control__indicator::after {\n    font-family: \"Material Icons\";\n    content: \"check_circle\";\n    position: absolute;\n    color: #f3d455;\n    font-size: 26px;\n    font-weight: normal;\n    left: 40%;\n    top: 0%;\n    padding-top: 37%;\n    text-rendering: optimizeLegibility;\n    transform: initial;\n    border: none;\n    background: none;\n}\n.pic-selector input[type=\"radio\"]:checked + .control__indicator::before {\n    font-family: \"Material Icons\";\n    content: \"\\f269\";\n    position: absolute;\n    color: #f3d455;\n    font-size: 26px;\n    font-weight: normal;\n    left: 40%;\n    top: 0%;\n    padding-top: 37%;\n    text-rendering: optimizeLegibility;\n    transform: initial;\n    border: none;\n    background: none;\n    opacity: 0;\n}\n\n.pic-selector input[type=\"checkbox\"]:checked + .control__indicator::after {\n    font-family: \"Material Icons\";\n    content: \"check_circle\";\n    position: absolute;\n    color: #f3d455;\n    font-size: 26px;\n    font-weight: normal;\n    left: 40%;\n    top: 0%;\n    padding-top: 37%;\n    text-rendering: optimizeLegibility;\n    transform: initial;\n    border: none;\n    background: none;\n}\n.pic-selector input[type=\"checkbox\"]:checked + .control__indicator::before {\n    font-family: \"Material Icons\";\n    content: \"\\f269\";\n    position: absolute;\n    color: #f3d455;\n    font-size: 26px;\n    font-weight: normal;\n    left: 40%;\n    top: 22%;\n    padding-top: 37%;\n    text-rendering: optimizeLegibility;\n    transform: initial;\n    border: none;\n    background: none;\n    opacity: 0;\n}\n.pic-selector label.control .text-overlay span {\n    font-size: 12px;\n    font-family: montserratlight;\n    color: #fff;\n    bottom: 4px;\n    position: absolute;\n    padding-left: 5px;\n    padding-right: 5px;\n    -webkit-line-clamp:3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n}\n.pic-selector label.control span.img-overlay:hover {\n    height: 100%;\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    left: 0px;\n    background: rgba(0,0,0,0.5);\n}\n\n.pic-selector input:active + .control span.img-overlay {\n    background: rgba(0,0,0,0.5);\n    float: left;\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n\n.pic-selector input:checked + .control__indicator span.img-overlay {\n    background: rgba(0,0,0,0.5);\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    padding-bottom: 100%;\n    top: 0px;\n}\n\n\n\n\n\n\n\n\n.xs-img-hover{\n    position: relative;\n    cursor:pointer;\n    background-size:cover;\n    background-repeat:no-repeat;\n    display:inline-block;\n    width:150px;\n    height:150px;\n    border: 2px solid #d9dad3;\n    -webkit-transition: all 100ms ease-in;\n    -moz-transition: all 100ms ease-in;\n    transition: all 100ms ease-in;\n    overflow: hidden;\n    cursor: pointer;\n\n}\n\n.xs-img-hover:hover{\n    /*-webkit-filter: brightness(0.5) grayscale(.5) opacity(.9);\n        -moz-filter: brightness(0.5) grayscale(.5) opacity(.9);\n            filter: brightness(0.5) grayscale(.5) opacity(.9);*/\n}\n\n.pic-selector label.xs-img-hover span.img-overlay:hover {\n    /*background: rgba(0,0,0,0.5);\n    float: left;\n    width: 190px;\n    height: 190px;\n    position: relative;*/\n\n    height: 100%;\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    left: 0px;\n    background: rgba(0,0,0,0.5);\n    transition: all .5s;\n}\n\n.pic-selector input:active +.xs-img-hover span.img-overlay {\n    background: rgba(0,0,0,0.5);\n    float: left;\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n\n.pic-selector input:checked +.xs-img-hover span.img-overlay {\n    background: rgba(0,0,0,0.5);\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n}\n\n.pic-selector input[type=\"radio\"]:checked + label.xs-img-hover::after {\n    font-family: \"Material Icons\";\n    content: \"check_circle\";\n    position: absolute;\n    color: #f3d455;\n    font-size: 26px;\n    font-weight: normal;\n    top: 40%;\n    left: 40%;\n    text-rendering: optimizeLegibility;\n}\n.pic-selector input[type=\"radio\"]:checked + label.xs-img-hover::before {\n    font-family: \"Material Icons\";\n    content: \"\\f269\";\n    position: absolute;\n    color: #f3d455;\n    font-size: 26px;\n    font-weight: normal;\n    top: 40%;\n    left: 40%;\n    text-rendering: optimizeLegibility;\n}\n\n.pic-selector input[type=\"checkbox\"]:checked + label.xs-img-hover::after {\n    font-family: \"Material Icons\";\n    content: \"check_circle\";\n    position: absolute;\n    color: #f3d455;\n    font-size: 26px;\n    font-weight: normal;\n    top: 40%;\n    left: 40%;\n    text-rendering: optimizeLegibility;\n}\n.pic-selector input[type=\"checkbox\"]:checked + label.xs-img-hover::before {\n    font-family: \"Material Icons\";\n    content: \"\\f269\";\n    position: absolute;\n    color: #f3d455;\n    font-size: 26px;\n    font-weight: normal;\n    top: 40%;\n    left: 40%;\n    text-rendering: optimizeLegibility;\n}\n\n.text-overlay {\n    /*background: url(../img/text-overlay.png) repeat-x;*/\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000fff+0,000000+100&0+0,1+100 */\n    background: -moz-linear-gradient(top,  rgba(0,15,255,0) 0%, rgba(0,0,0,0.5) 100%); /* FF3.6-15 */\n    background: -webkit-linear-gradient(top,  rgba(0,15,255,0) 0%,rgba(0,0,0,0.5) 100%); /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom,  rgba(0,15,255,0) 0%,rgba(0,0,0,0.5) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000fff', endColorstr='#000000',GradientType=0 ); /* IE6-9 */\n\n    height: 70px;\n    width: 100%;\n    position: absolute;\n    left: 0px;\n    bottom:0px;\n    text-align: left;\n}\n\n.pic-selector label.xs-img-hover .text-overlay span {\n    font-size: 12px;\n    font-family: montserratlight;\n    color: #fff;\n    bottom: 2px;\n    position: absolute;\n    padding-left: 5px;\n    -webkit-line-clamp:3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n}\n\n.images-wrap {\n    float: left;\n    width: 100%;\n}\n\n\n/* start: xs radio images */\n.img1{\n    background: url(\"../images/q1.jpg\") no-repeat;\n    background-size: cover;\n}\n\n.img2{\n    background: url(\"../images/q2.jpg\") no-repeat;\n    background-size: cover;\n}\n\n.img3{\n    background: url(\"../images/q3.jpg\") no-repeat;\n    background-size: cover;\n}\n\n.img4{\n    background: url(\"../images/q4.jpg\") no-repeat;\n    background-size: cover;\n}\n\n.img5{\n    background: url(\"../images/q5.jpg\") no-repeat;\n    background-size: cover;\n}\n\n.img6{\n    background: url(\"../images/q6.jpg\") no-repeat;\n    background-size: cover;\n}\n\n.img7{\n    background: url(\"../images/q7.jpg\") no-repeat;\n    background-size: cover;\n}\n\n.img8{\n    background: url(\"../images/q8.jpg\") no-repeat;\n    background-size: cover;\n}\n\n/* end: xs radio images */\n\n/* end: xs-img-wrapper */\n.resulthidden{\n    display: none !important;\n}\n.t1-result{\n    width: 100%;\n    height: 100vh;\n    max-width: 100%;\n    display: table;\n    position: relative;\n    background: url(../images/main-bg.jpg) no-repeat center center;\n    background-size: cover;\n}\n.t1-result-main{\n    display: table-cell;\n    vertical-align: middle;\n    height: 100%;\n}\n.t1-result .t1-overlay{\n    background: rgba(0,0,0,0.3);\n}\n.t1-result-top{\n    float: left;\n    width: 70%;\n    margin-left: 10%;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n.t1-result-topheading{\n    font-size: 24px;\n    color: #fff;\n    font-family: montserratlight;\n    float: left;\n    width: 80%;\n    margin-bottom: 25px;\n}\n.t1-result-topheading p{\n    font-size: 24px;\n    color: #fff;\n    font-family: montserratlight;\n    float: left;\n    width: 80%;\n    margin-bottom: 0px;\n}\n.t1-result-inner{\n    float: left;\n    width: 95%;\n    background: #fff;\n    min-height: 400px;\n    padding: 50px;\n    padding-bottom: 30px;\n    box-shadow: 0 2px 9px 2px rgba(0,0,0,0.4);\n}\n\n\n\n.t1-result-small-section{\n    float: left;\n    display: inline-flex;\n    width: 40%;\n    margin-top: 40px;\n    margin-right: 50px;\n}\n.t1-result-small-container{\n    float: left;\n    width: 100%;\n}\n.t1-result-small-section p:nth-child(1){\n    float: left;\n    width: 100%;\n    color: #28324e;\n    font-size: 30px;\n    font-family: montserratlight;\n    margin-bottom: 15px;\n}\n.t1-result-small-section p:nth-child(2){\n    float: left;\n    width: 100%;\n    color: #666e78;\n    font-size: 14px;\n    font-family: montserratregular;\n    text-transform: uppercase;\n    margin-bottom: 0px;\n}\n.t1-result-small-section p:nth-child(3){\n    float: left;\n    width: 100%;\n    color: #666e78;\n    font-size: 14px;\n    font-family: montserratlight;\n    margin-bottom: 0px;\n}\n.t1-result-sm-value{\n    float: left;\n    width: 100%;\n    color: #28324e;\n    font-size: 30px;\n    font-family: montserratlight;\n    margin-bottom: 10px;\n}\n.t1-result-sm-heading{\n    float: left;\n    width: 100%;\n    color: #666e78;\n    font-size: 14px;\n    font-family: montserratregular;\n    text-transform: uppercase;\n    margin-bottom: 0px;\n}\n.t1-result-sm-subheading{\n    float: left;\n    width: 100%;\n    color: #666e78;\n    font-size: 14px;\n    font-family: montserratlight;\n    margin-bottom: 0px;\n}\n\n\n\n\n.t1-result-half-container{\n    float: left;\n    width: 100%;\n}\n\n\n\n.t1-result-full-section{\n    float: left;\n    width: 100%;\n    margin: 0px;\n}\n.t1-result-full-container{\n    float: left;\n    width: 40%;\n}\n.t1-result-full-section p:nth-child(1){\n    float: left;\n    width: 100%;\n    color: #28324e;\n    font-size: 30px;\n    font-family: montserratlight;\n    margin-bottom: 15px;\n}\n.t1-result-full-section p:nth-child(2){\n    float: left;\n    width: 100%;\n    color: #666e78;\n    font-size: 14px;\n    font-family: montserratregular;\n    text-transform: uppercase;\n    margin-bottom: 0px;\n}\n.t1-result-full-section p:nth-child(3){\n    float: left;\n    width: 100%;\n    color: #666e78;\n    font-size: 14px;\n    font-family: montserratlight;\n    margin-bottom: 0px;\n}\n.t1-result-value{\n    float: left;\n    width: 100%;\n    color: #28324e;\n    font-size: 30px;\n    font-family: montserratlight;\n    margin-bottom: 15px;\n}\n.t1-result-heading{\n    float: left;\n    width: 100%;\n    color: #666e78;\n    font-size: 14px;\n    font-family: montserratregular;\n    text-transform: uppercase;\n    margin-bottom: 0px;\n}\n.t1-result-subheading{\n    float: left;\n    width: 100%;\n    color: #666e78;\n    font-size: 14px;\n    font-family: montserratlight;\n    margin-bottom: 0px;\n}\n\n.t1-result-leadform{\n    float: left;\n    width: 100%;\n}\n.t1-result-leadform .lead-heading-temp1{\n    color: #666e78;\n    font-size: 16px;\n    font-family: montserratregular;\n    float: left;\n    width: 100%;\n    margin-bottom: 25px;\n    margin-top: 40px;\n    text-align: left;\n}\n.t1-result-leadform-heading{\n    color:#666e78;\n    font-size: 16px;\n    font-family: montserratregular;\n    float: left;\n    width: 100%;\n    margin-bottom: 25px;\n    margin-top: 40px;\n}\n.t1-result-leadform .input-section{\n    float: left;\n    width: 50%;\n}\n.t1-result-leadform-inner{\n    float: left;\n    width: 50%;\n}\n.t1-result-leadform .input-outer{\n    float: left;\n    width: 100%;\n    margin-bottom: 40px;\n    position: relative;\n}\n.t1-leadform-field{\n    float: left;\n    width: 100%;\n    margin-bottom: 40px;\n}\n.t1-result-leadform .input-outer input{\n    float: left;\n    width: 100%;\n    border: none;\n    border-bottom:2px solid rgba(40,50,58,0.4);\n    color: #28324e;\n    font-size: 16px;\n    font-family: montserratregular;\n    padding-bottom: 5px;\n    padding-top: 5px;\n}\n.t1-result-leadform .input-outer span\n{\n    float: left;\n    width: 100%;\n    text-align: left;\n    padding-left: 20px;\n    color: #f44336;\n    font-size: 12px;\n    bottom: -21px;\n    position: absolute;\n    z-index: 1;\n    left: -20px;\n}\n.t1-result-leadform-inner input{\n    float: left;\n    width: 100%;\n    border: none;\n    border-bottom:2px solid rgba(40,50,58,0.4);\n    color: #28324e;\n    font-size: 16px;\n    font-family: montserratregular;\n    padding-bottom: 5px;\n    padding-top: 5px;\n}\n.t1-result-leadform .container-temp {\n    float: left;\n    width: 100%;\n    text-align: left;\n}\n.t1-leadform-btnoutr{\n    float: left;\n    width: 100%;\n    margin-bottom: 20px;\n}\n.t1-result-cta{\n    float: left;\n    width: 100%;\n    margin-top: 20px;\n}\n.t1-result-cta .text-center{ text-align: left !important}\n.t1-result-leadform .prime-action\n{\n    border: none;\n    background: #f3d455;\n    color: #ffffff;\n    font-size: 14px;\n    font-family: montserratregular;\n    text-align: center;\n    text-transform: uppercase;\n    padding: 15px 35px;\n    cursor: pointer;\n    border-radius:0px;\n    margin-bottom: 25px;\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\n}\n.t1-result-leadform .prime-action:hover\n{\n    background: rgba(245,212,85,.8);\n    color: #fff;\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\n}\n\n.t1-result-leadform .t1-result-cta .prime-action\n{\n    border: none;\n    background: #f3d455;\n    color: #fff;\n    font-size: 14px;\n    font-family: montserratregular;\n    text-align: center;\n    text-transform: uppercase;\n    padding: 15px 35px;\n    cursor: pointer;\n    border-radius:0px;\n    margin-bottom: 40px;\n    margin-top: 20px;\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\n}\n.t1-result-leadform .t1-result-cta .prime-action:hover\n{\n    background: rgba(245,212,85,.8);\n    color: #fff;\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\n}\n.t1-leadform-btn{\n    border: none;\n    background: #012435;\n    color: #ffffff;\n    font-size: 14px;\n    font-family: montserratregular;\n    text-align: center;\n    text-transform: uppercase;\n    padding: 15px 35px;\n    cursor: pointer;\n}\n.t1-result-disclaimer{\n    float: left;\n    width: 64%;\n    color: #012435;\n    font-size: 12px;\n    font-family: montserratlight;\n    margin-bottom: 5px;\n}\n.t1-social-links{\n    float: right;\n    width: auto;\n    list-style: none;\n}\n.t1-social-links li{\n    float: left;\n    width: auto;\n}\n.t1-social-links li a{\n    float: left;\n    width: auto;\n    font-size: 20px;\n    margin-left: 10px;\n    color: rgba(40,50,78,0.7);\n    cursor: pointer;\n}\n.t1-social-links li a:hover{color: rgba(40,50,78,1);}\n.t1-social-links li p{\n    float: left;\n    width: auto;\n    font-size: 12px;\n    font-family: montserratlight;\n    margin-left: 10px;\n    color: rgba(40,50,78,0.7);\n    line-height: 25px;\n}\n\n\n/* color style css */\n.cp1 .page_0.t1-landing { background-color: #012435 !important;}\n.cp1 .page_1 .t1-question { background-color: #012435 !important;}\n.cp1 .page_1.t1-question { background-color: #012435 !important;}\n.cp1 .page_2.t1-result { background-color: #012435 !important;}\n.cp1 .check-comp .control input:checked ~ .control__indicator{background:#f3d455;}\n.cp1 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #f3d455;}\n.cp1 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#f3d455;}\n.cp1 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#f3d455;}\n.cp1 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #f3d455;}\n.cp1 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp1 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp1 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#f3d455;}\n.cp1 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp1 .check-comp .control--radio .control__indicator.icon-set i{color:#f3d455;}\n.cp1 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f3d455;border:3px solid #fff;}\n.cp1 .range-slider .irs-bar-edge {border: 1px solid #f3d455; border-right: 0; background: #f3d455;}\n.cp1 .range-slider .irs-bar {border-top: 1px solid #f3d455;border-bottom: 1px solid #f3d455; background: #f3d455;}\n.cp1 .range-slider .irs-single { background: #f3d455; font-family: montserratregular;}\n.cp1 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.cp1 .t1-result-leadform .t1-result-cta .prime-action{    background: #f3d455;    color: #012435;}\n.cp1 .t1-result-leadform .t1-result-cta .prime-action:hover{    background: rgba(245,212,85,.8);    color: #012435;}\n\n\n\n\n.cp2 .page_0.t1-landing { background-color: #404948 !important;}\n.cp2 .page_1 .t1-question { background-color: #404948 !important;}\n.cp2 .page_1.t1-question { background-color: #404948 !important;}\n.cp2 .page_2.t1-result { background-color: #404948 !important;}\n.cp2 .main-heading{color:#fff;}\n.cp2 .sub-heading{ color: rgba(255,255,255,0.7);}\n.cp2 .t1-button button{ background:#EF2158; color: #fff;}\n.cp2 .t1-button button:hover,.cp2 .t1-button button:focus{ background: rgba(239,33,88,0.8); color: #fff;}\n.cp2 .landing-page-mid button{ background:#EF2158 !important; color: #fff !important;}\n.cp2 .landing-page-mid button:hover,.cp2 .landing-page-mid button:focus{ background: rgba(239,33,88,0.8) !important; color: #fff !important;}\n.cp2 .t1-landing-leadform button.prime-action{ background:#EF2158; color: #fff ;}\n.cp2 .t1-landing-leadform button.prime-action:hover{ background: rgba(239,33,88,0.8); color: #fff;}\n.cp2 .check-comp .control input:checked ~ .control__indicator{background:#EF2158;}\n.cp2 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #EF2158;}\n.cp2 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#EF2158;}\n.cp2 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#EF2158;}\n.cp2 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #EF2158;}\n.cp2 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp2 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp2 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#EF2158;}\n.cp2 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp2 .check-comp .control--radio .control__indicator.icon-set i{color:#EF2158;}\n.cp2 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#EF2158;border:3px solid #fff;}\n.cp2 .range-slider .irs-bar-edge {border: 1px solid #EF2158; border-right: 0; background: #EF2158;}\n.cp2 .range-slider .irs-bar {border-top: 1px solid #EF2158;border-bottom: 1px solid #EF2158; background: #EF2158;}\n.cp2 .range-slider .irs-single { background: #EF2158; font-family: montserratregular;}\n.cp2 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.cp2 .t1-slider-nav a{ background: #EF2158; color:#fff;}\n.cp2 .t1-result-leadform .prime-action{background: #EF2158;}\n.cp2 .t1-result-leadform .t1-result-cta .prime-action:hover{background: rgba(242,33,88,0.8);}\n\n\n\n\n.cp3 .page_0.t1-landing { background-color: #09141f  !important;}\n.cp3 .page_1 .t1-question { background-color: #09141f !important;}\n.cp3 .page_1.t1-question { background-color: #09141f !important;}\n.cp3 .page_2.t1-result { background-color: #09141f  !important;}\n.cp3 .main-heading{color:#fff;}\n.cp3 .sub-heading{ color: rgba(255,255,255,0.7);}\n.cp3 .t1-button button{ background:#0079c1; color: #fff;}\n.cp3 .t1-button button:hover,.cp2 .t1-button button:focus{ background: rgba(0,121,193,0.8); color: #fff;}\n.cp3 .landing-page-mid button{ background:#0079c1 !important; color: #fff !important;}\n.cp3 .landing-page-mid button:hover,.cp3 .landing-page-mid button:focus{ background: rgba(0,121,193,0.8) !important; color: #fff !important;}\n.cp3 .t1-landing-leadform button.prime-action{ background:#0079c1; color: #fff;}\n.cp3 .t1-landing-leadform button.prime-action:hover{ background: rgba(0,121,193,0.8); color: #fff;}\n.cp3 .check-comp .control input:checked ~ .control__indicator{background:#0079c1;}\n.cp3 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #0079c1;}\n.cp3 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#0079c1;}\n.cp3 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#0079c1;}\n.cp3 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #0079c1;}\n.cp3 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp3 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp3 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#0079c1;}\n.cp3 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp3 .check-comp .control--radio .control__indicator.icon-set i{color:#0079c1;}\n.cp3 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#0079c1;border:3px solid #fff;}\n.cp3 .range-slider .irs-bar-edge {border: 1px solid #0079c1; border-right: 0; background: #0079c1;}\n.cp3 .range-slider .irs-bar {border-top: 1px solid #0079c1;border-bottom: 1px solid #0079c1; background: #0079c1;}\n.cp3 .range-slider .irs-single { background: #0079c1; font-family: montserratregular;}\n.cp3 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.cp3 .t1-slider-nav a{ background: #0079c1; color:#fff; }\n.cp3 .t1-result-leadform .prime-action{background: #0079c1;}\n.cp3 .t1-result-leadform .t1-result-cta .prime-action:hover{background: rgba(3,121,193,0.8);}\n\n\n\n.cp4 .page_0.t1-landing { background-color: #012435 !important;}\n.cp4 .page_1 .t1-question { background-color: #012435 !important;}\n.cp4 .page_1.t1-question { background-color: #012435 !important;}\n.cp4 .page_2.t1-result { background-color: #012435 !important;}\n.cp4 .main-heading{color:#fff;}\n.cp4 .sub-heading{ color: rgba(255,255,255,0.7);}\n.cp4 .t1-button button{ background:#678D29; color: #fff;}\n.cp4 .t1-button button:hover,.cp2 .t1-button button:focus{ background: rgba(103,141,41,0.8); color: #fff;}\n.cp4 .landing-page-mid button{ background:#678D29 !important; color: #fff !important;}\n.cp4 .landing-page-mid button:hover,.cp4 .landing-page-mid button:focus{ background: rgba(103,141,41,0.8) !important; color: #fff !important;}\n.cp4 .t1-landing-leadform button.prime-action{ background:#678D29 ; color: #fff;}\n.cp4 .t1-landing-leadform button.prime-action:hover{ background: rgba(103,141,41,0.8); color: #fff;}\n.cp4 .check-comp .control input:checked ~ .control__indicator{background:#678D29 ;}\n.cp4 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #678D29 ;}\n.cp4 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#678D29 ;}\n.cp4 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#678D29 ;}\n.cp4 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #678D29 ;}\n.cp4 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp4 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp4 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#678D29 ;}\n.cp4 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp4 .check-comp .control--radio .control__indicator.icon-set i{color:#678D29 ;}\n.cp4 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#678D29 ;border:3px solid #fff;}\n.cp4 .range-slider .irs-bar-edge {border: 1px solid #678D29 ; border-right: 0; background: #678D29 ;}\n.cp4 .range-slider .irs-bar {border-top: 1px solid #678D29 ;border-bottom: 1px solid #678D29 ; background: #678D29 ;}\n.cp4 .range-slider .irs-single { background: #678D29 ; font-family: montserratregular;}\n.cp4 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.cp4 .t1-slider-nav a{ background: #678D29; color:#fff;}\n.cp4 .t1-result-leadform .prime-action{background: #678D29;}\n.cp4 .t1-result-leadform .t1-result-cta .prime-action:hover{background: rgba(105,141,41,0.8);}\n\n\n\n.cp5 .page_0.t1-landing { background-color: #09141f  !important;}\n.cp5 .page_1 .t1-question { background-color: #09141f  !important;}\n.cp5 .page_1.t1-question { background-color: #09141f  !important;}\n.cp5 .page_2.t1-result { background-color: #09141f  !important;}\n.cp5 .main-heading{color:#fff;}\n.cp5 .sub-heading{ color: rgba(255,255,255,0.7);}\n.cp5 .t1-button button{ background:#17438B; color: #fff;}\n.cp5 .t1-button button:hover,.cp2 .t1-button button:focus{ background: rgba(23,67,139,0.8); color: #fff;}\n.cp5 .landing-page-mid button{ background:#17438B !important; color: #fff !important;}\n.cp5 .landing-page-mid button:hover,.cp5 .landing-page-mid button:focus{ background: rgba(23,67,139,0.8) !important; color: #fff !important;}\n.cp5 .t1-landing-leadform button.prime-action{ background:#17438B  ; color: #fff;}\n.cp5 .t1-landing-leadform button.prime-action:hover{ background: rgba(23,67,139,0.8); color: #fff;}\n.cp5 .check-comp .control input:checked ~ .control__indicator{background:#17438B  ;}\n.cp5 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #17438B  ;}\n.cp5 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#17438B  ;}\n.cp5 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#17438B  ;}\n.cp5 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #17438B  ;}\n.cp5 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp5 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp5 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#17438B  ;}\n.cp5 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp5 .check-comp .control--radio .control__indicator.icon-set i{color:#17438B  ;}\n.cp5 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#17438B  ;border:3px solid #fff;}\n.cp5 .range-slider .irs-bar-edge {border: 1px solid #17438B  ; border-right: 0; background: #17438B  ;}\n.cp5 .range-slider .irs-bar {border-top: 1px solid #17438B  ;border-bottom: 1px solid #17438B  ; background: #17438B  ;}\n.cp5 .range-slider .irs-single { background: #17438B  ; font-family: montserratregular;}\n.cp5 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.cp5 .t1-slider-nav a{ background: #17438B; color:#fff;}\n.cp5 .t1-result-leadform .prime-action{background: #17438B;}\n.cp5 .t1-result-leadform .t1-result-cta .prime-action:hover{background: rgba(25,67,139,0.8);}\n\n\n\n.cp6 .page_0.t1-landing { background-color: #4d4d4f !important;}\n.cp6 .page_1 .t1-question { background-color: #4d4d4f !important;}\n.cp6 .page_1.t1-question { background-color: #4d4d4f !important;}\n.cp6 .page_2.t1-result { background-color: #4d4d4f !important;}\n.cp6 .main-heading{color:#fff;}\n.cp6 .sub-heading{ color: rgba(255,255,255,0.7);}\n.cp6 .t1-button button{ background:#F15A29; color: #fff;}\n.cp6 .t1-button button:hover,.cp2 .t1-button button:focus{ background: rgba(241,90,41,0.8); color: #fff;}\n.cp6 .landing-page-mid button{ background:#F15A29 !important; color: #fff !important;}\n.cp6 .landing-page-mid button:hover,.cp6 .landing-page-mid button:focus{ background: rgba(241,90,41,0.8) !important; color: #fff !important;}\n.cp6 .t1-landing-leadform button.prime-action{ background:#F15A29  ; color: #fff;}\n.cp6 .t1-landing-leadform button.prime-action:hover{ background: rgba(241,90,41,0.8); color: #fff;}\n.cp6 .check-comp .control input:checked ~ .control__indicator{background:#F15A29  ;}\n.cp6 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #F15A29  ;}\n.cp6 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#F15A29  ;}\n.cp6 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#F15A29  ;}\n.cp6 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #F15A29  ;}\n.cp6 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp6 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp6 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#F15A29  ;}\n.cp6 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp6 .check-comp .control--radio .control__indicator.icon-set i{color:#F15A29  ;}\n.cp6 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#F15A29  ;border:3px solid #fff;}\n.cp6 .range-slider .irs-bar-edge {border: 1px solid #F15A29  ; border-right: 0; background: #F15A29  ;}\n.cp6 .range-slider .irs-bar {border-top: 1px solid #F15A29  ;border-bottom: 1px solid #F15A29  ; background: #F15A29  ;}\n.cp6 .range-slider .irs-single { background: #F15A29  ; font-family: montserratregular;}\n.cp6 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.cp6 .t1-slider-nav a{ background: #F15A29; color:#fff;}\n.cp6 .t1-result-leadform .prime-action{background: #F15A29;}\n.cp6 .t1-result-leadform .t1-result-cta .prime-action:hover{background: rgba(243,90,41,0.8);}\n\n\n/*New Checkbox Style  Control*/\n.checkbox-outer-base{border:1px solid #d9dad3;border-bottom:0px;font-family:montserratlight;width:100%;float:left;padding: 1px;}\n.checkbox-outer-base:last-child{border:1px solid #d9dad3;}\n.checkbox-outer-base:hover{background:#f1f3f3;}\n.checkbox-outer-base.active{background:#f1f3f3;}\n.checkbox-outer{border:1px solid #d9dad3;border-bottom:0;font-family:montserratlight;width:100%;float:left;}\n.checkbox-outer:last-child{border:1px solid #d9dad3;}\n.checkbox-outer-base:last-child:hover{background:#f1f3f3;}\n.checkbox-outer-base:last-child.active {border: 1px solid #d9dad3 !important;}\n.checkbox-outer:hover{background:#f1f3f3;}\n.checkbox-outer.active,.radio-outer.active{background:#f1f3f3;}\n.control__indicator.check-set{left:16px!important;border:2px solid #f7da64;}\n.control { display: block; position: relative; padding-left: 30px; cursor: pointer; font-size: 16px; font-weight: 500;}\n.control--checkbox{padding:20px 55px;}\n.question-components input{background-color:transparent;border:1px solid #d9dad3;border-radius:0;outline:none;width:100%;font-size:16px;margin:0 0 15px 0;padding:16px 2%;box-shadow:none;transition:all 0.3s;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}\n.control input { position: absolute; z-index: -1; opacity: 0; width: auto;}\n.control--checkbox .control__indicator:after{left:6px;top:1px;width:5px;height:11px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg);}\n.check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#f7da64;}\n.check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#f7da64;}\n.check-comp .checkbox-outer .control--checkbox .control__indicator:after{border:none;}\n.check-comp .checkbox-outer .control--checkbox{padding:20px 50px;}\n\n.checkbox-outer-base.green .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#000000;}\n\n/*New Radio Style   Control*/\n.radio-outer{border:1px solid #d9dad3;border-bottom: 0;font-family:montserratlight;width:100%;float:left;margin-bottom: 2px; margin-top: -3px; margin-left: -1px; padding: 1px;}\n.radio-outer:last-child{border:1px solid #d9dad3 !important; -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n}\n.radio-outer:hover{background:#f1f3f3;}\n.lable-style{padding:20px 30px;margin-left:22px;}\n.control--radio .control__indicator{border-radius:50%;}\n.control input:checked ~ .control__indicator{background:#f7da64;}\n.control__indicator:after{content:'';position:absolute;display:none;}\n.control input:checked ~ .control__indicator:after{display:block;}\n.control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f7da64;border:3px solid #fff;}\n.control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#f7da64;}\n.control--radio .control__indicator.icon-set:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:none;border:none;}\n.control input:checked ~ .control__indicator.icon-set{background:none;}\n\n\n.slider-set{ float: left; width:100%; margin-top: 6px;}\n.range-slider {text-align: center;}\n.range-slider .well1 { width: 100%; float: left;}\n.range-slider .irs-slider {top: 29px;width: 20px; height: 20px;}\n.range-slider .irs-bar-edge {border: 1px solid #f7da64; border-right: 0; background: #f7da64;}\n.range-slider .irs-bar {border-top: 1px solid #f7da64;border-bottom: 1px solid #f7da64; background: #f7da64;}\n.range-slider .irs-single { background: #f7da64; font-family: montserratlight; border-radius:8px !important; padding: 1px 14px  !important;}\n.range-slider .irs-min, .irs-max{font-family: montserratregular; }\n\n\n.input-field { position: relative;  max-height: 54px; float: left; width: 100%; font-family: montserratlight;}\n.t1-question .question-components input {color: #666e78; margin-bottom: 0px;}\n\n\n.t1-question .question-components .check-comp label {\n    margin-bottom: 0;\n    min-height: 62px;\n    color: #666e78;\n}\n\n\n.t1-ques-head .help-outer { width: 23px; position: relative; display: inline-block; top: 4px; padding-left: 5px; cursor: pointer;}\n.t1-ques-head .help-text {display: none;\n    /*width: 250px;*/\n    background: #61696c;\n    border: 1px solid #61696c;\n    padding: 12px;\n    left: -50px;\n    font-size: 14px;\n    position: absolute;\n    color: #fff;\n    line-height: 18px;\n    font-family: montserratlight;\n    -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);\n    -moz-box-shadow: 3px 3px 10px 0px rgba(224, 221, 224, 1);\n    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3);\n    z-index: 9;\n    max-width: 250px;\n    word-wrap: break-word;\n    min-width: 193px;\n}\n.t1-ques-head i {color: #dcdddf; font-size: 24px;margin-top: 4px;}\n.t1-ques-head i:hover + .help-text { display: block !important; z-index: 99; }\n\n.card-sec-wrapper{\n  float: left;\n  width:100%;\n  position: relative;\n}\n\n\n/* one temp and temp 2 css */\n.page_0 logo header.landing-page-header{\n    position: absolute;\n    top: 30px;\n    left: 40px;\n}\n.page_0 logo{\n    width: 180px;\n}\n.landing-page-mid leadform .input-section .input-outer {\n    display: inline-block;\n    width: 40%;\n    float: none;\n    margin-bottom: 20px;\n    position: relative;\n}\n.landing-page-mid leadform .input-section .input-outer input {\n    float: left;\n    width: 94%;\n    border: 2px solid rgba(255,255,255,0.4);\n    color: #fff;\n    font-size: 16px;\n    font-family: montserratregular;\n    padding: 10px;\n    background: none;\n}\n.landing-page-mid leadform .input-section .input-outer span {\n    float: left;\n    width: 100%;\n    position: absolute;\n    top: 48px;\n    left: 0px;\n    text-align: left;\n    padding-left: 2px;\n    color: #f44336;\n    font-size: 12px;\n}\n.landing-page-mid button {\n    color: #012435;\n    font-size: 16px;\n    font-family: montserratregular;\n    width: auto;\n    padding: 13px 60px;\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\n    background: rgba(247,218,100,0.9);\n    border: none;\n    cursor: pointer;\n    text-transform: uppercase;\n    border-radius: 0px;\n}\n.landing-page-mid button:hover,.landing-page-mid button:focus{\n    background: rgba(247,218,100,0.9);\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\n    color: #012435;\n}\n.landing-page-mid leadform button.prime-action {\n    color: #012435;\n    font-size: 16px;\n    font-family: montserratregular;\n    width: auto;\n    padding: 13px 60px;\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\n    background: rgba(247,218,100,0.9);\n    border: none;\n    cursor: pointer;\n    text-transform: uppercase;\n    border-radius: 0px;\n}\n.landing-page-mid leadform button.prime-action:hover,.landing-page-mid leadform button.prime-action:focus {\n    background: rgba(247,218,100,0.9);\n    box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3);\n    color: #012435;\n}\n.page_2 click-button .text-center {\n    text-align: left !important;\n}\n.page_2 .prime-action {\n    border: none;\n    background: #012435;\n    color: #ffffff;\n    font-size: 14px;\n    font-family: montserratregular;\n    text-align: center;\n    text-transform: uppercase;\n    padding: 15px 35px;\n    cursor: pointer;\n    border-radius: 0px;\n    margin-bottom: 40px;\n    margin-top: 40px;\n}\n.page_2 form .prime-action {\n    margin-bottom: 40px;\n    margin-top: 0px;\n}\n\n\n\n/*recommendation css*/\n.w100{ width:100% !important;}\n.recom-section{ background: #fff;  float: left; width:100%; }\n.recommendation-outer .mid-width p {font-size: 24px;color: #fff; font-family: montserratlight; float: left; width: 80%; margin-bottom: 25px;}\n.recom-section .left-sec{ display: table; width: 100%;}\n.recom-section .left-outer{display: table-cell; vertical-align: middle; text-align: center;}\n.rec-image-outer{margin: 0 auto; max-width: 78%; max-height: 420px; overflow: hidden; text-align: center; box-shadow: 8px 9px 7px 2px #d1d1d1; min-width: 200px; display: inline-block; }\n.rec-image-outer img{width: 100%; }\n.recom-section .lead-heading-temp1{ background: none; text-align: left; padding-left:0;  color:#666e78; font-size: 16px; padding-top:0; margin-top:10px;}\n.recom-section .container-temp{ text-align: left !important; width:100%;}\n.recom-section .w100 .container-temp{ text-align: left !important; width:70%;}\n.recom-section .outer-main {display: table; width: 100%;}\n.recom-section .leadform-outer .prime-action { min-width:70%; float: left; margin-bottom: 10px; margin-top: 5px; }\n.recom-section .leadform-outer .container-temp .prime-action { width:98%; margin-top: 15px;}\n.recom-section .leadform-outer {float: none; background: none; margin-bottom:0; display: table-cell; vertical-align: middle;}\n.recom-section .leadform-outer h1{ display: inline-block; width:100%; word-break: break-word; float: left; color: #28324e;font-size: 30px;font-family: montserratlight; margin-bottom: 15px; margin-top: 0;}\n.recom-section .leadform-outer h4{ display: inline-block; width:100%; text-transform: uppercase; margin-bottom: 0px; font-family:montserratregular;  font-size: 16px; }\n.recom-section .leadform-outer h5{ display: inline-block; width:100%;  margin-bottom: 0; color:#666e78; font-family:montserratlight; font-size: 14px; line-height: 24px; }\n.recom-section .w100 .leadform-outer h1 { text-align: left; padding:0;}\n.recom-section .w100 .leadform-outer h5 {text-align: left;padding:0;}\n.recom-section .w100 .lead-heading-temp1{text-align: left; width: 98%; padding-bottom: 0; font-size: 16px;}\n.recom-section .w100 .cta-outer .input-section .input-outer {float: left; width: 100%; position: relative;}\n.recom-section .w100 .leadform-outer .container-temp .prime-action{ width:60%; float: left !important;}\n.recom-section .w100 .leadform-outer .prime-action{ width:auto; float: none !important;}\n.result-centre-outer .recom-section .w100  .cta-outer .input-section .input-outer span{    float: left; width: 100%;text-align: left;padding-left: 20px;color: #f44336;font-size: 12px;bottom: -1px !important;position: absolute;z-index: 1; left: 10px !important;}\n.result-centre-outer .recom-section .cta-outer .input-section .input-outer span{    float: left; width: 100%;text-align: left;padding-left: 20px;color: #f44336;font-size: 12px;bottom: -4px !important;position: absolute;z-index: 1; left: -17px !important;}\n.recom-section .t1-result-leadform .input-section { float: left; width: 97%;}\n.recom-section .w100 .leadform-outer .prime-action { min-width:50%; float: left;}\n.recom-section .disc-set{float: left; width: 80%; margin-top: 15px; color: #012435;font-size: 12px; font-family: montserratlight;  margin-bottom: 5px; padding-left:30px;}\n.recommendation-outer .t1-result-inner {float: left;width: 95%;background: #fff; min-height: inherit;padding: 30px;padding-bottom: 10px;box-shadow: 0 2px 9px 2px rgba(0,0,0,0.4);padding-left: 0;}\n.recom-section .w100 .leadform-outer{ padding-left:50px;}\n.recom-section .input-outer {float: left; width: 100%; margin-bottom: 30px; position: relative;}\n.recom-section .t1-result-cta {float: left; width: 100%; margin-top: 10px;}\n\n\n\n.pic-selector label:hover .check-set span.img-overlay {\n    height: 100%;\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    left: 0px;\n    background: rgba(0,0,0,0.5);\n    transition: all .5s;\n}\n\n.pic-selector label:hover span.img-overlay{\n    height: 100%;\n    width: 100%;\n    bottom: 0;\n    position: absolute;\n    left: 0px;\n    background: rgba(0,0,0,0.5);\n    transition: all .5s;\n}\n\n\n\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){width:80%;}\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input{width:97%;}"

/***/ },

/***/ 860:
/***/ function(module, exports) {

module.exports = "/*!\n * Datepicker for Bootstrap v1.6.1 (https://github.com/eternicode/bootstrap-datepicker)\n *\n * Copyright 2012 Stefan Petre\n * Improvements by Andrew Rowls\n * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)\n */\n.datepicker{padding:4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;direction:ltr}.datepicker-inline{width:220px}.datepicker.datepicker-rtl{direction:rtl}.datepicker.datepicker-rtl table tr td span{float:right}.datepicker-dropdown{top:0;left:0}.datepicker-dropdown:before{content:'';display:inline-block;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #999;border-top:0;border-bottom-color:rgba(0,0,0,.2);position:absolute}.datepicker-dropdown:after{content:'';display:inline-block;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;border-top:0;position:absolute}.datepicker-dropdown.datepicker-orient-left:before{left:6px}.datepicker-dropdown.datepicker-orient-left:after{left:7px}.datepicker-dropdown.datepicker-orient-right:before{right:6px}.datepicker-dropdown.datepicker-orient-right:after{right:7px}.datepicker-dropdown.datepicker-orient-bottom:before{top:-7px}.datepicker-dropdown.datepicker-orient-bottom:after{top:-6px}.datepicker-dropdown.datepicker-orient-top:before{bottom:-7px;border-bottom:0;border-top:7px solid #999}.datepicker-dropdown.datepicker-orient-top:after{bottom:-6px;border-bottom:0;border-top:6px solid #fff}.datepicker>div{display:none}.datepicker table{margin:0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.datepicker td,.datepicker th{text-align:center;width:20px;height:20px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:none}.table-striped .datepicker table tr td,.table-striped .datepicker table tr th{background-color:transparent}.datepicker table tr td.day.focused,.datepicker table tr td.day:hover{background:#eee;cursor:pointer}.datepicker table tr td.new,.datepicker table tr td.old{color:#999}.datepicker table tr td.disabled,.datepicker table tr td.disabled:hover{background:0 0;color:#999;cursor:default}.datepicker table tr td.highlighted{background:#d9edf7;border-radius:0}.datepicker table tr td.today,.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled:hover,.datepicker table tr td.today:hover{background-color:#fde19a;background-image:-moz-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-ms-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-webkit-gradient(linear,0 0,0 100%,from(#fdd49a),to(#fdf59a));background-image:-webkit-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-o-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:linear-gradient(to bottom,#fdd49a,#fdf59a);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fdd49a', endColorstr='#fdf59a', GradientType=0);border-color:#fdf59a #fdf59a #fbed50;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#000}.datepicker table tr td.today.active,.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled.active,.datepicker table tr td.today.disabled.disabled,.datepicker table tr td.today.disabled:active,.datepicker table tr td.today.disabled:hover,.datepicker table tr td.today.disabled:hover.active,.datepicker table tr td.today.disabled:hover.disabled,.datepicker table tr td.today.disabled:hover:active,.datepicker table tr td.today.disabled:hover:hover,.datepicker table tr td.today.disabled:hover[disabled],.datepicker table tr td.today.disabled[disabled],.datepicker table tr td.today:active,.datepicker table tr td.today:hover,.datepicker table tr td.today:hover.active,.datepicker table tr td.today:hover.disabled,.datepicker table tr td.today:hover:active,.datepicker table tr td.today:hover:hover,.datepicker table tr td.today:hover[disabled],.datepicker table tr td.today[disabled]{background-color:#fdf59a}.datepicker table tr td.today.active,.datepicker table tr td.today.disabled.active,.datepicker table tr td.today.disabled:active,.datepicker table tr td.today.disabled:hover.active,.datepicker table tr td.today.disabled:hover:active,.datepicker table tr td.today:active,.datepicker table tr td.today:hover.active,.datepicker table tr td.today:hover:active{background-color:#fbf069\\9}.datepicker table tr td.today:hover:hover{color:#000}.datepicker table tr td.today.active:hover{color:#fff}.datepicker table tr td.range,.datepicker table tr td.range.disabled,.datepicker table tr td.range.disabled:hover,.datepicker table tr td.range:hover{background:#eee;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.datepicker table tr td.range.today,.datepicker table tr td.range.today.disabled,.datepicker table tr td.range.today.disabled:hover,.datepicker table tr td.range.today:hover{background-color:#f3d17a;background-image:-moz-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-ms-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-webkit-gradient(linear,0 0,0 100%,from(#f3c17a),to(#f3e97a));background-image:-webkit-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-o-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:linear-gradient(to bottom,#f3c17a,#f3e97a);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f3c17a', endColorstr='#f3e97a', GradientType=0);border-color:#f3e97a #f3e97a #edde34;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.datepicker table tr td.range.today.active,.datepicker table tr td.range.today.disabled,.datepicker table tr td.range.today.disabled.active,.datepicker table tr td.range.today.disabled.disabled,.datepicker table tr td.range.today.disabled:active,.datepicker table tr td.range.today.disabled:hover,.datepicker table tr td.range.today.disabled:hover.active,.datepicker table tr td.range.today.disabled:hover.disabled,.datepicker table tr td.range.today.disabled:hover:active,.datepicker table tr td.range.today.disabled:hover:hover,.datepicker table tr td.range.today.disabled:hover[disabled],.datepicker table tr td.range.today.disabled[disabled],.datepicker table tr td.range.today:active,.datepicker table tr td.range.today:hover,.datepicker table tr td.range.today:hover.active,.datepicker table tr td.range.today:hover.disabled,.datepicker table tr td.range.today:hover:active,.datepicker table tr td.range.today:hover:hover,.datepicker table tr td.range.today:hover[disabled],.datepicker table tr td.range.today[disabled]{background-color:#f3e97a}.datepicker table tr td.range.today.active,.datepicker table tr td.range.today.disabled.active,.datepicker table tr td.range.today.disabled:active,.datepicker table tr td.range.today.disabled:hover.active,.datepicker table tr td.range.today.disabled:hover:active,.datepicker table tr td.range.today:active,.datepicker table tr td.range.today:hover.active,.datepicker table tr td.range.today:hover:active{background-color:#efe24b\\9}.datepicker table tr td.selected,.datepicker table tr td.selected.disabled,.datepicker table tr td.selected.disabled:hover,.datepicker table tr td.selected:hover{background-color:#9e9e9e;background-image:-moz-linear-gradient(to bottom,#b3b3b3,grey);background-image:-ms-linear-gradient(to bottom,#b3b3b3,grey);background-image:-webkit-gradient(linear,0 0,0 100%,from(#b3b3b3),to(grey));background-image:-webkit-linear-gradient(to bottom,#b3b3b3,grey);background-image:-o-linear-gradient(to bottom,#b3b3b3,grey);background-image:linear-gradient(to bottom,#b3b3b3,grey);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#b3b3b3', endColorstr='#808080', GradientType=0);border-color:grey grey #595959;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td.selected.active,.datepicker table tr td.selected.disabled,.datepicker table tr td.selected.disabled.active,.datepicker table tr td.selected.disabled.disabled,.datepicker table tr td.selected.disabled:active,.datepicker table tr td.selected.disabled:hover,.datepicker table tr td.selected.disabled:hover.active,.datepicker table tr td.selected.disabled:hover.disabled,.datepicker table tr td.selected.disabled:hover:active,.datepicker table tr td.selected.disabled:hover:hover,.datepicker table tr td.selected.disabled:hover[disabled],.datepicker table tr td.selected.disabled[disabled],.datepicker table tr td.selected:active,.datepicker table tr td.selected:hover,.datepicker table tr td.selected:hover.active,.datepicker table tr td.selected:hover.disabled,.datepicker table tr td.selected:hover:active,.datepicker table tr td.selected:hover:hover,.datepicker table tr td.selected:hover[disabled],.datepicker table tr td.selected[disabled]{background-color:grey}.datepicker table tr td.selected.active,.datepicker table tr td.selected.disabled.active,.datepicker table tr td.selected.disabled:active,.datepicker table tr td.selected.disabled:hover.active,.datepicker table tr td.selected.disabled:hover:active,.datepicker table tr td.selected:active,.datepicker table tr td.selected:hover.active,.datepicker table tr td.selected:hover:active{background-color:#666\\9}.datepicker table tr td.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active:hover{background-color:#006dcc;background-image:-moz-linear-gradient(to bottom,#08c,#04c);background-image:-ms-linear-gradient(to bottom,#08c,#04c);background-image:-webkit-gradient(linear,0 0,0 100%,from(#08c),to(#04c));background-image:-webkit-linear-gradient(to bottom,#08c,#04c);background-image:-o-linear-gradient(to bottom,#08c,#04c);background-image:linear-gradient(to bottom,#08c,#04c);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);border-color:#04c #04c #002a80;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td.active.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled.disabled,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active.disabled:hover.active,.datepicker table tr td.active.disabled:hover.disabled,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active.disabled:hover:hover,.datepicker table tr td.active.disabled:hover[disabled],.datepicker table tr td.active.disabled[disabled],.datepicker table tr td.active:active,.datepicker table tr td.active:hover,.datepicker table tr td.active:hover.active,.datepicker table tr td.active:hover.disabled,.datepicker table tr td.active:hover:active,.datepicker table tr td.active:hover:hover,.datepicker table tr td.active:hover[disabled],.datepicker table tr td.active[disabled]{background-color:#04c}.datepicker table tr td.active.active,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled:hover.active,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active:active,.datepicker table tr td.active:hover.active,.datepicker table tr td.active:hover:active{background-color:#039\\9}.datepicker table tr td span{display:block;width:23%;height:54px;line-height:54px;float:left;margin:1%;cursor:pointer;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.datepicker table tr td span.focused,.datepicker table tr td span:hover{background:#eee}.datepicker table tr td span.disabled,.datepicker table tr td span.disabled:hover{background:0 0;color:#999;cursor:default}.datepicker table tr td span.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active:hover{background-color:#006dcc;background-image:-moz-linear-gradient(to bottom,#08c,#04c);background-image:-ms-linear-gradient(to bottom,#08c,#04c);background-image:-webkit-gradient(linear,0 0,0 100%,from(#08c),to(#04c));background-image:-webkit-linear-gradient(to bottom,#08c,#04c);background-image:-o-linear-gradient(to bottom,#08c,#04c);background-image:linear-gradient(to bottom,#08c,#04c);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);border-color:#04c #04c #002a80;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td span.active.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled.active,.datepicker table tr td span.active.disabled.disabled,.datepicker table tr td span.active.disabled:active,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active.disabled:hover.active,.datepicker table tr td span.active.disabled:hover.disabled,.datepicker table tr td span.active.disabled:hover:active,.datepicker table tr td span.active.disabled:hover:hover,.datepicker table tr td span.active.disabled:hover[disabled],.datepicker table tr td span.active.disabled[disabled],.datepicker table tr td span.active:active,.datepicker table tr td span.active:hover,.datepicker table tr td span.active:hover.active,.datepicker table tr td span.active:hover.disabled,.datepicker table tr td span.active:hover:active,.datepicker table tr td span.active:hover:hover,.datepicker table tr td span.active:hover[disabled],.datepicker table tr td span.active[disabled]{background-color:#04c}.datepicker table tr td span.active.active,.datepicker table tr td span.active.disabled.active,.datepicker table tr td span.active.disabled:active,.datepicker table tr td span.active.disabled:hover.active,.datepicker table tr td span.active.disabled:hover:active,.datepicker table tr td span.active:active,.datepicker table tr td span.active:hover.active,.datepicker table tr td span.active:hover:active{background-color:#039\\9}.datepicker table tr td span.new,.datepicker table tr td span.old{color:#999}.datepicker .datepicker-switch{width:145px}.datepicker .datepicker-switch,.datepicker .next,.datepicker .prev,.datepicker tfoot tr th{cursor:pointer}.datepicker .datepicker-switch:hover,.datepicker .next:hover,.datepicker .prev:hover,.datepicker tfoot tr th:hover{background:#eee}.datepicker .cw{font-size:10px;width:12px;padding:0 2px 0 5px;vertical-align:middle}.input-append.date .add-on,.input-prepend.date .add-on{cursor:pointer}.input-append.date .add-on i,.input-prepend.date .add-on i{margin-top:3px}.input-daterange input{text-align:center}.input-daterange input:first-child{-webkit-border-radius:3px 0 0 3px;-moz-border-radius:3px 0 0 3px;border-radius:3px 0 0 3px}.input-daterange input:last-child{-webkit-border-radius:0 3px 3px 0;-moz-border-radius:0 3px 3px 0;border-radius:0 3px 3px 0}.input-daterange .add-on{display:inline-block;width:auto;min-width:16px;height:18px;padding:4px 5px;font-weight:400;line-height:18px;text-align:center;text-shadow:0 1px 0 #fff;vertical-align:middle;background-color:#eee;border:1px solid #ccc;margin-left:-5px;margin-right:-5px}\n/*# sourceMappingURL=bootstrap-datepicker.min.css.map */"

/***/ },

/***/ 861:
/***/ function(module, exports) {

module.exports = "/*! =======================================================\n                      VERSION  7.1.1              \n========================================================= */\n/*! =========================================================\n * bootstrap-slider.js\n *\n * Maintainers:\n *\t\tKyle Kemp\n *\t\t\t- Twitter: @seiyria\n *\t\t\t- Github:  seiyria\n *\t\tRohit Kalkur\n *\t\t\t- Twitter: @Rovolutionary\n *\t\t\t- Github:  rovolution\n *\n * =========================================================\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ========================================================= */.slider{display:inline-block;vertical-align:middle;position:relative}.slider.slider-horizontal{width:210px;height:20px}.slider.slider-horizontal .slider-track{height:10px;width:100%;margin-top:-5px;top:50%;left:0}.slider.slider-horizontal .slider-selection,.slider.slider-horizontal .slider-track-low,.slider.slider-horizontal .slider-track-high{height:100%;top:0;bottom:0}.slider.slider-horizontal .slider-tick,.slider.slider-horizontal .slider-handle{margin-left:-10px;margin-top:-5px}.slider.slider-horizontal .slider-tick.triangle,.slider.slider-horizontal .slider-handle.triangle{border-width:0 10px 10px 10px;width:0;height:0;border-bottom-color:#0480be;margin-top:0}.slider.slider-horizontal .slider-tick-label-container{white-space:nowrap;margin-top:20px}.slider.slider-horizontal .slider-tick-label-container .slider-tick-label{padding-top:4px;display:inline-block;text-align:center}.slider.slider-vertical{height:210px;width:20px}.slider.slider-vertical .slider-track{width:10px;height:100%;margin-left:-5px;left:50%;top:0}.slider.slider-vertical .slider-selection{width:100%;left:0;top:0;bottom:0}.slider.slider-vertical .slider-track-low,.slider.slider-vertical .slider-track-high{width:100%;left:0;right:0}.slider.slider-vertical .slider-tick,.slider.slider-vertical .slider-handle{margin-left:-5px;margin-top:-10px}.slider.slider-vertical .slider-tick.triangle,.slider.slider-vertical .slider-handle.triangle{border-width:10px 0 10px 10px;width:1px;height:1px;border-left-color:#0480be;margin-left:0}.slider.slider-vertical .slider-tick-label-container{white-space:nowrap}.slider.slider-vertical .slider-tick-label-container .slider-tick-label{padding-left:4px}.slider.slider-disabled .slider-handle{background-image:-webkit-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:-o-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:linear-gradient(to bottom,#dfdfdf 0,#bebebe 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdfdfdf',endColorstr='#ffbebebe',GradientType=0)}.slider.slider-disabled .slider-track{background-image:-webkit-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:-o-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:linear-gradient(to bottom,#e5e5e5 0,#e9e9e9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe5e5e5',endColorstr='#ffe9e9e9',GradientType=0);cursor:not-allowed}.slider input{display:none}.slider .tooltip.top{margin-top:-36px}.slider .tooltip-inner{white-space:nowrap;max-width:none}.slider .hide{display:none}.slider-track{position:absolute;cursor:pointer;background-image:-webkit-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:-o-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:linear-gradient(to bottom,#f5f5f5 0,#f9f9f9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5',endColorstr='#fff9f9f9',GradientType=0);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);border-radius:4px}.slider-selection{position:absolute;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-selection.tick-slider-selection{background-image:-webkit-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:-o-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:linear-gradient(to bottom,#89cdef 0,#81bfde 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef',endColorstr='#ff81bfde',GradientType=0)}.slider-track-low,.slider-track-high{position:absolute;background:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-handle{position:absolute;width:20px;height:20px;background-color:#337ab7;background-image:-webkit-linear-gradient(top,#149bdf 0,#0480be 100%);background-image:-o-linear-gradient(top,#149bdf 0,#0480be 100%);background-image:linear-gradient(to bottom,#149bdf 0,#0480be 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf',endColorstr='#ff0480be',GradientType=0);filter:none;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);border:0 solid transparent}.slider-handle.round{border-radius:50%}.slider-handle.triangle{background:transparent none}.slider-handle.custom{background:transparent none}.slider-handle.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick{position:absolute;width:20px;height:20px;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;filter:none;opacity:.8;border:0 solid transparent}.slider-tick.round{border-radius:50%}.slider-tick.triangle{background:transparent none}.slider-tick.custom{background:transparent none}.slider-tick.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick.in-selection{background-image:-webkit-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:-o-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:linear-gradient(to bottom,#89cdef 0,#81bfde 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef',endColorstr='#ff81bfde',GradientType=0);opacity:1}"

/***/ },

/***/ 862:
/***/ function(module, exports) {

module.exports = "@font-face {\n    font-family: 'montserratregular';\n    src: url('assets/fonts/templateFonts/one_page_slider/montserrat-regular-webfont.eot');\n    }\n\n@font-face {\n    font-family: 'montserratregular';\n    src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2'),\n         url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAF/oABMAAAAArTAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABqAAAABwAAAAccs/MDEdERUYAAAHEAAAAIgAAACQBGgHPR1BPUwAAAegAAAWQAAAM6lxFeERHU1VCAAAHeAAAASUAAAJAhWCVFU9TLzIAAAigAAAASgAAAGB0m4zAY21hcAAACOwAAAGBAAAB0uW5QgJjdnQgAAAKcAAAADQAAAA0DoQSg2ZwZ20AAAqkAAABsQAAAmVTtC+nZ2FzcAAADFgAAAAIAAAACAAAABBnbHlmAAAMYAAASjMAAIkAzP2GP2hlYWQAAFaUAAAAMQAAADYKU6GSaGhlYQAAVsgAAAAgAAAAJA90BvtobXR4AABW6AAAAl4AAAOg81NJd2xvY2EAAFlIAAAByQAAAdKoeYfkbWF4cAAAWxQAAAAgAAAAIAIFAZhuYW1lAABbNAAAAikAAAT8XBmqrXBvc3QAAF1gAAAB5gAAAsiaw/vdcHJlcAAAX0gAAACWAAAA8swwVc93ZWJmAABf4AAAAAYAAAAGev5VkgAAAAEAAAAA0W2IUQAAAADPqhg+AAAAANG4K3x42mNgZGBg4AFiGSBmAkJGhqdA/IzhOZDNAhZjAAAqLQLqAAB42q2XfWjVVRjHv7+7O7e7ezfd3IuZRYQpmlrOWWrLFc1ZOZ1NKyulRVh/GDJf6O/oD82wP3yXZWpvvmVSsxexmM6fIDGGhMgMkTl8IxgiMkZIePqcZ3duc85t0P1yzj33vDznPN/nOed5rgJJGXpTq5VSWla+ULnvr1y6TI9+8M7q5XpSUUblnCJ8BXf9ylfKC88vfET5cyvKqSsr5lJ3G4+8W72qWlnLlq5crlzrkdWMaIiy7HfAiJ+dommRefFqfmcoleJ7UzVazzL2sbZrpGq0W5N1AkzTSTBdQbDVTjRTa7ReG5m1U9/oEPVOXdRV3Qgi2hg8F1QGi4L3DJWgGnxoc7pwMYmrwUfJmV3zgXZ2tZMyKMxeE6znxNluLfUod93q89YTUhe7W2iR7do10d1UQmPcnxpPKaQUUdZRNlO2ULZStlG2U2ooJyiBrYtQ32bNP+gac5eQ13anZyg9dfTcRnaI7JCRU4yEyA+RHyI/RH6I/BD5IfJD5IfID5Hn5ReyuoTvKve77bgPW/i6xF2j76Dt3zHLj/5tGrXSajcNW0zbA/TG3Flatfyeif3iysFmYzVRk1SoImw2XTNUzFipZulFzdF8vaJKLdAb+N5irLdZW7RV27BijT7XDn2BXXZh86/0NVb9Vnu0Vwf0nQ7qe9XqsH7Sz/pFv+qIjuqYjqsen2jSOUXST3qvSG1NK9PDegB/bHfX3QrX5Npcs2twrW4Duvf7cWfQsLPdhG0H/Olc51pg537zkqOw6esbg9hhEHNN/ya03pHU5Ar67zY2brhG10hfcx8LE4w12qq2fnaotfpmF1/9numSl+lCbgv6g1N3Rk73uaatu3zWNGLNHna59779nf5uPZLtZg3yM4B9YFShf9PcaTt5OWUKmtTbqH8jc5Kth7gvHVI39Fg9sJPU9fbGAa0L3Z5efafuzZRb1WUp71vuvGvoNt7QZY+evLgrVt/q0Xekb4u4OnxlVfLXAbeiwzLuM0Zq3SHr3dTHWu9bze6sO3MfjY8ipRkLhP6c7ofBeEv3ffr9TO286bzgHavODuBGNXiOub9toIn3pN3WJf6PN6Lz5gzGP3rfNc7V2v0V62Puhd5e5P64r/QLSflN3d+MXtMi3JLRIFuPgZEaAyJEnbFK1zgwivgzkbs0CeTrCZBFNCpkdAoYRlwqoj0VpOgpkKGnwXCi1TS7gTPIQZ4B+USuYtqlIE9lIFezQVQvgUyi2Rz6y0FCc8FQzQMxVYCoRbo8LQRxvQoK9BoI9DoYokUgzaLgCL0FYkTDxbSXgAfJfdai3TpALgPSiZPbqWtAOnFyJ+fcBVKJlLt5Pb4EI4mZe9lxP8glH/oR+bUgnah5mP7fVEfPMTCCqFlP7fOpVDKmq5z/GoiyWwknicFFNhhmLKcZywXGchyOx9EeD+J6XBNoe66HwPRk2p7luLFcYCzHjeUCY3mEsZxiLOcZyzHjN8aeJezsWc4kS5gF72XkCgljOdDLIGFc5xvXnuUK2p7fbHKJSkYXgFzjOmFcZxvXWTC9CHY8y1FjOcNYjhrLqaoC6XD9CTp6ruP6VJs4rec6blzHjes84zpmXBcY1wFc7+O0+8lKEsZywljOJj85QvsoSBjjOcZ4lEzlOGf2vEctm40TEULmeBvEsMA1y4+HwvdYPNx7MXkanpsKo8WcshQuhsPBEnIb7x0T7MSF5h1T7MRFnHcvvO7nBLPZvx7tvfS3TXoV0i9a3lzFvAzf6ny53b+dty/5fbPn3eY9+osM8E507BYj59vbdiV5K2PIzeA7DtJhJxOdckAq+d9MfKQJpJGrncMLWkBMl0HUVnTcYe9XEfOowHwpYl7U4RspyfvgdY2YdSJmhRTjM2L/IXwGmonf5rCfzwpbdPk/0qxygnjahZBRSsNAEIa/TdooIiJaQxEfikgREQrBBx8kIIaCkBIpvUCoWsSllTR9EIsH8ASewyP45En0GHWyWVA04sP+O/PPvzP/LApY4ZE33KgbD2iMsqtb9nWajzmhJlUWC+pyKRzJ65Wcj3t2OmjR7iVxC7+f9AR/qYrcs7lrGC9NdU77OkuHHOqbUUqgJ0PN8SS7HBNOZ3dTIvMCg67BsqcyWLP9llinyS4HHBHStdXQzHO4ILPMk2WeebHRK+9lF1XOUaop7Jpwmrk5xZQ9AnHSNw4cmeULu2N9JAbvbVyl6HxTdKS6KqoHcmZmpwZbxQ9KXLzZsPt61jH/VLZ/VBzxGgkqNs38ak0gu3xpSsWyMJ54+5A7kV9xiI3j87//4xPBWDJlAAAAeNpjYGZJYZzAwMrAwmrMcpaBgWEWhGY6y5DG1AvkA6XggJ0BCYR6h/sBKYXfTGxp/9KAkgeZtBQYGCaD5JhEmPaA5BiYAVMBDFIAAHjaY2BgYGaAYBkGRgYQOAPkMYL5LAwbgLQGgwKQxcFQx/CfMZixgukY0x0FLgURBSkFOQUlBTUFfQUrhXiFNYpKqn9+M/3/D9ShwLCAMQiqkkFBQEFCQQaq0hKukvH///+P/x/6X/Df5+//v68eHH9w6MH+B/se7H6w48GGB8sfND8wv3/o1kvWp1BXEQUY2RjgyhmZgAQTugKgV1lY2dg5OLm4eXj5+AUEhYRFRMXEJSSlpGVk5eQVFJWUVVTV1DU0tbR1dPX0DQyNjE1MzcwtLK2sbWzt7B0cnZxdXN3cPTy9vH18/fwDAoOCQ0LDwiMio6JjYuPiExIZ2to7uyfPmLd40ZJlS5evXL1qzdr16zZs3Lx1y7Yd2/fs3ruPoSglNfNuxcKC7CdlWQwdsxiKGRjSy8Guy6lhWLGrMTkPxM6tvZfU1Dr90OGr127dvn5jJ8PBIwyPHzx89pyh8uYdhpae5t6u/gkT+6ZOY5gyZ+5shqPHCoGaqoAYAIdFiHwAAAAAAARCBZoA2QDBAOwBIQDfAOQA6ADsAPIA+AEEAQ0BEgDTAKwA7gC8AMoAfwBkALUARAUReNpdUbtOW0EQ3Q0PA4HE2CA52hSzmZDGe6EFCcTVjWJkO4XlCGk3cpGLcQEfQIFEDdqvGaChpEibBiEXSHxCPiESM2uIojQ7O7NzzpkzS8qRqnfpa89T5ySQwt0GzTb9Tki1swD3pOvrjYy0gwdabGb0ynX7/gsGm9GUO2oA5T1vKQ8ZTTuBWrSn/tH8Cob7/B/zOxi0NNP01DoJ6SEE5ptxS4PvGc26yw/6gtXhYjAwpJim4i4/plL+tzTnasuwtZHRvIMzEfnJNEBTa20Emv7UIdXzcRRLkMumsTaYmLL+JBPBhcl0VVO1zPjawV2ys+hggyrNgQfYw1Z5DB4ODyYU0rckyiwNEfZiq8QIEZMcCjnl3Mn+pED5SBLGvElKO+OGtQbGkdfAoDZPs/88m01tbx3C+FkcwXe/GUs6+MiG2hgRYjtiKYAJREJGVfmGGs+9LAbkUvvPQJSA5fGPf50ItO7YRDyXtXUOMVYIen7b3PLLirtWuc6LQndvqmqo0inN+17OvscDnh4Lw0FjwZvP+/5Kgfo8LK40aA4EQ3o3ev+iteqIq7wXPrIn07+xWgAAAAABAAH//wAPeNq9fQlgVNXV8L3vvdmXzJvJzGRPJpNMCCEZmCEJYQeRJQIiICoiAmWTRQQEUURKEZEdxQURESm1lFL63mRAVFQsouJSS6lQXGqtSw3bp2gpS/Lyn3Pvm8kEgtj+3/8rM/NmyXvnnHvu2c95RCB9CBHGG24kIjGRCpWScNeYSco4FVGNhk+6xkQBDokq4scG/DhmMmY2dI1R/DwqB+TigBzoIxRoRXS9Ntlw44Xf9pHeJ3BKMqfpNL3HsJRYSBrpRBRzOC6KxC+VUcUVVsgR1eCox0ed1UDMZarDVK/KFF6tsrtONJmFIn8Nad+humNVxOdNNxaGPHJUFoNzBtw1AP65Pit+/J7O113XueugQeJJOkbb3LgFrzlf3CJMMWxguPQmACQpUwzROLy3SGWKFGGf6G8pgARwxEUX8cGXokuVaFncxN6pFloGV8dr4v/z40vj4hZ6TjPjA65TTYjhEbhONsmn/Ugsi5CymNeXGY1GYya4Qsxss8NxnNAsk6OsTpBzcov8UZVI9XXp/ozsIn8kbpDYV6IrLx+/MsBXRovVAV9RpSCsZB2JZ3K4Ml2qyVYWN/N3ZpfqAyi9/J3XpdrgOzuHOUDLlKqsl3qsOncn8ZZZX+rx0LkqPFCyXHVClskDV2PPRnyG89ZZMs1w4HPVWX02D56tzuG1ww9c7Flmz+n4jL/xs9/AX2Wwv4JzZifOk5M4Ty7+pi4v8ct8/Fzs6RJERM0lI+45uXn5FZf8p/TMQmJXBzwBeERF9jAF2CPowQf7SqbFZdoXLhos31lOp+JTjlP7uJzmy9rfyneUaY/D0346rUx7go5T6B0KnaE9gg9Fe1LRNtFx+IDPCSx/pfaptNG4g5SRCKkhG0msFFZQCUVVUaxXopFYqWgtq+tZ2sZSFktHHpKjaiZ80z4SS8/Eb9LdFuCfzmHFeURt56xX2rnUNrQsJsrhSCQSL2HrEfNkRuGdUuJSq4Cxg856tQu8tnPKboXWqMEq2a36fTU1sLlK4SNSo2TKu6nTH2wXrgHmV9Ldiq+mfYce1OeXK8yVHauqgRN9flOoRM4zwZYwyUE5VORJh6+dlHanlR1DJZV3vPRxaafBVb3alWfJX78RP/HC+I1b2ve4tUv/8lL3/7wZf0Q7pw25bsBQev0NN910w8eHtgfoBrs7N7tNaU3369v98pCPOrUfvPM/vD1HW5KWHizsUNPvlui2v2Zon9F8+1zxdz2H59Fe9gEND8g39rzm5gLY5wYyuKnBNN+wCfa5h/hJgLQjMRIrQHqmR+PFEskAUohIRG807mZv42ZHgeiAF/4uuy17ly2RNNyV5WxXWl3EARxudalpwO8G/s7gUjPgXSF/V+hSS+BdLnunVgBt00B47BJMZjHdDxRUSwrhrTcrO7/Ah9JENReDbMnILSzBL93Z8MZgTSPwBpivY1UBypmCUHW6L1IFtCw0emjUQi/7PFhoHPwOHffOO9qmdzbN/sucOX+ZfZeU//nFL4S+LT6ecsfd4g9vffHFWwe/+urg8qeeWv7wE49fXGzYcGEi3cY+/uKLg8uffHL5svXrgYzAk3Oajhl6GLaSQqBgDXmA01ANSfUxGwqtakYsxnTmI/FyxmJ1wXIzyE7iqldIWA3CS7lL7Qg0cXKJgPxWHgTmMtYoHeW4rSDUNh1Zy+mO+fLa1CDvhQrg65wapVreTczO7Ly2YZ0e3cXqEDBdFMWvUzT5/FXVfqPJbyoxBguLgBjRSHWoxEk96f7uIifLnMLq4UOrln3w/HMHS7tMGN7jztcGdNpwzbD6eX9/q/51rekP6+96avWJmROnb53adcjg0O3X3ziZLu0y+frajrkvrluz6zcP1kysHdghcP/eGetmbZ75xfyPX/1y35SHV5xc2Ple4Z5pj+ZH+gyu6Df8Z0ArinKehpmcLyUtZbqUItP1F9WQFObzdTGO59jUJAjTDd8SG/ERRQxTxR5W6BHVBIrIwf7A7XJXR42Cy+0PhjYtuvfD2QsXzv7wXnof1ejB38e0Ks2qVcV+z+D5Ac61P3EuAz+XeES1JM/lr3K7hJKoD55NP8xauHDWh/cuWnSvFqPv0LP0ndjvtWpN0Kp/j+eKin2EdYYDRCYhoqSF4wZQZoiZO6ykHQEdhouL7G+MqB6OWHVJtb8kaqr24/L4g9Wm6Isv9twtzBd2d9uzpxs7kHInj58z7fDhKbPHT549/fDhqYTB3Z98LsalIQD3zQRYSDFF45TxmWKIxAhFUUesIAQpwUMqotQD1KxHFCESt3A4QKtarPi1xQS/tFrw0EosZTrmnsoAED7gDYC46k+nbKCTtfUbhP7P0UnaU89pT9FJCEdt0810FDlH7KQE4YgbRWJFnB2cjPZ61QmsbBFBZFJ7DRoG/mbuTKO1gzv1r+44oPjubbHQtTW1/bt0qlQYfguEfGGO8DowRxt2Xo6c/oLMohLYLaIReSfBJpUB7wJ6TsjfsoXTaDTYMWNIA8i3NilWTNKYsaYaM6qNnaPZahnN7ZWErQLna/qwySWWGJcCTMREo7RMWHaw8Z5vTfecW0aY3TSu6YKh2LAZruclYFuYUQo4QAqgDFU9Uj1VfIxRrfZ6FI8uIIwRCOSHVxfIP9Us4r72OEC8UYORize3iwQKCD6JLnc04pZdQrBQGEe70hJaTLtoB7SPtWN9du3eVVe364U4vUt4ic7Vljf21ZYLh7Uz2nlqok7qopLWwGmSDYAWw/4zoLSX0PrBTagSEaAzhhXpiCra6mMS06IS8oIpyQtBOVuwnpH2H70wUdqP5wL7U7oZ5J6PDCMxG2JrFutjAsMWz+cPKy4gsL0+ZnDh+QzIkC4DHrpscGrQCCDabSDG7DWKR4ZfgVKtUQRUqXDJqgAuhYUCB1ZyLQmiytSngTrfa9TOayuFvQ2SIF9/+8KZt/1xlHT0/Td/+bL2pTbnmCJU37C124hxY4YDjOams+JZw3rAewiJZSKMklSvOMNqGkKYAxvniOoz1MdMPgTLhGDlwnr4TLAeLhnXQ8rkOt4px6ibAZjmVmSm3/NolGmWMlpJA8B91J9HvekSiFnzhIGv/WzV5mfXvkXnNO4XJ2uTBrzwqfbFqcVawyMH+g9actfd81bRR4+u1/pa0t57/t2Lw5Ge3YCeG2FtnGQCiTlwbQQmICWH4AADMoqrpFgjsGxsdYy4p9PCiuMI7HnVbq5XTJGY3YHf2ZHSDjseOnARkdXswFeKiAgRZsfgogIX4x6PeoOwut3o8XotTLf/49Chf9AxcfGhhmfocG3HUW0z7CKEr7LpnNQX4Msi00ksg9ES1tuB6+0S6+OyNcPhKFNl+MwqM1liRwizw4r9iCqb6mMyA0hOs4BZ5kLGUr2w8XLg1STL7phkzWCKTcrgBLfKKvXWtCB0sNAkB/wBuToiedMJ0Lly7Ij3xq589tnl7/1OnCw0zjnwT5qp/e27B7QTG9/of/2ye6c/4BbOHtPeEf712kfa+ZGJfXpW2gJ86yfFZCqJeRGTXFHfp1apPp4W9IJdo6bhlg0xKeEw1CsOl1oAsLpBNYD1ohYAPeNWMc1bjIrZLasmI0IfzAVUiNsBqKjWNMDEVKOIMuhxoDds4wjYgRUUtrCfszcJFpBiY56QwM84jg6h2VOO3zy61/Zh775jvJt6jvxbO/219j/aQeqhRdfeU/vgs08sXv1rQaE3041dO+xu2147/u27//7z37RGOnNK+9sGhx9ZNH/VM7BeA4GfRsN6mUkPEjMk97oJUDUxDWEiuEAWhqHZVQ8SCz81g7JQrbg3qYmxDGpgYO4ADZgGSu7GA01EKG88LIjn6JYXL+ZLrx8EiTgSaLqd0bSQlJNFOlWzQfpZ8JplQNVQgdfiYHYRVSrYNTOAZzNcSrDgiKwawQYyclMow8X2oBu+LcWv7K56NQwflIJBtNuSBnZhgcjMwgKwBFXihi0ZkmFDw2uZG0RqDTcLqytAZhRFkVWMJrYxA8z+KdAp7UFTqIodjnxm+R1zqfjJ36h414QHn9KONhFNO/rVNtpx+/YN67e3f2TR4jVrf7HoEbpq8f6y9lsnbdv/9m8nPVte9vqi1z756K9zFi6cM3PBAsH6szunvz1jBuOxEUCPJ5p5zILUcCV0QRB2izfbgjzmbeaxDBND3YNqwcB5LAO2KmzcGhSPoLVFby7D22XhMtMrKw7wR4AKMSPx1HC8SbSAyMBphaGSatw37hIjHDO7r6qkqgLUh3EEdX9NZVqtKdpXU07cNLr39qHIatqpI//+/MlfAG/pfCbuB4Joq7UXtG3ahC4dXihrT/3Aan+av3rTbMZofD8xPSuOYn5EhxRNC4ZP3KEr23REEYQX6loljb2o3ktUrnyp8m2pgoWNSV0sMLsDr2kH7RMhijccd+lX8qPloTgiaHwo7ghqGWZ/7KL2NFe6l0cnWhghYvK6SXNkAr90ilUiLkxendtfu8H+WkiMhIAY9Vqot784rbGD8IEQ/YAu2K0d1g69gHD2pzPFuPg6i2sUpFgyYMHEDboxYw4nohaoQ+ABp2p4TJxGZz73HN2J1gxe73W43jK8XnWlBfSNt7/wQWMHcdrru2k5De/WFn/A1sLadFocaFhDcsEe+zkBzooH+FpkhVURea0NM7NzeRgi16XmoYfrqK9zBvPMZfE0/jkYr9wRUYIuZp8YQeiV4i/zgNfE9CyUbk6QbnUFgeIQyj+/rNiAM7MC8JmROHO5L9Kdci/E4A127G7QNbgnSW6r8R/79v6tqObaa2uK4vnRbl2j+TPHTZglTebUF8+9fiS2tfed1/fr3e/2TtfMGHRN1x43Rm66ZcqkhkXNiyGQvtpbpiXgx/YEifcySDpUmu04lbuG45X8yBNW+4Dmt4NAiRdx37aI6aOiAtBHtWGUVVQZxKjTnuPenuPey1av9GKEUvpF1ALYpTURpYC7sBbupwyGn+X1AulkkLI97Sq7IkUKZNXVCXZuCW5VotorYc92qlH7eODVVaPUynHiL2lvwZ9mu5U8tnfdVUUFks/tTYddGgqD5RYsRCHGyOivjMpsE1d2FEJFwUJJ8Ka7fRJ8AO4d2hwhoVj/Hsnc99GLdBR9iA47s+Kj3429X5a675624OiSGR8suecF76eRdoNnT96rffPrP2vPvTvzDSo/PfavQ4ffop2Zt0/73ZmVwoK1s+5Zs+6eu1YLwZfodSeXL/lG27P3a+2bocNLR46a+7cVS//24LTyJY2Vnare2bCeWl6fsU+re3ud1rR7cvfOj/cYvPgL2vONe7dtnT/32We5jBAIMXwFushErCzOgFEGMco9QKOZUBCFRrTIbGHVzlSPGchkBaJE0UYRA6InQAXh3nPCLE1b1li+7AshVzvDfPI+2l4hW1gAO2wvXKMPs5/8sNd+xq+Chh7XewUgdTP87FIZeKkAk7ppsLoZESWNC14byIwc1DlgtaqF8EEOqnAzrJ8fD2w1SoYMb5UCt2JA4ORAinoJFgc49cEW1A/2CjM+o8LSOWu3avU/aHPozNXPbl6lraEz71606G5tjWHDvl/fuz0n8/VH9hw6On387dM+nHDryLG43/s2nTWMBF8ih0R1WwvtKmRt1Y7A5yaAR74E7gIDKm4mFibfdE4CzcdtDXAfUrmk75y3qf+ZJ2ngjlWDj0w7qh2lpUenHB625k7t2BNPayffvFv44Alq3zdj7iT1xnHaJ9rN2ke3Xr95+gMzX6dpbC2RzqeBzjaSTjrpVLYnqJyO0HkZdHYgrZ37OSYA1IeAptuZSaSTjrE6oxup7EiQXAOfpen779qnbT+i7aBjDoM19/cj2nbDhml7tX9teE/b8+IxmnnsI5qDNAI4pA8ZHLU6FJYEFGCYxg2crQwIkJ0BZAGA0OllZo4FbH14Fi26A6x7vdzj5Y+9Emk4I+xt7COWGDYc0+4/Bt6Fft2FcF0LSBx23eZrmg3smma8prWVazZfzZa4molfba+4XwD9saJxDl5q3NHGOEnwwXTgA8bPOYQTOJaew2KZfrDyJby0rSU/p7FYs5rp4jzsA9aN2aQc9F0yZcbN6TmwDJk1ik1WiRk+lviiAN80s40TeBoNU4xeJljnHTrmyHpaNHX58GN3rf1u+dCV+6f9auvhO7XDj27Uvnl7jvD+O3TgK9Nuiw266aHjK6e88vD14+jaxv8ZPhF4x0n0NTOsZ2vWQ5cCpmgy2m8VGfWszStmA2yEiGJzqWaKAQvGSImFwiRGFBwXIN4Z4dyZM41mw4bGR4QZFyYKQxt3ksT16E4WbwqkrJUebUJflz0MyTPuZUKF/W1TA/iOY+BvXaQ7iaUl/B2rwBmNKjLzHoHLYyamSUwWWFc3crmUxl0Yi8wcLW6IVVXKIBjkdCPI7tl9n6sdO01zCV+cOtR0YM/AoXPvFLRjDQVHT+k02sho1P4SGknRloRhpFApWomipaaGo0AD4DNTEYmyg+Y2figM0T7VSn8A2mQJXzc+3fCucK/2g7YuSR8pOxEPYHtI1PcQiwdwGsVExr2iIRkPYMT3whWmGzZc7PVx8lzGbXAuO2ZwGNzGFLgdXCaYmUww6TYFBodMIBJUQULniWNi5pggGnJQpEEq76X59Bg9SnM/E7Qum7Suhg0N/cQXL0yUwg2TxKcuHiIteMtC+rZy/ebtaHGpom5k29A4RH9YYF6a6VIYohQ5DAA4LZLTpxslwPa8ZIILSxcbuO3RdNZYCfvTBRZXX+61q16gINuW2cgleey6briu28WNUVAt+Wjcu+FCDoZ3thd2qNlCdBOebUKMOLJtJ7hdebSgO3XhpjT2fZuOOryJZr0zd+472tebDmtb3/7XylPUd3zZsuMrVp4S3n+XDtwL6vh77c/amddnvkYH0xHaNyeWLj1BM+qXLEnIb4zBWsFe750qwTwgwSw2tgcZgzOjXbUC6LaIHtBXDRZuuKseDNzoSrCAgCdbSjNps97rCtZLqXZUO6Ptpj23xWLbtH2GDVpT/fcA2RBh2SNrV6zkttsB4zKgXxbYqxNIzI/0y0/Qr1isBxhUp5iwW9UcgCXHxaQakhFN0kIQZXHJme63oykFO84FBHWmyxikUfP96EC5QMIVyyrSN4W8ALIJg+F+NLNCJaErElr74p/z58x6YsywP45/6ORNh7VfvdU6xZ/8Xnu435K522uHPfsofY0Oakl4TvdRQPc0kkFu1DnUwjkULRI0uZH0DN3MpDB3MeMkHUlvrlez4DUdpItqNSPjuJzMPEGrJGUpjCYQAMZgIHU9+lIPDW9YQ3tpp7UL6RWgXYdvi8e3aTvYqvz2dCctQGNC89Lo8Z6N4MOWkz+TWFlC/qUnORucePmImuesV/L4jm7jZI465jJPPfWHOKYwnYrDpVj3qQH3eSW4D97U2RxWT1mdHZ+VgKuuMBD0lMXguWB5wfKgEfCpidkwl1yDZvNuq83uCBQG9XwjveS90jOLqnkyi2cpJrlOSs8uQy5o41b9GSyWVMYFcbZcR+WMNnp2zs+zcxIzlitMPErAlZ4RdJ6Jx/Aq75hGxbkLV1WOvPvnP797ZCXNP/EwNU0aP+NvN019oPKWOfDhLR21w9/+Snvv40M/u/PWYdFBHdoUl/YY9vOhLxwb0ufDa665vl9kYIfSULteN/5i2Cufz0eaukHermF2cGcCTntK/FURIyyxbTyiGkDkGowsZAoGQ8zIQqZGDOQ1+4kYj3VLC7TOZ6TXjx272EN6na3ZZrAXFjKdVaPrLKMuzxVrlKksLtIxa27BqCBoP3ciQu9MYxF6zLdwTwIOXGB6bP7ug5jy7hmtrnGvFhOGiv0b9uz64/u78VX7p/YKvYbLX0CHXduIupbhRgRm5lPFFEYFTlRiZLIWrgHSPUqDRirRl+mrDY17z4NonSWt1nUvnss8mumSR0jMzmw7WzTKThgTJWM0mtQo1FGvUJdqZJqEaRTkv243nnqBpdDFCqci7FOtnvMGxbbvpT/sOBVjn1sqVJvVDKzpVA3p8J20TyQxwWBlXCaIksFitTVzGZweA/Q8g4GwVzPwLRyDUfTWU/A08oIWOKft0LZdYLisFDhC0uiLWxhO+UCf0Uyvh/Tdb46yEC/YPqjXuTYXUP9IVqZ/LEyXs3/5glXLphl0NB1LszR895m2QFsofCa8rDnpmcbrG/1CbuMXeB30tfws7gf2g6nFOliYyYKaz8o0MFsNWBZTYlmiiBewlvADfYo+erbxu/8Bu+Fa4eWGa7Qg/ZCvzUA4v5Hp2QrdZjAlJLbIDV9m3aomHmgGqcESmYCPHiYPeAeKUxoU6YmGJ8XZOyXPsZ0XTx3TdXiTIKwyfAv7oxKjJVhegckeis45r/owsZwPGj8GV72eAcKUGt8afjBLgnLUu5ce0jTNePqVCyvQBKTWJpc0iuducOGo9aCw7KBx6bll8F2XJkG0s2t2J8ipBK4phjFRwK5pOgJbM27UL+RSqQsYDvapK3FxMRG/MYCtABZegHbRNLh+uLdhzivn3Qyv3tQpWaVKFi/inNOb3p+IFFGnWNJwTHiicQr7LdFGS0u10wBrLuY344Tnvkhz7ovbq+g3SEsv3qudXsv+brb0mdDN6IS/K2B/R0XibM6sCi1yZdWe4Ozvjv3JsG2idgj18PCms1JQqgXNFCRzScyH3OmOqjlSfcxJMbMjAa0DPqejLC5KJICnLWLbL9NUj5UuaNBInkhElcE+KEbnA9nYagPNmy/HzE4fC+3n+IAT0muUgAxCGbwk5uMrTowd8ZBtgAf5S3jEwxOsBGNZj11WVwYKjcOP7acDlix8dsvYBW8++uevBOGbu3/YeejTmeMe2GnRjs2ZRvs/+XsamDz7zq21Pd7Z1Vi5ZM2rm2pvnjNyfB/AcU/TOUMprLOTZJLbeMZKIVHVDTgaEMcMPMhgYpdiYDyLIeiEzSKkRSKK04WGj2qG99mYuwBVBZIa0XKjKeRALcxyeNw8rgKnlsX3S7yJuE2owLjn5P2UfkMLtC+/0S7Mf3Hdoy++qH3ykuHbxscPaO+d/5f2pzf2CsWb3nzrmafeepPF/UAHd4F18ZFuJJbO4hkYRUZwrXqOjacneDYtDe0eN+ZOYiBq0eETuZHG4sJ+ExAXdJyLmT3GQCHpTyPf05KnF83bLRlW7969+k8zF2/Q3vte+6OQ/2/aMbZ+/h+09/6wePG7NIKxTOCRvYx+WWQsl8qYlXInAEL6iYx+olHP/KANY2AOKSobgxcYBOmHOR8LWjGindHPzhkhA9miJcRoflcipNXNOSBjf1rwNTUuOHFinnb+uPb3E8JLj617GR9C8Vna4S1h6gXXS2/QyjMb33pr46a3D7I4LNDxLqCjB2CfSGLuZG5WBzxuTXdjLYtVZ26A3XtENbnqY14TYuQFjuCpKjTVLWkuxs8ONw/mWcGNBt2JtoWJoUF56ra6wO/zppsCCDsjuBhgRkZ/Gv2BZjwwVWx4O2fXohfuX/Br7auLA4QZxl8+tOi3tA09TSPC9rVn2pY/sG7hkj3C/MVPPsnlrtjfcIH4yQh9h5Kw4omicFTkCKhDHnfICCs+TPOrXgNajzEvS216PWBJ+Lx46ENLIhPZxUF5UMsss1ibpzJa2bE7uPyMUYy5lJsZA9f0nPpg/9WTR/Yd0nMYzdG+PC5OVqeMWndLeGA8WjtgkdqwXpyMNNamS0uAxlmkmMwijLTIH0EAD2ADNgHQ1LzmhEc2iI5svqlMBcAZVgvPemSj6EAKK165zuBwZ7Ckhxvzl2mMukDxPKyxUoIJhuHBC1IdAdgxTkoChSXVuOm6gR2cYB4X5x3rMUn6fm699p7WdObwhM27n3559tlPtTOfCr9fuVxRlq9QhD5fg7/5otrQ5rh2as32e7atWv4iLfrysZdfpm1eepnrqT1gx70Pe8FNBjVb8kyKODFO52yWIh7u/xlYIANcQFS8FtgDaNFb3cyHAn+F6Jk2XXL4vEB34HUn9cp7Tt5Fg6/+9eSK+Wu2gaBY8Onf32gcKYyfv5q+9ljjP4HuGwCgHUYz6GMHGUBiVtT4NkZ8lonxIT87ebFDWj0+6hysctMKMIGuRuGRdnkBp6dFAeeGwXMHw7/044Z7ewwZ0qPbkCEX3pB6X3wV9lbTUG0yjcH100g2uQ4sDry0M8wq8jLDcY8OQQ4zbQHzulyjy1mm+oz1LM1nAZNQ9WSycjont9ZNfAOJ1QkjNN0pBAs9esIGVcLOwX36de53vNuE+6/5+SdDu/e84Yae3YZpsd0damuley4+e9tjIytMMgLafeiw5HrFWJ1PeXNMRaKkLBlQMTQHVKTWAiomWAj6OXVq02lMO67t22P4tmEK/UYb2Tie/rBf+yDJF3QrXEckOfw6yVATUBkfzaGmPScN314Al4/sJMT0LuybAvSAmT3l9Ed1bqLWKGhhoKQnkojwFXBWKuDRBD+883PXHDUVesYZBYyrMCdjZtUKVlS9LcIaXuQxv7sloyUPdh6fRvMf2V8ygXZ6+cOTy+ct23Li4Xkrtkq9D3+8bAE1fr4f+e/+NdJrjzR+JYxfsJodcPwBF+l1wMVNrm25LxQa5Z7tT9oPBmfzfvC22A8meefJGbSQ7YcHf2WXeh86ltwPv1rcuFeX9XsABhtIyj567jWpNVnCNYPHogwsFuXWY0GZmHPGWJSF1eF4UT8ZSSKpypU5iJKUHEt/MPQasAinoVF74wQooBdfXPfYS0Lg3zSi/fHfZ7X3QcxvOnBg08Y39qMO2qPNNpQCXGh/3KhXzCSMDyQPqCGQ6P83doeHU0u3OzLp1ewOAOiDVxKGR+MLYixpeTCdqc2W9koDmb6/RffCEspeMXJ4LeH/HT1fiYHc/1DPv3Khg9CvhZ5n/Ce6GY3DemTLqFOXRbTSEqTFve7CvW5JkbxeMDu9oaDRZEQu6/TaorS0laPGO6XeH9159z8oHTh8TeNbcI2ypnPiYqBLBVoS7fSaopgPuSsXuSvM4iL5oN3yeVykxFyvtofX/GSkYpdk9+UG22E8osStZmaxWEU7Lv1yMVaRhaWuig+D9CkFMBirQP2sF5F40/MMXiYbQ2XDr31v1JBxJdeMuP32Eb1DvWetumHyewNG9N/e/9meE+fPn9ijz9zHhs8/sWZbt9rOXYJVwdycQKTn+B5D7q8Ndem4s13HaW06FwUj184bcsMDg0qu53u5R9NZ0W/oQ7xkNInJepaHFxsym8MQSZQXSqjofGElndkdsJtZyiM9WVuYzmoL09Hu8CfSVajLiaw4ud2hVxqmc8sUEKqUe2w4Tntpr9V06TOm69KHluwAo4OWaR+qjWdv6B2OD3l2k1DJ4VwB+32F1BtkDtjILpQ59igPe1A97OFJiGAMe4CIVywR3P0oc4hqdAEwzppk3KM7reRWp6EwtOLkw3OXP3fixBTtq5c/pBuF5xufnr9KfO1RIfPiqx9+JH5OdH9b6gbXT4l70CvGPZiDHRTO0jAtO6Hd/oPUu+FX4q2gSNl5TGE4j510SFrX7FSqaNTjHaBBMQPiZOeE3YQRCx40xvMmYhLCGZpFPd9TL/V9q83+QTupnTgD1/m1eAs+Lr6K3iacNxfgHgjXaxmPoD8ej8jW4xG5dJH2FE37/hwVtC30Hu07rUE7LoQFj7aCzmk81XiIrtFm8jzKWW2yVAvXSSNlJEEapAxLZLrC2D0CLIEhCAuyhCqwi4kMHeBtZsj1oNbvaV8aPqm5JjasvGv8gGtnVBUDTm+KnS+20bTbdlfOG4prMapJkwhcKyU2AXtTYkSUrhqbMHipwTtKmNG4VVzY+IiwaLPw+eviM4354j5W66ppwr2GM6SQjCIg9NRMJq/ZVrCFVQuePhhW8lg5ns9VrzgjMV8eM7htljIlM6IWYTIuj3losHyZQFdvHli5VEaXzQbaJq2G7wa0ejpWdaHeQiM4jyy9jJzpZfsCRGNtj4q2j+24eerNvQYP7gUvOx5rWyH4/xDtTLetuueVawZrys8mpnsm/ExTBvfZO281fb5zFOB/qclNpxvns7jCj9Vbo9P1Ut1p0x3nnsT1o2ZNE6sTeBfy+EhWWPXrhZQ63iIr78lzoakSExneohPwJhzvPJElfomaxfgJ8fZjwkVxulWrB/E2cKyxbAtxrERjD7AGKgQ5GcoAlBYo9+Bk6NtnMB3CEaZDBl/zyj2rtJs7R4Ea2sjV8wDvpbRBvEcsBflwA8GVMkr1dS6jDSxgQUoYJHE3r/lws0xjoq4DbRIzpmkEpm9dNiahVQFNVjOzDz2uaASFc2XUFSzE4irv0rc6zZtQOGTLW+ExvWqzhwhWmt+l8yTt8+Ky4klcr87Q9tCZ0lDWX9XjR/qrnMxKTwM9khZWnXqbFau6wU6JS630bBr1yMEZvHTGXfx48Wfiwa6DBnXtfN11DSuFUY1btWeYTv9U6mK4l/jAPr2nWaonajPRSUxPaE1MK8eMNhZ8BgkfE5k5yysPMgzJYjUxKxLRyQd2CWj+vFQRb5PjxOLMykZ1ZsRcBcvANHfEsOYEbIgR3NgQY+x/8YO6rx9cdPvyp0Yu/sUPdR9cPHHvxIlC/me0NJdWau9nPLF+nLdxqHvq4h3Z2uc0kAPe8sgLsXxhY34iNilhL0YWmaHvf9yeGRGetsUyVclArA7W4iIxX1/xRZgJIxzBKGKGjfFvhoBYZ2Rhuj7DB7gLLK4hgAbDLHQOYugyML0Bzj/YYChAUGlEeVlZqgMd8A7cvn37F4fm/HnwmAfXT51J79CeFLofoM/s+OCjU7ff8srG++cd3KH97ADR4xSGyYZc8KSwfiuWTVj7DTrO+YBHcRjrU1kyTDwSz3GRGwF+ng+Ly3wFMCWWI7ISchMjeqFcZ7b7svAQPnWkeVgJnJqfAe/SCf+iGEwOQ5oHD63uOqPZ7iziOZJQZUfsUQCU/NV+E8YyeB9JicmTagcfmjTuvSWHV/9m+5rDS94bP/lPS46t2Pb8imNbDj++/ujR9Y8fXnJo7a9/s+q91YfHjD60+r2V23esOLTq6MiRR4XHl7/55vJVBw+S1Lh1BrmP5y4Sceu47E4jDlTlcZn1Gin2SNznZ58ZonEf/8wUYWmztCOwgKoT87yRmDMNl81pt2CIOJbG3PI02YKLzlJpuJt4BNzfQkHDupm8PPoRqAxUlsCTHhHXRtBy7ekyula76zttEV0Y0eqoT4+Rn584eNRE7QuaO3HozRP5Xm+WuSYSJHoMG3tB9OZFY+IoGb+OyiKTv3V1p4UDjV2krfjMzlXWNFR81bCKVJJeZBVh2zEe5aVsHZBP8sLxTD1G3JuV3leBMPZhNVMADqpcalfAuC0ctnUp7VNqbtvDS3ZEvQb9oIDs7mkRbZ7MvFC0pgcyRHtZzSln3nmU26d5cpz6cviXmW4luwbLKX1J+5TX3VYlgkhgoxoTFVJo16XyTVl/9cDo+9r2v23ipNv6t10yZ/aoT3b9KV77/KMjp1XdNPPumTdVLRx9+7BvXl5wcuMTd46ZtGbG2GnuJ1fUVhd1LiksKIr2HNN1zMM54anDfvGraetH964q7REqCVT1mtrn5sdzSu+4acn2G4R/9Lutf5e+N1/D6FdpEIT1GMcnHswuwFLIURS9BZyh+FEi622w12PXGnqnafZErWqztC1OHlX2m3bttdP60an81bC4pra2ptOAAZ30V94j1pe4DYphMeigAlJDFrH+ID/n2+pwvD0/ahvG0kQ8ymPVoWl62xg9Ek/nLTvpLmwWxSYyfFfuQo9Q77hjPWPZ5bL7hTS/Ia+opGM12+dt28OK2gn1pGdlW0sCbaId9b4SXiHGKrB4dQ98JEUjRW6XgNWFnhQ55uUBeJ4o7zttDxXWrqF0z7Tpe7TGtWu0phcsT1Dz5ueo7ckntH9vfk47e+1fNg5YXdlvxPTJa9dOjk5u0696Te2GPwvdaAalr9x158tNZNVKremVmTP2CiXaO9qFp5+hZlpFjRs2arc/frBzdMSIFeMnrm4XGlLZ/T2+j/qIW4WdxmrWp3gf1vvi2vHGQyU/jDkJPAJV6tDJVsi0egYnlF5RLrlBU+lyMpgor2Y5ilw5ZnZ4axK1GIoH0xapOQpHc44iqucoWDRKTklRVFcCrfosmf/m4EHj7ivduHbJui0Dn514z9O9qxdUPt+jrzTxljFCTuce3WZfd990beTEaVMnlldNGFHB8AsTRRwq3ksMYI0TUOWiJ8ifw6ff+PjjNxafOvDxxweEdDpBe1rbSMfzV8wP0FLxC7EL/F1VSnVxogOM+WWsrUeXMlfq7OkvPr1D2PBc42nKbfb/hf4rqQXPV5Bq8M1TuL48HA+zo1h5GEEqD4BULo3gbii8bA90amUPVPB34YhS4VKj8EGIfxBqsSlqYJmjFbJ7V5o/z9AWCwDU7BAsaSmsdLkfWzVYMbMSlpU2NUq1O0492dbQT9wiMmvhMPmDJWVgoCd6gX7KBvkl9S199NHNSxcBsYaMHDlky0/ZG42ZQnz+rOdrvjl0iEYHXdtnAKzTOENAmG549+rrZG6xTuMEmyGwfTvfW8+DjlkEOspMXGghm8JxO18BV2JjscIBmtrb60z29rL4mdOKvqhoYjvIBY5pHZEMlJMRJSWKfgH7cDuGCp9f8cbKlePGthky64YbZhkq/rBixR+W04IpAwdOGazHnUipGJc+AJzSyOSWNfOKLaqXzaN2l1hhhAReRswgsYi7ycKtaCcac3EHB9cciTmY5neIwGNWsApYk5RTN+Zk3obAa++bOx6xBj/R9Vi6dauwbTMdrW3ZDM7uaKB7jTBQOGjYDHb0SMLbtDwcLFsYu6PT9E4E1xGkEm68/64FTu9QaNkCV7Nlx8JNWz+lzzcupr3KO/XtUf3zGkPx/Llj73vms6WzaG27WwMVkU4Rto/9Qh9hjeEJsIdvImBFJgSlIxx36lBmY1RBn0sQM7IEkdGqJ7u8Rj0TA9pf78pyyDEqo6QEx01xIZC67scuuGpM75v8CV3v7zduwfW33jJs4dfaM0LJ9+XTFquPDXte2LJ0XG2P7r1GH1844axkmzdu3hMdGawLpU+FWqOd56/Jj+avs6nftPDYmQvSpzQ88SDG3bXZ0h7w+z0Yd24lBsQCq1yze3jo2dMiEuRNRIJUp7um1VhQibynORg0fAiGTlsGg7K0sTzeoTUFpLDhW4BlAFGsiT6PmJUtu9UMXGeLMGDsR+I2bgbaXHFixG5hDK/xatfEQAtueYgY92PmKDzA0xSFjlNemCeMj2s/1PW4acXQ6nRp1JCVd/c538HY5fwBcU/HIVPHsR5Y+i4dLryf2gNbwHtgC1J6YMHAwYftEiNndN8pfeGfMLCmf/+a6tparC/SKoVy0MJe0p4ACkn54GNcJHOJgF0TspHFpoFx0mWdm6uTlp+pOpowCDeXV/Zu2zHaPhAasaJL70H33zZRm3FnaTRQUGF9d4F9eO+bpjHeCAgD6T2sTrVTom/8v9N0ATpih8G+uiEm7ENZ0018XpSMlWCdy2Qok322y2Sfm8k+HhLA4lFd9uHioP/rtGDezGgSeG+WDX0vcDJ1HVJV4HMZC4Rkr1m3N2j3Awe0P+TdMXzYpEnDhku30lA8rn20iz6zc9pUZQrAtBFs+1fF+dwWqPaI0cS/jWAJnD69AyyBU6didAIdr23Unk68cjszQIhxFKOTBfyoOI9HKj69DtYUvZxscavTSB1Y7YHJb0Q9HSQk6wt3upCqma1TFUOpsNBKGrhinDRyJObzs3hXOkg5P0s7+1GUoKclSjy+55djJrsT5YfPrTpYESMqD8xCExmkYGKdRPDCirFBFfxqb9Qb9AYrcekm4MSGL4WhtPiX2pf/2rJgwRZ9MS/8gIXbb80T0hrPHTq08K23mukxQ6dHPtnG+xIVIxtogcbHlcmSY5eALPEcXZMWXJkKmTTROBVLY0NG0hD/TOZ6ZnotbL5LEv9MOW4yW+1untNGW9NXo+TI8Jf5SBS7W8/E6zSw0BY6QHecTCmkeHyT0qwNJvTrUf1A5xYkEY4xzfDpsjm034RryzvWRJAufqDLx6yXN4+Uk/16pKEsCsa0UhqNBzknlERiwXxEI1gMqLaiPpScCKsDbU2D4JCbdsAgRZF4GWeQUCRW1g6/LisFArUrw8N2+UCgcKquUdrJsZxAsIa3cxbmsq7afCBUQY0qZie0UBy0UKCQz8S4mh7yXM5LraumxxLcVbRV567WlFXjw5eymkB6aIq4SBpKckiIzCUYHvWweE28QA/tlTBJ6zLVKy7ujBQ66uvMhbnmRLARp6LghCA/lyxt4Ce5qI8MsFmUQln1gJ2qWswgXfILiooZ+xR70NAy+/xM1lRji1003Sm1cNdoUpr30Bvt2vao7dGW9dntYf13NJ/HDI3YaXdNv9s7DXpg8PU9x9bcPHLKJGHfX2PSJD2MiHzD+rhME0Fe2ojz8k4ue3MnV1qYJ9ioXU+vJDu5qj1BsWU31/Yzxw69ntrRZSITtUOwEguarzme9Y45f7R7LHnNVrrHRI/fdFkH2UMffXchtYuMPsPsicQ1R8E1naAZLrtmWvM13WE2zUOlaTKfC5C4JgZkgyWmS1DdffjY4X0LFz6Wiq2xCw1on+3adfHvrI+NX3syXDsbdueCS6+dk7g26t80Jp7qMtPSzax4icmqfDZpJptbv9kutHAxQIuqGTvYs818cowsxwUrTc9j/etuJRebH7AvKK+G15GZUwmIcW4hNc59CV479oaui3T2D378pbaDwjX+68a2QHAUtQfbBsdrPwTLghMuvobrKul4jma6Nx0wnXgppu4kpmDS50TjNh6rwUlbDEXVYWdt+ZgezwL7BZFzmHHUiJsVD2GpYZZbFTyst8TNag9TUGoucAnQ5jepSB3oizGdvnmISzc9vpNA6WM9vnNxnrBAuKY52JNYvzLwe72gc8bpWDmj4ERhi4WSG46bdNOCaxUfXylfC88VlYZP4gnjbFn1gm+lWLlJlQv7fpdkpQ5vBtv5UaqH3Hy89l9neO5vgboQhPHtO62bNPmxLu2FUancP2zu8OFdOg83TC6c0m3SunWTuk4LXtiQ3AtPVQ8efOeQ6xP9myaN9S54yK16dpJEWzbcOV121r8gYe+dPdl7l85GVMiRZCuco2UrHG/F0+3cKG1uv4OHiC1AgthT+mXDGeG1xl5iycX6xr8fhBXc3QH75O47qs05hgPChHwhxvrltErWN9me3E6S7ZIYISrSKd4htUsOW3hzOLkjmKeHLfyC3SBn5gfaleOuyJGVDKB3EWqfAChnGXsscwp/pMfSSdOornZKUu3dUNEV+y7HNT5UzgzfwUlTuPY17R211TbMMfc5xjCruLNuJO9wvUl7k0RfpvQhyGYbrNLQq3VEun5CR6Sc6I6y11zSGUlBhqd0RzZsxlriRIskE95JeMYzeGr/l+C5FA4Q6ilwNI4DnzAJh7GSCfMU2owCWNxXp43nJ8CSfmXaeJjcTyXPDhD6rz+wsBkyXeBzG5XDNhpgQ3lx749Dh9spNxpP46Iwgw8dvBq0dXYLphJlO2t+w97QbBCXKGFkC7q86TWXIdFKpDsVo5cuiXonMfv40vC30PRP2Jgx4EvMgbTVpw4ZWIehmU0cMvFeRqwcMkkovUUGjoh2AnjfmWAcFJ9hTHX+IO/OFMgOeLoHeAvPWdL6OS87IQYN8IQ7gEleP8O54/y7iX5PoeksPM0BHjGCnVGqd06Y2TltrG3CCue0Y5WaCYNd1FDDweTLjQEDKy7zwoXGM4n1PX+An10EbUeEibDGWKPpJ6MSVZoCq9LEAXt6HsIVYdVpVtBttvo6g8OKU+LsrM4APPQ6J/vAY+fValZW0weKgQ2NUjF2dFnhZvNwC4kv1Z4zPfpN69NnWr/kUp2/DaFMvmX7Bf4zYi7OAR7C3XrtlzMxI8cHHEmJXQSvMTM5d8wf0Wf94Fpi+s0HbiTLKjszwdq3swicHV0mJ6+5M9vreSKV6E1svA7Cx6t55UrWIe52CVIwIHsSHeLInl8JAw/T4a/t035ztHHvt3TcYerX/nFE24ZzTIVlq4XFe7Q92kTtxReFZdoQ3i6ujVidlAOG9WBbWcDeWHNZl6jiD+uTDuty3H6wqBzNFlVz86gVtEYeV9l5rDMPfR8Hn+qZaCxFUyQ9Dxs8/bA8olcvfkg2l6o5fmaishJyNd3bst2UJV9amluJDtTomNtC13UAQ+uJl9sOBENrYGpLqnHUkqXNdhbLO2F/Kuw97E8NYHVwKx2qha11qAb1DtU6h5RXwLyN/6BJFU38qzSqBmBXX61ZVXiVdac04zH+/zMeKDGugseXIEyuhgf9XldECTxGMTyKroBHcWt4hFLwCPzneDAZdRVUKrj4uio255PKK4HPZIZPhCxtBR+lLBwP8T3VPlQGeyqg76loKpp5sIsifBdF2EjWeCl/V9pMgo7YYhqR3bsd6d7sgFR2KRXUUJmcnKTyY9x5+e66CmWCuOnAuxn0BPduBl6Vc7NabERJp9NoRqcS0gErHC6nVCishKM4sAc1QVuQp5FLSKQGQRUEGX3UcjsbGpogTlSfzoM+Txs55siWMIBS7la8/+HWbUXxX4U6XRO2APeWrkqbpy7LkFOyjpaKUyQzRjxxKibadaCs6bqGhumUaNMuXpymNRG6UWuYBS9kVoM2m5ImkpANRmOlcQHJYBNYR+lVTcUJyubjnirnzWo21qyGNTJ2oBlOni3NBJtfMstenyU3yKMqMjYk+FjnWp2d5LAqXQmDdwna+aujoo/oWcESMegJCdXpPj8N4dAMClY/n+nLyNZ74OA1Iz+mdka58WNGrr7jzdP/WjOP9qrwrTy1gi7u3WPF8WW/W8mJ5jiunR2oPXLiSaSbT7tAO9xMx32y+kQfsU5aUt/4kGvpiZXPNHQGPcb6fJlcTyddW+v09bbW6evTO33rnGmyRy8gu7TZF037Fg2/NPgdiOpWun4Nb3E7n8My/v8FLMAGLWH5CsVtK7BIDc22PocHZay/dXgyWoMnMwWe9CvCw+RoS5DCuthsjUJCqp3P4UIZkAWy/47LIcNQe2E0ns4FQG4koQp0SNEd88Gu53ECtQAOC5rhRwXh04vusnHgIA4pcraORit7vCVO3ZrNezQVW8Vty+WFLnzOkx94wUzspOOl3ceOZPexU+8+jglWO8sZX96BzOJ1yS5kP3PsmjuRpTEtfDtDDesV92L/UXKeRdzmYF6TDXtXvexQ1Kew8ulEquCIRLAFRNZHFLHidK8jOaIo6g0USGy0hVdOjlI4Q8tpkI1e/VQ7TIMv7N37gvapYcO7F776Vrtwge5/7NGVj/BefPDrjhkukGIym8skvdsUo8PZ8BLQe4x5N1yxpV4p5lLeZK6P5bG2wzwZXbi8LAuamryWy2HmXXJ5xXpdNlGz3LwPJBvb+JRAAnrsWmmeTlVGK5Px8UQBllfeTP3f/4VaFk17ZKf21+8nz1+8+cVnsh98ZsXsB58S//k9Lfhr3bw/lObWrX71291Lp876eXzZ7Bm/2Pl4gxn5mfUMG50gd3NAp81v7houaNE1XNyia5jP8cg11ePwuWBq1zBK5Vywj2NWWybqrqC8y+z0ZWXn8FmPeutw8X/UOsxizVdrH46BKfrBj7UQSz+AoGuYrTcSk2bc7axfuoQs/Gkd022u2DFdeknHNGJeVFzCizaV0P9G6zTasldrn15/7LvzV26hFrsn9lwCf7DkSD749L9oxj/YAv82LfAv4/1rJia3Qqn4t0N5lrL2IXk3W/vcfJ0EOZgE8iXMm/+EBIkw/NW44FUemN/yo4wQ5vK8YcblvOACWpSTTuRXzbToALQIoCDS7d+yQMicyCimEKmqBZFqGJEqTPV1mRXEnKz1q2Dz4ZMUY0NT40U8dtkZbb9y2b3L7Mtxhjqw/VLVgdeqtyCTGgjJvKXoyjvmcuP4qqSLX+qTzvhRIg5J2sbw3DBYJ6Wk09HI7LhyUk2eaqZkqAVXlaUQDJsiK6PxHK4z20dYsRgQMIgEDGLUK4/bzKUp1KuLyqXwTQV8UxFWo2AKYp1YHnZk+ELAfhWyanaiZC0LtULFH6deIvbSTLRmdds6+d7nytbVTLSRuvpthXgf6Nq2waRvyi9T6kwTNJzM5FI5m6HxEyST0i4c78DzuZXheIkeKa9KlVZF4JGF9Yq7lrKrrlTOBzaN8i+jYd1xU6ux8i4MxjUwZaikrJ2TsWUgpzW2rARmVUuLan6iKGumcpVeU3Y1wRZe/fZq+Ddp6KyhQ2f9iIT7ZOzKlWPHrVy5ftqgQdMG8b1tWivVgg6Pks7kLRLLJfqkgyCWX5fyveyg/FYjQFl2HO/E6BoXOwQdvNdAT5x3BP7swugaArqGXNgWiDVo2KrfMYIBpEoMHIGFhLXaoaRGaC/XmR3BUhSGXnddWkEZc0oq5ZickVvDBg+oWdnIsBl4R5LsGqWDvItkFYTY7xLEVh1BZh62JHJVtADr+4nYPKUAbw+RLGr1h8IUiV7MRxcM/+gNet1DP//9i12//Yo6Zj1yRqNtLA1bPS+teOH+hb/V/rn5f3r2OvXL3/3p0zljTt1WbjS31/4+637hgjDT8PyDi3bSbuueE7oB6bcv3rpVq9O+W7tt4ZI9y+9fvGTXr4eO/6JEDtlGDn9/6fbfsNkXWiWbfVGKsw9Z866Zt5Tn6RzaNtm5beM1oTyRppYB7QI22b1bdHgys0O8lVJmXVe4x5E+ZrmOGH1oWlw6IcOUnI9xhUxOcmjG/L36yIyHG8O9By9IJHAi7QtDtR9p/9ZHaDwg8hkaMe+4FokbBZsPmf7AfuXFYEeh/5SNHcvML7AmOpYzYbuavGk4ncKk64icMJYQED5g3IENpSoBO1rN9Oqj3dnsCXfKkrJgeurwiQZf6uyJn4GL91nL+RPa77Q/sfETBgWsn8bHcAZFAlY7861agdWLsMo/CVavfEVYA8ngW2uwJuZkPAYuwaWwslEZ9J/NdgqHV2Lw5l0Obw7Cm9EC3vwwBm8vhzcn44rwevRE/xXJeyN3EeNXoLB0gpsVjWuRyEyOc7iNDO4AKcN5GlehNOaBSqPxbK4Ii0DQtAsrGWBq25mpjYMBSkDRlaOVncHn0hfKMWsar3o34Q0oftq6iK14jz+2Tu6WqaJWl0xYdZkzKTQdBSGwhc0zSsnx0JQcj6H+ikmjUrDpg8fZeKOLATaogs3JEMaz+tKffr5EzmjDse8u7D3Oy00vBvnkC4TxC3gaB/zVImdEU3JGhpScERUuzxnlcrPTelz6Qi8CyeVnF5vOwLmHs36VFjkj+iM5I8N/mTMSr5AzcnL/f+/xrpd0t1zYhVAm3xI+k/2sNBv8Xexdq9PvtpEvsioo3c6Qw8lBjiY2yNFNy+ocbp+zTC0EgAvDGN9AS02pylJCWVSV3RUHieqWKw7iUDfPv/dH+FBB2aW49ilul+LZR1SXp6KCsmc2D5BNurA6WNXULtFidtoy9V56I0b38tHIIzX6XRkUFhh16IFR1vISKjGUVIdA5vuL/SY2JvKSsQ+1jX+ZcyDS55h2sOTk4ns3bl9DXcUHH9ui/bHpK+3U55uXLN2yZelDz9J33/vh1us+eW/i/ME/6zx90NyR9/V+UtvwYoN2mDR9ueDxtfPuf0zPSbGZGeA/uEmIrG+empGFnkM+9xyKstDG8nJro8U4jZKUcRp1Hjd6DHojRPNsjbpci9WcqHQAgZy48xaGkXPAwo15DflMCuhjN9QiwnpgVG8WECsnt6b1QRziZTVBLUZz5LesCBp42agOg5SsCoLnZnm9B/a8jemXga1O78hpbXoHltTZEewMvBlHzCJm1fzEKR4yiIzWJ3lgiqq1YR7CyWReisNr1+Ht95/Bi/Mw6ixiRhYzjX8CqFwltgbqfoyLtgprIJl74rBKDNa8K8Ca3xqsBSmwZv90WJmMax3ctD9/xGKmrUJckpJf4jC7GMztyEMpMBfg9uB3qatrW1BsZvehY7esSyJTnopMhq0s3o7vgHa8YzbI34Fv6LZxRDEhUNgOHGlLmjdbLG6JqlpQzNjryii34jtfYUTMpQ5z64Ton+ooN9sFe0An2HS7YHorq9iqJZBCCLQAWhgFeKfDxFqjfVCYi2ud5hV/6lp7WjUJWsM8VzcCpvDX1vF+61JjAPiA7BHj0jo4Ql1YTRR7OG7iCDb3B/nCcVlvbMhAja44+V1APBE27ky/wUYr9xvBe3fsB3A4UPAs9H/uOe17HQTRpR8gHNqH0h7DUOKFHVRCy0nMidLaFVUDQPf8CJ+NY2DOtpIVSWg7n4lF7d28TRuZTmYTS7HHA9+ZmIOt2kwJ5fdS1/MnV6OqkxR3hWKqQGEu+87jD42+8wZ4W2dwGz1lL3X95uTN8DsbnLDOLJs8ZYY6F7681PXrk0PYF/BTD/60LhOfDXVZ+II/z+e/009QV4JvY/DT5kG8SmZNDD7GI3MNecFoMstuT2ZJ4u6f9AWD2eXJzMovqUidx2uUsR/CmcOz1DkB4B5bM/f4PVFRV6rNmTMPMhHV+akEOSfa/+YpYza/BNzTpfu4qVN/+fJnY2/6Mq9owz6akVf01OvjRjDOsVGPdriz9t3LwD9W7TDt35m69sz9fZnwqvGPjSeMf/z13WoZ17FsRgzoFTfxkeuvMCXGf4UpMbhhRK4Rsf0p3cuHWf7Y3BiMO7eYHfPad8f+1Mr8GOkDff4mh8/+X8PnABc/5kln3WN2mSV9fww+TKy1nG2zCL2pVgCUmvMsHEYJYMzECYStwph1BRizW9CwLt3rZ0aZHdsffhxUXY+0gPZdXk/XGrzWhPIQdXiNAC9W5U9uvS8sO6wUReM+LkryIwmDCjCo84gYPsywX4JLXaHdYdZFaBjtVrSjrsIOrcjHFggdu8RHagWx7a30lQt8tg7wDdbltjJdJz3MO9uuOl0Hs22tTNjJA7fnkik70vucI/R5Zvo81UvnmenDzBT6fzvPTP7P5pmZFjRPUm050EzUaWUEWmWSIE6AbUkt1BmBKM4rLNAbW4rYFAUvLLTXxZqY8u18uK0XGzNMOPEzS2bjI65O31Y4oBV6v8n9rYR6vIT0htmt8QDpS4gZe748JBezyi7C58krjgivgMaoWVYkbrG7DInJ/vymBF4bwwzdQgccYp8s619ysPJRh9NShpFewA7jBV42XJ+AKuBl9Lz+OaVaW68kicKbQmPfOQdp5iaDpeE74ZXGa8SSC5/9WfvV2/96+MQaatLOrzkhvP8Ytb52l17BvZcOoEO1b75aJH71i6RdbfZJtYBRKWlPntD7trKjeBM1JaDrWUtULUnYPRVSfbytA+/bF2/botQ7z8Dm06N+dYAabhvBjgGMEKJYwqrvIizTy8a7xzlk1ZjB2o5iFpeXi1LVzboHHLjibvhSLfFipMSYVGg+P4apLw+ftjCQDInYUBdt/Zc9e//9EY22MTds8uxdtXvhgt9qXz3xec9eXz6ZaiiJ9wr3GH69ZLHCFN3C2bMXJsOlD8ye/UCztXT9Q7/5NUn2HfhNo4mZSbwZLbPv2MGdFY3bOXd7I2yQD8/G1zlBs7MqIsUSVp12kHzsA5B8PB1t0W+ioHqcLEuvZmCvljf7Con7Vli9OZH/WsvKgtScvsF4KXtTAusrPG+0EiNIN5QnYhTbgtlAURMfYMXaZvmUNayuZLFcXWeU8LAbuAK6TqAkVzonKOBPeHCiId7xHXvd0YWQTXZwIQS9No11Csc93DrzsCKLRF8Gyi6LB2dCsZmGsl2fCYV3DLVYkzOhWngBuZe4wpd6vqnzFshl97H9b78j9H2xmzCDzxFvdTaAPkcc/lDsRt9P+TvD0p/4d4alzX9XKxnpKMPz/F7AVtZrnLgXMOxDfTg/m7wG6lUvVe5BoyZ9pmtt8d33Du7Ur1PHAdKyqspYLHRt5wH92HnFBjqK1XeUkphRv2f0Ve4y7LnkLsN42uK7xQaFnbVrFbvN8P+z+xcLSAthFaNFJshn7LP2R3WCsHhdVoImaNI7MOdj5+owSR4cOSKxzI7LfTmxii+nHAJCOyQPpWUASzNU/IjDJjYAbBsZbP05RRVPVCcqaA0GHccey51dvOyIQZckhOLCqVfYw+vMvJzg0VZptCdxIDZcClcz3ZpuFlax9WB0gx3viOqLwkbg/heQ+f8DyLa1Dhj20d9MPxdOs7mCeh+9jffR2/Q+enoE7xGAH/IXvZveza6GyzT6zmE3Tr9z+DD6vjJzpjKHy+zRTaelheQMMYFVgtNq0RZx+qKJ2K5qxZE1YrNTS5OTiSy61nbw8iUvj+/CFav4wI3CokteeTc/HdJ3yrXXTqHXs3edZvXvP6u2NuUZcA0ThX7OZtEUEP0uUHHJiEvAppmy6chCIjzePKMmMZ2G7auNRBEGsx72QOIceOfxS06jUDxJdUpzu0InsXb2p3CWW9NZY6ZhMynHaVdtCb9xasyeuFMRoW3tjjJshiH6HKBI3Gxin2VE9SEcbLhbBYsFGCPY9KJkRmLZbFZIdr4FmxZiUnayl9sUYZ3I2Rj/t7CZVyQIh6ESVH1mvT2ZDWjEuWjBymgVab5xjAlMIKM33Q8vbForv98eKRm4z2ze9/lA+uDF9bRg0sohf5n+6JlegtD4vtUudGjUep15dMqfb1w9Xfto/TltYS39fHG4a7fw4r9S69xJ6oixj9y3uHP7mo6L71vL7sFH0z7R7X6hm3EHu49MOt6vgTUKWezRRCO7IibvAm8EK87sjERYGaaxeR5Ja/eXQb7C0RPpvCM5nc2V1m9bzwo2sS9UtXJBKFYG2H2jqYyaHxV/UJStwtaGnULeQWqkxoOb/j37rEFYv76xC84wE29r/FQINvxSGNt4TjA3Pst1DZud2g12QiWPfKN6N2EnfvNxclYlU/UJjc91UAc5IOMJLu7n+wnn/00xmlkNSYj8ht9RSglGY0VsmnaRq2BfGIshcIZlegTnV4I9rGRHQJxg4bVPb9X2sy4Wn6G+9aEGSCofL18LWTCPX1cYynOWqZlpmJ9W89KYT6hm+pCRbFiZDnxUl10Q4LVszgAf+GKRY7bMvJqa5Oh98dLR+7RFXmbgmrIBY6d0mnujZeKIPtezSfzCAj6Y3VsvTlEnX7dwRNfsDu+H+163UG14QpwipLUc1i4w+iwAAeUF+TqL31FC8eF0FCxfwFGJaRHFH65L8xudrHCSSVw+1hfnpjgjMQ8b6+uRcVKkJzHWF20kdstB3anzefTbZtpoYuwDH/2I07Oq/GyuWAixNAU4B8kDhVWHn58/xNhn+NApNE9A1HafFKfvXLLpbUFs936lMG3EuJ0N68TpDevY2PT/A713tKoAeNpjYGRgYADiYzvuPI7nt/nKIM/BAAIXd2jXwOj/Qf9MOeLYM4BcDgYmkCgAeC4MyQAAAHjaY2BkYGA/+PcaAwPHsf9B/8s44hiAIijgBQCqAQeAeNptU01IVFEYPe+79773cCUROVQWQtiihQsZREyGYmaYdCxMkZBhiFlIubCghEiqRcQgEi1cGRbjYgJDBolBBnnMQiIGcRtC0CrChbUoyoiy13kvRibxweHcn/d99/vOuVc+IQ5+8pJoBqwSJuUjpswGuvQPRJ0aLpoBTFqLmJLHeC5r+CY1dKpfSFkr6JMvuGdVkZWi/9bkkVMRHNNlxPUluHodvfoZonobOf0EaSMY5XjEeoWstYq+IMceZtDkrCNptiCmCM/MIml3kmPw9Bx5l/MheDIOT+36v02V6wl4zhg8e4S4y9gceY5c495PnruAQ/ZxFMwj2O4F2GYaJ02E+YeQZh+ezlhNqmb16AGc13n2v4FbehnD5iYq+iFS5jZS7CUlVdZ+gvNRVCSBp9LvX9ZrHGdQca+gRH1KBtxnXBCj2lFSazijziFmujGjOyHOKYieQKuO+Tu6HxlZoHbtWFVdlsv+86H2S7gRnKuv8rxl5rMh4T+7zHUUUfMdSXUYcVVEh77Puqh9sMa6c/IaL0Idm9Etm2jh2gMzxj62/T+B3pwXJII21tSrqpi3p9Fmr6DNsdFC7WOh7gfAHSfTi8CHRsi4v0Uvlsg7ZG1ngLoP+8G6ZsMxvWhE6MUE8/WgEOh+EHgnhkNNyv9DEv5m6EXC/0B81RX07fmwD4Eu4ZheNCLwIvSa7L5B0h3kP6yJWp0mWlUZcK4BdZY79OgdcfYf8Jk8Rb7OPXpRh+oF+BYQvI86JEssEltEDFn9nm+AsRJFhwxgPshrDyLtHOH9COI170AU6b+HFNoxAAB42mNgYNCBwjSGWYxVTApMR5ijmGuYFzGfYP7H4sSSxzKBZQfLCVYpVgfWSawv2CzY5rALsLuxn+Nw4ajj2MdxieMbJxdnC1cYVwfXO24b7gbuPdyfeKJ4JvFs4HnDq8TrwdvBe4hPhi+J7wa/Af8tAS4BD4E8gRuCPII2glmC0wSXCF4TfCPEIaQmNEPok7CF8DThHyIeIvtEWURdRKeJnhJ9IuYl1iN2Q9xAvEt8j4SBRIvEEYkXkgqSIZJdkjukJKRMpKZI3ZG6Iy0l3SX9SiZD5pLMD9kZstfkyuSeyTPJ68kHKDApqCjkKOxTFFLMUGxTPKMkpGSlVKa0SOmNMpfyJBU5lWOqVqolqutU36glqJ1RN1Pv0uDQCNCYpvFEM0SzTnOF5jUtPa1Z2kLaZdq3dJx0rumm6bbo/tNz0evRu6Hvpd+if8HAwWCfoZ3hEaMMYy7jTSYFJk9MrUwnmb4zKzCbYXbI7IO5h/kTiyyLQ5YSlkWWv6zKrHZZT7N+ZmNhM8GWydbBdoYdi12ePYd9kf0s+2c44BcHJgcBBx0HD4cSh0UO5xxlHLMctzk+cgI6yMnPqQAI/zknOXe5SLk0AACMv5YIAAAAAAEAAADoAE0ABQAAAAAAAgABAAIAFgAAAQABRwAAAAB42p1TzU4TURT+plONoHZhjAtXN4QllrZAimVl+EmEtiAUWU/p0DaUtrTTNvAALlyx9AlM5Bl4ABRX7tz4BMYlC1d+98wptE0TDJnM3O+c852fe84ZAM/wCy6c6ASALt8QO3hOKcQRxPBRsYsMPimOYho/FD/AGa4VP8S080HxI0w554oniL8rfoyU80fxE6QiRvFTx0S2Fccw77YUX+KF+1nxVyTcC8XfEHN/K77CpPs3xD9dvIxGsYwGmjhBC1WUUUEAgy98U0ggiXmiIq0G6+igRo5Phkd5l5KHOr27aOOQnDi1b6it8byN1hbJ5+nz7PJbIjNHv7pYrbbFSAG2icuSxaMmSVZCniXm2sAe8kTj/F6NeI7jmBHOe7G1WaXlmqFsW9ihxuLUgLZCZoB94XdvPOJIi/WIUQ8Z03IOqLWdKor/gryLmKP0mn4rWGX2VWSxyUw5ojwK/3WvuydwN8NOJOC8M5jl05MnjlOx9ado73jE0+acvYdHgT5Vmfua3sqwow32JaCvJ9tglGGr3adcl5uXqOkQl6QLhvyKcHfwlv0y7FhTuIORs0MRZqgZN9ukbOdtZcN5+9V47JNHbLtW5NdaepRtHUY6usYNfyc4YEfMSHfajGk3vymTjEsNNZ4Nasu0b9I/ey+fPdZSZAf7tw63r8Bu+fpv2pvOUWc3N83YSe5cRv7i/r+8IH09YO12SwLJEPZocE7HtFZlB33U/gEZlMsEAAAAeNpt0EdMVHEQx/HvwLILS+/V3vt7b1mKfRd49t67KLC7ioCLq2JDY6/RmOgJYruosddo1IMae4sl6sGzPR7Um4kL7+/NuXwyv8NkZoigtf4EqOJ/9REkQiKJxEYUdhxEE4OTWOKIJ4FEkkgmhVTSSCeDTLLIJodc8mhDW9rRng50pBOd6UJXutGdHvSkF73pQ1/6oaFj4CIfNwUUUkQx/RnAQAYxmCEMxYOXEkopw2QYwxnBSEYxmjGMZRzjmcBEJjGZKUxlGtOZwUxmMZs5zGUe8ykXG0fZxGZucCB80Rb2sJMmjnNMotjBezayX+ziYDcH2cZtPkg0zZzgFz/5zRFO8YB7nGYBC9lLBY+o5D4PecZjnvCUT+HvveQ5LziDjx/s4w2veI2fL3xjO4sIsJglVFPDIWpZSh1B6gmxjOWs4DMrWUUDq1nLGq5ymEbWsZ4NfOU71zjLOa7zlncSI06JlTiJlwRJlCRJlhRJlTRJlwzOc4HLXOEOF7nEXbZyUjK5yS3Jkmx2SY7kSp7dV91Q59ctDEeoJqBpHk1ZaulVudelLG7R0DRNqSsNpUuZr3QrC5SFyiLlv3keS13N1XVnVcAXClZWlNf7rcgwLd2mrSwUrG1t3GZJi6bX2iOs8Rd02ZipAAB42kXOPQrCQBQE4GzWbDb/KdIGooUK2+YIJhZpgtUueAy1trHUs7y18nY6gjy7+QYG5iXeNxL3YCI9Wy/Ew/lRGbuk2k3UHBCuriVljjYg2Q0kzY4W3fCUfWi+EBT9WoU2akPj5XgBY1CtmBqMz8wE1HtmCiY9MwPT/zYHsxOzAPMtswSLDbMCyzWzBit+5agxH8bHRO8AAAABVZJ6/QAA) format('woff'),\n         url('assets/fonts/templateFonts/one_page_slider/montserrat-regular-webfont.ttf') format('truetype'),\n         url('assets/fonts/templateFonts/one_page_slider/montserrat-regular-webfont.svg#montserratregular') format('svg');\n    font-weight: normal;\n    font-style: normal;\n\tfont-smooth: always;\n  -webkit-font-smoothing: antialiased;\n\n}\n\n\n.mregular-font {\n    font-family: montserratregular;\n}\n\n@font-face {\n    font-family: 'material_iconsregular';\n    src: url('assets/fonts/templateFonts/one_page_slider/materialicons-regular-webfont.woff2') format('woff2'),\n         url('assets/fonts/templateFonts/one_page_slider/materialicons-regular-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url('MaterialIcons-Regular.eot');\n  src: local('Material Icons'),\n       local('materialIcons-Regular'),\n       url('assets/fonts/templateFonts/one_page_slider/materialIcons-Regular.woff2') format('woff2'),\n       url('assets/fonts/templateFonts/one_page_slider/materialIcons-Regular.woff') format('woff'),\n       url('assets/fonts/templateFonts/one_page_slider/materialIcons-Regular.ttf') format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n\n@font-face {\n    font-family: \"montserratlight\";\n    font-style: normal;\n    font-weight: normal;\n    src: url(\"assets/fonts/templateFonts/one_page_slider/montserrat-light-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"assets/fonts/templateFonts/one_page_slider/montserrat-light-webfont.woff2\") format(\"woff2\"), url(\"assets/fonts/templateFonts/one_page_slider/montserrat-light-webfont.woff\") format(\"woff\"), url(\"assets/fonts/templateFonts/one_page_slider/montserrat-light-webfont.ttf\") format(\"truetype\");\n}\n\n@font-face {\n    font-family: 'montserrat-bold';\n    src: url('assets/fonts/templateFonts/one_page_slider/montserrat-bold-webfont.eot');\n    src: url('assets/fonts/templateFonts/one_page_slider/montserrat-bold-webfont.eot?#iefix') format('embedded-opentype'),\n         url('assets/fonts/templateFonts/one_page_slider/montserrat-bold-webfont.woff2') format('woff2'),\n         url('assets/fonts/templateFonts/one_page_slider/montserrat-bold-webfont.woff') format('woff'),\n         url('assets/fonts/templateFonts/one_page_slider/montserrat-bold-webfont.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n\n}\n"

/***/ },

/***/ 863:
/***/ function(module, exports) {

module.exports = "\n@media (max-width:775px) {\n    .landing-page-mid .input-section .input-outer {\n        float: left;\n        width: 48%;\n    }\n    .landing-page-mid .input-section {\n        width: 90%;\n        margin: auto;\n        margin-left: -4px;\n    }\n    .question-section-outer {\n        float: left;\n        width: 90%;\n        margin-left: 5%;\n    }\n    .mid-width {\n        width: 100%;\n        float: left;\n        text-align: center;\n    }\n    .top-head {\n        padding: 10px 20px;\n    }\n    \n    .left-section {\n        float: left;\n        width: 100%;\n    }\n    .result-small-section {\n        float: left;\n        padding: 30px 30px 30px 30px;\n        min-height: 170px;\n    }\n    .cta-outer {\n        float: left;\n        width: 100%;\n        background: #fff;\n        padding: 13px 0;\n        text-align: center;\n    }\n    .cta-outer .container {\n        width: 100%;\n        padding: 10px 0;\n    }\n   .cta-outer .input-section .input-outer {\n        float: left;\n        width: 49%  ;\n    }\n    .right-section {\n        width: 100%;\n        height: auto;\n    }\n    .landing-page-mid {\n        /*display: block;*/\n        width: 100vw;\n        height: 90vh;\n    }\n    .landing-page-header {\n        /*position: relative;*/\n        left: 0px;\n        background: none !important;\n    }\n    .landing-footer-outer {\n        position: relative;\n    }\n    #main-profile .logo {\n        height: auto;\n    }\n    .landing-footer-outer .powered-by img {\n        width: 55% !important;\n        padding-right: 0px;\n        padding-bottom: 5px;\n    }\n    \n    .landing-footer-outer .powered-by {\n        width: 202px;\n    }\n    .questions .question-section {\n        padding: 30px 20px;\n    }\n    logo {\n        position: relative;\n        float: left;\n    width: 100%;\n    }\n    .switch-outer .switch-que {\n        width: 70%;\n        display: inline-block;\n        vertical-align: middle;\n        float: none;\n    }\n    .switch-que + .pull-right {\n        display: inline-block;\n        vertical-align: middle;\n        float: none !important;\n        width: 28%;\n    }\n    .switch-outer {\n\t    padding: 8px 8px;\n\t}\n.page_2 { position: relative !important; width: 100% !important; float: none;  margin-top: -55px;  margin-left: 40px;    margin-bottom: 30px;}         \n.landing-page-mid { /*padding-top:150px !important;*/}\n.landing-footer-outer {  position: absolute;}\n.landing-page-mid .prime-action { font-size: 1.8vw !important;}\n\n.landing-page-mid .main-heading{font-size: 7vmin;line-height: 1.2em !important;}\n.landing-page-mid .sub-heading{font-size: 3vmin !important; line-height: 1.3em !important;}\n\n.disc-set{ width:100% !important;}\n.questions{ padding-top: 90px;}\n.redo-link ul { right: 5%; top: 4% !important;}\n.redo-link ul li a .material-icons { font-size: 14px!important; margin-top: 5px;}\n.page_2 .result-centre-outer .mid-width p { padding: 5px 25px; margin:0 !important; font-size: 4vmin !important;}\n.redo-link ul li {padding: 2px 7px !important;}\n\n/* recome result */\n.recom-section .left-sec{ min-height: auto; max-height: none; display: block;}\n.recom-section .left-outer {display: block; text-align: center; padding: 8%;height: auto !important;}\n.recom-section .outer-main {height: auto !important; width: 100%;}\n.recom-section .w100 .leadform-outer {padding: 0 8% 6% 8% !important; float: none; background: none; margin-bottom: 0; display: block; vertical-align: middle;}\n.result-centre-outer .recom-section .w100 .cta-outer .input-section .input-outer span {float: left;width: 100%;text-align: left;padding-left: 0;color: #f44336;font-size: 12px;bottom: -1px !important;position: absolute; z-index: 1; left: 8px !important;}\n\n.recom-section .w100 .cta-outer .input-section .input-outer{ float: left; width: 49%; padding: 10px 8px;}\n.result-small-section p:nth-child(1) {font-family: montserratlight !important;font-size: 4vmin;}\n.questions  .question-section-outer .question-head{font-size: 4.5vmin;}\n.landing-page-header .logo { width: 150px;}\n.questions-header header .logo {float: left;padding: 5px 15px;}\n.recom-section .w100 .cta-outer .input-section .input-outer input{padding: 10px 2% !important;}\n\n.recom-section .leadform-outer .prime-action{ float:none;}\n.recommendation-outer{ text-align: center;}\n}\n@media (min-width: 768px) and (max-width:991px) {\n    .recom-section .outer-main{ height: auto !important;}\n    .recom-section .left-outer{ height: auto !important;}\n}\n/*@media (max-width:768px){\n    .cp1 .landing-page-mid .main-heading{font-size: 7vmin;line-height: 1.2em !important; margin-top:25%;}\n}*/\n/*@media (max-width:774px) {\n.landing-footer-outer .powered-by img {\n        width: 25% !important;\n        padding-right: 0px;\n        padding-bottom: 5px;\n    }\n    }\n@media (max-width:780px) {\n\nsection .questions-header header .right-sec i { left: -83px !important;}\n}\n\n@media (max-width:1020px) {\n.landing-footer-outer{ float:left; width:100%; padding:0px 25px;}\n}\n@media (max-width:900px){\n.questions-header header .right-sec i {left: -80px !important;}\n\n}*/\n\n@media (max-width:375px) {\n\n.landing-page-header .logo{float: left;padding: 0px; width: 100%;text-align: center; height: auto;}\n.landing-page-header .logo img{ max-width: 55%;  max-height: 40px; }\n.questions-header header .logo{ float: left; padding-left:6px; padding-right: 0; text-align: left; padding-top: 7px;}\n.landing-page-header .questions-header header .logo img{ max-width: 40%; max-height: 40px;  float: left;}\n.questions-header header { background: none;}\n.questions-header header .p-right0 { padding:0; min-height: 60px;}\n.questions-header header .right-sec{ width:100%;}\n.questions-header header .right-sec p {width: 100%; text-align: center;}\nsection .questions-header header .right-sec i {left: 9px !important;}\n.questions-header header .right-sec span {width: 100%;text-align: center;}\n.que-fixed { /*top: -29px;*/ }\n.top-head .mid-width:nth-child(1){width:100%;float:left; font-family:montserratlight !important; text-align: center;}\n.top-head .mid-width:nth-child(2){width:100%;float:left; font-family:montserratlight !important;  text-align: center;}\n.redo-link ul{ float:left;}\n/*.cp1 .landing-page-mid  { padding-top: 26% !important;}\n.cp2 .landing-page-mid  { padding-top: 26% !important;}\n.cp3 .landing-page-mid  { padding-top: 26% !important;}*/\n.btn.prime-action{/* margin-bottom:0 !important; */}\n  .question-section-outer{ overflow: hidden;}\n\n.landing-page-mid .landing-responsive .main-heading{font-size: 8vmin !important;line-height: 1.1em !important;  margin-bottom: 6% !important;}\n.landing-page-mid .sub-heading{    font-size: 5vmin !important; line-height: 1.3em !important;} \n.landing-page-mid .prime-action {font-size: 3.5vmin !important;}\n.landing-page-mid .input-section .input-outer span{left:10px !important; top:48px;}\n.result-small-section p:nth-child(2) {font-family: montserratlight !important; font-size: 3.8vmin;} \n.result-small-section p:nth-child(3) {font-family: montserratlight !important; font-size: 3.4vmin;} \n.result-mid .result-small-section {padding: 30px 30px 0px 30px; min-height: auto; width:100% !important;}\n.landing-page-mid .landing-responsive .text-center .prime-action { font-size: 3.5vmin !important;}\n.leadform-outer { padding-bottom: 0 !important; }\n.result-centre-outer .share-set {float: left; width: 65%;}\n.result-centre-outer .bottom-section {width: 100%;}\n.questions  .question-section-outer .question-head{ font-size: 6vmin;}\n.questions .question-subhead { font-size: 3.3vmin;}\n.questions{padding-top: 27%;}\n.landing-footer-outer .powered-by { width: 100%; text-align: center;}\n\n .landing-page-mid .container-temp .input-section .input-outer{width: 100% !important;}\n .landing-footer-outer {margin-top: 10px;}\n .leadform-outer .prime-action{ font-size: 13px; padding: 10px 35px;}\n.landing-page-mid .input-section .input-outer input{ margin-left: 10px !important; margin-bottom: 15px !important;}\n\n\n.container-temp{ width: 100%;}\n.redo-link ul {right: 7%; top: 2.5%;}\n.redo-link ul li { padding: 2px 7px;}\n.page_2 .result-centre-outer .mid-width p { padding: 5px 12px; font-size: 4.5vmin !important;}\n.redo-link ul li a .material-icons {font-size: 12px!important; margin-top: 3px;}\n\n.page_2 {\n    position: relative !important;\n    width: 100% !important; float: none; \n    height: 100vh;\n}\n\n.landing-page-mid .input-section .input-outer span{left:10px; font-size: 11px;} \n/* recome result */\n.recom-section .left-outer { text-align: center; padding: 8%;height: auto !important;}\n.rec-image-outer { margin: 0 auto; width: auto !important; overflow: hidden; text-align: center; box-shadow: 8px 9px 7px 2px #d1d1d1;  }\n.recom-section .leadform-outer {padding: 0 8% 8% 8%;}\n.recom-section .outer-main {height: auto !important; width: 100%;margin-bottom: 0 !important; }\n.questions .section-head{ font-size: 18px;}\n.cp1 .landing-page-mid .input-section .input-outer input{ margin: 0 28px;}\n.cp2 .landing-page-mid .input-section .input-outer input{ margin: 0 28px;}\n.cp3 .landing-page-mid .input-section .input-outer input{ margin: 0 28px;}\n.landing-footer-outer .landing-responsive .text-right .powered-by img { width: 30% !important;}\n.page_2 .result-small-section .small-top-sec p:nth-child(1) {font-family: montserratlight !important; font-size: 4.5vmin;}\n.page_2 .result-small-section .small-top-sec p:nth-child(2) {font-family: montserratlight !important; font-size: 3.5vmin;}\n.page_2 .result-small-section .small-top-sec p:nth-child(3) {font-family: montserratlight !important; font-size: 3vmin;}\n.questions .question-section-outer .w100 .text-center .prime-action { font-size: 3.5vmin; padding: 1% 10%;}\n.result-small-section p:nth-child(n+4){font-family: montserratlight !important; font-size: 3vmin;}\n.page_2 .bottom-section { width: 100% !important;}\n.recom-section .leadform-outer h1 {padding-left: 0; margin-top: 0; font-size: 25px; margin-bottom: 0; padding-top:4% !important}\n.recom-section .leadform-outer h5{ padding-left:0;}\n.cta-outer .container-temp .input-section .input-outer{ float: left; width: 100%;}\n.result-centre-outer .cta-outer .input-section .input-outer span {font-size: 11px !important; bottom: -4px;}\n.recom-section .w100 .leadform-outer .container-temp .prime-action {font-size: 11px !important;  }\n.result-centre-outer .recom-section .w100 .cta-outer .input-section .input-outer span {padding-left: 0 !important; left: 0 !important;}\n.recom-section .w100 .lead-heading-temp1 { padding: 0 20px !important;}\n.page_0 .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) { width: 100% !important; }\n.page_0 .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input { padding: 3% 2% !important; }\n.cp1 .result-overlay{ display: block;}\n.cp2 .result-overlay{ display: block; }\n.cp3 .result-overlay{display: block; }\n.cp1 .result-centre-outer{ margin-bottom: 10px !important;}\n.cp2 .result-centre-outer{ margin-bottom: 10px !important;}\n.cp3 .result-centre-outer{ margin-bottom: 10px !important;}\n}\n@media (min-width:1500px){\n\n .right-section .internal-sec.slimscroll{ height:95vh !important;  padding-bottom:20px;}\n.right-section .slimScrollDiv{height:95vh !important; padding-bottom:20px;}\n.container-temp{ width:100%;}\n.questions-header header .right-sec i{ left:-61px;}\n.margin-none{ margin: 0 !important;}\n\n\n}\n\n@media (max-width:1400px){\n.right-section .slimScrollDiv{ height: 91vh !important}\n.right-section .slimscroll{ height: 91vh !important}\n\n}\n\n@media (max-width:1366px){\n.redo-link ul li{float: left; display:inline-block; -webkit-border-radius: 28px;-moz-border-radius: 28px;border-radius: 28px;  padding: 2px 8px;  }\n.redo-link ul li a .material-icons {font-size: 14px!important; margin-top: 4px;}\n.result-centre-outer.recommendation-outer .container-temp .prime-action{ margin-bottom:0;}\n\n}\n\n@media (max-width:1024px){\n    .result-centre-outer .mid-width p{ padding:5px 35px 0 15px;}\n    .editor-template-tabs .redo-link ul { top: 5%;}\n    .redo-link ul { top: 7%;}\n    }\n\n\n\n@media (min-width: 320px) and (max-width:767px) {\n     /* recome result */\n.recom-section .left-outer { text-align: center; padding: 8%;height: auto !important;}\n.rec-image-outer { margin: 0 auto; width: auto !important; overflow: hidden; text-align: center; box-shadow: 8px 9px 7px 2px #d1d1d1;  }\n.recom-section .leadform-outer {padding: 0 8% 8% 8%;}\n.recom-section .outer-main{ height: auto !important;}\n\n.recom-section .w100 .cta-outer .input-section .input-outer{ float: left;width: 94%;    padding: 4% 0;}\n.result-centre-outer .recom-section .w100 .cta-outer .input-section .input-outer span {float: left;width: 100%;text-align: left;padding-left: 20px;color: #f44336;font-size: 12px;bottom: -1px !important;position: absolute;z-index: 1;left: 0 !important;}\n\n.landing-page-header .logo{float: left;padding: 0px; width: 100%;text-align: center; height: auto;}\n.landing-page-header .logo img{ max-width: 55%;  max-height: 40px; }\n.questions-header header .logo{ float: left; padding-left:6px; padding-right: 0; text-align: left; padding-top: 7px;}\n.questions-header header .logo img{ max-width: 40%; max-height: 40px;  float: left;}\n.questions-header header { background: none;}\n.questions-header header .p-right0 { padding:0; min-height: 60px;}\n.questions-header header .right-sec{ width:100%;}\n.questions-header header .right-sec p {width: 100%; text-align: center;}\nsection .questions-header header .right-sec i {left: 9px !important;}\n.questions-header header .right-sec span {width: 100%;text-align: center;}\n.que-fixed { /*top: -29px;*/ }\n.top-head .mid-width:nth-child(1){width:100%;float:left; font-family:montserratlight !important; text-align: center;}\n.top-head .mid-width:nth-child(2){width:100%;float:left; font-family:montserratlight !important;  text-align: center;}\n.redo-link ul{ float:left;}\n/*.cp1 .landing-page-mid  { padding-top: 26% !important;}\n.cp2 .landing-page-mid  { padding-top: 26% !important;}\n.cp3 .landing-page-mid  { padding-top: 26% !important;}*/\n.btn.prime-action{/* margin-bottom:0 !important; */}\n  .question-section-outer{ overflow: hidden;}\n\n.landing-page-mid .main-heading{font-size: 8vmin;line-height: 1.3em !important; margin-top:25%;}\n.landing-page-mid .sub-heading{    font-size: 5vmin !important; line-height: 1.3em !important;} \n.landing-page-mid .prime-action {font-size: 2.5vmin !important; margin-top:0 !important; }\n.landing-page-mid .input-section .input-outer span{left:10px !important;}\n.result-small-section .small-top-sec p:nth-child(2) {font-family: montserratlight !important; font-size: 1.6vmin;} \n.result-small-section .small-top-sec p:nth-child(3) {font-family: montserratlight !important; font-size: 1.6vmin;} \n.result-small-section {padding: 30px 30px 0px 30px; min-height: auto;}\n.leadform-outer { padding-bottom: 0 !important; }\n.share-set {float: left; width: 98%;}\n.page_2 .bottom-section {width: 100%;}\n.questions .question-head { font-size: 6vmin;}\n.questions .question-subhead { font-size: 3.3vmin;}\n.questions{padding-top: 27%;}\n.page_2 .result-centre-outer .mid-width p {font-size: 3.5vmin !important;}\n.landing-footer-outer .powered-by { width: 100%; text-align: center;}\n\n .landing-page-mid .input-section .input-outer{width: 100% !important;}\n .landing-footer-outer {margin-top: 10px;}\n .leadform-outer .prime-action{ font-size: 13px; padding: 10px 40px;}\n.landing-page-mid .input-section .input-outer input{ margin-left: 10px !important;}\n\n\n.container-temp{ width: 100%;}\n.redo-link ul {right: 7%; top: 2.5%;}\n.redo-link ul li { padding: 2px 7px;}\n.result-centre-outer .mid-width p { padding: 5px 35px;}\n.redo-link ul li a .material-icons {font-size: 12px!important; margin-top: 3px;}\n\n.page_2 {\n    position: relative !important;\n    width: 100% !important; float: none; \n    height: 100vh;\n}\n.questions .section-head{ font-size: 18px;}  \n.landing-page-mid{ padding:0 !important;} \n\n.cp1 .landing-page-mid .container-temp .input-section .input-outer input {font-size: 2.2vmin !important;}\n.cp2 .landing-page-mid .container-temp .input-section .input-outer input {font-size: 2.2vmin !important;}\n.cp3 .landing-page-mid .container-temp .input-section .input-outer input {font-size: 2.2vmin !important;}\n.landing-footer-outer .text-right .powered-by span { font-size: 2.2vmin;}\n.landing-footer-outer .text-right .powered-by img {width: 18% !important;padding-right: 0px;padding-bottom: 5px;}\n.landing-page-mid .text-center .prime-action {font-size: 2.2vmin !important;margin-bottom: 0 !important;margin-top: 1% !important;}\n.landing-page-mid .container-temp .input-section .input-outer span {top: 68%;font-size: 2vmin;}\n.questions .question-section-outer .text-center .prime-action { font-size: 14px;  padding: 1% 10%;}\n.page_2 .result-centre-outer .prime-action {font-size: 13px; margin-top: 20px; margin-bottom: 20px;}\n.share-link ul li a { font-size: 16px;}\n }\n\n @media (min-width: 768px) and (max-width:1023px) {\n\n.landing-page-mid .input-section .input-outer {\n        float: left;\n        width: 48%;\n    }\n    .landing-page-mid .input-section {\n        width: 90%;\n        margin: auto;\n        margin-left: -4px;\n    }\n    .question-section-outer {\n        float: left;\n        width: 90%;\n        margin-left: 5%;\n    }\n    .mid-width {\n        width: 100%;\n        float: left;\n        text-align: center;\n        min-height: 50px !important;\n    }\n    .top-head {\n        padding: 10px 20px;\n    }\n    \n    .left-section {\n        float: left;\n        width: 100%;\n    }\n    .result-small-section {\n        float: left;\n        padding: 15px;\n        min-height: 100px;\n        padding-bottom:0;\n    }\n    .cta-outer {\n        float: left;\n        width: 100%;\n        background: #fff;\n        padding: 13px 0;\n        text-align: center;\n    }\n    .cta-outer .container {\n        width: 100%;\n        padding: 10px 0;\n    }\n    .cta-outer .input-section .input-outer {\n        float: left;\n        width: 49%;\n    }\n    .right-section {\n        width: 100%;\n        height: auto;\n    }\n    .landing-page-mid {\n        /*display: block;*/\n        width: 100vw;\n        height: 90vh;\n    }\n    .landing-page-header {\n        /*position: relative;*/\n        left: 0px;\n        background: none !important;\n    }\n    .landing-footer-outer {\n        position: relative;\n    }\n    #main-profile .logo {\n        height: auto;\n    }\n    .landing-footer-outer .powered-by img {\n        width: 50% !important;\n        padding-right: 0px;\n        padding-bottom: 5px;\n    }\n    .landing-footer-outer .powered-by {\n        width: 202px;\n    }\n    .questions .question-section {\n        padding: 30px 20px;\n    }\n    logo {\n        position: relative;\n        float: left;\n    width: 100%;\n    }\n    .switch-outer .switch-que {\n        width: 70%;\n        display: inline-block;\n        vertical-align: middle;\n        float: none;\n    }\n    .switch-que + .pull-right {\n        display: inline-block;\n        vertical-align: middle;\n        float: none !important;\n        width: 28%;\n    }\n    .switch-outer {\n\t    padding: 8px 8px;\n\t}\n.page_2 { position: relative !important; width: 100% !important; float: none;  margin-top: -55px;  margin-left: 40px;   margin-bottom: 30px;}         \n.landing-page-mid { /*padding-top:150px !important;*/}\n.landing-footer-outer {  position: absolute;}\n.landing-page-mid .prime-action { font-size: 1.5vw !important; margin-bottom:0 !important; margin-top: 4px; }\n\n.landing-page-mid .main-heading{font-size: 7.5vmin !important;line-height: 1.2em !important; margin-bottom: 10px !important;}\n.landing-page-mid .sub-heading{font-size: 3.8vmin !important; line-height: 1.3em !important; padding-bottom:20px !important;}\n\n.disc-set{ width:100% !important; font-family: montserratlight; font-size: 10px;}\n.questions{ padding-top: 90px;}\n.questions .question-head{ font-size: 6vmin; margin-bottom:0;}\n.questions .question-subhead { font-size: 3.2vmin;}\n.redo-link ul { right: 5%; top: 4% !important;}\n.redo-link ul li a .material-icons { font-size: 14px!important; margin-top: 5px;}\n.result-centre-outer .mid-width p { padding: 5px 25px; margin: 0 !important; font-size: 5vmin !important;}\n.redo-link ul li {padding: 2px 7px !important;}\n.result-centre-outer .prime-action { font-size: 14px; margin-bottom: 0px; margin-top: 13px;}\n.landing-page-mid .input-section .input-outer input{ padding: 14px 2% !important;}\n.cp1 .landing-page-mid .main-heading {line-height:1.1em;}\n.cp2 .landing-page-mid .main-heading {line-height:1.1em;}\n.cp3 .landing-page-mid .main-heading {line-height:1.1em;}\n.landing-page-header .questions-header .logo img {max-width: 84%;max-height: 50px;}\n.cp1 .top-fix-bar {min-height: 63px;}\n.cp2 .top-fix-bar {min-height: 63px; }\n.cp3 .top-fix-bar {min-height: 63px; }\n.questions .prime-action { padding: 5px 55px;}\n.cp1 .result-centre-outer { margin: 1% 3%;}\n.cp2 .result-centre-outer { margin: 1% 3%;}\n.cp3 .result-centre-outer { margin: 1% 3%;}\n.recom-section .leadform-outer { padding: 0 12% 6% 12% !important;}\n.recom-section .leadform-outer h1 {padding-left: 0; margin-top: 0; font-size: 30px; margin-bottom: 0; }\n.recom-section .leadform-outer h5{ padding-left:0;}\n.result-centre-outer .cta-outer .input-section .input-outer input{ padding:10px 2% !important}\n}\n\n  \n @media (min-width: 1024px) and (max-width:767px) {\n\n.landing-page-mid .input-section .input-outer {\n        float: left;\n        width: 48%;\n    }\n    .landing-page-mid .input-section {\n        width: 90%;\n        margin: auto;\n        margin-left: -4px;\n    }\n    .question-section-outer {\n        float: left;\n        width: 90%;\n        margin-left: 5%;\n    }\n    .mid-width {\n        width: 100%;\n        float: left;\n        text-align: center;\n    }\n    .top-head {\n        padding: 10px 20px;\n    }\n    \n    .left-section {\n        float: left;\n        width: 100%;\n    }\n    .result-small-section {\n        float: left;\n        padding: 30px 30px 30px 30px;\n        min-height: 170px;\n        width: 100%;\n    }\n    .cta-outer {\n        float: left;\n        width: 100%;\n        background: #fff;\n        padding: 13px 0;\n        text-align: center;\n    }\n    .cta-outer .container {\n        width: 100%;\n        padding: 10px 0;\n    }\n    .cta-outer .input-section .input-outer {\n        float: left;\n        width: 100%;\n    }\n    .right-section {\n        width: 100%;\n        height: auto;\n    }\n    .landing-page-mid {\n        /*display: block;*/\n        width: 100vw;\n        height: 90vh;\n    }\n    .landing-page-header {\n        /*position: relative;*/\n        left: 0px;\n        background: none !important;\n    }\n    .landing-footer-outer {\n        position: relative;\n    }\n    #main-profile .logo {\n        height: auto;\n    }\n    .landing-footer-outer .powered-by img {\n        width: 50% !important;\n        padding-right: 0px;\n        padding-bottom: 5px;\n    }\n    .landing-footer-outer .powered-by {\n        width: 202px;\n    }\n    .questions .question-section {\n        padding: 30px 20px;\n    }\n    logo {\n        position: relative;\n        float: left;\n    width: 100%;\n    }\n    .switch-outer .switch-que {\n        width: 70%;\n        display: inline-block;\n        vertical-align: middle;\n        float: none;\n    }\n    .switch-que + .pull-right {\n        display: inline-block;\n        vertical-align: middle;\n        float: none !important;\n        width: 28%;\n    }\n    .switch-outer {\n\t    padding: 8px 8px;\n\t}\n.page_2 { position: relative !important; width: 100% !important; float: none;  margin-top: -55px;  margin-left: 40px;    margin-bottom: 30px;}         \n.landing-page-mid { /*padding-top:150px !important;*/}\n.landing-footer-outer {  position: absolute;}\n.landing-page-mid .prime-action { font-size: 1.8vw !important;}\n\n.landing-page-mid .main-heading{font-size: 7vmin;line-height: 1.2em !important;}\n.landing-page-mid .sub-heading{font-size: 3vmin !important; line-height: 1.3em !important;}\n\n.disc-set{ width:100% !important;}\n.questions{ padding-top: 90px;}\n.redo-link ul { right: 5%; top: 4% !important;}\n.redo-link ul li a .material-icons { font-size: 14px!important; margin-top: 5px;}\n.result-centre-outer .mid-width p { padding: 5px 25px; margin: 0 !important;}\n.redo-link ul li {padding: 2px 7px !important;}\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) { width: 100% !important; }\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input { padding: 1.8% 2% !important; }\n\n }\n\n@media (min-width: 700px) and (max-width:800px) {\n\n.landing-page-mid .main-heading{font-size: 6.5vmin !important;line-height: 1.2em !important; margin-bottom: 10px !important;}\n.landing-page-mid .sub-heading{font-size: 3.2vmin !important; line-height: 1.3em !important; padding-bottom:20px !important;}\n\n}\n\n@media (min-width: 1024px) and (max-width:1366px) {\n\n.landing-page-mid .prime-action { font-size: 2.3vmin !important; margin-bottom: 0%;}\n.landing-page-mid .main-heading{font-size: 7vmin !important;line-height: 1.2em !important;}\n.landing-page-mid .sub-heading{font-size: 3vmin !important; line-height: 1.3em !important;}\n\n\n\n}\n\n@media (min-width: 100px) and (max-width:767px) { \n\n.landing-page-mid .input-section .input-outer { float: left; width: 48% !important;}\n.landing-page-mid .input-section {width: 90%; margin: auto;margin-left: -4px;}\n.landing-page-header .logo img {max-width: 28%;}\n.question-section-outer {float: left; width: 90%; margin-left: 5%; }\n.mid-width {width: 100%;float: left;text-align: center; min-height: 35px !important;}\n.top-head {padding: 10px 20px;}\n.left-section {float: left;width: 100%;}\n.result-small-section {float: left; padding: 15px; min-height: 100px;}\n.cta-outer {float: left; width: 100%;background: #fff;padding: 13px 0;text-align: center;}\n.cta-outer .container { width: 100%; padding: 10px 0;}\n.cta-outer .input-section .input-outer { float: left; width: 49%;}\n.right-section { width: 100%;height: auto;}\n.landing-page-mid { width: 100vw; height: 90vh; padding: 10% 8% 7% !important;}\n.landing-page-header {padding-top: 0px;left: 0px;background: none !important;}\n.landing-footer-outer { position: relative;}\n#main-profile .logo {height: auto;}\n.landing-footer-outer .powered-by img {width: 15% !important;padding-right: 0px;padding-bottom: 0px !important;}\n.landing-footer-outer .powered-by { width: 100%;}\n.landing-footer-outer .powered-by span{font-size: 3.2vmin;}\n.questions .question-section {padding: 30px 20px;}\nlogo {position: relative; float: left; width: 100%;}\n.switch-outer .switch-que {width: 70%; display: inline-block; vertical-align: middle; float:none; }\n.switch-que + .pull-right {display: inline-block; vertical-align: middle;float:none !important; width: 28%;}\n.switch-outer {padding: 8px 8px;}\n.page_2 { position: relative !important; width: 100% !important; float: none;  margin-top: -55px;  margin-left: 40px;   margin-bottom: 30px; overflow: } \n.landing-footer-outer {  position: absolute;}\n.landing-page-mid .prime-action { font-size: 2.8vmin !important; margin-bottom:0 !important; margin-top: 1%;}\n.landing-page-mid .main-heading{font-size: 6vmin !important;line-height: 1.2em !important; margin-bottom: 1% !important; margin-top: 0%;}\n.landing-page-mid .sub-heading{font-size: 3.5vmin !important; line-height: 1.3em !important; padding-bottom:3% !important;}\n.disc-set{ width:100% !important; font-family: montserratlight; font-size: 10px;}\n.questions{ padding-top: 90px;}\n.redo-link ul { right: 5%; top: 4% !important;}\n.redo-link ul li a .material-icons { font-size: 14px!important; margin-top: 5px;}\n.result-centre-outer .mid-width p { padding: 5px 25px; margin: 0 !important; font-size: 5vmin !important;}\n.redo-link ul li {padding: 2px 7px !important;}\n.result-centre-outer .prime-action { font-size: 10px;  margin-top: 12px; margin-bottom: 12px;}\n.cp1 .landing-page-mid .input-section .input-outer input{ font-size: 3vmin !important;  padding: 3% 2% !important; border: 1px solid #f7da64 !important;}\n.cp2 .landing-page-mid .input-section .input-outer input{ font-size: 3vmin !important;  padding: 3% 2% !important; border: 1px solid #fff !important;}\n.cp3 .landing-page-mid .input-section .input-outer input{ font-size: 3vmin !important;  padding: 3% 2% !important; border: 1px solid #fff !important;}\n.questions-header header .logo { padding-top: 5px;}\n.questions .question-section-outer .prime-action{font-size: 4vmin;  padding: 1% 10%;}\n.result-full-section{ width:100% !important; padding-bottom:0; min-height: 35px !important;}\n.result-small-section{ width:33.3%; padding-bottom:0; min-height: 70px;}\n.result-small-section p:nth-child(1) {font-family: montserratlight !important; font-size: 4vmin;}\n.result-small-section p:nth-child(2) {font-family: montserratlight !important; font-size: 2.8vmin;}\n.result-small-section p:nth-child(3) {font-family: montserratlight !important; font-size: 2.5vmin;}\n.share-set {float: left;width: 100%;}\n.share-link{ width:100%;}\n.share-link ul li {float: left;}\n.bottom-section {width: 100% ; float: left;}\n.cp1 .result-centre-outer { margin: 0.3% 3%; }\n.cp2 .result-centre-outer { margin: 0.3% 3%;}\n.cp3 .result-centre-outer { margin: 0.3% 3%;}\n.landing-page-mid .input-section .input-outer span { top: 78%; font-size: 2.5vmin;}\n.lead-heading-temp1 {font-size: 14px; padding: 0 !important; }\n.result-centre-outer .cta-outer .input-section .input-outer input {font-size: 13px!important; padding: 9px 2% !important}\n.result-centre-outer .cta-outer .input-section .input-outer span {font-size: 1.5vmin; bottom: -1px;}\n.result-centre-outer .container-temp .prime-action {font-size: 12px; margin-bottom: 10px; margin-top: 11px;}\n.recom-section .leadform-outer { padding: 0 12% 6% 12% !important;}\n.recom-section .leadform-outer h1 {padding-left: 0; margin-top: 0; font-size: 25px; margin-bottom: 0;}\n.recom-section .leadform-outer h5{ padding-left:0;}\n.recom-section .outer-main{ height: auto !important;}\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) { width: 98% !important; }\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input { padding: 1.8% 2% !important; }\n}\n@media (min-width: 200px) and (max-width:600px) {\n\n    .landing-page-mid .prime-action { padding: 2% 8%;}\n}\n "

/***/ },

/***/ 864:
/***/ function(module, exports) {

module.exports = "/**\n * selectize.default.css (v0.12.1) - Default Theme\n * Copyright (c) 2013–2015 Brian Reavis & contributors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this\n * file except in compliance with the License. You may obtain a copy of the License at:\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF\n * ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n *\n * @author Brian Reavis <brian@thirdroute.com>\n */\n.selectize-control.plugin-drag_drop.multi > .selectize-input > div.ui-sortable-placeholder {\n  visibility: visible !important;\n  background: #f2f2f2 !important;\n  background: rgba(0, 0, 0, 0.06) !important;\n  border: 0 none !important;\n  -webkit-box-shadow: inset 0 0 12px 4px #ffffff;\n  box-shadow: inset 0 0 12px 4px #ffffff;\n}\n.selectize-control.plugin-drag_drop .ui-sortable-placeholder::after {\n  content: '!';\n  visibility: hidden;\n}\n.selectize-control.plugin-drag_drop .ui-sortable-helper {\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n.selectize-dropdown-header {\n  position: relative;\n  padding: 5px 8px;\n  border-bottom: 1px solid #d0d0d0;\n  background: #f8f8f8;\n  -webkit-border-radius: 3px 3px 0 0;\n  -moz-border-radius: 3px 3px 0 0;\n  border-radius: 3px 3px 0 0;\n}\n.selectize-dropdown-header-close {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  color: #303030;\n  opacity: 0.4;\n  margin-top: -12px;\n  line-height: 20px;\n  font-size: 20px !important;\n}\n.selectize-dropdown-header-close:hover {\n  color: #000000;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup {\n  border-right: 1px solid #f2f2f2;\n  border-top: 0 none;\n  float: left;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup:last-child {\n  border-right: 0 none;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup:before {\n  display: none;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup-header {\n  border-top: 0 none;\n}\n.selectize-control.plugin-remove_button [data-value] {\n  position: relative;\n  padding-right: 24px !important;\n}\n.selectize-control.plugin-remove_button [data-value] .remove {\n  z-index: 1;\n  /* fixes ie bug (see #392) */\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 17px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 12px;\n  color: inherit;\n  text-decoration: none;\n  vertical-align: middle;\n  display: inline-block;\n  padding: 2px 0 0 0;\n  border-left: 1px solid #0073bb;\n  -webkit-border-radius: 0 2px 2px 0;\n  -moz-border-radius: 0 2px 2px 0;\n  border-radius: 0 2px 2px 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.selectize-control.plugin-remove_button [data-value] .remove:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.selectize-control.plugin-remove_button [data-value].active .remove {\n  border-left-color: #00578d;\n}\n.selectize-control.plugin-remove_button .disabled [data-value] .remove:hover {\n  background: none;\n}\n.selectize-control.plugin-remove_button .disabled [data-value] .remove {\n  border-left-color: #aaaaaa;\n}\n.selectize-control {\n  position: relative;\n}\n.selectize-dropdown,\n.selectize-input,\n.selectize-input input {\n  color: #303030;\n  font-family: inherit;\n  font-size: 13px;\n  line-height: 18px;\n  -webkit-font-smoothing: inherit;\n}\n.selectize-input,\n.selectize-control.single .selectize-input.input-active {\n  background: #ffffff;\n  cursor: text;\n  display: inline-block;\n}\n.selectize-input {\n  border: 1px solid #d0d0d0;\n  padding: 8px 8px;\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n}\n.selectize-control.multi .selectize-input.has-items {\n  padding: 5px 8px 2px;\n}\n.selectize-input.full {\n  background-color: #ffffff;\n}\n.selectize-input.disabled,\n.selectize-input.disabled * {\n  cursor: default !important;\n}\n.selectize-input.focus {\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.selectize-input.dropdown-active {\n  -webkit-border-radius: 3px 3px 0 0;\n  -moz-border-radius: 3px 3px 0 0;\n  border-radius: 3px 3px 0 0;\n}\n.selectize-input > * {\n  vertical-align: baseline;\n  display: -moz-inline-stack;\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n}\n.selectize-control.multi .selectize-input > div {\n  cursor: pointer;\n  margin: 0 3px 3px 0;\n  padding: 2px 6px;\n  background: #1da7ee;\n  color: #ffffff;\n  border: 1px solid #0073bb;\n}\n.selectize-control.multi .selectize-input > div.active {\n  background: #92c836;\n  color: #ffffff;\n  border: 1px solid #00578d;\n}\n.selectize-control.multi .selectize-input.disabled > div,\n.selectize-control.multi .selectize-input.disabled > div.active {\n  color: #ffffff;\n  background: #d2d2d2;\n  border: 1px solid #aaaaaa;\n}\n.selectize-input > input {\n  display: inline-block !important;\n  padding: 0 !important;\n  min-height: 0 !important;\n  max-height: none !important;\n  max-width: 100% !important;\n  margin: 0 1px !important;\n  text-indent: 0 !important;\n  border: 0 none !important;\n  background: none !important;\n  line-height: inherit !important;\n  -webkit-user-select: auto !important;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n}\n.selectize-input > input::-ms-clear {\n  display: none;\n}\n.selectize-input > input:focus {\n  outline: none !important;\n}\n.selectize-input::after {\n  content: ' ';\n  display: block;\n  clear: left;\n}\n.selectize-input.dropdown-active::before {\n  content: ' ';\n  display: block;\n  position: absolute;\n  background: #f0f0f0;\n  height: 1px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.selectize-dropdown {\n  position: absolute;\n  z-index: 10;\n  border: 1px solid #d0d0d0;\n  background: #ffffff;\n  margin: -1px 0 0 0;\n  border-top: 0 none;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-border-radius: 0 0 3px 3px;\n  -moz-border-radius: 0 0 3px 3px;\n  border-radius: 0 0 3px 3px;\n}\n.selectize-dropdown [data-selectable] {\n  cursor: pointer;\n  overflow: hidden;\n}\n.selectize-dropdown [data-selectable] .highlight {\n  background: rgba(125, 168, 208, 0.2);\n  -webkit-border-radius: 1px;\n  -moz-border-radius: 1px;\n  border-radius: 1px;\n}\n.selectize-dropdown [data-selectable],\n.selectize-dropdown .optgroup-header {\n  padding: 5px 8px;\n}\n.selectize-dropdown .optgroup:first-child .optgroup-header {\n  border-top: 0 none;\n}\n.selectize-dropdown .optgroup-header {\n  color: #303030;\n  background: #ffffff;\n  cursor: default;\n}\n.selectize-dropdown .active {\n  background-color: #f5fafd;\n  color: #495c68;\n}\n.selectize-dropdown .active.create {\n  color: #495c68;\n}\n.selectize-dropdown .create {\n  color: rgba(48, 48, 48, 0.5);\n}\n.selectize-dropdown-content {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.selectize-control.single .selectize-input,\n.selectize-control.single .selectize-input input {\n  cursor: pointer;\n}\n.selectize-control.single .selectize-input.input-active,\n.selectize-control.single .selectize-input.input-active input {\n  cursor: text;\n}\n/* .selectize-control.single .selectize-input:after {\n  content: ' ';\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  margin-top: -3px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 5px 5px 0 5px;\n  border-color: #808080 transparent transparent transparent;\n} */\n.selectize-control.single .selectize-input.dropdown-active:after {\n  margin-top: -4px;\n  border-width: 0 5px 5px 5px;\n  border-color: transparent transparent #808080 transparent;\n}\n.selectize-control.rtl.single .selectize-input:after {\n  left: 15px;\n  right: auto;\n}\n.selectize-control.rtl .selectize-input > input {\n  margin: 0 4px 0 -2px !important;\n}\n.selectize-control .selectize-input.disabled {\n  opacity: 0.5;\n  background-color: #fafafa;\n}\n.selectize-control.multi .selectize-input.has-items {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.selectize-control.multi .selectize-input.disabled [data-value] {\n  color: #999;\n  text-shadow: none;\n  background: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.selectize-control.multi .selectize-input.disabled [data-value],\n.selectize-control.multi .selectize-input.disabled [data-value] .remove {\n  border-color: #e6e6e6;\n}\n.selectize-control.multi .selectize-input.disabled [data-value] .remove {\n  background: none;\n}\n.selectize-control.multi .selectize-input [data-value] {\n  text-shadow: 0 1px 0 rgba(0, 51, 83, 0.3);\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  background-color: #1b9dec;\n  background-image: -moz-linear-gradient(top, #1da7ee, #178ee9);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#1da7ee), to(#178ee9));\n  background-image: -webkit-linear-gradient(top, #1da7ee, #178ee9);\n  background-image: -o-linear-gradient(top, #1da7ee, #178ee9);\n  background-image: linear-gradient(to bottom, #1da7ee, #178ee9);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff1da7ee', endColorstr='#ff178ee9', GradientType=0);\n  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.2),inset 0 1px rgba(255,255,255,0.03);\n  box-shadow: 0 1px 0 rgba(0,0,0,0.2),inset 0 1px rgba(255,255,255,0.03);\n}\n.selectize-control.multi .selectize-input [data-value].active {\n  background-color: #0085d4;\n  background-image: -moz-linear-gradient(top, #008fd8, #0075cf);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#008fd8), to(#0075cf));\n  background-image: -webkit-linear-gradient(top, #008fd8, #0075cf);\n  background-image: -o-linear-gradient(top, #008fd8, #0075cf);\n  background-image: linear-gradient(to bottom, #008fd8, #0075cf);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff008fd8', endColorstr='#ff0075cf', GradientType=0);\n}\n.selectize-control.single .selectize-input {\n  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8);\n  box-shadow: 0 1px 0 rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8);\n  background-color: #f9f9f9;\n  background-image: -moz-linear-gradient(top, #fefefe, #f2f2f2);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fefefe), to(#f2f2f2));\n  background-image: -webkit-linear-gradient(top, #fefefe, #f2f2f2);\n  background-image: -o-linear-gradient(top, #fefefe, #f2f2f2);\n  background-image: linear-gradient(to bottom, #fefefe, #f2f2f2);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffefefe', endColorstr='#fff2f2f2', GradientType=0);\n}\n.selectize-control.single .selectize-input,\n.selectize-dropdown.single {\n  border-color: #b8b8b8;\n}\n.selectize-dropdown .optgroup-header {\n  padding-top: 7px;\n  font-weight: bold;\n  font-size: 0.85em;\n}\n.selectize-dropdown .optgroup {\n  border-top: 1px solid #f0f0f0;\n}\n.selectize-dropdown .optgroup:first-child {\n  border-top: 0 none;\n}\n"

/***/ },

/***/ 865:
/***/ function(module, exports) {

module.exports = "body{margin:0;padding:0;font-size:14px;  background: #f2f2f2 !important; float: left; width:100%;}\n.template-section input:not([type]),.template-section input[type=text],.template-section input[type=password],.template-section input[type=email],.template-section input[type=url],.template-section input[type=time],.template-section input[type=date],.template-section input[type=datetime],.template-section input[type=datetime-local],.template-section input[type=tel],.template-section input[type=number],.template-section input[type=search],.template-section input[type=FirstName],.template-section input[type=LastName],input[type=Phone],.template-section textarea.materialize-textarea{background-color:transparent;border:1px solid #d9dad3;border-radius:0;outline:none;width:100%;font-size:16px;margin:0 0 15px 0;padding:16px 2%;box-shadow:none;transition:all 0.3s;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}\n.template001{width:100%;height:100%;list-style-position:outside;margin:0;padding:0;}\n\n.input-section input:not([type]),.input-section input[type=text],.input-section input[type=password],.input-section input[type=email],.input-section input[type=url],.input-section input[type=time],.input-section input[type=date],.input-section input[type=datetime],.input-section input[type=datetime-local],.input-section input[type=tel],.input-section input[type=number],.input-section input[type=search],.input-section input[type=FirstName],.input-section input[type=LastName],input[type=Phone],.input-section textarea.materialize-textarea{background-color:transparent;border:1px solid #d9dad3;border-radius:0;outline:none;width:100%;font-size:16px;margin:0 0 30px 0;padding:16px 2%;box-shadow:none;transition:all 0.3s;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}\n.template001{width:100%;height:100%;list-style-position:outside;margin:0;padding:0;}\n\n.question-components input{background-color:transparent;border:1px solid #d9dad3;border-radius:0;outline:none;width:100%;font-size:16px;margin:0 0 15px 0;padding:16px 2%;box-shadow:none;transition:all 0.3s;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box; border-collapse:separate;}\n\n/*Main Section Style */\n.main-bg{background:url(\"\") no-repeat center center fixed;-webkit-background-size:cover !important;-moz-background-size:cover !important;-o-background-size:cover !important;background-size:cover !important;width:100%;height:100%;position:relative;vertical-align:middle;text-align:center; box-shadow: 0 2px 9px 2px rgba(0,0,0,0.4);}\n.main-body{ float: left; width: 100%;}\n.container-temp{width:90%;margin:0 auto;display:inline-block;}\nselect:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}\n\n/*LANDING PAGE CSS START HERE */\n\nlogo{position:absolute;left:0px;}\nheader .logo a{cursor:default}\n\n/*header section*/\n.landing-page-header{float:left;width:100%;padding:10px;position:absolute;top:0px;}\n.landing-page-header .logo{float:left;padding:15px 10px;width:180px;}\n.landing-page-header .logo img{max-width:100%; max-height: 50px;}\n.landing-page-header .logo span{color:#fff;font-size:18px;margin-left:15px;font-family:montserratregular;}\n\n/*header section end*/\n\n/*Content section */\n\n.landing-page-mid{width:100vw !important;display:table-cell;vertical-align:middle;height:100vh !important;text-align:center; background:rgba(0,0,0,0.45);     padding: 8% !important; }\n.landing-page-mid header{width:90%;margin:0 auto;word-break:break-word; padding-top:20px;}\n\n/*.input-outer {    width: 100vw; display: table-cell; vertical-align: middle;text-align: center;  } */\n.landing-page-mid .cta-outer{width:100vw;display:table-cell;vertical-align:middle;height:20vh;text-align:center;}\n.landing-page-mid .main-head{font-family:montserratregular;font-size:48px;color:#00e3d8;word-wrap:break-word;}\n.landing-page-mid .sub-head{font-family:montserratregular;font-size:24px;color:#e5e5e6;word-wrap:break-word;}\n.landing-page-mid .description{font-family:montserratregular;font-size:14px;color:#b8b9bb;margin-top:25px;word-wrap:break-word;padding:0 20%;}\n.landing-page-mid .input-section{width:65%;margin: 0 auto; display: inline-block;}\n.landing-page-mid .input-section input{width:43%!important;margin:8px;border:2px solid #c4c4c6!important;color:#fefeff;font-family:montserratregular;font-size:14px!important;}\n.landing-page-mid .input-section::-webkit-input-placeholder{color:#c4c4c6;}\n.landing-page-mid .input-section .input-outer{float:left;width:49%;position:relative;}\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){width:100%;}\n.landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #c4c4c6!important;color:#fefeff;font-family:montserratregular;font-size:14px!important;margin-bottom:20px !important;}\n.landing-page-mid .input-section .input-outer span{float:left;width:100%;position:absolute;top:68px;left:25px;text-align:left;padding-left:2px;color:#f44336;font-size:12px;}\n.landing-footer-outer{position:absolute;width:100%;padding:10px 25px; bottom:0;}\n.landing-footer-outer .footer-nav{margin:0;padding:0;float:left;}\n.landing-footer-outer .footer-nav li{float:left;display:inline;}\n.landing-footer-outer .footer-nav li a{color:#fff;font-family:montserratregular;font-size:12px;text-decoration:none;}\n.landing-footer-outer .footer-nav li a:hover{color:#fff;}\n.landing-footer-outer .footer-nav li span{color:#fff;font-family:montserratregular;font-size:12px;text-decoration:none;padding:5px 10px;}\n.landing-footer-outer .powered-by{float:right;text-align:right;}\n.landing-footer-outer .powered-by span{color:#fff;font-size:12px;margin-right:5px;font-family:montserratregular; text-shadow: 3px 4px 3px rgba(0,0,0,0.5);}\n.landing-footer-outer .powered-by img{width:44%;padding-bottom:5px;}\n.landing-page-mid .prime-action{ font-size:2min !important; box-shadow: 1px 10px 10px 3px rgba(0,0,0,0.3); color: #ffffff !important; margin-bottom: 80px; text-transform: uppercase;}\n \n\n\n/*LANDING PAGE CSS END HERE */\n\n/*Questions Section Style Start*/\n\n.questions{padding-top:7%;float:left;width:100%; height: 100% !important; padding-bottom:3%; min-height: 100vh;}\n.question-section-outer{float:left;width:66.66%;margin-left:16.6%;}\n.questions .question-section-outer .questions-header header{background:#161a29;float:left;width:100%;padding:0; box-shadow:2px 2px 10px 0px rgba(0,0,0,0.10); }\n.questions .question-section-outer .questions-header header .p-right0{padding-right:0;}\n.questions .question-section-outer .questions-header header .logo{float:left;padding:10px;}\n.questions .question-section-outer .questions-header header .right-sec{float:left;background:#f7da64;min-height:70px;padding:13px 10px 10px 2%;position:absolute; right:0;}\n.questions .question-section-outer .questions-header header .right-sec i{font-size:20px;color:#012435;position:absolute;left:-72px;}\n.questions .question-section-outer .questions-header header .right-sec p{float:left;font-size:11px;color:#012435;padding-left:26px;font-family:montserratregular;margin-bottom:5px; margin-top:0;}\n.questions .question-section-outer .questions-header header .right-sec span{float:left;font-size:20px;color:#012435;font-family:montserratregular;padding-left:5px; width:100%;}\n.que-fixed{position:fixed;top:0;width:100%;z-index:99;}\n.template-section .que-fixed { z-index: -1;}\n.question-page{padding-top:7%;}\n.questions .question-head{font-family:montserratregular;font-size:4.5vmin;text-align:center;color:#232f3f;margin-bottom:5px; word-break: break-word;}\n.questions .question-subhead{font-family:montserratlight;font-size:2.7vmin;text-align:center;color:#232f3f;width:75%;margin:0 auto;}\n.questions .section-head{font-size:20px;margin-bottom:10px;font-family:montserratlight;color:#666e78;width:100%;float:left; word-break:break-word;}\n.questions .file-outer .section-head{font-size:22px;margin-bottom:10px;font-family:montserratlight;color:#666e78;}\n.questions .section-head i{color:#dcdddf;font-size:24px;margin-top:4px;}\n.questions .question-components{width:100%;display:inline-block;padding-bottom:30px;}\n.questions .question-components .check-comp label{margin-bottom:0;min-height:62px;color:#666e78;}\n.questions .section-head span{margin-bottom:10px;display:inline-block;}\n.questions .question-components input{color:#666e78}\n.questions .date-picker-outer .section-head{font-size:22px;margin-bottom:10px;font-family:montserratlight;color:#666e78;margin-top:-20px;}\n\n\n.question-section .input-section .input-outer span  {float: left; width: 100%;text-align: left; color: #f44336;font-size: 12px;z-index: 1; margin-top: -22px;  margin-bottom: 8px;}\n.head-padding{padding-top:10px;}\n.questions .question-section{ box-shadow:3px 10px 19px 5px rgba(0,0,0,0.10);}\n.questions .question-section{width:100%;display:inline-block;padding:30px 40px;background:#fff; margin-top: 30px;}\n.questions .question-section-outer .prime-action{ background:#f3d455 !important; border:2px solid #e6c746 !important; }\n/*Questions Section Style End*/\n\n/*Common Style for All Themes  */\n\n.input-section:-moz-placeholder{    /* Firefox 18- */\ncolor:#c4c4c6;}\n.input-section::-moz-placeholder{    /* Firefox 19+ */\ncolor:#c4c4c6;}\n.input-section:-ms-input-placeholder{color:#c4c4c6;}\n.prime-action{font-family:montserratregular;font-size:18px;color:#28324e;margin-top:30px;margin-bottom:40px;padding:10px 60px;border-radius:0!important;white-space:normal;}\n\n\n/* counter Buttons Control*/\n.counter{float:left;padding:5px;border:1px solid #dcdddf;font-family:montserratlight;margin-bottom:20px;}\n.qty{width:100px!important;height:25px;text-align:center;float:left;border:none!important;margin-bottom:0!important;font-size:16px!important;}\n.qtyplus{width:25px;height:25px;background:none;float:left;margin-left:10px;cursor:pointer;font-size:20px;padding:5px;color:#f7da64;}\n.qtyminus{width:25px;height:25px;float:left;margin-right:10px;cursor:pointer;font-size:20px;padding:5px;color:#f7da64;}\n.qtyminus .material-icons,.qtyplus .material-icons{font-size:20px!important}\n\n/* switch Buttons  Control */\n.switch-outer{width:100%;float:left;padding:8px 15px;border:1px solid #d9dad3;font-size:16px;font-weight:normal;line-height:16px;border-bottom:0;font-family:montserratlight;}\n.switch-outer:last-child{border-bottom:1px solid #d9dad3;}\n.switch-outer .switch-que{float:left;padding:12px;font-size:16px;text-align:left;font-family:montserratlight;width:80%;line-height:20px;color:#232f3f;}\n.switch-outer .switch{display:table-cell;vertical-align:middle;    padding: 9px 5px;\n    margin-top: -1px;}\n.switch-outer .cmn-toggle{position:absolute;margin-left:-9999px;visibility:hidden;}\n.switch-outer .cmn-toggle + label{display:block;position:relative;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}\n.switch-outer input.cmn-toggle-round-flat + label{padding:2px;width:62px;height:30px;background-color:#ccc;-webkit-border-radius:60px;-moz-border-radius:60px;-ms-border-radius:60px;-o-border-radius:60px;border-radius:60px;-webkit-transition:background 0.4s;-moz-transition:background 0.4s;-o-transition:background 0.4s;transition:background 0.4s;}\n.switch-outer input.cmn-toggle-round-flat + label:before,input.cmn-toggle-round-flat + label:after{display:block;position:absolute;content:\"\";}\n.switch-outer input.cmn-toggle-round-flat + label:before{top:2px;left:2px;bottom:2px;right:2px;background-color:#fff;-webkit-border-radius:60px;-moz-border-radius:60px;-ms-border-radius:60px;-o-border-radius:60px;border-radius:60px;-webkit-transition:background 0.4s;-moz-transition:background 0.4s;-o-transition:background 0.4s;transition:background 0.4s;}\n.switch-outer input.cmn-toggle-round-flat + label:after{top:4px;left:4px;bottom:4px;width:23px;background-color:inherit;-webkit-border-radius:52px;-moz-border-radius:52px;-ms-border-radius:52px;-o-border-radius:52px;border-radius:52px;-webkit-transition:margin 0.4s,background 0.4s;-moz-transition:margin 0.4s,background 0.4s;-o-transition:margin 0.4s,background 0.4s;transition:margin 0.4s,background 0.4s;}\n.switch-outer input.cmn-toggle-round-flat:checked + label{background-color:#f7da64;}\n.switch-outer input.cmn-toggle-round-flat:checked + label:after{margin-left:30px;background-color:inherit;}\n\n/*input*/\n.input-icon{color:initial;position:relative;top:-60px;font-size:16px;background:none;border:none;text-align:right;padding:6px 10px 6px 20px;}\n.input-group-addon.input-icon{color:#f7da64;}\n\n/*File Upload  Control*/\n.file-field{position:relative;}\n.input-field{position:relative;max-height:54px;float:left;width:100%;font-family:montserratlight}\n.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0);z-index:9;}\n.file-field .input-icon{left:1px;    /* top: 8px; */color:#f7da64;font-size:24px;text-align:left;}\n.file-field input[type=text]{padding-left:55px;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}\n\n/* Range slider  Control*/\n.slider-selection{background:none;background-color:#f7da64;box-shadow:none;}\n.slider-track-low,.slider-track-high{background:#ccc;}\n.slider-handle{background-color:#fff;background-image:none;box-shadow:none;border:4px solid #f7da64;width:18px;height:18px;}\n.tooltip-inner{padding:3px 10px;font-size:16px;background-color:#f7da64;border-radius:0px;}\n.tooltip.top .tooltip-arrow{border-top-color:#f7da64;}\n.slider .tooltip.top{margin-top:-63px;}\n.slider.slider-horizontal{width:100%;}\n.slider.slider-horizontal .slider-track{height:6px;}\n.slider.slider-horizontal .slider-selection,.slider.slider-horizontal .slider-track-low,.slider.slider-horizontal .slider-track-high{top:1px;}\n.slider-track .slider-tick{background:#ccc;opacity:1;}\n.slider-tick.in-selection,.slider-tick{background-image:none;background:#f7da64;width:18px;height:18px;}\n.slider-selection.tick-slider-selection{background-image:none;background-color:#f7da64;}\n.range{font-size:18px;position:relative;top:41px;right:-1px;}\n.range-max{top:-6px;float:right;}\n.slider.slider-horizontal .slider-track{height:4px;}\n.slider.slider-horizontal .slider-tick,.slider.slider-horizontal .slider-handle{margin-top:-4px;}\n.slider-handle{width:12px;height:12px;background:#ffffff;border:2px solid #f7da64;}\n.slider-track{background:#cccccc;}\n.tooltip-inner{background:#f7da64!important;}\n.tooltip.top .tooltip-arrow{border-top-color:#f7da64}\n.slider-track-low,.slider-track-high{}\n.slider-selection.tick-slider-selection{background:#f7da64;}\n.slider-tick.in-selection{width:12px;height:12px;background:#f7da64;}\n.slider-tick{width:12px;height:12px;background:#cccccc;}\n.cir{margin-left:-10px;margin-top:2px;}\n.range-slider{text-align:center;}\n.slider.slider-horizontal{width:98%;padding:30px 0;padding-bottom:0px;}\n.slider.slider-horizontal .slider-tick-label-container .slider-tick-label{font-family:montserratlight;font-size:16px;color:#f7da64;width:100%;}\n.slider.slider-horizontal .slider-tick-label-container{white-space:nowrap;margin-top:3px!important;}\n.tooltip.top .tooltip-arrow{margin-left:-8px!important;}\n\n/*new rangeslider Control*/\n.range-slider{margin-top:30px;}\n.range-slider .well1{position:relative!important;border-color:#f7da64;}\n.range-slider .tip{background:#f7da64;border-color:#f7da64;max-width:50px;color:#fff;position:absolute;top:-30px;padding:5px 10px;}\n.range-slider .tip:after{top:100%;left:50%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(0,174,165,0);border-top-color:inherit;border-width:8px;margin-left:-8px;color:#fff;}\n\n/*selectbox style Control*/\n.selectize-input{border:1px solid #d9dad3;padding:15px 15px 15px 15px;width:100%;display:inline-block;width:100%;overflow:hidden;position:relative;z-index:1;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:0px;font-family:montserratlight;font-size:14px;  min-height: 51px !important;}\n.selectize-input .item{font-family:montserratlight;font-size:16px;}\n.selectize-dropdown .active{background-color:#f7da64;color:#28324e; top:50px !important;}\n.selectize-dropdown [data-selectable],.selectize-dropdown .optgroup-header{padding:15px;font-family:montserratlight;font-size:14px;}\n.selectize-dropdown [data-selectable]{cursor:pointer;overflow:hidden;}\n.selectize-control.single .selectize-input,.selectize-dropdown.single{border-color:#d9dad3; background: #f1f3f3 !important;}\n.selectize-control.single .selectize-input{ background: #ffffff !important; z-index: 0;}\n.control-group{position:relative;font-family:montserratregular;}\n.select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#f7da64;bottom:18px}\n.selectize-dropdown-content{ max-height: auto!important; }\n\n\n/*Components end */\n\n/*Date picker color set */\n\n.datepicker table tr td.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active:hover{background-color:#006dcc!important;background-image:-moz-linear-gradient(to bottom,#f7da64,#03a29a);background-image:-ms-linear-gradient(to bottom,#f7da64,#03a29a);background-image:-webkit-gradient(linear,0 0,0 100%,from(#f7da64),to(#03a29a));background-image:-webkit-linear-gradient(to bottom,#f7da64,#03a29a);background-image:-o-linear-gradient(to bottom,#f7da64,#03a29a);}\n.section-head .help-outer{width:40px;position:relative;display:inline-block;top:4px;padding-left:5px;}\n.section-head .help-text{display:none;width:250px;background:#eee;border:1px solid #ccc;padding:8px;left:-50px;font-size:12px;position:absolute;color:#999;line-height:18px;font-family:montserratlight;-webkit-box-shadow:3px 3px 10px 0px rgba(224,221,224,1);-moz-box-shadow:3px 3px 10px 0px rgba(224,221,224,1);box-shadow:3px 3px 10px 0px rgba(224,221,224,1);}\n.section-head i:hover + .help-text{display:block!important;z-index:99;}\n\n/*New Radio Style   Control*/\n.radio-outer{border:1px solid #d9dad3;border-bottom: 0;font-family:montserratlight;width:100%;float:left;  -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;\n    box-sizing: border-box; margin-bottom: 2px; margin-top: -3px; margin-left: -1px; padding: 1px;}\n.radio-outer:last-child{border:1px solid #d9dad3 !important;  -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n}\n.radio-outer:hover{background:#f1f3f3;}\n.lable-style{padding:20px 30px;margin-left:22px;}\n.control{display:block;position:relative;padding-left:30px;cursor:pointer;font-size:16px;font-weight:500;}\n.control input{position:absolute;z-index:-1;opacity:0; width: auto;}\n.control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #f7da64;}\n.control--radio .control__indicator{border-radius:50%;}\n.control input:checked ~ .control__indicator{background:#f7da64;}\n.control__indicator:after{content:'';position:absolute;display:none;}\n.control input:checked ~ .control__indicator:after{display:block;}\n.control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f7da64;border:3px solid #fff;}\n.control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#f7da64;}\n.control--radio .control__indicator.icon-set:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:none;border:none;}\n.control input:checked ~ .control__indicator.icon-set{background:none;}\n\n\n\n\n\n/*New Checkbox Style  Control*/\n.checkbox-outer-base{border:1px solid #d9dad3;border-bottom:0px;font-family:montserratlight;width:100%;float:left;padding: 1px;}\n.checkbox-outer-base:last-child{border:1px solid #d9dad3;}\n.checkbox-outer-base:hover{background:#f1f3f3;}\n.checkbox-outer-base.active{background:#f1f3f3;}\n.checkbox-outer{border:1px solid #d9dad3;border-bottom:0;font-family:montserratlight;width:100%;float:left;}\n.checkbox-outer:last-child{border:1px solid #d9dad3;}\n.checkbox-outer-base:last-child.active {border: 1px solid #d9dad3 !important;}\n.checkbox-outer-base:last-child:hover{background:#f1f3f3;}\n.checkbox-outer:hover{background:#f1f3f3;}\n.checkbox-outer.active,.radio-outer.active{background:#f1f3f3;}\n.control__indicator.check-set{left:16px!important;border:2px solid #f7da64;}\n.control--checkbox{padding:20px 55px;}\n.control--checkbox .control__indicator:after{left:6px;top:1px;width:5px;height:11px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg);}\n.check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#f7da64;}\n.check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#f7da64;}\n.check-comp .checkbox-outer .control--checkbox .control__indicator:after{border:none;}\n.check-comp .checkbox-outer .control--checkbox{padding:20px 50px;}\n\n\n\n.checkbox-outer-base.green .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#000000;}\n\n\n/* New CSS */\n.w100{width:100%!important;float:left;}\n.select{position:relative;display:inline-block;margin-bottom:15px;width:100%;font-family:montserratlight!important;}\n.select select{display:inline-block;width:100%;cursor:pointer;padding:15px;outline:0;border-radius:0;appearance:none;-webkit-appearance:none;-moz-appearance:none;border:1px solid #d9dad3;font-family:montserratlight;font-size:16px;-webkit-appearance:none;-moz-appearance:none;appearance:none;}\n[disabled]{color:#bdbdbd;}\n[selected]{color:#232f3f;}\noption{color:#232f3f;}\noption.op{color:red;}\n.select select::-ms-expand{display:none;}\n.select select:hover,.select select:focus{background:#fff;}\n.select__arrow{position:absolute;top:24px;right:15px;width:0;height:0;pointer-events:none;border-style:solid;border-width:8px 5px 0 5px;border-color:#7b7b7b transparent transparent transparent;}\n/*.template-section .select__arrow{display: none;}*/\n.template-section .selectize-control.single .selectize-input:after{display: none;}\ninput[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;}\n\n/*New circle outer*/\n.circle-outer{float:left;width:100%;padding:10px;text-align:center;}\n.circle-outer .icon-outer{color:#f7da64;}\n.circle-outer .icon-outer i{font-size:40px;}\n.circle-outer .num-circle-outer{-webkit-border-radius:50px;-moz-border-radius:50px;border-radius:50px;background:#f7da64;padding:10px 17px;color:#fff;font-size:14px;font-family:montserratregular;}\n\n/*Common Style for All Themes  */\n\n/*Result Section Style */\n\n.full-width{width:100%;position:relative;min-height:1px;padding-right:15px;padding-left:15px;}\n.mid-width{width:50%;float:left;}\n.small-width{width:33%;position:relative;float:left;min-height:1px;padding-right:15px;padding-left:15px;}\n.left-section{float:left;width:100%; }\n.top-head{position:relative;z-index:1;float:left;width:100%;background:#f7da64 !important;min-height:50px;padding:10px 35px; opacity: 0.8; text-align: center;}\n.top-head h4{color:#6f7072;font-size:24px;text-transform:uppercase;font-family:montserratregular;}\n.top-head h4 span{color:#f7da64;font-size:24px;}\n.top-head p{margin-bottom:0px;margin-top:6px;}\n.share-link{float:left;text-align:right;width:100%; color:#000;}\n.share-link ul{padding:0;float:right; margin:0;}\n.share-link ul li{float:left;display:inline-block;}\n.share-link ul li span{padding:0px 10px;color:#f7da64;font-size:18px;font-weight:bold;}\n.share-link ul li a{float:left;display:inline-block;text-decoration:none;color:#000;font-size:18px;padding:5px; opacity:0.4;}\n.share-link ul li a .material-icons{font-size:18px!important;margin-top:3px;}\n.share-link span i{font-size:16px;margin-left:6px;color:#6e6f71;}\n.share-link span li{border-left:1px dotted #6e6f71;height:18px;margin-top:8px;margin-left:5px;margin-right:5px;}\n.result-small-section{float:left;padding:0px 30px 30px 30px;min-height:90px;width:33.3%;}\n.result-small-section h4{color:#f7da64;text-align:center;font-size:24px;font-family:montserratregular;color:#999;}\n.result-small-section h6{color:#f7da64;text-align:center;font-size:14px;font-family:montserratregular;margin:0;line-height:22px;}\n.result-half-section{float:left;padding:0px 30px 30px 30px;min-height:170px;width:50%;}\n.result-half-section h4{color:#f7da64;text-align:center;font-size:24px;font-family:montserratregular;color:#999;}\n.result-half-section h6{color:#f7da64;text-align:center;font-size:14px;font-family:montserratregular;margin:0;line-height:22px;}\n.share-link{float:left;}\n\n\n.redo-link ul{ padding: 0; margin: 0; position: absolute; right: 5%; top: 8%;}\n.redo-link ul li{float: left; display:inline-block; -webkit-border-radius: 28px;-moz-border-radius: 28px;border-radius: 28px;  padding: 3px 8px;  }\n.redo-link ul li:nth-child(1){display:none;}\n.redo-link ul li span{padding:2px 10px 0 10px; float: left; font-size: 20px; }\n.redo-link ul li a{float:left;display:inline-block;text-decoration:none;color:#fff;font-size:18px; }\n.redo-link ul li a .material-icons{font-size:16px!important;margin-top:4px;}\n.redo-link span i{font-size:16px;margin-left:6px;color:#6e6f71;}\n.redo-link span li{border-left:1px dotted #6e6f71;height:18px;margin-top:8px;margin-left:5px;margin-right:5px;}\n\n.result-full-section{float:left;padding:30px;min-height:160px;z-index:1;width: 100%;}\n.result-full-section h4{color:#f7da64;text-align:center;font-size:30px;font-family:montserratregular;}\n.result-full-section h6{color:#f7da64;text-align:center;font-size:14px;font-family:montserratregular;margin:0;line-height:22px;}\n.grey-color{color:#9a9a9a!important;}\n.small-top-sec p{text-align:center;margin:0;}\n.right-section{border-left:1px solid #dfdfdf;width:30%;display:table;height:80vh;padding-right: 20px;box-shadow:inset 2px 0px 9px -6px; background-color:rgba(0, 0, 0, 0.05); display:none;}\n.right-section .internal-sec h3{color:#f7da64;float:left;}\n.right-section .internal-sec h3 i{font-size:30px;float:left;}\n.right-section .internal-sec h3 span{margin-top:3px;float:left;padding-left:10px;font-size:24px;color:#f7da64;}\n.right-section .internal-sec h3 span i{float:left;font-size:13px;color:#999999;margin-top:10px;}\n.right-section h4{color:#6e7071;font-size:13px;float:left;line-height:20px;width:100%;margin-top:8px;margin-bottom:3px; font-family:montserratlight; word-break: break-word; }\n.right-section h5{font-size:13px;float:left;line-height:20px;color:#6e7071;font-family:montserratregular;margin-top:0;}\n.cta-outer{float:left;width:100%;padding:13px 2%;text-align:center;}\n.cta-outer .container{width:100%;padding:10px 40px;}\n.cta-outer .container .input-section{width:100%;padding:20px 50px;margin:0;background:#f5f5f5;float:left;}\n.cta-outer .container .input-section input{width:98%!important;margin:6px!important;border:2px solid #cccccc!important;color:#b9b9b9;font-family:montserratregular;font-size:14px!important;background:#ffffff;float:left;cursor:auto;}\n.bottom-section{text-align:left;color:#333333;font-size:13px;font-family:montserratregular;padding:0 0 0px 0;float:left;width:70%; opacity:0.5; }\n.result-cta-outer .container{width:100%;background:#fff;float:left;}\n.result-cta-outer .container .prime-action{background-color:#f9f9f9;font-family:montserratregular;color:#00afa5;padding:6px 40px;border:2px solid #00afa5;text-decoration:none!important;transition:background-color 0.5s ease;}\n.result-cta-outer .container .prime-action:hover{background-color:#00afa5;color:#fff;}\n.cta-outer .input-section .input-outer{float:left;width:49%; padding:10px 15px;/*background-color:rgba(0, 0, 0, 0.05);*/position: relative;}\n.cta-outer .input-section .input-outer:nth-last-child(1):nth-child(odd) {float:left;width:100%;position: relative; }\n\n.cta-outer .input-section .input-outer input{ margin-bottom:5px; float:left;width:100%;border:2px solid #c4c4c6!important;color:#232f3f;font-family:montserratregular;font-size:14px!important;background:#fff}\n.cta-outer .input-section .input-outer input:nth-last-child(1):nth-child(odd){width:97.5%;}\n.cta-outer .input-section .input-outer span{    float: left;\n    width: 100%;\n    text-align: left;\n    padding-left: 9px;\n    color: #f44336;\n    font-size: 12px;\n    bottom: -1px;\n    /* background: #f2f2f2; */\n    position: absolute;\n    z-index: 1;\n    left: 10px;}\n.page_2{ box-shadow: 0 2px 9px 2px rgba(0,0,0,0.4); position: relative; float: none; display: table-cell;  height:100vh; width: 100vw !important; background-position: fixed; background-size: cover !important}\n\n.top-head .mid-width:nth-child(1){width:100%;float:left; font-family:montserratlight !important; text-align: center;}\n.top-head .mid-width:nth-child(2){width:30%;float:left; font-family:montserratlight !important;  text-align: left;}\n.result-small-section p:nth-child(1){ font-family:montserratlight !important; font-size:5.4vmin; line-height: 1.5em;}\n.result-small-section p:nth-child(2){ font-family:montserratregular !important;  font-size:2.2vmin; text-transform: uppercase; opacity: 0.8;}\n.result-small-section p:nth-child(3){ font-family:montserratlight !important;font-size:2.4vmin; opacity: 0.8;}\n.result-small-section p:nth-child(n+4){ font-family:montserratlight !important;font-size:2.4vmin; opacity: 0.8;}\n\n\n.result-centre-outer{margin:3%; padding:0 4%; padding-bottom: 2%; float: left; width:94%; background: #f7da64 !important; display:inline-block; box-shadow:3px 3px 50px 5px rgba(0,0,0,0.6);  margin-bottom: 0px !important;}\n.result-centre-outer .mid-width{ width:100%; text-align: center;  font-family: montserratlight; margin-top: 1%; margin-bottom: 1%; min-height: 52px;}\n.result-mid .result-full-section:only-child {\n    float: none;\n}\n.result-centre-outer .result-small-section{ background: #fff; }\n.result-centre-outer .mid-width p{ font-family: montserratlight;  font-size:3.6vmin; line-height: 1.5em; padding-top:5px; margin:0; }\n.leadform-outer{background: #fff; float: left; width:100%;padding-bottom:2%; margin-bottom:5px;  }\n\n.result-mid{ width: 100%;display: table;text-align: center; background: #fff;}\n.result-full-section{width:100%;display:table-cell;vertical-align:middle;text-align:center; }\n.share-set{ float: right; width:30%; min-height: 52px;}\n.result-comm{  float: left; width:100%; }\n\n\n/*Result Section Style end*/\ninput[type=range]{-webkit-appearance:none;border:1px solid white;width:100%;}\ninput[type=range]::-webkit-slider-runnable-track{width:100%;height:5px;background:#ddd;border:none;border-radius:3px;}\ninput[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:none;height:16px;width:16px;border-radius:50%;background:#f7da64;margin-top:-4px;}\n.abc{display:none;background:#666;width:20px;height:20px;}\ninput[type=range]::-webkit-slider-thumb:hover{background:#ccc;}\ninput[type=range]:focus{outline:none;}\ninput[type=range]:focus::-webkit-slider-runnable-track{background:#ccc;}\ninput[type=range]::-moz-range-track{width:100%;height:5px;background:#ddd;border:none;border-radius:3px;}\ninput[type=range]::-moz-range-thumb{border:none;height:16px;width:16px;border-radius:50%;background:#f7da64;}\n\n/*hide the outline behind the border*/\ninput[type=range]:-moz-focusring{outline:1px solid white;outline-offset:-1px;}\ninput[type=range]::-ms-track{width:100%;height:5px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent;}\ninput[type=range]::-ms-fill-lower{background:#777;border-radius:10px;}\ninput[type=range]::-ms-fill-upper{background:#ddd;border-radius:10px;}\ninput[type=range]::-ms-thumb{border:none;height:16px;width:16px;border-radius:50%;background:#f7da64;}\ninput[type=range]:focus::-ms-fill-lower{background:#888;}\ninput[type=range]:focus::-ms-fill-upper{background:#ccc;}\n.range-slider .slider-min{width:2%;float:left;padding-top:8px;color:#f7da64;}\n.range-slider .well1{width:100%;float:left;}\n.range-slider .slider-max{width:2%;float:right;padding-top:8px;color:#f7da64;}\n.tip{position:absolute;border:1px solid black;padding:4px;}\n.requiredAsteric{color:#fa555c;margin:0!important; padding-right:2px !important;}\n\nselect{color:black;}\n.choice option{color:black;}\n.select-empty{color:gray!important;}\n\n\n.range-slider .irs-slider {top: 29px;width: 20px; height: 20px;}\n.range-slider .irs-bar-edge {border: 1px solid #01a098; border-right: 0; background: #f7da64;}\n.range-slider .irs-bar {border-top: 1px solid #01a098;border-bottom: 1px solid #01a098; background: #f7da64;}\n.range-slider .irs-single { background: #f7da64; font-family: montserratlight; border-radius:8px !important; padding: 1px 14px  !important;}\n.range-slider .irs-min, .irs-max{font-family: montserratregular; }\n\n.question-section-outer .question-section .container-temp { width:100%;}\n.question-section-outer .question-section .container-temp .prime-action {margin-bottom: 0; margin-top: 15px;}\n.landing-responsive{ width:100%; float: left;}\n\n.right-section .internal-sec.slimscroll{ height:92vh !important;  padding-bottom:20px;}\n.right-section .slimScrollDiv{height:92vh !important; padding-bottom:20px;}\n\n\n\n\n/*Questions Header css  */\n.questions-header header {background: #161a29;float: left;width: 100%;padding: 0;}\n.questions-header header .p-right0 {padding-right: 0;}\n.questions-header header .logo { float: left; padding:6px 15px;}\n.questions-header header .right-sec {float: left; background: #f7da64; min-height: 70px;padding: 13px 10px 10px 2%; position: absolute;right:0;}\n.questions-header header .right-sec i {font-size: 20px; color: #012435;position: absolute;left: -76px; z-index: 9;}\n.questions-header header .right-sec p {float: left;font-size: 11px;color: #012435; padding-left: 26px;font-family: montserratregular;margin-bottom: 5px;margin-top: 0;}\n.questions-header header .right-sec span {float: left;font-size: 20px;color: #012435;font-family: montserratregular;padding-left: 5px; width:100%;}\n.que-fixed {position: fixed; top: 0; width: 100%; z-index: 99;}\n/*Questions Header css  end*/\n.section-set{height: 100vh; padding-top:2%;}\n.margin-none{ margin: 0 !important;}\n\n.disc-set{  float: left; width:100%; text-align: left; padding: 8px;}\n\n/* new changes sahil */\n/*.page_0.w100{ background: #d9dede;}\n.page_1.w100{background: #d9dede; }*/\n.editor-page-divider{box-shadow: 0 2px 9px 2px rgba(0,0,0,0.4); background: #d9dede;  margin-bottom: 35px;}\n.left-section .btn.prime-action.next-step.sliding-next{ margin: 10% 0} \n.top-fix-bar{ background: #012435; min-height: 70px;}\n\n#drawerIframe .landing-page-mid { height: 100vh; }\n#drawerIframe .main-bg{ height: 100vh;}\n.lead-heading-temp1{\n    /*background: rgba(0, 0, 0, 0.05);*/\n    padding: 20px 30px;\n    text-align: left;\n    width: 98%;\n    padding-bottom: 0; font-size: 18px; text-align: center;\n}\n\n\n/*color style css*/\n\n.cp1 .check-comp .control input:checked ~ .control__indicator{background:#f3d455;} \n.cp1 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #f3d455;}\n.cp1 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#f3d455;}\n.cp1 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#f3d455;}\n.cp1 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #f3d455;}\n.cp1 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp1 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp1 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#f3d455;}\n.cp1 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp1 .check-comp .control--radio .control__indicator.icon-set i{color:#f3d455;}\n.cp1 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f3d455;border:3px solid #fff;}\n.cp1 .range-slider .irs-bar-edge {border: 1px solid #f3d455; border-right: 0; background: #f3d455;}\n.cp1 .range-slider .irs-bar {border-top: 1px solid #f3d455;border-bottom: 1px solid #f3d455; background: #f3d455;}\n.cp1 .range-slider .irs-single { background: #f3d455; font-family: montserratregular;}\n.cp1 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.cp1 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\n.cp1 .select .selectize-dropdown .active{background-color:#f3d455;color:#ffffff;}\n.cp1 .left-section .result-full-section{background: #f3d455 !important}\n.cp1 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(247, 218, 100);font-family: montserratbold; float:left; width:100%; text-align: center; margin-bottom: 20px;}\n.cp1 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(247, 218, 100, 0.8); font-family: montserratregular; padding:30px; padding-top: 0px; float:left; width:100%; text-align: center;}\n/*.cp1 .btn.prime-action.focus,.cp1 .btn.prime-action:focus,.cp1 .btn.prime-action:hover{color:#28324e;text-decoration:none;background:#f7da64;}*/\n.cp1 .top-fix-bar{ background: #012435; min-height: 70px; position:relative;}\n.cp1 .questions{ background: #d9dede;}\n.cp1 .questions .question-section-outer .prime-action{ background:#f3d455 !important; border:2px solid #e6c746 !important; }\n.cp1 .result-centre-outer {margin:3% !important;padding: 0 4% ; float:left; width: 94%;background: #f7da64 !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6);}\n.cp1 .prime-action{ background:#f3d455 !important; border:2px solid #e6c746 !important; color:#012435 !important; }\n.cp1 .leadform-outer .prime-action { background:#012435 !important; border:2px solid #012435 !important; color:#fff !important;}\n.cp1 .leadform-outer .prime-action:hover { background:#012435 !important; border:2px solid #012435 !important; color:#fff !important;}\n.cp1 .landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #f7da64 !important;color:#f7da64;font-family:montserratregular;font-size:14px!important;}\n.cp1 .page_0.editor-page-divider { background: #012435; }\n.cp1 .landing-page-mid {background: rgba(1,36,53,0.45);}\n.cp1 .landing-page-mid ::-webkit-input-placeholder{color:#f3d455 !important;}\n.cp1 .landing-page-mid ::-webkit-input-placeholder{color:#f3d455 !important;}\n.cp1 .landing-page-mid :-moz-placeholder { /* Firefox 18- */   color: #f3d455 !important;  }\n.cp1 .landing-page-mid ::-moz-placeholder {  /* Firefox 19+ */ color: #f3d455 !important;  }\n.cp1 .landing-page-mid :-ms-input-placeholder {color: #f3d455 !important;}\n.cp1 .questions-header header .right-sec{ background:#f3d455 !important }\n.cp1 .redo-link ul li{ background: #012535;  }\n.cp1 .result-centre-outer .mid-width p{color: #fff; margin:0 !important;}\n.cp1 .page_2{ background: #012535; }\n.cp1 .page_0.main-bg{ background-color: #012435 !important;}\n.cp1 .result-overlay{background: rgba(1,36,53,0.45); height: 100vh; float: none; width: 100vw !important; display: table-cell; vertical-align: middle;  }\n\n\n\n\n\n.cp2 .check-comp .control input:checked ~ .control__indicator{background:#EF2158 ;} \n.cp2 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #EF2158 ;}\n.cp2 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#EF2158 ;}\n.cp2 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#EF2158 ;}\n.cp2 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #EF2158 ;}\n.cp2 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp2 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp2 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#EF2158 ;}\n.cp2 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp2 .check-comp .control--radio .control__indicator.icon-set i{color:#EF2158 ;}\n.cp2 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#EF2158 ;border:3px solid #fff;}\n.cp2 .range-slider .irs-bar-edge {border: 1px solid #EF2158 ; border-right: 0; background: #EF2158 ;}\n.cp2 .range-slider .irs-bar {border-top: 1px solid #EF2158 ;border-bottom: 1px solid #EF2158 ; background: #EF2158 ;}\n.cp2 .range-slider .irs-single { background: #EF2158 ; font-family: montserratregular;}\n.cp2 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.cp2 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#EF2158 ;bottom:18px}\n.cp2 .select .selectize-dropdown .active{background-color:#EF2158 ;color:#ffffff;}\n.cp2 .left-section .result-full-section{background: #EF2158  !important}\n.cp2 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(254, 255, 255); font-family: montserratbold; float:left; width:100%; text-align: center; margin-bottom: 20px;}\n.cp2 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(254, 255, 255, 0.8); font-family: montserratregular; padding:30px;  padding-top: 0px; float:left; width:100%; text-align: center;}.cp2 .btn.prime-action.focus,.cp2 .btn.prime-action:focus,.cp2 .btn.prime-action:hover{text-decoration:none;background:#404948;}\n.cp2 .top-fix-bar{ background: #404948; min-height: 70px; position: relative;}\n.cp2 .questions{ background: #d9dede;}\n.cp2 .questions .question-section-outer .prime-action{ background:#EF2158  !important; border:2px solid #EF2158  !important; }\n.cp2 .result-centre-outer {margin:3% !important;  padding: 0 4% ; float:left; width: 94%;background: #EF2158  !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0px !important;}\n.cp2 .prime-action{ background:#EF2158 !important; border:2px solid #EF2158  !important; color:#ffffff; }\n.cp2 .leadform-outer .prime-action { background:#404948 !important; border:2px solid #404948 !important; color:#fff;}\n.cp2 .leadform-outer .prime-action:hover { background:#404948 !important; border:2px solid #404948 !important; color:#fff;}\n.cp2 .page_0.editor-page-divider { background: #404948; }\n.cp2 .landing-page-mid {background: rgba(64,73,72,0.45);}\n.cp2 .questions-header header .right-sec{ background:#EF2158 !important }\n.cp2 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\n.cp2 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\n.cp2 .landing-page-mid :-moz-placeholder { /* Firefox 18- */   color: #c4c4c6 !important;  }\n.cp2 .landing-page-mid ::-moz-placeholder {  /* Firefox 19+ */ color: #c4c4c6 !important;  }\n.cp2 .landing-page-mid :-ms-input-placeholder {color: #c4c4c6 !important;}\n.cp2 .redo-link ul li{ background: #404948;  }\n.cp2 .result-centre-outer .mid-width p{color: #fff;  margin:0 !important}\n.cp2 .bottom-section{ color:#fff}\n.cp2 .share-link ul li a{ color:#fff}\n.cp2 .page_2{ background: #404948; }\n.cp2 .page_0.main-bg{ background-color: #404948 !important;}\n.cp2 .result-overlay{background: rgba(64,73,72,0.45); height: 100vh; float: none; width: 100vw !important; display: table-cell; vertical-align: middle;}\n\n\n\n\n\n.cp3 .check-comp .control input:checked ~ .control__indicator{background:#0079c1;} \n.cp3 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #0079c1;}\n.cp3 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#0079c1;}\n.cp3 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#0079c1;}\n.cp3 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #0079c1;}\n.cp3 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp3 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp3 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#0079c1;}\n.cp3 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp3 .check-comp .control--radio .control__indicator.icon-set i{color:#0079c1;}\n.cp3 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#34bcad;border:3px solid #fff;}\n.cp3 .range-slider .irs-bar-edge {border: 1px solid #0079c1; border-right: 0; background: #0079c1;}\n.cp3 .range-slider .irs-bar {border-top: 1px solid #0079c1;border-bottom: 1px solid #0079c1; background: #0079c1;}\n.cp3 .range-slider .irs-single { background: #0079c1; font-family: montserratregular;}\n.cp3 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.cp3 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#0079c1;bottom:18px}\n.cp3 .select .selectize-dropdown .active{background-color:#0079c1;color:#ffffff;}\n.cp3 .left-section .result-full-section{background: #0079c1 !important}\n.cp3 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(255, 255, 255); font-family: montserratbold; float:left; width:100%; text-align: center; margin-bottom: 20px;}\n.cp3 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(255, 255, 255, 0.8); font-family: montserratregular;  padding:30px; padding-top: 0px; float:left; width:100%; text-align: center;}.cp3 .btn.prime-action.focus,.cp3 .btn.prime-action:focus,.cp3 .btn.prime-action:hover{text-decoration:none;background:#404948;}\n.cp3 .top-fix-bar{ background: #012435; min-height: 70px; position:relative;}\n.cp3 .questions{ background: #d9dede;}\n.cp3 .questions .question-section-outer .prime-action{ background:#0079c1 !important; border:2px solid #0079c1 !important; color: #fff; }\n.cp3 .result-centre-outer {margin: 3% !important; padding: 0 4% ; float:left; width: 94%;background: #0079c1 !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6);}\n.cp3 .prime-action{ background:#0079c1 !important; border:2px solid #0079c1 !important; color: #fff !important; }\n.cp3 .leadform-outer .prime-action { background:#012435 !important; border:none!important; color:#fff !important;}\n.cp3 .leadform-outer .prime-action:hover { background:#012435 !important; border:none !important; color:#fff;}\n.cp3 .page_0.editor-page-divider { background: #012435; }\n.cp3 .landing-page-mid {background: rgba(1,36,53,0.45);}\n.cp3 .result-centre-outer .mid-width p{color: #fff;  margin:0 !important}\n.cp3 .disc-set{ color: rgba(255,255,255,0.8);}\n.cp3 .questions-header header .right-sec{ background:#0079c1 !important }\n.cp3 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\n.cp3 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\n.cp3 .landing-page-mid :-moz-placeholder { /* Firefox 18- */   color: #c4c4c6 !important;  }\n.cp3 .landing-page-mid ::-moz-placeholder {  /* Firefox 19+ */ color: #c4c4c6 !important;  }\n.cp3 .landing-page-mid :-ms-input-placeholder {color: #c4c4c6 !important;}\n.cp3 .redo-link ul li{ background: #012535;  }\n.result-centre-outer .cta-outer .input-section .input-outer span{    float: left; width: 100%;text-align: left;padding-left: 20px;color: #f44336;font-size: 12px;bottom: -1px;position: absolute;z-index: 1; left: -2px;}\n.cp3 .share-link ul li a{ color:#fff}\n.cp3 .page_2{ background: #012435; }\n.cp3 .page_0.main-bg{ background-color: #012435 !important;}\n.cp3 .result-overlay{background: rgba(1,36,53,0.45); height: 100vh; float: none; width: 100vw !important; display: table-cell; vertical-align: middle;}\n\n/*recommendation css*/\n.recom-section{ background: #fff;  float: left; width:100%;}\n.recom-section .left-sec{ display: table; width: 100%; }\n.recom-section .left-outer{display: table-cell; vertical-align: middle; text-align: center; padding:8%;}\n.rec-image-outer{margin: 0 auto; max-width: 350px; max-height: 420px; overflow: hidden; text-align: center; box-shadow: 8px 9px 7px 2px #d1d1d1; min-width: 200px; display: inline-block; }\n.rec-image-outer img{width: 100%; }\n.recom-section .lead-heading-temp1{ background: none; text-align: left; padding-left:0;  color:#666e78; font-size: 16px; padding-top:0;}\n.recom-section .cta-outer .input-section .input-outer {float: left; width: 100%; padding: 10px 0px; background:none; position: relative;}\n.recom-section .container-temp{ text-align: left !important; width:100%;}\n.recom-section .outer-main {display: table; width: 100%;}\n.recom-section .leadform-outer .prime-action { min-width:70%; float: left;}\n.recom-section .leadform-outer .container-temp .prime-action { width:98%; margin-top: 15px;}\n.recom-section .leadform-outer {padding: 0% 12% 0% 3%; float: none; background: none; margin-bottom:0; display: table-cell; vertical-align: middle;}\n.recom-section .leadform-outer h1{ display: inline-block; padding-left:2%; width:100%; word-break: break-word;}\n.recom-section .leadform-outer h4{ display: inline-block; padding-left:2%; width:100%; text-transform: uppercase; margin-bottom: 0px; font-family:montserratregular;  font-size: 16px; }\n.recom-section .leadform-outer h5{ display: inline-block; padding-left:2%; width:100%;  margin-bottom: 8px; color:#666e78; font-family:montserratlight; font-size: 14px; line-height: 24px;}\n.recom-section .w100 .leadform-outer { padding:6%;}\n.recom-section .w100 .leadform-outer h1 { text-align: center; padding:0;}  \n.recom-section .w100 .leadform-outer h5 {text-align: center;padding:0;}\n.recom-section .w100 .lead-heading-temp1{ padding: 20px 30px; text-align: left; width: 98%; padding-bottom: 0; font-size: 16px; text-align: center;}\n.recom-section .w100 .cta-outer .input-section .input-outer {float: left; width: 49%; padding: 15px 30px; position: relative;}\n.recom-section .w100 .leadform-outer .container-temp .prime-action {font-family: montserratregular;font-size: 18px;color: #28324e; margin-top: 30px; margin-bottom: 40px;padding: 10px 60px; border-radius: 0!important;white-space: normal;}\n.recom-section .w100 .container-temp{ text-align: center !important;}\n.recom-section .w100 .leadform-outer .container-temp .prime-action{ width:auto; float: none !important;}\n.recom-section .w100 .leadform-outer .prime-action{ width:auto; float: none !important;}\n.result-centre-outer .recom-section .w100  .cta-outer .input-section .input-outer span{    float: left; width: 100%;text-align: left;padding-left: 20px;color: #f44336;font-size: 12px;bottom: -1px !important;position: absolute;z-index: 1; left: 10px !important;}\n.result-centre-outer .recom-section .cta-outer .input-section .input-outer span{    float: left; width: 100%;text-align: left;padding-left: 20px;color: #f44336;font-size: 12px;bottom: -4px !important;position: absolute;z-index: 1; left: -17px !important;}\n.result-centre-outer .recom-section .cta-outer .input-section .input-outer:nth-last-child(1):nth-child(odd) {float:left;width:100%;position: relative; }\n/*recommendation css end*/\n.selectize-dropdown, .selectize-input, .selectize-input input { color: #666e78;}\n.container-temp .question-section input{color:#666e78}\n\n\n\n.cp4 .check-comp .control input:checked ~ .control__indicator{background:#678D29 ;} \n.cp4 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #678D29 ;}\n.cp4 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#678D29 ;}\n.cp4 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#678D29 ;}\n.cp4 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #678D29 ;}\n.cp4 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp4 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp4 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#678D29 ;}\n.cp4 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp4 .check-comp .control--radio .control__indicator.icon-set i{color:#678D29 ;}\n.cp4 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#678D29 ;border:3px solid #fff;}\n.cp4 .range-slider .irs-bar-edge {border: 1px solid #678D29 ; border-right: 0; background: #678D29 ;}\n.cp4 .range-slider .irs-bar {border-top: 1px solid #678D29 ;border-bottom: 1px solid #678D29 ; background: #678D29 ;}\n.cp4 .range-slider .irs-single { background: #678D29 ; font-family: montserratregular;}\n.cp4 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.cp4 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#678D29 ;bottom:18px}\n.cp4 .select .selectize-dropdown .active{background-color:#678D29 ;color:#ffffff;}\n.cp4 .left-section .result-full-section{background: #678D29  !important}\n.cp4 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(254, 255, 255); font-family: montserratbold; float:left; width:100%; text-align: center; margin-bottom: 20px;}\n.cp4 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(254, 255, 255, 0.8); font-family: montserratregular; padding:30px;  padding-top: 0px; float:left; width:100%; text-align: center;}\n.cp4 .btn.prime-action.focus,.cp4 .btn.prime-action:focus,.cp4 .btn.prime-action:hover{text-decoration:none;background:#404948;}\n.cp4 .top-fix-bar{ background: #09141f; min-height: 70px; position: relative;}\n.cp4 .questions{ background: #d9dede;}\n.cp4 .questions .question-section-outer .prime-action{ background:#678D29  !important; border:2px solid #678D29  !important; }\n.cp4 .result-centre-outer {margin:3% !important;  padding: 0 4% ; float:left; width: 94%;background: #678D29  !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0px !important;}\n.cp4 .prime-action{ background:#678D29 !important; border:2px solid #678D29  !important; color:#ffffff; }\n.cp4 .leadform-outer .prime-action { background:#09141f !important; border:2px solid #09141f !important; color:#fff;}\n.cp4 .leadform-outer .prime-action:hover { background:#09141f !important; border:2px solid #09141f !important; color:#fff;}\n.cp4 .page_0.editor-page-divider { background: #09141f; }\n.cp4 .landing-page-mid {background: rgba(9,20,31,0.45);}\n.cp4 .questions-header header .right-sec{ background:#678D29 !important }\n.cp4 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\n.cp4 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\n.cp4 .landing-page-mid :-moz-placeholder { /* Firefox 18- */   color: #c4c4c6 !important;  }\n.cp4 .landing-page-mid ::-moz-placeholder {  /* Firefox 19+ */ color: #c4c4c6 !important;  }\n.cp4 .landing-page-mid :-ms-input-placeholder {color: #c4c4c6 !important;}\n.cp4 .redo-link ul li{ background: #09141f;  }\n.cp4 .result-centre-outer .mid-width p{color: #fff;  margin:0 !important}\n.cp4 .bottom-section{ color:#fff}\n.cp4 .share-link ul li a{ color:#fff}\n.cp4 .page_2{ background: #09141f; }\n.cp4 .page_0.main-bg{ background-color: #09141f !important;}\n.cp4 .result-overlay{background: rgba(9,20,31,0.45); height: 100vh; float: none; width: 100vw !important; display: table-cell; vertical-align: middle;}\n@media (max-width:775px) {\n\t.cp4 .page_2.w100.result-fixed.mobile-result-sticky{\n\t    background: #09141f !important;\n\t}\n}\n\n\n\n.cp5 .check-comp .control input:checked ~ .control__indicator{background:#17438B ;} \n.cp5 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #17438B ;}\n.cp5 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#17438B ;}\n.cp5 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#17438B ;}\n.cp5 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #17438B ;}\n.cp5 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp5 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp5 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#17438B ;}\n.cp5 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp5 .check-comp .control--radio .control__indicator.icon-set i{color:#17438B ;}\n.cp5 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#17438B ;border:3px solid #fff;}\n.cp5 .range-slider .irs-bar-edge {border: 1px solid #17438B ; border-right: 0; background: #17438B ;}\n.cp5 .range-slider .irs-bar {border-top: 1px solid #17438B ;border-bottom: 1px solid #17438B ; background: #17438B ;}\n.cp5 .range-slider .irs-single { background: #17438B ; font-family: montserratregular;}\n.cp5 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.cp5 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#17438B ;bottom:18px}\n.cp5 .select .selectize-dropdown .active{background-color:#17438B ;color:#ffffff;}\n.cp5 .left-section .result-full-section{background: #17438B  !important}\n.cp5 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(254, 255, 255); font-family: montserratbold; float:left; width:100%; text-align: center; margin-bottom: 20px;}\n.cp5 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(254, 255, 255, 0.8); font-family: montserratregular; padding:30px;  padding-top: 0px; float:left; width:100%; text-align: center;}\n.cp5 .btn.prime-action.focus,.cp5 .btn.prime-action:focus,.cp5 .btn.prime-action:hover{text-decoration:none;background:#404948;}\n.cp5 .top-fix-bar{ background: #09141f; min-height: 70px; position: relative;}\n.cp5 .questions{ background: #d9dede;}\n.cp5 .questions .question-section-outer .prime-action{ background:#17438B  !important; border:2px solid #17438B  !important; }\n.cp5 .result-centre-outer {margin:3% !important;  padding: 0 4% ; float:left; width: 94%;background: #17438B  !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0px !important;}\n.cp5 .prime-action{ background:#17438B !important; border:2px solid #17438B  !important; color:#ffffff; }\n.cp5 .leadform-outer .prime-action { background:#09141f !important; border:2px solid #09141f !important; color:#fff;}\n.cp5 .leadform-outer .prime-action:hover { background:#09141f !important; border:2px solid #09141f !important; color:#fff;}\n.cp5 .page_0.editor-page-divider { background: #09141f; }\n.cp5 .landing-page-mid {background: rgba(9,20,31,0.45);}\n.cp5 .questions-header header .right-sec{ background:#17438B !important }\n.cp5 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\n.cp5 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\n.cp5 .landing-page-mid :-moz-placeholder { /* Firefox 18- */   color: #c4c4c6 !important;  }\n.cp5 .landing-page-mid ::-moz-placeholder {  /* Firefox 19+ */ color: #c4c4c6 !important;  }\n.cp5 .landing-page-mid :-ms-input-placeholder {color: #c4c4c6 !important;}\n.cp5 .redo-link ul li{ background: #09141f;  }\n.cp5 .result-centre-outer .mid-width p{color: #fff;  margin:0 !important}\n.cp5 .bottom-section{ color:#fff}\n.cp5 .share-link ul li a{ color:#fff}\n.cp5 .page_2{ background: #09141f; }\n.cp5 .page_0.main-bg{ background-color: #09141f !important;}\n.cp5 .result-overlay{background: rgba(9,20,31,0.45); height: 100vh; float: none; width: 100vw !important; display: table-cell; vertical-align: middle;}\n@media (max-width:775px) {\n\t.cp5 .page_2.w100.result-fixed.mobile-result-sticky{\n\t    background: #09141f !important;\n\t}\n}\n\n\n.cp6 .check-comp .control input:checked ~ .control__indicator{background:#F15A29 ;} \n.cp6 .check-comp .control__indicator.check-set{left:16px!important;border:2px solid #F15A29 ;}\n.cp6 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#F15A29 ;}\n.cp6 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#F15A29 ;}\n.cp6 .check-comp .control__indicator{position:absolute;top:19px;left:0;height:20px;width:20px;border:3px solid #F15A29 ;}\n.cp6 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp6 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp6 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#F15A29 ;}\n.cp6 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp6 .check-comp .control--radio .control__indicator.icon-set i{color:#F15A29 ;}\n.cp6 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#F15A29 ;border:3px solid #fff;}\n.cp6 .range-slider .irs-bar-edge {border: 1px solid #F15A29 ; border-right: 0; background: #F15A29 ;}\n.cp6 .range-slider .irs-bar {border-top: 1px solid #F15A29 ;border-bottom: 1px solid #F15A29 ; background: #F15A29 ;}\n.cp6 .range-slider .irs-single { background: #F15A29 ; font-family: montserratregular;}\n.cp6 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.cp6 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#F15A29 ;bottom:18px}\n.cp6 .select .selectize-dropdown .active{background-color:#F15A29 ;color:#ffffff;}\n.cp6 .left-section .result-full-section{background: #F15A29  !important}\n.cp6 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(254, 255, 255); font-family: montserratbold; float:left; width:100%; text-align: center; margin-bottom: 20px;}\n.cp6 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(254, 255, 255, 0.8); font-family: montserratregular; padding:30px;  padding-top: 0px; float:left; width:100%; text-align: center;}\n.cp6 .btn.prime-action.focus,.cp6 .btn.prime-action:focus,.cp6 .btn.prime-action:hover{text-decoration:none;background:#404948;}\n.cp6 .top-fix-bar{ background: #4d4d4f; min-height: 70px; position: relative;}\n.cp6 .questions{ background: #d9dede;}\n.cp6 .questions .question-section-outer .prime-action{ background:#F15A29  !important; border:2px solid #F15A29  !important; }\n.cp6 .result-centre-outer {margin:3% !important;  padding: 0 4% ; float:left; width: 94%;background: #F15A29  !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0px !important;}\n.cp6 .prime-action{ background:#F15A29 !important; border:2px solid #F15A29  !important; color:#ffffff; }\n.cp6 .leadform-outer .prime-action { background:#4d4d4f !important; border:2px solid #4d4d4f !important; color:#fff;}\n.cp6 .leadform-outer .prime-action:hover { background:#4d4d4f !important; border:2px solid #4d4d4f !important; color:#fff;}\n.cp6 .page_0.editor-page-divider { background: #4d4d4f; }\n.cp6 .questions-header header .right-sec{ background:#F15A29 !important }\n.cp6 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\n.cp6 .landing-page-mid ::-webkit-input-placeholder{color:#c4c4c6 !important;}\n.cp6 .landing-page-mid :-moz-placeholder { /* Firefox 18- */   color: #c4c4c6 !important;  }\n.cp6 .landing-page-mid ::-moz-placeholder {  /* Firefox 19+ */ color: #c4c4c6 !important;  }\n.cp6 .landing-page-mid :-ms-input-placeholder {color: #c4c4c6 !important;}\n.cp6 .redo-link ul li{ background: #4d4d4f;  }\n.cp6 .result-centre-outer .mid-width p{color: #fff;  margin:0 !important}\n.cp6 .bottom-section{ color:#fff}\n.cp6 .share-link ul li a{ color:#fff}\n.cp6 .page_2{ background: #4d4d4f; }\n.cp6 .page_0.main-bg{ background-color: #4d4d4f !important;}\n.cp6 .result-overlay{background: rgba(77,77,79,0.45); height: 100vh; float: none; width: 100vw !important; display: table-cell; vertical-align: middle;}\n@media (max-width:775px) {\n\t.cp6 .page_2.w100.result-fixed.mobile-result-sticky{\n\t    background: #4d4d4f !important;\n\t}\n}\n\n.result-centre-outer.recommendation-outer .mid-width {margin-top: 0;  margin-bottom: 0;   min-height: 55px;}\n.result-centre-outer.recommendation-outer .mid-width p{ padding-top:8px;}\n"

/***/ },

/***/ 866:
/***/ function(module, exports) {

module.exports = "/*!\n * Datepicker for Bootstrap v1.6.1 (https://github.com/eternicode/bootstrap-datepicker)\n *\n * Copyright 2012 Stefan Petre\n * Improvements by Andrew Rowls\n * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)\n */\n.datepicker{padding:4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;direction:ltr}.datepicker-inline{width:220px}.datepicker.datepicker-rtl{direction:rtl}.datepicker.datepicker-rtl table tr td span{float:right}.datepicker-dropdown{top:0;left:0}.datepicker-dropdown:before{content:'';display:inline-block;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #999;border-top:0;border-bottom-color:rgba(0,0,0,.2);position:absolute}.datepicker-dropdown:after{content:'';display:inline-block;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;border-top:0;position:absolute}.datepicker-dropdown.datepicker-orient-left:before{left:6px}.datepicker-dropdown.datepicker-orient-left:after{left:7px}.datepicker-dropdown.datepicker-orient-right:before{right:6px}.datepicker-dropdown.datepicker-orient-right:after{right:7px}.datepicker-dropdown.datepicker-orient-bottom:before{top:-7px}.datepicker-dropdown.datepicker-orient-bottom:after{top:-6px}.datepicker-dropdown.datepicker-orient-top:before{bottom:-7px;border-bottom:0;border-top:7px solid #999}.datepicker-dropdown.datepicker-orient-top:after{bottom:-6px;border-bottom:0;border-top:6px solid #fff}.datepicker>div{display:none}.datepicker table{margin:0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.datepicker td,.datepicker th{text-align:center;width:20px;height:20px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:none}.table-striped .datepicker table tr td,.table-striped .datepicker table tr th{background-color:transparent}.datepicker table tr td.day.focused,.datepicker table tr td.day:hover{background:#eee;cursor:pointer}.datepicker table tr td.new,.datepicker table tr td.old{color:#999}.datepicker table tr td.disabled,.datepicker table tr td.disabled:hover{background:0 0;color:#999;cursor:default}.datepicker table tr td.highlighted{background:#d9edf7;border-radius:0}.datepicker table tr td.today,.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled:hover,.datepicker table tr td.today:hover{background-color:#fde19a;background-image:-moz-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-ms-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-webkit-gradient(linear,0 0,0 100%,from(#fdd49a),to(#fdf59a));background-image:-webkit-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:-o-linear-gradient(to bottom,#fdd49a,#fdf59a);background-image:linear-gradient(to bottom,#fdd49a,#fdf59a);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fdd49a', endColorstr='#fdf59a', GradientType=0);border-color:#fdf59a #fdf59a #fbed50;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#000}.datepicker table tr td.today.active,.datepicker table tr td.today.disabled,.datepicker table tr td.today.disabled.active,.datepicker table tr td.today.disabled.disabled,.datepicker table tr td.today.disabled:active,.datepicker table tr td.today.disabled:hover,.datepicker table tr td.today.disabled:hover.active,.datepicker table tr td.today.disabled:hover.disabled,.datepicker table tr td.today.disabled:hover:active,.datepicker table tr td.today.disabled:hover:hover,.datepicker table tr td.today.disabled:hover[disabled],.datepicker table tr td.today.disabled[disabled],.datepicker table tr td.today:active,.datepicker table tr td.today:hover,.datepicker table tr td.today:hover.active,.datepicker table tr td.today:hover.disabled,.datepicker table tr td.today:hover:active,.datepicker table tr td.today:hover:hover,.datepicker table tr td.today:hover[disabled],.datepicker table tr td.today[disabled]{background-color:#fdf59a}.datepicker table tr td.today.active,.datepicker table tr td.today.disabled.active,.datepicker table tr td.today.disabled:active,.datepicker table tr td.today.disabled:hover.active,.datepicker table tr td.today.disabled:hover:active,.datepicker table tr td.today:active,.datepicker table tr td.today:hover.active,.datepicker table tr td.today:hover:active{background-color:#fbf069\\9}.datepicker table tr td.today:hover:hover{color:#000}.datepicker table tr td.today.active:hover{color:#fff}.datepicker table tr td.range,.datepicker table tr td.range.disabled,.datepicker table tr td.range.disabled:hover,.datepicker table tr td.range:hover{background:#eee;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.datepicker table tr td.range.today,.datepicker table tr td.range.today.disabled,.datepicker table tr td.range.today.disabled:hover,.datepicker table tr td.range.today:hover{background-color:#f3d17a;background-image:-moz-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-ms-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-webkit-gradient(linear,0 0,0 100%,from(#f3c17a),to(#f3e97a));background-image:-webkit-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:-o-linear-gradient(to bottom,#f3c17a,#f3e97a);background-image:linear-gradient(to bottom,#f3c17a,#f3e97a);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f3c17a', endColorstr='#f3e97a', GradientType=0);border-color:#f3e97a #f3e97a #edde34;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.datepicker table tr td.range.today.active,.datepicker table tr td.range.today.disabled,.datepicker table tr td.range.today.disabled.active,.datepicker table tr td.range.today.disabled.disabled,.datepicker table tr td.range.today.disabled:active,.datepicker table tr td.range.today.disabled:hover,.datepicker table tr td.range.today.disabled:hover.active,.datepicker table tr td.range.today.disabled:hover.disabled,.datepicker table tr td.range.today.disabled:hover:active,.datepicker table tr td.range.today.disabled:hover:hover,.datepicker table tr td.range.today.disabled:hover[disabled],.datepicker table tr td.range.today.disabled[disabled],.datepicker table tr td.range.today:active,.datepicker table tr td.range.today:hover,.datepicker table tr td.range.today:hover.active,.datepicker table tr td.range.today:hover.disabled,.datepicker table tr td.range.today:hover:active,.datepicker table tr td.range.today:hover:hover,.datepicker table tr td.range.today:hover[disabled],.datepicker table tr td.range.today[disabled]{background-color:#f3e97a}.datepicker table tr td.range.today.active,.datepicker table tr td.range.today.disabled.active,.datepicker table tr td.range.today.disabled:active,.datepicker table tr td.range.today.disabled:hover.active,.datepicker table tr td.range.today.disabled:hover:active,.datepicker table tr td.range.today:active,.datepicker table tr td.range.today:hover.active,.datepicker table tr td.range.today:hover:active{background-color:#efe24b\\9}.datepicker table tr td.selected,.datepicker table tr td.selected.disabled,.datepicker table tr td.selected.disabled:hover,.datepicker table tr td.selected:hover{background-color:#9e9e9e;background-image:-moz-linear-gradient(to bottom,#b3b3b3,grey);background-image:-ms-linear-gradient(to bottom,#b3b3b3,grey);background-image:-webkit-gradient(linear,0 0,0 100%,from(#b3b3b3),to(grey));background-image:-webkit-linear-gradient(to bottom,#b3b3b3,grey);background-image:-o-linear-gradient(to bottom,#b3b3b3,grey);background-image:linear-gradient(to bottom,#b3b3b3,grey);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#b3b3b3', endColorstr='#808080', GradientType=0);border-color:grey grey #595959;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td.selected.active,.datepicker table tr td.selected.disabled,.datepicker table tr td.selected.disabled.active,.datepicker table tr td.selected.disabled.disabled,.datepicker table tr td.selected.disabled:active,.datepicker table tr td.selected.disabled:hover,.datepicker table tr td.selected.disabled:hover.active,.datepicker table tr td.selected.disabled:hover.disabled,.datepicker table tr td.selected.disabled:hover:active,.datepicker table tr td.selected.disabled:hover:hover,.datepicker table tr td.selected.disabled:hover[disabled],.datepicker table tr td.selected.disabled[disabled],.datepicker table tr td.selected:active,.datepicker table tr td.selected:hover,.datepicker table tr td.selected:hover.active,.datepicker table tr td.selected:hover.disabled,.datepicker table tr td.selected:hover:active,.datepicker table tr td.selected:hover:hover,.datepicker table tr td.selected:hover[disabled],.datepicker table tr td.selected[disabled]{background-color:grey}.datepicker table tr td.selected.active,.datepicker table tr td.selected.disabled.active,.datepicker table tr td.selected.disabled:active,.datepicker table tr td.selected.disabled:hover.active,.datepicker table tr td.selected.disabled:hover:active,.datepicker table tr td.selected:active,.datepicker table tr td.selected:hover.active,.datepicker table tr td.selected:hover:active{background-color:#666\\9}.datepicker table tr td.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active:hover{background-color:#006dcc;background-image:-moz-linear-gradient(to bottom,#08c,#04c);background-image:-ms-linear-gradient(to bottom,#08c,#04c);background-image:-webkit-gradient(linear,0 0,0 100%,from(#08c),to(#04c));background-image:-webkit-linear-gradient(to bottom,#08c,#04c);background-image:-o-linear-gradient(to bottom,#08c,#04c);background-image:linear-gradient(to bottom,#08c,#04c);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);border-color:#04c #04c #002a80;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td.active.active,.datepicker table tr td.active.disabled,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled.disabled,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled:hover,.datepicker table tr td.active.disabled:hover.active,.datepicker table tr td.active.disabled:hover.disabled,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active.disabled:hover:hover,.datepicker table tr td.active.disabled:hover[disabled],.datepicker table tr td.active.disabled[disabled],.datepicker table tr td.active:active,.datepicker table tr td.active:hover,.datepicker table tr td.active:hover.active,.datepicker table tr td.active:hover.disabled,.datepicker table tr td.active:hover:active,.datepicker table tr td.active:hover:hover,.datepicker table tr td.active:hover[disabled],.datepicker table tr td.active[disabled]{background-color:#04c}.datepicker table tr td.active.active,.datepicker table tr td.active.disabled.active,.datepicker table tr td.active.disabled:active,.datepicker table tr td.active.disabled:hover.active,.datepicker table tr td.active.disabled:hover:active,.datepicker table tr td.active:active,.datepicker table tr td.active:hover.active,.datepicker table tr td.active:hover:active{background-color:#039\\9}.datepicker table tr td span{display:block;width:23%;height:54px;line-height:54px;float:left;margin:1%;cursor:pointer;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.datepicker table tr td span.focused,.datepicker table tr td span:hover{background:#eee}.datepicker table tr td span.disabled,.datepicker table tr td span.disabled:hover{background:0 0;color:#999;cursor:default}.datepicker table tr td span.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active:hover{background-color:#006dcc;background-image:-moz-linear-gradient(to bottom,#08c,#04c);background-image:-ms-linear-gradient(to bottom,#08c,#04c);background-image:-webkit-gradient(linear,0 0,0 100%,from(#08c),to(#04c));background-image:-webkit-linear-gradient(to bottom,#08c,#04c);background-image:-o-linear-gradient(to bottom,#08c,#04c);background-image:linear-gradient(to bottom,#08c,#04c);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);border-color:#04c #04c #002a80;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,.25)}.datepicker table tr td span.active.active,.datepicker table tr td span.active.disabled,.datepicker table tr td span.active.disabled.active,.datepicker table tr td span.active.disabled.disabled,.datepicker table tr td span.active.disabled:active,.datepicker table tr td span.active.disabled:hover,.datepicker table tr td span.active.disabled:hover.active,.datepicker table tr td span.active.disabled:hover.disabled,.datepicker table tr td span.active.disabled:hover:active,.datepicker table tr td span.active.disabled:hover:hover,.datepicker table tr td span.active.disabled:hover[disabled],.datepicker table tr td span.active.disabled[disabled],.datepicker table tr td span.active:active,.datepicker table tr td span.active:hover,.datepicker table tr td span.active:hover.active,.datepicker table tr td span.active:hover.disabled,.datepicker table tr td span.active:hover:active,.datepicker table tr td span.active:hover:hover,.datepicker table tr td span.active:hover[disabled],.datepicker table tr td span.active[disabled]{background-color:#04c}.datepicker table tr td span.active.active,.datepicker table tr td span.active.disabled.active,.datepicker table tr td span.active.disabled:active,.datepicker table tr td span.active.disabled:hover.active,.datepicker table tr td span.active.disabled:hover:active,.datepicker table tr td span.active:active,.datepicker table tr td span.active:hover.active,.datepicker table tr td span.active:hover:active{background-color:#039\\9}.datepicker table tr td span.new,.datepicker table tr td span.old{color:#999}.datepicker .datepicker-switch{width:145px}.datepicker .datepicker-switch,.datepicker .next,.datepicker .prev,.datepicker tfoot tr th{cursor:pointer}.datepicker .datepicker-switch:hover,.datepicker .next:hover,.datepicker .prev:hover,.datepicker tfoot tr th:hover{background:#eee}.datepicker .cw{font-size:10px;width:12px;padding:0 2px 0 5px;vertical-align:middle}.input-append.date .add-on,.input-prepend.date .add-on{cursor:pointer}.input-append.date .add-on i,.input-prepend.date .add-on i{margin-top:3px}.input-daterange input{text-align:center}.input-daterange input:first-child{-webkit-border-radius:3px 0 0 3px;-moz-border-radius:3px 0 0 3px;border-radius:3px 0 0 3px}.input-daterange input:last-child{-webkit-border-radius:0 3px 3px 0;-moz-border-radius:0 3px 3px 0;border-radius:0 3px 3px 0}.input-daterange .add-on{display:inline-block;width:auto;min-width:16px;height:18px;padding:4px 5px;font-weight:400;line-height:18px;text-align:center;text-shadow:0 1px 0 #fff;vertical-align:middle;background-color:#eee;border:1px solid #ccc;margin-left:-5px;margin-right:-5px}\n/*# sourceMappingURL=bootstrap-datepicker.min.css.map */"

/***/ },

/***/ 867:
/***/ function(module, exports) {

module.exports = "/*! =======================================================\n                      VERSION  7.1.1              \n========================================================= */\n/*! =========================================================\n * bootstrap-slider.js\n *\n * Maintainers:\n *\t\tKyle Kemp\n *\t\t\t- Twitter: @seiyria\n *\t\t\t- Github:  seiyria\n *\t\tRohit Kalkur\n *\t\t\t- Twitter: @Rovolutionary\n *\t\t\t- Github:  rovolution\n *\n * =========================================================\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ========================================================= */.slider{display:inline-block;vertical-align:middle;position:relative}.slider.slider-horizontal{width:210px;height:20px}.slider.slider-horizontal .slider-track{height:10px;width:100%;margin-top:-5px;top:50%;left:0}.slider.slider-horizontal .slider-selection,.slider.slider-horizontal .slider-track-low,.slider.slider-horizontal .slider-track-high{height:100%;top:0;bottom:0}.slider.slider-horizontal .slider-tick,.slider.slider-horizontal .slider-handle{margin-left:-10px;margin-top:-5px}.slider.slider-horizontal .slider-tick.triangle,.slider.slider-horizontal .slider-handle.triangle{border-width:0 10px 10px 10px;width:0;height:0;border-bottom-color:#0480be;margin-top:0}.slider.slider-horizontal .slider-tick-label-container{white-space:nowrap;margin-top:20px}.slider.slider-horizontal .slider-tick-label-container .slider-tick-label{padding-top:4px;display:inline-block;text-align:center}.slider.slider-vertical{height:210px;width:20px}.slider.slider-vertical .slider-track{width:10px;height:100%;margin-left:-5px;left:50%;top:0}.slider.slider-vertical .slider-selection{width:100%;left:0;top:0;bottom:0}.slider.slider-vertical .slider-track-low,.slider.slider-vertical .slider-track-high{width:100%;left:0;right:0}.slider.slider-vertical .slider-tick,.slider.slider-vertical .slider-handle{margin-left:-5px;margin-top:-10px}.slider.slider-vertical .slider-tick.triangle,.slider.slider-vertical .slider-handle.triangle{border-width:10px 0 10px 10px;width:1px;height:1px;border-left-color:#0480be;margin-left:0}.slider.slider-vertical .slider-tick-label-container{white-space:nowrap}.slider.slider-vertical .slider-tick-label-container .slider-tick-label{padding-left:4px}.slider.slider-disabled .slider-handle{background-image:-webkit-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:-o-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:linear-gradient(to bottom,#dfdfdf 0,#bebebe 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdfdfdf',endColorstr='#ffbebebe',GradientType=0)}.slider.slider-disabled .slider-track{background-image:-webkit-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:-o-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:linear-gradient(to bottom,#e5e5e5 0,#e9e9e9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe5e5e5',endColorstr='#ffe9e9e9',GradientType=0);cursor:not-allowed}.slider input{display:none}.slider .tooltip.top{margin-top:-36px}.slider .tooltip-inner{white-space:nowrap;max-width:none}.slider .hide{display:none}.slider-track{position:absolute;cursor:pointer;background-image:-webkit-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:-o-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:linear-gradient(to bottom,#f5f5f5 0,#f9f9f9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5',endColorstr='#fff9f9f9',GradientType=0);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);border-radius:4px}.slider-selection{position:absolute;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-selection.tick-slider-selection{background-image:-webkit-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:-o-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:linear-gradient(to bottom,#89cdef 0,#81bfde 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef',endColorstr='#ff81bfde',GradientType=0)}.slider-track-low,.slider-track-high{position:absolute;background:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-handle{position:absolute;width:20px;height:20px;background-color:#337ab7;background-image:-webkit-linear-gradient(top,#149bdf 0,#0480be 100%);background-image:-o-linear-gradient(top,#149bdf 0,#0480be 100%);background-image:linear-gradient(to bottom,#149bdf 0,#0480be 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf',endColorstr='#ff0480be',GradientType=0);filter:none;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);border:0 solid transparent}.slider-handle.round{border-radius:50%}.slider-handle.triangle{background:transparent none}.slider-handle.custom{background:transparent none}.slider-handle.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick{position:absolute;width:20px;height:20px;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;filter:none;opacity:.8;border:0 solid transparent}.slider-tick.round{border-radius:50%}.slider-tick.triangle{background:transparent none}.slider-tick.custom{background:transparent none}.slider-tick.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick.in-selection{background-image:-webkit-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:-o-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:linear-gradient(to bottom,#89cdef 0,#81bfde 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef',endColorstr='#ff81bfde',GradientType=0);opacity:1}"

/***/ },

/***/ 868:
/***/ function(module, exports) {

module.exports = "@font-face {\n    font-family: 'montserratregular';\n    src: url('assets/fonts/templateFonts/sound_cloud/montserrat-regular-webfont.eot');\n    }\n\n.mregular-font {\n    font-family: montserratregular;\n}\n\n@font-face {\n    font-family: 'material_iconsregular';\n    src: url('assets/fonts/templateFonts/sound_cloud/materialicons-regular-webfont.woff2') format('woff2'),\n         url('assets/fonts/templateFonts/sound_cloud/materialicons-regular-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url('MaterialIcons-Regular.eot');\n  src: local('Material Icons'),\n       local('materialIcons-Regular'),\n       url('assets/fonts/templateFonts/sound_cloud/materialIcons-Regular.woff2') format('woff2'),\n       url('assets/fonts/templateFonts/sound_cloud/materialIcons-Regular.woff') format('woff'),\n       url('assets/fonts/templateFonts/sound_cloud/materialIcons-Regular.ttf') format('truetype');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n\n@font-face {\n    font-family: \"montserratlight\";\n    font-style: normal;\n    font-weight: normal;\n    src: url(\"assets/fonts/templateFonts/sound_cloud/montserrat-light-webfont.eot\") format(\"embedded-opentype\"), url(\"assets/fonts/templateFonts/sound_cloud/montserrat-light-webfont.woff2\") format(\"woff2\"), url(\"assets/fonts/templateFonts/sound_cloud/montserrat-light-webfont.woff\") format(\"woff\"), url(\"assets/fonts/templateFonts/sound_cloud/montserrat-light-webfont.ttf\") format(\"truetype\");\n}\n\n@font-face {\n    font-family: 'montserrat-bold';\n    src: url('assets/fonts/templateFonts/sound_cloud/montserrat-bold-webfont.eot');\n    src: url('assets/fonts/templateFonts/sound_cloud/montserrat-bold-webfont.eot?#iefix') format('embedded-opentype'),\n         url('assets/fonts/templateFonts/sound_cloud/montserrat-bold-webfont.woff2') format('woff2'),\n         url('assets/fonts/templateFonts/sound_cloud/montserrat-bold-webfont.woff') format('woff'),\n         url('assets/fonts/templateFonts/sound_cloud/montserrat-bold-webfont.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\n@font-face {\n    font-family: 'oxygenregular';\n    src: url('assets/fonts/templateFonts/sound_cloud/oxygen-regular-webfont.eot');\n    src: url('assets/fonts/templateFonts/sound_cloud/oxygen-regular-webfont.eot?#iefix') format('embedded-opentype'),\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-regular-webfont.woff2') format('woff2'),\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-regular-webfont.woff') format('woff'),\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-regular-webfont.ttf') format('truetype'),\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-regular-webfont.svg#oxygenregular') format('svg');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\n\n@font-face {\n    font-family: 'oxygenbold';\n    src: url('assets/fonts/templateFonts/sound_cloud/oxygen-bold-webfont.eot');\n    src: url('assets/fonts/templateFonts/sound_cloud/oxygen-bold-webfont.eot?#iefix') format('embedded-opentype'),\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-bold-webfont.woff2') format('woff2'),\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-bold-webfont.woff') format('woff'),\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-bold-webfont.ttf') format('truetype'),\n         url('assets/fonts/templateFonts/sound_cloud/oxygen-bold-webfont.svg#oxygenbold') format('svg');\n    font-weight: normal;\n    font-style: normal;\n\n}\n"

/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = "@media (max-width:775px) {\n.page_1 { width: 90% !important; margin-left: 40px !important;}\n.page_2.w100.result-fixed { position: relative !important; left: 0px; top: 50px; width: 90%; float: left; margin-top: 0px; margin-left: 40px; -webkit-border-radius:\n         10px;-moz-border-radius: 10px;border-radius: 10px; margin-bottom: 30px;}\n\n.page_2 {\n    position: relative !important;\n    width: 90% !important;\n    left: 0px;\n    top: 50px !important;\n    float: left;\n    margin-top: 0px;\n    margin-left: 40px;\n    border-radius: 10px;\n    margin-bottom: 30px; \n}         \n.redo-link {position: absolute; top: 2.5%; right: 2.5%;}\n.landing-page-mid{  width: 100%; overflow: hidden; padding:0 !important;}\n.page-logo{ display:none;}\n.prime-action{padding: 13px 30px; font-size: 2.3vmin !important;}\n.landing-page-mid .main-heading{font-size:6vmin !important; padding:0 10px;line-height: 1.2em !important;}\n.landing-page-mid .input-section{ width: 92%;}\n.landing-page-mid .input-section .input-outer{ width: 47% !important; margin-left: 10px;}\n.landing-page-mid .input-section input{ margin: 10px 0px !important;}\n.temp2-scrollbar{overflow-y: auto !important; height: auto !important;}\n.page_1.mobile-result-sticky{ margin-bottom: 45px !important;}\n.page_2.w100.mobile-result-sticky{\n    position: fixed !important;\n    bottom: 0 !important;\n    top: initial !important;\n    height: 70px;\n    z-index: 9;\n    margin: 0;\n    padding-top: 5px;\n    padding-bottom: 0;\n    border-radius: 0;\n    background: #413832;\n    width: 100% !important;\n}\n.page_2.w100.result-fixed.mobile-result-sticky{\n    position: fixed !important;\n    bottom: 0 !important;\n    top: initial !important;\n    height: 70px;\n    z-index: 9;\n    margin: 0;\n    padding-top: 5px;\n    padding-bottom: 0;\n    border-radius: 0;\n    background: #413832;\n    width: 100% !important;\n}\n.page_2.w100.mobile-result-sticky .mid-width p{ display: none;}\n.page_2.w100.mobile-result-sticky .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){\n    font-size: 20px;\n    width: 100%;\n    float: left;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    text-align: left !important;\n}\n.page_2.w100.mobile-result-sticky .result-temp2-default-section{ padding-top: 0px;}\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(2){\n    float: left;\n    width: 70%;\n    text-align: left !important;\n    font-family: oxygenbold;\n    color: #fff;\n    font-size: 12px;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(3){\n    display: block;\n    float: left;\n    width: 70%;\n    text-align: left;\n    font-family: oxygenregular;\n    color: #fff;\n    margin-bottom: 0;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){\n    font-size: 20px;\n    width: 30%;\n    float: left;\n    margin-top: 12px;\n    text-align: center;\n    margin-bottom: 20px;\n}\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(2){\n    float: left;\n    width: 70%;\n    text-align: left !important;\n    font-family: oxygenbold;\n    color: #fff;\n    font-size: 12px;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(3){\n    display: block;\n    float: left;\n    width: 70%;\n    text-align: left;\n    font-family: oxygenregular;\n    color: #fff;\n    margin-bottom: 0;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link{\n        font-size: 34px;\n    color: #ce7e48;\n    width: 94%;\n    height: 66px;\n    text-align: right;\n    font-family: oxygenbold;\n    position: absolute;\n    top: 4px;\n    left: 3%;\n    padding-left: 1px;\n    z-index: 99;\n    display: block !important;\n}\n.page_2.w100 .mobile-result-linkAdd{\n    font-size: 14px;\n    color: #ff6600;\n    width: 70%;\n    text-align: left;\n    font-family: oxygenbold;\n    z-index: 99;\n    display: none;\n    visibility: visible !important;\n}\n.page_2.w100 .mobile-result-linkAdd i{\n    font-size: 16px;\n    top: 3px;\n    position: relative;\n}\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){\n    width: 98% !important;\n}\n\n\n\n\n}\n\n@media (max-width:375px) {\nheader .logo { width: 100% !important; text-align: center !important;}\n.page_1 { width: 100% !important; margin-left: 0 !important;  -webkit-border-radius:0 !important;-moz-border-radius: 0 !important;border-radius: 0 !important; margin-bottom:0 !important;overflow: hidden;}\n.page_2.w100.result-fixed {z-index: 9999; position: relative !important; width: 100%; float: left;  margin-left: 0; -webkit-border-radius:0;-moz-border-radius: 0;border-radius: 0 !important; margin-bottom: 0px; overflow: visible;}\n.footer-nav {float: left; width: 100%; text-align: center;}         \n.footer-nav li{ width:100%;}       \n.powered-by {float: left !important; text-align: left !important;margin-top: 2%;}\n.page_2 { position: relative !important; width: 100% !important; float: left; margin-left: 0 !important; margin-bottom: 30px; border-radius: 0!important;}     \n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){\n    width: 100% !important;\n}\n.redo-link { position: absolute; top: 2.5%;  right: 2.5%; z-index: 999 !important;}\n.page_2 .result-full-section .input-section input { width: 100% !important; margin: 8px 0 !important;}\n.result-full-section .input-section .input-outer span{ margin-left: 0 !important;}\n.main-bg header .logo{ padding:28px !important;}\n.main-bg header .logo img{max-width:45% !important; max-height: 40px !important;}\n.landing-page-mid{  width: 100%; overflow: hidden; padding:0 !important}\n/*.landing-page-header .logo img { width:70%;}*/\n.page-logo{ display:none;}\n.redo-link ul li { padding: 2px 6px !important;}\n.redo-link ul li a {  font-size: 12px !important;}\n.page_2 .disc-set{ float: left; width: 100%;}\n.share-set{ z-index: 9999;}\n.page_2  .share-link ul li a{ position: relative; z-index: 9999;}\n\n.page_1{margin-top:0px !important; box-shadow: none !important;}\n.landing-page-mid .input-section {  width: 90% !important; margin: 30px auto 0 0 !important; margin-left: 30px !important;}\n.landing-page-mid .input-section .input-outer{ width: 100% !important; }\n.landing-page-mid .input-section .input-outer input{margin-bottom: 20px !important; margin-left: 10px !important;margin-right: 10px !important;}\n.landing-page-mid .main-heading {font-size: 8vmin !important; line-height: 1.3em !important;margin-top: 30%;}\n.landing-page-mid .sub-heading {font-size: 3vmin !important;line-height: 1.3em !important;}\n.landing-page-mid .prime-action {font-size: 3.5vmin !important;}\n.cp1 .landing-page-mid .sub-heading{font-size: 3vmin !important;line-height: 1.3em !important;}\n.cp2 .landing-page-mid .sub-heading{font-size: 3vmin !important;line-height: 1.3em !important;}\n.cp3 .landing-page-mid .sub-heading{font-size: 3vmin !important;line-height: 1.3em !important;}\n\n\n.temp2-scrollbar{overflow-y: auto !important; height: auto !important;}\n.page_1.mobile-result-sticky{ margin-bottom: 45px !important;}\n.page_2.w100.mobile-result-sticky{\n    position: fixed !important;\n    bottom: 0 !important;\n    top: initial !important;\n    height: 70px;\n    z-index: 9;\n    margin: 0;\n    padding-top: 5px;\n    padding-bottom: 0;\n    border-radius: 0;\n    background: #413832;\n    width: 100% !important;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n.page_2.w100.result-fixed.mobile-result-sticky{\n    position: fixed !important;\n    bottom: 0 !important;\n    top: initial !important;\n    height: 70px;\n    z-index: 9;\n    margin: 0;\n    padding-top: 5px;\n    padding-bottom: 0;\n    border-radius: 0;\n    background: #413832;\n    width: 100% !important;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n.page_2.w100.mobile-result-sticky .mid-width p{ display: none;}\n.page_2.w100.mobile-result-sticky .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){\n    font-size: 16px;\n        width: 100%;\n    float: left;\n    margin-top: 0px;\n}\n.page_2.w100.mobile-result-sticky .result-temp2-default-section{ padding-top: 0px;}\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(2){\n    float: left;\n    width: 70%;\n    text-align: left !important;\n    font-family: oxygenbold;\n    color: #fff;\n    font-size: 12px;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(3){\n    display: block;\n    float: left;\n    width: 70%;\n    text-align: left;\n    font-family: oxygenregular;\n    color: #fff;\n    margin-bottom: 0;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){\n    font-size: 16px;\n    width: 30%;\n    float: left;\n    margin-top: 16px;\n    text-align: center;\n    margin-bottom: 20px;\n}\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(2){\n    float: left;\n    width: 70%;\n    text-align: left !important;\n    font-family: oxygenbold;\n    color: #fff;\n    font-size: 12px;\n    text-transform: uppercase;\n    margin-bottom: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.page_2.w100.mobile-result-sticky .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(3){\n    display: block;\n    float: left;\n    width: 70%;\n    text-align: left;\n    font-family: oxygenregular;\n    color: #fff;\n    margin-bottom: 0;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link{\n        font-size: 24px;\n    color: #ce7e48;\n    font-family: oxygenbold;\n    position: absolute;\n    top: 4px;\n    padding-left: 0px;\n    z-index: 99;\n    display: block !important;\n}\n.page_2.w100 .mobile-result-linkAdd{\n    font-size: 14px;\n    color: #ff6600;\n    width: 70%;\n    text-align: left;\n    font-family: oxygenbold;\n    z-index: 99;\n    display: none;\n}\n.page_2.w100 .mobile-result-linkAdd i{\n    font-size: 16px;\n    top: 3px;\n    position: relative;\n}\n.page_0 .landing-page-mid .input-section .input-outer span { top: 40px !important;}\n.page_0 .landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) {width: 100% !important;}\n\n}\n\n@media (min-width: 1500px ) {\n\n.page_2.result-fixed { min-height: 480px; top: 80px !important;}\n\n}\n@media (min-width: 1200px) and (max-width:1300px) {\n    .page_2 .share-link { width: 100% !important;}\n}\n@media (min-width: 1920px) and (max-width:1920px) {\n    .page_2 .share-link ul li a {font-size: 22px !important;}\n}\n@media (min-width: 1366px) and (max-width:1366px) {\n    .page_2 .share-link ul li a {font-size: 20px !important;}\n}\n@media (min-width: 150px) and (max-width:768px) {\n.page_2{-webkit-border-top-right-radius: 0 !important; -webkit-border-bottom-right-radius: 0 !important;-moz-border-radius-topright:0 !important;-moz-border-radius-bottomright: 0!important; border-top-right-radius: 0 !important; border-bottom-right-radius: 0 !important; border-radius: 0!important;}    \n.page_2.w100.result-fixed {z-index: 999; position: relative !important;}\n.page_2  .share-link{width:auto;z-index: 999;position: relative;}\n.redo-link ul li { padding: 2px 6px;}\n.redo-link ul li a { font-size: 12px;}\n.page_2 .disc-set{ float: left; width: 100%;}\n.share-set{ z-index: 9999;}\n.page_2  .share-link ul li a{ position: relative; z-index: 9999;}\n header .logo { width: 100% !important; text-align: center !important;}\n.page_1 { width: 100% !important; margin-left: 0 !important;  -webkit-border-radius:0 !important;-moz-border-radius: 0 !important;border-radius: 0 !important; margin-bottom:0 !important;overflow: hidden; box-shadow:none !important;}\n.page_2.w100.result-fixed {z-index: 999; position: relative !important; width: 100%; float: left; margin-left: 0; -webkit-border-radius: 0;-moz-border-radius: 0;border-radius: 0!important; margin-bottom: 0px; overflow: visible;}\n.footer-nav {float: left; width: 100%; text-align: center;}         \n.footer-nav li{ width:100%;}       \n.page_2 { position: relative !important; width: 100% !important; float: left; margin-top: -100px !important; margin-left: 0 !important;border-radius: 0!important;margin-bottom: 0 !important;}     \n.redo-link { position: absolute; top: 2.5%;  right: 2.5%; z-index: 999 !important;}\n.page_2 .result-full-section .input-section input { width: 100% !important; margin: 8px 0 !important;}\n.result-full-section .input-section .input-outer span{ margin-left: 0 !important;}\n.main-bg header .logo{ padding:28px !important; padding-top: 10px !important;}\n.main-bg header .logo img{max-width:32% !important; max-height: 40px !important;}\n.landing-page-mid{  width: 100%; overflow: hidden; padding:0% !important;}\n/*.landing-page-header .logo img { width:70%;}*/\n.page-logo{ display:none;}\n.redo-link ul li { padding: 2px 6px !important;}\n.redo-link ul li a {  font-size: 12px !important;}\n.page_2 .disc-set{ float: left; width: 100%;}\n.share-set{ z-index: 9999;}\n.page_2  .share-link ul li a{ position: relative; z-index: 9999;}\n.landing-page-mid .input-section {  width: 90% !important; margin: 0 auto !important; margin-top: 4px !important;}\n.landing-page-mid .input-section .input-outer{ width: 48% !important; margin-left: 5px;}\n.landing-page-mid .input-section .input-outer input{  margin-left: 2% !important; margin-right: 10px !important; padding: 8px; margin-top: 6px !important;margin-bottom: 8px !important; }\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) input{  margin-left: 1% !important; margin-right: 10px !important; padding: 8px; margin-top: 6px !important;margin-bottom: 8px !important; }\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) span{ padding-left: 0;}\n.cp1 .landing-page-mid .input-section .input-outer input{font-size: 2.4vmin !important;}\n.cp2 .landing-page-mid .input-section .input-outer input{font-size: 2.4vmin !important;}\n.cp3 .landing-page-mid .input-section .input-outer input{font-size: 2.4vmin !important;}\n.landing-footer-outer{position:absolute !important;}\n.page_1{margin-top:0px !important;}\n.landing-page-mid .main-heading{margin-top: 6%; margin-bottom: 8px !important; font-size:26px !important; line-height: 1.3em !important; padding:0 6%; }\n.landing-page-mid .sub-heading {font-size: 3.2vmin !important;line-height: 1.3em !important;}\n.landing-page-mid .prime-action {font-size: 3.5vmin !important;  padding: 8px 26px; margin-top: 8px;}\n.landing-page-mid .input-section .input-outer span{top: 42px !important;  left: 2% !important; font-size: 2vmin !important;}\n.powered-by {float: left !important; text-align: center !important; margin-top: 2%;width: 100%;}\n.powered-by span{ font-size: 2vmin !important;}\n.powered-by img {\n    width: 80px !important;\n    padding-top: 0px;\n    padding-bottom: 0px !important;\n}\n\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd) {width: 99% !important;}\n\n}\n@media (min-width: 150px) and (max-width:500px) {\n    .prime-action{\n        font-size: 3.2vmin !important;\n    }\n}\n\n\n\n@media (min-width: 780px) and (max-width:1024px) {\n    .landing-page-mid{\n        padding-bottom: 0px !important;\n        padding-top: 3% !important;\n    }\n    .main-bg header .logo{\n        padding-top: 20px !important;\n        padding-left: 20px !important;\n    }\n    .page-logo{\n        padding-top: 20px !important;\n        padding-left: 20px !important;\n    }\n    .landing-page-header .logo img{\n        max-width: 60% !important;\n    }\n    .landing-page-mid .input-section {\n        margin: 0px auto !important;\n}\n    .page_1{\n        margin-left: 7% !important;\n        width: 50% !important;\n        margin-bottom: 20px !important;\n        margin-top: 20px !important;\n    }\n    .page_2{\n        width: 35% !important;\n    }\n    .page_2 .mid-width p{\n        font-size: 16px !important;\n    }\n    .page_2.result-fixed{\n        width: 36% !important;\n        top: 30px !important;\n    }\n    .temp2-scrollbar{\n        height: 360px !important;\n    }\n}\n@media (min-width: 150px) and (max-width:320px) {\n    .page_2{-webkit-border-top-right-radius: 0 !important;  -webkit-border-bottom-right-radius: 0 !important;-moz-border-radius-topright:0 !important;-moz-border-radius-bottomright: 0!important; border-top-right-radius: 0 !important; border-bottom-right-radius: 0 !important; border-radius: 0 !important; border-radius: 0!important;}\n    .page_2.w100.mobile-result-sticky{ padding-left: 2% !important; padding-right: 2% !important;}\n    .page_2.w100.mobile-result-sticky .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){\n        font-size: 4vmin !important;\n    }\n    .page_2.w100.mobile-result-sticky .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(2){\n        font-size: 3vmin !important;\n    }\n    .page_2.w100.mobile-result-sticky .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(3){\n        font-size: 3vmin !important;\n    }\n    .page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link{\n        bottom: 2% !important;\n        left: 29% !important;\n        font-size: 3vmin !important;\n    }\n    .page_2 .mid-width p{ font-size: 4vmin !important;}\n    .page_2.w100 .mobile-result-linkAdd{ font-size: 3.5vmin;}\n    .page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){\n        font-size: 7vmin !important;\n        margin-bottom: 2% !important;\n    }\n    .page_2 .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(2){\n        font-size: 3.8vmin !important;\n        margin-bottom: 2% !important;\n    }\n    .page_2 .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(3){\n        font-size: 3.5vmin !important;\n        margin-bottom: 2% !important;\n    }\n    .page_2.result-fixed .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(2){\n        font-size: 3.5vmin !important;\n    }\n    .cp1 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){\n        font-size: 3.5vmin !important;\n    }\n    .cp2 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){\n        font-size: 3.5vmin !important;\n    }\n    .cp3 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){\n        font-size: 3.5vmin !important;\n    }\n    .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(3){\n        font-size: 3vmin !important;\n    }\n    .page_2 .btn.prime-action{\n        padding: 3% 6% !important;\n        font-size: 3vmin !important;\n        margin-bottom: 7% !important;\n    }\n    .page_2 .disc-set{ font-size: 3vmin !important;}\n    .page_2.w100.mobile-result-sticky .result-temp2-default-section{ padding-bottom: 11% !important;}\n}\n\n\n"

/***/ },

/***/ 870:
/***/ function(module, exports) {

module.exports = "/**\n * selectize.default.css (v0.12.1) - Default Theme\n * Copyright (c) 2013–2015 Brian Reavis & contributors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this\n * file except in compliance with the License. You may obtain a copy of the License at:\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF\n * ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n *\n * @author Brian Reavis <brian@thirdroute.com>\n */\n.selectize-control.plugin-drag_drop.multi > .selectize-input > div.ui-sortable-placeholder {\n  visibility: visible !important;\n  background: #f2f2f2 !important;\n  background: rgba(0, 0, 0, 0.06) !important;\n  border: 0 none !important;\n  -webkit-box-shadow: inset 0 0 12px 4px #ffffff;\n  box-shadow: inset 0 0 12px 4px #ffffff;\n}\n.selectize-control.plugin-drag_drop .ui-sortable-placeholder::after {\n  content: '!';\n  visibility: hidden;\n}\n.selectize-control.plugin-drag_drop .ui-sortable-helper {\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n.selectize-dropdown-header {\n  position: relative;\n  padding: 5px 8px;\n  border-bottom: 1px solid #d0d0d0;\n  background: #f8f8f8;\n  -webkit-border-radius: 3px 3px 0 0;\n  -moz-border-radius: 3px 3px 0 0;\n  border-radius: 3px 3px 0 0;\n}\n.selectize-dropdown-header-close {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  color: #303030;\n  opacity: 0.4;\n  margin-top: -12px;\n  line-height: 20px;\n  font-size: 20px !important;\n}\n.selectize-dropdown-header-close:hover {\n  color: #000000;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup {\n  border-right: 1px solid #f2f2f2;\n  border-top: 0 none;\n  float: left;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup:last-child {\n  border-right: 0 none;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup:before {\n  display: none;\n}\n.selectize-dropdown.plugin-optgroup_columns .optgroup-header {\n  border-top: 0 none;\n}\n.selectize-control.plugin-remove_button [data-value] {\n  position: relative;\n  padding-right: 24px !important;\n}\n.selectize-control.plugin-remove_button [data-value] .remove {\n  z-index: 1;\n  /* fixes ie bug (see #392) */\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 17px;\n  text-align: center;\n  font-weight: bold;\n  font-size: 12px;\n  color: inherit;\n  text-decoration: none;\n  vertical-align: middle;\n  display: inline-block;\n  padding: 2px 0 0 0;\n  border-left: 1px solid #0073bb;\n  -webkit-border-radius: 0 2px 2px 0;\n  -moz-border-radius: 0 2px 2px 0;\n  border-radius: 0 2px 2px 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.selectize-control.plugin-remove_button [data-value] .remove:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.selectize-control.plugin-remove_button [data-value].active .remove {\n  border-left-color: #00578d;\n}\n.selectize-control.plugin-remove_button .disabled [data-value] .remove:hover {\n  background: none;\n}\n.selectize-control.plugin-remove_button .disabled [data-value] .remove {\n  border-left-color: #aaaaaa;\n}\n.selectize-control {\n  position: relative;\n}\n.selectize-dropdown,\n.selectize-input,\n.selectize-input input {\n  color: #303030;\n  font-family: inherit;\n  font-size: 13px;\n  line-height: 18px;\n  -webkit-font-smoothing: inherit;\n}\n.selectize-input,\n.selectize-control.single .selectize-input.input-active {\n  background: #ffffff;\n  cursor: text;\n  display: inline-block;\n}\n.selectize-input {\n  border: 1px solid #d0d0d0;\n  padding: 8px 8px;\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n}\n.selectize-control.multi .selectize-input.has-items {\n  padding: 5px 8px 2px;\n}\n.selectize-input.full {\n  background-color: #ffffff;\n}\n.selectize-input.disabled,\n.selectize-input.disabled * {\n  cursor: default !important;\n}\n.selectize-input.focus {\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.selectize-input.dropdown-active {\n  -webkit-border-radius: 3px 3px 0 0;\n  -moz-border-radius: 3px 3px 0 0;\n  border-radius: 3px 3px 0 0;\n}\n.selectize-input > * {\n  vertical-align: baseline;\n  display: -moz-inline-stack;\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n}\n.selectize-control.multi .selectize-input > div {\n  cursor: pointer;\n  margin: 0 3px 3px 0;\n  padding: 2px 6px;\n  background: #1da7ee;\n  color: #ffffff;\n  border: 1px solid #0073bb;\n}\n.selectize-control.multi .selectize-input > div.active {\n  background: #92c836;\n  color: #ffffff;\n  border: 1px solid #00578d;\n}\n.selectize-control.multi .selectize-input.disabled > div,\n.selectize-control.multi .selectize-input.disabled > div.active {\n  color: #ffffff;\n  background: #d2d2d2;\n  border: 1px solid #aaaaaa;\n}\n.selectize-input > input {\n  display: inline-block !important;\n  padding: 0 !important;\n  min-height: 0 !important;\n  max-height: none !important;\n  max-width: 100% !important;\n  margin: 0 1px !important;\n  text-indent: 0 !important;\n  border: 0 none !important;\n  background: none !important;\n  line-height: inherit !important;\n  -webkit-user-select: auto !important;\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important;\n}\n.selectize-input > input::-ms-clear {\n  display: none;\n}\n.selectize-input > input:focus {\n  outline: none !important;\n}\n.selectize-input::after {\n  content: ' ';\n  display: block;\n  clear: left;\n}\n.selectize-input.dropdown-active::before {\n  content: ' ';\n  display: block;\n  position: absolute;\n  background: #f0f0f0;\n  height: 1px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.selectize-dropdown {\n  position: absolute;\n  z-index: 10;\n  border: 1px solid #d0d0d0;\n  background: #ffffff;\n  margin: -1px 0 0 0;\n  border-top: 0 none;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-border-radius: 0 0 3px 3px;\n  -moz-border-radius: 0 0 3px 3px;\n  border-radius: 0 0 3px 3px;\n}\n.selectize-dropdown [data-selectable] {\n  cursor: pointer;\n  overflow: hidden;\n}\n.selectize-dropdown [data-selectable] .highlight {\n  background: rgba(125, 168, 208, 0.2);\n  -webkit-border-radius: 1px;\n  -moz-border-radius: 1px;\n  border-radius: 1px;\n}\n.selectize-dropdown [data-selectable],\n.selectize-dropdown .optgroup-header {\n  padding: 5px 8px;\n}\n.selectize-dropdown .optgroup:first-child .optgroup-header {\n  border-top: 0 none;\n}\n.selectize-dropdown .optgroup-header {\n  color: #303030;\n  background: #ffffff;\n  cursor: default;\n}\n.selectize-dropdown .active {\n  background-color: #f5fafd;\n  color: #495c68;\n}\n.selectize-dropdown .active.create {\n  color: #495c68;\n}\n.selectize-dropdown .create {\n  color: rgba(48, 48, 48, 0.5);\n}\n.selectize-dropdown-content {\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 200px;\n}\n.selectize-control.single .selectize-input,\n.selectize-control.single .selectize-input input {\n  cursor: pointer;\n}\n.selectize-control.single .selectize-input.input-active,\n.selectize-control.single .selectize-input.input-active input {\n  cursor: text;\n}\n.selectize-control.single .selectize-input:after {\n  content: ' ';\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  margin-top: -3px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 5px 5px 0 5px;\n  border-color: #808080 transparent transparent transparent;\n}\n.selectize-control.single .selectize-input.dropdown-active:after {\n  margin-top: -4px;\n  border-width: 0 5px 5px 5px;\n  border-color: transparent transparent #808080 transparent;\n}\n.selectize-control.rtl.single .selectize-input:after {\n  left: 15px;\n  right: auto;\n}\n.selectize-control.rtl .selectize-input > input {\n  margin: 0 4px 0 -2px !important;\n}\n.selectize-control .selectize-input.disabled {\n  opacity: 0.5;\n  background-color: #fafafa;\n}\n.selectize-control.multi .selectize-input.has-items {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.selectize-control.multi .selectize-input.disabled [data-value] {\n  color: #999;\n  text-shadow: none;\n  background: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.selectize-control.multi .selectize-input.disabled [data-value],\n.selectize-control.multi .selectize-input.disabled [data-value] .remove {\n  border-color: #e6e6e6;\n}\n.selectize-control.multi .selectize-input.disabled [data-value] .remove {\n  background: none;\n}\n.selectize-control.multi .selectize-input [data-value] {\n  text-shadow: 0 1px 0 rgba(0, 51, 83, 0.3);\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  background-color: #1b9dec;\n  background-image: -moz-linear-gradient(top, #1da7ee, #178ee9);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#1da7ee), to(#178ee9));\n  background-image: -webkit-linear-gradient(top, #1da7ee, #178ee9);\n  background-image: -o-linear-gradient(top, #1da7ee, #178ee9);\n  background-image: linear-gradient(to bottom, #1da7ee, #178ee9);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff1da7ee', endColorstr='#ff178ee9', GradientType=0);\n  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.2),inset 0 1px rgba(255,255,255,0.03);\n  box-shadow: 0 1px 0 rgba(0,0,0,0.2),inset 0 1px rgba(255,255,255,0.03);\n}\n.selectize-control.multi .selectize-input [data-value].active {\n  background-color: #0085d4;\n  background-image: -moz-linear-gradient(top, #008fd8, #0075cf);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#008fd8), to(#0075cf));\n  background-image: -webkit-linear-gradient(top, #008fd8, #0075cf);\n  background-image: -o-linear-gradient(top, #008fd8, #0075cf);\n  background-image: linear-gradient(to bottom, #008fd8, #0075cf);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff008fd8', endColorstr='#ff0075cf', GradientType=0);\n}\n.selectize-control.single .selectize-input {\n  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8);\n  box-shadow: 0 1px 0 rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8);\n  background-color: #f9f9f9;\n  background-image: -moz-linear-gradient(top, #fefefe, #f2f2f2);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fefefe), to(#f2f2f2));\n  background-image: -webkit-linear-gradient(top, #fefefe, #f2f2f2);\n  background-image: -o-linear-gradient(top, #fefefe, #f2f2f2);\n  background-image: linear-gradient(to bottom, #fefefe, #f2f2f2);\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffefefe', endColorstr='#fff2f2f2', GradientType=0);\n}\n.selectize-control.single .selectize-input,\n.selectize-dropdown.single {\n  border-color: #b8b8b8;\n}\n.selectize-dropdown .optgroup-header {\n  padding-top: 7px;\n  font-weight: bold;\n  font-size: 0.85em;\n}\n.selectize-dropdown .optgroup {\n  border-top: 1px solid #f0f0f0;\n}\n.selectize-dropdown .optgroup:first-child {\n  border-top: 0 none;\n}\n"

/***/ },

/***/ 871:
/***/ function(module, exports) {

module.exports = "body {\n    margin: 0;\n    padding: 0;\n    font-size: 14px; background:#f2f2f2;\n    background: url(\"../images/temp-bg1.jpg\") no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;   \n    background-size: cover;\n    width: 100%;\n    height: 100%; \n    position:relative; \n    vertical-align: middle; float: left;\n}\n\n\ninput,\ntextarea.materialize-textarea {\n    background-color: transparent;\n    border: 1px solid #d9dad3;\n    border-radius: 0;\n    outline: none;\n    width: 100%;\n    font-size: 16px;\n    margin: 0 0 15px 0;\n    padding: 14px 1%;\n    box-shadow: none;\n    transition: all 0.3s;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n\n\n.template001{ width: 100%; height: 100%;list-style-position: outside; margin:0; padding:0;}\n\n/*Main Section Style */\n.main-bg {background-image: url(\"../images/temp-bg1.jpg\") ;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;   background-size: cover !important;\n    background-repeat: no-repeat !important;\n    background-attachment: fixed !important;\n    background-position: center center !important;\n    width: 100%;height: 100% !important; position:relative; vertical-align: middle;\n    text-align: center; }\n\t\n/*header section*/\n\n\n.main-bg header { float:left; width:100%; position: relative;}\n.main-bg header .logo {    float: left;\n    padding: 38px;\n    position: absolute;\n    top: 0px;\n    left: 0;\n    width: 25%;\n    text-align: left;}\n.main-bg header .logo img{max-width: 150px; max-height:50px;}\n.main-bg header .logo span {color: #fff;font-size: 18px;margin-left: 15px;font-family: montserratregular;}\n.main-bg header .logo a{cursor:default}\n\n.divider-2 .logo img {\n    max-width: 150px;\n    max-height: 50px;\n}\n\n/*header section end*/\n\n/*Content section */\n.landing-page {width: 100vw;display: table-cell;vertical-align: middle;height: 95vh;text-align:center;  }\n.landing-page-header .logo img{max-width:100%; max-height: 50px;}\n/*.input-outer {    width: 100vw; display: table-cell; vertical-align: middle;text-align: center;  }*/\n.cta-outer {\n    width: 100%;\n    text-align: center;\n    float: left;\n    margin-top: 5px;\n}\n.main-head {font-family: montserratregular;font-size: 60px;color: #fff;word-wrap: break-word;}\n.sub-head {font-family: montserratregular;font-size: 24px;color: rgba(255,255,255,0.5);word-wrap: break-word;}\n.description {font-family: montserratregular;font-size: 18px;color: rgba(255,255,255,0.5);margin-top: 25px;word-wrap: break-word; padding: 0 20%;}\n.input-section{ width:65%; margin:30px auto 0 auto ;}\n.input-section input{ background: #f7f7f7; border-radius: 5px; padding: 10px; color: #5e5e5e;font-size: 14px;font-family: montserratregular; margin-bottom: 15px; border:1px solid #d9dad3 !important;}\n.input-section ::-webkit-input-placeholder {color: #c4c4c6;}\n.input-section :-moz-placeholder { /* Firefox 18- */ color: #c4c4c6;  }\n.input-section ::-moz-placeholder {  /* Firefox 19+ */color: #c4c4c6; }\n.input-section :-ms-input-placeholder {color: #c4c4c6;}\n.prime-action {\n    font-family: montserratregular;\n    font-size: 18px;\n    color: #333333;\n    margin-top: 20px;\n    padding: 15px 40px;\n    background: #fff;\n    border-radius: 50px !important;}\n.btn.prime-action.focus,.btn.prime-action:focus,.btn.prime-action:hover {color: #333; background: rgba(255,255,255,0.8); text-decoration: none;}\n\n.footer-nav-outer{ position:absolute; bottom:0; width:100%; padding:10px;}\n.footer-nav { margin: 0; padding: 0; float:left;}\n.footer-nav li {float: left;display: inline;}\n.footer-nav li a {color:rgb(94,94,94);font-family: oxygenbold;font-size: 12px;text-decoration: none;}\n.footer-nav li a:hover { color:rgb(94,94,94);}\n.footer-nav li span {color:rgb(94,94,94);font-family: oxygenbold;font-size: 12px;text-decoration: none;padding: 5px 10px;}\n.powered-by {float: right;text-align: right;}\n.powered-by span {\n    font-size: 12px; \n    margin-right: 5px; \n    color: #fff;\n    text-shadow: 3px 4px 3px rgba(0,0,0,0.5);\n}\n\n/*new style 7/9/16*/\n\n.question-section .input-section{ width:93%; margin:30px auto 0 44px ;}\n\n/*new style*/\n/*theme style*/\n.questions{ float:left; width:100%;}\n.questions-header header{ background:none; float:left; width:100%; padding:0;} \n.questions-header header .p-right0{ padding-right:0;}\n.questions-header header .logo {float: left; padding:10px; }\n.questions-header header .right-sec {float: left; background:#ff6600; min-height:70px; padding:13px 10px 10px 2% ; position:relative; }\n.questions-header header .right-sec i{ font-size:20px;color:#fff; position:absolute; left:-72px;}\n.questions-header header .right-sec p{ float:left; font-size:11px;color:#fff; padding-left:26px; font-family: montserratregular; margin-bottom:5px;  }\n.questions-header header .right-sec span{ float:left; font-size:20px;color:#fff; font-family: montserratregular; padding-left:5px; }\n.que-fixed{position: fixed;top: 0; width: 100%; z-index:99;}\n.question-page{padding-top:7%; }\n\n.questions .question-head {font-family: oxygenbold; font-size: 14px; text-align: left; color: #5e5e5e;margin-bottom: 5px;}\n.questions .question-subhead { font-family: oxygenregular; font-size: 14px; text-align: left; color: #999999; width: 100%;}\n.questions .question-section {width: 100%;display: inline-block; background:#fff;  margin-top: 15px;}\n.questions .section-head {font-family: oxygenbold;\n    font-size: 14px;\n    text-align: left;\n    color: #5e5e5e;\n    margin-bottom: 5px;}\n.questions  .file-outer .section-head {font-size: 22px; margin-bottom: 10px;font-family: montserratlight;\tcolor: #666e78;}\n.questions .section-head i {color:#dcdddf; font-size:23px; cursor:pointer;display:none;}\n.question-components {\n    width: 100%;\n    display: inline-block;\n    padding-bottom: 40px;\n    padding-left: 30px;\n    border-left: 3px solid rgba(255,102,0,0.15);\n    margin-left: 11px;\n}\n.question-components .check-comp label{     \n    margin-bottom: 0;\n    float: left;\n    line-height: 30px;\n    word-wrap: break-word; z-index: 9;\n}\n\n\n.questions .date-picker-outer .section-head{font-size: 22px;margin-bottom: 10px;font-family: montserratlight;color: #666e78; margin-top:-20px;}\n/*theme style end */\n\n/* Checkbox with tick icons */\n.check-icon { width: 100%;padding: 0px; border: none; font-size: 16px;    font-weight: normal; line-height: 16px; border-bottom: 0; font-family: montserratlight;}\n.check-icon.last {border: none;}\n.check-icon:hover, .check-icon.last:hover{ background:none; cursor:pointer;}\n.check-icon input[type=\"checkbox\"] {left: -9999px; position: absolute;}\n.check-icon label {content: \"\"; width: 24px; height: 24px;border: 2px solid #ff6600;border-radius:50%;margin-right: 15px;margin-bottom: 0px;position: relative;top: 8px;}\n.check-icon input[type=\"checkbox\"]:checked + label { background-color: #ff6600; border: none;top: -1px;}\n.check-icon.gray-bg{ background:none;}\n.check-icon label::after {display: inline-block;position: relative; /* width: 11px; */height: auto;left: 2px;top: 0px;font-size: 12px; color: #fff;font-weight: 700; height: 0px;/* line-height: 34px; */}\n.check-icon input[type=\"checkbox\"]:checked + label::after {font-family: \"Material Icons\"; content: \"\\e5ca\";}\n.check-icon div {line-height: 38px; display: inherit;}\n\n/* Checkbox as icons */\n\n.check-icon div {line-height: 30px; display: inherit; font-size: 18px; color: #ff6600;}\n.check-icon label {display: inline-block;width: 16px; height: 16px; position: relative;top: 1px; margin: 0px 10px 0px 0px;}\n.check-icon input[type=\"checkbox\"]:checked + div {background-color: #ff6600;border: none;color: #fff;}\n.check-icon input[type=\"checkbox\"]:checked + div label {background-color: #fff;border: none;margin-bottom: 5px;}\n.check-icon input[type=\"checkbox\"]:checked + div label::after {font-family: \"Material Icons\"; content: \"\\e5ca\";}\n.ic label {content: none; border: none;height: auto; width: auto;color: #ff6600;}\n.ic input[type=\"checkbox\"]:checked + label::after { content: none;}\n.ic input[type=\"checkbox\"]:checked + label { color: #ff6600; background: none; top: 3px;}\n.ic i {font-size: 24px; line-height: 1;}\n\n\n\n/* Radio Buttons */\n\n.radio-icon {\n    width: 100%;\n    /*padding: 12px 15px; */\n    border: 2px solid #eee;\n    font-size: 16px;\n    font-weight: normal;\n    line-height: 16px;\n    border-bottom: 0;\n    font-family: montserratlight;\n}\n.sound-cloud input { cursor:pointer; }\n.radio-icon .active{ background:#f9f9f9;}\n.radio-icon.last {\n    border: 2px solid #eee;\n}\n\n.radio-icon:hover,\n.radio-icon.last:hover {\n    background: #f9f9f9;\n    cursor: pointer;\n}\n.radio-icon .radio-btn label .radio-btn input[type=\"radio\"]:checked+label {\n    color: #ff6600;\n    font-size: 15px;\n}\n.radio-icon .radio-btn input[type=\"radio\"]:checked+label::after {\n    border: 3px solid #ff6600;\n}\n.radio-icon .radio-btn input[type=\"radio\"]:checked+label::before {\n    background: #ff6600;\n}\n.radio-icon .radio-btn label::after {\n    border: 3px solid #ff6600;\n}\n\n.radio-btn {\n    position: relative;\n    padding: 15px 20px\n}\n.radio-icon .radio-btn label{font-weight: 500;}\n.radio-icon .radio-btn input[type=\"radio\"] {\n    position: absolute;\n    opacity: 0;\n    z-index: 1;\n\t\n}\n.radio-btn label {\n    display: inline-block;\n    line-height: 24px;\n    vertical-align: middle;\n    position: relative;\n    padding-left: 30px;\n    cursor: pointer;\n    user-select: none;\n    color: #424242\n}\n.radio-btn label::after {\n    position: absolute;\n    content: \"\";\n    width: 21px;\n    height: 21px;\n    left: 0;\n    top: 0;\n    margin-left: 0px;\n    background-color: #ffffff;\n    border: 3px solid #ff6600;\n    -webkit-border-radius: 3px;\n    border-radius: 3px;\n    background-clip: padding-box;\n\t\n    cursor: pointer\n}\n.radio-btn label::before {\n    position: absolute;\n    content: \"\";\n    width: 10px;\n    height: 5px;\n    top: 6px;\n    left: 6px;\n    margin-left: 0px;\n    border: 3px solid #ff6600;\n    border-top: none;\n    border-right: none;\n    background: transparent;\n    -moz-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    opacity: 0;\n    -webkit-transition: all 0.15s ease-in-out;\n    -o-transition: all 0.15s ease-in-out;\n    transition: all 0.15s ease-in-out;\n    z-index: 1\n}\n.radio-btn label:active::before {\n    opacity: 0.3\n}\n\n.radio-btn input[type=\"radio\"]:checked+label {\n    color: #000\n}\n\n.radio-btn input[type=\"radio\"]:checked+label::after {\n    border: 3px solid #000\n}\n\n.radio-btn input[type=\"radio\"]:checked+label::before {\n    opacity: 1\n}\n\n.radio-btn input[type=\"radio\"]:disabled+label {\n    color: #787878;\n    cursor: default\n}\n\n.radio-btn input[type=\"radio\"]:disabled+label::after {\n    border: 3px solid #787878;\n    background-color: #ffffff\n}\n\n.radio-btn input[type=\"radio\"]:disabled+label::before {\n    display: none\n}\n.radio-btn label::after {\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    background-clip: padding-box\n}\n.radio-btn label::before {\n    width: 9px;\n    height: 9px;\n    border: none;\n    top: 6px;\n    left: 6px;\n    -webkit-border-radius: 50%;\n    border-radius: 50%;\n    background-clip: padding-box;\n    background-color: #ff6600;\n    -moz-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg)\n}\n\n\n\n\n/* counter Buttons */\n.counter{  float:left; padding:5px;  border:1px solid #dcdddf; font-family:montserratlight; margin-bottom:20px;  }\n.qty {width: 100px !important;height: 25px;text-align: center; float:left; border:none !important; margin-bottom:0 !important; font-size:16px !important;}\n.qtyplus { width:25px; height:25px; background:none; float:left; margin-left:10px; cursor:pointer; font-size:20px;  padding:5px; color:#ff6600;}\n.qtyminus { width:25px; height:25px; float:left; margin-right:10px; cursor:pointer; font-size:20px; padding:5px;color:#ff6600;}\n.qtyminus .material-icons,.qtyplus .material-icons { font-size:20px !important}\n\n/* switch Buttons */\n\n.switch-outer{width: 100%; float:left;padding: 0px 15px;border:none;font-size: 16px;font-weight: normal;line-height: 16px;    border-bottom: 0;font-family: montserratlight;}\n.switch-outer.last{border-bottom: 0;}\t\n.switch-outer .switch-que{ float:left; padding:12px; font-size:16px; font-family:montserratlight; color:#232f3f;}\n.switch-outer .switch {display: table-cell;vertical-align: middle;padding: 5px;}\n.switch-outer .cmn-toggle {position: absolute;margin-left: -9999px;visibility: hidden;}\n.switch-outer .cmn-toggle + label { display: block; position: relative; cursor: pointer; outline: none; -webkit-user-select: none;\n  -moz-user-select: none; -ms-user-select: none; user-select: none;}\n.switch-outer input.cmn-toggle-round-flat + label {padding: 2px; width: 62px; height: 30px; background-color: #ff6600; -webkit-border-radius: 60px;  -moz-border-radius: 60px; -ms-border-radius: 60px; -o-border-radius: 60px; border-radius: 60px; -webkit-transition: background 0.4s;  -moz-transition: background 0.4s; -o-transition: background 0.4s; transition: background 0.4s;}\n.switch-outer input.cmn-toggle-round-flat + label:before, input.cmn-toggle-round-flat + label:after {display: block;position: absolute; content: \"\";}\n.switch-outer input.cmn-toggle-round-flat + label:before { top: 2px; left: 2px; bottom: 2px; right: 2px; background-color: #fff; -webkit-border-radius: 60px;  -moz-border-radius: 60px; -ms-border-radius: 60px; -o-border-radius: 60px; border-radius: 60px; -webkit-transition: background 0.4s;  -moz-transition: background 0.4s; -o-transition: background 0.4s; transition: background 0.4s;}\n.switch-outer input.cmn-toggle-round-flat + label:after { top: 4px; left: 4px; bottom: 4px; width: 23px; background-color: #ff6600; -webkit-border-radius: 52px;\n  -moz-border-radius: 52px;  -ms-border-radius: 52px; -o-border-radius: 52px; border-radius: 52px; -webkit-transition: margin 0.4s,background 0.4s; -moz-transition: margin 0.4s, background 0.4s;  -o-transition: margin 0.4s, background 0.4s; transition: margin 0.4s, background 0.4s;}\n.switch-outer input.cmn-toggle-round-flat:checked + label {  background-color: #ff6600;}\n.switch-outer input.cmn-toggle-round-flat:checked + label:after { margin-left: 30px; background-color: #ff6600;}\n\n\n\n\n\n/*input*/\n\n.input-icon {\n    color: initial;\n    position: relative;\n    top: -60px;\n    font-size: 16px;\n    background: none;\n    border: none;\n    text-align: right;\n    padding: 6px 10px 6px 20px;\n}\n\n.input-group-addon.input-icon {\n    color: #ff6600;\n}\n\n\n/*File Upload*/\n\n.file-field { position: relative;}\n.input-field {position: relative;max-height:54px;float:left;width:100%; font-family:montserratlight}\n.file-field input[type=file] {position: absolute;top: 0;right: 0;left: 0;bottom: 0; width: 100%; margin: 0;padding: 0;font-size: 20px;cursor: pointer;opacity: 0;filter: alpha(opacity=0);z-index:9;}\n.file-field .input-icon {left: 1px;/* top: 8px; */color: #ff6600;font-size: 24px;text-align: left; padding-left:0px;}\n.file-field input[type=text] { padding-left: 35px; -moz-box-sizing: border-box;-webkit-box-sizing: border-box; box-sizing: border-box;}\n\n\n/* Range slider */\n.slider-selection {background: none;background-color: #ff6600;box-shadow: none;}\n.slider-track-low, .slider-track-high {background: #999999;}\n.slider-handle {background-color: #fff; background-image: none;box-shadow: none;border: 4px solid #ff6600; width: 18px; height: 18px;}\n.tooltip-inner { padding: 3px 10px;font-size: 16px; background-color: #ff6600;border-radius: 0px;}\n.tooltip.top .tooltip-arrow {border-top-color: #ff6600;}\n.slider .tooltip.top {margin-top: -49px;}\n.slider.slider-horizontal {width: 100%;}\n.slider.slider-horizontal .slider-track {height: 6px;}\n.slider.slider-horizontal .slider-selection, .slider.slider-horizontal .slider-track-low, .slider.slider-horizontal .slider-track-high {top: 1px;}\n.slider-track .slider-tick { background: #ff6600; opacity: 1;}\n.slider-tick.in-selection,.slider-tick { background-image: none;background: #ff6600;width: 18px;height: 18px;}\n.slider-selection.tick-slider-selection {background-image: none; background-color: #ff6600;}\ntemp .range {font-size: 18px;position: relative;top: 41px;right: -1px;}\n.range-max {top: -6px;float: right;}\n\n.slider.slider-horizontal .slider-track{ height: 4px;}\n.slider.slider-horizontal .slider-tick, .slider.slider-horizontal .slider-handle{margin-top:-4px;}\n.slider-handle{width:12px; height:12px; background:#ffffff; border:2px solid #ff6600;}\n.slider-track{background:#cccccc;}\n.tooltip-inner{background:#ff6600 !important;}\n.tooltip.top .tooltip-arrow{border-top-color: #ff6600}\n.slider-track-low, .slider-track-high{}\n.slider-selection.tick-slider-selection{background:#ff6600;}\n.slider-tick.in-selection{width: 12px;height: 12px;background: #ff6600;}\n.slider-tick{width:12px; height:12px;background:#cccccc;}\n.cir{margin-left:-10px; margin-top:2px;}\n.range-slider{text-align:center;}\n.slider.slider-horizontal{width:96%; padding:30px 0; margin-bottom: 0px !important;}\n.slider.slider-horizontal .slider-tick-label-container .slider-tick-label{ font-family:montserratlight; font-size:16px; color:#ff6600; width:100%;}\n.slider.slider-horizontal .slider-tick-label-container { white-space: nowrap; margin-top: 3px !important;}\n.tooltip.top .tooltip-arrow {margin-left: -8px !important;}\n\n\n\n/*Components end */\n\n\n\n/*Result Section Style */\n.page_2 {\n    background: #f6f6f6;\n    width: 28%;\n    top:100px !important;\n    padding: 30px;\n    padding-left: 30px;\n    padding-right: 20px;\n    position: relative;\n    font-family: montserratregular;\n    display: inline-block;\n    -webkit-border-top-right-radius: 7px;\n    -webkit-border-bottom-right-radius: 7px;\n    -moz-border-radius-topright: 7px;\n    -moz-border-radius-bottomright: 7px;\n    border-top-right-radius: 7px;\n    border-bottom-right-radius: 7px; position: relative;\n}\n.page_2 .top-head { position:relative; z-index:1; float:left; width:100%;background:none;\t/*min-height:50px;*/ font-family:oxygenbold;}\n.page_2 .top-head  .top-left{\n    float: left;\n    width: 100%;\n    text-align: center;\n}\n.page_2 .top-head  .top-right{ float:left; width:50%; padding:0 10px;}\n.page_2 .top-head h4{\n    color: #6f7072;\n    font-size: 24px;\n    font-family: montserrat;\n    font-weight: normal;\n    float: left;\n}\n.page_2 .top-head h4 span{ color:#ff6600; font-size:24px;}\n.page_2  .share-link{ float:left; width:100%; margin-top: 10px;}\n.page_2  .share-link ul{ margin: 5px 0;padding: 0;float: none; width: 100%;text-align: center; display: inline-block; z-index: 9; position: relative;}\n.page_2  .share-link ul li{ display:inline-block;}\n.page_2  .share-link ul li:nth-child(5){ display: none;}\n.page_2  .share-link ul li span{ padding:0px; color:#ff6600; font-size:18px; font-weight:bold;}\n.page_2  .share-link ul li a{ display:inline-block; text-decoration:none; color:#6e7071; font-size:18px; padding:5px; opacity:0.7; cursor: pointer;} \n.page_2  .share-link ul li a:hover{ opacity:1; }\n.page_2  .share-link ul li a .material-icons{font-size:18px !important; margin-top:3px; } \n.page_2 .share-link span i{   margin-top: 8px;font-size: 16px;margin-left: 6px; color: #6e6f71;}\n.page_2 .share-link span li{border-left: 1px dotted #6e6f71;height: 18px;margin-top: 8px;margin-left:5px; margin-right:5px;}\n.page_2 ul li h6{color:#6e6f71; margin-right:12px;}\n\n\n.page_2 .result-full-section{ float:left;  width:100%; background:none; text-align: center; padding-top: 0px;  z-index:1;     border-bottom: 3px solid #fff;   padding-bottom: 20px; padding-top:30px;}\n.page_2 .result-full-section:last-child {float: left; width: 100%;background: none; border: 0 !important; text-align: center; padding-top: 0px; z-index: 1; padding-bottom: 0;}\n.page_2 .result-full-section h4{color:#ff6600;\ttext-align:center; font-size:30px; font-family:montserratregular;}\n.page_2 .result-full-section .small-top-sec p:nth-child(1) span{color:#5e5e5e;text-align:center;font-size:14px; font-family:montserratregular; margin:0; line-height:22px; text-transform:uppercase;}\n.page_2 .result-full-section .small-top-sec p:nth-child(2) span{color:#9a9a9a;text-align:center;font-size:14px; font-family:montserratregular; margin:0; line-height:22px;}\n.page_2 .result-full-section .small-section{ float:left; width:100%;}\n.grey-color{color:#9a9a9a !important;}\n.page_2 .result-full-section .small-section h4{\n    color: #ff6600 !important;\n    font-size: 18px;\n    font-family: montserratregular;\n    float: right;\n    margin-top: 0;\n    width: 30%;\n    text-align: right;\n}\n.page_2 .input-section{ float:left;width:100%; background:#f5f5f5; padding:20px 0; margin-top:0 !important}\n.page_2 .input-section input{background: #ffffff; border-radius: 5px; padding: 10px; color: #ff6600;font-size: 14px;font-family: montserratregular; margin-bottom: 10px; border:1px solid #d9dad3 !important;}\n.bordered-btn{background-color: #f9f9f9;  color: #00afa5;padding: 10px 40px; border: 2px solid #00afa5;text-decoration: none !important; transition: background-color 0.5s ease; }\n.bordered-btn:hover{ background-color: #00afa5; color: #fff;}\n.page_2 .content-right{ float:left; width:30%; padding:0 10px; }\n\n.container-temp div:nth-child(1){     \n    text-align: center;\n    font-size: 14px;\n    text-transform: uppercase;\n    color: rgb(94,94,94);\n    font-family: oxygenbold;\n}\n\n\n/*Result Section Style */\n\n.section-head .help-text{\n    font-family: oxygenregular;\n    font-size: 14px;\n    text-align: left;\n    color: #999999;\n    width: 100%;\n    margin-bottom: 15px;\n    margin-top: 5px;\n}\n/*\n.section-head i:hover + .help-text{ display:block !important}*/\n\n/*\n.section-head .help-outer { width: 40px; position: relative; display: inline-block; top: 4px; padding-left: 5px; }\n.section-head .help-text { display: none; width: 250px; background: #eee; border: 1px solid #ccc; padding: 8px; left: -50px; font-size: 12px; position: absolute; color: #999; line-height: 18px; font-family: montserratlight; -webkit-box-shadow: 3px 3px 10px 0px rgba(224, 221, 224, 1); -moz-box-shadow: 3px 3px 10px 0px rgba(224, 221, 224, 1); box-shadow: 3px 3px 10px 0px rgba(224, 221, 224, 1); }\n.section-head i:hover + .help-text { display: block !important; z-index: 99; }\n.section-head span { margin-bottom: 25px;} \n\n*/\n.section-head .help-outer i{ display: none;}\n\n\n\n\n/*New Radio Style */\n.radio-outer{float: left;    \n    width: 100%;\n    padding: 0px;\n    border: none;\n    font-size: 16px;\n    font-weight: normal;\n    line-height: 16px;\n    border-bottom: 0;\n    font-family: montserratlight; \n    margin-bottom: 10px;\n}\n.radio-outer:last-child{border: 0;}\n.lable-style{padding: 0px 30px; }\n.control {    display: block;\n    position: relative;\n    padding-left: 30px;\n    margin-bottom: 15px;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: 500;\n    color: #ff6600;}\n.control input {position: absolute;z-index: 9; opacity: 0; width: auto; margin: 0; height: 0;}\n.control__indicator {position: absolute;top:5px;left: 0;height: 20px;width: 20px;border:3px solid #ff6600;}\n.control--radio .control__indicator {border-radius: 50%;}\n.control input:checked ~ .control__indicator {background: #ff6600;}\n.control__indicator:after {content: ''; position: absolute; display: none;}\n.control input:checked ~ .control__indicator:after {display: block;}\n.control--radio .control__indicator:after { left: 0px; top: 0px; height: 14px; width: 14px; border-radius: 50%; background: #ff6600; border: 3px solid #fff;}\n.control--radio .control__indicator.icon-set{ border:none !important;top: 3px;left: 0px; color:#ff6600;}\n.control--radio .control__indicator.icon-set:after { left: 0px; top: 0px; height: 14px; width: 14px; border-radius: 50%; background: none; border: none;}\n.control input:checked ~ .control__indicator.icon-set {background: none;}\n.check-comp .control--radio .control__indicator.icon-set i{font-size: 18px;}\n\n\n/*New Checkbox Style */\n.checkbox-outer-base{\n    float: left;    \n    width: 100%;\n    padding: 0px;\n    border: none;\n    font-size: 16px;\n    font-weight: normal;\n    line-height: 16px;\n    border-bottom: 0;\n    font-family: oxygenregular; \n    margin-bottom: 10px;\n}\n.checkbox-outer-base:last-child{border: none; }\n.checkbox-outer{\n    float: left;    \n    width: 100%;\n    padding: 0px;\n    border: none;\n    font-size: 16px;\n    font-weight: normal;\n    line-height: 16px;\n    border-bottom: 0;\n    font-family: oxygenregular; \n    margin-bottom: 10px;\n}\n.checkbox-outer:last-child{border: none;}\n.control__indicator.check-set {     left: 10px !important; border: 2px solid #ff6600; border-radius: 50%;  top: 3px;}\n.control--checkbox { padding:0px 38px;}\n.control--checkbox .control__indicator:after {left: 6px; top: 1px; width: 5px; height: 11px; border: solid #fff; border-width: 0 2px 2px 0;transform: rotate(45deg);}\n.check-comp .checkbox-outer .control__indicator.check-set{ border:none; left:12px; color:#ff6600;}\n.check-comp .checkbox-outer .control__indicator.check-set i{font-size: 18px;}\n.check-comp .checkbox-outer .control input:checked ~ .control__indicator {background: none; color:#ff6600;}\n.check-comp .checkbox-outer .control--checkbox .control__indicator:after{ border:none;}\n.check-comp .checkbox-outer .control--checkbox { padding: 0px 20px 0px 35px;}\n\n\n\n.select {\n  position: relative;\n  display: inline-block;\n  margin-bottom: 15px;\n  width: 100%;\n}\n.select select {\n    display: inline-block;\n    width: 100%;\n    cursor: pointer;\n    padding: 10px 15px;\n    outline: 0;\n    border-radius: 25px;\n    color: #ff6600;\n    background: #f7f7f7;\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    border: 2px solid #eee;\n    font-family: montserratlight;\n    font-size: 16px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n.select select::-ms-expand {\n  display: none;\n}\n.select select:hover,\n.select select:focus {\n    color: #ff6600;\n    background: #fff;\n    padding: 10px 15px;\n  \n}\n\n.select__arrow {\n    position: absolute;\n    top: 19px;\n    right: 15px;\n    width: 0;\n    height: 0;\n    pointer-events: none;\n    border-style: solid;\n    border-width: 8px 5px 0 5px;\n    border-color: #ff6600 transparent transparent transparent;\n}\n.select select:hover ~ .select__arrow,\n.select select:focus ~ .select__arrow {\n      border-top-color: #ff6600;\n}\n.select select .option{ padding:10px;}\n.select select > option {\n  background: #eee !important;\n  padding:20px !important;\n}\n.select select > option:hover {\n  background: #ccc !important;\n  padding:20px !important;\n  \n}\n\n\n\n/*New circle outer*/\n.circle-outer{ float:left;width:100%; padding:10px; text-align:center;}\n.circle-outer .icon-outer{  color:#ff6600;}\n.circle-outer .icon-outer i{font-size:40px;}\n.circle-outer .num-circle-outer{ -webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px;  background:#ff6600; padding:10px 15px; color:#fff; font-size:14px; font-family:montserratregular;}\n\n\n/* sahil css start template 2 */\n.page2{\n    margin-top: 10%;\n    margin-bottom: 5%;\n    float: left;\n}\n.questions .question-section-outer{\n    background: #fff;\n    width: 94%;\n    float: left;\n    padding: 20px 20px 20px 30px;\n    padding-bottom: 0;\n    padding-top: 0;\n}\n.questions .question-section-outer:nth-last-child(12){\n    display: none;\n}\n.questions .question-section-outer:nth-last-child(11){\n    -webkit-border-top-left-radius: 7px;\n    -webkit-border-top-right-radius: 7px;\n    -moz-border-radius-topleft: 7px;\n    -moz-border-radius-topright: 7px;\n    border-top-left-radius: 7px;\n    border-top-right-radius: 7px;\n    padding-left: 0px;\n}\n.questions .question-section-outer:nth-last-child(11) .questions{\n    padding-top: 20px;\n}\n.questions .question-section-outer:nth-last-child(11) .questions .question-head{\n    color: #ff6600;\n    font-size:18px;\n}\n.questions .question-section-outer:nth-last-child(10) .questions {\n    padding-top: 20px;\n}\n.questions .question-section-outer:nth-last-child(1){\n    -webkit-border-bottom-right-radius: 7px;\n    -webkit-border-bottom-left-radius: 7px;\n    -moz-border-radius-bottomright: 7px;\n    -moz-border-radius-bottomleft: 7px;\n    border-bottom-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n}\n.questions .question-section-outer .sliding-next{\n    display: none;\n}\n.questions .question-section-outer .questions .col-md-8{\n    margin-left: 0px;\n    width: 92%;\n}\n.questions .question-section-outer .question-leftoutr{\n    float: left;\n}\n.questions .question-section-outer .question-number{\n    width: 30px;\n    height: 30px;\n    background: #ff6600;\n    border-radius: 50%;\n    color: #fff;\n    font-size: 12px;\n    text-align: center;\n    line-height: 30px;\n    position: absolute;\n    left: 28px;\n}\n.questions .question-section-outer .question-line{\n    min-height: 150px;\n    position: relative;\n    float: left;\n    margin-left: 14px;\n}\n.questions .question-section-outer .question-rightoutr{\n    float: left;\n    width: 90%;\n    padding-left: 30px;\n    padding-bottom: 45px;\n    margin-left: 17px;\n    border-left: 3px solid rgba(255,102,0,0.15);\n}\n.questions .question-section-outer .question-head{\n    /*display: none;*/\n}\n.questions .question-section-outer .question-subhead{\n    /*display: none;*/\n}\n.questions .question-section-outer .input-field input\n{\n    background: #f7f7f7;\n    border-radius: 5px;\n    padding: 10px;\n    color: #ff6600;\n    font-size: 14px;\n    font-family: montserratregular;\n    margin-bottom: 0px;\n}\n.questions .question-section-outer .questions .question-components .check-comp label:hover{\n    background: #ff6600;\n    \n}\n.questions .question-section-outer .questions .question-components .check-comp label:hover .material-icons{\n    color: #fff;\n}\n.questions .question-section-outer .questions .question-components .check-comp label:hover div{\n    color: #fff;\n}\n.page2 .page_2 section {\n    background: none;\n    width: 100%;\n    float: left;\n    margin-left: 0px;\n}\n.page2 .page_2 .top-head section:nth-last-child(1) {\n    display: none;\n}\n.page_2.result-fixed{\n    /*position: fixed !important;*/\n    position: fixed !important;\n    width: 28%;\n    top: 5%;\n    left: 56%;\n    border-bottom-left-radius: 7px;\n}\n.page2 .page_2 .result-full-section .small-section h6 {\n    display: none;\n}\n.page2 .page_2 .cta-outer .bordered-btn{\n    background: #ff6600;\n    color: #fff;\n    padding: 5px 30px;\n    border: 2px solid #ff6600;\n    font-family: montserratlight;\n    font-size: 14px;\n    text-decoration: none !important;\n    border-radius: 5px;\n    display: inline-block;\n    transition: background-color 0.5s ease;\n    box-shadow: 0 2px 5px 1px rgba(0,0,0,0.2);\n\n}\n.page2 .page_2 .cta-outer .bordered-btn:hover{\n    background: #fff;\n    color: #ff6600;\n}\n.page2 .page_2 .result-full-section div:nth-last-child(5){\n    border-top: 3px solid #fff;\n    padding-top: 20px;\n    margin-top: 20px;\n}\n.page2 .page_2 .result-full-section .small-section h5 {\n    color: #5e5e5e;\n    text-align: left;\n    font-size: 14px;\n    font-family: montserratregular;\n    margin: 0;\n    margin-bottom: 15px;\n    width: 65%;\n    text-transform: uppercase;\n}\n.questions .question-components .checkbox-outer label:hover{\n    margin-bottom: 0;\n    background: #ff6600;\n    color: #fff;\n    border-radius: 25px;\n}\n.questions .question-components .checkbox-outer label:hover .check-set{\n    color: #fff;\n}\n.template-section{\n    float: left;\n}\n.page_1 {\n    background: #fff;\n    width: 41%;\n    float: left;\n    margin-left: 15%;\n    z-index: 9;\n    position: relative;\n    padding: 20px 0;\n    margin-top: 40px;\n    margin-bottom: 40px;\n    -webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;\n-webkit-box-shadow:3px 3px 10px 0px rgba(153,153,153,1);-moz-box-shadow:3px 3px 10px 0px rgba(153,153,153,1);box-shadow:3px 3px 10px 0px rgba(153,153,153,1);\n}\n.page_2 {\n    background: #f6f6f6;\n    width: 28%;\n    top:100px;\n    position: relative;\n    font-family: montserratregular;\n    display: inline-block;\n    -webkit-border-top-right-radius: 7px;\n    -webkit-border-bottom-right-radius: 7px;\n    -moz-border-radius-topright: 7px;\n    -moz-border-radius-bottomright: 7px;\n    border-top-right-radius: 7px;\n    border-bottom-right-radius: 7px;\n}\n.landing-page-mid{\n    width: 100vw !important;\n    display: table-cell;\n    vertical-align: middle;\n    height: 100vh;\n    text-align: center;\n    padding:7% 10%;\n    background: rgba(42,40,38,0.45);\n}\n.landing-footer-outer {\n    position: absolute;\n    width: 100%;\n    padding: 10px;\n    bottom: 0;\n}\n.page_2 .right-section {\n    display: none;\n}\n\n.page_2 section:nth-child(3) .cta-outer{\n    border:none;\n    padding-top: 0;\n    margin-bottom: 20px;\n}\n.page_2 .btn.prime-action{\n    margin-top: 0;\n    background: #ff6600;\n    color: #fff;\n    font-size: 14px;\n    border-radius: 5px !important;\n    padding: 6px 25px;\n    box-shadow: 0 2px 3px 1px rgba(0,0,0,0.2);\n    margin-bottom: 30px; white-space: normal;\n}\n.page_2 .btn.prime-action:hover{ color: #ffffff; background: transparent 0.5;}\n.page_2 .top-head .mid-width{\n    width: 100%;\n    text-align: center;\n}\n.page_2 .result-temp2-default-section {\n    float: left;\n    width: 100%;\n    padding-top: 15px; position: relative;\n}\n.page_2 .result-temp2-default-section:last-child {\n    float: left;\n    width: 100%;\n    padding-bottom: 10px;\n    margin-bottom: 20px; \n    border-bottom: 3px solid #fff;\n}\n.page_2 .result-temp2-default-section.result-full-section .small-top-sec p:child(1){width: 100% !important; text-align: center !important; float: left !important; word-wrap: break-word;  }\n.page_2 .result-temp2-default-section.result-full-section .small-top-sec p:child(2){width: 100% !important; text-align: center !important; float: left !important; word-wrap: break-word;  }\n.page_2 .result-temp2-default-section.result-full-section .small-top-sec p:child(3){width: 100% !important; text-align: center !important; float: left !important; word-wrap: break-word;  }\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(3){\n    float: left; width:70% !important; text-align: left; text-transform: initial !important; font-size: 12px; color: #999;\n}\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(4){\n    float: left; width:70% !important; text-align: left; text-transform: initial !important; font-size: 12px; color: #999;\n}\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(5){\n    float: left; width:70% !important; text-align: left; text-transform: initial !important; font-size: 12px; color: #999;\n}\n.page_2 .result-temp2-default-section .small-top-sec{\n    width: 100%;\n    float: left;\n}\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p{\n    color: #5e5e5e;\n    text-align: center;\n    font-size: 14px;\n    font-family: montserratregular;\n    margin: 0;\n    margin-bottom: 0px;\n}\n.page_2 .result-temp2-default-section .small-top-sec h4{\n    color: #ff6600 !important;\n    font-size: 18px;\n    font-family: montserratregular;\n    float: left;\n    margin-top: 0;\n}\n\n.page_2 .result-temp2-default-section .small-top-sec .right-set{float: right; width:50%; text-align: right;}\n.page_2 .result-temp2-default-section .small-top-sec .left-set{ float: left; width:50%; text-align: left; }\n\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){float: right; width:30% !important; text-align: right; word-wrap: break-word;  }\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(2){float: left; width:70% !important; text-align: left; word-wrap: break-word; }\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1) span{font-family: oxygenbold; color:rgb(255,102,0) !important; font-size: 14px; }\n.page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(2) span{font-family: oxygenbold; color:rgb(94,94,94);  font-size: 14px !important ;}\n.page_2.result-fixed .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(2){font-size: 14px ;}\n\n.page_2 .result-temp2-default-section.result-full-section .small-top-sec p:first-child{float: left; width:100%; text-align: center !important; margin-bottom:20px; word-break: break-all;}\n.page_2 .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(2){float: left; width:100%; text-align: center !important;font-family: oxygenbold; color:rgb(94,94,94); text-transform: uppercase; }\n.page_2 .result-temp2-default-section.result-full-section .small-top-sec p:nth-child(3){ display:block;float: left; width:100%; text-align: center; font-family: oxygenregular; color: #999;}\n\n.page_2 .disc-set{color: #999;font-size: 12px;text-align: center; margin-bottom:10px;    float: left;}\n\n/*.page_2 .result-temp2-default-section div div:nth-child(1){\n    float: right;\n}\n.page_2 .result-temp2-default-section div div:nth-child(2){\n    float: left;\n}*/\n.temp2-bg{\n    background: url(\"./app/site/templates/templateAll/template2/templatesHtml/assets/images/temp-bg1.jpg\") no-repeat center center fixed;\n    background-size: cover;\n    float: left;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n}\n\n\n/*Result Section Style end*/\n input[type=range] { -webkit-appearance: none;border:none; width: 100%;}\n  input[type=range]::-webkit-slider-runnable-track { width: 100%; height: 5px; background: #ddd; border: none;border-radius: 3px;}\n  input[type=range]::-webkit-slider-thumb {-webkit-appearance: none;border: none;height: 16px; width: 16px;border-radius: 50%;background: #ff6600;margin-top: -4px; }  \n  .abc{ display:none; background:#666; width:20px; height:20px;}\n  input[type=range]::-webkit-slider-thumb:hover{background:#ccc;}\n  input[type=range]:focus {outline: none;}\n  input[type=range]:focus::-webkit-slider-runnable-track {background: #ccc;}\n  input[type=range]::-moz-range-track { width: 100%; height: 5px; background: #ddd; border: none;border-radius: 3px;}\n  input[type=range]::-moz-range-thumb { border: none; height: 16px;width: 16px; border-radius: 50%;background: #ff6600; }\n\n  /*hide the outline behind the border*/\n  input[type=range]:-moz-focusring{ outline: 1px solid white; outline-offset: -1px;}\n  input[type=range]::-ms-track { width: 100%;  height: 5px; background: transparent; border-color: transparent; border-width: 6px 0; color: transparent;}\n  input[type=range]::-ms-fill-lower { background: #777; border-radius: 10px;}\n  input[type=range]::-ms-fill-upper { background: #ddd; border-radius: 10px;}\n  input[type=range]::-ms-thumb {border: none; height: 16px; width: 16px;border-radius: 50%;background: #ff6600;}\n  input[type=range]:focus::-ms-fill-lower { background: #888; }\n  input[type=range]:focus::-ms-fill-upper { background: #ccc;}\n\n  .range-slider .slider-min{ width: 2%; float: left; padding-top:8px; color:#ff6600; }\n  .range-slider .well1{ width: 100%; float: left; }\n  .range-slider .slider-max{ width: 2%; float: right; padding-top:8px; color:#ff6600; }\n  .tip { position: absolute;border: 1px solid black;padding: 4px;}\n\n\n\n.question-section .input-section .input-outer span  {float: left; width: 100%;text-align: left; color: #f44336;font-size: 12px;z-index: 1; margin-top: -12px;  margin-bottom: 8px;}\n.landing-page-mid .input-section .input-outer span  {float: left; width: 100%;text-align: left; color: #f44336;font-size: 12px;z-index: 1;  margin-bottom: 8px; padding-left:23px;}\n.dropdown-set{ float: left; width:100%;}\n.slider-set{ float: left; width:100%; margin-top: 6px;}\n\n.range-slider .irs-slider {top: 29px;width: 20px; height: 20px;}\n.range-slider .irs-bar-edge {border: 1px solid #ff6600; border-right: 0; background: #ff6600;}\n.range-slider .irs-bar {border-top: 1px solid #ff6600;border-bottom: 1px solid #ff6600; background: #ff6600;}\n.range-slider .irs-single { background: #ff6600; font-family: montserratlight; border-radius:8px !important; padding: 1px 14px  !important;}\n.range-slider .irs-min, .irs-max{font-family: montserratregular; }\n\n\n.selectize-input{border:1px solid #d9dad3;padding:15px 15px 15px 15px;width:100%;display:inline-block;width:100%;overflow:hidden;position:relative;z-index:1;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:0px;font-family:montserratlight;font-size:14px;}\n.selectize-input .item{font-family:montserratlight;font-size:14px;}\n.selectize-dropdown .active{background-color:#ff6600;color:#ffffff; }\n.selectize-dropdown [data-selectable],.selectize-dropdown .optgroup-header{padding:15px;font-family:montserratlight;font-size:14px;}\n.selectize-dropdown [data-selectable]{cursor:pointer;overflow:hidden;}\n.selectize-control.single .selectize-input,.selectize-dropdown.single{border-color:#d9dad3; background: #ffffff !important;}\n.selectize-control.single .selectize-input{ background: #f7f7f7 !important; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;}\n.control-group{position:relative;font-family:montserratregular;}\n.select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#ff6600;bottom:18px}\n.selectize-dropdown-content{ max-height: auto!important; }\n\n\n\n.redo-link{position: absolute;top: 2.5%; right: 3%;}\n.redo-link ul li{float:left;display:inline-block;}\n.redo-link ul li:nth-child(1){display:none;}\n.redo-link ul li{float: left; display:inline-block; -webkit-border-radius: 28px;-moz-border-radius: 28px;border-radius: 28px;  padding:2px 6px; background: #ccc; }\n.redo-link ul li span{padding:2px 10px 0 10px; float: left; font-size: 20px;}\n.redo-link ul li a{float:left;display:inline-block;text-decoration:none;font-size:14px;}\n.redo-link ul li a .material-icons{font-size:14px!important;margin-top:4px;}\n.redo-link span i{font-size:16px;margin-left:6px;color:#6e6f71;}\n.redo-link span li{border-left:1px dotted #6e6f71;height:18px;margin-top:8px;margin-left:5px;margin-right:5px;}\n\n.checkbox-outer.active .control {display: block; position: relative; cursor: pointer; font-size: 18px; font-weight: 500; color:#fff; background: #ff6600; border-radius: 25px; }\n.checkbox-outer.active .control i{ color:#fff;}\n\n.landing-page-mid .input-section{width:72%;margin:30px auto 0 auto;}\n.landing-page-mid .input-section input{width:43%!important;margin:8px;border:2px solid #c4c4c6!important;color:#fefeff;font-family:montserratregular;font-size:14px!important;}\n.landing-page-mid .input-section::-webkit-input-placeholder{color:#c4c4c6;}\n.landing-page-mid .cta-outer{width:100vw;display:table-cell;vertical-align:middle;height:20vh;text-align:center;}\n.landing-page-mid .input-section .input-outer{float:left;width:49%;position:relative;}\n.landing-page-mid .input-section .input-outer:nth-last-child(1):nth-child(odd){width:100%;}\n.landing-page-mid .input-section input{float:left;width:96%!important;margin: 10px 28px !important; padding:14px; background:none !important; border:2px solid #c4c4c6!important;color:#fefeff;font-family:montserratregular;font-size:14px!important;}\n.landing-page-mid .input-section .input-outer span{float:left;width:100%;position:absolute;top:64px;left:27px;text-align:left;padding-left:2px;color:#f44336;font-size:9px;}\n.landing-page-mid .container-temp{width:100%; margin:0 auto;display:inline-block;}\n.container-temp{width:98%;margin:0 auto;display:inline-block;}\n\n\n.landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(255, 255, 255);font-family: oxygenbold; float:left; width:100%; text-align: center; margin-bottom: 20px;}\n.landing-page-mid .sub-heading{ font-size: 2vmin; line-height:1em !important; color: rgba(255, 255, 255, 0.8);font-family: oxygenregular; padding-top:30px; padding-bottom:30px; float:left; width:100%; text-align: center;}\n\n\n\n/*.cp1 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: rgb(247, 218, 100);font-family: montserratbold;}\n.cp1 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1em !important; color: rgba(247, 218, 100, 0.8); font-family: montserratregular;}\n*/\n\n/*theme color 1*/\n.tc1 .check-comp .control input:checked ~ .control__indicator{background:#61bd6d;} \n.tc1 .check-comp .control__indicator.check-set{border:2px solid #61bd6d;}\n.tc1 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#61bd6d;}\n.tc1 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#61bd6d;}\n.tc1 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #61bd6d;}\n.tc1 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc1 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc1 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:5px;color:#61bd6d;}\n.tc1 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc1 .check-comp .control--radio .control__indicator.icon-set i{color:#61bd6d;}\n.tc1 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#61bd6d;border:3px solid #fff;}\n.tc1 .range-slider .irs-bar-edge {border: 1px solid #55a65f; border-right: 0; background: #61bd6d;}\n.tc1 .range-slider .irs-bar {border-top: 1px solid #55a65f;border-bottom: 1px solid #55a65f; background: #61bd6d;}\n.tc1 .range-slider .irs-single { background: #61bd6d; font-family: montserratregular;}\n.tc1 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc1 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\n.tc1 .select .selectize-dropdown .active{background-color:#61bd6d;color:#ffffff;}\n.tc1 .check-comp .control {  color: #61bd6d;}\n.tc1 .check-comp .checkbox-outer.active label{background: #61bd6d; color: #fff;}\n.tc1 .check-comp .checkbox-outer label:hover {background: #61bd6d; color: #fff;}\n.questions .question-section-outer .question-number.tc1 {width: 30px; height: 30px; background: #61bd6d; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n.question-components.tc1{ border-left: 3px solid rgba(97,189,109,0.15);}\n\n/*theme color 1 end*/\n\n/*theme color 2*/\n.tc2 .check-comp .control input:checked ~ .control__indicator{background:#1abc9c;} \n.tc2 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#1abc9c;border:3px solid #fff;}\n.tc2 .check-comp .control__indicator.check-set{border:2px solid #1abc9c;}\n.tc2 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#1abc9c;}\n.tc2 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#1abc9c;}\n.tc2 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #1abc9c;}\n.tc2 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc2 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc2 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#1abc9c;}\n.tc2 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc2 .check-comp .control--radio .control__indicator.icon-set i{color:#1abc9c;}\n.tc2 .range-slider .irs-bar-edge {border: 1px solid #18ab8e; border-right: 0; background: #1abc9c;}\n.tc2 .range-slider .irs-bar {border-top: 1px solid #18ab8e;border-bottom: 1px solid #18ab8e; background: #1abc9c;}\n.tc2 .range-slider .irs-single { background: #1abc9c; font-family: montserratregular;}\n.tc2 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc2 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#1abc9c;bottom:18px}\n.tc2 .select .selectize-dropdown .active{background-color:#1abc9c;color:#ffffff;}\n.tc2 .check-comp .control {  color: #1abc9c;}\n.tc2 .check-comp .checkbox-outer.active label{background: #1abc9c; color: #fff;}\n.tc2 .check-comp .checkbox-outer label:hover {background: #1abc9c; color: #fff;}\n.questions .question-section-outer .question-number.tc2 {width: 30px; height: 30px; background: #1abc9c; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc2{ border-left: 3px solid rgba(97,188,156,0.15);}\n/*theme color 2 end*/\n\n/*theme color 3*/\n.tc3 .range-slider .irs-bar-edge {border: 1px solid #4fa1c4; border-right: 0; background: #54acd2;}\n.tc3 .range-slider .irs-bar {border-top: 1px solid #4fa1c4;border-bottom: 1px solid #4fa1c4; background: #54acd2;}\n.tc3 .range-slider .irs-single { background: #54acd2; font-family: montserratregular;}\n.tc3 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc3 .check-comp .control input:checked ~ .control__indicator{background:#54acd2;} \n.tc3 .check-comp .control__indicator.check-set{border:2px solid #54acd2;}\n.tc3 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#54acd2;}\n.tc3 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#54acd2;}\n.tc3 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #54acd2;}\n.tc3 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc3 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc3 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#54acd2;}\n.tc3 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc3 .check-comp .control--radio .control__indicator.icon-set i{color:#54acd2;}\n.tc3 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#54acd2;border:3px solid #fff;}\n.tc3 .select .selectize-dropdown .active{background-color:#54acd2;color:#ffffff;}\n.tc3 .check-comp .control {  color: #54acd2;}\n.tc3 .check-comp .checkbox-outer.active label{background: #54acd2; color: #fff;}\n.tc3 .check-comp .checkbox-outer label:hover {background: #54acd2; color: #fff;}\n.tc3 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#54acd2;bottom:18px}\n.questions .question-section-outer .question-number.tc3 {width: 30px; height: 30px; background: #54acd2; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc3{ border-left: 3px solid rgba(84,172,210,0.15);}\n\n/*theme color 3 end*/\n\n/*theme color 4*/\n.tc4 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#2c82c9;border:3px solid #fff;}\n.tc4 .range-slider .irs-bar-edge {border: 1px solid #2879bb; border-right: 0; background: #2c82c9;}\n.tc4 .range-slider .irs-bar {border-top: 1px solid #2879bb;border-bottom: 1px solid #2879bb; background: #2c82c9;}\n.tc4 .range-slider .irs-single { background: #2c82c9; font-family: montserratregular;}\n.tc4 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc4 .check-comp .control input:checked ~ .control__indicator{background:#2c82c9;} \n.tc4 .check-comp .control__indicator.check-set{border:2px solid #2c82c9;}\n.tc4 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#2c82c9;}\n.tc4 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#2c82c9;}\n.tc4 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #2c82c9;}\n.tc4 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc4 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc4 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#2c82c9;}\n.tc4 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc4 .check-comp .control--radio .control__indicator.icon-set i{color:#2c82c9;}\n.tc4 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#2c82c9;border:3px solid #fff;}\n.tc4 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#2c82c9;bottom:18px}\n.tc4 .select .selectize-dropdown .active{background-color:#2c82c9;color:#ffffff;}\n.tc4 .check-comp .control {  color: #2c82c9;}\n.tc4 .check-comp .checkbox-outer.active label{background: #2c82c9; color: #fff;}\n.tc4 .check-comp .checkbox-outer label:hover {background: #2c82c9; color: #fff;}\n.questions .question-section-outer .question-number.tc4 {width: 30px; height: 30px; background: #2c82c9; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc4{ border-left: 3px solid rgba(44,130,201,0.15);}\n .tc4 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#2c82c9;bottom:18px}\n\n/*theme color 4 end*/\n\n/*theme color 5*/\n.tc5 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#9365b8;border:3px solid #fff;}\n.tc5 .range-slider .irs-bar-edge {border: 1px solid #865ca8; border-right: 0; background: #9365b8;}\n.tc5 .range-slider .irs-bar {border-top: 1px solid #865ca8;border-bottom: 1px solid #865ca8; background: #9365b8;}\n.tc5 .range-slider .irs-single { background: #9365b8; font-family: montserratregular;}\n.tc5 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc5 .check-comp .control input:checked ~ .control__indicator{background:#9365b8;} \n.tc5 .check-comp .control__indicator.check-set{border:2px solid #9365b8;}\n.tc5 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#9365b8;}\n.tc5 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#9365b8;}\n.tc5 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #9365b8;}\n.tc5 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc5 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc5 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#9365b8;}\n.tc5 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc5 .check-comp .control--radio .control__indicator.icon-set i{color:#9365b8;}\n.tc5 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#9365b8;border:3px solid #fff;}\n.tc5 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#9365b8;bottom:18px}\n.tc5 .select .selectize-dropdown .active{background-color:#9365b8;color:#ffffff;}\n.tc5 .check-comp .control {  color: #9365b8;}\n.tc5 .check-comp .checkbox-outer.active label{background: #9365b8; color: #fff;}\n.tc5 .check-comp .checkbox-outer label:hover {background: #9365b8; color: #fff;}\n.questions .question-section-outer .question-number.tc5 {width: 30px; height: 30px; background: #9365b8; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc5{ border-left: 3px solid rgba(147,101,184,0.15);}\n .tc5 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#9365b8;bottom:18px}\n/*theme color 5 end*/\n\n/*theme color 6*/\n.tc6 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#475577;border:3px solid #fff;}\n.tc6 .range-slider .irs-bar-edge {border: 1px solid #3f4c6a; border-right: 0; background: #475577;}\n.tc6 .range-slider .irs-bar {border-top: 1px solid #3f4c6a;border-bottom: 1px solid #3f4c6a; background: #475577;}\n.tc6 .range-slider .irs-single { background: #475577; font-family: montserratregular;}\n.tc6 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc6 .check-comp .control input:checked ~ .control__indicator{background:#475577;} \n.tc6 .check-comp .control__indicator.check-set{border:2px solid #475577;}\n.tc6 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#475577;}\n.tc6 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#475577;}\n.tc6 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #475577;}\n.tc6 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc6 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc6 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#475577;}\n.tc6 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc6 .check-comp .control--radio .control__indicator.icon-set i{color:#475577;}\n.tc6 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#475577;border:3px solid #fff;}\n.tc6 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#475577;bottom:18px}\n.tc6 .select .selectize-dropdown .active{background-color:#475577;color:#ffffff;}\n.tc6 .check-comp .control {  color: #475577;}\n.tc6 .check-comp .checkbox-outer.active label{background: #475577; color: #fff;}\n.tc6 .check-comp .checkbox-outer label:hover {background: #475577; color: #fff;}\n.questions .question-section-outer .question-number.tc6 {width: 30px; height: 30px; background: #9365b8; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc6{ border-left: 3px solid rgba(147,101,184,0.15);}\n .tc6 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#9365b8;bottom:18px}\n/*theme color 6 end*/\n\n/*theme color 7*/\n.tc7 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#cccccc;border:3px solid #fff;}\n.tc7 .range-slider .irs-bar-edge {border: 1px solid #bcbbbb; border-right: 0; background: #cccccc;}\n.tc7 .range-slider .irs-bar {border-top: 1px solid #bcbbbb;border-bottom: 1px solid #bcbbbb; background: #cccccc;}\n.tc7 .range-slider .irs-single { background: #cccccc; font-family: montserratregular;}\n.tc7 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc7 .check-comp .control input:checked ~ .control__indicator{background:#cccccc;} \n.tc7 .check-comp .control__indicator.check-set{border:2px solid #cccccc;}\n.tc7 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#cccccc;}\n.tc7 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#cccccc;}\n.tc7 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #cccccc;}\n.tc7 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc7 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc7 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#cccccc;}\n.tc7 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc7 .check-comp .control--radio .control__indicator.icon-set i{color:#cccccc;}\n.tc7 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#cccccc;border:3px solid #fff;}\n.tc7 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#cccccc;bottom:18px}\n.tc7 .select .selectize-dropdown .active{background-color:#cccccc;color:#ffffff;}\n.tc7 .check-comp .control {  color: #cccccc;}\n.tc7 .check-comp .checkbox-outer.active label{background: #cccccc; color: #fff;}\n.tc7 .check-comp .checkbox-outer label:hover {background: #cccccc; color: #fff;}\n.questions .question-section-outer .question-number.tc7 {width: 30px; height: 30px; background: #cccccc; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc7{ border-left: 3px solid rgba(204,204,204,0.15);}\n .tc7 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#cccccc;bottom:18px}\n/*theme color 7 end*/\n\n/*theme color 8*/\n.tc8 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#41a85f;border:3px solid #fff;}\n.tc8 .range-slider .irs-bar-edge {border: 1px solid #3b9956; border-right: 0; background: #41a85f;}\n.tc8 .range-slider .irs-bar {border-top: 1px solid #3b9956;border-bottom: 1px solid #3b9956; background: #41a85f;}\n.tc8 .range-slider .irs-single { background: #41a85f; font-family: montserratregular;}\n.tc8 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc8 .check-comp .control input:checked ~ .control__indicator{background:#41a85f;} \n.tc8 .check-comp .control__indicator.check-set{border:2px solid #41a85f;}\n.tc8 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#41a85f;}\n.tc8 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#41a85f;}\n.tc8 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #41a85f;}\n.tc8 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc8 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc8 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#41a85f;}\n.tc8 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc8 .check-comp .control--radio .control__indicator.icon-set i{color:#41a85f;}\n.tc8 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#41a85f;border:3px solid #fff;}\n.tc8 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#41a85f;bottom:18px}\n.tc8 .select .selectize-dropdown .active{background-color:#41a85f;color:#ffffff;}\n.tc8 .check-comp .control {  color: #41a85f;}\n.tc8 .check-comp .checkbox-outer.active label{background: #41a85f; color: #fff;}\n.tc8 .check-comp .checkbox-outer label:hover {background: #41a85f; color: #fff;}\n.questions .question-section-outer .question-number.tc8 {width: 30px; height: 30px; background: #41a85f; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc8{ border-left: 3px solid rgba(65,168,95,0.15);}\n .tc8 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#41a85f;bottom:18px}\n/*theme color 8 end*/\n\n\n/*theme color 9*/\n.tc9 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#00a885;border:3px solid #fff;}\n.tc9 .range-slider .irs-bar-edge {border: 1px solid #019778; border-right: 0; background: #00a885;}\n.tc9 .range-slider .irs-bar {border-top: 1px solid #019778;border-bottom: 1px solid #019778; background: #00a885;}\n.tc9 .range-slider .irs-single { background: #00a885; font-family: montserratregular;}\n.tc9 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc9 .check-comp .control input:checked ~ .control__indicator{background:#00a885;} \n.tc9 .check-comp .control__indicator.check-set{border:2px solid #00a885;}\n.tc9 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#00a885;}\n.tc9 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#00a885;}\n.tc9 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #00a885;}\n.tc9 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc9 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc9 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#00a885;}\n.tc9 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc9 .check-comp .control--radio .control__indicator.icon-set i{color:#00a885;}\n.tc9 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#00a885;border:3px solid #fff;}\n.tc9 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#00a885;bottom:18px}\n.tc9 .select .selectize-dropdown .active{background-color:#00a885;color:#ffffff;}\n.tc9 .check-comp .control {  color: #00a885;}\n.tc9 .check-comp .checkbox-outer.active label{background: #00a885; color: #fff;}\n.tc9 .check-comp .checkbox-outer label:hover {background: #00a885; color: #fff;}\n.questions .question-section-outer .question-number.tc9 {width: 30px; height: 30px; background: #00a885; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc9{ border-left: 3px solid rgba(0,168,133,0.15);}\n .tc9 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#00a885;bottom:18px}\n/*theme color 9 end*/\n\n/*theme color 10*/\n.tc10 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#3d8eb9;border:3px solid #fff;}\n.tc10 .range-slider .irs-bar-edge {border: 1px solid #3984ac; border-right: 0; background: #3d8eb9;}\n.tc10 .range-slider .irs-bar {border-top: 1px solid #3984ac;border-bottom: 1px solid #3984ac; background: #3d8eb9;}\n.tc10 .range-slider .irs-single { background: #3d8eb9; font-family: montserratregular;}\n.tc10 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc10 .check-comp .control input:checked ~ .control__indicator{background:#3d8eb9;} \n.tc10 .check-comp .control__indicator.check-set{border:2px solid #3d8eb9;}\n.tc10 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#3d8eb9;}\n.tc10 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#3d8eb9;}\n.tc10 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #3d8eb9;}\n.tc10 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc10 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc10 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#3d8eb9;}\n.tc10 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc10 .check-comp .control--radio .control__indicator.icon-set i{color:#3d8eb9;}\n.tc10 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#3d8eb9;border:3px solid #fff;}\n.tc10 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#3d8eb9;bottom:18px}\n.tc10 .select .selectize-dropdown .active{background-color:#3d8eb9;color:#ffffff;}\n.tc10 .check-comp .control {  color: #3d8eb9;}\n.tc10 .check-comp .checkbox-outer.active label{background: #3d8eb9; color: #fff;}\n.tc10 .check-comp .checkbox-outer label:hover {background: #3d8eb9; color: #fff;}\n.questions .question-section-outer .question-number.tc10 {width: 30px; height: 30px; background: #3d8eb9; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc10{ border-left: 3px solid rgba(61,142,185,0.15);}\n .tc10 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#3d8eb9;bottom:18px}\n/*theme color 10 end*/\n\n\n/*theme color 11*/\n.tc11 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#2969b0;border:3px solid #fff;}\n.tc11 .range-slider .irs-bar-edge {border: 1px solid #255fa0; border-right: 0; background: #2969b0;}\n.tc11 .range-slider .irs-bar {border-top: 1px solid #255fa0;border-bottom: 1px solid #255fa0; background: #2969b0;}\n.tc11 .range-slider .irs-single { background: #2969b0; font-family: montserratregular;}\n.tc11 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc11 .check-comp .control input:checked ~ .control__indicator{background:#2969b0;} \n.tc11 .check-comp .control__indicator.check-set{border:2px solid #2969b0;}\n.tc11 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#2969b0;}\n.tc11 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#2969b0;}\n.tc11 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #2969b0;}\n.tc11 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc11 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc11 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#2969b0;}\n.tc11 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc11 .check-comp .control--radio .control__indicator.icon-set i{color:#2969b0;}\n.tc11 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#2969b0;border:3px solid #fff;}\n.tc11 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#2969b0;bottom:18px}\n.tc11 .select .selectize-dropdown .active{background-color:#2969b0;color:#ffffff;}\n.tc11 .check-comp .control {  color: #2969b0;}\n.tc11 .check-comp .checkbox-outer.active label{background: #2969b0; color: #fff;}\n.tc11 .check-comp .checkbox-outer label:hover {background: #2969b0; color: #fff;}\n.questions .question-section-outer .question-number.tc11 {width: 30px; height: 30px; background: #2969b0; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc11{ border-left: 3px solid rgba(41,105,176,0.15);}\n .tc11 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#2969b0;bottom:18px}\n/*theme color 11 end*/\n\n\n/*theme color 12*/\n.tc12 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#553982;border:3px solid #fff;}\n.tc12 .range-slider .irs-bar-edge {border: 1px solid #4a3272; border-right: 0; background: #553982;}\n.tc12 .range-slider .irs-bar {border-top: 1px solid #4a3272;border-bottom: 1px solid #4a3272; background: #553982;}\n.tc12 .range-slider .irs-single { background: #553982; font-family: montserratregular;}\n.tc12 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc12 .check-comp .control input:checked ~ .control__indicator{background:#553982;} \n.tc12 .check-comp .control__indicator.check-set{border:2px solid #553982;}\n.tc12 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#553982;}\n.tc12 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#553982;}\n.tc12 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #553982;}\n.tc12 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc12 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc12 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#553982;}\n.tc12 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc12 .check-comp .control--radio .control__indicator.icon-set i{color:#553982;}\n.tc12 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#553982;border:3px solid #fff;}\n.tc12 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#553982;bottom:18px}\n.tc12 .select .selectize-dropdown .active{background-color:#553982;color:#ffffff;}\n.tc12 .check-comp .control {  color: #553982;}\n.tc12 .check-comp .checkbox-outer.active label{background: #553982; color: #fff;}\n.tc12 .check-comp .checkbox-outer label:hover {background: #553982; color: #fff;}\n.questions .question-section-outer .question-number.tc12 {width: 30px; height: 30px; background: #553982; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc12{ border-left: 3px solid rgba(85,57,130,0.15);}\n .tc12 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#553982;bottom:18px}\n/*theme color 12 end*/\n\n\n/*theme color 13*/\n.tc13 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#28324e;border:3px solid #fff;}\n.tc13 .range-slider .irs-bar-edge {border: 1px solid #212a41; border-right: 0; background: #28324e;}\n.tc13 .range-slider .irs-bar {border-top: 1px solid #212a41;border-bottom: 1px solid #212a41; background: #28324e;}\n.tc13 .range-slider .irs-single { background: #28324e; font-family: montserratregular;}\n.tc13 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc13 .check-comp .control input:checked ~ .control__indicator{background:#28324e;} \n.tc13 .check-comp .control__indicator.check-set{border:2px solid #28324e;}\n.tc13 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#28324e;}\n.tc13 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#28324e;}\n.tc13 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #28324e;}\n.tc13 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc13 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc13 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#28324e;}\n.tc13 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc13 .check-comp .control--radio .control__indicator.icon-set i{color:#28324e;}\n.tc13 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#28324e;border:3px solid #fff;}\n.tc13 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#28324e;bottom:18px}\n.tc13 .select .selectize-dropdown .active{background-color:#28324e;color:#ffffff;}\n.tc13 .check-comp .control {  color: #28324e;}\n.tc13 .check-comp .checkbox-outer.active label{background: #28324e; color: #fff;}\n.tc13 .check-comp .checkbox-outer label:hover {background: #28324e; color: #fff;}\n.questions .question-section-outer .question-number.tc13 {width: 30px; height: 30px; background: #28324e; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc13{ border-left: 3px solid rgba(40,50,78,0.15);}\n .tc13 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#28324e;bottom:18px}\n/*theme color 13 end*/\n\n\n/*theme color 14*/\n.tc14 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#000000;border:3px solid #fff;}\n.tc14 .range-slider .irs-bar-edge {border: 1px solid #000000; border-right: 0; background: #000000;}\n.tc14 .range-slider .irs-bar {border-top: 1px solid #000000;border-bottom: 1px solid #000000; background: #000000;}\n.tc14 .range-slider .irs-single { background: #000000; font-family: montserratregular;}\n.tc14 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc14 .check-comp .control input:checked ~ .control__indicator{background:#000000;} \n.tc14 .check-comp .control__indicator.check-set{border:2px solid #000000;}\n.tc14 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#000000;}\n.tc14 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#000000;}\n.tc14 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #000000;}\n.tc14 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc14 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc14 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#000000;}\n.tc14 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc14 .check-comp .control--radio .control__indicator.icon-set i{color:#000000;}\n.tc14 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#000000;border:3px solid #fff;}\n.tc14 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#000000;bottom:18px}\n.tc14 .select .selectize-dropdown .active{background-color:#000000;color:#ffffff;}\n.tc14 .check-comp .control {  color: #000000;}\n.tc14 .check-comp .checkbox-outer.active label{background: #000000; color: #fff;}\n.tc14 .check-comp .checkbox-outer label:hover {background: #000000; color: #fff;}\n.questions .question-section-outer .question-number.tc14 {width: 30px; height: 30px; background: #000000; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc14{ border-left: 3px solid rgba(0,0,0,0.15);}\n .tc14 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#000000;bottom:18px}\n/*theme color 14 end*/\n\n/*theme color 15*/\n.tc15 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f7da64;border:3px solid #fff;}\n.tc15 .range-slider .irs-bar-edge {border: 1px solid #e7cc5d; border-right: 0; background: #f7da64;}\n.tc15 .range-slider .irs-bar {border-top: 1px solid #e7cc5d;border-bottom: 1px solid #e7cc5d; background: #f7da64;}\n.tc15 .range-slider .irs-single { background: #f7da64; font-family: montserratregular;}\n.tc15 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc15 .check-comp .control input:checked ~ .control__indicator{background:#f7da64;} \n.tc15 .check-comp .control__indicator.check-set{border:2px solid #f7da64;}\n.tc15 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#f7da64;}\n.tc15 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#f7da64;}\n.tc15 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #f7da64;}\n.tc15 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc15 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc15 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#f7da64;}\n.tc15 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc15 .check-comp .control--radio .control__indicator.icon-set i{color:#f7da64;}\n.tc15 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f7da64;border:3px solid #fff;}\n.tc15 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#f7da64;bottom:18px}\n.tc15 .select .selectize-dropdown .active{background-color:#f7da64;color:#ffffff;}\n.tc15 .check-comp .control {  color: #f7da64;}\n.tc15 .check-comp .checkbox-outer.active label{background: #f7da64; color: #fff;}\n.tc15 .check-comp .checkbox-outer label:hover {background: #f7da64; color: #fff;}\n.questions .question-section-outer .question-number.tc15 {width: 30px; height: 30px; background: #f7da64; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc15{ border-left: 3px solid rgba(0,0,0,0.15);}\n .tc15 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#f7da64;bottom:18px}\n/*theme color 15 end*/\n\n\n/*theme color 16*/\n.tc16 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#fba026;border:3px solid #fff;}\n.tc16 .range-slider .irs-bar-edge {border: 1px solid #ec9724; border-right: 0; background: #fba026;}\n.tc16 .range-slider .irs-bar {border-top: 1px solid #ec9724;border-bottom: 1px solid #ec9724; background: #fba026;}\n.tc16 .range-slider .irs-single { background: #fba026; font-family: montserratregular;}\n.tc16 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc16 .check-comp .control input:checked ~ .control__indicator{background:#fba026;} \n.tc16 .check-comp .control__indicator.check-set{border:2px solid #fba026;}\n.tc16 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#fba026;}\n.tc16 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#fba026;}\n.tc16 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #fba026;}\n.tc16 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc16 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc16 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#fba026;}\n.tc16 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc16 .check-comp .control--radio .control__indicator.icon-set i{color:#fba026;}\n.tc16 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#fba026;border:3px solid #fff;}\n.tc16 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#fba026;bottom:18px}\n.tc16 .select .selectize-dropdown .active{background-color:#fba026;color:#ffffff;}\n.tc16 .check-comp .control {  color: #fba026;}\n.tc16 .check-comp .checkbox-outer.active label{background: #fba026; color: #fff;}\n.tc16 .check-comp .checkbox-outer label:hover {background: #fba026; color: #fff;}\n.questions .question-section-outer .question-number.tc16 {width: 30px; height: 30px; background: #fba026; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc16{ border-left: 3px solid rgba(251,160,38,0.15);}\n .tc16 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#fba026;bottom:18px}\n/*theme color 16 end*/\n\n\n/*theme color 17*/\n.tc17 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#eb6b56;border:3px solid #fff;}\n.tc17 .range-slider .irs-bar-edge {border: 1px solid #de6652; border-right: 0; background: #eb6b56;}\n.tc17 .range-slider .irs-bar {border-top: 1px solid #de6652;border-bottom: 1px solid #de6652; background: #eb6b56;}\n.tc17 .range-slider .irs-single { background: #eb6b56; font-family: montserratregular;}\n.tc17 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc17 .check-comp .control input:checked ~ .control__indicator{background:#eb6b56;} \n.tc17 .check-comp .control__indicator.check-set{border:2px solid #eb6b56;}\n.tc17 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#eb6b56;}\n.tc17 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#eb6b56;}\n.tc17 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #eb6b56;}\n.tc17 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc17 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc17 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#eb6b56;}\n.tc17 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc17 .check-comp .control--radio .control__indicator.icon-set i{color:#eb6b56;}\n.tc17 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#eb6b56;border:3px solid #fff;}\n.tc17 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#eb6b56;bottom:18px}\n.tc17 .select .selectize-dropdown .active{background-color:#eb6b56;color:#ffffff;}\n.tc17 .check-comp .control {  color: #eb6b56;}\n.tc17 .check-comp .checkbox-outer.active label{background: #eb6b56; color: #fff;}\n.tc17 .check-comp .checkbox-outer label:hover {background: #eb6b56; color: #fff;}\n.questions .question-section-outer .question-number.tc17 {width: 30px; height: 30px; background: #eb6b56; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc17{ border-left: 3px solid rgba(235,107,86,0.15);}\n .tc17 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#eb6b56;bottom:18px}\n/*theme color 17 end*/\n\n\n/*theme color 18*/\n.tc18 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#e25041;border:3px solid #fff;}\n.tc18 .range-slider .irs-bar-edge {border: 1px solid #d24a3c; border-right: 0; background: #d24a3c;}\n.tc18 .range-slider .irs-bar {border-top: 1px solid #d24a3c;border-bottom: 1px solid #d24a3c; background: #e25041;}\n.tc18 .range-slider .irs-single { background: #e25041; font-family: montserratregular;}\n.tc18 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc18 .check-comp .control input:checked ~ .control__indicator{background:#e25041;} \n.tc18 .check-comp .control__indicator.check-set{border:2px solid #e25041;}\n.tc18 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#e25041;}\n.tc18 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#e25041;}\n.tc18 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #e25041;}\n.tc18 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc18 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc18 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#e25041;}\n.tc18 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc18 .check-comp .control--radio .control__indicator.icon-set i{color:#e25041;}\n.tc18 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#e25041;border:3px solid #fff;}\n.tc18 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#e25041;bottom:18px}\n.tc18 .select .selectize-dropdown .active{background-color:#e25041;color:#ffffff;}\n.tc18 .check-comp .control {  color: #e25041;}\n.tc18 .check-comp .checkbox-outer.active label{background: #e25041; color: #fff;}\n.tc18 .check-comp .checkbox-outer label:hover {background: #e25041; color: #fff;}\n.questions .question-section-outer .question-number.tc18 {width: 30px; height: 30px; background: #e25041; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc18{ border-left: 3px solid rgba(226,80,65,0.15);}\n .tc18 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#e25041;bottom:18px}\n/*theme color 18 end*/\n\n\n/*theme color 19*/\n.tc19 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#a38f84;border:3px solid #fff;}\n.tc19 .range-slider .irs-bar-edge {border: 1px solid #948278; border-right: 0; background: #a38f84;}\n.tc19 .range-slider .irs-bar {border-top: 1px solid #948278;border-bottom: 1px solid #948278; background: #a38f84;}\n.tc19 .range-slider .irs-single { background: #a38f84; font-family: montserratregular;}\n.tc19 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc19 .check-comp .control input:checked ~ .control__indicator{background:#a38f84;} \n.tc19 .check-comp .control__indicator.check-set{border:2px solid #a38f84;}\n.tc19 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#a38f84;}\n.tc19 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#a38f84;}\n.tc19 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #a38f84;}\n.tc19 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc19 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc19 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#a38f84;}\n.tc19 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc19 .check-comp .control--radio .control__indicator.icon-set i{color:#a38f84;}\n.tc19 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#a38f84;border:3px solid #fff;}\n.tc19 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#a38f84;bottom:18px}\n.tc19 .select .selectize-dropdown .active{background-color:#a38f84;color:#ffffff;}\n.tc19 .check-comp .control {  color: #a38f84;}\n.tc19 .check-comp .checkbox-outer.active label{background: #a38f84; color: #fff;}\n.tc19 .check-comp .checkbox-outer label:hover {background: #a38f84; color: #fff;}\n.questions .question-section-outer .question-number.tc19 {width: 30px; height: 30px; background: #a38f84; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc19{ border-left: 3px solid rgba(226,143,132,0.15);}\n .tc19 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#a38f84;bottom:18px}\n/*theme color 19 end*/\n\n\n/*theme color 20*/\n.tc20 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#efefef;border:3px solid #fff;}\n.tc20 .range-slider .irs-bar-edge {border: 1px solid #e0e0e0; border-right: 0; background: #efefef;}\n.tc20 .range-slider .irs-bar {border-top: 1px solid #e0e0e0;border-bottom: 1px solid #e0e0e0; background: #efefef;}\n.tc20 .range-slider .irs-single { background: #efefef; font-family: montserratregular;}\n.tc20 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc20 .check-comp .control input:checked ~ .control__indicator{background:#efefef;} \n.tc20 .check-comp .control__indicator.check-set{border:2px solid #efefef;}\n.tc20 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#efefef;}\n.tc20 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#efefef;}\n.tc20 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #efefef;}\n.tc20 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc20 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc20 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#efefef;}\n.tc20 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc20 .check-comp .control--radio .control__indicator.icon-set i{color:#efefef;}\n.tc20 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#efefef;border:3px solid #fff;}\n.tc20 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#efefef;bottom:18px}\n.tc20 .select .selectize-dropdown .active{background-color:#efefef;color:#ffffff;}\n.tc20 .check-comp .control {  color: #efefef;}\n.tc20 .check-comp .checkbox-outer.active label{background: #efefef; color: #fff;}\n.tc20 .check-comp .checkbox-outer label:hover {background: #efefef; color: #fff;}\n.questions .question-section-outer .question-number.tc20 {width: 30px; height: 30px; background: #efefef; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc20{ border-left: 3px solid rgba(239,239,239,0.15);}\n .tc20 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#efefef;bottom:18px}\n/*theme color 20 end*/\n\n\n/*theme color 21*/\n.tc21 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#ffffff;border:3px solid #fff;}\n.tc21 .range-slider .irs-bar-edge {border: 1px solid #efeeee; border-right: 0; background: #ffffff;}\n.tc21 .range-slider .irs-bar {border-top: 1px solid #efeeee;border-bottom: 1px solid #efeeee; background: #ffffff;}\n.tc21 .range-slider .irs-single { background: #ffffff; font-family: montserratregular;}\n.tc21 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc21 .check-comp .control input:checked ~ .control__indicator{background:#ffffff;} \n.tc21 .check-comp .control__indicator.check-set{border:2px solid #ffffff;}\n.tc21 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#ffffff;}\n.tc21 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#ffffff;}\n.tc21 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #ffffff;}\n.tc21 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc21 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc21 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#ffffff;}\n.tc21 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc21 .check-comp .control--radio .control__indicator.icon-set i{color:#ffffff;}\n.tc21 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#ffffff;border:3px solid #fff;}\n.tc21 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#000000;bottom:18px}\n.tc21 .select .selectize-dropdown .active{background-color:#ffffff;color:#000000;}\n.tc21 .check-comp .control {  color: #ffffff;}\n.tc21 .check-comp .checkbox-outer.active label{background: #ffffff; color: #fff;}\n.tc21 .check-comp .checkbox-outer label:hover {background: #ffffff; color: #fff;}\n.questions .question-section-outer .question-number.tc21 {width: 30px; height: 30px; background: #ffffff; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc21{ border-left: 3px solid rgba(255,255,255,0.15);}\n .tc21 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#ffffff;bottom:18px}\n/*theme color 21 end*/\n\n\n/*theme color 22*/\n.tc22 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#fac51c;border:3px solid #fff;}\n.tc22 .range-slider .irs-bar-edge {border: 1px solid #eab91c; border-right: 0; background: #fac51c;}\n.tc22 .range-slider .irs-bar {border-top: 1px solid #eab91c;border-bottom: 1px solid #eab91c; background: #fac51c;}\n.tc22 .range-slider .irs-single { background: #fac51c; font-family: montserratregular;}\n.tc22 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc22 .check-comp .control input:checked ~ .control__indicator{background:#fac51c;} \n.tc22 .check-comp .control__indicator.check-set{border:2px solid #fac51c;}\n.tc22 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#fac51c;}\n.tc22 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#fac51c;}\n.tc22 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #fac51c;}\n.tc22 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc22 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc22 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#fac51c;}\n.tc22 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc22 .check-comp .control--radio .control__indicator.icon-set i{color:#fac51c;}\n.tc22 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#fac51c;border:3px solid #fff;}\n.tc22 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#fac51c;bottom:18px}\n.tc22 .select .selectize-dropdown .active{background-color:#fac51c;color:#ffffff;}\n.tc22 .check-comp .control {  color: #fac51c;}\n.tc22 .check-comp .checkbox-outer.active label{background: #fac51c; color: #fff;}\n.tc22 .check-comp .checkbox-outer label:hover {background: #fac51c; color: #fff;}\n.questions .question-section-outer .question-number.tc22 {width: 30px; height: 30px; background: #fac51c; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc22{ border-left: 3px solid rgba(250,197,28,0.15);}\n .tc22 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#fac51c;bottom:18px}\n/*theme color 22 end*/\n\n\n/*theme color 23*/\n.tc23 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f37934;border:3px solid #fff;}\n.tc23 .range-slider .irs-bar-edge {border: 1px solid #e57231; border-right: 0; background: #f37934;}\n.tc23 .range-slider .irs-bar {border-top: 1px solid #e57231;border-bottom: 1px solid #e57231; background: #f37934;}\n.tc23 .range-slider .irs-single { background: #f37934; font-family: montserratregular;}\n.tc23 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc23 .check-comp .control input:checked ~ .control__indicator{background:#f37934;} \n.tc23 .check-comp .control__indicator.check-set{border:2px solid #f37934;}\n.tc23 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#f37934;}\n.tc23 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#f37934;}\n.tc23 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #f37934;}\n.tc23 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc23 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc23 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#f37934;}\n.tc23 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc23 .check-comp .control--radio .control__indicator.icon-set i{color:#f37934;}\n.tc23 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#f37934;border:3px solid #fff;}\n.tc23 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#f37934;bottom:18px}\n.tc23 .select .selectize-dropdown .active{background-color:#f37934;color:#ffffff;}\n.tc23 .check-comp .control {  color: #f37934;}\n.tc23 .check-comp .checkbox-outer.active label{background: #f37934; color: #fff;}\n.tc23 .check-comp .checkbox-outer label:hover {background: #f37934; color: #fff;}\n.questions .question-section-outer .question-number.tc23 {width: 30px; height: 30px; background: #f37934; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc23{ border-left: 3px solid rgba(243,121,52,0.15);}\n .tc23 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#f37934;bottom:18px}\n/*theme color 23 end*/\n\n\n/*theme color 24*/\n.tc24 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#d14841;border:3px solid #fff;}\n.tc24 .range-slider .irs-bar-edge {border: 1px solid #c5443d; border-right: 0; background: #d14841;}\n.tc24 .range-slider .irs-bar {border-top: 1px solid #c5443d;border-bottom: 1px solid #c5443d; background: #d14841;}\n.tc24 .range-slider .irs-single { background: #d14841; font-family: montserratregular;}\n.tc24 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc24 .check-comp .control input:checked ~ .control__indicator{background:#d14841;} \n.tc24 .check-comp .control__indicator.check-set{border:2px solid #d14841;}\n.tc24 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#d14841;}\n.tc24 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#d14841;}\n.tc24 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #d14841;}\n.tc24 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc24 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc24 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#d14841;}\n.tc24 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc24 .check-comp .control--radio .control__indicator.icon-set i{color:#d14841;}\n.tc24 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#d14841;border:3px solid #fff;}\n.tc24 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#d14841;bottom:18px}\n.tc24 .select .selectize-dropdown .active{background-color:#d14841;color:#ffffff;}\n.tc24 .check-comp .control {  color: #d14841;}\n.tc24 .check-comp .checkbox-outer.active label{background: #d14841; color: #fff;}\n.tc24 .check-comp .checkbox-outer label:hover {background: #d14841; color: #fff;}\n.questions .question-section-outer .question-number.tc24 {width: 30px; height: 30px; background: #d14841; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc24{ border-left: 3px solid rgba(209,72,65,0.15);}\n .tc24 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#d14841;bottom:18px}\n/*theme color 24 end*/\n\n\n/*theme color 25*/\n.tc25 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#b8312f;border:3px solid #fff;}\n.tc25 .range-slider .irs-bar-edge {border: 1px solid #a92e2c; border-right: 0; background: #b8312f;}\n.tc25 .range-slider .irs-bar {border-top: 1px solid #a92e2c;border-bottom: 1px solid #a92e2c; background: #b8312f;}\n.tc25 .range-slider .irs-single { background: #b8312f; font-family: montserratregular;}\n.tc25 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc25 .check-comp .control input:checked ~ .control__indicator{background:#b8312f;} \n.tc25 .check-comp .control__indicator.check-set{border:2px solid #b8312f;}\n.tc25 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#b8312f;}\n.tc25 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#b8312f;}\n.tc25 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #b8312f;}\n.tc25 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc25 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc25 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#b8312f;}\n.tc25 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc25 .check-comp .control--radio .control__indicator.icon-set i{color:#b8312f;}\n.tc25 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#b8312f;border:3px solid #fff;}\n.tc25 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#b8312f;bottom:18px}\n.tc25 .select .selectize-dropdown .active{background-color:#b8312f;color:#ffffff;}\n.tc25 .check-comp .control {  color: #b8312f;}\n.tc25 .check-comp .checkbox-outer.active label{background: #b8312f; color: #fff;}\n.tc25 .check-comp .checkbox-outer label:hover {background: #b8312f; color: #fff;}\n.questions .question-section-outer .question-number.tc25 {width: 30px; height: 30px; background: #b8312f; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc25{ border-left: 3px solid rgba(184,49,47,0.15);}\n .tc25 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#b8312f;bottom:18px}\n/*theme color 25 end*/\n\n\n/*theme color 26*/ \n.tc26 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#7c706b;border:3px solid #fff;}\n.tc26 .range-slider .irs-bar-edge {border: 1px solid #716661; border-right: 0; background: #7c706b;}\n.tc26 .range-slider .irs-bar {border-top: 1px solid #716661;border-bottom: 1px solid #716661; background: #7c706b;}\n.tc26 .range-slider .irs-single { background: #7c706b; font-family: montserratregular;}\n.tc26 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc26 .check-comp .control input:checked ~ .control__indicator{background:#7c706b;} \n.tc26 .check-comp .control__indicator.check-set{border:2px solid #7c706b;}\n.tc26 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#7c706b;}\n.tc26 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#7c706b;}\n.tc26 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #7c706b;}\n.tc26 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc26 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc26 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#7c706b;}\n.tc26 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc26 .check-comp .control--radio .control__indicator.icon-set i{color:#7c706b;}\n.tc26 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#7c706b;border:3px solid #fff;}\n.tc26 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#7c706b;bottom:18px}\n.tc26 .select .selectize-dropdown .active{background-color:#7c706b;color:#ffffff;}\n.tc26 .check-comp .control {  color: #7c706b;}\n.tc26 .check-comp .checkbox-outer.active label{background: #7c706b; color: #fff;}\n.tc26 .check-comp .checkbox-outer label:hover {background: #7c706b; color: #fff;}\n.questions .question-section-outer .question-number.tc26 {width: 30px; height: 30px; background: #7c706b; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc26{ border-left: 3px solid rgba(124,112,107,0.15);}\n .tc26 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#7c706b;bottom:18px}\n/*theme color 26 end*/\n\n\n/*theme color 27*/\n.tc27 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#d1d5d8;border:3px solid #fff;}\n.tc27 .range-slider .irs-bar-edge {border: 1px solid #c4c8cb; border-right: 0; background: #d1d5d8;}\n.tc27 .range-slider .irs-bar {border-top: 1px solid #c4c8cb;border-bottom: 1px solid #c4c8cb; background: #d1d5d8;}\n.tc27 .range-slider .irs-single { background: #d1d5d8; font-family: montserratregular;}\n.tc27 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc27 .check-comp .control input:checked ~ .control__indicator{background:#d1d5d8;} \n.tc27 .check-comp .control__indicator.check-set{border:2px solid #d1d5d8;}\n.tc27 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#d1d5d8;}\n.tc27 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#d1d5d8;}\n.tc27 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #d1d5d8;}\n.tc27 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc27 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc27 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#d1d5d8;}\n.tc27 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc27 .check-comp .control--radio .control__indicator.icon-set i{color:#d1d5d8;}\n.tc27 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#d1d5d8;border:3px solid #fff;}\n.tc27 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#d1d5d8;bottom:18px}\n.tc27 .select .selectize-dropdown .active{background-color:#d1d5d8;color:#ffffff;}\n.tc27 .check-comp .control {  color: #d1d5d8;}\n.tc27 .check-comp .checkbox-outer.active label{background: #d1d5d8; color: #fff;}\n.tc27 .check-comp .checkbox-outer label:hover {background: #d1d5d8; color: #fff;}\n.questions .question-section-outer .question-number.tc27 {width: 30px; height: 30px; background: #d1d5d8; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc27{ border-left: 3px solid rgba(209,213,216,0.15);}\n .tc27 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#d1d5d8;bottom:18px}\n/*theme color 27 end*/\n\n\n/*theme color 27*/\n.tc28 .radio-outer .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#d1d5d8;border:3px solid #fff;}\n.tc28 .range-slider .irs-bar-edge {border: 1px solid #00aea5; border-right: 0; background: #00aea5;}\n.tc28 .range-slider .irs-bar {border-top: 1px solid #00aea5;border-bottom: 1px solid #00aea5; background: #00aea5;}\n.tc28 .range-slider .irs-single { background: #d1d5d8; font-family: montserratregular;}\n.tc28 .range-slider .irs-min, .irs-max{font-family: montserratregular;}\n.tc28 .check-comp .control input:checked ~ .control__indicator{background:#00aea5;} \n.tc28 .check-comp .control__indicator.check-set{border:2px solid #00aea5;}\n.tc28 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#00aea5;}\n.tc28 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#00aea5;}\n.tc28 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #00aea5;}\n.tc28 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.tc28 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.tc28 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:3px;left:1px;color:#00aea5;}\n.tc28 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.tc28 .check-comp .control--radio .control__indicator.icon-set i{color:#00aea5;}\n.tc28 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#00aea5;border:3px solid #fff;}\n.tc28 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#d1d5d8;bottom:18px}\n.tc28 .select .selectize-dropdown .active{background-color:#00aea5;color:#ffffff;}\n.tc28 .check-comp .control {  color: #00aea5;}\n.tc28 .check-comp .checkbox-outer.active label{background: #00aea5; color: #fff;}\n.tc28 .check-comp .checkbox-outer label:hover {background: #00aea5; color: #fff;}\n.questions .question-section-outer .question-number.tc28 {width: 30px; height: 30px; background: #00aea5; border-radius: 50%; color: #fff; font-size: 12px;text-align: center; line-height: 30px;\n    position: absolute; left: 18px;}\n .question-components.tc28{ border-left: 3px solid rgba(0,174,165,0.15);}\n .tc28 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#00aea5;bottom:18px}\n/*theme color 27 end*/\n\n.bottom-section{ font-family: oxygenbold; margin-bottom: 20px; border-bottom: 0 !important }\n.result-full-section .container-temp{width:100%;margin:0 auto;display:inline-block;}\n.page_2 .input-section .input-outer span  {float: left; width: 80%;text-align: left; color: #f44336;font-size: 11px;z-index: 1; margin-bottom: 5px; margin-top: -6px;  }\n\ntemp{width:100%;margin:0 auto; display: block;}\n\n.divider-2{ margin-top:30px; background-image: url(\"../images/temp-bg1.jpg\") ; background-size: cover !important;\n    background-repeat: no-repeat !important;\n    /*background-attachment: fixed !important;*/\n    background-position: center center !important;\n    width: 100%; float: left; height: 100%; padding-bottom:30px; position: relative; vertical-align: middle; }\n\n.page-logo{ padding: 40px; float: left; width:100%;}\n\n.result-comm{ padding-right: 20px;}\n\n/* sahil changes */\n.page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){ font-size:30px;}\n.page_2 .mid-width p{ width: 100%; text-align: center; font-size: 24px; margin-bottom: 0px;}\n\n.landing-page-header{ position:absolute ;}\n.page_2 .slimScrollDiv{ margin-bottom: 30px !important;}\n.section-head span{ margin-bottom:16px;}\n.powered-by img{\n    width: 55%;\n    padding-bottom: 5px;\n    padding-top: 5px;\n}\n.leadform-outer{ float: left; width:100%;}\n.share-set{ float: left; width:100%;}\n\n.bg-overlay{background: rgba(42,40,38,0.45);width:100%; height: 100vh; }\n\n.temp2-scrollbar\n{\n    overflow-y: scroll;\n    height:480px;\n}\n/*\n *  STYLE 1\n */\n.temp2-scrollbar::-webkit-scrollbar-track\n{\n    -webkit-box-shadow: inset 0 0 6px rgba(245,245,248,.8);\n    border-radius: 5px;\n    background-color: #f5f5f5;\n}\n\n.temp2-scrollbar::-webkit-scrollbar\n{\n    width: 7px;\n\n    background-color: #aaa;\n}\n.temp2-scrollbar::-webkit-scrollbar:horizontal\n{\n    height: 7px;\n\n    background-color: #aaa;\n}\n.temp2-scrollbar::-webkit-scrollbar-thumb\n{\n    border-radius: 5px;\n    -webkit-box-shadow: inset 0 0 6px rgba(245,245,248,.8);\n    background-color: #aaa;\n}\n.mobile-result-link{ display: none !important;}\n.mobile-result-linkAdd{ display: none; visibility: hidden;}\n\n\n.radio-outer.active .control {\n    display: block;\n    position: relative;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: 500;\n    color: #fff;\n    background: #ff6600;\n    border-radius: 25px;\n}\n\n/*.radio-outer.active .control i {\n    color: #fff;\n}*/\n\n.cp1 .check-comp .radio-outer.active label.control i {\n    color: #fff;\n}\n\n.questions .question-components .radio-outer label:hover {\n    margin-bottom: 0;\n    background: #ff6600;\n    color: #fff;\n    border-radius: 25px;\n}\n\n.questions .question-components .radio-outer label:hover .check-set {\n    color: #fff;\n}\n\n.cp1 .check-comp .radio-outer label:hover.control i {\n    color: #fff;\n}\n\n.questions .question-components .radio-outer.active .control.no-icon,\n.questions .question-components .radio-outer .control.no-icon:hover {\n    background: none;\n    color: #ff6600;\n    border-radius: 0px;\n}\n\n.requiredAsteric{  color: #f44336;}\n.errorMessage{float: left; width: 100%; text-align: left; padding-left: 2px; color: #f44336; font-size: 11px;}"

/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = "\n\n/*color style css*/\n\n.cp1 .main-bg.page_0{ background: #2a2826;}\n.cp1 .divider-2{ background: #2a2826;}\n.cp1 .check-comp .control input:checked ~ .control__indicator{background:#ff6600;} \n.cp1 .check-comp .control__indicator.check-set{border:2px solid #ff6600;}\n.cp1 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#ff6600;}\n.cp1 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#ff6600;}\n.cp1 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #ff6600;}\n.cp1 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp1 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp1 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#ff6600;}\n.cp1 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp1 .check-comp .control--radio .control__indicator.icon-set i{color:#ff6600;}\n.cp1 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#ff6600;border:3px solid #fff;}\n.cp1 .range-slider .irs-bar-edge {border: 1px solid #ff6600; border-right: 0; background: #ff6600;}\n.cp1 .range-slider .irs-bar {border-top: 1px solid #ff6600;border-bottom: 1px solid #ff6600; background: #ff6600;}\n.cp1 .range-slider .irs-single { background: #ff6600; font-family: oxygenbold;}\n.cp1 .range-slider .irs-min, .irs-max{font-family: oxygenbold;}\n.cp1 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\n.cp1 .select .selectize-dropdown .active{background-color:#ff6600;color:#ffffff;}\n.cp1 .left-section .result-full-section{background: #ff6600 !important}\n.cp1 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: #fff; float:left; width:100%; text-align: center; margin-bottom: 30px;}\n.cp1 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(255, 255, 255, 0.8); font-family: oxygenregular; padding:0px 30px;  float:left; width:100%; text-align: center;}\n.cp1 .btn.prime-action.focus,.cp1 .btn.prime-action:focus,.cp1 .btn.prime-action:hover{color:#28324e;text-decoration:none;background:#ff6600;}\n.cp1 .top-fix-bar{ background: #ff6600; min-height: 70px; position:relative;}\n.cp1 .questions .question-section-outer .prime-action{ background:#ff6600 !important; border:2px solid #ff6600 !important; }\n.cp1 .result-centre-outer {margin: 3%; padding: 0 4% ; float:left; width: 94%;background: #ff6600 !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0 !important;}\n.cp1 .prime-action{ background:#ff6600 !important; border:2px solid #ff6600 !important; color: #fff !important; font-size: 3vmin; }\n.cp1 .leadform-outer .prime-action { background:#ff6600 !important; border:2px solid #ff6600 !important; color:#fff;}\n.cp1 .leadform-outer .prime-action:hover { background:#ff6600 !important; border:2px solid #ff6600 !important; color:#fff;}\n.cp1 .landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #ffffff !important;color:#ffffff;font-family:oxygenbold;font-size:14px;}\n.cp1 .page_0.editor-page-divider { background: #ff6600; }\n/*.cp1 .landing-page-mid {background: rgba(1,36,53,0.45);}\n.cp1 .landing-page-mid ::-webkit-input-placeholder{color:#ff6600 !important;}\n.cp1 .landing-page-mid ::-webkit-input-placeholder{color:#ff6600 !important;}\n.cp1 .landing-page-mid :-moz-placeholder {    color: #ff6600 !important;  }\n.cp1 .landing-page-mid ::-moz-placeholder {   color: #ff6600 !important;  }\n.cp1 .landing-page-mid :-ms-input-placeholder {color: #ff6600 !important;}*/\n.cp1 .questions-header header .right-sec{ background:#ff6600 !important }\n.cp1 .questions .question-section-outer .question-number{background: #ff6600 !important; }\n.cp1 .question-components{ border-left: 3px solid rgba(255,102,0,0.15);}\n.cp1 .questions .question-section-outer .input-field input{color:#ff6600;}\n.cp1 .page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){color:#ff6600;}\n.cp1 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){color:#ff6600;}\n.cp1 .redo-link ul li { background: #ff6600; }\n.cp1 .redo-link ul li a{ color:#fff;}\n.cp1 .page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link{\n\tcolor: #ff6600;\n}\n.cp1 .page_2.w100 .mobile-result-linkAdd{\n\tcolor: #2a2826 !important;\n}\n\n\n.cp2 .main-bg.page_0{ background: #2a2826;}\n.cp2 .divider-2{ background: #2a2826;}\n.cp2 .check-comp .control input:checked ~ .control__indicator{background:#00CC10;} \n.cp2 .check-comp .control__indicator.check-set{border:2px solid #00CC10;}\n.cp2 .question-components .check-comp label{ color:#00CC10; }\n.cp2 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#00CC10;}\n.cp2 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#00CC10;}\n.cp2 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #00CC10;}\n.cp2 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp2 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp2 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#00CC10;}\n.cp2 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp2 .check-comp .control--radio .control__indicator.icon-set i{color:#00CC10;}\n.cp2 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#00CC10;border:3px solid #fff;}\n.cp2 .range-slider .irs-bar-edge {border: 1px solid #00CC10; border-right: 0; background: #00CC10;}\n.cp2 .range-slider .irs-bar {border-top: 1px solid #00CC10;border-bottom: 1px solid #00CC10; background: #00CC10;}\n.cp2 .range-slider .irs-single { background: #00CC10; font-family: oxygenbold;}\n.cp2 .range-slider .irs-min, .irs-max{font-family: oxygenbold;}\n.cp2 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\n.cp2 .select .selectize-dropdown .active{background-color:#00CC10;color:#ffffff;}\n.cp2 .left-section .result-full-section{background: #00CC10 !important}\n.cp2 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: #fff;font-family: oxygenbold; float:left; width:100%; text-align: center; margin-bottom: 30px;}\n.cp2 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(255, 255, 255, 0.8); font-family:oxygenregular; padding:0px 30px; float:left; width:100%; text-align: center;}\n.cp2 .btn.prime-action.focus,.cp2 .btn.prime-action:focus,.cp2 .btn.prime-action:hover{color:#28324e;text-decoration:none;background:#00CC10;}\n.cp2 .top-fix-bar{ background: #00CC10; min-height: 70px; position:relative;}\n.cp2 .questions .question-section-outer .prime-action{ background:#00CC10 !important; border:2px solid #00CC10 !important; }\n.cp2 .result-centre-outer {margin: 3%; padding: 0 4% ; float:left; width: 94%;background: #00CC10 !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0 !important;}\n.cp2 .prime-action{ background:#00CC10 !important; border:2px solid #00CC10 !important; color: #fff !important; font-size:3vmin; }\n.cp2 .leadform-outer .prime-action { background:#00CC10 !important; border:2px solid #00CC10 !important; color:#fff;}\n.cp2 .leadform-outer .prime-action:hover { background:#00CC10 !important; border:2px solid #00CC10 !important; color:#fff;}\n.cp2 .landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #ffffff !important;color:#ffffff;font-family:oxygenbold;font-size:14px!important;}\n.cp2 .page_0.editor-page-divider { background: #00CC10; }\n/*.cp2 .landing-page-mid {background: rgba(1,36,53,0.45);}\n.cp2 .landing-page-mid ::-webkit-input-placeholder{color:#00CC10 !important;}\n.cp2 .landing-page-mid ::-webkit-input-placeholder{color:#00CC10 !important;}\n.cp2 .landing-page-mid :-moz-placeholder {    color: #00CC10 !important;  }\n.cp2 .landing-page-mid ::-moz-placeholder {   color: #00CC10 !important;  }\n.cp2 .landing-page-mid :-ms-input-placeholder {color: #00CC10 !important;}*/\n.cp2 .questions-header header .right-sec{ background:#00CC10 !important }\n.cp2 .questions .question-section-outer .question-number{background: #00CC10 !important; }\n.cp2 .question-components{ border-left: 3px solid rgba(0,204,16,0.15);}\n.cp2 .questions .question-section-outer .input-field input{color:#00CC10;}\n.cp2 .page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){color:#00CC10;}\n.cp2 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){color:#00CC10;}\n.cp2 .redo-link ul li { background: #00CC10; }\n.cp2 .redo-link ul li a{ color:#fff;}\n.cp2 .page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link{\n\tcolor: #00CC10;\n}\n.cp2.page_2.w100 .mobile-result-linkAdd{\n\tcolor:  #2a2826 !important;\n}\n.cp2 .checkbox-outer.active .control {color: #fff; background: #00CC10;}\n.cp2 .questions .question-components .checkbox-outer label:hover {margin-bottom: 0;background: #00CC10; color: #fff;border-radius: 25px;}\n\n\n\n\n\n.cp3 .main-bg.page_0{ background: #2a2826;}\n.cp3 .divider-2{ background: #2a2826;}\n.cp3 .check-comp .control input:checked ~ .control__indicator{background:#EF2158;} \n.cp3 .check-comp .control__indicator.check-set{border:2px solid #EF2158;}\n.cp3 .question-components .check-comp label{ color:#EF2158; }\n.cp3 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#EF2158;}\n.cp3 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#EF2158;}\n.cp3 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #EF2158;}\n.cp3 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp3 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp3 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#EF2158;}\n.cp3 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp3 .check-comp .control--radio .control__indicator.icon-set i{color:#EF2158;}\n.cp3 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#EF2158;border:3px solid #fff;}\n.cp3 .range-slider .irs-bar-edge {border: 1px solid #EF2158; border-right: 0; background: #EF2158;}\n.cp3 .range-slider .irs-bar {border-top: 1px solid #EF2158;border-bottom: 1px solid #EF2158; background: #EF2158;}\n.cp3 .range-slider .irs-single { background: #EF2158; font-family: oxygenbold;}\n.cp3 .range-slider .irs-min, .irs-max{font-family: oxygenbold;}\n.cp3 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\n.cp3 .select .selectize-dropdown .active{background-color:#EF2158;color:#ffffff;}\n.cp3 .left-section .result-full-section{background: #EF2158 !important}\n.cp3 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: #fff;font-family: oxygenbold; float:left; width:100%; text-align: center; margin-bottom: 30px;}\n.cp3 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(255, 255, 255, 0.8); font-family: oxygenregular; padding:0px 30px; float:left; width:100%; text-align: center;}\n.cp3 .btn.prime-action.focus,.cp3 .btn.prime-action:focus,.cp3 .btn.prime-action:hover{color:#28324e;text-decoration:none;background:#EF2158;}\n.cp3 .top-fix-bar{ background: #EF2158; min-height: 70px; position:relative;}\n.cp3 .questions .question-section-outer .prime-action{ background:#EF2158 !important; border:2px solid #EF2158 !important; }\n.cp3 .result-centre-outer {margin: 3%; padding: 0 4% ; float:left; width: 94%;background: #EF2158 !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0 !important;}\n.cp3 .prime-action{ background:#EF2158 !important; border:2px solid #EF2158 !important; color: #fff !important; font-size: 3vmin; }\n.cp3 .leadform-outer .prime-action { background:#EF2158 !important; border:2px solid #EF2158 !important; color:#fff;}\n.cp3 .leadform-outer .prime-action:hover { background:#EF2158 !important; border:2px solid #EF2158 !important; color:#fff;}\n.cp3 .landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #ffffff !important;color:#ffffff;font-family:oxygenbold;font-size:14px!important;}\n.cp3 .page_0.editor-page-divider { background: #EF2158; }\n/*.cp3 .landing-page-mid {background: rgba(1,36,53,0.45);}\n.cp3 .landing-page-mid ::-webkit-input-placeholder{color:#EF2158 !important;}\n.cp3 .landing-page-mid ::-webkit-input-placeholder{color:#EF2158 !important;}\n.cp3 .landing-page-mid :-moz-placeholder {    color: #EF2158 !important;  }\n.cp3 .landing-page-mid ::-moz-placeholder {   color: #EF2158 !important;  }\n.cp3 .landing-page-mid :-ms-input-placeholder {color: #EF2158 !important;}*/\n.cp3 .questions-header header .right-sec{ background:#EF2158 !important }\n.cp3 .questions .question-section-outer .question-number{background: #EF2158 !important; }\n.cp3 .question-components{ border-left: 3px solid rgba(239,33,88,0.15);}\n.cp3 .questions .question-section-outer .input-field input{color:#EF2158;}\n.cp3 .page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){color:#EF2158;}\n.cp3 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){color:#EF2158;}\n.cp3 .redo-link ul li { background: #EF2158; }\n.cp3 .redo-link ul li a{ color:#fff;}\n.cp3 .page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link{\n\tcolor: #EF2158;\n}\n.cp3 .page_2.w100 .mobile-result-linkAdd{\n\tcolor: #2a2826 !important;\n}\n.cp3 .checkbox-outer.active .control {color: #fff !important; background: #EF2158;}\n.cp3 .questions .question-components .checkbox-outer label:hover {margin-bottom: 0;background: #EF2158; color: #fff;border-radius: 25px;}\n\n\n\n\n.cp4 .main-bg.page_0{ background: #09141f;}\n.cp4 .temp2-bg{ background: #09141f;}\n.cp4 .temp2-bg .bg-overlay{background: rgba(9,20,31,0.45);}\n.cp4 .divider-2{ background: #09141f;}\n.cp4 .check-comp .control input:checked ~ .control__indicator{background:#17438B;} \n.cp4 .check-comp .control__indicator.check-set{border:2px solid #17438B;}\n.cp4 .question-components .check-comp label{ color:#17438B; }\n.cp4 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#17438B;}\n.cp4 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#17438B;}\n.cp4 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #17438B;}\n.cp4 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp4 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp4 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#17438B;}\n.cp4 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp4 .check-comp .control--radio .control__indicator.icon-set i{color:#17438B;}\n.cp4 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#17438B;border:3px solid #fff;}\n.cp4 .range-slider .irs-bar-edge {border: 1px solid #17438B; border-right: 0; background: #17438B;}\n.cp4 .range-slider .irs-bar {border-top: 1px solid #17438B;border-bottom: 1px solid #17438B; background: #17438B;}\n.cp4 .range-slider .irs-single { background: #17438B; font-family: oxygenbold;}\n.cp4 .range-slider .irs-min, .irs-max{font-family: oxygenbold;}\n.cp4 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\n.cp4 .select .selectize-dropdown .active{background-color:#17438B;color:#ffffff;}\n.cp4 .left-section .result-full-section{background: #17438B !important}\n.cp4 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: #fff;font-family: oxygenbold; float:left; width:100%; text-align: center; margin-bottom: 30px;}\n.cp4 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(255, 255, 255, 0.8); font-family:oxygenregular; padding:0px 30px; float:left; width:100%; text-align: center;}\n.cp4 .btn.prime-action.focus,.cp4 .btn.prime-action:focus,.cp4 .btn.prime-action:hover{color:#28324e;text-decoration:none;background:#17438B;}\n.cp4 .top-fix-bar{ background: #17438B; min-height: 70px; position:relative;}\n.cp4 .questions .question-section-outer .prime-action{ background:#17438B !important; border:2px solid #17438B !important; }\n.cp4 .result-centre-outer {margin: 3%; padding: 0 4% ; float:left; width: 94%;background: #17438B !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0 !important;}\n.cp4 .prime-action{ background:#17438B !important; border:2px solid #17438B !important; color: #fff !important; font-size:3vmin; }\n.cp4 .leadform-outer .prime-action { background:#17438B !important; border:2px solid #17438B !important; color:#fff;}\n.cp4 .leadform-outer .prime-action:hover { background:#17438B !important; border:2px solid #17438B !important; color:#fff;}\n.cp4 .landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #ffffff !important;color:#ffffff;font-family:oxygenbold;font-size:14px!important;}\n.cp4 .page_0.editor-page-divider { background: #17438B; }\n/*.cp4 .landing-page-mid ::-webkit-input-placeholder{color:#17438B !important;}\n.cp4 .landing-page-mid ::-webkit-input-placeholder{color:#17438B !important;}\n.cp4 .landing-page-mid :-moz-placeholder {    color: #17438B !important;  }\n.cp4 .landing-page-mid ::-moz-placeholder {   color: #17438B !important;  }\n.cp4 .landing-page-mid :-ms-input-placeholder {color: #17438B !important;}*/\n.cp4 .questions-header header .right-sec{ background:#17438B !important }\n.cp4 .questions .question-section-outer .question-number{background: #17438B !important; }\n.cp4 .question-components{ border-left: 3px solid rgba(23,67,139,0.15);}\n.cp4 .questions .question-section-outer .input-field input{color:#17438B;}\n.cp4 .page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){color:#17438B;}\n.cp4 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){color:#17438B;}\n.cp4 .redo-link ul li { background: #17438B; }\n.cp4 .redo-link ul li a{ color:#fff;}\n.cp4 .checkbox-outer.active .control {color: #fff; background: #17438B;}\n.cp4 .questions .question-components .checkbox-outer label:hover {margin-bottom: 0;background: #17438B; color: #fff;border-radius: 25px;}\n@media (max-width:775px) {\n\t.cp4 .page_2.w100.result-fixed.mobile-result-sticky { background: #09141f !important; }\n\t.cp4 .page_2.w100 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){color:#17438B;}\n\t.cp4 .page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link { color: #17438B; }\n\t.cp4 .page_2.w100 .mobile-result-linkAdd { color: #09141f !important; }\n\t.cp4 .page_2.w100.mobile-result-sticky{ background: #09141f; }\n}\n\n\n\n\n.cp5 .main-bg.page_0{ background: #09141f;}\n.cp5 .temp2-bg{ background: #09141f;}\n.cp5 .temp2-bg .bg-overlay{background: rgba(9,20,31,0.45);}\n.cp5 .divider-2{ background: #09141f;}\n.cp5 .check-comp .control input:checked ~ .control__indicator{background:#678D29;} \n.cp5 .check-comp .control__indicator.check-set{border:2px solid #678D29;}\n.cp5 .question-components .check-comp label{ color:#678D29; }\n.cp5 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#678D29;}\n.cp5 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#678D29;}\n.cp5 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #678D29;}\n.cp5 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp5 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp5 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#678D29;}\n.cp5 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp5 .check-comp .control--radio .control__indicator.icon-set i{color:#678D29;}\n.cp5 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#678D29;border:3px solid #fff;}\n.cp5 .range-slider .irs-bar-edge {border: 1px solid #678D29; border-right: 0; background: #678D29;}\n.cp5 .range-slider .irs-bar {border-top: 1px solid #678D29;border-bottom: 1px solid #678D29; background: #678D29;}\n.cp5 .range-slider .irs-single { background: #678D29; font-family: oxygenbold;}\n.cp5 .range-slider .irs-min, .irs-max{font-family: oxygenbold;}\n.cp5 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\n.cp5 .select .selectize-dropdown .active{background-color:#678D29;color:#ffffff;}\n.cp5 .left-section .result-full-section{background: #678D29 !important}\n.cp5 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: #fff;font-family: oxygenbold; float:left; width:100%; text-align: center; margin-bottom: 30px;}\n.cp5 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(255, 255, 255, 0.8); font-family:oxygenregular; padding:0px 30px; float:left; width:100%; text-align: center;}\n.cp5 .btn.prime-action.focus,.cp5 .btn.prime-action:focus,.cp5 .btn.prime-action:hover{color:#28324e;text-decoration:none;background:#678D29;}\n.cp5 .top-fix-bar{ background: #678D29; min-height: 70px; position:relative;}\n.cp5 .questions .question-section-outer .prime-action{ background:#678D29 !important; border:2px solid #678D29 !important; }\n.cp5 .result-centre-outer {margin: 3%; padding: 0 4% ; float:left; width: 94%;background: #678D29 !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0 !important;}\n.cp5 .prime-action{ background:#678D29 !important; border:2px solid #678D29 !important; color: #fff !important; font-size:3vmin; }\n.cp5 .leadform-outer .prime-action { background:#678D29 !important; border:2px solid #678D29 !important; color:#fff;}\n.cp5 .leadform-outer .prime-action:hover { background:#678D29 !important; border:2px solid #678D29 !important; color:#fff;}\n.cp5 .landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #ffffff !important;color:#ffffff;font-family:oxygenbold;font-size:14px!important;}\n.cp5 .page_0.editor-page-divider { background: #678D29; }\n.cp5 .checkbox-outer.active .control {color: #fff; background: #678D29;}\n.cp5 .questions .question-components .checkbox-outer label:hover {margin-bottom: 0;background: #678D29; color: #fff;border-radius: 25px;}\n/*.cp5 .landing-page-mid ::-webkit-input-placeholder{color:#678D29 !important;}\n.cp5 .landing-page-mid ::-webkit-input-placeholder{color:#678D29 !important;}\n.cp5 .landing-page-mid :-moz-placeholder {    color: #678D29 !important;  }\n.cp5 .landing-page-mid ::-moz-placeholder {   color: #678D29 !important;  }\n.cp5 .landing-page-mid :-ms-input-placeholder {color: #678D29 !important;}*/\n.cp5 .questions-header header .right-sec{ background:#678D29 !important }\n.cp5 .questions .question-section-outer .question-number{background: #678D29 !important; }\n.cp5 .question-components{ border-left: 3px solid rgba(103,141,41,0.15);}\n.cp5 .questions .question-section-outer .input-field input{color:#678D29;}\n.cp5 .page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){color:#678D29;}\n.cp5 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){color:#678D29;}\n.cp5 .redo-link ul li { background: #678D29; }\n.cp5 .redo-link ul li a{ color:#fff;}\n@media (max-width:775px) {\n\t.cp5 .page_2.w100.result-fixed.mobile-result-sticky { background: #09141f !important; }\n\t.cp5 .page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link { color: #678D29; }\n\t.cp5 .page_2.w100 .mobile-result-linkAdd { color: #09141f !important; }\n\t.cp5 .page_2.w100.mobile-result-sticky{ background: #09141f; }\n}\n\n\n.cp6 .main-bg.page_0{ background: #4d4d4f;}\n.cp6 .temp2-bg{ background: #4d4d4f;}\n.cp6 .temp2-bg .bg-overlay{background: rgba(77,77,79,0.45);}\n.cp6 .divider-2{ background: #4d4d4f;}\n.cp6 .check-comp .control input:checked ~ .control__indicator{background:#F15A29;} \n.cp6 .check-comp .control__indicator.check-set{border:2px solid #F15A29;}\n.cp6 .question-components .check-comp label{ color:#F15A29; }\n.cp6 .check-comp .checkbox-outer .control__indicator.check-set{border:none;left:12px;color:#F15A29;}\n.cp6 .check-comp .checkbox-outer .control input:checked ~ .control__indicator{background:none;color:#F15A29;}\n.cp6 .check-comp .control__indicator{position:absolute;left:0;height:20px;width:20px;border:3px solid #F15A29;}\n.cp6 .check-comp .control__indicator:after{content:'';position:absolute;display:none;}\n.cp6 .check-comp .control input:checked ~ .control__indicator.icon-set{background:none;}\n.cp6 .check-comp .control--radio .control__indicator.icon-set{border:none!important;top:14px;left:-5px;color:#F15A29;}\n.cp6 .check-comp .control--radio .control__indicator.icon-set:after{background:none;border:none;}\n.cp6 .check-comp .control--radio .control__indicator.icon-set i{color:#F15A29;}\n.cp6 .check-comp .control--radio .control__indicator:after{left:0px;top:0px;height:14px;width:14px;border-radius:50%;background:#F15A29;border:3px solid #fff;}\n.cp6 .range-slider .irs-bar-edge {border: 1px solid #F15A29; border-right: 0; background: #F15A29;}\n.cp6 .range-slider .irs-bar {border-top: 1px solid #F15A29;border-bottom: 1px solid #F15A29; background: #F15A29;}\n.cp6 .range-slider .irs-single { background: #F15A29; font-family: oxygenbold;}\n.cp6 .range-slider .irs-min, .irs-max{font-family: oxygenbold;}\n.cp6 .select .select-icon{position:absolute;z-index:9;font-size:24px;left:16px;color:#61bd6d;bottom:18px}\n.cp6 .select .selectize-dropdown .active{background-color:#F15A29;color:#ffffff;}\n.cp6 .left-section .result-full-section{background: #F15A29 !important}\n.cp6 .landing-page-mid .main-heading{ font-size: 8vmin; line-height:1em !important; color: #fff;font-family: oxygenbold; float:left; width:100%; text-align: center; margin-bottom: 30px;}\n.cp6 .landing-page-mid .sub-heading{ font-size: 3.4vmin; line-height:1.4em !important; color: rgba(255, 255, 255, 0.8); font-family:oxygenregular; padding:0px 30px; float:left; width:100%; text-align: center;}\n.cp6 .btn.prime-action.focus,.cp6 .btn.prime-action:focus,.cp6 .btn.prime-action:hover{color:#28324e;text-decoration:none;background:#F15A29;}\n.cp6 .top-fix-bar{ background: #F15A29; min-height: 70px; position:relative;}\n.cp6 .questions .question-section-outer .prime-action{ background:#F15A29 !important; border:2px solid #F15A29 !important; }\n.cp6 .result-centre-outer {margin: 3%; padding: 0 4% ; float:left; width: 94%;background: #F15A29 !important; display: inline-block;box-shadow: 3px 3px 50px 5px rgba(0,0,0,0.6); margin-bottom: 0 !important;}\n.cp6 .prime-action{ background:#F15A29 !important; border:2px solid #F15A29 !important; color: #fff !important; font-size:3vmin; }\n.cp6 .leadform-outer .prime-action { background:#F15A29 !important; border:2px solid #F15A29 !important; color:#fff;}\n.cp6 .leadform-outer .prime-action:hover { background:#F15A29 !important; border:2px solid #F15A29 !important; color:#fff;}\n.cp6 .landing-page-mid .input-section .input-outer input{float:left;width:96%!important;margin: 10px 28px;border:2px solid #ffffff !important;color:#ffffff;font-family:oxygenbold;font-size:14px!important;}\n.cp6 .page_0.editor-page-divider { background: #F15A29; }\n.cp6 .checkbox-outer.active .control {color: #fff; background: #F15A29;}\n.cp6 .questions .question-components .checkbox-outer label:hover {margin-bottom: 0;background: #F15A29; color: #fff;border-radius: 25px;}\n/*.cp6 .landing-page-mid ::-webkit-input-placeholder{color:#F15A29 !important;}\n.cp6 .landing-page-mid ::-webkit-input-placeholder{color:#F15A29 !important;}\n.cp6 .landing-page-mid :-moz-placeholder {    color: #F15A29 !important;  }\n.cp6 .landing-page-mid ::-moz-placeholder {   color: #F15A29 !important;  }\n.cp6 .landing-page-mid :-ms-input-placeholder {color: #F15A29 !important;}*/\n.cp6 .questions-header header .right-sec{ background:#F15A29 !important }\n.cp6 .questions .question-section-outer .question-number{background: #F15A29 !important; }\n.cp6 .question-components{ border-left: 3px solid rgba(241,90,41,0.15);}\n.cp6 .questions .question-section-outer .input-field input{color:#F15A29;}\n.cp6 .page_2 .result-full-section.result-temp2-default-section .small-top-sec p:nth-child(1){color:#F15A29;}\n.cp6 .page_2 .result-temp2-default-section.result-half-section .small-top-sec p:nth-child(1){color:#F15A29;}\n.cp6 .redo-link ul li { background: #F15A29; }\n.cp6 .redo-link ul li a{ color:#fff;}\n@media (max-width:775px) {\n\t.cp6 .page_2.w100.result-fixed.mobile-result-sticky { background: #4d4d4f !important; }\n\t.cp6 .page_2.w100.mobile-result-sticky .temp2-scrollbar .mobile-result-link { color: #F15A29; }\n\t.cp6 .page_2.w100 .mobile-result-linkAdd { color: #4d4d4f !important; }\n\t.cp6 .page_2.w100.mobile-result-sticky{ background: #4d4d4f; }\n}\n\n\n\n/* start: new css updated by 29 nov */\n/*.check-comp .radio-outer .control--radio {\n    padding: 0px 20px 0px 35px;\n}\n\n.cp1 .radio-outer.active label.control{\n\tdisplay: block;\n    position: relative;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: 500;\n    color: #fff;\n    background: #ff6600;\n    border-radius: 25px;\n}*/\n\n.cp1 .control__indicator.icon-set {\n    left: 5px !important;\n    border: 2px solid #ff6600;\n    border-radius: 50%;\n    top: 3px !important;\n}\n\n/*.cp1 .questions .question-components .radio-outer label:hover {\n    margin-bottom: 0;\n    background: #ff6600;\n    color: #fff;\n    border-radius: 25px;\n}\n\n.radio-outer.active .control i {\n    color: #fff !important;\n}\n\n.questions .question-components .radio-outer label:hover .icon-set {\n    color: #fff !important;\n}\n\n.questions .question-components .radio-outer label:hover .icon-set i {\n    color: #fff !important;\n}*/\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = "<div *ngFor=\"let page of getVisiblePages(), let pageIndex=index\"\n     (mousedown)=\"selectpage(page)\"\n     (click)=\"selectModel($event,'Page')\"\n     class=\"{{devMode?'editor-page-divider':''}}\"\n>\n\t<div class=\"t1\">\n    <!--Landing Pge Start-->\n\t\t<div class=\"{{'page_'+pageIndex}} t1-landing\"\n         *ngIf=\"page.type=='Landing'\"\n         [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\n\t\t\t   [style.backgroundImage]=\"(_templateRenderer.getBackground('img')) | safeStyle\"\n    >\n\t\t\t<div class=\"t1-landing-inner {{_templateRenderer.getBackground('img')?'t1-overlay':''}}\">\n\t\t\t\t<section *ngFor=\"let section of getVisibleSections(page), let secIndex=index\"\n                 class=\"{{section.defaultClass}}\"\n                 (mousedown)=\"selectSection(section)\"\n        >\n\t\t\t\t\t<div *ngFor=\"let control of section.items,let i=index\"\n               [attr.data-order]=\"i+1\"\n          >\n\t\t\t\t\t\t<control [page]=\"page\"\n                    (mousedown)=\"selectpage(page)\"\n                    (click)=\"selectModel($event,'Page')\"\n                     [data]=\"control\"\n\t\t\t\t\t\t\t       (controlOutput)=\"onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\n                     [devMode]=\"devMode\"\n                     *ngIf=\"control.visible && control.type == 'leadform'\"\n                     class=\"{{control.defaultClass}}\"\n            >\n\t\t\t\t\t\t</control>\n\t\t\t\t\t\t<control [data]=\"control\"\n                     [devMode]=\"devMode\"\n                     (controlOutput)=\"onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\n\t\t\t\t\t\t\t       *ngIf=\"control.visible && control.type !== 'leadform'\" class=\"{{control.defaultClass}}\"\n            >\n\t\t\t\t\t\t</control>\n\t\t\t\t\t</div>\n\t\t\t\t</section>\n\t\t\t</div>\n\t\t</div>\n    <!--Landing Pge End-->\n    <!--Questionnaire Start-->\n    <!--Only in Builder HTML Start-->\n    <div *ngIf=\"devMode && page.type=='Questionnaire'\" class=\"{{'page_'+pageIndex}}\">\n      <div *ngFor=\"let section of getVisibleSections(page), let secIndex=index\" class=\"{{'sec_'+secIndex}}\" (mousedown)=\"selectSection(section)\">\n        <div *ngFor=\"let control of section.items,let i=index\"\n             class=\"editor-page-divider slide_{{jsonBuilderHelper.getQuestionsList().indexOf(control)}} sec_{{secIndex}}_q_{{i}}\"\n             (mousedown)=\"(section.type=='LeadFormQ')?selectSection(section):selectControl(control)\"\n             (click)=\"section.type=='LeadFormQ'?selectModel($event,'Section'):selectModel($event,'Control')\"\n        >\n          <div class=\"t1-question\"\n              [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\n              [style.backgroundImage]=\"(_templateRenderer.getBackground('img')) | safeStyle\"\n          >\n            <div class=\"t1-landing-inner {{_templateRenderer.getBackground('img')?'t1-overlay':''}}\">\n              <div *ngIf=\"jsonBuilderHelper.getJSONBuilt().realTime\">\n                <div class=\"t1-question-liveresult\" [fetch-result]=\"0\">\n                  $53,564\n                </div>\n                <div class=\"t1-question-resultheading\">\n                  {{jsonBuilderHelper.getJSONBuilt().realTimeHeading}}\n                </div>\n              </div>\n              <div class=\"t1-slider-pagination\">\n                <a href=\"javascript:void(0);\" *ngFor=\"let slideDot of jsonBuilderHelper.getQuestionsList(), let dotIndex=index\" [class.active]=\"jsonBuilderHelper.getQuestionsList().indexOf(control)==dotIndex\"></a>\n              </div>\n              <section class=\"t1-question-mid\">\n                <div class=\"t1-question-slider\">\n                  <div class=\"t1-slider\">\n                    <div class=\"t1-slider-nav\">\n                      <a href=\"javascript:void(0);\" class=\"prev\" [class.a-disable]=\"jsonBuilderHelper.getQuestionsList().indexOf(control)==0\"><i class=\"material-icons\">keyboard_arrow_left</i></a>\n                    </div>\n                    <div class=\"t1-slider-question slide-1\"\n                        [attr.data-slide]=\"i+1\"\n                        [class.t1-slider-question-divider]=\"devMode\"\n                    >\n                      <div class=\"t1-slider-section\">\n                        <div class=\"t1-ques-inner\">\n                          <div class=\"t1-ques-head\">\n                            {{(section.type=='LeadFormQ')?section.title:control.props.title}}\n                            <span *ngIf=\"control.config.validations.required.status\" class=\"requiredAsteric\">*</span>\n                            <div class=\"help-outer\" *ngIf=\"control.config.showHelp || (section.type=='LeadFormQ' && section.showDesc)\">\n                                <i class=\"material-icons\" >help_outline</i>\n                                <div class=\"help-text\">{{(section.type=='LeadFormQ')?section.description:control.props.helpText}}</div>\n                            </div>\n                          </div>\n                          <div class=\"t1-ques-component\">\n                            <div class=\"question-components\">\n                              <div class=\"full-width np\">\n\n                                <control\n                                  [data]=\"control\" [form]=\"tvs.getFormGroups()[section._id]\"\n\n                                ></control>\n\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"t1-slider-nav\">\n                      <a href=\"javascript:void(0);\" class=\"next\">\n                        <i class=\"material-icons\" *ngIf=\"(jsonBuilderHelper.getQuestionsList().indexOf(control)+1)!=jsonBuilderHelper.getQuestionsList().length\">keyboard_arrow_right</i>\n                        <i class=\"material-icons\" *ngIf=\"(jsonBuilderHelper.getQuestionsList().indexOf(control)+1)==jsonBuilderHelper.getQuestionsList().length\">done</i>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </section>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--Only in Builder HTML End-->\n    <!--Preview/Functional HTML Start-->\n    <div *ngIf=\"!devMode && page.type=='Questionnaire'\">\n      <div class=\"{{'page_'+pageIndex}} t1-question\"\n          [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\n          [style.backgroundImage]=\"(_templateRenderer.getBackground('img')) | safeStyle\"\n          [class.hide]=\"!devMode\"\n      >\n        <div class=\"t1-landing-inner {{_templateRenderer.getBackground('img')?'t1-overlay':''}}\">\n            <div *ngIf=\"jsonBuilderHelper.getJSONBuilt().realTime\">\n              <div class=\"t1-question-liveresult\" [fetch-result]=\"0\">\n                $53,564\n              </div>\n              <div class=\"t1-question-resultheading\">\n                {{jsonBuilderHelper.getJSONBuilt().realTimeHeading}}\n              </div>\n            </div>\n            <div class=\"t1-slider-pagination\"\n                [class.hide]=\"devMode\"\n            >\n              <a href=\"javascript:void(0);\" *ngFor=\"let slideDot of jsonBuilderHelper.getQuestionsList(), let dotIndex=index\" [class.active]=\"currentQ=='slide_'+dotIndex\"></a>\n            </div>\n            <section class=\"t1-question-mid\">\n              <div class=\"t1-question-slider\">\n                <div class=\"t1-slider\">\n                  <div *ngFor=\"let section of getVisibleSections(page), let secIndex=index\" class=\"{{'sec_'+secIndex}} card-sec-wrapper\" (mousedown)=\"selectSection(section)\">\n                    <!--Questions-->\n                    <form (ngSubmit)=\"onSubmit(tvs.getFormGroups()[section._id])\" [formGroup]=\"tvs.getFormGroups()[section._id]\" novalidate *ngIf =\"section.type!='LeadFormQ'\">\n                      <div\n                          *ngFor=\"let control of section.items,let i=index\"\n                          (mousedown)=\"selectControl(control)\"\n                          (click)=\"selectModel($event,'Control')\"\n                          class=\"slide_{{jsonBuilderHelper.getQuestionsList().indexOf(control)}} sec_{{secIndex}}_q_{{i}}\"\n                          [class.hide]=\"!devMode && jsonBuilderHelper.getQuestionsList().indexOf(control)\" style=\"position: relative;float: left;width: 100%;\" >\n                        <div class=\"t1-slider-nav\" [class.hide]=\"devMode\">\n                          <a (click)=\"onSubmit(tvs.getFormGroups()[section._id],section._id,control._id);onButtonClick($event,'slide_'+(jsonBuilderHelper.getQuestionsList().indexOf(control)-1),'slide_'+jsonBuilderHelper.getQuestionsList().indexOf(control))\"\n                          href=\"javascript:void(0);\"\n                          class=\"prev\" [class.a-disable]=\"jsonBuilderHelper.getQuestionsList().indexOf(control)==0\">\n                            <i class=\"material-icons\">keyboard_arrow_left</i>\n                          </a>\n                        </div>\n                        <div class=\"t1-slider-question slide-1\"\n                            [attr.data-slide]=\"i+1\"\n                            [class.t1-slider-question-divider]=\"devMode\"\n                        >\n                          <div class=\"t1-slider-section\">\n                            <div class=\"t1-ques-inner\">\n                              <div class=\"t1-ques-head\">\n                                {{control.props.title}}\n                                <span *ngIf=\"control.config.validations.required.status\" class=\"requiredAsteric\">*</span>\n                                <div class=\"help-outer\" *ngIf=\"control.config.showHelp\">\n                                    <i class=\"material-icons\" >help_outline</i>\n                                    <div class=\"help-text\">{{control.props.helpText}}</div>\n                                </div>\n                              </div>\n                              <div class=\"t1-ques-component\">\n                                <div class=\"question-components\">\n                                  <div class=\"full-width np\">\n                                    <control\n                                      [data]=\"control\" [form]=\"tvs.getFormGroups()[section._id]\"\n                                      (controlOutput)=\"onSubmit(tvs.getFormGroups()[section._id],section._id, control._id);\n                                      (jsonBuilderHelper.getQuestionsList().indexOf(control)+1)!= jsonBuilderHelper.getQuestionsList().length?\n                                      onButtonClick($event,'slide_'+(jsonBuilderHelper.getQuestionsList().indexOf(control)+1),'slide_'+jsonBuilderHelper.getQuestionsList().indexOf(control)):\n                                      onButtonClick($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\">\n                                    </control>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"t1-slider-nav\" [class.hide]=\"devMode\">\n                          <a\n                            (click)=\"onSubmit(tvs.getFormGroups()[section._id],section._id, control._id);\n                                      (jsonBuilderHelper.getQuestionsList().indexOf(control)+1)!= jsonBuilderHelper.getQuestionsList().length?\n                                      onButtonClick($event,'slide_'+(jsonBuilderHelper.getQuestionsList().indexOf(control)+1),'slide_'+jsonBuilderHelper.getQuestionsList().indexOf(control)):\n                                      onButtonClick($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\n                            href=\"javascript:void(0);\"\n                            class=\"next\">\n                            <i class=\"material-icons\">\n                              {{\n                                ((jsonBuilderHelper.getQuestionsList().indexOf(control)+1)==jsonBuilderHelper.getQuestionsList().length)?\n                                'done':'keyboard_arrow_right'\n                              }}\n                            </i>\n                          </a>\n                        </div>\n                      </div>\n                    </form>\n                    <!--Questions-->\n                    <!--Leadform-->\n                    <div *ngIf =\"section.type=='LeadFormQ'\" class=\"slide_{{jsonBuilderHelper.getQuestionsList().indexOf(section.items[0])}}\" [class.hide]=\"!devMode\">\n                      <div class=\"t1-slider-nav\" [class.hide]=\"devMode\">\n                        <a (click)=\"validated = true; onButtonClick($event,'slide_'+(jsonBuilderHelper.getQuestionsList().length-2),'slide_'+jsonBuilderHelper.getQuestionsList().indexOf(section.items[0]))\" class=\"prev\" ><i class=\"material-icons\">keyboard_arrow_left</i></a>\n                      </div>\n                      <div class=\"t1-slider-question slide-1 sec_{{secIndex}}_q_{{i}}\"\n                          [class.t1-slider-question-divider]=\"devMode\"\n                      >\n                        <div class=\"t1-slider-section\">\n                          <div class=\"t1-ques-inner\">\n                            <div class=\"t1-ques-head\">\n                              {{section.title}}\n                              <div class=\"help-outer\" *ngIf=\"section.showDesc\">\n                                <i class=\"material-icons\" >help_outline</i>\n                                <div class=\"help-text\">{{section.description}}</div>\n                              </div>\n                            </div>\n                            <div *ngFor=\"let control of section.items,let i=index\"\n                              [attr.data-order]=\"i+1\"\n                              >\n                              <div class=\"t1-ques-component\">\n                                <div class=\"question-components\">\n                                  <div class=\"full-width np text-center\">\n                                    <control [data]=\"control\"\n                                            (controlOutput)=\"(secIndex+1)!=getVisibleSections(page).length?onLeadFormSubmit($event,'sec_'+(secIndex+1)):\n                                            onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\n                                            (mousedown)=\"selectSection(section)\"\n                                            (click)=\"selectModel($event,'Section')\"\n                                            [devMode]=\"devMode\"\n\n                                    ></control>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"t1-slider-nav\" [class.hide]=\"devMode\">\n                        <a\n                            (click)=\"leadSubmit()\"\n                            class=\"next\"\n                        >\n                            <i class=\"material-icons\">done</i>\n                          </a>\n                      </div>\n                  </div>\n                  <!--Leadform-->\n                  </div>\n                </div>\n              </div>\n            </section>\n        </div>\n      </div>\n    </div>\n    <!--Preview/Functional HTML End-->\n    <!--Questionnaire End-->\n    <!--Result Start-->\n    <div class=\"{{'page_'+pageIndex}} t1-result\"\n         *ngIf=\"page.type=='Result'\"\n         [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\n         [style.backgroundImage]=\"(_templateRenderer.getBackground('img')) | safeStyle\"\n         [class.hide]=\"!devMode\"\n    >\n      <div class=\"t1-result-main {{_templateRenderer.getBackground('img')?'t1-overlay':''}}\">\n        <!--Number Result Start-->\n        <section class=\"t1-result-top\" *ngIf=\"staticControls!={} && jsonBuilderHelper.getJSONBuilt().templateType =='Numerical'\">\n          <div class=\"t1-result-topheading\" *ngIf=\"staticControls.Result.result_header.visible\">\n               <control\n                  [data]=\"staticControls.Result.result_header\"\n                  class=\"{{staticControls.Result.result_header.defaultClass}}\"\n               ></control>\n          </div>\n          <div class=\"t1-result-inner\">\n            <div\n              *ngFor=\"let control of staticControls.Result.Result.items,let i=index\" [attr.data-order]=\"i+1\" class=\"{{control.defaultClass}}\"\n              [hidden]=\"!control.visible\"\n              [class.resulthidden]=\"!control.visible\"\n              (mousedown)=\"selectpage(page); selectControl(control);\"\n              (mouseup)=\"selectModel($event,'Page')\"\n              [ngClass]=\"{\n                            't1-result-small-section':(staticControls.Result.Result.title=='Result'),\n                            't1-result-full-section':(i==0)\n                         }\"\n            >\n              <div [ngClass]=\"{\n                                't1-result-small-container':(staticControls.Result.Result.title=='Result'),\n                                't1-result-full-container':(i==0)\n                              }\"\n              >\n                <control [data]=\"control\" *ngIf=\"control.visible\"></control>\n              </div>\n            </div>\n            <div class=\"t1-result-leadform\">\n              <control\n                [data]=\"staticControls.Result.leadform\"\n                [page] =\"page\"\n                class=\"{{staticControls.Result.leadform.defaultClass}}\"\n                (controlOutput)=\"onResultLeadFormSubmit($event)\"\n                *ngIf=\"staticControls.Result.leadform.visible\"\n                 (click)=\"selectModel($event,'Page'); scrollToTopProperties()\"\n              ></control>\n              <control\n                [data]=\"staticControls.Result.click_button\"\n                [page]=\"page\"\n                class=\"{{staticControls.Result.click_button.defaultClass}}\"\n                (controlOutput)=\"onResultLeadFormSubmit($event)\"\n                *ngIf=\"staticControls.Result.click_button.visible\"\n                (click) = \"scrollToTopProperties()\"\n              ></control>\n            </div>\n            <div class=\"t1-result-disclaimer\">\n              <control\n                [data]=\"staticControls.Result.result_disclaimer\"\n                class=\"{{staticControls.Result.result_disclaimer.defaultClass}}\"\n                *ngIf=\"staticControls.Result.result_disclaimer.visible\"\n                (click) = \"scrollToTopProperties()\"\n              ></control>\n            </div>\n            <div class=\"t1-social-links\">\n              <control\n                [data]=\"staticControls.Result.share_links\"\n                class=\"{{staticControls.Result.share_links.defaultClass}}\"\n                *ngIf=\"staticControls.Result.share_links.visible\"\n              ></control>\n            </div>\n          </div>\n        </section>\n        <!--Number Result End-->\n        <!--Recom Result Start-->\n        <section class=\"t1-result-top recommendation-outer\" *ngIf=\"staticControls!={} && jsonBuilderHelper.getJSONBuilt().templateType =='Recommendation' && jsonBuilderHelper.getSelectedFormula()\">\n            <div class=\"mid-width\" >\n              <p [innerHtml]=\"jsonBuilderHelper.getSelectedFormula().decimal | safeHtml\"></p>\n            </div>\n            <div class=\"col-xs-12 np t1-result-inner\" >\n              <div class=\"recom-section\">\n                <div class=\"col-md-6  col-sm-12  col-xs-12 np\"  *ngIf=\"jsonBuilderHelper.getSelectedFormula().range.status\" >\n                  <div class=\"left-sec\">\n                    <div class=\"left-outer\">\n                      <div class=\"rec-image-outer\">\n\n                        <!-- <span style=\"font-size: 45px\" *ngIf=\"loading\" >Loading</span> -->\n                        <img [src]=\"jsonBuilderHelper.getSelectedFormula().result\" >\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6  col-sm-12  col-xs-12 np\"\n                     [ngClass]=\"{\n                                  'w100': !(jsonBuilderHelper.getSelectedFormula().range.status)\n                                }\"\n                  >\n                  <div class=\"outer-main\">\n                    <div class=\"leadform-outer\">\n                      <h1>{{jsonBuilderHelper.getSelectedFormula().name}}</h1>\n                      <h5 *ngIf=\"jsonBuilderHelper.getSelectedFormula().html!=''\">\n                        <p [innerHtml]=\"jsonBuilderHelper.getSelectedFormula().html | safeHtml\">\n                      </h5>\n                      <div class=\"t1-result-leadform\">\n                        <control\n                          [data]=\"staticControls.Result.leadform\"\n                          [page] =\"page\"\n                          class=\"{{staticControls.Result.leadform.defaultClass}}\"\n                          (controlOutput)=\"onResultLeadFormSubmit($event)\"\n                          *ngIf=\"staticControls.Result.leadform.visible\"\n                          (click)=\"selectModel($event,'Outcome_Settings');\"\n                        ></control>\n                        <control\n                          [data]=\"staticControls.Result.click_button\"\n                          [page]=\"page\"\n                          class=\"{{staticControls.Result.click_button.defaultClass}}\"\n                          (controlOutput)=\"onResultLeadFormSubmit($event)\"\n                          *ngIf=\"staticControls.Result.click_button.visible\"\n                          (click) = \"scrollToTopProperties()\"\n                        ></control>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <control\n                  [data]=\"staticControls.Result.result_disclaimer\"\n                  class=\"{{staticControls.Result.result_disclaimer.defaultClass}}\"\n                  *ngIf=\"staticControls.Result.result_disclaimer.visible\"\n                  (click) = \"scrollToTopProperties()\"\n                ></control>\n                <div class=\"t1-social-links\">\n                  <control\n                    [data]=\"staticControls.Result.share_links\"\n                    class=\"{{staticControls.Result.share_links.defaultClass}}\"\n                    *ngIf=\"staticControls.Result.share_links.visible\"\n                  ></control>\n                </div>\n              </div>\n            </div>\n        </section>\n        <!--Recom Result End-->\n      </div>\n    </div>\n    <!--Result End-->\n\t</div>\n</div>\n"

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = "<div *ngFor=\"let page of getVisiblePages(), let pageIndex=index\"\n     (mousedown)=\"selectpage(page)\"\n     class=\"{{page.defaultClass}} {{'page_'+pageIndex}} w100 {{devMode?'editor-page-divider':''}}\"\n     [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\n     [style.backgroundImage]=\"(page.type!='Questionnaire'?_templateRenderer.getBackground('img'):'') | safeStyle\"\n     [class.hide]=\"pageIndex && !devMode\"\n     [class.main-bg]=\"page.type=='Landing'\"\n     [class.margin-none]=\"page.type=='Result' && !devMode\"\n     (click)=\"selectModel($event,'Page')\"\n>\n\n  <section *ngIf=\"page.type=='Questionnaire'\"  >\n    <div>\n      <div class=\"questions-header que-fixed\" >\n        <header>\n          <div class=\"w100p p-right0 top-fix-bar\">\n            <div class=\"col-md-10 col-sm-12 col-xs-12 logo\">\n              <a href=\"#\">\n                <control\n                  [data]=\"staticControls.Landing.logo\"\n                  class=\"{{staticControls.Landing.logo.defaultClass}}\"\n                  *ngIf=\"staticControls.Landing.logo.visible\"\n                ></control>\n              </a>\n            </div>\n            <div class=\"col-md-2 col-sm-3 col-xs-4 right-sec\" *ngIf=\"jsonBuilderHelper.getJSONBuilt().realTime\">\n              <i class=\" material-icons\">zmdi_info</i>\n              <p>your app estimate</p>\n              <span [fetch-result]=\"0\" >$500 - $1500</span>\n            </div>\n          </div>\n        </header>\n      </div>\n    </div>\n  </section>\n  <section\n    *ngFor=\"let section of getVisibleSections(page), let secIndex=index\"\n    (mousedown)=\"selectSection(section)\"\n    class=\"{{section.defaultClass}}\"\n    [ngClass]=\"{\n                    'hide': section.defaultClass === 'right-section' && !section.items[0].visible,\n                    'w100': section.fullWidth\n                }\"\n  >\n    <div *ngIf=\"page.type=='Landing'\">\n      <div class=\"landing-responsive\">\n        <div\n          *ngFor=\"let control of section.items,let i=index\"\n          [attr.data-order]=\"i+1\"\n        >\n          <control [page] =\"page\" [data]=\"control\"\n                   (mousedown)=\"selectpage(page)\"\n                   (click)=\"selectModel($event,'Page')\"\n                   (controlOutput)=\"onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\n                   [devMode]=\"devMode\"   *ngIf=\"control.visible && control.type == 'leadform'\" >\n          </control>\n          <control  [data]=\"control\"\n\n                    [devMode]=\"devMode\"\n                    (controlOutput)=\"onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\n                    *ngIf=\"control.visible && control.type !== 'leadform'\" >\n          </control>\n\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"page.type=='Questionnaire'\"  (click)=\"selectModel($event,'Section')\" >\n      <div class=\"questions {{'sec_'+secIndex}}\" [class.hide]=\"secIndex && !devMode\">\n        <div class=\" question-section-outer\">\n          <div class=\"w100\" >\n            <div class=\"question-head\">{{section.title}}</div>\n            <div class=\"question-subhead\" *ngIf=\"section.showDesc\">{{section.description}}\n            </div>\n            <div class=\"w100 text-center\"  *ngIf =\"section.type=='LeadFormQ'\">\n              <div\n                *ngFor=\"let control of section.items,let i=index\"\n                [attr.data-order]=\"i+1\"\n                class=\"sec_{{secIndex}}_q_{{i}}\"\n              >\n                <control [data]=\"control\"\n                         (controlOutput)=\"(secIndex+1)!=getVisibleSections(page).length?\n                                                    onLeadFormSubmit($event,'sec_'+(secIndex+1)):\n                                                    onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\n                         (mousedown)=\"selectSection(section)\"\n                         (click)=\"selectModel($event,'Section')\"\n                         [devMode]=\"devMode\">\n                </control>\n              </div>\n            </div>\n\n            <!--form start-->\n            <form (ngSubmit)=\"onSubmit(tvs.getFormGroups()[section._id])\" [formGroup]=\"tvs.getFormGroups()[section._id]\" novalidate *ngIf =\"section.type!='LeadFormQ'\">\n              <div class=\"question-section\">\n                <div\n                  *ngFor=\"let control of section.items,let i=index\"\n                  [attr.data-order]=\"i+1\"\n                  (mousedown)=\"selectControl(control)\"\n                  class=\"sec_{{secIndex}}_q_{{i}}\"\n                  (click)=\"selectModel($event,'Control')\"\n                >\n                  <div class=\"question-components\" >\n                    <div class=\"section-head\">\n                                                        <span class=\"pull-left\">\n                                                                {{control.props.title}}<span *ngIf=\"control.config.validations.required.status\" class=\"requiredAsteric\">*</span>\n                                                        <div class=\"help-outer\" *ngIf=\"control.config.showHelp\">\n                                                            <i class=\"material-icons\" >help_outline</i>\n                                                            <div class=\"help-text\">{{control.props.helpText}}</div>\n                                                        </div>\n                                                        </span>\n                    </div>\n                    <control [data]=\"control\" [form]=\"tvs.getFormGroups()[section._id]\"></control>\n                  </div>\n                </div>\n              </div>\n              <div class=\"w100 text-center\">\n                <button class=\"btn prime-action sliding-next\"\n\n                        (click)=\"onSubmit(tvs.getFormGroups()[section._id],section._id);\n                                                (secIndex+1)!= getVisibleSections(page).length?\n                                                onButtonClick($event,'sec_'+(secIndex+1)):\n                                                onButtonClick($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\n                                            \"\n                        [class.hide]=\"buttonShowHide\"\n                >\n                  <!--[themeColor]=\"['background']\"-->\n                  {{section.buttonTitle}}\n                </button>\n              </div>\n            </form>\n            <!--form end-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <div *ngIf=\"page.type=='Result'\">\n    <div class=\"result-overlay\">\n      <!-- for numerical calculators start-->\n      <div class=\"result-centre-outer\" *ngIf=\"staticControls!={} && jsonBuilderHelper.getJSONBuilt().templateType =='Numerical'\">\n        <!-- Control: result header-->\n        <control\n          [data]=\"staticControls.Result.result_header\"\n          class=\"{{staticControls.Result.result_header.defaultClass}}\"\n          *ngIf=\"staticControls.Result.result_header.visible\"\n        ></control>\n        <div class=\"col-xs-12 np\" *ngIf=\"staticControls.Result.Result\">\n          <!-- Control: result outputs-->\n          <div class=\"result-mid\">\n            <div\n              *ngFor=\"let control of staticControls.Result.Result.items,let i=index\" [attr.data-order]=\"i+1\" class=\"{{control.defaultClass}}\"\n              [hidden]=\"!control.visible\"\n              (mousedown)=\"selectpage(page); selectControl(control);\"\n              (mouseup)=\"selectModel($event,'Page')\"\n              [ngClass]=\"{\n                                    'result-small-section':(staticControls.Result.Result.title=='Result'),\n                                    'result-full-section':(staticControls.Result.Result.title=='Result' && ((((getVisibleItems(staticControls.Result.Result).length - 1) % 3)==1 && (i+1) == getVisibleItems(staticControls.Result.Result).length) || ((i+1) == 1))),\n                                    'result-half-section':(staticControls.Result.Result.title=='Result' && (((getVisibleItems(staticControls.Result.Result).length - 1) % 3)==2 && ((i+1) == getVisibleItems(staticControls.Result.Result).length || (i+1) == getVisibleItems(staticControls.Result.Result).length-1)))\n                                }\"\n            >\n              <control [data]=\"control\" *ngIf=\"control.visible\"></control>\n\n            </div>\n          </div>\n          <!-- Control: leadform -->\n          <div class=\"leadform-outer\">\n            <control\n              [data]=\"staticControls.Result.leadform\"\n              [page] =\"page\"\n              class=\"{{staticControls.Result.leadform.defaultClass}}\"\n              (controlOutput)=\"onResultLeadFormSubmit($event)\"\n              *ngIf=\"staticControls.Result.leadform.visible\"\n              (click)=\"selectModel($event,'Page')\"\n            ></control>\n            <!-- Control: click_button -->\n            <control\n              [data]=\"staticControls.Result.click_button\"\n              [page]=\"page\"\n              class=\"{{staticControls.Result.click_button.defaultClass}}\"\n              (controlOutput)=\"onResultLeadFormSubmit($event)\"\n              *ngIf=\"staticControls.Result.click_button.visible\"\n              (click) = \"scrollToTopProperties()\"\n            ></control>\n          </div>\n        </div>\n        <!-- Control: result disclaimer -->\n        <control\n          [data]=\"staticControls.Result.result_disclaimer\"\n          class=\"{{staticControls.Result.result_disclaimer.defaultClass}}\"\n          *ngIf=\"staticControls.Result.result_disclaimer.visible\"\n          (click) = \"scrollToTopProperties()\"\n        ></control>\n        <div class=\"share-set\">\n          <!-- Control: share links -->\n          <control\n            [data]=\"staticControls.Result.share_links\"\n            class=\"{{staticControls.Result.share_links.defaultClass}}\"\n            *ngIf=\"staticControls.Result.share_links.visible\"\n          ></control>\n          <!-- Control: result redo -->\n\n          <!--<control\n              [data]=\"staticControls.Result.result_redo\"\n              class=\"{{staticControls.Result.result_redo.defaultClass}}\"\n              *ngIf=\"staticControls.Result.result_redo.visible\"\n          ></control>-->\n        </div>\n      </div>\n      <!-- for numerical calculators End -->\n\n      <!-- for recomended calculators -->\n      <div class=\"result-centre-outer recommendation-outer\" *ngIf=\"staticControls!={} && jsonBuilderHelper.getJSONBuilt().templateType =='Recommendation' && jsonBuilderHelper.getSelectedFormula()\">\n        <!-- Control: result header-->\n        <div class=\"mid-width\" ><p [innerHtml]=\"jsonBuilderHelper.getSelectedFormula().decimal | safeHtml\">\n        </p></div>\n        <div class=\"col-xs-12 np\" >\n          <div class=\"recom-section\">\n            <div class=\"col-md-6  col-sm-12  col-xs-12 np\"  *ngIf=\"jsonBuilderHelper.getSelectedFormula().range.status\" >\n              <div class=\"left-sec\">\n                <div class=\"left-outer\">\n                  <div class=\"rec-image-outer\">\n                    <img [src]=\"jsonBuilderHelper.getSelectedFormula().result\" >\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- Control: leadform -->\n            <div class=\"col-md-6  col-sm-12  col-xs-12 np\"\n                 [ngClass]=\"{\n                                    'w100': !(jsonBuilderHelper.getSelectedFormula().range.status)\n                                    }\"\n            >\n              <div class=\"outer-main\">\n                <div class=\"leadform-outer\">\n                  <h1>{{jsonBuilderHelper.getSelectedFormula().name}}</h1>\n                  <h5>\n                    <p [innerHtml]=\"jsonBuilderHelper.getSelectedFormula().html | safeHtml\">\n                      <!--{{jsonBuilderHelper.getSelectedFormula().html}}-->\n                  </h5>\n\n                  <control\n                    [data]=\"staticControls.Result.leadform\"\n                    [page] =\"page\"\n                    class=\"{{staticControls.Result.leadform.defaultClass}}\"\n                    (controlOutput)=\"onResultLeadFormSubmit($event)\"\n                    *ngIf=\"staticControls.Result.leadform.visible\"\n                    (click)=\"selectModel($event,'Page')\"\n                  ></control>\n                  <!-- Control: click_button -->\n                  <control\n                    [data]=\"staticControls.Result.click_button\"\n                    [page]=\"page\"\n                    class=\"{{staticControls.Result.click_button.defaultClass}}\"\n                    (controlOutput)=\"onResultLeadFormSubmit($event)\"\n                    *ngIf=\"staticControls.Result.click_button.visible\"\n                    (click) = \"scrollToTopProperties()\"\n                  ></control>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Control: result disclaimer -->\n        <control\n          [data]=\"staticControls.Result.result_disclaimer\"\n          class=\"{{staticControls.Result.result_disclaimer.defaultClass}}\"\n          *ngIf=\"staticControls.Result.result_disclaimer.visible\"\n          (click) = \"scrollToTopProperties()\"\n        ></control>\n        <div class=\"share-set\">\n          <!-- Control: share links -->\n          <control\n            [data]=\"staticControls.Result.share_links\"\n            class=\"{{staticControls.Result.share_links.defaultClass}}\"\n            *ngIf=\"staticControls.Result.share_links.visible\"\n          ></control>\n          <!-- Control: result redo -->\n        </div>\n      </div>\n      <!-- for recomended calculators End -->\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = "<div class=\"temp2-bg\"\n     *ngIf=\"!devMode\"\n     [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\n     [style.backgroundImage]=\"_templateRenderer.getBackground('img') | safeStyle\">\n  <div class=\"bg-overlay\"></div>\n</div>\n<div *ngFor=\"let page of getLandingPage(), let pageIndex=index\"\n     (mousedown)=\"selectpage(page)\" (click)=\"selectModel($event,'Page')\"\n     class=\"main-bg {{page.defaultClass}} {{'page_'+pageIndex}} w100\"\n     [class.hide]=\"pageIndex && !devMode\"\n     [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\n     [style.backgroundImage]=\"_templateRenderer.getBackground('img') | safeStyle\"\n>\n  <section *ngFor=\"let section of getVisibleSections(page),let secIndex=index\" (mousedown)=\"selectSection(section)\" class=\"{{section.defaultClass}}\"\n           [ngClass]=\"{\n                        'hide': section.items.length == 0\n                    }\">\n    <div *ngFor=\"let control of section.items,let i=index\" [attr.data-order]=\"i+1\" (mousedown)=\"selectControl(control)\">\n      <control [page] =\"page\" [data]=\"control\"\n              (mousedown)=\"selectpage(page)\"\n              (click)=\"selectModel($event,'Page')\"\n               (controlOutput)=\"onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\n               *ngIf=\"control.visible && control.type == 'leadform'\">\n      </control>\n      <control  [data]=\"control\"\n                [devMode]=\"devMode\"\n                (controlOutput)=\"onLeadFormSubmit($event,'page_'+(pageIndex+1),'page_'+(pageIndex))\"\n                *ngIf=\"control.visible && control.type !== 'leadform'\" >\n      </control>\n    </div>\n  </section>\n</div>\n<div [style.backgroundColor]=\"_templateRenderer.getBackground('color') | safeStyle\"\n     [style.backgroundImage]=\"_templateRenderer.getBackground('img') | safeStyle\"\n     [class.divider-2]=\"devMode\"\n\n>\n  <div class=\"page-logo\" [class.hide]=\"getLandingPage().length && !devMode\">\n    <control [data]=\"staticControls.Landing.logo\"  *ngIf=\"staticControls!={}\"></control>\n  </div>\n  <div *ngFor=\"let page of getVisiblePages(), let pageIndex=index\" (mousedown)=\"selectpage(page)\" (click)=\"selectModel($event,'Page')\"\n       class=\"{{page.defaultClass}} {{'page_'+(pageIndex+1)}} w100 mobile-result-sticky\" [class.hide]=\"getLandingPage().length && !devMode\"\n  >\n    <section *ngFor=\"let section of getVisibleSections(page),let secIndex=index\" (mousedown)=\"selectSection(section)\" class=\"{{section.defaultClass}}\"\n             [ngClass]=\"{\n                        'hide': section.items.length == 0 ,\n                        'sroll-result': section.type=='Result'\n                    }\">\n      <div *ngIf=\"page.type=='Questionnaire'\" (click)=\"selectModel($event,'Section')\">\n        <div class=\"questions {{'sec_'+secIndex}}\">\n          <div class=\" question-section-outer\">\n            <div class=\"w100\">\n              <div class=\"question-head\">{{section.title}}</div>\n              <div class=\"question-subhead\" *ngIf=\"section.showDesc\">{{section.description}}\n              </div>\n              <form (ngSubmit)=\"onSubmit(tvs.getFormGroups()[section._id])\"\n                    [formGroup]=\"tvs.getFormGroups()[section._id]\"  *ngIf = \"section.type !=='LeadFormQ'\" novalidate>\n                <div class=\"question-section\">\n                  <div *ngFor=\"let control of section.items,let i=index\" [attr.data-order]=\"i+1\" (mousedown)=\"selectControl(control)\" class=\"sec_{{secIndex}}_q_{{i}}\"\n                       (click)=\"selectModel($event,'Control')\">\n                    <div class=\"question-number\" *ngIf=\"section.type !== 'LeadFormQ'\">{{i+1}}</div>\n\n                    <div class=\"question-components\" >\n                      <div class=\"section-head\">\n                                                <span class=\"pull-left\">\n                                                        {{control.props.title}}<span *ngIf=\"control.config.validations.required.status\" class=\"requiredAsteric\">*</span>\n                                                <div class=\"help-outer\">\n                                                    <i class=\"material-icons\" *ngIf=\"control.config.showHelp\">help_outline</i>\n                                                    <div class=\"help-text\" *ngIf=\"control.config.showHelp\">{{control.props.helpText}}</div>\n                                                </div>\n                                                </span>\n                      </div>\n                      <control [data]=\"control\" [form]=\"tvs.getFormGroups()[section._id]\"></control>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"w100 text-center\">\n                  <button class=\"btn prime-action sliding-next\" [disabled]=\"!tvs.getFormGroups()[section._id].valid\" (click)=\"onSubmit(tvs.getFormGroups()[section._id]);\n                                                    (secIndex+1)!=getVisibleSections(page).length?\n                                                    onButtonClick($event,'sec_'+(secIndex+1)):\n                                                    onButtonClick($event,'page_'+(pageIndex+1))\n                                                \" [class.hide]=\"buttonShowHide\" >\n                    <!--[themeColor]=\"['background']\"-->\n                    {{section.buttonTitle}}\n                  </button>\n                </div>\n              </form>\n              <form (ngSubmit)=\"onSubmit(tvs.getFormGroups()[section._id])\"\n                    [formGroup]=\"tvs.getFormGroups()[section._id]\"  *ngIf = \"section.type === 'LeadFormQ'\" novalidate>\n                <div class=\"question-section\">\n                  <div *ngFor=\"let control of section.items,let i=index\" [attr.data-order]=\"i+1\" (mousedown)=\"selectControl(section)\" class=\"sec_{{secIndex}}_q_{{i}}\"\n                       (click)=\"selectModel($event,'Section')\">\n                    <div class=\"question-number\" *ngIf=\"section.type !== 'LeadFormQ'\">{{i+1}}</div>\n                    <!--[themeColor]=\"['colorClass']\"-->\n                    <control [data]=\"control\" [form]=\"tvs.getFormGroups()[section._id]\"></control>\n                  </div>\n                </div>\n                <div class=\"w100 text-center\">\n                  <button class=\"btn prime-action sliding-next\" [disabled]=\"!tvs.getFormGroups()[section._id].valid\" (click)=\"onSubmit(tvs.getFormGroups()[section._id]);\n                                                    (secIndex+1)!=getVisibleSections(page).length?\n                                                    onButtonClick($event,'sec_'+(secIndex+1)):\n                                                    onButtonClick($event,'page_'+(pageIndex+1))\n                                                \" [class.hide]=\"buttonShowHide\" >\n                    <!--[themeColor]=\"['background']\"-->\n                    {{section.buttonTitle}}\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <div class=\"temp2-scrollbar\"  *ngIf=\"page.type=='Result'\">\n      <a class=\"mobile-result-linkAdd\" (click)=\"mobilestickyAdd()\" href=\"javascript:void(0);\"><i class=\"material-icons\">keyboard_backspace</i> Back</a>\n      <control\n        [data]=\"staticControls.Result.result_header\"\n        class=\"{{staticControls.Result.result_header.defaultClass}}\"\n        *ngIf=\"staticControls.Result.result_header.visible\"\n      ></control>\n      <div *ngIf=\"staticControls.Result.Result\">\n        <div class=\"result-mid result-comm\" [class.result-scroller]=\"staticControls.Result.Result.items.length>3\">\n          <div\n            *ngFor=\"let control of staticControls.Result.Result.items,let i=index\" [attr.data-order]=\"i+1\" class=\"{{control.defaultClass}} \"\n            [hidden]=\"!control.visible\"\n            (mousedown)=\"selectpage(page); selectControl(control);\"\n            (mouseup)=\"selectModel($event,'Page')\"\n            [ngClass]=\"{\n                                    'result-temp2-default-section':true,\n                                    'result-full-section':(i==0),\n                                    'result-half-section':(i>0)\n                                }\"\n          >\n            <control [data]=\"control\"  *ngIf=\"control.visible\"></control>\n\n          </div>\n        </div>\n        <div class=\"leadform-outer\">\n          <control\n            [data]=\"staticControls.Result.leadform\"\n            [page] = \"page\"\n            class=\"{{staticControls.Result.leadform.defaultClass}}\"\n            (controlOutput)=\"onResultLeadFormSubmit($event)\"\n            *ngIf=\"staticControls.Result.leadform.visible\"\n            (mousedown)=\"selectpage(page)\"\n            (click)=\"selectModel($event,'Page');scrollToTopProperties()\"\n          ></control>\n\n          <control\n            [data]=\"staticControls.Result.click_button\"\n            [page]=\"page\"\n            class=\"{{staticControls.Result.click_button.defaultClass}}\"\n            (controlOutput)=\"onResultLeadFormSubmit($event)\"\n            *ngIf=\"staticControls.Result.click_button.visible\"\n            (click) = \"scrollToTopProperties()\"\n          ></control>\n        </div>\n      </div>\n\n      <control\n        [data]=\"staticControls.Result.result_disclaimer\"\n        class=\"{{staticControls.Result.result_disclaimer.defaultClass}}\"\n        *ngIf=\"staticControls.Result.result_disclaimer.visible\"\n        (click) = \"scrollToTopProperties()\"\n      ></control>\n      <div class=\"share-set\">\n        <control\n          [data]=\"staticControls.Result.share_links\"\n          class=\"{{staticControls.Result.share_links.defaultClass}}\"\n          *ngIf=\"staticControls.Result.share_links.visible\"\n        ></control>\n        <!--<control\n            [data]=\"staticControls.Result.result_redo\"\n            class=\"{{staticControls.Result.result_redo.defaultClass}}\"\n            *ngIf=\"staticControls.Result.result_redo.visible\"\n        ></control>-->\n      </div>\n      <a class=\"mobile-result-link\" (click)=\"mobilestickyRemove()\" href=\"javascript:void(0);\"><i class=\"material-icons\">keyboard_arrow_up</i></a>\n      <!--<control\n          [data]=\"staticControls.Result.result_summary\"\n          class=\"{{staticControls.Result.result_summary.defaultClass}}\"\n          (controlOutput)=\"onResultLeadFormSubmit($event)\"\n          *ngIf=\"staticControls.Result.result_summary.visible\"\n      ></control>-->\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 896:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(55);
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

/***/ 920:
/***/ function(module, exports) {

module.exports = "/*################### 404  css start ###################*/\nbody.main-profile{ overflow: hidden;}\n.navbar-brand{\n  padding: 0px;\n  margin-left: 10px !important;\n  margin-top: 5px;\n}\n.custom-navbar.navbar-default{\n  background:#fff;\n  border:none;\n  padding: 10px;\n  padding-right: 25px;\n  margin: 0px;\n}\n.custom-navbar.navbar-default .navbar-nav > li{\n  margin-right: 20px;\n}\n.custom-navbar.navbar-default .navbar-nav > li > a{\n  font-size: 14px;\n  color: #62696d;\n  text-transform: uppercase;\n}\n.custom-navbar.navbar-default .navbar-nav > li > a:hover{\n  color: #fb5f66;\n}\n.custom-navbar.navbar-default .navbar-nav > li > a.active{\n  color: #fb5f66;\n}\n.custom-navbar.navbar-default .navbar-nav > li > a.line-through{\n  text-decoration: line-through;\n}\n.custom-navbar .btn-login{\n  background: #fb5f66;\n  color: #fff !important;\n  text-transform: none !important;\n  padding: 3px 30px;\n  margin-top: 10px;\n  border: 2px solid #fb5f66;\n}\n.custom-navbar .btn-login:hover{\n  border: 2px solid #fb5f66;\n  background: none;\n  color: #fb5f66 !important;\n}\n.custom-navbar .link-login{\n  color: #fb6c73 !important;\n  /*padding: 3px 30px;\n  margin-top: 10px;\n  border: 2px solid #fff;*/\n  font-family:montserratbold;\n}\n.custom-navbar .link-login:hover{\n  /*border: 2px solid #fb5f66;*/\n  background: none;\n  color: #fb5f66 !important;\n  opacity:0.5;\n}\n.nav-boxshadow{\n  box-shadow:0 2px 9px 1px rgba(0,0,0,0.2);\n}\n.section{\n  float: left;\n  width: 100%;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.section-1{\n  float: left;\n  width: 100%;\n  background: #fff;\n  padding-top: 52px;\n  padding-bottom: 30px;\n  margin-bottom: 0;\n}\n.section-1 .container-fluid{\n  padding: 0px;\n}\n.section-1-left{\n  padding-left: 55px;\n  display: table;\n}\n.section1-left-cell{\n  display: table-cell;\n  height: 83vh;\n  vertical-align: middle;\n}\n.section-1-left h3{\n  float: left;\n  width: 100%;\n  font-size: 36px;\n  font-family:montserratbold;\n  color: #fb6c73;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n  margin-top: 0px;\n}\n.section-1-left h4{\n  float: left;\n  width: 100%;\n  font-size: 24px;\n  font-family:montserratlight;\n  color: #62696d;\n  margin-bottom: 30px;\n}\n.section-1-left input{\n  padding: 10px;\n  width: 70%;\n}\n.section-1-left .btn-buildcal{\n  background: #62696d;\n  border: none;\n  color: #fff;\n  float: left;\n  font-size: 18px;\n  text-transform: uppercase;\n  padding: 15px 25px;\n  margin-top: 20px;\n}\n.section-1-left .btn-buildcal i{\n  display: inline-block;\n  float:left;\n  margin-right: 10px;\n}\n.section-1-left .btn-bottominfo{\n  float: left;\n  width: 282px;\n  text-align: center;\n  margin-top: 10px;\n}\n.section-1-left .btn-bottominfo span{\n  float: none;\n  width: 100%;\n  color: #fb6c73;\n  font-size: 12px;\n  font-family: montserratbold;\n  text-align: left;\n}\n.section-1-left .btn-bottominfo label{\n  float: none;\n  width: 100%;\n  color: #62696d;\n  font-size: 12px;\n  font-family: montserratlight;\n}\n\n.section-1-left h3.heading-404{\n  float: left;\n  width: 100%;\n  font-size: 72px;\n  font-family: montserratsemibold;\n  color: #fb6c73;\n  text-transform: uppercase;\n  margin-bottom:0px;\n  margin-top: 0px;\n}\n.section-1-left h4.heading2-404 {\n  float: left;\n  width: 100%;\n  font-size: 18px;\n  font-family: montserratlight;\n  color: #62696d;\n  margin-bottom: 30px;\n  line-height: 25px;\n}\n.section-1 .btn-buildcal.login-404{\n  background: #62696d;\n  border: none;\n  color: #fff;\n  float: left;\n  font-size: 16px;\n  text-transform: uppercase;\n  border:2px solid #62696d;\n  padding: 15px 25px;\n  margin-top: 20px;\n  -webkit-transition: .5s ease-in-out;\n  transition: .5s ease-in-out;\n}\n.section-1 .btn-buildcal.login-404:hover{\n  background:none;\n  border:2px solid #62696d;\n  color:#62696d;\n}\n.sec1-box-left.img-404{\n  margin-top: 18%;\n}\n.footer-404{\n  position: fixed;\n  bottom: 15px;\n}\n.footer-404 i{\n  font-size: 14px;\n  color: #62696d;\n  position: relative;\n  top: 2px;\n  right: 4px;\n}\n.footer-404 span{\n  font-family: \"montserratlight\";\n  font-size: 14px;\n  color: #62696d;\n}\n.footer-404 img{\n  position: relative;\n  top: -3px;\n  right: -5px;\n}\n\n\n/*################### 404  css end ###################*/\n"

/***/ }

});
//# sourceMappingURL=4.map