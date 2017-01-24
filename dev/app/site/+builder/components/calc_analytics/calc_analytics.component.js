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
var index_1 = require('../../../components/+analytics/components/index');
var index_2 = require('../../../../shared/services/index');
var model_1 = require('../../models/model');
var CalcAnalyticsComponent = (function () {
    function CalcAnalyticsComponent(_script) {
        this._script = _script;
        this.scriptsLoaded = false;
    }
    CalcAnalyticsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._script.load('morrisCharts', 'datatables', 'daterangepicker')
            .then(function (data) {
            console.log('Scripts Loaded', data);
            _this.scriptsLoaded = true;
        })
            .catch(function (error) {
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', model_1.App)
    ], CalcAnalyticsComponent.prototype, "calc", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CalcAnalyticsComponent.prototype, "component", void 0);
    CalcAnalyticsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'calc-analytics',
            directives: [index_1.OverviewComponent, index_1.UserDetailsComponent, index_1.TrafficDetailsComponent],
            templateUrl: 'calc_analytics.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: [
                '../../../components/+analytics/assets/css/daterangepicker.css',
                '../../../components/+analytics/assets/css/analytics.component.css'
            ],
        }), 
        __metadata('design:paramtypes', [index_2.Script])
    ], CalcAnalyticsComponent);
    return CalcAnalyticsComponent;
}());
exports.CalcAnalyticsComponent = CalcAnalyticsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY2FsY19hbmFseXRpY3MvY2FsY19hbmFseXRpY3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0UsZUFBZSxDQUFDLENBQUE7QUFFbEYsc0JBQStFLGlEQUFpRCxDQUFDLENBQUE7QUFDakksc0JBQXVCLG1DQUFtQyxDQUFDLENBQUE7QUFDM0Qsc0JBQTJCLG9CQUFvQixDQUFDLENBQUE7QUFnQmhEO0lBS0MsZ0NBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRm5DLGtCQUFhLEdBQVcsS0FBSyxDQUFDO0lBRzlCLENBQUM7SUFFRCxnREFBZSxHQUFmO1FBQUEsaUJBU0k7UUFSSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUMsWUFBWSxFQUFDLGlCQUFpQixDQUFDO2FBQ3pELElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzlCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7UUFFYixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoQko7UUFBQyxZQUFLLEVBQUU7O3dEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzZEQUFBO0lBZFQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsVUFBVSxFQUFFLENBQUMseUJBQWlCLEVBQUMsNEJBQW9CLEVBQUMsK0JBQXVCLENBQUM7WUFDNUUsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtZQUNyQyxTQUFTLEVBQUU7Z0JBQ1YsK0RBQStEO2dCQUMvRCxtRUFBbUU7YUFDbkU7U0FDRCxDQUFDOzs4QkFBQTtJQW9CRiw2QkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlksOEJBQXNCLHlCQWtCbEMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2NhbGNfYW5hbHl0aWNzL2NhbGNfYW5hbHl0aWNzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sfSBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvY29udHJvbHMvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge092ZXJ2aWV3Q29tcG9uZW50LCBVc2VyRGV0YWlsc0NvbXBvbmVudCwgVHJhZmZpY0RldGFpbHNDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvK2FuYWx5dGljcy9jb21wb25lbnRzL2luZGV4JztcclxuaW1wb3J0IHsgU2NyaXB0IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHtTZWN0aW9uLCBBcHB9IGZyb20gJy4uLy4uL21vZGVscy9tb2RlbCc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBnb29nbGU6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2NhbGMtYW5hbHl0aWNzJyxcclxuXHRkaXJlY3RpdmVzOiBbT3ZlcnZpZXdDb21wb25lbnQsVXNlckRldGFpbHNDb21wb25lbnQsVHJhZmZpY0RldGFpbHNDb21wb25lbnRdLFxyXG5cdHRlbXBsYXRlVXJsOiAnY2FsY19hbmFseXRpY3MuY29tcG9uZW50Lmh0bWwnLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnLi4vLi4vLi4vY29tcG9uZW50cy8rYW5hbHl0aWNzL2Fzc2V0cy9jc3MvZGF0ZXJhbmdlcGlja2VyLmNzcycsXHJcblx0XHQnLi4vLi4vLi4vY29tcG9uZW50cy8rYW5hbHl0aWNzL2Fzc2V0cy9jc3MvYW5hbHl0aWNzLmNvbXBvbmVudC5jc3MnXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWxjQW5hbHl0aWNzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblx0QElucHV0KCkgY2FsYzogQXBwO1xyXG5cdEBJbnB1dCgpIGNvbXBvbmVudDogc3RyaW5nO1xyXG5cdHNjcmlwdHNMb2FkZWQ6IGJvb2xlYW49IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9zY3JpcHQ6IFNjcmlwdCkgey8vXHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHR0aGlzLl9zY3JpcHQubG9hZCgnbW9ycmlzQ2hhcnRzJywnZGF0YXRhYmxlcycsJ2RhdGVyYW5nZXBpY2tlcicpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTY3JpcHRzIExvYWRlZCcsIGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcmlwdHNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcik9PntcclxuICAgICAgICAgICAgLy9hbnkgZXJyb3JcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
