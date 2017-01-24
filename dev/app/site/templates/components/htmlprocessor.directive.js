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
var HtmlProcessor = (function () {
    function HtmlProcessor(el, jsonBuilderHelper, formulaService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.formulaService = formulaService;
        this.ele = el.nativeElement;
    }
    HtmlProcessor.prototype.ngDoCheck = function () {
        var tempHtml = this.formulaService.textParser(this.html);
        if (this.ele.innerHTML != tempHtml) {
            this.ele.innerHTML = this.formulaService.textParser(this.html);
        }
    };
    HtmlProcessor.prototype.ngOnInit = function () {
        this.ele.innerHTML = this.formulaService.textParser(this.html);
    };
    __decorate([
        core_1.Input('htmlProcess'), 
        __metadata('design:type', Object)
    ], HtmlProcessor.prototype, "html", void 0);
    HtmlProcessor = __decorate([
        core_1.Directive({
            selector: '[htmlProcess]',
            providers: [formula_service_1.FormulaService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, JSONBuilder_service_1.JSONBuilder, formula_service_1.FormulaService])
    ], HtmlProcessor);
    return HtmlProcessor;
}());
exports.HtmlProcessor = HtmlProcessor;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb21wb25lbnRzL2h0bWxwcm9jZXNzb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUUsZUFBZSxDQUFDLENBQUE7QUFDekYsb0NBQTRCLDZDQUE2QyxDQUFDLENBQUE7QUFDMUUsZ0NBQStCLHlDQUF5QyxDQUFDLENBQUE7QUFTekU7SUFNRSx1QkFBWSxFQUFjLEVBQVUsaUJBQThCLEVBQVUsY0FBOEI7UUFBdEUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3hHLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNFLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0gsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFakUsQ0FBQztJQWxCRDtRQUFDLFlBQUssQ0FBQyxhQUFhLENBQUM7OytDQUFBO0lBUHZCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDNUIsQ0FBQzs7cUJBQUE7SUF1QkYsb0JBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLHFCQUFhLGdCQXFCekIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29tcG9uZW50cy9odG1scHJvY2Vzc29yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgRG9DaGVjaywgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vK2J1aWxkZXIvc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm11bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vK2J1aWxkZXIvc2VydmljZXMvZm9ybXVsYS5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIG1hdGg6IGFueTtcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2h0bWxQcm9jZXNzXScsXHJcbiAgcHJvdmlkZXJzOiBbRm9ybXVsYVNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSHRtbFByb2Nlc3NvciBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjayB7XHJcblxyXG4gIEBJbnB1dCgnaHRtbFByb2Nlc3MnKSBodG1sOiBhbnk7XHJcbiAgcHJpdmF0ZSBlbGU6IEhUTUxFbGVtZW50O1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyLCBwcml2YXRlIGZvcm11bGFTZXJ2aWNlOiBGb3JtdWxhU2VydmljZSkge1xyXG4gICAgdGhpcy5lbGUgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgbGV0IHRlbXBIdG1sOiBhbnkgPSB0aGlzLmZvcm11bGFTZXJ2aWNlLnRleHRQYXJzZXIodGhpcy5odG1sKTtcclxuICAgIGlmICh0aGlzLmVsZS5pbm5lckhUTUwgIT0gdGVtcEh0bWwpe1xyXG4gICAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSB0aGlzLmZvcm11bGFTZXJ2aWNlLnRleHRQYXJzZXIodGhpcy5odG1sKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gdGhpcy5mb3JtdWxhU2VydmljZS50ZXh0UGFyc2VyKHRoaXMuaHRtbCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiY2hlY2tcIix0aGlzLmVsZS5pbm5lckhUTUwpO1xyXG4gIH1cclxufVxyXG4iXX0=
