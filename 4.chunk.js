webpackJsonp([4,10],{

/***/ 872:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_module__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_routes_builder_routes__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sampleCode_component__ = __webpack_require__(881);
/* harmony export (binding) */ __webpack_require__.d(exports, "SampleCodeModule", function() { return SampleCodeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SampleCodeModule = (function () {
    function SampleCodeModule() {
    }
    SampleCodeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__config_routes_builder_routes__["c" /* SAMPLE_ROUTES */]), __WEBPACK_IMPORTED_MODULE_2__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_3__template_module__["a" /* TemplateModule */]],
            exports: [],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__sampleCode_component__["a" /* SampleCodeComponent */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], SampleCodeModule);
    return SampleCodeModule;
}());


/***/ },

/***/ 873:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return JSONItemTracker; });
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


/***/ },

/***/ 875:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_models_model__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DefaultJSON; });
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
        else
            return this.getSCjson();
    };
    /* for numerical calculator */
    DefaultJSON.prototype.getONPSjson = function () {
        var app = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* App */](); //create new app
        app.setThemeColor('cp1');
        //create pages
        var landingPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Page */]('Landing', 'https://cdn.filepicker.io/api/file/KA8fpEzQ7Ka2rWl2rXVf');
        var questionPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Page */]('Questionnaire');
        var resultPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Page */]('Result', 'https://cdn.filepicker.io/api/file/KA8fpEzQ7Ka2rWl2rXVf');
        //add All pages in app
        app.addPages(landingPage, questionPage, resultPage);
        // LANDING Page starts //
        // section 1 of LANDING page
        var section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Logo Heading');
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('logo', 'https://cdn.filepicker.io/api/file/NIqLhmqRRWy4WH70ycfi', 'textfield help');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('header', "CALCULATE THE RISK OF YOU GETTING A HEART DISEASE", 'textfield help', '', 'main-heading');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('sub_header', "Heart problems are at an all time high. See if your lifestyle makes you susceptible.", 'textfield help', '', 'sub-heading');
        item2.setVisibility(false);
        var item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('leadform', 'GET STARTED', 'textfield help');
        item3.setVisibility(false);
        var item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('click_button', 'GET STARTED', 'textfield help');
        item4.setVisibility(true);
        section2.addItems(item1, item2, item3, item4);
        // section 3 of LANDING page
        var section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Footer', 'landing-footer-outer');
        //item1 = new Item('footer_links', 'This is the footer link', 'somehelp random');
        //item1.addLinksToFooter([{ label: 'Privacy Policy', value: 'http://venturepact.com' }]);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section3.addItems(item1);
        landingPage.addSections(section1, section2, section3);
        // Questionnaire page starts //
        // SUB Section1(Questions) of Question Page
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Your Lifestyle', '', 'Tell us a little bit more!');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'Do you smoke?', '', '');
        item1.addFieldToCheckbox([{ label: 'Never touched a cigarette', icon: '' },
            { label: 'Once in a while', icon: '' },
            { label: 'A pack a day', icon: '' }]);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'How active is your lifestyle?', '');
        item2.addFieldToCheckbox([{ label: 'I play a sport everyday', icon: '' },
            { label: 'Occasionally', icon: '' },
            { label: 'My sofa is just way too comfortable', icon: '' }]);
        section1.addItems(item1, item2);
        questionPage.addSections(section1);
        // SUB Section2(Questions) of Question Page
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Diet', '', 'Tell us a little bit more!');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('checkbox', 'How will you classify your diet?', '');
        item1.addFieldToCheckbox([{ label: 'Vegan', icon: '' },
            { label: 'Vegetarian', icon: '' },
            { label: 'Healthy lean meat', icon: '' },
            { label: 'McDonalds style', icon: '' }]);
        section2.addItems(item1);
        questionPage.addSections(section2);
        // SUB Section3(Questions) of Question Page
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('General', '', 'Tell us a little bit more!');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('textfield', 'What is your age?', '', 'Age');
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'Where do you live?', '', '');
        item2.addFieldToCheckbox([{ label: 'Urban area', icon: '' },
            { label: 'Suburbs', icon: '' },
            { label: 'Farmland', icon: '' }]);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'How many people in your lineage (parents, grandparents) have a heart disease?', '');
        item3.addFieldToCheckbox([{ label: '1-2', icon: '' },
            { label: '3-4', icon: '' },
            { label: 'Over 4', icon: '' }]);
        section3.addItems(item1, item2, item3);
        questionPage.addSections(section3);
        // leadform section
        var leadSection = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('LeadFormQ', '', 'Where can we send you a detailed report?');
        leadSection.setVisibility(true);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('leadform_question', 'Next', '', '', '');
        item1.setVisibility(true);
        leadSection.addItems(item1);
        questionPage.addSections(leadSection);
        //--- Result page sections --- START
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Header', 'top-head');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_header', "<p>Here\u2019s your risk of getting a heart disease: </p>");
        section1.addItems(item1);
        // Result Section 2 -- START
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Result', 'left-section');
        //R1
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_output', "\n                       <p>{R1}</p>\n                       <p>By age of 30</p>\n                       <p>It is not common to get a heart disease so early on in life. You'll be safe!</p>", '', '', '');
        var Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R2
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_output', "\n                        <p>{R2}</p>\n                        <p>By the age of 40</p>\n                        <p>You're at a higher risk, but don't worry - no need to panic.</p>\n                        ", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R3
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_output', "\n                        <p>{R3}</p>\n                        <p>By the age of 50</p>\n                        <p>The risks get higher, but a good diet will keep you safe.</p>\n                        ", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R4
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_output', "\n                        <p>{R4}</p>\n                        <p>By the age of 65</p>\n                        <p>Things get serious now. Ensure you're living healthy.</p>", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('leadform', 'Schedule a Consultation Today', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('click_button', 'Schedule a Consultation Today', 'textfield help');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_disclaimer', "The numbers suggested are rough estimates for informational purposes only. Any reliance placed on the content of the website is to be made at your own risk.", '', '', 'bottom-section');
        section3.addItems(item1, item2, item3);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('share_links');
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_redo');
        section4.addItems(item1, item2);
        var section5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Summary', 'right-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_summary');
        section5.addItems(item1);
        resultPage.addSections(section1, section2, section3, section4, section5);
        //--- Result Section -- End
        return app;
    };
    DefaultJSON.prototype.getONPSRecommendedjson = function () {
        var app = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* App */](); //create new app
        app.setThemeColor('cp1');
        //create pages
        var landingPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Page */]('Landing', 'https://cdn.filepicker.io/api/file/KA8fpEzQ7Ka2rWl2rXVf');
        var questionPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Page */]('Questionnaire');
        var resultPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Page */]('Result', 'https://cdn.filepicker.io/api/file/KA8fpEzQ7Ka2rWl2rXVf');
        //add All pages in app
        app.addPages(landingPage, questionPage, resultPage);
        // LANDING Page starts //
        // section 1 of LANDING page
        var section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Logo Heading');
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('logo', 'https://cdn.filepicker.io/api/file/NIqLhmqRRWy4WH70ycfi', 'textfield help');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('header', "Where to build your Startup?", 'textfield help', '', 'main-heading');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('sub_header', "See which emerging tech hub you should head to!", 'textfield help', '', 'sub-heading');
        item2.setVisibility(true);
        var item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('leadform', 'Let’s Find Out', 'textfield help');
        item3.setVisibility(false);
        var item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('click_button', 'Let’s Find Out', 'textfield help');
        item4.setVisibility(true);
        section2.addItems(item1, item2, item3, item4);
        // section 3 of LANDING page
        var section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Footer', 'landing-footer-outer');
        //item1 = new Item('footer_links', 'This is the footer link', 'somehelp random');
        //item1.addLinksToFooter([{ label: 'Privacy Policy', value: 'http://venturepact.com' }]);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section3.addItems(item1);
        landingPage.addSections(section1, section2, section3);
        // Questionnaire page starts //
        // SUB Section1(Questions) of Question Page
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Questions', '', 'Here We Go..');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'How would you categorize your startup?', '', '');
        item1.addFieldToCheckbox([{ label: 'Super High Tech', icon: '', value: '' },
            { label: 'B2B Software', icon: '', value: '' }, { label: 'Hardware', icon: '', value: '' },
            { label: 'Consumer Software', icon: '', value: '' }, { label: 'Services', icon: '', value: '' }]);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'Which industry are you in?', '');
        item2.addFieldToCheckbox([{ label: 'Finance', icon: '', value: '' },
            { label: 'Healthcare', icon: '', value: '' }, { label: 'Real Estate', icon: '', value: '' },
            { label: 'Hospitality', icon: '', value: '' }, { label: 'Retail', icon: '', value: '' },
            { label: 'Industry Agnostic', icon: '', value: '' }]);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'When are you looking to raise funds for your startup?', '');
        item3.addFieldToCheckbox([{ label: 'Immediately', icon: '', value: '' },
            { label: 'Maybe in the Future', icon: '', value: '' }, { label: 'Not at All', icon: '', value: '' }]);
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'How many developers will you need to hire in the next one year?', '', '');
        item4.addFieldToCheckbox([{ label: 'None', icon: '', value: '' },
            { label: '1-3', icon: '', value: '' }, { label: '3-10', icon: '', value: '' },
            { label: '10-50', icon: '', value: '' }]);
        var item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'Do you have a family?', '', '');
        item5.addFieldToCheckbox([{ label: 'I am Single', icon: '', value: '' },
            { label: 'I am Married', icon: '', value: '' }, { label: 'I am a Father/Mother', icon: '', value: '' }]);
        var item6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'Do you have a strong weather preference?', '');
        item6.addFieldToCheckbox([{ label: 'Not Really', icon: '', value: '' }, { label: 'I Need Warmth', icon: '', value: '' }]);
        section1.addItems(item1, item2, item3, item4, item5, item6);
        questionPage.addSections(section1);
        // leadform section
        var leadSection = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('LeadFormQ', '', 'Where should we send you our analysis?');
        leadSection.setVisibility(true);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('leadform_question', 'Next', '', '', '');
        item1.setVisibility(true);
        leadSection.addItems(item1);
        questionPage.addSections(leadSection);
        //--- Result page sections --- START
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Header', 'top-head');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_header', "<p>Here\u2019s where we think you should head to! </p>");
        section1.addItems(item1);
        // Result Section 2 -- START
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Result', 'left-section');
        //R1
        var Formulaindex = app.addformula('San Francisco (Sample)', 'San_Francisco', 'https://cdn.filepicker.io/api/file/SAMeWjCDRNSZJbm0UN0s', "You need to head to the good old tech hub and be amidst the giants. You get to be in the middle of all the fundraising action and \n        will never run out of a competitive, yet constant supply of awesome trained tech talent.", 'Here’s where we think you should head to!', 'Explore SF Tech Scene', __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_DOMAIN, 'true');
        //R2
        // Formulaindex = app.addformula('New York', 'New_York', 'https://cdn.filepicker.io/api/file/6qe0IlIkQim0cnKCNvNF',
        //     `The Big Apple is where you need to be! NY is a favorite among young people looking to accelerate their careers. Your company will never be out of energy!`,
        //     'Here’s where we think you should head to!',
        //     'Explore NY Tech Scene', environment.APP_DOMAIN);
        //R3
        Formulaindex = app.addformula('Miami (Sample)', 'Miami', 'https://cdn.filepicker.io/api/file/4evsUm39SPOKd2cXI2F2', "If the Tech scene can be defined by potential, the best description of Miami\u2019s market is \u201Cresurgent\u201D. Today, Miami is a favorite amongst folks who want to grow\n             fast but do not want to compromise on their sunny outdoors.", 'Here’s where we think you should head to!', 'Explore Miami’s Coolest Startups', __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_DOMAIN, 'true');
        //R4
        // Formulaindex = app.addformula('Seattle', 'Seattle', 'https://cdn.filepicker.io/api/file/zTaJooqWTou0i7bNFg1f',
        //     `Think Seattle, you automatically think rain, great coffee and Tech titans Microsoft and Amazon. Because of Tech, Seattle is the fastest growing of the country’s 50
        //      most populous cities.`, 'Here’s where we think you should head to!',
        //     'Check Out Seattle’s Coolest Coworking Spaces', environment.APP_DOMAIN);
        //R5
        // Formulaindex = app.addformula('Chicago', 'Chicago', 'https://cdn.filepicker.io/api/file/8mrLqb9TiKlBg6RmxeSa',
        //     `One of the country’s major core real estate markets, Chicago ranks second in growth of tech jobs among the country’s most populous cities (19.3 percent), slightly behind
        //      Silicon Valley, but ahead of Seattle. Need we say more?`, 'Here’s where we think you should head to!',
        //     'Plan a Visit To Chicago Today', environment.APP_DOMAIN);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('leadform', 'Schedule a Consultation Today', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('click_button', 'Schedule a Consultation Today', 'textfield help');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_disclaimer', "The numbers suggested are rough estimates for informational purposes only. Any reliance placed on the content of the website is to be made at your own risk.", '', '', 'bottom-section');
        item3.setVisibility(false);
        section3.addItems(item1, item2, item3);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('share_links');
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_redo');
        section4.addItems(item1, item2);
        var section5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Summary', 'right-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_summary');
        section5.addItems(item1);
        resultPage.addSections(section1, section2, section3, section4, section5);
        //--- Result Section -- End
        return app;
    };
    //Sound cloud template
    DefaultJSON.prototype.getSCjson = function () {
        var app = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* App */](); //create new app
        app.setThemeColor('cp1');
        //create pages
        var landingPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Page */]('Landing', 'https://cdn.filepicker.io/api/file/d7jEH9myRNKQj4l65Zkt');
        var questionPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Page */]('Questionnaire');
        var resultPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Page */]('Result');
        //add All pages in app
        app.addPages(landingPage, questionPage, resultPage);
        // LANDING Page starts //
        // section 1 of LANDING page
        var section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Logo Heading');
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('logo', 'https://cdn.filepicker.io/api/file/zkSrHlXZQVyIJYG3HVBq', 'textfield help');
        // let item0 = new Item('Item', '../../+builder/assets/template1-logo.png', 'textfield help');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('header', "How much should you pay for a video campaign?", 'textfield help', '', 'main-heading');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('sub_header', "Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!", 'textfield help', '', 'sub-heading');
        item2.setVisibility(false);
        var item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('leadform', 'Estimate Costs', 'textfield help');
        item3.setVisibility(true);
        var item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('click_button', 'Estimate Costs', 'textfield help');
        item4.setVisibility(false);
        section2.addItems(item1, item2, item3, item4);
        // section 3 of LANDING page
        var section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Footer', 'landing-footer-outer');
        //item1 = new Item('footer_links', 'This is the footer link', 'somehelp random');
        //item1.addLinksToFooter([{ label: 'Privacy Policy', value: 'http://venturepact.com' }]);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section3.addItems(item1);
        landingPage.addSections(section1, section2, section3);
        // Questionnaire page starts //
        //leadform section
        var leadSection = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('LeadFormQ');
        leadSection.setVisibility(false);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('leadform_question', 'Next', '', '', '');
        item1.setVisibility(false);
        leadSection.addItems(item1);
        questionPage.addSections(leadSection);
        // SUB Section1(Questions) of Question Page
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Production Requirements', '', 'Tell us a little bit more!');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('slider', 'How many actors do you need in your video?', '', undefined, undefined, 1, 20);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('slider', 'How many locations do you need to shoot at?', '', undefined, undefined, 1, 10);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('checkbox', 'Where are you going to publish this video?', '');
        item3.addFieldToCheckbox([{ label: 'Web', icon: '' },
            { label: 'TV', icon: '' }]);
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'What do you expect the length of the video to be?', '', '');
        item4.addFieldToCheckbox([{ label: 'Less than 1 minute', icon: '' },
            { label: '1-5 minute', icon: '' },
            { label: '5-20 minutes', icon: '' },
            { label: 'Over 20 minutes', icon: '' }]);
        var item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'What sort of a setting are you considering?', '');
        item5.addFieldToCheckbox([{ label: 'Indoor', icon: '' },
            { label: 'Outdoor', icon: '' }]);
        var item6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('textfield', 'Where can we find your brand assets for reference?', '');
        section1.addItems(item1, item2, item3, item4, item5, item6);
        questionPage.addSections(section1);
        //--- Result page sections --- START
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Header', 'top-head');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_header', "\n                        <p>YOUR HEADING GOES HERE</p>");
        section1.addItems(item1);
        // Result Section 2 -- START
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Result', 'left-section');
        //R1
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_output', "\n                       <p>$45,000</p>\n                       <p>For top notch HDTV quality</p>\n                       <p>Using the same camera and crew that shot Gravity and Avtar!</p>", '', '', '');
        var Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R2
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_output', "                        \n                        <p>$30,000</p>\n                        <p>For Regular TV quality</p>\n                        <p>You will be able to publish on TV but not on iMAX</p>", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R3
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_output', "\n                        <p>$15,000</p>\n                        <p>For Budget quality</p>\n                        <p>Not for TV but good enough for youtube and facebook.</p>", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('leadform', 'Get a Detailed Estimate', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('click_button', 'Get a Detailed Estimate', 'textfield help');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_disclaimer', "The prices suggested are rough estimates based on producer surveys. Actual prices may differ due to requirements", '', '', 'bottom-section');
        section3.addItems(item1, item2, item3);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('share_links');
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_redo');
        section4.addItems(item1, item2);
        var section5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Summary', 'right-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_summary');
        section5.addItems(item1);
        resultPage.addSections(section1, section2, section3, section4, section5);
        //--- Result Section -- End
        return app;
    };
    //Home Loan Calculator template
    DefaultJSON.prototype.getHLCjson = function () {
        var app = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* App */](); //create new app
        app.setThemeColor('cp1');
        //create pages
        var landingPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Page */]('Landing', 'https://cdn.filepicker.io/api/file/TrhSo9GwR5KYtaCZlYlr');
        var questionPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Page */]('Questionnaire');
        var resultPage = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Page */]('Result');
        //add All pages in app
        app.addPages(landingPage, questionPage, resultPage);
        // LANDING Page starts //
        // section 1 of LANDING page
        var section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Logo Heading');
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('logo', 'https://cdn.filepicker.io/api/file/BWy5nGq0TDSQ2s1NVdjw', 'textfield help');
        // let item0 = new Item('Item', '../../+builder/assets/template1-logo.png', 'textfield help');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('header', "How much should you pay for a video campaign?", 'textfield help', '', 'main-heading');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('sub_header', "Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!", 'textfield help', '', 'sub-heading');
        item2.setVisibility(false);
        var item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('leadform', 'Estimate Costs', 'textfield help');
        //item3.setVisibility(false);
        var item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('click_button', 'Estimate Costs', 'textfield help');
        item4.setVisibility(true);
        section2.addItems(item1, item2, item3, item4);
        // section 3 of LANDING page
        var section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Footer', 'landing-footer-outer');
        //item1 = new Item('footer_links', 'This is the footer link', 'somehelp random');
        //item1.addLinksToFooter([{ label: 'Privacy Policy', value: 'http://venturepact.com' }]);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('poweredby', 'This is powered by', 'poweredby help');
        section3.addItems(item1);
        landingPage.addSections(section1, section2, section3);
        // Questionnaire page starts //
        // leadform section
        var leadSection = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('LeadFormQ');
        leadSection.setVisibility(false);
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('leadform_question', 'Next', '', '', '');
        item1.setVisibility(false);
        leadSection.addItems(item1);
        questionPage.addSections(leadSection);
        // SUB Section1(Questions) of Question Page
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Production Requirements', '', 'Tell us a little bit more!');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('slider', 'How many actors do you need in your video?', '', undefined, undefined, 1, 20);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('slider', 'How many locations do you need to shoot at?', '', undefined, undefined, 1, 10);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('checkbox', 'Where are you going to publish this video?', '');
        item3.addFieldToCheckbox([{ label: 'Web', icon: '' },
            { label: 'TV', icon: '' }]);
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'What do you expect the length of the video to be?', '', '');
        item4.addFieldToCheckbox([{ label: 'Less than 1 minute', icon: '' },
            { label: '1-5 minute', icon: '' },
            { label: '5-20 minutes', icon: '' },
            { label: 'More than 20 minutes', icon: '' }]);
        var item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('radio_button', 'What sort of a setting are you considering?', '');
        item5.addFieldToCheckbox([{ label: 'Indoor', icon: '' },
            { label: 'Outdoor', icon: '' }]);
        var item6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('textfield', 'Where can we find your brand assets for reference?', '');
        section1.addItems(item1, item2, item3, item4, item5, item6);
        questionPage.addSections(section1);
        //--- Result page sections --- START
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Header', 'top-head');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_header', "\n                        <p>YOUR HEADING GOES HERE</p>");
        section1.addItems(item1);
        // Result Section 2 -- START
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Result', 'left-section');
        //R1
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_output', "\n                       <p>$45,000</p>\n                       <p>For top notch HDTV quality</p>\n                       <p>Using the same camera and crew that shot Gravity and Avtar!</p>", '', '', '');
        var Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R2
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_output', "                        \n                        <p>$30,000</p>\n                        <p>For Regular TV quality</p>\n                        <p>You will be able to publish on TV but not on iMAX</p>", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R3
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_output', "\n                        <p>$15,000</p>\n                        <p>For Budget quality</p>\n                        <p>Not for TV but good enough for youtube and facebook.</p>", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('leadform', 'Get a Detailed Estimate', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('click_button', 'Get a Detailed Estimate', 'textfield help');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_disclaimer', "The prices suggested are rough estimates based on producer surveys. Actual prices may differ due to requirements", '', '', 'bottom-section');
        section3.addItems(item1, item2, item3);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('share_links');
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_redo');
        section4.addItems(item1, item2);
        var section5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* Section */]('Summary', 'right-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["d" /* Item */]('result_summary');
        section5.addItems(item1);
        resultPage.addSections(section1, section2, section3, section4, section5);
        //--- Result Section -- End
        return app;
    };
    DefaultJSON = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], DefaultJSON);
    return DefaultJSON;
}());


