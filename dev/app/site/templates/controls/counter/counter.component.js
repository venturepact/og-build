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
var index_1 = require('../../pipes/index');
var analytic_service_1 = require('../../services/analytic.service');
var JSONBuilder_service_1 = require('../../../+builder/services/JSONBuilder.service');
var Counter = (function () {
    function Counter(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    Counter.prototype.ngOnInit = function () {
        this.data.props.currentValue = this.data.props.defaultValue;
    };
    Counter.prototype.ngAfterViewInit = function () {
        var incValue = this.data.props.incValue;
        jQuery('.qtyplus').click(function (e) {
            e.preventDefault();
            var fieldName = jQuery(this).attr('field');
            var currentVal = parseInt(jQuery('input[name=' + fieldName + ']').val());
            if (!isNaN(currentVal)) {
                jQuery('input[name=' + fieldName + ']').val(currentVal + 1);
            }
            else {
                jQuery('input[name=' + fieldName + ']').val(0);
            }
        });
        jQuery('.qtyminus').click(function (e) {
            e.preventDefault();
            var fieldName = jQuery(this).attr('field');
            var currentVal = parseInt(jQuery('input[name=' + fieldName + ']').val());
            if (!isNaN(currentVal) && currentVal > 0) {
                jQuery('input[name=' + fieldName + ']').val(currentVal - 1);
            }
            else {
                jQuery('input[name=' + fieldName + ']').val(0);
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Counter.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Counter.prototype, "devMode", void 0);
    Counter = __decorate([
        core_1.Component({
            selector: 'counter',
            directives: [],
            pipes: [index_1.SafeHtml],
            viewProviders: [],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n    <div class=\"question-components\">\n        <div>\n             <div class=\"section-head\" >\n                <span class=\"pull-left\">\n                    {{data.props.title}}\n                    <div class=\"help-outer\">\n                        <i class=\"material-icons\" *ngIf=\"data.config.showHelp\">help_outline</i>\n                        <div class=\"help-text\">{{data.props.helpText}}</div>\n                    </div>\n                </span> \n            </div>\n            <div class=\"counter\">\n                <div type=\"button\" value=\"-\" class=\"qtyminus\" field=\"quantity\">\n                <i class=\"material-icons\">remove_circle_outline</i></div>\n                <input type=\"text\" name=\"quantity\" value=\"0\" class=\"qty\" [(ngModel)]=\"data.props.currentValue\" >\n                <div type=\"button\" value=\"-\" class=\"qtyplus\" field=\"quantity\">\n                <i class=\"material-icons\">add_circle_outline</i></div>\n            </div>\n        </div>\n    </div>\n\t",
        }), 
        __metadata('design:paramtypes', [analytic_service_1.AnalyticService, JSONBuilder_service_1.JSONBuilder])
    ], Counter);
    return Counter;
}());
exports.Counter = Counter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUUsZUFBZSxDQUFDLENBQUE7QUFDekYsc0JBQXlCLG1CQUFtQixDQUFDLENBQUE7QUFDN0MsaUNBQWdDLGlDQUFpQyxDQUFDLENBQUE7QUFDbEUsb0NBQTRCLGdEQUFnRCxDQUFDLENBQUE7QUFnQzdFO0lBS0UsaUJBQW9CLGdCQUFpQyxFQUFVLGlCQUE4QjtRQUF6RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFhO0lBRTdGLENBQUM7SUFDRCwwQkFBUSxHQUFSO1FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztJQUNqRSxDQUFDO0lBRUQsaUNBQWUsR0FBZjtRQUNJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUV4QyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVMsQ0FBSztZQUNyQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBQyxTQUFTLEdBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUVyRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxhQUFhLEdBQUMsU0FBUyxHQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFNUQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxhQUFhLEdBQUMsU0FBUyxHQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVMsQ0FBSztZQUNwQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBQyxTQUFTLEdBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNyRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxDQUFDLGFBQWEsR0FBQyxTQUFTLEdBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBSSxDQUFDLENBQUMsQ0FBQztZQUM3RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxDQUFDLGFBQWEsR0FBQyxTQUFTLEdBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFyQ0Q7UUFBQyxZQUFLLEVBQUU7O3lDQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzRDQUFBO0lBL0JWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFVBQVUsRUFBRSxFQUFFO1lBQ2QsS0FBSyxFQUFDLENBQUMsZ0JBQVEsQ0FBQztZQUNoQixhQUFhLEVBQUUsRUFBRTtZQUNqQixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtZQUNyQyxRQUFRLEVBQUUsd2dDQXFCVjtTQUNELENBQUM7O2VBQUE7SUF5Q0YsY0FBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUF4Q1ksZUFBTyxVQXdDbkIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvY29udHJvbHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnLi4vLi4vcGlwZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBbmFseXRpY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8rYnVpbGRlci9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvdW50ZXInLFxyXG4gIGRpcmVjdGl2ZXM6IFtdLFxyXG4gIHBpcGVzOltTYWZlSHRtbF0sXHJcbiAgdmlld1Byb3ZpZGVyczogW10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLWNvbXBvbmVudHNcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZFwiID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHVsbC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tkYXRhLnByb3BzLnRpdGxlfX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC1vdXRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgKm5nSWY9XCJkYXRhLmNvbmZpZy5zaG93SGVscFwiPmhlbHBfb3V0bGluZTwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHAtdGV4dFwiPnt7ZGF0YS5wcm9wcy5oZWxwVGV4dH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiLVwiIGNsYXNzPVwicXR5bWludXNcIiBmaWVsZD1cInF1YW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+cmVtb3ZlX2NpcmNsZV9vdXRsaW5lPC9pPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInF1YW50aXR5XCIgdmFsdWU9XCIwXCIgY2xhc3M9XCJxdHlcIiBbKG5nTW9kZWwpXT1cImRhdGEucHJvcHMuY3VycmVudFZhbHVlXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCItXCIgY2xhc3M9XCJxdHlwbHVzXCIgZmllbGQ9XCJxdWFudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmFkZF9jaXJjbGVfb3V0bGluZTwvaT48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHRgLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ291bnRlciBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgZGV2TW9kZTphbnk7XHJcbiAgaW5jVmFsdWVlOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FuYWx5dGljU2VydmljZTogQW5hbHl0aWNTZXJ2aWNlLCBwcml2YXRlIGpzb25CdWlsZGVySGVscGVyOiBKU09OQnVpbGRlcikge1xyXG5cclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZSA9ICAgdGhpcy5kYXRhLnByb3BzLmRlZmF1bHRWYWx1ZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgdmFyIGluY1ZhbHVlID0gdGhpcy5kYXRhLnByb3BzLmluY1ZhbHVlO1xyXG4gICAgICAvL0luY3JlbWVudCB0aGUgdmFsdWVcclxuICAgICAgalF1ZXJ5KCcucXR5cGx1cycpLmNsaWNrKGZ1bmN0aW9uKGU6YW55KXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGpRdWVyeSh0aGlzKS5hdHRyKCdmaWVsZCcpO1xyXG4gICAgICAgIHZhciBjdXJyZW50VmFsID0gcGFyc2VJbnQoalF1ZXJ5KCdpbnB1dFtuYW1lPScrZmllbGROYW1lKyddJykudmFsKCkpO1xyXG5cclxuICAgICAgICBpZiAoIWlzTmFOKGN1cnJlbnRWYWwpKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnaW5wdXRbbmFtZT0nK2ZpZWxkTmFtZSsnXScpLnZhbChjdXJyZW50VmFsICsgMSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnaW5wdXRbbmFtZT0nK2ZpZWxkTmFtZSsnXScpLnZhbCgwKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vRGVjcmVtZW50IHRoZSB2YWx1ZSB0aWxsIDBcclxuICAgIGpRdWVyeSgnLnF0eW1pbnVzJykuY2xpY2soZnVuY3Rpb24oZTphbnkpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGpRdWVyeSh0aGlzKS5hdHRyKCdmaWVsZCcpO1xyXG4gICAgICAgIHZhciBjdXJyZW50VmFsID0gcGFyc2VJbnQoalF1ZXJ5KCdpbnB1dFtuYW1lPScrZmllbGROYW1lKyddJykudmFsKCkpO1xyXG4gICAgICAgIGlmICghaXNOYU4oY3VycmVudFZhbCkgJiYgY3VycmVudFZhbCA+IDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCdpbnB1dFtuYW1lPScrZmllbGROYW1lKyddJykudmFsKGN1cnJlbnRWYWwgLSAgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCdpbnB1dFtuYW1lPScrZmllbGROYW1lKyddJykudmFsKDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
