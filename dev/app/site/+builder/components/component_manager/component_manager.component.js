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
        this.scrollIt(bindingClass, event);
    };
    ComponentManagerComponent.prototype.selectOutcomeSettings = function (event, type) {
        this.jsonBuilderHelper.setSelectedModel(type);
        event.stopPropagation();
        event.preventDefault();
    };
    ComponentManagerComponent.prototype.scrollOutcome = function () {
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            var zoomFactor = 1;
        }
        else {
            zoomFactor = jQuery('temp').css('zoom');
        }
        jQuery(".template-section").animate({ scrollTop: 1000000 }, 1000);
    };
    ComponentManagerComponent.prototype.scrollIt = function (bindingClass1, event) {
        if (jQuery(bindingClass1).length) {
            var position = 0;
            var templateHeight = 0;
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                var zoomFactor = 1;
            }
            else {
                zoomFactor = jQuery('temp').css('zoom');
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
                    templateHeight = jQuery('.template2').height() + 146;
                }
                position = jQuery(bindingClass1).position().top + templateHeight;
                jQuery(".template-section").animate({ scrollTop: position * zoomFactor }, 1000);
            }
            else if (jQuery('.one-page-slider').length > 0) {
                position = jQuery(bindingClass1).position().top;
                jQuery(".template-section").animate({ scrollTop: position * zoomFactor }, 1000);
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
        this.jsonBuilderHelper.getJSONBuilt().addformula('New Outcome', 'outcome' + ((Math.floor((Math.random() * 100) + 1)) * parseInt(length)), 'https://cdn.filepicker.io/api/file/lHqm5ge9RdySNwOzKmGA', 'Outcome description will come here', 'Page title will come here', 'Button Text', 'http://outgrow.us/');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29tcG9uZW50X21hbmFnZXIvY29tcG9uZW50X21hbmFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsa0NBQXdCLCtDQUErQyxDQUFDLENBQUE7QUFDeEUsb0NBQTRCLG9DQUFvQyxDQUFDLENBQUE7QUFDakUsZ0NBQStCLGdDQUFnQyxDQUFDLENBQUE7QUFDaEUsc0JBQTJCLGdDQUFnQyxDQUFDLENBQUE7QUFDNUQsc0JBQW9DLG9CQUFvQixDQUFDLENBQUE7QUFDekQsZ0NBQStCLGdDQUFnQyxDQUFDLENBQUE7QUFDaEUsOENBQWdDLDhDQUE4QyxDQUFDLENBQUE7QUFtQi9FO0lBTUksbUNBQW9CLGlCQUE4QixFQUN0QyxlQUErQixFQUMvQixjQUE4QixFQUM5QixpQkFBa0M7UUFIMUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFpQjtRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JELEdBQUcsQ0FBQyxDQUFhLFVBQXVCLEVBQXZCLEtBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQXZCLGNBQXVCLEVBQXZCLElBQXVCLENBQUM7WUFBcEMsSUFBSSxJQUFJLFNBQUE7WUFDVCxHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLGFBQWEsR0FB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QUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUgsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQWx0Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsVUFBVSxFQUFFLENBQUMsMkJBQU8sQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxrQkFBVSxDQUFDO1lBQ25CLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUU7Z0JBQ1AsaUNBQWlDO2dCQUNqQyx3Q0FBd0M7YUFDM0M7U0FDSixDQUFDOztpQ0FBQTtJQXlzQkYsZ0NBQUM7QUFBRCxDQXZzQkEsQUF1c0JDLElBQUE7QUF2c0JZLGlDQUF5Qiw0QkF1c0JyQyxDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29tcG9uZW50X21hbmFnZXIvY29tcG9uZW50X21hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvY29udHJvbHMvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtdWxhU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm11bGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFJlbW92ZVRhZ3MgfSBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvcGlwZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBJdGVtLCBQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9idWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OSXRlbVRyYWNrZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9KU09OVXBkYXRlSXRlbVRyYWNrZXIuc2VydmljZSc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBib290Ym94OiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LW1hbmFnZXInLFxyXG4gICAgZGlyZWN0aXZlczogW0NvbnRyb2xdLFxyXG4gICAgcGlwZXM6IFtSZW1vdmVUYWdzXSxcclxuICAgIHByb3ZpZGVyczogW0Zvcm11bGFTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50X21hbmFnZXIudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFtcclxuICAgICAgICAnYXNzZXRzL2Nzcy9tQ3VzdG9tU2Nyb2xsYmFyLmNzcycsXHJcbiAgICAgICAgJ2Fzc2V0cy9jc3MvY29tcG9uZW50X21hbmFnZXIuc3R5bGUuY3NzJ1xyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1hbmFnZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICAgIHRlbXBsYXRlSnNvbjogYW55O1xyXG4gICAgdG9hc3RNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBsZWFkU2VjdGlvbjogYW55O1xyXG4gICAgcmVzdWx0U2VjdGlvbjogYW55O1xyXG4gICAgcG5IZWlnaHQ6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2J1aWxkZXJTZXJ2aWNlOiBCdWlsZGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGZvcm11bGFTZXJ2aWNlOiBGb3JtdWxhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9JdGVtVHJhY2tTZXJ2aWNlOiBKU09OSXRlbVRyYWNrZXIpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlSnNvbiA9IGpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpO1xyXG4gICAgICAgIGZvciAobGV0IHBhZ2Ugb2YgdGhpcy50ZW1wbGF0ZUpzb24ucGFnZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgc2VjdGlvbiBpbiBwYWdlLnNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFnZS5zZWN0aW9uc1tzZWN0aW9uXS50eXBlID09PSAnUmVzdWx0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0U2VjdGlvbiA9IHBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocGFnZS5zZWN0aW9uc1tzZWN0aW9uXS50eXBlID09PSAnTGVhZEZvcm1RJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVhZFNlY3Rpb24gPSBwYWdlLnNlY3Rpb25zW3NlY3Rpb25dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvYXN0Tm90aWZpY2F0aW9uV2l0aEZvcm11bGFDaGVjayhiYXNlTWVzc2FnZTogYW55KSB7XHJcbiAgICAgICAgbGV0IHRvYXN0TWVzc2FnZTogYW55ID0gYmFzZU1lc3NhZ2U7XHJcbiAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHRvYXN0TWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnBuSGVpZ2h0ID0galF1ZXJ5KFwiLnBhbmVsLXNjcm9sbFwiKS5oZWlnaHQoKTtcclxuICAgICAgICBqUXVlcnkoJy5zb3J0YWJsZTEnKS5zb3J0YWJsZSh7XHJcbiAgICAgICAgICAgIGNvbm5lY3RXaXRoOiAndWwnLFxyXG4gICAgICAgICAgICAvL2N1cnNvcjogXCJtb3ZlXCIsXHJcbiAgICAgICAgICAgIC8vaGVscGVyOiBcImNsb25lXCIsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICAgICAgICAgIHJldmVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcm9sbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBvcmRlciA9IGpRdWVyeSh0aGlzKS5zb3J0YWJsZSgndG9BcnJheScsIHsgYXR0cmlidXRlOiAnZGF0YS1vcmRlcicgfSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc29yZGVyID0galF1ZXJ5KHRoaXMpLnNvcnRhYmxlKCd0b0FycmF5JywgeyBhdHRyaWJ1dGU6ICdkYXRhLW9kcicgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAob3JkZXIubGVuZ3RoID09IHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRTZWN0aW9uKCkuaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5zb3J0KHNvcmRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogLS0gVXBkYXRlIHNhbWUgc2VjdGlvbiByZW9yZGVydGluZyAgLS0gKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogQW5pbWF0aW9uIEluaXQgKi9cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmFuaW1Jbml0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2J1aWxkZXJTZXJ2aWNlLnVwZGF0ZUludHJhU2VjdGlvbk9yZGVyKG9yZGVyLCBqUXVlcnkodGhpcykuYXR0cignZGF0YS1zZWN0aW9uJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRvYXN0Tm90aWZpY2F0aW9uV2l0aEZvcm11bGFDaGVjaygnUmUtb3JkZXJlZCBzdWNjZXNzZnVsbHkuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBhbmltYXRpb24gKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZGVib3VuY2Uoc2VsZi5qc29uQnVpbGRlckhlbHBlci5hbmltTG9hZCgpLCAxODAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIC0tIFVwZGF0ZSBzYW1lIHNlY3Rpb24gb3JkZXJ0aW5nIEVuZCAgLS0gKi9cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG91dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVjZWl2ZTogZnVuY3Rpb24gKGV2ZW50OiBhbnksIHVpOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBvcmRlciA9IGpRdWVyeSh0aGlzKS5zb3J0YWJsZSgndG9BcnJheScsIHsgYXR0cmlidXRlOiAnZGF0YS1vcmRlcicgfSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc29yZGVyID0galF1ZXJ5KHRoaXMpLnNvcnRhYmxlKCd0b0FycmF5JywgeyBhdHRyaWJ1dGU6ICdkYXRhLW9kcicgfSk7XHJcbiAgICAgICAgICAgICAgICAvKiAtLSBVcGRhdGUgc2FtZSBzZWN0aW9uIHJlb3JkZXJ0aW5nICAtLSAqL1xyXG4gICAgICAgICAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5tdWx0aVNlY3Rpb25Tb3J0KGpRdWVyeSh0aGlzKS5hdHRyKCdkYXRhLXNlYycpLCB1aS5pdGVtLmluZGV4KCksIHNvcmRlcik7XHJcbiAgICAgICAgICAgICAgICAvKiBBbmltYXRpb24gSW5pdCAqL1xyXG4gICAgICAgICAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5hbmltSW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fYnVpbGRlclNlcnZpY2UudXBkYXRlSW50ZXJTZWN0aW9uT3JkZXIob3JkZXIsIGpRdWVyeSh0aGlzKS5hdHRyKCdkYXRhLXNlY3Rpb24nKSlcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudG9hc3ROb3RpZmljYXRpb25XaXRoRm9ybXVsYUNoZWNrKCdSZS1vcmRlcmVkIHN1Y2Nlc3NmdWxseS4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkU2VjdGlvbigpLml0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBzZWxmLmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkU2VjdGlvbigpLnRpdGxlICsgJyBzZWN0aW9uIHdhcyByZW1vdmVkIHN1Y2Nlc3NmdWxseS4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5EZWxldGVTZWN0aW9uKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGFuaW1hdGlvbiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmRlYm91bmNlKHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUxvYWQoKSwgMTgwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLyogLS0gVXBkYXRlIHNhbWUgc2VjdGlvbiBvcmRlcnRpbmcgRW5kICAtLSAqL1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRpc2FibGVTZWxlY3Rpb24oKTtcclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICAgICAgICBpZiAoIWpRdWVyeSgnLmFkZC1wYXJlbnQnKS5pcyhlLnRhcmdldClcclxuICAgICAgICAgICAgICAgICYmIGpRdWVyeSgnLmFkZC1kcm9wZG93bi1tZW51JykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5hZGQtcGFyZW50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8galF1ZXJ5KCcuZHJvcGRvd24tbWVudS1wYXJlbnQnKS5jbGljayhmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgLy8gICAgIGpRdWVyeSh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudScpLnRvZ2dsZSgpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLmluaXRpYWxpemUoKTtcclxuICAgICAgICAvKmNhbnZhcyBzbGltc2Nyb2xsICovXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVNjcm9sbCgpO1xyXG4gICAgICAgIGpRdWVyeSh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi50ZW1wbGF0ZVNjcm9sbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qU2Nyb2xsZXIgZm9yIHJpZ2h0IHBhbmVsIGFuZCBsZWZ0IHBhbmVsICovXHJcbiAgICAgICAgdmFyIHBhbmVsSGVpZ2h0ID0galF1ZXJ5KFwiLnBhbmVsLXNjcm9sbFwiKS5oZWlnaHQoKTtcclxuICAgICAgICB3aW5kb3dTY3JvbGwoKTtcclxuICAgICAgICBqUXVlcnkod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1Njcm9sbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZ1bmN0aW9uIHdpbmRvd1Njcm9sbCgpIHtcclxuICAgICAgICAgICAgdmFyIHBhbmVsTWF4SGVpZ2h0ID0galF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgLSA2MDsgLy9TdWJ0cmFjdGluZyBoZWlnaHQgb2YgbWVudSBhbmQgb3RoZXIgb3B0aW9uIGxpa2UgXCJidWlsZFwiLCBcImNvbmZpZ1wiIGFuZCBcImFuYWx5emVcIlxyXG4gICAgICAgICAgICAvLyBpZiAocGFuZWxIZWlnaHQgPiBwYW5lbE1heEhlaWdodCkge1xyXG4gICAgICAgICAgICB2YXIgcEhlaWdodCA9IHBhbmVsTWF4SGVpZ2h0O1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wYW5lbC1zY3JvbGwnKS5jc3MoJ292ZXJmbG93LXknLCAnc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBhbmVsLXNjcm9sbCcpLmNzcygnaGVpZ2h0JywgcEhlaWdodCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnc2Nyb2xsIGNhbmNlbCcpO1xyXG4gICAgICAgICAgICAvLyAgICAgalF1ZXJ5KCcucGFuZWwtc2Nyb2xsJykuY3NzKCdvdmVyZmxvdy15JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAvLyAgICAgalF1ZXJ5KCcucGFuZWwtc2Nyb2xsJykuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmFtZUVkaXQoKTtcclxuXHJcbiAgICB9XHJcbiAgICBuYW1lRWRpdCgpIHtcclxuICAgICAgICBqUXVlcnkoXCIuZWRpdF9uYW1lX2xpbmtfc2l0ZW1hcFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKChqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnLmVkaXQtbmFtZS1zaXRlbWFwJykuaGFzQ2xhc3MoJ2hpZGUnKSkpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuc2VjdGlvbi1zdWJoZWFkJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuZWRpdC1uYW1lLXNpdGVtYXAnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5lZGl0LW5hbWUtc2l0ZW1hcCcpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vbihcImZvY3Vzb3V0XCIsIFwiLmVkaXQtbmFtZS1zaXRlbWFwXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5zZWN0aW9uLXN1YmhlYWQnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZCgnLmVkaXQtbmFtZS1zaXRlbWFwJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRlbGV0ZVJlc3VsdChmb3JtdWxhSW5kZXg6IGFueSwgcmVzdWx0Q29udHJvbDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0U2VjdGlvbi5pdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLmRlbGV0ZUl0ZW0ocmVzdWx0Q29udHJvbC5faWQsIHRoaXMucmVzdWx0U2VjdGlvbi5faWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudGl0bGUgIT0gJ05vdCBEZWxldGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmRlbGV0ZVJlc3VsdFNlY3Rpb24odGhpcy5yZXN1bHRTZWN0aW9uLCBmb3JtdWxhSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGEuc3BsaWNlKGZvcm11bGFJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignUmVzdWx0IERlbGV0ZWQgU3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlT3V0Y29tZShmb3JtdWxhSW5kZXg6IGFueSkge1xyXG4gICAgICAgIGxldCBzZWxmOiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGJvb3Rib3guZGlhbG9nKHtcclxuICAgICAgICAgICAgc2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9uZS1saW5lLWJvb3Rib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vdGJveC1ib2R5LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3I8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib290Ym94LWJvZHktcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgb3V0Y29tZT88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgYnV0dG9uczoge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTm9cIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuLWNhbmNlbCBidG4tY2FuY2VsLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlllc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLW9rIGJ0bi1ob3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtdWxhVmFsdWU6IHN0cmluZyA9IHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYVtmb3JtdWxhSW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdmb3JtdWxhVmFsdWUnLGZvcm11bGFWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZSgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW06IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PSAnc2VsZWN0Ym94JyB8fCBpdGVtLnR5cGUgPT0gJ3JhZGlvX2J1dHRvbid8fCBpdGVtLnR5cGUgPT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb246IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZTogYW55ID0gb3B0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSAmJiB0eXBlICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZUFycmF5ID0gdHlwZS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlSW5kZXggPSB0eXBlQXJyYXkuaW5kZXhPZihmb3JtdWxhVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlSW5kZXggIT0gKC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVBcnJheS5zcGxpY2UodmFsdWVJbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gdHlwZUFycmF5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fSXRlbVRyYWNrU2VydmljZS5zZXRVblNhdmVkSXRlbXMoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYS5zcGxpY2UoZm9ybXVsYUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5zZXRTZWxlY3RlZEZvcm11bGEoc2VsZi5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhW2Zvcm11bGFJbmRleCAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMZWFkKHBhZ2U6IFBhZ2UpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy8gdGhpcy5sZWFkU2VjdGlvbiA9IHRoaXMuZ2V0TGVhZFNlY3Rpb24ocGFnZSk7XHJcbiAgICAgICAgLy90b2dnbGVsZWFkZm9ybVxyXG4gICAgICAgIHRoaXMubGVhZFNlY3Rpb24udmlzaWJsZSA9ICF0aGlzLmxlYWRTZWN0aW9uLnZpc2libGU7XHJcbiAgICAgICAgdGhpcy5sZWFkU2VjdGlvbi5pdGVtc1swXS52aXNpYmxlID0gIXRoaXMubGVhZFNlY3Rpb24uaXRlbXNbMF0udmlzaWJsZTtcclxuICAgICAgICBpZiAodGhpcy5sZWFkU2VjdGlvbi52aXNpYmxlICYmIHRoaXMubGVhZFNlY3Rpb24uaXRlbXNbMF0udmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmhpZGVPdGhlckxlYWRGb3JtMSgpO1xyXG4gICAgICAgICAgICAvL2dldCBpbmRleCB0byBzY3JvbGwgbGVhZCBhdCB0aGF0IHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGpRdWVyeS5pbkFycmF5KHRoaXMubGVhZFNlY3Rpb24sIHBhZ2Uuc2VjdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAoIWluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgc2VsZi5zY3JvbGxJdCgnLnBhZ2VfMCcpOyB9LCAyMDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHNlbGYuc2Nyb2xsSXQoJy5zZWNfJyArIChwYWdlLnNlY3Rpb25zLmxlbmd0aCAtIDEpKTsgfSwgMjAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLmFkZERyb3Bkb3duKCk7XHJcbiAgICB9XHJcbiAgICAvLyBnZXRMZWFkU2VjdGlvbihwYWdlOiBQYWdlKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgc2VjdGlvbiBpbiBwYWdlLnNlY3Rpb25zKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChwYWdlLnNlY3Rpb25zW3NlY3Rpb25dLnR5cGUgPT09ICdMZWFkRm9ybVEnKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmxlYWRTZWN0aW9uID0gcGFnZS5zZWN0aW9uc1tzZWN0aW9uXTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5sZWFkU2VjdGlvbjtcclxuICAgIC8vIH1cclxuICAgIC8vIGdldFJlc3VsdFNlY3Rpb24ocGFnZTogUGFnZSkge1xyXG4gICAgLy8gICAgIGZvciAobGV0IHNlY3Rpb24gaW4gcGFnZS5zZWN0aW9ucykge1xyXG4gICAgLy8gICAgICAgICBpZiAocGFnZS5zZWN0aW9uc1tzZWN0aW9uXS50eXBlID09PSAnUmVzdWx0Jykge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5yZXN1bHRTZWN0aW9uID0gcGFnZS5zZWN0aW9uc1tzZWN0aW9uXTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5yZXN1bHRTZWN0aW9uO1xyXG4gICAgLy8gfVxyXG4gICAgYWRkUmVzdWx0KHBhZ2U6IFBhZ2UpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLy8gdGhpcy5yZXN1bHRTZWN0aW9uID0gdGhpcy5nZXRSZXN1bHRTZWN0aW9uKHBhZ2UpO1xyXG4gICAgICAgIGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGEubGVuZ3RoIDw9IHRoaXMucmVzdWx0U2VjdGlvbi5pdGVtcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuYWRkRm9ybXVsYSgpO1xyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUluaXQoKTtcclxuICAgICAgICBsZXQgSXRlbVJlc3VsdDogYW55ID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5hZGRSZXN1bHRTZWN0aW9uKHRoaXMucmVzdWx0U2VjdGlvbik7XHJcbiAgICAgICAgLy8gLyogc2F2ZSByZXN1bHQgb3V0cHV0IGl0ZW0gaW4gcmVzdWx0UGFnZSAqL1xyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLmFkZEl0ZW0odGhpcy5yZXN1bHRTZWN0aW9uLl9pZCwgSXRlbVJlc3VsdC5pdGVtLCB0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXMubGVuZ3RoIC0gMSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5uYW1lRWRpdCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0U2VjdGlvbi5pdGVtc1tJdGVtUmVzdWx0LmluZGV4XSA9IG5ldyBJdGVtKCkuZGVzZXJpYWxpemUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5kZWJvdW5jZSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmFuaW1Mb2FkKCksIDE4MDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRHJvcGRvd24oKSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuYWRkLXBhcmVudC5vcHRpb24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICB0ZW1wbGF0ZVNjcm9sbCgpIHtcclxuICAgICAgICB2YXIgcmlnaHRQb3NpdGlvbiA9IGpRdWVyeSgnI3NpZGViYXInKS5jc3MoJ3JpZ2h0Jyk7XHJcbiAgICAgICAgdmFyIGNvcnJlY3RlZFZpZXdwb3J0VyA9IChmdW5jdGlvbiAod2luOiBhbnksIGRvY0VsZW06IGFueSkge1xyXG4gICAgICAgICAgICB2YXIgbU0gPSB3aW5bJ21hdGNoTWVkaWEnXSB8fCB3aW5bJ21zTWF0Y2hNZWRpYSddXHJcbiAgICAgICAgICAgICAgICAsIGNsaWVudCA9IGRvY0VsZW1bJ2NsaWVudFdpZHRoJ11cclxuICAgICAgICAgICAgICAgICwgaW5uZXIgPSB3aW5bJ2lubmVyV2lkdGgnXVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1NICYmIGNsaWVudCA8IGlubmVyICYmIHRydWUgPT09IG1NKCcobWluLXdpZHRoOicgKyBpbm5lciArICdweCknKVsnbWF0Y2hlcyddXHJcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdpblsnaW5uZXJXaWR0aCddOyB9XHJcbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY0VsZW1bJ2NsaWVudFdpZHRoJ107IH1cclxuICAgICAgICB9ICh3aW5kb3csIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkpO1xyXG4gICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpID4gOTkyKSB7IHZhciBtaW5XaW5XaWR0aCA9IGNvcnJlY3RlZFZpZXdwb3J0VygpIC0gNTUwOyB9XHJcbiAgICAgICAgZWxzZSB7IHZhciBtaW5XaW5XaWR0aCA9IGNvcnJlY3RlZFZpZXdwb3J0VygpIC0gMDsgfVxyXG5cclxuICAgICAgICBpZiAoY29ycmVjdGVkVmlld3BvcnRXKCkgPiAxODUwKSB7IHZhciB6b29tRmFjdG9yID0gMC44OyB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29ycmVjdGVkVmlld3BvcnRXKCkgPCA5OTIpIHsgdmFyIHpvb21GYWN0b3IgPSAxOyB9XHJcbiAgICAgICAgZWxzZSB7IHZhciB6b29tRmFjdG9yID0gMC43OyB9XHJcblxyXG4gICAgICAgIGlmIChyaWdodFBvc2l0aW9uID09IFwiMHB4XCIpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuY3NzKCd3aWR0aCcsIG1pbldpbldpZHRoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmJ1aWxkaW5nXCIpLmNzcygnd2lkdGgnLCBtaW5XaW5XaWR0aCk7XHJcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShcInRlbXBcIikuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3NjYWxlKCcgKyB6b29tRmFjdG9yICsgJyknLFxyXG4gICAgICAgICAgICAgICAgICAgICdmbG9hdCc6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAnbWFyZ2luLWJvdHRvbSc6ICctMjEzMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICc2MHB4IDBweCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwidGVtcFwiKS5jc3MoJ3pvb20nLCB6b29tRmFjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyaWdodFBvc2l0aW9uID09IFwiLTI4NXB4XCIpIHtcclxuICAgICAgICAgICAgdmFyIG1pbldpbldpZHRoID0gY29ycmVjdGVkVmlld3BvcnRXKCkgLSAyNjQ7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi50ZW1wbGF0ZS1zZWN0aW9uXCIpLmFuaW1hdGUoeyB3aWR0aDogbWluV2luV2lkdGggfSwgMzAwKTtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuY3NzKCdvdmVyZmxvdy14JywgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5idWlsZGluZ1wiKS5jc3MoJ3dpZHRoJywgbWluV2luV2lkdGgpO1xyXG4gICAgICAgICAgICBpZiAoY29ycmVjdGVkVmlld3BvcnRXKCkgPiAxODUwKSB7IGpRdWVyeShcInRlbXBcIikuY3NzKCd6b29tJywgXCIuOTdcIik7IH1cclxuICAgICAgICAgICAgZWxzZSB7IGpRdWVyeShcInRlbXBcIikuY3NzKCd6b29tJywgXCIuOTNcIik7IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChqUXVlcnkod2luZG93KS53aWR0aCgpID4gOTkyKSB7IHZhciB3aW5XaWR0aCA9IGNvcnJlY3RlZFZpZXdwb3J0VygpIC0gMjY0OyB9XHJcbiAgICAgICAgZWxzZSB7IHZhciB3aW5XaWR0aCA9IGNvcnJlY3RlZFZpZXdwb3J0VygpIC0gMDsgfVxyXG4gICAgICAgIGpRdWVyeShcInRlbXBcIikuY3NzKCd3aWR0aCcsIHdpbldpZHRoKTtcclxuICAgICAgICB2YXIgd2luSGVpZ2h0ID0galF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgLSA2MDtcclxuICAgICAgICBqUXVlcnkoXCIudGVtcGxhdGUtc2VjdGlvblwiKS5jc3MoJ2hlaWdodCcsIHdpbkhlaWdodCk7XHJcbiAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuY3NzKCdwb3NpdGlvbicsIFwiZml4ZWRcIik7XHJcbiAgICB9XHJcbiAgICBnZXRWaXNpYmxlU2VjdGlvbnMocGFnZTogUGFnZSk6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gcGFnZS5zZWN0aW9ucy5maWx0ZXIoKHNlY3Rpb246IGFueSkgPT4gc2VjdGlvbi52aXNpYmxlKTtcclxuICAgIH1cclxuICAgIGdldExlYWRGb3JtVmlzaWJpbGl0eShzZWN0aW9uOiBTZWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IHZpc2libGl0eTogYm9vbGVhbjtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHNlY3Rpb24uaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2xlYWRmb3JtJykge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJsaXR5ID0gaXRlbS52aXNpYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2aXNpYmxpdHk7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RDb250cm9sKGNvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuc2V0U2VsZWN0ZWRDb250cm9sKGNvbnRyb2wpO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0TW9kZWwoZXZlbnQ6IGFueSwgdHlwZTogYW55LCBDbGFzcz86IGFueSwgaW5kZXg/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnNldFNlbGVjdGVkTW9kZWwodHlwZSk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5wYWdlc1swXS50eXBlID09ICdMYW5kaW5nJ1xyXG4gICAgICAgICAgICAmJiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnBhZ2VzWzBdLnZpc2libGUgPT0gZmFsc2UgJiYgdHlwZSA9PSAnUGFnZScpXHJcbiAgICAgICAgICAgIGluZGV4ID0gaW5kZXggLSAxO1xyXG4gICAgICAgIC8vZm9yIGJyaW5naW5nIHNlbGVjdGVkIHRlbXBsYXRlIGFyZWEgdXBcclxuICAgICAgICBsZXQgYmluZGluZ0NsYXNzID0gQ2xhc3MgKyBpbmRleDtcclxuICAgICAgICBpZiAoalF1ZXJ5KCcuc291bmQtY2xvdWQnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnNvdW5kLWNsb3VkJykuYWRkQ2xhc3MoJ3RlbXBsYXRlMicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3Njcm9sbGFibGUgY29kZSBtb3ZlZCB0byBmdW5jdGlvbiBzY3JvbGxJdCgpXHJcbiAgICAgICAgdGhpcy5zY3JvbGxJdChiaW5kaW5nQ2xhc3MsIGV2ZW50KTtcclxuICAgICAgICAvL3Njcm9sbGFibGUgY29kZSBtb3ZlZCB0byBmdW5jdGlvbiBzY3JvbGxJdCgpXHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0T3V0Y29tZVNldHRpbmdzKGV2ZW50OiBhbnksIHR5cGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuc2V0U2VsZWN0ZWRNb2RlbCh0eXBlKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIH1cclxuICAgIHNjcm9sbE91dGNvbWUoKXtcclxuICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgem9vbUZhY3RvciA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB6b29tRmFjdG9yID0galF1ZXJ5KCd0ZW1wJykuY3NzKCd6b29tJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBqUXVlcnkoXCIudGVtcGxhdGUtc2VjdGlvblwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAxMDAwMDAwIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gICAgc2Nyb2xsSXQoYmluZGluZ0NsYXNzMTogc3RyaW5nLCBldmVudD86IGFueSkgeyAgXHJcbiAgICAgICAgaWYgKGpRdWVyeShiaW5kaW5nQ2xhc3MxKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlSGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHpvb21GYWN0b3IgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgem9vbUZhY3RvciA9IGpRdWVyeSgndGVtcCcpLmNzcygnem9vbScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkoJy5zb3VuZC1jbG91ZCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnNvdW5kLWNsb3VkJykuYWRkQ2xhc3MoJ3RlbXBsYXRlMicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50ICYmICgoZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9PSAnV0VMQ09NRSBTQ1JFRU4nKSB8fCAoZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9PSAnTGVhZCBHZW5lcmF0aW9uJykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVIZWlnaHQgPSAtalF1ZXJ5KGJpbmRpbmdDbGFzczEpLnBvc2l0aW9uKCkudG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQgJiYgKGV2ZW50LnRhcmdldC5pbm5lclRleHQgPT0gJ1FVRVNUSU9OTkFJUkUnIHx8IGV2ZW50LnRhcmdldC5pbm5lclRleHQgPT0gJ1JFU1VMVCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVIZWlnaHQgPSBqUXVlcnkoJy50ZW1wbGF0ZTInKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgeyB0ZW1wbGF0ZUhlaWdodCA9IGpRdWVyeSgnLnRlbXBsYXRlMicpLmhlaWdodCgpICsgMTQ2OyB9XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGpRdWVyeShiaW5kaW5nQ2xhc3MxKS5wb3NpdGlvbigpLnRvcCArIHRlbXBsYXRlSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gKiB6b29tRmFjdG9yIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGpRdWVyeSgnLm9uZS1wYWdlLXNsaWRlcicpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0galF1ZXJ5KGJpbmRpbmdDbGFzczEpLnBvc2l0aW9uKCkudG9wO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KFwiLnRlbXBsYXRlLXNlY3Rpb25cIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogcG9zaXRpb24gKiB6b29tRmFjdG9yIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2Nyb2xsRWRpdG9yKGJpbmRpbmdDbGFzczE6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChqUXVlcnkoYmluZGluZ0NsYXNzMSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IGpRdWVyeShiaW5kaW5nQ2xhc3MxKS5wb3NpdGlvbigpLnRvcDtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuc2lkZS1zY3JvbGwnKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBwb3NpdGlvbiB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBPbkRlbGV0ZUNvbnRyb2woc2VjdGlvbkluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgdGhhdDogYW55ID0gdGhpcztcclxuICAgICAgICBib290Ym94LmRpYWxvZyh7XHJcbiAgICAgICAgICAgIHNpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvbmUtbGluZS1ib290Ym94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb3Rib3gtYm9keS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXQtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vdGJveC1ib2R5LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiXCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHF1ZXN0aW9uPzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICBidXR0b25zOiB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYnRuLWNhbmNlbCBidG4tY2FuY2VsLWhvdmVyXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgc3VjY2Vzczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0biBidG4tb2sgYnRuLWhvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5EZWxldGVDb250cm9sKHNlY3Rpb25JbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgT25EZWxldGVTZWN0aW9uKCkge1xyXG4gICAgICAgIHZhciB0aGF0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGJvb3Rib3guZGlhbG9nKHtcclxuICAgICAgICAgICAgc2l6ZTogJ3NtYWxsJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9uZS1saW5lLWJvb3Rib3hcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib290Ym94LWJvZHktbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0LWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb3Rib3gtYm9keS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm9uZS1saW5lLXBhcmFcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgc2VjdGlvbj88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgYnV0dG9uczoge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImJ0bi1jYW5jZWwgYnRuLWNhbmNlbC1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJPS1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLW9rIGJ0bi1ob3ZlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuRGVsZXRlU2VjdGlvbignU2VjdGlvbiBEZWxldGVkIFN1Y2Nlc3NmdWxseS4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBEZWxldGVDb250cm9sKHNlY3Rpb25JbmRleDogYW55KSB7XHJcbiAgICAgICAgdmFyIHRoYXQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHNlY3Rpb25JZDogYW55ID0gbnVsbCxcclxuICAgICAgICAgICAgaXRlbUlkOiBhbnkgPSB0aGF0Lmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkQ29udHJvbCgpLl9pZDtcclxuICAgICAgICBpZiAodGhhdC5qc29uQnVpbGRlckhlbHBlci5zZWxlY3RlZFNlY3Rpb24uaXRlbXMubGVuZ3RoID09IDEpXHJcbiAgICAgICAgICAgIHNlY3Rpb25JZCA9IHRoYXQuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRTZWN0aW9uKCkuX2lkO1xyXG4gICAgICAgIC8qIEFuaW1hdGlvbiBJbml0ICovXHJcbiAgICAgICAgdGhhdC5qc29uQnVpbGRlckhlbHBlci5hbmltSW5pdCgpO1xyXG4gICAgICAgIHRoYXQuX2J1aWxkZXJTZXJ2aWNlLnJlbW92ZShpdGVtSWQsIHNlY3Rpb25JZCkgIC8vVE9ETyB1ZHBhdGUgc2VjdGlvbiBJRFxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5qc29uQnVpbGRlckhlbHBlci5kZWxldGVDb250cm9sKCk7XHJcbiAgICAgICAgICAgICAgICAvL3RvYXN0IHN0YXJ0XHJcbiAgICAgICAgICAgICAgICBsZXQgYmluZGluZ0NsYXNzMSA9ICcuc2VjXycgKyBzZWN0aW9uSW5kZXggKyAnX3FfMCc7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNjcm9sbEl0KGJpbmRpbmdDbGFzczEpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC50b2FzdE5vdGlmaWNhdGlvbldpdGhGb3JtdWxhQ2hlY2soJ1F1ZXN0aW9uIERlbGV0ZWQgU3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAgICAgICAgICAgLy8gdG9hc3QgZW5kXHJcbiAgICAgICAgICAgICAgICAvKiBhbmltYXRpb24gKi9cclxuICAgICAgICAgICAgICAgIHRoYXQuanNvbkJ1aWxkZXJIZWxwZXIuZGVib3VuY2UodGhhdC5qc29uQnVpbGRlckhlbHBlci5hbmltTG9hZCgpLCAxODAwKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgRGVsZXRlU2VjdGlvbihtZXNzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIHRoYXQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzZWN0aW9uSWQ6IGFueSA9IHRoYXQuanNvbkJ1aWxkZXJIZWxwZXIuc2VsZWN0ZWRTZWN0aW9uLl9pZDtcclxuICAgICAgICAvKiBBbmltYXRpb24gSW5pdCAqL1xyXG4gICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUluaXQoKTtcclxuICAgICAgICB0aGF0Ll9idWlsZGVyU2VydmljZS5yZW1vdmVTZWN0aW9uKHNlY3Rpb25JZCkgIC8vVE9ETyB1ZHBhdGUgc2VjdGlvbiBJRFxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy90b2FzdCBzdGFydFxyXG4gICAgICAgICAgICAgICAgc2VsZi50b2FzdE5vdGlmaWNhdGlvbldpdGhGb3JtdWxhQ2hlY2sobWVzc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gdG9hc3QgZW5kXHJcbiAgICAgICAgICAgICAgICB0aGF0Lmpzb25CdWlsZGVySGVscGVyLmRlbGV0ZVNlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIC8qIGFuaW1hdGlvbiAqL1xyXG4gICAgICAgICAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5kZWJvdW5jZShzZWxmLmpzb25CdWlsZGVySGVscGVyLmFuaW1Mb2FkKCksIDE4MDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgLy8gdGhpcy5wYW5lbEhlaWdodFVwZGF0ZShcImRlbGV0ZVNlY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgICBhZGRDb250cm9sKHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgaXRlbTogSXRlbTtcclxuICAgICAgICBsZXQgaW5kZXggPSBqUXVlcnkuaW5BcnJheSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkQ29udHJvbCgpLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkU2VjdGlvbigpLml0ZW1zKTtcclxuICAgICAgICBpZiAodHlwZSA9PSAnTmV3Jykge1xyXG4gICAgICAgICAgICBpdGVtID0gbmV3IEl0ZW0odGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZENvbnRyb2woKS50eXBlLFxyXG4gICAgICAgICAgICAgICAgJ0RlZmF1bHQgUXVlc3Rpb24gVGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgJ0RlZmF1bHQgUXVlc3Rpb24gSGVscCBUZXh0JyxcclxuICAgICAgICAgICAgICAgICdEZWZhdWx0IFBsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRDb250cm9sKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIEFuaW1hdGlvbiBJbml0ICovXHJcbiAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5hbmltSW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLmFkZEl0ZW0odGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZFNlY3Rpb24oKS5faWQsIGl0ZW0sIGluZGV4ICsgMSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0l0ZW0gPSBuZXcgSXRlbSgpLmRlc2VyaWFsaXplKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuYWRkQ29udHJvbChuZXdJdGVtLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRvYXN0Tm90aWZpY2F0aW9uV2l0aEZvcm11bGFDaGVjaygnTmV3IFF1ZXN0aW9uIGFkZGVkIFN1Y2Nlc3NmdWxseS4nKTtcclxuICAgICAgICAgICAgICAgIC8qKiBzZWxlY3QgdGhlIG5ldyBhZGRlZCBpdGVtICovXHJcbiAgICAgICAgICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLnNldFNlbGVjdGVkQ29udHJvbChuZXdJdGVtKTtcclxuICAgICAgICAgICAgICAgIC8qIGFuaW1hdGlvbiAqL1xyXG4gICAgICAgICAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5kZWJvdW5jZShzZWxmLmpzb25CdWlsZGVySGVscGVyLmFuaW1Mb2FkKCksIDE4MDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBhZGROZXdRdWVzdGlvbigpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGl0ZW06IEl0ZW07XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGVtcGxhdGVUeXBlID09ICdOdW1lcmljYWwnKVxyXG4gICAgICAgICAgICBpdGVtID0gbmV3IEl0ZW0oJ2NoZWNrYm94JywgJ05ldyBRdWVzdGlvbicsICdEZWZhdWx0IFF1ZXN0aW9uIEhlbHAgVGV4dCcsICdRdWVzdGlvbiBQbGFjZWhvbGRlcicpO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGVtcGxhdGVUeXBlID09ICdSZWNvbW1lbmRhdGlvbicpXHJcbiAgICAgICAgICAgIGl0ZW0gPSBuZXcgSXRlbSgncmFkaW9fYnV0dG9uJywgJ05ldyBRdWVzdGlvbicsICdEZWZhdWx0IFF1ZXN0aW9uIEhlbHAgVGV4dCcsICdRdWVzdGlvbiBQbGFjZWhvbGRlcicpO1xyXG5cclxuICAgICAgICBsZXQgbGFzdFNlY3Rpb25JbmRleCA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXNbMV0uc2VjdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnBhZ2VzWzFdLnNlY3Rpb25zW2xhc3RTZWN0aW9uSW5kZXggLSAxXS50eXBlID09PSAnTGVhZEZvcm1RJykge1xyXG4gICAgICAgICAgICBsYXN0U2VjdGlvbkluZGV4ID0gbGFzdFNlY3Rpb25JbmRleCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWNJZCA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXNbMV0uc2VjdGlvbnNbbGFzdFNlY3Rpb25JbmRleCAtIDFdLl9pZDtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnBhZ2VzWzFdLnNlY3Rpb25zW2xhc3RTZWN0aW9uSW5kZXggLSAxXS5pdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgLyogQW5pbWF0aW9uIEluaXQgKi9cclxuICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmFuaW1Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlclNlcnZpY2UuYWRkSXRlbShzZWNJZCwgaXRlbSwgaW5kZXggKyAxKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3SXRlbSA9IG5ldyBJdGVtKCkuZGVzZXJpYWxpemUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5hZGROZXdRdWVzdGlvbihuZXdJdGVtLCBsYXN0U2VjdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgICAgIC8vIHNlbGVjdCBvbiBhZGQgb2YgcXVlc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5zZXRTZWxlY3RlZE1vZGVsKCdDb250cm9sJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnNldFNlbGVjdGVkU2VjdGlvbih0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnBhZ2VzWzFdLnNlY3Rpb25zW2xhc3RTZWN0aW9uSW5kZXggLSAxXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnNldFNlbGVjdGVkQ29udHJvbChuZXdJdGVtKTtcclxuICAgICAgICAgICAgICAgIGxldCBiY2xhc3NzID0gXCIjXCIgKyB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnBhZ2VzWzFdLnNlY3Rpb25zW2xhc3RTZWN0aW9uSW5kZXggLSAxXS5faWQ7XHJcbiAgICAgICAgICAgICAgICAvL3Njcm9sbCB0byBuZXdseSBhZGRlZCBxdWVzXHJcbiAgICAgICAgICAgICAgICBsZXQgYmluZGluZ0NsYXNzMiA9ICcuc2VjXycgKyAobGFzdFNlY3Rpb25JbmRleCAtIDEpICsgJ19xXycgKyBpbmRleCArICcnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoYXQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgdGhhdC5zY3JvbGxJdChiaW5kaW5nQ2xhc3MyKTsgfSwgNTApO1xyXG4gICAgICAgICAgICAgICAgc2VsZi50b2FzdE5vdGlmaWNhdGlvbldpdGhGb3JtdWxhQ2hlY2soJ05ldyBRdWVzdGlvbiBhZGRlZCBTdWNjZXNzZnVsbHkuJyk7XHJcbiAgICAgICAgICAgICAgICAvKiogc2VsZWN0IHRoZSBuZXcgYWRkZWQgaXRlbSAqL1xyXG4gICAgICAgICAgICAgICAgLyogYW5pbWF0aW9uICovXHJcbiAgICAgICAgICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmRlYm91bmNlKHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUxvYWQoKSwgMTgwMCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZWxmLmFkZERyb3Bkb3duKCk7XHJcbiAgICB9XHJcbiAgICBhZGROZXdTZWN0aW9uKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgaXRlbTogSXRlbTtcclxuICAgICAgICBsZXQgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKCdOZXcgU2VjdGlvbicsICdUaGlzIGlzIERlc2NyaXB0aW9uIG9mIG5ldyBzZWN0aW9uJyk7XHJcbiAgICAgICAgaXRlbSA9IG5ldyBJdGVtKCdjaGVja2JveCcsICdEZWZhdWx0IFF1ZXN0aW9uIFRpdGxlJywgJ0RlZmF1bHQgUXVlc3Rpb24gSGVscCBUZXh0JywgJ1F1ZXN0aW9uIFBsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgLyogQW5pbWF0aW9uIEluaXQgKi9cclxuICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmFuaW1Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlclNlcnZpY2UuYWRkU2VjdGlvbihzZWN0aW9uLCBpdGVtLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkUGFnZSgpLl9pZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VbMV0gPSBuZXcgSXRlbSgpLmRlc2VyaWFsaXplKHJlc3BvbnNlWzFdKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuYWRkTmV3U2VjdGlvbihyZXNwb25zZVswXSwgcmVzcG9uc2VbMV0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RTZWN0aW9uSW5kZXggPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnBhZ2VzWzFdLnNlY3Rpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnBhZ2VzWzFdLnNlY3Rpb25zW2xhc3RTZWN0aW9uSW5kZXggLSAxXS50eXBlID09PSAnTGVhZEZvcm1RJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTZWN0aW9uSW5kZXggPSBsYXN0U2VjdGlvbkluZGV4IC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuc2V0U2VsZWN0ZWRNb2RlbCgnU2VjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5zZXRTZWxlY3RlZFNlY3Rpb24odGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5wYWdlc1sxXS5zZWN0aW9uc1tsYXN0U2VjdGlvbkluZGV4IC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJpbmRpbmdDbGFzczE6IGFueSA9ICcuc2VjXycgKyAobGFzdFNlY3Rpb25JbmRleCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zY3JvbGxJdChiaW5kaW5nQ2xhc3MxKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRvYXN0Tm90aWZpY2F0aW9uV2l0aEZvcm11bGFDaGVjaygnTmV3IFNlY3Rpb24gYWRkZWQgU3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICAgICAgICAgICAgLyogYW5pbWF0aW9uICovXHJcbiAgICAgICAgICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmRlYm91bmNlKHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUxvYWQoKSwgMTgwMCk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucGFuZWxIZWlnaHRVcGRhdGUoJ2FkZFNlY3Rpb24nKTtcclxuICAgICAgICBzZWxmLmFkZERyb3Bkb3duKCk7XHJcbiAgICB9XHJcbiAgICBwYW5lbEhlaWdodFVwZGF0ZShhY3Rpb246IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRTZWN0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBuSGVpZ2h0ID0gdGhpcy5wbkhlaWdodCArIDU0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWxldGVTZWN0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBuSGVpZ2h0ID0gdGhpcy5wbkhlaWdodCAtIDU0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRRdWVzdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbkhlaWdodCA9IHRoaXMucG5IZWlnaHQgKyAxODtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRkQ29udHJvbFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbkhlaWdodCA9IHRoaXMucG5IZWlnaHQgKyAxODtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVsZXRlUXVlc3Rpb25cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucG5IZWlnaHQgPSB0aGlzLnBuSGVpZ2h0IC0gMTg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwYW5lbE1heEhlaWdodCA9IGpRdWVyeSh3aW5kb3cpLmhlaWdodCgpIC0gNjA7IC8vU3VidHJhY3RpbmcgaGVpZ2h0IG9mIG1lbnUgYW5kIG90aGVyIG9wdGlvbiBsaWtlIFwiYnVpbGRcIiwgXCJjb25maWdcIiBhbmQgXCJhbmFseXplXCJcclxuICAgICAgICBpZiAodGhpcy5wbkhlaWdodCA+IHBhbmVsTWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHZhciBwSGVpZ2h0ID0gcGFuZWxNYXhIZWlnaHQ7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBhbmVsLXNjcm9sbCcpLmNzcygnaGVpZ2h0JywgcEhlaWdodCk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnBhbmVsLXNjcm9sbCcpLmNzcygnb3ZlcmZsb3cteScsICdzY3JvbGwnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5wYW5lbC1zY3JvbGwnKS5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxHQShvcHQ6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAob3B0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBRERTRUNUSU9OXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0FkZFNlY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIEFkZCBTZWN0aW9uIENsaWNrJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJERUxFVEVTRUNUSU9OXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0RlbGV0ZVNlY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIERlbGV0ZSBTZWN0aW9uIENsaWNrJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBRERRVUVTVElPTlwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDbGljaycsICdBZGRRdWVzdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgQWRkIFF1ZXN0aW9uIENsaWNrJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJEVVBMSUNBVEVRVUVTVElPTlwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDbGljaycsICdEdXBsaWNhdGVRdWVzdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgRHVwbGljYXRlIFF1ZXN0aW9uIENsaWNrJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJERUxFVEVRVUVTVElPTlwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDbGljaycsICdEZWxldGVRdWVzdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgRGVsZXRlIFF1ZXN0aW9uIENsaWNrJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZpc2liaWxpdHlFeWUocGFnZTogUGFnZSkge1xyXG4gICAgICAgIHBhZ2UudmlzaWJsZSA9ICFwYWdlLnZpc2libGU7XHJcbiAgICAgICAgaWYgKCFwYWdlLnZpc2libGUpIHtcclxuICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5zZXRTZWxlY3RlZE1vZGVsKCdQYWdlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuc2V0U2VsZWN0ZWRQYWdlKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXNbMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRPdXRjb21lKCkge1xyXG4gICAgICAgIGxldCBsZW5ndGg6IHN0cmluZyA9ICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGEubGVuZ3RoICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmFkZGZvcm11bGEoJ05ldyBPdXRjb21lJyxcclxuICAgICAgICAgICAgJ291dGNvbWUnICsgKChNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwKSArIDEpKSAqIHBhcnNlSW50KGxlbmd0aCkpLFxyXG4gICAgICAgICAgICAnaHR0cHM6Ly9jZG4uZmlsZXBpY2tlci5pby9hcGkvZmlsZS9sSHFtNWdlOVJkeVNOd096S21HQScsICdPdXRjb21lIGRlc2NyaXB0aW9uIHdpbGwgY29tZSBoZXJlJyxcclxuICAgICAgICAgICAgJ1BhZ2UgdGl0bGUgd2lsbCBjb21lIGhlcmUnLCAnQnV0dG9uIFRleHQnLCAnaHR0cDovL291dGdyb3cudXMvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZHVwbGljYXRlT3V0Y29tZShjdXJyZW50T3V0Y29tZTogYW55LCBpbmRleDogYW55KSB7XHJcbiAgICAgICAgLy9hZGQgbmV3IGZvcm11bGFcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmFkZGZvcm11bGEoXHJcbiAgICAgICAgICAgIGN1cnJlbnRPdXRjb21lLm5hbWUsXHJcbiAgICAgICAgICAgIGN1cnJlbnRPdXRjb21lLnZhbHVlICsgJ18nKyhNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxKSksXHJcbiAgICAgICAgICAgIGN1cnJlbnRPdXRjb21lLnJlc3VsdCwgXHJcbiAgICAgICAgICAgIGN1cnJlbnRPdXRjb21lLmh0bWwsXHJcbiAgICAgICAgICAgIGN1cnJlbnRPdXRjb21lLmRlY2ltYWwsIFxyXG4gICAgICAgICAgICBjdXJyZW50T3V0Y29tZS51bml0cy5wcmVWYWx1ZSwgXHJcbiAgICAgICAgICAgIGN1cnJlbnRPdXRjb21lLnVuaXRzLnBvc3RWYWx1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy9yZW1vdmUgbmV3bHkgYWRkZWQgZm9ybXVsYSBhbmQgYWRkIGl0IGFkamFjZW50IHRvIGN1cnJlbnRcclxuICAgICAgICBsZXQgcmVtb3ZlZCA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYS5zcGxpY2UodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhLmxlbmd0aC0xLCAxKTsgXHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhLnNwbGljZShpbmRleCArIDEsIDAsIHJlbW92ZWRbMF0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
