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
var JSONBuilder_service_1 = require('../../../+builder/services/JSONBuilder.service');
var analytic_service_1 = require('../../services/analytic.service');
var recommendation_service_1 = require('../../services/recommendation.service');
var SelectBox = (function () {
    function SelectBox(_analyticService, jsonBuilderHelper, recommendationService) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.recommendationService = recommendationService;
        this.optionStatus = 0;
    }
    SelectBox.prototype.ngOnInit = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.data.props.currentValue = this.data.options[0].value;
        }
        else {
            this.data.props.currentValue = parseFloat(this.data.options[0].value);
        }
        this.data.props.currentLabel = this.data.options[0].label;
        for (var _i = 0, _a = this.data.options; _i < _a.length; _i++) {
            var option = _a[_i];
            option.selected = option.defualtselected;
            if (option.selected == true) {
                if (this.data.props.currentValue == undefined || this.data.props.currentValue == '' || this.data.props.currentValue == null)
                    this.data.props.currentValue = 0;
                if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
                    this.data.props.currentValue = option.value;
                }
                else {
                    this.data.props.currentValue = parseFloat(option.value);
                }
                this.data.props.currentLabel = option.label;
                this.optionStatus = 1;
            }
        }
        if (this.optionStatus == 0 && this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.data.options[0].selected = true;
        }
    };
    SelectBox.prototype.ngAfterViewInit = function () {
        var self = this;
        jQuery('#' + self.data._id).selectize({
            allowEmptyOption: true
        });
        jQuery('#' + self.data._id)[0].selectize.setValue(self.data.props.currentValue);
        jQuery('#' + self.data._id)[0].selectize.on('change', function () {
            var value = jQuery('#' + self.data._id)[0].selectize.getValue();
            for (var option in self.data.options) {
                if (self.data.options[option].value === value) {
                    self.onChange(option);
                    break;
                }
            }
        });
    };
    Object.defineProperty(SelectBox.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.data._id].valid;
        },
        enumerable: true,
        configurable: true
    });
    SelectBox.prototype.onChange = function (index) {
        var _this = this;
        for (var radio_itemIndex in this.data.options) {
            if (Number(radio_itemIndex) == index) {
                this.data.options[radio_itemIndex].selected = true;
                this.data.props.currentLabel = this.data.options[radio_itemIndex].label;
            }
            else {
                this.data.options[radio_itemIndex].selected = false;
            }
        }
        if (this.data.props.currentValue == undefined || this.data.props.currentValue == '' || this.data.props.currentValue == null)
            this.data.props.currentValue = 0;
        if (index > -1) {
            this.data.props.currentValue = parseFloat(this.data.options[index].value);
        }
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            console.log('this._analyticService.getVisitorKey()', this._analyticService.getVisitorKey());
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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectBox.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectBox.prototype, "devMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], SelectBox.prototype, "form", void 0);
    SelectBox = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'selectbox',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, themeColor_directive_1.ThemeColor],
            pipes: [index_1.SafeHtml],
            viewProviders: [],
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'selectbox.component.html',
        }), 
        __metadata('design:paramtypes', [analytic_service_1.AnalyticService, JSONBuilder_service_1.JSONBuilder, recommendation_service_1.RecommendationService])
    ], SelectBox);
    return SelectBox;
}());
exports.SelectBox = SelectBox;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9zZWxlY3Rib3gvc2VsZWN0Ym94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJFLGVBQWUsQ0FBQyxDQUFBO0FBQzNGLHFDQUEyQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ25FLHNCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLHNCQUFvRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3JFLG9DQUE0QixnREFBZ0QsQ0FBQyxDQUFBO0FBQzdFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBRWxFLHVDQUFzQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBYTlFO0lBUUMsbUJBQW9CLGdCQUFpQyxFQUM1QyxpQkFBOEIsRUFDOUIscUJBQTRDO1FBRmpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDNUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQzlCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFOckQsaUJBQVksR0FBVyxDQUFDLENBQUM7SUFTekIsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxJQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMs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QUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDO3dCQUN0QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDL0MsQ0FBQyxFQUNELFVBQUMsS0FBVTtvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQixDQUFDLENBQ0EsQ0FBQztZQUNKLENBQUM7UUFFRixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLFlBQVksSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDbEQsQ0FBQztJQUNGLENBQUM7SUF6R0Q7UUFBQyxZQUFLLEVBQUU7OzJDQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzhDQUFBO0lBR1I7UUFBQyxZQUFLLEVBQUU7OzJDQUFBO0lBZFQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixFQUFFLGlDQUFVLENBQUM7WUFDbEQsS0FBSyxFQUFFLENBQUMsZ0JBQVEsQ0FBQztZQUNqQixhQUFhLEVBQUUsRUFBRTtZQUNqQixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtZQUNyQyxXQUFXLEVBQUUsMEJBQTBCO1NBQ3ZDLENBQUM7O2lCQUFBO0lBNEdGLGdCQUFDO0FBQUQsQ0EzR0EsQUEyR0MsSUFBQTtBQTNHWSxpQkFBUyxZQTJHckIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29udHJvbHMvc2VsZWN0Ym94L3NlbGVjdGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lQ29sb3IgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RoZW1lQ29sb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICcuLi8uLi9waXBlcy9pbmRleCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbmFseXRpY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBSZWNvbW1lbmRhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZWNvbW1lbmRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ3NlbGVjdGJveCcsXHJcblx0ZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgVGhlbWVDb2xvcl0sXHJcblx0cGlwZXM6IFtTYWZlSHRtbF0sXHJcblx0dmlld1Byb3ZpZGVyczogW10sXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuXHR0ZW1wbGF0ZVVybDogJ3NlbGVjdGJveC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RCb3ggaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cdEBJbnB1dCgpIGRhdGE6IGFueTtcclxuXHRASW5wdXQoKSBkZXZNb2RlOiBhbnk7XHJcblx0dmFsdWU6IHN0cmluZztcclxuXHRvcHRpb25TdGF0dXM6IG51bWJlciA9IDA7XHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdHByaXZhdGUgc2F2aW5nRGF0YTogU3Vic2NyaXB0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbmFseXRpY1NlcnZpY2U6IEFuYWx5dGljU2VydmljZSxcclxuXHRcdHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyLFxyXG5cdFx0cHJpdmF0ZSByZWNvbW1lbmRhdGlvblNlcnZpY2U6IFJlY29tbWVuZGF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0Ly9jb2RlXHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRlbXBsYXRlVHlwZSA9PSAnUmVjb21tZW5kYXRpb24nKSB7XHJcblx0XHRcdHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWUgPSB0aGlzLmRhdGEub3B0aW9uc1swXS52YWx1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuZGF0YS5vcHRpb25zWzBdLnZhbHVlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWwgPSB0aGlzLmRhdGEub3B0aW9uc1swXS5sYWJlbDtcclxuXHRcdGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLmRhdGEub3B0aW9ucykge1xyXG5cdFx0XHRvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24uZGVmdWFsdHNlbGVjdGVkO1xyXG5cdFx0XHQvKiBjaGVjayBmb3IgZGVmYXVsdCB0byBzZXQgY3VycmVudCB2YWx1ZSAqL1xyXG5cdFx0XHRpZiAob3B0aW9uLnNlbGVjdGVkID09IHRydWUpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9PSB1bmRlZmluZWQgfHwgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9PSAnJyB8fCB0aGlzLmRhdGEucHJvcHMuY3VycmVudFZhbHVlID09IG51bGwpXHJcblx0XHRcdFx0XHR0aGlzLmRhdGEucHJvcHMuY3VycmVudFZhbHVlID0gMDtcclxuXHRcdFx0XHRpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0gJ1JlY29tbWVuZGF0aW9uJykge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9IG9wdGlvbi52YWx1ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQob3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbCA9IG9wdGlvbi5sYWJlbDtcclxuXHRcdFx0XHR0aGlzLm9wdGlvblN0YXR1cyA9IDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmKHRoaXMub3B0aW9uU3RhdHVzID09IDAgJiYgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0gJ1JlY29tbWVuZGF0aW9uJykge1xyXG5cdFx0XHR0aGlzLmRhdGEub3B0aW9uc1swXS5zZWxlY3RlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHR2YXIgc2VsZjogYW55ID0gdGhpcztcclxuXHRcdGpRdWVyeSgnIycgKyBzZWxmLmRhdGEuX2lkKS5zZWxlY3RpemUoe1xyXG5cdFx0XHRhbGxvd0VtcHR5T3B0aW9uOiB0cnVlXHJcblx0XHR9KTtcclxuXHRcdGpRdWVyeSgnIycgKyBzZWxmLmRhdGEuX2lkKVswXS5zZWxlY3RpemUuc2V0VmFsdWUoc2VsZi5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSk7XHJcblx0XHRqUXVlcnkoJyMnICsgc2VsZi5kYXRhLl9pZClbMF0uc2VsZWN0aXplLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciB2YWx1ZSA9IGpRdWVyeSgnIycgKyBzZWxmLmRhdGEuX2lkKVswXS5zZWxlY3RpemUuZ2V0VmFsdWUoKTtcclxuXHRcdFx0Zm9yIChsZXQgb3B0aW9uIGluIHNlbGYuZGF0YS5vcHRpb25zKSB7XHJcblx0XHRcdFx0aWYgKHNlbGYuZGF0YS5vcHRpb25zW29wdGlvbl0udmFsdWUgPT09IHZhbHVlKSB7XHJcblx0XHRcdFx0XHRzZWxmLm9uQ2hhbmdlKG9wdGlvbik7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0IGlzVmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZGF0YS5faWRdLnZhbGlkO1xyXG5cdH1cclxuXHJcblx0b25DaGFuZ2UoaW5kZXg6IGFueSkge1xyXG5cdFx0Lyogc2VsZWN0IGluZGV4IGluIGl0ZW0gb3B0aW9uICovXHJcblx0XHRmb3IgKGxldCByYWRpb19pdGVtSW5kZXggaW4gdGhpcy5kYXRhLm9wdGlvbnMpIHtcclxuXHRcdFx0aWYgKE51bWJlcihyYWRpb19pdGVtSW5kZXgpID09IGluZGV4KSB7XHJcblx0XHRcdFx0dGhpcy5kYXRhLm9wdGlvbnNbcmFkaW9faXRlbUluZGV4XS5zZWxlY3RlZCA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbCA9IHRoaXMuZGF0YS5vcHRpb25zW3JhZGlvX2l0ZW1JbmRleF0ubGFiZWw7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5kYXRhLm9wdGlvbnNbcmFkaW9faXRlbUluZGV4XS5zZWxlY3RlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdC8vIHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWwgPSB1bmRlZmluZWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmRhdGEucHJvcHMuY3VycmVudFZhbHVlID09IHVuZGVmaW5lZCB8fCB0aGlzLmRhdGEucHJvcHMuY3VycmVudFZhbHVlID09ICcnIHx8IHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWUgPT0gbnVsbClcclxuXHRcdFx0dGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9IDA7XHJcblxyXG5cdFx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0dGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9IHBhcnNlRmxvYXQodGhpcy5kYXRhLm9wdGlvbnNbaW5kZXhdLnZhbHVlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5zdGF0dXMgPT0gJ0xJVkUnKSB7XHJcblx0XHRcdC8qIGlmIGtleSBpcyB1bmRlZmluZWQgdGhlbiBwdXNoIGluIGFycmF5ICovXHJcblx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLl9hbmFseXRpY1NlcnZpY2UuZ2V0VmlzaXRvcktleSgpJywgdGhpcy5fYW5hbHl0aWNTZXJ2aWNlLmdldFZpc2l0b3JLZXkoKSk7XHJcblx0XHRcdGlmICh0aGlzLl9hbmFseXRpY1NlcnZpY2UuZ2V0VmlzaXRvcktleSgpID09ICcnKVxyXG5cdFx0XHRcdHRoaXMuX2FuYWx5dGljU2VydmljZS5zZXRWaXNpdG9yQW5zd2Vycyh0aGlzLmRhdGEpO1xyXG5cdFx0XHQvKiAgKi9cclxuXHRcdFx0aWYgKHRoaXMuX2FuYWx5dGljU2VydmljZS5nZXRWaXNpdG9yQW5zd2VycygpLmxlbmd0aCA8PSAxIHx8IHRoaXMuX2FuYWx5dGljU2VydmljZS5nZXRWaXNpdG9yS2V5KCkpIHtcclxuXHRcdFx0XHR0aGlzLl9hbmFseXRpY1NlcnZpY2Uuc2F2ZVN0YXRzKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLCB0aGlzLmRhdGEsIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZSgpKVxyXG5cdFx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRcdChyZXNwb25zZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuX2FuYWx5dGljU2VydmljZS5zZXRWaXNpdG9yS2V5KHJlc3BvbnNlLmtleSk7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPT0gJ0FycmF5IFVwZGF0ZWQnKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2FuYWx5dGljU2VydmljZS5yZUluaXRWaXNpdG9yQW5zd2VycygpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdChlcnJvcjogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGVtcGxhdGVUeXBlID09ICdSZWNvbW1lbmRhdGlvbicpIHtcclxuXHRcdFx0dGhpcy5yZWNvbW1lbmRhdGlvblNlcnZpY2UuZ2V0UmVjb21lbmRlZFJlc3VsdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=
