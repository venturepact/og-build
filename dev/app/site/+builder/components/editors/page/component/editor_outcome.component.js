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
var JSONBuilder_service_1 = require('../../../../services/JSONBuilder.service');
var formula_service_1 = require('../../../../services/formula.service');
var editor_leadform_component_1 = require('../../../editors/leadform/editor_leadform.component');
var addsection_component_1 = require('../component/addsection.component');
var builder_service_1 = require('../../../../services/builder.service');
var JSONUpdateItemTracker_service_1 = require('../../../../services/JSONUpdateItemTracker.service');
var model_1 = require('../../../../models/model');
var feature_access_service_1 = require('../../../../../../shared/services/feature-access.service');
var recommendation_service_1 = require('../../../../../templates/services/recommendation.service');
var editor_wysiwyg_component_1 = require('../../../editors/wysiwyg/editor_wysiwyg.component');
var EditorResultPage = (function () {
    function EditorResultPage(jsonBuilderHandler, _builderService, _ItemTrackService, formulaService, _featureAuthService, recommendationService) {
        this.jsonBuilderHandler = jsonBuilderHandler;
        this._builderService = _builderService;
        this._ItemTrackService = _ItemTrackService;
        this.formulaService = formulaService;
        this._featureAuthService = _featureAuthService;
        this.recommendationService = recommendationService;
        this.filePickerKey = 'A3ygIw4hISSCdApqW4SAwz';
        this.formulaResult = {};
        this.validUrl = true;
        this.sectionOrder = [];
        this.editorControl = {
            result_header: {},
            section: {},
            leadform: {},
            click_button: {},
            share_links: {},
            result_redo: {},
            backImage: {},
            result_disclaimer: {},
            footer_links: {},
            result_summary: {}
        };
        this.isCtaAccessible = false;
        this.isRealTimeResult = false;
        this.page = jsonBuilderHandler.getSelectedPage();
        for (var section in this.page.sections) {
            for (var item in this.page.sections[section].items) {
                if (this.page.sections[section].title === 'Result') {
                    this.resultSection = this.page.sections[section];
                    this.jsonBuilderHandler.setSelectedControl(this.resultSection.items[0]);
                }
                if (this.page.sections[section].type === 'LeadForm')
                    this.leadformSection = this.page.sections[section];
                for (var prop in this.editorControl) {
                    if (prop === this.page.sections[section].items[item].type)
                        this.editorControl[prop] = this.page.sections[section].items[item];
                }
            }
        }
    }
    EditorResultPage.prototype.ngOnInit = function () {
        this._ItemTrackService.resetUnsavedData();
        this._ItemTrackService.setUnSavedPage(this.page);
        this.isRealTimeResult = this._featureAuthService.features.real_time_results;
        this.isCtaAccessible = this._featureAuthService.features.cta;
    };
    EditorResultPage.prototype.ngOnChanges = function () {
        console.log('checking hyper');
    };
    EditorResultPage.prototype.ngOnDestroy = function () {
        var rightPanelHeight = jQuery(window).height() - 72;
    };
    EditorResultPage.prototype.togglePrivacy = function () {
        this.editorControl.footer_links.visible = !this.editorControl.footer_links.visible;
    };
    EditorResultPage.prototype.toggleWysiwig = function (control) {
        control.visible = !control.visible;
    };
    EditorResultPage.prototype.ngAfterViewInit = function () {
        var self = this;
        var editor;
        var editor1;
        editor = jQuery('.wysiwyg').froalaEditor({
            heightMax: 250,
            toolbarButtons: ['bold', '|', 'italic', '|', 'underline',],
        });
        editor1 = jQuery('.wysiwyg-desc').froalaEditor({
            heightMax: 250,
            toolbarButtons: ['bold', '|', 'italic', '|', 'underline',],
        });
        jQuery('.wysiwyg').on('froalaEditor.contentChanged', function (e, editor) {
            self.editorHtml = e.currentTarget.value;
            self.editorControl.result_header.props.title = e.currentTarget.value;
        });
        jQuery('.wysiwyg-desc').on('froalaEditor.contentChanged', function (e, editor1) {
            self.jsonBuilderHandler.getSelectedFormula().html = e.currentTarget.value;
        });
        this.handleNameEdit();
        this.resultScroll();
        jQuery(window).on("resize", function () {
            self.resultScroll();
        });
    };
    EditorResultPage.prototype.handleNameEdit = function () {
        jQuery(document).on("click", ".edit_name_link", function () {
            if ((jQuery(this).parent().parent().parent().find('.edit-name').hasClass('hide'))) {
                jQuery(this).parent().parent().parent().find('.result_text').addClass('hide');
                jQuery(this).parent().parent().parent().find('.edit-name').removeClass('hide');
                jQuery(this).parent().parent().parent().find('.edit-name').focus();
            }
        });
        jQuery(document).on("focusout", ".edit-name", function () {
            jQuery(this).parent().parent().find('.index-span').removeClass('hide');
            jQuery(this).parent().parent().find('.result_text').removeClass('hide');
            jQuery(this).parent().parent().find('.edit-name').addClass('hide');
        });
        jQuery(document).on("focus", ".edit-name", function () {
            jQuery(this).parent().parent().find('.index-span').addClass('hide');
        });
        jQuery(document).on("keyup", ".edit-name", function (e) {
            jQuery(this).parent().parent().find('.index-span').addClass('hide');
            if (e.which == 13)
                jQuery(this).focusout();
        });
    };
    EditorResultPage.prototype.resultScroll = function () {
    };
    EditorResultPage.prototype.accordianOpen = function (val, control) {
        this.jsonBuilderHandler.setSelectedControl(control);
        event.stopPropagation();
        event.preventDefault();
    };
    EditorResultPage.prototype.eyeResult = function () {
        var self = this;
        jQuery('.settings-content').fadeToggle('fast');
        jQuery('.settings-content').toggleClass('open');
        if (jQuery('.settings-content.open').length <= 0) {
            jQuery('.result-scroll').css('height', 'auto');
            self.resultScroll();
        }
    };
    EditorResultPage.prototype.validateUrl = function () {
        var urlregex = /(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org]+(\[\?%&=]*)?/;
        if (urlregex.test(this.jsonBuilderHandler.getJSONBuilt().navigate_Url)) {
            this.validUrl = true;
        }
        else {
            this.validUrl = false;
        }
    };
    EditorResultPage.prototype.toggleDisclaimer = function () {
        this.editorControl.result_disclaimer.visible = !this.editorControl.result_disclaimer.visible;
    };
    EditorResultPage.prototype.isSocialChecked = function (socialMedia) {
        for (var option in this.editorControl.share_links.options) {
            if (this.editorControl.share_links.options[option].type == socialMedia) {
                return this.editorControl.share_links.options[option].selected;
            }
        }
        return true;
    };
    EditorResultPage.prototype.toggleSocialIcon = function (socialMedia) {
        var flag = false;
        for (var option in this.editorControl.share_links.options) {
            if (this.editorControl.share_links.options[option].type == socialMedia) {
                this.editorControl.share_links.options[option].selected = !this.editorControl.share_links.options[option].selected;
                flag = true;
            }
        }
        if (flag == false) {
            var option = (new model_1.Item).getOption();
            option.type = socialMedia;
            option.selected = false;
            this.editorControl.share_links.options.push(option);
        }
    };
    EditorResultPage.prototype.scrollToTop = function () {
        if (jQuery('.settings-header').length) {
            var position = jQuery('.settings-header').position().top;
            jQuery('.no-scroll').animate({ scrollTop: position }, 1000);
        }
    };
    EditorResultPage.prototype.addNewSection = function (control) {
        setTimeout(function () {
            control.delLoading = false;
            control.addLoading = false;
        }, 500);
        this.addItemResult();
    };
    EditorResultPage.prototype.deleteResult = function (formulaIndex, resultControl) {
        var _this = this;
        if (this.resultSection.items.length > 1) {
            this._builderService.deleteItem(resultControl._id, this.resultSection._id)
                .subscribe(function (response) {
                if (response.title != 'Not Deleted') {
                    _this.jsonBuilderHandler.deleteResultSection(_this.resultSection, formulaIndex);
                    _this.jsonBuilderHandler.getJSONBuilt().formula.splice(formulaIndex, 1);
                    window.toastNotification('Result Deleted Successfully');
                    if (_this.resultSection.items.length <= 3)
                        jQuery('.result-comm').slimScroll({ destroy: true });
                }
                resultControl.delLoading = false;
            }, function (error) {
                console.log(error);
            });
        }
    };
    EditorResultPage.prototype.addItemResult = function () {
        var _this = this;
        if (this.jsonBuilderHandler.getJSONBuilt().formula.length <= this.resultSection.items.length)
            this.jsonBuilderHandler.addFormula();
        this.jsonBuilderHandler.animInit();
        var ItemResult = this.jsonBuilderHandler.addResultSection(this.resultSection);
        this._builderService.addItem(this.resultSection._id, ItemResult.item, this.resultSection.items.length - 1).subscribe(function (response) {
            _this.resultSection.items[ItemResult.index] = new model_1.Item().deserialize(response);
            _this.jsonBuilderHandler.debounce(_this.jsonBuilderHandler.animLoad(), 1800);
            _this.openResult(_this.resultSection.items.length, _this.resultSection.items.length);
        }, function (error) {
        });
    };
    EditorResultPage.prototype.toggleSocialLink = function () {
        this.editorControl.share_links.visible = !this.editorControl.share_links.visible;
    };
    EditorResultPage.prototype.toggleRedo = function () {
        this.editorControl.result_redo.visible = !this.editorControl.result_redo.visible;
    };
    EditorResultPage.prototype.toggleSummary = function () {
        this.editorControl.result_summary.visible = !this.editorControl.result_summary.visible;
        if (this.editorControl.result_summary.visible) {
            this.resultSection.fullWidth = false;
            this.leadformSection.fullWidth = false;
        }
        else {
            this.resultSection.fullWidth = true;
            this.leadformSection.fullWidth = true;
        }
    };
    EditorResultPage.prototype.toggleFormula = function (index) {
        this.jsonBuilderHandler.updateTemplateQuestionare();
        jQuery('.formula-final').data('formula', index);
        jQuery('#formula-modal-new').find('#formula').html(this.jsonBuilderHandler.getJSONBuilt().formula[index].html);
        jQuery('.formula-left-subheading').html(this.jsonBuilderHandler.getJSONBuilt().formula[index].name);
        this.changeRefreshComponent(index);
    };
    EditorResultPage.prototype.unitsChanged = function (index, value) {
        this.jsonBuilderHandler.getJSONBuilt().formula[index].units.postfix = (value == 'Suffix') ? true : false;
    };
    EditorResultPage.prototype.changeRefreshComponent = function (index) {
        var lowerRangeValues = [], a = 0;
        var higerRangeValues = [], b = 0;
        this.QuestionnaireJson = this.jsonBuilderHandler.getTemplateQuestionareWithEmittedLeadFormQuestion();
        var rawFormula = jQuery('#formula')[0].innerText;
        var formulaIndex = jQuery('.formula-final').data('formula');
        var currentQuesNumber;
        var quesArray = [], j = 0;
        jQuery('#random-ques-nums')[0].innerHTML = '';
        jQuery('#random-ques-titles')[0].innerHTML = '';
        this.formulaService.updateFormulaValidity(rawFormula, formulaIndex);
        if (!this.jsonBuilderHandler.getJSONBuilt().formula[formulaIndex].isValid)
            jQuery('#isValidFormula').html("Your Formula is invalid as the question : " +
                " arn't marked as mandatory neither a default is selected");
        else
            jQuery('#isValidFormula').html('');
        var mapForRandomValues = {};
        for (var i = 0; i < rawFormula.length; i++) {
            if (rawFormula[i] == 'Q') {
                i++;
                currentQuesNumber = '';
                while (!isNaN(parseInt(rawFormula[i])))
                    currentQuesNumber += rawFormula[i++];
                var currentQuesObject = this.QuestionnaireJson[currentQuesNumber - 1];
                if (currentQuesObject) {
                    var randNumber = 0;
                    if (currentQuesObject.type == 'slider') {
                        var arr = [], sum = parseInt(currentQuesObject.props.minVal);
                        while (sum <= parseInt(currentQuesObject.props.maxVal)) {
                            arr.push(sum);
                            sum += parseInt(currentQuesObject.props.steps);
                        }
                        if (currentQuesNumber in mapForRandomValues)
                            randNumber = mapForRandomValues[currentQuesNumber];
                        else {
                            randNumber = arr[Math.floor(Math.random() * arr.length)];
                            mapForRandomValues[currentQuesNumber] = randNumber;
                        }
                    }
                    else if (currentQuesObject.type == 'textfield' && currentQuesObject.config.type == 'number') {
                        var arr = [], sum = parseInt(currentQuesObject.props.minVal);
                        while (sum <= parseInt(currentQuesObject.props.maxVal)) {
                            arr.push(sum);
                            sum += 1;
                        }
                        if (currentQuesNumber in mapForRandomValues)
                            randNumber = mapForRandomValues[currentQuesNumber];
                        else {
                            randNumber = arr[Math.floor(Math.random() * arr.length)];
                            mapForRandomValues[currentQuesNumber] = randNumber;
                        }
                    }
                    else {
                        if (currentQuesNumber in mapForRandomValues)
                            randNumber = mapForRandomValues[currentQuesNumber];
                        else {
                            randNumber = Math.floor(Math.random() * currentQuesObject.options.length);
                            mapForRandomValues[currentQuesNumber] = randNumber;
                        }
                    }
                    quesArray[j++] = randNumber;
                    var min = Number.MAX_VALUE;
                    var max = -Number.MIN_VALUE;
                    for (var t = 0; t < currentQuesObject.options.length; t++) {
                        if (currentQuesObject.options[t].value <= min)
                            min = t;
                        if (currentQuesObject.options[t].value >= max)
                            max = t;
                    }
                    lowerRangeValues[a++] = min;
                    higerRangeValues[b++] = max;
                    jQuery('#random-ques-nums')[0].innerHTML += '<th>Q' + currentQuesNumber + '</th>';
                    if (currentQuesObject.type != 'slider') {
                        jQuery('#random-ques-titles')[0].innerHTML += '<td> (' + currentQuesObject.options[randNumber].label + ')</td>';
                    }
                    else {
                        jQuery('#random-ques-titles')[0].innerHTML += '<td> (' + randNumber + ')</td>';
                    }
                }
                else {
                    jQuery('#random-ques-nums')[0].innerHTML += '<th>Q' + currentQuesNumber + '</th>';
                    jQuery('#random-ques-titles')[0].innerHTML += '<td> (' + 'Doesn\'t Exist' + ')</td>';
                }
            }
        }
        var resultString = jQuery('#formula')[0].innerText.replace(/\s/g, '')
            .replace(/,/g, '').replace(/x/g, '*');
        var finalQuestionString = this.createFinalQuestionString(resultString, quesArray, 'random');
        var quesNowObject = this.jsonBuilderHandler.getJSONBuilt().formula[formulaIndex];
        var rangeMinValue;
        var rangeMaxValue;
        var finalQuestionStringForLowerRange = this.createFinalQuestionString(resultString, lowerRangeValues, 'lower');
        var finalQuestionStringForHigherRange = this.createFinalQuestionString(resultString, higerRangeValues, 'higher');
        try {
            rangeMinValue = math.eval(finalQuestionStringForLowerRange);
            rangeMinValue = this.formulaService.addCommas(rangeMinValue.toFixed(Number(quesNowObject.decimal)));
        }
        catch (e) {
            rangeMinValue = undefined;
        }
        try {
            rangeMaxValue = math.eval(finalQuestionStringForHigherRange);
            rangeMaxValue = this.formulaService.addCommas(rangeMaxValue.toFixed(Number(quesNowObject.decimal)));
        }
        catch (e) {
            rangeMaxValue = undefined;
        }
        if (rangeMinValue === undefined || rangeMaxValue === undefined)
            jQuery('#final-result-range')[0].innerHTML = '<li>Invalid</li>';
        else {
            var formulaNow = this.jsonBuilderHandler.getJSONBuilt().formula[formulaIndex];
            if (!formulaNow.units.postfix) {
                rangeMinValue = formulaNow.units.value + rangeMinValue;
                rangeMaxValue = formulaNow.units.value + rangeMaxValue;
            }
            else {
                rangeMinValue = rangeMinValue + formulaNow.units.value;
                rangeMaxValue = rangeMaxValue + formulaNow.units.value;
            }
            jQuery('#final-result-range')[0].innerHTML = '<li>' + rangeMinValue + '</li>' + '<li>to</li>' + '<li>' + rangeMaxValue + '</li>';
        }
        var finalAnswer;
        try {
            if (finalQuestionString) {
                finalAnswer = math.eval(finalQuestionString);
                if (finalAnswer % 1 != 0)
                    finalAnswer = finalAnswer.toFixed(2);
            }
        }
        catch (e) {
            finalAnswer = 'Syntax Error';
        }
        if (finalAnswer === undefined)
            finalAnswer = 0;
        var lower, upper;
        if (quesNowObject.range.status) {
            var lowerVal = parseFloat(quesNowObject.range.lower.value);
            var upperVal = parseFloat(quesNowObject.range.higher.value);
            if (isNaN(lowerVal))
                lowerVal = 0;
            if (isNaN(upperVal))
                upperVal = 0;
            if (isNaN(parseFloat(finalAnswer))) {
                finalAnswer = 0;
            }
            else {
                if (quesNowObject.range.higher.type == 'Number' && quesNowObject.range.lower.type == 'Number') {
                    lower = (parseFloat(finalAnswer) - lowerVal);
                    upper = (parseFloat(finalAnswer) + upperVal);
                    finalAnswer = lower + ' to ' + upper;
                }
                else if (quesNowObject.range.higher.type == 'Number' && quesNowObject.range.lower.type == 'Percentage') {
                    lower = (parseFloat(finalAnswer) - (lowerVal / 100) * (parseFloat(finalAnswer)));
                    upper = (parseFloat(finalAnswer) + upperVal);
                    if (isNaN(lowerVal))
                        lower = parseFloat(finalAnswer);
                    finalAnswer = lower + ' to ' + upper;
                }
                else if (quesNowObject.range.higher.type == 'Percentage' && quesNowObject.range.lower.type == 'Number') {
                    lower = (parseFloat(finalAnswer) - lowerVal);
                    upper = (parseFloat(finalAnswer) + (upperVal / 100) * (parseFloat(finalAnswer)));
                    if (isNaN(upperVal))
                        upper = parseFloat(finalAnswer);
                    finalAnswer = lower + ' to ' + upper;
                }
                else if (quesNowObject.range.higher.type == 'Percentage' && quesNowObject.range.lower.type == 'Percentage') {
                    lower = (parseFloat(finalAnswer) - (lowerVal / 100) * (parseFloat(finalAnswer)));
                    upper = (parseFloat(finalAnswer) + (upperVal / 100) * (parseFloat(finalAnswer)));
                    if (isNaN(upperVal))
                        upper = parseFloat(finalAnswer);
                    if (isNaN(lowerVal))
                        lower = parseFloat(finalAnswer);
                    finalAnswer = lower + ' to ' + upper;
                }
            }
        }
        if (!quesNowObject.units.postfix) {
            finalAnswer = quesNowObject.units.value + finalAnswer;
        }
        else {
            finalAnswer = finalAnswer + quesNowObject.units.value;
        }
        jQuery('#final-random-value').html(finalAnswer);
    };
    EditorResultPage.prototype.createFinalQuestionString = function (genericQuestion, quesArray, lowerOrHigherOrRandom) {
        var itterator = 0;
        var currentQuesNumber, j;
        for (var i = 0; i < genericQuestion.length; i++) {
            if (genericQuestion[i] == 'Q') {
                j = ++i;
                currentQuesNumber = '';
                while (!isNaN(parseInt(genericQuestion[i])))
                    currentQuesNumber += genericQuestion[i++];
                var val = this.getValueOfQuestionNumber(currentQuesNumber, quesArray[itterator], lowerOrHigherOrRandom);
                genericQuestion = genericQuestion.substring(0, j - 1) +
                    val +
                    genericQuestion.substring(i);
                i = j - 1 + val.toString().length;
                itterator++;
            }
        }
        return genericQuestion;
    };
    EditorResultPage.prototype.getValueOfQuestionNumber = function (quesNumber, optionSelectedIndex, lowerOrHigherOrRandom) {
        var currentQuesObject = this.jsonBuilderHandler.getTemplateQuestionareWithEmittedLeadFormQuestion()[quesNumber - 1];
        if (currentQuesObject) {
            if (lowerOrHigherOrRandom == 'lower' && currentQuesObject.type == 'slider') {
                return currentQuesObject.props.minVal;
            }
            if (lowerOrHigherOrRandom == 'higher' && currentQuesObject.type == 'slider') {
                return currentQuesObject.props.maxVal;
            }
            if (lowerOrHigherOrRandom == 'random' && currentQuesObject.type == 'slider') {
                return optionSelectedIndex;
            }
            else
                return currentQuesObject.options[optionSelectedIndex].value;
        }
        else {
            return 0;
        }
    };
    EditorResultPage.prototype.onRealTimeChange = function () {
        if (this.isRealTimeResult) {
            this.jsonBuilderHandler.getJSONBuilt().realTime = !this.jsonBuilderHandler.getJSONBuilt().realTime;
        }
        else {
            jQuery('#premiumModal').modal('show');
        }
    };
    EditorResultPage.prototype.saveAppsetting = function () {
        this._builderService.saveAppSetting(this.jsonBuilderHandler.getJSONBuilt())
            .subscribe(function (response) {
        }, function (error) {
            console.log(error);
        });
    };
    EditorResultPage.prototype.ctaCheck = function () {
        if (this.isCtaAccessible == false) {
            jQuery('#premiumModal').modal('show');
        }
    };
    EditorResultPage.prototype.onChangeDisclaimer = function (editorControl) {
    };
    EditorResultPage.prototype.callGA = function (opt) {
        switch (opt) {
            case "REALTIMECHANGE":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'ShowResultInReal');
                _kmq.push(['record', 'Builder Show Result in Realtime Toggle']);
                break;
            case "EDITFORMULA":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'EditResult');
                _kmq.push(['record', 'Builder Edit Result Click']);
                break;
            case "ADDRESULT":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'AddResult');
                _kmq.push(['record', 'Builder Add Result Click']);
                break;
            case "SUMMARY":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'Summary');
                _kmq.push(['record', 'Builder Results Summary Toggle']);
                break;
            case "SHARERESULT":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'ShareResult');
                _kmq.push(['record', 'Builder Results Share Toggle']);
                break;
            case "REDOCALC":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'RedoCalculation');
                _kmq.push(['record', 'Builder Results Redo Calculation Toggle']);
                break;
            case "DISCLAIMER":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'DisclaimerToggle');
                _kmq.push(['record', 'Builder Results Disclaimer Toggle']);
                break;
        }
    };
    EditorResultPage.prototype.openResult = function (resultCount, index) {
        for (var i = 1; i <= resultCount; i++) {
            if (i == index) {
            }
            else {
            }
        }
    };
    EditorResultPage.prototype.upload = function (index) {
        var _this = this;
        var self = this;
        filepicker.setKey(this.filePickerKey);
        filepicker.pick({ mimetypes: ['image/*'], }, function (InkBlob) {
            _this.jsonBuilderHandler.getSelectedFormula().result = InkBlob.url;
            jQuery('#filepicker_dialog_container').find('a').click();
        }, function (FPError) {
            console.log(FPError.toString());
        });
    };
    EditorResultPage.prototype.copyToAll = function (type) {
        var text;
        if (type == 'header') {
            text = this.jsonBuilderHandler.getSelectedFormula().decimal;
            this.jsonBuilderHandler.getJSONBuilt().formula.map(function (formula) { formula.decimal = text; return formula; });
            window.toastNotification('Header has been applied to all outcomes');
        }
        else if (type == 'button') {
            text = this.jsonBuilderHandler.getSelectedFormula().units.preValue;
            this.jsonBuilderHandler.getJSONBuilt().formula.map(function (formula) { formula.units.preValue = text; return formula; });
            window.toastNotification('Button cta has been applied to all outcomes');
        }
        else if (type == 'url') {
            text = this.jsonBuilderHandler.getSelectedFormula().units.postValue;
            this.jsonBuilderHandler.getJSONBuilt().formula.map(function (formula) { formula.units.postValue = text; return formula; });
            window.toastNotification('BUrl has been applied to all outcomes');
        }
    };
    EditorResultPage.prototype.editOutcome = function (event) {
        var formulaValue = this.jsonBuilderHandler.getSelectedFormula().value;
        this.jsonBuilderHandler.getTemplateQuestionare().forEach(function (item) {
            if (item.type == 'selectbox' || item.type == 'radio_button') {
                item.options.forEach(function (option) {
                    var type = option.value;
                    if (type && type != '') {
                        var typeArray = type.split(',');
                        var valueIndex = typeArray.indexOf(formulaValue);
                        if (valueIndex != (-1)) {
                            typeArray[valueIndex] = event.target.value.trim();
                            option.value = typeArray.toString();
                        }
                    }
                });
            }
        });
        this.jsonBuilderHandler.getSelectedFormula().value = event.target.value.trim();
    };
    EditorResultPage.prototype.disableSpace = function (event) {
        this.jsonBuilderHandler.getSelectedFormula().value = event.target.value.trim().replace(/\s/g, '');
    };
    EditorResultPage.prototype.textAreaAdjust = function (event) {
        jQuery('.big-text').css('height', jQuery('.big-text').prop('scrollHeight'));
    };
    EditorResultPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor_result_page',
            templateUrl: 'assets/html/editor_resultPage.html',
            providers: [formula_service_1.FormulaService],
            directives: [editor_leadform_component_1.EditorLeadForm, addsection_component_1.AddSection, editor_wysiwyg_component_1.EditorWysiwyg],
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: [
                'assets/css/mCustomScrollbar.css'
            ]
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker, formula_service_1.FormulaService, feature_access_service_1.FeatureAuthService, recommendation_service_1.RecommendationService])
    ], EditorResultPage);
    return EditorResultPage;
}());
exports.EditorResultPage = EditorResultPage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9wYWdlL2NvbXBvbmVudC9lZGl0b3Jfb3V0Y29tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwRixlQUFlLENBQUMsQ0FBQTtBQUMxRyxvQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQUN2RSxnQ0FBK0Isc0NBQXNDLENBQUMsQ0FBQTtBQUN0RSwwQ0FBK0IscURBQXFELENBQUMsQ0FBQTtBQUNyRixxQ0FBMkIsbUNBQW1DLENBQUMsQ0FBQTtBQUMvRCxnQ0FBK0Isc0NBQXNDLENBQUMsQ0FBQTtBQUN0RSw4Q0FBZ0Msb0RBQW9ELENBQUMsQ0FBQTtBQUNyRixzQkFBb0MsMEJBQTBCLENBQUMsQ0FBQTtBQUMvRCx1Q0FBbUMsMERBQTBELENBQUMsQ0FBQTtBQUM5Rix1Q0FBc0MsMERBQTBELENBQUMsQ0FBQTtBQUNqRyx5Q0FBOEIsbURBQW1ELENBQUMsQ0FBQTtBQW9CbEY7SUEwQkksMEJBQ1ksa0JBQStCLEVBQy9CLGVBQStCLEVBQy9CLGlCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixtQkFBdUMsRUFDdkMscUJBQTRDO1FBTDVDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBYTtRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFpQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUN2QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBL0J4RCxrQkFBYSxHQUFRLHdCQUF3QixDQUFDO1FBRTlDLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBRXhCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFNekIsa0JBQWEsR0FBUTtZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixPQUFPLEVB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RSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUNELHlDQUFjLEdBQWQsVUFBZSxLQUFVO1FBQ3JCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBN29CTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsVUFBVSxFQUFFLENBQUMsMENBQWMsRUFBRSxpQ0FBVSxFQUFDLHdDQUFhLENBQUM7WUFDdEQsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDckMsU0FBUyxFQUFFO2dCQUNQLGlDQUFpQzthQUNwQztTQUNKLENBQUM7O3dCQUFBO0lBcW9CRix1QkFBQztBQUFELENBbm9CQSxBQW1vQkMsSUFBQTtBQW5vQlksd0JBQWdCLG1CQW1vQjVCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvY29tcG9uZW50cy9lZGl0b3JzL3BhZ2UvY29tcG9uZW50L2VkaXRvcl9vdXRjb21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybXVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtdWxhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFZGl0b3JMZWFkRm9ybSB9IGZyb20gJy4uLy4uLy4uL2VkaXRvcnMvbGVhZGZvcm0vZWRpdG9yX2xlYWRmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkZFNlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnQvYWRkc2VjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdWlsZGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2J1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEpTT05JdGVtVHJhY2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL0pTT05VcGRhdGVJdGVtVHJhY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSXRlbSwgU2VjdGlvbiwgUGFnZSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IEZlYXR1cmVBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9mZWF0dXJlLWFjY2Vzcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVjb21tZW5kYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdGVtcGxhdGVzL3NlcnZpY2VzL3JlY29tbWVuZGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFZGl0b3JXeXNpd3lnIH0gZnJvbSAnLi4vLi4vLi4vZWRpdG9ycy93eXNpd3lnL2VkaXRvcl93eXNpd3lnLmNvbXBvbmVudCc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgbWF0aDogYW55O1xyXG5kZWNsYXJlIHZhciBmaWxlcGlja2VyOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZWRpdG9yX3Jlc3VsdF9wYWdlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXNzZXRzL2h0bWwvZWRpdG9yX3Jlc3VsdFBhZ2UuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtGb3JtdWxhU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOiBbRWRpdG9yTGVhZEZvcm0sIEFkZFNlY3Rpb24sRWRpdG9yV3lzaXd5Z10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgJ2Fzc2V0cy9jc3MvbUN1c3RvbVNjcm9sbGJhci5jc3MnXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yUmVzdWx0UGFnZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgZmlsZVBpY2tlcktleTogYW55ID0gJ0EzeWdJdzRoSVNTQ2RBcHFXNFNBd3onO1xyXG4gICAgcGFnZTogUGFnZTtcclxuICAgIGZvcm11bGFSZXN1bHQ6IGFueSA9IHt9O1xyXG4gICAgY29udHJvbDogYW55O1xyXG4gICAgdmFsaWRVcmw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc2VjdGlvbk9yZGVyOiBhbnlbXSA9IFtdO1xyXG4gICAgcmVzdWx0U2VjdGlvbjogU2VjdGlvbjtcclxuICAgIGxlYWRmb3JtU2VjdGlvbjogU2VjdGlvbjtcclxuICAgIGVkaXRvckh0bWw6IHN0cmluZztcclxuICAgIFF1ZXN0aW9ubmFpcmVKc29uOiBhbnk7XHJcbiAgICBuYXZpZ2F0ZV91cmw6IGFueTtcclxuICAgIGVkaXRvckNvbnRyb2w6IGFueSA9IHtcclxuICAgICAgICByZXN1bHRfaGVhZGVyOiB7fSxcclxuICAgICAgICBzZWN0aW9uOiB7fSxcclxuICAgICAgICBsZWFkZm9ybToge30sXHJcbiAgICAgICAgY2xpY2tfYnV0dG9uOiB7fSxcclxuICAgICAgICBzaGFyZV9saW5rczoge30sXHJcbiAgICAgICAgcmVzdWx0X3JlZG86IHt9LFxyXG4gICAgICAgIGJhY2tJbWFnZToge30sXHJcbiAgICAgICAgcmVzdWx0X2Rpc2NsYWltZXI6IHt9LFxyXG4gICAgICAgIGZvb3Rlcl9saW5rczoge30sXHJcbiAgICAgICAgcmVzdWx0X3N1bW1hcnk6IHt9XHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBpc0N0YUFjY2Vzc2libGU6IEJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNSZWFsVGltZVJlc3VsdDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBqc29uQnVpbGRlckhhbmRsZXI6IEpTT05CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2J1aWxkZXJTZXJ2aWNlOiBCdWlsZGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9JdGVtVHJhY2tTZXJ2aWNlOiBKU09OSXRlbVRyYWNrZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtdWxhU2VydmljZTogRm9ybXVsYVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfZmVhdHVyZUF1dGhTZXJ2aWNlOiBGZWF0dXJlQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWNvbW1lbmRhdGlvblNlcnZpY2U6IFJlY29tbWVuZGF0aW9uU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0ganNvbkJ1aWxkZXJIYW5kbGVyLmdldFNlbGVjdGVkUGFnZSgpO1xyXG4gICAgICAgIGZvciAobGV0IHNlY3Rpb24gaW4gdGhpcy5wYWdlLnNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gaW4gdGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgcmVzdWx0IG91dHB1dHNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl0udGl0bGUgPT09ICdSZXN1bHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRTZWN0aW9uID0gdGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLnNldFNlbGVjdGVkQ29udHJvbCh0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXS50eXBlID09PSAnTGVhZEZvcm0nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVhZGZvcm1TZWN0aW9uID0gdGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLmVkaXRvckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gdGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dLml0ZW1zW2l0ZW1dLnR5cGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbFtwcm9wXSA9IHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXS5pdGVtc1tpdGVtXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9JdGVtVHJhY2tTZXJ2aWNlLnJlc2V0VW5zYXZlZERhdGEoKTtcclxuICAgICAgICB0aGlzLl9JdGVtVHJhY2tTZXJ2aWNlLnNldFVuU2F2ZWRQYWdlKHRoaXMucGFnZSk7XHJcbiAgICAgICAgdGhpcy5pc1JlYWxUaW1lUmVzdWx0ID0gdGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmZlYXR1cmVzLnJlYWxfdGltZV9yZXN1bHRzO1xyXG4gICAgICAgIHRoaXMuaXNDdGFBY2Nlc3NpYmxlID0gdGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmZlYXR1cmVzLmN0YTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2luZyBoeXBlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHZhciByaWdodFBhbmVsSGVpZ2h0ID0galF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgLSA3MjtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVQcml2YWN5KCkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbC5mb290ZXJfbGlua3MudmlzaWJsZSA9ICF0aGlzLmVkaXRvckNvbnRyb2wuZm9vdGVyX2xpbmtzLnZpc2libGU7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVXeXNpd2lnKGNvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIGNvbnRyb2wudmlzaWJsZSA9ICFjb250cm9sLnZpc2libGU7XHJcblxyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgZWRpdG9yOiBhbnk7XHJcbiAgICAgICAgbGV0IGVkaXRvcjE6IGFueTtcclxuICAgICAgICBlZGl0b3IgPSBqUXVlcnkoJy53eXNpd3lnJykuZnJvYWxhRWRpdG9yKHtcclxuICAgICAgICAgICAgaGVpZ2h0TWF4OiAyNTAsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdXR0b25zOiBbJ2JvbGQnLCAnfCcsICdpdGFsaWMnLCAnfCcsICd1bmRlcmxpbmUnLF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgIGVkaXRvcjEgPSBqUXVlcnkoJy53eXNpd3lnLWRlc2MnKS5mcm9hbGFFZGl0b3Ioe1xyXG4gICAgICAgICAgICBoZWlnaHRNYXg6IDI1MCxcclxuICAgICAgICAgICAgdG9vbGJhckJ1dHRvbnM6IFsnYm9sZCcsICd8JywgJ2l0YWxpYycsICd8JywgJ3VuZGVybGluZScsXSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgalF1ZXJ5KCcuZnItd3JhcHBlcicpLm1DdXN0b21TY3JvbGxiYXIoKTsgfSwgNTApO1xyXG4gICAgICAgIGpRdWVyeSgnLnd5c2l3eWcnKS5vbignZnJvYWxhRWRpdG9yLmNvbnRlbnRDaGFuZ2VkJywgZnVuY3Rpb24gKGU6IGFueSwgZWRpdG9yOiBhbnkpIHtcclxuICAgICAgICAgICAgc2VsZi5lZGl0b3JIdG1sID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBzZWxmLmVkaXRvckNvbnRyb2wucmVzdWx0X2hlYWRlci5wcm9wcy50aXRsZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCcud3lzaXd5Zy1kZXNjJykub24oJ2Zyb2FsYUVkaXRvci5jb250ZW50Q2hhbmdlZCcsIGZ1bmN0aW9uIChlOiBhbnksIGVkaXRvcjE6IGFueSkge1xyXG4gICAgICAgICAgICBzZWxmLmpzb25CdWlsZGVySGFuZGxlci5nZXRTZWxlY3RlZEZvcm11bGEoKS5odG1sID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTmFtZUVkaXQoKTtcclxuICAgICAgICB0aGlzLnJlc3VsdFNjcm9sbCgpO1xyXG4gICAgICAgIGpRdWVyeSh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5yZXN1bHRTY3JvbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOYW1lRWRpdCgpIHtcclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZWRpdF9uYW1lX2xpbmtcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoKGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuZWRpdC1uYW1lJykuaGFzQ2xhc3MoJ2hpZGUnKSkpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcucmVzdWx0X3RleHQnKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5lZGl0LW5hbWUnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5lZGl0LW5hbWUnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub24oXCJmb2N1c291dFwiLCBcIi5lZGl0LW5hbWVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZCgnLmluZGV4LXNwYW4nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnJlc3VsdF90ZXh0JykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5lZGl0LW5hbWUnKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKFwiZm9jdXNcIiwgXCIuZWRpdC1uYW1lXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5pbmRleC1zcGFuJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vbihcImtleXVwXCIsIFwiLmVkaXQtbmFtZVwiLCBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuaW5kZXgtc3BhbicpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDEzKVxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZvY3Vzb3V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0U2Nyb2xsKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGFjY29yZGlhbk9wZW4odmFsOiBhbnksIGNvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLnNldFNlbGVjdGVkQ29udHJvbChjb250cm9sKTtcclxuICAgICAgICAvL2lmKGpRdWVyeShcImFbaHJlZiQ9J1wiK3ZhbCtcIiddXCIpLnBhcmVudHMoJy5wYW5lbCcpLmNoaWxkcmVuKCcucGFuZWwtY29sbGFwc2UnKS5oYXNDbGFzcygnaW4nKSkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy99XHJcbiAgICB9XHJcblxyXG4gICAgZXllUmVzdWx0KCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBqUXVlcnkoJy5zZXR0aW5ncy1jb250ZW50JykuZmFkZVRvZ2dsZSgnZmFzdCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNldHRpbmdzLWNvbnRlbnQnKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGlmIChqUXVlcnkoJy5zZXR0aW5ncy1jb250ZW50Lm9wZW4nKS5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5yZXN1bHQtc2Nyb2xsJykuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xyXG4gICAgICAgICAgICBzZWxmLnJlc3VsdFNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhbGlkYXRlVXJsKCkge1xyXG4gICAgICAgIHZhciB1cmxyZWdleCA9IC8oaHR0cChzKT86XFxcXCk/KFtcXHctXStcXC4pK1tcXHctXStbLmNvbXwuaW58Lm9yZ10rKFxcW1xcPyUmPV0qKT8vO1xyXG4gICAgICAgIGlmICh1cmxyZWdleC50ZXN0KHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldEpTT05CdWlsdCgpLm5hdmlnYXRlX1VybCkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZFVybCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZFVybCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEaXNjbGFpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbC5yZXN1bHRfZGlzY2xhaW1lci52aXNpYmxlID0gIXRoaXMuZWRpdG9yQ29udHJvbC5yZXN1bHRfZGlzY2xhaW1lci52aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU29jaWFsQ2hlY2tlZChzb2NpYWxNZWRpYTogYW55KSB7XHJcbiAgICAgICAgZm9yIChsZXQgb3B0aW9uIGluIHRoaXMuZWRpdG9yQ29udHJvbC5zaGFyZV9saW5rcy5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVkaXRvckNvbnRyb2wuc2hhcmVfbGlua3Mub3B0aW9uc1tvcHRpb25dLnR5cGUgPT0gc29jaWFsTWVkaWEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVkaXRvckNvbnRyb2wuc2hhcmVfbGlua3Mub3B0aW9uc1tvcHRpb25dLnNlbGVjdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVNvY2lhbEljb24oc29jaWFsTWVkaWE6IGFueSkge1xyXG4gICAgICAgIHZhciBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgb3B0aW9uIGluIHRoaXMuZWRpdG9yQ29udHJvbC5zaGFyZV9saW5rcy5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVkaXRvckNvbnRyb2wuc2hhcmVfbGlua3Mub3B0aW9uc1tvcHRpb25dLnR5cGUgPT0gc29jaWFsTWVkaWEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbC5zaGFyZV9saW5rcy5vcHRpb25zW29wdGlvbl0uc2VsZWN0ZWQgPSAhdGhpcy5lZGl0b3JDb250cm9sLnNoYXJlX2xpbmtzLm9wdGlvbnNbb3B0aW9uXS5zZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmbGFnID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSAobmV3IEl0ZW0pLmdldE9wdGlvbigpO1xyXG4gICAgICAgICAgICBvcHRpb24udHlwZSA9IHNvY2lhbE1lZGlhO1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0b3JDb250cm9sLnNoYXJlX2xpbmtzLm9wdGlvbnMucHVzaChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNjcm9sbFRvVG9wKCkge1xyXG4gICAgICAgIGlmIChqUXVlcnkoJy5zZXR0aW5ncy1oZWFkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0galF1ZXJ5KCcuc2V0dGluZ3MtaGVhZGVyJykucG9zaXRpb24oKS50b3A7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLm5vLXNjcm9sbCcpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZE5ld1NlY3Rpb24oY29udHJvbDogYW55KSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuZGVsTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb250cm9sLmFkZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgICAgICB0aGlzLmFkZEl0ZW1SZXN1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVSZXN1bHQoZm9ybXVsYUluZGV4OiBhbnksIHJlc3VsdENvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIC8vbGV0IGZvcm11bGFJbmRleCA9IE51bWJlcihyZXN1bHRDb250cm9sLmZvcm11bGFJbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0U2VjdGlvbi5pdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLmRlbGV0ZUl0ZW0ocmVzdWx0Q29udHJvbC5faWQsIHRoaXMucmVzdWx0U2VjdGlvbi5faWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudGl0bGUgIT0gJ05vdCBEZWxldGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5kZWxldGVSZXN1bHRTZWN0aW9uKHRoaXMucmVzdWx0U2VjdGlvbiwgZm9ybXVsYUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYS5zcGxpY2UoZm9ybXVsYUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdSZXN1bHQgRGVsZXRlZCBTdWNjZXNzZnVsbHknKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXMubGVuZ3RoIDw9IDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJy5yZXN1bHQtY29tbScpLnNsaW1TY3JvbGwoeyBkZXN0cm95OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRDb250cm9sLmRlbExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW1SZXN1bHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGEubGVuZ3RoIDw9IHRoaXMucmVzdWx0U2VjdGlvbi5pdGVtcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmFkZEZvcm11bGEoKTtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5hbmltSW5pdCgpO1xyXG4gICAgICAgIGxldCBJdGVtUmVzdWx0OiBhbnkgPSB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5hZGRSZXN1bHRTZWN0aW9uKHRoaXMucmVzdWx0U2VjdGlvbik7XHJcbiAgICAgICAgLy8gLyogc2F2ZSByZXN1bHQgb3V0cHV0IGl0ZW0gaW4gcmVzdWx0UGFnZSAqL1xyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLmFkZEl0ZW0odGhpcy5yZXN1bHRTZWN0aW9uLl9pZCwgSXRlbVJlc3VsdC5pdGVtLCB0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXMubGVuZ3RoIC0gMSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRTZWN0aW9uLml0ZW1zW0l0ZW1SZXN1bHQuaW5kZXhdID0gbmV3IEl0ZW0oKS5kZXNlcmlhbGl6ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5kZWJvdW5jZSh0aGlzLmpzb25CdWlsZGVySGFuZGxlci5hbmltTG9hZCgpLCAxODAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlblJlc3VsdCh0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXMubGVuZ3RoLCB0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVNvY2lhbExpbmsoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0b3JDb250cm9sLnNoYXJlX2xpbmtzLnZpc2libGUgPSAhdGhpcy5lZGl0b3JDb250cm9sLnNoYXJlX2xpbmtzLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUmVkbygpIHtcclxuICAgICAgICB0aGlzLmVkaXRvckNvbnRyb2wucmVzdWx0X3JlZG8udmlzaWJsZSA9ICF0aGlzLmVkaXRvckNvbnRyb2wucmVzdWx0X3JlZG8udmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTdW1tYXJ5KCkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbC5yZXN1bHRfc3VtbWFyeS52aXNpYmxlID0gIXRoaXMuZWRpdG9yQ29udHJvbC5yZXN1bHRfc3VtbWFyeS52aXNpYmxlO1xyXG4gICAgICAgIGlmICh0aGlzLmVkaXRvckNvbnRyb2wucmVzdWx0X3N1bW1hcnkudmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdFNlY3Rpb24uZnVsbFdpZHRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGVhZGZvcm1TZWN0aW9uLmZ1bGxXaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0U2VjdGlvbi5mdWxsV2lkdGggPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxlYWRmb3JtU2VjdGlvbi5mdWxsV2lkdGggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGb3JtdWxhKGluZGV4OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci51cGRhdGVUZW1wbGF0ZVF1ZXN0aW9uYXJlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZm9ybXVsYS1maW5hbCcpLmRhdGEoJ2Zvcm11bGEnLCBpbmRleCk7XHJcbiAgICAgICAgalF1ZXJ5KCcjZm9ybXVsYS1tb2RhbC1uZXcnKS5maW5kKCcjZm9ybXVsYScpLmh0bWwodGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYVtpbmRleF0uaHRtbCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZm9ybXVsYS1sZWZ0LXN1YmhlYWRpbmcnKS5odG1sKHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbaW5kZXhdLm5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZVJlZnJlc2hDb21wb25lbnQoaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgdW5pdHNDaGFuZ2VkKGluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhW2luZGV4XS51bml0cy5wb3N0Zml4ID0gKHZhbHVlID09ICdTdWZmaXgnKSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBGb3JtdWxhIEJ1aWxkZXIgTWV0aG9kcyAtLVNUQVJUICovXHJcbiAgICBjaGFuZ2VSZWZyZXNoQ29tcG9uZW50KGluZGV4OiBhbnkpOiBhbnkge1xyXG5cclxuICAgICAgICB2YXIgbG93ZXJSYW5nZVZhbHVlczogYW55ID0gW10sIGE6IG51bWJlciA9IDA7XHJcbiAgICAgICAgdmFyIGhpZ2VyUmFuZ2VWYWx1ZXM6IGFueSA9IFtdLCBiOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuUXVlc3Rpb25uYWlyZUpzb24gPSB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRUZW1wbGF0ZVF1ZXN0aW9uYXJlV2l0aEVtaXR0ZWRMZWFkRm9ybVF1ZXN0aW9uKCk7XHJcbiAgICAgICAgdmFyIHJhd0Zvcm11bGEgPSBqUXVlcnkoJyNmb3JtdWxhJylbMF0uaW5uZXJUZXh0O1xyXG4gICAgICAgIHZhciBmb3JtdWxhSW5kZXggPSBqUXVlcnkoJy5mb3JtdWxhLWZpbmFsJykuZGF0YSgnZm9ybXVsYScpO1xyXG4gICAgICAgIHZhciBjdXJyZW50UXVlc051bWJlcjogYW55O1xyXG4gICAgICAgIHZhciBxdWVzQXJyYXk6IGFueSA9IFtdLCBqOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGpRdWVyeSgnI3JhbmRvbS1xdWVzLW51bXMnKVswXS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBqUXVlcnkoJyNyYW5kb20tcXVlcy10aXRsZXMnKVswXS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtdWxhU2VydmljZS51cGRhdGVGb3JtdWxhVmFsaWRpdHkocmF3Rm9ybXVsYSwgZm9ybXVsYUluZGV4KTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhW2Zvcm11bGFJbmRleF0uaXNWYWxpZClcclxuICAgICAgICAgICAgalF1ZXJ5KCcjaXNWYWxpZEZvcm11bGEnKS5odG1sKGBZb3VyIEZvcm11bGEgaXMgaW52YWxpZCBhcyB0aGUgcXVlc3Rpb24gOiBgICtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZm9ybXVsYVNlcnZpY2UuZ2V0QWxsSW52YWxpZFF1ZXN0aW9ucyh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbZm9ybXVsYUluZGV4XS5yZXN1bHQsZm9ybXVsYUluZGV4KStcclxuICAgICAgICAgICAgICAgIGAgYXJuXFwndCBtYXJrZWQgYXMgbWFuZGF0b3J5IG5laXRoZXIgYSBkZWZhdWx0IGlzIHNlbGVjdGVkYCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBqUXVlcnkoJyNpc1ZhbGlkRm9ybXVsYScpLmh0bWwoJycpO1xyXG4gICAgICAgIGxldCBtYXBGb3JSYW5kb21WYWx1ZXM6IGFueSA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGk6IGFueSA9IDA7IGkgPCByYXdGb3JtdWxhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChyYXdGb3JtdWxhW2ldID09ICdRJykge1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXNOdW1iZXIgPSAnJztcclxuICAgICAgICAgICAgICAgIHdoaWxlICghaXNOYU4ocGFyc2VJbnQocmF3Rm9ybXVsYVtpXSkpKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzTnVtYmVyICs9IHJhd0Zvcm11bGFbaSsrXTtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UXVlc09iamVjdDogYW55ID0gdGhpcy5RdWVzdGlvbm5haXJlSnNvbltjdXJyZW50UXVlc051bWJlciAtIDFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhbmROdW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc09iamVjdC50eXBlID09ICdzbGlkZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnI6IGFueSA9IFtdLCBzdW06IG51bWJlciA9IHBhcnNlSW50KGN1cnJlbnRRdWVzT2JqZWN0LnByb3BzLm1pblZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzdW0gPD0gcGFyc2VJbnQoY3VycmVudFF1ZXNPYmplY3QucHJvcHMubWF4VmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goc3VtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSBwYXJzZUludChjdXJyZW50UXVlc09iamVjdC5wcm9wcy5zdGVwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzTnVtYmVyIGluIG1hcEZvclJhbmRvbVZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmROdW1iZXIgPSBtYXBGb3JSYW5kb21WYWx1ZXNbY3VycmVudFF1ZXNOdW1iZXJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmROdW1iZXIgPSBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRm9yUmFuZG9tVmFsdWVzW2N1cnJlbnRRdWVzTnVtYmVyXSA9IHJhbmROdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRRdWVzT2JqZWN0LnR5cGUgPT0gJ3RleHRmaWVsZCcgJiYgY3VycmVudFF1ZXNPYmplY3QuY29uZmlnLnR5cGUgPT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFycjogYW55ID0gW10sIHN1bTogbnVtYmVyID0gcGFyc2VJbnQoY3VycmVudFF1ZXNPYmplY3QucHJvcHMubWluVmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN1bSA8PSBwYXJzZUludChjdXJyZW50UXVlc09iamVjdC5wcm9wcy5tYXhWYWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChzdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzTnVtYmVyIGluIG1hcEZvclJhbmRvbVZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmROdW1iZXIgPSBtYXBGb3JSYW5kb21WYWx1ZXNbY3VycmVudFF1ZXNOdW1iZXJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmROdW1iZXIgPSBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRm9yUmFuZG9tVmFsdWVzW2N1cnJlbnRRdWVzTnVtYmVyXSA9IHJhbmROdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc051bWJlciBpbiBtYXBGb3JSYW5kb21WYWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kTnVtYmVyID0gbWFwRm9yUmFuZG9tVmFsdWVzW2N1cnJlbnRRdWVzTnVtYmVyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudFF1ZXNPYmplY3Qub3B0aW9ucy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRm9yUmFuZG9tVmFsdWVzW2N1cnJlbnRRdWVzTnVtYmVyXSA9IHJhbmROdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlc0FycmF5W2orK10gPSByYW5kTnVtYmVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiByYW5nZSBWYWx1ZXMgQ2FsY3VsYXRpb24gLS1TVEFSVCovXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbiA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IC0gTnVtYmVyLk1JTl9WQUxVRTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IGN1cnJlbnRRdWVzT2JqZWN0Lm9wdGlvbnMubGVuZ3RoOyB0KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzT2JqZWN0Lm9wdGlvbnNbdF0udmFsdWUgPD0gbWluKSBtaW4gPSB0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFF1ZXNPYmplY3Qub3B0aW9uc1t0XS52YWx1ZSA+PSBtYXgpIG1heCA9IHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VyUmFuZ2VWYWx1ZXNbYSsrXSA9IG1pbjtcclxuICAgICAgICAgICAgICAgICAgICBoaWdlclJhbmdlVmFsdWVzW2IrK10gPSBtYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogcmFuZ2UgVmFsdWVzIENhbGN1bGF0aW9uIC0tRU5EKi9cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI3JhbmRvbS1xdWVzLW51bXMnKVswXS5pbm5lckhUTUwgKz0gJzx0aD5RJyArIGN1cnJlbnRRdWVzTnVtYmVyICsgJzwvdGg+JztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFF1ZXNPYmplY3QudHlwZSAhPSAnc2xpZGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNyYW5kb20tcXVlcy10aXRsZXMnKVswXS5pbm5lckhUTUwgKz0gJzx0ZD4gKCcgKyBjdXJyZW50UXVlc09iamVjdC5vcHRpb25zW3JhbmROdW1iZXJdLmxhYmVsICsgJyk8L3RkPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjcmFuZG9tLXF1ZXMtdGl0bGVzJylbMF0uaW5uZXJIVE1MICs9ICc8dGQ+ICgnICsgcmFuZE51bWJlciArICcpPC90ZD4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjcmFuZG9tLXF1ZXMtbnVtcycpWzBdLmlubmVySFRNTCArPSAnPHRoPlEnICsgY3VycmVudFF1ZXNOdW1iZXIgKyAnPC90aD4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI3JhbmRvbS1xdWVzLXRpdGxlcycpWzBdLmlubmVySFRNTCArPSAnPHRkPiAoJyArICdEb2VzblxcJ3QgRXhpc3QnICsgJyk8L3RkPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdFN0cmluZyA9IGpRdWVyeSgnI2Zvcm11bGEnKVswXS5pbm5lclRleHQucmVwbGFjZSgvXFxzL2csICcnKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvLC9nLCAnJykucmVwbGFjZSgveC9nLCAnKicpO1xyXG4gICAgICAgIHZhciBmaW5hbFF1ZXN0aW9uU3RyaW5nID0gdGhpcy5jcmVhdGVGaW5hbFF1ZXN0aW9uU3RyaW5nKHJlc3VsdFN0cmluZywgcXVlc0FycmF5LCAncmFuZG9tJyk7XHJcbiAgICAgICAgdmFyIHF1ZXNOb3dPYmplY3QgPSB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhW2Zvcm11bGFJbmRleF07XHJcblxyXG4gICAgICAgIC8qIEZvciB0aGUgI2ZpbmFsLXJlc3VsdC1yYW5nZSB2YWx1ZSBVcGRhdGUgLS1TVEFSVCAqL1xyXG4gICAgICAgIHZhciByYW5nZU1pblZhbHVlOiBhbnk7XHJcbiAgICAgICAgdmFyIHJhbmdlTWF4VmFsdWU6IGFueTtcclxuICAgICAgICB2YXIgZmluYWxRdWVzdGlvblN0cmluZ0Zvckxvd2VyUmFuZ2UgPSB0aGlzLmNyZWF0ZUZpbmFsUXVlc3Rpb25TdHJpbmcocmVzdWx0U3RyaW5nLCBsb3dlclJhbmdlVmFsdWVzLCAnbG93ZXInKTtcclxuXHJcbiAgICAgICAgdmFyIGZpbmFsUXVlc3Rpb25TdHJpbmdGb3JIaWdoZXJSYW5nZSA9IHRoaXMuY3JlYXRlRmluYWxRdWVzdGlvblN0cmluZyhyZXN1bHRTdHJpbmcsIGhpZ2VyUmFuZ2VWYWx1ZXMsICdoaWdoZXInKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmFuZ2VNaW5WYWx1ZSA9IG1hdGguZXZhbChmaW5hbFF1ZXN0aW9uU3RyaW5nRm9yTG93ZXJSYW5nZSk7XHJcbiAgICAgICAgICAgIHJhbmdlTWluVmFsdWUgPSB0aGlzLmZvcm11bGFTZXJ2aWNlLmFkZENvbW1hcyhyYW5nZU1pblZhbHVlLnRvRml4ZWQoTnVtYmVyKHF1ZXNOb3dPYmplY3QuZGVjaW1hbCkpKTtcclxuICAgICAgICAgICAgLy8gaWYgKHJhbmdlTWluVmFsdWUgJSAxICE9IDApXHJcbiAgICAgICAgICAgIC8vICAgICByYW5nZU1pblZhbHVlID0gdGhpcy5mb3JtdWxhU2VydmljZS5hZGRDb21tYXMocmFuZ2VNaW5WYWx1ZS50b0ZpeGVkKDIpKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IHJhbmdlTWluVmFsdWUgPSB1bmRlZmluZWQ7IH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByYW5nZU1heFZhbHVlID0gbWF0aC5ldmFsKGZpbmFsUXVlc3Rpb25TdHJpbmdGb3JIaWdoZXJSYW5nZSk7XHJcbiAgICAgICAgICAgIHJhbmdlTWF4VmFsdWUgPSB0aGlzLmZvcm11bGFTZXJ2aWNlLmFkZENvbW1hcyhyYW5nZU1heFZhbHVlLnRvRml4ZWQoTnVtYmVyKHF1ZXNOb3dPYmplY3QuZGVjaW1hbCkpKTtcclxuICAgICAgICAgICAgLy8gaWYgKHJhbmdlTWF4VmFsdWUgJSAxICE9IDApXHJcbiAgICAgICAgICAgIC8vICAgICByYW5nZU1heFZhbHVlID0gcmFuZ2VNYXhWYWx1ZS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgcmFuZ2VNYXhWYWx1ZSA9IHVuZGVmaW5lZDsgfVxyXG4gICAgICAgIGlmIChyYW5nZU1pblZhbHVlID09PSB1bmRlZmluZWQgfHwgcmFuZ2VNYXhWYWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBqUXVlcnkoJyNmaW5hbC1yZXN1bHQtcmFuZ2UnKVswXS5pbm5lckhUTUwgPSAnPGxpPkludmFsaWQ8L2xpPic7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtdWxhTm93ID0gdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYVtmb3JtdWxhSW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoIWZvcm11bGFOb3cudW5pdHMucG9zdGZpeCkge1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VNaW5WYWx1ZSA9IGZvcm11bGFOb3cudW5pdHMudmFsdWUgKyByYW5nZU1pblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VNYXhWYWx1ZSA9IGZvcm11bGFOb3cudW5pdHMudmFsdWUgKyByYW5nZU1heFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VNaW5WYWx1ZSA9IHJhbmdlTWluVmFsdWUgKyBmb3JtdWxhTm93LnVuaXRzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VNYXhWYWx1ZSA9IHJhbmdlTWF4VmFsdWUgKyBmb3JtdWxhTm93LnVuaXRzLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2ZpbmFsLXJlc3VsdC1yYW5nZScpWzBdLmlubmVySFRNTCA9ICc8bGk+JyArIHJhbmdlTWluVmFsdWUgKyAnPC9saT4nICsgJzxsaT50bzwvbGk+JyArICc8bGk+JyArIHJhbmdlTWF4VmFsdWUgKyAnPC9saT4nO1xyXG4gICAgICAgIH0vKiBGb3IgdGhlICNmaW5hbC1yZXN1bHQtcmFuZ2UgdmFsdWUgVXBkYXRlIC0tRU5EICovXHJcblxyXG4gICAgICAgIHZhciBmaW5hbEFuc3dlcjogYW55O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmaW5hbFF1ZXN0aW9uU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBmaW5hbEFuc3dlciA9IG1hdGguZXZhbChmaW5hbFF1ZXN0aW9uU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaW5hbEFuc3dlciAlIDEgIT0gMClcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbEFuc3dlciA9IGZpbmFsQW5zd2VyLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7IGZpbmFsQW5zd2VyID0gJ1N5bnRheCBFcnJvcic7IH1cclxuICAgICAgICBpZiAoZmluYWxBbnN3ZXIgPT09IHVuZGVmaW5lZCkgZmluYWxBbnN3ZXIgPSAwO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHZhciBsb3dlcjogYW55LCB1cHBlcjogYW55O1xyXG4gICAgICAgIGlmIChxdWVzTm93T2JqZWN0LnJhbmdlLnN0YXR1cykge1xyXG4gICAgICAgICAgICB2YXIgbG93ZXJWYWwgPSBwYXJzZUZsb2F0KHF1ZXNOb3dPYmplY3QucmFuZ2UubG93ZXIudmFsdWUpO1xyXG4gICAgICAgICAgICB2YXIgdXBwZXJWYWwgPSBwYXJzZUZsb2F0KHF1ZXNOb3dPYmplY3QucmFuZ2UuaGlnaGVyLnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKGxvd2VyVmFsKSkgbG93ZXJWYWwgPSAwO1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4odXBwZXJWYWwpKSB1cHBlclZhbCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChpc05hTihwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKSkpIHtcclxuICAgICAgICAgICAgICAgIGZpbmFsQW5zd2VyID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChxdWVzTm93T2JqZWN0LnJhbmdlLmhpZ2hlci50eXBlID09ICdOdW1iZXInICYmIHF1ZXNOb3dPYmplY3QucmFuZ2UubG93ZXIudHlwZSA9PSAnTnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VyID0gKHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpIC0gbG93ZXJWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwcGVyID0gKHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpICsgdXBwZXJWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsQW5zd2VyID0gbG93ZXIgKyAnIHRvICcgKyB1cHBlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHF1ZXNOb3dPYmplY3QucmFuZ2UuaGlnaGVyLnR5cGUgPT0gJ051bWJlcicgJiYgcXVlc05vd09iamVjdC5yYW5nZS5sb3dlci50eXBlID09ICdQZXJjZW50YWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VyID0gKHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpIC0gKGxvd2VyVmFsIC8gMTAwKSAqIChwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwcGVyID0gKHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpICsgdXBwZXJWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihsb3dlclZhbCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VyID0gcGFyc2VGbG9hdChmaW5hbEFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxBbnN3ZXIgPSBsb3dlciArICcgdG8gJyArIHVwcGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocXVlc05vd09iamVjdC5yYW5nZS5oaWdoZXIudHlwZSA9PSAnUGVyY2VudGFnZScgJiYgcXVlc05vd09iamVjdC5yYW5nZS5sb3dlci50eXBlID09ICdOdW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXIgPSAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikgLSBsb3dlclZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBwZXIgPSAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikgKyAodXBwZXJWYWwgLyAxMDApICogKHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKHVwcGVyVmFsKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXIgPSBwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbEFuc3dlciA9IGxvd2VyICsgJyB0byAnICsgdXBwZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChxdWVzTm93T2JqZWN0LnJhbmdlLmhpZ2hlci50eXBlID09ICdQZXJjZW50YWdlJyAmJiBxdWVzTm93T2JqZWN0LnJhbmdlLmxvd2VyLnR5cGUgPT0gJ1BlcmNlbnRhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXIgPSAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikgLSAobG93ZXJWYWwgLyAxMDApICogKHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBwZXIgPSAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikgKyAodXBwZXJWYWwgLyAxMDApICogKHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKHVwcGVyVmFsKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXIgPSBwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4obG93ZXJWYWwpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlciA9IHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsQW5zd2VyID0gbG93ZXIgKyAnIHRvICcgKyB1cHBlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFxdWVzTm93T2JqZWN0LnVuaXRzLnBvc3RmaXgpIHtcclxuICAgICAgICAgICAgZmluYWxBbnN3ZXIgPSBxdWVzTm93T2JqZWN0LnVuaXRzLnZhbHVlICsgZmluYWxBbnN3ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaW5hbEFuc3dlciA9IGZpbmFsQW5zd2VyICsgcXVlc05vd09iamVjdC51bml0cy52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgalF1ZXJ5KCcjZmluYWwtcmFuZG9tLXZhbHVlJykuaHRtbChmaW5hbEFuc3dlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRmluYWxRdWVzdGlvblN0cmluZyhnZW5lcmljUXVlc3Rpb246IGFueSwgcXVlc0FycmF5OiBhbnksIGxvd2VyT3JIaWdoZXJPclJhbmRvbTogYW55KSB7XHJcbiAgICAgICAgdmFyIGl0dGVyYXRvciA9IDA7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRRdWVzTnVtYmVyOiBhbnksIGo6IGFueTtcclxuICAgICAgICBmb3IgKHZhciBpOiBhbnkgPSAwOyBpIDwgZ2VuZXJpY1F1ZXN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChnZW5lcmljUXVlc3Rpb25baV0gPT0gJ1EnKSB7XHJcbiAgICAgICAgICAgICAgICBqID0gKytpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXNOdW1iZXIgPSAnJztcclxuICAgICAgICAgICAgICAgIHdoaWxlICghaXNOYU4ocGFyc2VJbnQoZ2VuZXJpY1F1ZXN0aW9uW2ldKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXNOdW1iZXIgKz0gZ2VuZXJpY1F1ZXN0aW9uW2krK107XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gdGhpcy5nZXRWYWx1ZU9mUXVlc3Rpb25OdW1iZXIoY3VycmVudFF1ZXNOdW1iZXIsIHF1ZXNBcnJheVtpdHRlcmF0b3JdLCBsb3dlck9ySGlnaGVyT3JSYW5kb20pO1xyXG4gICAgICAgICAgICAgICAgZ2VuZXJpY1F1ZXN0aW9uID0gZ2VuZXJpY1F1ZXN0aW9uLnN1YnN0cmluZygwLCBqIC0gMSkgK1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbCArXHJcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJpY1F1ZXN0aW9uLnN1YnN0cmluZyhpKTtcclxuICAgICAgICAgICAgICAgIGkgPSBqIC0gMSArIHZhbC50b1N0cmluZygpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGl0dGVyYXRvcisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnZW5lcmljUXVlc3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWVPZlF1ZXN0aW9uTnVtYmVyKHF1ZXNOdW1iZXI6IGFueSwgb3B0aW9uU2VsZWN0ZWRJbmRleDogYW55LCBsb3dlck9ySGlnaGVyT3JSYW5kb206IGFueSkge1xyXG4gICAgICAgIHZhciBjdXJyZW50UXVlc09iamVjdCA9IHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmVXaXRoRW1pdHRlZExlYWRGb3JtUXVlc3Rpb24oKVtxdWVzTnVtYmVyIC0gMV07XHJcbiAgICAgICAgaWYgKGN1cnJlbnRRdWVzT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChsb3dlck9ySGlnaGVyT3JSYW5kb20gPT0gJ2xvd2VyJyAmJiBjdXJyZW50UXVlc09iamVjdC50eXBlID09ICdzbGlkZXInKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFF1ZXNPYmplY3QucHJvcHMubWluVmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsb3dlck9ySGlnaGVyT3JSYW5kb20gPT0gJ2hpZ2hlcicgJiYgY3VycmVudFF1ZXNPYmplY3QudHlwZSA9PSAnc2xpZGVyJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRRdWVzT2JqZWN0LnByb3BzLm1heFZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobG93ZXJPckhpZ2hlck9yUmFuZG9tID09ICdyYW5kb20nICYmIGN1cnJlbnRRdWVzT2JqZWN0LnR5cGUgPT0gJ3NsaWRlcicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25TZWxlY3RlZEluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50UXVlc09iamVjdC5vcHRpb25zW29wdGlvblNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEZvcm11bGEgQnVpbGRlciBNZXRob2RzIC0tRU5EICovXHJcblxyXG4gICAgb25SZWFsVGltZUNoYW5nZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1JlYWxUaW1lUmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldEpTT05CdWlsdCgpLnJlYWxUaW1lID0gIXRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldEpTT05CdWlsdCgpLnJlYWxUaW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI3ByZW1pdW1Nb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2F2ZUFwcHNldHRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5fYnVpbGRlclNlcnZpY2Uuc2F2ZUFwcFNldHRpbmcodGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS51cmwgPSByZXNwb25zZS51cmw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjdGFDaGVjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0N0YUFjY2Vzc2libGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjcHJlbWl1bU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ2hhbmdlRGlzY2xhaW1lcihlZGl0b3JDb250cm9sOiBhbnkpIHtcclxuICAgIH1cclxuICAgIGNhbGxHQShvcHQ6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAob3B0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJSRUFMVElNRUNIQU5HRVwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdUb2dnbGUnLCAnU2hvd1Jlc3VsdEluUmVhbCcpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgU2hvdyBSZXN1bHQgaW4gUmVhbHRpbWUgVG9nZ2xlJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiRURJVEZPUk1VTEFcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnRWRpdFJlc3VsdCcpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgRWRpdCBSZXN1bHQgQ2xpY2snXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJBRERSRVNVTFRcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnQWRkUmVzdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBBZGQgUmVzdWx0IENsaWNrJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiU1VNTUFSWVwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdUb2dnbGUnLCAnU3VtbWFyeScpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgUmVzdWx0cyBTdW1tYXJ5IFRvZ2dsZSddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIlNIQVJFUkVTVUxUXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdTaGFyZVJlc3VsdCcpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgUmVzdWx0cyBTaGFyZSBUb2dnbGUnXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJSRURPQ0FMQ1wiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdUb2dnbGUnLCAnUmVkb0NhbGN1bGF0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBSZXN1bHRzIFJlZG8gQ2FsY3VsYXRpb24gVG9nZ2xlJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiRElTQ0xBSU1FUlwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdUb2dnbGUnLCAnRGlzY2xhaW1lclRvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgUmVzdWx0cyBEaXNjbGFpbWVyIFRvZ2dsZSddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9wZW5SZXN1bHQocmVzdWx0Q291bnQ6IG51bWJlciwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHJlc3VsdENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGpRdWVyeSgnI2NvbGxhcHNlJyArIGkpLmFkZENsYXNzKCdpbicpO1xyXG4gICAgICAgICAgICAgICAgLy8galF1ZXJ5KCcjY29sbGFwc2UnICsgaSkuYWRkQ2xhc3MoJ2JoYXduYScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8galF1ZXJ5KCcjY29sbGFwc2UnICsgaSkucmVtb3ZlQ2xhc3MoJ2luJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBqUXVlcnkoJyNjb2xsYXBzZScgKyBpKS5yZW1vdmVDbGFzcygnYmhhd25hJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZChpbmRleDogYW55KSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZpbGVwaWNrZXIuc2V0S2V5KHRoaXMuZmlsZVBpY2tlcktleSk7XHJcbiAgICAgICAgZmlsZXBpY2tlci5waWNrKFxyXG4gICAgICAgICAgICB7IG1pbWV0eXBlczogWydpbWFnZS8qJ10sIH0sXHJcbiAgICAgICAgICAgIChJbmtCbG9iOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldFNlbGVjdGVkRm9ybXVsYSgpLnJlc3VsdCA9IElua0Jsb2IudXJsO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjZmlsZXBpY2tlcl9kaWFsb2dfY29udGFpbmVyJykuZmluZCgnYScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChGUEVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEZQRXJyb3IudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlUb0FsbCh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIGlmICh0eXBlID09ICdoZWFkZXInKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRTZWxlY3RlZEZvcm11bGEoKS5kZWNpbWFsO1xyXG4gICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhLm1hcCgoZm9ybXVsYTogYW55KSA9PiB7IGZvcm11bGEuZGVjaW1hbCA9IHRleHQ7IHJldHVybiBmb3JtdWxhOyB9KTtcclxuICAgICAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdIZWFkZXIgaGFzIGJlZW4gYXBwbGllZCB0byBhbGwgb3V0Y29tZXMnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ2J1dHRvbicpIHtcclxuICAgICAgICAgICAgdGV4dCA9IHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldFNlbGVjdGVkRm9ybXVsYSgpLnVuaXRzLnByZVZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhLm1hcCgoZm9ybXVsYTogYW55KSA9PiB7IGZvcm11bGEudW5pdHMucHJlVmFsdWUgPSB0ZXh0OyByZXR1cm4gZm9ybXVsYTsgfSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignQnV0dG9uIGN0YSBoYXMgYmVlbiBhcHBsaWVkIHRvIGFsbCBvdXRjb21lcycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAndXJsJykge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0U2VsZWN0ZWRGb3JtdWxhKCkudW5pdHMucG9zdFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhLm1hcCgoZm9ybXVsYTogYW55KSA9PiB7IGZvcm11bGEudW5pdHMucG9zdFZhbHVlID0gdGV4dDsgcmV0dXJuIGZvcm11bGE7IH0pO1xyXG4gICAgICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ0JVcmwgaGFzIGJlZW4gYXBwbGllZCB0byBhbGwgb3V0Y29tZXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdE91dGNvbWUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBmb3JtdWxhVmFsdWU6IHN0cmluZyA9IHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldFNlbGVjdGVkRm9ybXVsYSgpLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmUoKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtOiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PSAnc2VsZWN0Ym94JyB8fCBpdGVtLnR5cGUgPT0gJ3JhZGlvX2J1dHRvbicpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ub3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb246IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlOiBhbnkgPSBvcHRpb24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgJiYgdHlwZSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZUFycmF5ID0gdHlwZS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVJbmRleCA9IHR5cGVBcnJheS5pbmRleE9mKGZvcm11bGFWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUluZGV4ICE9ICgtMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVBcnJheVt2YWx1ZUluZGV4XSA9IGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSB0eXBlQXJyYXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0U2VsZWN0ZWRGb3JtdWxhKCkudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVTcGFjZShldmVudDogYW55KTogYW55IHtcclxuICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0U2VsZWN0ZWRGb3JtdWxhKCkudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpLnJlcGxhY2UoL1xccy9nLCAnJyk7XHJcbiAgICB9XHJcbiAgICB0ZXh0QXJlYUFkanVzdChldmVudDogYW55KSB7XHJcbiAgICAgICAgalF1ZXJ5KCcuYmlnLXRleHQnKS5jc3MoJ2hlaWdodCcsalF1ZXJ5KCcuYmlnLXRleHQnKS5wcm9wKCdzY3JvbGxIZWlnaHQnKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
