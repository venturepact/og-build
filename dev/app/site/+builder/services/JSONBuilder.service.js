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
var model_1 = require('./../models/model');
var builder_service_1 = require('./builder.service');
var JSONBuilder = (function () {
    function JSONBuilder(_BuilderService) {
        this._BuilderService = _BuilderService;
        this.templateQuestionare = [];
        this.templateQuestionareWithEmittedLeadFormQuestion = [];
    }
    JSONBuilder.prototype.setTemplate = function (template) {
        this.JSONTemplate = template;
        for (var _i = 0, _a = template.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === 'Questionnaire') {
                if (!this.selectedPage)
                    this.selectedPage = page;
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                        var item = _e[_d];
                        this.templateQuestionare.push(item);
                        if (item.type != 'leadform_question')
                            this.templateQuestionareWithEmittedLeadFormQuestion.push(item);
                    }
                }
            }
            else if (page.type === localStorage.getItem('hash-link') && (page.visible == true)) {
                this.selectedPage = page;
                localStorage.removeItem('hash-link');
            }
        }
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
                this.setSelectedModel('Section');
                if (page.type === 'Questionnaire') {
                    for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                        var section1 = _c[_b];
                        if (section1.type === 'LeadFormQ') {
                            section1.visible = true;
                            section1.items[0].visible = true;
                            sections.push(section1);
                            items.push(section1.items[0]);
                            editorControl['leadform_question'] = section1.items[0];
                            this.setSelectedSection(section1);
                            leadsection = section1;
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
            app: this.JSONTemplate,
            sections: sections,
            items: items,
            page: ''
        };
        this._BuilderService.updateChanges(unsaveddata).subscribe(function (response) {
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
            app: this.JSONTemplate,
            sections: sections,
            items: items,
            page: ''
        };
        this._BuilderService.updateChanges(unsaveddata).subscribe(function (response) {
        }, function (error) {
            console.log(error);
        });
    };
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
        window.location.hash = '#' + page.type;
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
        var index = jQuery.inArray(this.selectedControl, this.selectedSection.items);
        this.selectedSection.items[index].type = newControl;
        this.tvs.updateFormGroup(this.selectedSection);
    };
    JSONBuilder.prototype.deleteControl = function () {
        var index = jQuery.inArray(this.selectedControl, this.selectedSection.items);
        this.selectedSection.items.splice(index, 1);
        if (this.selectedSection.items.length > 0) {
            this.selectedControl = this.selectedSection.items[0];
        }
        else {
            var index1 = jQuery.inArray(this.selectedSection, this.selectedPage.sections);
            this.selectedPage.sections.splice(index1, 1);
            if (this.selectedPage.sections.length > 0) {
                this.selectedSection = this.selectedPage.sections[0];
            }
            else {
            }
        }
    };
    JSONBuilder.prototype.deleteSection = function () {
        this.selectedSection.items.splice(0, this.selectedSection.items.length);
        var index = jQuery.inArray(this.selectedSection, this.selectedPage.sections);
        this.selectedPage.sections.splice(index, 1);
        if (this.selectedPage.sections.length > 0) {
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
        var index = jQuery.inArray(this.selectedControl, this.selectedSection.items);
        this.selectedSection.items.splice(index, 1);
        jQuery.each(sectionItems, function (key, item) {
            if (item.type != 'leadform_question')
                item.order = key + 1;
        });
        this.sort;
        this.tvs.updateFormGroup(this.selectedSection);
        this.tvs.updateFormGroup(this.selectedPage.sections[secindex]);
    };
    JSONBuilder.prototype.addControl = function (item, index) {
        this.selectedSection.items.splice(index + 1, 0, item);
        this.tvs.updateFormGroup(this.selectedSection);
        this.sort;
        jQuery.each(this.selectedSection.items, function (key, item) {
            item.order = key + 1;
        });
    };
    JSONBuilder.prototype.addNewSection = function (section, item) {
        var section1 = new model_1.Section(section.title);
        section1._id = section._id;
        section1.addItems(item);
        this.JSONTemplate.pages[1].addSections(section1);
        this.tvs.updateFormGroup(section1);
    };
    JSONBuilder.prototype.addNewQuestion = function (item, index) {
        this.JSONTemplate.pages[1].sections[index - 1].addItems(item);
        this.tvs.updateFormGroup(this.JSONTemplate.pages[1].sections[index - 1]);
        this.sort;
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
        var itemNew = new model_1.Item('result_output', "\n\t\t \t<p>{R" + (this.getJSONBuilt().formula.length) + "}</p>\n            <p>By the age of 65</p>\n            <p>Things get serious now. Ensure you're living healthy.</p>", '', '', '');
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
    JSONBuilder.prototype.setValidatorService = function (instance) {
        this.tvs = instance;
    };
    JSONBuilder.prototype.updateFormGroup = function () {
        this.tvs.updateFormGroup(this.selectedSection);
    };
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
        core_1.Injectable(), 
        __metadata('design:paramtypes', [builder_service_1.BuilderService])
    ], JSONBuilder);
    return JSONBuilder;
}());
exports.JSONBuilder = JSONBuilder;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxzQkFBeUMsbUJBQW1CLENBQUMsQ0FBQTtBQUU3RCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUtuRDtJQVdDLHFCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFMM0Msd0JBQW1CLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLG1EQUE4QyxHQUFXLEVBQUUsQ0FBQztJQUliLENBQUM7SUFFeEQsaUNBQVcsR0FBWCxVQUFZLFFBQWE7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7UUFFN0IsR0FBRyxDQUFDLENBQWEsVUFBYyxFQUFkLEtBQUEsUUFBUSxDQUFDLEtBQUssRUFBZCxjQUFjLEVBQWQsSUFBYyxDQUFDO1lBQTNCLElBQUksSUFBSSxTQUFBO1lBQ1osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixHQUFHLENBQUMsQ0FBZ0IsVUFBYSxFQUFiLEtBQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYSxDQUFDO29CQUE3QixJQUFJLE9BQU8sU0FBQTtvQkFDZixHQUFHLENBQUMsQ0FBYSxVQUFhLEVBQWIsS0FBQSxPQUFPLENBQUMsS0FBSyxFQUFiLGNBQWEsRUFBYixJQUFhLENBQUM7d0JBQTFCLElBQUksSUFBSSxTQUFBO3dCQUNaLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FB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TyxDQUFDLENBQUM7WUFDdEIsT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQXpnQkY7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQTJnQmIsa0JBQUM7QUFBRCxDQTFnQkEsQUEwZ0JDLElBQUE7QUExZ0JZLG1CQUFXLGNBMGdCdkIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcHAsIEl0ZW0sIFNlY3Rpb24sIFBhZ2UgfSBmcm9tICcuLy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3RlbXBsYXRlcy9zZXJ2aWNlcy90ZW1wbGF0ZVZhbGlkYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuL2J1aWxkZXIuc2VydmljZSc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEpTT05CdWlsZGVyIHtcclxuXHRwcml2YXRlIEpTT05UZW1wbGF0ZTogQXBwO1xyXG5cdHByaXZhdGUgc2VsZWN0ZWRDb250cm9sOiBJdGVtO1xyXG5cdHByaXZhdGUgc2VsZWN0ZWRTZWN0aW9uOiBTZWN0aW9uO1xyXG5cdHByaXZhdGUgc2VsZWN0ZWRQYWdlOiBQYWdlO1xyXG5cdHByaXZhdGUgc2VsZWN0ZWRNb2RlbDogYW55O1xyXG5cdHByaXZhdGUgdGVtcGxhdGVRdWVzdGlvbmFyZTogSXRlbVtdID0gW107XHJcblx0cHJpdmF0ZSB0ZW1wbGF0ZVF1ZXN0aW9uYXJlV2l0aEVtaXR0ZWRMZWFkRm9ybVF1ZXN0aW9uOiBJdGVtW10gPSBbXTtcclxuXHRwcml2YXRlIGNoYW5nZWQ6IGJvb2xlYW47XHJcblx0cHJpdmF0ZSB0dnM6IFRlbXBsYXRlVmFsaWRhdG9yU2VydmljZTtcclxuXHRwcml2YXRlIHNlbGVjdGVkRm9ybXVsYTogYW55O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX0J1aWxkZXJTZXJ2aWNlOiBCdWlsZGVyU2VydmljZSkgeyB9XHJcblxyXG5cdHNldFRlbXBsYXRlKHRlbXBsYXRlOiBBcHApIHtcclxuXHRcdHRoaXMuSlNPTlRlbXBsYXRlID0gdGVtcGxhdGU7XHJcblxyXG5cdFx0Zm9yICh2YXIgcGFnZSBvZiB0ZW1wbGF0ZS5wYWdlcykge1xyXG5cdFx0XHRpZiAocGFnZS50eXBlID09PSAnUXVlc3Rpb25uYWlyZScpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuc2VsZWN0ZWRQYWdlKVxyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFBhZ2UgPSBwYWdlO1xyXG5cdFx0XHRcdGZvciAodmFyIHNlY3Rpb24gb2YgcGFnZS5zZWN0aW9ucykge1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaXRlbSBvZiBzZWN0aW9uLml0ZW1zKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudGVtcGxhdGVRdWVzdGlvbmFyZS5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0XHRpZiAoaXRlbS50eXBlICE9ICdsZWFkZm9ybV9xdWVzdGlvbicpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy50ZW1wbGF0ZVF1ZXN0aW9uYXJlV2l0aEVtaXR0ZWRMZWFkRm9ybVF1ZXN0aW9uLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHBhZ2UudHlwZSA9PT0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhc2gtbGluaycpICYmIChwYWdlLnZpc2libGUgPT0gdHJ1ZSkpIHtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUGFnZSA9IHBhZ2U7XHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2hhc2gtbGluaycpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW9yZGVyKG9yZGVyOiBzdHJpbmdbXSkge1xyXG5cdFx0dmFyIHNlY3Rpb25JdGVtczogYW55W10gPSB0aGlzLnNlbGVjdGVkU2VjdGlvbi5pdGVtcztcclxuXHRcdGZvciAodmFyIGNvbnRyb2wgaW4gc2VjdGlvbkl0ZW1zKSB7XHJcblx0XHRcdGlmIChzZWN0aW9uSXRlbXNbY29udHJvbF0udHlwZSAhPSAnbGVhZGZvcm1fcXVlc3Rpb24nKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaW5kZXggaW4gb3JkZXIpIHtcclxuXHRcdFx0XHRcdGlmIChzZWN0aW9uSXRlbXNbY29udHJvbF0ub3JkZXIgPT0gb3JkZXJbaW5kZXhdKSB7XHJcblx0XHRcdFx0XHRcdHNlY3Rpb25JdGVtc1tjb250cm9sXS5vcmRlciA9IE51bWJlcihpbmRleCkgKyAxO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Ly8gZ2V0IHF1ZXN0aW9uIE5vLlxyXG5cdGdldFF1ZXN0aW9uTm8oKSB7XHJcblx0XHRsZXQgaXRlbXM6IGFueSA9IFtdO1xyXG5cdFx0Zm9yICh2YXIgcGFnZSBvZiB0aGlzLkpTT05UZW1wbGF0ZS5wYWdlcykge1xyXG5cdFx0XHRpZiAocGFnZS50eXBlID09PSAnUXVlc3Rpb25uYWlyZScpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBzZWN0aW9uIG9mIHBhZ2Uuc2VjdGlvbnMpIHtcclxuXHRcdFx0XHRcdGlmIChzZWN0aW9uLnR5cGUgIT09ICdMZWFkRm9ybVEnKSB7XHJcblx0XHRcdFx0XHRcdGZvciAodmFyIGl0ZW0gb2Ygc2VjdGlvbi5pdGVtcykge1xyXG5cdFx0XHRcdFx0XHRcdGl0ZW1zLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0XHRmb3IgKHZhciBpdGVtMSBvZiBpdGVtcykge1xyXG5cdFx0XHRpZiAoaXRlbTEgPT09IHRoaXMuc2VsZWN0ZWRDb250cm9sKSB7XHJcblx0XHRcdFx0bGV0IGluZGV4ID0galF1ZXJ5LmluQXJyYXkoaXRlbTEsIGl0ZW1zKTtcclxuXHRcdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIGhpZGUgb3RoZXIgTGVhZEZvcm1cclxuXHRoaWRlT3RoZXJMZWFkRm9ybShsZWFkX29uX3BhZ2U/OiBhbnksIGluZGV4PzogbnVtYmVyKSB7XHJcblx0XHRsZXQgc2VjdGlvbnM6IFNlY3Rpb25bXSA9IFtdO1xyXG5cdFx0bGV0IGxlYWRzZWN0aW9uOiBTZWN0aW9uO1xyXG5cdFx0bGV0IGl0ZW1zOiBJdGVtW10gPSBbXTtcclxuXHRcdGxldCBlZGl0b3JDb250cm9sOiBhbnkgPSB7XHJcblx0XHRcdGNsaWNrX2J1dHRvbjoge30sXHJcblx0XHRcdGxlYWRmb3JtOiB7fVxyXG5cdFx0fTtcclxuXHRcdGZvciAodmFyIHBhZ2Ugb2YgdGhpcy5KU09OVGVtcGxhdGUucGFnZXMpIHtcclxuXHRcdFx0aWYgKHBhZ2UudHlwZSA9PT0gbGVhZF9vbl9wYWdlKSB7IC8vc2hvdyBjdXJyZW50bHkgc2VsZWN0ZWQgcGFnZSBsZWFkZm9ybVxyXG5cdFx0XHRcdHRoaXMuc2V0U2VsZWN0ZWRQYWdlKHBhZ2UpO1xyXG5cdFx0XHRcdHRoaXMuc2V0U2VsZWN0ZWRNb2RlbCgnU2VjdGlvbicpO1xyXG5cdFx0XHRcdGlmIChwYWdlLnR5cGUgPT09ICdRdWVzdGlvbm5haXJlJykgeyAvL2luIGNhc2Ugb2YgUXVlc3Rpb25uYWlyZSBwYWdlIGNvbnNpZGVyICdzZWN0aW9uJyBhbHNvIC4uLiBpdCByZXF1aXJlc1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgc2VjdGlvbjEgb2YgcGFnZS5zZWN0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRpZiAoc2VjdGlvbjEudHlwZSA9PT0gJ0xlYWRGb3JtUScpIHtcclxuXHRcdFx0XHRcdFx0XHRzZWN0aW9uMS52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRzZWN0aW9uMS5pdGVtc1swXS52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRzZWN0aW9ucy5wdXNoKHNlY3Rpb24xKTtcclxuXHRcdFx0XHRcdFx0XHRpdGVtcy5wdXNoKHNlY3Rpb24xLml0ZW1zWzBdKTtcclxuXHRcdFx0XHRcdFx0XHRlZGl0b3JDb250cm9sWydsZWFkZm9ybV9xdWVzdGlvbiddID0gc2VjdGlvbjEuaXRlbXNbMF07XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTZWxlY3RlZFNlY3Rpb24oc2VjdGlvbjEpO1xyXG5cdFx0XHRcdFx0XHRcdGxlYWRzZWN0aW9uID0gc2VjdGlvbjE7XHJcblx0XHRcdFx0XHRcdFx0Ly9iZWZvcmUvYWZ0ZXIgcXVlc3Rpb25cclxuXHRcdFx0XHRcdFx0XHRsZXQgaW5kZXgxID0galF1ZXJ5LmluQXJyYXkoc2VjdGlvbjEsIHBhZ2Uuc2VjdGlvbnMpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChpbmRleDEgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhZ2Uuc2VjdGlvbnMucHVzaChzZWN0aW9uMSk7XHJcblx0XHRcdFx0XHRcdFx0XHRwYWdlLnNlY3Rpb25zLnNwbGljZShpbmRleDEsIDEpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvL2JlZm9yZS9hZnRlciBxdWVzdGlvblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGZvciAodmFyIHNlY3Rpb24xIG9mIHBhZ2Uuc2VjdGlvbnMpIHsgLy90aGVzZSBwYWdlIHJlcXVpcmVzIGNsaWNrIGJ1dHRvbiBhbHNvXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIGl0ZW0gb2Ygc2VjdGlvbjEuaXRlbXMpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbS50eXBlID09PSAnbGVhZGZvcm0nKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbXMucHVzaChpdGVtKTtcclxuXHRcdFx0XHRcdFx0XHRcdGVkaXRvckNvbnRyb2xbJ2xlYWRmb3JtJ10gPSBpdGVtO1xyXG5cdFx0XHRcdFx0XHRcdFx0bGVhZHNlY3Rpb24gPSBzZWN0aW9uMTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U2VsZWN0ZWRTZWN0aW9uKHNlY3Rpb24xKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKGl0ZW0udHlwZSA9PT0gJ2NsaWNrX2J1dHRvbicpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbXMucHVzaChpdGVtKTtcclxuXHRcdFx0XHRcdFx0XHRcdGVkaXRvckNvbnRyb2xbJ2NsaWNrX2J1dHRvbiddID0gaXRlbTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7IC8vaGlkZSBhbGwgdGhlIHBhZ2VzIGxlYWRmb3JtXHJcblx0XHRcdFx0aWYgKHBhZ2UudHlwZSA9PT0gJ1F1ZXN0aW9ubmFpcmUnKSB7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBzZWN0aW9uMSBvZiBwYWdlLnNlY3Rpb25zKSB7XHJcblx0XHRcdFx0XHRcdGlmIChzZWN0aW9uMS50eXBlID09PSAnTGVhZEZvcm1RJykge1xyXG5cdFx0XHRcdFx0XHRcdHNlY3Rpb24xLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRzZWN0aW9uMS5pdGVtc1swXS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0c2VjdGlvbnMucHVzaChzZWN0aW9uMSk7XHJcblx0XHRcdFx0XHRcdFx0aXRlbXMucHVzaChzZWN0aW9uMS5pdGVtc1swXSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgc2VjdGlvbjEgb2YgcGFnZS5zZWN0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpdGVtIG9mIHNlY3Rpb24xLml0ZW1zKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGl0ZW0udHlwZSA9PT0gJ2xlYWRmb3JtJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcy5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbS50eXBlID09PSAnY2xpY2tfYnV0dG9uJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vdGhlIGVuZFxyXG5cdFx0fVxyXG5cdFx0bGV0IHVuc2F2ZWRkYXRhID0ge1xyXG5cdFx0XHRhcHA6IHRoaXMuSlNPTlRlbXBsYXRlLFxyXG5cdFx0XHRzZWN0aW9uczogc2VjdGlvbnMsXHJcblx0XHRcdGl0ZW1zOiBpdGVtcyxcclxuXHRcdFx0cGFnZTogJydcclxuXHRcdH07XHJcblx0XHR0aGlzLl9CdWlsZGVyU2VydmljZS51cGRhdGVDaGFuZ2VzKHVuc2F2ZWRkYXRhKS5zdWJzY3JpYmUoXHJcblx0XHRcdChyZXNwb25zZTogYW55KSA9PiB7XHJcblx0XHRcdFx0Ly9pZihyZXNwb25zZS5zdWNjZXNzKVxyXG5cdFx0XHRcdC8vdGhpcy5fSXRlbVRyYWNrU2VydmljZS5yZXNldFVuc2F2ZWREYXRhKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdChlcnJvcjogYW55KSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0bGV0IGRhdGE6IGFueVtdID0gW107XHJcblx0XHRkYXRhLnB1c2gobGVhZHNlY3Rpb24pO1xyXG5cdFx0ZGF0YS5wdXNoKGVkaXRvckNvbnRyb2wpO1xyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cdGhpZGVPdGhlckxlYWRGb3JtMShsZWFkX29uX3BhZ2U/OiBhbnksIGluZGV4PzogbnVtYmVyKSB7XHJcblx0XHRsZXQgc2VjdGlvbnM6IFNlY3Rpb25bXSA9IFtdO1xyXG5cdFx0bGV0IGl0ZW1zOiBJdGVtW10gPSBbXTtcclxuXHRcdGZvciAodmFyIHBhZ2Ugb2YgdGhpcy5KU09OVGVtcGxhdGUucGFnZXMpIHtcclxuXHRcdFx0aWYgKHBhZ2UgIT09IHRoaXMuc2VsZWN0ZWRQYWdlKSB7XHJcblx0XHRcdFx0aWYgKHBhZ2UudHlwZSA9PT0gJ1F1ZXN0aW9ubmFpcmUnKSB7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBzZWN0aW9uMSBvZiBwYWdlLnNlY3Rpb25zKSB7XHJcblx0XHRcdFx0XHRcdGlmIChzZWN0aW9uMS50eXBlID09PSAnTGVhZEZvcm1RJykge1xyXG5cdFx0XHRcdFx0XHRcdHNlY3Rpb24xLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRzZWN0aW9uMS5pdGVtc1swXS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0c2VjdGlvbnMucHVzaChzZWN0aW9uMSk7XHJcblx0XHRcdFx0XHRcdFx0aXRlbXMucHVzaChzZWN0aW9uMS5pdGVtc1swXSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgc2VjdGlvbjEgb2YgcGFnZS5zZWN0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpdGVtIG9mIHNlY3Rpb24xLml0ZW1zKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGl0ZW0udHlwZSA9PT0gJ2xlYWRmb3JtJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcy5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbS50eXBlID09PSAnY2xpY2tfYnV0dG9uJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRsZXQgdW5zYXZlZGRhdGEgPSB7XHJcblx0XHRcdGFwcDogdGhpcy5KU09OVGVtcGxhdGUsXHJcblx0XHRcdHNlY3Rpb25zOiBzZWN0aW9ucyxcclxuXHRcdFx0aXRlbXM6IGl0ZW1zLFxyXG5cdFx0XHRwYWdlOiAnJ1xyXG5cdFx0fTtcclxuXHRcdHRoaXMuX0J1aWxkZXJTZXJ2aWNlLnVwZGF0ZUNoYW5nZXModW5zYXZlZGRhdGEpLnN1YnNjcmliZShcclxuXHRcdFx0KHJlc3BvbnNlOiBhbnkpID0+IHtcclxuXHRcdFx0XHQvL2lmKHJlc3BvbnNlLnN1Y2Nlc3MpXHJcblx0XHRcdFx0Ly90aGlzLl9JdGVtVHJhY2tTZXJ2aWNlLnJlc2V0VW5zYXZlZERhdGEoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0KGVycm9yOiBhbnkpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cdC8vZ2V0IHZpc2libGUgbGVhZGZvcm1cclxuXHRnZXRPdGhlclZpc2libGVMZWFkRm9ybSgpOiBzdHJpbmcge1xyXG5cdFx0bGV0IHBhZ2VUeXBlOiBzdHJpbmcgPSAnJztcclxuXHRcdGZvciAodmFyIHBhZ2Ugb2YgdGhpcy5KU09OVGVtcGxhdGUucGFnZXMpIHtcclxuXHRcdFx0Zm9yICh2YXIgc2VjdGlvbiBvZiBwYWdlLnNlY3Rpb25zKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaXRlbSBvZiBzZWN0aW9uLml0ZW1zKSB7XHJcblx0XHRcdFx0XHRpZiAoKGl0ZW0udHlwZSA9PT0gJ2xlYWRmb3JtJyB8fCAoc2VjdGlvbi52aXNpYmxlID09PSB0cnVlICYmIGl0ZW0udHlwZSA9PT0gJ2xlYWRmb3JtX3F1ZXN0aW9uJykpICYmIGl0ZW0udmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0XHRwYWdlVHlwZSA9IHBhZ2UudHlwZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBwYWdlVHlwZTtcclxuXHR9XHJcblx0c2V0Q2hhbmdlZCh2YWx1ZTogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5jaGFuZ2VkID0gdmFsdWU7XHJcblx0fVxyXG5cdGdldENoYW5nZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jaGFuZ2VkO1xyXG5cdH1cclxuXHRhZGROZXdDaGlsZChjaGlsZFRlbXBsYXRlOiBhbnkpIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zLnB1c2goY2hpbGRUZW1wbGF0ZSk7XHJcblx0fVxyXG5cclxuXHRzb3J0KG9yZGVyOiBzdHJpbmdbXSkge1xyXG5cdFx0dGhpcy5yZW9yZGVyKG9yZGVyKTtcclxuXHRcdHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zLnNvcnQoKGEsIGIpID0+ICgoYS5vcmRlciA8IGIub3JkZXIpID8gLTEgOiAoKGEub3JkZXIgPiBiLm9yZGVyKSA/IDEgOiAwKSkpO1xyXG5cdH1cclxuXHJcblx0Z2V0SlNPTkJ1aWx0KCk6IEFwcCB7XHJcblx0XHRyZXR1cm4gdGhpcy5KU09OVGVtcGxhdGU7XHJcblx0fVxyXG5cclxuXHRzZXRTZWxlY3RlZENvbnRyb2woY29udHJvbDogSXRlbSkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZENvbnRyb2wgPSBjb250cm9sO1xyXG5cdH1cclxuXHJcblx0c2V0U2VsZWN0ZWRTZWN0aW9uKHNlY3Rpb246IFNlY3Rpb24pIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWRTZWN0aW9uID0gc2VjdGlvbjtcclxuXHR9XHJcblxyXG5cdHNldFNlbGVjdGVkUGFnZShwYWdlOiBQYWdlKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkUGFnZSA9IHBhZ2U7XHJcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArIHBhZ2UudHlwZTtcclxuXHR9XHJcblxyXG5cdGdldFNlbGVjdGVkQ29udHJvbCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkQ29udHJvbDtcclxuXHR9XHJcblxyXG5cdGdldFNlbGVjdGVkU2VjdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkU2VjdGlvbjtcclxuXHR9XHJcblxyXG5cdGdldFNlbGVjdGVkUGFnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkUGFnZTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZUNvbnRyb2wobmV3Q29udHJvbDogYW55KSB7XHJcblx0XHQvL2luZGV4IG9mIG9sZCBjb250cm9sIGluIGFycmF5XHJcblx0XHRsZXQgaW5kZXggPSBqUXVlcnkuaW5BcnJheSh0aGlzLnNlbGVjdGVkQ29udHJvbCwgdGhpcy5zZWxlY3RlZFNlY3Rpb24uaXRlbXMpO1xyXG5cdFx0Ly9yZXBsYWNlIG9sZENvbnRyb2wgd2l0aCBuZXdDb250cm9sIGF0IGluZGV4XHRcclxuXHRcdHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zW2luZGV4XS50eXBlID0gbmV3Q29udHJvbDtcclxuXHRcdHRoaXMudHZzLnVwZGF0ZUZvcm1Hcm91cCh0aGlzLnNlbGVjdGVkU2VjdGlvbik7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDb250cm9sKCkge1xyXG5cdFx0Ly9pbmRleCBvZiBvbGQgY29udHJvbCBpbiBhcnJhXHJcblx0XHRsZXQgaW5kZXggPSBqUXVlcnkuaW5BcnJheSh0aGlzLnNlbGVjdGVkQ29udHJvbCwgdGhpcy5zZWxlY3RlZFNlY3Rpb24uaXRlbXMpO1xyXG5cdFx0Ly9yZXBsYWNlIG9sZENvbnRyb2wgd2l0aCBuZXdDb250cm9sIGF0IGluZGV4XHRcdFxyXG5cdFx0dGhpcy5zZWxlY3RlZFNlY3Rpb24uaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdC8vY2hvb3NlIHRoZSBuZXh0IHNlbGVjdGVkIGVsZW1lbnQgZnJvbSB0ZW1wbGF0ZSBzZWN0aW9uICAgIFxyXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZENvbnRyb2wgPSB0aGlzLnNlbGVjdGVkU2VjdGlvbi5pdGVtc1swXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIHRoaXMuc2VsZWN0ZWRDb250cm9sID0gdW5kZWZpbmVkO1xyXG5cdFx0XHQvL2luZGV4IG9mIG9sZCBzZWN0aW9uXHJcblx0XHRcdGxldCBpbmRleDEgPSBqUXVlcnkuaW5BcnJheSh0aGlzLnNlbGVjdGVkU2VjdGlvbiwgdGhpcy5zZWxlY3RlZFBhZ2Uuc2VjdGlvbnMpO1xyXG5cdFx0XHQvL3JlcGxhY2Ugb2xkc2VjdGlvbiB3aXRoIG5ldyBzZWN0aW9uIGF0IGluZGV4XHRcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFBhZ2Uuc2VjdGlvbnMuc3BsaWNlKGluZGV4MSwgMSk7XHJcblx0XHRcdGlmICh0aGlzLnNlbGVjdGVkUGFnZS5zZWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0Ly9zZXQgY29udHJvbCB0byBmaXJzdCBzZWN0aW9uXHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFNlY3Rpb24gPSB0aGlzLnNlbGVjdGVkUGFnZS5zZWN0aW9uc1swXTtcclxuXHRcdFx0fSBlbHNlIHsgLy9cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2VjdGlvbigpIHtcclxuXHRcdC8vUmVtb3ZlIGFsbCBJdGVtc1xyXG5cdFx0dGhpcy5zZWxlY3RlZFNlY3Rpb24uaXRlbXMuc3BsaWNlKDAsIHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zLmxlbmd0aCk7XHJcblx0XHQvL1JlbW92ZSBTZWN0aW9uXHJcblx0XHRsZXQgaW5kZXggPSBqUXVlcnkuaW5BcnJheSh0aGlzLnNlbGVjdGVkU2VjdGlvbiwgdGhpcy5zZWxlY3RlZFBhZ2Uuc2VjdGlvbnMpO1xyXG5cdFx0Ly9yZXBsYWNlIG9sZHNlY3Rpb24gd2l0aCBuZXcgc2VjdGlvbiBhdCBpbmRleFx0XHJcblx0XHR0aGlzLnNlbGVjdGVkUGFnZS5zZWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRQYWdlLnNlY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Ly9zZXQgY29udHJvbCB0byBmaXJzdCBzZWN0aW9uXHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRTZWN0aW9uID0gdGhpcy5zZWxlY3RlZFBhZ2Uuc2VjdGlvbnNbMF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRtdWx0aVNlY3Rpb25Tb3J0KHNlY3Rpb25JbmRleDogbnVtYmVyLCBpdGVtSW5kZXg6IG51bWJlciwgb3JkZXI6IHN0cmluZ1tdKSB7XHJcblx0XHRsZXQgc2VjaW5kZXg6IGFueSA9IHNlY3Rpb25JbmRleCAtIDE7XHJcblx0XHRmb3IgKGxldCBzZWN0aW9uIGluIHRoaXMuc2VsZWN0ZWRQYWdlLnNlY3Rpb25zKSB7XHJcblx0XHRcdGlmICh0aGlzLnNlbGVjdGVkUGFnZS5zZWN0aW9uc1tzZWN0aW9uXS50eXBlID09ICdMZWFkRm9ybVEnICYmICF0aGlzLnNlbGVjdGVkUGFnZS5zZWN0aW9uc1tzZWN0aW9uXS52aXNpYmxlICYmIE51bWJlcihzZWN0aW9uKSA9PSAwKSB7XHJcblx0XHRcdFx0c2VjaW5kZXggPSBzZWN0aW9uSW5kZXg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBzZWN0aW9uSXRlbXM6IGFueSA9IHRoaXMuc2VsZWN0ZWRQYWdlLnNlY3Rpb25zW3NlY2luZGV4XS5pdGVtcztcclxuXHRcdHNlY3Rpb25JdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAwLCB0aGlzLnNlbGVjdGVkQ29udHJvbCk7XHJcblx0XHQvLyBkZWxldGUgY29udHJvbCBmcm9tIG91dCBzZWN0aW9uXHJcblx0XHRsZXQgaW5kZXggPSBqUXVlcnkuaW5BcnJheSh0aGlzLnNlbGVjdGVkQ29udHJvbCwgdGhpcy5zZWxlY3RlZFNlY3Rpb24uaXRlbXMpO1xyXG5cdFx0Ly9yZXBsYWNlIG9sZENvbnRyb2wgd2l0aCBuZXdDb250cm9sIGF0IGluZGV4XHRcdFxyXG5cdFx0dGhpcy5zZWxlY3RlZFNlY3Rpb24uaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdC8vIHNvcnQgdGhlIHJlc3VsdCBzZWN0aW9uXHJcblx0XHRqUXVlcnkuZWFjaChzZWN0aW9uSXRlbXMsIGZ1bmN0aW9uIChrZXk6IGFueSwgaXRlbTogYW55KSB7XHJcblx0XHRcdGlmIChpdGVtLnR5cGUgIT0gJ2xlYWRmb3JtX3F1ZXN0aW9uJylcclxuXHRcdFx0XHRpdGVtLm9yZGVyID0ga2V5ICsgMTtcclxuXHRcdH0pO1xyXG5cdFx0Ly9zb3J0IHRoZSBwYXJlbnQgYXJyYXlcdFxyXG5cdFx0dGhpcy5zb3J0O1xyXG5cdFx0dGhpcy50dnMudXBkYXRlRm9ybUdyb3VwKHRoaXMuc2VsZWN0ZWRTZWN0aW9uKTtcclxuXHRcdHRoaXMudHZzLnVwZGF0ZUZvcm1Hcm91cCh0aGlzLnNlbGVjdGVkUGFnZS5zZWN0aW9uc1tzZWNpbmRleF0pO1xyXG5cdH1cclxuXHJcblx0YWRkQ29udHJvbChpdGVtOiBJdGVtLCBpbmRleDogbnVtYmVyKSB7XHJcblx0XHQvL2luZGV4IG9mIGN1cnJlbnQgaXRlbVxyXG5cdFx0Ly9sZXQgaW5kZXhzID0galF1ZXJ5LmluQXJyYXkodGhpcy5zZWxlY3RlZENvbnRyb2wsIHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zKTtcclxuXHRcdC8vcHV0IGl0IG5leHQgdG8gY3VycmVudCBpdGVtXHJcblx0XHR0aGlzLnNlbGVjdGVkU2VjdGlvbi5pdGVtcy5zcGxpY2UoaW5kZXggKyAxLCAwLCBpdGVtKTtcclxuXHRcdC8vdXBkYXRlIGZvcm0gZ3JvdXBzXHJcblx0XHR0aGlzLnR2cy51cGRhdGVGb3JtR3JvdXAodGhpcy5zZWxlY3RlZFNlY3Rpb24pO1xyXG5cdFx0Ly9zb3J0IHRoZSBwYXJlbnQgYXJyYXlcdFxyXG5cdFx0dGhpcy5zb3J0O1xyXG5cdFx0Ly8gc29ydCB0aGUgcmVzdWx0IHNlY3Rpb25cclxuXHRcdGpRdWVyeS5lYWNoKHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zLCBmdW5jdGlvbiAoa2V5OiBhbnksIGl0ZW06IGFueSkge1xyXG5cdFx0XHRpdGVtLm9yZGVyID0ga2V5ICsgMTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vcmV0dXJuIGl0ZW07XHJcblx0fVxyXG5cclxuXHRhZGROZXdTZWN0aW9uKHNlY3Rpb246IFNlY3Rpb24sIGl0ZW06IEl0ZW0pIHtcclxuXHRcdGxldCBzZWN0aW9uMSA9IG5ldyBTZWN0aW9uKHNlY3Rpb24udGl0bGUpO1xyXG5cdFx0c2VjdGlvbjEuX2lkID0gc2VjdGlvbi5faWQ7XHJcblx0XHRzZWN0aW9uMS5hZGRJdGVtcyhpdGVtKTtcclxuXHRcdHRoaXMuSlNPTlRlbXBsYXRlLnBhZ2VzWzFdLmFkZFNlY3Rpb25zKHNlY3Rpb24xKTtcclxuXHRcdC8vdXBkYXRlIGZvcm0gZ3JvdXBzXHJcblx0XHR0aGlzLnR2cy51cGRhdGVGb3JtR3JvdXAoc2VjdGlvbjEpO1xyXG5cdH1cclxuXHJcblx0YWRkTmV3UXVlc3Rpb24oaXRlbTogSXRlbSwgaW5kZXg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5KU09OVGVtcGxhdGUucGFnZXNbMV0uc2VjdGlvbnNbaW5kZXggLSAxXS5hZGRJdGVtcyhpdGVtKTtcclxuXHRcdC8vdXBkYXRlIGZvcm0gZ3JvdXBzXHJcblx0XHR0aGlzLnR2cy51cGRhdGVGb3JtR3JvdXAodGhpcy5KU09OVGVtcGxhdGUucGFnZXNbMV0uc2VjdGlvbnNbaW5kZXggLSAxXSk7XHJcblx0XHQvL3NvcnQgdGhlIHBhcmVudCBhcnJheVx0XHJcblx0XHR0aGlzLnNvcnQ7XHJcblx0XHQvLyBzb3J0IHRoZSByZXN1bHQgc2VjdGlvblxyXG5cdFx0alF1ZXJ5LmVhY2godGhpcy5KU09OVGVtcGxhdGUucGFnZXNbMV0uc2VjdGlvbnNbaW5kZXggLSAxXS5pdGVtcywgZnVuY3Rpb24gKGtleTogYW55LCBpdGVtOiBhbnkpIHtcclxuXHRcdFx0aXRlbS5vcmRlciA9IGtleSArIDE7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNldFNlbGVjdGVkTW9kZWwodHlwZTogYW55KSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkTW9kZWwgPSB0eXBlO1xyXG5cdH1cclxuXHJcblx0Z2V0U2VsZWN0ZWRNb2RlbCgpOiBhbnkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRNb2RlbDtcclxuXHR9XHJcblxyXG5cdHNldFNlbGVjdGVkRm9ybXVsYShmb3JtdWxhOiBhbnkpIHtcclxuXHRcdGlmICghZm9ybXVsYSlcclxuXHRcdFx0Zm9ybXVsYSA9IHRoaXMuSlNPTlRlbXBsYXRlLmZvcm11bGFbMF07XHJcblxyXG5cdFx0dGhpcy5zZXRSZXN1bHRCdXR0b25DVEEoZm9ybXVsYSk7XHJcblx0XHR0aGlzLnNlbGVjdGVkRm9ybXVsYSA9IGZvcm11bGE7XHJcblx0fVxyXG5cclxuXHRzZXRSZXN1bHRCdXR0b25DVEEoZm9ybXVsYTogYW55KSB7XHJcblx0XHRpZiAodGhpcy5KU09OVGVtcGxhdGUudGVtcGxhdGVUeXBlID09ICdSZWNvbW1lbmRhdGlvbicpIHtcclxuXHRcdFx0dGhpcy5KU09OVGVtcGxhdGUubmF2aWdhdGVfVXJsID0gZm9ybXVsYS51bml0cy5wb3N0VmFsdWU7XHJcblx0XHRcdC8qKiBzZXQgdGV4dCAqL1xyXG5cdFx0XHRmb3IgKHZhciBwYWdlIG9mIHRoaXMuSlNPTlRlbXBsYXRlLnBhZ2VzKSB7XHJcblx0XHRcdFx0aWYgKHBhZ2UudHlwZSA9PT0gJ1Jlc3VsdCcpIHtcclxuXHRcdFx0XHRcdGZvciAodmFyIHNlY3Rpb24gb2YgcGFnZS5zZWN0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpdGVtIG9mIHNlY3Rpb24uaXRlbXMpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbS50eXBlID09ICdsZWFkZm9ybScgfHwgaXRlbS50eXBlID09ICdjbGlja19idXR0b24nKVxyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5wcm9wcy50aXRsZSA9IGZvcm11bGEudW5pdHMucHJlVmFsdWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRTZWxlY3RlZEZvcm11bGEoKTogYW55IHtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdHZhciBsZWZ0SGVpZ2h0PWpRdWVyeSgnLnJlY29tLXNlY3Rpb24gLmxlZnQtc2VjJykuaGVpZ2h0KCk7XHJcblx0XHR2YXIgcmlnaHRIZWlnaHQ9alF1ZXJ5KCcucmVjb20tc2VjdGlvbiAub3V0ZXItbWFpbicpLmhlaWdodCgpO1xyXG5cdFx0aWYobGVmdEhlaWdodCA+IHJpZ2h0SGVpZ2h0KVxyXG4gICAgICAgIFx0alF1ZXJ5KCcub3V0ZXItbWFpbicpLmNzcygnaGVpZ2h0JyxsZWZ0SGVpZ2h0KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgXHRqUXVlcnkoJy5sZWZ0LW91dGVyJykuY3NzKCdoZWlnaHQnLHJpZ2h0SGVpZ2h0KTtcclxuICAgICAgICBzZWxmLnRleHRhcmVhU2l6ZSgpO1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRGb3JtdWxhO1xyXG5cdH1cclxuXHR0ZXh0YXJlYVNpemUoKXtcclxuXHRcdGlmKGpRdWVyeSgnLmJpZy10ZXh0JykucHJvcCgnc2Nyb2xsSGVpZ2h0Jyk+NTApXHJcblx0XHRcdGpRdWVyeSgnLmJpZy10ZXh0JykuY3NzKCdoZWlnaHQnLGpRdWVyeSgnLmJpZy10ZXh0JykucHJvcCgnc2Nyb2xsSGVpZ2h0JykpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRqUXVlcnkoJy5iaWctdGV4dCcpLmNzcygnaGVpZ2h0Jyw1MCk7XHJcblx0fVxyXG5cdGFkZFJlc3VsdFNlY3Rpb24oc2VjdGlvbjogU2VjdGlvbik6IGFueSB7XHJcblx0XHRsZXQgaXRlbU5ldyA9IG5ldyBJdGVtKCdyZXN1bHRfb3V0cHV0JywgYFxyXG5cdFx0IFx0PHA+e1JgICsgKHRoaXMuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYS5sZW5ndGgpICsgYH08L3A+XHJcbiAgICAgICAgICAgIDxwPkJ5IHRoZSBhZ2Ugb2YgNjU8L3A+XHJcbiAgICAgICAgICAgIDxwPlRoaW5ncyBnZXQgc2VyaW91cyBub3cuIEVuc3VyZSB5b3UncmUgbGl2aW5nIGhlYWx0aHkuPC9wPmAsXHJcblx0XHRcdCcnLCAnJywgJycpO1xyXG5cdFx0Ly9pdGVtTmV3LnNldEZvcm11bGFJbmRleChmb3JtdWxhSW5kZXgudG9TdHJpbmcoKSk7XHJcblx0XHRpdGVtTmV3LnNldFZpc2liaWxpdHkodHJ1ZSk7XHJcblx0XHRzZWN0aW9uLmFkZEl0ZW1zKGl0ZW1OZXcpO1xyXG5cdFx0cmV0dXJuIHsgaXRlbTogc2VjdGlvbi5pdGVtc1tzZWN0aW9uLml0ZW1zLmxlbmd0aCAtIDFdLCBpbmRleDogc2VjdGlvbi5pdGVtcy5sZW5ndGggLSAxIH07XHJcblx0fVxyXG5cclxuXHRkZWxldGVSZXN1bHRTZWN0aW9uKHNlY3Rpb246IFNlY3Rpb24sIGZvcm11bGFJbmRleDogYW55KSB7XHJcblx0XHRzZWN0aW9uLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcblx0XHRcdGl0ZW0uc2V0Rm9ybXVsYUluZGV4KGluZGV4LnRvU3RyaW5nKCkpO1xyXG5cdFx0fSk7XHJcblx0XHRzZWN0aW9uLml0ZW1zLnNwbGljZShmb3JtdWxhSW5kZXgsIDEpO1xyXG5cdH1cclxuXHJcblx0Z2V0VGVtcGxhdGVRdWVzdGlvbmFyZSgpOiBJdGVtW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVRdWVzdGlvbmFyZTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVRlbXBsYXRlUXVlc3Rpb25hcmUoKSB7XHJcblx0XHR0aGlzLnRlbXBsYXRlUXVlc3Rpb25hcmUgPSBbXTtcclxuXHRcdGZvciAodmFyIHBhZ2Ugb2YgdGhpcy5KU09OVGVtcGxhdGUucGFnZXMpIHtcclxuXHRcdFx0aWYgKHBhZ2UudHlwZSA9PT0gJ1F1ZXN0aW9ubmFpcmUnKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgc2VjdGlvbiBvZiBwYWdlLnNlY3Rpb25zKSB7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBpdGVtIG9mIHNlY3Rpb24uaXRlbXMpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50ZW1wbGF0ZVF1ZXN0aW9uYXJlLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Z2V0VGVtcGxhdGVRdWVzdGlvbmFyZVdpdGhFbWl0dGVkTGVhZEZvcm1RdWVzdGlvbigpOiBJdGVtW10ge1xyXG5cdFx0Ly9GaXJzdCBVcGRhdGVzIHRoZSBxdWVzdGlvbmFyZSBsaXN0IGFuZCB0aGVuIHJldHVybnNcclxuXHRcdHRoaXMudGVtcGxhdGVRdWVzdGlvbmFyZVdpdGhFbWl0dGVkTGVhZEZvcm1RdWVzdGlvbiA9IFtdO1xyXG5cdFx0Zm9yICh2YXIgcGFnZSBvZiB0aGlzLkpTT05UZW1wbGF0ZS5wYWdlcykge1xyXG5cdFx0XHRpZiAocGFnZS50eXBlID09PSAnUXVlc3Rpb25uYWlyZScpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBzZWN0aW9uIG9mIHBhZ2Uuc2VjdGlvbnMpIHtcclxuXHRcdFx0XHRcdGZvciAodmFyIGl0ZW0gb2Ygc2VjdGlvbi5pdGVtcykge1xyXG5cdFx0XHRcdFx0XHRpZiAoaXRlbS50eXBlICE9ICdsZWFkZm9ybV9xdWVzdGlvbicpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy50ZW1wbGF0ZVF1ZXN0aW9uYXJlV2l0aEVtaXR0ZWRMZWFkRm9ybVF1ZXN0aW9uLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZVF1ZXN0aW9uYXJlV2l0aEVtaXR0ZWRMZWFkRm9ybVF1ZXN0aW9uO1xyXG5cdH1cclxuXHJcblxyXG5cdGFkZEZvcm11bGEoKTogYW55IHtcclxuXHRcdHJldHVybiB0aGlzLkpTT05UZW1wbGF0ZS5hZGRmb3JtdWxhKCk7XHJcblx0fVxyXG5cclxuXHRzZXRWYWxpZGF0b3JTZXJ2aWNlKGluc3RhbmNlOiBUZW1wbGF0ZVZhbGlkYXRvclNlcnZpY2UpIHtcclxuXHRcdHRoaXMudHZzID0gaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVGb3JtR3JvdXAoKSB7XHJcblx0XHR0aGlzLnR2cy51cGRhdGVGb3JtR3JvdXAodGhpcy5zZWxlY3RlZFNlY3Rpb24pO1xyXG5cdH1cclxuXHQvKkFuaW1hdGlvbiBmdW50aW9ucyovXHJcblx0YW5pbUluaXQoKSB7XHJcblx0XHRpZiAoalF1ZXJ5KCcuZWxlbScpLnBhcmVudCgpLmhhc0NsYXNzKCdncmVlbi1iZycpKSB7XHJcblx0XHRcdGpRdWVyeSgnLmVsZW0nKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZ3JlZW4tYmcnKTtcclxuXHRcdH1cclxuXHRcdGpRdWVyeSgnLmVsZW0nKS5hZGRDbGFzcygnZWxlbS1yb3RhdGUnKS5odG1sKCc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZG9udXRfbGFyZ2U8L2k+JykuZmFkZUluKCdzbG93Jyk7XHJcblxyXG5cdH1cclxuXHRhbmltTG9hZCgpIHtcclxuXHRcdGpRdWVyeSgnLmVsZW0nKS5yZW1vdmVDbGFzcygnZWxlbS1yb3RhdGUnKS5odG1sKCc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGdyZWVuLWNvbG9yXCI+Y2hlY2s8L2k+JykuZmFkZUluKCdzbG93Jyk7XHJcblx0XHRqUXVlcnkoJy5lbGVtJykucGFyZW50KCkuYWRkQ2xhc3MoJ2dyZWVuLWJnJyk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGpRdWVyeSgnLmVsZW0nKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZ3JlZW4tYmcnKTtcclxuXHRcdFx0alF1ZXJ5KCcuZWxlbScpLmh0bWwoJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kb251dF9sYXJnZTwvaT4nKS5mYWRlSW4oJ3Nsb3cnKTtcclxuXHRcdH0sIDcwMCk7XHJcblx0fVxyXG5cclxuXHRkZWJvdW5jZShmdW5jOiBhbnksIHdhaXQ6IG51bWJlcikge1xyXG5cdFx0dmFyIHRpbWVvdXQ6IGFueTtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBjb250ZXh0ID0gdGhpcztcclxuXHRcdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRcdGZ1bmMuYXBwbHkoY29udGV4dCk7XHJcblx0XHRcdH07XHJcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblx0LypFbmQgb2YgQW5pbWF0aW9uIGZ1bnRpb25zKi9cclxufVxyXG4iXX0=
