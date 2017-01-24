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
var index_1 = require('./../services/index');
var SubdomainGuard = (function () {
    function SubdomainGuard(router, subDomainService) {
        this.router = router;
        this.subDomainService = subDomainService;
    }
    SubdomainGuard.prototype.canActivate = function () {
        console.log('this.subDomainService.subDomain.is_sub_domain_url', this.subDomainService.subDomain.is_sub_domain_url, 'this.subDomainService.subDomain.exists', this.subDomainService.subDomain.exists);
        if (this.subDomainService.subDomain.is_sub_domain_url && !this.subDomainService.subDomain.exists) {
            this.router.navigate(['Error']);
            return false;
        }
        return true;
    };
    SubdomainGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, index_1.SubDomainService])
    ], SubdomainGuard);
    return SubdomainGuard;
}());
exports.SubdomainGuard = SubdomainGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXV0aGVudGljYXRpb24vc3ViZG9tYWluLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsdUJBQW1DLGlCQUFpQixDQUFDLENBQUE7QUFDckQsc0JBQWlDLHFCQUFxQixDQUFDLENBQUE7QUFHdkQ7SUFDSSx3QkFDWSxNQUFjLEVBQ2QsZ0JBQW1DO1FBRG5DLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO0lBRS9DLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFDLHdDQUF3QyxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbk0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMvRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBZkw7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQWdCYixxQkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksc0JBQWMsaUJBZTFCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9hdXRoZW50aWNhdGlvbi9zdWJkb21haW4uZ3VhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YkRvbWFpblNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN1YmRvbWFpbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHN1YkRvbWFpblNlcnZpY2UgOiBTdWJEb21haW5TZXJ2aWNlXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5pc19zdWJfZG9tYWluX3VybCcsdGhpcy5zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5pc19zdWJfZG9tYWluX3VybCwndGhpcy5zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5leGlzdHMnLHRoaXMuc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uZXhpc3RzKTtcclxuICAgICAgICBpZiAodGhpcy5zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5pc19zdWJfZG9tYWluX3VybCAmJiAhdGhpcy5zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5leGlzdHMpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydFcnJvciddKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iXX0=
