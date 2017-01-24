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
var DateRangePickerComponent = (function () {
    function DateRangePickerComponent() {
        this.date = new core_1.EventEmitter();
    }
    DateRangePickerComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        jQuery('.input-daterange-datepicker').daterangepicker({
            buttonClasses: ['btn', 'btn-sm'],
            applyClass: 'btn-danger',
            cancelClass: 'btn-inverse',
            startDate: moment().subtract(10, 'days').calendar()
        });
        jQuery('.input-daterange-datepicker').on('apply.daterangepicker', function (ev, picker) {
            self.date.emit({
                start_date: picker.startDate.format('YYYY-MM-DD'),
                end_date: picker.endDate.format('YYYY-MM-DD')
            });
        });
    };
    DateRangePickerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DateRangePickerComponent.prototype, "date", void 0);
    DateRangePickerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-date-range-picker',
            templateUrl: 'date_range_picker.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], DateRangePickerComponent);
    return DateRangePickerComponent;
}());
exports.DateRangePickerComponent = DateRangePickerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK2FuYWx5dGljcy9jb21wb25lbnRzL2RhdGVfcmFuZ2VfcGlja2VyL2RhdGVfcmFuZ2VfcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdGLGVBQWUsQ0FBQyxDQUFBO0FBYXhHO0lBQUE7UUFDWSxTQUFJLEdBQTBCLElBQUksbUJBQVksRUFBVyxDQUFDO0lBMEJ0RSxDQUFDO0lBeEJDLGtEQUFlLEdBQWY7UUFDRSxJQUFJLElBQUksR0FBTyxJQUFJLENBQUM7UUFHcEIsTUFBTSxDQUFDLDZCQUE2QixDQUFDLENBQUMsZUFBZSxDQUFDO1lBQ3BELGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7WUFDaEMsVUFBVSxFQUFFLFlBQVk7WUFDeEIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFO1NBQ3BELENBQUMsQ0FBQztRQUdILE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxVQUFTLEVBQU0sRUFBRSxNQUFVO1lBQzNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNiLFVBQVUsRUFBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQ2hELFFBQVEsRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7YUFDN0MsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQVEsR0FBUjtJQUVBLENBQUM7SUF4QkQ7UUFBQyxhQUFNLEVBQUU7OzBEQUFBO0lBUlg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtTQUN0QyxDQUFDOztnQ0FBQTtJQTZCRiwrQkFBQztBQUFELENBM0JBLEFBMkJDLElBQUE7QUEzQlksZ0NBQXdCLDJCQTJCcEMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS9jb21wb25lbnRzLythbmFseXRpY3MvY29tcG9uZW50cy9kYXRlX3JhbmdlX3BpY2tlci9kYXRlX3JhbmdlX3BpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcclxuZGVjbGFyZSB2YXIgbW9tZW50OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnb2ctZGF0ZS1yYW5nZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZV9yYW5nZV9waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBPdXRwdXQoKSBkYXRlOiBFdmVudEVtaXR0ZXIgPFN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyIDxTdHJpbmc+KCk7XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHZhciBzZWxmOmFueSA9IHRoaXM7XHJcblxyXG4gICAgLy9EYXRhIHJhbmdlIFBpY2tlclxyXG4gICAgalF1ZXJ5KCcuaW5wdXQtZGF0ZXJhbmdlLWRhdGVwaWNrZXInKS5kYXRlcmFuZ2VwaWNrZXIoe1xyXG4gICAgICBidXR0b25DbGFzc2VzOiBbJ2J0bicsICdidG4tc20nXSxcclxuICAgICAgYXBwbHlDbGFzczogJ2J0bi1kYW5nZXInLFxyXG4gICAgICBjYW5jZWxDbGFzczogJ2J0bi1pbnZlcnNlJyxcclxuICAgICAgc3RhcnREYXRlOiBtb21lbnQoKS5zdWJ0cmFjdCgxMCwgJ2RheXMnKS5jYWxlbmRhcigpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL09uIERhdGUgQXBwbHlcclxuICAgIGpRdWVyeSgnLmlucHV0LWRhdGVyYW5nZS1kYXRlcGlja2VyJykub24oJ2FwcGx5LmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2OmFueSwgcGlja2VyOmFueSkge1xyXG4gICAgICBzZWxmLmRhdGUuZW1pdCh7XHJcbiAgICAgICAgc3RhcnRfZGF0ZTpwaWNrZXIuc3RhcnREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxyXG4gICAgICAgIGVuZF9kYXRlOnBpY2tlci5lbmREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vQ29kZVxyXG4gIH1cclxuXHJcbn1cclxuIl19
