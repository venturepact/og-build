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
            fbq('track', 'Purchase', { value: _this.kmqTotalAmount.toString(), currency: 'USD' });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaXRlLytTZXR0aW5ncy9tZW1iZXJzaGlwL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBc0UsZUFBZSxDQUFDLENBQUE7QUFDdEYsc0JBQTZDLG1DQUFtQyxDQUFDLENBQUE7QUFDakYsNEJBQTRCLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsc0JBQW9CLGlDQUFpQyxDQUFDLENBQUE7QUFDdEQsNkJBQTJCLHdDQUF3QyxDQUFDLENBQUE7QUFDcEUseUJBQXVCLG9DQUFvQyxDQUFDLENBQUE7QUFDNUQsOEJBQThCLDBEQUEwRCxDQUFDLENBQUE7QUFDekYsc0JBQTJFLGdCQUFnQixDQUFDLENBQUE7QUFFNUYsc0JBQWdELG1DQUFtQyxDQUFDLENBQUE7QUFvQnBGO0lBOENDLCtCQUFvQixrQkFBcUMsRUFDaEQsWUFBeUIsRUFDMUIsRUFBYyxFQUNiLGNBQThCLEVBQzlCLGlCQUFtQztRQUp4Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ2hELGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQzFCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDYixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQWpENUMsNEJBQXVCLEdBQWtCLElBQUksMkJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxzQkFBaUIsR0FBVSxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUN4QixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFDOUIsMkJBQXNCLEdBQWtCLElBQUksMkJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxxQkFBZ0IsR0FBVSxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxpQkFBWSxHQUFPLEVBQUUsQ0FBQztRQUN0Qixr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Q0FBUyxHQUFUO1FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXJELENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsMkNBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQWxoQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFHLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLFFBQVEsRUFBRyxpQkFBaUI7WUFDNUIsV0FBVyxFQUFHLDZCQUE2QjtZQUMzQyxTQUFTLEVBQUcsQ0FBQyw0QkFBNEIsQ0FBQztZQUMxQyxTQUFTLEVBQUUsQ0FBQyx5QkFBaUIsRUFBRSxtQkFBVyxDQUFDO1lBQzNDLFVBQVUsRUFBRSxDQUFDLGdDQUF3QixDQUFDO1lBQ3RDLE1BQU0sRUFBQyxDQUFDLGdCQUFnQixFQUFDLFdBQVcsQ0FBQztZQUNyQyxPQUFPLEVBQUMsQ0FBQyxjQUFjLEVBQUMsY0FBYyxDQUFDO1NBQ3ZDLENBQUM7OzZCQUFBO0lBMGdCRiw0QkFBQztBQUFELENBeGdCQSxBQXdnQkMsSUFBQTtBQXhnQlksNkJBQXFCLHdCQXdnQmpDLENBQUEiLCJmaWxlIjoiYXBwL3NpdGUvK1NldHRpbmdzL21lbWJlcnNoaXAvc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgLCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge01lbWJlcnNoaXBTZXJ2aWNlLCBQbGFuU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHtTdWJzY3JpcHRpb25zfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL2N1cnJlbnRQbGFuJztcclxuaW1wb3J0IHtQbGFuc30gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21vZGVscy9wbGFucyc7XHJcbmltcG9ydCB7UGxhbkZlYXR1cmVzfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbW9kZWxzL3BsYW5GZWF0dXJlcyc7XHJcbmltcG9ydCB7RXN0aW1hdGV9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tb2RlbHMvZXN0aW1hdGUnO1xyXG5pbXBvcnQge051bWJlckZvcm1hdGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2hlbHBlci1zZXJ2aWNlL251bWJlci1mb3JtYXQnO1xyXG5pbXBvcnQge1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UsIFN1YkRvbWFpblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvaW5kZXgnO1xyXG5cclxuZGVjbGFyZSB2YXIgZ2E6IGFueTtcclxuZGVjbGFyZSB2YXIgX2ttcTogYW55O1xyXG5kZWNsYXJlIHZhciBqUXVlcnkgOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5kZWNsYXJlIHZhciBmYnE6IGFueTtcclxuLy8gZGVjbGFyZSB2YXIgTGVhZER5bm86IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkIDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yIDogJ29nLXN1YnNjcmlwdGlvbicsXHJcblx0dGVtcGxhdGVVcmwgOiAnc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHMgOiBbJ3N1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzJ10sXHJcblx0cHJvdmlkZXJzOiBbTWVtYmVyc2hpcFNlcnZpY2UsIFBsYW5TZXJ2aWNlXSxcclxuXHRkaXJlY3RpdmVzOiBbUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcclxuXHRpbnB1dHM6WydwYXltZW50X3N0YXR1cycsJ3VzZXJfcm9sZSddLFxyXG5cdG91dHB1dHM6Wydpc0NoYW5nZVBsYW4nLCdjaGFuZ2VUb1BsYW4nXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1YnNjcmlwdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxPbkNoYW5nZXMsT25EZXN0cm95IHtcclxuXHRydW5uaW5nUGxhblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb25zKG51bGwpO1xyXG5cdHJ1bm5pbmdQbGFuRGV0YWlsOiBQbGFucyA9IG5ldyBQbGFucyhudWxsKTtcclxuXHRydW5uaW5nUGxhbjpzdHJpbmcgPSAnJztcclxuXHRydW5uaW5nUGxhbkN5Y2xlOiBzdHJpbmcgPSAnJztcclxuXHRmdXR1cmVQbGFuU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbnMobnVsbCk7XHJcblx0ZnV0dXJlUGxhbkRldGFpbDogUGxhbnMgPSBuZXcgUGxhbnMobnVsbCk7XHJcblx0YWxsUGxhbnNMaXN0OmFueSA9IFtdO1xyXG5cdHZpZXdwbGFuc0xpc3Q6YW55ID0gW107XHJcblx0dmlld1BsYW46IHN0cmluZyA9ICdtJztcclxuXHRzdGFydGVyUGxhbkZlYXR1cmVzOmFueSA9IFtdO1xyXG5cdGJ1c2luZXNzUGxhbkZlYXR1cmVzOmFueSA9IFtdO1xyXG5cdGVudGVycHJpc2VQbGFuRmVhdHVyZXM6YW55ID0gW107XHJcblx0dXBncmFkZVRvUGxhbjogUGxhbnMgPSBuZXcgUGxhbnMobnVsbCk7XHJcblx0dXBncmFkZUJpbGxpbmdDeWNsZTpTdHJpbmcgPSAnJztcclxuXHRjb3Vwb25Db2RlOiBTdHJpbmcgPSAnJztcclxuXHRjb3Vwb25Db2RlTW9kYWw6IFN0cmluZyA9ICcnO1xyXG5cdGVzdGltYXRpb246IGFueSA9IHt9O1xyXG5cdGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdGxvYWRpbmdQbGFuczogYm9vbGVhbiA9IHRydWU7XHJcblx0bG9hZGluZ01lbURldDpib29sZWFuID0gdHJ1ZTtcclxuXHRjb3Vwb25Gb3JtOkZvcm1Hcm91cDtcclxuXHRlcnJvcjpib29sZWFuID0gZmFsc2U7XHJcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuXHRwYXltZW50X3N0YXR1czpTdHJpbmcgPSAnJztcclxuXHR1c2VyUm9sZTogc3RyaW5nID0gJ01BTkFHRVInO1xyXG5cdHBsYW5zVHlwZXM6YW55ID0gW107XHJcblx0cGxhbkZlYXR1cmVzOmFueSA9IFtdO1xyXG5cdGlzRG93YWdyYWRlOkJvb2xlYW4gPSBmYWxzZTtcclxuXHRzaG93OmJvb2xlYW4gPSB0cnVlO1xyXG5cdGlzQ2hhbmdlUGxhbiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHRjaGFuZ2VUb1BsYW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHRwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblx0RnJlZVBsYW5OYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcblx0ZXNzZW50aWFsc19tOm51bWJlciA9IDA7XHJcblx0YnVzaW5lc3NfbTpudW1iZXIgPSAwO1xyXG5cdGVudGVycHJpc2VfbTpudW1iZXIgPSAwO1xyXG5cclxuXHRrbXFBbW91bnREdWU6IGFueTtcclxuXHRrbXFBbW91bnRQYWlkOmFueTtcclxuXHRrbXFDcmVkaXRzQXBwbGllZDogYW55O1xyXG5cdGttcVRvdGFsQW1vdW50OmFueTtcclxuXHRtZW1iZXJzaGlwQ2FuY2VsOiBib29sZWFuID0gZmFsc2U7XHJcblx0aXNfYWRtaW5fY3JlYXRlZDpib29sZWFuID0gZmFsc2U7XHJcblx0aXNfc3ViY3JpcGlvbl9jYW5jZWxsZWQgOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9tZW1iZXJzaGlwU2VydmljZTogTWVtYmVyc2hpcFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIF9wbGFuU2VydmljZTogUGxhblNlcnZpY2UsXHJcblx0XHRwdWJsaWMgZmI6Rm9ybUJ1aWxkZXIsXHJcblx0XHRwcml2YXRlIF9jb29raWVTZXJ2aWNlIDogQ29va2llU2VydmljZSxcclxuXHRcdHByaXZhdGUgX3N1YkRvbWFpblNlcnZpY2U6IFN1YkRvbWFpblNlcnZpY2UpIHtcclxuXHR9O1xyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuY291cG9uRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG5cdFx0XHRjb3Vwb25JbnB1dDogW3RoaXMuY291cG9uQ29kZU1vZGFsLFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLm1pbkxlbmd0aCg1KV0pXVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0alF1ZXJ5KCcubW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0alF1ZXJ5KCcuZXN0aW1hdGUtdGFicycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0alF1ZXJ5KCcjc3Vic2NyaXB0aW9uLXRhYicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0alF1ZXJ5KCcjdGFiX2RlZmF1bHRfMScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0alF1ZXJ5KCcjZXJyb3ItVXBncmFkZVBsYW4nKS5odG1sKCcnKS5hZGRDbGFzcygnaGlkZScpO1xyXG5cdFx0XHR0aGlzLmNvdXBvbkNvZGUgPSAnJztcclxuXHRcdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5lcnJvciA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cdFx0XHR0aGlzLnVwZ3JhZGVCaWxsaW5nQ3ljbGUgPSAnJztcclxuXHRcdH0pO1xyXG5cdFx0Ly90aGlzLmdldFBsYW5zRmVhdHVyZXMoKTtcclxuXHRcdHRoaXMudXNlclJvbGUgPSB0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3JvbGUnKTtcclxuXHRcdGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2Rhc2hBdXRoVG9rZW4nKSlcclxuXHRcdFx0dGhpcy5pc19hZG1pbl9jcmVhdGVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9kYXNoQXV0aFRva2VuJykpLmlzX2FkbWluX2NyZWF0ZWQ7XHJcblx0XHRpZih0aGlzLmlzX2FkbWluX2NyZWF0ZWQgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5pc19hZG1pbl9jcmVhdGVkID1mYWxzZTtcclxuXHRcdGxldCBzdWJfZG9tYWluID0gdGhpcy5fc3ViRG9tYWluU2VydmljZS5zdWJEb21haW4uc3ViX2RvbWFpbjtcclxuICAgIFx0bGV0IGNvbXBhbnlBY2Nlc3MgPSBKU09OLnBhcnNlKHRoaXMuX2Nvb2tpZVNlcnZpY2UucmVhZENvb2tpZSgnZmlsZXBpY2tlcl90b2tlbl9qc29uJykpO1xyXG5cdFx0bGV0IHN1YnNjcmlwdGlvbl9zdGF0dXMgPSAnJztcclxuXHRcdGlmICghY29tcGFueUFjY2VzcylcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvbG9nb3V0JztcclxuXHRcdGVsc2VcclxuXHRcdGNvbXBhbnlBY2Nlc3MuZm9yRWFjaCgoZTogYW55KSA9PiB7XHJcblx0XHRcdGlmIChlLmtleSA9PT0gc3ViX2RvbWFpbikge1xyXG5cdFx0XHRzdWJzY3JpcHRpb25fc3RhdHVzID0gZS52YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQvKmlmKHN1YnNjcmlwdGlvbl9zdGF0dXM9PT0nY2FuY2VsbGVkJyl7XHJcblx0XHRcdHRoaXMuaXNfc3ViY3JpcGlvbl9jYW5jZWxsZWQgPSB0cnVlO1xyXG5cdFx0fSovXHJcblx0XHQvL2NvbnNvbGUubG9nKCclJSUlJSUlJSUlJSUnLHRoaXMuaXNfc3ViY3JpcGlvbl9jYW5jZWxsZWQsdGhpcy5pc19hZG1pbl9jcmVhdGVkLHRoaXMudXNlclJvbGUpO1xyXG5cdH1cclxuXHJcblx0Z2V0UGxhblN1YnNjcmlwdGlvbigpe1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0c2VsZi5sb2FkaW5nTWVtRGV0ID0gdHJ1ZTtcclxuXHRcdHJldHVybiBzZWxmLl9tZW1iZXJzaGlwU2VydmljZS5nZXRwbGFuU3Vic2NyaXB0aW9uKClcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoc3VjY2VzczogYW55KT0+e1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2dldFBsYW5TdWJzY3JpcHRpb24nLHN1Y2Nlc3MpO1xyXG5cdFx0XHRcdFx0c2VsZi5wYXltZW50X3N0YXR1cyA9IHN1Y2Nlc3MuY3VycmVudHBsYW4uY3VzdG9tZXIuY2FyZF9zdGF0dXM7XHJcblx0XHRcdFx0XHRzZWxmLnJ1bm5pbmdQbGFuU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbnMoc3VjY2Vzcy5jdXJyZW50cGxhbi5zdWJzY3JpcHRpb24pO1xyXG5cdFx0XHRcdFx0c2VsZi5ydW5uaW5nUGxhbkRldGFpbCA9IG5ldyBQbGFucyhzdWNjZXNzLmNwRGV0YWlsLnBsYW4pO1xyXG5cdFx0XHRcdFx0aWYoc2VsZi5ydW5uaW5nUGxhblN1YnNjcmlwdGlvbi5wbGFuX2lkICE9PSAnc3RhcnRlcicgJiYgc2VsZi5ydW5uaW5nUGxhblN1YnNjcmlwdGlvbi5wbGFuX2lkICE9PSAnZnJlZW1pdW0nKXtcclxuXHRcdFx0XHRcdFx0bGV0IGN5Y2xlID0gc2VsZi5ydW5uaW5nUGxhblN1YnNjcmlwdGlvbi5wbGFuX2lkLnNwbGl0KCdfJyk7XHJcblx0XHRcdFx0XHRcdHNlbGYucnVubmluZ1BsYW4gPSBjeWNsZVswXTtcclxuXHRcdFx0XHRcdFx0aWYoY3ljbGVbMV0gPT09ICdtJylcclxuXHRcdFx0XHRcdFx0XHRzZWxmLnJ1bm5pbmdQbGFuQ3ljbGUgPSAnTW9udGhseSc7XHJcblx0XHRcdFx0XHRcdGVsc2UgaWYoY3ljbGVbMV0gPT09ICdzJylcclxuXHRcdFx0XHRcdFx0XHRzZWxmLnJ1bm5pbmdQbGFuQ3ljbGUgPSAnSGFsZiBZZWFybHknO1xyXG5cdFx0XHRcdFx0XHRlbHNlIGlmKGN5Y2xlWzFdID09PSAneScpXHJcblx0XHRcdFx0XHRcdFx0c2VsZi5ydW5uaW5nUGxhbkN5Y2xlID0gJ1llYXJseSc7XHJcblx0XHRcdFx0XHRcdHNlbGYudmlld1BsYW4gPSBjeWNsZVsxXTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZihzdWNjZXNzLmZ1dHVyZXBsYW4pe1xyXG5cdFx0XHRcdFx0XHRzZWxmLmZ1dHVyZVBsYW5TdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9ucyhzdWNjZXNzLmZ1dHVyZXBsYW4uc3Vic2NyaXB0aW9uKTtcclxuXHRcdFx0XHRcdFx0c2VsZi5mdXR1cmVQbGFuRGV0YWlsID0gbmV3IFBsYW5zKHN1Y2Nlc3MuZnBEZXRhaWwucGxhbik7XHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0c2VsZi5mdXR1cmVQbGFuU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHNlbGYuZ2V0Vmlld1BsYW5zKHNlbGYudmlld1BsYW4pO1xyXG5cdFx0XHRcdFx0c2VsZi5sb2FkaW5nTWVtRGV0ID0gZmFsc2U7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KT0+e1xyXG5cdFx0XHRcdFx0Ly9nZXRQbGFuU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0XHRzZWxmLmxvYWRpbmdNZW1EZXQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblx0bnVtYmVyRm9ybWF0KG51bTpudW1iZXIpe1xyXG5cdFx0cmV0dXJuIE51bWJlckZvcm1hdGVyLmluc2VydENvbW1hcyhudW0pO1xyXG5cdH1cclxuXHJcblx0cmVBY3RpdmF0ZSgpe1xyXG5cdGlmKHRoaXMucGF5bWVudF9zdGF0dXMgPT0gJ25vX2NhcmQnICYmIHRoaXMudXBncmFkZVRvUGxhbi5pZCAhPT0gJ3N0YXJ0ZXInKXtcclxuXHRcdGxldCBkYXRhID0ge307XHJcblx0XHRcdFx0ZGF0YSA9IHtcclxuXHRcdFx0XHRcdCdiaWxsaW5nJzp7XHJcblx0XHRcdFx0XHRcdCdwbGFuX2lkJzp0aGlzLnVwZ3JhZGVUb1BsYW4uaWQsXHJcblx0XHRcdFx0XHRcdCdwcm9yYXRlJzp0cnVlLFxyXG5cdFx0XHRcdFx0XHQnZW5kX29mX3Rlcm0nOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHQnc3RhdHVzJzpmYWxzZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHRoaXMuY2hhbmdlVG9QbGFuLmVtaXQoZGF0YSk7XHJcblx0XHRcdHRoaXMuaXNDaGFuZ2VQbGFuLmVtaXQodHJ1ZSk7XHJcblx0XHRcdGpRdWVyeSgnI2NjLW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0alF1ZXJ5KCcjdXBncmFkZS1wbGFuLXBvcHVwJykubW9kYWwoJ2hpZGUnKTtcclxuXHR9ZWxzZXtcclxuXHRcdGpRdWVyeSgnLmJ0bk1ha2VQYXltZW50JykuaHRtbCgncGxlYXNlIFdhaXQuLi4nKS5hdHRyKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcblx0XHRsZXQgcmVhY3RpdmF0ZU1lbWJlcnNoaXAgPSB0aGlzLl9tZW1iZXJzaGlwU2VydmljZS5hY3RpdmF0ZU5vdygpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0d2luZG93LnRvYXN0Tm90aWZpY2F0aW9uKCdZb3UgaGF2ZSBTdWNjZXNzZnVsbHkgUmVhY3RpdmF0ZWQgJyk7XHJcblx0XHRcdFx0XHQvL3RoaXMuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5jb21wYW55QWNjZXNzKSwgMyk7XHJcblx0XHRcdFx0XHRsZXQgbWVtYmVyc2hpcCA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdmaWxlcGlja2VyX3Rva2VuX2pzb24nKSk7XHJcblx0XHRcdFx0XHRtZW1iZXJzaGlwWzFdLnZhbHVlID0gc3VjY2Vzcy5zdWJzY3JpcHRpb24uc3RhdHVzO1xyXG5cdFx0XHRcdFx0dGhpcy5fY29va2llU2VydmljZS5lcmFzZUNvb2tpZSgnZmlsZXBpY2tlcl90b2tlbl9qc29uJyk7XHJcblx0XHRcdFx0XHR0aGlzLl9jb29raWVTZXJ2aWNlLmNyZWF0ZUNvb2tpZSgnZmlsZXBpY2tlcl90b2tlbl9qc29uJyxKU09OLnN0cmluZ2lmeShtZW1iZXJzaGlwKSwzKTtcclxuXHRcdFx0XHRcdGxldCBzdG9yYWdlID0gSlNPTi5wYXJzZSh0aGlzLl9jb29raWVTZXJ2aWNlLnJlYWRDb29raWUoJ3N0b3JhZ2UnKSk7XHJcblx0XHRcdFx0XHRzdG9yYWdlLmNvbXBhbnkuYmlsbGluZy5jaGFyZ2ViZWVfcGxhbl9pZCA9IHN1Y2Nlc3Muc3Vic2NyaXB0aW9uLnBsYW5faWQ7XHJcblx0XHRcdFx0XHR0aGlzLl9jb29raWVTZXJ2aWNlLmVyYXNlQ29va2llKCdzdG9yYWdlJyk7XHJcblx0XHRcdFx0XHR0aGlzLl9jb29raWVTZXJ2aWNlLmNyZWF0ZUNvb2tpZSgnc3RvcmFnZScsSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSksMyk7XHJcblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGpRdWVyeSgnLmJ0bk1ha2VQYXltZW50JykuaHRtbCgnTWFrZSBQYXltZW50JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHRcdFx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gJ1N1YnNjcmlwdGlvbiBjYW5ub3QgYmUgcmUtYWN0aXZhdGVkIGFzIHlvdXIgY2FyZCBpcyBkZWNsaW5lJztcclxuXHRcdFx0XHRcdHJlYWN0aXZhdGVNZW1iZXJzaGlwLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0QWxsUGxhbnMoKXtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdHJldHVybiBzZWxmLl9tZW1iZXJzaGlwU2VydmljZS5nZXRQbGFucygpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0c2VsZi5hbGxQbGFuc0xpc3QgPSBbXTtcclxuXHRcdFx0XHRcdHN1Y2Nlc3MubGlzdHMubGlzdC5mb3JFYWNoKChsaXN0OmFueSk9PntcclxuXHRcdFx0XHRcdCBcdHNlbGYuYWxsUGxhbnNMaXN0LnB1c2gobmV3IFBsYW5zKGxpc3QucGxhbikpO1xyXG5cdFx0XHRcdFx0IFx0aWYobGlzdC5wbGFuLmlkID09PSAnZXNzZW50aWFsc19tJylcclxuXHRcdFx0XHRcdCBcdFx0c2VsZi5lc3NlbnRpYWxzX20gPSBsaXN0LnBsYW4ucHJpY2UvMTAwO1xyXG5cdFx0XHRcdFx0IFx0ZWxzZSBpZihsaXN0LnBsYW4uaWQgPT09ICdidXNpbmVzc19tJylcclxuXHRcdFx0XHRcdCBcdFx0c2VsZi5idXNpbmVzc19tID0gbGlzdC5wbGFuLnByaWNlLzEwMDtcclxuXHRcdFx0XHRcdCBcdGVsc2UgaWYobGlzdC5wbGFuLmlkID09PSAnZW50ZXJwcmlzZV9tJylcclxuXHRcdFx0XHRcdCBcdFx0c2VsZi5lbnRlcnByaXNlX20gPSBsaXN0LnBsYW4ucHJpY2UvMTAwO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRzZWxmLnBsYW5GZWF0dXJlcyA9IFtdO1xyXG5cdFx0XHRcdFx0c3VjY2Vzcy5wbGFucy5mb3JFYWNoKChwbGFuOmFueSk9PntcclxuXHRcdFx0XHRcdFx0c2VsZi5wbGFuRmVhdHVyZXMucHVzaChuZXcgUGxhbkZlYXR1cmVzKHBsYW4pKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0c2VsZi5nZXRWaWV3UGxhbnMoc2VsZi52aWV3UGxhbik7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KSA9PiB7XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKCdnZXRBbGxQbGFucyBlcnJvcicsZXJyb3IpO1xyXG5cdFx0XHRcdFx0Ly9nZXRBbGxQbGFucy51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblx0Z2V0Vmlld1BsYW5zKHZpZXdQbGFuOnN0cmluZyA9IG51bGwpe1xyXG5cdFx0dGhpcy5sb2FkaW5nUGxhbnMgPSB0cnVlO1xyXG5cdFx0aWYodmlld1BsYW4pXHJcblx0XHRcdHRoaXMudmlld1BsYW4gPSB2aWV3UGxhbjtcclxuXHRcdHRoaXMudmlld3BsYW5zTGlzdCA9IFtdO1xyXG5cdFx0aWYodGhpcy5hbGxQbGFuc0xpc3QubGVuZ3RoID4gMCl7XHJcblx0XHRcdHRoaXMuYWxsUGxhbnNMaXN0LmZvckVhY2goKHBsYW46YW55KT0+e1xyXG5cdFx0XHRcdGlmKHBsYW4uaWQgPT09ICdzdGFydGVyJyB8fCBwbGFuLmlkID09PSAnZnJlZW1pdW0nKVxyXG5cdFx0XHRcdFx0dGhpcy52aWV3cGxhbnNMaXN0LnB1c2gocGxhbik7XHJcblx0XHRcdFx0aWYocGxhbi5pZC5zcGxpdCgnXycpWzFdID09PSB0aGlzLnZpZXdQbGFuKVxyXG5cdFx0XHRcdFx0dGhpcy52aWV3cGxhbnNMaXN0LnB1c2gocGxhbik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmxvYWRpbmdQbGFucyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLkZyZWVQbGFuTmFtZSA9IHRoaXMudmlld3BsYW5zTGlzdFswXS5uYW1lO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dGhpcy5zdWJzLnB1c2godGhpcy5nZXRBbGxQbGFucygpKTtcclxuXHRcdH1cclxuXHR9XHJcblx0dG9DZWlsKHByOm51bWJlcil7XHJcblx0XHRyZXR1cm4gTWF0aC5jZWlsKHByKTtcclxuXHR9XHJcblx0bWFrZVBheW1lbnQoKXtcclxuXHRcdGlmKHRoaXMucGF5bWVudF9zdGF0dXMgPT0gJ25vX2NhcmQnICYmIHRoaXMudXBncmFkZVRvUGxhbi5pZCAhPT0gJ3N0YXJ0ZXInKXtcclxuXHRcdFx0bGV0IGRhdGEgPSB7fTtcclxuXHRcdFx0aWYodGhpcy51cGdyYWRlVG9QbGFuLmlkID09PSAnc3RhcnRlcicpe1xyXG5cdFx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0XHQnYmlsbGluZyc6e1xyXG5cdFx0XHRcdFx0XHRcInBsYW5faWRcIjp0aGlzLnVwZ3JhZGVUb1BsYW4uaWQsXHJcblx0XHRcdFx0XHRcdFwicHJvcmF0ZVwiOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcImVuZF9vZl90ZXJtXCI6dHJ1ZSxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9ZWxzZSBpZih0aGlzLmNvdXBvbkNvZGUgIT09ICcnKXtcclxuXHRcdFx0XHRkYXRhID0ge1xyXG5cdFx0XHRcdFx0J2JpbGxpbmcnOntcclxuXHRcdFx0XHRcdFx0J3BsYW5faWQnOnRoaXMudXBncmFkZVRvUGxhbi5pZCxcclxuXHRcdFx0XHRcdFx0J3Byb3JhdGUnOnRydWUsXHJcblx0XHRcdFx0XHRcdCdlbmRfb2ZfdGVybSc6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdFwiY291cG9uXCI6dGhpcy5jb3Vwb25Db2RlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0ZGF0YSA9IHtcclxuXHRcdFx0XHRcdCdiaWxsaW5nJzp7XHJcblx0XHRcdFx0XHRcdCdwbGFuX2lkJzp0aGlzLnVwZ3JhZGVUb1BsYW4uaWQsXHJcblx0XHRcdFx0XHRcdCdwcm9yYXRlJzp0cnVlLFxyXG5cdFx0XHRcdFx0XHQnZW5kX29mX3Rlcm0nOmZhbHNlLFxyXG5cdFx0XHRcdFx0XHQnc3RhdHVzJzp0cnVlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmNoYW5nZVRvUGxhbi5lbWl0KGRhdGEpO1xyXG5cdFx0XHR0aGlzLmlzQ2hhbmdlUGxhbi5lbWl0KHRydWUpO1xyXG5cdFx0XHRqUXVlcnkoJyNjYy1tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRcdGpRdWVyeSgnI3VwZ3JhZGUtcGxhbi1wb3B1cCcpLm1vZGFsKCdoaWRlJyk7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHR0aGlzLmlzQ2hhbmdlUGxhbi5lbWl0KGZhbHNlKTtcclxuXHRcdFx0dGhpcy5jaGFuZ2VUb1BsYW4uZW1pdCh7fSk7XHJcblx0XHRcdHRoaXMuY2hhbmdlU3Vic2NyaXB0aW9uKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGNoYW5nZVN1YnNjcmlwdGlvbigpe1xyXG5cdFx0bGV0IGRhdGE6YW55ID0ge307XHJcblx0XHRpZih0aGlzLnVwZ3JhZGVUb1BsYW4uaWQgPT09ICdzdGFydGVyJyl7XHJcblx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0J2JpbGxpbmcnOntcclxuXHRcdFx0XHRcdFwicGxhbl9pZFwiOnRoaXMudXBncmFkZVRvUGxhbi5pZCxcclxuXHRcdFx0XHRcdFwicHJvcmF0ZVwiOmZhbHNlLFxyXG5cdFx0XHRcdFx0XCJlbmRfb2ZfdGVybVwiOnRydWUsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fWVsc2UgaWYodGhpcy5jb3Vwb25Db2RlICE9PSAnJyl7XHJcblx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0J2JpbGxpbmcnOntcclxuXHRcdFx0XHRcdCdwbGFuX2lkJzp0aGlzLnVwZ3JhZGVUb1BsYW4uaWQsXHJcblx0XHRcdFx0XHQncHJvcmF0ZSc6dHJ1ZSxcclxuXHRcdFx0XHRcdCdlbmRfb2ZfdGVybSc6ZmFsc2UsXHJcblx0XHRcdFx0XHRcImNvdXBvblwiOnRoaXMuY291cG9uQ29kZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRkYXRhID0ge1xyXG5cdFx0XHRcdCdiaWxsaW5nJzp7XHJcblx0XHRcdFx0XHQncGxhbl9pZCc6dGhpcy51cGdyYWRlVG9QbGFuLmlkLFxyXG5cdFx0XHRcdFx0J3Byb3JhdGUnOnRydWUsXHJcblx0XHRcdFx0XHQnZW5kX29mX3Rlcm0nOmZhbHNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0alF1ZXJ5KCcuYnRuTWFrZVBheW1lbnQnKS5odG1sKCdwbGVhc2UgV2FpdC4uLicpLmF0dHIoJ2Rpc2FibGVkJyx0cnVlKTtcclxuXHRcdGxldCBjaGFuZ2VTdWJzY3JpcHRpb24gPSBzZWxmLl9tZW1iZXJzaGlwU2VydmljZS51cGRhdGVTdWJzY3JpcHRpb24oZGF0YSlcclxuXHRcdFx0LnN1YnNjcmliZShcclxuXHRcdFx0XHQoc3VjY2VzczogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRqUXVlcnkoJyN1cGdyYWRlLXBsYW4tcG9wdXAnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHRcdFx0c2VsZi5nZXRQbGFuU3Vic2NyaXB0aW9uKCk7XHJcblx0XHRcdFx0XHRqUXVlcnkoJy5idG5NYWtlUGF5bWVudCcpLmh0bWwoJ01ha2UgUGF5bWVudCcpLmF0dHIoJ2Rpc2FibGVkJyxmYWxzZSk7XHJcblx0XHRcdFx0XHR0aGlzLmVycm9yID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcjY2hhbmdlU3Vic2NyaXB0aW9uTWVzc2FnZScpLmh0bWwoJ1BsYW4gU3Vic2NyaWJlZCBTdWNjZXNzZnVsbHknKTtcclxuXHJcblx0XHRcdFx0XHRsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UodGhpcy5fY29va2llU2VydmljZS5yZWFkQ29va2llKCdzdG9yYWdlJykpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdG9yYWdlLmNvbXBhbnkuYmlsbGluZy5jaGFyZ2ViZWVfcGxhbl9pZCA9IGRhdGEuYmlsbGluZy5wbGFuX2lkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl9jb29raWVTZXJ2aWNlLmVyYXNlQ29va2llKCdzdG9yYWdlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX2Nvb2tpZVNlcnZpY2UuY3JlYXRlQ29va2llKCdzdG9yYWdlJyxKU09OLnN0cmluZ2lmeShzdG9yYWdlKSwzKTtcclxuXHJcblx0XHRcdFx0XHQvKj09PT0gVHJhY2tpbmcgY29kZSBhbmQgTGVhZCBEeW5vIFB1cmNoYXNlIGNvZGUgZ29lcyBoZXJlID09PT0qL1xyXG5cdFx0XHRcdFx0dGhpcy5rbXFBbW91bnREdWUgPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5rbXFBbW91bnRQYWlkID0gMDtcclxuXHRcdFx0XHRcdHRoaXMua21xQ3JlZGl0c0FwcGxpZWQgPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5rbXFUb3RhbEFtb3VudCA9IDA7XHJcblx0XHRcdFx0XHRpZihzdWNjZXNzLmludm9pY2UgJiYgc3VjY2Vzcy5pbnZvaWNlLmFtb3VudF9wYWlkICE9PSAwKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5rbXFBbW91bnRQYWlkID0gTWF0aC5yb3VuZChzdWNjZXNzLmludm9pY2UuYW1vdW50X3BhaWQvMTAwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKHN1Y2Nlc3MuaW52b2ljZSAmJiBzdWNjZXNzLmludm9pY2UuY3JlZGl0c19hcHBsaWVkICE9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMua21xQ3JlZGl0c0FwcGxpZWQgPSBNYXRoLnJvdW5kKHN1Y2Nlc3MuaW52b2ljZS5jcmVkaXRzX2FwcGxpZWQvMTAwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKHN1Y2Nlc3MuaW52b2ljZSAmJiBzdWNjZXNzLmludm9pY2UuYW1vdW50X2R1ZSAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmttcUFtb3VudER1ZSA9IE1hdGgucm91bmQoc3VjY2Vzcy5pbnZvaWNlLmFtb3VudF9kdWUvMTAwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKHN1Y2Nlc3MuaW52b2ljZSAmJiBzdWNjZXNzLmludm9pY2Uuc3ViX3RvdGFsICE9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMua21xVG90YWxBbW91bnQgPSBNYXRoLnJvdW5kKHN1Y2Nlc3MuaW52b2ljZS5zdWJfdG90YWwvMTAwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxldCBrbXFEYXRhID0ge1xyXG5cdCAgICAgIFx0XHRcdFx0J1RvdGFsIEFtb3VudCc6dGhpcy5rbXFUb3RhbEFtb3VudCxcclxuXHQgICAgICBcdFx0XHRcdCdBbW91bnQgUGFpZCc6IHRoaXMua21xQW1vdW50UGFpZCxcclxuXHQgICAgICBcdFx0XHRcdCdDcmVkaXRzIEFwcGxpZWQnOiB0aGlzLmttcUNyZWRpdHNBcHBsaWVkLFxyXG5cdCAgICAgIFx0XHRcdFx0J0Ftb3VudCBEdWUnOnRoaXMua21xQW1vdW50RHVlLFxyXG5cdCAgICAgIFx0XHRcdFx0J1BsYW4nOnRoaXMudXBncmFkZVRvUGxhbi5uYW1lXHJcblx0ICAgICAgXHRcdFx0fTtcclxuXHQgICAgICBcdFx0XHRsZXQgc3VicyA9IHN1Y2Nlc3Muc3Vic2NyaXB0aW9uID8gc3VjY2Vzcy5zdWJzY3JpcHRpb24gOiBudWxsO1xyXG5cdCAgICAgIFx0XHRcdGlmKHN1YnMpIHtcclxuXHQgICAgICBcdFx0XHRcdGxldCB1c2VyX3N0YXR1cyA9ICdUcmlhbCc7XHJcblx0XHQgICAgICAgICAgICAgICAgc3dpdGNoIChzdWJzLnN0YXR1cykge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICBjYXNlICdpbl90cmlhbCc6XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3N0YXR1cyA9ICdUcmlhbCc7XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWN0aXZlJzpcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfc3RhdHVzID0gJ1BhaWQnO1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1YnMucGxhbl9pZCA9PT0gJ3N0YXJ0ZXInKSB7IHVzZXJfc3RhdHVzID0gJ0ZyZWUnOyB9XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHRcdCAgICAgICAgICAgICAgICB9XHJcblx0XHQgICAgICAgICAgICAgICAgbGV0IGljZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ljZCcpKTtcclxuXHRcdCAgICAgICAgICAgICAgICBpZihpY2QpIHtcclxuXHRcdCAgICAgICAgICAgICAgICBcdGljZC5zdWJzY3JpcHRpb25fc3RhdHVzID0gdXNlcl9zdGF0dXM7XHJcblx0XHQgICAgICAgICAgICAgICAgXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWNkJywgSlNPTi5zdHJpbmdpZnkoaWNkKSk7XHJcblx0XHQgICAgICAgICAgICAgICAgfVxyXG5cdFx0ICAgICAgICAgICAgICAgIHdpbmRvdy5JbnRlcmNvbSgndXBkYXRlJywgeyAnc3Vic2NyaXB0aW9uX3N0YXR1cyc6IHVzZXJfc3RhdHVzIH0pXHJcblx0ICAgICAgXHRcdFx0fVxyXG5cdCAgICAgIFx0XHRcdGZicSgndHJhY2snLCAnUHVyY2hhc2UnLCB7dmFsdWU6IHRoaXMua21xVG90YWxBbW91bnQudG9TdHJpbmcoKSwgY3VycmVuY3k6ICdVU0QnfSk7XHJcblx0XHRcdFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdTdWJtaXQnLCAnU2V0dGluZ3NQbGFuQ2hhbmdlZCcpO1xyXG5cdCAgICAgIFx0XHRcdF9rbXEucHVzaChbJ3JlY29yZCcsICdTZXR0aW5ncyBQbGFuIENoYW5nZWQnLCBrbXFEYXRhXSk7XHJcblxyXG5cdCAgICAgIFx0XHRcdC8qbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdFx0XHRcdFx0aWYodXJsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIm91dGdyb3cuY29cIikgPj0gMCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgbGVhZER5bm9EYXRhID0ge1xyXG5cdFx0ICAgICAgXHRcdFx0XHRwdXJjaGFzZV9jb2RlOiAnVGlua2VyJyxcclxuXHRcdCAgICAgIFx0XHRcdFx0cHVyY2hhc2VfYW1vdW50OiAwXHJcblx0XHQgICAgICBcdFx0XHR9O1xyXG5cdFx0ICAgICAgXHRcdFx0aWYoc3VjY2Vzcy5pbnZvaWNlKSB7XHJcblx0XHQgICAgICBcdFx0XHRcdGxlYWREeW5vRGF0YS5wdXJjaGFzZV9jb2RlID0gc3VjY2Vzcy5pbnZvaWNlLmlkO1xyXG5cdFx0ICAgICAgXHRcdFx0XHRsZWFkRHlub0RhdGEucHVyY2hhc2VfYW1vdW50ID0gTWF0aC5yb3VuZChzdWNjZXNzLmludm9pY2Uuc3ViX3RvdGFsLzEwMCk7XHJcblx0XHQgICAgICBcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmKHRoaXMubWVtYmVyc2hpcENhbmNlbCkge1xyXG5cdFx0XHRcdFx0XHRcdExlYWREeW5vLnJlY29yZENhbmNlbGxhdGlvbihzdWNjZXNzLmN1c3RvbWVyLmVtYWlsKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRMZWFkRHluby5yZWNvcmRQdXJjaGFzZShzdWNjZXNzLmN1c3RvbWVyLmVtYWlsLCBsZWFkRHlub0RhdGEpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9Ki9cclxuXHRcdFx0XHRcdC8qPT09PT09PT09PT09PT09PT09Ki9cclxuXHJcblx0XHRcdFx0XHR3aW5kb3cudG9hc3ROb3RpZmljYXRpb24oJ1BsYW4gU3Vic2NyaWJlZCBTdWNjZXNzZnVsbHknKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdChlcnJvcjphbnkpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdFx0alF1ZXJ5KCcuYnRuTWFrZVBheW1lbnQnKS5odG1sKCdNYWtlIFBheW1lbnQnKS5hdHRyKCdkaXNhYmxlZCcsZmFsc2UpO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuXHRcdFx0XHRcdGNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblx0c2hvd0VzdGltYXRlTW9kYWwocGxhbjpQbGFucyxjYW5jZWw/OmJvb2xlYW4pe1xyXG5cdFx0aWYoY2FuY2VsKSB7XHJcblx0XHRcdHRoaXMubWVtYmVyc2hpcENhbmNlbCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHR0aGlzLmlzQ2hhbmdlUGxhbi5lbWl0KGZhbHNlKTtcclxuXHRcdHRoaXMuZ2V0VXBncmFkZUVzdGltYXRlKHBsYW4pO1xyXG5cdFx0alF1ZXJ5KCcjdXBncmFkZS1wbGFuLXBvcHVwJykubW9kYWwoJ3Nob3cnKTtcclxuXHR9XHJcblxyXG5cdGNhbmNlbE1lbWJlc2hpcCgpe1xyXG5cdFx0alF1ZXJ5KCcjY2FuY2VsTWVtYmVyc2hpcCcpLmh0bWwoJ1BsZWFzZSBXYWl0Li4uJykuYXR0cignZGlzYWJsZWQnLHRydWUpO1xyXG5cdFx0bGV0IGNhbmNlbE1lbWJlcnNoaXAgPSB0aGlzLl9tZW1iZXJzaGlwU2VydmljZS5jYW5jZWxNZW1iZXJzaGlwKClcclxuXHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdChzdWNjZXNzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRqUXVlcnkoJyNjYW5jZWxNZW1iZXJzaGlwJykuaHRtbCgnUmVxdWVzdCBTZW50Jyk7XHJcblx0XHRcdFx0alF1ZXJ5KCcjY2FuY2VsTWVtYmVyc2hpcCcpLmFkZENsYXNzKCdidG4tZGlzYWJsZScpO1xyXG5cdFx0XHRcdHdpbmRvdy50b2FzdE5vdGlmaWNhdGlvbignWW91ciBSZXF1ZXN0IHRvIENhbmNlbCB0aGUgbWVtYmVyc2hpcCBoYXZlIGJlZW4gcmVjZWl2ZWQuIFlvdSB3aWxsIGJlIHVwZGF0ZWQgdmlhIGVtYWlsJyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdChlcnJvcjphbnkpID0+IHtcclxuXHRcdFx0XHR0aGlzLmVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRjYW5jZWxNZW1iZXJzaGlwLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cdGdldFVwZ3JhZGVFc3RpbWF0ZShwbGFuOlBsYW5zKXtcclxuXHRcdHRoaXMubG9hZGluZyA9IHRydWU7XHJcblx0XHR0aGlzLnVwZ3JhZGVUb1BsYW4gPSBwbGFuO1xyXG5cdFx0bGV0IGN5Y2xlID0gdGhpcy51cGdyYWRlVG9QbGFuLmlkLnNwbGl0KCdfJylbMV07XHJcblx0XHRpZihjeWNsZSA9PT0gJ20nKVxyXG5cdFx0XHR0aGlzLnVwZ3JhZGVCaWxsaW5nQ3ljbGUgPSAnTW9udGhseSc7XHJcblx0XHRlbHNlIGlmKGN5Y2xlID09PSAncycpXHJcblx0XHRcdHRoaXMudXBncmFkZUJpbGxpbmdDeWNsZSA9ICdIYWxmIFllYXJseSc7XHJcblx0XHRlbHNlIGlmKGN5Y2xlID09PSAneScpXHJcblx0XHRcdHRoaXMudXBncmFkZUJpbGxpbmdDeWNsZSA9ICdZZWFybHknO1xyXG5cdFx0dGhpcy5jb3Vwb25Db2RlID0gJyc7XHJcblx0XHRpZihqUXVlcnkoJyNjb3Vwb25JbnB1dDp0ZXh0JykudmFsKCkgJiYgdGhpcy51cGdyYWRlVG9QbGFuLmlkICE9J3N0YXJ0ZXInKXtcclxuXHRcdFx0dGhpcy5jb3Vwb25Db2RlID0gdGhpcy5jb3Vwb25Gb3JtLnZhbHVlLmNvdXBvbklucHV0O1xyXG5cdFx0XHR0aGlzLmNvdXBvbkNvZGVNb2RhbCA9ICcnO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGRhdGEgPSB7fTtcclxuXHRcdGlmKHBsYW4uaWQgPT09ICdzdGFydGVyJyl7XHJcblx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0J3BsYW5faWQnOnBsYW4uaWQsXHJcblx0XHRcdFx0J3Byb3JhdGUnOmZhbHNlLFxyXG5cdFx0XHRcdCdlbmRfb2ZfdGVybSc6dHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fWVsc2UgaWYodGhpcy5jb3Vwb25Db2RlICE9PSAnJyl7XHJcblx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0J3BsYW5faWQnOnBsYW4uaWQsXHJcblx0XHRcdFx0J3Byb3JhdGUnOnRydWUsXHJcblx0XHRcdFx0J2VuZF9vZl90ZXJtJzpmYWxzZSxcclxuXHRcdFx0XHRcImNvdXBvblwiOnRoaXMuY291cG9uQ29kZVxyXG5cdFx0XHR9O1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGRhdGEgPSB7XHJcblx0XHRcdFx0J3BsYW5faWQnOnBsYW4uaWQsXHJcblx0XHRcdFx0J3Byb3JhdGUnOnRydWUsXHJcblx0XHRcdFx0J2VuZF9vZl90ZXJtJzpmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0bGV0IGdldFVwZ3JhZGVFc3RpbWF0ZSA9IHNlbGYuX21lbWJlcnNoaXBTZXJ2aWNlLmdldFVwZGF0ZUVzdGltYXRlKGRhdGEpXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KHN1Y2Nlc3M6IGFueSkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdHNlbGYuZXN0aW1hdGlvbiA9IG5ldyBFc3RpbWF0ZShzdWNjZXNzLmVzdGltYXRlKTtcclxuXHRcdFx0XHRcdHNlbGYubG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvciA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdFx0XHRcdGxldCBkdWVfYW1vdW50IDphbnk7XHJcblx0XHRcdFx0XHRkdWVfYW1vdW50ID0gc2VsZi5lc3RpbWF0aW9uLm5leHRfaW52b2ljZV9lc3RpbWF0ZSA/XHJcblx0XHRcdFx0XHRcdFx0ICAgICBzZWxmLmVzdGltYXRpb24ubmV4dF9pbnZvaWNlX2VzdGltYXRlLnRvdGFsOlxyXG5cdFx0XHRcdFx0XHRcdFx0IHNlbGYuZXN0aW1hdGlvbi5pbnZvaWNlX2VzdGltYXRlP3NlbGYuZXN0aW1hdGlvbi5pbnZvaWNlX2VzdGltYXRlLnRvdGFsOicnO1xyXG5cdFx0XHRcdFx0aWYoZHVlX2Ftb3VudD09PTApe1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzRG93YWdyYWRlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzRG93YWdyYWRlID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQoZXJyb3I6YW55KSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGpRdWVyeSgnLmJ0bk1ha2VQYXltZW50JykuaHRtbCgnTWFrZSBQYXltZW50JykuYXR0cignZGlzYWJsZWQnLGZhbHNlKTtcclxuXHRcdFx0XHRcdGlmKGVycm9yLmVycm9yLmVycl9tZXNzYWdlLmluZGV4T2YodGhpcy5jb3Vwb25Db2RlKSAhPSAtMSlcclxuXHRcdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSAnSW52YWxpZCBDb3Vwb24gJyArIHRoaXMuY291cG9uQ29kZTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvci5lcnJvci5lcnJfbWVzc2FnZTtcclxuXHRcdFx0XHRcdHRoaXMuY291cG9uQ29kZSA9ICcnO1xyXG5cdFx0XHRcdFx0Z2V0VXBncmFkZUVzdGltYXRlLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRcdFx0XHRzZWxmLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG5cdGNhbGxHQShvcHQ6IHN0cmluZykge1xyXG5cdCAgICBzd2l0Y2ggKG9wdCkge1xyXG5cdCAgICBcdGNhc2UgXCJTRUxFQ1RQTEFOXCI6XHJcblx0ICAgIFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdDbGljaycsICdTZWxlY3RQbGFuJyk7XHJcblx0ICAgIFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgU2VsZWN0IFBsYW4gQ2xpY2snXSk7XHJcblx0ICAgICAgICBcdGJyZWFrO1xyXG5cclxuXHQgICAgICBcdGNhc2UgXCJNQUtFUEFZTUVOVFwiOlxyXG5cdCAgICAgIFx0XHRnYSgnbWFya2V0dGluZ3RlYW0uc2VuZCcsICdldmVudCcsICdTZXR0aW5ncycsICdDbGljaycsICdNYWtlUGF5bWVudCcpO1xyXG5cdCAgICAgIFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgTWFrZSBQYXltZW50IENsaWNrJ10pO1xyXG5cdCAgICAgICAgXHRicmVhaztcclxuXHJcbiAgICAgICAgXHRjYXNlIFwiQ0hBTkdFQ1lDTEVcIjpcclxuXHQgICAgICBcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnQ2xpY2snLCAnQ2hhbmdlQ3ljbGUnKTtcclxuXHQgICAgICBcdFx0X2ttcS5wdXNoKFsncmVjb3JkJywgJ1NldHRpbmdzIENoYW5nZSBDeWNsZSBDbGljayddKTtcclxuXHQgICAgICAgIFx0YnJlYWs7XHJcblxyXG4gICAgICAgIFx0Y2FzZSBcIkNIQU5HRVBMQU5cIjpcclxuXHQgICAgICBcdFx0Z2EoJ21hcmtldHRpbmd0ZWFtLnNlbmQnLCAnZXZlbnQnLCAnU2V0dGluZ3MnLCAnQ2xpY2snLCAnQ2hhbmdlUGxhbicpO1xyXG5cdCAgICAgIFx0XHRfa21xLnB1c2goWydyZWNvcmQnLCAnU2V0dGluZ3MgQ2hhbmdlIFBsYW4gQ2xpY2snXSk7XHJcblx0ICAgICAgICBcdGJyZWFrO1xyXG5cdCAgICB9XHJcblx0fVxyXG5cdGV4cGFuZChwSWQ6YW55KXtcclxuXHRcdGlmKGpRdWVyeSgnIycrcElkKS5oYXNDbGFzcygncnMtaGlkZScpKVxyXG5cdFx0XHRqUXVlcnkoJyMnK3BJZCkucmVtb3ZlQ2xhc3MoJ3JzLWhpZGUnKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0alF1ZXJ5KCcjJytwSWQpLmFkZENsYXNzKCdycy1oaWRlJyk7XHJcblx0fVxyXG5cclxuXHRjb250YWN0VXMoKXtcclxuXHRcdGpRdWVyeShkb2N1bWVudCkuZmluZCgnLmludGVyY29tLWxhdW5jaGVyJykuY2xpY2soKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcblx0fVxyXG5cclxuXHRuZ09uQ2hhbmdlcygpe1xyXG5cdFx0dGhpcy5zdWJzLnB1c2godGhpcy5nZXRQbGFuU3Vic2NyaXB0aW9uKCkpO1xyXG5cdFx0dGhpcy5zdWJzLnB1c2godGhpcy5nZXRBbGxQbGFucygpKTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xyXG5cdH1cclxufVxyXG4iXX0=
