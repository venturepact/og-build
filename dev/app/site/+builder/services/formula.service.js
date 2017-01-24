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
var JSONBuilder_service_1 = require('../../+builder/services/JSONBuilder.service');
var analytic_service_1 = require('../../templates/services/analytic.service');
var FormulaService = (function () {
    function FormulaService(jsonBuilderHelper, _analysisService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._analysisService = _analysisService;
    }
    FormulaService.prototype.addCommas = function (nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    };
    FormulaService.prototype.textParser = function (normalText) {
        var finder = normalText.match(/\{(.*?)\}/g);
        var finalText = normalText;
        for (var a in finder) {
            if (finalText != undefined) {
                var val = finalText.indexOf(finder[a]);
                if (finder[a][1] == 'Q') {
                    var quesNumber = finder[a].substring(2, finder[a].length - 1);
                    if (!isNaN(quesNumber)) {
                        var currentQues = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[quesNumber - 1];
                        var questionLabel = undefined;
                        if (currentQues != undefined) {
                            questionLabel = "Question " + quesNumber;
                            if (currentQues.props.currentLabel != '' && currentQues.props.currentLabel != undefined)
                                questionLabel = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[quesNumber - 1].props.currentLabel;
                        }
                        if (questionLabel != undefined)
                            finalText = finalText.substring(0, val) + questionLabel + finalText.substring(val + finder[a].length);
                        else
                            finalText = undefined;
                    }
                }
                else if (finder[a][1] == 'R') {
                    var resultNumber = finder[a].substring(2, finder[a].length - 1);
                    if (!isNaN(resultNumber)) {
                        var finalResultValue = this.formulaFunction(resultNumber - 1);
                        if (finalResultValue != undefined)
                            finalText = finalText.substring(0, val) + finalResultValue + finalText.substring(val + finder[a].length);
                        else
                            finalText = undefined;
                    }
                }
            }
        }
        var leadformItem = this.getFirstLeadForm();
        if (finalText && leadformItem) {
            finalText = finalText.replace(/({name}|{email}|{tel}|{others})/g, function (match) {
                var fieldMatched = match.split(/[{}]/)[1];
                for (var field in leadformItem.fields) {
                    var type = (leadformItem.fields[field].type == "lastName") ?
                        "others" : (leadformItem.fields[field].type == 'firstName') ? "name" : leadformItem.fields[field].type;
                    if (type == fieldMatched)
                        return leadformItem.fields[field].value || match;
                }
            });
        }
        if (finalText == undefined)
            return normalText;
        return finalText;
    };
    FormulaService.prototype.getFirstLeadForm = function () {
        var leadformItem = undefined;
        for (var _i = 0, _a = this.jsonBuilderHelper.getJSONBuilt().pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === 'Landing') {
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                        var item = _e[_d];
                        if (item.type == 'leadform' && item.visible == true) {
                            leadformItem = item;
                        }
                    }
                }
            }
        }
        if (!leadformItem) {
            this.jsonBuilderHelper.updateTemplateQuestionare();
            for (var i = 0; i < this.jsonBuilderHelper.getTemplateQuestionare().length; i++) {
                if (this.jsonBuilderHelper.getTemplateQuestionare()[i].type == 'leadform_question' &&
                    this.jsonBuilderHelper.getTemplateQuestionare()[i].visible == true) {
                    leadformItem = this.jsonBuilderHelper.getTemplateQuestionare()[i];
                    break;
                }
            }
        }
        return leadformItem;
    };
    FormulaService.prototype.allValidVariables = function () {
        var allVariables = [];
        var i;
        var leadformItem = this.getFirstLeadForm();
        if (leadformItem) {
            allVariables.push('');
            for (var field in leadformItem.fields) {
                var type = (leadformItem.fields[field].type == "lastName") ?
                    "others" : (leadformItem.fields[field].type == 'firstName') ? "name" : leadformItem.fields[field].type;
                allVariables.push('{' + type + '}');
            }
        }
        allVariables.push(' ');
        for (i = 0; i < this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion().length; i++)
            allVariables.push('{Q' + (i + 1) + '}');
        allVariables.push('   ');
        for (i = 0; i < this.jsonBuilderHelper.getJSONBuilt().formula.length; i++)
            allVariables.push('{R' + (i + 1) + '}');
        return allVariables;
    };
    FormulaService.prototype.allValidVariablesWysiywigList = function () {
        var allVariables = [];
        var i;
        var leadformItem = this.getFirstLeadForm();
        if (leadformItem) {
            allVariables.push('LeadDetails:');
            for (var field in leadformItem.fields) {
                var title = leadformItem.fields[field].placeholder;
                if (title.length > 35)
                    title = title.substr(0, 35) + "...";
                allVariables.push(title + ' : ' + leadformItem.fields[field].value);
            }
        }
        allVariables.push('Answer to:');
        for (i = 0; i < this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion().length; i++) {
            var title = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[i].props.title;
            if (title.length > 35)
                title = title.substr(0, 35) + "...";
            allVariables.push('  Q' + (i + 1) + ': ' + title);
        }
        allVariables.push('Result:');
        for (i = 0; i < this.jsonBuilderHelper.getJSONBuilt().formula.length; i++)
            allVariables.push('  Result ' + (i + 1));
        return allVariables;
    };
    FormulaService.prototype.correctAllInvalidQuestions = function (rawFormula, formulaIndex) {
        var currentQuesNumber;
        for (var i = 0; i < rawFormula.length; i++) {
            if (rawFormula[i] == 'Q') {
                i++;
                currentQuesNumber = '';
                while (!isNaN(parseInt(rawFormula[i])))
                    currentQuesNumber += rawFormula[i++];
                var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                if (currentQuesObject && (currentQuesObject.type == 'switchbox' || currentQuesObject.type == 'radio_button' ||
                    currentQuesObject.type == 'selectbox' || currentQuesObject.type == 'checkbox')) {
                    if (!currentQuesObject.config.validations.required.status)
                        currentQuesObject.config.validations.required.status = true;
                    var isAnyDefaultSelected = false;
                    for (var option in currentQuesObject.options) {
                        if (currentQuesObject.options[option].defualtselected == true)
                            isAnyDefaultSelected = true;
                    }
                    if (!isAnyDefaultSelected) {
                        currentQuesObject.options[0].defualtselected = true;
                        currentQuesObject.options[0].selected = true;
                    }
                }
            }
        }
    };
    FormulaService.prototype.updateFormulaValidity = function (rawFormula, formulaIndex) {
        var currentQuesNumber;
        var isValid = true;
        for (var i = 0; i < rawFormula.length; i++) {
            if (rawFormula[i] == 'Q') {
                i++;
                currentQuesNumber = '';
                while (!isNaN(parseInt(rawFormula[i])))
                    currentQuesNumber += rawFormula[i++];
                var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                if (currentQuesObject) {
                    if ((currentQuesObject.type == 'switchbox' || currentQuesObject.type == 'radio_button' ||
                        currentQuesObject.type == 'selectbox' || currentQuesObject.type == 'checkbox')) {
                        var isAnyDefaultSelected = false;
                        for (var option in currentQuesObject.options) {
                            if (currentQuesObject.options[option].defualtselected == true)
                                isAnyDefaultSelected = true;
                        }
                        if (currentQuesObject.config.validations.required.status || isAnyDefaultSelected) { }
                        else
                            isValid = false;
                    }
                }
                else
                    isValid = false;
            }
        }
        this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].isValid = isValid;
    };
    FormulaService.prototype.getAllInvalidFormulas = function () {
        var areAllFormulasValid = true;
        var allInvalidFormulas = '';
        for (var formula in this.jsonBuilderHelper.getJSONBuilt().formula) {
            this.updateFormulaValidity(this.jsonBuilderHelper.getJSONBuilt().formula[formula].result, formula);
            if (!this.jsonBuilderHelper.getJSONBuilt().formula[formula].isValid) {
                areAllFormulasValid = false;
                allInvalidFormulas += 'Result ' + (parseInt(formula) + 1) + ',';
            }
        }
        if (areAllFormulasValid)
            return undefined;
        else {
            allInvalidFormulas = allInvalidFormulas.slice(0, -1);
            return allInvalidFormulas;
        }
    };
    FormulaService.prototype.checkIfFormulaWouldGiveSyntaxError = function () {
        var allFormulas = this.jsonBuilderHelper.getJSONBuilt().formula;
        var errorResultList = '';
        for (var formula in allFormulas) {
            var rawFormula = allFormulas[formula].result;
            for (var i = 0; i < rawFormula.length; i++) {
                if (rawFormula[i] == 'Q') {
                    i++;
                    var currentQuesNumber = '';
                    while (!isNaN(parseInt(rawFormula[i])))
                        currentQuesNumber += rawFormula[i++];
                    var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                    if (!currentQuesObject || ((currentQuesObject.type == 'textfield' && (currentQuesObject.config.type == 'text' || currentQuesObject.config.type == 'email'))
                        || currentQuesObject.type == 'text-area')) {
                        errorResultList += 'Result ' + (parseInt(formula) + 1) + ',';
                        break;
                    }
                }
            }
        }
        errorResultList = errorResultList.slice(0, -1);
        return errorResultList;
    };
    FormulaService.prototype.checkIfResultsAreRight = function () {
        var allFormulas = this.jsonBuilderHelper.getJSONBuilt().formula;
        var errorResultList = '';
        for (var formula in allFormulas) {
            var rawFormula = allFormulas[formula].result;
            for (var i = 0; i < rawFormula.length; i++) {
                if (rawFormula[i] == 'Q') {
                    i++;
                    var currentQuesNumber = '';
                    while (!isNaN(parseInt(rawFormula[i])))
                        currentQuesNumber += rawFormula[i++];
                    var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                    if ((currentQuesObject.type == 'textfield' && (currentQuesObject.config.type == 'text' || currentQuesObject.config.type == 'email'))
                        || currentQuesObject.type == 'text-area') {
                        errorResultList += 'Result ' + (parseInt(formula) + 1) + ',';
                        break;
                    }
                }
            }
        }
        errorResultList = errorResultList.slice(0, -1);
        return errorResultList;
    };
    FormulaService.prototype.formulaFunction = function (formulaIndex) {
        var finalAnswer;
        if (!this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex]) {
            return undefined;
        }
        var formula = this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].result;
        var value = this.createFinalQuestionString(formula.replace(/\s/g, '')
            .replace(/,/g, '').replace(/x/g, '*'));
        try {
            finalAnswer = math.eval(value);
        }
        catch (e) {
            finalAnswer = 0;
        }
        if (finalAnswer == undefined)
            finalAnswer = '{R' + (parseInt(formulaIndex) + 1) + '}';
        var quesNowObject = this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex];
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
                    lower = this.addCommas(lower.toFixed(Number(quesNowObject.decimal)));
                    upper = this.addCommas(upper.toFixed(Number(quesNowObject.decimal)));
                    finalAnswer = lower + ' to ' + upper;
                }
                else if (quesNowObject.range.higher.type == 'Percentage' && quesNowObject.range.lower.type == 'Percentage') {
                    lower = (parseFloat(finalAnswer) - (lowerVal / 100) * (parseFloat(finalAnswer)));
                    upper = (parseFloat(finalAnswer) + (upperVal / 100) * (parseFloat(finalAnswer)));
                    if (isNaN(upperVal))
                        upper = parseFloat(finalAnswer);
                    if (isNaN(lowerVal))
                        lower = parseFloat(finalAnswer);
                    lower = this.addCommas(lower.toFixed(Number(quesNowObject.decimal)));
                    upper = this.addCommas(upper.toFixed(Number(quesNowObject.decimal)));
                    finalAnswer = lower + ' to ' + upper;
                }
            }
        }
        else {
            if (isNaN(parseFloat(finalAnswer))) {
                if (finalAnswer == undefined)
                    finalAnswer = 0;
            }
            else {
                finalAnswer = Number(finalAnswer);
                finalAnswer = this.addCommas(finalAnswer.toFixed(Number(quesNowObject.decimal)));
                if (quesNowObject.units.postfix) {
                    finalAnswer = finalAnswer + quesNowObject.units.postValue;
                }
                if (quesNowObject.units.prefix) {
                    finalAnswer = quesNowObject.units.preValue + finalAnswer;
                }
            }
        }
        if (this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].value != finalAnswer) {
            this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].value = finalAnswer;
            if (this._analysisService.getVisitorKey() && this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
                if (this.sub)
                    this.sub.unsubscribe();
                this.sub = this._analysisService.saveResult(this.jsonBuilderHelper.getJSONBuilt()._id, this.jsonBuilderHelper.getJSONBuilt().formula)
                    .subscribe(function (response) {
                }, function (error) {
                    console.log(error);
                });
            }
        }
        this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].value = finalAnswer;
        if (isNaN(parseFloat(lower)) && isNaN(parseFloat(upper))) { }
        else {
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
        return finalAnswer;
    };
    FormulaService.prototype.createFinalQuestionString = function (genericQuestion) {
        var currentQuesNumber, j;
        for (var i = 0; i < genericQuestion.length; i++) {
            if (genericQuestion[i] == 'Q') {
                j = ++i;
                currentQuesNumber = '';
                while (!isNaN(parseInt(genericQuestion[i])))
                    currentQuesNumber += genericQuestion[i++];
                genericQuestion = genericQuestion.substring(0, j - 1) +
                    this.getValueOfQuestionNumber(currentQuesNumber) +
                    genericQuestion.substring(i);
                i = j - 1 + this.getValueOfQuestionNumber(currentQuesNumber).toString().length;
            }
        }
        return genericQuestion;
    };
    FormulaService.prototype.getValueOfQuestionNumber = function (quesNumber) {
        this.jsonBuilderHelper.updateTemplateQuestionare();
        var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[quesNumber - 1];
        if (currentQuesObject) {
            var currentValue = parseFloat(currentQuesObject.props.currentValue);
            if (isNaN(currentValue) || currentValue == null || currentValue == undefined)
                currentValue = 0;
            return currentValue;
        }
        else {
            return 0;
        }
    };
    FormulaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, analytic_service_1.AnalyticService])
    ], FormulaService);
    return FormulaService;
}());
exports.FormulaService = FormulaService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL3NlcnZpY2VzL2Zvcm11bGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLG9DQUE0Qiw2Q0FBNkMsQ0FBQyxDQUFBO0FBQzFFLGlDQUFnQywyQ0FBMkMsQ0FBQyxDQUFBO0FBSzVFO0lBRUMsd0JBQW9CLGlCQUE4QixFQUFVLGdCQUFpQztRQUF6RSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO0lBQUksQ0FBQztJQUUzRixrQ0FBUyxHQUFoQixVQUFpQixJQUFTO1FBQ3pCLElBQUksSUFBSSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksRUFBRSxHQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLEVBQUUsR0FBUSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3QyxJQUFJLEdBQUcsR0FBRyxjQUFjLENBQUM7UUFDekIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDckIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxtQ0FBVSxHQUFqQixVQUFrQixVQUFlO1FBQ2hDLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUMsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQzNCLEdBQUcs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R0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxZQUFZLElBQUksSUFBSSxJQUFJLFlBQVksSUFBSSxTQUFTLENBQUM7Z0JBQzVFLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1YsQ0FBQztJQUVGLENBQUM7SUF6WUY7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQTRZYixxQkFBQztBQUFELENBM1lBLEFBMllDLElBQUE7QUEzWVksc0JBQWMsaUJBMlkxQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL3NlcnZpY2VzL2Zvcm11bGEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8rYnVpbGRlci9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQW5hbHl0aWNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGVtcGxhdGVzL3NlcnZpY2VzL2FuYWx5dGljLnNlcnZpY2UnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgbWF0aDogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm9ybXVsYVNlcnZpY2Uge1xyXG5cdHByaXZhdGUgc3ViOiBhbnk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIsIHByaXZhdGUgX2FuYWx5c2lzU2VydmljZTogQW5hbHl0aWNTZXJ2aWNlKSB7IH1cclxuXHJcblx0cHVibGljIGFkZENvbW1hcyhuU3RyOiBhbnkpIHtcclxuXHRcdG5TdHIgKz0gJyc7XHJcblx0XHRsZXQgeDogYW55ID0gblN0ci5zcGxpdCgnLicpO1xyXG5cdFx0bGV0IHgxOiBhbnkgPSB4WzBdO1xyXG5cdFx0bGV0IHgyOiBhbnkgPSB4Lmxlbmd0aCA+IDEgPyAnLicgKyB4WzFdIDogJyc7XHJcblx0XHR2YXIgcmd4ID0gLyhcXGQrKShcXGR7M30pLztcclxuXHRcdHdoaWxlIChyZ3gudGVzdCh4MSkpIHtcclxuXHRcdFx0eDEgPSB4MS5yZXBsYWNlKHJneCwgJyQxJyArICcsJyArICckMicpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHgxICsgeDI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdGV4dFBhcnNlcihub3JtYWxUZXh0OiBhbnkpIHtcclxuXHRcdHZhciBmaW5kZXIgPSBub3JtYWxUZXh0Lm1hdGNoKC9cXHsoLio/KVxcfS9nKTtcclxuXHRcdHZhciBmaW5hbFRleHQgPSBub3JtYWxUZXh0O1xyXG5cdFx0Zm9yICh2YXIgYSBpbiBmaW5kZXIpIHtcclxuXHRcdFx0aWYgKGZpbmFsVGV4dCAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHR2YXIgdmFsID0gZmluYWxUZXh0LmluZGV4T2YoZmluZGVyW2FdKTtcclxuXHRcdFx0XHRpZiAoZmluZGVyW2FdWzFdID09ICdRJykge1xyXG5cdFx0XHRcdFx0dmFyIHF1ZXNOdW1iZXIgPSBmaW5kZXJbYV0uc3Vic3RyaW5nKDIsIGZpbmRlclthXS5sZW5ndGggLSAxKTtcclxuXHRcdFx0XHRcdGlmICghaXNOYU4ocXVlc051bWJlcikpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGN1cnJlbnRRdWVzID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRUZW1wbGF0ZVF1ZXN0aW9uYXJlV2l0aEVtaXR0ZWRMZWFkRm9ybVF1ZXN0aW9uKClbcXVlc051bWJlciAtIDFdO1xyXG5cdFx0XHRcdFx0XHR2YXIgcXVlc3Rpb25MYWJlbDogYW55ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudFF1ZXMgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0cXVlc3Rpb25MYWJlbCA9IFwiUXVlc3Rpb24gXCIgKyBxdWVzTnVtYmVyO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50UXVlcy5wcm9wcy5jdXJyZW50TGFiZWwgIT0gJycgJiYgY3VycmVudFF1ZXMucHJvcHMuY3VycmVudExhYmVsICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdFx0XHRcdHF1ZXN0aW9uTGFiZWwgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmVXaXRoRW1pdHRlZExlYWRGb3JtUXVlc3Rpb24oKVtxdWVzTnVtYmVyIC0gMV0ucHJvcHMuY3VycmVudExhYmVsO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmIChxdWVzdGlvbkxhYmVsICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdFx0XHRmaW5hbFRleHQgPSBmaW5hbFRleHQuc3Vic3RyaW5nKDAsIHZhbCkgKyBxdWVzdGlvbkxhYmVsICsgZmluYWxUZXh0LnN1YnN0cmluZyh2YWwgKyBmaW5kZXJbYV0ubGVuZ3RoKTtcclxuXHRcdFx0XHRcdFx0ZWxzZSBmaW5hbFRleHQgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChmaW5kZXJbYV1bMV0gPT0gJ1InKSB7XHJcblx0XHRcdFx0XHR2YXIgcmVzdWx0TnVtYmVyID0gZmluZGVyW2FdLnN1YnN0cmluZygyLCBmaW5kZXJbYV0ubGVuZ3RoIC0gMSk7XHJcblx0XHRcdFx0XHRpZiAoIWlzTmFOKHJlc3VsdE51bWJlcikpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGZpbmFsUmVzdWx0VmFsdWUgPSB0aGlzLmZvcm11bGFGdW5jdGlvbihyZXN1bHROdW1iZXIgLSAxKTtcclxuXHRcdFx0XHRcdFx0aWYgKGZpbmFsUmVzdWx0VmFsdWUgIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0XHRcdGZpbmFsVGV4dCA9IGZpbmFsVGV4dC5zdWJzdHJpbmcoMCwgdmFsKSArIGZpbmFsUmVzdWx0VmFsdWUgKyBmaW5hbFRleHQuc3Vic3RyaW5nKHZhbCArIGZpbmRlclthXS5sZW5ndGgpO1xyXG5cdFx0XHRcdFx0XHRlbHNlIGZpbmFsVGV4dCA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgbGVhZGZvcm1JdGVtOiBhbnkgPSB0aGlzLmdldEZpcnN0TGVhZEZvcm0oKTtcclxuXHRcdGlmIChmaW5hbFRleHQgJiYgbGVhZGZvcm1JdGVtKSB7XHJcblx0XHRcdGZpbmFsVGV4dCA9IGZpbmFsVGV4dC5yZXBsYWNlKC8oe25hbWV9fHtlbWFpbH18e3RlbH18e290aGVyc30pL2csIChtYXRjaDogYW55KSA9PiB7XHJcblx0XHRcdFx0bGV0IGZpZWxkTWF0Y2hlZCA9IG1hdGNoLnNwbGl0KC9be31dLylbMV07XHJcblx0XHRcdFx0Zm9yIChsZXQgZmllbGQgaW4gbGVhZGZvcm1JdGVtLmZpZWxkcykge1xyXG5cdFx0XHRcdFx0bGV0IHR5cGUgPSAobGVhZGZvcm1JdGVtLmZpZWxkc1tmaWVsZF0udHlwZSA9PSBcImxhc3ROYW1lXCIpID9cclxuXHRcdFx0XHRcdFx0XCJvdGhlcnNcIiA6IChsZWFkZm9ybUl0ZW0uZmllbGRzW2ZpZWxkXS50eXBlID09ICdmaXJzdE5hbWUnKSA/IFwibmFtZVwiIDogbGVhZGZvcm1JdGVtLmZpZWxkc1tmaWVsZF0udHlwZTtcclxuXHRcdFx0XHRcdGlmICh0eXBlID09IGZpZWxkTWF0Y2hlZClcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGxlYWRmb3JtSXRlbS5maWVsZHNbZmllbGRdLnZhbHVlIHx8IG1hdGNoO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGZpbmFsVGV4dCA9PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBub3JtYWxUZXh0O1xyXG5cdFx0cmV0dXJuIGZpbmFsVGV4dDtcclxuXHR9XHJcblx0Ly9cdHd5c2l3aWcgTGlzdCAtLVN0YXJ0XHJcblx0cHVibGljIGdldEZpcnN0TGVhZEZvcm0oKSB7XHJcblx0XHRsZXQgbGVhZGZvcm1JdGVtOiBhbnkgPSB1bmRlZmluZWQ7XHJcblx0XHRmb3IgKHZhciBwYWdlIG9mIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXMpIHtcclxuXHRcdFx0aWYgKHBhZ2UudHlwZSA9PT0gJ0xhbmRpbmcnKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgc2VjdGlvbiBvZiBwYWdlLnNlY3Rpb25zKSB7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBpdGVtIG9mIHNlY3Rpb24uaXRlbXMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGl0ZW0udHlwZSA9PSAnbGVhZGZvcm0nICYmIGl0ZW0udmlzaWJsZSA9PSB0cnVlKSB7XHJcblx0XHRcdFx0XHRcdFx0bGVhZGZvcm1JdGVtID0gaXRlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCFsZWFkZm9ybUl0ZW0pIHtcclxuXHRcdFx0dGhpcy5qc29uQnVpbGRlckhlbHBlci51cGRhdGVUZW1wbGF0ZVF1ZXN0aW9uYXJlKCk7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRUZW1wbGF0ZVF1ZXN0aW9uYXJlKCkubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRUZW1wbGF0ZVF1ZXN0aW9uYXJlKClbaV0udHlwZSA9PSAnbGVhZGZvcm1fcXVlc3Rpb24nICYmXHJcblx0XHRcdFx0XHR0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmUoKVtpXS52aXNpYmxlID09IHRydWUpIHtcclxuXHRcdFx0XHRcdGxlYWRmb3JtSXRlbSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZSgpW2ldO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbGVhZGZvcm1JdGVtO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFsbFZhbGlkVmFyaWFibGVzKCkge1xyXG5cdFx0bGV0IGFsbFZhcmlhYmxlczogYW55ID0gW107XHJcblx0XHR2YXIgaTogbnVtYmVyO1xyXG5cdFx0bGV0IGxlYWRmb3JtSXRlbTogYW55ID0gdGhpcy5nZXRGaXJzdExlYWRGb3JtKCk7XHJcblx0XHRpZiAobGVhZGZvcm1JdGVtKSB7XHJcblx0XHRcdGFsbFZhcmlhYmxlcy5wdXNoKCcnKTtcclxuXHRcdFx0Zm9yIChsZXQgZmllbGQgaW4gbGVhZGZvcm1JdGVtLmZpZWxkcykge1xyXG5cdFx0XHRcdGxldCB0eXBlID0gKGxlYWRmb3JtSXRlbS5maWVsZHNbZmllbGRdLnR5cGUgPT0gXCJsYXN0TmFtZVwiKSA/XHJcblx0XHRcdFx0XHRcIm90aGVyc1wiIDogKGxlYWRmb3JtSXRlbS5maWVsZHNbZmllbGRdLnR5cGUgPT0gJ2ZpcnN0TmFtZScpID8gXCJuYW1lXCIgOiBsZWFkZm9ybUl0ZW0uZmllbGRzW2ZpZWxkXS50eXBlO1xyXG5cdFx0XHRcdGFsbFZhcmlhYmxlcy5wdXNoKCd7JyArIHR5cGUgKyAnfScpO1xyXG5cdFx0XHRcdC8vIGFsbFZhcmlhYmxlcy5wdXNoKCd7TCcgKyAocGFyc2VJbnQoZmllbGQpICsgMSkgKyAnfScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGRlYnVnZ2VyO1xyXG5cdFx0fVxyXG5cdFx0YWxsVmFyaWFibGVzLnB1c2goJyAnKTtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmVXaXRoRW1pdHRlZExlYWRGb3JtUXVlc3Rpb24oKS5sZW5ndGg7IGkrKylcclxuXHRcdFx0YWxsVmFyaWFibGVzLnB1c2goJ3tRJyArIChpICsgMSkgKyAnfScpO1xyXG5cdFx0YWxsVmFyaWFibGVzLnB1c2goJyAgICcpO1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYS5sZW5ndGg7IGkrKylcclxuXHRcdFx0YWxsVmFyaWFibGVzLnB1c2goJ3tSJyArIChpICsgMSkgKyAnfScpO1xyXG5cclxuXHRcdHJldHVybiBhbGxWYXJpYWJsZXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWxsVmFsaWRWYXJpYWJsZXNXeXNpeXdpZ0xpc3QoKSB7XHJcblx0XHRsZXQgYWxsVmFyaWFibGVzOiBhbnkgPSBbXTtcclxuXHRcdHZhciBpOiBudW1iZXI7XHJcblx0XHRsZXQgbGVhZGZvcm1JdGVtOiBhbnkgPSB0aGlzLmdldEZpcnN0TGVhZEZvcm0oKTtcclxuXHRcdGlmIChsZWFkZm9ybUl0ZW0pIHtcclxuXHRcdFx0YWxsVmFyaWFibGVzLnB1c2goJ0xlYWREZXRhaWxzOicpO1xyXG5cdFx0XHRmb3IgKGxldCBmaWVsZCBpbiBsZWFkZm9ybUl0ZW0uZmllbGRzKSB7XHJcblx0XHRcdFx0dmFyIHRpdGxlID0gbGVhZGZvcm1JdGVtLmZpZWxkc1tmaWVsZF0ucGxhY2Vob2xkZXI7XHJcblx0XHRcdFx0aWYgKHRpdGxlLmxlbmd0aCA+IDM1KVxyXG5cdFx0XHRcdFx0dGl0bGUgPSB0aXRsZS5zdWJzdHIoMCwgMzUpICsgXCIuLi5cIjtcclxuXHRcdFx0XHRhbGxWYXJpYWJsZXMucHVzaCh0aXRsZSArICcgOiAnICsgbGVhZGZvcm1JdGVtLmZpZWxkc1tmaWVsZF0udmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRhbGxWYXJpYWJsZXMucHVzaCgnQW5zd2VyIHRvOicpO1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZVdpdGhFbWl0dGVkTGVhZEZvcm1RdWVzdGlvbigpLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciB0aXRsZSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZVdpdGhFbWl0dGVkTGVhZEZvcm1RdWVzdGlvbigpW2ldLnByb3BzLnRpdGxlO1xyXG5cdFx0XHRpZiAodGl0bGUubGVuZ3RoID4gMzUpXHJcblx0XHRcdFx0dGl0bGUgPSB0aXRsZS5zdWJzdHIoMCwgMzUpICsgXCIuLi5cIjtcclxuXHRcdFx0YWxsVmFyaWFibGVzLnB1c2goJyAgUScgKyAoaSArIDEpICsgJzogJyArIHRpdGxlKTtcclxuXHRcdH1cclxuXHRcdGFsbFZhcmlhYmxlcy5wdXNoKCdSZXN1bHQ6Jyk7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRhbGxWYXJpYWJsZXMucHVzaCgnICBSZXN1bHQgJyArIChpICsgMSkpO1xyXG5cdFx0cmV0dXJuIGFsbFZhcmlhYmxlcztcclxuXHR9XHJcblx0Ly9cdHd5c2l3aWcgTGlzdCAtLUVuZFxyXG5cclxuXHQvLyBDaGVja2luZyBRdWVzdGlvbmFyZSBWYWxpZGl0eSBBZnRlciBDaGFuZ2VzIFRvIGJ1aWxkZXJcclxuXHRwdWJsaWMgY29ycmVjdEFsbEludmFsaWRRdWVzdGlvbnMocmF3Rm9ybXVsYTogYW55LCBmb3JtdWxhSW5kZXg6IGFueSkge1xyXG5cdFx0dmFyIGN1cnJlbnRRdWVzTnVtYmVyOiBhbnk7XHJcblx0XHRmb3IgKHZhciBpOiBhbnkgPSAwOyBpIDwgcmF3Rm9ybXVsYS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAocmF3Rm9ybXVsYVtpXSA9PSAnUScpIHtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdFx0Y3VycmVudFF1ZXNOdW1iZXIgPSAnJztcclxuXHRcdFx0XHR3aGlsZSAoIWlzTmFOKHBhcnNlSW50KHJhd0Zvcm11bGFbaV0pKSkgY3VycmVudFF1ZXNOdW1iZXIgKz0gcmF3Rm9ybXVsYVtpKytdO1xyXG5cdFx0XHRcdHZhciBjdXJyZW50UXVlc09iamVjdDogYW55ID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRUZW1wbGF0ZVF1ZXN0aW9uYXJlV2l0aEVtaXR0ZWRMZWFkRm9ybVF1ZXN0aW9uKClbY3VycmVudFF1ZXNOdW1iZXIgLSAxXTtcclxuXHRcdFx0XHQvL2ZvciBtYXJraW5nIGFzIG1hbmRhdG9yeVxyXG5cdFx0XHRcdGlmIChjdXJyZW50UXVlc09iamVjdCAmJiAoY3VycmVudFF1ZXNPYmplY3QudHlwZSA9PSAnc3dpdGNoYm94JyB8fCBjdXJyZW50UXVlc09iamVjdC50eXBlID09ICdyYWRpb19idXR0b24nIHx8XHJcblx0XHRcdFx0XHRjdXJyZW50UXVlc09iamVjdC50eXBlID09ICdzZWxlY3Rib3gnIHx8IGN1cnJlbnRRdWVzT2JqZWN0LnR5cGUgPT0gJ2NoZWNrYm94JykpIHtcclxuXHRcdFx0XHRcdGlmICghY3VycmVudFF1ZXNPYmplY3QuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cylcclxuXHRcdFx0XHRcdFx0Y3VycmVudFF1ZXNPYmplY3QuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cyA9IHRydWU7XHJcblx0XHRcdFx0XHRsZXQgaXNBbnlEZWZhdWx0U2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBpbiBjdXJyZW50UXVlc09iamVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50UXVlc09iamVjdC5vcHRpb25zW29wdGlvbl0uZGVmdWFsdHNlbGVjdGVkID09IHRydWUpXHJcblx0XHRcdFx0XHRcdFx0aXNBbnlEZWZhdWx0U2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICghaXNBbnlEZWZhdWx0U2VsZWN0ZWQpIHtcclxuXHRcdFx0XHRcdFx0Y3VycmVudFF1ZXNPYmplY3Qub3B0aW9uc1swXS5kZWZ1YWx0c2VsZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRjdXJyZW50UXVlc09iamVjdC5vcHRpb25zWzBdLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIHJldHVybiBlcnJvclF1ZXN0aW9uU3RyaW5nO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZUZvcm11bGFWYWxpZGl0eShyYXdGb3JtdWxhOiBhbnksIGZvcm11bGFJbmRleDogYW55KSB7XHJcblx0XHR2YXIgY3VycmVudFF1ZXNOdW1iZXI6IGFueTtcclxuXHRcdHZhciBpc1ZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuXHRcdGZvciAodmFyIGk6IGFueSA9IDA7IGkgPCByYXdGb3JtdWxhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChyYXdGb3JtdWxhW2ldID09ICdRJykge1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0XHRjdXJyZW50UXVlc051bWJlciA9ICcnO1xyXG5cdFx0XHRcdHdoaWxlICghaXNOYU4ocGFyc2VJbnQocmF3Rm9ybXVsYVtpXSkpKSBjdXJyZW50UXVlc051bWJlciArPSByYXdGb3JtdWxhW2krK107XHJcblx0XHRcdFx0dmFyIGN1cnJlbnRRdWVzT2JqZWN0OiBhbnkgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmVXaXRoRW1pdHRlZExlYWRGb3JtUXVlc3Rpb24oKVtjdXJyZW50UXVlc051bWJlciAtIDFdO1xyXG5cdFx0XHRcdGlmIChjdXJyZW50UXVlc09iamVjdCkge1xyXG5cdFx0XHRcdFx0aWYgKChjdXJyZW50UXVlc09iamVjdC50eXBlID09ICdzd2l0Y2hib3gnIHx8IGN1cnJlbnRRdWVzT2JqZWN0LnR5cGUgPT0gJ3JhZGlvX2J1dHRvbicgfHxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFF1ZXNPYmplY3QudHlwZSA9PSAnc2VsZWN0Ym94JyB8fCBjdXJyZW50UXVlc09iamVjdC50eXBlID09ICdjaGVja2JveCcpKSB7XHJcblx0XHRcdFx0XHRcdGxldCBpc0FueURlZmF1bHRTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gaW4gY3VycmVudFF1ZXNPYmplY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50UXVlc09iamVjdC5vcHRpb25zW29wdGlvbl0uZGVmdWFsdHNlbGVjdGVkID09IHRydWUpXHJcblx0XHRcdFx0XHRcdFx0XHRpc0FueURlZmF1bHRTZWxlY3RlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRRdWVzT2JqZWN0LmNvbmZpZy52YWxpZGF0aW9ucy5yZXF1aXJlZC5zdGF0dXMgfHwgaXNBbnlEZWZhdWx0U2VsZWN0ZWQpIHsgfVxyXG5cdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0aXNWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpc1ZhbGlkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYVtmb3JtdWxhSW5kZXhdLmlzVmFsaWQgPSBpc1ZhbGlkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEFsbEludmFsaWRGb3JtdWxhcygpIHtcclxuXHJcblx0XHR2YXIgYXJlQWxsRm9ybXVsYXNWYWxpZCA9IHRydWU7XHJcblx0XHR2YXIgYWxsSW52YWxpZEZvcm11bGFzOiBzdHJpbmcgPSAnJztcclxuXHRcdGZvciAobGV0IGZvcm11bGEgaW4gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhKSB7XHJcblxyXG5cdFx0XHR0aGlzLnVwZGF0ZUZvcm11bGFWYWxpZGl0eSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbZm9ybXVsYV0ucmVzdWx0LCBmb3JtdWxhKTtcclxuXHRcdFx0aWYgKCF0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbZm9ybXVsYV0uaXNWYWxpZCkge1xyXG5cdFx0XHRcdGFyZUFsbEZvcm11bGFzVmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0XHRhbGxJbnZhbGlkRm9ybXVsYXMgKz0gJ1Jlc3VsdCAnICsgKHBhcnNlSW50KGZvcm11bGEpICsgMSkgKyAnLCc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChhcmVBbGxGb3JtdWxhc1ZhbGlkKSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGFsbEludmFsaWRGb3JtdWxhcyA9IGFsbEludmFsaWRGb3JtdWxhcy5zbGljZSgwLCAtMSk7XHJcblx0XHRcdHJldHVybiBhbGxJbnZhbGlkRm9ybXVsYXM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hlY2tJZkZvcm11bGFXb3VsZEdpdmVTeW50YXhFcnJvcigpIHtcclxuXHRcdGxldCBhbGxGb3JtdWxhcyA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZm9ybXVsYTtcclxuXHRcdGxldCBlcnJvclJlc3VsdExpc3Q6IHN0cmluZyA9ICcnO1xyXG5cdFx0Zm9yIChsZXQgZm9ybXVsYSBpbiBhbGxGb3JtdWxhcykge1xyXG5cdFx0XHRsZXQgcmF3Rm9ybXVsYSA9IGFsbEZvcm11bGFzW2Zvcm11bGFdLnJlc3VsdDtcclxuXHRcdFx0Zm9yICh2YXIgaTogYW55ID0gMDsgaSA8IHJhd0Zvcm11bGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAocmF3Rm9ybXVsYVtpXSA9PSAnUScpIHtcclxuXHRcdFx0XHRcdGkrKztcclxuXHRcdFx0XHRcdHZhciBjdXJyZW50UXVlc051bWJlcjogYW55ID0gJyc7XHJcblx0XHRcdFx0XHR3aGlsZSAoIWlzTmFOKHBhcnNlSW50KHJhd0Zvcm11bGFbaV0pKSkgY3VycmVudFF1ZXNOdW1iZXIgKz0gcmF3Rm9ybXVsYVtpKytdO1xyXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRRdWVzT2JqZWN0OiBhbnkgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmVXaXRoRW1pdHRlZExlYWRGb3JtUXVlc3Rpb24oKVtjdXJyZW50UXVlc051bWJlciAtIDFdO1xyXG5cdFx0XHRcdFx0aWYgKCFjdXJyZW50UXVlc09iamVjdCB8fCAoKGN1cnJlbnRRdWVzT2JqZWN0LnR5cGUgPT0gJ3RleHRmaWVsZCcgJiYgKGN1cnJlbnRRdWVzT2JqZWN0LmNvbmZpZy50eXBlID09ICd0ZXh0JyB8fCBjdXJyZW50UXVlc09iamVjdC5jb25maWcudHlwZSA9PSAnZW1haWwnKSlcclxuXHRcdFx0XHRcdFx0fHwgY3VycmVudFF1ZXNPYmplY3QudHlwZSA9PSAndGV4dC1hcmVhJykpIHtcclxuXHRcdFx0XHRcdFx0ZXJyb3JSZXN1bHRMaXN0ICs9ICdSZXN1bHQgJyArIChwYXJzZUludChmb3JtdWxhKSArIDEpICsgJywnO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVycm9yUmVzdWx0TGlzdCA9IGVycm9yUmVzdWx0TGlzdC5zbGljZSgwLCAtMSk7XHJcblx0XHRyZXR1cm4gZXJyb3JSZXN1bHRMaXN0O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrSWZSZXN1bHRzQXJlUmlnaHQoKSB7XHJcblx0XHRsZXQgYWxsRm9ybXVsYXMgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGE7XHJcblx0XHRsZXQgZXJyb3JSZXN1bHRMaXN0OiBzdHJpbmcgPSAnJztcclxuXHRcdGZvciAobGV0IGZvcm11bGEgaW4gYWxsRm9ybXVsYXMpIHtcclxuXHRcdFx0bGV0IHJhd0Zvcm11bGEgPSBhbGxGb3JtdWxhc1tmb3JtdWxhXS5yZXN1bHQ7XHJcblx0XHRcdGZvciAodmFyIGk6IGFueSA9IDA7IGkgPCByYXdGb3JtdWxhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKHJhd0Zvcm11bGFbaV0gPT0gJ1EnKSB7XHJcblx0XHRcdFx0XHRpKys7XHJcblx0XHRcdFx0XHR2YXIgY3VycmVudFF1ZXNOdW1iZXI6IGFueSA9ICcnO1xyXG5cdFx0XHRcdFx0d2hpbGUgKCFpc05hTihwYXJzZUludChyYXdGb3JtdWxhW2ldKSkpIGN1cnJlbnRRdWVzTnVtYmVyICs9IHJhd0Zvcm11bGFbaSsrXTtcclxuXHRcdFx0XHRcdHZhciBjdXJyZW50UXVlc09iamVjdDogYW55ID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRUZW1wbGF0ZVF1ZXN0aW9uYXJlV2l0aEVtaXR0ZWRMZWFkRm9ybVF1ZXN0aW9uKClbY3VycmVudFF1ZXNOdW1iZXIgLSAxXTtcclxuXHRcdFx0XHRcdGlmICgoY3VycmVudFF1ZXNPYmplY3QudHlwZSA9PSAndGV4dGZpZWxkJyAmJiAoY3VycmVudFF1ZXNPYmplY3QuY29uZmlnLnR5cGUgPT0gJ3RleHQnIHx8IGN1cnJlbnRRdWVzT2JqZWN0LmNvbmZpZy50eXBlID09ICdlbWFpbCcpKVxyXG5cdFx0XHRcdFx0XHR8fCBjdXJyZW50UXVlc09iamVjdC50eXBlID09ICd0ZXh0LWFyZWEnKSB7XHJcblx0XHRcdFx0XHRcdGVycm9yUmVzdWx0TGlzdCArPSAnUmVzdWx0ICcgKyAocGFyc2VJbnQoZm9ybXVsYSkgKyAxKSArICcsJztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlcnJvclJlc3VsdExpc3QgPSBlcnJvclJlc3VsdExpc3Quc2xpY2UoMCwgLTEpO1xyXG5cdFx0cmV0dXJuIGVycm9yUmVzdWx0TGlzdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBmb3JtdWxhRnVuY3Rpb24oZm9ybXVsYUluZGV4OiBhbnkpIHtcclxuXHRcdGxldCBmaW5hbEFuc3dlcjogYW55O1xyXG5cdFx0aWYgKCF0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbZm9ybXVsYUluZGV4XSkge1xyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGZvcm11bGEgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbZm9ybXVsYUluZGV4XS5yZXN1bHQ7XHJcblx0XHRsZXQgdmFsdWUgPSB0aGlzLmNyZWF0ZUZpbmFsUXVlc3Rpb25TdHJpbmcoZm9ybXVsYS5yZXBsYWNlKC9cXHMvZywgJycpXHJcblx0XHRcdC5yZXBsYWNlKC8sL2csICcnKS5yZXBsYWNlKC94L2csICcqJykpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0ZmluYWxBbnN3ZXIgPSBtYXRoLmV2YWwodmFsdWUpO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRmaW5hbEFuc3dlciA9IDA7XHJcblx0XHR9XHJcblx0XHRpZiAoZmluYWxBbnN3ZXIgPT0gdW5kZWZpbmVkKSBmaW5hbEFuc3dlciA9ICd7UicgKyAocGFyc2VJbnQoZm9ybXVsYUluZGV4KSArIDEpICsgJ30nO1xyXG5cclxuXHRcdHZhciBxdWVzTm93T2JqZWN0ID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhW2Zvcm11bGFJbmRleF07XHJcblxyXG5cdFx0dmFyIGxvd2VyOiBhbnksIHVwcGVyOiBhbnk7XHJcblx0XHRpZiAocXVlc05vd09iamVjdC5yYW5nZS5zdGF0dXMpIHtcclxuXHRcdFx0dmFyIGxvd2VyVmFsID0gcGFyc2VGbG9hdChxdWVzTm93T2JqZWN0LnJhbmdlLmxvd2VyLnZhbHVlKTtcclxuXHRcdFx0dmFyIHVwcGVyVmFsID0gcGFyc2VGbG9hdChxdWVzTm93T2JqZWN0LnJhbmdlLmhpZ2hlci52YWx1ZSk7XHJcblx0XHRcdGlmIChpc05hTihsb3dlclZhbCkpIGxvd2VyVmFsID0gMDtcclxuXHRcdFx0aWYgKGlzTmFOKHVwcGVyVmFsKSkgdXBwZXJWYWwgPSAwO1xyXG5cdFx0XHRpZiAoaXNOYU4ocGFyc2VGbG9hdChmaW5hbEFuc3dlcikpKSB7XHJcblx0XHRcdFx0ZmluYWxBbnN3ZXIgPSAwO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChxdWVzTm93T2JqZWN0LnJhbmdlLmhpZ2hlci50eXBlID09ICdOdW1iZXInICYmIHF1ZXNOb3dPYmplY3QucmFuZ2UubG93ZXIudHlwZSA9PSAnTnVtYmVyJykge1xyXG5cdFx0XHRcdFx0bG93ZXIgPSAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikgLSBsb3dlclZhbCk7XHJcblx0XHRcdFx0XHR1cHBlciA9IChwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKSArIHVwcGVyVmFsKTtcclxuXHRcdFx0XHRcdGxvd2VyID0gdGhpcy5hZGRDb21tYXMobG93ZXIudG9GaXhlZChOdW1iZXIocXVlc05vd09iamVjdC5kZWNpbWFsKSkpO1xyXG5cdFx0XHRcdFx0dXBwZXIgPSB0aGlzLmFkZENvbW1hcyh1cHBlci50b0ZpeGVkKE51bWJlcihxdWVzTm93T2JqZWN0LmRlY2ltYWwpKSk7XHJcblx0XHRcdFx0XHRmaW5hbEFuc3dlciA9IGxvd2VyICsgJyB0byAnICsgdXBwZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHF1ZXNOb3dPYmplY3QucmFuZ2UuaGlnaGVyLnR5cGUgPT0gJ1BlcmNlbnRhZ2UnICYmIHF1ZXNOb3dPYmplY3QucmFuZ2UubG93ZXIudHlwZSA9PSAnUGVyY2VudGFnZScpIHtcclxuXHRcdFx0XHRcdGxvd2VyID0gKHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpIC0gKGxvd2VyVmFsIC8gMTAwKSAqIChwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKSkpO1xyXG5cdFx0XHRcdFx0dXBwZXIgPSAocGFyc2VGbG9hdChmaW5hbEFuc3dlcikgKyAodXBwZXJWYWwgLyAxMDApICogKHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpKSk7XHJcblx0XHRcdFx0XHRpZiAoaXNOYU4odXBwZXJWYWwpKVxyXG5cdFx0XHRcdFx0XHR1cHBlciA9IHBhcnNlRmxvYXQoZmluYWxBbnN3ZXIpO1xyXG5cdFx0XHRcdFx0aWYgKGlzTmFOKGxvd2VyVmFsKSlcclxuXHRcdFx0XHRcdFx0bG93ZXIgPSBwYXJzZUZsb2F0KGZpbmFsQW5zd2VyKTtcclxuXHRcdFx0XHRcdGxvd2VyID0gdGhpcy5hZGRDb21tYXMobG93ZXIudG9GaXhlZChOdW1iZXIocXVlc05vd09iamVjdC5kZWNpbWFsKSkpO1xyXG5cdFx0XHRcdFx0dXBwZXIgPSB0aGlzLmFkZENvbW1hcyh1cHBlci50b0ZpeGVkKE51bWJlcihxdWVzTm93T2JqZWN0LmRlY2ltYWwpKSk7XHJcblx0XHRcdFx0XHRmaW5hbEFuc3dlciA9IGxvd2VyICsgJyB0byAnICsgdXBwZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoaXNOYU4ocGFyc2VGbG9hdChmaW5hbEFuc3dlcikpKSB7XHJcblx0XHRcdFx0aWYgKGZpbmFsQW5zd2VyID09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGZpbmFsQW5zd2VyID0gMDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRmaW5hbEFuc3dlciA9IE51bWJlcihmaW5hbEFuc3dlcik7XHJcblx0XHRcdFx0ZmluYWxBbnN3ZXIgPSB0aGlzLmFkZENvbW1hcyhmaW5hbEFuc3dlci50b0ZpeGVkKE51bWJlcihxdWVzTm93T2JqZWN0LmRlY2ltYWwpKSk7XHJcblx0XHRcdFx0aWYgKHF1ZXNOb3dPYmplY3QudW5pdHMucG9zdGZpeCkge1xyXG5cdFx0XHRcdFx0ZmluYWxBbnN3ZXIgPSBmaW5hbEFuc3dlciArIHF1ZXNOb3dPYmplY3QudW5pdHMucG9zdFZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAocXVlc05vd09iamVjdC51bml0cy5wcmVmaXgpIHtcclxuXHRcdFx0XHRcdGZpbmFsQW5zd2VyID0gcXVlc05vd09iamVjdC51bml0cy5wcmVWYWx1ZSArIGZpbmFsQW5zd2VyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbZm9ybXVsYUluZGV4XS52YWx1ZSAhPSBmaW5hbEFuc3dlcikge1xyXG5cdFx0XHR0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGFbZm9ybXVsYUluZGV4XS52YWx1ZSA9IGZpbmFsQW5zd2VyO1xyXG5cdFx0XHRpZiAodGhpcy5fYW5hbHlzaXNTZXJ2aWNlLmdldFZpc2l0b3JLZXkoKSAmJiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnN0YXR1cyA9PSAnTElWRScpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5zdWIpXHJcblx0XHRcdFx0XHR0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG5cclxuXHRcdFx0XHR0aGlzLnN1YiA9IHRoaXMuX2FuYWx5c2lzU2VydmljZS5zYXZlUmVzdWx0KHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGEpXHJcblx0XHRcdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0KHJlc3BvbnNlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQoZXJyb3I6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhW2Zvcm11bGFJbmRleF0udmFsdWUgPSBmaW5hbEFuc3dlcjtcclxuXHJcblx0XHRpZiAoaXNOYU4ocGFyc2VGbG9hdChsb3dlcikpICYmIGlzTmFOKHBhcnNlRmxvYXQodXBwZXIpKSkgeyB9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKHF1ZXNOb3dPYmplY3QudW5pdHMucG9zdGZpeCkge1xyXG5cdFx0XHRcdGxvd2VyID0gbG93ZXIgKyBxdWVzTm93T2JqZWN0LnVuaXRzLnBvc3RWYWx1ZTtcclxuXHRcdFx0XHR1cHBlciA9IHVwcGVyICsgcXVlc05vd09iamVjdC51bml0cy5wb3N0VmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHF1ZXNOb3dPYmplY3QudW5pdHMucHJlZml4KSB7XHJcblx0XHRcdFx0bG93ZXIgPSBxdWVzTm93T2JqZWN0LnVuaXRzLnByZVZhbHVlICsgbG93ZXI7XHJcblx0XHRcdFx0dXBwZXIgPSBxdWVzTm93T2JqZWN0LnVuaXRzLnByZVZhbHVlICsgdXBwZXI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZpbmFsQW5zd2VyID0gbG93ZXIgKyAnIHRvICcgKyB1cHBlcjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmluYWxBbnN3ZXI7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUZpbmFsUXVlc3Rpb25TdHJpbmcoZ2VuZXJpY1F1ZXN0aW9uOiBhbnkpIHtcclxuXHRcdHZhciBjdXJyZW50UXVlc051bWJlcjogYW55LCBqOiBhbnk7XHJcblx0XHRmb3IgKHZhciBpOiBhbnkgPSAwOyBpIDwgZ2VuZXJpY1F1ZXN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChnZW5lcmljUXVlc3Rpb25baV0gPT0gJ1EnKSB7XHJcblx0XHRcdFx0aiA9ICsraTtcclxuXHRcdFx0XHRjdXJyZW50UXVlc051bWJlciA9ICcnO1xyXG5cdFx0XHRcdHdoaWxlICghaXNOYU4ocGFyc2VJbnQoZ2VuZXJpY1F1ZXN0aW9uW2ldKSkpXHJcblx0XHRcdFx0XHRjdXJyZW50UXVlc051bWJlciArPSBnZW5lcmljUXVlc3Rpb25baSsrXTtcclxuXHRcdFx0XHRnZW5lcmljUXVlc3Rpb24gPSBnZW5lcmljUXVlc3Rpb24uc3Vic3RyaW5nKDAsIGogLSAxKSArXHJcblx0XHRcdFx0XHR0aGlzLmdldFZhbHVlT2ZRdWVzdGlvbk51bWJlcihjdXJyZW50UXVlc051bWJlcikgK1xyXG5cdFx0XHRcdFx0Z2VuZXJpY1F1ZXN0aW9uLnN1YnN0cmluZyhpKTtcclxuXHRcdFx0XHRpID0gaiAtIDEgKyB0aGlzLmdldFZhbHVlT2ZRdWVzdGlvbk51bWJlcihjdXJyZW50UXVlc051bWJlcikudG9TdHJpbmcoKS5sZW5ndGg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBnZW5lcmljUXVlc3Rpb247XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldFZhbHVlT2ZRdWVzdGlvbk51bWJlcihxdWVzTnVtYmVyOiBhbnkpIHtcclxuXHJcblx0XHR0aGlzLmpzb25CdWlsZGVySGVscGVyLnVwZGF0ZVRlbXBsYXRlUXVlc3Rpb25hcmUoKTtcclxuXHRcdGxldCBjdXJyZW50UXVlc09iamVjdCA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZVdpdGhFbWl0dGVkTGVhZEZvcm1RdWVzdGlvbigpW3F1ZXNOdW1iZXIgLSAxXTtcclxuXHRcdGlmIChjdXJyZW50UXVlc09iamVjdCkge1xyXG5cdFx0XHRsZXQgY3VycmVudFZhbHVlID0gcGFyc2VGbG9hdChjdXJyZW50UXVlc09iamVjdC5wcm9wcy5jdXJyZW50VmFsdWUpO1xyXG5cdFx0XHRpZiAoaXNOYU4oY3VycmVudFZhbHVlKSB8fCBjdXJyZW50VmFsdWUgPT0gbnVsbCB8fCBjdXJyZW50VmFsdWUgPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IDA7XHJcblx0XHRcdHJldHVybiBjdXJyZW50VmFsdWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcbiJdfQ==
