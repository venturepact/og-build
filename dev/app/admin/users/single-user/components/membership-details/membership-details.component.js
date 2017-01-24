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
var membership_service_1 = require('./../../../../../shared/services/membership.service');
var user_service_1 = require('./../../../../../shared/services/user.service');
var company_service_1 = require('./../../../../../shared/services/company.service');
var MembershipDetailsComponent = (function () {
    function MembershipDetailsComponent(_membershipService, _userService, route, _companyService) {
        var _this = this;
        this._membershipService = _membershipService;
        this._userService = _userService;
        this.route = route;
        this._companyService = _companyService;
        this.loading = false;
        this.isInvoiceExist = false;
        this.invoices = [];
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    MembershipDetailsComponent.prototype.ngOnInit = function () {
        this.companyId = this.companies[0]._id;
        this.getPlanSubscription(this.companyId);
        this.getInvoices(this.companyId);
    };
    MembershipDetailsComponent.prototype.refreshCompanyDetail = function () {
        this.loading = true;
        console.log("changing id ", this.companyId);
        this.getPlanSubscription(this.companyId);
        this.getInvoices(this.companyId);
    };
    MembershipDetailsComponent.prototype.getPlanSubscription = function (id) {
        var _this = this;
        this._membershipService.getplanSubscription(id)
            .subscribe(function (result) {
            _this.plan = result.currentplan.subscription.plan_id;
            _this.trial_end = moment.unix(result.currentplan.subscription.trial_end).format('DD-MM-YYYY');
            _this.trial_start = moment.unix(result.currentplan.subscription.trial_start).format('DD-MM-YYYY');
            _this.start_date = moment.unix(result.currentplan.subscription.started_at).format('DD-MM-YYYY');
            _this.card = result.currentplan.card;
            console.log("plan details", result);
            _this.loading = false;
        });
    };
    MembershipDetailsComponent.prototype.getInvoices = function (id) {
        var _this = this;
        var self = this;
        self.invoices = [];
        this._membershipService.getInvoices(id)
            .subscribe(function (invoices) {
            invoices.list.forEach(function (invoiceList) {
                self.invoiceNo++;
                invoiceList.invoice.invoiceNo = self.invoiceNo;
                self.isInvoiceExist = true;
                _this._membershipService.getInvoicesPdf(invoiceList.invoice.id, id)
                    .subscribe(function (data) {
                    invoiceList.invoice.href = data.download.download_url;
                    invoiceList.invoice.date = moment.unix(invoiceList.invoice.date).format('DD-MM-YYYY');
                }, function (error) {
                    console.log('Issue in pdf', error);
                });
                self.invoices.push(invoiceList.invoice);
            });
            _this.loading = false;
        }, function (error) {
            console.log('get invoice getErrro', error);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MembershipDetailsComponent.prototype, "companies", void 0);
    MembershipDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-membership-details',
            templateUrl: 'membership-details.component.html',
            styleUrls: ['membership-details.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [membership_service_1.MembershipService, user_service_1.UserService, router_1.ActivatedRoute, company_service_1.CompanyService])
    ], MembershipDetailsComponent);
    return MembershipDetailsComponent;
}());
exports.MembershipDetailsComponent = MembershipDetailsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi91c2Vycy9zaW5nbGUtdXNlci9jb21wb25lbnRzL21lbWJlcnNoaXAtZGV0YWlscy9tZW1iZXJzaGlwLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0MsZUFBZSxDQUFDLENBQUE7QUFDdEQsdUJBQWlELGlCQUFpQixDQUFDLENBQUE7QUFDbkUsbUNBQWdDLHFEQUFxRCxDQUFDLENBQUE7QUFDdEYsNkJBQTBCLCtDQUErQyxDQUFDLENBQUE7QUFDMUUsZ0NBQTZCLGtEQUFrRCxDQUFDLENBQUE7QUFZaEY7SUFrQkUsb0NBQW9CLGtCQUFvQyxFQUM5QyxZQUF5QixFQUN6QixLQUFxQixFQUNyQixlQUFnQztRQXJCNUMsaUJBcUZDO1FBbkVxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWtCO1FBQzlDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVIxQyxZQUFPLEdBQVcsS0FBSyxDQUFDO1FBRXhCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBUyxFQUFFLENBQUM7UUFNbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoQyxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25D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QixDQUFDLEVBQ0QsVUFBQyxLQUFTO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQ2QsQ0FBQztJQUNKLENBQUM7SUFqRkQ7UUFBQyxZQUFLLEVBQUU7O2lFQUFBO0lBVlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztZQUMvQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNoQyxDQUFDOztrQ0FBQTtJQXVGRixpQ0FBQztBQUFELENBckZBLEFBcUZDLElBQUE7QUFyRlksa0NBQTBCLDZCQXFGdEMsQ0FBQSIsImZpbGUiOiJhcHAvYWRtaW4vdXNlcnMvc2luZ2xlLXVzZXIvY29tcG9uZW50cy9tZW1iZXJzaGlwLWRldGFpbHMvbWVtYmVyc2hpcC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQsSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyxBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7TWVtYmVyc2hpcFNlcnZpY2V9IGZyb20gJy4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL21lbWJlcnNoaXAuc2VydmljZSc7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7Q29tcGFueVNlcnZpY2V9IGZyb20gJy4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2NvbXBhbnkuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xyXG5kZWNsYXJlIHZhciBtb21lbnQ6YW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnb2ctbWVtYmVyc2hpcC1kZXRhaWxzJyxcclxuICB0ZW1wbGF0ZVVybDogJ21lbWJlcnNoaXAtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ21lbWJlcnNoaXAtZGV0YWlscy5jb21wb25lbnQuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbWJlcnNoaXBEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgY29tcGFuaWVzIDogYW55W107XHJcbiAgY29tcGFueUlkIDogYW55O1xyXG4gIGlkIDogc3RyaW5nO1xyXG4gIHBheW1lbnQgOiBhbnk7XHJcbiAgcGxhbjogYW55O1xyXG4gIHRyaWFsX2VuZCA6IHN0cmluZztcclxuICB0cmlhbF9zdGFydCA6IHN0cmluZztcclxuICBzdGFydF9kYXRlIDogc3RyaW5nO1xyXG4gIGVuZF9kYXRlIDogc3RyaW5nO1xyXG4gIHN0YXR1cyA6IGJvb2xlYW47XHJcbiAgY2FyZCA6IGFueTtcclxuICBsb2FkaW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgaXNJbnZvaWNlRXhpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpbnZvaWNlcyA6IGFueSA9IFtdO1xyXG4gIGludm9pY2VObyA6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZW1iZXJzaGlwU2VydmljZTpNZW1iZXJzaGlwU2VydmljZSwgXHJcbiAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgXHJcbiAgICBwcml2YXRlIF9jb21wYW55U2VydmljZSA6IENvbXBhbnlTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgdGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcclxuICAgIH0pOyAgXHRcdFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMuY29tcGFueUlkID0gdGhpcy5jb21wYW5pZXNbMF0uX2lkO1xyXG4gICAgdGhpcy5nZXRQbGFuU3Vic2NyaXB0aW9uKHRoaXMuY29tcGFueUlkKTtcclxuICAgIHRoaXMuZ2V0SW52b2ljZXModGhpcy5jb21wYW55SWQpO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIHJlZnJlc2hDb21wYW55RGV0YWlsKCl7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgY29uc29sZS5sb2coXCJjaGFuZ2luZyBpZCBcIix0aGlzLmNvbXBhbnlJZCk7XHJcbiAgICB0aGlzLmdldFBsYW5TdWJzY3JpcHRpb24odGhpcy5jb21wYW55SWQpO1xyXG4gICAgdGhpcy5nZXRJbnZvaWNlcyh0aGlzLmNvbXBhbnlJZCk7XHJcbiAgfVxyXG5cclxuICBnZXRQbGFuU3Vic2NyaXB0aW9uKGlkOnN0cmluZyl7XHJcbiAgICB0aGlzLl9tZW1iZXJzaGlwU2VydmljZS5nZXRwbGFuU3Vic2NyaXB0aW9uKGlkKVxyXG4gICAgICAgLnN1YnNjcmliZSgocmVzdWx0OmFueSk9PntcclxuICAgICAgICB0aGlzLnBsYW4gPSByZXN1bHQuY3VycmVudHBsYW4uc3Vic2NyaXB0aW9uLnBsYW5faWQ7XHJcbiAgICAgICAgdGhpcy50cmlhbF9lbmQgPSBtb21lbnQudW5peChyZXN1bHQuY3VycmVudHBsYW4uc3Vic2NyaXB0aW9uLnRyaWFsX2VuZCkuZm9ybWF0KCdERC1NTS1ZWVlZJyk7XHJcbiAgICAgICAgdGhpcy50cmlhbF9zdGFydCA9IG1vbWVudC51bml4KHJlc3VsdC5jdXJyZW50cGxhbi5zdWJzY3JpcHRpb24udHJpYWxfc3RhcnQpLmZvcm1hdCgnREQtTU0tWVlZWScpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRfZGF0ZSA9IG1vbWVudC51bml4KHJlc3VsdC5jdXJyZW50cGxhbi5zdWJzY3JpcHRpb24uc3RhcnRlZF9hdCkuZm9ybWF0KCdERC1NTS1ZWVlZJyk7XHJcbiAgICAgICAgdGhpcy5jYXJkID0gcmVzdWx0LmN1cnJlbnRwbGFuLmNhcmQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGFuIGRldGFpbHNcIixyZXN1bHQpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEludm9pY2VzKGlkOnN0cmluZykge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5pbnZvaWNlcyA9IFtdO1xyXG4gICAgdGhpcy5fbWVtYmVyc2hpcFNlcnZpY2UuZ2V0SW52b2ljZXMoaWQpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAoaW52b2ljZXMgOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlcy5saXN0LmZvckVhY2goKGludm9pY2VMaXN0OmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnZvaWNlTm8rKztcclxuICAgICAgICAgICAgICAgICAgICAgIGludm9pY2VMaXN0Lmludm9pY2UuaW52b2ljZU5vID0gc2VsZi5pbnZvaWNlTm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pc0ludm9pY2VFeGlzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21lbWJlcnNoaXBTZXJ2aWNlLmdldEludm9pY2VzUGRmKGludm9pY2VMaXN0Lmludm9pY2UuaWQsaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGEgOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludm9pY2VMaXN0Lmludm9pY2UuaHJlZiA9IGRhdGEuZG93bmxvYWQuZG93bmxvYWRfdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52b2ljZUxpc3QuaW52b2ljZS5kYXRlID0gbW9tZW50LnVuaXgoaW52b2ljZUxpc3QuaW52b2ljZS5kYXRlKS5mb3JtYXQoJ0RELU1NLVlZWVknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcjphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJc3N1ZSBpbiBwZGYnLGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnZvaWNlcy5wdXNoKGludm9pY2VMaXN0Lmludm9pY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAoZXJyb3I6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBpbnZvaWNlIGdldEVycnJvJyxlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
