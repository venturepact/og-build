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
var calculator_analytics_service_1 = require('../../services/calculator-analytics.service');
var UserDetailsPopupComponent = (function () {
    function UserDetailsPopupComponent(_calculatorAnalytics) {
        this._calculatorAnalytics = _calculatorAnalytics;
    }
    UserDetailsPopupComponent.prototype.ngOnInit = function () {
    };
    UserDetailsPopupComponent.prototype.ngAfterViewInit = function () {
        jQuery(document).on('click', '.clear-set', function () {
            jQuery('.user-detail-outer').fadeOut();
        });
    };
    UserDetailsPopupComponent.prototype.ngOnChanges = function () {
        this.statsResult = undefined;
        if (this.visitorKey)
            this.getStatsInfo();
    };
    UserDetailsPopupComponent.prototype.getStatsInfo = function () {
        var _this = this;
        this._calculatorAnalytics.getStats({ key: this.visitorKey, answered: true })
            .subscribe(function (response) {
            _this.statsResult = response;
            setTimeout(function () { return jQuery('.outer-slim').slimScroll(); }, 500);
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UserDetailsPopupComponent.prototype, "visitorKey", void 0);
    UserDetailsPopupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-user-details-popup',
            templateUrl: 'user_details_popup.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [calculator_analytics_service_1.CalculatorAnalytics]
        }), 
        __metadata('design:paramtypes', [calculator_analytics_service_1.CalculatorAnalytics])
    ], UserDetailsPopupComponent);
    return UserDetailsPopupComponent;
}());
exports.UserDetailsPopupComponent = UserDetailsPopupComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK2FuYWx5dGljcy9jb21wb25lbnRzL3VzZXJfZGV0YWlsc19wb3B1cC91c2VyX2RldGFpbHNfcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0YsZUFBZSxDQUFDLENBQUE7QUFDcEcsNkNBQWtDLDZDQUE2QyxDQUFDLENBQUE7QUFZaEY7SUFJRSxtQ0FBb0Isb0JBQXlDO1FBQXpDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7SUFFN0QsQ0FBQztJQUVELDRDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsbURBQWUsR0FBZjtRQUVFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLFlBQVksRUFBRTtZQUV0QyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNqQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGdEQUFZLEdBQVo7UUFBQSxpQkFhRztRQVhDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDdkUsU0FBUyxDQUNWLFVBQUMsUUFBYTtZQUVWLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQzVCLFVBQVUsQ0FBQyxjQUFJLE9BQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFsQyxDQUFrQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNELENBQUMsRUFDRCxVQUFDLEtBQVU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FDQSxDQUFDO0lBQ1IsQ0FBQztJQXRDSDtRQUFDLFlBQUssRUFBRTs7aUVBQUE7SUFUVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLGtEQUFtQixDQUFDO1NBQ2pDLENBQUM7O2lDQUFBO0lBMENGLGdDQUFDO0FBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtBQXhDWSxpQ0FBeUIsNEJBd0NyQyxDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL2NvbXBvbmVudHMvK2FuYWx5dGljcy9jb21wb25lbnRzL3VzZXJfZGV0YWlsc19wb3B1cC91c2VyX2RldGFpbHNfcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NhbGN1bGF0b3JBbmFseXRpY3N9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NhbGN1bGF0b3ItYW5hbHl0aWNzLnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnb2ctdXNlci1kZXRhaWxzLXBvcHVwJyxcclxuICB0ZW1wbGF0ZVVybDogJ3VzZXJfZGV0YWlsc19wb3B1cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtDYWxjdWxhdG9yQW5hbHl0aWNzXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJEZXRhaWxzUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgdmlzaXRvcktleTogYW55O1xyXG4gIHN0YXRzUmVzdWx0OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhbGN1bGF0b3JBbmFseXRpY3M6IENhbGN1bGF0b3JBbmFseXRpY3MpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vQ29kZVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCl7XHJcbiAgICAvL2NvZGVcclxuICAgIGpRdWVyeShkb2N1bWVudCkub24oJ2NsaWNrJywnLmNsZWFyLXNldCcsICgpID0+IHtcclxuICAgICAgICAvL0hpZGUgdGhlIG1lbnVzIGlmIHZpc2libGUgXHJcbiAgICAgICAgalF1ZXJ5KCcudXNlci1kZXRhaWwtb3V0ZXInKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zdGF0c1Jlc3VsdCA9IHVuZGVmaW5lZDtcclxuICAgIGlmKHRoaXMudmlzaXRvcktleSlcclxuICAgICAgdGhpcy5nZXRTdGF0c0luZm8oKTtcclxuICB9XHJcblxyXG4gIGdldFN0YXRzSW5mbygpIHtcclxuICAgICAgLyogZ2V0IGxlYWRzIG9mIHVzZXIgb24gcGFnZSAqL1xyXG4gICAgICB0aGlzLl9jYWxjdWxhdG9yQW5hbHl0aWNzLmdldFN0YXRzKHsga2V5OiB0aGlzLnZpc2l0b3JLZXksIGFuc3dlcmVkOiB0cnVlIH0pXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAvKiogaW50aWFsaXplIGRhdGEgdGFibGUgKi9cclxuICAgICAgICAgICAgICB0aGlzLnN0YXRzUmVzdWx0ID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+alF1ZXJ5KCcub3V0ZXItc2xpbScpLnNsaW1TY3JvbGwoKSw1MDApO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=
