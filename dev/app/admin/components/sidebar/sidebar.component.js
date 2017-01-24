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
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.currentTab = 'users';
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var curUrlDomain = window.location.pathname.split('/');
        this.currentTab = curUrlDomain[curUrlDomain.length - 1];
        this.showTab(this.currentTab);
    };
    SidebarComponent.prototype.showTab = function (tab) {
        this.currentTab = tab;
        jQuery('.setting-nav').removeClass('active');
        if (tab === 'users') {
            jQuery('#userSet').addClass('active');
        }
        else if (tab === 'companies') {
            jQuery('#compSet').addClass('active');
        }
        else if (tab === 'plans')
            jQuery('#plnSet').addClass('active');
        else if (tab === 'sub_domains')
            jQuery('#sub_domainSet').addClass('active');
        else if (tab === 'email-logs')
            jQuery('#email-logs').addClass('active');
    };
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-sidebar',
            templateUrl: 'sidebar.component.html',
            styleUrls: ['sidebar.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBbUMsaUJBQWlCLENBQUMsQ0FBQTtBQVdyRDtJQUFBO1FBQ0MsZUFBVSxHQUFHLE9BQU8sQ0FBQztJQXNCdEIsQ0FBQztJQXJCRSxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELGtDQUFPLEdBQVAsVUFBUSxHQUFPO1FBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxFQUFFLENBQUEsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLENBQUEsQ0FBQztZQUNsQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsR0FBRyxLQUFLLFdBQVcsQ0FBQyxDQUFBLENBQUM7WUFDM0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsS0FBSyxPQUFPLENBQUM7WUFDdEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsR0FBRyxLQUFLLGFBQWEsQ0FBQztZQUM3QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsS0FBSyxZQUFZLENBQUM7WUFDN0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBOUJKO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBQyxDQUFDLHVCQUF1QixDQUFDO1lBQ25DLFVBQVUsRUFBQyxDQUFDLDBCQUFpQixDQUFDO1NBQy9CLENBQUM7O3dCQUFBO0lBeUJGLHVCQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSx3QkFBZ0IsbUJBdUI1QixDQUFBIiwiZmlsZSI6ImFwcC9hZG1pbi9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyAgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuLy8gc3R5bGVVcmxzOiBbJ3NpZGViYXIuY29tcG9uZW50LmNzcyddLCByZW1vdmVkIGJlY2F1c2UgY2F1c2luZyBidWlsZCBpc3N1ZXNcclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FkbWluLXNpZGViYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOlsnc2lkZWJhci5jb21wb25lbnQuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y3VycmVudFRhYiA9ICd1c2Vycyc7XHJcbiAgXHRuZ09uSW5pdCgpIHtcclxuXHQgICAgbGV0IGN1clVybERvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpO1xyXG5cdCAgICB0aGlzLmN1cnJlbnRUYWIgPSBjdXJVcmxEb21haW5bY3VyVXJsRG9tYWluLmxlbmd0aC0xXTtcclxuXHQgICAgdGhpcy5zaG93VGFiKHRoaXMuY3VycmVudFRhYik7XHJcbiAgXHR9XHJcbiAgXHRzaG93VGFiKHRhYjphbnkpe1xyXG5cdCAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWI7XHJcblx0ICAgIGpRdWVyeSgnLnNldHRpbmctbmF2JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCAgICBpZih0YWIgPT09ICd1c2Vycycpe1xyXG5cdCAgICAgIGpRdWVyeSgnI3VzZXJTZXQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0ICAgIH1cclxuXHQgICAgZWxzZSBpZih0YWIgPT09ICdjb21wYW5pZXMnKXtcclxuXHQgICAgICBqUXVlcnkoJyNjb21wU2V0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCAgICB9XHJcblx0ICAgIGVsc2UgaWYodGFiID09PSAncGxhbnMnKVxyXG5cdCAgICAgIGpRdWVyeSgnI3BsblNldCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHQgIFx0ZWxzZSBpZih0YWIgPT09ICdzdWJfZG9tYWlucycpXHJcblx0ICBcdFx0alF1ZXJ5KCcjc3ViX2RvbWFpblNldCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0ZWxzZSBpZih0YWIgPT09ICdlbWFpbC1sb2dzJylcclxuXHRcdFx0alF1ZXJ5KCcjZW1haWwtbG9ncycpLmFkZENsYXNzKCdhY3RpdmUnKTtcdFx0XHJcbiAgXHR9XHJcbn1cclxuIl19
