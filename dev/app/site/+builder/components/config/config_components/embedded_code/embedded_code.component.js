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
var index_1 = require('../../../../../../shared/services/index');
var JSONBuilder_service_1 = require('../../../../services/JSONBuilder.service');
var safeUrl_pipe_1 = require('../../../../../templates/pipes/safeUrl.pipe');
var env_config_1 = require('../../../../../../config/env.config');
var ConfigEmbeddedCodeComponent = (function () {
    function ConfigEmbeddedCodeComponent(jsonBuilderHelper, subDomainService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.subDomainService = subDomainService;
        this.hideSmallCode = true;
        this.hideFullCode = true;
        this.smallPageCode = '';
        this.fullPageCode = '';
        this.iloaderJS = '';
    }
    ConfigEmbeddedCodeComponent.prototype.ngOnInit = function () {
        this.iloaderJS = '//' + env_config_1.Config.APP_EXTENSION + '/js/iloader.js';
        this.src = '//' + this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt()._id;
        this.smallPageCode = "<code><div id='og-iframe-container' data-url='" + this.src + "' data-width='50%'></div><script src='" + this.iloaderJS + "'async></script></code>";
        this.fullPageCode = "<code><div id='og-iframe-container' data-url='" + this.src + "' data-width='100%'></div><script src='" + this.iloaderJS + "'async></script></code>";
    };
    ConfigEmbeddedCodeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'config-embedded-code',
            pipes: [safeUrl_pipe_1.SafeUrl],
            templateUrl: 'assets/html/embedded_code.template.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [JSONBuilder_service_1.JSONBuilder, index_1.SubDomainService])
    ], ConfigEmbeddedCodeComponent);
    return ConfigEmbeddedCodeComponent;
}());
exports.ConfigEmbeddedCodeComponent = ConfigEmbeddedCodeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29uZmlnL2NvbmZpZ19jb21wb25lbnRzL2VtYmVkZGVkX2NvZGUvZW1iZWRkZWRfY29kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2RSxlQUFlLENBQUMsQ0FBQTtBQUU3RixzQkFBaUMseUNBQXlDLENBQUMsQ0FBQTtBQUMzRSxvQ0FBNEIsMENBQTBDLENBQUMsQ0FBQTtBQUN2RSw2QkFBd0IsNkNBQTZDLENBQUMsQ0FBQTtBQUN0RSwyQkFBdUIscUNBQXFDLENBQUMsQ0FBQTtBQVU3RDtJQU9JLHFDQUFvQixpQkFBOEIsRUFBVSxnQkFBa0M7UUFBMUUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45RixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQVEsRUFBRSxDQUFDO0lBRThFLENBQUM7SUFFbkcsOENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLG1CQUFNLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxtQkFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUM1SSxJQUFJLENBQUMsYUFBYSxHQUFHLGdEQUFnRCxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsd0NBQXdDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQztRQUN6SyxJQUFJLENBQUMsWUFBWSxHQUFHLGdEQUFnRCxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcseUNBQXlDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQztJQUM3SyxDQUFDO0lBdEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLEtBQUssRUFBRSxDQUFDLHNCQUFPLENBQUM7WUFDaEIsV0FBVyxFQUFFLHlDQUF5QztZQUN0RCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN4QyxDQUFDOzttQ0FBQTtJQWlCRixrQ0FBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksbUNBQTJCLDhCQWV2QyxDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY29uZmlnL2NvbmZpZ19jb21wb25lbnRzL2VtYmVkZGVkX2NvZGUvZW1iZWRkZWRfY29kZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBEb0NoZWNrLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUywgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJEb21haW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2FmZVVybCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3RlbXBsYXRlcy9waXBlcy9zYWZlVXJsLnBpcGUnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb25maWcvZW52LmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2NvbmZpZy1lbWJlZGRlZC1jb2RlJyxcclxuICAgIHBpcGVzOiBbU2FmZVVybF0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9odG1sL2VtYmVkZGVkX2NvZGUudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnRW1iZWRkZWRDb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGhpZGVTbWFsbENvZGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaGlkZUZ1bGxDb2RlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHNtYWxsUGFnZUNvZGU6IGFueSA9ICcnO1xyXG4gICAgZnVsbFBhZ2VDb2RlOiBhbnkgPSAnJztcclxuICAgIGlsb2FkZXJKUzogYW55ID0gJyc7XHJcbiAgICBzcmM6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyLCBwcml2YXRlIHN1YkRvbWFpblNlcnZpY2U6IFN1YkRvbWFpblNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaWxvYWRlckpTID0gJy8vJyArIENvbmZpZy5BUFBfRVhURU5TSU9OICsgJy9qcy9pbG9hZGVyLmpzJztcclxuICAgICAgICB0aGlzLnNyYyA9ICcvLycgKyB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvJyArIHRoaXMuanNvbkJ1aWxkZXJIZWxwZXIuZ2V0SlNPTkJ1aWx0KCkuX2lkO1xyXG4gICAgICAgIHRoaXMuc21hbGxQYWdlQ29kZSA9IGA8Y29kZT48ZGl2IGlkPSdvZy1pZnJhbWUtY29udGFpbmVyJyBkYXRhLXVybD0nYCArIHRoaXMuc3JjICsgYCcgZGF0YS13aWR0aD0nNTAlJz48L2Rpdj48c2NyaXB0IHNyYz0nYCArIHRoaXMuaWxvYWRlckpTICsgYCdhc3luYz48L3NjcmlwdD48L2NvZGU+YDtcclxuICAgICAgICB0aGlzLmZ1bGxQYWdlQ29kZSA9IGA8Y29kZT48ZGl2IGlkPSdvZy1pZnJhbWUtY29udGFpbmVyJyBkYXRhLXVybD0nYCArIHRoaXMuc3JjICsgYCcgZGF0YS13aWR0aD0nMTAwJSc+PC9kaXY+PHNjcmlwdCBzcmM9J2AgKyB0aGlzLmlsb2FkZXJKUyArIGAnYXN5bmM+PC9zY3JpcHQ+PC9jb2RlPmA7XHJcbiAgICB9XHJcbn0iXX0=
