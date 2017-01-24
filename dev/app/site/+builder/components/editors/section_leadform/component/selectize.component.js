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
var Selectize = (function () {
    function Selectize(_JSONBuilder) {
        this._JSONBuilder = _JSONBuilder;
    }
    Selectize.prototype.ngOnInit = function () {
        var self = this;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Selectize.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Selectize.prototype, "index", void 0);
    Selectize = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'selectize',
            template: "\n      <div class=\"input-group\">\n            <span class=\"no-padding option-label\">\n               <span class=\"astrik-label\" *ngIf=\"field.validations.required.status\">*</span>\n                <span class=\"astrik-label not-man\" *ngIf=\"!field.validations.required.status\">*</span>\n            </span>\n          <div class=\"col-md-10 col-xs-10 no-padding\">\n            <select class=\"select-default\"  [(ngModel)]=\"field.type\">\n                <option value=\"firstName\">Name</option>\n                <option value=\"email\">Email</option>\n                <option value=\"tel\">Phone Number</option>\n                <option value=\"lastName\">Others</option>\n            </select> \n          </div>\n          <div class=\"col-md-12 \" style=\"padding-right: 0px;\" *ngIf=\"_JSONBuilder.getSelectedPage().type ==='Questionnaire'\">\n            <label class=\"check-value\">TITLE</label>\n            <input type=\"text\" class=\"form-control form-text value-text \"  [(ngModel)] = \"field.name\">\n          </div>\n          <div class=\"col-md-12 \" style=\"padding-right: 0px;\">\n            <label class=\"check-value\">PLACEHOLDER</label>\n            <input type=\"text\" class=\"form-control form-text value-text \"  [(ngModel)] = \"field.placeholder\">\n          </div>\n        </div>\n    ",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], Selectize);
    return Selectize;
}());
exports.Selectize = Selectize;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9zZWN0aW9uX2xlYWRmb3JtL2NvbXBvbmVudC9zZWxlY3RpemUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEQsZUFBZSxDQUFDLENBQUE7QUFDMUUsb0NBQTRCLDBDQUEwQyxDQUFDLENBQUE7QUFnQ3ZFO0lBR0ksbUJBQW9CLFlBQXdCO1FBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO0lBRTVDLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0csSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBY25CLENBQUM7SUFyQkQ7UUFBQyxZQUFLLEVBQUU7OzRDQUFBO0lBQ1A7UUFBQyxZQUFLLEVBQUU7OzRDQUFBO0lBaENiO1FBQUMsZ0JBQVMsQ0FBQztZQUNOLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN2QixRQUFRLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUMscXpDQXVCUjtZQUNELGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1NBQ3hDLENBQUM7O2lCQUFBO0lBeUJGLGdCQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSxpQkFBUyxZQXVCckIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2VkaXRvcnMvc2VjdGlvbl9sZWFkZm9ybS9jb21wb25lbnQvc2VsZWN0aXplLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsVmlld0VuY2Fwc3VsYXRpb24sT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnc2VsZWN0aXplJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibm8tcGFkZGluZyBvcHRpb24tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhc3RyaWstbGFiZWxcIiAqbmdJZj1cImZpZWxkLnZhbGlkYXRpb25zLnJlcXVpcmVkLnN0YXR1c1wiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFzdHJpay1sYWJlbCBub3QtbWFuXCIgKm5nSWY9XCIhZmllbGQudmFsaWRhdGlvbnMucmVxdWlyZWQuc3RhdHVzXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMCBjb2wteHMtMTAgbm8tcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwic2VsZWN0LWRlZmF1bHRcIiAgWyhuZ01vZGVsKV09XCJmaWVsZC50eXBlXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmlyc3ROYW1lXCI+TmFtZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVtYWlsXCI+RW1haWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0ZWxcIj5QaG9uZSBOdW1iZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsYXN0TmFtZVwiPk90aGVyczwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD4gXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAwcHg7XCIgKm5nSWY9XCJfSlNPTkJ1aWxkZXIuZ2V0U2VsZWN0ZWRQYWdlKCkudHlwZSA9PT0nUXVlc3Rpb25uYWlyZSdcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2stdmFsdWVcIj5USVRMRTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tdGV4dCB2YWx1ZS10ZXh0IFwiICBbKG5nTW9kZWwpXSA9IFwiZmllbGQubmFtZVwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIFwiIHN0eWxlPVwicGFkZGluZy1yaWdodDogMHB4O1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVjay12YWx1ZVwiPlBMQUNFSE9MREVSPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS10ZXh0IHZhbHVlLXRleHQgXCIgIFsobmdNb2RlbCldID0gXCJmaWVsZC5wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG4vLyBbKG5nTW9kZWwpXT1cImZpZWxkLnR5cGVcIlxyXG5leHBvcnQgY2xhc3MgU2VsZWN0aXplIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGZpZWxkOiBhbnk7XHJcbiAgICAgQElucHV0KCkgaW5kZXg6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX0pTT05CdWlsZGVyOkpTT05CdWlsZGVyKSB7XHJcbiAgICAgICAgLy90aGlzLmNvbnRyb2wgPSBqc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZENvbnRyb2woKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIC8vICAgIGpRdWVyeSgnLnNlbGVjdC1kZWZhdWx0Jykuc2VsZWN0aXplKHtcclxuICAgIC8vICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcclxuICAgIC8vICAgICAgICAgICAgIGlmICghdmFsdWUubGVuZ3RoKSByZXR1cm47XHJcbiAgICAvLyAgICAgICAgICAgICAgc2VsZi5maWVsZC5uYW1lID0gdmFsdWU7XHJcbiAgICAvLyAgICAgICAgICAgICBpZih2YWx1ZSA9PSAnRmlyc3ROYW1lJyB8fCB2YWx1ZSA9PSAnTGFzdE5hbWUnICkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNlbGYuZmllbGQubmFtZSA9IHZhbHVlO1xyXG4gICAgLy8gICAgICAgICAgICAgfWVsc2UgaWYodmFsdWUgPT0gJ0ZpcnN0TmFtZScpIHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
