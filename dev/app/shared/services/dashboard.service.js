"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('@angular/http');
var base_service_1 = require('./base.service');
var DashboardService = (function (_super) {
    __extends(DashboardService, _super);
    function DashboardService(_http) {
        _super.call(this);
        this._http = _http;
    }
    DashboardService.prototype.duplicateApp = function (appId) {
        return this._http.post(this._url + '/dashboard/duplicate_app', appId, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DashboardService.prototype.deleteApp = function (appId) {
        return this._http.post(this._url + '/dashboard/delete_app', appId, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DashboardService.prototype.changeAppMode = function (id, mode) {
        var details = {
            'id': id,
            'mode': mode
        };
        return this._http.post(this._url + '/dashboard/change_app_mode', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DashboardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DashboardService);
    return DashboardService;
}(base_service_1.BaseService));
exports.DashboardService = DashboardService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZGFzaGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUFzQixlQUFlLENBQUMsQ0FBQTtBQUl0Qyw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUc3QztJQUFzQyxvQ0FBVztJQUc3QywwQkFBb0IsS0FBVztRQUMzQixpQkFBTyxDQUFDO1FBRFEsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUUvQixDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLEtBQVU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsMEJBQTBCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyRixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsS0FBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ2xGLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxFQUFVLEVBQUUsSUFBWTtRQUNsQyxJQUFJLE9BQU8sR0FBTTtZQUNiLElBQUksRUFBQyxFQUFFO1lBQ1AsTUFBTSxFQUFDLElBQUk7U0FDZCxDQUFDO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN6RixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUE1Qkw7UUFBQyxpQkFBVSxFQUFFOzt3QkFBQTtJQTZCYix1QkFBQztBQUFELENBNUJBLEFBNEJDLENBNUJxQywwQkFBVyxHQTRCaEQ7QUE1Qlksd0JBQWdCLG1CQTRCNUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL2Rhc2hib2FyZC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwICB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0FwcH0gZnJvbSAnLi4vLi4vc2l0ZS8rYnVpbGRlci9tb2RlbHMvbW9kZWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcclxuICAgIHRva2VuOiBzdHJpbmc7XHJcbiAgICByZXNwb25zZTphbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBkdXBsaWNhdGVBcHAoYXBwSWQ6IGFueSk6IE9ic2VydmFibGU8QXBwPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwgKyAnL2Rhc2hib2FyZC9kdXBsaWNhdGVfYXBwJywgYXBwSWQsIHRoaXMucG9zdF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUFwcChhcHBJZDogYW55KTogT2JzZXJ2YWJsZTxBcHA+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCArICcvZGFzaGJvYXJkL2RlbGV0ZV9hcHAnLCBhcHBJZCwgdGhpcy5wb3N0X29wdGlvbnMoKSlcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQXBwTW9kZShpZDogc3RyaW5nLCBtb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFwcD4ge1xyXG4gICAgICAgIGxldCBkZXRhaWxzID0gICAge1xyXG4gICAgICAgICAgICAnaWQnOmlkLFxyXG4gICAgICAgICAgICAnbW9kZSc6bW9kZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwgKyAnL2Rhc2hib2FyZC9jaGFuZ2VfYXBwX21vZGUnLCBkZXRhaWxzLCB0aGlzLnBvc3Rfb3B0aW9ucygpKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxufVxyXG4iXX0=
