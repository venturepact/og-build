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
var EmailField = (function () {
    function EmailField(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    EmailField.prototype.ngOnInit = function () {
        this.data.props.currentValue = this.data.props.defaultValue;
    };
    Object.defineProperty(EmailField.prototype, "isValid", {
        get: function () {
            if (this.form.controls[this.data._id].errors) {
                return !this.form.controls[this.data._id].errors['required'];
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    EmailField.prototype.onBlur = function () {
        console.log('email');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EmailField.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], EmailField.prototype, "form", void 0);
    EmailField = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'emailfield',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            pipes: [index_1.SafeHtml],
            viewProviders: [],
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'emailfield.component.html'
        }), 
        __metadata('design:paramtypes', [analytic_service_1.AnalyticService, JSONBuilder_service_1.JSONBuilder])
    ], EmailField);
    return EmailField;
}());
exports.EmailField = EmailField;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9lbWFpbGZpZWxkL2VtYWlsZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEQsZUFBZSxDQUFDLENBQUE7QUFDMUUsc0JBQXlCLG1CQUFtQixDQUFDLENBQUE7QUFDN0Msc0JBQW9ELGdCQUFnQixDQUFDLENBQUE7QUFDckUsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsb0NBQTRCLGdEQUFnRCxDQUFDLENBQUE7QUFXN0U7SUFLRSxvQkFBb0IsZ0JBQWlDLEVBQVUsaUJBQThCO1FBQXpFLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWE7SUFFN0YsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO0lBQ2hFLENBQUM7SUFDRCxzQkFBSSwrQkFBTzthQUFYO1lBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvRCxDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1FBRUosQ0FBQzs7O09BQUE7SUFFQSwyQkFBTSxHQUFOO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBdEJEO1FBQUMsWUFBSyxFQUFFOzs0Q0FBQTtJQUVSO1FBQUMsWUFBSyxFQUFFOzs0Q0FBQTtJQWJWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztZQUN2QyxLQUFLLEVBQUMsQ0FBQyxnQkFBUSxDQUFDO1lBQ2YsYUFBYSxFQUFFLEVBQUU7WUFDbEIsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDcEMsV0FBVyxFQUFFLDJCQUEyQjtTQUN6QyxDQUFDOztrQkFBQTtJQTJCRixpQkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6Qlksa0JBQVUsYUF5QnRCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL2NvbnRyb2xzL2VtYWlsZmllbGQvZW1haWxmaWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJy4uLy4uL3BpcGVzL2luZGV4JztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFuYWx5dGljU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnZW1haWxmaWVsZCcsXHJcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU10sXHJcblx0cGlwZXM6W1NhZmVIdG1sXSxcclxuICB2aWV3UHJvdmlkZXJzOiBbXSxcclxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnZW1haWxmaWVsZC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFbWFpbEZpZWxkIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FuYWx5dGljU2VydmljZTogQW5hbHl0aWNTZXJ2aWNlLCBwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcikge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9ICAgdGhpcy5kYXRhLnByb3BzLmRlZmF1bHRWYWx1ZTtcclxuICB9XHJcbiAgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICBpZih0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5kYXRhLl9pZF0uZXJyb3JzKSB7XHJcblx0XHQgICAgcmV0dXJuICF0aGlzLmZvcm0uY29udHJvbHNbdGhpcy5kYXRhLl9pZF0uZXJyb3JzWydyZXF1aXJlZCddO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHR9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdlbWFpbCcpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
