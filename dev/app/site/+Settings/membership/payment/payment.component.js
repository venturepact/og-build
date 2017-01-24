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
var index_1 = require('../../../../shared/services/index');
var currentPlan_1 = require('../../../../shared/models/currentPlan');
var forms_1 = require('@angular/forms');
var PaymentComponent = (function () {
    function PaymentComponent(_membershipService, fb, _cookieService, _script) {
        this._membershipService = _membershipService;
        this.fb = fb;
        this._cookieService = _cookieService;
        this._script = _script;
        this.BillingDetails = new currentPlan_1.Customer(null);
        this.BillingAddress = '';
        this.CardDetail = new currentPlan_1.Card(null);
        this.error = false;
        this.errorMessage = '';
        this.CardDetailChanged = new core_1.EventEmitter();
        this.name = '';
        this.email = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.country = '';
        this.zip = '';
        this.currentMonth = (new Date).getMonth() + 1;
        this.currentYear = (new Date).getFullYear();
        this.cardExpired = false;
        this.CardWillExpire = false;
        this.userRole = 'MANAGER';
        this.cardType = '';
        this.loadingPayDet = true;
    }
    ;
    PaymentComponent.prototype.ngOnInit = function () {
        jQuery('.modal').on('hidden.bs.modal', function () {
            this.error = false;
            this.errorMessage = '';
        });
        this.getPaymentDeatils();
        this.billingAddressForm = this.fb.group({
            inputName: [this.BillingDetails.first_name, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            inputAddress: [this.BillingAddress.line1, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            inputCity: [this.BillingAddress.city, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            inputState: [this.BillingAddress.state, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            inputCountry: [this.BillingAddress.country, forms_1.Validators.compose([forms_1.Validators.required])],
            inputZipCode: [this.BillingAddress.zip, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.pattern('^[a-zA-Z0-9]*$')])]
        });
        this.userRole = this._cookieService.readCookie('role');
    };
    PaymentComponent.prototype.ngAfterViewInit = function () {
        this._script.load('cardValidator', 'timeZoneMin')
            .then(function (data) {
        })
            .catch(function (error) {
        });
    };
    PaymentComponent.prototype.getPaymentDeatils = function () {
        var _this = this;
        var self = this;
        self.loadingPayDet = true;
        var getPaymentDeatils = self._membershipService.getBillingAddress()
            .subscribe(function (success) {
            console.log('getpaydet', success);
            _this.BillingDetails = new currentPlan_1.Customer(success.customer);
            _this.BillingAddress = _this.BillingDetails.billing_address;
            _this.CardDetail = new currentPlan_1.Card(success.card);
            _this.viewBillingAddress();
            _this.CardDetailChanged.emit(_this.CardDetail);
            self.loadingPayDet = false;
        }, function (error) {
            getPaymentDeatils.unsubscribe();
            self.loadingPayDet = true;
        });
    };
    PaymentComponent.prototype.updateBillingAddress = function () {
        var _this = this;
        var self = this;
        jQuery('#btnBilling').html('please wait...').attr('disables', true);
        var getPaymentDeatils = self._membershipService.setupBilling(this.billingAddressForm.value)
            .subscribe(function (success) {
            jQuery('#billing-detail').modal('hide');
            _this.BillingDetails = new currentPlan_1.Customer(success.customer);
            _this.BillingAddress = _this.BillingDetails.billing_address;
            _this.CardDetail = new currentPlan_1.Card(success.card);
            _this.CardDetailChanged.emit(_this.CardDetail);
            _this.viewBillingAddress();
            jQuery('#btnBilling').html('Save').attr('disables', false);
            _this.error = false;
            _this.errorMessage = '';
            jQuery('#BillingAddressMessage').html('Billing Address Updated succsssfully');
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'Settings Billing Info Edited');
            _kmq.push(['record', 'Settings Billing Info Edited']);
            window.toastNotification('Billing Address Updated succsssfully');
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.error.err_message;
            jQuery('#btnBilling').html('Save').attr('disables', false);
            getPaymentDeatils.unsubscribe();
        });
    };
    PaymentComponent.prototype.viewBillingAddress = function () {
        this.name = this.BillingDetails.first_name;
        this.email = this.BillingDetails.email;
        this.address = this.BillingAddress.line1;
        this.city = this.BillingAddress.city;
        this.state = this.BillingAddress.state;
        this.country = this.BillingAddress.country;
        this.zip = this.BillingAddress.zip;
    };
    PaymentComponent.prototype.contactUs = function () {
        jQuery('.intercom-launcher').trigger('click');
    };
    PaymentComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case "EDITBILLING":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'Settings Edit Billing Info');
                _kmq.push(['record', 'Settings Edit Billing Info Click']);
                break;
            case "PAYMENTCLICK":
                if (this.BillingDetails.card_status == 'no_card') {
                    ga('markettingteam.send', 'event', 'Settings', 'Click', 'Settings Add Payment Method');
                    _kmq.push(['record', 'Settings Add Payment Method Click']);
                }
                else {
                    ga('markettingteam.send', 'event', 'Settings', 'Click', 'Settings Reset Payment Method');
                    _kmq.push(['record', 'Settings Reset Payment Method Click']);
                }
                break;
        }
    };
    PaymentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-payment',
            templateUrl: 'payment.component.html',
            styleUrls: ['payment.component.css'],
            providers: [index_1.MembershipService],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            outputs: ['CardDetailChanged'],
            inputs: ['CardDetail', 'BillingDetails.card_status', 'userRole', 'cardType']
        }), 
        __metadata('design:paramtypes', [index_1.MembershipService, forms_1.FormBuilder, index_1.CookieService, index_1.Script])
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytTZXR0aW5ncy9tZW1iZXJzaGlwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4RCxlQUFlLENBQUMsQ0FBQTtBQUM5RSxzQkFBdUQsbUNBQW1DLENBQUMsQ0FBQTtBQUMzRiw0QkFBNEIsdUNBQXVDLENBQUMsQ0FBQTtBQUNwRSxzQkFBMkUsZ0JBQWdCLENBQUMsQ0FBQTtBQW1CNUY7SUFzQkMsMEJBQ1Msa0JBQXFDLEVBQ3RDLEVBQWMsRUFDYixjQUE0QixFQUM1QixPQUFjO1FBSGQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUN0QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2IsbUJBQWMsR0FBZCxjQUFjLENBQWM7UUFDNUIsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQXpCdkIsbUJBQWMsR0FBYSxJQUFJLHNCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsbUJBQWMsR0FBTyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFTLElBQUksa0JBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxVQUFLLEdBQVcsS0FBSyxDQUFDO1FBQ3RCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTFCLHNCQUFpQixHQUFHLElBQUksbUJBQVksRUFBUSxDQUFDO1FBQzdDLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLFFBQUcsR0FBVSxFQUFFLENBQUM7UUFDaEIsaUJBQVksR0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUMsQ0FBQyxDQUFDO1FBQ3RDLGdCQUFXLEdBQUssQ0FBQyxJQUFJLElBQUks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QUNELElBQUksQ0FBQyxDQUFDO29CQUNMLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO29CQUN6RixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFDRCxLQUFLLENBQUM7UUFDUixDQUFDO0lBQ0YsQ0FBQztJQTFKRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUcsTUFBTSxDQUFDLEVBQUU7WUFDcEIsUUFBUSxFQUFHLFlBQVk7WUFDdkIsV0FBVyxFQUFHLHdCQUF3QjtZQUN0QyxTQUFTLEVBQUcsQ0FBQyx1QkFBdUIsQ0FBQztZQUNyQyxTQUFTLEVBQUUsQ0FBQyx5QkFBaUIsQ0FBQztZQUM5QixVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztZQUN0QyxPQUFPLEVBQUMsQ0FBQyxtQkFBbUIsQ0FBQztZQUM3QixNQUFNLEVBQUMsQ0FBQyxZQUFZLEVBQUMsNEJBQTRCLEVBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQztTQUN6RSxDQUFDOzt3QkFBQTtJQWtKRix1QkFBQztBQUFELENBaEpBLEFBZ0pDLElBQUE7QUFoSlksd0JBQWdCLG1CQWdKNUIsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rU2V0dGluZ3MvbWVtYmVyc2hpcC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlcixBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWVtYmVyc2hpcFNlcnZpY2UsIFNjcmlwdCwgQ29va2llU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHtDdXN0b21lcixDYXJkfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2N1cnJlbnRQbGFuJztcclxuaW1wb3J0IHtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcblxyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBqUXVlcnkgOiBhbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZCA6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvciA6ICdvZy1wYXltZW50JyxcclxuXHR0ZW1wbGF0ZVVybCA6ICdwYXltZW50LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHMgOiBbJ3BheW1lbnQuY29tcG9uZW50LmNzcyddLFxyXG5cdHByb3ZpZGVyczogW01lbWJlcnNoaXBTZXJ2aWNlXSxcclxuXHRkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcclxuXHRvdXRwdXRzOlsnQ2FyZERldGFpbENoYW5nZWQnXSxcclxuXHRpbnB1dHM6WydDYXJkRGV0YWlsJywnQmlsbGluZ0RldGFpbHMuY2FyZF9zdGF0dXMnLCd1c2VyUm9sZScsICdjYXJkVHlwZSddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblx0QmlsbGluZ0RldGFpbHM6IEN1c3RvbWVyID0gbmV3IEN1c3RvbWVyKG51bGwpO1xyXG5cdEJpbGxpbmdBZGRyZXNzOmFueSA9ICcnO1xyXG5cdENhcmREZXRhaWw6IENhcmQgPSBuZXcgQ2FyZChudWxsKTtcclxuXHRlcnJvcjpib29sZWFuID0gZmFsc2U7XHJcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuXHRiaWxsaW5nQWRkcmVzc0Zvcm06Rm9ybUdyb3VwO1xyXG5cdENhcmREZXRhaWxDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxDYXJkPigpO1xyXG5cdG5hbWU6c3RyaW5nID0gJyc7XHJcblx0ZW1haWw6c3RyaW5nID0gJyc7XHJcblx0YWRkcmVzczpzdHJpbmcgPSAnJztcclxuXHRjaXR5OnN0cmluZyA9ICcnO1xyXG5cdHN0YXRlOnN0cmluZyA9ICcnO1xyXG5cdGNvdW50cnk6c3RyaW5nID0gJyc7XHJcblx0emlwOnN0cmluZyA9ICcnO1xyXG5cdGN1cnJlbnRNb250aDphbnk9KG5ldyBEYXRlKS5nZXRNb250aCgpKzE7XHJcbiAgICBjdXJyZW50WWVhcjphbnk9KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY2FyZEV4cGlyZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQ2FyZFdpbGxFeHBpcmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdXNlclJvbGU6c3RyaW5nID0gJ01BTkFHRVInO1xyXG4gICAgY2FyZFR5cGU6c3RyaW5nID0gJyc7XHJcbiAgICBsb2FkaW5nUGF5RGV0OmJvb2xlYW4gPSB0cnVlO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBfbWVtYmVyc2hpcFNlcnZpY2U6IE1lbWJlcnNoaXBTZXJ2aWNlLFxyXG5cdFx0cHVibGljIGZiOkZvcm1CdWlsZGVyLFxyXG5cdFx0cHJpdmF0ZSBfY29va2llU2VydmljZTpDb29raWVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfc2NyaXB0OlNjcmlwdCkge307XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRqUXVlcnkoJy5tb2RhbCcpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLmVycm9yID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZ2V0UGF5bWVudERlYXRpbHMoKTtcclxuXHRcdHRoaXMuYmlsbGluZ0FkZHJlc3NGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcblx0XHRcdGlucHV0TmFtZTogW3RoaXMuQmlsbGluZ0RldGFpbHMuZmlyc3RfbmFtZSwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXSxcclxuXHRcdFx0aW5wdXRBZGRyZXNzOiBbdGhpcy5CaWxsaW5nQWRkcmVzcy5saW5lMSwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXSxcclxuXHRcdFx0aW5wdXRDaXR5OiBbdGhpcy5CaWxsaW5nQWRkcmVzcy5jaXR5LCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpXSldLFxyXG5cdFx0XHRpbnB1dFN0YXRlOiBbdGhpcy5CaWxsaW5nQWRkcmVzcy5zdGF0ZSwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXSxcclxuXHRcdFx0aW5wdXRDb3VudHJ5OiBbdGhpcy5CaWxsaW5nQWRkcmVzcy5jb3VudHJ5LCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXHJcblx0XHRcdGlucHV0WmlwQ29kZTogW3RoaXMuQmlsbGluZ0FkZHJlc3MuemlwLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpLCBWYWxpZGF0b3JzLnBhdHRlcm4oJ15bYS16QS1aMC05XSokJyldKV1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy51c2VyUm9sZSA9IHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgncm9sZScpO1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgdGhpcy5fc2NyaXB0LmxvYWQoJ2NhcmRWYWxpZGF0b3InLCd0aW1lWm9uZU1pbicpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ1NjcmlwdHMgTG9hZGVkJywgZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKT0+e1xyXG4gICAgICAgICAgIC8vY29uc29sZS5sb2coJ1NjcmlwdCBmYWlsZWQgdG8gbG9hZCcsZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHQgZ2V0UGF5bWVudERlYXRpbHMoKXtcclxuXHQgXHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0IFx0c2VsZi5sb2FkaW5nUGF5RGV0ID0gdHJ1ZTtcclxuXHRcdGxldCBnZXRQYXltZW50RGVhdGlscyA9IHNlbGYuX21lbWJlcnNoaXBTZXJ2aWNlLmdldEJpbGxpbmdBZGRyZXNzKClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoc3VjY2VzczogYW55KSA9PiB7XHJcblx0XHRcdFx0ICBjb25zb2xlLmxvZygnZ2V0cGF5ZGV0JyxzdWNjZXNzKTtcclxuXHRcdFx0XHRcdHRoaXMuQmlsbGluZ0RldGFpbHMgPSBuZXcgQ3VzdG9tZXIoc3VjY2Vzcy5jdXN0b21lcik7XHJcblx0XHRcdFx0XHR0aGlzLkJpbGxpbmdBZGRyZXNzID0gdGhpcy5CaWxsaW5nRGV0YWlscy5iaWxsaW5nX2FkZHJlc3M7XHJcblx0XHRcdFx0XHR0aGlzLkNhcmREZXRhaWwgPSBuZXcgQ2FyZChzdWNjZXNzLmNhcmQpO1xyXG5cdFx0XHRcdFx0dGhpcy52aWV3QmlsbGluZ0FkZHJlc3MoKTtcclxuXHRcdFx0XHRcdHRoaXMuQ2FyZERldGFpbENoYW5nZWQuZW1pdCh0aGlzLkNhcmREZXRhaWwpO1xyXG5cdFx0XHRcdFx0c2VsZi5sb2FkaW5nUGF5RGV0ID0gZmFsc2U7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KSA9PiB7XHJcblx0XHRcdFx0XHRnZXRQYXltZW50RGVhdGlscy51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdFx0c2VsZi5sb2FkaW5nUGF5RGV0ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0IH1cclxuXHQgdXBkYXRlQmlsbGluZ0FkZHJlc3MoKXtcclxuXHQgXHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0IFx0alF1ZXJ5KCcjYnRuQmlsbGluZycpLmh0bWwoJ3BsZWFzZSB3YWl0Li4uJykuYXR0cignZGlzYWJsZXMnLHRydWUpO1xyXG5cdFx0bGV0IGdldFBheW1lbnREZWF0aWxzID0gc2VsZi5fbWVtYmVyc2hpcFNlcnZpY2Uuc2V0dXBCaWxsaW5nKHRoaXMuYmlsbGluZ0FkZHJlc3NGb3JtLnZhbHVlKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChzdWNjZXNzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdGpRdWVyeSgnI2JpbGxpbmctZGV0YWlsJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHRoaXMuQmlsbGluZ0RldGFpbHMgPSBuZXcgQ3VzdG9tZXIoc3VjY2Vzcy5jdXN0b21lcik7XHJcblx0XHRcdFx0XHR0aGlzLkJpbGxpbmdBZGRyZXNzID0gdGhpcy5CaWxsaW5nRGV0YWlscy5iaWxsaW5nX2FkZHJlc3M7XHJcblx0XHRcdFx0XHR0aGlzLkNhcmREZXRhaWwgPSBuZXcgQ2FyZChzdWNjZXNzLmNhcmQpO1xyXG5cdFx0XHRcdFx0dGhpcy5DYXJkRGV0YWlsQ2hhbmdlZC5lbWl0KHRoaXMuQ2FyZERldGFpbCk7XHJcblx0XHRcdFx0XHR0aGlzLnZpZXdCaWxsaW5nQWRkcmVzcygpO1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcjYnRuQmlsbGluZycpLmh0bWwoJ1NhdmUnKS5hdHRyKCdkaXNhYmxlcycsZmFsc2UpO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvciA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdFx0XHRcdGpRdWVyeSgnI0JpbGxpbmdBZGRyZXNzTWVzc2FnZScpLmh0bWwoJ0JpbGxpbmcgQWRkcmVzcyBVcGRhdGVkIHN1Y2Nzc3NmdWxseScpO1xyXG5cdFx0XHRcdFx0LyotLS0tIFRyYWNraW5nIGNvZGUgZ29lcyBoZXJlIC0tLS0qL1xyXG5cdFx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnU3VibWl0JywgJ1NldHRpbmdzIEJpbGxpbmcgSW5mbyBFZGl0ZWQnKTtcclxuXHRcdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdTZXR0aW5ncyBCaWxsaW5nIEluZm8gRWRpdGVkJ10pO1xyXG5cdFx0XHRcdFx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdCaWxsaW5nIEFkZHJlc3MgVXBkYXRlZCBzdWNjc3NzZnVsbHknKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdChlcnJvcjphbnkpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuXHRcdFx0XHRcdGpRdWVyeSgnI2J0bkJpbGxpbmcnKS5odG1sKCdTYXZlJykuYXR0cignZGlzYWJsZXMnLGZhbHNlKTtcclxuXHRcdFx0XHRcdGdldFBheW1lbnREZWF0aWxzLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdCB9XHJcblxyXG5cdCB2aWV3QmlsbGluZ0FkZHJlc3MoKXtcclxuXHQgXHR0aGlzLm5hbWUgPSB0aGlzLkJpbGxpbmdEZXRhaWxzLmZpcnN0X25hbWU7XHJcblx0XHR0aGlzLmVtYWlsID0gdGhpcy5CaWxsaW5nRGV0YWlscy5lbWFpbDtcclxuXHRcdHRoaXMuYWRkcmVzcyA9IHRoaXMuQmlsbGluZ0FkZHJlc3MubGluZTE7XHJcblx0XHR0aGlzLmNpdHkgPSB0aGlzLkJpbGxpbmdBZGRyZXNzLmNpdHk7XHJcblx0XHR0aGlzLnN0YXRlID0gdGhpcy5CaWxsaW5nQWRkcmVzcy5zdGF0ZTtcclxuXHRcdHRoaXMuY291bnRyeSA9IHRoaXMuQmlsbGluZ0FkZHJlc3MuY291bnRyeTtcclxuXHRcdHRoaXMuemlwID0gdGhpcy5CaWxsaW5nQWRkcmVzcy56aXA7XHJcblxyXG5cdFx0Ly8gaWYodGhpcy5DYXJkRGV0YWlsLmV4cGlyeV95ZWFyIDwgdGhpcy5jdXJyZW50WWVhcilcclxuXHRcdC8vIFx0dGhpcy5jYXJkRXhwaXJlZCA9IHRydWU7XHJcblx0XHQvLyBlbHNlIGlmKHRoaXMuQ2FyZERldGFpbC5leHBpcnlfeWVhciA9PT0gdGhpcy5jdXJyZW50WWVhciAmJiB0aGlzLkNhcmREZXRhaWwuZXhwaXJ5X21vbnRoIDwgdGhpcy5jdXJyZW50TW9udGgpXHJcblx0XHQvLyBcdHRoaXMuY2FyZEV4cGlyZWQgPSB0cnVlO1xyXG5cdFx0Ly8gaWYodGhpcy5DYXJkRGV0YWlsLmV4cGlyeV95ZWFyID09PSB0aGlzLmN1cnJlbnRZZWFyICYmIHRoaXMuQ2FyZERldGFpbC5leHBpcnlfbW9udGggPT09IHRoaXMuY3VycmVudE1vbnRoKVxyXG5cdFx0Ly8gXHR0aGlzLkNhcmRXaWxsRXhwaXJlID0gdHJ1ZTtcclxuXHQgfVxyXG5cclxuXHQgY29udGFjdFVzKCl7XHJcblx0XHRqUXVlcnkoJy5pbnRlcmNvbS1sYXVuY2hlcicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0fVxyXG5cclxuXHRjYWxsR0Eob3B0OiBzdHJpbmcpIHtcclxuXHRcdHN3aXRjaCAob3B0KSB7XHJcblx0XHRcdGNhc2UgXCJFRElUQklMTElOR1wiOlxyXG5cdFx0XHRcdGdhKCdtYXJrZXR0aW5ndGVhbS5zZW5kJywgJ2V2ZW50JywgJ1NldHRpbmdzJywgJ0NsaWNrJywgJ1NldHRpbmdzIEVkaXQgQmlsbGluZyBJbmZvJyk7XHJcblx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ1NldHRpbmdzIEVkaXQgQmlsbGluZyBJbmZvIENsaWNrJ10pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcIlBBWU1FTlRDTElDS1wiOlxyXG5cdFx0XHRcdGlmKHRoaXMuQmlsbGluZ0RldGFpbHMuY2FyZF9zdGF0dXMgPT0gJ25vX2NhcmQnKSB7XHJcblx0XHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdDbGljaycsICdTZXR0aW5ncyBBZGQgUGF5bWVudCBNZXRob2QnKTtcclxuXHRcdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdTZXR0aW5ncyBBZGQgUGF5bWVudCBNZXRob2QgQ2xpY2snXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnQ2xpY2snLCAnU2V0dGluZ3MgUmVzZXQgUGF5bWVudCBNZXRob2QnKTtcclxuXHRcdFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdTZXR0aW5ncyBSZXNldCBQYXltZW50IE1ldGhvZCBDbGljayddKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==
