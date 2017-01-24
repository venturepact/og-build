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
var plans_1 = require('../../../../shared/models/plans');
var planFeatures_1 = require('../../../../shared/models/planFeatures');
var estimate_1 = require('../../../../shared/models/estimate');
var number_format_1 = require('../../../../shared/services/helper-service/number-format');
var forms_1 = require('@angular/forms');
var index_2 = require('../../../../shared/services/index');
var SubscriptionComponent = (function () {
    function SubscriptionComponent(_membershipService, _planService, fb, _cookieService, _subDomainService) {
        this._membershipService = _membershipService;
        this._planService = _planService;
        this.fb = fb;
        this._cookieService = _cookieService;
        this._subDomainService = _subDomainService;
        this.runningPlanSubscription = new currentPlan_1.Subscriptions(null);
        this.runningPlanDetail = new plans_1.Plans(null);
        this.runningPlan = '';
        this.runningPlanCycle = '';
        this.futurePlanSubscription = new currentPlan_1.Subscriptions(null);
        this.futurePlanDetail = new plans_1.Plans(null);
        this.allPlansList = [];
        this.viewplansList = [];
        this.viewPlan = 'm';
        this.starterPlanFeatures = [];
        this.businessPlanFeatures = [];
        this.enterprisePlanFeatures = [];
        this.upgradeToPlan = new plans_1.Plans(null);
        this.upgradeBillingCycle = '';
        this.couponCode = '';
        this.couponCodeModal = '';
        this.estimation = {};
        this.loading = true;
        this.loadingPlans = true;
        this.loadingMemDet = true;
        this.error = false;
        this.errorMessage = '';
        this.payment_status = '';
        this.userRole = 'MANAGER';
        this.plansTypes = [];
        this.planFeatures = [];
        this.isDowagrade = false;
        this.show = true;
        this.isChangePlan = new core_1.EventEmitter();
        this.changeToPlan = new core_1.EventEmitter();
        this.subs = [];
        this.FreePlanName = '';
        this.essentials_m = 0;
        this.business_m = 0;
        this.enterprise_m = 0;
        this.membershipCancel = false;
        this.is_admin_created = false;
        this.is_subcripion_cancelled = false;
    }
    ;
    SubscriptionComponent.prototype.ngOnInit = function () {
        this.couponForm = this.fb.group({
            couponInput: [this.couponCodeModal, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])]
        });
        jQuery('.modal').on('hidden.bs.modal', function () {
            jQuery('.estimate-tabs').removeClass('active');
            jQuery('#subscription-tab').addClass('active');
            jQuery('#tab_default_1').addClass('active');
            jQuery('#error-UpgradePlan').html('').addClass('hide');
            this.couponCode = '';
            this.loading = true;
            this.error = false;
            this.errorMessage = '';
            this.upgradeBillingCycle = '';
        });
        this.userRole = this._cookieService.readCookie('role');
        if (localStorage.getItem('lodashAuthToken'))
            this.is_admin_created = JSON.parse(localStorage.getItem('lodashAuthToken')).is_admin_created;
        if (this.is_admin_created === undefined)
            this.is_admin_created = false;
        var sub_domain = this._subDomainService.subDomain.sub_domain;
        var companyAccess = JSON.parse(this._cookieService.readCookie('filepicker_token_json'));
        var subscription_status = '';
        if (!companyAccess)
            window.location.href = window.location.origin + '/logout';
        else
            companyAccess.forEach(function (e) {
                if (e.key === sub_domain) {
                    subscription_status = e.value;
                }
            });
    };
    SubscriptionComponent.prototype.getPlanSubscription = function () {
        var self = this;
        self.loadingMemDet = true;
        return self._membershipService.getplanSubscription()
            .subscribe(function (success) {
            self.payment_status = success.currentplan.customer.card_status;
            self.runningPlanSubscription = new currentPlan_1.Subscriptions(success.currentplan.subscription);
            self.runningPlanDetail = new plans_1.Plans(success.cpDetail.plan);
            if (self.runningPlanSubscription.plan_id !== 'starter' && self.runningPlanSubscription.plan_id !== 'freemium') {
                var cycle = self.runningPlanSubscription.plan_id.split('_');
                self.runningPlan = cycle[0];
                if (cycle[1] === 'm')
                    self.runningPlanCycle = 'Monthly';
                else if (cycle[1] === 's')
                    self.runningPlanCycle = 'Half Yearly';
                else if (cycle[1] === 'y')
                    self.runningPlanCycle = 'Yearly';
                self.viewPlan = cycle[1];
            }
            if (success.futureplan) {
                self.futurePlanSubscription = new currentPlan_1.Subscriptions(success.futureplan.subscription);
                self.futurePlanDetail = new plans_1.Plans(success.fpDetail.plan);
            }
            else {
                self.futurePlanSubscription = null;
            }
            self.getViewPlans(self.viewPlan);
            self.loadingMemDet = false;
        }, function (error) {
            self.loadingMemDet = true;
        });
    };
    SubscriptionComponent.prototype.numberFormat = function (num) {
        return number_format_1.NumberFormater.insertCommas(num);
    };
    SubscriptionComponent.prototype.reActivate = function () {
        var _this = this;
        if (this.payment_status == 'no_card' && this.upgradeToPlan.id !== 'starter') {
            var data = {};
            data = {
                'billing': {
                    'plan_id': this.upgradeToPlan.id,
                    'prorate': true,
                    'end_of_term': false,
                    'status': false
                }
            };
            this.changeToPlan.emit(data);
            this.isChangePlan.emit(true);
            jQuery('#cc-modal').modal('show');
            jQuery('#upgrade-plan-popup').modal('hide');
        }
        else {
            jQuery('.btnMakePayment').html('please Wait...').attr('disabled', true);
            var reactivateMembership_1 = this._membershipService.activateNow()
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
                jQuery('.btnMakePayment').html('Make Payment').attr('disabled', false);
                _this.errorMessage = 'Subscription cannot be re-activated as your card is decline';
                reactivateMembership_1.unsubscribe();
            });
        }
    };
    SubscriptionComponent.prototype.getAllPlans = function () {
        var self = this;
        return self._membershipService.getPlans()
            .subscribe(function (success) {
            self.allPlansList = [];
            success.lists.list.forEach(function (list) {
                self.allPlansList.push(new plans_1.Plans(list.plan));
                if (list.plan.id === 'essentials_m')
                    self.essentials_m = list.plan.price / 100;
                else if (list.plan.id === 'business_m')
                    self.business_m = list.plan.price / 100;
                else if (list.plan.id === 'enterprise_m')
                    self.enterprise_m = list.plan.price / 100;
            });
            self.planFeatures = [];
            success.plans.forEach(function (plan) {
                self.planFeatures.push(new planFeatures_1.PlanFeatures(plan));
            });
            self.getViewPlans(self.viewPlan);
        }, function (error) {
        });
    };
    SubscriptionComponent.prototype.getViewPlans = function (viewPlan) {
        var _this = this;
        if (viewPlan === void 0) { viewPlan = null; }
        this.loadingPlans = true;
        if (viewPlan)
            this.viewPlan = viewPlan;
        this.viewplansList = [];
        if (this.allPlansList.length > 0) {
            this.allPlansList.forEach(function (plan) {
                if (plan.id === 'starter' || plan.id === 'freemium')
                    _this.viewplansList.push(plan);
                if (plan.id.split('_')[1] === _this.viewPlan)
                    _this.viewplansList.push(plan);
            });
            this.loadingPlans = false;
            this.FreePlanName = this.viewplansList[0].name;
        }
        else {
            this.subs.push(this.getAllPlans());
        }
    };
    SubscriptionComponent.prototype.toCeil = function (pr) {
        return Math.ceil(pr);
    };
    SubscriptionComponent.prototype.makePayment = function () {
        if (this.payment_status == 'no_card' && this.upgradeToPlan.id !== 'starter') {
            var data = {};
            if (this.upgradeToPlan.id === 'starter') {
                data = {
                    'billing': {
                        "plan_id": this.upgradeToPlan.id,
                        "prorate": false,
                        "end_of_term": true,
                    }
                };
            }
            else if (this.couponCode !== '') {
                data = {
                    'billing': {
                        'plan_id': this.upgradeToPlan.id,
                        'prorate': true,
                        'end_of_term': false,
                        "coupon": this.couponCode
                    }
                };
            }
            else {
                data = {
                    'billing': {
                        'plan_id': this.upgradeToPlan.id,
                        'prorate': true,
                        'end_of_term': false,
                        'status': true
                    }
                };
            }
            this.changeToPlan.emit(data);
            this.isChangePlan.emit(true);
            jQuery('#cc-modal').modal('show');
            jQuery('#upgrade-plan-popup').modal('hide');
        }
        else {
            this.isChangePlan.emit(false);
            this.changeToPlan.emit({});
            this.changeSubscription();
        }
    };
    SubscriptionComponent.prototype.changeSubscription = function () {
        var _this = this;
        var data = {};
        if (this.upgradeToPlan.id === 'starter') {
            data = {
                'billing': {
                    "plan_id": this.upgradeToPlan.id,
                    "prorate": false,
                    "end_of_term": true,
                }
            };
        }
        else if (this.couponCode !== '') {
            data = {
                'billing': {
                    'plan_id': this.upgradeToPlan.id,
                    'prorate': true,
                    'end_of_term': false,
                    "coupon": this.couponCode
                }
            };
        }
        else {
            data = {
                'billing': {
                    'plan_id': this.upgradeToPlan.id,
                    'prorate': true,
                    'end_of_term': false
                }
            };
        }
        var self = this;
        jQuery('.btnMakePayment').html('please Wait...').attr('disabled', true);
        var changeSubscription = self._membershipService.updateSubscription(data)
            .subscribe(function (success) {
            jQuery('#upgrade-plan-popup').modal('hide');
            self.getPlanSubscription();
            jQuery('.btnMakePayment').html('Make Payment').attr('disabled', false);
            _this.error = false;
            _this.errorMessage = '';
            jQuery('#changeSubscriptionMessage').html('Plan Subscribed Successfully');
            var storage = JSON.parse(_this._cookieService.readCookie('storage'));
            storage.company.billing.chargebee_plan_id = data.billing.plan_id;
            _this._cookieService.eraseCookie('storage');
            _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
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
                'Plan': _this.upgradeToPlan.name
            };
            var subs = success.subscription ? success.subscription : null;
            if (subs) {
                var user_status = 'Trial';
                switch (subs.status) {
                    case 'in_trial':
                        user_status = 'Trial';
                        break;
                    case 'active':
                        user_status = 'Paid';
                        if (subs.plan_id === 'starter') {
                            user_status = 'Free';
                        }
                        break;
                }
                var icd = JSON.parse(localStorage.getItem('icd'));
                if (icd) {
                    icd.subscription_status = user_status;
                    localStorage.setItem('icd', JSON.stringify(icd));
                }
                window.Intercom('update', { 'subscription_status': user_status });
            }
            if (window.location.href.indexOf('outgrow.co') >= 0) {
                fbq('track', 'Purchase', { value: _this.kmqTotalAmount.toString(), currency: 'USD' });
            }
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'SettingsPlanChanged');
            _kmq.push(['record', 'Settings Plan Changed', kmqData]);
            window.toastNotification('Plan Subscribed Successfully');
        }, function (error) {
            _this.error = true;
            jQuery('.btnMakePayment').html('Make Payment').attr('disabled', false);
            _this.errorMessage = error.error.err_message;
            changeSubscription.unsubscribe();
        });
    };
    SubscriptionComponent.prototype.showEstimateModal = function (plan, cancel) {
        if (cancel) {
            this.membershipCancel = true;
        }
        this.isChangePlan.emit(false);
        this.getUpgradeEstimate(plan);
        jQuery('#upgrade-plan-popup').modal('show');
    };
    SubscriptionComponent.prototype.cancelMembeship = function () {
        var _this = this;
        jQuery('#cancelMembership').html('Please Wait...').attr('disabled', true);
        var cancelMembership = this._membershipService.cancelMembership()
            .subscribe(function (success) {
            jQuery('#cancelMembership').html('Request Sent');
            jQuery('#cancelMembership').addClass('btn-disable');
            window.toastNotification('Your Request to Cancel the membership have been received. You will be updated via email');
        }, function (error) {
            _this.error = true;
            cancelMembership.unsubscribe();
        });
    };
    SubscriptionComponent.prototype.getUpgradeEstimate = function (plan) {
        var _this = this;
        this.loading = true;
        this.upgradeToPlan = plan;
        var cycle = this.upgradeToPlan.id.split('_')[1];
        if (cycle === 'm')
            this.upgradeBillingCycle = 'Monthly';
        else if (cycle === 's')
            this.upgradeBillingCycle = 'Half Yearly';
        else if (cycle === 'y')
            this.upgradeBillingCycle = 'Yearly';
        this.couponCode = '';
        if (jQuery('#couponInput:text').val() && this.upgradeToPlan.id != 'starter') {
            this.couponCode = this.couponForm.value.couponInput;
            this.couponCodeModal = '';
        }
        var data = {};
        if (plan.id === 'starter') {
            data = {
                'plan_id': plan.id,
                'prorate': false,
                'end_of_term': true
            };
        }
        else if (this.couponCode !== '') {
            data = {
                'plan_id': plan.id,
                'prorate': true,
                'end_of_term': false,
                "coupon": this.couponCode
            };
        }
        else {
            data = {
                'plan_id': plan.id,
                'prorate': true,
                'end_of_term': false
            };
        }
        var self = this;
        var getUpgradeEstimate = self._membershipService.getUpdateEstimate(data)
            .subscribe(function (success) {
            self.estimation = new estimate_1.Estimate(success.estimate);
            self.loading = false;
            _this.error = false;
            _this.errorMessage = '';
            var due_amount;
            due_amount = self.estimation.next_invoice_estimate ?
                self.estimation.next_invoice_estimate.total :
                self.estimation.invoice_estimate ? self.estimation.invoice_estimate.total : '';
            if (due_amount === 0) {
                _this.isDowagrade = true;
            }
            else {
                _this.isDowagrade = false;
            }
        }, function (error) {
            _this.error = true;
            jQuery('.btnMakePayment').html('Make Payment').attr('disabled', false);
            if (error.error.err_message.indexOf(_this.couponCode) != -1)
                _this.errorMessage = 'Invalid Coupon ' + _this.couponCode;
            else
                _this.errorMessage = error.error.err_message;
            _this.couponCode = '';
            getUpgradeEstimate.unsubscribe();
            self.loading = false;
        });
    };
    SubscriptionComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case "SELECTPLAN":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'SelectPlan');
                _kmq.push(['record', 'Settings Select Plan Click']);
                break;
            case "MAKEPAYMENT":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'MakePayment');
                _kmq.push(['record', 'Settings Make Payment Click']);
                break;
            case "CHANGECYCLE":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'ChangeCycle');
                _kmq.push(['record', 'Settings Change Cycle Click']);
                break;
            case "CHANGEPLAN":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'ChangePlan');
                _kmq.push(['record', 'Settings Change Plan Click']);
                break;
        }
    };
    SubscriptionComponent.prototype.expand = function (pId) {
        if (jQuery('#' + pId).hasClass('rs-hide'))
            jQuery('#' + pId).removeClass('rs-hide');
        else
            jQuery('#' + pId).addClass('rs-hide');
    };
    SubscriptionComponent.prototype.contactUs = function () {
        jQuery(document).find('.intercom-launcher').click();
    };
    SubscriptionComponent.prototype.ngOnChanges = function () {
        this.subs.push(this.getPlanSubscription());
        this.subs.push(this.getAllPlans());
    };
    SubscriptionComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    SubscriptionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'og-subscription',
            templateUrl: 'subscription.component.html',
            styleUrls: ['subscription.component.css'],
            providers: [index_1.MembershipService, index_1.PlanService],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            inputs: ['payment_status', 'user_role'],
            outputs: ['isChangePlan', 'changeToPlan']
        }), 
        __metadata('design:paramtypes', [index_1.MembershipService, index_1.PlanService, forms_1.FormBuilder, index_2.CookieService, index_2.SubDomainService])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());
