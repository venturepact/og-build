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
var TrafficDetailsComponent = (function () {
    function TrafficDetailsComponent(_calcAnalytics) {
        this._calcAnalytics = _calcAnalytics;
        this.geoLoader = 'loading';
        this.deviceLoader = 'loading';
        this.socialLoader = 'loading';
        this.browserLoader = 'loading';
        this.postData = {
            start_date: moment().subtract(10, 'days').format('YYYY-MM-DD'),
            end_date: moment().format('YYYY-MM-DD')
        };
        this.subs = [];
    }
    TrafficDetailsComponent.prototype.ngAfterViewInit = function () {
    };
    TrafficDetailsComponent.prototype.ngOnInit = function () {
    };
    TrafficDetailsComponent.prototype.ngOnChanges = function () {
        if (this.calc) {
            if (this.calc.liveApp)
                this.calc_id = this.calc._id;
            else
                this.calc_id = this.calc.parentApp;
            this.postData.calc_id = this.calc_id;
            this.getStats();
        }
    };
    TrafficDetailsComponent.prototype.getStats = function () {
        this.subs.push(this.getGeoStats());
        this.subs.push(this.getDeviceStats());
        this.subs.push(this.getSocialStats());
        this.subs.push(this.getBrowserStats());
    };
    TrafficDetailsComponent.prototype.getGeoStats = function () {
        var _this = this;
        this.geoLoader = 'loading';
        this.postData.type = 'country';
        return this._calcAnalytics.getTrafficStats(this.postData)
            .subscribe(function (response) {
            if (response.length && response[0][0] != '(not set)') {
                response = response.map(function (val) { return [val[0], Number(val[2])]; });
                response.unshift(['Country', 'Page Views']);
                _this.drawRegionsMap(response);
                _this.geoLoader = 'done';
            }
            else {
                _this.geoLoader = 'No Data Available !';
            }
        }, function (error) {
            _this.geoLoader = 'Something Went Wrong !';
        });
    };
    TrafficDetailsComponent.prototype.getDeviceStats = function () {
        var _this = this;
        this.deviceLoader = 'loading';
        this.postData.type = 'deviceCategory';
        return this._calcAnalytics.getTrafficStats(this.postData)
            .subscribe(function (response) {
            if (response.length && response[0][0] != '(not set)') {
                response = response.map(function (val) { return [val[0], Number(val[2])]; });
                response.unshift(['Devices', 'Page Views']);
                _this.drawPieChart(response, 'piechart');
                _this.deviceLoader = 'done';
            }
            else {
                _this.deviceLoader = 'No Data Available !';
            }
        }, function (error) {
            _this.deviceLoader = 'Something Went Wrong !';
        });
    };
    TrafficDetailsComponent.prototype.getSocialStats = function () {
        var _this = this;
        this.socialLoader = 'loading';
        this.postData.type = 'socialNetwork';
        return this._calcAnalytics.getTrafficStats(this.postData)
            .subscribe(function (response) {
            if (response.length) {
                response = response.map(function (val) {
                    if (val[0] == '(not set)')
                        val[0] = 'Direct Access';
                    return response = [val[0], Number(val[2])];
                });
                response.unshift(['Social', 'Page Views']);
                _this.drawPieChart(response, 'piechart1');
                _this.socialLoader = 'done';
            }
            else {
                _this.socialLoader = 'No Data Available !';
            }
        }, function (error) {
            _this.socialLoader = 'Something Went Wrong !';
        });
    };
    TrafficDetailsComponent.prototype.getBrowserStats = function () {
        var _this = this;
        this.browserLoader = 'loading';
        this.postData.type = 'browser';
        return this._calcAnalytics.getTrafficStats(this.postData)
            .subscribe(function (response) {
            if (response.length) {
                response = response.map(function (val) { return [val[0], Number(val[2])]; });
                response.unshift(['Browser', 'Page Views']);
                _this.drawPieChart(response, 'piechart2');
                _this.browserLoader = 'done';
            }
            else {
                _this.browserLoader = 'No Data Available !';
            }
        }, function (error) {
            _this.browserLoader = 'Something Went Wrong !';
        });
    };
    TrafficDetailsComponent.prototype.drawRegionsMap = function (graphData) {
        var data = google.visualization.arrayToDataTable(graphData);
        var options = { 'width': 250, 'height': 180,
            colors: ['#ce5050', '#f17a52', '#f9de71'],
            legend: 'none'
        };
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);
    };
    TrafficDetailsComponent.prototype.drawPieChart = function (graphData, drawingArea) {
        var data = google.visualization.arrayToDataTable(graphData);
        var options = {
            'width': '680', 'height': '280',
            backgroundColor: 'transparent',
            legend: { textStyle: { color: '#8c9194', fontSize: '11px', marginBottom: '5px' } },
            colors: ['#f38630', '#69d2e7', '#e0e4cc']
        };
        var chart = new google.visualization.PieChart(document.getElementById(drawingArea));
        chart.draw(data, options);
    };
    TrafficDetailsComponent.prototype.onDateSelect = function (date) {
        this.postData.start_date = date.start_date;
        this.postData.end_date = date.end_date;
        this.getStats();
    };
    TrafficDetailsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    TrafficDetailsComponent.prototype.unsubscribe = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TrafficDetailsComponent.prototype, "calc", void 0);
    TrafficDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-traffic-details',
            templateUrl: 'traffic_details.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [date_range_picker_component_1.DateRangePickerComponent],
            providers: [calculator_analytics_service_1.CalculatorAnalytics]
        }), 
        __metadata('design:paramtypes', [calculator_analytics_service_1.CalculatorAnalytics])
    ], TrafficDetailsComponent);
    return TrafficDetailsComponent;
}());
exports.TrafficDetailsComponent = TrafficDetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK2FuYWx5dGljcy9jb21wb25lbnRzL3RyYWZmaWNfZGV0YWlscy90cmFmZmljX2RldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkYsZUFBZSxDQUFDLENBQUE7QUFDN0csNkNBQW9DLDZDQUE2QyxDQUFDLENBQUE7QUFDbEYsNENBQXVDLGtEQUFrRCxDQUFDLENBQUE7QUFnQjFGO0lBY0ksaUNBQW9CLGNBQW1DO1FBQW5DLG1CQUFjLEdBQWQsY0FBYyxDQUFxQjtRQVh2RCxjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBQ2pDLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBQ2pDLGtCQUFhLEdBQVcsU0FBUyxDQUFDO1FBQ2xDLGFBQVEsR0FBUTtZQUNaLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDOUQsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDMUMsQ0FBQztRQUVNLFNBQUksR0FBbUIsRUFBRSxDQUFDO0lBSWxDLENBQUM7SUFFRCxpREFBZSxHQUFmO0lBRUEsQ0FBQztJQUVELDBDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1gsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSTtnQkFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBRXZDLElBQUksQ0FB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USxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXZDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQTdLRDtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFWWjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFVBQVUsRUFBQyxDQUFDLHNEQUF3QixDQUFDO1lBQ3JDLFNBQVMsRUFBQyxDQUFDLGtEQUFtQixDQUFDO1NBQ2hDLENBQUM7OytCQUFBO0lBaUxGLDhCQUFDO0FBQUQsQ0EvS0EsQUErS0MsSUFBQTtBQS9LWSwrQkFBdUIsMEJBK0tuQyxDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL2NvbXBvbmVudHMvK2FuYWx5dGljcy9jb21wb25lbnRzL3RyYWZmaWNfZGV0YWlscy90cmFmZmljX2RldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sSW5wdXQsT25DaGFuZ2VzLCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYWxjdWxhdG9yQW5hbHl0aWNzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FsY3VsYXRvci1hbmFseXRpY3Muc2VydmljZSc7XHJcbmltcG9ydCB7RGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50fSBmcm9tICcuLi9kYXRlX3JhbmdlX3BpY2tlci9kYXRlX3JhbmdlX3BpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xyXG5kZWNsYXJlIHZhciBnb29nbGU6YW55O1xyXG5kZWNsYXJlIHZhciBtb21lbnQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy10cmFmZmljLWRldGFpbHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAndHJhZmZpY19kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGRpcmVjdGl2ZXM6W0RhdGVSYW5nZVBpY2tlckNvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOltDYWxjdWxhdG9yQW5hbHl0aWNzXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYWZmaWNEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIGNhbGM6IGFueTtcclxuICAgIGNhbGNfaWQ6IHN0cmluZztcclxuICAgIGdlb0xvYWRlcjogc3RyaW5nID0gJ2xvYWRpbmcnO1xyXG4gICAgZGV2aWNlTG9hZGVyOiBzdHJpbmcgPSAnbG9hZGluZyc7XHJcbiAgICBzb2NpYWxMb2FkZXI6IHN0cmluZyA9ICdsb2FkaW5nJztcclxuICAgIGJyb3dzZXJMb2FkZXI6IHN0cmluZyA9ICdsb2FkaW5nJztcclxuICAgIHBvc3REYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgc3RhcnRfZGF0ZTogbW9tZW50KCkuc3VidHJhY3QoMTAsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJyksXHJcbiAgICAgICAgZW5kX2RhdGU6IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jYWxjQW5hbHl0aWNzOiBDYWxjdWxhdG9yQW5hbHl0aWNzKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAvL0NvZGVcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvL0NvZGVcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICBpZih0aGlzLmNhbGMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FsYy5saXZlQXBwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjX2lkID0gdGhpcy5jYWxjLl9pZDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjX2lkID0gdGhpcy5jYWxjLnBhcmVudEFwcDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBvc3REYXRhLmNhbGNfaWQgPSB0aGlzLmNhbGNfaWQ7XHJcbiAgICAgICAgICAgIC8vZ2V0IHN0YXRzXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RhdHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdHMoKSB7XHJcbiAgICAgICAgLy9nZW8gbG9jYXRpb24gZGF0YVxyXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZ2V0R2VvU3RhdHMoKSk7XHJcbiAgICAgICAgLy9kZXZpY2UgZGF0YVxyXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZ2V0RGV2aWNlU3RhdHMoKSk7XHJcbiAgICAgICAgLy9zb2NpYWwgZGF0YVxyXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZ2V0U29jaWFsU3RhdHMoKSk7XHJcbiAgICAgICAgLy9icm93c2VyIGRhdGFcclxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmdldEJyb3dzZXJTdGF0cygpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHZW9TdGF0cygpIHtcclxuICAgICAgICB0aGlzLmdlb0xvYWRlciA9ICdsb2FkaW5nJztcclxuICAgICAgICB0aGlzLnBvc3REYXRhLnR5cGUgPSAnY291bnRyeSc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNBbmFseXRpY3MuZ2V0VHJhZmZpY1N0YXRzKHRoaXMucG9zdERhdGEpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCAmJiByZXNwb25zZVswXVswXSAhPSAnKG5vdCBzZXQpJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2UubWFwKHZhbCA9PiBbdmFsWzBdLCBOdW1iZXIodmFsWzJdKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnVuc2hpZnQoWydDb3VudHJ5JywgJ1BhZ2UgVmlld3MnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UmVnaW9uc01hcChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW9Mb2FkZXIgPSAnZG9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VvTG9hZGVyID0gJ05vIERhdGEgQXZhaWxhYmxlICEnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdlb0xvYWRlciA9ICdTb21ldGhpbmcgV2VudCBXcm9uZyAhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGV2aWNlU3RhdHMoKSB7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VMb2FkZXIgPSAnbG9hZGluZyc7XHJcbiAgICAgICAgdGhpcy5wb3N0RGF0YS50eXBlID0gJ2RldmljZUNhdGVnb3J5JztcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FsY0FuYWx5dGljcy5nZXRUcmFmZmljU3RhdHModGhpcy5wb3N0RGF0YSlcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoICYmIHJlc3BvbnNlWzBdWzBdICE9ICcobm90IHNldCknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZS5tYXAodmFsID0+IFt2YWxbMF0sIE51bWJlcih2YWxbMl0pXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudW5zaGlmdChbJ0RldmljZXMnLCAnUGFnZSBWaWV3cyddKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdQaWVDaGFydChyZXNwb25zZSwgJ3BpZWNoYXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VMb2FkZXIgPSAnZG9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlTG9hZGVyID0gJ05vIERhdGEgQXZhaWxhYmxlICEnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZUxvYWRlciA9ICdTb21ldGhpbmcgV2VudCBXcm9uZyAhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29jaWFsU3RhdHMoKSB7XHJcbiAgICAgICAgdGhpcy5zb2NpYWxMb2FkZXIgPSAnbG9hZGluZyc7XHJcbiAgICAgICAgdGhpcy5wb3N0RGF0YS50eXBlID0gJ3NvY2lhbE5ldHdvcmsnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxjQW5hbHl0aWNzLmdldFRyYWZmaWNTdGF0cyh0aGlzLnBvc3REYXRhKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLm1hcCh2YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YWxbMF0gPT0gJyhub3Qgc2V0KScpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsWzBdID0gJ0RpcmVjdCBBY2Nlc3MnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UgPSBbdmFsWzBdLCBOdW1iZXIodmFsWzJdKV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudW5zaGlmdChbJ1NvY2lhbCcsICdQYWdlIFZpZXdzJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BpZUNoYXJ0KHJlc3BvbnNlLCAncGllY2hhcnQxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NpYWxMb2FkZXIgPSAnZG9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29jaWFsTG9hZGVyID0gJ05vIERhdGEgQXZhaWxhYmxlICEnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2lhbExvYWRlciA9ICdTb21ldGhpbmcgV2VudCBXcm9uZyAhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJvd3NlclN0YXRzKCkge1xyXG4gICAgICAgIHRoaXMuYnJvd3NlckxvYWRlciA9ICdsb2FkaW5nJztcclxuICAgICAgICB0aGlzLnBvc3REYXRhLnR5cGUgPSAnYnJvd3Nlcic7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNBbmFseXRpY3MuZ2V0VHJhZmZpY1N0YXRzKHRoaXMucG9zdERhdGEpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2UubWFwKHZhbCA9PiBbdmFsWzBdLCBOdW1iZXIodmFsWzJdKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnVuc2hpZnQoWydCcm93c2VyJywgJ1BhZ2UgVmlld3MnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UGllQ2hhcnQocmVzcG9uc2UsICdwaWVjaGFydDInKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb3dzZXJMb2FkZXIgPSAnZG9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJvd3NlckxvYWRlciA9ICdObyBEYXRhIEF2YWlsYWJsZSAhJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5icm93c2VyTG9hZGVyID0gJ1NvbWV0aGluZyBXZW50IFdyb25nICEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3UmVnaW9uc01hcChncmFwaERhdGE6IGFueVtdKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBnb29nbGUudmlzdWFsaXphdGlvbi5hcnJheVRvRGF0YVRhYmxlKGdyYXBoRGF0YSk7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7J3dpZHRoJzoyNTAsICAnaGVpZ2h0JzoxODAsXHJcbiAgICAgICAgICAgIGNvbG9yczogWycjY2U1MDUwJywgJyNmMTdhNTInLCAnI2Y5ZGU3MSddLFxyXG4gICAgICAgICAgICBsZWdlbmQ6J25vbmUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkdlb0NoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpb25zX2RpdicpKTtcclxuICAgICAgICBjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdQaWVDaGFydChncmFwaERhdGE6IGFueVtdLCBkcmF3aW5nQXJlYTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBnb29nbGUudmlzdWFsaXphdGlvbi5hcnJheVRvRGF0YVRhYmxlKGdyYXBoRGF0YSk7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICd3aWR0aCc6JzY4MCcsICAnaGVpZ2h0JzonMjgwJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHt0ZXh0U3R5bGU6IHtjb2xvcjogJyM4YzkxOTQnLCBmb250U2l6ZTogJzExcHgnLCAgbWFyZ2luQm90dG9tOiAnNXB4J319LFxyXG4gICAgICAgICAgICBjb2xvcnM6IFsnI2YzODYzMCcsICcjNjlkMmU3JywgJyNlMGU0Y2MnXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5QaWVDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmF3aW5nQXJlYSkpO1xyXG4gICAgICAgIGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXRlU2VsZWN0KGRhdGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMucG9zdERhdGEuc3RhcnRfZGF0ZSA9IGRhdGUuc3RhcnRfZGF0ZTtcclxuICAgICAgICB0aGlzLnBvc3REYXRhLmVuZF9kYXRlID0gZGF0ZS5lbmRfZGF0ZTtcclxuICAgICAgICAvL3JlZnJlc2ggc3RhdHNcclxuICAgICAgICB0aGlzLmdldFN0YXRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1Yj0+c3ViLnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
