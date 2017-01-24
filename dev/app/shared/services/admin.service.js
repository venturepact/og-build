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
var index_1 = require('./index');
var AdminService = (function (_super) {
    __extends(AdminService, _super);
    function AdminService(_http) {
        _super.call(this);
        this._http = _http;
    }
    AdminService.prototype.getBasicGraph = function (data) {
        var getCompaniesUrl = this._url + '/admin/graph';
        return this._http.post(getCompaniesUrl, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.updateEmail = function (old_email, new_email, user_id) {
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        var data = {
            'emails': {
                'old_email': old_email,
                'new_email': new_email
            }
        };
        console.log('email json', data);
        return this._http.put(this._url + '/admin/update/email/' + user_id, data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.updatePassword = function (new_password, user_id) {
        var data = {
            'new_password': new_password
        };
        return this._http.put(this._url + '/admin/update/password/' + user_id, data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.verifyEmail = function (user_id) {
        return this._http.put(this._url + '/admin/email/verify/' + user_id, {}, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.setPasswordLink = function (user) {
        return this._http.get(this._url + '/admin/set_pwd_link/' + user, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.generatePasswordLink = function (user) {
        return this._http.get(this._url + '/admin/gen_pwd_link/' + user, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AdminService);
    return AdminService;
}(index_1.BaseService));
exports.AdminService = AdminService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvYWRtaW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXNCLGVBQWUsQ0FBQyxDQUFBO0FBQ3RDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFDaEMsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBRWpDLHNCQUEyQixTQUFTLENBQUMsQ0FBQTtBQUlyQztJQUFrQyxnQ0FBVztJQUV4QyxzQkFDUyxLQUFXO1FBRWpCLGlCQUFPLENBQUM7UUFGRixVQUFLLEdBQUwsS0FBSyxDQUFNO0lBR3JCLENBQUM7SUFHQSxvQ0FBYSxHQUFiLFVBQWMsSUFBVTtRQUN2QixJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQztRQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUlELGtDQUFXLEdBQVgsVUFBWSxTQUFlLEVBQUUsU0FBZSxFQUFFLE9BQWM7UUFDeEQsSUFBSSxPQUFPLEdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksR0FBRztZQUNLLFFBQVEsRUFBRTtnQkFDTixXQUFXLEVBQUUsU0FBUztnQkFDdEIsV0FBVyxFQUFFLFNBQVM7YUFDekI7U0FDSixDQUFDO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsc0JBQXNCLEdBQUcsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDeEUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUEscUNBQWMsR0FBZCxVQUFlLFlBQWtCLEVBQUUsT0FBZ0I7UUFDaEQsSUFBSSxJQUFJLEdBQUc7WUFDSCxjQUFjLEVBQUUsWUFBWTtTQUMvQixDQUFDO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcseUJBQXlCLEdBQUcsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDM0UsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLE9BQWdCO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQixHQUFHLE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BFLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsSUFBYTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxzQkFBc0IsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzdELEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDJDQUFvQixHQUFwQixVQUFxQixJQUFhO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQixHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDN0QsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBM0RMO1FBQUMsaUJBQVUsRUFBRTs7b0JBQUE7SUE4RGIsbUJBQUM7QUFBRCxDQTdEQSxBQTZEQyxDQTdEaUMsbUJBQVcsR0E2RDVDO0FBN0RZLG9CQUFZLGVBNkR4QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvYWRtaW4uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLy4uL21vZGVscy91c2VyJztcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2V9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFkbWluU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcclxuXHJcbiAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgX2h0dHA6IEh0dHBcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICBnZXRCYXNpY0dyYXBoKGRhdGEgOiBhbnkpIHtcclxuICAgICAgbGV0IGdldENvbXBhbmllc1VybCA9IHRoaXMuX3VybCArICcvYWRtaW4vZ3JhcGgnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoZ2V0Q29tcGFuaWVzVXJsLGRhdGEsdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICB1cGRhdGVFbWFpbChvbGRfZW1haWwgOiBhbnksIG5ld19lbWFpbCA6IGFueSwgdXNlcl9pZDpzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcclxuICAgICAgICBsZXQgc3RvcmFnZTphbnkgPSB0aGlzLnJlYWRDb29raWUoJ3N0b3JhZ2UnKTtcclxuICAgICAgICBzdG9yYWdlID0gSlNPTi5wYXJzZShzdG9yYWdlKTtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2VtYWlscyc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvbGRfZW1haWwnOiBvbGRfZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmV3X2VtYWlsJzogbmV3X2VtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9OyBcclxuICAgICAgICBjb25zb2xlLmxvZygnZW1haWwganNvbicsZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuX3VybCArICcvYWRtaW4vdXBkYXRlL2VtYWlsLycgKyB1c2VyX2lkLCBkYXRhLCB0aGlzLnB1dF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9IFxyXG5cclxuICAgICB1cGRhdGVQYXNzd29yZChuZXdfcGFzc3dvcmQgOiBhbnksIHVzZXJfaWQgOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICduZXdfcGFzc3dvcmQnOiBuZXdfcGFzc3dvcmRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQodGhpcy5fdXJsICsgJy9hZG1pbi91cGRhdGUvcGFzc3dvcmQvJyArIHVzZXJfaWQsIGRhdGEsIHRoaXMucHV0X29wdGlvbnMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICB2ZXJpZnlFbWFpbCh1c2VyX2lkIDogc3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQodGhpcy5fdXJsICsgJy9hZG1pbi9lbWFpbC92ZXJpZnkvJyArIHVzZXJfaWQsIHt9LCB0aGlzLnB1dF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXNzd29yZExpbmsodXNlciA6IG51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybCArICcvYWRtaW4vc2V0X3B3ZF9saW5rLycgKyB1c2VyLCB0aGlzLmdldF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVBhc3N3b3JkTGluayh1c2VyIDogbnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsICsgJy9hZG1pbi9nZW5fcHdkX2xpbmsvJyArIHVzZXIsIHRoaXMuZ2V0X29wdGlvbnMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=
