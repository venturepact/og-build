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
var TextArea = (function () {
    function TextArea(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    TextArea.prototype.ngOnInit = function () {
        this.data.props.currentValue = this.data.props.defaultValue;
        this.data.props.currentLabel = this.data.props.defaultValue;
    };
    TextArea.prototype.onBlur = function () {
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            if (this._analyticService.getVisitorAnswers().length <= 1) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data, this.jsonBuilderHelper.getTemplateQuestionare())
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.key == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TextArea.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TextArea.prototype, "devMode", void 0);
    TextArea = __decorate([
        core_1.Component({
            selector: 'text_area',
            directives: [],
            viewProviders: [],
            pipes: [index_1.SafeHtml],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div class=\"input-field\"> \n                <textarea  class=\"validate\" (blur)=\"onBlur()\"  [required]=\"data.required\" placeholder=\"{{data.config.placeholder}}\" (change)=\"data.props.currentLabel=data.props.currentValue\" [(ngModel)]=\"data.props.currentValue\" ></textarea>\n                <label for=\"first_name\">{{data.props.title}}</label>\n             </div>"
        }), 
        __metadata('design:paramtypes', [analytic_service_1.AnalyticService, JSONBuilder_service_1.JSONBuilder])
    ], TextArea);
    return TextArea;
}());
exports.TextArea = TextArea;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpRixlQUFlLENBQUMsQ0FBQTtBQUNqRyxzQkFBeUIsbUJBQW1CLENBQUMsQ0FBQTtBQUM3QyxpQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQUNsRSxvQ0FBNEIsZ0RBQWdELENBQUMsQ0FBQTtBQVk3RTtJQUtFLGtCQUFvQixnQkFBaUMsRUFBVSxpQkFBOEI7UUFBekUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtJQUU3RixDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztJQUM5RCxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUFBLGlCQXFCQztRQXBCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFM0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVyRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLENBQUM7cUJBQ25JLFNBQVMsQ0FDVixVQUFDLFFBQWE7b0JBQ1osS0FBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksZUFBZSxDQUFDO3dCQUNsQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDakQsQ0FBQyxFQUNELFVBQUMsS0FBVTtvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixDQUFDLENBQ0EsQ0FBQztZQUNOLENBQUM7UUFFSCxDQUFDO0lBQ0gsQ0FBQztJQWpDRDtRQUFDLFlBQUssRUFBRTs7MENBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NkNBQUE7SUFiVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixVQUFVLEVBQUUsRUFBRTtZQUNkLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLGdCQUFRLENBQUM7WUFDakIsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDckMsUUFBUSxFQUFFLDBYQUdRO1NBQ25CLENBQUM7O2dCQUFBO0lBb0NGLGVBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLGdCQUFRLFdBbUNwQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9jb250cm9scy90ZXh0YXJlYS90ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnLi4vLi4vcGlwZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBbmFseXRpY1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmFseXRpYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8rYnVpbGRlci9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0ZXh0X2FyZWEnLFxyXG4gIGRpcmVjdGl2ZXM6IFtdLFxyXG4gIHZpZXdQcm92aWRlcnM6IFtdLFxyXG4gIHBpcGVzOiBbU2FmZUh0bWxdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiaW5wdXQtZmllbGRcIj4gXHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgIGNsYXNzPVwidmFsaWRhdGVcIiAoYmx1cik9XCJvbkJsdXIoKVwiICBbcmVxdWlyZWRdPVwiZGF0YS5yZXF1aXJlZFwiIHBsYWNlaG9sZGVyPVwie3tkYXRhLmNvbmZpZy5wbGFjZWhvbGRlcn19XCIgKGNoYW5nZSk9XCJkYXRhLnByb3BzLmN1cnJlbnRMYWJlbD1kYXRhLnByb3BzLmN1cnJlbnRWYWx1ZVwiIFsobmdNb2RlbCldPVwiZGF0YS5wcm9wcy5jdXJyZW50VmFsdWVcIiA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdF9uYW1lXCI+e3tkYXRhLnByb3BzLnRpdGxlfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dEFyZWEgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuICBASW5wdXQoKSBkZXZNb2RlOiBhbnk7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYW5hbHl0aWNTZXJ2aWNlOiBBbmFseXRpY1NlcnZpY2UsIHByaXZhdGUganNvbkJ1aWxkZXJIZWxwZXI6IEpTT05CdWlsZGVyKSB7XHJcblxyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZGF0YS5wcm9wcy5jdXJyZW50VmFsdWUgPSB0aGlzLmRhdGEucHJvcHMuZGVmYXVsdFZhbHVlO1xyXG4gICAgdGhpcy5kYXRhLnByb3BzLmN1cnJlbnRMYWJlbCA9IHRoaXMuZGF0YS5wcm9wcy5kZWZhdWx0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKSB7XHJcbiAgICBpZiAodGhpcy5qc29uQnVpbGRlckhlbHBlci5nZXRKU09OQnVpbHQoKS5zdGF0dXMgPT0gJ0xJVkUnKSB7XHJcbiAgICAgIC8qIGlmIGtleSBpcyB1bmRlZmluZWQgdGhlbiBwdXNoIGluIGFycmF5ICovXHJcbiAgICAgIGlmICh0aGlzLl9hbmFseXRpY1NlcnZpY2UuZ2V0VmlzaXRvcktleSgpID09ICcnKVxyXG4gICAgICAgIHRoaXMuX2FuYWx5dGljU2VydmljZS5zZXRWaXNpdG9yQW5zd2Vycyh0aGlzLmRhdGEpO1xyXG4gICAgICAvKiAgKi9cclxuICAgICAgaWYgKHRoaXMuX2FuYWx5dGljU2VydmljZS5nZXRWaXNpdG9yQW5zd2VycygpLmxlbmd0aCA8PSAxKSB7XHJcbiAgICAgICAgdGhpcy5fYW5hbHl0aWNTZXJ2aWNlLnNhdmVTdGF0cyh0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldEpTT05CdWlsdCgpLl9pZCwgdGhpcy5kYXRhLCB0aGlzLmpzb25CdWlsZGVySGVscGVyLmdldFRlbXBsYXRlUXVlc3Rpb25hcmUoKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmFseXRpY1NlcnZpY2Uuc2V0VmlzaXRvcktleShyZXNwb25zZS5rZXkpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uua2V5ID09ICdBcnJheSBVcGRhdGVkJylcclxuICAgICAgICAgICAgICB0aGlzLl9hbmFseXRpY1NlcnZpY2UucmVJbml0VmlzaXRvckFuc3dlcnMoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