/***/ },

/***/ 878:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_JSONBuilder_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_formula_service__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_model__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_builder_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templates_services_DefaultJSON_service__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_JSONUpdateItemTracker_service__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__templates_services_recommendation_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BuilderComponent; });
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
    function BuilderComponent(jsonBuilderHelper, subDomainService, _builderService, _defaultJson, _itemTrackService, route, _router, _dashboardService, formulaService, _featureAuthService, _cookieService, _script, recommendationService) {
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
        this.uniqueUrlHandler = this._builderService.debounce(this.isUnique, 800);
        this.autoSaver = this.debounce(this.saveUnsavedData, 1000);
        localStorage.setItem('hash-link', this.hash);
        /* open tabs acc to has in href */
        if (window.location.hash) {
            this.hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
            if (jQuery.inArray(this.hash, this.ConfigArray) != -1) {
                this.selectedSec = 'config';
            }
            else if (jQuery.inArray(this.hash, this.LandingArray) != -1) {
                this.selectedSec = 'build';
            }
            else if (jQuery.inArray(this.hash, this.AnalyticsArray) != -1) {
                this.selectedSec = 'analytics';
            }
            localStorage.setItem('hash-link', this.hash);
        }
        this.jsonBuilderHelper.setSelectedModel('Page');
        this.interComData = JSON.parse(localStorage.getItem('icd'));
    }
    BuilderComponent.prototype.getNavUrl = function () {
        var urla = window.location.href;
        var url = 'http://outgrow.co';
        if (urla.indexOf('outgrow.co') < 0) {
            url = 'http://outgrow.us';
        }
        return url;
    };
    BuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.Intercom('update', { hide_default_launcher: true });
        var reload = localStorage.getItem('reload');
        if (reload == '1') {
            localStorage.setItem('reload', '0');
            window.location.reload(true);
        }
        else {
            this.sub = this.route.params.subscribe(function (params) {
                var name = params['name'];
                if (name)
                    _this.appName = name;
                _this._script.load('wysiwyg', 'filepicker', 'math', 'fancybox', 'jqueryUI', 'formulaJs')
                    .then(function (data) {
                    console.log('Scripts Loaded', data);
                    _this.initiateBuilder();
                })
                    .catch(function (error) {
                    //any error
                });
            });
            this.isAnalyticsAvailable = this._featureAuthService.features.analytics;
            //Set current company name
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            this.companyName = storage.company.name;
        }
    };
    BuilderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // let self = thiss
        document.onmouseover = function () { return window.innerDocClick = true; };
        document.onmouseleave = function () { return window.innerDocClick = false; };
        window.onhashchange = function () {
            if (!window.innerDocClick)
                window.location.href = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].APP_EXTENSION + '/dashboard';
        };
    };
    BuilderComponent.prototype.initiateBuilder = function () {
        var _this = this;
        if (this.appName) {
            this.getApp({ url: this.appName });
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
                this._builderService.createApp(json)
                    .subscribe(function (response) {
                    var app = new __WEBPACK_IMPORTED_MODULE_4__models_model__["a" /* App */]().deserialize(response);
                    _this.activeSince = moment(response.createdAt).fromNow().replace('ago', '').trim();
                    localStorage.setItem('project', app._id);
                    localStorage.removeItem('temp_name');
                    localStorage.removeItem('temp_type');
                    var calc_name = localStorage.getItem('calc_name');
                    if (calc_name) {
                        app.name = calc_name;
                        _this.addCalcName(app);
                    }
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
                    var app = new __WEBPACK_IMPORTED_MODULE_4__models_model__["a" /* App */]().deserialize(response);
                    //app.setTemplateName('home_loan_calculator');
                    _this.jsonBuilderHelper.setTemplate(app);
                    _this.initializeJqueryStuff();
                    _this.oldCalcName = _this.jsonBuilderHelper.getJSONBuilt().name;
                    _this.activeSince = moment(response.updatedAt).fromNow().replace('ago', '').trim();
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
    BuilderComponent.prototype.changeTemplate = function (projectId, templateName) {
        var _this = this;
        this._builderService.changeTemplate(projectId, templateName).subscribe(function (response) {
            if (jQuery.isEmptyObject(response)) {
                _this._router.navigate(['/dashboard']);
            }
            else {
                localStorage.removeItem('temp_name');
                window.location.reload(true);
            }
        }, function (error) {
            _this._router.navigate(['/dashboard']);
        });
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
        // if (jQuery(window).width() > 992) { var minWinWidth = correctedViewportW() - 544; }
        // else { var minWinWidth = correctedViewportW() - 327; }
        /* On click Property Arrow the div hide sidebar container */
        jQuery(document).on('click', '.prop-arrow', function (e) {
            var container = jQuery('#sidebar');
            var zoomFactor = 0;
            if (jQuery(window).width() > 1850) {
                zoomFactor = 0.97;
            }
            else if (jQuery(window).width() < 992) {
                var zoomFactor = 1;
            }
            else {
                zoomFactor = 0.93;
            }
            container.animate({
                right: "-285px",
                easing: 'linear'
            }, 300);
            jQuery('#sidebar').addClass('properties-close');
            /* for canvas horizontal scroll */
            if (jQuery(window).width() > 992) {
                var minWinWidth = jQuery(window).width() - 264;
            }
            else {
                var minWinWidth = jQuery(window).width() - 20;
            }
            jQuery(".template-section").animate({ width: minWinWidth }, 300);
            jQuery("temp").animate({ width: minWinWidth }, 300);
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                jQuery("temp").css('transform', 'scale(' + zoomFactor + ')');
            }
            else {
                jQuery("temp").animate({ 'zoom': zoomFactor }, 300);
            }
            jQuery(".template-section").css('overflow-x', "hidden");
            jQuery(".building").animate({ width: minWinWidth }, 300);
            /*end*/
        });
        jQuery(document).on('click', '.properties-close', function () {
            var container = jQuery('#sidebar');
            if (jQuery(window).width() > 1850) {
                var zoomFactor = 0.8;
            }
            else if (jQuery(window).width() < 992) {
                var zoomFactor = 1;
                jQuery('.mobile-prop-cross-icon').show();
                jQuery('.properties-modal-backdrop').show();
            }
            else {
                var zoomFactor = 0.7;
            }
            container.animate({
                right: "0px",
                easing: 'linear'
            }, 300);
            jQuery(this).removeClass('properties-close');
            /* for canvas horizontal scroll */
            self.canvasScroll();
            if (jQuery(window).width() > 992) {
                var minWinWidth = jQuery(window).width() - 550;
            }
            else {
                var minWinWidth = jQuery(window).width() - 20;
            }
            jQuery(".template-section").animate({ width: minWinWidth }, 300);
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                jQuery("temp").css('transform', 'scale(' + zoomFactor + ')');
            }
            else {
                jQuery("temp").css('zoom', zoomFactor);
            }
            jQuery(".building").animate({
                width: minWinWidth
            }, 300);
            /*end*/
        });
        jQuery(window).on("resize", function () {
            self.canvasScroll();
            //buildHeight();
        });
        jQuery(document).on('click', '#preview_calc', function () { return _this.onPreview(); });
        jQuery(document).on('click', '.preview_copy', function () {
            clipboard.copy(self.srcUrl);
            window.toastNotification('Link Copied');
        });
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation')
            this.recommendationService.getRecomendedResult();
        if (localStorage.getItem('tab-selected')) {
            this.selectedSec = localStorage.getItem('tab-selected');
            localStorage.removeItem('tab-selected');
        }
    };
    BuilderComponent.prototype.openProperties = function () {
        var container = jQuery('#sidebar');
        var zoomFactor = 0;
        if (jQuery(container).hasClass('properties-close')) {
            container.animate({
                right: "0px",
                easing: 'linear'
            }, 300);
            if (jQuery(window).width() > 1850) {
                var zoomFactor = 0.8;
            }
            else if (jQuery(window).width() < 992) {
                var zoomFactor = 1;
            }
            else {
                var zoomFactor = 0.7;
            }
            jQuery(container).removeClass('properties-close');
            this.canvasScroll();
            if (jQuery(window).width() > 992) {
                var minWinWidth = jQuery(window).width() - 550;
            }
            else {
                var minWinWidth = jQuery(window).width() - 20;
            }
            jQuery(".template-section").animate({ width: minWinWidth }, 300);
            //jQuery("temp").animate({ width: minWinWidth}, 200);
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                jQuery("temp").css('transform', 'scale(' + zoomFactor + ')');
            }
            else {
                jQuery("temp").css('zoom', zoomFactor);
            }
            jQuery(".building").animate({ width: minWinWidth }, 300);
        }
        else {
            var container = jQuery('#sidebar');
            if (jQuery(window).width() > 1850) {
                zoomFactor = 0.97;
            }
            else if (jQuery(window).width() < 992) {
                var zoomFactor = 1;
            }
            else {
                zoomFactor = 0.93;
            }
            container.animate({
                right: "-285px",
                easing: 'linear'
            }, 300);
            jQuery('#sidebar').addClass('properties-close');
            /* for canvas horizontal scroll */
            if (jQuery(window).width() > 992) {
                var minWinWidth = jQuery(window).width() - 264;
            }
            else {
                var minWinWidth = jQuery(window).width() - 20;
            }
            //jQuery(".template-section").css('width', minWinWidth);
            jQuery(".template-section").animate({ width: minWinWidth }, 300);
            //jQuery("temp").animate({ width: minWinWidth - 350}, 300);
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                jQuery("temp").css('transform', 'scale(' + zoomFactor + ')');
            }
            else {
                jQuery("temp").css('zoom', zoomFactor);
            }
            jQuery(".template-section").css('overflow-x', "hidden");
            jQuery(".building").animate({ width: minWinWidth }, 300);
        }
    };
    BuilderComponent.prototype.openMobileProperties = function () {
        console.log("enter");
        var container = jQuery('#sidebar');
        container.animate({
            right: "0px",
            easing: 'linear'
        }, 300);
        /* for canvas horizontal scroll */
        var minWinWidth = jQuery(window).width() - 20;
        jQuery(".template-section").animate({ width: minWinWidth }, 300);
        jQuery(".template-section").css('overflow-x', "hidden");
        jQuery(".building").animate({ width: minWinWidth }, 300);
        jQuery('.mobile-prop-cross-icon').css('display', 'block');
        jQuery('.properties-modal-backdrop').css('display', 'block').addClass('fade in');
    };
    BuilderComponent.prototype.zoom = function (action) {
        var maxZoom = 2;
        var minZoom = 0.2;
        var zoomdiv = "temp";
        var animationSpeed = "1000";
        if (action === 'in') {
            this.currentZoom = Number(jQuery('temp').css("zoom"));
            if (this.currentZoom < maxZoom) {
                jQuery(zoomdiv).animate({
                    'zoom': this.currentZoom += this.zoomfactor
                }, animationSpeed);
            }
        }
        if (action === 'out') {
            this.currentZoom = jQuery('temp').css("zoom");
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
                    var zoomValue = 0.8;
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
        // let self = this;
        // jQuery(".template-section").toggleClass('move-canvas');
        // //jQuery(".mCSB_container").kinetic();
        // jQuery(document).on('mousemove', '.mCSB_container', function (e: any) {
        //     if (self.curDown === true) {
        //         var topCanvas = jQuery('.mCSB_container').position().top;
        //         var leftCanvas = jQuery('.mCSB_container').position().left;
        //         var axisLeft = (e.pageX - self.curXPos);
        //         var axisTop = (e.pageY - self.curYPos);
        //     }
        // });
        // jQuery(document).on('mousedown', '.mCSB_container', function (e: any) {
        //     self.curDown = true;
        //     self.curYPos = e.pageY;
        //     self.curXPos = e.pageX;
        //     // e.preventDefault();
        // });
        // window.addEventListener('mouseup', function (e: any) { console.log('mouseup'); self.curDown = false; });
        jQuery("temp").draggable();
    };
    BuilderComponent.prototype.canvasScroll = function () {
        /* for canvas horizontal scroll */
        var winWidth = jQuery(window).width() - 315;
        var winHeight = jQuery(window).height() - 60;
        //jQuery("temp").css('width', winWidth);
        jQuery(".template-section").css('position', "fixed");
        jQuery(".template-section").css('height', winHeight);
        /*end*/
    };
    BuilderComponent.prototype.onPreview = function () {
        localStorage.setItem('template', JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
        window.open('/preview', '_blank');
    };
    BuilderComponent.prototype.onPublish = function ($event) {
        var that = this;
        var errorResults = this.formulaService.checkIfFormulaWouldGiveSyntaxError();
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
                message: 'There are mistakes in ' + errorResults + ' due to change in questions ordering.<br>Are you sure you want to proceed?',
                callback: function (result) {
                    if (result === true) {
                        that.Publish($event);
                    }
                }
            });
        }
        else if (this.formulaService.getAllInvalidFormulas() != undefined && this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical') {
            bootbox.confirm({
                size: 'small',
                message: "\n                    <div class=\"bootbox-body-right\">\n                        <p>\n                            The default values of some of the questions used in the formula of " + this.formulaService.getAllInvalidFormulas() + " are\n                            not applied. In this case the result will not be appropriate.\n                            Are you sure you want to proceed?\n                        </p>\n                    </div>\n                ",
                buttons: {
                    'cancel': {
                        label: 'No',
                        className: 'btn btn-cancel btn-hover'
                    },
                    'confirm': {
                        label: 'Yes',
                        className: 'btn btn-ok btn-hover'
                    }
                },
                callback: function (result) {
                    if (result === true) {
                        that.Publish($event);
                    }
                    else {
                        that.jsonBuilderHelper.setSelectedModel('Page');
                        that.jsonBuilderHelper.setSelectedPage(that.jsonBuilderHelper.getJSONBuilt().pages[2]);
                        var position = jQuery('.page_2').position().top + jQuery(".template-section").scrollTop();
                        jQuery('.template-section .mCSB_container').animate({ scrollTop: position }, 1000);
                    }
                }
            });
        }
        else {
            this.Publish($event);
        }
    };
    BuilderComponent.prototype.Publish = function ($event) {
        var _this = this;
        var button = jQuery($event.target);
        button.html('PUBLISHING');
        button.addClass('loading');
        button.attr('disabled', true);
        this._builderService.publishApp({
            id: this.jsonBuilderHelper.getJSONBuilt()._id,
            url: this.jsonBuilderHelper.getJSONBuilt().url,
            unsaved: this._itemTrackService.getUnSavedData()
        })
            .subscribe(function (response) {
            if (jQuery.isEmptyObject(response)) {
                _this._router.navigate(['/dashboard']);
            }
            else {
                if (_this.jsonBuilderHelper.getJSONBuilt().mode === 'PRIVATE') {
                    _this.onModeChange(_this.jsonBuilderHelper.getJSONBuilt().mode);
                    _this.srcUrl = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].APP_EXTENSION + '/' + _this.jsonBuilderHelper.getJSONBuilt().url;
                    bootbox.dialog({
                        message: "\n                           <div class=\"text-center live-modal\">\n                                <span class=\"icon-play-next\"><i class=\"material-icons\">queue_play_next</i></span>\n                                <div class=\"live-head\">Your Calculator is Live</div>\n                                <img class=\"img-style hide\" src=\"assets/images/goLivePopup.png\"/>\n                                <div class=\"\">\n                                    <div class=\"live-subhead link-style\">\n                                        <span>\n                                            To preview, open this link in another browser.\n                                        </span>\n                                        <a class=\"live-url preview_copy\">Copy Link</a>\n                                    </div>\n                                    <div class=\"live-subhead selected-link\">\n                                        <span class=\"hide\">Your public calculator can be viewed here:</span>\n                                        <div class=\"live-url url-style\">" + _this.srcUrl + "</div>\n                                    </div>\n                                    <!--<img src=\"assets/images/gocopyPopup.png\"/>-->\n                                </div>\n                                <div class=\"table-responsive hide\">\n                                    <table class=\"table\">\n                                        <thead>\n                                            <tr>\n                                                <th>\n                                                    <div class=\"live-subhead link-style\">\n                                                        <span>\n                                                            To preview, open this link in another browser.\n                                                        </span>\n                                                        <a class=\"live-url preview_copy\">Copy Link</a>\n                                                    </div>\n                                                </th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"live-subhead\">\n                                                        <span class=\"hide\">Your public calculator can be viewed here:</span>\n                                                        <div class=\"live-url url-style\">" + _this.srcUrl + "</div>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                            "
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
            right: "-285px",
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
        jQuery("temp").animate({ width: minWinWidth }, 300);
        jQuery(".template-section").css('overflow-x', "hidden");
        jQuery(".building").animate({ width: minWinWidth }, 300);
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
    BuilderComponent.prototype.onModeChange = function (mode) {
        var _this = this;
        if (mode === 'PUBLIC') {
            mode = 'PRIVATE';
        }
        else {
            mode = 'PUBLIC';
        }
        this._dashboardService.changeAppMode(this.jsonBuilderHelper.getJSONBuilt()._id, mode)
            .subscribe(function (response) {
            _this.jsonBuilderHelper.getJSONBuilt().mode = mode;
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
        console.log('hello this isss something here');
        this.isAnalyticsAvailable = this._featureAuthService.features.analytics;
        if (!this.isAnalyticsAvailable) {
            jQuery('#premiumModal').modal('show');
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
        if (comp == 'config')
            window.location.hash = '#' + this.selectedConfigComponent;
        if (comp == 'build')
            window.location.hash = '#' + this.jsonBuilderHelper.getSelectedPage().type;
        if (comp == 'analytics')
            window.location.hash = '#overview';
        this.selectedSec = comp;
    };
    BuilderComponent.prototype.OnConfigCompoentSelect = function (component) {
        this.selectedConfigComponent = component;
        window.location.hash = '#' + component;
    };
    BuilderComponent.prototype.ngOnDestroy = function () {
        window.Intercom('update', { hide_default_launcher: false });
    };
    BuilderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'sd-builder',
            template: __webpack_require__(887),
            styles: [
                __webpack_require__(886),
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_index__["d" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_services_index__["d" /* SubDomainService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_builder_service__["a" /* BuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_builder_service__["a" /* BuilderService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__templates_services_DefaultJSON_service__["a" /* DefaultJSON */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__templates_services_DefaultJSON_service__["a" /* DefaultJSON */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_JSONUpdateItemTracker_service__["a" /* JSONItemTracker */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_JSONUpdateItemTracker_service__["a" /* JSONItemTracker */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_index__["f" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_services_index__["f" /* DashboardService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__services_formula_service__["a" /* FormulaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_formula_service__["a" /* FormulaService */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_index__["c" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_services_index__["c" /* FeatureAuthService */]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_index__["g" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_services_index__["g" /* CookieService */]) === 'function' && _l) || Object, (typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_index__["b" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_services_index__["b" /* Script */]) === 'function' && _m) || Object, (typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_9__templates_services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__templates_services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _o) || Object])
    ], BuilderComponent);
    return BuilderComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());


/***/ },

/***/ 879:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BuilderParentComponent; });
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
    function BuilderParentComponent(_cookieService, _featureAuthService) {
        this._cookieService = _cookieService;
        this._featureAuthService = _featureAuthService;
    }
    BuilderParentComponent.prototype.ngOnInit = function () {
        if (this._cookieService.readCookie('storage'))
            this._featureAuthService.getAllFeatureAccess();
    };
    BuilderParentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-builder',
            template: "\n    <router-outlet></router-outlet>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["g" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["g" /* CookieService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["c" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["c" /* FeatureAuthService */]) === 'function' && _b) || Object])
    ], BuilderParentComponent);
    return BuilderParentComponent;
    var _a, _b;
}());


/***/ },

/***/ 880:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PreviewComponent; });
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
    function PreviewComponent(subDomainService, cdr) {
        this.subDomainService = subDomainService;
        this.cdr = cdr;
        this.className = 'desktop';
    }
    PreviewComponent.prototype.ngOnInit = function () {
        this.src = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_EXTENSION + '/preview/previewFrame';
        var template = localStorage.getItem('template');
        if (template || this.json) {
            var app = this.json || JSON.parse(template);
            jQuery('meta[name=description]').attr('content', app.description);
            document.title = app.title;
            jQuery('#favicon').attr('href', app.favicon);
        }
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], PreviewComponent.prototype, "json", void 0);
    PreviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-preview',
            template: "\n    <div class=\"responsive-menu\" (mouseenter)=\"onMouseEnter()\">\n        <span class=\"title\">Resize Template: </span>\n        <div class=\"icon-block\">\n            <a href=\"javascript:void(0);\" (click)=\"switchView('desktop')\" [class.active-view] = \"className==='desktop'\">\n                <i class=\"material-icons\">desktop_mac</i> <span>|</span></a>\n            <a href=\"javascript:void(0);\" (click)=\"switchView('tablet')\"  [class.active-view] = \"className==='tablet'\">\n                <i class=\"material-icons\">tablet_mac</i><span>|</span> </a>\n            <a href=\"javascript:void(0);\" (click)=\"switchView('mobile')\"  [class.active-view] = \"className==='mobile'\">\n                <i class=\"material-icons\">smartphone</i></a>\n        </div>\n    </div>\n    <div id=\"main-profile\">\n        <iframe\n        (mouseenter)=\"onMouseEnter()\" \n        (mouseleave)=\"onMouseLeave()\"\n        id=\"mobile-iframe\"\n        [ngClass]=\"{\n            desktop: className==='desktop', \n            tablet: className==='tablet',\n            mobile: className==='mobile'\n        }\" \n        [src]=\"src | safeUrl\" align=\"middle\">\n        </iframe>\n    </div>",
            styles: ["\n    .responsive-menu {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu a {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu a span {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view i{\n        color: #fb545b;\n    }\n    .responsive-menu span.title {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n    }\n\n    .responsive-menu div {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .desktop {\n        width: 100%;\n        height: 100%;\n    }\n\n    .mobile {\n        width: 375px;\n        height: 570px;\n        margin: 1% auto;\n        height:570px;\n        border: 1px solid #dcdddf;\n    }\n\n    .tablet {\n        width: 775px;\n        height: 100%;\n        margin: 0 auto;\n        border: 1px solid #dcdddf;\n    }\n"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* SubDomainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ChangeDetectorRef */]) === 'function' && _b) || Object])
    ], PreviewComponent);
    return PreviewComponent;
    var _a, _b;
}());


