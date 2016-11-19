webpackJsonp([7,10],{

/***/ 1003:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_services_DefaultJSON_service__ = __webpack_require__(875);
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
    function TemplatesComponent(subDomainService, companyService, _router, _defaultJson) {
        this.subDomainService = subDomainService;
        this.companyService = companyService;
        this._router = _router;
        this._defaultJson = _defaultJson;
        this.templates = [];
        this.loader = 0;
        this.subDomain = subDomainService.subDomain;
        this.company_id = this.subDomain.company_id;
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
        this._router.navigate(['/builder']);
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
        return this.templates.filter(function (template) { return template.available; });
    };
    TemplatesComponent.prototype.getNotAvailableTemplates = function () {
        return this.templates.filter(function (template) { return !template.available; });
    };
    TemplatesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-templates',
            template: __webpack_require__(1125),
            styles: [__webpack_require__(1056)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* SubDomainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["a" /* CompanyService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__templates_services_DefaultJSON_service__["a" /* DefaultJSON */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__templates_services_DefaultJSON_service__["a" /* DefaultJSON */]) === 'function' && _d) || Object])
    ], TemplatesComponent);
    return TemplatesComponent;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 1056:
/***/ function(module, exports) {

module.exports = "/* Choose Template css start (sahil) */\n\n.choosetem-topsec {\n  padding-top: 35px;\n  text-align: center;\n  background: #f6f8f9;\n  /*padding-bottom: 40px;*/\n}\n\n.choosetem-topsec h3 {\n  font-size: 30px;\n  font-family: montserratbold;\n  color: rgba(251, 95, 102, 0.8);\n  margin-top: 0px;\n}\n\n.choosetem-topsec p {\n  color: rgba(102, 105, 109, 0.8);\n  font-family: montserratlight;\n  font-size: 14px;\n  line-height: 18px;\n  margin: 0 auto;\n  width: 65%;\n}\n\n.choosetemp-boxes-outr {\n  float: left;\n  min-height: 250px;\n  padding: 35px;\n  background: #f6f8f9;\n  width: 100%;\n  height: 100%;\n}\n\n.choosetemp-box2 {\n  float: left;\n  width: 100%;\n  margin-bottom: 30px;\n  /*padding-right: 20px;*/\n  /*min-height: 339px;*/\n}\n\n/*.choosetemp-box2.ct-box-last {\n    padding-right: 0px;\n}*/\n\n.choosetemp-box2.temp1 {\n  padding-right: 10px;\n}\n\n.choosetemp-box2.temp2 {\n  padding-left: 10px;\n}\n\n.choosetemp-box-figure2 {\n  padding-left: 0px;\n  float: left;\n  cursor: pointer;\n  width: 100%;\n  min-height: 330px;\n}\n\n.choosetemp-top1 {\n  /*background-image: url(../images/choose-temp1.jpg);*/\n  float: left;\n  width: 100%;\n  overflow: hidden;\n  /*box-shadow: 0 0px 10px 1px rgba(0,0,0,0.3);*/\n  min-height: 330px;\n}\n\n.choosetemp-top2 {\n  background-image: url(../images/choose-temp3.jpg);\n  float: left;\n  width: 100%;\n  box-shadow: 0 0px 10px 1px rgba(0,0,0,0.3);\n}\n\n.choosetemp-top3 {\n  background-image: url(../images/choose-temp3.jpg);\n  float: left;\n  width: 100%;\n  min-height: 339px;\n  box-shadow: 0 0px 10px 1px rgba(0,0,0,0.3);\n}\n\n.choosetemp-top4 {\n  background-image: url(../images/choose-temp4.jpg);\n  float: left;\n  width: 100%;\n  min-height: 339px;\n  box-shadow: 0 0px 10px 1px rgba(0,0,0,0.3);\n}\n\n.choosetemp-top5 {\n  background-image: url(../images/choose-temp5.jpg);\n  float: left;\n  width: 100%;\n  min-height: 339px;\n  box-shadow: 0 0px 10px 1px rgba(0,0,0,0.3);\n}\n\n.choosetemp-actions {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  float: left;\n  width: 100%;\n}\n\n.choosetemp-actions .btn-red-outline {\n  color: #fb545b;\n  background-color: #fff;\n  border-color: #ffb5b8;\n  border-radius: 0;\n  font-size: 11px;\n  padding: 7px 35px;\n  margin: 0px;\n  margin-right: 0px;\n  transition: all 0.3s ease 0s;\n  font-family: montserratregular;\n  text-transform: uppercase;\n  float: right;\n  margin-bottom: 5px;\n}\n\n.choosetemp-actions .btn-red-outline.hvr-sweep-to-right::before {\n  background: #ffb5b8 none repeat scroll 0 0;\n  color: #fff !important;\n}\n\n.choosetemp-social {\n  float: right;\n  padding: 0px;\n}\n\n.choosetemp-social li {\n  float: left;\n  width: 50px;\n  text-align: center;\n  margin-bottom: 25px;\n}\n\n.choosetemp-social li a {\n  float: left;\n  padding: 5px;\n  color: #bec5c9;\n  line-height: 17px;\n}\n\n.choosetemp-social li a:hover {\n  color: #fb545b;\n}\n\n.choosetemp-social li a i:hover {\n  color: #fb545b;\n}\n\n.choosetemp-social li a i {\n  float: none;\n  color: #bec5c9;\n  font-size: 18px;\n}\n\n.choosetemp-label {\n  background: #fb5f66 none repeat scroll 0 0;\n  border-radius: 58px;\n  color: #fff;\n  float: right;\n  font-size: 11px;\n  font-weight: normal;\n  padding: 0 12px;\n  text-transform: uppercase;\n  width: auto;\n  margin-right: 5px;\n  margin-top: 7px;\n}\n\n.choosetemp-actions h3 {\n  color: #fb5f66;\n  float: left;\n  font-size: 24px;\n  margin-bottom: 0;\n  margin-top: 0px;\n  font-family: montserratlight;\n  /*width: 100%;*/\n  text-transform: capitalize;\n}\n\n.choosetemp-actions p {\n  color: #62696d;\n  float: left;\n  font-size: 14px;\n  width: 100%;\n  font-family: montserratlight;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n.hs-wrapper{\n  float: left;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.hs-wrapper img{\n  display: none;\n  z-index: 9;\n}\n.img-block{\n  display: block !important;\n}\n.hs_container{\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  clear: both;\n  cursor: pointer;\n  min-height: 330px;\n}\n.hs_container .hs_area{\n  /*float: left;*/\n  position: absolute;\n  overflow: hidden;\n}\n/*.hs_area img{\n\tdisplay:none;\n    position: absolute;\n    min-height: 339px;\n    width: 100%;\n}*/\n\n.hs_area img{\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: none;\n  width: 100%;\n}\n\n.hs_area img.hs_visible{\n  display: block;\n  z-index: 9;\n  width: 100%;\n  /*float: left;\n  /*min-height: 339px;*/\n}\n.hs_area1{\n  width:100%;\n  height:100%;\n  top:0px;\n  left:0px;\n}\n\n/* Choose Template css end (sahil) */\n\n/* Preloader */\n\n.preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff;\n  /* change if the mask should be a color other than white */\n  z-index: 9999;\n  /* makes sure it stays on top */\n}\n\n.status {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  /* centers the loading animation horizontally on the screen */\n  top: 50%;\n  /* centers the loading animation vertically on the screen */\n  background-image: url(\"./app/site/+builder/assets/images/logoAnim.gif\");\n  /* path to your loading animation */\n  background-repeat: no-repeat;\n  background-position: center;\n  margin: -100px 0 0 -100px;\n  /* is width and height divided by two */\n}\n\n/* Start: locked images */\n\n.not-available {\n  float: left;\n  width: 100%;\n  /*background: #fb5f66;*/\n  z-index: 9;\n  position: relative;\n  height: 100%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.not-available:hover {\n  background: #fb5f66;\n  transition: all 0.3s ease;\n}\n\n/*.not-available-table {\n    vertical-align: middle;\n    float: none;\n    display: table-cell;\n}*/\n\n.not-available i.material-icons {\n  font-size: 30px;\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  left: 45%;\n  top: 40%;\n  background: rgba(255,255,255,0.28);\n  border-radius: 50%;\n  padding: 13px;\n  z-index: 99;\n  display: none;\n}\n\n.not-available:hover i.material-icons{\n  display: block;\n}\n\n/*.not-available .choosetemp-box-figure2 {\n    background: rgba(0,0,0, 0.7);\n}*/\n\n/*.not-available .choosetemp-top1{\n    opacity: 0.7;\n}*/\n\n.not-available img.hs_visible{\n  display: block !important;\n  z-index: 9;\n  left: 0px !important;\n  top: 0px !important;\n  opacity: 0.5 !important;\n  width: 100%\n}\n\n.not-available .hs_area img {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: block !important;\n  opacity: 0.5 !important;\n  width: 100%\n}\n\n.not-available .choosetemp-actions h3{\n  opacity: 0.5 !important;\n}\n\n.not-available .choosetemp-actions p{\n  opacity: 0.5 !important;\n}\n\n/* End: locked images */\n\n/* Start: Modal Template Preview */\n/*.modal#temp-preview {\n    overflow-y: hidden;\n}*/\n\n#temp-preview.temp-preview {\n  width: 100%;\n  float: left;\n  padding-right: 0px !important;\n  padding-left: 0px !important;\n  /*background: #fff;*/\n  background: rgba(0, 0, 0, 0.25) !important;\n  /*background: rgba(251, 84, 91, 0.9) !important;*/\n}\n\n#temp-preview .temp-preview-content{\n  border-radius: 0px;\n  /*border: 1px solid #e9eef0;*/\n  float: left;\n  width: 100%;\n}\n\n#temp-preview .temp-preview-header {\n  padding: 20px 25px;\n  border-bottom: none;\n}\n\n#temp-preview .logo-section{\n  margin-bottom: 40px;\n}\n\n#temp-preview .logo-section span{\n  display: block;\n  font-size: 30px;\n  color: #fb545b;\n  font-family: montserratultra_light;\n  line-height: 36px;\n  margin-top: 10px;\n}\n\n#temp-preview .temp-preview-logo{\n  /*margin-bottom: 50px;\n  margin-top: 40px;*/\n}\n\n#temp-preview .temp-preview-body {\n  position: relative;\n  /*padding: 15px;*/\n  float: left;\n  width: 100%;\n  /*background: #f6f8f9;*/\n  z-index: 9999;\n}\n\n#temp-preview.temp-preview button.close.btn-close {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  z-index: 9;\n  opacity: 0.7;\n  transition: all 0.3s ease 0s !important;\n}\n\n#temp-preview.temp-preview button.close.btn-close:focus,\n#temp-preview.temp-preview button.close.btn-close:hover {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .9 !important;\n}\n\n#temp-preview.temp-preview button.close.btn-close i.material-icons {\n  font-size: 18px;\n  color: #fff;\n}\n\na.text-red{\n  color: #fb545b;\n}\n\na.text-red:hover, a.text-red:focus{\n  color: #fa5282;\n}\n\n#temp-preview.temp-preview .responsive-menu {\n  /*background: rgba(0, 0, 0, 0.45);*/\n  color: #fff;\n  width: 100%;\n  text-align: center;\n  padding: 0px;\n  position: relative;\n  z-index: 0;\n  margin: 0 auto;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0px;\n  right: 0;\n  top: 0px;\n  font-size: 13px;\n  background: rgba(251, 84, 91, 0.9) !important;\n  padding: 10px;\n  border-bottom: 1px solid #fb545b;\n}\n\n#temp-preview.temp-preview iframe {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  top: 0px;\n  border: none;\n  margin-top: 50px;\n}\n\n#temp-preview.temp-preview .btn-red-outline {\n  color: #fb545b;\n  background-color: #fff;\n  border-color: #ffb5b8;\n  border-radius: 0;\n  font-size: 11px;\n  padding: 6px 30px;\n  margin: 0;\n  transition: all 0.3s ease 0s;\n  font-family: montserratregular;\n  text-transform: uppercase;\n  float: none;\n}\n\n#temp-preview.temp-preview .btn-preview {\n  margin-right: 10px !important;\n  background: #fb545b !important;\n  color: #fff !important;\n  border: 1px solid #fb545b !important;\n}\n\n#temp-preview.temp-preview img.img-responsive {\n  width: 100%;\n}\n\n/* End: Modal Template Preview */\n\n/* Start: loading dots */\n\n.loading:after {\n  content: ' .';\n  animation: dots 1s steps(5, end) infinite;\n  font-size: 18px;\n  line-height: 1px;\n  position: relative;\n  left: -3px;\n}\n\n@keyframes dots {\n  0%, 20% {\n    color: rgba(0,0,0,0);\n    text-shadow: .25em 0 0 rgba(0,0,0,0),\n    .5em 0 0 rgba(0,0,0,0);\n  }\n\n  40% {\n    color: white;\n    text-shadow: .25em 0 0 rgba(0,0,0,0),\n    .5em 0 0 rgba(0,0,0,0);\n  }\n\n  60% {\n    text-shadow: .25em 0 0 white,\n    .5em 0 0 rgba(0,0,0,0);\n  }\n  80%, 100% {\n    text-shadow: .25em 0 0 white,\n    .5em 0 0 white;\n  }\n\n}\n\n/* End: loading dots */\n\n/* Start: for disabled btn */\n.btn-red-outline:disabled {\n  background: #fb545b !important;\n  color: #fff !important;\n}\n\n/* End: for disabled btn */\n\n/* Start: responsive */\n\n@media screen and (min-width: 320px) and (max-width: 767px){\n  .choosetem-topsec{\n    /*margin-top: 40px;*/\n  }\n\n  .choosetem-topsec p{\n    width: 90%;\n  }\n\n  .choosetemp-boxes-outr{\n    padding: 15px;\n    padding-top: 35px;\n    height: 100%;\n  }\n\n  .choosetemp-box2.temp1{\n    padding-right: 0;\n  }\n\n  .choosetemp-box2.temp2{\n    padding-left: 0;\n  }\n\n  .choosetemp-box2{\n    padding-right: 0;\n    /*min-height: 304px;*/\n    margin-bottom: 0px;\n  }\n\n}\n\n@media screen and (min-width: 320px) and (max-width: 320px) {\n  .ct-w100 {\n    width: 100%;\n  }\n\n  .ct-w100 button.btn.btn-red-outline {\n    float: left !important;\n    margin-top: 15px !important;\n  }\n\n  .choosetemp-box-figure2 {\n    min-height: 134px !important;\n  }\n\n  .choosetemp-top1 {\n    min-height: 134px !important;\n  }\n\n  .hs_container {\n    min-height: 134px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 134px !important;\n  }\n\n  .choose-temp-soon i.material-icons{\n    top: 30% !important;\n  }\n\n}\n\n/* samsung galaxy s3 */\n@media screen and (min-width: 360px) and (max-width: 360px) {\n  .ct-w100 {\n    width: 100%;\n  }\n\n  .ct-w100 button.btn.btn-red-outline {\n    float: left !important;\n    margin-top: 15px !important;\n  }\n\n  .choosetem-topsec{\n    /*margin-top: 40px;*/\n  }\n\n  .choosetem-topsec p{\n    width: 90%;\n  }\n\n  .choosetemp-boxes-outr{\n    padding: 15px;\n    padding-top: 35px;\n    height: 100%;\n  }\n\n  .choosetemp-box2.temp1{\n    padding-right: 0;\n  }\n\n  .choosetemp-box2.temp2{\n    padding-left: 0;\n  }\n\n  .choosetemp-box2{\n    padding-right: 0;\n    margin-bottom: 0px;\n  }\n\n  .choosetemp-box-figure2 {\n    min-height: 156px !important;\n  }\n\n  .choosetemp-top1 {\n    min-height: 156px !important;\n  }\n\n  .hs_container {\n    min-height: 156px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 156px !important;\n  }\n\n  .choose-temp-soon i.material-icons{\n    top: 30% !important;\n  }\n\n}\n/* samsung galaxy s3 */\n\n@media screen and (min-width: 480px) and (max-width: 480px) {\n  .choosetemp-box-figure2 {\n    min-height: 222px !important;\n  }\n\n  .choosetemp-top1 {\n    min-height: 222px !important;\n  }\n\n  .hs_container {\n    min-height: 222px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 222px !important;\n  }\n\n}\n\n/* Acer, Lenovo, Samsung, Sony, & so on...  */\n@media screen and (min-width: 600px) and (max-width: 600px) {\n  .choosetemp-box-figure2 {\n    min-height: 288px !important;\n  }\n\n  .choosetemp-top1 {\n    min-height: 288px !important;\n  }\n\n  .hs_container {\n    min-height: 288px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 288px !important;\n  }\n\n}\n/* Acer, Lenovo, Samsung, Sony, & so on...  */\n\n@media screen and (min-width: 640px) and (max-width: 640px) {\n  .choosetemp-box-figure2 {\n    min-height: 310px !important;\n  }\n\n  .choosetemp-top1 {\n    min-height: 310px !important;\n  }\n\n  .hs_container {\n    min-height: 310px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 310px !important;\n  }\n\n}\n\n/* iPad mini */\n@media screen and (min-width: 768px) and (max-width: 768px) {\n  .choosetemp-boxes-outr {\n    padding: 35px 25px;\n  }\n\n  .choosetemp-box2.temp1 {\n    padding-right: 5px;\n  }\n\n  .choosetemp-box2.temp2 {\n    padding-left: 5px;\n  }\n\n  .choosetemp-actions .btn-red-outline{\n    padding: 7px 28px;\n  }\n\n  .choosetemp-box2{\n    padding-right: 0;\n    margin-bottom: 0px;\n  }\n\n  .choosetemp-box-figure2 {\n    min-height: 174px !important;\n  }\n\n  .choosetemp-top1 {\n    min-height: 174px !important;\n  }\n\n  .hs_container {\n    min-height: 174px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 174px;\n  }\n\n  .choose-temp-soon i.material-icons{\n    top: 34% !important;\n  }\n\n}\n/* iPad mini */\n\n@media screen and (min-width: 1024px) and (max-width:1024px) {\n  .choosetemp-boxes-outr{\n    padding: 35px 25px;\n  }\n\n  .choosetemp-actions h3{\n    font-size: 23px;\n  }\n\n  .choosetemp-box2{\n    margin-bottom: 0px;\n  }\n\n  .choosetemp-box2.temp1{\n    padding-right: 5px;\n  }\n\n  .choosetemp-box2.temp2{\n    padding-left: 5px;\n  }\n\n  .choosetemp-box-figure2{\n    min-height: 244px !important;\n  }\n\n  .choosetemp-top1{\n    min-height: 244px !important;\n  }\n\n  .hs_container{\n    min-height: 244px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 244px !important;\n  }\n\n}\n\n@media screen and (min-width: 1024px) and (max-width:1215px) {\n  .choosetemp-box-figure2{\n    min-height: 244px !important;\n  }\n\n  .choosetemp-top1{\n    min-height: 244px !important;\n  }\n\n  .hs_container{\n    min-height: 244px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 244px !important;\n  }\n\n}\n\n\n@media screen and (min-width: 1280px) and (max-width:1280px) {\n  .choosetemp-box-figure2{\n    min-height: 302px !important;\n  }\n\n  .choosetemp-top1{\n    min-height: 302px !important;\n  }\n\n  .hs_container{\n    min-height: 302px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 302px !important;\n  }\n\n}\n\n@media screen and (min-width: 1200px) and (max-width:1300px) {\n  .choosetemp-box-figure2{\n    min-height: 284px !important;\n  }\n\n  .choosetemp-top1{\n    min-height: 284px !important;\n  }\n\n  .hs_container{\n    min-height: 284px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 284px !important;\n  }\n}\n\n@media screen and (min-width: 1300px) and (max-width:1366px) {\n  .choosetemp-box-figure2{\n    min-height: 284px !important;\n  }\n\n  .choosetemp-top1{\n    min-height: 284px !important;\n  }\n\n  .hs_container{\n    min-height: 284px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 284px !important;\n  }\n}\n\n@media screen and (min-width: 1345px) and (max-width: 1345px) {\n  .hs_container{\n    min-height: 324px !important;\n  }\n}\n\n@media screen and (min-width: 1344px) and (max-width: 1365px) {\n  .hs_container{\n    min-height: 324px !important;\n  }\n}\n\n\n@media screen and (min-width: 1373px) and (max-width: 1373px) {\n  .hs_container{\n    min-height: 332px !important;\n  }\n}\n\n\n@media screen and (min-width: 1366px) and (max-width: 1366px) {\n  .choosetemp-box-figure2{\n    min-height: 330px !important;\n  }\n\n  .choosetemp-top1{\n    min-height: 330px !important;\n  }\n\n  .hs_container{\n    min-height: 330px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 330px !important;\n  }\n\n}\n\n@media screen and (min-width: 1440px) and (max-width: 1440px) {\n  .choosetemp-box-figure2{\n    min-height: 350px !important;\n  }\n\n  .choosetemp-top1{\n    min-height: 350px !important;\n  }\n\n  .hs_container{\n    min-height: 350px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 350px !important;\n  }\n\n}\n\n/* iPad */\n@media screen and (min-width: 1536px) and (max-width: 1536px) {\n  .choosetemp-box-figure2{\n    min-height: 378px !important;\n  }\n\n  .choosetemp-top1{\n    min-height: 378px !important;\n  }\n\n  .hs_container{\n    min-height: 378px !important;\n  }\n\n  .hs_area.hs_area1 {\n    min-height: 378px !important;\n  }\n\n}\n/* iPad */\n\n@media screen and (min-width: 1380px) and (max-width: 1380px) {\n  .hs_container{\n    min-height: 334px !important;\n  }\n\n}\n\n@media (min-width: 1368px) and (max-width: 1920px) {\n  /*.choosetemp-box2{ text-align: center;}\n  .choosetemp-box-figure2{ float: none; display: inline-block; }\n  .choosetemp-actions .btn-red-outline{ float: none;}*/\n  .img-responsive{width: 100%;}\n\n}\n\n@media screen and (min-width: 1366px) and (max-width: 1439px) {\n  .hs_container{\n    min-height: 349px !important;\n  }\n\n}\n\n@media screen and (min-width: 1517px) and (max-width: 1517px) {\n  .hs_container{\n    min-height: 371px !important;\n  }\n\n}\n\n/* google nexus */\n@media screen and (min-width: 1600px) and (max-width: 1600px) {\n  .hs_container{\n    min-height: 394px !important;\n  }\n\n}\n/* google nexus */\n\n@media screen and (min-width: 1680px) and (max-width: 1680px) {\n  .hs_container{\n    min-height: 416px !important;\n  }\n\n}\n\n/* removed min-width & added max-width only for mac safari browser */\n@media screen and (max-width:1920px) {\n  /*.choosetemp-box2{\n      min-height: 439px;\n  }\n\n  .choosetemp-box-figure2{\n      min-height: 439px;\n  }\n\n  .choosetemp-top1{\n      min-height: 439px;\n  }*/\n\n  .hs_container.hs_container_1920{\n    min-height: 483px;\n  }\n\n  /*.hs_area img.hs_visible {\n      min-height: 439px;\n  }\n\n  .hs_area img{\n      min-height: 439px;\n      width: 100%;\n  }*/\n\n  .choose-temp-soon i.material-icons{\n    top: 44% !important;\n  }\n\n}\n\n/* macbook pro 13inch */\n@media screen and (min-width: 2560px) and (max-width: 2560px) {\n  .hs_container{\n    min-height: 660px !important;\n  }\n\n}\n\n/* End: responsive */\n\n/* Start: coming soon templates */\n.choose-temp-soon{\n\n}\n\n.choose-temp-soon .choose-temp-soon-hover{\n  display: block;\n  background: rgba(251,84,91,0.3);\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  transition: background 0.3s ease;\n  cursor: pointer;\n}\n\n.choose-temp-soon i.material-icons {\n  display: none;\n  font-size: 30px;\n  color: #fff;\n  text-align: center;\n  position: relative;\n  top: 40%;\n  background: rgba(255,255,255,0.28);\n  border-radius: 50%;\n  padding-top: 13px;\n  z-index: 99;\n  margin: 0 auto;\n  width: 55px;\n  height: 55px;\n}\n\n.choose-temp-soon i.material-icons{\n  display: block;\n}\n\n.choosetemp-box2 .temp2 {\n  padding-left: 10px;\n}\n\n.choosetemp-box2 .temp1 {\n  padding-right: 10px;\n}\n\n.choose-temp-soon img.hs_visible {\n  width: 100%;\n}\n\n/* End: coming soon templates */\n"

/***/ },

