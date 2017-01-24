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
var env_config_1 = require('../../../../config/env.config');
var PoweredByComponent = (function () {
    function PoweredByComponent() {
    }
    PoweredByComponent.prototype.ngOnInit = function () {
        this.url = env_config_1.Config.PROTOCOL + env_config_1.Config.APP_EXTENSION;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PoweredByComponent.prototype, "data", void 0);
    PoweredByComponent = __decorate([
        core_1.Component({
            selector: 'poweredby',
            template: "\n\t\t<div class=\" text-right\" *ngIf=\"data.visible == true\" >\n\t\t\t<div class=\" powered-by\">\n\t\t\t\t<span>Powered by </span>\n\t\t\t\t<a href=\"{{url}}\" target=\"_blank\">\n\t\t\t\t\t\t<img src=\"./app/site/templates/templateAll/one_page_slider/templatesHtml/assets/images/footer-logo.png\" alt=\"Powered By\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], PoweredByComponent);
    return PoweredByComponent;
}());
exports.PoweredByComponent = PoweredByComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9mb290ZXIvcG93ZXJlZGJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBELGVBQWUsQ0FBQyxDQUFBO0FBQzFFLDJCQUF1QiwrQkFBK0IsQ0FBQyxDQUFBO0FBaUJ2RDtJQUFBO0lBUUEsQ0FBQztJQUpDLHFDQUFRLEdBQVI7UUFDQSxJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFNLENBQUMsUUFBUSxHQUFFLG1CQUFNLENBQUMsYUFBYSxDQUFDO0lBQ2xELENBQUM7SUFMQTtRQUFDLFlBQUssRUFBRTs7b0RBQUE7SUFoQlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLCtXQVNWO1lBQ0UsYUFBYSxFQUFDLHdCQUFpQixDQUFDLElBQUk7U0FDdkMsQ0FBQzs7MEJBQUE7SUFVRix5QkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksMEJBQWtCLHFCQVE5QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9mb290ZXIvcG93ZXJlZGJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZy9lbnYuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG93ZXJlZGJ5JyxcclxuICB0ZW1wbGF0ZTogYFxyXG5cdFx0PGRpdiBjbGFzcz1cIiB0ZXh0LXJpZ2h0XCIgKm5nSWY9XCJkYXRhLnZpc2libGUgPT0gdHJ1ZVwiID5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIiBwb3dlcmVkLWJ5XCI+XHJcblx0XHRcdFx0PHNwYW4+UG93ZXJlZCBieSA8L3NwYW4+XHJcblx0XHRcdFx0PGEgaHJlZj1cInt7dXJsfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIuL2FwcC9zaXRlL3RlbXBsYXRlcy90ZW1wbGF0ZUFsbC9vbmVfcGFnZV9zbGlkZXIvdGVtcGxhdGVzSHRtbC9hc3NldHMvaW1hZ2VzL2Zvb3Rlci1sb2dvLnBuZ1wiIGFsdD1cIlBvd2VyZWQgQnlcIj5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0YCxcclxuICAgIGVuY2Fwc3VsYXRpb246Vmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvd2VyZWRCeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG5cdHVybDogc3RyaW5nO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMudXJsID0gQ29uZmlnLlBST1RPQ09MKyBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==