/***/ },

/***/ 881:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SampleCodeComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-sample-code',
            template: "\n    <div id=\"main-profile\">\n        <iframe\n        [class.full-page]=\"pageType==='full-page'\"\n        [class.small-page]=\"pageType==='small-page'\"\n        [src]=\"src | safeUrl\" align=\"middle\">\n        </iframe>\n    </div>",
            styles: ["\n    .responsive-menu {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu a {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu a span {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view i{\n        color: #fb545b;\n    }\n    .responsive-menu span.title {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n    }\n\n    .responsive-menu div {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .full-page {\n        width: 100%;\n        height: 100%;\n    }\n\n    .small-page {\n        width: 375px;\n        margin: 0 auto;\n        height: 50%;\n        border: 1px solid #dcdddf;\n    }\n"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* SubDomainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], SampleCodeComponent);
    return SampleCodeComponent;
    var _a, _b;
}());


/***/ },

/***/ 882:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__site_builder_builderParent_component__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__site_builder_builder_component__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__site_templates_templateAll_preview_component__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__site_templates_templateAll_template_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__site_templates_templateAll_sampleCode_component__ = __webpack_require__(881);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BUILDER_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return PREVIEW_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return SAMPLE_ROUTES; });





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


/***/ },

/***/ 886:
/***/ function(module, exports) {

module.exports = "html {\n    margin: 0px;\n    padding: 0px;\n}\n\nbody {\n    font-family: 'montserratregular';\n    color: #8e989f;\n}\n\nul,\nli {\n    list-style: none;\n}\n\na:focus,\nimg:focus,\nbutton:focus,\ninput:focus,\ntextarea:focus,\nselect:focus {\n    outline: none;\n    text-decoration: none;\n}\n\na:hover,\na:focus {\n    text-decoration: none;\n}\n\nlabel {\n    margin-bottom: 0px;\n    font-weight: normal;\n}\n\ninput[type=\"text\"] {\n    height: auto;\n}\n\n.no-padding {\n    padding: 0px;\n}\n\n.path {\n    stroke-dasharray: 1000;\n    stroke-dashoffset: 1000;\n    animation: draw 2s 0s linear forwards;\n}\n\n@keyframes draw {\n    from {\n        stroke-dashoffset: -1000;\n    }\n    to {\n        stroke-dashoffset: 0;\n    }\n}\n\n.sidebar {\n    /* display: none; */\n}\n\nbutton {\n    height: initial;\n}\n\na:hover,\na:focus {\n    text-decoration: none;\n}\n\n.modal-dialog {\n    margin: 90px auto;\n}\n\n.editor-modal .modal-header {\n    padding: 11px 15px;\n    background: #FC545B;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.editor-modal .modal-title {\n    margin: 0;\n    line-height: 1.42857143;\n    font-size: 13px;\n    text-transform: uppercase;\n    color: #fff;\n}\n\n.editor-modal button.close {\n    color: #fff;\n    opacity: 1;\n    font-weight: lighter;\n    position: relative;\n    top: -3px;\n    left: 8px;\n}\n\n.editor-modal .modal-footer {\n    padding: 15px;\n    text-align: right;\n    border-top: none;\n}\n\n.editor-modal .bootbox-body {\n    color: #666666;\n    font-size: 13px;\n}\n\n.editor-modal .btn.btn-basic {\n    color: #fb545b;\n    border: 1px solid #fb545b;\n    font-size: 12px;\n    padding: 5px 50px;\n    transition: all 0.5s ease;\n}\n\n.editor-sidebar.sidebar {\n    position: fixed;\n    top: 60px;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    padding: 0px;\n    background-color: #f6f8f9;\n    border-right: 1px solid #dae2e6;\n    width: 235px;\n}\n\n.editor-template-tabs {\n    margin-left: 235px;\n    position: relative;\n    top: 97px;\n    bottom: 0;\n    left: 0;\n    background: #fff;\n    overflow: hidden;\n}\n.editor-template-tabs.nomargin {\n    margin-left: 0px;\n}\n.editor-template-tabs.minH {\n    min-height: 91vh;\n}\nconfig {\n    min-height: 95vh;\n    width: 100%;\n    float: left;\n}\n\n#build {\n    width: 100%;\n    float: left;\n}\n\n.editor-navheader .navbar-brand {\n    padding: 10px 32px;\n    width: 232px;\n}\n\n.editor-accordion {\n    float: left;\n    width: 100%;\n}\n\n.template-section {\n    padding: 0px;\n    padding-bottom: 0px;\n    position: fixed;\n    /*  overflow-y: scroll; */\n    float: left;\n    background: url('./app/site/+builder/assets/images/background.png');\n    top: 97px;\n    padding-right: 0px;\n    -webkit-overflow-scrolling: touch;\n}\n\n.editor-accordion .panel {\n    border: none;\n    box-shadow: none;\n}\n\n.editor-accordion .panel-heading {\n    padding: 0px;\n    background: #f5f8f8;\n}\n\n.editor-accordion .panel-title {\n    border-bottom: 1px solid #e9eef0;\n}\n\n.panel-group .panel + .panel {\n    margin-top: 0px;\n}\n\n.editor-accordion .panel-heading .panel-title a {\n    font-size: 12px;\n    display: block;\n    margin-left: 15px;\n    border-left: 1px solid #e9eef0;\n    padding: 15px 0px;\n    color: #62696d;\n    margin-top: 0px;\n    text-transform: uppercase;\n    font-family: 'montserratregular';\n}\n\n.panel-title i.corner {\n    display: inline-block;\n    position: relative;\n    left: -8px;\n    vertical-align: middle;\n    font-size: 14px;\n    color: #bec5c9;\n    top: -2px;\n}\n\n.panel-title i.main-ic {\n    font-size: 16px;\n    vertical-align: text-bottom;\n    margin-right: 4px;\n    color: #bec5c9;\n}\n\n\n/*top bar*/\n\ninput.ed-projectname {\n    border: none;\n    border-left: 1px solid #dae2e6;\n    color: #8e989f;\n    float: left;\n    font-size: 16px;\n    margin-top: 13px;\n    padding-bottom: 4px;\n    padding-top: 5px;\n    padding-left: 20px;\n    width: 36%;\n    font-family: \"montserratlight\";\n    margin-bottom: 15px;\n}\n\ninput.ed-projectname:hover {\n    color: #fb545b;\n}\n\n.ed-projectname {\n    border-left: 1px solid #dae2e6;\n    color: #fb545b;\n    float: left;\n    font-size: 18px;\n    margin-top: 13px;\n    padding-bottom: 5px;\n    padding-top: 4px;\n    padding-left: 20px;\n}\n\n.navbar-default {\n    background: #fff;\n    border: none;\n    padding-bottom: 0px;\n    margin: 0px;\n    border-bottom: 1px solid #dae2e6;\n}\n\n.navbar-rightside {\n    float: right;\n    margin-top: 13px;\n    margin-right: 20px;\n}\n\n.navbar-rightside .name-dropdown-wrapper.btn-group {\n    width: auto;\n}\n\n.navbar-rightside .name-dropdown-wrapper .dropdown-menu {\n    top: 45px;\n    position: absolute;\n}\n\n.navbar-rightside .btn-basic {\n    margin-right: 10px;\n}\n\n.name-dropdown-wrapper.btn-group {\n    margin-top: 10px;\n}\n\n.navbar-leftside label {\n    font-size: 13px;\n    color: #8e989f;\n    font-weight: normal;\n    cursor: pointer;\n    font-family: 'montserratregular';\n}\n\n.navbar-leftside label i:last-child {\n    margin-left: 10px;\n    color: #bec5c9;\n    line-height: 30px;\n    margin: 0px 4px;\n}\n\n.navbar-leftside .help-tip:hover label i:last-child {\n    color: #fb545b;\n}\n\n.blue-text {\n    color: #fb545b;\n}\n\n.navbar-leftside label i {\n    font-size: 18px;\n    position: relative;\n    top: 1px;\n    margin-right: 5px;\n}\n\n.navbar-leftside {\n    border-left: 1px solid #dae2e6;\n    color: #fb545b;\n    font-size: 18px;\n    margin-left: 5px;\n    padding-bottom: 0px;\n    padding-left: 15px;\n    padding-top: 0px;\n}\n\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    margin-top: 10px;\n}\n\n.navbar .btn.btn-basic {\n    border-color: #fb545b;\n    background: #fb545b;\n    color: #fff;\n    transition: all 0.5s ease;\n}\n\n.navbar .btn.btn-basic:not(.btn-menu):hover {\n    background: #fdb6b9;\n    color: #fb545b;\n    border-color: #fdb6b9;\n}\n\n.navbar .btn.btn-basic.btn-menu {\n    border: 1px solid #dae2e6;\n    height: 24px;\n    padding-left: 5px;\n    padding-right: 5px;\n    background: #fff;\n}\n\n.btn:hover,\n.btn:focus,\n.btn.focus {\n    color: inherit;\n    outline: none !important;\n    background: none;\n    box-shadow: none;\n}\n\n.navbar-rightside .btn-basic {\n    margin-right: 10px;\n}\n\n.btn.btn-basic {\n    color: #fb545b;\n    border: 1px solid #dae2e6;\n    font-size: 13px;\n    margin-top: 0px;\n    padding: 5px 10px;\n}\n\n.btn-menu i {\n    font-size: 14px;\n    color: #bec5c9;\n}\n\n.btn-flat {\n    border-radius: 0px;\n}\n\n.disable-btn {\n    border: 1px solid #dae2e6;\n    color: #bec5c9;\n}\n\n.disable-btn:hover {\n    border: 1px solid #dae2e6;\n    color: #bec5c9;\n}\n\n.navbar-leftside .blue-text {\n    color: #fb545b !important;\n}\n\n.sidebar-layout {\n    height: 100vh;\n    border: 1px solid #dae2e6;\n    border-right: 0px;\n    background: #f6f8f9;\n    z-index: 99;\n}\n\n.sidebar-offcanvas {\n    padding-right: 0px;\n    width: 315px;\n    top: 60px;\n    z-index: 9;\n    padding-left: 0px;\n    right: 0px;\n}\n\n.position-right {\n    right: 0px;\n}\n\n.sidebar-topselector {\n    border-bottom: 1px solid #dae2e6;\n    font-size: 13px;\n    color: #8e989f;\n    /* margin: 0px -15px; */\n}\n\n.navbar .btn-basic {\n    font-size: 11px;\n    font-family: 'montserratregular';\n}\n\n.btn-basic3 {\n    padding: 7px 10px;\n    margin-right: 5px;\n    float: left;\n}\n\n.editor-accordion .ed-sidebar:last-child {\n    padding-bottom: 20px;\n}\n\n.ellipsis {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.open-sidebar {\n    padding: 5px 15px;\n    cursor: pointer;\n    float: right;\n    border: 1px solid #dae2e6;\n    margin-left: 40px;\n    margin-top: 0px;\n    background: #f6f8f9;\n    line-height: 1;\n    color: #fff;\n}\n\n.open-sidebar i {\n    font-size: 18px;\n    color: #8e989f;\n}\n\n.editor .type-details:last-child {\n    border-bottom: none;\n}\n\n.panel-heading a.collapsed:after {\n    content: '';\n}\n\n.panel-heading a:after {\n    content: '';\n}\n\n.ed-projectname.active-text {\n    color: #fb545b;\n}\n\n.navbar-fixed-top .nav-padding {\n    padding-left: 34px;\n    padding-right: 20px;\n}\n\n\n/* loader animation start */\n\n.elem {\n    height: 14px;\n    display: block;\n    transition-property: transform;\n    transition-duration: 1s;\n}\n\n.elem-rotate {\n    animation-name: rotate;\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    color: #fb545b;\n}\n\n.navbar .btn.btn-basic.btn-menu.btn-menu.green-bg {\n    background: rgb(26, 188, 156);\n    border: 1px solid rgb(26, 188, 156);\n}\n\n.btn-menu .elem i.green-color {\n    color: #fff;\n}\n\n.btn-menu .elem.elem-rotate i {\n    color: #fb545b;\n}\n\n@keyframes rotate {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n\n/* loader animation end */\n\nH\n/* Start: name Dropdown */\n\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n    padding-top: 8px;\n    font-size: 13px;\n    color: #8e989f;\n    font-family: montserratlight;\n    border: none;\n}\n\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle i.material-icons {\n    font-size: 18px;\n    color: #fb545b;\n    float: left;\n}\n\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle span.name-title {\n    float: left;\n    width: 72%;\n    min-width: 69px;\n    text-align: left;\n}\n\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle:hover,\n.name-dropdown-wrapper button.btn.btn-default.dropdown-toggle:focus {\n    background: none !important;\n    box-shadow: none !important;\n    border: 0px !important;\n}\n\n.name-dropdown-wrapper .dropdown-menu {\n    padding: 10px 0 10px;\n    z-index: 1;\n}\n\n.name-dropdown-wrapper .dropdown-menu {\n    top: 31px;\n    left: -78px;\n    min-width: 180px;\n    font-size: 12px;\n    border-radius: 0px;\n    background: #62696d;\n    border-radius: 4px !important;\n    border: none;\n    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\n    display: none;\n}\n\n.name-dropdown-wrapper:hover .dropdown-menu {\n    display: block;\n}\n\n.name-dropdown-wrapper .dropdown-menu:before {\n    position: absolute;\n    top: -7px;\n    left: 76px;\n    display: inline-block;\n    border-right: 11px solid transparent;\n    border-bottom: 12px solid #62696d;\n    border-left: 11px solid transparent;\n    border-bottom-color: #62696d;\n    content: '';\n}\n\n.name-dropdown-wrapper .dropdown-menu > .name-list {\n    float: left;\n    width: 100%;\n}\n\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a:hover i.material-icons,\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a:focus i.material-icons {\n    color: #fff;\n}\n\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a {\n    color: #fff;\n    padding: 5px 13px !important;\n    text-transform: capitalize;\n    font-family: montserratregular;\n    float: left;\n    width: 100%;\n    font-size: 12px !important;\n}\n\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a span.name-list-icon {\n    float: none;\n    width: auto;\n    margin-right: 10px;\n    display: inline-block;\n    vertical-align: middle;\n    padding: 1px 0px;\n    line-height: 1;\n}\n\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a i.material-icons {\n    font-size: 12px;\n    color: #fff;\n    padding: 0;\n}\n\n.name-dropdown-wrapper .dropdown-menu > .name-list li > a span.name-list-title {\n    float: none;\n    font-size: 12px;\n    color: #fff;\n    line-height: 1px;\n}\n\n.navbar .name-dropdown-wrapper .dropdown-menu .name-list li > a:hover,\n.navbar.navbar-default .name-dropdown-wrapper .dropdown-menu .name-list li > a:hover {\n    background: #71787b;\n    color: #fff;\n}\n\n.navbar .dropdown-menu .name-list li > a:focus,\n.navbar.navbar-default .name-dropdown-wrapper .dropdown-menu .name-list li > a:focus {\n    color: #fff;\n    background-color: transparent;\n}\n\n.name-dropdown-wrapper .dropdown-menu > li > a.hvr-sweep-to-right::before {\n    background: #fa8f93 none repeat scroll 0 0 !important;\n}\n\n.name-dropdown-border {\n    float: left;\n    width: 87%;\n    margin: 5px 12px;\n    border-top: 1px solid #7a8185!important;\n}\n\n.name-dropdown-wrapper .dropdown-menu > .company-list {\n    float: left;\n    width: 100%;\n}\n\n.name-dropdown-wrapper .dropdown-menu > .company-list li > a {\n    color: #fff;\n    padding: 5px 13px !important;\n    text-transform: capitalize;\n    font-family: montserratregular;\n    float: left;\n    width: 100%;\n    font-size: 12px !important;\n}\n\n.name-dropdown-wrapper .dropdown-menu > .company-list li {\n    line-height: 24px;\n}\n\n.name-dropdown-wrapper .dropdown-menu > .company-list li span.company-list-title {\n    float: left;\n}\n\n.name-dropdown-wrapper .dropdown-menu > .company-list li span.company-selected {\n    float: right;\n}\n\n.name-dropdown-wrapper .dropdown-menu > .company-list li.active a span.company-selected i.material-icons,\n.name-dropdown-wrapper .dropdown-menu > .company-list li a span.company-selected i.material-icons {\n    font-size: 12px;\n    position: relative;\n    top: -2px;\n}\n\n.navbar .dropdown-menu .company-list .active > a,\n.navbar.navbar-default .dropdown-menu .company-list .active > a {\n    background-color: transparent;\n    color: #fff;\n}\n\n.navbar .dropdown-menu .company-list li > a:hover,\n.navbar.navbar-default .dropdown-menu .company-list li > a:hover {\n    color: #fff;\n    background-color: transparent;\n}\n\n.navbar .dropdown-menu .company-list li > a:focus,\n.navbar.navbar-default .dropdown-menu .company-list li > a:focus {\n    color: #fff;\n    background-color: transparent;\n}\n\n\n/*.navbar.navbar-default .dropdown-menu .company-list li > a:hover {\n            background: #71787b;\n        }*/\n\n.name-dropdown-wrapper .dropdown-menu div > li > a.hvr-sweep-to-right::before {\n    background: #71787b none repeat scroll 0 0;\n}\n\n.name-dd-minh {\n    min-height: 33px;\n}\n\n\n/* End: name Dropdown */\n\n\n/*helptip*/\n\n.help-tip i {\n    color: #bec5c9;\n    font-size: 13px;\n    line-height: 15px;\n    cursor: pointer;\n}\n\n.help-checktip {\n    float: left;\n    background-color: #464655;\n    color: #fff;\n    padding: 5px;\n    width: 180px;\n    font-size: 11px;\n    border-radius: 4px;\n    position: absolute;\n    top: -39px;\n    left: 39px;\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    visibility: hidden;\n    box-shadow: 0 1px 1px #f0f0f1;\n    text-align: center;\n    left: -83px;\n}\n\n.navbar-rightside .help-checktip {\n    float: left;\n    background-color: #62696d;\n    color: #fff;\n    padding: 6px 5px;\n    font-size: 11px;\n    border-radius: 4px;\n    position: absolute;\n    top: 35px;\n    left: 39px;\n    border: none;\n    width: 77px;\n    border-radius: 3px;\n    visibility: hidden;\n    box-shadow: 0 0px 2px 1px #b4b4b4;\n    text-align: center;\n    left: -23px;\n}\n\n.navbar-rightside .help-checktip:before {\n    content: '';\n    position: absolute;\n    top: -10px;\n    left: 50%;\n    margin-left: -8px;\n    width: 10px;\n    height: 10px;\n    border-bottom: 6px solid #62696d;\n    border-right: 6px solid transparent;\n    border-left: 6px solid transparent;\n    border-top: none;\n}\n\n.navbar-rightside .help-tip i {\n    line-height: 15px;\n}\n\n.help-checktip:before {\n    content: '';\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -8px;\n    width: 10px;\n    height: 10px;\n    border-top: 6px solid #464655;\n    border-right: 6px solid transparent;\n    border-left: 6px solid transparent;\n}\n\n.help-tip {\n    margin: 1px 7px;\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n    margin: 0px;\n}\n\n.help-tip:hover > .help-checktip {\n    visibility: visible;\n    z-index: 999;\n}\n\n.name-dropdown-wrapper.btn-group {\n    float: none;\n    width: auto;\n}\n\n.properties-tag {\n    font-size: 13px;\n    vertical-align: super;\n    margin-left: 10px;\n}\n\n.properties-window {\n    position: absolute;\n    top: 37%;\n    left: 26px;\n    z-index: 999;\n    width: 260px;\n    -webkit-transform: rotate(90deg);\n    -webkit-transform-origin: left top;\n    -moz-transform: rotate(90deg);\n    -moz-transform-origin: left top;\n    -ms-transform: rotate(90deg);\n    -ms-transform-origin: left top;\n    -o-transform: rotate(90deg);\n    -o-transform-origin: left top;\n    transform: rotate(90deg);\n    transform-origin: left top;\n    display: none;\n}\n\n.properties-window i {\n    font-size: 20px;\n    color: #bec5c9;\n}\n\n.properties-close {\n    cursor: pointer;\n}\n\n.properties-close .main-side,\n.properties-close .prop-arrow {\n    display: none;\n}\n\n\n/* Sweep To Right */\n\n.hvr-sweep-to-right {\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -moz-osx-font-smoothing: grayscale;\n    position: relative;\n    -webkit-transition-property: color;\n    transition-property: color;\n    -webkit-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n}\n\n.hvr-sweep-to-right:before {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #2098d1;\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n    -webkit-transform-origin: 0 50%;\n    transform-origin: 0 50%;\n    -webkit-transition-property: transform;\n    transition-property: transform;\n    -webkit-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    -webkit-transition-timing-function: ease-out;\n    transition-timing-function: ease-out;\n}\n\n.hvr-sweep-to-right:hover,\n.hvr-sweep-to-right:focus,\n.hvr-sweep-to-right:active {\n    color: white;\n}\n\n.hvr-sweep-to-right:hover:before,\n.hvr-sweep-to-right:focus:before,\n.hvr-sweep-to-right:active:before {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n}\n\n.navbar .btn.btn-basic[disabled] {\n    background: #bec5c9;\n    color: #62696d;\n    opacity: .55;\n    border: 1px solid #bec5c9;\n}\n\n\n/* Responsiveness */\n\n.mobile-navbar-brand {\n    display: none;\n}\n\n.mobile-menu-icon,\n.mobile-menucross-icon {\n    display: none;\n}\n\n.live-head {\n    font-size: 24px;\n    font-weight: normal;\n    margin: 20px 26px 34px;\n}\n\n.live-subhead {\n    font-size: 18px;\n}\n\n.live-url {\n    font-size: 14px;\n    font-family: \"montserratlight\";\n    margin-bottom: 30px;\n    color: #fb545b;\n}\n\n\n/* Preloader */\n\n.preloader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #fff;\n    /* change if the mask should be a color other than white */\n    z-index: 9999;\n    /* makes sure it stays on top */\n}\n\n.status {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    /* centers the loading animation horizontally on the screen */\n    top: 50%;\n    /* centers the loading animation vertically on the screen */\n    background-image: url(\"./app/site/+builder/assets/images/logoAnim.gif\");\n    /* path to your loading animation */\n    background-repeat: no-repeat;\n    background-position: center;\n    margin: -100px 0 0 -100px;\n    /* is width and height divided by two */\n}\n\n.canvas-fix {\n    position: fixed;\n    overflow-y: scroll;\n    height: 100vh;\n    /*margin-top: 20px;\n    padding: 0px 20px 20px 20px;*/\n    width: 81%;\n}\n\n.navbar-leftside .btn-group.help-tip {\n    margin-top: 3px;\n}\n\n.no-analytics {\n    background: url('./app/site/+builder/assets/images/no-analytics.png');\n    width: 100%;\n    min-height: 90vh;\n    position: fixed;\n    bottom: 0;\n    background-size: cover;\n}\n\n.analytics-bottom-popup {\n    background: #fb6066;\n    width: 50%;\n    margin: 0 auto;\n    position: relative;\n    margin-top: 23%;\n    min-height: 150px;\n    color: #fff;\n    text-align: center;\n    padding: 42px;\n    font-family: montserratlight;\n    font-size: 18px;\n    box-shadow: 13px 13px 10px rgba(0, 0, 0, 0.20);\n}\n.no-analytics-overlay{\n    position: fixed;\n    top: 42px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1010;\n    margin-top: 56px;\n    background: rgba(0, 0, 0, 0.7);\n    margin-left: 235px;\n}\n\n.loading:after {\n    content: ' .';\n    animation: dots 1s steps(5, end) infinite;\n    font-size: 18px;\n    line-height: 1px;\n    position: relative;\n    left: -3px;\n}\n\n.zoom-parent {\n    float: left;\n    margin-right: 13px;\n    border: 1px solid #dae2e6;\n    height: 24px;\n    padding-left: 5px;\n    padding-right: 5px;\n    background: #fff;\n    margin-top: 6px;\n}\n\n.drag-parent {\n    float: left;\n    margin-right: 13px;\n    border: 1px solid #dae2e6;\n    height: 27px;\n    padding-left: 5px;\n    padding-right: 5px;\n    background: #fff;\n    margin-top: 7px;\n}\n\n.zoom i {\n    font-size: 16px;\n    color: #bec5c9;\n    padding: 1px 2px;\n}\n\na.zoom {\n    float: left;\n    margin-top: 2px;\n}\n\ntemp {\n    width: 100%;\n    display: block;\n    margin: 20px auto;\n    position: relative;\n   /*  transform-origin: 60px 0px;\n    -webkit-transform: translate3d(0, 0, 0); */\n}\n\n.template-section .que-fixed {\n    z-index: -1;\n}\n\n@keyframes dots {\n    0%,\n    20% {\n        color: rgba(0, 0, 0, 0);\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    40% {\n        color: white;\n        text-shadow: .25em 0 0 rgba(0, 0, 0, 0), .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    60% {\n        text-shadow: .25em 0 0 white, .5em 0 0 rgba(0, 0, 0, 0);\n    }\n    80%,\n    100% {\n        text-shadow: .25em 0 0 white, .5em 0 0 white;\n    }\n}\n\n.process-bar {\n    background: #f6f8f9;\n    position: fixed;\n    top: 60px;\n    z-index: 1;\n    width: 100%;\n}\n\n.process-bar ul {\n    padding: 8px 0px;\n    margin: 0px;\n    text-align: center;\n    border-bottom: 1px solid #dae2e6;\n    box-shadow: -3px 0 5px 1px rgba(0, 0, 0, 0.2);\n}\n\n.process-bar li {\n    display: inline-block;\n}\n\n.process-bar li a {\n    font-size: 12px;\n    margin: 0px 10px;\n    color: #62676b;\n    text-transform: uppercase;\n}\n\n.process-bar li a.active {\n    color: #23a0d6;\n}\n\n.process-bar li i {\n    font-size: 15px;\n    vertical-align: text-bottom;\n    margin-right: 4px;\n    color: #bec5c9;\n}\n\n.process-bar li a.active i {\n    color: #23a0d6;\n}\n.process-margin{\n    margin-left: 120px;\n}\n@media (min-width: 1400px) {\n    .no-analytics {\n        width: 100%;\n    }\n}\n\n@media (max-width: 1208px) {\n    input.ed-projectname {\n        width: 23%;\n    }\n}\n\n@media (max-width: 992px) {\n    .editor-sidebar.sidebar {\n        z-index: 9999;\n        top: 56px;\n    }\n    .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n        display: none;\n    }\n    .mobile-menucross-icon {\n        display: block;\n    }\n    .navbar-brand {\n        display: none;\n    }\n    .mobile-menu-icon {\n        display: block;\n        color: #fb545b;\n        padding: 0px 19px;\n        padding-top: 4px;\n        border-right: 1px solid #dae2e6;\n        margin-top: 7px;\n        cursor: pointer;\n    }\n    .mobile-navbar-brand {\n        display: block;\n        float: left;\n        padding: 12px 15px;\n    }\n    .mobile-navbar-brand img {\n        height: 31px;\n    }\n    .navbar-fixed-top .nav-padding {\n        padding-left: 0px;\n        padding-right: 15px;\n    }\n    .editor-navheader {\n        width: auto;\n    }\n    .mobile-top-menu {\n        width: 100%;\n        float: left;\n        border-bottom: 1px solid #dae2e6;\n    }\n    input.ed-projectname {\n        margin-top: 12px;\n        padding-bottom: 5px;\n        padding-top: 5px;\n        margin-bottom: 6px;\n        font-size: 16px;\n        width: 75%;\n    }\n    span.name-title,\n    .navbar-leftside .btn-group.help-tip {\n        display: none;\n    }\n    .navbar-rightside {\n        float: right;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        margin-right: 13px;\n    }\n    .navbar-leftside {\n        margin-left: 5px;\n        padding-bottom: 2px;\n        padding-left: 5px;\n        padding-top: 0px;\n    }\n    .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n        width: 24px;\n    }\n    .name-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n        padding-top: 5px;\n    }\n    .navbar .btn.btn-basic {\n        font-size: 10px;\n        margin-right: 2px;\n    }\n    .navbar .btn.btn-basic:not(.btn-menu):hover,\n    .navbar .btn.btn-basic:not(.btn-menu):focus {\n        background: none;\n        color: #fb545b;\n    }\n    .name-dd-minh {\n        min-height: 28px;\n    }\n    .mobile-menu-icon {\n        float: left;\n    }\n    .editor-template-tabs {\n        margin-left: 0px;\n    }\n    .sidebar-modal-backdrop {\n        display: none;\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1030;\n        margin-top: 56px;\n        background: rgba(0, 0, 0, 0.99);\n    }\n    .properties-modal-backdrop {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1010;\n        margin-top: 56px;\n        background: rgba(0, 0, 0, 0.99);\n        filter: alpha(opacity=50);\n        opacity: .5;\n    }\n    .sidebar-modal-backdrop.fade {\n        filter: alpha(opacity=0);\n        opacity: 0;\n    }\n    .sidebar-modal-backdrop.in {\n        filter: alpha(opacity=50);\n        opacity: .5;\n    }\n    .mobile-menucross-icon i.material-icons {\n        position: absolute;\n        top: 10px;\n        left: 240px;\n        height: 30px;\n        width: 30px;\n        color: #bec5c9;\n        cursor: pointer;\n    }\n    .sidebar-offcanvas {\n        top: 104px;\n        z-index: 1020;\n        box-shadow: none;\n    }\n    .sidebar-offcanvas .mobile-menucross-icon i.material-icons {\n        position: absolute;\n        top: 10px;\n        left: -30px;\n    }\n    .name-dropdown-wrapper:hover .dropdown-menu {\n        display: none;\n    }\n    .zoom-parent {\n        display: none;\n    }\n    .mobile-prop-cross-icon {\n        position: absolute;\n        top: 111px;\n        right: 315px;\n        height: 30px;\n        width: 30px;\n        color: #bec5c9;\n        cursor: pointer;\n        z-index: 1030;\n    }\n    .process-bar{\n            top: 104px;\n        }\n}\n\n\n/* Temp: To show landing page height of template in rectangle in case of editor*/\n\n.landing-page-mid {\n    height: 80vh;\n}\n\n.editor-sidebar.sidebar.config-bg {\n    background-color: #f6f8f9;\n}\n\n\n/* End*/\n\n.scrollbar {\n    overflow-y: scroll;\n}\n\n\n/*\n *  STYLE 1\n */\n\n.scrollbar::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(245, 245, 248, .8);\n    border-radius: 5px;\n    background-color: #f5f5f5;\n}\n\n.scrollbar::-webkit-scrollbar {\n    width: 7px;\n    background-color: #aaa;\n}\n\n.scrollbar::-webkit-scrollbar:horizontal {\n    height: 7px;\n    background-color: #aaa;\n}\n\n.scrollbar::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    -webkit-box-shadow: inset 0 0 6px rgba(245, 245, 248, .8);\n    background-color: #aaa;\n}\n"

/***/ },

