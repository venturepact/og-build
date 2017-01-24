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
var result_directive_1 = require('../../components/result.directive');
var htmlprocessor_directive_1 = require('../../components/htmlprocessor.directive');
var themeColor_directive_1 = require('../../components/themeColor.directive');
var JSONBuilder_service_1 = require('../../../+builder/services/JSONBuilder.service');
var ResultOutput = (function () {
    function ResultOutput(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    ResultOutput.prototype.ngOnInit = function () {
        console.log('data', this.data);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ResultOutput.prototype, "data", void 0);
    ResultOutput = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'result_output',
            directives: [result_directive_1.Result, themeColor_directive_1.ThemeColor, htmlprocessor_directive_1.HtmlProcessor],
            viewProviders: [],
            pipes: [index_1.SafeHtml],
            templateUrl: 'resultoutput.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], ResultOutput);
    return ResultOutput;
}());
exports.ResultOutput = ResultOutput;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9yZXN1bHRvdXRwdXQvcmVzdWx0b3V0cHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRELGVBQWUsQ0FBQyxDQUFBO0FBQzVFLHNCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLGlDQUF1QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQzNELHdDQUE4QiwwQ0FBMEMsQ0FBQyxDQUFBO0FBQ3pFLHFDQUEyQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ25FLG9DQUE0QixnREFBZ0QsQ0FBQyxDQUFBO0FBVzdFO0lBUUUsc0JBQW9CLGlCQUE4QjtRQUE5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWE7SUFBRyxDQUFDO0lBSHRELCtCQUFRLEdBQVI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQU5EO1FBQUMsWUFBSyxFQUFFOzs4Q0FBQTtJQVZWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixVQUFVLEVBQUUsQ0FBQyx5QkFBTSxFQUFFLGlDQUFVLEVBQUMsdUNBQWEsQ0FBQztZQUM5QyxhQUFhLEVBQUUsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxnQkFBUSxDQUFDO1lBQ2pCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDdEMsQ0FBQzs7b0JBQUE7SUFVRixtQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksb0JBQVksZUFTeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29udHJvbHMvcmVzdWx0b3V0cHV0L3Jlc3VsdG91dHB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnLi4vLi4vcGlwZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Jlc3VsdC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBIdG1sUHJvY2Vzc29yIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9odG1scHJvY2Vzc29yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRoZW1lQ29sb3IgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RoZW1lQ29sb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8rYnVpbGRlci9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdyZXN1bHRfb3V0cHV0JyxcclxuICBkaXJlY3RpdmVzOiBbUmVzdWx0LCBUaGVtZUNvbG9yLEh0bWxQcm9jZXNzb3JdLFxyXG4gIHZpZXdQcm92aWRlcnM6IFtdLFxyXG4gIHBpcGVzOiBbU2FmZUh0bWxdLFxyXG4gIHRlbXBsYXRlVXJsOiAncmVzdWx0b3V0cHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRPdXRwdXQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuICBmb3JtdWxhOiBhbnk7XHJcbiAgcXVlc3Rpb25zOiBhbnk7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICBjb25zb2xlLmxvZygnZGF0YScsdGhpcy5kYXRhKTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIpIHt9XHJcbn1cclxuIl19
