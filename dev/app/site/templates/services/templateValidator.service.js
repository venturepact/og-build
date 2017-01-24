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
var forms_1 = require('@angular/forms');
var customValidation_1 = require('./customValidation');
var JSONBuilder_service_1 = require('../../+builder/services/JSONBuilder.service');
var TemplateValidatorService = (function () {
    function TemplateValidatorService(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    TemplateValidatorService.prototype.getFormGroups = function () {
        var _this = this;
        if (!this.forms) {
            this.jsonBuilderHelper.setValidatorService(this);
            var pages = this.jsonBuilderHelper.getJSONBuilt().pages;
            var forms_2 = {};
            pages.forEach(function (page) {
                if (page.type === 'Questionnaire') {
                    page.sections.forEach(function (section) {
                        forms_2[section._id] = _this.toFormGroup(section.items);
                    });
                }
            });
            this.forms = forms_2;
        }
        return this.forms;
    };
    TemplateValidatorService.prototype.toFormGroup = function (questions) {
        var _this = this;
        var group = {};
        questions.forEach(function (question) {
            var validators = [];
            if (question.type === 'checkbox' || question.type === 'radio_button' || question.type === 'switchbox') {
                group[question._id] = [];
                question.options.forEach(function (option, index) {
                    group[question._id][index] = new forms_1.FormControl('');
                });
                if (question.config.validations.required.status === true)
                    group[question._id] = new forms_1.FormGroup(group[question._id], {}, customValidation_1.CustomValidator.checkboxRequired(question));
                else
                    group[question._id] = new forms_1.FormGroup(group[question._id]);
            }
            else {
                validators = _this.composeValidators(question.config.validations, question);
                group[question._id] = new forms_1.FormControl('', forms_1.Validators.compose(validators));
            }
        });
        return new forms_1.FormGroup(group);
    };
    TemplateValidatorService.prototype.composeValidators = function (validator, question) {
        var validators = [];
        if (question.type === 'textfield' && question.config.type === 'number') {
            validators.push(customValidation_1.CustomValidator.minimum(question.props.minVal));
            validators.push(customValidation_1.CustomValidator.maximum(question.props.maxVal));
        }
        if (validator.required.status === true && question.type === 'textfield') {
            validators.push(forms_1.Validators.required);
            if (question.config.type === 'email') {
                validators.push(customValidation_1.CustomValidator.emailFormat);
            }
            else if (question.config.type === 'text') {
                validators.push(forms_1.Validators.minLength(question.props.minVal));
            }
        }
        else {
            if (validator.required.status === true)
                validators.push(forms_1.Validators.required);
        }
        return validators;
    };
    TemplateValidatorService.prototype.updateFormGroup = function (section) {
        var self = this;
        self.forms[section._id] = [];
        self.forms[section._id] = this.toFormGroup(section.items);
    };
    TemplateValidatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], TemplateValidatorService);
    return TemplateValidatorService;
}());
exports.TemplateValidatorService = TemplateValidatorService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9zZXJ2aWNlcy90ZW1wbGF0ZVZhbGlkYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFDN0Msc0JBQW1ELGdCQUFnQixDQUFDLENBQUE7QUFLcEUsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsb0NBQTRCLDZDQUE2QyxDQUFDLENBQUE7QUFHMUU7SUFHSSxrQ0FBb0IsaUJBQThCO1FBQTlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtJQUFJLENBQUM7SUFFdkQsZ0RBQWEsR0FBYjtRQUFBLGlCQWlCQztRQWZHLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsSUFBSSxLQUFLLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNoRSxJQUFJLE9BQUssR0FBUSxFQUFFLENBQUM7WUFFcEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ2QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksS0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDO29CQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87d0JBQ3pCLE9BQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pELENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBSyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FB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LENBQUEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQSxDQUFDO2dCQUN0QyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqRSxDQUFDO1FBQ0wsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDO2dCQUNsQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFHN0MsQ0FBQztRQUVELE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVELGtEQUFlLEdBQWYsVUFBZ0IsT0FBZ0I7UUFDNUIsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBNUVMO1FBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7SUE2RWIsK0JBQUM7QUFBRCxDQTVFQSxBQTRFQyxJQUFBO0FBNUVZLGdDQUF3QiwyQkE0RXBDLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL3NlcnZpY2VzL3RlbXBsYXRlVmFsaWRhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi8rYnVpbGRlci9tb2RlbHMvcGFnZS5tb2RlbCc7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi8rYnVpbGRlci9tb2RlbHMvaXRlbS5tb2RlbCc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuLi8uLi8rYnVpbGRlci9tb2RlbHMvc2VjdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7Q3VzdG9tVmFsaWRhdG9yfSBmcm9tICcuL2N1c3RvbVZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVWYWxpZGF0b3JTZXJ2aWNlIHtcclxuXHJcbiAgICBmb3JtczogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIpIHsgfVxyXG5cclxuICAgIGdldEZvcm1Hcm91cHMoKTogRm9ybUdyb3VwW10ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5mb3Jtcyk7XHJcbiAgICAgICAgaWYoIXRoaXMuZm9ybXMpIHtcclxuICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5zZXRWYWxpZGF0b3JTZXJ2aWNlKHRoaXMpO1xyXG4gICAgICAgICAgICBsZXQgcGFnZXM6IFBhZ2VbXSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkucGFnZXM7XHJcbiAgICAgICAgICAgIGxldCBmb3JtczogYW55ID0ge307XHJcblxyXG4gICAgICAgICAgICBwYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocGFnZS50eXBlPT09J1F1ZXN0aW9ubmFpcmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZS5zZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3Jtc1tzZWN0aW9uLl9pZF0gPSB0aGlzLnRvRm9ybUdyb3VwKHNlY3Rpb24uaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtcyA9IGZvcm1zO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtcztcclxuICAgIH1cclxuXHJcbiAgICB0b0Zvcm1Hcm91cChxdWVzdGlvbnM6IEl0ZW1bXSk6IEZvcm1Hcm91cCB7XHJcbiAgICAgICAgbGV0IGdyb3VwOiBhbnkgPSB7fTtcclxuXHJcbiAgICAgICAgcXVlc3Rpb25zLmZvckVhY2gocXVlc3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRhdG9yczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgaWYocXVlc3Rpb24udHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBxdWVzdGlvbi50eXBlID09PSAncmFkaW9fYnV0dG9uJyB8fCBxdWVzdGlvbi50eXBlID09PSAnc3dpdGNoYm94Jykge1xyXG4gICAgICAgICAgICAgICAgZ3JvdXBbcXVlc3Rpb24uX2lkXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgIHF1ZXN0aW9uLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBhbnksIGluZGV4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cFtxdWVzdGlvbi5faWRdW2luZGV4XSA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgaWYocXVlc3Rpb24uY29uZmlnLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cz09PXRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBbcXVlc3Rpb24uX2lkXSA9IG5ldyBGb3JtR3JvdXAoZ3JvdXBbcXVlc3Rpb24uX2lkXSx7fSxDdXN0b21WYWxpZGF0b3IuY2hlY2tib3hSZXF1aXJlZChxdWVzdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwW3F1ZXN0aW9uLl9pZF0gPSBuZXcgRm9ybUdyb3VwKGdyb3VwW3F1ZXN0aW9uLl9pZF0pO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzID0gdGhpcy5jb21wb3NlVmFsaWRhdG9ycyhxdWVzdGlvbi5jb25maWcudmFsaWRhdGlvbnMsIHF1ZXN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGdyb3VwW3F1ZXN0aW9uLl9pZF0gPSBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMuY29tcG9zZSh2YWxpZGF0b3JzKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAoZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvc2VWYWxpZGF0b3JzKHZhbGlkYXRvcjogYW55LCBxdWVzdGlvbjphbnkpOiBhbnlbXSB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRvcnM6IGFueVtdID0gW107XHJcbiAgICAgICAgaWYocXVlc3Rpb24udHlwZSA9PT0gJ3RleHRmaWVsZCcgJiYgcXVlc3Rpb24uY29uZmlnLnR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goQ3VzdG9tVmFsaWRhdG9yLm1pbmltdW0ocXVlc3Rpb24ucHJvcHMubWluVmFsKSk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goQ3VzdG9tVmFsaWRhdG9yLm1heGltdW0ocXVlc3Rpb24ucHJvcHMubWF4VmFsKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICBpZih2YWxpZGF0b3IucmVxdWlyZWQuc3RhdHVzID09PSB0cnVlICYmIHF1ZXN0aW9uLnR5cGUgPT09ICd0ZXh0ZmllbGQnICkge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgICAgICAgIC8vdmFsaWRhdGlvbiBmb3IgbnVtZXJpYyBmaWVsZFxyXG4gICAgICAgICAgICAgaWYgKHF1ZXN0aW9uLmNvbmZpZy50eXBlID09PSAnZW1haWwnKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goQ3VzdG9tVmFsaWRhdG9yLmVtYWlsRm9ybWF0KTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocXVlc3Rpb24uY29uZmlnLnR5cGUgPT09ICd0ZXh0Jyl7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgocXVlc3Rpb24ucHJvcHMubWluVmFsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHZhbGlkYXRvci5yZXF1aXJlZC5zdGF0dXMgPT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgICAgLy8gaWYodmFsaWRhdG9yLm1pbkxlbmd0aC5zdGF0dXMgPT09IHRydWUpXHJcbiAgICAgICAgLy8gICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChxdWVzdGlvbi5wcm9wcy5taW5WYWwpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0b3JzO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUZvcm1Hcm91cChzZWN0aW9uOiBTZWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IHNlbGY6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5mb3Jtc1tzZWN0aW9uLl9pZF0gPSBbXTtcclxuICAgICAgICBzZWxmLmZvcm1zW3NlY3Rpb24uX2lkXSA9IHRoaXMudG9Gb3JtR3JvdXAoc2VjdGlvbi5pdGVtcyk7XHJcbiAgICB9XHJcbn1cclxuIl19
