webpackJsonp([7,13],{

/***/ 1078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_subdomain_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_company_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_services_DefaultJSON_service__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_marketing_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_script_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_feature_access_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TemplatesComponent = (function () {
    function TemplatesComponent(subDomainService, companyService, _router, _defaultJson, _script, _marketingService, _featureAuthService) {
        this.subDomainService = subDomainService;
        this.companyService = companyService;
        this._router = _router;
        this._defaultJson = _defaultJson;
        this._script = _script;
        this._marketingService = _marketingService;
        this._featureAuthService = _featureAuthService;
        this.templates = [];
        this.loader = 0;
        this.tempObjAccess = {};
        this.subDomain = subDomainService.subDomain;
        this.company_id = this.subDomain.company_id;
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
    TemplatesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.temp_type = localStorage.getItem('temp_type');
        this.companyService.getTemplates()
            .subscribe(function (response) {
            _this.templates = response;
            _this.loader = 1;
            setTimeout(function () { _this.animation(); }, 500);
        }, function (error) {
            console.log(error);
        });
        jQuery('#temp-preview').on('hidden.bs.modal', function () { return _this.src = ''; });
    };
    TemplatesComponent.prototype.getFeatureaccess = function (selector) {
        selector = selector.split('-').join('_');
        var flag = this._featureAuthService.features.templates[selector];
        return flag;
    };
    TemplatesComponent.prototype.animation = function () {
        var animations = ['leftFade', 'topFade', 'rightFade', 'bottomFade'];
        var total_anim = animations.length;
        var easeType = 'swing';
        var animSpeed = 1000;
        var hs_container = jQuery('.hs_container');
        var hs_areas = hs_container.find('.hs_area');
        var hs_images = hs_container.find('img');
        var total_images = hs_images.length;
        var cnt = 0;
        hs_images.each(function () {
            var that = jQuery(this);
            jQuery('<img/>').load(function () {
                ++cnt;
                if (cnt === total_images) {
                    hs_areas.each(function () {
                        var area = jQuery(this);
                        var onImage = false;
                        area.data('over', true).bind('mouseenter', function () {
                            onImage = true;
                            if (area.data('over')) {
                                area.data('over', false);
                                var total = area.children().length;
                                var current = area.find('img:visible');
                                var idx_current = current.index();
                                var next = (idx_current === total - 1) ? area.children(':first') : current.next();
                                next.show();
                                var anim = animations.shift();
                                animations.push(anim);
                                switch (anim) {
                                    case 'rightFade':
                                        current.animate({
                                            'left': current.width() + 'px',
                                            'opacity': '0'
                                        }, animSpeed, easeType, function () {
                                            current.hide().css({
                                                'z-index': '1',
                                                'left': '0px',
                                                'opacity': '1'
                                            });
                                            next.css('z-index', '9');
                                            area.data('over', true);
                                            if (onImage) {
                                                area.trigger('mouseenter');
                                            }
                                        });
                                        break;
                                    case 'leftFade':
                                        current.animate({
                                            'left': -current.width() + 'px', 'opacity': '0'
                                        }, animSpeed, easeType, function () {
                                            current.hide().css({
                                                'z-index': '1',
                                                'left': '0px',
                                                'opacity': '1'
                                            });
                                            next.css('z-index', '9');
                                            area.data('over', true);
                                            if (onImage) {
                                                area.trigger('mouseenter');
                                            }
                                        });
                                        break;
                                    case 'topFade':
                                        current.animate({
                                            'top': -current.height() + 'px',
                                            'opacity': '0'
                                        }, animSpeed, easeType, function () {
                                            current.hide().css({
                                                'z-index': '1',
                                                'top': '0px',
                                                'opacity': '1'
                                            });
                                            next.css('z-index', '9');
                                            area.data('over', true);
                                            if (onImage) {
                                                area.trigger('mouseenter');
                                            }
                                        });
                                        break;
                                    case 'bottomFade':
                                        current.animate({
                                            'top': current.height() + 'px',
                                            'opacity': '0'
                                        }, animSpeed, easeType, function () {
                                            current.hide().css({
                                                'z-index': '1',
                                                'top': '0px',
                                                'opacity': '1'
                                            });
                                            next.css('z-index', '9');
                                            area.data('over', true);
                                            if (onImage) {
                                                area.trigger('mouseenter');
                                            }
                                        });
                                        break;
                                    default:
                                        current.animate({
                                            'left': -current.width() + 'px'
                                        }, animSpeed, easeType, function () {
                                            current.hide().css({
                                                'z-index': '1',
                                                'left': '0px'
                                            });
                                            next.css('z-index', '9');
                                            area.data('over', true);
                                            if (onImage) {
                                                area.trigger('mouseenter');
                                            }
                                        });
                                        break;
                                }
                            }
                        });
                        area.bind('mouseleave', function () {
                            onImage = false;
                        });
                    });
                }
            }).attr('src', that.attr('src'));
        });
    };
    TemplatesComponent.prototype.ngOnInit = function () {
        //console.log("this._featureAuthService.features.templates",this._featureAuthService.features.templates);
    };
    TemplatesComponent.prototype.selectTemplate = function (selector, $event) {
        if ((this._featureAuthService.features.templates.one_page_card && selector == 'one-page-card') ||
            (this._featureAuthService.features.templates.sound_cloud && selector == 'sound-cloud') ||
            (this._featureAuthService.features.templates.inline_temp && selector == 'inline-temp')) {
            var button = jQuery($event.target);
            button.html('Initializing');
            button.addClass('loading');
            button.attr('disabled', true);
            localStorage.setItem('temp_name', selector);
            localStorage.setItem('project', 'New');
            window.location.href = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].APP_EXTENSION + '/builder/';
            //this._router.navigate(['/builder']);
            /*---- Tracking code goes here ----*/
            ga('markettingteam.send', 'event', 'Builder', 'Click', 'UseTemplate');
            _kmq.push(['record', 'Builder Use Template Click', { 'Template': selector }]);
        }
        else {
            var type = selector.split('-').join('_');
            this._featureAuthService.setSelectedFeature('templates', type);
            jQuery('.templates').addClass('activegreen limited-label');
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
        }
    };
    TemplatesComponent.prototype.onPreview = function (template) {
        this.tempname = template;
        var app = this._defaultJson.getJSON(template);
        app.setTemplateType(localStorage.getItem('temp_type'));
        app.setTemplateName(template);
        this.appJson = app;
        localStorage.setItem('template', JSON.stringify(this.appJson));
        jQuery('#temp-preview').modal('show');
        this.src = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].APP_EXTENSION + '/preview/previewFrame';
        //window.open('/preview', '_blank');
        /*---- Tracking code goes here ----*/
        ga('markettingteam.send', 'event', 'Builder', 'Click', 'PreviewTemplate');
        _kmq.push(['record', 'Builder Preview Template Click', { 'Template': template }]);
        /*---------------------------------*/
    };
    TemplatesComponent.prototype.getAvailableTemplates = function () {
        return this.templates.filter(function (template) { return (localStorage.getItem('temp_type') === 'Recommendation') ? template.available && template.selector !== 'sound-cloud' : template.available; });
    };
    TemplatesComponent.prototype.getNotAvailableTemplates = function () {
        return this.templates.filter(function (template) { return !template.available; });
    };
    TemplatesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'og-templates',
            template: __webpack_require__(1224),
            styles: [__webpack_require__(1135)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_subdomain_service__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_subdomain_service__["a" /* SubDomainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_company_service__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_company_service__["a" /* CompanyService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__templates_services_DefaultJSON_service__["a" /* DefaultJSON */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__templates_services_DefaultJSON_service__["a" /* DefaultJSON */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_script_service__["a" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_services_script_service__["a" /* Script */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_marketing_service__["a" /* MarketingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_services_marketing_service__["a" /* MarketingService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_feature_access_service__["a" /* FeatureAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_services_feature_access_service__["a" /* FeatureAuthService */]) === 'function' && _g) || Object])
    ], TemplatesComponent);
    return TemplatesComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/templates.component.js.map

/***/ }),

