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
                    if (localStorage.getItem('hash-link') == 'Questionnaire') {
                        this.selectedSection = section;
                        this.selectedModel = 'Section';
                        localStorage.removeItem('hash-link');
                    }
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
        console.log('section', this.selectedSection);
        console.log('page', this.selectedPage);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxzQkFBeUMsbUJBQW1CLENBQUMsQ0FBQTtBQUU3RCxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUtuRDtJQVdDLHFCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFMM0Msd0JBQW1CLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLG1EQUE4QyxHQUFXLEVBQUUsQ0FBQztJQUliLENBQUM7SUFFeEQsaUNBQVcsR0FBWCxVQUFZLFFBQWE7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7UUFFN0IsR0FBRyxDQUFDLENBQWEsVUFBYyxFQUFkLEtBQUEsUUFBUSxDQUFDLEtBQUssRUFBZCxjQUFjLEVBQWQsSUFBYyxDQUFDO1lBQTNCLElBQUksSUFBSSxTQUFBO1lBQ1osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixHQUFHLENBQUMsQ0FBZ0IsVUFBYSxFQUFiLEtBQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYSxDQUFDO29CQUE3QixJQUFJLE9BQU8sU0FBQTtvQkFDZixFQUFFLENBQUEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZELElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO3dCQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQzt3QkFDL0IsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFX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QUMsQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEYsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxJQUFTLEVBQUUsSUFBWTtRQUMvQixJQUFJLE9BQVksQ0FBQztRQUNqQixNQUFNLENBQUM7WUFDTixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxLQUFLLEdBQUc7Z0JBQ1gsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDZixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQztZQUNGLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QixPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7SUFDSCxDQUFDO0lBamhCRjtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBbWhCYixrQkFBQztBQUFELENBbGhCQSxBQWtoQkMsSUFBQTtBQWxoQlksbUJBQVcsY0FraEJ2QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwcCwgSXRlbSwgU2VjdGlvbiwgUGFnZSB9IGZyb20gJy4vLi4vbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgVGVtcGxhdGVWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGVtcGxhdGVzL3NlcnZpY2VzL3RlbXBsYXRlVmFsaWRhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCdWlsZGVyU2VydmljZSB9IGZyb20gJy4vYnVpbGRlci5zZXJ2aWNlJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSlNPTkJ1aWxkZXIge1xyXG5cdHByaXZhdGUgSlNPTlRlbXBsYXRlOiBBcHA7XHJcblx0cHJpdmF0ZSBzZWxlY3RlZENvbnRyb2w6IEl0ZW07XHJcblx0cHJpdmF0ZSBzZWxlY3RlZFNlY3Rpb246IFNlY3Rpb247XHJcblx0cHJpdmF0ZSBzZWxlY3RlZFBhZ2U6IFBhZ2U7XHJcblx0cHJpdmF0ZSBzZWxlY3RlZE1vZGVsOiBhbnk7XHJcblx0cHJpdmF0ZSB0ZW1wbGF0ZVF1ZXN0aW9uYXJlOiBJdGVtW10gPSBbXTtcclxuXHRwcml2YXRlIHRlbXBsYXRlUXVlc3Rpb25hcmVXaXRoRW1pdHRlZExlYWRGb3JtUXVlc3Rpb246IEl0ZW1bXSA9IFtdO1xyXG5cdHByaXZhdGUgY2hhbmdlZDogYm9vbGVhbjtcclxuXHRwcml2YXRlIHR2czogVGVtcGxhdGVWYWxpZGF0b3JTZXJ2aWNlO1xyXG5cdHByaXZhdGUgc2VsZWN0ZWRGb3JtdWxhOiBhbnk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfQnVpbGRlclNlcnZpY2U6IEJ1aWxkZXJTZXJ2aWNlKSB7IH1cclxuXHJcblx0c2V0VGVtcGxhdGUodGVtcGxhdGU6IEFwcCkge1xyXG5cdFx0dGhpcy5KU09OVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuXHJcblx0XHRmb3IgKHZhciBwYWdlIG9mIHRlbXBsYXRlLnBhZ2VzKSB7XHJcblx0XHRcdGlmIChwYWdlLnR5cGUgPT09ICdRdWVzdGlvbm5haXJlJykge1xyXG5cdFx0XHRcdGlmICghdGhpcy5zZWxlY3RlZFBhZ2UpXHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkUGFnZSA9IHBhZ2U7XHJcblx0XHRcdFx0Zm9yICh2YXIgc2VjdGlvbiBvZiBwYWdlLnNlY3Rpb25zKSB7XHJcblx0XHRcdFx0XHRpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGFzaC1saW5rJyk9PSdRdWVzdGlvbm5haXJlJykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkU2VjdGlvbiA9IHNlY3Rpb247XHJcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRNb2RlbCA9ICdTZWN0aW9uJztcclxuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2hhc2gtbGluaycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaXRlbSBvZiBzZWN0aW9uLml0ZW1zKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudGVtcGxhdGVRdWVzdGlvbmFyZS5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0XHRpZiAoaXRlbS50eXBlICE9ICdsZWFkZm9ybV9xdWVzdGlvbicpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy50ZW1wbGF0ZVF1ZXN0aW9uYXJlV2l0aEVtaXR0ZWRMZWFkRm9ybVF1ZXN0aW9uLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHBhZ2UudHlwZSA9PT0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhc2gtbGluaycpICYmIChwYWdlLnZpc2libGUgPT0gdHJ1ZSkpIHtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUGFnZSA9IHBhZ2U7XHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2hhc2gtbGluaycpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc29sZS5sb2coJ3NlY3Rpb24nLHRoaXMuc2VsZWN0ZWRTZWN0aW9uKTtcclxuXHRcdGNvbnNvbGUubG9nKCdwYWdlJyx0aGlzLnNlbGVjdGVkUGFnZSk7XHJcblx0fVxyXG5cclxuXHRyZW9yZGVyKG9yZGVyOiBzdHJpbmdbXSkge1xyXG5cdFx0dmFyIHNlY3Rpb25JdGVtczogYW55W10gPSB0aGlzLnNlbGVjdGVkU2VjdGlvbi5pdGVtcztcclxuXHRcdGZvciAodmFyIGNvbnRyb2wgaW4gc2VjdGlvbkl0ZW1zKSB7XHJcblx0XHRcdGlmIChzZWN0aW9uSXRlbXNbY29udHJvbF0udHlwZSAhPSAnbGVhZGZvcm1fcXVlc3Rpb24nKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaW5kZXggaW4gb3JkZXIpIHtcclxuXHRcdFx0XHRcdGlmIChzZWN0aW9uSXRlbXNbY29udHJvbF0ub3JkZXIgPT0gb3JkZXJbaW5kZXhdKSB7XHJcblx0XHRcdFx0XHRcdHNlY3Rpb25JdGVtc1tjb250cm9sXS5vcmRlciA9IE51bWJlcihpbmRleCkgKyAxO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Ly8gZ2V0IHF1ZXN0aW9uIE5vLlxyXG5cdGdldFF1ZXN0aW9uTm8oKSB7XHJcblx0XHRsZXQgaXRlbXM6IGFueSA9IFtdO1xyXG5cdFx0Zm9yICh2YXIgcGFnZSBvZiB0aGlzLkpTT05UZW1wbGF0ZS5wYWdlcykge1xyXG5cdFx0XHRpZiAocGFnZS50eXBlID09PSAnUXVlc3Rpb25uYWlyZScpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBzZWN0aW9uIG9mIHBhZ2Uuc2VjdGlvbnMpIHtcclxuXHRcdFx0XHRcdGlmIChzZWN0aW9uLnR5cGUgIT09ICdMZWFkRm9ybVEnKSB7XHJcblx0XHRcdFx0XHRcdGZvciAodmFyIGl0ZW0gb2Ygc2VjdGlvbi5pdGVtcykge1xyXG5cdFx0XHRcdFx0XHRcdGl0ZW1zLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0XHRmb3IgKHZhciBpdGVtMSBvZiBpdGVtcykge1xyXG5cdFx0XHRpZiAoaXRlbTEgPT09IHRoaXMuc2VsZWN0ZWRDb250cm9sKSB7XHJcblx0XHRcdFx0bGV0IGluZGV4ID0galF1ZXJ5LmluQXJyYXkoaXRlbTEsIGl0ZW1zKTtcclxuXHRcdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIGhpZGUgb3RoZXIgTGVhZEZvcm1cclxuXHRoaWRlT3RoZXJMZWFkRm9ybShsZWFkX29uX3BhZ2U/OiBhbnksIGluZGV4PzogbnVtYmVyKSB7XHJcblx0XHRsZXQgc2VjdGlvbnM6IFNlY3Rpb25bXSA9IFtdO1xyXG5cdFx0bGV0IGxlYWRzZWN0aW9uOiBTZWN0aW9uO1xyXG5cdFx0bGV0IGl0ZW1zOiBJdGVtW10gPSBbXTtcclxuXHRcdGxldCBlZGl0b3JDb250cm9sOiBhbnkgPSB7XHJcblx0XHRcdGNsaWNrX2J1dHRvbjoge30sXHJcblx0XHRcdGxlYWRmb3JtOiB7fVxyXG5cdFx0fTtcclxuXHRcdGZvciAodmFyIHBhZ2Ugb2YgdGhpcy5KU09OVGVtcGxhdGUucGFnZXMpIHtcclxuXHRcdFx0aWYgKHBhZ2UudHlwZSA9PT0gbGVhZF9vbl9wYWdlKSB7IC8vc2hvdyBjdXJyZW50bHkgc2VsZWN0ZWQgcGFnZSBsZWFkZm9ybVxyXG5cdFx0XHRcdHRoaXMuc2V0U2VsZWN0ZWRQYWdlKHBhZ2UpO1xyXG5cdFx0XHRcdHRoaXMuc2V0U2VsZWN0ZWRNb2RlbCgnU2VjdGlvbicpO1xyXG5cdFx0XHRcdGlmIChwYWdlLnR5cGUgPT09ICdRdWVzdGlvbm5haXJlJykgeyAvL2luIGNhc2Ugb2YgUXVlc3Rpb25uYWlyZSBwYWdlIGNvbnNpZGVyICdzZWN0aW9uJyBhbHNvIC4uLiBpdCByZXF1aXJlc1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgc2VjdGlvbjEgb2YgcGFnZS5zZWN0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRpZiAoc2VjdGlvbjEudHlwZSA9PT0gJ0xlYWRGb3JtUScpIHtcclxuXHRcdFx0XHRcdFx0XHRzZWN0aW9uMS52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRzZWN0aW9uMS5pdGVtc1swXS52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRzZWN0aW9ucy5wdXNoKHNlY3Rpb24xKTtcclxuXHRcdFx0XHRcdFx0XHRpdGVtcy5wdXNoKHNlY3Rpb24xLml0ZW1zWzBdKTtcclxuXHRcdFx0XHRcdFx0XHRlZGl0b3JDb250cm9sWydsZWFkZm9ybV9xdWVzdGlvbiddID0gc2VjdGlvbjEuaXRlbXNbMF07XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTZWxlY3RlZFNlY3Rpb24oc2VjdGlvbjEpO1xyXG5cdFx0XHRcdFx0XHRcdGxlYWRzZWN0aW9uID0gc2VjdGlvbjE7XHJcblx0XHRcdFx0XHRcdFx0Ly9iZWZvcmUvYWZ0ZXIgcXVlc3Rpb25cclxuXHRcdFx0XHRcdFx0XHRsZXQgaW5kZXgxID0galF1ZXJ5LmluQXJyYXkoc2VjdGlvbjEsIHBhZ2Uuc2VjdGlvbnMpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChpbmRleDEgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdHBhZ2Uuc2VjdGlvbnMucHVzaChzZWN0aW9uMSk7XHJcblx0XHRcdFx0XHRcdFx0XHRwYWdlLnNlY3Rpb25zLnNwbGljZShpbmRleDEsIDEpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQvL2JlZm9yZS9hZnRlciBxdWVzdGlvblxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGZvciAodmFyIHNlY3Rpb24xIG9mIHBhZ2Uuc2VjdGlvbnMpIHsgLy90aGVzZSBwYWdlIHJlcXVpcmVzIGNsaWNrIGJ1dHRvbiBhbHNvXHJcblx0XHRcdFx0XHRcdGZvciAodmFyIGl0ZW0gb2Ygc2VjdGlvbjEuaXRlbXMpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbS50eXBlID09PSAnbGVhZGZvcm0nKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbXMucHVzaChpdGVtKTtcclxuXHRcdFx0XHRcdFx0XHRcdGVkaXRvckNvbnRyb2xbJ2xlYWRmb3JtJ10gPSBpdGVtO1xyXG5cdFx0XHRcdFx0XHRcdFx0bGVhZHNlY3Rpb24gPSBzZWN0aW9uMTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U2VsZWN0ZWRTZWN0aW9uKHNlY3Rpb24xKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKGl0ZW0udHlwZSA9PT0gJ2NsaWNrX2J1dHRvbicpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbXMucHVzaChpdGVtKTtcclxuXHRcdFx0XHRcdFx0XHRcdGVkaXRvckNvbnRyb2xbJ2NsaWNrX2J1dHRvbiddID0gaXRlbTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7IC8vaGlkZSBhbGwgdGhlIHBhZ2VzIGxlYWRmb3JtXHJcblx0XHRcdFx0aWYgKHBhZ2UudHlwZSA9PT0gJ1F1ZXN0aW9ubmFpcmUnKSB7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBzZWN0aW9uMSBvZiBwYWdlLnNlY3Rpb25zKSB7XHJcblx0XHRcdFx0XHRcdGlmIChzZWN0aW9uMS50eXBlID09PSAnTGVhZEZvcm1RJykge1xyXG5cdFx0XHRcdFx0XHRcdHNlY3Rpb24xLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRzZWN0aW9uMS5pdGVtc1swXS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0c2VjdGlvbnMucHVzaChzZWN0aW9uMSk7XHJcblx0XHRcdFx0XHRcdFx0aXRlbXMucHVzaChzZWN0aW9uMS5pdGVtc1swXSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgc2VjdGlvbjEgb2YgcGFnZS5zZWN0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpdGVtIG9mIHNlY3Rpb24xLml0ZW1zKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGl0ZW0udHlwZSA9PT0gJ2xlYWRmb3JtJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcy5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbS50eXBlID09PSAnY2xpY2tfYnV0dG9uJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vdGhlIGVuZFxyXG5cdFx0fVxyXG5cdFx0bGV0IHVuc2F2ZWRkYXRhID0ge1xyXG5cdFx0XHRhcHA6IHRoaXMuSlNPTlRlbXBsYXRlLFxyXG5cdFx0XHRzZWN0aW9uczogc2VjdGlvbnMsXHJcblx0XHRcdGl0ZW1zOiBpdGVtcyxcclxuXHRcdFx0cGFnZTogJydcclxuXHRcdH07XHJcblx0XHR0aGlzLl9CdWlsZGVyU2VydmljZS51cGRhdGVDaGFuZ2VzKHVuc2F2ZWRkYXRhKS5zdWJzY3JpYmUoXHJcblx0XHRcdChyZXNwb25zZTogYW55KSA9PiB7XHJcblx0XHRcdFx0Ly9pZihyZXNwb25zZS5zdWNjZXNzKVxyXG5cdFx0XHRcdC8vdGhpcy5fSXRlbVRyYWNrU2VydmljZS5yZXNldFVuc2F2ZWREYXRhKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdChlcnJvcjogYW55KSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0bGV0IGRhdGE6IGFueVtdID0gW107XHJcblx0XHRkYXRhLnB1c2gobGVhZHNlY3Rpb24pO1xyXG5cdFx0ZGF0YS5wdXNoKGVkaXRvckNvbnRyb2wpO1xyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG5cdGhpZGVPdGhlckxlYWRGb3JtMShsZWFkX29uX3BhZ2U/OiBhbnksIGluZGV4PzogbnVtYmVyKSB7XHJcblx0XHRsZXQgc2VjdGlvbnM6IFNlY3Rpb25bXSA9IFtdO1xyXG5cdFx0bGV0IGl0ZW1zOiBJdGVtW10gPSBbXTtcclxuXHRcdGZvciAodmFyIHBhZ2Ugb2YgdGhpcy5KU09OVGVtcGxhdGUucGFnZXMpIHtcclxuXHRcdFx0aWYgKHBhZ2UgIT09IHRoaXMuc2VsZWN0ZWRQYWdlKSB7XHJcblx0XHRcdFx0aWYgKHBhZ2UudHlwZSA9PT0gJ1F1ZXN0aW9ubmFpcmUnKSB7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBzZWN0aW9uMSBvZiBwYWdlLnNlY3Rpb25zKSB7XHJcblx0XHRcdFx0XHRcdGlmIChzZWN0aW9uMS50eXBlID09PSAnTGVhZEZvcm1RJykge1xyXG5cdFx0XHRcdFx0XHRcdHNlY3Rpb24xLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRzZWN0aW9uMS5pdGVtc1swXS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0c2VjdGlvbnMucHVzaChzZWN0aW9uMSk7XHJcblx0XHRcdFx0XHRcdFx0aXRlbXMucHVzaChzZWN0aW9uMS5pdGVtc1swXSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgc2VjdGlvbjEgb2YgcGFnZS5zZWN0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpdGVtIG9mIHNlY3Rpb24xLml0ZW1zKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGl0ZW0udHlwZSA9PT0gJ2xlYWRmb3JtJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcy5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbS50eXBlID09PSAnY2xpY2tfYnV0dG9uJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRsZXQgdW5zYXZlZGRhdGEgPSB7XHJcblx0XHRcdGFwcDogdGhpcy5KU09OVGVtcGxhdGUsXHJcblx0XHRcdHNlY3Rpb25zOiBzZWN0aW9ucyxcclxuXHRcdFx0aXRlbXM6IGl0ZW1zLFxyXG5cdFx0XHRwYWdlOiAnJ1xyXG5cdFx0fTtcclxuXHRcdHRoaXMuX0J1aWxkZXJTZXJ2aWNlLnVwZGF0ZUNoYW5nZXModW5zYXZlZGRhdGEpLnN1YnNjcmliZShcclxuXHRcdFx0KHJlc3BvbnNlOiBhbnkpID0+IHtcclxuXHRcdFx0XHQvL2lmKHJlc3BvbnNlLnN1Y2Nlc3MpXHJcblx0XHRcdFx0Ly90aGlzLl9JdGVtVHJhY2tTZXJ2aWNlLnJlc2V0VW5zYXZlZERhdGEoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0KGVycm9yOiBhbnkpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cdC8vZ2V0IHZpc2libGUgbGVhZGZvcm1cclxuXHRnZXRPdGhlclZpc2libGVMZWFkRm9ybSgpOiBzdHJpbmcge1xyXG5cdFx0bGV0IHBhZ2VUeXBlOiBzdHJpbmcgPSAnJztcclxuXHRcdGZvciAodmFyIHBhZ2Ugb2YgdGhpcy5KU09OVGVtcGxhdGUucGFnZXMpIHtcclxuXHRcdFx0Zm9yICh2YXIgc2VjdGlvbiBvZiBwYWdlLnNlY3Rpb25zKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaXRlbSBvZiBzZWN0aW9uLml0ZW1zKSB7XHJcblx0XHRcdFx0XHRpZiAoKGl0ZW0udHlwZSA9PT0gJ2xlYWRmb3JtJyB8fCAoc2VjdGlvbi52aXNpYmxlID09PSB0cnVlICYmIGl0ZW0udHlwZSA9PT0gJ2xlYWRmb3JtX3F1ZXN0aW9uJykpICYmIGl0ZW0udmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdFx0XHRwYWdlVHlwZSA9IHBhZ2UudHlwZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBwYWdlVHlwZTtcclxuXHR9XHJcblx0c2V0Q2hhbmdlZCh2YWx1ZTogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5jaGFuZ2VkID0gdmFsdWU7XHJcblx0fVxyXG5cdGdldENoYW5nZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jaGFuZ2VkO1xyXG5cdH1cclxuXHRhZGROZXdDaGlsZChjaGlsZFRlbXBsYXRlOiBhbnkpIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zLnB1c2goY2hpbGRUZW1wbGF0ZSk7XHJcblx0fVxyXG5cclxuXHRzb3J0KG9yZGVyOiBzdHJpbmdbXSkge1xyXG5cdFx0dGhpcy5yZW9yZGVyKG9yZGVyKTtcclxuXHRcdHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zLnNvcnQoKGEsIGIpID0+ICgoYS5vcmRlciA8IGIub3JkZXIpID8gLTEgOiAoKGEub3JkZXIgPiBiLm9yZGVyKSA/IDEgOiAwKSkpO1xyXG5cdH1cclxuXHJcblx0Z2V0SlNPTkJ1aWx0KCk6IEFwcCB7XHJcblx0XHRyZXR1cm4gdGhpcy5KU09OVGVtcGxhdGU7XHJcblx0fVxyXG5cclxuXHRzZXRTZWxlY3RlZENvbnRyb2woY29udHJvbDogSXRlbSkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZENvbnRyb2wgPSBjb250cm9sO1xyXG5cdH1cclxuXHJcblx0c2V0U2VsZWN0ZWRTZWN0aW9uKHNlY3Rpb246IFNlY3Rpb24pIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWRTZWN0aW9uID0gc2VjdGlvbjtcclxuXHR9XHJcblxyXG5cdHNldFNlbGVjdGVkUGFnZShwYWdlOiBQYWdlKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkUGFnZSA9IHBhZ2U7XHJcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArIHBhZ2UudHlwZTtcclxuXHR9XHJcblxyXG5cdGdldFNlbGVjdGVkQ29udHJvbCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkQ29udHJvbDtcclxuXHR9XHJcblxyXG5cdGdldFNlbGVjdGVkU2VjdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkU2VjdGlvbjtcclxuXHR9XHJcblxyXG5cdGdldFNlbGVjdGVkUGFnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkUGFnZTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZUNvbnRyb2wobmV3Q29udHJvbDogYW55KSB7XHJcblx0XHQvL2luZGV4IG9mIG9sZCBjb250cm9sIGluIGFycmF5XHJcblx0XHRsZXQgaW5kZXggPSBqUXVlcnkuaW5BcnJheSh0aGlzLnNlbGVjdGVkQ29udHJvbCwgdGhpcy5zZWxlY3RlZFNlY3Rpb24uaXRlbXMpO1xyXG5cdFx0Ly9yZXBsYWNlIG9sZENvbnRyb2wgd2l0aCBuZXdDb250cm9sIGF0IGluZGV4XHRcclxuXHRcdHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zW2luZGV4XS50eXBlID0gbmV3Q29udHJvbDtcclxuXHRcdHRoaXMudHZzLnVwZGF0ZUZvcm1Hcm91cCh0aGlzLnNlbGVjdGVkU2VjdGlvbik7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDb250cm9sKCkge1xyXG5cdFx0Ly9pbmRleCBvZiBvbGQgY29udHJvbCBpbiBhcnJhXHJcblx0XHRsZXQgaW5kZXggPSBqUXVlcnkuaW5BcnJheSh0aGlzLnNlbGVjdGVkQ29udHJvbCwgdGhpcy5zZWxlY3RlZFNlY3Rpb24uaXRlbXMpO1xyXG5cdFx0Ly9yZXBsYWNlIG9sZENvbnRyb2wgd2l0aCBuZXdDb250cm9sIGF0IGluZGV4XHRcdFxyXG5cdFx0dGhpcy5zZWxlY3RlZFNlY3Rpb24uaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdC8vY2hvb3NlIHRoZSBuZXh0IHNlbGVjdGVkIGVsZW1lbnQgZnJvbSB0ZW1wbGF0ZSBzZWN0aW9uICAgIFxyXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZENvbnRyb2wgPSB0aGlzLnNlbGVjdGVkU2VjdGlvbi5pdGVtc1swXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIHRoaXMuc2VsZWN0ZWRDb250cm9sID0gdW5kZWZpbmVkO1xyXG5cdFx0XHQvL2luZGV4IG9mIG9sZCBzZWN0aW9uXHJcblx0XHRcdGxldCBpbmRleDEgPSBqUXVlcnkuaW5BcnJheSh0aGlzLnNlbGVjdGVkU2VjdGlvbiwgdGhpcy5zZWxlY3RlZFBhZ2Uuc2VjdGlvbnMpO1xyXG5cdFx0XHQvL3JlcGxhY2Ugb2xkc2VjdGlvbiB3aXRoIG5ldyBzZWN0aW9uIGF0IGluZGV4XHRcclxuXHRcdFx0dGhpcy5zZWxlY3RlZFBhZ2Uuc2VjdGlvbnMuc3BsaWNlKGluZGV4MSwgMSk7XHJcblx0XHRcdGlmICh0aGlzLnNlbGVjdGVkUGFnZS5zZWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0Ly9zZXQgY29udHJvbCB0byBmaXJzdCBzZWN0aW9uXHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFNlY3Rpb24gPSB0aGlzLnNlbGVjdGVkUGFnZS5zZWN0aW9uc1swXTtcclxuXHRcdFx0fSBlbHNlIHsgLy9cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZGVsZXRlU2VjdGlvbigpIHtcclxuXHRcdC8vUmVtb3ZlIGFsbCBJdGVtc1xyXG5cdFx0dGhpcy5zZWxlY3RlZFNlY3Rpb24uaXRlbXMuc3BsaWNlKDAsIHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zLmxlbmd0aCk7XHJcblx0XHQvL1JlbW92ZSBTZWN0aW9uXHJcblx0XHRsZXQgaW5kZXggPSBqUXVlcnkuaW5BcnJheSh0aGlzLnNlbGVjdGVkU2VjdGlvbiwgdGhpcy5zZWxlY3RlZFBhZ2Uuc2VjdGlvbnMpO1xyXG5cdFx0Ly9yZXBsYWNlIG9sZHNlY3Rpb24gd2l0aCBuZXcgc2VjdGlvbiBhdCBpbmRleFx0XHJcblx0XHR0aGlzLnNlbGVjdGVkUGFnZS5zZWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRQYWdlLnNlY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Ly9zZXQgY29udHJvbCB0byBmaXJzdCBzZWN0aW9uXHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRTZWN0aW9uID0gdGhpcy5zZWxlY3RlZFBhZ2Uuc2VjdGlvbnNbMF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRtdWx0aVNlY3Rpb25Tb3J0KHNlY3Rpb25JbmRleDogbnVtYmVyLCBpdGVtSW5kZXg6IG51bWJlciwgb3JkZXI6IHN0cmluZ1tdKSB7XHJcblx0XHRsZXQgc2VjaW5kZXg6IGFueSA9IHNlY3Rpb25JbmRleCAtIDE7XHJcblx0XHRmb3IgKGxldCBzZWN0aW9uIGluIHRoaXMuc2VsZWN0ZWRQYWdlLnNlY3Rpb25zKSB7XHJcblx0XHRcdGlmICh0aGlzLnNlbGVjdGVkUGFnZS5zZWN0aW9uc1tzZWN0aW9uXS50eXBlID09ICdMZWFkRm9ybVEnICYmICF0aGlzLnNlbGVjdGVkUGFnZS5zZWN0aW9uc1tzZWN0aW9uXS52aXNpYmxlICYmIE51bWJlcihzZWN0aW9uKSA9PSAwKSB7XHJcblx0XHRcdFx0c2VjaW5kZXggPSBzZWN0aW9uSW5kZXg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBzZWN0aW9uSXRlbXM6IGFueSA9IHRoaXMuc2VsZWN0ZWRQYWdlLnNlY3Rpb25zW3NlY2luZGV4XS5pdGVtcztcclxuXHRcdHNlY3Rpb25JdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAwLCB0aGlzLnNlbGVjdGVkQ29udHJvbCk7XHJcblx0XHQvLyBkZWxldGUgY29udHJvbCBmcm9tIG91dCBzZWN0aW9uXHJcblx0XHRsZXQgaW5kZXggPSBqUXVlcnkuaW5BcnJheSh0aGlzLnNlbGVjdGVkQ29udHJvbCwgdGhpcy5zZWxlY3RlZFNlY3Rpb24uaXRlbXMpO1xyXG5cdFx0Ly9yZXBsYWNlIG9sZENvbnRyb2wgd2l0aCBuZXdDb250cm9sIGF0IGluZGV4XHRcdFxyXG5cdFx0dGhpcy5zZWxlY3RlZFNlY3Rpb24uaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdC8vIHNvcnQgdGhlIHJlc3VsdCBzZWN0aW9uXHJcblx0XHRqUXVlcnkuZWFjaChzZWN0aW9uSXRlbXMsIGZ1bmN0aW9uIChrZXk6IGFueSwgaXRlbTogYW55KSB7XHJcblx0XHRcdGlmIChpdGVtLnR5cGUgIT0gJ2xlYWRmb3JtX3F1ZXN0aW9uJylcclxuXHRcdFx0XHRpdGVtLm9yZGVyID0ga2V5ICsgMTtcclxuXHRcdH0pO1xyXG5cdFx0Ly9zb3J0IHRoZSBwYXJlbnQgYXJyYXlcdFxyXG5cdFx0dGhpcy5zb3J0O1xyXG5cdFx0dGhpcy50dnMudXBkYXRlRm9ybUdyb3VwKHRoaXMuc2VsZWN0ZWRTZWN0aW9uKTtcclxuXHRcdHRoaXMudHZzLnVwZGF0ZUZvcm1Hcm91cCh0aGlzLnNlbGVjdGVkUGFnZS5zZWN0aW9uc1tzZWNpbmRleF0pO1xyXG5cdH1cclxuXHJcblx0YWRkQ29udHJvbChpdGVtOiBJdGVtLCBpbmRleDogbnVtYmVyKSB7XHJcblx0XHQvL2luZGV4IG9mIGN1cnJlbnQgaXRlbVxyXG5cdFx0Ly9sZXQgaW5kZXhzID0galF1ZXJ5LmluQXJyYXkodGhpcy5zZWxlY3RlZENvbnRyb2wsIHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zKTtcclxuXHRcdC8vcHV0IGl0IG5leHQgdG8gY3VycmVudCBpdGVtXHJcblx0XHR0aGlzLnNlbGVjdGVkU2VjdGlvbi5pdGVtcy5zcGxpY2UoaW5kZXggKyAxLCAwLCBpdGVtKTtcclxuXHRcdC8vdXBkYXRlIGZvcm0gZ3JvdXBzXHJcblx0XHR0aGlzLnR2cy51cGRhdGVGb3JtR3JvdXAodGhpcy5zZWxlY3RlZFNlY3Rpb24pO1xyXG5cdFx0Ly9zb3J0IHRoZSBwYXJlbnQgYXJyYXlcdFxyXG5cdFx0dGhpcy5zb3J0O1xyXG5cdFx0Ly8gc29ydCB0aGUgcmVzdWx0IHNlY3Rpb25cclxuXHRcdGpRdWVyeS5lYWNoKHRoaXMuc2VsZWN0ZWRTZWN0aW9uLml0ZW1zLCBmdW5jdGlvbiAoa2V5OiBhbnksIGl0ZW06IGFueSkge1xyXG5cdFx0XHRpdGVtLm9yZGVyID0ga2V5ICsgMTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vcmV0dXJuIGl0ZW07XHJcblx0fVxyXG5cclxuXHRhZGROZXdTZWN0aW9uKHNlY3Rpb246IFNlY3Rpb24sIGl0ZW06IEl0ZW0pIHtcclxuXHRcdGxldCBzZWN0aW9uMSA9IG5ldyBTZWN0aW9uKHNlY3Rpb24udGl0bGUpO1xyXG5cdFx0c2VjdGlvbjEuX2lkID0gc2VjdGlvbi5faWQ7XHJcblx0XHRzZWN0aW9uMS5hZGRJdGVtcyhpdGVtKTtcclxuXHRcdHRoaXMuSlNPTlRlbXBsYXRlLnBhZ2VzWzFdLmFkZFNlY3Rpb25zKHNlY3Rpb24xKTtcclxuXHRcdC8vdXBkYXRlIGZvcm0gZ3JvdXBzXHJcblx0XHR0aGlzLnR2cy51cGRhdGVGb3JtR3JvdXAoc2VjdGlvbjEpO1xyXG5cdH1cclxuXHJcblx0YWRkTmV3UXVlc3Rpb24oaXRlbTogSXRlbSwgaW5kZXg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5KU09OVGVtcGxhdGUucGFnZXNbMV0uc2VjdGlvbnNbaW5kZXggLSAxXS5hZGRJdGVtcyhpdGVtKTtcclxuXHRcdC8vdXBkYXRlIGZvcm0gZ3JvdXBzXHJcblx0XHR0aGlzLnR2cy51cGRhdGVGb3JtR3JvdXAodGhpcy5KU09OVGVtcGxhdGUucGFnZXNbMV0uc2VjdGlvbnNbaW5kZXggLSAxXSk7XHJcblx0XHQvL3NvcnQgdGhlIHBhcmVudCBhcnJheVx0XHJcblx0XHR0aGlzLnNvcnQ7XHJcblx0XHQvLyBzb3J0IHRoZSByZXN1bHQgc2VjdGlvblxyXG5cdFx0alF1ZXJ5LmVhY2godGhpcy5KU09OVGVtcGxhdGUucGFnZXNbMV0uc2VjdGlvbnNbaW5kZXggLSAxXS5pdGVtcywgZnVuY3Rpb24gKGtleTogYW55LCBpdGVtOiBhbnkpIHtcclxuXHRcdFx0aXRlbS5vcmRlciA9IGtleSArIDE7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNldFNlbGVjdGVkTW9kZWwodHlwZTogYW55KSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkTW9kZWwgPSB0eXBlO1xyXG5cdH1cclxuXHJcblx0Z2V0U2VsZWN0ZWRNb2RlbCgpOiBhbnkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRNb2RlbDtcclxuXHR9XHJcblxyXG5cdHNldFNlbGVjdGVkRm9ybXVsYShmb3JtdWxhOiBhbnkpIHtcclxuXHRcdGlmICghZm9ybXVsYSlcclxuXHRcdFx0Zm9ybXVsYSA9IHRoaXMuSlNPTlRlbXBsYXRlLmZvcm11bGFbMF07XHJcblxyXG5cdFx0dGhpcy5zZXRSZXN1bHRCdXR0b25DVEEoZm9ybXVsYSk7XHJcblx0XHR0aGlzLnNlbGVjdGVkRm9ybXVsYSA9IGZvcm11bGE7XHJcblx0fVxyXG5cclxuXHRzZXRSZXN1bHRCdXR0b25DVEEoZm9ybXVsYTogYW55KSB7XHJcblx0XHRpZiAodGhpcy5KU09OVGVtcGxhdGUudGVtcGxhdGVUeXBlID09ICdSZWNvbW1lbmRhdGlvbicpIHtcclxuXHRcdFx0dGhpcy5KU09OVGVtcGxhdGUubmF2aWdhdGVfVXJsID0gZm9ybXVsYS51bml0cy5wb3N0VmFsdWU7XHJcblx0XHRcdC8qKiBzZXQgdGV4dCAqL1xyXG5cdFx0XHRmb3IgKHZhciBwYWdlIG9mIHRoaXMuSlNPTlRlbXBsYXRlLnBhZ2VzKSB7XHJcblx0XHRcdFx0aWYgKHBhZ2UudHlwZSA9PT0gJ1Jlc3VsdCcpIHtcclxuXHRcdFx0XHRcdGZvciAodmFyIHNlY3Rpb24gb2YgcGFnZS5zZWN0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpdGVtIG9mIHNlY3Rpb24uaXRlbXMpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbS50eXBlID09ICdsZWFkZm9ybScgfHwgaXRlbS50eXBlID09ICdjbGlja19idXR0b24nKVxyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5wcm9wcy50aXRsZSA9IGZvcm11bGEudW5pdHMucHJlVmFsdWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRTZWxlY3RlZEZvcm11bGEoKTogYW55IHtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdHZhciBsZWZ0SGVpZ2h0PWpRdWVyeSgnLnJlY29tLXNlY3Rpb24gLmxlZnQtc2VjJykuaGVpZ2h0KCk7XHJcblx0XHR2YXIgcmlnaHRIZWlnaHQ9alF1ZXJ5KCcucmVjb20tc2VjdGlvbiAub3V0ZXItbWFpbicpLmhlaWdodCgpO1xyXG5cdFx0aWYobGVmdEhlaWdodCA+IHJpZ2h0SGVpZ2h0KVxyXG4gICAgICAgIFx0alF1ZXJ5KCcub3V0ZXItbWFpbicpLmNzcygnaGVpZ2h0JyxsZWZ0SGVpZ2h0KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgXHRqUXVlcnkoJy5sZWZ0LW91dGVyJykuY3NzKCdoZWlnaHQnLHJpZ2h0SGVpZ2h0KTtcclxuICAgICAgICBzZWxmLnRleHRhcmVhU2l6ZSgpO1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRGb3JtdWxhO1xyXG5cdH1cclxuXHR0ZXh0YXJlYVNpemUoKXtcclxuXHRcdGlmKGpRdWVyeSgnLmJpZy10ZXh0JykucHJvcCgnc2Nyb2xsSGVpZ2h0Jyk+NTApXHJcblx0XHRcdGpRdWVyeSgnLmJpZy10ZXh0JykuY3NzKCdoZWlnaHQnLGpRdWVyeSgnLmJpZy10ZXh0JykucHJvcCgnc2Nyb2xsSGVpZ2h0JykpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRqUXVlcnkoJy5iaWctdGV4dCcpLmNzcygnaGVpZ2h0Jyw1MCk7XHJcblx0fVxyXG5cdGFkZFJlc3VsdFNlY3Rpb24oc2VjdGlvbjogU2VjdGlvbik6IGFueSB7XHJcblx0XHRsZXQgaXRlbU5ldyA9IG5ldyBJdGVtKCdyZXN1bHRfb3V0cHV0JywgYFxyXG5cdFx0IFx0PHA+e1JgICsgKHRoaXMuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYS5sZW5ndGgpICsgYH08L3A+XHJcbiAgICAgICAgICAgIDxwPkJ5IHRoZSBhZ2Ugb2YgNjU8L3A+XHJcbiAgICAgICAgICAgIDxwPlRoaW5ncyBnZXQgc2VyaW91cyBub3cuIEVuc3VyZSB5b3UncmUgbGl2aW5nIGhlYWx0aHkuPC9wPmAsXHJcblx0XHRcdCcnLCAnJywgJycpO1xyXG5cdFx0Ly9pdGVtTmV3LnNldEZvcm11bGFJbmRleChmb3JtdWxhSW5kZXgudG9TdHJpbmcoKSk7XHJcblx0XHRpdGVtTmV3LnNldFZpc2liaWxpdHkodHJ1ZSk7XHJcblx0XHRzZWN0aW9uLmFkZEl0ZW1zKGl0ZW1OZXcpO1xyXG5cdFx0cmV0dXJuIHsgaXRlbTogc2VjdGlvbi5pdGVtc1tzZWN0aW9uLml0ZW1zLmxlbmd0aCAtIDFdLCBpbmRleDogc2VjdGlvbi5pdGVtcy5sZW5ndGggLSAxIH07XHJcblx0fVxyXG5cclxuXHRkZWxldGVSZXN1bHRTZWN0aW9uKHNlY3Rpb246IFNlY3Rpb24sIGZvcm11bGFJbmRleDogYW55KSB7XHJcblx0XHRzZWN0aW9uLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcblx0XHRcdGl0ZW0uc2V0Rm9ybXVsYUluZGV4KGluZGV4LnRvU3RyaW5nKCkpO1xyXG5cdFx0fSk7XHJcblx0XHRzZWN0aW9uLml0ZW1zLnNwbGljZShmb3JtdWxhSW5kZXgsIDEpO1xyXG5cdH1cclxuXHJcblx0Z2V0VGVtcGxhdGVRdWVzdGlvbmFyZSgpOiBJdGVtW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVRdWVzdGlvbmFyZTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVRlbXBsYXRlUXVlc3Rpb25hcmUoKSB7XHJcblx0XHR0aGlzLnRlbXBsYXRlUXVlc3Rpb25hcmUgPSBbXTtcclxuXHRcdGZvciAodmFyIHBhZ2Ugb2YgdGhpcy5KU09OVGVtcGxhdGUucGFnZXMpIHtcclxuXHRcdFx0aWYgKHBhZ2UudHlwZSA9PT0gJ1F1ZXN0aW9ubmFpcmUnKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgc2VjdGlvbiBvZiBwYWdlLnNlY3Rpb25zKSB7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBpdGVtIG9mIHNlY3Rpb24uaXRlbXMpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50ZW1wbGF0ZVF1ZXN0aW9uYXJlLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Z2V0VGVtcGxhdGVRdWVzdGlvbmFyZVdpdGhFbWl0dGVkTGVhZEZvcm1RdWVzdGlvbigpOiBJdGVtW10ge1xyXG5cdFx0Ly9GaXJzdCBVcGRhdGVzIHRoZSBxdWVzdGlvbmFyZSBsaXN0IGFuZCB0aGVuIHJldHVybnNcclxuXHRcdHRoaXMudGVtcGxhdGVRdWVzdGlvbmFyZVdpdGhFbWl0dGVkTGVhZEZvcm1RdWVzdGlvbiA9IFtdO1xyXG5cdFx0Zm9yICh2YXIgcGFnZSBvZiB0aGlzLkpTT05UZW1wbGF0ZS5wYWdlcykge1xyXG5cdFx0XHRpZiAocGFnZS50eXBlID09PSAnUXVlc3Rpb25uYWlyZScpIHtcclxuXHRcdFx0XHRmb3IgKHZhciBzZWN0aW9uIG9mIHBhZ2Uuc2VjdGlvbnMpIHtcclxuXHRcdFx0XHRcdGZvciAodmFyIGl0ZW0gb2Ygc2VjdGlvbi5pdGVtcykge1xyXG5cdFx0XHRcdFx0XHRpZiAoaXRlbS50eXBlICE9ICdsZWFkZm9ybV9xdWVzdGlvbicpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy50ZW1wbGF0ZVF1ZXN0aW9uYXJlV2l0aEVtaXR0ZWRMZWFkRm9ybVF1ZXN0aW9uLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZVF1ZXN0aW9uYXJlV2l0aEVtaXR0ZWRMZWFkRm9ybVF1ZXN0aW9uO1xyXG5cdH1cclxuXHJcblxyXG5cdGFkZEZvcm11bGEoKTogYW55IHtcclxuXHRcdHJldHVybiB0aGlzLkpTT05UZW1wbGF0ZS5hZGRmb3JtdWxhKCk7XHJcblx0fVxyXG5cclxuXHRzZXRWYWxpZGF0b3JTZXJ2aWNlKGluc3RhbmNlOiBUZW1wbGF0ZVZhbGlkYXRvclNlcnZpY2UpIHtcclxuXHRcdHRoaXMudHZzID0gaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVGb3JtR3JvdXAoKSB7XHJcblx0XHR0aGlzLnR2cy51cGRhdGVGb3JtR3JvdXAodGhpcy5zZWxlY3RlZFNlY3Rpb24pO1xyXG5cdH1cclxuXHQvKkFuaW1hdGlvbiBmdW50aW9ucyovXHJcblx0YW5pbUluaXQoKSB7XHJcblx0XHRpZiAoalF1ZXJ5KCcuZWxlbScpLnBhcmVudCgpLmhhc0NsYXNzKCdncmVlbi1iZycpKSB7XHJcblx0XHRcdGpRdWVyeSgnLmVsZW0nKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZ3JlZW4tYmcnKTtcclxuXHRcdH1cclxuXHRcdGpRdWVyeSgnLmVsZW0nKS5hZGRDbGFzcygnZWxlbS1yb3RhdGUnKS5odG1sKCc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZG9udXRfbGFyZ2U8L2k+JykuZmFkZUluKCdzbG93Jyk7XHJcblxyXG5cdH1cclxuXHRhbmltTG9hZCgpIHtcclxuXHRcdGpRdWVyeSgnLmVsZW0nKS5yZW1vdmVDbGFzcygnZWxlbS1yb3RhdGUnKS5odG1sKCc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGdyZWVuLWNvbG9yXCI+Y2hlY2s8L2k+JykuZmFkZUluKCdzbG93Jyk7XHJcblx0XHRqUXVlcnkoJy5lbGVtJykucGFyZW50KCkuYWRkQ2xhc3MoJ2dyZWVuLWJnJyk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGpRdWVyeSgnLmVsZW0nKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZ3JlZW4tYmcnKTtcclxuXHRcdFx0alF1ZXJ5KCcuZWxlbScpLmh0bWwoJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kb251dF9sYXJnZTwvaT4nKS5mYWRlSW4oJ3Nsb3cnKTtcclxuXHRcdH0sIDcwMCk7XHJcblx0fVxyXG5cclxuXHRkZWJvdW5jZShmdW5jOiBhbnksIHdhaXQ6IG51bWJlcikge1xyXG5cdFx0dmFyIHRpbWVvdXQ6IGFueTtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBjb250ZXh0ID0gdGhpcztcclxuXHRcdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRcdGZ1bmMuYXBwbHkoY29udGV4dCk7XHJcblx0XHRcdH07XHJcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblx0LypFbmQgb2YgQW5pbWF0aW9uIGZ1bnRpb25zKi9cclxufVxyXG4iXX0=
