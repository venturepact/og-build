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
var analytic_service_1 = require('../../services/analytic.service');
var JSONBuilder_service_1 = require('../../../+builder/services/JSONBuilder.service');
var NumericField = (function () {
    function NumericField(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    NumericField.prototype.ngOnInit = function () {
        this.data.props.currentValue = '';
        this.data.props.currentLabel = '';
    };
    Object.defineProperty(NumericField.prototype, "isValid", {
        get: function () {
            if (this.form.controls[this.data._id].errors) {
                if (this.form.controls[this.data._id].errors['required']) {
                    this.ValidationMessage = this.data.config.validations.required.message;
                    return false;
                }
                else {
                    if (this.form.controls[this.data._id].errors['minval']) {
                        this.ValidationMessage = 'Minimum ' + this.data.props.minVal + ' value required!';
                        return false;
                    }
                    else {
                        if (this.form.controls[this.data._id].errors['maxval']) {
                            this.ValidationMessage = "Can't Go beyond " + this.data.props.maxVal;
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                }
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    NumericField.prototype.onChange = function (event) {
        this.data.props.currentLabel = event.target.value;
    };
    NumericField.prototype.onBlur = function () {
        var _this = this;
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
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NumericField.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], NumericField.prototype, "form", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NumericField.prototype, "devMode", void 0);
    NumericField = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'numericfield',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            pipes: [index_1.SafeHtml],
            viewProviders: [],
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'numericfield.component.html'
        }), 
        __metadata('design:paramtypes', [analytic_service_1.AnalyticService, JSONBuilder_service_1.JSONBuilder])
    ], NumericField);
    return NumericField;
}());
exports.NumericField = NumericField;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9udW1lcmljZmllbGQvbnVtZXJpY2ZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBELGVBQWUsQ0FBQyxDQUFBO0FBQzFFLHNCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLHNCQUFvRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3JFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLG9DQUE0QixnREFBZ0QsQ0FBQyxDQUFBO0FBVTdFO0lBT0Msc0JBQW9CLGdCQUFpQyxFQUFVLGlCQUE4QjtRQUF6RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO0lBRTVGLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRixzQkFBSSxpQ0FBTzthQUFYO1lBRUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUU5QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztvQkFDdkUsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDZCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUVQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDeEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7d0JBQ2xGLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2QsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7NEJBQ3JFLE1BQU0sQ0FBQyxLQUFLLENBQUM7d0JBQ2QsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUFDLENBQUM7b0JBRXhCLENBQUM7Z0JBQ0YsQ0FBQztZQUNGLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsQ0FBQztRQUVGLENBQUM7OztPQUFBO0lBRUQsK0JBQVEsR0FBUixVQUFTLEtBQVU7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ25ELENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQUEsaUJBcUJFO1FBcEJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUUzRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXJELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLENBQUM7cUJBQ25JLFNBQVMsQ0FDVixVQUFDLFFBQWE7b0JBQ1osS0FBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDO3dCQUN0QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDaEQsQ0FBQyxFQUNELFVBQUMsS0FBVTtvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixDQUFDLENBQ0EsQ0FBQztZQUNOLENBQUM7UUFFSCxDQUFDO0lBQ0gsQ0FBQztJQWxFRDtRQUFDLFlBQUssRUFBRTs7OENBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7OENBQUE7SUFDVDtRQUFDLFlBQUssRUFBRTs7aURBQUE7SUFaVDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbEIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsVUFBVSxFQUFFLENBQUMsZ0NBQXdCLENBQUM7WUFDdkMsS0FBSyxFQUFFLENBQUMsZ0JBQVEsQ0FBQztZQUNoQixhQUFhLEVBQUUsRUFBRTtZQUNsQixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtZQUNwQyxXQUFXLEVBQUUsNkJBQTZCO1NBQzNDLENBQUM7O29CQUFBO0lBcUVGLG1CQUFDO0FBQUQsQ0FwRUEsQUFvRUMsSUFBQTtBQXBFWSxvQkFBWSxlQW9FeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29udHJvbHMvbnVtZXJpY2ZpZWxkL251bWVyaWNmaWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJy4uLy4uL3BpcGVzL2luZGV4JztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFuYWx5dGljU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbnVtZXJpY2ZpZWxkJyxcclxuICBkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcclxuXHRwaXBlczogW1NhZmVIdG1sXSxcclxuICB2aWV3UHJvdmlkZXJzOiBbXSxcclxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnbnVtZXJpY2ZpZWxkLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtZXJpY0ZpZWxkIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIGRldk1vZGU6IGFueTtcclxuICBWYWxpZGF0aW9uTWVzc2FnZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2FuYWx5dGljU2VydmljZTogQW5hbHl0aWNTZXJ2aWNlLCBwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcikge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9ICcnO1xyXG5cdFx0dGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbCA9ICcnO1xyXG4gIH1cclxuXHJcblx0Z2V0IGlzVmFsaWQoKSB7XHJcblxyXG5cdFx0aWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmRhdGEuX2lkXS5lcnJvcnMpIHtcclxuXHJcblx0XHRcdGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5kYXRhLl9pZF0uZXJyb3JzWydyZXF1aXJlZCddKSB7XHJcblx0XHRcdFx0dGhpcy5WYWxpZGF0aW9uTWVzc2FnZSA9IHRoaXMuZGF0YS5jb25maWcudmFsaWRhdGlvbnMucmVxdWlyZWQubWVzc2FnZTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5kYXRhLl9pZF0uZXJyb3JzWydtaW52YWwnXSkge1xyXG5cdFx0XHRcdFx0dGhpcy5WYWxpZGF0aW9uTWVzc2FnZSA9ICdNaW5pbXVtICcgKyB0aGlzLmRhdGEucHJvcHMubWluVmFsICsgJyB2YWx1ZSByZXF1aXJlZCEnO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZGF0YS5faWRdLmVycm9yc1snbWF4dmFsJ10pIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5WYWxpZGF0aW9uTWVzc2FnZSA9IFwiQ2FuJ3QgR28gYmV5b25kIFwiICsgdGhpcy5kYXRhLnByb3BzLm1heFZhbDtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdFxyXG5cdG9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuXHRcdHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50TGFiZWwgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblx0fVxyXG5cclxuXHRvbkJsdXIoKSB7XHJcbiAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5zdGF0dXMgPT0gJ0xJVkUnKSB7XHJcbiAgICAgIC8qIGlmIGtleSBpcyB1bmRlZmluZWQgdGhlbiBwdXNoIGluIGFycmF5ICovXHJcbiAgICAgIGlmICh0aGlzLl9hbmFseXRpY1NlcnZpY2UuZ2V0VmlzaXRvcktleSgpID09ICcnKVxyXG4gICAgICAgIHRoaXMuX2FuYWx5dGljU2VydmljZS5zZXRWaXNpdG9yQW5zd2Vycyh0aGlzLmRhdGEpO1xyXG4gICAgICAvKiAgKi9cclxuICAgICAgaWYgKHRoaXMuX2FuYWx5dGljU2VydmljZS5nZXRWaXNpdG9yQW5zd2VycygpLmxlbmd0aCA8PSAxIHx8IHRoaXMuX2FuYWx5dGljU2VydmljZS5nZXRWaXNpdG9yS2V5KCkpIHtcclxuICAgICAgICB0aGlzLl9hbmFseXRpY1NlcnZpY2Uuc2F2ZVN0YXRzKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLCB0aGlzLmRhdGEsIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZSgpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuYWx5dGljU2VydmljZS5zZXRWaXNpdG9yS2V5KHJlc3BvbnNlLmtleSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gJ0FycmF5IFVwZGF0ZWQnKVxyXG4gICAgICAgICAgICAgdGhpcy5fYW5hbHl0aWNTZXJ2aWNlLnJlSW5pdFZpc2l0b3JBbnN3ZXJzKCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
