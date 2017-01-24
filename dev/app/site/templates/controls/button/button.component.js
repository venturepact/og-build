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
var themeColor_directive_1 = require('../../components/themeColor.directive');
var Button = (function () {
    function Button() {
        this.controlOutput = new core_1.EventEmitter();
    }
    Button.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Button.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Button.prototype, "controlOutput", void 0);
    Button = __decorate([
        core_1.Component({
            selector: 'click-button',
            directives: [themeColor_directive_1.ThemeColor],
            viewProviders: [],
            template: "\n\t\t\t <div class=\"text-center\" *ngIf=\"data.visible\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn prime-action  next-step sliding-next \"\n\t\t\t\t\t\t(click)=\"controlOutput.emit($event)\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{data.props.title}}\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t ",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], Button);
    return Button;
}());
exports.Button = Button;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlGLGVBQWUsQ0FBQyxDQUFBO0FBQ2pHLHFDQUEyQix1Q0FBdUMsQ0FBQyxDQUFBO0FBb0JuRTtJQUFBO1FBRVcsa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQU85QyxDQUFDO0lBSkEseUJBQVEsR0FBUjtJQUVBLENBQUM7SUFORDtRQUFDLFlBQUssRUFBRTs7d0NBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7aURBQUE7SUFwQlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFDeEIsVUFBVSxFQUFFLENBQUMsaUNBQVUsQ0FBQztZQUN4QixhQUFhLEVBQUUsRUFBRTtZQUNqQixRQUFRLEVBQUUsa1RBVU47WUFDSCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN0QyxDQUFDOztjQUFBO0lBV0YsYUFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksY0FBTSxTQVNsQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVDb2xvciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGhlbWVDb2xvci5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjbGljay1idXR0b24nLFxyXG5cdGRpcmVjdGl2ZXM6IFtUaGVtZUNvbG9yXSxcclxuXHR2aWV3UHJvdmlkZXJzOiBbXSxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0XHQgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCIgKm5nSWY9XCJkYXRhLnZpc2libGVcIj5cclxuXHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBwcmltZS1hY3Rpb24gIG5leHQtc3RlcCBzbGlkaW5nLW5leHQgXCJcclxuXHRcdFx0XHRcdFx0KGNsaWNrKT1cImNvbnRyb2xPdXRwdXQuZW1pdCgkZXZlbnQpXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e3tkYXRhLnByb3BzLnRpdGxlfX1cclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0IGAsXHJcblx0IGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuLy9bdGhlbWVDb2xvcl09XCJbJ2JhY2tncm91bmQnXVwiIFxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBkYXRhOiBhbnk7XHJcblx0QE91dHB1dCgpIGNvbnRyb2xPdXRwdXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0dmFsdWU6IHN0cmluZztcclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvL1xyXG5cdH1cclxuXHJcbn1cclxuIl19
