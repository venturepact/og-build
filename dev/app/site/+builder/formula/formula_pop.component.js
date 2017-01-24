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
var JSONElement_service_1 = require('../services/JSONElement.service');
var JSONBuilder_service_1 = require('../services/JSONBuilder.service');
var formula_service_1 = require('../services/formula.service');
var builder_service_1 = require('../services/builder.service');
var FormulaPopComponent = (function () {
    function FormulaPopComponent(jsonBuilderHelper, jsonElementHandler, _builderService, formulaService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.jsonElementHandler = jsonElementHandler;
        this._builderService = _builderService;
        this.formulaService = formulaService;
        this.isSyntaxError = false;
        this.formulaIndex = 0;
        this.nthIndexOf = function (theString, s, n) {
            var i = -1;
            while (n-- > 0 && -1 != (i = theString.indexOf(s, i + 1)))
                ;
            return i;
        };
        this.templateJson = jsonBuilderHelper.getJSONBuilt();
    }
    FormulaPopComponent.prototype.closeThis = function () {
        jQuery(".rangeinput-show").hide();
    };
    FormulaPopComponent.prototype.jQueryStuff = function () {
        {
            var self_1 = this;
            jQuery('#drop a').draggable({
                revert: 'invalid',
                helper: 'clone',
                cancel: '',
                cursor: 'move',
                containment: '#dragzone'
            });
            jQuery('#formula').droppable({
                hoverClass: 'formula-active',
                drop: function (event, ui) {
                    var $e = ui.draggable.clone();
                    var eventObject = $e;
                    eventObject[0].text = $e[0].text.toString().trim().substr(0, self_1.nthIndexOf($e[0].text.toString().trim(), ' ', 2)).replace('. ', '');
                    jQuery('#formula').formula('insert', eventObject);
                    jQuery('#formula-text').focus();
                    if (jQuery('.formula-alert').hasClass('formula-alert-good')) {
                        self_1.isSyntaxError = false;
                        self_1.updateFormulaUIComponents();
                    }
                    else {
                        self_1.isSyntaxError = true;
                    }
                }
            });
            this.formula = jQuery('#formula').formula({
                strings: {
                    formula: 'DROP HERE',
                    validationPassed: 'Math is Good',
                    validationError: 'Math Error'
                }
            });
            jQuery('#formula.formula-item').hover(function () {
                jQuery(this).find('div.for-output-boxdetail').css('display', 'block');
            }, function () {
                jQuery(this).find('div.for-output-boxdetail').css('display', 'none');
            });
            jQuery('#formula-text').keyup(function () {
                if (jQuery('.formula-alert').hasClass('formula-alert-good')) {
                    self_1.isSyntaxError = false;
                    self_1.updateFormulaUIComponents();
                }
                else
                    self_1.isSyntaxError = true;
            });
            jQuery('#formula-modal-new').on('hidden.bs.modal', function () {
                self_1.isSyntaxError = false;
                var formulaIndex = jQuery('.formula-final').data('formula');
                self_1.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].html = jQuery('#formula').html();
                self_1.formulaService.correctAllInvalidQuestions(self_1.jsonBuilderHelper.getJSONBuilt()
                    .formula[formulaIndex].result, formulaIndex);
            });
        }
    };
    FormulaPopComponent.prototype.ngOnInit = function () {
        var self = this;
        this.jsonBuilderHelper.updateTemplateQuestionare();
        jQuery('#formula-modal-new').on('shown.bs.modal', function (e) {
            jQuery('#drop a').draggable({
                revert: 'invalid',
                helper: 'clone',
                cancel: '',
                cursor: 'move',
                containment: '#dragzone'
            });
            self.formulaIndex = jQuery('.formula-final').data('formula');
            self.updateFormulaUIComponents();
            jQuery('#rangeBox').hide();
        });
    };
    FormulaPopComponent.prototype.ngAfterViewInit = function () {
        this.jQueryStuff();
    };
    FormulaPopComponent.prototype.onChangeDecimalPlaces = function ($value) {
        this.templateJson.formula[this.formulaIndex].decimal = $value;
        this.updateFormulaUIComponents();
    };
    FormulaPopComponent.prototype.refreshClick = function () {
        var self = this;
        if (jQuery('.formula-alert').hasClass('formula-alert-good')) {
            self.isSyntaxError = false;
            self.updateFormulaUIComponents();
        }
        else
            self.isSyntaxError = true;
    };
    FormulaPopComponent.prototype.getFormula = function () {
        var formulaIndex = jQuery('.formula-final').data('formula');
        this.templateJson.formula[formulaIndex].html = jQuery('#formula').html();
        this.templateJson.formula[formulaIndex].result = this.formula[0].innerText.replace(/\s/g, '');
        this.saveAppsetting();
        this.formulaService.correctAllInvalidQuestions(this.jsonBuilderHelper.getJSONBuilt()
            .formula[formulaIndex].result, formulaIndex);
    };
    FormulaPopComponent.prototype.saveAppsetting = function () {
        var _this = this;
        this._builderService.saveAppSetting(this.jsonBuilderHelper.getJSONBuilt())
            .subscribe(function (response) {
            _this.jsonBuilderHelper.getJSONBuilt().url = response.url;
        }, function (error) {
            console.log(error);
        });
    };
    FormulaPopComponent.prototype.createFinalQuestionString = function (genericQuestion, quesArray, lowerOrHigherOrRandom) {
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
    FormulaPopComponent.prototype.getValueOfQuestionNumber = function (quesNumber, optionSelectedIndex, lowerOrHigherOrRandom) {
        var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[quesNumber - 1];
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
    FormulaPopComponent.prototype.updateFormulaUIComponents = function () {
        var rawFormula = jQuery('#formula')[0].innerText;
        var formulaIndex = jQuery('.formula-final').data('formula');
        var quesNowObject = this.templateJson.formula[formulaIndex];
        var currentQuesNumber;
        var quesArray = [], j = 0;
        var lowerRangeValues = [], a = 0;
        var higerRangeValues = [], b = 0;
        jQuery('#random-ques-nums')[0].innerHTML = '';
        jQuery('#random-ques-titles')[0].innerHTML = '';
        jQuery('#final-result-range')[0].innerHTML = '';
        this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].range.lower.type = 'Percentage';
        this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].range.higher.type = 'Percentage';
        try {
            for (var i_1 = 0; i_1 < jQuery('.formula-questions').find('a').length; i_1++) {
                if (jQuery('.formula-questions')[0].children[i_1].className.indexOf('disable') > -1) {
                    var startIndex = jQuery('.formula-questions')[0].children[i_1].className.indexOf(' disable');
                    jQuery('.formula-questions')[0].children[i_1].className =
                        jQuery('.formula-questions')[0].children[i_1].className.substring(0, startIndex) + '' +
                            jQuery('.formula-questions')[0].children[i_1].className.substring(startIndex + ' disable'.length);
                }
            }
        }
        catch (e) { }
        this.formulaService.updateFormulaValidity(rawFormula, formulaIndex);
        var mapForRandomValues = {};
        for (var i = 0; i < rawFormula.length; i++) {
            if (rawFormula[i] == 'Q') {
                i++;
                currentQuesNumber = '';
                while (!isNaN(parseInt(rawFormula[i])))
                    currentQuesNumber += rawFormula[i++];
                var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                var randNumber = 0;
                if (currentQuesObject) {
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
                    if (!(jQuery('.formula-questions')[0].children[currentQuesNumber - 1].className.indexOf('disable') > -1)) {
                        jQuery('.formula-questions')[0].children[currentQuesNumber - 1].className += ' disable';
                    }
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
                    jQuery('#random-ques-titles')[0].innerHTML += '<td> (' + "Doesn't Exist" + ')</td>';
                }
            }
        }
        var rangeMinValue;
        var rangeMaxValue;
        var finalQuestionStringForLowerRange = this.createFinalQuestionString(rawFormula.replace(/\s/g, '')
            .replace(/,/g, '').replace(/x/g, '*'), lowerRangeValues, 'lower');
        var finalQuestionStringForHigherRange = this.createFinalQuestionString(rawFormula.replace(/\s/g, '')
            .replace(/,/g, '').replace(/x/g, '*'), higerRangeValues, 'higher');
        try {
            rangeMinValue = math.eval(finalQuestionStringForLowerRange);
            rangeMaxValue = math.eval(finalQuestionStringForHigherRange);
        }
        catch (e) {
            rangeMaxValue = 0;
            rangeMinValue = 0;
        }
        if (rangeMinValue === undefined || rangeMaxValue === undefined) {
            if (rawFormula.length !== 0)
                jQuery('#final-result-range')[0].innerHTML = '<li>Invalid</li>';
            else
                jQuery('#final-result-range')[0].innerHTML = '<li></li>';
        }
        else {
            rangeMinValue = this.formulaService.addCommas(rangeMinValue.toFixed(Number(quesNowObject.decimal)));
            rangeMaxValue = this.formulaService.addCommas(rangeMaxValue.toFixed(Number(quesNowObject.decimal)));
            if (quesNowObject.units.postfix) {
                rangeMinValue = rangeMinValue + quesNowObject.units.postValue;
                rangeMaxValue = rangeMaxValue + quesNowObject.units.postValue;
            }
            if (quesNowObject.units.prefix) {
                rangeMinValue = quesNowObject.units.preValue + rangeMinValue;
                rangeMaxValue = quesNowObject.units.preValue + rangeMaxValue;
            }
            jQuery('#final-result-range')[0].innerHTML = '<li>' + rangeMinValue + '</li>' + '<li>to</li>' + '<li>' + rangeMaxValue + '</li>';
        }
        var finalAnswer;
        var finalQuestionString = this.createFinalQuestionString(rawFormula.replace(/\s/g, '')
            .replace(/,/g, '').replace(/x/g, '*'), quesArray, 'random');
        try {
            finalAnswer = math.eval(finalQuestionString);
        }
        catch (e) {
            finalAnswer = 0;
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
                }
                else if (quesNowObject.range.higher.type == 'Percentage' && quesNowObject.range.lower.type == 'Percentage') {
                    lower = (parseFloat(finalAnswer) - (lowerVal / 100) * (parseFloat(finalAnswer)));
                    upper = (parseFloat(finalAnswer) + (upperVal / 100) * (parseFloat(finalAnswer)));
                    if (isNaN(upperVal))
                        upper = parseFloat(finalAnswer);
                    if (isNaN(lowerVal))
                        lower = parseFloat(finalAnswer);
                }
                lower = this.formulaService.addCommas(lower.toFixed(Number(quesNowObject.decimal)));
                upper = this.formulaService.addCommas(upper.toFixed(Number(quesNowObject.decimal)));
                if (quesNowObject.units.postfix) {
                    lower = lower + quesNowObject.units.postValue;
                    upper = upper + quesNowObject.units.postValue;
                }
                if (quesNowObject.units.prefix) {
                    lower = quesNowObject.units.preValue + lower;
                    upper = quesNowObject.units.preValue + upper;
                }
                finalAnswer = lower + ' to ' + upper;
            }
        }
        else {
            if (isNaN(parseFloat(finalAnswer))) {
                if (finalAnswer == undefined)
                    finalAnswer = 0;
            }
            else {
                finalAnswer = Number(finalAnswer);
                finalAnswer = this.formulaService.addCommas(finalAnswer.toFixed(Number(quesNowObject.decimal)));
                if (quesNowObject.units.postfix) {
                    finalAnswer = finalAnswer + quesNowObject.units.postValue;
                }
                if (quesNowObject.units.prefix) {
                    finalAnswer = quesNowObject.units.preValue + finalAnswer;
                }
            }
        }
        jQuery('#final-random-value').html(finalAnswer);
        if (this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].range.higher.type == 'Number') {
            jQuery('#rangeType option[value="Number"]').attr("selected", "selected");
            jQuery('#rangeType option[value="Percentage"]').removeAttr("selected");
        }
        else {
            jQuery('#rangeType option[value="Percentage"]').attr("selected", "selected");
            jQuery('#rangeType option[value="Number"]').removeAttr("selected");
        }
    };
    FormulaPopComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'formula-pop',
            encapsulation: core_1.ViewEncapsulation.None,
            viewProviders: [],
            providers: [formula_service_1.FormulaService],
            templateUrl: 'assets/html/formula_pop.component.html',
            styleUrls: [
                'assets/css/mCustomScrollbar.css',
                'assets/css/jquery.formula.css',
                'assets/css/formula.css',
            ]
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, JSONElement_service_1.JSONElement, builder_service_1.BuilderService, formula_service_1.FormulaService])
    ], FormulaPopComponent);
    return FormulaPopComponent;
}());
exports.FormulaPopComponent = FormulaPopComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2Zvcm11bGEvZm9ybXVsYV9wb3AuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkUsZUFBZSxDQUFDLENBQUE7QUFDM0Ysb0NBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFDOUQsb0NBQTRCLGlDQUFpQyxDQUFDLENBQUE7QUFDOUQsZ0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFDN0QsZ0NBQStCLDZCQUE2QixDQUFDLENBQUE7QUFpQjdEO0lBUUUsNkJBQW9CLGlCQUE4QixFQUN4QyxrQkFBK0IsRUFDL0IsZUFBK0IsRUFDL0IsY0FBOEI7UUFIcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQ3hDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBYTtRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTnhDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGlCQUFZLEdBQVEsQ0FBQyxDQUFDO1FBVXRCLGVBQVUsR0FBRyxVQUFVLFNBQWMsRUFBRSxDQUFNLEVBQUUsQ0FBTTtZQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNYLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFBQyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUM7UUFSQSxJQUFJLENBQUMsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFTRCx1Q0FBUyxHQUFUO1FBQ0UsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNELHlDQUFXLEdBQVg7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QUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFckUsQ0FBQztJQUVILENBQUM7SUEzYUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUU7Z0JBQ1QsaUNBQWlDO2dCQUNqQywrQkFBK0I7Z0JBQy9CLHdCQUF3QjthQUN6QjtTQUNGLENBQUM7OzJCQUFBO0lBaWFGLDBCQUFDO0FBQUQsQ0EvWkEsQUErWkMsSUFBQTtBQS9aWSwyQkFBbUIsc0JBK1ovQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL2Zvcm11bGEvZm9ybXVsYV9wb3AuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKU09ORWxlbWVudCB9IGZyb20gJy4uL3NlcnZpY2VzL0pTT05FbGVtZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtdWxhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Zvcm11bGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYnVpbGRlci5zZXJ2aWNlJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIG1hdGg6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2Zvcm11bGEtcG9wJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHZpZXdQcm92aWRlcnM6IFtdLFxyXG4gIHByb3ZpZGVyczogW0Zvcm11bGFTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9odG1sL2Zvcm11bGFfcG9wLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcclxuICAgICdhc3NldHMvY3NzL21DdXN0b21TY3JvbGxiYXIuY3NzJyxcclxuICAgICdhc3NldHMvY3NzL2pxdWVyeS5mb3JtdWxhLmNzcycsXHJcbiAgICAnYXNzZXRzL2Nzcy9mb3JtdWxhLmNzcycsXHJcbiAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm11bGFQb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIHRlbXBsYXRlSnNvbjogYW55O1xyXG4gIGVsZW1lbnRzOiBhbnlbXTtcclxuICBmb3JtdWxhOiBhbnk7XHJcbiAgaHRtbDogYW55O1xyXG4gIGlzU3ludGF4RXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBmb3JtdWxhSW5kZXg6IGFueSA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBqc29uRWxlbWVudEhhbmRsZXI6IEpTT05FbGVtZW50LFxyXG4gICAgcHJpdmF0ZSBfYnVpbGRlclNlcnZpY2U6IEJ1aWxkZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb3JtdWxhU2VydmljZTogRm9ybXVsYVNlcnZpY2UpIHtcclxuICAgIHRoaXMudGVtcGxhdGVKc29uID0ganNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCk7XHJcbiAgfVxyXG5cclxuICAvL0dlbmVyYWwgRnVuY3Rpb25zXHJcbiAgbnRoSW5kZXhPZiA9IGZ1bmN0aW9uICh0aGVTdHJpbmc6IGFueSwgczogYW55LCBuOiBhbnkpIHtcclxuICAgIHZhciBpID0gLTE7XHJcbiAgICB3aGlsZSAobi0tID4gMCAmJiAtMSAhPSAoaSA9IHRoZVN0cmluZy5pbmRleE9mKHMsIGkgKyAxKSkpO1xyXG4gICAgcmV0dXJuIGk7XHJcbiAgfTtcclxuXHJcbiAgY2xvc2VUaGlzKCkge1xyXG4gICAgalF1ZXJ5KFwiLnJhbmdlaW5wdXQtc2hvd1wiKS5oaWRlKCk7XHJcbiAgfVxyXG4gIGpRdWVyeVN0dWZmKCkge1xyXG4gICAge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIC8vIGpRdWVyeShcIi5jbG9zZS1yYW5nZVwiKS5jbGljayhmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAgIC8vICAgLy8gaWYgKGUudGFyZ2V0LmlkID09IFwidmFsdWVMYWJlbFwiKVxyXG4gICAgICAvLyAgIC8vICAgalF1ZXJ5KFwiLnJhbmdlaW5wdXQtc2hvd1wiKS5zaG93KCk7XHJcbiAgICAgIC8vICAgLy8gZWxzZSB7XHJcbiAgICAgIC8vICAgalF1ZXJ5KFwiLnJhbmdlaW5wdXQtc2hvd1wiKS5oaWRlKCk7XHJcbiAgICAgIC8vICAgLy8gfVxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIGpRdWVyeSgnI2Ryb3AgYScpLmRyYWdnYWJsZSh7XHJcbiAgICAgICAgcmV2ZXJ0OiAnaW52YWxpZCcsXHJcbiAgICAgICAgaGVscGVyOiAnY2xvbmUnLFxyXG4gICAgICAgIGNhbmNlbDogJycsXHJcbiAgICAgICAgY3Vyc29yOiAnbW92ZScsXHJcbiAgICAgICAgY29udGFpbm1lbnQ6ICcjZHJhZ3pvbmUnXHJcbiAgICAgIH0pO1xyXG4gICAgICBqUXVlcnkoJyNmb3JtdWxhJykuZHJvcHBhYmxlKHtcclxuICAgICAgICBob3ZlckNsYXNzOiAnZm9ybXVsYS1hY3RpdmUnLFxyXG4gICAgICAgIGRyb3A6IGZ1bmN0aW9uIChldmVudDogYW55LCB1aTogYW55KSB7XHJcbiAgICAgICAgICB2YXIgJGU6IGFueSA9IHVpLmRyYWdnYWJsZS5jbG9uZSgpO1xyXG4gICAgICAgICAgdmFyIGV2ZW50T2JqZWN0OiBhbnkgPSAkZTtcclxuICAgICAgICAgIGV2ZW50T2JqZWN0WzBdLnRleHQgPSAkZVswXS50ZXh0LnRvU3RyaW5nKCkudHJpbSgpLnN1YnN0cigwLCBzZWxmLm50aEluZGV4T2YoJGVbMF0udGV4dC50b1N0cmluZygpLnRyaW0oKSwgJyAnLCAyKSkucmVwbGFjZSgnLiAnLCAnJyk7XHJcbiAgICAgICAgICBqUXVlcnkoJyNmb3JtdWxhJykuZm9ybXVsYSgnaW5zZXJ0JywgZXZlbnRPYmplY3QpO1xyXG4gICAgICAgICAgalF1ZXJ5KCcjZm9ybXVsYS10ZXh0JykuZm9jdXMoKTtcclxuICAgICAgICAgIGlmIChqUXVlcnkoJy5mb3JtdWxhLWFsZXJ0JykuaGFzQ2xhc3MoJ2Zvcm11bGEtYWxlcnQtZ29vZCcpKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaXNTeW50YXhFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZUZvcm11bGFVSUNvbXBvbmVudHMoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGYuaXNTeW50YXhFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8qIEZvciBpbml0aWFsaXppbmcgZm9ybXVsYSBidWlsZGVyICAqL1xyXG4gICAgICB0aGlzLmZvcm11bGEgPSBqUXVlcnkoJyNmb3JtdWxhJykuZm9ybXVsYShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdHJpbmdzOiB7XHJcbiAgICAgICAgICAgIGZvcm11bGE6ICdEUk9QIEhFUkUnLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uUGFzc2VkOiAnTWF0aCBpcyBHb29kJyxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yOiAnTWF0aCBFcnJvcidcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBqUXVlcnkoJyNmb3JtdWxhLmZvcm11bGEtaXRlbScpLmhvdmVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZCgnZGl2LmZvci1vdXRwdXQtYm94ZGV0YWlsJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBqUXVlcnkodGhpcykuZmluZCgnZGl2LmZvci1vdXRwdXQtYm94ZGV0YWlsJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGpRdWVyeSgnI2Zvcm11bGEtdGV4dCcpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoalF1ZXJ5KCcuZm9ybXVsYS1hbGVydCcpLmhhc0NsYXNzKCdmb3JtdWxhLWFsZXJ0LWdvb2QnKSkge1xyXG4gICAgICAgICAgc2VsZi5pc1N5bnRheEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICBzZWxmLnVwZGF0ZUZvcm11bGFVSUNvbXBvbmVudHMoKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgIHNlbGYuaXNTeW50YXhFcnJvciA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgalF1ZXJ5KCcjZm9ybXVsYS1tb2RhbC1uZXcnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYuaXNTeW50YXhFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBmb3JtdWxhSW5kZXggPSBqUXVlcnkoJy5mb3JtdWxhLWZpbmFsJykuZGF0YSgnZm9ybXVsYScpO1xyXG4gICAgICAgIC8vIGlmKHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYVtmb3JtdWxhSW5kZXhdLmh0bWw9PScnKVxyXG4gICAgICAgIHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYVtmb3JtdWxhSW5kZXhdLmh0bWwgPSBqUXVlcnkoJyNmb3JtdWxhJykuaHRtbCgpO1xyXG4gICAgICAgIHNlbGYuZm9ybXVsYVNlcnZpY2UuY29ycmVjdEFsbEludmFsaWRRdWVzdGlvbnMoc2VsZi5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKVxyXG4gICAgICAgICAgLmZvcm11bGFbZm9ybXVsYUluZGV4XS5yZXN1bHQsIGZvcm11bGFJbmRleCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IGFueSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLnVwZGF0ZVRlbXBsYXRlUXVlc3Rpb25hcmUoKTtcclxuICAgIGpRdWVyeSgnI2Zvcm11bGEtbW9kYWwtbmV3Jykub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKGU6IGFueSkge1xyXG4gICAgICBqUXVlcnkoJyNkcm9wIGEnKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgIHJldmVydDogJ2ludmFsaWQnLFxyXG4gICAgICAgIGhlbHBlcjogJ2Nsb25lJyxcclxuICAgICAgICBjYW5jZWw6ICcnLFxyXG4gICAgICAgIGN1cnNvcjogJ21vdmUnLFxyXG4gICAgICAgIGNvbnRhaW5tZW50OiAnI2RyYWd6b25lJ1xyXG4gICAgICB9KTtcclxuICAgICAgc2VsZi5mb3JtdWxhSW5kZXggPSBqUXVlcnkoJy5mb3JtdWxhLWZpbmFsJykuZGF0YSgnZm9ybXVsYScpO1xyXG4gICAgICBzZWxmLnVwZGF0ZUZvcm11bGFVSUNvbXBvbmVudHMoKTtcclxuICAgICAgalF1ZXJ5KCcjcmFuZ2VCb3gnKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiBhbnkge1xyXG4gICAgdGhpcy5qUXVlcnlTdHVmZigpO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9nZ2xlUmFuZ2VCb3goKSB7XHJcbiAgLy8gICBqUXVlcnkoJyNyYW5nZUJveCcpLnRvZ2dsZSgnaGlkZScpO1xyXG4gIC8vIH1cclxuXHJcbiAgb25DaGFuZ2VEZWNpbWFsUGxhY2VzKCR2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLnRlbXBsYXRlSnNvbi5mb3JtdWxhW3RoaXMuZm9ybXVsYUluZGV4XS5kZWNpbWFsID0gJHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVGb3JtdWxhVUlDb21wb25lbnRzKCk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoQ2xpY2soKSB7XHJcbiAgICBsZXQgc2VsZjogYW55ID0gdGhpcztcclxuICAgIGlmIChqUXVlcnkoJy5mb3JtdWxhLWFsZXJ0JykuaGFzQ2xhc3MoJ2Zvcm11bGEtYWxlcnQtZ29vZCcpKSB7XHJcbiAgICAgIHNlbGYuaXNTeW50YXhFcnJvciA9IGZhbHNlO1xyXG4gICAgICBzZWxmLnVwZGF0ZUZvcm11bGFVSUNvbXBvbmVudHMoKTtcclxuICAgIH0gZWxzZVxyXG4gICAgICBzZWxmLmlzU3ludGF4RXJyb3IgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybXVsYSgpIHtcclxuICAgIGxldCBmb3JtdWxhSW5kZXggPSBqUXVlcnkoJy5mb3JtdWxhLWZpbmFsJykuZGF0YSgnZm9ybXVsYScpO1xyXG4gICAgdGhpcy50ZW1wbGF0ZUpzb24uZm9ybXVsYVtmb3JtdWxhSW5kZXhdLmh0bWwgPSBqUXVlcnkoJyNmb3JtdWxhJykuaHRtbCgpO1xyXG4gICAgdGhpcy50ZW1wbGF0ZUpzb24uZm9ybXVsYVtmb3JtdWxhSW5kZXhdLnJlc3VsdCA9IHRoaXMuZm9ybXVsYVswXS5pbm5lclRleHQucmVwbGFjZSgvXFxzL2csICcnKTtcclxuICAgIHRoaXMuc2F2ZUFwcHNldHRpbmcoKTtcclxuICAgIHRoaXMuZm9ybXVsYVNlcnZpY2UuY29ycmVjdEFsbEludmFsaWRRdWVzdGlvbnModGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKVxyXG4gICAgICAuZm9ybXVsYVtmb3JtdWxhSW5kZXhdLnJlc3VsdCwgZm9ybXVsYUluZGV4KTtcclxuICB9XHJcblxyXG4gIHNhdmVBcHBzZXR0aW5nKCkge1xyXG4gICAgdGhpcy5fYnVpbGRlclNlcnZpY2Uuc2F2ZUFwcFNldHRpbmcodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKSlcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybCA9IHJlc3BvbnNlLnVybDtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUZpbmFsUXVlc3Rpb25TdHJpbmcoZ2VuZXJpY1F1ZXN0aW9uOiBhbnksIHF1ZXNBcnJheTogYW55LCBsb3dlck9ySGlnaGVyT3JSYW5kb206IGFueSkge1xyXG4gICAgdmFyIGl0dGVyYXRvciA9IDA7XHJcbiAgICB2YXIgY3VycmVudFF1ZXNOdW1iZXI6IGFueSwgajogYW55O1xyXG4gICAgZm9yICh2YXIgaTogYW55ID0gMDsgaSA8IGdlbmVyaWNRdWVzdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZ2VuZXJpY1F1ZXN0aW9uW2ldID09ICdRJykge1xyXG4gICAgICAgIGogPSArK2k7XHJcbiAgICAgICAgY3VycmVudFF1ZXNOdW1iZXIgPSAnJztcclxuICAgICAgICB3aGlsZSAoIWlzTmFOKHBhcnNlSW50KGdlbmVyaWNRdWVzdGlvbltpXSkpKVxyXG4gICAgICAgICAgY3VycmVudFF1ZXNOdW1iZXIgKz0gZ2VuZXJpY1F1ZXN0aW9uW2krK107XHJcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMuZ2V0VmFsdWVPZlF1ZXN0aW9uTnVtYmVyKGN1cnJlbnRRdWVzTnVtYmVyLCBxdWVzQXJyYXlbaXR0ZXJhdG9yXSwgbG93ZXJPckhpZ2hlck9yUmFuZG9tKTtcclxuICAgICAgICBnZW5lcmljUXVlc3Rpb24gPSBnZW5lcmljUXVlc3Rpb24uc3Vic3RyaW5nKDAsIGogLSAxKSArXHJcbiAgICAgICAgICB2YWwgK1xyXG4gICAgICAgICAgZ2VuZXJpY1F1ZXN0aW9uLnN1YnN0cmluZyhpKTtcclxuICAgICAgICBpID0gaiAtIDEgKyB2YWwudG9TdHJpbmcoKS5sZW5ndGg7XHJcbiAgICAgICAgaXR0ZXJhdG9yKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBnZW5lcmljUXVlc3Rpb247XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZU9mUXVlc3Rpb25OdW1iZXIocXVlc051bWJlcjogYW55LCBvcHRpb25TZWxlY3RlZEluZGV4OiBhbnksIGxvd2VyT3JIaWdoZXJPclJhbmRvbTogYW55KSB7XHJcbiAgICB2YXIgY3VycmVudFF1ZXNPYmplY3QgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmVXaXRoRW1pdHRlZExlYWRGb3JtUXVlc3Rpb24oKVtxdWVzTnVtYmVyIC0gMV07XHJcbiAgICBpZiAoY3VycmVudFF1ZXNPYmplY3QpIHtcclxuICAgICAgaWYgKGN1cnJlbnRRdWVzT2JqZWN0LnR5cGUgPT0gJ3NsaWRlcicgfHwgKGN1cnJlbnRRdWVzT2JqZWN0LnR5cGUgPT0gJ3RleHRmaWVsZCcgJiYgY3VycmVudFF1ZXNPYmplY3QuY29uZmlnLnR5cGUgPT0gJ251bWJlcicpKSB7XHJcbiAgICAgICAgaWYgKGxvd2VyT3JIaWdoZXJPclJhbmRvbSA9PSAnbG93ZXInKVxyXG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRRdWVzT2JqZWN0LnByb3BzLm1pblZhbDtcclxuICAgICAgICBlbHNlIGlmIChsb3dlck9ySGlnaGVyT3JSYW5kb20gPT0gJ2hpZ2hlcicpXHJcbiAgICAgICAgICByZXR1cm4gY3VycmVudFF1ZXNPYmplY3QucHJvcHMubWF4VmFsO1xyXG4gICAgICAgIGVsc2UgaWYgKGxvd2VyT3JIaWdoZXJPclJhbmRvbSA9PSAncmFuZG9tJylcclxuICAgICAgICAgIHJldHVybiBvcHRpb25TZWxlY3RlZEluZGV4O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gY3VycmVudFF1ZXNPYmplY3Qub3B0aW9uc1tvcHRpb25TZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlRm9ybXVsYVVJQ29tcG9uZW50cygpOiBhbnkge1xyXG4gICAgdmFyIHJhd0Zvcm11bGEgPSBqUXVlcnkoJyNmb3JtdWxhJylbMF0uaW5uZXJUZXh0O1xyXG4gICAgbGV0IGZvcm11bGFJbmRleCA9IGpRdWVyeSgnLmZvcm11bGEtZmluYWwnKS5kYXRhKCdmb3JtdWxhJyk7XHJcbiAgICB2YXIgcXVlc05vd09iamVjdCA9IHRoaXMudGVtcGxhdGVKc29uLmZvcm11bGFbZm9ybXVsYUluZGV4XTtcclxuICAgIHZhciBjdXJyZW50UXVlc051bWJlcjogYW55O1xyXG4gICAgdmFyIHF1ZXNBcnJheTogYW55ID0gW10sIGo6IG51bWJlciA9IDA7XHJcbiAgICB2YXIgbG93ZXJSYW5nZVZhbHVlczogYW55ID0gW10sIGE6IG51bWJlciA9IDA7XHJcbiAgICB2YXIgaGlnZXJSYW5nZVZhbHVlczogYW55ID0gW10sIGI6IG51bWJlciA9IDA7XHJcbiAgICBqUXVlcnkoJyNyYW5kb20tcXVlcy1udW1zJylbMF0uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBqUXVlcnkoJyNyYW5kb20tcXVlcy10aXRsZXMnKVswXS5pbm5lckhUTUwgPSAnJztcclxuICAgIGpRdWVyeSgnI2ZpbmFsLXJlc3VsdC1yYW5nZScpWzBdLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIC8vIEFsdGVybmF0aXZlbHkgdGhleSBjb3VsZCBhbHNvIGJlIE51bWJlclxyXG4gICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhW2Zvcm11bGFJbmRleF0ucmFuZ2UubG93ZXIudHlwZT0nUGVyY2VudGFnZSc7XHJcbiAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbZm9ybXVsYUluZGV4XS5yYW5nZS5oaWdoZXIudHlwZT0nUGVyY2VudGFnZSc7XHJcblxyXG4gICAgLy9ESVNBQkxFIENMQVNTLS0tLS0tIFxyXG4gICAgdHJ5IHtcclxuICAgICAgZm9yIChsZXQgaTogYW55ID0gMDsgaSA8IGpRdWVyeSgnLmZvcm11bGEtcXVlc3Rpb25zJykuZmluZCgnYScpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGpRdWVyeSgnLmZvcm11bGEtcXVlc3Rpb25zJylbMF0uY2hpbGRyZW5baV0uY2xhc3NOYW1lLmluZGV4T2YoJ2Rpc2FibGUnKSA+IC0xKSB7XHJcbiAgICAgICAgICB2YXIgc3RhcnRJbmRleCA9IGpRdWVyeSgnLmZvcm11bGEtcXVlc3Rpb25zJylbMF0uY2hpbGRyZW5baV0uY2xhc3NOYW1lLmluZGV4T2YoJyBkaXNhYmxlJyk7XHJcblxyXG4gICAgICAgICAgalF1ZXJ5KCcuZm9ybXVsYS1xdWVzdGlvbnMnKVswXS5jaGlsZHJlbltpXS5jbGFzc05hbWUgPVxyXG4gICAgICAgICAgICBqUXVlcnkoJy5mb3JtdWxhLXF1ZXN0aW9ucycpWzBdLmNoaWxkcmVuW2ldLmNsYXNzTmFtZS5zdWJzdHJpbmcoMCwgc3RhcnRJbmRleCkgKyAnJyArXHJcbiAgICAgICAgICAgIGpRdWVyeSgnLmZvcm11bGEtcXVlc3Rpb25zJylbMF0uY2hpbGRyZW5baV0uY2xhc3NOYW1lLnN1YnN0cmluZyhzdGFydEluZGV4ICsgJyBkaXNhYmxlJy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAvL0RJU0FCTEUgQ0xBU1MtLS0tLS0gXHJcbiAgICB0aGlzLmZvcm11bGFTZXJ2aWNlLnVwZGF0ZUZvcm11bGFWYWxpZGl0eShyYXdGb3JtdWxhLCBmb3JtdWxhSW5kZXgpO1xyXG4gICAgbGV0IG1hcEZvclJhbmRvbVZhbHVlczogYW55ID0ge307XHJcbiAgICBmb3IgKHZhciBpOiBhbnkgPSAwOyBpIDwgcmF3Rm9ybXVsYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocmF3Rm9ybXVsYVtpXSA9PSAnUScpIHtcclxuICAgICAgICBpKys7XHJcbiAgICAgICAgY3VycmVudFF1ZXNOdW1iZXIgPSAnJztcclxuICAgICAgICB3aGlsZSAoIWlzTmFOKHBhcnNlSW50KHJhd0Zvcm11bGFbaV0pKSlcclxuICAgICAgICAgIGN1cnJlbnRRdWVzTnVtYmVyICs9IHJhd0Zvcm11bGFbaSsrXTtcclxuICAgICAgICB2YXIgY3VycmVudFF1ZXNPYmplY3Q6IGFueSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZVdpdGhFbWl0dGVkTGVhZEZvcm1RdWVzdGlvbigpW2N1cnJlbnRRdWVzTnVtYmVyIC0gMV07XHJcbiAgICAgICAgdmFyIHJhbmROdW1iZXIgPSAwO1xyXG4gICAgICAgIGlmIChjdXJyZW50UXVlc09iamVjdCkge1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRRdWVzT2JqZWN0LnR5cGUgPT0gJ3NsaWRlcicpIHtcclxuICAgICAgICAgICAgdmFyIGFycjogYW55ID0gW10sIHN1bTogbnVtYmVyID0gcGFyc2VJbnQoY3VycmVudFF1ZXNPYmplY3QucHJvcHMubWluVmFsKTtcclxuICAgICAgICAgICAgd2hpbGUgKHN1bSA8PSBwYXJzZUludChjdXJyZW50UXVlc09iamVjdC5wcm9wcy5tYXhWYWwpKSB7XHJcbiAgICAgICAgICAgICAgYXJyLnB1c2goc3VtKTtcclxuICAgICAgICAgICAgICBzdW0gKz0gcGFyc2VJbnQoY3VycmVudFF1ZXNPYmplY3QucHJvcHMuc3RlcHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXNOdW1iZXIgaW4gbWFwRm9yUmFuZG9tVmFsdWVzKVxyXG4gICAgICAgICAgICAgIHJhbmROdW1iZXIgPSBtYXBGb3JSYW5kb21WYWx1ZXNbY3VycmVudFF1ZXNOdW1iZXJdO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICByYW5kTnVtYmVyID0gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICBtYXBGb3JSYW5kb21WYWx1ZXNbY3VycmVudFF1ZXNOdW1iZXJdID0gcmFuZE51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UXVlc09iamVjdC50eXBlID09ICd0ZXh0ZmllbGQnICYmIGN1cnJlbnRRdWVzT2JqZWN0LmNvbmZpZy50eXBlID09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHZhciBhcnI6IGFueSA9IFtdLCBzdW06IG51bWJlciA9IHBhcnNlSW50KGN1cnJlbnRRdWVzT2JqZWN0LnByb3BzLm1pblZhbCk7XHJcbiAgICAgICAgICAgIHdoaWxlIChzdW0gPD0gcGFyc2VJbnQoY3VycmVudFF1ZXNPYmplY3QucHJvcHMubWF4VmFsKSkge1xyXG4gICAgICAgICAgICAgIGFyci5wdXNoKHN1bSk7XHJcbiAgICAgICAgICAgICAgc3VtICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzTnVtYmVyIGluIG1hcEZvclJhbmRvbVZhbHVlcylcclxuICAgICAgICAgICAgICByYW5kTnVtYmVyID0gbWFwRm9yUmFuZG9tVmFsdWVzW2N1cnJlbnRRdWVzTnVtYmVyXTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmFuZE51bWJlciA9IGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgbWFwRm9yUmFuZG9tVmFsdWVzW2N1cnJlbnRRdWVzTnVtYmVyXSA9IHJhbmROdW1iZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc051bWJlciBpbiBtYXBGb3JSYW5kb21WYWx1ZXMpXHJcbiAgICAgICAgICAgICAgcmFuZE51bWJlciA9IG1hcEZvclJhbmRvbVZhbHVlc1tjdXJyZW50UXVlc051bWJlcl07XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJhbmROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50UXVlc09iamVjdC5vcHRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgbWFwRm9yUmFuZG9tVmFsdWVzW2N1cnJlbnRRdWVzTnVtYmVyXSA9IHJhbmROdW1iZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHF1ZXNBcnJheVtqKytdID0gcmFuZE51bWJlcjtcclxuICAgICAgICAgIC8qIHJhbmdlIFZhbHVlcyBDYWxjdWxhdGlvbiAtLVNUQVJUKi9cclxuICAgICAgICAgIHZhciBtaW4gPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgICAgICAgdmFyIG1heCA9IC0gTnVtYmVyLk1JTl9WQUxVRTtcclxuICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgY3VycmVudFF1ZXNPYmplY3Qub3B0aW9ucy5sZW5ndGg7IHQrKykge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXNPYmplY3Qub3B0aW9uc1t0XS52YWx1ZSA8PSBtaW4pIG1pbiA9IHQ7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc09iamVjdC5vcHRpb25zW3RdLnZhbHVlID49IG1heCkgbWF4ID0gdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxvd2VyUmFuZ2VWYWx1ZXNbYSsrXSA9IG1pbjtcclxuICAgICAgICAgIGhpZ2VyUmFuZ2VWYWx1ZXNbYisrXSA9IG1heDtcclxuICAgICAgICAgIC8qIHJhbmdlIFZhbHVlcyBDYWxjdWxhdGlvbiAtLUVORCovXHJcblxyXG4gICAgICAgICAgaWYgKCEoalF1ZXJ5KCcuZm9ybXVsYS1xdWVzdGlvbnMnKVswXS5jaGlsZHJlbltjdXJyZW50UXVlc051bWJlciAtIDFdLmNsYXNzTmFtZS5pbmRleE9mKCdkaXNhYmxlJykgPiAtMSkpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcuZm9ybXVsYS1xdWVzdGlvbnMnKVswXS5jaGlsZHJlbltjdXJyZW50UXVlc051bWJlciAtIDFdLmNsYXNzTmFtZSArPSAnIGRpc2FibGUnO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGpRdWVyeSgnI3JhbmRvbS1xdWVzLW51bXMnKVswXS5pbm5lckhUTUwgKz0gJzx0aD5RJyArIGN1cnJlbnRRdWVzTnVtYmVyICsgJzwvdGg+JztcclxuXHJcbiAgICAgICAgICBpZiAoY3VycmVudFF1ZXNPYmplY3QudHlwZSA9PSAnc2xpZGVyJyB8fCAoY3VycmVudFF1ZXNPYmplY3QudHlwZSA9PSAndGV4dGZpZWxkJyAmJiBjdXJyZW50UXVlc09iamVjdC5jb25maWcudHlwZSA9PSAnbnVtYmVyJykpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjcmFuZG9tLXF1ZXMtdGl0bGVzJylbMF0uaW5uZXJIVE1MICs9ICc8dGQ+ICgnICsgcmFuZE51bWJlciArICcpPC90ZD4nO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjcmFuZG9tLXF1ZXMtdGl0bGVzJylbMF0uaW5uZXJIVE1MICs9ICc8dGQ+ICgnICsgY3VycmVudFF1ZXNPYmplY3Qub3B0aW9uc1tyYW5kTnVtYmVyXS5sYWJlbCArICcpPC90ZD4nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBqUXVlcnkoJyNyYW5kb20tcXVlcy1udW1zJylbMF0uaW5uZXJIVE1MICs9ICc8dGg+UScgKyBjdXJyZW50UXVlc051bWJlciArICc8L3RoPic7XHJcbiAgICAgICAgICBqUXVlcnkoJyNyYW5kb20tcXVlcy10aXRsZXMnKVswXS5pbm5lckhUTUwgKz0gJzx0ZD4gKCcgKyBcIkRvZXNuJ3QgRXhpc3RcIiArICcpPC90ZD4nO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIEZvciB0aGUgI2ZpbmFsLXJlc3VsdC1yYW5nZSB2YWx1ZSBVcGRhdGUgLS1TVEFSVCAqL1xyXG4gICAgdmFyIHJhbmdlTWluVmFsdWU6IGFueTtcclxuICAgIHZhciByYW5nZU1heFZhbHVlOiBhbnk7XHJcbiAgICB2YXIgZmluYWxRdWVzdGlvblN0cmluZ0Zvckxvd2VyUmFuZ2UgPSB0aGlzLmNyZWF0ZUZpbmFsUXVlc3Rpb25TdHJpbmcocmF3Rm9ybXVsYS5yZXBsYWNlKC9cXHMvZywgJycpXHJcbiAgICAgIC5yZXBsYWNlKC8sL2csICcnKS5yZXBsYWNlKC94L2csICcqJyksIGxvd2VyUmFuZ2VWYWx1ZXMsICdsb3dlcicpO1xyXG5cclxuICAgIHZhciBmaW5hbFF1ZXN0aW9uU3RyaW5nRm9ySGlnaGVyUmFuZ2UgPSB0aGlzLmNyZWF0ZUZpbmFsUXVlc3Rpb25TdHJpbmcocmF3Rm9ybXVsYS5yZXBsYWNlKC9cXHMvZywgJycpXHJcbiAgICAgIC5yZXBsYWNlKC8sL2csICcnKS5yZXBsYWNlKC94L2csICcqJyksIGhpZ2VyUmFuZ2VWYWx1ZXMsICdoaWdoZXInKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByYW5nZU1pblZhbHVlID0gbWF0aC5ldmFsKGZpbmFsUXVlc3Rpb25TdHJpbmdGb3JMb3dlclJhbmdlKTtcclxuICAgICAgcmFuZ2VNYXhWYWx1ZSA9IG1hdGguZXZhbChmaW5hbFF1ZXN0aW9uU3RyaW5nRm9ySGlnaGVyUmFuZ2UpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByYW5nZU1heFZhbHVlID0gMDtcclxuICAgICAgcmFuZ2VNaW5WYWx1ZSA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyYW5nZU1pblZhbHVlID09PSB1bmRlZmluZWQgfHwgcmFuZ2VNYXhWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmIChyYXdGb3JtdWxhLmxlbmd0aCAhPT0gMClcclxuICAgICAgICBqUXVlcnkoJyNmaW5hbC1yZXN1bHQtcmFuZ2UnKVswXS5pbm5lckhUTUwgPSAnPGxpPkludmFsaWQ8L2xpPic7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBqUXVlcnkoJyNmaW5hbC1yZXN1bHQtcmFuZ2UnKVswXS5pbm5lckhUTUwgPSAnPGxpPjwvbGk+JztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByYW5nZU1pblZhbHVlID0gdGhpcy5mb3JtdWxhU2VydmljZS5hZGRDb21tYXMocmFuZ2VNaW5WYWx1ZS50b0ZpeGVkKE51bWJlcihxdWVzTm93T2JqZWN0LmRlY2ltYWwpKSk7XHJcbiAgICAgIHJhbmdlTWF4VmFsdWUgPSB0aGlzLmZvcm11bGFTZXJ2aWNlLmFkZENvbW1hcyhyYW5nZU1heFZhbHVlLnRvRml4ZWQoTnVtYmVyKHF1ZXNOb3dPYmplY3QuZGVjaW1hbCkpKTtcclxuICAgICAgaWYgKHF1ZXNOb3dPYmplY3QudW5pdHMucG9zdGZpeCkge1xyXG4gICAgICAgIHJhbmdlTWluVmFsdWUgPSByYW5nZU1pblZhbHVlICsgcXVlc05vd09iamVjdC51bml0cy5wb3N0VmFsdWU7XHJcbiAgICAgICAgcmFuZ2VNYXhWYWx1ZSA9IHJhbmdlTWF4VmFsdWUgKyBxdWVzTm93T2JqZWN0LnVuaXRzLnBvc3RWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocXVlc05vd09iamVjdC51bml0cy5wcmVmaXgpIHtcclxuICAgICAgICByYW5nZU1pblZhbHVlID0gcXVlc05vd09iamVjdC51bml0cy5wcmVWYWx1ZSArIHJhbmdlTWluVmFsdWU7XHJcbiAgICAgICAgcmFuZ2VNYXhWYWx1ZSA9IHF1ZXNOb3dPYmplY3QudW5pdHMucHJlVmFsdWUgKyByYW5nZU1heFZhbHVlO1xyXG4gICAgICB9XHJcbiAgICAgIGpRdWVyeSgnI2ZpbmFsLXJlc3VsdC1yYW5nZScpWzBdLmlubmVySFRNTCA9ICc8bGk+JyArIHJhbmdlTWluVmFsdWUgKyAnPC9saT4nICsgJzxsaT50bzwvbGk+JyArICc8bGk+JyArIHJhbmdlTWF4VmFsdWUgKyAnPC9saT4nO1xyXG4gICAgfVxyXG4gICAgLyogRm9yIHRoZSAjZmluYWwtcmVzdWx0LXJhbmdlIHZhbHVlIFVwZGF0ZSAtLUVORCAqL1xyXG4gICAgLyogRm9yIHRoZSBsb3dlciBkaXYgI2ZpbmFsLXJhbmRvbS12YWx1ZSB2YWx1ZSBVcGRhdGUgLS1TVEFSVCAqL1xyXG4gICAgdmFyIGZpbmFsQW5zd2VyOiBhbnk7XHJcbiAgICB2YXIgZmluYWxRdWVzdGlvblN0cmluZyA9IHRoaXMuY3JlYXRlRmluYWxRdWVzdGlvblN0cmluZyhyYXdGb3JtdWxhLnJlcGxhY2UoL1xccy9nLCAnJylcclxuICAgICAgLnJlcGxhY2UoLywvZywgJycpLnJlcGxhY2UoL3gvZywgJyonKSwgcXVlc0FycmF5LCAncmFuZG9tJyk7XHJcbiAgICB0cnkge1xyXG4gICAgICBmaW5hbEFuc3dlciA9IG1hdGguZXZhbChmaW5hbFF1ZXN0aW9uU3RyaW5nKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZmluYWxBbnN3ZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbmFsQW5zd2VyID09PSB1bmRlZmluZWQpIGZpbmFsQW5zd2VyID0gMDtcclxuXHJcbiAgICB2YXIgbG93ZXI6IGFueSwgdXBwZXI6IGFueTtcclxuICAgIGlmIChxdWVzTm93T2JqZWN0LnJhbmdlLnN0YXR1cykge1xyXG4gICAgICB2YXIgbG93ZXJWYWwgPSBwYXJzZUZsb2F0KHF1ZXNOb3dPYmplY3QucmFuZ2UubG93ZXIudmFsdWUpO1xyXG4gICAgICB2YXIgdXBwZXJWYWwgPSBwYXJzZUZsb2F0KHF1ZXNOb3dPYmplY3QucmFuZ2UuaGlnaGVyLnZhbHVlKTtcclxuICAgICAgaWYgKGlzTmFOKGxvd2VyVmFsKSkgbG93ZXJWYWwgPSAwO1xyXG4gICAgICBpZiAoaXNOYU4odXBwZXJWYWwpKSB1cHBlclZhbCA9IDA7XHJcbiAgICAgIGlmIChpc05hTihwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKSkpIHtcclxuICAgICAgICBmaW5hbEFuc3dlciA9IDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHF1ZXNOb3dPYmplY3QucmFuZ2UuaGlnaGVyLnR5cGUgPT0gJ051bWJlcicgJiYgcXVlc05vd09iamVjdC5yYW5nZS5sb3dlci50eXBlID09ICdOdW1iZXInKSB7XHJcbiAgICAgICAgICBsb3dlciA9IChwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKSAtIGxvd2VyVmFsKTtcclxuICAgICAgICAgIHVwcGVyID0gKHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpICsgdXBwZXJWYWwpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocXVlc05vd09iamVjdC5yYW5nZS5oaWdoZXIudHlwZSA9PSAnUGVyY2VudGFnZScgJiYgcXVlc05vd09iamVjdC5yYW5nZS5sb3dlci50eXBlID09ICdQZXJjZW50YWdlJykge1xyXG4gICAgICAgICAgbG93ZXIgPSAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikgLSAobG93ZXJWYWwgLyAxMDApICogKHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpKSk7XHJcbiAgICAgICAgICB1cHBlciA9IChwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKSArICh1cHBlclZhbCAvIDEwMCkgKiAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikpKTtcclxuICAgICAgICAgIGlmIChpc05hTih1cHBlclZhbCkpXHJcbiAgICAgICAgICAgIHVwcGVyID0gcGFyc2VGbG9hdChmaW5hbEFuc3dlcik7XHJcbiAgICAgICAgICBpZiAoaXNOYU4obG93ZXJWYWwpKVxyXG4gICAgICAgICAgICBsb3dlciA9IHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG93ZXIgPSB0aGlzLmZvcm11bGFTZXJ2aWNlLmFkZENvbW1hcyhsb3dlci50b0ZpeGVkKE51bWJlcihxdWVzTm93T2JqZWN0LmRlY2ltYWwpKSk7XHJcbiAgICAgICAgdXBwZXIgPSB0aGlzLmZvcm11bGFTZXJ2aWNlLmFkZENvbW1hcyh1cHBlci50b0ZpeGVkKE51bWJlcihxdWVzTm93T2JqZWN0LmRlY2ltYWwpKSk7XHJcblxyXG4gICAgICAgIGlmIChxdWVzTm93T2JqZWN0LnVuaXRzLnBvc3RmaXgpIHtcclxuICAgICAgICAgIGxvd2VyID0gbG93ZXIgKyBxdWVzTm93T2JqZWN0LnVuaXRzLnBvc3RWYWx1ZTtcclxuICAgICAgICAgIHVwcGVyID0gdXBwZXIgKyBxdWVzTm93T2JqZWN0LnVuaXRzLnBvc3RWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHF1ZXNOb3dPYmplY3QudW5pdHMucHJlZml4KSB7XHJcbiAgICAgICAgICBsb3dlciA9IHF1ZXNOb3dPYmplY3QudW5pdHMucHJlVmFsdWUgKyBsb3dlcjtcclxuICAgICAgICAgIHVwcGVyID0gcXVlc05vd09iamVjdC51bml0cy5wcmVWYWx1ZSArIHVwcGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbEFuc3dlciA9IGxvd2VyICsgJyB0byAnICsgdXBwZXI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChpc05hTihwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKSkpIHtcclxuICAgICAgICBpZiAoZmluYWxBbnN3ZXIgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgZmluYWxBbnN3ZXIgPSAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbmFsQW5zd2VyID0gTnVtYmVyKGZpbmFsQW5zd2VyKTtcclxuICAgICAgICBmaW5hbEFuc3dlciA9IHRoaXMuZm9ybXVsYVNlcnZpY2UuYWRkQ29tbWFzKGZpbmFsQW5zd2VyLnRvRml4ZWQoTnVtYmVyKHF1ZXNOb3dPYmplY3QuZGVjaW1hbCkpKTtcclxuICAgICAgICBpZiAocXVlc05vd09iamVjdC51bml0cy5wb3N0Zml4KSB7XHJcbiAgICAgICAgICBmaW5hbEFuc3dlciA9IGZpbmFsQW5zd2VyICsgcXVlc05vd09iamVjdC51bml0cy5wb3N0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChxdWVzTm93T2JqZWN0LnVuaXRzLnByZWZpeCkge1xyXG4gICAgICAgICAgZmluYWxBbnN3ZXIgPSBxdWVzTm93T2JqZWN0LnVuaXRzLnByZVZhbHVlICsgZmluYWxBbnN3ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgalF1ZXJ5KCcjZmluYWwtcmFuZG9tLXZhbHVlJykuaHRtbChmaW5hbEFuc3dlcik7XHJcbiAgICAvKiBGb3IgdGhlIGxvd2VyIGRpdiAjZmluYWwtcmFuZG9tLXZhbHVlIHZhbHVlIFVwZGF0ZSAtLUVORCAgICovXHJcblxyXG4gICAgLy8galF1ZXJ5KCcjdmFsdWVMYWJlbCcpLnZhbCh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbZm9ybXVsYUluZGV4XS5yYW5nZS5sb3dlci52YWx1ZSArICcgLSAnICtcclxuICAgIC8vICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhW2Zvcm11bGFJbmRleF0ucmFuZ2UuaGlnaGVyLnZhbHVlKTtcclxuICAgIGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbZm9ybXVsYUluZGV4XS5yYW5nZS5oaWdoZXIudHlwZSA9PSAnTnVtYmVyJykge1xyXG4gICAgICBqUXVlcnkoJyNyYW5nZVR5cGUgb3B0aW9uW3ZhbHVlPVwiTnVtYmVyXCJdJykuYXR0cihcInNlbGVjdGVkXCIsIFwic2VsZWN0ZWRcIik7XHJcbiAgICAgIGpRdWVyeSgnI3JhbmdlVHlwZSBvcHRpb25bdmFsdWU9XCJQZXJjZW50YWdlXCJdJykucmVtb3ZlQXR0cihcInNlbGVjdGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGpRdWVyeSgnI3JhbmdlVHlwZSBvcHRpb25bdmFsdWU9XCJQZXJjZW50YWdlXCJdJykuYXR0cihcInNlbGVjdGVkXCIsIFwic2VsZWN0ZWRcIik7XHJcbiAgICAgIGpRdWVyeSgnI3JhbmdlVHlwZSBvcHRpb25bdmFsdWU9XCJOdW1iZXJcIl0nKS5yZW1vdmVBdHRyKFwic2VsZWN0ZWRcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==
