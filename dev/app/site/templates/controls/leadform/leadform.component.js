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
var customValidation_1 = require('../../services/customValidation');
var themeColor_directive_1 = require('../../components/themeColor.directive');
var analytic_service_1 = require('../../services/analytic.service');
var JSONBuilder_service_1 = require('../../../+builder/services/JSONBuilder.service');
var LeadForm = (function () {
    function LeadForm(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.controlOutput = new core_1.EventEmitter();
        this.obj = {};
    }
    LeadForm.prototype.ngOnInit = function () {
    };
    LeadForm.prototype.onTouched = function (i) {
        jQuery('#touched' + this.data._id + i).show();
    };
    LeadForm.prototype.onSubmit = function (form) {
        var _this = this;
        for (var i in this.form.controls) {
            jQuery('#touched' + this.data._id + i).show();
            this.form.controls[i].markAsTouched();
        }
        if (form.valid) {
            this.controlOutput.emit(true);
        }
        for (var _i = 0, _a = this.data.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            this.obj[field.type] = field.value;
        }
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE' && form['_status'] == 'VALID') {
            ga('devteam.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + this.jsonBuilderHelper.getOtherVisibleLeadForm() + ' Leadform', 'Submitted', this.jsonBuilderHelper.getJSONBuilt().url);
            if (this.jsonBuilderHelper.getJSONBuilt().ga)
                ga('userCustom.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + this.jsonBuilderHelper.getOtherVisibleLeadForm() + ' Leadform', 'Submitted', this.jsonBuilderHelper.getJSONBuilt().url);
            this._analyticService.saveLead(this.jsonBuilderHelper.getJSONBuilt()._id, this.obj, this.jsonBuilderHelper.getTemplateQuestionare())
                .subscribe(function (response) {
                _this._analyticService.setVisitorKey(response.key);
            }, function (error) {
                console.log(error);
            });
        }
    };
    LeadForm.prototype.formGroup = function () {
        if (!this.form || this.data.fields.length > Object.keys(this.form.controls).length) {
            var group_1 = {};
            this.data.fields.forEach(function (field, index) {
                var validators = [];
                if (field.validations.required.status === true) {
                    validators.push(forms_1.Validators.required);
                    if (field.type === 'email')
                        validators.push(customValidation_1.CustomValidator.emailFormat);
                    if (field.type === 'tel')
                        validators.push(customValidation_1.CustomValidator.phoneNumer);
                }
                group_1[index] = new forms_1.FormControl(field.value || '', forms_1.Validators.compose(validators));
            });
            this.form = new forms_1.FormGroup(group_1);
            return this.form;
        }
        return this.form;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LeadForm.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LeadForm.prototype, "page", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LeadForm.prototype, "devMode", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LeadForm.prototype, "controlOutput", void 0);
    LeadForm = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'leadform',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, themeColor_directive_1.ThemeColor],
            viewProviders: [],
            templateUrl: 'leadform.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [analytic_service_1.AnalyticService, JSONBuilder_service_1.JSONBuilder])
    ], LeadForm);
    return LeadForm;
}());
exports.LeadForm = LeadForm;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9sZWFkZm9ybS9sZWFkZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpRixlQUFlLENBQUMsQ0FBQTtBQUNqRyxzQkFBNkUsZ0JBQWdCLENBQUMsQ0FBQTtBQUM5RixpQ0FBOEIsaUNBQWlDLENBQUMsQ0FBQTtBQUNoRSxxQ0FBMkIsdUNBQXVDLENBQUMsQ0FBQTtBQUNuRSxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxvQ0FBNEIsZ0RBQWdELENBQUMsQ0FBQTtBQWM3RTtJQVVFLGtCQUFvQixnQkFBaUMsRUFBVSxpQkFBOEI7UUFBekUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUxuRixrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzdDLFFBQUcsR0FBUSxFQUFFLENBQUM7SUFNZCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCw0QkFBUyxHQUFULFVBQVUsQ0FBTTtRQUNkLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxJQUFlO1FBQXhCLGlCQWdDQztRQS9CQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDO1FBQ0Qs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QUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDO3dCQUN2QixVQUFVLENBQUMsSUFBSSxDQUFDLGtDQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBSUQsT0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksbUJBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BGLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFTLENBQUMsT0FBSyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUE1RUQ7UUFBQyxZQUFLLEVBQUU7OzBDQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzBDQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzZDQUFBO0lBRVI7UUFBQyxhQUFNLEVBQUU7O21EQUFBO0lBYlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixFQUFFLGlDQUFVLENBQUM7WUFDbEQsYUFBYSxFQUFFLEVBQUU7WUFDakIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN0QyxDQUFDOztnQkFBQTtJQTJGRixlQUFDO0FBQUQsQ0ExRkEsQUEwRkMsSUFBQTtBQTFGWSxnQkFBUSxXQTBGcEIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29udHJvbHMvbGVhZGZvcm0vbGVhZGZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Q3VzdG9tVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jdXN0b21WYWxpZGF0aW9uJztcclxuaW1wb3J0IHsgVGhlbWVDb2xvciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGhlbWVDb2xvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBbmFseXRpY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8rYnVpbGRlci9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBGdW5jdGlvbjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdsZWFkZm9ybScsXHJcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgVGhlbWVDb2xvcl0sXHJcbiAgdmlld1Byb3ZpZGVyczogW10sXHJcbiAgdGVtcGxhdGVVcmw6ICdsZWFkZm9ybS5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGVhZEZvcm0gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuICBASW5wdXQoKSBwYWdlOiBhbnk7XHJcbiAgQElucHV0KCkgZGV2TW9kZTogYW55O1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGNvbnRyb2xPdXRwdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgb2JqOiBhbnkgPSB7fTtcclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgcHJpdmF0ZSBzYXZpbmdEYXRhOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FuYWx5dGljU2VydmljZTogQW5hbHl0aWNTZXJ2aWNlLCBwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcikge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJqc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKVwiLHRoaXMucGFnZSk7XHJcbiAgfVxyXG4gIG9uVG91Y2hlZChpOiBhbnkpIHtcclxuICAgIGpRdWVyeSgnI3RvdWNoZWQnICsgdGhpcy5kYXRhLl9pZCArIGkpLnNob3coKTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KGZvcm06IEZvcm1Hcm91cCkge1xyXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLmZvcm0uY29udHJvbHMpIHtcclxuICAgICAgalF1ZXJ5KCcjdG91Y2hlZCcgKyB0aGlzLmRhdGEuX2lkICsgaSkuc2hvdygpO1xyXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbaV0ubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGZvcm0udmFsaWQpIHtcclxuICAgICAgdGhpcy5jb250cm9sT3V0cHV0LmVtaXQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgZmllbGQgb2YgdGhpcy5kYXRhLmZpZWxkcykge1xyXG4gICAgICB0aGlzLm9ialtmaWVsZC50eXBlXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnN0YXR1cyA9PSAnTElWRScgJiYgZm9ybVsnX3N0YXR1cyddID09ICdWQUxJRCcpIHtcclxuICAgICAgLy9TRU5EIEFuYWx5dGljIFxyXG4gICAgICAvL091cnNcclxuICAgICAgZ2EoJ2RldnRlYW0uc2VuZCcsICdldmVudCcsIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZSArICcgJyArIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0T3RoZXJWaXNpYmxlTGVhZEZvcm0oKSArICcgTGVhZGZvcm0nLCAnU3VibWl0dGVkJywgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS51cmwpO1xyXG4gICAgICAvL1VzZXJzXHJcbiAgICAgIGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmdhKVxyXG4gICAgICAgIGdhKCd1c2VyQ3VzdG9tLnNlbmQnLCAnZXZlbnQnLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUgKyAnICcgKyB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldE90aGVyVmlzaWJsZUxlYWRGb3JtKCkgKyAnIExlYWRmb3JtJywgJ1N1Ym1pdHRlZCcsIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsKTtcclxuXHJcbiAgICAgIHRoaXMuX2FuYWx5dGljU2VydmljZS5zYXZlTGVhZCh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLl9pZCwgdGhpcy5vYmosIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZSgpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuX2FuYWx5dGljU2VydmljZS5zZXRWaXNpdG9yS2V5KHJlc3BvbnNlLmtleSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGZvcm1Hcm91cCgpOiBGb3JtR3JvdXAge1xyXG4gICAgaWYgKCF0aGlzLmZvcm0gfHwgdGhpcy5kYXRhLmZpZWxkcy5sZW5ndGggPiBPYmplY3Qua2V5cyh0aGlzLmZvcm0uY29udHJvbHMpLmxlbmd0aCkge1xyXG4gICAgICBsZXQgZ3JvdXA6IGFueSA9IHt9O1xyXG4gICAgICB0aGlzLmRhdGEuZmllbGRzLmZvckVhY2goKGZpZWxkOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBsZXQgdmFsaWRhdG9yczogYW55W10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdlbWFpbCcpXHJcbiAgICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChDdXN0b21WYWxpZGF0b3IuZW1haWxGb3JtYXQpO1xyXG4gICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICd0ZWwnKVxyXG4gICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goQ3VzdG9tVmFsaWRhdG9yLnBob25lTnVtZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZihmaWVsZC52YWxpZGF0aW9ucy5tYXhMZW5ndGguc3RhdHVzPT09dHJ1ZSlcclxuICAgICAgICAvLyAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aCk7XHJcblxyXG4gICAgICAgIGdyb3VwW2luZGV4XSA9IG5ldyBGb3JtQ29udHJvbChmaWVsZC52YWx1ZSB8fCAnJywgVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkYXRvcnMpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZ3JvdXApO1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZm9ybTtcclxuICB9XHJcblxyXG4gIC8vICAgZ2V0IGlzUmVxdWlyZWQoKSB7XHJcbiAgLy8gICBpZih0aGlzLmZvcm1Hcm91cCgpLmVycm9ycykge1xyXG4gIC8vICAgICAgICAgcmV0dXJuICF0aGlzLmZvcm1Hcm91cCgpLmNvbnRyb2xzWydyZXF1aXJlZCddO1xyXG4gIC8vICAgICB9ZWxzZSB7XHJcbiAgLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAvLyAgICAgfVxyXG4gIC8vIH1cclxuICAvLyAgIGdldCBpc1ZhbGlkKCkge1xyXG4gIC8vICAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAoKS52YWxpZDtcclxuICAvLyAgIH1cclxuXHJcbn1cclxuIl19
