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
            this.title = this.jsonBuilderHelper.getJSONBuilt().title;
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
            this.title = this.jsonBuilderHelper.getJSONBuilt().title;
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
            method: 'feed',
            display: 'popup',
            name: this.title,
            description: this.jsonBuilderHelper.getJSONBuilt().description,
            link: this.resultLink
        }, function (response) { });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9zaGFyZWxpbmtzL3NoYXJlbGlua3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0YsZUFBZSxDQUFDLENBQUE7QUFDbEcsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsc0JBQWlDLG1DQUFtQyxDQUFDLENBQUE7QUFDckUsMkJBQXVCLCtCQUErQixDQUFDLENBQUE7QUFDdkQsb0NBQTRCLGdEQUFnRCxDQUFDLENBQUE7QUFDN0Usb0NBQTRCLGdEQUFnRCxDQUFDLENBQUE7QUFvQjdFO0lBU0Msb0JBQW9CLGdCQUFpQyxFQUM1QyxnQkFBa0MsRUFDbEMsaUJBQThCLEVBQzlCLFlBQXlCO1FBSGQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUM1QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUMzQixDQUFDO0lBQ1IsK0JBQVUsR0FBVixVQUFXLEdBQVE7UUFDbEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDZCQUFRLEdBQVI7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxJQUFJLFdBQVcsQ0FBQztZQUNyRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBSTtZQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDO1FBRS9ELElBQUksQ0FBQyxVQUFV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O2tCQUFBO0lBb0dGLGlCQUFDO0FBQUQsQ0FuR0EsQUFtR0MsSUFBQTtBQW5HWSxrQkFBVSxhQW1HdEIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29udHJvbHMvc2hhcmVsaW5rcy9zaGFyZWxpbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuYWx5dGljU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuYWx5dGljLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJEb21haW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVcmxTaG9ydG5lciB9IGZyb20gJy4uLy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL1VybFNob3J0bmVyLnNlcnZpY2UnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgRkI6IGFueTtcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc2hhcmVfbGlua3MnLFxyXG5cdHZpZXdQcm92aWRlcnM6IFtdLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcblx0dGVtcGxhdGU6IGBcclxuXHQ8ZGl2IGNsYXNzPVwic2hhcmUtbGlua1wiPlxyXG5cdFx0PHVsPlxyXG5cdFx0XHQ8bGkgKm5nSWY9XCJpc1Zpc2libGUoJ2ZhY2Vib29rJylcIj48YSAoY2xpY2spPVwiZmFjZWJvb2tTaGFyZSgpXCI+PGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9vay1zcXVhcmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdDxsaSAqbmdJZj1cImlzVmlzaWJsZSgndHdpdHRlcicpXCI+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgW2hyZWZdPVwidHdpdHRlclNyY1VybFwiID48aSBjbGFzcz1cImZhIGZhLXR3aXR0ZXItc3F1YXJlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHQ8bGkgKm5nSWY9XCJpc1Zpc2libGUoJ2xpbmtlZGluJylcIj48YSB0YXJnZXQ9XCJfYmxhbmtcIiBbaHJlZl09XCJsaW5rZWRJblNyY1VybFwiID48aSBjbGFzcz1cImZhIGZhLWxpbmtlZGluLXNxdWFyZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0PGxpICpuZ0lmPVwiaXNWaXNpYmxlKCdlbWFpbCcpXCI+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgW2hyZWZdPVwibWFpbFNyY1VybFwiID48aSBjbGFzcz1cImZhIGZhLWVudmVsb3BlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0PC91bD5cclxuXHQ8L2Rpdj5cclxuYCxcclxuXHRwcm92aWRlcnM6IFtVcmxTaG9ydG5lcl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlTGlua3MgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGRhdGE6IGFueTtcclxuXHRASW5wdXQoKSBkZXZNb2RlOiBhbnk7XHJcblx0dmFsdWU6IHN0cmluZztcclxuXHR0d2l0dGVyU3JjVXJsOiBhbnk7XHJcblx0bGlua2VkSW5TcmNVcmw6IGFueTtcclxuXHRyZXN1bHRMaW5rOiBhbnk7XHJcblx0bWFpbFNyY1VybDogYW55O1xyXG5cdHRpdGxlOiBhbnk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfYW5hbHl0aWNTZXJ2aWNlOiBBbmFseXRpY1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN1YkRvbWFpblNlcnZpY2U6IFN1YkRvbWFpblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcixcclxuXHRcdHByaXZhdGUgX3VybFNob3J0bmVyOiBVcmxTaG9ydG5lclxyXG5cdFx0XHRcdCkgeyB9XHJcblx0cmVkaXJlY3R0byh1cmw6IGFueSkge1xyXG5cdFx0dmFyIHdpbiA9IHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG5cdFx0d2luLmZvY3VzKCk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGVtcGxhdGVUeXBlID09ICdOdW1lcmljYWwnKVxyXG5cdFx0XHR0aGlzLnRpdGxlID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS50aXRsZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy50aXRsZSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0U2VsZWN0ZWRGb3JtdWxhKCkubmFtZTtcclxuXHJcblx0XHR0aGlzLnJlc3VsdExpbmsgPSBDb25maWcuUFJPVE9DT0wgKyB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvJyArIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsO1xyXG5cdFx0dGhpcy5tYWlsU3JjVXJsID0gJ21haWx0bzo/U3ViamVjdD1DYWxjdWxhdG9yIFJlc3VsdCZCb2R5PScgKyB0aGlzLnJlc3VsdExpbms7XHJcblx0XHR0aGlzLnR3aXR0ZXJTcmNVcmwgPSBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/c3RhdHVzPWAgKyBlbmNvZGVVUkkodGhpcy50aXRsZSkgKyBgK2AgKyB0aGlzLnJlc3VsdExpbms7XHJcblx0XHR0aGlzLmxpbmtlZEluU3JjVXJsID0gYGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJnVybD1gICsgdGhpcy5yZXN1bHRMaW5rICsgYCZ0aXRsZT1gICsgZW5jb2RlVVJJKHRoaXMudGl0bGUpICsgYFxyXG4gICAgICAgICAgICAgICAgJnN1bW1hcnk9YCsgZW5jb2RlVVJJKHRoaXMudGl0bGUpICsgYCZzb3VyY2U9TGlua2VkSW5gO1xyXG5cclxuXHRcdC8vSW5pdGlhbGl6ZSBGQlxyXG5cdFx0KGZ1bmN0aW9uIChkOiBhbnksIHM6IGFueSwgaWQ6IGFueSkge1xyXG5cdFx0XHR2YXIganM6IGFueSwgZmpzOiBhbnkgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xyXG5cdFx0XHRpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHsgcmV0dXJuOyB9XHJcblx0XHRcdGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xyXG5cdFx0XHRqcy5zcmMgPSAnLy9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanMnO1xyXG5cdFx0XHRmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XHJcblx0XHR9IChkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpKTtcclxuXHJcblx0XHR3aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdEZCLmluaXQoe1xyXG5cdFx0XHRcdGFwcElkOiAnMTU4MzM4Njg3ODYyMzU5MycsXHJcblx0XHRcdFx0eGZibWw6IHRydWUsXHJcblx0XHRcdFx0dmVyc2lvbjogJ3YyLjcnXHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0fVxyXG5cdHVwZGF0ZVJlc3VsdExpbmsoKSB7XHJcblx0XHQvLyBpZiAoIXRoaXMuZGV2TW9kZSkge1xyXG5cdFx0Ly8gXHRpZiAodGhpcy5fYW5hbHl0aWNTZXJ2aWNlLmdldFZpc2l0b3JLZXkoKSkge1xyXG5cdFx0Ly8gXHRcdHRoaXMucmVzdWx0TGluayA9ICdodHRwOi8vJyArIHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbiArXHJcblx0XHQvLyBcdFx0XHQnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvcmVzdWx0LycgK1xyXG5cdFx0Ly8gXHRcdFx0dGhpcy5fYW5hbHl0aWNTZXJ2aWNlLmdldFZpc2l0b3JLZXkoKTtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfVxyXG5cclxuXHRcdGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRlbXBsYXRlVHlwZSA9PSAnTnVtZXJpY2FsJylcclxuXHRcdFx0dGhpcy50aXRsZSA9IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGl0bGU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMudGl0bGUgPSBcIkkgR290IFwiICsgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRTZWxlY3RlZEZvcm11bGEoKS5uYW1lO1xyXG5cclxuXHRcdHRoaXMucmVzdWx0TGluayA9IENvbmZpZy5QUk9UT0NPTCArIHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbiArICcuJyArIENvbmZpZy5BUFBfRVhURU5TSU9OICsgJy8nICsgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS51cmw7XHJcblx0XHR0aGlzLm1haWxTcmNVcmwgPSAnbWFpbHRvOj9TdWJqZWN0PUNhbGN1bGF0b3IgUmVzdWx0JkJvZHk9JyArIHRoaXMucmVzdWx0TGluaztcclxuXHRcdHRoaXMudHdpdHRlclNyY1VybCA9IGBodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD9zdGF0dXM9YCArIGVuY29kZVVSSSh0aGlzLnRpdGxlKSArIGArYCArIHRoaXMucmVzdWx0TGluaztcclxuXHRcdHRoaXMubGlua2VkSW5TcmNVcmwgPSBgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPWAgKyB0aGlzLnJlc3VsdExpbmsgKyBgJnRpdGxlPWAgKyBlbmNvZGVVUkkodGhpcy50aXRsZSkgKyBgXHJcbiAgICAgICAgICAgICAgICAmc3VtbWFyeT1gKyBlbmNvZGVVUkkodGhpcy50aXRsZSkgKyBgJnNvdXJjZT1MaW5rZWRJbmA7XHJcblx0fVxyXG5cclxuXHRmYWNlYm9va1NoYXJlKCkge1xyXG5cdFx0dGhpcy51cGRhdGVSZXN1bHRMaW5rKCk7XHJcblx0XHQvL3ZhciBpbWFnZSA9ICdodHRwOi8vY2RuLmZpbGVwaWNrZXIuaW8vYXBpL2ZpbGUvU0FNZVdqQ0RSTlNaSmJtMFVOMHMnO1xyXG5cdFx0Ly8gRkIudWkoe1xyXG5cdFx0Ly8gXHRtZXRob2Q6ICdzaGFyZScsXHJcblx0XHQvLyBcdGRpc3BsYXk6ICdwb3B1cCcsXHJcblx0XHQvLyBcdG5hbWU6IHRoaXMudGl0bGUsXHJcblx0XHQvLyBcdGNhcHRpb246IHRoaXMudGl0bGUsXHJcblx0XHQvLyBcdGRlc2NyaXB0aW9uOiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmRlc2NyaXB0aW9uLFxyXG5cdFx0Ly8gXHRocmVmOiB0aGlzLnJlc3VsdExpbmtcclxuXHRcdC8vIFx0Ly9waWN0dXJlOiBpbWFnZVxyXG5cdFx0Ly8gfSwgZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHsgfSk7XHJcblx0XHRGQi51aSh7XHJcblx0XHRcdG1ldGhvZDogJ2ZlZWQnLFxyXG5cdFx0XHRkaXNwbGF5OiAncG9wdXAnLFxyXG5cdFx0XHRuYW1lOiB0aGlzLnRpdGxlLFxyXG5cdFx0XHQvL2NhcHRpb246IHRoaXMudGl0bGUsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmRlc2NyaXB0aW9uLFxyXG5cdFx0XHRsaW5rOiB0aGlzLnJlc3VsdExpbmtcclxuXHRcdH0sIGZ1bmN0aW9uIChyZXNwb25zZTogYW55KSB7IH0pO1xyXG5cdH1cclxuXHJcblx0aXNWaXNpYmxlKHNvY2lhbE1lZGlhOiBhbnkpIHtcclxuXHRcdGZvciAobGV0IG9wdGlvbiBpbiB0aGlzLmRhdGEub3B0aW9ucykge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLm9wdGlvbnNbb3B0aW9uXS50eXBlID09IHNvY2lhbE1lZGlhKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGF0YS5vcHRpb25zW29wdGlvbl0uc2VsZWN0ZWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufVxyXG4iXX0=
