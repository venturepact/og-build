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
var control_component_1 = require('../../../controls/control.component');
var core_2 = require('@angular/core');
var SectionComponent = (function () {
    function SectionComponent() {
    }
    SectionComponent = __decorate([
        core_1.Component({
            selector: 'section',
            directives: [control_component_1.Control],
            template: "\n    <div class=\"questions\">\n\t\t\t\t\t<div class=\" col-md-8 col-md-offset-2\">\n\t\t\t\t\t\t<div class=\"col-md-12\" >\n\t\t\t\t\t\t\t<div class=\"question-head\">Design</div>\n\t\t\t\t\t\t\t<div class=\"question-subhead\">Tell us a little bit more about project, so we can find the perfect teams for you!\n\t\t\t\t\t\t\t</div>\n                                <ng-content></ng-content>\n                            </div>\n                    </div>\n    ",
            encapsulation: core_2.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], SectionComponent);
    return SectionComponent;
}());
exports.SectionComponent = SectionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy90ZW1wbGF0ZUFsbC9ob21lX2xvYW5fY2FsY3VsYXRvci9jb21wb25lbnRzL3NlY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBQzdFLGtDQUFzQixxQ0FBcUMsQ0FBQyxDQUFBO0FBQzVELHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQW1CaEQ7SUFBQTtJQUVBLENBQUM7SUFuQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLFNBQVM7WUFDakIsVUFBVSxFQUFFLENBQUMsMkJBQU8sQ0FBQztZQUN0QixRQUFRLEVBQUMsZ2RBVVI7WUFDQSxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN6QyxDQUFDOzt3QkFBQTtJQUlGLHVCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSx3QkFBZ0IsbUJBRTVCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL3RlbXBsYXRlQWxsL2hvbWVfbG9hbl9jYWxjdWxhdG9yL2NvbXBvbmVudHMvc2VjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIgLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sfSBmcm9tICcuLi8uLi8uLi9jb250cm9scy9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Vmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3Rvcjonc2VjdGlvbicsXHJcbiAgICAgZGlyZWN0aXZlczogW0NvbnRyb2xdLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uc1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIiBjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiID5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicXVlc3Rpb24taGVhZFwiPkRlc2lnbjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJxdWVzdGlvbi1zdWJoZWFkXCI+VGVsbCB1cyBhIGxpdHRsZSBiaXQgbW9yZSBhYm91dCBwcm9qZWN0LCBzbyB3ZSBjYW4gZmluZCB0aGUgcGVyZmVjdCB0ZWFtcyBmb3IgeW91IVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdGlvbkNvbXBvbmVudHtcclxuICAgXHJcbn0iXX0=