/***/ 1135:
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n    font-family: 'montserratultra_light';\r\n    src: url(../../../../../assets/fonts/montserrat-ultralight-webfont.woff2) format('woff2'), url(../../../../../assets/fonts/montserrat-ultralight-webfont.woff) format('woff'), url(../../../../../assets/fonts/montserrat-ultralight-webfont.ttf) format('truetype');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Material Icons';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(../../../../../assets/fonts/MaterialIcons-Regular.eot);\r\n    src: local('Material Icons'), local('materialIcons-Regular'), url(../../../../../assets/fonts/materialIcons-Regular.woff2) format('woff2'), url(../../../../../assets/fonts/materialIcons-Regular.woff) format('woff'), url(../../../../../assets/fonts/materialIcons-Regular.ttf) format('truetype');\r\n}\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n    -webkit-font-smoothing: antialiased;\r\n    text-rendering: optimizeLegibility;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-font-feature-settings: 'liga';\r\n            font-feature-settings: 'liga'}\r\n.choosetem-topsec {\r\n    padding-top: 40px;\r\n    text-align: center;\r\n    background: #f6f8f9;\r\n}\r\n.choosetem-topsec h3 {\r\n    font-size: 30px;\r\n    font-family: montserratbold!important;\r\n    color: rgba(251, 95, 102, .8);\r\n    margin-top: 0;\r\n}\r\n.choosetem-topsec p {\r\n    color: rgba(102, 105, 109, .8);\r\n    font-family: montserratlight;\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    margin: 0 auto;\r\n    width: 65%}\r\n.template-outer-main {\r\n    float: left;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n.template-outer-light {\r\n    float: left;\r\n    width: 100%;\r\n    background: #f6f8f9;\r\n    min-height: 490px;\r\n    padding: 65px 35px 35px 35px;\r\n}\r\n.template-outer {\r\n    float: left;\r\n    width: 100%;\r\n    min-height: 490px;\r\n    padding: 60px 35px 35px 35px;\r\n}\r\n.template-content h4 {\r\n    float: left;\r\n    color: #fb5f66;\r\n    font-size: 36px;\r\n    text-align: center;\r\n    width: 100%;\r\n    font-family: montserratultra_light!important;\r\n    margin-bottom: 15px;\r\n}\r\n.template-content h4 span {\r\n    font-family: montserratlight!important;\r\n}\r\n.template-content p {\r\n    color: #66696d;\r\n    font-family: montserratlight;\r\n    font-size: 13px;\r\n    line-height: 18px;\r\n}\r\n.template-content ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin-top: 20px;\r\n    float: left;\r\n}\r\n.template-content ul li {\r\n    margin-bottom: 10px;\r\n    float: left;\r\n    width: 100%;\r\n    color: #66696d;\r\n    font-family: montserratlight;\r\n    font-size: 13px;\r\n}\r\n.template-content ul li i {\r\n    float: left;\r\n    font-size: 20px;\r\n    padding-right: 10px;\r\n    width: 25px;\r\n    color: #66696d;\r\n    opacity: .5;\r\n}\r\n.template-content ul li span {\r\n    float: left;\r\n    width: 92%}\r\n.template-imgouter {\r\n    position: relative;\r\n}\r\n.img-1 {\r\n    position: absolute;\r\n    top: -30px;\r\n    left: 15%;\r\n    width: 75%}\r\n.img-2 {\r\n    position: absolute;\r\n    top: 127px;\r\n    left: -20px;\r\n    width: 60%}\r\n.img-3 {\r\n    position: absolute;\r\n    top: 45px;\r\n    right: -60px;\r\n    width: 55%}\r\n.img_left-1 {\r\n    position: absolute;\r\n    top: -30px;\r\n    left: -40px;\r\n    width: 80%}\r\n.img_left-2 {\r\n    position: absolute;\r\n    top: 97px;\r\n    left: 27%;\r\n    width: 70%}\r\n.choosetemp-actions {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    float: left;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.choosetemp-actions .btn-red-outline {\r\n    color: #fb545b;\r\n    background-color: #fff;\r\n    border-color: #ffb5b8;\r\n    border-radius: 0;\r\n    font-size: 11px;\r\n    padding: 7px 35px;\r\n    margin: 0;\r\n    margin-right: 0;\r\n    -webkit-transition: all 0.3s ease 0s;\r\n    transition: all 0.3s ease 0s;\r\n    font-family: montserratregular;\r\n    text-transform: uppercase;\r\n    margin-bottom: 5px; float: none !important;\r\n}\r\n.choosetemp-actions .btn-red-outline.hvr-sweep-to-right::before {\r\n    background: #ffb5b8 none repeat scroll 0 0;\r\n    color: #fff!important;\r\n}\r\n.choosetemp-actions .btn-red-outline:hover {\r\n    background: #fdb6b9!important;\r\n    color: #fb545b!important;\r\n    border-color: #fdb6b9!important;\r\n}\r\n\r\n.recom-outer-image .img_left-1  {position:  absolute;top:  -30px;left:  85px; width:  80%}\r\n.recom-outer-image .img_left-2  {position:  absolute;top: 140px;left: -3%; width: 48%;}\r\n.recom-outer-image .img_left-3  {position:  absolute;position: absolute;top: 55px;right: 26px; width: 49%;}\r\n\r\n.temp-preview-content{text-align: center;}\r\n.temp-preview-content iframe{ width:100%; height: 100vh; float: left; }\r\n#temp-preview.modal{ margin-top:0;}\r\n\r\n#temp-preview.modal .close {float: none;position: absolute;  top:20px; right:20px;z-index: 9999; font-weight: normal;line-height: 1; color: #f2f2f2; text-shadow: 0 1px 0 #fff;  opacity: 1;}\r\n#temp-preview.modal .close:hover { color: #fff;}\r\n#temp-preview.modal .close i{ font-size: 24px;}\r\n\r\n\r\n@media (min-width:1024px) and (max-width:1300px) {\r\n.img-2 {top: 127px;left: -8px; width: 58%;}\r\n.choosetem-topsec {padding-top: 30px!important;}\r\n\r\n}\r\n@media (max-width:1024px) {\r\n    .template-content P { font-size: 13px;}\r\n    ul li {  font-size: 13px;}\r\n    .recom-outer-image .img_left-1  {left:  40px;}\r\n    .recom-outer-image .img_left-2  {top: 92px;}\r\n}\r\n@media (min-width:1600px) and (max-width:1920px) {\r\n.template-imgouter { min-height: 590px;}\r\n.template-content { margin-top: 6.5%}\r\n.img-2 {width: 49%; left: 0; top: 200px;}\r\n.img-3 { top: 45px;right: -39px; width: 55%;}\r\n.img_left-1 { top: 0;}\r\n.img_left-2 { bottom: 10px; top: auto;}\r\n.template-outer-light { padding: 4% 35px 35px 35px;}\r\n.template-outer-light:first-child { padding: 60px 35px 35px 35px;}\r\n.template-content ul li i { width: 4%;}\r\n.template-content p { font-size: 14px;}\r\n.template-content ul li {font-size: 14px;}\r\n.recom-outer-image .img_left-2  {top: 165px;}\r\n\r\n}\r\n@media (min-width:150px) and (max-width:767px) {\r\n    .template-imgouter {\r\n    min-height: 250px;\r\n    padding: 20px!important;\r\n    width: 100%;\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n}\r\n.template-content {\r\n    min-height: 250px;\r\n    padding: 20px!important;\r\n    -webkit-box-ordinal-group: 3;\r\n        -ms-flex-order: 2;\r\n            order: 2;\r\n}\r\n.template-outer-light {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding: 30px 10px;\r\n}\r\n.template-outer {\r\n    padding: 10px;\r\n}\r\n.choosetem-topsec h3 {\r\n    font-size: 24px;\r\n}\r\n.choosetem-topsec p {\r\n    width: 100%;}\r\n.img-1 {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 11%;\r\n    width: 80%;}\r\n.img-2 {\r\n    position: absolute;\r\n    top: 77px;\r\n    left: -5%;\r\n    width: 60%;}\r\n.img-3 {\r\n    position: absolute;\r\n    top: 40px;\r\n    right: -42px;\r\n    width: 60%;}\r\n.template-content {\r\n    padding: 0!important;\r\n}\r\n.template-content ul li i {\r\n    float: left;\r\n    font-size: 16px;\r\n    padding-right: 10px;\r\n    width: 22px;\r\n    margin-top: 2px;\r\n}\r\n.img_left-1 {\r\n    position: absolute;\r\n    top: 30px;\r\n    left: -15px;\r\n    width: 90%;}\r\n.img_left-2 {\r\n    position: absolute;\r\n    top: 103px;\r\n    left: 25%;\r\n    width: 80%;}\r\n.template-outer .template-imgouter {\r\n    min-height: 290px;\r\n}\r\n.choosetem-topsec {\r\n    padding-top: 30px;\r\n}\r\n.recom-outer-image .img_left-2  {top: 81px; width: 52%;}\r\n.recom-outer-image .img_left-3 {top: 55px;right: -10px; width: 53%;}\r\n\r\n\r\n}\r\n@media (min-width:0) and (max-width:767px) and (orientation:landscape) {\r\n    .template-imgouter {\r\n    min-height: 320px;\r\n    padding: 20px!important;\r\n    width: 100%;\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n}\r\n.template-content {\r\n    min-height: 250px;\r\n    padding: 20px!important;\r\n    -webkit-box-ordinal-group: 3;\r\n        -ms-flex-order: 2;\r\n            order: 2;\r\n}\r\n.template-outer-light {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding: 30px 10px;\r\n}\r\n.template-outer {\r\n    padding: 10px;\r\n}\r\n.choosetem-topsec h3 {\r\n    font-size: 24px;\r\n}\r\n.choosetem-topsec p {\r\n    width: 100%;}\r\n.img-1 {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 11%;\r\n    width: 80%;}\r\n.img-2 {\r\n    position: absolute;\r\n    top: 77px;\r\n    left: -5%;\r\n    width: 58%;}\r\n.img-3 {\r\n    position: absolute;\r\n    top: 40px;\r\n    right: -42px;\r\n    width: 58%;}\r\n.template-content {\r\n    padding: 0!important;\r\n}\r\n.template-content ul li i {\r\n    float: left;\r\n    font-size: 16px;\r\n    padding-right: 10px;\r\n    width: 22px;\r\n    margin-top: 2px;\r\n}\r\n.img_left-1 {\r\n    position: absolute;\r\n    top: 30px;\r\n    left: -15px;\r\n    width: 80%;}\r\n.img_left-2 {\r\n    position: absolute;\r\n    top: 103px;\r\n    left: 25%;\r\n    width: 75%;}\r\n.template-outer .template-imgouter {\r\n    min-height: 350px;\r\n}\r\n}\r\n@media (min-width:768px) and (max-width:990px) {\r\n    .template-imgouter {\r\n    min-height: 340px;\r\n    padding: 20px!important;\r\n    width: 80%;\r\n    margin-left: 7%;\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n}\r\n.template-content {\r\n    min-height: 250px;\r\n    padding: 20px!important;\r\n    -webkit-box-ordinal-group: 3;\r\n        -ms-flex-order: 2;\r\n            order: 2;\r\n}\r\n.template-outer-light {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n.template-outer {\r\n    padding-bottom: 0;\r\n}\r\n.template-outer-light:last-child {\r\n    min-height: 1035px;\r\n}\r\n\r\n.recom-outer-image .img_left-1  {left:  50px; width:  90%} \r\n.recom-outer-image .img_left-2  {top: 140px;left: -3%; width: 57%;}\r\n.recom-outer-image .img_left-3  {top: 46px;right: -57px; width: 56%;}\r\n\r\n}\r\n@media (max-width:480px) {\r\n    .template-imgouter {\r\n    min-height: 280px;\r\n    padding: 20px!important;\r\n    width: 100%;\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n}\r\n.template-outer .template-imgouter {\r\n    min-height: 320px;\r\n}\r\n}\r\n@media (max-width:640px) {\r\n    .template-imgouter {\r\n    min-height: 280px;\r\n    padding: 20px!important;\r\n    width: 100%;\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n}\r\n.template-outer .template-imgouter {\r\n    min-height: 320px;\r\n}\r\n}\r\n@media (min-width:640px) and (max-width:700px) and (orientation:portrait) {\r\n    .template-imgouter {\r\n    min-height: 370px;\r\n    padding: 20px!important;\r\n    width: 100%;\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n}\r\n.template-outer .template-imgouter {\r\n    min-height: 390px;\r\n}\r\n}\r\n@media (min-width:640px) and (max-width:700px) and (orientation:landscape) {\r\n    .template-imgouter {\r\n    min-height: 320px;\r\n    padding: 20px!important;\r\n    width: 100%;\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n}\r\n.template-outer .template-imgouter {\r\n    min-height: 350px;\r\n}\r\n}\r\n@media (max-width:320px) {\r\n    .template-imgouter {\r\n    min-height: 200px;\r\n    padding: 20px!important;\r\n    width: 100%;\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n}\r\n.template-outer .template-imgouter {\r\n    min-height: 250px;\r\n}\r\n}\r\n.animated {\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 2s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n.bounceIn3, .bounceIn2, .bounceIn1, .bounceInDown {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(400px);\r\n    transform: translateX(400px);\r\n}\r\n@-webkit-keyframes bounceIn {\r\n    0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(.3);\r\n}\r\n50% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1.05);\r\n}\r\n70% {\r\n    -webkit-transform: scale(.9);\r\n}\r\n100% {\r\n    -webkit-transform: scale(1);\r\n}\r\n}\r\n@keyframes bounceIn {\r\n    0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(.3);\r\n            transform: scale(.3);\r\n}\r\n50% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n}\r\n70% {\r\n    -webkit-transform: scale(.9);\r\n            transform: scale(.9);\r\n}\r\n100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n}\r\n}\r\n.bounceIn.go {\r\n    -webkit-animation-name: bounceIn;\r\n    animation-name: bounceIn;\r\n}\r\n@-webkit-keyframes bounceIn3 {\r\n    0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(400px);\r\n}\r\n60% {\r\n    -webkit-transform: translateX(-30px);\r\n}\r\n80% {\r\n    -webkit-transform: translateX(10px);\r\n}\r\n100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(0);\r\n}\r\n}\r\n@keyframes bounceIn3 {\r\n    0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(400px);\r\n            transform: translateX(400px);\r\n}\r\n60% {\r\n    -webkit-transform: translateX(-30px);\r\n            transform: translateX(-30px);\r\n}\r\n80% {\r\n    -webkit-transform: translateX(10px);\r\n            transform: translateX(10px);\r\n}\r\n100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n}\r\n}\r\n.bounceIn3.go {\r\n    -webkit-animation-name: bounceIn3;\r\n    animation-name: bounceIn3;\r\n}\r\n@-webkit-keyframes bounceIn2 {\r\n    0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-400px);\r\n}\r\n60% {\r\n    -webkit-transform: translateX(30px);\r\n}\r\n80% {\r\n    -webkit-transform: translateX(-10px);\r\n}\r\n100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(0);\r\n}\r\n}\r\n@keyframes bounceIn2 {\r\n    0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-400px);\r\n            transform: translateX(-400px);\r\n}\r\n60% {\r\n    -webkit-transform: translateX(30px);\r\n            transform: translateX(30px);\r\n}\r\n80% {\r\n    -webkit-transform: translateX(-10px);\r\n            transform: translateX(-10px);\r\n}\r\n100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n}\r\n}\r\n.bounceIn2.go {\r\n    -webkit-animation-name: bounceIn2;\r\n    animation-name: bounceIn2;\r\n}\r\n@-webkit-keyframes bounceIn1 {\r\n    0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(400px);\r\n}\r\n60% {\r\n    -webkit-transform: translateY(-30px);\r\n}\r\n80% {\r\n    -webkit-transform: translateY(10px);\r\n}\r\n100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n}\r\n}\r\n@keyframes bounceIn1 {\r\n    0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(400px);\r\n            transform: translateY(400px);\r\n}\r\n60% {\r\n    -webkit-transform: translateY(-30px);\r\n            transform: translateY(-30px);\r\n}\r\n80% {\r\n    -webkit-transform: translateY(10px);\r\n            transform: translateY(10px);\r\n}\r\n100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n}\r\n}.bounceIn1.go {\r\n    -webkit-animation-name: bounceIn1;\r\n    animation-name: bounceIn1;\r\n}\r\n.choose-temp-soon {\r\n    position: relative;\r\n}\r\n.choose-temp-soon .choose-temp-soon-hover {\r\n    display: block;\r\n    background: rgba(251, 84, 91, .2);\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    -webkit-transition: background 0.3s ease;\r\n    transition: background 0.3s ease;\r\n    cursor: pointer;\r\n}\r\n.choose-temp-soon i.material-icons {\r\n    display: none;\r\n    font-size: 30px;\r\n    color: #fff;\r\n    text-align: center;\r\n    position: relative;\r\n    top: 40%;\r\n    background: rgba(255, 255, 255, .28);\r\n    border-radius: 50%;\r\n    padding-top: 13px;\r\n    z-index: 99;\r\n    margin: 0 auto;\r\n    width: 55px;\r\n    height: 55px;\r\n}\r\n.choose-temp-soon i.material-icons {\r\n    display: block;\r\n}\r\n.choosetemp-box2 .temp2 {\r\n    padding-left: 10px;\r\n}\r\n.choosetemp-box2 .temp1 {\r\n    padding-right: 10px;\r\n}\r\n.choose-temp-soon img.hs_visible {\r\n    width: 100%;\r\n    box-shadow: 3px 3px 20px rgba(136, 136, 136, 1);\r\n}\r\n.np {\r\n    padding: 0!important;\r\n}\r\n.btn-red-outline i {\r\n    float:left;\r\n    font-size:  14px;\r\n    padding-right:  5px;\r\n}\r\n\r\n.template-imgouter img  {\r\n    \r\n    box-shadow:0px 0px 12px rgba(0, 0, 0, 0.3);\r\n    \r\n    border:3px solid #fff;\r\n    \r\n}\r\n.btn-preview  {\r\n    margin-right:  10px !important;\r\n}\r\na:focus  {\r\n    outline:none !important;\r\n}\r\n\r\n.choosetemp-actions .btn-red-outline i {\r\n    display:block !important;\r\n    color: #fb545b;\r\n}\r\n\r\n@media (min-width:5120px) and (max-width:5120px) {\r\n    .choosetem-topsec{\r\n        padding-top: 150px;\r\n    }\r\n    .choosetem-topsec p {\r\n        font-size: 48px;\r\n    }\r\n    .template-outer-light{\r\n        min-height: 1800px;\r\n        padding: 180px 35px 35px 100px;\r\n    }\r\n    .choosetem-topsec h3{\r\n        font-size: 100px;\r\n        margin-bottom: 50px;\r\n    }\r\n    .template-content h4{\r\n        font-size: 120px;\r\n        margin-bottom: 50px;\r\n    }\r\n    .template-content p {\r\n        font-size: 44px;\r\n        line-height: 64px;\r\n        float: left;\r\n    }\r\n    .template-content ul{\r\n        margin-top: 100px;\r\n        margin-bottom: 70px;\r\n    }\r\n    .template-content ul li {\r\n        margin-bottom: 40px;\r\n        font-size: 44px;\r\n    }\r\n    .template-content ul li i{\r\n        font-size: 60px;\r\n        padding-right: 80px;\r\n    }\r\n    .choosetemp-actions .btn-red-outline{\r\n        font-size: 40px;\r\n        padding: 20px 110px;\r\n    }\r\n    .template-content {\r\n        margin-top: 150px;\r\n    }\r\n    .template-imgouter img {\r\n        box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.3);\r\n        border: 13px solid #fff;\r\n    }\r\n    .img-1{\r\n        top: -30px !important;\r\n        left: 12% !important;\r\n        width: 80% !important;\r\n    }\r\n    .img-2 {\r\n        top: 573px !important;\r\n        left: 100px !important;\r\n        width: 55% !important;\r\n    }\r\n    .img-3{\r\n        top: 265px;\r\n        right: -140px;\r\n        width: 50%;\r\n    }\r\n    .img_left-1{\r\n        top: -30px;\r\n        left: -60px;\r\n        width: 80%;\r\n    }\r\n    .img_left-2{\r\n        top: 457px;\r\n        left: 27%;\r\n        width: 70%;\r\n    }\r\n    .template-outer{\r\n        min-height: 1880px;\r\n        padding: 130px 100px 35px 35px;\r\n    }\r\n\r\n}"

