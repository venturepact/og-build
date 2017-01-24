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
        if (this.calc) {
            if (this.calc.liveApp)
                this.calc_id = this.calc._id;
            else
                this.calc_id = this.calc.parentApp;
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
        __metadata('design:type', Object)
    ], OverviewComponent.prototype, "calc", void 0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK2FuYWx5dGljcy9jb21wb25lbnRzL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStGLGVBQWUsQ0FBQyxDQUFBO0FBQy9HLDZDQUFvQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ2xGLDRDQUF1QyxrREFBa0QsQ0FBQyxDQUFBO0FBeUIxRjtJQWlCSSwyQkFBb0IsY0FBbUM7UUFBbkMsbUJBQWMsR0FBZCxjQUFjLENBQXFCO1FBWnZELGFBQVEsR0FBUTtZQUNaLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDOUQsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztTQUN4RCxDQUFDO1FBRUYsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBR3hCLFNBQUksR0FBbUIsRUFBRSxDQUFDO0lBR2xDLENBQUM7SUFFRCwyQ0FBZSxHQUFmO1FBRUksSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzdCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUM5QixJQUFJLEVBQUUsR0FBRztZQUNULEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDakIsTUFBTSxFQUFFLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQztZQUN0QyxXQUFXLEVBQUUsR0FBRztZQUNoQixTQUFTLEVB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QUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtZQUNyQyxVQUFVLEVBQUUsQ0FBQyxzREFBd0IsQ0FBQztZQUN0QyxTQUFTLEVBQUUsQ0FBQyxrREFBbUIsQ0FBQztTQUNuQyxDQUFDOzt5QkFBQTtJQStJRix3QkFBQztBQUFELENBN0lBLEFBNklDLElBQUE7QUE3SVkseUJBQWlCLG9CQTZJN0IsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS9jb21wb25lbnRzLythbmFseXRpY3MvY29tcG9uZW50cy9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FsY3VsYXRvckFuYWx5dGljcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhbGN1bGF0b3ItYW5hbHl0aWNzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0RhdGVSYW5nZVBpY2tlckNvbXBvbmVudH0gZnJvbSAnLi4vZGF0ZV9yYW5nZV9waWNrZXIvZGF0ZV9yYW5nZV9waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIE1vcnJpczogYW55O1xyXG5kZWNsYXJlIHZhciBtb21lbnQ6IGFueTtcclxuXHJcbmludGVyZmFjZSBDb2xsZWN0aXZlRGF0YSB7XHJcbiAgICB1bmlxdWVWaXNpdG9yczogc3RyaW5nO1xyXG4gICAgdmlzaXRvcnM6IHN0cmluZztcclxuICAgIHRpbWVPblBhZ2U6IHN0cmluZztcclxuICAgIGNvbnZlcnNpb25zOiBudW1iZXI7XHJcbiAgICBjb252ZXJzaW9uUmF0ZTogc3RyaW5nO1xyXG4gICAgYXZnUmVzcG9uc2U6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdvZy1vdmVydmlldycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ292ZXJ2aWV3LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBkaXJlY3RpdmVzOiBbRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0NhbGN1bGF0b3JBbmFseXRpY3NdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT3ZlcnZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIGNhbGM6IGFueTtcclxuICAgIGNhbGNfaWQ6IHN0cmluZztcclxuICAgIHN0YXJ0X2RhdGU6IFN0cmluZztcclxuICAgIGVuZF9kYXRlOiBTdHJpbmc7XHJcbiAgICBwb3N0RGF0YTogYW55ID0ge1xyXG4gICAgICAgIHN0YXJ0X2RhdGU6IG1vbWVudCgpLnN1YnRyYWN0KDEwLCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxyXG4gICAgICAgIGVuZF9kYXRlOiBtb21lbnQoKS5hZGQoMSwgJ2RheScpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICB9O1xyXG4gICAgb3ZlcnZpZXdDaGFydDogYW55O1xyXG4gICAgdG90YWxVbmlxdWVWaXNpdHM6IG51bWJlciA9IDA7XHJcbiAgICB0b3RhbFZpc2l0czogbnVtYmVyID0gMDtcclxuICAgIGdyYXBoTG9hZGVyOiBzdHJpbmcgPSAnbG9hZGluZyc7XHJcbiAgICBwcml2YXRlIHN0YXRzOiBDb2xsZWN0aXZlRGF0YTtcclxuXHJcbiAgICBwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2FsY0FuYWx5dGljczogQ2FsY3VsYXRvckFuYWx5dGljcykge1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5vdmVydmlld0NoYXJ0ID0gTW9ycmlzLkFyZWEoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiAnYXJlYS1leGFtcGxlJyxcclxuICAgICAgICAgICAgZGF0YTogW3sgeTogJzAnLCBhOiAwLCBiOiAwIH1dLFxyXG4gICAgICAgICAgICB4a2V5OiAneScsXHJcbiAgICAgICAgICAgIHlrZXlzOiBbJ2EnLCAnYiddLFxyXG4gICAgICAgICAgICBsYWJlbHM6IFsnVW5pcXVlIFZpZXdzJywgJ1BhZ2UgVmlld3MnXSxcclxuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuNCxcclxuICAgICAgICAgICAgaGlkZUhvdmVyOiAnYXV0bycsXHJcbiAgICAgICAgICAgIGJlaGF2ZUxpa2VMaW5lOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNpemU6IHRydWUsXHJcbiAgICAgICAgICAgIHBvaW50RmlsbENvbG9yczogWycjZmI1NDViJ10sXHJcbiAgICAgICAgICAgIHBvaW50U3Ryb2tlQ29sb3JzOiBbJyMyNjlmZDgnXSxcclxuICAgICAgICAgICAgbGluZUNvbG9yczogWycjZmI1NDViJywgJyMyNjlmZDgnXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvL2NvZGVcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICBpZih0aGlzLmNhbGMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FsYy5saXZlQXBwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjX2lkID0gdGhpcy5jYWxjLl9pZDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjX2lkID0gdGhpcy5jYWxjLnBhcmVudEFwcDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9zdERhdGEuY2FsY19pZCA9IHRoaXMuY2FsY19pZDtcclxuICAgICAgICAgICAgLy9nZXQgc3RhdHNcclxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5nZXRWaWV3U3RhdHMoKSk7XHJcbiAgICAgICAgICAgIC8vZ2V0IHN0YXRzXHJcbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZ2V0Q29tYmluZWRTdGF0cygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Vmlld1N0YXRzKCkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhMb2FkZXIgPSAnbG9hZGluZyc7XHJcbiAgICAgICAgdGhpcy5wb3N0RGF0YS50eXBlID0gJ2RhdGUnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxjQW5hbHl0aWNzLmdldFRyYWZmaWNTdGF0cyh0aGlzLnBvc3REYXRhKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoICYmIHJlc3BvbnNlWzBdWzBdICE9ICcobm90IHNldCknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFVuaXF1ZVZpc2l0cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFZpc2l0cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZS5tYXAodmFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFVuaXF1ZVZpc2l0cyArPSBOdW1iZXIodmFsWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFZpc2l0cyArPSBOdW1iZXIodmFsWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsWzBdID0gdmFsWzBdLnJlcGxhY2UoLyhcXGRcXGRcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKS9nLCAnJDEtJDItJDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgeTogdmFsWzBdLCBhOiB2YWxbMV0sIGI6IHZhbFsyXSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlcnZpZXdDaGFydC5zZXREYXRhKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZS5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWwgPT4geyByZXR1cm4geyBsYWJlbDogJ1Zpc2l0b3JzJywgdmFsdWU6IHZhbC5iIH07IH1cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmZ1c2lvbkNoYXJ0RGF0YS5kYXRhc2V0ID0gW3sgZGF0YTogcmVzcG9uc2UgfV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmRyYXdGdXNpb25DaGFydCgnY2hhcnQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaExvYWRlciA9ICdkb25lJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaExvYWRlciA9ICdObyBEYXRhIEF2YWlsYWJsZSAhJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhMb2FkZXIgPSAnU29tZXRoaW5nIFdlbnQgV3JvbmcgISc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21iaW5lZFN0YXRzKCkge1xyXG4gICAgICAgIC8vIHRoaXMuZ2VvTG9hZGVyID0gJ2xvYWRpbmcnO1xyXG4gICAgICAgIHRoaXMucG9zdERhdGEudHlwZSA9ICdvdmVydmlldyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNBbmFseXRpY3MuZ2V0VHJhZmZpY1N0YXRzKHRoaXMucG9zdERhdGEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVWaXNpdG9yczogcmVzcG9uc2VbMF1bMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2l0b3JzOiByZXNwb25zZVswXVsyXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU9uUGFnZTogKHJlc3BvbnNlWzBdWzNdID4gNjApID8gKHJlc3BvbnNlWzBdWzNdIC8gNjApLnRvRml4ZWQoMikgKyAnIG1pbicgOiByZXNwb25zZVswXVszXSArICcgc2VjJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVyc2lvbnM6IHJlc3BvbnNlWzBdWzRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uUmF0ZTogKHJlc3BvbnNlWzBdWzFdICYmIHJlc3BvbnNlWzBdWzRdKSA/ICgocmVzcG9uc2VbMF1bNF0gLyByZXNwb25zZVswXVsxXSkgKiAxMDApLnRvRml4ZWQoMikgOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2Z1Jlc3BvbnNlOiByZXNwb25zZVswXVs1XSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5nZW9Mb2FkZXIgPSAnZG9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5nZW9Mb2FkZXIgPSAnTm8gRGF0YSBBdmFpbGFibGUgISc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0cyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlVmlzaXRvcnM6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaXRvcnM6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZU9uUGFnZTogJzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJzaW9uczogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVyc2lvblJhdGU6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZnUmVzcG9uc2U6JzAnXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5nZW9Mb2FkZXIgPSAnU29tZXRoaW5nIFdlbnQgV3JvbmcgISc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRhdGVTZWxlY3QoZGF0ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zdGFydF9kYXRlID0gZGF0ZS5zdGFydF9kYXRlO1xyXG4gICAgICAgIHRoaXMuZW5kX2RhdGUgPSBkYXRlLmVuZF9kYXRlO1xyXG4gICAgICAgIHRoaXMucG9zdERhdGEuc3RhcnRfZGF0ZSA9IGRhdGUuc3RhcnRfZGF0ZTtcclxuICAgICAgICB0aGlzLnBvc3REYXRhLmVuZF9kYXRlID0gZGF0ZS5lbmRfZGF0ZTtcclxuICAgICAgICAvL3JlZnJlc2ggc3RhdHNcclxuICAgICAgICB0aGlzLmdldFZpZXdTdGF0cygpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tYmluZWRTdGF0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZSgpIHtcclxuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
