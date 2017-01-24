"use strict";
var index_1 = require('./../../site/index');
var result_component_1 = require('./../../site/templates/components/result.component');
exports.CALCULATOR_ROUTES = [
    {
        path: 'result/:leadId',
        component: result_component_1.ResultComponent
    },
    {
        path: '**',
        component: index_1.CalculatorComponent
    }
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb25maWcvcm91dGVzL2NhbGN1bGF0b3Iucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQkFBb0Msb0JBQW9CLENBQUMsQ0FBQTtBQUN6RCxpQ0FBZ0Msb0RBQW9ELENBQUMsQ0FBQTtBQUV4RSx5QkFBaUIsR0FBaUI7SUFDN0M7UUFDRSxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFNBQVMsRUFBRSxrQ0FBZTtLQUMzQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLElBQUk7UUFDVixTQUFTLEVBQUUsMkJBQW1CO0tBQy9CO0NBQ0YsQ0FBQyIsImZpbGUiOiJhcHAvY29uZmlnL3JvdXRlcy9jYWxjdWxhdG9yLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlckNvbmZpZywgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDYWxjdWxhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi9zaXRlL2luZGV4JztcclxuaW1wb3J0IHsgUmVzdWx0Q29tcG9uZW50IH0gZnJvbSAnLi8uLi8uLi9zaXRlL3RlbXBsYXRlcy9jb21wb25lbnRzL3Jlc3VsdC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENBTENVTEFUT1JfUk9VVEVTOiBSb3V0ZXJDb25maWcgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJ3Jlc3VsdC86bGVhZElkJyxcclxuICAgIGNvbXBvbmVudDogUmVzdWx0Q29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnKionLFxyXG4gICAgY29tcG9uZW50OiBDYWxjdWxhdG9yQ29tcG9uZW50XHJcbiAgfVxyXG5dO1xyXG4iXX0=
