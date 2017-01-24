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
var router_1 = require('@angular/router');
var index_1 = require('../../../shared/services/index');
var feature_access_service_1 = require('../../../shared/services/feature-access.service');
var paymentModal_component_1 = require('./../../../shared/paymentModal/paymentModal.component');
var company_1 = require('./../../../shared/models/company');
var env_config_1 = require('../../../config/env.config');
var ToolbarComponent = (function () {
    function ToolbarComponent(_subDomainService, loggedInService, _userService, _companyService, _featureAuthService, _cookieService, router) {
        this._subDomainService = _subDomainService;
        this.loggedInService = loggedInService;
        this._userService = _userService;
        this._companyService = _companyService;
        this._featureAuthService = _featureAuthService;
        this._cookieService = _cookieService;
        this.router = router;
        this.isSubDomainUrl = false;
        this.companyInitial = '';
        this.companyName = '';
        this.isEmailVerified = true;
        this.mycompanyLength = 0;
        this.isAnalyticsAvailable = true;
        this.cookiesStatus = false;
        this.respTitle = '';
        this.is_subcripion_cancelled = false;
        this.isAdminCreated = false;
        this.cardStatus = '';
        this.subsStatus = '';
        this.loggedIn = loggedInService.loggedIn;
        var storage = JSON.parse(_cookieService.readCookie('storage'));
        if (storage !== null) {
            this.name = storage.user.name;
        }
        this.isSubDomainUrl = this._subDomainService.subDomain.is_sub_domain_url;
        if (this.isSubDomainUrl) {
            this.companyInitial = this._subDomainService.subDomain.sub_domain.charAt(0).toUpperCase();
            this.companyName = this._subDomainService.subDomain.sub_domain.charAt(0).toUpperCase() + this._subDomainService.subDomain.sub_domain.slice(1);
        }
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        jQuery(window).scroll(function () {
            var scroll = jQuery(window).scrollTop();
            if (scroll >= 100) {
                jQuery(".navbar-fixed-top").addClass("header-boxshadow");
            }
            else {
                jQuery(".navbar-fixed-top").removeClass("header-boxshadow");
            }
        });
        this.currentUrl = '';
        if (this.loggedIn.isLoggedIn)
            this.getCompanies();
        this.subDomainExt = '.' + env_config_1.Config.APP_EXTENSION;
        var sub_domain = this._subDomainService.subDomain.sub_domain;
        var companyAccess = JSON.parse(this._cookieService.readCookie('filepicker_token_json'));
        var storage = this._cookieService.readCookie('storage');
        if (storage) {
            storage = JSON.parse(storage);
            this.name = storage.user.name;
            this.userId = storage.user._id;
            this.isAdminCreated = storage.company.is_admin_created;
            this.isEmailVerified = false;
            if (storage.user.emails[0].verification.complete) {
                this.isEmailVerified = true;
            }
        }
        var subscription_status = '';
        if (companyAccess)
            companyAccess.forEach(function (e) {
                if (e.key === sub_domain) {
                    subscription_status = e.value;
                }
            });
        if (subscription_status === 'cancelled') {
            this.is_subcripion_cancelled = true;
        }
        this.co = window.location.href.split('//')[1].split('.')[0];
        this.respTitle = window.location.href.split('//')[1].split('/')[1];
        if (this.co !== 'app' && this.loggedIn.isLoggedIn) {
            this._companyService.isSubDomainExist(this.co)
                .subscribe(function (success) {
                localStorage.setItem('company', success._id);
                _this._companyService.getCompanyUsers(success._id)
                    .subscribe(function (success) {
                    for (var i = 0; i < success.length; i++) {
                        if (success[i].username === storage.user.username) {
                            localStorage.setItem('role', success[i].user_company.role);
                            _this._cookieService.createCookie('role', success[i].user_company.role, 3);
                            break;
                        }
                    }
                }, function (error) {
                });
            }, function (error) {
            });
        }
        if (this._cookieService.readCookie('storage'))
            this.isAnalyticsAvailable = this._featureAuthService.features.analytics;
        this.cardStatus = '';
        this.subsStatus = '';
        var status = this._cookieService.readCookie('status');
        if (status) {
            status = JSON.parse(status);
            this.cardStatus = status.cardStatus;
            this.subsStatus = status.subsStatus;
        }
        if (this.isAdminCreated && (this.subsStatus === 'cancelled' || this.subsStatus === 'future')) {
            jQuery('#new-setup-payment').modal({ backdrop: 'static', keyboard: false });
            jQuery('#new-setup-payment').modal('show');
        }
    };
    ToolbarComponent.prototype.ngAfterViewInit = function () {
        this.showNotification();
    };
    ToolbarComponent.prototype.showNotification = function () {
        if (this.isEmailVerified === false) {
            jQuery('#main-div').addClass('settings-cookies');
            jQuery('#new-header').addClass('cookies-parent');
        }
    };
    ToolbarComponent.prototype.getCompanies = function () {
        var self = this;
        this._companyService.getCompanies()
            .subscribe(function (data) {
            self.myCompanies = [];
            if (data) {
                data.forEach(function (company) {
                    if (company.user_company.status !== 'LEFT' && company.user_company.status !== 'DELETED' && company.user_company.status !== 'REQUESTED' && company.user_company.active) {
                        self.myCompanies.push(new company_1.Company(company));
                    }
                });
            }
            self.mycompanyLength = self.myCompanies.length;
            setTimeout(function () {
                jQuery('.slimscroll').slimscroll({
                    railVisible: true,
                    alwaysVisible: true
                });
            }, 500);
        }, function (response) {
        });
    };
    ToolbarComponent.prototype.checkCookies = function () {
        if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
            this.cookiesStatus = navigator.cookieEnabled;
            if (this.cookiesStatus) {
                jQuery('.cookies-header').removeClass('hide');
                jQuery('#nav-cookies-div').addClass('cookies-parent');
                jQuery('.navbar-fixed-top').parent('.main-div').addClass('cookies-main');
            }
        }
    };
    ToolbarComponent.prototype.resendEmail = function () {
        this._userService.resendEmail(this.userId)
            .subscribe(function (success) {
            window.toastNotification('Email has been sent, Please check your email.');
        }, function (error) {
        });
    };
    ToolbarComponent.prototype.onLogout = function () {
        var _this = this;
        localStorage.setItem('doingLogout', 'true');
        this._userService.logout()
            .subscribe(function () {
            _this.loggedInService.logout();
            localStorage.clear();
            window.location.href = env_config_1.Config.APP_DOMAIN;
        });
    };
    ToolbarComponent.prototype.close = function () {
        jQuery('.cookies-header').addClass('hide');
        jQuery('#main-div').removeClass('settings-cookies');
        jQuery('#new-header').removeClass('cookies-parent');
    };
    ToolbarComponent.prototype.analyticsClick = function (event) {
        this.isAnalyticsAvailable = this._featureAuthService.features.analytics;
        if (!this.isAnalyticsAvailable) {
            event.preventDefault();
            jQuery('#premiumModal').modal('show');
            jQuery('#analyticsRef').attr('active', false);
        }
        else {
            jQuery('#analyticsRef').attr('active', true);
            this.router.navigate(['/analytics']);
        }
    };
    ToolbarComponent.prototype.header = function (title) {
        this.respTitle = title;
    };
    ToolbarComponent.prototype.callGA = function () {
        ga('markettingteam.send', 'event', 'ResendVerificationEmail', 'Click', 'Dashboard');
        _kmq.push(['record', 'Resend verification email link click']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToolbarComponent.prototype, "page", void 0);
    ToolbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-toolbar',
            templateUrl: 'toolbar.component.html',
            styleUrls: [
                'toolbar.component.css'
            ],
            providers: [index_1.UserService, index_1.CompanyService],
            directives: [router_1.ROUTER_DIRECTIVES, paymentModal_component_1.PaymentModalComponent]
        }), 
        __metadata('design:paramtypes', [index_1.SubDomainService, index_1.LoggedInService, index_1.UserService, index_1.CompanyService, feature_access_service_1.FeatureAuthService, index_1.CookieService, router_1.Router])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBQ3RFLHVCQUF5QyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTNELHNCQUF5RixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzFILHVDQUFpQyxpREFBaUQsQ0FBQyxDQUFBO0FBQ25GLHVDQUFzQyx1REFBdUQsQ0FBQyxDQUFBO0FBQzlGLHdCQUFzQixrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3pELDJCQUF1Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBa0JwRDtJQXdCQywwQkFDUyxpQkFBbUMsRUFDbkMsZUFBZ0MsRUFDakMsWUFBeUIsRUFDekIsZUFBK0IsRUFDOUIsbUJBQXVDLEVBQ3ZDLGNBQTRCLEVBQzdCLE1BQWM7UUFOYixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDOUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBYztRQUM3QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBeEJ0QixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUVoQyxtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFZLElBQUksQ0FBQztRQUdoQyxvQkFBZSxHQUFXLENBQUMsQ0FBQztRQUU1Qix5QkFBb0IsR0FBWSxJQUFJLENBQUM7UUFDckMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2Qiw0QkFBdUIsR0FBRyxLQUFLLENBQUU7UUFFaEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsZUFBVSxHQUFV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LEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRTtnQkFDVix1QkFBdUI7YUFDdkI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxtQkFBVyxFQUFFLHNCQUFjLENBQUM7WUFDeEMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsOENBQXFCLENBQUM7U0FDdEQsQ0FBQzs7d0JBQUE7SUErUUYsdUJBQUM7QUFBRCxDQTdRQSxBQTZRQyxJQUFBO0FBN1FZLHdCQUFnQixtQkE2UTVCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0xvZ2dlZElufSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9sb2dnZWQtaW4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHtMb2dnZWRJblNlcnZpY2UsIFVzZXJTZXJ2aWNlLENvb2tpZVNlcnZpY2UsQ29tcGFueVNlcnZpY2UsU3ViRG9tYWluU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHtGZWF0dXJlQXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9mZWF0dXJlLWFjY2Vzcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF5bWVudE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvcGF5bWVudE1vZGFsL3BheW1lbnRNb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbXBhbnl9IGZyb20gJy4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9jb21wYW55JztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5kZWNsYXJlIHZhciBnYTphbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6YW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ3NkLXRvb2xiYXInLFxyXG5cdHRlbXBsYXRlVXJsOiAndG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQndG9vbGJhci5jb21wb25lbnQuY3NzJ1xyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIENvbXBhbnlTZXJ2aWNlXSxcclxuXHRkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFBheW1lbnRNb2RhbENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHRASW5wdXQoKSBwYWdlOiBzdHJpbmc7XHJcblx0bG9nZ2VkSW46IExvZ2dlZEluO1xyXG5cdG5hbWU6IFN0cmluZztcclxuXHR1c2VySWQgOlN0cmluZztcclxuXHRzdWJEb21haW5FeHQ6IGFueTtcclxuXHRjdXJyZW50VXJsOiBhbnk7XHJcblx0aXNTdWJEb21haW5Vcmw6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHQvLyBoYXNBY2Nlc3M6IEJvb2xlYW4gPSB0cnVlO1xyXG5cdGNvbXBhbnlJbml0aWFsOiBzdHJpbmcgPSAnJztcclxuXHRjb21wYW55TmFtZTogU3RyaW5nID0gJyc7XHJcblx0aXNFbWFpbFZlcmlmaWVkIDpCb29sZWFuID0gdHJ1ZTtcclxuXHQvL3Nob3dMb2dpbjpCb29sZWFuID0gZmFsc2U7XHJcblx0bXlDb21wYW5pZXM6IGFueTtcclxuXHRteWNvbXBhbnlMZW5ndGg6IG51bWJlciA9IDA7XHJcblx0Y286IGFueTtcclxuXHRpc0FuYWx5dGljc0F2YWlsYWJsZTogQm9vbGVhbiA9IHRydWU7XHJcblx0Y29va2llc1N0YXR1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHJlc3BUaXRsZTogc3RyaW5nID0gJyc7XHJcblx0aXNfc3ViY3JpcGlvbl9jYW5jZWxsZWQgPSBmYWxzZSA7XHJcblxyXG4gIGlzQWRtaW5DcmVhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY2FyZFN0YXR1czpzdHJpbmcgPSAnJztcclxuICBzdWJzU3RhdHVzOnN0cmluZyA9ICcnO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfc3ViRG9tYWluU2VydmljZTogU3ViRG9tYWluU2VydmljZSxcclxuXHRcdHByaXZhdGUgbG9nZ2VkSW5TZXJ2aWNlOiBMb2dnZWRJblNlcnZpY2UsXHJcblx0XHRwdWJsaWMgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuXHRcdHB1YmxpYyBfY29tcGFueVNlcnZpY2U6IENvbXBhbnlTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfZmVhdHVyZUF1dGhTZXJ2aWNlOiBGZWF0dXJlQXV0aFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9jb29raWVTZXJ2aWNlOkNvb2tpZVNlcnZpY2UsXHJcblx0XHRwdWJsaWMgcm91dGVyOiBSb3V0ZXJcclxuXHQpIHtcclxuXHRcdC8qY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKTtcclxuXHRcdGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XHJcblx0XHRsZXQgdXJsX2FycmF5ID0gdXJsLnNwbGl0KCcuJyk7XHJcblx0XHRpZih1cmxfYXJyYXkubGVuZ3RoID09PSAzKSB7XHJcblx0XHRcdHRoaXMuc2hvd0xvZ2luID0gdHJ1ZTtcclxuXHRcdH0qL1xyXG5cdFx0Ly8gbGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0Ly8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdC8vICAgY29uc29sZS5sb2coc2VsZi5sb2dnZWRJbik7XHJcblx0XHQvLyB9LCAyMDAwKTtcclxuXHJcblx0XHR0aGlzLmxvZ2dlZEluID0gbG9nZ2VkSW5TZXJ2aWNlLmxvZ2dlZEluO1xyXG5cdFx0bGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKF9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnY29va2llIHN0b3JhZ2UnLHN0b3JhZ2UpO1xyXG5cdFx0aWYgKHN0b3JhZ2UgIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5uYW1lICAgPSBzdG9yYWdlLnVzZXIubmFtZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuaXNTdWJEb21haW5VcmwgPSB0aGlzLl9zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5pc19zdWJfZG9tYWluX3VybDtcclxuXHRcdGlmICh0aGlzLmlzU3ViRG9tYWluVXJsKSB7XHJcblx0XHRcdHRoaXMuY29tcGFueUluaXRpYWwgPSB0aGlzLl9zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5zdWJfZG9tYWluLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIFx0dGhpcy5jb21wYW55TmFtZSA9IHRoaXMuX3N1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLl9zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5zdWJfZG9tYWluLnNsaWNlKDEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIGpRdWVyeSgnLmNvb2tpZXMtaGVhZGVyJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdGpRdWVyeSh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBzY3JvbGwgPSBqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHRcdGlmIChzY3JvbGwgPj0gMTAwKSB7XHJcblx0XHRcdFx0alF1ZXJ5KFwiLm5hdmJhci1maXhlZC10b3BcIikuYWRkQ2xhc3MoXCJoZWFkZXItYm94c2hhZG93XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGpRdWVyeShcIi5uYXZiYXItZml4ZWQtdG9wXCIpLnJlbW92ZUNsYXNzKFwiaGVhZGVyLWJveHNoYWRvd1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoYXNBY2Nlc3MnKSlcclxuXHRcdC8vIFx0dGhpcy5oYXNBY2Nlc3MgPSA8Qm9vbGVhbj5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGFzQWNjZXNzJyk7XHJcblx0XHR0aGlzLmN1cnJlbnRVcmwgPSAnJztcclxuXHRcdGlmICh0aGlzLmxvZ2dlZEluLmlzTG9nZ2VkSW4pXHJcblx0XHRcdHRoaXMuZ2V0Q29tcGFuaWVzKCk7XHJcblx0XHR0aGlzLnN1YkRvbWFpbkV4dCA9ICcuJyArIENvbmZpZy5BUFBfRVhURU5TSU9OO1xyXG5cclxuXHRcdC8vdGhpcy5sb2dnZWRJbiA9IHRoaXMubG9nZ2VkSW5TZXJ2aWNlLmxvZ2dlZEluO1xyXG5cdFx0bGV0IHN1Yl9kb21haW4gPSB0aGlzLl9zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5zdWJfZG9tYWluO1xyXG4gICAgXHRsZXQgY29tcGFueUFjY2VzcyA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nKSk7XHJcblx0XHRsZXQgc3RvcmFnZSA6IGFueSA9IHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpO1xyXG5cdFx0aWYgKHN0b3JhZ2UpIHtcclxuXHRcdFx0c3RvcmFnZSA9IEpTT04ucGFyc2Uoc3RvcmFnZSk7XHJcblx0XHRcdHRoaXMubmFtZSAgID0gc3RvcmFnZS51c2VyLm5hbWU7XHJcblx0XHRcdHRoaXMudXNlcklkID0gc3RvcmFnZS51c2VyLl9pZDtcclxuXHRcdFx0dGhpcy5pc0FkbWluQ3JlYXRlZCA9IHN0b3JhZ2UuY29tcGFueS5pc19hZG1pbl9jcmVhdGVkO1xyXG5cdFx0XHR0aGlzLmlzRW1haWxWZXJpZmllZCA9IGZhbHNlO1xyXG5cdFx0XHRpZihzdG9yYWdlLnVzZXIuZW1haWxzWzBdLnZlcmlmaWNhdGlvbi5jb21wbGV0ZSl7XHJcblx0XHRcdFx0dGhpcy5pc0VtYWlsVmVyaWZpZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHN1YnNjcmlwdGlvbl9zdGF0dXMgPSAnJztcclxuXHRcdGlmIChjb21wYW55QWNjZXNzKVxyXG5cdFx0Y29tcGFueUFjY2Vzcy5mb3JFYWNoKChlOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKGUua2V5ID09PSBzdWJfZG9tYWluKSB7XHJcblx0XHRcdHN1YnNjcmlwdGlvbl9zdGF0dXMgPSBlLnZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGlmKHN1YnNjcmlwdGlvbl9zdGF0dXM9PT0nY2FuY2VsbGVkJyl7XHJcblx0XHRcdHRoaXMuaXNfc3ViY3JpcGlvbl9jYW5jZWxsZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Ly8gaWYod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZigndmVudHVyZXBhY3QnKSlcclxuXHRcdC8vIFx0dGhpcy5jbyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcuJylbMF0uc3BsaXQoJy8vJylbMV07XHJcblx0XHQvLyBlbHNlIGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ291dGdyb3cnKSlcclxuXHRcdC8vIFx0dGhpcy5jbyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcuJylbMF0uc3BsaXQoJy8vJylbMV07XHJcblx0XHR0aGlzLmNvID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJy8vJylbMV0uc3BsaXQoJy4nKVswXTtcclxuXHRcdHRoaXMucmVzcFRpdGxlID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJy8vJylbMV0uc3BsaXQoJy8nKVsxXTtcclxuXHRcdGlmICh0aGlzLmNvICE9PSAnYXBwJyAmJiB0aGlzLmxvZ2dlZEluLmlzTG9nZ2VkSW4pIHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZygnY28nLHRoaXMuY28pO1xyXG5cdFx0XHR0aGlzLl9jb21wYW55U2VydmljZS5pc1N1YkRvbWFpbkV4aXN0KHRoaXMuY28pXHJcblx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoc3VjY2VzczogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29tcGFueScsIHN1Y2Nlc3MuX2lkKTtcclxuXHRcdFx0XHRcdHRoaXMuX2NvbXBhbnlTZXJ2aWNlLmdldENvbXBhbnlVc2VycyhzdWNjZXNzLl9pZClcclxuXHRcdFx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRcdFx0KHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3VjY2Vzcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHN1Y2Nlc3NbaV0udXNlcm5hbWUgPT09IHN0b3JhZ2UudXNlci51c2VybmFtZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncm9sZScsIHN1Y2Nlc3NbaV0udXNlcl9jb21wYW55LnJvbGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl9jb29raWVTZXJ2aWNlLmNyZWF0ZUNvb2tpZSgncm9sZScsc3VjY2Vzc1tpXS51c2VyX2NvbXBhbnkucm9sZSwzKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHQoZXJyb3I6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coJ2NvbXBhbnkgdXNlcnMgRXJyb3InLCBlcnJvcik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdChlcnJvcjogYW55KSA9PiB7XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKCdjb21wYW55IEVycm9yJywgZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKVxyXG5cdFx0XHR0aGlzLmlzQW5hbHl0aWNzQXZhaWxhYmxlID0gdGhpcy5fZmVhdHVyZUF1dGhTZXJ2aWNlLmZlYXR1cmVzLmFuYWx5dGljcztcclxuXHJcblxyXG5cdFx0LypsZXQgc3RvcmFnZSA6IGFueSA9IHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpO1xyXG5cdFx0aWYgKHN0b3JhZ2UpIHtcclxuXHRcdHN0b3JhZ2UgPSBKU09OLnBhcnNlKHN0b3JhZ2UpO1xyXG5cdFx0dGhpcy5pc0FkbWluQ3JlYXRlZCA9IHN0b3JhZ2UudXNlci5pc19hZG1pbl9jcmVhdGVkO1xyXG5cdFx0fSovXHJcblx0XHR0aGlzLmNhcmRTdGF0dXMgPSAnJztcclxuXHRcdHRoaXMuc3Vic1N0YXR1cyA9ICcnO1xyXG5cdFx0bGV0IHN0YXR1czogYW55ID0gdGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdGF0dXMnKTtcclxuXHRcdGlmKHN0YXR1cyl7XHJcblx0XHRcdHN0YXR1cyA9IEpTT04ucGFyc2Uoc3RhdHVzKTtcclxuXHRcdFx0dGhpcy5jYXJkU3RhdHVzID0gc3RhdHVzLmNhcmRTdGF0dXM7XHJcblx0XHRcdHRoaXMuc3Vic1N0YXR1cyA9IHN0YXR1cy5zdWJzU3RhdHVzO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5pc0FkbWluQ3JlYXRlZCAmJiAodGhpcy5zdWJzU3RhdHVzID09PSAnY2FuY2VsbGVkJyB8fCB0aGlzLnN1YnNTdGF0dXMgPT09ICdmdXR1cmUnKSl7XHJcblx0XHRcdGpRdWVyeSgnI25ldy1zZXR1cC1wYXltZW50JykubW9kYWwoe2JhY2tkcm9wOiAnc3RhdGljJywga2V5Ym9hcmQ6IGZhbHNlfSk7XHJcblx0XHRcdGpRdWVyeSgnI25ldy1zZXR1cC1wYXltZW50JykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbigpO1xyXG5cdH1cclxuXHJcblx0c2hvd05vdGlmaWNhdGlvbigpe1xyXG5cdFx0aWYodGhpcy5pc0VtYWlsVmVyaWZpZWQ9PT1mYWxzZSl7XHJcblx0XHRcdFx0alF1ZXJ5KCcjbWFpbi1kaXYnKS5hZGRDbGFzcygnc2V0dGluZ3MtY29va2llcycpO1xyXG5cdFx0XHRcdGpRdWVyeSgnI25ldy1oZWFkZXInKS5hZGRDbGFzcygnY29va2llcy1wYXJlbnQnKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Z2V0Q29tcGFuaWVzKCkge1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy5fY29tcGFueVNlcnZpY2UuZ2V0Q29tcGFuaWVzKClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0KGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRcdHNlbGYubXlDb21wYW5pZXMgPSBbXTtcclxuXHRcdFx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHRcdFx0ZGF0YS5mb3JFYWNoKChjb21wYW55OiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGNvbXBhbnkudXNlcl9jb21wYW55LnN0YXR1cyAhPT0gJ0xFRlQnICYmIGNvbXBhbnkudXNlcl9jb21wYW55LnN0YXR1cyAhPT0gJ0RFTEVURUQnICYmIGNvbXBhbnkudXNlcl9jb21wYW55LnN0YXR1cyAhPT0gJ1JFUVVFU1RFRCcgJiYgY29tcGFueS51c2VyX2NvbXBhbnkuYWN0aXZlKSB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZi5teUNvbXBhbmllcy5wdXNoKG5ldyBDb21wYW55KGNvbXBhbnkpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNlbGYubXljb21wYW55TGVuZ3RoID0gc2VsZi5teUNvbXBhbmllcy5sZW5ndGg7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRqUXVlcnkoJy5zbGltc2Nyb2xsJykuc2xpbXNjcm9sbCh7XHJcblx0XHRcdFx0XHRcdHJhaWxWaXNpYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRhbHdheXNWaXNpYmxlOiB0cnVlXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQocmVzcG9uc2U6IGFueSkgPT4ge1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coJ3VzZXJzX2NvbXBhbmllcyBlcnJvciB0b29sYmFyJywgcmVzcG9uc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cclxuXHRjaGVja0Nvb2tpZXMoKSB7XHJcblx0XHRpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdTYWZhcmknKSAhPT0gLTEgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEpIHtcclxuXHRcdFx0dGhpcy5jb29raWVzU3RhdHVzID0gbmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQ7XHJcblx0XHRcdGlmICh0aGlzLmNvb2tpZXNTdGF0dXMpIHtcclxuXHRcdFx0XHRqUXVlcnkoJy5jb29raWVzLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblx0XHRcdFx0alF1ZXJ5KCcjbmF2LWNvb2tpZXMtZGl2JykuYWRkQ2xhc3MoJ2Nvb2tpZXMtcGFyZW50Jyk7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhqUXVlcnkoJy5uYXZiYXItZml4ZWQtdG9wJykucGFyZW50KCcubWFpbi1kaXYnKSwnc2pkYmZqa3NkYmhqc2RiaCEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEnKTtcclxuXHRcdFx0XHRqUXVlcnkoJy5uYXZiYXItZml4ZWQtdG9wJykucGFyZW50KCcubWFpbi1kaXYnKS5hZGRDbGFzcygnY29va2llcy1tYWluJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlc2VuZEVtYWlsKCkge1xyXG5cdFx0dGhpcy5fdXNlclNlcnZpY2UucmVzZW5kRW1haWwodGhpcy51c2VySWQpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdChzdWNjZXNzOiBhbnkpID0+IHtcclxuXHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ0VtYWlsIGhhcyBiZWVuIHNlbnQsIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsLicpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQoZXJyb3I6IGFueSkgPT4ge1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coJ2NvbXBhbnkgRXJyb3InLCBlcnJvcik7XHJcblx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblxyXG5cclxuXHRvbkxvZ291dCgpIHtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkb2luZ0xvZ291dCcsICd0cnVlJyk7XHJcblx0XHR0aGlzLl91c2VyU2VydmljZS5sb2dvdXQoKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5sb2dnZWRJblNlcnZpY2UubG9nb3V0KCk7XHJcblx0XHRcdFx0Ly8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gQ29uZmlnLkFQUF9ET01BSU47XHJcblx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblxyXG5cdGNsb3NlKCkge1xyXG5cdFx0alF1ZXJ5KCcuY29va2llcy1oZWFkZXInKS5hZGRDbGFzcygnaGlkZScpO1xyXG5cdFx0alF1ZXJ5KCcjbWFpbi1kaXYnKS5yZW1vdmVDbGFzcygnc2V0dGluZ3MtY29va2llcycpO1xyXG5cdFx0alF1ZXJ5KCcjbmV3LWhlYWRlcicpLnJlbW92ZUNsYXNzKCdjb29raWVzLXBhcmVudCcpO1xyXG5cdH1cclxuXHJcblx0LypzZXRDdXJyZW50VXJsKGNvbXBhbnk6YW55KXtcclxuXHRcdGxldCBjdXJVcmxEb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3BsaXQoJy4nKVswXTtcclxuXHRcdGlmKGN1clVybERvbWFpbiAhPSBjb21wYW55LnN1Yl9kb21haW4pe1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29tcGFueScsY29tcGFueS5pZCk7XHJcblx0XHRcdGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicsJ2h0dHA6Ly8nK2NvbXBhbnkuc3ViX2RvbWFpbit0aGlzLnN1YkRvbWFpbkV4dCsnOjU1NTUnKTtcclxuXHRcdH1cclxuXHR9Ki9cclxuXHJcblx0YW5hbHl0aWNzQ2xpY2soZXZlbnQ6IGFueSkge1xyXG5cdFx0dGhpcy5pc0FuYWx5dGljc0F2YWlsYWJsZSA9IHRoaXMuX2ZlYXR1cmVBdXRoU2VydmljZS5mZWF0dXJlcy5hbmFseXRpY3M7XHJcblx0XHRpZiAoIXRoaXMuaXNBbmFseXRpY3NBdmFpbGFibGUpIHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0alF1ZXJ5KCcjcHJlbWl1bU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0alF1ZXJ5KCcjYW5hbHl0aWNzUmVmJykuYXR0cignYWN0aXZlJyxmYWxzZSk7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRqUXVlcnkoJyNhbmFseXRpY3NSZWYnKS5hdHRyKCdhY3RpdmUnLHRydWUpO1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hbmFseXRpY3MnXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGhlYWRlcih0aXRsZTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnJlc3BUaXRsZSA9IHRpdGxlO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyh0aXRsZSk7XHJcblx0fVxyXG5cclxuXHRjYWxsR0EoKSB7XHJcblx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdSZXNlbmRWZXJpZmljYXRpb25FbWFpbCcsICdDbGljaycsICdEYXNoYm9hcmQnKTtcclxuICAgIFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ1Jlc2VuZCB2ZXJpZmljYXRpb24gZW1haWwgbGluayBjbGljayddKTtcclxuXHR9XHJcbn1cclxuIl19
