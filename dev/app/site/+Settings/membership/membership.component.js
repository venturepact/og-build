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
                    fbq('track', 'Purchase', { value: _this.kmqTotalAmount.toString(), currency: 'USD' });
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
            fbq('track', 'AddPaymentInfo');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytTZXR0aW5ncy9tZW1iZXJzaGlwL21lbWJlcnNoaXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0Qsc0JBQXNDLHNCQUFzQixDQUFDLENBQUE7QUFDN0Qsc0JBQTRFLGdCQUFnQixDQUFDLENBQUE7QUFDN0Ysc0JBQWlDLGlCQUFpQixDQUFDLENBQUE7QUFDbkQsc0JBQWlDLGlCQUFpQixDQUFDLENBQUE7QUFDbkQsc0JBQStDLGtDQUFrQyxDQUFDLENBQUE7QUFDbEYsdUNBQW9DLHVEQUF1RCxDQUFDLENBQUE7QUFDNUYsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsNEJBQW1CLHNDQUFzQyxDQUFDLENBQUE7QUFrQjFEO0lBc0JDLDZCQUNTLEVBQWdCLEVBQ2hCLGtCQUFzQyxFQUN0QyxjQUE0QjtRQUY1QixPQUFFLEdBQUYsRUFBRSxDQUFjO1FBQ2hCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWM7UUF0QnJDLGdCQUFXLEdBQU8sRUFBRSxDQUFDO1FBQ3JCLGVBQVUsR0FBTyxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBTyxFQUFFLENBQUM7UUFFckIsVUFBSyxHQUFXLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQVMsSUFBSSxrQkFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBQ3hCLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFDN0IsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixjQUFTLEdBQVcsS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQVcsS0FBSyxDQUFDO1FBQzdCLGlCQUFZLEdBQU8sRUFBRSxDQUFDO1FBV3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FB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QUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFwT0Q7UUFBQyxnQkFBUyxDQUFDLDZCQUFxQixDQUFDOzt5REFBQTtJQUNqQztRQUFDLGdCQUFTLENBQUMsd0JBQWdCLENBQUM7O3dEQUFBO0lBWDdCO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFNBQVMsRUFBRyxDQUFDLHlCQUFpQixDQUFDO1lBQy9CLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFDLDZCQUFxQixFQUFDLHdCQUFnQixFQUFDLHdCQUFnQixFQUFDLGdDQUF3QixFQUFDLDhDQUFxQixDQUFDO1NBQ3RJLENBQUM7OzJCQUFBO0lBd09GLDBCQUFDO0FBQUQsQ0F0T0EsQUFzT0MsSUFBQTtBQXRPWSwyQkFBbUIsc0JBc08vQixDQUFBIiwiZmlsZSI6ImFwcC9zaXRlLytTZXR0aW5ncy9tZW1iZXJzaGlwL21lbWJlcnNoaXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJzY3JpcHRpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsRm9ybUdyb3VwLCBGb3JtQnVpbGRlciAsVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSW52b2ljZUNvbXBvbmVudCB9IGZyb20gJy4vaW52b2ljZS9pbmRleCc7XHJcbmltcG9ydCB7IFBheW1lbnRDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQvaW5kZXgnO1xyXG5pbXBvcnQge01lbWJlcnNoaXBTZXJ2aWNlLCBDb29raWVTZXJ2aWNlfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7UGF5bWVudE1vZGFsQ29tcG9uZW50fSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC9wYXltZW50TW9kYWwvcGF5bWVudE1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtDYXJkfSBmcm9tICcuLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvY3VycmVudFBsYW4nO1xyXG5kZWNsYXJlIHZhciBqUXVlcnkgOiBhbnk7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDphbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6IGFueTtcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGZicTogYW55O1xyXG4vLyBkZWNsYXJlIHZhciBMZWFkRHlubzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ29nLW1lbWJlcnNoaXAnLFxyXG5cdHRlbXBsYXRlVXJsOiAnbWVtYmVyc2hpcC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJ21lbWJlcnNoaXAuY29tcG9uZW50LmNzcyddLFxyXG5cdHByb3ZpZGVycyA6IFtNZW1iZXJzaGlwU2VydmljZV0sXHJcblx0ZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLFN1YnNjcmlwdGlvbkNvbXBvbmVudCxJbnZvaWNlQ29tcG9uZW50LFBheW1lbnRDb21wb25lbnQsUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLFBheW1lbnRNb2RhbENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW1iZXJzaGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cdEBWaWV3Q2hpbGQoU3Vic2NyaXB0aW9uQ29tcG9uZW50KSBzdWJzQ29tcDpTdWJzY3JpcHRpb25Db21wb25lbnQ7XHJcblx0QFZpZXdDaGlsZChJbnZvaWNlQ29tcG9uZW50KSBpbnZvaWNlOkludm9pY2VDb21wb25lbnQ7XHJcblx0bW9udGhzQXJyYXk6YW55ID0gW107XHJcblx0eWVhcnNBcnJheTphbnkgPSBbXTtcclxuXHRjdXJyZW50WWVhcjphbnkgPSAnJztcclxuXHRzZXR1cFBheW1lbnRGb3JtOkZvcm1Hcm91cDtcclxuXHRlcnJvcjpib29sZWFuID0gZmFsc2U7XHJcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuXHRDYXJkRGV0YWlsOiBDYXJkID0gbmV3IENhcmQobnVsbCk7XHJcblx0Y2FyZF9zdGF0dXM6c3RyaW5nID0gJyc7XHJcblx0dXNlclJvbGU6IHN0cmluZyA9ICdNQU5BR0VSJztcclxuXHRjYXJkVHlwZTogc3RyaW5nID0gJyc7XHJcblx0Y2FyZFZhbGlkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRpc0NoYW5nZVBsYW46Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdGNoYW5nZVRvUGxhbjphbnkgPSAnJztcclxuXHJcblx0a21xQW1vdW50RHVlOiBhbnk7XHJcblx0a21xQW1vdW50UGFpZDphbnk7XHJcblx0a21xQ3JlZGl0c0FwcGxpZWQ6IGFueTtcclxuXHRrbXFUb3RhbEFtb3VudDphbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBmYiA6IEZvcm1CdWlsZGVyLFxyXG5cdFx0cHJpdmF0ZSBfbWVtYmVyc2hpcFNlcnZpY2UgOiBNZW1iZXJzaGlwU2VydmljZSxcclxuXHRcdHByaXZhdGUgX2Nvb2tpZVNlcnZpY2U6Q29va2llU2VydmljZSl7XHJcblx0XHR0aGlzLnVzZXJSb2xlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbGUnKTtcclxuXHR9O1xyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMubW9udGhzQXJyYXkgPSBbICcwMScsICcwMicsICcwMycsJzA0JywnMDUnLCAnMDYnLCAnMDcnLCcwOCcsJzA5JywgJzEwJywgJzExJywnMTInIF07XHJcblx0XHR0aGlzLnllYXJzQXJyYXkgPSBbICcyMDE2JywgJzIwMTcnLCAnMjAxOCcsJzIwMTknLCcyMDIwJywgJzIwMjEnLCAnMjAyMicsJzIwMjMnLCcyMDI0JywgJzIwMjUnLCAnMjAyNicsJzIwMjcnXTtcclxuXHRcdC8vdGhpcy5jdXJyZW50TW9udGggPSAgKG5ldyBEYXRlKS5nZXRNb250aCgpKzE7XHJcblx0XHR0aGlzLmN1cnJlbnRZZWFyID0gIChuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKTtcclxuXHRcdC8vdGhpcy5nZXRQYXltZW50RGV0YWlscygpO1xyXG5cdFx0dGhpcy5zZXR1cFBheW1lbnRGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcblx0XHRcdGNhcmROdW1iZXIxIDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoNCksVmFsaWRhdG9ycy5wYXR0ZXJuKCdeWzAtOV0qJCcpXSldLFxyXG5cdFx0XHRjYXJkTnVtYmVyMiA6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLFZhbGlkYXRvcnMucGF0dGVybignXlswLTldKiQnKV0pXSxcclxuXHRcdFx0Y2FyZE51bWJlcjMgOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSxWYWxpZGF0b3JzLnBhdHRlcm4oJ15bMC05XSokJyldKV0sXHJcblx0XHRcdGNhcmROdW1iZXI0IDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoMiksVmFsaWRhdG9ycy5wYXR0ZXJuKCdeWzAtOV0qJCcpXSldLFxyXG5cdFx0XHRuYW1lT25DYXJkIDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpXSldLFxyXG5cdFx0XHRjdnYgOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxWYWxpZGF0b3JzLnBhdHRlcm4oJ15bMC05XSokJykgXSldLFxyXG5cdFx0XHRjYXJkTW9udGg6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDEpLFZhbGlkYXRvcnMucGF0dGVybignXlswLTldKiQnKV0pXSxcclxuXHRcdFx0Y2FyZFllYXI6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLFZhbGlkYXRvcnMucGF0dGVybignXlswLTldKiQnKV0pXVxyXG5cdFx0fSk7XHJcblx0XHRqUXVlcnkoJy5tb2RhbCcpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbigpe1xyXG5cdFx0ICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cdFx0ICB0aGlzLmVycm9yID0gJ2ZhbHNlJztcclxuXHRcdH0pO1xyXG5cdFx0alF1ZXJ5Lm1hdGVyaWFsLmluaXQoKTtcclxuXHRcdHRoaXMudXNlclJvbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sZScpO1xyXG5cdH1cclxuXHJcblx0b25DaGFuZ2VDYXJkTnVtYmVyKGNhcmROdW06YW55KXtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGpRdWVyeSgnI2NhcmROdW1iZXIxJykudmFsaWRhdGVDcmVkaXRDYXJkKGZ1bmN0aW9uKHJlc3VsdDphbnkpIHtcclxuXHRcdFx0aWYocmVzdWx0LmNhcmRfdHlwZSAhPSBudWxsKXtcclxuXHRcdFx0XHRzZWxmLmNhcmRUeXBlID0gcmVzdWx0LmNhcmRfdHlwZS5uYW1lO1xyXG5cdFx0XHRcdGlmKHJlc3VsdC5sZW5ndGhfdmFsaWQgJiYgcmVzdWx0Lmx1aG5fdmFsaWQgJiYgcmVzdWx0LnZhbGlkKVxyXG5cdFx0XHRcdFx0c2VsZi5jYXJkVmFsaWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHZhciBwYXR0ZXJuID0gL1thLXpcXHMnLFxcLlwiL3t9KClbXFxdXS9naTtcclxuXHRcdHZhciBzdHJpbmdudW1iZXIgPSBjYXJkTnVtLnZhbHVlLnJlcGxhY2UocGF0dGVybiwnJyk7XHJcblx0XHRjYXJkTnVtLnZhbHVlID0gc3RyaW5nbnVtYmVyO1xyXG5cdFx0aWYoY2FyZE51bS52YWx1ZS5sZW5ndGggPT09IDQpe1xyXG5cdFx0XHRqUXVlcnkoY2FyZE51bSkubmV4dCgnaW5wdXQnKS5mb2N1cygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0dXBQYXltZW50KCl7XHJcblx0XHRsZXQgY2FyZERhdGEgPSB7XHJcblx0XHRcdCdjYXJkTnVtYmVyJzp0aGlzLnNldHVwUGF5bWVudEZvcm0udmFsdWUuY2FyZE51bWJlcjFcclxuXHRcdFx0XHRcdFx0KyB0aGlzLnNldHVwUGF5bWVudEZvcm0udmFsdWUuY2FyZE51bWJlcjJcclxuXHRcdFx0XHRcdFx0KyB0aGlzLnNldHVwUGF5bWVudEZvcm0udmFsdWUuY2FyZE51bWJlcjNcclxuXHRcdFx0XHRcdFx0KyB0aGlzLnNldHVwUGF5bWVudEZvcm0udmFsdWUuY2FyZE51bWJlcjQsXHJcblx0XHRcdCdjdnYnOnRoaXMuc2V0dXBQYXltZW50Rm9ybS52YWx1ZS5jdnYsXHJcblx0XHRcdCdjYXJkTW9udGgnOnRoaXMuc2V0dXBQYXltZW50Rm9ybS52YWx1ZS5jYXJkTW9udGgsXHJcblx0XHRcdCdjYXJkWWVhcic6dGhpcy5zZXR1cFBheW1lbnRGb3JtLnZhbHVlLmNhcmRZZWFyLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuXHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0XHRqUXVlcnkoJyNidG5TZXR1cENhcmQgc3BhbicpLnRleHQoJ1BsZWFzZSB3YWl0Li4uJykuYXR0cignZGlzYWJsZWQnLHRydWUpO1xyXG5cdFx0bGV0IHNldHVwUGF5bWVudCA9IHNlbGYuX21lbWJlcnNoaXBTZXJ2aWNlLnJlc2V0UGF5bWVudChjYXJkRGF0YSlcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoc3VjY2VzczogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRzZWxmLmNhcmRUeXBlID0gJyc7XHJcblx0XHRcdFx0XHRzZWxmLmNhcmRWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5DYXJkRGV0YWlsID0gbmV3IENhcmQoc3VjY2Vzcy5jYXJkKTtcclxuXHRcdFx0XHRcdHRoaXMuY2FyZF9zdGF0dXMgPSBzdWNjZXNzLmN1c3RvbWVyLmNhcmRfc3RhdHVzO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvciA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdFx0XHRcdGlmKHRoaXMuaXNDaGFuZ2VQbGFuICYmIHRoaXMuY2hhbmdlVG9QbGFuICE9ICcnICYmIHRoaXMuY2hhbmdlVG9QbGFuLmJpbGxpbmcuc3RhdHVzKXtcclxuXHRcdFx0XHRcdFx0bGV0IGNoYW5nZVN1YnNjcmlwdGlvbiA9IHNlbGYuX21lbWJlcnNoaXBTZXJ2aWNlLnVwZGF0ZVN1YnNjcmlwdGlvbih0aGlzLmNoYW5nZVRvUGxhbilcclxuXHRcdFx0XHRcdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdFx0XHRcdFx0KHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN1YnNDb21wLmdldFBsYW5TdWJzY3JpcHRpb24oKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5pbnZvaWNlLmdldEludm9pY2VzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RvcmFnZS5jb21wYW55LmJpbGxpbmcuY2hhcmdlYmVlX3BsYW5faWQgPSB0aGlzLmNoYW5nZVRvUGxhbi5iaWxsaW5nLnBsYW5faWQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX2Nvb2tpZVNlcnZpY2UuZXJhc2VDb29raWUoJ3N0b3JhZ2UnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ3N0b3JhZ2UnLEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpLDMpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCcjY2MtbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoJyNidG5TZXR1cENhcmQgc3BhbicpLnRleHQoJ1N1Ym1pdCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeSgnI2J0blNldHVwQ2FyZCcpLmh0bWwoJ1N1Ym1pdCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeSgnI2NjLW1vZGFsIGlucHV0JykudmFsKCcnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCcjYnRuU2V0dXBDYXJkIHNwYW4nKS50ZXh0KCdNYWtlIFBheW1lbnQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lyo9PT09IEFuYWx5dGljcyBUcmFja2luZyBhbmQgUGF5bWVudCBUcmFja2luZyBjb2RlIGhlcmUgPT09PSovXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMua21xQW1vdW50RHVlID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5rbXFBbW91bnRQYWlkID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5rbXFDcmVkaXRzQXBwbGllZCA9IDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMua21xVG90YWxBbW91bnQgPSAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihzdWNjZXNzLmludm9pY2UgJiYgc3VjY2Vzcy5pbnZvaWNlLmFtb3VudF9wYWlkICE9PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmttcUFtb3VudFBhaWQgPSBNYXRoLnJvdW5kKHN1Y2Nlc3MuaW52b2ljZS5hbW91bnRfcGFpZC8xMDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKHN1Y2Nlc3MuaW52b2ljZSAmJiBzdWNjZXNzLmludm9pY2UuY3JlZGl0c19hcHBsaWVkICE9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5rbXFDcmVkaXRzQXBwbGllZCA9IE1hdGgucm91bmQoc3VjY2Vzcy5pbnZvaWNlLmNyZWRpdHNfYXBwbGllZC8xMDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKHN1Y2Nlc3MuaW52b2ljZSAmJiBzdWNjZXNzLmludm9pY2UuYW1vdW50X2R1ZSAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMua21xQW1vdW50RHVlID0gTWF0aC5yb3VuZChzdWNjZXNzLmludm9pY2UuYW1vdW50X2R1ZS8xMDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKHN1Y2Nlc3MuaW52b2ljZSAmJiBzdWNjZXNzLmludm9pY2Uuc3ViX3RvdGFsICE9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5rbXFUb3RhbEFtb3VudCA9IE1hdGgucm91bmQoc3VjY2Vzcy5pbnZvaWNlLnN1Yl90b3RhbC8xMDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCBrbXFEYXRhID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdUb3RhbCBBbW91bnQnOnRoaXMua21xVG90YWxBbW91bnQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0J0Ftb3VudCBQYWlkJzogdGhpcy5rbXFBbW91bnRQYWlkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdDcmVkaXRzIEFwcGxpZWQnOiB0aGlzLmttcUNyZWRpdHNBcHBsaWVkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCdBbW91bnQgRHVlJzp0aGlzLmttcUFtb3VudER1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnUGxhbic6c3VjY2Vzcy5pbnZvaWNlLmxpbmVfaXRlbXNbMF0uZGVzY3JpcHRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmJxKCd0cmFjaycsICdQdXJjaGFzZScsIHt2YWx1ZTogdGhpcy5rbXFUb3RhbEFtb3VudC50b1N0cmluZygpLCBjdXJyZW5jeTogJ1VTRCd9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnU3VibWl0JywgJ1NldHRpbmdzUGxhbkNoYW5nZWQnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ1NldHRpbmdzIFBsYW4gQ2hhbmdlZCcsIGttcURhdGFdKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8qbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZih1cmwudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwib3V0Z3Jvdy5jb1wiKSA+PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IGxlYWREeW5vRGF0YSA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHB1cmNoYXNlX2NvZGU6ICdUaW5rZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHVyY2hhc2VfYW1vdW50OiAwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZihzdWNjZXNzLmludm9pY2UpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxlYWREeW5vRGF0YS5wdXJjaGFzZV9jb2RlID0gc3VjY2Vzcy5pbnZvaWNlLmlkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGVhZER5bm9EYXRhLnB1cmNoYXNlX2Ftb3VudCA9IE1hdGgucm91bmQoc3VjY2Vzcy5pbnZvaWNlLnN1Yl90b3RhbC8xMDApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMZWFkRHluby5yZWNvcmRQdXJjaGFzZShzdWNjZXNzLmN1c3RvbWVyLmVtYWlsLCBsZWFkRHlub0RhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9Ki9cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lyo9PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ1BheW1lbnQgc3VjY2Vzc2Z1bGx5IGRvbmUgYW5kIHBsYW4gaXMgY2hhbmdlZC4nKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5pc0NoYW5nZVBsYW4gPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5jaGFuZ2VUb1BsYW4gPSAnJztcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHQoZXJyb3I6YW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yTWVzc2FnZSA9ICdZb3VyIGNhcmQgd2FzIGRlY2xpbmVkLic7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeSgnI2J0blNldHVwQ2FyZCBzcGFuJykudGV4dCgnTWFrZSBQYXltZW50JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly9qUXVlcnkoJyNidG5TZXR1cENhcmQnKS5odG1sKCdNYWtlIFBheW1lbnQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYodGhpcy5pc0NoYW5nZVBsYW4gJiYgdGhpcy5jaGFuZ2VUb1BsYW4hPScnICYmICF0aGlzLmNoYW5nZVRvUGxhbi5iaWxsaW5nLnN0YXR1cyl7XHJcblx0XHRcdFx0XHRcdGpRdWVyeSgnI2J0blNldHVwQ2FyZCBzcGFuJykudGV4dCgnUGxlYXNlIFdhaXQuLi4nKS5hdHRyKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdC8valF1ZXJ5KCcjYnRuU2V0dXBDYXJkIHNwYW4nKS50ZXh0KCdQbGVhc2UgV2FpdC4uLicpLmF0dHIoJ2Rpc2FibGVkJyx0cnVlKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZWFjdGl2YXRlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRqUXVlcnkoJyNjYy1tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdGpRdWVyeSgnI2J0blNldHVwQ2FyZCBzcGFuJykudGV4dCgnU3VibWl0JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0Ly9qUXVlcnkoJyNidG5TZXR1cENhcmQnKS5odG1sKCdTdWJtaXQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRqUXVlcnkoJyNjYy1tb2RhbCBpbnB1dCcpLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignUGF5bWVudCBzdWNjZXNzZnVsbHkgYWRkZWQnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblx0XHRcdFx0XHQvKi0tLS0gVHJhY2tpbmcgY29kZSBnb2VzIGhlcmUgLS0tLSovXHJcblx0XHRcdFx0XHRmYnEoJ3RyYWNrJywgJ0FkZFBheW1lbnRJbmZvJyk7XHJcblx0XHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdTdWJtaXQnLCAnU2V0dGluZ3MgQWRkIFBheW1lbnQgTWV0aG9kJyk7XHJcblx0XHRcdFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgUGF5bWVudCBNZXRob2QgQWRkZWQnXSk7XHJcblx0XHRcdFx0XHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3IuZXJyb3IuZXJyX21lc3NhZ2U7XHJcblx0XHRcdFx0XHRpZih0aGlzLmlzQ2hhbmdlUGxhbilcclxuXHRcdFx0XHRcdFx0alF1ZXJ5KCcjYnRuU2V0dXBDYXJkIHNwYW4nKS50ZXh0KCdNYWtlIFBheW1lbnQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHQvL2pRdWVyeSgnI2J0blNldHVwQ2FyZCcpLmh0bWwoJ01ha2UgUGF5bWVudCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdGpRdWVyeSgnI2J0blNldHVwQ2FyZCBzcGFuJykudGV4dCgnU3VibWl0JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0Ly9qUXVlcnkoJyNidG5TZXR1cENhcmQnKS5odG1sKCdTdWJtaXQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdFx0c2V0dXBQYXltZW50LnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0cmVhY3RpdmF0ZSgpe1xyXG5cdFx0bGV0IHJlYWN0aXZhdGVNZW1iZXJzaGlwID0gdGhpcy5fbWVtYmVyc2hpcFNlcnZpY2UuYWN0aXZhdGVOb3coKVxyXG5cdFx0LnN1YnNjcmliZShcclxuXHRcdFx0KHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG5cdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignWW91IGhhdmUgU3VjY2Vzc2Z1bGx5IFJlYWN0aXZhdGVkICcpO1xyXG5cdFx0XHRcdC8vdGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ2ZpbGVwaWNrZXJfdG9rZW5fanNvbicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmNvbXBhbnlBY2Nlc3MpLCAzKTtcclxuXHRcdFx0XHRsZXQgbWVtYmVyc2hpcCA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nKSk7XHJcblx0XHRcdFx0bWVtYmVyc2hpcFsxXS52YWx1ZSA9IHN1Y2Nlc3Muc3Vic2NyaXB0aW9uLnN0YXR1cztcclxuXHRcdFx0XHR0aGlzLl9jb29raWVTZXJ2aWNlLmVyYXNlQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nKTtcclxuXHRcdFx0XHR0aGlzLl9jb29raWVTZXJ2aWNlLmNyZWF0ZUNvb2tpZSgnZmlsZXBpY2tlcl90b2tlbl9qc29uJyxKU09OLnN0cmluZ2lmeShtZW1iZXJzaGlwKSwzKTtcclxuXHRcdFx0XHRsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG5cdFx0XHRcdHN0b3JhZ2UuY29tcGFueS5iaWxsaW5nLmNoYXJnZWJlZV9wbGFuX2lkID0gc3VjY2Vzcy5zdWJzY3JpcHRpb24ucGxhbl9pZDtcclxuXHRcdFx0XHR0aGlzLl9jb29raWVTZXJ2aWNlLmVyYXNlQ29va2llKCdzdG9yYWdlJyk7XHJcblx0XHRcdFx0dGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ3N0b3JhZ2UnLEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpLDMpO1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0KGVycm9yOmFueSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gJ1N1YnNjcmlwdGlvbiBjYW5ub3QgYmUgcmUtYWN0aXZhdGVkIGFzIHlvdXIgY2FyZCBpcyBkZWNsaW5lJztcclxuXHRcdFx0XHRqUXVlcnkoJyNidG5TZXR1cENhcmQgc3BhbicpLnRleHQoJ01ha2UgUGF5bWVudCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcblx0XHRcdFx0cmVhY3RpdmF0ZU1lbWJlcnNoaXAudW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGNsb3NlTGF5b3ZlcigpIHtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGpRdWVyeSgnLmZsb2F0LWNoYW5nZXMtdXBkYXRlZCcpLmZhZGVJbigpXHJcblx0XHRcdFx0LmFuaW1hdGUoe2JvdHRvbTotNTB9LCA4MDAsIGZ1bmN0aW9uKCkge30pO1xyXG5cdFx0XHR9LCA0MDAwKTtcclxuXHR9XHJcbn1cclxuIl19
