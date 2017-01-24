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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2J1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUUsZUFBZSxDQUFDLENBQUE7QUFDckYsdUJBQTBELGlCQUFpQixDQUFDLENBQUE7QUFDNUUsa0NBQXdCLHlDQUF5QyxDQUFDLENBQUE7QUFDbEUsc0NBQTRCLGdEQUFnRCxDQUFDLENBQUE7QUFDN0UsaUNBQXVCLHVDQUF1QyxDQUFDLENBQUE7QUFDL0QsaUNBQXVCLCtCQUErQixDQUFDLENBQUE7QUFDdkQsb0NBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFDN0QsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsb0NBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFDN0Qsc0JBQWtJLG9CQUFvQixDQUFDLENBQUE7QUFDdkosaUNBQWdDLHNDQUFzQyxDQUFDLENBQUE7QUFDdkUsc0JBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0Msc0NBQW9DLGlDQUFpQyxDQUFDLENBQUE7QUFDdEUsZ0NBQStCLDRCQUE0QixDQUFDLENBQUE7QUFDNUQsb0NBQTRCLDJDQUEyQyxDQUFDLENBQUE7QUFDeEUsOENBQWdDLDBDQUEwQyxDQUFDLENBQUE7QUFDM0Usc0JBQWlDLDZCQUE2QixDQUFDLENBQUE7QUFDL0Qsc0JBQWlDLDZCQUE2QixDQUFDLENBQUE7QUFDL0QsMkJBQXVCLHlCQUF5QixDQUFDLENBQUE7QUFDakQsaUNBQWdDLHdDQUF3QyxDQUFDLENBQUE7QUFDekUsc0JBQWdELDZCQUE2QixDQUFDLENBQUE7QUFDOUUsc0JBQW1DLDZCQUE2QixDQUFDLENBQUE7QUFDakUsc0JBQXVCLDZCQUE2QixDQUFDLENBQUE7QUFDckQsdUNBQXNDLDhDQUE4QyxDQUFDLENBQUE7QUFtQ3JGO0lBK0JJLDBCQUFvQixpQkFBOEIsRUFDdEMsZ0JBQWtDLEVBQ2xDLGVBQStCLEVBQy9CLFlBQXlCLEVBQ3pCLGlCQUFrQyxFQUNsQyxL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QUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDJCQUFPLEVBQUUseUJBQU0sRUFBRSxtQ0FBVztnQkFDeEQseUJBQU0sRUFBRSxpQ0FBeUIsRUFBRSwyQ0FBbUIsRUFBRSxxQ0FBNkIsRUFBRSw4QkFBc0I7Z0JBQzdHLHVDQUErQixFQUFFLGtDQUFlLEVBQUUsd0JBQWdCO2FBQ3JFO1lBQ0QsU0FBUyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxpQ0FBVyxFQUFFLGlDQUFXLEVBQUUsZ0NBQWM7Z0JBQ2hFLGtDQUFlLEVBQUUsaUNBQVcsRUFBRSwrQ0FBZSxFQUFFLHdCQUFnQixFQUFFLDhDQUFxQixDQUFDO1lBQzNGLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFO2dCQUNQLGdDQUFnQzthQUNuQztTQUVKLENBQUM7O3dCQUFBO0lBKzJCRix1QkFBQztBQUFELENBNzJCQSxBQTYyQkMsSUFBQTtBQTcyQlksd0JBQWdCLG1CQTYyQjVCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvYnVpbGRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gJy4uL3RlbXBsYXRlcy9jb250cm9scy9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlbXBsYXRlRGV2IH0gZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlQWxsL3RlbXBsYXRlRGV2LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9lZGl0b3JzL2VkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICcuL2NvbXBvbmVudHMvc3dpdGNoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybXVsYVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Zvcm11bGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEpTT05FbGVtZW50IH0gZnJvbSAnLi9zZXJ2aWNlcy9KU09ORWxlbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TWFuYWdlckNvbXBvbmVudCwgQ29tcG9uZW50Q29uZmlnTWFuYWdlckNvbXBvbmVudCwgQ2FsY0FuYWx5dGljc01hbmFnZXJDb21wb25lbnQsIENhbGNBbmFseXRpY3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb25maWdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uZmlnL2NvbmZpZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJdGVtLCBBcHAgfSBmcm9tICcuL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IEZvcm11bGFQb3BDb21wb25lbnQgfSBmcm9tICcuL2Zvcm11bGEvZm9ybXVsYV9wb3AuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2J1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IERlZmF1bHRKU09OIH0gZnJvbSAnLi4vdGVtcGxhdGVzL3NlcnZpY2VzL0RlZmF1bHRKU09OLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OSXRlbVRyYWNrZXIgfSBmcm9tICcuL3NlcnZpY2VzL0pTT05VcGRhdGVJdGVtVHJhY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3ViRG9tYWluU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Rvb2xiYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvZW52LmNvbmZpZyc7XHJcbmltcG9ydCB7IEFuYWx5dGljU2VydmljZSB9IGZyb20gJy4uL3RlbXBsYXRlcy9zZXJ2aWNlcy9hbmFseXRpYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2VydmljZSwgQ29va2llU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IEZlYXR1cmVBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IFNjcmlwdCB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IFJlY29tbWVuZGF0aW9uU2VydmljZSB9IGZyb20gJy4uL3RlbXBsYXRlcy9zZXJ2aWNlcy9yZWNvbW1lbmRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBib290Ym94OiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDogYW55O1xyXG5kZWNsYXJlIHZhciBkb2N1bWVudDogYW55O1xyXG5kZWNsYXJlIHZhciB6b29tZmFjdG9yOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGN1cnJlbnRab29tOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGN1cllQb3M6IGFueTtcclxuZGVjbGFyZSB2YXIgY3VyWFBvczogYW55O1xyXG5kZWNsYXJlIHZhciBjdXJEb3duOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHhBeGlzOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHlBeGlzOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGNsaXBib2FyZDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdzZC1idWlsZGVyJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgQ29udHJvbCwgRWRpdG9yLCBUZW1wbGF0ZURldixcclxuICAgICAgICBTd2l0Y2gsIENvbXBvbmVudE1hbmFnZXJDb21wb25lbnQsIEZvcm11bGFQb3BDb21wb25lbnQsIENhbGNBbmFseXRpY3NNYW5hZ2VyQ29tcG9uZW50LCBDYWxjQW5hbHl0aWNzQ29tcG9uZW50LFxyXG4gICAgICAgIENvbXBvbmVudENvbmZpZ01hbmFnZXJDb21wb25lbnQsIENvbmZpZ0NvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW0Zvcm11bGFTZXJ2aWNlLCBKU09OQnVpbGRlciwgSlNPTkVsZW1lbnQsIEJ1aWxkZXJTZXJ2aWNlLFxyXG4gICAgICAgIEFuYWx5dGljU2VydmljZSwgRGVmYXVsdEpTT04sIEpTT05JdGVtVHJhY2tlciwgRGFzaGJvYXJkU2VydmljZSwgUmVjb21tZW5kYXRpb25TZXJ2aWNlXSxcclxuICAgIHZpZXdQcm92aWRlcnM6IFtdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdidWlsZGVyLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgJy4vYXNzZXRzL2Nzcy9idWlsZGVyLnN0eWxlLmNzcycsXHJcbiAgICBdXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XHJcbiAgICBjb250cm9sczogYW55O1xyXG4gICAgZWxlbWVudHM6IGFueVtdO1xyXG4gICAgc2VsZWN0ZWRTZWM6IGFueSA9ICdidWlsZCc7XHJcbiAgICBzZWxlY3RlZEFuYWx5dGljQ29tcG9uZW50OiBzdHJpbmcgPSAnb3ZlcnZpZXcnO1xyXG4gICAgc2VsZWN0ZWRDb25maWdDb21wb25lbnQ6IHN0cmluZyA9ICdzZXR0aW5ncyc7XHJcbiAgICBhcHBOYW1lOiBzdHJpbmc7XHJcbiAgICB1bmlxdWVVcmxIYW5kbGVyOiBhbnk7XHJcbiAgICB1bmlxdWU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgb2xkQ2FsY05hbWU6IHN0cmluZztcclxuICAgIHNyY1VybDogc3RyaW5nO1xyXG4gICAgcHJldmlvdXNKc29uOiBhbnk7XHJcbiAgICBzdGFydEF1dG9TYXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0FuYWx5dGljc0F2YWlsYWJsZTogQm9vbGVhbiA9IHRydWU7XHJcbiAgICBjb21wYW55TmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBhdXRvU2F2ZXI6IGFueTtcclxuICAgIHByaXZhdGUgYWN0aXZlU2luY2U6IGFueTtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICB6b29tZmFjdG9yID0gLjA1O1xyXG4gICAgY3VycmVudFpvb20gPSAwO1xyXG4gICAgY3VyWVBvcyA9IDA7XHJcbiAgICBjdXJYUG9zID0gMDtcclxuICAgIHhBeGlzID0gMDtcclxuICAgIHlBeGlzID0gMDtcclxuICAgIGN1ckRvd24gPSBmYWxzZTtcclxuICAgIGludGVyQ29tRGF0YTogYW55ID0gbnVsbDtcclxuICAgIENvbmZpZ0FycmF5OiBhbnlbXSA9IFtcInNldHRpbmdzXCIsIFwiaW50ZWdyYXRpb25zXCIsIFwiZW1haWxcIiwgXCJzaGFyZS15b3VyLWNhbGN1bGF0b3JcIiwgXCJsYXVuY2gtcG9wdXBcIiwgXCJlbWJlZGRlZC1jb2RlXCJdO1xyXG4gICAgTGFuZGluZ0FycmF5OiBhbnlbXSA9IFtcIlJlc3VsdFwiLCBcIlF1ZXN0aW9ubmFpcmVcIiwgXCJMYW5kaW5nXCJdO1xyXG4gICAgQW5hbHl0aWNzQXJyYXk6IGFueVtdID0gW1wib3ZlcnZpZXdcIiwgXCJ1c2VyX2RldGFpbFwiLCBcInRyYWZmaWNfZGV0YWlsXCJdO1xyXG4gICAgaGFzaDogc3RyaW5nID0gJ0xhbmRpbmcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgc3ViRG9tYWluU2VydmljZTogU3ViRG9tYWluU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9idWlsZGVyU2VydmljZTogQnVpbGRlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfZGVmYXVsdEpzb246IERlZmF1bHRKU09OLFxyXG4gICAgICAgIHByaXZhdGUgX2l0ZW1UcmFja1NlcnZpY2U6IEpTT05JdGVtVHJhY2tlcixcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIF9kYXNoYm9hcmRTZXJ2aWNlOiBEYXNoYm9hcmRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZm9ybXVsYVNlcnZpY2U6IEZvcm11bGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2ZlYXR1cmVBdXRoU2VydmljZTogRmVhdHVyZUF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2Nvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfc2NyaXB0OiBTY3JpcHQsXHJcbiAgICAgICAgcHJpdmF0ZSByZWNvbW1lbmRhdGlvblNlcnZpY2U6IFJlY29tbWVuZGF0aW9uU2VydmljZVxyXG5cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudW5pcXVlVXJsSGFuZGxlciA9IHRoaXMuX2J1aWxkZXJTZXJ2aWNlLmRlYm91bmNlKHRoaXMuaXNVbmlxdWUsIDgwMCk7XHJcbiAgICAgICAgdGhpcy5hdXRvU2F2ZXIgPSB0aGlzLmRlYm91bmNlKHRoaXMuc2F2ZVVuc2F2ZWREYXRhLCAxMDAwKTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hhc2gtbGluaycsIHRoaXMuaGFzaCk7XHJcbiAgICAgICAgLyogb3BlbiB0YWJzIGFjYyB0byBoYXMgaW4gaHJlZiAqL1xyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7IC8vUHV0cyBoYXNoIGluIHZhcmlhYmxlLCBhbmQgcmVtb3ZlcyB0aGUgIyBjaGFyYWN0ZXJcclxuXHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkuaW5BcnJheSh0aGlzLmhhc2gsIHRoaXMuQ29uZmlnQXJyYXkpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VjID0gJ2NvbmZpZyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoalF1ZXJ5LmluQXJyYXkodGhpcy5oYXNoLCB0aGlzLkxhbmRpbmdBcnJheSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZWMgPSAnYnVpbGQnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpRdWVyeS5pbkFycmF5KHRoaXMuaGFzaCwgdGhpcy5BbmFseXRpY3NBcnJheSkgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZWMgPSAnYW5hbHl0aWNzJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGFzaC1saW5rJywgdGhpcy5oYXNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5zZXRTZWxlY3RlZE1vZGVsKCdQYWdlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW50ZXJDb21EYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWNkJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hdlVybCgpIHtcclxuICAgICAgICBsZXQgdXJsYSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIGxldCB1cmwgPSAnaHR0cDovL291dGdyb3cuY28nO1xyXG4gICAgICAgIGlmICh1cmxhLmluZGV4T2YoJ291dGdyb3cuY28nKSA8IDApIHtcclxuICAgICAgICAgICAgdXJsID0gJ2h0dHA6Ly9vdXRncm93LnVzJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB3aW5kb3cuSW50ZXJjb20oJ3VwZGF0ZScsIHsgaGlkZV9kZWZhdWx0X2xhdW5jaGVyOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICBsZXQgcmVsb2FkOiBhbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVsb2FkJyk7XHJcbiAgICAgICAgaWYgKHJlbG9hZCA9PSAnMScpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlbG9hZCcsICcwJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBwYXJhbXNbJ25hbWUnXTtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwTmFtZSA9IG5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2NyaXB0LmxvYWQoJ3d5c2l3eWcnLCAnZmlsZXBpY2tlcicsICdtYXRoJywgJ2ZhbmN5Ym94JywgJ2pxdWVyeVVJJywgJ2Zvcm11bGFKcycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NjcmlwdHMgTG9hZGVkJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVCdWlsZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYW55IGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmlzQW5hbHl0aWNzQXZhaWxhYmxlID0gdGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmZlYXR1cmVzLmFuYWx5dGljcztcclxuICAgICAgICAgICAgLy9TZXQgY3VycmVudCBjb21wYW55IG5hbWVcclxuICAgICAgICAgICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wYW55TmFtZSA9IHN0b3JhZ2UuY29tcGFueS5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgLy8gbGV0IHNlbGYgPSB0aGlzc1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2VvdmVyID0gKCkgPT4gd2luZG93LmlubmVyRG9jQ2xpY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbGVhdmUgPSAoKSA9PiB3aW5kb3cuaW5uZXJEb2NDbGljayA9IGZhbHNlO1xyXG5cclxuICAgICAgICB3aW5kb3cub25oYXNoY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5pbm5lckRvY0NsaWNrKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBDb25maWcuUFJPVE9DT0wgKyB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvZGFzaGJvYXJkJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhdGVCdWlsZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFwcE5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRBcHAoeyB1cmw6IHRoaXMuYXBwTmFtZSB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL2NyZWF0ZSBuZXcgYXBwIG9uIGxvYWRcclxuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpO1xyXG4gICAgICAgICAgICBsZXQgdGVtcGxhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVtcF9uYW1lJyk7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wX3R5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVtcF90eXBlJyk7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0ID09PSAnTmV3Jykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGpzb24gPSB0aGlzLl9kZWZhdWx0SnNvbi5nZXRKU09OKHRlbXBsYXRlKTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wYW55X2lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbXBhbnknKTtcclxuICAgICAgICAgICAgICAgIGpzb24uc2V0Q29tcGFueShjb21wYW55X2lkKTtcclxuICAgICAgICAgICAgICAgIGpzb24uc2V0VGVtcGxhdGVOYW1lKHRlbXBsYXRlKTtcclxuICAgICAgICAgICAgICAgIGpzb24uc2V0VGVtcGxhdGVUeXBlKHRlbXBfdHlwZSk7XHJcbiAgICAgICAgICAgICAgICBqc29uLnNldE5hdmlnYXRlVXJsKHRoaXMuZ2V0TmF2VXJsKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVpbGRlclNlcnZpY2UuY3JlYXRlQXBwKGpzb24pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXBwOiBBcHAgPSBuZXcgQXBwKCkuZGVzZXJpYWxpemUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVNpbmNlID0gbW9tZW50KHJlc3BvbnNlLmNyZWF0ZWRBdCkuZnJvbU5vdygpLnJlcGxhY2UoJ2FnbycsICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0JywgYXBwLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0ZW1wX25hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RlbXBfdHlwZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FsY19uYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhbGNfbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsY19uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHAubmFtZSA9IGNhbGNfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2FsY05hbWUoYXBwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIC8qPT09PSBJbnRlcmNvbSA9PT09Ki9cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyQ29tRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJDb21EYXRhLmNhbGN1bGF0b3JzX2NyZWF0ZWQrKztcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWNkJywgSlNPTi5zdHJpbmdpZnkodGhpcy5pbnRlckNvbURhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuSW50ZXJjb20oJ3VwZGF0ZScsIHRoaXMuaW50ZXJDb21EYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qPT09PSovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFwcCh7IF9pZDogcHJvamVjdCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZENhbGNOYW1lKGFwcDogQXBwKSB7XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlclNlcnZpY2UudXBkYXRlTmFtZShhcHAuX2lkLCBhcHAubmFtZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGFwcC51cmwgPSByZXNwb25zZS51cmw7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCAnL2J1aWxkZXIvJyArIHJlc3BvbnNlLnVybCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2FsY19uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnNldFRlbXBsYXRlKGFwcCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVKcXVlcnlTdHVmZigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbGRDYWxjTmFtZSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZTtcclxuICAgICAgICAgICAgICAgIC8vRG9jdW1lbnQgVGl0bGVcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUgPT0gJycpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk91dGdyb3cgfCBcIiArIHRoaXMuY29tcGFueU5hbWUgKyBcIidzIENhbGN1bGF0b3JcIjtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiT3V0Z3JvdyB8IFwiICsgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldEFwcChkYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgcHJvamVjdElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3QnKTtcclxuICAgICAgICBsZXQgdGVtcGxhdGVOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RlbXBfbmFtZScpO1xyXG4gICAgICAgIGlmICh0ZW1wbGF0ZU5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUZW1wbGF0ZShwcm9qZWN0SWQsIHRlbXBsYXRlTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYnVpbGRlclNlcnZpY2UuZ2V0UHJvamVjdChkYXRhKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeS5pc0VtcHR5T2JqZWN0KHJlc3BvbnNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFwcDogQXBwID0gbmV3IEFwcCgpLmRlc2VyaWFsaXplKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9hcHAuc2V0VGVtcGxhdGVOYW1lKCdob21lX2xvYW5fY2FsY3VsYXRvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnNldFRlbXBsYXRlKGFwcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUpxdWVyeVN0dWZmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2xkQ2FsY05hbWUgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2luY2UgPSBtb21lbnQocmVzcG9uc2UudXBkYXRlZEF0KS5mcm9tTm93KCkucmVwbGFjZSgnYWdvJywgJycpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Eb2N1bWVudCBUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lID09ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk91dGdyb3cgfCBcIiArIHRoaXMuY29tcGFueU5hbWUgKyBcIidzIENhbGN1bGF0b3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk91dGdyb3cgfCBcIiArIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VUZW1wbGF0ZShwcm9qZWN0SWQ6IGFueSwgdGVtcGxhdGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS5jaGFuZ2VUZW1wbGF0ZShwcm9qZWN0SWQsIHRlbXBsYXRlTmFtZSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeS5pc0VtcHR5T2JqZWN0KHJlc3BvbnNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQnXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGVtcF9uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZUpxdWVyeVN0dWZmKCkge1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNKc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpKSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnN0YXJ0QXV0b1NhdmUgPSB0cnVlLCAyMDAwKTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjb3JyZWN0ZWRWaWV3cG9ydFcgPSAoZnVuY3Rpb24gKHdpbjogYW55LCBkb2NFbGVtOiBhbnkpIHtcclxuICAgICAgICAgICAgdmFyIG1NID0gd2luWydtYXRjaE1lZGlhJ10gfHwgd2luWydtc01hdGNoTWVkaWEnXVxyXG4gICAgICAgICAgICAgICAgLCBjbGllbnQgPSBkb2NFbGVtWydjbGllbnRXaWR0aCddXHJcbiAgICAgICAgICAgICAgICAsIGlubmVyID0gd2luWydpbm5lcldpZHRoJ11cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtTSAmJiBjbGllbnQgPCBpbm5lciAmJiB0cnVlID09PSBtTSgnKG1pbi13aWR0aDonICsgaW5uZXIgKyAncHgpJylbJ21hdGNoZXMnXVxyXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5bJ2lubmVyV2lkdGgnXTsgfVxyXG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2NFbGVtWydjbGllbnRXaWR0aCddOyB9XHJcbiAgICAgICAgfSAod2luZG93LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpKTtcclxuXHJcblxyXG4gICAgICAgIC8vIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpID4gOTkyKSB7IHZhciBtaW5XaW5XaWR0aCA9IGNvcnJlY3RlZFZpZXdwb3J0VygpIC0gNTQ0OyB9XHJcbiAgICAgICAgLy8gZWxzZSB7IHZhciBtaW5XaW5XaWR0aCA9IGNvcnJlY3RlZFZpZXdwb3J0VygpIC0gMzI3OyB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLyogT24gY2xpY2sgUHJvcGVydHkgQXJyb3cgdGhlIGRpdiBoaWRlIHNpZGViYXIgY29udGFpbmVyICovXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vbignY2xpY2snLCAnLnByb3AtYXJyb3cnLCBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBqUXVlcnkoJyNzaWRlYmFyJyk7XHJcbiAgICAgICAgICAgIHZhciB6b29tRmFjdG9yID0gMDtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiAxODUwKSB7IHpvb21GYWN0b3IgPSAwLjk3OyB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPCA5OTIpIHsgdmFyIHpvb21GYWN0b3IgPSAxOyB9XHJcbiAgICAgICAgICAgIGVsc2UgeyB6b29tRmFjdG9yID0gMC45MzsgfVxyXG4gICAgICAgICAgICBjb250YWluZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICByaWdodDogXCItMjg1cHhcIixcclxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcidcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjc2lkZWJhcicpLmFkZENsYXNzKCdwcm9wZXJ0aWVzLWNsb3NlJyk7XHJcbiAgICAgICAgICAgIC8qIGZvciBjYW52YXMgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiA5OTIpIHsgdmFyIG1pbldpbldpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKSAtIDI2NDsgfVxyXG4gICAgICAgICAgICBlbHNlIHsgdmFyIG1pbldpbldpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKSAtIDIwOyB9XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGggfSwgMzAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KFwidGVtcFwiKS5hbmltYXRlKHsgd2lkdGg6IG1pbldpbldpZHRoIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShcInRlbXBcIikuY3NzKCd0cmFuc2Zvcm0nLCAnc2NhbGUoJyArIHpvb21GYWN0b3IgKyAnKScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwidGVtcFwiKS5hbmltYXRlKHsgJ3pvb20nOiB6b29tRmFjdG9yIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuY3NzKCdvdmVyZmxvdy14JywgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5idWlsZGluZ1wiKS5hbmltYXRlKHsgd2lkdGg6IG1pbldpbldpZHRoIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIC8qZW5kKi9cclxuICAgICAgICB9KTtcclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucHJvcGVydGllcy1jbG9zZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGpRdWVyeSgnI3NpZGViYXInKTtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiAxODUwKSB7IHZhciB6b29tRmFjdG9yID0gMC44OyB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPCA5OTIpIHtcclxuICAgICAgICAgICAgICAgIHZhciB6b29tRmFjdG9yID0gMTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLm1vYmlsZS1wcm9wLWNyb3NzLWljb24nKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5wcm9wZXJ0aWVzLW1vZGFsLWJhY2tkcm9wJykuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyB2YXIgem9vbUZhY3RvciA9IDAuNzsgfVxyXG4gICAgICAgICAgICBjb250YWluZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICByaWdodDogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcidcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnJlbW92ZUNsYXNzKCdwcm9wZXJ0aWVzLWNsb3NlJyk7XHJcbiAgICAgICAgICAgIC8qIGZvciBjYW52YXMgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxuICAgICAgICAgICAgc2VsZi5jYW52YXNTY3JvbGwoKTtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiA5OTIpIHsgdmFyIG1pbldpbldpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKSAtIDU1MDsgfVxyXG4gICAgICAgICAgICBlbHNlIHsgdmFyIG1pbldpbldpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKSAtIDIwOyB9XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGggfSwgMzAwKTtcclxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwidGVtcFwiKS5jc3MoJ3RyYW5zZm9ybScsICdzY2FsZSgnICsgem9vbUZhY3RvciArICcpJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCJ0ZW1wXCIpLmNzcygnem9vbScsIHpvb21GYWN0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5idWlsZGluZ1wiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBtaW5XaW5XaWR0aFxyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICAvKmVuZCovXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgalF1ZXJ5KHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmNhbnZhc1Njcm9sbCgpO1xyXG4gICAgICAgICAgICAvL2J1aWxkSGVpZ2h0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub24oJ2NsaWNrJywgJyNwcmV2aWV3X2NhbGMnLCAoKSA9PiB0aGlzLm9uUHJldmlldygpKTtcclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucHJldmlld19jb3B5JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGlwYm9hcmQuY29weShzZWxmLnNyY1VybCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignTGluayBDb3BpZWQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGVtcGxhdGVUeXBlID09ICdSZWNvbW1lbmRhdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMucmVjb21tZW5kYXRpb25TZXJ2aWNlLmdldFJlY29tZW5kZWRSZXN1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhYi1zZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZWMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFiLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0YWItc2VsZWN0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVuUHJvcGVydGllcygpIHtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0galF1ZXJ5KCcjc2lkZWJhcicpO1xyXG4gICAgICAgIHZhciB6b29tRmFjdG9yID0gMDtcclxuICAgICAgICBpZiAoalF1ZXJ5KGNvbnRhaW5lcikuaGFzQ2xhc3MoJ3Byb3BlcnRpZXMtY2xvc2UnKSkge1xyXG4gICAgICAgICAgICBjb250YWluZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICByaWdodDogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcidcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiAxODUwKSB7IHZhciB6b29tRmFjdG9yID0gMC44OyB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPCA5OTIpIHsgdmFyIHpvb21GYWN0b3IgPSAxOyB9XHJcbiAgICAgICAgICAgIGVsc2UgeyB2YXIgem9vbUZhY3RvciA9IDAuNzsgfVxyXG4gICAgICAgICAgICBqUXVlcnkoY29udGFpbmVyKS5yZW1vdmVDbGFzcygncHJvcGVydGllcy1jbG9zZScpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1Njcm9sbCgpO1xyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDk5MikgeyB2YXIgbWluV2luV2lkdGggPSBqUXVlcnkod2luZG93KS53aWR0aCgpIC0gNTUwOyB9XHJcbiAgICAgICAgICAgIGVsc2UgeyB2YXIgbWluV2luV2lkdGggPSBqUXVlcnkod2luZG93KS53aWR0aCgpIC0gMjA7IH1cclxuICAgICAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuYW5pbWF0ZSh7IHdpZHRoOiBtaW5XaW5XaWR0aCB9LCAzMDApO1xyXG4gICAgICAgICAgICAvL2pRdWVyeShcInRlbXBcIikuYW5pbWF0ZSh7IHdpZHRoOiBtaW5XaW5XaWR0aH0sIDIwMCk7XHJcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShcInRlbXBcIikuY3NzKCd0cmFuc2Zvcm0nLCAnc2NhbGUoJyArIHpvb21GYWN0b3IgKyAnKScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwidGVtcFwiKS5jc3MoJ3pvb20nLCB6b29tRmFjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBqUXVlcnkoXCIuYnVpbGRpbmdcIikuYW5pbWF0ZSh7IHdpZHRoOiBtaW5XaW5XaWR0aCB9LCAzMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGpRdWVyeSgnI3NpZGViYXInKTtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiAxODUwKSB7IHpvb21GYWN0b3IgPSAwLjk3OyB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPCA5OTIpIHsgdmFyIHpvb21GYWN0b3IgPSAxOyB9XHJcbiAgICAgICAgICAgIGVsc2UgeyB6b29tRmFjdG9yID0gMC45MzsgfVxyXG4gICAgICAgICAgICBjb250YWluZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICByaWdodDogXCItMjg1cHhcIixcclxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcidcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjc2lkZWJhcicpLmFkZENsYXNzKCdwcm9wZXJ0aWVzLWNsb3NlJyk7XHJcbiAgICAgICAgICAgIC8qIGZvciBjYW52YXMgaG9yaXpvbnRhbCBzY3JvbGwgKi9cclxuICAgICAgICAgICAgaWYgKGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgPiA5OTIpIHsgdmFyIG1pbldpbldpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKSAtIDI2NDsgfVxyXG4gICAgICAgICAgICBlbHNlIHsgdmFyIG1pbldpbldpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKSAtIDIwOyB9XHJcbiAgICAgICAgICAgIC8valF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuY3NzKCd3aWR0aCcsIG1pbldpbldpZHRoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuYW5pbWF0ZSh7IHdpZHRoOiBtaW5XaW5XaWR0aCB9LCAzMDApO1xyXG4gICAgICAgICAgICAvL2pRdWVyeShcInRlbXBcIikuYW5pbWF0ZSh7IHdpZHRoOiBtaW5XaW5XaWR0aCAtIDM1MH0sIDMwMCk7XHJcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShcInRlbXBcIikuY3NzKCd0cmFuc2Zvcm0nLCAnc2NhbGUoJyArIHpvb21GYWN0b3IgKyAnKScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwidGVtcFwiKS5jc3MoJ3pvb20nLCB6b29tRmFjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBqUXVlcnkoXCIudGVtcGxhdGUtc2VjdGlvblwiKS5jc3MoJ292ZXJmbG93LXgnLCBcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmJ1aWxkaW5nXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGggfSwgMzAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvcGVuTW9iaWxlUHJvcGVydGllcygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyXCIpO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBqUXVlcnkoJyNzaWRlYmFyJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICByaWdodDogXCIwcHhcIixcclxuICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJ1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgLyogZm9yIGNhbnZhcyBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG4gICAgICAgIHZhciBtaW5XaW5XaWR0aCA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgLSAyMDtcclxuICAgICAgICBqUXVlcnkoXCIudGVtcGxhdGUtc2VjdGlvblwiKS5hbmltYXRlKHsgd2lkdGg6IG1pbldpbldpZHRoIH0sIDMwMCk7XHJcbiAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuY3NzKCdvdmVyZmxvdy14JywgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgalF1ZXJ5KFwiLmJ1aWxkaW5nXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGggfSwgMzAwKTtcclxuICAgICAgICBqUXVlcnkoJy5tb2JpbGUtcHJvcC1jcm9zcy1pY29uJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucHJvcGVydGllcy1tb2RhbC1iYWNrZHJvcCcpLmNzcygnZGlzcGxheScsICdibG9jaycpLmFkZENsYXNzKCdmYWRlIGluJyk7XHJcbiAgICB9XHJcbiAgICB6b29tKGFjdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIG1heFpvb20gPSAyO1xyXG4gICAgICAgIHZhciBtaW5ab29tID0gMC4yO1xyXG4gICAgICAgIHZhciB6b29tZGl2ID0gXCJ0ZW1wXCI7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvblNwZWVkID0gXCIxMDAwXCI7XHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2luJykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRab29tID0gTnVtYmVyKGpRdWVyeSgndGVtcCcpLmNzcyhcInpvb21cIikpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Wm9vbSA8IG1heFpvb20pIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh6b29tZGl2KS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAnem9vbSc6IHRoaXMuY3VycmVudFpvb20gKz0gdGhpcy56b29tZmFjdG9yXHJcbiAgICAgICAgICAgICAgICB9LCBhbmltYXRpb25TcGVlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8galF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikubUN1c3RvbVNjcm9sbGJhcihcImRlc3Ryb3lcIik7XHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgd2luSGVpZ2h0ID0galF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgLSA3MjtcclxuICAgICAgICAgICAgICAgIC8vIGpRdWVyeSgnLnRlbXBsYXRlLXNlY3Rpb24nKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBheGlzOiAneHknLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoZW1lOiAnZGFyay0zJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICBhZHZhbmNlZDogeyBhdXRvRXhwYW5kSG9yaXpvbnRhbFNjcm9sbDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ291dCcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Wm9vbSA9IGpRdWVyeSgndGVtcCcpLmNzcyhcInpvb21cIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRab29tID4gbWluWm9vbSkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHpvb21kaXYpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICd6b29tJzogdGhpcy5jdXJyZW50Wm9vbSAtPSB0aGlzLnpvb21mYWN0b3JcclxuICAgICAgICAgICAgICAgIH0sIGFuaW1hdGlvblNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWN0aW9uID09PSAncmVzZXQnKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDE4NTApIHtcclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoJyNzaWRlYmFyJykuaGFzQ2xhc3MoJ3Byb3BlcnRpZXMtY2xvc2UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB6b29tVmFsdWUgPSAwLjk3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHpvb21WYWx1ZSA9IDAuODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoJyNzaWRlYmFyJykuaGFzQ2xhc3MoJ3Byb3BlcnRpZXMtY2xvc2UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB6b29tVmFsdWUgPSAwLjkzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHpvb21WYWx1ZSA9IDAuNztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBqUXVlcnkoem9vbWRpdikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAnem9vbSc6IHpvb21WYWx1ZVxyXG4gICAgICAgICAgICB9LCBhbmltYXRpb25TcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhZygpIHtcclxuXHJcbiAgICAgICAgLy8gbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8vIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLnRvZ2dsZUNsYXNzKCdtb3ZlLWNhbnZhcycpO1xyXG4gICAgICAgIC8vIC8valF1ZXJ5KFwiLm1DU0JfY29udGFpbmVyXCIpLmtpbmV0aWMoKTtcclxuICAgICAgICAvLyBqUXVlcnkoZG9jdW1lbnQpLm9uKCdtb3VzZW1vdmUnLCAnLm1DU0JfY29udGFpbmVyJywgZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICAgIC8vICAgICBpZiAoc2VsZi5jdXJEb3duID09PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgdG9wQ2FudmFzID0galF1ZXJ5KCcubUNTQl9jb250YWluZXInKS5wb3NpdGlvbigpLnRvcDtcclxuICAgICAgICAvLyAgICAgICAgIHZhciBsZWZ0Q2FudmFzID0galF1ZXJ5KCcubUNTQl9jb250YWluZXInKS5wb3NpdGlvbigpLmxlZnQ7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgYXhpc0xlZnQgPSAoZS5wYWdlWCAtIHNlbGYuY3VyWFBvcyk7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgYXhpc1RvcCA9IChlLnBhZ2VZIC0gc2VsZi5jdXJZUG9zKTtcclxuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8galF1ZXJ5KGRvY3VtZW50KS5vbignbW91c2Vkb3duJywgJy5tQ1NCX2NvbnRhaW5lcicsIGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgICAgICAvLyAgICAgc2VsZi5jdXJEb3duID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgc2VsZi5jdXJZUG9zID0gZS5wYWdlWTtcclxuICAgICAgICAvLyAgICAgc2VsZi5jdXJYUG9zID0gZS5wYWdlWDtcclxuICAgICAgICAvLyAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uIChlOiBhbnkpIHsgY29uc29sZS5sb2coJ21vdXNldXAnKTsgc2VsZi5jdXJEb3duID0gZmFsc2U7IH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoXCJ0ZW1wXCIpLmRyYWdnYWJsZSgpO1xyXG5cclxuICAgIH1cclxuICAgIGNhbnZhc1Njcm9sbCgpIHtcclxuICAgICAgICAvKiBmb3IgY2FudmFzIGhvcml6b250YWwgc2Nyb2xsICovXHJcbiAgICAgICAgdmFyIHdpbldpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKSAtIDMxNTtcclxuICAgICAgICB2YXIgd2luSGVpZ2h0ID0galF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgLSA2MDtcclxuICAgICAgICAvL2pRdWVyeShcInRlbXBcIikuY3NzKCd3aWR0aCcsIHdpbldpZHRoKTtcclxuICAgICAgICBqUXVlcnkoXCIudGVtcGxhdGUtc2VjdGlvblwiKS5jc3MoJ3Bvc2l0aW9uJywgXCJmaXhlZFwiKTtcclxuICAgICAgICBqUXVlcnkoXCIudGVtcGxhdGUtc2VjdGlvblwiKS5jc3MoJ2hlaWdodCcsIHdpbkhlaWdodCk7XHJcbiAgICAgICAgLyplbmQqL1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHJldmlldygpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVtcGxhdGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpKSk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9wcmV2aWV3JywgJ19ibGFuaycpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHVibGlzaCgkZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgZXJyb3JSZXN1bHRzID0gdGhpcy5mb3JtdWxhU2VydmljZS5jaGVja0lmRm9ybXVsYVdvdWxkR2l2ZVN5bnRheEVycm9yKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYm9vdGJveC5kaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgY2xvc2VCdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib290Ym94LWJvZHktbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vdGJveC1ib2R5LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlIGNhbGN1bGF0b3IgY2FuJ3QgZ28gbGl2ZSB3aXRob3V0IGEgbmFtZSE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhpbmsgb2Ygc29tZXRoaW5nIGludGVyZXN0aW5nIHRoYXQgd291bGQgYXR0cmFjdCBhdHRlbnRpb24hPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLW9rIGJ0bi1ob3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjbXlvbm9mZnN3aXRjaCcpLmF0dHIoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXJyb3JSZXN1bHRzICE9ICcnICYmIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGVtcGxhdGVUeXBlID09ICdOdW1lcmljYWwnKSB7XHJcbiAgICAgICAgICAgIGJvb3Rib3guY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICBzaXplOiAnc21hbGwnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZXJlIGFyZSBtaXN0YWtlcyBpbiAnICsgZXJyb3JSZXN1bHRzICsgJyBkdWUgdG8gY2hhbmdlIGluIHF1ZXN0aW9ucyBvcmRlcmluZy48YnI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHByb2NlZWQ/JyxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocmVzdWx0OiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuUHVibGlzaCgkZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZvcm11bGFTZXJ2aWNlLmdldEFsbEludmFsaWRGb3JtdWxhcygpICE9IHVuZGVmaW5lZCAmJiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRlbXBsYXRlVHlwZSA9PSAnTnVtZXJpY2FsJykge1xyXG4gICAgICAgICAgICBib290Ym94LmNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vdGJveC1ib2R5LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGRlZmF1bHQgdmFsdWVzIG9mIHNvbWUgb2YgdGhlIHF1ZXN0aW9ucyB1c2VkIGluIHRoZSBmb3JtdWxhIG9mIGArIHRoaXMuZm9ybXVsYVNlcnZpY2UuZ2V0QWxsSW52YWxpZEZvcm11bGFzKCkgKyBgIGFyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90IGFwcGxpZWQuIEluIHRoaXMgY2FzZSB0aGUgcmVzdWx0IHdpbGwgbm90IGJlIGFwcHJvcHJpYXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHByb2NlZWQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NhbmNlbCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdObycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tY2FuY2VsIGJ0bi1ob3ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdjb25maXJtJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1llcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J0biBidG4tb2sgYnRuLWhvdmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHJlc3VsdDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LlB1Ymxpc2goJGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Lmpzb25CdWlsZGVySGVscGVyLnNldFNlbGVjdGVkTW9kZWwoJ1BhZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5qc29uQnVpbGRlckhlbHBlci5zZXRTZWxlY3RlZFBhZ2UodGhhdC5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5wYWdlc1syXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IGpRdWVyeSgnLnBhZ2VfMicpLnBvc2l0aW9uKCkudG9wICsgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnLnRlbXBsYXRlLXNlY3Rpb24gLm1DU0JfY29udGFpbmVyJykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLlB1Ymxpc2goJGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUHVibGlzaCgkZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHZhciBidXR0b24gPSBqUXVlcnkoJGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgYnV0dG9uLmh0bWwoJ1BVQkxJU0hJTkcnKTtcclxuICAgICAgICBidXR0b24uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICBidXR0b24uYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS5wdWJsaXNoQXBwKHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLFxyXG4gICAgICAgICAgICB1cmw6IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsLFxyXG4gICAgICAgICAgICB1bnNhdmVkOiB0aGlzLl9pdGVtVHJhY2tTZXJ2aWNlLmdldFVuU2F2ZWREYXRhKClcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkuaXNFbXB0eU9iamVjdChyZXNwb25zZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5tb2RlID09PSAnUFJJVkFURScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk1vZGVDaGFuZ2UodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5tb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcmNVcmwgPSBDb25maWcuUFJPVE9DT0wgKyB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvJyArIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib290Ym94LmRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBsaXZlLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXBsYXktbmV4dFwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5xdWV1ZV9wbGF5X25leHQ8L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLWhlYWRcIj5Zb3VyIENhbGN1bGF0b3IgaXMgTGl2ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctc3R5bGUgaGlkZVwiIHNyYz1cImFzc2V0cy9pbWFnZXMvZ29MaXZlUG9wdXAucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpdmUtc3ViaGVhZCBsaW5rLXN0eWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbyBwcmV2aWV3LCBvcGVuIHRoaXMgbGluayBpbiBhbm90aGVyIGJyb3dzZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxpdmUtdXJsIHByZXZpZXdfY29weVwiPkNvcHkgTGluazwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLXN1YmhlYWQgc2VsZWN0ZWQtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRlXCI+WW91ciBwdWJsaWMgY2FsY3VsYXRvciBjYW4gYmUgdmlld2VkIGhlcmU6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpdmUtdXJsIHVybC1zdHlsZVwiPmAgKyB0aGlzLnNyY1VybCArIGA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvZ29jb3B5UG9wdXAucG5nXCIvPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlIGhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLXN1YmhlYWQgbGluay1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUbyBwcmV2aWV3LCBvcGVuIHRoaXMgbGluayBpbiBhbm90aGVyIGJyb3dzZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGl2ZS11cmwgcHJldmlld19jb3B5XCI+Q29weSBMaW5rPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGl2ZS1zdWJoZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRlXCI+WW91ciBwdWJsaWMgY2FsY3VsYXRvciBjYW4gYmUgdmlld2VkIGhlcmU6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXZlLXVybCB1cmwtc3R5bGVcIj5gICsgdGhpcy5zcmNVcmwgKyBgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyo9PT09IEludGVyY29tID09PT0qL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlckNvbURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJDb21EYXRhLmNhbGN1bGF0b3JzX3B1Ymxpc2hlZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ljZCcsIEpTT04uc3RyaW5naWZ5KHRoaXMuaW50ZXJDb21EYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuSW50ZXJjb20oJ3VwZGF0ZScsIHRoaXMuaW50ZXJDb21EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKj09PT09Ki9cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ0NoYW5nZXMgUHVibGlzaGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNKc29uLmxpdmVBcHAgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmxpdmVBcHAgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzSnNvbi5jaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5jaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmh0bWwoJ0xJVkUnKTtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5odG1sKCdHTyBMSVZFJyk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGJvb3Rib3guYWxlcnQoJ1NvbWV0aGluZyBXZW50IFdyb25nIScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmlldyBlbGVtZW50IENoYW5nZXNcclxuICAgIG1vYmlsZU1lbnVDbGlja2VkKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLmVkaXRvci1zaWRlYmFyJykuZmFkZVRvZ2dsZSg0MDApO1xyXG4gICAgICAgIGpRdWVyeSgnLnNpZGViYXItbW9kYWwtYmFja2Ryb3AnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKS5hZGRDbGFzcygnZmFkZSBpbicpO1xyXG4gICAgfVxyXG4gICAgbW9iaWxlTWVudUNyb3NzQ2xpY2tlZCgpIHtcclxuICAgICAgICBqUXVlcnkoJy5lZGl0b3Itc2lkZWJhcicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc2lkZWJhci1tb2RhbC1iYWNrZHJvcCcpLmNzcygnZGlzcGxheScsICdub25lJykuYWRkQ2xhc3MoJ2ZhZGUgb3V0Jyk7XHJcbiAgICB9XHJcbiAgICBtb2JpbGVQcm9wQ3Jvc3NDbGlja2VkKCkge1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBqUXVlcnkoJyNzaWRlYmFyJyk7XHJcbiAgICAgICAgY29udGFpbmVyLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICByaWdodDogXCItMjg1cHhcIixcclxuICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJ1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgalF1ZXJ5KCcjc2lkZWJhcicpLmFkZENsYXNzKCdwcm9wZXJ0aWVzLWNsb3NlJyk7XHJcbiAgICAgICAgLyogZm9yIGNhbnZhcyBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG4gICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpID4gOTkyKSB7IHZhciBtaW5XaW5XaWR0aCA9IGpRdWVyeSh3aW5kb3cpLndpZHRoKCkgLSAyODk7IH1cclxuICAgICAgICBlbHNlIHsgdmFyIG1pbldpbldpZHRoID0galF1ZXJ5KHdpbmRvdykud2lkdGgoKSAtIDIwOyB9XHJcbiAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuYW5pbWF0ZSh7IHdpZHRoOiBtaW5XaW5XaWR0aCB9LCAzMDApO1xyXG4gICAgICAgIGpRdWVyeShcInRlbXBcIikuYW5pbWF0ZSh7IHdpZHRoOiBtaW5XaW5XaWR0aCB9LCAzMDApO1xyXG4gICAgICAgIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLmNzcygnb3ZlcmZsb3cteCcsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGpRdWVyeShcIi5idWlsZGluZ1wiKS5hbmltYXRlKHsgd2lkdGg6IG1pbldpbldpZHRoIH0sIDMwMCk7XHJcbiAgICAgICAgalF1ZXJ5KCcubW9iaWxlLXByb3AtY3Jvc3MtaWNvbicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgalF1ZXJ5KCcucHJvcGVydGllcy1tb2RhbC1iYWNrZHJvcCcpLmNzcygnZGlzcGxheScsICdub25lJykuYWRkQ2xhc3MoJ2ZhZGUgb3V0Jyk7XHJcbiAgICAgICAgLyplbmQqL1xyXG4gICAgfVxyXG4gICAgYXBwTmFtZWJsdXJlZCgpIHtcclxuICAgICAgICBqUXVlcnkoJyNmbmFtZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUtdGV4dCcpO1xyXG4gICAgfVxyXG4gICAgYXBwTmFtZUZvY3VzZWQoKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcjZm5hbWUnKS5hZGRDbGFzcygnYWN0aXZlLXRleHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbGNOYW1lQ2hhbmdlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5pcXVlVXJsSGFuZGxlcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbihcIkNhbGN1bGF0b3IgbmFtZSBjYW4ndCBiZSBlbXB0eVwiKTtcclxuICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lID0gdGhpcy5vbGRDYWxjTmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNVbmlxdWUodW5pcXVlU3RyaW5nOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5vbGRDYWxjTmFtZSAhPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIHRoYXQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciB1cmw6IFN0cmluZyA9IHRoYXQuX2J1aWxkZXJTZXJ2aWNlLnNhbml0aXplVXJsKHRoYXQuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZSk7XHJcbiAgICAgICAgICAgIHVybCA9IENvbmZpZy5QUk9UT0NPTCArIHRoYXQuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbiArICcuJyArIENvbmZpZy5BUFBfRVhURU5TSU9OICsgJy8nICsgdXJsO1xyXG4gICAgICAgICAgICB0aGF0LnVwZGF0ZU5hbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVOYW1lKCkge1xyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLnVwZGF0ZU5hbWUodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5faWQsIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybCA9IHJlc3BvbnNlLnVybDtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCAnL2J1aWxkZXIvJyArIHJlc3BvbnNlLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IENvbmZpZy5QUk9UT0NPTCArIHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbiArICcuJyArIENvbmZpZy5BUFBfRVhURU5TSU9OICsgJy8nICsgcmVzcG9uc2UudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignQ2FsY3VsYXRvciBuYW1lIGFkZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvb3Rib3guZGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb3Rib3gtY29uZmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb3Rib3gtYm9keS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXQtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vdGJveC1ib2R5LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiXCI+V2UgaGF2ZSBzZXQgeW91ciBjYWxjdWxhdG9yXFwncyB1cmwgdG8gXCJgICsgdXJsICsgYFwiICwgWW91IGNhbiBhbHdheXMgY2hhbmdlIGl0IGluIGNvbmZpZ3VyZSBzZWN0aW9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT0tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1vayBidG4taG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ0NhbGN1bGF0b3IgbmFtZSBjaGFuZ2VkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbGRDYWxjTmFtZSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVBcHBzZXR0aW5nKCkge1xyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLnNhdmVBcHBTZXR0aW5nKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybCA9IHJlc3BvbnNlLnVybDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxHQShvcHQ6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAob3B0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJHT0xJVkVcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnUHVibGlzaCcpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ1B1Ymxpc2ggR28gTGl2ZSBDbGljayddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTE9HT1wiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDbGljaycsICdPR0xvZ28nKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCYWNrIFRvIERhc2hib2FyZCBPR0xvZ28gQ2xpY2snXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlBSRVZJRVdcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnUHJldmlldycpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ1ByZXZpZXcgQ2xpY2snXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb2RlQ2hhbmdlKG1vZGU6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChtb2RlID09PSAnUFVCTElDJykge1xyXG4gICAgICAgICAgICBtb2RlID0gJ1BSSVZBVEUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1vZGUgPSAnUFVCTElDJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGFzaGJvYXJkU2VydmljZS5jaGFuZ2VBcHBNb2RlKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLCBtb2RlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5tb2RlID0gbW9kZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGFydEF1dG9TYXZlXHJcbiAgICAgICAgICAgICYmIEpTT04uc3RyaW5naWZ5KHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkpICE9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJldmlvdXNKc29uKSkge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzSnNvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKSkpO1xyXG4gICAgICAgICAgICBsZXQgdW5TYXZlZEVsZW1lbnRzID0gdGhpcy5faXRlbVRyYWNrU2VydmljZS5nZXRVblNhdmVkRGF0YSgpO1xyXG4gICAgICAgICAgICBpZiAodW5TYXZlZEVsZW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvU2F2ZXIodW5TYXZlZEVsZW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuc3RhcnRBdXRvU2F2ZSAmJiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpKVxyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzSnNvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYm91bmNlKGZ1bmM6IGFueSwgd2FpdDogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIHRpbWVvdXQ6IGFueTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0FuYWx5dGljcygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8gdGhpcyBpc3NzIHNvbWV0aGluZyBoZXJlJyk7XHJcbiAgICAgICAgdGhpcy5pc0FuYWx5dGljc0F2YWlsYWJsZSA9IHRoaXMuX2ZlYXR1cmVBdXRoU2VydmljZS5mZWF0dXJlcy5hbmFseXRpY3M7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQW5hbHl0aWNzQXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI3ByZW1pdW1Nb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vblNlbGVjdCgnYW5hbHl0aWNzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRBbmFseXRpY0NvbXBvbmVudCA9ICdvdmVydmlldyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVVbnNhdmVkRGF0YSh1blNhdmVkRWxlbWVudHM6IGFueSkge1xyXG4gICAgICAgIGxldCBhcHAgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkpKTtcclxuICAgICAgICBkZWxldGUgYXBwLnBhZ2VzO1xyXG4gICAgICAgIHVuU2F2ZWRFbGVtZW50cy5hcHAgPSBhcHA7XHJcblxyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUluaXQoKTtcclxuICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS51cGRhdGVDaGFuZ2VzKHVuU2F2ZWRFbGVtZW50cylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmRlYm91bmNlKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUxvYWQoKSwgMTgwMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVNpbmNlID0gbW9tZW50KERhdGUubm93KCkpLmZyb21Ob3coKS5yZXBsYWNlKCdhZ28nLCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3QoY29tcDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XHJcbiAgICAgICAgaWYgKGNvbXAgPT0gJ2NvbmZpZycpXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgdGhpcy5zZWxlY3RlZENvbmZpZ0NvbXBvbmVudDtcclxuICAgICAgICBpZiAoY29tcCA9PSAnYnVpbGQnKVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRQYWdlKCkudHlwZTtcclxuICAgICAgICBpZiAoY29tcCA9PSAnYW5hbHl0aWNzJylcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnI292ZXJ2aWV3JztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU2VjID0gY29tcDtcclxuICAgIH1cclxuXHJcbiAgICBPbkNvbmZpZ0NvbXBvZW50U2VsZWN0KGNvbXBvbmVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbmZpZ0NvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB3aW5kb3cuSW50ZXJjb20oJ3VwZGF0ZScsIHsgaGlkZV9kZWZhdWx0X2xhdW5jaGVyOiBmYWxzZSB9KTtcclxuICAgIH1cclxufSJdfQ==
