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
var calculator_analytics_service_1 = require('../../services/calculator-analytics.service');
var date_range_picker_component_1 = require('../date_range_picker/date_range_picker.component');
var OverviewComponent = (function () {
    function OverviewComponent(_calcAnalytics) {
        this._calcAnalytics = _calcAnalytics;
        this.postData = {
            start_date: moment().subtract(10, 'days').format('YYYY-MM-DD'),
            end_date: moment().add(1, 'day').format('YYYY-MM-DD')
        };
        this.totalUniqueVisits = 0;
        this.totalVisits = 0;
        this.graphLoader = 'loading';
        this.subs = [];
    }
    OverviewComponent.prototype.ngAfterViewInit = function () {
        this.overviewChart = Morris.Area({
            element: 'area-example',
            data: [{ y: '0', a: 0, b: 0 }],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Unique Views', 'Page Views'],
            fillOpacity: 0.4,
            hideHover: 'auto',
            behaveLikeLine: true,
            resize: true,
            pointFillColors: ['#fb545b'],
            pointStrokeColors: ['#269fd8'],
            lineColors: ['#fb545b', '#269fd8'],
        });
    };
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent.prototype.ngOnChanges = function () {
        if (this.calc_id) {
            this.postData.calc_id = this.calc_id;
            this.subs.push(this.getViewStats());
            this.subs.push(this.getCombinedStats());
        }
    };
    OverviewComponent.prototype.getViewStats = function () {
        var _this = this;
        this.graphLoader = 'loading';
        this.postData.type = 'date';
        return this._calcAnalytics.getTrafficStats(this.postData)
            .subscribe(function (response) {
            if (response.length && response[0][0] != '(not set)') {
                _this.totalUniqueVisits = 0;
                _this.totalVisits = 0;
                response = response.map(function (val) {
                    _this.totalUniqueVisits += Number(val[1]);
                    _this.totalVisits += Number(val[2]);
                    val[0] = val[0].replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$1-$2-$3');
                    return { y: val[0], a: val[1], b: val[2] };
                });
                _this.overviewChart.setData(response);
                response = response.map(function (val) { return { label: 'Visitors', value: val.b }; });
                _this.graphLoader = 'done';
            }
            else {
                _this.graphLoader = 'No Data Available !';
            }
        }, function (error) {
            _this.graphLoader = 'Something Went Wrong !';
        });
    };
    OverviewComponent.prototype.getCombinedStats = function () {
        var _this = this;
        this.postData.type = 'overview';
        return this._calcAnalytics.getTrafficStats(this.postData)
            .subscribe(function (response) {
            if (response.length) {
                _this.stats = {
                    uniqueVisitors: response[0][1],
                    visitors: response[0][2],
                    timeOnPage: (response[0][3] > 60) ? (response[0][3] / 60).toFixed(2) + ' min' : response[0][3] + ' sec',
                    conversions: response[0][4],
                    conversionRate: (response[0][1] && response[0][4]) ? ((response[0][4] / response[0][1]) * 100).toFixed(2) : '0',
                    avgResponse: response[0][5],
                };
            }
            else {
                _this.stats = {
                    uniqueVisitors: '0',
                    visitors: '0',
                    timeOnPage: '0',
                    conversions: 0,
                    conversionRate: '0',
                    avgResponse: '0'
                };
            }
        }, function (error) {
        });
    };
    OverviewComponent.prototype.onDateSelect = function (date) {
        this.start_date = date.start_date;
        this.end_date = date.end_date;
        this.postData.start_date = date.start_date;
        this.postData.end_date = date.end_date;
        this.getViewStats();
        this.getCombinedStats();
    };
    OverviewComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    OverviewComponent.prototype.unsubscribe = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], OverviewComponent.prototype, "calc_id", void 0);
    OverviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-overview',
            templateUrl: 'overview.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [date_range_picker_component_1.DateRangePickerComponent],
            providers: [calculator_analytics_service_1.CalculatorAnalytics]
        }), 
        __metadata('design:paramtypes', [calculator_analytics_service_1.CalculatorAnalytics])
    ], OverviewComponent);
    return OverviewComponent;
}());
exports.OverviewComponent = OverviewComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK2FuYWx5dGljcy9jb21wb25lbnRzL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStGLGVBQWUsQ0FBQyxDQUFBO0FBQy9HLDZDQUFvQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ2xGLDRDQUF1QyxrREFBa0QsQ0FBQyxDQUFBO0FBeUIxRjtJQWdCSSwyQkFBb0IsY0FBbUM7UUFBbkMsbUJBQWMsR0FBZCxjQUFjLENBQXFCO1FBWnZELGFBQVEsR0FBUTtZQUNaLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDOUQsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUN4RCxDQUFDO1FBRUYsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBR3hCLFNBQUksR0FBbUIsRUFBRSxDQUFDO0lBR2xDLENBQUM7SUFFRCwyQ0FBZSxHQUFmO1FBRUksSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzdCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUM5QixJQUFJLEVBQUUsR0FBRztZQUNULEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDakIsTUFBTSxFQUFFLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQztZQUN0QyxXQUFXLEVBQUUsR0FBRztZQUNoQixTQUFTLEVB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QUM7O3lCQUFBO0lBeUlGLHdCQUFDO0FBQUQsQ0F2SUEsQUF1SUMsSUFBQTtBQXZJWSx5QkFBaUIsb0JBdUk3QixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL2NvbXBvbmVudHMvK2FuYWx5dGljcy9jb21wb25lbnRzL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYWxjdWxhdG9yQW5hbHl0aWNzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FsY3VsYXRvci1hbmFseXRpY3Muc2VydmljZSc7XHJcbmltcG9ydCB7RGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50fSBmcm9tICcuLi9kYXRlX3JhbmdlX3BpY2tlci9kYXRlX3JhbmdlX3BpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgTW9ycmlzOiBhbnk7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDogYW55O1xyXG5cclxuaW50ZXJmYWNlIENvbGxlY3RpdmVEYXRhIHtcclxuICAgIHVuaXF1ZVZpc2l0b3JzOiBzdHJpbmc7XHJcbiAgICB2aXNpdG9yczogc3RyaW5nO1xyXG4gICAgdGltZU9uUGFnZTogc3RyaW5nO1xyXG4gICAgY29udmVyc2lvbnM6IG51bWJlcjtcclxuICAgIGNvbnZlcnNpb25SYXRlOiBzdHJpbmc7XHJcbiAgICBhdmdSZXNwb25zZTogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ29nLW92ZXJ2aWV3JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnb3ZlcnZpZXcuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIGRpcmVjdGl2ZXM6IFtEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbQ2FsY3VsYXRvckFuYWx5dGljc11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBPdmVydmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkgY2FsY19pZDogU3RyaW5nO1xyXG4gICAgc3RhcnRfZGF0ZTogU3RyaW5nO1xyXG4gICAgZW5kX2RhdGU6IFN0cmluZztcclxuICAgIHBvc3REYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgc3RhcnRfZGF0ZTogbW9tZW50KCkuc3VidHJhY3QoMTAsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJyksXHJcbiAgICAgICAgZW5kX2RhdGU6IG1vbWVudCgpLmFkZCgxLCAnZGF5JykuZm9ybWF0KCdZWVlZLU1NLUREJylcclxuICAgIH07XHJcbiAgICBvdmVydmlld0NoYXJ0OiBhbnk7XHJcbiAgICB0b3RhbFVuaXF1ZVZpc2l0czogbnVtYmVyID0gMDtcclxuICAgIHRvdGFsVmlzaXRzOiBudW1iZXIgPSAwO1xyXG4gICAgZ3JhcGhMb2FkZXI6IHN0cmluZyA9ICdsb2FkaW5nJztcclxuICAgIHByaXZhdGUgc3RhdHM6IENvbGxlY3RpdmVEYXRhO1xyXG5cclxuICAgIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jYWxjQW5hbHl0aWNzOiBDYWxjdWxhdG9yQW5hbHl0aWNzKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLm92ZXJ2aWV3Q2hhcnQgPSBNb3JyaXMuQXJlYSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICdhcmVhLWV4YW1wbGUnLFxyXG4gICAgICAgICAgICBkYXRhOiBbeyB5OiAnMCcsIGE6IDAsIGI6IDAgfV0sXHJcbiAgICAgICAgICAgIHhrZXk6ICd5JyxcclxuICAgICAgICAgICAgeWtleXM6IFsnYScsICdiJ10sXHJcbiAgICAgICAgICAgIGxhYmVsczogWydVbmlxdWUgVmlld3MnLCAnUGFnZSBWaWV3cyddLFxyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC40LFxyXG4gICAgICAgICAgICBoaWRlSG92ZXI6ICdhdXRvJyxcclxuICAgICAgICAgICAgYmVoYXZlTGlrZUxpbmU6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgcG9pbnRGaWxsQ29sb3JzOiBbJyNmYjU0NWInXSxcclxuICAgICAgICAgICAgcG9pbnRTdHJva2VDb2xvcnM6IFsnIzI2OWZkOCddLFxyXG4gICAgICAgICAgICBsaW5lQ29sb3JzOiBbJyNmYjU0NWInLCAnIzI2OWZkOCddLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vY29kZVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbGNfaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3N0RGF0YS5jYWxjX2lkID0gdGhpcy5jYWxjX2lkO1xyXG4gICAgICAgICAgICAvL2dldCBzdGF0c1xyXG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmdldFZpZXdTdGF0cygpKTtcclxuICAgICAgICAgICAgLy9nZXQgc3RhdHNcclxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5nZXRDb21iaW5lZFN0YXRzKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3U3RhdHMoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaExvYWRlciA9ICdsb2FkaW5nJztcclxuICAgICAgICB0aGlzLnBvc3REYXRhLnR5cGUgPSAnZGF0ZSc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNBbmFseXRpY3MuZ2V0VHJhZmZpY1N0YXRzKHRoaXMucG9zdERhdGEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGggJiYgcmVzcG9uc2VbMF1bMF0gIT0gJyhub3Qgc2V0KScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVW5pcXVlVmlzaXRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVmlzaXRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLm1hcCh2YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVW5pcXVlVmlzaXRzICs9IE51bWJlcih2YWxbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsVmlzaXRzICs9IE51bWJlcih2YWxbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxbMF0gPSB2YWxbMF0ucmVwbGFjZSgvKFxcZFxcZFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpL2csICckMS0kMi0kMycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB5OiB2YWxbMF0sIGE6IHZhbFsxXSwgYjogdmFsWzJdIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVydmlld0NoYXJ0LnNldERhdGEocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbCA9PiB7IHJldHVybiB7IGxhYmVsOiAnVmlzaXRvcnMnLCB2YWx1ZTogdmFsLmIgfTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZnVzaW9uQ2hhcnREYXRhLmRhdGFzZXQgPSBbeyBkYXRhOiByZXNwb25zZSB9XTtcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZHJhd0Z1c2lvbkNoYXJ0KCdjaGFydC1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoTG9hZGVyID0gJ2RvbmUnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoTG9hZGVyID0gJ05vIERhdGEgQXZhaWxhYmxlICEnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaExvYWRlciA9ICdTb21ldGhpbmcgV2VudCBXcm9uZyAhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbWJpbmVkU3RhdHMoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5nZW9Mb2FkZXIgPSAnbG9hZGluZyc7XHJcbiAgICAgICAgdGhpcy5wb3N0RGF0YS50eXBlID0gJ292ZXJ2aWV3JztcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FsY0FuYWx5dGljcy5nZXRUcmFmZmljU3RhdHModGhpcy5wb3N0RGF0YSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZVZpc2l0b3JzOiByZXNwb25zZVswXVsxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRvcnM6IHJlc3BvbnNlWzBdWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT25QYWdlOiAocmVzcG9uc2VbMF1bM10gPiA2MCkgPyAocmVzcG9uc2VbMF1bM10gLyA2MCkudG9GaXhlZCgyKSArICcgbWluJyA6IHJlc3BvbnNlWzBdWzNdICsgJyBzZWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uczogcmVzcG9uc2VbMF1bNF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnNpb25SYXRlOiAocmVzcG9uc2VbMF1bMV0gJiYgcmVzcG9uc2VbMF1bNF0pID8gKChyZXNwb25zZVswXVs0XSAvIHJlc3BvbnNlWzBdWzFdKSAqIDEwMCkudG9GaXhlZCgyKSA6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZnUmVzcG9uc2U6IHJlc3BvbnNlWzBdWzVdLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmdlb0xvYWRlciA9ICdkb25lJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmdlb0xvYWRlciA9ICdObyBEYXRhIEF2YWlsYWJsZSAhJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVWaXNpdG9yczogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpdG9yczogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lT25QYWdlOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnNpb25zOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uUmF0ZTogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmdSZXNwb25zZTonMCdcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLmdlb0xvYWRlciA9ICdTb21ldGhpbmcgV2VudCBXcm9uZyAhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGF0ZVNlbGVjdChkYXRlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0X2RhdGUgPSBkYXRlLnN0YXJ0X2RhdGU7XHJcbiAgICAgICAgdGhpcy5lbmRfZGF0ZSA9IGRhdGUuZW5kX2RhdGU7XHJcbiAgICAgICAgdGhpcy5wb3N0RGF0YS5zdGFydF9kYXRlID0gZGF0ZS5zdGFydF9kYXRlO1xyXG4gICAgICAgIHRoaXMucG9zdERhdGEuZW5kX2RhdGUgPSBkYXRlLmVuZF9kYXRlO1xyXG4gICAgICAgIC8vcmVmcmVzaCBzdGF0c1xyXG4gICAgICAgIHRoaXMuZ2V0Vmlld1N0YXRzKCk7XHJcbiAgICAgICAgdGhpcy5nZXRDb21iaW5lZFN0YXRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XHJcbiAgICB9XHJcbn1cclxuIl19
