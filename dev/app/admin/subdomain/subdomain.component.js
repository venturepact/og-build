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
var forms_1 = require('@angular/forms');
var env_config_1 = require('./../../config/env.config');
var domains_service_1 = require('./../../shared/services/domains.service');
var index_1 = require('./../../shared/services/index');
var domain_component_1 = require('./component/domain.component');
var SubDomainComponent = (function () {
    function SubDomainComponent(fb, _domainService, _script) {
        this.fb = fb;
        this._domainService = _domainService;
        this._script = _script;
        this.loading = false;
        this.subdomainExtension = '';
        this.ReservedDomains = [];
        this.PremiumDomains = [];
        this.error = false;
        this.errorMessage = '';
    }
    SubDomainComponent.prototype.ngOnInit = function () {
        this.PremiumSubDomainForm = this.fb.group({
            premiumSubdomain: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern('^[a-zA-Z0-9]*$')])]
        });
        this.ReservedSubDomainForm = this.fb.group({
            reservedSubdomain: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern('^[a-zA-Z0-9]*$')])]
        });
        this.subdomainExtension = '.' + env_config_1.Config.APP_EXTENSION;
        this.error = false;
        this.errorMessage = '';
    };
    SubDomainComponent.prototype.ngAfterViewInit = function () {
        this._script.load('datatables')
            .then(function (data) {
        })
            .catch(function (error) {
            console.log('Script not loaded', error);
        });
    };
    SubDomainComponent.prototype.hideError = function () {
        this.error = false;
        this.errorMessage = '';
    };
    SubDomainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-sub-domains',
            templateUrl: './subdomain.component.html',
            styleUrls: ['subdomain.component.css', './../jquery.dataTables.min.css'],
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES, domain_component_1.DomainComponent],
            providers: [domains_service_1.DomainService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, domains_service_1.DomainService, index_1.Script])
    ], SubDomainComponent);
    return SubDomainComponent;
}());
exports.SubDomainComponent = SubDomainComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9zdWJkb21haW4vc3ViZG9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUJBQStDLGVBQWUsQ0FBQyxDQUFBO0FBQy9ELHVCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25ELHNCQUEyRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzVGLDJCQUF1QiwyQkFBMkIsQ0FBQyxDQUFBO0FBRW5ELGdDQUE0Qix5Q0FBeUMsQ0FBQyxDQUFBO0FBQ3RFLHNCQUFxQiwrQkFBK0IsQ0FBQyxDQUFBO0FBQ3JELGlDQUE4Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBWTdEO0lBU0MsNEJBQW1CLEVBQWMsRUFDekIsY0FBNEIsRUFDM0IsT0FBZTtRQUZMLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWM7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVZ4QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLHVCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUdoQyxvQkFBZSxHQUFhLEVBQUUsQ0FBQztRQUMvQixtQkFBYyxHQUFhLEVBQUUsQ0FBQztRQUM5QixVQUFLLEdBQVcsS0FBSyxDQUFDO1FBQ3RCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO0lBSTFCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3pDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFDLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUMsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsa0JBQVUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0gsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxFQUFDLGtCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQVUsQ0FBQyxRQUFRLEVBQUMsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsa0JBQVUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUgsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsR0FBRyxtQkFBTSxDQUFDLGFBQWEsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsNENBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUMxQixJQUFJLENBQUMsVUFBQyxJQUFJO1FBQ1gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUEvQ0Y7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsRUFBQyxnQ0FBZ0MsQ0FBQztZQUN2RSxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxnQ0FBd0IsRUFBQyxrQ0FBZSxDQUFDO1lBQ3pFLFNBQVMsRUFBRSxDQUFDLCtCQUFhLENBQUM7U0FDM0IsQ0FBQzs7MEJBQUE7SUEwQ0YseUJBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBO0FBeENZLDBCQUFrQixxQkF3QzlCLENBQUEiLCJmaWxlIjoiYXBwL2FkbWluL3N1YmRvbWFpbi9zdWJkb21haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCxPbkluaXQsQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi8uLi8uLi9jb25maWcvZW52LmNvbmZpZyc7XHJcbmltcG9ydCB7RG9tYWluc30gZnJvbSAnLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2RvbWFpbnMnO1xyXG5pbXBvcnQge0RvbWFpblNlcnZpY2V9IGZyb20gJy4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2RvbWFpbnMuc2VydmljZSc7XHJcbmltcG9ydCB7U2NyaXB0fSBmcm9tICcuLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7RG9tYWluQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudC9kb21haW4uY29tcG9uZW50JztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1zdWItZG9tYWlucycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N1YmRvbWFpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3N1YmRvbWFpbi5jb21wb25lbnQuY3NzJywnLi8uLi9qcXVlcnkuZGF0YVRhYmxlcy5taW4uY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsRG9tYWluQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtEb21haW5TZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1YkRvbWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAsIEFmdGVyVmlld0luaXR7XHJcblx0bG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHN1YmRvbWFpbkV4dGVuc2lvbjogc3RyaW5nID0gJyc7XHJcblx0UHJlbWl1bVN1YkRvbWFpbkZvcm06Rm9ybUdyb3VwO1xyXG5cdFJlc2VydmVkU3ViRG9tYWluRm9ybTpGb3JtR3JvdXA7XHJcblx0UmVzZXJ2ZWREb21haW5zOkRvbWFpbnNbXSA9IFtdO1xyXG5cdFByZW1pdW1Eb21haW5zOkRvbWFpbnNbXSA9IFtdO1xyXG5cdGVycm9yOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBmYjpGb3JtQnVpbGRlcixcclxuXHRcdHB1YmxpYyBfZG9tYWluU2VydmljZTpEb21haW5TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfc2NyaXB0IDpTY3JpcHQpe1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKXtcclxuXHRcdHRoaXMuUHJlbWl1bVN1YkRvbWFpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuXHRcdFx0cHJlbWl1bVN1YmRvbWFpbjogWycnLFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxWYWxpZGF0b3JzLnBhdHRlcm4oJ15bYS16QS1aMC05XSokJyldKV1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5SZXNlcnZlZFN1YkRvbWFpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuXHRcdFx0cmVzZXJ2ZWRTdWJkb21haW46IFsnJyxWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksVmFsaWRhdG9ycy5wYXR0ZXJuKCdeW2EtekEtWjAtOV0qJCcpXSldXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3ViZG9tYWluRXh0ZW5zaW9uID0gJy4nICsgQ29uZmlnLkFQUF9FWFRFTlNJT047XHJcblx0XHR0aGlzLmVycm9yID0gZmFsc2U7XHJcblx0XHR0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdCAgICB0aGlzLl9zY3JpcHQubG9hZCgnZGF0YXRhYmxlcycpXHJcblx0ICAgICAgICAudGhlbigoZGF0YSk9PntcclxuXHQgICAgICAgIH0pXHJcblx0ICAgICAgICAuY2F0Y2goKGVycm9yKT0+e1xyXG5cdCAgICAgICAgXHRjb25zb2xlLmxvZygnU2NyaXB0IG5vdCBsb2FkZWQnLCBlcnJvcik7XHJcblx0ICAgICAgICB9KTtcclxuICBcdH1cclxuXHJcblx0ICBoaWRlRXJyb3IoKXtcclxuXHRcdHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuXHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblx0fSBcclxuXHJcbn0iXX0=
