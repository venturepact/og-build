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
var router_1 = require('@angular/router');
var calculator_service_1 = require('../../../services/calculator.service');
var template_component_1 = require('../../../templateAll/template.component');
var index_1 = require('../../../../../shared/services/index');
var control_component_1 = require('../../../controls/control.component');
var index_2 = require('../../../pipes/index');
var JSONBuilder_service_1 = require('../../../../+builder/services/JSONBuilder.service');
var OnePageSliderResultComponent = (function () {
    function OnePageSliderResultComponent(_calService, subDomainService, route, _router) {
        this._calService = _calService;
        this.subDomainService = subDomainService;
        this.route = route;
        this._router = _router;
    }
    OnePageSliderResultComponent.prototype.ngOnInit = function () {
        jQuery('meta[name=description]').attr('content', this.data.calc.description);
        document.title = this.data.calc.title;
        jQuery('#favicon').attr('href', this.data.calc.favicon);
        for (var _i = 0, _a = this.data.calc.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === 'Result') {
                this.page = page;
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                        var item = _e[_d];
                        if (item.type == 'result_summary' || item.type == 'result_output') {
                            item.result = this.data.result;
                            item.stats = this.data.stats;
                        }
                    }
                }
            }
        }
    };
    OnePageSliderResultComponent.prototype.getVisibleSections = function (page) {
        return page.sections.filter(function (section) { return section.visible; });
    };
    OnePageSliderResultComponent.prototype.getVisibleItems = function (section) {
        return section.items.filter(function (item) { return item.visible; });
    };
    OnePageSliderResultComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OnePageSliderResultComponent.prototype, "data", void 0);
    OnePageSliderResultComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'one-page-slider-result',
            templateUrl: 'publicResult.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, template_component_1.Template, control_component_1.Control],
            styleUrls: [
                '../templatesHtml/assets/css/fonts.css',
                '../templatesHtml/assets/css/style1.css',
                '../templatesHtml/assets/css/responsive.css'
            ],
            encapsulation: core_1.ViewEncapsulation.None,
            pipes: [index_2.SafeStyle],
            providers: [calculator_service_1.CalculatorService, JSONBuilder_service_1.JSONBuilder]
        }), 
        __metadata('design:paramtypes', [calculator_service_1.CalculatorService, index_1.SubDomainService, router_1.ActivatedRoute, router_1.Router])
    ], OnePageSliderResultComponent);
    return OnePageSliderResultComponent;
}());
exports.OnePageSliderResultComponent = OnePageSliderResultComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy90ZW1wbGF0ZUFsbC9ob21lX2xvYW5fY2FsY3VsYXRvci9jb21wb25lbnRzL3Jlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1RSxlQUFlLENBQUMsQ0FBQTtBQUN2Rix1QkFBMEQsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RSxtQ0FBa0Msc0NBQXNDLENBQUMsQ0FBQTtBQUN6RSxtQ0FBeUIseUNBQXlDLENBQUMsQ0FBQTtBQUNuRSxzQkFBaUMsc0NBQXNDLENBQUMsQ0FBQTtBQUN4RSxrQ0FBc0IscUNBQXFDLENBQUMsQ0FBQTtBQUM1RCxzQkFBMEIsc0JBQXNCLENBQUMsQ0FBQTtBQUVqRCxvQ0FBNEIsbURBQW1ELENBQUMsQ0FBQTtBQW1CaEY7SUFLSSxzQ0FBb0IsV0FBOEIsRUFDdEMsZ0JBQWtDLEVBQ2xDLEtBQXFCLEVBQ3JCLE9BQWU7UUFIUCxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDdEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBRTNCLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQ0ssTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RSxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RCxHQUFHLENBQUMsQ0FBYSxVQUFvQixFQUFwQixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBcEIsY0FBb0IsRUFBcEIsSUFBb0IsQ0FBQztZQUFqQyxJQUFJLElBQUksU0FBQTtZQUNULEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBRWpCLEdBQUcsQ0FBQyxDQUFnQixVQUFhLEVBQWIsS0FBQSxJQUFJLENBQUMsUUFBUSxFQUFiLGNBQWEsRUFBYixJQUFhLENBQUM7b0JBQTdCLElBQUksT0FBTyxTQUFBO29CQUNaLEdBQUcsQ0FBQyxDQUFhLFVBQWEsRUFBYixLQUFBLE9BQU8sQ0FBQyxLQUFLLEVBQWIsY0FBYSxFQUFiLElBQWEsQ0FBQzt3QkFBMUIsSUFBSSxJQUFJLFNBQUE7d0JBQ1QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7NEJBQ2hFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7NEJBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQ2pDLENBQUM7cUJBQ0o7aUJBQ0o7WUFDTCxDQUFDO1NBQ0o7SUFFTCxDQUFDO0lBSUQseURBQWtCLEdBQWxCLFVBQW1CLElBQVU7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBWSxJQUFLLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBZixDQUFlLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0Qsc0RBQWUsR0FBZixVQUFnQixPQUFnQjtRQUM1QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLENBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxrREFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBM0NEO1FBQUMsWUFBSyxFQUFFOzs4REFBQTtJQWhCWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDZCQUFRLEVBQUUsMkJBQU8sQ0FBQztZQUNsRCxTQUFTLEVBQUU7Z0JBQ1AsdUNBQXVDO2dCQUN2Qyx3Q0FBd0M7Z0JBQ3hDLDRDQUE0QzthQUMvQztZQUNELGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLEtBQUssRUFBRSxDQUFDLGlCQUFTLENBQUM7WUFDbEIsU0FBUyxFQUFFLENBQUMsc0NBQWlCLEVBQUMsaUNBQVcsQ0FBQztTQUM3QyxDQUFDOztvQ0FBQTtJQStDRixtQ0FBQztBQUFELENBN0NBLEFBNkNDLElBQUE7QUE3Q1ksb0NBQTRCLCtCQTZDeEMsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS90ZW1wbGF0ZXMvdGVtcGxhdGVBbGwvaG9tZV9sb2FuX2NhbGN1bGF0b3IvY29tcG9uZW50cy9yZXN1bHQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCAsT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2FsY3VsYXRvclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9jYWxjdWxhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlQWxsL3RlbXBsYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1YkRvbWFpblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQge0NvbnRyb2x9IGZyb20gJy4uLy4uLy4uL2NvbnRyb2xzL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2FmZVN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vcGlwZXMvaW5kZXgnO1xyXG5pbXBvcnQge1BhZ2UsIFNlY3Rpb259IGZyb20gJy4uLy4uLy4uLy4uLytidWlsZGVyL21vZGVscy9tb2RlbCc7XHJcbmltcG9ydCB7IEpTT05CdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vK2J1aWxkZXIvc2VydmljZXMvSlNPTkJ1aWxkZXIuc2VydmljZSc7XHJcbmRlY2xhcmUgdmFyIGdhOiBGdW5jdGlvbjtcclxuZGVjbGFyZSB2YXIgZG9jdW1lbnQ6IGFueTtcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnb25lLXBhZ2Utc2xpZGVyLXJlc3VsdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3B1YmxpY1Jlc3VsdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFRlbXBsYXRlLCBDb250cm9sXSxcclxuICAgIHN0eWxlVXJsczogW1xyXG4gICAgICAgICcuLi90ZW1wbGF0ZXNIdG1sL2Fzc2V0cy9jc3MvZm9udHMuY3NzJyxcclxuICAgICAgICAnLi4vdGVtcGxhdGVzSHRtbC9hc3NldHMvY3NzL3N0eWxlMS5jc3MnLFxyXG4gICAgICAgICcuLi90ZW1wbGF0ZXNIdG1sL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3MnXHJcbiAgICBdLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIHBpcGVzOiBbU2FmZVN0eWxlXSxcclxuICAgIHByb3ZpZGVyczogW0NhbGN1bGF0b3JTZXJ2aWNlLEpTT05CdWlsZGVyXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE9uZVBhZ2VTbGlkZXJSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcbiAgICBwYWdlOiBhbnk7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhbFNlcnZpY2U6IENhbGN1bGF0b3JTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgc3ViRG9tYWluU2VydmljZTogU3ViRG9tYWluU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIC8vY29kZVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgICBqUXVlcnkoJ21ldGFbbmFtZT1kZXNjcmlwdGlvbl0nKS5hdHRyKCdjb250ZW50JywgdGhpcy5kYXRhLmNhbGMuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGhpcy5kYXRhLmNhbGMudGl0bGU7XHJcbiAgICAgICAgalF1ZXJ5KCcjZmF2aWNvbicpLmF0dHIoJ2hyZWYnLCB0aGlzLmRhdGEuY2FsYy5mYXZpY29uKTtcclxuICAgICAgICBmb3IgKHZhciBwYWdlIG9mIHRoaXMuZGF0YS5jYWxjLnBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGlmIChwYWdlLnR5cGUgPT09ICdSZXN1bHQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHNlY3Rpb24gb2YgcGFnZS5zZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gb2Ygc2VjdGlvbi5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlID09ICdyZXN1bHRfc3VtbWFyeScgfHwgaXRlbS50eXBlID09ICdyZXN1bHRfb3V0cHV0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5yZXN1bHQgPSB0aGlzLmRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGF0cyA9IHRoaXMuZGF0YS5zdGF0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBnZXRWaXNpYmxlU2VjdGlvbnMocGFnZTogUGFnZSk6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gcGFnZS5zZWN0aW9ucy5maWx0ZXIoKHNlY3Rpb246IGFueSkgPT4gc2VjdGlvbi52aXNpYmxlKTtcclxuICAgIH1cclxuICAgIGdldFZpc2libGVJdGVtcyhzZWN0aW9uOiBTZWN0aW9uKTogYW55W10ge1xyXG4gICAgICAgIHJldHVybiBzZWN0aW9uLml0ZW1zLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnZpc2libGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn0iXX0=
