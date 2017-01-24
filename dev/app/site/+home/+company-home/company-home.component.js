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
var index_1 = require('../../templates/pipes/index');
var index_2 = require('../../../shared/services/index');
var env_config_1 = require('../../../config/env.config');
var CompanyHomeComponent = (function () {
    function CompanyHomeComponent(companyService, _cookieService, subDomainService) {
        this.companyService = companyService;
        this._cookieService = _cookieService;
        this.subDomainService = subDomainService;
        this.Message = "You Don't Have Access to This Company";
        this.loader = 1;
        this.apps = [];
        this.subs = [];
        if (_cookieService.readCookie('storage'))
            this.Message = 'Company Home';
    }
    CompanyHomeComponent.prototype.ngOnInit = function () {
        this.company_id = localStorage.getItem('company');
        if (localStorage.getItem('doingLogout')) {
            this.loader = 0;
            setTimeout(function () {
                this.loader = 1;
                localStorage.removeItem('doingLogout');
            }, 6000);
        }
        else if (this.company_id)
            this.subs.push(this.getCompanyProjects());
    };
    CompanyHomeComponent.prototype.getCompanyProjects = function () {
        var _this = this;
        return this.companyService.getCompanyHomeProjects(this.company_id)
            .subscribe(function (response) {
            _this.apps = response.map(function (app) {
                app.createdAt = moment(app.createdAt).format('MMM Do YY');
                app.url = env_config_1.Config.PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + env_config_1.Config.APP_EXTENSION + '/' + app.url;
                return app;
            });
            console.log('Hiii->', _this.apps);
        }, function (error) {
            console.log(error);
        });
    };
    CompanyHomeComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    CompanyHomeComponent.prototype.unsubscribe = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    CompanyHomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'company-home',
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: 'company-home.component.html',
            styleUrls: ['company-home.component.css'],
            pipes: [index_1.SafeStyle]
        }), 
        __metadata('design:paramtypes', [index_2.CompanyService, index_2.CookieService, index_2.SubDomainService])
    ], CompanyHomeComponent);
    return CompanyHomeComponent;
}());
exports.CompanyHomeComponent = CompanyHomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytob21lLytjb21wYW55LWhvbWUvY29tcGFueS1ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBQzNELHVCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELHNCQUEwQiw2QkFBNkIsQ0FBQyxDQUFBO0FBRXhELHNCQUE4RCxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9GLDJCQUF1Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBZ0JwRDtJQU9FLDhCQUFvQixjQUE4QixFQUFTLGNBQTRCLEVBQVUsZ0JBQWtDO1FBQS9HLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFjO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU5uSSxZQUFPLEdBQVksdUNBQXVDLENBQUM7UUFDM0QsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUVYLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFHaEMsRUFBRSxDQUFBLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixVQUFVLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFFOUMsQ0FBQztJQUVELGlEQUFrQixHQUFsQjtRQUFBLGlCQWVDO1FBZEMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUMvRCxTQUFTLENBQ1IsVUFBQyxRQUFlO1lBQ2QsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBUTtnQkFDaEMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDMUQsR0FBRyxDQUFDLEdBQUcsR0FBRyxtQkFBTSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsbUJBQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ25ILE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQ0QsVUFBQyxLQUFVO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBekRIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUMvQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ3pDLEtBQUssRUFBQyxDQUFDLGlCQUFTLENBQUM7U0FDbEIsQ0FBQzs7NEJBQUE7SUFtREYsMkJBQUM7QUFBRCxDQWpEQSxBQWlEQyxJQUFBO0FBakRZLDRCQUFvQix1QkFpRGhDLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK2hvbWUvK2NvbXBhbnktaG9tZS9jb21wYW55LWhvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2FmZVN0eWxlIH0gZnJvbSAnLi4vLi4vdGVtcGxhdGVzL3BpcGVzL2luZGV4JztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBTdWJEb21haW5TZXJ2aWNlLENvb2tpZVNlcnZpY2UsQ29tcGFueVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvZW52LmNvbmZpZyc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDogYW55O1xyXG5kZWNsYXJlIHZhciBib290Ym94OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnY29tcGFueS1ob21lJyxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gIHRlbXBsYXRlVXJsOiAnY29tcGFueS1ob21lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY29tcGFueS1ob21lLmNvbXBvbmVudC5jc3MnXSxcclxuICBwaXBlczpbU2FmZVN0eWxlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBhbnlIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIE1lc3NhZ2UgOiBTdHJpbmcgPSBcIllvdSBEb24ndCBIYXZlIEFjY2VzcyB0byBUaGlzIENvbXBhbnlcIjtcclxuICBsb2FkZXI6IE51bWJlciA9IDE7XHJcbiAgcHJpdmF0ZSBjb21wYW55X2lkOiBTdHJpbmc7XHJcbiAgcHJpdmF0ZSBhcHBzOiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wYW55U2VydmljZTogQ29tcGFueVNlcnZpY2UscHJpdmF0ZSBfY29va2llU2VydmljZTpDb29raWVTZXJ2aWNlICxwcml2YXRlIHN1YkRvbWFpblNlcnZpY2U6IFN1YkRvbWFpblNlcnZpY2UpIHtcclxuICAgIGlmKF9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSlcclxuICAgICAgdGhpcy5NZXNzYWdlID0gJ0NvbXBhbnkgSG9tZSc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY29tcGFueV9pZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb21wYW55Jyk7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9pbmdMb2dvdXQnKSl7XHJcbiAgICAgIHRoaXMubG9hZGVyID0gMDtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubG9hZGVyID0gMTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZG9pbmdMb2dvdXQnKTtcclxuICAgICAgfSw2MDAwKTtcclxuICAgIH1lbHNlIGlmKHRoaXMuY29tcGFueV9pZClcclxuICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5nZXRDb21wYW55UHJvamVjdHMoKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcGFueVByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29tcGFueVNlcnZpY2UuZ2V0Q29tcGFueUhvbWVQcm9qZWN0cyh0aGlzLmNvbXBhbnlfaWQpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKHJlc3BvbnNlOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hcHBzID0gcmVzcG9uc2UubWFwKChhcHA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBhcHAuY3JlYXRlZEF0ID0gbW9tZW50KGFwcC5jcmVhdGVkQXQpLmZvcm1hdCgnTU1NIERvIFlZJyk7XHJcbiAgICAgICAgICAgIGFwcC51cmwgPSBDb25maWcuUFJPVE9DT0wgKyB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW4gKyAnLicgKyBDb25maWcuQVBQX0VYVEVOU0lPTiArICcvJyArYXBwLnVybDtcclxuICAgICAgICAgICAgcmV0dXJuIGFwcDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0hpaWktPicsdGhpcy5hcHBzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICB1bnN1YnNjcmliZSgpIHtcclxuICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1Yj0+c3ViLnVuc3Vic2NyaWJlKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=
