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
var JSONBuilder_service_1 = require('../../../services/JSONBuilder.service');
var formula_service_1 = require('../../../services/formula.service');
var editor_leadform_component_1 = require('../../editors/leadform/editor_leadform.component');
var addsection_component_1 = require('./component/addsection.component');
var builder_service_1 = require('../../../services/builder.service');
var JSONUpdateItemTracker_service_1 = require('../../../services/JSONUpdateItemTracker.service');
var model_1 = require('../../../models/model');
var feature_access_service_1 = require('../../../../../shared/services/feature-access.service');
var recommendation_service_1 = require('../../../../templates/services/recommendation.service');
var editor_wysiwyg_component_1 = require('./../../editors/wysiwyg/editor_wysiwyg.component');
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
        if (this.jsonBuilderHandler.getJSONBuilt().formula[index].name != "")
            jQuery('.formula-left-subheading').html(this.jsonBuilderHandler.getJSONBuilt().formula[index].name);
        else
            jQuery('.formula-left-subheading').html('Result #' + (index + 1));
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
                    if (currentQuesObject.type == 'slider' || (currentQuesObject.type == 'textfield' && currentQuesObject.config.type == 'number')) {
                        jQuery('#random-ques-titles')[0].innerHTML += '<td> (' + randNumber + ')</td>';
                    }
                    else {
                        jQuery('#random-ques-titles')[0].innerHTML += '<td> (' + currentQuesObject.options[randNumber].label + ')</td>';
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
            if (currentQuesObject.type == 'slider' || (currentQuesObject.type == 'textfield' && currentQuesObject.config.type == 'number')) {
                if (lowerOrHigherOrRandom == 'lower')
                    return currentQuesObject.props.minVal;
                else if (lowerOrHigherOrRandom == 'higher')
                    return currentQuesObject.props.maxVal;
                else if (lowerOrHigherOrRandom == 'random')
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
        filepicker.pick({
            mimetypes: ['image/*'],
            imageQuality: 50
        }, function (InkBlob) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9wYWdlL2VkaXRvcl9yZXN1bHRQYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBGLGVBQWUsQ0FBQyxDQUFBO0FBQzFHLG9DQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3BFLGdDQUErQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ25FLDBDQUErQixrREFBa0QsQ0FBQyxDQUFBO0FBQ2xGLHFDQUEyQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzlELGdDQUErQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ25FLDhDQUFnQyxpREFBaUQsQ0FBQyxDQUFBO0FBQ2xGLHNCQUFvQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzVELHVDQUFtQyx1REFBdUQsQ0FBQyxDQUFBO0FBQzNGLHVDQUFzQyx1REFBdUQsQ0FBQyxDQUFBO0FBQzlGLHlDQUE4QixrREFBa0QsQ0FBQyxDQUFBO0FBb0JqRjtJQTBCSSwwQkFDWSxrQkFBK0IsRUFDL0IsZUFBK0IsRUFDL0IsaUJBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLG1CQUF1QyxFQUN2QyxxQkFBNEM7UUFMNUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFhO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUEvQnhELGtCQUFhLEdBQVEsd0JBQXdCLENBQUM7UUFFOUMsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFFeEIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQU16QixrQkFBYSxHQUFRO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxFQUFF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cnMvcGFnZS9lZGl0b3JfcmVzdWx0UGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uQ2hhbmdlcywgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm11bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZm9ybXVsYS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRWRpdG9yTGVhZEZvcm0gfSBmcm9tICcuLi8uLi9lZGl0b3JzL2xlYWRmb3JtL2VkaXRvcl9sZWFkZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZGRTZWN0aW9uIH0gZnJvbSAnLi9jb21wb25lbnQvYWRkc2VjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdWlsZGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2J1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEpTT05JdGVtVHJhY2tlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05VcGRhdGVJdGVtVHJhY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSXRlbSwgU2VjdGlvbiwgUGFnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IEZlYXR1cmVBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9mZWF0dXJlLWFjY2Vzcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVjb21tZW5kYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGVtcGxhdGVzL3NlcnZpY2VzL3JlY29tbWVuZGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFZGl0b3JXeXNpd3lnIH0gZnJvbSAnLi8uLi8uLi9lZGl0b3JzL3d5c2l3eWcvZWRpdG9yX3d5c2l3eWcuY29tcG9uZW50JztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBtYXRoOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGZpbGVwaWNrZXI6IGFueTtcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdlZGl0b3JfcmVzdWx0X3BhZ2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvaHRtbC9lZGl0b3JfcmVzdWx0UGFnZS5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW0Zvcm11bGFTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtFZGl0b3JMZWFkRm9ybSwgQWRkU2VjdGlvbiwgRWRpdG9yV3lzaXd5Z10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgJ2Fzc2V0cy9jc3MvbUN1c3RvbVNjcm9sbGJhci5jc3MnXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yUmVzdWx0UGFnZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgZmlsZVBpY2tlcktleTogYW55ID0gJ0EzeWdJdzRoSVNTQ2RBcHFXNFNBd3onO1xyXG4gICAgcGFnZTogUGFnZTtcclxuICAgIGZvcm11bGFSZXN1bHQ6IGFueSA9IHt9O1xyXG4gICAgY29udHJvbDogYW55O1xyXG4gICAgdmFsaWRVcmw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc2VjdGlvbk9yZGVyOiBhbnlbXSA9IFtdO1xyXG4gICAgcmVzdWx0U2VjdGlvbjogU2VjdGlvbjtcclxuICAgIGxlYWRmb3JtU2VjdGlvbjogU2VjdGlvbjtcclxuICAgIGVkaXRvckh0bWw6IHN0cmluZztcclxuICAgIFF1ZXN0aW9ubmFpcmVKc29uOiBhbnk7XHJcbiAgICBuYXZpZ2F0ZV91cmw6IGFueTtcclxuICAgIGVkaXRvckNvbnRyb2w6IGFueSA9IHtcclxuICAgICAgICByZXN1bHRfaGVhZGVyOiB7fSxcclxuICAgICAgICBzZWN0aW9uOiB7fSxcclxuICAgICAgICBsZWFkZm9ybToge30sXHJcbiAgICAgICAgY2xpY2tfYnV0dG9uOiB7fSxcclxuICAgICAgICBzaGFyZV9saW5rczoge30sXHJcbiAgICAgICAgcmVzdWx0X3JlZG86IHt9LFxyXG4gICAgICAgIGJhY2tJbWFnZToge30sXHJcbiAgICAgICAgcmVzdWx0X2Rpc2NsYWltZXI6IHt9LFxyXG4gICAgICAgIGZvb3Rlcl9saW5rczoge30sXHJcbiAgICAgICAgcmVzdWx0X3N1bW1hcnk6IHt9XHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBpc0N0YUFjY2Vzc2libGU6IEJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNSZWFsVGltZVJlc3VsdDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBqc29uQnVpbGRlckhhbmRsZXI6IEpTT05CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2J1aWxkZXJTZXJ2aWNlOiBCdWlsZGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9JdGVtVHJhY2tTZXJ2aWNlOiBKU09OSXRlbVRyYWNrZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtdWxhU2VydmljZTogRm9ybXVsYVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfZmVhdHVyZUF1dGhTZXJ2aWNlOiBGZWF0dXJlQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWNvbW1lbmRhdGlvblNlcnZpY2U6IFJlY29tbWVuZGF0aW9uU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0ganNvbkJ1aWxkZXJIYW5kbGVyLmdldFNlbGVjdGVkUGFnZSgpO1xyXG4gICAgICAgIGZvciAobGV0IHNlY3Rpb24gaW4gdGhpcy5wYWdlLnNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gaW4gdGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgcmVzdWx0IG91dHB1dHNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2Uuc2VjdGlvbnNbc2VjdGlvbl0udGl0bGUgPT09ICdSZXN1bHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRTZWN0aW9uID0gdGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLnNldFNlbGVjdGVkQ29udHJvbCh0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXS50eXBlID09PSAnTGVhZEZvcm0nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVhZGZvcm1TZWN0aW9uID0gdGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLmVkaXRvckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gdGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dLml0ZW1zW2l0ZW1dLnR5cGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbFtwcm9wXSA9IHRoaXMucGFnZS5zZWN0aW9uc1tzZWN0aW9uXS5pdGVtc1tpdGVtXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9JdGVtVHJhY2tTZXJ2aWNlLnJlc2V0VW5zYXZlZERhdGEoKTtcclxuICAgICAgICB0aGlzLl9JdGVtVHJhY2tTZXJ2aWNlLnNldFVuU2F2ZWRQYWdlKHRoaXMucGFnZSk7XHJcbiAgICAgICAgdGhpcy5pc1JlYWxUaW1lUmVzdWx0ID0gdGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmZlYXR1cmVzLnJlYWxfdGltZV9yZXN1bHRzO1xyXG4gICAgICAgIHRoaXMuaXNDdGFBY2Nlc3NpYmxlID0gdGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmZlYXR1cmVzLmN0YTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2luZyBoeXBlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHZhciByaWdodFBhbmVsSGVpZ2h0ID0galF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCkgLSA3MjtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVQcml2YWN5KCkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbC5mb290ZXJfbGlua3MudmlzaWJsZSA9ICF0aGlzLmVkaXRvckNvbnRyb2wuZm9vdGVyX2xpbmtzLnZpc2libGU7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVXeXNpd2lnKGNvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIGNvbnRyb2wudmlzaWJsZSA9ICFjb250cm9sLnZpc2libGU7XHJcblxyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgZWRpdG9yOiBhbnk7XHJcbiAgICAgICAgbGV0IGVkaXRvcjE6IGFueTtcclxuICAgICAgICBlZGl0b3IgPSBqUXVlcnkoJy53eXNpd3lnJykuZnJvYWxhRWRpdG9yKHtcclxuICAgICAgICAgICAgaGVpZ2h0TWF4OiAyNTAsXHJcbiAgICAgICAgICAgIHRvb2xiYXJCdXR0b25zOiBbJ2JvbGQnLCAnfCcsICdpdGFsaWMnLCAnfCcsICd1bmRlcmxpbmUnLF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWRpdG9yMSA9IGpRdWVyeSgnLnd5c2l3eWctZGVzYycpLmZyb2FsYUVkaXRvcih7XHJcbiAgICAgICAgICAgIGhlaWdodE1heDogMjUwLFxyXG4gICAgICAgICAgICB0b29sYmFyQnV0dG9uczogWydib2xkJywgJ3wnLCAnaXRhbGljJywgJ3wnLCAndW5kZXJsaW5lJyxdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBqUXVlcnkoJy5mci13cmFwcGVyJykubUN1c3RvbVNjcm9sbGJhcigpOyB9LCA1MCk7XHJcbiAgICAgICAgalF1ZXJ5KCcud3lzaXd5ZycpLm9uKCdmcm9hbGFFZGl0b3IuY29udGVudENoYW5nZWQnLCBmdW5jdGlvbiAoZTogYW55LCBlZGl0b3I6IGFueSkge1xyXG4gICAgICAgICAgICBzZWxmLmVkaXRvckh0bWwgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIHNlbGYuZWRpdG9yQ29udHJvbC5yZXN1bHRfaGVhZGVyLnByb3BzLnRpdGxlID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoJy53eXNpd3lnLWRlc2MnKS5vbignZnJvYWxhRWRpdG9yLmNvbnRlbnRDaGFuZ2VkJywgZnVuY3Rpb24gKGU6IGFueSwgZWRpdG9yMTogYW55KSB7XHJcbiAgICAgICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIYW5kbGVyLmdldFNlbGVjdGVkRm9ybXVsYSgpLmh0bWwgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVOYW1lRWRpdCgpO1xyXG4gICAgICAgIHRoaXMucmVzdWx0U2Nyb2xsKCk7XHJcbiAgICAgICAgalF1ZXJ5KHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLnJlc3VsdFNjcm9sbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOYW1lRWRpdCgpIHtcclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZWRpdF9uYW1lX2xpbmtcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoKGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuZWRpdC1uYW1lJykuaGFzQ2xhc3MoJ2hpZGUnKSkpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcucmVzdWx0X3RleHQnKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5lZGl0LW5hbWUnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5lZGl0LW5hbWUnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkub24oXCJmb2N1c291dFwiLCBcIi5lZGl0LW5hbWVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZCgnLmluZGV4LXNwYW4nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnJlc3VsdF90ZXh0JykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5lZGl0LW5hbWUnKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKFwiZm9jdXNcIiwgXCIuZWRpdC1uYW1lXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5pbmRleC1zcGFuJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5vbihcImtleXVwXCIsIFwiLmVkaXQtbmFtZVwiLCBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuaW5kZXgtc3BhbicpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDEzKVxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmZvY3Vzb3V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0U2Nyb2xsKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGFjY29yZGlhbk9wZW4odmFsOiBhbnksIGNvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLnNldFNlbGVjdGVkQ29udHJvbChjb250cm9sKTtcclxuICAgICAgICAvL2lmKGpRdWVyeShcImFbaHJlZiQ9J1wiK3ZhbCtcIiddXCIpLnBhcmVudHMoJy5wYW5lbCcpLmNoaWxkcmVuKCcucGFuZWwtY29sbGFwc2UnKS5oYXNDbGFzcygnaW4nKSkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy99XHJcbiAgICB9XHJcblxyXG4gICAgZXllUmVzdWx0KCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBqUXVlcnkoJy5zZXR0aW5ncy1jb250ZW50JykuZmFkZVRvZ2dsZSgnZmFzdCcpO1xyXG4gICAgICAgIGpRdWVyeSgnLnNldHRpbmdzLWNvbnRlbnQnKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIGlmIChqUXVlcnkoJy5zZXR0aW5ncy1jb250ZW50Lm9wZW4nKS5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5yZXN1bHQtc2Nyb2xsJykuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xyXG4gICAgICAgICAgICBzZWxmLnJlc3VsdFNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhbGlkYXRlVXJsKCkge1xyXG4gICAgICAgIHZhciB1cmxyZWdleCA9IC8oaHR0cChzKT86XFxcXCk/KFtcXHctXStcXC4pK1tcXHctXStbLmNvbXwuaW58Lm9yZ10rKFxcW1xcPyUmPV0qKT8vO1xyXG4gICAgICAgIGlmICh1cmxyZWdleC50ZXN0KHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldEpTT05CdWlsdCgpLm5hdmlnYXRlX1VybCkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZFVybCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZFVybCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEaXNjbGFpbWVyKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbC5yZXN1bHRfZGlzY2xhaW1lci52aXNpYmxlID0gIXRoaXMuZWRpdG9yQ29udHJvbC5yZXN1bHRfZGlzY2xhaW1lci52aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU29jaWFsQ2hlY2tlZChzb2NpYWxNZWRpYTogYW55KSB7XHJcbiAgICAgICAgZm9yIChsZXQgb3B0aW9uIGluIHRoaXMuZWRpdG9yQ29udHJvbC5zaGFyZV9saW5rcy5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVkaXRvckNvbnRyb2wuc2hhcmVfbGlua3Mub3B0aW9uc1tvcHRpb25dLnR5cGUgPT0gc29jaWFsTWVkaWEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVkaXRvckNvbnRyb2wuc2hhcmVfbGlua3Mub3B0aW9uc1tvcHRpb25dLnNlbGVjdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVNvY2lhbEljb24oc29jaWFsTWVkaWE6IGFueSkge1xyXG4gICAgICAgIHZhciBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgb3B0aW9uIGluIHRoaXMuZWRpdG9yQ29udHJvbC5zaGFyZV9saW5rcy5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVkaXRvckNvbnRyb2wuc2hhcmVfbGlua3Mub3B0aW9uc1tvcHRpb25dLnR5cGUgPT0gc29jaWFsTWVkaWEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbC5zaGFyZV9saW5rcy5vcHRpb25zW29wdGlvbl0uc2VsZWN0ZWQgPSAhdGhpcy5lZGl0b3JDb250cm9sLnNoYXJlX2xpbmtzLm9wdGlvbnNbb3B0aW9uXS5zZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmbGFnID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSAobmV3IEl0ZW0pLmdldE9wdGlvbigpO1xyXG4gICAgICAgICAgICBvcHRpb24udHlwZSA9IHNvY2lhbE1lZGlhO1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lZGl0b3JDb250cm9sLnNoYXJlX2xpbmtzLm9wdGlvbnMucHVzaChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNjcm9sbFRvVG9wKCkge1xyXG4gICAgICAgIGlmIChqUXVlcnkoJy5zZXR0aW5ncy1oZWFkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0galF1ZXJ5KCcuc2V0dGluZ3MtaGVhZGVyJykucG9zaXRpb24oKS50b3A7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLm5vLXNjcm9sbCcpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBvc2l0aW9uIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZE5ld1NlY3Rpb24oY29udHJvbDogYW55KSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuZGVsTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb250cm9sLmFkZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgICAgICB0aGlzLmFkZEl0ZW1SZXN1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVSZXN1bHQoZm9ybXVsYUluZGV4OiBhbnksIHJlc3VsdENvbnRyb2w6IGFueSkge1xyXG4gICAgICAgIC8vbGV0IGZvcm11bGFJbmRleCA9IE51bWJlcihyZXN1bHRDb250cm9sLmZvcm11bGFJbmRleCk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0U2VjdGlvbi5pdGVtcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLmRlbGV0ZUl0ZW0ocmVzdWx0Q29udHJvbC5faWQsIHRoaXMucmVzdWx0U2VjdGlvbi5faWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UudGl0bGUgIT0gJ05vdCBEZWxldGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5kZWxldGVSZXN1bHRTZWN0aW9uKHRoaXMucmVzdWx0U2VjdGlvbiwgZm9ybXVsYUluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYS5zcGxpY2UoZm9ybXVsYUluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdSZXN1bHQgRGVsZXRlZCBTdWNjZXNzZnVsbHknKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXMubGVuZ3RoIDw9IDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJy5yZXN1bHQtY29tbScpLnNsaW1TY3JvbGwoeyBkZXN0cm95OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRDb250cm9sLmRlbExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW1SZXN1bHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGEubGVuZ3RoIDw9IHRoaXMucmVzdWx0U2VjdGlvbi5pdGVtcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmFkZEZvcm11bGEoKTtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5hbmltSW5pdCgpO1xyXG4gICAgICAgIGxldCBJdGVtUmVzdWx0OiBhbnkgPSB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5hZGRSZXN1bHRTZWN0aW9uKHRoaXMucmVzdWx0U2VjdGlvbik7XHJcbiAgICAgICAgLy8gLyogc2F2ZSByZXN1bHQgb3V0cHV0IGl0ZW0gaW4gcmVzdWx0UGFnZSAqL1xyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLmFkZEl0ZW0odGhpcy5yZXN1bHRTZWN0aW9uLl9pZCwgSXRlbVJlc3VsdC5pdGVtLCB0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXMubGVuZ3RoIC0gMSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRTZWN0aW9uLml0ZW1zW0l0ZW1SZXN1bHQuaW5kZXhdID0gbmV3IEl0ZW0oKS5kZXNlcmlhbGl6ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5kZWJvdW5jZSh0aGlzLmpzb25CdWlsZGVySGFuZGxlci5hbmltTG9hZCgpLCAxODAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlblJlc3VsdCh0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXMubGVuZ3RoLCB0aGlzLnJlc3VsdFNlY3Rpb24uaXRlbXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVNvY2lhbExpbmsoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0b3JDb250cm9sLnNoYXJlX2xpbmtzLnZpc2libGUgPSAhdGhpcy5lZGl0b3JDb250cm9sLnNoYXJlX2xpbmtzLnZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUmVkbygpIHtcclxuICAgICAgICB0aGlzLmVkaXRvckNvbnRyb2wucmVzdWx0X3JlZG8udmlzaWJsZSA9ICF0aGlzLmVkaXRvckNvbnRyb2wucmVzdWx0X3JlZG8udmlzaWJsZTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTdW1tYXJ5KCkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yQ29udHJvbC5yZXN1bHRfc3VtbWFyeS52aXNpYmxlID0gIXRoaXMuZWRpdG9yQ29udHJvbC5yZXN1bHRfc3VtbWFyeS52aXNpYmxlO1xyXG4gICAgICAgIGlmICh0aGlzLmVkaXRvckNvbnRyb2wucmVzdWx0X3N1bW1hcnkudmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdFNlY3Rpb24uZnVsbFdpZHRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGVhZGZvcm1TZWN0aW9uLmZ1bGxXaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0U2VjdGlvbi5mdWxsV2lkdGggPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxlYWRmb3JtU2VjdGlvbi5mdWxsV2lkdGggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGb3JtdWxhKGluZGV4OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci51cGRhdGVUZW1wbGF0ZVF1ZXN0aW9uYXJlKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZm9ybXVsYS1maW5hbCcpLmRhdGEoJ2Zvcm11bGEnLCBpbmRleCk7XHJcbiAgICAgICAgalF1ZXJ5KCcjZm9ybXVsYS1tb2RhbC1uZXcnKS5maW5kKCcjZm9ybXVsYScpLmh0bWwodGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYVtpbmRleF0uaHRtbCk7XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbaW5kZXhdLm5hbWUgIT0gXCJcIilcclxuICAgICAgICAgICAgalF1ZXJ5KCcuZm9ybXVsYS1sZWZ0LXN1YmhlYWRpbmcnKS5odG1sKHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbaW5kZXhdLm5hbWUpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgalF1ZXJ5KCcuZm9ybXVsYS1sZWZ0LXN1YmhlYWRpbmcnKS5odG1sKCdSZXN1bHQgIycgKyAoaW5kZXggKyAxKSk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VSZWZyZXNoQ29tcG9uZW50KGluZGV4KTtcclxuICAgIH1cclxuICAgIHVuaXRzQ2hhbmdlZChpbmRleDogbnVtYmVyLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYVtpbmRleF0udW5pdHMucG9zdGZpeCA9ICh2YWx1ZSA9PSAnU3VmZml4JykgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRm9ybXVsYSBCdWlsZGVyIE1ldGhvZHMgLS1TVEFSVCAqL1xyXG4gICAgY2hhbmdlUmVmcmVzaENvbXBvbmVudChpbmRleDogYW55KTogYW55IHtcclxuXHJcbiAgICAgICAgdmFyIGxvd2VyUmFuZ2VWYWx1ZXM6IGFueSA9IFtdLCBhOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIHZhciBoaWdlclJhbmdlVmFsdWVzOiBhbnkgPSBbXSwgYjogbnVtYmVyID0gMDtcclxuICAgICAgICB0aGlzLlF1ZXN0aW9ubmFpcmVKc29uID0gdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZVdpdGhFbWl0dGVkTGVhZEZvcm1RdWVzdGlvbigpO1xyXG4gICAgICAgIHZhciByYXdGb3JtdWxhID0galF1ZXJ5KCcjZm9ybXVsYScpWzBdLmlubmVyVGV4dDtcclxuICAgICAgICB2YXIgZm9ybXVsYUluZGV4ID0galF1ZXJ5KCcuZm9ybXVsYS1maW5hbCcpLmRhdGEoJ2Zvcm11bGEnKTtcclxuICAgICAgICB2YXIgY3VycmVudFF1ZXNOdW1iZXI6IGFueTtcclxuICAgICAgICB2YXIgcXVlc0FycmF5OiBhbnkgPSBbXSwgajogbnVtYmVyID0gMDtcclxuICAgICAgICBqUXVlcnkoJyNyYW5kb20tcXVlcy1udW1zJylbMF0uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgalF1ZXJ5KCcjcmFuZG9tLXF1ZXMtdGl0bGVzJylbMF0uaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybXVsYVNlcnZpY2UudXBkYXRlRm9ybXVsYVZhbGlkaXR5KHJhd0Zvcm11bGEsIGZvcm11bGFJbmRleCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYVtmb3JtdWxhSW5kZXhdLmlzVmFsaWQpXHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2lzVmFsaWRGb3JtdWxhJykuaHRtbChgWW91ciBGb3JtdWxhIGlzIGludmFsaWQgYXMgdGhlIHF1ZXN0aW9uIDogYCArXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZvcm11bGFTZXJ2aWNlLmdldEFsbEludmFsaWRRdWVzdGlvbnModGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhW2Zvcm11bGFJbmRleF0ucmVzdWx0LGZvcm11bGFJbmRleCkrXHJcbiAgICAgICAgICAgICAgICBgIGFyblxcJ3QgbWFya2VkIGFzIG1hbmRhdG9yeSBuZWl0aGVyIGEgZGVmYXVsdCBpcyBzZWxlY3RlZGApO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgalF1ZXJ5KCcjaXNWYWxpZEZvcm11bGEnKS5odG1sKCcnKTtcclxuICAgICAgICBsZXQgbWFwRm9yUmFuZG9tVmFsdWVzOiBhbnkgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBpOiBhbnkgPSAwOyBpIDwgcmF3Rm9ybXVsYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocmF3Rm9ybXVsYVtpXSA9PSAnUScpIHtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzTnVtYmVyID0gJyc7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoIWlzTmFOKHBhcnNlSW50KHJhd0Zvcm11bGFbaV0pKSlcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVlc051bWJlciArPSByYXdGb3JtdWxhW2krK107XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFF1ZXNPYmplY3Q6IGFueSA9IHRoaXMuUXVlc3Rpb25uYWlyZUpzb25bY3VycmVudFF1ZXNOdW1iZXIgLSAxXTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc09iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByYW5kTnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFF1ZXNPYmplY3QudHlwZSA9PSAnc2xpZGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyOiBhbnkgPSBbXSwgc3VtOiBudW1iZXIgPSBwYXJzZUludChjdXJyZW50UXVlc09iamVjdC5wcm9wcy5taW5WYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3VtIDw9IHBhcnNlSW50KGN1cnJlbnRRdWVzT2JqZWN0LnByb3BzLm1heFZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHN1bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3VycmVudFF1ZXNPYmplY3QucHJvcHMuc3RlcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc051bWJlciBpbiBtYXBGb3JSYW5kb21WYWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kTnVtYmVyID0gbWFwRm9yUmFuZG9tVmFsdWVzW2N1cnJlbnRRdWVzTnVtYmVyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kTnVtYmVyID0gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEZvclJhbmRvbVZhbHVlc1tjdXJyZW50UXVlc051bWJlcl0gPSByYW5kTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UXVlc09iamVjdC50eXBlID09ICd0ZXh0ZmllbGQnICYmIGN1cnJlbnRRdWVzT2JqZWN0LmNvbmZpZy50eXBlID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnI6IGFueSA9IFtdLCBzdW06IG51bWJlciA9IHBhcnNlSW50KGN1cnJlbnRRdWVzT2JqZWN0LnByb3BzLm1pblZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzdW0gPD0gcGFyc2VJbnQoY3VycmVudFF1ZXNPYmplY3QucHJvcHMubWF4VmFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goc3VtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc051bWJlciBpbiBtYXBGb3JSYW5kb21WYWx1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kTnVtYmVyID0gbWFwRm9yUmFuZG9tVmFsdWVzW2N1cnJlbnRRdWVzTnVtYmVyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kTnVtYmVyID0gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEZvclJhbmRvbVZhbHVlc1tjdXJyZW50UXVlc051bWJlcl0gPSByYW5kTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFF1ZXNOdW1iZXIgaW4gbWFwRm9yUmFuZG9tVmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZE51bWJlciA9IG1hcEZvclJhbmRvbVZhbHVlc1tjdXJyZW50UXVlc051bWJlcl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRRdWVzT2JqZWN0Lm9wdGlvbnMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcEZvclJhbmRvbVZhbHVlc1tjdXJyZW50UXVlc051bWJlcl0gPSByYW5kTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXNBcnJheVtqKytdID0gcmFuZE51bWJlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogcmFuZ2UgVmFsdWVzIENhbGN1bGF0aW9uIC0tU1RBUlQqL1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSAtIE51bWJlci5NSU5fVkFMVUU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCBjdXJyZW50UXVlc09iamVjdC5vcHRpb25zLmxlbmd0aDsgdCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc09iamVjdC5vcHRpb25zW3RdLnZhbHVlIDw9IG1pbikgbWluID0gdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzT2JqZWN0Lm9wdGlvbnNbdF0udmFsdWUgPj0gbWF4KSBtYXggPSB0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsb3dlclJhbmdlVmFsdWVzW2ErK10gPSBtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgaGlnZXJSYW5nZVZhbHVlc1tiKytdID0gbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIHJhbmdlIFZhbHVlcyBDYWxjdWxhdGlvbiAtLUVORCovXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNyYW5kb20tcXVlcy1udW1zJylbMF0uaW5uZXJIVE1MICs9ICc8dGg+UScgKyBjdXJyZW50UXVlc051bWJlciArICc8L3RoPic7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzT2JqZWN0LnR5cGUgPT0gJ3NsaWRlcicgfHwgKGN1cnJlbnRRdWVzT2JqZWN0LnR5cGUgPT0gJ3RleHRmaWVsZCcgJiYgY3VycmVudFF1ZXNPYmplY3QuY29uZmlnLnR5cGUgPT0gJ251bWJlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI3JhbmRvbS1xdWVzLXRpdGxlcycpWzBdLmlubmVySFRNTCArPSAnPHRkPiAoJyArIHJhbmROdW1iZXIgKyAnKTwvdGQ+JztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNyYW5kb20tcXVlcy10aXRsZXMnKVswXS5pbm5lckhUTUwgKz0gJzx0ZD4gKCcgKyBjdXJyZW50UXVlc09iamVjdC5vcHRpb25zW3JhbmROdW1iZXJdLmxhYmVsICsgJyk8L3RkPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNyYW5kb20tcXVlcy1udW1zJylbMF0uaW5uZXJIVE1MICs9ICc8dGg+UScgKyBjdXJyZW50UXVlc051bWJlciArICc8L3RoPic7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjcmFuZG9tLXF1ZXMtdGl0bGVzJylbMF0uaW5uZXJIVE1MICs9ICc8dGQ+ICgnICsgJ0RvZXNuXFwndCBFeGlzdCcgKyAnKTwvdGQ+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0U3RyaW5nID0galF1ZXJ5KCcjZm9ybXVsYScpWzBdLmlubmVyVGV4dC5yZXBsYWNlKC9cXHMvZywgJycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8sL2csICcnKS5yZXBsYWNlKC94L2csICcqJyk7XHJcbiAgICAgICAgdmFyIGZpbmFsUXVlc3Rpb25TdHJpbmcgPSB0aGlzLmNyZWF0ZUZpbmFsUXVlc3Rpb25TdHJpbmcocmVzdWx0U3RyaW5nLCBxdWVzQXJyYXksICdyYW5kb20nKTtcclxuICAgICAgICB2YXIgcXVlc05vd09iamVjdCA9IHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbZm9ybXVsYUluZGV4XTtcclxuXHJcbiAgICAgICAgLyogRm9yIHRoZSAjZmluYWwtcmVzdWx0LXJhbmdlIHZhbHVlIFVwZGF0ZSAtLVNUQVJUICovXHJcbiAgICAgICAgdmFyIHJhbmdlTWluVmFsdWU6IGFueTtcclxuICAgICAgICB2YXIgcmFuZ2VNYXhWYWx1ZTogYW55O1xyXG4gICAgICAgIHZhciBmaW5hbFF1ZXN0aW9uU3RyaW5nRm9yTG93ZXJSYW5nZSA9IHRoaXMuY3JlYXRlRmluYWxRdWVzdGlvblN0cmluZyhyZXN1bHRTdHJpbmcsIGxvd2VyUmFuZ2VWYWx1ZXMsICdsb3dlcicpO1xyXG5cclxuICAgICAgICB2YXIgZmluYWxRdWVzdGlvblN0cmluZ0ZvckhpZ2hlclJhbmdlID0gdGhpcy5jcmVhdGVGaW5hbFF1ZXN0aW9uU3RyaW5nKHJlc3VsdFN0cmluZywgaGlnZXJSYW5nZVZhbHVlcywgJ2hpZ2hlcicpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByYW5nZU1pblZhbHVlID0gbWF0aC5ldmFsKGZpbmFsUXVlc3Rpb25TdHJpbmdGb3JMb3dlclJhbmdlKTtcclxuICAgICAgICAgICAgcmFuZ2VNaW5WYWx1ZSA9IHRoaXMuZm9ybXVsYVNlcnZpY2UuYWRkQ29tbWFzKHJhbmdlTWluVmFsdWUudG9GaXhlZChOdW1iZXIocXVlc05vd09iamVjdC5kZWNpbWFsKSkpO1xyXG4gICAgICAgICAgICAvLyBpZiAocmFuZ2VNaW5WYWx1ZSAlIDEgIT0gMClcclxuICAgICAgICAgICAgLy8gICAgIHJhbmdlTWluVmFsdWUgPSB0aGlzLmZvcm11bGFTZXJ2aWNlLmFkZENvbW1hcyhyYW5nZU1pblZhbHVlLnRvRml4ZWQoMikpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgcmFuZ2VNaW5WYWx1ZSA9IHVuZGVmaW5lZDsgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJhbmdlTWF4VmFsdWUgPSBtYXRoLmV2YWwoZmluYWxRdWVzdGlvblN0cmluZ0ZvckhpZ2hlclJhbmdlKTtcclxuICAgICAgICAgICAgcmFuZ2VNYXhWYWx1ZSA9IHRoaXMuZm9ybXVsYVNlcnZpY2UuYWRkQ29tbWFzKHJhbmdlTWF4VmFsdWUudG9GaXhlZChOdW1iZXIocXVlc05vd09iamVjdC5kZWNpbWFsKSkpO1xyXG4gICAgICAgICAgICAvLyBpZiAocmFuZ2VNYXhWYWx1ZSAlIDEgIT0gMClcclxuICAgICAgICAgICAgLy8gICAgIHJhbmdlTWF4VmFsdWUgPSByYW5nZU1heFZhbHVlLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyByYW5nZU1heFZhbHVlID0gdW5kZWZpbmVkOyB9XHJcbiAgICAgICAgaWYgKHJhbmdlTWluVmFsdWUgPT09IHVuZGVmaW5lZCB8fCByYW5nZU1heFZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2ZpbmFsLXJlc3VsdC1yYW5nZScpWzBdLmlubmVySFRNTCA9ICc8bGk+SW52YWxpZDwvbGk+JztcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGZvcm11bGFOb3cgPSB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhW2Zvcm11bGFJbmRleF07XHJcbiAgICAgICAgICAgIGlmICghZm9ybXVsYU5vdy51bml0cy5wb3N0Zml4KSB7XHJcbiAgICAgICAgICAgICAgICByYW5nZU1pblZhbHVlID0gZm9ybXVsYU5vdy51bml0cy52YWx1ZSArIHJhbmdlTWluVmFsdWU7XHJcbiAgICAgICAgICAgICAgICByYW5nZU1heFZhbHVlID0gZm9ybXVsYU5vdy51bml0cy52YWx1ZSArIHJhbmdlTWF4VmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByYW5nZU1pblZhbHVlID0gcmFuZ2VNaW5WYWx1ZSArIGZvcm11bGFOb3cudW5pdHMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICByYW5nZU1heFZhbHVlID0gcmFuZ2VNYXhWYWx1ZSArIGZvcm11bGFOb3cudW5pdHMudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgalF1ZXJ5KCcjZmluYWwtcmVzdWx0LXJhbmdlJylbMF0uaW5uZXJIVE1MID0gJzxsaT4nICsgcmFuZ2VNaW5WYWx1ZSArICc8L2xpPicgKyAnPGxpPnRvPC9saT4nICsgJzxsaT4nICsgcmFuZ2VNYXhWYWx1ZSArICc8L2xpPic7XHJcbiAgICAgICAgfS8qIEZvciB0aGUgI2ZpbmFsLXJlc3VsdC1yYW5nZSB2YWx1ZSBVcGRhdGUgLS1FTkQgKi9cclxuXHJcbiAgICAgICAgdmFyIGZpbmFsQW5zd2VyOiBhbnk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGZpbmFsUXVlc3Rpb25TdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIGZpbmFsQW5zd2VyID0gbWF0aC5ldmFsKGZpbmFsUXVlc3Rpb25TdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmFsQW5zd2VyICUgMSAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsQW5zd2VyID0gZmluYWxBbnN3ZXIudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgZmluYWxBbnN3ZXIgPSAnU3ludGF4IEVycm9yJzsgfVxyXG4gICAgICAgIGlmIChmaW5hbEFuc3dlciA9PT0gdW5kZWZpbmVkKSBmaW5hbEFuc3dlciA9IDA7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdmFyIGxvd2VyOiBhbnksIHVwcGVyOiBhbnk7XHJcbiAgICAgICAgaWYgKHF1ZXNOb3dPYmplY3QucmFuZ2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHZhciBsb3dlclZhbCA9IHBhcnNlRmxvYXQocXVlc05vd09iamVjdC5yYW5nZS5sb3dlci52YWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciB1cHBlclZhbCA9IHBhcnNlRmxvYXQocXVlc05vd09iamVjdC5yYW5nZS5oaWdoZXIudmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4obG93ZXJWYWwpKSBsb3dlclZhbCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChpc05hTih1cHBlclZhbCkpIHVwcGVyVmFsID0gMDtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpKSkge1xyXG4gICAgICAgICAgICAgICAgZmluYWxBbnN3ZXIgPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHF1ZXNOb3dPYmplY3QucmFuZ2UuaGlnaGVyLnR5cGUgPT0gJ051bWJlcicgJiYgcXVlc05vd09iamVjdC5yYW5nZS5sb3dlci50eXBlID09ICdOdW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXIgPSAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikgLSBsb3dlclZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBwZXIgPSAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikgKyB1cHBlclZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxBbnN3ZXIgPSBsb3dlciArICcgdG8gJyArIHVwcGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocXVlc05vd09iamVjdC5yYW5nZS5oaWdoZXIudHlwZSA9PSAnTnVtYmVyJyAmJiBxdWVzTm93T2JqZWN0LnJhbmdlLmxvd2VyLnR5cGUgPT0gJ1BlcmNlbnRhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXIgPSAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikgLSAobG93ZXJWYWwgLyAxMDApICogKHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBwZXIgPSAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikgKyB1cHBlclZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKGxvd2VyVmFsKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXIgPSBwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbEFuc3dlciA9IGxvd2VyICsgJyB0byAnICsgdXBwZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChxdWVzTm93T2JqZWN0LnJhbmdlLmhpZ2hlci50eXBlID09ICdQZXJjZW50YWdlJyAmJiBxdWVzTm93T2JqZWN0LnJhbmdlLmxvd2VyLnR5cGUgPT0gJ051bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb3dlciA9IChwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKSAtIGxvd2VyVmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB1cHBlciA9IChwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKSArICh1cHBlclZhbCAvIDEwMCkgKiAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4odXBwZXJWYWwpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cHBlciA9IHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsQW5zd2VyID0gbG93ZXIgKyAnIHRvICcgKyB1cHBlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHF1ZXNOb3dPYmplY3QucmFuZ2UuaGlnaGVyLnR5cGUgPT0gJ1BlcmNlbnRhZ2UnICYmIHF1ZXNOb3dPYmplY3QucmFuZ2UubG93ZXIudHlwZSA9PSAnUGVyY2VudGFnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb3dlciA9IChwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKSAtIChsb3dlclZhbCAvIDEwMCkgKiAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikpKTtcclxuICAgICAgICAgICAgICAgICAgICB1cHBlciA9IChwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKSArICh1cHBlclZhbCAvIDEwMCkgKiAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4odXBwZXJWYWwpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cHBlciA9IHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihsb3dlclZhbCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VyID0gcGFyc2VGbG9hdChmaW5hbEFuc3dlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxBbnN3ZXIgPSBsb3dlciArICcgdG8gJyArIHVwcGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXF1ZXNOb3dPYmplY3QudW5pdHMucG9zdGZpeCkge1xyXG4gICAgICAgICAgICBmaW5hbEFuc3dlciA9IHF1ZXNOb3dPYmplY3QudW5pdHMudmFsdWUgKyBmaW5hbEFuc3dlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbmFsQW5zd2VyID0gZmluYWxBbnN3ZXIgKyBxdWVzTm93T2JqZWN0LnVuaXRzLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqUXVlcnkoJyNmaW5hbC1yYW5kb20tdmFsdWUnKS5odG1sKGZpbmFsQW5zd2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGaW5hbFF1ZXN0aW9uU3RyaW5nKGdlbmVyaWNRdWVzdGlvbjogYW55LCBxdWVzQXJyYXk6IGFueSwgbG93ZXJPckhpZ2hlck9yUmFuZG9tOiBhbnkpIHtcclxuICAgICAgICB2YXIgaXR0ZXJhdG9yID0gMDtcclxuICAgICAgICB2YXIgY3VycmVudFF1ZXNOdW1iZXI6IGFueSwgajogYW55O1xyXG4gICAgICAgIGZvciAodmFyIGk6IGFueSA9IDA7IGkgPCBnZW5lcmljUXVlc3Rpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGdlbmVyaWNRdWVzdGlvbltpXSA9PSAnUScpIHtcclxuICAgICAgICAgICAgICAgIGogPSArK2k7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc051bWJlciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKCFpc05hTihwYXJzZUludChnZW5lcmljUXVlc3Rpb25baV0pKSlcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVlc051bWJlciArPSBnZW5lcmljUXVlc3Rpb25baSsrXTtcclxuICAgICAgICAgICAgICAgIHZhciB2YWwgPSB0aGlzLmdldFZhbHVlT2ZRdWVzdGlvbk51bWJlcihjdXJyZW50UXVlc051bWJlciwgcXVlc0FycmF5W2l0dGVyYXRvcl0sIGxvd2VyT3JIaWdoZXJPclJhbmRvbSk7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmljUXVlc3Rpb24gPSBnZW5lcmljUXVlc3Rpb24uc3Vic3RyaW5nKDAsIGogLSAxKSArXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsICtcclxuICAgICAgICAgICAgICAgICAgICBnZW5lcmljUXVlc3Rpb24uc3Vic3RyaW5nKGkpO1xyXG4gICAgICAgICAgICAgICAgaSA9IGogLSAxICsgdmFsLnRvU3RyaW5nKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaXR0ZXJhdG9yKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdlbmVyaWNRdWVzdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZU9mUXVlc3Rpb25OdW1iZXIocXVlc051bWJlcjogYW55LCBvcHRpb25TZWxlY3RlZEluZGV4OiBhbnksIGxvd2VyT3JIaWdoZXJPclJhbmRvbTogYW55KSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRRdWVzT2JqZWN0ID0gdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZVdpdGhFbWl0dGVkTGVhZEZvcm1RdWVzdGlvbigpW3F1ZXNOdW1iZXIgLSAxXTtcclxuICAgICAgICBpZiAoY3VycmVudFF1ZXNPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzT2JqZWN0LnR5cGUgPT0gJ3NsaWRlcicgfHwgKGN1cnJlbnRRdWVzT2JqZWN0LnR5cGUgPT0gJ3RleHRmaWVsZCcgJiYgY3VycmVudFF1ZXNPYmplY3QuY29uZmlnLnR5cGUgPT0gJ251bWJlcicpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobG93ZXJPckhpZ2hlck9yUmFuZG9tID09ICdsb3dlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRRdWVzT2JqZWN0LnByb3BzLm1pblZhbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxvd2VyT3JIaWdoZXJPclJhbmRvbSA9PSAnaGlnaGVyJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFF1ZXNPYmplY3QucHJvcHMubWF4VmFsO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobG93ZXJPckhpZ2hlck9yUmFuZG9tID09ICdyYW5kb20nKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25TZWxlY3RlZEluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50UXVlc09iamVjdC5vcHRpb25zW29wdGlvblNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdmFyIGN1cnJlbnRRdWVzT2JqZWN0ID0gdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZVdpdGhFbWl0dGVkTGVhZEZvcm1RdWVzdGlvbigpW3F1ZXNOdW1iZXIgLSAxXTtcclxuICAgICAgICAvLyBpZiAoY3VycmVudFF1ZXNPYmplY3QpIHtcclxuICAgICAgICAvLyAgICAgaWYgKGxvd2VyT3JIaWdoZXJPclJhbmRvbSA9PSAnbG93ZXInICYmIGN1cnJlbnRRdWVzT2JqZWN0LnR5cGUgPT0gJ3NsaWRlcicpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBjdXJyZW50UXVlc09iamVjdC5wcm9wcy5taW5WYWw7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgaWYgKGxvd2VyT3JIaWdoZXJPclJhbmRvbSA9PSAnaGlnaGVyJyAmJiBjdXJyZW50UXVlc09iamVjdC50eXBlID09ICdzbGlkZXInKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gY3VycmVudFF1ZXNPYmplY3QucHJvcHMubWF4VmFsO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGlmIChsb3dlck9ySGlnaGVyT3JSYW5kb20gPT0gJ3JhbmRvbScgJiYgY3VycmVudFF1ZXNPYmplY3QudHlwZSA9PSAnc2xpZGVyJykge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIG9wdGlvblNlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgZWxzZVxyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGN1cnJlbnRRdWVzT2JqZWN0Lm9wdGlvbnNbb3B0aW9uU2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgLyogRm9ybXVsYSBCdWlsZGVyIE1ldGhvZHMgLS1FTkQgKi9cclxuXHJcbiAgICBvblJlYWxUaW1lQ2hhbmdlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVhbFRpbWVSZXN1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkucmVhbFRpbWUgPSAhdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0SlNPTkJ1aWx0KCkucmVhbFRpbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjcHJlbWl1bU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzYXZlQXBwc2V0dGluZygpIHtcclxuICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS5zYXZlQXBwU2V0dGluZyh0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldEpTT05CdWlsdCgpLnVybCA9IHJlc3BvbnNlLnVybDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGN0YUNoZWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ3RhQWNjZXNzaWJsZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNwcmVtaXVtTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25DaGFuZ2VEaXNjbGFpbWVyKGVkaXRvckNvbnRyb2w6IGFueSkge1xyXG4gICAgfVxyXG4gICAgY2FsbEdBKG9wdDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoIChvcHQpIHtcclxuICAgICAgICAgICAgY2FzZSBcIlJFQUxUSU1FQ0hBTkdFXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdTaG93UmVzdWx0SW5SZWFsJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBTaG93IFJlc3VsdCBpbiBSZWFsdGltZSBUb2dnbGUnXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJFRElURk9STVVMQVwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDbGljaycsICdFZGl0UmVzdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBFZGl0IFJlc3VsdCBDbGljayddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIkFERFJFU1VMVFwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdDbGljaycsICdBZGRSZXN1bHQnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIEFkZCBSZXN1bHQgQ2xpY2snXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJTVU1NQVJZXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdTdW1tYXJ5Jyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBSZXN1bHRzIFN1bW1hcnkgVG9nZ2xlJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiU0hBUkVSRVNVTFRcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1NoYXJlUmVzdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBSZXN1bHRzIFNoYXJlIFRvZ2dsZSddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIlJFRE9DQUxDXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdSZWRvQ2FsY3VsYXRpb24nKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFJlc3VsdHMgUmVkbyBDYWxjdWxhdGlvbiBUb2dnbGUnXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJESVNDTEFJTUVSXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1RvZ2dsZScsICdEaXNjbGFpbWVyVG9nZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBSZXN1bHRzIERpc2NsYWltZXIgVG9nZ2xlJ10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3BlblJlc3VsdChyZXN1bHRDb3VudDogbnVtYmVyLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcmVzdWx0Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgLy8galF1ZXJ5KCcjY29sbGFwc2UnICsgaSkuYWRkQ2xhc3MoJ2luJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBqUXVlcnkoJyNjb2xsYXBzZScgKyBpKS5hZGRDbGFzcygnYmhhd25hJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBqUXVlcnkoJyNjb2xsYXBzZScgKyBpKS5yZW1vdmVDbGFzcygnaW4nKTtcclxuICAgICAgICAgICAgICAgIC8vIGpRdWVyeSgnI2NvbGxhcHNlJyArIGkpLnJlbW92ZUNsYXNzKCdiaGF3bmEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkKGluZGV4OiBhbnkpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZmlsZXBpY2tlci5zZXRLZXkodGhpcy5maWxlUGlja2VyS2V5KTtcclxuICAgICAgICBmaWxlcGlja2VyLnBpY2soXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1pbWV0eXBlczogWydpbWFnZS8qJ10sXHJcbiAgICAgICAgICAgICAgICBpbWFnZVF1YWxpdHk6IDUwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChJbmtCbG9iOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldFNlbGVjdGVkRm9ybXVsYSgpLnJlc3VsdCA9IElua0Jsb2IudXJsO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjZmlsZXBpY2tlcl9kaWFsb2dfY29udGFpbmVyJykuZmluZCgnYScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChGUEVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEZQRXJyb3IudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvcHlUb0FsbCh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdGV4dDogc3RyaW5nO1xyXG4gICAgICAgIGlmICh0eXBlID09ICdoZWFkZXInKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRTZWxlY3RlZEZvcm11bGEoKS5kZWNpbWFsO1xyXG4gICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhLm1hcCgoZm9ybXVsYTogYW55KSA9PiB7IGZvcm11bGEuZGVjaW1hbCA9IHRleHQ7IHJldHVybiBmb3JtdWxhOyB9KTtcclxuICAgICAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdIZWFkZXIgaGFzIGJlZW4gYXBwbGllZCB0byBhbGwgb3V0Y29tZXMnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ2J1dHRvbicpIHtcclxuICAgICAgICAgICAgdGV4dCA9IHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldFNlbGVjdGVkRm9ybXVsYSgpLnVuaXRzLnByZVZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhLm1hcCgoZm9ybXVsYTogYW55KSA9PiB7IGZvcm11bGEudW5pdHMucHJlVmFsdWUgPSB0ZXh0OyByZXR1cm4gZm9ybXVsYTsgfSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignQnV0dG9uIGN0YSBoYXMgYmVlbiBhcHBsaWVkIHRvIGFsbCBvdXRjb21lcycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAndXJsJykge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0U2VsZWN0ZWRGb3JtdWxhKCkudW5pdHMucG9zdFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhLm1hcCgoZm9ybXVsYTogYW55KSA9PiB7IGZvcm11bGEudW5pdHMucG9zdFZhbHVlID0gdGV4dDsgcmV0dXJuIGZvcm11bGE7IH0pO1xyXG4gICAgICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ0JVcmwgaGFzIGJlZW4gYXBwbGllZCB0byBhbGwgb3V0Y29tZXMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdE91dGNvbWUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGxldCBmb3JtdWxhVmFsdWU6IHN0cmluZyA9IHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldFNlbGVjdGVkRm9ybXVsYSgpLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmUoKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtOiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PSAnc2VsZWN0Ym94JyB8fCBpdGVtLnR5cGUgPT0gJ3JhZGlvX2J1dHRvbicpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ub3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb246IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlOiBhbnkgPSBvcHRpb24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgJiYgdHlwZSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZUFycmF5ID0gdHlwZS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVJbmRleCA9IHR5cGVBcnJheS5pbmRleE9mKGZvcm11bGFWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUluZGV4ICE9ICgtMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVBcnJheVt2YWx1ZUluZGV4XSA9IGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSB0eXBlQXJyYXkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhhbmRsZXIuZ2V0U2VsZWN0ZWRGb3JtdWxhKCkudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVTcGFjZShldmVudDogYW55KTogYW55IHtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRTZWxlY3RlZEZvcm11bGEoKS52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCkucmVwbGFjZSgvXFxzL2csICcnKTtcclxuICAgIH1cclxuICAgIHRleHRBcmVhQWRqdXN0KGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBqUXVlcnkoJy5iaWctdGV4dCcpLmNzcygnaGVpZ2h0JywgalF1ZXJ5KCcuYmlnLXRleHQnKS5wcm9wKCdzY3JvbGxIZWlnaHQnKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
