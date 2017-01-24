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
var editor_leadform_component_1 = require('../../editors/leadform/editor_leadform.component');
var JSONUpdateItemTracker_service_1 = require('../../../services/JSONUpdateItemTracker.service');
var builder_service_1 = require('../../../services/builder.service');
var feature_access_service_1 = require('../../../../../shared/services/feature-access.service');
var EditorRTResultPage = (function () {
    function EditorRTResultPage(jsonBuilderHandler, _builderService, _featureAuthService, _ItemTrackService) {
        this.jsonBuilderHandler = jsonBuilderHandler;
        this._builderService = _builderService;
        this._featureAuthService = _featureAuthService;
        this._ItemTrackService = _ItemTrackService;
        this.isRealTimeResult = false;
        this.isLeadGenAvailable = false;
    }
    EditorRTResultPage.prototype.changeVisibility = function () {
        if (this.isLeadGenAvailable) {
            this.leadSection.visible = !this.leadSection.visible;
            this.leadSection.items[0].visible = !this.leadSection.items[0].visible;
            if (this.leadSection.visible && this.leadSection.items[0].visible) {
                this.jsonBuilderHandler.hideOtherLeadForm1();
            }
        }
        else {
            jQuery('#premiumModal').modal('show');
        }
    };
    EditorRTResultPage.prototype.ngOnInit = function () {
        for (var section in this.page.sections) {
            if (this.page.sections[section].type === 'LeadFormQ') {
                this.leadSection = this.page.sections[section];
            }
        }
        this.Sectionindex = jQuery.inArray(this.leadSection, this.page.sections);
        this._ItemTrackService.resetUnsavedData();
        this._ItemTrackService.setUnSavedPage(this.page);
        this.isRealTimeResult = this._featureAuthService.features.real_time_results;
        this.isLeadGenAvailable = this._featureAuthService.features.lead_generation;
    };
    EditorRTResultPage.prototype.ngOnChanges = function () {
        this._ItemTrackService.resetUnsavedData();
        this._ItemTrackService.setUnSavedPage(this.page);
    };
    EditorRTResultPage.prototype.onRealTimeChange = function () {
        if (this.isRealTimeResult) {
            this.jsonBuilderHandler.getJSONBuilt().realTime = !this.jsonBuilderHandler.getJSONBuilt().realTime;
        }
        else {
            jQuery('#premiumModal').modal('show');
        }
    };
    EditorRTResultPage.prototype.callGA = function (opt) {
        switch (opt) {
            case "SHOWLEADFORMTOGGLE":
                if (this.leadSection.visible) {
                    ga('markettingteam.send', 'event', 'Settings', 'Toggle', 'ShowLeadFormToggleOn');
                    _kmq.push(['record', 'Builder Show Leadform Toggle On']);
                }
                else {
                    ga('markettingteam.send', 'event', 'Settings', 'Toggle', 'ShowLeadFormToggleOff');
                    _kmq.push(['record', 'Builder Show Leadform Toggle Off']);
                }
                break;
            case "SHOWLEADFORMLASTTOGGLE":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'ShowLeadFormToggle');
                _kmq.push(['record', 'Builder Show Lead Form in Last Click']);
                break;
            case "REALTIMECHANGE":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'ShowResultInReal');
                _kmq.push(['record', 'Builder Show Result in Realtime Click']);
                break;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorRTResultPage.prototype, "page", void 0);
    EditorRTResultPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editor_RT_result_page',
            templateUrl: 'assets/html/editor_RTresultPage.html',
            directives: [editor_leadform_component_1.EditorLeadForm],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, builder_service_1.BuilderService, feature_access_service_1.FeatureAuthService, JSONUpdateItemTracker_service_1.JSONItemTracker])
    ], EditorRTResultPage);
    return EditorRTResultPage;
}());
exports.EditorRTResultPage = EditorRTResultPage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvZWRpdG9ycy9wYWdlL2VkaXRvcl9SVHJlc3VsdFBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUUsZUFBZSxDQUFDLENBQUE7QUFDckYsb0NBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsMENBQStCLGtEQUFrRCxDQUFDLENBQUE7QUFDbEYsOENBQWdDLGlEQUFpRCxDQUFDLENBQUE7QUFDbEYsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsdUNBQWlDLHVEQUF1RCxDQUFDLENBQUE7QUFZekY7SUFNSSw0QkFBb0Isa0JBQStCLEVBQ3ZDLGVBQStCLEVBQy9CLG1CQUF1QyxFQUN2QyxpQkFBa0M7UUFIMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFhO1FBQ3ZDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBaUI7UUFMdEMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztJQU01QyxDQUFDO0lBQ0QsNkNBQWdCLEdBQWhCO1FBRUksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUEsQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN2RSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtB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QUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztnQkFDOUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELEtBQUssQ0FBQztZQUNWLEtBQUssZ0JBQWdCO2dCQUNqQixFQUFFLENBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSx1Q0FBdUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLEtBQUssQ0FBQztRQUNWLENBQUM7SUFDTCxDQUFDO0lBdEVEO1FBQUMsWUFBSyxFQUFFOztvREFBQTtJQVJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsVUFBVSxFQUFFLENBQUMsMENBQWMsQ0FBQztZQUM1QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN4QyxDQUFDOzswQkFBQTtJQTBFRix5QkFBQztBQUFELENBekVBLEFBeUVDLElBQUE7QUF6RVksMEJBQWtCLHFCQXlFOUIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2VkaXRvcnMvcGFnZS9lZGl0b3JfUlRyZXN1bHRQYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkNoYW5nZXMsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRWRpdG9yTGVhZEZvcm0gfSBmcm9tICcuLi8uLi9lZGl0b3JzL2xlYWRmb3JtL2VkaXRvcl9sZWFkZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBKU09OSXRlbVRyYWNrZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9KU09OVXBkYXRlSXRlbVRyYWNrZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtGZWF0dXJlQXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9mZWF0dXJlLWFjY2Vzcy5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnZWRpdG9yX1JUX3Jlc3VsdF9wYWdlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXNzZXRzL2h0bWwvZWRpdG9yX1JUcmVzdWx0UGFnZS5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtFZGl0b3JMZWFkRm9ybV0sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdG9yUlRSZXN1bHRQYWdlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgcGFnZTogYW55O1xyXG4gICAgbGVhZFNlY3Rpb246IGFueTtcclxuICAgIFNlY3Rpb25pbmRleDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBpc1JlYWxUaW1lUmVzdWx0OiBCb29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzTGVhZEdlbkF2YWlsYWJsZTogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29uQnVpbGRlckhhbmRsZXI6IEpTT05CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2J1aWxkZXJTZXJ2aWNlOiBCdWlsZGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9mZWF0dXJlQXV0aFNlcnZpY2U6IEZlYXR1cmVBdXRoU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9JdGVtVHJhY2tTZXJ2aWNlOiBKU09OSXRlbVRyYWNrZXJcclxuICAgICkge1xyXG4gICAgfVxyXG4gICAgY2hhbmdlVmlzaWJpbGl0eSgpIHtcclxuICAgICAgICAvL2hpZGUgb3RoZXIgbGVhZGZvcm1cclxuICAgICAgICBpZih0aGlzLmlzTGVhZEdlbkF2YWlsYWJsZSl7XHJcbiAgICAgICAgICAgIHRoaXMubGVhZFNlY3Rpb24udmlzaWJsZSA9ICF0aGlzLmxlYWRTZWN0aW9uLnZpc2libGU7XHJcbiAgICAgICAgICAgIHRoaXMubGVhZFNlY3Rpb24uaXRlbXNbMF0udmlzaWJsZSA9ICF0aGlzLmxlYWRTZWN0aW9uLml0ZW1zWzBdLnZpc2libGU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGVhZFNlY3Rpb24udmlzaWJsZSAmJiB0aGlzLmxlYWRTZWN0aW9uLml0ZW1zWzBdLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIYW5kbGVyLmhpZGVPdGhlckxlYWRGb3JtMSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjcHJlbWl1bU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBzZWN0aW9uIGluIHRoaXMucGFnZS5zZWN0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dLnR5cGUgPT09ICdMZWFkRm9ybVEnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlYWRTZWN0aW9uID0gdGhpcy5wYWdlLnNlY3Rpb25zW3NlY3Rpb25dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuU2VjdGlvbmluZGV4ID0galF1ZXJ5LmluQXJyYXkodGhpcy5sZWFkU2VjdGlvbiwgdGhpcy5wYWdlLnNlY3Rpb25zKTtcclxuICAgICAgICB0aGlzLl9JdGVtVHJhY2tTZXJ2aWNlLnJlc2V0VW5zYXZlZERhdGEoKTtcclxuICAgICAgICB0aGlzLl9JdGVtVHJhY2tTZXJ2aWNlLnNldFVuU2F2ZWRQYWdlKHRoaXMucGFnZSk7XHJcbiAgICAgICAgdGhpcy5pc1JlYWxUaW1lUmVzdWx0ID0gdGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmZlYXR1cmVzLnJlYWxfdGltZV9yZXN1bHRzO1xyXG4gICAgICAgIHRoaXMuaXNMZWFkR2VuQXZhaWxhYmxlID0gdGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmZlYXR1cmVzLmxlYWRfZ2VuZXJhdGlvbjtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgdGhpcy5fSXRlbVRyYWNrU2VydmljZS5yZXNldFVuc2F2ZWREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5fSXRlbVRyYWNrU2VydmljZS5zZXRVblNhdmVkUGFnZSh0aGlzLnBhZ2UpO1xyXG4gICAgfVxyXG4gICAgICAgIG9uUmVhbFRpbWVDaGFuZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZWFsVGltZVJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5yZWFsVGltZSA9ICF0aGlzLmpzb25CdWlsZGVySGFuZGxlci5nZXRKU09OQnVpbHQoKS5yZWFsVGltZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNwcmVtaXVtTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYWxsR0Eob3B0OiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKG9wdCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiU0hPV0xFQURGT1JNVE9HR0xFXCI6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmxlYWRTZWN0aW9uLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdUb2dnbGUnLCAnU2hvd0xlYWRGb3JtVG9nZ2xlT24nKTtcclxuICAgICAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBTaG93IExlYWRmb3JtIFRvZ2dsZSBPbiddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ1RvZ2dsZScsICdTaG93TGVhZEZvcm1Ub2dnbGVPZmYnKTtcclxuICAgICAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBTaG93IExlYWRmb3JtIFRvZ2dsZSBPZmYnXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlNIT1dMRUFERk9STUxBU1RUT0dHTEVcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ0NsaWNrJywgJ1Nob3dMZWFkRm9ybVRvZ2dsZScpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgU2hvdyBMZWFkIEZvcm0gaW4gTGFzdCBDbGljayddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUkVBTFRJTUVDSEFOR0VcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ1Nob3dSZXN1bHRJblJlYWwnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFNob3cgUmVzdWx0IGluIFJlYWx0aW1lIENsaWNrJ10pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19
