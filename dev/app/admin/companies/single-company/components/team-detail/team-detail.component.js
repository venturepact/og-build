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
var TeamDetailComponent = (function () {
    function TeamDetailComponent(_router) {
        this._router = _router;
    }
    TeamDetailComponent.prototype.ngOnInit = function () {
    };
    TeamDetailComponent.prototype.navigateUser = function (id) {
        this._router.navigate(['/admin/user/' + id]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TeamDetailComponent.prototype, "team", void 0);
    TeamDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'team-detail',
            templateUrl: 'team-detail.component.html',
            styleUrls: ['team-detail.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TeamDetailComponent);
    return TeamDetailComponent;
}());
exports.TeamDetailComponent = TeamDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wYW5pZXMvc2luZ2xlLWNvbXBhbnkvY29tcG9uZW50cy90ZWFtLWRldGFpbC90ZWFtLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUN4RCx1QkFBeUMsaUJBQWlCLENBQUMsQ0FBQTtBQVUzRDtJQUtDLDZCQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBRXBDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELDBDQUFZLEdBQVosVUFBYSxFQUFVO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQWJEO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQVZUO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hDLFVBQVUsRUFBRyxDQUFDLDBCQUFpQixDQUFDO1NBQ2hDLENBQUM7OzJCQUFBO0lBbUJGLDBCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSwyQkFBbUIsc0JBaUIvQixDQUFBIiwiZmlsZSI6ImFwcC9hZG1pbi9jb21wYW5pZXMvc2luZ2xlLWNvbXBhbnkvY29tcG9uZW50cy90ZWFtLWRldGFpbC90ZWFtLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlciAsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ3RlYW0tZGV0YWlsJyxcclxuXHR0ZW1wbGF0ZVVybDogJ3RlYW0tZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsndGVhbS1kZXRhaWwuY29tcG9uZW50LmNzcyddLFxyXG5cdGRpcmVjdGl2ZXMgOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGVhbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcblx0QElucHV0KCkgdGVhbTphbnlbXTtcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlciA6IFJvdXRlcil7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCl7XHJcblx0XHQvL2NvbnNvbGUubG9nKHRoaXMudGVhbSwgXCJ0ZWFtIGRldGFpbHNcIiApO1xyXG5cdH1cclxuXHJcblx0bmF2aWdhdGVVc2VyKGlkOiBTdHJpbmcpe1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FkbWluL3VzZXIvJytpZF0pO1xyXG5cdH1cclxuXHRcclxufSJdfQ==
