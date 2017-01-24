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
var control_component_1 = require('../../../templates/controls/control.component');
var JSONBuilder_service_1 = require('../../services/JSONBuilder.service');
var formula_service_1 = require('../../services/formula.service');
var index_1 = require('../../../templates/pipes/index');
var model_1 = require('../../models/model');
var builder_service_1 = require('../../services/builder.service');
var JSONUpdateItemTracker_service_1 = require('../../services/JSONUpdateItemTracker.service');
var env_config_1 = require('../../../../config/env.config');
var ComponentManagerComponent = (function () {
    function ComponentManagerComponent(jsonBuilderHelper, _builderService, formulaService, _ItemTrackService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._builderService = _builderService;
        this.formulaService = formulaService;
        this._ItemTrackService = _ItemTrackService;
        this.templateJson = jsonBuilderHelper.getJSONBuilt();
        for (var _i = 0, _a = this.templateJson.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            for (var section in page.sections) {
                if (page.sections[section].type === 'Result') {
                    this.resultSection = page.sections[section];
                }
                if (page.sections[section].type === 'LeadFormQ') {
                    this.leadSection = page.sections[section];
                }
            }
        }
    }
    ComponentManagerComponent.prototype.toastNotificationWithFormulaCheck = function (baseMessage) {
        var toastMessage = baseMessage;
        window.toastNotification(toastMessage);
    };
    ComponentManagerComponent.prototype.initialize = function () {
        var self = this;
        this.pnHeight = jQuery(".panel-scroll").height();
        jQuery('.sortable1').sortable({
            connectWith: 'ul',
            cursor: 'pointer',
            opacity: 0.5,
            revert: false,
            scroll: false,
            stop: function () {
                var order = jQuery(this).sortable('toArray', { attribute: 'data-order' });
                var sorder = jQuery(this).sortable('toArray', { attribute: 'data-odr' });
                if (order.length == self.jsonBuilderHelper.getSelectedSection().items.length) {
                    self.jsonBuilderHelper.sort(sorder);
                    self.jsonBuilderHelper.animInit();
                    self._builderService.updateIntraSectionOrder(order, jQuery(this).attr('data-section'))
                        .subscribe(function (response) {
                        self.toastNotificationWithFormulaCheck('Re-ordered successfully.');
                        self.jsonBuilderHelper.debounce(self.jsonBuilderHelper.animLoad(), 1800);
                    }, function (error) {
                        console.log(error);
                    });
                }
            },
            out: function () {
            },
            receive: function (event, ui) {
                var order = jQuery(this).sortable('toArray', { attribute: 'data-order' });
                var sorder = jQuery(this).sortable('toArray', { attribute: 'data-odr' });
                self.jsonBuilderHelper.multiSectionSort(jQuery(this).attr('data-sec'), ui.item.index(), sorder);
                self.jsonBuilderHelper.animInit();
                self._builderService.updateInterSectionOrder(order, jQuery(this).attr('data-section'))
                    .subscribe(function (response) {
                    self.toastNotificationWithFormulaCheck('Re-ordered successfully.');
                    if (!self.jsonBuilderHelper.getSelectedSection().items.length) {
                        var message = self.jsonBuilderHelper.getSelectedSection().title + ' section was removed successfully.';
                        self.DeleteSection(message);
                    }
                    self.jsonBuilderHelper.debounce(self.jsonBuilderHelper.animLoad(), 1800);
                }, function (error) {
                    console.log(error);
                });
            },
        }).disableSelection();
        jQuery(document).mouseup(function (e) {
            if (!jQuery('.add-parent').is(e.target)
                && jQuery('.add-dropdown-menu').has(e.target).length === 0) {
                jQuery('.add-parent').removeClass('active');
            }
        });
    };
    ComponentManagerComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        self.initialize();
        this.templateScroll();
        jQuery(window).on("resize", function () {
            self.templateScroll();
        });
        var panelHeight = jQuery(".panel-scroll").height();
        windowScroll();
        jQuery(window).on("resize", function () {
            windowScroll();
        });
        function windowScroll() {
            var panelMaxHeight = jQuery(window).height() - 60;
            var pHeight = panelMaxHeight;
            jQuery('.panel-scroll').css('overflow-y', 'scroll');
            jQuery('.panel-scroll').css('height', pHeight);
        }
        this.nameEdit();
    };
    ComponentManagerComponent.prototype.nameEdit = function () {
        jQuery(".edit_name_link_sitemap").on("click", function () {
            if ((jQuery(this).parent().parent().parent().find('.edit-name-sitemap').hasClass('hide'))) {
                jQuery(this).parent().parent().parent().find('.section-subhead').addClass('hide');
                jQuery(this).parent().parent().parent().find('.edit-name-sitemap').removeClass('hide');
                jQuery(this).parent().parent().parent().find('.edit-name-sitemap').focus();
            }
        });
        jQuery(document).on("focusout", ".edit-name-sitemap", function () {
            jQuery(this).parent().parent().find('.section-subhead').removeClass('hide');
            jQuery(this).parent().parent().find('.edit-name-sitemap').addClass('hide');
        });
    };
    ComponentManagerComponent.prototype.deleteResult = function (formulaIndex, resultControl) {
        var _this = this;
        if (this.resultSection.items.length > 1) {
            this._builderService.deleteItem(resultControl._id, this.resultSection._id)
                .subscribe(function (response) {
                if (response.title != 'Not Deleted') {
                    _this.jsonBuilderHelper.deleteResultSection(_this.resultSection, formulaIndex);
                    _this.jsonBuilderHelper.getJSONBuilt().formula.splice(formulaIndex, 1);
                    window.toastNotification('Result Deleted Successfully');
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    ComponentManagerComponent.prototype.deleteOutcome = function (formulaIndex) {
        var self = this;
        bootbox.dialog({
            size: 'small',
            message: "\n                <div class=\"one-line-bootbox\">\n                    <div class=\"bootbox-body-left\">\n                        <div class=\"mat-icon\">\n                            <i class=\"material-icons\">error</i>\n                        </div>\n                    </div>\n                    <div class=\"bootbox-body-right\">\n                        <p class=\"\">Are you sure you want to delete this outcome?</p>\n                    </div>\n                </div>\n            ",
            buttons: {
                cancel: {
                    label: "No",
                    className: "btn-cancel btn-cancel-hover"
                },
                success: {
                    label: "Yes",
                    className: "btn btn-ok btn-hover",
                    callback: function () {
                        var formulaValue = self.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].value;
                        self.jsonBuilderHelper.getTemplateQuestionare().forEach(function (item) {
                            if (item.type == 'selectbox' || item.type == 'radio_button' || item.type == 'checkbox') {
                                item.options.forEach(function (option) {
                                    var type = option.value;
                                    if (type && type != '') {
                                        var typeArray = type.split(',');
                                        var valueIndex = typeArray.indexOf(formulaValue);
                                        if (valueIndex != (-1)) {
                                            typeArray.splice(valueIndex, 1);
                                            option.value = typeArray.toString();
                                            self._ItemTrackService.setUnSavedItems(item);
                                        }
                                    }
                                });
                            }
                        });
                        self.jsonBuilderHelper.getJSONBuilt().formula.splice(formulaIndex, 1);
                        self.jsonBuilderHelper.setSelectedFormula(self.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex - 1]);
                    }
                }
            }
        });
    };
    ComponentManagerComponent.prototype.addLead = function (page) {
        var self = this;
        this.leadSection.visible = !this.leadSection.visible;
        this.leadSection.items[0].visible = !this.leadSection.items[0].visible;
        if (this.leadSection.visible && this.leadSection.items[0].visible) {
            this.jsonBuilderHelper.hideOtherLeadForm1();
            var index = jQuery.inArray(this.leadSection, page.sections);
            if (!index) {
                setTimeout(function () { self.scrollIt('.page_0'); }, 200);
            }
            else {
                setTimeout(function () { self.scrollIt('.sec_' + (page.sections.length - 1)); }, 200);
            }
        }
        self.addDropdown();
    };
    ComponentManagerComponent.prototype.addResult = function (page) {
        var _this = this;
        var self = this;
        if (this.jsonBuilderHelper.getJSONBuilt().formula.length <= this.resultSection.items.length)
            this.jsonBuilderHelper.addFormula();
        this.jsonBuilderHelper.animInit();
        var ItemResult = this.jsonBuilderHelper.addResultSection(this.resultSection);
        this._builderService.addItem(this.resultSection._id, ItemResult.item, this.resultSection.items.length - 1).subscribe(function (response) {
            setTimeout(function () {
                self.nameEdit();
            }, 100);
            _this.resultSection.items[ItemResult.index] = new model_1.Item().deserialize(response);
            _this.jsonBuilderHelper.debounce(_this.jsonBuilderHelper.animLoad(), 1800);
        }, function (error) {
        });
    };
    ComponentManagerComponent.prototype.addDropdown = function () {
        jQuery('.add-parent.option').toggleClass('active');
    };
    ComponentManagerComponent.prototype.templateScroll = function () {
        var rightPosition = jQuery('#sidebar').css('right');
        var correctedViewportW = (function (win, docElem) {
            var mM = win['matchMedia'] || win['msMatchMedia'], client = docElem['clientWidth'], inner = win['innerWidth'];
            return mM && client < inner && true === mM('(min-width:' + inner + 'px)')['matches']
                ? function () { return win['innerWidth']; }
                : function () { return docElem['clientWidth']; };
        }(window, document.documentElement));
        if (jQuery(window).width() > 992) {
            var minWinWidth = correctedViewportW() - 550;
        }
        else {
            var minWinWidth = correctedViewportW() - 0;
        }
        if (correctedViewportW() > 1850) {
            var zoomFactor = 0.8;
        }
        else if (correctedViewportW() < 992) {
            var zoomFactor = 1;
        }
        else {
            var zoomFactor = 0.7;
        }
        if (rightPosition == "0px") {
            jQuery(".template-section").css('width', minWinWidth);
            jQuery(".building").css('width', minWinWidth);
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                jQuery("temp").css({
                    'transform': 'scale(' + zoomFactor + ')',
                    'float': 'left',
                    'margin-bottom': '-2130px',
                    'transform-origin': '60px 0px'
                });
            }
            else {
                jQuery("temp").css('zoom', zoomFactor);
            }
        }
        else if (rightPosition == "-285px") {
            var minWinWidth = correctedViewportW() - 264;
            jQuery(".template-section").animate({ width: minWinWidth }, 300);
            jQuery(".template-section").css('overflow-x', "hidden");
            jQuery(".building").css('width', minWinWidth);
            if (correctedViewportW() > 1850) {
                jQuery("temp").css('zoom', ".97");
            }
            else {
                jQuery("temp").css('zoom', ".93");
            }
        }
        if (jQuery(window).width() > 992) {
            var winWidth = correctedViewportW() - 264;
        }
        else {
            var winWidth = correctedViewportW() - 0;
        }
        jQuery("temp").css('width', winWidth);
        var winHeight = jQuery(window).height() - 60;
        jQuery(".template-section").css('height', winHeight);
        jQuery(".template-section").css('position', "fixed");
    };
    ComponentManagerComponent.prototype.getVisibleSections = function (page) {
        return page.sections.filter(function (section) { return section.visible; });
    };
    ComponentManagerComponent.prototype.getLeadFormVisibility = function (section) {
        var visiblity;
        for (var _i = 0, _a = section.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.type === 'leadform') {
                visiblity = item.visible;
            }
        }
        return visiblity;
    };
    ComponentManagerComponent.prototype.selectControl = function (control) {
        this.jsonBuilderHelper.setSelectedControl(control);
    };
    ComponentManagerComponent.prototype.selectModel = function (event, type, Class, index) {
        this.jsonBuilderHelper.setSelectedModel(type);
        event.stopPropagation();
        event.preventDefault();
        if (this.jsonBuilderHelper.getJSONBuilt().pages[0].type == 'Landing'
            && this.jsonBuilderHelper.getJSONBuilt().pages[0].visible == false && type == 'Page')
            index = index - 1;
        var bindingClass = Class + index;
        if (jQuery('.sound-cloud').length > 0) {
            jQuery('.sound-cloud').addClass('template2');
        }
        if (type == 'Outcome_Settings') {
            bindingClass = '.page_2';
        }
        this.scrollIt(bindingClass, event);
    };
    ComponentManagerComponent.prototype.selectOutcomeSettings = function (event, type) {
        this.jsonBuilderHelper.setSelectedModel(type);
        event.stopPropagation();
        event.preventDefault();
    };
    ComponentManagerComponent.prototype.scrollIt = function (bindingClass1, event) {
        console.log(bindingClass1);
        if (jQuery(bindingClass1).length) {
            var position = 0;
            var templateHeight = 0;
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                var zoomFactor = 1;
                var tHeight = -30;
            }
            else {
                zoomFactor = jQuery('temp').css('zoom');
                tHeight = 146;
            }
            if (jQuery('.sound-cloud').length > 0) {
                jQuery('.sound-cloud').addClass('template2');
                if (event && ((event.target.innerText == 'WELCOME SCREEN') || (event.target.innerText == 'Lead Generation'))) {
                    templateHeight = -jQuery(bindingClass1).position().top;
                }
                else if (event && (event.target.innerText == 'QUESTIONNAIRE' || event.target.innerText == 'RESULT')) {
                    templateHeight = jQuery('.template2').height();
                }
                else {
                    templateHeight = jQuery('.template2').height() + tHeight;
                }
                console.log(templateHeight);
                position = jQuery(bindingClass1).position().top + templateHeight;
                console.log(position);
                jQuery(".template-section").animate({ scrollTop: position * zoomFactor }, function () {
                    jQuery(".template-section").clearQueue();
                });
            }
            else if (jQuery('.one-page-slider').length > 0) {
                position = jQuery(bindingClass1).position().top;
                jQuery(".template-section").animate({ scrollTop: position * zoomFactor }, function () {
                    jQuery(".template-section").clearQueue();
                });
            }
        }
    };
    ComponentManagerComponent.prototype.scrollEditor = function (bindingClass1) {
        if (jQuery(bindingClass1).length) {
            var position = jQuery(bindingClass1).position().top;
            jQuery('.side-scroll').animate({ scrollTop: position }, 1000);
        }
    };
    ComponentManagerComponent.prototype.OnDeleteControl = function (sectionIndex) {
        var that = this;
        bootbox.dialog({
            size: 'small',
            message: "\n                <div class=\"one-line-bootbox\">\n                    <div class=\"bootbox-body-left\">\n                        <div class=\"mat-icon\">\n                            <i class=\"material-icons\">error</i>\n                        </div>\n                    </div>\n                    <div class=\"bootbox-body-right\">\n                        <p class=\"\">Are you sure you want to delete this question?</p>\n                    </div>\n                </div>\n            ",
            buttons: {
                cancel: {
                    label: "Cancel",
                    className: "btn-cancel btn-cancel-hover"
                },
                success: {
                    label: "OK",
                    className: "btn btn-ok btn-hover",
                    callback: function () {
                        that.DeleteControl(sectionIndex);
                    }
                }
            }
        });
    };
    ComponentManagerComponent.prototype.OnDeleteSection = function () {
        var that = this;
        bootbox.dialog({
            size: 'small',
            message: "\n                <div class=\"one-line-bootbox\">                                                                    \n                    <div class=\"bootbox-body-left\">\n                        <div class=\"mat-icon\">\n                            <i class=\"material-icons\">error</i>\n                        </div>\n                    </div>\n                    <div class=\"bootbox-body-right\">\n                        <p class=\"one-line-para\">Are you sure you want to delete this section?</p>\n                    </div>\n                </div>\n            ",
            buttons: {
                cancel: {
                    label: "Cancel",
                    className: "btn-cancel btn-cancel-hover"
                },
                success: {
                    label: "OK",
                    className: "btn btn-ok btn-hover",
                    callback: function () {
                        that.DeleteSection('Section Deleted Successfully.');
                    }
                }
            }
        });
    };
    ComponentManagerComponent.prototype.DeleteControl = function (sectionIndex) {
        var that = this;
        var sectionId = null, itemId = that.jsonBuilderHelper.getSelectedControl()._id;
        if (that.jsonBuilderHelper.selectedSection.items.length == 1)
            sectionId = that.jsonBuilderHelper.getSelectedSection()._id;
        that.jsonBuilderHelper.animInit();
        that._builderService.remove(itemId, sectionId)
            .subscribe(function (response) {
            that.jsonBuilderHelper.deleteControl();
            var bindingClass1 = '.sec_' + sectionIndex + '_q_0';
            that.scrollIt(bindingClass1);
            that.toastNotificationWithFormulaCheck('Question Deleted Successfully.');
            that.jsonBuilderHelper.debounce(that.jsonBuilderHelper.animLoad(), 1800);
        }, function (error) {
            console.log(error);
        });
    };
    ComponentManagerComponent.prototype.DeleteSection = function (messsage) {
        var that = this;
        var self = this;
        var sectionId = that.jsonBuilderHelper.selectedSection._id;
        self.jsonBuilderHelper.animInit();
        that._builderService.removeSection(sectionId)
            .subscribe(function (response) {
            self.toastNotificationWithFormulaCheck(messsage);
            that.jsonBuilderHelper.deleteSection();
            self.jsonBuilderHelper.debounce(self.jsonBuilderHelper.animLoad(), 1800);
        }, function (error) {
            console.log(error);
        });
    };
    ComponentManagerComponent.prototype.addControl = function (type) {
        var self = this;
        var item;
        var index = jQuery.inArray(this.jsonBuilderHelper.getSelectedControl(), this.jsonBuilderHelper.getSelectedSection().items);
        if (type == 'New') {
            item = new model_1.Item(this.jsonBuilderHelper.getSelectedControl().type, 'Default Question Title', 'Default Question Help Text', 'Default Placeholder');
        }
        else {
            item = this.jsonBuilderHelper.getSelectedControl();
        }
        self.jsonBuilderHelper.animInit();
        this._builderService.addItem(this.jsonBuilderHelper.getSelectedSection()._id, item, index + 1).subscribe(function (response) {
            var newItem = new model_1.Item().deserialize(response);
            self.jsonBuilderHelper.addControl(newItem, index);
            self.toastNotificationWithFormulaCheck('New Question added Successfully.');
            self.jsonBuilderHelper.setSelectedControl(newItem);
            self.jsonBuilderHelper.debounce(self.jsonBuilderHelper.animLoad(), 1800);
        }, function (error) {
        });
    };
    ComponentManagerComponent.prototype.addNewQuestion = function () {
        var _this = this;
        var self = this;
        var item;
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical')
            item = new model_1.Item('checkbox', 'New Question', 'Default Question Help Text', 'Question Placeholder');
        else if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation')
            item = new model_1.Item('radio_button', 'New Question', 'Default Question Help Text', 'Question Placeholder');
        var lastSectionIndex = this.jsonBuilderHelper.getJSONBuilt().pages[1].sections.length;
        if (this.jsonBuilderHelper.getJSONBuilt().pages[1].sections[lastSectionIndex - 1].type === 'LeadFormQ') {
            lastSectionIndex = lastSectionIndex - 1;
        }
        var secId = this.jsonBuilderHelper.getJSONBuilt().pages[1].sections[lastSectionIndex - 1]._id;
        var index = this.jsonBuilderHelper.getJSONBuilt().pages[1].sections[lastSectionIndex - 1].items.length;
        self.jsonBuilderHelper.animInit();
        this._builderService.addItem(secId, item, index + 1).subscribe(function (response) {
            var newItem = new model_1.Item().deserialize(response);
            self.jsonBuilderHelper.addNewQuestion(newItem, lastSectionIndex);
            _this.jsonBuilderHelper.setSelectedModel('Control');
            _this.jsonBuilderHelper.setSelectedSection(_this.jsonBuilderHelper.getJSONBuilt().pages[1].sections[lastSectionIndex - 1]);
            _this.jsonBuilderHelper.setSelectedControl(newItem);
            var bclasss = "#" + _this.jsonBuilderHelper.getJSONBuilt().pages[1].sections[lastSectionIndex - 1]._id;
            var bindingClass2 = '.sec_' + (lastSectionIndex - 1) + '_q_' + index + '';
            var that = _this;
            setTimeout(function () { that.scrollIt(bindingClass2); }, 50);
            self.toastNotificationWithFormulaCheck('New Question added Successfully.');
            self.jsonBuilderHelper.debounce(self.jsonBuilderHelper.animLoad(), 1800);
        }, function (error) {
        });
        self.addDropdown();
    };
    ComponentManagerComponent.prototype.addNewSection = function () {
        var _this = this;
        var self = this;
        var item;
        var section = new model_1.Section('New Section', 'This is Description of new section');
        item = new model_1.Item('checkbox', 'Default Question Title', 'Default Question Help Text', 'Question Placeholder');
        self.jsonBuilderHelper.animInit();
        this._builderService.addSection(section, item, this.jsonBuilderHelper.getSelectedPage()._id).subscribe(function (response) {
            response[1] = new model_1.Item().deserialize(response[1]);
            self.jsonBuilderHelper.addNewSection(response[0], response[1]);
            var lastSectionIndex = _this.jsonBuilderHelper.getJSONBuilt().pages[1].sections.length;
            if (_this.jsonBuilderHelper.getJSONBuilt().pages[1].sections[lastSectionIndex - 1].type === 'LeadFormQ') {
                lastSectionIndex = lastSectionIndex - 1;
            }
            _this.jsonBuilderHelper.setSelectedModel('Section');
            _this.jsonBuilderHelper.setSelectedSection(_this.jsonBuilderHelper.getJSONBuilt().pages[1].sections[lastSectionIndex - 1]);
            var bindingClass1 = '.sec_' + (lastSectionIndex - 1);
            setTimeout(function () {
                self.initialize();
                self.scrollIt(bindingClass1);
            }, 100);
            self.toastNotificationWithFormulaCheck('New Section added Successfully.');
            self.jsonBuilderHelper.debounce(self.jsonBuilderHelper.animLoad(), 1800);
        }, function (error) {
        });
        this.panelHeightUpdate('addSection');
        self.addDropdown();
    };
    ComponentManagerComponent.prototype.panelHeightUpdate = function (action) {
        switch (action) {
            case "addSection":
                this.pnHeight = this.pnHeight + 54;
                break;
            case "deleteSection":
                this.pnHeight = this.pnHeight - 54;
                break;
            case "addQuestion":
                this.pnHeight = this.pnHeight + 18;
                break;
            case "addControl":
                this.pnHeight = this.pnHeight + 18;
                break;
            case "deleteQuestion":
                this.pnHeight = this.pnHeight - 18;
                break;
        }
        var panelMaxHeight = jQuery(window).height() - 60;
        if (this.pnHeight > panelMaxHeight) {
            var pHeight = panelMaxHeight;
            jQuery('.panel-scroll').css('height', pHeight);
            jQuery('.panel-scroll').css('overflow-y', 'scroll');
        }
        else {
            jQuery('.panel-scroll').css('height', 'auto');
        }
    };
    ComponentManagerComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case "ADDSECTION":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'AddSection');
                _kmq.push(['record', 'Builder Add Section Click']);
                break;
            case "DELETESECTION":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'DeleteSection');
                _kmq.push(['record', 'Builder Delete Section Click']);
                break;
            case "ADDQUESTION":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'AddQuestion');
                _kmq.push(['record', 'Builder Add Question Click']);
                break;
            case "DUPLICATEQUESTION":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'DuplicateQuestion');
                _kmq.push(['record', 'Builder Duplicate Question Click']);
                break;
            case "DELETEQUESTION":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'DeleteQuestion');
                _kmq.push(['record', 'Builder Delete Question Click']);
                break;
        }
    };
    ComponentManagerComponent.prototype.visibilityEye = function (page) {
        page.visible = !page.visible;
        if (!page.visible) {
            this.jsonBuilderHelper.setSelectedModel('Page');
            this.jsonBuilderHelper.setSelectedPage(this.jsonBuilderHelper.getJSONBuilt().pages[1]);
        }
    };
    ComponentManagerComponent.prototype.addOutcome = function () {
        var length = (this.jsonBuilderHelper.getJSONBuilt().formula.length + 1).toString();
        this.jsonBuilderHelper.getJSONBuilt().addformula('New Outcome', 'outcome' + ((Math.floor((Math.random() * 1000) + 1)) * parseInt(length)), 'https://cdn.filepicker.io/api/file/lHqm5ge9RdySNwOzKmGA', 'Outcome description will come here', 'Page title will come here', 'Button Text', env_config_1.Config.PROTOCOL + env_config_1.Config.APP_EXTENSION);
    };
    ComponentManagerComponent.prototype.duplicateOutcome = function (currentOutcome, index) {
        this.jsonBuilderHelper.getJSONBuilt().addformula(currentOutcome.name, currentOutcome.value + '_' + (Math.floor((Math.random() * Math.random() * 100) + 1)), currentOutcome.result, currentOutcome.html, currentOutcome.decimal, currentOutcome.units.preValue, currentOutcome.units.postValue);
        var removed = this.jsonBuilderHelper.getJSONBuilt().formula.splice(this.jsonBuilderHelper.getJSONBuilt().formula.length - 1, 1);
        this.jsonBuilderHelper.getJSONBuilt().formula.splice(index + 1, 0, removed[0]);
    };
    ComponentManagerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'component-manager',
            directives: [control_component_1.Control],
            pipes: [index_1.RemoveTags],
            providers: [formula_service_1.FormulaService],
            templateUrl: 'component_manager.template.html',
            styleUrls: [
                'assets/css/mCustomScrollbar.css',
                'assets/css/component_manager.style.css'
            ]
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, builder_service_1.BuilderService, formula_service_1.FormulaService, JSONUpdateItemTracker_service_1.JSONItemTracker])
    ], ComponentManagerComponent);
    return ComponentManagerComponent;
}());
exports.ComponentManagerComponent = ComponentManagerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29tcG9uZW50X21hbmFnZXIvY29tcG9uZW50X21hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsa0NBQXdCLCtDQUErQyxDQUFDLENBQUE7QUFDeEUsb0NBQTRCLG9DQUFvQyxDQUFDLENBQUE7QUFDakUsZ0NBQStCLGdDQUFnQyxDQUFDLENBQUE7QUFDaEUsc0JBQTJCLGdDQUFnQyxDQUFDLENBQUE7QUFDNUQsc0JBQW9DLG9CQUFvQixDQUFDLENBQUE7QUFDekQsZ0NBQStCLGdDQUFnQyxDQUFDLENBQUE7QUFDaEUsOENBQWdDLDhDQUE4QyxDQUFDLENBQUE7QUFDL0UsMkJBQXVCLCtCQUErQixDQUFDLENBQUE7QUFvQnZEO0lBTUksbUNBQW9CLGlCQUE4QixFQUN0QyxlQUErQixFQUMvQixjQUE4QixFQUM5QixpQkFBa0M7UUFIMUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFpQjtRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JELEdBQUcsQ0FBQyxDQUFhLFVBQXVCLEVBQXZCLEtBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQXZCLGNBQXVCLEVBQXZCLElBQXVCLENBQUM7WUFBcEMsSUFBSSxJQUFJLFNBQUE7WUFDVCxHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMs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SUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFydEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFVBQVUsRUFBRSxDQUFDLDJCQUFPLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsa0JBQVUsQ0FBQztZQUNuQixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzNCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFO2dCQUNQLGlDQUFpQztnQkFDakMsd0NBQXdDO2FBQzNDO1NBQ0osQ0FBQzs7aUNBQUE7SUE0c0JGLGdDQUFDO0FBQUQsQ0Exc0JBLEFBMHNCQyxJQUFBO0FBMXNCWSxpQ0FBeUIsNEJBMHNCckMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2NvbXBvbmVudF9tYW5hZ2VyL2NvbXBvbmVudF9tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL2NvbnRyb2xzL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybXVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtdWxhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZW1vdmVUYWdzIH0gZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL3BpcGVzL2luZGV4JztcclxuaW1wb3J0IHsgU2VjdGlvbiwgSXRlbSwgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IEJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSlNPTkl0ZW1UcmFja2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvSlNPTlVwZGF0ZUl0ZW1UcmFja2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcvZW52LmNvbmZpZyc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgYm9vdGJveDogYW55O1xyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuZGVjbGFyZSB2YXIgZ2E6IGFueTtcclxuZGVjbGFyZSB2YXIgX2ttcTogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2NvbXBvbmVudC1tYW5hZ2VyJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtDb250cm9sXSxcclxuICAgIHBpcGVzOiBbUmVtb3ZlVGFnc10sXHJcbiAgICBwcm92aWRlcnM6IFtGb3JtdWxhU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudF9tYW5hZ2VyLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgJ2Fzc2V0cy9jc3MvbUN1c3RvbVNjcm9sbGJhci5jc3MnLFxyXG4gICAgICAgICdhc3NldHMvY3NzL2NvbXBvbmVudF9tYW5hZ2VyLnN0eWxlLmNzcydcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICB0ZW1wbGF0ZUpzb246IGFueTtcclxuICAgIHRvYXN0TWVzc2FnZTogc3RyaW5nO1xyXG4gICAgbGVhZFNlY3Rpb246IGFueTtcclxuICAgIHJlc3VsdFNlY3Rpb246IGFueTtcclxuICAgIHBuSGVpZ2h0OiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcixcclxuICAgICAgICBwcml2YXRlIF9idWlsZGVyU2VydmljZTogQnVpbGRlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtdWxhU2VydmljZTogRm9ybXVsYVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfSXRlbVRyYWNrU2VydmljZTogSlNPTkl0ZW1UcmFja2VyKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUpzb24gPSBqc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKTtcclxuICAgICAgICBmb3IgKGxldCBwYWdlIG9mIHRoaXMudGVtcGxhdGVKc29uLnBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHNlY3Rpb24gaW4gcGFnZS5zZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl0udHlwZSA9PT0gJ1Jlc3VsdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdFNlY3Rpb24gPSBwYWdlLnNlY3Rpb25zW3NlY3Rpb25dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl0udHlwZSA9PT0gJ0xlYWRGb3JtUScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlYWRTZWN0aW9uID0gcGFnZS5zZWN0aW9uc1tzZWN0aW9uXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2FzdE5vdGlmaWNhdGlvbldpdGhGb3JtdWxhQ2hlY2soYmFzZU1lc3NhZ2U6IGFueSkge1xyXG4gICAgICAgIGxldCB0b2FzdE1lc3NhZ2U6IGFueSA9IGJhc2VNZXNzYWdlO1xyXG4gICAgICAgIHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbih0b2FzdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wbkhlaWdodCA9IGpRdWVyeShcIi5wYW5lbC1zY3JvbGxcIikuaGVpZ2h0KCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuc29ydGFibGUxJykuc29ydGFibGUoe1xyXG4gICAgICAgICAgICBjb25uZWN0V2l0aDogJ3VsJyxcclxuICAgICAgICAgICAgLy9jdXJzb3I6IFwibW92ZVwiLFxyXG4gICAgICAgICAgICAvL2hlbHBlcjogXCJjbG9uZVwiLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICAgICAgICByZXZlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY3JvbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXIgPSBqUXVlcnkodGhpcykuc29ydGFibGUoJ3RvQXJyYXknLCB7IGF0dHJpYnV0ZTogJ2RhdGEtb3JkZXInIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvcmRlciA9IGpRdWVyeSh0aGlzKS5zb3J0YWJsZSgndG9BcnJheScsIHsgYXR0cmlidXRlOiAnZGF0YS1vZHInIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9yZGVyLmxlbmd0aCA9PSBzZWxmLmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkU2VjdGlvbigpLml0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuc29ydChzb3JkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIC0tIFVwZGF0ZSBzYW1lIHNlY3Rpb24gcmVvcmRlcnRpbmcgIC0tICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIEFuaW1hdGlvbiBJbml0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5hbmltSW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9idWlsZGVyU2VydmljZS51cGRhdGVJbnRyYVNlY3Rpb25PcmRlcihvcmRlciwgalF1ZXJ5KHRoaXMpLmF0dHIoJ2RhdGEtc2VjdGlvbicpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50b2FzdE5vdGlmaWNhdGlvbldpdGhGb3JtdWxhQ2hlY2soJ1JlLW9yZGVyZWQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogYW5pbWF0aW9uICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmRlYm91bmNlKHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUxvYWQoKSwgMTgwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiAtLSBVcGRhdGUgc2FtZSBzZWN0aW9uIG9yZGVydGluZyBFbmQgIC0tICovXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvdXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlY2VpdmU6IGZ1bmN0aW9uIChldmVudDogYW55LCB1aTogYW55KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXIgPSBqUXVlcnkodGhpcykuc29ydGFibGUoJ3RvQXJyYXknLCB7IGF0dHJpYnV0ZTogJ2RhdGEtb3JkZXInIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvcmRlciA9IGpRdWVyeSh0aGlzKS5zb3J0YWJsZSgndG9BcnJheScsIHsgYXR0cmlidXRlOiAnZGF0YS1vZHInIH0pO1xyXG4gICAgICAgICAgICAgICAgLyogLS0gVXBkYXRlIHNhbWUgc2VjdGlvbiByZW9yZGVydGluZyAgLS0gKi9cclxuICAgICAgICAgICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIubXVsdGlTZWN0aW9uU29ydChqUXVlcnkodGhpcykuYXR0cignZGF0YS1zZWMnKSwgdWkuaXRlbS5pbmRleCgpLCBzb3JkZXIpO1xyXG4gICAgICAgICAgICAgICAgLyogQW5pbWF0aW9uIEluaXQgKi9cclxuICAgICAgICAgICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUluaXQoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuX2J1aWxkZXJTZXJ2aWNlLnVwZGF0ZUludGVyU2VjdGlvbk9yZGVyKG9yZGVyLCBqUXVlcnkodGhpcykuYXR0cignZGF0YS1zZWN0aW9uJykpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRvYXN0Tm90aWZpY2F0aW9uV2l0aEZvcm11bGFDaGVjaygnUmUtb3JkZXJlZCBzdWNjZXNzZnVsbHkuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZi5qc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZFNlY3Rpb24oKS5pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gc2VsZi5qc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZFNlY3Rpb24oKS50aXRsZSArICcgc2VjdGlvbiB3YXMgcmVtb3ZlZCBzdWNjZXNzZnVsbHkuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuRGVsZXRlU2VjdGlvbihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBhbmltYXRpb24gKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5kZWJvdW5jZShzZWxmLmpzb25CdWlsZGVySGVscGVyLmFuaW1Mb2FkKCksIDE4MDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qIC0tIFVwZGF0ZSBzYW1lIHNlY3Rpb24gb3JkZXJ0aW5nIEVuZCAgLS0gKi9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kaXNhYmxlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKCFqUXVlcnkoJy5hZGQtcGFyZW50JykuaXMoZS50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAmJiBqUXVlcnkoJy5hZGQtZHJvcGRvd24tbWVudScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuYWRkLXBhcmVudCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGpRdWVyeSgnLmRyb3Bkb3duLW1lbnUtcGFyZW50JykuY2xpY2soZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICAgIC8vICAgICBqUXVlcnkodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS50b2dnbGUoKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgLypjYW52YXMgc2xpbXNjcm9sbCAqL1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVTY3JvbGwoKTtcclxuICAgICAgICBqUXVlcnkod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYudGVtcGxhdGVTY3JvbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvKlNjcm9sbGVyIGZvciByaWdodCBwYW5lbCBhbmQgbGVmdCBwYW5lbCAqL1xyXG4gICAgICAgIHZhciBwYW5lbEhlaWdodCA9IGpRdWVyeShcIi5wYW5lbC1zY3JvbGxcIikuaGVpZ2h0KCk7XHJcbiAgICAgICAgd2luZG93U2Nyb2xsKCk7XHJcbiAgICAgICAgalF1ZXJ5KHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3dTY3JvbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmdW5jdGlvbiB3aW5kb3dTY3JvbGwoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYW5lbE1heEhlaWdodCA9IGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpIC0gNjA7IC8vU3VidHJhY3RpbmcgaGVpZ2h0IG9mIG1lbnUgYW5kIG90aGVyIG9wdGlvbiBsaWtlIFwiYnVpbGRcIiwgXCJjb25maWdcIiBhbmQgXCJhbmFseXplXCJcclxuICAgICAgICAgICAgLy8gaWYgKHBhbmVsSGVpZ2h0ID4gcGFuZWxNYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgdmFyIHBIZWlnaHQgPSBwYW5lbE1heEhlaWdodDtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucGFuZWwtc2Nyb2xsJykuY3NzKCdvdmVyZmxvdy15JywgJ3Njcm9sbCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wYW5lbC1zY3JvbGwnKS5jc3MoJ2hlaWdodCcsIHBIZWlnaHQpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3Njcm9sbCBjYW5jZWwnKTtcclxuICAgICAgICAgICAgLy8gICAgIGpRdWVyeSgnLnBhbmVsLXNjcm9sbCcpLmNzcygnb3ZlcmZsb3cteScsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgLy8gICAgIGpRdWVyeSgnLnBhbmVsLXNjcm9sbCcpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5hbWVFZGl0KCk7XHJcblxyXG4gICAgfVxyXG4gICAgbmFtZUVkaXQoKSB7XHJcbiAgICAgICAgalF1ZXJ5KFwiLmVkaXRfbmFtZV9saW5rX3NpdGVtYXBcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgoalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5lZGl0LW5hbWUtc2l0ZW1hcCcpLmhhc0NsYXNzKCdoaWRlJykpKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnNlY3Rpb24tc3ViaGVhZCcpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnLmVkaXQtbmFtZS1zaXRlbWFwJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuZWRpdC1uYW1lLXNpdGVtYXAnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub24oXCJmb2N1c291dFwiLCBcIi5lZGl0LW5hbWUtc2l0ZW1hcFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuc2VjdGlvbi1zdWJoZWFkJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5lZGl0LW5hbWUtc2l0ZW1hcCcpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVSZXN1bHQoZm9ybXVsYUluZGV4OiBhbnksIHJlc3VsdENvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS5kZWxldGVJdGVtKHJlc3VsdENvbnRyb2wuX2lkLCB0aGlzLnJlc3VsdFNlY3Rpb24uX2lkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnRpdGxlICE9ICdOb3QgRGVsZXRlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5kZWxldGVSZXN1bHRTZWN0aW9uKHRoaXMucmVzdWx0U2VjdGlvbiwgZm9ybXVsYUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhLnNwbGljZShmb3JtdWxhSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ1Jlc3VsdCBEZWxldGVkIFN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZU91dGNvbWUoZm9ybXVsYUluZGV4OiBhbnkpIHtcclxuICAgICAgICBsZXQgc2VsZjogYW55ID0gdGhpcztcclxuICAgICAgICBib290Ym94LmRpYWxvZyh7XHJcbiAgICAgICAgICAgIHNpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvbmUtbGluZS1ib290Ym94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb3Rib3gtYm9keS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXQtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vdGJveC1ib2R5LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiXCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIG91dGNvbWU/PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0bi1jYW5jZWwgYnRuLWNhbmNlbC1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJZZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1vayBidG4taG92ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybXVsYVZhbHVlOiBzdHJpbmcgPSBzZWxmLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbZm9ybXVsYUluZGV4XS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZygnZm9ybXVsYVZhbHVlJyxmb3JtdWxhVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmUoKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT0gJ3NlbGVjdGJveCcgfHwgaXRlbS50eXBlID09ICdyYWRpb19idXR0b24nfHwgaXRlbS50eXBlID09ICdjaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGU6IGFueSA9IG9wdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgJiYgdHlwZSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGVBcnJheSA9IHR5cGUuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZUluZGV4ID0gdHlwZUFycmF5LmluZGV4T2YoZm9ybXVsYVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUluZGV4ICE9ICgtMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlQXJyYXkuc3BsaWNlKHZhbHVlSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHR5cGVBcnJheS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX0l0ZW1UcmFja1NlcnZpY2Uuc2V0VW5TYXZlZEl0ZW1zKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGEuc3BsaWNlKGZvcm11bGFJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuc2V0U2VsZWN0ZWRGb3JtdWxhKHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYVtmb3JtdWxhSW5kZXggLSAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGVhZChwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8vIHRoaXMubGVhZFNlY3Rpb24gPSB0aGlzLmdldExlYWRTZWN0aW9uKHBhZ2UpO1xyXG4gICAgICAgIC8vdG9nZ2xlbGVhZGZvcm1cclxuICAgICAgICB0aGlzLmxlYWRTZWN0aW9uLnZpc2libGUgPSAhdGhpcy5sZWFkU2VjdGlvbi52aXNpYmxlO1xyXG4gICAgICAgIHRoaXMubGVhZFNlY3Rpb24uaXRlbXNbMF0udmlzaWJsZSA9ICF0aGlzLmxlYWRTZWN0aW9uLml0ZW1zWzBdLnZpc2libGU7XHJcbiAgICAgICAgaWYgKHRoaXMubGVhZFNlY3Rpb24udmlzaWJsZSAmJiB0aGlzLmxlYWRTZWN0aW9uLml0ZW1zWzBdLnZpc2libGUpIHtcclxuICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5oaWRlT3RoZXJMZWFkRm9ybTEoKTtcclxuICAgICAgICAgICAgLy9nZXQgaW5kZXggdG8gc2Nyb2xsIGxlYWQgYXQgdGhhdCBwb3NpdGlvblxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBqUXVlcnkuaW5BcnJheSh0aGlzLmxlYWRTZWN0aW9uLCBwYWdlLnNlY3Rpb25zKTtcclxuICAgICAgICAgICAgaWYgKCFpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHNlbGYuc2Nyb2xsSXQoJy5wYWdlXzAnKTsgfSwgMjAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZWxmLnNjcm9sbEl0KCcuc2VjXycgKyAocGFnZS5zZWN0aW9ucy5sZW5ndGggLSAxKSk7IH0sIDIwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5hZGREcm9wZG93bigpO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0TGVhZFNlY3Rpb24ocGFnZTogUGFnZSkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IHNlY3Rpb24gaW4gcGFnZS5zZWN0aW9ucykge1xyXG4gICAgLy8gICAgICAgICBpZiAocGFnZS5zZWN0aW9uc1tzZWN0aW9uXS50eXBlID09PSAnTGVhZEZvcm1RJykge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5sZWFkU2VjdGlvbiA9IHBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl07XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMubGVhZFNlY3Rpb247XHJcbiAgICAvLyB9XHJcbiAgICAvLyBnZXRSZXN1bHRTZWN0aW9uKHBhZ2U6IFBhZ2UpIHtcclxuICAgIC8vICAgICBmb3IgKGxldCBzZWN0aW9uIGluIHBhZ2Uuc2VjdGlvbnMpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl0udHlwZSA9PT0gJ1Jlc3VsdCcpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMucmVzdWx0U2VjdGlvbiA9IHBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl07XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMucmVzdWx0U2VjdGlvbjtcclxuICAgIC8vIH1cclxuICAgIGFkZFJlc3VsdChwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8vIHRoaXMucmVzdWx0U2VjdGlvbiA9IHRoaXMuZ2V0UmVzdWx0U2VjdGlvbihwYWdlKTtcclxuICAgICAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhLmxlbmd0aCA8PSB0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXMubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmFkZEZvcm11bGEoKTtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmFuaW1Jbml0KCk7XHJcbiAgICAgICAgbGV0IEl0ZW1SZXN1bHQ6IGFueSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuYWRkUmVzdWx0U2VjdGlvbih0aGlzLnJlc3VsdFNlY3Rpb24pO1xyXG4gICAgICAgIC8vIC8qIHNhdmUgcmVzdWx0IG91dHB1dCBpdGVtIGluIHJlc3VsdFBhZ2UgKi9cclxuICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS5hZGRJdGVtKHRoaXMucmVzdWx0U2VjdGlvbi5faWQsIEl0ZW1SZXN1bHQuaXRlbSwgdGhpcy5yZXN1bHRTZWN0aW9uLml0ZW1zLmxlbmd0aCAtIDEpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubmFtZUVkaXQoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXNbSXRlbVJlc3VsdC5pbmRleF0gPSBuZXcgSXRlbSgpLmRlc2VyaWFsaXplKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZGVib3VuY2UodGhpcy5qc29uQnVpbGRlckhlbHBlci5hbmltTG9hZCgpLCAxODAwKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZERyb3Bkb3duKCkge1xyXG4gICAgICAgIGpRdWVyeSgnLmFkZC1wYXJlbnQub3B0aW9uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgdGVtcGxhdGVTY3JvbGwoKSB7XHJcbiAgICAgICAgdmFyIHJpZ2h0UG9zaXRpb24gPSBqUXVlcnkoJyNzaWRlYmFyJykuY3NzKCdyaWdodCcpO1xyXG4gICAgICAgIHZhciBjb3JyZWN0ZWRWaWV3cG9ydFcgPSAoZnVuY3Rpb24gKHdpbjogYW55LCBkb2NFbGVtOiBhbnkpIHtcclxuICAgICAgICAgICAgdmFyIG1NID0gd2luWydtYXRjaE1lZGlhJ10gfHwgd2luWydtc01hdGNoTWVkaWEnXVxyXG4gICAgICAgICAgICAgICAgLCBjbGllbnQgPSBkb2NFbGVtWydjbGllbnRXaWR0aCddXHJcbiAgICAgICAgICAgICAgICAsIGlubmVyID0gd2luWydpbm5lcldpZHRoJ11cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtTSAmJiBjbGllbnQgPCBpbm5lciAmJiB0cnVlID09PSBtTSgnKG1pbi13aWR0aDonICsgaW5uZXIgKyAncHgpJylbJ21hdGNoZXMnXVxyXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5bJ2lubmVyV2lkdGgnXTsgfVxyXG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2NFbGVtWydjbGllbnRXaWR0aCddOyB9XHJcbiAgICAgICAgfSAod2luZG93LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpKTtcclxuICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDk5MikgeyB2YXIgbWluV2luV2lkdGggPSBjb3JyZWN0ZWRWaWV3cG9ydFcoKSAtIDU1MDsgfVxyXG4gICAgICAgIGVsc2UgeyB2YXIgbWluV2luV2lkdGggPSBjb3JyZWN0ZWRWaWV3cG9ydFcoKSAtIDA7IH1cclxuXHJcbiAgICAgICAgaWYgKGNvcnJlY3RlZFZpZXdwb3J0VygpID4gMTg1MCkgeyB2YXIgem9vbUZhY3RvciA9IDAuODsgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvcnJlY3RlZFZpZXdwb3J0VygpIDwgOTkyKSB7IHZhciB6b29tRmFjdG9yID0gMTsgfVxyXG4gICAgICAgIGVsc2UgeyB2YXIgem9vbUZhY3RvciA9IDAuNzsgfVxyXG5cclxuICAgICAgICBpZiAocmlnaHRQb3NpdGlvbiA9PSBcIjBweFwiKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLmNzcygnd2lkdGgnLCBtaW5XaW5XaWR0aCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5idWlsZGluZ1wiKS5jc3MoJ3dpZHRoJywgbWluV2luV2lkdGgpO1xyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCJ0ZW1wXCIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICdzY2FsZSgnICsgem9vbUZhY3RvciArICcpJyxcclxuICAgICAgICAgICAgICAgICAgICAnZmxvYXQnOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21hcmdpbi1ib3R0b20nOiAnLTIxMzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnNjBweCAwcHgnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShcInRlbXBcIikuY3NzKCd6b29tJywgem9vbUZhY3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocmlnaHRQb3NpdGlvbiA9PSBcIi0yODVweFwiKSB7XHJcbiAgICAgICAgICAgIHZhciBtaW5XaW5XaWR0aCA9IGNvcnJlY3RlZFZpZXdwb3J0VygpIC0gMjY0O1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIudGVtcGxhdGUtc2VjdGlvblwiKS5hbmltYXRlKHsgd2lkdGg6IG1pbldpbldpZHRoIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLmNzcygnb3ZlcmZsb3cteCcsIFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuYnVpbGRpbmdcIikuY3NzKCd3aWR0aCcsIG1pbldpbldpZHRoKTtcclxuICAgICAgICAgICAgaWYgKGNvcnJlY3RlZFZpZXdwb3J0VygpID4gMTg1MCkgeyBqUXVlcnkoXCJ0ZW1wXCIpLmNzcygnem9vbScsIFwiLjk3XCIpOyB9XHJcbiAgICAgICAgICAgIGVsc2UgeyBqUXVlcnkoXCJ0ZW1wXCIpLmNzcygnem9vbScsIFwiLjkzXCIpOyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA+IDk5MikgeyB2YXIgd2luV2lkdGggPSBjb3JyZWN0ZWRWaWV3cG9ydFcoKSAtIDI2NDsgfVxyXG4gICAgICAgIGVsc2UgeyB2YXIgd2luV2lkdGggPSBjb3JyZWN0ZWRWaWV3cG9ydFcoKSAtIDA7IH1cclxuICAgICAgICBqUXVlcnkoXCJ0ZW1wXCIpLmNzcygnd2lkdGgnLCB3aW5XaWR0aCk7XHJcbiAgICAgICAgdmFyIHdpbkhlaWdodCA9IGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpIC0gNjA7XHJcbiAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuY3NzKCdoZWlnaHQnLCB3aW5IZWlnaHQpO1xyXG4gICAgICAgIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLmNzcygncG9zaXRpb24nLCBcImZpeGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZ2V0VmlzaWJsZVNlY3Rpb25zKHBhZ2U6IFBhZ2UpOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHBhZ2Uuc2VjdGlvbnMuZmlsdGVyKChzZWN0aW9uOiBhbnkpID0+IHNlY3Rpb24udmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgICBnZXRMZWFkRm9ybVZpc2liaWxpdHkoc2VjdGlvbjogU2VjdGlvbikge1xyXG4gICAgICAgIGxldCB2aXNpYmxpdHk6IGJvb2xlYW47XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBzZWN0aW9uLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdsZWFkZm9ybScpIHtcclxuICAgICAgICAgICAgICAgIHZpc2libGl0eSA9IGl0ZW0udmlzaWJsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmlzaWJsaXR5O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0Q29udHJvbChjb250cm9sOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnNldFNlbGVjdGVkQ29udHJvbChjb250cm9sKTtcclxuICAgIH1cclxuICAgIHNlbGVjdE1vZGVsKGV2ZW50OiBhbnksIHR5cGU6IGFueSwgQ2xhc3M/OiBhbnksIGluZGV4PzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5zZXRTZWxlY3RlZE1vZGVsKHR5cGUpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXNbMF0udHlwZSA9PSAnTGFuZGluZydcclxuICAgICAgICAgICAgJiYgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5wYWdlc1swXS52aXNpYmxlID09IGZhbHNlICYmIHR5cGUgPT0gJ1BhZ2UnKVxyXG4gICAgICAgICAgICBpbmRleCA9IGluZGV4IC0gMTtcclxuICAgICAgICAvL2ZvciBicmluZ2luZyBzZWxlY3RlZCB0ZW1wbGF0ZSBhcmVhIHVwXHJcbiAgICAgICAgbGV0IGJpbmRpbmdDbGFzcyA9IENsYXNzICsgaW5kZXg7XHJcbiAgICAgICAgaWYgKGpRdWVyeSgnLnNvdW5kLWNsb3VkJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zb3VuZC1jbG91ZCcpLmFkZENsYXNzKCd0ZW1wbGF0ZTInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZT09J091dGNvbWVfU2V0dGluZ3MnKXtcclxuICAgICAgICAgICAgYmluZGluZ0NsYXNzID0gJy5wYWdlXzInXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vc2Nyb2xsYWJsZSBjb2RlIG1vdmVkIHRvIGZ1bmN0aW9uIHNjcm9sbEl0KClcclxuICAgICAgICB0aGlzLnNjcm9sbEl0KGJpbmRpbmdDbGFzcywgZXZlbnQpO1xyXG4gICAgICAgIC8vc2Nyb2xsYWJsZSBjb2RlIG1vdmVkIHRvIGZ1bmN0aW9uIHNjcm9sbEl0KClcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RPdXRjb21lU2V0dGluZ3MoZXZlbnQ6IGFueSwgdHlwZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5zZXRTZWxlY3RlZE1vZGVsKHR5cGUpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBzY3JvbGxJdChiaW5kaW5nQ2xhc3MxOiBzdHJpbmcsIGV2ZW50PzogYW55KSB7ICBcclxuICAgICAgICBjb25zb2xlLmxvZyhiaW5kaW5nQ2xhc3MxKTtcclxuICAgICAgICBpZiAoalF1ZXJ5KGJpbmRpbmdDbGFzczEpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICB2YXIgdGVtcGxhdGVIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgem9vbUZhY3RvciA9IDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgdEhlaWdodCA9IC0zMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHpvb21GYWN0b3IgPSBqUXVlcnkoJ3RlbXAnKS5jc3MoJ3pvb20nKTtcclxuICAgICAgICAgICAgICAgIHRIZWlnaHQgPSAxNDY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGpRdWVyeSgnLnNvdW5kLWNsb3VkJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuc291bmQtY2xvdWQnKS5hZGRDbGFzcygndGVtcGxhdGUyJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgKChldmVudC50YXJnZXQuaW5uZXJUZXh0ID09ICdXRUxDT01FIFNDUkVFTicpIHx8IChldmVudC50YXJnZXQuaW5uZXJUZXh0ID09ICdMZWFkIEdlbmVyYXRpb24nKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUhlaWdodCA9IC1qUXVlcnkoYmluZGluZ0NsYXNzMSkucG9zaXRpb24oKS50b3A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChldmVudCAmJiAoZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9PSAnUVVFU1RJT05OQUlSRScgfHwgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9PSAnUkVTVUxUJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUhlaWdodCA9IGpRdWVyeSgnLnRlbXBsYXRlMicpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IHRlbXBsYXRlSGVpZ2h0ID0galF1ZXJ5KCcudGVtcGxhdGUyJykuaGVpZ2h0KCkgKyB0SGVpZ2h0OyB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZW1wbGF0ZUhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGpRdWVyeShiaW5kaW5nQ2xhc3MxKS5wb3NpdGlvbigpLnRvcCArIHRlbXBsYXRlSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gKiB6b29tRmFjdG9yIH0sZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuY2xlYXJRdWV1ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoalF1ZXJ5KCcub25lLXBhZ2Utc2xpZGVyJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBqUXVlcnkoYmluZGluZ0NsYXNzMSkucG9zaXRpb24oKS50b3A7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoXCIudGVtcGxhdGUtc2VjdGlvblwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3NpdGlvbiAqIHpvb21GYWN0b3IgfSxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCIudGVtcGxhdGUtc2VjdGlvblwiKS5jbGVhclF1ZXVlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzY3JvbGxFZGl0b3IoYmluZGluZ0NsYXNzMTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGpRdWVyeShiaW5kaW5nQ2xhc3MxKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0galF1ZXJ5KGJpbmRpbmdDbGFzczEpLnBvc2l0aW9uKCkudG9wO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5zaWRlLXNjcm9sbCcpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIE9uRGVsZXRlQ29udHJvbChzZWN0aW9uSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHZhciB0aGF0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGJvb3Rib3guZGlhbG9nKHtcclxuICAgICAgICAgICAgc2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9uZS1saW5lLWJvb3Rib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vdGJveC1ib2R5LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3I8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib290Ym94LWJvZHktcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcXVlc3Rpb24/PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4tY2FuY2VsIGJ0bi1jYW5jZWwtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT0tcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuIGJ0bi1vayBidG4taG92ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LkRlbGV0ZUNvbnRyb2woc2VjdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBPbkRlbGV0ZVNlY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHRoYXQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgYm9vdGJveC5kaWFsb2coe1xyXG4gICAgICAgICAgICBzaXplOiAnc21hbGwnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib25lLWxpbmUtYm9vdGJveFwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb3Rib3gtYm9keS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXQtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vdGJveC1ib2R5LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwib25lLWxpbmUtcGFyYVwiPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzZWN0aW9uPzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICBidXR0b25zOiB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuLWNhbmNlbCBidG4tY2FuY2VsLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tb2sgYnRuLWhvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5EZWxldGVTZWN0aW9uKCdTZWN0aW9uIERlbGV0ZWQgU3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIERlbGV0ZUNvbnRyb2woc2VjdGlvbkluZGV4OiBhbnkpIHtcclxuICAgICAgICB2YXIgdGhhdDogYW55ID0gdGhpcztcclxuICAgICAgICB2YXIgc2VjdGlvbklkOiBhbnkgPSBudWxsLFxyXG4gICAgICAgICAgICBpdGVtSWQ6IGFueSA9IHRoYXQuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRDb250cm9sKCkuX2lkO1xyXG4gICAgICAgIGlmICh0aGF0Lmpzb25CdWlsZGVySGVscGVyLnNlbGVjdGVkU2VjdGlvbi5pdGVtcy5sZW5ndGggPT0gMSlcclxuICAgICAgICAgICAgc2VjdGlvbklkID0gdGhhdC5qc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZFNlY3Rpb24oKS5faWQ7XHJcbiAgICAgICAgLyogQW5pbWF0aW9uIEluaXQgKi9cclxuICAgICAgICB0aGF0Lmpzb25CdWlsZGVySGVscGVyLmFuaW1Jbml0KCk7XHJcbiAgICAgICAgdGhhdC5fYnVpbGRlclNlcnZpY2UucmVtb3ZlKGl0ZW1JZCwgc2VjdGlvbklkKSAgLy9UT0RPIHVkcGF0ZSBzZWN0aW9uIElEXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmpzb25CdWlsZGVySGVscGVyLmRlbGV0ZUNvbnRyb2woKTtcclxuICAgICAgICAgICAgICAgIC8vdG9hc3Qgc3RhcnRcclxuICAgICAgICAgICAgICAgIGxldCBiaW5kaW5nQ2xhc3MxID0gJy5zZWNfJyArIHNlY3Rpb25JbmRleCArICdfcV8wJztcclxuICAgICAgICAgICAgICAgIHRoYXQuc2Nyb2xsSXQoYmluZGluZ0NsYXNzMSk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnRvYXN0Tm90aWZpY2F0aW9uV2l0aEZvcm11bGFDaGVjaygnUXVlc3Rpb24gRGVsZXRlZCBTdWNjZXNzZnVsbHkuJyk7XHJcbiAgICAgICAgICAgICAgICAvLyB0b2FzdCBlbmRcclxuICAgICAgICAgICAgICAgIC8qIGFuaW1hdGlvbiAqL1xyXG4gICAgICAgICAgICAgICAgdGhhdC5qc29uQnVpbGRlckhlbHBlci5kZWJvdW5jZSh0aGF0Lmpzb25CdWlsZGVySGVscGVyLmFuaW1Mb2FkKCksIDE4MDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBEZWxldGVTZWN0aW9uKG1lc3NzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgdGhhdDogYW55ID0gdGhpcztcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHNlY3Rpb25JZDogYW55ID0gdGhhdC5qc29uQnVpbGRlckhlbHBlci5zZWxlY3RlZFNlY3Rpb24uX2lkO1xyXG4gICAgICAgIC8qIEFuaW1hdGlvbiBJbml0ICovXHJcbiAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5hbmltSW5pdCgpO1xyXG4gICAgICAgIHRoYXQuX2J1aWxkZXJTZXJ2aWNlLnJlbW92ZVNlY3Rpb24oc2VjdGlvbklkKSAgLy9UT0RPIHVkcGF0ZSBzZWN0aW9uIElEXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL3RvYXN0IHN0YXJ0XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRvYXN0Tm90aWZpY2F0aW9uV2l0aEZvcm11bGFDaGVjayhtZXNzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0b2FzdCBlbmRcclxuICAgICAgICAgICAgICAgIHRoYXQuanNvbkJ1aWxkZXJIZWxwZXIuZGVsZXRlU2VjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgLyogYW5pbWF0aW9uICovXHJcbiAgICAgICAgICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmRlYm91bmNlKHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUxvYWQoKSwgMTgwMCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAvLyB0aGlzLnBhbmVsSGVpZ2h0VXBkYXRlKFwiZGVsZXRlU2VjdGlvblwiKTtcclxuICAgIH1cclxuICAgIGFkZENvbnRyb2wodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBpdGVtOiBJdGVtO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGpRdWVyeS5pbkFycmF5KHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRDb250cm9sKCksIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRTZWN0aW9uKCkuaXRlbXMpO1xyXG4gICAgICAgIGlmICh0eXBlID09ICdOZXcnKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBuZXcgSXRlbSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkQ29udHJvbCgpLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAnRGVmYXVsdCBRdWVzdGlvbiBUaXRsZScsXHJcbiAgICAgICAgICAgICAgICAnRGVmYXVsdCBRdWVzdGlvbiBIZWxwIFRleHQnLFxyXG4gICAgICAgICAgICAgICAgJ0RlZmF1bHQgUGxhY2Vob2xkZXInKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZENvbnRyb2woKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogQW5pbWF0aW9uIEluaXQgKi9cclxuICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmFuaW1Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlclNlcnZpY2UuYWRkSXRlbSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkU2VjdGlvbigpLl9pZCwgaXRlbSwgaW5kZXggKyAxKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3SXRlbSA9IG5ldyBJdGVtKCkuZGVzZXJpYWxpemUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5hZGRDb250cm9sKG5ld0l0ZW0sIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHNlbGYudG9hc3ROb3RpZmljYXRpb25XaXRoRm9ybXVsYUNoZWNrKCdOZXcgUXVlc3Rpb24gYWRkZWQgU3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAgICAgICAgICAgLyoqIHNlbGVjdCB0aGUgbmV3IGFkZGVkIGl0ZW0gKi9cclxuICAgICAgICAgICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuc2V0U2VsZWN0ZWRDb250cm9sKG5ld0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgLyogYW5pbWF0aW9uICovXHJcbiAgICAgICAgICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmRlYm91bmNlKHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUxvYWQoKSwgMTgwMCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGFkZE5ld1F1ZXN0aW9uKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgaXRlbTogSXRlbTtcclxuICAgICAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0gJ051bWVyaWNhbCcpXHJcbiAgICAgICAgICAgIGl0ZW0gPSBuZXcgSXRlbSgnY2hlY2tib3gnLCAnTmV3IFF1ZXN0aW9uJywgJ0RlZmF1bHQgUXVlc3Rpb24gSGVscCBUZXh0JywgJ1F1ZXN0aW9uIFBsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0gJ1JlY29tbWVuZGF0aW9uJylcclxuICAgICAgICAgICAgaXRlbSA9IG5ldyBJdGVtKCdyYWRpb19idXR0b24nLCAnTmV3IFF1ZXN0aW9uJywgJ0RlZmF1bHQgUXVlc3Rpb24gSGVscCBUZXh0JywgJ1F1ZXN0aW9uIFBsYWNlaG9sZGVyJyk7XHJcblxyXG4gICAgICAgIGxldCBsYXN0U2VjdGlvbkluZGV4ID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5wYWdlc1sxXS5zZWN0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXNbMV0uc2VjdGlvbnNbbGFzdFNlY3Rpb25JbmRleCAtIDFdLnR5cGUgPT09ICdMZWFkRm9ybVEnKSB7XHJcbiAgICAgICAgICAgIGxhc3RTZWN0aW9uSW5kZXggPSBsYXN0U2VjdGlvbkluZGV4IC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlY0lkID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5wYWdlc1sxXS5zZWN0aW9uc1tsYXN0U2VjdGlvbkluZGV4IC0gMV0uX2lkO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXNbMV0uc2VjdGlvbnNbbGFzdFNlY3Rpb25JbmRleCAtIDFdLml0ZW1zLmxlbmd0aDtcclxuICAgICAgICAvKiBBbmltYXRpb24gSW5pdCAqL1xyXG4gICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUluaXQoKTtcclxuICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS5hZGRJdGVtKHNlY0lkLCBpdGVtLCBpbmRleCArIDEpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdJdGVtID0gbmV3IEl0ZW0oKS5kZXNlcmlhbGl6ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmFkZE5ld1F1ZXN0aW9uKG5ld0l0ZW0sIGxhc3RTZWN0aW9uSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgLy8gc2VsZWN0IG9uIGFkZCBvZiBxdWVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnNldFNlbGVjdGVkTW9kZWwoJ0NvbnRyb2wnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuc2V0U2VsZWN0ZWRTZWN0aW9uKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXNbMV0uc2VjdGlvbnNbbGFzdFNlY3Rpb25JbmRleCAtIDFdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuc2V0U2VsZWN0ZWRDb250cm9sKG5ld0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJjbGFzc3MgPSBcIiNcIiArIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXNbMV0uc2VjdGlvbnNbbGFzdFNlY3Rpb25JbmRleCAtIDFdLl9pZDtcclxuICAgICAgICAgICAgICAgIC8vc2Nyb2xsIHRvIG5ld2x5IGFkZGVkIHF1ZXNcclxuICAgICAgICAgICAgICAgIGxldCBiaW5kaW5nQ2xhc3MyID0gJy5zZWNfJyArIChsYXN0U2VjdGlvbkluZGV4IC0gMSkgKyAnX3FfJyArIGluZGV4ICsgJyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhhdDogYW55ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyB0aGF0LnNjcm9sbEl0KGJpbmRpbmdDbGFzczIpOyB9LCA1MCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRvYXN0Tm90aWZpY2F0aW9uV2l0aEZvcm11bGFDaGVjaygnTmV3IFF1ZXN0aW9uIGFkZGVkIFN1Y2Nlc3NmdWxseS4nKTtcclxuICAgICAgICAgICAgICAgIC8qKiBzZWxlY3QgdGhlIG5ldyBhZGRlZCBpdGVtICovXHJcbiAgICAgICAgICAgICAgICAvKiBhbmltYXRpb24gKi9cclxuICAgICAgICAgICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZGVib3VuY2Uoc2VsZi5qc29uQnVpbGRlckhlbHBlci5hbmltTG9hZCgpLCAxODAwKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHNlbGYuYWRkRHJvcGRvd24oKTtcclxuICAgIH1cclxuICAgIGFkZE5ld1NlY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBpdGVtOiBJdGVtO1xyXG4gICAgICAgIGxldCBzZWN0aW9uID0gbmV3IFNlY3Rpb24oJ05ldyBTZWN0aW9uJywgJ1RoaXMgaXMgRGVzY3JpcHRpb24gb2YgbmV3IHNlY3Rpb24nKTtcclxuICAgICAgICBpdGVtID0gbmV3IEl0ZW0oJ2NoZWNrYm94JywgJ0RlZmF1bHQgUXVlc3Rpb24gVGl0bGUnLCAnRGVmYXVsdCBRdWVzdGlvbiBIZWxwIFRleHQnLCAnUXVlc3Rpb24gUGxhY2Vob2xkZXInKTtcclxuICAgICAgICAvKiBBbmltYXRpb24gSW5pdCAqL1xyXG4gICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUluaXQoKTtcclxuICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS5hZGRTZWN0aW9uKHNlY3Rpb24sIGl0ZW0sIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRQYWdlKCkuX2lkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVsxXSA9IG5ldyBJdGVtKCkuZGVzZXJpYWxpemUocmVzcG9uc2VbMV0pO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5hZGROZXdTZWN0aW9uKHJlc3BvbnNlWzBdLCByZXNwb25zZVsxXSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdFNlY3Rpb25JbmRleCA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXNbMV0uc2VjdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXNbMV0uc2VjdGlvbnNbbGFzdFNlY3Rpb25JbmRleCAtIDFdLnR5cGUgPT09ICdMZWFkRm9ybVEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNlY3Rpb25JbmRleCA9IGxhc3RTZWN0aW9uSW5kZXggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5zZXRTZWxlY3RlZE1vZGVsKCdTZWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnNldFNlbGVjdGVkU2VjdGlvbih0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnBhZ2VzWzFdLnNlY3Rpb25zW2xhc3RTZWN0aW9uSW5kZXggLSAxXSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmluZGluZ0NsYXNzMTogYW55ID0gJy5zZWNfJyArIChsYXN0U2VjdGlvbkluZGV4IC0gMSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNjcm9sbEl0KGJpbmRpbmdDbGFzczEpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIHNlbGYudG9hc3ROb3RpZmljYXRpb25XaXRoRm9ybXVsYUNoZWNrKCdOZXcgU2VjdGlvbiBhZGRlZCBTdWNjZXNzZnVsbHkuJyk7XHJcbiAgICAgICAgICAgICAgICAvKiBhbmltYXRpb24gKi9cclxuICAgICAgICAgICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZGVib3VuY2Uoc2VsZi5qc29uQnVpbGRlckhlbHBlci5hbmltTG9hZCgpLCAxODAwKTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wYW5lbEhlaWdodFVwZGF0ZSgnYWRkU2VjdGlvbicpO1xyXG4gICAgICAgIHNlbGYuYWRkRHJvcGRvd24oKTtcclxuICAgIH1cclxuICAgIHBhbmVsSGVpZ2h0VXBkYXRlKGFjdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcImFkZFNlY3Rpb25cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucG5IZWlnaHQgPSB0aGlzLnBuSGVpZ2h0ICsgNTQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlbGV0ZVNlY3Rpb25cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucG5IZWlnaHQgPSB0aGlzLnBuSGVpZ2h0IC0gNTQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZFF1ZXN0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBuSGVpZ2h0ID0gdGhpcy5wbkhlaWdodCArIDE4O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRDb250cm9sXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBuSGVpZ2h0ID0gdGhpcy5wbkhlaWdodCArIDE4O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWxldGVRdWVzdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbkhlaWdodCA9IHRoaXMucG5IZWlnaHQgLSAxODtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhbmVsTWF4SGVpZ2h0ID0galF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgLSA2MDsgLy9TdWJ0cmFjdGluZyBoZWlnaHQgb2YgbWVudSBhbmQgb3RoZXIgb3B0aW9uIGxpa2UgXCJidWlsZFwiLCBcImNvbmZpZ1wiIGFuZCBcImFuYWx5emVcIlxyXG4gICAgICAgIGlmICh0aGlzLnBuSGVpZ2h0ID4gcGFuZWxNYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgdmFyIHBIZWlnaHQgPSBwYW5lbE1heEhlaWdodDtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucGFuZWwtc2Nyb2xsJykuY3NzKCdoZWlnaHQnLCBwSGVpZ2h0KTtcclxuICAgICAgICAgICAgalF1ZXJ5KCcucGFuZWwtc2Nyb2xsJykuY3NzKCdvdmVyZmxvdy15JywgJ3Njcm9sbCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBhbmVsLXNjcm9sbCcpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbEdBKG9wdDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoIChvcHQpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkFERFNFQ1RJT05cIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnQWRkU2VjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgQWRkIFNlY3Rpb24gQ2xpY2snXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkRFTEVURVNFQ1RJT05cIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnRGVsZXRlU2VjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgRGVsZXRlIFNlY3Rpb24gQ2xpY2snXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkFERFFVRVNUSU9OXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0FkZFF1ZXN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBBZGQgUXVlc3Rpb24gQ2xpY2snXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkRVUExJQ0FURVFVRVNUSU9OXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0R1cGxpY2F0ZVF1ZXN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBEdXBsaWNhdGUgUXVlc3Rpb24gQ2xpY2snXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkRFTEVURVFVRVNUSU9OXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0RlbGV0ZVF1ZXN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBEZWxldGUgUXVlc3Rpb24gQ2xpY2snXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmlzaWJpbGl0eUV5ZShwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgcGFnZS52aXNpYmxlID0gIXBhZ2UudmlzaWJsZTtcclxuICAgICAgICBpZiAoIXBhZ2UudmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnNldFNlbGVjdGVkTW9kZWwoJ1BhZ2UnKTtcclxuICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5zZXRTZWxlY3RlZFBhZ2UodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5wYWdlc1sxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZE91dGNvbWUoKSB7XHJcbiAgICAgICAgbGV0IGxlbmd0aDogc3RyaW5nID0gKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYS5sZW5ndGggKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuYWRkZm9ybXVsYSgnTmV3IE91dGNvbWUnLFxyXG4gICAgICAgICAgICAnb3V0Y29tZScgKyAoKE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEpKSAqIHBhcnNlSW50KGxlbmd0aCkpLFxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9jZG4uZmlsZXBpY2tlci5pby9hcGkvZmlsZS9sSHFtNWdlOVJkeVNOd096S21HQScsICdPdXRjb21lIGRlc2NyaXB0aW9uIHdpbGwgY29tZSBoZXJlJyxcclxuICAgICAgICAgICAgJ1BhZ2UgdGl0bGUgd2lsbCBjb21lIGhlcmUnLCAnQnV0dG9uIFRleHQnLCBDb25maWcuUFJPVE9DT0wrIENvbmZpZy5BUFBfRVhURU5TSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBkdXBsaWNhdGVPdXRjb21lKGN1cnJlbnRPdXRjb21lOiBhbnksIGluZGV4OiBhbnkpIHtcclxuICAgICAgICAvL2FkZCBuZXcgZm9ybXVsYVxyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuYWRkZm9ybXVsYShcclxuICAgICAgICAgICAgY3VycmVudE91dGNvbWUubmFtZSxcclxuICAgICAgICAgICAgY3VycmVudE91dGNvbWUudmFsdWUgKyAnXycrKE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBNYXRoLnJhbmRvbSgpICogMTAwKSArIDEpKSxcclxuICAgICAgICAgICAgY3VycmVudE91dGNvbWUucmVzdWx0LCBcclxuICAgICAgICAgICAgY3VycmVudE91dGNvbWUuaHRtbCxcclxuICAgICAgICAgICAgY3VycmVudE91dGNvbWUuZGVjaW1hbCwgXHJcbiAgICAgICAgICAgIGN1cnJlbnRPdXRjb21lLnVuaXRzLnByZVZhbHVlLCBcclxuICAgICAgICAgICAgY3VycmVudE91dGNvbWUudW5pdHMucG9zdFZhbHVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvL3JlbW92ZSBuZXdseSBhZGRlZCBmb3JtdWxhIGFuZCBhZGQgaXQgYWRqYWNlbnQgdG8gY3VycmVudFxyXG4gICAgICAgIGxldCByZW1vdmVkID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhLnNwbGljZSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGEubGVuZ3RoLTEsIDEpOyBcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGEuc3BsaWNlKGluZGV4ICsgMSwgMCwgcmVtb3ZlZFswXSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
