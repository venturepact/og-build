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
var ResultDisclaimer = (function () {
    function ResultDisclaimer() {
    }
    ResultDisclaimer.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ResultDisclaimer.prototype, "data", void 0);
    ResultDisclaimer = __decorate([
        core_1.Component({
            selector: 'result_disclaimer',
            directives: [],
            viewProviders: [],
            pipes: [index_1.SafeHtml],
            template: "\t\n\t\t<div [innerHtml]=\"data.props.title | safeHtml\" class=\"disc-set\">\n\t\t</div>\n\t",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], ResultDisclaimer);
    return ResultDisclaimer;
}());
exports.ResultDisclaimer = ResultDisclaimer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9yZXN1bHRkaXNjbGFpbWVyL3Jlc3VsdGRpc2NsYWltZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEQsZUFBZSxDQUFDLENBQUE7QUFDNUUsc0JBQXlCLG1CQUFtQixDQUFDLENBQUE7QUFhN0M7SUFBQTtJQU1BLENBQUM7SUFGQyxtQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUpEO1FBQUMsWUFBSyxFQUFFOztrREFBQTtJQVpWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsVUFBVSxFQUFFLEVBQUU7WUFDZCxhQUFhLEVBQUUsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxnQkFBUSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSw4RkFHVjtZQUNBLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1NBQ3RDLENBQUM7O3dCQUFBO0lBT0YsdUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLHdCQUFnQixtQkFNNUIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29udHJvbHMvcmVzdWx0ZGlzY2xhaW1lci9yZXN1bHRkaXNjbGFpbWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICcuLi8uLi9waXBlcy9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Jlc3VsdF9kaXNjbGFpbWVyJyxcclxuICBkaXJlY3RpdmVzOiBbXSxcclxuICB2aWV3UHJvdmlkZXJzOiBbXSxcclxuICBwaXBlczogW1NhZmVIdG1sXSxcclxuICB0ZW1wbGF0ZTogYFx0XHJcblx0XHQ8ZGl2IFtpbm5lckh0bWxdPVwiZGF0YS5wcm9wcy50aXRsZSB8IHNhZmVIdG1sXCIgY2xhc3M9XCJkaXNjLXNldFwiPlxyXG5cdFx0PC9kaXY+XHJcblx0YCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHREaXNjbGFpbWVyIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==
