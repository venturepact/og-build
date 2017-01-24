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
var calculator_service_1 = require('./services/calculator.service');
var template_component_1 = require('./templateAll/template.component');
var index_1 = require('../../shared/services/index');
var env_config_1 = require('./../../config/env.config');
var CalculatorComponent = (function () {
    function CalculatorComponent(_calService, subDomainService, loggedInService, _cookieService, _router) {
        this._calService = _calService;
        this.subDomainService = subDomainService;
        this.loggedInService = loggedInService;
        this._cookieService = _cookieService;
        this._router = _router;
        this.loggedIn = false;
        this.isLoggedin = false;
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        var sub_domain = this.subDomainService.subDomain.sub_domain;
        if (this._cookieService.readCookie('storage') != null && storage.user.role !== "ADMIN" && storage.companyList.includes(sub_domain))
            this.loggedIn = true;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        var storage = this._cookieService.readCookie('storage');
        if (storage) {
            this.isLoggedin = true;
        }
        var url = window.location.href;
        var name = url.split('/')[3];
        var queryURL = '';
        if (document.referrer == '' || document.referrer == undefined) {
            queryURL = url;
        }
        else {
            queryURL = document.referrer;
        }
        if (queryURL.length) {
            var utm_source = this.getParameterByName('utm_source', queryURL);
            var utm_medium = this.getParameterByName('utm_medium', queryURL);
            var utm_campaign = this.getParameterByName('utm_campaign', queryURL);
            var utm_term = this.getParameterByName('utm_term', queryURL);
            var utm_content = this.getParameterByName('utm_content', queryURL);
        }
        if (name === 'himanshu' || name.charAt(0) === '?') {
            this._router.navigate(['/']);
        }
        else {
            this.initPage(name);
        }
    };
    CalculatorComponent.prototype.getParameterByName = function (name, url) {
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    CalculatorComponent.prototype.initPage = function (name) {
        var _this = this;
        this._calService.getApp(name)
            .subscribe(function (response) {
            _this.company = _this.subDomainService.subDomain.company_id;
            if (response.hasOwnProperty('url')) {
                if (_this.company == response.company) {
                    if (_this.loggedIn) {
                        response.status = 'DEV';
                        localStorage.setItem('template', JSON.stringify(response));
                        _this._router.navigate(['/preview']);
                    }
                    else {
                        if (response.mode != 'PRIVATE') {
                            _this.googleAnalytics(response);
                            _this.JSON_Template = response;
                            _this.tempName = response.template;
                        }
                        else
                            _this.pageStatus = 'Private';
                    }
                }
                else
                    _this.pageStatus = 'Not-Found';
            }
            else
                _this.pageStatus = 'Not-Found';
        }, function (error) {
            console.log(error);
        });
    };
    CalculatorComponent.prototype.googleAnalytics = function (calc) {
        ga('devteam.send', 'pageview', '/' + calc.parentApp);
        ga('devteam.send', 'pageview', '/' + calc.company);
        ga('devteam.send', 'event', calc.name + ' Page View', 'Calculator Visited', calc.url);
        if (calc.ga) {
            ga('create', calc.ga, 'auto', 'userCustom');
            ga('userCustom.send', 'pageview', '/' + calc.url);
            ga('userCustom.send', 'event', calc.name + ' Page View', 'Calculator Visited', calc.url);
        }
    };
    CalculatorComponent.prototype.pricing = function () {
        this.link = env_config_1.Config.APP_EXTENSION;
        var protocol = env_config_1.Config.PROTOCOL;
        var url = this.link + '/pricing.html';
        jQuery(location).attr('href', protocol + url);
    };
    CalculatorComponent.prototype.features = function () {
        this.link = env_config_1.Config.APP_EXTENSION;
        var protocol = env_config_1.Config.PROTOCOL;
        var url = this.link + '/features.html';
        jQuery(location).attr('href', protocol + url);
    };
    CalculatorComponent.prototype.whyCalculators = function () {
        this.link = env_config_1.Config.APP_EXTENSION;
        var protocol = env_config_1.Config.PROTOCOL;
        var url = this.link + '/why_calculators.html';
        jQuery(location).attr('href', protocol + url);
    };
    CalculatorComponent.prototype.examples = function () {
        this.link = env_config_1.Config.APP_EXTENSION;
        var protocol = env_config_1.Config.PROTOCOL;
        var url = this.link + '/examples.html';
        jQuery(location).attr('href', protocol + url);
    };
    CalculatorComponent.prototype.login = function () {
        this._router.navigate(['/login']);
    };
    CalculatorComponent.prototype.dashboard = function () {
        this._router.navigate(['/dashboard']);
    };
    CalculatorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-calc',
            templateUrl: 'calculator.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, template_component_1.Template],
            styleUrls: ['calculator.component.css'],
            providers: [calculator_service_1.CalculatorService, index_1.LoggedInService]
        }), 
        __metadata('design:paramtypes', [calculator_service_1.CalculatorService, index_1.SubDomainService, index_1.LoggedInService, index_1.CookieService, router_1.Router])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jYWxjdWxhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVELG1DQUFrQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2xFLG1DQUF5QixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzVELHNCQUFpRSw2QkFBNkIsQ0FBQyxDQUFBO0FBQy9GLDJCQUF1QiwyQkFBMkIsQ0FBQyxDQUFBO0FBY25EO0lBU0ksNkJBQW9CLFdBQThCLEVBQ3RDLGdCQUFrQyxFQUNsQyxlQUFnQyxFQUNoQyxjQUE2QixFQUM3QixPQUFlO1FBSlAsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQ3RDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFUM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUkxQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBT3hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUM1RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9ILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzdC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RUFBRSwyQkFBMkI7WUFDeEMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsNkJBQVEsQ0FBQztZQUN6QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxTQUFTLEVBQUUsQ0FBQyxzQ0FBaUIsRUFBRSx1QkFBZSxDQUFDO1NBQ2xELENBQUM7OzJCQUFBO0lBMkpGLDBCQUFDO0FBQUQsQ0F6SkEsQUF5SkMsSUFBQTtBQXpKWSwyQkFBbUIsc0JBeUovQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9jYWxjdWxhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDYWxjdWxhdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2FsY3VsYXRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlQWxsL3RlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1YkRvbWFpblNlcnZpY2UsIExvZ2dlZEluU2VydmljZSwgQ29va2llU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5cclxuZGVjbGFyZSB2YXIgZ2E6IEZ1bmN0aW9uO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnb2ctY2FsYycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NhbGN1bGF0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBUZW1wbGF0ZV0sXHJcbiAgICBzdHlsZVVybHM6IFsnY2FsY3VsYXRvci5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBwcm92aWRlcnM6IFtDYWxjdWxhdG9yU2VydmljZSwgTG9nZ2VkSW5TZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbGN1bGF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHRlbXBOYW1lOiBTdHJpbmc7XHJcbiAgICBwYWdlU3RhdHVzOiBTdHJpbmc7XHJcbiAgICBsb2dnZWRJbjogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29tcGFueTogU3RyaW5nO1xyXG4gICAgSlNPTl9UZW1wbGF0ZTogYW55O1xyXG4gICAgbGluazogc3RyaW5nO1xyXG4gICAgaXNMb2dnZWRpbjogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2FsU2VydmljZTogQ2FsY3VsYXRvclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzdWJEb21haW5TZXJ2aWNlOiBTdWJEb21haW5TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbG9nZ2VkSW5TZXJ2aWNlOiBMb2dnZWRJblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfY29va2llU2VydmljZTogQ29va2llU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuICAgICAgICBsZXQgc3ViX2RvbWFpbiA9IHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbjtcclxuICAgICAgICBpZiAodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykgIT0gbnVsbCAmJiBzdG9yYWdlLnVzZXIucm9sZSAhPT0gXCJBRE1JTlwiICYmIHN0b3JhZ2UuY29tcGFueUxpc3QuaW5jbHVkZXMoc3ViX2RvbWFpbikpXHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vZ2V0IG5hbWUgZnJvbSB1cmxcclxuICAgICAgICBsZXQgc3RvcmFnZTogYW55ID0gdGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJyk7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0xvZ2dlZGluID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgIGxldCBuYW1lID0gdXJsLnNwbGl0KCcvJylbM107XHJcbiAgICAgICAgbGV0IHF1ZXJ5VVJMID0gJyc7XHJcbiAgICAgICAgLy9VVE0gQ29kZSBTdGFydFxyXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWZlcnJlciA9PSAnJyB8fCBkb2N1bWVudC5yZWZlcnJlciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlVUkwgPSB1cmw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcXVlcnlVUkwgPSBkb2N1bWVudC5yZWZlcnJlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHF1ZXJ5VVJMLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvL251bGwgbWVhbnMgcXVlcnkgcGFyYW0gaXMgYWJzZW50LCBcIlwiIChwcmVzZW50IHdpdGggbm8gdmFsdWUpLCBlbHNlIGl0IHdpbGwgcmV0dXJuIGEgdmFsdWVcclxuICAgICAgICAgICAgdmFyIHV0bV9zb3VyY2UgPSB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgndXRtX3NvdXJjZScsIHF1ZXJ5VVJMKTtcclxuICAgICAgICAgICAgdmFyIHV0bV9tZWRpdW0gPSB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgndXRtX21lZGl1bScsIHF1ZXJ5VVJMKTtcclxuICAgICAgICAgICAgdmFyIHV0bV9jYW1wYWlnbiA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCd1dG1fY2FtcGFpZ24nLCBxdWVyeVVSTCk7XHJcbiAgICAgICAgICAgIHZhciB1dG1fdGVybSA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCd1dG1fdGVybScsIHF1ZXJ5VVJMKTtcclxuICAgICAgICAgICAgdmFyIHV0bV9jb250ZW50ID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ3V0bV9jb250ZW50JywgcXVlcnlVUkwpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXRtX3NvdXJjZScsIHV0bV9zb3VyY2UpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXRtX21lZGl1bScsIHV0bV9tZWRpdW0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXRtX2NhbXBhaWduJywgdXRtX2NhbXBhaWduKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3V0bV90ZXJtJywgdXRtX3Rlcm0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXRtX2NvbnRlbnQnLCB1dG1fY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vVVRNIENvZGUgRW5kXHJcbiAgICAgICAgaWYgKG5hbWUgPT09ICdoaW1hbnNodScgfHwgbmFtZS5jaGFyQXQoMCkgPT09ICc/Jykge1xyXG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy9nZXQgQXBwIGFuZCBpbml0aWFsaXplIHBhZ2VcclxuICAgICAgICAgICAgdGhpcy5pbml0UGFnZShuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWU6IGFueSwgdXJsOiBhbnkpIHtcclxuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlxcXFwkJlwiKTtcclxuICAgICAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiWz8mXVwiICsgbmFtZSArIFwiKD0oW14mI10qKXwmfCN8JClcIiksXHJcbiAgICAgICAgICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcclxuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFBhZ2UobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fY2FsU2VydmljZS5nZXRBcHAobmFtZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGFueSA9IHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uY29tcGFueV9pZDtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21wYW55ID09IHJlc3BvbnNlLmNvbXBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyA9ICdERVYnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RlbXBsYXRlJywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9wcmV2aWV3J10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm1vZGUgIT0gJ1BSSVZBVEUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9oYW5kbGUgdHJhY2tpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvb2dsZUFuYWx5dGljcyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVtcGxhdGUnLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSlNPTl9UZW1wbGF0ZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcE5hbWUgPSByZXNwb25zZS50ZW1wbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZVN0YXR1cyA9ICdQcml2YXRlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VTdGF0dXMgPSAnTm90LUZvdW5kJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZVN0YXR1cyA9ICdOb3QtRm91bmQnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29vZ2xlQW5hbHl0aWNzKGNhbGM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vb3Vyc1xyXG4gICAgICAgIGdhKCdkZXZ0ZWFtLnNlbmQnLCAncGFnZXZpZXcnLCAnLycgKyBjYWxjLnBhcmVudEFwcCk7XHJcbiAgICAgICAgZ2EoJ2RldnRlYW0uc2VuZCcsICdwYWdldmlldycsICcvJyArIGNhbGMuY29tcGFueSk7XHJcbiAgICAgICAgZ2EoJ2RldnRlYW0uc2VuZCcsICdldmVudCcsIGNhbGMubmFtZSArICcgUGFnZSBWaWV3JywgJ0NhbGN1bGF0b3IgVmlzaXRlZCcsIGNhbGMudXJsKTtcclxuXHJcbiAgICAgICAgLy91c2Vyc1xyXG4gICAgICAgIGlmIChjYWxjLmdhKSB7XHJcbiAgICAgICAgICAgIGdhKCdjcmVhdGUnLCBjYWxjLmdhLCAnYXV0bycsICd1c2VyQ3VzdG9tJyk7XHJcbiAgICAgICAgICAgIGdhKCd1c2VyQ3VzdG9tLnNlbmQnLCAncGFnZXZpZXcnLCAnLycgKyBjYWxjLnVybCk7XHJcbiAgICAgICAgICAgIGdhKCd1c2VyQ3VzdG9tLnNlbmQnLCAnZXZlbnQnLCBjYWxjLm5hbWUgKyAnIFBhZ2UgVmlldycsICdDYWxjdWxhdG9yIFZpc2l0ZWQnLCBjYWxjLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaWNpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5saW5rID0gQ29uZmlnLkFQUF9FWFRFTlNJT047XHJcbiAgICAgICAgbGV0IHByb3RvY29sID0gQ29uZmlnLlBST1RPQ09MO1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmxpbmsgKyAnL3ByaWNpbmcuaHRtbCc7XHJcbiAgICAgICAgalF1ZXJ5KGxvY2F0aW9uKS5hdHRyKCdocmVmJywgcHJvdG9jb2wgKyB1cmwpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmZWF0dXJlcygpIHtcclxuICAgICAgICB0aGlzLmxpbmsgPSBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuICAgICAgICBsZXQgcHJvdG9jb2wgPSBDb25maWcuUFJPVE9DT0w7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMubGluayArICcvZmVhdHVyZXMuaHRtbCc7XHJcbiAgICAgICAgalF1ZXJ5KGxvY2F0aW9uKS5hdHRyKCdocmVmJywgcHJvdG9jb2wgKyB1cmwpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB3aHlDYWxjdWxhdG9ycygpIHtcclxuICAgICAgICB0aGlzLmxpbmsgPSBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuICAgICAgICBsZXQgcHJvdG9jb2wgPSBDb25maWcuUFJPVE9DT0w7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMubGluayArICcvd2h5X2NhbGN1bGF0b3JzLmh0bWwnO1xyXG4gICAgICAgIGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicsIHByb3RvY29sICsgdXJsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhhbXBsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5saW5rID0gQ29uZmlnLkFQUF9FWFRFTlNJT047XHJcbiAgICAgICAgbGV0IHByb3RvY29sID0gQ29uZmlnLlBST1RPQ09MO1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmxpbmsgKyAnL2V4YW1wbGVzLmh0bWwnO1xyXG4gICAgICAgIGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicsIHByb3RvY29sICsgdXJsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIGRhc2hib2FyZCgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xyXG4gICAgfVxyXG59Il19
