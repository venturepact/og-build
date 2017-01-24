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
var starter_features_component_1 = require('./starter-features/starter-features.component');
var plan_service_1 = require('./../../shared/services/plan.service');
var PlansComponent = (function () {
    function PlansComponent(_planService) {
        this._planService = _planService;
        this.loading = false;
    }
    PlansComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this._planService.getPlans()
            .subscribe(function (result) {
            console.log(result);
            _this.plans = result;
            _this.loading = false;
        });
    };
    PlansComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-plans',
            templateUrl: 'plans.component.html',
            styleUrls: ['plans.component.css', 'custom-material.css'],
            directives: [router_1.ROUTER_DIRECTIVES, starter_features_component_1.StarterFeaturesComponent],
            providers: [plan_service_1.PlanService]
        }), 
        __metadata('design:paramtypes', [plan_service_1.PlanService])
    ], PlansComponent);
    return PlansComponent;
}());
exports.PlansComponent = PlansComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9wbGFucy9wbGFucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQyxlQUFlLENBQUMsQ0FBQTtBQUMxRCx1QkFBeUMsaUJBQWlCLENBQUMsQ0FBQTtBQUMzRCwyQ0FBeUMsK0NBQStDLENBQUMsQ0FBQTtBQUN6Riw2QkFBMkIsc0NBQXNDLENBQUMsQ0FBQTtBQVdsRTtJQUdDLHdCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUQ3QyxZQUFPLEdBQVcsS0FBSyxDQUFDO0lBR3hCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTthQUMxQixTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDcEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBeEJGO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixFQUFDLHFCQUFxQixDQUFDO1lBQ3hELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFDLHFEQUF3QixDQUFDO1lBQ3hELFNBQVMsRUFBQyxDQUFDLDBCQUFXLENBQUM7U0FDeEIsQ0FBQzs7c0JBQUE7SUFtQkYscUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLHNCQUFjLGlCQWlCMUIsQ0FBQSIsImZpbGUiOiJhcHAvYWRtaW4vcGxhbnMvcGxhbnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFJlbmRlcmVyLE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyxSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdGFydGVyRmVhdHVyZXNDb21wb25lbnQgfSBmcm9tICcuL3N0YXJ0ZXItZmVhdHVyZXMvc3RhcnRlci1mZWF0dXJlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BsYW5TZXJ2aWNlfSBmcm9tICAnLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcGxhbi5zZXJ2aWNlJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ29nLXBsYW5zJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BsYW5zLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsncGxhbnMuY29tcG9uZW50LmNzcycsJ2N1c3RvbS1tYXRlcmlhbC5jc3MnXSxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsU3RhcnRlckZlYXR1cmVzQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6W1BsYW5TZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYW5zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwbGFuczphbnkgO1xyXG5cdGxvYWRpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3BsYW5TZXJ2aWNlOiBQbGFuU2VydmljZSl7XHJcblxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKXtcclxuXHRcdHRoaXMubG9hZGluZyA9IHRydWU7XHJcblx0XHR0aGlzLl9wbGFuU2VydmljZS5nZXRQbGFucygpXHJcblx0XHRcdC5zdWJzY3JpYmUoKHJlc3VsdCkgPT57XHJcblx0XHRcdFx0IGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblx0XHRcdFx0dGhpcy5wbGFucyA9IHJlc3VsdDtcclxuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxufVxyXG4iXX0=
