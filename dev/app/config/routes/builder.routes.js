"use strict";
var index_1 = require('./../../site/index');
var auth_guard_1 = require('../../shared/authentication/auth.guard');
var freemium_guard_1 = require('../../shared/authentication/freemium.guard');
var logout_component_1 = require('../../shared/logout/logout.component');
exports.BUILDER_ROUTES = [
    {
        path: 'builder',
        component: index_1.BuilderParentComponent,
        children: [
            {
                path: '',
                component: index_1.BuilderComponent,
                canActivate: [auth_guard_1.AuthGuard, freemium_guard_1.FreemiumGuard]
            },
            {
                path: ':name',
                component: index_1.BuilderComponent,
                canActivate: [auth_guard_1.AuthGuard, freemium_guard_1.FreemiumGuard]
            }
        ]
    },
    {
        path: 'logout',
        component: logout_component_1.LogoutComponent
    },
    {
        path: 'preview',
        component: index_1.BuilderParentComponent,
        children: [
            {
                path: '',
                component: index_1.PreviewComponent,
                canActivate: [auth_guard_1.AuthGuard, freemium_guard_1.FreemiumGuard]
            },
            {
                path: 'previewFrame',
                component: index_1.Template,
                canActivate: [auth_guard_1.AuthGuard, freemium_guard_1.FreemiumGuard]
            }
        ]
    },
    {
        path: 'samplecode',
        component: index_1.BuilderParentComponent,
        children: [
            {
                path: ':type',
                component: index_1.SampleCodeComponent,
                canActivate: [auth_guard_1.AuthGuard, freemium_guard_1.FreemiumGuard]
            }
        ]
    }
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb25maWcvcm91dGVzL2J1aWxkZXIucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQkFBeUcsb0JBQW9CLENBQUMsQ0FBQTtBQUM5SCwyQkFBMEIsd0NBQXdDLENBQUMsQ0FBQTtBQUNuRSwrQkFBNEIsNENBQTRDLENBQUMsQ0FBQTtBQUN6RSxpQ0FBZ0Msc0NBQXNDLENBQUMsQ0FBQTtBQUMxRCxzQkFBYyxHQUFpQjtJQUM1QztRQUNJLElBQUksRUFBRSxTQUFTO1FBQ2YsU0FBUyxFQUFFLDhCQUFzQjtRQUNqQyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsd0JBQWdCO2dCQUMzQixXQUFXLEVBQUUsQ0FBQyxzQkFBUyxFQUFFLDhCQUFhLENBQUM7YUFDeEM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsd0JBQWdCO2dCQUMzQixXQUFXLEVBQUUsQ0FBQyxzQkFBUyxFQUFHLDhCQUFhLENBQUM7YUFDekM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSxrQ0FBZTtLQUMzQjtJQUNGO1FBQ0UsSUFBSSxFQUFFLFNBQVM7UUFDZCxTQUFTLEVBQUUsOEJBQXNCO1FBQ2pDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSx3QkFBZ0I7Z0JBQzNCLFdBQVcsRUFBRSxDQUFDLHNCQUFTLEVBQUUsOEJBQWEsQ0FBQzthQUN4QztZQUNEO2dCQUNFLElBQUksRUFBRSxjQUFjO2dCQUNwQixTQUFTLEVBQUUsZ0JBQVE7Z0JBQ25CLFdBQVcsRUFBRSxDQUFDLHNCQUFTLEVBQUUsOEJBQWEsQ0FBQzthQUN4QztTQUNGO0tBQ0g7SUFDRDtRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2pCLFNBQVMsRUFBRSw4QkFBc0I7UUFDakMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsU0FBUyxFQUFFLDJCQUFtQjtnQkFDOUIsV0FBVyxFQUFFLENBQUMsc0JBQVMsRUFBRSw4QkFBYSxDQUFDO2FBQ3hDO1NBQ0Y7S0FDSDtDQUVELENBQUMiLCJmaWxlIjoiYXBwL2NvbmZpZy9yb3V0ZXMvYnVpbGRlci5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJDb25maWcsIENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQnVpbGRlclBhcmVudENvbXBvbmVudCwgQnVpbGRlckNvbXBvbmVudCwgVGVtcGxhdGUsIFByZXZpZXdDb21wb25lbnQgLFNhbXBsZUNvZGVDb21wb25lbnR9IGZyb20gJy4vLi4vLi4vc2l0ZS9pbmRleCc7XHJcbmltcG9ydCB7IEF1dGhHdWFyZH0gIGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoZW50aWNhdGlvbi9hdXRoLmd1YXJkJztcclxuaW1wb3J0IHtGcmVlbWl1bUd1YXJkfSBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aGVudGljYXRpb24vZnJlZW1pdW0uZ3VhcmQnO1xyXG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnR9ICBmcm9tICcuLi8uLi9zaGFyZWQvbG9nb3V0L2xvZ291dC5jb21wb25lbnQnO1xyXG5leHBvcnQgY29uc3QgQlVJTERFUl9ST1VURVM6IFJvdXRlckNvbmZpZyA9IFtcclxue1xyXG4gICAgcGF0aDogJ2J1aWxkZXInLFxyXG4gICAgY29tcG9uZW50OiBCdWlsZGVyUGFyZW50Q29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIGNvbXBvbmVudDogQnVpbGRlckNvbXBvbmVudCxcclxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZCwgRnJlZW1pdW1HdWFyZF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICc6bmFtZScsXHJcbiAgICAgICAgY29tcG9uZW50OiBCdWlsZGVyQ29tcG9uZW50LFxyXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkICwgRnJlZW1pdW1HdWFyZF1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2xvZ291dCcsXHJcbiAgICBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudFxyXG4gIH0sXHJcbiB7XHJcbiAgIHBhdGg6ICdwcmV2aWV3JyxcclxuICAgIGNvbXBvbmVudDogQnVpbGRlclBhcmVudENvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICBjb21wb25lbnQ6IFByZXZpZXdDb21wb25lbnQsXHJcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIEZyZWVtaXVtR3VhcmRdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncHJldmlld0ZyYW1lJyxcclxuICAgICAgICBjb21wb25lbnQ6IFRlbXBsYXRlLFxyXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkLCBGcmVlbWl1bUd1YXJkXVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiB9LFxyXG4ge1xyXG4gICBwYXRoOiAnc2FtcGxlY29kZScsXHJcbiAgICBjb21wb25lbnQ6IEJ1aWxkZXJQYXJlbnRDb21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJzp0eXBlJyxcclxuICAgICAgICBjb21wb25lbnQ6IFNhbXBsZUNvZGVDb21wb25lbnQsXHJcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIEZyZWVtaXVtR3VhcmRdXHJcbiAgICAgIH1cclxuICAgIF1cclxuIH1cclxuXHJcbl07XHJcbiJdfQ==
