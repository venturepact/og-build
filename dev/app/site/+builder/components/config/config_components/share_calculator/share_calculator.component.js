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
var JSONBuilder_service_1 = require('../../../../services/JSONBuilder.service');
var env_config_1 = require('../../../../../../config/env.config');
var index_1 = require('../../../../../../shared/services/index');
var UrlShortner_service_1 = require('../../../../services/UrlShortner.service');
var ConfigShareCalculatorComponent = (function () {
    function ConfigShareCalculatorComponent(jsonBuilderHelper, subDomainService, _urlShortner) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.subDomainService = subDomainService;
        this._urlShortner = _urlShortner;
        this.twitterSrcUrl = "https://twitter.com/intent/tweet";
        this.linkedInSrcUrl = "https://www.linkedin.com/shareArticle?mini=true&url=\n   " + this.srcUrl + "\n    &title=Check%20out%20my%20utgrow%20Calculator\n                &summary=My%20Awesome%20Calculator&source=LinkedIn";
    }
    ConfigShareCalculatorComponent.prototype.ngOnInit = function () {
        console.log('Init of shared calculator');
        this.srcUrl = env_config_1.Config.PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        this.srcUrl = env_config_1.Config.PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        this.twitterSrcUrl = "https://twitter.com/intent/tweet?status=" + encodeURI(this.jsonBuilderHelper.getJSONBuilt().name) + "+" + this.srcUrl;
        this.linkedInSrcUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + this.srcUrl + "&title=" + encodeURI(this.jsonBuilderHelper.getJSONBuilt().name) + "\n                &summary=" + encodeURI(this.jsonBuilderHelper.getJSONBuilt().name) + "&source=LinkedIn";
    };
    ConfigShareCalculatorComponent.prototype.copyButton = function () {
        clipboard.copy(jQuery('#inputName')[0].value);
        window.toastNotification('Link Copied');
    };
    ConfigShareCalculatorComponent.prototype.ngAfterViewInit = function () {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1583386878623593',
                xfbml: true,
                version: 'v2.7'
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };
    ConfigShareCalculatorComponent.prototype.facebookShare = function () {
        FB.ui({
            method: 'feed',
            display: 'popup',
            name: this.jsonBuilderHelper.getJSONBuilt().title,
            description: this.jsonBuilderHelper.getJSONBuilt().description,
            link: this.srcUrl
        }, function (response) { });
    };
    ConfigShareCalculatorComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case "COPYLINK":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'CopyLink');
                _kmq.push(['record', 'Builder Copy Link']);
                break;
            case "FBSHARE":
                ga('markettingteam.send', 'event', 'Builder', 'Share', 'FacebookShare');
                _kmq.push(['record', 'Builder Facebook Share']);
                break;
            case "LISHARE":
                ga('markettingteam.send', 'event', 'Builder', 'Share', 'LinkedInShare');
                _kmq.push(['record', 'Builder LinkedIn Share']);
                break;
            case "TSHARE":
                ga('markettingteam.send', 'event', 'Builder', 'Share', 'TwitterShare');
                _kmq.push(['record', 'Builder Twitter Share']);
                break;
        }
    };
    ConfigShareCalculatorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'config-share-calculator',
            templateUrl: 'assets/html/share_calculator.template.html',
            providers: [UrlShortner_service_1.UrlShortner],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, index_1.SubDomainService, UrlShortner_service_1.UrlShortner])
    ], ConfigShareCalculatorComponent);
    return ConfigShareCalculatorComponent;
}());
exports.ConfigShareCalculatorComponent = ConfigShareCalculatorComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29uZmlnL2NvbmZpZ19jb21wb25lbnRzL3NoYXJlX2NhbGN1bGF0b3Ivc2hhcmVfY2FsY3VsYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrRSxlQUFlLENBQUMsQ0FBQTtBQUNsRixvQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQUN2RSwyQkFBdUIscUNBQXFDLENBQUMsQ0FBQTtBQUM3RCxzQkFBaUMseUNBQXlDLENBQUMsQ0FBQTtBQUMzRSxvQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQWdCdkU7SUFDSSx3Q0FBb0IsaUJBQThCLEVBQVUsZ0JBQWtDLEVBQVUsWUFBeUI7UUFBN0csc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRWpJLGtCQUFhLEdBQVEsa0NBQWtDLENBQUM7UUFDeEQsbUJBQWMsR0FBUSwyREFDdEIsR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLHlIQUUrQyxDQUFDO0lBTnFFLENBQUM7SUFRdEksaURBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxtQkFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUUxSixJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxtQkFBTSxDQUFDLGFBQWEsR0FB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QztnQkFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELEtBQUssQ0FBQztZQUNWLEtBQUssU0FBUztnQkFDVixFQUFFLENBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLENBQUM7WUFDVixLQUFLLFFBQVE7Z0JBQ1QsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLHVCQUF1QixDQUFDLENBQUMsQ0FBQztnQkFDL0MsS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUExRkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsV0FBVyxFQUFFLDRDQUE0QztZQUN6RCxTQUFTLEVBQUUsQ0FBQyxpQ0FBVyxDQUFDO1lBQ3hCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1NBQ3hDLENBQUM7O3NDQUFBO0lBcUZGLHFDQUFDO0FBQUQsQ0FuRkEsQUFtRkMsSUFBQTtBQW5GWSxzQ0FBOEIsaUNBbUYxQyxDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29uZmlnL2NvbmZpZ19jb21wb25lbnRzL3NoYXJlX2NhbGN1bGF0b3Ivc2hhcmVfY2FsY3VsYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy9lbnYuY29uZmlnJztcclxuaW1wb3J0IHsgU3ViRG9tYWluU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IFVybFNob3J0bmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvVXJsU2hvcnRuZXIuc2VydmljZSc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBGQjogYW55O1xyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuZGVjbGFyZSB2YXIgY2xpcGJvYXJkOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnY29uZmlnLXNoYXJlLWNhbGN1bGF0b3InLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhc3NldHMvaHRtbC9zaGFyZV9jYWxjdWxhdG9yLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbVXJsU2hvcnRuZXJdLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NoYXJlQ2FsY3VsYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlciwgcHJpdmF0ZSBzdWJEb21haW5TZXJ2aWNlOiBTdWJEb21haW5TZXJ2aWNlLCBwcml2YXRlIF91cmxTaG9ydG5lcjogVXJsU2hvcnRuZXIpIHsgfVxyXG4gICAgc3JjVXJsOiBhbnk7XHJcbiAgICB0d2l0dGVyU3JjVXJsOiBhbnkgPSBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXRgO1xyXG4gICAgbGlua2VkSW5TcmNVcmw6IGFueSA9IGBodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSZ1cmw9XHJcbiAgIGArIHRoaXMuc3JjVXJsICsgYFxyXG4gICAgJnRpdGxlPUNoZWNrJTIwb3V0JTIwbXklMjB1dGdyb3clMjBDYWxjdWxhdG9yXHJcbiAgICAgICAgICAgICAgICAmc3VtbWFyeT1NeSUyMEF3ZXNvbWUlMjBDYWxjdWxhdG9yJnNvdXJjZT1MaW5rZWRJbmA7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0luaXQgb2Ygc2hhcmVkIGNhbGN1bGF0b3InKTtcclxuICAgICAgICB0aGlzLnNyY1VybCA9IENvbmZpZy5QUk9UT0NPTCArIHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbiArICcuJyArIENvbmZpZy5BUFBfRVhURU5TSU9OICsgJy8nICsgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS51cmw7XHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuc3JjVXJsID0gQ29uZmlnLlBST1RPQ09MICsgdGhpcy5zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5zdWJfZG9tYWluICsgJy4nICsgQ29uZmlnLkFQUF9FWFRFTlNJT04gKyAnLycgKyB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybDtcclxuICAgICAgICB0aGlzLnR3aXR0ZXJTcmNVcmwgPSBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/c3RhdHVzPWAgKyBlbmNvZGVVUkkodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lKSArIGArYCArIHRoaXMuc3JjVXJsO1xyXG4gICAgICAgIHRoaXMubGlua2VkSW5TcmNVcmwgPSBgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPWAgKyB0aGlzLnNyY1VybCArIGAmdGl0bGU9YCArIGVuY29kZVVSSSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUpICsgYFxyXG4gICAgICAgICAgICAgICAgJnN1bW1hcnk9YCsgZW5jb2RlVVJJKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZSkgKyBgJnNvdXJjZT1MaW5rZWRJbmA7XHJcbiAgXHJcbiAgICB9XHJcblxyXG4gICAgY29weUJ1dHRvbigpIHtcclxuICAgICAgICBjbGlwYm9hcmQuY29weShqUXVlcnkoJyNpbnB1dE5hbWUnKVswXS52YWx1ZSk7XHJcbiAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdMaW5rIENvcGllZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAvL0luaXRpYWxpemUgRkJcclxuICAgICAgICB3aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIEZCLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgYXBwSWQ6ICcxNTgzMzg2ODc4NjIzNTkzJyxcclxuICAgICAgICAgICAgICAgIHhmYm1sOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogJ3YyLjcnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIChmdW5jdGlvbiAoZDogYW55LCBzOiBhbnksIGlkOiBhbnkpIHtcclxuICAgICAgICAgICAgdmFyIGpzOiBhbnksIGZqczogYW55ID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcclxuICAgICAgICAgICAgaWYgKGQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTsganMuaWQgPSBpZDtcclxuICAgICAgICAgICAganMuc3JjID0gXCIvL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1wiO1xyXG4gICAgICAgICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XHJcbiAgICAgICAgfSAoZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFjZWJvb2tTaGFyZSgpIHtcclxuICAgICAgICAvLyBGQi51aSh7XHJcbiAgICAgICAgLy8gICAgIG1ldGhvZDogJ3NoYXJlJyxcclxuICAgICAgICAvLyAgICAgZGlzcGxheTogJ3BvcHVwJyxcclxuICAgICAgICAvLyAgICAgbmFtZTogdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lLFxyXG4gICAgICAgIC8vICAgICBjYXB0aW9uOiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUsXHJcbiAgICAgICAgLy8gICAgIGRlc2NyaXB0aW9uOiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC8vICAgICBocmVmOiB0aGlzLnNyY1VybCxcclxuICAgICAgICAvLyB9LCBmdW5jdGlvbiAocmVzcG9uc2U6IGFueSkgeyB9KTtcclxuICAgICAgICBGQi51aSh7XHJcblx0XHRcdG1ldGhvZDogJ2ZlZWQnLFxyXG5cdFx0XHRkaXNwbGF5OiAncG9wdXAnLFxyXG5cdFx0XHRuYW1lOiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnRpdGxlLFxyXG5cdFx0XHQvL2NhcHRpb246IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGl0bGUsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmRlc2NyaXB0aW9uLFxyXG5cdFx0XHRsaW5rOiB0aGlzLnNyY1VybFxyXG5cdFx0fSwgZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbEdBKG9wdDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoIChvcHQpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkNPUFlMSU5LXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ0NsaWNrJywgJ0NvcHlMaW5rJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBDb3B5IExpbmsnXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkZCU0hBUkVcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnU2hhcmUnLCAnRmFjZWJvb2tTaGFyZScpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgRmFjZWJvb2sgU2hhcmUnXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkxJU0hBUkVcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnU2hhcmUnLCAnTGlua2VkSW5TaGFyZScpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgTGlua2VkSW4gU2hhcmUnXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlRTSEFSRVwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdTaGFyZScsICdUd2l0dGVyU2hhcmUnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIFR3aXR0ZXIgU2hhcmUnXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
