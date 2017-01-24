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
var control_component_1 = require('../../../templates/controls/control.component');
var CalcAnalyticsManagerComponent = (function () {
    function CalcAnalyticsManagerComponent() {
        this.selected = 'overview';
        this.selection = new core_1.EventEmitter();
    }
    CalcAnalyticsManagerComponent.prototype.ngAfterViewInit = function () {
    };
    CalcAnalyticsManagerComponent.prototype.onSelect = function (comp) {
        this.selected = comp;
        this.selection.emit(comp);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CalcAnalyticsManagerComponent.prototype, "selection", void 0);
    CalcAnalyticsManagerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'calc-analytics-manager',
            directives: [control_component_1.Control],
            templateUrl: 'calc_analytics_manager.component.html',
            styleUrls: ['../assets/css/leftList.style.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CalcAnalyticsManagerComponent);
    return CalcAnalyticsManagerComponent;
}());
exports.CalcAnalyticsManagerComponent = CalcAnalyticsManagerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytidWlsZGVyL2NvbXBvbmVudHMvY2FsY19hbmFseXRpY3NfbWFuYWdlci9jYWxjX2FuYWx5dGljc19tYW5hZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBQzdFLGtDQUFzQiwrQ0FBK0MsQ0FBQyxDQUFBO0FBV3RFO0lBS0M7UUFIQSxhQUFRLEdBQU0sVUFBVSxDQUFDO1FBQ2YsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBR3pDLENBQUM7SUFFRCx1REFBZSxHQUFmO0lBQ0csQ0FBQztJQUVKLGdEQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFYRDtRQUFDLGFBQU0sRUFBRTs7b0VBQUE7SUFYVjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxVQUFVLEVBQUUsQ0FBQywyQkFBTyxDQUFDO1lBQ3JCLFdBQVcsRUFBRSx1Q0FBdUM7WUFDakQsU0FBUyxFQUFDLENBQUMsa0NBQWtDLENBQUM7U0FDakQsQ0FBQzs7cUNBQUE7SUFpQkYsb0NBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLHFDQUE2QixnQ0FlekMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rYnVpbGRlci9jb21wb25lbnRzL2NhbGNfYW5hbHl0aWNzX21hbmFnZXIvY2FsY19hbmFseXRpY3NfbWFuYWdlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2x9IGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlcy9jb250cm9scy9jb250cm9sLmNvbXBvbmVudCc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnY2FsYy1hbmFseXRpY3MtbWFuYWdlcicsXHJcblx0ZGlyZWN0aXZlczogW0NvbnRyb2xdLFxyXG5cdHRlbXBsYXRlVXJsOiAnY2FsY19hbmFseXRpY3NfbWFuYWdlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6WycuLi9hc3NldHMvY3NzL2xlZnRMaXN0LnN0eWxlLmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FsY0FuYWx5dGljc01hbmFnZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xyXG5cdHRlbXBsYXRlSnNvbjogYW55O1xyXG5cdHNlbGVjdGVkOiBhbnk9J292ZXJ2aWV3JztcclxuXHRAT3V0cHV0KCkgc2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsvL1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgfVxyXG5cclxuXHRvblNlbGVjdChjb21wOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWQgPSBjb21wO1xyXG5cdFx0dGhpcy5zZWxlY3Rpb24uZW1pdChjb21wKTtcclxuXHR9XHJcbn1cclxuXHJcbiJdfQ==