/***/ 887:
/***/ function(module, exports) {

module.exports = "<div class=\"preloader\" *ngIf=\"!jsonBuilderHelper.getJSONBuilt()\">\n  <div class=\"status\">&nbsp;</div>\n</div>\n<div *ngIf=\"jsonBuilderHelper.getJSONBuilt()\">\n  <!-- Editor header start-->\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"mobile-top-menu\">\n      <div class=\"editor-navheader\">\n        <a href=\"\" [routerLink]=\"['/dashboard']\" class=\"navbar-brand\" (click)=\"callGA('LOGO')\">\n          <!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n          <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 340 333\" enable-background=\"new 0 0 340 333\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;    height: 110px;top: -65px;position: absolute;left: -5px;\">\n                        <path class=\"path\" fill=\"#FFFFFF\" stroke=\"#FB6066\" stroke-width=\"9\" stroke-miterlimit=\"10\" d=\"M151.153,235.063C128.156,238.427 111.107,258.151 111.107,281.393C111.107,307.236 132.087,328.216 157.93,328.216C183.772,328.216 204.752,307.236 204.752,281.393C204.752,272.191 202.041,263.193 196.957,255.523L176.874,275.698L151.724,275.698L136.55,290.872\" />\n                    </svg>\n          <img src=\"assets/images/headerLogo.png\" />\n        </a>\n        <a href=\"\" [routerLink]=\"['/dashboard']\" class=\"mobile-navbar-brand\" (click)=\"callGA('LOGO')\">\n          <img src=\"assets/images/mobileLogo.png\" />\n        </a>\n      </div>\n      <input type=\"text\" class=\"ed-projectname ellipsis \" contenteditable=\"true\" id=\"fname\" (blur)=\"appNameblured();onCalcNameChanged();\" (focus)=\"appNameFocused()\" [(ngModel)]=\"jsonBuilderHelper.getJSONBuilt().name\" placeholder=\"{{companyName}}'s Calculator\" />\n      <!--<p *ngIf=\"!unique\">This calculator Name is already taken</p>-->\n    </div>\n    <div class=\"mobile-menu-icon\" (click)=\"mobileMenuClicked()\">\n      <i class=\"material-icons\">menu</i>\n    </div>\n    <div class=\"navbar-rightside\">\n      <!-- <div class=\"drag-parent\">\n      <a href=\"javascript:void();\" class=\"drag\" (click)=\"drag()\"><i class=\"material-icons\">open_with</i></a>\n  </div> -->\n      <div class=\"zoom-parent\" [hidden]=\"selectedSec!='build'\">\n        <a href=\"javascript:void();\" class=\"zoom\" (click)=\"zoom('in')\"><i class=\"material-icons\">add</i></a>\n        <a href=\"javascript:void();\" class=\"zoom\" (click)=\"zoom('reset')\"><i class=\"material-icons\">zoom_out</i></a>\n        <a href=\"javascript:void();\" class=\"zoom\" (click)=\"zoom('out')\"><i class=\"material-icons\">remove</i></a>\n      </div>\n      <div class=\"btn-group\">\n        <button type=\"button\" class=\"btn btn-default btn-sm btn-flat btn-basic btn-menu\"><span class=\"elem\"><i class=\"material-icons\">donut_large</i></span></button>\n        <!-- <div class=\"help-checktip\">(since {{activeSince}})</div> -->\n      </div>\n      <a type=\"button\" href=\"javascript:void(0);\" class=\"btn btn-default btn-sm btn-flat btn-basic\" (click)=\"onPreview();callGA('PREVIEW')\">\n        PREVIEW\n      </a>\n      <button id=\"live-btn\" type=\"button\" class=\"btn btn-default btn-sm btn-flat btn-basic\" (click)=\"onPublish($event);callGA('GOLIVE')\" [disabled]=\"!jsonBuilderHelper.getJSONBuilt().changed\">\n        {{(jsonBuilderHelper.getJSONBuilt().mode == 'PUBLIC')? (jsonBuilderHelper.getJSONBuilt().changed)?'PUBLISH CHANGES':'LIVE' :'GO LIVE'}}\n      </button>\n      <div class=\"btn-group navbar-leftside\">\n        <div class=\"col-xs-12 no-padding\">\n          <!-- Start: header name-dropdown -->\n          <sd-toolbar [page]=\"'builder'\"></sd-toolbar>\n          <!-- End: header name-dropdown -->\n        </div>\n      </div>\n    </div>\n  </nav>\n  <!-- Editor header end-->\n  <div class=\"process-bar\" [class.process-margin]=\"selectedConfigComponent=='email' || selectedConfigComponent=='embedded-code'\">\n    <ul>\n      <li><a href=\"javascript:void(0)\" (click)=\"selectedSec='build'\" [class.active]=\"selectedSec=='build'\"><i class=\"material-icons \">dashboard</i> Build</a></li>\n      <li><i class=\"material-icons\">keyboard_arrow_right</i></li>\n      <li><a href=\"javascript:void(0)\" (click)=\"selectedSec='config'\" [class.active]=\"selectedSec=='config'\"><i class=\"material-icons \">settings</i> Configure</a></li>\n      <li><i class=\"material-icons\">keyboard_arrow_right</i></li>\n      <li *ngIf=\"isAnalyticsAvailable\">\n        <a (click)=\"onSelect('analytics'); selectedAnalyticComponent = 'overview'\" [class.active]=\"selectedSec=='analytics'\"><i class=\"material-icons \">equalizer</i>Analyze</a> </li>\n\n      <li *ngIf=\"!isAnalyticsAvailable\">\n        <a *ngIf=\"!jsonBuilderHelper.getJSONBuilt().liveApp\" (click)=\"checkAnalytics()\" [class.active]=\"selectedSec=='analytics'\"><i class=\"material-icons\">equalizer</i>Analyze</a>\n        <a *ngIf=\"jsonBuilderHelper.getJSONBuilt().liveApp\" (click)=\"checkAnalytics()\" [class.active]=\"selectedSec=='analytics'\"><i class=\"material-icons\">equalizer</i>Analyze</a>\n      </li>\n    </ul>\n  </div>\n  <!-- Editor Left sidebar start -->\n  <div class=\"editor-sidebar sidebar\" [class.config-bg]=\"selectedSec=='config'\">\n    <component-manager *ngIf=\"jsonBuilderHelper.getJSONBuilt()\" [hidden]=\"selectedSec!='build'\"></component-manager>\n    <component-manager-config (selection)=\"selectedConfigComponent = $event\" [hidden]=\"selectedSec!='config'\"></component-manager-config>\n    <calc-analytics-manager *ngIf=\"selectedSec=='analytics'\" [hidden]=\"selectedSec!='analytics'\" (selection)=\"selectedAnalyticComponent = $event\"></calc-analytics-manager>\n    <div class=\"mobile-menucross-icon\" (click)=\"mobileMenuCrossClicked()\">\n      <i class=\"material-icons\">close</i>\n    </div>\n  </div>\n  <!-- Editor Left sidebar end -->\n  <!-- Editor Right Template section strat -->\n  <div class=\"editor-template-tabs\" [class.minH]=\"selectedSec=='analytics'\" >\n    <div id=\"build\">\n      <div class=\"building\" [hidden]=\"selectedSec!='build'\">\n        <div class=\"template-section scrollbar\" [hidden]=\"selectedSec!='build'\" (dblclick)=\"openProperties()\" (touch)=\"openProperties()\">\n          <Temp-dev></Temp-dev>\n        </div>\n      </div>\n      <config [hidden]=\"selectedSec!='config'\" [component]=\"selectedConfigComponent\" >\n      </config>\n      <div class=\"pt-30\" [hidden]=\"selectedSec!='analytics'\">\n        <calc-analytics *ngIf=\"selectedSec=='analytics'\" [component]=\"selectedAnalyticComponent\" [calc]=\"jsonBuilderHelper.getJSONBuilt()\">\n        </calc-analytics>\n      </div>\n      <!--<div *ngIf=\"selectedSec=='analytics' && !jsonBuilderHelper.getJSONBuilt().liveApp\" [hidden]=\"selectedSec!='analytics'\">\n          <div class=\"tab-content tabs-wrapper col-md-12 np\">\n              <div class=\"no-analytics\">\n                  <div class=\"analytics-bottom-popup\">\n                      <i class=\"material-icons\">grid_off</i>\n                      <br> This calculator does not have any traffic yet. Once there is traffic, you will be able to see detailed analytics.\n                  </div>\n              </div>\n          </div>\n      </div>-->\n    </div>\n  </div>\n  <!-- Editor Right Template section end  -->\n  <!--landing layout start -->\n  <div id=\"sidebar\" class=\"col-xs-6 col-sm-3 sidebar-offcanvas affix\" *ngIf=\"jsonBuilderHelper.getSelectedPage()\" [hidden]=\"selectedSec!='build'\">\n    <div class=\"properties-window\" *ngIf=\"(jsonBuilderHelper.getSelectedControl() || jsonBuilderHelper.getSelectedPage()) && jsonBuilderHelper.getSelectedPage().visible \">\n      <i class=\"material-icons\">tab</i>\n      <span class=\"properties-tag\">PROPERTIES</span>\n    </div>\n    <!--editors -->\n    <editor *ngIf=\"(jsonBuilderHelper.getSelectedControl() || jsonBuilderHelper.getSelectedPage())\">\n    </editor>\n    <!--editors -->\n    <!--&& !((jsonBuilderHelper.getSelectedPage().type == 'Questionnaire') && (jsonBuilderHelper.getSelectedModel() == 'Page'))-->\n  </div>\n  <div class=\"mobile-prop-cross-icon\" (click)=\"mobilePropCrossClicked()\" [hidden]=\"selectedSec!='build'\">\n    <i class=\"material-icons\">close</i>\n  </div>\n  <div class=\"properties-modal-backdrop\" [hidden]=\"selectedSec!='build'\"></div>\n  <div class=\"sidebar-modal-backdrop\"></div>\n  <!--landing layout end -->\n  <!-- Modal for the formula Dialog -->\n  <!--<formula-dialog *ngIf=\"controls\" [getJsonBuilt]=\"jsonBuilderHelper.getTemplateQuestionare()\"></formula-dialog>-->\n  <formula-pop></formula-pop>\n</div>\n"

/***/ }

});
//# sourceMappingURL=4.map