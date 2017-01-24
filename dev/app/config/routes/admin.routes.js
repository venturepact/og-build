"use strict";
var admin_component_1 = require('./../../admin/admin.component');
var index_1 = require('./../../admin/home/index');
var subdomain_component_1 = require('./../../admin/subdomain/subdomain.component');
var all_users_component_1 = require('./../../admin/users/all-users/all-users.component');
var single_user_component_1 = require('./../../admin/users/single-user/single-user.component');
var all_companies_component_1 = require('./../../admin/companies/all-companies/all-companies.component');
var single_company_component_1 = require('./../../admin/companies/single-company/single-company.component');
var email_logs_component_1 = require('./../../admin/email-logs/email-logs.component');
var plans_component_1 = require('./../../admin/plans/plans.component');
var admin_guard_1 = require('./../../shared/authentication/admin.guard');
var logout_component_1 = require('../../shared/logout/logout.component');
var basic_component_1 = require('./../../admin/basic/basic.component');
exports.ADMIN_ROUTES = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        canActivate: [admin_guard_1.AdminGuard],
        children: [
            {
                path: '',
                component: index_1.HomeComponent,
                canActivate: [admin_guard_1.AdminGuard],
                children: [
                    {
                        path: '',
                        component: basic_component_1.BasicComponent,
                        canActivate: [admin_guard_1.AdminGuard],
                    },
                    {
                        path: 'users',
                        component: all_users_component_1.AllUsersComponent,
                        canActivate: [admin_guard_1.AdminGuard],
                    },
                    {
                        path: 'user/:id',
                        component: single_user_component_1.SingleUserComponent,
                        canActivate: [admin_guard_1.AdminGuard],
                    },
                    {
                        path: 'companies',
                        component: all_companies_component_1.AllCompaniesComponent,
                        canActivate: [admin_guard_1.AdminGuard],
                    },
                    {
                        path: 'company/:id',
                        component: single_company_component_1.SingleCompanyComponent,
                        canActivate: [admin_guard_1.AdminGuard],
                    },
                    {
                        path: 'plans',
                        component: plans_component_1.PlansComponent,
                        canActivate: [admin_guard_1.AdminGuard],
                    },
                    {
                        path: 'subdomains',
                        component: subdomain_component_1.SubDomainComponent,
                        canActivate: [admin_guard_1.AdminGuard],
                    },
                    {
                        path: 'emailLogs',
                        component: email_logs_component_1.EmailLogsComponent,
                        canActivate: [admin_guard_1.AdminGuard],
                    }
                ]
            }
        ]
    }, {
        path: 'logout',
        component: logout_component_1.LogoutComponent
    }
];
exports.ADMIN_PROVIDERS = [admin_guard_1.AdminGuard];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb25maWcvcm91dGVzL2FkbWluLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0NBQStCLCtCQUErQixDQUFDLENBQUE7QUFDL0Qsc0JBQThCLDBCQUEwQixDQUFDLENBQUE7QUFDekQsb0NBQWlDLDZDQUE2QyxDQUFDLENBQUE7QUFDL0Usb0NBQWtDLG1EQUFtRCxDQUFDLENBQUE7QUFDdEYsc0NBQW9DLHVEQUF1RCxDQUFDLENBQUE7QUFDNUYsd0NBQXNDLCtEQUErRCxDQUFDLENBQUE7QUFDdEcseUNBQXVDLGlFQUFpRSxDQUFDLENBQUE7QUFDekcscUNBQW1DLCtDQUErQyxDQUFDLENBQUE7QUFDbkYsZ0NBQStCLHFDQUFxQyxDQUFDLENBQUE7QUFDckUsNEJBQTBCLDJDQUEyQyxDQUFDLENBQUE7QUFDdEUsaUNBQWdDLHNDQUFzQyxDQUFDLENBQUE7QUFDdkUsZ0NBQTZCLHFDQUFxQyxDQUFDLENBQUE7QUFHdEQsb0JBQVksR0FBaUI7SUFDeEM7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFNBQVMsRUFBRSxnQ0FBYztRQUN6QixXQUFXLEVBQUMsQ0FBQyx3QkFBVSxDQUFDO1FBQ3hCLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxxQkFBYTtnQkFDeEIsV0FBVyxFQUFDLENBQUMsd0JBQVUsQ0FBQztnQkFDeEIsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxFQUFFO3dCQUNSLFNBQVMsRUFBRSxnQ0FBYzt3QkFDekIsV0FBVyxFQUFDLENBQUMsd0JBQVUsQ0FBQztxQkFDekI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsU0FBUyxFQUFFLHVDQUFpQjt3QkFDNUIsV0FBVyxFQUFDLENBQUMsd0JBQVUsQ0FBQztxQkFDekI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLFNBQVMsRUFBRSwyQ0FBbUI7d0JBQzlCLFdBQVcsRUFBQyxDQUFDLHdCQUFVLENBQUM7cUJBQ3pCO29CQUNEO3dCQUNFLElBQUksRUFBRSxXQUFXO3dCQUNqQixTQUFTLEVBQUMsK0NBQXFCO3dCQUMvQixXQUFXLEVBQUMsQ0FBQyx3QkFBVSxDQUFDO3FCQUN6QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsYUFBYTt3QkFDbkIsU0FBUyxFQUFDLGlEQUFzQjt3QkFDaEMsV0FBVyxFQUFDLENBQUMsd0JBQVUsQ0FBQztxQkFDekI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLE9BQU87d0JBQ2IsU0FBUyxFQUFDLGdDQUFjO3dCQUN4QixXQUFXLEVBQUMsQ0FBQyx3QkFBVSxDQUFDO3FCQUN6QjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsU0FBUyxFQUFDLHdDQUFrQjt3QkFDNUIsV0FBVyxFQUFDLENBQUMsd0JBQVUsQ0FBQztxQkFDekI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLFdBQVc7d0JBQ2pCLFNBQVMsRUFBQyx5Q0FBa0I7d0JBQzVCLFdBQVcsRUFBQyxDQUFDLHdCQUFVLENBQUM7cUJBQ3pCO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGLEVBQUM7UUFDQSxJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSxrQ0FBZTtLQUMzQjtDQUNGLENBQUM7QUFFVyx1QkFBZSxHQUFHLENBQUMsd0JBQVUsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9jb25maWcvcm91dGVzL2FkbWluLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlckNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFkbWluQ29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi9hZG1pbi9hZG1pbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi9hZG1pbi9ob21lL2luZGV4JztcclxuaW1wb3J0IHtTdWJEb21haW5Db21wb25lbnR9IGZyb20gJy4vLi4vLi4vYWRtaW4vc3ViZG9tYWluL3N1YmRvbWFpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbGxVc2Vyc0NvbXBvbmVudCB9IGZyb20gJy4vLi4vLi4vYWRtaW4vdXNlcnMvYWxsLXVzZXJzL2FsbC11c2Vycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaW5nbGVVc2VyQ29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi9hZG1pbi91c2Vycy9zaW5nbGUtdXNlci9zaW5nbGUtdXNlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbGxDb21wYW5pZXNDb21wb25lbnQgfSBmcm9tICcuLy4uLy4uL2FkbWluL2NvbXBhbmllcy9hbGwtY29tcGFuaWVzL2FsbC1jb21wYW5pZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2luZ2xlQ29tcGFueUNvbXBvbmVudCB9IGZyb20gJy4vLi4vLi4vYWRtaW4vY29tcGFuaWVzL3NpbmdsZS1jb21wYW55L3NpbmdsZS1jb21wYW55LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVtYWlsTG9nc0NvbXBvbmVudCB9IGZyb20gJy4vLi4vLi4vYWRtaW4vZW1haWwtbG9ncy9lbWFpbC1sb2dzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBsYW5zQ29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi9hZG1pbi9wbGFucy9wbGFucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZG1pbkd1YXJkfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9hdXRoZW50aWNhdGlvbi9hZG1pbi5ndWFyZCc7XHJcbmltcG9ydCB7IExvZ291dENvbXBvbmVudH0gIGZyb20gJy4uLy4uL3NoYXJlZC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QmFzaWNDb21wb25lbnR9IGZyb20gJy4vLi4vLi4vYWRtaW4vYmFzaWMvYmFzaWMuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuLy4uLy4uL2FkbWluLythYm91dC9pbmRleCc7XHJcblxyXG5leHBvcnQgY29uc3QgQURNSU5fUk9VVEVTOiBSb3V0ZXJDb25maWcgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJ2FkbWluJyxcclxuICAgIGNvbXBvbmVudDogQWRtaW5Db21wb25lbnQsXHJcbiAgICBjYW5BY3RpdmF0ZTpbQWRtaW5HdWFyZF0sXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIGNhbkFjdGl2YXRlOltBZG1pbkd1YXJkXSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBCYXNpY0NvbXBvbmVudCxcclxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6W0FkbWluR3VhcmRdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ3VzZXJzJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBBbGxVc2Vyc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6W0FkbWluR3VhcmRdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ3VzZXIvOmlkJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBTaW5nbGVVc2VyQ29tcG9uZW50LFxyXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTpbQWRtaW5HdWFyZF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnY29tcGFuaWVzJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OkFsbENvbXBhbmllc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6W0FkbWluR3VhcmRdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ2NvbXBhbnkvOmlkJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OlNpbmdsZUNvbXBhbnlDb21wb25lbnQsXHJcbiAgICAgICAgICAgIGNhbkFjdGl2YXRlOltBZG1pbkd1YXJkXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdwbGFucycsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDpQbGFuc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6W0FkbWluR3VhcmRdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ3N1YmRvbWFpbnMnLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6U3ViRG9tYWluQ29tcG9uZW50LFxyXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTpbQWRtaW5HdWFyZF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnZW1haWxMb2dzJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OkVtYWlsTG9nc0NvbXBvbmVudCxcclxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6W0FkbWluR3VhcmRdLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0se1xyXG4gICAgcGF0aDogJ2xvZ291dCcsXHJcbiAgICBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudFxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRE1JTl9QUk9WSURFUlMgPSBbQWRtaW5HdWFyZF07XHJcblxyXG4iXX0=
