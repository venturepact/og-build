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
var index_1 = require('./subscription/index');
var forms_1 = require('@angular/forms');
var index_2 = require('./invoice/index');
var index_3 = require('./payment/index');
var index_4 = require('./../../../shared/services/index');
var paymentModal_component_1 = require('./../../../shared/paymentModal/paymentModal.component');
var router_1 = require('@angular/router');
var currentPlan_1 = require('./../../../shared/models/currentPlan');
var MembershipComponent = (function () {
    function MembershipComponent(fb, _membershipService, _cookieService) {
        this.fb = fb;
        this._membershipService = _membershipService;
        this._cookieService = _cookieService;
        this.monthsArray = [];
        this.yearsArray = [];
        this.currentYear = '';
        this.error = false;
        this.errorMessage = '';
        this.CardDetail = new currentPlan_1.Card(null);
        this.card_status = '';
        this.userRole = 'MANAGER';
        this.cardType = '';
        this.cardValid = false;
        this.isChangePlan = false;
        this.changeToPlan = '';
        this.userRole = localStorage.getItem('role');
    }
    ;
    MembershipComponent.prototype.ngOnInit = function () {
        this.monthsArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.yearsArray = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'];
        this.currentYear = (new Date).getFullYear();
        this.setupPaymentForm = this.fb.group({
            cardNumber1: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.pattern('^[0-9]*$')])],
            cardNumber2: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.pattern('^[0-9]*$')])],
            cardNumber3: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.pattern('^[0-9]*$')])],
            cardNumber4: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.pattern('^[0-9]*$')])],
            nameOnCard: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            cvv: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern('^[0-9]*$')])],
            cardMonth: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(1), forms_1.Validators.pattern('^[0-9]*$')])],
            cardYear: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.pattern('^[0-9]*$')])]
        });
        jQuery('.modal').on('hidden.bs.modal', function () {
            this.errorMessage = '';
            this.error = 'false';
        });
        jQuery.material.init();
        this.userRole = localStorage.getItem('role');
    };
    MembershipComponent.prototype.onChangeCardNumber = function (cardNum) {
        var self = this;
        jQuery('#cardNumber1').validateCreditCard(function (result) {
            if (result.card_type != null) {
                self.cardType = result.card_type.name;
                if (result.length_valid && result.luhn_valid && result.valid)
                    self.cardValid = true;
            }
        });
        var pattern = /[a-z\s',\."/{}()[\]]/gi;
        var stringnumber = cardNum.value.replace(pattern, '');
        cardNum.value = stringnumber;
        if (cardNum.value.length === 4) {
            jQuery(cardNum).next('input').focus();
        }
    };
    MembershipComponent.prototype.setupPayment = function () {
        var _this = this;
        var cardData = {
            'cardNumber': this.setupPaymentForm.value.cardNumber1
                + this.setupPaymentForm.value.cardNumber2
                + this.setupPaymentForm.value.cardNumber3
                + this.setupPaymentForm.value.cardNumber4,
            'cvv': this.setupPaymentForm.value.cvv,
            'cardMonth': this.setupPaymentForm.value.cardMonth,
            'cardYear': this.setupPaymentForm.value.cardYear,
        };
        this.error = false;
        this.errorMessage = '';
        var self = this;
        jQuery('#btnSetupCard span').text('Please wait...').attr('disabled', true);
        var setupPayment = self._membershipService.resetPayment(cardData)
            .subscribe(function (success) {
            self.cardType = '';
            self.cardValid = false;
            _this.CardDetail = new currentPlan_1.Card(success.card);
            _this.card_status = success.customer.card_status;
            _this.error = false;
            _this.errorMessage = '';
            if (_this.isChangePlan && _this.changeToPlan != '' && _this.changeToPlan.billing.status) {
                var changeSubscription_1 = self._membershipService.updateSubscription(_this.changeToPlan)
                    .subscribe(function (success) {
                    _this.subsComp.getPlanSubscription();
                    _this.invoice.getInvoices();
                    _this.error = false;
                    _this.errorMessage = '';
                    var storage = JSON.parse(_this._cookieService.readCookie('storage'));
                    storage.company.billing.chargebee_plan_id = _this.changeToPlan.billing.plan_id;
                    _this._cookieService.eraseCookie('storage');
                    _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                    jQuery('#cc-modal').modal('hide');
                    jQuery('#btnSetupCard span').text('Submit').attr('disabled', false);
                    jQuery('#btnSetupCard').html('Submit').attr('disabled', false);
                    jQuery('#cc-modal input').val('');
                    jQuery('#btnSetupCard span').text('Make Payment').attr('disabled', false);
                    _this.kmqAmountDue = 0;
                    _this.kmqAmountPaid = 0;
                    _this.kmqCreditsApplied = 0;
                    _this.kmqTotalAmount = 0;
                    if (success.invoice && success.invoice.amount_paid !== 0) {
                        _this.kmqAmountPaid = Math.round(success.invoice.amount_paid / 100);
                    }
                    if (success.invoice && success.invoice.credits_applied !== 0) {
                        _this.kmqCreditsApplied = Math.round(success.invoice.credits_applied / 100);
                    }
                    if (success.invoice && success.invoice.amount_due !== 0) {
                        _this.kmqAmountDue = Math.round(success.invoice.amount_due / 100);
                    }
                    if (success.invoice && success.invoice.sub_total !== 0) {
                        _this.kmqTotalAmount = Math.round(success.invoice.sub_total / 100);
                    }
                    var kmqData = {
                        'Total Amount': _this.kmqTotalAmount,
                        'Amount Paid': _this.kmqAmountPaid,
                        'Credits Applied': _this.kmqCreditsApplied,
                        'Amount Due': _this.kmqAmountDue,
                        'Plan': success.invoice.line_items[0].description
                    };
                    if (window.location.href.indexOf('outgrow.co') >= 0) {
                        fbq('track', 'Purchase', { value: _this.kmqTotalAmount.toString(), currency: 'USD' });
                    }
                    ga('markettingteam.send', 'event', 'Settings', 'Submit', 'SettingsPlanChanged');
                    _kmq.push(['record', 'Settings Plan Changed', kmqData]);
                    window.toastNotification('Payment successfully done and plan is changed.');
                    _this.isChangePlan = false;
                    _this.changeToPlan = '';
                }, function (error) {
                    _this.error = true;
                    _this.errorMessage = 'Your card was declined.';
                    jQuery('#btnSetupCard span').text('Make Payment').attr('disabled', false);
                    changeSubscription_1.unsubscribe();
                });
            }
            if (_this.isChangePlan && _this.changeToPlan != '' && !_this.changeToPlan.billing.status) {
                jQuery('#btnSetupCard span').text('Please Wait...').attr('disabled', true);
                _this.reactivate();
            }
            else {
                jQuery('#cc-modal').modal('hide');
                jQuery('#btnSetupCard span').text('Submit').attr('disabled', false);
                jQuery('#cc-modal input').val('');
                window.toastNotification('Payment successfully added');
            }
            _this.errorMessage = '';
            if (window.location.href.indexOf('outgrow.co') >= 0) {
                fbq('track', 'AddPaymentInfo');
            }
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'Settings Add Payment Method');
            _kmq.push(['record', 'Settings Payment Method Added']);
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.error.err_message;
            if (_this.isChangePlan)
                jQuery('#btnSetupCard span').text('Make Payment').attr('disabled', false);
            else
                jQuery('#btnSetupCard span').text('Submit').attr('disabled', false);
            setupPayment.unsubscribe();
        });
    };
    MembershipComponent.prototype.reactivate = function () {
        var _this = this;
        var reactivateMembership = this._membershipService.activateNow()
            .subscribe(function (success) {
            window.toastNotification('You have Successfully Reactivated ');
            var membership = JSON.parse(_this._cookieService.readCookie('filepicker_token_json'));
            membership[1].value = success.subscription.status;
            _this._cookieService.eraseCookie('filepicker_token_json');
            _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(membership), 3);
            var storage = JSON.parse(_this._cookieService.readCookie('storage'));
            storage.company.billing.chargebee_plan_id = success.subscription.plan_id;
            _this._cookieService.eraseCookie('storage');
            _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
            window.location.reload();
        }, function (error) {
            _this.error = true;
            _this.errorMessage = 'Subscription cannot be re-activated as your card is decline';
            jQuery('#btnSetupCard span').text('Make Payment').attr('disabled', false);
            reactivateMembership.unsubscribe();
        });
    };
    MembershipComponent.prototype.closeLayover = function () {
        setTimeout(function () {
            jQuery('.float-changes-updated').fadeIn()
                .animate({ bottom: -50 }, 800, function () { });
        }, 4000);
    };
    __decorate([
        core_1.ViewChild(index_1.SubscriptionComponent), 
        __metadata('design:type', index_1.SubscriptionComponent)
    ], MembershipComponent.prototype, "subsComp", void 0);
    __decorate([
        core_1.ViewChild(index_2.InvoiceComponent), 
        __metadata('design:type', index_2.InvoiceComponent)
    ], MembershipComponent.prototype, "invoice", void 0);
    MembershipComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-membership',
            templateUrl: 'membership.component.html',
            styleUrls: ['membership.component.css'],
            providers: [index_4.MembershipService],
            directives: [router_1.ROUTER_DIRECTIVES, index_1.SubscriptionComponent, index_2.InvoiceComponent, index_3.PaymentComponent, forms_1.REACTIVE_FORM_DIRECTIVES, paymentModal_component_1.PaymentModalComponent]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, index_4.MembershipService, index_4.CookieService])
    ], MembershipComponent);
    return MembershipComponent;
}());
exports.MembershipComponent = MembershipComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytTZXR0aW5ncy9tZW1iZXJzaGlwL21lbWJlcnNoaXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0Qsc0JBQXNDLHNCQUFzQixDQUFDLENBQUE7QUFDN0Qsc0JBQTRFLGdCQUFnQixDQUFDLENBQUE7QUFDN0Ysc0JBQWlDLGlCQUFpQixDQUFDLENBQUE7QUFDbkQsc0JBQWlDLGlCQUFpQixDQUFDLENBQUE7QUFDbkQsc0JBQStDLGtDQUFrQyxDQUFDLENBQUE7QUFDbEYsdUNBQW9DLHVEQUF1RCxDQUFDLENBQUE7QUFDNUYsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsNEJBQW1CLHNDQUFzQyxDQUFDLENBQUE7QUFrQjFEO0lBc0JDLDZCQUNTLEVBQWdCLEVBQ2hCLGtCQUFzQyxFQUN0QyxjQUE0QjtRQUY1QixPQUFFLEdBQUYsRUFBRSxDQUFjO1FBQ2hCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWM7UUF0QnJDLGdCQUFXLEdBQU8sRUFBRSxDQUFDO1FBQ3JCLGVBQVUsR0FBTyxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBTyxFQUFFLENBQUM7UUFFckIsVUFBSyxHQUFXLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQVMsSUFBSSxrQkFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBQ3hCLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFDN0IsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVcsS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQVcsS0FBSyxDQUFDO1FBQzdCLGlCQUFZLEdBQU8sRUFBRSxDQUFDO1FBV3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FB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LEVBQUUsQ0FBQztRQUNwQyxDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFFRCwwQ0FBWSxHQUFaO1FBQ0MsVUFBVSxDQUFDO1lBQ1YsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsTUFBTSxFQUFFO2lCQUN2QyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxHQUFHLEVBQUUsY0FBWSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBdE9EO1FBQUMsZ0JBQVMsQ0FBQyw2QkFBcUIsQ0FBQzs7eURBQUE7SUFDakM7UUFBQyxnQkFBUyxDQUFDLHdCQUFnQixDQUFDOzt3REFBQTtJQVg3QjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxTQUFTLEVBQUcsQ0FBQyx5QkFBaUIsQ0FBQztZQUMvQixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBQyw2QkFBcUIsRUFBQyx3QkFBZ0IsRUFBQyx3QkFBZ0IsRUFBQyxnQ0FBd0IsRUFBQyw4Q0FBcUIsQ0FBQztTQUN0SSxDQUFDOzsyQkFBQTtJQTBPRiwwQkFBQztBQUFELENBeE9BLEFBd09DLElBQUE7QUF4T1ksMkJBQW1CLHNCQXdPL0IsQ0FBQSIsImZpbGUiOiJhcHAvc2l0ZS8rU2V0dGluZ3MvbWVtYmVyc2hpcC9tZW1iZXJzaGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc3Vic2NyaXB0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIgLFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEludm9pY2VDb21wb25lbnQgfSBmcm9tICcuL2ludm9pY2UvaW5kZXgnO1xyXG5pbXBvcnQgeyBQYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50L2luZGV4JztcclxuaW1wb3J0IHtNZW1iZXJzaGlwU2VydmljZSwgQ29va2llU2VydmljZX0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQge1BheW1lbnRNb2RhbENvbXBvbmVudH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvcGF5bWVudE1vZGFsL3BheW1lbnRNb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSAnLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2N1cnJlbnRQbGFuJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5IDogYW55O1xyXG5kZWNsYXJlIHZhciBtb21lbnQ6YW55O1xyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5kZWNsYXJlIHZhciBmYnE6IGFueTtcclxuLy8gZGVjbGFyZSB2YXIgTGVhZER5bm86IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdvZy1tZW1iZXJzaGlwJyxcclxuXHR0ZW1wbGF0ZVVybDogJ21lbWJlcnNoaXAuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWydtZW1iZXJzaGlwLmNvbXBvbmVudC5jc3MnXSxcclxuXHRwcm92aWRlcnMgOiBbTWVtYmVyc2hpcFNlcnZpY2VdLFxyXG5cdGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUyxTdWJzY3JpcHRpb25Db21wb25lbnQsSW52b2ljZUNvbXBvbmVudCxQYXltZW50Q29tcG9uZW50LFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyxQYXltZW50TW9kYWxDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVtYmVyc2hpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRAVmlld0NoaWxkKFN1YnNjcmlwdGlvbkNvbXBvbmVudCkgc3Vic0NvbXA6U3Vic2NyaXB0aW9uQ29tcG9uZW50O1xyXG5cdEBWaWV3Q2hpbGQoSW52b2ljZUNvbXBvbmVudCkgaW52b2ljZTpJbnZvaWNlQ29tcG9uZW50O1xyXG5cdG1vbnRoc0FycmF5OmFueSA9IFtdO1xyXG5cdHllYXJzQXJyYXk6YW55ID0gW107XHJcblx0Y3VycmVudFllYXI6YW55ID0gJyc7XHJcblx0c2V0dXBQYXltZW50Rm9ybTpGb3JtR3JvdXA7XHJcblx0ZXJyb3I6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XHJcblx0Q2FyZERldGFpbDogQ2FyZCA9IG5ldyBDYXJkKG51bGwpO1xyXG5cdGNhcmRfc3RhdHVzOnN0cmluZyA9ICcnO1xyXG5cdHVzZXJSb2xlOiBzdHJpbmcgPSAnTUFOQUdFUic7XHJcblx0Y2FyZFR5cGU6IHN0cmluZyA9ICcnO1xyXG5cdGNhcmRWYWxpZDpib29sZWFuID0gZmFsc2U7XHJcblx0aXNDaGFuZ2VQbGFuOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRjaGFuZ2VUb1BsYW46YW55ID0gJyc7XHJcblxyXG5cdGttcUFtb3VudER1ZTogYW55O1xyXG5cdGttcUFtb3VudFBhaWQ6YW55O1xyXG5cdGttcUNyZWRpdHNBcHBsaWVkOiBhbnk7XHJcblx0a21xVG90YWxBbW91bnQ6YW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZmIgOiBGb3JtQnVpbGRlcixcclxuXHRcdHByaXZhdGUgX21lbWJlcnNoaXBTZXJ2aWNlIDogTWVtYmVyc2hpcFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9jb29raWVTZXJ2aWNlOkNvb2tpZVNlcnZpY2Upe1xyXG5cdFx0dGhpcy51c2VyUm9sZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb2xlJyk7XHJcblx0fTtcclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLm1vbnRoc0FycmF5ID0gWyAnMDEnLCAnMDInLCAnMDMnLCcwNCcsJzA1JywgJzA2JywgJzA3JywnMDgnLCcwOScsICcxMCcsICcxMScsJzEyJyBdO1xyXG5cdFx0dGhpcy55ZWFyc0FycmF5ID0gWyAnMjAxNicsICcyMDE3JywgJzIwMTgnLCcyMDE5JywnMjAyMCcsICcyMDIxJywgJzIwMjInLCcyMDIzJywnMjAyNCcsICcyMDI1JywgJzIwMjYnLCcyMDI3J107XHJcblx0XHQvL3RoaXMuY3VycmVudE1vbnRoID0gIChuZXcgRGF0ZSkuZ2V0TW9udGgoKSsxO1xyXG5cdFx0dGhpcy5jdXJyZW50WWVhciA9ICAobmV3IERhdGUpLmdldEZ1bGxZZWFyKCk7XHJcblx0XHQvL3RoaXMuZ2V0UGF5bWVudERldGFpbHMoKTtcclxuXHRcdHRoaXMuc2V0dXBQYXltZW50Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG5cdFx0XHRjYXJkTnVtYmVyMSA6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLFZhbGlkYXRvcnMucGF0dGVybignXlswLTldKiQnKV0pXSxcclxuXHRcdFx0Y2FyZE51bWJlcjIgOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSxWYWxpZGF0b3JzLnBhdHRlcm4oJ15bMC05XSokJyldKV0sXHJcblx0XHRcdGNhcmROdW1iZXIzIDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoNCksVmFsaWRhdG9ycy5wYXR0ZXJuKCdeWzAtOV0qJCcpXSldLFxyXG5cdFx0XHRjYXJkTnVtYmVyNCA6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpLFZhbGlkYXRvcnMucGF0dGVybignXlswLTldKiQnKV0pXSxcclxuXHRcdFx0bmFtZU9uQ2FyZCA6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXSxcclxuXHRcdFx0Y3Z2IDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksVmFsaWRhdG9ycy5wYXR0ZXJuKCdeWzAtOV0qJCcpIF0pXSxcclxuXHRcdFx0Y2FyZE1vbnRoOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgxKSxWYWxpZGF0b3JzLnBhdHRlcm4oJ15bMC05XSokJyldKV0sXHJcblx0XHRcdGNhcmRZZWFyOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSxWYWxpZGF0b3JzLnBhdHRlcm4oJ15bMC05XSokJyldKV1cclxuXHRcdH0pO1xyXG5cdFx0alF1ZXJ5KCcubW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oKXtcclxuXHRcdCAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdCAgdGhpcy5lcnJvciA9ICdmYWxzZSc7XHJcblx0XHR9KTtcclxuXHRcdGpRdWVyeS5tYXRlcmlhbC5pbml0KCk7XHJcblx0XHR0aGlzLnVzZXJSb2xlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbGUnKTtcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlQ2FyZE51bWJlcihjYXJkTnVtOmFueSl7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0XHRqUXVlcnkoJyNjYXJkTnVtYmVyMScpLnZhbGlkYXRlQ3JlZGl0Q2FyZChmdW5jdGlvbihyZXN1bHQ6YW55KSB7XHJcblx0XHRcdGlmKHJlc3VsdC5jYXJkX3R5cGUgIT0gbnVsbCl7XHJcblx0XHRcdFx0c2VsZi5jYXJkVHlwZSA9IHJlc3VsdC5jYXJkX3R5cGUubmFtZTtcclxuXHRcdFx0XHRpZihyZXN1bHQubGVuZ3RoX3ZhbGlkICYmIHJlc3VsdC5sdWhuX3ZhbGlkICYmIHJlc3VsdC52YWxpZClcclxuXHRcdFx0XHRcdHNlbGYuY2FyZFZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR2YXIgcGF0dGVybiA9IC9bYS16XFxzJyxcXC5cIi97fSgpW1xcXV0vZ2k7XHJcblx0XHR2YXIgc3RyaW5nbnVtYmVyID0gY2FyZE51bS52YWx1ZS5yZXBsYWNlKHBhdHRlcm4sJycpO1xyXG5cdFx0Y2FyZE51bS52YWx1ZSA9IHN0cmluZ251bWJlcjtcclxuXHRcdGlmKGNhcmROdW0udmFsdWUubGVuZ3RoID09PSA0KXtcclxuXHRcdFx0alF1ZXJ5KGNhcmROdW0pLm5leHQoJ2lucHV0JykuZm9jdXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldHVwUGF5bWVudCgpe1xyXG5cdFx0bGV0IGNhcmREYXRhID0ge1xyXG5cdFx0XHQnY2FyZE51bWJlcic6dGhpcy5zZXR1cFBheW1lbnRGb3JtLnZhbHVlLmNhcmROdW1iZXIxXHJcblx0XHRcdFx0XHRcdCsgdGhpcy5zZXR1cFBheW1lbnRGb3JtLnZhbHVlLmNhcmROdW1iZXIyXHJcblx0XHRcdFx0XHRcdCsgdGhpcy5zZXR1cFBheW1lbnRGb3JtLnZhbHVlLmNhcmROdW1iZXIzXHJcblx0XHRcdFx0XHRcdCsgdGhpcy5zZXR1cFBheW1lbnRGb3JtLnZhbHVlLmNhcmROdW1iZXI0LFxyXG5cdFx0XHQnY3Z2Jzp0aGlzLnNldHVwUGF5bWVudEZvcm0udmFsdWUuY3Z2LFxyXG5cdFx0XHQnY2FyZE1vbnRoJzp0aGlzLnNldHVwUGF5bWVudEZvcm0udmFsdWUuY2FyZE1vbnRoLFxyXG5cdFx0XHQnY2FyZFllYXInOnRoaXMuc2V0dXBQYXltZW50Rm9ybS52YWx1ZS5jYXJkWWVhcixcclxuXHRcdH07XHJcblx0XHR0aGlzLmVycm9yID0gZmFsc2U7XHJcblx0XHR0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0alF1ZXJ5KCcjYnRuU2V0dXBDYXJkIHNwYW4nKS50ZXh0KCdQbGVhc2Ugd2FpdC4uLicpLmF0dHIoJ2Rpc2FibGVkJyx0cnVlKTtcclxuXHRcdGxldCBzZXR1cFBheW1lbnQgPSBzZWxmLl9tZW1iZXJzaGlwU2VydmljZS5yZXNldFBheW1lbnQoY2FyZERhdGEpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0c2VsZi5jYXJkVHlwZSA9ICcnO1xyXG5cdFx0XHRcdFx0c2VsZi5jYXJkVmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuQ2FyZERldGFpbCA9IG5ldyBDYXJkKHN1Y2Nlc3MuY2FyZCk7XHJcblx0XHRcdFx0XHR0aGlzLmNhcmRfc3RhdHVzID0gc3VjY2Vzcy5jdXN0b21lci5jYXJkX3N0YXR1cztcclxuXHRcdFx0XHRcdHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblx0XHRcdFx0XHRpZih0aGlzLmlzQ2hhbmdlUGxhbiAmJiB0aGlzLmNoYW5nZVRvUGxhbiAhPSAnJyAmJiB0aGlzLmNoYW5nZVRvUGxhbi5iaWxsaW5nLnN0YXR1cyl7XHJcblx0XHRcdFx0XHRcdGxldCBjaGFuZ2VTdWJzY3JpcHRpb24gPSBzZWxmLl9tZW1iZXJzaGlwU2VydmljZS51cGRhdGVTdWJzY3JpcHRpb24odGhpcy5jaGFuZ2VUb1BsYW4pXHJcblx0XHRcdFx0XHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHRcdFx0XHRcdChzdWNjZXNzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zdWJzQ29tcC5nZXRQbGFuU3Vic2NyaXB0aW9uKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuaW52b2ljZS5nZXRJbnZvaWNlcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZSh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0b3JhZ2UuY29tcGFueS5iaWxsaW5nLmNoYXJnZWJlZV9wbGFuX2lkID0gdGhpcy5jaGFuZ2VUb1BsYW4uYmlsbGluZy5wbGFuX2lkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl9jb29raWVTZXJ2aWNlLmVyYXNlQ29va2llKCdzdG9yYWdlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdzdG9yYWdlJyxKU09OLnN0cmluZ2lmeShzdG9yYWdlKSwzKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeSgnI2NjLW1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCcjYnRuU2V0dXBDYXJkIHNwYW4nKS50ZXh0KCdTdWJtaXQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoJyNidG5TZXR1cENhcmQnKS5odG1sKCdTdWJtaXQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoJyNjYy1tb2RhbCBpbnB1dCcpLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeSgnI2J0blNldHVwQ2FyZCBzcGFuJykudGV4dCgnTWFrZSBQYXltZW50JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qPT09PSBBbmFseXRpY3MgVHJhY2tpbmcgYW5kIFBheW1lbnQgVHJhY2tpbmcgY29kZSBoZXJlID09PT0qL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmttcUFtb3VudER1ZSA9IDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMua21xQW1vdW50UGFpZCA9IDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMua21xQ3JlZGl0c0FwcGxpZWQgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmttcVRvdGFsQW1vdW50ID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYoc3VjY2Vzcy5pbnZvaWNlICYmIHN1Y2Nlc3MuaW52b2ljZS5hbW91bnRfcGFpZCAhPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5rbXFBbW91bnRQYWlkID0gTWF0aC5yb3VuZChzdWNjZXNzLmludm9pY2UuYW1vdW50X3BhaWQvMTAwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihzdWNjZXNzLmludm9pY2UgJiYgc3VjY2Vzcy5pbnZvaWNlLmNyZWRpdHNfYXBwbGllZCAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMua21xQ3JlZGl0c0FwcGxpZWQgPSBNYXRoLnJvdW5kKHN1Y2Nlc3MuaW52b2ljZS5jcmVkaXRzX2FwcGxpZWQvMTAwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihzdWNjZXNzLmludm9pY2UgJiYgc3VjY2Vzcy5pbnZvaWNlLmFtb3VudF9kdWUgIT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmttcUFtb3VudER1ZSA9IE1hdGgucm91bmQoc3VjY2Vzcy5pbnZvaWNlLmFtb3VudF9kdWUvMTAwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihzdWNjZXNzLmludm9pY2UgJiYgc3VjY2Vzcy5pbnZvaWNlLnN1Yl90b3RhbCAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMua21xVG90YWxBbW91bnQgPSBNYXRoLnJvdW5kKHN1Y2Nlc3MuaW52b2ljZS5zdWJfdG90YWwvMTAwKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQga21xRGF0YSA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnVG90YWwgQW1vdW50Jzp0aGlzLmttcVRvdGFsQW1vdW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdBbW91bnQgUGFpZCc6IHRoaXMua21xQW1vdW50UGFpZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnQ3JlZGl0cyBBcHBsaWVkJzogdGhpcy5rbXFDcmVkaXRzQXBwbGllZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnQW1vdW50IER1ZSc6dGhpcy5rbXFBbW91bnREdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0J1BsYW4nOnN1Y2Nlc3MuaW52b2ljZS5saW5lX2l0ZW1zWzBdLmRlc2NyaXB0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ291dGdyb3cuY28nKSA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmJxKCd0cmFjaycsICdQdXJjaGFzZScsIHt2YWx1ZTogdGhpcy5rbXFUb3RhbEFtb3VudC50b1N0cmluZygpLCBjdXJyZW5jeTogJ1VTRCd9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdTdWJtaXQnLCAnU2V0dGluZ3NQbGFuQ2hhbmdlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgUGxhbiBDaGFuZ2VkJywga21xRGF0YV0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0LypsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKHVybC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJvdXRncm93LmNvXCIpID49IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgbGVhZER5bm9EYXRhID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHVyY2hhc2VfY29kZTogJ1RpbmtlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwdXJjaGFzZV9hbW91bnQ6IDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmKHN1Y2Nlc3MuaW52b2ljZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGVhZER5bm9EYXRhLnB1cmNoYXNlX2NvZGUgPSBzdWNjZXNzLmludm9pY2UuaWQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsZWFkRHlub0RhdGEucHVyY2hhc2VfYW1vdW50ID0gTWF0aC5yb3VuZChzdWNjZXNzLmludm9pY2Uuc3ViX3RvdGFsLzEwMCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExlYWREeW5vLnJlY29yZFB1cmNoYXNlKHN1Y2Nlc3MuY3VzdG9tZXIuZW1haWwsIGxlYWREeW5vRGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0qL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKj09PT09PT09PT09PT09PT09PT09PSovXHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignUGF5bWVudCBzdWNjZXNzZnVsbHkgZG9uZSBhbmQgcGxhbiBpcyBjaGFuZ2VkLicpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmlzQ2hhbmdlUGxhbiA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNoYW5nZVRvUGxhbiA9ICcnO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdChlcnJvcjphbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvciA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gJ1lvdXIgY2FyZCB3YXMgZGVjbGluZWQuJztcclxuXHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCcjYnRuU2V0dXBDYXJkIHNwYW4nKS50ZXh0KCdNYWtlIFBheW1lbnQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvL2pRdWVyeSgnI2J0blNldHVwQ2FyZCcpLmh0bWwoJ01ha2UgUGF5bWVudCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZih0aGlzLmlzQ2hhbmdlUGxhbiAmJiB0aGlzLmNoYW5nZVRvUGxhbiE9JycgJiYgIXRoaXMuY2hhbmdlVG9QbGFuLmJpbGxpbmcuc3RhdHVzKXtcclxuXHRcdFx0XHRcdFx0alF1ZXJ5KCcjYnRuU2V0dXBDYXJkIHNwYW4nKS50ZXh0KCdQbGVhc2UgV2FpdC4uLicpLmF0dHIoJ2Rpc2FibGVkJyx0cnVlKTtcclxuXHRcdFx0XHRcdFx0Ly9qUXVlcnkoJyNidG5TZXR1cENhcmQgc3BhbicpLnRleHQoJ1BsZWFzZSBXYWl0Li4uJykuYXR0cignZGlzYWJsZWQnLHRydWUpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlYWN0aXZhdGUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdGpRdWVyeSgnI2NjLW1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0alF1ZXJ5KCcjYnRuU2V0dXBDYXJkIHNwYW4nKS50ZXh0KCdTdWJtaXQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHQvL2pRdWVyeSgnI2J0blNldHVwQ2FyZCcpLmh0bWwoJ1N1Ym1pdCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcblx0XHRcdFx0XHRcdGpRdWVyeSgnI2NjLW1vZGFsIGlucHV0JykudmFsKCcnKTtcclxuXHRcdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdQYXltZW50IHN1Y2Nlc3NmdWxseSBhZGRlZCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdFx0XHRcdC8qLS0tLSBUcmFja2luZyBjb2RlIGdvZXMgaGVyZSAtLS0tKi9cclxuXHRcdFx0XHRcdGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ291dGdyb3cuY28nKSA+PSAwKSB7IGZicSgndHJhY2snLCAnQWRkUGF5bWVudEluZm8nKTsgfVxyXG5cdFx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnU3VibWl0JywgJ1NldHRpbmdzIEFkZCBQYXltZW50IE1ldGhvZCcpO1xyXG5cdFx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ1NldHRpbmdzIFBheW1lbnQgTWV0aG9kIEFkZGVkJ10pO1xyXG5cdFx0XHRcdFx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0KGVycm9yOmFueSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvciA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLmVycm9yTWVzc2FnZSA9IGVycm9yLmVycm9yLmVycl9tZXNzYWdlO1xyXG5cdFx0XHRcdFx0aWYodGhpcy5pc0NoYW5nZVBsYW4pXHJcblx0XHRcdFx0XHRcdGpRdWVyeSgnI2J0blNldHVwQ2FyZCBzcGFuJykudGV4dCgnTWFrZSBQYXltZW50JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0Ly9qUXVlcnkoJyNidG5TZXR1cENhcmQnKS5odG1sKCdNYWtlIFBheW1lbnQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRqUXVlcnkoJyNidG5TZXR1cENhcmQgc3BhbicpLnRleHQoJ1N1Ym1pdCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcblx0XHRcdFx0XHRcdC8valF1ZXJ5KCcjYnRuU2V0dXBDYXJkJykuaHRtbCgnU3VibWl0JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHRcdFx0XHRcdHNldHVwUGF5bWVudC51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblxyXG5cdHJlYWN0aXZhdGUoKXtcclxuXHRcdGxldCByZWFjdGl2YXRlTWVtYmVyc2hpcCA9IHRoaXMuX21lbWJlcnNoaXBTZXJ2aWNlLmFjdGl2YXRlTm93KClcclxuXHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdChzdWNjZXNzOiBhbnkpID0+IHtcclxuXHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ1lvdSBoYXZlIFN1Y2Nlc3NmdWxseSBSZWFjdGl2YXRlZCAnKTtcclxuXHRcdFx0XHQvL3RoaXMuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5jb21wYW55QWNjZXNzKSwgMyk7XHJcblx0XHRcdFx0bGV0IG1lbWJlcnNoaXAgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnZmlsZXBpY2tlcl90b2tlbl9qc29uJykpO1xyXG5cdFx0XHRcdG1lbWJlcnNoaXBbMV0udmFsdWUgPSBzdWNjZXNzLnN1YnNjcmlwdGlvbi5zdGF0dXM7XHJcblx0XHRcdFx0dGhpcy5fY29va2llU2VydmljZS5lcmFzZUNvb2tpZSgnZmlsZXBpY2tlcl90b2tlbl9qc29uJyk7XHJcblx0XHRcdFx0dGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ2ZpbGVwaWNrZXJfdG9rZW5fanNvbicsSlNPTi5zdHJpbmdpZnkobWVtYmVyc2hpcCksMyk7XHJcblx0XHRcdFx0bGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuXHRcdFx0XHRzdG9yYWdlLmNvbXBhbnkuYmlsbGluZy5jaGFyZ2ViZWVfcGxhbl9pZCA9IHN1Y2Nlc3Muc3Vic2NyaXB0aW9uLnBsYW5faWQ7XHJcblx0XHRcdFx0dGhpcy5fY29va2llU2VydmljZS5lcmFzZUNvb2tpZSgnc3RvcmFnZScpO1xyXG5cdFx0XHRcdHRoaXMuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdzdG9yYWdlJyxKU09OLnN0cmluZ2lmeShzdG9yYWdlKSwzKTtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdChlcnJvcjphbnkpID0+IHtcclxuXHRcdFx0XHR0aGlzLmVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmVycm9yTWVzc2FnZSA9ICdTdWJzY3JpcHRpb24gY2Fubm90IGJlIHJlLWFjdGl2YXRlZCBhcyB5b3VyIGNhcmQgaXMgZGVjbGluZSc7XHJcblx0XHRcdFx0alF1ZXJ5KCcjYnRuU2V0dXBDYXJkIHNwYW4nKS50ZXh0KCdNYWtlIFBheW1lbnQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdHJlYWN0aXZhdGVNZW1iZXJzaGlwLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRjbG9zZUxheW92ZXIoKSB7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRqUXVlcnkoJy5mbG9hdC1jaGFuZ2VzLXVwZGF0ZWQnKS5mYWRlSW4oKVxyXG5cdFx0XHRcdC5hbmltYXRlKHtib3R0b206LTUwfSwgODAwLCBmdW5jdGlvbigpIHt9KTtcclxuXHRcdFx0fSwgNDAwMCk7XHJcblx0fVxyXG59XHJcbiJdfQ==
