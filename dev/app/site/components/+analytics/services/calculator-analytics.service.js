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
var base_service_1 = require('../../../../shared/services/base.service');
var CalculatorAnalytics = (function (_super) {
    __extends(CalculatorAnalytics, _super);
    function CalculatorAnalytics(_http) {
        _super.call(this);
        this._http = _http;
    }
    CalculatorAnalytics.prototype.getTrafficStats = function (data) {
        var URL = this._url + '/analytic/calculator_stats';
        return this._http.post(URL, data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CalculatorAnalytics.prototype.getLeads = function (appId) {
        return this._http.post(this._url + '/analytic/get_leads', appId, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CalculatorAnalytics.prototype.getStats = function (key) {
        return this._http.post(this._url + '/analytic/get_stats', key, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CalculatorAnalytics.prototype.getLeadsCount = function (companyId) {
        return this._http.get(this._url + '/analytic/leads/count/' + companyId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CalculatorAnalytics = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CalculatorAnalytics);
    return CalculatorAnalytics;
}(base_service_1.BaseService));
exports.CalculatorAnalytics = CalculatorAnalytics;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK2FuYWx5dGljcy9zZXJ2aWNlcy9jYWxjdWxhdG9yLWFuYWx5dGljcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFFckMsNkJBQTRCLDBDQUEwQyxDQUFDLENBQUE7QUFHdkU7SUFBeUMsdUNBQVc7SUFFaEQsNkJBQW9CLEtBQVc7UUFDM0IsaUJBQU8sQ0FBQztRQURRLFVBQUssR0FBTCxLQUFLLENBQU07SUFFL0IsQ0FBQztJQUVELDZDQUFlLEdBQWYsVUFBZ0IsSUFBUztRQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLDRCQUE0QixDQUFDO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUM3QyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDRSxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFxQixFQUNqQyxLQUFLLEVBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUNwQjthQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsR0FBUTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDRixJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFxQixFQUNqQyxHQUFHLEVBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUNsQjthQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCwyQ0FBYSxHQUFiLFVBQWMsU0FBYztRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ0MsSUFBSSxDQUFDLElBQUksR0FBQyx3QkFBd0IsR0FBQyxTQUFTLENBQzNDO2FBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQXhDTDtRQUFDLGlCQUFVLEVBQUU7OzJCQUFBO0lBMENiLDBCQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsQ0F6Q3dDLDBCQUFXLEdBeUNuRDtBQXpDWSwyQkFBbUIsc0JBeUMvQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL2NvbXBvbmVudHMvK2FuYWx5dGljcy9zZXJ2aWNlcy9jYWxjdWxhdG9yLWFuYWx5dGljcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9iYXNlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvckFuYWx5dGljcyBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFmZmljU3RhdHMoZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IFVSTCA9IHRoaXMuX3VybCArICcvYW5hbHl0aWMvY2FsY3VsYXRvcl9zdGF0cyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChVUkwsIGRhdGEsIHRoaXMucG9zdF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGVhZHMoYXBwSWQ6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cmwgKyAnL2FuYWx5dGljL2dldF9sZWFkcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0X29wdGlvbnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRzKGtleTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXJsICsgJy9hbmFseXRpYy9nZXRfc3RhdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3N0X29wdGlvbnMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGVhZHNDb3VudChjb21wYW55SWQ6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cmwrJy9hbmFseXRpYy9sZWFkcy9jb3VudC8nK2NvbXBhbnlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
