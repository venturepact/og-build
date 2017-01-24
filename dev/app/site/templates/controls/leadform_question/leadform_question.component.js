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
var LeadFormQuestion = (function () {
    function LeadFormQuestion(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.controlOutput = new core_1.EventEmitter();
        this.obj = {};
    }
    LeadFormQuestion.prototype.ngOnInit = function () {
    };
    LeadFormQuestion.prototype.onTouched = function (i) {
        jQuery('#touched' + this.data._id + i).show();
    };
    LeadFormQuestion.prototype.onSubmit = function (form) {
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
                ga('devteam.send', 'pageview', '/' + response.lead);
            }, function (error) {
                console.log(error);
            });
        }
    };
    LeadFormQuestion.prototype.formGroup = function () {
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
    ], LeadFormQuestion.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LeadFormQuestion.prototype, "devMode", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LeadFormQuestion.prototype, "controlOutput", void 0);
    LeadFormQuestion = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'leadform_question',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, themeColor_directive_1.ThemeColor],
            viewProviders: [],
            templateUrl: 'leadform_question.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [analytic_service_1.AnalyticService, JSONBuilder_service_1.JSONBuilder])
    ], LeadFormQuestion);
    return LeadFormQuestion;
}());
exports.LeadFormQuestion = LeadFormQuestion;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9sZWFkZm9ybV9xdWVzdGlvbi9sZWFkZm9ybV9xdWVzdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpRixlQUFlLENBQUMsQ0FBQTtBQUNqRyxzQkFBNkUsZ0JBQWdCLENBQUMsQ0FBQTtBQUM5RixpQ0FBOEIsaUNBQWlDLENBQUMsQ0FBQTtBQUNoRSxxQ0FBMkIsdUNBQXVDLENBQUMsQ0FBQTtBQUNuRSxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxvQ0FBNEIsZ0RBQWdELENBQUMsQ0FBQTtBQVk3RTtJQVFFLDBCQUFvQixnQkFBaUMsRUFBVSxpQkFBOEI7UUFBekUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUxuRixrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzdDLFFBQUcsR0FBUSxFQUFFLENBQUM7SUFNZCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCxvQ0FBUyxHQUFULFVBQVUsQ0FBTTtRQUNkLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxJQUFlO1FBQXhCLGlCQWlDQztRQWhDQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FB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QUFJLEtBQUssT0FBTyxDQUFDO3dCQUN6QixVQUFVLENBQUMsSUFBSSxDQUFDLGtDQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQy9DLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDO3dCQUN2QixVQUFVLENBQUMsSUFBSSxDQUFDLGtDQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBSUQsT0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksbUJBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BGLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFTLENBQUMsT0FBSyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUEzRUQ7UUFBQyxZQUFLLEVBQUU7O2tEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7OzJEQUFBO0lBWFg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsVUFBVSxFQUFFLENBQUMsZ0NBQXdCLEVBQUUsaUNBQVUsQ0FBQztZQUNsRCxhQUFhLEVBQUUsRUFBRTtZQUNqQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1NBQ3RDLENBQUM7O3dCQUFBO0lBMEZGLHVCQUFDO0FBQUQsQ0F6RkEsQUF5RkMsSUFBQTtBQXpGWSx3QkFBZ0IsbUJBeUY1QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9sZWFkZm9ybV9xdWVzdGlvbi9sZWFkZm9ybV9xdWVzdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtDdXN0b21WYWxpZGF0b3J9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2N1c3RvbVZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBUaGVtZUNvbG9yIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90aGVtZUNvbG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEFuYWx5dGljU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmRlY2xhcmUgdmFyIGdhOiBGdW5jdGlvbjtcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdsZWFkZm9ybV9xdWVzdGlvbicsXHJcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgVGhlbWVDb2xvcl0sXHJcbiAgdmlld1Byb3ZpZGVyczogW10sXHJcbiAgdGVtcGxhdGVVcmw6ICdsZWFkZm9ybV9xdWVzdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGVhZEZvcm1RdWVzdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG4gIEBJbnB1dCgpIGRldk1vZGU6IGFueTtcclxuICBAT3V0cHV0KCkgY29udHJvbE91dHB1dCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBvYmo6IGFueSA9IHt9O1xyXG4gIGZvcm06IEZvcm1Hcm91cDtcclxuICBwcml2YXRlIHNhdmluZ0RhdGE6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYW5hbHl0aWNTZXJ2aWNlOiBBbmFseXRpY1NlcnZpY2UsIHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZm9ybS0tLS1ncm91cFwiLHRoaXMuZm9ybUdyb3VwKCkuY29udHJvbHNbMV0pO1xyXG4gIH1cclxuICBvblRvdWNoZWQoaTogYW55KSB7XHJcbiAgICBqUXVlcnkoJyN0b3VjaGVkJyArIHRoaXMuZGF0YS5faWQgKyBpKS5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdChmb3JtOiBGb3JtR3JvdXApIHtcclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5mb3JtLmNvbnRyb2xzKSB7XHJcbiAgICAgIGpRdWVyeSgnI3RvdWNoZWQnICsgdGhpcy5kYXRhLl9pZCArIGkpLnNob3coKTtcclxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW2ldLm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIH1cclxuICAgIGlmIChmb3JtLnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuY29udHJvbE91dHB1dC5lbWl0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGZpZWxkIG9mIHRoaXMuZGF0YS5maWVsZHMpIHtcclxuICAgICAgdGhpcy5vYmpbZmllbGQudHlwZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5zdGF0dXMgPT0gJ0xJVkUnICYmIGZvcm1bJ19zdGF0dXMnXSA9PSAnVkFMSUQnKSB7XHJcbiAgICAgIC8vU0VORCBBbmFseXRpYyBcclxuICAgICAgLy9PdXJzXHJcbiAgICAgIGdhKCdkZXZ0ZWFtLnNlbmQnLCAnZXZlbnQnLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUgKyAnICcgKyB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldE90aGVyVmlzaWJsZUxlYWRGb3JtKCkgKyAnIExlYWRmb3JtJywgJ1N1Ym1pdHRlZCcsIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsKTtcclxuICAgICAgLy9Vc2Vyc1xyXG4gICAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5nYSlcclxuICAgICAgICBnYSgndXNlckN1c3RvbS5zZW5kJywgJ2V2ZW50JywgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lICsgJyAnICsgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRPdGhlclZpc2libGVMZWFkRm9ybSgpICsgJyBMZWFkZm9ybScsICdTdWJtaXR0ZWQnLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybCk7XHJcblxyXG4gICAgICB0aGlzLl9hbmFseXRpY1NlcnZpY2Uuc2F2ZUxlYWQodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5faWQsIHRoaXMub2JqLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmUoKSlcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9hbmFseXRpY1NlcnZpY2Uuc2V0VmlzaXRvcktleShyZXNwb25zZS5rZXkpO1xyXG4gICAgICAgICAgZ2EoJ2RldnRlYW0uc2VuZCcsICdwYWdldmlldycsICcvJyArIHJlc3BvbnNlLmxlYWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBmb3JtR3JvdXAoKTogRm9ybUdyb3VwIHtcclxuICAgIGlmICghdGhpcy5mb3JtIHx8IHRoaXMuZGF0YS5maWVsZHMubGVuZ3RoID4gT2JqZWN0LmtleXModGhpcy5mb3JtLmNvbnRyb2xzKS5sZW5ndGgpIHtcclxuICAgICAgbGV0IGdyb3VwOiBhbnkgPSB7fTtcclxuICAgICAgdGhpcy5kYXRhLmZpZWxkcy5mb3JFYWNoKChmaWVsZDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRvcnM6IGFueVtdID0gW107XHJcblxyXG4gICAgICAgIGlmIChmaWVsZC52YWxpZGF0aW9ucy5yZXF1aXJlZC5zdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgICAgIHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnZW1haWwnKVxyXG4gICAgICAgICAgICB2YWxpZGF0b3JzLnB1c2goQ3VzdG9tVmFsaWRhdG9yLmVtYWlsRm9ybWF0KTtcclxuICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAndGVsJylcclxuICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKEN1c3RvbVZhbGlkYXRvci5waG9uZU51bWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYoZmllbGQudmFsaWRhdGlvbnMubWF4TGVuZ3RoLnN0YXR1cz09PXRydWUpXHJcbiAgICAgICAgLy8gICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgpO1xyXG5cclxuICAgICAgICBncm91cFtpbmRleF0gPSBuZXcgRm9ybUNvbnRyb2woZmllbGQudmFsdWUgfHwgJycsIFZhbGlkYXRvcnMuY29tcG9zZSh2YWxpZGF0b3JzKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKGdyb3VwKTtcclxuICAgICAgcmV0dXJuIHRoaXMuZm9ybTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmZvcm07XHJcbiAgfVxyXG5cclxuICAvLyAgIGdldCBpc1JlcXVpcmVkKCkge1xyXG4gIC8vICAgaWYodGhpcy5mb3JtR3JvdXAoKS5lcnJvcnMpIHtcclxuICAvLyAgICAgICAgIHJldHVybiAhdGhpcy5mb3JtR3JvdXAoKS5jb250cm9sc1sncmVxdWlyZWQnXTtcclxuICAvLyAgICAgfWVsc2Uge1xyXG4gIC8vICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgLy8gICAgIH1cclxuICAvLyB9XHJcbiAgLy8gICBnZXQgaXNWYWxpZCgpIHtcclxuICAvLyAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwKCkudmFsaWQ7XHJcbiAgLy8gICB9XHJcblxyXG59XHJcbiJdfQ==
