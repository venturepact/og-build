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
var EditorLogo = (function () {
    function EditorLogo(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.control = jsonBuilderHelper.getSelectedControl;
    }
    EditorLogo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-logo',
            templateUrl: 'assets/html/editor_logo.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], EditorLogo);
    return EditorLogo;
}());
exports.EditorLogo = EditorLogo;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9sb2dvL2VkaXRvcl9sb2dvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELG9DQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBU3BFO0lBR0ksb0JBQW9CLGlCQUE4QjtRQUE5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWE7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQztJQUN4RCxDQUFDO0lBWkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBQyx3Q0FBd0M7WUFDcEQsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDckMsQ0FBQzs7a0JBQUE7SUFRRixpQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksa0JBQVUsYUFNdEIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2VkaXRvcnMvbG9nby9lZGl0b3JfbG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdCBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnZWRpdG9yLWxvZ28nLFxyXG5cdHRlbXBsYXRlVXJsOidhc3NldHMvaHRtbC9lZGl0b3JfbG9nby5jb21wb25lbnQuaHRtbCcsXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvckxvZ28ge1xyXG5cdGNvbnRyb2w6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcikge1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IGpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkQ29udHJvbDtcclxuICAgIH1cclxufVxyXG4iXX0=
