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
var formula_service_1 = require('../../+builder/services/formula.service');
var FetchResult = (function () {
    function FetchResult(el, jsonBuilderHelper, formulaService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.formulaService = formulaService;
        this.ele = el.nativeElement;
    }
    FetchResult.prototype.ngDoCheck = function () {
        this.ele.innerHTML = this.formulaService.formulaFunction(this.formulaIndex);
    };
    FetchResult.prototype.ngOnInit = function () {
        this.formulaService.formulaFunction(this.formulaIndex);
    };
    __decorate([
        core_1.Input('fetch-result'), 
        __metadata('design:type', Object)
    ], FetchResult.prototype, "formulaIndex", void 0);
    FetchResult = __decorate([
        core_1.Directive({
            selector: '[fetch-result]',
            providers: [formula_service_1.FormulaService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, JSONBuilder_service_1.JSONBuilder, formula_service_1.FormulaService])
    ], FetchResult);
    return FetchResult;
}());
exports.FetchResult = FetchResult;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb21wb25lbnRzL2ZldGNoUmVzdWx0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlFLGVBQWUsQ0FBQyxDQUFBO0FBQ3pGLG9DQUE0Qiw2Q0FBNkMsQ0FBQyxDQUFBO0FBQzFFLGdDQUErQix5Q0FBeUMsQ0FBQyxDQUFBO0FBU3pFO0lBS0UscUJBQVksRUFBYyxFQUFVLGlCQUE4QixFQUFVLGNBQThCO1FBQXRFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN4RyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQWJEO1FBQUMsWUFBSyxDQUFDLGNBQWMsQ0FBQzs7cURBQUE7SUFQeEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzVCLENBQUM7O21CQUFBO0lBbUJGLGtCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSxtQkFBVyxjQWlCdkIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29tcG9uZW50cy9mZXRjaFJlc3VsdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIERvQ2hlY2ssIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtdWxhU2VydmljZSB9IGZyb20gJy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL2Zvcm11bGEuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIHZhciBtYXRoOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tmZXRjaC1yZXN1bHRdJyxcclxuICBwcm92aWRlcnM6IFtGb3JtdWxhU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGZXRjaFJlc3VsdCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XHJcblxyXG4gIEBJbnB1dCgnZmV0Y2gtcmVzdWx0JykgZm9ybXVsYUluZGV4OiBhbnk7XHJcbiAgcHJpdmF0ZSBlbGU6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIsIHByaXZhdGUgZm9ybXVsYVNlcnZpY2U6IEZvcm11bGFTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmVsZSA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSB0aGlzLmZvcm11bGFTZXJ2aWNlLmZvcm11bGFGdW5jdGlvbih0aGlzLmZvcm11bGFJbmRleCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZm9ybXVsYVNlcnZpY2UuZm9ybXVsYUZ1bmN0aW9uKHRoaXMuZm9ybXVsYUluZGV4KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
