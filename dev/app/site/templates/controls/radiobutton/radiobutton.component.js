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
var forms_1 = require('@angular/forms');
var themeColor_directive_1 = require('../../components/themeColor.directive');
var analytic_service_1 = require('../../services/analytic.service');
var JSONBuilder_service_1 = require('../../../+builder/services/JSONBuilder.service');
var recommendation_service_1 = require('../../services/recommendation.service');
var RadioButton = (function () {
    function RadioButton(_analyticService, jsonBuilderHelper, recommendationService) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.recommendationService = recommendationService;
        this.isIconPresent = false;
        this.touched = false;
    }
    RadioButton.prototype.ngOnInit = function () {
        this.data.props.currentLabel = '';
        this.data.props.currentValue = 0;
        for (var _i = 0, _a = this.data.options; _i < _a.length; _i++) {
            var radio_item = _a[_i];
            radio_item.selected = radio_item.defualtselected;
            if (radio_item.selected == true) {
                this.data.props.currentValue = parseFloat(radio_item.value);
                this.data.props.currentLabel = radio_item.label;
            }
            if (radio_item.icon !== '') {
                this.data.isIconPresent = true;
            }
        }
    };
    RadioButton.prototype.onClick = function (radioItem) {
        var _this = this;
        console.log("changes clicked ", radioItem);
        this.data.options = this.data.options.map(function (option) { option.selected = false; return option; });
        radioItem.selected = true;
        this.data.props.currentLabel = radioItem.label;
        this.data.props.currentValue = radioItem.value;
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
    };
    Object.defineProperty(RadioButton.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.data._id].valid;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RadioButton.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RadioButton.prototype, "devMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], RadioButton.prototype, "form", void 0);
    RadioButton = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'radio-button',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, themeColor_directive_1.ThemeColor],
            pipes: [index_1.SafeHtml],
            viewProviders: [],
            templateUrl: 'radiobutton.component.html'
        }), 
        __metadata('design:paramtypes', [analytic_service_1.AnalyticService, JSONBuilder_service_1.JSONBuilder, recommendation_service_1.RecommendationService])
    ], RadioButton);
    return RadioButton;
}());
exports.RadioButton = RadioButton;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9yYWRpb2J1dHRvbi9yYWRpb2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCxzQkFBeUIsbUJBQW1CLENBQUMsQ0FBQTtBQUM3QyxzQkFBb0QsZ0JBQWdCLENBQUMsQ0FBQTtBQUNyRSxxQ0FBMkIsdUNBQXVDLENBQUMsQ0FBQTtBQUNuRSxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxvQ0FBNEIsZ0RBQWdELENBQUMsQ0FBQTtBQUU3RSx1Q0FBc0MsdUNBQXVDLENBQUMsQ0FBQTtBQVU5RTtJQVVFLHFCQUFvQixnQkFBaUMsRUFDM0MsaUJBQThCLEVBQzlCLHFCQUE0QztRQUZsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQzNDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUM5QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBUHRELGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFTekIsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLENBQW1CLFVBQWlCLEVBQWpCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQWpCLGNBQWlCLEVBQWpCLElBQWlCLENBQUM7WUFBcEMsSUFBSSxVQUFVLFNBQUE7WUFFakIsVUFBVSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFB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SyxFQUFFOzs2Q0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztnREFBQTtJQUtSO1FBQUMsWUFBSyxFQUFFOzs2Q0FBQTtJQWhCVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsVUFBVSxFQUFFLENBQUMsZ0NBQXdCLEVBQUUsaUNBQVUsQ0FBQztZQUNsRCxLQUFLLEVBQUUsQ0FBQyxnQkFBUSxDQUFDO1lBQ2pCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFdBQVcsRUFBRSw0QkFBNEI7U0FDMUMsQ0FBQzs7bUJBQUE7SUF1RUYsa0JBQUM7QUFBRCxDQXJFQSxBQXFFQyxJQUFBO0FBckVZLG1CQUFXLGNBcUV2QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9yYWRpb2J1dHRvbi9yYWRpb2J1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICcuLi8uLi9waXBlcy9pbmRleCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUaGVtZUNvbG9yIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90aGVtZUNvbG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEFuYWx5dGljU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IFJlY29tbWVuZGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlY29tbWVuZGF0aW9uLnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncmFkaW8tYnV0dG9uJyxcclxuICBkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBUaGVtZUNvbG9yXSxcclxuICBwaXBlczogW1NhZmVIdG1sXSxcclxuICB2aWV3UHJvdmlkZXJzOiBbXSxcclxuICB0ZW1wbGF0ZVVybDogJ3JhZGlvYnV0dG9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgZGV2TW9kZTogYW55O1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWRPcHRpb246IGFueTtcclxuICBpc0ljb25QcmVzZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgdG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuICBwcml2YXRlIHNhdmluZ0RhdGE6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYW5hbHl0aWNTZXJ2aWNlOiBBbmFseXRpY1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcixcclxuICAgIHByaXZhdGUgcmVjb21tZW5kYXRpb25TZXJ2aWNlOiBSZWNvbW1lbmRhdGlvblNlcnZpY2VcclxuICApIHtcclxuICAgIC8vY29kZVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRhdGEucHJvcHMuY3VycmVudExhYmVsID0gJyc7XHJcbiAgICB0aGlzLmRhdGEucHJvcHMuY3VycmVudFZhbHVlID0gMDtcclxuICAgIGZvciAobGV0IHJhZGlvX2l0ZW0gb2YgdGhpcy5kYXRhLm9wdGlvbnMpIHtcclxuICAgICAgLyogY2hlY2sgZm9yIGRlZmF1bHQgdG8gc2V0IGN1cnJlbnQgdmFsdWUgKi9cclxuICAgICAgcmFkaW9faXRlbS5zZWxlY3RlZCA9IHJhZGlvX2l0ZW0uZGVmdWFsdHNlbGVjdGVkO1xyXG4gICAgICBpZiAocmFkaW9faXRlbS5zZWxlY3RlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQocmFkaW9faXRlbS52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbCA9IHJhZGlvX2l0ZW0ubGFiZWw7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJhZGlvX2l0ZW0uaWNvbiAhPT0gJycpIHtcclxuICAgICAgICB0aGlzLmRhdGEuaXNJY29uUHJlc2VudCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2socmFkaW9JdGVtOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlcyBjbGlja2VkIFwiLCByYWRpb0l0ZW0pO1xyXG5cclxuICAgIHRoaXMuZGF0YS5vcHRpb25zID0gdGhpcy5kYXRhLm9wdGlvbnMubWFwKChvcHRpb246IGFueSkgPT4geyBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTsgcmV0dXJuIG9wdGlvbjsgfSk7XHJcbiAgICByYWRpb0l0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbCA9IHJhZGlvSXRlbS5sYWJlbDtcclxuICAgIHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWUgPSByYWRpb0l0ZW0udmFsdWU7XHJcbiAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5zdGF0dXMgPT0gJ0xJVkUnKSB7XHJcbiAgICAgIC8qIGlmIGtleSBpcyB1bmRlZmluZWQgdGhlbiBwdXNoIGluIGFycmF5ICovXHJcbiAgICAgIGlmICh0aGlzLl9hbmFseXRpY1NlcnZpY2UuZ2V0VmlzaXRvcktleSgpID09ICcnKVxyXG4gICAgICAgIHRoaXMuX2FuYWx5dGljU2VydmljZS5zZXRWaXNpdG9yQW5zd2Vycyh0aGlzLmRhdGEpO1xyXG4gICAgICAvKiAgKi9cclxuICAgICAgaWYgKHRoaXMuX2FuYWx5dGljU2VydmljZS5nZXRWaXNpdG9yQW5zd2VycygpLmxlbmd0aCA8PSAxIHx8IHRoaXMuX2FuYWx5dGljU2VydmljZS5nZXRWaXNpdG9yS2V5KCkpIHtcclxuICAgICAgICB0aGlzLl9hbmFseXRpY1NlcnZpY2Uuc2F2ZVN0YXRzKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLCB0aGlzLmRhdGEsIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZSgpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuYWx5dGljU2VydmljZS5zZXRWaXNpdG9yS2V5KHJlc3BvbnNlLmtleSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gJ0FycmF5IFVwZGF0ZWQnKVxyXG4gICAgICAgICAgICAgIHRoaXMuX2FuYWx5dGljU2VydmljZS5yZUluaXRWaXNpdG9yQW5zd2VycygpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGVtcGxhdGVUeXBlID09ICdSZWNvbW1lbmRhdGlvbicpIHtcclxuICAgICAgdGhpcy5yZWNvbW1lbmRhdGlvblNlcnZpY2UuZ2V0UmVjb21lbmRlZFJlc3VsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZGF0YS5faWRdLnZhbGlkO1xyXG4gIH1cclxufVxyXG4iXX0=
