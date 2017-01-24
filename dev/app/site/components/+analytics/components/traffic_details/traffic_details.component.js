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
        if (this.calc_id) {
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
        __metadata('design:type', String)
    ], TrafficDetailsComponent.prototype, "calc_id", void 0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK2FuYWx5dGljcy9jb21wb25lbnRzL3RyYWZmaWNfZGV0YWlscy90cmFmZmljX2RldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNkYsZUFBZSxDQUFDLENBQUE7QUFDN0csNkNBQW9DLDZDQUE2QyxDQUFDLENBQUE7QUFDbEYsNENBQXVDLGtEQUFrRCxDQUFDLENBQUE7QUFnQjFGO0lBYUksaUNBQW9CLGNBQW1DO1FBQW5DLG1CQUFjLEdBQWQsY0FBYyxDQUFxQjtRQVh2RCxjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBQ2pDLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBQ2pDLGtCQUFhLEdBQVcsU0FBUyxDQUFDO1FBQ2xDLGFBQVEsR0FBUTtZQUNaLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDOUQsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FDMUMsQ0FBQztRQUVNLFNBQUksR0FBbUIsRUFBRSxDQUFDO0lBSWxDLENBQUM7SUFFRCxpREFBZSxHQUFmO0lBRUEsQ0FBQztJQUVELDBDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUVyQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7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QyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBdktEO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQVZaO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDckMsVUFBVSxFQUFDLENBQUMsc0RBQXdCLENBQUM7WUFDckMsU0FBUyxFQUFDLENBQUMsa0RBQW1CLENBQUM7U0FDaEMsQ0FBQzs7K0JBQUE7SUEyS0YsOEJBQUM7QUFBRCxDQXpLQSxBQXlLQyxJQUFBO0FBektZLCtCQUF1QiwwQkF5S25DLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvY29tcG9uZW50cy8rYW5hbHl0aWNzL2NvbXBvbmVudHMvdHJhZmZpY19kZXRhaWxzL3RyYWZmaWNfZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3RW5jYXBzdWxhdGlvbixJbnB1dCxPbkNoYW5nZXMsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbGN1bGF0b3JBbmFseXRpY3MgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYWxjdWxhdG9yLWFuYWx5dGljcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnR9IGZyb20gJy4uL2RhdGVfcmFuZ2VfcGlja2VyL2RhdGVfcmFuZ2VfcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbmRlY2xhcmUgdmFyIGdvb2dsZTphbnk7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ29nLXRyYWZmaWMtZGV0YWlscycsXHJcbiAgdGVtcGxhdGVVcmw6ICd0cmFmZmljX2RldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgZGlyZWN0aXZlczpbRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6W0NhbGN1bGF0b3JBbmFseXRpY3NdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJhZmZpY0RldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkgY2FsY19pZDogU3RyaW5nO1xyXG4gICAgZ2VvTG9hZGVyOiBzdHJpbmcgPSAnbG9hZGluZyc7XHJcbiAgICBkZXZpY2VMb2FkZXI6IHN0cmluZyA9ICdsb2FkaW5nJztcclxuICAgIHNvY2lhbExvYWRlcjogc3RyaW5nID0gJ2xvYWRpbmcnO1xyXG4gICAgYnJvd3NlckxvYWRlcjogc3RyaW5nID0gJ2xvYWRpbmcnO1xyXG4gICAgcG9zdERhdGE6IGFueSA9IHtcclxuICAgICAgICBzdGFydF9kYXRlOiBtb21lbnQoKS5zdWJ0cmFjdCgxMCwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcclxuICAgICAgICBlbmRfZGF0ZTogbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJylcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhbGNBbmFseXRpY3M6IENhbGN1bGF0b3JBbmFseXRpY3MpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIC8vQ29kZVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vQ29kZVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY2FsY19pZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc3REYXRhLmNhbGNfaWQgPSB0aGlzLmNhbGNfaWQ7XHJcbiAgICAgICAgICAgIC8vZ2V0IHN0YXRzXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RhdHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdHMoKSB7XHJcbiAgICAgICAgLy9nZW8gbG9jYXRpb24gZGF0YVxyXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZ2V0R2VvU3RhdHMoKSk7XHJcbiAgICAgICAgLy9kZXZpY2UgZGF0YVxyXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZ2V0RGV2aWNlU3RhdHMoKSk7XHJcbiAgICAgICAgLy9zb2NpYWwgZGF0YVxyXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZ2V0U29jaWFsU3RhdHMoKSk7XHJcbiAgICAgICAgLy9icm93c2VyIGRhdGFcclxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmdldEJyb3dzZXJTdGF0cygpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHZW9TdGF0cygpIHtcclxuICAgICAgICB0aGlzLmdlb0xvYWRlciA9ICdsb2FkaW5nJztcclxuICAgICAgICB0aGlzLnBvc3REYXRhLnR5cGUgPSAnY291bnRyeSc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNBbmFseXRpY3MuZ2V0VHJhZmZpY1N0YXRzKHRoaXMucG9zdERhdGEpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCAmJiByZXNwb25zZVswXVswXSAhPSAnKG5vdCBzZXQpJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2UubWFwKHZhbCA9PiBbdmFsWzBdLCBOdW1iZXIodmFsWzJdKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnVuc2hpZnQoWydDb3VudHJ5JywgJ1BhZ2UgVmlld3MnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UmVnaW9uc01hcChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW9Mb2FkZXIgPSAnZG9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VvTG9hZGVyID0gJ05vIERhdGEgQXZhaWxhYmxlICEnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdlb0xvYWRlciA9ICdTb21ldGhpbmcgV2VudCBXcm9uZyAhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGV2aWNlU3RhdHMoKSB7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VMb2FkZXIgPSAnbG9hZGluZyc7XHJcbiAgICAgICAgdGhpcy5wb3N0RGF0YS50eXBlID0gJ2RldmljZUNhdGVnb3J5JztcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FsY0FuYWx5dGljcy5nZXRUcmFmZmljU3RhdHModGhpcy5wb3N0RGF0YSlcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoICYmIHJlc3BvbnNlWzBdWzBdICE9ICcobm90IHNldCknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZS5tYXAodmFsID0+IFt2YWxbMF0sIE51bWJlcih2YWxbMl0pXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudW5zaGlmdChbJ0RldmljZXMnLCAnUGFnZSBWaWV3cyddKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdQaWVDaGFydChyZXNwb25zZSwgJ3BpZWNoYXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VMb2FkZXIgPSAnZG9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlTG9hZGVyID0gJ05vIERhdGEgQXZhaWxhYmxlICEnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZUxvYWRlciA9ICdTb21ldGhpbmcgV2VudCBXcm9uZyAhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29jaWFsU3RhdHMoKSB7XHJcbiAgICAgICAgdGhpcy5zb2NpYWxMb2FkZXIgPSAnbG9hZGluZyc7XHJcbiAgICAgICAgdGhpcy5wb3N0RGF0YS50eXBlID0gJ3NvY2lhbE5ldHdvcmsnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxjQW5hbHl0aWNzLmdldFRyYWZmaWNTdGF0cyh0aGlzLnBvc3REYXRhKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlLm1hcCh2YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YWxbMF0gPT0gJyhub3Qgc2V0KScpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsWzBdID0gJ0RpcmVjdCBBY2Nlc3MnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UgPSBbdmFsWzBdLCBOdW1iZXIodmFsWzJdKV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudW5zaGlmdChbJ1NvY2lhbCcsICdQYWdlIFZpZXdzJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BpZUNoYXJ0KHJlc3BvbnNlLCAncGllY2hhcnQxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb2NpYWxMb2FkZXIgPSAnZG9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29jaWFsTG9hZGVyID0gJ05vIERhdGEgQXZhaWxhYmxlICEnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2lhbExvYWRlciA9ICdTb21ldGhpbmcgV2VudCBXcm9uZyAhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJvd3NlclN0YXRzKCkge1xyXG4gICAgICAgIHRoaXMuYnJvd3NlckxvYWRlciA9ICdsb2FkaW5nJztcclxuICAgICAgICB0aGlzLnBvc3REYXRhLnR5cGUgPSAnYnJvd3Nlcic7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGNBbmFseXRpY3MuZ2V0VHJhZmZpY1N0YXRzKHRoaXMucG9zdERhdGEpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2UubWFwKHZhbCA9PiBbdmFsWzBdLCBOdW1iZXIodmFsWzJdKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnVuc2hpZnQoWydCcm93c2VyJywgJ1BhZ2UgVmlld3MnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UGllQ2hhcnQocmVzcG9uc2UsICdwaWVjaGFydDInKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb3dzZXJMb2FkZXIgPSAnZG9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJvd3NlckxvYWRlciA9ICdObyBEYXRhIEF2YWlsYWJsZSAhJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5icm93c2VyTG9hZGVyID0gJ1NvbWV0aGluZyBXZW50IFdyb25nICEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3UmVnaW9uc01hcChncmFwaERhdGE6IGFueVtdKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBnb29nbGUudmlzdWFsaXphdGlvbi5hcnJheVRvRGF0YVRhYmxlKGdyYXBoRGF0YSk7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7J3dpZHRoJzoyNTAsICAnaGVpZ2h0JzoxODAsXHJcbiAgICAgICAgICAgIGNvbG9yczogWycjY2U1MDUwJywgJyNmMTdhNTInLCAnI2Y5ZGU3MSddLFxyXG4gICAgICAgICAgICBsZWdlbmQ6J25vbmUnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkdlb0NoYXJ0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpb25zX2RpdicpKTtcclxuICAgICAgICBjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdQaWVDaGFydChncmFwaERhdGE6IGFueVtdLCBkcmF3aW5nQXJlYTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBnb29nbGUudmlzdWFsaXphdGlvbi5hcnJheVRvRGF0YVRhYmxlKGdyYXBoRGF0YSk7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICd3aWR0aCc6JzY4MCcsICAnaGVpZ2h0JzonMjgwJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICBsZWdlbmQ6IHt0ZXh0U3R5bGU6IHtjb2xvcjogJyM4YzkxOTQnLCBmb250U2l6ZTogJzExcHgnLCAgbWFyZ2luQm90dG9tOiAnNXB4J319LFxyXG4gICAgICAgICAgICBjb2xvcnM6IFsnI2YzODYzMCcsICcjNjlkMmU3JywgJyNlMGU0Y2MnXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5QaWVDaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkcmF3aW5nQXJlYSkpO1xyXG4gICAgICAgIGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXRlU2VsZWN0KGRhdGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMucG9zdERhdGEuc3RhcnRfZGF0ZSA9IGRhdGUuc3RhcnRfZGF0ZTtcclxuICAgICAgICB0aGlzLnBvc3REYXRhLmVuZF9kYXRlID0gZGF0ZS5lbmRfZGF0ZTtcclxuICAgICAgICAvL3JlZnJlc2ggc3RhdHNcclxuICAgICAgICB0aGlzLmdldFN0YXRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1Yj0+c3ViLnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
