webpackJsonp([8,12],{

/***/ 1020:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_services_DefaultJSON_service__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_marketing_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_script_service__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TemplatesComponent; });
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
    function TemplatesComponent(subDomainService, companyService, _router, _defaultJson, _script, _marketingService) {
        this.subDomainService = subDomainService;
        this.companyService = companyService;
        this._router = _router;
        this._defaultJson = _defaultJson;
        this._script = _script;
        this._marketingService = _marketingService;
        this.templates = [];
        this.loader = 0;
        this.subDomain = subDomainService.subDomain;
        this.company_id = this.subDomain.company_id;
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
    TemplatesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.companyService.getTemplates()
            .subscribe(function (response) {
            _this.templates = response;
            _this.loader = 1;
            setTimeout(function () { _this.animation(); }, 500);
        }, function (error) {
            console.log(error);
        });
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
        //
    };
    TemplatesComponent.prototype.selectTemplate = function (selector, $event) {
        var button = jQuery($event.target);
        button.html('Initializing');
        button.addClass('loading');
        button.attr('disabled', true);
        localStorage.setItem('temp_name', selector);
        window.location.href = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].APP_EXTENSION + '/builder/';
        //this._router.navigate(['/builder']);
        /*---- Tracking code goes here ----*/
        ga('markettingteam.send', 'event', 'Builder', 'Click', 'UseTemplate');
        _kmq.push(['record', 'Builder Use Template Click', { 'Template': selector }]);
        /*---------------------------------*/
    };
    TemplatesComponent.prototype.onPreview = function (template) {
        this.tempname = template;
        var app = this._defaultJson.getJSON(template);
        app.setTemplateName(template);
        this.appJson = app;
        localStorage.setItem('template', JSON.stringify(this.appJson));
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-templates',
            template: __webpack_require__(1149),
            styles: [__webpack_require__(1074)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["a" /* SubDomainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* CompanyService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__templates_services_DefaultJSON_service__["a" /* DefaultJSON */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__templates_services_DefaultJSON_service__["a" /* DefaultJSON */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_script_service__["a" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_services_script_service__["a" /* Script */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_marketing_service__["a" /* MarketingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_marketing_service__["a" /* MarketingService */]) === 'function' && _f) || Object])
    ], TemplatesComponent);
    return TemplatesComponent;
    var _a, _b, _c, _d, _e, _f;
}());


/***/ },

