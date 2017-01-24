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
var themeColor_directive_1 = require('../../components/themeColor.directive');
var TextField = (function () {
    function TextField(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    TextField.prototype.ngOnInit = function () {
        this.data.props.currentValue = this.data.props.defaultValue;
        this.data.props.currentlabel = this.data.props.defaultValue;
    };
    Object.defineProperty(TextField.prototype, "isValid", {
        get: function () {
            if (this.form.controls[this.data._id].errors) {
                if (this.form.controls[this.data._id].errors['required']) {
                    this.ValidationMessage = this.data.config.validations.required.message + '!';
                    return false;
                }
                else if (this.form.controls[this.data._id].errors['minval']) {
                    this.ValidationMessage = 'Minimum ' + this.data.props.minVal + ' value required!';
                    return false;
                }
                else if (this.form.controls[this.data._id].errors['maxval']) {
                    this.ValidationMessage = "Can't Go beyond " + this.data.props.maxVal + '!';
                    return false;
                }
                else if (this.form.controls[this.data._id].errors['minlength']) {
                    this.ValidationMessage = 'Minimum ' + this.form.controls[this.data._id].errors['minlength'].requiredLength + ' character required!';
                    return false;
                }
                else if (this.form.controls[this.data._id].errors['EmailError']) {
                    this.ValidationMessage = 'Not A Valid Email!';
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    TextField.prototype.onBlur = function () {
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
    ], TextField.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TextField.prototype, "devMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], TextField.prototype, "form", void 0);
    TextField = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'textfield',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, themeColor_directive_1.ThemeColor],
            pipes: [index_1.SafeHtml],
            viewProviders: [],
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'textfield.component.html'
        }), 
        __metadata('design:paramtypes', [analytic_service_1.AnalyticService, JSONBuilder_service_1.JSONBuilder])
    ], TextField);
    return TextField;
}());
exports.TextField = TextField;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy90ZXh0ZmllbGQvdGV4dGZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJELGVBQWUsQ0FBQyxDQUFBO0FBQzNFLHNCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLHNCQUFvRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3JFLGlDQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBRWxFLG9DQUE0QixnREFBZ0QsQ0FBQyxDQUFBO0FBQzdFLHFDQUEyQix1Q0FBdUMsQ0FBQyxDQUFBO0FBV25FO0lBUUUsbUJBQW9CLGdCQUFpQyxFQUFVLGlCQUE4QjtRQUF6RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO0lBRTdGLENBQUM7SUFFRiw0QkFBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO0lBQzVELENBQUM7SUFFRixzQkFBSSw4QkFBTzthQUFYO1lBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUU5QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxD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Q0FBQztxQkFDbkksU0FBUyxDQUNWLFVBQUMsUUFBYTtvQkFDWixLQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEQsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxlQUFlLENBQUM7d0JBQ3JDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUNqRCxDQUFDLEVBQ0QsVUFBQyxLQUFVO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsQ0FDQSxDQUFDO1lBQ04sQ0FBQztRQUVILENBQUM7SUFDSCxDQUFDO0lBakVEO1FBQUMsWUFBSyxFQUFFOzsyQ0FBQTtJQUNUO1FBQUMsWUFBSyxFQUFFOzs4Q0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzsyQ0FBQTtJQVpUO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNsQixRQUFRLEVBQUUsV0FBVztZQUNyQixVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsRUFBRSxpQ0FBVSxDQUFDO1lBQ25ELEtBQUssRUFBRSxDQUFDLGdCQUFRLENBQUM7WUFDaEIsYUFBYSxFQUFFLEVBQUU7WUFDbEIsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDcEMsV0FBVyxFQUFFLDBCQUEwQjtTQUN4QyxDQUFDOztpQkFBQTtJQW9FRixnQkFBQztBQUFELENBbkVBLEFBbUVDLElBQUE7QUFuRVksaUJBQVMsWUFtRXJCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL2NvbnRyb2xzL3RleHRmaWVsZC90ZXh0ZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnLi4vLi4vcGlwZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQW5hbHl0aWNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHl0aWMuc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8rYnVpbGRlci9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGhlbWVDb2xvciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGhlbWVDb2xvci5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3RleHRmaWVsZCcsXHJcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgVGhlbWVDb2xvcl0sXHJcblx0cGlwZXM6IFtTYWZlSHRtbF0sXHJcbiAgdmlld1Byb3ZpZGVyczogW10sXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJ3RleHRmaWVsZC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRGaWVsZCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG5cdEBJbnB1dCgpIGRldk1vZGU6IGFueTtcclxuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHRWYWxpZGF0aW9uTWVzc2FnZTogc3RyaW5nO1xyXG5cdHByaXZhdGUgc2F2aW5nRGF0YTogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbmFseXRpY1NlcnZpY2U6IEFuYWx5dGljU2VydmljZSwgcHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIpIHtcclxuXHJcbiAgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWUgPSB0aGlzLmRhdGEucHJvcHMuZGVmYXVsdFZhbHVlO1xyXG5cdFx0dGhpcy5kYXRhLnByb3BzLmN1cnJlbnRsYWJlbCA9IHRoaXMuZGF0YS5wcm9wcy5kZWZhdWx0VmFsdWU7XHJcbiAgfVxyXG5cclxuXHRnZXQgaXNWYWxpZCgpIHtcclxuXHRcdGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5kYXRhLl9pZF0uZXJyb3JzKSB7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMuZGF0YS5faWRdLmVycm9yc1sncmVxdWlyZWQnXSkge1xyXG5cdFx0XHRcdHRoaXMuVmFsaWRhdGlvbk1lc3NhZ2UgPSB0aGlzLmRhdGEuY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLm1lc3NhZ2UgKyAnISc7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmRhdGEuX2lkXS5lcnJvcnNbJ21pbnZhbCddKSB7XHJcblx0XHRcdFx0dGhpcy5WYWxpZGF0aW9uTWVzc2FnZSA9ICdNaW5pbXVtICcgKyB0aGlzLmRhdGEucHJvcHMubWluVmFsICsgJyB2YWx1ZSByZXF1aXJlZCEnO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5kYXRhLl9pZF0uZXJyb3JzWydtYXh2YWwnXSkge1xyXG5cdFx0XHRcdHRoaXMuVmFsaWRhdGlvbk1lc3NhZ2UgPSBcIkNhbid0IEdvIGJleW9uZCBcIiArIHRoaXMuZGF0YS5wcm9wcy5tYXhWYWwgKyAnISc7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmRhdGEuX2lkXS5lcnJvcnNbJ21pbmxlbmd0aCddKSB7XHJcblx0XHRcdFx0dGhpcy5WYWxpZGF0aW9uTWVzc2FnZSA9ICdNaW5pbXVtICcgKyB0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5kYXRhLl9pZF0uZXJyb3JzWydtaW5sZW5ndGgnXS5yZXF1aXJlZExlbmd0aCArICcgY2hhcmFjdGVyIHJlcXVpcmVkISc7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmRhdGEuX2lkXS5lcnJvcnNbJ0VtYWlsRXJyb3InXSkge1xyXG5cdFx0XHRcdHRoaXMuVmFsaWRhdGlvbk1lc3NhZ2UgPSAnTm90IEEgVmFsaWQgRW1haWwhJztcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRvbkJsdXIoKSB7XHJcbiAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5zdGF0dXMgPT0gJ0xJVkUnKSB7XHJcbiAgICAgIC8qIGlmIGtleSBpcyB1bmRlZmluZWQgdGhlbiBwdXNoIGluIGFycmF5ICovXHJcbiAgICAgIGlmICh0aGlzLl9hbmFseXRpY1NlcnZpY2UuZ2V0VmlzaXRvcktleSgpID09ICcnKVxyXG4gICAgICAgIHRoaXMuX2FuYWx5dGljU2VydmljZS5zZXRWaXNpdG9yQW5zd2Vycyh0aGlzLmRhdGEpO1xyXG4gICAgICAvKiAgKi9cclxuICAgICAgaWYgKHRoaXMuX2FuYWx5dGljU2VydmljZS5nZXRWaXNpdG9yQW5zd2VycygpLmxlbmd0aCA8PSAxIHx8IHRoaXMuX2FuYWx5dGljU2VydmljZS5nZXRWaXNpdG9yS2V5KCkpIHtcclxuICAgICAgICB0aGlzLl9hbmFseXRpY1NlcnZpY2Uuc2F2ZVN0YXRzKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLCB0aGlzLmRhdGEsIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZSgpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuYWx5dGljU2VydmljZS5zZXRWaXNpdG9yS2V5KHJlc3BvbnNlLmtleSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gJ0FycmF5IFVwZGF0ZWQnKVxyXG4gICAgICAgICAgICAgIHRoaXMuX2FuYWx5dGljU2VydmljZS5yZUluaXRWaXNpdG9yQW5zd2VycygpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
