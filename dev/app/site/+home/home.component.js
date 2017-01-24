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
var site_home_component_1 = require('./+site-home/site-home.component');
var company_home_component_1 = require('./+company-home/company-home.component');
var subdomain_service_1 = require('./../../shared/services/subdomain.service');
var HomeComponent = (function () {
    function HomeComponent(subDomainService) {
        this.subDomainService = subDomainService;
        this.subDomain = subDomainService.subDomain;
    }
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-home',
            template: "\n    <site-home *ngIf=\"!subDomain.is_sub_domain_url\"></site-home>\n    <!--<company-home *ngIf=\"subDomain.is_sub_domain_url || subDomain.exists\"></company-home>-->\n  ",
            directives: [site_home_component_1.SiteHomeComponent, company_home_component_1.CompanyHomeComponent]
        }), 
        __metadata('design:paramtypes', [subdomain_service_1.SubDomainService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsb0NBQWtDLGtDQUFrQyxDQUFDLENBQUE7QUFDckUsdUNBQXFDLHdDQUF3QyxDQUFDLENBQUE7QUFFOUUsa0NBQWdDLDJDQUEyQyxDQUFDLENBQUE7QUFZNUU7SUFJRSx1QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7SUFDOUMsQ0FBQztJQWhCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLDhLQUdUO1lBQ0QsVUFBVSxFQUFFLENBQUMsdUNBQWlCLEVBQUUsNkNBQW9CLENBQUM7U0FDdEQsQ0FBQzs7cUJBQUE7SUFTRixvQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFkscUJBQWEsZ0JBT3pCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2l0ZUhvbWVDb21wb25lbnQgfSBmcm9tICcuLytzaXRlLWhvbWUvc2l0ZS1ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbXBhbnlIb21lQ29tcG9uZW50IH0gZnJvbSAnLi8rY29tcGFueS1ob21lL2NvbXBhbnktaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJEb21haW4gfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9pbnRlcmZhY2VzL3N1YmRvbWFpbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTdWJEb21haW5TZXJ2aWNlfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9zdWJkb21haW4uc2VydmljZSc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8c2l0ZS1ob21lICpuZ0lmPVwiIXN1YkRvbWFpbi5pc19zdWJfZG9tYWluX3VybFwiPjwvc2l0ZS1ob21lPlxyXG4gICAgPCEtLTxjb21wYW55LWhvbWUgKm5nSWY9XCJzdWJEb21haW4uaXNfc3ViX2RvbWFpbl91cmwgfHwgc3ViRG9tYWluLmV4aXN0c1wiPjwvY29tcGFueS1ob21lPi0tPlxyXG4gIGAsXHJcbiAgZGlyZWN0aXZlczogW1NpdGVIb21lQ29tcG9uZW50LCBDb21wYW55SG9tZUNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxuXHJcbiAgc3ViRG9tYWluOiBTdWJEb21haW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3ViRG9tYWluU2VydmljZTogU3ViRG9tYWluU2VydmljZSkge1xyXG4gICAgdGhpcy5zdWJEb21haW4gPSBzdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbjtcclxuICB9XHJcbn1cclxuIl19