/***/ 1074:
/***/ function(module, exports) {

module.exports = "/* Choose Template css start (sahil) */\r\n\r\n.choosetem-topsec {\r\n  padding-top: 35px;\r\n  text-align: center;\r\n  background: #f6f8f9;\r\n  /*padding-bottom: 40px;*/\r\n}\r\n\r\n.choosetem-topsec h3 {\r\n  font-size: 30px;\r\n  font-family: montserratbold;\r\n  color: rgba(251, 95, 102, 0.8);\r\n  margin-top: 0px;\r\n}\r\n\r\n.choosetem-topsec p {\r\n  color: rgba(102, 105, 109, 0.8);\r\n  font-family: montserratlight;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  margin: 0 auto;\r\n  width: 65%;\r\n}\r\n\r\n.choosetemp-boxes-outr {\r\n  float: left;\r\n  min-height: 250px;\r\n  padding: 35px;\r\n  background: #f6f8f9;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.choosetemp-boxes-outr .choosetemp-box2 {\r\n  float: left;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  /*padding-right: 20px;*/\r\n  /*min-height: 339px;*/\r\n  /*min-height: 37vw;*/\r\n}\r\n\r\n/*.choosetemp-box2.ct-box-last {\r\n    padding-right: 0px;\r\n}*/\r\n\r\n.choosetemp-box2.temp1 {\r\n  padding-right: 10px;\r\n}\r\n\r\n.choosetemp-box2.temp2 {\r\n  padding-left: 10px;\r\n}\r\n\r\n.choosetemp-box-figure2 {\r\n  padding-left: 0px;\r\n  float: left;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  min-height: 330px;\r\n}\r\n\r\n.choosetemp-top1 {\r\n  /*background-image: url(../images/choose-temp1.jpg);*/\r\n  float: left;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  /*box-shadow: 0 0px 10px 1px rgba(0,0,0,0.3);*/\r\n  min-height: 330px;\r\n}\r\n\r\n.choosetemp-top2 {\r\n  background-image: url(../images/choose-temp3.jpg);\r\n  float: left;\r\n  width: 100%;\r\n  box-shadow: 0 0px 10px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n.choosetemp-top3 {\r\n  background-image: url(../images/choose-temp3.jpg);\r\n  float: left;\r\n  width: 100%;\r\n  min-height: 339px;\r\n  box-shadow: 0 0px 10px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n.choosetemp-top4 {\r\n  background-image: url(../images/choose-temp4.jpg);\r\n  float: left;\r\n  width: 100%;\r\n  min-height: 339px;\r\n  box-shadow: 0 0px 10px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n.choosetemp-top5 {\r\n  background-image: url(../images/choose-temp5.jpg);\r\n  float: left;\r\n  width: 100%;\r\n  min-height: 339px;\r\n  box-shadow: 0 0px 10px 1px rgba(0,0,0,0.3);\r\n}\r\n\r\n.choosetemp-actions {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n\r\n.choosetemp-actions .btn-red-outline {\r\n  color: #fb545b;\r\n  background-color: #fff;\r\n  border-color: #ffb5b8;\r\n  border-radius: 0;\r\n  font-size: 11px;\r\n  padding: 7px 35px;\r\n  margin: 0px;\r\n  margin-right: 0px;\r\n  transition: all 0.3s ease 0s;\r\n  font-family: montserratregular;\r\n  text-transform: uppercase;\r\n  float: right;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.choosetemp-actions .btn-red-outline.hvr-sweep-to-right::before {\r\n  background: #ffb5b8 none repeat scroll 0 0;\r\n  color: #fff !important;\r\n}\r\n\r\n.choosetemp-social {\r\n  float: right;\r\n  padding: 0px;\r\n}\r\n\r\n.choosetemp-social li {\r\n  float: left;\r\n  width: 50px;\r\n  text-align: center;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.choosetemp-social li a {\r\n  float: left;\r\n  padding: 5px;\r\n  color: #bec5c9;\r\n  line-height: 17px;\r\n}\r\n\r\n.choosetemp-social li a:hover {\r\n  color: #fb545b;\r\n}\r\n\r\n.choosetemp-social li a i:hover {\r\n  color: #fb545b;\r\n}\r\n\r\n.choosetemp-social li a i {\r\n  float: none;\r\n  color: #bec5c9;\r\n  font-size: 18px;\r\n}\r\n\r\n.choosetemp-label {\r\n  background: #fb5f66 none repeat scroll 0 0;\r\n  border-radius: 58px;\r\n  color: #fff;\r\n  float: right;\r\n  font-size: 11px;\r\n  font-weight: normal;\r\n  padding: 0 12px;\r\n  text-transform: uppercase;\r\n  width: auto;\r\n  margin-right: 5px;\r\n  margin-top: 7px;\r\n}\r\n\r\n.choosetemp-actions h3 {\r\n  color: #fb5f66;\r\n  float: left;\r\n  font-size: 24px;\r\n  margin-bottom: 0;\r\n  margin-top: 0px;\r\n  font-family: montserratlight;\r\n  /*width: 100%;*/\r\n  text-transform: capitalize;\r\n}\r\n\r\n.choosetemp-actions p {\r\n  color: #62696d;\r\n  float: left;\r\n  font-size: 14px;\r\n  width: 100%;\r\n  font-family: montserratlight;\r\n  margin-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n.hs-wrapper{\r\n  float: left;\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.hs-wrapper img{\r\n  display: none;\r\n  z-index: 9;\r\n}\r\n.img-block{\r\n  display: block !important;\r\n}\r\n.hs_container{\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  clear: both;\r\n  cursor: pointer;\r\n  min-height: 330px;\r\n}\r\n.hs_container .hs_area{\r\n  /*float: left;*/\r\n  position: absolute;\r\n  overflow: hidden;\r\n}\r\n/*.hs_area img{\r\n\tdisplay:none;\r\n    position: absolute;\r\n    min-height: 339px;\r\n    width: 100%;\r\n}*/\r\n\r\n.hs_area img{\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: none;\r\n  width: 100%;\r\n}\r\n\r\n.hs_area img.hs_visible{\r\n  display: block;\r\n  z-index: 9;\r\n  width: 100%;\r\n  /*float: left;\r\n  /*min-height: 339px;*/\r\n}\r\n.hs_area1{\r\n  width:100%;\r\n  height:100%;\r\n  top:0px;\r\n  left:0px;\r\n}\r\n\r\n/* Choose Template css end (sahil) */\r\n\r\n/* Preloader */\r\n\r\n.preloader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #fff;\r\n  /* change if the mask should be a color other than white */\r\n  z-index: 9999;\r\n  /* makes sure it stays on top */\r\n}\r\n\r\n.status {\r\n  width: 200px;\r\n  height: 200px;\r\n  position: absolute;\r\n  left: 50%;\r\n  /* centers the loading animation horizontally on the screen */\r\n  top: 50%;\r\n  /* centers the loading animation vertically on the screen */\r\n  background-image: url(\"assets/images/loaders/logoAnim.gif\");\r\n  /* path to your loading animation */\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  margin: -100px 0 0 -100px;\r\n  /* is width and height divided by two */\r\n}\r\n\r\n/* Start: locked images */\r\n\r\n.not-available {\r\n  float: left;\r\n  width: 100%;\r\n  /*background: #fb5f66;*/\r\n  z-index: 9;\r\n  position: relative;\r\n  height: 100%;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.not-available:hover {\r\n  background: #fb5f66;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n/*.not-available-table {\r\n    vertical-align: middle;\r\n    float: none;\r\n    display: table-cell;\r\n}*/\r\n\r\n.not-available i.material-icons {\r\n  font-size: 30px;\r\n  color: #fff;\r\n  text-align: center;\r\n  position: absolute;\r\n  left: 45%;\r\n  top: 40%;\r\n  background: rgba(255,255,255,0.28);\r\n  border-radius: 50%;\r\n  padding: 13px;\r\n  z-index: 99;\r\n  display: none;\r\n}\r\n\r\n.not-available:hover i.material-icons{\r\n  display: block;\r\n}\r\n\r\n/*.not-available .choosetemp-box-figure2 {\r\n    background: rgba(0,0,0, 0.7);\r\n}*/\r\n\r\n/*.not-available .choosetemp-top1{\r\n    opacity: 0.7;\r\n}*/\r\n\r\n.not-available img.hs_visible{\r\n  display: block !important;\r\n  z-index: 9;\r\n  left: 0px !important;\r\n  top: 0px !important;\r\n  opacity: 0.5 !important;\r\n  width: 100%\r\n}\r\n\r\n.not-available .hs_area img {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  display: block !important;\r\n  opacity: 0.5 !important;\r\n  width: 100%\r\n}\r\n\r\n.not-available .choosetemp-actions h3{\r\n  opacity: 0.5 !important;\r\n}\r\n\r\n.not-available .choosetemp-actions p{\r\n  opacity: 0.5 !important;\r\n}\r\n\r\n/* End: locked images */\r\n\r\n/* Start: Modal Template Preview */\r\n/*.modal#temp-preview {\r\n    overflow-y: hidden;\r\n}*/\r\n\r\n#temp-preview.temp-preview {\r\n  width: 100%;\r\n  float: left;\r\n  padding-right: 0px !important;\r\n  padding-left: 0px !important;\r\n  /*background: #fff;*/\r\n  background: rgba(0, 0, 0, 0.25) !important;\r\n  /*background: rgba(251, 84, 91, 0.9) !important;*/\r\n}\r\n\r\n#temp-preview .temp-preview-content{\r\n  border-radius: 0px;\r\n  /*border: 1px solid #e9eef0;*/\r\n  float: left;\r\n  width: 100%;\r\n}\r\n\r\n#temp-preview .temp-preview-header {\r\n  padding: 20px 25px;\r\n  border-bottom: none;\r\n}\r\n\r\n#temp-preview .logo-section{\r\n  margin-bottom: 40px;\r\n}\r\n\r\n#temp-preview .logo-section span{\r\n  display: block;\r\n  font-size: 30px;\r\n  color: #fb545b;\r\n  font-family: montserratultra_light;\r\n  line-height: 36px;\r\n  margin-top: 10px;\r\n}\r\n\r\n#temp-preview .temp-preview-logo{\r\n  /*margin-bottom: 50px;\r\n  margin-top: 40px;*/\r\n}\r\n\r\n#temp-preview .temp-preview-body {\r\n  position: relative;\r\n  /*padding: 15px;*/\r\n  float: left;\r\n  width: 100%;\r\n  /*background: #f6f8f9;*/\r\n  z-index: 9999;\r\n}\r\n\r\n#temp-preview.temp-preview button.close.btn-close {\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 15px;\r\n  z-index: 9;\r\n  opacity: 0.7;\r\n  transition: all 0.3s ease 0s !important;\r\n}\r\n\r\n#temp-preview.temp-preview button.close.btn-close:focus,\r\n#temp-preview.temp-preview button.close.btn-close:hover {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  filter: alpha(opacity=50);\r\n  opacity: .9 !important;\r\n}\r\n\r\n#temp-preview.temp-preview button.close.btn-close i.material-icons {\r\n  font-size: 18px;\r\n  color: #fff;\r\n}\r\n\r\na.text-red{\r\n  color: #fb545b;\r\n}\r\n\r\na.text-red:hover, a.text-red:focus{\r\n  color: #fa5282;\r\n}\r\n\r\n#temp-preview.temp-preview .responsive-menu {\r\n  /*background: rgba(0, 0, 0, 0.45);*/\r\n  color: #fff;\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 0px;\r\n  position: relative;\r\n  z-index: 0;\r\n  margin: 0 auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  left: 0px;\r\n  right: 0;\r\n  top: 0px;\r\n  font-size: 13px;\r\n  background: rgba(251, 84, 91, 0.9) !important;\r\n  padding: 10px;\r\n  border-bottom: 1px solid #fb545b;\r\n}\r\n\r\n#temp-preview.temp-preview iframe {\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: relative;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0px;\r\n  border: none;\r\n  margin-top: 50px;\r\n}\r\n\r\n#temp-preview.temp-preview .btn-red-outline {\r\n  color: #fb545b;\r\n  background-color: #fff;\r\n  border-color: #ffb5b8;\r\n  border-radius: 0;\r\n  font-size: 11px;\r\n  padding: 6px 30px;\r\n  margin: 0;\r\n  transition: all 0.3s ease 0s;\r\n  font-family: montserratregular;\r\n  text-transform: uppercase;\r\n  float: none;\r\n}\r\n\r\n#temp-preview.temp-preview .btn-preview {\r\n  margin-right: 10px !important;\r\n  background: #fb545b !important;\r\n  color: #fff !important;\r\n  border: 1px solid #fb545b !important;\r\n}\r\n\r\n#temp-preview.temp-preview img.img-responsive {\r\n  width: 100%;\r\n}\r\n\r\n/* End: Modal Template Preview */\r\n\r\n/* Start: loading dots */\r\n\r\n.loading:after {\r\n  content: ' .';\r\n  animation: dots 1s steps(5, end) infinite;\r\n  font-size: 18px;\r\n  line-height: 1px;\r\n  position: relative;\r\n  left: -3px;\r\n}\r\n\r\n@keyframes dots {\r\n  0%, 20% {\r\n    color: rgba(0,0,0,0);\r\n    text-shadow: .25em 0 0 rgba(0,0,0,0),\r\n    .5em 0 0 rgba(0,0,0,0);\r\n  }\r\n\r\n  40% {\r\n    color: white;\r\n    text-shadow: .25em 0 0 rgba(0,0,0,0),\r\n    .5em 0 0 rgba(0,0,0,0);\r\n  }\r\n\r\n  60% {\r\n    text-shadow: .25em 0 0 white,\r\n    .5em 0 0 rgba(0,0,0,0);\r\n  }\r\n  80%, 100% {\r\n    text-shadow: .25em 0 0 white,\r\n    .5em 0 0 white;\r\n  }\r\n\r\n}\r\n\r\n/* End: loading dots */\r\n\r\n/* Start: for disabled btn */\r\n.btn-red-outline:disabled {\r\n  background: #fb545b !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* End: for disabled btn */\r\n\r\n/* Start: responsive */\r\n\r\n@media screen and (min-width: 320px) and (max-width: 767px){\r\n  .choosetem-topsec{\r\n    /*margin-top: 40px;*/\r\n  }\r\n\r\n  .choosetem-topsec p{\r\n    width: 90%;\r\n  }\r\n\r\n  .choosetemp-boxes-outr{\r\n    padding: 15px;\r\n    padding-top: 35px;\r\n    height: 100%;\r\n  }\r\n\r\n  .choosetemp-box2.temp1{\r\n    padding-right: 0;\r\n  }\r\n\r\n  .choosetemp-box2.temp2{\r\n    padding-left: 0;\r\n  }\r\n\r\n  .choosetemp-box2{\r\n    padding-right: 0;\r\n    /*min-height: 304px;*/\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 320px) and (max-width: 320px) {\r\n  .ct-w100 {\r\n    width: 100%;\r\n  }\r\n\r\n  .ct-w100 button.btn.btn-red-outline {\r\n    float: left !important;\r\n    margin-top: 15px !important;\r\n  }\r\n\r\n  .choosetemp-box-figure2 {\r\n    min-height: 134px !important;\r\n  }\r\n\r\n  .choosetemp-top1 {\r\n    min-height: 134px !important;\r\n  }\r\n\r\n  .hs_container {\r\n    min-height: 134px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 134px !important;\r\n  }\r\n\r\n  .choose-temp-soon i.material-icons{\r\n    top: 30% !important;\r\n  }\r\n\r\n}\r\n\r\n/* samsung galaxy s3 */\r\n@media screen and (min-width: 360px) and (max-width: 360px) {\r\n  .ct-w100 {\r\n    width: 100%;\r\n  }\r\n\r\n  .ct-w100 button.btn.btn-red-outline {\r\n    float: left !important;\r\n    margin-top: 15px !important;\r\n  }\r\n\r\n  .choosetem-topsec{\r\n    /*margin-top: 40px;*/\r\n  }\r\n\r\n  .choosetem-topsec p{\r\n    width: 90%;\r\n  }\r\n\r\n  .choosetemp-boxes-outr{\r\n    padding: 15px;\r\n    padding-top: 35px;\r\n    height: 100%;\r\n  }\r\n\r\n  .choosetemp-box2.temp1{\r\n    padding-right: 0;\r\n  }\r\n\r\n  .choosetemp-box2.temp2{\r\n    padding-left: 0;\r\n  }\r\n\r\n  .choosetemp-box2{\r\n    padding-right: 0;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .choosetemp-box-figure2 {\r\n    min-height: 156px !important;\r\n  }\r\n\r\n  .choosetemp-top1 {\r\n    min-height: 156px !important;\r\n  }\r\n\r\n  .hs_container {\r\n    min-height: 156px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 156px !important;\r\n  }\r\n\r\n  .choose-temp-soon i.material-icons{\r\n    top: 30% !important;\r\n  }\r\n\r\n}\r\n/* samsung galaxy s3 */\r\n\r\n@media screen and (min-width: 480px) and (max-width: 480px) {\r\n  .choosetemp-box-figure2 {\r\n    min-height: 222px !important;\r\n  }\r\n\r\n  .choosetemp-top1 {\r\n    min-height: 222px !important;\r\n  }\r\n\r\n  .hs_container {\r\n    min-height: 222px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 222px !important;\r\n  }\r\n\r\n}\r\n\r\n/* Acer, Lenovo, Samsung, Sony, & so on...  */\r\n@media screen and (min-width: 600px) and (max-width: 600px) {\r\n  .choosetemp-box-figure2 {\r\n    min-height: 288px !important;\r\n  }\r\n\r\n  .choosetemp-top1 {\r\n    min-height: 288px !important;\r\n  }\r\n\r\n  .hs_container {\r\n    min-height: 288px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 288px !important;\r\n  }\r\n\r\n}\r\n/* Acer, Lenovo, Samsung, Sony, & so on...  */\r\n\r\n@media screen and (min-width: 640px) and (max-width: 640px) {\r\n  .choosetemp-box-figure2 {\r\n    min-height: 310px !important;\r\n  }\r\n\r\n  .choosetemp-top1 {\r\n    min-height: 310px !important;\r\n  }\r\n\r\n  .hs_container {\r\n    min-height: 310px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 310px !important;\r\n  }\r\n\r\n}\r\n\r\n/* iPad mini */\r\n@media screen and (min-width: 768px) and (max-width: 768px) {\r\n  .choosetemp-boxes-outr {\r\n    padding: 35px 25px;\r\n  }\r\n\r\n  .choosetemp-box2.temp1 {\r\n    padding-right: 5px;\r\n  }\r\n\r\n  .choosetemp-box2.temp2 {\r\n    padding-left: 5px;\r\n  }\r\n\r\n  .choosetemp-actions .btn-red-outline{\r\n    padding: 7px 28px;\r\n  }\r\n\r\n  .choosetemp-box2{\r\n    padding-right: 0;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .choosetemp-box-figure2 {\r\n    min-height: 174px !important;\r\n  }\r\n\r\n  .choosetemp-top1 {\r\n    min-height: 174px !important;\r\n  }\r\n\r\n  .hs_container {\r\n    min-height: 174px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 174px;\r\n  }\r\n\r\n  .choose-temp-soon i.material-icons{\r\n    top: 34% !important;\r\n  }\r\n\r\n}\r\n/* iPad mini */\r\n\r\n@media screen and (min-width: 1024px) and (max-width:1024px) {\r\n  .choosetemp-boxes-outr{\r\n    padding: 35px 25px;\r\n  }\r\n\r\n  .choosetemp-actions h3{\r\n    font-size: 23px;\r\n  }\r\n\r\n  .choosetemp-box2{\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .choosetemp-box2.temp1{\r\n    padding-right: 5px;\r\n  }\r\n\r\n  .choosetemp-box2.temp2{\r\n    padding-left: 5px;\r\n  }\r\n\r\n  .choosetemp-box-figure2{\r\n    min-height: 244px !important;\r\n  }\r\n\r\n  .choosetemp-top1{\r\n    min-height: 244px !important;\r\n  }\r\n\r\n  .hs_container{\r\n    min-height: 244px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 244px !important;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 1024px) and (max-width:1215px) {\r\n  .choosetemp-box-figure2{\r\n    min-height: 244px !important;\r\n  }\r\n\r\n  .choosetemp-top1{\r\n    min-height: 244px !important;\r\n  }\r\n\r\n  .hs_container{\r\n    min-height: 244px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 244px !important;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media screen and (min-width: 1280px) and (max-width:1280px) {\r\n  .choosetemp-box-figure2{\r\n    min-height: 302px !important;\r\n  }\r\n\r\n  .choosetemp-top1{\r\n    min-height: 302px !important;\r\n  }\r\n\r\n  .hs_container{\r\n    min-height: 302px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 302px !important;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 1200px) and (max-width:1300px) {\r\n  .choosetemp-box-figure2{\r\n    min-height: 284px !important;\r\n  }\r\n\r\n  .choosetemp-top1{\r\n    min-height: 284px !important;\r\n  }\r\n\r\n  .hs_container{\r\n    min-height: 284px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 284px !important;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1300px) and (max-width:1366px) {\r\n  .choosetemp-box-figure2{\r\n    min-height: 284px !important;\r\n  }\r\n\r\n  .choosetemp-top1{\r\n    min-height: 284px !important;\r\n  }\r\n\r\n  .hs_container{\r\n    min-height: 284px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 284px !important;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1345px) and (max-width: 1345px) {\r\n  .hs_container{\r\n    min-height: 324px !important;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1344px) and (max-width: 1365px) {\r\n  .hs_container{\r\n    min-height: 324px !important;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (min-width: 1373px) and (max-width: 1373px) {\r\n  .hs_container{\r\n    min-height: 332px !important;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (min-width: 1366px) and (max-width: 1366px) {\r\n  .choosetemp-box-figure2{\r\n    min-height: 330px !important;\r\n  }\r\n\r\n  .choosetemp-top1{\r\n    min-height: 330px !important;\r\n  }\r\n\r\n  div.hs_container{\r\n    min-height: 330px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 330px !important;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 1440px) and (max-width: 1440px) {\r\n  .choosetemp-box-figure2{\r\n    min-height: 350px !important;\r\n  }\r\n\r\n  .choosetemp-top1{\r\n    min-height: 350px !important;\r\n  }\r\n\r\n  .hs_container{\r\n    min-height: 350px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 350px !important;\r\n  }\r\n\r\n}\r\n\r\n/* iPad */\r\n@media screen and (min-width: 1536px) and (max-width: 1536px) {\r\n  .choosetemp-box-figure2{\r\n    min-height: 378px !important;\r\n  }\r\n\r\n  .choosetemp-top1{\r\n    min-height: 378px !important;\r\n  }\r\n\r\n  .hs_container{\r\n    min-height: 378px !important;\r\n  }\r\n\r\n  .hs_area.hs_area1 {\r\n    min-height: 378px !important;\r\n  }\r\n\r\n}\r\n/* iPad */\r\n\r\n@media screen and (min-width: 1380px) and (max-width: 1380px) {\r\n  .hs_container{\r\n    min-height: 334px !important;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 1368px) and (max-width: 1920px) {\r\n  /*.choosetemp-box2{ text-align: center;}\r\n  .choosetemp-box-figure2{ float: none; display: inline-block; }\r\n  .choosetemp-actions .btn-red-outline{ float: none;}*/\r\n  .img-responsive{width: 100%;}\r\n\r\n}\r\n\r\n@media screen and (min-width: 1366px) and (max-width: 1439px) {\r\n  .hs_container{\r\n    min-height: 349px !important;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 1517px) and (max-width: 1517px) {\r\n  .hs_container{\r\n    min-height: 371px !important;\r\n  }\r\n\r\n}\r\n\r\n/* google nexus */\r\n@media screen and (min-width: 1600px) and (max-width: 1600px) {\r\n  .hs_container{\r\n    min-height: 394px !important;\r\n  }\r\n\r\n}\r\n/* google nexus */\r\n\r\n@media screen and (min-width: 1680px) and (max-width: 1680px) {\r\n  .hs_container{\r\n    min-height: 416px !important;\r\n  }\r\n\r\n}\r\n\r\n/* removed min-width & added max-width only for mac safari browser */\r\n@media screen and (max-width:1920px) {\r\n  /*.choosetemp-box2{\r\n      min-height: 439px;\r\n  }\r\n\r\n  .choosetemp-box-figure2{\r\n      min-height: 439px;\r\n  }\r\n\r\n  .choosetemp-top1{\r\n      min-height: 439px;\r\n  }*/\r\n\r\n  .hs_container.hs_container_1920{\r\n    min-height: 483px;\r\n  }\r\n\r\n  /*.hs_area img.hs_visible {\r\n      min-height: 439px;\r\n  }\r\n\r\n  .hs_area img{\r\n      min-height: 439px;\r\n      width: 100%;\r\n  }*/\r\n\r\n  .choose-temp-soon i.material-icons{\r\n    top: 44% !important;\r\n  }\r\n\r\n}\r\n\r\n/* macbook pro 13inch */\r\n@media screen and (min-width: 2560px) and (max-width: 2560px) {\r\n  .hs_container{\r\n    min-height: 660px !important;\r\n  }\r\n\r\n}\r\n\r\n/* End: responsive */\r\n\r\n/* Start: coming soon templates */\r\n.choose-temp-soon{\r\n\r\n}\r\n\r\n.choose-temp-soon .choose-temp-soon-hover{\r\n  display: block;\r\n  background: rgba(251,84,91,0.3);\r\n  height: 100%;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  transition: background 0.3s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.choose-temp-soon i.material-icons {\r\n  display: none;\r\n  font-size: 30px;\r\n  color: #fff;\r\n  text-align: center;\r\n  position: relative;\r\n  top: 40%;\r\n  background: rgba(255,255,255,0.28);\r\n  border-radius: 50%;\r\n  padding-top: 13px;\r\n  z-index: 99;\r\n  margin: 0 auto;\r\n  width: 55px;\r\n  height: 55px;\r\n}\r\n\r\n.choose-temp-soon i.material-icons{\r\n  display: block;\r\n}\r\n\r\n.choosetemp-box2 .temp2 {\r\n  padding-left: 10px;\r\n}\r\n\r\n.choosetemp-box2 .temp1 {\r\n  padding-right: 10px;\r\n}\r\n\r\n.choose-temp-soon img.hs_visible {\r\n  width: 100%;\r\n}\r\n\r\n/* End: coming soon templates */\r\n"

/***/ },

