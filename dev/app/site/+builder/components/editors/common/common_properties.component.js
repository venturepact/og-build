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
var editor_wysiwyg_component_1 = require('../wysiwyg/editor_wysiwyg.component');
var CommonEditor = (function () {
    function CommonEditor(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.control = jsonBuilderHelper.getSelectedControl();
    }
    CommonEditor.prototype.ngAfterViewInit = function () {
        setTimeout(function () { jQuery('.ques-title').css('height', jQuery('.ques-title').prop('scrollHeight')); }, 1);
    };
    CommonEditor.prototype.textAreaAdjust = function (event) {
        jQuery('.ques-title').css('height', jQuery('.ques-title').prop('scrollHeight'));
    };
    CommonEditor.prototype.textEnd = function (event) {
        if (event.keyCode === 10 || event.keyCode === 13)
            event.preventDefault();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CommonEditor.prototype, "control", void 0);
    CommonEditor = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'common-editor',
            directives: [editor_wysiwyg_component_1.EditorWysiwyg],
            template: "   \n            <div class=\"ques-textarea-parent\">\n                <span class=\"form-label\">Question Title:</span> \n                <textarea class=\"form-text ques-title\" [(ngModel)]=\"control.props.title\" (keyup)=\"textAreaAdjust($event)\" (keypress)=\"textEnd($event)\" row=\"1\"></textarea>\n            </div>        \n    ",
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], CommonEditor);
    return CommonEditor;
}());
exports.CommonEditor = CommonEditor;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9jb21tb24vY29tbW9uX3Byb3BlcnRpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0UsZUFBZSxDQUFDLENBQUE7QUFDcEYsb0NBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUseUNBQStCLHFDQUFxQyxDQUFDLENBQUE7QUFnQnJFO0lBS0ksc0JBQW9CLGlCQUE4QjtRQUE5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWE7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFMRCxzQ0FBZSxHQUFmO1FBQ0ksVUFBVSxDQUFDLGNBQWEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFJRCxxQ0FBYyxHQUFkLFVBQWUsS0FBVTtRQUNyQixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUNELDhCQUFPLEdBQVAsVUFBUSxLQUFTO1FBQ2IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDN0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFiRDtRQUFDLFlBQUssRUFBRTs7aURBQUE7SUFkWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsVUFBVSxFQUFFLENBQUMsd0NBQWEsQ0FBQztZQUMzQixRQUFRLEVBQUUsbVZBS1Q7WUFDRixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN2QyxDQUFDOztvQkFBQTtJQWlCRixtQkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksb0JBQVksZUFleEIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2VkaXRvcnMvY29tbW9uL2NvbW1vbl9wcm9wZXJ0aWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gLCBJbnB1dCwgIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFZGl0b3JXeXNpd3lnICB9IGZyb20gJy4uL3d5c2l3eWcvZWRpdG9yX3d5c2l3eWcuY29tcG9uZW50JztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIG9ic2VydmU6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdjb21tb24tZWRpdG9yJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtFZGl0b3JXeXNpd3lnXSxcclxuICAgIHRlbXBsYXRlOiBgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzLXRleHRhcmVhLXBhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLWxhYmVsXCI+UXVlc3Rpb24gVGl0bGU6PC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tdGV4dCBxdWVzLXRpdGxlXCIgWyhuZ01vZGVsKV09XCJjb250cm9sLnByb3BzLnRpdGxlXCIgKGtleXVwKT1cInRleHRBcmVhQWRqdXN0KCRldmVudClcIiAoa2V5cHJlc3MpPVwidGV4dEVuZCgkZXZlbnQpXCIgcm93PVwiMVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgXHJcbiAgICBgLFxyXG4gICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1vbkVkaXRvciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gICAgQElucHV0KCkgY29udHJvbDogYW55O1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge2pRdWVyeSgnLnF1ZXMtdGl0bGUnKS5jc3MoJ2hlaWdodCcsalF1ZXJ5KCcucXVlcy10aXRsZScpLnByb3AoJ3Njcm9sbEhlaWdodCcpKTt9LCAxKTtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sID0ganNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRDb250cm9sKCk7XHJcbiAgICB9XHJcbiAgICB0ZXh0QXJlYUFkanVzdChldmVudDogYW55KSB7XHJcbiAgICAgICAgalF1ZXJ5KCcucXVlcy10aXRsZScpLmNzcygnaGVpZ2h0JyxqUXVlcnkoJy5xdWVzLXRpdGxlJykucHJvcCgnc2Nyb2xsSGVpZ2h0JykpO1xyXG4gICAgfVxyXG4gICAgdGV4dEVuZChldmVudDphbnkpe1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMCB8fCBldmVudC5rZXlDb2RlID09PSAxMykgXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
