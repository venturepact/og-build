"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var control_component_1 = require('../templates/controls/control.component');
var templateDev_component_1 = require('../templates/templateAll/templateDev.component');
var editor_component_1 = require('./components/editors/editor.component');
var switch_component_1 = require('./components/switch.component');
var JSONBuilder_service_1 = require('./services/JSONBuilder.service');
var formula_service_1 = require('./services/formula.service');
var JSONElement_service_1 = require('./services/JSONElement.service');
var index_1 = require('./components/index');
var config_component_1 = require('./components/config/config.component');
var model_1 = require('./models/model');
var formula_pop_component_1 = require('./formula/formula_pop.component');
var builder_service_1 = require('./services/builder.service');
var DefaultJSON_service_1 = require('../templates/services/DefaultJSON.service');
var JSONUpdateItemTracker_service_1 = require('./services/JSONUpdateItemTracker.service');
var index_2 = require('../../shared/services/index');
var index_3 = require('../components/toolbar/index');
var env_config_1 = require('../../config/env.config');
var analytic_service_1 = require('../templates/services/analytic.service');
var index_4 = require('../../shared/services/index');
var index_5 = require('../../shared/services/index');
var index_6 = require('../../shared/services/index');
var recommendation_service_1 = require('../templates/services/recommendation.service');
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
        if (window.location.hash) {
            this.hash = window.location.hash.substring(1);
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
                });
            });
            this.isAnalyticsAvailable = this._featureAuthService.features.analytics;
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            this.companyName = storage.company.name;
        }
    };
    BuilderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        document.onmouseover = function () { return window.innerDocClick = true; };
        document.onmouseleave = function () { return window.innerDocClick = false; };
        window.onhashchange = function () {
            if (!window.innerDocClick)
                window.location.href = env_config_1.Config.PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/dashboard';
        };
    };
    BuilderComponent.prototype.initiateBuilder = function () {
        var _this = this;
        if (this.appName) {
            this.getApp({ url: this.appName });
        }
        else {
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
                    var app = new model_1.App().deserialize(response);
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
                    var app = new model_1.App().deserialize(response);
                    _this.jsonBuilderHelper.setTemplate(app);
                    _this.initializeJqueryStuff();
                    _this.oldCalcName = _this.jsonBuilderHelper.getJSONBuilt().name;
                    _this.activeSince = moment(response.updatedAt).fromNow().replace('ago', '').trim();
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
        });
        jQuery(window).on("resize", function () {
            self.canvasScroll();
            if (jQuery(window).width() > 767 && jQuery('.editor-sidebar').css('display') == 'none') {
                jQuery('.editor-sidebar').css('display', 'block');
            }
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
            if (jQuery(window).width() > 992) {
                var minWinWidth = jQuery(window).width() - 264;
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
        jQuery("temp").draggable();
    };
    BuilderComponent.prototype.canvasScroll = function () {
        var winWidth = jQuery(window).width() - 315;
        var winHeight = jQuery(window).height() - 60;
        jQuery(".template-section").css('position', "fixed");
        jQuery(".template-section").css('height', winHeight);
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
                    _this.srcUrl = env_config_1.Config.PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/' + _this.jsonBuilderHelper.getJSONBuilt().url;
                    bootbox.dialog({
                        message: "\n                           <div class=\"text-center live-modal\">\n                                <span class=\"icon-play-next\"><i class=\"material-icons\">queue_play_next</i></span>\n                                <div class=\"live-head\">Your Calculator is Live</div>\n                                <img class=\"img-style hide\" src=\"assets/images/goLivePopup.png\"/>\n                                <div class=\"\">\n                                    <div class=\"live-subhead link-style\">\n                                        <span>\n                                            To preview, open this link in another browser.\n                                        </span>\n                                        <a class=\"live-url preview_copy\">Copy Link</a>\n                                    </div>\n                                    <div class=\"live-subhead selected-link\">\n                                        <span class=\"hide\">Your public calculator can be viewed here:</span>\n                                        <div class=\"live-url url-style\">" + _this.srcUrl + "</div>\n                                    </div>\n                                    <!--<img src=\"assets/images/gocopyPopup.png\"/>-->\n                                </div>\n                                <div class=\"table-responsive hide\">\n                                    <table class=\"table\">\n                                        <thead>\n                                            <tr>\n                                                <th>\n                                                    <div class=\"live-subhead link-style\">\n                                                        <span>\n                                                            To preview, open this link in another browser.\n                                                        </span>\n                                                        <a class=\"live-url preview_copy\">Copy Link</a>\n                                                    </div>\n                                                </th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"live-subhead\">\n                                                        <span class=\"hide\">Your public calculator can be viewed here:</span>\n                                                        <div class=\"live-url url-style\">" + _this.srcUrl + "</div>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                            "
                    });
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
            url = env_config_1.Config.PROTOCOL + that.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/' + url;
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
                var url = env_config_1.Config.PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/' + response.url;
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
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-builder',
            directives: [router_1.ROUTER_DIRECTIVES, control_component_1.Control, editor_component_1.Editor, templateDev_component_1.TemplateDev,
                switch_component_1.Switch, index_1.ComponentManagerComponent, formula_pop_component_1.FormulaPopComponent, index_1.CalcAnalyticsManagerComponent, index_1.CalcAnalyticsComponent,
                index_1.ComponentConfigManagerComponent, config_component_1.ConfigComponent, index_3.ToolbarComponent
            ],
            providers: [formula_service_1.FormulaService, JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement, builder_service_1.BuilderService,
                analytic_service_1.AnalyticService, DefaultJSON_service_1.DefaultJSON, JSONUpdateItemTracker_service_1.JSONItemTracker, index_4.DashboardService, recommendation_service_1.RecommendationService],
            viewProviders: [],
            templateUrl: 'builder.template.html',
            styleUrls: [
                './assets/css/builder.style.css',
            ]
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, index_2.SubDomainService, builder_service_1.BuilderService, DefaultJSON_service_1.DefaultJSON, JSONUpdateItemTracker_service_1.JSONItemTracker, router_1.ActivatedRoute, router_1.Router, index_4.DashboardService, formula_service_1.FormulaService, index_5.FeatureAuthService, index_4.CookieService, index_6.Script, recommendation_service_1.RecommendationService])
    ], BuilderComponent);
    return BuilderComponent;
}());
exports.BuilderComponent = BuilderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2J1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUUsZUFBZSxDQUFDLENBQUE7QUFDckYsdUJBQTBELGlCQUFpQixDQUFDLENBQUE7QUFDNUUsa0NBQXdCLHlDQUF5QyxDQUFDLENBQUE7QUFDbEUsc0NBQTRCLGdEQUFnRCxDQUFDLENBQUE7QUFDN0UsaUNBQXVCLHVDQUF1QyxDQUFDLENBQUE7QUFDL0QsaUNBQXVCLCtCQUErQixDQUFDLENBQUE7QUFDdkQsb0NBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFDN0QsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsb0NBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFDN0Qsc0JBQWtJLG9CQUFvQixDQUFDLENBQUE7QUFDdkosaUNBQWdDLHNDQUFzQyxDQUFDLENBQUE7QUFDdkUsc0JBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0Msc0NBQW9DLGlDQUFpQyxDQUFDLENBQUE7QUFDdEUsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsb0NBQTRCLDJDQUEyQyxDQUFDLENBQUE7QUFDeEUsOENBQWdDLDBDQUEwQyxDQUFDLENBQUE7QUFDM0Usc0JBQWlDLDZCQUE2QixDQUFDLENBQUE7QUFDL0Qsc0JBQWlDLDZCQUE2QixDQUFDLENBQUE7QUFDL0QsMkJBQXVCLHlCQUF5QixDQUFDLENBQUE7QUFDakQsaUNBQWdDLHdDQUF3QyxDQUFDLENBQUE7QUFDekUsc0JBQWdELDZCQUE2QixDQUFDLENBQUE7QUFDOUUsc0JBQW1DLDZCQUE2QixDQUFDLENBQUE7QUFDakUsc0JBQXVCLDZCQUE2QixDQUFDLENBQUE7QUFDckQsdUNBQXNDLDhDQUE4QyxDQUFDLENBQUE7QUFtQ3JGO0lBK0JJLDBCQUFvQixpQkFBOEIsRUFDdEMsZ0JBQWtDLEVBQ2xDLGVBQStCLEVBQy9CLFlBQXlCLEVBQ3pCLGlCQUFrQyxFQUNsQyxL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LENBQUM7UUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBOTNCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsMkJBQU8sRUFBRSx5QkFBTSxFQUFFLG1DQUFXO2dCQUN4RCx5QkFBTSxFQUFFLGlDQUF5QixFQUFFLDJDQUFtQixFQUFFLHFDQUE2QixFQUFFLDhCQUFzQjtnQkFDN0csdUNBQStCLEVBQUUsa0NBQWUsRUFBRSx3QkFBZ0I7YUFDckU7WUFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLGlDQUFXLEVBQUUsaUNBQVcsRUFBRSxnQ0FBYztnQkFDaEUsa0NBQWUsRUFBRSxpQ0FBVyxFQUFFLCtDQUFlLEVBQUUsd0JBQWdCLEVBQUUsOENBQXFCLENBQUM7WUFDM0YsYUFBYSxFQUFFLEVBQUU7WUFDakIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUU7Z0JBQ1AsZ0NBQWdDO2FBQ25DO1NBRUosQ0FBQzs7d0JBQUE7SUFnM0JGLHVCQUFDO0FBQUQsQ0E5MkJBLEFBODJCQyxJQUFBO0FBOTJCWSx3QkFBZ0IsbUJBODJCNUIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9idWlsZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUywgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnLi4vdGVtcGxhdGVzL2NvbnRyb2xzL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVtcGxhdGVEZXYgfSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGVBbGwvdGVtcGxhdGVEZXYuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL2VkaXRvcnMvZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJy4vY29tcG9uZW50cy9zd2l0Y2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtdWxhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZm9ybXVsYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSlNPTkVsZW1lbnQgfSBmcm9tICcuL3NlcnZpY2VzL0pTT05FbGVtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRNYW5hZ2VyQ29tcG9uZW50LCBDb21wb25lbnRDb25maWdNYW5hZ2VyQ29tcG9uZW50LCBDYWxjQW5hbHl0aWNzTWFuYWdlckNvbXBvbmVudCwgQ2FsY0FuYWx5dGljc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcbmltcG9ydCB7IENvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb25maWcvY29uZmlnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEl0ZW0sIEFwcCB9IGZyb20gJy4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgRm9ybXVsYVBvcENvbXBvbmVudCB9IGZyb20gJy4vZm9ybXVsYS9mb3JtdWxhX3BvcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdWlsZGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVmYXVsdEpTT04gfSBmcm9tICcuLi90ZW1wbGF0ZXMvc2VydmljZXMvRGVmYXVsdEpTT04uc2VydmljZSc7XHJcbmltcG9ydCB7IEpTT05JdGVtVHJhY2tlciB9IGZyb20gJy4vc2VydmljZXMvSlNPTlVwZGF0ZUl0ZW1UcmFja2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJEb21haW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdG9vbGJhci9pbmRleCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9lbnYuY29uZmlnJztcclxuaW1wb3J0IHsgQW5hbHl0aWNTZXJ2aWNlIH0gZnJvbSAnLi4vdGVtcGxhdGVzL3NlcnZpY2VzL2FuYWx5dGljLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTZXJ2aWNlLCBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgRmVhdHVyZUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgU2NyaXB0IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgUmVjb21tZW5kYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vdGVtcGxhdGVzL3NlcnZpY2VzL3JlY29tbWVuZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGJvb3Rib3g6IGFueTtcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcclxuZGVjbGFyZSB2YXIgbW9tZW50OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGRvY3VtZW50OiBhbnk7XHJcbmRlY2xhcmUgdmFyIHpvb21mYWN0b3I6IGFueTtcclxuZGVjbGFyZSB2YXIgY3VycmVudFpvb206IGFueTtcclxuZGVjbGFyZSB2YXIgY3VyWVBvczogYW55O1xyXG5kZWNsYXJlIHZhciBjdXJYUG9zOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGN1ckRvd246IGFueTtcclxuZGVjbGFyZSB2YXIgeEF4aXM6IGFueTtcclxuZGVjbGFyZSB2YXIgeUF4aXM6IGFueTtcclxuZGVjbGFyZSB2YXIgY2xpcGJvYXJkOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3NkLWJ1aWxkZXInLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBDb250cm9sLCBFZGl0b3IsIFRlbXBsYXRlRGV2LFxyXG4gICAgICAgIFN3aXRjaCwgQ29tcG9uZW50TWFuYWdlckNvbXBvbmVudCwgRm9ybXVsYVBvcENvbXBvbmVudCwgQ2FsY0FuYWx5dGljc01hbmFnZXJDb21wb25lbnQsIENhbGNBbmFseXRpY3NDb21wb25lbnQsXHJcbiAgICAgICAgQ29tcG9uZW50Q29uZmlnTWFuYWdlckNvbXBvbmVudCwgQ29uZmlnQ29tcG9uZW50LCBUb29sYmFyQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbRm9ybXVsYVNlcnZpY2UsIEpTT05CdWlsZGVyLCBKU09ORWxlbWVudCwgQnVpbGRlclNlcnZpY2UsXHJcbiAgICAgICAgQW5hbHl0aWNTZXJ2aWNlLCBEZWZhdWx0SlNPTiwgSlNPTkl0ZW1UcmFja2VyLCBEYXNoYm9hcmRTZXJ2aWNlLCBSZWNvbW1lbmRhdGlvblNlcnZpY2VdLFxyXG4gICAgdmlld1Byb3ZpZGVyczogW10sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2J1aWxkZXIudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICAnLi9hc3NldHMvY3NzL2J1aWxkZXIuc3R5bGUuY3NzJyxcclxuICAgIF1cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcclxuICAgIGNvbnRyb2xzOiBhbnk7XHJcbiAgICBlbGVtZW50czogYW55W107XHJcbiAgICBzZWxlY3RlZFNlYzogYW55ID0gJ2J1aWxkJztcclxuICAgIHNlbGVjdGVkQW5hbHl0aWNDb21wb25lbnQ6IHN0cmluZyA9ICdvdmVydmlldyc7XHJcbiAgICBzZWxlY3RlZENvbmZpZ0NvbXBvbmVudDogc3RyaW5nID0gJ3NldHRpbmdzJztcclxuICAgIGFwcE5hbWU6IHN0cmluZztcclxuICAgIHVuaXF1ZVVybEhhbmRsZXI6IGFueTtcclxuICAgIHVuaXF1ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBvbGRDYWxjTmFtZTogc3RyaW5nO1xyXG4gICAgc3JjVXJsOiBzdHJpbmc7XHJcbiAgICBwcmV2aW91c0pzb246IGFueTtcclxuICAgIHN0YXJ0QXV0b1NhdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzQW5hbHl0aWNzQXZhaWxhYmxlOiBCb29sZWFuID0gdHJ1ZTtcclxuICAgIGNvbXBhbnlOYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGF1dG9TYXZlcjogYW55O1xyXG4gICAgcHJpdmF0ZSBhY3RpdmVTaW5jZTogYW55O1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHpvb21mYWN0b3IgPSAuMDU7XHJcbiAgICBjdXJyZW50Wm9vbSA9IDA7XHJcbiAgICBjdXJZUG9zID0gMDtcclxuICAgIGN1clhQb3MgPSAwO1xyXG4gICAgeEF4aXMgPSAwO1xyXG4gICAgeUF4aXMgPSAwO1xyXG4gICAgY3VyRG93biA9IGZhbHNlO1xyXG4gICAgaW50ZXJDb21EYXRhOiBhbnkgPSBudWxsO1xyXG4gICAgQ29uZmlnQXJyYXk6IGFueVtdID0gW1wic2V0dGluZ3NcIiwgXCJpbnRlZ3JhdGlvbnNcIiwgXCJlbWFpbFwiLCBcInNoYXJlLXlvdXItY2FsY3VsYXRvclwiLCBcImxhdW5jaC1wb3B1cFwiLCBcImVtYmVkZGVkLWNvZGVcIl07XHJcbiAgICBMYW5kaW5nQXJyYXk6IGFueVtdID0gW1wiUmVzdWx0XCIsIFwiUXVlc3Rpb25uYWlyZVwiLCBcIkxhbmRpbmdcIl07XHJcbiAgICBBbmFseXRpY3NBcnJheTogYW55W10gPSBbXCJvdmVydmlld1wiLCBcInVzZXJfZGV0YWlsXCIsIFwidHJhZmZpY19kZXRhaWxcIl07XHJcbiAgICBoYXNoOiBzdHJpbmcgPSAnTGFuZGluZyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBzdWJEb21haW5TZXJ2aWNlOiBTdWJEb21haW5TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2J1aWxkZXJTZXJ2aWNlOiBCdWlsZGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9kZWZhdWx0SnNvbjogRGVmYXVsdEpTT04sXHJcbiAgICAgICAgcHJpdmF0ZSBfaXRlbVRyYWNrU2VydmljZTogSlNPTkl0ZW1UcmFja2VyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2Rhc2hib2FyZFNlcnZpY2U6IERhc2hib2FyZFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtdWxhU2VydmljZTogRm9ybXVsYVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfZmVhdHVyZUF1dGhTZXJ2aWNlOiBGZWF0dXJlQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfY29va2llU2VydmljZTogQ29va2llU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9zY3JpcHQ6IFNjcmlwdCxcclxuICAgICAgICBwcml2YXRlIHJlY29tbWVuZGF0aW9uU2VydmljZTogUmVjb21tZW5kYXRpb25TZXJ2aWNlXHJcblxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy51bmlxdWVVcmxIYW5kbGVyID0gdGhpcy5fYnVpbGRlclNlcnZpY2UuZGVib3VuY2UodGhpcy5pc1VuaXF1ZSwgODAwKTtcclxuICAgICAgICB0aGlzLmF1dG9TYXZlciA9IHRoaXMuZGVib3VuY2UodGhpcy5zYXZlVW5zYXZlZERhdGEsIDEwMDApO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGFzaC1saW5rJywgdGhpcy5oYXNoKTtcclxuICAgICAgICAvKiBvcGVuIHRhYnMgYWNjIHRvIGhhcyBpbiBocmVmICovXHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTsgLy9QdXRzIGhhc2ggaW4gdmFyaWFibGUsIGFuZCByZW1vdmVzIHRoZSAjIGNoYXJhY3RlclxyXG5cclxuICAgICAgICAgICAgaWYgKGpRdWVyeS5pbkFycmF5KHRoaXMuaGFzaCwgdGhpcy5Db25maWdBcnJheSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZWMgPSAnY29uZmlnJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChqUXVlcnkuaW5BcnJheSh0aGlzLmhhc2gsIHRoaXMuTGFuZGluZ0FycmF5KSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlYyA9ICdidWlsZCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoalF1ZXJ5LmluQXJyYXkodGhpcy5oYXNoLCB0aGlzLkFuYWx5dGljc0FycmF5KSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlYyA9ICdhbmFseXRpY3MnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoYXNoLWxpbmsnLCB0aGlzLmhhc2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnNldFNlbGVjdGVkTW9kZWwoJ1BhZ2UnKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnRlckNvbURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpY2QnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmF2VXJsKCkge1xyXG4gICAgICAgIGxldCB1cmxhID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgbGV0IHVybCA9ICdodHRwOi8vb3V0Z3Jvdy5jbyc7XHJcbiAgICAgICAgaWYgKHVybGEuaW5kZXhPZignb3V0Z3Jvdy5jbycpIDwgMCkge1xyXG4gICAgICAgICAgICB1cmwgPSAnaHR0cDovL291dGdyb3cudXMnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHdpbmRvdy5JbnRlcmNvbSgndXBkYXRlJywgeyBoaWRlX2RlZmF1bHRfbGF1bmNoZXI6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIGxldCByZWxvYWQ6IGFueSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWxvYWQnKTtcclxuICAgICAgICBpZiAocmVsb2FkID09ICcxJykge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVsb2FkJywgJzAnKTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHBhcmFtc1snbmFtZSddO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBOYW1lID0gbmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zY3JpcHQubG9hZCgnd3lzaXd5ZycsICdmaWxlcGlja2VyJywgJ21hdGgnLCAnZmFuY3lib3gnLCAnanF1ZXJ5VUknLCAnZm9ybXVsYUpzJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2NyaXB0cyBMb2FkZWQnLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWF0ZUJ1aWxkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9hbnkgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNBbmFseXRpY3NBdmFpbGFibGUgPSB0aGlzLl9mZWF0dXJlQXV0aFNlcnZpY2UuZmVhdHVyZXMuYW5hbHl0aWNzO1xyXG4gICAgICAgICAgICAvL1NldCBjdXJyZW50IGNvbXBhbnkgbmFtZVxyXG4gICAgICAgICAgICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBhbnlOYW1lID0gc3RvcmFnZS5jb21wYW55Lm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAvLyBsZXQgc2VsZiA9IHRoaXNzXHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW92ZXIgPSAoKSA9PiB3aW5kb3cuaW5uZXJEb2NDbGljayA9IHRydWU7XHJcblxyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2VsZWF2ZSA9ICgpID0+IHdpbmRvdy5pbm5lckRvY0NsaWNrID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmhhc2hjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghd2luZG93LmlubmVyRG9jQ2xpY2spXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IENvbmZpZy5QUk9UT0NPTCArIHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbiArICcuJyArIENvbmZpZy5BUFBfRVhURU5TSU9OICsgJy9kYXNoYm9hcmQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWF0ZUJ1aWxkZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXBwTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldEFwcCh7IHVybDogdGhpcy5hcHBOYW1lIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY3JlYXRlIG5ldyBhcHAgb24gbG9hZFxyXG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZW1wX25hbWUnKTtcclxuICAgICAgICAgICAgbGV0IHRlbXBfdHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZW1wX3R5cGUnKTtcclxuICAgICAgICAgICAgaWYgKHByb2plY3QgPT09ICdOZXcnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIganNvbiA9IHRoaXMuX2RlZmF1bHRKc29uLmdldEpTT04odGVtcGxhdGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBhbnlfaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tcGFueScpO1xyXG4gICAgICAgICAgICAgICAganNvbi5zZXRDb21wYW55KGNvbXBhbnlfaWQpO1xyXG4gICAgICAgICAgICAgICAganNvbi5zZXRUZW1wbGF0ZU5hbWUodGVtcGxhdGUpO1xyXG4gICAgICAgICAgICAgICAganNvbi5zZXRUZW1wbGF0ZVR5cGUodGVtcF90eXBlKTtcclxuICAgICAgICAgICAgICAgIGpzb24uc2V0TmF2aWdhdGVVcmwodGhpcy5nZXROYXZVcmwoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS5jcmVhdGVBcHAoanNvbilcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcHA6IEFwcCA9IG5ldyBBcHAoKS5kZXNlcmlhbGl6ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2luY2UgPSBtb21lbnQocmVzcG9uc2UuY3JlYXRlZEF0KS5mcm9tTm93KCkucmVwbGFjZSgnYWdvJywgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3QnLCBhcHAuX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RlbXBfbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGVtcF90eXBlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYWxjX25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FsY19uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxjX25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcC5uYW1lID0gY2FsY19uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDYWxjTmFtZShhcHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgLyo9PT09IEludGVyY29tID09PT0qL1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJDb21EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlckNvbURhdGEuY2FsY3VsYXRvcnNfY3JlYXRlZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpY2QnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmludGVyQ29tRGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5JbnRlcmNvbSgndXBkYXRlJywgdGhpcy5pbnRlckNvbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLyo9PT09Ki9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghcHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXBwKHsgX2lkOiBwcm9qZWN0IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkQ2FsY05hbWUoYXBwOiBBcHApIHtcclxuICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS51cGRhdGVOYW1lKGFwcC5faWQsIGFwcC5uYW1lKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXBwLnVybCA9IHJlc3BvbnNlLnVybDtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsICcvYnVpbGRlci8nICsgcmVzcG9uc2UudXJsKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjYWxjX25hbWUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuc2V0VGVtcGxhdGUoYXBwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUpxdWVyeVN0dWZmKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZENhbGNOYW1lID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgLy9Eb2N1bWVudCBUaXRsZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZSA9PSAnJylcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiT3V0Z3JvdyB8IFwiICsgdGhpcy5jb21wYW55TmFtZSArIFwiJ3MgQ2FsY3VsYXRvclwiO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJPdXRncm93IHwgXCIgKyB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0QXBwKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0SWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpO1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZU5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVtcF9uYW1lJyk7XHJcbiAgICAgICAgaWYgKHRlbXBsYXRlTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRlbXBsYXRlKHByb2plY3RJZCwgdGVtcGxhdGVOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS5nZXRQcm9qZWN0KGRhdGEpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5LmlzRW1wdHlPYmplY3QocmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXBwOiBBcHAgPSBuZXcgQXBwKCkuZGVzZXJpYWxpemUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FwcC5zZXRUZW1wbGF0ZU5hbWUoJ2hvbWVfbG9hbl9jYWxjdWxhdG9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuc2V0VGVtcGxhdGUoYXBwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplSnF1ZXJ5U3R1ZmYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbGRDYWxjTmFtZSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVTaW5jZSA9IG1vbWVudChyZXNwb25zZS51cGRhdGVkQXQpLmZyb21Ob3coKS5yZXBsYWNlKCdhZ28nLCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0RvY3VtZW50IFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUgPT0gJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiT3V0Z3JvdyB8IFwiICsgdGhpcy5jb21wYW55TmFtZSArIFwiJ3MgQ2FsY3VsYXRvclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiT3V0Z3JvdyB8IFwiICsgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQnXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZVRlbXBsYXRlKHByb2plY3RJZDogYW55LCB0ZW1wbGF0ZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLmNoYW5nZVRlbXBsYXRlKHByb2plY3RJZCwgdGVtcGxhdGVOYW1lKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5LmlzRW1wdHlPYmplY3QocmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0ZW1wX25hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpbml0aWFsaXplSnF1ZXJ5U3R1ZmYoKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0pzb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3RhcnRBdXRvU2F2ZSA9IHRydWUsIDIwMDApO1xyXG5cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGNvcnJlY3RlZFZpZXdwb3J0VyA9IChmdW5jdGlvbiAod2luOiBhbnksIGRvY0VsZW06IGFueSkge1xyXG4gICAgICAgICAgICB2YXIgbU0gPSB3aW5bJ21hdGNoTWVkaWEnXSB8fCB3aW5bJ21zTWF0Y2hNZWRpYSddXHJcbiAgICAgICAgICAgICAgICAsIGNsaWVudCA9IGRvY0VsZW1bJ2NsaWVudFdpZHRoJ11cclxuICAgICAgICAgICAgICAgICwgaW5uZXIgPSB3aW5bJ2lubmVyV2lkdGgnXVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1NICYmIGNsaWVudCA8IGlubmVyICYmIHRydWUgPT09IG1NKCcobWluLXdpZHRoOicgKyBpbm5lciArICdweCknKVsnbWF0Y2hlcyddXHJcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpblsnaW5uZXJXaWR0aCddOyB9XHJcbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY0VsZW1bJ2NsaWVudFdpZHRoJ107IH1cclxuICAgICAgICB9ICh3aW5kb3csIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiA5OTIpIHsgdmFyIG1pbldpbldpZHRoID0gY29ycmVjdGVkVmlld3BvcnRXKCkgLSA1NDQ7IH1cclxuICAgICAgICAvLyBlbHNlIHsgdmFyIG1pbldpbldpZHRoID0gY29ycmVjdGVkVmlld3BvcnRXKCkgLSAzMjc7IH1cclxuXHJcblxyXG5cclxuICAgICAgICAvKiBPbiBjbGljayBQcm9wZXJ0eSBBcnJvdyB0aGUgZGl2IGhpZGUgc2lkZWJhciBjb250YWluZXIgKi9cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucHJvcC1hcnJvdycsIGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGpRdWVyeSgnI3NpZGViYXInKTtcclxuICAgICAgICAgICAgdmFyIHpvb21GYWN0b3IgPSAwO1xyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDE4NTApIHsgem9vbUZhY3RvciA9IDAuOTc7IH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA8IDk5MikgeyB2YXIgem9vbUZhY3RvciA9IDE7IH1cclxuICAgICAgICAgICAgZWxzZSB7IHpvb21GYWN0b3IgPSAwLjkzOyB9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBcIi0yODVweFwiLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJ1xyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNzaWRlYmFyJykuYWRkQ2xhc3MoJ3Byb3BlcnRpZXMtY2xvc2UnKTtcclxuICAgICAgICAgICAgLyogZm9yIGNhbnZhcyBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDk5MikgeyB2YXIgbWluV2luV2lkdGggPSBqUXVlcnkod2luZG93KS53aWR0aCgpIC0gMjY0OyB9XHJcbiAgICAgICAgICAgIGVsc2UgeyB2YXIgbWluV2luV2lkdGggPSBqUXVlcnkod2luZG93KS53aWR0aCgpIC0gMjA7IH1cclxuICAgICAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuYW5pbWF0ZSh7IHdpZHRoOiBtaW5XaW5XaWR0aCB9LCAzMDApO1xyXG4gICAgICAgICAgICBqUXVlcnkoXCJ0ZW1wXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGggfSwgMzAwKTtcclxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwidGVtcFwiKS5jc3MoJ3RyYW5zZm9ybScsICdzY2FsZSgnICsgem9vbUZhY3RvciArICcpJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCJ0ZW1wXCIpLmFuaW1hdGUoeyAnem9vbSc6IHpvb21GYWN0b3IgfSwgMzAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBqUXVlcnkoXCIudGVtcGxhdGUtc2VjdGlvblwiKS5jc3MoJ292ZXJmbG93LXgnLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmJ1aWxkaW5nXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGggfSwgMzAwKTtcclxuICAgICAgICAgICAgLyplbmQqL1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wcm9wZXJ0aWVzLWNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0galF1ZXJ5KCcjc2lkZWJhcicpO1xyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDE4NTApIHsgdmFyIHpvb21GYWN0b3IgPSAwLjg7IH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA8IDk5Mikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHpvb21GYWN0b3IgPSAxO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcubW9iaWxlLXByb3AtY3Jvc3MtaWNvbicpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnByb3BlcnRpZXMtbW9kYWwtYmFja2Ryb3AnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7IHZhciB6b29tRmFjdG9yID0gMC43OyB9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJ1xyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykucmVtb3ZlQ2xhc3MoJ3Byb3BlcnRpZXMtY2xvc2UnKTtcclxuICAgICAgICAgICAgLyogZm9yIGNhbnZhcyBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG4gICAgICAgICAgICBzZWxmLmNhbnZhc1Njcm9sbCgpO1xyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDk5MikgeyB2YXIgbWluV2luV2lkdGggPSBqUXVlcnkod2luZG93KS53aWR0aCgpIC0gNTUwOyB9XHJcbiAgICAgICAgICAgIGVsc2UgeyB2YXIgbWluV2luV2lkdGggPSBqUXVlcnkod2luZG93KS53aWR0aCgpIC0gMjA7IH1cclxuICAgICAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuYW5pbWF0ZSh7IHdpZHRoOiBtaW5XaW5XaWR0aCB9LCAzMDApO1xyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCJ0ZW1wXCIpLmNzcygndHJhbnNmb3JtJywgJ3NjYWxlKCcgKyB6b29tRmFjdG9yICsgJyknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShcInRlbXBcIikuY3NzKCd6b29tJywgem9vbUZhY3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmJ1aWxkaW5nXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IG1pbldpbldpZHRoXHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIC8qZW5kKi9cclxuICAgICAgICB9KTtcclxuICAgICAgICBqUXVlcnkod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY2FudmFzU2Nyb2xsKCk7XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpID4gNzY3ICYmIGpRdWVyeSgnLmVkaXRvci1zaWRlYmFyJykuY3NzKCdkaXNwbGF5JykgPT0gJ25vbmUnKSB7IGpRdWVyeSgnLmVkaXRvci1zaWRlYmFyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7IH1cclxuICAgICAgICAgICAgLy9idWlsZEhlaWdodCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjcHJldmlld19jYWxjJywgKCkgPT4gdGhpcy5vblByZXZpZXcoKSk7XHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vbignY2xpY2snLCAnLnByZXZpZXdfY29weScsICgpID0+IHtcclxuICAgICAgICAgICAgY2xpcGJvYXJkLmNvcHkoc2VsZi5zcmNVcmwpO1xyXG4gICAgICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ0xpbmsgQ29waWVkJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRlbXBsYXRlVHlwZSA9PSAnUmVjb21tZW5kYXRpb24nKVxyXG4gICAgICAgICAgICB0aGlzLnJlY29tbWVuZGF0aW9uU2VydmljZS5nZXRSZWNvbWVuZGVkUmVzdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YWItc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VjID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhYi1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGFiLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3BlblByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGpRdWVyeSgnI3NpZGViYXInKTtcclxuICAgICAgICB2YXIgem9vbUZhY3RvciA9IDA7XHJcbiAgICAgICAgaWYgKGpRdWVyeShjb250YWluZXIpLmhhc0NsYXNzKCdwcm9wZXJ0aWVzLWNsb3NlJykpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInXHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpID4gMTg1MCkgeyB2YXIgem9vbUZhY3RvciA9IDAuODsgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpIDwgOTkyKSB7IHZhciB6b29tRmFjdG9yID0gMTsgfVxyXG4gICAgICAgICAgICBlbHNlIHsgdmFyIHpvb21GYWN0b3IgPSAwLjc7IH1cclxuICAgICAgICAgICAgalF1ZXJ5KGNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoJ3Byb3BlcnRpZXMtY2xvc2UnKTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNTY3JvbGwoKTtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiA5OTIpIHsgdmFyIG1pbldpbldpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKSAtIDU1MDsgfVxyXG4gICAgICAgICAgICBlbHNlIHsgdmFyIG1pbldpbldpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKSAtIDIwOyB9XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGggfSwgMzAwKTtcclxuICAgICAgICAgICAgLy9qUXVlcnkoXCJ0ZW1wXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGh9LCAyMDApO1xyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCJ0ZW1wXCIpLmNzcygndHJhbnNmb3JtJywgJ3NjYWxlKCcgKyB6b29tRmFjdG9yICsgJyknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShcInRlbXBcIikuY3NzKCd6b29tJywgem9vbUZhY3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmJ1aWxkaW5nXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGggfSwgMzAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBqUXVlcnkoJyNzaWRlYmFyJyk7XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpID4gMTg1MCkgeyB6b29tRmFjdG9yID0gMC45NzsgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpIDwgOTkyKSB7IHZhciB6b29tRmFjdG9yID0gMTsgfVxyXG4gICAgICAgICAgICBlbHNlIHsgem9vbUZhY3RvciA9IDAuOTM7IH1cclxuICAgICAgICAgICAgY29udGFpbmVyLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFwiLTI4NXB4XCIsXHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInXHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI3NpZGViYXInKS5hZGRDbGFzcygncHJvcGVydGllcy1jbG9zZScpO1xyXG4gICAgICAgICAgICAvKiBmb3IgY2FudmFzIGhvcml6b250YWwgc2Nyb2xsICovXHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpID4gOTkyKSB7IHZhciBtaW5XaW5XaWR0aCA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgLSAyNjQ7IH1cclxuICAgICAgICAgICAgZWxzZSB7IHZhciBtaW5XaW5XaWR0aCA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgLSAyMDsgfVxyXG4gICAgICAgICAgICAvL2pRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLmNzcygnd2lkdGgnLCBtaW5XaW5XaWR0aCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGggfSwgMzAwKTtcclxuICAgICAgICAgICAgLy9qUXVlcnkoXCJ0ZW1wXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGggLSAzNTB9LCAzMDApO1xyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCJ0ZW1wXCIpLmNzcygndHJhbnNmb3JtJywgJ3NjYWxlKCcgKyB6b29tRmFjdG9yICsgJyknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShcInRlbXBcIikuY3NzKCd6b29tJywgem9vbUZhY3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuY3NzKCdvdmVyZmxvdy14JywgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5idWlsZGluZ1wiKS5hbmltYXRlKHsgd2lkdGg6IG1pbldpbldpZHRoIH0sIDMwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3Blbk1vYmlsZVByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbnRlclwiKTtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0galF1ZXJ5KCcjc2lkZWJhcicpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hbmltYXRlKHtcclxuICAgICAgICAgICAgcmlnaHQ6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcidcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgIC8qIGZvciBjYW52YXMgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxuICAgICAgICB2YXIgbWluV2luV2lkdGggPSBqUXVlcnkod2luZG93KS53aWR0aCgpIC0gMjA7XHJcbiAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuYW5pbWF0ZSh7IHdpZHRoOiBtaW5XaW5XaWR0aCB9LCAzMDApO1xyXG4gICAgICAgIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLmNzcygnb3ZlcmZsb3cteCcsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGpRdWVyeShcIi5idWlsZGluZ1wiKS5hbmltYXRlKHsgd2lkdGg6IG1pbldpbldpZHRoIH0sIDMwMCk7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlLXByb3AtY3Jvc3MtaWNvbicpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgIGpRdWVyeSgnLnByb3BlcnRpZXMtbW9kYWwtYmFja2Ryb3AnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKS5hZGRDbGFzcygnZmFkZSBpbicpO1xyXG4gICAgfVxyXG4gICAgem9vbShhY3Rpb246IHN0cmluZykge1xyXG4gICAgICAgIHZhciBtYXhab29tID0gMjtcclxuICAgICAgICB2YXIgbWluWm9vbSA9IDAuMjtcclxuICAgICAgICB2YXIgem9vbWRpdiA9IFwidGVtcFwiO1xyXG4gICAgICAgIHZhciBhbmltYXRpb25TcGVlZCA9IFwiMTAwMFwiO1xyXG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdpbicpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Wm9vbSA9IE51bWJlcihqUXVlcnkoJ3RlbXAnKS5jc3MoXCJ6b29tXCIpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFpvb20gPCBtYXhab29tKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoem9vbWRpdikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3pvb20nOiB0aGlzLmN1cnJlbnRab29tICs9IHRoaXMuem9vbWZhY3RvclxyXG4gICAgICAgICAgICAgICAgfSwgYW5pbWF0aW9uU3BlZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLm1DdXN0b21TY3JvbGxiYXIoXCJkZXN0cm95XCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gdmFyIHdpbkhlaWdodCA9IGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpIC0gNzI7XHJcbiAgICAgICAgICAgICAgICAvLyBqUXVlcnkoJy50ZW1wbGF0ZS1zZWN0aW9uJykubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYXhpczogJ3h5JyxcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGVtZTogJ2RhcmstMycsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYWR2YW5jZWQ6IHsgYXV0b0V4cGFuZEhvcml6b250YWxTY3JvbGw6IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdvdXQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFpvb20gPSBqUXVlcnkoJ3RlbXAnKS5jc3MoXCJ6b29tXCIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Wm9vbSA+IG1pblpvb20pIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh6b29tZGl2KS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAnem9vbSc6IHRoaXMuY3VycmVudFpvb20gLT0gdGhpcy56b29tZmFjdG9yXHJcbiAgICAgICAgICAgICAgICB9LCBhbmltYXRpb25TcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3Jlc2V0Jykge1xyXG5cclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiAxODUwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KCcjc2lkZWJhcicpLmhhc0NsYXNzKCdwcm9wZXJ0aWVzLWNsb3NlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgem9vbVZhbHVlID0gMC45NztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB6b29tVmFsdWUgPSAwLjg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KCcjc2lkZWJhcicpLmhhc0NsYXNzKCdwcm9wZXJ0aWVzLWNsb3NlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgem9vbVZhbHVlID0gMC45MztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB6b29tVmFsdWUgPSAwLjc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgalF1ZXJ5KHpvb21kaXYpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgJ3pvb20nOiB6b29tVmFsdWVcclxuICAgICAgICAgICAgfSwgYW5pbWF0aW9uU3BlZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRyYWcoKSB7XHJcblxyXG4gICAgICAgIC8vIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAvLyBqUXVlcnkoXCIudGVtcGxhdGUtc2VjdGlvblwiKS50b2dnbGVDbGFzcygnbW92ZS1jYW52YXMnKTtcclxuICAgICAgICAvLyAvL2pRdWVyeShcIi5tQ1NCX2NvbnRhaW5lclwiKS5raW5ldGljKCk7XHJcbiAgICAgICAgLy8galF1ZXJ5KGRvY3VtZW50KS5vbignbW91c2Vtb3ZlJywgJy5tQ1NCX2NvbnRhaW5lcicsIGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgICAgICAvLyAgICAgaWYgKHNlbGYuY3VyRG93biA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIHRvcENhbnZhcyA9IGpRdWVyeSgnLm1DU0JfY29udGFpbmVyJykucG9zaXRpb24oKS50b3A7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgbGVmdENhbnZhcyA9IGpRdWVyeSgnLm1DU0JfY29udGFpbmVyJykucG9zaXRpb24oKS5sZWZ0O1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGF4aXNMZWZ0ID0gKGUucGFnZVggLSBzZWxmLmN1clhQb3MpO1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGF4aXNUb3AgPSAoZS5wYWdlWSAtIHNlbGYuY3VyWVBvcyk7XHJcblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vIGpRdWVyeShkb2N1bWVudCkub24oJ21vdXNlZG93bicsICcubUNTQl9jb250YWluZXInLCBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgLy8gICAgIHNlbGYuY3VyRG93biA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHNlbGYuY3VyWVBvcyA9IGUucGFnZVk7XHJcbiAgICAgICAgLy8gICAgIHNlbGYuY3VyWFBvcyA9IGUucGFnZVg7XHJcbiAgICAgICAgLy8gICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoZTogYW55KSB7IGNvbnNvbGUubG9nKCdtb3VzZXVwJyk7IHNlbGYuY3VyRG93biA9IGZhbHNlOyB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KFwidGVtcFwiKS5kcmFnZ2FibGUoKTtcclxuXHJcbiAgICB9XHJcbiAgICBjYW52YXNTY3JvbGwoKSB7XHJcbiAgICAgICAgLyogZm9yIGNhbnZhcyBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG4gICAgICAgIHZhciB3aW5XaWR0aCA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgLSAzMTU7XHJcbiAgICAgICAgdmFyIHdpbkhlaWdodCA9IGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpIC0gNjA7XHJcbiAgICAgICAgLy9qUXVlcnkoXCJ0ZW1wXCIpLmNzcygnd2lkdGgnLCB3aW5XaWR0aCk7XHJcbiAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuY3NzKCdwb3NpdGlvbicsIFwiZml4ZWRcIik7XHJcbiAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuY3NzKCdoZWlnaHQnLCB3aW5IZWlnaHQpO1xyXG4gICAgICAgIC8qZW5kKi9cclxuICAgIH1cclxuXHJcbiAgICBvblByZXZpZXcoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RlbXBsYXRlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKSkpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcHJldmlldycsICdfYmxhbmsnKTtcclxuICAgIH1cclxuXHJcbiAgICBvblB1Ymxpc2goJGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGVycm9yUmVzdWx0cyA9IHRoaXMuZm9ybXVsYVNlcnZpY2UuY2hlY2tJZkZvcm11bGFXb3VsZEdpdmVTeW50YXhFcnJvcigpO1xyXG4gICAgICAgIGlmICghdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS51cmwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGJvb3Rib3guZGlhbG9nKHtcclxuICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vdGJveC1ib2R5LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb3Rib3gtYm9keS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBjYWxjdWxhdG9yIGNhbid0IGdvIGxpdmUgd2l0aG91dCBhIG5hbWUhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxwPlRoaW5rIG9mIHNvbWV0aGluZyBpbnRlcmVzdGluZyB0aGF0IHdvdWxkIGF0dHJhY3QgYXR0ZW50aW9uITwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJPS1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1vayBidG4taG92ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI215b25vZmZzd2l0Y2gnKS5hdHRyKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVycm9yUmVzdWx0cyAhPSAnJyAmJiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRlbXBsYXRlVHlwZSA9PSAnTnVtZXJpY2FsJykge1xyXG4gICAgICAgICAgICBib290Ym94LmNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGVyZSBhcmUgbWlzdGFrZXMgaW4gJyArIGVycm9yUmVzdWx0cyArICcgZHVlIHRvIGNoYW5nZSBpbiBxdWVzdGlvbnMgb3JkZXJpbmcuPGJyPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwcm9jZWVkPycsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHJlc3VsdDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LlB1Ymxpc2goJGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtdWxhU2VydmljZS5nZXRBbGxJbnZhbGlkRm9ybXVsYXMoKSAhPSB1bmRlZmluZWQgJiYgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0gJ051bWVyaWNhbCcpIHtcclxuICAgICAgICAgICAgYm9vdGJveC5jb25maXJtKHtcclxuICAgICAgICAgICAgICAgIHNpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb3Rib3gtYm9keS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBkZWZhdWx0IHZhbHVlcyBvZiBzb21lIG9mIHRoZSBxdWVzdGlvbnMgdXNlZCBpbiB0aGUgZm9ybXVsYSBvZiBgKyB0aGlzLmZvcm11bGFTZXJ2aWNlLmdldEFsbEludmFsaWRGb3JtdWxhcygpICsgYCBhcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdCBhcHBsaWVkLiBJbiB0aGlzIGNhc2UgdGhlIHJlc3VsdCB3aWxsIG5vdCBiZSBhcHByb3ByaWF0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwcm9jZWVkP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjYW5jZWwnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdidG4gYnRuLWNhbmNlbCBidG4taG92ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnY29uZmlybSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdZZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdidG4gYnRuLW9rIGJ0bi1ob3ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChyZXN1bHQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5QdWJsaXNoKCRldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5qc29uQnVpbGRlckhlbHBlci5zZXRTZWxlY3RlZE1vZGVsKCdQYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuanNvbkJ1aWxkZXJIZWxwZXIuc2V0U2VsZWN0ZWRQYWdlKHRoYXQuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXNbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBqUXVlcnkoJy5wYWdlXzInKS5wb3NpdGlvbigpLnRvcCArIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJy50ZW1wbGF0ZS1zZWN0aW9uIC5tQ1NCX2NvbnRhaW5lcicpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5QdWJsaXNoKCRldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFB1Ymxpc2goJGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB2YXIgYnV0dG9uID0galF1ZXJ5KCRldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGJ1dHRvbi5odG1sKCdQVUJMSVNISU5HJyk7XHJcbiAgICAgICAgYnV0dG9uLmFkZENsYXNzKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgYnV0dG9uLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlclNlcnZpY2UucHVibGlzaEFwcCh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLl9pZCxcclxuICAgICAgICAgICAgdXJsOiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybCxcclxuICAgICAgICAgICAgdW5zYXZlZDogdGhpcy5faXRlbVRyYWNrU2VydmljZS5nZXRVblNhdmVkRGF0YSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5LmlzRW1wdHlPYmplY3QocmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubW9kZSA9PT0gJ1BSSVZBVEUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Nb2RlQ2hhbmdlKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubW9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3JjVXJsID0gQ29uZmlnLlBST1RPQ09MICsgdGhpcy5zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5zdWJfZG9tYWluICsgJy4nICsgQ29uZmlnLkFQUF9FWFRFTlNJT04gKyAnLycgKyB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9vdGJveC5kaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbGl2ZS1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1wbGF5LW5leHRcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cXVldWVfcGxheV9uZXh0PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1oZWFkXCI+WW91ciBDYWxjdWxhdG9yIGlzIExpdmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXN0eWxlIGhpZGVcIiBzcmM9XCJhc3NldHMvaW1hZ2VzL2dvTGl2ZVBvcHVwLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLXN1YmhlYWQgbGluay1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gcHJldmlldywgb3BlbiB0aGlzIGxpbmsgaW4gYW5vdGhlciBicm93c2VyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsaXZlLXVybCBwcmV2aWV3X2NvcHlcIj5Db3B5IExpbms8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1zdWJoZWFkIHNlbGVjdGVkLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlkZVwiPllvdXIgcHVibGljIGNhbGN1bGF0b3IgY2FuIGJlIHZpZXdlZCBoZXJlOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLXVybCB1cmwtc3R5bGVcIj5gICsgdGhpcy5zcmNVcmwgKyBgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2dvY29weVBvcHVwLnBuZ1wiLz4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZSBoaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1zdWJoZWFkIGxpbmstc3R5bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gcHJldmlldywgb3BlbiB0aGlzIGxpbmsgaW4gYW5vdGhlciBicm93c2VyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxpdmUtdXJsIHByZXZpZXdfY29weVwiPkNvcHkgTGluazwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpdmUtc3ViaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlkZVwiPllvdXIgcHVibGljIGNhbGN1bGF0b3IgY2FuIGJlIHZpZXdlZCBoZXJlOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS11cmwgdXJsLXN0eWxlXCI+YCArIHRoaXMuc3JjVXJsICsgYDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qPT09PSBJbnRlcmNvbSA9PT09Ki9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJDb21EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVyQ29tRGF0YS5jYWxjdWxhdG9yc19wdWJsaXNoZWQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpY2QnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmludGVyQ29tRGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LkludGVyY29tKCd1cGRhdGUnLCB0aGlzLmludGVyQ29tRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyo9PT09PSovXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdDaGFuZ2VzIFB1Ymxpc2hlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzSnNvbi5saXZlQXBwID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5saXZlQXBwID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0pzb24uY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5odG1sKCdMSVZFJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaHRtbCgnR08gTElWRScpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICBib290Ym94LmFsZXJ0KCdTb21ldGhpbmcgV2VudCBXcm9uZyEnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZpZXcgZWxlbWVudCBDaGFuZ2VzXHJcbiAgICBtb2JpbGVNZW51Q2xpY2tlZCgpIHtcclxuICAgICAgICBqUXVlcnkoJy5lZGl0b3Itc2lkZWJhcicpLmZhZGVUb2dnbGUoNDAwKTtcclxuICAgICAgICBqUXVlcnkoJy5zaWRlYmFyLW1vZGFsLWJhY2tkcm9wJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJykuYWRkQ2xhc3MoJ2ZhZGUgaW4nKTtcclxuICAgIH1cclxuICAgIG1vYmlsZU1lbnVDcm9zc0NsaWNrZWQoKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuZWRpdG9yLXNpZGViYXInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNpZGViYXItbW9kYWwtYmFja2Ryb3AnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpLmFkZENsYXNzKCdmYWRlIG91dCcpO1xyXG4gICAgfVxyXG4gICAgbW9iaWxlUHJvcENyb3NzQ2xpY2tlZCgpIHtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0galF1ZXJ5KCcjc2lkZWJhcicpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hbmltYXRlKHtcclxuICAgICAgICAgICAgcmlnaHQ6IFwiLTI4NXB4XCIsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcidcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgIGpRdWVyeSgnI3NpZGViYXInKS5hZGRDbGFzcygncHJvcGVydGllcy1jbG9zZScpO1xyXG4gICAgICAgIC8qIGZvciBjYW52YXMgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxuICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDk5MikgeyB2YXIgbWluV2luV2lkdGggPSBqUXVlcnkod2luZG93KS53aWR0aCgpIC0gMjg5OyB9XHJcbiAgICAgICAgZWxzZSB7IHZhciBtaW5XaW5XaWR0aCA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgLSAyMDsgfVxyXG4gICAgICAgIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGggfSwgMzAwKTtcclxuICAgICAgICBqUXVlcnkoXCJ0ZW1wXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGggfSwgMzAwKTtcclxuICAgICAgICBqUXVlcnkoXCIudGVtcGxhdGUtc2VjdGlvblwiKS5jc3MoJ292ZXJmbG93LXgnLCBcImhpZGRlblwiKTtcclxuICAgICAgICBqUXVlcnkoXCIuYnVpbGRpbmdcIikuYW5pbWF0ZSh7IHdpZHRoOiBtaW5XaW5XaWR0aCB9LCAzMDApO1xyXG4gICAgICAgIGpRdWVyeSgnLm1vYmlsZS1wcm9wLWNyb3NzLWljb24nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgIGpRdWVyeSgnLnByb3BlcnRpZXMtbW9kYWwtYmFja2Ryb3AnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpLmFkZENsYXNzKCdmYWRlIG91dCcpO1xyXG4gICAgICAgIC8qZW5kKi9cclxuICAgIH1cclxuICAgIGFwcE5hbWVibHVyZWQoKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcjZm5hbWUnKS5yZW1vdmVDbGFzcygnYWN0aXZlLXRleHQnKTtcclxuICAgIH1cclxuICAgIGFwcE5hbWVGb2N1c2VkKCkge1xyXG4gICAgICAgIGpRdWVyeSgnI2ZuYW1lJykuYWRkQ2xhc3MoJ2FjdGl2ZS10ZXh0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYWxjTmFtZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVuaXF1ZVVybEhhbmRsZXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oXCJDYWxjdWxhdG9yIG5hbWUgY2FuJ3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZSA9IHRoaXMub2xkQ2FsY05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzVW5pcXVlKHVuaXF1ZVN0cmluZzogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2xkQ2FsY05hbWUgIT0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGF0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgdXJsOiBTdHJpbmcgPSB0aGF0Ll9idWlsZGVyU2VydmljZS5zYW5pdGl6ZVVybCh0aGF0Lmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUpO1xyXG4gICAgICAgICAgICB1cmwgPSBDb25maWcuUFJPVE9DT0wgKyB0aGF0LnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvJyArIHVybDtcclxuICAgICAgICAgICAgdGhhdC51cGRhdGVOYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlTmFtZSgpIHtcclxuICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS51cGRhdGVOYW1lKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS51cmwgPSByZXNwb25zZS51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgJy9idWlsZGVyLycgKyByZXNwb25zZS51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBDb25maWcuUFJPVE9DT0wgKyB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvJyArIHJlc3BvbnNlLnVybDtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ0NhbGN1bGF0b3IgbmFtZSBhZGRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgICAgICAgICBib290Ym94LmRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib290Ym94LWNvbmZpZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib290Ym94LWJvZHktbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb3Rib3gtYm9keS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIlwiPldlIGhhdmUgc2V0IHlvdXIgY2FsY3VsYXRvclxcJ3MgdXJsIHRvIFwiYCArIHVybCArIGBcIiAsIFlvdSBjYW4gYWx3YXlzIGNoYW5nZSBpdCBpbiBjb25maWd1cmUgc2VjdGlvbi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tb2sgYnRuLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdDYWxjdWxhdG9yIG5hbWUgY2hhbmdlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMub2xkQ2FsY05hbWUgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQXBwc2V0dGluZygpIHtcclxuICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS5zYXZlQXBwU2V0dGluZyh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS51cmwgPSByZXNwb25zZS51cmw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsR0Eob3B0OiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKG9wdCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiR09MSVZFXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ1B1Ymxpc2gnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdQdWJsaXNoIEdvIExpdmUgQ2xpY2snXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkxPR09cIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnT0dMb2dvJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQmFjayBUbyBEYXNoYm9hcmQgT0dMb2dvIENsaWNrJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJQUkVWSUVXXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ1ByZXZpZXcnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdQcmV2aWV3IENsaWNrJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW9kZUNoYW5nZShtb2RlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAobW9kZSA9PT0gJ1BVQkxJQycpIHtcclxuICAgICAgICAgICAgbW9kZSA9ICdQUklWQVRFJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtb2RlID0gJ1BVQkxJQyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Rhc2hib2FyZFNlcnZpY2UuY2hhbmdlQXBwTW9kZSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLl9pZCwgbW9kZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubW9kZSA9IG1vZGU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRBdXRvU2F2ZVxyXG4gICAgICAgICAgICAmJiBKU09OLnN0cmluZ2lmeSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpKSAhPSBKU09OLnN0cmluZ2lmeSh0aGlzLnByZXZpb3VzSnNvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0pzb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkpKTtcclxuICAgICAgICAgICAgbGV0IHVuU2F2ZWRFbGVtZW50cyA9IHRoaXMuX2l0ZW1UcmFja1NlcnZpY2UuZ2V0VW5TYXZlZERhdGEoKTtcclxuICAgICAgICAgICAgaWYgKHVuU2F2ZWRFbGVtZW50cylcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b1NhdmVyKHVuU2F2ZWRFbGVtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLnN0YXJ0QXV0b1NhdmUgJiYgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKSlcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0pzb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWJvdW5jZShmdW5jOiBhbnksIHdhaXQ6IG51bWJlcikge1xyXG4gICAgICAgIHZhciB0aW1lb3V0OiBhbnk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tBbmFseXRpY3MoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvIHRoaXMgaXNzcyBzb21ldGhpbmcgaGVyZScpO1xyXG4gICAgICAgIHRoaXMuaXNBbmFseXRpY3NBdmFpbGFibGUgPSB0aGlzLl9mZWF0dXJlQXV0aFNlcnZpY2UuZmVhdHVyZXMuYW5hbHl0aWNzO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FuYWx5dGljc0F2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNwcmVtaXVtTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3QoJ2FuYWx5dGljcycpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQW5hbHl0aWNDb21wb25lbnQgPSAnb3ZlcnZpZXcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzYXZlVW5zYXZlZERhdGEodW5TYXZlZEVsZW1lbnRzOiBhbnkpIHtcclxuICAgICAgICBsZXQgYXBwID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpKSk7XHJcbiAgICAgICAgZGVsZXRlIGFwcC5wYWdlcztcclxuICAgICAgICB1blNhdmVkRWxlbWVudHMuYXBwID0gYXBwO1xyXG5cclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmFuaW1Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlclNlcnZpY2UudXBkYXRlQ2hhbmdlcyh1blNhdmVkRWxlbWVudHMpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5kZWJvdW5jZSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmFuaW1Mb2FkKCksIDE4MDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVTaW5jZSA9IG1vbWVudChEYXRlLm5vdygpKS5mcm9tTm93KCkucmVwbGFjZSgnYWdvJywgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0KGNvbXA6IHN0cmluZykge1xyXG4gICAgICAgIC8vICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xyXG4gICAgICAgIGlmIChjb21wID09ICdjb25maWcnKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArIHRoaXMuc2VsZWN0ZWRDb25maWdDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKGNvbXAgPT0gJ2J1aWxkJylcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkUGFnZSgpLnR5cGU7XHJcbiAgICAgICAgaWYgKGNvbXAgPT0gJ2FuYWx5dGljcycpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyNvdmVydmlldyc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFNlYyA9IGNvbXA7XHJcbiAgICB9XHJcblxyXG4gICAgT25Db25maWdDb21wb2VudFNlbGVjdChjb21wb25lbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb25maWdDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgd2luZG93LkludGVyY29tKCd1cGRhdGUnLCB7IGhpZGVfZGVmYXVsdF9sYXVuY2hlcjogZmFsc2UgfSk7XHJcbiAgICB9XHJcbn0iXX0=
