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
var router_1 = require('@angular/router');
var index_1 = require('./basicDetails/index');
var index_2 = require('./changePassword/index');
var index_3 = require('./userCompanies/index');
var index_4 = require('../../../shared/services/index');
var AccountComponent = (function () {
    function AccountComponent(router, settingsCommunicationService) {
        this.router = router;
        this.settingsCommunicationService = settingsCommunicationService;
        this.myCompanies = this.settingsCommunicationService.companyList;
        jQuery.material.init();
    }
    AccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-account',
            directives: [router_1.ROUTER_DIRECTIVES, index_1.BasicDetailsComponent, index_2.ChangePasswordComponent, index_3.UserCompaniesComponent],
            templateUrl: 'account.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['account.component.css', 'custom-material.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_4.SettingsCommunicationService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytTZXR0aW5ncy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQSxxQkFBNkMsZUFBZSxDQUFDLENBQUE7QUFDN0QsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFDNUQsc0JBQXNDLHNCQUFzQixDQUFDLENBQUE7QUFDN0Qsc0JBQXdDLHdCQUF3QixDQUFDLENBQUE7QUFDakUsc0JBQXVDLHVCQUF1QixDQUFDLENBQUE7QUFDL0Qsc0JBQTZDLGdDQUFnQyxDQUFDLENBQUE7QUFZOUU7SUFHRSwwQkFBbUIsTUFBYyxFQUFTLDRCQUEyRDtRQUFsRixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUErQjtRQUNuRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLENBQUM7UUFDakUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBZkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDZCQUFxQixFQUFDLCtCQUF1QixFQUFDLDhCQUFzQixDQUFDO1lBQ3JHLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDdEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLEVBQUMscUJBQXFCLENBQUM7U0FDMUQsQ0FBQzs7d0JBQUE7SUFTRix1QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksd0JBQWdCLG1CQU81QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytTZXR0aW5ncy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyBleHBvcnQgY2xhc3MgQWNjb3VudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuLy8gICBuZ09uSW5pdCgpIHtcclxuLy8gICAgIGpRdWVyeSgnc2VsZWN0LnRpbWUtem9uZScpLnRpbWV6b25lcygpO1xyXG4vLyAgICAgalF1ZXJ5Lm1hdGVyaWFsLmluaXQoKTtcclxuLy8gICB9XHJcblxyXG4vLyB9XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBCYXNpY0RldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL2Jhc2ljRGV0YWlscy9pbmRleCc7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9jaGFuZ2VQYXNzd29yZC9pbmRleCc7XHJcbmltcG9ydCB7IFVzZXJDb21wYW5pZXNDb21wb25lbnQgfSBmcm9tICcuL3VzZXJDb21wYW5pZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc0NvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1hY2NvdW50JyxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEJhc2ljRGV0YWlsc0NvbXBvbmVudCxDaGFuZ2VQYXNzd29yZENvbXBvbmVudCxVc2VyQ29tcGFuaWVzQ29tcG9uZW50XSxcclxuICB0ZW1wbGF0ZVVybDogJ2FjY291bnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcblx0c3R5bGVVcmxzOiBbJ2FjY291bnQuY29tcG9uZW50LmNzcycsJ2N1c3RvbS1tYXRlcmlhbC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjY291bnRDb21wb25lbnR7XHJcblxyXG4gIG15Q29tcGFuaWVzOmFueTtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBzZXR0aW5nc0NvbW11bmljYXRpb25TZXJ2aWNlIDogU2V0dGluZ3NDb21tdW5pY2F0aW9uU2VydmljZSkge1xyXG4gICAgdGhpcy5teUNvbXBhbmllcyA9IHRoaXMuc2V0dGluZ3NDb21tdW5pY2F0aW9uU2VydmljZS5jb21wYW55TGlzdDtcclxuICAgIGpRdWVyeS5tYXRlcmlhbC5pbml0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
