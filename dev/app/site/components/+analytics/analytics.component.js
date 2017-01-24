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
var index_1 = require('../../../shared/services/index');
var router_1 = require('@angular/router');
var index_2 = require('./components/index');
var index_3 = require('../../../shared/services/index');
var AnalyticsComponent = (function () {
    function AnalyticsComponent(companyService, _router, _script) {
        this.companyService = companyService;
        this._router = _router;
        this._script = _script;
        this.live_calculators = [];
        this.analytic_component = '';
        this.company_id = localStorage.getItem('company');
    }
    AnalyticsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._script.load('jqueryUI', 'morrisCharts', 'datatables', 'daterangepicker')
            .then(function (data) {
            console.log('Scripts Loaded', data);
            _this.analytic_component = "overview";
        })
            .catch(function (error) {
        });
    };
    AnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.companyService.getLiveCompanyProjects(this.company_id)
            .subscribe(function (response) {
            if (response.length) {
                self.calculator = response[0];
                _this.live_calculators = response;
                _this.calc_id = response[0].parentApp;
                _this.calc_name = response[0].name;
                _this.activeSince = moment(response[0].createdAt).fromNow().replace('ago', '').trim();
                _this.isActive = response[0].mode == 'PUBLIC';
            }
            else {
                _this.calc_id = 'null';
            }
        }, function (error) {
            console.log(error);
        });
        jQuery('.slimscroll').slimscroll({
            railVisible: true,
            alwaysVisible: true
        });
    };
    AnalyticsComponent.prototype.onAnalyticTypeSelect = function (type) {
        this.analytic_component = type;
    };
    AnalyticsComponent.prototype.onCalcSelect = function (calc) {
        this.calculator = calc;
        this.calc_id = calc.parentApp;
        this.calc_name = calc.name;
        this.activeSince = moment(calc.createdAt).fromNow().replace('ago', '').trim();
        this.isActive = calc.mode == 'PUBLIC';
    };
    AnalyticsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-analytics',
            templateUrl: 'analytics.component.html',
            styleUrls: [
                'assets/css/daterangepicker.css',
                'assets/css/analytics.component.css'
            ],
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [index_2.OverviewComponent, index_2.UserDetailsComponent, index_2.TrafficDetailsComponent]
        }), 
        __metadata('design:paramtypes', [index_1.CompanyService, router_1.Router, index_3.Script])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());