/***/ }),

/***/ 1224:
/***/ (function(module, exports) {

module.exports = "<sd-toolbar [page]=\"'templates'\"></sd-toolbar>\r\n<div class=\"preloader\" *ngIf=\"loader==0\">\r\n  <div class=\"status\">&nbsp;</div>\r\n</div>\r\n<!-- Choose temp top Section -->\r\n<div class=\"col-md-12 col-sm-12 col-xs-12 choosetem-topsec\">\r\n  <h3>Select from one of our beautiful & optimized templates.</h3>\r\n  <p>\r\n    All of our templates have been optimized for lead conversion, SEO and are build using the latest design standards.\r\n  </p>\r\n</div>\r\n<!-- Choose temp top Section End-->\r\n\r\n<!-- Choose temp boxes start-->\r\n        <div class=\"template-outer-main\" *ngIf=\"templates.length\">\r\n            <div  *ngFor=\"let template of getAvailableTemplates();let s = index\" [class.template-outer]=\"s%2==1\" [class.template-outer-light]=\"s%2==0\">\r\n              <div class=\"col-md-7 col-xs-12 template-imgouter np \" *ngIf=\"s%2==1\" [class.recom-outer-image]=\"temp_type==='Recommendation'\">\r\n                 <img *ngFor=\"let image of template.previewImages; let i = index\" [src]=\"image\" class = \"img_left-{{i+1}}  bounceIn{{i+1}} animated go\" alt=\"\" />\r\n                </div>\r\n                <div class=\"col-md-5 col-xs-12 template-content np\">\r\n                    <div class=\" pull-left pl20\">\r\n                        <!--<h4>{{template.name}}The<span></span></h4>-->\r\n                        <h4>{{template.name.substr(0,3)}} <span>{{template.name.substr(3,template.name.length)}}</span></h4>\r\n                        <p>{{template.description}}</p>\r\n                        <ul>\r\n                            <li *ngFor = \"let feature of template.features\"><i class=\"material-icons\">done</i><span>{{feature}}</span></li>\r\n                        </ul>\r\n\r\n                        <div class=\"choosetemp-actions\">\r\n                             <!--<button type=\"\" class=\"btn btn-red-outline btn-hover btn-preview\" (click)=\"onPreview(template.selector)\"> Preview</button>-->\r\n                             <!--<button type=\"\" class=\"btn btn-red-outline btn-hover btn-preview\" (click)=\"onPreview(template.selector) \" > Preview</button>-->\r\n                             <button type=\"\" class=\"btn btn-red-outline btn-hover\" (click)=\"selectTemplate(template.selector, $event)\"><i class=\"material-icons\" *ngIf=\"!getFeatureaccess(template.selector)\">lock_outline</i> Use Template</button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-7 col-xs-12 template-imgouter np\" *ngIf=\"s%2==0\">\r\n                  <img *ngFor=\"let image of template.previewImages; let i = index\" [src]=\"image\" class = \"img-{{i+1}} bounceIn{{i+1}} animated go\" alt=\"\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"template-outer hide\" >\r\n                <div class=\"col-md-7 col-xs-12 template-imgouter np\">\r\n                    <img class=\"img-4\" src=\"../../../../../assets/images/templatePreviews/sound_cloud/images/1.png\">\r\n                    <img class=\"img-5\" src=\"../../../../../assets/images/templatePreviews/sound_cloud/images/2.png\">\r\n                </div>\r\n                <div class=\"col-md-5 col-xs-12 template-content np\">\r\n                    <div class=\"col-md-offset-2 pull-left\">\r\n                        <h4>The Londoner</h4>\r\n                        <p>A favorite among the geeks, this UX provides for unmatched interactivity. You can let your users play with your numbers and see results in real time.</p>\r\n                        <ul>\r\n                            <li><i class=\"material-icons\">done</i><span>You can never go wrong with this classic and sophisticated UX.</span></li>\r\n                            <li><i class=\"material-icons\">done</i><span>It looks great on all screen sizes and is a hot favorite among design agencies.</span></li>\r\n                            <li><i class=\"material-icons\">done</i><span>   It looks great on all screen sizes </span></li>\r\n                        </ul>\r\n                        <div class=\"choosetemp-actions\">\r\n                             <button type=\"\" class=\"btn btn-red-outline btn-hover btn-preview\"> Preview</button>\r\n                             <button type=\"\" class=\"btn btn-red-outline btn-hover\" (click)=\"selectTemplate(template.selector, $event)\"><i class=\"material-icons\">lock_outline</i> Use Template  </button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"template-outer-light hide\" >\r\n                <div class=\"col-md-5 col-xs-12 template-content np\">\r\n                    <div class=\"col-md-offset-2 pull-left\">\r\n                        <h4>The Greek</h4>\r\n                        <p>An intelligent design that makes the longest of calculators seem like a friendly conversation.</p>\r\n                        <ul>\r\n                            <li><i class=\"material-icons\">done</i><span>You can never go wrong with this classic and sophisticated UX.</span></li>\r\n                            <li><i class=\"material-icons\">done</i><span>It looks great on all screen sizes and is a hot favorite among design agencies.</span></li>\r\n                            <li><i class=\"material-icons\">done</i> <span>   It looks great on all screen sizes</span></li>\r\n                        </ul>\r\n                        <div class=\"choosetemp-actions\">\r\n                            <button type=\"\" class=\"btn btn-red-outline btn-hover btn-preview\"> Preview</button>\r\n                             <button type=\"\" class=\"btn btn-red-outline btn-hover\" (click)=\"selectTemplate(template.selector, $event)\">Use Template</button>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-7 col-xs-12 template-imgouter np\">\r\n                    <img class=\"img-1\" src=\"../../../../../assets/images/templatePreviews/inline_temp/images/1.png\">\r\n                    <img class=\"img-2\" src=\"../../../../../assets/images/templatePreviews/inline_temp/images/2.png\">\r\n                    <img class=\"img-3\" src=\"../../../../../assets/images/templatePreviews/inline_temp/images/3.png\">\r\n                </div>\r\n            </div>\r\n            <!--  temp boxes start -->\r\n<div class=\"template-outer hide\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 dummy-tempsec\">\r\n      <h3>Select from one of our beautiful & optimized templates.</h3>\r\n      <p>\r\n        All of our templates have been optimized for lead conversion, SEO and are build using the latest design standards.\r\n      </p>\r\n</div>\r\n\r\n  <div class=\"col-xs-12 np choosetemp-boxes-outr \" *ngIf=\"templates.length\">\r\n    <div class=\"hide\">\r\n      <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngFor=\"let template of getAvailableTemplates();let s = index\">\r\n        <div class=\"choosetemp-box2\" [class.temp2]=\"s%2==1\" [class.temp1]=\"s%2==0\">\r\n          <figure class=\"choosetemp-box-figure2 col-sm-12 col-xs-12 np\">\r\n            <div class=\"choosetemp-top1\">\r\n              <div class=\"hs_container hs_container_1920\">\r\n                <!-- <div class=\"hs_area hs_area1\" data-toggle=\"modal\" data-target=\"#temp-preview\" (click)=\"onPreview(template.selector)\">\r\n                    <img *ngFor=\"let image of template.previewImages; let i = index\" [src]=\"image\" [class.hs_visible]=\"i==0\" alt=\"\" />\r\n                </div>  -->\r\n                <div class=\"hs_area hs_area1\" (click)=\"selectTemplate(template.selector, $event)\">\r\n                  <img *ngFor=\"let image of template.previewImages; let i = index\" [src]=\"image\" [class.hs_visible]=\"i==0\" alt=\"\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </figure>\r\n          <ul class=\"choosetemp-social col-sm-1 col-xs-12 hide\">\r\n            <li>\r\n              <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\r\n                <i class=\"material-icons\">share</i> 4500\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\r\n                <i class=\"material-icons\">favorite</i> 2520\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\r\n                <i class=\"material-icons\">people</i> 3550\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <div class=\"choosetemp-actions\">\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n              <h3 class=\"col-md-9 col-sm-9 col-xs-9 np ct-w100\">{{template.name}}</h3>\r\n              <div class=\"col-md-3 col-sm-3 col-xs-3 np ct-w100\">\r\n                <button type=\"\" class=\"btn btn-red-outline btn-hover\" (click)=\"selectTemplate(template.selector, $event)\">Use Template</button>\r\n              </div>\r\n              <p>\r\n                {{template.description}}\r\n              </p>\r\n            </div>\r\n            <!--<button type=\"\" class=\"btn btn-red-outline btn-hover hide\" (click)=\"onPreview(template.selector)\">Preview</button>-->\r\n            <label class=\"choosetemp-label\" *ngIf=\"template.isPremium\">PREMIUM</label>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-sm-6 col-xs-12\" *ngFor=\"let template of getNotAvailableTemplates();let s = index\">\r\n      <div class=\"choosetemp-box2\" [class.temp2]=\"s%2==1\" [class.temp1]=\"s%2==0\">\r\n        <!-- <figure class=\"choosetemp-box-figure2 col-sm-12 col-xs-12 np\">\r\n            <div class=\"choosetemp-top1\">\r\n                <div class=\"hs_container\">\r\n                    <div class=\"hs_area hs_area1\" data-toggle=\"modal\" data-target=\"#temp-preview\" (click)=\"onPreview(template.selector)\">\r\n                        <img *ngFor=\"let image of template.previewImages; let i = index\" [src]=\"image\" [class.hs_visible]=\"i==0\" alt=\"\" />\r\n                    </div>\r\n                    <div class=\"hs_area hs_area1\">\r\n                        <div class=\"not-available\">\r\n                            <i class=\"material-icons\">lock</i>\r\n                            <img  [src]=\"template.previewImages[0]\" class=\"test\" [class.hs_visible]=\"true\" alt=\"\"/>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </figure> -->\r\n\r\n        <div class=\"col-xs-12 col-sm-12 \" >\r\n          <div class=\"choose-temp-soon\">\r\n            <img [src]=\"template.previewImages[0]\" class=\"hs_visible\">\r\n            <div class=\"choose-temp-soon-hover\">\r\n              <i class=\"material-icons\">lock</i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"choosetemp-social col-sm-1 col-xs-12 hide\">\r\n          <li>\r\n            <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\r\n              <i class=\"material-icons\">share</i> 4500\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\r\n              <i class=\"material-icons\">favorite</i> 2520\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\r\n              <i class=\"material-icons\">people</i> 3550\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <div class=\"choosetemp-actions\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n            <!--<h3 class=\"col-md-12 col-sm-12 col-xs-12 np\">{{template.name}}</h3>-->\r\n            <!-- <div class=\"col-md-3 col-sm-3 col-xs-3 np\">\r\n                <button type=\"\" *ngIf=\"template.available\" class=\"btn btn-red-outline btn-hover\" (click)=\"selectTemplate(template.selector, $event)\">Use Template</button>\r\n            </div>-->\r\n            <!--<p>\r\n                {{template.description}}\r\n            </p>-->\r\n          </div>\r\n          <!--<button type=\"\" class=\"btn btn-red-outline btn-hover hide\"  (click)=\"onPreview(template.selector)\">Preview</button>-->\r\n          <label class=\"choosetemp-label\" *ngIf=\"template.isPremium\">PREMIUM</label>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--   temp boxes end  -->\r\n        </div>\r\n        <!--  Choose temp boxes end -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- Start: Modal Template Preview -->\r\n<div id=\"temp-preview\" class=\"modal fade temp-preview\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"temp-preview-dialog modal-anim\">\r\n    <!-- Modal content-->\r\n    <div class=\"temp-preview-content modal-bg\">\r\n      <!-- <div class=\"temp-preview-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <i class=\"material-icons\">close</i></button>\r\n              <h4 class=\"modal-title\">Login</h4>\r\n      </div> -->\r\n      <div class=\"temp-preview-body\">\r\n        <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"appJson=undefined\">\r\n          <i class=\"material-icons\">cancel</i>\r\n        </button>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n          <!--<div class=\"col-md-12 col-sm-12 col-xs-12 responsive-menu\">\r\n            <button type=\"\" class=\"btn btn-red-outline btn-hover btn-preview hide\" data-toggle=\"modal\" data-target=\"#temp-preview\">Preview</button>\r\n            <button type=\"\" class=\"btn btn-red-outline btn-hover\" (click)=\"selectTemplate(tempname,$event)\">Use Template</button>\r\n          </div>-->\r\n\r\n           <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                 <iframe *ngIf=\"src\" [src]=\"src | safeUrl\"></iframe>\r\n          </div>\r\n\r\n          <!--<div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"tempname==='one-page-slider'\">\r\n            <img src=\"assets/images/temp1.jpg\" class=\"img-responsive\">\r\n          </div>\r\n\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"tempname==='sound-cloud'\">\r\n            <img src=\"assets/images/temp2.jpg\" class=\"img-responsive\">\r\n          </div>-->\r\n\r\n          <!-- <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                 <og-preview *ngIf=\"appJson\" [json]=\"appJson\"></og-preview>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"modal-footer\">\r\n\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- End: Modal Template Preview -->\r\n\r\n\r\n"

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_component__ = __webpack_require__(1078);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_services_DefaultJSON_service__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_module__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templates_pipes_pipes_module__ = __webpack_require__(473);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesModule", function() { return TemplatesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TEMPLATES_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__templates_component__["a" /* TemplatesComponent */]
    }
];
var TemplatesModule = (function () {
    function TemplatesModule() {
    }
    TemplatesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(TEMPLATES_ROUTES), __WEBPACK_IMPORTED_MODULE_6__templates_pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_module__["a" /* ToolbarModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__templates_component__["a" /* TemplatesComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__templates_services_DefaultJSON_service__["a" /* DefaultJSON */]]
        }), 
        __metadata('design:paramtypes', [])
    ], TemplatesModule);
    return TemplatesModule;
}());
//# sourceMappingURL=E:/Node/Outgrow-frontend/src/templates.module.js.map

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

/***/ })

});
//# sourceMappingURL=7.bundle.map