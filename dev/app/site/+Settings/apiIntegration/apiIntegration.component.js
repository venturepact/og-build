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
var index_1 = require('../../../shared/services/index');
var company_1 = require('../../../shared/models/company');
var APIIntegrationComponent = (function () {
    function APIIntegrationComponent(_companyService, router, settingsCommunicationService) {
        this._companyService = _companyService;
        this.router = router;
        this.settingsCommunicationService = settingsCommunicationService;
        this.Message = '';
        this.companies = [];
        this.clickedCompany = new company_1.Company({});
        this.apiKey = '';
    }
    APIIntegrationComponent.prototype.ngOnInit = function () {
        this.getMyCompanies();
    };
    APIIntegrationComponent.prototype.getMyCompanies = function () {
        var self = this;
        var getCompany = self._companyService.getCompanies()
            .subscribe(function (success) {
            self.myCompaniesList = [];
            self.activeInCompanies = [];
            success.forEach(function (company) {
                if (company.user_company.status != 'LEFT' && company.user_company.status != 'DELETED') {
                    self.myCompaniesList.push(new company_1.Company(company));
                    if (company.user_company.active)
                        self.activeInCompanies.push(new company_1.Company(company));
                    self.companies.push(company);
                }
            });
            self.settingsCommunicationService.updateCompanyList(self.myCompaniesList);
        }, function (error) {
            getCompany.unsubscribe();
        });
    };
    APIIntegrationComponent.prototype.generateApiKey = function (compId, index) {
        var _this = this;
        var self = this;
        var generateApiKey = self._companyService.generateApiKey(compId)
            .subscribe(function (success) {
            _this.clickedCompany = new company_1.Company(success);
            _this.companies[index].api = _this.clickedCompany.api;
            var text = jQuery(jQuery('#regenerate-api-' + index)).text().slice(7);
            if (text === 'Regenerate') {
                window.toastNotification('API Key is Regenerated');
            }
            else {
                window.toastNotification('API Key is Generated');
            }
            jQuery('#regenerate-api-' + index).addClass('hide');
        }, function (error) {
            self.Message = error.error.message;
            window.toastNotification(self.Message);
            generateApiKey.unsubscribe();
        });
    };
    APIIntegrationComponent.prototype.copyApi = function (index) {
        clipboard.copy(jQuery('#input-api-' + index)[0].innerText);
        window.toastNotification('API Copied');
    };
    APIIntegrationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-api-setting',
            templateUrl: 'apiIntegration.component.html',
            styleUrls: ['apiIntegration.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.CompanyService, router_1.Router, index_1.SettingsCommunicationService])
    ], APIIntegrationComponent);
    return APIIntegrationComponent;
}());
exports.APIIntegrationComponent = APIIntegrationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytTZXR0aW5ncy9hcGlJbnRlZ3JhdGlvbi9hcGlJbnRlZ3JhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2QyxzQkFBMkQsZ0NBQWdDLENBQUMsQ0FBQTtBQUM1Rix3QkFBd0IsZ0NBQWdDLENBQUMsQ0FBQTtBQWF6RDtJQVFDLGlDQUNTLGVBQStCLEVBQ2hDLE1BQWUsRUFDZCw0QkFBeUQ7UUFGekQsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQTZCO1FBVmxFLFlBQU8sR0FBTyxFQUFFLENBQUM7UUFDakIsY0FBUyxHQUFPLEVBQUUsQ0FBQztRQUduQixtQkFBYyxHQUFPLElBQUksaUJBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxXQUFNLEdBQVUsRUFBRSxDQUFDO0lBT2xCLENBQUM7SUFFRiwwQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnREFBYyxHQUFkO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFO2FBQ2xELFNBQVMsQ0FDVCxVQUFDLE9BQVc7WUFDWCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFXO2dCQUMzQixFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxNQUFNLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztvQkFDckYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2hELEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO3dCQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUdqRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUUzRSxDQUFDLEVBQ0QsVUFBQyxLQUFTO1lBQ1QsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FDRCxDQUFDO0lBQ0osQ0FBQztJQUVELGdEQUFjLEdBQWQsVUFBZSxNQUFhLEVBQUMsS0FBUztRQUF0QyxpQkFxQkM7UUFwQkEsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQzthQUM5RCxTQUFTLENBQ1QsVUFBQyxPQUFXO1lBQ1gsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFDcEQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsR0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRSxFQUFFLENBQUEsQ0FBQyxJQUFJLEtBQUcsWUFBWSxDQUFDLENBQUEsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNMLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ2xELENBQUM7WUFDRCxNQUFNLENBQUMsa0JBQWtCLEdBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELENBQUMsRUFDRCxVQUFDLEtBQVM7WUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FDRCxDQUFDO0lBQ0osQ0FBQztJQUNELHlDQUFPLEdBQVAsVUFBUSxLQUFZO1FBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQTdFRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzNDLENBQUM7OytCQUFBO0lBeUVGLDhCQUFDO0FBQUQsQ0F2RUEsQUF1RUMsSUFBQTtBQXZFWSwrQkFBdUIsMEJBdUVuQyxDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytTZXR0aW5ncy9hcGlJbnRlZ3JhdGlvbi9hcGlJbnRlZ3JhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0NvbXBhbnlTZXJ2aWNlLCBTZXR0aW5nc0NvbW11bmljYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb21wYW55IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL21vZGVscy9jb21wYW55JztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5kZWNsYXJlIHZhciBjbGlwYm9hcmQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdvZy1hcGktc2V0dGluZycsXHJcblx0dGVtcGxhdGVVcmw6ICdhcGlJbnRlZ3JhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJ2FwaUludGVncmF0aW9uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFQSUludGVncmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRNZXNzYWdlOmFueSA9ICcnO1xyXG5cdGNvbXBhbmllczphbnkgPSBbXTtcclxuXHRteUNvbXBhbmllc0xpc3Q6YW55O1xyXG5cdGFjdGl2ZUluQ29tcGFuaWVzOmFueTtcclxuXHRjbGlja2VkQ29tcGFueTphbnkgPSBuZXcgQ29tcGFueSh7fSk7XHJcblx0YXBpS2V5OnN0cmluZyA9ICcnO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgX2NvbXBhbnlTZXJ2aWNlOiBDb21wYW55U2VydmljZSxcclxuXHRcdHB1YmxpYyByb3V0ZXIgOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIHNldHRpbmdzQ29tbXVuaWNhdGlvblNlcnZpY2U6U2V0dGluZ3NDb21tdW5pY2F0aW9uU2VydmljZVxyXG5cdFx0KXtcclxuICB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5nZXRNeUNvbXBhbmllcygpO1xyXG5cdH1cclxuXHJcblx0Z2V0TXlDb21wYW5pZXMoKXtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGxldCBnZXRDb21wYW55ID0gc2VsZi5fY29tcGFueVNlcnZpY2UuZ2V0Q29tcGFuaWVzKClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoc3VjY2VzczphbnkpPT57XHJcblx0XHRcdFx0XHRzZWxmLm15Q29tcGFuaWVzTGlzdCA9IFtdO1xyXG5cdFx0XHRcdFx0c2VsZi5hY3RpdmVJbkNvbXBhbmllcyA9IFtdO1xyXG5cdFx0XHRcdFx0c3VjY2Vzcy5mb3JFYWNoKChjb21wYW55OmFueSk9PntcclxuXHRcdFx0XHRcdFx0aWYoY29tcGFueS51c2VyX2NvbXBhbnkuc3RhdHVzICE9ICdMRUZUJyAmJiBjb21wYW55LnVzZXJfY29tcGFueS5zdGF0dXMgIT0gJ0RFTEVURUQnKXtcclxuXHRcdFx0XHRcdFx0XHRzZWxmLm15Q29tcGFuaWVzTGlzdC5wdXNoKG5ldyBDb21wYW55KGNvbXBhbnkpKTtcclxuXHRcdFx0XHRcdFx0XHRpZihjb21wYW55LnVzZXJfY29tcGFueS5hY3RpdmUpXHJcblx0XHRcdFx0XHRcdFx0XHRzZWxmLmFjdGl2ZUluQ29tcGFuaWVzLnB1c2gobmV3IENvbXBhbnkoY29tcGFueSkpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBpZihjb21wYW55Lm5hbWUgIT0gJ2xpdmUnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWxmLmNvbXBhbmllcy5wdXNoKGNvbXBhbnkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHNlbGYuc2V0dGluZ3NDb21tdW5pY2F0aW9uU2VydmljZS51cGRhdGVDb21wYW55TGlzdChzZWxmLm15Q29tcGFuaWVzTGlzdCk7XHJcblx0XHRcdFx0XHQvLyBzZWxmLm15Q29tcGFuaWVzTGlzdFVwZGF0ZWQuZW1pdChzZWxmLm15Q29tcGFuaWVzTGlzdCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+e1xyXG5cdFx0XHRcdFx0Z2V0Q29tcGFueS51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblxyXG5cdGdlbmVyYXRlQXBpS2V5KGNvbXBJZDpzdHJpbmcsaW5kZXg6YW55KXtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGxldCBnZW5lcmF0ZUFwaUtleSA9IHNlbGYuX2NvbXBhbnlTZXJ2aWNlLmdlbmVyYXRlQXBpS2V5KGNvbXBJZClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoc3VjY2VzczphbnkpPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5jbGlja2VkQ29tcGFueSA9IG5ldyBDb21wYW55KHN1Y2Nlc3MpO1xyXG5cdFx0XHRcdFx0dGhpcy5jb21wYW5pZXNbaW5kZXhdLmFwaSA9IHRoaXMuY2xpY2tlZENvbXBhbnkuYXBpO1xyXG5cdFx0XHRcdFx0bGV0IHRleHQgPSBqUXVlcnkoalF1ZXJ5KCcjcmVnZW5lcmF0ZS1hcGktJytpbmRleCkpLnRleHQoKS5zbGljZSg3KTtcclxuXHRcdFx0XHRcdGlmKHRleHQ9PT0nUmVnZW5lcmF0ZScpe1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ0FQSSBLZXkgaXMgUmVnZW5lcmF0ZWQnKTtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ0FQSSBLZXkgaXMgR2VuZXJhdGVkJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRqUXVlcnkoJyNyZWdlbmVyYXRlLWFwaS0nK2luZGV4KS5hZGRDbGFzcygnaGlkZScpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0KGVycm9yOmFueSk9PiB7XHJcblx0XHRcdFx0XHRzZWxmLk1lc3NhZ2UgPSBlcnJvci5lcnJvci5tZXNzYWdlO1xyXG5cdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKHNlbGYuTWVzc2FnZSk7XHJcblx0XHRcdFx0XHRnZW5lcmF0ZUFwaUtleS51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblx0Y29weUFwaShpbmRleDpzdHJpbmcpe1xyXG5cdFx0Y2xpcGJvYXJkLmNvcHkoalF1ZXJ5KCcjaW5wdXQtYXBpLScraW5kZXgpWzBdLmlubmVyVGV4dCk7XHJcbiAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdBUEkgQ29waWVkJyk7XHJcblx0fVxyXG59XHJcbiJdfQ==
