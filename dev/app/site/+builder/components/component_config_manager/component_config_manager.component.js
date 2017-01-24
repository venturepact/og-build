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
var control_component_1 = require('../../../templates/controls/control.component');
var index_1 = require('../../../templates/pipes/index');
var feature_access_service_1 = require('../../../../shared/services/feature-access.service');
var ComponentConfigManagerComponent = (function () {
    function ComponentConfigManagerComponent(_featureAuthService) {
        this._featureAuthService = _featureAuthService;
        this.selected = 'settings';
        this.isIntegerationAvailable = false;
        this.isEmbeddCodeAvailable = false;
        this.ConfigArray = ["settings", "integrations", "email", "share-your-calculator", "launch-popup", "embedded-code"];
        this.selection = new core_1.EventEmitter();
    }
    ComponentConfigManagerComponent.prototype.ngOnInit = function () {
        this.isIntegerationAvailable = this._featureAuthService.features.integrations;
        this.isEmbeddCodeAvailable = this._featureAuthService.features.embedding;
        if (jQuery.inArray(localStorage.getItem('hash-link'), this.ConfigArray) != -1) {
            this.selected = localStorage.getItem('hash-link');
            jQuery('#config-' + this.selected).click();
        }
    };
    ComponentConfigManagerComponent.prototype.ngAfterViewInit = function () {
    };
    ComponentConfigManagerComponent.prototype.integrationClick = function (event) {
        this.isIntegerationAvailable = this._featureAuthService.features.integrations;
        if (this.isIntegerationAvailable) {
            this.selected = 'integrations';
        }
        else {
            jQuery('#premiumModal').modal('show');
            this.selected = 'settings';
        }
    };
    ComponentConfigManagerComponent.prototype.embeddingClick = function (event) {
        this.isEmbeddCodeAvailable = this._featureAuthService.features.embedding;
        if (this.isEmbeddCodeAvailable) {
            this.selected = 'embedded-code';
        }
        else {
            jQuery('#premiumModal').modal('show');
            this.selected = 'settings';
        }
    };
    ComponentConfigManagerComponent.prototype.onSelect = function (comp) {
        window.location.hash = '#' + comp;
        this.selected = comp;
        this.selection.emit(comp);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ComponentConfigManagerComponent.prototype, "selection", void 0);
    ComponentConfigManagerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'component-manager-config',
            directives: [control_component_1.Control],
            pipes: [index_1.RemoveTags],
            templateUrl: 'component_config_manager.template.html',
            styleUrls: ['../assets/css/leftList.style.css'],
        }), 
        __metadata('design:paramtypes', [feature_access_service_1.FeatureAuthService])
    ], ComponentConfigManagerComponent);
    return ComponentConfigManagerComponent;
}());
exports.ComponentConfigManagerComponent = ComponentConfigManagerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29tcG9uZW50X2NvbmZpZ19tYW5hZ2VyL2NvbXBvbmVudF9jb25maWdfbWFuYWdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRSxlQUFlLENBQUMsQ0FBQTtBQUNyRixrQ0FBc0IsK0NBQStDLENBQUMsQ0FBQTtBQUN0RSxzQkFBMkIsZ0NBQWdDLENBQUMsQ0FBQTtBQUU1RCx1Q0FBbUMsb0RBQW9ELENBQUMsQ0FBQTtBQWF4RjtJQVFDLHlDQUFvQixtQkFBdUM7UUFBdkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQU4zRCxhQUFRLEdBQVEsVUFBVSxDQUFDO1FBQzNCLDRCQUF1QixHQUFZLEtBQUssQ0FBQztRQUN6QywwQkFBcUIsR0FBWSxLQUFLLENBQUM7UUFDdkMsZ0JBQVcsR0FBVSxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUUzRyxjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFDc0IsQ0FBQztJQUVoRSxrREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLHVCQUF1QixHQUFZLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxxQkFBcUIsR0FBWSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUdsRixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0QsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsQ0FBQztJQUVGLENBQUM7SUFFRCx5REFBZSxHQUFmO0lBS0csQ0FBQztJQUVELDBEQUFnQixHQUFoQixVQUFpQixLQUFVO1FBQzdCLElBQUksQ0FBQyx1QkFBdUIsR0FBWSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN2RixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNMLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDNUIsQ0FBQztJQUNDLENBQUM7SUFFRCx3REFBYyxHQUFkLFVBQWUsS0FBVTtRQUMzQixJQUFJLENBQUMscUJBQXFCLEdBQVksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDbEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDTCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzVCLENBQUM7SUFDQyxDQUFDO0lBRUosa0RBQVEsR0FBUixVQUFTLElBQVk7UUFDcEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBaEREO1FBQUMsYUFBTSxFQUFFOztzRUFBQTtJQWpCVjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxVQUFVLEVBQUUsQ0FBQywyQkFBTyxDQUFDO1lBQ2xCLEtBQUssRUFBRSxDQUFDLGtCQUFVLENBQUM7WUFDdEIsV0FBVyxFQUFFLHdDQUF3QztZQUNsRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztTQUVsRCxDQUFDOzt1Q0FBQTtJQTJERixzQ0FBQztBQUFELENBekRBLEFBeURDLElBQUE7QUF6RFksdUNBQStCLGtDQXlEM0MsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2NvbXBvbmVudF9jb25maWdfbWFuYWdlci9jb21wb25lbnRfY29uZmlnX21hbmFnZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2x9IGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlcy9jb250cm9scy9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlbW92ZVRhZ3MgfSBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvcGlwZXMvaW5kZXgnO1xyXG5pbXBvcnQge1NlY3Rpb24sIEl0ZW19IGZyb20gJy4uLy4uL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IEZlYXR1cmVBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9mZWF0dXJlLWFjY2Vzcy5zZXJ2aWNlJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdjb21wb25lbnQtbWFuYWdlci1jb25maWcnLFxyXG5cdGRpcmVjdGl2ZXM6IFtDb250cm9sXSxcclxuICAgIHBpcGVzOiBbUmVtb3ZlVGFnc10sXHJcblx0dGVtcGxhdGVVcmw6ICdjb21wb25lbnRfY29uZmlnX21hbmFnZXIudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vYXNzZXRzL2Nzcy9sZWZ0TGlzdC5zdHlsZS5jc3MnXSxcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q29uZmlnTWFuYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XHJcblx0dGVtcGxhdGVKc29uOiBhbnk7XHJcblx0c2VsZWN0ZWQ6IGFueSA9ICdzZXR0aW5ncyc7XHJcblx0aXNJbnRlZ2VyYXRpb25BdmFpbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRpc0VtYmVkZENvZGVBdmFpbGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRDb25maWdBcnJheTogYW55W10gPSBbXCJzZXR0aW5nc1wiLCBcImludGVncmF0aW9uc1wiLCBcImVtYWlsXCIsIFwic2hhcmUteW91ci1jYWxjdWxhdG9yXCIsIFwibGF1bmNoLXBvcHVwXCIsIFwiZW1iZWRkZWQtY29kZVwiXTtcclxuXHJcblx0QE91dHB1dCgpIHNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9mZWF0dXJlQXV0aFNlcnZpY2U6IEZlYXR1cmVBdXRoU2VydmljZSkgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0XHR0aGlzLmlzSW50ZWdlcmF0aW9uQXZhaWxhYmxlID0gPGJvb2xlYW4+dGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmZlYXR1cmVzLmludGVncmF0aW9ucztcclxuXHRcdFx0dGhpcy5pc0VtYmVkZENvZGVBdmFpbGFibGUgPSA8Ym9vbGVhbj50aGlzLl9mZWF0dXJlQXV0aFNlcnZpY2UuZmVhdHVyZXMuZW1iZWRkaW5nO1xyXG5cdFx0XHJcblxyXG5cdFx0IGlmIChqUXVlcnkuaW5BcnJheShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGFzaC1saW5rJyksIHRoaXMuQ29uZmlnQXJyYXkpICE9IC0xKSB7XHJcbiAgICAgICAgICAgXHR0aGlzLnNlbGVjdGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhc2gtbGluaycpO1xyXG5cdFx0XHRqUXVlcnkoJyNjb25maWctJyArIHRoaXMuc2VsZWN0ZWQpLmNsaWNrKCk7XHJcblx0XHR9XHJcblx0XHQvL3RoaXMuc2VsZWN0aW9uLmVtaXQodGhpcy5zZWxlY3RlZCk7XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHQvLyBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkLXN1Yi10YWInKSkge1xyXG4gICAgICAgIC8vICAgIFx0dGhpcy5zZWxlY3RlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZC1zdWItdGFiJyk7XHJcblx0XHQvLyBcdGpRdWVyeSgnI2NvbmZpZy0nICsgdGhpcy5zZWxlY3RlZCkuY2xpY2soKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZWdyYXRpb25DbGljayhldmVudDogYW55KSB7XHJcblx0XHR0aGlzLmlzSW50ZWdlcmF0aW9uQXZhaWxhYmxlID0gPGJvb2xlYW4+dGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmZlYXR1cmVzLmludGVncmF0aW9ucztcclxuXHRcdGlmICh0aGlzLmlzSW50ZWdlcmF0aW9uQXZhaWxhYmxlKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWQgPSAnaW50ZWdyYXRpb25zJztcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRqUXVlcnkoJyNwcmVtaXVtTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkID0gJ3NldHRpbmdzJztcclxuXHRcdH1cclxuICAgIH1cclxuXHJcbiAgICBlbWJlZGRpbmdDbGljayhldmVudDogYW55KSB7XHJcblx0XHR0aGlzLmlzRW1iZWRkQ29kZUF2YWlsYWJsZSA9IDxib29sZWFuPnRoaXMuX2ZlYXR1cmVBdXRoU2VydmljZS5mZWF0dXJlcy5lbWJlZGRpbmc7XHJcblx0XHRpZiAodGhpcy5pc0VtYmVkZENvZGVBdmFpbGFibGUpIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZCA9ICdlbWJlZGRlZC1jb2RlJztcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRqUXVlcnkoJyNwcmVtaXVtTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkID0gJ3NldHRpbmdzJztcclxuXHRcdH1cclxuICAgIH1cclxuXHJcblx0b25TZWxlY3QoY29tcDogc3RyaW5nKSB7XHJcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJytjb21wO1xyXG5cdFx0dGhpcy5zZWxlY3RlZCA9IGNvbXA7XHJcblx0XHR0aGlzLnNlbGVjdGlvbi5lbWl0KGNvbXApO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
