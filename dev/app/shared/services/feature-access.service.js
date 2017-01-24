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
var base_service_1 = require('./base.service');
var FeatureAuthService = (function (_super) {
    __extends(FeatureAuthService, _super);
    function FeatureAuthService(_http, _subDomainService) {
        _super.call(this);
        this._http = _http;
        this._subDomainService = _subDomainService;
        this.features = {
            users: 0,
            templates: 0,
            visits: 0,
            leads: 0,
            calculators: 0,
            analytics: false,
            cta: false,
            integrations: false,
            embedding: false,
            custom_branding: false,
            real_time_results: false,
            lead_generation: false,
            calc_in_limit: false
        };
    }
    FeatureAuthService.prototype.getfeatureAccess = function (featureName) {
        var _this = this;
        var companyAccess = JSON.parse(this.readCookie('filepicker_token_json'));
        var subscription_status = '';
        companyAccess.forEach(function (e) {
            if (e.key === _this._subDomainService.subDomain.sub_domain) {
                subscription_status = e.value;
            }
        });
        if (subscription_status == "active" || subscription_status == "in_trial") {
            var company = localStorage.getItem('company');
            var getUrl = this._url + '/planfeature/check/' + company + '/' + featureName;
            return this._http.get(getUrl, this.options)
                .map(this.boolData)
                .catch(this.handleError);
        }
        else {
            return false;
        }
    };
    FeatureAuthService.prototype.checkCalcLimit = function () {
        var company = localStorage.getItem('company');
        var getUrl = this._url + '/plan/check/calc/' + company;
        return this._http.get(getUrl, this.options)
            .map(this.boolData)
            .catch(this.handleError);
    };
    FeatureAuthService.prototype.getAllFeatureAccess = function () {
        var _this = this;
        var companyAccess = JSON.parse(this.readCookie('filepicker_token_json'));
        var subscription_status = '';
        if (!companyAccess)
            window.location.href = window.location.origin + '/logout';
        else
            companyAccess.forEach(function (e) {
                if (e.key === _this._subDomainService.subDomain.sub_domain) {
                    subscription_status = e.value;
                }
            });
        if (subscription_status == "active" || subscription_status == "in_trial") {
            var sub_domain = this._subDomainService.subDomain.sub_domain;
            var getUrl = this._url + '/planfeature/access/' + sub_domain;
            this._http.get(getUrl, this.options)
                .map(this.extractData)
                .catch(this.handleError)
                .subscribe(function (result) {
                _this.features.users = result.users;
                _this.features.templates = result.templates;
                _this.features.calculators = result.calculators;
                _this.features.visits = result.visits;
                _this.features.leads = result.leads;
                _this.features.analytics = result.analytics;
                _this.features.embedding = result.embedding;
                _this.features.cta = result.cta;
                _this.features.integrations = result.integrations;
                _this.features.custom_branding = result.og_branding;
                _this.features.real_time_results = result.real_time_results;
                _this.features.lead_generation = result.lead_generation_viewing;
                _this.features.calc_in_limit = result.calc_in_limit;
            });
        }
    };
    FeatureAuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, index_1.SubDomainService])
    ], FeatureAuthService);
    return FeatureAuthService;
}(base_service_1.BaseService));
exports.FeatureAuthService = FeatureAuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZmVhdHVyZS1hY2Nlc3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXNCLGVBQWUsQ0FBQyxDQUFBO0FBR3RDLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUMvQixRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFDaEMsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pDLHNCQUFpQyxTQUFTLENBQUMsQ0FBQTtBQUMzQyw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUk3QztJQUF3QyxzQ0FBVztJQWlCL0MsNEJBQW9CLEtBQVcsRUFBVSxpQkFBbUM7UUFDeEUsaUJBQU8sQ0FBQztRQURRLFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBaEIvRSxhQUFRLEdBQWtCO1lBQ3pCLEtBQUssRUFBRSxDQUFDO1lBQ1IsU0FBUyxFQUFFLENBQUM7WUFDWixNQUFNLEVBQUUsQ0FBQztZQUNULEtBQUssRUFBRSxDQUFDO1lBQ1IsV0FBVyxFQUFFLENBQUM7WUFDZCxTQUFTLEVBQUUsS0FBSztZQUNoQixHQUFHLEVBQUUsS0FBSztZQUNWLFlBQVksRUFBRSxLQUFLO1lBQ25CLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsYUFBYSxFQUFFLEtBQUs7U0FDakIsQ0FBQztJQUtGLENBQUM7SUFFSiw2Q0FBZ0IsR0FBaEIsVUFBaUIsV0FBbUI7UUFBcEMsaUJBa0JDO1FBakJBLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFD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cmUtYWNjZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyAgRmVhdHVyZUFjY2VzcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvZmVhdHVyZXMuaW50ZXJmYWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0IHsgU3ViRG9tYWluU2VydmljZSB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vYmFzZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlQXV0aFNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZSB7XHJcblx0ZmVhdHVyZXM6IEZlYXR1cmVBY2Nlc3MgPSB7XHJcblx0XHR1c2VyczogMCxcclxuXHRcdHRlbXBsYXRlczogMCxcclxuXHRcdHZpc2l0czogMCxcclxuXHRcdGxlYWRzOiAwLFxyXG5cdFx0Y2FsY3VsYXRvcnM6IDAsXHJcblx0XHRhbmFseXRpY3M6IGZhbHNlLFxyXG5cdFx0Y3RhOiBmYWxzZSxcclxuXHRcdGludGVncmF0aW9uczogZmFsc2UsXHJcblx0XHRlbWJlZGRpbmc6IGZhbHNlLFxyXG5cdFx0Y3VzdG9tX2JyYW5kaW5nOiBmYWxzZSxcclxuXHRcdHJlYWxfdGltZV9yZXN1bHRzOiBmYWxzZSxcclxuXHRcdGxlYWRfZ2VuZXJhdGlvbjogZmFsc2UsXHJcblx0XHRjYWxjX2luX2xpbWl0OiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9zdWJEb21haW5TZXJ2aWNlOiBTdWJEb21haW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cdGdldGZlYXR1cmVBY2Nlc3MoZmVhdHVyZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBib29sZWFue1xyXG5cdFx0bGV0IGNvbXBhbnlBY2Nlc3MgPSBKU09OLnBhcnNlKHRoaXMucmVhZENvb2tpZSgnZmlsZXBpY2tlcl90b2tlbl9qc29uJykpO1xyXG5cdFx0bGV0IHN1YnNjcmlwdGlvbl9zdGF0dXMgPSAnJztcclxuXHRcdGNvbXBhbnlBY2Nlc3MuZm9yRWFjaCgoZTphbnkpID0+IHtcclxuXHRcdFx0aWYoZS5rZXkgID09PSB0aGlzLl9zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5zdWJfZG9tYWluKXtcclxuXHRcdFx0XHRzdWJzY3JpcHRpb25fc3RhdHVzID0gZS52YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRpZiAoc3Vic2NyaXB0aW9uX3N0YXR1cyA9PSBcImFjdGl2ZVwiIHx8IHN1YnNjcmlwdGlvbl9zdGF0dXMgPT0gXCJpbl90cmlhbFwiKSB7XHJcblx0XHRsZXQgY29tcGFueSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb21wYW55Jyk7XHJcblx0XHRsZXQgZ2V0VXJsID0gdGhpcy5fdXJsICsgJy9wbGFuZmVhdHVyZS9jaGVjay8nICsgY29tcGFueSArICcvJyArIGZlYXR1cmVOYW1lO1xyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGdldFVybCwgdGhpcy5vcHRpb25zKVxyXG5cdFx0XHQubWFwKHRoaXMuYm9vbERhdGEpXHJcblx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNoZWNrQ2FsY0xpbWl0KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG5cdFx0bGV0IGNvbXBhbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tcGFueScpO1xyXG5cdFx0bGV0IGdldFVybCA9IHRoaXMuX3VybCArICcvcGxhbi9jaGVjay9jYWxjLycgKyBjb21wYW55O1xyXG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGdldFVybCwgdGhpcy5vcHRpb25zKVxyXG5cdFx0XHQubWFwKHRoaXMuYm9vbERhdGEpXHJcblx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuXHR9XHJcblxyXG5cdGdldEFsbEZlYXR1cmVBY2Nlc3MoKSB7XHJcblx0XHRsZXQgY29tcGFueUFjY2VzcyA9IEpTT04ucGFyc2UodGhpcy5yZWFkQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nKSk7XHJcblx0XHRsZXQgc3Vic2NyaXB0aW9uX3N0YXR1cyA9ICcnO1xyXG5cdFx0aWYoIWNvbXBhbnlBY2Nlc3MpXHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvbG9nb3V0JztcclxuICAgIGVsc2VcclxuICAgICAgY29tcGFueUFjY2Vzcy5mb3JFYWNoKChlOmFueSkgPT4ge1xyXG4gICAgICAgIGlmKGUua2V5ICA9PT0gdGhpcy5fc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbil7XHJcbiAgICAgICAgICBzdWJzY3JpcHRpb25fc3RhdHVzID0gZS52YWx1ZTtcclxuXHRcdCAvLyBjb25zb2xlLmxvZyhzdWJzY3JpcHRpb25fc3RhdHVzLFwiYW5kIHN1YiBkb21haW5cIiwgdGhpcy5fc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHRcdGlmIChzdWJzY3JpcHRpb25fc3RhdHVzID09IFwiYWN0aXZlXCIgfHwgc3Vic2NyaXB0aW9uX3N0YXR1cyA9PSBcImluX3RyaWFsXCIpIHtcclxuXHRcdFx0bGV0IHN1Yl9kb21haW4gPSB0aGlzLl9zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5zdWJfZG9tYWluO1xyXG5cdFx0XHRsZXQgZ2V0VXJsID0gdGhpcy5fdXJsICsgJy9wbGFuZmVhdHVyZS9hY2Nlc3MvJyArIHN1Yl9kb21haW47XHJcblx0XHRcdHRoaXMuX2h0dHAuZ2V0KGdldFVybCwgdGhpcy5vcHRpb25zKVxyXG5cdFx0XHRcdC5tYXAodGhpcy5leHRyYWN0RGF0YSlcclxuXHRcdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuXHRcdFx0XHQuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZmVhdHVyZXMudXNlcnMgPSByZXN1bHQudXNlcnM7XHJcblx0XHRcdFx0XHR0aGlzLmZlYXR1cmVzLnRlbXBsYXRlcyA9IHJlc3VsdC50ZW1wbGF0ZXM7XHJcblx0XHRcdFx0XHR0aGlzLmZlYXR1cmVzLmNhbGN1bGF0b3JzID0gcmVzdWx0LmNhbGN1bGF0b3JzO1xyXG5cdFx0XHRcdFx0dGhpcy5mZWF0dXJlcy52aXNpdHMgPSByZXN1bHQudmlzaXRzO1xyXG5cdFx0XHRcdFx0dGhpcy5mZWF0dXJlcy5sZWFkcyA9IHJlc3VsdC5sZWFkcztcclxuXHRcdFx0XHRcdHRoaXMuZmVhdHVyZXMuYW5hbHl0aWNzID0gcmVzdWx0LmFuYWx5dGljcztcclxuXHRcdFx0XHRcdHRoaXMuZmVhdHVyZXMuZW1iZWRkaW5nID0gcmVzdWx0LmVtYmVkZGluZztcclxuXHRcdFx0XHRcdHRoaXMuZmVhdHVyZXMuY3RhID0gcmVzdWx0LmN0YTtcclxuXHRcdFx0XHRcdHRoaXMuZmVhdHVyZXMuaW50ZWdyYXRpb25zID0gcmVzdWx0LmludGVncmF0aW9ucztcclxuXHRcdFx0XHRcdHRoaXMuZmVhdHVyZXMuY3VzdG9tX2JyYW5kaW5nID0gcmVzdWx0Lm9nX2JyYW5kaW5nO1xyXG5cdFx0XHRcdFx0dGhpcy5mZWF0dXJlcy5yZWFsX3RpbWVfcmVzdWx0cyA9IHJlc3VsdC5yZWFsX3RpbWVfcmVzdWx0cztcclxuXHRcdFx0XHRcdHRoaXMuZmVhdHVyZXMubGVhZF9nZW5lcmF0aW9uID0gcmVzdWx0LmxlYWRfZ2VuZXJhdGlvbl92aWV3aW5nO1xyXG5cdFx0XHRcdFx0dGhpcy5mZWF0dXJlcy5jYWxjX2luX2xpbWl0ID0gcmVzdWx0LmNhbGNfaW5fbGltaXQ7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzLmZlYXR1cmVzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==
