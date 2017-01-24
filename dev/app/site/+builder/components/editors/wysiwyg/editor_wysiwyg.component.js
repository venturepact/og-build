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
var JSONBuilder_service_1 = require('../../../services/JSONBuilder.service');
var formula_service_1 = require('../../../services/formula.service');
var EditorWysiwyg = (function () {
    function EditorWysiwyg(jsonBuilderHelper, formulaService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.formulaService = formulaService;
        if (jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical')
            this.control = jsonBuilderHelper.getSelectedControl();
    }
    EditorWysiwyg.prototype.ngOnInit = function () {
        if (this.controls != undefined)
            this.control = this.controls;
    };
    EditorWysiwyg.prototype.variableSelected = function (value) {
    };
    EditorWysiwyg.prototype.ngOnChanges = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            if (this.control)
                jQuery('.wysiwyg' + this.control._id).froalaEditor('destroy');
            if (!this.jsonBuilderHelper.getSelectedFormula().hasOwnProperty('_id'))
                this.jsonBuilderHelper.getSelectedFormula()._id = 'formula' + Math.floor((Math.random() * 1000) * this.jsonBuilderHelper.getJSONBuilt().formula.length).toString();
            this.control = this.jsonBuilderHelper.getSelectedFormula();
            this.initWyswyg();
        }
    };
    EditorWysiwyg.prototype.ngAfterViewInit = function () {
        this.initWyswyg();
    };
    EditorWysiwyg.prototype.ngOnDestroy = function () {
        jQuery('.wysiwyg' + this.control._id).froalaEditor('destroy');
    };
    EditorWysiwyg.prototype.initWyswyg = function () {
        var _this = this;
        var self = this;
        this.currentCount = 0;
        setTimeout(function () {
            var options = {};
            for (var variable in _this.formulaService.allValidVariables())
                options[_this.formulaService.allValidVariables()[variable]] = _this.formulaService.allValidVariablesWysiywigList()[variable];
            jQuery('.wysiwyg' + _this.control._id).on('froalaEditor.buttons.refresh', function (e, editor) {
                if (self.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical')
                    self.control.props.title = e.currentTarget.value;
                else if (self.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation')
                    self.control.html = e.currentTarget.value;
            });
            jQuery.FroalaEditor.DefineIcon('questions', { NAME: 'input' });
            jQuery.FroalaEditor.RegisterCommand('questions', {
                title: 'Questions list',
                type: 'dropdown',
                focus: true,
                undo: true,
                icon: 'questions',
                refreshAfterCallback: true,
                options: options,
                callback: function (cmd, val) {
                    this.html.insert(val);
                }
            });
            var editor;
            if (self.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical') {
                editor = jQuery('.wysiwyg' + _this.control._id).froalaEditor({
                    heightMax: 250,
                    toolbarButtons: ['bold', '|', 'italic', '|', 'underline', 'questions'],
                });
            }
            else if (self.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
                editor = jQuery('.wysiwyg' + _this.control._id).froalaEditor({
                    heightMax: 250,
                    toolbarButtons: ['bold', '|', 'italic', '|', 'underline'],
                });
            }
            jQuery('.wysiwyg' + _this.control._id).on('froalaEditor.contentChanged', function (e, editor) {
                if (self.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical') {
                    self.editorHtml = e.currentTarget.value;
                    self.control.props.title = e.currentTarget.value;
                }
                else if (self.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
                    self.editorHtml = e.currentTarget.value;
                    self.control.html = e.currentTarget.value;
                }
            });
        }, 10);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorWysiwyg.prototype, "controls", void 0);
    EditorWysiwyg = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-wysiwyg',
            templateUrl: 'assets/html/editor_wysiwyg.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [formula_service_1.FormulaService]
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, formula_service_1.FormulaService])
    ], EditorWysiwyg);
    return EditorWysiwyg;
}());
exports.EditorWysiwyg = EditorWysiwyg;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy93eXNpd3lnL2VkaXRvcl93eXNpd3lnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlHLGVBQWUsQ0FBQyxDQUFBO0FBQ2pILG9DQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3BFLGdDQUErQixtQ0FBbUMsQ0FBQyxDQUFBO0FBYW5FO0lBTUksdUJBQW9CLGlCQUE4QixFQUFVLGNBQThCO1FBQXRFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN0RixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLElBQUksV0FBVyxDQUFDO1lBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsZ0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBU0Qsd0NBQWdCLEdBQWhCLFVBQWlCLEtBQVU7SUFFM0IsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxJQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUN6RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFbEUsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVB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QyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO29CQUM5RSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO29CQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztnQkFDOUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQW5HRDtRQUFDLFlBQUssRUFBRTs7bURBQUE7SUFWWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsMkNBQTJDO1lBQ3hELGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDOUIsQ0FBQzs7cUJBQUE7SUF3R0Ysb0JBQUM7QUFBRCxDQXRHQSxBQXNHQyxJQUFBO0FBdEdZLHFCQUFhLGdCQXNHekIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2VkaXRvcnMvd3lzaXd5Zy9lZGl0b3Jfd3lzaXd5Zy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtdWxhU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm11bGEuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgbWF0aDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdlZGl0b3Itd3lzaXd5ZycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9odG1sL2VkaXRvcl93eXNpd3lnLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBwcm92aWRlcnM6IFtGb3JtdWxhU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JXeXNpd3lnIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgICBjb250cm9sOiBhbnk7XHJcbiAgICBASW5wdXQoKSBjb250cm9sczogYW55O1xyXG4gICAgZWRpdG9ySHRtbDogc3RyaW5nO1xyXG4gICAgY3VycmVudENvdW50OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIsIHByaXZhdGUgZm9ybXVsYVNlcnZpY2U6IEZvcm11bGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgaWYgKGpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRlbXBsYXRlVHlwZSA9PSAnTnVtZXJpY2FsJylcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sID0ganNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRDb250cm9sKCk7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250cm9scyAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuY29udHJvbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0VGV4dE9mUXVlc3Rpb25OdW1iZXIocXVlc051bWJlcjogYW55KSB7XHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0VGVtcGxhdGVRdWVzdGlvbmFyZSgpW3F1ZXNOdW1iZXIgLSAxXS5wcm9wcy5jdXJyZW50VmFsdWU7XHJcbiAgICAvLyAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PSAnJyB8fCBjdXJyZW50VmFsdWUgPT0gbnVsbCB8fCBjdXJyZW50VmFsdWUgPT0gdW5kZWZpbmVkKVxyXG4gICAgLy8gICAgICAgICBjdXJyZW50VmFsdWUgPSAwO1xyXG4gICAgLy8gICAgIHJldHVybiBjdXJyZW50VmFsdWU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgdmFyaWFibGVTZWxlY3RlZCh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0gJ1JlY29tbWVuZGF0aW9uJykgeyAgLyogRm9yIFJlY29tbWVuZGF0aW9uIGNhbGMgKi9cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbClcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLnd5c2l3eWcnICsgdGhpcy5jb250cm9sLl9pZCkuZnJvYWxhRWRpdG9yKCdkZXN0cm95Jyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZEZvcm11bGEoKS5oYXNPd25Qcm9wZXJ0eSgnX2lkJykpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkRm9ybXVsYSgpLl9pZCA9ICdmb3JtdWxhJytNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwMCkgKiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZvcm11bGEubGVuZ3RoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkRm9ybXVsYSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRXeXN3eWcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFd5c3d5ZygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGpRdWVyeSgnLnd5c2l3eWcnICsgdGhpcy5jb250cm9sLl9pZCkuZnJvYWxhRWRpdG9yKCdkZXN0cm95Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFd5c3d5ZygpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgLyogd3lzaXd5ZyBlZGl0b3IgKi9cclxuICAgICAgICB0aGlzLmN1cnJlbnRDb3VudCA9IDA7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgb3B0aW9uczogYW55ID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIHZhcmlhYmxlIGluIHRoaXMuZm9ybXVsYVNlcnZpY2UuYWxsVmFsaWRWYXJpYWJsZXMoKSlcclxuICAgICAgICAgICAgICAgIG9wdGlvbnNbdGhpcy5mb3JtdWxhU2VydmljZS5hbGxWYWxpZFZhcmlhYmxlcygpW3ZhcmlhYmxlXV0gPSB0aGlzLmZvcm11bGFTZXJ2aWNlLmFsbFZhbGlkVmFyaWFibGVzV3lzaXl3aWdMaXN0KClbdmFyaWFibGVdO1xyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KCcud3lzaXd5ZycgKyB0aGlzLmNvbnRyb2wuX2lkKS5vbignZnJvYWxhRWRpdG9yLmJ1dHRvbnMucmVmcmVzaCcsIChlOiBhbnksIGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0gJ051bWVyaWNhbCcpICAvKiBGb3IgTlVtZXJpY2FsIGNhbGMgKi9cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRyb2wucHJvcHMudGl0bGUgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRlbXBsYXRlVHlwZSA9PSAnUmVjb21tZW5kYXRpb24nKSAgLyogRm9yIFJlY29tbWVuZGF0aW9uIGNhbGMgKi9cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRyb2wuaHRtbCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgalF1ZXJ5LkZyb2FsYUVkaXRvci5EZWZpbmVJY29uKCdxdWVzdGlvbnMnLCB7IE5BTUU6ICdpbnB1dCcgfSk7XHJcbiAgICAgICAgICAgIGpRdWVyeS5Gcm9hbGFFZGl0b3IuUmVnaXN0ZXJDb21tYW5kKCdxdWVzdGlvbnMnLCB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1F1ZXN0aW9ucyBsaXN0JyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdkcm9wZG93bicsXHJcbiAgICAgICAgICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVuZG86IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAncXVlc3Rpb25zJyxcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hBZnRlckNhbGxiYWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoY21kOiBhbnksIHZhbDogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sLmluc2VydCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlZGl0b3I6IGFueTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGVtcGxhdGVUeXBlID09ICdOdW1lcmljYWwnKSB7ICAvKiBGb3IgTlVtZXJpY2FsIGNhbGMgKi9cclxuICAgICAgICAgICAgICAgIGVkaXRvciA9IGpRdWVyeSgnLnd5c2l3eWcnICsgdGhpcy5jb250cm9sLl9pZCkuZnJvYWxhRWRpdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRNYXg6IDI1MCxcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyQnV0dG9uczogWydib2xkJywgJ3wnLCAnaXRhbGljJywgJ3wnLCAndW5kZXJsaW5lJywgJ3F1ZXN0aW9ucyddLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0gJ1JlY29tbWVuZGF0aW9uJykgeyAgIC8qIEZvciBSZWNvbW1lbmRhdGlvbiBjYWxjICovXHJcbiAgICAgICAgICAgICAgICBlZGl0b3IgPSBqUXVlcnkoJy53eXNpd3lnJyArIHRoaXMuY29udHJvbC5faWQpLmZyb2FsYUVkaXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0TWF4OiAyNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhckJ1dHRvbnM6IFsnYm9sZCcsICd8JywgJ2l0YWxpYycsICd8JywgJ3VuZGVybGluZSddLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgalF1ZXJ5KCcud3lzaXd5ZycgKyB0aGlzLmNvbnRyb2wuX2lkKS5vbignZnJvYWxhRWRpdG9yLmNvbnRlbnRDaGFuZ2VkJywgKGU6IGFueSwgZWRpdG9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRlbXBsYXRlVHlwZSA9PSAnTnVtZXJpY2FsJykgeyAgLyogRm9yIE5VbWVyaWNhbCBjYWxjICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lZGl0b3JIdG1sID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udHJvbC5wcm9wcy50aXRsZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGVtcGxhdGVUeXBlID09ICdSZWNvbW1lbmRhdGlvbicpIHsgIC8qIEZvciBSZWNvbW1lbmRhdGlvbiBjYWxjICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lZGl0b3JIdG1sID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udHJvbC5odG1sID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9XHJcbn1cclxuIl19
