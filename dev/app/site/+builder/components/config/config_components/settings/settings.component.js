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
var builder_service_1 = require('../../../../../+builder/services/builder.service');
var index_1 = require('../../../../../../shared/services/index');
var env_config_1 = require('../../../../../../config/env.config');
var ConfigSettingsComponent = (function () {
    function ConfigSettingsComponent(jsonBuilderHelper, _builderService, _dashboardService, subDomainService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._builderService = _builderService;
        this._dashboardService = _dashboardService;
        this.subDomainService = subDomainService;
        this.unique = true;
        this.isempty = false;
        this.filePickerKey = 'A3ygIw4hISSCdApqW4SAwz';
        this.uniqueNameHandler = this._builderService.debounce(this.updateName, 800);
        this.uniqueUrlHandler = this._builderService.debounce(this.updateUrl, 800);
    }
    ConfigSettingsComponent.prototype.ngAfterViewInit = function () {
        this.oldCalcName = this.jsonBuilderHelper.getJSONBuilt().name;
        function resizeInput() {
            jQuery(this).attr('size', jQuery(this).val().length);
        }
        jQuery('.config-input-url').keyup(resizeInput).each(resizeInput);
    };
    ConfigSettingsComponent.prototype.closeIt = function () {
        jQuery('.editor-calcUrl').fadeOut();
    };
    ConfigSettingsComponent.prototype.ngOnInit = function () {
        this.updateTitleLength(this.jsonBuilderHelper.getJSONBuilt().title);
        this.updateMetaDescLen(this.jsonBuilderHelper.getJSONBuilt().description);
        this.srcUrl = env_config_1.Config.PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/';
        this.name = this.jsonBuilderHelper.getJSONBuilt().url.split('/').pop();
        console.log('OnInit Settings', this.name);
    };
    ConfigSettingsComponent.prototype.onCalcNameChanged = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().name) {
            this.isempty = false;
            this.uniqueNameHandler();
        }
        else {
            this.isempty = true;
            this.jsonBuilderHelper.getJSONBuilt().name = this.oldCalcName;
        }
    };
    ConfigSettingsComponent.prototype.onCalcUrlChanged = function (event) {
        this.jsonBuilderHelper.getJSONBuilt().url = event.target.value;
        if (this.jsonBuilderHelper.getJSONBuilt().url) {
            this.isempty = false;
            this.uniqueUrlHandler();
        }
    };
    ConfigSettingsComponent.prototype.updateTitleLength = function (value) {
        this.titleLength = '(' + value.toString().length + '/55)';
    };
    ConfigSettingsComponent.prototype.updateMetaDescLen = function (value) {
        this.metaDescLength = '(' + value.toString().length + '/160)';
    };
    ConfigSettingsComponent.prototype.copyButton = function () {
        clipboard.copy(this.srcUrl + this.jsonBuilderHelper.getJSONBuilt().url);
        window.toastNotification('Link Copied');
    };
    ConfigSettingsComponent.prototype.updateName = function () {
        var _this = this;
        if (this.oldCalcName != this.jsonBuilderHelper.getJSONBuilt().name) {
            this.jsonBuilderHelper.animInit();
            this._builderService.updateName(this.jsonBuilderHelper.getJSONBuilt()._id, this.jsonBuilderHelper.getJSONBuilt().name)
                .subscribe(function (response) {
                if (!_this.jsonBuilderHelper.getJSONBuilt().url) {
                    _this.jsonBuilderHelper.getJSONBuilt().url = response.url;
                    window.history.replaceState({}, '', '/builder/' + response.url);
                    var url = env_config_1.Config.PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/' + response.url;
                    window.toastNotification('Calculator name added successfully');
                    bootbox.dialog({
                        size: 'small',
                        message: "\n                                <div class=\"bootbox-config\">\n                                    <div class=\"bootbox-body-left\">\n                                        <div class=\"mat-icon\">\n                                            <i class=\"material-icons\">error</i>\n                                        </div>\n                                    </div>\n                                    <div class=\"bootbox-body-right\">\n                                        <p class=\"\">We have set your calculator's url to \"" + url + "\" , You can always change it in configure section.</p>\n                                    </div>\n                                </div>\n                            ",
                        buttons: {
                            success: {
                                label: "OK",
                                className: "btn btn-ok btn-hover"
                            }
                        }
                    });
                }
                else {
                    window.toastNotification('Calculator name changed successfully');
                }
                _this.oldCalcName = _this.jsonBuilderHelper.getJSONBuilt().name;
                _this.jsonBuilderHelper.debounce(_this.jsonBuilderHelper.animLoad(), 1800);
            }, function (error) {
                console.log(error);
            });
        }
    };
    ConfigSettingsComponent.prototype.updateUrl = function () {
        var _this = this;
        this.jsonBuilderHelper.animInit();
        this._builderService.checkUniqueUrl(this.jsonBuilderHelper.getJSONBuilt()._id, this.jsonBuilderHelper.getJSONBuilt().url)
            .subscribe(function (response) {
            if (!response.exsists) {
                _this.unique = true;
                _this.jsonBuilderHelper.debounce(_this.jsonBuilderHelper.animLoad(), 1800);
                if (_this.jsonBuilderHelper.getJSONBuilt().url != response.url)
                    window.toastNotification('Url changed successfully.');
                _this.jsonBuilderHelper.getJSONBuilt().url = response.url;
            }
            else {
                _this.unique = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ConfigSettingsComponent.prototype.upload = function (type) {
        var _this = this;
        filepicker.setKey(this.filePickerKey);
        filepicker.pick({ mimetypes: ['image/*'], }, function (InkBlob) {
            if (type == 'favicon')
                _this.jsonBuilderHelper.getJSONBuilt().favicon = InkBlob.url;
            console.log(_this.jsonBuilderHelper.getJSONBuilt().favicon);
            jQuery('#filepicker_dialog_container').find('a').click();
            _this.saveAppSettings();
        }, function (FPError) {
            console.log(FPError.toString());
        });
    };
    ConfigSettingsComponent.prototype.saveAppSettings = function () {
    };
    ConfigSettingsComponent.prototype.onModeChange = function (mode) {
        var _this = this;
        if (mode === 'PUBLIC') {
            mode = 'PRIVATE';
            this.jsonBuilderHelper.animInit();
            this._dashboardService.changeAppMode(this.jsonBuilderHelper.getJSONBuilt()._id, mode)
                .subscribe(function (response) {
                _this.jsonBuilderHelper.getJSONBuilt().mode = mode;
                window.toastNotification('Mode changed to ' + mode + ' for ' + _this.jsonBuilderHelper.getJSONBuilt().name);
                _this.jsonBuilderHelper.debounce(_this.jsonBuilderHelper.animLoad(), 1800);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            mode = 'PUBLIC';
            jQuery('#live-btn').trigger('click');
        }
    };
    ConfigSettingsComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case "UPLOADFAV":
                ga('markettingteam.send', 'event', 'Builder', 'Click', 'UploadFavicon');
                _kmq.push(['record', 'Builder Upload Favicon Click']);
                break;
            case "CALCSTATUSTOGGLE":
                ga('markettingteam.send', 'event', 'Builder', 'Toggle', 'CalcStatusChange');
                _kmq.push(['record', 'Builder Calculator Status Change Toggle']);
                break;
        }
    };
    ConfigSettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'config-settings',
            providers: [index_1.DashboardService],
            templateUrl: 'assets/html/settings.template.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, builder_service_1.BuilderService, index_1.DashboardService, index_1.SubDomainService])
    ], ConfigSettingsComponent);
    return ConfigSettingsComponent;
}());
exports.ConfigSettingsComponent = ConfigSettingsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29uZmlnL2NvbmZpZ19jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtFLGVBQWUsQ0FBQyxDQUFBO0FBQ2xGLG9DQUE0QiwwQ0FBMEMsQ0FBQyxDQUFBO0FBR3ZFLGdDQUE0QixrREFBa0QsQ0FBQyxDQUFBO0FBQy9FLHNCQUFpRCx5Q0FBeUMsQ0FBQyxDQUFBO0FBQzNGLDJCQUF1QixxQ0FBcUMsQ0FBQyxDQUFBO0FBaUI3RDtJQWVJLGlDQUFvQixpQkFBOEIsRUFBVSxlQUErQixFQUFVLGlCQUFtQyxFQUFVLGdCQUFrQztRQUFoSyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVZwTCxXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsa0JBQWEsR0FBUSx3QkFBd0IsQ0FBQztRQVMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsaURBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztRQUU5RDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0s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QyxDQUFDLFFBQVEsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELEtBQUssQ0FBQztZQUNWLEtBQUssa0JBQWtCO2dCQUNuQixFQUFFLENBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBdk9MO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxDQUFDLHdCQUFnQixDQUFDO1lBQzdCLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDeEMsQ0FBQzs7K0JBQUE7SUFrT0YsOEJBQUM7QUFBRCxDQWhPQSxBQWdPQyxJQUFBO0FBaE9ZLCtCQUF1QiwwQkFnT25DLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2J1aWxkZXIvY29tcG9uZW50cy9jb25maWcvY29uZmlnX2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0N1c3RvbVZhbGlkYXRvcn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdGVtcGxhdGVzL3NlcnZpY2VzL2N1c3RvbVZhbGlkYXRpb24nO1xyXG5pbXBvcnQge0J1aWxkZXJTZXJ2aWNlfWZyb20gJy4uLy4uLy4uLy4uLy4uLytidWlsZGVyL3NlcnZpY2VzL2J1aWxkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7RGFzaGJvYXJkU2VydmljZSwgU3ViRG9tYWluU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgZmlsZXBpY2tlcjogYW55O1xyXG5kZWNsYXJlIHZhciBib290Ym94OiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGNsaXBib2FyZDogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdjb25maWctc2V0dGluZ3MnLFxyXG4gICAgcHJvdmlkZXJzOiBbRGFzaGJvYXJkU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9odG1sL3NldHRpbmdzLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuXHJcbiAgICBjYWxjTmFtZTogRm9ybUNvbnRyb2w7XHJcbiAgICB1bmlxdWVOYW1lSGFuZGxlcjogYW55O1xyXG4gICAgdW5pcXVlVXJsSGFuZGxlcjogYW55O1xyXG4gICAgdW5pcXVlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlzZW1wdHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGZpbGVQaWNrZXJLZXk6IGFueSA9ICdBM3lnSXc0aElTU0NkQXBxVzRTQXd6JztcclxuICAgIG9sZENhbGNOYW1lOiBzdHJpbmc7XHJcbiAgICB0aXRsZUxlbmd0aDogYW55O1xyXG4gICAgbWV0YURlc2NMZW5ndGg6IGFueTtcclxuICAgIHNyY1VybDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlciwgcHJpdmF0ZSBfYnVpbGRlclNlcnZpY2U6IEJ1aWxkZXJTZXJ2aWNlLCBwcml2YXRlIF9kYXNoYm9hcmRTZXJ2aWNlOiBEYXNoYm9hcmRTZXJ2aWNlLCBwcml2YXRlIHN1YkRvbWFpblNlcnZpY2U6IFN1YkRvbWFpblNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnVuaXF1ZU5hbWVIYW5kbGVyID0gdGhpcy5fYnVpbGRlclNlcnZpY2UuZGVib3VuY2UodGhpcy51cGRhdGVOYW1lLCA4MDApO1xyXG4gICAgICAgIHRoaXMudW5pcXVlVXJsSGFuZGxlciA9IHRoaXMuX2J1aWxkZXJTZXJ2aWNlLmRlYm91bmNlKHRoaXMudXBkYXRlVXJsLCA4MDApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLm9sZENhbGNOYW1lID0gdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5uYW1lO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZXNpemVJbnB1dCgpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmF0dHIoJ3NpemUnLCBqUXVlcnkodGhpcykudmFsKCkubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgalF1ZXJ5KCcuY29uZmlnLWlucHV0LXVybCcpLmtleXVwKHJlc2l6ZUlucHV0KS5lYWNoKHJlc2l6ZUlucHV0KTtcclxuXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLy8gbmdEb0NoZWNrKCkge1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS51cmwpIHtcclxuICAgICAgICAvLyAgICAgalF1ZXJ5KCcuZWRpdG9yLWNhbGNVcmwnKS5mYWRlSW4oKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGpRdWVyeSgnLmVkaXRvci1jYWxjVXJsJykuZmFkZU91dCgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIC8vIH1cclxuICAgXHJcbiAgICBjbG9zZUl0KCkge1xyXG4gICAgICAgIGpRdWVyeSgnLmVkaXRvci1jYWxjVXJsJykuZmFkZU91dCgpO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0IGVudGVyXCIpO1xyXG4gICAgICAgIC8valF1ZXJ5KCcuZWRpdG9yLWNhbGNVcmwnKS5mYWRlSW4oKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlTGVuZ3RoKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudGl0bGUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTWV0YURlc2NMZW4odGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgdGhpcy5zcmNVcmwgPSBDb25maWcuUFJPVE9DT0wgKyB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvJztcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybC5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdPbkluaXQgU2V0dGluZ3MnLCB0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG4gICAgb25DYWxjTmFtZUNoYW5nZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzZW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51bmlxdWVOYW1lSGFuZGxlcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNlbXB0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkubmFtZSA9IHRoaXMub2xkQ2FsY05hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FsY1VybENoYW5nZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzZW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51bmlxdWVVcmxIYW5kbGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRpdGxlTGVuZ3RoKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlTGVuZ3RoID0gJygnICsgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggKyAnLzU1KSc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTWV0YURlc2NMZW4odmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMubWV0YURlc2NMZW5ndGggPSAnKCcgKyB2YWx1ZS50b1N0cmluZygpLmxlbmd0aCArICcvMTYwKSc7XHJcbiAgICB9XHJcblxyXG4gICAgY29weUJ1dHRvbigpIHtcclxuICAgICAgICBjbGlwYm9hcmQuY29weSh0aGlzLnNyY1VybCArIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsKTtcclxuICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ0xpbmsgQ29waWVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTmFtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5vbGRDYWxjTmFtZSAhPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUpIHtcclxuICAgICAgICAgICAgLyogQW5pbWF0aW9uIEluaXQgKi9cclxuICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5hbmltSW5pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9idWlsZGVyU2VydmljZS51cGRhdGVOYW1lKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsID0gcmVzcG9uc2UudXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCAnL2J1aWxkZXIvJyArIHJlc3BvbnNlLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBDb25maWcuUFJPVE9DT0wgKyB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvJyArIHJlc3BvbnNlLnVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdDYWxjdWxhdG9yIG5hbWUgYWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb3Rib3guZGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6ICdzbWFsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb3Rib3gtY29uZmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib290Ym94LWJvZHktbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vdGJveC1ib2R5LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIlwiPldlIGhhdmUgc2V0IHlvdXIgY2FsY3VsYXRvclxcJ3MgdXJsIHRvIFwiYCArIHVybCArIGBcIiAsIFlvdSBjYW4gYWx3YXlzIGNoYW5nZSBpdCBpbiBjb25maWd1cmUgc2VjdGlvbi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJidG4gYnRuLW9rIGJ0bi1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignQ2FsY3VsYXRvciBuYW1lIGNoYW5nZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2xkQ2FsY05hbWUgPSB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogYW5pbWF0aW9uICovXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5kZWJvdW5jZSh0aGlzLmpzb25CdWlsZGVySGVscGVyLmFuaW1Mb2FkKCksIDE4MDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVXJsKCkge1xyXG4gICAgICAgIC8qIEFuaW1hdGlvbiBJbml0ICovXHJcbiAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5hbmltSW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX2J1aWxkZXJTZXJ2aWNlLmNoZWNrVW5pcXVlVXJsKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuZXhzaXN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5pcXVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBhbmltYXRpb24gKi9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmRlYm91bmNlKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUxvYWQoKSwgMTgwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsICE9IHJlc3BvbnNlLnVybClcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdVcmwgY2hhbmdlZCBzdWNjZXNzZnVsbHkuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgJy9idWlsZGVyLycgKyByZXNwb25zZS51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkudXJsID0gcmVzcG9uc2UudXJsO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXF1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBsb2FkKHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGZpbGVwaWNrZXIuc2V0S2V5KHRoaXMuZmlsZVBpY2tlcktleSk7XHJcbiAgICAgICAgZmlsZXBpY2tlci5waWNrKFxyXG4gICAgICAgICAgICB7IG1pbWV0eXBlczogWydpbWFnZS8qJ10sIH0sXHJcbiAgICAgICAgICAgIChJbmtCbG9iOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09ICdmYXZpY29uJylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLmZhdmljb24gPSBJbmtCbG9iLnVybDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuZmF2aWNvbik7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJyNmaWxlcGlja2VyX2RpYWxvZ19jb250YWluZXInKS5maW5kKCdhJykuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUFwcFNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChGUEVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEZQRXJyb3IudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVBcHBTZXR0aW5ncygpIHtcclxuICAgICAgICAvKiBBbmltYXRpb24gSW5pdCAqL1xyXG4gICAgICAgIC8vIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUluaXQoKTtcclxuICAgICAgICAvLyB0aGlzLl9idWlsZGVyU2VydmljZS5zYXZlQXBwU2V0dGluZyh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpKVxyXG5cclxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShcclxuXHJcbiAgICAgICAgLy8gICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy51bmlxdWUgPSAhcmVzcG9uc2UuZXhzaXN0cylcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybCA9IHJlc3BvbnNlLnVybDtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZGVib3VuY2UodGhpcy5qc29uQnVpbGRlckhlbHBlci5hbmltTG9hZCgpLCAxODAwKTtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW9kZUNoYW5nZShtb2RlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgaWYgKG1vZGUgPT09ICdQVUJMSUMnKSB7XHJcbiAgICAgICAgICAgIG1vZGUgPSAnUFJJVkFURSc7XHJcbiAgICAgICAgICAgIC8qIEFuaW1hdGlvbiBJbml0ICovXHJcbiAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuYW5pbUluaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5fZGFzaGJvYXJkU2VydmljZS5jaGFuZ2VBcHBNb2RlKHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkLCBtb2RlKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5tb2RlID0gbW9kZTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ01vZGUgY2hhbmdlZCB0byAnICsgbW9kZSArICcgZm9yICcgKyB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZGVib3VuY2UodGhpcy5qc29uQnVpbGRlckhlbHBlci5hbmltTG9hZCgpLCAxODAwKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW9kZSA9ICdQVUJMSUMnO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNsaXZlLWJ0bicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxHQShvcHQ6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAob3B0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJVUExPQURGQVZcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnQ2xpY2snLCAnVXBsb2FkRmF2aWNvbicpO1xyXG4gICAgICAgICAgICAgICAgX2ttcS5wdXNoKFsncmVjb3JkJywgJ0J1aWxkZXIgVXBsb2FkIEZhdmljb24gQ2xpY2snXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkNBTENTVEFUVVNUT0dHTEVcIjpcclxuICAgICAgICAgICAgICAgIGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ0J1aWxkZXInLCAnVG9nZ2xlJywgJ0NhbGNTdGF0dXNDaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdCdWlsZGVyIENhbGN1bGF0b3IgU3RhdHVzIENoYW5nZSBUb2dnbGUnXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
