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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jYWxjdWxhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUEwQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVELG1DQUFrQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2xFLG1DQUF5QixrQ0FBa0MsQ0FBQyxDQUFBO0FBQzVELHNCQUFpRSw2QkFBNkIsQ0FBQyxDQUFBO0FBQy9GLDJCQUF1QiwyQkFBMkIsQ0FBQyxDQUFBO0FBY25EO0lBU0ksNkJBQW9CLFdBQThCLEVBQ3RDLGdCQUFrQyxFQUNsQyxlQUFnQyxFQUNoQyxjQUE2QixFQUM3QixPQUFlO1FBSlAsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQ3RDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFUM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUkxQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBT3hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUM1RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9ILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzdC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aUIsRUFBRSw2QkFBUSxDQUFDO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHNDQUFpQixFQUFFLHVCQUFlLENBQUM7U0FDbEQsQ0FBQzs7MkJBQUE7SUEwSkYsMEJBQUM7QUFBRCxDQXhKQSxBQXdKQyxJQUFBO0FBeEpZLDJCQUFtQixzQkF3Si9CLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL2NhbGN1bGF0b3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENhbGN1bGF0b3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYWxjdWxhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGVBbGwvdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3ViRG9tYWluU2VydmljZSwgTG9nZ2VkSW5TZXJ2aWNlLCBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi8uLi8uLi9jb25maWcvZW52LmNvbmZpZyc7XHJcblxyXG5kZWNsYXJlIHZhciBnYTogRnVuY3Rpb247XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdvZy1jYWxjJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnY2FsY3VsYXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFRlbXBsYXRlXSxcclxuICAgIHN0eWxlVXJsczogWydjYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHByb3ZpZGVyczogW0NhbGN1bGF0b3JTZXJ2aWNlLCBMb2dnZWRJblNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgdGVtcE5hbWU6IFN0cmluZztcclxuICAgIHBhZ2VTdGF0dXM6IFN0cmluZztcclxuICAgIGxvZ2dlZEluOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgICBjb21wYW55OiBTdHJpbmc7XHJcbiAgICBKU09OX1RlbXBsYXRlOiBhbnk7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbiAgICBpc0xvZ2dlZGluOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jYWxTZXJ2aWNlOiBDYWxjdWxhdG9yU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHN1YkRvbWFpblNlcnZpY2U6IFN1YkRvbWFpblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2dnZWRJblNlcnZpY2U6IExvZ2dlZEluU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9jb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG4gICAgICAgIGxldCBzdWJfZG9tYWluID0gdGhpcy5zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5zdWJfZG9tYWluO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSAhPSBudWxsICYmIHN0b3JhZ2UudXNlci5yb2xlICE9PSBcIkFETUlOXCIgJiYgc3RvcmFnZS5jb21wYW55TGlzdC5pbmNsdWRlcyhzdWJfZG9tYWluKSlcclxuICAgICAgICAgICAgdGhpcy5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy9nZXQgbmFtZSBmcm9tIHVybFxyXG4gICAgICAgIGxldCBzdG9yYWdlOiBhbnkgPSB0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKTtcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9nZ2VkaW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgbGV0IG5hbWUgPSB1cmwuc3BsaXQoJy8nKVszXTtcclxuICAgICAgICBsZXQgcXVlcnlVUkwgPSAnJztcclxuICAgICAgICAvL1VUTSBDb2RlIFN0YXJ0XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnJlZmVycmVyID09ICcnIHx8IGRvY3VtZW50LnJlZmVycmVyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVVSTCA9IHVybDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBxdWVyeVVSTCA9IGRvY3VtZW50LnJlZmVycmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocXVlcnlVUkwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vbnVsbCBtZWFucyBxdWVyeSBwYXJhbSBpcyBhYnNlbnQsIFwiXCIgKHByZXNlbnQgd2l0aCBubyB2YWx1ZSksIGVsc2UgaXQgd2lsbCByZXR1cm4gYSB2YWx1ZVxyXG4gICAgICAgICAgICB2YXIgdXRtX3NvdXJjZSA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCd1dG1fc291cmNlJywgcXVlcnlVUkwpO1xyXG4gICAgICAgICAgICB2YXIgdXRtX21lZGl1bSA9IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCd1dG1fbWVkaXVtJywgcXVlcnlVUkwpO1xyXG4gICAgICAgICAgICB2YXIgdXRtX2NhbXBhaWduID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ3V0bV9jYW1wYWlnbicsIHF1ZXJ5VVJMKTtcclxuICAgICAgICAgICAgdmFyIHV0bV90ZXJtID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoJ3V0bV90ZXJtJywgcXVlcnlVUkwpO1xyXG4gICAgICAgICAgICB2YXIgdXRtX2NvbnRlbnQgPSB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZSgndXRtX2NvbnRlbnQnLCBxdWVyeVVSTCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1dG1fc291cmNlJywgdXRtX3NvdXJjZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1dG1fbWVkaXVtJywgdXRtX21lZGl1bSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1dG1fY2FtcGFpZ24nLCB1dG1fY2FtcGFpZ24pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXRtX3Rlcm0nLCB1dG1fdGVybSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1dG1fY29udGVudCcsIHV0bV9jb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9VVE0gQ29kZSBFbmRcclxuICAgICAgICBpZiAobmFtZSA9PT0gJ2hpbWFuc2h1JyB8fCBuYW1lLmNoYXJBdCgwKSA9PT0gJz8nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL2dldCBBcHAgYW5kIGluaXRpYWxpemUgcGFnZVxyXG4gICAgICAgICAgICB0aGlzLmluaXRQYWdlKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJhbWV0ZXJCeU5hbWUobmFtZTogYW55LCB1cmw6IGFueSkge1xyXG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXFxcXCQmXCIpO1xyXG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbPyZdXCIgKyBuYW1lICsgXCIoPShbXiYjXSopfCZ8I3wkKVwiKSxcclxuICAgICAgICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcclxuICAgICAgICBpZiAoIXJlc3VsdHMpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmICghcmVzdWx0c1syXSkgcmV0dXJuICcnO1xyXG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0UGFnZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9jYWxTZXJ2aWNlLmdldEFwcChuYW1lKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wYW55ID0gdGhpcy5zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5jb21wYW55X2lkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbXBhbnkgPT0gcmVzcG9uc2UuY29tcGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2dnZWRJbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RlbXBsYXRlJywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9wcmV2aWV3J10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm1vZGUgIT0gJ1BSSVZBVEUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9oYW5kbGUgdHJhY2tpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvb2dsZUFuYWx5dGljcyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVtcGxhdGUnLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSlNPTl9UZW1wbGF0ZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcE5hbWUgPSByZXNwb25zZS50ZW1wbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZVN0YXR1cyA9ICdQcml2YXRlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VTdGF0dXMgPSAnTm90LUZvdW5kJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZVN0YXR1cyA9ICdOb3QtRm91bmQnO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29vZ2xlQW5hbHl0aWNzKGNhbGM6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vb3Vyc1xyXG4gICAgICAgIGdhKCdkZXZ0ZWFtLnNlbmQnLCAncGFnZXZpZXcnLCAnLycgKyBjYWxjLnBhcmVudEFwcCk7XHJcbiAgICAgICAgZ2EoJ2RldnRlYW0uc2VuZCcsICdwYWdldmlldycsICcvJyArIGNhbGMuY29tcGFueSk7XHJcbiAgICAgICAgZ2EoJ2RldnRlYW0uc2VuZCcsICdldmVudCcsIGNhbGMubmFtZSArICcgUGFnZSBWaWV3JywgJ0NhbGN1bGF0b3IgVmlzaXRlZCcsIGNhbGMudXJsKTtcclxuXHJcbiAgICAgICAgLy91c2Vyc1xyXG4gICAgICAgIGlmIChjYWxjLmdhKSB7XHJcbiAgICAgICAgICAgIGdhKCdjcmVhdGUnLCBjYWxjLmdhLCAnYXV0bycsICd1c2VyQ3VzdG9tJyk7XHJcbiAgICAgICAgICAgIGdhKCd1c2VyQ3VzdG9tLnNlbmQnLCAncGFnZXZpZXcnLCAnLycgKyBjYWxjLnVybCk7XHJcbiAgICAgICAgICAgIGdhKCd1c2VyQ3VzdG9tLnNlbmQnLCAnZXZlbnQnLCBjYWxjLm5hbWUgKyAnIFBhZ2UgVmlldycsICdDYWxjdWxhdG9yIFZpc2l0ZWQnLCBjYWxjLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaWNpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5saW5rID0gQ29uZmlnLkFQUF9FWFRFTlNJT047XHJcbiAgICAgICAgbGV0IHByb3RvY29sID0gQ29uZmlnLlBST1RPQ09MO1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmxpbmsgKyAnL3ByaWNpbmcuaHRtbCc7XHJcbiAgICAgICAgalF1ZXJ5KGxvY2F0aW9uKS5hdHRyKCdocmVmJywgcHJvdG9jb2wgKyB1cmwpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmZWF0dXJlcygpIHtcclxuICAgICAgICB0aGlzLmxpbmsgPSBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuICAgICAgICBsZXQgcHJvdG9jb2wgPSBDb25maWcuUFJPVE9DT0w7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMubGluayArICcvZmVhdHVyZXMuaHRtbCc7XHJcbiAgICAgICAgalF1ZXJ5KGxvY2F0aW9uKS5hdHRyKCdocmVmJywgcHJvdG9jb2wgKyB1cmwpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB3aHlDYWxjdWxhdG9ycygpIHtcclxuICAgICAgICB0aGlzLmxpbmsgPSBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuICAgICAgICBsZXQgcHJvdG9jb2wgPSBDb25maWcuUFJPVE9DT0w7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMubGluayArICcvd2h5X2NhbGN1bGF0b3JzLmh0bWwnO1xyXG4gICAgICAgIGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicsIHByb3RvY29sICsgdXJsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhhbXBsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5saW5rID0gQ29uZmlnLkFQUF9FWFRFTlNJT047XHJcbiAgICAgICAgbGV0IHByb3RvY29sID0gQ29uZmlnLlBST1RPQ09MO1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmxpbmsgKyAnL2V4YW1wbGVzLmh0bWwnO1xyXG4gICAgICAgIGpRdWVyeShsb2NhdGlvbikuYXR0cignaHJlZicsIHByb3RvY29sICsgdXJsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIGRhc2hib2FyZCgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xyXG4gICAgfVxyXG59Il19
