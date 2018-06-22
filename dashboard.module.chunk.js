webpackJsonp(["dashboard.module"],{

/***/ "./src/app/shared/services/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_service__ = __webpack_require__("./src/app/shared/services/base.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminService = (function (_super) {
    __extends(AdminService, _super);
    function AdminService(_http) {
        var _this = _super.call(this) || this;
        _this._http = _http;
        _this.getlogSubject = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["ReplaySubject"](2);
        return _this;
    }
    AdminService.prototype.getBasicGraph = function (data) {
        var getCompaniesUrl = this._url + '/admin/graph';
        return this._http.post(getCompaniesUrl, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.updateEmail = function (old_email, new_email, user_id) {
        var storage = this.readCookie('storage');
        storage = JSON.parse(storage);
        var data = {
            'emails': {
                'old_email': old_email,
                'new_email': new_email
            }
        };
        //console.log('email json', data);
        return this._http.put(this._url + '/admin/update/email/' + user_id, data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.updatePassword = function (new_password, user_id) {
        var data = {
            'new_password': new_password
        };
        return this._http.put(this._url + '/admin/update/password/' + user_id, data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.updateCompanyAddon = function (data, company_id) {
        return this._http.put(this._url + '/admin/company/addon/' + company_id, data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.verifyEmail = function (user_id) {
        return this._http.put(this._url + '/admin/email/verify/' + user_id, {}, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.setPasswordLink = function (user) {
        return this._http.get(this._url + '/admin/set_pwd_link/' + user, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.generatePasswordLink = function (user) {
        return this._http.get(this._url + '/admin/gen_pwd_link/' + user, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getEmailLogs = function (user, type) {
        return this._http.get(this._url + '/admin/user/emails/' + type + '/' + user, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getSiteSettings = function () {
        return this._http.get(this._url + '/admin/site/settings/', this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.updateSiteSettings = function (data) {
        return this._http.put(this._url + '/admin/site/settings/', data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getAllLeads = function (data) {
        return this._http.post(this._url + '/admin/leads', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.updateCompany = function (company, companyId) {
        var details = {};
        details = {
            'name': company.name,
            'sub_domain': company.sub_domain,
            'cname': company.cname,
            'current_referral_program': company.current_referral_program,
            'agency': company.agency,
            'is_admin_created': company.is_admin_created,
            'billing': {
                'chargebee_plan_id': company.chargebee_plan_id,
                'chargebee_subscription_id': company.chargebee_subscription_id,
                'chargebee_customer_id': company.chargebee_customer_id,
                'stripe_customer_id': company.stripe_customer_id
            },
            'integration': company.integration ? company.integration : false,
            'calculators': company.current_limit_calculators,
            'users': company.current_limit_users,
            'companies': company.current_limit_companies,
            'isAppSumo': company.isAppSumo,
            'referral': {
                'referralcandy_url': company.referral.referralcandy_url,
                'leaddyno_url': company.referral.leaddyno_url,
                'is_referralcandy_visible': company.referral.is_referralcandy_visible
            },
        };
        //console.log(companyId,'companycompanycompanycompanycompany',company);
        // console.log('detailsdetailsdetailsdetails',details);
        return this._http.put(this._url + '/admin/update/company/' + companyId, details, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getCouponsCode = function (data) {
        //console.log('datadatadata',data);
        return this._http.post(this._url + '/coupon/lists', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.createPromo = function (data) {
        console.log(this.post_options(), ">>>>>>>>>>>>>>>>>>");
        return this._http.post(this._url + '/coupon/create', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.deletePromocode = function (couponId) {
        return this._http.put(this._url + '/coupon/delete/' + couponId, {}, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.viewPromocode = function (couponId) {
        return this._http.get(this._url + '/coupon/show/' + couponId, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.editPromocode = function (couponId, data) {
        return this._http.put(this._url + '/coupon/update/' + couponId, data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.editMessage = function (data, type) {
        return this._http.put(this._url + '/hellobar/appsumo/' + type, data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getAllFeatures = function () {
        return this._http.post(this._url + '/features/get', this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.featureUpdate = function (data) {
        return this._http.post(this._url + '/features/update', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getCompanySuccessRate = function (data) {
        return this._http.post(this._url + '/admin/companies/successrate/', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getCompanyAppDetails = function (data) {
        return this._http.post(this._url + '/admin/companies/get_apps_stats', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getCompanyUserDetails = function (data) {
        return this._http.post(this._url + '/admin/companies/getusers/', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getCompaniesTrialStatus = function (data) {
        return this._http.post(this._url + '/admin/companies/get_companies_trialstats', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getUserDetailsFromIntercom = function (data) {
        return this._http.post(this._url + '/admin/get_user_from_intercom', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getCompanyIntegrations = function (data) {
        return this._http.post(this._url + '/admin/companies/get_integrations', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getAppIntegrations = function (data) {
        return this._http.post(this._url + '/admin/companies/get_integration_apps', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getLog = function (data) {
        console.log("In Observable", data);
        return this._http.post(this._url + '/admin/getLog', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.notifylogType = function (type) {
        console.log(type);
        this.getlogSubject.next(type);
    };
    AdminService.prototype.getlogType = function () {
        return this.getlogSubject.asObservable();
    };
    AdminService.prototype.getAppIntegrationLogs = function (data) {
        return this._http.post(this._url + '/admin/companies/get_apps_integration_logs', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getApps = function (data) {
        return this._http.post(this._url + '/admin/companies/getapps', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getCompanyProjects = function (sub_domain) {
        var URL = this._url + '/admin/company_projects/';
        return this._http.post(URL, { company: sub_domain }, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.exportDataToSheet = function (data) {
        return this._http.post(this._url + '/admin/exportToSheet', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.deleteUser = function (user) {
        var URL = this._url + '/admin/remove/company/' + user.user_company._id + '/user/' + user._id;
        return this._http.delete(URL, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.addNewMember = function (user, companyId) {
        var data = {
            name: user.memberName,
            email: user.memberEmail,
            role: user.memberRole
        };
        var URL = this._url + '/admin/add/company/' + companyId + '/user';
        return this._http.post(URL, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getChildCompanies = function (companyId) {
        return this._http.get(this._url + '/admin/company/' + companyId + '/child-company', this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getCustomJSApprovalsList = function (obj) {
        return this._http.post(this._url + '/admin/customJs-approvals', obj, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.setScriptStatus = function (data) {
        return this._http.post(this._url + '/admin/set-script-status', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.addSubAdmin = function (data) {
        return this._http.post(this._url + '/admin/subadmin', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getSubAdmin = function (data) {
        return this._http.post(this._url + '/admin/getsubadmin', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.updateBasicDetails = function (data, isAdmin) {
        if (isAdmin === void 0) { isAdmin = true; }
        var user_id = data.id;
        return this._http.put(this._url + '/users/' + user_id, data, this.put_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getAllAdminLogs = function (subadminId, data) {
        return this._http.post(this._url + '/admin/subadminlog/' + subadminId, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getLogById = function (logId) {
        return this._http.get(this._url + '/admin/subadminlog/' + logId, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getPromoCheckListItems = function (dataTableAttr) {
        return this._http.post(this._url + '/admin/promolists', dataTableAttr, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.savePromoCheckListItems = function (data) {
        return this._http.post(this._url + '/admin/promolist', data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.updatePromoCheckListItems = function (id, data) {
        return this._http.put(this._url + '/admin/promolist/' + id, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.deletePromoCheckListItems = function (id) {
        return this._http.delete(this._url + '/admin/promolist/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.getAppPromotionScore = function (appId) {
        return this._http.get(this._url + '/apps/score/' + appId, this.get_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AdminService.prototype.updateAppsAnalytics = function () {
        return this._http.get(this._url + '/admin/updateCalcAnalytics')
            .map(this.extractData)
            .catch(this.handleError);
    };
    return AdminService;
}(__WEBPACK_IMPORTED_MODULE_6__base_service__["a" /* BaseService */]));
AdminService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ "./src/app/site/components/+dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "body, h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4 {\r\n  font-family: 'montserratregular';\r\n}\r\n/* @import 'https://d2oxudod4wlkkb.cloudfront.net/calendar.css'; */\r\n@font-face {\r\n  font-family: 'Material Icons';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('MaterialIcons-Regular.eot');\r\n  src: local('Material Icons'), local('materialIcons-Regular'), url('materialIcons-Regular.woff2') format('woff2'), url('materialIcons-Regular.woff') format('woff'), url('materialIcons-Regular.ttf') format('truetype')\r\n}\r\n.material-icons {\r\n  font-family: 'Material Icons';\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  display: inline-block;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-wrap: normal;\r\n  white-space: nowrap;\r\n  direction: ltr;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-rendering: optimizeLegibility;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-feature-settings: 'liga';\r\n          font-feature-settings: 'liga'\r\n}\r\n@font-face {\r\n    font-family: 'Orkney';\r\n    src: url('orkney-regular-webfont.eot');\r\n    src: url('orkney-regular-webfont.eot?#iefix') format('embedded-opentype'),\r\n   url('orkney-regular-webfont.woff2') format('woff2'),\r\n   url('orkney-regular-webfont.woff') format('woff'),\r\n   url('orkney-regular-webfont.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n@font-face {\r\n    font-family: 'Orkney-Light';\r\n    src: url('orkney-light-webfont.eot');\r\n    src: url('orkney-light-webfont.eot?#iefix') format('embedded-opentype'),\r\n   url('orkney-light-webfont.woff2') format('woff2'),\r\n   url('orkney-light-webfont.woff') format('woff'),\r\n   url('orkney-light-webfont.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n@font-face {\r\n    font-family: 'Orkney-Bold';\r\n    src: url('orkney-bold-webfont.eot');\r\n    src: url('orkney-bold-webfont.eot?#iefix') format('embedded-opentype'),url('orkney-bold-webfont.woff2') format('woff2'),url('orkney-bold-webfont.woff') format('woff'),\r\n   url('orkney-bold-webfont.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n.np {padding: 0px;}\r\nbody {font-family: montserratregular;}\r\n/**************************/\r\n.dashboard-container {margin: 0 auto;max-width: 1460px; width: 100%}\r\n.new-dashboard .dashboard-left-part ,   .new-dashboard .dashboard-right-part {float: left;max-width: 260px;width: 100%;}\r\n.new-dashboard .common-outer .heading{color: #666; font-size: 12px; text-transform: uppercase; float: left; padding: 0; font-family: 'montserratregular' !important;}\r\n.new-dashboard .common-outer .head-section{padding: 12px 15px; border:0px;}\r\n.new-dashboard .add-user-cta{    float: right;width: auto;border: 0px;border-radius: 0;margin-left: 0;background: transparent;color: #fff;height: auto;text-align: center;position: relative;line-height: 0;padding-top: 0;}\r\n.new-dashboard .add-user-cta i{font-size: 14px}\r\n.new-dashboard a.add-user-cta .popover-block{position: absolute; left: 50%; -webkit-transform: translateX(-50%); transform: translateX(-50%); line-height: 1.2; top:20px;}\r\n.new-dashboard  .users-outer{padding: 0 15px 0px; float: left; margin-bottom: 15px; width: 100%;display: -webkit-box;   display: -ms-flexbox;   display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center}\r\n.new-dashboard  .users{width: 45px; height: 45px;display: -webkit-box;   display: -ms-flexbox;   display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; background: #539cee; border: 1px solid #539cee; font-size: 20px; color: #fff; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; padding: 0; margin: 0}\r\n.new-dashboard  .user-name-outer{width: calc(100% - 45px); padding-left: 20px; display: -webkit-box;   display: -ms-flexbox;   display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center}\r\n.new-dashboard  .user-name-outer h5{margin: 0 0 3px 0; font-size: 13px; color: #666; font-family: 'montserratregular' !important;}\r\n.new-dashboard span.user-email{color:#539cee !important;font-size: 11px;float: left; width: 100%; }\r\n.new-dashboard .common-user-outer{float: left; width: 100%}\r\n.new-dashboard .common-outer {float: left;width: 100%;background: #fff;border-radius: 0px;border: 1px solid #d9e0e4;margin-bottom: 30px;}\r\n.new-dashboard  .user-name-outer h5 span{color: #1f2532 !important; margin-left:5px;font-size: 10px;font-family: montserratlight;text-transform: uppercase;opacity: 0.5;}\r\n.new-dashboard  .users-outer.manager .users{background: #6fcb94; border-color: #6fcb94;}\r\n.new-dashboard   .dashboard-main-part {float: left;padding: 0 45px;width: calc(100% - 520px);}\r\n.new-dashboard  .dashboard-content{float: left; width:100%}\r\n.new-dashboard  .new-select-template.select-template-block{width: 100%; margin: 0 0 20px 0; border: 1px solid #d9e0e4;float: left; background:  #fff; padding:  0px;display: block}\r\n.new-dashboard  .new-select-template.select-template-block .text-template-block{float: LEFT; width: 100%;  padding: 0px 20px;}\r\n.new-dashboard  .new-select-template.select-template-block .text-template-block h4{font-size: 14px; text-transform: uppercase; color: #555;margin:0px;padding: 15px 0 0px 0; float: left; width: 100%; font-weight: normal; font-family: 'montserratbold' !important;}\r\n.new-dashboard .template-option {float: left;width: 100%;display: -webkit-box;   display: -ms-flexbox;   display: flex;}\r\n.new-dashboard .template-option .temaplate-cont-part {margin: 0; padding: 0; -webkit-box-flex: 1; -ms-flex: 1; flex: 1}\r\n.new-dashboard .template-option .temaplate-cont-part .center-cont{padding:  15px 20px;float: left;width:100%; border: 1px solid transparent; border-radius: 0px}\r\n.new-dashboard .template-option .temaplate-cont-part .center-cont label.check-icon{padding: 0px; margin: 0; float: left;line-height: 1;position: relative;margin: 0;}\r\n/* .select-template-block .calquiz-block .center-cont:hover, .select-template-block .calquiz-block .center-cont.active {background:transparent;  border-color:#a7cbe1; transition: 0.5s; box-shadow: 0px 0px 10px rgba(0,0,0,0.15)} */\r\n.new-dashboard .new-select-template.select-template-block .center-cont .check-icon .calc-quiz-margin h3{font-size: 13px; text-transform: capitalize; color: #888; margin: 0px; display: -webkit-box;   display: -ms-flexbox;   display: flex; -webkit-transition:color 0.5s; transition:color 0.5s; -webkit-box-align: center; -ms-flex-align: center; align-items: center}\r\n.new-dashboard .new-select-template.select-template-block  .animated-icon i {color: #fb5f66;}\r\n.new-dashboard .new-select-template.select-template-block .check-icon label span.animated-icon.animated-calc i {padding: 0 !important;font-size: 20px !important;}\r\n.new-dashboard  .new-select-template.select-template-block .over-cont.res-outer{position: absolute;background: #fff;left: -21px;right: -21px;top: 30px;padding-left: 22px;border: 1px solid #eee;z-index: 100;border-top: 0;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;-webkit-box-shadow:0px 10px 15px 0px rgba( 0, 0, 0,0.15 );box-shadow:0px 10px 15px 0px rgba( 0, 0, 0,0.15 ); }\r\n.new-dashboard .temp-cards-outer-main  .card-shd-outer {float: left;width: 100%;border: 1px solid #d9e0e4; margin-bottom: 20px;    padding: 35px;background: #fff;}\r\n.new-dashboard .temp-cards-outer-main  .card-shd-outer  .temp-card{float: left; width: 100%;     margin-bottom: 30px;background:  transparent}\r\n.new-dashboard  .temp-card .name-outer{ float: left; width:100%; padding: 0px;display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;  line-height: 20px; text-align: left; padding-left: 0px;}\r\n.new-dashboard .temp-cards-outer-main  .card-shd-outer  .temp-card:last-child{margin-bottom: 0px;}\r\n.new-dashboard  .temp-card  a.img-temp {float: left;width: 100%;position: relative;left: 0;top: 0;bottom: 0;background-size: cover;background-repeat: no-repeat;height: 100%;background-position: center;}\r\n.new-dashboard  .temp-card  .temp-card-content {float: left;width: 100%;position: relative;display: -webkit-box;   display: -ms-flexbox;   display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}\r\n.new-dashboard  .temp-card  .temp-img {float: left;width: 235px;height: 145px;position: relative;overflow:hidden;-webkit-transition:  border-color 0.5s;transition:  border-color 0.5s; border: 1px solid #dce2e6;padding: 4px;}\r\n.new-dashboard  .temp-card .temp-info{float: left; width: calc(100% - 235px); padding-left: 35px}\r\n.new-dashboard .temp-card h6.cal-type{float:left;width:100%;margin:0;color:#539cee;text-transform:uppercase;font-size:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}\r\n.new-select-template.select-template-block  .temaplate-cont-part .center-cont:hover{border-color: #a7cbe1; -webkit-transition: 0s; transition: 0s;}\r\n.new-select-template.select-template-block  .temaplate-cont-part .center-cont:hover .over-cont.res-outer{ border-color: #ccc}\r\n.new-dashboard  .temp-card h6.cal-type i{font-size: 14px; margin-right: 5px}\r\n.new-dashboard  .temp-card h5.cal-name {float: left;width: 100%;font-size: 24px;color: #666;margin: 5px 0; font-family: montserratlight;word-break: break-word;}\r\n.new-dashboard  .temp-card h5.cal-name a{ color: #666; -webkit-transition: color 0.5s; transition: color 0.5s}\r\n.new-dashboard  .temp-card h5.cal-name a:hover{color: #fb5f66; -webkit-transition: color 0.5s; transition: color 0.5s}\r\n.new-dashboard .temp-status-bar {float: left;width: 100%;border-top: 1px solid #f2f2f2;margin: 10px 0 0 0;padding: 10px 0 0;}\r\n.new-dashboard  .leads-outer , .new-dashboard  .uv-outer{float: right; margin-left: 10px;}\r\n.new-dashboard .leads-outer>span,.new-dashboard .uv-outer>span{text-align:center;text-transform:uppercase;font-size:10px;padding:4px 13px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;height:22px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid #d9e0e4;border-radius:50px; overflow: hidden; padding-right: 20px; position: relative;z-index:10}\r\n.new-dashboard  .leads-outer > span i , .new-dashboard  .uv-outer > span i{font-size: 13px; margin-right: 5px;}\r\n.new-dashboard  .temp-card .last-edited{ float: left; width:100%; color: #a8a9ac; font-size: 11px;font-family: montserratlight; margin-bottom:0px;  }\r\n.new-dashboard  .temp-card .status-outer {float: left;}\r\n.new-dashboard  .temp-card .status-outer span{ color: #fff;text-align: center;text-transform: uppercase;font-size: 10px;padding: 4px 13px;background: #fb5f66;border: 1px solid #fb5f66;border-radius: 50px;}\r\n.new-dashboard  .temp-card .status-outer span.draft {background: #539cee; border-color:#539cee }\r\n.new-dashboard  .temp-card  .dp-icon-outer > span {     color: #fff;text-align: center;text-transform: uppercase;font-size: 10px;padding: 0px 4px;background: #62696d;border: 1px solid #62696d;border-radius: 50px;float: left;display: -webkit-box;   display: -ms-flexbox;   display: flex;cursor: pointer;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}\r\n.new-dashboard  .temp-card  .dp-icon-outer {position: absolute;right: 0;top: 0;opacity: 0; height:30px;-webkit-transition: opacity 0.5s;transition: opacity 0.5s;visibility: hidden;z-index: 11;}\r\n.new-dashboard  .temp-card:hover  .dp-icon-outer {  opacity: 1;-webkit-transition: opacity 0.5s;transition: opacity 0.5s;visibility: visible}\r\n.new-dashboard  .temp-card:hover  .temp-img a.img-temp{-webkit-transform: scale(1.3);transform: scale(1.3);-webkit-transition:  0.5s ease-out;transition:  0.5s ease-out;  }\r\n.new-dashboard  .temp-card .temp-img a.img-temp{-webkit-transform: scale(1);transform: scale(1);-webkit-transition: 0.5s ease-out;transition: 0.5s ease-out;  }\r\n.new-dashboard .cal-type .caltag{display: -webkit-box;   display: -ms-flexbox;   display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center}\r\n.new-dashboard  .temp-card  .dp-icon-outer > span i {color: #fff;line-height: 1; font-size: 16px;}\r\n.new-dashboard  .temp-card  .new-dropdown-menu { position: absolute;top: 25px !important; float: left; text-transform: uppercase; background: #62696d;  color: #fff;  -webkit-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);  display: none;  padding: 10px 0;  z-index: 9;  border-radius: 4px !important;  min-width: 125px;  margin-left:0; left: auto; right: 0;z-index: 100;}\r\n.new-dashboard  .temp-card  .dp-icon-outer:hover  .new-dropdown-menu {display: block;}\r\n.new-dashboard span.total-count {margin-right: 0px;float: left;text-transform: capitalize;font-size: 11px;-webkit-transition: 0.5s;transition: 0.5s; width: 0px; opacity: 0;white-space: nowrap; font-family: montserratregular;}\r\n/* .new-dashboard  .leads-outer > span:hover span.total-count , .new-dashboard  .uv-outer > span:hover span.total-count {font-size: 11px;transition:font-size 0.6s ease-in-out 0.1s;} */\r\n.new-dashboard .calquiz-outr {float: none;width: 100%;max-width: 630px;margin: 0 auto;}\r\n.new-dashboard .calquiz-outr.select-template-block .center-cont{display: table;background: #fff; border-radius: 0px;padding: 20px;  border:1px solid #d9e0e4;  -webkit-transition: 0.5s;  transition: 0.5s;height: 100%;  cursor: pointer;   text-align: left; -webkit-box-shadow: 0px 0px 15px 0px rgba( 0, 0, 0,0.1 ); box-shadow: 0px 0px 15px 0px rgba( 0, 0, 0,0.1 );}\r\n.new-dashboard .calquiz-outr.select-template-block.calquiz-block .check-icon{    display:table-cell; vertical-align: top; padding: 20px; }\r\n.new-dashboard .calquiz-outr.select-template-block .center-cont  .check-icon{padding: 0; margin: 0}\r\n.calquiz-block {margin-bottom: 30px;}\r\n.new-dashboard .artical-outer{float: left;width: 100%; padding: 5px 15px 10px;  line-height: 20px;  text-align: left; font-size: 13px; }\r\n.new-dashboard .artical-text{ float: left; width: calc(100% - 45px);min-height: 45px; padding-left: 10px; display: -webkit-box;   display: -ms-flexbox;   display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center;}\r\n.new-dashboard .artical-img-outer{width:45px; height: 45px;  border-radius: 50px; color: #cbd1d4; text-align: center;  padding-top: 0px;  margin-right: 0px; position:relative; overflow: hidden; float: left;}\r\n.new-dashboard .artical-img-outer .img-section { height: 45px; width: 45px; background-repeat: no-repeat; position: absolute; top:0; background-size: cover; border-radius: 50%; overflow: hidden;}\r\n.new-dashboard .calquiz-outr.select-template-block .calc-quiz-margin h3{font-size: 14px; display:-webkit-box; display:-ms-flexbox; display:flex;-webkit-box-align: center ;-ms-flex-align: center ;align-items: center ;color: #888888; margin: 0px 0 25px 0}\r\n.new-dashboard .select-template-block  .calc-quiz-margin h3 i{margin-right: 5px; color: #fb5f66; font-size: 20px;}\r\n.new-dashboard .select-template-block  ul.cont-list {  float: left;  width: 100%;  margin: 0;}\r\n.new-dashboard .select-template-block  ul.cont-list li{font-size: 11px;float:left; width:100%;opacity: 1; margin-bottom:4px; color:#888; position: relative; padding-left: 15px;   line-height: 18px;font-family: montserratlight}\r\n.new-dashboard .select-template-block  ul.cont-list li::after{position: absolute; content: \"\\f1db\"; font-family: FontAwesome;font-size: 8px; left:0; top:0; opacity:0.4}\r\n.select-template-block h3.example-heading {  color: #888;  font-size: 11px;  margin: 0 0 10px 0;  float: left;  width: 100%;}\r\n.new-dashboard .select-template-block  .calc-quiz-margin {  float: left;  width: 100%;}\r\n.select-template-block  .active .res-outer {  display: none;}\r\n.new-dashboard .select-template-block h4 {  float: left;  width: 100%;   color: #555555;   text-transform: uppercase;  margin:0px 0 25px 0;  font-size: 14px; padding: 0 15px; font-weight: bold;}\r\n.pdtop15{padding-top:15px }\r\n.select-template-block   .center-cont.active  .calc-quiz-margin h3{margin-bottom:0;}\r\n.artical-text a{color: #666;  font-size: 12px; line-height:17px;font-family: montserratlight; }\r\n.artical-text a:hover{color: #fb5f66;  }\r\n.temaplate-cont-part  .center-cont{padding: 10px}\r\n.common-outer.custom-quiz {padding: 20px;text-align: center;}\r\n.common-outer.custom-quiz a , .referral-ui .btn-red-rounded {display:inline-block;float:none;text-transform:capitalize;font-size:13px;background:#fb5f66;min-width:99px;min-height:auto;margin-top:15px;width:auto!important; border-radius:3px;padding:12px 15px;line-height:1;font-family:montserratregular}\r\n.common-outer.custom-quiz h5{float:left;width:100%;font-size:16px;margin:15px 0 0;color:#1f2532}\r\n.custom-quiz-icons img{max-height: 75px; max-width: 100%;}\r\n.custom-quiz-icons {float: left;width: 100%;}\r\n/* .new-dashboard .temp-card .temp-img:hover{border-color:#fb5f66; transition:  border-color 0.5s } */\r\n/**********************new dashboard end ***************/\r\n.help-tip{display:inline-block;vertical-align:middle;position:relative;margin:0;cursor:default}\r\n.dashboard-helptip{margin-left:3px;margin-top:-2px;line-height:9px}\r\n.dashboard-helptip:hover i{color:#fb5f66!important}\r\n.dashboard-helptip.help-tip i{color:#bec5c9;font-size:13px;line-height:15px;cursor:pointer}\r\n.dashboard-helptip .help-checktip,.help-checktip{font-size:10px;text-align:left;font-family:montserratlight}\r\n.dashboard-helptip .help-checktip{top:16px;left:-50px;padding:9px;width:157px;white-space:normal;text-transform:none}\r\n.help-checktip{float:left;background-color:#61696C;color:#fff;padding:8px 11px;width:180px;position:absolute;top:20px;border-radius:0;visibility:hidden;-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.5);box-shadow:0 1px 2px 0 rgba(0,0,0,.5);left:-70px;line-height:1.42857143}\r\n.help-checktip:before{content:'';position:absolute;top:100%;left:50%;margin-left:-8px;width:10px;height:10px;border-top:6px solid #61696C;border-right:6px solid transparent;border-left:6px solid transparent}\r\n.dashboard-helptip .help-checktip:before{border:none}\r\n.dashboard-helptip.help-tip:hover>.help-checktip{visibility:visible;z-index:999}\r\n.user-outr{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0;-ms-flex-wrap:wrap;flex-wrap:wrap}\r\n.user-outr li{float:left}\r\n.user-outr li a{float:left;width:auto;border:2px solid #dae2e6;border-radius:50%;margin-left:5px;margin-bottom:5px}\r\n.user-outr li a i{font-size:18px;padding-top:3px}\r\n.user-outr li a span,.user-outr li a.single-user{text-align:center;font-size:16px;text-transform:uppercase}\r\n.user-outr li a:hover{border:2px solid #fb5f66}\r\n.user-outr li a img{float:left;width:34px;height:34px;border-radius:50%}\r\n.user-outr li a span{float:none;padding-top:1px;color:#fb5f66;display:inline-block}\r\n.user-outr li a.more-users{float:left;width:35px;border:2px solid #dae2e6;border-radius:50%;margin-left:5px;margin-bottom:5px;background:#fff;color:#dae2e6;height:35px;text-align:center;padding-top:3px;margin-top:3px}\r\n.user-outr li a.more-users:hover{color:#fb5f66;border:2px solid #fb5f66}\r\n.user-outr li a.single-user{width:34px;height:34px;float:left;padding-top:6px;color:#fb5f66}\r\n/* Start: popover effect */\r\n.popover-wrapper .more-popover-block{position:relative;top:10px;left:-96px;min-width:140px;padding:8px;font-size:12px;background:#62696d;border-radius:4px!important;border:none;-webkit-box-shadow:0 3px 5px 0 rgba(0,0,0,.24);box-shadow:0 3px 5px 0 rgba(0,0,0,.24);display:none;z-index:9}\r\n.popover-wrapper:hover .more-popover-block{display:block;float:left;padding:0}\r\n.popover-wrapper .more-popover-block:before{position:absolute;top:-8px;right:23px;display:inline-block;border-right:6px solid transparent;border-bottom:8px solid #62696d;border-left:6px solid transparent;border-bottom-color:#62696d;content:''}\r\n.popover-wrapper .single-user.more-popover-block{position:relative;top:18px;left:-36px;min-width:100px;max-width:100px;padding:8px;font-size:12px;background:#62696d;border-radius:4px!important;border:none;-webkit-box-shadow:0 3px 5px 0 rgba(0,0,0,.24);box-shadow:0 3px 5px 0 rgba(0,0,0,.24);display:none;z-index:9}\r\n.popover-wrapper:hover .single-user.more-popover-block{display:block;float:left;padding:0}\r\n.popover-wrapper .single-user.more-popover-block:before{position:absolute;top:-8px;right:42px;display:inline-block;border-right:6px solid transparent;border-bottom:8px solid #62696d;border-left:6px solid transparent;border-bottom-color:#62696d;content:''}\r\n.popover-wrapper .single-user.more-popover-block p{float:left;width:100%;text-align:center;color:#fff;font-size:12px;margin:0;padding:6px 6px 0}\r\n.popover-wrapper .single-user.more-popover-block label{float:left;width:100%;margin:0;font-size:11px;text-align:center;padding:0 6px 6px}\r\n/* End: popover effect */\r\n.more-users .more-popover-block ul{float:left;margin:10px 0;padding:0;width:100%}\r\n.more-users .more-popover-block ul li{float:left;width:100%}\r\n.more-users .more-popover-block ul li a{float:left;border:none;width:100%;padding:10px;margin:0}\r\n.more-users .more-popover-block ul li a.hvr-sweep-to-right:before{background:#71787b}\r\n.more-users .more-popover-block ul li a span{float:left;border:none;width:30px;height:30px;border-radius:50%;text-align:center;background:#f6f8f9;font-size:14px;padding-top:5px}\r\n.more-users .more-popover-block ul li a .more-users-list{float:left;width:66%;margin-left:10px}\r\n.more-users .more-popover-block ul li a .more-users-list p{float:left;width:100%;text-align:left;color:#fff;font-size:12px;margin:0}\r\n.more-users .more-popover-block ul li a .more-users-list label{float:left;width:100%;margin:0;padding:0;font-size:11px;text-align:left}\r\n.user-outr li a.add-user{float:left;width:35px;border:2px solid #fb5f66;border-radius:50%;margin-left:5px;margin-bottom:5px;background:#fb5f66;color:#fff;height:35px;text-align:center;padding-top:3px;margin-top:3px}\r\n/* switch new css (sahil) */\r\n.onoffswitch{position:relative;width:80px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}\r\n.onoffswitch-checkbox{display:none}\r\n.onoffswitch-label{display:block;overflow:hidden;cursor:pointer;border-radius:20px}\r\n.onoffswitch-inner{display:block;width:200%;margin-left:-100%;-webkit-transition:margin .3s ease-in 0s;transition:margin .3s ease-in 0s}\r\n.onoffswitch-inner:after,.onoffswitch-inner:before{display:block;float:left;width:50%;height:20px;padding:0;line-height:20px;font-size:13px;-webkit-box-sizing:border-box;box-sizing:border-box}\r\n.onoffswitch-inner:before{content:\"Public\";padding-left:10px;background-color:#fb5f66;color:#FFF;font-weight:400}\r\n.onoffswitch-inner:after{content:\"Private\";padding-right:10px;background-color:#EEE;color:#999;text-align:right}\r\n.onoffswitch-switch{display:block;width:14px;height:14px;margin:3px;background:#FFF;position:absolute;top:0;bottom:0;right:56px;border-radius:20px;-webkit-transition:all .3s ease-in 0s;transition:all .3s ease-in 0s}\r\n.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-inner{margin-left:0}\r\n.onoffswitch-checkbox:checked+.onoffswitch-label .onoffswitch-switch{right:0}\r\n/* Preloader */\r\n.preloader{position:fixed;top:0;left:0;right:0;bottom:0;background-color:#fff;z-index:9999}\r\n.status{width:200px;height:200px;position:absolute;left:50%;top:50%;/*background-image:url(../../../assets/images/loaders/logoAnim.gif);*/background-repeat:no-repeat;background-position:center;margin:-100px 0 0 -100px}\r\n.dash-box-new.dash-box-bottom{background:#fff;width:100%;border:1px solid #dae2e6;border-top:0;padding:5px 28px;float:left}\r\n.dash-box-new.dash-box-bottom ul{width:100%}\r\n.dummy-switch,.dummy-switch.red{width:70px;height:20px;line-height:20px;font-size:13px;display:block;float:right;border-radius:40px;margin-bottom:10px;text-align:center}\r\n.dummy-switch{background:#eee;color:#999}\r\n.dummy-switch.red{background:#fb5f66;color:#fff}\r\n.dash-box-send,.dummy-switch span{border-radius:50%;position:relative;display:inline-block}\r\n.dummy-switch p{float:left;width:100%}\r\n.dummy-switch span{height:14px;width:14px;background:#fff;top:3px;float:left;right:3px}\r\n.dash-box-send{height:65px;width:65px;background:rgba(255,255,255,.2);float:none;text-align:center;padding-top:20px;z-index:9}\r\n.dash-box-send i{float:none;font-size:26px;color:#fff;padding-left:5px}\r\n.dash-top2-text .dash-box-send{top:60px}\r\n/* duplicate toast */\r\n.dashboard-toast,.toast{filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#fb5f66', endColorstr='#ffffff', GradientType=1 )}\r\n.dashboard-toast{position:fixed;display:none;bottom:-100px;color:#62696d;left:60px;z-index:9999;width:344px;border:1px solid #ccc;-webkit-box-shadow:0 0 7px 2px rgba(0,0,0,.2);box-shadow:0 0 7px 2px rgba(0,0,0,.2);background:#fb5f66;background:-webkit-gradient(linear,left top, right top,color-stop(0, #fb5f66),color-stop(12%, #fb5f66),color-stop(12%, #fff),color-stop(12%, #fff),color-stop(12%, #fff),to(#fff));background:linear-gradient(to right,#fb5f66 0,#fb5f66 12%,#fff 12%,#fff 12%,#fff 12%,#fff 100%)}\r\n.dashboard-toast i{float:none;margin-top:0;margin-right:10px;width:40px;color:#fff;padding-left:0;padding-top:15px;padding-bottom:15px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}\r\n.dashboard-toast span{float:none;width:74%;padding-top:5px;padding-bottom:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:13px}\r\n.dashboard-toast .btn{float:right;background:0 0;padding:0;font-size:12px;color:#bec5c9}\r\n.d-toast-btn i{background:0 0;font-size:16px;padding:8px 0 0;width:auto;color:#bec5c9}\r\n.toast{background:#fb5f66;background:-webkit-gradient(linear,left top, right top,color-stop(0, #fb5f66),color-stop(12%, #fb5f66),color-stop(12%, #fff),color-stop(12%, #fff),color-stop(12%, #fff),to(#fff));background:linear-gradient(to right,#fb5f66 0,#fb5f66 12%,#fff 12%,#fff 12%,#fff 12%,#fff 100%)}\r\n/*Responsiveness start*/\r\n.mobile-menu{display:none}\r\n.white-logo{display:none!important}\r\n.company-list,.name-list{width:100%;float:left}\r\n@-webkit-keyframes spinAround\r\n  {\r\n    from{-webkit-transform:rotate(0);transform:rotate(0)}\r\n    to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}\r\n  }\r\n@keyframes spinAround\r\n  {\r\n    from{-webkit-transform:rotate(0);transform:rotate(0)}\r\n    to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}\r\n  }\r\n.hide{display:none}\r\n/* Start: Modal calquiz */\r\n#calquiz-modal .next-step {padding: 7px 50px !important;}\r\n/* Checkbox with tick icons */\r\n.check-icon{width:100%;padding:8px 15px;font-size:16px;font-weight:400;line-height:16px;border-bottom:0}\r\n.check-icon.last{border:2px solid #eee}\r\n.check-icon.last:hover,.check-icon:hover{cursor:pointer}\r\n.check-icon input[type=radio]{left:-9999px;position:absolute}\r\n.check-icon label{content:\"\";width:24px;height:24px;margin-bottom:0}\r\n.modal .check-icon label i.material-icons{font-size:36px;color:#fb5f66;padding-top:22px}\r\n.check-icon input[type=radio]:checked+label span.outer-border{cursor:default}\r\n.check-icon input[type=radio]:checked+label::after{background:#fb5f66;display:inline-block;position:relative;width:18px;height:18px;left:0;font-size:13px;color:#fff;border-radius:50%;padding-left:3px}\r\n#calquiz-modal .calquiz-outr .check-icon:hover input[type=radio]:checked+label{border:none}\r\n#calquiz-modal .calquiz-outr .step2 .check-icon label{text-align:center}\r\n#calquiz-modal .calquiz-outr .check-icon:hover label{cursor:pointer}\r\n#calquiz-modal .calquiz-outr h3{font-size:17px;color:#fb5f66;float:left;width:100%;text-align:left}\r\n#calquiz-modal .calquiz-outr h3.example-heading{font-size:13px;color:rgba(98,105,109,.5);margin-bottom:5px}\r\n#calquiz-modal .calquiz-outr label{font-size:12px;color:#62696d!important;margin:0;float:left;text-align:center;height:auto;width:auto;border:none;padding-left:0}\r\n#calquiz-modal .calquiz-outr ul{margin:0;padding:0}\r\n#calquiz-modal .calquiz-outr ul li{font-size:12px;color:#62696d;font-family:montserratlight;width:100%;line-height:18px;text-align:left;padding-bottom:10px}\r\n#calquiz-modal .calquiz-outr span{width:100%;font-size:13px;line-height:20px;float:left;padding-right:20px}\r\n.calquiz-outr{float:left;width:100%}\r\n#calquiz-modal .alert.alert-danger{top:0;left:163px;float:left;text-align:left}\r\n#calquiz-modal .alert.alert-danger p{position:absolute;width:100%;padding-top:3px;color:#fb5f66!important}\r\n#calquiz-modal .alert.alert-danger p span.mat-icon{float:left;width:auto}\r\n#calquiz-modal .alert.alert-danger p span.mat-icon i.material-icons{font-size:12px!important;margin-right:5px;color:#fb5f66;width:auto!important;padding-top:2px!important;height:auto!important;background:0 0;border:none}\r\n.calquiz-outr.select-template-block .step1{display:-webkit-box;display:-ms-flexbox;display:flex}\r\n.step1,.step2{float:left;width:100%;text-align:center}\r\n.full-width{width:100%!important;float:left}\r\n.text-center{text-align:center!important}\r\n#calquiz-modal .calquiz-outr .step2 h3{width:100%;text-align:center;margin-top:0}\r\n#calquiz-modal .calquiz-outr .step2 input{min-height:38px;border:1px solid #dae2e6;width:60%;font-size:13px;color:#62696d;margin-top:10px;padding:0 0 0 10px;margin-bottom:0}\r\n#calquiz-modal .calquiz-outr .step2 input::-webkit-input-placeholder{color:#888;opacity:.5!important}\r\n#calquiz-modal .step2 .calquiz-right{width:50%;padding:30px 40px;display:inline-block;float:left;margin:0}\r\n#calquiz-modal .calquiz-outr .step2 label{font-size:12px;color:#62696d;width:100%;padding:0;float:left;text-align:center;height:100%;cursor:default!important}\r\n.step2 .check-icon input[type=radio]:checked+label span.outer-border{border:3px solid rgba(251,84,91,.67)!important;border-radius:50%;height:80px;width:80px!important;display:inline-table}\r\n#calquiz-modal .calquiz-outr .step2 span{width:100%;line-height:16px;float:none}\r\n#calquiz-modal .calquiz-outr .step2 .alert span{font-size:11px!important;padding:0!important}\r\n.step2 .check-icon label span.outer-border{border:3px solid rgba(102,102,102,.67);height:80px;width:80px!important;display:inline-table;-webkit-transition:background .2s,color .2s;transition:background .2s,color .2s;cursor:pointer;border-radius:50%;text-align:center;position:relative;z-index:1;color:#fff}\r\n#calquiz-modal .step2 .calquiz-right i{font-size:38px;color:#989898;width:auto;border-radius:50%;margin:0 auto;text-align:center;padding-left:0}\r\n.step2 .check-icon input[type=radio]:checked+label i.material-icons{color:#fb5f66!important;border:0 solid #fff!important;-webkit-transform:scale(.8);-moz-transition:-moz-transform .2s,opacity .2s;-moz-transform:scale(.8);-ms-transform:scale(.8);transition:opacity .2s,-webkit-transform .2s;-webkit-transition:opacity .2s,-webkit-transform .2s;transition:transform .2s,opacity .2s;transition:transform .2s,opacity .2s,-webkit-transform .2s;transform:scale(.8)}\r\n#calquiz-modal .calquiz-outr .step2 .check-icon input[type=radio]:checked+label .outer-border:after{top:-2px;left:-2px;padding:7px;-webkit-box-shadow:none;box-shadow:none;-webkit-transition:-webkit-transform .2s,opacity .2s;-webkit-transform:scale(.8);-moz-transition:-moz-transform .2s,opacity .2s;-moz-transform:scale(.8);-ms-transform:scale(.8);transition:opacity .2s,-webkit-transform .2s;-webkit-transition:opacity .2s,-webkit-transform .2s;transition:transform .2s,opacity .2s;transition:transform .2s,opacity .2s,-webkit-transform .2s;transform:scale(.8);opacity:0;pointer-events:none;position:absolute;width:80%;height:80%;border-radius:50%;content:'';-webkit-box-sizing:content-box;box-sizing:content-box;border:3px solid #000}\r\n#calquiz-modal .calquiz-outr .step2 .check-icon label .outer-border:after{top:-7px;left:-7px;padding:7px;-webkit-box-shadow:0 0 0 3px rgba(251,84,91,.67);box-shadow:0 0 0 3px rgba(251,84,91,.67);-webkit-transition:-webkit-transform .2s,opacity .2s;-webkit-transform:scale(.8);-moz-transition:-moz-transform .2s,opacity .2s;-moz-transform:scale(.8);-ms-transform:scale(.8);transition:opacity .2s,-webkit-transform .2s;-webkit-transition:opacity .2s,-webkit-transform .2s;transition:transform .2s,opacity .2s;transition:transform .2s,opacity .2s,-webkit-transform .2s;transform:scale(.8);opacity:0;pointer-events:none;position:absolute;width:100%;height:100%;border-radius:50%;content:'';-webkit-box-sizing:content-box;box-sizing:content-box}\r\n#calquiz-modal .step2 .calc-quiz-margin{width:100%;float:left;text-align:left;margin-top:20px;margin-left:0}\r\n#calquiz-modal .back-icon{height:0;position:relative;top:-20px;left:-60px;float:left;width:100%;z-index:9}\r\n#calquiz-modal .back-icon i.material-icons{font-size:18px!important;color:#989898;border:none;background:0 0;cursor:pointer;padding-top:0!important;opacity:.7;width:17px!important;height:17px}\r\n#calquiz-modal .back-icon i.material-icons:hover{opacity:1}\r\n#calquiz-modal .calquiz-outr span.outer-border{padding-right:0!important}\r\n#calquiz-modal .step2 .calquiz-right i{padding-top:18px!important}\r\n/* end: calquiz checks */\r\n#calquiz-modal .modal-body {\r\n  float: left;\r\n  width: 100%;\r\n  padding: 0px;\r\n    }\r\n#calquiz-modal .modal-header {\r\n      padding: 13px 17px;\r\n      border-bottom: none;\r\n      background: #61686e;\r\n      border-radius: 7px 7px 0px 0px;\r\n\r\n      text-align: left;\r\n      float: left;\r\n      width: 100%;\r\n    }\r\n#calquiz-modal  .step2 input {\r\n      min-height: 38px;\r\n      border: 1px solid #dae2e6;\r\n      width: 70%;\r\n      font-size: 14px;\r\n      color: #62696d;\r\n      padding-left: 10px;\r\n      margin-top: 10px;\r\n    }\r\n#calquiz-modal .modal-header h5.modal-title {\r\n      color: #fff;\r\n      font-size: 14px;\r\n      text-transform: uppercase;\r\n      font-weight: normal !important;\r\n    }\r\n#calquiz-modal .modal-content {\r\n      border-radius: 8px;\r\n      float: left;\r\n      width: 100%;\r\n    }\r\n#calquiz-modal .calc-quiz-margin {\r\n      float: left;\r\n      text-align: left;\r\n    }\r\n#calquiz-modal .calquiz-outr .form-group:first-child {\r\n      margin-top: 23px;\r\n    }\r\n.calc-quiz-form {\r\n      padding: 0px 25px;\r\n      margin-top: 23px !important;\r\n    }\r\n#calquiz-modal.modal .form-group.label-floating label.control-label, #calquiz-modal.modal .form-group.label-placeholder label.control-label {\r\n      top: -7px;\r\n      font-size: 14px;\r\n      line-height: 18px;\r\n    }\r\n#calquiz-modal.modal .form-group.label-floating:not(.is-empty) label.control-label {\r\n      font-size: 10px !important;\r\n      left: 25px;\r\n    }\r\n#calquiz-modal.modal .form-group.label-floating.is-focused label.control-label {\r\n      top: -20px !important;\r\n      font-size: 10px;\r\n      font-family: montserratregular;\r\n      color: #fb5f66 !important;\r\n      left: 25px;\r\n    }\r\n#calquiz-modal.modal .form-group.label-floating:not(.is-empty) label.control-label {\r\n      top: -20px;\r\n      font-family: montserratregular;\r\n      font-size: 11px;\r\n      text-transform: uppercase;\r\n      color: #8e989f !important;\r\n    }\r\n#calquiz-modal .btn-red {\r\n      color: #fff !important;\r\n      background-color: #fb5f66  !important;\r\n      border-color: #fb5f66 !important;\r\n      border-radius: 0 !important;\r\n      font-size: 14px !important;\r\n      padding: 7px 30px !important;\r\n      margin-top: 40px !important;\r\n      -webkit-transition: all 0.3s ease 0s;\r\n      transition: all 0.3s ease 0s;\r\n      margin-right: 0 !important;\r\n      font-family: montserratregular;\r\n      font-weight: normal;\r\n      text-transform: none;\r\n      border-width: 2px;\r\n    }\r\n#calquiz-modal .btn.btn-red:hover {\r\n      background: #fdb6b9 !important;\r\n      color: #fb5f66 !important;\r\n      border-color: #fdb6b9 !important;\r\n    }\r\n#calquiz-modal .step2 .btn-red {\r\n      margin-bottom: 30px;\r\n      margin-top: 0px !important;\r\n    }\r\n.calquiz-outr span.title {\r\n      font-size: 10px !important;\r\n      color: #fb5f66;\r\n      font-family: montserratregular;\r\n      padding: 27px 25px 0px;\r\n      float: left;\r\n      width: 100%;\r\n      text-transform: uppercase;\r\n    }\r\n#calquiz-modal.modal .modal-header i.material-icons {\r\n      font-size: 16px;\r\n      color: #fff;\r\n      text-shadow: none;\r\n      top: -1px;\r\n      position: relative;\r\n    }\r\n#calquiz-modal .calquiz-outr .check-icon:hover label .outer-border:after {\r\n      -webkit-transform: scale(1);\r\n      transform: scale(1);\r\n      opacity: 1;\r\n    }\r\n.btn-red span {\r\n  padding-right: 0px !important;\r\n    }\r\n/* custom material css start (sahil) */\r\n.sahil-material .form-control{height:38px;padding:7px 0;font-size:14px;line-height:1.42857143;font-family:montserratregular;color:#62696d}\r\n.sahil-material .form-group label.control-label{font-size:14px;line-height:1.07142857;color:#999;font-weight:400;margin:16px 0 0;font-family:montserratregular}\r\n.sahil-material .form-group label.control-label.seo-static-label{text-transform:uppercase!important;font-size:11px;color:#999!important}\r\n.sahil-material .form-group.label-floating label.control-label,.sahil-material .form-group.label-placeholder label.control-label{top:-7px;font-size:14px;line-height:18px;color:#999}\r\n.sahil-material .form-group.label-floating:not(.is-empty) label.control-label{top:-20px;font-family:montserratregular;font-size:11px;text-transform:uppercase;color:#999!important}\r\n.sahil-material .form-group.label-floating.is-focused label.control-label{top:-20px;font-size:11px;font-family:montserratregular;color:#1483b7!important}\r\n.sahil-material .form-group.is-focused label,.sahil-material .form-group.is-focused label.control-label{font-size:11px;font-family:montserratregular;color:#1483b7!important;text-transform:uppercase}\r\n.sahil-material .form-control,.sahil-material .form-group .form-control{border:0!important;background-image:-webkit-gradient(linear,left top, left bottom,from(#1483b7),to(#1483b7)),-webkit-gradient(linear,left top, left bottom,from(#d7dbdd),to(#d7dbdd));background-image:linear-gradient(#1483b7,#1483b7),linear-gradient(#d7dbdd,#d7dbdd)}\r\n.sahil-material .form-group.is-focused .form-control{outline:0;background-image:-webkit-gradient(linear,left top, left bottom,from(#1483b7),to(#1483b7)),-webkit-gradient(linear,left top, left bottom,from(#D2D2D2),to(#D2D2D2));background-image:linear-gradient(#1483b7,#1483b7),linear-gradient(#D2D2D2,#D2D2D2);background-size:100% 2px,100% 1px;-webkit-box-shadow:none;box-shadow:none;-webkit-transition-duration:.3s;transition-duration:.3s}\r\n/* custom material css end (sahil) */\r\n#new-header .navbar-left ul, #new-header .navbar-left ul li, .billing-grey-bottom ul.billing-list li, .billing-white-bottom ul.billing-list li, .left-sidebar ul li, li, ul {\r\n  list-style: none\r\n}\r\na:focus, a:hover {\r\n  text-decoration: none;\r\n  color: #8e989f\r\n}\r\n#new-header .navbar-left {\r\n  margin-top: 10px;\r\n  border-left: 1px solid #dae2e6;\r\n  padding: 0px;\r\n}\r\n/* add new user */\r\n.modal .val-success-msg {\r\n  font-size: 12px;\r\n  color: #00c853;\r\n  width: auto;\r\n  float: right;\r\n  margin-top: 17px;\r\n  margin-right: 20px\r\n}\r\n.modal .modal-body .val-success-msg span.icon-success i.material-icons, .modal .modal-footer .val-success-msg span.icon-success i.material-icons {\r\n  color: #00c853 !important;\r\n  font-size: 14px !important\r\n}\r\n#add-new-user .modal-content {\r\n  border-radius: 5px\r\n}\r\n#add-new-user .modal-header {\r\n    padding: 20px 25px 0px;\r\n    border-bottom: none;\r\n    /* background: #61686e; */\r\n}\r\n#add-new-user.modal button.close.btn-close {\r\n    text-shadow: none;\r\n    position: absolute;\r\n    right: 23px;\r\n    top: 23px;\r\n    z-index: 9;\r\n    opacity: 1;\r\n    -webkit-transition: all .3s ease 0s!important;\r\n    transition: all .3s ease 0s!important\r\n}\r\n#add-new-user.modal button.close.btn-help {\r\n  text-shadow: none;\r\n  position: absolute;\r\n  right: 40px;\r\n  top: 11px;\r\n  z-index: 9;\r\n  opacity: 1;\r\n  -webkit-transition: all .3s ease 0s !important;\r\n  transition: all .3s ease 0s !important\r\n}\r\n#add-new-user.modal i.material-icons {\r\n    font-size: 22px;\r\n    color: #d7dbdd;\r\n    -webkit-transition: .3s ease-in-out;\r\n    transition: .3s ease-in-out;\r\n    font-weight: normal;\r\n    margin-top: 1px;\r\n}\r\n#add-new-user.modal i.material-icons:hover {\r\n    color: #62696d;\r\n    opacity: 0.7;\r\n}\r\n#add-new-user.modal button.close.btn-help i.material-icons {\r\n  font-size: 14px;\r\n  color: #fff\r\n}\r\n#add-new-user .modal-title {\r\n    text-transform: uppercase;\r\n    color: #fb5f66;\r\n    font-size: 18px;\r\n    font-family: montserratlight;\r\n}\r\n#add-new-user .modal-body {\r\n  padding: 5px 25px 30px\r\n}\r\n.modal#add-new-user .form-group {\r\n    margin-top: 13px;\r\n}\r\n#add-new-user .btn-red-outline {\r\n    color: #fff;\r\n    background-color: #fb5f66;\r\n    border-color: #fb5f66;\r\n    border-radius: 4px;\r\n    font-size: 12px;\r\n    padding: 10px 30px !important;\r\n    margin-top: 0;\r\n    -webkit-transition: all .3s ease 0s;\r\n    transition: all .3s ease 0s;\r\n    text-transform: uppercase;\r\n    font-family: montserratlight;\r\n    margin: 0;\r\n}\r\n.radio-inline {\r\n  font-size: 12px !important;\r\n  font-weight: 400 !important;\r\n  padding-left: 0;\r\n  font-family: montserratlight;\r\n  color: #8e989f !important\r\n}\r\n.radio-inline input[type=radio] {\r\n  left: -9999px;\r\n  position: absolute\r\n}\r\n.form-group.form-group-radio .radio-inline+.radio-inline {\r\n  margin-left: 15px\r\n}\r\n.radio-inline label {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 14px;\r\n  height: 14px;\r\n  top: 0;\r\n  border: 1px solid #fb5f66;\r\n  border-radius: 50%;\r\n  margin: 2px 7px 0 auto;\r\n  cursor: pointer\r\n}\r\n.form-group.form-group-radio {\r\n  margin: 8px 0 5px !important;\r\n  float: left;\r\n  width: 100%\r\n}\r\n.form-group-radio label small {\r\n    color: #BDBDBD;\r\n}\r\n.form-group-radio label {\r\n  float: left;\r\n  margin-bottom: 4px;\r\n  color: #62696d !important;\r\n}\r\n.radio-inline input[type=radio]:checked+label {\r\n  background: #fb5f66\r\n}\r\n.radio-inline input[type=radio]:checked+label::after {\r\n  font-family: \"Material Icons\";\r\n  content: \"\\e5ca\"\r\n}\r\n.radio-inline label::after {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 14px;\r\n  height: 14px;\r\n  left: 1px;\r\n  top: -5px;\r\n  font-size: 10px;\r\n  color: #fff\r\n}\r\n#add-new-user .modal-footer {\r\n  padding: 15px 25px 25px;\r\n  text-align: right;\r\n  border-top: none\r\n}\r\n#add-new-user .modal-footer a.text-cancel {\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    color: #62696d;\r\n    opacity: 0.7;\r\n    margin-right: 13px;\r\n    margin-top: 11px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    -webkit-transition: .3s ease-in-out;\r\n    transition: .3s ease-in-out;\r\n}\r\n#add-new-user .modal-footer a.text-cancel:hover {\r\n    opacity: 1;\r\n}\r\n.modal#add-new-user .form-group:first-child {\r\n  margin-top: 12px;\r\n  clear: both;\r\n}\r\n.alert.alert-danger {\r\n  background: 0 0 !important;\r\n  border: none;\r\n  position: relative;\r\n  top: -12px;\r\n  left: 0;\r\n  padding: 0;\r\n  color: #fb5f66 !important;\r\n  font-size: 11px;\r\n  margin: 0;\r\n  float: left;\r\n  width: 100%;\r\n  text-align: left\r\n}\r\n.alert.alert-danger p {\r\n  position: absolute;\r\n  width: 100%\r\n}\r\n.alert.alert-dange p span.mat-icon {\r\n  float: left;\r\n  width: auto\r\n}\r\n.alert.alert-danger p span.mat-icon i.material-icons {\r\n  float: left;\r\n  font-size: 12px !important;\r\n  margin-right: 5px;\r\n  margin-top:3px;\r\n  color: #fb5f66 !important\r\n}\r\n.alert.alert-danger.custom-alert {\r\n  padding: 10px;\r\n  margin-top: 10px;\r\n  border-radius: 0;\r\n  background: #feddde !important;\r\n  top:0px;\r\n}\r\n.alert.alert-danger.custom-alert p {\r\n  position: relative\r\n}\r\n#add-new-company .modal-content, #add-new-companyUC .modal-content {\r\n  border-radius: 5px;\r\n  float: left;\r\n  width: 100%\r\n}\r\n#add-new-company .modal-header, #add-new-companyUC .modal-header {\r\n  padding: 20px 25px 0px;\r\n  border-bottom: none;\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n#add-new-company.modal button.close.btn-close, #add-new-companyUC.modal button.close.btn-close {\r\n  text-shadow: none;\r\n    position: absolute;\r\n    right: 23px;\r\n    top: 23px;\r\n    z-index: 9;\r\n    opacity: 1;\r\n    -webkit-transition: all .3s ease 0s!important;\r\n    transition: all .3s ease 0s!important;\r\n}\r\n#add-new-company.modal button.close.btn-help, #add-new-companyUC.modal button.close.btn-help {\r\n  text-shadow: none;\r\n  position: absolute;\r\n  right: 40px;\r\n  top: 11px;\r\n  z-index: 9;\r\n  opacity: 1;\r\n  -webkit-transition: all .3s ease 0s !important;\r\n  transition: all .3s ease 0s !important\r\n}\r\n#add-new-company.modal i.material-icons, #add-new-companyUC.modal i.material-icons {\r\n  font-size: 22px;\r\n    color: #d7dbdd;\r\n    -webkit-transition: .3s ease-in-out;\r\n    transition: .3s ease-in-out;\r\n    font-weight: normal;\r\n}\r\n#add-new-company.modal i.material-icons:hover, #add-new-companyUC.modal i.material-icons:hover {\r\n    color: #62696d;\r\n    opacity: 0.7;\r\n}\r\n#add-new-company.modal button.close.btn-help i.material-icons, #add-new-companyUC.modal button.close.btn-help i.material-icons {\r\n  font-size: 14px;\r\n  color: #fff\r\n}\r\n#add-new-company .modal-title, #add-new-companyUC .modal-title {\r\n  text-transform: uppercase;\r\n    color: #fb5f66;\r\n    font-size: 18px;\r\n    font-family: montserratlight;\r\n}\r\n#add-new-company .modal-body, #add-new-companyUC .modal-body {\r\n  padding: 5px 25px 15px;\r\n  float: left;\r\n  width: 100%\r\n}\r\n#add-new-company .btn-red-outline, #add-new-companyUC .btn-red-outline {\r\n  color: #fb5f66;\r\n  background-color: #fff;\r\n  border-color: #fb5f66;\r\n  border-radius: 0;\r\n  font-size: 11px;\r\n  padding: 7px 20px;\r\n  margin: 10px 0;\r\n  -webkit-transition: all .3s ease 0s;\r\n  transition: all .3s ease 0s;\r\n  font-family: montserratregular;\r\n  text-transform: uppercase;\r\n  float: right\r\n}\r\n#add-new-company .modal-footer, #add-new-companyUC .modal-footer {\r\n  padding: 15px 40px;\r\n  text-align: center;\r\n  border-top: none;\r\n  font-size: 12px;\r\n  color: #666;\r\n  background: #eee;\r\n  line-height: 18px;\r\n  border-radius: 0 0 7px 7px;\r\n  font-family: montserratlight;\r\n  float: left\r\n}\r\n#add-new-company .in-active, #add-new-companyUC .in-active {\r\n  position: absolute;\r\n  top: 14px;\r\n  right: 0;\r\n  font-size: 10px !important;\r\n  color: #666 !important;\r\n  font-family: montserratregular;\r\n  text-transform: uppercase;\r\n  font-weight: normal;\r\n}\r\n.modal#add-new-company .form-group:first-child {\r\n  margin-top: 12px\r\n}\r\n#add-new-company a.text-cancel {\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    color: #62696d;\r\n    opacity: 0.7;\r\n    margin-right: 13px;\r\n    margin-top: 21px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    -webkit-transition: .3s ease-in-out;\r\n    transition: .3s ease-in-out;\r\n}\r\n.popover-wrapper .popover-block {\r\n  position: relative;\r\n  top: 18px;\r\n  left: -32px;\r\n  min-width: 95px;\r\n  padding: 8px;\r\n  font-size: 12px;\r\n  background: #62696d;\r\n  border-radius: 4px !important;\r\n  border: none;\r\n  -webkit-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .24);\r\n          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .24);\r\n  display: none;\r\n  z-index: 9\r\n}\r\n.popover-wrapper:hover .popover-block {\r\n  display: block\r\n}\r\n.popover-wrapper .popover-block:before {\r\n  position: absolute;\r\n  top: -8px;\r\n  right: 42px;\r\n  display: inline-block;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 8px solid #62696d;\r\n  border-left: 6px solid transparent;\r\n  border-bottom-color: #62696d;\r\n  content: ''\r\n}\r\n.toast {\r\n  font-family: montserratregular;\r\n    position: fixed;\r\n    bottom: -100px;\r\n    background: #fff;\r\n    color: #62696d;\r\n    left: 60px;\r\n    z-index: 10005;\r\n    width: 344px;\r\n    border: 1px solid #ccc;\r\n    -webkit-box-shadow: 0 0 7px 2px rgba(0,0,0,.2);\r\n            box-shadow: 0 0 7px 2px rgba(0,0,0,.2);\r\n    display: none;\r\n}\r\n.toast i, .toast span {\r\n  float: none;\r\n  display: inline-block;\r\n  vertical-align: middle\r\n}\r\n.toast i {\r\n    margin-top: 0;\r\n    margin-right: 10px;\r\n    width: 40px;\r\n    background: #fb5f66;\r\n    color: #fff;\r\n    font-size: 24px;\r\n    padding-left: 0px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n.toast .btn, .toast-btn i {\r\n  background: 0 0;\r\n  color: #bec5c9\r\n}\r\n.toast span {\r\n    width: 74%;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    line-height: 15px;\r\n    font-size: 13px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n.toast .btn {\r\n  float: right;\r\n    padding: 0;\r\n    font-size: 12px;\r\n}\r\n.toast-btn i {\r\n  font-size: 16px !important;\r\n  padding: 8px 0 0;\r\n  width: auto;\r\n  margin: 0 !important\r\n}\r\n.editor-modal .modal-dialog {\r\n  margin: 80px auto\r\n}\r\n.editor-modal .modal-header {\r\n  padding: 11px 15px;\r\n  background: #fb5f66;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px\r\n}\r\n.editor-modal .modal-title {\r\n  margin: 0;\r\n  line-height: 1.42857143;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  color: #fff\r\n}\r\n.editor-modal button.close {\r\n    color: #d7dbdd;\r\n    opacity: 1;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    font-family: \"Material Icons\";\r\n    content: \"close\";\r\n    text-shadow: none;\r\n    -webkit-transition: all .3s ease 0s !important;\r\n    transition: all .3s ease 0s !important;\r\n    cursor: pointer;\r\n    z-index: 9;\r\n    margin-top: 0px !important;\r\n}\r\n.editor-modal button.close:hover {\r\n    color: #62696d;\r\n    opacity: .7;\r\n}\r\n.editor-modal .modal-footer {\r\n  padding: 15px;\r\n  border-top: none;\r\n  padding-top: 0px;\r\n}\r\n.editor-modal .modal-body {\r\n  font-size: 13px;\r\n  color: #62696d\r\n}\r\n.editor-modal .btn.btn-basic {\r\n  color: #fff;\r\n  background: #fb5f66;\r\n  font-size: 12px;\r\n  width: 105px;\r\n  border: 1px solid #fb5f66;\r\n  -webkit-transition: all .5s ease;\r\n  transition: all .5s ease\r\n}\r\n.editor-modal .btn.btn-basic:hover {\r\n  background: #fff;\r\n  color: #fb5f66;\r\n  border-color: #fb5f66;\r\n}\r\n.editor-modal .btn.btn-basic:first-child {\r\n  color: #8e989f;\r\n  border-color: #8e989f;\r\n  background: #fff\r\n}\r\n.editor-modal .btn.btn-basic:first-child:hover {\r\n  background: #8e989f;\r\n  color: #fff;\r\n  border: none\r\n}\r\n.editor-modal .btn.btn-basic:only-child {\r\n  color: #fff;\r\n  background: #fb5f66;\r\n  border-color: #fb5f66\r\n}\r\n.editor-modal .btn.btn-basic:only-child:hover {\r\n  background: #fff;\r\n  color: #fb5f66;\r\n  border: 1px solid #fb5f66;\r\n}\r\n.editor-modal .live-subhead i.material-icons {\r\n  font-size: 38px;\r\n  color: #fb5f66;\r\n  float: left;\r\n  text-align: center;\r\n  display: block\r\n}\r\n.editor-modal .live-url {\r\n  font-size: 11px;\r\n  font-family: montserratlight;\r\n  color: #fb5f66;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  margin-bottom: 0;\r\n  text-transform: uppercase;\r\n  cursor: pointer\r\n}\r\n.editor-modal .live-subhead .url-style {\r\n  color: #a9a9a9;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  text-transform: none;\r\n  background: #ceebff;\r\n  padding: 0 5px\r\n}\r\n.editor-modal .live-subhead {\r\n  font-size: 16px;\r\n  margin: 0 auto;\r\n  display: block;\r\n  background: #fff;\r\n  border: 1px solid #bec6c9;\r\n  border-top: 0;\r\n  padding: 7px 10px 12px;\r\n  text-align: left\r\n}\r\n.editor-modal .live-subhead.link-style {\r\n  background: #f9f9f9;\r\n  border: 1px solid #bec6c9;\r\n  padding: 7px 12px;\r\n  text-align: left\r\n}\r\n.editor-modal span {\r\n  font-family: montserratlight;\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  color: #4d5052\r\n}\r\na.live-url.preview_copy {\r\n  float: right;\r\n  margin-top: 5px\r\n}\r\n.editor-modal .modal .form-group .form-control, .editor-modal.modal .form-control {\r\n  width: 100%;\r\n  float: left;\r\n  height: 27px;\r\n  border: 1px solid rgba(93, 104, 110, .4);\r\n  color: #61686e !important;\r\n  font-size: 14px;\r\n  background: #f8f8f8;\r\n  font-family: montserratlight;\r\n  padding: 0 10px\r\n}\r\n.editor-modal .form-control[disabled], .editor-modal .form-control[readonly], .editor-modal .form-group .form-control[disabled], .editor-modal .form-group .form-control[readonly], fieldset[disabled] .editor-modal .form-control, fieldset[disabled] .editor-modal .form-group .form-control {\r\n  background-color: #f8f8f8;\r\n  border: 1px solid rgba(97, 104, 110, .3);\r\n  padding: 0 10px\r\n}\r\n.icon-play-next i.material-icons {\r\n  font-size: 38px;\r\n  color: #fb5f66 !important;\r\n  margin-top: 10px\r\n}\r\n.live-modal {\r\n  padding: 0 20px 50px\r\n}\r\n.live-modal td, .live-modal th {\r\n  padding: 0 !important;\r\n  border-bottom: 0 !important\r\n}\r\n.live-modal th {\r\n  width: 100%;\r\n  font-weight: 100\r\n}\r\n.selected-link {\r\n  white-space: nowrap;\r\n  overflow: auto;\r\n  overflow: hidden\r\n}\r\n.bootbox .modal-content {\r\n  float: left;\r\n  width: 100%\r\n}\r\n.bootbox .modal-body {\r\n  border-radius: 5px\r\n}\r\n.bootbox-body{\r\n    display: -webkit-box;   display: -ms-flexbox;   display: flex;\r\n}\r\n.bootbox-body-left {\r\n    float: left;\r\n    width: 37px;\r\n    background: #fb5f66;\r\n    border-radius: 5px 0 0 5px;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    margin: -15px 20px -59px -15px;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.bootbox-body .bootbox-body-left .mat-icon {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  float: none\r\n}\r\n.bootbox-body .bootbox-body-left .mat-icon i.material-icons {\r\n  padding-left: 0px;\r\n  color: #fff;\r\n  font-size: 24px\r\n}\r\n.bootbox-body .bootbox-body-right {\r\n  float: left;\r\n  width: 85%;\r\n  color: #626983;\r\n  font-size: 14px;\r\n  font-family: montserratlight;\r\n  padding: 5px 0 10px\r\n}\r\n.one-line-bootbox .bootbox-body-left {\r\n  height: 102px\r\n}\r\n.bootbox-config .bootbox-body-left {\r\n  height: 142px\r\n}\r\n.btn.btn-ok {\r\n  border: 2px solid #fb5f66;\r\n    border-radius: 4px;\r\n    color: #fff !important;\r\n    padding: 5px 28px;\r\n    background: #fb5f66;\r\n    margin-left: 7px !important;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    -webkit-transition: .3s ease-in-out;\r\n    transition: .3s ease-in-out;\r\n}\r\n.btn.btn-cancel {\r\n    border: 2px solid #b0b4b6;\r\n    border-radius: 4px;\r\n    color: #fff!important;\r\n    padding: 5px 25px;\r\n    margin-right: 0px;\r\n    background: #b0b4b6 !important;\r\n    text-transform: uppercase;\r\n    font-size: 11px;\r\n    -webkit-transition: .3s ease-in-out;\r\n    transition: .3s ease-in-out;\r\n}\r\n.btn.btn-cancel.btn-cancel-hover:hover {\r\n    opacity: 0.7;\r\n}\r\n.btn-hover:hover {\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n  background: #fdb6b9 !important;\r\n  color: #fb5f66 !important;\r\n  border-color: #fdb6b9 !important\r\n}\r\n.btn-hover:focus {\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n  background: #fdb6b9 !important;\r\n  color: #fb5f66 !important;\r\n  border-color: #fdb6b9 !important\r\n}\r\n.btn-grey-hover:hover {\r\n  background: #bdc5c8 !important;\r\n  color: #fff !important;\r\n  -webkit-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out\r\n}\r\n.alert-success {\r\n  color: #fff;\r\n  background-color: #00c853;\r\n  border-color: #00c853;\r\n  font-size: 12px;\r\n  font-family: montserratregular;\r\n  text-transform: capitalize;\r\n  padding: 7px 13px 10px;\r\n  margin-bottom: 0;\r\n  float: left\r\n}\r\n.alert-success i.material-icons {\r\n  font-size: 16px !important;\r\n  color: #fff;\r\n  position: relative;\r\n  top: 3px;\r\n  margin-left: 5px\r\n}\r\n@media (min-width:768px) {\r\n  .editor-modal .modal-dialog {\r\n    width: 520px;\r\n    margin: 80px auto !important\r\n  }\r\n}\r\n@media (max-width:767px) {\r\n\r\n  #lgScrSideNavbar, .dash-circle, .dash-prog-outer h2, .full-menu {\r\n    display: none\r\n  }\r\n  .dash-prog-outer{\r\n    display: none;\r\n  }\r\n  .new-dropdown-menu {\r\n    left: -114px;\r\n  }\r\n  .new-dropdown-menu:before {\r\n    left: 120px;\r\n  }\r\n  #responsive-header .navbar-fixed-top .nav-padding {\r\n    padding-right: 0;\r\n    padding-left: 0\r\n  }\r\n  .main-logo {\r\n    display: none !important\r\n  }\r\n  .mobile-menu {\r\n    display: block;\r\n    float: right;\r\n    margin-top: 7px;\r\n    position: relative\r\n  }\r\n  #responsive-header .navbar-default {\r\n    background: #fb5f66 !important;\r\n    border: none;\r\n    margin-top: 0\r\n  }\r\n  #responsive-header .navbar-default .mat-icon i.material-icons {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    padding: 13px\r\n  }\r\n  #responsive-header .navbar-header h4.title {\r\n    color: #fff;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    padding-top: 7px !important;\r\n  }\r\n  .mobile-menu button {\r\n    border: none;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    color: #fff;\r\n    background: 0 0;\r\n    float: right;\r\n    margin: 0 5px\r\n  }\r\n  .mobile-menu button:focus {\r\n    background: 0 0 !important;\r\n    color: #fff !important\r\n  }\r\n  .mobile-menu .btn-default:hover {\r\n    color: #fff;\r\n    background: 0 0\r\n  }\r\n  .mobile-dash {\r\n    padding: 0\r\n  }\r\n  .mobile-menu .dropdown-menu {\r\n    background: #62696d;\r\n    top: -11px;\r\n    border-radius: 0;\r\n    left: -176px;\r\n    width: 235px;\r\n    font-family: montserratlight;\r\n    padding-bottom: 55px\r\n  }\r\n  .mobile-menu .name-dropdown-border {\r\n    width: 100%;\r\n    margin: 5px 0\r\n  }\r\n  .mobile-menu .user-outr {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: block;\r\n    text-transform: capitalize\r\n  }\r\n  .mobile-menu .user-outr li {\r\n    float: right;\r\n    font-size: 24px;\r\n    font-family: montserratlight;\r\n    color: #fff;\r\n    margin-right: 24px;\r\n    margin-top: 8px;\r\n    margin-bottom: 6px;\r\n    margin-left: 30px;        /*white-space: normal;*/\r\n    word-wrap: break-word;\r\n    width: 175px;\r\n    text-align: right;\r\n  }\r\n  .mobile-menu .user-outr li a {\r\n    margin-right: 30px\r\n  }\r\n  .user-outr li a {\r\n    float: left;\r\n    width: auto;\r\n    border: 2px solid #dae2e6;\r\n    border-radius: 50%;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px\r\n  }\r\n  .user-outr li a:hover {\r\n    border: 2px solid #f56151\r\n  }\r\n  .mobile-menu .company-list li, .mobile-menu .name-list li {\r\n    margin: 10px 0;\r\n    text-align: right;\r\n    font-size: 16px;\r\n    width: 100%;\r\n    float: left;\r\n    padding-right: 20px\r\n  }\r\n  .mobile-menu .company-list li a, .mobile-menu .name-list li a {\r\n    float: right;\r\n    color: #fff\r\n  }\r\n  .mobile-menu .company-list li a i {\r\n    margin-right: 20px;\r\n    float: left\r\n  }\r\n  .mobile-menu .name-list li a i {\r\n    margin-left: 20px;\r\n    float: right\r\n  }\r\n  .mobile-menu .company-list-title {\r\n    float: left;\r\n    color: #fff\r\n  }\r\n  .white-logo {\r\n    display: block !important\r\n  }\r\n  .dash-prog-outer {\r\n    float: left;\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px\r\n  }\r\n  .dash-prog-outer h5 {\r\n    font-size: 24px;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-bottom: 1px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper {\r\n    min-height: 35px;\r\n    width: 100%;\r\n    text-align: center\r\n  }\r\n  .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n    margin: 0 auto;\r\n    float: none;\r\n    text-align: center\r\n  }\r\n  #responsive-header .navbar-header {\r\n    float: left;\r\n    margin-left: -5px;\r\n    margin-right: 0 !important\r\n  }\r\n  #responsive-header .navbar-logopadding {\r\n    padding-right: 0;\r\n    padding-top: 0\r\n  }\r\n  #responsive-header .navbar-default {\r\n    height: 50px;\r\n    margin: 0;\r\n    padding-bottom: 0\r\n  }\r\n  .settings-cookies #new-header.cookies-parent {\r\n    height: 50px;\r\n    margin-bottom: 0\r\n  }\r\n  .white-logo .navbar-brand img {\r\n    height: 53px;\r\n    margin: -20px auto 0\r\n  }\r\n  .white-logo .navbar-brand {\r\n    float: none\r\n  }\r\n  .user-outr li a.add-user {\r\n    width: 45px;\r\n    height: 45px;\r\n    padding-top: 9px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\r\n    top: -30px;\r\n    left: 17px;\r\n    font-size: 34px;\r\n    position: relative;\r\n    color: #f87b80\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-title {\r\n    font-size: 16px\r\n  }\r\n  .company-dropdown-wrapper .dropdown-menu>li>a .company-site {\r\n    width: 91%;\r\n    font-size: 14px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-block-inner {\r\n    width: 35px;\r\n    height: 35px;\r\n    padding-top: 8px;\r\n    font-size: 14px;\r\n    top: 13px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a.add-new-company {\r\n    font-size: 14px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a i.material-icons {\r\n    font-size: 24px\r\n  }\r\n  .company-block-content {\r\n    margin-left: 50px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\r\n    right: 34px\r\n  }\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n    top: 8px;\r\n    left: -8px\r\n  }\r\n  header#new-header.cookies-parent {\r\n    margin-bottom: 0;\r\n    height: 50px\r\n  }\r\n  .settings-cookies #smScrSideNavbar.left-sidebar, .settings-cookies .membership-details-inner-tabs {\r\n    top: 50px !important\r\n  }\r\n  /* #smScrWrapperContent {\r\n    display: none\r\n  } */\r\n  #new-header .company-nav {\r\n    display: block !important\r\n  }\r\n  #new-header .navbar-default.company-nav {\r\n    background: #fff !important;\r\n    border-bottom: 1px solid #dae2e6;\r\n    padding-top: 0 !important\r\n  }\r\n  #new-header .company-nav .navbar-header {\r\n    width: 100% !important\r\n  }\r\n  #new-header .company-nav .navbar-logopadding {\r\n    padding-left: 15px;\r\n    padding-top: 22px;\r\n    height: 105px;\r\n    width: 100%;\r\n    padding-right: 15px !important\r\n  }\r\n  .company_name_avatar-circle {\r\n    margin-right: 15px\r\n  }\r\n  .company_name_span {\r\n    width: 57%;\r\n    line-height: 30px\r\n  }\r\n  #new-header {\r\n    height: 50px !important;\r\n  }\r\n  #new-header .company-nav.navbar-fixed-top .nav-padding {\r\n    padding-left: 0;\r\n    padding-right: 0\r\n  }\r\n  #new-header.cookies-parent {\r\n    margin-bottom: 0;\r\n  }\r\n  .trending-outer h2{ padding: 0 5% !important; padding-top:25px !important; padding-bottom:13px !important;}\r\n  .trending-outer{ margin-top:30px !important;}\r\n  #add-collection.modal{ margin-top:0px !important;}\r\n  .new-dashboard .temp-card .new-dropdown-menu li.sub-menu ul{ right: 126px !important; left: initial !important;}\r\n  .dp-icon-outer {\r\n    opacity: 1 !important;\r\n    -webkit-transition: opacity 0.5s !important;\r\n    transition: opacity 0.5s !important;\r\n    visibility: visible !important;\r\n    z-index: initial !important;\r\n}\r\n\r\n}\r\n#add-new-user span#upgradeLink button {\r\n  color: #fb545b;\r\n  background-color: #fff;\r\n  border-radius: 0;\r\n  font-size: 10px;\r\n  padding: 6px 10px;\r\n  -webkit-transition: all .3s ease 0s;\r\n  transition: all .3s ease 0s;\r\n  font-family: montserratregular;\r\n  text-transform: uppercase;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  border: none;\r\n  margin-left: 10px\r\n}\r\n#add-new-user span#upgradeLink button:hover {\r\n  background: #fdb6b9;\r\n  color: #fb545b;\r\n  border-color: #fdb6b9\r\n}\r\n#add-new-user .alert.alert-danger p {\r\n  float: left;\r\n  width: auto;\r\n}\r\n#add-new-user .alert.alert-danger p span, #add-new-user span#upgradeLink {\r\n  float: left\r\n}\r\n@media (min-width:5120px) and (max-width:5120px) {\r\n    .dash-box{\r\n        min-height: 1000px;\r\n    }\r\n    .dash-box figure {\r\n        height: 500px;\r\n    }\r\n    .dash-box-top {\r\n        min-height: 500px;\r\n    }\r\n    .dash-top2-textinner{\r\n        min-height: 500px;\r\n    }\r\n    .dash-box-bottom{\r\n        padding: 80px;\r\n    }\r\n    .dash-box-bottom ul{\r\n        width: 100%;\r\n        margin-bottom: 100px;\r\n    }\r\n    .dash-box-bottom ul li{\r\n        margin-top: 50px;\r\n    }\r\n    .dash-top2-textinner h3{\r\n        margin-bottom: 100px;\r\n    }\r\n    .dash-top3-circle{\r\n        height: 280px;\r\n        width: 280px;\r\n        font-size: 23px;\r\n        padding-top: 80px;\r\n    }\r\n    .dash-top3circletable{\r\n        height: 1024px;\r\n    }\r\n    .dash-circle {\r\n        width: 100px;\r\n        height: 100px;\r\n        font-size: 44px;\r\n        margin-right: 28px;\r\n    }\r\n    .dash-prog-outer h2{\r\n        font-size: 26px !important;\r\n        line-height: 32px;\r\n        margin-top: 20px;\r\n    }\r\n    .dash-circle-red{\r\n        width: 100px;\r\n        height: 100px;\r\n        padding-top: 30px;\r\n    }\r\n    .circle-cal-outer{\r\n       width: 200px;\r\n    }\r\n    .circle-cal-outerh2 {\r\n        font-size: 34px !important;\r\n    }\r\n    .circle-cal-outer h5 {\r\n        font-size: 17px;\r\n    }\r\n    .dash-circle-pink{\r\n        width: 100px;\r\n        height: 100px;\r\n        padding-top: 30px;\r\n    }\r\n    .dash-circle-d-pink{\r\n        width: 100px;\r\n        height: 100px;\r\n        padding-top: 30px;\r\n    }\r\n    .dashboard-helptip.help-tip i{\r\n        font-size: 17px;\r\n    }\r\n    .dash-top2-textinner .company-dropdown-title-active{\r\n        font-size: 22px;\r\n    }\r\n    .dash-top2-textinner h3{\r\n        font-size: 36px;\r\n        margin-top: 20px;\r\n    }\r\n    .dash-box-send{\r\n        height: 120px;\r\n        width: 120px;\r\n        padding-top: 40px;\r\n    }\r\n    .dash-box-bottom ul li:first-child {\r\n        margin-top: 0px !important;\r\n    }\r\n\r\n}\r\n/* Shutter Out Vertical */\r\n.hvr-shutter-out-vertical{display:inline-block;vertical-align:middle;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-box-shadow:0 0 1px transparent;box-shadow:0 0 1px transparent;-webkit-backface-visibility:hidden;backface-visibility:hidden;-moz-osx-font-smoothing:grayscale;position:relative;background:#e1e1e1;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:.3s;transition-duration:.3s}\r\n.hvr-shutter-out-vertical:before{content:\"\";position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;background:#2098d1;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transform-origin:50%;transform-origin:50%;-webkit-transition-property:transform;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}\r\n.hvr-shutter-out-vertical:active,.hvr-shutter-out-vertical:focus,.hvr-shutter-out-vertical:hover{color:#fff}\r\n.hvr-shutter-out-vertical:active:before,.hvr-shutter-out-vertical:focus:before,.hvr-shutter-out-vertical:hover:before{-webkit-transform:scaleY(1);transform:scaleY(1)}\r\n.new-dropdown-menu a.hvr-shutter-out-vertical{ background: transparent;}\r\n.new-dropdown-menu a.hvr-shutter-out-vertical:before { background: #71787b none repeat scroll 0 0; -webkit-transition-duration: 0.2s;transition-duration: 0.2s;}\r\n/* end: Shutter Out Vertical */\r\n.animated-icon i {font-size: 26px !important;padding: 13px 0 !important;position: relative;-webkit-transition: 0.5s;transition: 0.5s;-webkit-transform: translateY(0px);transform: translateY(0px);}\r\n/*dashboard-new css*/\r\n.pt63{ padding-top:63px;}\r\n.np-left{ padding-left: 0!important;}\r\n.np-right{ padding-right: 0!important;}\r\n.dashboard-outer{ float: left; width:100%; padding:35px 30px 30px 30px ; background-image:url('https://cdn.filestackcontent.com/WKcZ4y0GR0qWRWt0KhJQ'); background-size:auto; background-attachment:fixed;  background-color:#fcfdfd; background-blend-mode:multiply; min-height: 91vh;}\r\n.create-temp-outer{ float: left; width:100%; padding:10px 0; }\r\n.create-temp-outer .button-outer{ float: left; width:100%; }\r\n.create-temp-outer .button-outer a{ border: 1px solid #f65f68; color:#fff; background-color:#f65f68; padding: 11px 30px 11px 50px; font-size: 14px; margin: 0 auto; font-family: 'montserratlight' !important;  position: relative;border-radius: 50px; -webkit-transition: all 0.8s ease; transition: all 0.8s ease; -webkit-box-shadow: 0 2px 10px 1px rgba(0,0,0,.1); box-shadow: 0 2px 10px 1px rgba(0,0,0,.1);}\r\n.create-temp-outer .button-outer a:hover{ background-color:#f65f68; color: #fff;  }\r\n.create-temp-outer .button-outer a{ border: 1px solid #fb5f66; color:#fff; background-color:#fb5f66; padding: 11px 30px 11px 50px; font-size: 14px; margin: 0 auto; font-family: 'montserratlight' !important;  position: relative;border-radius: 50px; -webkit-transition: all 0.8s ease; transition: all 0.8s ease; -webkit-box-shadow: 0 2px 10px 1px rgba(0,0,0,.1); box-shadow: 0 2px 10px 1px rgba(0,0,0,.1);}\r\n.create-temp-outer .button-outer a:hover{ background-color:#fb5f66; color: #fff;  }\r\n.create-temp-outer .button-outer a i{ position: absolute;left: 25px;top: 9px; font-size: 21px;}\r\n.common-outer{ float: left; width:100%; background: #fff;border-radius: 0px;border:1px solid #ecf0f2; margin-bottom: 30px;}\r\n.common-outer .head-section{ float: left; width:100%; padding:5px 20px; border-bottom:1px solid #ecf0f2;  }\r\n.common-outer .heading{color: #62696d; font-size: 13px; text-transform: capitalize; float: left; padding:6px 0 6px 0; font-family: 'montserratregular' !important;}\r\n.idea-outer{ float: left; width:100%; background: #fb5f66;border-radius: 5px; margin-bottom: 30px; position: relative  }\r\n.idea-outer:hover{ -webkit-box-shadow:-1px 2px 15px 4px rgba(0,0,0,.2); box-shadow:-1px 2px 15px 4px rgba(0,0,0,.2); }\r\n.light-img{ position: absolute; width:100%; height: 100%; opacity: 0.1;}\r\n.idea-icon-outer{ float: left; width:26%; padding:30px 10px; text-align: center; padding-bottom: 5px; }\r\n.idea-text-outer{ float: left; width:73% ;text-align: left; font-size: 17px; color: #fff;line-height: 25px; padding: 18px 10px 18px 10px; font-family: 'Orkney'; }\r\n.idea-text-outer a{  text-transform: uppercase; border-bottom: 2px solid #fff; color: #fff;}\r\n.add-user-cta {float: right;width: 25px; border: 2px solid #fff;border-radius: 50%; margin-left: 5px; background: #fff; color: #fff;height: 30px;text-align: center; padding-top: 7px;}\r\n.add-user-cta i{ font-size: 18px; color: #fb5f66;}\r\n.add-user-cta:hover{  color: #fff;}\r\n.users-outer{ float: left; width:100%; padding: 10px 20px; display: table; }\r\n.users{float: left; width: 35px; border: 1px solid #fb5f66; border-radius: 50%; background: #fff; color: #fb5f66; height: 35px; text-align: center;padding-top: 5px;margin: 0px 10px 0 0; font-size: 18px; text-transform: uppercase; font-family: montserratlight;}\r\n.user-name-outer{ float: left; width:80%; min-height: 35px; color: #495559; font-size: 13px; font-family: montserratregular; text-transform: capitalize;}\r\n.user-name-outer span{ color:#4a8fb7; font-size: 11px; font-family: montserratlight; text-transform: capitalize;  }\r\n.temp-card-outer-main{ float: left; width:100%; }\r\n.temp-web-header{ float: left; width:100%; color:#8c9396; font-size: 11px; text-transform: uppercase;  font-family: montserratlight; }\r\n.temp-web-header .name-outer{ float: left; width:63.5%; padding: 10px; padding-left: 20px;  }\r\n.temp-web-header .status-outer{ float: left; width:10%; padding:0 10px 10px 10px; text-align: center;}\r\n.temp-web-header .uv-outer{ float: left; width:10%; padding: 0 5px 10px 5px; text-align: center;}\r\n.temp-web-header .leads-outer{ float: left; width:8%; padding: 0 5px 10px 5px; text-align: center;}\r\n.common-table {display: table; width: 100%; height: 100%;  }\r\n.common-table-cell {display: table-cell; vertical-align: middle; }\r\n.relative{ position: relative;}\r\n/* .new-dropdown-menu:before {  position: absolute;  top: -12px;  left: 56px;  display: inline-block;  border-right: 8px solid transparent;  border-bottom: 12px solid #62696d;  border-left: 8px solid transparent;  border-bottom-color: #62696d;  content: '';} */\r\n.new-dropdown-menu a {     width: 100%;\r\n  float: left;\r\n  padding: 2px 10px;\r\n  color: #fff;\r\n  font-size: 11px;\r\n  font-family: 'montserratlight';\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  line-height: 21px;}\r\n.new-dropdown-menu a i{font-size: 12px; margin-right: 5px}\r\n.new-dropdown-menu a.hvr-sweep-to-right:before {  background: #71787b none repeat scroll 0 0;}\r\n.new-dropdown-menu a .company-block {  float: left;  margin-right: 3px;}\r\n.new-dropdown-menu a .company-block i {  font-size: 14px;  color: #fff !important;  margin: 0px;  margin: 0 5px 0 5px;;}\r\n.new-dropdown-menu a .company-block-content {  float: left;  margin: 0px;  width: 70%;  color: #fff;}\r\n.new-dropdown-menu a .company-block-content .company-title {  color: #fff;  line-height: normal;  width: 90% !important;  float: left;  font-size: 12px;  font-family: montserratlight; text-align: left;  margin-top: 2px;}\r\n/* Shutter Out Vertical */\r\n.hvr-shutter-out-vertical { display: inline-block; vertical-align: middle; -webkit-transform: translateZ(0);  transform: translateZ(0);  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0);  box-shadow: 0 0 1px rgba(0, 0, 0, 0); -webkit-backface-visibility: hidden; backface-visibility: hidden; -moz-osx-font-smoothing: grayscale; position: relative;background: #e1e1e1;-webkit-transition-property: color;transition-property: color; -webkit-transition-duration: 0.3s;transition-duration: 0.3s;}\r\n.hvr-shutter-out-vertical:before { content: \"\"; position: absolute; z-index: -1; top: 0; bottom: 0; left: 0; right: 0; background: #2098d1; -webkit-transform: scaleY(0); transform: scaleY(0); -webkit-transform-origin: 50%;  transform-origin: 50%;  -webkit-transition-property: transform;  -webkit-transition-property: -webkit-transform;  transition-property: -webkit-transform;  transition-property: transform;  transition-property: transform, -webkit-transform;  -webkit-transition-duration: 0.3s; transition-duration: 0.3s; -webkit-transition-timing-function: ease-out; transition-timing-function: ease-out;}\r\n.hvr-shutter-out-vertical:hover, .hvr-shutter-out-vertical:focus, .hvr-shutter-out-vertical:active { color: white;}\r\n.hvr-shutter-out-vertical:hover:before, .hvr-shutter-out-vertical:focus:before, .hvr-shutter-out-vertical:active:before { -webkit-transform: scaleY(1); transform: scaleY(1);}\r\n/* .new-dropdown-menu a.hvr-shutter-out-vertical{ background: transparent;}\r\n.new-dropdown-menu a.hvr-shutter-out-vertical:before { background: #fb7c82 none repeat scroll 0 0; -webkit-transition-duration: 0.2s;transition-duration: 0.2s;} */\r\n/* end: Shutter Out Vertical */\r\n.see-more-link{ float: right; }\r\n.see-more-link a{color: #aaaaaa; font-size: 11px; opacity: 0.6; margin-top: 14px; float: left; font-family: montserratlight; -webkit-transition: all 0.8s ease; transition: all 0.8s ease;}\r\n.see-more-link a:hover{color:#f65f68; opacity: 1; }\r\n.popular-outer{float: left;width: 100%; padding: 10px 20px;  line-height: 20px;  text-align: left; font-size: 13px; }\r\n.popular-text{ float: left; width:68%;min-height: 60px; }\r\n.popular-img-outer{width:70px; height: 50px;   color: #cbd1d4; text-align: center;  padding-top: 18px;  margin-right: 10px; position:relative; overflow: hidden; float: left;}\r\n.popular-img-outer .img-section { height: 50px; width: 70px; background-repeat: no-repeat; position: absolute; top:0; background-size: cover;}\r\n.update-outer{float: left;width: 100%; padding: 10px 20px;  line-height: 18px;  text-align: left; font-size: 13px; color:#8e989f; }\r\n.update-text{ float: left; width:100%;height: 60px; }\r\n.update-text-outer .text-section {font-family: montserratlight; color:#495559; font-size: 13px; position: absolute; top:10px; left:15px;  }\r\n.update-text span{font-family: montserratlight; font-size: 11px;  color: #cacaca;}\r\n.pagination-outer{ float: left; width:100%; margin-top: 0px; margin-bottom: 30px; text-align: center}\r\n.pagination-outer .next-button{ float: right;  padding: 2px 30px 2px 12px; font-family: montserratlight; font-size: 12px; border:1px solid #dae2e6;border-radius: 25px; position: relative; color:#97a0a6; -webkit-transition: all 0.8s ease; transition: all 0.8s ease;}\r\n.pagination-outer .next-button i{ /* IE 9 */    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */    transform: rotate(180deg);     position: absolute; font-size: 17px; top: 3px; right: 9px; color:#97a0a6;}\r\n.pagination-outer .next-button:hover{ border-color: #666; color: #666;}\r\n.pagination-outer .next-button:hover i{color: #666;}\r\n.pagination-outer .next-button.disable{opacity: 0.7; cursor: default;}\r\n.pagination-outer .next-button.disable:hover{ opacity: 0.7;  border-color: #dae2e6; color: #97a0a6; }\r\n.pagination-outer .next-button.disable:hover i{ opacity: 0.7;color: #97a0a6; }\r\n.pagination-outer .back-button{ float: right;  padding: 2px 12px 2px 30px; font-family: montserratlight; font-size: 12px; border:1px solid #dae2e6;border-radius: 25px; position: relative; color:#97a0a6; margin-right: 10px; -webkit-transition: all 0.8s ease; transition: all 0.8s ease;}\r\n.pagination-outer .back-button i{ position: absolute; font-size: 17px; top: 3px; left: 9px; color:#97a0a6;}\r\n.pagination-outer .back-button:hover{ border-color: #666; color: #666;}\r\n.pagination-outer .back-button:hover i{color: #666;}\r\n.pagination-outer .back-button.disable{opacity: 0.7; cursor: default;}\r\n.pagination-outer .back-button.disable:hover{ opacity: 0.7;  border-color: #dae2e6; color: #97a0a6; }\r\n.pagination-outer .back-button.disable:hover i{ opacity: 0.7;color: #97a0a6; }\r\n.pagination-outer .mid-outer{ width:160px; margin: 0 auto; display: block;}\r\n.responsive-view-left{ display: none;}\r\n.responsive-view-right{ float: left; width:35%; display: -webkit-inline-box; display: -ms-inline-flexbox; display: inline-flex;}\r\n.rs-show{ display: none;}\r\n.card-link{position: absolute;top: 0; right: 0; bottom: 0; left: 0; z-index: 2;}\r\na.add-user-cta:hover .popover-block{ display: block;}\r\na.add-user-cta .popover-block {\r\n    position: relative;\r\n    top: 5px;\r\n    left: -22px;\r\n    min-width: 70px;\r\n    padding: 4px;\r\n    font-size: 10px;\r\n    border-radius: 0px;\r\n    background: #62696d;\r\n\r\n    border-radius: 4px !important;\r\n    border: none;\r\n    -webkit-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\r\n            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);\r\n    display: none;\r\n    z-index: 9;\r\n}\r\na.add-user-cta .popover-block:before {\r\n    position: absolute;\r\n    top: -8px;\r\n    right: 29px;\r\n    display: inline-block;\r\n    border-right: 6px solid transparent;\r\n    border-bottom: 8px solid #62696d;\r\n    border-left: 6px solid transparent;\r\n    border-bottom-color: #62696d;\r\n    content: '';\r\n}\r\n.live-link{  position: relative; margin-left: 5px;   }\r\n.live-link i{ font-size: 14px; position: absolute;  z-index: 99; top:10px; color:#666}\r\n.dash-box-send a{ -webkit-box-shadow: none !important; box-shadow: none !important;}\r\n.live-link i:hover{ color:#fb5f66}\r\n.calname-outer{ float: left; width:100%;font-family: montserratlight; margin-top: 21px; }\r\n.calname-outer .caltag{ float: left; font-size: 10px; color: #aaa; border: 1px solid rgba(213,219,222,0.5 ); padding: 0px 10px; line-height: 15px; text-transform: uppercase;border-radius: 5px; margin-right:10px;}\r\n.popular-outer .calname-outer{ float: left; width:100%;font-family: montserratlight; margin-top: 5px; }\r\n.popular-outer .calname-outer .caltag{ float: left; font-size: 10px; color: #aaa; border: 1px solid rgba(213,219,222,0.5 ); padding: 0px 10px; line-height: 15px; text-transform: uppercase;border-radius: 5px; margin-right:10px;}\r\n.popular-outer a{color: #495559;  font-size: 13px; font-family: montserratlight;}\r\n.popular-outer a:hover{color: #fb5f66;  font-size: 13px;}\r\n.updated-date{ float: left; width:100%; font-size: 12px; font-family: montserratlight; color: #4a8fb7;}\r\n.img-overlay{ position: absolute; top:0; right:0; left:0; bottom:0; z-index: 1; background: rgba(0,0,0,0.3);}\r\nspan.user-email{font-family: montserratlight; font-size: 11px;  color: #aaa !important; text-transform:none !important;}\r\n.promo-outer{ background:#4a8fb7 !important; min-height: 150px; float: left; -webkit-border-top-left-radius: 5px;-webkit-border-top-right-radius: 5px;-moz-border-radius-topleft: 5px;-moz-border-radius-topright: 5px;border-top-left-radius: 5px;border-top-right-radius: 5px; width: 100%}\r\n.promo-outer .midOuter{ float: left; width:100%; width:100%; padding:20px; }\r\n.promo-outer .midOuter h3{ float: left; width:100%; font-size: 28px; color:#fff; font-family: montserratlight; text-align: center; margin-top: 0; margin-bottom: 8px;}\r\n.promo-outer .midOuter h3 span{ float: left; width:100%; font-size: 24px; color:#fff; font-family: montserratlight; text-align: center; margin-top: 5px; margin-bottom: 0px;}\r\n.promo-outer .midOuter h3.save-text{ float: left; width:100%; font-size: 24px; color:#fff; font-family: montserratlight; text-align: center; margin-top: 0; margin-bottom: 8px; line-height: 30px;}\r\n.promo-outer .midOuter h3 span.save-text-small{ float: left; width:100%; font-size: 24px; color:#fff; font-family: montserratlight; text-align: center; margin-top: 0px; margin-bottom: 0px; line-height: 30px; }\r\n.promo-outer .midOuter h5{float: left; width:100%;  font-size: 14px; color:#fff; font-family: montserratlight; text-align: center; margin: 15px 0; opacity: 0.5 ;position: relative;}\r\n.promo-outer .midOuter h5.mt2{ margin-top: 2px;}\r\n.promo-outer .midOuter h1{ float: left; width:100%; font-size: 26px; color:#8ff1ff; font-family: montserratlight; text-align: center;  margin-top: 10px; border-bottom: 1px solid #75a8c5; padding-bottom:15px;}\r\n.promo-outer .midOuter h1 i{ font-size: 23px; vertical-align: bottom; padding-bottom: 3px;}\r\n.promo-outer .midOuter h1.dark-text{float: left; width:100%; font-size: 18px; color:#3b1d1f; font-family: montserratlight; font-weight: bold; text-align: center; text-transform: uppercase;  margin-top: 0; border-bottom: 1px solid #75a8c5; padding-bottom:15px; opacity: 0.6;}\r\n.promo-outer .midOuter h1.dark-text i{ font-size: 24px;float: left; width:100%;  color: #fff; margin-bottom: 8px;}\r\n.promo-outer .midOuter h4{ float: left; width:100%; font-size: 24px; color:#fff; font-family: montserratregular; text-align: center; margin-top: 0; margin-bottom: 8px;}\r\n.promo-outer .midOuter h4 span{ float: left;  width:100%; font-size: 11px; font-family: montserratlight; opacity: 0.5; margin-top: 5px; }\r\n.promo-outer .midOuter .upgrade-outer{ float: left; width:100%; text-align: center; padding:24px 0px 17px 0px;}\r\n.promo-outer .midOuter .upgrade-outer a.upgrade-btn{  padding:15px; color: #fff; background: #fb5f66; font-size: 11px; text-transform: uppercase; font-family: montserratregular;  position: relative;  overflow: hidden; -webkit-transition: all 0.8s ease; transition: all 0.8s ease;}\r\n.promo-outer .midOuter .upgrade-outer a.upgrade-btn:before{content: \"\"; position: absolute;top: 0; right: 0; border-width: 0 12px 12px 0; border-style: solid;  border-color: #be575b #ea9399; }\r\n.promo-outer .midOuter .upgrade-outer a.upgrade-btn:hover{color: #fff; background: #fb5f66; }\r\n.mb5{ margin-bottom: 5px !important;}\r\n.mb15{ margin-bottom: 15px !important;}\r\n.promo-outer .midOuter .timer{ float: left; width:100%; font-size: 30px; color:#8ff1ff; text-align: center; border-bottom: 1px solid #75a8c5; padding-bottom:10px; margin-bottom: 15px;}\r\n.promo-outer .midOuter .timer span{ font-size: 14px !important;}\r\n.promo-outer .midOuter .timer i{ display: inline; font-size: 21px;}\r\n.promo-outer .midOuter .timer #demo{ display: inline; width:180px !important;}\r\n.promo-outer .jv-med-text{ font-size: 18px !important; line-height:24px !important }\r\n.promo-outer .jv-mb0{ margin-bottom: 0 !important}\r\n.promo-outer .jv-mt8{ margin-top: 8px !important}\r\n.common-outer-jv{ float: none;display: inline-block; width:100%;  min-height: 280px; margin-bottom:30px;  position: relative; max-width:310px; background: #fff; }\r\n.common-outer-jv img{ float: left; width:100%;}\r\n.common-outer-jv .promo-jv{ position: absolute; top:10px;  padding:10%; color: #62696d; bottom:50px; width:100%;}\r\n.common-outer-jv .promo-jv .text{ font-size: 13px; float: left; width:100%; text-align: center;}\r\n.common-outer-jv .promo-jv .text span{ font-weight: bold;}\r\n.common-outer-jv .promo-jv .large-font span{ font-size: 12px;color:#62696d; text-transform: uppercase;font-family: montserratlight; font-weight: normal; float: left; margin-top: -25px;text-align: center; width: 100%; }\r\n.common-outer-jv .large-font{ font-size:90px; color: #fb5f66; font-weight:bolder; text-align: center;  float: left; width:100%; margin: 20px 0 15px 0; margin-top: 17%;}\r\n.common-outer-jv .large-font-mid{ font-size:50px; color: #fb5f66; font-weight:bolder; text-align: center;  float: left; width:100%; margin: 20px 0 0 0; margin-top: 17%;}\r\n.common-outer-jv .promo-jv .large-font-mid span{ font-size: 14px;color:#62696d; text-transform: uppercase;font-family: montserratlight; font-weight: normal; float: left;  text-align: center; width: 100%; }\r\n.common-outer-jv .large-font-mid1{ font-size: 14px;color:#62696d; font-family: montserratlight; font-weight: normal; float: left; text-align: center; width: 100%; }\r\n.common-outer-jv .large-font-mid1 span{ font-weight: bold; }\r\n.common-outer-jv  .center{width:80%; text-align: center; position: absolute; bottom:0;}\r\n.common-outer-jv  a.upgrade-btn{ padding:9px 25px; color: #fff; background: #fb5f66; font-size: 11px; text-transform: uppercase; font-family: montserratregular;  position: relative;  overflow: hidden; -webkit-transition: all 0.8s ease; transition: all 0.8s ease; -webkit-box-shadow: 3px 2px 10px 0px rgba(0,0,0,.2); box-shadow: 3px 2px 10px 0px rgba(0,0,0,.2); border:1px solid #fff; letter-spacing:3px; }\r\n.p-code{ float: left; width:100%; text-align: center; color: #fff; font-size: 13px; font-family: montserratregular; background: #b7d9ed; -webkit-border-bottom-right-radius: 5px;\r\n-webkit-border-bottom-left-radius: 5px;-moz-border-radius-bottomright: 5px;-moz-border-radius-bottomleft: 5px;border-bottom-right-radius: 5px;border-bottom-left-radius: 5px;  }\r\n.p-code .top-border{background-image: url(https://cdn.filestackcontent.com/KftYffjRr2HCyP9qmUKo); background-repeat:repeat-x; height: 5px; width:100%; float: left; margin-bottom: 8px;  }\r\n.p-code .p-text{ float: left; padding:0 10px 10px 10px; color: #3e4347; font-size: 13px; text-align: left;}\r\n.p-code .p-text i{ float: left; color: #4a8fb7; margin-right: 10px; padding-top: 6px;}\r\n.p-code .p-text .code-outer{ float: left; color: #3e4347; font-size: 13px; text-align: left; width:85%; font-weight: bold;}\r\n.p-code .p-text .code-outer span{ float:left; width:100%; opacity:0.5; font-family: montserratlight;}\r\n.p-code .p-text .code-outer span span{  opacity: 1 !important; float: none; }\r\n.testimonials-outer{ position: relative; padding:15px; margin-bottom: 60px;}\r\n.testimonials-outer .inner{ float: left; width:100%; text-align: center; border: 1px solid #e4e7e9; border-radius: 3px;padding:15px 15px 15px 15px;;  min-height: 150px;}\r\n.testimonials-outer .inner .text{ float: left; width:100%; font-size: 13px; color:#666666; font-family: montserratlight;}\r\n.testimonials-outer .inner .text .text-position{ padding: 10px 0; float: left;}\r\n.testimonials-outer .inner .img-outer{width:60px; height: 60px;  border-radius: 50px; color: #cbd1d4; text-align: center;  padding-top: 18px;  margin-right: 10px; position:relative; overflow: hidden; margin: 0px auto 10px auto;}\r\n.testimonials-outer .inner .img-outer .img-section { height: 60px; width: 60px; /*background-image: url(../images/user.jpg);*/ background-repeat: no-repeat; position: absolute; top:0; background-size: cover;}\r\n.testimonials-outer .inner .text h5{color:#4a8fb7; font-size: 14px; float: left; width: 100%; margin: 0 0 5px 0; font-family: montserratregular;}\r\n.testimonials-outer .inner .text h5 span{ color: #aaaaaa; font-size: 11px; float: left; width: 100%; margin-top: 2px; font-family: montserratlight;}\r\n.testimonials-outer .inner .carousel{ min-height: 200px;}\r\n.testimonials-outer .inner .carousel-indicators{ bottom:-15px !important;}\r\n.testimonials-outer .inner .carousel-indicators li{ border-color: #d5d5d5 !important ;width: 8px;height: 8px;}\r\n.testimonials-outer .inner .carousel-indicators .active {width: 9px;height: 9px; margin: 0; background-color: #aaa;}\r\n.testimonials-outer .inner .icon-position{position: absolute; right: 12px; bottom: 0px;}\r\n.dashboard-overlay {position: fixed;z-index: 999; background: rgba(0,0,0,0.8);  background: radial-gradient(center,ellipse cover,rgba(0,0,0,0.4) 0,rgba(0,0,0,0.9) 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#66000000',endColorstr='#e6000000',GradientType=1);  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";  filter: alpha(opacity=50);-webkit-transition: all 0.3s ease-out;transition: all 0.3s ease-out;top:0; bottom:0; left:0; right:0;font-size: 13px; overflow-y:auto; overflow-x:hidden;  }\r\n.dashboard-overlay{ float: left; width:100%; padding:10px 0; }\r\n.dashboard-overlay.dash-with-header .intro-btn-outer{position: absolute; top:122px; left:2%; width:260px; z-index: 9999; }\r\n.dashboard-overlay.dash-with-header .intro-btn-outer .link-button{ border: 1px solid #fb5f66; color:#fff; background-color:#fb5f66; padding: 11px 30px 11px 50px; font-size: 14px; margin: 0 auto; font-family: 'montserratlight' !important;  position: relative;border-radius: 50px; -webkit-transition: all 0.8s ease; transition: all 0.8s ease; -webkit-box-shadow: 0 2px 10px 1px rgba(0,0,0,.1); box-shadow: 0 2px 10px 1px rgba(0,0,0,.1);  }\r\n.dashboard-overlay.dash-with-header .intro-btn-outer .link-button i{ position: absolute;left: 25px;top: 9px; font-size: 21px;}\r\n.dashboard-overlay.dash-with-header .card-outer{position: absolute;width: 52%; top: 187px;left: 14%; z-index: 9999;max-width: 995px }\r\n.dashboard-overlay.dash-with-header .text-img{position: absolute; z-index: 9999; left: 40%; top: 24%;}\r\n.dashboard-overlay .intro-btn-outer{position: absolute; top:85px; left:2%; width:260px; z-index: 9999; }\r\n.dashboard-overlay .intro-btn-outer .link-button{ border: 1px solid #fb5f66; color:#fff; background-color:#fb5f66; padding: 11px 30px 11px 50px; font-size: 14px; margin: 0 auto; font-family: 'montserratlight' !important;  position: relative;border-radius: 50px; -webkit-transition: all 0.8s ease; transition: all 0.8s ease; -webkit-box-shadow: 0 2px 10px 1px rgba(0,0,0,.1); box-shadow: 0 2px 10px 1px rgba(0,0,0,.1);  }\r\n.dashboard-overlay .intro-btn-outer .link-button i{ position: absolute;left: 25px;top: 9px; font-size: 21px;}\r\n.dashboard-overlay .card-outer{position: absolute;width: 69%; top: 220px;left: 31px; z-index: 9999; }\r\n.dashboard-overlay .text-img{position: absolute; z-index: 9999; left: 40%; top: 24%;}\r\n.dashboard-notification{ position: fixed; display: none; padding: 10px; bottom: -40px;background: #fb5f66; font-family: montserratlight;color: #fff;left: 60px; z-index: 9999; width: 344px;border: 1px solid #fb5f66; -webkit-box-shadow: 0 0px 7px 2px rgba(0, 0, 0, 0.2); box-shadow: 0 0px 7px 2px rgba(0, 0, 0, 0.2);\r\nborder-radius: 3px; min-height: 50px;  }\r\n.dashboard-notification span{ float: left;width:40px; height:50px; position: relative;}\r\n.dashboard-notification span i{ position: absolute; top: 10px; left: 4px; font-size: 30px;}\r\n.dashboard-notification .text{ float: left;width:84%; margin-left: 5px; font-size: 13px; font-weight: normal; position: relative;}\r\n.dashboard-notification .text .table-view{ display: table; width: 100%; height: 50px;}\r\n.dashboard-notification .text .table-view div{ display: table-cell; vertical-align: middle;}\r\n.dashboard-notification a{ font-size: 12px; color: #fff; position: absolute; top:4px; right:4px; opacity: 0.5; cursor: pointer; }\r\n.dashboard-notification a:hover{opacity:1;}\r\n.dashboard-notification i{ font-size: 14px;}\r\n.scroll-outer{ float: left; width:100%; max-height: 218px;}\r\n.scrollbar {overflow-y: auto;}\r\n.scrollbar::-webkit-scrollbar-track {\r\n    border-radius: 0px;\r\n    background-color: #f5f5f5;\r\n}\r\n.scrollbar::-webkit-scrollbar {\r\n    width: 6px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.scrollbar::-webkit-scrollbar:horizontal {\r\n    height: 6px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.scrollbar::-webkit-scrollbar-thumb {\r\n    border-radius: 4px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.create-temp-outer.new-experience{padding: 60px 25px; margin-bottom:30px; background: #fff; text-align: center; width:98%;border-radius: 5px;  -webkit-box-shadow: 0px 3px 10px 0px rgba(0,0,0,.1);  box-shadow: 0px 3px 10px 0px rgba(0,0,0,.1); }\r\n.pt63.padding-0{ padding: 0 !important}\r\n/*dashboard-new css end*/\r\n/* radio */\r\n#assignCompany .check-icon {\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  cursor: pointer;\r\n  float: left;\r\n  color: #62696d;\r\n  font-family: montserratregular;\r\n  margin-bottom: 0px;\r\n  width: 50%;\r\n}\r\n#assignCompany .check-icon input[type=checkbox], #assignCompany .check-icon input[type=radio] {\r\n  left: -9999px;\r\n  position: absolute;\r\n}\r\n#assignCompany .check-icon label {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 15px;\r\n  border: 1px solid #fb5f66;\r\n  border-radius: 3px;\r\n  margin: 0 auto;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  text-align: center;\r\n  color: #62696d;\r\n  float: left;\r\n  padding: 0px;\r\n  margin-right: 8px; border-radius: 50%;\r\n}\r\n#assignCompany .check-icon input[type=radio]:checked + label:after {\r\n  font-family: Material Icons;\r\n  content: \"\\e5ca\";\r\n}\r\n#assignCompany .check-icon label:after {\r\n  display: inline-block;\r\n  top: -17px;\r\n  color: #fff;\r\n  position: relative;\r\n  font-size: 14px;\r\n  left: -1px;\r\n  padding-right: 0px;\r\n}\r\n#assignCompany .check-icon label span{ float: left; padding-left: 20px; font-size: 11px; color: #8e989f; font-family: montserratlight; line-height: 12px; font-weight: normal; text-align: left; width:250px; overflow: hidden;text-overflow: ellipsis; white-space: nowrap; }\r\n#assignCompany .check-icon input[type=\"radio\"]:checked + label::after {\r\n background: #fb5f66;\r\n display: inline-block;\r\n position: relative;\r\n width: 16px;\r\n height: 16px;\r\n left: -1px;\r\n font-size: 12px;\r\n color: #fff;\r\n border-radius: 50%;\r\n padding-left: 1px;\r\n top:-14px;\r\n  }\r\n#assignCompany h3{ font-family: montserratlight; font-size: 20px; color: #fb5f66; float: left; width:93%; }\r\n#assignCompany h5{ font-family: montserratlight; font-size: 12px; color: #62696d; float: left; line-height: 18px;}\r\n#assignCompany .modal-header {padding:25px 30px 0 30px; border: none;}\r\n#assignCompany .modal-footer {padding: 15px 30px 60px 15px; text-align: right; border:none;  }\r\n#assignCompany .btn-red{ background: #fb5f66; font-size: 12px;font-family: montserratlight; color: #fff; text-transform: uppercase;  position: absolute; bottom:20px; right: 30px; padding: 10px 25px;  }\r\n#assignCompany .btn-red:hover{ background: #fb5f66;  color: #fff;}\r\n#assignCompany .modal-body {position: relative; padding: 3px 15px;}\r\n#assignCompany .alert.alert-danger.custom-alert{ position: relative; padding-left: 35px;}\r\n#assignCompany .alert.alert-danger.custom-alert i{font-size: 18px;top: 8px;position: absolute; left: 10px;}\r\n/* end: radio */\r\n/*dashboard-new responsive css*/\r\n/*dashboard-new responsive css*/\r\n.form-group.form-group-radio span.heading {\r\n    display: block;\r\n    font-size: 14px;\r\n    color: #8e989f;\r\n    margin-bottom: 10px;\r\n}\r\n.modal .form-group {\r\n    padding-bottom: 7px;\r\n    margin: 23px 0 0;\r\n    clear: both;\r\n}\r\n/*.temp-name{ font-size: 16px;line-height: 20px; width:100%; position: absolute; padding: 15px; color:#fff; z-index: 9; left:40px; top:40px; width:91%}*/\r\n@-moz-document url-prefix() {\r\n  .artical-outer .common-table {height: 58px; min-height: 58px;}\r\n}\r\n/** New dashboard design ***/\r\n.select-template-block .center-cont .check-icon label.full-wid {  border: 0px;  height: auto;  cursor:pointer;padding: 0;  line-height: initial;}\r\n.select-template-block .step1{ display: -webkit-box; display: -ms-flexbox; display: flex; margin-top:0px; -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between;  -webkit-box-align: stretch;  -ms-flex-align: stretch;  align-items: stretch;  max-width: 98%;}\r\n.select-template-block  .center-cont{display: table;background: #fff; border-radius: 10px;  border:2px solid #ecf0f2;  -webkit-transition: 0.5s;  transition: 0.5s;height: 100%;  cursor: pointer;   text-align: left;}\r\n.select-template-block .calquiz-block{  -webkit-box-flex:1;  -ms-flex:1;  flex:1; margin-right: 20px;}\r\n.select-template-block .calquiz-block:last-child{margin-right: 0px;}\r\n.select-template-block .calquiz-block .check-icon{    display:table-cell; vertical-align: top; padding: 20px; }\r\n.select-template-block .calquiz-block .center-cont:hover, .select-template-block .calquiz-block .center-cont.active {background:transparent;  border-color:#a7cbe1; -webkit-transition: 0.5s; transition: 0.5s; -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,0.15); box-shadow: 0px 0px 10px rgba(0,0,0,0.15)}\r\n.select-template-block  .animated-icon{  overflow: hidden; -webkit-transition: 0.5s; transition: 0.5s; width: 55px !important;  height: 55px;  transition:  0.5s; -webkit-transform: scale(1); transform: scale(1); position: relative;  left: 0;  border: 1px solid #aaa;  border-radius: 50%;  text-align: center;  display: -webkit-box;  display: -ms-flexbox;  display: flex;  -webkit-box-pack: center;  -ms-flex-pack: center;  justify-content: center;  -webkit-box-align: center;  -ms-flex-align: center;  align-items: center;}\r\n.select-template-block  .calc-quiz-margin h3{font-size: 14px;text-transform: uppercase;color: #444; margin: 25px 0 20px}\r\n.select-template-block  .animated-icon i{color:#aaaaaa}\r\n.select-template-block label.full-wid{float:left; width:100%;margin: 0; height: auto;}\r\n.select-template-block  ul.cont-list {  float: left;  width: 100%;  margin: 0;}\r\n.select-template-block  ul.cont-list li{font-size: 11px;float:left; width:100%; margin-bottom:4px; opacity:0.6;color:#444; position: relative; padding-left: 10px;   line-height: 18px;font-family: montserratlight}\r\n.select-template-block  ul.cont-list li::after{position: absolute; content: \"\\f105\"; font-family: FontAwesome; left:0; top:0; opacity:0.4}\r\n.select-template-block h3.example-heading {  color: #888;  font-size: 11px;  margin: 0 0 10px 0;  float: left;  width: 100%;}\r\n.select-template-block  .calc-quiz-margin {  float: left;  width: 100%;}\r\n.select-template-block .calquiz-block .check-icon:hover .calc-quiz-margin h3 ,  .select-template-block  .center-cont.active .calc-quiz-margin h3 {font-family:montserratbold;}\r\n.select-template-block .calquiz-block .check-icon:hover  .animated-icon  ,  .select-template-block  .center-cont.active .check-icon  .animated-icon{background-color: #fff; border-color: #d6e8f3; -webkit-transition: 0.5s; transition: 0.5s; -webkit-transform: scale(1.1); transform: scale(1.1)}\r\n.select-template-block .calquiz-block .check-icon:hover  .animated-icon i , .select-template-block  .center-cont.active  .check-icon .animated-icon i{color:#fb545b}\r\n.select-template-block  .active .res-outer {  display: none;}\r\n.select-template-block h4 {  float: left;  width: 100%;\r\n   /* color: #3e94c7; */\r\n     text-transform: uppercase;  margin:20px 0 5px 0;  font-size: 18px;}\r\n.select-template-block p{  float: left;  width: 100%;  color: #3e94c7;  margin: 0 0 0px 0;  font-size: 18px;  font-family: montserratlight !important;}\r\n.pdtop15{padding-top:15px }\r\n.select-template-block   .center-cont.active  .calc-quiz-margin h3{margin-bottom:0;}\r\n.select-template-block .calquiz-block  .res-outer{margin: 0 !important;  padding: 0px !important;}\r\n.temaplate-cont-part  .center-cont{padding: 10px}\r\n@media (max-width:767px){\r\n  .select-template-block .step1{ display: block;}\r\n  .select-template-block .calquiz-block{  width:100%; float: left; margin-bottom: 20px}\r\n  .select-template-block  .center-cont{width:100%; min-height: 220px;}\r\n  .new-select-template.select-template-block .text-template-block{width:100%;   margin-bottom: 10px;}\r\n  .new-select-template.select-template-block{display: block !important;}\r\n  .new-select-template.select-template-block  .text-template-block h4  , .new-select-template.select-template-block  .text-template-block p {text-align:center;width:100% !important}\r\n  .new-select-template.select-template-block  .temaplate-cont-part .center-cont:hover .over-cont.res-outer{display: none !important}\r\n\r\n}\r\n@media (min-width:480px) and (max-width:767px){\r\n  .temaplate-cont-part{width:50% !important}\r\n}\r\n@media (max-width:479px){\r\n  .temaplate-cont-part{width:100% !important}\r\n}\r\n/************new template*******/\r\n.new-select-template.select-template-block {\r\n  float: left;\r\n  width: 98%;\r\n  border: 1px solid #edf0f1;\r\n  margin: 10px 0 20px;\r\n  background: #fff;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding: 13px 13px 3px;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.new-select-template.select-template-block .center-cont {padding: 10px;-webkit-box-align: center;-ms-flex-align: center;align-items: center; display: -webkit-box; display: -ms-flexbox; display: flex; min-height: 55px;}\r\n.new-select-template.select-template-block .check-icon{padding: 0; line-height: 1; padding-left:27px; position: relative; margin: 0}\r\n.new-select-template.select-template-block .center-cont .check-icon label.full-wid {\r\n  width: auto !important;\r\n  position: absolute !important;\r\n  left: 0;\r\n  top: 50%;\r\n  margin-top: -11px;\r\n\r\n}\r\n.new-select-template.select-template-block .center-cont .check-icon  .calc-quiz-margin h3{font-size: 12px; margin: 0px 0 0; line-height: 15px;}\r\n.new-select-template.select-template-block .check-icon label span.animated-icon.animated-calc i{padding: 0 !important; font-size: 22px !important;}\r\n.new-select-template.select-template-block .check-icon label span.animated-icon.animated-calc{border: 0px; width: auto !important;height: auto; border-radius: 0px; top:0;}\r\n.temaplate-cont-part .center-cont {\r\n  float: left;\r\n  width: 100%;\r\n  border: 1px solid #eee;\r\n  border-radius: 5px;\r\n  min-height: auto;\r\n  padding: 15px;\r\n}\r\n.temaplate-cont-part {\r\n  float: left;\r\n  max-width: auto;\r\n  padding: 0 5px;\r\n  width:auto;\r\n  margin-bottom:10px;\r\n  -webkit-box-flex:1;\r\n      -ms-flex:1;\r\n          flex:1;\r\n  position: relative;\r\n\r\n\r\n}\r\n.new-select-template.select-template-block .over-cont.res-outer{\r\n  display: block;\r\n  position: absolute;\r\n  background: #fff;\r\n  left: -11px;\r\n  right: -11px;\r\n  top: 30px;\r\n  padding: 10px;\r\n  border: 1px solid #eee;\r\n  z-index: 100;\r\n  padding-left: 12px;\r\n  border-top: 0;\r\n  border-bottom-right-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n  display: none;\r\n  -webkit-box-shadow:0px 2px 5px rgba(0,0,0,0.05);\r\n          box-shadow:0px 2px 5px rgba(0,0,0,0.05);\r\n}\r\n.text-template-block {float: left; width:165px; padding: 0 10px; text-transform: uppercase}\r\n.new-select-template.select-template-block  .text-template-block h4  {\r\n    float: left;\r\n    width: auto;\r\n    font-size: 14px;\r\n    margin: 0px 0 0;\r\n    clear: both;\r\n}\r\n.new-select-template.select-template-block  .text-template-block p{\r\n  float: left;\r\n  width: auto;\r\n  font-size: 14px;\r\n  margin: 0;\r\n  clear: both;\r\n}\r\n.new-select-template.select-template-block  .temaplate-cont-part .center-cont:hover{border-color: #a7cbe1; -webkit-transition: 0s; transition: 0s;}\r\n.new-select-template.select-template-block  .temaplate-cont-part .center-cont:hover span.animated-icon.animated-calc i{color:#fb545b}\r\n.martop10{margin-top:10px}\r\n.preloader-dash{position:absolute;top:0;left:0;right:0;bottom:0;background-color:#fff;z-index:9999}\r\n.preloader-dash .content-loader{border:1px solid #ececec}\r\n.preloader-dash .timeline-item{background:#fff;margin:0 auto;max-width:95vw;padding:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;-ms-flex-line-pack:stretch;align-content:stretch}\r\n.preloader-dash .animated-background{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:placeHolderShimmer;animation-name:placeHolderShimmer;-webkit-animation-timing-function:linear;animation-timing-function:linear;background:#eee;background:-webkit-gradient(linear,left top, right top,color-stop(8%, #eee),color-stop(18%, #ddd),color-stop(33%, #eee));background:linear-gradient(to right,#eee 8%,#ddd 18%,#eee 33%);background-size:800px 104px}\r\n.preloader-dash .circle-logo {height: 84px;width: 170px;}\r\n.preloader-dash .time{ width: 14%; height: 8px; float: right; position: absolute;left: 22%; top: 20px;  }\r\n.preloader-dash .line{ height: 30px; margin-top: 30px; }\r\n.preloader-dash .line-1{ width: 31%; position: absolute; height: 20px; left: 22%; top: 10px; }\r\n.preloader-dash .line-2{ width: 6%; position: absolute; height: 20px; left: 67%; top: 10px;  }\r\n.preloader-dash .line-3{ width: 6%; position: absolute; height: 20px; left: 77%; top: 10px;  }\r\n.preloader-dash .line-4{ width: 6%; position: absolute; height: 20px; left: 87%; top: 10px;  }\r\n.preloader-dash .line-5{ width: 6%; position: absolute; height: 20px; left: 22%; top: 50px;  }\r\n.preloader-dash .line-6{ width: 6%; position: absolute; height: 20px; left: 30%; top: 50px;  }\r\n.preloader-dash .line-parent{ display: -webkit-inline-box; display: -ms-inline-flexbox; display: inline-flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; height: 80%; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center; }\r\n@-webkit-keyframes placeHolderShimmer{\r\n    0%{\r\n      background-position:-468px 0\r\n    }\r\n    100%{\r\n      background-position:468px 0\r\n    }\r\n  }\r\n@keyframes placeHolderShimmer{\r\n    0%{\r\n      background-position:-468px 0\r\n    }\r\n    100%{\r\n      background-position:468px 0\r\n    }\r\n  }\r\n/*****************/\r\n.dashboard-overlay .dashboard-temp.card-outer{top:88px;}\r\n.dashboard-overlay .dashboard-temp .new-select-template{width:100%}\r\n.dashboard-overlay .dashboard-temp .new-select-template.select-template-block .over-cont.res-outer{display:none !important}\r\n.dashboard-overlay.dash-with-header  .card-outer  {  top: 265px;}\r\n.dashboard-overlay.dash-with-header  .dashboard-temp.card-outer{top:120px;}\r\n/* start: add teammates Modal */\r\n#add-teammates .modal-content{border-radius:5px;float:left;width:100%;height:100%;background:#fff;background:-webkit-gradient(linear,left top, right top,color-stop(0, #fff),color-stop(67%, #fff),color-stop(67%, #f2f2f2),color-stop(67%, #f2f2f2),to(#f2f2f2));background:linear-gradient(to right,#fff 0,#fff 67%,#f2f2f2 67%,#f2f2f2 67%,#f2f2f2 100%);border:none}\r\n#add-teammates .modal-header{padding:0;border-bottom:none}\r\n#add-teammates .modal-header span{font-size:12px;color:#6b7175;font-family:montserratlight}\r\n#add-teammates.modal button.close.btn-close{text-shadow:none;position:absolute;right:20px;top:23px;z-index:9;opacity:1;-webkit-transition:all .3s ease 0s!important;transition:all .3s ease 0s!important}\r\n#add-teammates.modal i.material-icons{font-size:22px;color:#d7dbdd;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}\r\n#add-teammates.modal i.material-icons:hover{color:#62696d!important;opacity:.7}\r\n#add-teammates .modal-title{text-transform:uppercase;color:#fb5f66;font-size:18px;font-family:montserratlight;margin-bottom:10px;float:left;width:100%}\r\n#add-teammates.modal .modal-body{padding:0;height:100%;width:100%;float:left}\r\n#add-teammates.modal .modal-body-inner{float:left;width:100%}\r\n#add-teammates .btn-red-outline{color:#fb5f66;background-color:#fff;border-color:#fb5f66;border-radius:0;font-size:11px;padding:7px 20px;margin:60px 0 0;-webkit-transition:all .3s ease 0s;transition:all .3s ease 0s;font-family:montserratregular;text-transform:uppercase;float:right}\r\n#add-teammates.modal .form-group-outer span.email-list{font-size:12px;text-transform:uppercase;color:#fb5f66;position:relative;top:27px}\r\n#add-teammates.modal .form-group-outer{margin-bottom:0;margin-top:0!important}\r\n#add-teammates.modal .form-group-outer:first-child{margin-top:0!important;margin-bottom:0!important}\r\n#add-teammates.modal .form-group{padding-bottom:7px;margin:0;clear:none}\r\n#add-teammates.modal .form-group label.control-label{margin-left:22px}\r\n#add-teammates.modal .form-group input{margin-left:22px;width:87%;margin-bottom:0}\r\n#add-teammates.modal .alert-info{color:#62696d;background-color:#eceff0;border-color:#eceff0;border-radius:0;font-size:12px;font-family:montserratlight;line-height:20px;padding:15px 20px}\r\n#add-teammates.modal .alert-info p{margin:0 0 0 20px}\r\n#add-teammates .modal-right{float:left;width:33%;display:table;min-height:370px}\r\n#add-teammates .modal-right-inner{padding:50px 25px 50px 15px;color:#6b7175;font-family:montserratlight;display:table-cell;vertical-align:middle;float:none}\r\n#add-teammates .modal-right-inner h5{font-size:18px;font-family:montserratlight;margin-top:30px}\r\n#add-teammates .modal-right-inner ul{margin:0 0 0 20px}\r\n#add-teammates .modal-right-inner ul li{font-size:13px;text-align:left;line-height:24px}\r\n#add-teammates .modal-right-inner ul li i.material-icons{font-size:13px;display:inline-block;vertical-align:middle;margin-right:5px;color:#6b7175}\r\n#add-teammates.modal .modal-left{padding:25px;float:left;height:100%;width:67%}\r\n#add-teammates .modal-dialog{width:785px}\r\n#add-teammates .modal-footer{padding:0;text-align:right;border-top:none;color:#8e989f;float:left;width:100%}\r\n#add-teammates .modal-footer .btn-red{color:#fff;background-color:#fb5f66;border-color:#fb5f66;border-radius:4px;font-size:12px;padding:10px 30px;margin-top:0;-webkit-transition:all .3s ease 0s;transition:all .3s ease 0s;margin-right:0;text-transform:uppercase;font-family:montserratregular;position:relative}\r\n#add-teammates .modal-footer a.text-cancel,#add-teammates .modal-footer span.add-more{text-transform:uppercase;display:inline-block;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out;cursor:pointer}\r\n#add-teammates .modal-footer a.text-cancel{font-size:12px;color:#62696d;opacity:.7;margin-right:13px;margin-top:11px}\r\n#add-teammates .modal-footer a.text-cancel:hover{opacity:1}\r\n#add-teammates .modal-footer span.add-more{font-size:11px;color:#fb5f66;float:left;margin-top:12px;margin-left:20px}\r\n#add-teammates .modal-footer span.add-more i.material-icons{color:#fb5f66!important;font-size:12px!important;position:relative;top:2px}\r\n#add-teammates.modal .form-group-outer span.icon-delete{float:right;position:relative;right:10px;bottom:30px;cursor:pointer}\r\n#add-teammates.modal .icon-delete i.material-icons{font-size:16px!important;color:#62696d!important;opacity:.5}\r\n#add-teammates.modal .icon-delete i.material-icons:hover{opacity:.7!important}\r\n#add-teammates.modal .sahil-material.scrollbar{height:210px;margin-bottom:15px}\r\n/* end: add teammates Modal */\r\n.imgT7{opacity: 0.2;}\r\n.imgT7{opacity: 0.2;}\r\n.become-anAffiliate {\r\n    position: fixed;\r\n    right: -190px;\r\n    top: 40%;\r\n    background: #f2f2f2;\r\n    border: 2px solid #ffffff;\r\n    -webkit-box-shadow: 0px 0px 20px 1px rgba(0,0,0,.25);\r\n            box-shadow: 0px 0px 20px 1px rgba(0,0,0,.25);\r\n    border-radius: 5px 0px 0px 5px;\r\n    color: #62696d;\r\n    font-size: 13px;\r\n    width: 220px;\r\n    -webkit-transition: all 0.8s ease-out;\r\n    cursor: pointer;\r\n    z-index: 9;\r\n}\r\n.become-anAffiliate:hover {\r\n    width: 220px;\r\n    right: -4px;\r\n}\r\n.become-anAffiliate-left {\r\n    -webkit-transform: rotate(-90deg);\r\n    transform: rotate(-90deg);\r\n    background: #7f8488;\r\n    float: left;\r\n    width: auto;\r\n    position: absolute;\r\n    left: -73px;\r\n    top: 74px;\r\n    padding: 5px 13px;\r\n    color: #fff;\r\n    font-family: montserratlight;\r\n    border-radius: 3px 3px 0px 0px;\r\n}\r\n.become-anAffiliate-left img {\r\n    -webkit-transform: rotate(-90deg);\r\n    transform: rotate(-90deg);\r\n    margin-left: 4px;\r\n    margin-bottom: 2px;\r\n}\r\n.become-anAffiliate-right {\r\n    padding: 25px 42px;\r\n    float: left;\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-left: 15px;\r\n}\r\n.become-anAffiliate-right img {\r\n    display: block;\r\n    margin: 0 auto 15px;\r\n}\r\n.become-anAffiliate .btn-red {\r\n    float: none;\r\n    opacity: 1;\r\n    color: #fff;\r\n    padding: 8px 12px;\r\n    background: #fb5f66;\r\n    border-color: #fb5f66;\r\n    border-radius: 4px;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    font-family: montserratlight;\r\n    margin: 15px auto 0px;\r\n}\r\n.become-anAffiliate .btn-red:focus {\r\n    background: #fb5f66 !important;\r\n    border-color: #fb5f66 !important;\r\n    color: #fff !important;\r\n}\r\n#add-new-user span#upgradeLink button{color:#fb5f66;background-color:#fff;border-radius:0;font-size:10px;padding:6px 10px;-webkit-transition:all .3s ease 0s;transition:all .3s ease 0s;font-family:montserratregular;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none;border:none;margin-left:10px}\r\n#add-new-user span#upgradeLink button:hover{background:#fdb6b9;color:#fb5f66;border-color:#fdb6b9}\r\n#add-new-user .alert.alert-danger p{float:left;width:auto}\r\n#add-new-user .alert.alert-danger p span,#add-new-user span#upgradeLink{float:left}\r\n.referral-ui {\r\n    padding: 25px;\r\n}\r\n.referral-ui h4 {\r\n    font-size: 13px;\r\n    color: #fb5f66;\r\n    margin-top: 15px;\r\n}\r\n.referral-ui span {\r\n    font-size: 12px;\r\n    color: #4a5558;\r\n    font-family: montserratlight;\r\n    display: block;\r\n    opacity: 0.8;\r\n    line-height: 18px; margin-bottom: 6px;\r\n}\r\n/* .referral-ui .btn-red-rounded {\r\n  background: #fb5f66;\r\n  color: #fff;\r\n  font-size: 13px;\r\n  text-transform: none;\r\n  border-radius: 25px;\r\n  padding: 8px 22px;\r\n  margin-top: 20px;\r\n  transition: all .3s ease 0s;\r\n} */\r\n.referral-ui h2 {\r\n    font-size: 18px;\r\n    color: #fb5f66;\r\n    font-family: montserratregular;\r\n    padding: 0px 30px;\r\n    text-transform: uppercase; line-height: 24px;\r\n\r\n}\r\n/* .referral-ui .img-getFreeMonths{margin-left: 75px;} */\r\n.over-cont.res-outer.padding-top{ padding-top:16px !important;}\r\n@media (min-width:5120px) and (max-width:5120px){\r\n  .dash-box{min-height:1000px}\r\n  .dash-box figure{height:500px}\r\n  .dash-box-top,.dash-top2-textinner{min-height:500px}\r\n  .dash-box-bottom{padding:80px}\r\n  .dash-box-bottom ul{width:100%;margin-bottom:100px}\r\n  .dash-box-bottom ul li{margin-top:50px}\r\n  .dash-top3-circle{height:280px;width:280px;font-size:23px;padding-top:80px}\r\n  .dash-top3circletable{height:1024px}\r\n  .dash-circle{width:100px;height:100px;font-size:44px;margin-right:28px}\r\n  .dash-prog-outer h2{font-size:26px!important;line-height:32px;margin-top:20px}\r\n  .dash-circle-red{width:100px;height:100px;padding-top:30px}\r\n  .circle-cal-outer{width:200px}\r\n  .circle-cal-outerh2{font-size:34px!important}\r\n  .circle-cal-outer h5,.dashboard-helptip.help-tip i{font-size:17px}\r\n  .dash-circle-d-pink,.dash-circle-pink{width:100px;height:100px;padding-top:30px}\r\n  .dash-top2-textinner .company-dropdown-title-active{font-size:22px}\r\n  .dash-top2-textinner h3{margin-bottom:100px;font-size:36px;margin-top:20px}\r\n  .dash-box-send{height:120px;width:120px;padding-top:40px}\r\n  .dash-box-bottom ul li:first-child{margin-top:0!important}\r\n}\r\n@media  (min-width : 1500px) {\r\n  .new-dashboard .dashboard-left-part, .new-dashboard .dashboard-right-part{max-width: 340px}\r\n  .new-dashboard .dashboard-main-part {float: left;width: calc(100% - 680px);}\r\n  .new-dashboard .calquiz-outr {max-width: 80%;}\r\n}\r\n@media only screen and (min-width : 1920px)\r\n{\r\n.idea-icon-outer{ padding-top:20px;}\r\n.dashboard-outer {min-height: 93vh;}\r\n.dashboard-overlay.dash-with-header .intro-btn-outer { top: 122px; left: 14%; }\r\n.dashboard-overlay .intro-btn-outer { top: 85px; left: 14%; }\r\n.dashboard-overlay .card-outer { width: 52%; left: 14%;}\r\n}\r\n@media (max-width: 1900px){\r\n    #signUp .form-group .control-label.label-url,\r\n    .modal .form-group.label-floating.is-focused label.control-label,\r\n    .modal .form-group.label-floating:not(.is-empty) label.control-label,\r\n    .my-profile .form-group.favicon-upload label.control-label,\r\n    .my-profile .form-group.time-zone label.control-label,\r\n    .sahil-material .form-group.label-floating.is-focused label.control-label,\r\n    .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {font-size: 10px!important;}\r\n}\r\n@media only screen and (min-width : 1600px) and (max-width : 1680px)\r\n{\r\n  .dashboard-overlay.dash-with-header .intro-btn-outer { top: 12.5%; left: 8.5%; }\r\n   .dashboard-overlay .card-outer {width: 60.5%;top: 220px; left: 140px;}\r\n   .dashboard-overlay .intro-btn-outer{left: 8.5%;}\r\n}\r\n@media only screen and (min-width : 1200px) and (max-width : 1600px)\r\n{\r\n    .dashboard-overlay.dash-with-header  .intro-btn-outer { top: 122px; left: 30px; }\r\n    .dashboard-overlay.dash-with-header  .card-outer { width: 70%; left: 30px;}\r\n    .dashboard-overlay .intro-btn-outer { top: 85px; left: 30px; }\r\n    .dashboard-overlay .card-outer { width: 70%; left: 30px;}\r\n    }\r\n@media only screen and (min-width : 0px) and (max-width : 1023px) {\r\n      .card-shd-outer{ width: 100%;}\r\n      .cookies-header{display: none;}\r\n      #new-header.cookies-parent .navbar-default{ height: 55px;}\r\n      .new-select-template.select-template-block  .temaplate-cont-part .center-cont:hover .over-cont.res-outer{display: none !important}\r\n      .new-select-template.select-template-block{width: 100% !important}\r\n\r\n    }\r\n@media only screen and (min-width : 1367px)\r\n{\r\n  .responsive-fix{ float: none; width:1366px ; margin: 0 auto;}\r\n  }\r\n@media (min-width: 320px) and (max-width: 990px) {\r\n  #add-teammates .modal-dialog{width:auto!important;margin:10px 10px 50px!important;float:left!important}\r\n  #add-teammates.modal .modal-left{float:left;width:100%;padding:20px}\r\n  #add-teammates .modal-right{width:100%;height:auto}\r\n  #add-teammates .modal-footer{padding:0}\r\n  #add-teammates.modal .modal-body{height:auto;width:100%;float:left;background:0 0}\r\n  #add-teammates.modal .modal-body-inner{background:0 0}\r\n  #add-teammates .modal-content,#add-teammates .modal-header{background:#fff}\r\n  #add-teammates .modal-right-inner{background:#f2f2f2;border-radius:0 0 5px 5px}\r\n  #add-teammates .modal-right-inner ul li{text-align:center}\r\n\r\n}\r\n@media (min-width:990px) and (max-width:1300px)\r\n{\r\n  .user-outr{width:100%;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}\r\n  .dash-prog-outer{width:calc(100% - 110px)}\r\n  .circle-sec{text-align:center}\r\n  .circle-cal-outer{width:65%}\r\n  .circle-cal-outer h2{width:94%;margin:7px 0 5px}\r\n  .dash-prog-outer h2{font-size:15px!important}\r\n  .dash-prog-outer h5{font-size:11px}\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-title{width:100%}\r\n  .dash-prog-outer .company-dropdown-wrapper{width:50%}\r\n  .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle{width:100%}\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu{left:6px}\r\n  .popover-wrapper .single-user.more-popover-block{left:-36px;min-width:79px;max-width:79px}\r\n  .popover-wrapper .single-user.more-popover-block:before{right:22px}\r\n  .popover-wrapper .popover-block{top:12px!important;left:-31px!important;min-width:79px!important;padding:4px!important;font-size:10px!important}\r\n  .popover-wrapper .popover-block:before{top:-8px;right:26px!important}\r\n}\r\n@media (min-width:769px) and (max-width:1120px)\r\n  {\r\n    .circle-cal-outer{width:auto;float:none}\r\n    .circle-cal-outer h2{width:100%;margin:0}\r\n    .circle-cal-outer h5{float:none;margin-top:0}\r\n   }\r\n@media (min-width:320px) and (max-width:991px)\r\n {\r\n    /* .res-outer{width:100%;margin-top:10px;padding-left:0!important;padding-right:40px!important;margin-left:50px} */\r\n    #calquiz-modal .calc-quiz-margin{width:calc(100% - 60px);margin-left:10px;margin-top:0!important}\r\n    #calquiz-modal .calquiz-outr h3{margin-top:5px}\r\n    #calquiz-modal .calquiz-outr .step2 h3{margin-top:15px!important}\r\n    #calquiz-modal .step2 .calquiz-right{padding:30px 40px}\r\n    #calquiz-modal .modal-content{margin-bottom:10px}\r\n    #calquiz-modal .alert.alert-danger{left:105px}\r\n  }\r\n@media only screen and (min-width : 1024px) and (max-width : 1300px)\r\n  {\r\n    .new-select-template.select-template-block{width: 100% !important}\r\n    .card-shd-outer{ width: 100%;}\r\n    .common-outer{ margin-bottom: 20px;}\r\n    .temp-web-header .name-outer{ width:65%;}\r\n    .idea-text-outer{ font-size: 15px;}\r\n    .dashboard-overlay.dash-with-header  .card-outer { width: 70%; left: 30px;}\r\n    .dashboard-overlay.intro-btn-outer{ top: 12%;}\r\n    .dashboard-overlay .card-outer{width:69% ;}\r\n  }\r\n@media only screen and (min-width : 1280px) {\r\n    .user-name-outer{ width:80%;}\r\n    .popular-text{ float: left; width:65%; }\r\n  }\r\n@media only screen and (min-width : 1250px) and (max-width : 1280px) {\r\n    .popular-text{ float: left; width:65%; }\r\n    .common-outer-jv .large-font{ font-size:90px; margin-top: 8%;}\r\n    .common-outer-jv .large-font-mid{ font-size:47px;  margin-top: 7%;}\r\n\r\n  }\r\n@media only screen and (min-width : 1024px)\r\n  {\r\n    .user-name-outer{ width:73%; word-break: break-all; white-space: normal;}\r\n    .update-text{ width:100%;}\r\n  }\r\n@media only screen and (max-width : 1024px)\r\n  {\r\n    .new-dashboard .new-select-template.select-template-block .over-cont.res-outer{display: none !important}\r\n    .pt63{ padding-top:79px;}\r\n    .popular-text{ width:54%}\r\n    .dashboard-overlay.dash-with-header  .intro-btn-outer{ top: 15.5%; left:3%;}\r\n    .dashboard-overlay  .intro-btn-outer{ top: 85px; left:3%;}\r\n    .dashboard-overlay .text-img{left: 50%;top: 27%; width: 25%;}\r\n    .common-outer-jv .large-font{ font-size: 60px; margin-top: 10%; line-height: 60px;}\r\n    .common-outer-jv  a.upgrade-btn{ font-size: 11px;}\r\n    .np-right.pt63{ text-align: center;}\r\n    .common-outer-jv .large-font-mid{ font-size:30px;  margin-top: 6%;}\r\n    .promo-jv{ font-size: 12px;}\r\n    .new-dashboard .temp-card .new-dropdown-menu li.sub-menu ul{ right: 126px !important; left: initial !important;}\r\n  }\r\n@media (min-width:320px) and (max-width:991px)\r\n  {\r\n    #calquiz-modal .calc-quiz-margin{width:calc(100% - 60px);margin-left:10px;margin-top:0!important}\r\n    #calquiz-modal .calquiz-outr h3{margin-top:5px}\r\n    #calquiz-modal .calquiz-outr .step2 h3{margin-top:15px!important}\r\n    #calquiz-modal .step2 .calquiz-right{padding:30px 40px}\r\n    #calquiz-modal .modal-content{margin-bottom:10px}\r\n    #calquiz-modal .alert.alert-danger{left:105px}\r\n\r\n  }\r\n@media only screen and (min-width : 1025px) and (max-width : 1280px) {\r\n    .live-link  i {top:6px; font-size: 14px}\r\n    .new-dashboard .common-outer , .new-dashboard .new-select-template.select-template-block{margin-bottom: 15px}\r\n    .new-dashboard .dashboard-main-part{padding: 0 15px; width: calc(100% - 480px);}\r\n    .new-dashboard.dashboard-outer{padding: 35px 30px}\r\n    .new-dashboard .dashboard-left-part, .new-dashboard .dashboard-right-part{max-width: 240px;}\r\n    .new-dashboard .user-name-outer {width: calc(100% - 40px);padding-left: 10px;}\r\n    .new-dashboard .users {width: 40px;height: 40px;}\r\n    .referral-ui  h2 {padding: 0}\r\n    .new-dashboard .temp-cards-outer-main .card-shd-outer{padding: 15px}\r\n    .new-dashboard .temp-card .temp-img {float: left;width: 140px;height: 120px;}\r\n    .new-dashboard .temp-card .temp-info {float: left;width: calc(100% - 140px);padding-left: 15px;}\r\n    .new-dashboard .temp-card h5.cal-name{font-size: 18px;}\r\n    .new-dashboard .new-select-template.select-template-block .center-cont .check-icon .calc-quiz-margin h3{font-size: 11px}\r\n\r\n\r\n\r\n\r\n  }\r\n@media only screen and (min-width : 768px) and (max-width : 1024px) {\r\n    .create-temp-outer.new-experience{ width: 100%;}\r\n    .np-left {padding: 0!important;}\r\n\r\n    .new-dashboard .new-select-template.select-template-block .center-cont:hover .check-icon .calc-quiz-margin h3{color: #fb5f66}\r\n    .new-select-template.select-template-block .temaplate-cont-part .center-cont:hover {border-color: transparent;-webkit-transition: 0s;transition: 0s;}\r\n    .new-dashboard.dashboard-outer {display: -webkit-box;   display: -ms-flexbox;   display: flex; -webkit-box-orient:vertical; -webkit-box-direction:normal; -ms-flex-direction:column; flex-direction:column }\r\n    .new-dashboard .dashboard-main-part {float: left;padding: 0;width: 100%; -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1}\r\n    .new-dashboard .dashboard-left-part{max-width: 100%; -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2}\r\n   .new-dashboard .dashboard-right-part{max-width: 100%; -webkit-box-ordinal-group: 4; -ms-flex-order: 3; order: 3}\r\n    #new-header .navbar-right{padding-left: 0px;}\r\n    .new-dashboard .temp-cards-outer-main .card-shd-outer{padding: 20px}\r\n    .new-dashboard .temp-card .temp-img{width: 150px; height: 125px}\r\n    .new-dashboard .temp-card .temp-info{width: calc(100% - 150px);}\r\n    .new-dashboard  .user-name-outer {padding-left: 15px;}\r\n\r\n  }\r\n@media only screen and (min-width : 150px) and (max-width : 768px) {\r\n\r\n    .rs-hide{ display: none ;}\r\n    .np-left{ padding-right: 0;}\r\n    .responsive-view,.responsive-view-left, .responsive-view-right{ display: block;font-family: montserratlight;}\r\n    .np-right{ padding-left: 0;}\r\n    .create-temp-outer{  padding: 10px 0; background: none; text-align: left;}\r\n    .create-temp-outer .button-outer{ display: inline-block; width:100%; margin: 0 auto; text-align: center;}\r\n    .temp-card .common-table{ min-height: auto;}\r\n    .idea-icon-outer{ padding-top:20px;}\r\n    .pt63 { padding-top: 0 !important;}\r\n    .temp-name span:nth-child(2) {float: left;width: 96%; overflow: hidden; max-height: 21px; text-overflow: ellipsis;}\r\n    .create-temp-outer.new-experience{ width: 100%;}\r\n    .common-outer-jv .large-font{ font-size:90px !important; margin-top: 27% !important; line-height: 70px !important;}\r\n    .common-outer-jv  a.upgrade-btn{ font-size: 11px;}\r\n    .common-outer-jv .large-font-mid{ font-size:40px !important;  margin-top: 22% !important;}\r\n       .promo-jv{ font-size: 12px;}\r\n       #assignCompany .check-icon { width: 100%;}\r\n       #assignCompany h3{ width: 90%;}\r\n    }\r\n@media only screen and (min-width : 320px) and (max-width : 768px)\r\n  {\r\n  /* .temp-card .type-outer,.temp-card .uv-outer,.temp-card .leads-outer,.temp-card .pd-outer{ font-size: 12px;  } */\r\n  .ribbon:after { border-width: 10px 10px;}\r\n  .responsive-view-left{ float: left;width:60%;}\r\n  .responsive-view-right{ float: left;width:40%;}\r\n  .dashboard-outer{ padding:20px;}\r\n  .create-temp-outer .button-outer a {padding: 10px 15px 10px 30px;}\r\n  .create-temp-outer .button-outer a i{ left:8px;}\r\n  .update-text { width: 100%;}\r\n  .popular-text{ width:68%}\r\n  /* .new-dropdown-menu {left: -24px; top: 31px;}\r\n  .new-dropdown-menu:before {top: -12px; left: 89px;} */\r\n  /* .temp-card .type-outer,.temp-card .uv-outer,.temp-card .leads-outer,.temp-card .pd-outer{  padding:4px 24px; line-height: 38px; min-height: auto; text-align: right; font-size: 18px;} */\r\n  #calquiz-modal .calquiz-outr .step2 input {width: 100%;}\r\n  #calquiz-modal .alert.alert-danger {left: 0px !important;}\r\n  #calquiz-modal .calquiz-left i {padding-left: 0px;}\r\n\r\n  }\r\n@media (min-width:320px) and (max-width:768px)\r\n{\r\n    #new-header .navbar-fixed-top .nav-padding{padding-right:0}\r\n    .dash-circle,.dash-prog-outer h2,.full-menu{display:none}\r\n    .main-logo{display:none!important}\r\n    .mobile-menu{display:block;float:right;margin-top:9px;position:relative}\r\n    #new-header .navbar-default{background:#fb5f66!important;border:none}\r\n    .mobile-menu .btn-default:hover,.mobile-menu button{background:0 0;color:#fff}\r\n    .mobile-menu button{border:none;-webkit-box-shadow:none;box-shadow:none}\r\n    .dash-boxes-outr{padding:30px 10px 10px}\r\n    .mobile-menu .dropdown-menu{background:#62696d;top:-11px;border-radius:0;left:-176px;width:235px;font-family:montserratlight;padding-bottom:55px}\r\n    .mobile-menu .name-dropdown-border{width:100%;margin:5px 0}\r\n    .mobile-menu .user-outr{float:left;width:100%;padding:0;margin:0;display:block;text-transform:capitalize}\r\n    .mobile-menu .user-outr li{float:right;font-size:24px;font-family:montserratlight;color:#fff;margin-right:24px;margin-top:8px;margin-bottom:6px}\r\n    .mobile-menu .user-outr li a{margin-right:30px}\r\n    .mobile-menu .company-list li,.mobile-menu .name-list li{margin:10px 0;text-align:right;font-size:16px;width:100%;float:left;padding-right:20px}\r\n    .mobile-menu .company-list li a,.mobile-menu .name-list li a{float:right;color:#fff}\r\n    .mobile-menu .company-list li a i{margin-right:20px;float:left}\r\n    .mobile-menu .name-list li a i{margin-left:20px;float:right}\r\n    .mobile-menu .company-list-title{float:left;color:#fff}\r\n    .white-logo{display:none!important}\r\n    .dash-prog-outer{float:left;width:100%;margin-top:0;margin-bottom:0}\r\n    .dash-prog-outer h5{font-size:24px;text-align:center;max-width:90%;margin-bottom:1px}\r\n    .dash-prog-outer .company-dropdown-wrapper{min-height:35px;width:100%;text-align:center}\r\n    .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle{margin:0 auto;float:none;text-align:center}\r\n    #new-header .navbar-header{float:left;margin-left:0;margin-right:0!important}\r\n    #new-header .navbar-logopadding{padding-right:0;padding-top:0}\r\n    .circle-sec{float:left;width:33%;text-align:center}\r\n    .circle-cal-outer,.circle-cal-outer h2,.circle-cal-outer h5{float:left;width:100%}\r\n    .circle-cal-outer h2{color:#62696d;font-family:montserratregular!important;font-size:24px!important;margin:15px 0 5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\r\n    .circle-cal-outer h5{color:#8e989f;font-size:10px;font-family:montserratregular;text-transform:uppercase;margin-top:0}\r\n    .user-outr{padding:0;margin:30px auto 0}\r\n    .dash-top2-textinner h3{font-size:20px;margin-top:5px}\r\n    .dash-top2-textinner .company-dropdown-wrapper .dropdown-toggle span{width:auto!important;font-size:14px}\r\n    .user-outr li a img{width:44px;height:44px}\r\n    .user-outr{display:none;float:none;width:160px;margin-top:30px}\r\n    .dash-top2-textinner .company-dropdown-wrapper{float:left;margin:0;width:100%}\r\n    .dash-top2-textinner .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle{float:left;text-align:left}\r\n    #new-header .navbar-default{height:56px}\r\n    .white-logo .navbar-brand img{height:53px;margin:-20px auto 0}\r\n    .white-logo .navbar-brand{float:none}\r\n    .circle-parent{padding-bottom:20px}\r\n    .user-outr li a.add-user{width:45px;height:45px;padding-top:9px}\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i{top:-30px;left:17px;font-size:34px;position:relative;color:#fb5f66}\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-title{font-size:16px}\r\n    .company-dropdown-wrapper .dropdown-menu>li>a .company-site{width:91%;font-size:14px}\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-block-inner{width:35px;height:35px;padding-top:8px;font-size:14px;top:13px}\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a.add-new-company{font-size:14px}\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a i.material-icons{font-size:24px}\r\n    .company-block-content{margin-left:50px}\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before{right:34px}\r\n    .dash-prog-outer .company-dropdown-wrapper .dropdown-menu{top:8px;left:-8px}\r\n    .choosetem-topsec p{font-size:14px;width:100%}\r\n    .choosetem-topsec h3{font-size:20px}\r\n    .choosetemp-social li{margin-bottom:0;margin-top:20px}\r\n    .choosetemp-actions{margin-top:10px;width:100%}\r\n    .choosetemp-box-figure2,.choosetemp-boxes-outr{padding:0}\r\n    .bootbox .modal-content{float:left;width:62%;margin-left:5px}\r\n    .bootbox-body .bootbox-body-right{width:80%}\r\n    #calquiz-modal .calquiz-outr .step2 input{width:100%}\r\n    #calquiz-modal .alert.alert-danger{left:0!important}\r\n    #calquiz-modal .calquiz-left i{padding-left:0}\r\n    .dashboard-toast{left:8px!important;width:285px!important}\r\n    .dashboard-toast i{width:30px!important;padding-left:3px}\r\n    .dashboard-toast span{float:none;width:60%;padding-top:0;padding-bottom:0;display:inline-block;vertical-align:middle}\r\n    .dashboard-helptip .help-checktip{left:-120px}\r\n    }\r\n@media (min-width:768px){\r\n      .editor-modal .modal-dialog{width:520px;margin:80px auto!important}\r\n\r\n    }\r\n@media (max-width:768px){\r\n  .select-template-block .step1{ display: block;}\r\n  .dashboard-overlay{overflow-y: auto;overflow-x: hidden;}\r\n  /* .select-template-block  .center-cont{width:100%; min-height: 220px;} */\r\n  .new-select-template.select-template-block .text-template-block{width:100%;   margin-bottom: 10px;}\r\n  /* .new-select-template.select-template-block{display: block !important;} */\r\n  .new-select-template.select-template-block  .text-template-block h4  , .new-select-template.select-template-block  .text-template-block p {text-align:center;width:100% !important}\r\n  .new-select-template.select-template-block  .temaplate-cont-part .center-cont:hover .over-cont.res-outer{display: none !important}\r\n  #lgScrSideNavbar,.dash-circle,.dash-prog-outer,.dash-prog-outer h2,.full-menu{display:none}\r\n\r\n  #responsive-header .navbar-fixed-top .nav-padding{padding-right:0;padding-left:0}\r\n  .main-logo{display:none!important}\r\n  .mobile-menu{display:block;float:right;margin-top:7px;position:relative}\r\n  #responsive-header .navbar-default{background:#fb5f66!important;border:none;margin-top:0}\r\n  #responsive-header .navbar-default .mat-icon i.material-icons{font-size:24px;color:#fff;padding:13px}\r\n  #responsive-header .navbar-header h4.title{color:#fff;font-size:16px;text-align:center;text-transform:uppercase;padding-top:7px!important}\r\n  .mobile-menu button{border:none;-webkit-box-shadow:none;box-shadow:none;color:#fff;background:0 0;float:right;margin:0 5px}\r\n  .mobile-menu button:focus{background:0 0!important;color:#fff!important}\r\n  .mobile-menu .btn-default:hover{color:#fff;background:0 0}\r\n  .mobile-dash{padding:0}.mobile-menu .dropdown-menu{background:#62696d;top:-11px;border-radius:0;left:-176px;width:235px;font-family:montserratlight;padding-bottom:55px}\r\n  .mobile-menu .name-dropdown-border{width:100%;margin:5px 0}\r\n  .mobile-menu .user-outr{float:left;width:100%;padding:0;margin:0;display:block;text-transform:capitalize}\r\n  .mobile-menu .user-outr li{float:right;font-size:24px;font-family:montserratlight;color:#fff;word-wrap:break-word;width:175px;text-align:right;margin:8px 24px 6px 30px}\r\n  .mobile-menu .user-outr li a{margin-right:30px}\r\n  .user-outr li a{float:left;width:auto;border:2px solid #dae2e6;border-radius:50%;margin-left:5px;margin-bottom:5px}\r\n  .user-outr li a:hover{border:2px solid #fb5f66}\r\n  .mobile-menu .company-list li,.mobile-menu .name-list li{margin:10px 0;text-align:right;font-size:16px;width:100%;float:left;padding-right:20px}\r\n  .mobile-menu .company-list li a,.mobile-menu .name-list li a{float:right;color:#fff}\r\n  .mobile-menu .company-list li a i{margin-right:20px;float:left}\r\n  .mobile-menu .name-list li a i{margin-left:20px;float:right}\r\n  .mobile-menu .company-list-title{float:left;color:#fff}\r\n  .white-logo{display:block!important}\r\n  .dash-prog-outer{float:left;width:100%;margin-top:10px;margin-bottom:10px}\r\n  .dash-prog-outer h5{font-size:24px;text-align:center;width:100%;margin-bottom:1px}\r\n  .dash-prog-outer .company-dropdown-wrapper{min-height:35px;width:100%;text-align:center}\r\n  .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle{margin:0 auto;float:none;text-align:center}\r\n  #responsive-header .navbar-header{float:left;margin-left:-5px;margin-right:0!important}\r\n  #responsive-header .navbar-logopadding{padding-right:0;padding-top:0}\r\n  #responsive-header .navbar-default{height:50px;margin:0;padding-bottom:0}\r\n  .settings-cookies #new-header.cookies-parent{height:50px;margin-bottom:0}\r\n  .white-logo .navbar-brand img{height:53px;margin:-20px auto 0}\r\n  .white-logo .navbar-brand{float:none}\r\n  .user-outr li a.add-user{width:45px;height:45px;padding-top:9px}\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i{top:-30px;left:17px;font-size:34px;position:relative;color:#fb5f66}\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-title{font-size:16px}\r\n  .company-dropdown-wrapper .dropdown-menu>li>a .company-site{width:91%;font-size:14px}\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a .company-block-inner{width:35px;height:35px;padding-top:8px;font-size:14px;top:13px}\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a.add-new-company{font-size:14px}\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu>li>a i.material-icons{font-size:24px}\r\n  .company-block-content{margin-left:50px}.dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before{right:34px}\r\n  .dash-prog-outer .company-dropdown-wrapper .dropdown-menu{top:8px;left:-8px}\r\n  header#new-header.cookies-parent{margin-bottom:0;height:50px}\r\n  .settings-cookies #smScrSideNavbar.left-sidebar,.settings-cookies .membership-details-inner-tabs{top:50px!important}\r\n  /* #smScrWrapperContent{display:none} */\r\n  #new-header .company-nav{display:block!important}\r\n\r\n  #new-header .navbar-default.company-nav{background:#fff!important;border-bottom:1px solid #dae2e6;padding-top:0!important}\r\n  #new-header .company-nav .navbar-header{width:100%!important}\r\n  #new-header .company-nav .navbar-logopadding{padding-left:15px;padding-top:22px;height:105px;width:100%;padding-right:15px!important}\r\n  .company_name_avatar-circle{margin-right:15px}\r\n  .company_name_span{width:57%;line-height:30px}\r\n  #new-header{height:50px!important}\r\n  #new-header .company-nav.navbar-fixed-top .nav-padding{padding-left:0;padding-right:0}\r\n  #new-header.cookies-parent{margin-bottom:0}\r\n\r\n  .new-dashboard .dashboard-left-part, .new-dashboard .dashboard-right-part{max-width: 100%;}\r\n  .new-dashboard .dashboard-main-part{width: 100%; padding: 0px;}\r\n  .new-dashboard .temp-cards-outer-main .card-shd-outer{padding: 10px}\r\n  .new-dashboard .temp-card .temp-img{width: 80px; height:80px; padding: 2px}\r\n  .new-dashboard .temp-card .temp-info {float: left;width: calc(100% - 80px);padding-left: 15px;}\r\n  .new-dashboard .temp-card h6.cal-type{font-size: 8px}\r\n  .new-dashboard .temp-card h6.cal-type i {font-size: 10px;margin-right: 5px;}\r\n  .new-dashboard .temp-card h5.cal-name {font-size: 14px;margin: 3px 0;}\r\n  .new-dashboard .temp-card .last-edited {font-size: 9px;}\r\n  .new-dashboard .temp-card .status-outer span {font-size: 8px;padding: 2px 6px; height: 18px}\r\n  .new-dashboard .leads-outer > span, .new-dashboard .uv-outer > span{font-size: 8px;padding: 2px 6px; height: 18px;}\r\n  .new-dashboard .leads-outer > span i, .new-dashboard .uv-outer > span i{font-size: 10px}\r\n  .new-dashboard .leads-outer> span:hover span.total-count, .new-dashboard .uv-outer> span:hover span.total-count{font-size: 8px}\r\n  .new-dashboard em {\r\n    position: relative !important;\r\n    width: auto !important;\r\n    padding-right: 0px !important;\r\n  }\r\n  .new-dashboard .temp-status-bar {margin: 5px 0 0 0;padding: 5px 0 0;}\r\n  /* .new-dashboard .template-option{display: block} */\r\n  .new-dashboard .template-option .temaplate-cont-part{float: left; }\r\n  .new-dashboard .template-option .temaplate-cont-part h3{float: left; text-align: center;}\r\n  .new-dashboard .temp-card .new-dropdown-menu {right: -5px !important;left: auto !important;margin-left: 0 !important;}\r\n  .new-dropdown-menu:before{left: auto;right: 3px;}\r\n  .new-dashboard.dashboard-outer{padding:35px 15px; display: -webkit-box;   display: -ms-flexbox;   display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column }\r\n\r\n  .dashboard-main-part{-webkit-box-ordinal-group: 2;-ms-flex-order: 1;order: 1}\r\n  .dashboard-left-part{-webkit-box-ordinal-group: 3;-ms-flex-order: 2;order: 2}\r\n  .dashboard-right-part{-webkit-box-ordinal-group: 3;-ms-flex-order: 2;order: 2}\r\n  .new-dashboard .template-option .temaplate-cont-part .center-cont {padding: 8px 20px;}\r\n  .new-dashboard .select-template-block .calc-quiz-margin h3 i{font-size: 16px}\r\n  .calquiz-outr.select-template-block .step1{display: block}\r\n  .new-dashboard .select-template-block h4{margin: 20px 0 25px 0}\r\n  .new-dashboard .new-select-template.select-template-block .center-cont .check-icon .calc-quiz-margin h3 {font-size: 11px; min-height: 101px;}\r\n  .new-dashboard .leads-outer, .new-dashboard .uv-outer {float: right;margin-left: 5px;}\r\n  .new-dashboard .new-select-template.select-template-block .center-cont:hover .check-icon .calc-quiz-margin h3{color: #fb5f66}\r\n  .new-select-template.select-template-block .temaplate-cont-part .center-cont:hover {border-color: transparent;-webkit-transition: 0s;transition: 0s;}\r\n  .new-dashboard  .user-name-outer {padding-left: 15px;}\r\n  .new-dashboard .common-outer , .new-dashboard .new-select-template.select-template-block{margin-bottom: 15px}\r\n  .live-link  i {top:2px; font-size: 12px}\r\n  .new-dashboard .temp-cards-outer-main .card-shd-outer{margin-bottom: 15px}\r\n  .new-dashboard .template-option .temaplate-cont-part:nth-child(1){ -webkit-box-flex: 1; -ms-flex: 1; flex: 1}\r\n\r\n\r\n\r\n}\r\n@media (min-width:480px) and (max-width:767px){\r\n  .temaplate-cont-part{width:50% !important}\r\n}\r\n@media (min-width: 320px) and (max-width: 540px) {\r\n  #add-teammates .modal-footer .btn-red{margin-right: 0px !important;margin-left: 0;}\r\n\r\n}\r\n@media (max-width:479px){\r\n  .temaplate-cont-part{width:100% !important}\r\n}\r\n@media screen and (min-width:320px) and (max-width:320px){\r\n   .bootbox .modal-content{width:62%;margin-left:5px}\r\n   .bootbox-body .bootbox-body-right{width:80%}\r\n   .dashboard-toast{left:8px!important;width:285px!important}\r\n   .dashboard-toast i{width:30px!important;padding-left:3px}\r\n   .d-toast-btn i{width:auto!important;padding-left:0!important}\r\n   .toast{left:8px!important;width:285px!important}\r\n   .toast i{width:30px!important;padding-left:3px}\r\n   .toast .btn i{width:auto!important;padding-left:0!important}\r\n   }\r\n@media screen and (min-width:480px) and (max-width:480px)\r\n{\r\n    .bootbox .modal-content{width:90%;margin-left:15px}\r\n}\r\n@media only screen and (min-width : 320px) and (max-width : 479px)\r\n{\r\n  /* .live-link{ position: absolute; top:39%; right:52%;} */\r\n  .common-outer-jv .large-font{ font-size:80px !important; margin-top: 16% !important;}\r\n}\r\nbutton.learn-more-button {\r\n  display: inline-block;\r\n  background: #fff;\r\n  border: 1px solid #dde3e7;\r\n  font-size: 12px;\r\n  padding: 11px 28px;\r\n  color: #888;\r\n  border-radius: 3px;\r\n  font-family: montserratlight;\r\n  cursor: pointer;\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n}\r\nbutton.learn-more-button:hover{color: #fff; -webkit-transition: 0.5s; transition: 0.5s; background: #fb5f66;}\r\n.new-dashboard .calquiz-outr.select-template-block .center-cont:hover{-webkit-transition: top 0.5s;transition: top 0.5s;  top:-8px}\r\n.new-dashboard .calquiz-outr.select-template-block .center-cont{-webkit-transition: top 0.5s;transition: top 0.5s; top:0px; position: relative;}\r\n.new-dashboard .calquiz-outr.select-template-block .center-cont:hover .calc-quiz-margin h3{color: #666; -webkit-transition: color 0.5s; transition: color 0.5s}\r\n/* .temaplate-cont-part .center-cont i.icon-lock:hover,\r\n.calquiz-block .center-cont i.icon-lock:hover {\r\n    color: #fb545b;\r\n} */\r\n.temaplate-cont-part .center-cont:hover .icon-lock,\r\n.calquiz-block .center-cont:hover i.icon-lock {\r\n    color: #fb545b;\r\n}\r\n.new-dashboard em {\r\n  font-style: normal;\r\n  background: #fff;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 20px;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding-right: 5px;\r\n}\r\n.new-select-template.select-template-block.hide {\r\n  display: none !important;\r\n}\r\n.common-outer.new-promo{border: 0px !important}\r\n/* tranding css */\r\n.trending-outer{float: left;width: 100%;background: #fff;border-radius: 0px;border: 1px solid #d9e0e4; margin-bottom: 30px; position: relative; margin-top:20px;}\r\n.trending-outer h2{ float: left; width:100%; color:#444444;  font-size: 18px; padding: 0 10%; text-align: center; line-height: 24px; padding-top:25px; padding-bottom:10px;  }\r\n.trending-outer .icon-circle{ border-radius: 50px; border: 1px solid #d9e0e4; background: #fff;width: 60px;height: 60px; position: absolute;top: -29px; left: 40%;}\r\n.trending-outer .icon-circle i {    color: #fb5f66; font-size: 34px; padding: 11px;}\r\n.trending-outer .slider-outer{ float: left; width: 100%; padding:10px; }\r\n.trending-outer .slider-outer img{ padding: 5px; background: #fff; float: left; width:100%;}\r\n.trending-outer .slider-outer h4{ font-size: 16px; color: #666666; width: 100%; float: left; text-align: center; line-height: 22px; }\r\n.trending-outer .slider-outer h4 a i{font-size: 15px; color: #555555;vertical-align: middle;}\r\n.trending-outer .slider-outer h6{ font-size:10px; float: left; width:100%; text-align: center; color:#539cee; text-transform: uppercase; margin-top:0;}\r\n.trending-outer .slider-outer .button-outer{ float: left; width: 100%; text-align: center;padding-bottom: 15px; }\r\n.trending-outer .slider-outer .button{    display: inline-block;float: none;text-transform: capitalize;font-size: 12px;background: #fff;min-width: 99px; min-height: auto; margin-top: 5px; width: auto!important; color: #fb5f66; padding: 12px 15px; line-height: 1; font-weight: normal;  border: 2px solid #fb5f66; }\r\n.trending-outer .slider-outer .button i{ font-size:13px; line-height: 15px; vertical-align: bottom; }\r\n.trending-outer .slider-outer .carousel-indicators li{border: 1px solid #d9e0e4;}\r\n.trending-outer .slider-outer .carousel-indicators {top: -30px; bottom:initial !important;}\r\n.trending-outer .slider-outer .carousel-indicators .active{ height: 7px; width: 7px; margin: 1px; background: #fb5f66; border-color:#fb5f66; }\r\n.trending-outer .slider-outer .carousel-indicators li{height: 7px; width: 7px; }\r\n.loader-plan-dash {\r\n  color: #fb5f66;\r\n  text-align: center;\r\n  -webkit-animation-name: spin;\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-iteration-count: infinite;\r\n  -webkit-animation-timing-function: linear;\r\n  -moz-animation-name: spin;\r\n  -moz-animation-duration: 2s;\r\n  -moz-animation-iteration-count: infinite;\r\n  -moz-animation-timing-function: linear;\r\n  -ms-animation-name: spin;\r\n  -ms-animation-duration: 2s;\r\n  -ms-animation-iteration-count: infinite;\r\n  -ms-animation-timing-function: linear;\r\n  animation-name: spin;\r\n  animation-duration: 2s;\r\n  animation-iteration-count: infinite;\r\n  animation-timing-function: linear;\r\n  margin-top: 20px\r\n}\r\n@-webkit-keyframes spin {\r\n  from {\r\n    -webkit-transform: rotate(0)\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg)\r\n  }\r\n}\r\n@keyframes spin {\r\n  from {\r\n    -webkit-transform: rotate(0);\r\n            transform: rotate(0)\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg)\r\n  }\r\n}\r\n.new-dashboard .temp-cards-outer-main .add-collection-outer{ float: left; width:100%;  }\r\n.new-dashboard .temp-cards-outer-main .add-collection-outer .add-collection-link{ float: right; color: #888; font-size: 11px; position: relative; margin-bottom: 5px; padding-left:18px; line-height: 16px; }\r\n.new-dashboard .temp-cards-outer-main .add-collection-outer .add-collection-link i{ font-size: 12px; top :2px; position: absolute; left:2px;  }\r\n.new-dashboard .temp-cards-outer-main .add-collection-outer .add-collection-link:hover{color: #fb5f66; -webkit-transition: color 0.5s; transition: color 0.5s;}\r\n.new-dashboard .temp-cards-outer-main .add-collection-outer .add-collection-link:hover i{color: #fb5f66; -webkit-transition: color 0.5s; transition: color 0.5s;}\r\n.new-dashboard .accordion-outer{ float: left; width: 100%; }\r\n.new-dashboard .accordion-outer .folder-head{float: left;width: 100%;border: 1px solid #d9e0e4; margin-bottom: 20px;    padding: 15px 35px;background: #fff; position:relative;}\r\n.new-dashboard .accordion-outer .accordion .card .card-header a {-webkit-transition: ease-in-out .3s; transition: ease-in-out .3s}\r\n.new-dashboard .accordion-outer .accordion .card .card-header a:not(.collapsed) .rotate-icon {-webkit-transform: rotate(90deg);  transform: rotate(90deg);}\r\n.new-dashboard .accordion-outer a h5{ margin: 0 !important; padding-top:10px; padding-bottom:10px; color:#888888; font-size: 11px; text-transform: uppercase;     position: relative; padding-left: 33px;  width: 95%;}\r\n.new-dashboard .accordion-outer a h5 i{ font-size: 13px; margin-left: 8px;}\r\n.new-dashboard .accordion-outer a h5 img{     position: absolute;left: 0; top: 6px; }\r\n.new-dashboard .accordion-outer .card-body{ margin-top:10px;}\r\n.new-dashboard .accordion-outer collapse.in { height: auto !important; }\r\n#add-collection  .modal-content {\r\n  border-radius: 5px\r\n}\r\n#add-collection  .modal-header {\r\n    padding: 20px 25px 0px;\r\n    border-bottom: none;\r\n    /* background: #61686e; */\r\n}\r\n#add-collection .modal button.close.btn-close {\r\n    text-shadow: none;\r\n    position: absolute;\r\n    right: 23px;\r\n    top: 23px;\r\n    z-index: 9;\r\n    opacity: 1;\r\n    -webkit-transition: all .3s ease 0s!important;\r\n    transition: all .3s ease 0s!important\r\n}\r\n#add-collection .modal button.close.btn-help {\r\n  text-shadow: none;\r\n  position: absolute;\r\n  right: 40px;\r\n  top: 11px;\r\n  z-index: 9;\r\n  opacity: 1;\r\n  -webkit-transition: all .3s ease 0s !important;\r\n  transition: all .3s ease 0s !important\r\n}\r\n#add-collection.modal i.material-icons {\r\n    font-size: 22px;\r\n    color: #666666;\r\n    -webkit-transition: .3s ease-in-out;\r\n    transition: .3s ease-in-out;\r\n    font-weight: normal;\r\n    margin-top: 1px;\r\n}\r\n#add-collection.modal i.material-icons:hover {\r\n    color: #62696d;\r\n    opacity: 0.8;\r\n}\r\n/* #add-collection.modal button.close.btn-help i.material-icons {\r\n  font-size: 14px;\r\n  color: #fff\r\n} */\r\n#add-collection  .modal-title {\r\n    text-transform: uppercase;\r\n    color: #fb5f66;\r\n    font-size: 18px;\r\n    font-family: montserratlight;\r\n}\r\n#add-collection  .modal-body {\r\n  padding: 5px 25px 5px 25px;\r\n}\r\n.modal#add-collection  .form-group {\r\n    margin-top: 13px;\r\n}\r\n#add-collection  .btn-red-outline {\r\n    color: #fff;\r\n    background-color: #fb5f66;\r\n    border-color: #fb5f66;\r\n    border-radius: 4px;\r\n    font-size: 12px;\r\n    padding: 10px 30px !important;\r\n    margin-top: 0;\r\n    -webkit-transition: all .3s ease 0s;\r\n    transition: all .3s ease 0s;\r\n    text-transform: uppercase;\r\n    font-family: montserratlight;\r\n    margin: 0;\r\n}\r\n#add-collection .modal-footer{ border: none; }\r\n#add-collection .modal-footer a.text-cancel {font-size: 12px;text-transform: uppercase;color: #62696d; opacity: 0.7;margin-right: 13px;margin-top: 11px;display: inline-block;cursor: pointer; -webkit-transition: .3s ease-in-out; transition: .3s ease-in-out;}\r\n#add-collection .modal-footer a.text-cancel:hover { opacity: 1;}\r\n#add-collection .alert.alert-danger p span.mat-icon i.material-icons {float: left; font-size: 12px !important; margin-right: 5px; margin-top: 1px; color: #fb5f66 !important;}\r\n#add-collection.modal{ margin-top:30px;}\r\n.new-dashboard .temp-card .new-dropdown-menu li.sub-menu{position: relative;}\r\n.new-dashboard .temp-card .new-dropdown-menu li.sub-menu:hover ul{ display: block;}\r\n.new-dashboard .temp-card .new-dropdown-menu li.sub-menu ul{ position: absolute; left: 121px;  top:89px; display: none; text-transform: uppercase; background: #62696d;  color: #fff;  -webkit-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.24);   padding: 10px 0; border-radius: 4px !important;  min-width: 100px; max-width: 125px;  margin-left:5px;  z-index: 100; }\r\n.new-dashboard .temp-card .new-dropdown-menu li.sub-menu ul li a{\r\n     width: 100%;\r\n  float: left;\r\n  padding: 2px 10px;\r\n  color: #fff;\r\n  font-size: 11px;\r\n  font-family: 'montserratlight';\r\n  /* display: flex; */\r\n  /* align-items: center; */\r\n  line-height: 21px; padding-left:22px;\r\n  position: relative;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  display: block;\r\n}\r\n.new-dashboard .temp-card .new-dropdown-menu li.sub-menu ul li{position: relative; float: left; width:100%;}\r\n.new-dashboard .temp-card .new-dropdown-menu li.sub-menu ul li:after{\r\n  position: absolute;\r\n  content: \"\\F1DB\";\r\n  font-family: FontAwesome;\r\n  font-size: 8px;\r\n  left: 8px;\r\n  top: 7px;\r\n  /* opacity: .4; */\r\n}\r\n.new-dashboard .temp-card .new-dropdown-menu li.sub-menu ul li a i{font-size: 12px; margin-right: 5px}\r\n.new-dashboard .folder-close{ position: absolute; right:26px; top:22px; }\r\n.new-dashboard .folder-close i{ font-size: 16px; color:#888888;}\r\n.new-dashboard .folder-edit{ position: absolute; right:60px; top:23px; }\r\n.new-dashboard .folder-edit i{ font-size: 16px; color:#888888;}\r\n.new-dashboard .folder-head .temp-card .temp-card-content{ margin-bottom:30px;}\r\n.new-dashboard .folder-head .pre-btn{display: inline-block;\r\n    float: right;\r\n    font-size: 10px;\r\n    background: #fff;\r\n    min-width: 99px;\r\n    min-height: auto;\r\n    width: auto!important;\r\n    border-radius: 25px;\r\n    padding: 8px 15px 8px 32px;\r\n    line-height: 1;\r\n    border: 1px solid #d9e0e4;\r\n    color: #888888;\r\n    text-transform: uppercase;\r\n    font-family: montserratregular;\r\n    position: relative;\r\n    -webkit-transition: all .3s ease 0s;\r\n    transition: all .3s ease 0s;\r\n  }\r\n.new-dashboard .folder-head .pre-btn i{ font-size: 14px; color: #888888;    position: absolute; left: 14px; top: 5px;}\r\n.new-dashboard .folder-head .pre-btn:hover{ background: #fb5f66; color: #fff; border: 1px solid #fb5f66; }\r\n.new-dashboard .folder-head .pre-btn:hover i{  color: #fff; }\r\n.new-dashboard .folder-head .pre-btn i.lock{font-size: 14px !important; top: 6px !important;}\r\n/* .new-dashboard .circle-style{ float: left; height: 8px; width: 8px;background: #62696d; border: 1px solid #fff; -webkit-border-radius: 25px; -moz-border-radius: 25px; border-radius: 25px; margin-right:5px;} */\r\n#add-collection .alert.alert-danger.custom-alert {\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    border-radius: 0;\r\n    background: #feddde !important;\r\n    top: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n.custom-quiz-text{font-size: 10px;\r\n  color: #444444;\r\n  opacity: 0.7;\r\n  margin-top: 20px;\r\n  font-family: montserratlight !important;\r\n}\r\n.new-dashboard .select-template-block  .calc-quiz-margin h3 i.blank{margin-right: 5px;\r\n  color: #fb5f66;\r\n  font-size: 20px;\r\n  background: none;\r\n  border: none;\r\n  display: inline;\r\n  padding: 0;\r\n  border-radius: 0;\r\n  margin-bottom: 0;}\r\n/* new changes */\r\n.h4-head{font-size: 14px; text-transform: uppercase; text-align: center; margin-top:0 !important}\r\n.new-dashboard .select-template-block  .calc-quiz-margin h3 i{   margin-bottom: 15px;background: #fb5f66; color:#fff; font-size: 26px;border-radius: 50%;padding: 13px;display: block;margin-right: 0; border:2px solid #fb5f66;}\r\n.new-dashboard .temaplate-cont-part:hover .calc-quiz-margin h3 i{ background: #fff; color: #fb5f66;  -webkit-transition: all .5s ease-in-out; transition: all .5s ease-in-out;}\r\n.new-dashboard .template-option .temaplate-cont-part .center-cont{padding:  20px 5px;float: left;width:100%; border: 1px solid transparent; border-radius: 0px}\r\n.new-dashboard .new-select-template.select-template-block .center-cont .check-icon .calc-quiz-margin h3{-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column}\r\n.new-dashboard .new-select-template.select-template-block .over-cont.res-outer { position: absolute; background: #fff; left: -7px; right: -7px; top: 94px; padding-left: 22px; border: 1px solid #eee;\r\n  z-index: 100; border-top: 0; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; -webkit-box-shadow: 0px 10px 15px 0px rgba( 0, 0, 0,0.15 ); box-shadow: 0px 10px 15px 0px rgba( 0, 0, 0,0.15 );}\r\n.new-border-btn{font-size: 11px !important;background: none !important; border: 3px solid #444444; color: #444 !important; border-radius: 0px !important; padding: 12px 15px; font-family: montserratregular; min-width: 99px; display: inline-block; float: none; text-transform: capitalize; margin-top: 10px;}\r\n.new-border-btn:hover{opacity:0.8;}\r\n.new-color{color: #444444 !important;}\r\n.blue-text-new{color: #539cee !important}\r\n.new-dashboard .template-option .temaplate-cont-part:nth-child(1){ -webkit-box-flex: 1.2; -ms-flex: 1.2; flex: 1.2}\r\n/* .new-select-template.select-template-block .temaplate-cont-part .center-cont:hover .over-cont.res-outer { border-color: transparent !important;} */\r\n.cal-icons-block{position: relative;}\r\n.cal-icons-block::after {\r\n  content: 'lock_outline';\r\n  background: #fff;\r\n  width: 24px;\r\n  height: 24px;\r\n  border-radius: 50%;\r\n  color: #fb5f66;\r\n  font-size: 14px;\r\n  position: absolute;\r\n  top: -9px;\r\n  -webkit-box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.2);\r\n          box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.2);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  right: -10px;\r\n}\r\n.calquiz-block .center-cont i.icon-lock {\r\n  color: #aaa;\r\n  position: absolute;\r\n  font-size: 14px;\r\n  right: 10px;\r\n  top: 8px;\r\n}\r\n.align-center{ text-align: center !important;}\r\n.h4-head.mt15{ margin-top:15px !important; color: #555 !important; font-weight: bold ;}\r\n.new-dashboard .folder-head .temp-card:nth-last-child(1) .temp-card-content{ margin-bottom:15px;}\r\n.new-dashboard .select-template-block .calc-quiz-margin h3 i.icon-lock{ background: none!important;color: #aaaaaa!important;font-size: 14px!important;border-radius: initial!important;padding: 0px !important;margin-right: 0!important;border:0!important;display: inline; margin-left: 5px; position:initial !important; margin-bottom:0 !important}\r\n@media (max-width:767px) {\r\n  .new-dashboard .accordion-outer a h5{ width: 82%;}\r\n\r\n\r\n}\r\n.tip-outer {\r\n  display: none;\r\n}\r\n@media (min-width:995px) {\r\n  .new-dashboard .accordion .close-parent:hover .folder-close, .new-dashboard .accordion .close-parent:hover .folder-edit{display: block !important;cursor:pointer;z-index:9}\r\n  .new-dashboard .folder-close ,.new-dashboard .folder-edit{ display: none }\r\n  .new-dashboard .temp-card .new-dropdown-menu li.sub-menu ul li .tip-outer{  border-radius: 3px; background: #fff; padding: 5px ; font-size: 10px ; color: #999;  min-width: 150px; max-width: 200px; position: absolute; z-index: 99; top: 26px; left: 21px; -webkit-box-shadow: 5px 4px 5px 2px rgba(0,0,0,0.2); box-shadow: 5px 4px 5px 2px rgba(0,0,0,0.2); display: none; }\r\n  .new-dashboard .temp-card .new-dropdown-menu li.sub-menu ul li:hover .tip-outer{ display: block !important;}\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/site/components/+dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<sd-toolbar [page]=\"'dashboard'\"></sd-toolbar>\r\n<div class=\"preloader\" *ngIf=\"loader==0\">\r\n  <div class=\"status\">&nbsp;</div>\r\n</div>\r\n<!--<div class=\"loader\" *ngIf=\"loader==0\"></div>-->\r\n<div class=\"dashboard-toast\" style=\"display: none; bottom:60px;\">\r\n  <i class=\"material-icons toast-ic\">check</i>\r\n  <span class=\"dash-toast-msg\">Calculator Deleted Successfully.</span>\r\n  <button type=\"button\" class=\"btn d-toast-btn\">\r\n    <i class=\"material-icons\">clear</i>\r\n  </button>\r\n</div>\r\n\r\n<!--Dashboard design start-->\r\n\r\n<!--<div class=\"dashboard-overlay\" (click)=\"removeOverlay()\" *ngIf=\"dashOverlay\"> -->\r\n<div class=\"dashboard-overlay\" *ngIf=\"storage.postSignup\">\r\n  <div class=\"intro-btn-outer hide\">\r\n    <div class=\"link-button\">\r\n      <i class=\"material-icons\">add_circle_outline</i> Create a New Experience\r\n    </div>\r\n  </div>\r\n  <og-post-login (closePostLogin)=\"finishPostLogin($event)\"></og-post-login>\r\n</div>\r\n\r\n<!--- ***************new Dashboard****************** -->\r\n<div class=\"new-dashboard dashboard-outer \">\r\n\r\n  <div class=\"dashboard-left-part\">\r\n    <div class=\"common-outer \">\r\n      <div class=\"head-section\">\r\n        <div class=\"heading\">users</div>\r\n        <a href=\"javascript:void(0)\" (click)=\"userCheckLimit();callGA('ADDCOMPANY')\" class=\"add-user-cta\" *ngIf=\"isAdmin === 'ADMIN'\">\r\n          <i class=\"material-icons\">person_add</i>\r\n          <div class=\"popover-block\">Add User</div>\r\n        </a>\r\n      </div>\r\n      <div class=\"scroll-outer scrollbar\">\r\n        <div class=\"users-outer\" *ngFor=\"let user of currentCompanyUsers\" [class.manager]=\"user.user_company.role == 'MANAGER'\">\r\n          <div class=\"users\">{{user.name[0]}}</div>\r\n          <div class=\"user-name-outer\">\r\n            <div class=\"common-user-outer\">\r\n              <h5>{{user.name}}\r\n                <span>{{user.user_company.role}}</span>\r\n              </h5>\r\n              <span class=\"user-email\">{{user.emails[0].email}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"common-outer custom-quiz\">\r\n      <div class=\"custom-quiz-icons\">\r\n        <img src=\"https://cdn.filestackcontent.com/ieYBJ1nHR2GtAKcaFyNO\" alt=\"laptop\" />\r\n      </div>\r\n      <h5 class=\"blue-text-new\">Want to have a custom quiz created for you?</h5>\r\n\r\n      <a (click)=\"openIntercom()\" href=\"javascript:void(0);\" class=\" new-border-btn\">\r\n        Contact Us\r\n      </a>\r\n    </div>\r\n    <!-- Trending outer -->\r\n    <div class=\"trending-outer text-center\" *ngIf=\"featureLoader\">\r\n      <!-- <i class=\"fa fa-spinner fa-spin\"></i> -->\r\n      <i class=\"material-icons loader-plan-dash\">autorenew</i>\r\n    </div>\r\n    <div class=\"trending-outer\" *ngIf=\"trendingExperience.length > 0 && !featureLoader\">\r\n\r\n      <div class=\"icon-circle\">\r\n        <i class=\"material-icons\">trending_up</i>\r\n      </div>\r\n      <h2>Trending Content</h2>\r\n      <div class=\"slider-outer\">\r\n        <div id=\"TrendingCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n          <!-- Indicators -->\r\n          <ol class=\"carousel-indicators\">\r\n            <li data-target=\"#TrendingCarousel\" *ngFor=\"let trendingC of trendingExperience; let i = index\" [attr.data-slide-to]=\"i\"\r\n              [class.active]=\"i==0\" (click)=\"setSlideTarget(i)\"></li>\r\n          </ol>\r\n\r\n          <!-- Wrapper for slides -->\r\n          <div class=\"carousel-inner\">\r\n            <div *ngFor=\"let trendingC of trendingExperience; let i = index\" class=\"item\" [class.active]=\"i==0\">\r\n              <img src=\"{{trendingC.media? trendingC.media : 'http://dzvexx2x036l1.cloudfront.net/default_premade.jpg'}}\" alt=\"{{trendingC.title}}\">\r\n              <h4>{{trendingC.title}}\r\n                <a [href]=\"getUrl(trendingC.liveApp.url)\" target=\"_blank\">\r\n                  <i class=\"material-icons\">open_in_new</i>\r\n                </a>\r\n              </h4>\r\n              <h6>{{trendingC.type}}</h6>\r\n              <div class=\"button-outer\">\r\n                <a href=\"javascript:void(0)\" target=\"_blank\" class=\"button\" (click)=\"makeTrendingCalc(trendingC)\">\r\n                  <i *ngIf=\"!trendingC.active || !_featureAuthService.features.experiences[getTemplateType(trendingC?.type).toLowerCase()]\"\r\n                    class=\"material-icons icon-lock\">lock_outline</i>\r\n                  Use This Template</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"dashboard-main-part\">\r\n    <div class=\"dashboard-content\">\r\n      <div class=\"calquiz-outr select-template-block\" [class.hide]=\"(apps && apps.length)\">\r\n        <h4 class=\"h4-head\">Select a Content Type</h4>\r\n        <div class=\"step1\">\r\n          <div class=\"col-md-6  calquiz-block\">\r\n            <div class=\"center-cont ic-num \" (click)=\"selectCalc('Numerical')\">\r\n              <label class=\"check-icon\">\r\n                <input type=\"radio\" value=\"Numerical\" name=\"calQuiz\" id=\"radio1\">\r\n                <div class=\"calc-quiz-margin\">\r\n                  <h3>\r\n                    <i class=\"material-icons unchecked-icons blank\">dialpad</i> Numerical Calculator\r\n                    <i *ngIf=\"!experienceType.numerical\" class=\"material-icons icon-lock\">lock_outline</i>\r\n                  </h3>\r\n                    \r\n                </div>\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np res-outer\">\r\n                  <h3 class=\"example-heading\">Examples</h3>\r\n                  <ul class=\"cont-list\">\r\n                    <li>What is my solar ROI?</li>\r\n                    <li>What is the cost to remodel your kitchen?</li>\r\n                    <li>What is the risk of getting zika?</li>\r\n                  </ul>\r\n                </div>\r\n              </label>\r\n              \r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6  calquiz-block\">\r\n            <div class=\"center-cont dashboard-top ic-oquiz\" (click)=\"selectCalc('Recommendation')\">\r\n              <label class=\"check-icon \">\r\n                <input type=\"radio\" value=\"Recommendation\" name=\"calQuiz\" id=\"radio2\">\r\n                <div class=\"calc-quiz-margin\">\r\n                  <h3>\r\n                    <i class=\"material-icons unchecked-icons blank\">photo</i>\r\n                    Outcome Quiz\r\n                  \r\n                    <i *ngIf=\"!experienceType.recommendation\" class=\"material-icons icon-lock\">lock_outline</i>\r\n                  </h3>\r\n                    \r\n                </div>\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np res-outer\">\r\n                  <h3 class=\"example-heading\">Examples</h3>\r\n                  <ul class=\"cont-list\">\r\n                    <li>Which jeans should you wear?</li>\r\n                    <li>Which insurance plan is right for you?</li>\r\n                    <li>Which celebrity matches your style?</li>\r\n                  </ul>\r\n                </div>\r\n              </label>\r\n             \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"step1\">\r\n          <div class=\"col-md-6  calquiz-block\">\r\n            <div class=\"center-cont dashboard-top ic-graded\" (click)=\"selectCalc('Graded')\">\r\n              <label class=\"check-icon\">\r\n                <input type=\"radio\" value=\"Graded\" name=\"calQuiz\" id=\"radio3\">\r\n                <div class=\"calc-quiz-margin\">\r\n                  <h3>\r\n                    <i class=\"material-icons unchecked-icons blank\">language</i>Graded Quiz \r\n                    <i *ngIf=\"!experienceType.graded\" class=\"material-icons icon-lock\">lock_outline</i>\r\n                  </h3>\r\n                    \r\n                </div>\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np res-outer\">\r\n                  <h3 class=\"example-heading\">Examples</h3>\r\n                  <ul class=\"cont-list\">\r\n                    <li>How well do you know the Lakers?</li>\r\n                    <li>What's your digital maturity rank?</li>\r\n                    <li>Can you ace this ultimate 'Friends' quiz?</li>\r\n                  </ul>\r\n                </div>\r\n              </label>\r\n             \r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6  calquiz-block\">\r\n            <div class=\"center-cont dashboard-top ic-poll\" (click)=\"selectCalc('Poll')\">\r\n              <label class=\"check-icon\">\r\n                <input type=\"radio\" value=\"Pole\" name=\"calQuiz\" id=\"radio31\">\r\n                <div class=\"calc-quiz-margin\">\r\n                  <h3>\r\n                    <i class=\"material-icons unchecked-icons blank\">assistant</i>Poll \r\n                    <i *ngIf=\"!experienceType.poll\" class=\"material-icons icon-lock\">lock_outline</i>\r\n                  </h3>\r\n                    \r\n                </div>\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np res-outer\">\r\n                  <h3 class=\"example-heading\">Examples</h3>\r\n                  <ul class=\"cont-list\">\r\n                    <li>Who will you vote for? Trump or Hillary</li>\r\n                    <li>Who do you think will win the World Series? Phillies or Yankees or Red Sox</li>\r\n                    <li>Should marijuana be legalized? Yes or No</li>\r\n                  </ul>\r\n                </div>\r\n              </label>\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"new-select-template select-template-block\" [class.hide]=\"!(apps && apps.length)\">\r\n\r\n        <div class=\"text-template-block\">\r\n          <h4 class=\"align-center\" >Select a Content Type</h4>\r\n        </div>\r\n        <div class=\"template-option\">\r\n          <div class=\"temaplate-cont-part\">\r\n            <div class=\"center-cont ic-num\" (click)=\"selectCalc('Numerical')\">\r\n              <label class=\"check-icon \">\r\n                <input type=\"radio\" value=\"Numerical\" name=\"calQuiz\" id=\"radio1\">\r\n                <div class=\"calc-quiz-margin\">\r\n                  <h3>\r\n                    <i class=\"material-icons unchecked-icons\" [class.cal-icons-block]=\"!experienceType.numerical\">dialpad</i>\r\n                    Numerical Calculator\r\n                  </h3>\r\n                  <!-- <i *ngIf=\"!experienceType.numerical\" class=\"material-icons icon-lock\">lock_outline</i> -->\r\n                </div>\r\n                <div class=\"over-cont res-outer padding-top\">\r\n                  <h3 class=\"example-heading\">Examples</h3>\r\n                  <ul class=\"cont-list\">\r\n                    <li>What is my solar ROI?</li>\r\n                    <li>What is the cost to remodel your kitchen?</li>\r\n                    <li>What is the risk of getting zika?</li>\r\n                  </ul>\r\n                </div>\r\n              </label>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"temaplate-cont-part\">\r\n            <div class=\"center-cont dashboard-top ic-oquiz\" (click)=\"selectCalc('Recommendation')\">\r\n              <label class=\"check-icon \">\r\n                <input type=\"radio\" value=\"Numerical\" name=\"calQuiz\" id=\"radio1\">\r\n                <div class=\"calc-quiz-margin\">\r\n                  <h3>\r\n                    <i class=\"material-icons unchecked-icons\" [class.cal-icons-block]=\"!experienceType.recommendation\">photo</i> Outcome Quiz</h3>\r\n                  <!-- <i *ngIf=\"!experienceType.recommendation\" class=\"material-icons icon-lock\">lock_outline</i> -->\r\n                </div>\r\n                <div class=\"over-cont res-outer\">\r\n                  <h3 class=\"example-heading\">Examples</h3>\r\n                  <ul class=\"cont-list\">\r\n                    <li>Which jeans should you wear?</li>\r\n                    <li>Which insurance plan is right for you?</li>\r\n                    <li>Which celebrity matches your style?</li>\r\n                  </ul>\r\n                </div>\r\n              </label>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"temaplate-cont-part\">\r\n            <div class=\"center-cont dashboard-top ic-graded\" (click)=\"selectCalc('Graded')\">\r\n              <label class=\"check-icon \">\r\n                <input type=\"radio\" value=\"Numerical\" name=\"calQuiz\" id=\"radio1\">\r\n                <div class=\"calc-quiz-margin\">\r\n                  <h3>\r\n                    <i class=\"material-icons unchecked-icons\" [class.cal-icons-block]=\"!experienceType.graded\">language</i> Graded Quiz</h3>\r\n                  <!-- <i *ngIf=\"!experienceType.graded\" class=\"material-icons icon-lock\">lock_outline</i> -->\r\n                </div>\r\n                <div class=\"over-cont res-outer\">\r\n                  <h3 class=\"example-heading\">Examples</h3>\r\n                  <ul class=\"cont-list\">\r\n                    <li>How well do you know the Lakers?</li>\r\n                    <li>What's your digital maturity rank?</li>\r\n                    <li>Can you ace this ultimate 'Friends' quiz?</li>\r\n                  </ul>\r\n                </div>\r\n              </label>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"temaplate-cont-part\">\r\n            <div class=\"center-cont dashboard-top ic-poll\" (click)=\"selectCalc('Poll')\">\r\n              <label class=\"check-icon \">\r\n                <input type=\"radio\" value=\"Numerical\" name=\"calQuiz\" id=\"radio1\">\r\n                <div class=\"calc-quiz-margin\">\r\n                  <h3>\r\n                    <i class=\"material-icons unchecked-icons \" [class.cal-icons-block]=\"!experienceType.poll\">assistant</i> Poll</h3>\r\n                  <!-- <i *ngIf=\"!experienceType.poll\" class=\"material-icons icon-lock\">lock_outline</i> -->\r\n                </div>\r\n                <div class=\"over-cont res-outer\">\r\n                  <h3 class=\"example-heading\">Examples</h3>\r\n                  <ul class=\"cont-list\">\r\n                    <li>Who will you vote for? Trump or Hillary</li>\r\n                    <li>Who do you think will win the World Series? Phillies or Yankees or Red Sox</li>\r\n                    <li>Should marijuana be legalized? Yes or No</li>\r\n                  </ul>\r\n                </div>\r\n              </label>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"temp-cards-outer-main\" >\r\n      <!--templates cards  -->\r\n      \r\n      <div class=\"add-collection-outer\">\r\n        <a href=\"\" class=\"add-collection-link\" data-toggle=\"modal\" (click)=\"add=true;resetCollection();\" data-target=\"#add-collection\">\r\n          <i class=\"material-icons\" >create_new_folder</i> Add Folder </a>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"accordion-outer\">\r\n\r\n        <!--Accordion wrapper-->\r\n        <div class=\"accordion\" *ngIf=\"foldersContent['folders'] && foldersContent['folders'].length\" id=\"accordionEx\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\r\n          <!-- Accordion card -->\r\n          <div class=\"card folder-head\" (click)=\"addClass('rotate-icon',folder['_id']+'_caret')\" \r\n          [id]=\"folder['_id'] + '_head'\" (mouseenter)=\"addClass('close-parent',folder['_id'] + '_head')\"\r\n            *ngFor=\"let folder of foldersContent['folders'];let i=index;\">\r\n            <a class=\"folder-edit\" href=\"javascript::void(0)\"  data-toggle=\"modal\" (click)=\"setFolderForm(folder);resetCollection();\" data-target=\"#add-collection\">\r\n              <i class=\"material-icons\" > edit </i>\r\n            </a>\r\n            <a class=\"folder-close\" (click)=\"removeFolder(folder,i)\">\r\n              <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n            </a>\r\n            <div *ngIf=\"!(folder['industries'] && folder['industries'].length)\">\r\n              <!-- Card header -->\r\n              <div class=\"card-header\" role=\"tab\" [id]=\"folder['_id'] + '_heading'\">\r\n                <a data-toggle=\"collapse\" [id]=\"folder['_id']+'_link'\" data-parent=\"#accordionEx\" [href]=\"'#'+folder['_id']\" aria-expanded=\"true\">\r\n                  <h5 class=\"mb-0\">\r\n                    <img src=\"https://dlvkyia8i4zmz.cloudfront.net/TfcAuQJOQUCCBeIsedWK_folder-icon.png\" alt=\"folder-icon\" /> {{folder['name']}} ( {{folder['apps']? folder['apps'].length :0}} )\r\n                    <i [id]=\"folder['_id']+'_caret'\" class=\"fa fa-angle-right\"></i>\r\n                  </h5>\r\n                </a>\r\n              </div>\r\n\r\n              <!-- Card body -->\r\n              <div [id]=\"folder['_id']\" class=\"collapse\" role=\"tabpanel\" data-parent=\"#accordionEx\">\r\n                <div class=\"card-body\">\r\n                  <!-- static html -->\r\n                  <div class=\"temp-card\" *ngFor=\"let app of folder['apps']\" [id]=\"'calc_'+app._id\">\r\n                    <!--wave loader start-->\r\n                    <div class=\"preloader-dash content-loader hide\">\r\n                      <div class=\"timeline-item\">\r\n                        <div class=\"circle-logo animated-background\"></div>\r\n                        <div class=\"time animated-background\"></div>\r\n                        <div class=\"line line-1 animated-background\"></div>\r\n                        <div class=\"line line-2 animated-background\"></div>\r\n                        <div class=\"line line-3 animated-background\"></div>\r\n                        <div class=\"line line-4 animated-background\"></div>\r\n                        <div class=\"line line-5 animated-background\"></div>\r\n                        <div class=\"line line-6 animated-background\"></div>\r\n                      </div>\r\n                    </div>\r\n                    <!--wave loader hide-->\r\n                    <div class=\"temp-card-content\" [id]=\"app['_id']+'_card'\">\r\n                      <div class=\"temp-img\">\r\n                        <!-- <div class=\"img-overlay hide rs-show\"></div> -->\r\n                        <a class=\"img-temp\" href=\"javascript:void(0)\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC', { id: app._id })\" [style.backgroundImage]=\"'url(' + (((app.pages[0].visible && app.pages[0].bgImageVisible)||(app.pages[0].bgImageVisible))?app.pages[0].bgImage:templatesImages[app.template]) + ')' | safeStyle\"></a>\r\n                      </div>\r\n                      <div class=\"temp-info\">\r\n                        <div class=\"common-table\">\r\n                          <div class=\"common-table-cell\">\r\n                            <h6 class=\"cal-type\">\r\n                              <div class=\"caltag\" *ngIf=\"app.templateType == 'Numerical'\">\r\n                                <i class=\"material-icons unchecked-icons\">dialpad</i>CALCULATOR</div>\r\n                              <div class=\"caltag\" *ngIf=\"app.templateType == 'Recommendation'\">\r\n                                <i class=\"material-icons unchecked-icons\">photo</i>QUIZ</div>\r\n                              <div class=\"caltag\" *ngIf=\"app.templateType == 'Graded'\">\r\n                                <i class=\"material-icons unchecked-icons\">language</i>GRADED QUIZ</div>\r\n                              <div class=\"caltag\" *ngIf=\"app.templateType == 'Poll'\">\r\n                                <i class=\"material-icons unchecked-icons\">assistant</i>POLL</div>\r\n                            </h6>\r\n                            <h5 class=\"cal-name\">\r\n                              <a href=\"javascript:void(0)\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC', { id: app._id })\">{{app.name}}</a>\r\n                              <a *ngIf=\"app.mode=='PUBLIC'\" [attr.href]=\"openLive(app.url)\" target=\"_blank\" class=\"live-link\">\r\n                                <i class=\"material-icons\">open_in_new</i>\r\n                              </a>\r\n                            </h5>\r\n                            <div class=\"last-edited\">Last Edited:\r\n                              <span>{{app.updatedAt}}</span>\r\n                            </div>\r\n                            <div class=\"circle-outer hide rs-show \">\r\n                              <span class=\"dash-box-send \">\r\n                                <a href=\"javascript:void(0)\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC', { id: app._id })\">\r\n                                  <i class=\"material-icons\" *ngIf=\"app.mode=='PRIVATE'\">send</i>\r\n                                </a>\r\n                              </span>\r\n                            </div>\r\n                            <div class=\"temp-status-bar\">\r\n                              <div class=\"status-outer \">\r\n                                <span [class.draft]=\"app.mode=='PRIVATE'\">{{(app.mode=='PUBLIC')?'Live':'Draft'}}</span>\r\n                              </div>\r\n                              <div class=\"uv-outer\" (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\">\r\n                                <span>\r\n                                  <i class=\"material-icons\">remove_red_eye</i>\r\n                                  <span class=\"total-count\">Total Views</span>\r\n                                  <em> {{ (app.uniqueViews!=undefined)?app.uniqueViews:'0' }}</em>\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"leads-outer\" (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\">\r\n                                <span>\r\n                                  <i class=\"material-icons\">group</i>\r\n                                  <span class=\"total-count\">Total Leads</span>\r\n                                  <em> {{ (app.leads!=undefined)?app.leads:'0' }}</em>\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"dp-icon-outer\">\r\n                                <span>\r\n                                  <i class=\"material-icons \">more_horiz</i>\r\n                                </span>\r\n                                <ul class=\"new-dropdown-menu\">\r\n                                  <li>\r\n                                    <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC', { id: app._id })\">\r\n                                      <i class=\"material-icons\">format_paint</i>\r\n                                      <span class=\"company-title ellipsis\">&nbsp;Edit</span>\r\n\r\n                                    </a>\r\n                                  </li>\r\n                                  <li>\r\n                                    <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical hide\">\r\n\r\n                                      <i class=\"material-icons\">pageview</i>\r\n\r\n                                      <span class=\"company-title ellipsis\">&nbsp;Preview</span>\r\n\r\n                                    </a>\r\n                                  </li>\r\n                                  <li>\r\n                                    <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical\" (click)=\"checkAnalytics(app,'analytics');callGA('ANALYTICS')\">\r\n\r\n                                      <i class=\"material-icons\">trending_up</i>\r\n\r\n                                      <span class=\"company-title ellipsis\">&nbsp;Analytics</span>\r\n\r\n                                    </a>\r\n                                  </li>\r\n                                  <li>\r\n                                    <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical\" (click)=\"openOldCalc(app,'config');selectSubTab('settings');callGA('SETTINGS');\">\r\n\r\n                                      <i class=\"material-icons\">mode_edit</i>\r\n\r\n                                      <span class=\"company-title ellipsis\">&nbsp;Settings</span>\r\n\r\n                                    </a>\r\n                                  </li>\r\n                                  <li *ngIf=\"app.url!='builder-demo' && (!subDomainService.currentCompany.agency ||  subDomainService.currentCompany.parent_company)\">\r\n                                    <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical\" (click)=\"duplicateApp(app,folder);callGA('DUPLICATE')\">\r\n\r\n                                      <i class=\"material-icons\">content_copy</i>\r\n\r\n                                      <span class=\"company-title ellipsis\">&nbsp;Duplicate</span>\r\n\r\n                                    </a>\r\n                                  </li>\r\n                                  <li *ngIf=\"app.url!='builder-demo' && subDomainService.currentCompany.agency && !subDomainService.currentCompany.parent_company\">\r\n                                    <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical\" (click)=\"assignCompany(app,folder)\">\r\n\r\n                                      <i class=\"material-icons\">content_copy</i>\r\n\r\n                                      <span class=\"company-title ellipsis\">&nbsp;Duplicate</span>\r\n\r\n                                    </a>\r\n                                  </li>\r\n                                  <li class=\"sub-menu\" *ngIf=\"foldersContent['folders'] && foldersContent['folders'].length\">\r\n                                    <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical \">\r\n\r\n                                      <i class=\"material-icons\">move_to_inbox</i>\r\n\r\n                                      <span class=\"company-title ellipsis\">&nbsp; MOVE</span>\r\n\r\n                                    </a>\r\n                                    <ul *ngIf=\"foldersContent['folders'] && foldersContent['folders'].length\">\r\n                                      <li *ngFor=\"let f of excludeFolder(folder['name'],foldersContent['folders'])\">\r\n                                        <a href=\"javascript::void(0);\" (click)=\"moveFileToFolder(f,{ moveFrom:folder['name'], premade_calc: null ,app:app['_id']})\"\r\n                                          class=\"hvr-shutter-out-vertical\">\r\n                                          {{f['name']}}</a>\r\n                                        <div *ngIf=\"f['name'].length>10\" class=\"tip-outer\">{{f['name']}}</div>\r\n                                        \r\n                                      </li>\r\n                                      <li>\r\n                                        <a href=\"javascript::void(0);\" (click)=\"moveFileToFolder({company:subDomainService.currentCompany.id},{ moveFrom:folder['name'], premade_calc: null ,app:app['_id']})\"\r\n                                          class=\"hvr-shutter-out-vertical\">\r\n                                          No Folder</a>\r\n                                      </li>\r\n                                      <li>\r\n                                          <a href=\"\" class=\"hvr-shutter-out-vertical\" data-toggle=\"modal\" (click)=\"add=true;resetCollection();\" data-target=\"#add-collection\">\r\n                                           Add Folder </a>\r\n                                      \r\n                                      </li>\r\n                                      <!-- <li><a href=\"\" class=\"hvr-shutter-out-vertical \"> Collection 1</a></li> -->\r\n                                    </ul>\r\n                                  </li>\r\n                                  \r\n                                  <li *ngIf=\"app.url!='builder-demo'\">\r\n                                    <a href=\"javascript:void(0);\" (click)=\"deleteApp(app,folder);callGA('DELETE')\" class=\"hvr-shutter-out-vertical\">\r\n\r\n                                      <i class=\"material-icons\">delete</i>\r\n\r\n                                      <span class=\"company-title ellipsis\">&nbsp;Delete</span>\r\n\r\n                                    </a>\r\n                                  </li>\r\n                                </ul>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- static html end -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Accordion card -->\r\n\r\n\r\n        </div>\r\n        <!--/.Accordion wrapper-->\r\n\r\n      </div>\r\n\r\n      <div class=\"card-shd-outer\" *ngIf=\"apps && apps.length && foldersContent['leaves'].length\">\r\n        <div class=\"temp-card\" *ngFor=\"let app of getFileterdApps()\" id=\"calc_{{app._id}}\">\r\n          <!--wave loader start-->\r\n          <div class=\"preloader-dash content-loader hide\">\r\n            <div class=\"timeline-item\">\r\n              <div class=\"circle-logo animated-background\"></div>\r\n              <div class=\"time animated-background\"></div>\r\n              <div class=\"line line-1 animated-background\"></div>\r\n              <div class=\"line line-2 animated-background\"></div>\r\n              <div class=\"line line-3 animated-background\"></div>\r\n              <div class=\"line line-4 animated-background\"></div>\r\n              <div class=\"line line-5 animated-background\"></div>\r\n              <div class=\"line line-6 animated-background\"></div>\r\n            </div>\r\n          </div>\r\n          <!--wave loader hide-->\r\n          <div class=\"temp-card-content\">\r\n            <div class=\"temp-img\">\r\n              <!-- <div class=\"img-overlay hide rs-show\"></div> -->\r\n              <a class=\"img-temp\" href=\"javascript:void(0)\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC', { id: app._id })\" [style.backgroundImage]=\"'url(' + (((app.pages[0].visible && app.pages[0].bgImageVisible)||(app.pages[0].bgImageVisible))?app.pages[0].bgImage:templatesImages[app.template]) + ')' | safeStyle\"></a>\r\n            </div>\r\n            <div class=\"temp-info\">\r\n              <div class=\"common-table\">\r\n                <div class=\"common-table-cell\">\r\n                  <h6 class=\"cal-type\">\r\n                    <div class=\"caltag\" *ngIf=\"app.templateType == 'Numerical'\">\r\n                      <i class=\"material-icons unchecked-icons\">dialpad</i>CALCULATOR</div>\r\n                    <div class=\"caltag\" *ngIf=\"app.templateType == 'Recommendation'\">\r\n                      <i class=\"material-icons unchecked-icons\">photo</i>QUIZ</div>\r\n                    <div class=\"caltag\" *ngIf=\"app.templateType == 'Graded'\">\r\n                      <i class=\"material-icons unchecked-icons\">language</i>GRADED QUIZ</div>\r\n                    <div class=\"caltag\" *ngIf=\"app.templateType == 'Poll'\">\r\n                      <i class=\"material-icons unchecked-icons\">assistant</i>POLL</div>\r\n                  </h6>\r\n                  <h5 class=\"cal-name\">\r\n                    <a href=\"javascript:void(0)\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC', { id: app._id })\">{{app.name}}</a>\r\n                    <a *ngIf=\"app.mode=='PUBLIC'\" [attr.href]=\"openLive(app.url)\" target=\"_blank\" class=\"live-link\">\r\n                      <i class=\"material-icons\">open_in_new</i>\r\n                    </a>\r\n                  </h5>\r\n                  <div class=\"last-edited\">Last Edited:\r\n                    <span>{{app.updatedAt}}</span>\r\n                  </div>\r\n                  <div class=\"circle-outer hide rs-show \">\r\n                    <span class=\"dash-box-send \">\r\n                      <a href=\"javascript:void(0)\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC', { id: app._id })\">\r\n                        <i class=\"material-icons\" *ngIf=\"app.mode=='PRIVATE'\">send</i>\r\n                      </a>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"temp-status-bar\">\r\n                    <div class=\"status-outer \">\r\n                      <span [class.draft]=\"app.mode=='PRIVATE'\">{{(app.mode=='PUBLIC')?'Live':'Draft'}}</span>\r\n                    </div>\r\n                    <div class=\"uv-outer\" (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\">\r\n                      <span>\r\n                        <i class=\"material-icons\">remove_red_eye</i>\r\n                        <span class=\"total-count\">Total Views</span>\r\n                        <em> {{ (app.uniqueViews!=undefined)?app.uniqueViews:'0' }}</em>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"leads-outer\" (mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\">\r\n                      <span>\r\n                        <i class=\"material-icons\">group</i>\r\n                        <span class=\"total-count\">Total Leads</span>\r\n                        <em> {{ (app.leads!=undefined)?app.leads:'0' }}</em>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"dp-icon-outer\">\r\n                      <span>\r\n                        <i class=\"material-icons \">more_horiz</i>\r\n                      </span>\r\n                      <ul class=\"new-dropdown-menu\">\r\n                        <li>\r\n                          <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical\" (click)=\"openOldCalc(app,'build');callGA('EDITCALC', { id: app._id })\">\r\n                            <i class=\"material-icons\">format_paint</i>\r\n                            <span class=\"company-title ellipsis\">&nbsp;Edit</span>\r\n\r\n                          </a>\r\n                        </li>\r\n                        <li>\r\n                          <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical hide\">\r\n\r\n                            <i class=\"material-icons\">pageview</i>\r\n\r\n                            <span class=\"company-title ellipsis\">&nbsp;Preview</span>\r\n\r\n                          </a>\r\n                        </li>\r\n                        <li>\r\n                          <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical\" (click)=\"checkAnalytics(app,'analytics');callGA('ANALYTICS')\">\r\n\r\n                            <i class=\"material-icons\">trending_up</i>\r\n\r\n                            <span class=\"company-title ellipsis\">&nbsp;Analytics</span>\r\n\r\n                          </a>\r\n                        </li>\r\n                        <li>\r\n                          <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical\" (click)=\"openOldCalc(app,'config');selectSubTab('settings');callGA('SETTINGS');\">\r\n\r\n                            <i class=\"material-icons\">mode_edit</i>\r\n\r\n                            <span class=\"company-title ellipsis\">&nbsp;Settings</span>\r\n\r\n                          </a>\r\n                        </li>\r\n                        <li *ngIf=\"app.url!='builder-demo' && (!subDomainService.currentCompany.agency ||  subDomainService.currentCompany.parent_company)\">\r\n                          <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical\" (click)=\"duplicateApp(app);callGA('DUPLICATE')\">\r\n\r\n                            <i class=\"material-icons\">content_copy</i>\r\n\r\n                            <span class=\"company-title ellipsis\">&nbsp;Duplicate</span>\r\n\r\n                          </a>\r\n                        </li>\r\n                      \r\n                        <li *ngIf=\"app.url!='builder-demo' && subDomainService.currentCompany.agency && !subDomainService.currentCompany.parent_company\">\r\n                          <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical\" (click)=\"assignCompany(app)\">\r\n\r\n                            <i class=\"material-icons\">content_copy</i>\r\n\r\n                            <span class=\"company-title ellipsis\">&nbsp;Duplicate</span>\r\n\r\n                          </a>\r\n                        </li>\r\n                        <li *ngIf=\"foldersContent['folders'] && foldersContent['folders'].length\" class=\"sub-menu\">\r\n                          <a href=\"javascript:void(0);\" class=\"hvr-shutter-out-vertical \">\r\n\r\n                            <i class=\"material-icons\">move_to_inbox</i>\r\n\r\n                            <span class=\"company-title ellipsis\">&nbsp;MOVE</span>\r\n\r\n                          </a>\r\n                          <ul *ngIf=\"foldersContent['folders'] && foldersContent['folders'].length\">\r\n                            <li   *ngFor=\"let folder of foldersContent['folders']\">\r\n                              <a  href=\"javascript::void(0);\"  (click)=\"moveFileToFolder(folder,{ moveFrom:null, premade_calc: null ,app:app['_id']})\"\r\n                                class=\"hvr-shutter-out-vertical\">\r\n                                {{folder['name']}}</a>\r\n                                <div *ngIf=\"folder['name'].length>10\" class=\"tip-outer\">{{folder['name']}}</div>\r\n                            </li>\r\n                            <li>\r\n                            \r\n                                <a href=\"\" class=\"hvr-shutter-out-vertical\" data-toggle=\"modal\" (click)=\"add=true;resetCollection();\" data-target=\"#add-collection\">\r\n                                  Add Folder </a>\r\n                            </li>\r\n                            <!-- <li><a href=\"\" class=\"hvr-shutter-out-vertical \"> Collection 1</a></li> -->\r\n                          </ul>\r\n                        </li>\r\n                        <li *ngIf=\"app.url!='builder-demo'\">\r\n                          <a href=\"javascript:void(0);\" (click)=\"deleteApp(app);callGA('DELETE')\" class=\"hvr-shutter-out-vertical\">\r\n\r\n                            <i class=\"material-icons\">delete</i>\r\n\r\n                            <span class=\"company-title ellipsis\">&nbsp;Delete</span>\r\n\r\n                          </a>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--templates cards end  -->\r\n      <div class=\"pagination-outer\" *ngIf=\"apps && apps.length\" [class.hide]=\"maxPageCount == 1 || pageNo == maxPageCount\">\r\n        <!-- <div class=\"mid-outer hide\">\r\n          <button type=\"button\" class=\"next-button\" [class.disable]=\"(pageNo+1) == maxPageCount\"\r\n            (click)=\"next()\"> Next\r\n            <i class=\"material-icons\">keyboard_backspace</i>\r\n          </button>\r\n          <button type=\"button\" class=\"back-button\" [class.disable]=\"!pageNo\" (click)=\"back()\">\r\n            <i class=\"material-icons\">keyboard_backspace</i> Back\r\n          </button>\r\n        </div> -->\r\n        <button type=\"button\" class=\"learn-more-button\" (click)=\"next()\"> Load More</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"temp-cards-outer-main \">\r\n      <div class=\"accordion-outer\">\r\n\r\n        <!-- Premade Accordion wrapper-->\r\n        <div class=\"accordion\" *ngIf=\"foldersContent['premadeFolder'] && foldersContent['premadeFolder']['industries'].length\" id=\"accordionPre\"\r\n          role=\"tablist\" aria-multiselectable=\"true\">\r\n          <h4 class=\"h4-head mt15\">Review our premade content in your industry</h4>\r\n          <!-- Accordion card  -->\r\n          <div class=\"card folder-head\" [id]=\"foldersContent['premadeFolder']['_id'] + '_head'\">\r\n            <!-- (click)=\"addClass('rotate-icon',foldersContent['premadeFolder']['_id']+'_caret') -->\r\n            <!-- <a class=\"folder-close\" ><i class=\"material-icons\" (click)=\"removeFolder(foldersContent['premadeFolder'])\"> close </i></a> -->\r\n            <!-- <div class=\"card-header\" role=\"tab\" [id]=\"foldersContent['premadeFolder']['_id']+'_heading'\"> ccc -->\r\n            <div class=\"card-header\" role=\"tab\" [id]=\"foldersContent['premadeFolder']['_id'] + '_heading'\">\r\n              <a data-toggle=\"collapse\" data-parent=\"#accordionEx\" [href]=\"'#'+foldersContent['premadeFolder']['_id']\" aria-expanded=\"true\">\r\n                <h5 class=\"mb-0\">\r\n                  <img src=\"https://dlvkyia8i4zmz.cloudfront.net/TfcAuQJOQUCCBeIsedWK_folder-icon.png\" alt=\"folder-icon\" /> Premade content ( {{premadeCount}} )\r\n                  <i [id]=\"foldersContent['premadeFolder']['_id']+'_caret'\" class=\"fa fa-angle-right rotate-icon\"></i>\r\n                </h5>\r\n              </a>\r\n            </div>\r\n            <!-- </div> -->\r\n            <!-- Card body -->\r\n            <div [id]=\"foldersContent['premadeFolder']['_id']\" class=\"collapse in\" role=\"tabpanel\" data-parent=\"#accordionPre\">\r\n              <div class=\"card-body\">\r\n                <div class=\"temp-card\" *ngFor=\"let premade of getPremadesByIndustries(foldersContent['premadeFolder']['industries'])\">\r\n\r\n                  <div class=\"preloader-dash content-loader hide\">\r\n                    <div class=\"timeline-item\">\r\n                      <div class=\"circle-logo animated-background\"></div>\r\n                      <div class=\"time animated-background\"></div>\r\n                      <div class=\"line line-1 animated-background\"></div>\r\n                      <div class=\"line line-2 animated-background\"></div>\r\n                      <div class=\"line line-3 animated-background\"></div>\r\n                      <div class=\"line line-4 animated-background\"></div>\r\n                      <div class=\"line line-5 animated-background\"></div>\r\n                      <div class=\"line line-6 animated-background\"></div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"temp-card-content\">\r\n                    <div class=\"temp-img\">\r\n\r\n                      <a class=\"img-temp\" href=\"javascript:void(0)\" [style.backgroundImage]=\"'url(' + (premade['media'] ||  'https://cdn.filestackcontent.com/IARhhVM9QumiSRj0xPgF') + ')'\"></a>\r\n                    </div>\r\n                    <div class=\"temp-info\">\r\n                      <div class=\"common-table\">\r\n                        <div class=\"common-table-cell\">\r\n                          <h6 class=\"cal-type\">\r\n                            <div class=\"caltag\" *ngIf=\"premade['type'] == 'Calculator'\">\r\n                              <i class=\"material-icons unchecked-icons\">dialpad</i>CALCULATOR</div>\r\n                            <div class=\"caltag\" *ngIf=\"premade['type'] == 'Outcome Quiz'\">\r\n                              <i class=\"material-icons unchecked-icons\">photo</i>QUIZ</div>\r\n                            <div class=\"caltag\" *ngIf=\"premade['type'] == 'Graded Quiz'\">\r\n                              <i class=\"material-icons unchecked-icons\">language</i>GRADED QUIZ</div>\r\n                            <div class=\"caltag\" *ngIf=\"premade['type'] == 'Poll'\">\r\n                              <i class=\"material-icons unchecked-icons\">assistant</i>POLL</div>\r\n                          </h6>\r\n\r\n                          <h5 class=\"cal-name\">\r\n                            <a href=\"javascript:void(0)\" (click)=\"createCalc(premade)\">{{premade['title']}}</a>\r\n                            <a class=\"live-link\" target=\"_blank\" [href]=\"getUrl(premade['liveApp']['url'])\">\r\n                              <i class=\"material-icons\">open_in_new</i>\r\n                            </a>\r\n\r\n                          </h5>\r\n                          <!-- <div  class=\"last-edited\">Last Edited:\r\n                                    <span >Jun 5th '18</span>\r\n                                  </div> -->\r\n                          <div class=\"circle-outer hide rs-show \">\r\n                            <span class=\"dash-box-send \">\r\n                              <a href=\"javascript:void(0)\">\r\n                                <i class=\"material-icons\">send</i>\r\n                              </a>\r\n                            </span>\r\n                          </div>\r\n                          <div class=\"temp-status-bar\">\r\n                            <!-- ATTACH BUTTONS HERE -->\r\n                            <a href=\"javascript::void(0)\" (click)=\"createCalc(premade)\" *ngIf=\"premade['active'] && _featureAuthService.features.experiences[getTemplateType(premade?.type).toLowerCase()]\"\r\n                              class=\"pre-btn\">\r\n                              <i class=\"material-icons\">send</i> publish</a>\r\n                            <a href=\"javascript::void(0)\" (click)=\"createCalc(premade)\" *ngIf=\"!premade['active'] || !_featureAuthService.features.experiences[getTemplateType(premade?.type).toLowerCase()]\"\r\n                              class=\"pre-btn \">\r\n                              <i class=\"material-icons lock\">lock_outline</i> publish</a>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Accordion card -->\r\n\r\n      </div>\r\n      <!--/.Accordion wrapper-->\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"dashboard-right-part\">\r\n    <div class=\"common-outer text-center referral-ui\">\r\n      <img *ngIf=\"subscription_status === 'in_trial'\" src=\"assets/images/gift_5_sec.gif\" alt=\"img\" class=\"img-getFreeMonths\" />\r\n      <img *ngIf=\"subscription_status !== 'in_trial'\" src=\"assets/images/save_net_bill.png\" alt=\"img\" />\r\n      <!-- <h2 *ngIf=\"subscription_status === 'in_trial'\">Get Free Months</h2> -->\r\n      <h2 class=\"new-color\" *ngIf=\"subscription_status !== 'in_trial'\">Save on your Next Bill</h2>\r\n      <h4>Share Outgrow with Friends</h4>\r\n      <span>Give your friends one free month of the Essentials plan and get $45 credit on your next bill.</span>\r\n      <a href=\"\" [routerLink]=\"['/referralCandy']\" class=\"new-border-btn\">Invite Friends</a>\r\n    </div>\r\n    <div class=\"common-outer new-promo\" *ngIf=\"currentCompany?.parent_company === null && this.currentCompany.deal_refered !== 'JVZOO' && this.currentCompany.deal_refered !== 'PKS' && subscription?.status==='active' && subscription?.plan_id.split('_')[1] === 'm'\">\r\n      <div class=\"promo-outer\">\r\n        <div class=\"midOuter\">\r\n          <h3 class=\"mb5 save-text\">Save over\r\n            <label *ngIf=\"subscription?.plan_id.split('_')[0] === 'business'\">$1440</label>\r\n            <label *ngIf=\"subscription?.plan_id.split('_')[0] === 'essentials'\">$240</label>\r\n            <label *ngIf=\"subscription?.plan_id.split('_')[0] === 'freelancer'\">$240</label>&nbsp;\r\n            <span class=\"mb5 save-text-small\">by switching to an annual payment plan.</span>\r\n          </h3>\r\n          <div class=\"upgrade-outer\">\r\n            <a href=\"javascript:void(0);\" (click)=\"callPopups(subscription?.plan_id)\" class=\"upgrade-btn\">\r\n              Switch to annual billing\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"common-outer new-promo\" *ngIf=\"currentCompany?.parent_company === null && subscription?.status==='in_trial' && !showCountdownPromo\">\r\n      <div class=\"promo-outer\">\r\n        <div class=\"midOuter\">\r\n          <h3>Get 20% OFF\r\n            <span> on all plans </span>\r\n          </h3>\r\n          <h5>Upgrade before</h5>\r\n          <h1>\r\n            <i class=\"material-icons\">access_time</i>\r\n            <span innerHTML={{getFormatted(subscription?.trial_end)}}></span>\r\n          </h1>\r\n\r\n          <div class=\"upgrade-outer\">\r\n            <a href=\"javascript:void(0);\" (click)=\"callPopups('essentials_m')\" class=\"upgrade-btn\">\r\n              Upgrade Now\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"p-code\">\r\n        <div class=\"top-border\"></div>\r\n        <div class=\"p-text\">\r\n          <i class=\"material-icons\">local_activity</i>\r\n          <div class=\"code-outer\"> Promo Code: UPGRADE20%\r\n            <span>Only\r\n              <span>{{noOfPromoCodes}}</span> promo\r\n              <span *ngIf=\"noOfPromoCodes === 1\"> code </span>\r\n              <span *ngIf=\"noOfPromoCodes > 1\"> codes </span>left for the week</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"common-outer promo-outer new-promo\" *ngIf=\"currentCompany?.parent_company === null && !countdownPromoService.countDownPromo?.cdTimeOver &&\r\n                        subscription?.status==='in_trial' && showCountdownPromo\">\r\n      <div class=\"midOuter\">\r\n        <h5 class=\"mt2\">Trial finishes tomorrow</h5>\r\n        <h3 class=\"mb15\">\r\n          <span class=\"mb5\"> Last chance to get</span>\r\n          <i class=\"material-icons\">filter_list</i> 20% OFF\r\n        </h3>\r\n        <h1 class=\"dark-text\">\r\n\r\n          After this full price\r\n        </h1>\r\n        <div class=\"timer\">\r\n          <i class=\"material-icons\">access_time</i>\r\n          <div id=\"demo\">\r\n            {{countdownPromoService.countDownPromo?.cdHour}}\r\n            <span>&nbsp;hrs</span> {{countdownPromoService.countDownPromo?.cdMinute}}\r\n            <span>&nbsp;min</span> {{countdownPromoService.countDownPromo?.cdSecond}}\r\n            <span>&nbsp;sec</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"upgrade-outer\">\r\n          <a href=\"javascript:void(0);\" (click)=\"callPopups('essentials_m')\" class=\"upgrade-btn\">\r\n            Upgrade Now\r\n          </a>\r\n          <!--<a *ngIf=\"!showPromoCode\"  href=\"javascript:void(0);\" (click)=\"showPremiumPopup()\" class=\"upgrade-btn cpy-cpn\">-->\r\n          <!--Get Promo Code-->\r\n          <!--</a>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"p-code\">\r\n        <div class=\"top-border\"></div>\r\n        <div class=\"p-text\">\r\n          <i class=\"material-icons\">local_activity</i>\r\n          <div class=\"code-outer\"> Promo Code: UPGRADE20%\r\n            <span>Only\r\n              <span>{{noOfPromoCodes}}</span> promo\r\n              <span *ngIf=\"noOfPromoCodes === 1\"> code </span>\r\n              <span *ngIf=\"noOfPromoCodes > 1\"> codes </span>left for the week</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"common-outer hide\">\r\n      <div class=\"head-section\">\r\n        <div class=\"heading\">Popular Calculators</div>\r\n      </div>\r\n\r\n      <div class=\"popular-outer\">\r\n        <div class=\"popular-img-outer\">\r\n          <div class=\"img-section\" [style.backgroundImage]=\"'url(https://cdn.filestackcontent.com/HmlehP6SHemBKa9WzMEt)'\"></div>\r\n        </div>\r\n        <div class=\"popular-text\">\r\n          <div class=\"common-table\">\r\n            <div class=\"common-table-cell\">\r\n              <a href=\"javascript:void(0);\">Calculator Name here </a>\r\n              <div class=\"calname-outer\">\r\n                <div class=\"caltag\">calculator</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"popular-outer\">\r\n        <div class=\"popular-img-outer\">\r\n          <div class=\"img-section\" [style.backgroundImage]=\"'url(https://cdn.filestackcontent.com/HmlehP6SHemBKa9WzMEt)'\"></div>\r\n        </div>\r\n        <div class=\"popular-text\">\r\n          <div class=\"common-table\">\r\n            <div class=\"common-table-cell\">\r\n              <a href=\"javascript:void(0);\">Calculator Name here</a>\r\n              <div class=\"calname-outer\">\r\n                <div class=\"caltag\">quiz</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"common-outer testimonials-outer hide\">\r\n      <div class=\"inner\">\r\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n          <!-- Indicators -->\r\n          <ol class=\"carousel-indicators\">\r\n            <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n            <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n            <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n          </ol>\r\n\r\n          <!-- Wrapper for slides -->\r\n          <div class=\"carousel-inner\">\r\n            <div class=\"item active\">\r\n              <div class=\"img-outer\">\r\n                <div class=\"img-section\" [style.backgroundImage]=\"'url(https://cdn.filestackcontent.com/AAf6gc9tSki0l7BGQYxF)'\"></div>\r\n              </div>\r\n              <div class=\"text\">\r\n                <div class=\"common-table\">\r\n                  <div class=\"common-table-cell\" href=\"http://resources.outgrow.co/top-viral-calculators\" target=\"_blank\">\r\n                    <h5>\r\n                      Samanth Fox\r\n                      <span>CEO of General Motors</span>\r\n                    </h5>\r\n                    <div class=\"text-position\"> “Freepik Selection are all the thsi is the content designed by our team. How to Additionally, if you\r\n                      are subscribed”\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"item\">\r\n              <div class=\"img-outer\">\r\n                <div class=\"img-section\" [style.backgroundImage]=\"'url(https://cdn.filestackcontent.com/AAf6gc9tSki0l7BGQYxF)'\"></div>\r\n\r\n              </div>\r\n              <div class=\"text\">\r\n                <div class=\"common-table\">\r\n                  <div class=\"common-table-cell\" href=\"http://resources.outgrow.co/top-viral-calculators\" target=\"_blank\">\r\n                    <h5>\r\n                      Samanth Fox\r\n                      <span>CEO of General Motors</span>\r\n                    </h5>\r\n                    <div class=\"text-position\"> “Freepik Selection are all the thsi is the content designed by our team. How to Additionally, if you\r\n                      are subscribed”\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"item\">\r\n              <div class=\"img-outer\">\r\n                <div class=\"img-section\" [style.backgroundImage]=\"'url(https://cdn.filestackcontent.com/AAf6gc9tSki0l7BGQYxF)'\"></div>\r\n\r\n              </div>\r\n              <div class=\"text\">\r\n                <div class=\"common-table\">\r\n                  <div class=\"common-table-cell\" href=\"http://resources.outgrow.co/top-viral-calculators\" target=\"_blank\">\r\n                    <h5>\r\n                      Samanth Fox\r\n                      <span>CEO of General Motors</span>\r\n                    </h5>\r\n                    <div class=\"text-position\"> “Freepik Selection are all the thsi is the content designed by our team. How to Additionally, if you\r\n                      are subscribed”\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <img class=\"icon-position\" src=\"https://cdn.filestackcontent.com/7jL5kd8wTDKSXqLULhhi\" alt=\"\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"calendar-outer\">\r\n      <div class=\"head-section\" *ngIf=\"calEvents.length > 0\">\r\n        <div class=\"heading\">Upcoming Events</div>\r\n      </div>\r\n      <div id=\"calendar\"> </div>\r\n      <div class=\"event-template-outer\" style=\"display:none\">\r\n        <div class=\"event-name border-b\" *ngIf=\"eventNames\">{{ eventNames }}</div>\r\n        <div class=\"template-event\" *ngFor=\"let event of selectedEvent; let i=index\" [class.pt10]=\"eventNames == '' && i == 0\">\r\n          <div class=\"img-outer\">\r\n            <img src=\"{{event.Image}}\" alt=\"\" />\r\n          </div>\r\n          <div class=\"content-outer\">\r\n            <div class=\"temp-name\">{{event.Title}}</div>\r\n            <!-- <div class=\"btn-outer\">\r\n              <a href=\"{{event.Link}}\" target=\"_blank\">Preview</a>\r\n              <a href=\"javascript:void(0)\" (click)=\"getThisTemplate(event.id)\">\r\n                <i *ngIf=\"!event.Active\" class=\"material-icons icon-lock\">lock_outline</i>\r\n                Use Template\r\n              </a>\r\n            </div> -->\r\n            <div class=\"h-div\">\r\n              <div class=\"btn-content\">\r\n                <h2>{{event.Title}}</h2>\r\n                <div class=\"btn-outer\">\r\n                  <a href=\"{{event.Link}}\" target=\"_blank\">Preview</a>\r\n                  <a href=\"javascript:void(0)\" (click)=\"getThisTemplate(event.id)\">\r\n                    <i *ngIf=\"!event.Active || !_featureAuthService.features.experiences[event.type.toLowerCase()]\" class=\"material-icons icon-lock\">lock_outline</i>\r\n                    Use Template\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"common-outer mt20\">\r\n        <div class=\"head-section\">\r\n          <div class=\"heading\">From Our Blog</div>\r\n        </div>\r\n        <div class=\"artical-outer\" *ngFor=\"let data of blogArray\">\r\n          <div class=\"artical-img-outer\">\r\n            <div class=\"img-section\" [style.backgroundImage]=\"'url('+data.img+')'\"></div>\r\n\r\n          </div>\r\n          <div class=\"artical-text\">\r\n            <div class=\"common-table\">\r\n              <a class=\"common-table-cell\" [href]=\"data.url\" target=\"_blank\">{{data.title}}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"artical-outer\">\r\n        <div class=\"artical-img-outer\">\r\n          <div class=\"img-section\" [style.backgroundImage]=\"'url(https://cdn.filestackcontent.com/OJfzM54hRcCP2vl0xwu1)'\"></div>\r\n        </div>\r\n        <div class=\"artical-text\">\r\n          <div class=\"common-table\">\r\n            <a class=\"common-table-cell\" href=\"http://resources.outgrow.co/growth-hacking-examples\" target=\"_blank\">4 inspiring growth hacking stories.</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"artical-outer\">\r\n        <div class=\"artical-img-outer\">\r\n          <div class=\"img-section\" [style.backgroundImage]=\"'url(https://cdn.filestackcontent.com/HmlehP6SHemBKa9WzMEt)'\"></div>\r\n        </div>\r\n        <div class=\"artical-text\">\r\n          <div class=\"common-table\">\r\n            <a class=\"common-table-cell\" href=\"http://resources.outgrow.co/product-hunt-promotions-interactive-content\" target=\"_blank\">See how companies use calculators for product hunt promotions!</a>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <!--- ***********************End Dasboard *************************-->\r\n    <!-- <div class=\"dashboard-outer hide\">\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 np responsive-fix\">\r\n    <div class=\"create-temp-outer hide\" [class.new-experience]=\"!(apps && apps.length)\">\r\n      <div class=\"button-outer\">\r\n        <a href=\"javascript:void(0)\" (click)=\"initCalcQuiz()\">\r\n          <i class=\"material-icons\">add_circle_outline</i> Create a New Experience\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-sm-12 col-xs-12 np-right martop10\" [class.padding-0]=\"!(apps && apps.length)\">\r\n    </div>\r\n  </div>\r\n</div> -->\r\n    <!--Dashboard design end-->\r\n\r\n\r\n    <div id=\"add-new-company\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n        Modal content\r\n        <div class=\"modal-content modal-bg\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <i class=\"material-icons\">close</i>\r\n            </button>\r\n            <h5 class=\"modal-title\">Create a New Company</h5>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"sahil-material\">\r\n              <form [formGroup]=\"createCompanyForm\" (ngSubmit)=\"createCompany()\">\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\" for=\"companyname\"> New Company Name</label>\r\n                  <input class=\"form-control\" id=\"companyname\" type=\"text\" name=\"companyname\" formControlName=\"companyname\" (focus)=\"hideError()\">\r\n                </div>\r\n                <div *ngIf=\"createCompanyForm.controls.companyname.touched && !createCompanyForm.controls.companyname.valid\" class=\"alert alert-danger\">\r\n                  <p *ngIf=\"createCompanyForm.controls.companyname.errors.required\">Company Name is required.</p>\r\n                  <p *ngIf=\"createCompanyForm.controls.companyname.errors.minlength\">Min 3 character is required.</p>\r\n                </div>\r\n                <div class=\"form-group label-floating\">\r\n                  <label class=\"control-label\" for=\"domain\"> Company Url</label>\r\n                  <input class=\"form-control\" id=\"domain\" type=\"text\" name=\"domain\" formControlName=\"domain\" (focus)=\"hideError()\">\r\n                  <label class=\"in-active\">{{subdomainExtension}}</label>\r\n                </div>\r\n                <div *ngIf=\"createCompanyForm.controls.domain.touched && !createCompanyForm.controls.domain.valid\" class=\"alert alert-danger\">\r\n                  <p *ngIf=\"createCompanyForm.controls.domain.errors.required\">Company Name is required.</p>\r\n                  <p *ngIf=\"createCompanyForm.controls.domain.errors.minlength\">Min 3 character is required.</p>\r\n                  <p *ngIf=\"createCompanyForm.controls.domain.errors.pattern\">\r\n                    Invalid Url\r\n                  </p>\r\n                </div>\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np text-right\">\r\n                  <a aria-label=\"Close\" class=\"text-cancel\" data-dismiss=\"modal\">Cancel</a>\r\n                  <button type=\"submit\" id=\"btnCreateCompany\" class=\"btn btn-red-outline btn-add-user btn-hover\" [disabled]=\"!createCompanyForm.valid\">Add New Company\r\n                  </button>\r\n                </div>\r\n              </form>\r\n              <div class=\"alert alert-danger hide\" id=\"success-addCompany\">\r\n                {{Message}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            Your company will be created immediately. As soon as the company is created, you can start adding users to collaborate.\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal fade\" id=\"assignCompany\" role=\"dialog\">\r\n      <div class=\"modal-dialog \">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <i class=\"material-icons\">close</i>\r\n            </button>\r\n            <h3 class=\"modal-title\">Create Duplicate {{agencyCalcType}}</h3>\r\n            <h5>Select the company in which you want to duplicate the {{agencyCalcType}}</h5>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div *ngIf=\"!agencySelect\" class=\"alert alert-danger custom-alert\">\r\n              <i class=\"material-icons\">report_problem</i>\r\n              <span id=\"server-error-msg\">Please select the account where you want to add the clone of {{agencyCalcName}} {{agencyCalcType}}</span>\r\n            </div>\r\n            <div *ngIf=\"agencySelect && childLimitExced\" class=\"alert alert-danger custom-alert\">\r\n              <i class=\"material-icons\">report_problem</i>\r\n              <span id=\"server-error-msg\">Limit is execd of selected company</span>\r\n            </div>\r\n            <div *ngFor=\"let company of companyList; let i = index;\">\r\n              <label class=\"check-icon\">\r\n                <input id=\"f-option{{i}}\" type=\"radio\" [value]=\"company.name\" [checked]=\"companyList[i].check\" (click)=\"companyList[i].check = !companyList[i].check; makeFalse(company._id)\"\r\n                />\r\n                <label for=\"f-option{{i}}\">\r\n                  <span>{{company.name}}</span>\r\n                </label>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-red\" (click)=\"selectCompany()\">Done</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div id=\"add-new-user\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content modal-bg\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <i class=\"material-icons\">close</i>\r\n            </button>\r\n            <h5 class=\"modal-title\">Add New User</h5>\r\n          </div>\r\n          <form [formGroup]=\"inviteUserForm\" (ngSubmit)=\"inviteUser()\" id=\"inviteUserForm\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"alert alert-danger custom-alert hide\" id=\"success-addUser\">\r\n                <p>\r\n                  <span class=\"mat-icon\">\r\n                    <i class=\"material-icons\">report_problem</i>\r\n                  </span>\r\n                  <span id=\"dashboardAdduserMessage\"></span>\r\n                </p>\r\n              </div>\r\n              <div class=\"sahil-material\">\r\n                <div class=\"form-group label-floating name\">\r\n                  <label class=\"control-label\" for=\"inputName\"> Name</label>\r\n                  <input class=\"form-control\" id=\"inputName\" type=\"text\" formControlName=\"userName\" name=\"userName\" autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"inviteUserForm.controls.userName.touched && !inviteUserForm.controls.userName.valid\" class=\"alert alert-danger\">\r\n                  <p *ngIf=\"inviteUserForm.controls.userName.errors.required\">\r\n                    <span class=\"mat-icon\">\r\n                      <i class=\"material-icons\">report_problem</i>\r\n                    </span> Name is required.\r\n                  </p>\r\n                  <p *ngIf=\"inviteUserForm.controls.userName.errors.minlength\">\r\n                    <span class=\"mat-icon\">\r\n                      <i class=\"material-icons\">report_problem</i>\r\n                    </span> Min 3 character is required.\r\n                  </p>\r\n                </div>\r\n                <div class=\"form-group label-floating email\">\r\n                  <label class=\"control-label\" for=\"inputEmail\"> Email Address</label>\r\n                  <input class=\"form-control\" id=\"inputEmail\" type=\"email\" formControlName=\"userEmail\" name=\"userEmail\" autocomplete=\"off\"\r\n                    (focus)=\"removeError()\">\r\n                </div>\r\n                <div *ngIf=\"inviteUserForm.controls.userEmail.touched && !inviteUserForm.controls.userEmail.valid\" class=\"alert alert-danger\">\r\n                  <p *ngIf=\"inviteUserForm.controls.userEmail.errors.required\">\r\n                    <span class=\"mat-icon\">\r\n                      <i class=\"material-icons\">report_problem</i>\r\n                    </span> Email is required.\r\n                  </p>\r\n                  <p *ngIf=\"inviteUserForm.controls.userEmail.errors.checkmail\">\r\n                    <span class=\"mat-icon\">\r\n                      <i class=\"material-icons\">report_problem</i>\r\n                    </span>Invalid Email.</p>\r\n                </div>\r\n                <div class=\"form-group form-group-radio\">\r\n                  <span class=\"heading\">Role</span>\r\n                  <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                    <label class=\"radio-inline\">\r\n                      <input type=\"radio\" value=\"ADMIN\" id=\"radioAdmin\" formControlName=\"userRole\" name=\"userRole\">\r\n                      <label for=\"radioAdmin\"> </label> Admin\r\n                      <small>(Full access including account and payments management)</small>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                    <label class=\"radio-inline\">\r\n                      <input type=\"radio\" value=\"MANAGER\" id=\"radioManager\" formControlName=\"userRole\" name=\"userRole\">\r\n                      <label for=\"radioManager\"> </label> Manager\r\n                      <small>(Full access except for account and payments management)</small>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <a class=\"text-cancel\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</a>\r\n              <button type=\"submit\" [disabled]=\"!inviteUserForm.valid\" class=\"btn btn-red-outline btn-add-user btn-hover\" id=\"btnInvite\">Add New User\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"float-changes-updated hide\">\r\n        <div class=\"col-md-12 np\">\r\n          <span class=\"icon-done\">\r\n            <i class=\"material-icons\">done</i>\r\n          </span>\r\n          <span id=\"floatMessage\">{{ Message }} </span>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"modal fade\" id=\"assignCompany\" role=\"dialog\">\r\n      <div class=\"modal-dialog \">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <i class=\"material-icons\">close</i>\r\n            </button>\r\n            <h3 class=\"modal-title\">Create Duplicate {{agencyCalcType}}</h3>\r\n            <h5>Select the company in which you want to duplicate the {{agencyCalcType}}</h5>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div *ngIf=\"!agencySelect\" class=\"alert alert-danger custom-alert\">\r\n              <i class=\"material-icons\">report_problem</i>\r\n              <span id=\"server-error-msg\">Please select the account where you want to add the clone of {{agencyCalcName}} {{agencyCalcType}}</span>\r\n            </div>\r\n            <div *ngIf=\"agencySelect && childLimitExced\" class=\"alert alert-danger custom-alert\">\r\n              <i class=\"material-icons\">report_problem</i>\r\n              <span id=\"server-error-msg\">Limit is execd of selected company</span>\r\n            </div>\r\n            <div *ngFor=\"let company of companyList; let i = index;\">\r\n              <label class=\"check-icon\">\r\n                <input id=\"f-option{{i}}\" type=\"radio\" [value]=\"company.name\" [checked]=\"companyList[i].check\" (click)=\"companyList[i].check = !companyList[i].check; makeFalse(company._id)\"\r\n                />\r\n                <label for=\"f-option{{i}}\">\r\n                  <span>{{company.name}}</span>\r\n                </label>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-red\" (click)=\"selectCompany()\">Done</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!--<div class=\"become-anAffiliate\">\r\n    <div class=\"become-anAffiliate-left\">Grow with Outgrow\r\n        <img src=\"assets/images/become_an_outgrow_affiliate_icon-dollar.png\">\r\n    </div>\r\n    <div class=\"become-anAffiliate-right\">\r\n        <img src=\"assets/images/become_an_outgrow_affiliate-icon.png\"> Become an Outgrow affiliate\r\n        <a class=\"btn btn-red btn-hover\" href=\"http://affiliates.outgrow.co/\" target=\"_blank\">Start Promoting</a>\r\n    </div>\r\n</div>-->\r\n\r\n    <div id=\"add-collection\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content modal-bg\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <i class=\"material-icons\">close</i>\r\n            </button>\r\n            <h5 class=\"modal-title\" id=\"collectionModalTitle\">{{add ? 'Add Folder' : 'Update Folder Name'}}</h5>\r\n          </div>\r\n          <form [formGroup]=\"folderForm\" (ngSubmit)=\"folderOps(folderForm.value,add,folderBtn)\" id=\"folderForm\">\r\n            <div class=\"modal-body\">\r\n              <div class=\"alert alert-danger custom-alert hide\" id=\"success-addFolder\">\r\n                <p>\r\n                  <span class=\"mat-icon\">\r\n                    <i class=\"material-icons\">report_problem</i>\r\n                  </span>\r\n                  <span id=\"dashboardAddFolderMessage\"></span>\r\n                </p>\r\n              </div>\r\n              <div class=\"sahil-material\">\r\n                <div class=\"form-group label-floating name\" [class.is-empty]=\"!folderForm.get('name').value\"> \r\n                  <label class=\"control-label\" for=\"inputName\">Folder name</label>\r\n                  <input class=\"form-control\" id=\"inputCollectionName\" type=\"text\" formControlName=\"name\" name=\"name\" autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"folderForm.controls.name.touched && !folderForm.controls.name.valid\" class=\"alert alert-danger\">\r\n                  <p *ngIf=\"folderForm.controls.name.errors.required\">\r\n                    <span class=\"mat-icon\">\r\n                      <i class=\"material-icons\">report_problem</i>\r\n                    </span> Folder name is required.\r\n                  </p>\r\n                  <p *ngIf=\"folderForm.controls.name.errors.minlength\">\r\n                    <span class=\"mat-icon\">\r\n                      <i class=\"material-icons\">report_problem</i>\r\n                    </span> Min 3 character is required.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <a class=\"text-cancel\" data-dismiss=\"modal\" aria-label=\"Close\">Cancel</a>\r\n              <button type=\"submit\" #folderBtn [disabled]=\"!folderForm.valid\" class=\"btn btn-red-outline btn-add-user btn-hover\" \r\n                id=\"btnAddFolder\">{{add ? 'Add Folder' : 'Update Folder Name'}}</button>\r\n              \r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"float-changes-updated hide\">\r\n        <div class=\"col-md-12 np\">\r\n          <span class=\"icon-done\">\r\n            <i class=\"material-icons\">done</i>\r\n          </span>\r\n          <span id=\"floatMessage\">{{ Message }} </span>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>"

/***/ }),

/***/ "./src/app/site/components/+dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__builder_services_builderConditions_service__ = __webpack_require__("./src/app/site/+builder/services/builderConditions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__ = __webpack_require__("./src/app/shared/validators/email.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__ = __webpack_require__("./src/app/site/+builder/services/builder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_feature_access_service__ = __webpack_require__("./src/app/shared/services/feature-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_company__ = __webpack_require__("./src/app/shared/models/company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_user__ = __webpack_require__("./src/app/shared/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__analytics_services_calculator_analytics_service__ = __webpack_require__("./src/app/site/components/+analytics/services/calculator-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_marketing_service__ = __webpack_require__("./src/app/shared/services/marketing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_membership_service__ = __webpack_require__("./src/app/shared/services/membership.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_script_service__ = __webpack_require__("./src/app/shared/services/script.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_subdomain_service__ = __webpack_require__("./src/app/shared/services/subdomain.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_company_service__ = __webpack_require__("./src/app/shared/services/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_services_dashboard_service__ = __webpack_require__("./src/app/shared/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_cookie_service__ = __webpack_require__("./src/app/shared/services/cookie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_models_currentPlan__ = __webpack_require__("./src/app/shared/models/currentPlan.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_countdown_promo_service__ = __webpack_require__("./src/app/shared/services/countdown-promo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_admin_service__ = __webpack_require__("./src/app/shared/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_timers__ = __webpack_require__("./node_modules/timers-browserify/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_timers__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























'';
var DashboardComponent = (function () {
    function DashboardComponent(_calculatorAnalytics, _membershipService, subDomainService, companyService, _dashboardService, _builderService, _featureAuthService, _cookieService, _router, fb, _script, _marketingService, titleService, countdownPromoService, _adminService, _builderConditions) {
        var _this = this;
        this._calculatorAnalytics = _calculatorAnalytics;
        this._membershipService = _membershipService;
        this.subDomainService = subDomainService;
        this.companyService = companyService;
        this._dashboardService = _dashboardService;
        this._builderService = _builderService;
        this._featureAuthService = _featureAuthService;
        this._cookieService = _cookieService;
        this._router = _router;
        this.fb = fb;
        this._script = _script;
        this._marketingService = _marketingService;
        this.titleService = titleService;
        this.countdownPromoService = countdownPromoService;
        this._adminService = _adminService;
        this._builderConditions = _builderConditions;
        this.dashOverlay = false;
        this.stats = {};
        this.templatesName = {};
        this.templatesImages = {};
        this.loader = 0;
        this.Message = '';
        this.subdomainExtension = '';
        this.myCompaniesList = [];
        this.calcCount = '';
        this.runningPlan = '';
        this.currentCompanyInit = '';
        this.currentCompanyUsers = [];
        this.companyUsersCount = 0;
        this.moreCompanyUsers = [];
        this.sub_domain = '';
        this.pageNo = 1;
        this.maxPageCount = 0;
        this.pageSize = 25;
        this.companyList = [];
        //variable used to clear validation msgs on modal hide
        this.reset = true;
        this.isAdmin = 'user';
        this.showReferralCandy = false;
        this.showPromoCode = false;
        this.showCountdownPromo = false;
        this.agencyCalcType = 'Calculator';
        this.agencySelect = true;
        this.childLimitExced = false;
        this.agencyCalcName = '';
        this.emailbox = [1, 2, 3];
        this.email_find = [];
        this.email_input = false;
        this.Invalid_email = true;
        this.duplicate_email = false;
        this.index = 0;
        this.api_alert = false;
        this.api_error = '';
        this.cardValid = false;
        this.errorMessage = '';
        this.isPaymentRequired = false;
        this.isPaymentSetup = true;
        this.invalidEmail = false;
        this.showPostSignUp = false;
        this.role = false;
        this.notValid = false;
        this.oldIndex = -1;
        this.flag = false;
        this.demo = false;
        this.error = false;
        this.errorcard = false;
        this.cardNum = null;
        this.cardType = '';
        this.subscription_status = '';
        this.isLtd = false;
        this.isFreelancerLtd = false;
        this.calEvents = [];
        this.featureLoader = true;
        this.isLimitCrossed = false;
        this.isAnalyticsAvailable = false;
        this.totalUniqueVisitors = 0;
        this.totalLeads = 0;
        this.totalCta_Engagement = 0;
        this.overallConversionRate = 0;
        this.subs = [];
        this.target_slide_index = 0;
        this.mobileDevice = false;
        this.foldersContent = {
            leaves: [],
            folders: [],
        };
        this.premadeCount = 0;
        this.add = true;
        this.selectedEvent = [];
        this.trendingExperience = [];
        this.experienceType = {
            graded: true,
            numerical: true,
            poll: true,
            recommendation: true
        };
        this.templatesName = _builderConditions.templatesName;
        this.templatesImages = _builderConditions.templatesImages;
        localStorage.removeItem('tics');
        jQuery('#modalcss').attr('href', "./assets/css/common.css");
        this.cookie = this._cookieService.readCookie('storage');
        this.storage = this.cookie != null ? JSON.parse(this.cookie) : '';
        this.currentCompany = this.cookie != null ? subDomainService.currentCompany : '';
        if (this.storage.postSignup) {
            jQuery('body,html').css('overflow', 'hidden');
        }
        this.titleService.setTitle("Outgrow Home");
        var url = window.location.hostname;
        if (this.checkSubDomain(url))
            this.sub_domain = url.split('.')[0];
        this._script.load('calendar', 'slimScroll', 'bootBox')
            .then(function (data) {
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            //this.getEvents(today, undefined);
            jQuery('.slimscroll').slimscroll({
                railVisible: true,
                alwaysVisible: true
            });
        }).catch(function (error) {
            //any error
        });
        this.isAdmin = this._cookieService.readCookie('role');
        var promoCodeValidity = this._cookieService.readCookie('promo_codes_validity');
        if (this._cookieService.readCookie('promo_codes_count') && promoCodeValidity) {
            //decrease promo codes count randomly
            var today = new Date();
            var dateFromCookie = Date.parse(promoCodeValidity);
            var differenceInDays = Math.floor((today.getTime() - dateFromCookie) / (1000 * 60 * 60 * 24));
            differenceInDays = differenceInDays > 0 ? 1 : 0;
            var randomNum = Math.floor(Math.random() * (4 - 1) + 1);
            this.noOfPromoCodes = +this._cookieService.readCookie('promo_codes_count');
            var promoCodesCount = this.noOfPromoCodes - (differenceInDays * randomNum);
            if (promoCodesCount > 0) {
                this.noOfPromoCodes = promoCodesCount;
            }
            this._cookieService.createCookie('promo_codes_count', this.noOfPromoCodes + '', 30);
        }
        else {
            this._cookieService.createCookie('promo_codes_count', '50', 30);
            this.noOfPromoCodes = 50;
            this._cookieService.createCookie('promo_codes_validity', new Date().toDateString(), 30);
        }
        // if (this.storage.show_overlay && !localStorage.getItem('dashOverlay')) {
        //   this.dashOverlay = this.storage.show_overlay;
        // }
        // this.runningPlan = this.currentCompany != '' ? this.currentCompany.billing.chargebee_plan_id : '';
        var companyAccess = JSON.parse(this._cookieService.readCookie('filepicker_token_json'));
        if (companyAccess) {
            companyAccess.forEach(function (e) {
                if (e.key === _this.subDomainService.subDomain.sub_domain) {
                    _this.subscription_status = e.value;
                }
            });
        }
        this.browserFingerPrint();
        this.allEvents = [];
    }
    DashboardComponent.prototype.getPaymentInfo = function () {
        return this.companyService.getCompanyPaymentInfo(this.subDomainService.subDomain.company_id);
    };
    DashboardComponent.prototype.openLive = function (url) {
        if (__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].STATIC_DOMAIN) {
            return __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].LIVE_PROTOCOL + 'livec.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].LIVE_EXTENSION + '/' + url;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].LIVE_PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].LIVE_EXTENSION + '/' + url;
        }
    };
    DashboardComponent.prototype.finishPostLogin = function (data) {
        var storage = JSON.parse(this.cookie);
        if (data['industries']) {
            this.createPremadeFolder({
                name: 'premade content', industries: data['industries'].length ? data['industries'] : ['Trending'],
                company_id: this.subDomainService.currentCompany.id
            });
        }
        storage.postSignup = false;
        console.log("COOKIES AFTER SIGNUP", this.cookie);
        this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
        this.storage = this._cookieService.readCookie('storage');
        jQuery('body,html').css('overflow', '');
    };
    DashboardComponent.prototype.removeOverlay = function () {
        this.storage.show_overlay = false;
        // this.dashOverlay = false;
        localStorage.setItem('dashOverlay', 'false');
        if (!this.currentCompany.is_payment_required) {
            if (this.storage['show-teammates-modal']) {
                jQuery('#add-teammates').modal('show');
                this.storage['show-teammates-modal'] = false;
            }
        }
    };
    // switchedToCompany() {
    //   let self = this;
    //   console.log("s1");
    //   let selectedCompany = window.location.href.split('//')[1].split('.')[0];
    //   if (selectedCompany !== 'app') {
    //     console.log("s2");
    //     let subDomainExist = this.companyService.isSubDomainExist(selectedCompany)
    //       .subscribe(
    //       (success: any) => {
    //         console.log("s3");
    //         this.storage.company = success;
    //         this.cookie = JSON.stringify(this.storage);
    //         this._cookieService.createCookie('storage',this.cookie, 3);
    //       },
    //       (error: any) => {
    //         subDomainExist.unsubscribe();
    //       }
    //       );
    //     this.subs.push(subDomainExist);
    // self.company_id = self._subDomainService.subDomain.company_id;
    //   }
    // }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.removeItem('changeTemplate');
        localStorage.removeItem('calc_type_change');
        localStorage.removeItem('temp_name');
        localStorage.getItem('temp_type');
        console.log("cookiess", this.cookie);
        if (this.cookie !== null) {
            if (this.storage.showUpgradeModal)
                jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
            this.username = this.storage.user.name;
            if (this.subDomainService.subDomain.company_id !== '') {
                this.company_id = this.currentCompany.id;
            }
            else {
                this.company_id = localStorage.getItem('company');
            }
        }
        this.createCompanyForm = this.fb.group({
            companyname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)])],
            domain: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9]*$')])]
        });
        this.inviteUserForm = this.fb.group({
            userName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, , __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)])],
            userEmail: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__["a" /* EmailValidator */].format])],
            userRole: ['MANAGER', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])]
        });
        this.calcNameform = this.fb.group({
            calcName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])]
        });
        this.subdomainExtension = '.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].APP_EXTENSION;
        this.subs.push(this.getCompanyProjects());
        this.getMyCompanies();
        jQuery.material.init();
        var co = window.location.href.split('//')[1].split('.')[0];
        if (co !== 'app') {
            var subDomainExist = this.companyService.isSubDomainExist(co)
                .subscribe(function (success) {
                _this.currentCompany = _this.subDomainService.currentCompany = new __WEBPACK_IMPORTED_MODULE_7__shared_models_company__["b" /* CurrentCompany */](success);
                _this.subDomainService.subDomain.sub_domain = _this.currentCompany.sub_domain;
                _this.subDomainService.subDomain.company_id = _this.currentCompany.id;
                _this.subDomainService.subDomain.name = _this.currentCompany.name;
                _this.calcCount = _this.currentCompany.current_limit.calculators > 1 ? _this.currentCompany.current_limit.calculators + ' calculators or quizzes' : 'one calculator or quiz';
                _this.currentCompanyInit = _this.currentCompany.name[0];
                _this.getSelectedCompanyUsers();
            }, function (error) {
                console.log('dashboard company Error', error);
            });
            this.subs.push(subDomainExist);
        }
        this.isAdmin = this._cookieService.readCookie('role');
        this.updateIntercomData();
        //this.initRefersionLocalStorage();
        // this._featureAuthService.getAllFeatureAccess().subscribe((result) => {
        //   this._featureAuthService.features = new FeatureAccess(result);
        // });
        this._featureAuthService.getFeatures().subscribe(function (f) {
            if (f.length) {
                _this.featureLoader = false;
                var experiences = f.filter(function (feature) {
                    if (feature._id == 'experiences')
                        return feature;
                });
                if (Array.isArray(experiences) && experiences.length > 0) {
                    experiences[0].sub_features.forEach(function (sf) {
                        if (sf._id == 'graded')
                            _this.experienceType.graded = sf.active;
                        else if (sf._id == 'numerical')
                            _this.experienceType.numerical = sf.active;
                        else if (sf._id == 'poll')
                            _this.experienceType.poll = sf.active;
                        else if (sf._id == 'recommendation')
                            _this.experienceType.recommendation = sf.active;
                    });
                }
            }
        });
        this._marketingService.initGTM()
            .then(function (data) { return _this._marketingService.identifyUser(); })
            .catch(function (err) { return console.log(err); });
        this.setupPaymentForm = this.fb.group({
            cardNumber1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')])],
            cardNumber2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')])],
            cardNumber3: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')])],
            cardNumber4: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')])],
            nameOnCard: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)])],
            cvv: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')])],
            cardMonth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')])],
            cardYear: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[0-9]*$')])]
        });
        this.errorcard = false;
        this.setupPaymentForm.controls['cardNumber1'].valueChanges.subscribe(function (value) {
            _this.cardNum = _this.setupPaymentForm.controls['cardNumber1'].value;
            _this.cardType = _this.getCardType(_this.cardNum);
            value || (_this.cardType = null);
            if (value.length === 4) {
                jQuery('input#cardNumber2').focus();
            }
        });
        this.setupPaymentForm.controls['cardNumber2'].valueChanges.subscribe(function (value) {
            _this.cardNum = _this.setupPaymentForm.controls['cardNumber1'].value + _this.setupPaymentForm.controls['cardNumber2'].value;
            _this.cardType = _this.getCardType(_this.cardNum);
            value || (_this.cardType = null);
            if (value.length === 4) {
                jQuery('input#cardNumber3').focus();
            }
        });
        this.setupPaymentForm.controls['cardNumber3'].valueChanges.subscribe(function (value) {
            _this.cardNum = _this.setupPaymentForm.controls['cardNumber1'].value + _this.setupPaymentForm.controls['cardNumber2'].value + _this.setupPaymentForm.controls['cardNumber3'].value;
            _this.cardType = _this.getCardType(_this.cardNum);
            value || (_this.cardType = null);
            if (value.length === 4) {
                jQuery('input#cardNumber4').focus();
            }
        });
        this.setupPaymentForm.controls['cardNumber4'].valueChanges.subscribe(function (value) {
            _this.cardNum = _this.setupPaymentForm.controls['cardNumber1'].value + _this.setupPaymentForm.controls['cardNumber2'].value + _this.setupPaymentForm.controls['cardNumber3'].value + _this.setupPaymentForm.controls['cardNumber4'].value;
            _this.cardType = _this.getCardType(_this.cardNum);
            value || (_this.cardType = null);
        });
        this.showReferralCandy = (this.currentCompany.referral.is_referralcandy_visible && this.currentCompany.current_referral_program == 'REFERRALCANDY' && this.currentCompany.referral.referralcandy_url != null);
        //this.getTrendingExperiences();
        this.getPremadeCalcs();
        this._dashboardService.getPremades().subscribe(function (premades) {
            premades.length && _this.filterPremadesAcc(premades);
        });
        this.folderForm = this.fb.group({
            '_id': [''],
            'name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)])],
            'old_name': [''],
            'company': ['']
        });
        jQuery('mouseClick');
        // this.folderForm.get('old_name').setValue(this.folderForm.get('name').value);
    };
    // getTrendingExperiences() {
    //   let data = {
    //     id: this.subDomainService.currentCompany.id,
    //     'chargebee_plan_id': this.subDomainService.currentCompany.billing.chargebee_plan_id,
    //     'special_jv': this.subDomainService.currentCompany.integration,
    //     'industry': 'Trending',
    //     limit: 7
    //   }
    //   this.companyService.getCompanyPremades(data).subscribe((result) => {
    //     this.trendingExperience = result.premades || [];
    //   }, error => {
    //     console.log("errorrrr", error.error);
    //   })
    // }
    DashboardComponent.prototype.updateIntercomData = function () {
        var _this = this;
        var self = this;
        var getCompanies = this.companyService.getCompanies()
            .subscribe(function (res) {
            // console.log('CURRENT COMPANY',this.currentCompany);
            var data = {
                'SUBSCRIPTION_PLAN': _this.currentCompany != '' ? _this.currentCompany.billing.chargebee_plan_id : 'NA',
                'CALCULATOR_LIMIT': _this.currentCompany != '' ? _this.currentCompany.current_limit.calculators : 'NA',
                'LEAD_LIMIT': _this.currentCompany != '' ? _this.currentCompany.current_limit.leads : 'NA',
                'TRAFFIC_LIMIT': _this.currentCompany != '' ? _this.currentCompany.current_limit.traffic : 'NA',
                'ISLEAD': false
            };
            var cookieString = _this._cookieService.readCookie('utm_ref');
            if (cookieString) {
                cookieString = JSON.parse(cookieString);
                if (_this.storage) {
                    var userCreatedAt = _this.storage.user.createdAt;
                    var userCreatedAtDate = (new Date(userCreatedAt)).toDateString();
                    var currentDate = (new Date(Date.now())).toDateString();
                    if (currentDate === userCreatedAtDate && window.Intercom) {
                        window.Intercom('update', { ORIGINAL_REF: cookieString['ref'] || 'UNKNOWN' });
                    }
                }
            }
            data['is_appsumo'] = false;
            if (res[0] && res[0].is_appsumo_created) {
                data['is_appsumo'] = true;
            }
            data['deal_referred'] = res[0] && res[0].deal_refered ? res[0].deal_refered : 'NONE';
            self.getPaymentInfo()
                .subscribe(function (response) {
                for (var key in response) {
                    data[key] = response[key];
                }
                console.log(data);
                window.Intercom('update', data);
                window.Intercom('update', cookieString);
            }, function (error) { return window.Intercom('update', data); });
        }, function (err) { });
        this.subs.push(getCompanies);
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery('.button-outer a').click(function () {
            jQuery('.select-template-block.hide').removeClass('hide');
            jQuery('.temp-cards-outer-main ').addClass('hide');
            jQuery(this).parent().parent().addClass('hide');
        });
        jQuery('.over-cont').slideUp();
        jQuery('.temaplate-cont-part .center-cont ').mouseenter(function () {
            jQuery(this).find('.over-cont').slideDown();
        });
        jQuery('.temaplate-cont-part .center-cont ').mouseleave(function () {
            jQuery(this).find('.over-cont').slideUp();
        });
        jQuery('#calquiz-modal').on('hidden.bs.modal', function () {
            _this.reset = false;
        });
        /*hide help icon on dashboard for mobile screen */
        Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setTimeout"])(function () { return jQuery('.builder-help-icon').addClass('hide'); }, 2000);
        //for date range filter in Analytics
        localStorage.removeItem('df');
        this.isAdmin = this._cookieService.readCookie('role');
        // notification
        //this.createFakeSet(10, 5);
        // if (this._cookieService.readCookie('message')) {
        //   this.createFakeSet(2, 1);
        // }
        if (jQuery('.cookies-parent').length) {
            jQuery('.dashboard-overlay').addClass('dash-with-header');
        }
        if (this.currentCompany.billing.chargebee_plan_id === 'ltd_d') {
            this.isLtd = true;
        }
        if (this.currentCompany.billing.chargebee_plan_id === 'freelancer-ltd_y') {
            this.isFreelancerLtd = true;
        }
        // if(this.currentCompany.is_payment_required){
        //   jQuery('#cc-modal-premium').modal({backdrop: 'static', keyboard: false});
        //   jQuery('#cc-modal-premium').modal('show');
        //   jQuery('#setup-cc-close').addClass('hide');
        //   jQuery('#btnSetupCardPm').html('Save');
        // }
        if (window.Intercom) {
            window.Intercom('update', { 'app_current_page': 'dashboard' });
            window.Intercom('update', { 'app_current_page_url': window.location.href });
        }
        this.fetchBlogPost();
        /** Calendar Code -- Start */
        //jQuery('#calendar').fullCalendar({
        // put your options and callbacks here
        //})
        /** End : Calendar Code */
    };
    DashboardComponent.prototype.upgradeNavigation = function () {
        jQuery('#add-new-user').modal('hide');
        jQuery('#success-addUser').addClass('hide');
        this._router.navigate(['/settings/membership']);
    };
    DashboardComponent.prototype.mouseEnter = function ($event) {
        jQuery($event.target).find('.total-count').css({ 'width': '60px', 'opacity': '1', 'margin-right': '3px' });
    };
    DashboardComponent.prototype.mouseLeave = function ($event) {
        jQuery($event.target).find('.total-count').css({ 'width': '0px', 'opacity': '0', 'margin-right': '0px' });
    };
    /*=== Methods to collect data for intercom ===*/
    DashboardComponent.prototype.getAllLeadsCount = function (user_status) {
        var _this = this;
        if (user_status === void 0) { user_status = ''; }
        var self = this;
        var getLeadsCount = self._calculatorAnalytics.getLeadsCount(this.company_id)
            .subscribe(function (success) {
            var cp = 0;
            _this.apps.forEach(function (app) {
                if (app.liveApp) {
                    cp++;
                }
            });
            var icd = _this._cookieService.readCookie('icd');
            icd = icd ? JSON.parse(icd) : {};
            var interComData = Object.assign({
                'leads': success.leads_count,
                'subscription_status': user_status,
                'calculators_created': _this.apps.length,
                'calculators_published': cp
            }, icd);
            localStorage.setItem('icd', JSON.stringify(interComData));
            window.Intercom('update', interComData);
        }, function (error) {
            console.log('Error');
        });
        this.subs.push(getLeadsCount);
    };
    DashboardComponent.prototype.getPlanSubscription = function () {
        var _this = this;
        var user_status = '';
        var getPlanSubscription = this._membershipService.getPlanSubscription()
            .subscribe(function (success) {
            _this.subscription = new __WEBPACK_IMPORTED_MODULE_19__shared_models_currentPlan__["c" /* Subscriptions */](success.currentplan.subscription);
            switch (_this.subscription.status) {
                case 'in_trial':
                    user_status = 'Trial';
                    var difference = void 0;
                    _this.countdownPromoService.subscription = _this.subscription;
                    var trialEnd = moment.unix(success.currentplan.subscription.trial_end);
                    _this.countdownPromoService.setCountdownTimer(trialEnd);
                    if (_this.countdownPromoService.trialEnd) {
                        difference = moment.duration(_this.countdownPromoService.trialEnd.diff(moment(new Date())));
                        if (difference.asSeconds() < 86400 && difference.asSeconds() >= 0) {
                            _this.showCountdownPromo = true; // when trial is about to expire
                        }
                    }
                    // if (difference.asDays() <= 4 && difference.asDays() >= 0) {
                    //this.showPromo = true;
                    //}
                    break;
                case 'active':
                    user_status = 'Paid';
                    if (_this.subscription.plan_id === 'starter') {
                        user_status = 'Free';
                    }
                    break;
            }
            _this.getAllLeadsCount(user_status);
            _this.loader = 1;
            // setTimeout(() => this.removeOverlay(), 11000);
        }, function (error) {
            /*getPlanSubscription.unsubscribe();*/
        });
        this.subs.push(getPlanSubscription);
    };
    /*=== End ===*/
    DashboardComponent.prototype.getCompanyProjects = function () {
        var _this = this;
        return this.companyService.getCompanyProjects(this.sub_domain)
            .subscribe(function (response) {
            _this.totalUniqueVisitors = 0;
            _this.totalLeads = 0;
            _this.totalCta_Engagement = 0;
            _this.overallConversionRate = 0;
            var i = 0;
            _this.foldersContent = response;
            var parsedCookie = JSON.parse(_this.cookie);
            if (!_this.foldersContent['premadeFolder'] && !parsedCookie['postSignup']) {
                _this.createPremadeFolder({ name: "premade content", industries: ['Trending'], company_id: _this.subDomainService.currentCompany.id });
            }
            if (_this.foldersContent['folders'] && _this.foldersContent['folders'].length) {
                _this.initalizeFolderSettings();
            }
            _this.apps = _this.getAppsFromFolders(response['folders'], response['leaves']).map(function (app) {
                i++;
                app.createdAt = moment(app.liveApp ? app.liveApp.createdAt : app.createdAt).format("MMM Do 'YY");
                app.updatedAt = moment(app.updatedAt).format("MMM Do 'YY");
                if (app.liveApp) {
                    _this.subs.push(_this.getStats(app));
                }
                else {
                    if (!app.name.length)
                        app.name = _this.subDomainService.subDomain.name + "'s calculator #" + i;
                }
                return app;
            });
            // this.apps.push(this.getDemoAppData());
            _this.maxPageCount = Math.ceil(_this.apps.length / _this.pageSize);
            _this.getPlanSubscription();
            // Temporary stuff
            _this.tempStuff();
            _this.updateIntercomforPage();
        }, function (error) {
        });
    };
    DashboardComponent.prototype.updateIntercomforPage = function () {
        var interval = Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setInterval"])(function () {
            if (window.Intercom) {
                window.Intercom('update', { 'app_current_page': 'dashboard' });
                window.Intercom('update', { 'app_current_page_url': window.location.href });
                clearInterval(interval);
            }
        }, 3000);
    };
    DashboardComponent.prototype.tempStuff = function () {
        var appIds = [];
        this.apps.map(function (ele) { return appIds.push(ele._id); });
        // Temporary to update all the questions
        // this._dashboardService.quesChangesTemp(appIds).subscribe();
        // this._dashboardService.tempCtaFixes(appIds).subscribe();
        // this._dashboardService.tempShareURLFixes(appIds).subscribe();
    };
    DashboardComponent.prototype.checkSubDomain = function (url) {
        // trim spaces
        url = url.replace(/^\s+/, '');
        url = url.replace(/\s+$/, '');
        // convert back slash to forward slash
        url = url.replace(/\\/g, '/');
        // remove 'http://', 'https://' or 'ftp://'
        url = url.replace(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i, '');
        // remove 'www.' if exist
        url = url.replace(/^www\./i, '');
        if (url.split('.').length === 3 && url.split('.')[0] === 'app')
            return false;
        // remove path after domain
        url = url.replace(/\/(.*)/, '');
        // remove tld's
        if (url.match(/\.[a-z]{2,3}\.[a-z]{2}$/i)) {
            url = url.replace(/\.[a-z]{2,3}\.[a-z]{2}$/i, '');
        }
        else if (url.match(/\.[a-z]{2,5}$/i)) {
            url = url.replace(/\.[a-z]{2,5}$/i, '');
        }
        return (url.match(/\./g)) ? true : false;
    };
    DashboardComponent.prototype.getStats = function (app) {
        var _this = this;
        return this.companyService.getProjectsStats(app._id)
            .subscribe(function (response) {
            if (response.length) {
                app.uniqueViews = Number(response[0][1]);
                app.leads = Number(response[0][3]);
                app.Cta_Engagement_Count = Number(response[0][4]);
                app.conversionRate = (app.uniqueViews && app.leads) ? ((app.leads / app.uniqueViews) * 100).toFixed(2) : 0;
                _this.totalUniqueVisitors += app.uniqueViews;
                _this.totalCta_Engagement += app.Cta_Engagement_Count;
                _this.totalLeads += app.leads;
                _this.overallConversionRate = (_this.totalUniqueVisitors) ? ((_this.totalLeads / _this.totalUniqueVisitors) * 100).toFixed(2) : 0;
            }
            else {
                app.uniqueViews = 0;
                app.leads = 0;
                app.conversionRate = 0;
                app.Cta_Engagement_Count = 0;
            }
        }, function (error) {
        });
    };
    // popup acitivity //
    DashboardComponent.prototype.initCalcQuiz = function () {
        this.isLimitCrossed = false;
        this._featureAuthService.setSelectedFeature('Need more calculators?');
        var plan_calc_limit = this._featureAuthService.features.calculators;
        if (this.apps.length >= plan_calc_limit && plan_calc_limit !== -1) {
            this.premiumPopup();
        }
        else {
            jQuery("input[name='calQuiz']").prop("checked", false);
            jQuery('.step1').removeClass('hide');
            jQuery('.step2').addClass('hide');
            jQuery('.calcName-input').val('');
            jQuery('#calquiz-modal').modal('show');
        }
    };
    //select calc type
    DashboardComponent.prototype.selectCalc = function (tempType) {
        this.isLimitCrossed = false;
        this._featureAuthService.setSelectedFeature('Need more calculators?');
        var plan_calc_limit = this._featureAuthService.features.calculators;
        if (plan_calc_limit !== -1 && this.apps.length >= plan_calc_limit) {
            this.premiumPopup();
        }
        else if (!this.experienceType.numerical && tempType == 'Numerical') {
            this._featureAuthService.setSelectedFeature('experiences', tempType.toLowerCase());
            this.premiumPopup();
        }
        else if (!this.experienceType.recommendation && tempType == 'Recommendation') {
            this._featureAuthService.setSelectedFeature('experiences', tempType.toLowerCase());
            this.premiumPopup();
        }
        else if (!this.experienceType.graded && tempType == 'Graded') {
            this._featureAuthService.setSelectedFeature('experiences', tempType.toLowerCase());
            this.premiumPopup();
        }
        else if (!this.experienceType.poll && tempType == 'Poll') {
            this._featureAuthService.setSelectedFeature('experiences', tempType.toLowerCase());
            this.premiumPopup();
        }
        else {
            this.loader = 0;
            localStorage.setItem('temp_type', tempType);
            this.calcType = tempType;
            jQuery('.step1').addClass('hide');
            localStorage.setItem('calc_name', '');
            this.addNewCalc();
        }
    };
    //go back to choose diff calc type
    DashboardComponent.prototype.goBack = function () {
        jQuery("input[name='calQuiz']").prop("checked", false);
        this.reset = false;
        localStorage.removeItem('temp_type');
        jQuery('.step2').addClass('hide');
        jQuery('.step1').removeClass('hide');
    };
    //check if form is valid
    DashboardComponent.prototype.onAddNewCalc = function () {
        if (!this.calcNameform.valid) {
            this.calcNameform.controls['calcName'].markAsTouched();
            this.reset = true;
        }
        else {
            if (this.calcNameform.controls['calcName'].value.trim()) {
                localStorage.setItem('calc_name', this.calcNameform.controls['calcName'].value);
                this.addNewCalc();
            }
        }
    };
    //perform action on valid form
    DashboardComponent.prototype.addNewCalc = function () {
        // localStorage.setItem('temp_type',jQuery("input[name='calQuiz']:checked").val());
        jQuery('#calquiz-modal').modal('hide');
        localStorage.setItem('project', 'New');
        localStorage.setItem('show_popup', 'show');
        localStorage.setItem('intro', 'show');
        this._router.navigate(['/templates']);
    };
    DashboardComponent.prototype.openOldCalc = function (app, tabName) {
        localStorage.setItem('project', app._id);
        localStorage.setItem('tab-selected', tabName);
        window.location.href = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].APP_EXTENSION + (app.url == 'builder-demo' ? '/' : '/builder/') + app.url;
    };
    DashboardComponent.prototype.selectSubTab = function (tabName) {
        localStorage.setItem('selected-sub-tab', tabName);
    };
    /* duplicate app*/
    DashboardComponent.prototype.duplicateApp = function (app, folder) {
        var _this = this;
        if (folder === void 0) { folder = ''; }
        var dataId = app._id;
        var calc_type = (app.templateType == 'Numerical') ? 'Calculator' : ((app.templateType == 'Recommendation') ? 'Quiz' : ((app.templateType == 'Poll') ? 'Poll' : 'Graded Quiz'));
        this.isLimitCrossed = false;
        var plan_calc_limit = this._featureAuthService.features.calculators;
        if (this.apps.length >= plan_calc_limit && plan_calc_limit !== -1) {
            this.isLimitCrossed = true;
        }
        else {
            this.isLimitCrossed = false;
        }
        if (this.isLimitCrossed) {
            this._featureAuthService.setSelectedFeature('Need more calculators?');
            //jQuery('.calculators').addClass('activegreen limited-label');
            this.premiumPopup();
        }
        else {
            jQuery('.dashboard-toast').fadeIn().animate({ bottom: 60 }, 800, function () { });
            jQuery('.dash-toast-msg').html("Duplicating " + calc_type + ", Please Wait...");
            var duplicateApp = this._dashboardService.duplicateApp({ id: dataId, agency: false, company: 'false', folder: folder })
                .subscribe(function (response) {
                if (jQuery.isEmptyObject(response)) {
                    _this._router.navigate(['/dashboard']);
                }
                else {
                    _this.subs.push(_this.getCompanyProjects());
                    jQuery('.dash-toast-msg').html(calc_type + " duplicated Successfully");
                    Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setTimeout"])(function () {
                        jQuery('.dashboard-toast').fadeOut().animate({ bottom: -60 }, 800, function () { });
                        _this.adjustUIForFolder('', folder['_id']);
                    }, 2000);
                }
            }, function (error) {
                if (error.error.code === 'E_USER_LIMIT_EXCEEDED') {
                    _this._featureAuthService.setSelectedFeature('Need more calculators?');
                    //jQuery('.calculators').addClass('activegreen limited-label');
                    jQuery('#premiumModal').modal('show');
                    jQuery('.modal-backdrop').insertAfter('#premiumModal');
                    Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setTimeout"])(function () {
                        jQuery('.dashboard-toast').fadeOut().animate({ bottom: -60 }, 800, function () { });
                    }, 200);
                }
                else {
                }
            });
            this.subs.push(duplicateApp);
        }
    };
    /* Delete app*/
    DashboardComponent.prototype.deleteApp = function (app, folder) {
        if (folder === void 0) { folder = ''; }
        console.log(this.foldersContent);
        var that = this;
        bootbox.dialog({
            size: 'small',
            message: "<div class=\"bootbox-body-left\">\n                        <div class=\"mat-icon\">\n                            <i class=\"material-icons\">error</i>\n                        </div>\n                    </div>\n                    <div class=\"bootbox-body-right\">\n                        <p class=\"one-line-para\">Are you sure you want to delete this calculator?</p>\n                </div>\n            ",
            buttons: {
                cancel: {
                    label: "Cancel",
                    className: "btn-cancel btn-cancel-hover",
                    callback: function () {
                        ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'DeleteCalc Confirmation pop up Cancel');
                        // _kmq.push(['record', 'Dashboard DeleteCalc Confirmation pop up Cancel']);
                    }
                },
                success: {
                    label: "OK",
                    className: "btn btn-ok btn-hover",
                    callback: function () {
                        var _this = this;
                        that._dashboardService.deleteApp({ id: app._id, subDomain: that.sub_domain, folder: folder })
                            .subscribe(function (response) {
                            if (jQuery.isEmptyObject(response)) {
                                that._router.navigate(['/dashboard']);
                            }
                            else {
                                app.status = 'DELETED';
                                that.recalculateStats();
                                window.toastNotification('Calculator Deleted Successfully.');
                                var indexOfApp = that.apps.map(function (e) { return e._id; }).indexOf(app._id);
                                console.log(_this.foldersContent);
                                console.log("1", that.apps, "2", indexOfApp);
                                that.apps.splice(indexOfApp, 1);
                                console.log(that.apps);
                                that.deleteAppFromFolder(app, folder);
                                var prev = that.maxPageCount;
                                that.maxPageCount = Math.ceil(that.apps.length / that.pageSize);
                                // if ((prev - that.maxPageCount) && that.pageNo) that.pageNo--;
                            }
                            ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'DeleteCalc Confirmation pop up Ok');
                            // _kmq.push(['record', 'Dashboard DeleteCalc Confirmation pop up Ok']);
                        }, function (error) {
                        });
                    }
                }
            }
        });
    };
    DashboardComponent.prototype.recalculateStats = function () {
        var _this = this;
        this.totalUniqueVisitors = 0;
        this.totalLeads = 0;
        this.totalCta_Engagement = 0;
        this.overallConversionRate = 0;
        this.apps.forEach(function (app) {
            if (app.liveApp && app.status != 'DELETED') {
                _this.totalUniqueVisitors += app.uniqueViews;
                _this.totalCta_Engagement += app.Cta_Engagement_Count;
                _this.totalLeads += app.leads;
                _this.overallConversionRate = (_this.totalUniqueVisitors) ? ((_this.totalLeads / _this.totalUniqueVisitors) * 100).toFixed(2) : 0;
            }
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
        this.$intervalId && clearInterval(this.$intervalId);
    };
    DashboardComponent.prototype.unsubscribe = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    DashboardComponent.prototype.onModeChange = function (app) {
        var mode = (app.mode === 'PRIVATE') ? 'PUBLIC' : 'PRIVATE';
        var changeAppMode = this._dashboardService.changeAppMode(app._id)
            .subscribe(function (response) {
            app.mode = mode;
            window.toastNotification('Mode changed to ' + mode + ' for ' + app.name);
        }, function (error) {
        });
        this.subs.push(changeAppMode);
    };
    DashboardComponent.prototype.getMyCompanies = function () {
        var _this = this;
        var self = this;
        var getCompanies = self.companyService.getCompanies()
            .subscribe(function (success) {
            self.myCompaniesList = [];
            var CURRENT_COMPANY = window.location.hostname.split('.')[0];
            var CURRENT_COMPANY_TYPE = 'PARENT';
            success.forEach(function (company) {
                if (company.user_company.status !== 'DELETED' || company.user_company.status !== 'LEFT' && company.user_company.status !== 'DELETED')
                    self.myCompaniesList.push(new __WEBPACK_IMPORTED_MODULE_7__shared_models_company__["a" /* Company */](company));
                if (company.sub_domain === CURRENT_COMPANY) {
                    CURRENT_COMPANY_TYPE = !company.parent_company ? 'PARENT' : 'CHILD';
                }
            });
            if (window.Intercom) {
                console.log({ CURRENT_COMPANY: CURRENT_COMPANY, CURRENT_COMPANY_TYPE: CURRENT_COMPANY_TYPE });
                window.Intercom('update', { CURRENT_COMPANY: CURRENT_COMPANY, CURRENT_COMPANY_TYPE: CURRENT_COMPANY_TYPE });
            }
            _this.updateIntercomforPage();
        }, function (error) {
            //console.log('getMyCompanies TS', error.error.err_message);
        });
        this.subs.push(getCompanies);
    };
    DashboardComponent.prototype.getSelectedCompanyUsers = function () {
        var _this = this;
        var self = this;
        var count = 0;
        var getCompanyUsers = this.companyService.getCompanyUsers(self.currentCompany.id)
            .subscribe(function (success) {
            self.currentCompanyUsers = [];
            success.forEach(function (user) {
                _this.companyUsersCount = success.length;
                if (user) {
                    if (user.username === _this.storage.user.username) {
                        localStorage.setItem('role', user.user_company.role);
                        _this._cookieService.createCookie('role', user.user_company.role, 3);
                        self.isAdmin = user.user_company.role;
                    }
                    if (user.user_company.active) {
                        if (count < 4) {
                            self.currentCompanyUsers.push(new __WEBPACK_IMPORTED_MODULE_8__shared_models_user__["a" /* User */](user));
                            count++;
                        }
                        else
                            self.moreCompanyUsers.push(new __WEBPACK_IMPORTED_MODULE_8__shared_models_user__["a" /* User */](user));
                    }
                }
            });
            // console.log('isAdminisAdminisAdminisAdminisAdminisAdminisAdmin',self.isAdmin);
        }, function (error) {
            //console.log('getSelectedCompanyUsers Dashboard', error.error.err_message);
        });
        this.subs.push(getCompanyUsers);
    };
    DashboardComponent.prototype.createCompany = function () {
        var self = this;
        self.Message = '';
        jQuery('#btnCreateCompany').text('Please Wait...').attr('disabled', true);
        var createCompany = self.companyService.createCompany(self.createCompanyForm.value)
            .subscribe(function (success) {
            jQuery('#add-new-company input').val('');
            jQuery('#btnCreateCompany').text('Add New Company').attr('disabled', false);
            jQuery('#add-new-company div.label-floating').addClass('is-empty');
            self.Message = 'Company Created Successfully!';
            jQuery('#add-new-company').modal('hide');
            /*------ Tracking events code here -------*/
            ga('markettingteam.send', 'event', 'Dashboard', 'Submit', 'Dashboard Company Added');
            // _kmq.push(['record', 'Dashboard Company Added']);
            /*----------------------------------------*/
            jQuery('.float-changes-updated').removeClass('hide');
            jQuery('.float-changes-updated').fadeIn()
                .animate({ bottom: 40 }, 1000, function () {
                //call back
            });
            self.closeLayover();
            self.getMyCompanies();
        }, function (error) {
            self.Message = error.error.err_message;
            jQuery('#success-addCompany').removeClass('hide');
            jQuery('#btnCreateCompany').text('Add New Company');
            jQuery('#btnCreateCompany').attr('disabled', false);
        });
        this.subs.push(createCompany);
    };
    DashboardComponent.prototype.userCheckLimit = function () {
        this._featureAuthService.setSelectedFeature('Team Getting Bigger?');
        if (this._featureAuthService.features.users === -1 || this.companyUsersCount < this._featureAuthService.features.users) {
            //jQuery('.email').addClass('is-empty');
            jQuery('#add-new-user').modal('show');
            //jQuery('#add-teammates').modal('show');
            jQuery('#premiumModal').attr('active', false);
            this.callGA('ADDUSER');
        }
        else {
            //jQuery('.users').addClass('activegreen limited-label');
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
            jQuery('#add-new-user').attr('active', false);
        }
    };
    DashboardComponent.prototype.inviteUser = function () {
        var self = this;
        self.Message = '';
        jQuery('#btnInvite').text('Please Wait...').attr('disabled', true);
        var addUser = self.companyService.addUser(self.inviteUserForm.value, self.currentCompany.id)
            .subscribe(function (success) {
            jQuery('#add-new-user input').val('');
            jQuery('.name').addClass('is-empty');
            jQuery('.email').addClass('is-empty');
            jQuery('#radioAdmin').prop('checked', false);
            jQuery('#radioManager').prop('checked', true);
            jQuery('#btnInvite').text('Add New User').attr('disabled', false);
            jQuery('#inviteUserForm #inputName').val('');
            jQuery('#inviteUserForm #inputEmail').val('');
            //jQuery('#add-new-user div.label-floating').addClass('is-empty');
            /*--------- Tracking events code here --------*/
            ga('markettingteam.send', 'event', 'Dashboard', 'Submit', 'Dashboard User Added');
            // _kmq.push(['record', 'Dashboard User Added']);
            /*-------------------------------------------*/
            self.Message = 'User Invited Successfully!';
            jQuery('#add-new-user').modal('hide');
            // jQuery('.float-changes-updated').removeClass('hide');
            // jQuery('.float-changes-updated').fadeIn()
            //   .animate({ bottom: 40 }, 1000, function () {
            //     //call back
            //   });
            window.toastNotification(self.Message);
            self.closeLayover();
            self.getSelectedCompanyUsers();
        }, function (error) {
            // console.log('sdfsdfsdf', error);
            var error_code = error.error.code;
            if (error_code === 'E_UNIQUE_USERNAME_VALIDATION' ||
                error_code === 'E_UNIQUE_EMAIL_VALIDATION' ||
                error_code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION' ||
                error_code === 'E_USER_COMPANY_ALREADY_EXISTS') {
                self.Message = ' This user is already a part of this company on Outgrow';
            }
            else if (error_code === 'E_USER_LIMIT_EXCEEDED') {
                self.Message = 'You have exceeded the user limit of you plan. Please upgrade to add more users.';
            }
            else {
                if (error.error.err_errors['emails.0.email'].message === 'Please use a valid company email address to sign up for Outgrow :)') {
                    self.Message = 'You can only invite users with a valid company email address';
                }
                else {
                    self.Message = (error.error.err_errors['emails.0.email']) ?
                        error.error.err_errors['emails.0.email'].message :
                        error.error.err_message;
                }
            }
            jQuery('#success-addUser').removeClass('hide');
            jQuery('#add-new-user input').val('');
            jQuery('.name').addClass('is-empty');
            jQuery('.email').addClass('is-empty');
            jQuery('#btnInvite').text('Add New User');
            jQuery('#btnInvite').attr('disabled', false);
            jQuery('#dashboardAdduserMessage').html(self.Message);
        });
        this.subs.push(addUser);
    };
    DashboardComponent.prototype.hideError = function () {
        jQuery('.alert').addClass('hide');
    };
    DashboardComponent.prototype.closeLayover = function () {
        Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setTimeout"])(function () {
            jQuery('.float-changes-updated').fadeIn()
                .animate({ bottom: -50 }, 800, function () { });
        }, 4000);
    };
    DashboardComponent.prototype.checkAnalytics = function (app, tabName) {
        this.isAnalyticsAvailable = this._featureAuthService.features.analytics.active;
        //console.log(this.isAnalyticsAvailable,'///////////////////////////////////////////////');
        if (this.isAnalyticsAvailable) {
            this.openOldCalc(app, tabName);
        }
        else {
            this._featureAuthService.setSelectedFeature('analytics');
            jQuery('.analytics').addClass('activegreen limited-label');
            jQuery('#premiumModal').modal('show');
            jQuery('.modal-backdrop').insertAfter('#premiumModal');
        }
    };
    DashboardComponent.prototype.getFileterdApps = function () {
        var startingPoint = this.pageNo * this.pageSize;
        return this.foldersContent['leaves'].slice(0, startingPoint);
    };
    DashboardComponent.prototype.next = function () {
        if (this.maxPageCount > this.pageNo) {
            this.pageNo++;
        }
    };
    DashboardComponent.prototype.back = function () {
        this.pageNo && this.pageNo--;
    };
    DashboardComponent.prototype.scrollTo = function () {
        window.scrollTo(0, 0);
    };
    DashboardComponent.prototype.premiumPopup = function () {
        jQuery('#premiumModal').modal('show');
        jQuery('.modal-backdrop').insertAfter('#premiumModal');
    };
    DashboardComponent.prototype.callGA = function (opt, data) {
        if (data && data.id === 'sample_calculator') {
            ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'Open Sample Calculator');
            return;
        }
        switch (opt) {
            case "ADDCOMPANY":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'Dashboard Add Company');
                // _kmq.push(['record', 'Dashboard Add Company']);
                break;
            case "ADDUSER":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'Dashboard Add User');
                // _kmq.push(['record', 'Dashboard Add User']);
                break;
            case "OPENCALC":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'OpenCalc');
                // _kmq.push(['record', 'Dashboard Open Calc Click']);
                break;
            case "ADDCALC":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'BuildCalc');
                // _kmq.push(['record', 'Dashboard Build Calc Click']);
                break;
            case "EDITCALC":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'EditCalc');
                // _kmq.push(['record', 'Dashboard Calc List Edit Calc']);
                break;
            case "ANALYTICS":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'ViewAnalytics');
                // _kmq.push(['record', 'Dashboard Calc List View Analytics']);
                break;
            case "SETTINGS":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'ViewSettings');
                // _kmq.push(['record', 'Dashboard Calc List View Settings']);
                break;
            case "DUPLICATE":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'DuplicateCalc');
                // _kmq.push(['record', 'Dashboard Calc List Duplicate Calculator']);
                break;
            case "DELETE":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'DeleteCalc');
                // _kmq.push(['record', 'Dashboard Calc List Delete Calculator']);
                break;
            case "SHARE":
                ga('markettingteam.send', 'event', 'Dashboard', 'Click', 'ShareCalc');
                // _kmq.push(['record', 'Dashboard Calc List Share Calculator']);
                break;
        }
    };
    DashboardComponent.prototype.createFakeSet = function (amount, increment) {
        // const $subscriber = this._dashboardService.getFakeUsers(amount).subscribe((data) => {
        //   this.$intervalId = setTimeout(() => {
        //     window.tickerNotification(data[0].name + ' just upgraded.');
        //     this._cookieService.eraseCookie('message');
        //     $subscriber.unsubscribe();
        //     clearTimeout(this.$intervalId);
        //   }, 15000);
        // this.$intervalId = setInterval(() => {
        //   (data.length > 0) || (this.resetFakeSet($subscriber, amount + increment, increment));
        //   (data.length > 0) && this.setFakeMessage(data);
        // }, 30000);
        // });
    };
    // setFakeMessage(data) {
    //   jQuery('.dashboard-notification').fadeOut();
    //   jQuery('.dashboard-notification').animate({ bottom: '-80px' }, 100);
    //   data = data.shift();
    //   this.fakeText = data['name'];
    //   jQuery('.dashboard-notification').fadeIn();
    //   jQuery('.dashboard-notification').animate({ bottom: '40px' }, 500);
    // }
    // resetFakeSet(subscriber, amount, increment) {
    //   this.$intervalId && clearInterval(this.$intervalId);
    //   subscriber.unsubscribe();
    //   this.createFakeSet(amount, increment);
    // }
    // removeNotification() {
    //   jQuery('.dashboard-notification').fadeOut();
    // }
    DashboardComponent.prototype.getDemoAppData = function () {
        // Don't change the _id, it will break OG-6421
        return {
            _id: 'sample_calculator',
            name: 'Sample-Calculator',
            url: 'builder-demo',
            updatedAt: 'Aug 22nd \'17',
            templateType: 'Numerical',
            template: 'template-five',
            mode: 'PUBLIC',
            uniqueViews: 9,
            leads: 7,
            pages: [
                {
                    bgImage: 'https://cdn.filestackcontent.com/I8wbfwwTfOAmKHCLhrXr'
                }
            ]
        };
    };
    DashboardComponent.prototype.showPremiumPopup = function () {
        if (this.showPromoCode) {
            this.showPremiumModal();
            // clipboard.copy('UPGRADE20%');
            new Clipboard('.cpy-cpn', {
                text: function (trigger) {
                    return 'UPGRADE20%';
                }
            });
            var timeout_1 = Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setTimeout"])(function () {
                window.toastNotification('UPGRADE20% Promo Code copied to clipboard');
                clearTimeout(timeout_1);
            }, 2000);
        }
        this.showPromoCode = !this.showPromoCode;
    };
    DashboardComponent.prototype.callPopups = function (id) {
        if (id.indexOf('jv') !== -1) {
            jQuery('button[id=essentials_y_jv_nd]').trigger('click');
        }
        else {
            var pid = id.split('_')[0] + '_y';
            jQuery('button[id=' + pid + '_nd]').trigger('click');
        }
    };
    DashboardComponent.prototype.showPremiumModal = function () {
        jQuery('#premiumModal').modal('show');
    };
    DashboardComponent.prototype.getFormatted = function (str) {
        return str.replace(/([0-9]+)([a-zA-Z]+)(\s)/, "$1<sup>$2</sup>$3");
    };
    DashboardComponent.prototype.assignCompany = function (app, folder) {
        var _this = this;
        if (folder === void 0) { folder = ''; }
        this.agencySelect = true;
        this.childLimitExced = false;
        this.agencyCalcName = app.name;
        var self = this;
        this.agencyCalcType = (app.templateType == 'Numerical') ? 'Calculator ' : (app.templateType == 'Recommendation') ? 'Quiz ' : (app.templateType == 'Poll') ? 'Poll ' : 'Graded Quiz';
        this._dashboardService.getChildCompanies(this.subDomainService.currentCompany.id)
            .subscribe(function (data) {
            if (data.length <= 0) {
                self.duplicateApp(app, folder);
                self.callGA('DUPLICATE');
            }
            else {
                _this.companyList = [];
                _this.companyList.push({
                    check: true, name: _this.subDomainService.currentCompany.name,
                    _id: _this.subDomainService.currentCompany.id, app: app
                });
                data.map(function (d, i) {
                    d['app'] = app;
                    d['check'] = false;
                    self.companyList[i + 1] = d;
                });
                jQuery('#assignCompany').modal('show');
            }
        }, function (err) { return console.log('Compaany List error: ', err); });
    };
    DashboardComponent.prototype.selectCompany = function () {
        this.childLimitExced = false;
        var company = this.companyList.find(function (d) { return d.check == true; });
        if (company) {
            var self = this;
            this.agencySelect = true;
            if (company._id == this.subDomainService.currentCompany.id) {
                jQuery('#assignCompany').modal('hide');
                this.duplicateApp(company.app);
                this.callGA('DUPLICATE');
            }
            else {
                if (company.current_limit.calculators != -1) {
                    this.checkCalcLimit(company);
                    return;
                }
                this.moveCalc(company);
            }
        }
        else {
            this.agencySelect = false;
            this.childLimitExced = false;
        }
    };
    DashboardComponent.prototype.makeFalse = function (id) {
        var i = 0;
        var self = this;
        this.companyList.map(function (d, i) {
            if (d._id != id && d.check)
                self.companyList[i].check = false;
        });
    };
    DashboardComponent.prototype.checkCalcLimit = function (company) {
        var _this = this;
        //console.log('Inside');
        this.subDomainService._companyService.getCompanyProjects(company.sub_domain)
            .subscribe(function (projectList) {
            //console.log('User Data: ', projectList.length);
            if (_this.getAppsFromFolders(projectList['folders'], projectList['leaves']).length < company.current_limit.calculators) {
                _this.childLimitExced = false;
                //console.log('Build Calc');
                _this.moveCalc(company);
                return;
            }
            _this.childLimitExced = true;
            _this.agencySelect = true;
            return;
        }, function (err) {
            console.log('Fetch error: ');
            return;
        });
    };
    DashboardComponent.prototype.moveCalc = function (company) {
        var self = this;
        jQuery('#assignCompany').modal('hide');
        jQuery('.dashboard-toast').fadeIn().animate({ bottom: 60 }, 800, function () { });
        jQuery('.dash-toast-msg').html("Duplicating the Calculator/Quiz...");
        this._dashboardService.duplicateApp({ id: company.app._id, agency: true, company: company._id })
            .subscribe(function (data) {
            jQuery('.dash-toast-msg').html(self.agencyCalcName + " " + self.agencyCalcType + " cloned successfully in account " + company.name);
            Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setTimeout"])(function () {
                jQuery('.dashboard-toast').fadeOut().animate({ bottom: -60 }, 800, function () { });
            }, 2000);
        }, function (err) {
            jQuery('.dash-toast-msg').html("Failed to clone " + self.agencyCalcName + " " + self.agencyCalcType + "in account " + company.name);
            Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setTimeout"])(function () {
                jQuery('.dashboard-toast').fadeOut().animate({ bottom: -60 }, 800, function () { });
            }, 2000);
        });
    };
    DashboardComponent.prototype.getCardType = function (number) {
        if (number.match(new RegExp('^4')) != null) {
            return 'visa';
        }
        else if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) {
            return 'mastercard';
        }
        else if (number.match(new RegExp('^3[47]')) != null) {
            return 'amex';
        }
        else if (number.match(new RegExp('^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)')) != null) {
            return 'discover';
        }
        else if (number.match(new RegExp('^36')) != null) {
            return 'diners';
        }
        else if (number.match(new RegExp('^35(2[89]|[3-8][0-9])')) != null) {
            return 'jcb';
        }
        else {
            return null;
        }
    };
    DashboardComponent.prototype.removeError = function () {
        jQuery('#success-addUser').addClass('hide');
    };
    DashboardComponent.prototype.browserFingerPrint = function () {
        var agent;
        var user_id = this.storage ? this.storage.user._id : null;
        var data;
        var product_sub;
        var fingerprint = (function (screen, navigator) {
            product_sub = navigator.productSub;
            agent = navigator.userAgent.replace(/ /g, '');
            agent += agent + 'screen=' + screen.availHeight + screen.availWidth;
        }(screen, navigator));
        if (user_id != null && agent) {
            data = {
                "user_id": user_id,
                "agent": agent,
                "product_sub": product_sub
            };
        }
        this.companyService.updateSession(data)
            .subscribe(function (response) {
            if (response) {
                console.log(response, '-------------------');
            }
        }, function (error) {
        });
    };
    DashboardComponent.prototype.getEvents = function (day, adjuster) {
        var self = this;
        var data = {
            id: self.subDomainService.currentCompany.id,
            'chargebee_plan_id': self.subDomainService.currentCompany.billing.chargebee_plan_id,
            'special_jv': self.subDomainService.currentCompany.integration,
            'launch_date': 1
        };
        self.companyService.getCompanyPremades(data).subscribe(function (events) {
            self.allEvents = events['premades'];
            self.initializeCalander(events['premades']);
            self.target_slide_index = 0;
            var trendSlide = Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setInterval"])(function () {
                if (!self.featureLoader) {
                    jQuery("#TrendingCarousel").carousel("pause").removeData();
                    jQuery("#TrendingCarousel").carousel(self.target_slide_index);
                    self.target_slide_index++;
                }
                if (self.target_slide_index == self.trendingExperience.length) {
                    self.target_slide_index = 0;
                }
            }, 3000);
        });
    };
    DashboardComponent.prototype.initializeCalander = function (events) {
        var _this = this;
        this.calEvents = [];
        var self = this;
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        events.forEach(function (event) {
            if (event.launch_date) {
                var launch_date = new Date(event.launch_date);
                var day = launch_date.getUTCDate();
                var month = launch_date.getUTCMonth();
                var year = launch_date.getUTCFullYear();
                var ev = {
                    Date: new Date(year, month, day),
                    id: event._id,
                    Title: event.title,
                    Link: event.liveApp.url ? event.liveApp.url : '',
                    Image: event.media ? event.media : 'https://dzvexx2x036l1.cloudfront.net/default_premade.jpg',
                    Description: event.description,
                    Active: event.active,
                    type: _this.getTemplateType(event.type),
                    EventName: event.event_name
                };
                self.calEvents.push(ev);
            }
        });
        var settings = {};
        var element = null;
        if (self.calEvents.length > 0) {
            element = document.getElementById('calendar');
            element.innerHTML = '';
            caleandar(element, self.calEvents, settings);
            jQuery(document).ready(function () {
                window.mobilecheck = function () {
                    var check = false;
                    (function (a) {
                        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                            check = true;
                    })(navigator.userAgent || navigator.vendor || window.opera);
                    return check;
                };
                self.mobileDevice = window.mobilecheck();
                self.calendarMethods();
                jQuery(document).on('click', '.cld-nav', function (event) {
                    self.calendarMethods();
                });
            });
        }
    };
    DashboardComponent.prototype.calendarMethods = function () {
        var self = this;
        if (!self.mobileDevice) {
            jQuery('.eventday').popover({
                placement: 'top',
                trigger: 'hover',
                container: 'body',
                html: true
            });
        }
        jQuery(document).on('click', '.eventday', function (event) {
            self.selectedEvent = [];
            var selectedDate = event.target.getAttribute('content').trim();
            jQuery('p.eventday').removeClass('selected');
            jQuery(event.target).addClass('selected');
            if (!self.mobileDevice) {
                var popover = jQuery(".popover");
                if (!popover.hasClass("noTransition")) {
                    popover.addClass("noTransition");
                }
            }
            self.selectedEvent = self.calEvents.filter(function (event) {
                if (event.Date == selectedDate) {
                    return event;
                }
            });
            if (self.mobileDevice) {
                var mobileTooltip = document.getElementById('mobileTooltip');
                if (mobileTooltip)
                    jQuery('p.eventday').removeChild(mobileTooltip);
                var dataContent = event.target.getAttribute('data-content').trim();
                jQuery(event.target).append('<div id="mobileTooltip">' + dataContent + '</div>');
            }
            self.getEventName(self.selectedEvent);
            Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setTimeout"])(function () {
                jQuery('.event-template-outer').slideDown();
            }, 500);
        });
    };
    DashboardComponent.prototype.getThisTemplate = function (pid) {
        var event = this.allEvents.find(function (event) {
            return event._id == pid;
        });
        if (event) {
            this.makeTrendingCalc(event);
        }
    };
    DashboardComponent.prototype.makeTrendingCalc = function (trending) {
        var _this = this;
        var templateType = this.getTemplateType(trending.type).toLowerCase();
        var plan_calc_limit = this._featureAuthService.features.calculators;
        if (this.apps.length >= plan_calc_limit && plan_calc_limit !== -1) {
            this._featureAuthService.setSelectedFeature('Need more calculators?');
            this.premiumPopup();
        }
        else if (!trending.active) {
            this._featureAuthService.setSelectedFeature('pre-madeTemplates', trending.template);
            this.premiumPopup();
        }
        else if (!this._featureAuthService.features.experiences[templateType]) {
            this._featureAuthService.setSelectedFeature('experiences', templateType);
            this.premiumPopup();
        }
        else {
            var premadeRequiredData = {
                template: trending.template,
                templateType: this.getTemplateType(trending.type),
                url: trending.liveApp.url.split('/').pop()
            };
            localStorage.setItem('temp_type', premadeRequiredData.templateType);
            localStorage.setItem('project', 'Duplicate');
            localStorage.setItem('DuplicateId', premadeRequiredData.url);
            localStorage.setItem('DuplicateURL', premadeRequiredData.url);
            localStorage.setItem('temp_name', premadeRequiredData.template);
            jQuery('#ideaGen').modal('toggle');
            Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setTimeout"])(function () { return window.location.href = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].PROTOCOL + _this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].APP_EXTENSION + '/builder/'; }, 200);
        }
    };
    DashboardComponent.prototype.getTemplateType = function (type) {
        var templateType = '';
        switch (type) {
            case 'Calculator':
                templateType = 'Numerical';
                break;
            case 'Graded Quiz':
                templateType = 'Graded';
                break;
            case 'Poll':
                templateType = 'Poll';
                break;
            default:
                templateType = 'Recommendation';
                break;
        }
        return templateType;
    };
    DashboardComponent.prototype.getUrl = function (url) {
        if (!/(http|https)/.test(url)) {
            return __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].LIVE_PROTOCOL + url;
        }
        return url;
    };
    DashboardComponent.prototype.fetchBlogPost = function () {
        var _this = this;
        this._dashboardService.getBlogs().subscribe(function (data) {
            var jsonData = data;
            var array = [];
            jsonData.posts.forEach(function (element) {
                if (element.attachments.length > 0) {
                    var obj = {};
                    obj['title'] = element.title;
                    obj['url'] = element.url;
                    obj['img'] = element.attachments[0].images['thumbnail'].url;
                    array.push(obj);
                }
            });
            _this.blogArray = array;
        });
    };
    DashboardComponent.prototype.getEventName = function (selectedEvent) {
        this.eventNames = '';
        this.eventNames = selectedEvent.map(function (e) { return e.EventName; }).join(' / ');
    };
    DashboardComponent.prototype.setSlideTarget = function (i) {
        this.target_slide_index = i;
    };
    DashboardComponent.prototype.createFolder = function (data, btnRef) {
        var _this = this;
        // jQuery('#btnAddFolder').text('Please Wait...').attr('disabled', true);
        this.disableButton(btnRef);
        data['name'] = data['name'].toLowerCase().trim();
        data['company_id'] = this.subDomainService.currentCompany.id;
        this._dashboardService.createCompanyFolder(data).subscribe(function (data) {
            // this.getCompanyProjects();
            _this.foldersContent['folders'].unshift(data);
            _this.initalizeFolderSettings();
            // jQuery('#btnAddFolder').text('Add New Folder').attr('disabled', false);
            _this.addButton(btnRef, false);
            jQuery('#success-addFolder').addClass('hide');
            jQuery('#add-collection').modal('hide');
            window.toastNotification("Folder Created Successfully..");
        }, function (error) {
            // jQuery('#btnAddFolder').text('Add New Folder');
            // jQuery('#btnAddFolder').attr('disabled', false);
            _this.addButton(btnRef, false);
            jQuery('#dashboardAddFolderMessage').text(error.error.err_message);
            jQuery('#success-addFolder').removeClass('hide');
        });
    };
    DashboardComponent.prototype.getAppsFromFolders = function (folderArr, leaves) {
        return leaves.concat(folderArr.reduce(function (acc, folder) {
            acc.push.apply(acc, folder['apps']);
            return acc;
        }, []));
    };
    DashboardComponent.prototype.moveFileToFolder = function (folder, options) {
        var _this = this;
        options.moveFrom && (options['old_name'] = options.moveFrom);
        options.moveFrom || (options['old_name'] = folder['name']);
        console.log(folder, options);
        this._dashboardService.moveFile(Object.assign({}, folder, options))
            .subscribe(function (f) {
            if (!folder['name']) {
                var fIndex = _this.foldersContent['folders'].findIndex(function (f) { return f['name'] === options.moveFrom; });
                if (fIndex != -1) {
                    _this.moveFile(options.app, _this.foldersContent['folders'][fIndex]['apps'], _this.foldersContent['leaves']);
                }
                _this.adjustUIForFolder(_this.foldersContent['folders'][fIndex]['_id'], '');
            }
            else if (!options.moveFrom) {
                _this.moveFile(options.app, _this.foldersContent['leaves'], folder['apps']);
                _this.adjustUIForFolder('', folder['_id']);
            }
            else {
                var fIndex = _this.foldersContent['folders'].findIndex(function (f) { return f['name'] === options.moveFrom; });
                if (fIndex != -1) {
                    _this.moveFile(options.app, _this.foldersContent['folders'][fIndex]['apps'], folder['apps']);
                }
                _this.adjustUIForFolder(_this.foldersContent['folders'][fIndex]['_id'], folder['_id']);
            }
            window.toastNotification("Moved Successfully..");
        }, function (error) {
            window.toastNotification("Error ....");
        });
    };
    DashboardComponent.prototype.filterPremadesAcc = function (premades) {
        this.allEvents = premades;
        this.trendingExperience = this.setTredendingCalc(premades);
        this.setEvents(premades);
    };
    DashboardComponent.prototype.setEvents = function (premades) {
        var _this = this;
        this.initializeCalander(premades);
        this.target_slide_index = 0;
        var trendSlide = Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setInterval"])(function () {
            if (_this.trendingExperience.length) {
                if (!_this.featureLoader) {
                    jQuery("#TrendingCarousel").carousel("pause").removeData();
                    jQuery("#TrendingCarousel").carousel(_this.target_slide_index);
                    _this.target_slide_index++;
                }
                if (_this.target_slide_index == _this.trendingExperience.length) {
                    _this.target_slide_index = 0;
                }
            }
        }, 3000);
    };
    DashboardComponent.prototype.setTredendingCalc = function (premades, limit) {
        if (limit === void 0) { limit = 7; }
        return premades.filter(function (p) { return p['industry'] === 'Trending'; }).slice(0, limit);
    };
    DashboardComponent.prototype.getPremadeCalcs = function () {
        var _this = this;
        var data = {
            id: this.subDomainService.currentCompany.id,
            'chargebee_plan_id': this.subDomainService.currentCompany.billing.chargebee_plan_id,
            'special_jv': this.subDomainService.currentCompany.integration,
        };
        var $ref = this._dashboardService.getCompanyPremades(data)
            .subscribe(function (data) {
            _this._dashboardService.setPremades(data.premades || []);
        }, function (error) {
            console.log(error.error.err_message);
        });
    };
    DashboardComponent.prototype.getFolderByName = function (name) {
        return this.foldersContent['folders'].find(function (folder) { return folder['name'] === name; });
    };
    DashboardComponent.prototype.excludeFolder = function (folderToExclude, folders) {
        return folders.filter(function (f) { return f['name'] !== folderToExclude; });
    };
    DashboardComponent.prototype.getPremadesByIndustries = function (industries) {
        var premades = this.allEvents.reduce(function (acc, premade) {
            if (industries.includes(premade['industry']))
                acc.push(premade);
            return acc;
        }, []);
        this.premadeCount = premades.length;
        return premades;
    };
    DashboardComponent.prototype.deleteAppFromFolder = function (app, folderName) {
        if (!folderName) {
            var index = this.foldersContent['leaves'].findIndex(function (l) { return l['_id'] === app['_id']; });
            index !== -1 && (this.foldersContent['leaves'].splice(index, 1));
        }
        else {
            var index = folderName['apps'].findIndex(function (ap) { return ap['_id'] === app['_id']; });
            return index !== -1 && (folderName['apps'].splice(index, 1));
        }
    };
    DashboardComponent.prototype.moveFile = function (file, source, destination) {
        var index = source.findIndex(function (app) { return app['_id'] === file; });
        if (index !== -1) {
            destination.push(source[index]);
            source.splice(index, 1);
        }
    };
    DashboardComponent.prototype.removeFolder = function (folderRef, index) {
        var self = this;
        bootbox.dialog({
            size: 'small',
            message: "<div class=\"bootbox-body-left\">\n    <div class=\"mat-icon\">\n    <i class=\"material-icons\">error</i>\n    </div>\n    </div>\n    <div class=\"bootbox-body-right\">\n    <p class=\"one-line-para\">Are you sure you want to delete this folder?</p>\n    </div>\n    ",
            buttons: {
                cancel: {
                    label: "Cancel",
                    className: "btn-cancel btn-cancel-hover",
                },
                success: {
                    label: "OK",
                    className: "btn btn-ok btn-hover",
                    callback: function () {
                        self._dashboardService.removeCompanyFolder(folderRef['_id'])
                            .subscribe(function (data) {
                            if (folderRef['industries'] && !folderRef['industries'].length) {
                                (_a = self.foldersContent['leaves']).push.apply(_a, folderRef['apps']);
                                self.foldersContent['folders'].splice(index, 1);
                                self.initalizeFolderSettings();
                                window.toastNotification("Folder Deleted");
                            }
                            var _a;
                        }, function (error) { });
                    }
                }
            }
        });
    };
    DashboardComponent.prototype.resetCollection = function () {
        // jQuery('#add-collection input').val('');
        // jQuery('.name').addClass('is-empty');
        jQuery('#dashboardAddFolderMessage').text('');
        jQuery('#success-addFolder').addClass('hide');
        if (this.add) {
            this.folderForm.reset();
            this.addButton(null, true);
        }
    };
    DashboardComponent.prototype.addClass = function (cls, element) {
        jQuery('#' + element).addClass(cls);
    };
    DashboardComponent.prototype.createPremadeFolder = function (data) {
        var _this = this;
        this._dashboardService.createCompanyFolder(data).subscribe(function (folder) {
            _this.foldersContent['premadeFolder'] = folder;
        }, function (error) {
        });
    };
    DashboardComponent.prototype.createCalc = function (premade) {
        this.makeTrendingCalc(premade);
    };
    DashboardComponent.prototype.adjustUIForFolder = function (source, destination) {
        Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setTimeout"])(function () {
            destination && jQuery("#" + destination).addClass('in');
            jQuery("#" + destination + "_caret").addClass('rotate-icon');
            jQuery("#" + destination + "_link").removeClass('collapsed');
            source && jQuery("#" + source).removeClass('in');
            jQuery("#" + source + "_caret").removeClass('rotate-icon');
            jQuery("#" + source + "_link").addClass('collapsed');
        }, 100);
    };
    DashboardComponent.prototype.initalizeFolderSettings = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setTimeout"])(function () {
            _this.foldersContent['folders'][0]['apps'].length && _this.adjustUIForFolder('', _this.foldersContent['folders'][0]['_id']);
            var slicedOne = _this.foldersContent['folders'].slice(1, _this.foldersContent['folders'].length);
            slicedOne.forEach(function (element) {
                _this.adjustUIForFolder(element['_id'], '');
            });
        }, 100);
        return '';
    };
    DashboardComponent.prototype.openIntercom = function () {
        window.Intercom('show');
    };
    DashboardComponent.prototype.updateCompanyFolder = function (data, btnRef) {
        var _this = this;
        // jQuery('#btnAddFolder').text('Please Wait...').attr('disabled', true);
        this.disableButton(btnRef);
        data['name'] = data['name'].toLowerCase().trim();
        // data['company'] = this.subDomainService.currentCompany.id;
        // data['old_name']=this.currentFolderRef['name']
        this._dashboardService.updateCompanyFolder(data).subscribe(function (response) {
            var index = _this.foldersContent['folders'].findIndex(function (folder) { return folder._id == response._id; });
            _this.foldersContent['folders'][index].name = response.name;
            // jQuery('#btnAddFolder').text('Update Folder Name').attr('disabled', false);
            _this.editButton(btnRef);
            jQuery('#success-addFolder').addClass('hide');
            jQuery('#add-collection').modal('hide');
            window.toastNotification("Folder Updated Successfully..");
        }, function (error) {
            // jQuery('#btnAddFolder').text('Update Folder Name');
            // jQuery('#btnAddFolder').attr('disabled', false);
            _this.editButton(btnRef);
            jQuery('#dashboardAddFolderMessage').text(error.error.err_message);
            jQuery('#success-addFolder').removeClass('hide');
        });
    };
    DashboardComponent.prototype.currentFolder = function (type, index) {
        var _this = this;
        if (index === void 0) { index = ''; }
        if (type == 'add') {
            jQuery('#btnAddFolder').text('Add Folder');
            this.add = true;
            this.modalType = "Add Folder";
        }
        else if (type == 'update') {
            jQuery('#btnAddFolder').text('Update Folder Name');
            this.add = false;
            this.modalType = "Update Folder Name";
            Object(__WEBPACK_IMPORTED_MODULE_22_timers__["setTimeout"])(function () {
                _this.folderForm.markAsTouched();
                _this.folderForm.get('name').setValue(_this.foldersContent['folders'][index].name);
            }, 100);
            this.currentFolderRef = this.foldersContent['folders'][index];
        }
    };
    DashboardComponent.prototype.folderOps = function (data, isNew, btnRef) {
        isNew && this.createFolder(data, btnRef);
        isNew || this.updateCompanyFolder(data, btnRef);
    };
    DashboardComponent.prototype.setFolderForm = function (folder) {
        this.folderForm.get('name').setValue(folder['name']);
        this.folderForm.get('old_name').setValue(this.folderForm.get('name').value);
        this.folderForm.get('company').setValue(folder['company']);
        this.add = false;
        this.editButton('');
    };
    DashboardComponent.prototype.disableButton = function (btn) {
        this.btnRef.nativeElement.textContent = 'Please Wait...';
        this.btnRef.nativeElement.disabled = true;
    };
    DashboardComponent.prototype.editButton = function (btn) {
        this.btnRef.nativeElement.textContent = 'Update Folder Name';
        this.btnRef.nativeElement.disabled = false;
    };
    DashboardComponent.prototype.addButton = function (btn, disabled) {
        this.btnRef.nativeElement.textContent = 'Add Folder';
        this.btnRef.nativeElement.disabled = disabled;
    };
    return DashboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])('folderBtn'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], DashboardComponent.prototype, "btnRef", void 0);
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'og-dashboard',
        template: __webpack_require__("./src/app/site/components/+dashboard/dashboard.component.html"),
        styles: [__webpack_require__("./src/assets/css/sahil-hover.css"), __webpack_require__("./src/assets/css/custom-material.css"), __webpack_require__("./src/assets/css/font-awesome.css"), __webpack_require__("./src/app/site/components/+dashboard/dashboard.component.css"), __webpack_require__("./src/assets/fonts/templateFonts/fonts_varient/Orkney.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_21__shared_services_admin_service__["a" /* AdminService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_13__shared_services_membership_service__["a" /* MembershipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__shared_services_membership_service__["a" /* MembershipService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_15__shared_services_subdomain_service__["a" /* SubDomainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__shared_services_subdomain_service__["a" /* SubDomainService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_16__shared_services_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__shared_services_company_service__["a" /* CompanyService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_17__shared_services_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__shared_services_dashboard_service__["a" /* DashboardService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__["a" /* BuilderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__["a" /* BuilderService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_feature_access_service__["a" /* FeatureAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_feature_access_service__["a" /* FeatureAuthService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_18__shared_services_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18__shared_services_cookie_service__["a" /* CookieService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_14__shared_services_script_service__["a" /* Script */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__shared_services_script_service__["a" /* Script */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_11__shared_services_marketing_service__["a" /* MarketingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_services_marketing_service__["a" /* MarketingService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["e" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["e" /* Title */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_20__shared_services_countdown_promo_service__["a" /* CountdownPromoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_20__shared_services_countdown_promo_service__["a" /* CountdownPromoService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_21__shared_services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_21__shared_services_admin_service__["a" /* AdminService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_0__builder_services_builderConditions_service__["a" /* BuilderConditions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__builder_services_builderConditions_service__["a" /* BuilderConditions */]) === "function" && _s || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/site/components/+dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/site/components/+dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_membership_service__ = __webpack_require__("./src/app/shared/services/membership.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analytics_services_calculator_analytics_service__ = __webpack_require__("./src/app/site/components/+analytics/services/calculator-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__ = __webpack_require__("./src/app/site/+builder/services/builder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_dashboard_service__ = __webpack_require__("./src/app/shared/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__templates_controls_controls_module__ = __webpack_require__("./src/app/site/templates/controls/controls.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toolbar_toolbar_module__ = __webpack_require__("./src/app/site/components/toolbar/toolbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__post_signup_post_signup_component__ = __webpack_require__("./src/app/site/components/+dashboard/post-signup/post-signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DASHBOARD_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]
    }
];
function subDomainServiceFactory(_subDomainService) {
    return function () { return _subDomainService.subDomainExists(); };
}
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_7__angular_router__["d" /* RouterModule */].forChild(DASHBOARD_ROUTES), __WEBPACK_IMPORTED_MODULE_8__templates_controls_controls_module__["a" /* ControlsModule */], __WEBPACK_IMPORTED_MODULE_9__toolbar_toolbar_module__["a" /* ToolbarModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_10__post_signup_post_signup_component__["a" /* PostSignUpComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__shared_services_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_5__builder_services_builder_service__["a" /* BuilderService */],
            __WEBPACK_IMPORTED_MODULE_4__analytics_services_calculator_analytics_service__["a" /* CalculatorAnalytics */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_membership_service__["a" /* MembershipService */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "./src/app/site/components/+dashboard/post-signup/post-signup.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* css start: post login flow */\r\n.post-login-outer {\r\n  /*padding: 30px;*/\r\n  float: left;\r\n  width: 100%;\r\n  height: 100%;\r\n  /*background: #f35f66;*/\r\n  display: table;\r\n\r\n}\r\n.post-login-inner {\r\n  /*float: left;*/\r\n  width: 100%;\r\n  display: table-cell; vertical-align: middle;\r\n}\r\n.post-login-outer .close.btn-close {\r\n  top: 20px;\r\n  right: 20px;\r\n  position: absolute;\r\n  opacity: 0.75;\r\n  -webkit-transition: .2s ease-in-out;\r\n  transition: .2s ease-in-out;\r\n}\r\n.post-login-outer .close.btn-close i.material-icons {\r\n  color: #fff;\r\n  font-size: 18px;\r\n  text-shadow: none;\r\n}\r\n.post-login-outer .close.btn-close:hover {\r\n  opacity: 1;\r\n}\r\n.post-login-outer .post-login-inner form.form-outer {\r\n  background: #fff;\r\n  width: 660px;\r\n  margin: 0 auto;\r\n  -webkit-box-shadow: 0 6px 18px rgba(0,0,0,.20);\r\n          box-shadow: 0 6px 18px rgba(0,0,0,.20);\r\n  border: 1px solid #edeff0;\r\n  border-radius: 5px;\r\n  margin-top: 45px;\r\n  display: table;\r\n  padding: 30px 55px;\r\n  overflow: hidden;\r\n  margin-bottom: 45px;\r\n}\r\n.post-login-outer .post-login-inner .form-inner {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  float: none;\r\n}\r\n.slide-outer {\r\n  float: left;\r\n  width: 100%;\r\n}\r\nimg.img-greeting {\r\n  /*margin: 30px 0px 10px;*/\r\n   position: relative;\r\n}\r\nh2.heading {\r\n  font-size: 26px;\r\n  color: #555555;\r\n  font-family: montserratregular;\r\n  margin-bottom: 15px;\r\n}\r\nh2.heading.first {\r\n  float: left;\r\n  width: 100%;\r\n  margin-top: 25px;\r\n}\r\nh3.heading {\r\n  font-size: 22px;\r\n  color: #555555;\r\n  font-family: montserratregular;\r\n  margin-top: 0px;\r\n  margin-bottom: 10px;\r\n}\r\n.sub-heading {\r\n  font-size: 14px;\r\n  color: #555555;\r\n  font-family: montserratlight;\r\n}\r\n.btn-red-rounded {\r\n  background: #f35f66;\r\n  color: #fff;\r\n  font-size: 11px;\r\n  text-transform: uppercase;\r\n  border-radius: 25px;\r\n  padding: 10px 35px;\r\n  margin-top: 25px;\r\n  -webkit-transition: all .3s ease 0s;\r\n  transition: all .3s ease 0s;\r\n}\r\n.btn-red-rounded i.material-icons {\r\n  font-size: 12px;\r\n  margin-left: 5px;\r\n  position: relative;\r\n  top: 2px;\r\n}\r\n.btn-next {\r\n  padding: 8px 25px !important;\r\n}\r\n.text-skip {\r\n  font-size: 11px;\r\n  color: #b0b7bf;\r\n  text-transform: uppercase;\r\n  position: absolute;\r\n  top: 35px;\r\n  margin-left: 10px;\r\n  /* position: absolute;\r\n  right: 29%;\r\n  top: 35px; */\r\n}\r\n.video-outer {\r\n  margin-top: 20px;\r\n   -webkit-box-shadow: -3px 2px 20px 3px rgba(0,0,0,0.2);\r\n           box-shadow: -3px 2px 20px 3px rgba(0,0,0,0.2);\r\n}\r\n.result-carousal {\r\n  width: 100%;\r\n  float: left;\r\n  position: relative;\r\n  margin-bottom: 5px;\r\n  bottom: -23px;\r\n}\r\n.pagination-circle {\r\n  border-radius: 50%;\r\n  width: 8px;\r\n  height: 8px;\r\n  display: inline-block;\r\n  background: #fff;\r\n  cursor: pointer;\r\n  border: 1px solid #8e989f;\r\n}\r\n.pagination-circle.active {\r\n  background: #4aa3d7;\r\n  border: 1px solid #4aa3d7;\r\n}\r\n/* start setup payment */\r\n.setup-payment {\r\n  background: #efeded;\r\n  float: none;\r\n  width: 70%;\r\n  border-radius: 5px;\r\n  padding: 25px 30px;\r\n  margin: 20px auto 0;\r\n  display: inline-block;\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA+CAYAAACftM1SAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2OEYwMUU3RTFEQkFFNzExQjUzNEVCQTc5MUQ4QjJBNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5QzMzMDc5MkQ2NEYxMUU3OUJEQ0Q0QkYxQ0VGMkU5OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5QzMzMDc5MUQ2NEYxMUU3OUJEQ0Q0QkYxQ0VGMkU5OCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVBMjkzN0ZBNjhDRkU3MTE5MTc5RDFDQTNFQjY1ODk4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY4RjAxRTdFMURCQUU3MTFCNTM0RUJBNzkxRDhCMkE0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IQAXrgAABIhJREFUeNrsml1IFUEUx+9Vs6zEPkxQBK8UpfgQCkGkkPSlGBmVIJWBEFkvamS9REm9FJFRJBRF9BASPpWIRd9aUpRQT2UQEUXfBRlYWabd/hNnYZt2d3bnNvfu3vXAD9E7Z3bvf2fOnvljMBwOB8YikJowpkFgOrie5HMRMsFVUOBnIULgGpjJfvHr1sgHvZoIfhWiCNwC2fo/+k2IEnADpPMf+EmIMnAZpBl96BchqkAnmGg2wA9C1IJ2kGw1KN6FqAenQaJoYDwL0QyOgqCdwfHYULEvfhA0OUmKNyHYFjgG6pwmxpMQrBieAdUSuY/ipUakgHOSIvSBhfGwIlKpRyiVyO0BlWDQ6yvij5cgKcIFUMFE8Prrk3kJN8E8iVzWYK0GQ17vI0J0jC6QyD0JasCw1xuqf7wEB3EIbAGjXu8sDb0EB53mdhD2eh/BvIQus2O0RbAv3ghaLcbMCTA73wOUga9h5zECagVzzwXvvCBCFfghIcIPyrWaez74FPaACLX0VJ0GWz3LBHMvAoNagptFaAC/JET4DEoEc68AQ7qcU24VoTksFx9BkWDuam6rHQZBtwkQBC2SIrwEeYL5N3Jbba/2mZtESAQnJEV4CkKC+bfqthr7uUP/uVtESAbtkiI8BJkOttoo2MKPcYMIKaBLUoR7YLpgqx3Qjf8J1huNjbUIqaBbUoRuyjebOwEc143/DlaajY+lCOxJ9kmK0EUryWzuJNDG9RVLre4nViJk0t6WibNUU8zmHg86HPYVxbEQIURVXiZO0NvFbO6J4IrDvoJ1mF+iLUI+ve9looWKn9ncaaBXN/41Xc/qfpZrHWY0RSiiJyQTuwVzp4P7uvHPQK4gZ42+w4yWCCW0V50Ga3zqBXNngX5dzmOQLcjZwB/moiFCuUIvIURPX4sHIEOQs5maKr3YDV72EvK4enMbTBHkbONOtEzsTapfnyq9hELwXpdzFUwS5OzirsO6zHWq+wiVXsICMKDL6QQTBDn7DVbcKtUNlUovYTF753PN1TjBWaPVYMWVq+wsVXsJvKskaq7YZ6e46zBrrlRli63aS1gLhh00V0m0WvQxQGatsrOGai+hjiu6e2zcz3mDbVeo8tAVqZcwTTB/E+cqNQnGs7PGJe46b2y02gG3egl80R2hlSG6nx7uOs/BLDvfx41eAl90h6lGWN3PVHCXu84TkGP3O7nNS+CLLnOVKgX3M4Naa308slF7IhJCpZcwjqv0rF9Y4vDAFaZTaLrTB+zUS3ilyEvgXaUB6iCt7ifH4KHcsXHeiEgIlV7CJDoraPFe9KoDs8ELgwI8Wbb4x9pLmEKnRr2rJOowC8Bb7loXBQU4YiFUegkZXJGz4yoZrcxzggIcsRAqvYQscpK06Ke/iU6d/MpsExTgiIVQ6SXkcq6SnSr/1/8yUJz8XyKYCaHSS8inOqBFL7nPVjkV4Bt3rSOCt1DEQsh6CR9seAn8/rbjKq022J77VJhJ0fISirn93UG9g1VOjcH23KnKWoyGl7CEc5XayC8QHb15p7lRpdH8W4ABAHJqemnUHauyAAAAAElFTkSuQmCC);\r\n  background-repeat: no-repeat;\r\n  background-position: right bottom;\r\n}\r\n.setup-payment .form-group {\r\n  padding-bottom: 0;\r\n  margin: 0px 0 22px;\r\n  clear: both;\r\n  float: left;\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n.setup-payment label.cc-label {\r\n  display: block;\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  font-family: Roboto-Regular;\r\n  color: #555555;\r\n  opacity: 0.6;\r\n  margin-bottom: 0px;\r\n  font-weight: normal;\r\n}\r\n.setup-payment span.cc-input {\r\n  display: block;\r\n  color: #444;\r\n  font-family: Roboto-Regular;\r\n  font-size: 14px;\r\n}\r\n.setup-payment .cc-number {\r\n  border: none;\r\n  width: 40px;\r\n  background: none;\r\n  margin-right: 3px;\r\n}\r\n.setup-payment .cc-name {\r\n  border: none;\r\n  width: auto;\r\n\r\n  background: none;\r\n  padding: 0;\r\n  display: block;\r\n  color: #444;\r\n  font-family: Roboto-Regular;\r\n  font-size: 14px; font-weight: 400;\r\n}\r\n.setup-payment .cc-exp {\r\n  border: none;\r\n  color: #444;\r\n  font-family: Roboto-Regular;\r\n  font-size: 14px;\r\n  background: transparent;\r\n  margin-right: 10px;\r\n  width: 30px;\r\n  text-align: left;\r\n}\r\n.setup-payment span.separator {\r\n  font-size: 14px;\r\n  font-family: montserratlight;\r\n}\r\n.setup-payment .cc-exp-last {\r\n  border: none;\r\n  color: #444;\r\n  font-family: Roboto-Regular;\r\n  font-size: 14px;\r\n  background: transparent;\r\n  margin-left: 10px;\r\n  margin-right: 0px;\r\n  width: 40px;\r\n  text-align: left;\r\n}\r\n.setup-payment .cvv-number {\r\n  border: none;\r\n  color: #444;\r\n  font-family: Roboto-Regular;\r\n  font-size: 14px;\r\n  background: transparent;\r\n  margin-right: 10px;\r\n  width: 60px;\r\n  text-align: left;\r\n}\r\n.setup-payment input {\r\n  outline: none;\r\n}\r\n.setup-payment .form-group:last-child {\r\n  margin-bottom: 0px !important;\r\n}\r\n.slide-inviteTeam-inner {\r\n  margin-top: 18px !important;\r\n  text-align: left;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  float: left;\r\n  margin-bottom: 10px;\r\n}\r\n.slide-inviteTeam-inner .form-group label.label-head {\r\n  width: 60%;\r\n  font-family: montserratregular;\r\n  float: left;\r\n  word-wrap: break-word;\r\n  overflow-x: hidden;\r\n  white-space: normal;\r\n  line-height: 18px;\r\n  margin-bottom: 10px;\r\n  font-size: 13px;\r\n  color: #4aa3d7;\r\n  font-weight: normal;\r\n  border-bottom: 1px solid #4aa3d7;\r\n  margin-right: 35px;\r\n  text-transform: uppercase;\r\n  padding: 0px 5px 3px;\r\n}\r\n.slide-inviteTeam .form-group .label-head + label{\r\n  white-space: normal;\r\n  width: calc(100% - 70%);\r\n  word-wrap: break-word;\r\n  overflow-x: hidden;\r\n  float: left;\r\n  margin-right: 0px;\r\n}\r\n.post-login-inner .form-inner .slide-inviteTeam-inner .form-group {\r\n  margin: 0;\r\n  padding: 0; position: relative;\r\n}\r\n.post-login-inner .form-inner .slide-inviteTeam-inner .form-group input.form-control {  \r\n  border: none !important;\r\n  background: none !important;\r\n  border-radius: 0px !important;\r\n  color: #526479 !important;\r\n  font-size: 13px !important;\r\n  width: 100%;\r\n  float: left;\r\n  /*margin-right: 35px;*/\r\n  padding: 0;\r\n  height: 30px !important;\r\n  border-bottom: 1px solid #b7daef!important;\r\n  font-family: montserratregular;\r\n  padding: 0px 5px;\r\n  margin-bottom: 15px; position: relative; -webkit-box-shadow: none; box-shadow: none;\r\n  border-bottom: 1px solid #b7daef !important;\r\n}\r\n.post-login-inner .form-inner .slide-inviteTeam-inner .form-group input::-webkit-input-placeholder,\r\n.post-login-inner .form-inner .slide-inviteTeam-inner .form-group input::-webkit-input-placeholder,\r\n.post-login-inner .form-inner .slide-inviteTeam-inner .form-group input::-webkit-input-placeholder {\r\n  color: #b0b5bb !important;\r\n  /* font-style: italic; */\r\n  font-size: 13px !important;\r\n}\r\n.post-login-inner .form-inner .slide-inviteTeam-inner .form-group select {\r\n  width: 100%;\r\n  border: none;\r\n  /*color: #526479;*/\r\n  font-size: 13px;\r\n  height: 30px !important;\r\n  border-bottom: 1px solid #b7daef!important;\r\n  padding: 0px 5px; outline: none; background: none;\r\n  -webkit-appearance: none; margin-bottom: 15px;\r\n  border-radius: 0px; cursor: pointer;\r\n}\r\n.post-login-inner .form-inner .slide-inviteTeam-inner .form-group .select-wrapper:after {\r\n  font-family: \"Material Icons\";\r\n  content: \"keyboard_arrow_down\";\r\n  color: #4aa3d7;\r\n  font-size: 14px;\r\n  position: absolute;\r\n  bottom: 22px;\r\n  right: 5px;\r\n  pointer-events: none;\r\n}\r\n.post-login-inner a.inviteUsers {\r\n    font-size: 11px;\r\n    color: #f35f66;\r\n    text-transform: uppercase;\r\n    font-family: montserratregular;\r\n    float: left;\r\n    width: auto;\r\n    text-align: left;\r\n    margin-left: 65px;\r\n    position: relative;\r\n    bottom: 3px;\r\n}\r\n.post-login-inner a.disable-tag {\r\n  color: gray!important;\r\n  cursor: not-allowed;\r\n  text-decoration: underline!important;\r\n}\r\n.post-login-inner a.inviteUsers i.material-icons {\r\n  font-size: 13px;\r\n  vertical-align: sub;\r\n}\r\n.post-login-inner a.inviteUsers:hover {\r\n  text-decoration: none;\r\n  color: #fb5f66;\r\n}\r\n.slide-inviteTeam-inner .form-group span.icon-close {\r\n  position: absolute;\r\n  right: -20px;\r\n  z-index: 1;\r\n  bottom: 19px;\r\n}\r\n.slide-inviteTeam-inner .form-group span.icon-close i.material-icons {\r\n  font-size: 13px;\r\n  color: #c8c8c8;\r\n}\r\n.slide-exp-inner {\r\n  text-align: left;\r\n  margin-top: 30px;\r\n}\r\n.slide-exp-inner-block {\r\n  border-right: 1px solid #e8eaec;\r\n  /* border-bottom: 1px solid #e8eaec; */\r\n  margin-right: 40px;\r\n  padding-bottom: 15px !important;\r\n  margin-bottom: 40px;\r\n  width: 46%;\r\n}\r\nspan.border-bottom {\r\n  border-bottom: 1px solid #e8eaec;\r\n  float: left;\r\n  width: 90%;\r\n  position: absolute;\r\n  bottom: -15px;\r\n}\r\n.slide-exp-inner-block:nth-child(2) span.border-bottom {\r\n  left: -15px;\r\n}\r\n.slide-exp-inner-block:after{\r\n  border-bottom: 1px solid #e8eaec;\r\n}\r\n.slide-exp-inner-block:nth-child(2) {\r\n  border-right: none;\r\n  margin-right: 0px;\r\n}\r\n.slide-exp-inner-block:nth-child(3) {\r\n  border-bottom: none;\r\n  margin-bottom: 0px;\r\n}\r\n.slide-exp-inner-block:nth-child(4){\r\n  border-right: none;\r\n  border-bottom: none;\r\n  margin-right: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n.slide-exp-inner .slide-exp-inner-block i.material-icons {\r\n  color: #fb5f66;\r\n  font-size: 28px;\r\n  margin-left: -2px;\r\n}\r\n.slide-exp-inner-block h4 {\r\n  color: #444;\r\n  font-size: 13px;\r\n  text-transform: uppercase;\r\n  font-family: montserratregular;\r\n  margin-bottom: 15px;\r\n}\r\n.slide-exp-inner-block ul {\r\n  margin: 0px;\r\n  padding: 0;\r\n  font-size: 11px;\r\n  color: #888;\r\n}\r\n.slide-exp-inner-block ul li {\r\n  font-size: 11px;\r\n  color: #888;\r\n  font-family: montserratlight;\r\n  line-height: 15px;\r\n  padding-top: 5px;\r\n}\r\n.hide {display: none!important;}\r\n/*your business slide css*/\r\n.slide-inviteTeam-inner.your-business .form-group{ margin-bottom: 10px !important; float: left; width: 100%;}\r\n.slide-inviteTeam-inner.your-business .form-group label.label-head {\r\n  width: 30%;\r\n  font-family: montserratlight;\r\n  float: left;\r\n  word-wrap: break-word;\r\n  overflow-x: hidden;\r\n  white-space: normal;\r\n  line-height: 18px;\r\n  margin-bottom: 0px;\r\n  font-size: 11px;\r\n  color: #4aa3d7;\r\n  font-weight: normal;\r\n  margin-right: 35px;\r\n  text-transform: uppercase;\r\n  padding: 0px 5px 3px;\r\n  border:none;\r\n  margin-top: 6px;\r\n\r\n}\r\n.slide-inviteTeam-inner.your-business .form-group .label-head + span{\r\n  white-space: normal;\r\n  width: calc(100% - 37%);\r\n  word-wrap: break-word;\r\n  overflow-x: hidden;\r\n  float: left;\r\n  margin-right: 0px;\r\n  margin-top: 8px;\r\n}\r\n.post-login-inner .form-inner .slide-inviteTeam-inner.your-business .form-group select {\r\n  width: calc(100% - 40%);\r\n  border: none;\r\n  color: #526479;\r\n  font-size: 13px;\r\n  height: 36px !important;\r\n  border-bottom: 1px solid #b7daef!important;\r\n  padding: 0px 5px; outline: none;\r\n}\r\n.post-login-inner .form-inner .slide-inviteTeam-inner.your-business .form-group .select-wrapper:after {\r\n  font-family: \"Material Icons\";\r\n  content: \"keyboard_arrow_down\";\r\n  color: #4aa3d7;\r\n  font-size: 14px;\r\n  position: absolute;\r\n  bottom: 7px;\r\n  right: 15px;\r\n  pointer-events: none;\r\n}\r\n.slide-inviteTeam-inner.your-business label.selected-items-outer {\r\n  margin-right: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.slide-inviteTeam-inner.your-business label.selected-items {\r\n  background-color: #fff;\r\n  border: none;\r\n  color: #808b99;\r\n  border-radius: 20px;\r\n  padding: 3px 12px 3px 10px;\r\n  font-size: 11px;\r\n  vertical-align: middle;\r\n  line-height: normal;\r\n  border: 1px solid #e5e5e5;\r\n  cursor: pointer;\r\n  font-family: montserratlight;\r\n  font-weight: normal;\r\n   -webkit-transition: 0.2s ease-in-out;\r\n        transition: 0.2s ease-in-out;\r\n}\r\n.slide-inviteTeam-inner.your-business label.selected-items i.material-icons {\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n  margin-right: 2px;\r\n}\r\n.slide-inviteTeam-inner.your-business input[type=\"checkbox\"] {\r\n  left: -9999px;\r\n  position: absolute;\r\n}\r\n.slide-inviteTeam-inner.your-business input[type=\"checkbox\"]:checked+label {\r\n    background-color: rgba(74,163,215, 0.25);\r\n    border: 1px solid #4aa3d7;\r\n    color: #4aa3d7;\r\n\r\n}\r\n.slide-inviteTeam-inner.your-business label.selected-items:hover {\r\n    background-color: rgba(74,163,215, 0.35);\r\n    border: 1px solid rgba(74,163,215, 0.35);\r\n    color: #4aa3d7;}\r\n.slide-inviteTeam-inner.your-business label.top-padding{ padding-top:14px;}\r\n/*your business slide css end*/\r\n.post-login-inner .slide-inviteTeam-inner.last-one .form-group{ float: none; width:70%; margin: 0 auto !important;}\r\n.post-login-inner .slide-inviteTeam-inner.last-one .form-group .full-width label{ width: 100% !important}\r\n.slide-inviteTeam-inner.last-one {  width: 100%;}\r\n.slide-inviteTeam-inner.last-one label.selected-items-outer {\r\n  margin-right: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.slide-inviteTeam-inner.last-one label.selected-items {\r\n  background-color: #fff;\r\n  border: none;\r\n  color: #526479;\r\n  border-radius: 20px;\r\n  padding: 8px 8px 8px 16px;\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n  line-height: normal;\r\n  border: 1px solid #e5e5e5;\r\n  cursor: pointer;\r\n  font-family: montserratlight;\r\n  font-weight: normal;\r\n   -webkit-transition: 0.2s ease-in-out;\r\n        transition: 0.2s ease-in-out;\r\n}\r\n.slide-inviteTeam-inner.last-one label.selected-items i.material-icons {\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n  margin-right: 2px;\r\n}\r\n.slide-inviteTeam-inner.last-one input[type=\"checkbox\"] {\r\n  left: -9999px;\r\n  position: absolute;\r\n}\r\n.slide-inviteTeam-inner.last-one input[type=\"checkbox\"]:checked+label {\r\n    background-color: rgba(74,163,215, 0.25);\r\n    border: 1px solid #4aa3d7;\r\n    color: #4aa3d7;\r\n}\r\n.slide-inviteTeam-inner.last-one label.selected-items:hover{\r\n    background-color: rgba(74,163,215, 0.35);\r\n    border: 1px solid rgba(74,163,215, 0.35);\r\n    color: #4aa3d7;\r\n\r\n}\r\n.slide-inviteTeam-inner.last-one label.selected-items img{ margin-right: 5px;}\r\n.rs-show{ display: none;}\r\n.left-sec{ float: left; width:60%; position: relative; margin-right: 35px;}\r\n.slide-inviteTeam-inner form{ width:75%; margin: 0 auto;}\r\n.circle-ripple {\r\n  background-color: #cff0fc;\r\n  width: 1em;\r\n  height: 1em;\r\n  border-radius: 50%;\r\n  -webkit-animation: ripple 0.7s linear infinite;\r\n          animation: ripple 0.7s linear infinite;\r\n}\r\n@-webkit-keyframes ripple {\r\n  0% {\r\n    -webkit-box-shadow: 0 0 0 0 rgba(207, 240, 252, 0.3), 0 0 0 1em rgba(207, 240, 252, 0.3), 0 0 0 3em rgba(207, 240, 252, 0.3), 0 0 0 5em rgba(207, 240, 252, 0.3);\r\n            box-shadow: 0 0 0 0 rgba(207, 240, 252, 0.3), 0 0 0 1em rgba(207, 240, 252, 0.3), 0 0 0 3em rgba(207, 240, 252, 0.3), 0 0 0 5em rgba(207, 240, 252, 0.3);\r\n  }\r\n  100% {\r\n    -webkit-box-shadow: 0 0 0 1em rgba(207, 240, 252, 0.3), 0 0 0 3em rgba(207, 240, 252, 0.3), 0 0 0 5em rgba(207, 240, 252, 0.3), 0 0 0 8em rgba(207, 240, 252, 0);\r\n            box-shadow: 0 0 0 1em rgba(207, 240, 252, 0.3), 0 0 0 3em rgba(207, 240, 252, 0.3), 0 0 0 5em rgba(207, 240, 252, 0.3), 0 0 0 8em rgba(207, 240, 252, 0);\r\n\r\n  }\r\n}\r\n@keyframes ripple {\r\n  0% {\r\n    -webkit-box-shadow: 0 0 0 0 rgba(207, 240, 252, 0.3), 0 0 0 1em rgba(207, 240, 252, 0.3), 0 0 0 3em rgba(207, 240, 252, 0.3), 0 0 0 5em rgba(207, 240, 252, 0.3);\r\n            box-shadow: 0 0 0 0 rgba(207, 240, 252, 0.3), 0 0 0 1em rgba(207, 240, 252, 0.3), 0 0 0 3em rgba(207, 240, 252, 0.3), 0 0 0 5em rgba(207, 240, 252, 0.3);\r\n  }\r\n  100% {\r\n    -webkit-box-shadow: 0 0 0 1em rgba(207, 240, 252, 0.3), 0 0 0 3em rgba(207, 240, 252, 0.3), 0 0 0 5em rgba(207, 240, 252, 0.3), 0 0 0 8em rgba(207, 240, 252, 0);\r\n            box-shadow: 0 0 0 1em rgba(207, 240, 252, 0.3), 0 0 0 3em rgba(207, 240, 252, 0.3), 0 0 0 5em rgba(207, 240, 252, 0.3), 0 0 0 8em rgba(207, 240, 252, 0);\r\n  }\r\n}\r\n.gif-img-outer{ float: left; width:100%; position: relative; overflow: hidden; max-height: 224px;}\r\n.gif-img-outer .circle-ripple{position: absolute; left: 35%; width: 140px; height: 170px; top: 140px;}\r\n.form-outer .slider.slider-horizontal .slider-tick-label-container .slider-tick-label{ width: 66px !important}\r\n@media (max-width: 767px){\r\n\r\n  .post-login-outer .post-login-inner form.form-outer{ width:100%;}\r\n  .post-login-outer img.img-greeting{ width:100%; margin:0;}\r\n  .post-login-outer {padding:10px;  display: inline-table;}\r\n  .post-login-outer .post-login-inner  form.form-outer{padding: 30px 15px;}\r\n  .post-login-outer .setup-payment{ width: 100%; padding: 25px 22px;}\r\n  .post-login-outer .slide-exp-inner-block{ width:100%; margin-right: 0; border:none;}\r\n  .post-login-outer .slide-inviteTeam-inner{ width: 100%;}\r\n  .post-login-outer span.border-bottom{ width: 100%;}\r\n  .post-login-outer .slide-inviteTeam-inner.your-business .form-group label.label-head{ width: 100%; margin-right: 0;}\r\n  .post-login-outer .slide-inviteTeam-inner.your-business .form-group label.label-head span.ast{ font-size: 13px; color: #fb545b;}\r\n  .post-login-outer .form-inner .slide-inviteTeam-inner.your-business .form-group select { width: 100%;}\r\n  .post-login-outer .slide-inviteTeam-inner.your-business .form-group .label-head  + label { width: 100%;}\r\n  .post-login-inner .slide-inviteTeam-inner.last-one .form-group{ width:100%;}\r\n  .slide-inviteTeam-inner.last-one label.selected-items img { border: 0; position: absolute; left: 12px; top: 8px;}\r\n  .slide-inviteTeam-inner.last-one label.selected-items {padding: 4px 8px 4px 45px; line-height: 19px; position: relative; min-height: 38px;}\r\n  .post-login-outer .close.btn-close{z-index: 99;}\r\n  .slide-inviteTeam-inner .form-group  label.label-head{ margin-right: 10px; width: 50%;}\r\n  .slide-inviteTeam .form-group .label-head + label {width: 42%;}\r\n  .post-login-inner .form-inner .slide-inviteTeam-inner .form-group input.form-control{ margin-right: 10px;}\r\n  /* .post-login-inner .form-inner .slide-inviteTeam-inner .form-group select{ height: 34px !important;} */\r\n  .post-login-inner a.inviteUsers{ float: left; width: 100%; margin-top: 0px; margin-left: 5px;}\r\n  .rs-show{ display: block;}\r\n  .slide-exp-inner-block:nth-child(3){ margin-bottom: 40px;}\r\n  .slide-exp-inner-block:nth-child(4){ margin-bottom: 30px;}\r\n  .post-login-outer .alert.alert-danger.custom-alert {\r\n    width: 100% !important;\r\n    margin-left: 0 !important;\r\n  }\r\n  .slide-inviteTeam-inner form {\r\n      width: 95%;\r\n  }\r\n  .left-sec {\r\n      width: 50%;\r\n      margin-right: 10px;\r\n  }\r\n  .slide-inviteTeam-inner .form-group span.icon-close {\r\n      right: -15px;\r\n      bottom: 21px;\r\n  }\r\n  div.slider.slider-horizontal {\r\n      width: 100% !important;\r\n  }\r\n  span.payment-icons {right: 25px !important;}\r\n  div.selectize-wrapper.right-sec {\r\n      width: 42% !important;\r\n  }\r\n  .gif-img-outer .circle-ripple {left: 25%;}\r\n  .gif-img-outer {max-height: 100%;}\r\n  .slide-5 .slide-inviteTeam-inner label.selected-items-outer:nth-child(4) label.selected-items {\r\n      line-height: 30px;\r\n  }\r\n  .post-login-inner .form-inner .slide-inviteTeam-inner.your-business .form-group .select-wrapper:after {\r\n      right: 5px !important;\r\n  }\r\n  /* .form-outer .slider.slider-horizontal .slider-tick-label-container .slider-tick-label {\r\n      width: 47px !important;\r\n  } */\r\n  .text-skip{\r\n      position: relative;\r\n      top: 15px;\r\n  }\r\n  .selectize-wrapper{width:  100% !important;}\r\n  .form-outer .slider.slider-horizontal .slider-tick-label-container .slider-tick-label {\r\n      /* width: 66px !important; */\r\n      width: 18.5% !important;\r\n  }\r\n  .slide-inviteTeam-inner.your-business .form-group .label-head + span {\r\n      width: 100%;\r\n  }\r\n\r\n  .slide-inviteTeam-inner.your-business label.selected-items:hover { \r\n\r\n    background-color:#fff;\r\n    color: #808b99;\r\n    border: 1px solid #e5e5e5;\r\n  }\r\n  .slide-inviteTeam-inner.last-one label.selected-items:hover{ \r\n\r\n    background-color:#fff;\r\n    color: #808b99;\r\n    border: 1px solid #e5e5e5;\r\n  }\r\n  \r\n\r\n  .your-business div.selectize-wrapper.right-sec{width:100% !important }\r\n}\r\n@media (min-width: 1024px){\r\n\r\n  /* .slider.slider-horizontal .slider-tick-label-container .slider-tick-label{ display: inline !important; margin-right: 54px;}\r\n  .form-outer .slider.slider-horizontal .slider-tick-label-container{ margin-left: 0 !important}\r\n  .slider.slider-horizontal .slider-tick-label-container .slider-tick-label:nth-child(5){margin-right: 43px;} */\r\n}\r\n.error-mess{  position: absolute;  bottom:2px; font-size: 9px; color:#fc576b;}\r\n.error-mess i{ font-size: 12px; color:#fc576b; float: left;  margin-right: 5px;}\r\n.post-login-outer .alert.alert-danger.custom-alert{\r\n    width: 78%;\r\n    margin-left: 12%;\r\n    padding: 10px;\r\n    background-color: #feddde;\r\n    border: none;\r\n    margin-bottom: -6px;\r\n    margin-top: 10px;\r\n    float: left;\r\n    text-align: left;\r\n    position: relative;\r\n    border-radius: 0 !important;\r\n    color: #fb5f66!important;\r\n    font-size: 11px;\r\n}\r\n.post-login-outer .alert.alert-danger.custom-alert i{\r\n    font-size: 12px;\r\n    margin-right: 5px;\r\n    position: relative;\r\n    top: 1px;\r\n    float: left;\r\n}\r\n/* scrollbar */\r\n.scrollbar {\r\n    overflow-y: auto;\r\n    overflow-x: hidden; max-height: 250px;\r\n}\r\n.scrollbar::-webkit-scrollbar-track {\r\n    border-radius: 0;\r\n    background-color: #f5f5f5;\r\n}\r\n.scrollbar::-webkit-scrollbar {\r\n    width: 6px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.scrollbar::-webkit-scrollbar:horizontal {\r\n    height: 6px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.scrollbar::-webkit-scrollbar-thumb {\r\n    border-radius: 4px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n.post-login-inner .form-inner .slide-inviteTeam-inner.your-business .form-group .select-wrapper:after {\r\n    bottom: 20px;\r\n    right: 20px;\r\n}\r\n.setup-payment .cc-input input.cc-number::-webkit-input-placeholder,\r\n.setup-payment input.cc-name::-webkit-input-placeholder,\r\n.setup-payment input.cc-exp::-webkit-input-placeholder,\r\n.setup-payment input.cvv-number::-webkit-input-placeholder  {\r\n  color: #555;\r\n  opacity: 0.3;\r\n}\r\n.setup-payment .cc-input input.cc-number::-moz-placeholder,\r\n.setup-payment input.cc-name::-moz-placeholder,\r\n.setup-payment input.cc-exp::-moz-placeholder,\r\n.setup-payment input.cvv-number::-moz-placeholder  {\r\n  color: #555;\r\n  opacity: 0.3;\r\n}\r\n.setup-payment .cc-input input.cc-number:-ms-input-placeholder,\r\n.setup-payment input.cc-name::-ms-input-placeholder,\r\n.setup-payment input.cc-exp::-ms-input-placeholder,\r\n.setup-payment input.cvv-number::-ms-input-placeholder  {\r\n  color: #555;\r\n  opacity: 0.3;\r\n}\r\nspan.payment-icons {\r\n    position: absolute;\r\n    right: 110px;\r\n}\r\n.slide-inviteTeam-inner.your-business .form-group .slider.slider-horizontal{\r\n      margin-bottom: 20px !important;\r\n}\r\n.right-sec{\r\n    width: 31%;\r\n    float: left;\r\n    position: relative;\r\n}\r\n.right-sec-new{\r\n  width: 60%;\r\n  float: left;\r\n  position: relative; margin-bottom:15px; \r\n}\r\n.animate-right {\r\n  position: relative;\r\n  -webkit-animation: animateright 0.4s;\r\n          animation: animateright 0.4s\r\n}\r\n@-webkit-keyframes animateright {\r\n  from {\r\n    right: -300px;\r\n    opacity: 0\r\n  }\r\n  to {\r\n    right: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n@keyframes animateright {\r\n  from {\r\n    right: -300px;\r\n    opacity: 0\r\n  }\r\n  to {\r\n    right: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n.animate-left {\r\n  position: relative;\r\n  -webkit-animation: animateleft 0.4s;\r\n          animation: animateleft 0.4s\r\n}\r\n@-webkit-keyframes animateleft {\r\n  from {\r\n    left: -300px;\r\n    opacity: 0\r\n  }\r\n  to {\r\n    left: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n@keyframes animateleft {\r\n  from {\r\n    left: -300px;\r\n    opacity: 0\r\n  }\r\n  to {\r\n    left: 0;\r\n    opacity: 1\r\n  }\r\n}\r\n.ripple-dark {\r\n  position: relative;\r\n  overflow: hidden ;outline: none;\r\n}\r\n.ripple-dark:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);\r\n  background-repeat: no-repeat;\r\n  background-position: 50%;\r\n  -webkit-transform: scale(10, 10);\r\n          transform: scale(10, 10);\r\n  opacity: 0;\r\n  -webkit-transition: opacity 1s, -webkit-transform .5s;\r\n  transition: opacity 1s, -webkit-transform .5s;\r\n  transition: transform .5s, opacity 1s;\r\n  transition: transform .5s, opacity 1s, -webkit-transform .5s\r\n}\r\n.ripple-dark:active:after {\r\n  -webkit-transform: scale(0, 0);\r\n          transform: scale(0, 0);\r\n  opacity: .2;\r\n  -webkit-transition: 0s;\r\n  transition: 0s\r\n}\r\n/* @keyframes ripple {\r\n  0% {\r\n    transform: scale(0, 0);\r\n    opacity: 1;\r\n  }\r\n  20% {\r\n    transform: scale(25, 25);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale(40, 40);\r\n  }\r\n} */\r\nbutton:focus:not(:active)::after {\r\n  -webkit-animation: ripple 1s ease-out;\r\n          animation: ripple 1s ease-out;\r\n}\r\n.btn-red-rounded:active {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n}\r\n@media (min-width:375px) and (max-width:375px) {\r\n  /* div.slider.slider-horizontal .slider-tick-label-container .slider-tick-label {\r\n      margin-right: 13% !important;\r\n  } */\r\n\r\n}\r\n@media (min-width:375px) and (max-width:767px) {\r\n  .gif-img-outer .circle-ripple{left: 35%;\r\n    width: 180px;\r\n  }\r\n  /* .slider.slider-horizontal .slider-tick-label-container .slider-tick-label{ display: inline !important; margin-right: 17% !important;}\r\n  .form-outer .slider.slider-horizontal .slider-tick-label-container{ margin-left: 0 !important}\r\n  .slider.slider-horizontal .slider-tick-label-container .slider-tick-label:nth-child(5){margin-right: 43px;}\r\n  .slider.slider-horizontal .slider-tick-label-container .slider-tick-label:nth-child(6){margin-right: 0px;} */\r\n\r\n}\r\n@media (min-width:768px) and (max-width:768px) {\r\n  /* .form-outer .slider.slider-horizontal .slider-tick-label-container .slider-tick-label {\r\n      margin-right: 10px;\r\n  } */\r\n\r\n}\r\n/* custom selectize dropdown */\r\n.selectize-wrapper {\r\n        width: calc(100% - 37%);\r\n        float: left;\r\n    }\r\n.selectize-wrapper .selectize-control.single .selectize-input {\r\n        width: 100%;\r\n        border: none;\r\n        color: #526479;\r\n        font-size: 13px;\r\n        height: 32px!important;\r\n        border-bottom: 1px solid #b7daef!important;\r\n        padding: 0 5px;\r\n        outline: none;\r\n        border-radius: 0px;\r\n        margin-bottom: 15px;\r\n        background: transparent;\r\n        line-height: 36px;\r\n        -webkit-box-shadow: none;\r\n                box-shadow: none;\r\n        font-family: montserratlight;\r\n    }\r\n.selectize-wrapper .selectize-control.single .selectize-input input::-webkit-input-placeholder {\r\n      color: #526479 !important;\r\n      font-size: 13px;\r\n      font-style: normal;\r\n      font-family: montserratlight;\r\n    }\r\n.selectize-wrapper .selectize-control.single .selectize-input input::-moz-placeholder {\r\n      color: #526479 !important;\r\n      font-size: 13px;\r\n      font-style: normal;\r\n      font-family: montserratlight;\r\n    }\r\n.selectize-wrapper .selectize-control.single .selectize-input input:-ms-input-placeholder {\r\n      color: #526479 !important;\r\n      font-size: 13px;\r\n      font-style: normal;\r\n      font-family: montserratlight;\r\n    }\r\n.selectize-wrapper .selectize-control.single .selectize-input .item {\r\n        font-size: 13px;\r\n        font-family: montserratlight;\r\n        color: #62696d;\r\n    }\r\n.selectize-wrapper .selectize-control.single .selectize-input input{\r\n      width: 100% !important;\r\n    }\r\n.selectize-wrapper .selectize-dropdown-content {\r\n        overflow-y: auto;\r\n        overflow-x: hidden;\r\n        max-height: 200px;\r\n        background: #fff;\r\n        border: 1px solid #dae2e6 !important;\r\n    }\r\n.selectize-wrapper .selectize-dropdown-content .option {\r\n        font-size: 13px;\r\n        padding: 7px 10px;\r\n        font-family: montserratlight;\r\n        color: #526479;\r\n\r\n        /* position: relative;\r\n        display: block;\r\n        overflow: hidden;\r\n        width: 100%;\r\n        -webkit-box-sizing: border-box;\r\n        box-sizing: border-box;\r\n        -webkit-transition: 0.5s ease-in-out;\r\n        transition: 0.5s ease-in-out; */\r\n\r\n        display: block;\r\n        vertical-align: middle;\r\n        -webkit-transform: translateZ(0);\r\n        transform: translateZ(0);\r\n        -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n                box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n        -webkit-backface-visibility: hidden;\r\n        backface-visibility: hidden;\r\n        -moz-osx-font-smoothing: grayscale;\r\n        position: relative;\r\n        -webkit-transition-property: color;\r\n        transition-property: color;\r\n        -webkit-transition-duration: 0.5s;\r\n        transition-duration: 0.5s;\r\n\r\n    }\r\n.selectize-wrapper .selectize-dropdown-content .option:hover:after {\r\n        /* -webkit-transform: translateX(0);\r\n        transform: translateX(0); */\r\n\r\n        -webkit-transform: scaleX(1);\r\n        transform: scaleX(1);\r\n    }\r\n.selectize-wrapper .selectize-dropdown-content .option:after {\r\n        /* content: '';\r\n        position: absolute;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        background-color: #4aa3d7;\r\n        -webkit-transform: translateX(-100%);\r\n        transform: translateX(-100%); */\r\n\r\n\r\n        content: \"\";\r\n        position: absolute;\r\n        z-index: -1;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        background: #2098d1;\r\n        -webkit-transform: scaleX(0);\r\n        transform: scaleX(0);\r\n        -webkit-transform-origin: 0 50%;\r\n        transform-origin: 0 50%;\r\n        -webkit-transition-property: transform;\r\n        -webkit-transition-property: -webkit-transform;\r\n        transition-property: -webkit-transform;\r\n        transition-property: transform;\r\n        transition-property: transform, -webkit-transform;\r\n        -webkit-transition-duration: 0.3s;\r\n        transition-duration: 0.3s;\r\n        -webkit-transition-timing-function: ease-out;\r\n        transition-timing-function: ease-out;\r\n    }\r\n.selectize-wrapper .selectize-dropdown-content .option.active {\r\n        /* background-color: #4aa3d7;\r\n        color: #fff; */\r\n    }\r\n.selectize-wrapper .selectize-dropdown-content .option:hover {\r\n      color: #fff;\r\n  }\r\n.selectize-wrapper .selectize-control.single .selectize-input:after  {\r\n        font-family: Material Icons;\r\n        content: \"keyboard_arrow_down\";\r\n        color: #4aa3d7;\r\n        font-size: 14px;\r\n        position: absolute;\r\n        pointer-events: none;\r\n        right: 15px;\r\n        border: none;\r\n        top: 5px;\r\n        margin-top: -4px;\r\n    }\r\n.selectize-wrapper.right-sec-new .selectize-control .selectize-input:after  {\r\n      font-family: Material Icons;\r\n      content: \"keyboard_arrow_down\";\r\n      color: #4aa3d7;\r\n      font-size: 14px;\r\n      position: absolute;\r\n      pointer-events: none;\r\n      right: 5px;\r\n      border: none;\r\n      top: 5px;\r\n      margin-top: -4px;\r\n  }\r\n.selectize-wrapper input {\r\n        border: none;\r\n    }\r\n.selectize-dropdown {border: none !important; top: 33px !important; -webkit-box-shadow: 0 0 10px rgba(0,0,0,.15); box-shadow: 0 0 10px rgba(0,0,0,.15);}\r\n.selectize-dropdown-content{ overflow-y: auto;    overflow-x: hidden; max-height: 250px;}\r\n.selectize-dropdown-content::-webkit-scrollbar-track {\r\n        border-radius: 0;\r\n        background-color: #f5f5f5;\r\n    }\r\n.selectize-dropdown-content::-webkit-scrollbar {\r\n        width: 6px;\r\n        background-color: rgba(0, 0, 0, 0.2);\r\n    }\r\n.selectize-dropdown-content::-webkit-scrollbar:horizontal {\r\n        height: 6px;\r\n        background-color: rgba(0, 0, 0, 0.2);\r\n    }\r\n.selectize-dropdown-content::-webkit-scrollbar-thumb {\r\n        border-radius: 4px;\r\n        background-color: rgba(0, 0, 0, 0.2);\r\n    }\r\n.selectize-wrapper.right-sec{ width:31% !important;}\r\n.selectize-wrapper.right-sec .selectize-control.single .selectize-input{ height: 30px !important; line-height: 30px !important; margin-bottom: 10px !important;}\r\n.selectize-wrapper.right-sec .selectize-dropdown{ top:29px !important;}\r\n/* html *,\r\n    html *:before,\r\n    html *:after {\r\n      -webkit-box-sizing: border-box;\r\n      box-sizing: border-box;\r\n      -webkit-transition: 0.5s ease-in-out;\r\n      transition: 0.5s ease-in-out;\r\n    } */\r\n.selectize-wrapper .selectize-dropdown .active {\r\n        background-color: #2098d1;\r\n         color: #fff !important;\r\n    }\r\n/* *:before, *:after {\r\n        z-index: -1;\r\n    } */\r\n/* end: choose template selectize dropdown */\r\n.slider.slider-horizontal {\r\n    margin-top: 12px !important;\r\n    width: calc(100% - 37%) !important;\r\n    float: left;\r\n}\r\n.slider.slider-horizontal .slider-tick-label-container {\r\n    margin-top: 15px;\r\n    float: left;\r\n    width: 100%;\r\n    margin-left: -34.6px !important;\r\n}\r\n.slider.slider-horizontal .slider-tick, .slider.slider-horizontal .slider-handle {\r\n    margin-left: -5px !important;\r\n}\r\n[include*=\"form-input-select()\"] select[disabled], [include*=\"form-input-select()\"] select:disabled {\r\n  opacity: 0.4;\r\n  cursor: not-allowed;\r\n\r\n}\r\n[include*=\"form-input-select()\"] select:invalid {\r\n   color: #b0b5bb !important;\r\n  font-style: italic;\r\n  font-size: 13px !important;\r\n}\r\nselect option{ font-style: normal; color: #526479 ;}\r\n.post-login-outer h5 {\r\n  font-size: 16px;\r\n  color: #555555;\r\n  font-family: montserratlight;\r\n  margin-top: 0px;\r\n  margin-bottom: 10px;\r\n}\r\n.selectize-control.single .selectize-input input{ pointer-events: none;}\r\n.select-roll-color{color: #b0b5bb !important;}\r\n.post-login-outer .slide-inviteTeam-inner.your-business .form-group label.label-head span.ast{ font-size: 13px; color: #fb545b;}\r\n.post-login-outer .slide-inviteTeam.slide-3 .alert.alert-danger.custom-alert{ width: 100%;  margin-left: 0;}\r\n.selectize-wrapper.right-sec-new .selectize-control .selectize-input {\r\n  width: 100%;\r\n  border: none;\r\n  color: #526479;\r\n  font-size: 13px;\r\n  height: auto !important;\r\n  border-bottom: 1px solid #b7daef!important;\r\n  padding: 0 5px;\r\n  outline: none;\r\n  border-radius: 0px;\r\n  background: transparent;\r\n  line-height: 30px;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  font-family: montserratlight;\r\n}\r\n.selectize-wrapper.right-sec-new .selectize-control .selectize-input input::-webkit-input-placeholder {\r\ncolor: #afb3b9 !important;\r\nfont-size: 13px;\r\nfont-style: normal;\r\nfont-family: montserratlight;\r\n}\r\n.selectize-wrapper.right-sec-new .selectize-control .selectize-input input::-moz-placeholder {\r\ncolor: #afb3b9 !important;\r\nfont-size: 13px;\r\nfont-style: normal;\r\nfont-family: montserratlight;\r\n}\r\n.selectize-wrapper.right-sec-new .selectize-control .selectize-input input:-ms-input-placeholder {\r\ncolor: #afb3b9 !important;\r\nfont-size: 13px;\r\nfont-style: normal;\r\nfont-family: montserratlight;\r\n}\r\n.selectize-wrapper.right-sec-new .selectize-control .selectize-input .item {\r\n  background-color: #fff !important;\r\n    border: none;\r\n    color: #808b99 !important;\r\n    border-radius: 20px;\r\n    padding: 3px 12px 3px 10px;\r\n    font-size: 11px;\r\n    vertical-align: middle;\r\n    line-height: normal;\r\n    border: 1px solid #e5e5e5;\r\n    cursor: pointer;\r\n    font-family: montserratlight;\r\n    font-weight: normal;\r\n    -webkit-transition: 0.2s ease-in-out;\r\n    transition: 0.2s ease-in-out;\r\n}\r\n.selectize-wrapper.right-sec-new .selectize-control.multi .selectize-input [data-value]{\r\n  background-color: #fff !important;\r\n  border: none;\r\n  color: #808b99 !important;\r\n  border-radius: 20px;\r\n  padding: 3px 12px 3px 10px;\r\n  font-size: 11px;\r\n  vertical-align: middle;\r\n  line-height: normal;\r\n  border: 1px solid #e5e5e5;\r\n  cursor: pointer;\r\n  font-family: montserratlight;\r\n  font-weight: normal;\r\n  -webkit-transition: 0.2s ease-in-out;\r\n  transition: 0.2s ease-in-out;\r\n  background-image:initial !important; \r\n  -webkit-box-shadow: none !important; \r\n          box-shadow: none !important;\r\n  text-shadow: none !important;\r\n}\r\n/* .selectize-wrapper.right-sec-new .selectize-control .selectize-input input{\r\nwidth: initial !important;\r\n} */\r\n.selectize-wrapper.right-sec-new .selectize-dropdown {border: none !important; top:inherit !important; -webkit-box-shadow: 0 0 10px rgba(0,0,0,.15); box-shadow: 0 0 10px rgba(0,0,0,.15); margin-top:-6px;}\r\n.selectize-control.multi .selectize-input.has-items {padding: 0 !important;}"

/***/ }),

/***/ "./src/app/site/components/+dashboard/post-signup/post-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"postLogin\" class=\"col-md-12 col-sm-12 col-xs-12 post-login-outer\">\r\n  <!--<button class=\"close btn-close\" id=\"signup-close\" type=\"button\" (click)=\"close()\"><i class=\"material-icons\">close</i>\r\n  </button>-->\r\n  <div class=\"post-login-inner\">\r\n    <!--<div class=\"col-md-12 col-sm-12 col-xs-12 np\">-->\r\n    <form class=\"form-outer\">\r\n      <div class=\"form-inner\">\r\n\r\n        <!-- start slide welcome -->\r\n        <div id=\"welcome\" class=\"slide-outer slide-welcome slide-1 animate-right\" data-slide=\"1\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\">\r\n            <h3 class=\"heading\">Welcome to Outgrow</h3>\r\n            <h5>Check out this quick 90 seconds video on how to use Outgrow</h5>\r\n            <!-- <span class=\"sub-heading\">Know how outgrow works for you</span> -->\r\n            <div class=\"video-outer\">\r\n              <div class=\"embed-responsive embed-responsive-16by9\">\r\n                <iframe *ngIf=\"showYoutube\" src=\"https://www.youtube.com/embed/NWep-z09ebE?rel=0&amp;controls=0&amp;showinfo=0\" frameborder=\"0\"\r\n                  allowfullscreen></iframe>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\">\r\n              <!-- <a href=\"javascript:void(0);\" class=\"text-skip\">Skip</a> -->\r\n              <button type=\"button\" class=\"btn btn-red-rounded btn-hover btn-next ripple-dark\">Next Step\r\n                <i class=\"material-icons\">keyboard_arrow_right</i>\r\n              </button>\r\n            </div>\r\n            <div class=\"result-carousal\">\r\n              <!-- <div class=\"full-width np text-center\">Question 1 of 3</div> -->\r\n              <span class=\"pagination-circle active\" data-question=\"1\">&nbsp;</span>\r\n              <span *ngIf=\"canInviteUsers\" class=\"pagination-circle\" data-question=\"2\">&nbsp;</span>\r\n              <span class=\"pagination-circle\" data-question=\"3\">&nbsp;</span>\r\n              <span class=\"pagination-circle\" data-question=\"4\">&nbsp;</span>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!-- end slide welcome -->\r\n\r\n        <!-- start slide inviteTeam -->\r\n        <div class=\"slide-outer slide-inviteTeam slide-2 hide\" data-slide=\"2\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np text-center \">\r\n            <h3 class=\"heading\">Invite your team</h3>\r\n            <div *ngIf=\"isError\" class=\"alert alert-danger custom-alert\">\r\n              <i class=\"material-icons\">report_problem</i>\r\n              <span id=\"server-error-msg\">Please fix the errors to proceed</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"!isError && !(currentCompanyUsers.length < featureAuthService.features.users-1 || featureAuthService.features.users==-1)\"\r\n              class=\"alert alert-danger custom-alert\">\r\n              <i class=\"material-icons\">report_problem</i>\r\n              <span>You can only invite {{featureAuthService.features.users -1}} users on this account</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np slide-inviteTeam-inner \">\r\n              <form [formGroup]=\"userInviteForm\" [autocomplete]=\"'off'\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"label-head\">Email</label>\r\n                  <label class=\"label-head\">Role</label>\r\n                </div>\r\n                <div formArrayName=\"users\">\r\n                  <div *ngFor=\"let user of inviteUsers; let i=index;\" class=\"form-group\">\r\n                    <div *ngIf=\"!user.hide\" [formGroupName]=\"i\">\r\n                      <div class=\"left-sec\">\r\n                        <input class=\"form-control\" name=\"email\" formControlName=\"email\" [placeholder]=\"user.placeholder\" tabindex=\"1\" type=\"text\"\r\n                          [(ngModel)]=\"inviteUsers[i].email\" autocomplete=\"off\">\r\n                        <div class=\"error-mess\" *ngIf=\"userInviteForm.controls.users.controls[i].controls.email.dirty &&\r\n                                userInviteForm.controls.users.controls[i].controls?.email?.errors?.duplicate &&\r\n                                (!userInviteForm.controls.users.controls[i].controls?.email?.errors?.pattern)\">Duplicate Email\r\n                        </div>\r\n                        <div class=\"error-mess\" *ngIf=\"slideNo===2 && userInviteForm.controls.users.controls[i].controls.email.dirty\r\n                          && userInviteForm.controls.users.controls[i].controls?.email?.errors?.emailPattern\">\r\n                          Invalid Email\r\n                        </div>\r\n                        <div class=\"error-mess\" *ngIf=\"userInviteForm.controls.users.controls[i].controls.email.dirty &&\r\n                               (!userInviteForm.controls.users.controls[i].controls?.email?.errors?.emailPattern) &&\r\n                          (userInviteForm.controls.users.controls[i].controls?.email?.errors?.required)\r\n                          && (inviteUsers[i].role && inviteUsers[i].role!=='select')\">\r\n                          Please enter an email\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"selectize-wrapper right-sec\" include=\"form-input-select()\">\r\n                        <select [id]=\"'role'+i\" placeholder=\"Select role\">\r\n                          <option [value]=\"'select'\">Select role</option>\r\n                          <option [value]=\"'MANAGER'\">Manager</option>\r\n                          <option [value]=\"'ADMIN'\">Admin</option>\r\n                        </select>\r\n                        <div class=\"error-mess\" *ngIf=\"inviteUsers[i].showError && inviteUsers[i].email &&\r\n                                (!(inviteUsers[i].role) || inviteUsers[i].role==='select')\">\r\n                          Please select a valid role\r\n                        </div>\r\n                        <span class=\"icon-close\" style=\"cursor:pointer\">\r\n                          <i class=\"material-icons\" (click)=\"deleteTextbox(i)\">close</i>\r\n                        </span>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </form>\r\n            </div>\r\n            <a href=\"javascript:void(0);\" [ngClass]=\"{'disable-tag': !(currentCompanyUsers.length < featureAuthService.features.users-1 || featureAuthService.features.users==-1)}\"\r\n              class=\"inviteUsers\" (click)=\"addTextbox()\">\r\n              <i class=\"material-icons\">add</i> Invite More Users\r\n            </a>\r\n\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\">\r\n              <button type=\"button\" class=\"btn btn-red-rounded btn-hover btn-next ripple-dark\">Next Step\r\n                <i class=\"material-icons\">keyboard_arrow_right</i>\r\n              </button>\r\n              <a href=\"javascript:void(0);\" (click)=\"skipSlide()\" class=\"text-skip\">Skip</a>\r\n            </div>\r\n            <div class=\"result-carousal\">\r\n              <!-- <div class=\"full-width np text-center\">Question 1 of 3</div> -->\r\n              <span class=\"pagination-circle\" data-question=\"1\">&nbsp;</span>\r\n              <span *ngIf=\"canInviteUsers\" class=\"pagination-circle active\" data-question=\"2\">&nbsp;</span>\r\n              <span class=\"pagination-circle\" data-question=\"3\">&nbsp;</span>\r\n              <span class=\"pagination-circle\" data-question=\"4\">&nbsp;</span>\r\n              <!--<span class=\"pagination-circle\" data-question=\"5\">&nbsp;</span>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end slide inviteTeam -->\r\n\r\n        <!-- start slide  your business -->\r\n        <div class=\"slide-outer slide-inviteTeam slide-3 hide\" data-slide=\"3\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\">\r\n            <h3 class=\"heading\">We'd love to get to know you better</h3>\r\n            <div *ngIf=\"errorIntercomData\" class=\"alert alert-danger custom-alert\">\r\n              <i class=\"material-icons\">report_problem</i>\r\n              <span>Please provide your inputs for the mandatory fields</span>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np slide-inviteTeam-inner your-business\">\r\n              <div class=\"form-group\">\r\n                <label class=\"label-head\">Your Industry\r\n                </label>\r\n                <div class=\"selectize-wrapper right-sec-new\" include=\"form-input-select()\">\r\n                  <select id=\"selected-industry\" placeholder=\"Select your industry\" multiple>\r\n                    <option value=\"Auto\">Auto</option>\r\n                    <option value=\"Education\">Education</option>\r\n                    <option value=\"Finance\">Finance</option>\r\n                    <option value=\"Health & Fitness\">Health & Fitness</option>\r\n                    <option value=\"Legal\">Legal</option>\r\n                    <option value=\"Marketing & Advertising\">Marketing & Advertising</option>\r\n                    <option value=\"Publishing\">Publishing</option>\r\n                    <option value=\"Quintessential\">Quintessential</option>\r\n                    <option value=\"Real Estate & Construction\">Real Estate & Construction</option>\r\n                    <option value=\"Technology\">Technology</option>\r\n                    <option value=\"Travel\">Travel</option>\r\n                    <option value=\"TV and Entertainment\">TV and Entertainment</option>\r\n                    <option value=\"Trending\">Trending</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"label-head\">Your Company Size\r\n                  <span class=\"ast\">*</span>\r\n                </label>\r\n\r\n                <div class=\"selectize-wrapper right-sec\" include=\"form-input-select()\">\r\n                  <select id=\"company-size\" placeholder=\"Select company size\">\r\n                    <option value=\"select\">Select company size</option>\r\n                    <option value=\"1-5\">1-5</option>\r\n                    <option value=\"5-20\">5-20</option>\r\n                    <option value=\"20-50\">20-50</option>\r\n                    <option value=\"50-200\">50-200</option>\r\n                    <option value=\"200-1000\">200-1000</option>\r\n                    <option value=\"1000+\">1000+</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"label-head\">Where did you hear about us?\r\n                  <span class=\"ast\">*</span>\r\n                </label>\r\n                <span class=\"top-padding\" (click)=\"intercomDataSelected()\">\r\n\r\n                  <label class=\"selected-items-outer\">\r\n                    <input name=\"facebookGroup\" [(ngModel)]=\"facebookGroup\" type=\"checkbox\" id=\"1\">\r\n                    <label class=\"selected-items\" for=\"1\">Facebook</label>\r\n                  </label>\r\n\r\n                  <label class=\"selected-items-outer\">\r\n                    <input name=\"podcast\" [(ngModel)]=\"podcast\" type=\"checkbox\" id=\"2\">\r\n                    <label class=\"selected-items\" for=\"2\">Podcast</label>\r\n                  </label>\r\n\r\n                  <label class=\"selected-items-outer\">\r\n                    <input name=\"googleSearch\" [(ngModel)]=\"googleSearch\" type=\"checkbox\" id=\"3\">\r\n                    <label class=\"selected-items\" for=\"3\">Google</label>\r\n                  </label>\r\n\r\n                  <label class=\"selected-items-outer\">\r\n                    <input name=\"webinar\" [(ngModel)]=\"webinar\" type=\"checkbox\" id=\"4\">\r\n                    <label class=\"selected-items\" for=\"4\">Webinar</label>\r\n                  </label>\r\n\r\n                  <label class=\"selected-items-outer\">\r\n                    <input name=\"events\" [(ngModel)]=\"events\" type=\"checkbox\" id=\"5\">\r\n                    <label class=\"selected-items\" for=\"5\">Events</label>\r\n                  </label>\r\n\r\n                  <label class=\"selected-items-outer\">\r\n                    <input name=\"ourBlog\" [(ngModel)]=\"ourBlog\" type=\"checkbox\" id=\"6\">\r\n                    <label class=\"selected-items\" for=\"6\">Our blog</label>\r\n                  </label>\r\n\r\n                  <label class=\"selected-items-outer\">\r\n                    <input name=\"friend\" [(ngModel)]=\"friend\" type=\"checkbox\" id=\"7\">\r\n                    <label class=\"selected-items\" for=\"7\">Friend</label>\r\n                  </label>\r\n\r\n                  <label class=\"selected-items-outer\">\r\n                    <input name=\"sawSomeoneCalculator\" [(ngModel)]=\"sawSomeoneCalculator\" type=\"checkbox\" id=\"8\">\r\n                    <label class=\"selected-items\" for=\"8\">Saw someone's calculator</label>\r\n                  </label>\r\n\r\n                  <label class=\"selected-items-outer\">\r\n                    <input name=\"others\" [(ngModel)]=\"others\" type=\"checkbox\" id=\"9\">\r\n                    <label class=\"selected-items\" for=\"9\">Others</label>\r\n                  </label>\r\n\r\n                </span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\">\r\n              <button type=\"button\" class=\"btn btn-red-rounded btn-hover btn-next ripple-dark\">Next Step\r\n                <i class=\"material-icons\">keyboard_arrow_right</i>\r\n              </button>\r\n              <!-- <a href=\"javascript:void(0);\" (click)=\"skipSlide()\" class=\"text-skip\">Skip</a> -->\r\n            </div>\r\n            <div class=\"result-carousal\">\r\n              <!-- <div class=\"full-width np text-center\">Question 1 of 3</div> -->\r\n              <span class=\"pagination-circle\" data-question=\"1\">&nbsp;</span>\r\n              <span *ngIf=\"canInviteUsers\" class=\"pagination-circle\" data-question=\"2\">&nbsp;</span>\r\n              <span class=\"pagination-circle active\" data-question=\"3\">&nbsp;</span>\r\n              <span class=\"pagination-circle\" data-question=\"4\">&nbsp;</span>\r\n              <!--<span class=\"pagination-circle\" data-question=\"5\">&nbsp;</span>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end slide  your business -->\r\n\r\n        <!-- start slide  your business -->\r\n        <div class=\"slide-outer slide-inviteTeam slide-4 hide\" data-slide=\"4\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\">\r\n            <h3 class=\"heading\">What describes you best?</h3>\r\n\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np slide-inviteTeam-inner last-one\">\r\n              <div class=\"form-group\">\r\n                <label class=\"full-width\">\r\n                  <label class=\"selected-items-outer\">\r\n                    <input name=\"agency\" [(ngModel)]=\"define_agency\" type=\"checkbox\" id=\"11\">\r\n                    <label class=\"selected-items\" for=\"11\">\r\n                      <img src=\"https://s3.amazonaws.com/outgrow-assets/ic1.png\" alt=\"icon\"> Agency looking to work with Outgrow for clients</label>\r\n                  </label>\r\n                  <label class=\"selected-items-outer\">\r\n                    <input name=\"company\" [(ngModel)]=\"define_company\" type=\"checkbox\" id=\"22\">\r\n                    <label class=\"selected-items\" for=\"22\">\r\n                      <img src=\"https://s3.amazonaws.com/outgrow-assets/ic2.png\" alt=\"icon\"> Company looking to use Outgrow internally</label>\r\n                  </label>\r\n                  <!--<label class=\"selected-items-outer\">-->\r\n                  <!--<input name=\"leads\" [(ngModel)]=\"define_leads\" type=\"checkbox\" id=\"33\">-->\r\n                  <!--<label class=\"selected-items\" for=\"33\"><img-->\r\n                  <!--src=\"https://cdn.filestackcontent.com/BFNNqtQBSBm0ymHwlhI3\" alt=\"icon\"> Trying interactive-->\r\n                  <!--content for qualified leads</label>-->\r\n                  <!--</label>-->\r\n                  <label class=\"selected-items-outer\">\r\n                    <input name=\"testing\" [(ngModel)]=\"define_testing\" type=\"checkbox\" id=\"44\">\r\n                    <label class=\"selected-items\" for=\"44\">\r\n                      <img class=\"single-icon\" src=\"https://s3.amazonaws.com/outgrow-assets/ic4.png\" alt=\"icon\"> Just testing\r\n                    </label>\r\n                  </label>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\">\r\n              <button type=\"button\" class=\"btn btn-red-rounded btn-hover btn-next ripple-dark\" (click)=\"close()\">Finish\r\n              </button>\r\n            </div>\r\n            <div class=\"result-carousal\">\r\n              <!-- <div class=\"full-width np text-center\">Question 1 of 3</div> -->\r\n              <span class=\"pagination-circle\" data-question=\"1\">&nbsp;</span>\r\n              <span *ngIf=\"canInviteUsers\" class=\"pagination-circle\" data-question=\"2\">&nbsp;</span>\r\n              <span class=\"pagination-circle\" data-question=\"3\">&nbsp;</span>\r\n              <span class=\"pagination-circle active\" data-question=\"4\">&nbsp;</span>\r\n              <!--<span class=\"pagination-circle active\" data-question=\"5\">&nbsp;</span>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end slide  your business -->\r\n\r\n        <!-- end slide Select Your Experience -->\r\n      </div>\r\n    </form>\r\n    <!--</div>-->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/site/components/+dashboard/post-signup/post-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostSignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("./src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_cookie_service__ = __webpack_require__("./src/app/shared/services/cookie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostSignUpComponent = (function () {
    function PostSignUpComponent(fb, companyService, subDomainService, _membershipService, scriptService, cookieService, featureAuthService) {
        this.fb = fb;
        this.companyService = companyService;
        this.subDomainService = subDomainService;
        this._membershipService = _membershipService;
        this.scriptService = scriptService;
        this.cookieService = cookieService;
        this.featureAuthService = featureAuthService;
        this.inviteUsers = [];
        this.closePostLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.show = true;
        this.slideNo = 1;
        this.define_agency = false;
        this.define_company = false;
        this.define_leads = false;
        this.define_testing = false;
        this.selectedIndustry = [];
        this.showYoutube = true;
        this.googleSearch = false;
        this.sawSomeoneCalculator = false;
        this.facebookGroup = false;
        this.others = false;
        this.events = false;
        this.ourBlog = false;
        this.friend = false;
        this.podcast = false;
        this.webinar = false;
        this.errorIntercomData = false;
        this.scriptLoaded = false;
        this.isError = false;
        this.currentCompanyUsers = [];
        this.canInviteUsers = false;
        this.whereDidYouHearAboutUs = [];
    }
    PostSignUpComponent.prototype.ngOnInit = function () {
        var slideNo = this.cookieService.readCookie('slideNo');
        this.slideNo = parseInt(slideNo);
        this.currentPlan = this.subDomainService.currentCompany.billing.chargebee_plan_id;
        var currentCompany = this.subDomainService.currentCompany;
        // this.slideNo && this.slideNo > 0 && this.slideNo < 4 &&
        if (this.slideNo && this.slideNo > 0 && this.slideNo < 4) {
            jQuery('*[data-slide="' + this.slideNo + '"]').siblings().addClass('hide');
            //('hide');
            jQuery('*[data-slide="' + this.slideNo + '"]').removeClass('hide');
            jQuery('*[data-slide="' + this.slideNo + '"]').addClass('animate-right');
        }
        else {
            this.slideNo = 1;
        }
        // if ((currentCompany.is_appsumo_created && currentCompany.deal_refered == null) || currentCompany.agency) {
        //   this.canInviteUsers = false;
        // } else if {
        //   this.canInviteUsers = true
        // }
        if (currentCompany.agency || currentCompany.is_appsumo_created
            || currentCompany.deal_refered != null) {
            this.canInviteUsers = false;
        }
        else {
            this.canInviteUsers = true;
        }
        this.userInviteForm = this.fb.group({
            users: this.fb.array([
                this.getUserFields(),
                this.getUserFields(),
                this.getUserFields()
            ])
        });
        this.inviteUsers.push({
            email: '', role: '', placeholder: 'cmo@yourcompany.com',
            hide: false, showError: false
        });
        this.inviteUsers.push({
            email: '', role: '', placeholder: 'vpmarketing@yourcompany.com',
            hide: false, showError: false
        });
        this.inviteUsers.push({
            email: '', role: '', placeholder: 'digital@yourcompany.com',
            hide: false, showError: false
        });
        var self = this;
        jQuery(document).on('click', '.btn-next', function (e) {
            self.showYoutube = false;
            var result = true;
            if (self.slideNo != 4) {
                self.isError = false;
                self.errorIntercomData = false;
                if (self.slideNo === 2) {
                    self.userInviteForm.controls['users'].controls.forEach(function (control, index) {
                        control.controls['email'].markAsPristine();
                    });
                    result = self.inviteUsers.reduce(function (acc, user) {
                        if (user.email) {
                            acc.push(user);
                        }
                        return acc;
                    }, []).every(function (user) {
                        if (user.role)
                            return true;
                    });
                    for (var i = 0; i < self.inviteUsers.length; i++) {
                        var user = self.inviteUsers[i];
                        var control = self.userInviteForm.controls.users.controls[i].controls;
                        //role is valid but email is empty
                        if (user.role && user.role != 'select' && !user.email) {
                            self.isError = true;
                            control['email'].markAsDirty();
                            control['email'].setErrors({ required: true });
                        }
                        else if (user.email && (!user.role || user.role === 'select')) {
                            control['email'].markAsDirty();
                            self.inviteUsers[i].showError = true;
                            self.isError = true;
                            if (!self.validateEmail(control['email'].value)) {
                                control['email'].setErrors({ emailPattern: true });
                            }
                            if (self.duplicateVerifier(control, i)) {
                                control['email'].setErrors({ duplicate: true });
                            }
                        }
                        //email is entered(may not be valid) and role is valid
                        if (user.email && user.role && user.role !== 'select') {
                            self.inviteUsers[i].showError = false;
                            control['email'].markAsDirty();
                            if (!self.validateEmail(control['email'].value)) {
                                self.isError = true;
                                control['email'].setErrors({ emailPattern: true });
                            }
                            if (self.duplicateVerifier(control, i)) {
                                self.isError = true;
                                control['email'].setErrors({ duplicate: true });
                            }
                        }
                    }
                }
                if (self.slideNo === 3) {
                    self.getData();
                    if (self.whereDidYouHearAboutUs.length === 0) {
                        self.errorIntercomData = true;
                    }
                    if (!self.companySize || self.companySize === 'select') {
                        self.errorIntercomData = true;
                    }
                }
                if (!self.isError && result) {
                    if (self.slideNo === 1 && !self.canInviteUsers) {
                        self.nextSlide();
                        self.nextSlide();
                    }
                    else if (self.slideNo === 2) {
                        self.addTeammates();
                        self.nextSlide();
                    }
                    else if (self.slideNo === 3 && !self.errorIntercomData) {
                        self.saveDataToIntercom();
                        self.nextSlide();
                    }
                    else if (self.slideNo !== 3) {
                        self.nextSlide();
                    }
                }
            }
        });
        /*End of Next Prev Button Functionality */
        /*End of Question slider indication Funtionality */
    };
    PostSignUpComponent.prototype.nextSlide = function () {
        this.slideNo++;
        this.cookieService.createCookie('slideNo', this.slideNo + '', 7);
        // For Showing the slide of next step
        jQuery('*[data-slide="' + this.slideNo + '"]').siblings().addClass('hide');
        //('hide');
        jQuery('*[data-slide="' + this.slideNo + '"]').removeClass('hide');
        jQuery('*[data-slide="' + this.slideNo + '"]').addClass('animate-right');
    };
    PostSignUpComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        this.scriptService.load('selectize').then(function (data) {
            _this.scriptLoaded = true;
            jQuery('#selected-industry').selectize({});
            jQuery('#selected-industry')[0].selectize.on('blur', function () {
                console.log(jQuery("#selected-industry")[0].selectize.getValue());
                self.selectedIndustry = jQuery("#selected-industry")[0].selectize.getValue();
            });
            jQuery("#company-size").selectize({});
            jQuery("#company-size")[0].selectize.on('change', function () {
                self.companySize = jQuery("#company-size")[0].selectize.getValue();
                self.intercomDataSelected();
            });
            var _loop_1 = function (i) {
                jQuery("#role" + i).selectize({});
                jQuery('*[data-value="select"]').addClass('select-roll-color');
                jQuery("#role" + i)[0].selectize.on('change', function () {
                    self.inviteUsers[i].role = jQuery("#role" + i)[0].selectize.getValue();
                    jQuery('*[data-value="select"]').addClass('select-roll-color');
                });
            };
            for (var i = 0; i < _this.inviteUsers.length; i++) {
                _loop_1(i);
            }
            jQuery('.right-sec .selectize-input input').prop('disabled', true);
        });
        /*Question slider indication Functionality */
        jQuery('.pagination-circle').click(function (e) {
            var questionNumber = jQuery(this).data('question');
            self.showYoutube = questionNumber === 1 ? true : false;
            if (questionNumber < self.slideNo) {
                jQuery('*[data-slide="' + questionNumber + '"]').removeClass('animate-right');
                jQuery('*[data-slide="' + questionNumber + '"]').addClass('animate-left');
            }
            else {
                jQuery('*[data-slide="' + questionNumber + '"]').removeClass('animate-left');
                jQuery('*[data-slide="' + questionNumber + '"]').addClass('animate-right');
            }
            jQuery('*[data-slide="' + questionNumber + '"]')
                .removeClass('hide').siblings('div[class*="slide"]').addClass('hide');
            self.slideNo = questionNumber;
            self.cookieService.createCookie('slideNo', self.slideNo + '', 7);
        });
    };
    PostSignUpComponent.prototype.saveDataToIntercom = function () {
        window.Intercom('update', {
            'Company Size': this.companySize,
            'signup_source': this.whereDidYouHearAboutUs.toString(),
        });
    };
    PostSignUpComponent.prototype.getUserFields = function () {
        return this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')])]
        });
    };
    PostSignUpComponent.prototype.addTextbox = function () {
        var _this = this;
        this.currentCompanyUsers = this.inviteUsers.filter(function (user) { return !user.hide; });
        if (this.featureAuthService.features.users === -1 || this.currentCompanyUsers.length < this.featureAuthService.features.users - 1) {
            var control = this.userInviteForm.controls['users'];
            control.push(this.getUserFields());
            this.inviteUsers.push({
                email: '', role: '', placeholder: "Enter teammate's email id",
                hide: false, showError: false
            });
            var self_1 = this;
            setTimeout(function () {
                var index = _this.inviteUsers.length - 1;
                jQuery("#role" + index).selectize({});
                jQuery('*[data-value="select"]').addClass('select-roll-color');
                jQuery('.right-sec .selectize-input input').prop('disabled', true);
                jQuery("#role" + index)[0].selectize.on('change', function () {
                    self_1.inviteUsers[index].role = jQuery("#role" + index)[0].selectize.getValue();
                    jQuery('*[data-value="select"]').addClass('select-roll-color');
                });
            }, 50);
        }
    };
    PostSignUpComponent.prototype.addTeammates = function () {
        var users = this.inviteUsers.filter(function (user) {
            if (user.hide === false)
                return user.email && user.role;
        }).map(function (user) {
            if (user.email && user.role) {
                return {
                    email: user.email,
                    role: user.role
                };
            }
        });
        this.companyService.addMultipleUser(users, this.subDomainService.subDomain.company_id)
            .subscribe(function (success) {
        });
    };
    PostSignUpComponent.prototype.deleteTextbox = function (index) {
        var control = this.userInviteForm.controls['users'];
        control.controls[index].setErrors(null);
        control.controls[index].reset();
        this.inviteUsers[index].hide = true;
        this.inviteUsers[index].role = '';
        this.inviteUsers[index].email = '';
        this.currentCompanyUsers = this.inviteUsers.filter(function (user) { return !user.hide; });
    };
    PostSignUpComponent.prototype.duplicateVerifier = function (control, index) {
        if (this && this.userInviteForm && control) {
            var value = control;
            if (typeof (control) == 'string')
                value = control.trim();
            var regex = new RegExp("(\"email\":\"" + value + "\")", 'igm');
            var st = JSON.stringify(this.userInviteForm.value);
            var matches = st.match(regex);
            return (matches && matches.length > 1 && this.validateEmail(control));
        }
    };
    PostSignUpComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    PostSignUpComponent.prototype.skipSlide = function () {
        this.slideNo++;
        this.cookieService.createCookie('slideNo', this.slideNo + '', 7);
        // For Showing the slide of next step
        jQuery('*[data-slide="' + this.slideNo + '"]').addClass('animate-right');
        jQuery('*[data-slide="' + this.slideNo + '"]').siblings().addClass('hide');
        jQuery('*[data-slide="' + this.slideNo + '"]').removeClass('hide');
    };
    PostSignUpComponent.prototype.getData = function () {
        this.whereDidYouHearAboutUs = [];
        if (this.facebookGroup)
            this.whereDidYouHearAboutUs.push('facebook');
        if (this.googleSearch)
            this.whereDidYouHearAboutUs.push('google');
        if (this.podcast)
            this.whereDidYouHearAboutUs.push('Podcast');
        if (this.sawSomeoneCalculator)
            this.whereDidYouHearAboutUs.push("Saw Someone's Calculator");
        if (this.others)
            this.whereDidYouHearAboutUs.push('Others');
        if (this.events)
            this.whereDidYouHearAboutUs.push('events');
        if (this.ourBlog)
            this.whereDidYouHearAboutUs.push('Our Blog');
        if (this.friend)
            this.whereDidYouHearAboutUs.push('Friend');
        if (this.webinar)
            this.whereDidYouHearAboutUs.push('Webinar');
    };
    PostSignUpComponent.prototype.close = function () {
        var data = [];
        if (this.define_agency) {
            data.push('Agency looking to work with Outgrow for Clients');
        }
        if (this.define_company) {
            data.push('Company looking to use Outgrow internally');
        }
        if (this.define_leads) {
            data.push('Trying interactive content for qualified leads');
        }
        if (this.define_testing) {
            data.push('Just Testing');
        }
        window.Intercom('update', {
            signup_what_defines_you_best: data.toString()
        });
        console.log('industries', this.selectedIndustry);
        this.closePostLogin.emit({ industries: this.selectedIndustry });
        this.cookieService.createCookie('slideNo', '', -1);
    };
    PostSignUpComponent.prototype.intercomDataSelected = function () {
        var _this = this;
        setTimeout(function () {
            if ((_this.facebookGroup || _this.podcast || _this.googleSearch || _this.webinar || _this.events ||
                _this.ourBlog || _this.friend || _this.sawSomeoneCalculator || _this.others) &&
                (!_this.companySize || !(_this.companySize === 'select'))) {
                _this.errorIntercomData = false;
            }
        }, 10);
    };
    return PostSignUpComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], PostSignUpComponent.prototype, "closePostLogin", void 0);
PostSignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'og-post-login',
        template: __webpack_require__("./src/app/site/components/+dashboard/post-signup/post-signup.component.html"),
        styles: [__webpack_require__("./src/app/site/components/+dashboard/post-signup/post-signup.component.css"), __webpack_require__("./src/assets/template/css/selectize.default.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* CompanyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["h" /* SubDomainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services__["h" /* SubDomainService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* MembershipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* MembershipService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["f" /* Script */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services__["f" /* Script */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_cookie_service__["a" /* CookieService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["d" /* FeatureAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services__["d" /* FeatureAuthService */]) === "function" && _h || Object])
], PostSignUpComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=post-signup.component.js.map

/***/ }),

/***/ "./src/assets/fonts/templateFonts/fonts_varient/Orkney.css":
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n    font-family: 'Orkney';\r\n    src: url('orkney-regular-webfont.eot');\r\n    src: url('orkney-regular-webfont.eot?#iefix') format('embedded-opentype'),\r\n         url('orkney-regular-webfont.woff2') format('woff2'),\r\n         url('orkney-regular-webfont.woff') format('woff'),\r\n         url('orkney-regular-webfont.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Orkney-Light';\r\n    src: url('orkney-light-webfont.eot');\r\n    src: url('orkney-light-webfont.eot?#iefix') format('embedded-opentype'),\r\n         url('orkney-light-webfont.woff2') format('woff2'),\r\n         url('orkney-light-webfont.woff') format('woff'),\r\n         url('orkney-light-webfont.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Orkney-Bold';\r\n    src: url('orkney-bold-webfont.eot');\r\n    src: url('orkney-bold-webfont.eot?#iefix') format('embedded-opentype'),url('orkney-bold-webfont.woff2') format('woff2'),url('orkney-bold-webfont.woff') format('woff'),\r\n         url('orkney-bold-webfont.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/assets/template/css/selectize.default.css":
/***/ (function(module, exports) {

module.exports = "/**\r\n * selectize.default.css (v0.12.1) - Default Theme\r\n * Copyright (c) 2013–2015 Brian Reavis & contributors\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this\r\n * file except in compliance with the License. You may obtain a copy of the License at:\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software distributed under\r\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF\r\n * ANY KIND, either express or implied. See the License for the specific language\r\n * governing permissions and limitations under the License.\r\n *\r\n * @author Brian Reavis <brian@thirdroute.com>\r\n */\r\n.selectize-control.plugin-drag_drop.multi > .selectize-input > div.ui-sortable-placeholder {\r\n  visibility: visible !important;\r\n  background: #f2f2f2 !important;\r\n  background: rgba(0, 0, 0, 0.06) !important;\r\n  border: 0 none !important;\r\n  -webkit-box-shadow: inset 0 0 12px 4px #ffffff;\r\n  box-shadow: inset 0 0 12px 4px #ffffff;\r\n}\r\n.selectize-control.plugin-drag_drop .ui-sortable-placeholder::after {\r\n  content: '!';\r\n  visibility: hidden;\r\n}\r\n.selectize-control.plugin-drag_drop .ui-sortable-helper {\r\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n.selectize-dropdown-header {\r\n  position: relative;\r\n  padding: 5px 8px;\r\n  border-bottom: 1px solid #d0d0d0;\r\n  background: #f8f8f8;\r\n  border-radius: 3px 3px 0 0;\r\n}\r\n.selectize-dropdown-header-close {\r\n  position: absolute;\r\n  right: 8px;\r\n  top: 50%;\r\n  color: #303030;\r\n  opacity: 0.4;\r\n  margin-top: -12px;\r\n  line-height: 20px;\r\n  font-size: 20px !important;\r\n}\r\n.selectize-dropdown-header-close:hover {\r\n  color: #000000;\r\n}\r\n.selectize-dropdown.plugin-optgroup_columns .optgroup {\r\n  border-right: 1px solid #f2f2f2;\r\n  border-top: 0 none;\r\n  float: left;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n.selectize-dropdown.plugin-optgroup_columns .optgroup:last-child {\r\n  border-right: 0 none;\r\n}\r\n.selectize-dropdown.plugin-optgroup_columns .optgroup:before {\r\n  display: none;\r\n}\r\n.selectize-dropdown.plugin-optgroup_columns .optgroup-header {\r\n  border-top: 0 none;\r\n}\r\n.selectize-control.plugin-remove_button [data-value] {\r\n  position: relative;\r\n  padding-right: 24px !important;\r\n}\r\n.selectize-control.plugin-remove_button [data-value] .remove {\r\n  z-index: 1;\r\n  /* fixes ie bug (see #392) */\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 17px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 12px;\r\n  color: inherit;\r\n  text-decoration: none;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  padding: 2px 0 0 0;\r\n  border-left: 1px solid #0073bb;\r\n  border-radius: 0 2px 2px 0;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n.selectize-control.plugin-remove_button [data-value] .remove:hover {\r\n  background: rgba(0, 0, 0, 0.05);\r\n}\r\n.selectize-control.plugin-remove_button [data-value].active .remove {\r\n  border-left-color: #00578d;\r\n}\r\n.selectize-control.plugin-remove_button .disabled [data-value] .remove:hover {\r\n  background: none;\r\n}\r\n.selectize-control.plugin-remove_button .disabled [data-value] .remove {\r\n  border-left-color: #aaaaaa;\r\n}\r\n.selectize-control {\r\n  position: relative;\r\n}\r\n.selectize-dropdown,\r\n.selectize-input,\r\n.selectize-input input {\r\n  color: #303030;\r\n  font-family: inherit;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  -webkit-font-smoothing: inherit;\r\n}\r\n.selectize-input,\r\n.selectize-control.single .selectize-input.input-active {\r\n  background: #ffffff;\r\n  cursor: text;\r\n  display: inline-block;\r\n}\r\n.selectize-input {\r\n  border: 1px solid #d0d0d0;\r\n  padding: 8px 8px;\r\n  display: inline-block;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n  z-index: 1;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  border-radius: 3px;\r\n}\r\n.selectize-control.multi .selectize-input.has-items {\r\n  padding: 5px 8px 2px;\r\n}\r\n.selectize-input.full {\r\n  background-color: #ffffff;\r\n}\r\n.selectize-input.disabled,\r\n.selectize-input.disabled * {\r\n  cursor: default !important;\r\n}\r\n.selectize-input.focus {\r\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\r\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);\r\n}\r\n.selectize-input.dropdown-active {\r\n  border-radius: 3px 3px 0 0;\r\n}\r\n.selectize-input > * {\r\n  vertical-align: baseline;\r\n  display: -moz-inline-stack;\r\n  display: inline-block;\r\n  zoom: 1;\r\n  *display: inline;\r\n}\r\n.selectize-control.multi .selectize-input > div {\r\n  cursor: pointer;\r\n  margin: 0 3px 3px 0;\r\n  padding: 2px 6px;\r\n  background: #1da7ee;\r\n  color: #ffffff;\r\n  border: 1px solid #0073bb;\r\n}\r\n.selectize-control.multi .selectize-input > div.active {\r\n  background: #92c836;\r\n  color: #ffffff;\r\n  border: 1px solid #00578d;\r\n}\r\n.selectize-control.multi .selectize-input.disabled > div,\r\n.selectize-control.multi .selectize-input.disabled > div.active {\r\n  color: #ffffff;\r\n  background: #d2d2d2;\r\n  border: 1px solid #aaaaaa;\r\n}\r\n.selectize-input > input {\r\n  display: inline-block !important;\r\n  padding: 0 !important;\r\n  min-height: 0 !important;\r\n  max-height: none !important;\r\n  max-width: 100% !important;\r\n  margin: 0 1px !important;\r\n  text-indent: 0 !important;\r\n  border: 0 none !important;\r\n  background: none !important;\r\n  line-height: inherit !important;\r\n  -webkit-user-select: auto !important;\r\n  -webkit-box-shadow: none !important;\r\n  box-shadow: none !important;\r\n}\r\n.selectize-input > input::-ms-clear {\r\n  display: none;\r\n}\r\n.selectize-input > input:focus {\r\n  outline: none !important;\r\n}\r\n.selectize-input::after {\r\n  content: ' ';\r\n  display: block;\r\n  clear: left;\r\n}\r\n.selectize-input.dropdown-active::before {\r\n  content: ' ';\r\n  display: block;\r\n  position: absolute;\r\n  background: #f0f0f0;\r\n  height: 1px;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.selectize-dropdown {\r\n  position: absolute;\r\n  z-index: 10;\r\n  border: 1px solid #d0d0d0;\r\n  background: #ffffff;\r\n  margin: -1px 0 0 0;\r\n  border-top: 0 none;\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  border-radius: 0 0 3px 3px;\r\n}\r\n.selectize-dropdown [data-selectable] {\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n}\r\n.selectize-dropdown [data-selectable] .highlight {\r\n  background: rgba(125, 168, 208, 0.2);\r\n  border-radius: 1px;\r\n}\r\n.selectize-dropdown [data-selectable],\r\n.selectize-dropdown .optgroup-header {\r\n  padding: 5px 8px;\r\n}\r\n.selectize-dropdown .optgroup:first-child .optgroup-header {\r\n  border-top: 0 none;\r\n}\r\n.selectize-dropdown .optgroup-header {\r\n  color: #303030;\r\n  background: #ffffff;\r\n  cursor: default;\r\n}\r\n.selectize-dropdown .active {\r\n  background-color: #f5fafd;\r\n  color: #495c68;\r\n}\r\n.selectize-dropdown .active.create {\r\n  color: #495c68;\r\n}\r\n.selectize-dropdown .create {\r\n  color: rgba(48, 48, 48, 0.5);\r\n}\r\n.selectize-dropdown-content {\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  max-height: 200px;\r\n}\r\n.selectize-control.single .selectize-input,\r\n.selectize-control.single .selectize-input input {\r\n  cursor: pointer;\r\n}\r\n.selectize-control.single .selectize-input.input-active,\r\n.selectize-control.single .selectize-input.input-active input {\r\n  cursor: text;\r\n}\r\n.selectize-control.single .selectize-input:after {\r\n  content: ' ';\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 15px;\r\n  margin-top: -3px;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 5px 5px 0 5px;\r\n  border-color: #808080 transparent transparent transparent;\r\n}\r\n.selectize-control.single .selectize-input.dropdown-active:after {\r\n  margin-top: -4px;\r\n  border-width: 0 5px 5px 5px;\r\n  border-color: transparent transparent #808080 transparent;\r\n}\r\n.selectize-control.rtl.single .selectize-input:after {\r\n  left: 15px;\r\n  right: auto;\r\n}\r\n.selectize-control.rtl .selectize-input > input {\r\n  margin: 0 4px 0 -2px !important;\r\n}\r\n.selectize-control .selectize-input.disabled {\r\n  opacity: 0.5;\r\n  background-color: #fafafa;\r\n}\r\n.selectize-control.multi .selectize-input.has-items {\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n.selectize-control.multi .selectize-input.disabled [data-value] {\r\n  color: #999;\r\n  text-shadow: none;\r\n  background: none;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n.selectize-control.multi .selectize-input.disabled [data-value],\r\n.selectize-control.multi .selectize-input.disabled [data-value] .remove {\r\n  border-color: #e6e6e6;\r\n}\r\n.selectize-control.multi .selectize-input.disabled [data-value] .remove {\r\n  background: none;\r\n}\r\n.selectize-control.multi .selectize-input [data-value] {\r\n  text-shadow: 0 1px 0 rgba(0, 51, 83, 0.3);\r\n  border-radius: 3px;\r\n  background-color: #1b9dec;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#1da7ee), to(#178ee9));\r\n  background-image: linear-gradient(to bottom, #1da7ee, #178ee9);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff1da7ee', endColorstr='#ff178ee9', GradientType=0);\r\n  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.2),inset 0 1px rgba(255,255,255,0.03);\r\n  box-shadow: 0 1px 0 rgba(0,0,0,0.2),inset 0 1px rgba(255,255,255,0.03);\r\n}\r\n.selectize-control.multi .selectize-input [data-value].active {\r\n  background-color: #0085d4;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#008fd8), to(#0075cf));\r\n  background-image: linear-gradient(to bottom, #008fd8, #0075cf);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff008fd8', endColorstr='#ff0075cf', GradientType=0);\r\n}\r\n.selectize-control.single .selectize-input {\r\n  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8);\r\n  box-shadow: 0 1px 0 rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8);\r\n  background-color: #f9f9f9;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fefefe), to(#f2f2f2));\r\n  background-image: linear-gradient(to bottom, #fefefe, #f2f2f2);\r\n  background-repeat: repeat-x;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffefefe', endColorstr='#fff2f2f2', GradientType=0);\r\n}\r\n.selectize-control.single .selectize-input,\r\n.selectize-dropdown.single {\r\n  border-color: #b8b8b8;\r\n}\r\n.selectize-dropdown .optgroup-header {\r\n  padding-top: 7px;\r\n  font-weight: bold;\r\n  font-size: 0.85em;\r\n}\r\n.selectize-dropdown .optgroup {\r\n  border-top: 1px solid #f0f0f0;\r\n}\r\n.selectize-dropdown .optgroup:first-child {\r\n  border-top: 0 none;\r\n}\r\n"

/***/ })

});