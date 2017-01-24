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
var JSONBuilder_service_1 = require('../../../../services/JSONBuilder.service');
var formula_service_1 = require('../../../../services/formula.service');
var builder_service_1 = require('../../../../services/builder.service');
var model_1 = require('../../../../models/model');
var common_1 = require('@angular/common');
var customValidation_1 = require("../../../../../templates/services/customValidation");
var ConfigEmailComponent = (function () {
    function ConfigEmailComponent(jsonBuilderHelper, formulaService, _builderService, fb) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.formulaService = formulaService;
        this._builderService = _builderService;
        this.finishCalcEmail = new model_1.CalcEmail({ app: this.jsonBuilderHelper.getJSONBuilt()._id, type: 'Finish' });
        var validators = [];
        validators.push(common_1.Validators.required);
        validators.push(customValidation_1.CustomValidator.emailFormat);
        this.emailForm = fb.group({
            'email': new common_1.Control(this.finishCalcEmail.email, common_1.Validators.compose(validators)),
        });
    }
    ConfigEmailComponent.prototype.ngDoCheck = function () {
        var self = this;
        if (this.currentCount === 0 || this.currentCount != this.formulaService.allValidVariables().length) {
            if (jQuery('textarea#froala-editorFinish').data('froala.editor'))
                jQuery('textarea#froala-editorFinish').froalaEditor('destroy');
            this.currentCount = this.formulaService.allValidVariables().length;
            this.updateOptions();
            jQuery('textarea#froala-editorFinish').on('froalaEditor.buttons.refresh', function (e, editor) {
                self.updateOptions();
            });
            jQuery.FroalaEditor.DefineIcon('questions', { NAME: 'input' });
            jQuery.FroalaEditor.RegisterCommand('questions', {
                title: 'Questions list',
                type: 'dropdown',
                focus: true,
                undo: true,
                icon: 'questions',
                refreshAfterCallback: true,
                options: this.options,
                callback: function (cmd, val) {
                    this.html.insert(val);
                },
                refresh: function ($btn) { },
                refreshOnShow: function ($btn, $dropdown) { }
            });
            jQuery('textarea#froala-editorFinish').froalaEditor({
                toolbarButtons: ['bold', '|', 'italic', '|', 'underline', '|', 'color', '|', 'fontSize'],
                pastePlain: true,
            });
            jQuery('textarea#froala-editorFinish').on('froalaEditor.contentChanged', function (e, editor) {
                self.finishCalcEmail.message = e.currentTarget.value;
                self.onFieldBlur(self.finishCalcEmail);
            });
        }
    };
    ConfigEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateOptions();
        this.jsonBuilderHelper.updateTemplateQuestionare();
        this.recommendCalcEmail = new model_1.CalcEmail({ app: this.jsonBuilderHelper.getJSONBuilt()._id, type: 'Recommend' });
        this._builderService.calcEmail({ app: this.jsonBuilderHelper.getJSONBuilt()._id })
            .subscribe(function (response) {
            response.forEach(function (res) {
                (res.type == 'Finish') ? _this.finishCalcEmail = new model_1.CalcEmail(res)
                    : _this.recommendCalcEmail = new model_1.CalcEmail(res);
                jQuery('textarea#froala-editorFinish').froalaEditor('html.set', (_this.finishCalcEmail.message));
                jQuery('textarea#froala-editorRecommend').froalaEditor('html.set', (_this.recommendCalcEmail.message));
            });
        }, function (error) { console.log(error); });
    };
    ConfigEmailComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        jQuery('.email-selectize').selectize();
        jQuery('.email-replyto-selectize').selectize({
            plugins: ['remove_button'],
            delimiter: ',',
            persist: false,
            create: function (input) {
                return {
                    value: input,
                    text: input
                };
            }
        });
        this.currentCount = 0;
    };
    ConfigEmailComponent.prototype.onFieldBlur = function (value) {
        if (!this.emailForm.valid)
            this.finishCalcEmail.sendEmail = false;
        var self = this;
        this._builderService.saveCalcEmail(value)
            .subscribe(function (response) {
            self.jsonBuilderHelper.getJSONBuilt().changed = true;
            value._id = response._id;
            self.jsonBuilderHelper.debounce(self.jsonBuilderHelper.animLoad(), 1800);
        }, function (error) { console.log(error); });
    };
    ConfigEmailComponent.prototype.updateOptions = function () {
        this.options = '{ ';
        for (var variable in this.formulaService.allValidVariables())
            this.options += '" ' + this.formulaService.allValidVariables()[variable] + ' ":" ' + this.formulaService.allValidVariablesWysiywigList()[variable] + ' ",';
        this.options = this.options.slice(0, -1);
        this.options += '}';
        this.options = JSON.parse(this.options);
    };
    ConfigEmailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'config-email',
            templateUrl: 'assets/html/email.template.html',
            styleUrls: ['assets/css/wysiwyg.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES],
            providers: [formula_service_1.FormulaService, builder_service_1.BuilderService]
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, formula_service_1.FormulaService, builder_service_1.BuilderService, common_1.FormBuilder])
    ], ConfigEmailComponent);
    return ConfigEmailComponent;
}());
exports.ConfigEmailComponent = ConfigEmailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29uZmlnL2NvbmZpZ19jb21wb25lbnRzL2VtYWlsL2VtYWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZFLGVBQWUsQ0FBQyxDQUFBO0FBQzdGLG9DQUEwQiwwQ0FBMEMsQ0FBQyxDQUFBO0FBQ3JFLGdDQUE4QixzQ0FBc0MsQ0FBQyxDQUFBO0FBQ3JFLGdDQUE2QixzQ0FBc0MsQ0FBQyxDQUFBO0FBQ3BFLHNCQUF3QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ25ELHVCQUErRixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pILGlDQUE4QixvREFBb0QsQ0FBQyxDQUFBO0FBYW5GO0lBTUksOEJBQW9CLGlCQUE4QixFQUN0QyxjQUE4QixFQUM5QixlQUErQixFQUFFLEVBQWU7UUFGeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGlCQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RyxJQUFJLFVBQVUsR0FBVSxFQUFFLENBQUM7UUFDM0IsVUFBVSxDQUFDLElBQUksQ0FBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0NBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsT0FBTyxFQUFFLElBQUksZ0JBQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMs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QUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUM7UUFFcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBL0lMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsd0JBQWUsQ0FBQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLGdDQUFjLENBQUM7U0FDOUMsQ0FBQzs7NEJBQUE7SUF5SUYsMkJBQUM7QUFBRCxDQXZJQSxBQXVJQyxJQUFBO0FBdklZLDRCQUFvQix1QkF1SWhDLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvY29tcG9uZW50cy9jb25maWcvY29uZmlnX2NvbXBvbmVudHMvZW1haWwvZW1haWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQsIERvQ2hlY2ssIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SlNPTkJ1aWxkZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge0Zvcm11bGFTZXJ2aWNlfSBmcm9tICAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybXVsYS5zZXJ2aWNlJztcclxuaW1wb3J0IHtCdWlsZGVyU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtDYWxjRW1haWx9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBDb250cm9sLCBDb250cm9sR3JvdXAsIENPUkVfRElSRUNUSVZFUywgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Q3VzdG9tVmFsaWRhdG9yfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdGVtcGxhdGVzL3NlcnZpY2VzL2N1c3RvbVZhbGlkYXRpb25cIjtcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2NvbmZpZy1lbWFpbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9odG1sL2VtYWlsLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2Fzc2V0cy9jc3Mvd3lzaXd5Zy5jc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTLCBDT1JFX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbRm9ybXVsYVNlcnZpY2UsIEJ1aWxkZXJTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0VtYWlsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBEb0NoZWNrIHtcclxuICAgIG9wdGlvbnM6IGFueTtcclxuICAgIHJlY29tbWVuZENhbGNFbWFpbDogQ2FsY0VtYWlsO1xyXG4gICAgZmluaXNoQ2FsY0VtYWlsOiBDYWxjRW1haWw7XHJcbiAgICBlbWFpbEZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIGN1cnJlbnRDb3VudDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtdWxhU2VydmljZTogRm9ybXVsYVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYnVpbGRlclNlcnZpY2U6IEJ1aWxkZXJTZXJ2aWNlLCBmYjogRm9ybUJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLmZpbmlzaENhbGNFbWFpbCA9IG5ldyBDYWxjRW1haWwoeyBhcHA6IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLCB0eXBlOiAnRmluaXNoJyB9KTtcclxuICAgICAgICBsZXQgdmFsaWRhdG9yczogYW55W10gPSBbXTtcclxuICAgICAgICB2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAgICAgICAgdmFsaWRhdG9ycy5wdXNoKEN1c3RvbVZhbGlkYXRvci5lbWFpbEZvcm1hdCk7XHJcbiAgICAgICAgdGhpcy5lbWFpbEZvcm0gPSBmYi5ncm91cCh7XHJcbiAgICAgICAgICAgICdlbWFpbCc6IG5ldyBDb250cm9sKHRoaXMuZmluaXNoQ2FsY0VtYWlsLmVtYWlsLCBWYWxpZGF0b3JzLmNvbXBvc2UodmFsaWRhdG9ycykpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudENvdW50ID09PSAwIHx8IHRoaXMuY3VycmVudENvdW50ICE9IHRoaXMuZm9ybXVsYVNlcnZpY2UuYWxsVmFsaWRWYXJpYWJsZXMoKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKGpRdWVyeSgndGV4dGFyZWEjZnJvYWxhLWVkaXRvckZpbmlzaCcpLmRhdGEoJ2Zyb2FsYS5lZGl0b3InKSlcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgndGV4dGFyZWEjZnJvYWxhLWVkaXRvckZpbmlzaCcpLmZyb2FsYUVkaXRvcignZGVzdHJveScpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgKGpRdWVyeSgndGV4dGFyZWEjZnJvYWxhLWVkaXRvclJlY29tbWVuZCcpLmRhdGEoJ2Zyb2FsYS5lZGl0b3InKSlcclxuICAgICAgICAgICAgLy8gICAgIGpRdWVyeSgndGV4dGFyZWEjZnJvYWxhLWVkaXRvclJlY29tbWVuZCcpLmZyb2FsYUVkaXRvcignZGVzdHJveScpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q291bnQgPSB0aGlzLmZvcm11bGFTZXJ2aWNlLmFsbFZhbGlkVmFyaWFibGVzKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KCd0ZXh0YXJlYSNmcm9hbGEtZWRpdG9yRmluaXNoJykub24oJ2Zyb2FsYUVkaXRvci5idXR0b25zLnJlZnJlc2gnLCBmdW5jdGlvbiAoZTogYW55LCBlZGl0b3I6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGVPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgalF1ZXJ5LkZyb2FsYUVkaXRvci5EZWZpbmVJY29uKCdxdWVzdGlvbnMnLCB7IE5BTUU6ICdpbnB1dCcgfSk7XHJcbiAgICAgICAgICAgIGpRdWVyeS5Gcm9hbGFFZGl0b3IuUmVnaXN0ZXJDb21tYW5kKCdxdWVzdGlvbnMnLCB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1F1ZXN0aW9ucyBsaXN0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdkcm9wZG93bicsXHJcbiAgICAgICAgICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVuZG86IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAncXVlc3Rpb25zJyxcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hBZnRlckNhbGxiYWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChjbWQ6IGFueSwgdmFsOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWwuaW5zZXJ0KHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaDogZnVuY3Rpb24gKCRidG46IGFueSkgeyB9LFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaE9uU2hvdzogZnVuY3Rpb24gKCRidG46IGFueSwgJGRyb3Bkb3duOiBhbnkpIHsgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGpRdWVyeSgndGV4dGFyZWEjZnJvYWxhLWVkaXRvckZpbmlzaCcpLmZyb2FsYUVkaXRvcih7XHJcbiAgICAgICAgICAgICAgICB0b29sYmFyQnV0dG9uczogWydib2xkJywgJ3wnLCAnaXRhbGljJywgJ3wnLCAndW5kZXJsaW5lJywgJ3wnLCAnY29sb3InLCAnfCcsICdmb250U2l6ZSddLFxyXG4gICAgICAgICAgICAgICAgcGFzdGVQbGFpbjogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkoJ3RleHRhcmVhI2Zyb2FsYS1lZGl0b3JGaW5pc2gnKS5vbignZnJvYWxhRWRpdG9yLmNvbnRlbnRDaGFuZ2VkJywgZnVuY3Rpb24gKGU6IGFueSwgZWRpdG9yOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZmluaXNoQ2FsY0VtYWlsLm1lc3NhZ2UgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9uRmllbGRCbHVyKHNlbGYuZmluaXNoQ2FsY0VtYWlsKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8galF1ZXJ5KCd0ZXh0YXJlYSNmcm9hbGEtZWRpdG9yUmVjb21tZW5kJykuZnJvYWxhRWRpdG9yKHtcclxuICAgICAgICAgICAgLy8gICAgIHRvb2xiYXJCdXR0b25zOiBbJ2JvbGQnLCAnfCcsICdpdGFsaWMnLCAnfCcsICd1bmRlcmxpbmUnLCAnfCcsICdjb2xvcicsICd8JywgJ2ZvbnRTaXplJywgJ3wnLCAncXVlc3Rpb25zJ10sXHJcbiAgICAgICAgICAgIC8vICAgICBwYXN0ZVBsYWluOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGpRdWVyeSgndGV4dGFyZWEjZnJvYWxhLWVkaXRvclJlY29tbWVuZCcpLm9uKCdmcm9hbGFFZGl0b3IuY29udGVudENoYW5nZWQnLCBmdW5jdGlvbiAoZTogYW55LCBlZGl0b3I6IGFueSkge1xyXG4gICAgICAgICAgICAvLyAgICAgc2VsZi5yZWNvbW1lbmRDYWxjRW1haWwubWVzc2FnZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgLy8gICAgIHNlbGYub25GaWVsZEJsdXIoc2VsZi5yZWNvbW1lbmRDYWxjRW1haWwpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPcHRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci51cGRhdGVUZW1wbGF0ZVF1ZXN0aW9uYXJlKCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVjb21tZW5kQ2FsY0VtYWlsID0gbmV3IENhbGNFbWFpbCh7IGFwcDogdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5faWQsIHR5cGU6ICdSZWNvbW1lbmQnIH0pO1xyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLmNhbGNFbWFpbCh7IGFwcDogdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5faWQgfSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIChyZXMudHlwZSA9PSAnRmluaXNoJykgPyB0aGlzLmZpbmlzaENhbGNFbWFpbCA9IG5ldyBDYWxjRW1haWwocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucmVjb21tZW5kQ2FsY0VtYWlsID0gbmV3IENhbGNFbWFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgndGV4dGFyZWEjZnJvYWxhLWVkaXRvckZpbmlzaCcpLmZyb2FsYUVkaXRvcignaHRtbC5zZXQnLCAodGhpcy5maW5pc2hDYWxjRW1haWwubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgndGV4dGFyZWEjZnJvYWxhLWVkaXRvclJlY29tbWVuZCcpLmZyb2FsYUVkaXRvcignaHRtbC5zZXQnLCAodGhpcy5yZWNvbW1lbmRDYWxjRW1haWwubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7IGNvbnNvbGUubG9nKGVycm9yKTsgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAvKiBzZWxlY3RpemUganMgKi9cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgalF1ZXJ5KCcuZW1haWwtc2VsZWN0aXplJykuc2VsZWN0aXplKCk7XHJcbiAgICAgICAgalF1ZXJ5KCcuZW1haWwtcmVwbHl0by1zZWxlY3RpemUnKS5zZWxlY3RpemUoe1xyXG4gICAgICAgICAgICBwbHVnaW5zOiBbJ3JlbW92ZV9idXR0b24nXSxcclxuICAgICAgICAgICAgZGVsaW1pdGVyOiAnLCcsXHJcbiAgICAgICAgICAgIHBlcnNpc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uIChpbnB1dDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpbnB1dFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY3VycmVudENvdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpZWxkQmx1cih2YWx1ZTogQ2FsY0VtYWlsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVtYWlsRm9ybS52YWxpZClcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hDYWxjRW1haWwuc2VuZEVtYWlsID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLnNhdmVDYWxjRW1haWwodmFsdWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUuX2lkID0gcmVzcG9uc2UuX2lkO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5qc29uQnVpbGRlckhlbHBlci5kZWJvdW5jZShzZWxmLmpzb25CdWlsZGVySGVscGVyLmFuaW1Mb2FkKCksIDE4MDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZU9wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gJ3sgJztcclxuICAgICAgICBmb3IgKHZhciB2YXJpYWJsZSBpbiB0aGlzLmZvcm11bGFTZXJ2aWNlLmFsbFZhbGlkVmFyaWFibGVzKCkpXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyArPSAnXCIgJyArIHRoaXMuZm9ybXVsYVNlcnZpY2UuYWxsVmFsaWRWYXJpYWJsZXMoKVt2YXJpYWJsZV0gKyAnIFwiOlwiICcgKyB0aGlzLmZvcm11bGFTZXJ2aWNlLmFsbFZhbGlkVmFyaWFibGVzV3lzaXl3aWdMaXN0KClbdmFyaWFibGVdICsgJyBcIiwnO1xyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuc2xpY2UoMCwgLTEpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyArPSAnfSc7XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IEpTT04ucGFyc2UodGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
