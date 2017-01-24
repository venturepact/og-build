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
var themeColor_directive_1 = require('../../components/themeColor.directive');
var index_1 = require('../../pipes/index');
var forms_1 = require('@angular/forms');
var analytic_service_1 = require('../../services/analytic.service');
var JSONBuilder_service_1 = require('../../../+builder/services/JSONBuilder.service');
var recommendation_service_1 = require('../../services/recommendation.service');
var Checkbox = (function () {
    function Checkbox(_analyticService, jsonBuilderHelper, recommendationService) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.recommendationService = recommendationService;
        this.isIconPresent = false;
        this.touched = false;
    }
    Checkbox.prototype.ngOnInit = function () {
        this.data.props.currentLabel = '';
        this.data.props.currentValue = 0;
        for (var iconCheck in this.data.options) {
            this.data.options[iconCheck].selected = this.data.options[iconCheck].defualtselected;
            if (this.data.options[iconCheck].selected == true) {
                this.form.controls[this.data._id].markAsDirty();
                this.data.props.currentValue = parseFloat(this.data.options[iconCheck].value) + parseFloat(this.data.props.currentValue);
                this.data.props.currentLabel = this.data.options[iconCheck].currentLabel + ',' + this.data.props.currentLabel;
            }
            if (this.data.options[iconCheck].icon !== '') {
                this.data.isIconPresent = true;
            }
        }
    };
    Checkbox.prototype.onChange = function (event, index) {
        var _this = this;
        this.data.props.currentLabel = '';
        this.data.props.currentValue = 0;
        for (var option in this.data.options) {
            if (option == index)
                this.data.options[option].selected = !this.data.options[option].selected;
            if (this.data.options[option].selected == true) {
                this.data.props.currentValue += parseFloat(this.data.options[option].value);
                this.data.props.currentLabel += this.data.options[option].label + ',';
            }
        }
        if (this.data.props.currentLabel != '')
            this.data.props.currentLabel = this.data.props.currentLabel.slice(0, -1);
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            if (this._analyticService.getVisitorAnswers().length <= 1 || this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data, this.jsonBuilderHelper.getTemplateQuestionare())
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.recommendationService.getRecomendedResult();
        }
        this.touched = true;
    };
    Object.defineProperty(Checkbox.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.data._id].valid;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Checkbox.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Checkbox.prototype, "devMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], Checkbox.prototype, "form", void 0);
    Checkbox = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'checkbox',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, themeColor_directive_1.ThemeColor],
            providers: [],
            viewProviders: [],
            pipes: [index_1.SafeHtml],
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'checkbox.component.html'
        }), 
        __metadata('design:paramtypes', [analytic_service_1.AnalyticService, JSONBuilder_service_1.JSONBuilder, recommendation_service_1.RecommendationService])
    ], Checkbox);
    return Checkbox;
}());
exports.Checkbox = Checkbox;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2RCxlQUFlLENBQUMsQ0FBQTtBQUM3RSxxQ0FBMkIsdUNBQXVDLENBQUMsQ0FBQTtBQUNuRSxzQkFBeUIsbUJBQW1CLENBQUMsQ0FBQTtBQUM3QyxzQkFBb0QsZ0JBQWdCLENBQUMsQ0FBQTtBQUdyRSxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxvQ0FBNEIsZ0RBQWdELENBQUMsQ0FBQTtBQUM3RSx1Q0FBc0MsdUNBQXVDLENBQUMsQ0FBQTtBQVc5RTtJQVdFLGtCQUFvQixnQkFBaUMsRUFBVSxpQkFBOEIsRUFDbkYscUJBQTRDO1FBRGxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWE7UUFDbkYsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQVJ0RCxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixZQUFPLEdBQVksS0FBSyxDQUFDO0lBUXpCLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxDQUFDO1lBRXJGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxD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QTdFRDtRQUFDLFlBQUssRUFBRTs7MENBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NkNBQUE7SUFNUjtRQUFDLFlBQUssRUFBRTs7MENBQUE7SUFsQlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixFQUFFLGlDQUFVLENBQUM7WUFDbEQsU0FBUyxFQUFFLEVBQUU7WUFDYixhQUFhLEVBQUUsRUFBRTtZQUNqQixLQUFLLEVBQUUsQ0FBQyxnQkFBUSxDQUFDO1lBQ2pCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFdBQVcsRUFBRSx5QkFBeUI7U0FDdkMsQ0FBQzs7Z0JBQUE7SUFnRkYsZUFBQztBQUFELENBL0VBLEFBK0VDLElBQUE7QUEvRVksZ0JBQVEsV0ErRXBCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL2NvbnRyb2xzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lQ29sb3IgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RoZW1lQ29sb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICcuLi8uLi9waXBlcy9pbmRleCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG4vLyBpbXBvcnQge0NoZWNrQm94VmFsaWRhdG9yfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jdXN0b21WYWxpZGF0aW9uJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBBbmFseXRpY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8rYnVpbGRlci9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVjb21tZW5kYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVjb21tZW5kYXRpb24uc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdjaGVja2JveCcsXHJcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgVGhlbWVDb2xvcl0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICB2aWV3UHJvdmlkZXJzOiBbXSxcclxuICBwaXBlczogW1NhZmVIdG1sXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3guY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG4gIEBJbnB1dCgpIGRldk1vZGU6IGFueTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGlzSWNvblByZXNlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzZWxlY3RlZE9wdGlvbjogYW55O1xyXG4gIHRvdWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuICBwcml2YXRlIHNhdmluZ0RhdGE6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYW5hbHl0aWNTZXJ2aWNlOiBBbmFseXRpY1NlcnZpY2UsIHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSByZWNvbW1lbmRhdGlvblNlcnZpY2U6IFJlY29tbWVuZGF0aW9uU2VydmljZSkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbCA9ICcnO1xyXG4gICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9IDA7XHJcbiAgICBmb3IgKGxldCBpY29uQ2hlY2sgaW4gdGhpcy5kYXRhLm9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5kYXRhLm9wdGlvbnNbaWNvbkNoZWNrXS5zZWxlY3RlZCA9IHRoaXMuZGF0YS5vcHRpb25zW2ljb25DaGVja10uZGVmdWFsdHNlbGVjdGVkO1xyXG4gICAgICAvKiBjaGVjayBmb3IgZGVmYXVsdCB0byBzZXQgY3VycmVudCB2YWx1ZSAqL1xyXG4gICAgICBpZiAodGhpcy5kYXRhLm9wdGlvbnNbaWNvbkNoZWNrXS5zZWxlY3RlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZGF0YS5faWRdLm1hcmtBc0RpcnR5KCk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5kYXRhLm9wdGlvbnNbaWNvbkNoZWNrXS52YWx1ZSkgKyBwYXJzZUZsb2F0KHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWwgPSB0aGlzLmRhdGEub3B0aW9uc1tpY29uQ2hlY2tdLmN1cnJlbnRMYWJlbCArICcsJyArIHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWw7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5kYXRhLm9wdGlvbnNbaWNvbkNoZWNrXS5pY29uICE9PSAnJykge1xyXG4gICAgICAgIHRoaXMuZGF0YS5pc0ljb25QcmVzZW50ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBvbkNoYW5nZShldmVudDogYW55LCBpbmRleDogYW55KSB7XHJcbiAgICB0aGlzLmRhdGEucHJvcHMuY3VycmVudExhYmVsID0gJyc7XHJcbiAgICB0aGlzLmRhdGEucHJvcHMuY3VycmVudFZhbHVlID0gMDtcclxuICAgIGZvciAobGV0IG9wdGlvbiBpbiB0aGlzLmRhdGEub3B0aW9ucykge1xyXG4gICAgICBpZiAob3B0aW9uID09IGluZGV4KVxyXG4gICAgICAgIHRoaXMuZGF0YS5vcHRpb25zW29wdGlvbl0uc2VsZWN0ZWQgPSAhdGhpcy5kYXRhLm9wdGlvbnNbb3B0aW9uXS5zZWxlY3RlZDtcclxuICAgICAgaWYgKHRoaXMuZGF0YS5vcHRpb25zW29wdGlvbl0uc2VsZWN0ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWUgKz0gcGFyc2VGbG9hdCh0aGlzLmRhdGEub3B0aW9uc1tvcHRpb25dLnZhbHVlKTtcclxuICAgICAgICB0aGlzLmRhdGEucHJvcHMuY3VycmVudExhYmVsICs9IHRoaXMuZGF0YS5vcHRpb25zW29wdGlvbl0ubGFiZWwgKyAnLCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbCAhPSAnJylcclxuICAgICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbCA9IHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWwuc2xpY2UoMCwgLTEpO1xyXG5cclxuICAgIGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnN0YXR1cyA9PSAnTElWRScpIHtcclxuICAgICAgLyogaWYga2V5IGlzIHVuZGVmaW5lZCB0aGVuIHB1c2ggaW4gYXJyYXkgKi9cclxuICAgICAgaWYgKHRoaXMuX2FuYWx5dGljU2VydmljZS5nZXRWaXNpdG9yS2V5KCkgPT0gJycpXHJcbiAgICAgICAgdGhpcy5fYW5hbHl0aWNTZXJ2aWNlLnNldFZpc2l0b3JBbnN3ZXJzKHRoaXMuZGF0YSk7XHJcbiAgICAgIC8qICAqL1xyXG4gICAgICBpZiAodGhpcy5fYW5hbHl0aWNTZXJ2aWNlLmdldFZpc2l0b3JBbnN3ZXJzKCkubGVuZ3RoIDw9IDEgfHwgdGhpcy5fYW5hbHl0aWNTZXJ2aWNlLmdldFZpc2l0b3JLZXkoKSkge1xyXG4gICAgICAgIHRoaXMuX2FuYWx5dGljU2VydmljZS5zYXZlU3RhdHModGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5faWQsIHRoaXMuZGF0YSwgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRUZW1wbGF0ZVF1ZXN0aW9uYXJlKCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fYW5hbHl0aWNTZXJ2aWNlLnNldFZpc2l0b3JLZXkocmVzcG9uc2Uua2V5KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAnQXJyYXkgVXBkYXRlZCcpXHJcbiAgICAgICAgICAgICAgdGhpcy5fYW5hbHl0aWNTZXJ2aWNlLnJlSW5pdFZpc2l0b3JBbnN3ZXJzKCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRlbXBsYXRlVHlwZSA9PSAnUmVjb21tZW5kYXRpb24nKSB7XHJcbiAgICAgIHRoaXMucmVjb21tZW5kYXRpb25TZXJ2aWNlLmdldFJlY29tZW5kZWRSZXN1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvdWNoZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZGF0YS5faWRdLnZhbGlkO1xyXG4gIH1cclxufVxyXG4iXX0=
