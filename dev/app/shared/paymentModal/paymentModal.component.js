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
var index_1 = require('./../services/index');
var currentPlan_1 = require('./../models/currentPlan');
var env_config_1 = require('./../../config/env.config');
var PaymentModalComponent = (function () {
    function PaymentModalComponent(fb, _membershipService, _script, _cookieService) {
        this.fb = fb;
        this._membershipService = _membershipService;
        this._script = _script;
        this._cookieService = _cookieService;
        this.cardType = '';
        this.cardValid = false;
        this.error = false;
        this.errorMessage = '';
        this.errormsg = '';
        this.errorcard = false;
        this.CardDetail = new currentPlan_1.Card(null);
        this.card_status = '';
        this.isChangePlan = false;
        this.cardStatus = '';
        this.subsStatus = '';
        this.payment_left = 0;
        this.ogExt = '';
    }
    PaymentModalComponent.prototype.ngOnInit = function () {
        this.errorMessage = '';
        this.errormsg = '';
        this.error = false;
        this.errorcard = false;
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
        var storage = this._cookieService.readCookie('storage');
        if (storage) {
            storage = JSON.parse(storage);
            this.payment_left = storage.company.cost / 100;
            this.username = storage.user.name;
        }
        var status = this._cookieService.readCookie('status');
        if (status) {
            status = JSON.parse(status);
            this.cardStatus = status.cardStatus;
            this.subsStatus = status.subsStatus;
        }
        this.ogExt = env_config_1.Config.APP_EXTENSION;
    };
    PaymentModalComponent.prototype.onChangeCardNumber = function (cardNum) {
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
    PaymentModalComponent.prototype.ngAfterViewInit = function () {
        this._script.load('cardValidator')
            .then(function (data) {
        })
            .catch(function (error) {
        });
    };
    PaymentModalComponent.prototype.setup = function () {
        this.error = false;
        this.errorMessage = '';
        jQuery('#new-setup-payment').modal('hide');
        jQuery('#cc-modal-payment').modal({ backdrop: 'static', keyboard: false });
        jQuery('#cc-modal-payment').modal('show');
    };
    PaymentModalComponent.prototype.setupPayment = function () {
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
        jQuery('#btnSetupCard').html('Please wait...').attr('disabled', true);
        var setupPayment = self._membershipService.resetPayment(cardData)
            .subscribe(function (success) {
            self.cardType = '';
            self.cardValid = false;
            if (_this.subsStatus === 'cancelled') {
                console.log('cancelled');
                _this.activateNow();
            }
            else {
                console.log(success);
                var status_1 = JSON.parse(_this._cookieService.readCookie('status'));
                status_1.cardStatus = success.customer.card_status;
                _this._cookieService.createCookie('status', JSON.stringify(status_1), 3);
                _this.CardDetail = new currentPlan_1.Card(success.card);
                _this.card_status = success.customer.card_status;
                _this.error = false;
                _this.errorMessage = '';
                jQuery('#cc-modal-payment').modal('hide');
                jQuery('.modal-backdrop').remove();
                jQuery('#premiumPaymentModal').modal('hide');
                _this.errorMessage = '';
                window.toastNotification('Payment successfully added');
                self._cookieService.createCookie('cardStatus', self.card_status, 3);
                jQuery('#activateModal').modal({ backdrop: 'static', keyboard: false });
                jQuery('#activateModal').modal('show');
            }
            jQuery('#btnSetupCard').html('Submit').attr('disabled', false);
            jQuery('#cc-modal-payment input').val('');
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'Settings Add Payment Method');
            _kmq.push(['record', 'Settings Payment Method Added']);
        }, function (error) {
            _this.error = true;
            _this.errorMessage = 'Invalid card details';
            if (_this.isChangePlan)
                jQuery('#btnSetupCard').html('Make Payment').attr('disabled', false);
            else
                jQuery('#btnSetupCard').html('Submit').attr('disabled', false);
            setupPayment.unsubscribe();
        });
    };
    PaymentModalComponent.prototype.activateNow = function () {
        var _this = this;
        var self = this;
        this.errorcard = false;
        this.error = false;
        jQuery('.btnActivateNow').html('Please wait...').attr('disabled', true);
        self._membershipService.activateNow()
            .subscribe(function (success) {
            console.log('activated', success);
            var status = {
                cardStatus: 'valid',
                subsStatus: success.subscription.status,
            };
            window.toastNotification('Payment successfull');
            var membership = JSON.parse(_this._cookieService.readCookie('filepicker_token_json'));
            membership[1].value = success.subscription.status;
            _this._cookieService.eraseCookie('filepicker_token_json');
            _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(membership), 3);
            jQuery('#btnActivateNow').html('Activate Now').attr('disabled', false);
            _this._cookieService.createCookie('status', JSON.stringify(status), 3);
            jQuery('.modal-backdrop').remove();
            jQuery('#new-setup-payment').modal('hide');
            jQuery('#cc-modal-payment').modal('hide');
            window.location.reload();
        }, function (error) {
            _this.errorcard = true;
            _this.error = true;
            _this.errorMessage = 'Subscription cannot be re-activated as your card is decline';
            jQuery('.btnActivateNow').html('Make Payment').attr('disabled', false);
        });
    };
    PaymentModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-payment-modal',
            templateUrl: 'paymentModal.component.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, index_1.MembershipService, index_1.Script, index_1.CookieService])
    ], PaymentModalComponent);
    return PaymentModalComponent;
}());
exports.PaymentModalComponent = PaymentModalComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGF5bWVudE1vZGFsL3BheW1lbnRNb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpRCxlQUFlLENBQUMsQ0FBQTtBQUNqRSxzQkFBNEUsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3RixzQkFBdUQscUJBQXFCLENBQUMsQ0FBQTtBQUM3RSw0QkFBbUIseUJBQXlCLENBQUMsQ0FBQTtBQUM3QywyQkFBdUIsMkJBQTJCLENBQUMsQ0FBQTtBQWFuRDtJQW9ERSwrQkFDVSxFQUFnQixFQUNoQixrQkFBc0MsRUFDdEMsT0FBYyxFQUNkLGNBQThCO1FBSDlCLE9BQUUsR0FBRixFQUFFLENBQWM7UUFDaEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBdER4QyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFDMUIsVUFBSyxHQUFXLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixhQUFRLEdBQVMsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFDMUIsZUFBVSxHQUFTLElBQUksa0JBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixpQkFBWSxHQUFXLEtBQUssQ0FBQztRQUU3QixlQUFVLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsaUJBQVksR0FBWSxDQUFDLENBQUM7UUFDMUIsVUFBSyxHQUFVLEVBQUUsQ0FBQztJQTRDbEIsQ0FBQztJQTNDRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFB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QUFDO1lBQ2xGLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQXBNSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixDQUFDO1NBQ3ZDLENBQUM7OzZCQUFBO0lBZ01GLDRCQUFDO0FBQUQsQ0E5TEEsQUE4TEMsSUFBQTtBQTlMWSw2QkFBcUIsd0JBOExqQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvcGF5bWVudE1vZGFsL3BheW1lbnRNb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsRm9ybUdyb3VwLCBGb3JtQnVpbGRlciAsVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtNZW1iZXJzaGlwU2VydmljZSwgU2NyaXB0LCBDb29raWVTZXJ2aWNlfSBmcm9tICcuLy4uL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHtDYXJkfSBmcm9tICcuLy4uL21vZGVscy9jdXJyZW50UGxhbic7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vLi4vLi4vY29uZmlnL2Vudi5jb25maWcnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xyXG5kZWNsYXJlIHZhciBnYTphbnk7XHJcbmRlY2xhcmUgdmFyIF9rbXE6YW55O1xyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvZy1wYXltZW50LW1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BheW1lbnRNb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXR7XHJcbiAgc2V0dXBQYXltZW50Rm9ybTpGb3JtR3JvdXA7XHJcbiAgY2FyZFR5cGU6IHN0cmluZyA9ICcnO1xyXG4gIGNhcmRWYWxpZDpib29sZWFuID0gZmFsc2U7XHJcbiAgZXJyb3I6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XHJcbiAgZXJyb3Jtc2c6c3RyaW5nID0nJztcclxuICBlcnJvcmNhcmQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIENhcmREZXRhaWw6IENhcmQgPSBuZXcgQ2FyZChudWxsKTtcclxuICBjYXJkX3N0YXR1czpzdHJpbmcgPSAnJztcclxuICBpc0NoYW5nZVBsYW46Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHVzZXJuYW1lOnN0cmluZztcclxuICBjYXJkU3RhdHVzOnN0cmluZyA9ICcnO1xyXG4gIHN1YnNTdGF0dXM6c3RyaW5nID0gJyc7XHJcbiAgcGF5bWVudF9sZWZ0IDogbnVtYmVyID0gMDtcclxuICBvZ0V4dDpzdHJpbmcgPSAnJztcclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgIHRoaXMuZXJyb3Jtc2cgPSAnJztcclxuICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMuZXJyb3JjYXJkID0gZmFsc2U7XHJcbiAgICB0aGlzLnNldHVwUGF5bWVudEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgY2FyZE51bWJlcjEgOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSxWYWxpZGF0b3JzLnBhdHRlcm4oJ15bMC05XSokJyldKV0sXHJcbiAgICAgIGNhcmROdW1iZXIyIDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoNCksVmFsaWRhdG9ycy5wYXR0ZXJuKCdeWzAtOV0qJCcpXSldLFxyXG4gICAgICBjYXJkTnVtYmVyMyA6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLFZhbGlkYXRvcnMucGF0dGVybignXlswLTldKiQnKV0pXSxcclxuICAgICAgY2FyZE51bWJlcjQgOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSxWYWxpZGF0b3JzLnBhdHRlcm4oJ15bMC05XSokJyldKV0sXHJcbiAgICAgIG5hbWVPbkNhcmQgOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKV0sXHJcbiAgICAgIGN2diA6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFZhbGlkYXRvcnMucGF0dGVybignXlswLTldKiQnKSBdKV0sXHJcbiAgICAgIGNhcmRNb250aDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoMSksVmFsaWRhdG9ycy5wYXR0ZXJuKCdeWzAtOV0qJCcpXSldLFxyXG4gICAgICBjYXJkWWVhcjogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoNCksVmFsaWRhdG9ycy5wYXR0ZXJuKCdeWzAtOV0qJCcpXSldXHJcbiAgICB9KTtcclxuICAgIGpRdWVyeSgnLm1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSAnZmFsc2UnO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgc3RvcmFnZSA6IGFueSA9IHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpO1xyXG4gICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgIHN0b3JhZ2UgPSBKU09OLnBhcnNlKHN0b3JhZ2UpO1xyXG4gICAgICAgIHRoaXMucGF5bWVudF9sZWZ0ID0gc3RvcmFnZS5jb21wYW55LmNvc3QvMTAwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RvcmFnZVwiICwgc3RvcmFnZSk7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHN0b3JhZ2UudXNlci5uYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgbGV0IHN0YXR1czogYW55ID0gdGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdGF0dXMnKTtcclxuICAgIGlmKHN0YXR1cyl7XHJcbiAgICAgIHN0YXR1cyA9IEpTT04ucGFyc2Uoc3RhdHVzKTtcclxuICAgICAgdGhpcy5jYXJkU3RhdHVzID0gc3RhdHVzLmNhcmRTdGF0dXM7XHJcbiAgICAgIHRoaXMuc3Vic1N0YXR1cyA9IHN0YXR1cy5zdWJzU3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub2dFeHQgPSBDb25maWcuQVBQX0VYVEVOU0lPTjtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiIDogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIF9tZW1iZXJzaGlwU2VydmljZSA6IE1lbWJlcnNoaXBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfc2NyaXB0OlNjcmlwdCxcclxuICAgIHByaXZhdGUgX2Nvb2tpZVNlcnZpY2UgOiBDb29raWVTZXJ2aWNlXHJcbiAgKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VDYXJkTnVtYmVyKGNhcmROdW06YW55KXtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGpRdWVyeSgnI2NhcmROdW1iZXIxJykudmFsaWRhdGVDcmVkaXRDYXJkKGZ1bmN0aW9uKHJlc3VsdDphbnkpIHtcclxuICAgICAgaWYocmVzdWx0LmNhcmRfdHlwZSAhPSBudWxsKXtcclxuICAgICAgICBzZWxmLmNhcmRUeXBlID0gcmVzdWx0LmNhcmRfdHlwZS5uYW1lO1xyXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGhfdmFsaWQgJiYgcmVzdWx0Lmx1aG5fdmFsaWQgJiYgcmVzdWx0LnZhbGlkKVxyXG4gICAgICAgICAgc2VsZi5jYXJkVmFsaWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhciBwYXR0ZXJuID0gL1thLXpcXHMnLFxcLlwiL3t9KClbXFxdXS9naTtcclxuICAgIHZhciBzdHJpbmdudW1iZXIgPSBjYXJkTnVtLnZhbHVlLnJlcGxhY2UocGF0dGVybiwnJyk7XHJcbiAgICBjYXJkTnVtLnZhbHVlID0gc3RyaW5nbnVtYmVyO1xyXG4gICAgaWYoY2FyZE51bS52YWx1ZS5sZW5ndGggPT09IDQpe1xyXG4gICAgICBqUXVlcnkoY2FyZE51bSkubmV4dCgnaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICB0aGlzLl9zY3JpcHQubG9hZCgnY2FyZFZhbGlkYXRvcicpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdTY3JpcHRzIExvYWRlZCcsIGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcik9PntcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ1NjcmlwdCBmYWlsZWQgdG8gbG9hZCcsZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0dXAoKXtcclxuICAgIHRoaXMuZXJyb3IgICAgICA9ICBmYWxzZTtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICBqUXVlcnkoJyNuZXctc2V0dXAtcGF5bWVudCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICBqUXVlcnkoJyNjYy1tb2RhbC1wYXltZW50JykubW9kYWwoe2JhY2tkcm9wOiAnc3RhdGljJywga2V5Ym9hcmQ6IGZhbHNlfSk7XHJcbiAgICBqUXVlcnkoJyNjYy1tb2RhbC1wYXltZW50JykubW9kYWwoJ3Nob3cnKTtcclxuICB9XHJcblxyXG4gIHNldHVwUGF5bWVudCgpe1xyXG4gICAgbGV0IGNhcmREYXRhID0ge1xyXG4gICAgICAnY2FyZE51bWJlcic6dGhpcy5zZXR1cFBheW1lbnRGb3JtLnZhbHVlLmNhcmROdW1iZXIxXHJcbiAgICAgICsgdGhpcy5zZXR1cFBheW1lbnRGb3JtLnZhbHVlLmNhcmROdW1iZXIyXHJcbiAgICAgICsgdGhpcy5zZXR1cFBheW1lbnRGb3JtLnZhbHVlLmNhcmROdW1iZXIzXHJcbiAgICAgICsgdGhpcy5zZXR1cFBheW1lbnRGb3JtLnZhbHVlLmNhcmROdW1iZXI0LFxyXG4gICAgICAnY3Z2Jzp0aGlzLnNldHVwUGF5bWVudEZvcm0udmFsdWUuY3Z2LFxyXG4gICAgICAnY2FyZE1vbnRoJzp0aGlzLnNldHVwUGF5bWVudEZvcm0udmFsdWUuY2FyZE1vbnRoLFxyXG4gICAgICAnY2FyZFllYXInOnRoaXMuc2V0dXBQYXltZW50Rm9ybS52YWx1ZS5jYXJkWWVhcixcclxuICAgIH07XHJcbiAgICB0aGlzLmVycm9yID0gZmFsc2U7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgalF1ZXJ5KCcjYnRuU2V0dXBDYXJkJykuaHRtbCgnUGxlYXNlIHdhaXQuLi4nKS5hdHRyKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcbiAgICBsZXQgc2V0dXBQYXltZW50ID0gc2VsZi5fbWVtYmVyc2hpcFNlcnZpY2UucmVzZXRQYXltZW50KGNhcmREYXRhKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICAgIHNlbGYuY2FyZFR5cGUgPSAnJztcclxuICAgICAgICAgIHNlbGYuY2FyZFZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICBpZih0aGlzLnN1YnNTdGF0dXMgPT09ICdjYW5jZWxsZWQnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbmNlbGxlZCcpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlTm93KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdGF0dXMnKSk7XHJcbiAgICAgICAgICAgIHN0YXR1cy5jYXJkU3RhdHVzID0gc3VjY2Vzcy5jdXN0b21lci5jYXJkX3N0YXR1cztcclxuICAgICAgICAgICAgdGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ3N0YXR1cycsSlNPTi5zdHJpbmdpZnkoc3RhdHVzKSwzKTtcclxuICAgICAgICAgICAgdGhpcy5DYXJkRGV0YWlsID0gbmV3IENhcmQoc3VjY2Vzcy5jYXJkKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJkX3N0YXR1cyA9IHN1Y2Nlc3MuY3VzdG9tZXIuY2FyZF9zdGF0dXM7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgalF1ZXJ5KCcjY2MtbW9kYWwtcGF5bWVudCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnLm1vZGFsLWJhY2tkcm9wJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI3ByZW1pdW1QYXltZW50TW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ1BheW1lbnQgc3VjY2Vzc2Z1bGx5IGFkZGVkJyk7XHJcbiAgICAgICAgICAgIHNlbGYuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdjYXJkU3RhdHVzJyxzZWxmLmNhcmRfc3RhdHVzLDMpO1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNhY3RpdmF0ZU1vZGFsJykubW9kYWwoe2JhY2tkcm9wOiAnc3RhdGljJywga2V5Ym9hcmQ6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2FjdGl2YXRlTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGpRdWVyeSgnI2J0blNldHVwQ2FyZCcpLmh0bWwoJ1N1Ym1pdCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcbiAgICAgICAgICBqUXVlcnkoJyNjYy1tb2RhbC1wYXltZW50IGlucHV0JykudmFsKCcnKTtcclxuICAgICAgICAgIC8qLS0tLSBUcmFja2luZyBjb2RlIGdvZXMgaGVyZSAtLS0tKi9cclxuICAgICAgICAgICAgZ2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnU3VibWl0JywgJ1NldHRpbmdzIEFkZCBQYXltZW50IE1ldGhvZCcpO1xyXG4gICAgICAgICAgICBfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgUGF5bWVudCBNZXRob2QgQWRkZWQnXSk7XHJcbiAgICAgICAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcjphbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnSW52YWxpZCBjYXJkIGRldGFpbHMnO1xyXG4gICAgICAgICAgaWYodGhpcy5pc0NoYW5nZVBsYW4pXHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2J0blNldHVwQ2FyZCcpLmh0bWwoJ01ha2UgUGF5bWVudCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcbiAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGpRdWVyeSgnI2J0blNldHVwQ2FyZCcpLmh0bWwoJ1N1Ym1pdCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcbiAgICAgICAgICBzZXR1cFBheW1lbnQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZU5vdygpe1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5lcnJvcmNhcmQgID0gZmFsc2U7XHJcbiAgICB0aGlzLmVycm9yICAgICAgPSAgZmFsc2U7XHJcbiAgICBqUXVlcnkoJy5idG5BY3RpdmF0ZU5vdycpLmh0bWwoJ1BsZWFzZSB3YWl0Li4uJykuYXR0cignZGlzYWJsZWQnLHRydWUpO1xyXG4gICAgc2VsZi5fbWVtYmVyc2hpcFNlcnZpY2UuYWN0aXZhdGVOb3coKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIChzdWNjZXNzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmF0ZWQnLHN1Y2Nlc3MpO1xyXG4gICAgICAgICAgbGV0IHN0YXR1cyA9IHtcclxuICAgICAgICAgICAgICBjYXJkU3RhdHVzOiAndmFsaWQnLFxyXG4gICAgICAgICAgICAgIHN1YnNTdGF0dXM6IHN1Y2Nlc3Muc3Vic2NyaXB0aW9uLnN0YXR1cyxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ1BheW1lbnQgc3VjY2Vzc2Z1bGwnKTtcclxuICAgICAgICAgIGxldCBtZW1iZXJzaGlwID0gSlNPTi5wYXJzZSh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ2ZpbGVwaWNrZXJfdG9rZW5fanNvbicpKTtcclxuXHRcdFx0XHRcdG1lbWJlcnNoaXBbMV0udmFsdWUgPSBzdWNjZXNzLnN1YnNjcmlwdGlvbi5zdGF0dXM7XHJcblx0XHRcdFx0XHR0aGlzLl9jb29raWVTZXJ2aWNlLmVyYXNlQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nKTtcclxuXHRcdFx0XHRcdHRoaXMuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nLEpTT04uc3RyaW5naWZ5KG1lbWJlcnNoaXApLDMpO1xyXG4gICAgICAgICAgalF1ZXJ5KCcjYnRuQWN0aXZhdGVOb3cnKS5odG1sKCdBY3RpdmF0ZSBOb3cnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ3N0YXR1cycsSlNPTi5zdHJpbmdpZnkoc3RhdHVzKSwzKTtcclxuICAgICAgICAgIGpRdWVyeSgnLm1vZGFsLWJhY2tkcm9wJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICBqUXVlcnkoJyNuZXctc2V0dXAtcGF5bWVudCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICBqUXVlcnkoJyNjYy1tb2RhbC1wYXltZW50JykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcjphbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcmNhcmQgID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvciAgICAgID0gIHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJ1N1YnNjcmlwdGlvbiBjYW5ub3QgYmUgcmUtYWN0aXZhdGVkIGFzIHlvdXIgY2FyZCBpcyBkZWNsaW5lJztcclxuICAgICAgICAgICAgalF1ZXJ5KCcuYnRuQWN0aXZhdGVOb3cnKS5odG1sKCdNYWtlIFBheW1lbnQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuIl19
