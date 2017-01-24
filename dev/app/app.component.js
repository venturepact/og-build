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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var env_config_1 = require('./config/env.config');
var index_1 = require('./shared/services/index');
var premiumModal_component_1 = require('./shared/premiumModal/premiumModal.component');
var AppComponent = (function () {
    function AppComponent(subDomainService, _userService, featureAuthService, sanitizer, loggedInService, companyService, _cookieService, router, _script, titleService) {
        this.subDomainService = subDomainService;
        this._userService = _userService;
        this.featureAuthService = featureAuthService;
        this.loggedInService = loggedInService;
        this.companyService = companyService;
        this._cookieService = _cookieService;
        this.router = router;
        this._script = _script;
        this.titleService = titleService;
        this.safeSubDomainUrl = '';
        this.subDomainUrl = '';
        this.mainUrl = '';
        this.intercom_id = env_config_1.Config.INTERCOM_ID;
        this.sub_domain = '';
        this.subDomain = subDomainService.subDomain;
        this.mainUrl = sanitizer.bypassSecurityTrustResourceUrl(env_config_1.Config.PROTOCOL + env_config_1.Config.PARENT_APP_DOMAIN + '/cross-domain.html');
        this.subDomainService.subDomainExists();
        if (this.subDomain.is_sub_domain_url) {
            this.subDomainUrl = this.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION;
            this.safeSubDomainUrl = sanitizer.bypassSecurityTrustResourceUrl(env_config_1.Config.PROTOCOL + this.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION);
        }
        window.onbeforeunload = function (e) {
            if (localStorage.getItem('targetRoute') && _cookieService.readCookie('storage') == null)
                localStorage.clear();
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Outgrow Home");
        if (this._cookieService.readCookie('storage')) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            if (storage.user.role !== "ADMIN") {
                this.featureAuthService.getAllFeatureAccess();
            }
            window.Intercom('boot', {
                app_id: this.intercom_id,
                email: storage.user.emails[0].email,
                name: storage.user.name,
                created_at: (Math.round(Date.parse(storage.user.createdAt) / 1000)),
                custom_launcher_selector: '.intercom_trigger',
                widget: {
                    activator: '#IntercomDefaultWidget'
                }
            });
        }
        else {
            window.Intercom('boot', {
                app_id: this.intercom_id,
                widget: {
                    activator: '#IntercomDefaultWidget'
                }
            });
        }
        if (window.location.href.indexOf('/preview') >= 0) {
            window.Intercom('update', { hide_default_launcher: true });
        }
        jQuery('meta[property="og:description"]').attr('content', 'venturepact');
        jQuery('meta[property="og:title"]').attr('content', 'venturepact');
        var url = window.location.href;
        var routeObject = url.split('/');
        url = window.location.hostname;
        this.sub_domain = url.split('.')[0];
        if (this._cookieService.readCookie('storage')) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            if (!this.subDomain.is_sub_domain_url && storage.user.role !== 'ADMIN' && routeObject[3] !== 'verifyEmail') {
                this.redirectToFirstCompany();
            }
            else if (!this.subDomain.is_sub_domain_url && storage.user.role === 'ADMIN' && routeObject[3] !== 'admin') {
                window.location.href = window.location.origin + '/admin';
            }
            else if (this.subDomain.is_sub_domain_url && !routeObject[3]) {
                this.redirectToDashboard();
            }
        }
        else if (!routeObject[3] && this.subDomain.is_sub_domain_url) {
            url = 'app.' + env_config_1.Config.APP_EXTENSION + '/login';
            jQuery(location).attr('href', env_config_1.Config.PROTOCOL + url);
        }
    };
    AppComponent.prototype.redirectToDashboard = function () {
        var _this = this;
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var companyAccess = JSON.parse(this._cookieService.readCookie('filepicker_token_json'));
        var url = '';
        companyAccess.forEach(function (e) {
            if (e.key === _this.sub_domain) {
                url = _this.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/dashboard';
            }
        });
        var company = storage.company;
        if (url == '')
            url = company.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/dashboard';
        jQuery(location).attr('href', env_config_1.Config.PROTOCOL + url);
    };
    AppComponent.prototype.redirectToFirstCompany = function () {
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var company = storage.company;
        var url = company.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/dashboard';
        jQuery(location).attr('href', env_config_1.Config.PROTOCOL + url);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        window.Intercom('hide');
        window.Intercom('shutdown');
        if (window.location.href.indexOf('/preview') >= 0) {
            window.Intercom('update', { hide_default_launcher: false });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            viewProviders: [http_1.HTTP_PROVIDERS],
            templateUrl: 'app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, premiumModal_component_1.PremiumModalComponent],
            providers: [index_1.Script, index_1.SubDomainService, index_1.CookieService, index_1.UserService, index_1.SettingsCommunicationService, index_1.MembershipService, index_1.FeatureAuthService, platform_browser_1.Title]
        }), 
        __metadata('design:paramtypes', [index_1.SubDomainService, index_1.UserService, index_1.FeatureAuthService, platform_browser_1.DomSanitizationService, index_1.LoggedInService, index_1.CompanyService, index_1.CookieService, router_1.Router, index_1.Script, platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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cUJBQWMsQ0FBQztZQUMvQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFDLDhDQUFxQixDQUFDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLGNBQU0sRUFBRSx3QkFBZ0IsRUFBRSxxQkFBYSxFQUFFLG1CQUFXLEVBQUUsb0NBQTRCLEVBQUUseUJBQWlCLEVBQUcsMEJBQWtCLEVBQUUsd0JBQUssQ0FBQztTQUMvSSxDQUFDOztvQkFBQTtJQTBKRixtQkFBQztBQUFELENBeEpBLEFBd0pDLElBQUE7QUF4Slksb0JBQVksZUF3SnhCLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2FmZVJlc291cmNlVXJsLCBEb21TYW5pdGl6YXRpb25TZXJ2aWNlLCBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyxSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5pbXBvcnQgeyBTdWJEb21haW4gfSBmcm9tICcuL3NoYXJlZC9pbnRlcmZhY2VzL3N1YmRvbWFpbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTY3JpcHQsTG9nZ2VkSW5TZXJ2aWNlLCBNZW1iZXJzaGlwU2VydmljZSwgQ29va2llU2VydmljZSwgU3ViRG9tYWluU2VydmljZSwgQ29tcGFueVNlcnZpY2UsIFVzZXJTZXJ2aWNlLCBTZXR0aW5nc0NvbW11bmljYXRpb25TZXJ2aWNlLCBGZWF0dXJlQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IFByZW1pdW1Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL3ByZW1pdW1Nb2RhbC9wcmVtaXVtTW9kYWwuY29tcG9uZW50JztcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG4vL2RlY2xhcmUgdmFyIEFwcGN1ZXM6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1hcHAnLFxyXG4gIHZpZXdQcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSU10sXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUyxQcmVtaXVtTW9kYWxDb21wb25lbnRdLFxyXG4gIHByb3ZpZGVyczogW1NjcmlwdCwgU3ViRG9tYWluU2VydmljZSwgQ29va2llU2VydmljZSwgVXNlclNlcnZpY2UsIFNldHRpbmdzQ29tbXVuaWNhdGlvblNlcnZpY2UsIE1lbWJlcnNoaXBTZXJ2aWNlICwgRmVhdHVyZUF1dGhTZXJ2aWNlLCBUaXRsZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcclxuXHJcbiAgc3ViRG9tYWluOiBTdWJEb21haW47XHJcbiAgc2FmZVN1YkRvbWFpblVybDogU2FmZVJlc291cmNlVXJsID0gJyc7XHJcbiAgc3ViRG9tYWluVXJsOiBzdHJpbmcgPSAnJztcclxuICBtYWluVXJsOiBTYWZlUmVzb3VyY2VVcmwgPSAnJztcclxuICBpbnRlcmNvbV9pZDogc3RyaW5nID0gQ29uZmlnLklOVEVSQ09NX0lEO1xyXG4gIHN1Yl9kb21haW4gOiBhbnkgPSAnJztcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc3ViRG9tYWluU2VydmljZTogU3ViRG9tYWluU2VydmljZSxcclxuICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgZmVhdHVyZUF1dGhTZXJ2aWNlIDogRmVhdHVyZUF1dGhTZXJ2aWNlLFxyXG4gICAgc2FuaXRpemVyOiBEb21TYW5pdGl6YXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2dnZWRJblNlcnZpY2U6IExvZ2dlZEluU2VydmljZSxcclxuICAgIHByaXZhdGUgY29tcGFueVNlcnZpY2U6IENvbXBhbnlTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfY29va2llU2VydmljZTpDb29raWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIF9zY3JpcHQgOiBTY3JpcHQsXHJcbiAgICBwcml2YXRlIHRpdGxlU2VydmljZSA6IFRpdGxlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnN1YkRvbWFpbiA9IHN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluO1xyXG4gICAgdGhpcy5tYWluVXJsID0gc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChDb25maWcuUFJPVE9DT0wgKyBDb25maWcuUEFSRU5UX0FQUF9ET01BSU4gKyAnL2Nyb3NzLWRvbWFpbi5odG1sJyk7XHJcbiAgICB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluRXhpc3RzKCk7XHJcbiAgICBpZiAodGhpcy5zdWJEb21haW4uaXNfc3ViX2RvbWFpbl91cmwpIHtcclxuICAgICAgdGhpcy5zdWJEb21haW5VcmwgPSB0aGlzLnN1YkRvbWFpbi5zdWJfZG9tYWluICsgJy4nICsgQ29uZmlnLkFQUF9FWFRFTlNJT047XHJcbiAgICAgIHRoaXMuc2FmZVN1YkRvbWFpblVybCA9IHNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoXHJcbiAgICAgICAgQ29uZmlnLlBST1RPQ09MICsgdGhpcy5zdWJEb21haW4uc3ViX2RvbWFpbiArICcuJyArIENvbmZpZy5BUFBfRVhURU5TSU9OXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbihlOmFueSkge1xyXG4gICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFyZ2V0Um91dGUnKSAmJiBfY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykgPT0gbnVsbClcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic29obml5b1wiKTtcclxuICAgIC8vSW50ZXJjb21cclxuICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKFwiT3V0Z3JvdyBIb21lXCIpO1xyXG4gICAgaWYgKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKSB7XHJcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuICAgICAgICBpZihzdG9yYWdlLnVzZXIucm9sZSAhPT0gXCJBRE1JTlwiKXtcclxuICAgICAgICAgIHRoaXMuZmVhdHVyZUF1dGhTZXJ2aWNlLmdldEFsbEZlYXR1cmVBY2Nlc3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LkludGVyY29tKCdib290Jywge1xyXG4gICAgICAgICAgICBhcHBfaWQ6IHRoaXMuaW50ZXJjb21faWQsXHJcbiAgICAgICAgICAgIGVtYWlsOiBzdG9yYWdlLnVzZXIuZW1haWxzWzBdLmVtYWlsLFxyXG4gICAgICAgICAgICBuYW1lOiBzdG9yYWdlLnVzZXIubmFtZSxcclxuICAgICAgICAgICAgY3JlYXRlZF9hdDogKE1hdGgucm91bmQoRGF0ZS5wYXJzZShzdG9yYWdlLnVzZXIuY3JlYXRlZEF0KS8xMDAwKSksXHJcbiAgICAgICAgICAgIGN1c3RvbV9sYXVuY2hlcl9zZWxlY3RvcjogJy5pbnRlcmNvbV90cmlnZ2VyJyxcclxuICAgICAgICAgICAgd2lkZ2V0OiB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0b3I6ICcjSW50ZXJjb21EZWZhdWx0V2lkZ2V0J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5JbnRlcmNvbSgnYm9vdCcsIHtcclxuICAgICAgICAgICAgYXBwX2lkOiB0aGlzLmludGVyY29tX2lkLFxyXG4gICAgICAgICAgICB3aWRnZXQ6IHtcclxuICAgICAgICAgICAgICAgIGFjdGl2YXRvcjogJyNJbnRlcmNvbURlZmF1bHRXaWRnZXQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJy9wcmV2aWV3JykgPj0gMCkge1xyXG4gICAgICB3aW5kb3cuSW50ZXJjb20oJ3VwZGF0ZScsIHsgaGlkZV9kZWZhdWx0X2xhdW5jaGVyOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gR29vZ2xlIHJlbWFya2V0aW5nIHRhZ1xyXG4gICAgLy8gbGV0IHVybGEgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIC8vIGlmKHVybGEuaW5kZXhPZihcIm91dGdyb3cuY29cIikgPj0gMCkge1xyXG4gICAgLy8gICAgIHdpbmRvdy5nb29nbGVfdHJhY2tDb252ZXJzaW9uKHtcclxuICAgIC8vICAgICAgICAgZ29vZ2xlX2NvbnZlcnNpb25faWQ6IDg3NjU0OTIxMyxcclxuICAgIC8vICAgICAgICAgZ29vZ2xlX2N1c3RvbV9wYXJhbXM6IHdpbmRvdy5nb29nbGVfdGFnX3BhcmFtcyxcclxuICAgIC8vICAgICAgICAgZ29vZ2xlX3JlbWFya2V0aW5nX29ubHk6IHRydWVcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvKiogY2hhbmdlcyBmb3IgbWV0YSB0YWdzICovXHJcbiAgICBqUXVlcnkoJ21ldGFbcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXScpLmF0dHIoJ2NvbnRlbnQnLCAndmVudHVyZXBhY3QnKTtcclxuICAgIGpRdWVyeSgnbWV0YVtwcm9wZXJ0eT1cIm9nOnRpdGxlXCJdJykuYXR0cignY29udGVudCcsICd2ZW50dXJlcGFjdCcpO1xyXG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgbGV0IHJvdXRlT2JqZWN0ID0gdXJsLnNwbGl0KCcvJyk7XHJcbiAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcbiAgICB0aGlzLnN1Yl9kb21haW4gPSB1cmwuc3BsaXQoJy4nKVswXTtcclxuICAgIGlmICh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSkge1xyXG4gICAgICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG4gICAgICBpZighdGhpcy5zdWJEb21haW4uaXNfc3ViX2RvbWFpbl91cmwgJiYgc3RvcmFnZS51c2VyLnJvbGUgIT09ICdBRE1JTicgJiYgcm91dGVPYmplY3RbM10gIT09ICd2ZXJpZnlFbWFpbCcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcyBpcyB0aGUgY3VscHJpdCBoZXJlJyk7XHJcbiAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9GaXJzdENvbXBhbnkoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKCF0aGlzLnN1YkRvbWFpbi5pc19zdWJfZG9tYWluX3VybCAmJiBzdG9yYWdlLnVzZXIucm9sZSA9PT0gJ0FETUlOJyAmJiByb3V0ZU9iamVjdFszXSAhPT0gJ2FkbWluJyl7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm93IHRoaXMgaXMgdGhlIGN1bHByaXQgaGVyZScpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2FkbWluJztcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHRoaXMuc3ViRG9tYWluLmlzX3N1Yl9kb21haW5fdXJsICYmICFyb3V0ZU9iamVjdFszXSkge1xyXG4gICAgICAgICAgdGhpcy5yZWRpcmVjdFRvRGFzaGJvYXJkKCk7XHJcbiAgICAgIH1cclxuICAgICAgLy9BcHBjdWVzIElkZW50aWZ5XHJcbiAgICAgIC8vIEFwcGN1ZXMuaWRlbnRpZnkoc3RvcmFnZS51c2VyLl9pZCwge1xyXG4gICAgICAvLyAgIG5hbWU6IHN0b3JhZ2UudXNlci5uYW1lLFxyXG4gICAgICAvLyAgIGVtYWlsOiBzdG9yYWdlLnVzZXIuZW1haWxzWzBdLmVtYWlsLFxyXG4gICAgICAvLyAgIGNyZWF0ZWRfYXQ6IChNYXRoLnJvdW5kKERhdGUucGFyc2Uoc3RvcmFnZS51c2VyLmNyZWF0ZWRBdCkgLyAxMDAwKSlcclxuICAgICAgLy8gfSk7XHJcbiAgICB9IGVsc2UgaWYgKCFyb3V0ZU9iamVjdFszXSAmJiB0aGlzLnN1YkRvbWFpbi5pc19zdWJfZG9tYWluX3VybCl7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic29obml5byBraWRkYVwiKTtcclxuICAgICAgdXJsID0gJ2FwcC4nK0NvbmZpZy5BUFBfRVhURU5TSU9OKycvbG9naW4nO1xyXG4gICAgICBqUXVlcnkobG9jYXRpb24pLmF0dHIoJ2hyZWYnLENvbmZpZy5QUk9UT0NPTCt1cmwpO1xyXG4gICAgICAvL0FwcGN1ZXMgQW5vbnltb3VzXHJcbiAgICAgIC8vQXBwY3Vlcy5hbm9ueW1vdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZGlyZWN0VG9EYXNoYm9hcmQoKSB7XHJcbiAgICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG4gICAgbGV0IGNvbXBhbnlBY2Nlc3MgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnZmlsZXBpY2tlcl90b2tlbl9qc29uJykpO1xyXG4gICAgbGV0IHVybCA9ICcnO1xyXG4gICAgY29tcGFueUFjY2Vzcy5mb3JFYWNoKChlOmFueSkgPT4ge1xyXG4gICAgICBpZihlLmtleSAgPT09IHRoaXMuc3ViX2RvbWFpbil7XHJcbiAgICAgICAgdXJsID0gdGhpcy5zdWJfZG9tYWluKycuJytDb25maWcuQVBQX0VYVEVOU0lPTisnL2Rhc2hib2FyZCc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbGV0IGNvbXBhbnkgPSBzdG9yYWdlLmNvbXBhbnk7XHJcbiAgICBpZih1cmwgPT0gJycpXHJcbiAgICAgIHVybCA9IGNvbXBhbnkuc3ViX2RvbWFpbisnLicrQ29uZmlnLkFQUF9FWFRFTlNJT04rJy9kYXNoYm9hcmQnO1xyXG5cclxuICAgIGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicsQ29uZmlnLlBST1RPQ09MK3VybCk7XHJcbiAgfVxyXG5cclxuICByZWRpcmVjdFRvRmlyc3RDb21wYW55KCkge1xyXG4gICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuICAgIGxldCBjb21wYW55ID0gc3RvcmFnZS5jb21wYW55O1xyXG4gICAgbGV0IHVybCA9IGNvbXBhbnkuc3ViX2RvbWFpbisnLicrQ29uZmlnLkFQUF9FWFRFTlNJT04rJy9kYXNoYm9hcmQnO1xyXG4gICAgalF1ZXJ5KGxvY2F0aW9uKS5hdHRyKCdocmVmJyxDb25maWcuUFJPVE9DT0wrdXJsKTtcclxuICB9XHJcblxyXG5cclxuICAvLyB1cGRhdGVCaWxsaW5nU3RhdHVzQ29va2llKCl7XHJcbiAgLy8gICB0aGlzLl91c2VyU2VydmljZS51cGRhdGViaWxsaW5nU3RhdHVzKCkuXHJcbiAgLy8gICAgIHN1YnNjcmliZSgocmVzdWx0OmFueSk9PntcclxuICAvLyAgICAgICBsZXQgc3RhdHVzQ29va2llID0gcmVzdWx0O1xyXG4gIC8vICAgICAgIHRoaXMuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nLCBKU09OLnN0cmluZ2lmeShzdGF0dXNDb29raWUpLDMpO1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nKSkpO1xyXG4gIC8vICAgICAgIHRoaXMuZmVhdHVyZUF1dGhTZXJ2aWNlLmdldEFsbEZlYXR1cmVBY2Nlc3MoKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKXtcclxuICAgIHdpbmRvdy5JbnRlcmNvbSgnaGlkZScpO1xyXG4gICAgd2luZG93LkludGVyY29tKCdzaHV0ZG93bicpO1xyXG4gICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignL3ByZXZpZXcnKSA+PSAwKSB7XHJcbiAgICAgIHdpbmRvdy5JbnRlcmNvbSgndXBkYXRlJywgeyBoaWRlX2RlZmF1bHRfbGF1bmNoZXI6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIl19
