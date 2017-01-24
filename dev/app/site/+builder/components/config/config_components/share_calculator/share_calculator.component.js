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
            method: 'share',
            display: 'popup',
            name: this.jsonBuilderHelper.getJSONBuilt().name,
            caption: this.jsonBuilderHelper.getJSONBuilt().name,
            description: this.jsonBuilderHelper.getJSONBuilt().description,
            href: this.srcUrl,
        }, function (response) {
        });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29uZmlnL2NvbmZpZ19jb21wb25lbnRzL3NoYXJlX2NhbGN1bGF0b3Ivc2hhcmVfY2FsY3VsYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrRSxlQUFlLENBQUMsQ0FBQTtBQUNsRixvQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQUN2RSwyQkFBdUIscUNBQXFDLENBQUMsQ0FBQTtBQUM3RCxzQkFBaUMseUNBQXlDLENBQUMsQ0FBQTtBQUMzRSxvQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQWdCdkU7SUFDSSx3Q0FBb0IsaUJBQThCLEVBQVUsZ0JBQWtDLEVBQVUsWUFBeUI7UUFBN0csc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRWpJLGtCQUFhLEdBQVEsa0NBQWtDLENBQUM7UUFDeEQsbUJBQWMsR0FBUSwyREFDdEIsR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFHLHlIQUUrQyxDQUFDO0lBTnFFLENBQUM7SUFRdEksaURBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxtQkFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUUxSixJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxtQkFBTSxDQUFDLGFBQWEsR0FB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QUMscUJBQXFCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7Z0JBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxLQUFLLENBQUM7WUFDVixLQUFLLFNBQVM7Z0JBQ1YsRUFBRSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUN4RSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQztnQkFDaEQsS0FBSyxDQUFDO1lBQ1YsS0FBSyxRQUFRO2dCQUNULEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBbkZMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFdBQVcsRUFBRSw0Q0FBNEM7WUFDekQsU0FBUyxFQUFFLENBQUMsaUNBQVcsQ0FBQztZQUN4QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN4QyxDQUFDOztzQ0FBQTtJQThFRixxQ0FBQztBQUFELENBNUVBLEFBNEVDLElBQUE7QUE1RVksc0NBQThCLGlDQTRFMUMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2NvbmZpZy9jb25maWdfY29tcG9uZW50cy9zaGFyZV9jYWxjdWxhdG9yL3NoYXJlX2NhbGN1bGF0b3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvZW52LmNvbmZpZyc7XHJcbmltcG9ydCB7IFN1YkRvbWFpblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBVcmxTaG9ydG5lciB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL1VybFNob3J0bmVyLnNlcnZpY2UnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgRkI6IGFueTtcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGNsaXBib2FyZDogYW55O1xyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2NvbmZpZy1zaGFyZS1jYWxjdWxhdG9yJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXNzZXRzL2h0bWwvc2hhcmVfY2FsY3VsYXRvci50ZW1wbGF0ZS5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW1VybFNob3J0bmVyXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTaGFyZUNhbGN1bGF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29uQnVpbGRlckhlbHBlcjogSlNPTkJ1aWxkZXIsIHByaXZhdGUgc3ViRG9tYWluU2VydmljZTogU3ViRG9tYWluU2VydmljZSwgcHJpdmF0ZSBfdXJsU2hvcnRuZXI6IFVybFNob3J0bmVyKSB7IH1cclxuICAgIHNyY1VybDogYW55O1xyXG4gICAgdHdpdHRlclNyY1VybDogYW55ID0gYGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0YDtcclxuICAgIGxpbmtlZEluU3JjVXJsOiBhbnkgPSBgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPVxyXG4gICBgKyB0aGlzLnNyY1VybCArIGBcclxuICAgICZ0aXRsZT1DaGVjayUyMG91dCUyMG15JTIwdXRncm93JTIwQ2FsY3VsYXRvclxyXG4gICAgICAgICAgICAgICAgJnN1bW1hcnk9TXklMjBBd2Vzb21lJTIwQ2FsY3VsYXRvciZzb3VyY2U9TGlua2VkSW5gO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbml0IG9mIHNoYXJlZCBjYWxjdWxhdG9yJyk7XHJcbiAgICAgICAgdGhpcy5zcmNVcmwgPSBDb25maWcuUFJPVE9DT0wgKyB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvJyArIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsO1xyXG4gICAgICBcclxuICAgICAgICB0aGlzLnNyY1VybCA9IENvbmZpZy5QUk9UT0NPTCArIHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbiArICcuJyArIENvbmZpZy5BUFBfRVhURU5TSU9OICsgJy8nICsgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS51cmw7XHJcbiAgICAgICAgdGhpcy50d2l0dGVyU3JjVXJsID0gYGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3N0YXR1cz1gICsgZW5jb2RlVVJJKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZSkgKyBgK2AgKyB0aGlzLnNyY1VybDtcclxuICAgICAgICB0aGlzLmxpbmtlZEluU3JjVXJsID0gYGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJnVybD1gICsgdGhpcy5zcmNVcmwgKyBgJnRpdGxlPWAgKyBlbmNvZGVVUkkodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lKSArIGBcclxuICAgICAgICAgICAgICAgICZzdW1tYXJ5PWArIGVuY29kZVVSSSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUpICsgYCZzb3VyY2U9TGlua2VkSW5gO1xyXG4gIFxyXG4gICAgfVxyXG5cclxuICAgIGNvcHlCdXR0b24oKSB7XHJcbiAgICAgICAgY2xpcGJvYXJkLmNvcHkoalF1ZXJ5KCcjaW5wdXROYW1lJylbMF0udmFsdWUpO1xyXG4gICAgICAgIHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignTGluayBDb3BpZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgLy9Jbml0aWFsaXplIEZCXHJcbiAgICAgICAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBGQi5pbml0KHtcclxuICAgICAgICAgICAgICAgIGFwcElkOiAnMTU4MzM4Njg3ODYyMzU5MycsXHJcbiAgICAgICAgICAgICAgICB4ZmJtbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZlcnNpb246ICd2Mi43J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAoZnVuY3Rpb24gKGQ6IGFueSwgczogYW55LCBpZDogYW55KSB7XHJcbiAgICAgICAgICAgIHZhciBqczogYW55LCBmanM6IGFueSA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XHJcbiAgICAgICAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgeyByZXR1cm47IH1cclxuICAgICAgICAgICAganMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7IGpzLmlkID0gaWQ7XHJcbiAgICAgICAgICAgIGpzLnNyYyA9IFwiLy9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanNcIjtcclxuICAgICAgICAgICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xyXG4gICAgICAgIH0gKGRvY3VtZW50LCAnc2NyaXB0JywgJ2ZhY2Vib29rLWpzc2RrJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZhY2Vib29rU2hhcmUoKSB7XHJcbiAgICAgICAgRkIudWkoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdzaGFyZScsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdwb3B1cCcsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZSxcclxuICAgICAgICAgICAgY2FwdGlvbjogdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgaHJlZjogdGhpcy5zcmNVcmwsXHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlOiBhbnkpIHtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsR0Eob3B0OiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKG9wdCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQ09QWUxJTktcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnQ29weUxpbmsnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIENvcHkgTGluayddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiRkJTSEFSRVwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdTaGFyZScsICdGYWNlYm9va1NoYXJlJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBGYWNlYm9vayBTaGFyZSddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTElTSEFSRVwiOlxyXG4gICAgICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnQnVpbGRlcicsICdTaGFyZScsICdMaW5rZWRJblNoYXJlJyk7XHJcbiAgICAgICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnQnVpbGRlciBMaW5rZWRJbiBTaGFyZSddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiVFNIQVJFXCI6XHJcbiAgICAgICAgICAgICAgICBnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdCdWlsZGVyJywgJ1NoYXJlJywgJ1R3aXR0ZXJTaGFyZScpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgVHdpdHRlciBTaGFyZSddKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
