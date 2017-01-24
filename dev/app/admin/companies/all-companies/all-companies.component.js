"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var index_1 = require('./../../../shared/services/index');
var datatable_interface_1 = require('../../../shared/interfaces/datatable.interface');
var AllCompaniesComponent = (function (_super) {
    __extends(AllCompaniesComponent, _super);
    function AllCompaniesComponent(companyService, router, _script) {
        _super.call(this);
        this.companyService = companyService;
        this.router = router;
        this._script = _script;
        this.data = [];
        this.loading = false;
    }
    AllCompaniesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._script.load('datatables')
            .then(function (data) {
            _this.getAllCompany();
        })
            .catch(function (error) {
            console.log('Script not loaded', error);
        });
    };
    AllCompaniesComponent.prototype.getAllCompany = function () {
        var _this = this;
        this.loading = true;
        var obj = {
            limit: this.current_limit,
            page: this.current_page - 1,
            searchKey: this.search
        };
        this.companyService.getAllCompanies(obj)
            .subscribe(function (response) {
            _this.data = response.companies;
            _this.loading = false;
            _this.total_pages = Math.ceil(response.count / _this.current_limit);
        }, function (error) {
            console.log("error in fetching companies", error);
            _this.loading = false;
        });
    };
    AllCompaniesComponent.prototype.navigateCompany = function (id) {
        this.router.navigate(['/admin/company/' + id]);
    };
    AllCompaniesComponent.prototype.paging = function (num) {
        _super.prototype.paging.call(this, num);
        this.getAllCompany();
    };
    AllCompaniesComponent.prototype.limitChange = function (event) {
        _super.prototype.limitChange.call(this, event);
        this.getAllCompany();
    };
    AllCompaniesComponent.prototype.previous = function () {
        _super.prototype.previous.call(this);
        this.getAllCompany();
    };
    AllCompaniesComponent.prototype.next = function () {
        _super.prototype.next.call(this);
        this.getAllCompany();
    };
    AllCompaniesComponent.prototype.searchData = function () {
        _super.prototype.searchData.call(this);
        this.getAllCompany();
    };
    AllCompaniesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-all-companies',
            templateUrl: 'all-companies.component.html',
            styleUrls: ['all-companies.component.css', './../../ionicons.min.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [index_1.CompanyService, router_1.Router, index_1.Script])
    ], AllCompaniesComponent);
    return AllCompaniesComponent;
}(datatable_interface_1.Datatable));
exports.AllCompaniesComponent = AllCompaniesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wYW5pZXMvYWxsLWNvbXBhbmllcy9hbGwtY29tcGFuaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsdUJBQXlDLGlCQUFpQixDQUFDLENBQUE7QUFDM0Qsc0JBQXVDLGtDQUFrQyxDQUFDLENBQUE7QUFDMUUsb0NBQTBCLGdEQUFnRCxDQUFDLENBQUE7QUFXM0U7SUFBMkMseUNBQVM7SUFLbEQsK0JBQ1UsY0FBK0IsRUFDL0IsTUFBZSxFQUNmLE9BQWU7UUFHdkIsaUJBQU8sQ0FBQztRQUxBLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUMvQixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVB6QixTQUFJLEdBQVksRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBYSxLQUFLLENBQUM7SUFVMUIsQ0FBQztJQUVELCtDQUFlLEdBQWY7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUMxQixJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ04sS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQzthQUNMLEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDZDQUFhLEdBQWI7UUFBQSxpQkFpQkM7UUFoQkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxHQUFHLEdBQUc7WUFDUixLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQztZQUMzQixTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdkIsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQzthQUN0QyxTQUFTLENBQ1IsVUFBRSxRQUFZO1lBQ1osS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRSxDQUFDLEVBQUMsVUFBQyxLQUFLO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsRCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFHRCwrQ0FBZSxHQUFmLFVBQWdCLEVBQVc7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxzQ0FBTSxHQUFOLFVBQU8sR0FBVztRQUNoQixnQkFBSyxDQUFDLE1BQU0sWUFBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxLQUFVO1FBQ3BCLGdCQUFLLENBQUMsV0FBVyxZQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLGdCQUFLLENBQUMsUUFBUSxXQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQ0FBSSxHQUFKO1FBQ0UsZ0JBQUssQ0FBQyxJQUFJLFdBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsMENBQVUsR0FBVjtRQUNFLGdCQUFLLENBQUMsVUFBVSxXQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUEvRUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsRUFBQywwQkFBMEIsQ0FBQztZQUNyRSxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNoQyxDQUFDOzs2QkFBQTtJQTJFRiw0QkFBQztBQUFELENBekVBLEFBeUVDLENBekUwQywrQkFBUyxHQXlFbkQ7QUF6RVksNkJBQXFCLHdCQXlFakMsQ0FBQSIsImZpbGUiOiJhcHAvYWRtaW4vY29tcGFuaWVzL2FsbC1jb21wYW5pZXMvYWxsLWNvbXBhbmllcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyxSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb21wYW55U2VydmljZSAsIFNjcmlwdH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBEYXRhdGFibGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9kYXRhdGFibGUuaW50ZXJmYWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1hbGwtY29tcGFuaWVzJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FsbC1jb21wYW5pZXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydhbGwtY29tcGFuaWVzLmNvbXBvbmVudC5jc3MnLCcuLy4uLy4uL2lvbmljb25zLm1pbi5jc3MnXSxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFsbENvbXBhbmllc0NvbXBvbmVudCBleHRlbmRzIERhdGF0YWJsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXR7XHJcbiAgZGF0YSA6IE9iamVjdCA9IFtdO1xyXG4gIGxvYWRpbmcgOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY29tcGFueVNlcnZpY2UgOiBDb21wYW55U2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyIDogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBfc2NyaXB0IDpTY3JpcHRcclxuICAgIFxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuX3NjcmlwdC5sb2FkKCdkYXRhdGFibGVzJylcclxuICAgICAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgIHRoaXMuZ2V0QWxsQ29tcGFueSgpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NjcmlwdCBub3QgbG9hZGVkJywgZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxDb21wYW55KCl7XHJcbiAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICBsaW1pdDogdGhpcy5jdXJyZW50X2xpbWl0LFxyXG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudF9wYWdlIC0gMSxcclxuICAgICAgICBzZWFyY2hLZXk6IHRoaXMuc2VhcmNoXHJcbiAgICAgIH07XHJcbiAgICAgdGhpcy5jb21wYW55U2VydmljZS5nZXRBbGxDb21wYW5pZXMob2JqKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICggcmVzcG9uc2U6YW55ICkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuY29tcGFuaWVzO1xyXG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsX3BhZ2VzID0gTWF0aC5jZWlsKHJlc3BvbnNlLmNvdW50IC8gdGhpcy5jdXJyZW50X2xpbWl0KTtcclxuICAgICAgICB9LChlcnJvcik9PntcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gZmV0Y2hpbmcgY29tcGFuaWVzXCIsIGVycm9yKTtcclxuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIG5hdmlnYXRlQ29tcGFueShpZCA6IHN0cmluZyl7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hZG1pbi9jb21wYW55LycgKyBpZCBdKTtcclxuICB9XHJcblxyXG4gIHBhZ2luZyhudW06IG51bWJlcikge1xyXG4gICAgc3VwZXIucGFnaW5nKG51bSk7XHJcbiAgICB0aGlzLmdldEFsbENvbXBhbnkoKTtcclxuICB9XHJcblxyXG4gIGxpbWl0Q2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgIHN1cGVyLmxpbWl0Q2hhbmdlKGV2ZW50KTtcclxuICAgIHRoaXMuZ2V0QWxsQ29tcGFueSgpO1xyXG4gIH1cclxuXHJcbiAgcHJldmlvdXMoKSB7XHJcbiAgICBzdXBlci5wcmV2aW91cygpO1xyXG4gICAgdGhpcy5nZXRBbGxDb21wYW55KCk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgc3VwZXIubmV4dCgpO1xyXG4gICAgdGhpcy5nZXRBbGxDb21wYW55KCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hEYXRhKCkge1xyXG4gICAgc3VwZXIuc2VhcmNoRGF0YSgpO1xyXG4gICAgdGhpcy5nZXRBbGxDb21wYW55KCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19
