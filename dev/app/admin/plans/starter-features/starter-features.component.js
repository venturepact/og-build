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
var plan_service_1 = require('./../../../shared/services/plan.service');
var StarterFeaturesComponent = (function () {
    function StarterFeaturesComponent(planService, router) {
        this.planService = planService;
        this.router = router;
        this.loading = false;
        this.users_s = 0;
        this.calculator_s = 0;
        this.templates_s = 0;
        this.visits_s = 0;
        this.leads_s = 0;
        this.isUserInfinity = false;
        this.isCalcInfinity = false;
        this.isTemplateInfinity = false;
        this.isVisitsInfinity = false;
        this.isLeadsInfinity = false;
    }
    StarterFeaturesComponent.prototype.ngOnInit = function () {
        this.plan = this.data.plan;
        this.features = this.data.features;
        this.coupons = this.data.cycles;
        this.users_s = this.plan.users;
        this.calculator_s = this.plan.calculators;
        this.templates_s = this.plan.templates;
        this.visits_s = this.plan.visits;
        this.leads_s = this.plan.leads;
        this.isUserInfinity = this.users_s >= 0 ? false : true;
        this.isCalcInfinity = this.calculator_s >= 0 ? false : true;
        this.isTemplateInfinity = this.templates_s >= 0 ? false : true;
        this.isVisitsInfinity = this.visits_s >= 0 ? false : true;
        this.isLeadsInfinity = this.leads_s >= 0 ? false : true;
    };
    StarterFeaturesComponent.prototype.getPlanFeatures = function () {
        var _this = this;
        this.planService.getPlanFeatures(this.plan._id)
            .subscribe(function (response) {
            console.log(_this.plan, response);
            _this.features = response;
        }, function (response) {
            console.log("error_" + _this.plan + "_plan", response);
        });
    };
    StarterFeaturesComponent.prototype.updatePlan = function () {
        var _this = this;
        this.loading = true;
        jQuery('#msg' + this.plan.name).html('');
        var plan_features = [];
        var features_update = [];
        this.features.forEach(function (feature) {
            var obj = {
                "id": feature._id,
                "active": feature.active
            };
            plan_features.push(obj);
            var obj2 = {
                "id": feature.feature._id,
                "description": feature.feature.description,
                "name": feature.feature.name
            };
            features_update.push(obj2);
        });
        var updateData = {
            cycles: this.coupons,
            features_update: features_update,
            features: plan_features,
            users: this.isUserInfinity ? -1 : this.users_s,
            calculators: this.isCalcInfinity ? -1 : this.calculator_s,
            templates: this.isTemplateInfinity ? -1 : this.templates_s,
            visits: this.isVisitsInfinity ? -1 : this.visits_s,
            leads: this.isLeadsInfinity ? -1 : this.leads_s
        };
        this.planService.updatePlanFeatures(this.plan._id, updateData)
            .subscribe(function (result) {
            _this.loading = false;
            _this.features = result.features;
            _this.coupons = result.cycles;
            _this.plan = result.plan;
            _this.users_s = _this.plan.users;
            _this.calculator_s = _this.plan.calculators;
            _this.templates_s = _this.plan.templates;
            _this.visits_s = _this.plan.visits;
            _this.leads_s = _this.plan.leads;
            console.log("users_s", _this.users_s);
            console.log("after update", result);
            jQuery('#msg' + _this.plan.id).html('successfully Updated');
        }, function (result) {
            console.log("err update");
            _this.loading = false;
            jQuery('#btnSubmit' + _this.plan.name).html('Submit').attr('disabled', false);
            jQuery('#msg' + _this.plan.name).html('error occured :' + result);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], StarterFeaturesComponent.prototype, "data", void 0);
    StarterFeaturesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-starter-features',
            templateUrl: 'starter-features.component.html',
            styleUrls: ['starter-features.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [plan_service_1.PlanService, router_1.Router])
    ], StarterFeaturesComponent);
    return StarterFeaturesComponent;
}());
exports.StarterFeaturesComponent = StarterFeaturesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9wbGFucy9zdGFydGVyLWZlYXR1cmVzL3N0YXJ0ZXItZmVhdHVyZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0QsZUFBZSxDQUFDLENBQUE7QUFDaEUsdUJBQXlDLGlCQUFpQixDQUFDLENBQUE7QUFDM0QsNkJBQTRCLHlDQUF5QyxDQUFDLENBQUE7QUFVdEU7SUFnQkUsa0NBQW9CLFdBQXVCLEVBQVUsTUFBZTtRQUFoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVM7UUFicEUsWUFBTyxHQUFXLEtBQUssQ0FBQztRQUd4QixZQUFPLEdBQVUsQ0FBQyxDQUFDO1FBQ25CLGlCQUFZLEdBQVUsQ0FBQyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGFBQVEsR0FBVSxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFVLENBQUMsQ0FBQztRQUNuQixtQkFBYyxHQUFXLEtBQUssQ0FBQztRQUMvQixtQkFBYyxHQUFXLEtBQUssQ0FBQztRQUMvQix1QkFBa0IsR0FBVyxLQUFLLENBQUM7UUFDbkMscUJBQWdCLEdBQVcsS0FBSyxDQUFDO1FBQ2pDLG9CQUFlLEdBQVksS0FBSyxDQUFDO0lBR2pDLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FB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QkFBc0IsQ0FBQyxDQUFDO1FBQzdELENBQUMsRUFDRCxVQUFDLE1BQVU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQztZQUM1RSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FDQSxDQUFDO0lBQ1AsQ0FBQztJQW5HRDtRQUFDLFlBQUssRUFBRTs7MERBQUE7SUFUVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1lBQzdDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1NBQ2hDLENBQUM7O2dDQUFBO0lBd0dGLCtCQUFDO0FBQUQsQ0F0R0EsQUFzR0MsSUFBQTtBQXRHWSxnQ0FBd0IsMkJBc0dwQyxDQUFBIiwiZmlsZSI6ImFwcC9hZG1pbi9wbGFucy9zdGFydGVyLWZlYXR1cmVzL3N0YXJ0ZXItZmVhdHVyZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFJlbmRlcmVyLE9uSW5pdCxJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyxSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQbGFuU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3BsYW4uc2VydmljZSc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1zdGFydGVyLWZlYXR1cmVzJyxcclxuICB0ZW1wbGF0ZVVybDogJ3N0YXJ0ZXItZmVhdHVyZXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydzdGFydGVyLWZlYXR1cmVzLmNvbXBvbmVudC5jc3MnXSxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RhcnRlckZlYXR1cmVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gIEBJbnB1dCgpIGRhdGE6YW55O1xyXG4gIHBsYW4gOiBhbnk7XHJcbiAgbG9hZGluZzpib29sZWFuID0gZmFsc2U7XHJcbiAgZmVhdHVyZXM6YW55W107XHJcbiAgY291cG9uczphbnlbXTtcclxuICB1c2Vyc19zOm51bWJlciA9IDA7XHJcbiAgY2FsY3VsYXRvcl9zOm51bWJlciA9IDA7XHJcbiAgdGVtcGxhdGVzX3M6IG51bWJlciA9IDA7XHJcbiAgdmlzaXRzX3M6bnVtYmVyID0gMDtcclxuICBsZWFkc19zOm51bWJlciA9IDA7XHJcbiAgaXNVc2VySW5maW5pdHk6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzQ2FsY0luZmluaXR5OmJvb2xlYW4gPSBmYWxzZTtcclxuICBpc1RlbXBsYXRlSW5maW5pdHk6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzVmlzaXRzSW5maW5pdHk6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzTGVhZHNJbmZpbml0eTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhblNlcnZpY2U6UGxhblNlcnZpY2UsIHByaXZhdGUgcm91dGVyIDogUm91dGVyKXtcclxuICBcdFx0XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5wbGFuID0gdGhpcy5kYXRhLnBsYW47XHJcbiAgICB0aGlzLmZlYXR1cmVzID0gdGhpcy5kYXRhLmZlYXR1cmVzO1xyXG4gICAgdGhpcy5jb3Vwb25zID0gdGhpcy5kYXRhLmN5Y2xlcztcclxuICAgIHRoaXMudXNlcnNfcyA9IHRoaXMucGxhbi51c2VycztcclxuICAgIHRoaXMuY2FsY3VsYXRvcl9zID0gdGhpcy5wbGFuLmNhbGN1bGF0b3JzO1xyXG4gICAgdGhpcy50ZW1wbGF0ZXNfcyAgPSB0aGlzLnBsYW4udGVtcGxhdGVzO1xyXG4gICAgdGhpcy52aXNpdHNfcyA9IHRoaXMucGxhbi52aXNpdHM7XHJcbiAgICB0aGlzLmxlYWRzX3MgPSB0aGlzLnBsYW4ubGVhZHM7XHJcbiAgICB0aGlzLmlzVXNlckluZmluaXR5ID0gdGhpcy51c2Vyc19zPj0wP2ZhbHNlOnRydWU7XHJcbiAgICB0aGlzLmlzQ2FsY0luZmluaXR5ID0gdGhpcy5jYWxjdWxhdG9yX3M+PTA/ZmFsc2U6dHJ1ZTtcclxuICAgIHRoaXMuaXNUZW1wbGF0ZUluZmluaXR5ID0gdGhpcy50ZW1wbGF0ZXNfcz49MD9mYWxzZTp0cnVlO1xyXG4gICAgdGhpcy5pc1Zpc2l0c0luZmluaXR5ID0gdGhpcy52aXNpdHNfcz49MD9mYWxzZTp0cnVlO1xyXG4gICAgdGhpcy5pc0xlYWRzSW5maW5pdHkgPSB0aGlzLmxlYWRzX3M+PTA/ZmFsc2U6dHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldFBsYW5GZWF0dXJlcygpe1xyXG4gIFx0dGhpcy5wbGFuU2VydmljZS5nZXRQbGFuRmVhdHVyZXModGhpcy5wbGFuLl9pZClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQocmVzcG9uc2U6YW55KT0+e1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnBsYW4scmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmZlYXR1cmVzXHQgPSByZXNwb25zZTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdChyZXNwb25zZTphbnkpPT57XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZXJyb3JfXCIrdGhpcy5wbGFuICtcIl9wbGFuXCIscmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBsYW4oKXtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBqUXVlcnkoJyNtc2cnICsgdGhpcy5wbGFuLm5hbWUpLmh0bWwoJycpO1xyXG4gICAgbGV0IHBsYW5fZmVhdHVyZXM6YW55W10gPSBbXTtcclxuICAgIGxldCBmZWF0dXJlc191cGRhdGU6YW55W10gPSBbXTtcclxuICAgIHRoaXMuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSk9PntcclxuICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICBcImlkXCIgOiBmZWF0dXJlLl9pZCxcclxuICAgICAgICBcImFjdGl2ZVwiIDogZmVhdHVyZS5hY3RpdmVcclxuICAgICAgfVxyXG4gICAgICBwbGFuX2ZlYXR1cmVzLnB1c2gob2JqKTtcclxuICAgICAgbGV0IG9iajIgPSB7IFxyXG4gICAgICAgIFwiaWRcIiA6IGZlYXR1cmUuZmVhdHVyZS5faWQsXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiIDogZmVhdHVyZS5mZWF0dXJlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIFwibmFtZVwiIDogZmVhdHVyZS5mZWF0dXJlLm5hbWVcclxuICAgICAgfTtcclxuICAgICAgZmVhdHVyZXNfdXBkYXRlLnB1c2gob2JqMik7XHJcbiAgICB9KTtcclxuICAgIGxldCB1cGRhdGVEYXRhID0ge1xyXG4gICAgICBjeWNsZXMgOiB0aGlzLmNvdXBvbnMsXHJcbiAgICAgIGZlYXR1cmVzX3VwZGF0ZSA6IGZlYXR1cmVzX3VwZGF0ZSxcclxuICAgICAgZmVhdHVyZXMgOiBwbGFuX2ZlYXR1cmVzLFxyXG4gICAgICB1c2VycyA6IHRoaXMuaXNVc2VySW5maW5pdHk/LTE6dGhpcy51c2Vyc19zLFxyXG4gICAgICBjYWxjdWxhdG9ycyA6IHRoaXMuaXNDYWxjSW5maW5pdHk/LTE6dGhpcy5jYWxjdWxhdG9yX3MsXHJcbiAgICAgIHRlbXBsYXRlcyA6IHRoaXMuaXNUZW1wbGF0ZUluZmluaXR5Py0xOnRoaXMudGVtcGxhdGVzX3MsXHJcbiAgICAgIHZpc2l0cyA6IHRoaXMuaXNWaXNpdHNJbmZpbml0eT8tMTp0aGlzLnZpc2l0c19zLFxyXG4gICAgICBsZWFkcyA6IHRoaXMuaXNMZWFkc0luZmluaXR5Py0xOnRoaXMubGVhZHNfc1xyXG4gICAgfTtcclxuICAgIHRoaXMucGxhblNlcnZpY2UudXBkYXRlUGxhbkZlYXR1cmVzKHRoaXMucGxhbi5faWQsdXBkYXRlRGF0YSlcclxuICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgKHJlc3VsdDphbnkpPT57XHJcbiAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICB0aGlzLmZlYXR1cmVzID0gcmVzdWx0LmZlYXR1cmVzO1xyXG4gICAgICAgICB0aGlzLmNvdXBvbnMgPSByZXN1bHQuY3ljbGVzO1xyXG4gICAgICAgICB0aGlzLnBsYW4gPSByZXN1bHQucGxhbjtcclxuICAgICAgICAgdGhpcy51c2Vyc19zID0gdGhpcy5wbGFuLnVzZXJzO1xyXG4gICAgICAgICB0aGlzLmNhbGN1bGF0b3JfcyA9IHRoaXMucGxhbi5jYWxjdWxhdG9ycztcclxuICAgICAgICAgdGhpcy50ZW1wbGF0ZXNfcyA9IHRoaXMucGxhbi50ZW1wbGF0ZXM7XHJcbiAgICAgICAgIHRoaXMudmlzaXRzX3MgPSB0aGlzLnBsYW4udmlzaXRzO1xyXG4gICAgICAgICB0aGlzLmxlYWRzX3MgPSB0aGlzLnBsYW4ubGVhZHM7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlcnNfc1wiLHRoaXMudXNlcnNfcyk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgdXBkYXRlXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgIGpRdWVyeSgnI21zZycgKyB0aGlzLnBsYW4uaWQpLmh0bWwoJ3N1Y2Nlc3NmdWxseSBVcGRhdGVkJyk7XHJcbiAgICAgICB9LFxyXG4gICAgICAgKHJlc3VsdDphbnkpPT57XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyIHVwZGF0ZVwiKTtcclxuICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgIGpRdWVyeSgnI2J0blN1Ym1pdCcgKyB0aGlzLnBsYW4ubmFtZSkuaHRtbCgnU3VibWl0JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuICAgICAgICAgalF1ZXJ5KCcjbXNnJyArIHRoaXMucGxhbi5uYW1lKS5odG1sKCdlcnJvciBvY2N1cmVkIDonICsgcmVzdWx0KTtcclxuICAgICAgIH1cclxuICAgICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