exports.SubscriptionComponent = SubscriptionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytTZXR0aW5ncy9tZW1iZXJzaGlwL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0UsZUFBZSxDQUFDLENBQUE7QUFDdEYsc0JBQTZDLG1DQUFtQyxDQUFDLENBQUE7QUFDakYsNEJBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsc0JBQW9CLGlDQUFpQyxDQUFDLENBQUE7QUFDdEQsNkJBQTJCLHdDQUF3QyxDQUFDLENBQUE7QUFDcEUseUJBQXVCLG9DQUFvQyxDQUFDLENBQUE7QUFDNUQsOEJBQThCLDBEQUEwRCxDQUFDLENBQUE7QUFDekYsc0JBQTJFLGdCQUFnQixDQUFDLENBQUE7QUFFNUYsc0JBQWdELG1DQUFtQyxDQUFDLENBQUE7QUFvQnBGO0lBOENDLCtCQUFvQixrQkFBcUMsRUFDaEQsWUFBeUIsRUFDMUIsRUFBYyxFQUNiLGNBQThCLEVBQzlCLGlCQUFtQztRQUp4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ2hELGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQzFCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDYixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQWpENUMsNEJBQXVCLEdBQWtCLElBQUksMkJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxzQkFBaUIsR0FBVSxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFDOUIsMkJBQXNCLEdBQWtCLElBQUksMkJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxxQkFBZ0IsR0FBVSxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxpQkFBWSxHQUFPLEVBQUUsQ0FBQztRQUN0Qixr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dWJzY3JpcHRpb24vc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyAsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWVtYmVyc2hpcFNlcnZpY2UsIFBsYW5TZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5pbXBvcnQge1N1YnNjcmlwdGlvbnN9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvY3VycmVudFBsYW4nO1xyXG5pbXBvcnQge1BsYW5zfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3BsYW5zJztcclxuaW1wb3J0IHtQbGFuRmVhdHVyZXN9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvcGxhbkZlYXR1cmVzJztcclxuaW1wb3J0IHtFc3RpbWF0ZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9lc3RpbWF0ZSc7XHJcbmltcG9ydCB7TnVtYmVyRm9ybWF0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaGVscGVyLXNlcnZpY2UvbnVtYmVyLWZvcm1hdCc7XHJcbmltcG9ydCB7UkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSwgU3ViRG9tYWluU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG5kZWNsYXJlIHZhciBnYTogYW55O1xyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeSA6IGFueTtcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XHJcbmRlY2xhcmUgdmFyIGZicTogYW55O1xyXG4vLyBkZWNsYXJlIHZhciBMZWFkRHlubzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQgOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3IgOiAnb2ctc3Vic2NyaXB0aW9uJyxcclxuXHR0ZW1wbGF0ZVVybCA6ICdzdWJzY3JpcHRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJscyA6IFsnc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5jc3MnXSxcclxuXHRwcm92aWRlcnM6IFtNZW1iZXJzaGlwU2VydmljZSwgUGxhblNlcnZpY2VdLFxyXG5cdGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdLFxyXG5cdGlucHV0czpbJ3BheW1lbnRfc3RhdHVzJywndXNlcl9yb2xlJ10sXHJcblx0b3V0cHV0czpbJ2lzQ2hhbmdlUGxhbicsJ2NoYW5nZVRvUGxhbiddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LE9uQ2hhbmdlcyxPbkRlc3Ryb3kge1xyXG5cdHJ1bm5pbmdQbGFuU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbnMobnVsbCk7XHJcblx0cnVubmluZ1BsYW5EZXRhaWw6IFBsYW5zID0gbmV3IFBsYW5zKG51bGwpO1xyXG5cdHJ1bm5pbmdQbGFuOnN0cmluZyA9ICcnO1xyXG5cdHJ1bm5pbmdQbGFuQ3ljbGU6IHN0cmluZyA9ICcnO1xyXG5cdGZ1dHVyZVBsYW5TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9ucyhudWxsKTtcclxuXHRmdXR1cmVQbGFuRGV0YWlsOiBQbGFucyA9IG5ldyBQbGFucyhudWxsKTtcclxuXHRhbGxQbGFuc0xpc3Q6YW55ID0gW107XHJcblx0dmlld3BsYW5zTGlzdDphbnkgPSBbXTtcclxuXHR2aWV3UGxhbjogc3RyaW5nID0gJ20nO1xyXG5cdHN0YXJ0ZXJQbGFuRmVhdHVyZXM6YW55ID0gW107XHJcblx0YnVzaW5lc3NQbGFuRmVhdHVyZXM6YW55ID0gW107XHJcblx0ZW50ZXJwcmlzZVBsYW5GZWF0dXJlczphbnkgPSBbXTtcclxuXHR1cGdyYWRlVG9QbGFuOiBQbGFucyA9IG5ldyBQbGFucyhudWxsKTtcclxuXHR1cGdyYWRlQmlsbGluZ0N5Y2xlOlN0cmluZyA9ICcnO1xyXG5cdGNvdXBvbkNvZGU6IFN0cmluZyA9ICcnO1xyXG5cdGNvdXBvbkNvZGVNb2RhbDogU3RyaW5nID0gJyc7XHJcblx0ZXN0aW1hdGlvbjogYW55ID0ge307XHJcblx0bG9hZGluZzogYm9vbGVhbiA9IHRydWU7XHJcblx0bG9hZGluZ1BsYW5zOiBib29sZWFuID0gdHJ1ZTtcclxuXHRsb2FkaW5nTWVtRGV0OmJvb2xlYW4gPSB0cnVlO1xyXG5cdGNvdXBvbkZvcm06Rm9ybUdyb3VwO1xyXG5cdGVycm9yOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRlcnJvck1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG5cdHBheW1lbnRfc3RhdHVzOlN0cmluZyA9ICcnO1xyXG5cdHVzZXJSb2xlOiBzdHJpbmcgPSAnTUFOQUdFUic7XHJcblx0cGxhbnNUeXBlczphbnkgPSBbXTtcclxuXHRwbGFuRmVhdHVyZXM6YW55ID0gW107XHJcblx0aXNEb3dhZ3JhZGU6Qm9vbGVhbiA9IGZhbHNlO1xyXG5cdHNob3c6Ym9vbGVhbiA9IHRydWU7XHJcblx0aXNDaGFuZ2VQbGFuID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cdGNoYW5nZVRvUGxhbiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cdHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHRGcmVlUGxhbk5hbWU6IHN0cmluZyA9ICcnO1xyXG5cclxuXHRlc3NlbnRpYWxzX206bnVtYmVyID0gMDtcclxuXHRidXNpbmVzc19tOm51bWJlciA9IDA7XHJcblx0ZW50ZXJwcmlzZV9tOm51bWJlciA9IDA7XHJcblxyXG5cdGttcUFtb3VudER1ZTogYW55O1xyXG5cdGttcUFtb3VudFBhaWQ6YW55O1xyXG5cdGttcUNyZWRpdHNBcHBsaWVkOiBhbnk7XHJcblx0a21xVG90YWxBbW91bnQ6YW55O1xyXG5cdG1lbWJlcnNoaXBDYW5jZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRpc19hZG1pbl9jcmVhdGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRpc19zdWJjcmlwaW9uX2NhbmNlbGxlZCA6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX21lbWJlcnNoaXBTZXJ2aWNlOiBNZW1iZXJzaGlwU2VydmljZSxcclxuXHRcdHByaXZhdGUgX3BsYW5TZXJ2aWNlOiBQbGFuU2VydmljZSxcclxuXHRcdHB1YmxpYyBmYjpGb3JtQnVpbGRlcixcclxuXHRcdHByaXZhdGUgX2Nvb2tpZVNlcnZpY2UgOiBDb29raWVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBfc3ViRG9tYWluU2VydmljZTogU3ViRG9tYWluU2VydmljZSkge1xyXG5cdH07XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5jb3Vwb25Gb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcblx0XHRcdGNvdXBvbklucHV0OiBbdGhpcy5jb3Vwb25Db2RlTW9kYWwsVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDUpXSldXHJcblx0XHR9KTtcclxuXHJcblx0XHRqUXVlcnkoJy5tb2RhbCcpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRqUXVlcnkoJy5lc3RpbWF0ZS10YWJzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRqUXVlcnkoJyNzdWJzY3JpcHRpb24tdGFiJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRqUXVlcnkoJyN0YWJfZGVmYXVsdF8xJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRqUXVlcnkoJyNlcnJvci1VcGdyYWRlUGxhbicpLmh0bWwoJycpLmFkZENsYXNzKCdoaWRlJyk7XHJcblx0XHRcdHRoaXMuY291cG9uQ29kZSA9ICcnO1xyXG5cdFx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmVycm9yID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcblx0XHRcdHRoaXMudXBncmFkZUJpbGxpbmdDeWNsZSA9ICcnO1xyXG5cdFx0fSk7XHJcblx0XHQvL3RoaXMuZ2V0UGxhbnNGZWF0dXJlcygpO1xyXG5cdFx0dGhpcy51c2VyUm9sZSA9IHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgncm9sZScpO1xyXG5cdFx0aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZGFzaEF1dGhUb2tlbicpKVxyXG5cdFx0XHR0aGlzLmlzX2FkbWluX2NyZWF0ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2Rhc2hBdXRoVG9rZW4nKSkuaXNfYWRtaW5fY3JlYXRlZDtcclxuXHRcdGlmKHRoaXMuaXNfYWRtaW5fY3JlYXRlZCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmlzX2FkbWluX2NyZWF0ZWQgPWZhbHNlO1xyXG5cdFx0bGV0IHN1Yl9kb21haW4gPSB0aGlzLl9zdWJEb21haW5TZXJ2aWNlLnN1YkRvbWFpbi5zdWJfZG9tYWluO1xyXG4gICAgXHRsZXQgY29tcGFueUFjY2VzcyA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nKSk7XHJcblx0XHRsZXQgc3Vic2NyaXB0aW9uX3N0YXR1cyA9ICcnO1xyXG5cdFx0aWYgKCFjb21wYW55QWNjZXNzKVxyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9sb2dvdXQnO1xyXG5cdFx0ZWxzZVxyXG5cdFx0Y29tcGFueUFjY2Vzcy5mb3JFYWNoKChlOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKGUua2V5ID09PSBzdWJfZG9tYWluKSB7XHJcblx0XHRcdHN1YnNjcmlwdGlvbl9zdGF0dXMgPSBlLnZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8qaWYoc3Vic2NyaXB0aW9uX3N0YXR1cz09PSdjYW5jZWxsZWQnKXtcclxuXHRcdFx0dGhpcy5pc19zdWJjcmlwaW9uX2NhbmNlbGxlZCA9IHRydWU7XHJcblx0XHR9Ki9cclxuXHRcdC8vY29uc29sZS5sb2coJyUlJSUlJSUlJSUlJScsdGhpcy5pc19zdWJjcmlwaW9uX2NhbmNlbGxlZCx0aGlzLmlzX2FkbWluX2NyZWF0ZWQsdGhpcy51c2VyUm9sZSk7XHJcblx0fVxyXG5cclxuXHRnZXRQbGFuU3Vic2NyaXB0aW9uKCl7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0XHRzZWxmLmxvYWRpbmdNZW1EZXQgPSB0cnVlO1xyXG5cdFx0cmV0dXJuIHNlbGYuX21lbWJlcnNoaXBTZXJ2aWNlLmdldHBsYW5TdWJzY3JpcHRpb24oKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChzdWNjZXNzOiBhbnkpPT57XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKCdnZXRQbGFuU3Vic2NyaXB0aW9uJyxzdWNjZXNzKTtcclxuXHRcdFx0XHRcdHNlbGYucGF5bWVudF9zdGF0dXMgPSBzdWNjZXNzLmN1cnJlbnRwbGFuLmN1c3RvbWVyLmNhcmRfc3RhdHVzO1xyXG5cdFx0XHRcdFx0c2VsZi5ydW5uaW5nUGxhblN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb25zKHN1Y2Nlc3MuY3VycmVudHBsYW4uc3Vic2NyaXB0aW9uKTtcclxuXHRcdFx0XHRcdHNlbGYucnVubmluZ1BsYW5EZXRhaWwgPSBuZXcgUGxhbnMoc3VjY2Vzcy5jcERldGFpbC5wbGFuKTtcclxuXHRcdFx0XHRcdGlmKHNlbGYucnVubmluZ1BsYW5TdWJzY3JpcHRpb24ucGxhbl9pZCAhPT0gJ3N0YXJ0ZXInICYmIHNlbGYucnVubmluZ1BsYW5TdWJzY3JpcHRpb24ucGxhbl9pZCAhPT0gJ2ZyZWVtaXVtJyl7XHJcblx0XHRcdFx0XHRcdGxldCBjeWNsZSA9IHNlbGYucnVubmluZ1BsYW5TdWJzY3JpcHRpb24ucGxhbl9pZC5zcGxpdCgnXycpO1xyXG5cdFx0XHRcdFx0XHRzZWxmLnJ1bm5pbmdQbGFuID0gY3ljbGVbMF07XHJcblx0XHRcdFx0XHRcdGlmKGN5Y2xlWzFdID09PSAnbScpXHJcblx0XHRcdFx0XHRcdFx0c2VsZi5ydW5uaW5nUGxhbkN5Y2xlID0gJ01vbnRobHknO1xyXG5cdFx0XHRcdFx0XHRlbHNlIGlmKGN5Y2xlWzFdID09PSAncycpXHJcblx0XHRcdFx0XHRcdFx0c2VsZi5ydW5uaW5nUGxhbkN5Y2xlID0gJ0hhbGYgWWVhcmx5JztcclxuXHRcdFx0XHRcdFx0ZWxzZSBpZihjeWNsZVsxXSA9PT0gJ3knKVxyXG5cdFx0XHRcdFx0XHRcdHNlbGYucnVubmluZ1BsYW5DeWNsZSA9ICdZZWFybHknO1xyXG5cdFx0XHRcdFx0XHRzZWxmLnZpZXdQbGFuID0gY3ljbGVbMV07XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYoc3VjY2Vzcy5mdXR1cmVwbGFuKXtcclxuXHRcdFx0XHRcdFx0c2VsZi5mdXR1cmVQbGFuU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbnMoc3VjY2Vzcy5mdXR1cmVwbGFuLnN1YnNjcmlwdGlvbik7XHJcblx0XHRcdFx0XHRcdHNlbGYuZnV0dXJlUGxhbkRldGFpbCA9IG5ldyBQbGFucyhzdWNjZXNzLmZwRGV0YWlsLnBsYW4pO1xyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHNlbGYuZnV0dXJlUGxhblN1YnNjcmlwdGlvbiA9IG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzZWxmLmdldFZpZXdQbGFucyhzZWxmLnZpZXdQbGFuKTtcclxuXHRcdFx0XHRcdHNlbGYubG9hZGluZ01lbURldCA9IGZhbHNlO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0KGVycm9yOmFueSk9PntcclxuXHRcdFx0XHRcdC8vZ2V0UGxhblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdFx0c2VsZi5sb2FkaW5nTWVtRGV0ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cdG51bWJlckZvcm1hdChudW06bnVtYmVyKXtcclxuXHRcdHJldHVybiBOdW1iZXJGb3JtYXRlci5pbnNlcnRDb21tYXMobnVtKTtcclxuXHR9XHJcblxyXG5cdHJlQWN0aXZhdGUoKXtcclxuXHRpZih0aGlzLnBheW1lbnRfc3RhdHVzID09ICdub19jYXJkJyAmJiB0aGlzLnVwZ3JhZGVUb1BsYW4uaWQgIT09ICdzdGFydGVyJyl7XHJcblx0XHRsZXQgZGF0YSA9IHt9O1xyXG5cdFx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0XHQnYmlsbGluZyc6e1xyXG5cdFx0XHRcdFx0XHQncGxhbl9pZCc6dGhpcy51cGdyYWRlVG9QbGFuLmlkLFxyXG5cdFx0XHRcdFx0XHQncHJvcmF0ZSc6dHJ1ZSxcclxuXHRcdFx0XHRcdFx0J2VuZF9vZl90ZXJtJzpmYWxzZSxcclxuXHRcdFx0XHRcdFx0J3N0YXR1cyc6ZmFsc2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR0aGlzLmNoYW5nZVRvUGxhbi5lbWl0KGRhdGEpO1xyXG5cdFx0XHR0aGlzLmlzQ2hhbmdlUGxhbi5lbWl0KHRydWUpO1xyXG5cdFx0XHRqUXVlcnkoJyNjYy1tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRcdGpRdWVyeSgnI3VwZ3JhZGUtcGxhbi1wb3B1cCcpLm1vZGFsKCdoaWRlJyk7XHJcblx0fWVsc2V7XHJcblx0XHRqUXVlcnkoJy5idG5NYWtlUGF5bWVudCcpLmh0bWwoJ3BsZWFzZSBXYWl0Li4uJykuYXR0cignZGlzYWJsZWQnLHRydWUpO1xyXG5cdFx0bGV0IHJlYWN0aXZhdGVNZW1iZXJzaGlwID0gdGhpcy5fbWVtYmVyc2hpcFNlcnZpY2UuYWN0aXZhdGVOb3coKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChzdWNjZXNzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignWW91IGhhdmUgU3VjY2Vzc2Z1bGx5IFJlYWN0aXZhdGVkICcpO1xyXG5cdFx0XHRcdFx0Ly90aGlzLl9jb29raWVTZXJ2aWNlLmNyZWF0ZUNvb2tpZSgnZmlsZXBpY2tlcl90b2tlbl9qc29uJywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuY29tcGFueUFjY2VzcyksIDMpO1xyXG5cdFx0XHRcdFx0bGV0IG1lbWJlcnNoaXAgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnZmlsZXBpY2tlcl90b2tlbl9qc29uJykpO1xyXG5cdFx0XHRcdFx0bWVtYmVyc2hpcFsxXS52YWx1ZSA9IHN1Y2Nlc3Muc3Vic2NyaXB0aW9uLnN0YXR1cztcclxuXHRcdFx0XHRcdHRoaXMuX2Nvb2tpZVNlcnZpY2UuZXJhc2VDb29raWUoJ2ZpbGVwaWNrZXJfdG9rZW5fanNvbicpO1xyXG5cdFx0XHRcdFx0dGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ2ZpbGVwaWNrZXJfdG9rZW5fanNvbicsSlNPTi5zdHJpbmdpZnkobWVtYmVyc2hpcCksMyk7XHJcblx0XHRcdFx0XHRsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG5cdFx0XHRcdFx0c3RvcmFnZS5jb21wYW55LmJpbGxpbmcuY2hhcmdlYmVlX3BsYW5faWQgPSBzdWNjZXNzLnN1YnNjcmlwdGlvbi5wbGFuX2lkO1xyXG5cdFx0XHRcdFx0dGhpcy5fY29va2llU2VydmljZS5lcmFzZUNvb2tpZSgnc3RvcmFnZScpO1xyXG5cdFx0XHRcdFx0dGhpcy5fY29va2llU2VydmljZS5jcmVhdGVDb29raWUoJ3N0b3JhZ2UnLEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpLDMpO1xyXG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0KGVycm9yOmFueSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvciA9IHRydWU7XHJcblx0XHRcdFx0XHRqUXVlcnkoJy5idG5NYWtlUGF5bWVudCcpLmh0bWwoJ01ha2UgUGF5bWVudCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcblx0XHRcdFx0XHR0aGlzLmVycm9yTWVzc2FnZSA9ICdTdWJzY3JpcHRpb24gY2Fubm90IGJlIHJlLWFjdGl2YXRlZCBhcyB5b3VyIGNhcmQgaXMgZGVjbGluZSc7XHJcblx0XHRcdFx0XHRyZWFjdGl2YXRlTWVtYmVyc2hpcC51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldEFsbFBsYW5zKCl7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0XHRyZXR1cm4gc2VsZi5fbWVtYmVyc2hpcFNlcnZpY2UuZ2V0UGxhbnMoKVxyXG5cdFx0XHQuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChzdWNjZXNzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdHNlbGYuYWxsUGxhbnNMaXN0ID0gW107XHJcblx0XHRcdFx0XHRzdWNjZXNzLmxpc3RzLmxpc3QuZm9yRWFjaCgobGlzdDphbnkpPT57XHJcblx0XHRcdFx0XHQgXHRzZWxmLmFsbFBsYW5zTGlzdC5wdXNoKG5ldyBQbGFucyhsaXN0LnBsYW4pKTtcclxuXHRcdFx0XHRcdCBcdGlmKGxpc3QucGxhbi5pZCA9PT0gJ2Vzc2VudGlhbHNfbScpXHJcblx0XHRcdFx0XHQgXHRcdHNlbGYuZXNzZW50aWFsc19tID0gbGlzdC5wbGFuLnByaWNlLzEwMDtcclxuXHRcdFx0XHRcdCBcdGVsc2UgaWYobGlzdC5wbGFuLmlkID09PSAnYnVzaW5lc3NfbScpXHJcblx0XHRcdFx0XHQgXHRcdHNlbGYuYnVzaW5lc3NfbSA9IGxpc3QucGxhbi5wcmljZS8xMDA7XHJcblx0XHRcdFx0XHQgXHRlbHNlIGlmKGxpc3QucGxhbi5pZCA9PT0gJ2VudGVycHJpc2VfbScpXHJcblx0XHRcdFx0XHQgXHRcdHNlbGYuZW50ZXJwcmlzZV9tID0gbGlzdC5wbGFuLnByaWNlLzEwMDtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0c2VsZi5wbGFuRmVhdHVyZXMgPSBbXTtcclxuXHRcdFx0XHRcdHN1Y2Nlc3MucGxhbnMuZm9yRWFjaCgocGxhbjphbnkpPT57XHJcblx0XHRcdFx0XHRcdHNlbGYucGxhbkZlYXR1cmVzLnB1c2gobmV3IFBsYW5GZWF0dXJlcyhwbGFuKSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHNlbGYuZ2V0Vmlld1BsYW5zKHNlbGYudmlld1BsYW4pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0KGVycm9yOmFueSkgPT4ge1xyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZygnZ2V0QWxsUGxhbnMgZXJyb3InLGVycm9yKTtcclxuXHRcdFx0XHRcdC8vZ2V0QWxsUGxhbnMudW5zdWJzY3JpYmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cdGdldFZpZXdQbGFucyh2aWV3UGxhbjpzdHJpbmcgPSBudWxsKXtcclxuXHRcdHRoaXMubG9hZGluZ1BsYW5zID0gdHJ1ZTtcclxuXHRcdGlmKHZpZXdQbGFuKVxyXG5cdFx0XHR0aGlzLnZpZXdQbGFuID0gdmlld1BsYW47XHJcblx0XHR0aGlzLnZpZXdwbGFuc0xpc3QgPSBbXTtcclxuXHRcdGlmKHRoaXMuYWxsUGxhbnNMaXN0Lmxlbmd0aCA+IDApe1xyXG5cdFx0XHR0aGlzLmFsbFBsYW5zTGlzdC5mb3JFYWNoKChwbGFuOmFueSk9PntcclxuXHRcdFx0XHRpZihwbGFuLmlkID09PSAnc3RhcnRlcicgfHwgcGxhbi5pZCA9PT0gJ2ZyZWVtaXVtJylcclxuXHRcdFx0XHRcdHRoaXMudmlld3BsYW5zTGlzdC5wdXNoKHBsYW4pO1xyXG5cdFx0XHRcdGlmKHBsYW4uaWQuc3BsaXQoJ18nKVsxXSA9PT0gdGhpcy52aWV3UGxhbilcclxuXHRcdFx0XHRcdHRoaXMudmlld3BsYW5zTGlzdC5wdXNoKHBsYW4pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5sb2FkaW5nUGxhbnMgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5GcmVlUGxhbk5hbWUgPSB0aGlzLnZpZXdwbGFuc0xpc3RbMF0ubmFtZTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHRoaXMuc3Vicy5wdXNoKHRoaXMuZ2V0QWxsUGxhbnMoKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHRvQ2VpbChwcjpudW1iZXIpe1xyXG5cdFx0cmV0dXJuIE1hdGguY2VpbChwcik7XHJcblx0fVxyXG5cdG1ha2VQYXltZW50KCl7XHJcblx0XHRpZih0aGlzLnBheW1lbnRfc3RhdHVzID09ICdub19jYXJkJyAmJiB0aGlzLnVwZ3JhZGVUb1BsYW4uaWQgIT09ICdzdGFydGVyJyl7XHJcblx0XHRcdGxldCBkYXRhID0ge307XHJcblx0XHRcdGlmKHRoaXMudXBncmFkZVRvUGxhbi5pZCA9PT0gJ3N0YXJ0ZXInKXtcclxuXHRcdFx0XHRkYXRhID0ge1xyXG5cdFx0XHRcdFx0J2JpbGxpbmcnOntcclxuXHRcdFx0XHRcdFx0XCJwbGFuX2lkXCI6dGhpcy51cGdyYWRlVG9QbGFuLmlkLFxyXG5cdFx0XHRcdFx0XHRcInByb3JhdGVcIjpmYWxzZSxcclxuXHRcdFx0XHRcdFx0XCJlbmRfb2ZfdGVybVwiOnRydWUsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fWVsc2UgaWYodGhpcy5jb3Vwb25Db2RlICE9PSAnJyl7XHJcblx0XHRcdFx0ZGF0YSA9IHtcclxuXHRcdFx0XHRcdCdiaWxsaW5nJzp7XHJcblx0XHRcdFx0XHRcdCdwbGFuX2lkJzp0aGlzLnVwZ3JhZGVUb1BsYW4uaWQsXHJcblx0XHRcdFx0XHRcdCdwcm9yYXRlJzp0cnVlLFxyXG5cdFx0XHRcdFx0XHQnZW5kX29mX3Rlcm0nOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcImNvdXBvblwiOnRoaXMuY291cG9uQ29kZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0XHQnYmlsbGluZyc6e1xyXG5cdFx0XHRcdFx0XHQncGxhbl9pZCc6dGhpcy51cGdyYWRlVG9QbGFuLmlkLFxyXG5cdFx0XHRcdFx0XHQncHJvcmF0ZSc6dHJ1ZSxcclxuXHRcdFx0XHRcdFx0J2VuZF9vZl90ZXJtJzpmYWxzZSxcclxuXHRcdFx0XHRcdFx0J3N0YXR1cyc6dHJ1ZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5jaGFuZ2VUb1BsYW4uZW1pdChkYXRhKTtcclxuXHRcdFx0dGhpcy5pc0NoYW5nZVBsYW4uZW1pdCh0cnVlKTtcclxuXHRcdFx0alF1ZXJ5KCcjY2MtbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0XHRqUXVlcnkoJyN1cGdyYWRlLXBsYW4tcG9wdXAnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dGhpcy5pc0NoYW5nZVBsYW4uZW1pdChmYWxzZSk7XHJcblx0XHRcdHRoaXMuY2hhbmdlVG9QbGFuLmVtaXQoe30pO1xyXG5cdFx0XHR0aGlzLmNoYW5nZVN1YnNjcmlwdGlvbigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRjaGFuZ2VTdWJzY3JpcHRpb24oKXtcclxuXHRcdGxldCBkYXRhOmFueSA9IHt9O1xyXG5cdFx0aWYodGhpcy51cGdyYWRlVG9QbGFuLmlkID09PSAnc3RhcnRlcicpe1xyXG5cdFx0XHRkYXRhID0ge1xyXG5cdFx0XHRcdCdiaWxsaW5nJzp7XHJcblx0XHRcdFx0XHRcInBsYW5faWRcIjp0aGlzLnVwZ3JhZGVUb1BsYW4uaWQsXHJcblx0XHRcdFx0XHRcInByb3JhdGVcIjpmYWxzZSxcclxuXHRcdFx0XHRcdFwiZW5kX29mX3Rlcm1cIjp0cnVlLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1lbHNlIGlmKHRoaXMuY291cG9uQ29kZSAhPT0gJycpe1xyXG5cdFx0XHRkYXRhID0ge1xyXG5cdFx0XHRcdCdiaWxsaW5nJzp7XHJcblx0XHRcdFx0XHQncGxhbl9pZCc6dGhpcy51cGdyYWRlVG9QbGFuLmlkLFxyXG5cdFx0XHRcdFx0J3Byb3JhdGUnOnRydWUsXHJcblx0XHRcdFx0XHQnZW5kX29mX3Rlcm0nOmZhbHNlLFxyXG5cdFx0XHRcdFx0XCJjb3Vwb25cIjp0aGlzLmNvdXBvbkNvZGVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0ZGF0YSA9IHtcclxuXHRcdFx0XHQnYmlsbGluZyc6e1xyXG5cdFx0XHRcdFx0J3BsYW5faWQnOnRoaXMudXBncmFkZVRvUGxhbi5pZCxcclxuXHRcdFx0XHRcdCdwcm9yYXRlJzp0cnVlLFxyXG5cdFx0XHRcdFx0J2VuZF9vZl90ZXJtJzpmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGpRdWVyeSgnLmJ0bk1ha2VQYXltZW50JykuaHRtbCgncGxlYXNlIFdhaXQuLi4nKS5hdHRyKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcblx0XHRsZXQgY2hhbmdlU3Vic2NyaXB0aW9uID0gc2VsZi5fbWVtYmVyc2hpcFNlcnZpY2UudXBkYXRlU3Vic2NyaXB0aW9uKGRhdGEpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcjdXBncmFkZS1wbGFuLXBvcHVwJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHNlbGYuZ2V0UGxhblN1YnNjcmlwdGlvbigpO1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcuYnRuTWFrZVBheW1lbnQnKS5odG1sKCdNYWtlIFBheW1lbnQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvciA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdFx0XHRcdGpRdWVyeSgnI2NoYW5nZVN1YnNjcmlwdGlvbk1lc3NhZ2UnKS5odG1sKCdQbGFuIFN1YnNjcmliZWQgU3VjY2Vzc2Z1bGx5Jyk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnc3RvcmFnZScpKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RvcmFnZS5jb21wYW55LmJpbGxpbmcuY2hhcmdlYmVlX3BsYW5faWQgPSBkYXRhLmJpbGxpbmcucGxhbl9pZDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5fY29va2llU2VydmljZS5lcmFzZUNvb2tpZSgnc3RvcmFnZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl9jb29raWVTZXJ2aWNlLmNyZWF0ZUNvb2tpZSgnc3RvcmFnZScsSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSksMyk7XHJcblxyXG5cdFx0XHRcdFx0Lyo9PT09IFRyYWNraW5nIGNvZGUgYW5kIExlYWQgRHlubyBQdXJjaGFzZSBjb2RlIGdvZXMgaGVyZSA9PT09Ki9cclxuXHRcdFx0XHRcdHRoaXMua21xQW1vdW50RHVlID0gMDtcclxuXHRcdFx0XHRcdHRoaXMua21xQW1vdW50UGFpZCA9IDA7XHJcblx0XHRcdFx0XHR0aGlzLmttcUNyZWRpdHNBcHBsaWVkID0gMDtcclxuXHRcdFx0XHRcdHRoaXMua21xVG90YWxBbW91bnQgPSAwO1xyXG5cdFx0XHRcdFx0aWYoc3VjY2Vzcy5pbnZvaWNlICYmIHN1Y2Nlc3MuaW52b2ljZS5hbW91bnRfcGFpZCAhPT0gMCl7XHJcblx0XHRcdFx0XHRcdHRoaXMua21xQW1vdW50UGFpZCA9IE1hdGgucm91bmQoc3VjY2Vzcy5pbnZvaWNlLmFtb3VudF9wYWlkLzEwMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZihzdWNjZXNzLmludm9pY2UgJiYgc3VjY2Vzcy5pbnZvaWNlLmNyZWRpdHNfYXBwbGllZCAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmttcUNyZWRpdHNBcHBsaWVkID0gTWF0aC5yb3VuZChzdWNjZXNzLmludm9pY2UuY3JlZGl0c19hcHBsaWVkLzEwMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZihzdWNjZXNzLmludm9pY2UgJiYgc3VjY2Vzcy5pbnZvaWNlLmFtb3VudF9kdWUgIT09IDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5rbXFBbW91bnREdWUgPSBNYXRoLnJvdW5kKHN1Y2Nlc3MuaW52b2ljZS5hbW91bnRfZHVlLzEwMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZihzdWNjZXNzLmludm9pY2UgJiYgc3VjY2Vzcy5pbnZvaWNlLnN1Yl90b3RhbCAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmttcVRvdGFsQW1vdW50ID0gTWF0aC5yb3VuZChzdWNjZXNzLmludm9pY2Uuc3ViX3RvdGFsLzEwMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsZXQga21xRGF0YSA9IHtcclxuXHQgICAgICBcdFx0XHRcdCdUb3RhbCBBbW91bnQnOnRoaXMua21xVG90YWxBbW91bnQsXHJcblx0ICAgICAgXHRcdFx0XHQnQW1vdW50IFBhaWQnOiB0aGlzLmttcUFtb3VudFBhaWQsXHJcblx0ICAgICAgXHRcdFx0XHQnQ3JlZGl0cyBBcHBsaWVkJzogdGhpcy5rbXFDcmVkaXRzQXBwbGllZCxcclxuXHQgICAgICBcdFx0XHRcdCdBbW91bnQgRHVlJzp0aGlzLmttcUFtb3VudER1ZSxcclxuXHQgICAgICBcdFx0XHRcdCdQbGFuJzp0aGlzLnVwZ3JhZGVUb1BsYW4ubmFtZVxyXG5cdCAgICAgIFx0XHRcdH07XHJcblx0ICAgICAgXHRcdFx0bGV0IHN1YnMgPSBzdWNjZXNzLnN1YnNjcmlwdGlvbiA/IHN1Y2Nlc3Muc3Vic2NyaXB0aW9uIDogbnVsbDtcclxuXHQgICAgICBcdFx0XHRpZihzdWJzKSB7XHJcblx0ICAgICAgXHRcdFx0XHRsZXQgdXNlcl9zdGF0dXMgPSAnVHJpYWwnO1xyXG5cdFx0ICAgICAgICAgICAgICAgIHN3aXRjaCAoc3Vicy5zdGF0dXMpIHtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW5fdHJpYWwnOlxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9zdGF0dXMgPSAnVHJpYWwnO1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FjdGl2ZSc6XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3N0YXR1cyA9ICdQYWlkJztcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWJzLnBsYW5faWQgPT09ICdzdGFydGVyJykgeyB1c2VyX3N0YXR1cyA9ICdGcmVlJzsgfVxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblx0XHQgICAgICAgICAgICAgICAgfVxyXG5cdFx0ICAgICAgICAgICAgICAgIGxldCBpY2QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpY2QnKSk7XHJcblx0XHQgICAgICAgICAgICAgICAgaWYoaWNkKSB7XHJcblx0XHQgICAgICAgICAgICAgICAgXHRpY2Quc3Vic2NyaXB0aW9uX3N0YXR1cyA9IHVzZXJfc3RhdHVzO1xyXG5cdFx0ICAgICAgICAgICAgICAgIFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ljZCcsIEpTT04uc3RyaW5naWZ5KGljZCkpO1xyXG5cdFx0ICAgICAgICAgICAgICAgIH1cclxuXHRcdCAgICAgICAgICAgICAgICB3aW5kb3cuSW50ZXJjb20oJ3VwZGF0ZScsIHsgJ3N1YnNjcmlwdGlvbl9zdGF0dXMnOiB1c2VyX3N0YXR1cyB9KVxyXG5cdCAgICAgIFx0XHRcdH1cclxuXHQgICAgICBcdFx0XHRpZih3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCdvdXRncm93LmNvJykgPj0gMCkge1xyXG5cdCAgICAgIFx0XHRcdFx0ZmJxKCd0cmFjaycsICdQdXJjaGFzZScsIHt2YWx1ZTogdGhpcy5rbXFUb3RhbEFtb3VudC50b1N0cmluZygpLCBjdXJyZW5jeTogJ1VTRCd9KTtcclxuXHQgICAgICBcdFx0XHR9XHJcblx0XHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdTdWJtaXQnLCAnU2V0dGluZ3NQbGFuQ2hhbmdlZCcpO1xyXG5cdCAgICAgIFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdTZXR0aW5ncyBQbGFuIENoYW5nZWQnLCBrbXFEYXRhXSk7XHJcblxyXG5cdCAgICAgIFx0XHRcdC8qbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdFx0XHRcdFx0aWYodXJsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIm91dGdyb3cuY29cIikgPj0gMCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgbGVhZER5bm9EYXRhID0ge1xyXG5cdFx0ICAgICAgXHRcdFx0XHRwdXJjaGFzZV9jb2RlOiAnVGlua2VyJyxcclxuXHRcdCAgICAgIFx0XHRcdFx0cHVyY2hhc2VfYW1vdW50OiAwXHJcblx0XHQgICAgICBcdFx0XHR9O1xyXG5cdFx0ICAgICAgXHRcdFx0aWYoc3VjY2Vzcy5pbnZvaWNlKSB7XHJcblx0XHQgICAgICBcdFx0XHRcdGxlYWREeW5vRGF0YS5wdXJjaGFzZV9jb2RlID0gc3VjY2Vzcy5pbnZvaWNlLmlkO1xyXG5cdFx0ICAgICAgXHRcdFx0XHRsZWFkRHlub0RhdGEucHVyY2hhc2VfYW1vdW50ID0gTWF0aC5yb3VuZChzdWNjZXNzLmludm9pY2Uuc3ViX3RvdGFsLzEwMCk7XHJcblx0XHQgICAgICBcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmKHRoaXMubWVtYmVyc2hpcENhbmNlbCkge1xyXG5cdFx0XHRcdFx0XHRcdExlYWREeW5vLnJlY29yZENhbmNlbGxhdGlvbihzdWNjZXNzLmN1c3RvbWVyLmVtYWlsKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRMZWFkRHluby5yZWNvcmRQdXJjaGFzZShzdWNjZXNzLmN1c3RvbWVyLmVtYWlsLCBsZWFkRHlub0RhdGEpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9Ki9cclxuXHRcdFx0XHRcdC8qPT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ1BsYW4gU3Vic2NyaWJlZCBTdWNjZXNzZnVsbHknKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdChlcnJvcjphbnkpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcuYnRuTWFrZVBheW1lbnQnKS5odG1sKCdNYWtlIFBheW1lbnQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuXHRcdFx0XHRcdGNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblx0c2hvd0VzdGltYXRlTW9kYWwocGxhbjpQbGFucyxjYW5jZWw/OmJvb2xlYW4pe1xyXG5cdFx0aWYoY2FuY2VsKSB7XHJcblx0XHRcdHRoaXMubWVtYmVyc2hpcENhbmNlbCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHR0aGlzLmlzQ2hhbmdlUGxhbi5lbWl0KGZhbHNlKTtcclxuXHRcdHRoaXMuZ2V0VXBncmFkZUVzdGltYXRlKHBsYW4pO1xyXG5cdFx0alF1ZXJ5KCcjdXBncmFkZS1wbGFuLXBvcHVwJykubW9kYWwoJ3Nob3cnKTtcclxuXHR9XHJcblxyXG5cdGNhbmNlbE1lbWJlc2hpcCgpe1xyXG5cdFx0alF1ZXJ5KCcjY2FuY2VsTWVtYmVyc2hpcCcpLmh0bWwoJ1BsZWFzZSBXYWl0Li4uJykuYXR0cignZGlzYWJsZWQnLHRydWUpO1xyXG5cdFx0bGV0IGNhbmNlbE1lbWJlcnNoaXAgPSB0aGlzLl9tZW1iZXJzaGlwU2VydmljZS5jYW5jZWxNZW1iZXJzaGlwKClcclxuXHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdChzdWNjZXNzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRqUXVlcnkoJyNjYW5jZWxNZW1iZXJzaGlwJykuaHRtbCgnUmVxdWVzdCBTZW50Jyk7XHJcblx0XHRcdFx0alF1ZXJ5KCcjY2FuY2VsTWVtYmVyc2hpcCcpLmFkZENsYXNzKCdidG4tZGlzYWJsZScpO1xyXG5cdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignWW91ciBSZXF1ZXN0IHRvIENhbmNlbCB0aGUgbWVtYmVyc2hpcCBoYXZlIGJlZW4gcmVjZWl2ZWQuIFlvdSB3aWxsIGJlIHVwZGF0ZWQgdmlhIGVtYWlsJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdChlcnJvcjphbnkpID0+IHtcclxuXHRcdFx0XHR0aGlzLmVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRjYW5jZWxNZW1iZXJzaGlwLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cdGdldFVwZ3JhZGVFc3RpbWF0ZShwbGFuOlBsYW5zKXtcclxuXHRcdHRoaXMubG9hZGluZyA9IHRydWU7XHJcblx0XHR0aGlzLnVwZ3JhZGVUb1BsYW4gPSBwbGFuO1xyXG5cdFx0bGV0IGN5Y2xlID0gdGhpcy51cGdyYWRlVG9QbGFuLmlkLnNwbGl0KCdfJylbMV07XHJcblx0XHRpZihjeWNsZSA9PT0gJ20nKVxyXG5cdFx0XHR0aGlzLnVwZ3JhZGVCaWxsaW5nQ3ljbGUgPSAnTW9udGhseSc7XHJcblx0XHRlbHNlIGlmKGN5Y2xlID09PSAncycpXHJcblx0XHRcdHRoaXMudXBncmFkZUJpbGxpbmdDeWNsZSA9ICdIYWxmIFllYXJseSc7XHJcblx0XHRlbHNlIGlmKGN5Y2xlID09PSAneScpXHJcblx0XHRcdHRoaXMudXBncmFkZUJpbGxpbmdDeWNsZSA9ICdZZWFybHknO1xyXG5cdFx0dGhpcy5jb3Vwb25Db2RlID0gJyc7XHJcblx0XHRpZihqUXVlcnkoJyNjb3Vwb25JbnB1dDp0ZXh0JykudmFsKCkgJiYgdGhpcy51cGdyYWRlVG9QbGFuLmlkICE9J3N0YXJ0ZXInKXtcclxuXHRcdFx0dGhpcy5jb3Vwb25Db2RlID0gdGhpcy5jb3Vwb25Gb3JtLnZhbHVlLmNvdXBvbklucHV0O1xyXG5cdFx0XHR0aGlzLmNvdXBvbkNvZGVNb2RhbCA9ICcnO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGRhdGEgPSB7fTtcclxuXHRcdGlmKHBsYW4uaWQgPT09ICdzdGFydGVyJyl7XHJcblx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0J3BsYW5faWQnOnBsYW4uaWQsXHJcblx0XHRcdFx0J3Byb3JhdGUnOmZhbHNlLFxyXG5cdFx0XHRcdCdlbmRfb2ZfdGVybSc6dHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fWVsc2UgaWYodGhpcy5jb3Vwb25Db2RlICE9PSAnJyl7XHJcblx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0J3BsYW5faWQnOnBsYW4uaWQsXHJcblx0XHRcdFx0J3Byb3JhdGUnOnRydWUsXHJcblx0XHRcdFx0J2VuZF9vZl90ZXJtJzpmYWxzZSxcclxuXHRcdFx0XHRcImNvdXBvblwiOnRoaXMuY291cG9uQ29kZVxyXG5cdFx0XHR9O1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0J3BsYW5faWQnOnBsYW4uaWQsXHJcblx0XHRcdFx0J3Byb3JhdGUnOnRydWUsXHJcblx0XHRcdFx0J2VuZF9vZl90ZXJtJzpmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0bGV0IGdldFVwZ3JhZGVFc3RpbWF0ZSA9IHNlbGYuX21lbWJlcnNoaXBTZXJ2aWNlLmdldFVwZGF0ZUVzdGltYXRlKGRhdGEpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdHNlbGYuZXN0aW1hdGlvbiA9IG5ldyBFc3RpbWF0ZShzdWNjZXNzLmVzdGltYXRlKTtcclxuXHRcdFx0XHRcdHNlbGYubG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvciA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdFx0XHRcdGxldCBkdWVfYW1vdW50IDphbnk7XHJcblx0XHRcdFx0XHRkdWVfYW1vdW50ID0gc2VsZi5lc3RpbWF0aW9uLm5leHRfaW52b2ljZV9lc3RpbWF0ZSA/XHJcblx0XHRcdFx0XHRcdFx0ICAgICBzZWxmLmVzdGltYXRpb24ubmV4dF9pbnZvaWNlX2VzdGltYXRlLnRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0IHNlbGYuZXN0aW1hdGlvbi5pbnZvaWNlX2VzdGltYXRlP3NlbGYuZXN0aW1hdGlvbi5pbnZvaWNlX2VzdGltYXRlLnRvdGFsOicnO1xyXG5cdFx0XHRcdFx0aWYoZHVlX2Ftb3VudD09PTApe1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzRG93YWdyYWRlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzRG93YWdyYWRlID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGpRdWVyeSgnLmJ0bk1ha2VQYXltZW50JykuaHRtbCgnTWFrZSBQYXltZW50JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHRcdFx0XHRcdGlmKGVycm9yLmVycm9yLmVycl9tZXNzYWdlLmluZGV4T2YodGhpcy5jb3Vwb25Db2RlKSAhPSAtMSlcclxuXHRcdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnSW52YWxpZCBDb3Vwb24gJyArIHRoaXMuY291cG9uQ29kZTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuXHRcdFx0XHRcdHRoaXMuY291cG9uQ29kZSA9ICcnO1xyXG5cdFx0XHRcdFx0Z2V0VXBncmFkZUVzdGltYXRlLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0XHRzZWxmLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cdGNhbGxHQShvcHQ6IHN0cmluZykge1xyXG5cdCAgICBzd2l0Y2ggKG9wdCkge1xyXG5cdCAgICBcdGNhc2UgXCJTRUxFQ1RQTEFOXCI6XHJcblx0ICAgIFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdDbGljaycsICdTZWxlY3RQbGFuJyk7XHJcblx0ICAgIFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgU2VsZWN0IFBsYW4gQ2xpY2snXSk7XHJcblx0ICAgICAgICBcdGJyZWFrO1xyXG5cclxuXHQgICAgICBcdGNhc2UgXCJNQUtFUEFZTUVOVFwiOlxyXG5cdCAgICAgIFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdDbGljaycsICdNYWtlUGF5bWVudCcpO1xyXG5cdCAgICAgIFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgTWFrZSBQYXltZW50IENsaWNrJ10pO1xyXG5cdCAgICAgICAgXHRicmVhaztcclxuXHJcbiAgICAgICAgXHRjYXNlIFwiQ0hBTkdFQ1lDTEVcIjpcclxuXHQgICAgICBcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnQ2xpY2snLCAnQ2hhbmdlQ3ljbGUnKTtcclxuXHQgICAgICBcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ1NldHRpbmdzIENoYW5nZSBDeWNsZSBDbGljayddKTtcclxuXHQgICAgICAgIFx0YnJlYWs7XHJcblxyXG4gICAgICAgIFx0Y2FzZSBcIkNIQU5HRVBMQU5cIjpcclxuXHQgICAgICBcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnQ2xpY2snLCAnQ2hhbmdlUGxhbicpO1xyXG5cdCAgICAgIFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgQ2hhbmdlIFBsYW4gQ2xpY2snXSk7XHJcblx0ICAgICAgICBcdGJyZWFrO1xyXG5cdCAgICB9XHJcblx0fVxyXG5cdGV4cGFuZChwSWQ6YW55KXtcclxuXHRcdGlmKGpRdWVyeSgnIycrcElkKS5oYXNDbGFzcygncnMtaGlkZScpKVxyXG5cdFx0XHRqUXVlcnkoJyMnK3BJZCkucmVtb3ZlQ2xhc3MoJ3JzLWhpZGUnKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0alF1ZXJ5KCcjJytwSWQpLmFkZENsYXNzKCdycy1oaWRlJyk7XHJcblx0fVxyXG5cclxuXHRjb250YWN0VXMoKXtcclxuXHRcdGpRdWVyeShkb2N1bWVudCkuZmluZCgnLmludGVyY29tLWxhdW5jaGVyJykuY2xpY2soKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcblx0fVxyXG5cclxuXHRuZ09uQ2hhbmdlcygpe1xyXG5cdFx0dGhpcy5zdWJzLnB1c2godGhpcy5nZXRQbGFuU3Vic2NyaXB0aW9uKCkpO1xyXG5cdFx0dGhpcy5zdWJzLnB1c2godGhpcy5nZXRBbGxQbGFucygpKTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xyXG5cdH1cclxufVxyXG4iXX0=
