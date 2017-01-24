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
var index_1 = require('./components/index');
var index_2 = require('./../../../shared/services/index');
var company_1 = require('../../../shared/models/company');
var SingleCompanyComponent = (function () {
    function SingleCompanyComponent(companyService, route) {
        var _this = this;
        this.companyService = companyService;
        this.route = route;
        this.company_users = null;
        this.company = null;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    SingleCompanyComponent.prototype.ngAfterViewInit = function () {
        this.getCompanyUser(this.id);
        this.getCompanyInfo(this.id);
    };
    SingleCompanyComponent.prototype.getCompanyUser = function (id) {
        var _this = this;
        this.companyService.getCompanyUsers(id)
            .subscribe(function (response) {
            _this.company_users = response;
        }, function (response) {
            console.log('Company User', response);
        });
    };
    SingleCompanyComponent.prototype.getCompanyInfo = function (id) {
        var _this = this;
        this.companyService.getCompanyInfo(id)
            .subscribe(function (response) {
            _this.company = new company_1.AdminCompany(response.company);
        }, function (response) {
            console.log('getCompanyInfo Err', response);
        });
    };
    SingleCompanyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-single-company',
            templateUrl: 'single-company.component.html',
            styleUrls: ['single-company.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, index_1.TeamDetailComponent, index_1.MembershipDetailComponent, index_1.CalculatorDetailComponent, index_1.CompanyDetailComponent],
            providers: [index_2.CompanyService]
        }), 
        __metadata('design:paramtypes', [index_2.CompanyService, router_1.ActivatedRoute])
    ], SingleCompanyComponent);
    return SingleCompanyComponent;
}());
exports.SingleCompanyComponent = SingleCompanyComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wYW5pZXMvc2luZ2xlLWNvbXBhbnkvc2luZ2xlLWNvbXBhbnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsdUJBQWlELGlCQUFpQixDQUFDLENBQUE7QUFDbkUsc0JBQStHLG9CQUFvQixDQUFDLENBQUE7QUFDcEksc0JBQStCLGtDQUFrQyxDQUFDLENBQUE7QUFDbEUsd0JBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFhOUQ7SUFJQyxnQ0FDUyxjQUE2QixFQUM3QixLQUFxQjtRQU4vQixpQkE2Q0M7UUF4Q1MsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFMNUIsa0JBQWEsR0FBUyxJQUFJLENBQUM7UUFFN0IsWUFBTyxHQUFTLElBQUksQ0FBQztRQUlwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGdEQUFlLEdBQWY7UUFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBSUQsK0NBQWMsR0FBZCxVQUFlLEVBQVM7UUFBeEIsaUJBV0M7UUFWQSxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7YUFDckMsU0FBUyxDQUNULFVBQUMsUUFBWTtZQUNaLEtBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1FBRS9CLENBQUMsRUFDRCxVQUFDLFFBQVk7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQ0MsQ0FBQztJQUNOLENBQUM7SUFFRCwrQ0FBYyxHQUFkLFVBQWUsRUFBVTtRQUF6QixpQkFVQztRQVRBLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQzthQUNwQyxTQUFTLENBQ1YsVUFBQyxRQUFhO1lBQ2IsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHNCQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELENBQUMsRUFDRCxVQUFDLFFBQWE7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FDQSxDQUFDO0lBQ0osQ0FBQztJQXBERjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQzNDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFDLDJCQUFtQixFQUFDLGlDQUF5QixFQUFDLGlDQUF5QixFQUFDLDhCQUFzQixDQUFDO1lBQzlILFNBQVMsRUFBQyxDQUFDLHNCQUFjLENBQUM7U0FDM0IsQ0FBQzs7OEJBQUE7SUErQ0YsNkJBQUM7QUFBRCxDQTdDQSxBQTZDQyxJQUFBO0FBN0NZLDhCQUFzQix5QkE2Q2xDLENBQUEiLCJmaWxlIjoiYXBwL2FkbWluL2NvbXBhbmllcy9zaW5nbGUtY29tcGFueS9zaW5nbGUtY29tcGFueS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2FsY3VsYXRvckRldGFpbENvbXBvbmVudCwgVGVhbURldGFpbENvbXBvbmVudCxDb21wYW55RGV0YWlsQ29tcG9uZW50LE1lbWJlcnNoaXBEZXRhaWxDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBhbnlTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBZG1pbkNvbXBhbnkgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2NvbXBhbnknO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1zaW5nbGUtY29tcGFueScsXHJcbiAgdGVtcGxhdGVVcmw6ICdzaW5nbGUtY29tcGFueS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3NpbmdsZS1jb21wYW55LmNvbXBvbmVudC5jc3MnXSxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsVGVhbURldGFpbENvbXBvbmVudCxNZW1iZXJzaGlwRGV0YWlsQ29tcG9uZW50LENhbGN1bGF0b3JEZXRhaWxDb21wb25lbnQsQ29tcGFueURldGFpbENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOltDb21wYW55U2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVDb21wYW55Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdHtcclxuICBcdGNvbXBhbnlfdXNlcnM6YW55W10gPSBudWxsO1xyXG5cdGlkIDogbnVtYmVyIDtcclxuXHRjb21wYW55IDogYW55ID0gbnVsbDtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29tcGFueVNlcnZpY2U6Q29tcGFueVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSl7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0dGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZygndXNlciBpZCcsdGhpcy5pZCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0bmdBZnRlclZpZXdJbml0KCl7XHJcblx0XHR0aGlzLmdldENvbXBhbnlVc2VyKHRoaXMuaWQpO1xyXG5cdFx0dGhpcy5nZXRDb21wYW55SW5mbyh0aGlzLmlkKTtcclxuXHR9XHJcblxyXG5cdFxyXG5cclxuXHRnZXRDb21wYW55VXNlcihpZDpudW1iZXIpIHtcclxuXHRcdHRoaXMuY29tcGFueVNlcnZpY2UuZ2V0Q29tcGFueVVzZXJzKGlkKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChyZXNwb25zZTphbnkpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY29tcGFueV91c2VycyA9IHJlc3BvbnNlO1xyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZygnQ29tcGFueSBVc2VyJyxyZXNwb25zZSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQocmVzcG9uc2U6YW55KSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQ29tcGFueSBVc2VyJyxyZXNwb25zZSk7XHJcblx0XHRcdFx0fVxyXG4gXHRcdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29tcGFueUluZm8oaWQ6IG51bWJlcikge1xyXG5cdFx0dGhpcy5jb21wYW55U2VydmljZS5nZXRDb21wYW55SW5mbyhpZClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0KHJlc3BvbnNlOiBhbnkpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNvbXBhbnkgPSBuZXcgQWRtaW5Db21wYW55KHJlc3BvbnNlLmNvbXBhbnkpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQocmVzcG9uc2U6IGFueSkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdnZXRDb21wYW55SW5mbyBFcnInLCByZXNwb25zZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblx0XHJcbn0iXX0=
