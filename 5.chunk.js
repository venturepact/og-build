webpackJsonp([5,13],{

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview_component__ = __webpack_require__(938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__template_module__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_routes_builder_routes__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__builder_services_builder_service__ = __webpack_require__(248);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewModule", function() { return PreviewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PreviewModule = (function () {
    function PreviewModule() {
    }
    PreviewModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__config_routes_builder_routes__["b" /* PREVIEW_ROUTES */]), __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_4__template_module__["a" /* TemplateModule */]],
            exports: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__preview_component__["a" /* PreviewComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__builder_services_builder_service__["a" /* BuilderService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], PreviewModule);
    return PreviewModule;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/preview.module.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JSONItemTracker; });
var JSONItemTracker = (function () {
    function JSONItemTracker() {
        this.UnSavedItems = [];
        this.UnSavedSections = [];
        this.UnSavedData = { app: {}, page: {}, sections: [], items: [] };
    }
    JSONItemTracker.prototype.setUnSavedItems = function (trackitem) {
        var index = jQuery.inArray(trackitem, this.UnSavedItems);
        if (index !== -1) {
            this.UnSavedItems[index] = trackitem;
        }
        else {
            this.UnSavedItems.push(trackitem);
        }
        this.UnSavedSections = [];
        this.UnSavedPage = undefined;
    };
    JSONItemTracker.prototype.setUnSavedSections = function (trackSection) {
        var index = jQuery.inArray(trackSection, this.UnSavedSections);
        if (index !== -1) {
            this.UnSavedSections[index] = trackSection;
        }
        else {
            this.UnSavedSections.push(trackSection);
        }
        this.UnSavedPage = undefined;
        this.UnSavedItems = [];
    };
    JSONItemTracker.prototype.setUnSavedPage = function (trackPage) {
        this.UnSavedSections = [];
        this.UnSavedItems = [];
        this.UnSavedPage = trackPage;
    };
    JSONItemTracker.prototype.getUnSavedData = function () {
        return {
            app: '',
            sections: this.UnSavedSections,
            items: this.UnSavedItems,
            page: (this.UnSavedPage == undefined) ? '' : this.UnSavedPage
        };
    };
    JSONItemTracker.prototype.resetUnsavedData = function () {
        this.UnSavedPage = undefined;
        this.UnSavedSections = [];
        this.UnSavedItems = [];
    };
    return JSONItemTracker;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/JSONUpdateItemTracker.service.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
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



var DashboardService = (function (_super) {
    __extends(DashboardService, _super);
    function DashboardService(_http) {
        _super.call(this);
        this._http = _http;
    }
    DashboardService.prototype.duplicateApp = function (appId) {
        return this._http.post(this._url + '/dashboard/duplicate_app', appId, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DashboardService.prototype.deleteApp = function (appId) {
        return this._http.post(this._url + '/dashboard/delete_app', appId, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DashboardService.prototype.changeAppMode = function (id) {
        return this._http.post(this._url + '/dashboard/change_app_mode', { id: id }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DashboardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], DashboardService);
    return DashboardService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/dashboard.service.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_models_model__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultJSON; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefaultJSON = (function () {
    function DefaultJSON() {
    }
    DefaultJSON.prototype.getJSON = function (template) {
        if (template == 'one-page-slider' && (localStorage.getItem('temp_type') == 'Numerical'))
            return this.getONPSjson();
        else if (template == 'one-page-slider' && (localStorage.getItem('temp_type') == 'Recommendation'))
            return this.getONPSRecommendedjson();
        else if (template == 'one-page-card' && (localStorage.getItem('temp_type') == 'Numerical'))
            return this.getOPCjson();
        else if (template == 'one-page-card' && (localStorage.getItem('temp_type') == 'Recommendation'))
            return this.getONPSRecommendedjson();
        else if (template == 'inline-temp' && (localStorage.getItem('temp_type') == 'Numerical'))
            return this.getITjson();
        else if (template == 'inline-temp' && (localStorage.getItem('temp_type') == 'Recommendation'))
            return this.getITRecommendedjson();
        else
            return this.getSCjson();
    };
    /* for numerical calculator */
    DefaultJSON.prototype.getONPSjson = function () {
        var app = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* App */](); //create new app
        app.setThemeColor('cp1');
        //create pages
        var landingPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Landing', 'https://cdn.filepicker.io/api/file/KA8fpEzQ7Ka2rWl2rXVf');
        var questionPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Questionnaire');
        var resultPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Result', 'https://cdn.filepicker.io/api/file/KA8fpEzQ7Ka2rWl2rXVf');
        //add All pages in app
        app.addPages(landingPage, questionPage, resultPage);
        // LANDING Page starts //
        // section 1 of LANDING page
        var section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Logo Heading');
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('logo', 'https://cdn.filestackcontent.com/IjyZk9sT6iqWOl1ySbM1', 'textfield help');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('header', "<strong>CALCULATE THE RISK OF YOU GETTING A HEART DISEASE</strong>", 'textfield help', '', 'main-heading th-bold-new');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('sub_header', "Heart problems are at an all time high. See if your lifestyle makes you susceptible.", 'textfield help', '', 'sub-heading ts-bold-new');
        item2.setVisibility(false);
        var item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'GET STARTED', 'textfield help');
        item3.setVisibility(false);
        var item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'GET STARTED', 'textfield help');
        item4.setVisibility(true);
        section2.addItems(item1, item2, item3, item4);
        // section 3 of LANDING page
        var section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Footer', 'landing-footer-outer');
        //item1 = new Item('footer_links', 'This is the footer link', 'somehelp random');
        //item1.addLinksToFooter([{ label: 'Privacy Policy', value: 'http://venturepact.com' }]);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section3.addItems(item1);
        landingPage.addSections(section1, section2, section3);
        // Questionnaire page starts //
        // SUB Section1(Questions) of Question Page
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Your Lifestyle', '', 'Tell us a little bit more!');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'Do you smoke?', '', '');
        item1.addFieldToCheckbox([{ label: 'Never touched a cigarette', icon: '' },
            { label: 'Once in a while', icon: '' },
            { label: 'A pack a day', icon: '' }]);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'How active is your lifestyle?', '');
        item2.addFieldToCheckbox([{ label: 'I play a sport everyday', icon: '' },
            { label: 'Occasionally', icon: '' },
            { label: 'My sofa is just way too comfortable', icon: '' }]);
        section1.addItems(item1, item2);
        questionPage.addSections(section1);
        // SUB Section2(Questions) of Question Page
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Diet', '', 'Tell us a little bit more!');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('checkbox', 'How will you classify your diet?', '');
        item1.addFieldToCheckbox([{ label: 'Vegan', icon: '' },
            { label: 'Vegetarian', icon: '' },
            { label: 'Healthy lean meat', icon: '' },
            { label: 'McDonalds style', icon: '' }]);
        section2.addItems(item1);
        questionPage.addSections(section2);
        // SUB Section3(Questions) of Question Page
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('General', '', 'Tell us a little bit more!');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('textfield', 'What is your age?', '', 'Age');
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'Where do you live?', '', '');
        item2.addFieldToCheckbox([{ label: 'Urban area', icon: '' },
            { label: 'Suburbs', icon: '' },
            { label: 'Farmland', icon: '' }]);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'How many people in your lineage (parents, grandparents) have a heart disease?', '');
        item3.addFieldToCheckbox([{ label: '1-2', icon: '' },
            { label: '3-4', icon: '' },
            { label: 'Over 4', icon: '' }]);
        section3.addItems(item1, item2, item3);
        questionPage.addSections(section3);
        // leadform section
        var leadSection = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadFormQ', '', 'Where can we send you a detailed report?');
        leadSection.setVisibility(true);
        leadSection.setVisibilityOfShowDesc(false);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform_question', 'Next', '', '', '');
        item1.setVisibility(true);
        leadSection.addItems(item1);
        questionPage.addSections(leadSection);
        //--- Result page sections --- START
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Header', 'top-head');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_header', "<p>Here\u2019s your risk of getting a heart disease: </p>");
        section1.addItems(item1);
        // Result Section 2 -- START
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Result', 'left-section');
        //R1
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', '<p>{R1}</p>', "<p>By age of 30</p>\n        <p>It is not common to get a heart disease so early on in life. You'll be safe!</p>", '', '');
        item1.options[0].label = item1.props.title;
        item1.options[0].icon = item1.props.helpText;
        item1.options[0].title = "Learn More";
        item1.options[0].description = "http://outgrow.co";
        item1.options.push(item1.options[0]);
        var Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R2
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', '<p>{R2}</p>', "<p>By the age of 40</p>\n                        <p>You're at a higher risk, but don't worry - no need to panic.</p>\n                        ", '', '');
        item1.options[0].label = item1.props.title;
        item1.options[0].icon = item1.props.helpText;
        item1.options[0].title = "Learn More";
        item1.options[0].description = "http://outgrow.co";
        item1.options.push(item1.options[0]);
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R3
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', '<p>{R3}</p>', "<p>By the age of 50</p>\n                        <p>The risks get higher, but a good diet will keep you safe.</p>\n                        ", '', '');
        item1.options[0].label = item1.props.title;
        item1.options[0].icon = item1.props.helpText;
        item1.options[0].title = "Learn More";
        item1.options[0].description = "http://outgrow.co";
        item1.options.push(item1.options[0]);
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R4
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', '<p>{R4}</p>', "<p>By the age of 65</p>\n                        <p>Things get serious now. Ensure you're living healthy.</p>", '', '');
        item1.options[0].label = item1.props.title;
        item1.options[0].icon = item1.props.helpText;
        item1.options[0].title = "Learn More";
        item1.options[0].description = "http://outgrow.co";
        item1.options.push(item1.options[0]);
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Schedule a Consultation Today', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Schedule a Consultation Today', 'textfield help');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_disclaimer', "This calculator is powered by Outgrow.co", '', '', 'bottom-section');
        item3.setVisibility(true);
        //label is title , icon is description
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('cta_shares');
        item4.addOptions([{ type: 'Facebook', selected: true, label: 'CALCULATE THE RISK OF YOU GETTING A HEART DISEASE | via @outgrowco', icon: 'Heart problems are at an all time high. See if your lifestyle makes you susceptible.', title: 'Share Your Results' },
            { type: 'Twitter', selected: false, label: 'CALCULATE THE RISK OF YOU GETTING A HEART DISEASE | via @outgrowco', icon: 'Heart problems are at an all time high. See if your lifestyle makes you susceptible.', title: 'Share Your Results' },
            { type: 'Linkedin', selected: false, label: 'CALCULATE THE RISK OF YOU GETTING A HEART DISEASE | via @outgrowco', icon: 'Heart problems are at an all time high. See if your lifestyle makes you susceptible.', title: 'Share Your Results' }]);
        item4.setVisibility(false);
        //label is for Url
        var item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('cta_likes');
        item5.addOptions([{ type: 'Facebook', selected: true, label: 'http://www.facebook.com/outgrowco', icon: '', title: 'Subscribe to Our Updates' },
            { type: 'Twitter', selected: false, label: 'outgrowco', icon: '', title: 'Subscribe to Our Updates' }]);
        item5.setVisibility(false);
        section3.addItems(item1, item2, item3, item4, item5);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('share_links');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_redo');
        section4.addItems(item1, item2);
        var section5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Summary', 'right-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_summary');
        section5.addItems(item1);
        resultPage.addSections(section1, section2, section3, section4, section5);
        //--- Result Section -- End
        return app;
    };
    DefaultJSON.prototype.getONPSRecommendedjson = function () {
        var app = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* App */]('Recommendation'); //create new app
        app.setThemeColor('cp1');
        //create pages
        var landingPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Landing', 'https://cdn.filestackcontent.com/0sHxFZL9T9qyI3Vf6jcO');
        var questionPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Questionnaire');
        var resultPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Result', 'https://cdn.filestackcontent.com/0sHxFZL9T9qyI3Vf6jcO');
        //add All pages in app
        app.addPages(landingPage, questionPage, resultPage);
        // LANDING Page starts //
        // section 1 of LANDING page
        var section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Logo Heading', 't1-landing-top');
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('logo', 'https://cdn.filestackcontent.com/IjyZk9sT6iqWOl1ySbM1', 'textfield help', '', 't1-logo');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('header', "<strong>Where to build your Startup?</strong>", 'textfield help', '', 'main-heading th-bold-new');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('sub_header', "See which emerging tech hub you should head to!", 'textfield help', '', 'sub-heading ts-bold-new');
        item2.setVisibility(true);
        var item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Let’s Find Out', 'textfield help', '', 't1-landing-leadform');
        item3.setVisibility(false);
        var item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Let’s Find Out', 'textfield help', '', 't1-button');
        item4.setVisibility(true);
        section2.addItems(item1, item2, item3, item4);
        // section 3 of LANDING page
        var section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Footer', 'landing-footer-outer');
        //item1 = new Item('footer_links', 'This is the footer link', 'somehelp random');
        //item1.addLinksToFooter([{ label: 'Privacy Policy', value: 'http://venturepact.com' }]);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section3.addItems(item1);
        landingPage.addSections(section1, section2, section3);
        // Questionnaire page starts //
        // SUB Section1(Questions) of Question Page
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Questions', '', 'Here We Go..');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'How would you categorize your startup?', '', '');
        item1.addFieldToCheckbox([{ label: 'Super High Tech', icon: '', value: '', imageURL: 'https://cdn.filestackcontent.com/UJgWPEdBTRKNkXGpiYpF' },
            { label: 'B2B Software', icon: '', value: '', imageURL: 'https://cdn.filestackcontent.com/gYdyOMKHQlCHhJWJkqBx' }, { label: 'Hardware', icon: '', value: '', imageURL: 'https://cdn.filestackcontent.com/2Ky64ivURpCikPkHHQRL' },
            { label: 'Consumer Software', icon: '', value: '', imageURL: 'https://cdn.filestackcontent.com/f7nuteEtQHCVc5rEutPR' }, { label: 'Services', icon: '', value: '', imageURL: 'https://cdn.filestackcontent.com/9IStq2oSTRSrHmXphxoo' }]);
        item1.setOptionImageVisibility(true, (item1.options.length > 4) ? '24%' : ((100 / item1.options.length) - 1) + '%');
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'Which industry are you in?', '');
        item2.addFieldToCheckbox([{ label: 'Finance', icon: '', value: '', imageURL: 'https://cdn.filestackcontent.com/CYvO1zGVQ1y0OAAEhEom' },
            { label: 'Healthcare', icon: '', value: '', imageURL: 'https://cdn.filestackcontent.com/eT7X9d8Tr2ZREpgq9NIa' }, { label: 'Real Estate', icon: '', value: '', imageURL: 'https://cdn.filestackcontent.com/lkIJEESw6vRk8eWID9A7' },
            { label: 'Hospitality', icon: '', value: '', imageURL: 'https://cdn.filestackcontent.com/Zx9OJDfQSTtYRfqkg6dY' }, { label: 'Retail', icon: '', value: '', imageURL: 'https://cdn.filestackcontent.com/Xsd79kEbTgCIClfMp8pI' },
            { label: 'Industry Agnostic', icon: '', value: '', imageURL: 'https://cdn.filestackcontent.com/8tryPC1XQV6YHgOH6Lrs' }]);
        item2.setOptionImageVisibility(true, (item2.options.length > 4) ? '24%' : ((100 / item2.options.length) - 1) + '%');
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'When are you looking to raise funds for your startup?', '');
        item3.addFieldToCheckbox([{ label: 'Immediately', icon: '', value: '' },
            { label: 'Maybe in the Future', icon: '', value: '' }, { label: 'Not at All', icon: '', value: '' }]);
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'How many developers will you need to hire in the next one year?', '', '');
        item4.addFieldToCheckbox([{ label: 'None', icon: '', value: '' },
            { label: '1-3', icon: '', value: '' }, { label: '3-10', icon: '', value: '' },
            { label: '10-50', icon: '', value: '' }]);
        var item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'Do you have a family?', '', '', '', 0, 0, '', 'https://cdn.filestackcontent.com/JPMqyaAPRHmXMTtsSo98');
        item5.addFieldToCheckbox([{ label: 'I am Single', icon: '', value: '' },
            { label: 'I am Married', icon: '', value: '' }, { label: 'I am a Father/Mother', icon: '', value: '' }]);
        item5.qustionImageVisibility(true);
        var item6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'Do you have a strong weather preference?', '');
        item6.addFieldToCheckbox([{ label: 'Not Really', icon: '', value: '' }, { label: 'I Need Warmth', icon: '', value: '' }]);
        section1.addItems(item1, item2, item3, item4, item5, item6);
        questionPage.addSections(section1);
        // leadform section
        var leadSection = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadFormQ', '', 'Where should we send you our analysis?');
        leadSection.setVisibility(true);
        leadSection.setVisibilityOfShowDesc(false);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform_question', 'Next', '', '', '');
        item1.setVisibility(true);
        leadSection.addItems(item1);
        questionPage.addSections(leadSection);
        //--- Result page sections --- START
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Header', 'top-head');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_header', "<p>Here\u2019s where we think you should head to! </p>");
        section1.addItems(item1);
        // Result Section 2 -- START
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Result', 'left-section');
        //R1
        var Formulaindex = app.addformula('<p>Sample Outcome</p>', 'New_Outcome', 'https://cdn.filestackcontent.com/D6Y3l4EGT2iGCviTAIdS', "Outcome description will come here", 'Page title will come here', 'Build Similar Quiz', __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PROTOCOL + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_EXTENSION, 'true');
        // let Formulaindex = app.addformula('San Francisco (Sample)', 'San_Francisco', 'https://cdn.filepicker.io/api/file/SAMeWjCDRNSZJbm0UN0s',
        //   `You need to head to the good old tech hub and be amidst the giants. You get to be in the middle of all the fundraising action and
        //     will never run out of a competitive, yet constant supply of awesome trained tech talent.`, 'Here’s where we think you should head to!',
        //   'Explore SF Tech Scene', environment.PROTOCOL + environment.APP_EXTENSION, 'true');
        //R2
        // Formulaindex = app.addformula('New York', 'New_York', 'https://cdn.filepicker.io/api/file/6qe0IlIkQim0cnKCNvNF',
        //     `The Big Apple is where you need to be! NY is a favorite among young people looking to accelerate their careers. Your company will never be out of energy!`,
        //     'Here’s where we think you should head to!',
        //     'Explore NY Tech Scene', environment.PROTOCOL + environment.APP_EXTENSION);
        //R3
        // Formulaindex = app.addformula('Miami (Sample)', 'Miami', 'https://cdn.filepicker.io/api/file/4evsUm39SPOKd2cXI2F2',
        //   `If the Tech scene can be defined by potential, the best description of Miami’s market is “resurgent”. Today, Miami is a favorite amongst folks who want to grow
        //          fast but do not want to compromise on their sunny outdoors.`, 'Here’s where we think you should head to!',
        //   'Explore Miami’s Coolest Startups', environment.PROTOCOL + environment.APP_EXTENSION, 'true');
        //R4
        // Formulaindex = app.addformula('Seattle', 'Seattle', 'https://cdn.filepicker.io/api/file/zTaJooqWTou0i7bNFg1f',
        //     `Think Seattle, you automatically think rain, great coffee and Tech titans Microsoft and Amazon. Because of Tech, Seattle is the fastest growing of the country’s 50
        //      most populous cities.`, 'Here’s where we think you should head to!',
        //     'Check Out Seattle’s Coolest Coworking Spaces', environment.PROTOCOL + environment.APP_EXTENSION);
        //R5
        // Formulaindex = app.addformula('Chicago', 'Chicago', 'https://cdn.filepicker.io/api/file/8mrLqb9TiKlBg6RmxeSa',
        //     `One of the country’s major core real estate markets, Chicago ranks second in growth of tech jobs among the country’s most populous cities (19.3 percent), slightly behind
        //      Silicon Valley, but ahead of Seattle. Need we say more?`, 'Here’s where we think you should head to!',
        //     'Plan a Visit To Chicago Today', environment.PROTOCOL + environment.APP_EXTENSION);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Build Similar Quiz', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Build Similar Quiz', 'textfield help', '', 't1-result-cta');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_disclaimer', "This quiz is powered by Outgrow.co", '', '', 'bottom-section');
        item3.setVisibility(true);
        //label is title , icon is description
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('cta_shares');
        item4.addOptions([{ type: 'Facebook', selected: true, label: '', icon: '', title: 'Share Your Results' },
            { type: 'Twitter', selected: false, label: '', icon: '', title: 'Share Your Results' },
            { type: 'Linkedin', selected: false, label: '', icon: '', title: 'Share Your Results' }]);
        item4.setVisibility(false);
        //label is for Url
        item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('cta_likes');
        item5.addOptions([{ type: 'Facebook', selected: true, label: 'http://www.facebook.com/outgrowco', icon: '', title: 'Subscribe to Our Updates' },
            { type: 'Twitter', selected: false, label: 'outgrowco', icon: '', title: 'Subscribe to Our Updates' }]);
        item5.setVisibility(false);
        section3.addItems(item1, item2, item3, item4, item5);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('share_links');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_redo');
        section4.addItems(item1, item2);
        var section5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Summary', 'right-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_summary');
        section5.addItems(item1);
        var section6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Powered By');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section6.addItems(item1);
        resultPage.addSections(section1, section2, section3, section4, section5, section6);
        //--- Result Section -- End
        return app;
    };
    //One Page Card
    DefaultJSON.prototype.getOPCjson = function () {
        var app = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* App */](); //create new app
        app.setThemeColor('cp1');
        //create pages
        var landingPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Landing', 'https://cdn.filestackcontent.com/0sHxFZL9T9qyI3Vf6jcO');
        var questionPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Questionnaire');
        var resultPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Result');
        //add All pages in app
        app.addPages(landingPage, questionPage, resultPage);
        // LANDING Page starts //
        // section 1 of LANDING page
        var section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Logo Heading', 't1-landing-top');
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('logo', 'https://cdn.filestackcontent.com/IjyZk9sT6iqWOl1ySbM1', 'textfield help', '', 't1-logo');
        // let item0 = new Item('Item', '../../+builder/assets/template1-logo.png', 'textfield help');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('header', "<strong>How much should you pay for a video campaign?</strong>", 'textfield help', '', 'main-heading th-bold-new');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('sub_header', "Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!", 'textfield help', '', 'sub-heading ts-bold-new');
        item2.setVisibility(false);
        var item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Get Started', 'textfield help', '', 't1-landing-leadform');
        item3.setVisibility(false);
        var item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Get Started', 'textfield help', '', 't1-button');
        item4.setVisibility(true);
        section2.addItems(item1, item2, item3, item4);
        // section 3 of LANDING page
        var section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Footer', 'landing-footer-outer');
        //item1 = new Item('footer_links', 'This is the footer link', 'somehelp random');
        //item1.addLinksToFooter([{ label: 'Privacy Policy', value: 'http://venturepact.com' }]);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section3.addItems(item1);
        landingPage.addSections(section1, section2, section3);
        // Questionnaire page starts //
        //leadform section
        var leadSection = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadFormQ', 't1-question-mid', 'Where can we send you a detailed report?');
        leadSection.setVisibility(true);
        leadSection.setVisibilityOfShowDesc(false);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform_question', 'Next', '', '', '');
        item1.setVisibility(true);
        leadSection.addItems(item1);
        questionPage.addSections(leadSection);
        // SUB Section1(Questions) of Question Page
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Production Requirements', 't1-question-mid', 'Tell us a little bit more!');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('slider', 'How many actors do you need in your video?', 'Please add the help text', undefined, undefined, 1, 20);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('slider', 'How many locations do you need to shoot at?', 'Please add the help text', undefined, undefined, 1, 10);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('checkbox', 'Where are you going to publish this video?', 'Please add the help text');
        item3.addFieldToCheckbox([{ label: 'Web', icon: '', imageURL: 'https://cdn.filestackcontent.com/xz4W5LBFSNK5QfuRQeEj' },
            { label: 'TV', icon: '', imageURL: 'https://cdn.filestackcontent.com/KFlT4t7Qm6meqEa91f7Q' }]);
        item3.setOptionImageVisibility(true, (item3.options.length > 4) ? '24%' : ((100 / item3.options.length) - 1) + '%');
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'What do you expect the length of the video to be?', 'Please add the help text', '');
        item4.addFieldToCheckbox([{ label: 'Less than 1 minute', icon: '' },
            { label: '1-5 minute', icon: '' },
            { label: '5-20 minutes', icon: '' },
            { label: 'Over 20 minutes', icon: '' }]);
        var item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'What sort of a setting are you considering?', 'Please add the help text');
        item5.addFieldToCheckbox([{ label: 'Indoor', icon: '', imageURL: 'https://cdn.filestackcontent.com/B3vVX5QSOAgfPICorYnw' },
            { label: 'Outdoor', icon: '', imageURL: 'https://cdn.filestackcontent.com/cUznZ18TxWTjI8DTZqBM' }]);
        item5.setOptionImageVisibility(true, (item5.options.length > 4) ? '24%' : ((100 / item5.options.length) - 1) + '%');
        var item6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('textfield', 'Where can we find your brand assets for reference?', 'Please add the help text', ' http://www.example.com  ');
        section1.addItems(item1, item2, item3, item4, item5, item6);
        questionPage.addSections(section1);
        //--- Result page sections --- START
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Header', 'top-head');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_header', "\n                        <p>YOUR HEADING GOES HERE</p>");
        section1.addItems(item1);
        // Result Section 2 -- START
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Result', 'left-section');
        //R1
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', '<p>{R1}</p>', "<p><strong>For top notch HDTV quality</strong></p>\n                       <p>Using the same camera and crew that shot Gravity and Avtar!</p>", '', 't3-default-result-outer tr-bold-new');
        item1.options[0].label = item1.props.title;
        item1.options[0].icon = item1.props.helpText;
        item1.options[0].title = "Learn More";
        item1.options[0].description = "http://outgrow.co";
        item1.options.push(item1.options[0]);
        var Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R2
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', ' <p>{R2}</p>', "\n                        <p><strong>For Regular TV quality</strong></p>\n                        <p>You will be able to publish on TV but not on iMAX</p>", '', 't3-default-result-outer tr-bold-new');
        item1.options[0].label = item1.props.title;
        item1.options[0].icon = item1.props.helpText;
        item1.options[0].title = "Learn More";
        item1.options[0].description = "http://outgrow.co";
        item1.options.push(item1.options[0]);
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R3
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', '<p>{R3}</p>', "\n                        <p><strong>For Budget quality</strong></p>\n                        <p>Not for TV but good enough for youtube and facebook.</p>", '', 't3-default-result-outer tr-bold-new');
        item1.options[0].label = item1.props.title;
        item1.options[0].icon = item1.props.helpText;
        item1.options[0].title = "Learn More";
        item1.options[0].description = "http://outgrow.co";
        item1.options.push(item1.options[0]);
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Build Similar Calculator', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Build Similar Calculator', 'textfield help', '', 't1-result-cta');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_disclaimer', "This calculator is powered by Outgrow.co", '', '', 'bottom-section');
        item3.setVisibility(true);
        //label is title , icon is description
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('cta_shares');
        item4.addOptions([{ type: 'Facebook', selected: true, label: 'How much should you pay for a video campaign? | via @outgrowco', icon: 'Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!', title: 'Share Your Results' },
            { type: 'Twitter', selected: false, label: 'How much should you pay for a video campaign? | via @outgrowco', icon: 'Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!', title: 'Share Your Results' },
            { type: 'Linkedin', selected: false, label: 'How much should you pay for a video campaign? | via @outgrowco', icon: 'Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!', title: 'Share Your Results' }]);
        item4.setVisibility(false);
        //label is for Url
        item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('cta_likes');
        item5.addOptions([{ type: 'Facebook', selected: true, label: 'http://www.facebook.com/outgrowco', icon: '', title: 'Subscribe to Our Updates' },
            { type: 'Twitter', selected: false, label: 'outgrowco', icon: '', title: 'Subscribe to Our Updates' }]);
        item5.setVisibility(false);
        section3.addItems(item1, item2, item3, item4, item5);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('share_links');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_redo');
        section4.addItems(item1, item2);
        var section5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Summary', 'right-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_summary');
        section5.addItems(item1);
        var section6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Powered By');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section6.addItems(item1);
        resultPage.addSections(section1, section2, section3, section4, section5, section6);
        //--- Result Section -- End
        return app;
    };
    //Inline Temp
    DefaultJSON.prototype.getITjson = function () {
        var app = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* App */](); //create new app
        app.setThemeColor('cp1');
        //create pages
        var landingPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Landing', 'https://cdn.filestackcontent.com/Cvj2tN3S7ikTu981vJVp');
        var questionPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Questionnaire');
        var resultPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Result');
        //add All pages in app
        app.addPages(landingPage, questionPage, resultPage);
        // LANDING Page starts //
        // section 1 of LANDING page
        var section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Logo Heading', 't1-landing-top');
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('logo', 'https://cdn.filestackcontent.com/R9nJ7kfBSXCfcPmTfWJd', 'textfield help', '', 't1-logo');
        // let item0 = new Item('Item', '../../+builder/assets/template1-logo.png', 'textfield help');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('header', "<strong>How much should you pay for a video campaign?</strong>", 'textfield help', '', 'main-heading th-bold-new');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('sub_header', "Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!", 'textfield help', '', 'sub-heading ts-bold-new');
        item2.setVisibility(false);
        var item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Get Started', 'textfield help', '', 't1-landing-leadform');
        item3.setVisibility(false);
        var item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Get Started', 'textfield help', '', 't1-button');
        item4.setVisibility(true);
        section2.addItems(item1, item2, item3, item4);
        // section 3 of LANDING page
        var section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Footer', 'landing-footer-outer');
        //item1 = new Item('footer_links', 'This is the footer link', 'somehelp random');
        //item1.addLinksToFooter([{ label: 'Privacy Policy', value: 'http://venturepact.com' }]);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section3.addItems(item1);
        landingPage.addSections(section1, section2, section3);
        // Questionnaire page starts //
        //leadform section
        var leadSection = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadFormQ', 't1-question-mid', 'Where can we send you a detailed report?');
        leadSection.setVisibility(true);
        leadSection.setVisibilityOfShowDesc(false);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform_question', 'Next', '', '', '');
        item1.setVisibility(true);
        leadSection.addItems(item1);
        questionPage.addSections(leadSection);
        // SUB Section1(Questions) of Question Page
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Production Requirements', 't1-question-mid', 'Tell us a little bit more!');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'I need', 'Default Help Text', ' 3', '', 0, 0, 'actors in my video.');
        item1.addFieldToCheckbox([{ label: '1-2', icon: '', value: '' },
            { label: '2-5', icon: '', value: '' }, { label: '5-10', icon: '', value: '' },
            { label: '10-50', icon: '', value: '' }, { label: '>50', icon: '', value: '' }]);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'I want to shoot at', 'Default Help Text', ' 2  ', '', 0, 0, 'locations.');
        item2.addFieldToCheckbox([{ label: '1', icon: '', value: '' },
            { label: '2', icon: '', value: '' }, { label: '3', icon: '', value: '' },
            { label: '4', icon: '', value: '' }, { label: '>5', icon: '', value: '' }]);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'This video will get published on', 'Default Help Text', 'Media', '', 0, 0, '.');
        item3.addFieldToCheckbox([{ label: 'Youtube', icon: '', value: '' },
            { label: 'Television', icon: '', value: '' }, { label: 'Facebook', icon: '', value: '' },
            { label: 'Cinema', icon: '', value: '' }, { label: 'Mobile App', icon: '', value: '' }]);
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'I expect the length of the video to be', 'Default Help Text', ' < 1 minute ', '', 0, 0, '.');
        item4.addFieldToCheckbox([{ label: '< 1 minute', icon: '', value: '' },
            { label: '1-2 minutes', icon: '', value: '' }, { label: '2-5 minutes', icon: '', value: '' },
            { label: '5-10 minutes', icon: '', value: '' }, { label: '> 10 minutes', icon: '', value: '' }]);
        var item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'It is going to be a', 'Default Help Text', ' type  ', '', 0, 0, 'setting.');
        item5.addFieldToCheckbox([{ label: 'Indoor', icon: '', value: '' },
            { label: 'Outdoor', icon: '', value: '' }]);
        var item6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('textfield', 'You can we find our brand assets at', 'Please add the help text', ' example.com  ');
        section1.addItems(item1, item2, item3, item4, item5, item6);
        questionPage.addSections(section1);
        //--- Result page sections --- START
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Header', 'top-head');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_header', "\n                        <p><strong>YOUR HEADING GOES HERE</strong></p>");
        section1.addItems(item1);
        // Result Section 2 -- START
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Result', 'left-section');
        //R1
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', '<p>{R1}</p>', "\n                       <p><strong>For top notch HDTV quality</strong></p>\n                       <p>Using the same camera and crew that shot Gravity and Avatar!</p>", '', 't4-default-result-outer tr-bold-new');
        item1.options[0].label = item1.props.title;
        item1.options[0].icon = item1.props.helpText;
        item1.options[0].title = "Learn More";
        item1.options[0].description = "http://outgrow.co";
        item1.options.push(item1.options[0]);
        var Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R2
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', '<p>{R2}</p>', "\n                        <p><strong>For Regular TV quality</strong></p>\n                        <p>You will be able to publish on TV but not on iMAX</p>", '', 't4-default-result-outer tr-bold-new');
        item1.options[0].label = item1.props.title;
        item1.options[0].icon = item1.props.helpText;
        item1.options[0].title = "Learn More";
        item1.options[0].description = "http://outgrow.co";
        item1.options.push(item1.options[0]);
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R3
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', '<p>{R3}</p>', "\n                        <p><strong>For Budget quality</strong></p>\n                        <p>Not for TV but good enough for youtube and facebook.</p>", '', 't4-default-result-outer tr-bold-new');
        item1.options[0].label = item1.props.title;
        item1.options[0].icon = item1.props.helpText;
        item1.options[0].title = "Learn More";
        item1.options[0].description = "http://outgrow.co";
        item1.options.push(item1.options[0]);
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Build Similar Calculator', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Build Similar Calculator', 'textfield help', '', 't1-result-cta');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_disclaimer', "This calculator is powered by Outgrow.co", '', '', 'bottom-section');
        item3.setVisibility(true);
        //label is title , icon is description
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('cta_shares');
        item4.addOptions([{ type: 'Facebook', selected: true, label: 'How much should you pay for a video campaign? | via @outgrowco', icon: 'Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!', title: 'Share Your Results' },
            { type: 'Twitter', selected: false, label: 'How much should you pay for a video campaign? | via @outgrowco', icon: 'Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!', title: 'Share Your Results' },
            { type: 'Linkedin', selected: false, label: 'How much should you pay for a video campaign? | via @outgrowco', icon: 'Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!', title: 'Share Your Results' }]);
        item4.setVisibility(false);
        //label is for Url
        item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('cta_likes');
        item5.addOptions([{ type: 'Facebook', selected: true, label: 'http://www.facebook.com/outgrowco', icon: '', title: 'Subscribe to Our Updates' },
            { type: 'Twitter', selected: false, label: 'outgrowco', icon: '', title: 'Subscribe to Our Updates' }]);
        item5.setVisibility(false);
        section3.addItems(item1, item2, item3, item4, item5);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('share_links');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_redo');
        section4.addItems(item1, item2);
        var section5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Summary', 'right-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_summary');
        section5.addItems(item1);
        var section6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Powered By');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section6.addItems(item1);
        resultPage.addSections(section1, section2, section3, section4, section5, section6);
        //--- Result Section -- End
        return app;
    };
    //Inline Temp Recommendation
    DefaultJSON.prototype.getITRecommendedjson = function () {
        var app = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* App */]('Recommendation'); //create new app
        app.setThemeColor('cp1');
        //create pages
        var landingPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Landing', 'https://cdn.filestackcontent.com/Cvj2tN3S7ikTu981vJVp');
        var questionPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Questionnaire');
        var resultPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Result', 'https://cdn.filestackcontent.com/Cvj2tN3S7ikTu981vJVp');
        //add All pages in app
        app.addPages(landingPage, questionPage, resultPage);
        // LANDING Page starts //
        // section 1 of LANDING page
        var section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Logo Heading', 't1-landing-top');
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('logo', 'https://cdn.filestackcontent.com/R9nJ7kfBSXCfcPmTfWJd', 'textfield help', '', 't1-logo');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('header', "<strong>How much should you pay for a video campaign?</strong>", 'textfield help', '', 'main-heading th-bold-new');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('sub_header', "Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!", 'textfield help', '', 'sub-heading ts-bold-new');
        item2.setVisibility(true);
        var item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Let’s Find Out', 'textfield help', '', 't1-landing-leadform');
        item3.setVisibility(false);
        var item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Let’s Find Out', 'textfield help', '', 't1-button');
        item4.setVisibility(true);
        section2.addItems(item1, item2, item3, item4);
        // section 3 of LANDING page
        var section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Footer', 'landing-footer-outer');
        //item1 = new Item('footer_links', 'This is the footer link', 'somehelp random');
        //item1.addLinksToFooter([{ label: 'Privacy Policy', value: 'http://venturepact.com' }]);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section3.addItems(item1);
        landingPage.addSections(section1, section2, section3);
        // Questionnaire page starts //
        // SUB Section1(Questions) of Question Page
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Questions', '', 'Here We Go..');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'I need', 'Default Help Text', ' 3', '', 0, 0, 'actors in my video.');
        item1.addFieldToCheckbox([{ label: '1-2', icon: '', value: '' },
            { label: '2-5', icon: '', value: '' }, { label: '5-10', icon: '', value: '' },
            { label: '10-50', icon: '', value: '' }, { label: '>50', icon: '', value: '' }]);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'I want to shoot at', 'Default Help Text', ' 2  ', '', 0, 0, 'locations.');
        item2.addFieldToCheckbox([{ label: '1', icon: '', value: '' },
            { label: '2', icon: '', value: '' }, { label: '3', icon: '', value: '' },
            { label: '4', icon: '', value: '' }, { label: '>5', icon: '', value: '' }]);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'This video will get published on', 'Default Help Text', 'Media', '', 0, 0, '.');
        item3.addFieldToCheckbox([{ label: 'Youtube', icon: '', value: '' },
            { label: 'Television', icon: '', value: '' }, { label: 'Facebook', icon: '', value: '' },
            { label: 'Cinema', icon: '', value: '' }, { label: 'Mobile App', icon: '', value: '' }]);
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'I expect the length of the video to be', 'Default Help Text', ' < 1 minute ', '', 0, 0, '.');
        item4.addFieldToCheckbox([{ label: '< 1 minute', icon: '', value: '' },
            { label: '1-2 minutes', icon: '', value: '' }, { label: '2-5 minutes', icon: '', value: '' },
            { label: '5-10 minutes', icon: '', value: '' }, { label: '> 10 minutes', icon: '', value: '' }]);
        var item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'It is going to be a', 'Default Help Text', ' type  ', '', 0, 0, 'setting.');
        item5.addFieldToCheckbox([{ label: 'Indoor', icon: '', value: '' },
            { label: 'Outdoor', icon: '', value: '' }]);
        var item6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('textfield', 'You can we find our brand assets at', 'Please add the help text', ' example.com  ');
        section1.addItems(item1, item2, item3, item4, item5, item6);
        questionPage.addSections(section1);
        // leadform section
        var leadSection = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadFormQ', '', 'Where should we send you our analysis?');
        leadSection.setVisibility(true);
        leadSection.setVisibilityOfShowDesc(false);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform_question', 'Next', '', '', '');
        item1.setVisibility(true);
        leadSection.addItems(item1);
        questionPage.addSections(leadSection);
        //--- Result page sections --- START
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Header', 'top-head');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_header', "<p>Here\u2019s where we think you should head to! </p>");
        section1.addItems(item1);
        // Result Section 2 -- START
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Result', 'left-section');
        //R1
        var Formulaindex = app.addformula('<p>Sample Outcome</p>', 'New_Outcome', 'https://cdn.filestackcontent.com/D6Y3l4EGT2iGCviTAIdS', "Outcome description will come here", 'Page title will come here', 'Build Similar Quiz', __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PROTOCOL + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_EXTENSION, 'true');
        // let Formulaindex = app.addformula('San Francisco (Sample)', 'San_Francisco', 'https://cdn.filepicker.io/api/file/SAMeWjCDRNSZJbm0UN0s',
        //   `You need to head to the good old tech hub and be amidst the giants. You get to be in the middle of all the fundraising action and
        //     will never run out of a competitive, yet constant supply of awesome trained tech talent.`, 'Here’s where we think you should head to!',
        //   'Explore SF Tech Scene', environment.PROTOCOL + environment.APP_EXTENSION, 'true');
        //R2
        // Formulaindex = app.addformula('New York', 'New_York', 'https://cdn.filepicker.io/api/file/6qe0IlIkQim0cnKCNvNF',
        //     `The Big Apple is where you need to be! NY is a favorite among young people looking to accelerate their careers. Your company will never be out of energy!`,
        //     'Here’s where we think you should head to!',
        //     'Explore NY Tech Scene', environment.PROTOCOL + environment.APP_EXTENSION);
        //R3
        // Formulaindex = app.addformula('Miami (Sample)', 'Miami', 'https://cdn.filepicker.io/api/file/4evsUm39SPOKd2cXI2F2',
        //   `If the Tech scene can be defined by potential, the best description of Miami’s market is “resurgent”. Today, Miami is a favorite amongst folks who want to grow
        //          fast but do not want to compromise on their sunny outdoors.`, 'Here’s where we think you should head to!',
        //   'Explore Miami’s Coolest Startups', environment.PROTOCOL + environment.APP_EXTENSION, 'true');
        //R4
        // Formulaindex = app.addformula('Seattle', 'Seattle', 'https://cdn.filepicker.io/api/file/zTaJooqWTou0i7bNFg1f',
        //     `Think Seattle, you automatically think rain, great coffee and Tech titans Microsoft and Amazon. Because of Tech, Seattle is the fastest growing of the country’s 50
        //      most populous cities.`, 'Here’s where we think you should head to!',
        //     'Check Out Seattle’s Coolest Coworking Spaces', environment.PROTOCOL + environment.APP_EXTENSION);
        //R5
        // Formulaindex = app.addformula('Chicago', 'Chicago', 'https://cdn.filepicker.io/api/file/8mrLqb9TiKlBg6RmxeSa',
        //     `One of the country’s major core real estate markets, Chicago ranks second in growth of tech jobs among the country’s most populous cities (19.3 percent), slightly behind
        //      Silicon Valley, but ahead of Seattle. Need we say more?`, 'Here’s where we think you should head to!',
        //     'Plan a Visit To Chicago Today', environment.PROTOCOL + environment.APP_EXTENSION);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Build Similar Quiz', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Build Similar Quiz', 'textfield help', '', 't1-result-cta');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_disclaimer', "This quiz is powered by Outgrow.co", '', '', 'bottom-section');
        item3.setVisibility(true);
        //label is title , icon is description
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('cta_shares');
        item4.addOptions([{ type: 'Facebook', selected: true, label: '', icon: '', title: 'Share Your Results' },
            { type: 'Twitter', selected: false, label: '', icon: '', title: 'Share Your Results' },
            { type: 'Linkedin', selected: false, label: '', icon: '', title: 'Share Your Results' }]);
        item4.setVisibility(false);
        //label is for Url
        item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('cta_likes');
        item5.addOptions([{ type: 'Facebook', selected: true, label: 'http://www.facebook.com/outgrowco', icon: '', title: 'Subscribe to Our Updates' },
            { type: 'Twitter', selected: false, label: 'outgrowco', icon: '', title: 'Subscribe to Our Updates' }]);
        item5.setVisibility(false);
        section3.addItems(item1, item2, item3, item4, item5);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('share_links');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_redo');
        section4.addItems(item1, item2);
        var section5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Summary', 'right-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_summary');
        section5.addItems(item1);
        var section6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Powered By');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section6.addItems(item1);
        resultPage.addSections(section1, section2, section3, section4, section5, section6);
        //--- Result Section -- End
        return app;
    };
    //Sound cloud template
    DefaultJSON.prototype.getSCjson = function () {
        var app = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* App */](); //create new app
        app.setThemeColor('cp1');
        //create pages
        var landingPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Landing', 'https://cdn.filepicker.io/api/file/d7jEH9myRNKQj4l65Zkt');
        var questionPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Questionnaire');
        var resultPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Page */]('Result');
        //add All pages in app
        app.addPages(landingPage, questionPage, resultPage);
        // LANDING Page starts //
        // section 1 of LANDING page
        var section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Logo Heading', 't1-landing-top');
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('logo', 'https://cdn.filestackcontent.com/IjyZk9sT6iqWOl1ySbM1', 'textfield help', '', 't1-logo');
        // let item0 = new Item('Item', '../../+builder/assets/template1-logo.png', 'textfield help');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('header', "<strong>How much should you pay for a video campaign?</strong>", 'textfield help', '', 'main-heading th-bold-new');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('sub_header', "Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!", 'textfield help', '', 'sub-heading ts-bold-new');
        item2.setVisibility(false);
        var item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Estimate Costs', 'textfield help', '', 't1-landing-leadform');
        item3.setVisibility(true);
        var item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Estimate Costs', 'textfield help', '', 't1-button');
        item4.setVisibility(false);
        section2.addItems(item1, item2, item3, item4);
        // section 3 of LANDING page
        var section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Footer', 'landing-footer-outer');
        //item1 = new Item('footer_links', 'This is the footer link', 'somehelp random');
        //item1.addLinksToFooter([{ label: 'Privacy Policy', value: 'http://venturepact.com' }]);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section3.addItems(item1);
        landingPage.addSections(section1, section2, section3);
        // Questionnaire page starts //
        //leadform section
        var leadSection = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadFormQ', 't1-question-mid', 'Where can we send you a detailed report?');
        leadSection.setVisibility(false);
        leadSection.setVisibilityOfShowDesc(false);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform_question', 'Next', '', '', '');
        item1.setVisibility(false);
        leadSection.addItems(item1);
        questionPage.addSections(leadSection);
        // SUB Section1(Questions) of Question Page
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Production Requirements', '', 'Tell us a little bit more!');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('slider', 'How many actors do you need in your video?', '', undefined, undefined, 1, 20);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('slider', 'How many locations do you need to shoot at?', '', undefined, undefined, 1, 10);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('checkbox', 'Where are you going to publish this video?', '');
        item3.addFieldToCheckbox([{ label: 'Web', icon: '' },
            { label: 'TV', icon: '' }]);
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'What do you expect the length of the video to be?', '', '');
        item4.addFieldToCheckbox([{ label: 'Less than 1 minute', icon: '' },
            { label: '1-5 minute', icon: '' },
            { label: '5-20 minutes', icon: '' },
            { label: 'Over 20 minutes', icon: '' }]);
        var item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'What sort of a setting are you considering?', '');
        item5.addFieldToCheckbox([{ label: 'Indoor', icon: '' },
            { label: 'Outdoor', icon: '' }]);
        var item6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('textfield', 'Where can we find your brand assets for reference?', '', 'http://www.example.com');
        section1.addItems(item1, item2, item3, item4, item5, item6);
        questionPage.addSections(section1);
        //--- Result page sections --- START
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Header', 'top-head');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_header', "\n                        <p><strong>YOUR HEADING GOES HERE</strong></p>");
        section1.addItems(item1);
        // Result Section 2 -- START
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Result', 'left-section');
        //R1
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', '<p>{R1}</p>', "\n                       <p><strong>For top notch HDTV quality</strong></p>\n                       <p>Using the same camera and crew that shot Gravity and Avtar!</p>", '', 'temp2-default-result-outer tr-bold-new');
        item1.options[0].label = item1.props.title;
        item1.options[0].icon = item1.props.helpText;
        item1.options[0].title = "Learn More";
        item1.options[0].description = "http://outgrow.co";
        item1.options.push(item1.options[0]);
        var Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R2
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', '<p>{R2}</p>', "\n                        <p><strong>For Regular TV quality</strong></p>\n                        <p>You will be able to publish on TV but not on iMAX</p>", '', 'temp2-default-result-outer tr-bold-new');
        item1.options[0].label = item1.props.title;
        item1.options[0].icon = item1.props.helpText;
        item1.options[0].title = "Learn More";
        item1.options[0].description = "http://outgrow.co";
        item1.options.push(item1.options[0]);
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R3
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', '<p>{R3}</p>', "\n                        <p><strong>For Budget quality</strong></p>\n                        <p>Not for TV but good enough for youtube and facebook.</p>", '', 'temp2-default-result-outer tr-bold-new');
        item1.options[0].label = item1.props.title;
        item1.options[0].icon = item1.props.helpText;
        item1.options[0].title = "Learn More";
        item1.options[0].description = "http://outgrow.co";
        item1.options.push(item1.options[0]);
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Build Similar Calculator', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Build Similar Calculator', 'textfield help', '', 't1-result-cta');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_disclaimer', "This calculator is powered by Outgrow.co", '', '', 'bottom-section');
        item3.setVisibility(true);
        //label is title , icon is description
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('cta_shares');
        item4.addOptions([{ type: 'Facebook', selected: true, label: 'How much should you pay for a video campaign? | via @outgrowco', icon: 'Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!', title: 'Share Your Results' },
            { type: 'Twitter', selected: false, label: 'How much should you pay for a video campaign? | via @outgrowco', icon: 'Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!', title: 'Share Your Results' },
            { type: 'Linkedin', selected: false, label: 'How much should you pay for a video campaign? | via @outgrowco', icon: 'Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!', title: 'Share Your Results' }]);
        item4.setVisibility(false);
        //label is for Url
        item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('cta_likes');
        item5.addOptions([{ type: 'Facebook', selected: true, label: 'http://www.facebook.com/outgrowco', icon: '', title: 'Subscribe to Our Updates' },
            { type: 'Twitter', selected: false, label: 'outgrowco', icon: '', title: 'Subscribe to Our Updates' }]);
        item5.setVisibility(false);
        section3.addItems(item1, item2, item3, item4, item5);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('share_links');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_redo');
        section4.addItems(item1, item2);
        var section5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Summary', 'right-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_summary');
        section5.addItems(item1);
        var section6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Powered By');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section6.addItems(item1);
        resultPage.addSections(section1, section2, section3, section4, section5, section6);
        //--- Result Section -- End
        return app;
    };
    DefaultJSON = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], DefaultJSON);
    return DefaultJSON;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/DefaultJSON.service.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_calc_email_model__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_JSONBuilder_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_formula_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_model__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_builder_service__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__templates_services_DefaultJSON_service__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_JSONUpdateItemTracker_service__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__templates_services_recommendation_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_templateImages_store__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_interfaces_features_interface__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_subdomain_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_dashboard_service__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_feature_access_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_cookie_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_services_script_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_user_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuilderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var BuilderComponent = (function () {
    function BuilderComponent(jsonBuilderHelper, subDomainService, _builderService, _defaultJson, _itemTrackService, route, _router, _dashboardService, formulaService, _featureAuthService, _cookieService, _script, recommendationService, _userService) {
        var _this = this;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.subDomainService = subDomainService;
        this._builderService = _builderService;
        this._defaultJson = _defaultJson;
        this._itemTrackService = _itemTrackService;
        this.route = route;
        this._router = _router;
        this._dashboardService = _dashboardService;
        this.formulaService = formulaService;
        this._featureAuthService = _featureAuthService;
        this._cookieService = _cookieService;
        this._script = _script;
        this.recommendationService = recommendationService;
        this._userService = _userService;
        this.filePickerKey = 'A3ygIw4hISSCdApqW4SAwz';
        this.selectedSec = 'build';
        this.selectedAnalyticComponent = 'overview';
        this.selectedConfigComponent = 'settings';
        this.unique = true;
        this.startAutoSave = false;
        this.isAnalyticsAvailable = true;
        this.zoomfactor = .05;
        this.currentZoom = 0;
        this.curYPos = 0;
        this.curXPos = 0;
        this.xAxis = 0;
        this.yAxis = 0;
        this.curDown = false;
        this.interComData = null;
        this.ConfigArray = ["settings", "integrations", "email", "share-your-calculator", "launch-popup", "embedded-code"];
        this.LandingArray = ["Result", "Questionnaire", "Landing"];
        this.AnalyticsArray = ["overview", "user_detail", "traffic_detail"];
        this.hash = 'Landing';
        this.bootboxText = 'Your Calculator is Live';
        this.imgContainer = [];
        this.helloBar = {
            flag: false,
            type: '',
            message: ''
        };
        this.cardStatus = null;
        this.userId = null;
        this.planId = null;
        jQuery('#modalcss').attr('href', "./assets/css/common.css");
        this.uniqueUrlHandler = this._builderService.debounce(this.isUnique, 800);
        this.autoSaver = this.debounce(this.saveUnsavedData, 1000);
        /*localStorage.setItem('hash-link', this.hash);
        //open tabs acc to has in href
        if (window.location.hash) {
          this.hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    
          if (jQuery.inArray(this.hash, this.ConfigArray) != -1) {
            this.selectedSec = 'config';
          } else if (jQuery.inArray(this.hash, this.LandingArray) != -1) {
            this.selectedSec = 'build';
          } else if (jQuery.inArray(this.hash, this.AnalyticsArray) != -1) {
            this.selectedSec = 'analytics';
          }
          localStorage.setItem('hash-link', this.hash);
        }*/
        this.jsonBuilderHelper.setSelectedModel('Page');
        this.interComData = JSON.parse(localStorage.getItem('icd'));
        //back button click fix
        window.innerDocClick = true;
        _router.events
            .map(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationEnd */]; })
            .subscribe(function (event) {
            if (event && !window.innerDocClick)
                window.location.href = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].APP_EXTENSION + '/dashboard';
        });
    }
    BuilderComponent.prototype.getNavUrl = function () {
        // let urla = window.location.href;
        // let url = 'http://outgrow.co';
        // if (urla.indexOf('outgrow.co') < 0) {
        //   url = 'http://outgrow.us';
        // }
        // return url;
        return __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].PROTOCOL + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].APP_EXTENSION;
    };
    BuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._featureAuthService.getAllFeatureAccess().subscribe(function (result) {
            _this._featureAuthService.features = new __WEBPACK_IMPORTED_MODULE_12__shared_interfaces_features_interface__["a" /* FeatureAccess */](result);
            _this.sub = _this.route.params.subscribe(function (params) {
                var name = params['name'];
                if (name)
                    _this.appName = name;
                _this._script.load('selectize', 'wysiwyg', 'slimScroll', 'filepicker', 'math', 'fancybox', 'jqueryUI', 'colorPickerSliders', 'tinyColor', 'bootBox')
                    .then(function (data) {
                    //console.log('Scripts Loaded', data);
                    _this._script.load('link')
                        .then(function (data) {
                        //console.log('Scripts Loaded', data);
                        _this.initiateBuilder();
                    })
                        .catch(function (error) {
                        //any error
                    });
                })
                    .catch(function (error) {
                    //any error
                });
            });
            _this.isAnalyticsAvailable = _this._featureAuthService.features.analytics.active;
            //Set current company name
            var storage = JSON.parse(_this._cookieService.readCookie('storage'));
            _this.userId = storage ? storage.user._id : null;
            _this.planId = storage.company.billing.chargebee_plan_id;
            _this.companyName = storage.company.name;
        });
    };
    BuilderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        document.onmouseover = function () { return window.innerDocClick = true; };
        document.onmouseleave = function () { return window.innerDocClick = false; };
        if (localStorage.getItem('show_popup') === 'show') {
            setTimeout(function () {
                _this.videoModal();
            }, 10000);
        }
    };
    BuilderComponent.prototype.planBasedCta = function (json) {
        if (!this._featureAuthService.features.cta.redirect_url) {
            if (json.templateType == 'Numerical') {
                var section = json.pages.find(function (page) { return page.type == 'Result'; })
                    .sections.find(function (section) { return section.type == 'LeadForm'; });
                section.items.map(function (item) {
                    if (item.type == 'click_button')
                        item.visible = false;
                    else if (item.type == 'cta_shares')
                        item.visible = true;
                });
            }
            else {
                json.formula.map(function (formula) {
                    formula.isValid = false;
                    formula.units.postfix = true;
                });
            }
        }
        return json;
    };
    BuilderComponent.prototype.initiateBuilder = function () {
        var _this = this;
        // window.Intercom('update', { hide_default_launcher: true });
        if (this.appName) {
            this.getApp({ url: this.appName, company: this.subDomainService.subDomain.sub_domain });
        }
        else {
            //create new app on load
            var project = localStorage.getItem('project');
            var template = localStorage.getItem('temp_name');
            var temp_type = localStorage.getItem('temp_type');
            if (project === 'New') {
                var json = this._defaultJson.getJSON(template);
                var company_id = localStorage.getItem('company');
                json.setCompany(company_id);
                json.setTemplateName(template);
                json.setTemplateType(temp_type);
                json.setNavigateUrl(this.getNavUrl());
                json = this.planBasedCta(json);
                this._builderService.createApp(json)
                    .subscribe(function (response) {
                    // FBQ event
                    /*fbq('trackCustom', 'Calculator built', {
                      'template': template
                    })*/
                    var app = new __WEBPACK_IMPORTED_MODULE_5__models_model__["c" /* App */]().deserialize(response);
                    _this.activeSince = moment(response.createdAt).fromNow().replace('ago', '').trim();
                    localStorage.setItem('project', app._id);
                    localStorage.removeItem('temp_name');
                    localStorage.removeItem('temp_type');
                    var calc_name = localStorage.getItem('calc_name');
                    if (calc_name) {
                        app.name = calc_name;
                        _this.addCalcName(app);
                    }
                    _this.emailForNewApp(app);
                }, function (error) {
                    _this._router.navigate(['/dashboard']);
                });
                /*==== Intercom ====*/
                if (this.interComData) {
                    this.interComData.calculators_created++;
                    localStorage.setItem('icd', JSON.stringify(this.interComData));
                    window.Intercom('update', this.interComData);
                }
            }
            else if (!project) {
                this._router.navigate(['/dashboard']);
            }
            else {
                this.getApp({ _id: project });
            }
        }
    };
    BuilderComponent.prototype.addCalcName = function (app) {
        var _this = this;
        this._builderService.updateName(app._id, app.name)
            .subscribe(function (response) {
            app.url = response.url;
            window.history.replaceState({}, '', '/builder/' + response.url);
            localStorage.removeItem('calc_name');
            _this.jsonBuilderHelper.setTemplate(app);
            _this.initializeJqueryStuff();
            _this.oldCalcName = _this.jsonBuilderHelper.getJSONBuilt().name;
            //Document Title
            if (_this.jsonBuilderHelper.getJSONBuilt().name == '')
                document.title = "Outgrow | " + _this.companyName + "'s Calculator";
            else
                document.title = "Outgrow | " + _this.jsonBuilderHelper.getJSONBuilt().name;
        }, function (error) {
            console.log(error);
        });
    };
    // addItems(app:any){
    //   console.log(app);
    //   for(let section of app.pages[2].sections){
    //     if(section.type=='LeadForm' && section.items.length==3){
    //       let item1= new Item('cta_likes');
    //       item1.setVisibility(false);
    //       let item2= new Item('cta_shares');
    //       item2.setVisibility(false);
    //       section.items.push(item1);
    //       section.items.push(item2);
    //       this._itemTrackService.setUnSavedSections(section);
    //       console.log(section);
    //       break;
    //     }
    //   }
    //   console.log('app after',app);
    //  /* if(app.pages[2].) {
    //   }*/
    //     return app;
    // }
    BuilderComponent.prototype.getApp = function (data) {
        var _this = this;
        var projectId = localStorage.getItem('project');
        var templateName = localStorage.getItem('temp_name');
        if (templateName) {
            this.changeTemplate(projectId, templateName);
        }
        else {
            this._builderService.getProject(data)
                .subscribe(function (response) {
                if (jQuery.isEmptyObject(response)) {
                    _this._router.navigate(['/dashboard']);
                }
                else {
                    var app = new __WEBPACK_IMPORTED_MODULE_5__models_model__["c" /* App */]().deserialize(response);
                    // app.setTemplateName('inline-temp');
                    // app = this.addItems(app);
                    _this.jsonBuilderHelper.setTemplate(app);
                    if (localStorage.getItem('lead_hide') === 'true') {
                        _this.hideLeadform(app);
                    }
                    _this.initializeJqueryStuff();
                    _this.oldCalcName = _this.jsonBuilderHelper.getJSONBuilt().name;
                    _this.activeSince = moment(response.updatedAt).fromNow().replace('ago', '').trim();
                    //getting particular AppSumo Features
                    var isAppSumo = _this.jsonBuilderHelper.getJSONBuilt().isAppSumoCreated;
                    _this._featureAuthService.getAppSumofeatures(isAppSumo);
                    //Document Title
                    if (_this.jsonBuilderHelper.getJSONBuilt().name == '')
                        document.title = "Outgrow | " + _this.companyName + "'s Calculator";
                    else
                        document.title = "Outgrow | " + _this.jsonBuilderHelper.getJSONBuilt().name;
                }
            }, function (error) {
                _this._router.navigate(['/dashboard']);
            });
        }
    };
    /* email entry for new app */
    BuilderComponent.prototype.emailForNewApp = function (app) {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        if (app.templateType == 'Numerical') {
            var emailMessage = "<p>Hi {fullname},\n      </p><p>Thank you for using our " + app.name + " calculator.\n      Just for your record, your result was {R1}.\n      Feel free to reply back in case you have any questions.</p><p>Best</p>";
        }
        else {
            var emailMessage = "<p>Hi {fullname} ,\n      </p><p>Thank you for completing our " + app.name + " quiz.\n      Just for your record, you got {Outcome} as your outcome.\n      Feel free to reply back in case you have any questions.</p><p>Best</p>";
        }
        var calcModel = new __WEBPACK_IMPORTED_MODULE_0__models_calc_email_model__["a" /* CalcEmail */]({ app: app._id, type: 'Finish', email: storage.user.emails[0].email, subject: app.name, message: emailMessage });
        this._builderService.saveCalcEmail(calcModel)
            .subscribe(function (response) {
            //
            //console.log('email success');
        }, function (error) { console.log(error); });
    };
    BuilderComponent.prototype.hideLeadform = function (app) {
        for (var _i = 0, _a = this.jsonBuilderHelper.getJSONBuilt().pages; _i < _a.length; _i++) {
            var page = _a[_i];
            for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                var section = _c[_b];
                if (section.type === 'LeadFormQ') {
                    section.visible = false;
                    section.items[0].visible = false;
                    this._itemTrackService.setUnSavedSections(section);
                    this.saveUnsavedData(this._itemTrackService.getUnSavedData());
                    localStorage.removeItem('lead_hide');
                    break;
                }
            }
        }
    };
    BuilderComponent.prototype.changeTemplate = function (projectId, templateName) {
        var _this = this;
        this._builderService.changeTemplate(projectId, templateName).subscribe(function (response) {
            if (jQuery.isEmptyObject(response)) {
                _this._router.navigate(['/dashboard']);
            }
            else {
                localStorage.removeItem('temp_type');
                if (templateName === 'sound-cloud') {
                    localStorage.setItem('lead_hide', 'true');
                }
                localStorage.removeItem('temp_name');
                window.location.reload(true);
            }
        }, function (error) {
            _this._router.navigate(['/dashboard']);
        });
    };
    BuilderComponent.prototype.openLeadEditor = function (event) {
        var data = this.jsonBuilderHelper.getVisibleLeadForm();
        if (!jQuery.isEmptyObject(data['page'][0])) {
            this.jsonBuilderHelper.setSelectedPage(data['page'][0]);
            this.jsonBuilderHelper.setSelectedSection(data['section'][0]);
            this.jsonBuilderHelper.setSelectedModel('Section');
            if (data['page'][0].type === 'Questionnaire') {
                this.scrollIt('.sec_' + (data['page'][0].sections.length - 1));
            }
            else if (data['page'][0].type === 'Landing') {
                this.scrollIt('.page_0', data['page'][0].type);
            }
            else {
                this.scrollIt('.page_2', data['page'][0].type);
            }
        }
        else {
            this.jsonBuilderHelper.setSelectedSection(this.getLeadSection());
            this.jsonBuilderHelper.setSelectedModel('Section');
        }
    };
    BuilderComponent.prototype.getLeadSection = function () {
        for (var _i = 0, _a = this.jsonBuilderHelper.getSelectedPage().sections; _i < _a.length; _i++) {
            var section = _a[_i];
            if (section.type === 'LeadFormQ' || section.type === 'LeadForm' || section.type === 'Content Area') {
                return section;
            }
        }
    };
    BuilderComponent.prototype.scrollIt = function (bindingClass1, innerText) {
        if (jQuery(bindingClass1).length) {
            var position = 0;
            var templateHeight = 0;
            var zoomFactor = 1;
            var topVal = 0;
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                var tHeight = -30;
            }
            else {
                zoomFactor = jQuery('temp-dev').css('zoom');
                tHeight = 70;
            }
            if (jQuery('.sound-cloud').length > 0) {
                // for template sound-cloud
                jQuery('.sound-cloud').addClass('template2');
                if (innerText && innerText === 'Landing') {
                    templateHeight = -jQuery(bindingClass1).position().top;
                }
                else if (innerText && (innerText === 'Questionnaire' || innerText === 'Result')) {
                    templateHeight = jQuery('.template2').height();
                }
                else {
                    templateHeight = jQuery('.template2').height() + tHeight;
                }
                position = jQuery(bindingClass1).position().top + templateHeight;
                jQuery('.template-section').animate({ scrollTop: position * zoomFactor }, function () {
                    jQuery('.template-section').clearQueue();
                });
            }
            else if (jQuery('.one-page-slider').length > 0 || jQuery('.one-page-card').length > 0 || jQuery('.inline-temp').length > 0) {
                // get postiion of div
                templateHeight = jQuery('.editor-page-divider').height();
                if (innerText && ((innerText == 'Landing') || (innerText == 'WELCOME SCREEN With Lead Generation') || (innerText == 'With Lead Generation'))) {
                    templateHeight = -jQuery(bindingClass1).position().top;
                }
                else if (innerText && ((innerText === 'Questionnaire') || (innerText === 'Result') || (innerText === 'QUESTIONNAIRE With Lead Generation') || (innerText == 'With Lead Generation'))) {
                    templateHeight = 0;
                }
                position = jQuery(bindingClass1).position().top + templateHeight;
                jQuery('.template-section').animate({ scrollTop: position * zoomFactor }, function () {
                    jQuery('.template-section').clearQueue();
                });
            }
        }
    };
    BuilderComponent.prototype.selectPage = function () {
        if (this.jsonBuilderHelper.getSelectedPage().type === 'Questionnaire') {
            this.jsonBuilderHelper.setSelectedControl(this.jsonBuilderHelper.getQuestionsList()[0]);
            this.jsonBuilderHelper.setSelectedModel('Control');
            this.jsonBuilderHelper.setSelectedSection(this.jsonBuilderHelper.getJSONBuilt().pages[1].sections[0]);
            this.scrollIt('.page_1', 'Questionnaire');
        }
        else {
            this.jsonBuilderHelper.setSelectedModel('Page');
        }
    };
    BuilderComponent.prototype.showNextImages = function () {
        var count = 0;
        for (var image in this.imgContainer) {
            if (!this.imgContainer[image].visible && count < 12) {
                this.imgContainer[image].visible = true;
                count++;
            }
        }
    };
    BuilderComponent.prototype.isLoadMoreButton = function () {
        for (var _i = 0, _a = this.imgContainer; _i < _a.length; _i++) {
            var image = _a[_i];
            if (!image.visible)
                return true;
        }
        return false;
    };
    BuilderComponent.prototype.initializeJqueryStuff = function () {
        var _this = this;
        this.previousJson = JSON.parse(JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
        setTimeout(function () { return _this.startAutoSave = true; }, 2000);
        var self = this;
        var correctedViewportW = (function (win, docElem) {
            var mM = win['matchMedia'] || win['msMatchMedia'], client = docElem['clientWidth'], inner = win['innerWidth'];
            return mM && client < inner && true === mM('(min-width:' + inner + 'px)')['matches']
                ? function () { return win['innerWidth']; }
                : function () { return docElem['clientWidth']; };
        }(window, document.documentElement));
        jQuery(window).on("resize", function () {
            if (jQuery(window).width() > 767 && jQuery('.editor-sidebar').css('display') == 'none') {
                jQuery('.editor-sidebar').css('display', 'block');
            }
        });
        jQuery(document).on('click', '#preview_calc', function () { return _this.onPreview(); });
        jQuery(document).on('click', '.preview_copy', function () {
            clipboard.copy(self.srcUrl);
            window.toastNotification('Link Copied');
        });
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.recommendationService.getRecomendedResult();
        }
        if (localStorage.getItem('tab-selected')) {
            this.selectedSec = localStorage.getItem('tab-selected');
            localStorage.removeItem('tab-selected');
        }
        this.imgContainer = __WEBPACK_IMPORTED_MODULE_11__models_templateImages_store__["a" /* TEMPLATE_IMAGES */][this.jsonBuilderHelper.getJSONBuilt().template.replace(/-/g, '_')];
        if (this.imgContainer) {
        }
    };
    BuilderComponent.prototype.toggleProperties = function () {
        var container = jQuery('#sidebar');
        var zoomFactor = 1;
        var minWinWidth = jQuery(window).width() - 575;
        if (container.hasClass('properties-close')) {
            container.animate({ right: "0px", easing: 'linear' }, 300);
            if (jQuery(window).width() > 1850) {
                var zoomFactor = 0.78;
            }
            else if (jQuery(window).width() > 992) {
                var zoomFactor = 0.7;
            }
            container.removeClass('properties-close');
            if (jQuery(window).width() < 992) {
                minWinWidth = jQuery(window).width() - 20;
            }
            jQuery(".template-section").animate({ width: minWinWidth }, 300);
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                jQuery("temp-dev").css('transform', 'scale(' + zoomFactor + ')');
            }
            else {
                jQuery("temp-dev").css('zoom', zoomFactor);
            }
        }
        else {
            var minWinWidth = jQuery(window).width() - 275;
            if (jQuery(window).width() > 1850) {
                zoomFactor = 0.97;
            }
            else if (jQuery(window).width() > 992) {
                var zoomFactor = 0.93;
            }
            container.animate({ right: "-300px", easing: 'linear' }, 300);
            container.addClass('properties-close');
            /* for canvas horizontal scroll */
            if (jQuery(window).width() < 992) {
                minWinWidth = jQuery(window).width() - 20;
            }
            jQuery(".template-section").animate({ width: minWinWidth }, 300);
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                jQuery("temp-dev").css('transform', 'scale(' + zoomFactor + ')');
            }
            else {
                jQuery("temp-dev").css('zoom', zoomFactor);
            }
            jQuery(".template-section").css('overflow-x', "hidden");
        }
    };
    BuilderComponent.prototype.openProperties = function () {
        var container = jQuery('#sidebar');
        var zoomFactor = 1;
        var minWinWidth = jQuery(window).width() - 575;
        if (container.hasClass('properties-close')) {
            container.animate({ right: "0px", easing: 'linear' }, 300);
            if (jQuery(window).width() > 1850) {
                var zoomFactor = 0.78;
            }
            else if (jQuery(window).width() > 992) {
                var zoomFactor = 0.7;
            }
            container.removeClass('properties-close');
            if (jQuery(window).width() < 992) {
                minWinWidth = jQuery(window).width() - 20;
            }
            jQuery(".template-section").css('width', minWinWidth);
            jQuery(".template-section").animate({ width: minWinWidth }, 300);
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                jQuery("temp-dev").css('transform', 'scale(' + zoomFactor + ')');
            }
            else {
                jQuery("temp-dev").css('zoom', zoomFactor);
            }
        }
    };
    BuilderComponent.prototype.openGlobalSettings = function () {
        this._featureAuthService.setSelectedFeature('custom_styling');
        if (this._featureAuthService.features.custom_styling.active) {
            this.jsonBuilderHelper.setSelectedModel('Global_Settings');
        }
        else {
            jQuery('.custom_styling').addClass('activegreen limited-label');
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
        }
    };
    BuilderComponent.prototype.openMobileProperties = function () {
        var container = jQuery('#sidebar');
        container.animate({
            right: "0px",
            easing: 'linear'
        }, 300);
        /* for canvas horizontal scroll */
        var minWinWidth = jQuery(window).width() - 20;
        jQuery(".template-section").animate({ width: minWinWidth }, 300);
        jQuery(".template-section").css('overflow-x', "hidden");
        jQuery('.mobile-prop-cross-icon').css('display', 'block');
        jQuery('.properties-modal-backdrop').css('display', 'block').addClass('fade in');
    };
    BuilderComponent.prototype.zoom = function (action) {
        var maxZoom = 2;
        var minZoom = 0.2;
        var zoomdiv = "temp-dev";
        var animationSpeed = "1000";
        if (action === 'in') {
            this.currentZoom = Number(jQuery('temp-dev').css("zoom"));
            if (this.currentZoom < maxZoom) {
                jQuery(zoomdiv).animate({
                    'zoom': this.currentZoom += this.zoomfactor
                }, animationSpeed);
            }
        }
        if (action === 'out') {
            this.currentZoom = jQuery('temp-dev').css("zoom");
            if (this.currentZoom > minZoom) {
                jQuery(zoomdiv).animate({
                    'zoom': this.currentZoom -= this.zoomfactor
                }, animationSpeed);
            }
        }
        if (action === 'reset') {
            if (jQuery(window).width() > 1850) {
                if (jQuery('#sidebar').hasClass('properties-close')) {
                    var zoomValue = 0.97;
                }
                else {
                    var zoomValue = 0.78;
                }
            }
            else {
                if (jQuery('#sidebar').hasClass('properties-close')) {
                    var zoomValue = 0.93;
                }
                else {
                    var zoomValue = 0.7;
                }
            }
            jQuery(zoomdiv).animate({
                'zoom': zoomValue
            }, animationSpeed);
        }
    };
    BuilderComponent.prototype.drag = function () {
        jQuery("temp-dev").draggable({});
    };
    BuilderComponent.prototype.onPreview = function () {
        localStorage.removeItem('template');
        localStorage.setItem('calc', this.jsonBuilderHelper.getJSONBuilt()._id);
        localStorage.setItem('template', JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
        window.open('/preview', '_blank');
    };
    BuilderComponent.prototype.onPublish = function ($event) {
        var that = this;
        var errorResults = '';
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical')
            errorResults = this.formulaService.checkIfFormulaWouldGiveSyntaxError();
        if (!this.jsonBuilderHelper.getJSONBuilt().url.length) {
            bootbox.dialog({
                closeButton: false,
                message: "\n                    <div class=\"bootbox-body-left\">\n                        <div class=\"mat-icon\">\n                           <i class=\"material-icons\">error</i>\n                        </div>\n                    </div>\n                    <div class=\"bootbox-body-right\">\n                       <p>The calculator can't go live without a name!</p>\n                       <p>Think of something interesting that would attract attention!</p>\n                    </div>\n                ",
                buttons: {
                    success: {
                        label: "OK",
                        className: "btn btn-ok btn-hover",
                        callback: function () {
                            jQuery('#myonoffswitch').attr('checked', false);
                        }
                    }
                }
            });
        }
        else if (errorResults != '' && this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical') {
            bootbox.confirm({
                size: 'small',
                message: "\n                    <div class=\"bootbox-body-left\">\n                        <div class=\"mat-icon\">\n                           <i class=\"material-icons\">error</i>\n                        </div>\n                    </div>\n                    <div class=\"bootbox-body-right\">\n                       <p>Since you edited the questions,you should consider <br/> revising the formula with the new updates.</p>\n                    </div>\n                ",
                // There are mistakes in ' + errorResults + '
                buttons: {
                    'cancel': {
                        label: 'Revise Formula',
                        className: 'btn btn-cancel btn-cancel-hover'
                    },
                    'confirm': {
                        label: 'Continue Anyway',
                        className: 'btn btn-ok btn-hover'
                    }
                },
                callback: function (result) {
                    if (result === true) {
                        that.Publish($event);
                    }
                }
            });
        }
        else if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical' && this.formulaService.getAllInvalidFormulas() != undefined) {
            this.formulaService.correctAll();
            this.Publish($event);
        }
        else {
            this.Publish($event);
        }
    };
    BuilderComponent.prototype.changeTitleDesc = function () {
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().title == 'Outgrow')
            this.jsonBuilderHelper.getJSONBuilt().title = this.jsonBuilderHelper.getLandingPageHeading('main-heading');
        if (this.jsonBuilderHelper.getJSONBuilt().description == 'Default Meta Description')
            this.jsonBuilderHelper.getJSONBuilt().description = this.jsonBuilderHelper.getLandingPageHeading('sub-heading');
        //updating CTA SHARES Default Text for Numerical.
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical') {
            var resultPage = this.jsonBuilderHelper.getJSONBuilt().pages.filter(function (page) { return page.type == 'Result'; });
            if (resultPage) {
                var leadformSection = resultPage[0].sections.filter(function (section) { return section.type == 'LeadForm'; });
                if (leadformSection) {
                    var ctaShares = leadformSection[0].items.filter(function (item) { return item.type == 'cta_shares'; });
                    if (ctaShares.length) {
                        ctaShares[0].options.map(function (option) {
                            if (!_this._featureAuthService.features.custom_branding.share_text) {
                                if (jQuery('<textarea/>').html(option.label.replace(/<(?:.|\n)*?>/gm, '')).text().trim() == _this.jsonBuilderHelper.getDefault('lpHeading') + ' | via @outgrowco')
                                    option.label = _this.jsonBuilderHelper.getLandingPageHeading('main-heading') + ' | via @outgtrowco';
                            }
                            else {
                                if (jQuery('<textarea/>').html(option.label.replace(/<(?:.|\n)*?>/gm, '')).text().trim() == _this.jsonBuilderHelper.getDefault('lpHeading'))
                                    option.label = _this.jsonBuilderHelper.getLandingPageHeading('main-heading');
                            }
                            if (jQuery('<textarea/>').html(option.icon.replace(/<(?:.|\n)*?>/gm, '')).text().trim() == _this.jsonBuilderHelper.getDefault('lpSubHeading'))
                                option.icon = _this.jsonBuilderHelper.getLandingPageHeading('sub-heading');
                        });
                    }
                }
            }
        }
        //updating CTA SHARES Default Text for Recom.
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.jsonBuilderHelper.getJSONBuilt().formula.map(function (formula) {
                if (formula.length) {
                    var links = formula.links.filter(function (link) { return link.type == 'share'; });
                    if (links.length) {
                        links.map(function (link) {
                            if (!_this._featureAuthService.features.custom_branding.share_text) {
                                if (link.title == 'Outgrow | via @outgrowco' || link.title == '')
                                    link.title = _this.jsonBuilderHelper.getLandingPageHeading('main-heading') + ' | via @outgrowco';
                            }
                            else {
                                if (link.title == 'Outgrow' || link.title == '')
                                    link.title = _this.jsonBuilderHelper.getLandingPageHeading('main-heading');
                            }
                            if (link.description == 'Default Meta Description' || link.description == '')
                                link.description = _this.jsonBuilderHelper.getLandingPageHeading('sub-heading');
                        });
                    }
                }
            });
        }
    };
    BuilderComponent.prototype.Publish = function ($event) {
        var _this = this;
        var button = jQuery($event.target);
        button.html('PUBLISHING');
        button.addClass('loading');
        button.attr('disabled', true);
        this.changeTitleDesc();
        this._builderService.publishApp({
            id: this.jsonBuilderHelper.getJSONBuilt()._id,
            url: this.jsonBuilderHelper.getJSONBuilt().url,
            unsaved: this._itemTrackService.getUnSavedData()
        })
            .subscribe(function (response) {
            // FBQ event
            /*fbq('trackCustom', 'Calculator Published');*/
            if (jQuery.isEmptyObject(response)) {
                _this._router.navigate(['/dashboard']);
            }
            else {
                if (_this.jsonBuilderHelper.getJSONBuilt().mode === 'PRIVATE') {
                    _this.jsonBuilderHelper.getJSONBuilt().mode = 'PUBLIC';
                    _this.srcUrl = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].APP_EXTENSION + '/' + _this.jsonBuilderHelper.getJSONBuilt().url;
                    _this.bootboxText = (_this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') ? 'Your Quiz is Live' : 'Your Calculator is Live';
                    bootbox.dialog({
                        message: "\n                           <div class=\"text-center live-modal\">\n                                <span class=\"icon-play-next\"><i class=\"material-icons\">queue_play_next</i></span>\n                                <div class=\"live-head\">" + _this.bootboxText + "</div>\n                                <img class=\"img-style hide\" src=\"assets/images/goLivePopup.png\"/>\n                                <div class=\"\">\n                                    <div class=\"live-subhead link-style\">\n                                        <span>\n                                            To preview, open this link in another browser.\n                                        </span>\n                                        <a class=\"live-url preview_copy\">Copy Link</a>\n                                    </div>\n                                    <div class=\"live-subhead selected-link\">\n                                        <span class=\"hide\">Your public calculator can be viewed here:</span>\n                                        <div class=\"live-url url-style\">" + _this.srcUrl + "</div>\n                                    </div>\n                                    <!--<img src=\"assets/images/gocopyPopup.png\"/>-->\n                                </div>\n                                <div class=\"table-responsive hide\">\n                                    <table class=\"table\">\n                                        <thead>\n                                            <tr>\n                                                <th>\n                                                    <div class=\"live-subhead link-style\">\n                                                        <span>\n                                                            To preview, open this link in another browser.\n                                                        </span>\n                                                        <a class=\"live-url preview_copy\">Copy Link</a>\n                                                    </div>\n                                                </th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"live-subhead\">\n                                                        <span class=\"hide\">Your public calculator can be viewed here:</span>\n                                                        <div class=\"live-url url-style\">" + _this.srcUrl + "</div>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                            "
                    });
                    /*==== Intercom ====*/
                    if (_this.interComData) {
                        _this.interComData.calculators_published++;
                        localStorage.setItem('icd', JSON.stringify(_this.interComData));
                        window.Intercom('update', _this.interComData);
                    }
                }
                else {
                    window.toastNotification('Changes Published');
                }
                _this.previousJson.liveApp = response;
                _this.jsonBuilderHelper.getJSONBuilt().liveApp = response;
                _this.previousJson.changed = false;
                _this.jsonBuilderHelper.getJSONBuilt().changed = false;
                button.html('LIVE');
                button.removeClass('loading');
            }
        }, function (error) {
            button.html('GO LIVE');
            button.attr('disabled', false);
            button.removeClass('loading');
            bootbox.alert('Something Went Wrong!');
            console.log(error);
        });
    };
    // View element Changes
    BuilderComponent.prototype.mobileMenuClicked = function () {
        jQuery('.editor-sidebar').fadeToggle(400);
        jQuery('.sidebar-modal-backdrop').css('display', 'block').addClass('fade in');
    };
    BuilderComponent.prototype.mobileMenuCrossClicked = function () {
        jQuery('.editor-sidebar').css('display', 'none');
        jQuery('.sidebar-modal-backdrop').css('display', 'none').addClass('fade out');
    };
    BuilderComponent.prototype.mobilePropCrossClicked = function () {
        var container = jQuery('#sidebar');
        container.animate({
            right: "-300px",
            easing: 'linear'
        }, 300);
        jQuery('#sidebar').addClass('properties-close');
        /* for canvas horizontal scroll */
        if (jQuery(window).width() > 992) {
            var minWinWidth = jQuery(window).width() - 289;
        }
        else {
            var minWinWidth = jQuery(window).width() - 20;
        }
        jQuery(".template-section").animate({ width: minWinWidth }, 300);
        jQuery("temp-dev").animate({ width: minWinWidth }, 300);
        jQuery(".template-section").css('overflow-x', "hidden");
        jQuery('.mobile-prop-cross-icon').css('display', 'none');
        jQuery('.properties-modal-backdrop').css('display', 'none').addClass('fade out');
        /*end*/
    };
    BuilderComponent.prototype.appNameblured = function () {
        jQuery('#fname').removeClass('active-text');
    };
    BuilderComponent.prototype.appNameFocused = function () {
        jQuery('#fname').addClass('active-text');
    };
    BuilderComponent.prototype.onCalcNameChanged = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().name) {
            this.uniqueUrlHandler();
        }
        else {
            window.toastNotification("Calculator name can't be empty");
            this.jsonBuilderHelper.getJSONBuilt().name = this.oldCalcName;
        }
    };
    BuilderComponent.prototype.isUnique = function (uniqueString) {
        if (this.oldCalcName != this.jsonBuilderHelper.getJSONBuilt().name) {
            var that = this;
            var url = that._builderService.sanitizeUrl(that.jsonBuilderHelper.getJSONBuilt().name);
            url = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].PROTOCOL + that.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].APP_EXTENSION + '/' + url;
            that.updateName();
        }
    };
    BuilderComponent.prototype.updateName = function () {
        var _this = this;
        this._builderService.updateName(this.jsonBuilderHelper.getJSONBuilt()._id, this.jsonBuilderHelper.getJSONBuilt().name)
            .subscribe(function (response) {
            if (!_this.jsonBuilderHelper.getJSONBuilt().url) {
                _this.jsonBuilderHelper.getJSONBuilt().url = response.url;
                window.history.replaceState({}, '', '/builder/' + response.url);
                var url = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].APP_EXTENSION + '/' + response.url;
                window.toastNotification('Calculator name added successfully');
                bootbox.dialog({
                    size: 'small',
                    message: "\n                            <div class=\"bootbox-config\">\n                                <div class=\"bootbox-body-left\">\n                                    <div class=\"mat-icon\">\n                                        <i class=\"material-icons\">error</i>\n                                    </div>\n                                </div>\n                                <div class=\"bootbox-body-right\">\n                                    <p class=\"\">We have set your calculator's url to \"" + url + "\" , You can always change it in configure section.</p>\n                                </div>\n                            </div>\n                        ",
                    buttons: {
                        success: {
                            label: "OK",
                            className: "btn btn-ok btn-hover"
                        }
                    }
                });
            }
            else {
                window.toastNotification('Calculator name changed successfully');
            }
            _this.oldCalcName = _this.jsonBuilderHelper.getJSONBuilt().name;
        }, function (error) {
            console.log(error);
        });
    };
    BuilderComponent.prototype.videoModal = function () {
        jQuery('#video-modal').modal('show');
        jQuery("i.support_icon").removeClass('bounceIn animated');
    };
    BuilderComponent.prototype.saveAppsetting = function () {
        var _this = this;
        this._builderService.saveAppSetting(this.jsonBuilderHelper.getJSONBuilt())
            .subscribe(function (response) {
            _this.jsonBuilderHelper.getJSONBuilt().url = response.url;
        }, function (error) {
            console.log(error);
        });
    };
    BuilderComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case "GOLIVE":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Publish');
                _kmq.push(['record', 'Publish Go Live Click']);
                break;
            case "LOGO":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'OGLogo');
                _kmq.push(['record', 'Back To Dashboard OGLogo Click']);
                break;
            case "PREVIEW":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'Preview');
                _kmq.push(['record', 'Preview Click']);
                break;
        }
    };
    BuilderComponent.prototype.onModeChange = function () {
        var _this = this;
        this._dashboardService.changeAppMode(this.jsonBuilderHelper.getJSONBuilt()._id)
            .subscribe(function (response) {
            _this.jsonBuilderHelper.getJSONBuilt().mode = 'PUBLIC';
        }, function (error) {
            console.log(error);
        });
    };
    BuilderComponent.prototype.ngDoCheck = function () {
        if (this.startAutoSave
            && JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()) != JSON.stringify(this.previousJson)) {
            this.previousJson = JSON.parse(JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
            var unSavedElements = this._itemTrackService.getUnSavedData();
            if (unSavedElements)
                this.autoSaver(unSavedElements);
        }
        else if (!this.startAutoSave && this.jsonBuilderHelper.getJSONBuilt())
            this.previousJson = JSON.parse(JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
    };
    BuilderComponent.prototype.debounce = function (func, wait) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    BuilderComponent.prototype.checkAnalytics = function () {
        this.isAnalyticsAvailable = this._featureAuthService.features.analytics.active;
        if (!this.isAnalyticsAvailable) {
            this._featureAuthService.setSelectedFeature('analytics');
            jQuery('.analytics').addClass('activegreen limited-label');
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
        }
        else {
            this.onSelect('analytics');
            this.selectedAnalyticComponent = 'overview';
        }
    };
    BuilderComponent.prototype.saveUnsavedData = function (unSavedElements) {
        var _this = this;
        var app = JSON.parse(JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
        delete app.pages;
        unSavedElements.app = app;
        this.jsonBuilderHelper.animInit();
        this._builderService.updateChanges(unSavedElements)
            .subscribe(function (response) {
            _this.jsonBuilderHelper.getJSONBuilt().changed = true;
            _this.jsonBuilderHelper.debounce(_this.jsonBuilderHelper.animLoad(), 1800);
            _this.activeSince = moment(Date.now()).fromNow().replace('ago', '').trim();
        }, function (error) {
            console.log(error);
        });
    };
    BuilderComponent.prototype.onSelect = function (comp) {
        //  window.location.hash = '';
        /*if (comp == 'config')
          window.location.hash = '#' + this.selectedConfigComponent;
        if (comp == 'build')
          window.location.hash = '#' + this.jsonBuilderHelper.getSelectedPage().type;
        if (comp == 'analytics')
          window.location.hash = '#overview';*/
        this.selectedSec = comp;
    };
    BuilderComponent.prototype.OnConfigCompoentSelect = function (component) {
        this.selectedConfigComponent = component;
        //window.location.hash = '#' + component;
    };
    BuilderComponent.prototype.upload = function (type) {
        var _this = this;
        filepicker.setKey(this.filePickerKey);
        var options = { mimetypes: ['image/*'] };
        (type !== 'logo') ? options['imageQuality'] = 50 : '';
        filepicker.pick(options, function (InkBlob) {
            _this.jsonBuilderHelper.getSelectedPage().bgImage = InkBlob.url;
            _this.jsonBuilderHelper.getSelectedPage().bgColor = '';
            var landingPage = _this.jsonBuilderHelper.getJSONBuilt().pages.filter(function (page) { return page.type == 'Landing'; });
            if (landingPage) {
                landingPage[0].bgImage = InkBlob.url;
                landingPage[0].bgColor = '';
                _this._itemTrackService.setUnSavedPage(landingPage[0]);
            }
            jQuery('#filepicker_dialog_container').find('a').click();
            jQuery('.page_0').trigger('click');
        }, function (FPError) {
            console.log(FPError.toString());
        });
    };
    BuilderComponent.prototype.addOpen = function () {
        jQuery('.help-options').addClass('open');
    };
    BuilderComponent.prototype.removeOpen = function () {
        jQuery('.help-options').removeClass('open');
    };
    BuilderComponent.prototype.ngOnDestroy = function () {
        // window.Intercom('update', { hide_default_launcher: false });
    };
    BuilderComponent.prototype.applyImage = function (imgShow) {
        var landingPage = this.jsonBuilderHelper.getJSONBuilt().pages.filter(function (page) { return page.type == 'Landing'; });
        if (landingPage) {
            landingPage[0].bgImage = imgShow.url;
            landingPage[0].bgColor = '';
            this._itemTrackService.setUnSavedPage(landingPage[0]);
        }
    };
    BuilderComponent.prototype.helloBarNotify = function (event) {
        if (event.data) {
            this.helloBar.message = event.data.message;
            this.helloBar.flag = true;
            this.cardStatus = event.data.cardStatus ? event.data.cardStatus : null;
        }
        console.log(this.helloBar);
    };
    BuilderComponent.prototype.ccpopop = function () {
        localStorage.setItem('openpopup', 'true');
        jQuery('#cc-modal-payment').modal('show');
        jQuery('.modal-backdrop').insertAfter('#cc-modal-payment');
        jQuery('#cc-modal-payment').on('hidden.bs.modal', function () {
            localStorage.setItem('openpopup', 'true');
        });
    };
    BuilderComponent.prototype.openModal = function (event) {
        jQuery('button[id=essentials_m]').trigger('click');
    };
    BuilderComponent.prototype.routeSetting = function () {
        localStorage.setItem('settings', 'true');
        this._router.navigate(['/settings/membership']);
    };
    BuilderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Component */])({
            selector: 'sd-builder',
            template: __webpack_require__(944),
            styles: [__webpack_require__(943)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_13__shared_services_subdomain_service__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_13__shared_services_subdomain_service__["a" /* SubDomainService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_builder_service__["a" /* BuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_builder_service__["a" /* BuilderService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__templates_services_DefaultJSON_service__["a" /* DefaultJSON */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__templates_services_DefaultJSON_service__["a" /* DefaultJSON */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_JSONUpdateItemTracker_service__["a" /* JSONItemTracker */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_JSONUpdateItemTracker_service__["a" /* JSONItemTracker */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_14__shared_services_dashboard_service__["a" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_14__shared_services_dashboard_service__["a" /* DashboardService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__services_formula_service__["a" /* FormulaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_formula_service__["a" /* FormulaService */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_15__shared_services_feature_access_service__["a" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_15__shared_services_feature_access_service__["a" /* FeatureAuthService */]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_16__shared_services_cookie_service__["a" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_16__shared_services_cookie_service__["a" /* CookieService */]) === 'function' && _l) || Object, (typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_17__shared_services_script_service__["a" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_17__shared_services_script_service__["a" /* Script */]) === 'function' && _m) || Object, (typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_9__templates_services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__templates_services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _o) || Object, (typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_18__shared_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_18__shared_services_user_service__["a" /* UserService */]) === 'function' && _p) || Object])
    ], BuilderComponent);
    return BuilderComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/builder.component.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_cookie_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_feature_access_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_marketing_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_script_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuilderParentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BuilderParentComponent = (function () {
    function BuilderParentComponent(_cookieService, _featureAuthService, _script, _marketingService) {
        this._cookieService = _cookieService;
        this._featureAuthService = _featureAuthService;
        this._script = _script;
        this._marketingService = _marketingService;
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
    BuilderParentComponent.prototype.ngOnInit = function () {
    };
    BuilderParentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'og-builder',
            template: "\n    <router-outlet></router-outlet>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_cookie_service__["a" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_cookie_service__["a" /* CookieService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_feature_access_service__["a" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_feature_access_service__["a" /* FeatureAuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_script_service__["a" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_script_service__["a" /* Script */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_marketing_service__["a" /* MarketingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_marketing_service__["a" /* MarketingService */]) === 'function' && _d) || Object])
    ], BuilderParentComponent);
    return BuilderParentComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/builderParent.component.js.map

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_subdomain_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_builder_service__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PreviewComponent = (function () {
    function PreviewComponent(subDomainService, cdr, titleService, _builderService) {
        this.subDomainService = subDomainService;
        this.cdr = cdr;
        this.titleService = titleService;
        this._builderService = _builderService;
        this.className = 'desktop';
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var calc = localStorage.getItem('calc');
        var project = localStorage.getItem('project');
        if (calc && project != 'New') {
            this._builderService.getProject({ _id: calc, company: this.subDomainService.subDomain.sub_domain })
                .subscribe(function (response) {
                if (!jQuery.isEmptyObject(response)) {
                    var responseJson = JSON.stringify(response);
                    jQuery('#favicon').attr('href', JSON.parse(responseJson).favicon);
                    _this.titleService.setTitle(JSON.parse(responseJson).title.replace(/(<([^>]+)>)/ig, ''));
                    localStorage.setItem('template', responseJson);
                    _this.src = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_EXTENSION + '/preview/previewFrame';
                }
            }, function (error) { });
        }
        else {
            var template = localStorage.getItem('template');
            if (template || this.json) {
                var app = this.json || JSON.parse(template);
                if (app.parentApp)
                    localStorage.setItem('calc', app.parentApp);
                else
                    localStorage.setItem('calc', app._id);
                this.src = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_EXTENSION + '/preview/previewFrame';
                jQuery('meta[name=description]').attr('content', app.description);
                document.title = app.title;
                jQuery('#favicon').attr('href', app.favicon);
            }
        }
        window.Intercom('update', { hide_default_launcher: true });
    };
    PreviewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //code
        this.viewOnWindowWidthBasis();
        jQuery(window).resize(function () {
            _this.viewOnWindowWidthBasis();
        });
    };
    PreviewComponent.prototype.viewOnWindowWidthBasis = function () {
        var width = jQuery(window).width();
        if (width > 775)
            this.switchView('desktop');
        else if (width <= 775 && width > 375)
            this.switchView('tablet');
        else
            this.switchView('mobile');
        this.cdr.detectChanges();
    };
    PreviewComponent.prototype.onMouseEnter = function () {
        if (this.className === 'mobile')
            jQuery('.responsive-menu').fadeIn(600);
    };
    PreviewComponent.prototype.onMouseLeave = function () {
        if (this.className === 'mobile')
            jQuery('.responsive-menu').fadeOut(600);
    };
    PreviewComponent.prototype.switchView = function (className) {
        this.className = className;
        var width = 600;
        var height = 400;
        window.resizeBy(width, height);
        window.moveTo(((screen.width - width) / 2), ((screen.height - height) / 2));
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], PreviewComponent.prototype, "json", void 0);
    PreviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'og-preview',
            template: "\n    <div class=\"responsive-menu\" (mouseenter)=\"onMouseEnter()\">\n        <span class=\"title\">Resize Template: </span>\n        <div class=\"icon-block\">\n            <a href=\"javascript:void(0);\" (click)=\"switchView('desktop')\" [class.active-view] = \"className==='desktop'\">\n                <i class=\"material-icons\">desktop_mac</i> <span>|</span></a>\n            <a href=\"javascript:void(0);\" (click)=\"switchView('tablet')\"  [class.active-view] = \"className==='tablet'\">\n                <i class=\"material-icons\">tablet_mac</i><span>|</span> </a>\n            <a href=\"javascript:void(0);\" (click)=\"switchView('mobile')\"  [class.active-view] = \"className==='mobile'\">\n                <i class=\"material-icons\">smartphone</i></a>\n        </div>\n    </div>\n    <div id=\"main-profile\">\n        <iframe\n        (mouseenter)=\"onMouseEnter()\" \n        (mouseleave)=\"onMouseLeave()\"\n        id=\"mobile-iframe\"\n        [ngClass]=\"{\n            desktop: className==='desktop', \n            tablet: className==='tablet',\n            mobile: className==='mobile'\n        }\" \n        [src]=\"src | safeUrl\" align=\"middle\">\n        </iframe>\n    </div>",
            styles: ["\n    @font-face {\n        font-family: montserratregular;\n        font-style: normal;\n        font-weight: 400;\n        src: url(../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), url(../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"), url(../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), url(../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n    }\n    .responsive-menu {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu a {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu a span {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view i{\n        color: #fb545b;\n    }\n    .responsive-menu span.title {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n    }\n\n    .responsive-menu div {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .desktop {\n        width: 100%;\n        height: 100%;\n    }\n\n    .mobile {\n        width: 375px;\n        height: 570px;\n        margin: 1% auto;\n        height:570px;\n        border: 1px solid #dcdddf;\n    }\n\n    .tablet {\n        width: 775px;\n        height: 100%;\n        margin: 0 auto;\n        border: 1px solid #dcdddf;\n    }\n        @font-face {\n        font-family: 'Material Icons';\n        font-style: normal;\n        font-weight: 400;\n        src: url(MaterialIcons-Regular.eot);\n        src: local('Material Icons'), local('materialIcons-Regular'), url(../assets/fonts/materialIcons-Regular.woff2) format('woff2'), url(../assets/fonts/materialIcons-Regular.woff) format('woff'), url(../assets/fonts/materialIcons-Regular.ttf) format('truetype')\n      }\n        .material-icons {\n        font-family: 'Material Icons';\n        font-weight: 400;\n        font-style: normal;\n        display: inline-block;\n        line-height: 1;\n        text-transform: none;\n        letter-spacing: normal;\n        word-wrap: normal;\n        white-space: nowrap;\n        direction: ltr;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        font-feature-settings: 'liga'\n      }\n      .responsive-menu i{ font-size:24px;}\n"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_subdomain_service__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_subdomain_service__["a" /* SubDomainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ChangeDetectorRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_builder_service__["a" /* BuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_builder_service__["a" /* BuilderService */]) === 'function' && _d) || Object])
    ], PreviewComponent);
    return PreviewComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/preview.component.js.map

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_subdomain_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleCodeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SampleCodeComponent = (function () {
    function SampleCodeComponent(subDomainService, route) {
        this.subDomainService = subDomainService;
        this.route = route;
        this.pageType = 'full-page';
    }
    SampleCodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var type = params['type'];
            if (type)
                _this.pageType = type;
        });
        this.src = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_EXTENSION + '/preview/previewFrame';
        var template = localStorage.getItem('template');
        if (template) {
            var app = JSON.parse(template);
            jQuery('meta[name=description]').attr('content', app.description);
            window.parent.document.title = app.title;
            jQuery('#favicon').attr('href', app.favicon);
        }
    };
    SampleCodeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'og-sample-code',
            template: "\n    <div id=\"main-profile\">\n        <iframe\n        [class.full-page]=\"pageType==='full-page'\"\n        [class.small-page]=\"pageType==='small-page'\"\n        [src]=\"src | safeUrl\" align=\"middle\">\n        </iframe>\n    </div>",
            styles: ["\n    .responsive-menu {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu a {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu a span {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view i{\n        color: #fb545b;\n    }\n    .responsive-menu span.title {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n    }\n\n    .responsive-menu div {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .full-page {\n        width: 100%;\n        height: 100%;\n    }\n\n    .small-page {\n        width: 375px;\n        margin: 0 auto;\n        height: 50%;\n        border: 1px solid #dcdddf;\n    }\n"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_subdomain_service__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_subdomain_service__["a" /* SubDomainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], SampleCodeComponent);
    return SampleCodeComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/sampleCode.component.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__site_builder_builderParent_component__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_builder_builder_component__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_templates_templateAll_preview_component__ = __webpack_require__(938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__site_templates_templateAll_template_component__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__site_templates_templateAll_sampleCode_component__ = __webpack_require__(939);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BUILDER_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PREVIEW_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SAMPLE_ROUTES; });





var BUILDER_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__site_builder_builderParent_component__["a" /* BuilderParentComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__site_builder_builder_component__["a" /* BuilderComponent */]
            },
            {
                path: ':name',
                component: __WEBPACK_IMPORTED_MODULE_1__site_builder_builder_component__["a" /* BuilderComponent */]
            }
        ]
    }
];
var PREVIEW_ROUTES = [
    {
        path: '',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__site_templates_templateAll_preview_component__["a" /* PreviewComponent */]
            },
            {
                path: 'previewFrame',
                component: __WEBPACK_IMPORTED_MODULE_3__site_templates_templateAll_template_component__["a" /* Template */]
            }
        ]
    }
];
var SAMPLE_ROUTES = [
    {
        path: '',
        children: [
            {
                path: ':type',
                component: __WEBPACK_IMPORTED_MODULE_4__site_templates_templateAll_sampleCode_component__["a" /* SampleCodeComponent */],
            }
        ]
    }
];
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/builder.routes.js.map

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TEMPLATE_IMAGES; });
var TEMPLATE_IMAGES = {
    one_page_slider: [
        { url: 'https://cdn.filestackcontent.com/aVYR4OyJTv6SzgCfBRKK', visible: true, thumbnail: 'https://cdn.filestackcontent.com/GmkMT6kRQr424tSUx3qw' },
        { url: 'https://cdn.filestackcontent.com/KXNXfEugSHKg6WgMNNdJ', visible: true, thumbnail: 'https://cdn.filestackcontent.com/1oaxPo94StSvNN0VCEJn' },
        { url: 'https://cdn.filestackcontent.com/4iGlsnFwSwivmPE5Odmd', visible: true, thumbnail: 'https://cdn.filestackcontent.com/RRkbh0SZSWKRzWNyVRDs' },
        { url: 'https://cdn.filestackcontent.com/m2rIoC04TjxHlHyOAQWs', visible: true, thumbnail: 'https://cdn.filestackcontent.com/u09EAB7XQR2dSDxVbQGg' },
        { url: 'https://cdn.filestackcontent.com/OgMIjPbMROmCFElqOFWM', visible: true, thumbnail: 'https://cdn.filestackcontent.com/nMFlAJMS1COEraJfN6u1' },
        { url: 'https://cdn.filestackcontent.com/FwxQUiWTO2x2WWMR5W8Q', visible: true, thumbnail: 'https://cdn.filestackcontent.com/VKB8fzXQ6WSgYyXcpD4Q' },
        { url: 'https://cdn.filestackcontent.com/LzggJhdTH2GnVAEI4Rwg', visible: true, thumbnail: 'https://cdn.filestackcontent.com/oP6dJPW2TcOdF0qy05DH' },
        { url: 'https://cdn.filestackcontent.com/jc2sCaDvQAaVE96RHr7W', visible: true, thumbnail: 'https://cdn.filestackcontent.com/6RVZlTK0QoGvtMsMp8T2' },
        { url: 'https://cdn.filestackcontent.com/PwrD5l9CSFCwJfE8xg7H', visible: true, thumbnail: 'https://cdn.filestackcontent.com/FCIBhdkIRzKy4a5yQsWf' },
        { url: 'https://cdn.filestackcontent.com/LB4WDLORq1LSmsQ7YclQ', visible: true, thumbnail: 'https://cdn.filestackcontent.com/1e8QsNvTxi11HLeSbxiV' },
        { url: 'https://cdn.filestackcontent.com/qizw8E6BSwWmu9tD1ZLW', visible: true, thumbnail: 'https://cdn.filestackcontent.com/wXDe3GSQjuXVvo4xXwG2' },
        { url: 'https://cdn.filestackcontent.com/WTilpU2iQFubT0bEQa8r', visible: true, thumbnail: 'https://cdn.filestackcontent.com/zL17NB7JTxsxpfcxZYbw' },
        { url: 'https://cdn.filestackcontent.com/Ew8kRa21THa2NgtipwsK', visible: false, thumbnail: 'https://cdn.filestackcontent.com/VUcBmDFSqpDO5tQjQB6w' },
        { url: 'https://cdn.filestackcontent.com/g07V3qF3Q1S6H2o8NatM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/sRfbbZvTi2Jx1lhaKokG' },
        { url: 'https://cdn.filestackcontent.com/GMmRIW5RRHaRNNVcLSSO', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8xt4zamZT9uWlMkqt6OK' },
        { url: 'https://cdn.filestackcontent.com/EcdnMP0Rqer6WSCcnwFA', visible: false, thumbnail: 'https://cdn.filestackcontent.com/FBnS3wGRTPSH7YJikmQJ' },
        { url: 'https://cdn.filestackcontent.com/1TvMySyJRQqiL9vBXtyE', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ebUvHmvoSyCdw8O9P8zs' },
        { url: 'https://cdn.filestackcontent.com/dLzixFlIR3uPYWD4qOmx', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8JlUH2zdSmuB8g2h8xuO' },
        { url: 'https://cdn.filestackcontent.com/xl23om5bQWuhQKasXY2g', visible: false, thumbnail: 'https://cdn.filestackcontent.com/tyT4hZwYS5iwZ5rCBYVg' },
        { url: 'https://cdn.filestackcontent.com/RoNeW8HSEyhWEQ26yOdQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/662eKadURFu83Z0nThRh' },
        { url: 'https://cdn.filestackcontent.com/ZkScOEEsSNGgkXa1xWdM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hUj1G4nYSvO3dacjzquU' },
        { url: 'https://cdn.filestackcontent.com/jo4DEgZqQAitruVsSLZE', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ZeE4nW05TeqpsUi0CCNx' },
        { url: 'https://cdn.filestackcontent.com/M3kTEshSiMxkncqXQRwQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/xGLNfMoQ9aBfEQ1bgmOS' },
        { url: 'https://cdn.filestackcontent.com/O7tZmC1QWi7Bds3sd5Mt', visible: false, thumbnail: 'https://cdn.filestackcontent.com/KIqZ5JAIRPGgXAaTOYBn' },
        { url: 'https://cdn.filestackcontent.com/cnETDcugTjaPKnPRJbsy', visible: false, thumbnail: 'https://cdn.filestackcontent.com/dwbu0BoOQH2GTyhUkIEv' },
        { url: 'https://cdn.filestackcontent.com/mYNUj1XzQdivvRaGOglb', visible: false, thumbnail: 'https://cdn.filestackcontent.com/88BbexkSepUpSUISUFvw' },
        { url: 'https://cdn.filestackcontent.com/SwaCGayBRYm5aHgItnpD', visible: false, thumbnail: 'https://cdn.filestackcontent.com/IVHpA3XBTKu19FWpuVWA' },
        { url: 'https://cdn.filestackcontent.com/lBJYG1fxTuuEkhuCGha7', visible: false, thumbnail: 'https://cdn.filestackcontent.com/PCMnubtSz6ESGSOk2dc8' },
        { url: 'https://cdn.filestackcontent.com/qvtMoRiQHS5eFyJigvpm', visible: false, thumbnail: 'https://cdn.filestackcontent.com/H1CLTpFTSXallHWwFOtW' },
        { url: 'https://cdn.filestackcontent.com/5DMiBlQjuGxCAwe4uDpA', visible: false, thumbnail: 'https://cdn.filestackcontent.com/JuVA1A9Qoacp0MkSFEED' },
        { url: 'https://cdn.filestackcontent.com/xDqVRoLlQaWWtlxiHqDs', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hPyXBD8QRJu3N2P1Wp4A' },
        { url: 'https://cdn.filestackcontent.com/fvv15YVtRHSNcKzSnVss', visible: false, thumbnail: 'https://cdn.filestackcontent.com/2kXxfacjRJSXpRsz1owd' },
        { url: 'https://cdn.filestackcontent.com/3WGuORxeSlgyJ2LHkfXl', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ZrFqPU0RSGuVHhNpbHIP' },
        { url: 'https://cdn.filestackcontent.com/4kW5bGXIS9SyB125WYQh', visible: false, thumbnail: 'https://cdn.filestackcontent.com/WwGsUv2RtCtARi4BOTIQ' },
        { url: 'https://cdn.filestackcontent.com/tjRjrfGYTbyG47Jn7QcG', visible: false, thumbnail: 'https://cdn.filestackcontent.com/7U0x9gf7R5GdjzokMoxG' },
        { url: 'https://cdn.filestackcontent.com/hhzst5LjQi6Xa0QSkavr', visible: false, thumbnail: 'https://cdn.filestackcontent.com/BOs9BXA5Q6W7FRpKzZXk' },
        { url: 'https://cdn.filestackcontent.com/KBi7iM8JQJC7Yij3s7Wp', visible: false, thumbnail: 'https://cdn.filestackcontent.com/k40QVyatQr6kUC4yNbld' },
        { url: 'https://cdn.filestackcontent.com/JiDpU5dSoWfQdh7AviuQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/RoQuwDH1TOWImKZBI7t4' },
        { url: 'https://cdn.filestackcontent.com/T8SdY2jiRnqJtCiAZ9qu', visible: false, thumbnail: 'https://cdn.filestackcontent.com/Fd20YJsR8amNjMyxivKm' },
        { url: 'https://cdn.filestackcontent.com/F1vDUiSEQaumAZ1eZqfe', visible: false, thumbnail: 'https://cdn.filestackcontent.com/LziXRUgBQRW8c6IfOivp' },
        { url: 'https://cdn.filestackcontent.com/Zne4BRaQHq2tBKkRRXl3', visible: false, thumbnail: 'https://cdn.filestackcontent.com/bvGffywSQMGVYhNHPwkN' },
        { url: 'https://cdn.filestackcontent.com/wbi8SjauQTyFpaVMTG4e', visible: false, thumbnail: 'https://cdn.filestackcontent.com/yE4PTFFNQFmsMAyKPQ4M' },
        { url: 'https://cdn.filestackcontent.com/Cg1IOs5zQsy3LkCm6b0r', visible: false, thumbnail: 'https://cdn.filestackcontent.com/BgkvnMJPRnJ6kVc0MYmA' },
        { url: 'https://cdn.filestackcontent.com/qgXwK3dbQGqKDhzHgbAt', visible: false, thumbnail: 'https://cdn.filestackcontent.com/vIcpNS53Q2aTZqiP4UEg' },
        { url: 'https://cdn.filestackcontent.com/PBNv8JpTQ3W7yIij9fAM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/A7LmwwalRYakqjfb415x' },
        { url: 'https://cdn.filestackcontent.com/Lz4M650R9ixA9isReSgW', visible: false, thumbnail: 'https://cdn.filestackcontent.com/zhMz5ORQQep361o1W54I' },
        { url: 'https://cdn.filestackcontent.com/I2oOkCxGTTGjwX04d7Mo', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8L355fsrQ2uV9jKiUoSO' },
        { url: 'https://cdn.filestackcontent.com/okKKHn7yQYGKsHXNDU7G', visible: false, thumbnail: 'https://cdn.filestackcontent.com/fHmx2NjyRqPCKkqOF7Jg' },
        { url: 'https://cdn.filestackcontent.com/4W4YMD3oQsaMRKVMbMsS', visible: false, thumbnail: 'https://cdn.filestackcontent.com/bPpfQQFQMaEUTJ1jOmuA' },
        { url: 'https://cdn.filestackcontent.com/6OiMsTQVRO252f8PzjBs', visible: false, thumbnail: 'https://cdn.filestackcontent.com/NWmIG5EST2QJjdyqdg9l' },
        { url: 'https://cdn.filestackcontent.com/3S1M09aSr6Pnt73M9qIH', visible: false, thumbnail: 'https://cdn.filestackcontent.com/FVqxHNnLREKiSEK80P1P' },
        { url: 'https://cdn.filestackcontent.com/ClFUgIs2T2WiVy6vUdXm', visible: false, thumbnail: 'https://cdn.filestackcontent.com/CcHctJMtQVWPkGqAudBJ' },
        { url: 'https://cdn.filestackcontent.com/u39c64QiRkGay3C00zqI', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ddCuweV0T5OnmIYxY3bS' },
        { url: 'https://cdn.filestackcontent.com/ont63i2T9i6ORqCKImQQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/9gl8wqvRsGZmFdibC00V' },
        { url: 'https://cdn.filestackcontent.com/dg2089cQASvfWm6Qechw', visible: false, thumbnail: 'https://cdn.filestackcontent.com/X9m3l3qQMmgwcVqxawLQ' },
        { url: 'https://cdn.filestackcontent.com/qyJRtswdT4WCgphxnyrg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/aDpC8BIEScOdNNBTGeAF' },
        { url: 'https://cdn.filestackcontent.com/FwG3icX1QFStghU2awIn', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hXrzc1HKQdiXAAu6qpAE' },
        { url: 'https://cdn.filestackcontent.com/OyBC4xujTECzWtIdLRmF', visible: false, thumbnail: 'https://cdn.filestackcontent.com/LdcyIiuMS0OYtuveoRzq' },
        { url: 'https://cdn.filestackcontent.com/e0Jqz9GgTgOu97frrpuZ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/qzpOGDP4SXyxO1YkotZH' },
        { url: 'https://cdn.filestackcontent.com/OexaQ7NoQB2Txb0oE65e', visible: false, thumbnail: 'https://cdn.filestackcontent.com/48vsZLD3RXq4gjgtYo6T' },
        { url: 'https://cdn.filestackcontent.com/8dCVS0a7Qdmy6vZW73gg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/TyP7QYGRPCizcvxhRZ5Q' },
        { url: 'https://cdn.filestackcontent.com/kNcYRBIKRZuU25neNk1Y', visible: false, thumbnail: 'https://cdn.filestackcontent.com/UUSZk4HGSBipwePjArtA' },
        { url: 'https://cdn.filestackcontent.com/klusotNtSaWIubBoDRXk', visible: false, thumbnail: 'https://cdn.filestackcontent.com/qCC3NdCMQt6YWZXuf4Ee' },
        { url: 'https://cdn.filestackcontent.com/CSqPYvwnSrmdVdAsBhGg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/xmJ8lJA1T0q5EBE9ZHcE' },
        { url: 'https://cdn.filestackcontent.com/cBm5mi9eT7mp6JUohKyP', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ol0Exp4nQruUU1WmXZVc' },
        { url: 'https://cdn.filestackcontent.com/8BGQ8qYdQTOOdkcLzxJ7', visible: false, thumbnail: 'https://cdn.filestackcontent.com/QAYxPqCiSgqEfmjFj2a4' },
        { url: 'https://cdn.filestackcontent.com/gpgquQW0QNmhfnyBNQsg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/VCQYLRVeT2ilO0Aqhq8n' },
        { url: 'https://cdn.filestackcontent.com/kIc3zjqdS7qiMcoEDb6u', visible: false, thumbnail: 'https://cdn.filestackcontent.com/wCYP9q2PQb682UpA40KG' },
        { url: 'https://cdn.filestackcontent.com/DUC7X6mWRvSEh3o9ybxR', visible: false, thumbnail: 'https://cdn.filestackcontent.com/eT7XmNOYQHKHhIM4v3tA' },
        { url: 'https://cdn.filestackcontent.com/nxp8alsjQ1SrQD7ouP5u', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ctKPMMyWTNam7Fzymlao' },
        { url: 'https://cdn.filestackcontent.com/IZcHV8E4SaWBEs3S6wns', visible: false, thumbnail: 'https://cdn.filestackcontent.com/sIQmGhWlSFKNRK0q5cwN' }
    ],
    sound_cloud: [
        { url: 'https://cdn.filestackcontent.com/aVYR4OyJTv6SzgCfBRKK', visible: true, thumbnail: 'https://cdn.filestackcontent.com/GmkMT6kRQr424tSUx3qw' },
        { url: 'https://cdn.filestackcontent.com/KXNXfEugSHKg6WgMNNdJ', visible: true, thumbnail: 'https://cdn.filestackcontent.com/1oaxPo94StSvNN0VCEJn' },
        { url: 'https://cdn.filestackcontent.com/4iGlsnFwSwivmPE5Odmd', visible: true, thumbnail: 'https://cdn.filestackcontent.com/RRkbh0SZSWKRzWNyVRDs' },
        { url: 'https://cdn.filestackcontent.com/m2rIoC04TjxHlHyOAQWs', visible: true, thumbnail: 'https://cdn.filestackcontent.com/u09EAB7XQR2dSDxVbQGg' },
        { url: 'https://cdn.filestackcontent.com/OgMIjPbMROmCFElqOFWM', visible: true, thumbnail: 'https://cdn.filestackcontent.com/nMFlAJMS1COEraJfN6u1' },
        { url: 'https://cdn.filestackcontent.com/FwxQUiWTO2x2WWMR5W8Q', visible: true, thumbnail: 'https://cdn.filestackcontent.com/VKB8fzXQ6WSgYyXcpD4Q' },
        { url: 'https://cdn.filestackcontent.com/LzggJhdTH2GnVAEI4Rwg', visible: true, thumbnail: 'https://cdn.filestackcontent.com/oP6dJPW2TcOdF0qy05DH' },
        { url: 'https://cdn.filestackcontent.com/jc2sCaDvQAaVE96RHr7W', visible: true, thumbnail: 'https://cdn.filestackcontent.com/6RVZlTK0QoGvtMsMp8T2' },
        { url: 'https://cdn.filestackcontent.com/PwrD5l9CSFCwJfE8xg7H', visible: true, thumbnail: 'https://cdn.filestackcontent.com/FCIBhdkIRzKy4a5yQsWf' },
        { url: 'https://cdn.filestackcontent.com/LB4WDLORq1LSmsQ7YclQ', visible: true, thumbnail: 'https://cdn.filestackcontent.com/1e8QsNvTxi11HLeSbxiV' },
        { url: 'https://cdn.filestackcontent.com/qizw8E6BSwWmu9tD1ZLW', visible: true, thumbnail: 'https://cdn.filestackcontent.com/wXDe3GSQjuXVvo4xXwG2' },
        { url: 'https://cdn.filestackcontent.com/WTilpU2iQFubT0bEQa8r', visible: true, thumbnail: 'https://cdn.filestackcontent.com/zL17NB7JTxsxpfcxZYbw' },
        { url: 'https://cdn.filestackcontent.com/Ew8kRa21THa2NgtipwsK', visible: false, thumbnail: 'https://cdn.filestackcontent.com/VUcBmDFSqpDO5tQjQB6w' },
        { url: 'https://cdn.filestackcontent.com/g07V3qF3Q1S6H2o8NatM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/sRfbbZvTi2Jx1lhaKokG' },
        { url: 'https://cdn.filestackcontent.com/GMmRIW5RRHaRNNVcLSSO', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8xt4zamZT9uWlMkqt6OK' },
        { url: 'https://cdn.filestackcontent.com/EcdnMP0Rqer6WSCcnwFA', visible: false, thumbnail: 'https://cdn.filestackcontent.com/FBnS3wGRTPSH7YJikmQJ' },
        { url: 'https://cdn.filestackcontent.com/1TvMySyJRQqiL9vBXtyE', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ebUvHmvoSyCdw8O9P8zs' },
        { url: 'https://cdn.filestackcontent.com/dLzixFlIR3uPYWD4qOmx', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8JlUH2zdSmuB8g2h8xuO' },
        { url: 'https://cdn.filestackcontent.com/xl23om5bQWuhQKasXY2g', visible: false, thumbnail: 'https://cdn.filestackcontent.com/tyT4hZwYS5iwZ5rCBYVg' },
        { url: 'https://cdn.filestackcontent.com/RoNeW8HSEyhWEQ26yOdQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/662eKadURFu83Z0nThRh' },
        { url: 'https://cdn.filestackcontent.com/ZkScOEEsSNGgkXa1xWdM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hUj1G4nYSvO3dacjzquU' },
        { url: 'https://cdn.filestackcontent.com/jo4DEgZqQAitruVsSLZE', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ZeE4nW05TeqpsUi0CCNx' },
        { url: 'https://cdn.filestackcontent.com/M3kTEshSiMxkncqXQRwQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/xGLNfMoQ9aBfEQ1bgmOS' },
        { url: 'https://cdn.filestackcontent.com/O7tZmC1QWi7Bds3sd5Mt', visible: false, thumbnail: 'https://cdn.filestackcontent.com/KIqZ5JAIRPGgXAaTOYBn' },
        { url: 'https://cdn.filestackcontent.com/cnETDcugTjaPKnPRJbsy', visible: false, thumbnail: 'https://cdn.filestackcontent.com/dwbu0BoOQH2GTyhUkIEv' },
        { url: 'https://cdn.filestackcontent.com/mYNUj1XzQdivvRaGOglb', visible: false, thumbnail: 'https://cdn.filestackcontent.com/88BbexkSepUpSUISUFvw' },
        { url: 'https://cdn.filestackcontent.com/SwaCGayBRYm5aHgItnpD', visible: false, thumbnail: 'https://cdn.filestackcontent.com/IVHpA3XBTKu19FWpuVWA' },
        { url: 'https://cdn.filestackcontent.com/lBJYG1fxTuuEkhuCGha7', visible: false, thumbnail: 'https://cdn.filestackcontent.com/PCMnubtSz6ESGSOk2dc8' },
        { url: 'https://cdn.filestackcontent.com/qvtMoRiQHS5eFyJigvpm', visible: false, thumbnail: 'https://cdn.filestackcontent.com/H1CLTpFTSXallHWwFOtW' },
        { url: 'https://cdn.filestackcontent.com/5DMiBlQjuGxCAwe4uDpA', visible: false, thumbnail: 'https://cdn.filestackcontent.com/JuVA1A9Qoacp0MkSFEED' },
        { url: 'https://cdn.filestackcontent.com/xDqVRoLlQaWWtlxiHqDs', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hPyXBD8QRJu3N2P1Wp4A' },
        { url: 'https://cdn.filestackcontent.com/fvv15YVtRHSNcKzSnVss', visible: false, thumbnail: 'https://cdn.filestackcontent.com/2kXxfacjRJSXpRsz1owd' },
        { url: 'https://cdn.filestackcontent.com/3WGuORxeSlgyJ2LHkfXl', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ZrFqPU0RSGuVHhNpbHIP' },
        { url: 'https://cdn.filestackcontent.com/4kW5bGXIS9SyB125WYQh', visible: false, thumbnail: 'https://cdn.filestackcontent.com/WwGsUv2RtCtARi4BOTIQ' },
        { url: 'https://cdn.filestackcontent.com/tjRjrfGYTbyG47Jn7QcG', visible: false, thumbnail: 'https://cdn.filestackcontent.com/7U0x9gf7R5GdjzokMoxG' },
        { url: 'https://cdn.filestackcontent.com/hhzst5LjQi6Xa0QSkavr', visible: false, thumbnail: 'https://cdn.filestackcontent.com/BOs9BXA5Q6W7FRpKzZXk' },
        { url: 'https://cdn.filestackcontent.com/KBi7iM8JQJC7Yij3s7Wp', visible: false, thumbnail: 'https://cdn.filestackcontent.com/k40QVyatQr6kUC4yNbld' },
        { url: 'https://cdn.filestackcontent.com/JiDpU5dSoWfQdh7AviuQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/RoQuwDH1TOWImKZBI7t4' },
        { url: 'https://cdn.filestackcontent.com/T8SdY2jiRnqJtCiAZ9qu', visible: false, thumbnail: 'https://cdn.filestackcontent.com/Fd20YJsR8amNjMyxivKm' },
        { url: 'https://cdn.filestackcontent.com/F1vDUiSEQaumAZ1eZqfe', visible: false, thumbnail: 'https://cdn.filestackcontent.com/LziXRUgBQRW8c6IfOivp' },
        { url: 'https://cdn.filestackcontent.com/Zne4BRaQHq2tBKkRRXl3', visible: false, thumbnail: 'https://cdn.filestackcontent.com/bvGffywSQMGVYhNHPwkN' },
        { url: 'https://cdn.filestackcontent.com/wbi8SjauQTyFpaVMTG4e', visible: false, thumbnail: 'https://cdn.filestackcontent.com/yE4PTFFNQFmsMAyKPQ4M' },
        { url: 'https://cdn.filestackcontent.com/Cg1IOs5zQsy3LkCm6b0r', visible: false, thumbnail: 'https://cdn.filestackcontent.com/BgkvnMJPRnJ6kVc0MYmA' },
        { url: 'https://cdn.filestackcontent.com/qgXwK3dbQGqKDhzHgbAt', visible: false, thumbnail: 'https://cdn.filestackcontent.com/vIcpNS53Q2aTZqiP4UEg' },
        { url: 'https://cdn.filestackcontent.com/PBNv8JpTQ3W7yIij9fAM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/A7LmwwalRYakqjfb415x' },
        { url: 'https://cdn.filestackcontent.com/Lz4M650R9ixA9isReSgW', visible: false, thumbnail: 'https://cdn.filestackcontent.com/zhMz5ORQQep361o1W54I' },
        { url: 'https://cdn.filestackcontent.com/I2oOkCxGTTGjwX04d7Mo', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8L355fsrQ2uV9jKiUoSO' },
        { url: 'https://cdn.filestackcontent.com/okKKHn7yQYGKsHXNDU7G', visible: false, thumbnail: 'https://cdn.filestackcontent.com/fHmx2NjyRqPCKkqOF7Jg' },
        { url: 'https://cdn.filestackcontent.com/4W4YMD3oQsaMRKVMbMsS', visible: false, thumbnail: 'https://cdn.filestackcontent.com/bPpfQQFQMaEUTJ1jOmuA' },
        { url: 'https://cdn.filestackcontent.com/6OiMsTQVRO252f8PzjBs', visible: false, thumbnail: 'https://cdn.filestackcontent.com/NWmIG5EST2QJjdyqdg9l' },
        { url: 'https://cdn.filestackcontent.com/3S1M09aSr6Pnt73M9qIH', visible: false, thumbnail: 'https://cdn.filestackcontent.com/FVqxHNnLREKiSEK80P1P' },
        { url: 'https://cdn.filestackcontent.com/ClFUgIs2T2WiVy6vUdXm', visible: false, thumbnail: 'https://cdn.filestackcontent.com/CcHctJMtQVWPkGqAudBJ' },
        { url: 'https://cdn.filestackcontent.com/u39c64QiRkGay3C00zqI', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ddCuweV0T5OnmIYxY3bS' },
        { url: 'https://cdn.filestackcontent.com/ont63i2T9i6ORqCKImQQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/9gl8wqvRsGZmFdibC00V' },
        { url: 'https://cdn.filestackcontent.com/dg2089cQASvfWm6Qechw', visible: false, thumbnail: 'https://cdn.filestackcontent.com/X9m3l3qQMmgwcVqxawLQ' },
        { url: 'https://cdn.filestackcontent.com/qyJRtswdT4WCgphxnyrg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/aDpC8BIEScOdNNBTGeAF' },
        { url: 'https://cdn.filestackcontent.com/FwG3icX1QFStghU2awIn', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hXrzc1HKQdiXAAu6qpAE' },
        { url: 'https://cdn.filestackcontent.com/OyBC4xujTECzWtIdLRmF', visible: false, thumbnail: 'https://cdn.filestackcontent.com/LdcyIiuMS0OYtuveoRzq' },
        { url: 'https://cdn.filestackcontent.com/e0Jqz9GgTgOu97frrpuZ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/qzpOGDP4SXyxO1YkotZH' },
        { url: 'https://cdn.filestackcontent.com/OexaQ7NoQB2Txb0oE65e', visible: false, thumbnail: 'https://cdn.filestackcontent.com/48vsZLD3RXq4gjgtYo6T' },
        { url: 'https://cdn.filestackcontent.com/8dCVS0a7Qdmy6vZW73gg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/TyP7QYGRPCizcvxhRZ5Q' },
        { url: 'https://cdn.filestackcontent.com/kNcYRBIKRZuU25neNk1Y', visible: false, thumbnail: 'https://cdn.filestackcontent.com/UUSZk4HGSBipwePjArtA' },
        { url: 'https://cdn.filestackcontent.com/klusotNtSaWIubBoDRXk', visible: false, thumbnail: 'https://cdn.filestackcontent.com/qCC3NdCMQt6YWZXuf4Ee' },
        { url: 'https://cdn.filestackcontent.com/CSqPYvwnSrmdVdAsBhGg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/xmJ8lJA1T0q5EBE9ZHcE' },
        { url: 'https://cdn.filestackcontent.com/cBm5mi9eT7mp6JUohKyP', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ol0Exp4nQruUU1WmXZVc' },
        { url: 'https://cdn.filestackcontent.com/8BGQ8qYdQTOOdkcLzxJ7', visible: false, thumbnail: 'https://cdn.filestackcontent.com/QAYxPqCiSgqEfmjFj2a4' },
        { url: 'https://cdn.filestackcontent.com/gpgquQW0QNmhfnyBNQsg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/VCQYLRVeT2ilO0Aqhq8n' },
        { url: 'https://cdn.filestackcontent.com/kIc3zjqdS7qiMcoEDb6u', visible: false, thumbnail: 'https://cdn.filestackcontent.com/wCYP9q2PQb682UpA40KG' },
        { url: 'https://cdn.filestackcontent.com/DUC7X6mWRvSEh3o9ybxR', visible: false, thumbnail: 'https://cdn.filestackcontent.com/eT7XmNOYQHKHhIM4v3tA' },
        { url: 'https://cdn.filestackcontent.com/nxp8alsjQ1SrQD7ouP5u', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ctKPMMyWTNam7Fzymlao' },
        { url: 'https://cdn.filestackcontent.com/IZcHV8E4SaWBEs3S6wns', visible: false, thumbnail: 'https://cdn.filestackcontent.com/sIQmGhWlSFKNRK0q5cwN' }
    ],
    inline_temp: [
        { url: 'https://cdn.filestackcontent.com/aVYR4OyJTv6SzgCfBRKK', visible: true, thumbnail: 'https://cdn.filestackcontent.com/GmkMT6kRQr424tSUx3qw' },
        { url: 'https://cdn.filestackcontent.com/KXNXfEugSHKg6WgMNNdJ', visible: true, thumbnail: 'https://cdn.filestackcontent.com/1oaxPo94StSvNN0VCEJn' },
        { url: 'https://cdn.filestackcontent.com/4iGlsnFwSwivmPE5Odmd', visible: true, thumbnail: 'https://cdn.filestackcontent.com/RRkbh0SZSWKRzWNyVRDs' },
        { url: 'https://cdn.filestackcontent.com/m2rIoC04TjxHlHyOAQWs', visible: true, thumbnail: 'https://cdn.filestackcontent.com/u09EAB7XQR2dSDxVbQGg' },
        { url: 'https://cdn.filestackcontent.com/OgMIjPbMROmCFElqOFWM', visible: true, thumbnail: 'https://cdn.filestackcontent.com/nMFlAJMS1COEraJfN6u1' },
        { url: 'https://cdn.filestackcontent.com/FwxQUiWTO2x2WWMR5W8Q', visible: true, thumbnail: 'https://cdn.filestackcontent.com/VKB8fzXQ6WSgYyXcpD4Q' },
        { url: 'https://cdn.filestackcontent.com/LzggJhdTH2GnVAEI4Rwg', visible: true, thumbnail: 'https://cdn.filestackcontent.com/oP6dJPW2TcOdF0qy05DH' },
        { url: 'https://cdn.filestackcontent.com/jc2sCaDvQAaVE96RHr7W', visible: true, thumbnail: 'https://cdn.filestackcontent.com/6RVZlTK0QoGvtMsMp8T2' },
        { url: 'https://cdn.filestackcontent.com/PwrD5l9CSFCwJfE8xg7H', visible: true, thumbnail: 'https://cdn.filestackcontent.com/FCIBhdkIRzKy4a5yQsWf' },
        { url: 'https://cdn.filestackcontent.com/LB4WDLORq1LSmsQ7YclQ', visible: true, thumbnail: 'https://cdn.filestackcontent.com/1e8QsNvTxi11HLeSbxiV' },
        { url: 'https://cdn.filestackcontent.com/qizw8E6BSwWmu9tD1ZLW', visible: true, thumbnail: 'https://cdn.filestackcontent.com/wXDe3GSQjuXVvo4xXwG2' },
        { url: 'https://cdn.filestackcontent.com/WTilpU2iQFubT0bEQa8r', visible: true, thumbnail: 'https://cdn.filestackcontent.com/zL17NB7JTxsxpfcxZYbw' },
        { url: 'https://cdn.filestackcontent.com/Ew8kRa21THa2NgtipwsK', visible: false, thumbnail: 'https://cdn.filestackcontent.com/VUcBmDFSqpDO5tQjQB6w' },
        { url: 'https://cdn.filestackcontent.com/g07V3qF3Q1S6H2o8NatM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/sRfbbZvTi2Jx1lhaKokG' },
        { url: 'https://cdn.filestackcontent.com/GMmRIW5RRHaRNNVcLSSO', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8xt4zamZT9uWlMkqt6OK' },
        { url: 'https://cdn.filestackcontent.com/EcdnMP0Rqer6WSCcnwFA', visible: false, thumbnail: 'https://cdn.filestackcontent.com/FBnS3wGRTPSH7YJikmQJ' },
        { url: 'https://cdn.filestackcontent.com/1TvMySyJRQqiL9vBXtyE', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ebUvHmvoSyCdw8O9P8zs' },
        { url: 'https://cdn.filestackcontent.com/dLzixFlIR3uPYWD4qOmx', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8JlUH2zdSmuB8g2h8xuO' },
        { url: 'https://cdn.filestackcontent.com/xl23om5bQWuhQKasXY2g', visible: false, thumbnail: 'https://cdn.filestackcontent.com/tyT4hZwYS5iwZ5rCBYVg' },
        { url: 'https://cdn.filestackcontent.com/RoNeW8HSEyhWEQ26yOdQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/662eKadURFu83Z0nThRh' },
        { url: 'https://cdn.filestackcontent.com/ZkScOEEsSNGgkXa1xWdM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hUj1G4nYSvO3dacjzquU' },
        { url: 'https://cdn.filestackcontent.com/jo4DEgZqQAitruVsSLZE', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ZeE4nW05TeqpsUi0CCNx' },
        { url: 'https://cdn.filestackcontent.com/M3kTEshSiMxkncqXQRwQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/xGLNfMoQ9aBfEQ1bgmOS' },
        { url: 'https://cdn.filestackcontent.com/O7tZmC1QWi7Bds3sd5Mt', visible: false, thumbnail: 'https://cdn.filestackcontent.com/KIqZ5JAIRPGgXAaTOYBn' },
        { url: 'https://cdn.filestackcontent.com/cnETDcugTjaPKnPRJbsy', visible: false, thumbnail: 'https://cdn.filestackcontent.com/dwbu0BoOQH2GTyhUkIEv' },
        { url: 'https://cdn.filestackcontent.com/mYNUj1XzQdivvRaGOglb', visible: false, thumbnail: 'https://cdn.filestackcontent.com/88BbexkSepUpSUISUFvw' },
        { url: 'https://cdn.filestackcontent.com/SwaCGayBRYm5aHgItnpD', visible: false, thumbnail: 'https://cdn.filestackcontent.com/IVHpA3XBTKu19FWpuVWA' },
        { url: 'https://cdn.filestackcontent.com/lBJYG1fxTuuEkhuCGha7', visible: false, thumbnail: 'https://cdn.filestackcontent.com/PCMnubtSz6ESGSOk2dc8' },
        { url: 'https://cdn.filestackcontent.com/qvtMoRiQHS5eFyJigvpm', visible: false, thumbnail: 'https://cdn.filestackcontent.com/H1CLTpFTSXallHWwFOtW' },
        { url: 'https://cdn.filestackcontent.com/5DMiBlQjuGxCAwe4uDpA', visible: false, thumbnail: 'https://cdn.filestackcontent.com/JuVA1A9Qoacp0MkSFEED' },
        { url: 'https://cdn.filestackcontent.com/xDqVRoLlQaWWtlxiHqDs', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hPyXBD8QRJu3N2P1Wp4A' },
        { url: 'https://cdn.filestackcontent.com/fvv15YVtRHSNcKzSnVss', visible: false, thumbnail: 'https://cdn.filestackcontent.com/2kXxfacjRJSXpRsz1owd' },
        { url: 'https://cdn.filestackcontent.com/3WGuORxeSlgyJ2LHkfXl', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ZrFqPU0RSGuVHhNpbHIP' },
        { url: 'https://cdn.filestackcontent.com/4kW5bGXIS9SyB125WYQh', visible: false, thumbnail: 'https://cdn.filestackcontent.com/WwGsUv2RtCtARi4BOTIQ' },
        { url: 'https://cdn.filestackcontent.com/tjRjrfGYTbyG47Jn7QcG', visible: false, thumbnail: 'https://cdn.filestackcontent.com/7U0x9gf7R5GdjzokMoxG' },
        { url: 'https://cdn.filestackcontent.com/hhzst5LjQi6Xa0QSkavr', visible: false, thumbnail: 'https://cdn.filestackcontent.com/BOs9BXA5Q6W7FRpKzZXk' },
        { url: 'https://cdn.filestackcontent.com/KBi7iM8JQJC7Yij3s7Wp', visible: false, thumbnail: 'https://cdn.filestackcontent.com/k40QVyatQr6kUC4yNbld' },
        { url: 'https://cdn.filestackcontent.com/JiDpU5dSoWfQdh7AviuQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/RoQuwDH1TOWImKZBI7t4' },
        { url: 'https://cdn.filestackcontent.com/T8SdY2jiRnqJtCiAZ9qu', visible: false, thumbnail: 'https://cdn.filestackcontent.com/Fd20YJsR8amNjMyxivKm' },
        { url: 'https://cdn.filestackcontent.com/F1vDUiSEQaumAZ1eZqfe', visible: false, thumbnail: 'https://cdn.filestackcontent.com/LziXRUgBQRW8c6IfOivp' },
        { url: 'https://cdn.filestackcontent.com/Zne4BRaQHq2tBKkRRXl3', visible: false, thumbnail: 'https://cdn.filestackcontent.com/bvGffywSQMGVYhNHPwkN' },
        { url: 'https://cdn.filestackcontent.com/wbi8SjauQTyFpaVMTG4e', visible: false, thumbnail: 'https://cdn.filestackcontent.com/yE4PTFFNQFmsMAyKPQ4M' },
        { url: 'https://cdn.filestackcontent.com/Cg1IOs5zQsy3LkCm6b0r', visible: false, thumbnail: 'https://cdn.filestackcontent.com/BgkvnMJPRnJ6kVc0MYmA' },
        { url: 'https://cdn.filestackcontent.com/qgXwK3dbQGqKDhzHgbAt', visible: false, thumbnail: 'https://cdn.filestackcontent.com/vIcpNS53Q2aTZqiP4UEg' },
        { url: 'https://cdn.filestackcontent.com/PBNv8JpTQ3W7yIij9fAM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/A7LmwwalRYakqjfb415x' },
        { url: 'https://cdn.filestackcontent.com/Lz4M650R9ixA9isReSgW', visible: false, thumbnail: 'https://cdn.filestackcontent.com/zhMz5ORQQep361o1W54I' },
        { url: 'https://cdn.filestackcontent.com/I2oOkCxGTTGjwX04d7Mo', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8L355fsrQ2uV9jKiUoSO' },
        { url: 'https://cdn.filestackcontent.com/okKKHn7yQYGKsHXNDU7G', visible: false, thumbnail: 'https://cdn.filestackcontent.com/fHmx2NjyRqPCKkqOF7Jg' },
        { url: 'https://cdn.filestackcontent.com/4W4YMD3oQsaMRKVMbMsS', visible: false, thumbnail: 'https://cdn.filestackcontent.com/bPpfQQFQMaEUTJ1jOmuA' },
        { url: 'https://cdn.filestackcontent.com/6OiMsTQVRO252f8PzjBs', visible: false, thumbnail: 'https://cdn.filestackcontent.com/NWmIG5EST2QJjdyqdg9l' },
        { url: 'https://cdn.filestackcontent.com/3S1M09aSr6Pnt73M9qIH', visible: false, thumbnail: 'https://cdn.filestackcontent.com/FVqxHNnLREKiSEK80P1P' },
        { url: 'https://cdn.filestackcontent.com/ClFUgIs2T2WiVy6vUdXm', visible: false, thumbnail: 'https://cdn.filestackcontent.com/CcHctJMtQVWPkGqAudBJ' },
        { url: 'https://cdn.filestackcontent.com/u39c64QiRkGay3C00zqI', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ddCuweV0T5OnmIYxY3bS' },
        { url: 'https://cdn.filestackcontent.com/ont63i2T9i6ORqCKImQQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/9gl8wqvRsGZmFdibC00V' },
        { url: 'https://cdn.filestackcontent.com/dg2089cQASvfWm6Qechw', visible: false, thumbnail: 'https://cdn.filestackcontent.com/X9m3l3qQMmgwcVqxawLQ' },
        { url: 'https://cdn.filestackcontent.com/qyJRtswdT4WCgphxnyrg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/aDpC8BIEScOdNNBTGeAF' },
        { url: 'https://cdn.filestackcontent.com/FwG3icX1QFStghU2awIn', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hXrzc1HKQdiXAAu6qpAE' },
        { url: 'https://cdn.filestackcontent.com/OyBC4xujTECzWtIdLRmF', visible: false, thumbnail: 'https://cdn.filestackcontent.com/LdcyIiuMS0OYtuveoRzq' },
        { url: 'https://cdn.filestackcontent.com/e0Jqz9GgTgOu97frrpuZ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/qzpOGDP4SXyxO1YkotZH' },
        { url: 'https://cdn.filestackcontent.com/OexaQ7NoQB2Txb0oE65e', visible: false, thumbnail: 'https://cdn.filestackcontent.com/48vsZLD3RXq4gjgtYo6T' },
        { url: 'https://cdn.filestackcontent.com/8dCVS0a7Qdmy6vZW73gg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/TyP7QYGRPCizcvxhRZ5Q' },
        { url: 'https://cdn.filestackcontent.com/kNcYRBIKRZuU25neNk1Y', visible: false, thumbnail: 'https://cdn.filestackcontent.com/UUSZk4HGSBipwePjArtA' },
        { url: 'https://cdn.filestackcontent.com/klusotNtSaWIubBoDRXk', visible: false, thumbnail: 'https://cdn.filestackcontent.com/qCC3NdCMQt6YWZXuf4Ee' },
        { url: 'https://cdn.filestackcontent.com/CSqPYvwnSrmdVdAsBhGg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/xmJ8lJA1T0q5EBE9ZHcE' },
        { url: 'https://cdn.filestackcontent.com/cBm5mi9eT7mp6JUohKyP', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ol0Exp4nQruUU1WmXZVc' },
        { url: 'https://cdn.filestackcontent.com/8BGQ8qYdQTOOdkcLzxJ7', visible: false, thumbnail: 'https://cdn.filestackcontent.com/QAYxPqCiSgqEfmjFj2a4' },
        { url: 'https://cdn.filestackcontent.com/gpgquQW0QNmhfnyBNQsg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/VCQYLRVeT2ilO0Aqhq8n' },
        { url: 'https://cdn.filestackcontent.com/kIc3zjqdS7qiMcoEDb6u', visible: false, thumbnail: 'https://cdn.filestackcontent.com/wCYP9q2PQb682UpA40KG' },
        { url: 'https://cdn.filestackcontent.com/DUC7X6mWRvSEh3o9ybxR', visible: false, thumbnail: 'https://cdn.filestackcontent.com/eT7XmNOYQHKHhIM4v3tA' },
        { url: 'https://cdn.filestackcontent.com/nxp8alsjQ1SrQD7ouP5u', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ctKPMMyWTNam7Fzymlao' },
        { url: 'https://cdn.filestackcontent.com/IZcHV8E4SaWBEs3S6wns', visible: false, thumbnail: 'https://cdn.filestackcontent.com/sIQmGhWlSFKNRK0q5cwN' }
    ],
    one_page_card: [
        { url: 'https://cdn.filestackcontent.com/aVYR4OyJTv6SzgCfBRKK', visible: true, thumbnail: 'https://cdn.filestackcontent.com/GmkMT6kRQr424tSUx3qw' },
        { url: 'https://cdn.filestackcontent.com/KXNXfEugSHKg6WgMNNdJ', visible: true, thumbnail: 'https://cdn.filestackcontent.com/1oaxPo94StSvNN0VCEJn' },
        { url: 'https://cdn.filestackcontent.com/4iGlsnFwSwivmPE5Odmd', visible: true, thumbnail: 'https://cdn.filestackcontent.com/RRkbh0SZSWKRzWNyVRDs' },
        { url: 'https://cdn.filestackcontent.com/m2rIoC04TjxHlHyOAQWs', visible: true, thumbnail: 'https://cdn.filestackcontent.com/u09EAB7XQR2dSDxVbQGg' },
        { url: 'https://cdn.filestackcontent.com/OgMIjPbMROmCFElqOFWM', visible: true, thumbnail: 'https://cdn.filestackcontent.com/nMFlAJMS1COEraJfN6u1' },
        { url: 'https://cdn.filestackcontent.com/FwxQUiWTO2x2WWMR5W8Q', visible: true, thumbnail: 'https://cdn.filestackcontent.com/VKB8fzXQ6WSgYyXcpD4Q' },
        { url: 'https://cdn.filestackcontent.com/LzggJhdTH2GnVAEI4Rwg', visible: true, thumbnail: 'https://cdn.filestackcontent.com/oP6dJPW2TcOdF0qy05DH' },
        { url: 'https://cdn.filestackcontent.com/jc2sCaDvQAaVE96RHr7W', visible: true, thumbnail: 'https://cdn.filestackcontent.com/6RVZlTK0QoGvtMsMp8T2' },
        { url: 'https://cdn.filestackcontent.com/PwrD5l9CSFCwJfE8xg7H', visible: true, thumbnail: 'https://cdn.filestackcontent.com/FCIBhdkIRzKy4a5yQsWf' },
        { url: 'https://cdn.filestackcontent.com/LB4WDLORq1LSmsQ7YclQ', visible: true, thumbnail: 'https://cdn.filestackcontent.com/1e8QsNvTxi11HLeSbxiV' },
        { url: 'https://cdn.filestackcontent.com/qizw8E6BSwWmu9tD1ZLW', visible: true, thumbnail: 'https://cdn.filestackcontent.com/wXDe3GSQjuXVvo4xXwG2' },
        { url: 'https://cdn.filestackcontent.com/WTilpU2iQFubT0bEQa8r', visible: true, thumbnail: 'https://cdn.filestackcontent.com/zL17NB7JTxsxpfcxZYbw' },
        { url: 'https://cdn.filestackcontent.com/Ew8kRa21THa2NgtipwsK', visible: false, thumbnail: 'https://cdn.filestackcontent.com/VUcBmDFSqpDO5tQjQB6w' },
        { url: 'https://cdn.filestackcontent.com/g07V3qF3Q1S6H2o8NatM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/sRfbbZvTi2Jx1lhaKokG' },
        { url: 'https://cdn.filestackcontent.com/GMmRIW5RRHaRNNVcLSSO', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8xt4zamZT9uWlMkqt6OK' },
        { url: 'https://cdn.filestackcontent.com/EcdnMP0Rqer6WSCcnwFA', visible: false, thumbnail: 'https://cdn.filestackcontent.com/FBnS3wGRTPSH7YJikmQJ' },
        { url: 'https://cdn.filestackcontent.com/1TvMySyJRQqiL9vBXtyE', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ebUvHmvoSyCdw8O9P8zs' },
        { url: 'https://cdn.filestackcontent.com/dLzixFlIR3uPYWD4qOmx', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8JlUH2zdSmuB8g2h8xuO' },
        { url: 'https://cdn.filestackcontent.com/xl23om5bQWuhQKasXY2g', visible: false, thumbnail: 'https://cdn.filestackcontent.com/tyT4hZwYS5iwZ5rCBYVg' },
        { url: 'https://cdn.filestackcontent.com/RoNeW8HSEyhWEQ26yOdQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/662eKadURFu83Z0nThRh' },
        { url: 'https://cdn.filestackcontent.com/ZkScOEEsSNGgkXa1xWdM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hUj1G4nYSvO3dacjzquU' },
        { url: 'https://cdn.filestackcontent.com/jo4DEgZqQAitruVsSLZE', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ZeE4nW05TeqpsUi0CCNx' },
        { url: 'https://cdn.filestackcontent.com/M3kTEshSiMxkncqXQRwQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/xGLNfMoQ9aBfEQ1bgmOS' },
        { url: 'https://cdn.filestackcontent.com/O7tZmC1QWi7Bds3sd5Mt', visible: false, thumbnail: 'https://cdn.filestackcontent.com/KIqZ5JAIRPGgXAaTOYBn' },
        { url: 'https://cdn.filestackcontent.com/cnETDcugTjaPKnPRJbsy', visible: false, thumbnail: 'https://cdn.filestackcontent.com/dwbu0BoOQH2GTyhUkIEv' },
        { url: 'https://cdn.filestackcontent.com/mYNUj1XzQdivvRaGOglb', visible: false, thumbnail: 'https://cdn.filestackcontent.com/88BbexkSepUpSUISUFvw' },
        { url: 'https://cdn.filestackcontent.com/SwaCGayBRYm5aHgItnpD', visible: false, thumbnail: 'https://cdn.filestackcontent.com/IVHpA3XBTKu19FWpuVWA' },
        { url: 'https://cdn.filestackcontent.com/lBJYG1fxTuuEkhuCGha7', visible: false, thumbnail: 'https://cdn.filestackcontent.com/PCMnubtSz6ESGSOk2dc8' },
        { url: 'https://cdn.filestackcontent.com/qvtMoRiQHS5eFyJigvpm', visible: false, thumbnail: 'https://cdn.filestackcontent.com/H1CLTpFTSXallHWwFOtW' },
        { url: 'https://cdn.filestackcontent.com/5DMiBlQjuGxCAwe4uDpA', visible: false, thumbnail: 'https://cdn.filestackcontent.com/JuVA1A9Qoacp0MkSFEED' },
        { url: 'https://cdn.filestackcontent.com/xDqVRoLlQaWWtlxiHqDs', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hPyXBD8QRJu3N2P1Wp4A' },
        { url: 'https://cdn.filestackcontent.com/fvv15YVtRHSNcKzSnVss', visible: false, thumbnail: 'https://cdn.filestackcontent.com/2kXxfacjRJSXpRsz1owd' },
        { url: 'https://cdn.filestackcontent.com/3WGuORxeSlgyJ2LHkfXl', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ZrFqPU0RSGuVHhNpbHIP' },
        { url: 'https://cdn.filestackcontent.com/4kW5bGXIS9SyB125WYQh', visible: false, thumbnail: 'https://cdn.filestackcontent.com/WwGsUv2RtCtARi4BOTIQ' },
        { url: 'https://cdn.filestackcontent.com/tjRjrfGYTbyG47Jn7QcG', visible: false, thumbnail: 'https://cdn.filestackcontent.com/7U0x9gf7R5GdjzokMoxG' },
        { url: 'https://cdn.filestackcontent.com/hhzst5LjQi6Xa0QSkavr', visible: false, thumbnail: 'https://cdn.filestackcontent.com/BOs9BXA5Q6W7FRpKzZXk' },
        { url: 'https://cdn.filestackcontent.com/KBi7iM8JQJC7Yij3s7Wp', visible: false, thumbnail: 'https://cdn.filestackcontent.com/k40QVyatQr6kUC4yNbld' },
        { url: 'https://cdn.filestackcontent.com/JiDpU5dSoWfQdh7AviuQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/RoQuwDH1TOWImKZBI7t4' },
        { url: 'https://cdn.filestackcontent.com/T8SdY2jiRnqJtCiAZ9qu', visible: false, thumbnail: 'https://cdn.filestackcontent.com/Fd20YJsR8amNjMyxivKm' },
        { url: 'https://cdn.filestackcontent.com/F1vDUiSEQaumAZ1eZqfe', visible: false, thumbnail: 'https://cdn.filestackcontent.com/LziXRUgBQRW8c6IfOivp' },
        { url: 'https://cdn.filestackcontent.com/Zne4BRaQHq2tBKkRRXl3', visible: false, thumbnail: 'https://cdn.filestackcontent.com/bvGffywSQMGVYhNHPwkN' },
        { url: 'https://cdn.filestackcontent.com/wbi8SjauQTyFpaVMTG4e', visible: false, thumbnail: 'https://cdn.filestackcontent.com/yE4PTFFNQFmsMAyKPQ4M' },
        { url: 'https://cdn.filestackcontent.com/Cg1IOs5zQsy3LkCm6b0r', visible: false, thumbnail: 'https://cdn.filestackcontent.com/BgkvnMJPRnJ6kVc0MYmA' },
        { url: 'https://cdn.filestackcontent.com/qgXwK3dbQGqKDhzHgbAt', visible: false, thumbnail: 'https://cdn.filestackcontent.com/vIcpNS53Q2aTZqiP4UEg' },
        { url: 'https://cdn.filestackcontent.com/PBNv8JpTQ3W7yIij9fAM', visible: false, thumbnail: 'https://cdn.filestackcontent.com/A7LmwwalRYakqjfb415x' },
        { url: 'https://cdn.filestackcontent.com/Lz4M650R9ixA9isReSgW', visible: false, thumbnail: 'https://cdn.filestackcontent.com/zhMz5ORQQep361o1W54I' },
        { url: 'https://cdn.filestackcontent.com/I2oOkCxGTTGjwX04d7Mo', visible: false, thumbnail: 'https://cdn.filestackcontent.com/8L355fsrQ2uV9jKiUoSO' },
        { url: 'https://cdn.filestackcontent.com/okKKHn7yQYGKsHXNDU7G', visible: false, thumbnail: 'https://cdn.filestackcontent.com/fHmx2NjyRqPCKkqOF7Jg' },
        { url: 'https://cdn.filestackcontent.com/4W4YMD3oQsaMRKVMbMsS', visible: false, thumbnail: 'https://cdn.filestackcontent.com/bPpfQQFQMaEUTJ1jOmuA' },
        { url: 'https://cdn.filestackcontent.com/6OiMsTQVRO252f8PzjBs', visible: false, thumbnail: 'https://cdn.filestackcontent.com/NWmIG5EST2QJjdyqdg9l' },
        { url: 'https://cdn.filestackcontent.com/3S1M09aSr6Pnt73M9qIH', visible: false, thumbnail: 'https://cdn.filestackcontent.com/FVqxHNnLREKiSEK80P1P' },
        { url: 'https://cdn.filestackcontent.com/ClFUgIs2T2WiVy6vUdXm', visible: false, thumbnail: 'https://cdn.filestackcontent.com/CcHctJMtQVWPkGqAudBJ' },
        { url: 'https://cdn.filestackcontent.com/u39c64QiRkGay3C00zqI', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ddCuweV0T5OnmIYxY3bS' },
        { url: 'https://cdn.filestackcontent.com/ont63i2T9i6ORqCKImQQ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/9gl8wqvRsGZmFdibC00V' },
        { url: 'https://cdn.filestackcontent.com/dg2089cQASvfWm6Qechw', visible: false, thumbnail: 'https://cdn.filestackcontent.com/X9m3l3qQMmgwcVqxawLQ' },
        { url: 'https://cdn.filestackcontent.com/qyJRtswdT4WCgphxnyrg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/aDpC8BIEScOdNNBTGeAF' },
        { url: 'https://cdn.filestackcontent.com/FwG3icX1QFStghU2awIn', visible: false, thumbnail: 'https://cdn.filestackcontent.com/hXrzc1HKQdiXAAu6qpAE' },
        { url: 'https://cdn.filestackcontent.com/OyBC4xujTECzWtIdLRmF', visible: false, thumbnail: 'https://cdn.filestackcontent.com/LdcyIiuMS0OYtuveoRzq' },
        { url: 'https://cdn.filestackcontent.com/e0Jqz9GgTgOu97frrpuZ', visible: false, thumbnail: 'https://cdn.filestackcontent.com/qzpOGDP4SXyxO1YkotZH' },
        { url: 'https://cdn.filestackcontent.com/OexaQ7NoQB2Txb0oE65e', visible: false, thumbnail: 'https://cdn.filestackcontent.com/48vsZLD3RXq4gjgtYo6T' },
        { url: 'https://cdn.filestackcontent.com/8dCVS0a7Qdmy6vZW73gg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/TyP7QYGRPCizcvxhRZ5Q' },
        { url: 'https://cdn.filestackcontent.com/kNcYRBIKRZuU25neNk1Y', visible: false, thumbnail: 'https://cdn.filestackcontent.com/UUSZk4HGSBipwePjArtA' },
        { url: 'https://cdn.filestackcontent.com/klusotNtSaWIubBoDRXk', visible: false, thumbnail: 'https://cdn.filestackcontent.com/qCC3NdCMQt6YWZXuf4Ee' },
        { url: 'https://cdn.filestackcontent.com/CSqPYvwnSrmdVdAsBhGg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/xmJ8lJA1T0q5EBE9ZHcE' },
        { url: 'https://cdn.filestackcontent.com/cBm5mi9eT7mp6JUohKyP', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ol0Exp4nQruUU1WmXZVc' },
        { url: 'https://cdn.filestackcontent.com/8BGQ8qYdQTOOdkcLzxJ7', visible: false, thumbnail: 'https://cdn.filestackcontent.com/QAYxPqCiSgqEfmjFj2a4' },
        { url: 'https://cdn.filestackcontent.com/gpgquQW0QNmhfnyBNQsg', visible: false, thumbnail: 'https://cdn.filestackcontent.com/VCQYLRVeT2ilO0Aqhq8n' },
        { url: 'https://cdn.filestackcontent.com/kIc3zjqdS7qiMcoEDb6u', visible: false, thumbnail: 'https://cdn.filestackcontent.com/wCYP9q2PQb682UpA40KG' },
        { url: 'https://cdn.filestackcontent.com/DUC7X6mWRvSEh3o9ybxR', visible: false, thumbnail: 'https://cdn.filestackcontent.com/eT7XmNOYQHKHhIM4v3tA' },
        { url: 'https://cdn.filestackcontent.com/nxp8alsjQ1SrQD7ouP5u', visible: false, thumbnail: 'https://cdn.filestackcontent.com/ctKPMMyWTNam7Fzymlao' },
        { url: 'https://cdn.filestackcontent.com/IZcHV8E4SaWBEs3S6wns', visible: false, thumbnail: 'https://cdn.filestackcontent.com/sIQmGhWlSFKNRK0q5cwN' }
    ]
};
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/templateImages.store.js.map

/***/ }),

/***/ 943:
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n    font-family: montserratregular;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(../../../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), url(../../../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"), url(../../../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), url(../../../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\r\n}\r\n\r\n@font-face {\r\n    font-family: montserratbold;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(../../../../../assets/fonts/montserrat-bold-webfont.eot) format(\"embedded-opentype\"), url(../../../../../assets/fonts/montserrat-bold-webfont.woff2) format(\"woff2\"), url(../../../../../assets/fonts/montserrat-bold-webfont.woff) format(\"woff\"), url(../../../../../assets/fonts/montserrat-bold-webfont.ttf) format(\"truetype\")\r\n}\r\n\r\n@font-face {\r\n    font-family: montserratlight;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(../../../../../assets/fonts/montserrat-light-webfont.eot) format(\"embedded-opentype\"), url(../../../../../assets/fonts/montserrat-light-webfont.woff2) format(\"woff2\"), url(../../../../../assets/fonts/montserrat-light-webfont.woff) format(\"woff\"), url(../../../../../assets/fonts/montserrat-light-webfont.ttf) format(\"truetype\")\r\n}\r\n\r\nul,\r\nli {\r\n    list-style: none;\r\n}\r\n\r\na:focus,\r\nimg:focus,\r\nbutton:focus,\r\ninput:focus,\r\ntextarea:focus,\r\nselect:focus {\r\n    outline: none;\r\n    text-decoration: none;\r\n}\r\n\r\nlabel {\r\n    margin-bottom: 0;\r\n    font-weight: normal;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    height: auto;\r\n}\r\n\r\n.no-padding {\r\n    padding: 0;\r\n}\r\n\r\n/* Sweep To Right */\r\n.hvr-sweep-to-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-sweep-to-right:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: 0 50%;\r\n  transform-origin: 0 50%;\r\n  -webkit-transition-property: transform;\r\n  -webkit-transition-property: -webkit-transform;\r\n  transition-property: -webkit-transform;\r\n  transition-property: transform;\r\n  transition-property: transform, -webkit-transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {\r\n  color: white;\r\n}\r\n.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\r\n}\r\n.path {\r\n    stroke-dasharray: 1000;\r\n    stroke-dashoffset: 1000;\r\n    -webkit-animation: draw 2s 0s linear forwards;\r\n            animation: draw 2s 0s linear forwards;\r\n}\r\n\r\n@-webkit-keyframes draw {\r\n    from {\r\n        stroke-dashoffset: -1000;\r\n    }\r\n    to {\r\n        stroke-dashoffset: 0;\r\n    }\r\n}\r\n\r\n@keyframes draw {\r\n    from {\r\n        stroke-dashoffset: -1000;\r\n    }\r\n    to {\r\n        stroke-dashoffset: 0;\r\n    }\r\n}\r\n\r\nbutton {\r\n    height: initial;\r\n}\r\n\r\n.modal-dialog {\r\n    margin: 90px auto;\r\n}\r\n\r\n.editor-modal .modal-header {\r\n    padding: 11px 15px;\r\n    background: #FC545B;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.editor-modal .modal-title {\r\n    margin: 0;\r\n    line-height: 1.42857143;\r\n    font-size: 13px;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n}\r\n\r\n.editor-modal button.close {\r\n    color: #fff;\r\n    opacity: 1;\r\n    font-weight: lighter;\r\n    position: relative;\r\n    top: -3px;\r\n    left: 8px;\r\n}\r\n\r\n.editor-modal .modal-footer {\r\n    padding: 15px;\r\n    text-align: right;\r\n    border-top: none;\r\n}\r\n\r\n.editor-modal .bootbox-body {\r\n    color: #666666;\r\n    font-size: 13px;\r\n}\r\n\r\n.editor-modal .btn.btn-basic {\r\n    color: #fb545b;\r\n    border: 1px solid #fb545b;\r\n    font-size: 12px;\r\n    padding: 5px 50px;\r\n    -webkit-transition: all 0.5s ease;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.editor-sidebar.sidebar {\r\n    position: fixed;\r\n    top: 60px;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    padding: 0;\r\n    background-color: #fff;\r\n    border-right: 1px solid #dae2e6;\r\n    width: 235px;\r\n}\r\n\r\n.editor-template-tabs {\r\n    margin-left: 235px;\r\n    top: 97px;\r\n    float: left;\r\n    background: #f6f8f9;\r\n    position: relative;\r\n    width: calc(100% - 235px);\r\n    font-family: montserratregular;\r\n}\r\n\r\n.editor-template-tabs.nomargin {\r\n    margin-left: 0;\r\n}\r\n\r\n.editor-template-tabs.minH {\r\n    min-height: 100vh;\r\n}\r\n\r\nconfig {\r\n    min-height: 95vh;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n#build {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.editor-navheader .navbar-brand {\r\n    padding: 10px 32px;\r\n    width: 232px;\r\n}\r\n\r\n.template-section {\r\n    position: fixed;\r\n    float: left;\r\n    background: url('/assets/images/builder/background.png');\r\n    top: 97px;\r\n    height: calc(100% - 95px);\r\n}\r\n\r\n.panel-group .panel + .panel {\r\n    margin-top: 0;\r\n}\r\n\r\n.panel-title i.main-ic {\r\n    font-size: 16px;\r\n    vertical-align: text-bottom;\r\n    margin-right: 4px;\r\n    color: #bec5c9;\r\n}\r\n\r\n\r\n/*top bar*/\r\n\r\ninput.ed-projectname {\r\n    border: none;\r\n    border-left: 1px solid #dae2e6;\r\n    color: #8e989f;\r\n    float: left;\r\n    font-size: 16px;\r\n    margin-top: 13px;\r\n    padding-bottom: 4px;\r\n    padding-top: 5px;\r\n    padding-left: 20px;\r\n    width: 36%;\r\n    font-family: \"montserratlight\";\r\n    margin-bottom: 15px;\r\n}\r\n\r\ninput.ed-projectname:hover {\r\n    color: #fb545b;\r\n}\r\n\r\n.ed-projectname {\r\n    border-left: 1px solid #dae2e6;\r\n    color: #fb545b;\r\n    float: left;\r\n    font-size: 18px;\r\n    margin-top: 13px;\r\n    padding-bottom: 5px;\r\n    padding-top: 4px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.navbar-default {\r\n    background: #fff;\r\n    border: none;\r\n    padding-bottom: 0;\r\n    margin: 0;\r\n    border-bottom: 1px solid #dae2e6;\r\n    z-index: 1040;\r\n}\r\n\r\n.navbar-rightside {\r\n    float: right;\r\n    margin-top: 13px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.navbar-rightside .name-dropdown-wrapper.btn-group {\r\n    width: auto;\r\n}\r\n\r\n.navbar-rightside .name-dropdown-wrapper .dropdown-menu {\r\n    top: 34px;\r\n    position: absolute;\r\n}\r\n\r\n.navbar-rightside .name-dropdown-wrapper.btn-group {\r\n    border-right: 1px solid #dae2e6;\r\n    padding-right: 13px;\r\n}\r\n\r\n.navbar-rightside .btn-basic {\r\n    margin-right: 6px;\r\n}\r\n\r\n.name-dropdown-wrapper.btn-group {\r\n    margin-top: 10px;\r\n}\r\n\r\n.navbar-leftside label {\r\n    font-size: 13px;\r\n    color: #8e989f;\r\n    font-weight: normal;\r\n    cursor: pointer;\r\n    font-family: 'montserratregular';\r\n}\r\n\r\n.navbar-leftside label i:last-child {\r\n    margin-left: 10px;\r\n    color: #bec5c9;\r\n    line-height: 30px;\r\n    margin: 0 4px;\r\n}\r\n\r\n.navbar-leftside .help-tip:hover label i:last-child {\r\n    color: #fb545b;\r\n}\r\n\r\n.blue-text {\r\n    color: #fb545b;\r\n}\r\n\r\n.navbar-leftside label i {\r\n    font-size: 18px;\r\n    position: relative;\r\n    top: 1px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.navbar-leftside {\r\n    border-left: 1px solid #dae2e6;\r\n    color: #fb545b;\r\n    font-size: 18px;\r\n    margin-left: 5px;\r\n    padding-bottom: 0;\r\n    padding-left: 12px;\r\n    padding-top: 0;\r\n}\r\n\r\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n    margin-top: 10px;\r\n}\r\n\r\n.navbar .btn.btn-basic {\r\n    border: none;\r\n    background: #fb545b;\r\n    color: #fff;\r\n    -webkit-transition: all 0.5s ease;\r\n    transition: all 0.5s ease;\r\n    line-height: 1.5;\r\n    border-radius: 0;\r\n}\r\n\r\n.navbar .btn.btn-basic:not(.btn-menu):hover {\r\n    background: #fdb6b9;\r\n    color: #fb545b;\r\n    border-color: #fdb6b9;\r\n}\r\n\r\n.navbar .btn.btn-basic.btn-menu {\r\n    border: 1px solid #dae2e6;\r\n    height: 26px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    background: #fff;\r\n}\r\n\r\n.btn:hover,\r\n.btn:focus,\r\n.btn.focus {\r\n    color: inherit;\r\n    outline: none !important;\r\n    background: none;\r\n    box-shadow: none;\r\n}\r\n\r\n.btn.btn-basic {\r\n    color: #fb545b;\r\n    border: 1px solid #dae2e6;\r\n    font-size: 13px;\r\n    margin-top: 0;\r\n    padding: 5px 10px;\r\n}\r\n.disable-btn {\r\n    border: 1px solid #dae2e6;\r\n    color: #bec5c9;\r\n}\r\n\r\n.disable-btn:hover {\r\n    border: 1px solid #dae2e6;\r\n    color: #bec5c9;\r\n}\r\n\r\n.navbar-leftside .blue-text {\r\n    color: #fb545b !important;\r\n}\r\n\r\n.sidebar-layout {\r\n    height: 100vh;\r\n    border: 1px solid #dae2e6;\r\n    border-right: 0;\r\n    background: #f6f8f9;\r\n    z-index: 99;\r\n}\r\n\r\n.sidebar-offcanvas {\r\n    font-family: montserratregular;\r\n    padding-right: 0;\r\n    width: 300px;\r\n    top: 60px;\r\n    z-index: 9;\r\n    padding-left: 0;\r\n    right: 0;\r\n}\r\n\r\n.sidebar-offcanvas-right {\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 100;\r\n    width: 40px;\r\n    background: #fbfdfc;\r\n    right: 300px;\r\n    bottom: 0;\r\n    border-left: 1px solid #dae2e6;\r\n}\r\n\r\n.sidebar-offcanvas-right ul {\r\n    margin: 0;\r\n    text-align: center;\r\n    padding: 0;\r\n}\r\n\r\n.sidebar-offcanvas-right ul li {\r\n    border-bottom: 1px solid #dae2e6;\r\n}\r\n\r\n.sidebar-offcanvas-right ul li:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.sidebar-offcanvas-right ul li i {\r\n    font-size: 15px;\r\n    vertical-align: text-top;\r\n}\r\n\r\n.sidebar-offcanvas-right li a {\r\n    color: #bcc4c6;\r\n    padding: 8px 12px;\r\n    padding-top: 9px;\r\n    display: block;\r\n}\r\n\r\n.sidebar-offcanvas-right li a.active i,\r\n.sidebar-offcanvas-right li a:hover i {\r\n    color: #5c6165;\r\n}\r\n\r\n.sidebar-offcanvas-right li a.active,\r\n.sidebar-offcanvas-right li a:hover {\r\n    background: #f6f8f9;\r\n}\r\n\r\n.sidebar-offcanvas-right .help-position {\r\n    position: absolute;\r\n    bottom: 35px;\r\n    width: 100%;\r\n    border-top: 1px solid #dae2e6;\r\n}\r\n\r\n.sidebar-offcanvas-right .help-position .builder-help-icon {\r\n    top: 0;\r\n}\r\n\r\n.sidebar-offcanvas-right .popover-wrapper .popover-block:before {\r\n    position: absolute;\r\n    top: -29px;\r\n    left: 20px;\r\n    display: inline-block;\r\n    border-top: 6px solid transparent;\r\n    border-bottom: 6px solid TRANSPARENT;\r\n    border-left: 6px solid #62696d;\r\n    /* border-top-color: #62696d; */\r\n    content: '';\r\n}\r\n\r\n.sidebar-offcanvas-right .icon-help.popover-wrapper .popover-block:before {\r\n    left: 20px;\r\n}\r\n\r\n.navbar .btn-basic {\r\n    font-size: 11px;\r\n    font-family: 'montserratregular';\r\n}\r\n\r\n.btn-basic3 {\r\n    padding: 7px 10px;\r\n    margin-right: 5px;\r\n    float: left;\r\n}\r\n\r\n.ellipsis {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.navbar-rightside .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle span.name-title {\r\n    max-width: 130px;\r\n    width: auto;\r\n}\r\n\r\n.navbar-rightside .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n    width: auto;\r\n}\r\n\r\n.open-sidebar {\r\n    padding: 5px 15px;\r\n    cursor: pointer;\r\n    float: right;\r\n    border: 1px solid #dae2e6;\r\n    margin-left: 40px;\r\n    margin-top: 0;\r\n    background: #f6f8f9;\r\n    line-height: 1;\r\n    color: #fff;\r\n}\r\n\r\n.open-sidebar i {\r\n    font-size: 18px;\r\n    color: #8e989f;\r\n}\r\n\r\n.editor .type-details:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.panel-heading a.collapsed:after {\r\n    content: '';\r\n}\r\n\r\n.panel-heading a:after {\r\n    content: '';\r\n}\r\n\r\n.ed-projectname.active-text {\r\n    color: #fb545b;\r\n}\r\n\r\n.navbar-fixed-top .nav-padding {\r\n    padding-left: 34px;\r\n    padding-right: 20px;\r\n}\r\n\r\n\r\n/* Start: name Dropdown */\r\n\r\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n    padding-top: 8px;\r\n    font-size: 13px;\r\n    color: #8e989f;\r\n    font-family: montserratlight;\r\n    border: none;\r\n}\r\n\r\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle i.material-icons {\r\n    font-size: 18px;\r\n    color: #fb545b;\r\n    float: left;\r\n}\r\n\r\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle span.name-title {\r\n    float: left;\r\n    width: 72%;\r\n    min-width: 69px;\r\n    text-align: left;\r\n}\r\n\r\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle:hover,\r\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle:focus {\r\n    background: none !important;\r\n    box-shadow: none !important;\r\n    border: 0 !important;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu {\r\n    padding: 10px 0 10px;\r\n    z-index: 1;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu {\r\n    top: 31px;\r\n    left: -78px;\r\n    min-width: 180px;\r\n    font-size: 12px;\r\n    border-radius: 0;\r\n    background: #62696d;\r\n    border-radius: 4px !important;\r\n    border: none;\r\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\r\n    display: none;\r\n}\r\n\r\n.name-dropdown-wrapper:hover .dropdown-menu {\r\n    display: block;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu:before {\r\n    position: absolute;\r\n    top: -7px;\r\n    left: 76px;\r\n    display: inline-block;\r\n    border-right: 11px solid transparent;\r\n    border-bottom: 12px solid #62696d;\r\n    border-left: 11px solid transparent;\r\n    border-bottom-color: #62696d;\r\n    content: '';\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu > .name-list {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a:hover i.material-icons,\r\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a:focus i.material-icons {\r\n    color: #fff;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a {\r\n    color: #fff;\r\n    padding: 5px 13px !important;\r\n    text-transform: capitalize;\r\n    font-family: montserratregular;\r\n    float: left;\r\n    width: 100%;\r\n    font-size: 12px !important;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a span.name-list-icon {\r\n    float: none;\r\n    width: auto;\r\n    margin-right: 10px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    padding: 1px 0;\r\n    line-height: 1;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a i.material-icons {\r\n    font-size: 12px;\r\n    color: #fff;\r\n    padding: 0;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a span.name-list-title {\r\n    float: none;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    line-height: 1px;\r\n}\r\n\r\n.navbar .name-dropdown-wrapper .dropdown-menu .name-list li > a:hover,\r\n.navbar.navbar-default .name-dropdown-wrapper .dropdown-menu .name-list li > a:hover {\r\n    background: #71787b;\r\n    color: #fff;\r\n}\r\n\r\n.navbar .dropdown-menu .name-list li > a:focus,\r\n.navbar.navbar-default .name-dropdown-wrapper .dropdown-menu .name-list li > a:focus {\r\n    color: #fff;\r\n    background-color: transparent;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu > li > a.hvr-sweep-to-right::before {\r\n    background: #fa8f93 none repeat scroll 0 0 !important;\r\n}\r\n\r\n.name-dropdown-border {\r\n    float: left;\r\n    width: 87%;\r\n    margin: 5px 12px;\r\n    border-top: 1px solid #7a8185!important;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu > .company-list {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu > .company-list li > a {\r\n    color: #fff;\r\n    padding: 5px 13px !important;\r\n    text-transform: capitalize;\r\n    font-family: montserratregular;\r\n    float: left;\r\n    width: 100%;\r\n    font-size: 12px !important;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu > .company-list li {\r\n    line-height: 24px;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu > .company-list li span.company-list-title {\r\n    float: left;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu > .company-list li span.company-selected {\r\n    float: right;\r\n}\r\n\r\n.name-dropdown-wrapper .dropdown-menu > .company-list li.active a span.company-selected i.material-icons,\r\n.name-dropdown-wrapper .dropdown-menu > .company-list li a span.company-selected i.material-icons {\r\n    font-size: 12px;\r\n    position: relative;\r\n    top: -2px;\r\n}\r\n\r\n.navbar .dropdown-menu .company-list .active > a,\r\n.navbar.navbar-default .dropdown-menu .company-list .active > a {\r\n    background-color: transparent;\r\n    color: #fff;\r\n}\r\n\r\n.navbar .dropdown-menu .company-list li > a:hover,\r\n.navbar.navbar-default .dropdown-menu .company-list li > a:hover {\r\n    color: #fff;\r\n    background-color: transparent;\r\n}\r\n\r\n.navbar .dropdown-menu .company-list li > a:focus,\r\n.navbar.navbar-default .dropdown-menu .company-list li > a:focus {\r\n    color: #fff;\r\n    background-color: transparent;\r\n}\r\n\r\n\r\n/*.navbar.navbar-default .dropdown-menu .company-list li > a:hover {\r\n            background: #71787b;\r\n        }*/\r\n\r\n.name-dropdown-wrapper .dropdown-menu div > li > a.hvr-sweep-to-right::before {\r\n    background: #71787b none repeat scroll 0 0;\r\n}\r\n\r\n.name-dd-minh {\r\n    min-height: 33px;\r\n}\r\n\r\n\r\n/* End: name Dropdown */\r\n\r\n\r\n/*helptip*/\r\n\r\n.help-tip i {\r\n    color: #bec5c9;\r\n    font-size: 13px;\r\n    line-height: 17px;\r\n    cursor: pointer;\r\n}\r\n.btn-basic2 .help-tip i {\r\n    color: #bec5c9;\r\n}\r\n.help-checktip {\r\n    float: left;\r\n    background-color: #464655;\r\n    color: #fff;\r\n    padding: 3px 4px;\r\n    width: 180px;\r\n    font-size: 10px;\r\n    border-radius: 4px;\r\n    position: absolute;\r\n    top: -39px;\r\n    left: 39px;\r\n    border: 1px solid #d3d3d3;\r\n    border-radius: 3px;\r\n    visibility: hidden;\r\n    box-shadow: 0 1px 1px #f0f0f1;\r\n    text-align: center;\r\n    left: -83px;\r\n}\r\n\r\n.help-tip {\r\n    margin: 1px 7px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    position: relative;\r\n    margin: 0;\r\n}\r\n\r\n.help-tip:hover > .help-checktip {\r\n    visibility: visible;\r\n    z-index: 999;\r\n}\r\n\r\n.navbar-rightside .help-checktip {\r\n    float: left;\r\n    background-color: #62696d;\r\n    color: #fff;\r\n    padding: 6px 5px;\r\n    font-size: 11px;\r\n    border-radius: 4px;\r\n    position: absolute;\r\n    top: 35px;\r\n    left: 39px;\r\n    border: none;\r\n    width: 77px;\r\n    border-radius: 3px;\r\n    visibility: hidden;\r\n    box-shadow: 0 0 2px 1px #b4b4b4;\r\n    text-align: center;\r\n    left: -23px;\r\n}\r\n\r\n.navbar-rightside .help-checktip:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: -10px;\r\n    left: 50%;\r\n    margin-left: -8px;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-bottom: 6px solid #62696d;\r\n    border-right: 6px solid transparent;\r\n    border-left: 6px solid transparent;\r\n    border-top: none;\r\n}\r\n\r\n.navbar-rightside .help-tip i {\r\n    line-height: 15px;\r\n}\r\n\r\n.help-checktip:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -8px;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-top: 6px solid #464655;\r\n    border-right: 6px solid transparent;\r\n    border-left: 6px solid transparent;\r\n}\r\n\r\n.name-dropdown-wrapper.btn-group {\r\n    float: none;\r\n    width: auto;\r\n}\r\n\r\n.properties-tag {\r\n    font-size: 13px;\r\n    vertical-align: super;\r\n    margin-left: 10px;\r\n}\r\n\r\n.properties-window {\r\n    position: absolute;\r\n    top: 37%;\r\n    left: 26px;\r\n    z-index: 999;\r\n    width: 260px;\r\n    -webkit-transform: rotate(90deg);\r\n    -webkit-transform-origin: left top;\r\n    -moz-transform: rotate(90deg);\r\n    -moz-transform-origin: left top;\r\n    -ms-transform: rotate(90deg);\r\n    -ms-transform-origin: left top;\r\n    -o-transform: rotate(90deg);\r\n    -o-transform-origin: left top;\r\n    transform: rotate(90deg);\r\n    transform-origin: left top;\r\n    display: none;\r\n}\r\n\r\n.properties-window i {\r\n    font-size: 20px;\r\n    color: #bec5c9;\r\n}\r\n\r\n.properties-close {\r\n    cursor: pointer;\r\n}\r\n\r\n.properties-close .main-side,\r\n.properties-close .prop-arrow i:after {\r\n    content: \"arrow_backward\";\r\n}\r\n\r\n\r\n/* Sweep To Right */\r\n\r\n.hvr-sweep-to-right {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    position: relative;\r\n    -webkit-transition-property: color;\r\n    transition-property: color;\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n}\r\n\r\n.hvr-sweep-to-right:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: #2098d1;\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: 0 50%;\r\n    transform-origin: 0 50%;\r\n    -webkit-transition-property: transform;\r\n    -webkit-transition-property: -webkit-transform;\r\n    transition-property: -webkit-transform;\r\n    transition-property: transform;\r\n    transition-property: transform, -webkit-transform;\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-timing-function: ease-out;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.hvr-sweep-to-right:hover,\r\n.hvr-sweep-to-right:focus,\r\n.hvr-sweep-to-right:active {\r\n    color: white;\r\n}\r\n\r\n.hvr-sweep-to-right:hover:before,\r\n.hvr-sweep-to-right:focus:before,\r\n.hvr-sweep-to-right:active:before {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n}\r\n\r\n.navbar .btn.btn-basic[disabled] {\r\n    background: #bec5c9;\r\n    color: #62696d;\r\n    opacity: .55;\r\n    border: 1px solid #bec5c9;\r\n}\r\n\r\n\r\n/* Responsiveness */\r\n\r\n.mobile-navbar-brand {\r\n    display: none;\r\n}\r\n\r\n.mobile-menu-icon,\r\n.mobile-menucross-icon {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n/* Preloader */\r\n\r\n.preloader {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #fff;\r\n    /* change if the mask should be a color other than white */\r\n    z-index: 9999;\r\n    /* makes sure it stays on top */\r\n}\r\n\r\n.status {\r\n    width: 200px;\r\n    height: 200px;\r\n    position: absolute;\r\n    left: 50%;\r\n    /* centers the loading animation horizontally on the screen */\r\n    top: 50%;\r\n    /* centers the loading animation vertically on the screen */\r\n    background-image: url(\"assets/images/loaders/logoAnim.gif\");\r\n    /* path to your loading animation */\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    margin: -100px 0 0 -100px;\r\n    /* is width and height divided by two */\r\n}\r\n\r\n.canvas-fix {\r\n    position: fixed;\r\n    overflow-y: scroll;\r\n    height: 100vh;\r\n    /*margin-top: 20px;\r\n    padding: 0 20px 20px 20px;*/\r\n    width: 81%;\r\n}\r\n\r\n.navbar-leftside .btn-group.help-tip {\r\n    margin-top: 3px;\r\n}\r\n\r\n.no-analytics {\r\n    background: url('./app/site/+builder/assets/images/no-analytics.png');\r\n    width: 100%;\r\n    min-height: 90vh;\r\n    position: fixed;\r\n    bottom: 0;\r\n    background-size: cover;\r\n}\r\n\r\n.analytics-bottom-popup {\r\n    background: #fb6066;\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    margin-top: 23%;\r\n    min-height: 150px;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 42px;\r\n    font-family: montserratlight;\r\n    font-size: 18px;\r\n    box-shadow: 13px 13px 10px rgba(0, 0, 0, 0.20);\r\n}\r\n\r\n.no-analytics-overlay {\r\n    position: fixed;\r\n    top: 40px;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1010;\r\n    margin-top: 56px;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    margin-left: 235px;\r\n}\r\n\r\n.loading:after {\r\n    content: ' .';\r\n    -webkit-animation: dots 1s steps(5, end) infinite;\r\n            animation: dots 1s steps(5, end) infinite;\r\n    font-size: 18px;\r\n    line-height: 1px;\r\n    position: relative;\r\n    left: -3px;\r\n}\r\n\r\n.zoom-parent {\r\n    float: left;\r\n    margin-right: 10px;\r\n    border: 1px solid #dae2e6;\r\n    height: 26px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    background: #fff;\r\n    margin-top: 5px;\r\n}\r\n\r\n.drag-parent {\r\n    float: left;\r\n    margin-right: 13px;\r\n    border: 1px solid #dae2e6;\r\n    height: 27px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    background: #fff;\r\n    margin-top: 7px;\r\n}\r\n\r\n.zoom i {\r\n    font-size: 16px;\r\n    color: #bec5c9;\r\n    padding: 1px 2px;\r\n}\r\n\r\na.zoom {\r\n    float: left;\r\n    margin-top: 3px;\r\n}\r\n\r\ntemp-dev {\r\n    width: 100%;\r\n    display: block;\r\n    margin: 20px auto;\r\n    position: relative;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.template-section .que-fixed {\r\n    z-index: -1;\r\n}\r\n\r\n@-webkit-keyframes dots {\r\n    0%,\r\n    20% {\r\n        color: rgba(0, 0, 0, 0);\r\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    40% {\r\n        color: white;\r\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    60% {\r\n        text-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    80%,\r\n    100% {\r\n        text-shadow: .25em 0 0 white, .5em 0 0 white;\r\n    }\r\n}\r\n\r\n@keyframes dots {\r\n    0%,\r\n    20% {\r\n        color: rgba(0, 0, 0, 0);\r\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    40% {\r\n        color: white;\r\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    60% {\r\n        text-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);\r\n    }\r\n    80%,\r\n    100% {\r\n        text-shadow: .25em 0 0 white, .5em 0 0 white;\r\n    }\r\n}\r\n\r\n.process-bar {\r\n    font-family: montserratregular;\r\n    background: #fff;\r\n    position: fixed;\r\n    top: 60px;\r\n    z-index: 1;\r\n    width: 100%;\r\n}\r\n\r\n.process-bar ul {\r\n    padding: 8px 0;\r\n    margin: 0;\r\n    text-align: center;\r\n    border-bottom: 1px solid #dae2e6;\r\n    box-shadow: -3px 0 5px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.process-bar li {\r\n    display: inline-block;\r\n}\r\n\r\n.process-bar li a {\r\n    font-size: 12px;\r\n    margin: 0 10px;\r\n    color: #62676b;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n.process-bar li a.active {\r\n    color: #23a0d6;\r\n}\r\n\r\n.process-bar li i {\r\n    font-size: 15px;\r\n    vertical-align: text-bottom;\r\n    margin-right: 4px;\r\n    color: #bec5c9;\r\n}\r\n\r\n.process-bar li a.active i {\r\n    color: #23a0d6;\r\n}\r\n\r\n.process-margin {\r\n    margin-left: 120px;\r\n}\r\n\r\n.properties-close {\r\n    cursor: pointer;\r\n}\r\n\r\n.properties-close .main-side {\r\n    display: none;\r\n}\r\n\r\n\r\n/* loader animation start */\r\n\r\n.elem {\r\n    height: 13px;\r\n    display: block;\r\n    -webkit-transition-property: -webkit-transform;\r\n    transition-property: -webkit-transform;\r\n    transition-property: transform;\r\n    transition-property: transform, -webkit-transform;\r\n    -webkit-transition-duration: 1s;\r\n            transition-duration: 1s;\r\n    color: #bec5c9;\r\n    font-size: 13px;\r\n}\r\n\r\n.elem i.material-icons{\r\n    font-size: 13px;\r\n        vertical-align: top;\r\n}\r\n\r\n\r\n.elem-rotate {\r\n    -webkit-animation-name: rotate;\r\n            animation-name: rotate;\r\n    -webkit-animation-duration: 2s;\r\n            animation-duration: 2s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n    color: #fb545b;\r\n}\r\n.elem.elem-rotate i.material-icons{\r\n    font-size: 13px;\r\n}\r\n.navbar .btn.btn-basic.btn-menu.btn-menu.green-bg {\r\n    background: rgb(26, 188, 156);\r\n    border: 1px solid rgb(26, 188, 156);\r\n}\r\n\r\n.btn-menu.green-bg .elem {\r\n    color: #fff;\r\n}\r\n\r\n.btn-menu .elem.elem-rotate i {\r\n    color: #fb545b;\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n    from {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n    }\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes rotate {\r\n    from {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n    }\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n\r\n/* loader animation end */\r\n/* Header start */\r\n\r\n\r\n.help-dropdown-wrapper.btn-group {\r\n    position: relative;\r\n    margin: 0;\r\n    float: right;\r\n    width: 20%\r\n}\r\n\r\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n    padding: 15px 12px 12px;\r\n    font-size: 12px;\r\n    text-transform: none;\r\n    color: #62696d;\r\n    font-family: montserratlight;\r\n    border: none\r\n}\r\n\r\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle i.material-icons {\r\n    font-size: 18px;\r\n    color: #bec5c9;\r\n    position: absolute;\r\n    top: -1px;\r\n    right: 3px\r\n}\r\n\r\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle:focus,\r\n.help-dropdown-wrapper button.btn.btn-default.dropdown-toggle:hover {\r\n    background: 0 0!important;\r\n    box-shadow: none!important;\r\n    border: 0!important\r\n}\r\n\r\n.help-dropdown-wrapper .dropdown-menu {\r\n    padding: 10px 0;\r\n    z-index: 1;\r\n    top: 33px;\r\n    right: -13px;\r\n    min-width: 140px;\r\n    font-size: 12px;\r\n    background: #f87b80;\r\n    border-radius: 4px!important;\r\n    border: none;\r\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .24);\r\n    display: none\r\n}\r\n\r\n.help-dropdown-wrapper:hover .dropdown-menu {\r\n    display: block\r\n}\r\n\r\n.help-dropdown-wrapper .dropdown-menu:before {\r\n    position: absolute;\r\n    top: -12px;\r\n    right: 17px;\r\n    display: inline-block;\r\n    border-right: 8px solid transparent;\r\n    border-bottom: 12px solid #f87b80;\r\n    border-left: 8px solid transparent;\r\n    border-bottom-color: #f87b80;\r\n    content: ''\r\n}\r\n\r\n.help-dropdown-wrapper .dropdown-menu>li>a:focus,\r\n.help-dropdown-wrapper .dropdown-menu>li>a:hover {\r\n    color: #fff;\r\n    background: 0 0\r\n}\r\n\r\n.navbar .help-dropdown-wrapper .dropdown-menu li>a:hover,\r\n.navbar.navbar-default .help-dropdown-wrapper .dropdown-menu li>a:hover {\r\n    background: #f9888d;\r\n    color: #fff\r\n}\r\n\r\n.navbar .dropdown-menu .help-dropdown-wrapper li>a:focus,\r\n.navbar.navbar-default .help-dropdown-wrapper .dropdown-menu li>a:focus {\r\n    color: #fff;\r\n    background-color: transparent\r\n}\r\n\r\n.help-dropdown-wrapper .dropdown-menu>li>a:focus i.material-icons,\r\n.help-dropdown-wrapper .dropdown-menu>li>a:hover i.material-icons {\r\n    color: #fff\r\n}\r\n\r\n.help-dropdown-wrapper .dropdown-menu>li>a {\r\n    color: #fff;\r\n    padding: 3px 13px!important;\r\n    text-transform: capitalize;\r\n    font-family: montserratregular;\r\n    font-size: 13px!important;\r\n    float: left;\r\n    width: 100%\r\n}\r\n\r\n.help-dropdown-wrapper .dropdown-menu>li>a span.help-list-icon {\r\n    float: left;\r\n    width: auto;\r\n    margin-right: 10px\r\n}\r\n\r\n.help-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    padding: 0\r\n}\r\n\r\n.help-dropdown-wrapper .dropdown-menu>li>a span.help-list-title {\r\n    float: left;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    line-height: 22px\r\n}\r\n\r\n.icon-help {\r\n    z-index: 9;\r\n    position: relative;\r\n    cursor: pointer\r\n}\r\n\r\n.icon-help i.material-icons {\r\n    font-size: 18px;\r\n    color: #bec5c9;\r\n    -webkit-transition: all .3s ease;\r\n    transition: all .3s ease\r\n}\r\n\r\n.icon-help i.material-icons:focus .icon-help i.material-icons:active,\r\n.icon-help i.material-icons:hover {\r\n    color: #fb545b\r\n}\r\n\r\n.builder-help-icon {\r\n    top: 8px\r\n}\r\n\r\n.support_outer {\r\n    color: #999;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    height: 37px;\r\n    cursor: pointer;\r\n}\r\n\r\ni.support_icon {\r\n    font-size: 17px;\r\n    color: #8e989f;\r\n    opacity: 0.5;\r\n}\r\n\r\n.support_outer:hover i.support_icon {\r\n    color: #fb5f66;\r\n    opacity: 1;\r\n}\r\n\r\n.help-options .dropdown-menu {\r\n    font-size: 12px;\r\n    background: #62696d;\r\n    top: 35px;\r\n    left: -105px;\r\n    min-width: 130px;\r\n}\r\n\r\n.help-options .dropdown-menu:before {\r\n    position: absolute;\r\n    top: -12px;\r\n    left: 105px;\r\n    display: inline-block;\r\n    border-right: 8px solid transparent;\r\n    border-bottom: 12px solid #62696d;\r\n    border-left: 8px solid transparent;\r\n    border-bottom-color: #62696d;\r\n    content: '';\r\n}\r\n\r\n.help-options .dropdown-menu>li>a {\r\n    color: #fff;\r\n    padding: 5px 13px!important;\r\n    text-transform: capitalize;\r\n    font-family: montserratregular;\r\n    float: left;\r\n    width: 100%;\r\n    font-size: 12px!important;\r\n}\r\n\r\n.help-options .dropdown-menu>li>a:hover {\r\n    background: #71787b;\r\n    color: #fff;\r\n}\r\n\r\n.help-options .dropdown-menu >li>a.hvr-sweep-to-right::before {\r\n    background: #71787b;\r\n}\r\n\r\n.help-options .dropdown-icons {\r\n    font-size: 12px;\r\n    color: #fff;\r\n    padding: 5px 0 0;\r\n    float: left;\r\n    margin-right: 10px;\r\n}\r\n\r\n.help-options .dropdown-text {\r\n    float: left;\r\n    font-size: 12px;\r\n    color: #fff;\r\n    line-height: 22px;\r\n}\r\n\r\n.help-options .dropdown-link {\r\n    font-size: 16px;\r\n    color: #8e989f;\r\n    opacity: 0.5;\r\n    cursor: pointer;\r\n}\r\n\r\n.animated {\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 2s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.slow {\r\n    -webkit-animation-duration: 1.5s;\r\n    animation-duration: 3s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.slower {\r\n    -webkit-animation-duration: 2s;\r\n    animation-duration: 2s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.slowest {\r\n    -webkit-animation-duration: 3s;\r\n    animation-duration: 3s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.bounceIn {\r\n    -webkit-animation-name: bounceIn;\r\n    animation-name: bounceIn;\r\n}\r\n\r\n\r\n/***********\r\n* bounceIn *\r\n************/\r\n\r\n@-webkit-keyframes bounceIn {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(.3);\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        -webkit-transform: scale(1.05);\r\n    }\r\n    70% {\r\n        -webkit-transform: scale(.9);\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1);\r\n    }\r\n}\r\n\r\n@keyframes bounceIn {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(.3);\r\n                transform: scale(.3);\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n        -webkit-transform: scale(1.05);\r\n                transform: scale(1.05);\r\n    }\r\n    70% {\r\n        -webkit-transform: scale(.9);\r\n                transform: scale(.9);\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n/* Header end */\r\n.scrollbar {\r\n    overflow-y: scroll;\r\n}\r\n\r\n.scrollbar::-webkit-scrollbar-track {\r\n    border-radius: 0;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.scrollbar::-webkit-scrollbar {\r\n    width: 6px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.scrollbar::-webkit-scrollbar:horizontal {\r\n    height: 6px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.scrollbar::-webkit-scrollbar-thumb {\r\n    border-radius: 4px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.header-added .process-bar,.header-added .editor-sidebar.sidebar,.header-added .sidebar-offcanvas{\r\n    top:93px;\r\n}\r\n.header-added .template-section, .header-added .editor-template-tabs{\r\n    top: 130px;\r\n}\r\n.header-added .navbar-brand svg{\r\n    top: -30px !important;\r\n}\r\n.header-added .prop-arrow{\r\n    bottom: 33px;\r\n}\r\n.header-added .template-section{\r\n    height: calc(100% - 130px) ;\r\n}\r\n.header-added .no-analytics-overlay{\r\n    top: 74px;\r\n}\r\n.header-added .sidebar-bottomselector {\r\n    padding-bottom: 120px;\r\n}\r\n@media (min-width: 1400px) {\r\n    .no-analytics {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1208px) {\r\n    input.ed-projectname {\r\n        width: 23%;\r\n    }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    .editor-sidebar.sidebar {\r\n        z-index: 1040;\r\n        top: 56px;\r\n        display: none;\r\n    }\r\n    .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n        display: none;\r\n    }\r\n    .mobile-menucross-icon {\r\n        display: block;\r\n    }\r\n    .navbar-brand {\r\n        display: none;\r\n    }\r\n    .mobile-menu-icon {\r\n        display: block;\r\n        color: #fb545b;\r\n        padding: 0 19px;\r\n        padding-top: 4px;\r\n        border-right: 1px solid #dae2e6;\r\n        margin-top: 7px;\r\n        cursor: pointer;\r\n    }\r\n    .mobile-navbar-brand {\r\n        display: block;\r\n        float: left;\r\n        padding: 12px 15px;\r\n    }\r\n    .mobile-navbar-brand img {\r\n        height: 31px;\r\n    }\r\n    .navbar-fixed-top .nav-padding {\r\n        padding-left: 0;\r\n        padding-right: 15px;\r\n    }\r\n    .editor-navheader {\r\n        width: auto;\r\n    }\r\n    .mobile-top-menu {\r\n        width: 100%;\r\n        float: left;\r\n        border-bottom: 1px solid #dae2e6;\r\n    }\r\n    input.ed-projectname {\r\n        margin-top: 12px;\r\n        padding-bottom: 5px;\r\n        padding-top: 5px;\r\n        margin-bottom: 6px;\r\n        font-size: 16px;\r\n        width: 75%;\r\n    }\r\n    span.name-title,\r\n    .navbar-leftside .btn-group.help-tip {\r\n        display: none;\r\n    }\r\n    .navbar-rightside {\r\n        float: right;\r\n        margin-top: 4px;\r\n        margin-bottom: 4px;\r\n        margin-right: 13px;\r\n    }\r\n    .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n        width: 24px;\r\n    }\r\n    .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n        padding-top: 5px;\r\n    }\r\n    .navbar .btn.btn-basic {\r\n        font-size: 10px;\r\n        margin-right: 2px;\r\n    }\r\n    .navbar .btn.btn-basic:not(.btn-menu):hover,\r\n    .navbar .btn.btn-basic:not(.btn-menu):focus {\r\n        background: none;\r\n        color: #fb545b;\r\n    }\r\n    .name-dd-minh {\r\n        min-height: 28px;\r\n    }\r\n    .mobile-menu-icon {\r\n        float: left;\r\n    }\r\n    .editor-template-tabs {\r\n        margin-left: 0;\r\n    }\r\n    .sidebar-modal-backdrop {\r\n        display: none;\r\n        position: fixed;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        z-index: 1030;\r\n        margin-top: 56px;\r\n        background: rgba(0, 0, 0, 0.99);\r\n    }\r\n    .properties-modal-backdrop {\r\n        position: fixed;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        z-index: 1010;\r\n        margin-top: 56px;\r\n        background: rgba(0, 0, 0, 0.99);\r\n        filter: alpha(opacity=50);\r\n        opacity: .5;\r\n    }\r\n    .sidebar-modal-backdrop.fade {\r\n        filter: alpha(opacity=0);\r\n        opacity: 0;\r\n    }\r\n    .sidebar-modal-backdrop.in {\r\n        filter: alpha(opacity=50);\r\n        opacity: .5;\r\n    }\r\n    .mobile-menucross-icon i.material-icons {\r\n        position: absolute;\r\n        top: 10px;\r\n        left: 240px;\r\n        height: 30px;\r\n        width: 30px;\r\n        color: #bec5c9;\r\n        cursor: pointer;\r\n    }\r\n    .sidebar-offcanvas {\r\n        top: 102px;\r\n        z-index: 1020;\r\n        box-shadow: none;\r\n    }\r\n    .sidebar-offcanvas .mobile-menucross-icon i.material-icons {\r\n        position: absolute;\r\n        top: 10px;\r\n        left: -30px;\r\n    }\r\n    .name-dropdown-wrapper:hover .dropdown-menu {\r\n        display: none;\r\n    }\r\n    .zoom-parent {\r\n        display: none;\r\n    }\r\n    .mobile-prop-cross-icon {\r\n        position: absolute;\r\n        top: 110px;\r\n        right: 335px;\r\n        height: 30px;\r\n        width: 30px;\r\n        color: #bec5c9;\r\n        cursor: pointer;\r\n        z-index: 1030;\r\n    }\r\n    .process-bar {\r\n        top: 102px;\r\n    }\r\n    .template-section{\r\n        top: 137px;\r\n    }\r\n}\r\n\r\n.editor-sidebar.sidebar.build-bg {\r\n    background-color: #f6f8f9;\r\n}\r\n"

/***/ }),

/***/ 944:
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader\" *ngIf=\"!jsonBuilderHelper.getJSONBuilt()\">\r\n  <div class=\"status\">&nbsp;</div>\r\n</div>\r\n<div *ngIf=\"jsonBuilderHelper.getJSONBuilt()\">\r\n  <!-- Editor header start-->\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"cookies-header\" *ngIf=\"helloBar.flag && planId === 'appsumo_d'\">\r\n      <div class=\"col-md-12 np\">\r\n        <i class=\"material-icons\">settings</i>\r\n         <span [innerHTML]=\"helloBar.message\"></span>\r\n        <a href=\"javascript:void(0);\" class=\"appupgrade\" (click)=\"ccpopop()\"> Upgrade to essentials</a>\r\n        <a href=\"javascript:void(0);\" class=\"appupgrade\" (click)=\"routeSetting()\"> View Plan Details</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tests\">\r\n      <div class=\"mobile-top-menu\">\r\n        <div class=\"editor-navheader\" [class.header-added]=\"helloBar.flag\">\r\n          <a href=\"\" [routerLink]=\"['/dashboard']\" class=\"navbar-brand\" (click)=\"callGA('LOGO')\">\r\n            <!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\r\n            <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 340 333\" enable-background=\"new 0 0 340 333\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;    height: 110px;top: -65px;position: absolute;left: -5px;\">\r\n                          <path class=\"path\" fill=\"#FFFFFF\" stroke=\"#FB6066\" stroke-width=\"9\" stroke-miterlimit=\"10\" d=\"M151.153,235.063C128.156,238.427 111.107,258.151 111.107,281.393C111.107,307.236 132.087,328.216 157.93,328.216C183.772,328.216 204.752,307.236 204.752,281.393C204.752,272.191 202.041,263.193 196.957,255.523L176.874,275.698L151.724,275.698L136.55,290.872\" />\r\n                      </svg>\r\n            <img src=\"assets/images/headerLogo.png\" />\r\n          </a>\r\n          <a href=\"\" [routerLink]=\"['/dashboard']\" class=\"mobile-navbar-brand\" (click)=\"callGA('LOGO')\">\r\n            <img src=\"assets/images/mobileLogo.png\" />\r\n          </a>\r\n        </div>\r\n        <input type=\"text\" class=\"ed-projectname ellipsis \" contenteditable=\"true\" id=\"fname\" (blur)=\"appNameblured();onCalcNameChanged();\" (focus)=\"appNameFocused()\" [(ngModel)]=\"jsonBuilderHelper.getJSONBuilt().name\" placeholder=\"{{companyName}}'s Calculator\" />\r\n        <!--<p *ngIf=\"!unique\">This calculator Name is already taken</p>-->\r\n      </div>\r\n      <div class=\"mobile-menu-icon\" (click)=\"mobileMenuClicked()\">\r\n        <i class=\"material-icons\">menu</i>\r\n      </div>\r\n      <div class=\"navbar-rightside\">\r\n        <!-- <div class=\"drag-parent\">\r\n          <a href=\"javascript:void();\" class=\"drag\" (click)=\"drag()\"><i class=\"material-icons\">open_with</i></a>\r\n        </div> -->\r\n        <div class=\"zoom-parent\" [hidden]=\"selectedSec!='build'\">\r\n          <a href=\"javascript:void();\" class=\"zoom\" (click)=\"zoom('in')\"><i class=\"material-icons\">add</i></a>\r\n          <a href=\"javascript:void();\" class=\"zoom\" (click)=\"zoom('reset')\"><i class=\"material-icons\">zoom_out</i></a>\r\n          <a href=\"javascript:void();\" class=\"zoom\" (click)=\"zoom('out')\"><i class=\"material-icons\">remove</i></a>\r\n        </div>\r\n        <div class=\"btn-group\">\r\n          <button type=\"button\" class=\"btn btn-basic btn-menu\"><span class=\"elem\"><i class=\"material-icons\">donut_large</i></span></button>\r\n          <!-- <div class=\"help-checktip\">(since {{activeSince}})</div> -->\r\n        </div>\r\n        <a type=\"button\" href=\"javascript:void(0);\" class=\"btn btn-basic\" (click)=\"onPreview();callGA('PREVIEW')\">\r\n          PREVIEW\r\n        </a>\r\n        <button id=\"live-btn\" type=\"button\" class=\"btn btn-basic\" (click)=\"onPublish($event);callGA('GOLIVE')\" [disabled]=\"!jsonBuilderHelper.getJSONBuilt().changed && jsonBuilderHelper.getJSONBuilt().liveApp\">\r\n          {{(jsonBuilderHelper.getJSONBuilt().mode == 'PUBLIC')? (jsonBuilderHelper.getJSONBuilt().changed)?'PUBLISH CHANGES':'LIVE' :'GO LIVE'}}\r\n        </button>\r\n        <div class=\"btn-group navbar-leftside\">\r\n          <div class=\"col-xs-12 no-padding\">\r\n            <!-- Start: header name-dropdown -->\r\n            <sd-toolbar [page]=\"'builder'\" (notify)=\"helloBarNotify($event)\"></sd-toolbar>\r\n            <!-- End: header name-dropdown -->\r\n\r\n            <div class=\"btn-group help-options\" (mouseenter)='addOpen()' (mouseleave)='removeOpen()'>\r\n              <a target=\"_blank\" class=\"support_outer\">\r\n                <i class=\"material-icons support_icon dropdown-link\">help_outline</i>\r\n                <!--<i class=\"material-icons dropdown-link\">keyboard_arrow_down</i>-->\r\n              </a>\r\n              <ul class=\"dropdown-menu\">\r\n                  <li><a class=\"hvr-sweep-to-right\" href=\"http://support.outgrow.co\" target=\"_blank\"><i class=\"material-icons dropdown-icons\">headset_mic</i><span class=\"dropdown-text\">Support</span></a></li>\r\n                  <li><a class=\"hvr-sweep-to-right\" href=\"javascript:void(0);\" (click)=\"videoModal()\"><i class=\"material-icons dropdown-icons\">videocam</i> <span class=\"dropdown-text\">Help Video</span></a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          </div>\r\n      </div>\r\n    </div>  \r\n  </nav>\r\n  <div [class.header-added]=\"helloBar.flag\">\r\n  <!-- Editor header end-->\r\n  <div class=\"process-bar\" [class.process-margin]=\"selectedSec=='config' && (selectedConfigComponent=='email' || selectedConfigComponent=='embedded-code' || selectedConfigComponent=='integrations')\">\r\n    <ul>\r\n      <li><a href=\"javascript:void(0)\" (click)=\"selectedSec='build'\" [class.active]=\"selectedSec=='build'\"><i class=\"material-icons \">dashboard</i> Build</a></li>\r\n      <li><i class=\"material-icons\">keyboard_arrow_right</i></li>\r\n      <li><a href=\"javascript:void(0)\" (click)=\"selectedSec='config'\" [class.active]=\"selectedSec=='config'\"><i class=\"material-icons \">settings</i> Configure</a></li>\r\n      <li><i class=\"material-icons\">keyboard_arrow_right</i></li>\r\n      <li *ngIf=\"isAnalyticsAvailable\">\r\n        <a (click)=\"onSelect('analytics'); selectedAnalyticComponent = 'overview'\" [class.active]=\"selectedSec=='analytics'\"><i class=\"material-icons \">equalizer</i>Analyze</a> </li>\r\n\r\n      <li *ngIf=\"!isAnalyticsAvailable\">\r\n        <a *ngIf=\"!jsonBuilderHelper.getJSONBuilt().liveApp\" (click)=\"checkAnalytics()\" [class.active]=\"selectedSec=='analytics'\"><i class=\"material-icons\">equalizer</i>Analyze</a>\r\n        <a *ngIf=\"jsonBuilderHelper.getJSONBuilt().liveApp\" (click)=\"checkAnalytics()\" [class.active]=\"selectedSec=='analytics'\"><i class=\"material-icons\">equalizer</i>Analyze</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <!-- Editor Left sidebar start -->\r\n  <div class=\"editor-sidebar sidebar\" [class.build-bg]=\"selectedSec=='build'\">\r\n    <component-manager *ngIf=\"jsonBuilderHelper.getJSONBuilt()\" [hidden]=\"selectedSec!='build'\"></component-manager>\r\n    <component-manager-config (selection)=\"selectedConfigComponent = $event\" [hidden]=\"selectedSec!='config'\"></component-manager-config>\r\n    <calc-analytics-manager *ngIf=\"selectedSec=='analytics'\" [hidden]=\"selectedSec!='analytics'\" (selection)=\"selectedAnalyticComponent = $event\"></calc-analytics-manager>\r\n    <div class=\"mobile-menucross-icon\" (click)=\"mobileMenuCrossClicked()\">\r\n      <i class=\"material-icons\">close</i>\r\n    </div>\r\n  </div>\r\n  <!-- Editor Left sidebar end -->\r\n  <!-- Editor Right Template section strat -->\r\n  <div class=\"editor-template-tabs\" [class.minH]=\"selectedSec!='build'\">\r\n    <div id=\"build\">\r\n      <div class=\"template-section scrollbar\" [hidden]=\"selectedSec!='build'\" (dblclick)=\"toggleProperties()\">\r\n        <Temp-dev class=\"template-container\"></Temp-dev>\r\n      </div>\r\n      <config [hidden]=\"selectedSec!='config'\" [component]=\"selectedConfigComponent\" >\r\n      </config>\r\n      <div class=\"pt-30\" [hidden]=\"selectedSec!='analytics'\">\r\n        <calc-analytics *ngIf=\"selectedSec=='analytics'\" [component]=\"selectedAnalyticComponent\" [calc]=\"jsonBuilderHelper.getJSONBuilt()\">\r\n        </calc-analytics>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Editor Right Template section end  -->\r\n  <!--Right Sidebar layout start -->\r\n\r\n  <div id=\"sidebar\" class=\"sidebar-offcanvas affix\" *ngIf=\"jsonBuilderHelper.getSelectedPage()\" [hidden]=\"selectedSec!='build'\">\r\n    <!-- <div class=\"properties-window\" *ngIf=\"(jsonBuilderHelper.getSelectedControl() || jsonBuilderHelper.getSelectedPage()) && jsonBuilderHelper.getSelectedPage().visible \">\r\n      <i class=\"material-icons\">tab</i>\r\n      <span class=\"properties-tag\">PROPERTIES</span>\r\n    </div> -->\r\n    <div class=\"sidebar-offcanvas-right\" *ngIf=\"jsonBuilderHelper.getSelectedPage()\" [hidden]=\"selectedSec!='build'\">\r\n      <ul>\r\n        <li (click)=\"openProperties()\" >\r\n          <div class=\"help-tip sidebar-helptip\">\r\n              <a [class.active] = \"jsonBuilderHelper.getSelectedControl()?.type !== 'leadform' && jsonBuilderHelper.getSelectedModel() !=='Global_Settings' && (jsonBuilderHelper.getSelectedModel() === 'Control' || jsonBuilderHelper.getSelectedModel() === 'Outcome_Settings' || jsonBuilderHelper.getSelectedModel() === 'Page' || (jsonBuilderHelper.getJSONBuilt().template === 'inline-temp' && jsonBuilderHelper.getSelectedModel() === 'Section' && jsonBuilderHelper.getSelectedSection().type !=='LeadForm' && jsonBuilderHelper.getSelectedSection().type !=='LeadFormQ' && jsonBuilderHelper.getSelectedSection().type !=='Content Area'))\"\r\n                (click) = \"selectPage()\"\r\n                href=\"javascript:void(0)\"><i class=\"material-icons\">dashboard</i>\r\n              </a>\r\n              <div class=\"help-checktip\">Edit Page Properties</div>\r\n          </div>\r\n        </li>\r\n        <li (click)=\"openProperties()\" >\r\n          <div class=\"help-tip sidebar-helptip\">\r\n          <a [class.active] = \"(jsonBuilderHelper.getSelectedModel() === 'Section' && (jsonBuilderHelper.getSelectedSection()?.type === 'LeadFormQ' || jsonBuilderHelper.getSelectedSection()?.type === 'Content Area' || jsonBuilderHelper.getSelectedSection()?.type === 'LeadForm')) || (jsonBuilderHelper.getSelectedModel() === 'Control' && jsonBuilderHelper.getSelectedControl().type === 'leadform')\"\r\n          href=\"javascript:void(0)\"\r\n              (click) = \"openLeadEditor($event)\"><i class=\"material-icons \"> person_add</i>\r\n          </a>\r\n          <div class=\"help-checktip\">Lead Generation</div>\r\n          </div>\r\n        </li>\r\n        <li (click)=\"openProperties()\" >\r\n        <div class=\"help-tip sidebar-helptip\">\r\n          <a [class.active] = \"jsonBuilderHelper.getSelectedModel() && jsonBuilderHelper.getSelectedModel() ==='Global_Settings'\"\r\n            (click) = \"openGlobalSettings()\"\r\n            href=\"javascript:void(0)\"><i class=\"material-icons\">desktop_mac</i>\r\n          </a>\r\n          <div class=\"help-checktip\">Display Setting</div>\r\n          </div>\r\n        </li>\r\n        <li class=\"prop-arrow\" (click)=\"toggleProperties()\"><i class=\"material-icons\"></i></li>\r\n      </ul>\r\n    </div>\r\n    <!--editors -->\r\n    <editor *ngIf=\"(jsonBuilderHelper.getSelectedControl() || jsonBuilderHelper.getSelectedPage())\">\r\n    </editor>\r\n    <!--editors -->\r\n    <!--&& !((jsonBuilderHelper.getSelectedPage().type == 'Questionnaire') && (jsonBuilderHelper.getSelectedModel() == 'Page'))-->\r\n  </div>\r\n  </div>\r\n  <div class=\"mobile-prop-cross-icon\" (click)=\"mobilePropCrossClicked()\" [hidden]=\"selectedSec!='build'\">\r\n    <i class=\"material-icons\">close</i>\r\n  </div>\r\n  <div class=\"properties-modal-backdrop\" [hidden]=\"selectedSec!='build'\"></div>\r\n  <div class=\"sidebar-modal-backdrop\"></div>\r\n  <!--Right Sidebar layout end -->\r\n  <!-- Modal -->\r\n  <div class=\"modal fade upload-bg\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"col-md-12 text-center\">\r\n                <button (click)=\"upload('bg');callGA('REPLACEBG')\" data-toggle=\"modal\" data-target=\".upload-bg\" type=\"button\" class=\"btn btn-default modal-upload-btn\"><i class=\"material-icons\">add_a_photo</i> UPLOAD NEW</button>\r\n            </div>\r\n          <br>\r\n          <div class=\"modal-title\" >or</div>\r\n          <br>\r\n          <h4 class=\"modal-title\"> Select from our selection below.</h4>\r\n          <div class=\"col-md-12 gallery-content-center\">\r\n                <div class=\"image-outer\" *ngFor=\"let imgShow of imgContainer\">\r\n                  <a [class.hide]=\"!imgShow.visible\"\r\n                    href=\"javascript:void(0);\"\r\n                    (click)=\"applyImage(imgShow);jsonBuilderHelper.getSelectedPage().bgImage = imgShow.url; this.jsonBuilderHelper.getSelectedPage().bgColor = '';\"\r\n                    data-toggle=\"modal\" data-target=\".upload-bg\"\r\n                  >\r\n                      <div class=\"info\">\r\n                      <div class=\"info-sub\">\r\n                          <i class=\"material-icons\">done_all</i>\r\n                          <span>Use Image</span>\r\n                      </div>\r\n                      </div>\r\n                     <img [attr.src]=\"imgShow.visible?imgShow.thumbnail:''\"/>\r\n                  </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 text-center\">\r\n               <button  type=\"button\" class=\"load-btn\" *ngIf=\"isLoadMoreButton()\" (click)=\"showNextImages();\" >LOAD MORE</button>\r\n            </div>\r\n          </div>\r\n       </div>\r\n    </div>\r\n  </div>\r\n  <!-- Modal for the formula Dialog -->\r\n  <!--<formula-dialog *ngIf=\"controls\" [getJsonBuilt]=\"jsonBuilderHelper.getTemplateQuestionare()\"></formula-dialog>-->\r\n\r\n  <formula-pop *ngIf=\"jsonBuilderHelper.getJSONBuilt().templateType=='Numerical'\"></formula-pop>\r\n  <og-video-modal [templateType]=\"jsonBuilderHelper.getJSONBuilt().templateType\"></og-video-modal>\r\n  <!-- <og-card-plan-modal></og-card-plan-modal> -->\r\n  <og-payment-modal (notify)=\"openModal($event)\"></og-payment-modal>\r\n</div>\r\n"

/***/ })

});
//# sourceMappingURL=5.bundle.map