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
var builder_service_1 = require('../../../services/builder.service');
var JSONUpdateItemTracker_service_1 = require('../../../services/JSONUpdateItemTracker.service');
var EditorCounter = (function () {
    function EditorCounter(jsonBuilderHelper, _builderService, _ItemTrackService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._builderService = _builderService;
        this._ItemTrackService = _ItemTrackService;
        this.control = jsonBuilderHelper.getSelectedControl();
    }
    EditorCounter.prototype.ngOnChanges = function () {
        this._ItemTrackService.resetUnsavedData();
        this._ItemTrackService.setUnSavedItems(this.control);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorCounter.prototype, "control", void 0);
    EditorCounter = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor-counter',
            directives: [common_properties_component_1.CommonEditor],
            templateUrl: 'assets/html/editor_counter.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, builder_service_1.BuilderService, JSONUpdateItemTracker_service_1.JSONItemTracker])
    ], EditorCounter);
    return EditorCounter;
}());
exports.EditorCounter = EditorCounter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9jb3VudGVyL2VkaXRvcl9jb3VudGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThELGVBQWUsQ0FBQyxDQUFBO0FBQzlFLG9DQUE0Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3BFLDRDQUE4Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3RFLGdDQUErQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQ25FLDhDQUFnQyxpREFBaUQsQ0FBQyxDQUFBO0FBVWxGO0lBR0ksdUJBQ00saUJBQThCLEVBQzlCLGVBQStCLEVBQy9CLGlCQUFrQztRQUZsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWE7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBaUI7UUFFcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFSixtQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQWJKO1FBQUMsWUFBSyxFQUFFOztrREFBQTtJQVRUO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFVBQVUsRUFBRSxDQUFDLDBDQUFZLENBQUM7WUFDMUIsV0FBVyxFQUFFLDJDQUEyQztZQUN4RCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUNyQyxDQUFDOztxQkFBQTtJQWlCRixvQkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlkscUJBQWEsZ0JBZXpCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvY29tcG9uZW50cy9lZGl0b3JzL2NvdW50ZXIvZWRpdG9yX2NvdW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vbkVkaXRvciAgfSBmcm9tICcuLi9jb21tb24vY29tbW9uX3Byb3BlcnRpZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9idWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBKU09OSXRlbVRyYWNrZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09OVXBkYXRlSXRlbVRyYWNrZXIuc2VydmljZSc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnZWRpdG9yLWNvdW50ZXInLFxyXG5cdGRpcmVjdGl2ZXM6IFtDb21tb25FZGl0b3JdLFxyXG5cdHRlbXBsYXRlVXJsOiAnYXNzZXRzL2h0bWwvZWRpdG9yX2NvdW50ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JDb3VudGVyIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHRASW5wdXQoKSBjb250cm9sOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcixcclxuXHRcdHByaXZhdGUgX2J1aWxkZXJTZXJ2aWNlOiBCdWlsZGVyU2VydmljZSxcclxuXHRcdHByaXZhdGUgX0l0ZW1UcmFja1NlcnZpY2U6IEpTT05JdGVtVHJhY2tlclxyXG5cdCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IGpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkQ29udHJvbCgpO1xyXG4gICAgfVxyXG5cclxuXHRuZ09uQ2hhbmdlcygpIHtcclxuXHRcdHRoaXMuX0l0ZW1UcmFja1NlcnZpY2UucmVzZXRVbnNhdmVkRGF0YSgpO1xyXG5cdFx0dGhpcy5fSXRlbVRyYWNrU2VydmljZS5zZXRVblNhdmVkSXRlbXModGhpcy5jb250cm9sKTtcclxuICAgIH1cclxufVxyXG4iXX0=
