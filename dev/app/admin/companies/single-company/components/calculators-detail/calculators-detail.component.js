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
var index_1 = require('./../../../../../shared/services/index');
var router_1 = require('@angular/router');
var index_2 = require('./../../../../../shared/services/index');
var CalculatorDetailComponent = (function () {
    function CalculatorDetailComponent(companyService, route, _script, router) {
        var _this = this;
        this.companyService = companyService;
        this.route = route;
        this._script = _script;
        this.router = router;
        this.calc_details = [];
        this.sub_domain = '';
        var url = window.location.hostname;
        if (this.checkSubDomain(url))
            this.sub_domain = url.split('.')[0];
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    CalculatorDetailComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._script.load('datatables')
            .then(function (data) {
            _this.tableInit();
        })
            .catch(function (error) {
            console.log('Script not loaded', error);
        });
    };
    CalculatorDetailComponent.prototype.tableInit = function () {
        var _this = this;
        this.companyService.getCompanyProjects(this.company.sub_domain)
            .subscribe(function (result) {
            _this.calc_details = result;
            setTimeout(function () {
                jQuery('#calc-datatable').DataTable();
            }, 200);
        }, function (error) {
            console.log("error calc", error);
        });
    };
    CalculatorDetailComponent.prototype.link_maker = function (link) {
        var subdomain = this.company.sub_domain;
        var location = window.location.href;
        var domain = location.split('//')[1];
        domain = domain.split('/')[0];
        domain = subdomain + '.' + domain.split('.')[1] + '.' + domain.split('.')[2] + '/' + link;
        return domain;
    };
    CalculatorDetailComponent.prototype.calc_navigation = function (link) {
        var url = 'http://' + this.link_maker(link);
        var win = window.open(url, '_blank');
        win.focus();
    };
    CalculatorDetailComponent.prototype.checkSubDomain = function (url) {
        url = url.replace(/^\s+/, '');
        url = url.replace(/\s+$/, '');
        url = url.replace(/\\/g, '/');
        url = url.replace(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i, '');
        url = url.replace(/^www\./i, '');
        if (url.split('.').length === 3 && url.split('.')[0] === 'app')
            return false;
        url = url.replace(/\/(.*)/, '');
        if (url.match(/\.[a-z]{2,3}\.[a-z]{2}$/i)) {
            url = url.replace(/\.[a-z]{2,3}\.[a-z]{2}$/i, '');
        }
        else if (url.match(/\.[a-z]{2,5}$/i)) {
            url = url.replace(/\.[a-z]{2,5}$/i, '');
        }
        return (url.match(/\./g)) ? true : false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CalculatorDetailComponent.prototype, "company", void 0);
    CalculatorDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'calculators-detail',
            templateUrl: 'calculators-detail.component.html',
            styleUrls: ['calculators-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [index_1.CompanyService, router_1.ActivatedRoute, index_2.Script, router_1.Router])
    ], CalculatorDetailComponent);
    return CalculatorDetailComponent;
}());
exports.CalculatorDetailComponent = CalculatorDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wYW5pZXMvc2luZ2xlLWNvbXBhbnkvY29tcG9uZW50cy9jYWxjdWxhdG9ycy1kZXRhaWwvY2FsY3VsYXRvcnMtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStDLGVBQWUsQ0FBQyxDQUFBO0FBQy9ELHNCQUE2Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3RFLHVCQUFvQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RELHNCQUFxQix3Q0FBd0MsQ0FBQyxDQUFBO0FBUzlEO0lBS0MsbUNBQW9CLGNBQThCLEVBQ3pDLEtBQXFCLEVBQVUsT0FBZSxFQUFXLE1BQWU7UUFObEYsaUJBcUZDO1FBaEZvQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDekMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVcsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUpqRixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQU8sRUFBRSxDQUFDO1FBSWxCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDaEMsS0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFHSixDQUFDO0lBRUQsbURBQWUsR0FBZjtRQUFBLGlCQVFDO1FBUEEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQzdC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QixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLDBCQUEwQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7SUFDM0MsQ0FBQztJQS9FRjtRQUFDLFlBQUssRUFBRTs7OERBQUE7SUFYVDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1NBQy9DLENBQUM7O2lDQUFBO0lBdUZGLGdDQUFDO0FBQUQsQ0FyRkEsQUFxRkMsSUFBQTtBQXJGWSxpQ0FBeUIsNEJBcUZyQyxDQUFBIiwiZmlsZSI6ImFwcC9hZG1pbi9jb21wYW5pZXMvc2luZ2xlLWNvbXBhbnkvY29tcG9uZW50cy9jYWxjdWxhdG9ycy1kZXRhaWwvY2FsY3VsYXRvcnMtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCxJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbXBhbnlTZXJ2aWNlfSBmcm9tICcuLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1NjcmlwdH0gZnJvbSAnLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2NhbGN1bGF0b3JzLWRldGFpbCcsXHJcblx0dGVtcGxhdGVVcmw6ICdjYWxjdWxhdG9ycy1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWydjYWxjdWxhdG9ycy1kZXRhaWwuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbGN1bGF0b3JEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdGNhbGNfZGV0YWlsczogT2JqZWN0ID0gW107XHJcbiAgc3ViX2RvbWFpbjphbnkgPSAnJztcclxuXHRASW5wdXQoKSBjb21wYW55OmFueTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBhbnlTZXJ2aWNlOiBDb21wYW55U2VydmljZSxcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9zY3JpcHQ6IFNjcmlwdCAsIHByaXZhdGUgcm91dGVyIDogUm91dGVyKSB7XHJcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xyXG4gICAgaWYgKHRoaXMuY2hlY2tTdWJEb21haW4odXJsKSlcclxuICAgICAgdGhpcy5zdWJfZG9tYWluID0gdXJsLnNwbGl0KCcuJylbMF07XHJcblx0ICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0ICB0aGlzLmlkID0gcGFyYW1zWydpZCddO1xyXG5cdFx0fSk7XHJcblxyXG5cclxuXHR9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHRcdHRoaXMuX3NjcmlwdC5sb2FkKCdkYXRhdGFibGVzJylcclxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0XHR0aGlzLnRhYmxlSW5pdCgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NjcmlwdCBub3QgbG9hZGVkJywgZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRhYmxlSW5pdCgpIHtcclxuXHRcdHRoaXMuY29tcGFueVNlcnZpY2UuZ2V0Q29tcGFueVByb2plY3RzKHRoaXMuY29tcGFueS5zdWJfZG9tYWluKVxyXG5cdFx0XHQuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHR0aGlzLmNhbGNfZGV0YWlscyA9IHJlc3VsdDtcclxuXHRcdFx0Ly9cdGNvbnNvbGUubG9nKHRoaXMuY2FsY19kZXRhaWxzLCAndGhpcyBpcyB0aGUgZGV0YWlscycpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRqUXVlcnkoJyNjYWxjLWRhdGF0YWJsZScpLkRhdGFUYWJsZSgpO1xyXG5cdFx0XHRcdH0sIDIwMCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdChlcnJvcik9PntcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImVycm9yIGNhbGNcIiwgZXJyb3IpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGxpbmtfbWFrZXIobGluayA6IHN0cmluZyl7XHJcblx0XHRsZXQgc3ViZG9tYWluID0gdGhpcy5jb21wYW55LnN1Yl9kb21haW47XHJcblx0XHRsZXQgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHRcdGxldCBkb21haW4gPSBsb2NhdGlvbi5zcGxpdCgnLy8nKVsxXTtcclxuXHRcdGRvbWFpbiA9IGRvbWFpbi5zcGxpdCgnLycpWzBdO1xyXG5cdFx0ZG9tYWluID0gc3ViZG9tYWluICsgJy4nICsgZG9tYWluLnNwbGl0KCcuJylbMV0gKyAnLicgKyBkb21haW4uc3BsaXQoJy4nKVsyXSArICcvJyArIGxpbmsgO1xyXG5cdFx0cmV0dXJuIGRvbWFpbjtcclxuXHR9XHJcblxyXG5cdGNhbGNfbmF2aWdhdGlvbihsaW5rIDogc3RyaW5nKXtcclxuXHRcdGxldCB1cmwgPSAnaHR0cDovLycgKyB0aGlzLmxpbmtfbWFrZXIobGluayk7XHJcblx0XHR2YXIgd2luID0gd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XHJcbiAgXHRcdHdpbi5mb2N1cygpO1xyXG5cdH1cclxuXHJcbiAgY2hlY2tTdWJEb21haW4odXJsOiBTdHJpbmcpIHtcclxuICAgIC8vIHRyaW0gc3BhY2VzXHJcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvXlxccysvLCAnJyk7XHJcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFxzKyQvLCAnJyk7XHJcblxyXG4gICAgLy8gY29udmVydCBiYWNrIHNsYXNoIHRvIGZvcndhcmQgc2xhc2hcclxuICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXFxcL2csICcvJyk7XHJcblxyXG4gICAgLy8gcmVtb3ZlICdodHRwOi8vJywgJ2h0dHBzOi8vJyBvciAnZnRwOi8vJ1xyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL15odHRwXFw6XFwvXFwvfF5odHRwc1xcOlxcL1xcL3xeZnRwXFw6XFwvXFwvL2ksICcnKTtcclxuXHJcbiAgICAvLyByZW1vdmUgJ3d3dy4nIGlmIGV4aXN0XHJcbiAgICB1cmwgPSB1cmwucmVwbGFjZSgvXnd3d1xcLi9pLCAnJyk7XHJcbiAgICBpZiAodXJsLnNwbGl0KCcuJykubGVuZ3RoID09PSAzICYmIHVybC5zcGxpdCgnLicpWzBdID09PSAnYXBwJylcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIC8vIHJlbW92ZSBwYXRoIGFmdGVyIGRvbWFpblxyXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcLyguKikvLCAnJyk7XHJcblxyXG4gICAgLy8gcmVtb3ZlIHRsZCdzXHJcbiAgICBpZiAodXJsLm1hdGNoKC9cXC5bYS16XXsyLDN9XFwuW2Etel17Mn0kL2kpKSB7XHJcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC5bYS16XXsyLDN9XFwuW2Etel17Mn0kL2ksICcnKTtcclxuICAgIH0gZWxzZSBpZiAodXJsLm1hdGNoKC9cXC5bYS16XXsyLDV9JC9pKSkge1xyXG4gICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwuW2Etel17Miw1fSQvaSwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAodXJsLm1hdGNoKC9cXC4vZykpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
