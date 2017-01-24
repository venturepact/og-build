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
var index_1 = require('./../../../shared/services/index');
var company_service_1 = require('./../../../shared/services/company.service');
var index_2 = require('./components/index');
var SingleUserComponent = (function () {
    function SingleUserComponent(route, userService, _companyService) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this._companyService = _companyService;
        this.loading = false;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    SingleUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this._companyService.getUserCompanies(this.id).subscribe(function (result) {
            _this.companies = result;
            _this.loading = false;
        });
    };
    SingleUserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-single-user',
            templateUrl: 'single-user.component.html',
            styleUrls: ['single-user.component.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                index_2.AccountDetailsComponent,
                index_2.CalculatorsComponent,
                index_2.MembershipDetailsComponent,
                index_2.OtherDetailsComponent,
                index_2.TeamDetailsComponent
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, index_1.UserService, company_service_1.CompanyService])
    ], SingleUserComponent);
    return SingleUserComponent;
}());
exports.SingleUserComponent = SingleUserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi91c2Vycy9zaW5nbGUtdXNlci9zaW5nbGUtdXNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBaUQsaUJBQWlCLENBQUMsQ0FBQTtBQUNuRSxzQkFBNEIsa0NBQWtDLENBQUMsQ0FBQTtBQUMvRCxnQ0FBNkIsNENBQTRDLENBQUMsQ0FBQTtBQUMxRSxzQkFNTyxvQkFBb0IsQ0FBQyxDQUFBO0FBaUI1QjtJQUtFLDZCQUNVLEtBQXFCLEVBQ3JCLFdBQXlCLEVBQ3pCLGVBQWdDO1FBUjVDLGlCQTBCQztRQXBCVyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUN6QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFKMUMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQU1wQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2xDLEtBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDOUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDeEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBckNIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsVUFBVSxFQUFFO2dCQUNWLDBCQUFpQjtnQkFDakIsK0JBQXVCO2dCQUN2Qiw0QkFBb0I7Z0JBQ3BCLGtDQUEwQjtnQkFDMUIsNkJBQXFCO2dCQUNyQiw0QkFBb0I7YUFDckI7U0FDRixDQUFDOzsyQkFBQTtJQTRCRiwwQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksMkJBQW1CLHNCQTBCL0IsQ0FBQSIsImZpbGUiOiJhcHAvYWRtaW4vdXNlcnMvc2luZ2xlLXVzZXIvc2luZ2xlLXVzZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPbkluaXQsIENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7Q29tcGFueVNlcnZpY2V9IGZyb20gJy4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2NvbXBhbnkuc2VydmljZSc7XHJcbmltcG9ydCB7XHJcbiAgQWNjb3VudERldGFpbHNDb21wb25lbnQsXHJcbiAgQ2FsY3VsYXRvcnNDb21wb25lbnQsXHJcbiAgTWVtYmVyc2hpcERldGFpbHNDb21wb25lbnQsXHJcbiAgT3RoZXJEZXRhaWxzQ29tcG9uZW50LFxyXG4gIFRlYW1EZXRhaWxzQ29tcG9uZW50XHJcbn0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ29nLXNpbmdsZS11c2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJ3NpbmdsZS11c2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc2luZ2xlLXVzZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtcclxuICAgIFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG4gICAgQWNjb3VudERldGFpbHNDb21wb25lbnQsXHJcbiAgICBDYWxjdWxhdG9yc0NvbXBvbmVudCxcclxuICAgIE1lbWJlcnNoaXBEZXRhaWxzQ29tcG9uZW50LFxyXG4gICAgT3RoZXJEZXRhaWxzQ29tcG9uZW50LFxyXG4gICAgVGVhbURldGFpbHNDb21wb25lbnRcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2luZ2xlVXNlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICBpZDogYW55O1xyXG4gIG5hbWUgOiBzdHJpbmc7XHJcbiAgY29tcGFuaWVzIDogYW55W107XHJcbiAgbG9hZGluZyA6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlIDogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9jb21wYW55U2VydmljZSA6IENvbXBhbnlTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgdGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5fY29tcGFueVNlcnZpY2UuZ2V0VXNlckNvbXBhbmllcyh0aGlzLmlkKS5zdWJzY3JpYmUoKHJlc3VsdCk9PntcclxuICAgICAgdGhpcy5jb21wYW5pZXMgPSByZXN1bHQ7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbn1cclxuIl19
