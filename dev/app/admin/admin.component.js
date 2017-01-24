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
var index_1 = require('./components/toolbar/index');
var index_2 = require('./../shared/login/index');
var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-admin-home',
            template: "\n    <og-toolbar></og-toolbar>\n    <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES, index_1.ToolbarComponent, index_2.LoginComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxzQkFBaUMsNEJBQTRCLENBQUMsQ0FBQTtBQUM5RCxzQkFBK0IseUJBQXlCLENBQUMsQ0FBQTtBQVl6RDtJQUFBO0lBRUEsQ0FBQztJQVpEO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsMEVBR1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBQyx3QkFBZ0IsRUFBRSxzQkFBYyxDQUFDO1NBQ2pFLENBQUM7O3NCQUFBO0lBSUYscUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHNCQUFjLGlCQUUxQixDQUFBIiwiZmlsZSI6ImFwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Rvb2xiYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vLi4vc2hhcmVkL2xvZ2luL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1hZG1pbi1ob21lJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG9nLXRvb2xiYXI+PC9vZy10b29sYmFyPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gIGAsXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLFRvb2xiYXJDb21wb25lbnQsIExvZ2luQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkbWluQ29tcG9uZW50IHtcclxuICBcclxufVxyXG4iXX0=