exports.AnalyticsComponent = AnalyticsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK2FuYWx5dGljcy9hbmFseXRpY3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0UsZUFBZSxDQUFDLENBQUE7QUFFcEYsc0JBQStCLGdDQUFnQyxDQUFDLENBQUE7QUFDaEUsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFDNUQsc0JBQWlGLG9CQUFvQixDQUFDLENBQUE7QUFDdEcsc0JBQXVCLGdDQUFnQyxDQUFDLENBQUE7QUFrQnhEO0lBV0UsNEJBQW9CLGNBQThCLEVBQ3pDLE9BQWUsRUFDZCxPQUFlO1FBRkwsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3pDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBVnpCLHFCQUFnQixHQUFRLEVBQUUsQ0FBQztRQUMzQix1QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFVOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw0Q0FBZSxHQUFmO1FBQUEsaUJBZUM7UUFSQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsQ0FBQzthQUMzRSxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwQyxLQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7UUFFYixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBeUJDO1FBeEJDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDeEQsU0FBUyxDQUNWLFVBQUMsUUFBYTtZQUNaLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztnQkFDakMsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUNyQyxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyRixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDO1lBQy9DLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN4QixDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBVTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUNBLENBQUM7UUFDSixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQy9CLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpREFBb0IsR0FBcEIsVUFBcUIsSUFBWTtRQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCx5Q0FBWSxHQUFaLFVBQWEsSUFBUztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUM7SUFDeEMsQ0FBQztJQW5GSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUU7Z0JBQ1QsZ0NBQWdDO2dCQUNoQyxvQ0FBb0M7YUFDckM7WUFDRCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtZQUNyQyxVQUFVLEVBQUUsQ0FBQyx5QkFBaUIsRUFBRSw0QkFBb0IsRUFBRSwrQkFBdUIsQ0FBQztTQUMvRSxDQUFDOzswQkFBQTtJQTJFRix5QkFBQztBQUFELENBekVBLEFBeUVDLElBQUE7QUF6RVksMEJBQWtCLHFCQXlFOUIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS9jb21wb25lbnRzLythbmFseXRpY3MvYW5hbHl0aWNzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJEb21haW4gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9zdWJkb21haW4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQ29tcGFueVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT3ZlcnZpZXdDb21wb25lbnQsIFVzZXJEZXRhaWxzQ29tcG9uZW50LCBUcmFmZmljRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XHJcbmltcG9ydCB7IFNjcmlwdCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IEl0ZW0sIEFwcCB9IGZyb20gJy4vLi4vLi4vK2J1aWxkZXIvbW9kZWxzL21vZGVsJztcclxuZGVjbGFyZSB2YXIgZ29vZ2xlOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBtb21lbnQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1hbmFseXRpY3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYW5hbHl0aWNzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcclxuICAgICdhc3NldHMvY3NzL2RhdGVyYW5nZXBpY2tlci5jc3MnLFxyXG4gICAgJ2Fzc2V0cy9jc3MvYW5hbHl0aWNzLmNvbXBvbmVudC5jc3MnXHJcbiAgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGRpcmVjdGl2ZXM6IFtPdmVydmlld0NvbXBvbmVudCwgVXNlckRldGFpbHNDb21wb25lbnQsIFRyYWZmaWNEZXRhaWxzQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgc3ViRG9tYWluOiBTdWJEb21haW47XHJcbiAgY29tcGFueV9pZDogU3RyaW5nO1xyXG4gIGxpdmVfY2FsY3VsYXRvcnM6IGFueSA9IFtdO1xyXG4gIGFuYWx5dGljX2NvbXBvbmVudDogU3RyaW5nID0gJyc7XHJcbiAgY2FsY19pZDogU3RyaW5nO1xyXG4gIGNhbGNfbmFtZTogU3RyaW5nO1xyXG4gIHByaXZhdGUgYWN0aXZlU2luY2U6IGFueTtcclxuICBwcml2YXRlIGlzQWN0aXZlOiBhbnk7XHJcbiAgcHJpdmF0ZSBjYWxjdWxhdG9yOiBBcHA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGFueVNlcnZpY2U6IENvbXBhbnlTZXJ2aWNlLFxyXG4gICAgcHVibGljIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgX3NjcmlwdDogU2NyaXB0KSB7XHJcbiAgICB0aGlzLmNvbXBhbnlfaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tcGFueScpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy9Db2RlXHJcbiAgICAvLyBqUXVlcnkoJy5zbGltc2Nyb2xsJykuc2xpbXNjcm9sbCh7XHJcbiAgICAvLyAgICAgcmFpbFZpc2libGU6IHRydWUsXHJcbiAgICAvLyAgICAgYWx3YXlzVmlzaWJsZTogdHJ1ZVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgdGhpcy5fc2NyaXB0LmxvYWQoJ2pxdWVyeVVJJywgJ21vcnJpc0NoYXJ0cycsICdkYXRhdGFibGVzJywgJ2RhdGVyYW5nZXBpY2tlcicpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NjcmlwdHMgTG9hZGVkJywgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5hbmFseXRpY19jb21wb25lbnQgPSBcIm92ZXJ2aWV3XCI7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvL2FueSBlcnJvclxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgLy9Db2RlXHJcbiAgICB0aGlzLmNvbXBhbnlTZXJ2aWNlLmdldExpdmVDb21wYW55UHJvamVjdHModGhpcy5jb21wYW55X2lkKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHNlbGYuY2FsY3VsYXRvciA9IHJlc3BvbnNlWzBdO1xyXG4gICAgICAgICAgdGhpcy5saXZlX2NhbGN1bGF0b3JzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICB0aGlzLmNhbGNfaWQgPSByZXNwb25zZVswXS5wYXJlbnRBcHA7XHJcbiAgICAgICAgICB0aGlzLmNhbGNfbmFtZSA9IHJlc3BvbnNlWzBdLm5hbWU7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZVNpbmNlID0gbW9tZW50KHJlc3BvbnNlWzBdLmNyZWF0ZWRBdCkuZnJvbU5vdygpLnJlcGxhY2UoJ2FnbycsICcnKS50cmltKCk7XHJcbiAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gcmVzcG9uc2VbMF0ubW9kZSA9PSAnUFVCTElDJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jYWxjX2lkID0gJ251bGwnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgICAgKTtcclxuICAgIGpRdWVyeSgnLnNsaW1zY3JvbGwnKS5zbGltc2Nyb2xsKHtcclxuICAgICAgcmFpbFZpc2libGU6IHRydWUsXHJcbiAgICAgIGFsd2F5c1Zpc2libGU6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25BbmFseXRpY1R5cGVTZWxlY3QodHlwZTogU3RyaW5nKSB7XHJcbiAgICB0aGlzLmFuYWx5dGljX2NvbXBvbmVudCA9IHR5cGU7XHJcbiAgfVxyXG5cclxuICBvbkNhbGNTZWxlY3QoY2FsYzogYW55KSB7ICAgIFxyXG4gICAgdGhpcy5jYWxjdWxhdG9yID0gY2FsYztcclxuICAgIHRoaXMuY2FsY19pZCA9IGNhbGMucGFyZW50QXBwO1xyXG4gICAgdGhpcy5jYWxjX25hbWUgPSBjYWxjLm5hbWU7XHJcbiAgICB0aGlzLmFjdGl2ZVNpbmNlID0gbW9tZW50KGNhbGMuY3JlYXRlZEF0KS5mcm9tTm93KCkucmVwbGFjZSgnYWdvJywgJycpLnRyaW0oKTtcclxuICAgIHRoaXMuaXNBY3RpdmUgPSBjYWxjLm1vZGUgPT0gJ1BVQkxJQyc7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