/***/ 1149:
/***/ function(module, exports) {

module.exports = "<sd-toolbar [page]=\"'templates'\"></sd-toolbar>\r\n<div class=\"preloader\" *ngIf=\"loader==0\">\r\n  <div class=\"status\">&nbsp;</div>\r\n</div>\r\n<!-- Choose temp top Section -->\r\n<div class=\"col-md-12 col-sm-12 col-xs-12 choosetem-topsec\">\r\n  <h3>Select from one of our beautiful & optimized templates.</h3>\r\n  <p>\r\n    All of our templates have been optimized for lead conversion, SEO and are build using the latest design standards.\r\n  </p>\r\n</div>\r\n<!-- Choose temp top Section End-->\r\n<!-- Choose temp boxes start (sahil) -->\r\n<div class=\"col-xs-12 np choosetemp-boxes-outr\" *ngIf=\"templates.length\">\r\n  <div>\r\n    <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngFor=\"let template of getAvailableTemplates();let s = index\">\r\n      <div class=\"choosetemp-box2\" [class.temp2]=\"s%2==1\" [class.temp1]=\"s%2==0\">\r\n        <figure class=\"choosetemp-box-figure2 col-sm-12 col-xs-12 np\">\r\n          <div class=\"choosetemp-top1\">\r\n            <div class=\"hs_container hs_container_1920\">\r\n              <!-- <div class=\"hs_area hs_area1\" data-toggle=\"modal\" data-target=\"#temp-preview\" (click)=\"onPreview(template.selector)\">\r\n                  <img *ngFor=\"let image of template.previewImages; let i = index\" [src]=\"image\" [class.hs_visible]=\"i==0\" alt=\"\" />\r\n              </div>  -->\r\n              <div class=\"hs_area hs_area1\" (click)=\"selectTemplate(template.selector, $event)\">\r\n                <img *ngFor=\"let image of template.previewImages; let i = index\" [src]=\"image\" [class.hs_visible]=\"i==0\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </figure>\r\n        <ul class=\"choosetemp-social col-sm-1 col-xs-12 hide\">\r\n          <li>\r\n            <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\r\n              <i class=\"material-icons\">share</i> 4500\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\r\n              <i class=\"material-icons\">favorite</i> 2520\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\r\n              <i class=\"material-icons\">people</i> 3550\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <div class=\"choosetemp-actions\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n            <h3 class=\"col-md-9 col-sm-9 col-xs-9 np ct-w100\">{{template.name}}</h3>\r\n            <div class=\"col-md-3 col-sm-3 col-xs-3 np ct-w100\">\r\n              <button type=\"\" class=\"btn btn-red-outline btn-hover\" (click)=\"selectTemplate(template.selector, $event)\">Use Template</button>\r\n            </div>\r\n            <p>\r\n              {{template.description}}\r\n            </p>\r\n          </div>\r\n          <button type=\"\" class=\"btn btn-red-outline btn-hover hide\" data-toggle=\"modal\" data-target=\"#temp-preview\" (click)=\"onPreview(template.selector)\">Preview</button>\r\n          <label class=\"choosetemp-label\" *ngIf=\"template.isPremium\">PREMIUM</label>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-6 col-xs-12\" *ngFor=\"let template of getNotAvailableTemplates();let s = index\">\r\n    <div class=\"choosetemp-box2\" [class.temp2]=\"s%2==1\" [class.temp1]=\"s%2==0\">\r\n      <!-- <figure class=\"choosetemp-box-figure2 col-sm-12 col-xs-12 np\">\r\n          <div class=\"choosetemp-top1\">\r\n              <div class=\"hs_container\">\r\n                  <div class=\"hs_area hs_area1\" data-toggle=\"modal\" data-target=\"#temp-preview\" (click)=\"onPreview(template.selector)\">\r\n                      <img *ngFor=\"let image of template.previewImages; let i = index\" [src]=\"image\" [class.hs_visible]=\"i==0\" alt=\"\" />\r\n                  </div>\r\n                   <div class=\"hs_area hs_area1\">\r\n                      <div class=\"not-available\">\r\n                          <i class=\"material-icons\">lock</i>\r\n                          <img  [src]=\"template.previewImages[0]\" class=\"test\" [class.hs_visible]=\"true\" alt=\"\"/>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </figure> -->\r\n\r\n      <div class=\"col-xs-12 col-sm-12 np\" >\r\n        <div class=\"choose-temp-soon\">\r\n          <img [src]=\"template.previewImages[0]\" class=\"hs_visible\">\r\n          <div class=\"choose-temp-soon-hover\">\r\n            <i class=\"material-icons\">lock</i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ul class=\"choosetemp-social col-sm-1 col-xs-12 hide\">\r\n        <li>\r\n          <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\r\n            <i class=\"material-icons\">share</i> 4500\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\r\n            <i class=\"material-icons\">favorite</i> 2520\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\r\n            <i class=\"material-icons\">people</i> 3550\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"choosetemp-actions\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n          <!--<h3 class=\"col-md-12 col-sm-12 col-xs-12 np\">{{template.name}}</h3>-->\r\n          <!-- <div class=\"col-md-3 col-sm-3 col-xs-3 np\">\r\n               <button type=\"\" *ngIf=\"template.available\" class=\"btn btn-red-outline btn-hover\" (click)=\"selectTemplate(template.selector, $event)\">Use Template</button>\r\n           </div>-->\r\n          <!--<p>\r\n              {{template.description}}\r\n          </p>-->\r\n        </div>\r\n        <button type=\"\" class=\"btn btn-red-outline btn-hover hide\" data-toggle=\"modal\" data-target=\"#temp-preview\" (click)=\"onPreview(template.selector)\">Preview</button>\r\n        <label class=\"choosetemp-label\" *ngIf=\"template.isPremium\">PREMIUM</label>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<!--  Choose temp boxes end (sahil) -->\r\n\r\n<!-- Start: Modal Template Preview -->\r\n<div id=\"temp-preview\" class=\"modal fade temp-preview\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"temp-preview-dialog modal-anim\">\r\n    <!-- Modal content-->\r\n    <div class=\"temp-preview-content modal-bg\">\r\n      <!-- <div class=\"temp-preview-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <i class=\"material-icons\">close</i></button>\r\n              <h4 class=\"modal-title\">Login</h4>\r\n      </div> -->\r\n      <div class=\"temp-preview-body\">\r\n        <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"appJson=undefined\">\r\n          <i class=\"material-icons\">close</i>\r\n        </button>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 responsive-menu\">\r\n            <button type=\"\" class=\"btn btn-red-outline btn-hover btn-preview hide\" data-toggle=\"modal\" data-target=\"#temp-preview\">Preview</button>\r\n            <button type=\"\" class=\"btn btn-red-outline btn-hover\" (click)=\"selectTemplate(tempname,$event)\">Use Template</button>\r\n          </div>\r\n\r\n          <!-- <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                 <iframe src=\"http://app.outgrow.us/design/backup/preview-template-1\"></iframe>\r\n          </div> -->\r\n\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"tempname==='one-page-slider'\">\r\n            <img src=\"assets/images/temp1.jpg\" class=\"img-responsive\">\r\n          </div>\r\n\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"tempname==='sound-cloud'\">\r\n            <img src=\"assets/images/temp2.jpg\" class=\"img-responsive\">\r\n          </div>\r\n\r\n          <!-- <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                 <og-preview *ngIf=\"appJson\" [json]=\"appJson\"></og-preview>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"modal-footer\">\r\n\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- End: Modal Template Preview -->\r\n"

/***/ },

