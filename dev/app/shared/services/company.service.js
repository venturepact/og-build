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
var CompanyService = (function (_super) {
    __extends(CompanyService, _super);
    function CompanyService(_http) {
        _super.call(this);
        this._http = _http;
    }
    CompanyService.prototype.isCompanyMember = function (company_id, user_id) {
        var checkMembershipUrl = this._url + '/users_companies/companies/' + company_id + '/users/' + user_id;
        return this._http.get(checkMembershipUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getFirstCompany = function (user_id) {
        var getFirstCompany = this._url + '/users_companies/users/' + user_id;
        return this._http.get(getFirstCompany, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getCompanies = function () {
        var getCompaniesUrl = this._url + '/users_companies/companies';
        return this._http.get(getCompaniesUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getCompanyUsers = function (company_id) {
        var getBasicUrl = this._url + '/users_companies/' + company_id + '/users';
        return this._http.get(getBasicUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getUserCompanies = function (user_id) {
        var getCompaniesUrl = this._url + '/users_companies/companies/user/' + user_id;
        return this._http.get(getCompaniesUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.isCompanyExist = function (company) {
        var companyurl = this._url + '/companies/name/' + company;
        return this._http.get(companyurl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.isSubDomainExist = function (company) {
        var companyurl = this._url + '/companies/sub_domain/' + company;
        return this._http.get(companyurl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.addUser = function (data, company_id) {
        var details = {
            'email': data.userEmail,
            'name': data.userName,
            'role': data.userRole
        };
        return this._http.post(this._url + '/users_companies/' + company_id, details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.createCompany = function (data) {
        var companyurl = this._url + '/companies';
        var details = {
            'name': data.companyname,
            'sub_domain': data.domain
        };
        return this._http.post(companyurl, details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.searchCompany = function (company) {
        var companyurl = this._url + '/companies/list/' + company;
        return this._http.get(companyurl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.joinCompany = function (companyId) {
        var companyUrl = this._url + '/users_companies';
        var details = {
            'company_id': companyId
        };
        return this._http.post(companyUrl, details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.leaveCompany = function (compId) {
        var getBasicUrl = this._url + '/users_companies/' + compId;
        return this._http.delete(getBasicUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.removeUser = function (companyId, userId) {
        var getBasicUrl = this._url + '/users_companies/companies/' + companyId + '/users/' + userId;
        return this._http.delete(getBasicUrl, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.approveUser = function (userId, companyId, userRole) {
        var getBasicUrl = this._url + '/users_companies/approve';
        var admin = false;
        if (userRole === 'ADMIN')
            admin = true;
        var details = {
            'user_id': userId,
            'company_id': companyId,
            'admin': admin
        };
        return this._http.put(getBasicUrl, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.makeAdmin = function (companyId, userId) {
        var getBasicUrl = this._url + '/users_companies/' + companyId + '/admin';
        var details = {
            'user_id': userId,
            'admin': true
        };
        return this._http.put(getBasicUrl, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.makeManager = function (companyId, userId) {
        var getBasicUrl = this._url + '/users_companies/' + companyId + '/admin';
        var details = {
            'user_id': userId,
            'admin': false
        };
        return this._http.put(getBasicUrl, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.saveCallSchedule = function (data) {
        var storage = JSON.parse(this.readCookie('storage'));
        var details = {
            'leads': {
                'total': data.leads
            },
            'traffic': {
                'frequency': data.traffic
            },
            'agency': data.companyType
        };
        return this._http.put(this._url + '/companies/' + storage.company._id, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.updateCompany = function (compId, company, isAdmin) {
        if (isAdmin === void 0) { isAdmin = false; }
        var companyUrl = this._url + '/companies/' + compId;
        var details = {};
        if (isAdmin) {
            details = {
                'name': company.name,
                'sub_domain': company.sub_domain,
                'agency': company.agency,
                'is_admin_created': company.is_admin_created,
                'billing': {
                    'chargebee_plan_id': company.chargebee_plan_id,
                    'chargebee_subscription_id': company.chargebee_subscription_id,
                    'chargebee_customer_id': company.chargebee_customer_id,
                    'stripe_customer_id': company.stripe_customer_id
                }
            };
        }
        else {
            details = {
                'name': company.companyname,
                'sub_domain': company.domain
            };
        }
        return this._http.put(companyUrl, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getCompanyProjects = function (sub_domain) {
        var URL = this._url + '/dashboard/company_projects/' + sub_domain;
        return this._http.get(URL, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getCompanyHomeProjects = function (sub_domain) {
        console.log("SUB DOMAIN", sub_domain);
        var URL = this._url + '/dashboard/company_home_projects/' + sub_domain;
        return this._http.get(URL)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getLiveCompanyProjects = function (company_id) {
        var URL = this._url + '/dashboard/live_projects/' + company_id;
        return this._http.get(URL, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getProjectsStats = function (id) {
        var URL = this._url + '/analytic/projects_stats/' + id;
        return this._http.get(URL, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getAllCompanies = function (data) {
        var getCompaniesUrl = this._url + '/companies/all';
        return this._http.post(getCompaniesUrl, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getCompanyInfo = function (id) {
        var URL = this._url + '/companies/' + id;
        return this._http.get(URL, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.getTemplates = function () {
        var getPlanUrl = this._url + '/dashboard/get_templates';
        return this._http.get(getPlanUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService.prototype.generateApiKey = function (compId) {
        var details = {
            'id': compId
        };
        return this._http.post(this._url + '/apikey/create', details, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CompanyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CompanyService);
    return CompanyService;
}(index_1.BaseService));
exports.CompanyService = CompanyService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvY29tcGFueS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBc0IsZUFBZSxDQUFDLENBQUE7QUFFdEMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8sd0JBQXdCLENBQUMsQ0FBQTtBQUNoQyxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFFakMsc0JBQTJCLFNBQVMsQ0FBQyxDQUFBO0FBTXJDO0lBQW9DLGtDQUFXO0lBRzNDLHdCQUNVLEtBQVc7UUFFakIsaUJBQU8sQ0FBQztRQUZGLFVBQUssR0FBTCxLQUFLLENBQU07SUFHckIsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsVUFBaUIsRUFBQyxPQUFXO1FBQzNDLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyw2QkFBNkIsR0FBQyxVQUFVLEdBQUMsU0FBUyxHQUFDLE9BQU8sQ0FBQztRQUNoRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCx3Q0FBZSxHQUFmLFVBQWdCLE9BQVc7UUFDekIsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyx5QkFBeUIsR0FBQyxPQUFPLENBQUM7UUFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FB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RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO2FBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxNQUFhO1FBQzFCLElBQUksT0FBTyxHQUFHO1lBQ1osSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUMvRSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFoUUw7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQWlRYixxQkFBQztBQUFELENBaFFBLEFBZ1FDLENBaFFtQyxtQkFBVyxHQWdROUM7QUFoUVksc0JBQWMsaUJBZ1ExQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvY29tcGFueS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwICB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgQ29tcGFueSB9ICBmcm9tICcuLy4uL21vZGVscy9jb21wYW55JztcclxuaW1wb3J0IHsgVXNlcnNDb21wYW55IH0gIGZyb20gJy4vLi4vbW9kZWxzL3VzZXJDb21wYW55JztcclxuXHJcbmltcG9ydCB7IFVzZXIgfSAgZnJvbSAnLi8uLi9tb2RlbHMvdXNlcic7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbXBhbnlTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2Uge1xyXG4gICAgdG9rZW46IHN0cmluZztcclxuICAgIHJlc3BvbnNlOmFueTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwcml2YXRlIF9odHRwOiBIdHRwXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ29tcGFueU1lbWJlcihjb21wYW55X2lkOlN0cmluZyx1c2VyX2lkOmFueSk6IE9ic2VydmFibGU8VXNlcnNDb21wYW55PiB7XHJcbiAgICAgIGxldCBjaGVja01lbWJlcnNoaXBVcmwgPSB0aGlzLl91cmwgKyAnL3VzZXJzX2NvbXBhbmllcy9jb21wYW5pZXMvJytjb21wYW55X2lkKycvdXNlcnMvJyt1c2VyX2lkO1xyXG4gICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoY2hlY2tNZW1iZXJzaGlwVXJsLHRoaXMub3B0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rmlyc3RDb21wYW55KHVzZXJfaWQ6YW55KSA6IE9ic2VydmFibGU8VXNlcnNDb21wYW55PiB7XHJcbiAgICAgIGxldCBnZXRGaXJzdENvbXBhbnkgPSB0aGlzLl91cmwgKyAnL3VzZXJzX2NvbXBhbmllcy91c2Vycy8nK3VzZXJfaWQ7XHJcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChnZXRGaXJzdENvbXBhbnksdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wYW5pZXMoKTogT2JzZXJ2YWJsZTxDb21wYW55PiB7XHJcbiAgICAgICAgbGV0IGdldENvbXBhbmllc1VybCA9IHRoaXMuX3VybCArICcvdXNlcnNfY29tcGFuaWVzL2NvbXBhbmllcyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGdldENvbXBhbmllc1VybCx0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbXBhbnlVc2Vycyhjb21wYW55X2lkOmFueSk6IE9ic2VydmFibGU8VXNlcj4ge1xyXG4gICAgICAgIGxldCBnZXRCYXNpY1VybCA9IHRoaXMuX3VybCArICcvdXNlcnNfY29tcGFuaWVzLycgKyBjb21wYW55X2lkICsgJy91c2Vycyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGdldEJhc2ljVXJsLCB0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVc2VyQ29tcGFuaWVzKHVzZXJfaWQ6YW55KSB7XHJcbiAgICAgIGxldCBnZXRDb21wYW5pZXNVcmwgPSB0aGlzLl91cmwgKyAnL3VzZXJzX2NvbXBhbmllcy9jb21wYW5pZXMvdXNlci8nICsgdXNlcl9pZDtcclxuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGdldENvbXBhbmllc1VybCx0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ29tcGFueUV4aXN0IChjb21wYW55IDpTdHJpbmcpIDogT2JzZXJ2YWJsZTxVc2VyPiB7XHJcbiAgICAgICAgbGV0IGNvbXBhbnl1cmw9IHRoaXMuX3VybCArICcvY29tcGFuaWVzL25hbWUvJyArIGNvbXBhbnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBhbnl1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgaXNTdWJEb21haW5FeGlzdCAoY29tcGFueSA6U3RyaW5nKSA6IE9ic2VydmFibGU8Q29tcGFueT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnZXhpc3QnLGNvbXBhbnkpO1xyXG4gICAgICAgIGxldCBjb21wYW55dXJsPSB0aGlzLl91cmwgKyAnL2NvbXBhbmllcy9zdWJfZG9tYWluLycgKyBjb21wYW55O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wYW55dXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRVc2VyKGRhdGEgOiBhbnksIGNvbXBhbnlfaWQgOmFueSApIDpPYnNlcnZhYmxlIDxVc2VyPiB7XHJcbiAgICAgIGxldCBkZXRhaWxzID0ge1xyXG4gICAgICAgICdlbWFpbCc6IGRhdGEudXNlckVtYWlsLFxyXG4gICAgICAgICduYW1lJyA6IGRhdGEudXNlck5hbWUsXHJcbiAgICAgICAgJ3JvbGUnIDogZGF0YS51c2VyUm9sZVxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCArICcvdXNlcnNfY29tcGFuaWVzLycrY29tcGFueV9pZCwgZGV0YWlscywgdGhpcy5wb3N0X29wdGlvbnMoKSlcclxuICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDb21wYW55IChkYXRhOmFueSkgOiBPYnNlcnZhYmxlPENvbXBhbnk+IHtcclxuICAgICAgICBsZXQgY29tcGFueXVybD0gdGhpcy5fdXJsICsgJy9jb21wYW5pZXMnO1xyXG4gICAgICAgIGxldCBkZXRhaWxzID0ge1xyXG4gICAgICAgICAgICAnbmFtZSc6IGRhdGEuY29tcGFueW5hbWUsXHJcbiAgICAgICAgICAgICdzdWJfZG9tYWluJzogZGF0YS5kb21haW5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoY29tcGFueXVybCwgZGV0YWlscywgdGhpcy5wb3N0X29wdGlvbnMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoQ29tcGFueSAoY29tcGFueTpTdHJpbmcpOiBPYnNlcnZhYmxlPENvbXBhbnk+IHtcclxuICAgICAgICBsZXQgY29tcGFueXVybD0gdGhpcy5fdXJsICsgJy9jb21wYW5pZXMvbGlzdC8nK2NvbXBhbnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBhbnl1cmwsdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBqb2luQ29tcGFueShjb21wYW55SWQ6U3RyaW5nKTogT2JzZXJ2YWJsZTxVc2Vyc0NvbXBhbnk+IHtcclxuICAgICAgICBsZXQgY29tcGFueVVybCA9IHRoaXMuX3VybCArICcvdXNlcnNfY29tcGFuaWVzJztcclxuICAgICAgICBsZXQgZGV0YWlscyA9ICAgIHtcclxuICAgICAgICAgICAgJ2NvbXBhbnlfaWQnOmNvbXBhbnlJZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb21wYW55VXJsLGRldGFpbHMsdGhpcy5wb3N0X29wdGlvbnMoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgbGVhdmVDb21wYW55KGNvbXBJZDphbnkpOk9ic2VydmFibGU8VXNlcnNDb21wYW55PiB7XHJcbiAgICAgIGxldCBnZXRCYXNpY1VybCA9IHRoaXMuX3VybCArICcvdXNlcnNfY29tcGFuaWVzLycrY29tcElkO1xyXG4gICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoZ2V0QmFzaWNVcmwsdGhpcy5vcHRpb25zKVxyXG4gICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcbiAgICByZW1vdmVVc2VyKGNvbXBhbnlJZDphbnksdXNlcklkOmFueSk6T2JzZXJ2YWJsZTxVc2Vyc0NvbXBhbnk+IHtcclxuICAgICAgbGV0IGdldEJhc2ljVXJsID0gdGhpcy5fdXJsICsgJy91c2Vyc19jb21wYW5pZXMvY29tcGFuaWVzLycgKyBjb21wYW55SWQgKyAnL3VzZXJzLycgKyB1c2VySWQ7XHJcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZShnZXRCYXNpY1VybCx0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuICAgIGFwcHJvdmVVc2VyKHVzZXJJZDogYW55LCBjb21wYW55SWQ6IGFueSwgdXNlclJvbGU6IGFueSk6T2JzZXJ2YWJsZTxVc2Vyc0NvbXBhbnk+e1xyXG4gICAgICBsZXQgZ2V0QmFzaWNVcmwgPSB0aGlzLl91cmwgKyAnL3VzZXJzX2NvbXBhbmllcy9hcHByb3ZlJztcclxuICAgICAgbGV0IGFkbWluID0gZmFsc2U7XHJcbiAgICAgIGlmKHVzZXJSb2xlID09PSAnQURNSU4nKVxyXG4gICAgICAgIGFkbWluID0gdHJ1ZTtcclxuICAgICAgbGV0IGRldGFpbHMgPSAgICB7XHJcbiAgICAgICAgJ3VzZXJfaWQnOiB1c2VySWQsXHJcbiAgICAgICAgJ2NvbXBhbnlfaWQnOmNvbXBhbnlJZCxcclxuICAgICAgICAnYWRtaW4nOiBhZG1pblxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQoZ2V0QmFzaWNVcmwsIGRldGFpbHMsdGhpcy5wdXRfb3B0aW9ucygpKVxyXG4gICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcbiAgICBtYWtlQWRtaW4oY29tcGFueUlkOmFueSx1c2VySWQ6YW55KTogT2JzZXJ2YWJsZTxVc2Vyc0NvbXBhbnk+IHtcclxuICAgICAgbGV0IGdldEJhc2ljVXJsID0gdGhpcy5fdXJsICsgJy91c2Vyc19jb21wYW5pZXMvJyArIGNvbXBhbnlJZCArICcvYWRtaW4nO1xyXG4gICAgICBsZXQgZGV0YWlscyA9IHtcclxuICAgICAgICAndXNlcl9pZCc6IHVzZXJJZCxcclxuICAgICAgICAnYWRtaW4nOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dChnZXRCYXNpY1VybCwgZGV0YWlscyx0aGlzLnB1dF9vcHRpb25zKCkpXHJcbiAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuICAgIG1ha2VNYW5hZ2VyKGNvbXBhbnlJZDphbnksdXNlcklkOmFueSk6IE9ic2VydmFibGU8VXNlcnNDb21wYW55PiB7XHJcbiAgICAgIGxldCBnZXRCYXNpY1VybCA9IHRoaXMuX3VybCArICcvdXNlcnNfY29tcGFuaWVzLycgKyBjb21wYW55SWQgKyAnL2FkbWluJztcclxuICAgICAgbGV0IGRldGFpbHMgPSB7XHJcbiAgICAgICAgJ3VzZXJfaWQnOiB1c2VySWQsXHJcbiAgICAgICAgJ2FkbWluJzogZmFsc2VcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KGdldEJhc2ljVXJsLCBkZXRhaWxzLHRoaXMucHV0X29wdGlvbnMoKSlcclxuICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgc2F2ZUNhbGxTY2hlZHVsZShkYXRhIDphbnkgKSA6IE9ic2VydmFibGU8Q29tcGFueT4ge1xyXG4gICAgICAgIGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZSh0aGlzLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcbiAgICAgICAgbGV0IGRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWRzJzp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0b3RhbCcgICAgICAgOiBkYXRhLmxlYWRzXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAndHJhZmZpYyc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZyZXF1ZW5jeScgIDogZGF0YS50cmFmZmljXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnYWdlbmN5JyAgICAgICA6IGRhdGEuY29tcGFueVR5cGVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KHRoaXMuX3VybCArICcvY29tcGFuaWVzLycrc3RvcmFnZS5jb21wYW55Ll9pZCwgZGV0YWlscywgdGhpcy5wdXRfb3B0aW9ucygpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpIDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb21wYW55KGNvbXBJZDphbnksY29tcGFueTphbnksaXNBZG1pbjpib29sZWFuID0gZmFsc2UpOk9ic2VydmFibGU8Q29tcGFueT4ge1xyXG4gICAgICBsZXQgY29tcGFueVVybCA9IHRoaXMuX3VybCArICcvY29tcGFuaWVzLycgKyBjb21wSWQ7XHJcbiAgICAgIGxldCBkZXRhaWxzOmFueSA9IHt9O1xyXG4gICAgICAgaWYoaXNBZG1pbil7XHJcbiAgICAgICAgZGV0YWlscyA9ICAgIHtcclxuICAgICAgICAgICduYW1lJzpjb21wYW55Lm5hbWUsXHJcbiAgICAgICAgICAnc3ViX2RvbWFpbic6Y29tcGFueS5zdWJfZG9tYWluLFxyXG4gICAgICAgICAgJ2FnZW5jeSc6Y29tcGFueS5hZ2VuY3ksXHJcbiAgICAgICAgICAnaXNfYWRtaW5fY3JlYXRlZCc6Y29tcGFueS5pc19hZG1pbl9jcmVhdGVkLFxyXG4gICAgICAgICAgJ2JpbGxpbmcnOntcclxuICAgICAgICAgICAgJ2NoYXJnZWJlZV9wbGFuX2lkJzogY29tcGFueS5jaGFyZ2ViZWVfcGxhbl9pZCxcclxuICAgICAgICAgICAgJ2NoYXJnZWJlZV9zdWJzY3JpcHRpb25faWQnOiBjb21wYW55LmNoYXJnZWJlZV9zdWJzY3JpcHRpb25faWQsXHJcbiAgICAgICAgICAgICdjaGFyZ2ViZWVfY3VzdG9tZXJfaWQnIDogY29tcGFueS5jaGFyZ2ViZWVfY3VzdG9tZXJfaWQsXHJcbiAgICAgICAgICAgICdzdHJpcGVfY3VzdG9tZXJfaWQnIDogY29tcGFueS5zdHJpcGVfY3VzdG9tZXJfaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBkZXRhaWxzID0gIHtcclxuICAgICAgICAgICduYW1lJzpjb21wYW55LmNvbXBhbnluYW1lLFxyXG4gICAgICAgICAgJ3N1Yl9kb21haW4nOmNvbXBhbnkuZG9tYWluXHJcbiAgICAgICAgICAvLyAnYWdlbmN5Jzpjb21wYW55LmNvbXBhbnlUeXBlLFxyXG4gICAgICAgICAgLy8gJ3RyYWZmaWMnOntcclxuICAgICAgICAgIC8vICAgJ2ZyZXF1ZW5jeSc6Y29tcGFueS50cmFmZmljXHJcbiAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgLy8gJ2xlYWRzJzp7XHJcbiAgICAgICAgICAvLyAgICd0b3RhbCc6Y29tcGFueS5sZWFkc1xyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KGNvbXBhbnlVcmwsZGV0YWlscyx0aGlzLnB1dF9vcHRpb25zKCkpXHJcbiAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0dldCBBcHBzXHJcbiAgICBnZXRDb21wYW55UHJvamVjdHMoc3ViX2RvbWFpbjogU3RyaW5nKSB7XHJcbiAgICAgIGxldCBVUkwgPSB0aGlzLl91cmwgKyAnL2Rhc2hib2FyZC9jb21wYW55X3Byb2plY3RzLycgKyBzdWJfZG9tYWluO1xyXG4gICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoVVJMLCB0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbXBhbnlIb21lUHJvamVjdHMoc3ViX2RvbWFpbjogU3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTVUIgRE9NQUlOXCIsc3ViX2RvbWFpbik7XHJcbiAgICAgICAgbGV0IFVSTCA9IHRoaXMuX3VybCArICcvZGFzaGJvYXJkL2NvbXBhbnlfaG9tZV9wcm9qZWN0cy8nICsgc3ViX2RvbWFpbjtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoVVJMKVxyXG4gICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpdmVDb21wYW55UHJvamVjdHMoY29tcGFueV9pZDogU3RyaW5nKSB7XHJcbiAgICAgIGxldCBVUkwgPSB0aGlzLl91cmwgKyAnL2Rhc2hib2FyZC9saXZlX3Byb2plY3RzLycgKyBjb21wYW55X2lkO1xyXG4gICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoVVJMLCB0aGlzLm9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3RzU3RhdHMoaWQ6IFN0cmluZykge1xyXG4gICAgICBsZXQgVVJMID0gdGhpcy5fdXJsICsgJy9hbmFseXRpYy9wcm9qZWN0c19zdGF0cy8nICsgaWQ7XHJcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChVUkwsIHRoaXMub3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQ29tcGFuaWVzKGRhdGE6YW55KSB7XHJcbiAgICAgIGxldCBnZXRDb21wYW5pZXNVcmwgPSB0aGlzLl91cmwgKyAnL2NvbXBhbmllcy9hbGwnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoZ2V0Q29tcGFuaWVzVXJsLGRhdGEsdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wYW55SW5mbyhpZDpudW1iZXIpIHtcclxuICAgICAgbGV0IFVSTCA9IHRoaXMuX3VybCArICcvY29tcGFuaWVzLycraWQ7XHJcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChVUkwsdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh0aGlzLmV4dHJhY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0dldCBUZW1wbGF0ZXNcclxuICAgIGdldFRlbXBsYXRlcygpIHtcclxuICAgICBsZXQgZ2V0UGxhblVybCA9IHRoaXMuX3VybCArICcvZGFzaGJvYXJkL2dldF90ZW1wbGF0ZXMnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChnZXRQbGFuVXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUFwaUtleShjb21wSWQ6c3RyaW5nKXtcclxuICAgICAgbGV0IGRldGFpbHMgPSB7XHJcbiAgICAgICAgJ2lkJzogY29tcElkXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsICsgJy9hcGlrZXkvY3JlYXRlJywgZGV0YWlscywgdGhpcy5wb3N0X29wdGlvbnMoKSlcclxuICAgICAgICAubWFwKHRoaXMuZXh0cmFjdERhdGEpXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
