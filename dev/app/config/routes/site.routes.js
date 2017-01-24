"use strict";
var index_1 = require('./../../site/index');
var index_2 = require('../../site/components/+dashboard/index');
var index_3 = require('../../site/components/+templates/index');
var index_4 = require('../../site/components/+analytics/index');
var index_5 = require('../../site/components/+companyProfile/index');
var index_6 = require('../../site/+Settings/index');
var auth_guard_1 = require('../../shared/authentication/auth.guard');
var subdomain_guard_1 = require('../../shared/authentication/subdomain.guard');
var analytics_guard_1 = require('../../shared/authentication/analytics.guard');
var crossdomain_component_1 = require('../../shared/crossDomainComponent/crossdomain.component');
var feature_access_service_1 = require('../../shared/services/feature-access.service');
var home_route_guard_1 = require('../../shared/authentication/home-route.guard');
var company_profile_route_guard_1 = require('../../shared/authentication/company-profile-route.guard');
var freemium_guard_1 = require('../../shared/authentication/freemium.guard');
var setupnew_password_guard_1 = require('../../shared/authentication/setupnew-password.guard');
var index_7 = require('../../shared/invitedLogin/index');
var index_8 = require('../../shared/login/index');
var logout_component_1 = require('../../shared/logout/logout.component');
var index_9 = require('../../site/components/+signup/index');
var index_10 = require('../../site/+Settings/teamSetting/index');
var index_11 = require('../../site/+Settings/membership/index');
var index_12 = require('../../site/+Settings/account/index');
var index_13 = require('../../site/+Settings/apiIntegration/index');
var notfound_component_1 = require('../../shared/notfound/notfound.component');
var index_14 = require('../../site/index');
exports.SITE_ROUTES = [
    {
        path: '',
        component: index_1.SiteComponent,
        children: [
            {
                path: '',
                component: index_1.HomeComponent,
            },
            {
                path: 'verify/:token',
                component: index_14.VerifyUserComponent
            },
            {
                path: 'verifyEmail/:token',
                component: index_14.VerifyEmailComponent
            },
            {
                path: 'setNewPassword',
                component: index_14.SetPasswordComponent,
                canActivate: [setupnew_password_guard_1.SetupNewPasswordGuard]
            },
            {
                path: 'setNewPassword/forgetPassword',
                component: index_14.SetPasswordComponent,
                canActivate: [setupnew_password_guard_1.SetupNewPasswordGuard]
            },
            {
                path: 'userApproval',
                component: index_14.UserApprovalComponent
            },
            {
                path: 'Invitedlogin',
                component: index_7.InvitedLoginComponent
            },
            {
                path: 'dashboard',
                component: index_2.DashboardComponent,
                canActivate: [auth_guard_1.AuthGuard, freemium_guard_1.FreemiumGuard]
            },
            {
                path: 'templates',
                component: index_3.TemplatesComponent
            },
            {
                path: 'analytics',
                component: index_4.AnalyticsComponent,
                canActivate: [freemium_guard_1.FreemiumGuard, auth_guard_1.AuthGuard, analytics_guard_1.AnalyticsGuard]
            },
            {
                path: 'company-profile',
                component: index_5.CompanyProfileComponent,
                canActivate: [company_profile_route_guard_1.CompanyProfileRouteGuard]
            },
            {
                path: 'settings',
                component: index_6.SettingsComponent,
                canActivate: [auth_guard_1.AuthGuard],
                children: [
                    {
                        path: '',
                        component: index_10.TeamSettingComponent
                    },
                    {
                        path: 'membership',
                        component: index_11.MembershipComponent
                    },
                    {
                        path: 'api-integration',
                        component: index_13.APIIntegrationComponent
                    },
                    {
                        path: 'my-account',
                        component: index_12.AccountComponent
                    }
                ]
            },
            {
                path: 'login',
                component: index_8.LoginComponent
            },
            {
                path: 'logout',
                component: logout_component_1.LogoutComponent
            },
            {
                path: 'signup',
                component: index_9.SignupDetailComponent
            },
            {
                path: 'forgetPassword',
                component: index_14.ForgetPasswordComponent
            }
        ]
    },
    {
        path: 'crossDomainComponent',
        component: crossdomain_component_1.CrossDomainComponent,
    },
    {
        path: 'Error',
        component: notfound_component_1.NotFoundComponent,
    }
];
exports.AUTH_PROVIDERS = [auth_guard_1.AuthGuard, home_route_guard_1.HomeRouteGuard, subdomain_guard_1.SubdomainGuard, company_profile_route_guard_1.CompanyProfileRouteGuard, analytics_guard_1.AnalyticsGuard, feature_access_service_1.FeatureAuthService, freemium_guard_1.FreemiumGuard, setupnew_password_guard_1.SetupNewPasswordGuard];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb25maWcvcm91dGVzL3NpdGUucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQkFBNEMsb0JBQW9CLENBQUMsQ0FBQTtBQUNqRSxzQkFBbUMsd0NBQXdDLENBQUMsQ0FBQTtBQUM1RSxzQkFBbUMsd0NBQXdDLENBQUMsQ0FBQTtBQUM1RSxzQkFBbUMsd0NBQXdDLENBQUMsQ0FBQTtBQUM1RSxzQkFBd0MsNkNBQTZDLENBQUMsQ0FBQTtBQUN0RixzQkFBa0MsNEJBQTRCLENBQUMsQ0FBQTtBQUMvRCwyQkFBMEIsd0NBQXdDLENBQUMsQ0FBQTtBQUNuRSxnQ0FBK0IsNkNBQTZDLENBQUMsQ0FBQTtBQUM3RSxnQ0FBK0IsNkNBQTZDLENBQUMsQ0FBQTtBQUM3RSxzQ0FBcUMseURBQXlELENBQUMsQ0FBQTtBQUMvRix1Q0FBa0MsOENBQThDLENBQUMsQ0FBQTtBQUNqRixpQ0FBK0IsOENBQThDLENBQUMsQ0FBQTtBQUM5RSw0Q0FBeUMseURBQXlELENBQUMsQ0FBQTtBQUNuRywrQkFBNEIsNENBQTRDLENBQUMsQ0FBQTtBQUN6RSx3Q0FBc0MscURBQXFELENBQUMsQ0FBQTtBQUM1RixzQkFBc0MsaUNBQWlDLENBQUMsQ0FBQTtBQUN4RSxzQkFBK0IsMEJBQTBCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBZ0Msc0NBQXNDLENBQUMsQ0FBQTtBQUN2RSxzQkFBdUMscUNBQXFDLENBQUMsQ0FBQTtBQUM3RSx1QkFBcUMsd0NBQXdDLENBQUMsQ0FBQTtBQUM5RSx1QkFBb0MsdUNBQXVDLENBQUMsQ0FBQTtBQUM1RSx1QkFBaUMsb0NBQW9DLENBQUMsQ0FBQTtBQUN0RSx1QkFBd0MsMkNBQTJDLENBQUMsQ0FBQTtBQUNwRixtQ0FBa0MsMENBQTBDLENBQUMsQ0FBQTtBQUM3RSx1QkFBNkgsa0JBQWtCLENBQUMsQ0FBQTtBQUNuSSxtQkFBVyxHQUFpQjtJQUN2QztRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHFCQUFhO1FBQ3hCLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxxQkFBYTthQUN6QjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixTQUFTLEVBQUUsNEJBQW1CO2FBQy9CO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsU0FBUyxFQUFFLDZCQUFvQjthQUNoQztZQUNEO2dCQUNFLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLFNBQVMsRUFBRSw2QkFBb0I7Z0JBQy9CLFdBQVcsRUFBQyxDQUFDLCtDQUFxQixDQUFDO2FBQ3BDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLCtCQUErQjtnQkFDckMsU0FBUyxFQUFFLDZCQUFvQjtnQkFDL0IsV0FBVyxFQUFDLENBQUMsK0NBQXFCLENBQUM7YUFDcEM7WUFFRDtnQkFDRSxJQUFJLEVBQUUsY0FBYztnQkFDcEIsU0FBUyxFQUFFLDhCQUFxQjthQUNqQztZQUNBO2dCQUNFLElBQUksRUFBRSxjQUFjO2dCQUNwQixTQUFTLEVBQUUsNkJBQXFCO2FBQ2pDO1lBQ0Y7Z0JBQ0UsSUFBSSxFQUFDLFdBQVc7Z0JBQ2hCLFNBQVMsRUFBRSwwQkFBa0I7Z0JBQzdCLFdBQVcsRUFBRSxDQUFDLHNCQUFTLEVBQUUsOEJBQWEsQ0FBQzthQUN4QztZQUNEO2dCQUNFLElBQUksRUFBQyxXQUFXO2dCQUNoQixTQUFTLEVBQUUsMEJBQWtCO2FBQzlCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFDLFdBQVc7Z0JBQ2hCLFNBQVMsRUFBRSwwQkFBa0I7Z0JBQzdCLFdBQVcsRUFBRSxDQUFDLDhCQUFhLEVBQUMsc0JBQVMsRUFBQyxnQ0FBYyxDQUFDO2FBQ3REO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFDLGlCQUFpQjtnQkFDdEIsU0FBUyxFQUFFLCtCQUF1QjtnQkFDbEMsV0FBVyxFQUFDLENBQUMsc0RBQXdCLENBQUM7YUFDdkM7WUFDRDtnQkFDRSxJQUFJLEVBQUMsVUFBVTtnQkFDZixTQUFTLEVBQUUseUJBQWlCO2dCQUM1QixXQUFXLEVBQUUsQ0FBQyxzQkFBUyxDQUFDO2dCQUN4QixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsU0FBUyxFQUFFLDZCQUFvQjtxQkFDaEM7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFNBQVMsRUFBRSw0QkFBbUI7cUJBQy9CO29CQUNEO3dCQUNFLElBQUksRUFBRSxpQkFBaUI7d0JBQ3ZCLFNBQVMsRUFBRSxnQ0FBdUI7cUJBQ25DO29CQUNEO3dCQUNFLElBQUksRUFBRSxZQUFZO3dCQUNsQixTQUFTLEVBQUUseUJBQWdCO3FCQUM1QjtpQkFDRjthQUNGO1lBQ0E7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsU0FBUyxFQUFFLHNCQUFjO2FBQzFCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLGtDQUFlO2FBQzNCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLDZCQUFxQjthQUNqQztZQUNEO2dCQUNFLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLFNBQVMsRUFBRSxnQ0FBdUI7YUFDbkM7U0FDSDtLQUNGO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsc0JBQXNCO1FBQzVCLFNBQVMsRUFBRSw0Q0FBb0I7S0FDaEM7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsU0FBUyxFQUFFLHNDQUFpQjtLQUM3QjtDQUNGLENBQUM7QUFFVyxzQkFBYyxHQUFHLENBQUMsc0JBQVMsRUFBQyxpQ0FBYyxFQUFDLGdDQUFjLEVBQUMsc0RBQXdCLEVBQUMsZ0NBQWMsRUFBQywyQ0FBa0IsRUFBQyw4QkFBYSxFQUFFLCtDQUFxQixDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2NvbmZpZy9yb3V0ZXMvc2l0ZS5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJDb25maWd9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNpdGVDb21wb25lbnQsSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vLi4vLi4vc2l0ZS9pbmRleCc7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NpdGUvY29tcG9uZW50cy8rZGFzaGJvYXJkL2luZGV4JztcclxuaW1wb3J0IHsgVGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2l0ZS9jb21wb25lbnRzLyt0ZW1wbGF0ZXMvaW5kZXgnO1xyXG5pbXBvcnQgeyBBbmFseXRpY3NDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaXRlL2NvbXBvbmVudHMvK2FuYWx5dGljcy9pbmRleCc7XHJcbmltcG9ydCB7IENvbXBhbnlQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2l0ZS9jb21wb25lbnRzLytjb21wYW55UHJvZmlsZS9pbmRleCc7XHJcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2l0ZS8rU2V0dGluZ3MvaW5kZXgnO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmR9ICBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aGVudGljYXRpb24vYXV0aC5ndWFyZCc7XHJcbmltcG9ydCB7IFN1YmRvbWFpbkd1YXJkfSAgZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGhlbnRpY2F0aW9uL3N1YmRvbWFpbi5ndWFyZCc7XHJcbmltcG9ydCB7IEFuYWx5dGljc0d1YXJkIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGhlbnRpY2F0aW9uL2FuYWx5dGljcy5ndWFyZCc7XHJcbmltcG9ydCB7IENyb3NzRG9tYWluQ29tcG9uZW50fSAgZnJvbSAnLi4vLi4vc2hhcmVkL2Nyb3NzRG9tYWluQ29tcG9uZW50L2Nyb3NzZG9tYWluLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZlYXR1cmVBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2ZlYXR1cmUtYWNjZXNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIb21lUm91dGVHdWFyZH0gIGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoZW50aWNhdGlvbi9ob21lLXJvdXRlLmd1YXJkJztcclxuaW1wb3J0IHsgQ29tcGFueVByb2ZpbGVSb3V0ZUd1YXJkfSAgZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGhlbnRpY2F0aW9uL2NvbXBhbnktcHJvZmlsZS1yb3V0ZS5ndWFyZCc7XHJcbmltcG9ydCB7RnJlZW1pdW1HdWFyZH0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGhlbnRpY2F0aW9uL2ZyZWVtaXVtLmd1YXJkJztcclxuaW1wb3J0IHsgU2V0dXBOZXdQYXNzd29yZEd1YXJkfSAgZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGhlbnRpY2F0aW9uL3NldHVwbmV3LXBhc3N3b3JkLmd1YXJkJztcclxuaW1wb3J0IHsgSW52aXRlZExvZ2luQ29tcG9uZW50fSAgZnJvbSAnLi4vLi4vc2hhcmVkL2ludml0ZWRMb2dpbi9pbmRleCc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50fSAgZnJvbSAnLi4vLi4vc2hhcmVkL2xvZ2luL2luZGV4JztcclxuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50fSAgZnJvbSAnLi4vLi4vc2hhcmVkL2xvZ291dC9sb2dvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2lnbnVwRGV0YWlsQ29tcG9uZW50ICB9IGZyb20gJy4uLy4uL3NpdGUvY29tcG9uZW50cy8rc2lnbnVwL2luZGV4JztcclxuaW1wb3J0IHsgVGVhbVNldHRpbmdDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaXRlLytTZXR0aW5ncy90ZWFtU2V0dGluZy9pbmRleCc7XHJcbmltcG9ydCB7IE1lbWJlcnNoaXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaXRlLytTZXR0aW5ncy9tZW1iZXJzaGlwL2luZGV4JztcclxuaW1wb3J0IHsgQWNjb3VudENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NpdGUvK1NldHRpbmdzL2FjY291bnQvaW5kZXgnO1xyXG5pbXBvcnQgeyBBUElJbnRlZ3JhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NpdGUvK1NldHRpbmdzL2FwaUludGVncmF0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmVyaWZ5VXNlckNvbXBvbmVudCxTZXRQYXNzd29yZENvbXBvbmVudCxVc2VyQXBwcm92YWxDb21wb25lbnQsRm9yZ2V0UGFzc3dvcmRDb21wb25lbnQgLFZlcmlmeUVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2l0ZS9pbmRleCc7XHJcbmV4cG9ydCBjb25zdCBTSVRFX1JPVVRFUzogUm91dGVyQ29uZmlnID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBTaXRlQ29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd2ZXJpZnkvOnRva2VuJyxcclxuICAgICAgICBjb21wb25lbnQ6IFZlcmlmeVVzZXJDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd2ZXJpZnlFbWFpbC86dG9rZW4nLFxyXG4gICAgICAgIGNvbXBvbmVudDogVmVyaWZ5RW1haWxDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdzZXROZXdQYXNzd29yZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBTZXRQYXNzd29yZENvbXBvbmVudCxcclxuICAgICAgICBjYW5BY3RpdmF0ZTpbU2V0dXBOZXdQYXNzd29yZEd1YXJkXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3NldE5ld1Bhc3N3b3JkL2ZvcmdldFBhc3N3b3JkJyxcclxuICAgICAgICBjb21wb25lbnQ6IFNldFBhc3N3b3JkQ29tcG9uZW50LFxyXG4gICAgICAgIGNhbkFjdGl2YXRlOltTZXR1cE5ld1Bhc3N3b3JkR3VhcmRdXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3VzZXJBcHByb3ZhbCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBVc2VyQXBwcm92YWxDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgcGF0aDogJ0ludml0ZWRsb2dpbicsXHJcbiAgICAgICAgIGNvbXBvbmVudDogSW52aXRlZExvZ2luQ29tcG9uZW50XHJcbiAgICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDonZGFzaGJvYXJkJyxcclxuICAgICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcclxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgRnJlZW1pdW1HdWFyZF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6J3RlbXBsYXRlcycsXHJcbiAgICAgICAgY29tcG9uZW50OiBUZW1wbGF0ZXNDb21wb25lbnRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6J2FuYWx5dGljcycsXHJcbiAgICAgICAgY29tcG9uZW50OiBBbmFseXRpY3NDb21wb25lbnQsXHJcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtGcmVlbWl1bUd1YXJkLEF1dGhHdWFyZCxBbmFseXRpY3NHdWFyZF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6J2NvbXBhbnktcHJvZmlsZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBDb21wYW55UHJvZmlsZUNvbXBvbmVudCxcclxuICAgICAgICBjYW5BY3RpdmF0ZTpbQ29tcGFueVByb2ZpbGVSb3V0ZUd1YXJkXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDonc2V0dGluZ3MnLFxyXG4gICAgICAgIGNvbXBvbmVudDogU2V0dGluZ3NDb21wb25lbnQsXHJcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6IFRlYW1TZXR0aW5nQ29tcG9uZW50XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnbWVtYmVyc2hpcCcsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogTWVtYmVyc2hpcENvbXBvbmVudFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ2FwaS1pbnRlZ3JhdGlvbicsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogQVBJSW50ZWdyYXRpb25Db21wb25lbnRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdteS1hY2NvdW50JyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBBY2NvdW50Q29tcG9uZW50XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBwYXRoOiAnbG9naW4nLFxyXG4gICAgICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50XHJcbiAgICAgICB9LFxyXG4gICAgICAge1xyXG4gICAgICAgICBwYXRoOiAnbG9nb3V0JyxcclxuICAgICAgICAgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnRcclxuICAgICAgIH0sXHJcbiAgICAgICB7XHJcbiAgICAgICAgIHBhdGg6ICdzaWdudXAnLFxyXG4gICAgICAgICBjb21wb25lbnQ6IFNpZ251cERldGFpbENvbXBvbmVudFxyXG4gICAgICAgfSxcclxuICAgICAgIHtcclxuICAgICAgICAgcGF0aDogJ2ZvcmdldFBhc3N3b3JkJyxcclxuICAgICAgICAgY29tcG9uZW50OiBGb3JnZXRQYXNzd29yZENvbXBvbmVudFxyXG4gICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2Nyb3NzRG9tYWluQ29tcG9uZW50JyxcclxuICAgIGNvbXBvbmVudDogQ3Jvc3NEb21haW5Db21wb25lbnQsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnRXJyb3InLFxyXG4gICAgY29tcG9uZW50OiBOb3RGb3VuZENvbXBvbmVudCxcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9QUk9WSURFUlMgPSBbQXV0aEd1YXJkLEhvbWVSb3V0ZUd1YXJkLFN1YmRvbWFpbkd1YXJkLENvbXBhbnlQcm9maWxlUm91dGVHdWFyZCxBbmFseXRpY3NHdWFyZCxGZWF0dXJlQXV0aFNlcnZpY2UsRnJlZW1pdW1HdWFyZCwgU2V0dXBOZXdQYXNzd29yZEd1YXJkXTtcclxuIl19
