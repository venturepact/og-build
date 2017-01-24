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
var share_calculator_component_1 = require('./config_components/share_calculator/share_calculator.component');
var settings_component_1 = require('./config_components/settings/settings.component');
var launch_popup_component_1 = require('./config_components/launch_popup/launch_popup.component');
var integrations_component_1 = require('./config_components/integrations/integrations.component');
var embedded_code_component_1 = require('./config_components/embedded_code/embedded_code.component');
var email_component_1 = require('./config_components/email/email.component');
var ConfigComponent = (function () {
    function ConfigComponent() {
        this.ConfigArray = ["settings", "integrations", "email", "share-your-calculator", "launch-popup", "embedded-code"];
    }
    ConfigComponent.prototype.ngAfterViewInit = function () {
        if (jQuery.inArray(localStorage.getItem('hash-link'), this.ConfigArray) != -1) {
            this.component = localStorage.getItem('hash-link');
            jQuery('#config-' + this.component).click();
            jQuery('.collapseTwo').click();
            localStorage.removeItem('hash-link');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ConfigComponent.prototype, "component", void 0);
    ConfigComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "config",
            templateUrl: 'config.template.html',
            directives: [share_calculator_component_1.ConfigShareCalculatorComponent, settings_component_1.ConfigSettingsComponent, launch_popup_component_1.ConfigLaunchPopupComponent,
                integrations_component_1.ConfigIntegrationsComponent, embedded_code_component_1.ConfigEmbeddedCodeComponent, email_component_1.ConfigEmailComponent],
            styleUrls: ['assets/css/component_config.style.css', 'assets/css/ripples.min.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], ConfigComponent);
    return ConfigComponent;
}());
exports.ConfigComponent = ConfigComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29uZmlnL2NvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpRSxlQUFlLENBQUMsQ0FBQTtBQUNqRiwyQ0FBNkMsaUVBQWlFLENBQUMsQ0FBQTtBQUMvRyxtQ0FBc0MsaURBQWlELENBQUMsQ0FBQTtBQUN4Rix1Q0FBeUMseURBQXlELENBQUMsQ0FBQTtBQUNuRyx1Q0FBMEMseURBQXlELENBQUMsQ0FBQTtBQUNwRyx3Q0FBMEMsMkRBQTJELENBQUMsQ0FBQTtBQUN0RyxnQ0FBbUMsMkNBQTJDLENBQUMsQ0FBQTtBQWEvRTtJQUlJO1FBRkEsZ0JBQVcsR0FBVSxDQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUlySCxDQUFDO0lBQ0QseUNBQWUsR0FBZjtRQUNJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1QyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0IsWUFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0wsQ0FBQztJQWJEO1FBQUMsWUFBSyxFQUFFOztzREFBQTtJQVpaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFVBQVUsRUFBRSxDQUFDLDJEQUE4QixFQUFFLDRDQUF1QixFQUFFLG1EQUEwQjtnQkFDNUYsb0RBQTJCLEVBQUUscURBQTJCLEVBQUUsc0NBQW9CLENBQUM7WUFDbkYsU0FBUyxFQUFFLENBQUMsdUNBQXVDLEVBQUUsNEJBQTRCLENBQUM7WUFDbEYsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FFeEMsQ0FBQzs7dUJBQUE7SUFpQkYsc0JBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLHVCQUFlLGtCQWUzQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29uZmlnL2NvbmZpZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb25maWdTaGFyZUNhbGN1bGF0b3JDb21wb25lbnR9IGZyb20gJy4vY29uZmlnX2NvbXBvbmVudHMvc2hhcmVfY2FsY3VsYXRvci9zaGFyZV9jYWxjdWxhdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29uZmlnU2V0dGluZ3NDb21wb25lbnR9IGZyb20gJy4vY29uZmlnX2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb25maWdMYXVuY2hQb3B1cENvbXBvbmVudH0gZnJvbSAnLi9jb25maWdfY29tcG9uZW50cy9sYXVuY2hfcG9wdXAvbGF1bmNoX3BvcHVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29uZmlnSW50ZWdyYXRpb25zQ29tcG9uZW50fSBmcm9tICcuL2NvbmZpZ19jb21wb25lbnRzL2ludGVncmF0aW9ucy9pbnRlZ3JhdGlvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb25maWdFbWJlZGRlZENvZGVDb21wb25lbnR9IGZyb20gJy4vY29uZmlnX2NvbXBvbmVudHMvZW1iZWRkZWRfY29kZS9lbWJlZGRlZF9jb2RlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29uZmlnRW1haWxDb21wb25lbnR9IGZyb20gJy4vY29uZmlnX2NvbXBvbmVudHMvZW1haWwvZW1haWwuY29tcG9uZW50JztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcImNvbmZpZ1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjb25maWcudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbQ29uZmlnU2hhcmVDYWxjdWxhdG9yQ29tcG9uZW50LCBDb25maWdTZXR0aW5nc0NvbXBvbmVudCwgQ29uZmlnTGF1bmNoUG9wdXBDb21wb25lbnQsXHJcbiAgICAgICAgQ29uZmlnSW50ZWdyYXRpb25zQ29tcG9uZW50LCBDb25maWdFbWJlZGRlZENvZGVDb21wb25lbnQsIENvbmZpZ0VtYWlsQ29tcG9uZW50XSxcclxuICAgIHN0eWxlVXJsczogWydhc3NldHMvY3NzL2NvbXBvbmVudF9jb25maWcuc3R5bGUuY3NzJywgJ2Fzc2V0cy9jc3MvcmlwcGxlcy5taW4uY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gICAgQElucHV0KCkgY29tcG9uZW50OiBhbnk7XHJcbiAgICBDb25maWdBcnJheTogYW55W10gPSBbXCJzZXR0aW5nc1wiLCBcImludGVncmF0aW9uc1wiLCBcImVtYWlsXCIsIFwic2hhcmUteW91ci1jYWxjdWxhdG9yXCIsIFwibGF1bmNoLXBvcHVwXCIsIFwiZW1iZWRkZWQtY29kZVwiXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGlmIChqUXVlcnkuaW5BcnJheShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGFzaC1saW5rJyksIHRoaXMuQ29uZmlnQXJyYXkpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhc2gtbGluaycpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNjb25maWctJyArIHRoaXMuY29tcG9uZW50KS5jbGljaygpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJy5jb2xsYXBzZVR3bycpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdoYXNoLWxpbmsnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
