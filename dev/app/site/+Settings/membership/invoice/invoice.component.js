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
var index_1 = require('../../../../shared/services/index');
var invoice_1 = require('../../../../shared/models/invoice');
var InvoiceComponent = (function () {
    function InvoiceComponent(fb, _membershipService, _companyService) {
        this.fb = fb;
        this._membershipService = _membershipService;
        this._companyService = _companyService;
        this.isInvoiceExist = false;
        this.allInvoices = [];
        this.loadingInvDet = true;
    }
    ;
    InvoiceComponent.prototype.ngOnInit = function () {
        this.invoiceNo = 0;
        this.getInvoices();
    };
    InvoiceComponent.prototype.getInvoices = function () {
        var self = this;
        self.loadingInvDet = true;
        this._membershipService.getInvoices()
            .subscribe(function (invoices) {
            self.isInvoiceExist = false;
            self.allInvoices = [];
            invoices.list.forEach(function (invoice) {
                self.allInvoices.push(new invoice_1.Invoice(invoice.invoice));
            });
            if (self.allInvoices.length > 0)
                self.isInvoiceExist = true;
            self.loadingInvDet = false;
        }, function (error) {
            self.loadingInvDet = true;
        });
    };
    InvoiceComponent.prototype.getInvoicePdf = function (invoiceId) {
        var self = this;
        var getInvoicePdf = self._membershipService.getInvoicesPdf(invoiceId)
            .subscribe(function (success) {
            window.location.assign(success.download.download_url);
        }, function (error) {
            getInvoicePdf.unsubscribe();
        });
    };
    InvoiceComponent.prototype.contactUs = function () {
        jQuery('.intercom-launcher').trigger('click');
    };
    InvoiceComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-invoice',
            templateUrl: 'invoice.component.html',
            styleUrls: ['invoice.component.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [index_1.MembershipService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.MembershipService, index_1.CompanyService])
    ], InvoiceComponent);
    return InvoiceComponent;
}());
exports.InvoiceComponent = InvoiceComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytTZXR0aW5ncy9tZW1iZXJzaGlwL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxzQkFBc0QsZ0JBQWdCLENBQUMsQ0FBQTtBQUN2RSxzQkFBaUQsbUNBQW1DLENBQUMsQ0FBQTtBQUNyRix3QkFBc0IsbUNBQW1DLENBQUMsQ0FBQTtBQWUxRDtJQU1FLDBCQUFvQixFQUFnQixFQUFVLGtCQUFzQyxFQUFVLGVBQStCO1FBQXpHLE9BQUUsR0FBRixFQUFFLENBQWM7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBTDdILG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGdCQUFXLEdBQU8sRUFBRSxDQUFDO1FBR3JCLGtCQUFhLEdBQVcsSUFBSSxDQUFDO0lBRTdCLENBQUM7O0lBQ0QsbUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVyQixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFO2FBQzlCLFNBQVMsQ0FDRixVQUFDLFFBQWM7WUFDYixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQVc7Z0JBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFFN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxFQUNELFVBQUMsS0FBUztZQUVSLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FDTixDQUFDO0lBQ1osQ0FBQztJQUVELHdDQUFhLEdBQWIsVUFBYyxTQUFhO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQzthQUNsRSxTQUFTLENBQ1IsVUFBQyxPQUFZO1lBQ1gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQ0QsVUFBQyxLQUFTO1lBQ1IsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDRSxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQTdESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUcsTUFBTSxDQUFDLEVBQUU7WUFDcEIsUUFBUSxFQUFHLFlBQVk7WUFDdkIsV0FBVyxFQUFHLHdCQUF3QjtZQUN0QyxTQUFTLEVBQUcsQ0FBQyx1QkFBdUIsQ0FBQztZQUNyQyxVQUFVLEVBQUcsQ0FBQyxnQ0FBd0IsQ0FBQztZQUN2QyxTQUFTLEVBQUcsQ0FBQyx5QkFBaUIsQ0FBQztTQUNoQyxDQUFDOzt3QkFBQTtJQW1FRix1QkFBQztBQUFELENBakVBLEFBaUVDLElBQUE7QUFqRVksd0JBQWdCLG1CQWlFNUIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rU2V0dGluZ3MvbWVtYmVyc2hpcC9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtNZW1iZXJzaGlwU2VydmljZSwgQ29tcGFueVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQge0ludm9pY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvaW52b2ljZSc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnkgOiBhbnk7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDphbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQgOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3IgOiAnb2ctaW52b2ljZScsXHJcbiAgdGVtcGxhdGVVcmwgOiAnaW52b2ljZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzIDogWydpbnZvaWNlLmNvbXBvbmVudC5jc3MnXSxcclxuICBkaXJlY3RpdmVzIDogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU10sXHJcbiAgcHJvdmlkZXJzIDogW01lbWJlcnNoaXBTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEludm9pY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzSW52b2ljZUV4aXN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgYWxsSW52b2ljZXM6YW55ID0gW107XHJcbiAgaW52b2ljZU5vIDogYW55O1xyXG4gIGNhcmREZXRhaWw6IGFueTtcclxuICBsb2FkaW5nSW52RGV0OmJvb2xlYW4gPSB0cnVlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmIgOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfbWVtYmVyc2hpcFNlcnZpY2UgOiBNZW1iZXJzaGlwU2VydmljZSwgcHJpdmF0ZSBfY29tcGFueVNlcnZpY2U6IENvbXBhbnlTZXJ2aWNlKSB7XHJcbiAgfTtcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW52b2ljZU5vID0gMDtcclxuICAgIHRoaXMuZ2V0SW52b2ljZXMoKTtcclxuICAgIC8vdGhpcy5nZXRQYXltZW50RGV0YWlscygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW52b2ljZXMoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBzZWxmLmxvYWRpbmdJbnZEZXQgPSB0cnVlO1xyXG4gICAgdGhpcy5fbWVtYmVyc2hpcFNlcnZpY2UuZ2V0SW52b2ljZXMoKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgKGludm9pY2VzIDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pc0ludm9pY2VFeGlzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsSW52b2ljZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlcy5saXN0LmZvckVhY2goKGludm9pY2U6YW55KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxJbnZvaWNlcy5wdXNoKG5ldyBJbnZvaWNlKGludm9pY2UuaW52b2ljZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuYWxsSW52b2ljZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaXNJbnZvaWNlRXhpc3QgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxvYWRpbmdJbnZEZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgKGVycm9yOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dldCBpbnZvaWNlIGdldEVycnJvJyxlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2FkaW5nSW52RGV0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW52b2ljZVBkZihpbnZvaWNlSWQ6YW55KXtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBnZXRJbnZvaWNlUGRmID0gc2VsZi5fbWVtYmVyc2hpcFNlcnZpY2UuZ2V0SW52b2ljZXNQZGYoaW52b2ljZUlkKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oc3VjY2Vzcy5kb3dubG9hZC5kb3dubG9hZF91cmwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yOmFueSkgPT4ge1xyXG4gICAgICAgICAgZ2V0SW52b2ljZVBkZi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnRhY3RVcygpe1xyXG4gICAgalF1ZXJ5KCcuaW50ZXJjb20tbGF1bmNoZXInKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gIH1cclxuXHJcbiAgLy8gIGdldFBheW1lbnREZXRhaWxzKCkge1xyXG4gIC8vICAgICB0aGlzLl9tZW1iZXJzaGlwU2VydmljZS5nZXRQYXltZW50RGV0YWlscygpXHJcbiAgLy8gICAgICAgLnN1YnNjcmliZShcclxuICAvLyAgICAgICAgICAgICAgICAgKGRhdGEgOiBhbnkpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmREZXRhaWwgPSBkYXRhLmNhcmRfdHlwZSArICcoZW5kaW5nIGluICcrIGRhdGEubGFzdDQrJyknO1xyXG4gIC8vICAgICAgICAgICAgICAgICB9LFxyXG4gIC8vICAgICAgICAgICAgICAgICAoZXJyb3I6YW55KSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldEVycnJvIHBheW1lbnQgZGV0JyxlcnJvcik7XHJcbiAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgICAgICApO1xyXG4gIC8vIH1cclxufVxyXG4iXX0=
