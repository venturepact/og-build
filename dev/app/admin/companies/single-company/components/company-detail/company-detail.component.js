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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var company_1 = require('../../../../../shared/models/company');
var index_1 = require('./../../../../../shared/services/index');
var CompanyDetailComponent = (function () {
    function CompanyDetailComponent(companyService, fb, route) {
        var _this = this;
        this.companyService = companyService;
        this.fb = fb;
        this.route = route;
        this.company = '';
        this.updateCompany = '';
        this.edit_mode = false;
        this.loading = false;
        this.isSubmit = false;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    CompanyDetailComponent.prototype.ngOnInit = function () {
        this.errorMsg = '';
        this.getCompanyInfo(this.id);
        this.updateFormdetail = this.fb.group({
            companyname: [this.updateCompany.name, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            domain: [this.updateCompany.sub_domain, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.pattern('^[a-zA-Z0-9]*$')
                ])],
            agency: [this.updateCompany.agency],
            is_admin_created: [this.updateCompany.is_admin_created],
            c_cust_id: [this.updateCompany.chargebee_customer_id],
            c_sub_id: [this.updateCompany.chargebee_subscription_id],
            c_plan_id: [this.updateCompany.chargebee_plan_id],
            s_cust_id: [this.updateCompany.stripe_customer_id],
        });
    };
    CompanyDetailComponent.prototype.getCompanyInfo = function (id) {
        var _this = this;
        this.companyService.getCompanyInfo(id)
            .subscribe(function (response) {
            _this.company = new company_1.AdminCompany(response.company);
            _this.updateCompany = new company_1.AdminCompany(response.company);
        }, function (response) {
            console.log('getCompanyInfo Err', response);
        });
    };
    CompanyDetailComponent.prototype.updateCompanyInfo = function () {
        var _this = this;
        this.isSubmit = true;
        if (this.updateFormdetail.valid) {
            this.loading = true;
            this.isSubmit = false;
            this.companyService.updateCompany(this.id, this.updateCompany, true)
                .subscribe(function (response) {
                _this.company = new company_1.AdminCompany(response);
                _this.loading = false;
                _this.edit_mode = false;
                console.log('hello updated', _this.company);
            }, function (response) {
                _this.loading = false;
                _this.edit_mode = false;
                console.log('getCompanyInfo Err', response);
            });
        }
    };
    CompanyDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'company-detail',
            templateUrl: 'company-detail.component.html',
            styleUrls: ['company-detail.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.CompanyService, forms_1.FormBuilder, router_1.ActivatedRoute])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
}());
exports.CompanyDetailComponent = CompanyDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wYW5pZXMvc2luZ2xlLWNvbXBhbnkvY29tcG9uZW50cy9jb21wYW55LWRldGFpbC9jb21wYW55LWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxzQkFBNkUsZ0JBQWdCLENBQUMsQ0FBQTtBQUM5Rix1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUNqRCx3QkFBNkIsc0NBQXNDLENBQUMsQ0FBQTtBQUNwRSxzQkFBK0Isd0NBQXdDLENBQUMsQ0FBQTtBQVl4RTtJQVVDLGdDQUNTLGNBQThCLEVBQVUsRUFBZSxFQUN2RCxLQUFxQjtRQVovQixpQkE0RUM7UUFqRVMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUN2RCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVY5QixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBRXhCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBS3pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDakMsS0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBR0QseUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNyQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxD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LEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztZQUMzQyxVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztTQUN0QyxDQUFDOzs4QkFBQTtJQThFRiw2QkFBQztBQUFELENBNUVBLEFBNEVDLElBQUE7QUE1RVksOEJBQXNCLHlCQTRFbEMsQ0FBQSIsImZpbGUiOiJhcHAvYWRtaW4vY29tcGFuaWVzL3NpbmdsZS1jb21wYW55L2NvbXBvbmVudHMvY29tcGFueS1kZXRhaWwvY29tcGFueS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFkbWluQ29tcGFueSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvY29tcGFueSc7XHJcbmltcG9ydCB7IENvbXBhbnlTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnY29tcGFueS1kZXRhaWwnLFxyXG5cdHRlbXBsYXRlVXJsOiAnY29tcGFueS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWydjb21wYW55LWRldGFpbC5jb21wb25lbnQuY3NzJ10sXHJcblx0ZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wYW55RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0Y29tcGFueTogYW55ID0gJyc7XHJcblx0dXBkYXRlQ29tcGFueTogYW55ID0gJyc7XHJcblx0aWQ6IGFueTtcclxuXHRlZGl0X21vZGU6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHRsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblx0dXBkYXRlRm9ybWRldGFpbDogRm9ybUdyb3VwO1xyXG5cdGlzU3VibWl0OiBCb29sZWFuID0gZmFsc2U7XHJcblx0ZXJyb3JNc2c6IGFueTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29tcGFueVNlcnZpY2U6IENvbXBhbnlTZXJ2aWNlLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0dGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5lcnJvck1zZyA9ICcnO1xyXG5cdFx0dGhpcy5nZXRDb21wYW55SW5mbyh0aGlzLmlkKTtcclxuXHRcdHRoaXMudXBkYXRlRm9ybWRldGFpbCA9IHRoaXMuZmIuZ3JvdXAoe1xyXG5cdFx0XHRjb21wYW55bmFtZTogW3RoaXMudXBkYXRlQ29tcGFueS5uYW1lLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpXSldLFxyXG5cdFx0XHRkb21haW46IFt0aGlzLnVwZGF0ZUNvbXBhbnkuc3ViX2RvbWFpbiwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuXHRcdFx0XHRWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG5cdFx0XHRcdFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLFxyXG5cdFx0XHRcdFZhbGlkYXRvcnMucGF0dGVybignXlthLXpBLVowLTldKiQnKVxyXG5cdFx0XHRdKV0sXHJcblx0XHRcdGFnZW5jeTogW3RoaXMudXBkYXRlQ29tcGFueS5hZ2VuY3ldLFxyXG5cdFx0XHRpc19hZG1pbl9jcmVhdGVkOiBbdGhpcy51cGRhdGVDb21wYW55LmlzX2FkbWluX2NyZWF0ZWRdLFxyXG5cdFx0XHRjX2N1c3RfaWQ6IFt0aGlzLnVwZGF0ZUNvbXBhbnkuY2hhcmdlYmVlX2N1c3RvbWVyX2lkXSxcclxuXHRcdFx0Y19zdWJfaWQ6IFt0aGlzLnVwZGF0ZUNvbXBhbnkuY2hhcmdlYmVlX3N1YnNjcmlwdGlvbl9pZF0sXHJcblx0XHRcdGNfcGxhbl9pZDogW3RoaXMudXBkYXRlQ29tcGFueS5jaGFyZ2ViZWVfcGxhbl9pZF0sXHJcblx0XHRcdHNfY3VzdF9pZDogW3RoaXMudXBkYXRlQ29tcGFueS5zdHJpcGVfY3VzdG9tZXJfaWRdLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXRDb21wYW55SW5mbyhpZDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLmNvbXBhbnlTZXJ2aWNlLmdldENvbXBhbnlJbmZvKGlkKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHQocmVzcG9uc2U6IGFueSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY29tcGFueSA9IG5ldyBBZG1pbkNvbXBhbnkocmVzcG9uc2UuY29tcGFueSk7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVDb21wYW55ID0gbmV3IEFkbWluQ29tcGFueShyZXNwb25zZS5jb21wYW55KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0KHJlc3BvbnNlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZ2V0Q29tcGFueUluZm8gRXJyJywgcmVzcG9uc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDb21wYW55SW5mbygpIHtcclxuXHRcdHRoaXMuaXNTdWJtaXQgPSB0cnVlO1xyXG5cdFx0aWYgKHRoaXMudXBkYXRlRm9ybWRldGFpbC52YWxpZCkge1xyXG5cdFx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmlzU3VibWl0ID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuY29tcGFueVNlcnZpY2UudXBkYXRlQ29tcGFueSh0aGlzLmlkLCB0aGlzLnVwZGF0ZUNvbXBhbnksIHRydWUpXHJcblx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQocmVzcG9uc2U6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5jb21wYW55ID0gbmV3IEFkbWluQ29tcGFueShyZXNwb25zZSk7XHJcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuZWRpdF9tb2RlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnaGVsbG8gdXBkYXRlZCcsIHRoaXMuY29tcGFueSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQocmVzcG9uc2U6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmVkaXRfbW9kZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2dldENvbXBhbnlJbmZvIEVycicsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
