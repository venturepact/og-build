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
var index_1 = require('../../pipes/index');
var JSONBuilder_service_1 = require('../../../+builder/services/JSONBuilder.service');
var ResultSummary = (function () {
    function ResultSummary(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    ResultSummary.prototype.ngOnInit = function () {
        if (this.data.hasOwnProperty('stats')) {
            this.questionData = this.data.stats;
        }
        else {
            this.jsonBuilderHelper.updateTemplateQuestionare();
            this.questionData = this.jsonBuilderHelper.getTemplateQuestionare();
        }
        console.log(jQuery('.page_2').height() + "!!!!!!!!!!!!!!!!!");
        jQuery('.slimscroll').slimscroll();
    };
    ResultSummary.prototype.ngDoCheck = function () {
        if (this.data.hasOwnProperty('stats')) {
            this.questionData = this.data.stats;
        }
        else {
            this.jsonBuilderHelper.updateTemplateQuestionare();
            this.questionData = this.jsonBuilderHelper.getTemplateQuestionare();
        }
    };
    ResultSummary.prototype.ngAfterViewInit = function () {
        console.log(jQuery('.page_2').height() + "!!!!!!!!!!!!!!!!!");
        jQuery('.slimscroll').slimscroll();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ResultSummary.prototype, "data", void 0);
    ResultSummary = __decorate([
        core_1.Component({
            selector: 'result_summary',
            directives: [],
            viewProviders: [],
            pipes: [index_1.SafeHtml],
            template: "\t\n\t\t<div class=\"internal-sec slimscroll\">\n      <div class=\"full-width \">\n        <div class=\"res\">\n          <h3 class > <i class=\"material-icons\">assignment</i> <span>Summary</span> </h3>\n        </div>\n      </div>\n      <div class=\"full-width\" *ngFor=\"let item of questionData\">\n        <div *ngIf=\"item.type != 'leadform_question'  && !data.hasOwnProperty('stats')\">\n          <h4>{{item.props.title}}</h4>\n          <h5 *ngIf=\"item.props.currentLabel != undefined || item.props.currentLabel !=''\">{{item.props.currentLabel}}</h5>\n          <h5 *ngIf=\"item.props.currentLabel === undefined || item.props.currentLabel===''\">Not Answered</h5>\n        </div>\n         <div *ngIf=\"data.hasOwnProperty('stats')\">\n          <h4>{{item.title}}</h4>\n          <h5 *ngIf=\"(item.label != undefined || item.label !='' ) && item.answered\">{{item.label}}</h5>\n          <h5 *ngIf=\"item.label == undefined || item.label =='' || !item.answered\">Not Answered</h5>\n        </div>\n      </div>\n    </div>\n\t",
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], ResultSummary);
    return ResultSummary;
}());
exports.ResultSummary = ResultSummary;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9yZXN1bHRzdW1tYXJ5L3Jlc3VsdHN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0YsZUFBZSxDQUFDLENBQUE7QUFDcEcsc0JBQXlCLG1CQUFtQixDQUFDLENBQUE7QUFDN0Msb0NBQTRCLGdEQUFnRCxDQUFDLENBQUE7QUE4QjdFO0lBZ0JFLHVCQUFvQixpQkFBOEI7UUFBOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO0lBRWxELENBQUM7SUFiRCxnQ0FBUSxHQUFSO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLENBQUM7WUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUN0RSxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQU1ELGlDQUFTLEdBQVQ7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsQ0FBQztZQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ3RFLENBQUM7SUFDSCxDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUEvQkQ7UUFBQyxZQUFLLEVBQUU7OytDQUFBO0lBN0JWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhLEVBQUUsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxnQkFBUSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxtaENBb0JWO1lBQ0EsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDdEMsQ0FBQzs7cUJBQUE7SUFtQ0Ysb0JBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBbENZLHFCQUFhLGdCQWtDekIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29udHJvbHMvcmVzdWx0c3VtbWFyeS9yZXN1bHRzdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIERvQ2hlY2ssIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICcuLi8uLi9waXBlcy9pbmRleCc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vK2J1aWxkZXIvc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Jlc3VsdF9zdW1tYXJ5JyxcclxuICBkaXJlY3RpdmVzOiBbXSxcclxuICB2aWV3UHJvdmlkZXJzOiBbXSxcclxuICBwaXBlczogW1NhZmVIdG1sXSxcclxuICB0ZW1wbGF0ZTogYFx0XHJcblx0XHQ8ZGl2IGNsYXNzPVwiaW50ZXJuYWwtc2VjIHNsaW1zY3JvbGxcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZ1bGwtd2lkdGggXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc1wiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzID4gPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmFzc2lnbm1lbnQ8L2k+IDxzcGFuPlN1bW1hcnk8L3NwYW4+IDwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZnVsbC13aWR0aFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHF1ZXN0aW9uRGF0YVwiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnR5cGUgIT0gJ2xlYWRmb3JtX3F1ZXN0aW9uJyAgJiYgIWRhdGEuaGFzT3duUHJvcGVydHkoJ3N0YXRzJylcIj5cclxuICAgICAgICAgIDxoND57e2l0ZW0ucHJvcHMudGl0bGV9fTwvaDQ+XHJcbiAgICAgICAgICA8aDUgKm5nSWY9XCJpdGVtLnByb3BzLmN1cnJlbnRMYWJlbCAhPSB1bmRlZmluZWQgfHwgaXRlbS5wcm9wcy5jdXJyZW50TGFiZWwgIT0nJ1wiPnt7aXRlbS5wcm9wcy5jdXJyZW50TGFiZWx9fTwvaDU+XHJcbiAgICAgICAgICA8aDUgKm5nSWY9XCJpdGVtLnByb3BzLmN1cnJlbnRMYWJlbCA9PT0gdW5kZWZpbmVkIHx8IGl0ZW0ucHJvcHMuY3VycmVudExhYmVsPT09JydcIj5Ob3QgQW5zd2VyZWQ8L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiZGF0YS5oYXNPd25Qcm9wZXJ0eSgnc3RhdHMnKVwiPlxyXG4gICAgICAgICAgPGg0Pnt7aXRlbS50aXRsZX19PC9oND5cclxuICAgICAgICAgIDxoNSAqbmdJZj1cIihpdGVtLmxhYmVsICE9IHVuZGVmaW5lZCB8fCBpdGVtLmxhYmVsICE9JycgKSAmJiBpdGVtLmFuc3dlcmVkXCI+e3tpdGVtLmxhYmVsfX08L2g1PlxyXG4gICAgICAgICAgPGg1ICpuZ0lmPVwiaXRlbS5sYWJlbCA9PSB1bmRlZmluZWQgfHwgaXRlbS5sYWJlbCA9PScnIHx8ICFpdGVtLmFuc3dlcmVkXCI+Tm90IEFuc3dlcmVkPC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHRgLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRTdW1tYXJ5IGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcbiAgcXVlc3Rpb25EYXRhOiBhbnk7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLmhhc093blByb3BlcnR5KCdzdGF0cycpKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25EYXRhID0gdGhpcy5kYXRhLnN0YXRzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci51cGRhdGVUZW1wbGF0ZVF1ZXN0aW9uYXJlKCk7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25EYXRhID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRUZW1wbGF0ZVF1ZXN0aW9uYXJlKCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhqUXVlcnkoJy5wYWdlXzInKS5oZWlnaHQoKStcIiEhISEhISEhISEhISEhISEhXCIpO1xyXG4gICAgICBqUXVlcnkoJy5zbGltc2Nyb2xsJykuc2xpbXNjcm9sbCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLmhhc093blByb3BlcnR5KCdzdGF0cycpKSB7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25EYXRhID0gdGhpcy5kYXRhLnN0YXRzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci51cGRhdGVUZW1wbGF0ZVF1ZXN0aW9uYXJlKCk7XHJcbiAgICAgIHRoaXMucXVlc3Rpb25EYXRhID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRUZW1wbGF0ZVF1ZXN0aW9uYXJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGpRdWVyeSgnLnBhZ2VfMicpLmhlaWdodCgpK1wiISEhISEhISEhISEhISEhISFcIik7XHJcbiAgICAgIGpRdWVyeSgnLnNsaW1zY3JvbGwnKS5zbGltc2Nyb2xsKCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXX0=
