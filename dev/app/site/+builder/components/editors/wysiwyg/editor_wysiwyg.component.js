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
                    toolbarButtons: ['bold', '|', 'italic', '|', 'underline', '|', 'questions'],
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy93eXNpd3lnL2VkaXRvcl93eXNpd3lnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlHLGVBQWUsQ0FBQyxDQUFBO0FBQ2pILG9DQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3BFLGdDQUErQixtQ0FBbUMsQ0FBQyxDQUFBO0FBYW5FO0lBTUksdUJBQW9CLGlCQUE4QixFQUFVLGNBQThCO1FBQXRFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN0RixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLElBQUksV0FBVyxDQUFDO1lBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsZ0NBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBU0Qsd0NBQWdCLEdBQWhCLFVBQWlCLEtBQVU7SUFFM0IsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxJQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUN6RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFbEUsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVB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QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxJQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQztvQkFDOUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztvQkFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQzlDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7SUFuR0Q7UUFBQyxZQUFLLEVBQUU7O21EQUFBO0lBVlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDJDQUEyQztZQUN4RCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzlCLENBQUM7O3FCQUFBO0lBd0dGLG9CQUFDO0FBQUQsQ0F0R0EsQUFzR0MsSUFBQTtBQXRHWSxxQkFBYSxnQkFzR3pCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvY29tcG9uZW50cy9lZGl0b3JzL3d5c2l3eWcvZWRpdG9yX3d5c2l3eWcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybXVsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9mb3JtdWxhLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIG1hdGg6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZWRpdG9yLXd5c2l3eWcnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvaHRtbC9lZGl0b3Jfd3lzaXd5Zy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgcHJvdmlkZXJzOiBbRm9ybXVsYVNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yV3lzaXd5ZyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gICAgY29udHJvbDogYW55O1xyXG4gICAgQElucHV0KCkgY29udHJvbHM6IGFueTtcclxuICAgIGVkaXRvckh0bWw6IHN0cmluZztcclxuICAgIGN1cnJlbnRDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyLCBwcml2YXRlIGZvcm11bGFTZXJ2aWNlOiBGb3JtdWxhU2VydmljZSkge1xyXG4gICAgICAgIGlmIChqc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0gJ051bWVyaWNhbCcpXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbCA9IGpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkQ29udHJvbCgpO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udHJvbHMgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmNvbnRyb2xzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldFRleHRPZlF1ZXN0aW9uTnVtYmVyKHF1ZXNOdW1iZXI6IGFueSkge1xyXG4gICAgLy8gICAgIGxldCBjdXJyZW50VmFsdWUgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmUoKVtxdWVzTnVtYmVyIC0gMV0ucHJvcHMuY3VycmVudFZhbHVlO1xyXG4gICAgLy8gICAgIGlmIChjdXJyZW50VmFsdWUgPT0gJycgfHwgY3VycmVudFZhbHVlID09IG51bGwgfHwgY3VycmVudFZhbHVlID09IHVuZGVmaW5lZClcclxuICAgIC8vICAgICAgICAgY3VycmVudFZhbHVlID0gMDtcclxuICAgIC8vICAgICByZXR1cm4gY3VycmVudFZhbHVlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHZhcmlhYmxlU2VsZWN0ZWQodmFsdWU6IGFueSkge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGVtcGxhdGVUeXBlID09ICdSZWNvbW1lbmRhdGlvbicpIHsgIC8qIEZvciBSZWNvbW1lbmRhdGlvbiBjYWxjICovXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2wpXHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy53eXNpd3lnJyArIHRoaXMuY29udHJvbC5faWQpLmZyb2FsYUVkaXRvcignZGVzdHJveScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIXRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRGb3JtdWxhKCkuaGFzT3duUHJvcGVydHkoJ19pZCcpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZEZvcm11bGEoKS5faWQgPSAnZm9ybXVsYScrTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMDApICogdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5mb3JtdWxhLmxlbmd0aCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZEZvcm11bGEoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0V3lzd3lnKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXRXeXN3eWcoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBqUXVlcnkoJy53eXNpd3lnJyArIHRoaXMuY29udHJvbC5faWQpLmZyb2FsYUVkaXRvcignZGVzdHJveScpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRXeXN3eWcoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8qIHd5c2l3eWcgZWRpdG9yICovXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q291bnQgPSAwO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnM6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciB2YXJpYWJsZSBpbiB0aGlzLmZvcm11bGFTZXJ2aWNlLmFsbFZhbGlkVmFyaWFibGVzKCkpXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zW3RoaXMuZm9ybXVsYVNlcnZpY2UuYWxsVmFsaWRWYXJpYWJsZXMoKVt2YXJpYWJsZV1dID0gdGhpcy5mb3JtdWxhU2VydmljZS5hbGxWYWxpZFZhcmlhYmxlc1d5c2l5d2lnTGlzdCgpW3ZhcmlhYmxlXTtcclxuXHJcbiAgICAgICAgICAgIGpRdWVyeSgnLnd5c2l3eWcnICsgdGhpcy5jb250cm9sLl9pZCkub24oJ2Zyb2FsYUVkaXRvci5idXR0b25zLnJlZnJlc2gnLCAoZTogYW55LCBlZGl0b3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGVtcGxhdGVUeXBlID09ICdOdW1lcmljYWwnKSAgLyogRm9yIE5VbWVyaWNhbCBjYWxjICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250cm9sLnByb3BzLnRpdGxlID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0gJ1JlY29tbWVuZGF0aW9uJykgIC8qIEZvciBSZWNvbW1lbmRhdGlvbiBjYWxjICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250cm9sLmh0bWwgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGpRdWVyeS5Gcm9hbGFFZGl0b3IuRGVmaW5lSWNvbigncXVlc3Rpb25zJywgeyBOQU1FOiAnaW5wdXQnIH0pO1xyXG4gICAgICAgICAgICBqUXVlcnkuRnJvYWxhRWRpdG9yLlJlZ2lzdGVyQ29tbWFuZCgncXVlc3Rpb25zJywge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdRdWVzdGlvbnMgbGlzdCcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZHJvcGRvd24nLFxyXG4gICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1bmRvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3F1ZXN0aW9ucycsXHJcbiAgICAgICAgICAgICAgICByZWZyZXNoQWZ0ZXJDYWxsYmFjazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKGNtZDogYW55LCB2YWw6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHRtbC5pbnNlcnQodmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWRpdG9yOiBhbnk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRlbXBsYXRlVHlwZSA9PSAnTnVtZXJpY2FsJykgeyAgLyogRm9yIE5VbWVyaWNhbCBjYWxjICovXHJcbiAgICAgICAgICAgICAgICBlZGl0b3IgPSBqUXVlcnkoJy53eXNpd3lnJyArIHRoaXMuY29udHJvbC5faWQpLmZyb2FsYUVkaXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0TWF4OiAyNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhckJ1dHRvbnM6IFsnYm9sZCcsICd8JywgJ2l0YWxpYycsICd8JywgJ3VuZGVybGluZScsICd8JywgJ3F1ZXN0aW9ucyddLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0gJ1JlY29tbWVuZGF0aW9uJykgeyAgIC8qIEZvciBSZWNvbW1lbmRhdGlvbiBjYWxjICovXHJcbiAgICAgICAgICAgICAgICBlZGl0b3IgPSBqUXVlcnkoJy53eXNpd3lnJyArIHRoaXMuY29udHJvbC5faWQpLmZyb2FsYUVkaXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0TWF4OiAyNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhckJ1dHRvbnM6IFsnYm9sZCcsICd8JywgJ2l0YWxpYycsICd8JywgJ3VuZGVybGluZSddLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgalF1ZXJ5KCcud3lzaXd5ZycgKyB0aGlzLmNvbnRyb2wuX2lkKS5vbignZnJvYWxhRWRpdG9yLmNvbnRlbnRDaGFuZ2VkJywgKGU6IGFueSwgZWRpdG9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRlbXBsYXRlVHlwZSA9PSAnTnVtZXJpY2FsJykgeyAgLyogRm9yIE5VbWVyaWNhbCBjYWxjICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lZGl0b3JIdG1sID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udHJvbC5wcm9wcy50aXRsZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGVtcGxhdGVUeXBlID09ICdSZWNvbW1lbmRhdGlvbicpIHsgIC8qIEZvciBSZWNvbW1lbmRhdGlvbiBjYWxjICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lZGl0b3JIdG1sID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29udHJvbC5odG1sID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICB9XHJcbn1cclxuIl19
