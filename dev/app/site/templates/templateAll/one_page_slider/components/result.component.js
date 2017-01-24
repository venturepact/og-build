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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy90ZW1wbGF0ZUFsbC9vbmVfcGFnZV9zbGlkZXIvY29tcG9uZW50cy9yZXN1bHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUUsZUFBZSxDQUFDLENBQUE7QUFDdkYsdUJBQTBELGlCQUFpQixDQUFDLENBQUE7QUFDNUUsbUNBQWtDLHNDQUFzQyxDQUFDLENBQUE7QUFDekUsbUNBQXlCLHlDQUF5QyxDQUFDLENBQUE7QUFDbkUsc0JBQWlDLHNDQUFzQyxDQUFDLENBQUE7QUFDeEUsa0NBQXNCLHFDQUFxQyxDQUFDLENBQUE7QUFDNUQsc0JBQTBCLHNCQUFzQixDQUFDLENBQUE7QUFFakQsb0NBQTRCLG1EQUFtRCxDQUFDLENBQUE7QUFtQmhGO0lBS0ksc0NBQW9CLFdBQThCLEVBQ3RDLGdCQUFrQyxFQUNsQyxLQUFxQixFQUNyQixPQUFlO1FBSFAsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQ3RDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUUzQixDQUFDO0lBRUQsK0NBQVEsR0FBUjtRQUNLLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUUsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsR0FBRyxDQUFDLENBQWEsVUFBb0IsRUFBcEIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQXBCLGNBQW9CLEVBQXBCLElBQW9CLENBQUM7WUFBakMsSUFBSSxJQUFJLFNBQUE7WUFDVCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUVqQixHQUFHLENBQUMsQ0FBZ0IsVUFBYSxFQUFiLEtBQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYSxDQUFDO29CQUE3QixJQUFJLE9BQU8sU0FBQTtvQkFDWixHQUFHLENBQUMsQ0FBYSxVQUFhLEVBQWIsS0FBQSxPQUFPLENBQUMsS0FBSyxFQUFiLGNBQWEsRUFBYixJQUFhLENBQUM7d0JBQTFCLElBQUksSUFBSSxTQUFBO3dCQUNULEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksZ0JBQWdCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDOzRCQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOzRCQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3dCQUNqQyxDQUFDO3FCQUNKO2lCQUNKO1lBQ0wsQ0FBQztTQUNKO0lBRUwsQ0FBQztJQUlELHlEQUFrQixHQUFsQixVQUFtQixJQUFVO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQVksSUFBSyxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELHNEQUFlLEdBQWYsVUFBZ0IsT0FBZ0I7UUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsSUFBSSxDQUFDLE9BQU8sRUFBWixDQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQTNDRDtRQUFDLFlBQUssRUFBRTs7OERBQUE7SUFoQlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSw2QkFBUSxFQUFFLDJCQUFPLENBQUM7WUFDbEQsU0FBUyxFQUFFO2dCQUNQLHVDQUF1QztnQkFDdkMsd0NBQXdDO2dCQUN4Qyw0Q0FBNEM7YUFDL0M7WUFDRCxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtZQUNyQyxLQUFLLEVBQUUsQ0FBQyxpQkFBUyxDQUFDO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLHNDQUFpQixFQUFDLGlDQUFXLENBQUM7U0FDN0MsQ0FBQzs7b0NBQUE7SUErQ0YsbUNBQUM7QUFBRCxDQTdDQSxBQTZDQyxJQUFBO0FBN0NZLG9DQUE0QiwrQkE2Q3hDLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvdGVtcGxhdGVzL3RlbXBsYXRlQWxsL29uZV9wYWdlX3NsaWRlci9jb21wb25lbnRzL3Jlc3VsdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0ICxPbkluaXQsIE9uRGVzdHJveSwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDYWxjdWxhdG9yU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVBbGwvdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3ViRG9tYWluU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7Q29udHJvbH0gZnJvbSAnLi4vLi4vLi4vY29udHJvbHMvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTYWZlU3R5bGUgfSBmcm9tICcuLi8uLi8uLi9waXBlcy9pbmRleCc7XHJcbmltcG9ydCB7UGFnZSwgU2VjdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vK2J1aWxkZXIvbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgSlNPTkJ1aWxkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8rYnVpbGRlci9zZXJ2aWNlcy9KU09OQnVpbGRlci5zZXJ2aWNlJztcclxuZGVjbGFyZSB2YXIgZ2E6IEZ1bmN0aW9uO1xyXG5kZWNsYXJlIHZhciBkb2N1bWVudDogYW55O1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdvbmUtcGFnZS1zbGlkZXItcmVzdWx0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAncHVibGljUmVzdWx0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgVGVtcGxhdGUsIENvbnRyb2xdLFxyXG4gICAgc3R5bGVVcmxzOiBbXHJcbiAgICAgICAgJy4uL3RlbXBsYXRlc0h0bWwvYXNzZXRzL2Nzcy9mb250cy5jc3MnLFxyXG4gICAgICAgICcuLi90ZW1wbGF0ZXNIdG1sL2Fzc2V0cy9jc3Mvc3R5bGUxLmNzcycsXHJcbiAgICAgICAgJy4uL3RlbXBsYXRlc0h0bWwvYXNzZXRzL2Nzcy9yZXNwb25zaXZlLmNzcydcclxuICAgIF0sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgcGlwZXM6IFtTYWZlU3R5bGVdLFxyXG4gICAgcHJvdmlkZXJzOiBbQ2FsY3VsYXRvclNlcnZpY2UsSlNPTkJ1aWxkZXJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT25lUGFnZVNsaWRlclJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuICAgIHBhZ2U6IGFueTtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2FsU2VydmljZTogQ2FsY3VsYXRvclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzdWJEb21haW5TZXJ2aWNlOiBTdWJEb21haW5TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgLy9jb2RlXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgIGpRdWVyeSgnbWV0YVtuYW1lPWRlc2NyaXB0aW9uXScpLmF0dHIoJ2NvbnRlbnQnLCB0aGlzLmRhdGEuY2FsYy5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aGlzLmRhdGEuY2FsYy50aXRsZTtcclxuICAgICAgICBqUXVlcnkoJyNmYXZpY29uJykuYXR0cignaHJlZicsIHRoaXMuZGF0YS5jYWxjLmZhdmljb24pO1xyXG4gICAgICAgIGZvciAodmFyIHBhZ2Ugb2YgdGhpcy5kYXRhLmNhbGMucGFnZXMpIHtcclxuICAgICAgICAgICAgaWYgKHBhZ2UudHlwZSA9PT0gJ1Jlc3VsdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgc2VjdGlvbiBvZiBwYWdlLnNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBvZiBzZWN0aW9uLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT0gJ3Jlc3VsdF9zdW1tYXJ5JyB8fCBpdGVtLnR5cGUgPT0gJ3Jlc3VsdF9vdXRwdXQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJlc3VsdCA9IHRoaXMuZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXRzID0gdGhpcy5kYXRhLnN0YXRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldFZpc2libGVTZWN0aW9ucyhwYWdlOiBQYWdlKTogYW55W10ge1xyXG4gICAgICAgIHJldHVybiBwYWdlLnNlY3Rpb25zLmZpbHRlcigoc2VjdGlvbjogYW55KSA9PiBzZWN0aW9uLnZpc2libGUpO1xyXG4gICAgfVxyXG4gICAgZ2V0VmlzaWJsZUl0ZW1zKHNlY3Rpb246IFNlY3Rpb24pOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHNlY3Rpb24uaXRlbXMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0udmlzaWJsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufSJdfQ==
