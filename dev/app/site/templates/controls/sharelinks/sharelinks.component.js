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
var analytic_service_1 = require('../../services/analytic.service');
var index_1 = require('../../../../shared/services/index');
var env_config_1 = require('../../../../config/env.config');
var JSONBuilder_service_1 = require('../../../+builder/services/JSONBuilder.service');
var UrlShortner_service_1 = require('../../../+builder/services/UrlShortner.service');
var ShareLinks = (function () {
    function ShareLinks(_analyticService, subDomainService, jsonBuilderHelper, _urlShortner) {
        this._analyticService = _analyticService;
        this.subDomainService = subDomainService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._urlShortner = _urlShortner;
    }
    ShareLinks.prototype.redirectto = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    ShareLinks.prototype.ngOnInit = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical')
            this.title = this.jsonBuilderHelper.getJSONBuilt().name;
        else
            this.title = this.jsonBuilderHelper.getSelectedFormula().name;
        this.resultLink = env_config_1.Config.PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        this.mailSrcUrl = 'mailto:?Subject=Calculator Result&Body=' + this.resultLink;
        this.twitterSrcUrl = "https://twitter.com/intent/tweet?status=" + encodeURI(this.title) + "+" + this.resultLink;
        this.linkedInSrcUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + this.resultLink + "&title=" + encodeURI(this.title) + "\n                &summary=" + encodeURI(this.title) + "&source=LinkedIn";
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1583386878623593',
                xfbml: true,
                version: 'v2.7'
            });
        };
    };
    ShareLinks.prototype.updateResultLink = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical')
            this.title = this.jsonBuilderHelper.getJSONBuilt().name;
        else
            this.title = "I Got " + this.jsonBuilderHelper.getSelectedFormula().name;
        this.resultLink = env_config_1.Config.PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        this.mailSrcUrl = 'mailto:?Subject=Calculator Result&Body=' + this.resultLink;
        this.twitterSrcUrl = "https://twitter.com/intent/tweet?status=" + encodeURI(this.title) + "+" + this.resultLink;
        this.linkedInSrcUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + this.resultLink + "&title=" + encodeURI(this.title) + "\n                &summary=" + encodeURI(this.title) + "&source=LinkedIn";
    };
    ShareLinks.prototype.facebookShare = function () {
        this.updateResultLink();
        FB.ui({
            method: 'share',
            display: 'popup',
            name: this.title,
            caption: this.title,
            description: this.jsonBuilderHelper.getJSONBuilt().description,
            href: this.resultLink,
        }, function (response) {
        });
    };
    ShareLinks.prototype.isVisible = function (socialMedia) {
        for (var option in this.data.options) {
            if (this.data.options[option].type == socialMedia) {
                return this.data.options[option].selected;
            }
        }
        return true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ShareLinks.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ShareLinks.prototype, "devMode", void 0);
    ShareLinks = __decorate([
        core_1.Component({
            selector: 'share_links',
            viewProviders: [],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n\t<div class=\"share-link\">\n\t\t<ul>\n\t\t\t<li *ngIf=\"isVisible('facebook')\"><a (click)=\"facebookShare()\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t<li *ngIf=\"isVisible('twitter')\"><a target=\"_blank\" [href]=\"twitterSrcUrl\" ><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t<li *ngIf=\"isVisible('linkedin')\"><a target=\"_blank\" [href]=\"linkedInSrcUrl\" ><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t<li *ngIf=\"isVisible('email')\"><a target=\"_blank\" [href]=\"mailSrcUrl\" ><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\n\t\t</ul>\n\t</div>\n",
            providers: [UrlShortner_service_1.UrlShortner]
        }), 
        __metadata('design:paramtypes', [analytic_service_1.AnalyticService, index_1.SubDomainService, JSONBuilder_service_1.JSONBuilder, UrlShortner_service_1.UrlShortner])
    ], ShareLinks);
    return ShareLinks;
}());
exports.ShareLinks = ShareLinks;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9zaGFyZWxpbmtzL3NoYXJlbGlua3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0YsZUFBZSxDQUFDLENBQUE7QUFDbEcsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0JBQWlDLG1DQUFtQyxDQUFDLENBQUE7QUFDckUsMkJBQXVCLCtCQUErQixDQUFDLENBQUE7QUFDdkQsb0NBQTRCLGdEQUFnRCxDQUFDLENBQUE7QUFDN0Usb0NBQTRCLGdEQUFnRCxDQUFDLENBQUE7QUFvQjdFO0lBU0Msb0JBQW9CLGdCQUFpQyxFQUM1QyxnQkFBa0MsRUFDbEMsaUJBQThCLEVBQzlCLFlBQXlCO1FBSGQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUM1QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUMzQixDQUFDO0lBQ1IsK0JBQVUsR0FBVixVQUFXLEdBQVE7UUFDbEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDZCQUFRLEdBQVI7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxJQUFJLFdBQVcsQ0FBQztZQUNyRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDekQsSUFBSTtZQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDO1FBRS9ELElBQUksQ0FBQyxVQUFV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QUFFLENBQUMsaUNBQVcsQ0FBQztTQUN4QixDQUFDOztrQkFBQTtJQTJGRixpQkFBQztBQUFELENBMUZBLEFBMEZDLElBQUE7QUExRlksa0JBQVUsYUEwRnRCLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL2NvbnRyb2xzL3NoYXJlbGlua3Mvc2hhcmVsaW5rcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmFseXRpY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3ViRG9tYWluU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZy9lbnYuY29uZmlnJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8rYnVpbGRlci9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXJsU2hvcnRuZXIgfSBmcm9tICcuLi8uLi8uLi8rYnVpbGRlci9zZXJ2aWNlcy9VcmxTaG9ydG5lci5zZXJ2aWNlJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIEZCOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3NoYXJlX2xpbmtzJyxcclxuXHR2aWV3UHJvdmlkZXJzOiBbXSxcclxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0PGRpdiBjbGFzcz1cInNoYXJlLWxpbmtcIj5cclxuXHRcdDx1bD5cclxuXHRcdFx0PGxpICpuZ0lmPVwiaXNWaXNpYmxlKCdmYWNlYm9vaycpXCI+PGEgKGNsaWNrKT1cImZhY2Vib29rU2hhcmUoKVwiPjxpIGNsYXNzPVwiZmEgZmEtZmFjZWJvb2stc3F1YXJlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHQ8bGkgKm5nSWY9XCJpc1Zpc2libGUoJ3R3aXR0ZXInKVwiPjxhIHRhcmdldD1cIl9ibGFua1wiIFtocmVmXT1cInR3aXR0ZXJTcmNVcmxcIiA+PGkgY2xhc3M9XCJmYSBmYS10d2l0dGVyLXNxdWFyZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0PGxpICpuZ0lmPVwiaXNWaXNpYmxlKCdsaW5rZWRpbicpXCI+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgW2hyZWZdPVwibGlua2VkSW5TcmNVcmxcIiA+PGkgY2xhc3M9XCJmYSBmYS1saW5rZWRpbi1zcXVhcmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdDxsaSAqbmdJZj1cImlzVmlzaWJsZSgnZW1haWwnKVwiPjxhIHRhcmdldD1cIl9ibGFua1wiIFtocmVmXT1cIm1haWxTcmNVcmxcIiA+PGkgY2xhc3M9XCJmYSBmYS1lbnZlbG9wZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9saT5cclxuXHRcdDwvdWw+XHJcblx0PC9kaXY+XHJcbmAsXHJcblx0cHJvdmlkZXJzOiBbVXJsU2hvcnRuZXJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaGFyZUxpbmtzIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBkYXRhOiBhbnk7XHJcblx0QElucHV0KCkgZGV2TW9kZTogYW55O1xyXG5cdHZhbHVlOiBzdHJpbmc7XHJcblx0dHdpdHRlclNyY1VybDogYW55O1xyXG5cdGxpbmtlZEluU3JjVXJsOiBhbnk7XHJcblx0cmVzdWx0TGluazogYW55O1xyXG5cdG1haWxTcmNVcmw6IGFueTtcclxuXHR0aXRsZTogYW55O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2FuYWx5dGljU2VydmljZTogQW5hbHl0aWNTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzdWJEb21haW5TZXJ2aWNlOiBTdWJEb21haW5TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIsXHJcblx0XHRwcml2YXRlIF91cmxTaG9ydG5lcjogVXJsU2hvcnRuZXJcclxuXHRcdFx0XHQpIHsgfVxyXG5cdHJlZGlyZWN0dG8odXJsOiBhbnkpIHtcclxuXHRcdHZhciB3aW4gPSB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxuXHRcdHdpbi5mb2N1cygpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRlbXBsYXRlVHlwZSA9PSAnTnVtZXJpY2FsJylcclxuXHRcdFx0dGhpcy50aXRsZSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy50aXRsZSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRGb3JtdWxhKCkubmFtZTtcclxuXHJcblx0XHR0aGlzLnJlc3VsdExpbmsgPSBDb25maWcuUFJPVE9DT0wgKyB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvJyArIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsO1xyXG5cdFx0dGhpcy5tYWlsU3JjVXJsID0gJ21haWx0bzo/U3ViamVjdD1DYWxjdWxhdG9yIFJlc3VsdCZCb2R5PScgKyB0aGlzLnJlc3VsdExpbms7XHJcblx0XHR0aGlzLnR3aXR0ZXJTcmNVcmwgPSBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/c3RhdHVzPWAgKyBlbmNvZGVVUkkodGhpcy50aXRsZSkgKyBgK2AgKyB0aGlzLnJlc3VsdExpbms7XHJcblx0XHR0aGlzLmxpbmtlZEluU3JjVXJsID0gYGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJnVybD1gICsgdGhpcy5yZXN1bHRMaW5rICsgYCZ0aXRsZT1gICsgZW5jb2RlVVJJKHRoaXMudGl0bGUpICsgYFxyXG4gICAgICAgICAgICAgICAgJnN1bW1hcnk9YCsgZW5jb2RlVVJJKHRoaXMudGl0bGUpICsgYCZzb3VyY2U9TGlua2VkSW5gO1xyXG5cclxuXHRcdC8vSW5pdGlhbGl6ZSBGQlxyXG5cdFx0KGZ1bmN0aW9uIChkOiBhbnksIHM6IGFueSwgaWQ6IGFueSkge1xyXG5cdFx0XHR2YXIganM6IGFueSwgZmpzOiBhbnkgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xyXG5cdFx0XHRpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHsgcmV0dXJuOyB9XHJcblx0XHRcdGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xyXG5cdFx0XHRqcy5zcmMgPSAnLy9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanMnO1xyXG5cdFx0XHRmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XHJcblx0XHR9IChkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpKTtcclxuXHJcblx0XHR3aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdEZCLmluaXQoe1xyXG5cdFx0XHRcdGFwcElkOiAnMTU4MzM4Njg3ODYyMzU5MycsXHJcblx0XHRcdFx0eGZibWw6IHRydWUsXHJcblx0XHRcdFx0dmVyc2lvbjogJ3YyLjcnXHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0fVxyXG5cdHVwZGF0ZVJlc3VsdExpbmsoKSB7XHJcblx0XHQvLyBpZiAoIXRoaXMuZGV2TW9kZSkge1xyXG5cdFx0Ly8gXHRpZiAodGhpcy5fYW5hbHl0aWNTZXJ2aWNlLmdldFZpc2l0b3JLZXkoKSkge1xyXG5cdFx0Ly8gXHRcdHRoaXMucmVzdWx0TGluayA9ICdodHRwOi8vJyArIHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbiArXHJcblx0XHQvLyBcdFx0XHQnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvcmVzdWx0LycgK1xyXG5cdFx0Ly8gXHRcdFx0dGhpcy5fYW5hbHl0aWNTZXJ2aWNlLmdldFZpc2l0b3JLZXkoKTtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfVxyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50ZW1wbGF0ZVR5cGUgPT0gJ051bWVyaWNhbCcpXHJcblx0XHRcdHRoaXMudGl0bGUgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMudGl0bGUgPSBcIkkgR290IFwiKyB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFNlbGVjdGVkRm9ybXVsYSgpLm5hbWU7XHJcblxyXG5cdFx0dGhpcy5yZXN1bHRMaW5rID0gQ29uZmlnLlBST1RPQ09MICsgdGhpcy5zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5zdWJfZG9tYWluICsgJy4nICsgQ29uZmlnLkFQUF9FWFRFTlNJT04gKyAnLycgKyB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybDtcclxuXHRcdHRoaXMubWFpbFNyY1VybCA9ICdtYWlsdG86P1N1YmplY3Q9Q2FsY3VsYXRvciBSZXN1bHQmQm9keT0nICsgdGhpcy5yZXN1bHRMaW5rO1xyXG5cdFx0dGhpcy50d2l0dGVyU3JjVXJsID0gYGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3N0YXR1cz1gICsgZW5jb2RlVVJJKHRoaXMudGl0bGUpICsgYCtgICsgdGhpcy5yZXN1bHRMaW5rO1xyXG5cdFx0dGhpcy5saW5rZWRJblNyY1VybCA9IGBodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSZ1cmw9YCArIHRoaXMucmVzdWx0TGluayArIGAmdGl0bGU9YCArIGVuY29kZVVSSSh0aGlzLnRpdGxlKSArIGBcclxuICAgICAgICAgICAgICAgICZzdW1tYXJ5PWArIGVuY29kZVVSSSh0aGlzLnRpdGxlKSArIGAmc291cmNlPUxpbmtlZEluYDtcclxuXHR9XHJcblxyXG5cdGZhY2Vib29rU2hhcmUoKSB7XHJcblx0XHR0aGlzLnVwZGF0ZVJlc3VsdExpbmsoKTtcclxuXHRcdEZCLnVpKHtcclxuXHRcdFx0bWV0aG9kOiAnc2hhcmUnLFxyXG5cdFx0XHRkaXNwbGF5OiAncG9wdXAnLFxyXG5cdFx0XHRuYW1lOiB0aGlzLnRpdGxlLFxyXG5cdFx0XHRjYXB0aW9uOiB0aGlzLnRpdGxlLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5kZXNjcmlwdGlvbixcclxuXHRcdFx0aHJlZjogdGhpcy5yZXN1bHRMaW5rLFxyXG5cdFx0fSwgZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aXNWaXNpYmxlKHNvY2lhbE1lZGlhOiBhbnkpIHtcclxuXHRcdGZvciAobGV0IG9wdGlvbiBpbiB0aGlzLmRhdGEub3B0aW9ucykge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLm9wdGlvbnNbb3B0aW9uXS50eXBlID09IHNvY2lhbE1lZGlhKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5vcHRpb25zW29wdGlvbl0uc2VsZWN0ZWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG4iXX0=
