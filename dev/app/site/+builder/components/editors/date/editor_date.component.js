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
var common_properties_component_1 = require('../common/common_properties.component');
var EditorDate = (function () {
    function EditorDate(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.control = jsonBuilderHelper.getSelectedControl();
    }
    EditorDate.prototype.ngOnInit = function () {
        jQuery('.date').datepicker();
    };
    EditorDate = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-date',
            directives: [common_properties_component_1.CommonEditor],
            templateUrl: 'assets/html/editor_date.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], EditorDate);
    return EditorDate;
}());
exports.EditorDate = EditorDate;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9kYXRlL2VkaXRvcl9kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJELGVBQWUsQ0FBQyxDQUFBO0FBQzNFLG9DQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3BFLDRDQUE4Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBVXRFO0lBR0ksb0JBQW9CLGlCQUE4QjtRQUE5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWE7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFDSiw2QkFBUSxHQUFSO1FBRUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFqQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3RCLFVBQVUsRUFBRSxDQUFDLDBDQUFZLENBQUM7WUFDM0IsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUNyQyxDQUFDOztrQkFBQTtJQVlGLGlCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSxrQkFBVSxhQVV0QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9kYXRlL2VkaXRvcl9kYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgLE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25FZGl0b3IgIH0gZnJvbSAnLi4vY29tbW9uL2NvbW1vbl9wcm9wZXJ0aWVzLmNvbXBvbmVudCc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeSA6IGFueTtcclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2VkaXRvci1kYXRlJyxcclxuXHQgZGlyZWN0aXZlczogW0NvbW1vbkVkaXRvcl0sXHJcblx0dGVtcGxhdGVVcmw6ICdhc3NldHMvaHRtbC9lZGl0b3JfZGF0ZS5jb21wb25lbnQuaHRtbCcgLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JEYXRlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb250cm9sOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSBqc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZENvbnRyb2woKTtcclxuICAgIH1cclxuXHRuZ09uSW5pdCgpXHJcblx0e1xyXG5cdFx0alF1ZXJ5KCcuZGF0ZScpLmRhdGVwaWNrZXIoKTtcclxuXHR9XHJcbn1cclxuIl19
