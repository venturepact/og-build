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
var RecommendedOutput = (function () {
    function RecommendedOutput(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    RecommendedOutput.prototype.ngOnInit = function () {
        console.log('data', this.data);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RecommendedOutput.prototype, "data", void 0);
    RecommendedOutput = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'result_output',
            directives: [result_directive_1.Result, themeColor_directive_1.ThemeColor, htmlprocessor_directive_1.HtmlProcessor],
            viewProviders: [],
            pipes: [index_1.SafeHtml],
            templateUrl: 'recommendedOutput.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], RecommendedOutput);
    return RecommendedOutput;
}());
exports.RecommendedOutput = RecommendedOutput;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9yZWNvbW1lbmRlZE91dHB1dC9yZWNvbW1lbmRlZE91dHB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE0RCxlQUFlLENBQUMsQ0FBQTtBQUM1RSxzQkFBeUIsbUJBQW1CLENBQUMsQ0FBQTtBQUM3QyxpQ0FBdUIsbUNBQW1DLENBQUMsQ0FBQTtBQUMzRCx3Q0FBOEIsMENBQTBDLENBQUMsQ0FBQTtBQUN6RSxxQ0FBMkIsdUNBQXVDLENBQUMsQ0FBQTtBQUNuRSxvQ0FBNEIsZ0RBQWdELENBQUMsQ0FBQTtBQVc3RTtJQVFFLDJCQUFvQixpQkFBOEI7UUFBOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO0lBQUcsQ0FBQztJQUh0RCxvQ0FBUSxHQUFSO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFORDtRQUFDLFlBQUssRUFBRTs7bURBQUE7SUFWVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsVUFBVSxFQUFFLENBQUMseUJBQU0sRUFBRSxpQ0FBVSxFQUFDLHVDQUFhLENBQUM7WUFDOUMsYUFBYSxFQUFFLEVBQUU7WUFDakIsS0FBSyxFQUFFLENBQUMsZ0JBQVEsQ0FBQztZQUNqQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1NBQ3RDLENBQUM7O3lCQUFBO0lBVUYsd0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHlCQUFpQixvQkFTN0IsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29udHJvbHMvcmVjb21tZW5kZWRPdXRwdXQvcmVjb21tZW5kZWRPdXRwdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJy4uLy4uL3BpcGVzL2luZGV4JztcclxuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yZXN1bHQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSHRtbFByb2Nlc3NvciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaHRtbHByb2Nlc3Nvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUaGVtZUNvbG9yIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90aGVtZUNvbG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vK2J1aWxkZXIvc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncmVzdWx0X291dHB1dCcsXHJcbiAgZGlyZWN0aXZlczogW1Jlc3VsdCwgVGhlbWVDb2xvcixIdG1sUHJvY2Vzc29yXSxcclxuICB2aWV3UHJvdmlkZXJzOiBbXSxcclxuICBwaXBlczogW1NhZmVIdG1sXSxcclxuICB0ZW1wbGF0ZVVybDogJ3JlY29tbWVuZGVkT3V0cHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWNvbW1lbmRlZE91dHB1dCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG4gIGZvcm11bGE6IGFueTtcclxuICBxdWVzdGlvbnM6IGFueTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIGNvbnNvbGUubG9nKCdkYXRhJyx0aGlzLmRhdGEpO1xyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcikge31cclxufVxyXG4iXX0=
