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
require('rxjs/add/operator/catch');
var base_service_1 = require('./base.service');
var cookie_service_1 = require('./cookie.service');
var env_config_1 = require('./../../config/env.config');
var MembershipService = (function (_super) {
    __extends(MembershipService, _super);
    function MembershipService(_http, _cookieService) {
        _super.call(this);
        this._http = _http;
        this._cookieService = _cookieService;
        this.domainUrl = env_config_1.Config.APP_EXTENSION;
    }
    MembershipService.prototype.getPaymentDetails = function (id) {
        if (id === void 0) { id = null; }
        var company;
        if (id === null) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            company = (storage.company._id);
        }
        else
            company = id;
        var getPlanUrl = this._url + '/customer/' + company + '/card';
        return this._http.get(getPlanUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getBillingAddress = function (id) {
        if (id === void 0) { id = null; }
        var company;
        if (id === null) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            company = (storage.company._id);
        }
        else
            company = id;
        var getPlanUrl = this._url + '/customer/' + company;
        return this._http.get(getPlanUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getPlans = function () {
        var getPlanUrl = this._url + '/plans';
        return this._http.get(getPlanUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.setupCustomerPayment = function (data) {
        var company = localStorage.getItem('company');
        var details = {
            'card': {
                'number': data.cardNumber,
                'exp_month': data.cardMonth,
                'exp_year': data.cardYear,
                'cvv': data.cvv,
            }
        };
        return this._http.post(this._url + '/customer/' + company + '/cards', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.resetPayment = function (data) {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var company = (storage.company._id);
        var details = {
            'card': {
                'number': data.cardNumber,
                'exp_month': data.cardMonth,
                'exp_year': data.cardYear,
                'cvv': data.cvv,
            }
        };
        return this._http.put(this._url + '/customer/' + company + '/cards', details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.cancelMembership = function () {
        var details = {};
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var company_id = (storage.company._id);
        return this._http.put(this._url + '/subscriptions/' + company_id, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.setupBilling = function (data) {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var company = (storage.company._id);
        var details = {
            'billing': {
                'name': data.inputName,
                'line1': data.inputAddress,
                'city': data.inputCity,
                'state': data.inputState,
                'zip': data.inputZipCode,
                'country': data.inputCountry
            }
        };
        return this._http.put(this._url + '/customer/' + company + '/billing', details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.planSubscription = function (plan_id) {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var company_id = (storage.company._id);
        var details = {
            'company_id': company_id,
            'plan_id': plan_id
        };
        return this._http.post(this._url + '/subscriptions', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getplanSubscription = function (id) {
        if (id === void 0) { id = null; }
        var company;
        if (id === null) {
            company = window.localStorage.getItem('company');
        }
        else
            company = id;
        var getPlanUrl = this._url + '/subscriptions/' + company;
        return this._http.get(getPlanUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.updateSubscription = function (data) {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var company = (storage.company._id);
        var url = this._url + '/subscription/update/' + company;
        return this._http.put(url, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getInvoices = function (id) {
        if (id === void 0) { id = null; }
        var company;
        if (id === null) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            company = (storage.company._id);
        }
        else
            company = id;
        var getPlanUrl = this._url + '/invoices/' + company;
        return this._http.get(getPlanUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getInvoicesPdf = function (data, id) {
        if (id === void 0) { id = null; }
        localStorage.getItem('company');
        var company;
        if (id === null) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            company = (storage.company._id);
        }
        else
            company = id;
        var getPlanUrl = this._url + '/invoices/' + company + '/pdf/' + data;
        return this._http.get(getPlanUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getUpdateEstimate = function (data) {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var company = (storage.company._id);
        var getUrl = this._url + '/estimate/update/' + company;
        return this._http.post(getUrl, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.getPlanById = function (plan_id) {
        var getUrl = this._url + '/plans/' + plan_id;
        return this._http.get(getUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.activateNow = function () {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var company = (storage.company._id);
        var url = this._url + '/subscriptions/reactivate/' + company;
        var data = '';
        return this._http.put(url, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService.prototype.updateCustomer = function (data) {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var company = (storage.company._id);
        var details = {
            'first_name': data,
        };
        return this._http.put(this._url + '/customer/' + company + '/updateCustomer', details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MembershipService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, cookie_service_1.CookieService])
    ], MembershipService);
    return MembershipService;
}(base_service_1.BaseService));
exports.MembershipService = MembershipService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvbWVtYmVyc2hpcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFFckMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3QywrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUNqRCwyQkFBdUIsMkJBQTJCLENBQUMsQ0FBQTtBQU1uRDtJQUF1QyxxQ0FBVztJQUU5QywyQkFBb0IsS0FBVyxFQUFVLGNBQTZCO1FBQ2xFLGlCQUFPLENBQUM7UUFEUSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFEdEUsY0FBUyxHQUFXLG1CQUFNLENBQUMsYUFBYSxDQUFDO0lBR3pDLENBQUM7SUFFRCw2Q0FBaUIsR0FBakIsVUFBa0IsRUFBaUI7UUFBakIsa0JBQWlCLEdBQWpCLFNBQWlCO1FBQy9CLElBQUksT0FBZSxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxPQUFPLEdBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE9BQU8sR0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUNELElBQUk7WUFDQSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FB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QyxDQUFDO1FBQzVDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsNEJBQTRCLEdBQUcsT0FBTyxDQUFDO1FBQzdELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDekMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLElBQVM7UUFDcEIsSUFBSSxPQUFPLEdBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksT0FBTyxHQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLE9BQU8sR0FBRztZQUNWLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLEdBQUcsT0FBTyxHQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDckcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBM01MO1FBQUMsaUJBQVUsRUFBRTs7eUJBQUE7SUE2TWIsd0JBQUM7QUFBRCxDQTVNQSxBQTRNQyxDQTVNc0MsMEJBQVcsR0E0TWpEO0FBNU1ZLHlCQUFpQixvQkE0TTdCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zZXJ2aWNlcy9tZW1iZXJzaGlwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi9jb29raWUuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5pbXBvcnQgeyBVc2VyQmlsbGluZyB9IGZyb20gJy4vLi4vbW9kZWxzL3VzZXJCaWxsaW5nJztcclxuaW1wb3J0IHsgRXN0aW1hdGUgfSBmcm9tICcuLy4uL21vZGVscy9lc3RpbWF0ZSc7XHJcbmltcG9ydCB7IFBsYW5zIH0gZnJvbSAnLi8uLi9tb2RlbHMvcGxhbnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWVtYmVyc2hpcFNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZSB7XHJcbiAgICBkb21haW5Vcmw6IHN0cmluZyA9IENvbmZpZy5BUFBfRVhURU5TSU9OO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfY29va2llU2VydmljZTogQ29va2llU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGF5bWVudERldGFpbHMoaWQ6IHN0cmluZyA9IG51bGwpIHtcclxuICAgICAgICBsZXQgY29tcGFueTogc3RyaW5nO1xyXG4gICAgICAgIGlmIChpZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgc3RvcmFnZTogYW55ID0gSlNPTi5wYXJzZSh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcbiAgICAgICAgICAgIGNvbXBhbnkgPSA8c3RyaW5nPihzdG9yYWdlLmNvbXBhbnkuX2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb21wYW55ID0gaWQ7XHJcbiAgICAgICAgbGV0IGdldFBsYW5VcmwgPSB0aGlzLl91cmwgKyAnL2N1c3RvbWVyLycgKyBjb21wYW55ICsgJy9jYXJkJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoZ2V0UGxhblVybCwgdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCaWxsaW5nQWRkcmVzcyhpZDogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgICAgIGxldCBjb21wYW55OiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKGlkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBzdG9yYWdlOiBhbnkgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuICAgICAgICAgICAgY29tcGFueSA9IDxzdHJpbmc+KHN0b3JhZ2UuY29tcGFueS5faWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNvbXBhbnkgPSBpZDtcclxuICAgICAgICBsZXQgZ2V0UGxhblVybCA9IHRoaXMuX3VybCArICcvY3VzdG9tZXIvJyArIGNvbXBhbnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGdldFBsYW5VcmwsIHRoaXMub3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcbiAgICBnZXRQbGFucygpIHtcclxuICAgICAgICBsZXQgZ2V0UGxhblVybCA9IHRoaXMuX3VybCArICcvcGxhbnMnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChnZXRQbGFuVXJsKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEN1c3RvbWVyUGF5bWVudChkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXJCaWxsaW5nPiB7XHJcbiAgICAgICAgbGV0IGNvbXBhbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tcGFueScpO1xyXG4gICAgICAgIGxldCBkZXRhaWxzID0ge1xyXG4gICAgICAgICAgICAnY2FyZCc6IHtcclxuICAgICAgICAgICAgICAgICdudW1iZXInOiBkYXRhLmNhcmROdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAnZXhwX21vbnRoJzogZGF0YS5jYXJkTW9udGgsXHJcbiAgICAgICAgICAgICAgICAnZXhwX3llYXInOiBkYXRhLmNhcmRZZWFyLFxyXG4gICAgICAgICAgICAgICAgJ2N2dic6IGRhdGEuY3Z2LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCArICcvY3VzdG9tZXIvJyArIGNvbXBhbnkgKyAnL2NhcmRzJywgZGV0YWlscywgdGhpcy5wb3N0X29wdGlvbnMoKSlcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQYXltZW50KGRhdGE6IGFueSk6IE9ic2VydmFibGU8VXNlckJpbGxpbmc+IHtcclxuICAgICAgICBsZXQgc3RvcmFnZTogYW55ID0gSlNPTi5wYXJzZSh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcbiAgICAgICAgbGV0IGNvbXBhbnkgPSA8c3RyaW5nPihzdG9yYWdlLmNvbXBhbnkuX2lkKTtcclxuICAgICAgICBsZXQgZGV0YWlscyA9IHtcclxuICAgICAgICAgICAgJ2NhcmQnOiB7XHJcbiAgICAgICAgICAgICAgICAnbnVtYmVyJzogZGF0YS5jYXJkTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgJ2V4cF9tb250aCc6IGRhdGEuY2FyZE1vbnRoLFxyXG4gICAgICAgICAgICAgICAgJ2V4cF95ZWFyJzogZGF0YS5jYXJkWWVhcixcclxuICAgICAgICAgICAgICAgICdjdnYnOiBkYXRhLmN2dixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuX3VybCArICcvY3VzdG9tZXIvJyArIGNvbXBhbnkgKyAnL2NhcmRzJywgZGV0YWlscywgdGhpcy5wdXRfb3B0aW9ucygpKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxNZW1iZXJzaGlwKCk6IE9ic2VydmFibGU8VXNlckJpbGxpbmc+IHtcclxuICAgICAgICBsZXQgZGV0YWlscyA9IHt9O1xyXG4gICAgICAgIGxldCBzdG9yYWdlOmFueSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG4gICAgICAgIGxldCBjb21wYW55X2lkID0gPHN0cmluZz4oc3RvcmFnZS5jb21wYW55Ll9pZCk7XHJcbiAgICAgICAgLyogcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuX3VybCArICcvc3Vic2NyaXB0aW9ucy8nK2NvbXBhbnlfaWQsZGV0YWlscyx0aGlzLnB1dF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpOyovXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuX3VybCArICcvc3Vic2NyaXB0aW9ucy8nICsgY29tcGFueV9pZCwgZGV0YWlscywgdGhpcy5wdXRfb3B0aW9ucygpKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEJpbGxpbmcoZGF0YTogYW55KTogT2JzZXJ2YWJsZTxVc2VyQmlsbGluZz4ge1xyXG4gICAgICAgIGxldCBzdG9yYWdlOmFueSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG4gICAgICAgIGxldCBjb21wYW55ID0gPHN0cmluZz4oc3RvcmFnZS5jb21wYW55Ll9pZCk7XHJcbiAgICAgICAgbGV0IGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICdiaWxsaW5nJzoge1xyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiBkYXRhLmlucHV0TmFtZSxcclxuICAgICAgICAgICAgICAgICdsaW5lMSc6IGRhdGEuaW5wdXRBZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgJ2NpdHknOiBkYXRhLmlucHV0Q2l0eSxcclxuICAgICAgICAgICAgICAgICdzdGF0ZSc6IGRhdGEuaW5wdXRTdGF0ZSxcclxuICAgICAgICAgICAgICAgICd6aXAnOiBkYXRhLmlucHV0WmlwQ29kZSxcclxuICAgICAgICAgICAgICAgICdjb3VudHJ5JzogZGF0YS5pbnB1dENvdW50cnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuX3VybCArICcvY3VzdG9tZXIvJyArIGNvbXBhbnkgKyAnL2JpbGxpbmcnLCBkZXRhaWxzLCB0aGlzLnB1dF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYW5TdWJzY3JpcHRpb24ocGxhbl9pZDogYW55KTogT2JzZXJ2YWJsZTxVc2VyQmlsbGluZz4ge1xyXG4gICAgICAgIGxldCBzdG9yYWdlOmFueSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG4gICAgICAgIGxldCBjb21wYW55X2lkID0gPHN0cmluZz4oc3RvcmFnZS5jb21wYW55Ll9pZCk7XHJcbiAgICAgICAgbGV0IGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICdjb21wYW55X2lkJzogY29tcGFueV9pZCxcclxuICAgICAgICAgICAgJ3BsYW5faWQnOiBwbGFuX2lkXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCArICcvc3Vic2NyaXB0aW9ucycsIGRldGFpbHMsIHRoaXMucG9zdF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldHBsYW5TdWJzY3JpcHRpb24oaWQ6IHN0cmluZyA9IG51bGwpOiBPYnNlcnZhYmxlPFVzZXJCaWxsaW5nPiB7XHJcbiAgICAgICAgbGV0IGNvbXBhbnk6IHN0cmluZztcclxuICAgICAgICBpZiAoaWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29tcGFueSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tcGFueScpOy8vSlNPTi5wYXJzZSh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY29tcGFueSA9IGlkO1xyXG4gICAgICAgIGxldCBnZXRQbGFuVXJsID0gdGhpcy5fdXJsICsgJy9zdWJzY3JpcHRpb25zLycgKyBjb21wYW55O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChnZXRQbGFuVXJsLCB0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGVTdWJzY3JpcHRpb24oZGF0YTogYW55KTogT2JzZXJ2YWJsZTxVc2VyQmlsbGluZz4ge1xyXG4gICAgICAgIGxldCBzdG9yYWdlOmFueSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG4gICAgICAgIGxldCBjb21wYW55ID0gPHN0cmluZz4oc3RvcmFnZS5jb21wYW55Ll9pZCk7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuX3VybCArICcvc3Vic2NyaXB0aW9uL3VwZGF0ZS8nICsgY29tcGFueTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQodXJsLCBkYXRhLCB0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEludm9pY2VzKGlkOiBzdHJpbmcgPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGNvbXBhbnk6IHN0cmluZztcclxuICAgICAgICBpZiAoaWQgPT09IG51bGwpe1xyXG4gICAgICAgICAgICBsZXQgc3RvcmFnZTphbnkgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuICAgICAgICAgICAgY29tcGFueSA9IDxzdHJpbmc+KHN0b3JhZ2UuY29tcGFueS5faWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGNvbXBhbnkgPSBpZDtcclxuICAgICAgICBsZXQgZ2V0UGxhblVybCA9IHRoaXMuX3VybCArICcvaW52b2ljZXMvJyArIGNvbXBhbnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGdldFBsYW5VcmwsIHRoaXMub3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEludm9pY2VzUGRmKGRhdGE6IGFueSwgaWQ6IHN0cmluZyA9IG51bGwpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tcGFueScpO1xyXG4gICAgICAgIGxldCBjb21wYW55OiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKGlkID09PSBudWxsKXtcclxuICAgICAgICAgICAgbGV0IHN0b3JhZ2U6YW55ID0gSlNPTi5wYXJzZSh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcbiAgICAgICAgICAgIGNvbXBhbnkgPSA8c3RyaW5nPihzdG9yYWdlLmNvbXBhbnkuX2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb21wYW55ID0gaWQ7XHJcbiAgICAgICAgbGV0IGdldFBsYW5VcmwgPSB0aGlzLl91cmwgKyAnL2ludm9pY2VzLycgKyBjb21wYW55ICsgJy9wZGYvJyArIGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGdldFBsYW5VcmwsIHRoaXMub3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFVwZGF0ZUVzdGltYXRlKGRhdGE6IGFueSk6IE9ic2VydmFibGU8RXN0aW1hdGU+IHtcclxuICAgICAgICBsZXQgc3RvcmFnZTphbnkgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuICAgICAgICBsZXQgY29tcGFueSA9IDxzdHJpbmc+KHN0b3JhZ2UuY29tcGFueS5faWQpO1xyXG4gICAgICAgIGxldCBnZXRVcmwgPSB0aGlzLl91cmwgKyAnL2VzdGltYXRlL3VwZGF0ZS8nICsgY29tcGFueTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGdldFVybCwgZGF0YSwgdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRQbGFuQnlJZChwbGFuX2lkOiBhbnkpOiBPYnNlcnZhYmxlPFBsYW5zPiB7XHJcbiAgICAgICAgbGV0IGdldFVybCA9IHRoaXMuX3VybCArICcvcGxhbnMvJyArIHBsYW5faWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGdldFVybCwgdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZU5vdygpIHtcclxuICAgICAgICBsZXQgc3RvcmFnZTphbnkgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuICAgICAgICBsZXQgY29tcGFueSA9IDxzdHJpbmc+KHN0b3JhZ2UuY29tcGFueS5faWQpO1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLl91cmwgKyAnL3N1YnNjcmlwdGlvbnMvcmVhY3RpdmF0ZS8nICsgY29tcGFueTtcclxuICAgICAgICBsZXQgZGF0YSA9ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh1cmwsIGRhdGEsIHRoaXMub3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ3VzdG9tZXIoZGF0YTogYW55KTogT2JzZXJ2YWJsZTxVc2VyQmlsbGluZz4ge1xyXG4gICAgICAgIGxldCBzdG9yYWdlOmFueSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG4gICAgICAgIGxldCBjb21wYW55ID0gPHN0cmluZz4oc3RvcmFnZS5jb21wYW55Ll9pZCk7XHJcbiAgICAgICAgbGV0IGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICdmaXJzdF9uYW1lJzogZGF0YSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLl91cmwgKyAnL2N1c3RvbWVyLycgKyBjb21wYW55ICsgJy91cGRhdGVDdXN0b21lcicsIGRldGFpbHMsIHRoaXMucHV0X29wdGlvbnMoKSlcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