/***/ 1125:
/***/ function(module, exports) {

module.exports = "<div class=\"preloader\" *ngIf=\"loader==0\">\n  <div class=\"status\">&nbsp;</div>\n</div>\n<!-- Choose temp top Section -->\n<div class=\"col-md-12 col-sm-12 col-xs-12 choosetem-topsec\">\n  <h3>Select from one of our beautiful & optimized templates.</h3>\n  <p>\n    All of our templates have been optimized for lead conversion, SEO and are build using the latest design standards.\n  </p>\n</div>\n<!-- Choose temp top Section End-->\n<!-- Choose temp boxes start (sahil) -->\n<div class=\"col-xs-12 np choosetemp-boxes-outr\" *ngIf=\"templates.length\">\n  <div>\n    <div class=\"col-xs-12 col-sm-6 col-md-6\" *ngFor=\"let template of getAvailableTemplates();let s = index\">\n      <div class=\"choosetemp-box2\" [class.temp2]=\"s%2==1\" [class.temp1]=\"s%2==0\">\n        <figure class=\"choosetemp-box-figure2 col-sm-12 col-xs-12 np\">\n          <div class=\"choosetemp-top1\">\n            <div class=\"hs_container hs_container_1920\">\n              <!-- <div class=\"hs_area hs_area1\" data-toggle=\"modal\" data-target=\"#temp-preview\" (click)=\"onPreview(template.selector)\">\n                  <img *ngFor=\"let image of template.previewImages; let i = index\" [src]=\"image\" [class.hs_visible]=\"i==0\" alt=\"\" />\n              </div>  -->\n              <div class=\"hs_area hs_area1\" (click)=\"selectTemplate(template.selector, $event)\">\n                <img *ngFor=\"let image of template.previewImages; let i = index\" [src]=\"image\" [class.hs_visible]=\"i==0\" alt=\"\" />\n              </div>\n            </div>\n          </div>\n        </figure>\n        <ul class=\"choosetemp-social col-sm-1 col-xs-12 hide\">\n          <li>\n            <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\n              <i class=\"material-icons\">share</i> 4500\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\n              <i class=\"material-icons\">favorite</i> 2520\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\n              <i class=\"material-icons\">people</i> 3550\n            </a>\n          </li>\n        </ul>\n        <div class=\"choosetemp-actions\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n            <h3 class=\"col-md-9 col-sm-9 col-xs-9 np ct-w100\">{{template.name}}</h3>\n            <div class=\"col-md-3 col-sm-3 col-xs-3 np ct-w100\">\n              <button type=\"\" class=\"btn btn-red-outline btn-hover\" (click)=\"selectTemplate(template.selector, $event)\">Use Template</button>\n            </div>\n            <p>\n              {{template.description}}\n            </p>\n          </div>\n          <button type=\"\" class=\"btn btn-red-outline btn-hover hide\" data-toggle=\"modal\" data-target=\"#temp-preview\" (click)=\"onPreview(template.selector)\">Preview</button>\n          <label class=\"choosetemp-label\" *ngIf=\"template.isPremium\">PREMIUM</label>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-sm-6 col-xs-12\" *ngFor=\"let template of getNotAvailableTemplates();let s = index\">\n    <div class=\"choosetemp-box2\" [class.temp2]=\"s%2==1\" [class.temp1]=\"s%2==0\">\n      <!-- <figure class=\"choosetemp-box-figure2 col-sm-12 col-xs-12 np\">\n          <div class=\"choosetemp-top1\">\n              <div class=\"hs_container\">\n                  <div class=\"hs_area hs_area1\" data-toggle=\"modal\" data-target=\"#temp-preview\" (click)=\"onPreview(template.selector)\">\n                      <img *ngFor=\"let image of template.previewImages; let i = index\" [src]=\"image\" [class.hs_visible]=\"i==0\" alt=\"\" />\n                  </div>\n                   <div class=\"hs_area hs_area1\">\n                      <div class=\"not-available\">\n                          <i class=\"material-icons\">lock</i>\n                          <img  [src]=\"template.previewImages[0]\" class=\"test\" [class.hs_visible]=\"true\" alt=\"\"/>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </figure> -->\n\n      <div class=\"col-xs-12 col-sm-12 np\" >\n        <div class=\"choose-temp-soon\">\n          <img [src]=\"template.previewImages[0]\" class=\"hs_visible\">\n          <div class=\"choose-temp-soon-hover\">\n            <i class=\"material-icons\">lock</i>\n          </div>\n        </div>\n      </div>\n      <ul class=\"choosetemp-social col-sm-1 col-xs-12 hide\">\n        <li>\n          <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\n            <i class=\"material-icons\">share</i> 4500\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\n            <i class=\"material-icons\">favorite</i> 2520\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0);\" class=\"hvr-float-shadow\">\n            <i class=\"material-icons\">people</i> 3550\n          </a>\n        </li>\n      </ul>\n      <div class=\"choosetemp-actions\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n          <!--<h3 class=\"col-md-12 col-sm-12 col-xs-12 np\">{{template.name}}</h3>-->\n          <!-- <div class=\"col-md-3 col-sm-3 col-xs-3 np\">\n               <button type=\"\" *ngIf=\"template.available\" class=\"btn btn-red-outline btn-hover\" (click)=\"selectTemplate(template.selector, $event)\">Use Template</button>\n           </div>-->\n          <!--<p>\n              {{template.description}}\n          </p>-->\n        </div>\n        <button type=\"\" class=\"btn btn-red-outline btn-hover hide\" data-toggle=\"modal\" data-target=\"#temp-preview\" (click)=\"onPreview(template.selector)\">Preview</button>\n        <label class=\"choosetemp-label\" *ngIf=\"template.isPremium\">PREMIUM</label>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<!--  Choose temp boxes end (sahil) -->\n\n<!-- Start: Modal Template Preview -->\n<div id=\"temp-preview\" class=\"modal fade temp-preview\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"temp-preview-dialog modal-anim\">\n    <!-- Modal content-->\n    <div class=\"temp-preview-content modal-bg\">\n      <!-- <div class=\"temp-preview-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <i class=\"material-icons\">close</i></button>\n              <h4 class=\"modal-title\">Login</h4>\n      </div> -->\n      <div class=\"temp-preview-body\">\n        <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"appJson=undefined\">\n          <i class=\"material-icons\">close</i>\n        </button>\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12 responsive-menu\">\n            <button type=\"\" class=\"btn btn-red-outline btn-hover btn-preview hide\" data-toggle=\"modal\" data-target=\"#temp-preview\">Preview</button>\n            <button type=\"\" class=\"btn btn-red-outline btn-hover\" (click)=\"selectTemplate(tempname,$event)\">Use Template</button>\n          </div>\n\n          <!-- <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                 <iframe src=\"http://app.outgrow.us/design/backup/preview-template-1\"></iframe>\n          </div> -->\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"tempname==='one-page-slider'\">\n            <img src=\"assets/images/temp1.jpg\" class=\"img-responsive\">\n          </div>\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"tempname==='sound-cloud'\">\n            <img src=\"assets/images/temp2.jpg\" class=\"img-responsive\">\n          </div>\n\n          <!-- <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                 <og-preview *ngIf=\"appJson\" [json]=\"appJson\"></og-preview>\n          </div> -->\n        </div>\n      </div>\n      <!-- <div class=\"modal-footer\">\n\n      </div> -->\n    </div>\n  </div>\n</div>\n<!-- End: Modal Template Preview -->\n"

/***/ },

/***/ 870:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_component__ = __webpack_require__(1003);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_services_DefaultJSON_service__ = __webpack_require__(875);
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
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(TEMPLATES_ROUTES)],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__templates_component__["a" /* TemplatesComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__templates_services_DefaultJSON_service__["a" /* DefaultJSON */]]
        }), 
        __metadata('design:paramtypes', [])
    ], TemplatesModule);
    return TemplatesModule;
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


/***/ }

});
//# sourceMappingURL=7.map