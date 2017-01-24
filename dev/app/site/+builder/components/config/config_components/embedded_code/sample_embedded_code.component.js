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
var safeurl_pipe_1 = require('../../../../../templates/pipes/safeurl.pipe');
var env_config_1 = require('../../../../../../config/env.config');
var SampleEmbeddedCodeComponent = (function () {
    function SampleEmbeddedCodeComponent(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.appExt = env_config_1.Config.APP_EXTENSION;
        this.srcUrl = env_config_1.Config.PROTOCOL + env_config_1.Config.APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
    }
    SampleEmbeddedCodeComponent.prototype.ngAfterViewInit = function () { };
    SampleEmbeddedCodeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sample-embedded-code',
            pipes: [safeurl_pipe_1.SafeUrl],
            templateUrl: 'assets/html/embedded_code.template.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder])
    ], SampleEmbeddedCodeComponent);
    return SampleEmbeddedCodeComponent;
}());
exports.SampleEmbeddedCodeComponent = SampleEmbeddedCodeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29uZmlnL2NvbmZpZ19jb21wb25lbnRzL2VtYmVkZGVkX2NvZGUvc2FtcGxlX2VtYmVkZGVkX2NvZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEQsZUFBZSxDQUFDLENBQUE7QUFFMUUsb0NBQTRCLDBDQUEwQyxDQUFDLENBQUE7QUFDdkUsNkJBQXNCLDZDQUE2QyxDQUFDLENBQUE7QUFDcEUsMkJBQXVCLHFDQUFxQyxDQUFDLENBQUE7QUFVN0Q7SUFJSSxxQ0FBb0IsaUJBQThCO1FBQTlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUZsRCxXQUFNLEdBQVEsbUJBQU0sQ0FBQyxhQUFhLENBQUM7UUFDbkMsV0FBTSxHQUFRLG1CQUFNLENBQUMsUUFBUSxHQUFHLG1CQUFNLENBQUMsYUFBYSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDO0lBRXZHLENBQUM7SUFFRCxxREFBZSxHQUFmLGNBQW9CLENBQUM7SUFmekI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsS0FBSyxFQUFFLENBQUMsc0JBQU8sQ0FBQztZQUNoQixXQUFXLEVBQUUseUNBQXlDO1lBQ3RELGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1NBQ3hDLENBQUM7O21DQUFBO0lBVUYsa0NBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLG1DQUEyQiw4QkFRdkMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2NvbmZpZy9jb25maWdfY29tcG9uZW50cy9lbWJlZGRlZF9jb2RlL3NhbXBsZV9lbWJlZGRlZF9jb2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBKU09OQnVpbGRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL0pTT05CdWlsZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge1NhZmVVcmx9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3RlbXBsYXRlcy9waXBlcy9zYWZldXJsLnBpcGUnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvZW52LmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3NhbXBsZS1lbWJlZGRlZC1jb2RlJyxcclxuICAgIHBpcGVzOiBbU2FmZVVybF0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9odG1sL2VtYmVkZGVkX2NvZGUudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2FtcGxlRW1iZWRkZWRDb2RlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgYXBwRXh0OiBhbnkgPSBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuICAgIHNyY1VybDogYW55ID0gQ29uZmlnLlBST1RPQ09MICsgQ29uZmlnLkFQUF9FWFRFTlNJT04gKyAnLycgKyB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLnVybDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkgeyB9XHJcbn0iXX0=
