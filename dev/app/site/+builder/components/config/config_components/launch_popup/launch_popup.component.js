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
var safeUrl_pipe_1 = require('../../../../../templates/pipes/safeUrl.pipe');
var env_config_1 = require('../../../../../../config/env.config');
var index_1 = require('../../../../../../shared/services/index');
var ConfigLaunchPopupComponent = (function () {
    function ConfigLaunchPopupComponent(jsonBuilderHelper, subDomainService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.subDomainService = subDomainService;
        this.buttonName = 'Get Started';
        this.isButton = false;
        this.isDrawer = false;
        this.appExt = this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION;
        this.srcUrl = '//' + this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
        this.iFrameUrl = '';
    }
    ConfigLaunchPopupComponent.prototype.ngDoCheck = function () {
        if (document.title != 'Outgrow Home')
            document.title = "Outgrow Home";
        this.srcUrl = '//' + this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
        if (this.isDrawer) {
            if (this.isButton)
                this.iframeData = "<code><div id='embed-container' data-prop='outgrow-d' data-type='outgrow-b' data-url='" + this.srcUrl + "' data-text='" + this.buttonName + "'></div><script src='" + this.loaderJs + "' async></script></code>";
            else
                this.iframeData = "<code><div id='embed-container' data-prop='outgrow-d' data-type='outgrow-l' data-url='" + this.srcUrl + "' data-text='" + this.buttonName + "'></div><script src='" + this.loaderJs + "' async></script></code>";
        }
        else {
            if (this.isButton)
                this.iframeData = "<code><div id='embed-container' data-prop='outgrow-p' data-type='outgrow-b' data-url='" + this.srcUrl + "' data-text='" + this.buttonName + "'></div><script src='" + this.loaderJs + "' async></script></code>";
            else
                this.iframeData = "<code><div id='embed-container' data-prop='outgrow-p' data-type='outgrow-l' data-url='" + this.srcUrl + "' data-text='" + this.buttonName + "'></div><script src='" + this.loaderJs + "' async></script></code>";
        }
    };
    ConfigLaunchPopupComponent.prototype.toggleDrawer = function () {
        localStorage.setItem('template', JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
        this.iFrameUrl = env_config_1.Config.PROTOCOL + this.appExt + '/preview/previewFrame';
        jQuery('#drawerIframe')[0].contentWindow.location.reload(true);
        setTimeout(function () {
            jQuery("#drawerIframe").toggleClass("hide");
            jQuery("#close-drawer").toggleClass("hide");
            jQuery(".fancybox-drawer").toggleClass("hide");
        }, 3000);
    };
    ConfigLaunchPopupComponent.prototype.togglePopup = function () {
        this.iFrameUrl = env_config_1.Config.PROTOCOL + this.appExt + '/preview/previewFrame';
        localStorage.setItem('template', JSON.stringify(this.jsonBuilderHelper.getJSONBuilt()));
    };
    ConfigLaunchPopupComponent.prototype.drawerClose = function () {
        jQuery("#drawerIframe").toggleClass("hide");
        jQuery("#close-drawer").toggleClass("hide");
        jQuery(".fancybox-drawer").toggleClass("hide");
    };
    ConfigLaunchPopupComponent.prototype.ngOnInit = function () {
        this.loaderJs = '//' + env_config_1.Config.APP_EXTENSION + '/js/loader.js';
        this.srcUrl = '//' + this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
        jQuery('.fancybox').fancybox();
        jQuery(".fancybox-effects-d").fancybox({
            padding: 0, openEffect: 'elastic',
            openSpeed: 150, closeEffect: 'elastic',
            closeSpeed: 150, closeClick: true
        });
    };
    ConfigLaunchPopupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'config-launch-popup',
            templateUrl: 'assets/html/launch_popup.template.html',
            pipes: [safeUrl_pipe_1.SafeUrl],
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./assets/css/fancybox.css']
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, index_1.SubDomainService])
    ], ConfigLaunchPopupComponent);
    return ConfigLaunchPopupComponent;
}());
exports.ConfigLaunchPopupComponent = ConfigLaunchPopupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29uZmlnL2NvbmZpZ19jb21wb25lbnRzL2xhdW5jaF9wb3B1cC9sYXVuY2hfcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEQsZUFBZSxDQUFDLENBQUE7QUFDOUUsb0NBQTRCLDBDQUEwQyxDQUFDLENBQUE7QUFDdkUsNkJBQXdCLDZDQUE2QyxDQUFDLENBQUE7QUFDdEUsMkJBQXVCLHFDQUFxQyxDQUFDLENBQUE7QUFDN0Qsc0JBQWlDLHlDQUF5QyxDQUFDLENBQUE7QUFZM0U7SUFTSSxvQ0FBb0IsaUJBQThCLEVBQVUsZ0JBQWtDO1FBQTFFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQOUYsZUFBVSxHQUFRLGFBQWEsQ0FBQztRQUVoQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxtQkFBTSxDQUFDLGFBQWEsQ0FBQztRQUN0RixXQUFNLEdBQVEsSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxtQkFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUMvSSxjQUFTLEdBQVEsRUFBRSxDQUFDO0lBQzhFLENBQUM7SUFFbkcsOENBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLElB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LElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLG1CQUFNLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsbUJBQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDL0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNuQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxTQUFTO1lBQ2pDLFNBQVMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFNBQVM7WUFDdEMsVUFBVSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSTtTQUNwQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbEVMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsS0FBSyxFQUFFLENBQUMsc0JBQU8sQ0FBQztZQUNoQixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtZQUNyQyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDOztrQ0FBQTtJQTRERixpQ0FBQztBQUFELENBMURBLEFBMERDLElBQUE7QUExRFksa0NBQTBCLDZCQTBEdEMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2NvbmZpZy9jb25maWdfY29tcG9uZW50cy9sYXVuY2hfcG9wdXAvbGF1bmNoX3BvcHVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uSW5pdCwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTYWZlVXJsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdGVtcGxhdGVzL3BpcGVzL3NhZmVVcmwucGlwZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbmZpZy9lbnYuY29uZmlnJztcclxuaW1wb3J0IHsgU3ViRG9tYWluU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdjb25maWctbGF1bmNoLXBvcHVwJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXNzZXRzL2h0bWwvbGF1bmNoX3BvcHVwLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgcGlwZXM6IFtTYWZlVXJsXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hc3NldHMvY3NzL2ZhbmN5Ym94LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnTGF1bmNoUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIERvQ2hlY2sge1xyXG4gICAgaWZyYW1lRGF0YTogYW55O1xyXG4gICAgYnV0dG9uTmFtZTogYW55ID0gJ0dldCBTdGFydGVkJztcclxuICAgIGxvYWRlckpzOiBhbnk7XHJcbiAgICBpc0J1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNEcmF3ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGFwcEV4dDogYW55ID0gdGhpcy5zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5zdWJfZG9tYWluICsgJy4nICsgQ29uZmlnLkFQUF9FWFRFTlNJT047XHJcbiAgICBzcmNVcmw6IGFueSA9ICcvLycgKyB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvJyArIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkO1xyXG4gICAgaUZyYW1lVXJsOiBhbnkgPSAnJztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyLCBwcml2YXRlIHN1YkRvbWFpblNlcnZpY2U6IFN1YkRvbWFpblNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQudGl0bGUgIT0gJ091dGdyb3cgSG9tZScpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJPdXRncm93IEhvbWVcIjtcclxuICAgICAgICB0aGlzLnNyY1VybCA9ICcvLycgKyB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvJyArIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRHJhd2VyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZnJhbWVEYXRhID0gYDxjb2RlPjxkaXYgaWQ9J2VtYmVkLWNvbnRhaW5lcicgZGF0YS1wcm9wPSdvdXRncm93LWQnIGRhdGEtdHlwZT0nb3V0Z3Jvdy1iJyBkYXRhLXVybD0nYCArIHRoaXMuc3JjVXJsICsgYCcgZGF0YS10ZXh0PSdgICsgdGhpcy5idXR0b25OYW1lICsgYCc+PC9kaXY+PHNjcmlwdCBzcmM9J2AgKyB0aGlzLmxvYWRlckpzICsgYCcgYXN5bmM+PC9zY3JpcHQ+PC9jb2RlPmA7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaWZyYW1lRGF0YSA9IGA8Y29kZT48ZGl2IGlkPSdlbWJlZC1jb250YWluZXInIGRhdGEtcHJvcD0nb3V0Z3Jvdy1kJyBkYXRhLXR5cGU9J291dGdyb3ctbCcgZGF0YS11cmw9J2AgKyB0aGlzLnNyY1VybCArIGAnIGRhdGEtdGV4dD0nYCArIHRoaXMuYnV0dG9uTmFtZSArIGAnPjwvZGl2PjxzY3JpcHQgc3JjPSdgICsgdGhpcy5sb2FkZXJKcyArIGAnIGFzeW5jPjwvc2NyaXB0PjwvY29kZT5gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZnJhbWVEYXRhID0gYDxjb2RlPjxkaXYgaWQ9J2VtYmVkLWNvbnRhaW5lcicgZGF0YS1wcm9wPSdvdXRncm93LXAnIGRhdGEtdHlwZT0nb3V0Z3Jvdy1iJyBkYXRhLXVybD0nYCArIHRoaXMuc3JjVXJsICsgYCcgZGF0YS10ZXh0PSdgICsgdGhpcy5idXR0b25OYW1lICsgYCc+PC9kaXY+PHNjcmlwdCBzcmM9J2AgKyB0aGlzLmxvYWRlckpzICsgYCcgYXN5bmM+PC9zY3JpcHQ+PC9jb2RlPmA7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuaWZyYW1lRGF0YSA9IGA8Y29kZT48ZGl2IGlkPSdlbWJlZC1jb250YWluZXInIGRhdGEtcHJvcD0nb3V0Z3Jvdy1wJyBkYXRhLXR5cGU9J291dGdyb3ctbCcgZGF0YS11cmw9J2AgKyB0aGlzLnNyY1VybCArIGAnIGRhdGEtdGV4dD0nYCArIHRoaXMuYnV0dG9uTmFtZSArIGAnPjwvZGl2PjxzY3JpcHQgc3JjPSdgICsgdGhpcy5sb2FkZXJKcyArIGAnIGFzeW5jPjwvc2NyaXB0PjwvY29kZT5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVEcmF3ZXIoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RlbXBsYXRlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKSkpO1xyXG4gICAgICAgIHRoaXMuaUZyYW1lVXJsID0gQ29uZmlnLlBST1RPQ09MICsgdGhpcy5hcHBFeHQgKyAnL3ByZXZpZXcvcHJldmlld0ZyYW1lJztcclxuICAgICAgICBqUXVlcnkoJyNkcmF3ZXJJZnJhbWUnKVswXS5jb250ZW50V2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiI2RyYXdlcklmcmFtZVwiKS50b2dnbGVDbGFzcyhcImhpZGVcIik7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIiNjbG9zZS1kcmF3ZXJcIikudG9nZ2xlQ2xhc3MoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuZmFuY3lib3gtZHJhd2VyXCIpLnRvZ2dsZUNsYXNzKFwiaGlkZVwiKTtcclxuXHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVQb3B1cCgpIHtcclxuICAgICAgICB0aGlzLmlGcmFtZVVybCA9IENvbmZpZy5QUk9UT0NPTCArIHRoaXMuYXBwRXh0ICsgJy9wcmV2aWV3L3ByZXZpZXdGcmFtZSc7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RlbXBsYXRlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKSkpO1xyXG4gICAgfVxyXG4gICAgZHJhd2VyQ2xvc2UoKSB7XHJcbiAgICAgICAgalF1ZXJ5KFwiI2RyYXdlcklmcmFtZVwiKS50b2dnbGVDbGFzcyhcImhpZGVcIik7XHJcbiAgICAgICAgalF1ZXJ5KFwiI2Nsb3NlLWRyYXdlclwiKS50b2dnbGVDbGFzcyhcImhpZGVcIik7XHJcbiAgICAgICAgalF1ZXJ5KFwiLmZhbmN5Ym94LWRyYXdlclwiKS50b2dnbGVDbGFzcyhcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRlckpzID0gJy8vJyArIENvbmZpZy5BUFBfRVhURU5TSU9OICsgJy9qcy9sb2FkZXIuanMnO1xyXG4gICAgICAgIHRoaXMuc3JjVXJsID0gJy8vJyArIHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbiArICcuJyArIENvbmZpZy5BUFBfRVhURU5TSU9OICsgJy8nICsgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5faWQ7XHJcbiAgICAgICAgalF1ZXJ5KCcuZmFuY3lib3gnKS5mYW5jeWJveCgpO1xyXG4gICAgICAgIGpRdWVyeShcIi5mYW5jeWJveC1lZmZlY3RzLWRcIikuZmFuY3lib3goe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLCBvcGVuRWZmZWN0OiAnZWxhc3RpYycsXHJcbiAgICAgICAgICAgIG9wZW5TcGVlZDogMTUwLCBjbG9zZUVmZmVjdDogJ2VsYXN0aWMnLFxyXG4gICAgICAgICAgICBjbG9zZVNwZWVkOiAxNTAsIGNsb3NlQ2xpY2s6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==
