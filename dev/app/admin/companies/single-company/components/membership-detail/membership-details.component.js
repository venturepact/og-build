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
var membership_service_1 = require('./../../../../../shared/services/membership.service');
var router_1 = require('@angular/router');
var MembershipDetailComponent = (function () {
    function MembershipDetailComponent(_membershipService, route) {
        var _this = this;
        this._membershipService = _membershipService;
        this.route = route;
        this.isInvoiceExist = false;
        this.invoices = [];
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    MembershipDetailComponent.prototype.ngOnInit = function () {
        this.getPaymentDetails();
        this.getPlanSubscription();
        this.getInvoices();
    };
    MembershipDetailComponent.prototype.getPaymentDetails = function () {
        var _this = this;
        this._membershipService.getPaymentDetails(this.id)
            .subscribe(function (result) {
            _this.payment = result;
        });
    };
    MembershipDetailComponent.prototype.getPlanSubscription = function () {
        var _this = this;
        this._membershipService.getplanSubscription(this.id)
            .subscribe(function (result) {
            _this.plan = result.currentplan.subscription.plan_id;
            _this.trial_end = moment.unix(result.currentplan.subscription.trial_end).format('DD-MM-YYYY');
            _this.trial_start = moment.unix(result.currentplan.subscription.trial_start).format('DD-MM-YYYY');
            _this.start_date = moment.unix(result.currentplan.subscription.started_at).format('DD-MM-YYYY');
            _this.card = result.currentplan.card;
        });
    };
    MembershipDetailComponent.prototype.getInvoices = function () {
        var _this = this;
        var self = this;
        this._membershipService.getInvoices(this.id)
            .subscribe(function (invoices) {
            invoices.list.forEach(function (invoiceList) {
                self.invoiceNo++;
                invoiceList.invoice.invoiceNo = self.invoiceNo;
                self.isInvoiceExist = true;
                _this._membershipService.getInvoicesPdf(invoiceList.invoice.id, _this.id)
                    .subscribe(function (data) {
                    invoiceList.invoice.href = data.download.download_url;
                    invoiceList.invoice.date = moment.unix(invoiceList.invoice.date).format('DD-MM-YYYY');
                }, function (error) {
                    console.log('Issue in pdf', error);
                });
                self.invoices.push(invoiceList.invoice);
            });
        }, function (error) {
            console.log('get invoice getErrro', error);
        });
    };
    MembershipDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'membership-detail',
            templateUrl: 'membership-details.component.html',
            styleUrls: ['membership-details.component.css'],
            providers: [membership_service_1.MembershipService]
        }), 
        __metadata('design:paramtypes', [membership_service_1.MembershipService, router_1.ActivatedRoute])
    ], MembershipDetailComponent);
    return MembershipDetailComponent;
}());
exports.MembershipDetailComponent = MembershipDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbi9jb21wYW5pZXMvc2luZ2xlLWNvbXBhbnkvY29tcG9uZW50cy9tZW1iZXJzaGlwLWRldGFpbC9tZW1iZXJzaGlwLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUMsZUFBZSxDQUFDLENBQUE7QUFDakQsbUNBQWdDLHFEQUFxRCxDQUFDLENBQUE7QUFDdEYsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFhL0M7SUFlQyxtQ0FDVyxrQkFBcUMsRUFDckMsS0FBcUI7UUFqQmpDLGlCQWdGQztRQWhFVyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBTi9CLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGFBQVEsR0FBUyxFQUFFLENBQUM7UUFNbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoQyxLQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw0Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHRCxxREFBaUIsR0FBakI7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ2hELFNBQVMsQ0FBQyxVQUFDLE1BQVU7WUFDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdURBQW1CLEdBQW5CO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNoRCxTQUFTLENBQUMsVUFBQyxNQUFVO1lBQ3JCLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDN0YsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9GLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0NBQVcsR0FBWDtRQUFBLGlCQTRCQztRQTNCQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ3JDLFNBQVMsQ0FDRixVQUFDLFFBQWM7WUFDYixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFdBQWU7Z0JBQ3BDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBRTFCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQztxQkFDdEUsU0FBUyxDQUNGLFVBQUMsSUFBVTtvQkFFVCxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztvQkFDdEQsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEYsQ0FBQyxFQUNELFVBQUMsS0FBUztvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEMsQ0FBQyxDQUNSLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUNELFVBQUMsS0FBUztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUNOLENBQUM7SUFDWixDQUFDO0lBckZIO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxtQ0FBbUM7WUFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7WUFDL0MsU0FBUyxFQUFFLENBQUMsc0NBQWlCLENBQUM7U0FDOUIsQ0FBQzs7aUNBQUE7SUFrRkYsZ0NBQUM7QUFBRCxDQWhGQSxBQWdGQyxJQUFBO0FBaEZZLGlDQUF5Qiw0QkFnRnJDLENBQUEiLCJmaWxlIjoiYXBwL2FkbWluL2NvbXBhbmllcy9zaW5nbGUtY29tcGFueS9jb21wb25lbnRzL21lbWJlcnNoaXAtZGV0YWlsL21lbWJlcnNoaXAtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09uSW5pdCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWVtYmVyc2hpcFNlcnZpY2V9IGZyb20gJy4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL21lbWJlcnNoaXAuc2VydmljZSc7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDphbnk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ21lbWJlcnNoaXAtZGV0YWlsJyxcclxuXHR0ZW1wbGF0ZVVybDogJ21lbWJlcnNoaXAtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJ21lbWJlcnNoaXAtZGV0YWlscy5jb21wb25lbnQuY3NzJ10sXHJcblx0cHJvdmlkZXJzOiBbTWVtYmVyc2hpcFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVtYmVyc2hpcERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRpZDpzdHJpbmc7XHJcblx0cGF5bWVudDphbnk7XHJcbiAgcGxhbjogYW55O1xyXG4gIHRyaWFsX2VuZCA6IHN0cmluZztcclxuICB0cmlhbF9zdGFydCA6IHN0cmluZztcclxuICBzdGFydF9kYXRlIDogc3RyaW5nO1xyXG4gIGVuZF9kYXRlIDogc3RyaW5nO1xyXG4gIHN0YXR1cyA6IGJvb2xlYW47XHJcbiAgY2FyZCA6IGFueTtcclxuXHJcbiAgaXNJbnZvaWNlRXhpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBpbnZvaWNlcyA6IGFueSA9IFtdO1xyXG4gIGludm9pY2VObyA6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9tZW1iZXJzaGlwU2VydmljZTogTWVtYmVyc2hpcFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSl7XHJcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgdGhpcy5pZCA9IHBhcmFtc1snaWQnXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIHRoaXMuZ2V0UGF5bWVudERldGFpbHMoKTtcclxuICAgIHRoaXMuZ2V0UGxhblN1YnNjcmlwdGlvbigpO1xyXG4gICAgdGhpcy5nZXRJbnZvaWNlcygpO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldFBheW1lbnREZXRhaWxzKCl7XHJcbiAgXHR0aGlzLl9tZW1iZXJzaGlwU2VydmljZS5nZXRQYXltZW50RGV0YWlscyh0aGlzLmlkKVxyXG4gIFx0XHQuc3Vic2NyaWJlKChyZXN1bHQ6YW55KT0+e1xyXG4gIFx0XHRcdHRoaXMucGF5bWVudCA9IHJlc3VsdDtcclxuICBcdFx0Ly9cdGNvbnNvbGUubG9nKFwicGF5bWVudCBkZXRhaWxzXCIscmVzdWx0KTtcclxuICBcdFx0fSk7XHJcbiAgfVxyXG5cclxuICBnZXRQbGFuU3Vic2NyaXB0aW9uKCl7XHJcbiAgICB0aGlzLl9tZW1iZXJzaGlwU2VydmljZS5nZXRwbGFuU3Vic2NyaXB0aW9uKHRoaXMuaWQpXHJcbiAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQ6YW55KT0+e1xyXG4gICAgICAgIHRoaXMucGxhbiA9IHJlc3VsdC5jdXJyZW50cGxhbi5zdWJzY3JpcHRpb24ucGxhbl9pZDtcclxuICAgICAgICB0aGlzLnRyaWFsX2VuZCA9IG1vbWVudC51bml4KHJlc3VsdC5jdXJyZW50cGxhbi5zdWJzY3JpcHRpb24udHJpYWxfZW5kKS5mb3JtYXQoJ0RELU1NLVlZWVknKTtcclxuICAgICAgICB0aGlzLnRyaWFsX3N0YXJ0ID0gbW9tZW50LnVuaXgocmVzdWx0LmN1cnJlbnRwbGFuLnN1YnNjcmlwdGlvbi50cmlhbF9zdGFydCkuZm9ybWF0KCdERC1NTS1ZWVlZJyk7XHJcbiAgICAgICAgdGhpcy5zdGFydF9kYXRlID0gbW9tZW50LnVuaXgocmVzdWx0LmN1cnJlbnRwbGFuLnN1YnNjcmlwdGlvbi5zdGFydGVkX2F0KS5mb3JtYXQoJ0RELU1NLVlZWVknKTtcclxuICAgICAgICB0aGlzLmNhcmQgPSByZXN1bHQuY3VycmVudHBsYW4uY2FyZDtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRJbnZvaWNlcygpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuX21lbWJlcnNoaXBTZXJ2aWNlLmdldEludm9pY2VzKHRoaXMuaWQpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAoaW52b2ljZXMgOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlcy5saXN0LmZvckVhY2goKGludm9pY2VMaXN0OmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnZvaWNlTm8rKztcclxuICAgICAgICAgICAgICAgICAgICAgIGludm9pY2VMaXN0Lmludm9pY2UuaW52b2ljZU5vID0gc2VsZi5pbnZvaWNlTm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pc0ludm9pY2VFeGlzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbnZvaWNlTGlzdC5pbnZvaWNlLmlkLCdpbnZvaWNlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21lbWJlcnNoaXBTZXJ2aWNlLmdldEludm9pY2VzUGRmKGludm9pY2VMaXN0Lmludm9pY2UuaWQsIHRoaXMuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGEgOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ0dldCBQZGYnLGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52b2ljZUxpc3QuaW52b2ljZS5ocmVmID0gZGF0YS5kb3dubG9hZC5kb3dubG9hZF91cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZvaWNlTGlzdC5pbnZvaWNlLmRhdGUgPSBtb21lbnQudW5peChpbnZvaWNlTGlzdC5pbnZvaWNlLmRhdGUpLmZvcm1hdCgnREQtTU0tWVlZWScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0lzc3VlIGluIHBkZicsZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmludm9pY2VzLnB1c2goaW52b2ljZUxpc3QuaW52b2ljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIChlcnJvcjphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGludm9pY2UgZ2V0RXJycm8nLGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
