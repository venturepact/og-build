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
var index_1 = require('../../../shared/services/index');
var SideNavbarComponent = (function () {
    function SideNavbarComponent(_cookieService, subDomainService) {
        this._cookieService = _cookieService;
        this.subDomainService = subDomainService;
        this.currentTab = 'team-setting';
        this.sideNaveBarHeader = '';
        this.is_subcripion_cancelled = false;
    }
    SideNavbarComponent.prototype.ngOnInit = function () {
        this.is_subcripion_cancelled = false;
        var curUrlDomain = window.location.pathname.split('/');
        this.currentTab = curUrlDomain[curUrlDomain.length - 1];
        var sub_domain = this.subDomainService.subDomain.sub_domain;
        var companyAccess = JSON.parse(this._cookieService.readCookie('filepicker_token_json'));
        var subscription_status = '';
        if (!companyAccess)
            console.log('okoooooooo');
        else
            companyAccess.forEach(function (e) {
                if (e.key === sub_domain) {
                    subscription_status = e.value;
                }
            });
        if (subscription_status === 'cancelled') {
            this.is_subcripion_cancelled = true;
            jQuery('.wrapper-content').addClass('cancelled-setting');
        }
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (this.currentTab === 'membership' || this.currentTab === 'my-account') && subscription_status != "cancelled") {
            window.location.pathname = window.location.pathname.split('/')[1];
        }
        jQuery('#lgScrWrapperContent').addClass('hide');
    };
    SideNavbarComponent.prototype.showTab = function (tab) {
        this.currentTab = tab;
        jQuery('.setting-nav').removeClass('active');
        if (tab === 'membership') {
            jQuery('#membDet').addClass('active');
            jQuery('#membDet-m').addClass('active');
            this.sideNaveBarHeader = 'Membership Details';
            jQuery('#smScrWrapperContent').css('display', 'block');
        }
        else if (tab === 'my-account') {
            jQuery('#accSet').addClass('active');
            jQuery('#accSet-m').addClass('active');
            this.sideNaveBarHeader = 'My Account';
            jQuery('#smScrWrapperContent').css('display', 'block');
        }
        else if (tab === 'team-setting') {
            jQuery('#teamSet').addClass('active');
            jQuery('#teamSet-m').addClass('active');
            this.sideNaveBarHeader = 'Team Settings';
            jQuery('#smScrWrapperContent').css('display', 'block');
        }
        else if (tab === 'api-key') {
            jQuery('#apiKey').addClass('active');
            jQuery('#teamSet-m').addClass('active');
            this.sideNaveBarHeader = 'API Key';
            jQuery('#smScrWrapperContent').css('display', 'block');
        }
    };
    SideNavbarComponent.prototype.addHide = function () {
        jQuery('#smScrSideNavbar').addClass('hide');
        jQuery('#setting-header').removeClass('hide');
    };
    SideNavbarComponent.prototype.goBack = function () {
        jQuery('#smScrSideNavbar').removeClass('hide');
        jQuery('#setting-header').addClass('hide');
        jQuery('#smScrWrapperContent').css('display', 'none');
    };
    SideNavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-sideNavbar',
            templateUrl: 'sideNavbar.component.html',
            styleUrls: ['sideNavbar.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.CookieService, index_1.SubDomainService])
    ], SideNavbarComponent);
    return SideNavbarComponent;
}());
exports.SideNavbarComponent = SideNavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlL2NvbXBvbmVudHMvK3NpZGVOYXZiYXIvc2lkZU5hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNsRCxzQkFBZ0QsZ0NBQWdDLENBQUMsQ0FBQTtBQVVqRjtJQUlFLDZCQUNVLGNBQTZCLEVBQzdCLGdCQUFrQztRQURsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTDVDLGVBQVUsR0FBRyxjQUFjLENBQUM7UUFDNUIsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBQy9CLDRCQUF1QixHQUFHLEtBQUssQ0FBQztJQU1oQyxDQUFDO0lBQ0Qsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFDckMsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFeEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFDNUQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUU1QixJQUFJO1lBQ0YsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENB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WUFFeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztZQUNuQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELENBQUM7SUFDSCxDQUFDO0lBQ0QscUNBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELG9DQUFNLEdBQU47UUFDRSxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQXBGSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNoQyxDQUFDOzsyQkFBQTtJQWdGRiwwQkFBQztBQUFELENBOUVBLEFBOEVDLElBQUE7QUE5RVksMkJBQW1CLHNCQThFL0IsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS9jb21wb25lbnRzLytzaWRlTmF2YmFyL3NpZGVOYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UsIFN1YkRvbWFpblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ29nLXNpZGVOYXZiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2lkZU5hdmJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3NpZGVOYXZiYXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjdXJyZW50VGFiID0gJ3RlYW0tc2V0dGluZyc7XHJcbiAgc2lkZU5hdmVCYXJIZWFkZXI6IHN0cmluZyA9ICcnO1xyXG4gIGlzX3N1YmNyaXBpb25fY2FuY2VsbGVkID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9jb29raWVTZXJ2aWNlOiBDb29raWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdWJEb21haW5TZXJ2aWNlOiBTdWJEb21haW5TZXJ2aWNlXHJcbiAgKSB7XHJcblxyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaXNfc3ViY3JpcGlvbl9jYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgIGxldCBjdXJVcmxEb21haW4gPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuICAgIHRoaXMuY3VycmVudFRhYiA9IGN1clVybERvbWFpbltjdXJVcmxEb21haW4ubGVuZ3RoIC0gMV07XHJcbiAgICAvL3RoaXMuc2hvd1RhYih0aGlzLmN1cnJlbnRUYWIpO1xyXG4gICAgbGV0IHN1Yl9kb21haW4gPSB0aGlzLnN1YkRvbWFpblNlcnZpY2Uuc3ViRG9tYWluLnN1Yl9kb21haW47XHJcbiAgICBsZXQgY29tcGFueUFjY2VzcyA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nKSk7XHJcbiAgICBsZXQgc3Vic2NyaXB0aW9uX3N0YXR1cyA9ICcnO1xyXG4gICAgaWYgKCFjb21wYW55QWNjZXNzKVxyXG4gICAgICBjb25zb2xlLmxvZygnb2tvb29vb29vbycpO1xyXG4gICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2xvZ291dCc7XHJcbiAgICBlbHNlXHJcbiAgICAgIGNvbXBhbnlBY2Nlc3MuZm9yRWFjaCgoZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBzdWJfZG9tYWluKSB7XHJcbiAgICAgICAgICBzdWJzY3JpcHRpb25fc3RhdHVzID0gZS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgaWYgKHN1YnNjcmlwdGlvbl9zdGF0dXMgPT09ICdjYW5jZWxsZWQnKSB7XHJcbiAgICAgIHRoaXMuaXNfc3ViY3JpcGlvbl9jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICBqUXVlcnkoJy53cmFwcGVyLWNvbnRlbnQnKS5hZGRDbGFzcygnY2FuY2VsbGVkLXNldHRpbmcnKTtcclxuICAgIH1cclxuICAgIGlmICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgKHRoaXMuY3VycmVudFRhYiA9PT0gJ21lbWJlcnNoaXAnIHx8IHRoaXMuY3VycmVudFRhYiA9PT0gJ215LWFjY291bnQnKSAmJiBzdWJzY3JpcHRpb25fc3RhdHVzICE9IFwiY2FuY2VsbGVkXCIpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylbMV07XHJcbiAgICB9XHJcbiAgICBqUXVlcnkoJyNsZ1NjcldyYXBwZXJDb250ZW50JykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICB9XHJcbiAgc2hvd1RhYih0YWI6IGFueSkge1xyXG4gICAgdGhpcy5jdXJyZW50VGFiID0gdGFiO1xyXG4gICAgalF1ZXJ5KCcuc2V0dGluZy1uYXYnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBpZiAodGFiID09PSAnbWVtYmVyc2hpcCcpIHtcclxuICAgICAgalF1ZXJ5KCcjbWVtYkRldCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgalF1ZXJ5KCcjbWVtYkRldC1tJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAvL2pRdWVyeSgnLndyYXBwZXItY29udGVudCcpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgICAgIHRoaXMuc2lkZU5hdmVCYXJIZWFkZXIgPSAnTWVtYmVyc2hpcCBEZXRhaWxzJztcclxuICAgICAgalF1ZXJ5KCcjc21TY3JXcmFwcGVyQ29udGVudCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGFiID09PSAnbXktYWNjb3VudCcpIHtcclxuICAgICAgalF1ZXJ5KCcjYWNjU2V0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICBqUXVlcnkoJyNhY2NTZXQtbScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgLy9qUXVlcnkoJy53cmFwcGVyLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICB0aGlzLnNpZGVOYXZlQmFySGVhZGVyID0gJ015IEFjY291bnQnO1xyXG4gICAgICBqUXVlcnkoJyNzbVNjcldyYXBwZXJDb250ZW50JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YWIgPT09ICd0ZWFtLXNldHRpbmcnKSB7XHJcbiAgICAgIGpRdWVyeSgnI3RlYW1TZXQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIGpRdWVyeSgnI3RlYW1TZXQtbScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgLy9qUXVlcnkoJy53cmFwcGVyLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICB0aGlzLnNpZGVOYXZlQmFySGVhZGVyID0gJ1RlYW0gU2V0dGluZ3MnO1xyXG4gICAgICBqUXVlcnkoJyNzbVNjcldyYXBwZXJDb250ZW50JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YWIgPT09ICdhcGkta2V5Jykge1xyXG4gICAgICBqUXVlcnkoJyNhcGlLZXknKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIGpRdWVyeSgnI3RlYW1TZXQtbScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgLy9qUXVlcnkoJy53cmFwcGVyLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICB0aGlzLnNpZGVOYXZlQmFySGVhZGVyID0gJ0FQSSBLZXknO1xyXG4gICAgICBqUXVlcnkoJyNzbVNjcldyYXBwZXJDb250ZW50JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZEhpZGUoKSB7XHJcbiAgICBqUXVlcnkoJyNzbVNjclNpZGVOYXZiYXInKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgalF1ZXJ5KCcjc2V0dGluZy1oZWFkZXInKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gIH1cclxuICBnb0JhY2soKSB7XHJcbiAgICBqUXVlcnkoJyNzbVNjclNpZGVOYXZiYXInKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgalF1ZXJ5KCcjc2V0dGluZy1oZWFkZXInKS5hZGRDbGFzcygnaGlkZScpO1xyXG4gICAgalF1ZXJ5KCcjc21TY3JXcmFwcGVyQ29udGVudCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
