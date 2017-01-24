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
var index_1 = require('./../components/+sideNavbar/index');
var index_2 = require('./account/index');
var index_3 = require('./membership/index');
var index_4 = require('./teamSetting/index');
var index_5 = require('./apiIntegration/index');
var index_6 = require('./notification/index');
var router_1 = require('@angular/router');
var index_7 = require('../../shared/services/index');
var SettingsComponent = (function () {
    function SettingsComponent(settingsCommunicationService) {
        this.settingsCommunicationService = settingsCommunicationService;
        this.CompaniesList = this.settingsCommunicationService.companyList;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.Message = 'message';
        this.sideNavbar = 'settings';
        this.sidenav = 1;
    };
    SettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-settings',
            templateUrl: 'settings.component.html',
            styleUrls: ['settings.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, index_1.SideNavbarComponent, index_2.AccountComponent, index_3.MembershipComponent, index_4.TeamSettingComponent, index_6.NotificationComponent, index_5.APIIntegrationComponent]
        }), 
        __metadata('design:paramtypes', [index_7.SettingsCommunicationService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytTZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwRCxlQUFlLENBQUMsQ0FBQTtBQUUxRSxzQkFBb0MsbUNBQW1DLENBQUMsQ0FBQTtBQUN4RSxzQkFBaUMsaUJBQWlCLENBQUMsQ0FBQTtBQUNuRCxzQkFBb0Msb0JBQW9CLENBQUMsQ0FBQTtBQUN6RCxzQkFBcUMscUJBQXFCLENBQUMsQ0FBQTtBQUMzRCxzQkFBd0Msd0JBQXdCLENBQUMsQ0FBQTtBQUNqRSxzQkFBc0Msc0JBQXNCLENBQUMsQ0FBQTtBQUM3RCx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxzQkFBNkMsNkJBQTZCLENBQUMsQ0FBQTtBQVczRTtJQVFFLDJCQUFvQiw0QkFBeUQ7UUFBekQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE2QjtRQUMzRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUM7SUFDckUsQ0FBQztJQUNELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBeEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBRXJDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDJCQUFtQixFQUFFLHdCQUFnQixFQUFFLDJCQUFtQixFQUFFLDRCQUFvQixFQUFFLDZCQUFxQixFQUFFLCtCQUF1QixDQUFDO1NBQ2xLLENBQUM7O3lCQUFBO0lBa0JGLHdCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSx5QkFBaUIsb0JBZ0I3QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytTZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vL2ltcG9ydCB7U2V0dGluZ3NTZXJ2aWNlfSBmcm9tICcuL3NldHRpbmcuc2VydmljZXMnO1xyXG5pbXBvcnQgeyBTaWRlTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi8uLi9jb21wb25lbnRzLytzaWRlTmF2YmFyL2luZGV4JztcclxuaW1wb3J0IHsgQWNjb3VudENvbXBvbmVudCB9IGZyb20gJy4vYWNjb3VudC9pbmRleCc7XHJcbmltcG9ydCB7IE1lbWJlcnNoaXBDb21wb25lbnQgfSBmcm9tICcuL21lbWJlcnNoaXAvaW5kZXgnO1xyXG5pbXBvcnQgeyBUZWFtU2V0dGluZ0NvbXBvbmVudCB9IGZyb20gJy4vdGVhbVNldHRpbmcvaW5kZXgnO1xyXG5pbXBvcnQgeyBBUElJbnRlZ3JhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYXBpSW50ZWdyYXRpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25vdGlmaWNhdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2V0dGluZ3NDb21tdW5pY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1zZXR0aW5ncycsXHJcbiAgdGVtcGxhdGVVcmw6ICdzZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3NldHRpbmdzLmNvbXBvbmVudC5jc3MnXSxcclxuICAvL3Byb3ZpZGVyczogW1NldHRpbmdzU2VydmljZV0sXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBTaWRlTmF2YmFyQ29tcG9uZW50LCBBY2NvdW50Q29tcG9uZW50LCBNZW1iZXJzaGlwQ29tcG9uZW50LCBUZWFtU2V0dGluZ0NvbXBvbmVudCwgTm90aWZpY2F0aW9uQ29tcG9uZW50LCBBUElJbnRlZ3JhdGlvbkNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICBzaWRlbmF2OmFueTtcclxuICBzaWRlTmF2YmFyOmFueTtcclxuICBNZXNzYWdlOmFueTtcclxuICBzZWxlY3RlZENvbXBhbnk6YW55O1xyXG4gIENvbXBhbmllc0xpc3Q6YW55O1xyXG4gIHNlbFVzZXJBZG1pbjphbnk7XHJcbiAgaXNSZXF1ZXN0ZWQ6YW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3NDb21tdW5pY2F0aW9uU2VydmljZTpTZXR0aW5nc0NvbW11bmljYXRpb25TZXJ2aWNlKXtcclxuICAgIHRoaXMuQ29tcGFuaWVzTGlzdCA9IHRoaXMuc2V0dGluZ3NDb21tdW5pY2F0aW9uU2VydmljZS5jb21wYW55TGlzdDtcclxuICB9XHJcbiAgbmdPbkluaXQoKTphbnkge1xyXG4gICAgdGhpcy5NZXNzYWdlID0gJ21lc3NhZ2UnO1xyXG4gICAgdGhpcy5zaWRlTmF2YmFyID0gJ3NldHRpbmdzJztcclxuICAgIHRoaXMuc2lkZW5hdiA9IDE7XHJcbiAgfVxyXG59XHJcbiJdfQ==