/***/ 783:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_component__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_services_DefaultJSON_service__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_module__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(exports, "TemplatesModule", function() { return TemplatesModule; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(TEMPLATES_ROUTES), __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_module__["a" /* ToolbarModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__templates_component__["a" /* TemplatesComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__templates_services_DefaultJSON_service__["a" /* DefaultJSON */]]
        }), 
        __metadata('design:paramtypes', [])
    ], TemplatesModule);
    return TemplatesModule;
}());


/***/ },

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_model__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_model__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_model__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calc_email_model__ = __webpack_require__(805);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__app_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__page_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__section_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__item_model__["a"]; });
/* unused harmony reexport CalcEmail */







/***/ },

/***/ 799:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__itemNames_store__ = __webpack_require__(806);
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
            followUpText: '',
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
                hashIndex: 0,
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
                placeholder: 'John Doe',
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
                placeholder: 'John@outgrow.co',
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
            defaultOption.hashIndex = option;
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
    Section.prototype.setVisibilityOfShowDesc = function (showDesc) {
        this.showDesc = showDesc;
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

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return RECOMMENDED_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return INLINE_RECOMMENDED_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return INLINE_ITEMS; });
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
var INLINE_RECOMMENDED_ITEMS = {
    selectbox: 'Drop Down'
};
var INLINE_ITEMS = {
    textfield: 'Text Input',
    selectbox: 'Drop Down'
};


