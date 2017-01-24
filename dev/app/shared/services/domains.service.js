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
var DomainService = (function (_super) {
    __extends(DomainService, _super);
    function DomainService(_http) {
        _super.call(this);
        this._http = _http;
    }
    DomainService.prototype.getDomains = function (data) {
        var getDomainsUrl = this._url + '/reserved/domains';
        return this._http.post(getDomainsUrl, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DomainService.prototype.addDomain = function (domain, type) {
        var getDomainsUrl = this._url + '/reserved/domains/create';
        var data = {
            sub_domain: domain,
            access: type
        };
        return this._http.post(getDomainsUrl, data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DomainService.prototype.deleteDomain = function (domainId) {
        var getDomainsUrl = this._url + '/reserved/domain/delete/' + domainId;
        return this._http.delete(getDomainsUrl, this.put_options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DomainService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DomainService);
    return DomainService;
}(base_service_1.BaseService));
exports.DomainService = DomainService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZG9tYWlucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBc0IsZUFBZSxDQUFDLENBQUE7QUFFdEMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8sd0JBQXdCLENBQUMsQ0FBQTtBQUNoQyxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFJN0M7SUFBbUMsaUNBQVc7SUFHMUMsdUJBQW9CLEtBQVc7UUFDM0IsaUJBQU8sQ0FBQztRQURRLFVBQUssR0FBTCxLQUFLLENBQU07SUFFL0IsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxJQUFVO1FBQ2pCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUM7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsTUFBYSxFQUFDLElBQVc7UUFDL0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRywwQkFBMEIsQ0FBQztRQUMzRCxJQUFJLElBQUksR0FBRztZQUNQLFVBQVUsRUFBQyxNQUFNO1lBQ2pCLE1BQU0sRUFBQyxJQUFJO1NBQ2QsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUM5QyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsUUFBZTtRQUN4QixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLDBCQUEwQixHQUFDLFFBQVEsQ0FBQztRQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBL0JMO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUFnQ2Isb0JBQUM7QUFBRCxDQS9CQSxBQStCQyxDQS9Ca0MsMEJBQVcsR0ErQjdDO0FBL0JZLHFCQUFhLGdCQStCekIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL2RvbWFpbnMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEb21haW5zIH0gIGZyb20gJy4vLi4vbW9kZWxzL2RvbWFpbnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRG9tYWluU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcclxuICAgIHRva2VuOiBzdHJpbmc7XHJcbiAgICByZXNwb25zZTphbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREb21haW5zKGRhdGEgOiBhbnkpOiBPYnNlcnZhYmxlPERvbWFpbnM+IHtcclxuICAgICAgICBsZXQgZ2V0RG9tYWluc1VybCA9IHRoaXMuX3VybCArICcvcmVzZXJ2ZWQvZG9tYWlucyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChnZXREb21haW5zVXJsLGRhdGEsdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGREb21haW4oZG9tYWluOnN0cmluZyx0eXBlOnN0cmluZyk6IE9ic2VydmFibGU8RG9tYWlucz4ge1xyXG4gICAgICAgIGxldCBnZXREb21haW5zVXJsID0gdGhpcy5fdXJsICsgJy9yZXNlcnZlZC9kb21haW5zL2NyZWF0ZSc7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHN1Yl9kb21haW46ZG9tYWluLFxyXG4gICAgICAgICAgICBhY2Nlc3M6dHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChnZXREb21haW5zVXJsLGRhdGEsIHRoaXMucG9zdF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZURvbWFpbihkb21haW5JZDpzdHJpbmcpOiBPYnNlcnZhYmxlPERvbWFpbnM+IHtcclxuICAgICAgICBsZXQgZ2V0RG9tYWluc1VybCA9IHRoaXMuX3VybCArICcvcmVzZXJ2ZWQvZG9tYWluL2RlbGV0ZS8nK2RvbWFpbklkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZShnZXREb21haW5zVXJsLHRoaXMucHV0X29wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
