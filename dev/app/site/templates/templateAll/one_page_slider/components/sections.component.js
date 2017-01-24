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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy90ZW1wbGF0ZUFsbC9vbmVfcGFnZV9zbGlkZXIvY29tcG9uZW50cy9zZWN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2RCxlQUFlLENBQUMsQ0FBQTtBQUM3RSxrQ0FBc0IscUNBQXFDLENBQUMsQ0FBQTtBQUM1RCxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFtQmhEO0lBQUE7SUFFQSxDQUFDO0lBbkJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxTQUFTO1lBQ2pCLFVBQVUsRUFBRSxDQUFDLDJCQUFPLENBQUM7WUFDdEIsUUFBUSxFQUFDLGdkQVVSO1lBQ0EsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDekMsQ0FBQzs7d0JBQUE7SUFJRix1QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksd0JBQWdCLG1CQUU1QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy90ZW1wbGF0ZUFsbC9vbmVfcGFnZV9zbGlkZXIvY29tcG9uZW50cy9zZWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsSW5wdXQsT3V0cHV0LEV2ZW50RW1pdHRlciAsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2x9IGZyb20gJy4uLy4uLy4uL2NvbnRyb2xzL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidzZWN0aW9uJyxcclxuICAgICBkaXJlY3RpdmVzOiBbQ29udHJvbF0sXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb25zXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiIGNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCIgPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJxdWVzdGlvbi1oZWFkXCI+RGVzaWduPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInF1ZXN0aW9uLXN1YmhlYWRcIj5UZWxsIHVzIGEgbGl0dGxlIGJpdCBtb3JlIGFib3V0IHByb2plY3QsIHNvIHdlIGNhbiBmaW5kIHRoZSBwZXJmZWN0IHRlYW1zIGZvciB5b3UhXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN0aW9uQ29tcG9uZW50e1xyXG4gICBcclxufSJdfQ==
