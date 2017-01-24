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
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/observable/of');
require('rxjs/add/operator/catch');
var env_config_1 = require('./../../config/env.config');
var base_service_1 = require('./base.service');
var index_1 = require('./index');
var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(_http, subDomainService) {
        _super.call(this);
        this._http = _http;
        this.subDomainService = subDomainService;
        this.domainUrl = env_config_1.Config.APP_EXTENSION;
        this.subDomain = subDomainService.subDomain;
    }
    UserService.prototype.getUser = function (id) {
        var getUserUrl = this._url + '/users/' + id;
        return this._http.get(getUserUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.leads = function (email) {
        localStorage.removeItem('storage');
        var data = {
            email: email
        };
        return this._http.post(this._url + '/leads', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.register = function (data) {
        localStorage.removeItem('storage');
        var details = {
            'user': {
                'emails': {
                    'email': data.emails.email
                },
                'name': data.name,
                'password': data.password
            },
            'company': {
                'sub_domain': data.domain,
                'name': data.companyname
            }
        };
        return this._http.post(this._url + '/auth/signup', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.addUserFromAdmin = function (data) {
        var details = {
            'user': {
                'emails': {
                    'email': data.useremail
                },
                'name': data.username,
                'password': data.userPassword,
                'is_admin_created': true,
            },
            'company': {
                'sub_domain': data.companySubDomain,
                'name': data.companyName,
                'is_admin_created': true
            },
            'is_admin': {
                'chargebee_customer_id': data.chargebeeId,
                'chargebee_subscription_id': data.chargebeeSubsId,
                'plan_id': data.plan
            }
        };
        return this._http.post(this._url + '/auth/signup', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.login = function (username, password, companyName) {
        var data = {
            'username': username,
            'password': password,
            'sub_domain': companyName
        };
        return this._http.post(this._url + '/auth/login', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.updateBasicDetails = function (data, isAdmin) {
        if (isAdmin === void 0) { isAdmin = false; }
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        var user_id = storage.user._id;
        if (isAdmin)
            user_id = data.id;
        return this._http.put(this._url + '/users/' + user_id, data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getBasicDetails = function (user_id) {
        if (user_id === void 0) { user_id = null; }
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        if (user_id === null)
            user_id = storage.user._id;
        var getBasicUrl = this._url + '/users/' + user_id;
        return this._http.get(getBasicUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getAllUsers = function (data) {
        var getUsersUrl = this._url + '/users';
        return this._http.post(getUsersUrl, data, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.updatePassword = function (old_password, new_password) {
        var data = {
            'old_password': old_password,
            'new_password': new_password
        };
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        return this._http.put(this._url + '/users/password', data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.updateEmail = function (old_email, new_email, password) {
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        var data = {
            'emails': {
                'old_email': old_email,
                'new_email': new_email
            },
            'password': password
        };
        console.log('email json', data);
        return this._http.put(this._url + '/users/email', data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        this.eraseCookie('storage');
        return Observable_1.Observable.of(true);
    };
    UserService.prototype.saveDetail = function (data) {
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        var details = {
            'company': {
                'name': data.companyname,
                'sub_domain': data.domain
            },
            'emails': {
                'old_email': storage.email,
                'new_email': data.emails.email
            },
            'username': data.first_name,
            'password': data.password
        };
        return this._http.put(this._url + '/users/' + storage.user._id, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.setNewPassword = function (new_password) {
        var data = {
            'password': new_password
        };
        var storage = localStorage.getItem('verification');
        storage = JSON.parse(storage);
        return this._http.patch(this._url + '/users/password/' + storage.verification_id, data, this.patch_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.verfiyToken = function (data) {
        var verifyUrl = this._url + '/auth/verify/' + data;
        return this._http.get(verifyUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.verfiyEmail = function (data) {
        var verifyUrl = this._url + '/auth/verifyEmail/' + data;
        return this._http.get(verifyUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.userApproval = function (companyId) {
        if (companyId === void 0) { companyId = null; }
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        var Cid = storage.company_id;
        if (companyId)
            Cid = companyId;
        return this._http.put(this._url + '/users/' + storage.user._id + '/companies/' + Cid + '/join', this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.forgetPassword = function (capctha, email) {
        var details = {
            'response': capctha,
            'email': email.forgetemail
        };
        return this._http.post(this._url + '/users/forgetPassword', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.generateToken = function (data) {
        var getBasicUrl = this._url + '/users/token/' + data;
        return this._http.get(getBasicUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getEmailLogs = function (data) {
        var getUsersUrl = this._url + '/emailLogs';
        return this._http.post(getUsersUrl, data, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.resendEmail = function (data) {
        var verifyUrl = this._url + '/resendVerificationEmail/' + data;
        return this._http.get(verifyUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.updatebillingStatus = function () {
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        var user_id = storage.user._id;
        return this._http.get(this._url + '/user_companies/status/' + user_id, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, index_1.SubDomainService])
    ], UserService);
    return UserService;
}(base_service_1.BaseService));
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFDckMsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8sd0JBQXdCLENBQUMsQ0FBQTtBQUNoQyxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsMkJBQXVCLDJCQUEyQixDQUFDLENBQUE7QUFFbkQsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFFN0Msc0JBQWdDLFNBQVMsQ0FBQyxDQUFBO0FBRzFDO0lBQWlDLCtCQUFXO0lBS3hDLHFCQUNZLEtBQVcsRUFDWCxnQkFBa0M7UUFFMUMsaUJBQU8sQ0FBQztRQUhBLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSDlDLGNBQVMsR0FBWSxtQkFBTSxDQUFDLGFBQWEsQ0FBQztRQU10QyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVM7UUFDYixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBQyxFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQzthQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sS0FBYTtRQUNmLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsSUFBSSxJQUFJLEdBQUc7WUFDUCxLQUFL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QUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyx5QkFBeUIsR0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BFLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQW5RTDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBcVFiLGtCQUFDO0FBQUQsQ0FwUUEsQUFvUUMsQ0FwUWdDLDBCQUFXLEdBb1EzQztBQXBRWSxtQkFBVyxjQW9RdkIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLy4uLy4uL2NvbmZpZy9lbnYuY29uZmlnJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vLi4vbW9kZWxzL3VzZXInO1xyXG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3ViRG9tYWluIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzL3N1YmRvbWFpbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTdWJEb21haW5TZXJ2aWNlfSBmcm9tICcuL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2Uge1xyXG4gICAgdG9rZW46IHN0cmluZztcclxuICAgIHJlc3BvbnNlOmFueTtcclxuICAgIHN1YkRvbWFpbjogU3ViRG9tYWluO1xyXG4gICAgZG9tYWluVXJsIDogc3RyaW5nID0gQ29uZmlnLkFQUF9FWFRFTlNJT047XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9odHRwOiBIdHRwLFxyXG4gICAgICAgIHByaXZhdGUgc3ViRG9tYWluU2VydmljZTogU3ViRG9tYWluU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN1YkRvbWFpbiA9IHN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXIoaWQ6bnVtYmVyKTogT2JzZXJ2YWJsZTxVc2VyPiB7XHJcbiAgICAgICAgbGV0IGdldFVzZXJVcmwgPSB0aGlzLl91cmwgKyAnL3VzZXJzLycraWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGdldFVzZXJVcmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGxlYWRzKGVtYWlsIDpTdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3RvcmFnZScpO1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICBlbWFpbDogZW1haWxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCArICcvbGVhZHMnLCBkYXRhLCB0aGlzLnBvc3Rfb3B0aW9ucygpKVxyXG4gICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoZGF0YSA6YW55ICk6IE9ic2VydmFibGU8VXNlcj4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzdG9yYWdlJyk7XHJcbiAgICAgICAgbGV0IGRldGFpbHMgPSAgICB7XHJcbiAgICAgICAgICAgICd1c2VyJzoge1xyXG4gICAgICAgICAgICAgICAgJ2VtYWlscyc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnZW1haWwnOiBkYXRhLmVtYWlscy5lbWFpbFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICduYW1lJyAgICAgIDogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJyAgOiBkYXRhLnBhc3N3b3JkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdjb21wYW55Jzoge1xyXG4gICAgICAgICAgICAgICAgJ3N1Yl9kb21haW4nOiBkYXRhLmRvbWFpbixcclxuICAgICAgICAgICAgICAgICduYW1lJzogZGF0YS5jb21wYW55bmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwgKyAnL2F1dGgvc2lnbnVwJywgZGV0YWlscywgdGhpcy5wb3N0X29wdGlvbnMoKSlcclxuICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFVzZXJGcm9tQWRtaW4oZGF0YSA6YW55ICk6IE9ic2VydmFibGU8VXNlcj4ge1xyXG4gICAgICAgIGxldCBkZXRhaWxzID0gICAge1xyXG4gICAgICAgICAgICAndXNlcic6IHtcclxuICAgICAgICAgICAgICAgICAgJ2VtYWlscyc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICdlbWFpbCc6IGRhdGEudXNlcmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICduYW1lJzogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJyAgOiBkYXRhLnVzZXJQYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgJ2lzX2FkbWluX2NyZWF0ZWQnIDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICdjb21wYW55Jzoge1xyXG4gICAgICAgICAgICAgICAgICAnc3ViX2RvbWFpbic6IGRhdGEuY29tcGFueVN1YkRvbWFpbixcclxuICAgICAgICAgICAgICAgICAgJ25hbWUnOiBkYXRhLmNvbXBhbnlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAnaXNfYWRtaW5fY3JlYXRlZCcgOiB0cnVlXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAnaXNfYWRtaW4nOntcclxuICAgICAgICAgICAgICAnY2hhcmdlYmVlX2N1c3RvbWVyX2lkJzpkYXRhLmNoYXJnZWJlZUlkLFxyXG4gICAgICAgICAgICAgICdjaGFyZ2ViZWVfc3Vic2NyaXB0aW9uX2lkJzogZGF0YS5jaGFyZ2ViZWVTdWJzSWQsXHJcbiAgICAgICAgICAgICAgJ3BsYW5faWQnOiBkYXRhLnBsYW5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCArICcvYXV0aC9zaWdudXAnLCBkZXRhaWxzLCB0aGlzLnBvc3Rfb3B0aW9ucygpKVxyXG4gICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9naW4odXNlcm5hbWU6IFN0cmluZywgcGFzc3dvcmQ6IFN0cmluZywgY29tcGFueU5hbWU6IFN0cmluZykgOiBhbnkge1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJyAgIDogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAncGFzc3dvcmQnICAgOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICdzdWJfZG9tYWluJyA6IGNvbXBhbnlOYW1lXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsICsgJy9hdXRoL2xvZ2luJywgZGF0YSwgdGhpcy5wb3N0X29wdGlvbnMoKSlcclxuICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUJhc2ljRGV0YWlscyAoZGF0YTogYW55LCBpc0FkbWluIDogYm9vbGVhbiA9IGZhbHNlKTogT2JzZXJ2YWJsZTxVc2VyPiB7XHJcblxyXG4gICAgICAgIGxldCBzdG9yYWdlOmFueSA9IHRoaXMucmVhZENvb2tpZSgnc3RvcmFnZScpO1xyXG4gICAgICAgIHN0b3JhZ2UgPSBKU09OLnBhcnNlKHN0b3JhZ2UpO1xyXG4gICAgICAgIGxldCB1c2VyX2lkID0gc3RvcmFnZS51c2VyLl9pZDtcclxuICAgICAgICBpZihpc0FkbWluKVxyXG4gICAgICAgICAgICB1c2VyX2lkID0gZGF0YS5pZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuX3VybCArICcvdXNlcnMvJyt1c2VyX2lkLCBkYXRhLCB0aGlzLnB1dF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEJhc2ljRGV0YWlscyAodXNlcl9pZDpzdHJpbmcgPSBudWxsKTogT2JzZXJ2YWJsZTxVc2VyPiB7XHJcbiAgICAgICAgbGV0IHN0b3JhZ2U6YW55ID0gdGhpcy5yZWFkQ29va2llKCdzdG9yYWdlJyk7XHJcbiAgICAgICAgc3RvcmFnZSA9IEpTT04ucGFyc2Uoc3RvcmFnZSk7XHJcbiAgICAgICAgaWYodXNlcl9pZCA9PT0gbnVsbClcclxuICAgICAgICAgICAgdXNlcl9pZCA9IHN0b3JhZ2UudXNlci5faWQ7XHJcblxyXG4gICAgICAgIGxldCBnZXRCYXNpY1VybCA9IHRoaXMuX3VybCArICcvdXNlcnMvJyArIHVzZXJfaWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGdldEJhc2ljVXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxVc2VycyhkYXRhIDogYW55KSB7XHJcbiAgICAgICAgbGV0IGdldFVzZXJzVXJsID0gdGhpcy5fdXJsICsgJy91c2Vycyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChnZXRVc2Vyc1VybCxkYXRhLHRoaXMuZ2V0X29wdGlvbnMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUGFzc3dvcmQob2xkX3Bhc3N3b3JkIDogYW55LCBuZXdfcGFzc3dvcmQgOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXI+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICdvbGRfcGFzc3dvcmQnOiBvbGRfcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAnbmV3X3Bhc3N3b3JkJzogbmV3X3Bhc3N3b3JkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgbGV0IHN0b3JhZ2U6YW55ID0gdGhpcy5yZWFkQ29va2llKCdzdG9yYWdlJyk7XHJcbiAgICAgICAgc3RvcmFnZSA9IEpTT04ucGFyc2Uoc3RvcmFnZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuX3VybCArICcvdXNlcnMvcGFzc3dvcmQnLCBkYXRhLCB0aGlzLnB1dF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRW1haWwob2xkX2VtYWlsIDogYW55LCBuZXdfZW1haWwgOiBhbnksIHBhc3N3b3JkOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXI+IHtcclxuICAgICAgICBsZXQgc3RvcmFnZTphbnkgPSB0aGlzLnJlYWRDb29raWUoJ3N0b3JhZ2UnKTtcclxuICAgICAgICBzdG9yYWdlID0gSlNPTi5wYXJzZShzdG9yYWdlKTtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2VtYWlscyc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvbGRfZW1haWwnOiBvbGRfZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbmV3X2VtYWlsJzogbmV3X2VtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2VtYWlsIGpzb24nLGRhdGEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLl91cmwgKyAnL3VzZXJzL2VtYWlsJywgZGF0YSwgdGhpcy5wdXRfb3B0aW9ucygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5lcmFzZUNvb2tpZSgnc3RvcmFnZScpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVEZXRhaWwoZGF0YSA6IGFueSApOiBPYnNlcnZhYmxlPFVzZXI+ICB7XHJcbiAgICAgICAgbGV0IHN0b3JhZ2U6YW55ID0gdGhpcy5yZWFkQ29va2llKCdzdG9yYWdlJyk7XHJcbiAgICAgICAgc3RvcmFnZSA9IEpTT04ucGFyc2Uoc3RvcmFnZSk7XHJcbiAgICAgICAgbGV0IGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbXBhbnknOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnICAgICAgIDogZGF0YS5jb21wYW55bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N1Yl9kb21haW4nIDogZGF0YS5kb21haW5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdlbWFpbHMnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdvbGRfZW1haWwnICA6IHN0b3JhZ2UuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICduZXdfZW1haWwnICA6IGRhdGEuZW1haWxzLmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAndXNlcm5hbWUnICAgICAgIDogZGF0YS5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICdwYXNzd29yZCcgICAgICAgOiBkYXRhLnBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLl91cmwgKyAnL3VzZXJzLycrc3RvcmFnZS51c2VyLl9pZCwgZGV0YWlscywgdGhpcy5wdXRfb3B0aW9ucygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAgc2V0TmV3UGFzc3dvcmQobmV3X3Bhc3N3b3JkIDogYW55KSA6T2JzZXJ2YWJsZTxVc2VyPiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJzogbmV3X3Bhc3N3b3JkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndmVyaWZpY2F0aW9uJyk7XHJcbiAgICAgICAgc3RvcmFnZSA9IEpTT04ucGFyc2Uoc3RvcmFnZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucGF0Y2godGhpcy5fdXJsICsgJy91c2Vycy9wYXNzd29yZC8nK3N0b3JhZ2UudmVyaWZpY2F0aW9uX2lkLCBkYXRhLCB0aGlzLnBhdGNoX29wdGlvbnMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKSA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZlcmZpeVRva2VuKGRhdGEgOiBhbnkpIDpPYnNlcnZhYmxlIDxVc2VyPiB7XHJcbiAgICAgICAgbGV0IHZlcmlmeVVybCA9IHRoaXMuX3VybCArICcvYXV0aC92ZXJpZnkvJysgZGF0YTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodmVyaWZ5VXJsLHRoaXMub3B0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZlcmZpeUVtYWlsKGRhdGEgOiBhbnkpIDpPYnNlcnZhYmxlIDxVc2VyPiB7XHJcbiAgICAgIGxldCB2ZXJpZnlVcmwgPSB0aGlzLl91cmwgKyAnL2F1dGgvdmVyaWZ5RW1haWwvJysgZGF0YTtcclxuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHZlcmlmeVVybCx0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VyQXBwcm92YWwoY29tcGFueUlkOmFueSA9bnVsbCkgIHtcclxuICAgICAgIGxldCBzdG9yYWdlOmFueSA9IHRoaXMucmVhZENvb2tpZSgnc3RvcmFnZScpO1xyXG4gICAgICAgc3RvcmFnZSA9IEpTT04ucGFyc2Uoc3RvcmFnZSk7XHJcbiAgICAgICBsZXQgQ2lkID0gc3RvcmFnZS5jb21wYW55X2lkO1xyXG4gICAgICAgaWYoY29tcGFueUlkKVxyXG4gICAgICAgICAgIENpZCA9IGNvbXBhbnlJZDtcclxuICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLl91cmwgKyAnL3VzZXJzLycrc3RvcmFnZS51c2VyLl9pZCsnL2NvbXBhbmllcy8nK0NpZCsnL2pvaW4nLCB0aGlzLnB1dF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZvcmdldFBhc3N3b3JkKGNhcGN0aGEgOiBhbnksZW1haWw6YW55KTpPYnNlcnZhYmxlPFVzZXI+IHtcclxuICAgICAgICBsZXQgZGV0YWlscyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgJ3Jlc3BvbnNlJzogY2FwY3RoYSxcclxuICAgICAgICAgICAgICAgICAgICAgJ2VtYWlsJyAgOiBlbWFpbC5mb3JnZXRlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCArICcvdXNlcnMvZm9yZ2V0UGFzc3dvcmQnLCBkZXRhaWxzLCB0aGlzLnBvc3Rfb3B0aW9ucygpKVxyXG4gICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlVG9rZW4oZGF0YTphbnkpIDogT2JzZXJ2YWJsZTxVc2VyPiAge1xyXG4gICAgICAgIGxldCBnZXRCYXNpY1VybCA9IHRoaXMuX3VybCArICcvdXNlcnMvdG9rZW4vJyArIGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGdldEJhc2ljVXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAgZ2V0RW1haWxMb2dzKGRhdGE6YW55KSB7XHJcbiAgICAgICAgbGV0IGdldFVzZXJzVXJsID0gdGhpcy5fdXJsICsgJy9lbWFpbExvZ3MnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoZ2V0VXNlcnNVcmwsZGF0YSx0aGlzLmdldF9vcHRpb25zKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2VuZEVtYWlsKGRhdGEgOiBhbnkpIDpPYnNlcnZhYmxlIDxVc2VyPiB7XHJcbiAgICAgICAgIGxldCB2ZXJpZnlVcmwgPSB0aGlzLl91cmwgKyAnL3Jlc2VuZFZlcmlmaWNhdGlvbkVtYWlsLycrIGRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh2ZXJpZnlVcmwsdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZWJpbGxpbmdTdGF0dXMoKXtcclxuICAgICAgICBsZXQgc3RvcmFnZTphbnkgPSB0aGlzLnJlYWRDb29raWUoJ3N0b3JhZ2UnKTtcclxuICAgICAgICBzdG9yYWdlID0gSlNPTi5wYXJzZShzdG9yYWdlKTtcclxuICAgICAgICBsZXQgdXNlcl9pZCA9IHN0b3JhZ2UudXNlci5faWQ7XHJcbiAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsICsgJy91c2VyX2NvbXBhbmllcy9zdGF0dXMvJyArIHVzZXJfaWQsIHRoaXMuZ2V0X29wdGlvbnMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
