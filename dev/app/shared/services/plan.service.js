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
require('rxjs/add/operator/map');
require('rxjs/add/observable/of');
require('rxjs/add/operator/catch');
var base_service_1 = require('./base.service');
var PlanService = (function (_super) {
    __extends(PlanService, _super);
    function PlanService(_http) {
        _super.call(this);
        this._http = _http;
    }
    PlanService.prototype.getPlanFeatures = function (plan) {
        var getPlanUrl = this._url + '/planfeature/' + plan;
        return this._http.get(getPlanUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PlanService.prototype.updatePlanFeatures = function (plan, data) {
        var planUrl = this._url + '/planfeature/active/' + plan;
        return this._http.put(planUrl, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PlanService.prototype.getPlans = function () {
        var planUrl = this._url + '/userplans';
        return this._http.get(planUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PlanService.prototype.getCycles = function () {
        var couponUrl = this._url + '/coupons';
        return this._http.get(couponUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PlanService.prototype.updateCycles = function (data) {
        var couponUrl = this._url + '/coupons/update';
        return this._http.put(couponUrl, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PlanService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlanService);
    return PlanService;
}(base_service_1.BaseService));
exports.PlanService = PlanService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvcGxhbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFDckMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8sd0JBQXdCLENBQUMsQ0FBQTtBQUNoQyxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFHN0M7SUFBaUMsK0JBQVc7SUFDeEMscUJBQW9CLEtBQVc7UUFDM0IsaUJBQU8sQ0FBQztRQURRLFVBQUssR0FBTCxLQUFLLENBQU07SUFFL0IsQ0FBQztJQUVELHFDQUFlLEdBQWYsVUFBZ0IsSUFBWTtRQUMzQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHdDQUFrQixHQUFsQixVQUFtQixJQUFZLEVBQUUsSUFBUztRQUN6QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQixHQUFHLElBQUksQ0FBQztRQUV4RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztRQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNFLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsSUFBUTtRQUNuQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBeENMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUF5Q2Isa0JBQUM7QUFBRCxDQXhDQSxBQXdDQyxDQXhDZ0MsMEJBQVcsR0F3QzNDO0FBeENZLG1CQUFXLGNBd0N2QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvcGxhbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLnNlcnZpY2UnOyBcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBsYW5TZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxhbkZlYXR1cmVzKHBsYW46IFN0cmluZyl7XHJcbiAgICBcdGxldCBnZXRQbGFuVXJsID0gdGhpcy5fdXJsICsgJy9wbGFuZmVhdHVyZS8nICsgcGxhbjtcclxuICAgIFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGdldFBsYW5VcmwsdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgIFx0dXBkYXRlUGxhbkZlYXR1cmVzKHBsYW46IFN0cmluZywgZGF0YTogYW55ICl7XHJcbiAgIFx0XHRsZXQgcGxhblVybCA9IHRoaXMuX3VybCArICcvcGxhbmZlYXR1cmUvYWN0aXZlLycgKyBwbGFuO1xyXG4gICBcdFx0XHJcbiAgIFx0XHRyZXR1cm4gdGhpcy5faHR0cC5wdXQocGxhblVybCxkYXRhLHRoaXMub3B0aW9ucylcclxuICAgXHRcdFx0XHRcdFx0XHQubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgIFx0XHRcdFx0XHRcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICBcdH1cclxuXHJcbiAgICBnZXRQbGFucygpe1xyXG4gICAgICBsZXQgcGxhblVybCA9IHRoaXMuX3VybCArICcvdXNlcnBsYW5zJztcclxuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHBsYW5VcmwsdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN5Y2xlcygpe1xyXG4gICAgICBsZXQgY291cG9uVXJsID0gdGhpcy5fdXJsICsgJy9jb3Vwb25zJztcclxuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvdXBvblVybCx0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDeWNsZXMoZGF0YTphbnkpe1xyXG4gICAgICBsZXQgY291cG9uVXJsID0gdGhpcy5fdXJsICsgJy9jb3Vwb25zL3VwZGF0ZSc7XHJcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dChjb3Vwb25VcmwsZGF0YSx0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxufVxyXG4iXX0=
