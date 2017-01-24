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
var calculator_service_1 = require('./../services/calculator.service');
var template_component_1 = require('./../templateAll/template.component');
var index_1 = require('../../../shared/services/index');
var index_2 = require('../pipes/index');
var result_1 = require('./../templateAll/result');
var ResultComponent = (function () {
    function ResultComponent(_calService, subDomainService, route, _router) {
        this._calService = _calService;
        this.subDomainService = subDomainService;
        this.route = route;
        this._router = _router;
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.leadId = params['leadId'];
            _this.initializeResult();
        });
    };
    ResultComponent.prototype.initializeResult = function () {
        var _this = this;
        this._calService.getAppResult(this.leadId)
            .subscribe(function (response) {
            _this.company = _this.subDomainService.subDomain.company_id;
            if (response.calc.hasOwnProperty('url')) {
                if (_this.company == response.calc.company) {
                    console.log('Data from Server ->', response);
                    localStorage.setItem('template', JSON.stringify(response.calc));
                    _this.tempName = response.calc.template;
                    _this.result = response;
                }
                else
                    _this.pageStatus = 'Not-Found';
            }
            else
                _this.pageStatus = 'Not-Found';
        }, function (error) {
            console.log(error);
        });
    };
    ResultComponent.prototype.getVisibleSections = function (page) {
        return page.sections.filter(function (section) { return section.visible; });
    };
    ResultComponent.prototype.getVisibleItems = function (section) {
        return section.items.filter(function (item) { return item.visible; });
    };
    ResultComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ResultComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-result',
            template: "\n        <one-page-slider-result *ngIf=\"tempName=='one-page-slider'\" [data]=\"result\"></one-page-slider-result>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, template_component_1.Template, result_1.RESULT],
            styleUrls: ['../calculator.component.css'],
            pipes: [index_2.SafeStyle],
            providers: [calculator_service_1.CalculatorService]
        }), 
        __metadata('design:paramtypes', [calculator_service_1.CalculatorService, index_1.SubDomainService, router_1.ActivatedRoute, router_1.Router])
    ], ResultComponent);
    return ResultComponent;
}());
exports.ResultComponent = ResultComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL3RlbXBsYXRlcy9jb21wb25lbnRzL3Jlc3VsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCx1QkFBMEQsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RSxtQ0FBa0Msa0NBQWtDLENBQUMsQ0FBQTtBQUNyRSxtQ0FBeUIscUNBQXFDLENBQUMsQ0FBQTtBQUMvRCxzQkFBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUNsRSxzQkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUUzQyx1QkFBdUIseUJBQXlCLENBQUMsQ0FBQTtBQWVqRDtJQVVJLHlCQUFvQixXQUE4QixFQUN0QyxnQkFBa0MsRUFDbEMsS0FBcUIsRUFDckIsT0FBZTtRQUhQLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtRQUN0QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFFM0IsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUpHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUN6QyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwwQ0FBZ0IsR0FBaEI7UUFBQSxpQkFxQkM7UUFuQkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNyQyxTQUFTLENBQ1YsVUFBQyxRQUFhO1lBQ1YsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztZQUMxRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUM3QyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNoRSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUN2QyxLQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztnQkFDM0IsQ0FBQztnQkFBQyxJQUFJO29CQUNGLEtBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1lBQ3RDLENBQUM7WUFBQyxJQUFJO2dCQUNGLEtBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO1FBQ3RDLENBQUMsRUFDRCxVQUFDLEtBQVU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FDQSxDQUFDO0lBQ1YsQ0FBQztJQUVELDRDQUFrQixHQUFsQixVQUFtQixJQUFVO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE9BQVksSUFBSyxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELHlDQUFlLEdBQWYsVUFBZ0IsT0FBZ0I7UUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUyxJQUFLLE9BQUEsSUFBSSxDQUFDLE9BQU8sRUFBWixDQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQXJFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLDJIQUVUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsNkJBQVEsRUFBRSxlQUFNLENBQUM7WUFDakQsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7WUFDMUMsS0FBSyxFQUFFLENBQUMsaUJBQVMsQ0FBQztZQUNsQixTQUFTLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztTQUNqQyxDQUFDOzt1QkFBQTtJQTRERixzQkFBQztBQUFELENBMURBLEFBMERDLElBQUE7QUExRFksdUJBQWUsa0JBMEQzQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlL3RlbXBsYXRlcy9jb21wb25lbnRzL3Jlc3VsdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2FsY3VsYXRvclNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2NhbGN1bGF0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnLi8uLi90ZW1wbGF0ZUFsbC90ZW1wbGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJEb21haW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgU2FmZVN0eWxlIH0gZnJvbSAnLi4vcGlwZXMvaW5kZXgnO1xyXG5pbXBvcnQge1BhZ2UsIFNlY3Rpb259IGZyb20gJy4vLi4vLi4vK2J1aWxkZXIvbW9kZWxzL21vZGVsJztcclxuaW1wb3J0IHsgUkVTVUxUIH0gZnJvbSAnLi8uLi90ZW1wbGF0ZUFsbC9yZXN1bHQnO1xyXG5kZWNsYXJlIHZhciBnYTogRnVuY3Rpb247XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ29nLXJlc3VsdCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxvbmUtcGFnZS1zbGlkZXItcmVzdWx0ICpuZ0lmPVwidGVtcE5hbWU9PSdvbmUtcGFnZS1zbGlkZXInXCIgW2RhdGFdPVwicmVzdWx0XCI+PC9vbmUtcGFnZS1zbGlkZXItcmVzdWx0PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgVGVtcGxhdGUsIFJFU1VMVF0sXHJcbiAgICBzdHlsZVVybHM6IFsnLi4vY2FsY3VsYXRvci5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBwaXBlczogW1NhZmVTdHlsZV0sXHJcbiAgICBwcm92aWRlcnM6IFtDYWxjdWxhdG9yU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgdGVtcE5hbWU6IFN0cmluZztcclxuICAgIHBhZ2VTdGF0dXM6IFN0cmluZztcclxuICAgIGNvbXBhbnk6IFN0cmluZztcclxuICAgIGxlYWRJZDogc3RyaW5nO1xyXG4gICAgcGFnZTogYW55O1xyXG4gICAgcmVzdWx0OiBhbnk7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhbFNlcnZpY2U6IENhbGN1bGF0b3JTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgc3ViRG9tYWluU2VydmljZTogU3ViRG9tYWluU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIC8vY29kZVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vZ2V0IG5hbWUgZnJvbSB1cmxcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxlYWRJZCA9IHBhcmFtc1snbGVhZElkJ107XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVJlc3VsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVSZXN1bHQoKSB7XHJcbiAgICAgICAgLy9nZXQgQXBwXHJcbiAgICAgICAgdGhpcy5fY2FsU2VydmljZS5nZXRBcHBSZXN1bHQodGhpcy5sZWFkSWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBhbnkgPSB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLmNvbXBhbnlfaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY2FsYy5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21wYW55ID09IHJlc3BvbnNlLmNhbGMuY29tcGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGF0YSBmcm9tIFNlcnZlciAtPicsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RlbXBsYXRlJywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuY2FsYykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBOYW1lID0gcmVzcG9uc2UuY2FsYy50ZW1wbGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlU3RhdHVzID0gJ05vdC1Gb3VuZCc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VTdGF0dXMgPSAnTm90LUZvdW5kJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpc2libGVTZWN0aW9ucyhwYWdlOiBQYWdlKTogYW55W10ge1xyXG4gICAgICAgIHJldHVybiBwYWdlLnNlY3Rpb25zLmZpbHRlcigoc2VjdGlvbjogYW55KSA9PiBzZWN0aW9uLnZpc2libGUpO1xyXG4gICAgfVxyXG4gICAgZ2V0VmlzaWJsZUl0ZW1zKHNlY3Rpb246IFNlY3Rpb24pOiBhbnlbXSB7XHJcbiAgICAgICAgcmV0dXJuIHNlY3Rpb24uaXRlbXMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0udmlzaWJsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufSJdfQ==