/***/ },

/***/ 807:
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
        this.theme = {};
        this.customColor = {};
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
        this.seoImage = '';
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
        var newFormula = JSON.parse(JSON.stringify(formula));
        delete newFormula._id;
        this.formula.push(newFormula);
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

/***/ 847:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_models_model__ = __webpack_require__(791);
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
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('logo', 'https://cdn.filepicker.io/api/file/NIqLhmqRRWy4WH70ycfi', 'textfield help');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('header', "CALCULATE THE RISK OF YOU GETTING A HEART DISEASE", 'textfield help', '', 'main-heading');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('sub_header', "Heart problems are at an all time high. See if your lifestyle makes you susceptible.", 'textfield help', '', 'sub-heading');
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
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', "\n                       <p>{R1}</p>\n                       <p>By age of 30</p>\n                       <p>It is not common to get a heart disease so early on in life. You'll be safe!</p>", '', '', '');
        var Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R2
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', "\n                        <p>{R2}</p>\n                        <p>By the age of 40</p>\n                        <p>You're at a higher risk, but don't worry - no need to panic.</p>\n                        ", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R3
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', "\n                        <p>{R3}</p>\n                        <p>By the age of 50</p>\n                        <p>The risks get higher, but a good diet will keep you safe.</p>\n                        ", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R4
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', "\n                        <p>{R4}</p>\n                        <p>By the age of 65</p>\n                        <p>Things get serious now. Ensure you're living healthy.</p>", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Schedule a Consultation Today', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Schedule a Consultation Today', 'textfield help');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_disclaimer', "The prices suggested are rough estimates and are not guaranteed.", '', '', 'bottom-section');
        section3.addItems(item1, item2, item3);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('share_links');
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
        var app = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* App */](); //create new app
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
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('logo', 'https://cdn.filepicker.io/api/file/NIqLhmqRRWy4WH70ycfi', 'textfield help', '', 't1-logo');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('header', "Where to build your Startup?", 'textfield help', '', 'main-heading');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('sub_header', "See which emerging tech hub you should head to!", 'textfield help', '', 'sub-heading');
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
        item1.addFieldToCheckbox([{ label: 'Super High Tech', icon: '', value: '' },
            { label: 'B2B Software', icon: '', value: '' }, { label: 'Hardware', icon: '', value: '' },
            { label: 'Consumer Software', icon: '', value: '' }, { label: 'Services', icon: '', value: '' }]);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'Which industry are you in?', '');
        item2.addFieldToCheckbox([{ label: 'Finance', icon: '', value: '' },
            { label: 'Healthcare', icon: '', value: '' }, { label: 'Real Estate', icon: '', value: '' },
            { label: 'Hospitality', icon: '', value: '' }, { label: 'Retail', icon: '', value: '' },
            { label: 'Industry Agnostic', icon: '', value: '' }]);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'When are you looking to raise funds for your startup?', '');
        item3.addFieldToCheckbox([{ label: 'Immediately', icon: '', value: '' },
            { label: 'Maybe in the Future', icon: '', value: '' }, { label: 'Not at All', icon: '', value: '' }]);
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'How many developers will you need to hire in the next one year?', '', '');
        item4.addFieldToCheckbox([{ label: 'None', icon: '', value: '' },
            { label: '1-3', icon: '', value: '' }, { label: '3-10', icon: '', value: '' },
            { label: '10-50', icon: '', value: '' }]);
        var item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'Do you have a family?', '', '');
        item5.addFieldToCheckbox([{ label: 'I am Single', icon: '', value: '' },
            { label: 'I am Married', icon: '', value: '' }, { label: 'I am a Father/Mother', icon: '', value: '' }]);
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
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Learn More', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Learn More', 'textfield help', '', 't1-result-cta');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_disclaimer', "The prices suggested are rough estimates and are not guaranteed.", '', '', 'bottom-section');
        item3.setVisibility(false);
        section3.addItems(item1, item2, item3);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('share_links');
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
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('logo', 'https://cdn.filestackcontent.com/RycvxkK6QgSX2OAVqPm6', 'textfield help', '', 't1-logo');
        // let item0 = new Item('Item', '../../+builder/assets/template1-logo.png', 'textfield help');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('header', "How much should you pay for a video campaign?", 'textfield help', '', 'main-heading');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('sub_header', "Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!", 'textfield help', '', 'sub-heading');
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
        item3.addFieldToCheckbox([{ label: 'Web', icon: '' },
            { label: 'TV', icon: '' }]);
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'What do you expect the length of the video to be?', 'Please add the help text', '');
        item4.addFieldToCheckbox([{ label: 'Less than 1 minute', icon: '' },
            { label: '1-5 minute', icon: '' },
            { label: '5-20 minutes', icon: '' },
            { label: 'Over 20 minutes', icon: '' }]);
        var item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('radio_button', 'What sort of a setting are you considering?', 'Please add the help text');
        item5.addFieldToCheckbox([{ label: 'Indoor', icon: '' },
            { label: 'Outdoor', icon: '' }]);
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
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', "\n                       <p>$45,000</p>\n                       <p>For top notch HDTV quality</p>\n                       <p>Using the same camera and crew that shot Gravity and Avtar!</p>", '', '', '');
        var Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R2
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', "                        \n                        <p>$30,000</p>\n                        <p>For Regular TV quality</p>\n                        <p>You will be able to publish on TV but not on iMAX</p>", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R3
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', "\n                        <p>$15,000</p>\n                        <p>For Budget quality</p>\n                        <p>Not for TV but good enough for youtube and facebook.</p>", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Learn More', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Learn More', 'textfield help', '', 't1-result-cta');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_disclaimer', "The prices suggested are rough estimates and are not guaranteed.", '', '', 'bottom-section');
        section3.addItems(item1, item2, item3);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('share_links');
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
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('logo', 'https://cdn.filestackcontent.com/RIPfc1fwR4H51kqKtSRg', 'textfield help', '', 't1-logo');
        // let item0 = new Item('Item', '../../+builder/assets/template1-logo.png', 'textfield help');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('header', "How much should you pay for a video campaign?", 'textfield help', '', 'main-heading');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('sub_header', "Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!", 'textfield help', '', 'sub-heading');
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
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('textfield', 'How many actors do you need in your video?', 'Default Help Text', ' No of Actors  ');
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('textfield', 'How many locations do you need to shoot at?', 'Default Help Text', ' No of Locations  ');
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('textfield', 'Where are you going to publish this video?', 'Default Help Text', ' Publish Year  ');
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('textfield', 'What do you expect the length of the video to be?', 'Default Help Text', ' Length of Video  ');
        var item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('textfield', 'What sort of a setting are you considering?', 'Default Help Text', ' Setting Type  ');
        var item6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('textfield', 'Where can we find your brand assets for reference?', 'Default Help Text', ' http://www.example.com  ');
        section1.addItems(item1, item2, item3, item4, item5, item6);
        questionPage.addSections(section1);
        //--- Result page sections --- START
        section1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Header', 'top-head');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_header', "\n                        <p>YOUR HEADING GOES HERE</p>");
        section1.addItems(item1);
        // Result Section 2 -- START
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Result', 'left-section');
        //R1
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', "\n                       <p>$45,000</p>\n                       <p>For top notch HDTV quality</p>\n                       <p>Using the same camera and crew that shot Gravity and Avtar!</p>", '', '', '');
        var Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R2
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', "                        \n                        <p>$30,000</p>\n                        <p>For Regular TV quality</p>\n                        <p>You will be able to publish on TV but not on iMAX</p>", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R3
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', "\n                        <p>$15,000</p>\n                        <p>For Budget quality</p>\n                        <p>Not for TV but good enough for youtube and facebook.</p>", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Learn More', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Learn More', 'textfield help', '', 't1-result-cta');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_disclaimer', "The prices suggested are rough estimates and are not guaranteed.", '', '', 'bottom-section');
        section3.addItems(item1, item2, item3);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('share_links');
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
        var app = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["c" /* App */](); //create new app
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
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('logo', 'https://cdn.filestackcontent.com/RIPfc1fwR4H51kqKtSRg', 'textfield help', '', 't1-logo');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('header', "Where to build your Startup?", 'textfield help', '', 'main-heading');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('sub_header', "See which emerging tech hub you should head to!", 'textfield help', '', 'sub-heading');
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
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'How would you categorize your startup?', '', '');
        item1.addFieldToCheckbox([{ label: 'Super High Tech', icon: '', value: '' },
            { label: 'B2B Software', icon: '', value: '' }, { label: 'Hardware', icon: '', value: '' },
            { label: 'Consumer Software', icon: '', value: '' }, { label: 'Services', icon: '', value: '' }]);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'Which industry are you in?', '');
        item2.addFieldToCheckbox([{ label: 'Finance', icon: '', value: '' },
            { label: 'Healthcare', icon: '', value: '' }, { label: 'Real Estate', icon: '', value: '' },
            { label: 'Hospitality', icon: '', value: '' }, { label: 'Retail', icon: '', value: '' },
            { label: 'Industry Agnostic', icon: '', value: '' }]);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'When are you looking to raise funds for your startup?', '');
        item3.addFieldToCheckbox([{ label: 'Immediately', icon: '', value: '' },
            { label: 'Maybe in the Future', icon: '', value: '' }, { label: 'Not at All', icon: '', value: '' }]);
        item4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'How many developers will you need to hire in the next one year?', '', '');
        item4.addFieldToCheckbox([{ label: 'None', icon: '', value: '' },
            { label: '1-3', icon: '', value: '' }, { label: '3-10', icon: '', value: '' },
            { label: '10-50', icon: '', value: '' }]);
        var item5 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'Do you have a family?', '', '');
        item5.addFieldToCheckbox([{ label: 'I am Single', icon: '', value: '' },
            { label: 'I am Married', icon: '', value: '' }, { label: 'I am a Father/Mother', icon: '', value: '' }]);
        var item6 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('selectbox', 'Do you have a strong weather preference?', '');
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
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Learn More', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Learn More', 'textfield help', '', 't1-result-cta');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_disclaimer', "The prices suggested are rough estimates and are not guaranteed.", '', '', 'bottom-section');
        item3.setVisibility(false);
        section3.addItems(item1, item2, item3);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('share_links');
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
        var item0 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('logo', 'https://cdn.filepicker.io/api/file/zkSrHlXZQVyIJYG3HVBq', 'textfield help', '', 't1-logo');
        // let item0 = new Item('Item', '../../+builder/assets/template1-logo.png', 'textfield help');
        section1.addItems(item0);
        // section 2 of LANDING page
        var section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Content Area', 'landing-page-mid');
        var item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('header', "How much should you pay for a video campaign?", 'textfield help', '', 'main-heading');
        var item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('sub_header', "Video campaigns can be expensive and many agencies will take you for a ride. See how much you should actually be paying!", 'textfield help', '', 'sub-heading');
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
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_header', "\n                        <p>YOUR HEADING GOES HERE</p>");
        section1.addItems(item1);
        // Result Section 2 -- START
        section2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Result', 'left-section');
        //R1
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', "\n                       <p>$45,000</p>\n                       <p>For top notch HDTV quality</p>\n                       <p>Using the same camera and crew that shot Gravity and Avtar!</p>", '', '', '');
        var Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R2
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', "                        \n                        <p>$30,000</p>\n                        <p>For Regular TV quality</p>\n                        <p>You will be able to publish on TV but not on iMAX</p>", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //R3
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_output', "\n                        <p>$15,000</p>\n                        <p>For Budget quality</p>\n                        <p>Not for TV but good enough for youtube and facebook.</p>", '', '', '');
        Formulaindex = app.addformula();
        item1.setFormulaIndex(Formulaindex.toString());
        section2.addItems(item1);
        //Result Section 2 -- End
        section3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('LeadForm', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('leadform', 'Learn More', '', '', 'cta-outer');
        item1.setVisibility(false);
        item2 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('click_button', 'Learn More', 'textfield help', '', 't1-result-cta');
        item2.setVisibility(true);
        item3 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('result_disclaimer', "The prices suggested are rough estimates and are not guaranteed.", '', '', 'bottom-section');
        section3.addItems(item1, item2, item3);
        var section4 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["a" /* Section */]('Share Links', 'left-section');
        item1 = new __WEBPACK_IMPORTED_MODULE_1__builder_models_model__["b" /* Item */]('share_links');
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


/***/ }

});
//# sourceMappingURL=8.map